# Self-Hosted Runner Box Operations (.113 pool) (नेपाली)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

सेल्फ-होस्टेड पूल **.113** मेसिन (`tomni-proxmox-113`) मा चल्छ। 2026-10-18 देखि प्रत्येक
OmniRoute रनरसँग **एउटा भूमिका**, एउटा लेबल, र त्यसको कार्यभारको मापनअनुसार निर्धारण गरिएको मेमोरी/CPU बजेट छ।
Turbopack स्लटले बिल्डलाई आवश्यक पर्ने स्रोतहरू पाउँछ; अन्य स्लटहरू तिनका मापन गरिएका
उच्चतम खपतअनुसार निर्धारण गरिएका छन्। Turbopack बिल्ड, Release-Green
webpack बिल्ड र lint कार्य एकै समयमा पर्दा मात्र मेसिनले क्षमताभन्दा बढी स्रोत छुट्याउँछ;
होस्ट स्व्याप (16 GB) ले त्यसलाई सम्हाल्छ, र pull-request बिल्डहरू
होस्टेड रूपमा चल्ने भएकाले Turbopack स्लट अधिकांश समय निष्क्रिय रहन्छ:

| रनर                  | लेबल                 | भूमिका                                                                                                                                                    | `MemoryHigh` / `MemoryMax`   | `CPUQuota`     |
| -------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`         | Turbopack बिल्डहरू: `ci.yml` `Build` (push/dispatch मात्र), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, र रात्रिकालीन a11y बिल्ड | 56 GB / 60 GB (स्व्याप 0)    | 1600 %         |
| `omniroute-113-6`    | `omni-release`       | Release-Green (`release-green` + `main-green`), webpack बिल्ड                                                                                             | 20 GB / 24 GB (स्व्याप 4 GB) | 800 %          |
| `omniroute-113-2`    | `omni-light`         | रात्रिकालीन कार्यहरू (Schemathesis, promptfoo, garak, k6, a11y बुट) र `quality.yml` `lint-guard`                                                          | 12 GB / 16 GB (स्व्याप 4 GB) | 600 %          |
| `omniroute-113`      | `omni-light`         | माथिकै पूल                                                                                                                                                | 8 GB / 12 GB                 | 400 %          |
| OmniHeuris, OmniMind | (तिनका रिपोजिटरीहरू) | Dependabot मात्र (प्रत्येकको उच्चतम खपत 155 MB, 2026-10-18)                                                                                               | 4 GB / 6 GB                  | प्रत्येक 200 % |

2026-10-18 मा मापन गरिएको:

| स्रोत     | मान                          | अनुसूचीकरणका लागि यसको अर्थ                                                                                                                                                                                                                                                                                                                                             |
| --------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 कोर**           | सीमित नगरिएको Turbopack उत्पादन बिल्डको उच्चतम खपत 49 GB थियो (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8 मा compile चरणले मात्र ~40 GB ओगट्छ (`next-build` मा 36 GB RSS र 3 GB का 17 loader worker, 2026-10-18 मा मापन गरिएको); webpack बिल्डले ~14–16 GB ओगट्छ। एउटा Turbopack + एउटा webpack बिल्ड सँगै अटाउँछन्; दुईवटा Turbopack बिल्ड अटाउँदैनन् |
| स्व्याप   | 16 GB                        | `omniroute-113-5` स्व्याप बन्द गरेर (`MemorySwapMax=0`) चल्छ, त्यसैले नियन्त्रणबाहिर गएको बिल्डले मेसिनलाई स्व्याप गराउनुको सट्टा आफ्नो सीमामा पुगेपछि काटिन्छ                                                                                                                                                                                                          |
| `/tmp`    | **12 GB tmpfs = RAM**        | त्यहाँ राखिएको जुनसुकै कुरा मेमोरीमा रहन्छ; बाँकी रहेका वस्तुहरू 3 घन्टापछि हटाइन्छन्                                                                                                                                                                                                                                                                                   |
| CPU       | 32 कोरमा लोड 60 देखिएको थियो | quota लागू गर्नुअघि, एउटै मेसिनमा एउटा Turbopack बिल्ड (~1166 % CPU) र coverage suite सँगै चल्दा अन्य listener का heartbeat ले स्रोत पाउन सकेका थिएनन् (`The self-hosted runner lost communication`, #16853)                                                                                                                                                            |
| रनरहरू    | **6 वटा listener**           | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` निष्क्रिय छन् (`systemctl enable --now` ले एउटालाई पुनः सञ्चालनमा ल्याउँछ)                                                                                                                                                                                                                              |

