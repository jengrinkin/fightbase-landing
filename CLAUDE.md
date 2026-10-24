# FightBase landing page

## Project
Marketing site for FightBase at https://www.fightbaseapp.com (also fightbaseapp.com).
Static HTML on Vercel project `fightbase-landing`. **`main` deploys to production immediately.**
The app itself is a separate repo (`fightbaseapp`, https://app.fightbaseapp.com). All signup
buttons go to https://app.fightbaseapp.com/signup. Solo, non-developer founder (Jen).

## How the pages are built
- Source copy: `locales/{et,ru,en}.json`. Page template: `src/index.template.html`.
- `npm run build:locales` generates `index.html` (ET, default), `en/index.html`, `ru/index.html`.
  Never hand-edit only the generated pages: change the template/locales and rebuild, then
  commit the template, locales and all three generated pages together.
- `vercel.json` handles language redirects (cookie `fb_lang`) and rewrites.
- `TRANSLATION_REVIEW.md` tracks ET/RU wording questions for a native speaker.

## Hard rules
- Never commit or push to `main` directly. Work on a branch, Jen checks the Vercel preview
  (needs her Vercel login, normal Chrome), merge only after Jen says "merge it".
- Every text change must exist in ET, RU and EN.
- `api/stripe-webhook.js` is a live Stripe webhook. Don't change it without explaining what
  changes and waiting for a "yes". Never put Stripe or Supabase keys in the repo or in chat;
  they live in Vercel environment variables.
- Ask before anything that adds a monthly cost.
- One step at a time, plain words, exact clicks, full links.

## Session protocol
At the start of every session read CLAUDE.md and PROGRESS.md. Finish work with
/update-docs-and-commit.
