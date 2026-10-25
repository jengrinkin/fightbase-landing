# FightBase landing — progress

_Last updated: 2026-10-25_

## Done
- 2026-10-25 — All 7 signup buttons point to https://app.fightbaseapp.com/signup (ET/RU/EN).
  Merged to main (7f23c13), live and verified on www.fightbaseapp.com.
- 2026-10-25 — Signup buttons pass the page language (`/signup?lang=et|ru|en`); the app reads
  `?lang=` (fightbaseapp c1e1a1c). Merged to main (8f6bccf), live and verified.
- 2026-10-25 — `TRANSLATION_REVIEW.md` signup URL updated from bilt.me to
  app.fightbaseapp.com/signup. Old branches `fix/signup-links`, `fix/signup-lang` and
  `chore/claude-setup` deleted.
- 2026-10-25 — Branch `club-tool-page`: home page rewritten for the club tool (not a
  marketplace). Hero = app welcome-screen wording + "Loo oma klubi" → app `/?lang=`;
  header "Logi sisse" → app `/signin?lang=`; "Kuidas see töötab" in 3 steps, sports line,
  second button. Removed camps, pricing, problem/features sections, founder quote and the old
  camps screenshot. RU now uses вы. Tested at 375px. Merged to main (0abdac3), live.

- 2026-10-25 — Branch `event-qr`: `/event` has the QR code for https://app.fightbaseapp.com/?lang=et
  (SVG + 2000px PNG, error correction H, black on white, 4-module quiet zone) and an A5 print
  PDF (QR 74 mm). Scan-tested from the PDF, incl. tilted/blurred/dim phone-photo simulations.
  Made by `scripts/make-event-qr.py`. Not merged yet.

## Next
- Rewrite Terms and Privacy for the coach tool: coaches enter members' personal data, so
  FightBase acts as their data processor (GDPR). Before the first real club.
- App repo (`fightbaseapp`), small fix: with an expired saved sign-in, the app shows Täna for
  a few seconds, then drops to the welcome screen. It should check the sign-in before showing
  Täna (or send to "Logi sisse" instead). Seen on Jen's phone 2026-10-25; new visitors are fine.
- Optional: a real "Täna" phone screenshot below the fold. Needs a test account with invented
  names; skipped because it needs a login to the live app.
- Answer the native-speaker questions in `TRANSLATION_REVIEW.md` (ET and RU).

## Waiting on Jen
- Print one A5 sheet, scan it with your phone, then say "merge it" for `event-qr`.
- Decide whether the old local branch `hero-redesign` is still needed. If not, delete it.
- Native ET/RU check of the wording.
