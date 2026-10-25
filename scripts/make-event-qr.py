"""Make the event QR code (SVG + 2000px PNG) and the A5 print PDF into <repo>/event.

Needs Python with: pip install segno pillow pymupdf.  Run: python scripts/make-event-qr.py .
import sys
from pathlib import Path

import fitz  # PyMuPDF
import segno
from PIL import Image

URL = "https://app.fightbaseapp.com/?lang=et"
repo = Path(sys.argv[1])
out = repo / "event"
out.mkdir(exist_ok=True)

qr = segno.make(URL, error="h", micro=False, boost_error=False)
print("QR version", qr.version, "error", qr.error)

# SVG: black on white, 4-module quiet zone.
qr.save(out / "fightbase-qr-et.svg", kind="svg", scale=10, border=4, dark="#000000", light="#ffffff", xmldecl=True)

# PNG exactly 2000x2000: whole-pixel modules, leftover pixels go to the white border (>= 4 modules).
matrix = [list(row) for row in qr.matrix]
n = len(matrix)
module = 2000 // (n + 8)
pad = (2000 - n * module) // 2
img = Image.new("1", (2000, 2000), 1)
px = img.load()
for y, row in enumerate(matrix):
    for x, dark in enumerate(row):
        if dark:
            for yy in range(pad + y * module, pad + (y + 1) * module):
                for xx in range(pad + x * module, pad + (x + 1) * module):
                    px[xx, yy] = 0
img.save(out / "fightbase-qr-et.png", dpi=(300, 300))
print("PNG module px", module, "border px", pad, "=", round(pad / module, 1), "modules")

# A5 PDF (148 x 210 mm).
FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_B = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
FONT_BLACK = "/System/Library/Fonts/Supplemental/Arial Black.ttf"
W, H = fitz.paper_size("a5")
doc = fitz.open()
page = doc.new_page(width=W, height=H)
for name, path in (("ar", FONT), ("arb", FONT_B), ("arblk", FONT_BLACK)):
    page.insert_font(fontname=name, fontfile=path)

FILES = {"ar": FONT, "arb": FONT_B, "arblk": FONT_BLACK}
METRICS = {k: fitz.Font(fontfile=v) for k, v in FILES.items()}

def centered(y, text, font, size, color=(0, 0, 0), height=None):
    """Draw each line centred; y is the top of the first line. Returns the bottom of the last line."""
    f = METRICS[font]
    line_h = size * 1.2
    for line in text.split("\n"):
        width = f.text_length(line, size)
        if width > W - 60:
            raise SystemExit(f"text does not fit: {line!r}")
        page.insert_text(((W - width) / 2, y + size * f.ascender), line, fontname=font, fontsize=size, color=color)
        y += line_h
    return y

TOP = 74  # pushes the whole block down so it sits centred on the page
logo_w = 150
logo_h = logo_w / 4
page.insert_image(fitz.Rect((W - logo_w) / 2, TOP, (W + logo_w) / 2, TOP + logo_h), filename=str(repo / "logo.png"))

y = centered(TOP + 66, "POKSI- JA VÕITLUSSPORDIKLUBIDELE", "arb", 10.5, color=(0.35, 0.35, 0.35))
y = centered(y + 6, "Halda oma klubi\ntelefonist.", "arblk", 28, height=84)

# QR as vector squares, quiet zone included in the white area.
qr_size = 210
cell = qr_size / (n + 8)
qx, qy = (W - qr_size) / 2, y + 14
shape = page.new_shape()
# One rectangle per horizontal run of dark modules, so viewers show no seams between squares.
for r, row in enumerate(matrix):
    c = 0
    while c < n:
        if row[c]:
            end = c
            while end + 1 < n and row[end + 1]:
                end += 1
            shape.draw_rect(fitz.Rect(qx + (c + 4) * cell, qy + (r + 4) * cell, qx + (end + 5) * cell, qy + (r + 5) * cell))
            c = end + 1
        else:
            c += 1
shape.finish(color=None, fill=(0, 0, 0), width=0)
shape.commit()

y = centered(qy + qr_size + 14, "Treener või klubi omanik?\nSkänni ja loo oma klubi.", "arb", 14, height=46)
centered(y + 6, "Тренер или владелец клуба? Сканируйте и создайте свой клуб.", "ar", 9, color=(0.3, 0.3, 0.3), height=28)

doc.set_metadata({"title": "FightBase — Halda oma klubi telefonist", "author": "FightBase"})
doc.subset_fonts()
doc.save(out / "fightbase-a5-et.pdf", garbage=4, deflate=True)
print("QR on paper:", round(qr_size / 72 * 25.4), "mm wide")
