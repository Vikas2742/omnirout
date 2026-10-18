# Self-Hosted Runner Box Operations (.113 pool) (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

מאגר המריצים באירוח עצמי פועל על המכונה **.113** (`tomni-proxmox-113`). מאז 2026-10-18, לכל
מריץ של OmniRoute יש **תפקיד אחד**, תווית אחת ותקציב זיכרון/CPU המותאם לעומס העבודה
שנמדד עבורו. משבצת Turbopack מקבלת את המשאבים הנדרשים לבנייה; שאר המשבצות מותאמות
לערכי השיא שנמדדו עבורן. הקצאת יתר במכונה מתרחשת רק כאשר בניית Turbopack חופפת לבניית
webpack של Release-Green ולעבודת lint; ה-swap של המארח (16 GB) סופג זאת, ומכיוון שבניות
של בקשות משיכה רצות באירוח חיצוני, משבצת Turbopack אינה פעילה רוב הזמן:

| מריץ                 | תווית          | תפקיד                                                                                                                                                      | `MemoryHigh` / `MemoryMax`   | `CPUQuota`    |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | בניות Turbopack: ‏`ci.yml` ‏`Build` (בדחיפה/הפעלה ידנית בלבד), Docker amd64, ‏`npm-publish`, ‏`nightly-v4-build`, ‏`preview-artifact`, בניית ה-a11y הלילית | 56 GB / 60 GB (ללא swap)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green‏ (`release-green` + `main-green`), בניית webpack                                                                                             | 20 GB / 24 GB (swap של 4 GB) | 800 %         |
| `omniroute-113-2`    | `omni-light`   | הרצות ליליות (Schemathesis, ‏promptfoo, ‏garak, ‏k6, אתחול a11y) ו-`lint-guard` של `quality.yml`                                                           | 12 GB / 16 GB (swap של 4 GB) | 600 %         |
| `omniroute-113`      | `omni-light`   | אותו מאגר כמו לעיל                                                                                                                                         | 8 GB / 12 GB                 | 400 %         |
| OmniHeuris, OmniMind | (המאגרים שלהם) | Dependabot בלבד (שיא של 155 MB לכל אחד, 2026-10-18)                                                                                                        | 4 GB / 6 GB                  | 200 % לכל אחד |

נמדד ב-2026-10-18:

| משאב      | ערך                      | המשמעות לתזמון                                                                                                                                                                                                                                                                                                                                                   |
| --------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 ליבות**     | בניית ייצור של Turbopack הגיעה לשיא של 49 GB ללא הגבלה (`tests/unit/ci-build-bundler-webpack.test.ts`); ב-Next 16.3.8, שלב ההידור לבדו מחזיק כ-40 GB ‏(36 GB של RSS ב-`next-build` ועוד 17 תהליכי loader בנפח 3 GB, נמדד ב-2026-10-18); בניית webpack צורכת כ-14–16 GB. בניית Turbopack אחת ובניית webpack אחת יכולות לפעול יחד; שתי בניות Turbopack אינן יכולות |
| swap      | 16 GB                    | `omniroute-113-5` פועל כאשר ה-swap כבוי (`MemorySwapMax=0`), כך שבנייה שיצאה משליטה נקטעת כשהיא מגיעה למגבלה שלה במקום לגרום למכונה להשתמש ב-swap                                                                                                                                                                                                                |
| `/tmp`    | **tmpfs של 12 GB = RAM** | כל דבר שנשמר שם צורך זיכרון; שאריות מנוקות לאחר 3 שעות                                                                                                                                                                                                                                                                                                           |
| CPU       | נצפה עומס 60 על 32 ליבות | לפני החלת המכסות, בניית Turbopack אחת (כ-1166 % CPU) יחד עם חבילת בדיקות כיסוי באותה מכונה הרעיבו את פעימות החיים של המאזינים האחרים (`The self-hosted runner lost communication`, ‏#16853)                                                                                                                                                                      |
| מריצים    | **6 מאזינים**            | 4 של OmniRoute, וכן OmniHeuris ו-OmniMind; המריצים `omniroute-113-3/-4/-7/-8` מושבתים (`systemctl enable --now` מחזיר אחד מהם לפעילות)                                                                                                                                                                                                                           |

המגבלות נמצאות בקובץ `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` של כל יחידה
(הערכים הקודמים נשמרו בשם `override.conf.bak-20261018`) והוחלו בזמן אמת באמצעות
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — ללא הפעלה מחדש, כך שאף
עבודה פעילה לא הושפעה. התוויות משתנות באמצעות API המריצים
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), גם כן בזמן אמת.

