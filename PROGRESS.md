# FightBase landing — progress

_Last updated: 2026-11-18_

## Done
- 2026-11-17 — Branch `app-look` (preview only, NOT merged): the phone demo screens are rebuilt from the REAL app
  (repo `fightbaseapp`: CoachToday, class-roster, CoachClassesTab, tab bar, theme in app/global.css), because
  the old mock-up looked like a different app. Drawn at a real 390px phone width with the app's own colours
  (dark theme), Lucide icons, pill buttons, gold class chips, green Present/Absent, bottom tab bar, and then
  scaled into the phone frame. Screens: Today (join request, members, announcement pill, session card, Tomorrow),
  Attendance (roster: tap a member to toggle Present/Absent, live count), Classes (class code + Copy code / Copy
  link, which show "Copied"), Announcement (modal over Today, types a message, Send turns red). All text is the app's
  own ET/RU/EN wording (new `app.*` keys in locales), member names are invented. Hover switching unchanged.
  I could not log in to the live app (no credentials), so screens come from the app's source code; the public
  welcome screen of app.fightbaseapp.com was compared visually. New wording to check: TRANSLATION_REVIEW.md #11.
  2026-11-17 update: Jen restyled the app's Classes tab (app repo, branch `native-push`, commit c223791, NOT merged to
  the app's main yet, so the live app still shows the old look): neutral Add class/Add camp buttons, neutral outline tags,
  "Active" in a foreground outline, only Delete keeps red. The phone demo's Classes screen now matches that. Today and
  Attendance are unchanged in the app. Merge this landing branch AFTER the app change is live.
- 2026-11-17 — Branch `smaller-boxes`: the four boxes around the phone made 30% smaller (200px -> 140px wide,
  105px at 861-1279px, 118px on phones) so the phone stays the focus; still tucked ~22px over the phone corners
  (left/right 119px in the 760px column; 84px at 861-1279px), covering no words. Body text has a 9.5px floor;
  at 861-1279px the white boxes show only the title.
- 2026-11-17 — Same branch: the Nike swoosh and the VENUM lettering (glove side + cuff) were removed from the hero photo at
  Jen's request. Method: a minimum filter thins out narrow bright strokes on dark material (all on this Mac, no
  upload), feathered into the photo. New file `assets/boxer-clean.jpg` (270 KB) replaces `boxer-hq.jpg`; same
  outline `boxer-matte.png`. NOT removed: the large red viper graphic on the gloves (glove design, no text).
- 2026-11-17 — MERGED to main via PR #4 (6d9cbf0), LIVE and checked on www.fightbaseapp.com (ET/RU/EN): four floating
  boxes tucked over the phone's corners in the phone demo area (see the `phone-cards` entry below for details).
  Branches `phone-cards` and `docs-live-poster` are fully merged and can be deleted.
