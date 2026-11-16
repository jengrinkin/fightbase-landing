# FightBase landing — progress

_Last updated: 2026-11-16_

## Done
- 2026-11-16 — Branch `mono-hero` (cont.): Jen said the cut-out still looked fake. Re-cut with Apple's
  person-matting model (soft alpha: real hair edge, motion-blurred glove keeps its soft edge), cleaned
  with the older rough mask. Files: `assets/boxer-hq.jpg` + `assets/boxer-matte.png` (110 KB).
  Greyscale, light contrast, no drop shadow; film grain on the boxer only so he matches the background.
  LESSON: a full-width layer above the boxer (grain/smoke, with or without blend modes or blur) made
  the whole hero fail to draw at 2400x1500 in the test browser. Removed. Don't add full-size layers
  over the masked boxer; test at a very large window size after hero changes.
  Checked at 2400px, 1440px and 375px.
- 2026-11-15 — Branch `mono-hero` (cont.): Jen wanted the black-and-white cut-out back (head overlapping the
  name) but not "cartoon" looking. Redone from the full-size original: `assets/boxer-hq.jpg` (1200px,
  219 KB) + `assets/boxer-hq-mask.png` (finer outline, edge trimmed and softened), greyscale with almost no
  contrast boost. The uncut colour-photo version (`boxer-photo.jpg`) was tried and dropped.
- 2026-11-15 — Branch `mono-hero` (cont.): the cut-out boxer looked fake, so the hero now uses the real photo
  (`_MG_9879`, cropped to `assets/boxer-photo.jpg`, 174 KB) uncut, in natural colour, with its own gym
  background faded softly into the black (CSS mask). Cut-out files `boxer-guard.*` removed.
- 2026-11-15 — Branch `mono-hero` (cont.): plain solid FIGHTBASE (speckle removed); red gradient removed
  from the "Liikmele" box; hero button corners rounded to 14px (same as app cards); demo phone restyled
  as a realistic iPhone (black bezel, titanium edge, side buttons, Dynamic Island, signal/wifi/battery).
- 2026-11-15 — Branch `mono-hero` (preview only, NOT merged; built on `poster-hero`): black-and-white hero
  recreated from Jen's "Cloud Castle" reference. Giant plain off-white FIGHTBASE (Anton font, speckle removed at Jen's request) across the top,
  greyscale cut-out boxer (`boxer-guard.jpg` + mask) in the middle, grid lines, drifting smoke and grain,
  a row of small red labels, headline + feature list + button on the left, "How it works" steps on the
  right. Red is the only colour. Navy/stone blue replaced by black/grey across the hero and demo.
  Parallax, scroll effect, demo and magnetic button kept. Only existing ET/RU/EN text is used.
  Checked at 1440px and 375px: no sideways scroll.
- 2026-11-13 — Branch `poster-hero` (cont.): new photo `_MG_9879` (guard up, face behind the glove) replaces the
  first boxer. Cut out on this Mac (Apple Vision), cropped waist-up, shipped as `assets/boxer-guard.jpg`
  (115 KB) + `assets/boxer-guard-mask.png` (22 KB outline, applied with CSS mask). AVIF was dropped: Chrome
  showed Apple-made AVIFs as fully transparent. Removed the "name splits left/right on scroll" effect
  (Jen didn't like it); the name now only drifts up slightly. Old `boxer-cutout.*` removed.
  Photo has visible Venum glove and Nike shirt logos.
- 2026-11-13 — Branch `poster-hero` (cont.): interactivity. (1) Cursor parallax: name, boxer and glow move at
  different depths (desktop). (3) The four hero lines now drive an app demo that replaces the old static
  phone: click/hover a line (or a tab in the new demo section) to switch the phone between Today,
  Attendance (tap members to mark present), Join (code + members arriving) and Message (bubble +
  notification). Auto-cycles while in view until the visitor touches it. (4) Scroll: the name splits and
  slides apart, boxer grows, hero text fades. (5) Magnetic CTA button, phone tilts toward the cursor.
  No "punch" effect (Jen said no). All demo words reuse existing ET/RU/EN keys; member names are
  invented and language-neutral. Reduced-motion visitors get none of the motion. Old giant wordmark
  under the phone removed. Checked 1440px and 375px (ET/RU/EN): no overflow, no console errors.
- 2026-11-13 — Branch `poster-hero` (preview only, NOT merged; built on `video-hero`): poster-style home
  hero copied from Jen's reference layout. Giant white FIGHTBASE behind a cut-out boxer with a red rim
  light, navy `#03203D` + stone blue `#639CC5` + brand red `#DC2626` (no gold). Bold headline in front,
  "17:30 + class name" tag, the 4 hero lines as a small list, red button with an arrow. Boxer cut out
  on this Mac with Apple Vision (nothing uploaded), cropped waist-up; (see the newer entry above for the current photo files).
  No new text: only existing ET/RU/EN keys. Checked at 1440px and 375px (ET/RU/EN): no sideways
  scroll, no console errors. The slow float only runs on desktop. Old `boxer-hero*.jpg` removed.
  The giant name now also appears in the phone block below, so that wordmark may be redundant.
- 2026-11-13 — Branch `video-hero` (preview only, NOT merged): new cinematic home hero. Boxer
  photo (Jen's `_MG_9258.JPG`, resized to `assets/boxer-hero*.jpg`) with a slow camera push-in,
  flickering gym lights, red glow, grain and rising embers. No video, no cost, no outside files.
  Desktop: text left, photo right fading into the dark. Phone: photo on top, text below. Text is
  unchanged, so no locale edits. Reduced-motion visitors get a still photo. Checked locally at
  1440px and 375px (ET/RU/EN): no sideways scroll, no console errors.
- 2026-11-12 — Branch `phone-no-box`: removed the rounded dark square
  (border, corners, fill) behind the phone on the home page, and the faint gold glow that showed
  a hard corner without it. Phone, red glow and FIGHTBASE wordmark stay. Checked locally at
  desktop and 375px (ET, RU, EN). Branch `restore-oct25-page` (plain page without the phone) was
  also pushed this day, then dropped (Jen kept the phone) and deleted.
  Merged to main via PR #2 (d1aaeaf), live and checked on www.fightbaseapp.com (ET/RU/EN).
- 2026-11-12 — Branch `landing-features`: new "Kõik, mida klubi vajab" section
  (memberships and price list, monthly overview, camps, messages and notifications) and a "Liikmele"
  block with "Sisesta trenni kood" → app `/?lang=`. ET/RU/EN. Merged to main (73a2501), live.
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
  Made by `scripts/make-event-qr.py`. Merged to main (1f4de76), live at /event/.

- 2026-10-25 — Branch `hero-vibe` (preview only): RaceCore-style look. Red accent word in the
  headline, a dark "stage" below the fold with a phone showing a copy of the app's coach "Täna"
  screen (invented names) and a giant FIGHTBASE wordmark. Empty photo frame removed
  2026-10-26 so it can go live without the photo. Phone: hero fills the first screen, stage starts below the fold.
  On main (3051da7, cdc1a16), live.

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
- Pick one: `video-hero` (photo + embers), `poster-hero` (navy poster) or `mono-hero` (black-and-white). Check the Vercel preview, then say "merge it".
- Confirm the person in the boxer photo is OK with it being on the public site.
- Optional: real boxing motion needs a short phone clip, or an AI image-to-video tool (paid credits,
  ask first). The photo can then be swapped for the video.
- Print one A5 sheet and scan it with your phone before the event.
- Decide whether the old local branch `hero-redesign` is still needed. If not, delete it.
- Native ET/RU check of the wording.
