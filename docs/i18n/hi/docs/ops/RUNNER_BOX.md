# Self-Hosted Runner Box Operations (.113 pool) (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

सेल्फ़-होस्टेड पूल **.113** बॉक्स (`tomni-proxmox-113`) पर चलता है। 2026-10-18 से प्रत्येक
OmniRoute रनर की **एक भूमिका**, एक लेबल और उसके मापे गए कार्यभार के अनुरूप मेमोरी/CPU बजट
है। Turbopack स्लॉट को बिल्ड की आवश्यकता के अनुसार संसाधन मिलते हैं; अन्य स्लॉट अपने
मापे गए शिखर उपयोग के अनुसार आकारित हैं। बॉक्स केवल तभी संसाधनों को ओवरकमिट करता है, जब कोई Turbopack बिल्ड Release-Green
webpack बिल्ड और lint जॉब के साथ एक ही समय पर चलता है; होस्ट स्वैप (16 GB) इसे संभालता है, और चूँकि पुल-रिक्वेस्ट बिल्ड
होस्टेड रनर पर चलते हैं, इसलिए Turbopack स्लॉट अधिकांश समय निष्क्रिय रहता है:

| रनर                  | लेबल              | भूमिका                                                                                                                                              | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`      | Turbopack बिल्ड: `ci.yml` `Build` (केवल push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, रात्रिकालीन a11y बिल्ड | 56 GB / 60 GB (स्वैप 0)    | 1600 %         |
| `omniroute-113-6`    | `omni-release`    | Release-Green (`release-green` + `main-green`), webpack बिल्ड                                                                                       | 20 GB / 24 GB (स्वैप 4 GB) | 800 %          |
| `omniroute-113-2`    | `omni-light`      | रात्रिकालीन कार्य (Schemathesis, promptfoo, garak, k6, a11y बूट) और `quality.yml` `lint-guard`                                                      | 12 GB / 16 GB (स्वैप 4 GB) | 600 %          |
| `omniroute-113`      | `omni-light`      | ऊपर जैसा ही पूल                                                                                                                                     | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (उनके रिपॉज़िटरी) | केवल Dependabot (प्रत्येक का शिखर 155 MB, 2026-10-18)                                                                                               | 4 GB / 6 GB                | प्रत्येक 200 % |

2026-10-18 को मापा गया:

| संसाधन    | मान                       | शेड्यूलिंग के लिए इसका अर्थ                                                                                                                                                                                                                                                                                                                                               |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 कोर**        | एक Turbopack प्रोडक्शन बिल्ड बिना सीमा के 49 GB के शिखर पर पहुँचा (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8 पर केवल कंपाइल चरण ही ~40 GB रखता है (`next-build` में 36 GB RSS और 3 GB वाले 17 लोडर वर्कर, 2026-10-18 को मापा गया); एक webpack बिल्ड ~14–16 GB पर रहता है। एक Turbopack + एक webpack बिल्ड साथ में समा जाते हैं; दो Turbopack बिल्ड नहीं |
| स्वैप     | 16 GB                     | `omniroute-113-5` स्वैप बंद करके चलता है (`MemorySwapMax=0`), ताकि नियंत्रण से बाहर हुआ बिल्ड बॉक्स को स्वैप कराने के बजाय अपनी सीमा पर समाप्त कर दिया जाए                                                                                                                                                                                                                |
| `/tmp`    | **12 GB tmpfs = RAM**     | वहाँ रखी कोई भी चीज़ मेमोरी का उपयोग करती है; बची हुई फ़ाइलें 3 घंटे बाद हटा दी जाती हैं                                                                                                                                                                                                                                                                                  |
| CPU       | 32 कोर पर लोड 60 देखा गया | कोटा लागू होने से पहले, उसी बॉक्स पर एक Turbopack बिल्ड (~1166 % CPU) और कवरेज सूट ने अन्य लिसनरों के हार्टबीट को संसाधनों से वंचित कर दिया था (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                      |
| रनर       | **6 लिसनर**               | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` अक्षम हैं (`systemctl enable --now` इनमें से किसी एक को फिर से चालू करता है)                                                                                                                                                                                                                              |

