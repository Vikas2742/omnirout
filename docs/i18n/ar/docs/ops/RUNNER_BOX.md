# Self-Hosted Runner Box Operations (.113 pool) (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

يعمل التجمع ذاتي الاستضافة على جهاز **.113** (`tomni-proxmox-113`). منذ 2026-10-18، أصبح لكل
مشغّل OmniRoute **دور واحد**، وتصنيف واحد، وميزانية ذاكرة/CPU متناسبة مع القياسات الفعلية لعبء العمل
الخاص به. تحصل خانة Turbopack على الموارد التي يحتاجها البناء؛ أما الخانات الأخرى فأحجامها متوافقة مع
الذروات المقاسة. لا يتجاوز الجهاز موارده الفعلية إلا عندما يتزامن بناء Turbopack مع بناء webpack من Release-Green
ومهمة lint؛ وتمتص مساحة swap الخاصة بالمضيف (16 GB) هذا التجاوز، ولأن عمليات `Build` الخاصة بطلبات السحب تعمل
على بنية مستضافة، تظل خانة Turbopack خاملة معظم الوقت:

| المشغّل              | التصنيف        | الدور                                                                                                                                                            | `MemoryHigh` / `MemoryMax`       | `CPUQuota`      |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`   | عمليات بناء Turbopack: ‏`ci.yml` ‏`Build` (للدفع/التشغيل اليدوي فقط)، وDocker amd64، و`npm-publish`، و`nightly-v4-build`، و`preview-artifact`، وبناء a11y الليلي | 56 GB / 60 GB (‏swap بقيمة 0)    | 1600 %          |
| `omniroute-113-6`    | `omni-release` | ‏Release-Green‏ (`release-green` + `main-green`)، وبناء webpack                                                                                                  | 20 GB / 24 GB (‏swap بقيمة 4 GB) | 800 %           |
| `omniroute-113-2`    | `omni-light`   | المهام الليلية (Schemathesis، وpromptfoo، وgarak، وk6، وتمهيد a11y) و`lint-guard` في `quality.yml`                                                               | 12 GB / 16 GB (‏swap بقيمة 4 GB) | 600 %           |
| `omniroute-113`      | `omni-light`   | التجمع نفسه المذكور أعلاه                                                                                                                                        | 8 GB / 12 GB                     | 400 %           |
| OmniHeuris, OmniMind | (مستودعاتهما)  | ‏Dependabot فقط (ذروة 155 MB لكل منهما، 2026-10-18)                                                                                                              | 4 GB / 6 GB                      | 200 % لكل منهما |

القياسات بتاريخ 2026-10-18:

| المورد    | القيمة                       | ما يعنيه ذلك للجدولة                                                                                                                                                                                                                                                                                                                                                                 |
| --------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 نواة**          | بلغ بناء إنتاج Turbopack ذروة قدرها 49 GB دون قيود (`tests/unit/ci-build-bundler-webpack.test.ts`)؛ وفي Next 16.3.8، تستهلك مرحلة التجميع وحدها نحو 40 GB (‏36 GB من RSS في `next-build` بالإضافة إلى 17 عامل تحميل عند 3 GB، وفق قياسات 2026-10-18)؛ ويستهلك بناء webpack نحو 14–16 GB. يمكن تشغيل بناء Turbopack واحد مع بناء webpack واحد؛ لكن لا يمكن تشغيل بنائي Turbopack معًا |
| swap      | 16 GB                        | يعمل `omniroute-113-5` مع تعطيل swap (`MemorySwapMax=0`)، بحيث يُوقَف أي بناء منفلت عند الحد الأقصى المخصص له بدلًا من دفع الجهاز إلى استخدام swap                                                                                                                                                                                                                                   |
| `/tmp`    | **‏tmpfs بسعة 12 GB = RAM**  | أي شيء يُترك هناك يستهلك الذاكرة؛ وتُزال البقايا بعد 3 ساعات                                                                                                                                                                                                                                                                                                                         |
| CPU       | لوحظ حمل قدره 60 على 32 نواة | قبل تطبيق الحصص، تسبب بناء Turbopack واحد (نحو 1166 % من CPU) بالتزامن مع حزمة اختبارات تغطية على الجهاز نفسه في حرمان نبضات اتصال المستمعين الآخرين من الموارد (`The self-hosted runner lost communication`، #16853)                                                                                                                                                                |
| المشغّلات | **6 مستمعين**                | ‏4 لـ OmniRoute، بالإضافة إلى OmniHeuris وOmniMind؛ والمشغّلات `omniroute-113-3/-4/-7/-8` معطلة (`systemctl enable --now` يعيد أحدها إلى الخدمة)                                                                                                                                                                                                                                     |

توجد الحدود في `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` لكل وحدة
(مع الاحتفاظ بالقيم السابقة باسم `override.conf.bak-20261018`)، وقد طُبّقت مباشرةً باستخدام
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — دون إعادة تشغيل، ولذلك لم
تتأثر أي مهمة قيد التشغيل. تُغيّر التصنيفات من خلال واجهة API الخاصة بالمشغّلات
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`)، وبشكل مباشر أيضًا.

