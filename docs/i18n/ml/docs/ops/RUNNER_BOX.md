# Self-Hosted Runner Box Operations (.113 pool) (മലയാളം)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

സ്വയം ഹോസ്റ്റ് ചെയ്ത പൂൾ **.113** ബോക്സിലാണ് (`tomni-proxmox-113`) പ്രവർത്തിക്കുന്നത്. 2026-10-18 മുതൽ ഓരോ
OmniRoute runner-നും **ഒരു റോൾ**, ഒരു ലേബൽ, അതിന്റെ workload-ൽ അളന്ന ആവശ്യത്തിന് അനുയോജ്യമായ memory/CPU ബജറ്റ്
എന്നിവയുണ്ട്. Turbopack സ്ലോട്ടിന് build-ന് ആവശ്യമായ വിഭവങ്ങൾ ലഭിക്കുന്നു; മറ്റ് സ്ലോട്ടുകൾ അവയിൽ
അളന്ന പരമാവധി ഉപയോഗത്തിന് അനുസരിച്ചാണ് ക്രമീകരിച്ചിരിക്കുന്നത്. ഒരു Turbopack build, ഒരു Release-Green
webpack build, ഒരു lint job എന്നിവ ഒരേസമയം വരുമ്പോൾ മാത്രമാണ് ബോക്സ് overcommit ചെയ്യുന്നത്; host swap (16 GB)
അത് ഉൾക്കൊള്ളുന്നു. pull-request Builds ഹോസ്റ്റ് ചെയ്ത പരിതസ്ഥിതിയിൽ പ്രവർത്തിക്കുന്നതിനാൽ,
Turbopack സ്ലോട്ട് മിക്ക സമയത്തും നിഷ്ക്രിയമാണ്:

| runner               | ലേബൽ           | റോൾ                                                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota`       |
| -------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack builds: `ci.yml` `Build` (push/dispatch മാത്രം), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, രാത്രികാല a11y build | 56 GB / 60 GB (swap 0)     | 1600 %           |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack build                                                                                        | 20 GB / 24 GB (swap 4 GB)  | 800 %            |
| `omniroute-113-2`    | `omni-light`   | രാത്രികാല jobs (Schemathesis, promptfoo, garak, k6, a11y boot), കൂടാതെ `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB (swap 4 GB)  | 600 %            |
| `omniroute-113`      | `omni-light`   | മുകളിലുള്ള അതേ പൂൾ                                                                                                                                   | 8 GB / 12 GB               | 400 %            |
| OmniHeuris, OmniMind | (അവയുടെ repos) | Dependabot മാത്രം (ഓരോന്നിന്റെയും പരമാവധി 155 MB, 2026-10-18)                                                                                        | 4 GB / 6 GB                | ഓരോന്നിനും 200 % |

2026-10-18-ന് അളന്നത്:

| വിഭവം     | മൂല്യം                           | scheduling-ന് ഇത് അർത്ഥമാക്കുന്നത്                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cores**             | പരിധിയില്ലാതെ പ്രവർത്തിച്ച ഒരു Turbopack production build 49 GB വരെ ഉയർന്നു (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8-ൽ compile phase മാത്രം ~40 GB നിലനിർത്തുന്നു (`next-build`-ൽ 36 GB RSS, കൂടാതെ 3 GB വീതമുള്ള 17 loader workers; 2026-10-18-ന് അളന്നത്); ഒരു webpack build ~14–16 GB ഉപയോഗിക്കുന്നു. ഒരു Turbopack build-ഉം ഒരു webpack build-ഉം ഒരുമിച്ച് പ്രവർത്തിക്കാം; രണ്ട് Turbopack builds-ന് കഴിയില്ല |
| swap      | 16 GB                            | `omniroute-113-5` swap പ്രവർത്തനരഹിതമാക്കി (`MemorySwapMax=0`) പ്രവർത്തിക്കുന്നതിനാൽ, നിയന്ത്രണം വിട്ട build ബോക്സിനെ swap ചെയ്യിക്കുന്നതിന് പകരം അതിന്റെ പരിധിയിലെത്തുമ്പോൾ നിർത്തപ്പെടുന്നു                                                                                                                                                                                                                                         |
| `/tmp`    | **12 GB tmpfs = RAM**            | അവിടെ സൂക്ഷിക്കുന്ന എന്തും memory ഉപയോഗിക്കും; ശേഷിക്കുന്നവ 3 h കഴിഞ്ഞ് നീക്കംചെയ്യപ്പെടും                                                                                                                                                                                                                                                                                                                                            |
| CPU       | 32 cores-ൽ load 60 രേഖപ്പെടുത്തി | quotas ഏർപ്പെടുത്തുന്നതിന് മുമ്പ്, ഒരു Turbopack build (~1166 % CPU), അതേ ബോക്സിലെ ഒരു coverage suite എന്നിവ ചേർന്ന് മറ്റ് listeners-ന്റെ heartbeats-ന് ആവശ്യമായ വിഭവങ്ങൾ ലഭിക്കാതാക്കി (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                         |
| runners   | **6 listeners**                  | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` പ്രവർത്തനരഹിതമാക്കിയിരിക്കുന്നു (`systemctl enable --now` ഒരെണ്ണത്തെ വീണ്ടും പ്രവർത്തനക്ഷമമാക്കും)                                                                                                                                                                                                                                                                    |

പരിധികൾ ഓരോ unit-ന്റെയും `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`-ലാണ്
(മുൻ മൂല്യങ്ങൾ `override.conf.bak-20261018` ആയി സൂക്ഷിച്ചിട്ടുണ്ട്); അവ
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` ഉപയോഗിച്ച് തത്സമയം പ്രയോഗിച്ചു — restart ചെയ്തിട്ടില്ല, അതിനാൽ
പ്രവർത്തിച്ചുകൊണ്ടിരുന്ന ഒരു job-നെയും ബാധിച്ചില്ല. runners API വഴിയാണ് ലേബലുകൾ മാറ്റുന്നത്
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), അതും തത്സമയം തന്നെ.

## ജാനിറ്റർ ഇൻസ്റ്റാൾ ചെയ്യുക (ഒറ്റത്തവണ, മെഷീനിൽ)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ഓരോ 30 മിനിറ്റിലും, /var/log/runner-janitor.log-ലേക്ക് ലോഗ് ചെയ്യുക
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` ആവശ്യമാണ്: ഒരു പാത്ത് നീക്കം ചെയ്യുന്നതിന് മുമ്പ് തുറന്നിരിക്കുന്ന ഫയലുകളുടെ ഒറ്റ
സ്നാപ്പ്ഷോട്ട് ഉപയോഗിച്ച് അത് നിഷ്ക്രിയമാണെന്ന് ജാനിറ്റർ ഉറപ്പാക്കുന്നു; ഈ ടൂൾ ഇല്ലെങ്കിൽ
അത് ഒന്നും നീക്കം ചെയ്യാതെ അക്കാര്യം അറിയിക്കും (exit 1). ഏതൊരു മാറ്റവും ആദ്യം
`--dry-run` ഉപയോഗിച്ച് പരീക്ഷിക്കുക — അത് എന്താണ് ചെയ്യുക എന്ന് കൃത്യമായി പ്രിന്റ്
ചെയ്യുകയും ഒന്നിലും മാറ്റം വരുത്താതിരിക്കുകയും ചെയ്യും.

ഓരോ റണ്ണിലും ഇത് ചെയ്യുന്നത്: **tmpfs-ൽ 3 മണിക്കൂറിനും** ഡിസ്കിലെ
`_work/_temp`-ൽ 24 മണിക്കൂറിനും ശേഷം നമ്മുടെ സ്വന്തം ശേഷിപ്പുകൾ (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) നീക്കം ചെയ്യുന്നു; 75 മിനിറ്റിൽ
കൂടുതൽ പഴക്കമുള്ള ഒരു `next-build` അവസാനിപ്പിക്കുന്നു (ഒരു ജോബും അത്രയും നേരം
പ്രവർത്തിക്കുന്നില്ല — 2026-08-27-ന് GitHub അതിന്റെ ജോബ് നഷ്ടപ്പെട്ടതായി പ്രഖ്യാപിച്ചതിന്
ശേഷം ഒരെണ്ണം 70 മിനിറ്റ് പ്രവർത്തിച്ചു); യൂണിറ്റ് **നിർത്തിയിട്ടുള്ള** റണ്ണറുകളുടെ 48
മണിക്കൂർ പഴക്കമുള്ള checkouts നീക്കം ചെയ്യുന്നു; ഡിസ്ക് ≥ 85 %, മെമ്മറി PSI
`full/avg60` ≥ 10 %, കൂടാതെ `MAX_ACTIVE_RUNNERS`-നേക്കാൾ കൂടുതൽ listeners
ഉണ്ടെങ്കിൽ മുന്നറിയിപ്പ് നൽകുന്നു (omniroute/other വിഭജനത്തോടൊപ്പം). Exit 1 =
ശ്രദ്ധ ആവശ്യമാണ്; ലോഗ് വായിക്കുക.

GitHub ഇതിനകം ഉപേക്ഷിച്ച ഒരു ജോബിന്റെ build 75-മിനിറ്റ് നിയമം കണ്ടെത്തില്ല.
`Runner.Listener`-ന് അതിന്റെ ജോബ് പുതുക്കാൻ കഴിയാതെ വരുമ്പോൾ, `_diag/Runner_*.log`-ൽ
`POST request to …/renewjob timed out after 100 seconds` എന്ന് കാണിക്കും; അവസാനം
വിജയകരമായി പുതുക്കിയതിന് ഏകദേശം പത്ത് മിനിറ്റിനുശേഷം ജോബ് `completed` (പരാജയം)
ആയതായി API റിപ്പോർട്ട് ചെയ്യും; കൂടാതെ ഒരു ജോബും ഘടിപ്പിക്കപ്പെടാതെ `next-build`
പ്രവർത്തിച്ചുകൊണ്ടിരിക്കും (2026-10-18: #17066-ന്റെ Build 19:43-ന് പരാജയപ്പെട്ടു,
അഞ്ച് മിനിറ്റിനുശേഷവും അതിന്റെ build 40 GB കൈവശം വെച്ചിരുന്നു). ഏറ്റവും പുതിയ
`_diag/Worker_*.log`-ലെ ref സ്ഥിരീകരിച്ചശേഷം, PID ഉപയോഗിച്ച് build tree മാത്രം
SIGTERM ചെയ്യുക — `next-build`, `npm run build`, `build-next-isolated.mjs`,
കൂടാതെ `_work` workers. `Runner.Listener`, `RunnerService.js`, അല്ലെങ്കിൽ
`Runner.Worker` എന്നിവ ഒരിക്കലും സ്പർശിക്കരുത്: worker ജോബ് റദ്ദാക്കിയതായി
റിപ്പോർട്ട് ചെയ്യുകയും listener സ്വയം വീണ്ടും ഓൺലൈനാകുകയും ചെയ്യും.

## റണ്ണർ യൂണിറ്റുകൾ: KillMode

യൂണിറ്റ് നിർത്തുകയോ പുനരാരംഭിക്കുകയോ ചെയ്യുമ്പോൾ റണ്ണറിന്റെ ഡിഫോൾട്ട്
`KillMode=process`, `Runner.Worker → npm → next-build` പ്രവർത്തിച്ചുകൊണ്ടിരിക്കാൻ
അനുവദിക്കുന്നു — ഒരു ജോബും ഘടിപ്പിക്കപ്പെടാത്ത orphan build RAM-ഉം CPU-വും
ഉപയോഗിച്ചുകൊണ്ടിരിക്കും. ഓരോ OmniRoute യൂണിറ്റിലും
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
എന്ന പാത്തിൽ `KillMode=mixed` ഉള്ള ഒരു drop-in ഉണ്ട്: ആദ്യം listener-ലേക്ക്
SIGTERM അയയ്ക്കുകയും `TimeoutStop`-ൽ മുഴുവൻ cgroup-ലേക്കും SIGKILL അയയ്ക്കുകയും
ചെയ്യുന്നു. യൂണിറ്റിന്റെ അടുത്ത restart-ൽ ഇത് പ്രാബല്യത്തിൽ വരും — idle check-ഉം
restart-ഉം ഒരേ command-ൽ ഉപയോഗിച്ച്, **നിഷ്ക്രിയമായിരിക്കുമ്പോൾ മാത്രം, ഒരേസമയം
ഒരു runner വീതം** restart ചെയ്യുക.

## പ്രവർത്തന നിയമങ്ങൾ

- **ഒരു സമയത്ത് ഒരു Turbopack ബിൽഡ് മാത്രം — ലേബൽ വഴി നിർബന്ധിതമാക്കുന്നു.** പൂർണ്ണ Turbopack
  `next build` പ്രവർത്തിപ്പിക്കുന്ന എല്ലാ ജോബുകളും `[self-hosted, omni-build]` ലക്ഷ്യമിടുന്നു; **`omniroute-113-5`**-ന്
  മാത്രമാണ് ആ ലേബൽ ഉള്ളത്: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  രാത്രികാല a11y ബിൽഡ് (#16853), കൂടാതെ `docker-publish.yml` **amd64** (BuildKit-നുള്ളിലെ webpack —
  അവിടെ Turbopack പാനിക് സംഭവിച്ചു, റൺ 33253576569). arm64 Docker ലെഗ് `ubuntu-24.04-arm`-ൽ തന്നെ തുടരുന്നു.
  `docker-publish` amd64, `ci.yml` `Build`-നൊപ്പം `heavy-build-main` concurrency ഗ്രൂപ്പ് പങ്കിടുന്നു
  (`cancel-in-progress: false`). Docker Engine `omniroute-113-5`-ൽ ഉണ്ടായിരിക്കണം. രണ്ടാമത്തെ Turbopack
  സ്ലോട്ട് 78 GB-യിൽ ഒതുങ്ങില്ല (2 × 33–37 GB കൂടാതെ മെഷീനിലെ ശേഷിക്കുന്നവയും); രണ്ടാമത്തെ സ്ലോട്ട്
  webpack ബിൽഡുകൾക്കു മാത്രമാണ് സുരക്ഷിതം.
- **Pull-request ബിൽഡുകൾ hosted-ൽ പ്രവർത്തിക്കുന്നു (2026-10-18).** `ci.yml` `Build`, `push`,
  `workflow_dispatch` എന്നിവയ്ക്കു മാത്രമാണ് `omni-build`-ൽ എത്തുന്നത്; എല്ലാ `pull_request` (own-origin അല്ലെങ്കിൽ fork),
  `merge_group` ബിൽഡുകളും webpack ഉപയോഗിച്ച് `ubuntu-latest`-ൽ പ്രവർത്തിക്കുന്നു. എല്ലാ own-origin PR-കളും
  സ്ലോട്ടിലേക്ക് റൂട്ട് ചെയ്തിരുന്നപ്പോൾ, ഒരു Turbopack ബിൽഡ് അത് 29–58 മിനിറ്റ് കൈവശം വെച്ചു, 18 ബിൽഡുകൾ
  18 മണിക്കൂർ വരെ ക്യൂവിൽ കാത്തിരുന്നു, കൂടാതെ റിലീസ് ലൈനിന്റെ സ്വന്തം push ബിൽഡിന് 40 ജോബുകളിൽ ഒരിക്കൽ മാത്രമാണ്
  സ്ലോട്ട് ലഭിച്ചത്. Hosted-ൽ, അതേ PR ബിൽഡിന് PR-യിലെ മറ്റു ജോബുകളോടൊപ്പം 8–12 മിനിറ്റ് എടുക്കുന്നു.
  `npm-publish` വിതരണം ചെയ്യുന്ന bundler ആയ Turbopack, ഡിഫോൾട്ട് ബ്രാഞ്ചിന്റെ രാത്രികാല a11y ബിൽഡ്
  (04:41 UTC), സ്ലോട്ടിലെത്തുന്ന ഓരോ push അല്ലെങ്കിൽ dispatch ബിൽഡ്, കൂടാതെ `npm-publish` തന്നെയും വഴി
  റിലീസ് ലൈനിൽ തുടർന്നും പരീക്ഷിക്കപ്പെടുന്നു. `tests/unit/build/heavy-build-queue.test.ts`
  നാലു-വ്യവസ്ഥകളുള്ള ഗേറ്റ് ഉറപ്പിക്കുന്നു.
- **Turbopack സ്ലോട്ടിന് അളന്നുകണ്ട ആവശ്യത്തേക്കാൾ കുറഞ്ഞ ശേഷി ഒരിക്കലും നൽകരുത്.** 2026-10-18-ന് 18:06-ൽ,
  `omni-release`-ന് ഇടമൊരുക്കാൻ സ്ലോട്ട് 56G/60G-ൽ നിന്ന് 40G/44G-ലേക്ക് കുറച്ചു. compile ഘട്ടം അതിന്റെ
  മുഴുവൻ റണ്ണിലും `MemoryHigh`-ൽ തന്നെ നിന്നു (memory PSI `full` 30–43 %), കൂടാതെ അതേ cgroup പങ്കിടുന്ന
  `Runner.Listener`-ന് അതിന്റെ ജോബ് പുതുക്കാൻ കഴിഞ്ഞില്ല. 2026-10-17-ലെ ഉടമയുടെ 56G/60G ക്രമീകരണം
  അതേ ദിവസം പുനഃസ്ഥാപിച്ചു. അതിനേക്കാൾ കുറഞ്ഞ മൂല്യത്തിൽ ബിൽഡ് പരാജയപ്പെടുകയല്ല; അത് thrash ചെയ്യുകയും
  ജോബ് നഷ്ടപ്പെടുകയും ചെയ്യും.
- **Release-Green-ന് സ്വന്തം സ്ലോട്ട് ഉണ്ട് (2026-10-18).** അതുവരെ രണ്ട് Release-Green validation-കളും
  `omni-build`-ലാണ് പ്രവർത്തിച്ചിരുന്നത്: ഓരോ push-ലും (~10/hour, ഒരു ദിവസത്തിൽ 100 push റണ്ണുകളിൽ 97 എണ്ണം
  പ്രവർത്തനത്തിനിടെ റദ്ദാക്കി), കൂടാതെ ദിവസത്തിൽ മൂന്ന് ~2 h പൂർണ്ണ sweep-കൾ (05:29 sweep സ്ലോട്ടിനായി 6 h കാത്തിരുന്നു) —
  ഏക ബിൽഡ് സ്ലോട്ട് അതിന്റെ ശേഷിയേക്കാൾ പലമടങ്ങ് ഉപയോഗിക്കപ്പെട്ടതിനാൽ own-origin PR ബിൽഡുകൾ മണിക്കൂറുകളോളം കാത്തിരുന്നു.
  `release-green`, `main-green` എന്നിവ ഇപ്പോൾ `OMNIROUTE_USE_TURBOPACK=0` ഉപയോഗിച്ച് `omni-release`
  (`omniroute-113-6` മാത്രം) ലക്ഷ്യമിടുന്നു; ആരംഭിച്ച റൺ ഇനി പുതിയ push കാരണം റദ്ദാക്കപ്പെടില്ല (pending
  സ്ലോട്ട് ഇപ്പോഴും റണ്ണുകളുടെ പ്രളയത്തെ ചുരുക്കുന്നു). `tests/unit/build/runner-capacity-routing.test.ts`
  routing, webpack switch, കൂടാതെ `omni-release`-ലുള്ള ഒന്നും Turbopack ഉപയോഗിച്ച് ബിൽഡ് ചെയ്യുന്നില്ലെന്നതും
  ഉറപ്പിക്കുന്നു.
- **Light pool: `omni-light`.** backend-only `next build` (~5–6 GB; webpack) ആവശ്യമായ nightlies-ഉം
  `quality.yml` `lint-guard`-ഉം `omniroute-113`, `omniroute-113-2` എന്നിവ പ്രവർത്തിപ്പിക്കുന്നു. `omniroute-113`-ന്
  2026-10-18 വരെ `MemoryHigh=4G` ആയിരുന്നു — promptfoo ബിൽഡ് അവിടെ 54 മിനിറ്റോളം reclaim ചെയ്തുകൊണ്ടാണ്
  മുന്നേറിയത്; 8 GB throttling ഇല്ലാതാക്കുന്നു.
- **മനപ്പൂർവം കുറച്ച് listeners.** 2026-08-29-ന് നാല് OmniRoute unit-ുകൾ പ്രവർത്തനരഹിതമാക്കി — ഓരോ അധിക
  listener-ഉം മുകളിലെ memory budget-ന്റെ മറ്റൊരു tenant ആണ്. janitor പരിധി 6 ആണ് (`MAX_ACTIVE_RUNNERS=6` in cron):
  മെഷീനിലെ ഓരോ `Runner.Listener`-ഉം അത് എണ്ണുന്നു; OmniHeuris + OmniMind ചേർന്ന് ഞങ്ങളുടെ നാലിന് പുറമെ രണ്ടെണ്ണം കൂടി ചേർക്കുന്നു.
- **ഏതെങ്കിലും runner തിരക്കിലായിരിക്കുമ്പോൾ `/tmp` അല്ലെങ്കിൽ `_work` ഒരിക്കലും കൈകൊണ്ട് വൃത്തിയാക്കരുത്.**
  പരിശോധനയ്ക്കും നീക്കം ചെയ്യലിനും ഇടയിൽ വിടവുള്ള check-then-delete കാരണമാണ് 2026-08-27-ന് പ്രവർത്തിച്ചുകൊണ്ടിരുന്ന
  ഒരു Build ജോബിന് അതിന്റെ `_work` നഷ്ടമായത്. janitor പരിശോധനയും നീക്കം ചെയ്യലും ഒറ്റ ഘട്ടത്തിൽ നടത്തുന്നു;
  അത് ചെയ്യാൻ അതിനെ അനുവദിക്കുക.
- ജോബ് പ്രവർത്തിക്കുന്നതിനിടെ runner നിർത്തുന്നത് ജോബ് റദ്ദാക്കും (നേരിട്ട് നിരീക്ഷിച്ചത്): അതിന്റെ listener-ന്
  `Runner.Worker` child ഇല്ലാത്തപ്പോൾ മാത്രം `systemctl stop` ഉപയോഗിക്കുക — അതും ഒരൊറ്റ command-ൽ ചെയ്യുക.
- Workflows, artefact-ുകൾ `/tmp`-ൽ സൂക്ഷിച്ചുവെക്കരുത് (അത് RAM ആണ്). `$RUNNER_TEMP`-ലേക്ക്
  download ചെയ്യുക (ഓരോ runner-നും disk-ൽ പ്രത്യേകം) — 1.3 GB വലുപ്പമുള്ള `next-build` artefact tmpfs-ൽ
  എത്താൻ 27–32 മിനിറ്റും disk-ൽ നിന്ന് upload ചെയ്യാൻ 2 മിനിറ്റും എടുത്തു.
- `.15` VPS homologation-ന് മാത്രമുള്ളതാണ് — അതിൽ ഒരിക്കലും CI runners പ്രവർത്തിക്കില്ല.

## ഹോസ്റ്റ് ചെയ്ത ലെയ്ൻ (GitHub-ഹോസ്റ്റ് ചെയ്ത റണ്ണറുകൾ)

അക്കൗണ്ട് **Pro** പ്ലാനിലാണ്: **ഒരേസമയം പ്രവർത്തിക്കാവുന്ന 40 ഹോസ്റ്റ് ചെയ്ത ജോബുകൾ**; ഓരോ PR പരിശോധനയും,
ഓരോ പുഷ്-ട്രിഗർ ചെയ്ത വർക്ക്ഫ്ലോയും CodeQL-ന്റെ ഡിഫോൾട്ട് സജ്ജീകരണവും ഈ ശേഷി പങ്കിടുന്നു.
`release/v3.8.52`-ൽ നടന്ന ഒരു മെർജ് കാമ്പെയ്നിനിടെ (~10 മെർജുകൾ/മണിക്കൂർ), 2026-10-18-ന് അളന്നത്:
**24 മണിക്കൂറിനുള്ളിൽ 2,500 വർക്ക്ഫ്ലോ റണ്ണുകൾ സൃഷ്ടിച്ചു**, 6 മണിക്കൂറിനുള്ളിൽ ബ്രാഞ്ചിലേക്ക് 44 പുഷുകൾ,
PR പരിശോധനകൾ മണിക്കൂറുകളോളം കാത്തുനിന്നപ്പോൾ **106 ഹോസ്റ്റ് ചെയ്ത ജോബുകൾ ക്യൂവിലായി**; പരിശോധനകൾ
പൂർത്തിയാകാതെ തന്നെ PR-കൾ മെർജ് ചെയ്തു. ബ്രാഞ്ചിലേക്കുള്ള ഓരോ പുഷിലും ഒൻപത് വർക്ക്ഫ്ലോകൾ പ്രവർത്തിച്ചു:

| `release/v*`-ലേക്കുള്ള ഓരോ പുഷിലും          | ഹോസ്റ്റ് ചെയ്ത ജോബുകൾ | അമിതഭാരത്തിനിടയിലെ ഫലം                                            | 2026-10-18 മുതൽ                                                                          |
| ------------------------------------------- | --------------------: | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ci.yml` (പൂർണ്ണ മാട്രിക്സ്)                |                30 വരെ | അടുത്ത പുഷ് റദ്ദാക്കി; ഒരു ദിവസത്തിൽ 24-ൽ 24-ഉം                   | `release/**` പുഷുകളിൽ ആരംഭിക്കുന്നില്ല (PR റൺ + Release-Green)                           |
| `quality.yml`                               |                    ~6 | റദ്ദാക്കി; 23-ൽ 23-ഉം                                             | `release/**` പുഷുകളിൽ ആരംഭിക്കുന്നില്ല                                                   |
| `Release-Green` `--quick`                   |                     0 | `omni-build`-ൽ പ്രവർത്തിച്ചു; 100-ൽ 97-ഉം റദ്ദാക്കി               | `omni-release` സ്ലോട്ട്; ഒരിക്കലും റദ്ദാക്കില്ല; ശേഷിക്കുന്ന റൺ ഏകീകരിക്കുന്നു           |
| `Lock released branch`, `OpenSSF Scorecard` |                     2 | ഓരോ പുഷിനും ക്യൂവിൽ ഒരു റൺ                                        | ഓരോ ref-നും ഒരു റൺ (`tests/unit/build/hosted-lane-concurrency.test.ts`)                  |
| `Release acceptance` (ഷാഡോ റിപ്പോർട്ട്)     |                     1 | ഓരോ പുഷിലും ഒരു ഹോസ്റ്റ് ചെയ്ത `npm ci`; ഒരിക്കലും റദ്ദാക്കില്ല   | മാറ്റമില്ല — ഒരു `paths:` ഫിൽട്ടറിനുള്ള സ്ഥാനാർഥി                                        |
| `Publish to Docker Hub` → `Deploy to VPS`   |                     2 | ഓരോ പുഷിലും റദ്ദാക്കി; amd64 ലെഗ് `omni-build`-ൽ മത്സരിക്കുന്നു   | മാറ്റമില്ല — ഉടമയുടെ ഡിപ്ലോയ് ചാനൽ                                                       |
| CodeQL ഡിഫോൾട്ട് സജ്ജീകരണം (`dynamic`)      |                     4 | ഓരോ പുഷിലും `javascript-typescript`, `actions`, `c-cpp`, `python` | മാറ്റമില്ല — Settings → Code security; `c-cpp`/`python` ഇവിടെ ഒന്നും സ്കാൻ ചെയ്യുന്നില്ല |

`tests/unit/build/push-storm-diet.test.ts`, `ci.yml`, `quality.yml` എന്നിവയുടെ `main`-ൽ മാത്രം
പ്രവർത്തിക്കുന്ന പുഷ് ട്രിഗർ ഉറപ്പിക്കുന്നു. പാർശ്വഫലം: ഓരോ റിലീസ് പുഷിലും Codecov-ന് ഇനി അടിസ്ഥാന
അപ്ലോഡ് ലഭിക്കില്ല (ഈ ഘട്ടം വിവരദായകമാണ്, കൂടാതെ `continue-on-error` ഉപയോഗിക്കുന്നു); റിപ്പോസിറ്ററിക്കുള്ളിലെ
കവറേജ് ഗേറ്റിനെയും PR കമന്റിനെയും ഇത് ബാധിക്കില്ല.

**കൂടുതൽ സ്വയം-ഹോസ്റ്റ് ചെയ്ത ശേഷി ചേർക്കുന്നത് ഹോസ്റ്റ് ചെയ്ത ക്യൂവിലെ പ്രശ്നം പരിഹരിക്കില്ല.**
ഡെവ്ബോക്സിന് (`devbox-vm-06-dev002`, 24 vCPU / 54 GB) ഒരു റണ്ണർ ഹോസ്റ്റ് ചെയ്യാനാകും; എന്നാൽ ഏജന്റ്
സെഷനുകൾ ഇതിനകം അതിന്റെ ലോഡ് 20–26 ആയി നിലനിർത്തുന്നു, ഏജന്റ് കണ്ടെയ്നറിൽ Docker ഡീമൺ ഇല്ല,
കൂടാതെ പൂർണ്ണശേഷിയിലെത്തിയിരിക്കുന്നത് ഹോസ്റ്റ് ചെയ്ത ലെയ്നാണ്. അതേ സമയത്ത് `.113` ബോക്സിൽ 71 GB
ഒഴിഞ്ഞ ഇടവും 5–8 ലോഡുമുണ്ടായിരുന്നു; CPU അല്ല, മുകളിൽ പറഞ്ഞ ഓരോ ലിസണറിനുമുള്ള മെമ്മറി ബജറ്റാണ്
അതിന്റെ പരിമിതി (പരമാവധി 6 ലിസണറുകൾ). ശേഷിക്കുന്ന നിയന്ത്രണ മാർഗങ്ങൾ പ്രോസസുമായി ബന്ധപ്പെട്ടവയാണ്:
Mergify ക്യൂവിലൂടെ കാമ്പെയ്ൻ PR-കൾ ലാൻഡ് ചെയ്യുക (`label=queue`; ഓരോ PR-നും ഒരു റണ്ണും ഓരോ പുഷിനും
ഒരു റണ്ണും എന്നതിനുപകരം ബാച്ചുകൾ ഒരൊറ്റ `merge_group` CI റൺ പങ്കിടും), CodeQL ഡിഫോൾട്ട് സജ്ജീകരണത്തിലെ
ഭാഷകൾ കുറയ്ക്കുക, കൂടാതെ `release-acceptance.yml` വായിക്കുന്ന ഫയലുകളുടെ അടിസ്ഥാനത്തിൽ അതിനെ ഫിൽട്ടർ ചെയ്യുക.
