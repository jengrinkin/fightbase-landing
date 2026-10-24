---
description: Check, rebuild pages, update PROGRESS.md, commit on the current branch. Never pushes.
argument-hint: [optional commit summary]
---

1. **Branch guard.** `git branch --show-current`. If it is `main`: stop and tell Jen to make
   a branch first (main goes live immediately).
2. **What changed.** `git status` and `git diff`. Summarise in 1–3 plain bullets.
3. **Safety check.** Stop and tell Jen if the diff has a key/secret, a change to
   `api/stripe-webhook.js`, or text that exists in only one language.
4. **Rebuild.** If `locales/` or `src/index.template.html` changed, run `npm run build:locales`
   and include the regenerated `index.html`, `en/index.html`, `ru/index.html`.
5. **Docs.** Update `PROGRESS.md` (Done / Next / Waiting on Jen, "Last updated").
6. **Commit.** Stage named files only (never `git add .`). Short summary; use $ARGUMENTS if
   given. **Do not push or merge.**
7. **Report** in 3 lines: what was committed, which docs changed, what to test on the preview.