## تثبيت أداة التنظيف (مرة واحدة، على الخادم)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron ‏(root): كل 30 دقيقة، مع تسجيل السجل في /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

الأداة `lsof` مطلوبة: تتحقق أداة التنظيف من أن المسار خامل عبر لقطة واحدة للملفات
المفتوحة قبل إزالته، ومن دون هذه الأداة لا تزيل أي شيء وتوضح ذلك
(exit 1). جرّب أي تغيير باستخدام `--dry-run` أولًا — إذ يطبع بالضبط ما سيفعله
من دون أن يغيّر أي شيء.

ما تفعله عند كل تشغيل: تنظّف البقايا الخاصة بنا (`runner-*` و`omniroute-*`
و`next-build*` و`e2e-build.tar.gz`) بعد **3 ساعات على tmpfs** و24 ساعة على القرص
في `_work/_temp`؛ وتنهي عملية `next-build` يتجاوز عمرها 75 دقيقة (لا تستغرق أي مهمة كل هذا الوقت — في
2026-08-27 استمرت إحداها 70 دقيقة بعد أن أعلن GitHub أن مهمتها مفقودة)؛ وتحذف نسخ العمل التي مرّ
عليها 48 ساعة والخاصة بالمشغّلات التي تكون وحدتها **متوقفة**؛ وتُصدر تنبيهات عند وصول استخدام القرص إلى ≥ 85%،
أو وصول PSI للذاكرة `full/avg60` إلى ≥ 10%، أو وجود مستمعين أكثر من `MAX_ACTIVE_RUNNERS` (مع
تفصيل omniroute/other). ‏Exit 1 = يلزم الانتباه؛ راجع السجل.

لا تكتشف قاعدة الـ75 دقيقة عملية بناء تخلّى GitHub عن مهمتها بالفعل. عندما يتعذر على
`Runner.Listener` تجديد مهمته، يعرض `_diag/Runner_*.log` الرسالة
`POST request to …/renewjob timed out after 100 seconds`، وتعرض API المهمة بالحالة `completed`
(فشل) بعد نحو عشر دقائق من آخر تجديد ناجح، بينما تستمر `next-build` في العمل
من دون مهمة مرتبطة بها (2026-10-18: فشلت عملية Build الخاصة بـ#17066 عند 19:43، وكانت عملية البناء
لا تزال تشغل 40 GB بعد خمس دقائق). أكّد المرجع في أحدث ملف `_diag/Worker_*.log`، ثم
أرسل SIGTERM إلى شجرة البناء فقط حسب PID — أي `next-build` و`npm run build` و`build-next-isolated.mjs`
وعمليات `_work`. لا تلمس مطلقًا `Runner.Listener` أو `RunnerService.js` أو `Runner.Worker`: إذ
يُبلغ العامل عن إلغاء المهمة، ويعود المستمع إلى الاتصال تلقائيًا.

## وحدات المشغّل: KillMode

