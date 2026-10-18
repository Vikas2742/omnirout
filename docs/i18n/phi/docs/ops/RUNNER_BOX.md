# Self-Hosted Runner Box Operations (.113 pool) (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Tumatakbo ang self-hosted pool sa **.113** na makina (`tomni-proxmox-113`). Mula 2026-10-18, ang bawat
OmniRoute runner ay may **isang tungkulin**, isang label, at badyet sa memory/CPU na naaayon sa
nasukat na workload nito. Nakukuha ng Turbopack slot ang kailangan ng build; ang iba pang slot ay
iniakma sa kanilang nasukat na pinakamataas na paggamit. Nag-o-overcommit lamang ang makina kapag
nagsabay ang isang Turbopack build, isang Release-Green webpack build, at isang lint job; sinasalo
iyon ng host swap (16 GB), at dahil tumatakbo sa hosted runners ang mga pull-request Build,
bakante ang Turbopack slot sa halos lahat ng oras:

| runner               | label               | tungkulin                                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`        | Mga Turbopack build: `ci.yml` `Build` (push/dispatch lamang), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, ang gabi-gabing a11y build | 56 GB / 60 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), webpack build                                                                                                 | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`        | Mga gabi-gabing job (Schemathesis, promptfoo, garak, k6, a11y boot) at `quality.yml` `lint-guard`                                                             | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`        | kaparehong pool sa itaas                                                                                                                                      | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (kanilang mga repo) | Dependabot lamang (pinakamataas na 155 MB bawat isa, 2026-10-18)                                                                                              | 4 GB / 6 GB                | 200 % bawat isa |

Sinukat noong 2026-10-18:

| resource  | halaga                              | kahulugan nito para sa pag-iskedyul                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 core**                 | umabot sa 49 GB nang walang limitasyon ang isang Turbopack production build (`tests/unit/ci-build-bundler-webpack.test.ts`); sa Next 16.3.8, ang compile phase pa lamang ay gumagamit ng ~40 GB (36 GB RSS sa `next-build` at 17 loader worker na may tig-3 GB, sinukat noong 2026-10-18); ~14–16 GB naman ang isang webpack build. Magkasya nang sabay ang isang Turbopack at isang webpack build; hindi magkasya ang dalawang Turbopack build |
| swap      | 16 GB                               | tumatakbo ang `omniroute-113-5` nang naka-off ang swap (`MemorySwapMax=0`) upang mapahinto sa itinakdang limitasyon ang isang runaway build sa halip na gumamit ng swap ang buong makina                                                                                                                                                                                                                                                        |
| `/tmp`    | **12 GB tmpfs = RAM**               | anumang inilalagay rito ay gumagamit ng memory; nililinis ang mga natira pagkalipas ng 3 h                                                                                                                                                                                                                                                                                                                                                      |
| CPU       | naobserbahang load na 60 sa 32 core | bago ang mga quota, isang Turbopack build (~1166 % CPU) kasama ang isang coverage suite sa parehong makina ang umagaw ng resource mula sa mga heartbeat ng iba pang listener (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                              |
| runners   | **6 na listener**                   | 4 OmniRoute + OmniHeuris + OmniMind; naka-disable ang `omniroute-113-3/-4/-7/-8` (`systemctl enable --now` ang muling magpapagana sa isa)                                                                                                                                                                                                                                                                                                       |

Nasa `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ng bawat unit ang mga limitasyon
(ang mga dating halaga ay itinago bilang `override.conf.bak-20261018`) at inilapat ang mga ito habang
tumatakbo gamit ang `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — walang
restart, kaya walang naapektuhang tumatakbong job. Binabago ang mga label sa pamamagitan ng runners API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), habang tumatakbo rin.

## I-install ang janitor (isang beses lang, sa makina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): bawat 30 min, mag-log sa /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Kinakailangan ang `lsof`: pinatutunayan ng janitor na idle ang isang path gamit ang isang snapshot ng mga bukas na
file bago ito alisin, at kung wala ang tool, wala itong inaalis at sinasabi nito iyon
(exit 1). Subukan muna ang anumang pagbabago gamit ang `--dry-run` — eksakto nitong ipinapakita kung ano ang gagawin nito
at wala itong binabago.

Ang ginagawa nito sa bawat pagtakbo: nililinis ang sarili nating mga naiwang file (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) pagkalipas ng **3 oras sa tmpfs** at 24 na oras sa disk na
`_work/_temp`; pinapatay ang isang `next-build` na mas matanda sa 75 minuto (walang job na tumatakbo nang ganoon katagal — noong
2026-08-27, may isang tumakbo nang 70 minuto matapos ideklara ng GitHub na nawala ang job nito); inaalis ang mga 48 oras nang
checkout ng mga runner na ang unit ay **nakahinto**; nag-aalerto kapag ≥ 85% ang disk, kapag ang memory PSI na
`full/avg60` ay ≥ 10%, at kapag mas marami ang listener kaysa sa `MAX_ACTIVE_RUNNERS` (may
paghahati sa omniroute/iba pa). Exit 1 = kailangang bigyang-pansin; basahin ang log.

Hindi nahuhuli ng 75-minutong panuntunan ang isang build na sinukuan na ng GitHub ang job. Kapag hindi
ma-renew ng `Runner.Listener` ang job nito, ipinapakita ng `_diag/Runner_*.log` ang
`POST request to …/renewjob timed out after 100 seconds`, iniuulat ng API ang job bilang `completed`
(failure) humigit-kumulang sampung minuto matapos ang huling matagumpay na renewal, at patuloy na tumatakbo ang `next-build`
nang walang nakakabit na job (2026-10-18: nabigo ang Build ng #17066 nang 19:43 at ang build nito ay
gumagamit pa rin ng 40 GB makalipas ang limang minuto). Kumpirmahin ang ref sa pinakabagong `_diag/Worker_*.log`, pagkatapos ay
mag-SIGTERM lamang sa build tree ayon sa PID — `next-build`, `npm run build`, `build-next-isolated.mjs` at
ang mga worker ng `_work`. Huwag kailanman galawin ang `Runner.Listener`, `RunnerService.js` o `Runner.Worker`: iniuulat ng
worker na kinansela ang job at kusang bumabalik online ang listener.

## Mga unit ng runner: KillMode

Ang default na `KillMode=process` ng runner ay iniiwang buhay ang `Runner.Worker → npm → next-build`
kapag inihinto o ni-restart ang isang unit — patuloy na kumakain ng RAM at
CPU ang isang naulilang build kahit walang nakakabit na job. Ang bawat OmniRoute unit ay may drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
na may `KillMode=mixed`: SIGTERM muna sa listener, pagkatapos ay SIGKILL sa buong cgroup sa
`TimeoutStop`. Magkakabisa ito sa susunod na restart ng unit — mag-restart ng **isang runner lamang sa
bawat pagkakataon, at kapag idle lamang**, na nasa iisang command ang pagsusuri kung idle at ang restart.

## Mga panuntunan sa pagpapatakbo

- **Isang Turbopack build lamang sa bawat pagkakataon — ipinapatupad sa pamamagitan ng label.** Ang bawat job na nagpapatakbo ng buong Turbopack
  `next build` ay nagta-target sa `[self-hosted, omni-build]`, at **`omniroute-113-5`** lamang ang may
  label na iyon: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  ang nightly a11y build (#16853), at ang **amd64** ng `docker-publish.yml` (webpack sa loob ng BuildKit —
  nag-panic ang Turbopack doon, run 33253576569). Nananatili sa `ubuntu-24.04-arm` ang arm64 Docker leg.
  Ibinabahagi ng amd64 ng `docker-publish` ang concurrency group na `heavy-build-main` sa `Build` ng `ci.yml`
  (`cancel-in-progress: false`). Dapat nasa `omniroute-113-5` ang Docker Engine. Hindi kasya sa 78 GB ang
  pangalawang Turbopack slot (2 × 33–37 GB kasama ang iba pang gamit ng makina); ligtas lamang ang
  pangalawang slot para sa mga webpack build.
- **Tumatakbo sa hosted runner ang mga Build ng pull request (2026-10-18).** Naaabot lamang ng `Build` ng `ci.yml`
  ang `omni-build` para sa `push` at `workflow_dispatch`; bawat `pull_request` (mula man sa sariling repository
  o fork) at `merge_group` Build ay tumatakbo sa `ubuntu-latest` gamit ang webpack. Noong ang bawat PR mula sa
  sariling repository ay ipinapadala sa slot, inokupahan ito ng isang Turbopack Build nang 29–58 min, 18 Build
  ang nakapila nang hanggang 18 h, at isang beses lamang sa 40 job nakuha ng sariling push Build ng release line
  ang slot. Sa hosted runner, inaabot ng 8–12 min ang parehong PR Build kasabay ng iba pang job ng PR.
  Patuloy na sinusubukan ang Turbopack, ang bundler na ipinapadala ng `npm-publish`, sa release line sa pamamagitan
  ng nightly a11y build ng default branch (04:41 UTC), ng bawat push o dispatch Build na nakaaabot sa slot,
  at ng `npm-publish` mismo. Itinatakda ng `tests/unit/build/heavy-build-queue.test.ts`
  ang gate na may apat na kondisyon.
- **Huwag kailanman paliitin ang Turbopack slot nang mas mababa sa nasukat na pangangailangan nito.** Noong 2026-10-18
  nang 18:06, ibinaba ang slot mula 56G/60G patungong 40G/44G upang bigyang-daan ang `omni-release`. Nanatili ang
  compile phase sa `MemoryHigh` sa buong pagtakbo nito (memory PSI `full` na 30–43 %), at hindi ma-renew ng
  `Runner.Listener`, na kabahagi sa cgroup, ang job nito. Ibinalik sa araw ding iyon ang 56G/60G ng may-ari mula
  2026-10-17. Kapag mas mababa sa halagang iyon, hindi basta nabibigo ang build; nagt-thrash ito, at nawawala ang job.
- **May sariling slot ang Release-Green (2026-10-18).** Hanggang noon, parehong tumatakbo sa `omni-build` ang mga
  validation ng Release-Green: sa bawat push (~10/oras, 97 sa 100 push run ang kinansela habang gumagana sa loob ng
  isang araw) at tatlong ~2 h na buong sweep bawat araw (naghintay nang 6 h para sa slot ang 05:29 sweep) — ilang
  ulit na sumobra ang demand sa iisang build slot at ilang oras na naghintay ang mga PR Build mula sa sariling
  repository. Tina-target na ngayon ng `release-green` at `main-green` ang `omni-release` (`omniroute-113-6` lamang)
  gamit ang `OMNIROUTE_USE_TURBOPACK=0`, at hindi na kinakansela ng mas bagong push ang nasimulang run (pinagsasama
  pa rin ng nakabinbing slot ang dagsa). Itinatakda ng `tests/unit/build/runner-capacity-routing.test.ts`
  ang routing, ang paglipat sa webpack, at ang katiyakang walang anumang nasa `omni-release` na nagbi-build gamit
  ang Turbopack.
- **Light pool: `omni-light`.** Pinapatakbo ng `omniroute-113` at `omniroute-113-2` ang mga nightly na nangangailangan
  ng backend-only na `next build` (~5–6 GB; webpack) at ang `lint-guard` ng `quality.yml`. May `MemoryHigh=4G` ang
  `omniroute-113` hanggang 2026-10-18 — 54 minuto roong paulit-ulit na nagre-reclaim ng memory ang promptfoo build;
  inaalis ng 8 GB ang throttling.
- **Sinasadyang mas kaunti ang mga listener.** Apat na OmniRoute unit ang na-disable noong 2026-08-29 — bawat
  karagdagang listener ay isa pang gumagamit ng memory budget sa itaas. Ang limitasyon ng janitor ay 6
  (`MAX_ACTIVE_RUNNERS=6` sa cron): binibilang nito ang bawat `Runner.Listener` sa makina, at nagdaragdag ang
  OmniHeuris + OmniMind ng dalawa sa apat natin.
- **Huwag kailanman linisin nang manu-mano ang `/tmp` o `_work` habang may abalang runner.** Isang
  check-then-delete na may pagitan sa dalawang hakbang ang dahilan kung bakit nawala sa isang aktibong Build job
  ang `_work` nito noong 2026-08-27. Ginagawa ng janitor ang pagsusuri at pag-aalis sa iisang hakbang;
  hayaan itong gumawa nito.
- Ang pagpapahinto sa runner habang nasa kalagitnaan ng job ay nagkakansela sa job (aktuwal na naobserbahan):
  gamitin lamang ang `systemctl stop` kapag walang `Runner.Worker` child ang listener nito — at gawin ito sa
  iisang command.
- Hindi dapat maglagay ang mga workflow ng mga artifact sa `/tmp` (RAM ito). Mag-download sa
  `$RUNNER_TEMP` (nasa disk, para sa bawat runner) — inabot nang 27–32 minuto bago tuluyang mailagay sa tmpfs
  ang 1.3 GB na `next-build` artifact, at 2 minuto upang i-upload mula sa disk.
- Para lamang sa homologation ang `.15` VPS — hindi ito kailanman nagpapatakbo ng mga CI runner.

## Hosted lane (mga runner na hino-host ng GitHub)

Ang account ay nasa **Pro** plan: **40 magkakasabay na hosted job**, na pinagsasaluhan ng bawat PR check,
bawat workflow na nati-trigger ng push, at default setup ng CodeQL. Sinukat noong 2026-10-18 habang may
merge campaign (~10 merge/oras sa `release/v3.8.52`): **2,500 workflow run ang ginawa sa loob ng
24 h**, 44 na push sa branch sa loob ng 6 h, **106 hosted job ang nakapila** habang naghintay nang ilang
oras ang mga PR check at na-merge ang mga PR nang wala ang mga ito. Siyam na workflow ang na-trigger sa bawat push sa branch:

| bawat push sa `release/v*`                  | mga hosted job | kinalabasan sa gitna ng bugso                                           | mula 2026-10-18                                                                        |
| ------------------------------------------- | -------------: | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `ci.yml` (buong matrix)                     |    hanggang 30 | kinansela ng susunod na push, 24 sa 24 sa isang araw                    | hindi sinisimulan sa mga push sa `release/**` (PR run + Release-Green)                 |
| `quality.yml`                               |             ~6 | kinansela, 23 sa 23                                                     | hindi sinisimulan sa mga push sa `release/**`                                          |
| `Release-Green` `--quick`                   |              0 | tumakbo sa `omni-build`, kinansela ang 97 sa 100                        | `omni-release` slot, hindi kailanman kinakansela, pinagsasama ang mga nakabinbing run  |
| `Lock released branch`, `OpenSSF Scorecard` |              2 | isang nakapilang run sa bawat push                                      | isang run bawat ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)               |
| `Release acceptance` (shadow report)        |              1 | isang hosted na `npm ci` sa bawat push, hindi kailanman kinansela       | walang pagbabago — kandidato para sa `paths:` filter                                   |
| `Publish to Docker Hub` → `Deploy to VPS`   |              2 | kinansela sa bawat push; nakikipag-agawan ang amd64 leg sa `omni-build` | walang pagbabago — deploy channel ng may-ari                                           |
| CodeQL default setup (`dynamic`)            |              4 | `javascript-typescript`, `actions`, `c-cpp`, `python` sa bawat push     | walang pagbabago — Settings → Code security; walang ini-scan dito ang `c-cpp`/`python` |

Itinatakda ng `tests/unit/build/push-storm-diet.test.ts` ang push trigger ng `ci.yml` at
`quality.yml` na para lamang sa `main`. Side effect: hindi na nakatatanggap ang Codecov ng base upload sa bawat release push (ang
step ay pang-impormasyon at `continue-on-error`); hindi naaapektuhan ang coverage gate sa repo at ang PR comment.

**Hindi naaayos ng mas malaking self-hosted capacity ang hosted queue.** Maaaring mag-host ng runner ang devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB), ngunit pinananatili na ng mga agent session ang load nito sa
20–26, walang Docker daemon ang agent container, at ang hosted lane ang saturated. Ang `.113` box ay
may 71 GB na libreng espasyo at load na 5–8 sa parehong sandali; ang limitasyon nito ay ang per-listener
memory budget sa itaas (maximum na 6 listener), hindi ang CPU. Ang mga natitirang magagawa ay nauukol
sa proseso: i-land ang mga campaign PR sa pamamagitan ng Mergify queue (`label=queue`, pinagsasaluhan ng
mga batch ang isang `merge_group` CI run sa halip na isang run sa bawat PR at isa sa bawat push), bawasan
ang mga wika sa default setup ng CodeQL, at i-filter ang `release-acceptance.yml` ayon sa mga file na binabasa nito.