## התקנת ה-janitor (פעם אחת, במכונה)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron‏ (root): כל 30 דקות, רישום לוג אל /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` נדרש: ה-janitor מוכיח שנתיב אינו בשימוש באמצעות תמונת מצב אחת של קבצים
פתוחים לפני הסרתו, וללא הכלי הוא אינו מסיר דבר ומציין זאת
(exit 1). נסו תחילה כל שינוי עם `--dry-run` — הוא מדפיס בדיוק מה היה
עושה ואינו משנה דבר.

מה הוא עושה בכל הפעלה: מנקה את השאריות שלנו (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) לאחר **3 שעות ב-tmpfs** ו-24 שעות בדיסק
`_work/_temp`; מחסל `next-build` שגילו מעל 75 דקות (אף job אינו רץ זמן רב כל כך — ב-
2026-08-27 אחד מהם רץ במשך 70 דקות לאחר ש-GitHub כבר הכריז שה-job שלו אבד); מוחק checkouts בני 48 שעות
של runners שה-unit שלהם **נעצר**; מתריע על שימוש בדיסק ≥ 85%, על memory PSI
`full/avg60` ≥ 10%, ועל מספר listeners הגדול מ-`MAX_ACTIVE_RUNNERS` (עם
פירוט של omniroute/other). ‏Exit 1 = נדרשת תשומת לב; קראו את הלוג.

כלל 75 הדקות אינו מזהה build ש-GitHub כבר ויתר על ה-job שלו. כאשר
`Runner.Listener` אינו מצליח לחדש את ה-job שלו, `_diag/Runner_*.log` מציג
`POST request to …/renewjob timed out after 100 seconds`, ה-API מדווח על ה-job כ-`completed`
(כישלון) כעשר דקות לאחר החידוש המוצלח האחרון, ו-`next-build` ממשיך לרוץ
בלי job משויך (2026-10-18: ה-Build של #17066 סומן ככושל ב-19:43 וה-build שלו עדיין
החזיק 40 GB חמש דקות לאחר מכן). ודאו את ה-ref ב-`_diag/Worker_*.log` החדש ביותר, ואז
שלחו SIGTERM רק לעץ ה-build לפי PID — אל `next-build`,‏ `npm run build`,‏ `build-next-isolated.mjs` ואל
ה-workers של `_work`. לעולם אל תיגעו ב-`Runner.Listener`,‏ `RunnerService.js` או `Runner.Worker`: ה-
worker מדווח שה-job בוטל, וה-listener חוזר למצב מקוון בעצמו.

## יחידות Runner:‏ KillMode

ברירת המחדל `KillMode=process` של ה-runner משאירה את `Runner.Worker → npm → next-build`
פעיל כאשר unit נעצר או מופעל מחדש — build יתום ממשיך לצרוך RAM ו-
CPU בלי job משויך. לכל unit של OmniRoute יש drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
עם `KillMode=mixed`:‏ SIGTERM נשלח תחילה ל-listener, ולאחר מכן SIGKILL לכל ה-cgroup ב-
`TimeoutStop`. השינוי נכנס לתוקף בהפעלה מחדש הבאה של ה-unit — הפעילו מחדש **runner אחד
בכל פעם, ורק כשהוא אינו פעיל**, כאשר בדיקת חוסר הפעילות וההפעלה מחדש מתבצעות באותה פקודה.

## כללי תפעול

- **בניית Turbopack אחת בלבד בכל רגע — נאכף באמצעות תווית.** כל job שמריץ `next build`
  מלא של Turbopack מכוון אל `[self-hosted, omni-build]`, ורק **`omniroute-113-5`** נושא את
  התווית הזאת: `ci.yml` `Build`,‏ `npm-publish.yml` `publish`,‏ `nightly-v4-build`,‏ `preview-artifact`,
  בניית ה-a11y הלילית (#16853) ו-**amd64** של `docker-publish.yml` (עם webpack בתוך BuildKit —
  ‏Turbopack קרס שם בבהלה, ריצה 33253576569). זרוע ה-Docker של arm64 נשארת על `ubuntu-24.04-arm`.
  ‏amd64 של `docker-publish` חולק את קבוצת המקביליות `heavy-build-main` עם `Build` של `ci.yml`
  (`cancel-in-progress: false`). ‏Docker Engine חייב להיות מותקן על `omniroute-113-5`. סלוט Turbopack
  שני אינו נכנס ב-78 GB (‏2 × ‏33–37 GB בתוספת שאר צורכי המכונה); סלוט שני בטוח רק עבור
  בניות webpack.