सीमाएँ प्रत्येक यूनिट की `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
में स्थित हैं (पिछले मान `override.conf.bak-20261018` के रूप में रखे गए हैं) और इन्हें
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` से लाइव लागू किया गया था — पुनः आरंभ किए बिना, इसलिए
चल रहे किसी भी जॉब पर असर नहीं पड़ा। लेबल runners API के माध्यम से बदले जाते हैं
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), वह भी लाइव।

## जैनिटर इंस्टॉल करें (एक बार, सर्वर पर)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): हर 30 मिनट में, लॉग /var/log/runner-janitor.log में
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` आवश्यक है: जैनिटर किसी पथ को हटाने से पहले खुली हुई फ़ाइलों के एक
स्नैपशॉट से साबित करता है कि वह निष्क्रिय है, और इस टूल के बिना वह कुछ भी नहीं
हटाता तथा इसकी सूचना देता है (exit 1)। किसी भी बदलाव को पहले `--dry-run` के साथ
आज़माएँ — यह ठीक वही प्रिंट करता है जो यह करता और किसी चीज़ को छूता नहीं है।

यह प्रत्येक रन में क्या करता है: **tmpfs पर 3 घंटे** और डिस्क के
`_work/_temp` पर 24 घंटे के बाद हमारे अपने बचे हुए अवशेषों (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) को साफ़ करता है; 75 मिनट से पुराने `next-build`
को समाप्त करता है (कोई जॉब इतना लंबा नहीं चलता — 2026-08-27 को GitHub द्वारा
जॉब को खोया हुआ घोषित करने के बाद भी एक जॉब 70 मिनट तक चला था); उन runners के 48
घंटे पुराने checkouts हटाता है जिनकी unit **रुकी हुई** है; डिस्क ≥ 85 %, मेमोरी PSI
`full/avg60` ≥ 10 %, और `MAX_ACTIVE_RUNNERS` से अधिक listeners होने पर चेतावनी देता
है (omniroute/other विवरण सहित)। Exit 1 = ध्यान देने की आवश्यकता है; लॉग पढ़ें।

75-मिनट का नियम उस build को नहीं पकड़ता जिसका जॉब GitHub पहले ही छोड़ चुका है। जब
`Runner.Listener` अपने जॉब को नवीनीकृत नहीं कर पाता, तो `_diag/Runner_*.log` में
`POST request to …/renewjob timed out after 100 seconds` दिखाई देता है, API अंतिम सफल
नवीनीकरण के लगभग दस मिनट बाद जॉब को `completed` (विफल) बताता है, और `next-build`
बिना किसी जॉब से जुड़े चलता रहता है (2026-10-18: #17066 का Build 19:43 पर विफल हुआ
था और पाँच मिनट बाद भी उसका build 40 GB घेरे हुए था)। नवीनतम `_diag/Worker_*.log`
में ref की पुष्टि करें, फिर केवल build tree को PID के आधार पर SIGTERM भेजें —
`next-build`, `npm run build`, `build-next-isolated.mjs` और `_work` workers को।
`Runner.Listener`, `RunnerService.js` या `Runner.Worker` को कभी न छुएँ: worker जॉब
को रद्द हुआ रिपोर्ट करता है और listener अपने आप फिर से ऑनलाइन हो जाता है।

## Runner units: KillMode

Runner का डिफ़ॉल्ट `KillMode=process`, unit को रोकने या पुनः शुरू करने पर
`Runner.Worker → npm → next-build` को चलता छोड़ देता है — एक अनाथ build बिना किसी
जॉब से जुड़े RAM और CPU का उपभोग करता रहता है। प्रत्येक OmniRoute unit में एक drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
होता है जिसमें `KillMode=mixed` है: पहले listener को SIGTERM, फिर `TimeoutStop` पर
पूरे cgroup को SIGKILL। यह unit के अगले restart पर प्रभावी होता है — निष्क्रियता की
जाँच और restart को एक ही command में रखते हुए, **एक बार में केवल एक runner को,
और केवल उसके निष्क्रिय होने पर** restart करें।

## संचालन नियम

- **एक समय में केवल एक Turbopack बिल्ड — लेबल द्वारा लागू।** पूर्ण Turbopack
  `next build` चलाने वाला प्रत्येक जॉब `[self-hosted, omni-build]` को लक्षित करता है, और केवल **`omniroute-113-5`** पर वह
  लेबल है: `ci.yml` का `Build`, `npm-publish.yml` का `publish`, `nightly-v4-build`, `preview-artifact`,
  नाइटली a11y बिल्ड (#16853) और `docker-publish.yml` का **amd64** (BuildKit के भीतर webpack —
  वहाँ Turbopack पैनिक हुआ था, रन 33253576569)। arm64 Docker चरण `ubuntu-24.04-arm` पर ही रहता है।
  `docker-publish` का amd64, `ci.yml` के `Build` के साथ `heavy-build-main` concurrency समूह साझा करता है
  (`cancel-in-progress: false`)। Docker Engine का `omniroute-113-5` पर होना आवश्यक है। दूसरा Turbopack
  स्लॉट 78 GB में समा नहीं सकता (2 × 33–37 GB और बॉक्स का बाकी उपयोग); दूसरा स्लॉट केवल
  webpack बिल्ड के लिए सुरक्षित है।
- **पुल-रिक्वेस्ट बिल्ड होस्टेड पर चलते हैं (2026-10-18)।** `ci.yml` का `Build` केवल
  `push` और `workflow_dispatch` के लिए `omni-build` तक पहुँचता है; प्रत्येक `pull_request` (अपने मूल का या फ़ोर्क से) और `merge_group` बिल्ड
  webpack के साथ `ubuntu-latest` पर चलता है। अपने मूल के प्रत्येक PR को स्लॉट पर रूट किए जाने पर, एक Turbopack
  बिल्ड ने इसे 29–58 मिनट तक व्यस्त रखा, 18 बिल्ड 18 घंटे तक कतार में रहे, और रिलीज़ लाइन के अपने push बिल्ड
  को 40 जॉब में केवल एक बार स्लॉट मिला। होस्टेड पर वही PR बिल्ड, PR के अन्य
  जॉब के साथ 8–12 मिनट लेता है। `npm-publish` द्वारा भेजा जाने वाला बंडलर Turbopack, रिलीज़ लाइन पर
  डिफ़ॉल्ट ब्रांच के नाइटली a11y बिल्ड (04:41 UTC), स्लॉट तक पहुँचने वाले प्रत्येक push या dispatch बिल्ड,
  और स्वयं `npm-publish` द्वारा लगातार परखा जाता है। `tests/unit/build/heavy-build-queue.test.ts`
  चार-खंड वाले गेट को सुनिश्चित करता है।
- **Turbopack स्लॉट का आकार उसकी मापी गई आवश्यकता से कभी कम न करें।** 2026-10-18 को 18:06 बजे,
  `omni-release` के लिए जगह बनाने हेतु स्लॉट को 56G/60G से घटाकर 40G/44G किया गया था। कंपाइल चरण अपने
  पूरे रन के दौरान `MemoryHigh` पर अटका रहा (मेमोरी PSI `full` 30–43 %), और उसी cgroup को
  साझा करने वाला `Runner.Listener` अपने जॉब का नवीनीकरण नहीं कर सका। 2026-10-17 का स्वामी-निर्धारित 56G/60G
  उसी दिन बहाल कर दिया गया। इस मान से नीचे बिल्ड विफल नहीं होता; वह लगातार थ्रैश करता है और जॉब खो जाता है।
- **Release-Green का अपना स्लॉट है (2026-10-18)।** तब तक दोनों Release-Green सत्यापन
  `omni-build` पर चलते थे: प्रत्येक push पर (~10/घंटा, एक दिन में 100 push रन में से 97 काम के बीच में रद्द हुए)
  और प्रतिदिन तीन ~2 घंटे के पूर्ण स्वीप (05:29 वाले स्वीप ने स्लॉट के लिए 6 घंटे प्रतीक्षा की) — एकमात्र बिल्ड
  स्लॉट की क्षमता से कई गुना अधिक काम था और अपने मूल के PR बिल्ड घंटों प्रतीक्षा करते थे।
  `release-green` और `main-green` अब `OMNIROUTE_USE_TURBOPACK=0` के साथ `omni-release`
  (केवल `omniroute-113-6`) को लक्षित करते हैं, और शुरू हो चुका रन अब किसी नए push द्वारा रद्द नहीं किया जाता
  (लंबित स्लॉट अब भी इस बाढ़ को समेट देता है)। `tests/unit/build/runner-capacity-routing.test.ts`
  रूटिंग, webpack स्विच और यह सुनिश्चित करता है कि `omni-release` पर कुछ भी Turbopack के साथ बिल्ड न हो।
- **हल्का पूल: `omni-light`।** `omniroute-113` और `omniroute-113-2` वे नाइटली रन करते हैं जिन्हें
  केवल बैकएंड वाला `next build` (~5–6 GB; webpack) और `quality.yml` का `lint-guard` चाहिए। `omniroute-113`
  पर 2026-10-18 तक `MemoryHigh=4G` था — promptfoo बिल्ड वहाँ 54 मिनट तक रिक्लेम करते हुए आगे बढ़ता रहा;
  8 GB थ्रॉटलिंग समाप्त कर देता है।
- **जानबूझकर कम लिसनर।** 2026-08-29 को चार OmniRoute यूनिट अक्षम कर दी गई थीं — प्रत्येक अतिरिक्त
  लिसनर ऊपर दिए गए मेमोरी बजट का एक और दावेदार है। जैनिटर की अधिकतम सीमा 6 है (cron में `MAX_ACTIVE_RUNNERS=6`): यह बॉक्स पर
  प्रत्येक `Runner.Listener` को गिनता है, और हमारे चार में OmniHeuris + OmniMind दो और जोड़ते हैं।
- **जब कोई भी रनर व्यस्त हो, तब `/tmp` या `_work` को कभी भी हाथ से साफ़ न करें।**
  जाँच और हटाने के बीच अंतराल वाले check-then-delete के कारण 2026-08-27 को एक सक्रिय Build जॉब का
  `_work` खो गया था। जैनिटर जाँच और हटाने का काम एक ही चरण में करता है;
  उसे करने दें।
- किसी रनर को जॉब के बीच में रोकने से जॉब रद्द हो जाता है (लाइव देखा गया): `systemctl stop` केवल
  तभी चलाएँ जब उसके लिसनर की कोई `Runner.Worker` चाइल्ड न हो — और इसे एक ही कमांड में करें।
- वर्कफ़्लो को आर्टिफ़ैक्ट `/tmp` में नहीं रखने चाहिए (यह RAM है)। उन्हें
  `$RUNNER_TEMP` में डाउनलोड करें (डिस्क पर, प्रत्येक रनर के लिए अलग) — 1.3 GB के `next-build` आर्टिफ़ैक्ट को tmpfs पर पहुँचने में 27–32
  मिनट लगे, जबकि डिस्क से अपलोड होने में 2 मिनट लगे।
- `.15` VPS केवल होमोलोगेशन के लिए है — यह कभी भी CI रनर नहीं चलाता।

## होस्टेड लेन (GitHub-होस्टेड रनर)

खाता **Pro** प्लान पर है: **40 समवर्ती होस्टेड जॉब**, जिन्हें प्रत्येक PR जाँच,
प्रत्येक पुश-ट्रिगर वर्कफ़्लो और CodeQL का डिफ़ॉल्ट सेटअप साझा करते हैं। 2026-10-18 को
एक मर्ज अभियान (~10 मर्ज/घंटा, `release/v3.8.52` पर) के दौरान मापा गया: **24 घंटे में
2,500 वर्कफ़्लो रन बनाए गए**, 6 घंटे में ब्रांच पर 44 पुश, **106 होस्टेड जॉब कतार में**
जबकि PR जाँचें घंटों तक प्रतीक्षा करती रहीं और PR उनके बिना ही मर्ज कर दिए गए। ब्रांच पर
प्रत्येक पुश के साथ नौ वर्कफ़्लो ट्रिगर हुए:

| `release/v*` पर प्रति पुश                   | होस्टेड जॉब | अत्यधिक लोड के दौरान परिणाम                                     | 2026-10-18 से                                                                    |
| ------------------------------------------- | ----------: | --------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `ci.yml` (पूर्ण मैट्रिक्स)                  |   अधिकतम 30 | अगले पुश द्वारा रद्द, एक दिन में 24 में से 24                   | `release/**` पुश पर शुरू नहीं हुआ (PR रन + Release-Green)                        |
| `quality.yml`                               |          ~6 | रद्द, 23 में से 23                                              | `release/**` पुश पर शुरू नहीं हुआ                                                |
| `Release-Green` `--quick`                   |           0 | `omni-build` पर चला, 100 में से 97 रद्द                         | `omni-release` स्लॉट, कभी रद्द नहीं, लंबित रन एक में समाहित होते हैं             |
| `Lock released branch`, `OpenSSF Scorecard` |           2 | प्रति पुश एक रन कतार में                                        | प्रति ref एक रन (`tests/unit/build/hosted-lane-concurrency.test.ts`)             |
| `Release acceptance` (शैडो रिपोर्ट)         |           1 | प्रति पुश एक होस्टेड `npm ci`, कभी रद्द नहीं                    | अपरिवर्तित — `paths:` फ़िल्टर के लिए संभावित उम्मीदवार                           |
| `Publish to Docker Hub` → `Deploy to VPS`   |           2 | प्रति पुश रद्द; amd64 चरण `omni-build` पर प्रतिस्पर्धा करता है  | अपरिवर्तित — स्वामी का डिप्लॉय चैनल                                              |
| CodeQL डिफ़ॉल्ट सेटअप (`dynamic`)           |           4 | प्रति पुश `javascript-typescript`, `actions`, `c-cpp`, `python` | अपरिवर्तित — Settings → Code security; `c-cpp`/`python` यहाँ कुछ स्कैन नहीं करते |

`tests/unit/build/push-storm-diet.test.ts`, `ci.yml` और `quality.yml` के केवल-`main` पुश
ट्रिगर को स्थिर रखता है। दुष्प्रभाव: अब Codecov को प्रत्येक रिलीज़ पुश पर बेस अपलोड नहीं
मिलता (यह चरण केवल सूचनात्मक है और `continue-on-error` है); रिपॉज़िटरी के भीतर का
कवरेज गेट और PR टिप्पणी अप्रभावित हैं।

**अधिक सेल्फ़-होस्टेड क्षमता से होस्टेड कतार की समस्या ठीक नहीं होती।** devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) एक रनर होस्ट कर सकता है, लेकिन एजेंट सेशन पहले
से ही उसका लोड 20–26 पर बनाए रखते हैं, एजेंट कंटेनर में कोई Docker daemon नहीं है, और
संतृप्त लेन होस्टेड वाली है। उसी समय `.113` बॉक्स में 71 GB खाली स्थान और 5–8 लोड था;
उसकी बाधा ऊपर दिया गया प्रति-लिसनर मेमोरी बजट है (अधिकतम 6 लिसनर), CPU नहीं। शेष उपाय
प्रक्रिया-संबंधी हैं: अभियान PR को Mergify कतार के माध्यम से लैंड करें (`label=queue`,
बैच प्रति PR एक रन और प्रति पुश एक रन के बजाय एक `merge_group` CI रन साझा करते हैं),
CodeQL के डिफ़ॉल्ट-सेटअप की भाषाएँ कम करें, और `release-acceptance.yml` को उसके द्वारा
पढ़ी जाने वाली फ़ाइलों के आधार पर फ़िल्टर करें।