تترك القيمة الافتراضية `KillMode=process` للمشغّل السلسلة `Runner.Worker → npm → next-build`
قيد التشغيل عند إيقاف وحدة أو إعادة تشغيلها — فتستمر عملية بناء يتيمة في استهلاك RAM و
CPU من دون مهمة مرتبطة بها. تحتوي كل وحدة OmniRoute على ملف إعداد إضافي
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
يتضمن `KillMode=mixed`: تُرسل SIGTERM إلى المستمع أولًا، ثم SIGKILL إلى مجموعة cgroup بالكامل عند
`TimeoutStop`. يسري مفعوله عند إعادة تشغيل الوحدة في المرة التالية — أعد تشغيل **مشغّل واحد في
كل مرة، وفقط عندما يكون خاملًا**، مع تنفيذ فحص الخمول وإعادة التشغيل في الأمر نفسه.

## قواعد التشغيل

- **بناء Turbopack واحد في كل مرة — ويُفرض ذلك بواسطة التصنيف.** كل مهمة تشغّل أمر
  `next build` كاملًا باستخدام Turbopack تستهدف `[self-hosted, omni-build]`، ولا يحمل هذا
  التصنيف سوى **`omniroute-113-5`**: مهمة `Build` في `ci.yml`، ومهمة `publish` في `npm-publish.yml`،
  و`nightly-v4-build`، و`preview-artifact`، وبناء a11y الليلي (#16853)، ونسخة **amd64** في
  `docker-publish.yml` (باستخدام webpack داخل BuildKit — إذ تعطل Turbopack هناك، في التشغيل
  33253576569). تظل مرحلة Docker الخاصة بـ arm64 على `ubuntu-24.04-arm`.
  تشترك مرحلة amd64 في `docker-publish` في مجموعة التزامن `heavy-build-main` مع مهمة `Build`
  في `ci.yml` (`cancel-in-progress: false`). يجب أن يكون Docker Engine متاحًا على
  `omniroute-113-5`. لا تتسع ذاكرة قدرها 78 GB لخانة Turbopack ثانية (2 × 33–37 GB بالإضافة
  إلى بقية أحمال الجهاز)؛ ولا تكون الخانة الثانية آمنة إلا لعمليات البناء باستخدام webpack.
- **تعمل عمليات البناء لطلبات السحب على بنية مستضافة (2026-10-18).** لا تصل مهمة `Build` في
  `ci.yml` إلى `omni-build` إلا عند `push` و`workflow_dispatch`؛ أما مهمة Build لكل
  `pull_request` (سواء من المصدر نفسه أو من fork) ولكل `merge_group` فتعمل على
  `ubuntu-latest` باستخدام webpack. عندما كان كل PR من المصدر نفسه يُوجَّه إلى الخانة، كانت
  عملية Build باستخدام Turbopack تشغلها لمدة 29–58 دقيقة، وانتظرت 18 عملية Build في الطابور
  لمدة وصلت إلى 18 ساعة، ولم يحصل بناء push الخاص بفرع الإصدار نفسه على الخانة سوى مرة واحدة
  ضمن 40 مهمة. على البنية المستضافة، تستغرق عملية Build نفسها الخاصة بـ PR مدة 8–12 دقيقة
  بالتوازي مع مهام PR الأخرى. يظل Turbopack، وهو أداة التجميع التي يشحنها `npm-publish`،
  قيد الاختبار على فرع الإصدار من خلال بناء a11y الليلي للفرع الافتراضي (04:41 UTC)، ومن خلال
  كل عملية Build ناتجة عن push أو dispatch تصل إلى الخانة، ومن خلال `npm-publish` نفسه.
  يثبّت `tests/unit/build/heavy-build-queue.test.ts` البوابة ذات الشروط الأربعة.
- **لا تقلّص أبدًا خانة Turbopack إلى أقل من حاجتها المقاسة.** في 2026-10-18 الساعة 18:06،
  خُفِّضت الخانة من 56G/60G إلى 40G/44G لإفساح المجال لـ `omni-release`. ظلت مرحلة التصريف
  عند حد `MemoryHigh` طوال تشغيلها (بلغ مؤشر ضغط الذاكرة PSI من النوع `full` نسبة 30–43٪)،
  ولم يتمكن `Runner.Listener`، الذي يشارك cgroup نفسه، من تجديد مهمته. أُعيدت إعدادات المالك
  البالغة 56G/60G والمؤرخة في 2026-10-17 في اليوم نفسه. دون هذه القيمة، لا يفشل البناء؛ بل
  يدخل في حالة استنزاف مستمر للموارد، وتُفقد المهمة.
- **لدى Release-Green خانته الخاصة (2026-10-18).** حتى ذلك الحين، كانت عمليتا التحقق
  Release-Green تعملان على `omni-build`: عند كل push (نحو 10 في الساعة، مع إلغاء 97 من أصل
  100 تشغيل push أثناء العمل خلال يوم واحد)، وثلاث عمليات مسح كاملة يوميًا مدة كل منها نحو
  ساعتين (انتظر مسح الساعة 05:29 مدة 6 ساعات للحصول على الخانة) — ما أدى إلى زيادة الطلب على
  خانة البناء الوحيدة عدة أضعاف، وانتظرت عمليات Build الخاصة بطلبات PR من المصدر نفسه لساعات.
  يستهدف `release-green` و`main-green` الآن `omni-release` (`omniroute-113-6` فقط) مع
  `OMNIROUTE_USE_TURBOPACK=0`، ولم يعد تشغيل بدأ بالفعل يُلغى بسبب push أحدث (لكن الخانة
  المعلقة لا تزال تدمج سيل الطلبات). يثبّت
  `tests/unit/build/runner-capacity-routing.test.ts` التوجيه، والتحويل إلى webpack، وحقيقة أن
  لا شيء على `omni-release` يُبنى باستخدام Turbopack.
- **المجموعة الخفيفة: `omni-light`.** يشغّل `omniroute-113` و`omniroute-113-2` المهام الليلية
  التي تحتاج إلى `next build` للخلفية فقط (نحو 5–6 GB؛ باستخدام webpack)، ومهمة `lint-guard`
  في `quality.yml`. كان `MemoryHigh=4G` على `omniroute-113` حتى 2026-10-18 — واستغرق بناء
  promptfoo هناك 54 دقيقة وهو يستعيد الذاكرة باستمرار؛ وتزيل سعة 8 GB هذا الاختناق.
- **عدد أقل من المستمعين عن قصد.** عُطّلت أربع وحدات OmniRoute في 2026-08-29 — فكل مستمع
  إضافي يُعد مستأجرًا آخر ضمن ميزانية الذاكرة الموضحة أعلاه. الحد الأقصى لعامل التنظيف هو 6
  (`MAX_ACTIVE_RUNNERS=6` في cron): فهو يحسب كل `Runner.Listener` على الجهاز، ويضيف
  OmniHeuris وOmniMind اثنين إلى وحداتنا الأربع.
- **لا تنظّف `/tmp` أو `_work` يدويًا أبدًا أثناء انشغال أي مشغّل.** أدى إجراء
  فحص ثم حذف مع وجود فاصل زمني بينهما إلى فقدان مهمة Build نشطة لمجلد
  `_work` الخاص بها في 2026-08-27. ينفذ عامل التنظيف الفحص والإزالة في خطوة واحدة؛
  فاترك المهمة له.
- يؤدي إيقاف مشغّل في منتصف المهمة إلى إلغاء المهمة (وقد لوحظ ذلك مباشرة): لا تستخدم
  `systemctl stop` إلا عندما لا تكون لدى المستمع الخاص به عملية `Runner.Worker` فرعية —
  ونفّذ ذلك بأمر واحد.
- يجب ألا تخزّن مسارات العمل العناصر الأثرية في `/tmp` (فهو موجود في RAM). نزّلها إلى
  `$RUNNER_TEMP` (على القرص، لكل مشغّل) — فقد استغرق وصول العنصر الأثري `next-build` بحجم
  1.3 GB إلى tmpfs مدة 27–32 دقيقة، بينما استغرق رفعه من القرص دقيقتين.
- خادم VPS ذو اللاحقة `.15` مخصص لبيئة التجانس فقط — ولا يشغّل أبدًا مشغّلات CI.

## المسار المستضاف (مشغّلات مستضافة على GitHub)

الحساب مشترك في خطة **Pro**: **40 مهمة مستضافة متزامنة**، تتشارك فيها جميع عمليات فحص طلبات السحب،
وكل مهام سير العمل التي تُشغَّل عند الدفع، والإعداد الافتراضي لـ CodeQL. أُجري القياس في 2026-10-18 أثناء
حملة دمج (نحو 10 عمليات دمج/ساعة على `release/v3.8.52`): أُنشئ **2,500 تشغيل لسير العمل خلال
24 ساعة**، مع 44 عملية دفع إلى الفرع خلال 6 ساعات، واصطفت **106 مهام مستضافة في قائمة الانتظار** بينما انتظرت عمليات فحص طلبات السحب
لساعات، ودُمجت طلبات السحب من دونها. كانت تسعة من مهام سير العمل تُشغَّل عند كل عملية دفع إلى الفرع:

| لكل عملية دفع إلى `release/v*`              | المهام المستضافة | النتيجة أثناء العاصفة                                                  | منذ 2026-10-18                                                                       |
| ------------------------------------------- | ---------------: | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `ci.yml` (المصفوفة الكاملة)                 |           حتى 30 | أُلغيت بسبب عملية الدفع التالية، 24 من أصل 24 خلال يوم                 | لا تبدأ عند عمليات الدفع إلى `release/**` (تشغيل طلب السحب + Release-Green)          |
| `quality.yml`                               |               ~6 | أُلغيت، 23 من أصل 23                                                   | لا تبدأ عند عمليات الدفع إلى `release/**`                                            |
| `Release-Green` `--quick`                   |                0 | عملت على `omni-build`، وأُلغي 97 من أصل 100                            | فتحة `omni-release`، لا تُلغى مطلقًا، وتُدمج عمليات التشغيل المعلّقة                 |
| `Lock released branch`، `OpenSSF Scorecard` |                2 | تشغيل واحد في قائمة الانتظار لكل عملية دفع                             | تشغيل واحد لكل مرجع (`tests/unit/build/hosted-lane-concurrency.test.ts`)             |
| `Release acceptance` (تقرير ظلّي)           |                1 | عملية `npm ci` مستضافة واحدة لكل عملية دفع، ولا تُلغى مطلقًا           | دون تغيير — مرشحة لاستخدام مرشّح `paths:`                                            |
| `Publish to Docker Hub` → `Deploy to VPS`   |                2 | تُلغى لكل عملية دفع؛ ينافس مسار amd64 على `omni-build`                 | دون تغيير — قناة النشر الخاصة بالمالك                                                |
| الإعداد الافتراضي لـ CodeQL (`dynamic`)     |                4 | `javascript-typescript`، و`actions`، و`c-cpp`، و`python` لكل عملية دفع | دون تغيير — الإعدادات → أمان التعليمات البرمجية؛ لا يفحص `c-cpp`/`python` أي شيء هنا |

يثبّت `tests/unit/build/push-storm-diet.test.ts` مشغّل الدفع المقتصر على `main` في `ci.yml` و
`quality.yml`. أثر جانبي: لم يعد Codecov يتلقى رفعًا أساسيًا مع كل عملية دفع إلى فرع إصدار (الخطوة
معلوماتية وتستخدم `continue-on-error`)؛ ولا تتأثر بوابة التغطية داخل المستودع ولا تعليق طلب السحب.

**إضافة سعة مستضافة ذاتيًا لا تحل مشكلة قائمة انتظار المهام المستضافة.** يمكن لجهاز التطوير
(`devbox-vm-06-dev002`،‏ 24 وحدة vCPU / ‏54 GB) استضافة مشغّل، لكن جلسات الوكلاء الحالية
تُبقي حِمله بين 20 و26، ولا تحتوي حاوية الوكيل على برنامج Docker الخفي، بينما المسار المشبع
هو المسار المستضاف. كان لدى جهاز `.113` مساحة خالية تبلغ 71 GB وحِمل يتراوح بين 5 و8 في اللحظة نفسها؛ والقيد
لديه هو ميزانية الذاكرة لكل مستمع المذكورة أعلاه (بحد أقصى 6 مستمعين)، وليس وحدة المعالجة المركزية. أما وسائل التحكم المتبقية
فهي إجرائية: دمج طلبات السحب الخاصة بالحملة عبر قائمة انتظار Mergify (`label=queue`، حيث تتشارك الدُفعات
تشغيل CI واحدًا لـ `merge_group` بدلًا من تشغيل لكل طلب سحب بالإضافة إلى تشغيل لكل عملية دفع)، وتقليص لغات
الإعداد الافتراضي لـ CodeQL، وترشيح `release-acceptance.yml` وفقًا للملفات التي يقرأها.
