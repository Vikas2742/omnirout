# Self-Hosted Runner Box Operations (.113 pool) (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Самостоятелно хостваният пул работи на машината **.113** (`tomni-proxmox-113`). От 2026-10-18 всеки
runner на OmniRoute има **една роля**, един етикет и бюджет за памет/CPU, оразмерен според измереното
натоварване. Слотът за Turbopack получава необходимите за компилацията ресурси; останалите слотове са оразмерени според
измерените им пикови стойности. Машината надвишава физическия си капацитет само когато компилация с Turbopack съвпадне с компилация
с webpack на Release-Green и задача за lint; swap пространството на хоста (16 GB) поема това, а понеже компилациите за pull request се изпълняват
на хоствани runner-и, слотът за Turbopack през повечето време е неактивен:

| runner               | етикет              | роля                                                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`        | Компилации с Turbopack: `ci.yml` `Build` (само при push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, нощната a11y компилация | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), компилация с webpack                                                                                            | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`        | нощни задачи (Schemathesis, promptfoo, garak, k6, стартиране на a11y) и `quality.yml` `lint-guard`                                                              | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`        | същият пул като по-горе                                                                                                                                         | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (техните хранилища) | само Dependabot (пик от 155 MB за всеки, 2026-10-18)                                                                                                            | 4 GB / 6 GB                | 200 % за всеки |

Измерено на 2026-10-18:

| ресурс    | стойност                               | какво означава това за планирането                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPU | **78 GB / 32 ядра**                    | производствена компилация с Turbopack достигна пик от 49 GB без ограничение (`tests/unit/ci-build-bundler-webpack.test.ts`); при Next 16.3.8 само фазата на компилиране заема ~40 GB (36 GB RSS в `next-build` плюс 17 loader worker-а по 3 GB, измерено на 2026-10-18); компилация с webpack заема ~14–16 GB. Една компилация с Turbopack и една с webpack могат да работят едновременно; две компилации с Turbopack не могат |
| swap      | 16 GB                                  | `omniroute-113-5` работи с изключен swap (`MemorySwapMax=0`), така че неконтролируема компилация се прекратява при достигане на лимита си, вместо да принуждава машината да използва swap                                                                                                                                                                                                                                      |
| `/tmp`    | **12 GB tmpfs = RAM**                  | всичко, съхранявано там, заема памет; остатъчните файлове се изчистват след 3 часа                                                                                                                                                                                                                                                                                                                                             |
| CPU       | наблюдавано натоварване 60 при 32 ядра | преди квотите една компилация с Turbopack (~1166 % CPU), заедно с тестов пакет за coverage на същата машина, лишаваше сигналите за активност на останалите listener-и от ресурси (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                         |
| runner-и  | **6 listener-а**                       | 4 за OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` са деактивирани (`systemctl enable --now` връща един от тях в действие)                                                                                                                                                                                                                                                                                     |

Ограниченията се намират във файла `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
на всяка unit услуга (предишните стойности са запазени като `override.conf.bak-20261018`) и бяха приложени в движение чрез
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — без рестартиране, така че нито една
изпълняваща се задача не беше засегната. Етикетите се променят чрез API за runner-и
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), също в движение.

## Инсталиране на почистващия скрипт (еднократно, на машината)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): на всеки 30 минути, запис в /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` е задължителен: почистващият скрипт удостоверява, че даден път не се използва, чрез една моментна снимка на отворените
файлове, преди да го премахне, а без този инструмент не премахва нищо и съобщава
това (exit 1). Първо изпробвайте всяка промяна с `--dry-run` — той извежда точно какво би
направил и не променя нищо.

Какво прави при всяко изпълнение: премахва собствените ни остатъчни файлове (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) след **3 ч. върху tmpfs** и 24 ч. върху диска
в `_work/_temp`; прекратява `next-build`, по-стар от 75 минути (нито едно задание не се изпълнява толкова дълго — на
2026-08-27 едно се изпълняваше 70 минути, след като GitHub беше обявил заданието му за изгубено); премахва checkout директории, по-стари от 48 ч.,
на runner-и, чийто unit е **спрян**; предупреждава при използван диск ≥ 85 %, memory PSI
`full/avg60` ≥ 10 % и повече слушатели от `MAX_ACTIVE_RUNNERS` (с разбивка
omniroute/други). Exit 1 = необходимо е внимание; прочетете лога.

Правилото за 75 минути не улавя build, от който GitHub вече се е отказал. Когато
`Runner.Listener` не може да поднови заданието си, `_diag/Runner_*.log` показва
`POST request to …/renewjob timed out after 100 seconds`, API отчита заданието като `completed`
(неуспешно) около десет минути след последното успешно подновяване, а `next-build` продължава да се изпълнява
без свързано задание (2026-10-18: заданието Build на #17066 беше отбелязано като неуспешно в 19:43, а build процесът му все още
заемаше 40 GB пет минути по-късно). Потвърдете ref-а в най-новия `_diag/Worker_*.log`, след което
изпратете SIGTERM само на дървото от build процеси по PID — `next-build`, `npm run build`, `build-next-isolated.mjs` и
worker процесите в `_work`. Никога не засягайте `Runner.Listener`, `RunnerService.js` или `Runner.Worker`:
worker процесът отчита заданието като отменено, а listener процесът сам се връща онлайн.

