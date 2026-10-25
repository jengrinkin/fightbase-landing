# Translation review

Questions for a native speaker (ET and RU). Key paths refer to `locales/{et,ru,en}.json`.
After changing copy, run `npm run build:locales` and commit the regenerated `index.html`, `ru/index.html`, `en/index.html`.

**2026-10-25: page rewritten for the club tool.** The hero text (`hero.eyebrow`, `hero.headline`,
`hero.item1`–`item4`) is copied word for word from the app's welcome screen, so site and app match.
Change it only together with the app. All earlier questions about camps, pricing, the founder
quote and the problem section are gone with those sections.

Register: **ET sina, RU вы** (RU switched from ты to вы to match the app).

| # | Key | EN | ET | RU | Question | Answer |
|---|---|---|---|---|---|---|
| 1 | `hero.cta` | Create your club | Loo oma klubi | Создать свой клуб | Natural as a button? | |
| 2 | `hero.member` | Member? Ask your coach for the class link. | Liige? Küsi treenerilt trenni linki. | Участник? Попросите у тренера ссылку. | ET "trenni link" clear? RU drops "class" ("ссылку" only) — fine? | |
| 3 | `nav.signin` | Sign in | Logi sisse | Войти | Same words as the app's sign-in screen? | |
| 4 | `how.s1`–`s3` | Create your club and classes / Share the link with members / Mark attendance and send messages | Loo klubi ja trennid / Jaga liikmetele linki / Märgi kohalolu ja saada teateid | Создайте клуб и тренировки / Поделитесь ссылкой с участниками / Отмечайте посещения и отправляйте сообщения | Natural? RU "сообщения" vs "объявления". | |
| 5 | `disciplines.line` | Kickboxing | Kikkpoks | Кикбоксинг | ET: confirm **kikkpoks** (old copy had "Kickpoks"). | |
| 6 | `disciplines.line` | Muay Thai, BJJ | Muay Thai, BJJ | Муай-тай, BJJ | ET: keep "Muay Thai" or "Tai poks"? RU: **Муай-тай** vs **тайский бокс**; latin **BJJ** or **БЖЖ**? | |
| 7 | `disciplines.line` | Wrestling | Maadlus | Борьба | Generic term fine, or vabamaadlus / вольная борьба? | |
| 8 | `footer.terms`, `footer.privacy` | Terms / Privacy | …(inglise keeles) | …(на английском) | Legal pages are English-only; is the "(in English)" note wanted? | |
