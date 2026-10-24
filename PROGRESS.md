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

## Next
- Answer the native-speaker questions in `TRANSLATION_REVIEW.md` (ET and RU).
- Small fix: `TRANSLATION_REVIEW.md` says the "Manage your camps" links go to
  `fightbase-web.vercel.app/list-your-camp`; they go to https://app.fightbaseapp.com/signup.

## Waiting on Jen
- Decide whether the old local branch `hero-redesign` is still needed. If not, delete it.
- Native ET/RU check of the wording.