- **בניות של בקשות משיכה רצות על תשתית מנוהלת (2026-10-18).** ‏`Build` של `ci.yml` מגיע אל `omni-build` רק עבור
  `push` ו-`workflow_dispatch`; כל `Build` של `pull_request` (מהמקור שלנו או מ-fork) ושל `merge_group`
  רץ על `ubuntu-latest` עם webpack. כאשר כל PR מהמקור שלנו נותב לסלוט, בניית Turbopack
  החזיקה בו במשך 29–58 דקות, 18 בניות המתינו בתור עד 18 שעות, ובניית ה-push של ענף השחרור
  עצמו קיבלה את הסלוט פעם אחת מתוך 40 jobs. בתשתית המנוהלת, אותה בניית PR אורכת 8–12 דקות לצד שאר
  ה-jobs של ה-PR. ‏Turbopack, ה-bundler שמופץ על ידי `npm-publish`, ממשיך להיבדק בענף השחרור באמצעות
  בניית ה-a11y הלילית של ענף ברירת המחדל (04:41 UTC), באמצעות כל בניית push או dispatch
  שמגיעה לסלוט, ובאמצעות `npm-publish` עצמו. `tests/unit/build/heavy-build-queue.test.ts`
  מקבע את השער בן ארבעת התנאים.
- **לעולם אין להקצות לסלוט Turbopack פחות מהצורך שנמדד עבורו.** ב-2026-10-18 בשעה 18:06 הסלוט
  הונמך מ-56G/60G ל-40G/44G כדי לפנות מקום ל-`omni-release`. שלב ההידור נשאר בגבול
  `MemoryHigh` לאורך כל הריצה (‏memory PSI מסוג `full` בשיעור 30–43%), וה-`Runner.Listener`, שחולק
  את ה-cgroup, לא הצליח לחדש את ה-job שלו. הקצאת ה-56G/60G של הבעלים מ-2026-10-17 שוחזרה
  באותו היום. מתחת לערך הזה הבנייה אינה נכשלת; היא מיטלטלת בין טעינות לזיכרון ולדיסק, וה-job אובד.
- **ל-Release-Green יש סלוט משלו (2026-10-18).** עד אז, שתי בדיקות האימות של Release-Green רצו
  על `omni-build`: בכל push (כ-10 בשעה, 97 מתוך 100 ריצות push בוטלו באמצע העבודה ביום אחד)
  ובשלוש סריקות מלאות של כשעתיים ביום (הסריקה של 05:29 המתינה 6 שעות לסלוט) — סלוט הבנייה היחיד
  היה בהקצאת-יתר של פי כמה, ובניות PR מהמקור שלנו המתינו במשך שעות.
  ‏`release-green` ו-`main-green` מכוונים כעת אל `omni-release` (רק `omniroute-113-6`) עם
  `OMNIROUTE_USE_TURBOPACK=0`, וריצה שהחלה כבר אינה מבוטלת על ידי push חדש יותר (הסלוט
  הממתין עדיין מאחד את מבול הריצות). `tests/unit/build/runner-capacity-routing.test.ts`
  מקבע את הניתוב, את המעבר ל-webpack ואת העובדה ששום דבר על `omni-release` אינו נבנה באמצעות Turbopack.
- **המאגר הקל: `omni-light`.** ‏`omniroute-113` ו-`omniroute-113-2` מריצים את התהליכים הליליים שזקוקים
  ל-`next build` עבור ה-backend בלבד (כ-5–6 GB;‏ webpack) ואת `lint-guard` של `quality.yml`. ל-`omniroute-113`
  היה `MemoryHigh=4G` עד 2026-10-18 — בניית promptfoo פילסה את דרכה באמצעות פינוי זיכרון במשך 54 דקות
  שם; 8 GB מבטלים את ההאטה.
- **פחות listeners בכוונה.** ארבע יחידות OmniRoute הושבתו ב-2026-08-29 — כל listener נוסף
  הוא tenant נוסף בתקציב הזיכרון שלעיל. התקרה של המנקה היא 6 (`MAX_ACTIVE_RUNNERS=6` ב-cron): הוא סופר
  כל `Runner.Listener` במכונה, ו-OmniHeuris + OmniMind מוסיפים שניים לארבעת שלנו.
- **לעולם אין לנקות ידנית את `/tmp` או את `_work` בזמן ש-runner כלשהו עסוק.** פעולת
  בדיקה-ואז-מחיקה עם השהיה בין השתיים היא הסיבה ש-job פעיל מסוג Build איבד את
  `_work` שלו ב-2026-08-27. המנקה מבצע את הבדיקה ואת ההסרה בצעד אחד;
  תנו לו לעשות זאת.
- עצירת runner באמצע job מבטלת את ה-job (נצפה בזמן אמת): יש להריץ `systemctl stop` רק
  כאשר ל-listener שלו אין תהליך צאצא מסוג `Runner.Worker` — ולעשות זאת בפקודה אחת.