## Runner units: KillMode

Стандартната настройка `KillMode=process` на runner-а оставя `Runner.Worker → npm → next-build`
активни при спиране или рестартиране на unit-а — осиротял build процес продължава да изразходва RAM и
CPU без свързано задание. Всеки OmniRoute unit има drop-in конфигурация
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
с `KillMode=mixed`: първо SIGTERM към listener процеса, след това SIGKILL към цялата cgroup при
`TimeoutStop`. Настройката влиза в сила при следващото рестартиране на unit-а — рестартирайте **само по един runner**
и само когато не е зает, като проверката дали е свободен и рестартирането трябва да са в една и съща команда.

## Правила за работа

- **Само една Turbopack компилация наведнъж — наложено чрез етикет.** Всяка задача, която изпълнява пълна Turbopack
  `next build`, е насочена към `[self-hosted, omni-build]`, а само **`omniroute-113-5`** носи този
  етикет: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  нощната a11y компилация (#16853) и **amd64** в `docker-publish.yml` (webpack в BuildKit —
  Turbopack се срина там, изпълнение 33253576569). Вариантът arm64 за Docker остава на `ubuntu-24.04-arm`.
  amd64 в `docker-publish` споделя групата за паралелност `heavy-build-main` с `Build` в `ci.yml`
  (`cancel-in-progress: false`). Docker Engine трябва да бъде на `omniroute-113-5`. Втори Turbopack
  слот не се побира в 78 GB (2 × 33–37 GB плюс останалото на машината); втори слот е безопасен само за
  webpack компилации.