सीमाहरू प्रत्येक unit को `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
मा छन् (अघिल्ला मानहरू `override.conf.bak-20261018` का रूपमा राखिएका छन्) र
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` मार्फत चलिरहेकै अवस्थामा लागू गरिएका थिए — पुनः सुरु गर्नुपरेन, त्यसैले
चलिरहेको कुनै पनि कार्यमा असर परेन। लेबलहरू पनि चलिरहेकै अवस्थामा runners API मार्फत परिवर्तन गरिन्छ
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`)।

## सफाइकर्ता स्थापना गर्नुहोस् (एक पटक, मेसिनमा)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): प्रत्येक 30 मिनेटमा, /var/log/runner-janitor.log मा लग गर्नुहोस्
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` आवश्यक छ: सफाइकर्ताले कुनै पथ हटाउनुअघि खुला फाइलहरूको एउटा
स्न्यापसटबाट त्यो निष्क्रिय रहेको प्रमाणित गर्छ, र यो उपकरण नभएमा त्यसले केही पनि
हटाउँदैन र सोही कुरा बताउँछ (exit 1)। कुनै पनि परिवर्तन पहिले `--dry-run` प्रयोग गरेर
परीक्षण गर्नुहोस् — यसले आफूले ठ्याक्कै के गर्ने थियो भन्ने देखाउँछ र केही पनि परिवर्तन गर्दैन।

हरेक पटक चल्दा यसले गर्ने काम: **tmpfs मा 3 घण्टा** र डिस्कको
`_work/_temp` मा 24 घण्टापछि हाम्रा आफ्नै बाँकी वस्तुहरू (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) सफा गर्छ; 75 मिनेटभन्दा पुरानो `next-build`
समाप्त गर्छ (कुनै पनि job त्यति लामो चल्दैन — 2026-08-27 मा GitHub ले त्यसको job
हराएको घोषणा गरिसकेपछि एउटा 70 मिनेटसम्म चलेको थियो); unit **stopped** भएका
runner हरूका 48 घण्टा पुराना checkout हरू हटाउँछ; डिस्क ≥ 85 %, memory PSI
`full/avg60` ≥ 10 %, र `MAX_ACTIVE_RUNNERS` भन्दा बढी listener भएमा
(omniroute/other विवरणसहित) सतर्क गराउँछ। Exit 1 = ध्यान आवश्यक छ; लग पढ्नुहोस्।

75-मिनेटको नियमले GitHub ले पहिले नै त्यागिसकेको job को build पत्ता लगाउँदैन।
`Runner.Listener` ले आफ्नो job नवीकरण गर्न नसक्दा `_diag/Runner_*.log` मा
`POST request to …/renewjob timed out after 100 seconds` देखिन्छ, API ले अन्तिम सफल
नवीकरणको करिब दस मिनेटपछि job लाई `completed` (failure) भनी रिपोर्ट गर्छ, र कुनै
job संलग्न नभए पनि `next-build` चलिरहन्छ (2026-10-18: #17066 को Build 19:43 मा
failed भएको थियो र पाँच मिनेटपछि पनि त्यसको build ले 40 GB ओगटिरहेको थियो)।
सबैभन्दा नयाँ `_diag/Worker_*.log` मा ref पुष्टि गर्नुहोस्, त्यसपछि PID का आधारमा
build tree लाई मात्र SIGTERM पठाउनुहोस् — `next-build`, `npm run build`,
`build-next-isolated.mjs` र `_work` worker हरूलाई। `Runner.Listener`,
`RunnerService.js` वा `Runner.Worker` लाई कहिल्यै नछुनुहोस्: worker ले job लाई
cancelled भनी रिपोर्ट गर्छ र listener आफैं फेरि online हुन्छ।

## Runner unit हरू: KillMode

