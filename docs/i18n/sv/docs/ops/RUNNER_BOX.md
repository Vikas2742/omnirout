# Self-Hosted Runner Box Operations (.113 pool) (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Den egenhostade poolen körs på **.113**-maskinen (`tomni-proxmox-113`). Sedan 2026-10-18 har varje
OmniRoute-runner **en roll**, en etikett och en minnes-/CPU-budget anpassad efter den uppmätta
arbetsbelastningen. Turbopack-platsen får vad bygget behöver; de andra platserna är dimensionerade
efter sina uppmätta toppar. Maskinen överallokerar endast när ett Turbopack-bygge sammanfaller med
ett Release-Green-webpack-bygge och ett lint-jobb; värdens växlingsutrymme (16 GB) hanterar det, och
eftersom Builds för pull requests körs på värdbaserade runners är Turbopack-platsen inaktiv för det
mesta:

| runner               | etikett        | roll                                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-byggen: `ci.yml` `Build` (endast push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, det nattliga a11y-bygget | 56 GB / 60 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-bygge                                                                                            | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`   | nattliga jobb (Schemathesis, promptfoo, garak, k6, a11y-start) och `quality.yml` `lint-guard`                                                            | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`   | samma pool som ovan                                                                                                                                      | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (deras repos)  | endast Dependabot (topp på 155 MB vardera, 2026-10-18)                                                                                                   | 4 GB / 6 GB                | 200 % vardera |

Uppmätt 2026-10-18:

| resurs    | värde                                 | vad det innebär för schemaläggningen                                                                                                                                                                                                                                                                                                                                                                |
| --------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 kärnor**                 | ett Turbopack-produktionsbygge nådde en topp på 49 GB utan begränsning (`tests/unit/ci-build-bundler-webpack.test.ts`); på Next 16.3.8 använder enbart kompileringsfasen ~40 GB (36 GB RSS i `next-build` plus 17 loader-workers på 3 GB, uppmätt 2026-10-18); ett webpack-bygge använder ~14–16 GB. Ett Turbopack-bygge + ett webpack-bygge får plats samtidigt; två Turbopack-byggen gör det inte |
| swap      | 16 GB                                 | `omniroute-113-5` körs med swap avstängt (`MemorySwapMax=0`), så ett skenande bygge avbryts vid sin gräns i stället för att få maskinen att börja använda swap                                                                                                                                                                                                                                      |
| `/tmp`    | **12 GB tmpfs = RAM**                 | allt som placeras där förbrukar minne; kvarlämnade filer rensas efter 3 h                                                                                                                                                                                                                                                                                                                           |
| CPU       | belastning 60 observerad på 32 kärnor | före kvoterna gjorde ett Turbopack-bygge (~1166 % CPU) tillsammans med en coverage-svit på samma maskin att de andra lyssnarnas heartbeat-signaler svälte ut (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                  |
| runners   | **6 lyssnare**                        | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` är inaktiverade (`systemctl enable --now` återaktiverar en)                                                                                                                                                                                                                                                                         |

Gränserna finns i varje enhets `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(tidigare värden sparades som `override.conf.bak-20261018`) och tillämpades direkt med
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — utan omstart, så inget
pågående jobb påverkades. Etiketterna ändras via runners-API:t
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), även det direkt.

## Installera städskriptet (en gång, på servern)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): var 30:e minut, logga till /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` krävs: städskriptet verifierar att en sökväg är inaktiv genom en ögonblicksbild av öppna
filer innan den tas bort, och utan verktyget tar det inte bort någonting utan meddelar detta
(exit 1). Prova alltid ändringar med `--dry-run` först — det skriver ut exakt vad det skulle
göra utan att ändra någonting.

Det här görs vid varje körning: våra egna rester (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) rensas efter **3 timmar på tmpfs** och 24 timmar på disk i
`_work/_temp`; en `next-build` som är äldre än 75 minuter avslutas (inget jobb körs så länge — den
2026-08-27 kördes ett jobb i 70 minuter efter att GitHub hade förklarat jobbet förlorat); 48 timmar
gamla utcheckningar för runners vars enhet är **stoppad** rensas bort; varningar utfärdas vid
diskanvändning ≥ 85 %, minnes-PSI `full/avg60` ≥ 10 % och fler lyssnarprocesser än
`MAX_ACTIVE_RUNNERS` (med en uppdelning mellan omniroute och övriga). Exit 1 = åtgärd krävs;
läs loggen.

75-minutersregeln fångar inte ett bygge vars jobb GitHub redan har gett upp. När
`Runner.Listener` inte kan förnya sitt jobb visar `_diag/Runner_*.log`
`POST request to …/renewjob timed out after 100 seconds`, API:t rapporterar jobbet som `completed`
(misslyckat) ungefär tio minuter efter den senaste lyckade förnyelsen och `next-build` fortsätter
att köras utan något anslutet jobb (2026-10-18: bygget för #17066 markerades som misslyckat 19:43
och dess byggprocess använde fortfarande 40 GB fem minuter senare). Bekräfta refen i den senaste
`_diag/Worker_*.log` och skicka sedan SIGTERM endast till byggträdet via PID — `next-build`,
`npm run build`, `build-next-isolated.mjs` och worker-processerna i `_work`. Rör aldrig
`Runner.Listener`, `RunnerService.js` eller `Runner.Worker`: worker-processen rapporterar jobbet
som avbrutet och lyssnaren återgår automatiskt till att vara online.

## Runner-enheter: KillMode

Runnerns förvalda `KillMode=process` lämnar `Runner.Worker → npm → next-build`
vid liv när en enhet stoppas eller startas om — ett föräldralöst bygge fortsätter att förbruka RAM
och CPU utan något anslutet jobb. Varje OmniRoute-enhet har en drop-in-fil
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
med `KillMode=mixed`: SIGTERM skickas först till lyssnaren och SIGKILL till hela cgroup-gruppen vid
`TimeoutStop`. Den börjar gälla vid enhetens nästa omstart — starta om **en runner i
taget, endast när den är inaktiv**, med inaktivitetskontrollen och omstarten i samma kommando.

## Driftsregler

- **Ett Turbopack-bygge åt gången — framtvingat med etikett.** Varje jobb som kör ett fullständigt Turbopack-
  `next build` använder `[self-hosted, omni-build]`, och endast **`omniroute-113-5`** har den
  etiketten: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  det nattliga a11y-bygget (#16853) och **amd64** i `docker-publish.yml` (webpack inuti BuildKit —
  Turbopack fick panik där, körning 33253576569). Docker-delen för arm64 ligger kvar på `ubuntu-24.04-arm`.
  amd64 i `docker-publish` delar samtidighetsgruppen `heavy-build-main` med `Build` i `ci.yml`
  (`cancel-in-progress: false`). Docker Engine måste finnas på `omniroute-113-5`. En andra Turbopack-
  plats ryms inte inom 78 GB (2 × 33–37 GB plus resten av servern); en andra plats är endast säker för
  webpack-byggen.
- **Byggen för pull requests körs hostat (2026-10-18).** `Build` i `ci.yml` når `omni-build` endast för
  `push` och `workflow_dispatch`; varje `Build` för `pull_request` (från det egna ursprunget eller en fork)
  och `merge_group` körs på `ubuntu-latest` med webpack. När varje PR från det egna ursprunget dirigerades
  till platsen höll ett Turbopack-`Build` den upptagen i 29–58 min, 18 byggen köade i upp till 18 h och
  releasegrenens eget push-bygge fick platsen en gång på 40 jobb. Hostat tar samma PR-bygge 8–12 min
  parallellt med PR:ens andra jobb. Turbopack, paketeraren som `npm-publish` levererar, testas fortsatt på
  releasegrenen genom standardgrenens nattliga a11y-bygge (04:41 UTC), genom varje push- eller
  dispatch-bygge som når platsen och genom `npm-publish` självt.
  `tests/unit/build/heavy-build-queue.test.ts` låser villkoret med fyra satser.
- **Dimensionera aldrig Turbopack-platsen under dess uppmätta behov.** Den 2026-10-18 kl. 18:06 sänktes
  platsen från 56G/60G till 40G/44G för att ge plats åt `omni-release`. Kompileringsfasen låg vid
  `MemoryHigh` under hela körningen (minnes-PSI `full` 30–43 %), och `Runner.Listener`, som
  delar cgroup, kunde inte förnya sitt jobb. Ägarens 56G/60G från 2026-10-17 återställdes
  samma dag. Under det värdet misslyckas inte bygget; det fastnar i minneströskning och jobbet går förlorat.
- **Release-Green har en egen plats (2026-10-18).** Fram till dess kördes båda Release-Green-valideringarna
  på `omni-build`: vid varje push (~10/timme, 97 av 100 push-körningar avbröts mitt i arbetet under ett dygn)
  och tre fullständiga svep på ~2 h per dag (svepet kl. 05:29 väntade 6 h på platsen) — den enda byggplatsen
  var överbelagd flera gånger om och PR-byggen från det egna ursprunget väntade i timmar.
  `release-green` och `main-green` använder nu `omni-release` (endast `omniroute-113-6`) med
  `OMNIROUTE_USE_TURBOPACK=0`, och en påbörjad körning avbryts inte längre av en nyare push (den
  väntande platsen slår fortfarande ihop anstormningen). `tests/unit/build/runner-capacity-routing.test.ts`
  låser dirigeringen, webpack-växeln och att ingenting på `omni-release` byggs med Turbopack.
- **Lätt pool: `omni-light`.** `omniroute-113` och `omniroute-113-2` kör de nattliga jobben som behöver
  ett `next build` enbart för backend (~5–6 GB; webpack) och `lint-guard` i `quality.yml`. `omniroute-113`
  hade `MemoryHigh=4G` fram till 2026-10-18 — promptfoo-bygget tog sig fram genom minnesåtervinning i 54 minuter
  där; 8 GB tar bort strypningen.
- **Färre lyssnare med avsikt.** Fyra OmniRoute-enheter inaktiverades 2026-08-29 — varje extra
  lyssnare är ännu en nyttjare av minnesbudgeten ovan. Vaktmästarens tak är 6 (`MAX_ACTIVE_RUNNERS=6` i cron): den räknar
  varje `Runner.Listener` på servern, och OmniHeuris + OmniMind lägger till två utöver våra fyra.
- **Rensa aldrig `/tmp` eller `_work` manuellt medan någon runner är upptagen.** En
  kontroll följd av borttagning med ett glapp mellan stegen gjorde att ett aktivt `Build`-jobb förlorade sin
  `_work` den 2026-08-27. Vaktmästaren utför kontrollen och borttagningen i ett enda steg;
  låt den göra det.
- Att stoppa en runner mitt under ett jobb avbryter jobbet (observerat i drift): kör `systemctl stop` endast
  när dess lyssnare inte har någon underordnad `Runner.Worker`-process — och gör det i ett enda kommando.
- Arbetsflöden får inte parkera artefakter i `/tmp` (det ligger i RAM). Ladda ned till
  `$RUNNER_TEMP` (på disk, per runner) — artefakten `next-build` på 1,3 GB tog 27–32
  minuter att hamna på tmpfs och 2 minuter att ladda upp från disk.
- VPS:en `.15` är endast avsedd för homologering — där körs aldrig CI-runners.

## Värdbaserad körfil (GitHub-värdbaserade runners)

Kontot har **Pro**-abonnemanget: **40 samtidiga värdbaserade jobb**, som delas av varje PR-kontroll,
varje push-utlöst workflow och CodeQL:s standardkonfiguration. Uppmätt 2026-10-18 under en
sammanslagningskampanj (~10 sammanslagningar/timme på `release/v3.8.52`): **2 500 workflow-körningar skapades under
24 h**, 44 pushar till grenen på 6 h, **106 värdbaserade jobb köades** medan PR-kontroller väntade i
timmar och PR:er slogs samman utan dem. Nio workflows utlöstes vid varje push till grenen:

| per push till `release/v*`                  | värdbaserade jobb | utfall under anstormningen                                     | sedan 2026-10-18                                                          |
| ------------------------------------------- | ----------------: | -------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `ci.yml` (fullständig matris)               |       upp till 30 | avbröts av nästa push, 24 av 24 under en dag                   | startas inte vid pushar till `release/**` (PR-körning + Release-Green)    |
| `quality.yml`                               |                ~6 | avbröts, 23 av 23                                              | startas inte vid pushar till `release/**`                                 |
| `Release-Green` `--quick`                   |                 0 | kördes på `omni-build`, 97 av 100 avbröts                      | platsen `omni-release`, avbryts aldrig, väntande körningar slås samman    |
| `Lock released branch`, `OpenSSF Scorecard` |                 2 | en köad körning per push                                       | en körning per ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)   |
| `Release acceptance` (skuggrapport)         |                 1 | ett värdbaserat `npm ci` per push, avbröts aldrig              | oförändrat — kandidat för ett `paths:`-filter                             |
| `Publish to Docker Hub` → `Deploy to VPS`   |                 2 | avbröts per push; amd64-delen konkurrerar på `omni-build`      | oförändrat — ägarens distributionskanal                                   |
| CodeQL:s standardkonfiguration (`dynamic`)  |                 4 | `javascript-typescript`, `actions`, `c-cpp`, `python` per push | oförändrat — Settings → Code security; `c-cpp`/`python` skannar inget här |

`tests/unit/build/push-storm-diet.test.ts` låser den push-utlösare för enbart `main` som används av `ci.yml` och
`quality.yml`. Bieffekt: Codecov tar inte längre emot en basuppladdning per release-push (steget
är endast informativt och har `continue-on-error`); täckningsspärren i repot och PR-kommentaren
påverkas inte.

**Mer egenhostad kapacitet löser inte den värdbaserade kön.** Utvecklingsmaskinen
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) skulle kunna vara värd för en runner, men agentsessionerna håller redan
dess belastning på 20–26, agentcontainern saknar en Docker-daemon och den mättade körfilen är
den värdbaserade. `.113`-maskinen hade 71 GB ledigt och en belastning på 5–8 vid samma tidpunkt; dess begränsning
är minnesbudgeten per lyssnare ovan (högst 6 lyssnare), inte processorn. De återstående åtgärderna
är processrelaterade: för kampanj-PR:er genom Mergify-kön (`label=queue`, batcher delar
en enda `merge_group`-CI-körning i stället för en körning per PR plus en per push), minska antalet språk i
CodeQL:s standardkonfiguration och filtrera `release-acceptance.yml` utifrån filerna som den läser.
