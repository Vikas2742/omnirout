# Self-Hosted Runner Box Operations (.113 pool) (සිංහල)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

ස්වයං-සත්කාරක pool එක ක්රියාත්මක වන්නේ **.113** box එකේ (`tomni-proxmox-113`) ය. 2026-10-18 සිට සෑම
OmniRoute runner එකකටම **එක් භූමිකාවක්**, එක් label එකක් සහ එහි workload එකෙන් මැනුණු ප්රමාණයට ගැළපෙන memory/CPU budget එකක්
ඇත. Turbopack slot එකට build එකට අවශ්ය සම්පත් ලැබෙන අතර, අනෙක් slots ඒවායේ
මැනුණු උපරිමයන්ට ගැළපෙන ලෙස ප්රමාණගත කර ඇත. Box එක overcommit වන්නේ Turbopack build එකක් Release-Green
webpack build එකක් සහ lint job එකක් සමඟ එකවර යෙදෙන විට පමණි; host swap (16 GB) එය දරාගන්නා අතර, pull-request Builds
සත්කාරක සේවාවක ක්රියාත්මක වන නිසා Turbopack slot එක බොහෝ වේලාවට නිෂ්ක්රීයව පවතී:

| runner               | label          | භූමිකාව                                                                                                                                                 | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack builds: `ci.yml` `Build` (push/dispatch සඳහා පමණි), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, රාත්රී a11y build එක | 56 GB / 60 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack build                                                                                           | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | රාත්රී jobs (Schemathesis, promptfoo, garak, k6, a11y boot) සහ `quality.yml` `lint-guard`                                                               | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | ඉහත pool එකම                                                                                                                                            | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (ඒවායේ repos)  | Dependabot පමණි (එකකට උපරිම 155 MB, 2026-10-18)                                                                                                         | 4 GB / 6 GB                | එකකට 200 % |

2026-10-18 දින මැන ඇත:

| සම්පත     | අගය                                   | scheduling සඳහා එහි අර්ථය                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / cores 32**                  | සීමා නොකළ Turbopack production build එකක් 49 GB උපරිමයකට ළඟා විය (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8 මත compile අදියර පමණක් ~40 GB රඳවා ගනී (`next-build` තුළ 36 GB RSS සහ 3 GB බැගින් වූ loader workers 17ක්, 2026-10-18 දින මැන ඇත); webpack build එකක් ~14–16 GB වේ. එක් Turbopack build එකක් + එක් webpack build එකක් එකවර ගැළපේ; Turbopack builds දෙකක් ගැළපෙන්නේ නැත |
| swap      | 16 GB                                 | `omniroute-113-5` swap අක්රියව (`MemorySwapMax=0`) ක්රියාත්මක වන බැවින් පාලනයෙන් තොර build එකක් box එක swap කිරීම වෙනුවට එහි සීමාවේදී නවත්වනු ලැබේ                                                                                                                                                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**                 | එහි තබන ඕනෑම දෙයක් memory භාවිත කරයි; ඉතිරිව ඇති දේවල් පැය 3කට පසු ඉවත් කෙරේ                                                                                                                                                                                                                                                                                                                        |
| CPU       | cores 32ක් මත load 60ක් නිරීක්ෂණය විය | quotas යෙදීමට පෙර, එක් Turbopack build එකක් (~1166 % CPU) සහ එම box එකේම coverage suite එකක් නිසා අනෙක් listenersගේ heartbeats වලට සම්පත් නොලැබුණි (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                            |
| runners   | **listeners 6ක්**                     | OmniRoute 4 + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` අක්රිය කර ඇත (`systemctl enable --now` මඟින් එකක් නැවත සක්රිය කරයි)                                                                                                                                                                                                                                                                 |

සීමාවන් එක් එක් unit එකේ `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` තුළ ඇත
(පෙර අගයන් `override.conf.bak-20261018` ලෙස තබා ඇත) සහ ඒවා
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` මඟින් සජීවීව යොදන ලදී — restart එකක් නොකළ බැවින්
ක්රියාත්මක වෙමින් තිබූ කිසිදු job එකකට බලපෑමක් නොවීය. Labels වෙනස් කරන්නේ runners API එක හරහාය
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), එයද සජීවීව සිදු වේ.

## janitor ස්ථාපනය කරන්න (එක් වරක් පමණක්, යන්ත්රය මත)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): සෑම මිනිත්තු 30කට වරක්, /var/log/runner-janitor.log වෙත ලොග් කරන්න
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` අවශ්ය වේ: janitor විසින් මාර්ගයක් ඉවත් කිරීමට පෙර, විවෘත ගොනු පිළිබඳ එක් snapshot එකක් භාවිතයෙන් එය අක්රිය බව තහවුරු කරයි; එම මෙවලම නොමැතිව එය කිසිවක් ඉවත් නොකර ඒ බව දන්වයි (exit 1). ඕනෑම වෙනස්කමක් පළමුව `--dry-run` සමඟ අත්හදා බලන්න — එය සිදු කිරීමට නියමිත දේ හරියටම මුද්රණය කරන අතර කිසිවකට අත නොතබයි.

සෑම ධාවනයකදීම එය කරන දේ: **tmpfs මත පැය 3කට** පසුව සහ තැටියේ `_work/_temp` තුළ පැය 24කට පසුව අපගේම ඉතිරිවීම් (`runner-*`, `omniroute-*`, `next-build*`, `e2e-build.tar.gz`) ඉවත් කරයි; මිනිත්තු 75කට වඩා පැරණි `next-build` එකක් නවත්වයි (කිසිදු job එකක් එතරම් දිගු කාලයක් ධාවනය නොවේ — 2026-08-27 දින GitHub විසින් එහි job එක නැතිවූ බව ප්රකාශ කිරීමෙන් පසුව එකක් මිනිත්තු 70ක් ධාවනය විය); unit එක **නවතා ඇති** runners වල පැය 48ක් පැරණි checkouts ඉවත් කරයි; තැටි භාවිතය ≥ 85 %, memory PSI `full/avg60` ≥ 10 %, සහ listeners ගණන `MAX_ACTIVE_RUNNERS` ට වඩා වැඩි වූ විට (omniroute/other බෙදීමක් සමඟ) අනතුරු අඟවයි. Exit 1 = අවධානය අවශ්යයි; log එක කියවන්න.

GitHub විසින් දැනටමත් අත්හැර දැමූ job එකක build එකක් මිනිත්තු 75 රීතියට හසු නොවේ. `Runner.Listener` හට එහි job එක අලුත් කිරීමට නොහැකි වූ විට, `_diag/Runner_*.log` තුළ `POST request to …/renewjob timed out after 100 seconds` දිස් වේ; අවසන් සාර්ථක අලුත් කිරීමෙන් මිනිත්තු දහයකට පමණ පසු API එක job එක `completed` (failure) ලෙස වාර්තා කරන අතර, සම්බන්ධිත job එකක් නොමැතිව `next-build` දිගටම ධාවනය වේ (2026-10-18: #17066 හි Build එක 19:43ට අසාර්ථක වූ අතර, මිනිත්තු පහකට පසුවත් එහි build එක 40 GB රඳවාගෙන සිටියේය). නවතම `_diag/Worker_*.log` තුළ ref එක තහවුරු කර, පසුව PID මඟින් build tree එක පමණක් SIGTERM කරන්න — `next-build`, `npm run build`, `build-next-isolated.mjs` සහ `_work` workers. කිසිවිටෙකත් `Runner.Listener`, `RunnerService.js` හෝ `Runner.Worker` වෙත අත නොතබන්න: worker විසින් job එක අවලංගු කළ බව වාර්තා කරන අතර listener එක ස්වයංක්රීයව නැවත online වේ.

## Runner units: KillMode

runner හි පෙරනිමි `KillMode=process` නිසා unit එකක් නවත්වන හෝ නැවත ආරම්භ කරන විට `Runner.Worker → npm → next-build` සජීවීව ඉතිරි වේ — අනාථ build එකක් සම්බන්ධිත job එකක් නොමැතිව RAM සහ CPU දිගටම පරිභෝජනය කරයි. සෑම OmniRoute unit එකකම `KillMode=mixed` සහිත drop-in එකක් (`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`) ඇත: පළමුව listener වෙත SIGTERM යවන අතර, `TimeoutStop` හිදී සම්පූර්ණ cgroup එක වෙත SIGKILL යවයි. එය unit එකේ ඊළඟ restart එකේදී ක්රියාත්මක වේ — **වරකට එක් runner එකක් පමණක්, එය idle වූ විට පමණක්** restart කරන්න; idle පරීක්ෂාව සහ restart කිරීම එකම command එක තුළ සිදු කරන්න.

## මෙහෙයුම් නීති

- **වරකට එක් Turbopack බිල්ඩ් එකක් පමණි — ලේබලය මඟින් බලාත්මක කෙරේ.** සම්පූර්ණ Turbopack
  `next build` එකක් ධාවනය කරන සෑම job එකක්ම `[self-hosted, omni-build]` ඉලක්ක කරන අතර, එම
  ලේබලය ඇත්තේ **`omniroute-113-5`** වෙත පමණි: `ci.yml` හි `Build`, `npm-publish.yml` හි `publish`, `nightly-v4-build`, `preview-artifact`,
  රාත්රී a11y බිල්ඩ් එක (#16853) සහ `docker-publish.yml` හි **amd64** (BuildKit තුළ webpack —
  එහිදී Turbopack බිඳ වැටුණි, ධාවනය 33253576569). arm64 Docker අදියර `ubuntu-24.04-arm` මතම පවතී.
  `docker-publish` හි amd64, `ci.yml` හි `Build` සමඟ `heavy-build-main` concurrency group එක
  බෙදා ගනී (`cancel-in-progress: false`). Docker Engine එක `omniroute-113-5` මත තිබිය යුතුය. දෙවන Turbopack
  slot එකක් 78 GB තුළ නොගැළපේ (2 × 33–37 GB සහ පද්ධතියේ ඉතිරි කොටස); දෙවන slot එකක් ආරක්ෂිත වන්නේ
  webpack බිල්ඩ් සඳහා පමණි.
- **Pull request බිල්ඩ් hosted පරිසරයේ ධාවනය වේ (2026-10-18).** `ci.yml` හි `Build`, `omni-build` වෙත ළඟා වන්නේ
  `push` සහ `workflow_dispatch` සඳහා පමණි; සෑම `pull_request` එකකම (තමන්ගේ origin එකෙන් හෝ fork එකකින්) සහ `merge_group` බිල්ඩ් එකකම
  webpack සමඟ `ubuntu-latest` මත ධාවනය වේ. තමන්ගේ origin එකෙන් පැමිණෙන සෑම PR එකක්ම slot එක වෙත යොමු කළ විට, Turbopack
  බිල්ඩ් එකක් එය මිනිත්තු 29–58 ක් අල්ලාගෙන සිටියේය, බිල්ඩ් 18 ක් පැය 18 ක් දක්වා පෝලිමේ සිටි අතර, නිකුතු
  රේඛාවේම push බිල්ඩ් එකට job 40 කින් එක් වරක් පමණක් slot එක ලැබුණි. Hosted පරිසරයේදී, එම PR බිල්ඩ් එකම PR එකේ අනෙකුත්
  job සමඟ මිනිත්තු 8–12 ක් ගනී. `npm-publish` මඟින් නිකුත් කරන bundler එක වන Turbopack, නිකුතු රේඛාව මත දිගටම පරීක්ෂාවට ලක් වන්නේ
  පෙරනිමි branch එකේ රාත්රී a11y බිල්ඩ් එක (04:41 UTC), slot එකට ළඟා වන සෑම push හෝ dispatch බිල්ඩ් එකක්,
  සහ `npm-publish` මඟිනි. `tests/unit/build/heavy-build-queue.test.ts`
  කොන්දේසි හතරකින් යුත් gate එක ස්ථිර කරයි.
- **Turbopack slot එක කිසිවිටෙක එහි මනින ලද අවශ්යතාවට වඩා කුඩා නොකරන්න.** 2026-10-18 දින 18:06 ට,
  `omni-release` සඳහා ඉඩ ලබා දීමට slot එක 56G/60G සිට 40G/44G දක්වා අඩු කරන ලදී. compile අදියර එහි
  සම්පූර්ණ ධාවන කාලය පුරාම `MemoryHigh` සීමාවේ රැඳී තිබූ අතර (memory PSI `full` 30–43 %), එම cgroup එකම
  බෙදා ගන්නා `Runner.Listener` හට එහි job එක අලුත් කරගත නොහැකි විය. 2026-10-17 දින අයිතිකරු සකසා තිබූ 56G/60G අගය එදිනම නැවත
  ස්ථාපනය කරන ලදී. එම අගයට වඩා පහළින් බිල්ඩ් එක අසාර්ථක නොවේ; එය අධික ලෙස සම්පත් හුවමාරු කරමින් මන්දගාමී වන අතර, job එක අහිමි වේ.
- **Release-Green සතුව වෙනම slot එකක් ඇත (2026-10-18).** එතෙක් Release-Green validation දෙකම
  `omni-build` මත ධාවනය විය: සෑම push එකකදීම (~10/hour, එක් දිනක් තුළ push ධාවන 100 කින් 97 ක් වැඩ අතරමඟදී අවලංගු විය)
  සහ දිනකට ~2 h පමණ ගතවන සම්පූර්ණ sweep තුනක් (05:29 sweep එක slot එක සඳහා පැය 6 ක් බලා සිටියේය) — එකම බිල්ඩ්
  slot එකට එහි ධාරිතාව මෙන් කිහිප ගුණයක වැඩ පවරා තිබූ අතර තමන්ගේ origin එකෙන් පැමිණි PR බිල්ඩ් පැය ගණනක් බලා සිටියේය.
  `release-green` සහ `main-green` දැන් `OMNIROUTE_USE_TURBOPACK=0` සමඟ
  `omni-release` (`omniroute-113-6` පමණි) ඉලක්ක කරන අතර, ආරම්භ වූ ධාවනයක් නව push එකක් නිසා තවදුරටත් අවලංගු නොවේ (
  පොරොත්තු slot එක තවමත් අධික ඉල්ලීම් රැල්ල ඒකාබද්ධ කරයි). `tests/unit/build/runner-capacity-routing.test.ts`
  routing එක, webpack switch එක සහ `omni-release` මත කිසිවක් Turbopack සමඟ බිල්ඩ් නොවන බව ස්ථිර කරයි.
- **සැහැල්ලු pool එක: `omni-light`.** `omniroute-113` සහ `omniroute-113-2`, backend-only
  `next build` එකක් අවශ්ය වන රාත්රී job (~5–6 GB; webpack) සහ `quality.yml` හි `lint-guard` ධාවනය කරයි. `omniroute-113`
  හි 2026-10-18 දක්වා `MemoryHigh=4G` තිබුණි — promptfoo බිල්ඩ් එක එහි මිනිත්තු 54 ක් පුරා memory reclaim කරමින්
  ඉදිරියට ගියේය; 8 GB මඟින් throttling ඉවත් වේ.
- **අඩු listeners සංඛ්යාවක් යොදා ඇත්තේ හිතාමතාය.** 2026-08-29 දින OmniRoute unit හතරක් අක්රිය කරන ලදී — සෑම අමතර
  listener එකක්ම ඉහත memory budget එක සඳහා තවත් tenant කෙනෙකි. janitor සීමාව 6 කි (`MAX_ACTIVE_RUNNERS=6` cron තුළ): එය
  යන්ත්රයේ ඇති සෑම `Runner.Listener` එකක්ම ගණන් කරන අතර, OmniHeuris + OmniMind අපගේ හතරට තවත් දෙකක් එක් කරයි.
- **කිසියම් runner එකක් කාර්යබහුලව සිටින විට `/tmp` හෝ `_work` කිසිවිටෙක අතින් පිරිසිදු නොකරන්න.** පරීක්ෂා කිරීම සහ මකා දැමීම අතර
  පරතරයක් සහිත check-then-delete ක්රියාවක් නිසා 2026-08-27 දින සජීවී Build job එකකට එහි
  `_work` අහිමි විය. janitor එක පරීක්ෂාව සහ ඉවත් කිරීම එක් පියවරකින් සිදු කරයි;
  එයට එය කිරීමට ඉඩ දෙන්න.
- job එකක් අතරමඟ runner එකක් නතර කිරීමෙන් job එක අවලංගු වේ (සජීවීව නිරීක්ෂණය කර ඇත): `systemctl stop` භාවිත කරන්නෙ එහි
  listener එකට `Runner.Worker` child එකක් නොමැති විට පමණි — එය එක command එකකින් කරන්න.
- Workflow විසින් artefact `/tmp` තුළ තබා නොතැබිය යුතුය (එය RAM වේ). ඒවා
  `$RUNNER_TEMP` වෙත download කරන්න (disk එක මත, එක් එක් runner සඳහා වෙන්ව) — 1.3 GB ප්රමාණයේ `next-build` artefact එක tmpfs වෙත ළඟා වීමට මිනිත්තු 27–32 ක්
  ගත් අතර disk එකෙන් upload කිරීමට මිනිත්තු 2 ක් ගත්තේය.
- `.15` VPS එක homologation සඳහා පමණි — එය කිසිවිටෙක CI runner ධාවනය නොකරයි.

## සත්කාරක මංතීරුව (GitHub-hosted ධාවක)

ගිණුම **Pro** සැලැස්මේ ඇත: **එකවර සත්කාරක කාර්ය 40ක්**, සෑම PR පරීක්ෂාවක්,
push එකකින් ක්රියාත්මක වන සෑම workflow එකක් සහ CodeQL හි පෙරනිමි සැකසුම අතර බෙදා ගැනේ. 2026-10-18 දින
merge මෙහෙයුමක් අතරතුර (~පැයකට merges 10ක් `release/v3.8.52` මත) මනින ලදී: **පැය
24ක් තුළ workflow runs 2,500ක් සාදන ලදී**, පැය 6ක් තුළ branch එකට pushes 44ක්, PR පරීක්ෂාවන් පැය
ගණනක් බලා සිටියදී **සත්කාරක කාර්ය 106ක් පෝලිම්ගත විය** සහ ඒවා නොමැතිව PRs merge කරන ලදී. branch එකට සිදු වූ සෑම push එකකදීම workflows නවයක් ක්රියාත්මක විය:

| `release/v*` වෙත එක් push එකකට              | සත්කාරක කාර්ය | අධික බර පැවති අවස්ථාවේ ප්රතිඵලය                                     | 2026-10-18 සිට                                                                     |
| ------------------------------------------- | ------------: | ------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ci.yml` (සම්පූර්ණ matrix එක)               |      30 දක්වා | ඊළඟ push එකෙන් අවලංගු විය, එක් දිනකදී 24න් 24ම                      | `release/**` pushes මත ආරම්භ නොකෙරේ (PR run + Release-Green)                       |
| `quality.yml`                               |            ~6 | අවලංගු විය, 23න් 23ම                                                | `release/**` pushes මත ආරම්භ නොකෙරේ                                                |
| `Release-Green` `--quick`                   |             0 | `omni-build` මත ධාවනය විය, 100න් 97ක් අවලංගු විය                    | `omni-release` slot එක, කිසිදා අවලංගු නොවේ, පොරොත්තු run එක ඒකාබද්ධ වේ             |
| `Lock released branch`, `OpenSSF Scorecard` |             2 | එක් push එකකට එක් පෝලිම්ගත run එකක්                                 | එක් ref එකකට එක් run එකක් (`tests/unit/build/hosted-lane-concurrency.test.ts`)     |
| `Release acceptance` (shadow වාර්තාව)       |             1 | එක් push එකකට එක් සත්කාරක `npm ci` එකක්, කිසිදා අවලංගු නොවේ         | වෙනස් කර නැත — `paths:` filter එකක් සඳහා අපේක්ෂකයකි                                |
| `Publish to Docker Hub` → `Deploy to VPS`   |             2 | එක් push එකකට අවලංගු වේ; amd64 අදියර `omni-build` මත තරග කරයි       | වෙනස් කර නැත — හිමිකරුගේ deploy නාලිකාව                                            |
| CodeQL පෙරනිමි සැකසුම (`dynamic`)           |             4 | එක් push එකකට `javascript-typescript`, `actions`, `c-cpp`, `python` | වෙනස් කර නැත — Settings → Code security; `c-cpp`/`python` මෙහි කිසිවක් scan නොකරයි |

`tests/unit/build/push-storm-diet.test.ts` මඟින් `ci.yml` සහ
`quality.yml` හි `main` සඳහා පමණක් වූ push trigger එක තහවුරු කරයි. අතුරු ප්රතිඵලය: එක් එක් release push එකකට මූලික upload එකක් Codecov වෙත තවදුරටත්
නොලැබේ (එම step එක තොරතුරුමය වන අතර `continue-on-error` වේ); repository තුළ ඇති coverage gate එක සහ PR comment එකට
බලපෑමක් නැත.

**වැඩි self-hosted ධාරිතාවක් සත්කාරක පෝලිම විසඳන්නේ නැත.** devbox එකට
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) runner එකක් සත්කාරකත්වය දැරිය හැකි නමුත් agent සැසි දැනටමත්
එහි load එක 20–26 අතර තබයි, agent container එකට Docker daemon එකක් නොමැති අතර, සංතෘප්ත වී ඇති මංතීරුව
සත්කාරක මංතීරුවයි. එම මොහොතේ `.113` යන්ත්රයේ 71 GB නිදහස්ව සහ load එක 5–8 අතර පැවතිණි; එහි සීමාව
ඉහත සඳහන් එක් listener එකකට අදාළ memory budget එකයි (උපරිම listeners 6ක්), CPU නොවේ. ඉතිරි විකල්ප
ක්රියාවලිමය ඒවාය: Mergify පෝලිම හරහා මෙහෙයුම් PRs land කරන්න (`label=queue`, එක් PR එකකට එක් run එකක් සහ එක් push එකකට එක් run එකක් වෙනුවට
batches එක් `merge_group` CI run එකක් බෙදා ගනී), CodeQL
පෙරනිමි-සැකසුම් භාෂා අඩු කරන්න, සහ `release-acceptance.yml` එය කියවන files අනුව filter කරන්න.