Runner को पूर्वनिर्धारित `KillMode=process` ले unit रोक्दा वा पुनः सुरु गर्दा
`Runner.Worker → npm → next-build` लाई चलिरहन दिन्छ — job संलग्न नभएको अनाथ
build ले RAM र CPU खपत गरिरहन्छ। प्रत्येक OmniRoute unit मा
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
स्थित `KillMode=mixed` भएको drop-in हुन्छ: पहिले listener लाई SIGTERM, त्यसपछि
`TimeoutStop` मा पूरै cgroup लाई SIGKILL। यो unit को अर्को restart मा प्रभावकारी
हुन्छ — **एक पटकमा एउटा मात्र runner, त्यो पनि निष्क्रिय हुँदा मात्र**, निष्क्रियता
जाँच र restart एउटै command मा राखेर restart गर्नुहोस्।

## सञ्चालन नियमहरू

- **एक पटकमा एउटा मात्र Turbopack build — लेबलद्वारा लागू गरिएको।** पूर्ण Turbopack
  `next build` चलाउने प्रत्येक job ले `[self-hosted, omni-build]` लक्षित गर्छ, र **`omniroute-113-5`** मा मात्र उक्त
  लेबल छ: `ci.yml` को `Build`, `npm-publish.yml` को `publish`, `nightly-v4-build`, `preview-artifact`,
  nightly a11y build (#16853) र `docker-publish.yml` को **amd64** (BuildKit भित्र webpack —
  त्यहाँ Turbopack आत्तिएर बन्द भएको थियो, run 33253576569)। arm64 Docker चरण `ubuntu-24.04-arm` मै रहन्छ।
  `docker-publish` को amd64 ले `ci.yml` को `Build` सँग `heavy-build-main` concurrency group साझा गर्छ
  (`cancel-in-progress: false`)। Docker Engine `omniroute-113-5` मा हुनैपर्छ। दोस्रो Turbopack
  slot 78 GB मा अट्दैन (2 × 33–37 GB र box का बाँकी प्रक्रियाहरू); दोस्रो slot केवल
  webpack build हरूका लागि सुरक्षित छ।
- **Pull-request Build हरू hosted runner मा चल्छन् (2026-10-18)।** `ci.yml` को `Build` ले `omni-build` लाई
  `push` र `workflow_dispatch` का लागि मात्र प्रयोग गर्छ; प्रत्येक `pull_request` (आफ्नै origin वा fork) र `merge_group` Build
  webpack सहित `ubuntu-latest` मा चल्छ। आफ्नै origin का प्रत्येक PR लाई slot तर्फ पठाउँदा, एउटा Turbopack
  Build ले त्यसलाई 29–58 मिनेटसम्म ओगट्थ्यो, 18 वटा Build 18 घण्टासम्म queue मा बसे, र release line को आफ्नै push Build ले
  40 वटा job मध्ये एक पटक मात्र slot पायो। Hosted runner मा त्यही PR Build, PR का अन्य
  job हरूसँगै 8–12 मिनेटमा सकिन्छ। `npm-publish` ले पठाउने bundler Turbopack को परीक्षण release line मा
  default branch को nightly a11y build (04:41 UTC), slot सम्म पुग्ने प्रत्येक push वा dispatch Build,
  र `npm-publish` स्वयंले निरन्तर गरिरहन्छन्। `tests/unit/build/heavy-build-queue.test.ts`
  ले चार-सर्तीय gate लाई सुनिश्चित गर्छ।
- **Turbopack slot लाई यसको मापन गरिएको आवश्यकताभन्दा कहिल्यै सानो नबनाउनुहोस्।** 2026-10-18 को 18:06 मा
  `omni-release` का लागि ठाउँ बनाउन slot लाई 56G/60G बाट 40G/44G मा घटाइएको थियो। compile चरण आफ्नो
  पूरै run भरि `MemoryHigh` मै अड्कियो (memory PSI `full` 30–43 %), र cgroup साझा गर्ने
  `Runner.Listener` ले आफ्नो job नवीकरण गर्न सकेन। 2026-10-17 मा मालिकले राखेको 56G/60G त्यही
  दिन पुनःस्थापित गरियो। त्यो मानभन्दा तल build असफल हुँदैन; यसले अत्यधिक memory thrashing गर्छ, र job हराउँछ।