- אסור ל-workflows להחנות ארטיפקטים ב-`/tmp` (הוא נמצא ב-RAM). יש להוריד אל
  `$RUNNER_TEMP` (בדיסק, בנפרד לכל runner) — לארטיפקט `next-build` בגודל 1.3 GB נדרשו 27–32
  דקות כדי להגיע ל-tmpfs ו-2 דקות כדי לעלות מהדיסק.
- ה-VPS מסוג `.15` מיועד להומולוגציה בלבד — לעולם אינו מריץ CI runners.

## המסלול המתארח (רצים המתארחים ב-GitHub)

החשבון נמצא בתוכנית **Pro**: **40 משימות מתארחות בו-זמנית**, המשותפות לכל בדיקת PR,
לכל תהליך עבודה שמופעל בעקבות push ולהגדרת ברירת המחדל של CodeQL. במדידה שנערכה ב-2026-10-18 במהלך
קמפיין מיזוגים (כ-10 מיזוגים בשעה אל `release/v3.8.52`): **2,500 הרצות של תהליכי עבודה נוצרו בתוך
24 שעות**, 44 פעולות push לענף בתוך 6 שעות, ו-**106 משימות מתארחות המתינו בתור** בזמן שבדיקות PR המתינו
שעות ו-PR-ים מוזגו בלעדיהן. תשעה תהליכי עבודה הופעלו בכל push לענף:

| לכל push אל `release/v*`                    | משימות מתארחות | התוצאה במהלך העומס                                             | מאז 2026-10-18                                                        |
| ------------------------------------------- | -------------: | -------------------------------------------------------------- | --------------------------------------------------------------------- |
| `ci.yml` (מטריצה מלאה)                      |          עד 30 | בוטל על ידי ה-push הבא, 24 מתוך 24 ביום                        | אינו מופעל בפעולות push אל `release/**` (הרצת PR + Release-Green)     |
| `quality.yml`                               |             ~6 | בוטל, 23 מתוך 23                                               | אינו מופעל בפעולות push אל `release/**`                               |
| `Release-Green` `--quick`                   |              0 | רץ על `omni-build`, בוטל ב-97 מתוך 100                         | משבצת `omni-release`, לעולם אינו מבוטל, הרצה ממתינה מאוחדת            |
| `Lock released branch`, `OpenSSF Scorecard` |              2 | הרצה אחת בתור לכל push                                         | הרצה אחת לכל ref (`tests/unit/build/hosted-lane-concurrency.test.ts`) |
| `Release acceptance` (דוח צל)               |              1 | `npm ci` מתארח אחד לכל push, לעולם אינו מבוטל                  | ללא שינוי — מועמד למסנן `paths:`                                      |
| `Publish to Docker Hub` → `Deploy to VPS`   |              2 | בוטל בכל push; ענף amd64 מתחרה על `omni-build`                 | ללא שינוי — ערוץ הפריסה של הבעלים                                     |
| הגדרת ברירת המחדל של CodeQL (`dynamic`)     |              4 | `javascript-typescript`, `actions`, `c-cpp`, `python` לכל push | ללא שינוי — הגדרות → אבטחת קוד; `c-cpp`/`python` אינם סורקים כאן דבר  |

`tests/unit/build/push-storm-diet.test.ts` מקבע את טריגר ה-push ל-`main` בלבד של `ci.yml` ושל
`quality.yml`. תופעת לוואי: Codecov כבר אינו מקבל העלאת בסיס בכל push לענף release (השלב
נועד למידע וכולל `continue-on-error`); שער הכיסוי שבמאגר וההערה ב-PR
אינם מושפעים.

**קיבולת self-hosted נוספת אינה פותרת את התור המתארח.** תיבת הפיתוח
(`devbox-vm-06-dev002`,‏ 24 vCPU / 54 GB) יכולה לארח runner, אך הסשנים של הסוכנים כבר
שומרים על עומס של 20–26, לקונטיינר של הסוכן אין Docker daemon, והמסלול הרווי הוא
המסלול המתארח. בתיבת `.113` היו באותו רגע 71 GB פנויים ועומס של 5–8; המגבלה שלה
היא תקציב הזיכרון לכל listener שצוין לעיל (תקרה של 6 listeners), ולא המעבד. המנופים הנותרים
הם תהליכיים: להכניס PR-ים של הקמפיין דרך התור של Mergify (`label=queue`, אצוות חולקות
הרצת CI אחת של `merge_group` במקום הרצה אחת לכל PR ועוד אחת לכל push), לצמצם את שפות
הגדרת ברירת המחדל של CodeQL, ולסנן את `release-acceptance.yml` לפי הקבצים שהוא קורא.
