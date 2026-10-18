# Self-Hosted Runner Box Operations (.113 pool) (فارسی)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

مجموعهٔ self-hosted روی سرور **.113** (`tomni-proxmox-113`) اجرا میشود. از 2026-10-18 هر
runner در OmniRoute دارای **یک نقش**، یک label و بودجهٔ حافظه/CPU متناسب با میزان مصرف اندازهگیریشدهٔ
بار کاری خود است. اسلات Turbopack منابع موردنیاز بیلد را دریافت میکند؛ اسلاتهای دیگر بر اساس
اوج مصرف اندازهگیریشدهٔ خود تخصیص یافتهاند. سرور تنها زمانی بیشازحد تخصیص میدهد که یک بیلد Turbopack
همزمان با یک بیلد webpack در Release-Green و یک job مربوط به lint اجرا شود؛ swap میزبان (16 GB)
این وضعیت را پوشش میدهد و از آنجا که بیلدهای pull request بهصورت hosted اجرا میشوند،
اسلات Turbopack بیشتر اوقات بیکار است:

| runner               | label            | نقش                                                                                                                                             | `MemoryHigh` / `MemoryMax` | `CPUQuota`        |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`     | بیلدهای Turbopack: `ci.yml` `Build` (فقط push/dispatch)، Docker amd64، `npm-publish`، `nightly-v4-build`، `preview-artifact` و بیلد شبانهٔ a11y | 56 GB / 60 GB (swap 0)     | 1600 %            |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`)، بیلد webpack                                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %             |
| `omniroute-113-2`    | `omni-light`     | jobهای شبانه (Schemathesis، promptfoo، garak، k6 و راهاندازی a11y) و `quality.yml` `lint-guard`                                                 | 12 GB / 16 GB (swap 4 GB)  | 600 %             |
| `omniroute-113`      | `omni-light`     | همان مجموعهٔ بالا                                                                                                                               | 8 GB / 12 GB               | 400 %             |
| OmniHeuris, OmniMind | (مخزنهای خودشان) | فقط Dependabot (اوج مصرف هرکدام 155 MB در 2026-10-18)                                                                                           | 4 GB / 6 GB                | 200 % برای هرکدام |

اندازهگیریشده در 2026-10-18:

| منبع      | مقدار                        | مفهوم آن برای زمانبندی                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 هسته**          | اوج مصرف یک بیلد production در Turbopack بدون محدودیت به 49 GB رسید (`tests/unit/ci-build-bundler-webpack.test.ts`)؛ در Next 16.3.8، مرحلهٔ compile بهتنهایی حدود 40 GB را اشغال میکند (36 GB از نوع RSS در `next-build` بههمراه 17 worker مربوط به loader با مصرف 3 GB، اندازهگیریشده در 2026-10-18)؛ مصرف یک بیلد webpack حدود 14–16 GB است. یک بیلد Turbopack و یک بیلد webpack همزمان در منابع موجود جا میشوند؛ دو بیلد Turbopack خیر |
| swap      | 16 GB                        | `omniroute-113-5` با swap غیرفعال اجرا میشود (`MemorySwapMax=0`) تا یک بیلد خارجشده از کنترل، بهجای وادار کردن سرور به swap، در سقف تعیینشده متوقف شود                                                                                                                                                                                                                                                                                    |
| `/tmp`    | **12 GB tmpfs = RAM**        | هر چیزی که در آن قرار بگیرد حافظه مصرف میکند؛ موارد باقیمانده پس از 3 ساعت پاکسازی میشوند                                                                                                                                                                                                                                                                                                                                                 |
| CPU       | بار 60 روی 32 هسته مشاهده شد | پیش از اعمال سهمیهها، یک بیلد Turbopack (حدود 1166 % CPU) بههمراه یک مجموعه تست coverage روی همان سرور، heartbeatهای listenerهای دیگر را از منابع محروم کرد (`The self-hosted runner lost communication`، #16853)                                                                                                                                                                                                                         |
| runnerها  | **6 listener**               | 4 مورد برای OmniRoute + OmniHeuris + OmniMind؛ `omniroute-113-3/-4/-7/-8` غیرفعال هستند (`systemctl enable --now` یکی از آنها را دوباره فعال میکند)                                                                                                                                                                                                                                                                                       |

محدودیتها در `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` مربوط به هر unit
قرار دارند (مقادیر قبلی با نام `override.conf.bak-20261018` نگهداری شدهاند) و بهصورت زنده با
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` اعمال شدند — بدون restart،
بنابراین هیچ job در حال اجرایی تحتتأثیر قرار نگرفت. labelها نیز از طریق API مربوط به runnerها تغییر میکنند
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) و این تغییر نیز بهصورت زنده انجام میشود.

## نصب پاکساز (یکبار، روی سرور)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (کاربر root): هر ۳۰ دقیقه، ثبت لاگ در /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

وجود `lsof` الزامی است: پاکساز، پیش از حذف یک مسیر، با یک snapshot از فایلهای باز
ثابت میکند که مسیر بدون استفاده است؛ بدون این ابزار چیزی را حذف نمیکند و این موضوع را اعلام
میکند (exit 1). هر تغییری را ابتدا با `--dry-run` امتحان کنید — دقیقاً کاری را که قرار است
انجام دهد چاپ میکند و به هیچچیز دست نمیزند.

کاری که در هر اجرا انجام میدهد: باقیماندههای خودمان (`runner-*`، `omniroute-*`،
`next-build*`، `e2e-build.tar.gz`) را پس از **۳ ساعت روی tmpfs** و ۲۴ ساعت روی
`_work/_temp` دیسکی پاکسازی میکند؛ یک `next-build` قدیمیتر از ۷۵ دقیقه را متوقف میکند
(هیچ jobای اینقدر طول نمیکشد — در 2026-08-27، یک مورد پس از آنکه GitHub، job آن را
ازدسترفته اعلام کرده بود، ۷۰ دقیقه اجرا شد)؛ checkoutهای ۴۸ساعتهٔ runnerهایی را که unit
آنها **متوقف** است، پاک میکند؛ و برای دیسک ≥ ۸۵٪، مقدار memory PSI در
`full/avg60` ≥ ۱۰٪ و تعداد listenerهای بیشتر از `MAX_ACTIVE_RUNNERS` هشدار میدهد
(همراه با تفکیک omniroute/other). Exit 1 یعنی نیاز به رسیدگی وجود دارد؛ لاگ را بخوانید.

قانون ۷۵ دقیقهای، buildای را که GitHub پیشتر از آن صرفنظر کرده است شناسایی نمیکند. وقتی
`Runner.Listener` نمیتواند job خود را تمدید کند، در `_diag/Runner_*.log` پیام
`POST request to …/renewjob timed out after 100 seconds` دیده میشود، API حدود ده دقیقه
پس از آخرین تمدید موفق، وضعیت job را `completed` (ناموفق) گزارش میکند و `next-build`
بدون هیچ job متصلی به اجرای خود ادامه میدهد (2026-10-18: Build مربوط به #17066 در
19:43 ناموفق شد و build آن پنج دقیقه بعد همچنان ۴۰ GB را اشغال کرده بود). ref را در
جدیدترین `_diag/Worker_*.log` تأیید کنید، سپس فقط درخت build را بر اساس PID با SIGTERM
متوقف کنید — `next-build`، `npm run build`، `build-next-isolated.mjs` و workerهای
`_work`. هرگز به `Runner.Listener`، `RunnerService.js` یا `Runner.Worker` دست نزنید:
worker وضعیت job را cancelled گزارش میکند و listener خودبهخود دوباره آنلاین میشود.

## unitهای Runner: KillMode

مقدار پیشفرض `KillMode=process` برای runner، زنجیرهٔ `Runner.Worker → npm → next-build`
را هنگام توقف یا راهاندازی مجدد یک unit زنده نگه میدارد — یک build یتیم، بدون هیچ job
متصلی، همچنان RAM و CPU مصرف میکند. هر unit مربوط به OmniRoute یک drop-in در
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
با `KillMode=mixed` دارد: ابتدا SIGTERM برای listener و سپس در زمان `TimeoutStop`،
SIGKILL برای کل cgroup ارسال میشود. این تنظیم در راهاندازی مجدد بعدی unit اعمال میشود —
هر بار **فقط یک runner و تنها زمانی که idle است** راهاندازی مجدد کنید و بررسی idle بودن و
راهاندازی مجدد را در همان command انجام دهید.

## قواعد عملیاتی

- **هر بار فقط یک بیلد Turbopack — اعمالشده با برچسب.** هر جابی که یک
  `next build` کامل با Turbopack اجرا میکند، `[self-hosted, omni-build]` را هدف میگیرد و فقط
  **`omniroute-113-5`** این برچسب را دارد: `ci.yml` `Build`، `npm-publish.yml` `publish`،
  `nightly-v4-build`، `preview-artifact`، بیلد شبانه a11y (#16853) و **amd64** در
  `docker-publish.yml` (webpack داخل BuildKit — در آنجا Turbopack با خطای panic متوقف شد،
  اجرای 33253576569). بخش arm64 مربوط به Docker همچنان روی `ubuntu-24.04-arm` باقی میماند.
  amd64 در `docker-publish` گروه همزمانی `heavy-build-main` را با `Build` در `ci.yml` بهاشتراک
  میگذارد (`cancel-in-progress: false`). Docker Engine باید روی `omniroute-113-5` باشد. اسلات
  دوم Turbopack در 78 GB جا نمیشود (2 × 33–37 GB بهعلاوه بقیه مصرف سیستم)؛ اسلات دوم فقط برای
  بیلدهای webpack امن است.
- **بیلدهای Pull Request روی runner میزبانیشده اجرا میشوند (2026-10-18).** `Build` در `ci.yml`
  فقط برای `push` و `workflow_dispatch` به `omni-build` میرسد؛ `Build` مربوط به هر
  `pull_request` (از مخزن خودی یا fork) و `merge_group` روی `ubuntu-latest` و با webpack اجرا
  میشود. وقتی هر PR خودی به اسلات هدایت میشد، یک بیلد Turbopack آن را 29–58 دقیقه اشغال
  میکرد، 18 بیلد تا 18 ساعت در صف ماندند و بیلد push خود شاخه انتشار تنها در یکی از 40 جاب
  اسلات را بهدست آورد. روی runner میزبانیشده، همان بیلد PR در کنار سایر جابهای PR بین 8–12
  دقیقه طول میکشد. Turbopack، یعنی bundlerای که `npm-publish` منتشر میکند، همچنان در شاخه
  انتشار از طریق بیلد شبانه a11y شاخه پیشفرض (04:41 UTC)، هر بیلد push یا dispatch که به
  اسلات برسد و خود `npm-publish` آزمایش میشود.
  `tests/unit/build/heavy-build-queue.test.ts` این شرط چهارگانه را تثبیت میکند.
- **هرگز اسلات Turbopack را کوچکتر از نیاز اندازهگیریشده آن تنظیم نکنید.** در 2026-10-18
  ساعت 18:06، برای ایجاد فضا برای `omni-release`، ظرفیت اسلات از 56G/60G به 40G/44G کاهش یافت.
  فاز کامپایل در تمام مدت اجرا روی `MemoryHigh` ماند (مقدار `full` در memory PSI برابر با
  30–43 % بود) و `Runner.Listener` که همان cgroup را بهاشتراک میگذارد، نتوانست جاب خود را
  تمدید کند. مقدار 56G/60G مالک در 2026-10-17 همان روز بازگردانده شد. پایینتر از این مقدار،
  بیلد شکست نمیخورد؛ وارد thrashing میشود و جاب از دست میرود.
- **Release-Green اسلات اختصاصی خود را دارد (2026-10-18).** تا آن زمان، هر دو اعتبارسنجی
  Release-Green روی `omni-build` اجرا میشدند: در هر push (حدود 10 بار در ساعت؛ 97 مورد از 100
  اجرای push طی یک روز در میانه کار لغو شدند) و سه پیمایش کامل حدوداً 2 ساعته در روز (پیمایش
  05:29 برای اسلات 6 ساعت منتظر ماند) — بار واردشده بر تنها اسلات بیلد چندین برابر ظرفیت آن
  بود و بیلدهای PR خودی ساعتها منتظر میماندند. اکنون `release-green` و `main-green`،
  `omni-release` (فقط `omniroute-113-6`) را با `OMNIROUTE_USE_TURBOPACK=0` هدف میگیرند و اجرای
  آغازشده دیگر با push جدیدتر لغو نمیشود (اسلات در انتظار همچنان موج درخواستها را ادغام
  میکند). `tests/unit/build/runner-capacity-routing.test.ts` مسیریابی، سوییچ webpack و این
  واقعیت را تثبیت میکند که هیچچیز روی `omni-release` با Turbopack بیلد نمیشود.
- **مخزن سبک: `omni-light`.** `omniroute-113` و `omniroute-113-2` اجراهای شبانهای را انجام
  میدهند که به یک `next build` صرفاً backend نیاز دارند (حدود 5–6 GB؛ با webpack)، بههمراه
  `lint-guard` در `quality.yml`. تا 2026-10-18، مقدار `MemoryHigh=4G` روی `omniroute-113` تنظیم
  شده بود — بیلد promptfoo با اتکا به بازیابی حافظه، طی 54 دقیقه در آنجا پیش رفت؛ 8 GB محدودسازی
  را برطرف میکند.
- **عمداً listenerهای کمتری وجود دارد.** چهار واحد OmniRoute در 2026-08-29 غیرفعال شدند — هر
  listener اضافی، مستأجر دیگری برای بودجه حافظه بالا است. سقف janitor برابر با 6 است
  (`MAX_ACTIVE_RUNNERS=6` در cron): این مقدار همه `Runner.Listener`های روی ماشین را میشمارد و
  OmniHeuris + OmniMind دو مورد را به چهار مورد ما اضافه میکنند.
- **هنگامی که هر runnerای مشغول است، هرگز `/tmp` یا `_work` را دستی پاک نکنید.** بررسی و سپس
  حذف با فاصله زمانی میان این دو مرحله، همان روشی است که باعث شد یک جاب فعال Build در
  2026-08-27 دایرکتوری `_work` خود را از دست بدهد. janitor بررسی و حذف را در یک مرحله انجام
  میدهد؛ اجازه دهید خودش این کار را انجام دهد.
- متوقفکردن runner در میانه جاب، جاب را لغو میکند (بهصورت زنده مشاهده شده است):
  `systemctl stop` را فقط زمانی اجرا کنید که listener آن هیچ فرزند `Runner.Worker` نداشته
  باشد — و این کار را با یک فرمان انجام دهید.
- workflowها نباید artefactها را در `/tmp` قرار دهند (این مسیر در RAM است). آنها را در
  `$RUNNER_TEMP` دانلود کنید (روی دیسک و مختص هر runner) — انتقال artefact 1.3 GB مربوط به
  `next-build` به tmpfs بین 27–32 دقیقه طول کشید، اما آپلود آن از دیسک 2 دقیقه زمان برد.
- VPS با آدرس `.15` فقط برای homologation است — هرگز runnerهای CI را اجرا نمیکند.

## مسیر میزبانیشده (اجراکنندههای میزبانیشده توسط GitHub)

حساب روی پلن **Pro** قرار دارد: **40 کار میزبانیشدهٔ همزمان** که میان تمام بررسیهای PR،
تمام گردشکارهای فعالشده با push و پیکربندی پیشفرض CodeQL مشترک هستند. اندازهگیری در 2026-10-18 و طی یک
کارزار ادغام (حدود 10 ادغام در ساعت روی `release/v3.8.52`) نشان داد: **2,500 اجرای گردشکار در
24 ساعت ایجاد شد**، 44 بار push به شاخه طی 6 ساعت انجام شد و **106 کار میزبانیشده در صف قرار گرفتند**؛ در همین حال، بررسیهای PR
ساعتها منتظر ماندند و PRها بدون آنها ادغام شدند. در هر push به این شاخه، نه گردشکار اجرا میشد:

| بهازای هر push به `release/v*`              | کارهای میزبانیشده | نتیجه در زمان هجوم                                                    | از 2026-10-18                                                                         |
| ------------------------------------------- | ----------------: | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `ci.yml` (ماتریس کامل)                      |         حداکثر 30 | با push بعدی لغو شد؛ 24 مورد از 24 مورد در یک روز                     | در pushهای `release/**` شروع نمیشود (اجرای PR + Release-Green)                        |
| `quality.yml`                               |                ~6 | لغو شد؛ 23 مورد از 23 مورد                                            | در pushهای `release/**` شروع نمیشود                                                   |
| `Release-Green` `--quick`                   |                 0 | روی `omni-build` اجرا شد؛ 97 مورد از 100 مورد لغو شد                  | جایگاه `omni-release`، هرگز لغو نمیشود، اجراهای در انتظار ادغام میشوند                |
| `Lock released branch`، `OpenSSF Scorecard` |                 2 | بهازای هر push یک اجرا در صف قرار گرفت                                | یک اجرا بهازای هر ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)            |
| `Release acceptance` (گزارش سایه)           |                 1 | بهازای هر push یک `npm ci` میزبانیشده؛ هرگز لغو نشد                   | بدون تغییر — گزینهای برای فیلتر `paths:`                                              |
| `Publish to Docker Hub` → `Deploy to VPS`   |                 2 | بهازای هر push لغو شد؛ بخش amd64 روی `omni-build` رقابت میکند         | بدون تغییر — کانال استقرار مالک                                                       |
| پیکربندی پیشفرض CodeQL (`dynamic`)          |                 4 | بهازای هر push، `javascript-typescript`، `actions`، `c-cpp`، `python` | بدون تغییر — Settings → Code security؛ `c-cpp`/`python` در اینجا چیزی را اسکن نمیکنند |

`tests/unit/build/push-storm-diet.test.ts`، محرک push صرفاً برای `main` در `ci.yml` و
`quality.yml` را تثبیت میکند. اثر جانبی: Codecov دیگر بهازای هر push انتشار، آپلود پایه دریافت نمیکند (این
مرحله صرفاً اطلاعرسانی است و `continue-on-error` دارد)؛ دروازهٔ پوشش درون مخزن و دیدگاه PR
تحت تأثیر قرار نمیگیرند.

**افزایش ظرفیت خودمیزبان، صف میزبانیشده را برطرف نمیکند.** devbox
(`devbox-vm-06-dev002`، 24 vCPU / 54 GB) میتواند میزبان یک اجراکننده باشد، اما نشستهای عامل از قبل
بار آن را روی 20 تا 26 نگه میدارند، کانتینر عامل Docker daemon ندارد و مسیر اشباعشده
همان مسیر میزبانیشده است. دستگاه `.113` در همان لحظه 71 GB فضای خالی و بار 5 تا 8 داشت؛ محدودیت آن
بودجهٔ حافظهٔ فوق برای هر listener است (سقف 6 listener)، نه CPU. اهرمهای باقیمانده
فرایندی هستند: PRهای کارزار را از طریق صف Mergify ادغام کنید (`label=queue`؛ دستهها بهجای یک اجرا برای هر PR
بهعلاوه یک اجرا برای هر push، یک اجرای CI مشترک `merge_group` دارند)، زبانهای پیکربندی پیشفرض CodeQL
را کاهش دهید و `release-acceptance.yml` را بر اساس فایلهایی که میخواند فیلتر کنید.
