# Translation review

**Status: DO NOT DEPLOY** until every question below is answered by a native speaker (ET and RU).

Source language is English (`locales/en.json`). Key paths refer to the locale JSON files.
After changing copy, run `npm run build:locales` and commit the regenerated `index.html`, `ru/index.html`, `en/index.html`.

Register decision (pending native check): **informal throughout** — ET uses *sina* imperatives, RU uses *ты* imperatives.

## A. Hero (questions 1–8, from the first review round)

| # | Key | EN | ET | RU | Question | Answer |
|---|---|---|---|---|---|---|
| 1 | `hero.line2`, `hero.ctaCamps`, `features.f3Title` | Manage camps / Training Camps | Korralda laagreid / Treeninglaagrid | Проводи сборы / Управлять сборами / Сборы | RU uses **сборы** (учебно-тренировочные сборы), not **лагеря** (reads as children's summer camp). Is this how RU-speaking boxing/MMA coaches say it? ET: is plain **laager** clear, or always **treeninglaager**? | |
| 2 | `hero.line3` | Coach more. | Rohkem aega trenniks. | Тренируй больше. | ET is not literal ("more time for training") — natural? RU "Тренируй больше" — does it read as coaching others, not training yourself? | |
| 3 | all RU | — | — | ты-form (Веди, Проводи, Зарегистрируйся) | **Informal ты chosen.** Confirm ты is right for coaches as the audience (vs вы). | |
| 4 | `hero.sub`, `features.*`, `pricing.feature1` | members | liikmed | ученики | ET **liikmed** vs **trenniskäijad** / **sportlased**. RU **ученики** vs **спортсмены** / **воспитанники** for a coach's athletes. | |
| 5 | `hero.sub`, `meta.*` | martial arts | võitlussport | единоборства | ET **võitlussport** vs **võitluskunstid**. | |
| 6 | `hero.sub`, `features.f2Title`, `pricing.feature2` | announcements | teavitused / teated | объявления | ET: hero says **teavitusi**, features say **Teated**. Pick one and use it everywhere. | |
| 7 | `hero.ctaPrimary`, `nav.cta`, `pricing.cta`, `final.*` | Get started | Alusta | Начать | Too bare? Alternatives: ET "Hakka pihta", RU "Начать работу". | |
| 8 | `hero.line1` | Run your classes. | Halda treeninguid. | Веди группы. | ET **treeningud** vs **trennid** (more colloquial in clubs). ET hero wraps to 5 lines on mobile — is a shorter line wanted? | |

## B. Remaining sections (added when the full page was written)

| # | Key | EN | ET | RU | Question | Answer |
|---|---|---|---|---|---|---|
| 9 | `disciplines.kickboxing` | Kickboxing | Kikkpoks | Кикбоксинг | ET: the old copy used "Kickpoks". Confirm **kikkpoks**. | |
| 10 | `disciplines.muayThai`, `disciplines.bjj` | Muay Thai, BJJ | Muay Thai, BJJ | Муай-тай, BJJ | ET: keep English "Muay Thai" or use "Thai poks"? RU: **Муай-тай** vs **тайский бокс**; keep latin **BJJ** or **БЖЖ**? | |
| 11 | `disciplines.wrestling` | Wrestling | Maadlus | Борьба | Fine as a generic term, or should it be specific (vabamaadlus / вольная борьба)? | |
| 12 | `features.sub` | sparring sessions | sparringud | спарринги | Established usage? ET alternatives: "sparrid". | |
| 13 | `problem.title` | Your club runs on group chats and notebooks. | …töötab grupivestluste ja märkmike peal. | …держится на чатах и тетрадках. | Natural phrasing? ET "märkmik" vs "vihik". | |
| 14 | `problem.before1`, `problem.after1` | Paper list → photo → retype… | …ümber trükkida | Открыл тренировку → отметил… | ET: the infinitive at the end of the arrow chain — does it read naturally? RU uses past tense ("Открыл… отметил") for the "after" row — is that natural? | |
| 15 | `problem.after` | With FightBase | FightBase'iga | С FightBase | ET inflection of the brand name **FightBase'iga**; RU leaves the brand uninflected. OK? | |
| 16 | `how.s3Body` | request to join / accept | liitumissoov / kinnitad | заявка / подтверждаешь | Matches app wording? (Check against the shipped app's ET/RU strings, if they exist.) | |
| 17 | `pricing._notRendered_priceForLaunch.*` | €29 / month | 29 € / kuu | 29 € / мес. | **Not shown on the page now** — kept for launch. Check number/currency format and period abbreviation before it's used. | |
| 18 | `pricing.feature4` | Available in Estonian, Russian and English | Saadaval eesti, vene ja inglise keeles | Доступно на эстонском, русском и английском | *(Replaced "Billed monthly, cancel any time".)* RU: add "языках" ("…и английском языках") or is the short form fine in a feature list? Language order — should RU list Russian first? | |
| 19 | `final.title` | Less admin. More time in the gym. | Vähem paberitööd. Rohkem aega saalis. | Меньше бумажной работы. Больше времени в зале. | ET "saal" vs "trennisaal" / "klubi". | |
| 20 | `quote.*` | Founder quote | „…" | «…» | **Founder must approve** the ET/RU wording — it's a quote attributed to a named person. Also: this quote is about athletes seeking coaching (old positioning). Keep it? | |
| 21 | `footer.terms`, `footer.privacy` | Terms / Privacy | …(inglise keeles) | …(на английском) | Legal pages are English-only; is the "(in English)" note wanted? | |

## C. Pricing card, beta version (added after the price was removed)

| # | Key | EN | ET | RU | Question | Answer |
|---|---|---|---|---|---|---|
| 22 | `pricing.badge` | Beta — limited spots | Beeta — kohti on piiratud arv | Бета — число мест ограничено | **Fit tested** (badge must fit ~255px inside the card on a 375px phone). Measured widths: ET "Beeta — kohti on piiratud arv" 194px ✅ kept; alternatives "Beeta — piiratud kohad" 161px, "Beeta · piiratud arv kohti" 169px. RU original "Бета — количество мест ограничено" 250px ❌ (only ~5px spare) → **chose "Бета — число мест ограничено" 215px**; shorter alternative "Бета — мест немного" 156px (softer, less exact). Check naturalness. ET **beeta** vs **beetaversioon**. | |
| 23 | `pricing.cta` | Apply for Early Access | Alusta beetas | Подай заявку на ранний доступ | ET: "taotle" dropped (sounded like a grant application). **"Alusta beetas"** ("start in the beta") reuses the site's "Alusta" verb but loses the "apply" meaning — the button goes to an application form, not straight into the app. Is that misleading? Alternatives: "Alusta varajase ligipääsuga", "Liitu beetaga". RU keeps ты and the "apply" meaning. | |
| 24 | `pricing.launchNote` | Pricing announced at launch — early beta coaches get a special rate. | Hinnad avalikustame käivitamisel — beetas osalevad treenerid saavad erihinna. | Цены объявим при запуске — участники беты получат специальную цену. | *(Retranslated from the new source; "lock in a founding rate" is gone.)* ET **erihind** vs **soodushind** (the latter implies a discount). ET **käivitamisel** vs **avamisel**. RU: "участники беты" is shorter but less specific than "тренеры в бете" — fine? | |
| 25 | `pricing.title` | What's included | Mis on kaasas | Что входит | *(Replaced "Simple pricing for coaches".)* ET avoids "Mis on hinnas" because it mentions price. Natural as a heading? Alternative ET "Mida saad", RU "Что ты получаешь" (ты). | |

## Not translation questions, but need a decision before launch

- **Special beta rate:** the note now promises only "a special rate", not a locked-in or permanent one. Make sure whatever is offered at launch matches this.
- **Nav link "Pricing" / section eyebrow "Pricing"** (`nav.pricing`, `pricing.eyebrow`) still say Pricing / Hinnad / Цены while no price is shown. Rename (e.g. "Coach Pro") or keep?

- **"Get started" links** still go to the Tally early-access form (`https://tally.so/r/EkvYaN`). Should they go to app sign-up instead?
- **"Manage your camps" links** go to `https://fightbase-web.vercel.app/list-your-camp` (temporary URL from commit 2d4289f).
- **Coach Pro price (for launch, not rendered now):** is €29 VAT-inclusive? Decide before `pricing._notRendered_priceForLaunch` goes back on the page.