- 2026-11-17 — Branch `phone-cards` (preview only, NOT merged): FINAL: Jen disliked the grey panel, so the grey
  background, the hand and the -9 degree tilt were removed; the phone is upright on the black page again with
  just the four floating cards around it (white: Memberships, Messages; dark: Attendance 3/12, Today 17:30).
  Jen then asked for the cards not to touch the phone, found that too disconnected, and settled on:
  cards overlap only the phone's outer CORNERS by ~22px (left/right 59px in the 760px column; 39px at
  861-1279px), covering no words. On phones the two dark cards sit in a row under the phone.
  (Earlier in the day this was tried as a grey panel, restyled after Jen's
  "Padel Point" reference: light grey panel, phone tilted -9 degrees, black hand silhouette (inline SVG)
  holding it, four floating cards (white: Memberships, Messages; dark: Attendance 3/12, Today 17:30).
  The numbered lines on the left and their hover switching are UNCHANGED. The card matching the
  current phone screen lifts. Card text reuses existing ET/RU/EN keys. Checked at ~1200px and 375px.
  Old trial branches video-hero, poster-hero, mono-hero deleted (local + GitHub) at Jen's yes.
- 2026-11-17 — MERGED to main via PR #3 (05ce306), LIVE and checked on www.fightbaseapp.com (ET/RU/EN): new black
  poster hero (giant FIGHTBASE, boxer in original colours with his head over the name), interactive phone
  demo, realistic iPhone frame, rounded hero button, plain "Liikmele" box. Earlier trial branches
  `video-hero` and `poster-hero` were NOT merged separately (their work is included in `mono-hero`).
- 2026-11-17 — Branch `mono-hero` (cont.): Jen still found the greyscale cut-out fake and preferred the original
  photo's look. Hero boxer is now in ORIGINAL COLOUR (light contrast/saturation tweak only). His own gym
  background is back as a dimmed, radially faded layer BEHIND the lettering (`.poster-env`, same photo),
  so the cut-out boxer shares its light/colour. Head still overlaps FIGHTBASE. Checked 2400, 1440, 375px.
  Grid (checkered) lines removed from the hero background at Jen's request.
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

- 2026-11-18 — Phone demo rebuilt from the real app (Today, attendance, classes, announcement; ET/RU/EN),
  PR #9 merged to main (abb5cad), live. Jen confirmed the live app's Classes tab is already neutral grey.
  Branch `app-look` is merged and can be deleted (ask Jen first).
- 2026-11-18 — Branch `hero-still` (preview only): the giant FIGHTBASE word and the boxer photo no longer
  move with the cursor or the scroll. Only the faint background smoke/grain still drifts. Checked: transforms stay `none`
  after mouse move and scroll at 1440px.
- 2026-11-18 — Same branch: cleaner boxer outline. New matte `assets/boxer-matte-b.png` (edge pulled in 3px, softened 1px) removes the
  light fringe from the old gym wall; soft dark shadow around him so he sits in the scene. Old `boxer-matte.png` is now unused.
- 2026-11-18 — Branch `calm-hero` (preview only), inspired by maatapp.com (calm, professional look; not copied).
  Steps 1+2 of 6: hero is now one centred block (headline, one line, one red button) instead of three text areas;
  the hero's small labels, 4-line list and "How it works" steps were removed (the phone demo below keeps the 4 lines and hover).
  Gold accent replaced by red outside the phone mock-up (the phone keeps the real app's colours). Checked 375/1100/1440/2400, ET/RU/EN.
  Next steps agreed: 3 light/dark section rhythm, 4 bigger feature sections, 5 FAQ (Jen checks answers), 6 big footer wordmark.
  No invented testimonials, logos, ratings or prices.
- 2026-11-18 — Same branch, change after Jen's feedback: hero now uses Jen's saved Pexels photo (pexels-pavel-danilyuk-6295820, two boxers
  sparring; Pexels licence needs no credit) full width under a dark veil, headline in the gap between them. Giant FIGHTBASE word and
  the old boxer cut-out are no longer used in the hero (files `boxer-clean.jpg`, `boxer-matte*.png` stay in assets, unused). Phone crop shows the left boxer.
  The 5265px original is NOT committed (stays untracked in the project folder); web copies are `assets/hero-sparring.jpg` (2400px) and `-m.jpg` (1000px).
- 2026-11-18 — Branch `light-sections` (preview only), step 3 of 6 (maatapp.com-inspired, not copied): light/dark rhythm.
  Phone demo and "How it works" + member block are now light grey/white with dark text, with rounded tops overlapping the section above;
  hero, features and footer stay dark. Phone mock-up unchanged. Checked 375/1440, ET/RU/EN, demo hover still switches screens.
  Remaining steps: 4 bigger feature sections, 5 FAQ (Jen checks answers), 6 big footer wordmark.
- 2026-11-18 — Branch `big-features` (preview only), step 4 of 6: the four features are now big cards, each with a real screen of the app
  rising from the bottom edge: Members (memberships + who hasn't paid), Monthly overview, Camps, Announcement. Screens are rebuilt from the app's source
  and strings (ET/RU/EN, sample data invented). The 3-step "How it works" list was replaced by a closing headline + CTA (same text as the hero).
  New sample wording is in TRANSLATION_REVIEW.md item 12. Remaining: 5 FAQ (Jen checks answers), 6 big footer wordmark.
- 2026-11-18 — Branch `faq` (preview only), step 5 of 6: new light FAQ section (6 questions, ET/RU/EN, accordion) between features and the
  closing call-to-action. Answers are only things the Terms, Privacy Policy and app support (see TRANSLATION_REVIEW.md item 13). The closing
  CTA + member box are dark again (so the rhythm is dark hero / light demo / dark features / light FAQ / dark closing). NOT included on purpose:
  price or free-trial question (no price known to me; the Terms only say there are paid tiers billed monthly via Stripe, cancel any time).
  Contact in the FAQ uses support@fightbaseapp.com (as the footer does); the legal pages said hello@fightbaseapp.com. 2026-11-19: Jen chose support@fightbaseapp.com everywhere; Privacy Policy and Terms updated (EN only pages).
  2026-11-19: Jen asked to replace Q4 (data safety) and Q6 (data after leaving) with how-to questions: Q4 is now "How do I get started as a coach?",
  Q6 "What can my members do in the app?" (ET/RU/EN); the privacy link under the old Q4 was removed. Jen must confirm both answers are true.
  Remaining: step 6 big footer wordmark.
- 2026-11-19 — Branch `footer-wordmark` (preview only), step 6 of 6: big faded FIGHTBASE wordmark across the bottom of the footer (brand name, so no
  translation needed; decorative, hidden from screen readers). Checked at 390/1440/2400px in ET/RU/EN, no sideways scroll. This finishes the 6-step redesign.
- 2026-11-26 — Branch `new-hero-photo` (preview only): hero uses Jen's sharper portrait photo of the boxer with pads (`assets/hero-boxer.jpg`, 175 KB). Desktop: text left, photo right fading into dark; photo is mirrored so the boxer faces left (Jen asked); phone/tablet: photo full-bleed with text at the bottom. Old `hero-sparring*.jpg` now unused but kept. Checked 390/768/1000/1440/2400, ET/RU/EN, no sideways scroll.

## Next
- Rewrite Terms and Privacy for the coach tool: coaches enter members' personal data, so
  FightBase acts as their data processor (GDPR). Before the first real club.
- App repo (`fightbaseapp`), small fix: with an expired saved sign-in, the app shows Täna for
  a few seconds, then drops to the welcome screen. It should check the sign-in before showing
  Täna (or send to "Logi sisse" instead). Seen on Jen's phone 2026-10-25; new visitors are fine.
- Optional: a real "Täna" phone screenshot below the fold. Needs a test account with invented
  names; skipped because it needs a login to the live app.

## Waiting on Jen
- (Done 2026-11-17, Jen confirmed:) the person in the hero boxer photo is aware and OK with it; the ET/RU wording
  has been checked by a native speaker.
- Optional: real boxing motion needs a short phone clip, or an AI image-to-video tool (paid credits,
  ask first). The photo can then be swapped for the video.
- Print one A5 sheet and scan it with your phone before the event.
- Decide whether the old local branch `hero-redesign` is still needed. If not, delete it.