- **Release-Green को आफ्नै slot छ (2026-10-18)।** त्यतिबेलासम्म दुवै Release-Green validation
  `omni-build` मा चल्थे: प्रत्येक push मा (~10/घण्टा, एक दिनमा 100 push run मध्ये 97 वटा कामकै बीचमा रद्द)
  र दिनमा तीनवटा ~2 घण्टाका पूर्ण sweep (05:29 को sweep ले slot का लागि 6 घण्टा कुर्यो) — एकमात्र build
  slot को क्षमताभन्दा कैयौँ गुणा बढी माग थियो र आफ्नै origin का PR Build हरूले घण्टौँ कुर्नुपर्थ्यो।
  `release-green` र `main-green` ले अब `OMNIROUTE_USE_TURBOPACK=0` सहित `omni-release`
  (`omniroute-113-6` मात्र) लक्षित गर्छन्, र सुरु भइसकेको run लाई अब नयाँ push ले रद्द गर्दैन
  (pending slot ले अझै पनि अत्यधिक मागलाई समेट्छ)। `tests/unit/build/runner-capacity-routing.test.ts`
  ले routing, webpack switch र `omni-release` मा कुनै पनि कुरा Turbopack प्रयोग गरेर build नहुने कुरा सुनिश्चित गर्छ।
- **हल्का pool: `omni-light`।** `omniroute-113` र `omniroute-113-2` ले backend-only
  `next build` (~5–6 GB; webpack) आवश्यक पर्ने nightly हरू र `quality.yml` को `lint-guard` चलाउँछन्। `omniroute-113`
  मा 2026-10-18 सम्म `MemoryHigh=4G` थियो — promptfoo build ले त्यहाँ 54 मिनेटसम्म memory reclaim गर्दै
  अगाडि बढ्यो; 8 GB ले throttling हटाउँछ।
- **जानाजानी थोरै listener।** 2026-08-29 मा चारवटा OmniRoute unit निष्क्रिय गरिए — प्रत्येक अतिरिक्त
  listener माथिको memory budget को अर्को tenant हो। janitor को अधिकतम सीमा 6 हो (`MAX_ACTIVE_RUNNERS=6` cron मा): यसले
  box का प्रत्येक `Runner.Listener` गणना गर्छ, र OmniHeuris + OmniMind ले हाम्रा चारवटामा थप दुईवटा जोड्छन्।
- **कुनै runner व्यस्त हुँदा `/tmp` वा `_work` लाई कहिल्यै हातैले सफा नगर्नुहोस्।**
  जाँच र मेटाइबीच अन्तराल भएको check-then-delete कै कारण 2026-08-27 मा चलिरहेको Build job ले आफ्नो
  `_work` गुमाएको थियो। janitor ले जाँच र हटाउने काम एउटै चरणमा गर्छ;
  त्यो काम उसैलाई गर्न दिनुहोस्।
- job चलिरहँदा runner रोक्दा job रद्द हुन्छ (प्रत्यक्ष रूपमा देखिएको): यसको listener को कुनै
  `Runner.Worker` child नभएको अवस्थामा मात्र `systemctl stop` गर्नुहोस् — र त्यो एउटै command मा गर्नुहोस्।
- Workflow हरूले artefact लाई `/tmp` मा राखेर छाड्नु हुँदैन (यो RAM हो)। तिनलाई
  `$RUNNER_TEMP` मा download गर्नुहोस् (disk मा, प्रत्येक runner का लागि छुट्टै) — 1.3 GB को `next-build` artefact लाई tmpfs मा आइपुग्न 27–32
  मिनेट लाग्यो र disk बाट upload हुन 2 मिनेट लाग्यो।
- `.15` VPS homologation का लागि मात्र हो — यसले कहिल्यै CI runner चलाउँदैन।

## होस्ट गरिएको लेन (GitHub-द्वारा होस्ट गरिएका रनरहरू)

खाता **Pro** योजनामा छ: **40 समवर्ती होस्ट गरिएका जॉबहरू**, जुन प्रत्येक PR जाँच,
प्रत्येक पुशद्वारा ट्रिगर गरिएको वर्कफ्लो र CodeQL को पूर्वनिर्धारित सेटअपले साझा गर्छन्। 2026-10-18 मा
`release/v3.8.52` मा मर्ज अभियान (~10 मर्ज/घण्टा) का क्रममा गरिएको मापनअनुसार: **24 h मा
2,500 वर्कफ्लो रनहरू सिर्जना भए**, 6 h मा उक्त शाखामा 44 पुश भए, र PR जाँचहरू
घण्टौँसम्म पर्खिरहँदा **106 होस्ट गरिएका जॉबहरू लाममा थिए** तथा ती जाँचहरूबिनै PR हरू मर्ज गरिए। शाखामा प्रत्येक पुश हुँदा नौवटा वर्कफ्लो चले:

| `release/v*` मा प्रत्येक पुश                | होस्ट गरिएका जॉबहरू | चापका बेला परिणाम                                                    | 2026-10-18 देखि                                                                         |
| ------------------------------------------- | ------------------: | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `ci.yml` (पूर्ण म्याट्रिक्स)                |            बढीमा 30 | अर्को पुशद्वारा रद्द, एक दिनमा 24 मध्ये 24                           | `release/**` पुशहरूमा सुरु हुँदैन (PR रन + Release-Green)                               |
| `quality.yml`                               |                  ~6 | रद्द, 23 मध्ये 23                                                    | `release/**` पुशहरूमा सुरु हुँदैन                                                       |
| `Release-Green` `--quick`                   |                   0 | `omni-build` मा चल्यो, 100 मध्ये 97 रद्द                             | `omni-release` स्लट, कहिल्यै रद्द हुँदैन, बाँकी रन एउटैमा समेटिन्छ                      |
| `Lock released branch`, `OpenSSF Scorecard` |                   2 | प्रत्येक पुशका लागि एउटा रन लाममा                                    | प्रत्येक ref का लागि एउटा रन (`tests/unit/build/hosted-lane-concurrency.test.ts`)       |
| `Release acceptance` (छाया प्रतिवेदन)       |                   1 | प्रत्येक पुशमा एउटा होस्ट गरिएको `npm ci`, कहिल्यै रद्द हुँदैन       | अपरिवर्तित — `paths:` फिल्टरका लागि उम्मेदवार                                           |
| `Publish to Docker Hub` → `Deploy to VPS`   |                   2 | प्रत्येक पुशमा रद्द; amd64 लेगले `omni-build` मा प्रतिस्पर्धा गर्छ   | अपरिवर्तित — मालिकको डिप्लोय च्यानल                                                     |
| CodeQL पूर्वनिर्धारित सेटअप (`dynamic`)     |                   4 | प्रत्येक पुशमा `javascript-typescript`, `actions`, `c-cpp`, `python` | अपरिवर्तित — सेटिङहरू → कोड सुरक्षा; `c-cpp`/`python` ले यहाँ केही पनि स्क्यान गर्दैनन् |

`tests/unit/build/push-storm-diet.test.ts` ले `ci.yml` र
`quality.yml` को `main`-मात्र पुश ट्रिगरलाई स्थिर गर्छ। साइड इफेक्ट: Codecov ले अब प्रत्येक रिलीज पुशमा आधार अपलोड
प्राप्त गर्दैन (यो चरण सूचनामूलक छ र `continue-on-error` प्रयोग गर्छ); रिपोजिटरीभित्रको कभरेज गेट र PR टिप्पणीमा
कुनै असर पर्दैन।

**थप self-hosted क्षमताले होस्ट गरिएको लामको समस्या समाधान गर्दैन।** devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) ले रनर होस्ट गर्न सक्थ्यो, तर एजेन्ट सत्रहरूले पहिले नै
यसको लोड 20–26 मा राख्छन्, एजेन्ट कन्टेनरमा Docker डेमन छैन, र संतृप्त लेन
होस्ट गरिएको लेन नै हो। त्यही समयमा `.113` बक्समा 71 GB खाली ठाउँ र 5–8 लोड थियो; यसको सीमितता
माथि उल्लेख गरिएको प्रति-लिसनर मेमोरी बजेट (अधिकतम 6 लिसनर) हो, CPU होइन। बाँकी उपायहरू
प्रक्रियासम्बन्धी हुन्: अभियानका PR हरूलाई Mergify लाममार्फत ल्यान्ड गर्ने (`label=queue`, ब्याचहरूले
प्रत्येक PR का लागि एउटा रन र प्रत्येक पुशका लागि अर्को रन चलाउनुको सट्टा एउटै `merge_group` CI रन
साझा गर्छन्), CodeQL को पूर्वनिर्धारित-सेटअपका भाषाहरू घटाउने, र `release-acceptance.yml` ले पढ्ने
फाइलहरूका आधारमा त्यसलाई फिल्टर गर्ने।
