# Self-Hosted Runner Box Operations (.113 pool) (বাংলা)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

স্ব-হোস্টেড পুলটি **.113** বক্সে (`tomni-proxmox-113`) চলে। 2026-10-18 থেকে প্রতিটি
OmniRoute runner-এর **একটি ভূমিকা**, একটি label এবং তার workload-এর পরিমাপকৃত চাহিদা অনুযায়ী
memory/CPU budget রয়েছে। Turbopack slot-টি build-এর প্রয়োজনমতো resource পায়; অন্য slot-গুলো
তাদের পরিমাপকৃত peak অনুযায়ী আকার নির্ধারিত। কেবল তখনই বক্সটি overcommit করে, যখন একটি Turbopack
build-এর সঙ্গে একই সময়ে একটি Release-Green webpack build এবং একটি lint job চলে; host swap
(16 GB) সেটি সামাল দেয়, এবং pull-request Build-গুলো hosted runner-এ চলার কারণে Turbopack slot-টি
বেশির ভাগ সময় নিষ্ক্রিয় থাকে:

| runner               | label             | ভূমিকা                                                                                                                                          | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`      | Turbopack build: `ci.yml` `Build` (শুধু push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nightly a11y build | 56 GB / 60 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release`    | Release-Green (`release-green` + `main-green`), webpack build                                                                                   | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`      | nightly job-গুলো (Schemathesis, promptfoo, garak, k6, a11y boot) এবং `quality.yml` `lint-guard`                                                 | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`      | উপরের একই pool                                                                                                                                  | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (তাদের repo-গুলো) | শুধু Dependabot (প্রতিটির peak 155 MB, 2026-10-18)                                                                                              | 4 GB / 6 GB                | প্রতিটি 200 % |

2026-10-18-এ পরিমাপ করা হয়েছে:

| resource  | মান                         | scheduling-এর ক্ষেত্রে এর অর্থ                                                                                                                                                                                                                                                                                                                                        |
| --------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 core**         | cap ছাড়া একটি Turbopack production build-এর peak ছিল 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8-এ শুধু compile phase-ই ~40 GB ধরে রাখে (`next-build`-এ 36 GB RSS এবং 3 GB-তে 17টি loader worker, 2026-10-18-এ পরিমাপ করা); একটি webpack build ~14–16 GB। একটি Turbopack ও একটি webpack build একসঙ্গে চলতে পারে; দুটি Turbopack build পারে না |
| swap      | 16 GB                       | `omniroute-113-5` swap বন্ধ রেখে চলে (`MemorySwapMax=0`), তাই কোনো নিয়ন্ত্রণহীন build পুরো বক্সকে swap করানোর বদলে নির্ধারিত cap-এ পৌঁছালে বন্ধ হয়ে যায়                                                                                                                                                                                                            |
| `/tmp`    | **12 GB tmpfs = RAM**       | এখানে রাখা সবকিছুই memory ব্যবহার করে; অবশিষ্ট file 3 ঘণ্টা পরে পরিষ্কার করা হয়                                                                                                                                                                                                                                                                                      |
| CPU       | 32 core-এ load 60 দেখা গেছে | quota আরোপের আগে একই বক্সে একটি Turbopack build (~1166 % CPU) ও একটি coverage suite চললে অন্য listener-গুলোর heartbeat resource না পেয়ে থেমে যেত (`The self-hosted runner lost communication`, #16853)                                                                                                                                                               |
| runners   | **6টি listener**            | 4টি OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` নিষ্ক্রিয় (`systemctl enable --now` চালালে একটি আবার সক্রিয় হয়)                                                                                                                                                                                                                                  |

limit-গুলো প্রতিটি unit-এর `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`-এ রয়েছে
(আগের value-গুলো `override.conf.bak-20261018` হিসেবে রাখা হয়েছে) এবং
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` দিয়ে live প্রয়োগ করা হয়েছে—কোনো restart করা হয়নি, তাই চলমান
কোনো job প্রভাবিত হয়নি। runner API-এর মাধ্যমে label পরিবর্তন করা হয়
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), এটিও live।

