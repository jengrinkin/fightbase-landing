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
| 9 | `features.f1Title`–`f4Body` | Memberships and price list / Monthly overview / Camps / Messages and notifications | Liikmelisus ja hinnakiri / Kuu ülevaade / Laagrid / Sõnumid ja teavitused | Членство и прайс-лист / Обзор месяца / Сборы / Сообщения и уведомления | Added 2026-11-12. Same words as the app (ET "Hinnakiri", "Laagrid"; RU "Прайс-лист", "Сборы"). Natural as card titles? | |
| 10 | `memberBlock.*` | For members / Got a class code? / Enter class code | Liikmele / Sul on trenni kood? / Sisesta trenni kood | Участнику / Есть код тренировки? / Ввести код тренировки | Added 2026-11-12. RU uses вы like the rest. | |
| 11 | `app.*` (phone demo screens) | all copied from the real app's own strings: tabs, Today, roster, classes, announcement | (same as the app) | (same as the app) | Added 2026-11-17. The phone demo now shows the real app's screens in the app's exact wording. Only `app.typed` is new: derived from the app's placeholder ("e.g. …" removed, first letter capitalised): EN "Wednesday's session moves to 19:00" / ET "Kolmapäevane trenn algab kell 19:00" / RU "Занятие в среду переносится на 19:00". Natural? | |
| 12 | `app.f_*` (feature screens: Members, Overview, Camps, announcement) | labels and statuses copied from the real app's strings; sample data new: membership name **Monthly**, camp name **Winter camp**, sample dates and euro amounts formatted like the app | Kuukaart / Talvelaager (labels as in the app) | Месячный / Зимние сборы (labels as in the app) | Added 2026-11-18. Only the invented sample names need a look: ET **Kuukaart**, **Talvelaager**; RU **Месячный**, **Зимние сборы**. Natural? The closing headline reuses the hero headline. The old 3 "How it works" steps (`how.s1`–`s3`) are no longer shown on the page. | |
| 13 | `faq.*` (new FAQ, 6 questions + answers) | see the site: Do members need to install an app? / How do members join? / Does FightBase take payments? / Is data safe? / Sports and languages / What happens to my data? | all six written in ET too (e.g. "Kas FightBase võtab minu liikmetelt makseid?") | all six written in RU too (e.g. «Берёт ли FightBase платежи с моих участников?») | Added 2026-11-18. Facts come from the Terms, Privacy Policy and the app (web app, home-screen install on iPhone, join by link or class code, payments settled directly, EU servers, 30-day deletion). **Jen: please confirm every answer is true for FightBase today**, then a native speaker should read ET/RU. RU uses "членство" like the rest of the page (the app says "абонемент"). | |