- **Компилациите за pull request се изпълняват в хоствана среда (2026-10-18).** `Build` в `ci.yml` достига `omni-build` само при
  `push` и `workflow_dispatch`; всяка `Build` задача за `pull_request` (от собствен или външен източник) и `merge_group`
  се изпълнява на `ubuntu-latest` с webpack. Когато всеки PR от собствен източник беше насочван към слота, една Turbopack
  `Build` го заемаше за 29–58 минути, 18 компилации чакаха на опашка до 18 часа, а собствената push компилация на клона
  за издаване получи слота веднъж на 40 задачи. В хоствана среда същата PR компилация отнема 8–12 минути успоредно с останалите
  задачи на PR-а. Turbopack — пакетиращият инструмент, който `npm-publish` разпространява — продължава да се упражнява върху клона
  за издаване от нощната a11y компилация на клона по подразбиране (04:41 UTC), от всяка push или dispatch компилация, която
  достига слота, и от самия `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  фиксира условието от четири клаузи.
- **Никога не оразмерявайте Turbopack слота под измерената му необходимост.** На 2026-10-18 в 18:06 слотът беше
  намален от 56G/60G на 40G/44G, за да се освободи място за `omni-release`. Фазата на компилиране остана на
  `MemoryHigh` през цялото изпълнение (memory PSI `full` 30–43 %), а `Runner.Listener`, който
  споделя cgroup, не можа да поднови задачата си. Зададените от собственика 56G/60G от 2026-10-17 бяха възстановени
  същия ден. Под тази стойност компилацията не се проваля; тя затъва в непрекъснато прехвърляне на памет и задачата се губи.
- **Release-Green има собствен слот (2026-10-18).** Дотогава и двете проверки на Release-Green се изпълняваха
  на `omni-build`: при всеки push (~10/час, 97 от 100 push изпълнения бяха отменени по средата на работата за един ден)
  и три пълни обхождания от по ~2 часа на ден (обхождането в 05:29 чака 6 часа за слота) — единичният слот за компилации
  беше претоварен многократно, а PR компилациите от собствен източник чакаха с часове.
  `release-green` и `main-green` вече са насочени към `omni-release` (само `omniroute-113-6`) с
  `OMNIROUTE_USE_TURBOPACK=0`, а започнало изпълнение вече не се отменя от по-нов push (чакащият
  слот все още свива наплива). `tests/unit/build/runner-capacity-routing.test.ts`
  фиксира маршрутизирането, превключването към webpack и изискването нищо на `omni-release` да не се компилира с Turbopack.
- **Лек пул: `omni-light`.** `omniroute-113` и `omniroute-113-2` изпълняват нощните задачи, които се нуждаят
  от `next build` само за бекенда (~5–6 GB; webpack), както и `lint-guard` от `quality.yml`. `omniroute-113`
  беше с `MemoryHigh=4G` до 2026-10-18 — компилацията на promptfoo си проправяше път чрез освобождаване на памет в продължение на 54 минути
  там; 8 GB премахват ограничаването.
- **Умишлено по-малко слушатели.** Четири OmniRoute модула бяха деактивирани на 2026-08-29 — всеки допълнителен
  слушател е още един потребител на горния бюджет за памет. Таванът на чистача е 6 (`MAX_ACTIVE_RUNNERS=6` в cron): той брои
  всеки `Runner.Listener` на машината, а OmniHeuris + OmniMind добавят два към нашите четири.
- **Никога не почиствайте `/tmp` или `_work` ръчно, докато който и да е runner е зает.**
  Проверка и последващо изтриване с пауза между тях доведоха до загуба на
  `_work` от активна `Build` задача на 2026-08-27. Чистачът извършва проверката и премахването в една стъпка;
  оставете го да го направи.
- Спирането на runner по средата на задача отменя задачата (наблюдавано на живо): използвайте `systemctl stop` само
  когато неговият слушател няма дъщерен процес `Runner.Worker` — и го направете с една команда.
- Работните потоци не трябва да оставят артефакти в `/tmp` (той е в RAM). Изтегляйте в
  `$RUNNER_TEMP` (на диск, отделно за всеки runner) — артефактът `next-build` от 1.3 GB отне 27–32
  минути, за да попадне в tmpfs, и 2 минути, за да бъде качен от диск.
- VPS машината `.15` е само за хомологация — никога не изпълнява CI runners.

## Хостван канал (хоствани от GitHub изпълнители)

Акаунтът е на план **Pro**: **40 едновременно изпълнявани хоствани задания**, споделяни от всички проверки на PR,
всички работни потоци, задействани при push, и конфигурацията по подразбиране на CodeQL. Измерено на 2026-10-18 по време на
кампания за сливане (~10 сливания/час в `release/v3.8.52`): **2 500 стартирания на работни потоци, създадени за
24 ч.**, 44 push операции към клона за 6 ч., **106 хоствани задания на опашка**, докато проверките на PR чакаха
с часове и PR заявките бяха сливани без тях. Девет работни потока се задействаха при всеки push към клона:

| при всеки push към `release/v*`                    | хоствани задания | резултат при претоварването                                          | от 2026-10-18                                                                      |
| -------------------------------------------------- | ---------------: | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ci.yml` (пълна матрица)                           |            до 30 | отменен от следващия push, 24 от 24 за един ден                      | не се стартира при push към `release/**` (изпълнение за PR + Release-Green)        |
| `quality.yml`                                      |               ~6 | отменен, 23 от 23                                                    | не се стартира при push към `release/**`                                           |
| `Release-Green` `--quick`                          |                0 | изпълнен на `omni-build`, отменени 97 от 100                         | слот `omni-release`, никога не се отменя, чакащите изпълнения се обединяват        |
| `Lock released branch`, `OpenSSF Scorecard`        |                2 | по едно изпълнение на опашка за всеки push                           | едно изпълнение за ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)        |
| `Release acceptance` (скрит отчет)                 |                1 | едно хоствано `npm ci` за всеки push, никога не се отменя            | без промяна — кандидат за филтър `paths:`                                          |
| `Publish to Docker Hub` → `Deploy to VPS`          |                2 | отменя се при всеки push; amd64 задачата се конкурира в `omni-build` | без промяна — каналът за внедряване на собственика                                 |
| конфигурация по подразбиране на CodeQL (`dynamic`) |                4 | `javascript-typescript`, `actions`, `c-cpp`, `python` при всеки push | без промяна — Настройки → Сигурност на кода; `c-cpp`/`python` не сканират нищо тук |

`tests/unit/build/push-storm-diet.test.ts` фиксира задействането при push само към `main` за `ci.yml` и
`quality.yml`. Страничен ефект: Codecov вече не получава базово качване при всеки push към release клон (тази
стъпка е информативна и е с `continue-on-error`); вградената в хранилището проверка на покритието и коментарът към PR
не са засегнати.

**Повече собствен хостван капацитет не решава проблема с опашката за хоствани задания.** Машината за разработка
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) би могла да хоства изпълнител, но сесиите на агентите вече
поддържат натоварването ѝ на 20–26, контейнерът на агента няма Docker демон, а претовареният канал е
хостваният. Машината `.113` имаше 71 GB свободно пространство и натоварване 5–8 в същия момент; нейното ограничение
е посоченият по-горе бюджет за памет на слушател (максимум 6 слушателя), а не процесорът. Оставащите мерки
са процесни: сливайте PR заявките от кампанията чрез опашката на Mergify (`label=queue`, партидите споделят
едно CI изпълнение за `merge_group` вместо по едно изпълнение за всеки PR плюс едно за всеки push), намалете езиците
в конфигурацията по подразбиране на CodeQL и филтрирайте `release-acceptance.yml` според файловете, които чете.