## janitor ইনস্টল করুন (একবার, মেশিনটিতে)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): প্রতি 30 মিনিটে, /var/log/runner-janitor.log-এ লগ করুন
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` আবশ্যক: janitor কোনো পাথ সরানোর আগে খোলা ফাইলগুলোর একটি স্ন্যাপশট দিয়ে নিশ্চিত করে যে সেটি নিষ্ক্রিয়, আর এই টুল না থাকলে এটি কিছুই সরায় না এবং তা জানিয়ে দেয়
(exit 1)। যেকোনো পরিবর্তন আগে `--dry-run` দিয়ে চেষ্টা করুন — এটি ঠিক কী করত তা প্রিন্ট করে
এবং কোনো কিছু স্পর্শ করে না।

প্রতিবার চালানোর সময় এটি যা করে: আমাদের নিজস্ব অবশিষ্টাংশ (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) **tmpfs-এ 3 ঘণ্টা** এবং ডিস্কের
`_work/_temp`-এ 24 ঘণ্টা পরে পরিষ্কার করে; 75 মিনিটের বেশি পুরোনো `next-build` বন্ধ করে দেয় (কোনো জব এতক্ষণ চলে না —
2026-08-27 তারিখে GitHub জবটিকে হারিয়ে গেছে ঘোষণা করার পরও একটি জব 70 মিনিট চলেছিল); যেসব runner-এর unit **stopped**, সেগুলোর
48 ঘণ্টা পুরোনো checkout পরিষ্কার করে; ডিস্কের ব্যবহার ≥ 85%, memory PSI
`full/avg60` ≥ 10%, এবং listener-এর সংখ্যা `MAX_ACTIVE_RUNNERS`-এর চেয়ে বেশি হলে সতর্ক করে (omniroute/অন্যান্য বিভাজনসহ)। Exit 1 = মনোযোগ প্রয়োজন; লগটি পড়ুন।

75-মিনিটের নিয়ম এমন কোনো build শনাক্ত করে না যার job GitHub ইতিমধ্যে পরিত্যাগ করেছে। যখন
`Runner.Listener` তার job পুনর্নবীকরণ করতে পারে না, `_diag/Runner_*.log`-এ দেখা যায়
`POST request to …/renewjob timed out after 100 seconds`, সর্বশেষ সফল পুনর্নবীকরণের প্রায় দশ মিনিট পর API job-টিকে `completed`
(failure) হিসেবে রিপোর্ট করে, এবং কোনো job সংযুক্ত না থাকা সত্ত্বেও `next-build` চলতে থাকে
(2026-10-18: #17066-এর Build 19:43-এ ব্যর্থ হয়েছিল এবং পাঁচ মিনিট পরও তার build
40 GB ধরে রেখেছিল)। সর্বশেষ `_diag/Worker_*.log`-এ ref নিশ্চিত করুন, তারপর
PID অনুসারে শুধু build tree-তেই SIGTERM পাঠান — `next-build`, `npm run build`, `build-next-isolated.mjs` এবং
`_work` worker-গুলোতে। কখনোই `Runner.Listener`, `RunnerService.js` বা `Runner.Worker` স্পর্শ করবেন না:
worker job-টিকে cancelled হিসেবে রিপোর্ট করে এবং listener নিজে থেকেই আবার online হয়ে যায়।

## Runner unit: KillMode

Runner-এর ডিফল্ট `KillMode=process`, unit বন্ধ বা পুনরায় চালু করা হলে
`Runner.Worker → npm → next-build`-কে সচল রেখে দেয় — কোনো job সংযুক্ত না থাকলেও একটি orphan build RAM এবং
CPU ব্যবহার করতে থাকে। প্রতিটি OmniRoute unit-এ একটি drop-in রয়েছে
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
যাতে `KillMode=mixed` সেট করা আছে: প্রথমে listener-কে SIGTERM, তারপর
`TimeoutStop`-এ পুরো cgroup-কে SIGKILL পাঠানো হয়। এটি unit-এর পরবর্তী restart-এ কার্যকর হয় — **একবারে একটি runner,
শুধু নিষ্ক্রিয় থাকলে** restart করুন; idle check এবং restart একই command-এ রাখুন।

## পরিচালনার নিয়মাবলি

- **একবারে একটি Turbopack build — লেবেলের মাধ্যমে বলবৎ।** পূর্ণ Turbopack
  `next build` চালানো প্রতিটি job `[self-hosted, omni-build]` লক্ষ্য করে, এবং কেবল **`omniroute-113-5`**-এরই ওই
  লেবেল রয়েছে: `ci.yml`-এর `Build`, `npm-publish.yml`-এর `publish`, `nightly-v4-build`, `preview-artifact`,
  nightly a11y build (#16853) এবং `docker-publish.yml`-এর **amd64** (BuildKit-এর ভেতরে webpack —
  সেখানে Turbopack panic করেছিল, run 33253576569)। arm64 Docker leg `ubuntu-24.04-arm`-এই থাকে।
  `docker-publish`-এর amd64, `ci.yml`-এর `Build`-এর সঙ্গে `heavy-build-main` concurrency group ভাগ করে
  (`cancel-in-progress: false`)। Docker Engine অবশ্যই `omniroute-113-5`-এ থাকতে হবে। দ্বিতীয় Turbopack
  slot 78 GB-তে ধরে না (2 × 33–37 GB, সঙ্গে বক্সের বাকি অংশ); দ্বিতীয় slot কেবল
  webpack build-এর জন্যই নিরাপদ।
- **Pull-request Build-গুলো hosted runner-এ চলে (2026-10-18)।** `ci.yml`-এর `Build` কেবল
  `push` ও `workflow_dispatch`-এর ক্ষেত্রে `omni-build`-এ পৌঁছায়; প্রতিটি `pull_request` (নিজস্ব origin বা fork)
  এবং `merge_group` Build webpack-সহ `ubuntu-latest`-এ চলে। নিজস্ব origin-এর প্রতিটি PR slot-এ পাঠানোর সময়,
  একটি Turbopack Build সেটি 29–58 মিনিট ধরে রাখত, 18টি Build সর্বোচ্চ 18 ঘণ্টা পর্যন্ত queue-তে অপেক্ষা করেছিল,
  এবং release line-এর নিজস্ব push Build 40টি job-এর মধ্যে মাত্র একবার slot পেয়েছিল। Hosted runner-এ একই PR Build,
  PR-এর অন্যান্য job-এর পাশাপাশি 8–12 মিনিট সময় নেয়। `npm-publish` যে bundler প্রকাশ করে, সেই Turbopack-এর
  পরীক্ষা release line-এ চলতে থাকে default branch-এর nightly a11y build (04:41 UTC), slot-এ পৌঁছানো
  প্রতিটি push বা dispatch Build এবং `npm-publish` নিজেই চালানোর মাধ্যমে।
  `tests/unit/build/heavy-build-queue.test.ts` চার-শর্তের gate-টি নির্দিষ্ট করে রাখে।
- **Turbopack slot কখনোই তার পরিমাপ করা প্রয়োজনের চেয়ে ছোট করবেন না।** 2026-10-18 তারিখে 18:06-এ
  `omni-release`-এর জন্য জায়গা করতে slot-টি 56G/60G থেকে 40G/44G-তে নামানো হয়েছিল। পুরো run জুড়ে
  compile phase `MemoryHigh`-এ আটকে ছিল (memory PSI `full` 30–43 %), এবং একই cgroup ভাগ করা
  `Runner.Listener` তার job নবায়ন করতে পারেনি। 2026-10-17-এর মালিক-নির্ধারিত 56G/60G একই দিনে
  পুনরুদ্ধার করা হয়েছিল। ওই মানের নিচে build ব্যর্থ হয় না; এটি thrash করতে থাকে, এবং job হারিয়ে যায়।
- **Release-Green-এর নিজস্ব slot রয়েছে (2026-10-18)।** এর আগে Release-Green-এর দুটি validation-ই
  `omni-build`-এ চলত: প্রতিটি push-এ (~10/hour, এক দিনে 100টি push run-এর 97টি কাজের মাঝপথে বাতিল হয়েছিল)
  এবং দিনে তিনটি ~2 h পূর্ণ sweep-এ (05:29-এর sweep slot-এর জন্য 6 h অপেক্ষা করেছিল) — একমাত্র build
  slot-টির ধারণক্ষমতার তুলনায় বহুগুণ বেশি চাপ ছিল এবং নিজস্ব origin-এর PR Build-গুলো ঘণ্টার পর ঘণ্টা অপেক্ষা করত।
  `release-green` এবং `main-green` এখন `OMNIROUTE_USE_TURBOPACK=0`-সহ `omni-release`
  (শুধু `omniroute-113-6`) লক্ষ্য করে, এবং শুরু হয়ে যাওয়া কোনো run এখন আর নতুন push-এর কারণে বাতিল হয় না
  (pending slot এখনও run-এর ঝড়কে সংকুচিত করে)। `tests/unit/build/runner-capacity-routing.test.ts`
  routing, webpack switch এবং `omni-release`-এর কোনো কিছুই যেন Turbopack দিয়ে build না করে—এগুলো নির্দিষ্ট করে রাখে।
- **হালকা pool: `omni-light`।** `omniroute-113` এবং `omniroute-113-2` এমন nightly job চালায়, যেগুলোর
  কেবল backend-এর জন্য `next build` (~5–6 GB; webpack) এবং `quality.yml`-এর `lint-guard` প্রয়োজন।
  2026-10-18 পর্যন্ত `omniroute-113`-এ `MemoryHigh=4G` ছিল — সেখানে promptfoo build-টি memory reclaim
  করতে করতে 54 মিনিট পার করেছিল; 8 GB throttling দূর করে।
- **ইচ্ছাকৃতভাবেই listener কম রাখা হয়েছে।** 2026-08-29 তারিখে চারটি OmniRoute unit নিষ্ক্রিয় করা হয়েছিল — প্রতিটি অতিরিক্ত
  listener ওপরের memory budget-এর আরেকজন tenant। janitor-এর সর্বোচ্চ সীমা 6 (cron-এ `MAX_ACTIVE_RUNNERS=6`): এটি
  বক্সের প্রতিটি `Runner.Listener` গণনা করে, এবং আমাদের চারটির সঙ্গে OmniHeuris + OmniMind আরও দুটি যোগ করে।
- **কোনো runner ব্যস্ত থাকা অবস্থায় কখনোই হাতে `/tmp` বা `_work` পরিষ্কার করবেন না।**
  যাচাই ও মুছে ফেলার মাঝখানে বিরতি থাকা check-then-delete-এর কারণেই 2026-08-27 তারিখে একটি চলমান Build job তার
  `_work` হারিয়েছিল। janitor একই ধাপে যাচাই ও অপসারণ করে;
  কাজটি তাকেই করতে দিন।
- কোনো runner-কে job-এর মাঝপথে থামালে job-টি বাতিল হয় (সরাসরি পর্যবেক্ষিত): কেবল তখনই `systemctl stop`
  করুন, যখন তার listener-এর কোনো `Runner.Worker` child নেই — এবং এটি একটিমাত্র command-এ করুন।
- Workflow-গুলো `/tmp`-তে artefact জমা করে রাখতে পারবে না (এটি RAM)। Download করুন
  `$RUNNER_TEMP`-এ (প্রতি runner-এর জন্য disk-এ) — 1.3 GB-এর `next-build` artefact-টি tmpfs-এ পৌঁছাতে 27–32
  মিনিট এবং disk থেকে upload করতে 2 মিনিট সময় নিয়েছিল।
- `.15` VPS কেবল homologation-এর জন্য — সেখানে কখনোই CI runner চলে না।

## হোস্টেড লেন (GitHub-হোস্টেড রানার)

অ্যাকাউন্টটি **Pro** প্ল্যানে রয়েছে: **40টি সমবর্তী হোস্টেড জব**, যা প্রতিটি PR চেক,
প্রতিটি push-ট্রিগারড workflow এবং CodeQL-এর ডিফল্ট সেটআপের মধ্যে শেয়ার করা হয়। 2026-10-18 তারিখে
একটি merge campaign চলাকালে (~10টি merge/ঘণ্টা, `release/v3.8.52`-এ) পরিমাপ করা হয়েছে: **24 ঘণ্টায়
2,500টি workflow run তৈরি হয়েছে**, 6 ঘণ্টায় branch-টিতে 44টি push হয়েছে, এবং PR চেকগুলো
ঘণ্টার পর ঘণ্টা অপেক্ষা করার সময় **106টি hosted job queue-তে ছিল**; সেগুলো ছাড়াই PR merge করা হয়েছে।
branch-টিতে প্রতিটি push-এর সময় নয়টি workflow চালু হয়েছে:

| `release/v*`-এ প্রতি push                   |  hosted job | এই চাপের মধ্যে ফলাফল                                               | 2026-10-18 থেকে                                                                 |
| ------------------------------------------- | ----------: | ------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `ci.yml` (সম্পূর্ণ matrix)                  | সর্বোচ্চ 30 | পরবর্তী push দ্বারা বাতিল, এক দিনে 24টির মধ্যে 24টিই               | `release/**` push-এ শুরু হয় না (PR run + Release-Green)                        |
| `quality.yml`                               |          ~6 | বাতিল, 23টির মধ্যে 23টিই                                           | `release/**` push-এ শুরু হয় না                                                 |
| `Release-Green` `--quick`                   |           0 | `omni-build`-এ চলেছে, 100টির মধ্যে 97টি বাতিল হয়েছে               | `omni-release` slot, কখনো বাতিল হয় না, pending run একীভূত হয়                  |
| `Lock released branch`, `OpenSSF Scorecard` |           2 | প্রতি push-এ queue-তে একটি run                                     | প্রতি ref-এ একটি run (`tests/unit/build/hosted-lane-concurrency.test.ts`)       |
| `Release acceptance` (shadow report)        |           1 | প্রতি push-এ একটি hosted `npm ci`, কখনো বাতিল হয়নি                | অপরিবর্তিত — একটি `paths:` filter-এর উপযুক্ত প্রার্থী                           |
| `Publish to Docker Hub` → `Deploy to VPS`   |           2 | প্রতি push-এ বাতিল; amd64 leg `omni-build`-এ প্রতিযোগিতা করে       | অপরিবর্তিত — মালিকের deploy channel                                             |
| CodeQL default setup (`dynamic`)            |           4 | প্রতি push-এ `javascript-typescript`, `actions`, `c-cpp`, `python` | অপরিবর্তিত — Settings → Code security; `c-cpp`/`python` এখানে কিছুই scan করে না |

`tests/unit/build/push-storm-diet.test.ts`, `ci.yml` এবং
`quality.yml`-এর শুধু-`main` push trigger-টি স্থির রাখে। পার্শ্বপ্রতিক্রিয়া: Codecov আর প্রতি release push-এ
base upload পায় না (step-টি কেবল তথ্যগত এবং `continue-on-error`); repository-র অভ্যন্তরীণ
coverage gate এবং PR comment এতে প্রভাবিত হয় না।

**আরও self-hosted capacity যোগ করলে hosted queue-র সমস্যার সমাধান হয় না।** devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) একটি runner host করতে পারত, কিন্তু agent session-গুলো ইতিমধ্যেই
এর load 20–26-এ রাখে, agent container-এ কোনো Docker daemon নেই, এবং যে lane-টি saturation-এ পৌঁছেছে
সেটি hosted lane। একই মুহূর্তে `.113` box-এ 71 GB খালি ছিল এবং load ছিল 5–8; এর সীমাবদ্ধতা
CPU নয়, বরং উপরে উল্লিখিত প্রতি-listener memory budget (সর্বোচ্চ 6টি listener)। অবশিষ্ট উপায়গুলো
প্রক্রিয়াভিত্তিক: campaign PR-গুলো Mergify queue-এর মাধ্যমে land করা (`label=queue`; batch-গুলো
প্রতি PR-এ একটি run এবং প্রতি push-এ একটি run-এর পরিবর্তে একটি `merge_group` CI run শেয়ার করে),
CodeQL default-setup-এর language-গুলো কমানো, এবং `release-acceptance.yml` যে file-গুলো পড়ে সেগুলোর
ভিত্তিতে সেটি filter করা।
