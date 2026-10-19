# Quality Gates Reference (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

ይህ ሰነድ በOmniRoute ውስጥ ላሉ ሁሉም የCI ጥራት መግቢያዎች ዋና ማጣቀሻ ነው።
እያንዳንዱን መግቢያ፣ ምን እንደሚያረጋግጥ፣ በየትኛው የCI ሥራ ውስጥ እንደሚሠራ፣
የratchet መነሻ መስመር ወይም የማለፍ/የመውደቅ ፖሊሲ ይጠቀም እንደሆነ፣ እንዲሁም ግንባታውን የሚያግድ ወይም የምክር ብቻ እንደሆነ ይገልጻል።

ለአጭር ማጠቃለያ እና ለፈቃድ ዝርዝር ፖሊሲው፣ በ`AGENTS.md` ውስጥ ያለውን "የጥራት መግቢያዎች እና Ratchets" ክፍል ይመልከቱ።
ለወሳኝ ግምገማው፣ ለብስለት ምደባው፣ እና ከመሣሪያ ነፃ ለሆነው
የተመሳሳይ ሥርዓት ድግግሞሽ ዕቅድ፣
[የጥራት መግቢያ መመሪያ](../ops/QUALITY_GATE_PLAYBOOK.md)ን ይመልከቱ።

---

## የጌት ዝርዝር እና የአፈጻጸም መገለጫዎች

### የእጩ ተቀባይነት

የCI እና Quality Gates የስራ ፍሰቶች እያንዳንዳቸው የተረጋጋ ውሳኔ ያወጣሉ፦ `Gate / CI` እና
`Gate / Quality`። በስሪት የሚተዳደረው የተቀባይነት ፖሊሲያቸው እያንዳንዱን የላይኛው ፍሰት ስራ
እንደ አስፈላጊ ወይም አማካሪ በመዘርዘር ይገልጻል። ተፈጻሚ የሆነ አስፈላጊ ስራ መሳካት አለበት፦ የጎደሉ፣
የተሰረዙ፣ የተዘለሉ፣ በመጠባበቅ ላይ ያሉ እና ያልታወቁ ውጤቶች PASSን ማረጋገጥ አይችሉም። ትክክለኛ
የሰነዶች-ብቻ ወይም የካታሎግ-ብቻ ምደባ የኮድ መስመርን ተፈጻሚ ያልሆነ ሊያደርገው ይችላል፤
ረቂቅ PR ተቀባይነት ያገኘ እጩ አይደለም። የ`hotfix` መለያ ማስረጃን አያስቀርም።

ሁለቱም የስራ ፍሰቶች PRዎችን፣ ወደ main/release ቅርንጫፎች የሚደረጉ pushesን፣ manual dispatchን እና
merge-group eventsን ይሸፍናሉ። Push፣ dispatch እና merge-group ሙሉ ምርጫውን ያስኬዳሉ። Forks
እና merge groups በሌላ ሁኔታ self-hosted runnersን ለሚመርጡ ስራዎች hosted runnersን ይጠቀማሉ፤
ከመሰማራቱ በፊት በቂ የhosted አቅም መኖሩ መረጋገጥ አለበት።

እያንዳንዱ JSON ደረሰኝ የተፈተሸውን SHA፣ የስራ ፍሰት አሂድ እና ሙከራ ይለያል።
CLIው በcheckout/event SHA መካከል አለመዛመድ ካለ ውድቅ ያደርጋል። የስራ ፍሰት ሙከራዎች የፖሊሲ አባልነትን
ከውሳኔ ስራው `needs` ዝርዝር ጋር ያስተሳስራሉ፣ ስለዚህ አዲስ ወይም የተወገደ መስመር በጸጥታ ሊጠፋ አይችልም።
ደረሰኞቹ የራሳቸውን የስራ ፍሰት ይሸፍናሉ እንጂ ህትመትን፣ ስምሪትን ወይም የነባር
አማካሪ ስካነር ውስጣዊ አሰራርን አይሸፍኑም። ሁለቱንም የማረጋገጫ ስሞች በቅርንጫፍ ደንቦች ውስጥ ማንቃት
የተለየ የአስተዳደር ለውጥ ነው፤ እነዚህን ስራዎች መጨመር በራሱ ቅርንጫፍን አይጠብቅም።

### የስታቲክ ቅኝት ዝርዝር

በስሪት የሚተዳደረው የnpm-alias ዝርዝር እና የስታቲክ-ቅኝት አባልነት በ
`config/quality/gate-manifest.json` ውስጥ ይገኛሉ። የስክሪፕት ስሞችን እና ትክክለኛ ትዕዛዞችን ከ`package.json` ጋር
ለማረጋገጥ `npm run check:gate-manifest`ን ያስኪዱ፤ መጨመሮች፣ ማስወገዶች እና
የትዕዛዝ ለውጦች ሁለቱንም የአካባቢ hook እና በCI ውስጥ ያሉትን የለውጥ-ምደባ ስራዎች እንዲወድቁ ያደርጋሉ።
Alias የስራ ፍሰት ስራ፣ matrix instance ወይም test case አይደለም፦ እነዚህ ቁጥሮች
እርስ በርሳቸው እንደሚተካኩ ተደርገው መቅረብ የለባቸውም።

የተመረጡትን aliases ሳያስኪዷቸው ለመመርመር `npm run quality:scan -- --list` ወይም `npm run quality:scan:fast -- --list`ን
ይጠቀሙ። Runnerው የnpm entrypointን ይጠራል፣ ስለዚህ runtimeው (በተዋቀረበት ቦታ Bunን ጨምሮ) እንዳለ ይቆያል።
Manifestው ከእነዚያ መገለጫዎች ውጭ ያሉ aliasesን በተናጠል እንደሚጠሩ ይመዘግባል፣ እና
የጥገና ትዕዛዞች በተነባቢ-ብቻ የቅኝት መገለጫዎች ውስጥ የተከለከሉ ናቸው።

እነዚህ መገለጫዎች የስታቲክ ቅኝቱን ብቻ ይሸፍናሉ። የምርት ሙከራዎችን፣
coverageን፣ packagingን፣ ውጫዊ checksን ወይም የእጩን ሙሉ የrelease ተቀባይነት አያረጋግጡም።
የስራ ፍሰት ተቀባይነት የተገናኙትን `config/quality/admission-policy.json` እና
`scripts/quality/admission-verdict.mjs` ይጠቀማል። የRelease-observer መገለጫዎች ተለይተው ይቆያሉ፤
ተፈጻሚ checksን እና ደረሰኞቻቸውን በተናጠል ይመርምሩ። ከታች ያለው የጽሑፍ
ዝርዝር ማጣቀሻ እንጂ ጌት በእርግጥ መስራቱን የሚያረጋግጥ ማስረጃ አይደለም።

ስክሪፕቶች በ`scripts/check/` (የፖሊሲ ጌቶች) እና `scripts/quality/` (የratchet engine) ስር ይገኛሉ።
የCI ዋና የእውነት ምንጭ `.github/workflows/ci.yml` ነው።

### የRelease PR ፈጣን-መንገድ (`quality.yml`)

`.github/workflows/quality.yml` በmain/release PRዎች፣ protected-branch
pushes፣ dispatch እና merge groups ላይ CIን ያሟላል። PRዎች በpath-filtered የተደረጉ ፈጣን checksን ይጠቀማሉ። በቋሚነት
የተሰናከለው duplicate build ተወግዷል፤ እውነተኛዎቹ build/package/boot checks በCI ውስጥ ይቀጥላሉ።

| ስራ                                               | ወሰን                                                                                                                                                                         | አጋጅ            |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `Docs Gates (fast-path)`                         | የሰነድ/ኮድ PRዎች፤ API docs refs እና docs-all                                                                                                                                     | አዎ             |
| `Fast Quality Gates`                             | የኮድ PRዎች፤ static checks፣ typecheck፣ dashboard typecheck፣ impacted unit tests                                                                                                | አዎ             |
| `Forgotten sibling tests`                        | የኮድ PRዎች፤ የተቀየሩ modules ወደ static consumers እና candidate sibling tests ይከታተላሉ፤ barrel እና dynamic-import paths ከተጠቀሱ allowlist exceptions ጋር እንደ አማካሪ diagnostics ሪፖርት ይደረጋሉ | **አማካሪ**       |
| `Vitest (fast-path)`                             | የኮድ PRዎች፤ ፈጣን vitest suite                                                                                                                                                  | አዎ             |
| `Unit Tests fast-path`                           | የኮድ PRዎች፤ ባለ4-shard unit suite                                                                                                                                              | አዎ             |
| `No new ESLint warnings`                         | የኮድ PRዎች፤ suppressions-aware lint guard                                                                                                                                     | አዎ፣ forksን ጨምሮ |
| `Merge integrity (changelog + generated skills)` | ረቂቅ ያልሆኑ PRዎች፤ changelog እና generated skill sync                                                                                                                            | አዎ፣ forksን ጨምሮ |

#### የForgotten sibling tests ሪፖርት

`npm run check:forgotten-sibling-tests` ከtest-impact map በስተጀርባ ያለውን import resolver እንደገና ይጠቀማል።
ለእያንዳንዱ የተቀየረ production module፣ እጩው
test በpull-request diff ውስጥ ከሌለ ቆራጥ የሆኑ `changed module/symbol -> static consumer -> candidate sibling test` ሰንሰለቶችን ሪፖርት ያደርጋል። የMarkdown summary እና JSON result ከማንኛውም አጋጅ ስምሪት በፊት ለcalibration እንደ
`forgotten-sibling-tests` የስራ ፍሰት artifact ተይዘው ይቆያሉ።

Barrel ዳግም-ወደውጭ መላኮች እና dynamic imports የresolution ምርመራዎች ብቻ ናቸው፤ በፍጹም
blocking finding አይፈጥሩም። የተገመገሙ ልዩ ሁኔታዎች በ
`config/quality/forgotten-sibling-allowlist.json` ውስጥ ይገኛሉ። እያንዳንዱ ግቤት consumer እና candidate
testን በስም መጥቀስ፣ የተወሰነ ምክንያት መስጠት እና ወደ GitHub issue ወይም pull request ማገናኘት አለበት። ቅርጸት የተበላሸባቸው ግቤቶች
በነባሪ ውድቅ ይደረጋሉ። ልዩ ሁኔታዎች የተሰረዘ candidate testን ወይም `.skip`/`.todo`ን የሚጨምር diffን ሊያፍኑ አይችሉም፤
assertion ማዳከም እና ሌሎች የመደበቂያ ዘዴዎች አሁንም በተናጥል blocking በሆነው
`check:test-masking` gate ሥር ይቆያሉ።

### ሥራ፦ `lint`

ወደ `main` በሚቀርብ እያንዳንዱ PR ላይ ይሰራል። ካልተሳካ mergeን ያግዳል።

| Script (`npm run ...`)            | የሚያረጋግጠው                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Blocking                             |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| `check:node-runtime`              | የNode.js ስሪት በሚደገፈው ክልል ውስጥ መሆኑን                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | አዎ                                   |
| `check:cycles`                    | `src/` + `open-sse/`; AST (`import` / `export`, tsconfig `paths`). `check:cycles`: `cycles > 0 → exit 1`; `SCC → stderr` (#15281). `check:cycles:ratchet` (CI የሚያስኬደው) ብዛቱ በ`quality-baseline.json` ውስጥ ያለውን የ`metrics.cycles` ከፍተኛ ገደብ ሲያልፍ ያግዳል — በአሁኑ ጊዜ 14፣ `direction: down`፣ ስለዚህ መቀነስ ብቻ ይችላል (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                | አዎ (ratchet)                         |
| `check:boundary`                  | የ`open-sse → src` ጥገኝነት፦ ከengine ወደ app የሚመጡ ልዩ የፋይል-ወደ-ፋይል imports (`scripts/quality/measure-boundary.mjs`፤ edge listው የv4 core/module-split ማስተካከያ backlog ነው)። Bare = የምክር ሪፖርት (ከ`quality:boundary` ጋር ተመሳሳይ)። `check:boundary:ratchet` (CI የሚያስኬደው፣ እንዲሁም በ`quality.yml` fast-gates ratchet loop ውስጥ ያለው) ቁጥሩ በ`quality-baseline.json` ውስጥ ያለውን የ`metrics.boundaryOpenSseToSrc` ጣሪያ ሲያልፍ ያግዳል — በተለካው 771 ላይ ተጀምሯል፣ `direction: down`፤ `--update` የሚቀንሰው ብቻ ነው፤ በPRዎች ላይ ከbase አንጻር ይሰራል (`--base-ref`፣ ከታች ይመልከቱ)                                                                                                                                                                                                                                                                | አዎ (ratchet)                         |
| `check:route-validation:t06`      | በሁሉም routes ላይ Zod schemas መኖራቸውን (Tier 6 policy)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | አዎ                                   |
| `check:any-budget:t11`            | የ`@ts-expect-error // any` ብዛት ከበጀቱ አይበልጥም (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | አዎ                                   |
| `check:provider-consistency`      | በ`providers.ts` ውስጥ ያለው እያንዳንዱ provider በ`providerRegistry.ts` ውስጥ ተዛማጅ ግቤት አለው (እና በተቃራኒው፣ በallowlist ውስጥ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | አዎ                                   |
| `check:model-lifecycle`           | በእጅ የሚያዙት ሦስቱ የrouting ሰንጠረዦች ከተቀማጭ lifecycle snapshot (#11503) ጋር ወጥነታቸውን ይጠብቃሉ፦ `FITNESS_TABLE` (`taskFitness.ts`)፣ `REGISTRY` ሊያሰራጨው ለሚችል ከአገልግሎት የወጣ id ምንም ነጥብ አይሰጥም፤ እያንዳንዱ የ`BUILT_IN_ALIASES` target በ`REGISTRY` ውስጥ ይገኛል እና ከአገልግሎት የወጡ idዎችን በያዘው snapshot ውስጥ አይገኝም፤ አሁንም በ`REGISTRY` ውስጥ ያለ እያንዳንዱ ከአገልግሎት የወጣ id ወደ ሌላ ይተላለፋል ወይም በ`allowedRetiredInCatalog` ውስጥ ተዘርዝሯል፤ እና ማንኛውም የ`DEFAULT_DEGRADATION_MAP` source ወይም target በዚያ snapshot ውስጥ ከአገልግሎት እንደወጣ አይታይም። ይህ አንድ model በአሁኑ ጊዜ በቀጥታ upstream እየቀረበ መሆኑን አያረጋግጥም። Offline — በ`config/quality/model-lifecycle.json` ላይ ያወዳድራል፤ ይህም በእጅ `npm run quality:refresh-model-lifecycle`ን በመጠቀም ይታደሳል (network፤ ከCI ጋር አልተገናኘም)። `allowedRetiredInCatalog` ቀስ በቀስ የሚቀንስ ratchet ነው፦ ግቤት የሚጨመረው ከtracking issue ጋር ብቻ ነው። | አዎ                                   |
| `check:fetch-targets`             | በclient-side `src/` ውስጥ ያለ እያንዳንዱ `fetch("/api/...")` ወደ እውነተኛ `route.ts` ይፈታል                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | አዎ                                   |
| `check:deps`                      | በrepo ውስጥ ባሉ ሁሉም `package.json` ፋይሎች ውስጥ `npm install` ሊደረግባቸው የሚችሉ deps በ`dependency-allowlist.json` ውስጥ ይገኛሉ፤ አዲስ ያልተሰኩ ወይም slopsquatted packages ምልክት ይደረግባቸዋል                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | አዎ                                   |
| `audit:deps`                      | `npm audit` (root + electron) — ከፍተኛ/ወሳኝ advisories የሉም (ከosv `check:vuln-ratchet` ጋር ይደራረባል፤ Rationalization Backlogን ይመልከቱ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | አዎ                                   |
| `check:lockfile`                  | የ`package-lock.json` ትክክለኛነት — https registry፣ የትክክለኛነት hashes፣ የhost overrides የሉም                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | አዎ                                   |
| `check:licenses`                  | ለproduction dependencies የSPDX license allowlist                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | አዎ                                   |
| `check:tracked-artifacts`         | የbuild artifacts / በcommit የተደረጉ `node_modules` symlinks የሉም (በhusky pre-commit ውስጥም ይሰራል፤ pre-push ሆን ተብሎ ቀላል ተደርጓል — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | አዎ                                   |
| `check:ai-attribution`            | በPR commits፣ title ወይም body ውስጥ የAI/bot `Co-Authored-By` trailer ወይም የAI-generation footer የለም — ጥብቅ ደንብ #16 (ለPR→`release/**` በ`quality.yml` fast-gates loop ውስጥ — የevent payloadን ያነባል፣ ከPRዎች ውጭ ምንም አያደርግም — እና ለPR→`main` በ`ci.yml` lint ውስጥ PR-ብቻ step፤ እንዲሁም የhusky `commit-msg` hook፤ ሰው co-authors ይፈቀዳሉ፤ #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `check:vitest-exclusions`         | እያንዳንዱ የVitest exclusion የtracking issue ይጠቅሳል እና በ`config/quality/vitest-exclusions.json` ውስጥ ይታያል (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | አዎ                                   |
| `check:file-size`                 | የsource files (`.ts`/`.tsx` በ`src/`፣ `open-sse/`፣ `electron/`፣ `bin/` ውስጥ) በ`cap` ገደብ ውስጥ፣ የtest files (`*.test.ts(x)`) ደግሞ በ`testCap` ገደብ ውስጥ ይቆያሉ፤ በ`file-size-baseline.json` ውስጥ የታገዱ files (`frozen` / `testFrozen`) ከተመዘገበው size በላይ ማደግ የለባቸውም                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | አዎ                                   |
| `check:error-helper`              | በexecutors/handlers ውስጥ ያሉ የስህተት ምላሾች `buildErrorBody()` / `sanitizeErrorMessage()`ን ይጠቀማሉ (ጥብቅ ደንብ #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | አዎ                                   |
| `check:migration-numbering`       | የMigration SQL ፋይሎች ያለ ክፍተት ወይም ድግግሞሽ በቅደም ተከተል ቁጥር ተሰጥቷቸዋል                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | አዎ                                   |
| `check:public-creds`              | ከ`publicCreds.ts` ውጭ ቀጥተኛ የOAuth `client_id`/`client_secret` ወይም የFirebase Web ቁልፎች የሉም (ጥብቅ ደንብ #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | አዎ                                   |
| `check:db-rules`                  | ከ`src/lib/db/` modules ውጭ raw SQL የለም፤ ከ`localDb.ts` barrel-imports የሉም (ጥብቅ ደንቦች #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | አዎ                                   |
| `check:known-symbols`             | በdispatch tables ውስጥ የተመዘገቡ Provider executors፣ routing strategies እና translators በዲስክ ላይ ካሉ ፋይሎች ጋር ይዛመዳሉ — ወላጅ አልባ ወይም ያልታወጁ symbols የሉም                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | አዎ                                   |
| `check:route-guard-membership`    | child process የሚያስጀምር እያንዳንዱ route በ`isLocalOnlyPath()` ይመደባል (ጥብቅ ደንቦች #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | አዎ                                   |
| `check:test-discovery`            | በrepo ውስጥ ያለ እያንዳንዱ `*.test.ts` / `*.spec.ts` ፋይል ቢያንስ በአንድ test runner ይሰበሰባል (ratchet፦ በ`test-discovery-baseline.json` ውስጥ ያለው orphan ዝርዝር መቀነስ ብቻ ይችላል)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | አዎ                                   |
| `check:agent-skills-sync`         | የተፈጠሩ agent-skills artifacts ከምንጭ catalogቸው ጋር ይዛመዳሉ (ልዩነት የለም)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `check:provider-asset-provenance` | የprovider logos/assets የተመዘገበ provenance ግቤት አላቸው                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `lint:json`                       | የJSON config ፋይሎች በትክክል parse ይደረጋሉ፣ እንዲሁም የrepo lint ደንቦችን ያሟላሉ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `typecheck:core`                  | ያለ ስህተት TypeScript compilation (የምክር ማስጠንቀቂያዎች ብቻ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | አዎ                                   |
| `typecheck:noimplicit:core`       | ጥብቅ `noImplicitAny` — ወደፊትን ያማከለ፤ ብዙ ቀድሞ የነበሩ call sites አሁንም annotations ያስፈልጋቸዋል                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **ምክራዊ** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | ለ`src/app/(dashboard)/**` የተወሰነ `tsc` (#7033) — የ`typecheck:core` በጥንቃቄ የተመረጠው ባለ27-ፋይል allowlist ምንም dashboard TSX አያካትትም፣ እና `next build`ም በፍጹም type-check አያደርገውም (`next.config.mjs` `ignoreBuildErrors: true`ን ያዘጋጃል)፤ ስለዚህ በዚያ ያሉ orphaned-identifier regressions (#6625/#6909) ለCI የማይታዩ ነበሩ። ልዩነቶች ከቀዘቀዘ በእያንዳንዱ-ፋይል/በእያንዳንዱ-TS-code ብዛት baseline (`config/quality/dashboard-typecheck-baseline.json`፣ ከ`check:known-symbols` ጋር ተመሳሳይ የstale-enforcement ንድፍ) ጋር ይነጻጸራሉ — ከbaselined ብዛት በላይ ያሉ አዲስ ስህተቶች ብቻ gateን ያሳክታሉ፤ ቀድሞ የነበረ ስህተት ሲስተካከል በ`--update` ratchetን ዝቅ ያድርጉ።                                                                                                                                                                                                   | አዎ                                   |

### Job፦ `quality-gate`

`test-coverage` ከተከናወነ በኋላ ይሰራል። ካልተሳካ ውህደትን ያግዳል።

| ስክሪፕት                        | የሚያረጋግጠው                                                                                                                                   | አጋጅ               |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `quality:collect`            | `quality-metrics.json` ያመነጫል (የESLint ማስጠንቀቂያዎች ብዛት፣ ከተዋሃደው shard ሪፖርት የተገኘ ሽፋን)                                                           | አዎ (ከratchet በፊት) |
| `quality:ratchet`            | በ`quality-baseline.json` ውስጥ ያለ እያንዳንዱ መለኪያ ወደ ኋላ አለመመለሱን ያረጋግጣል (የESLint ማስጠንቀቂያዎች ≤ መነሻ መስመር፤ ሽፋን ≥ መነሻ መስመር)                            | አዎ                |
| `check:duplication`          | የኮድ ድግግሞሽ (jscpd@4) በ`quality-baseline.json` ውስጥ ካለው መነሻ መስመር አይበልጥም                                                                       | አዎ                |
| `check:complexity`           | የፋይል ደረጃ cyclomatic ውስብስብነት ከገደቡ አይበልጥም (ዋናው ESLint `complexity` + `max-lines-per-function`)                                               | አዎ                |
| `check:cognitive-complexity` | የግንዛቤ ውስብስብነት ratchet (`eslint-plugin-sonarjs`) — የተለየ የESLint ማለፊያ፤ CI ሁለቱንም አዋህዶ እንደ አንድ `check:complexity-ratchets` ደረጃ ያስኬዳል           | አዎ                |
| `check:dead-code`            | ጥቅም ላይ ያልዋሉ exports / ፋይሎች ratchet (knip) ከመነሻ መስመሩ አንጻር ወደ ኋላ አይመለስም                                                                      | አዎ                |
| `check:compression-budget`   | የማመቅ ቤንችማርክ በጀት — ለእያንዳንዱ engine የተቀመጡ ዝቅተኛ የtoken ቁጠባ ገደቦች ወደ ኋላ መመለስ የለባቸውም                                                              | አዎ                |
| `check:type-coverage`        | በመቶኛ የተተየበው ratchet (`type-coverage`) ወደ ኋላ አይመለስም፤ `typecheck:noimplicit:core`ን በአብዛኛው ይሸፍናል                                              | አዎ                |
| `check:codeql-ratchet`       | የተከፈቱ የCodeQL ማንቂያዎች ብዛት ወደ ኋላ አይመለስም (በ`gh api` በኩል ያነባል፤ token ከሌለ ያለ ስህተት ይዘላል) — የማደሻ ድግግሞሽ እና በእጅ ማስጀመሪያ፦ ከታች "CodeQL ratchet"ን ይመልከቱ | አዎ                |

### ሥራ፦ `quality-extended`

ሙሉው ሥራ ምክር ሰጪ ነው (`continue-on-error: true`)። በnpm ላይ የተመሠረቱት ratchets
በእውነት ይሰራሉ፤ ውጫዊ scanners በ`gh release download` በኩል ይጫናሉ እና binary
አሁንም ከሌለ በራሳቸው ይዘላሉ (exit 0)።

| ስክሪፕት                    | የሚያረጋግጠው                                                                                                                                                                      | አጋጅ                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| `check:circular-deps`    | ምንም ዑደታዊ dependencies የሉም (dpdm)                                                                                                                                              | **ምክር ሰጪ**                                  |
| `check:bundle-size`      | የbundle መጠን ከገደቡ አይበልጥም                                                                                                                                                       | **ምክር ሰጪ**                                  |
| `check:secrets`          | የምስጢር ቅኝት (gitleaks) — binary ከሌለ ይዘላል                                                                                                                                        | **ምክር ሰጪ**                                  |
| `check:vuln-ratchet`     | የdependency ተጋላጭነቶች (osv-scanner) ወደ ኋላ አይመለሱም — binary ከሌለ ይዘላል                                                                                                              | **ምክር ሰጪ**                                  |
| `check:workflows`        | የworkflow lint (actionlint + zizmor)፤ የጎደሉ/የተበላሹ scanners፣ ልክ ያልሆኑ ሪፖርቶች ወይም የጎደለ ratchet መነሻ መስመር INCOMPLETE በሚል ያሰናክላሉ። ትክክለኛ findings የተመረጠውን ጥብቅ/ምክር ሰጪ/ratchet ፖሊሲ ይከተላሉ | ማስፈጸም ያስፈልጋል፤ zizmor ratchet በCI ውስጥ አጋጅ ነው |
| `check:openapi-breaking` | በpublic API contract (`openapi.yaml`) ላይ ከbase branch አንጻር የሚፈጠሩ ተኳኋኝነትን የሚያፈርሱ ለውጦች (oasdiff) — `openapiBreaking=N` ያመነጫል፤ oasdiff ከሌለ ወይም base spec ሊፈታ ካልቻለ ይዘላል           | **ምክር ሰጪ**                                  |

### ሥራ፦ `docs-sync-strict`

ወደ `main` በሚደረግ እያንዳንዱ PR ላይ ይሰራል። ካልተሳካ ውህደትን ያግዳል።

| ስክሪፕት                          | የሚያረጋግጠው                                                                                                                                  | አጋጅ                      |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `check:docs-all`               | ከታች ያሉትን 6 ንዑስ-ጌቶች በቅደም ተከተል የሚያስኬድ ሜታ-ጌት                                                                                                 | አዎ                       |
| ↳ `check:docs-sync`            | የCHANGELOG / OpenAPI / llm.txt ስሪት ወጥነት                                                                                                   | አዎ                       |
| ↳ `check:docs-counts`          | በጽሑፍ ውስጥ ያሉ ቁጥሮች (የአቅራቢዎች ብዛት፣ የፍልሰቶች ብዛት፣ ወዘተ) ከትክክለኛዎቹ ቁጥሮች የራቼት መስኮት ውስጥ መሆናቸውን                                                        | አዎ                       |
| ↳ `check:env-doc-sync`         | በ`.env.example` ውስጥ ያለው እያንዳንዱ env var በሰነዶች ሰንጠረዥ ውስጥ መዘገቡን፣ እንዲሁም በተቃራኒው                                                                | አዎ                       |
| ↳ `check:deprecated-versions`  | በሰነዶች ውስጥ የተቋረጡ የስሪት ሕብረቁምፊዎች አለመኖራቸውን                                                                                                    | አዎ                       |
| ↳ `check:doc-links`            | በሰነዶች ውስጥ ያሉ ውስጣዊ markdown አገናኞች ወደ እውነተኛ ፋይሎች መጠቆማቸውን (`[text]`/`(path)` ቅርጽ)                                                            | አዎ                       |
| ↳ `check:fabricated-docs`      | በሰነዶች ውስጥ የተጠቀሱ routes፣ env vars፣ CLI commands፣ hook names እና file paths በcodebase ውስጥ መኖራቸውን። በ`--strict` ከባድ ጌት፤ ያለ flag ደግሞ ለስላሳ ውድቀት። | አዎ (በCI ውስጥ በ`--strict`) |
| `check:cli-i18n`               | የCLI command ሕብረቁምፊዎች በሁሉም i18n locale files ውስጥ መኖራቸውን                                                                                   | አዎ                       |
| `check:openapi-coverage`       | OpenAPI spec ቢያንስ በራቼት የተወሰነውን ዝቅተኛ የእውነተኛ routes መጠን መሸፈኑን                                                                               | አዎ                       |
| `check:openapi-security-tiers` | በ`openapi.yaml` ውስጥ ያሉ የsecurity tier annotations ከ`routeGuard.ts` classifications ጋር ወጥነት እንዳላቸው                                         | **ምክር ብቻ**               |
| `check:openapi-routes`         | በ`openapi.yaml` ውስጥ ያለ እያንዳንዱ path ወደ እውነተኛ `route.ts` መጠቆሙን (የምናባዊ ፈጠራ መከላከያ)                                                            | አዎ                       |
| `check:docs-symbols`           | በ`docs/**/*.md` ውስጥ ያለ እያንዳንዱ `/api/...` ማጣቀሻ ወደ እውነተኛ `route.ts` መጠቆሙን (የምናባዊ ፈጠራ መከላከያ)                                                 | አዎ                       |
| `i18n translation drift`       | በi18n locale files ውስጥ ያልተተረጎሙ keys — ማስጠንቀቂያ ብቻ                                                                                          | **ምክር ብቻ**               |

### ሥራ፦ `i18n-ui-coverage`

| ስክሪፕት                             | የሚያረጋግጠው                                                                                                                                                     | አጋጅ        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| `check-ui-keys-coverage` (inline) | የUI i18n key ሽፋን ≥ 65% መሆኑን                                                                                                                                  | አዎ         |
| `check-ui-value-drift` (inline)   | እንደገና የተጻፈ የእንግሊዝኛ **value** ጊዜ ያለፈበት ትርጉም እንዳያስቀር                                                                                                           | አዎ         |
| `check-new-key-coverage` (inline) | **አዲስ** የእንግሊዝኛ key በእያንዳንዱ locale ውስጥ መተርጎሙን — `__MISSING__:` marker ውድቅ ይደረጋል                                                                              | አዎ         |
| `check-translation-ratio`         | የእውነተኛ ትርጉም ሬሾ በእያንዳንዱ locale (ከእንግሊዝኛ ጋር ተመሳሳይ / placeholder / ከallowlist ውጪ የጎደሉ leaves) ከ`config/quality/i18n-translation-baseline.json` + ትርፍ መብለጥ የለበትም | **ምክር ብቻ** |

`fetch-depth: 0` ያስፈልገዋል — value-drift gate `en.json`ን ከmerge base ጋር ያነጻጽራል።

#### `check-ui-value-drift` — ጊዜ ያለፈበት ትርጉም ጌት

ሌሎቹ ጌቶች በመዋቅራዊ ሁኔታ ሊያዩት የማይችሉትን አንድ የi18n መመለስ ይይዛል፦ አንድ የእንግሊዝኛ value
እንደገና ሲጻፍ፣ ከ_ቀደመው_ እንግሊዝኛ የተወሰዱ ትርጉሞች ሳይቀየሩ ይቀራሉ፤ በዚህም
እንግሊዝኛ ያልሆኑ ተጠቃሚዎች በሙሉ እርግጠኝነት የተጻፈ ነገር ግን አሁን የተሳሳተ ጽሑፍ ማንበባቸውን ይቀጥላሉ።

ይህ በእውነት ለተጠቃሚዎች ተለቋል። የAntigravity
login helper ሲጨመር (#5203) `oauthModal.googleOAuthWarning` እንደገና ተጻፈ፤ **ከ43 locales 39ኙ** ኦፕሬተሮችን "ሙሉውን
URL ገልብጠው ከታች እንዲለጥፉት" የሚነግር ጽሑፍ እንዳለ ቀረ — ለዚያ provider መጠናቀቅ የማይችል flow። ይህም
እስከ #8463 ድረስ ሳይስተዋል ቀረ፣ ምክንያቱም፦

- `sync-ui-keys` የሚሞላው **የሌሉ** keysን ብቻ ነው፤ **ጊዜ ያለፈባቸውን** ፈጽሞ አይሞላም፤
- `check-ui-keys-coverage` የkey _መኖርን_ ይቆጥራል፣ ስለዚህ ጊዜ ያለፈበት ትርጉም እንደተሸፈነ ነጥብ ያገኛል፤
- `check-translation-drift` የ`docs/i18n/<locale>/**.md` የሰነድ መስተዋቶችን ይከታተላል —
  `src/i18n/messages/*.json`ን ፈጽሞ አያነብም። ከ2026-09 ዳግም-ማመሳሰል ጀምሮ በ`docs-sync-strict` ሥራ ውስጥ አጋጅ ነው፦ ዋና ሰነድ ያርትዑ → `npm run i18n:run -- --files=<doc>` (በክፍል ደረጃ፣ ወጪው አነስተኛ)።

**ልዩነትን የሚያገናዝብ እንጂ በመነሻ መስመር የተደገፈ አይደለም።** በውህደት መነሻው ላይ ያለውን `en.json` ከሥራ ማውጫው ጋር ያነጻጽራል፤
የእንግሊዝኛ እሴቱ ለተቀየረ እያንዳንዱ ቁልፍ፣ ያልተነካ ትርጉም ይዞ የቀረ ማንኛውም ቋንቋ
ጊዜው ያለፈበት ነው። ይህ ሆን ተብሎ **ቀድሞ የነበረውን ዕዳ እንዳለ ያቆያል** — ልዩነት
ለረጅም ጊዜ የቆየ ትርጉም ከየትኛው የቀድሞ እንግሊዝኛ እንደመጣ ሊያሳይ ስለማይችል፣ መግቢያ መቆጣጠሪያው
የአሁኑ ለውጥ የሚነካውን ብቻ ይገመግማል። አማራጩ (ለእያንዳንዱ ቁልፍ የሃሽ መነሻ መስመር) ወደ
~600 KB የሚሆን የመነጨ ፋይል ያስፈልገዋል፤ ይህም ካለው ትልቁ መነሻ መስመር 3× ሲሆን በእያንዳንዱ i18n PR ላይ ይለዋወጣል።

ለማሟላት ሁለት መንገዶች አሉ፦

1. የተነኩትን ትርጉሞች ያዘምኑ፣ ወይም
2. ወደ `__MISSING__:<new english>` ያቀናብሯቸው — ከዚያ runtime የተስተካከለውን እንግሊዝኛ
   (`src/i18n/request.ts::deepMergeFallback`, #7258) ያቀርባል፣ ቁልፉም ለትርጉም ወረፋ ይይዛል።

የሕብረቁምፊው **ትርጉም** ከተቀየረ፣ **ቁልፉን እንደገና መሰየምን** ይምረጡ፦ አዲስ ቁልፍ
ጊዜው ያለፈበትን ትርጉም ሊወርስ አይችልም። #8463 የተጠቀመው ንድፍ ይህ ነው።

```bash
npm run i18n:check-value-drift          # ጥብቅ (CI የሚያስኬደው)
npm run i18n:check-value-drift:warn     # ሪፖርት ብቻ
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

የመነሻው ካታሎግ ሊነበብ በማይችልበት ጊዜ (የመነሻው ref የሌለው shallow
clone) `check-openapi-breaking`ን በመምሰል፣ ከ`SKIP reason=base-unresolved` ጋር 0 ይወጣል።

### ሥራ፦ `i18n`

ሙሉ የi18n ማረጋገጫ ማትሪክስ (ለእያንዳንዱ ቋንቋ አንድ ሥራ)። ሥራው በሙሉ አማካሪ ነው።

| ስክሪፕት                           | የሚያረጋግጠው          | አጋጅ                                             |
| ------------------------------- | ----------------- | ----------------------------------------------- |
| `validate_translation.py quick` | በየቋንቋው የትርጉም ሙሉነት | **አማካሪ** (በሙሉ ሥራው ላይ `continue-on-error: true`) |

### ሥራ፦ `pr-test-policy`

በpull request ላይ ብቻ ይሰራል።

| ስክሪፕት                  | የሚያረጋግጠው                                                                                                            | አጋጅ |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------- | --- |
| `check:pr-test-policy` | በ`src/`፣ `open-sse/`፣ `electron/` ወይም `bin/` ውስጥ የproduction ኮድን የሚቀይሩ PRዎች ፈተናዎችን ማካተት ወይም ማዘመን አለባቸው (ጥብቅ ደንብ #8) | አዎ  |
| `check:test-masking`   | የተቀየሩ የፈተና ፋይሎች የተጣራ የassert ብዛትን እንደማይቀንሱ ወይም የ`assert.ok(true)` ሁልጊዜ-እውነት መግለጫዎችን እንደማይጨምሩ                        | አዎ  |
| `check:pr-evidence`    | የPR ይዘት ለውጡን የሚደግፍ የፈተና/VPS ማስረጃ እንደሚጠቅስ (የPR ጽሑፍን በgrep በመፈለግ ጥብቅ ደንብ #18ን በራስ-ሰር ያስፈጽማል — ደካማ ነው፣ Backlogን ይመልከቱ) | አዎ  |

### ሥራ፦ `test-vitest`

ከ`build` በኋላ ይሰራል። ካልተሳካ ውህደትን ያግዳል።

| ስብስብ             | የሚያረጋግጠው                                                  | አጋጅ                                                                                |
| ---------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `test:vitest`    | MCP server (110 መሣሪያዎች)፣ autoCombo፣ cache — vitest runner | አዎ                                                                                 |
| `test:vitest:ui` | የUI component ፈተናዎች — vitest runner                       | **አጋጅ** — ቀድሞ የነበሩ ውድቀቶች በ`vitest.config.ts` ውስጥ በግልጽ ተገልለዋል፤ አዲስ ውድቀቶች ሥራውን ያሳድቃሉ |

### የሌሊት workflows (የጊዜ ሰሌዳ ያላቸው፣ አማካሪ)

እነዚህ በcron የጊዜ ሰሌዳ (እና `workflow_dispatch`) ይሰራሉ፣ በPRዎች ላይ ፈጽሞ አይሰሩም። ሁሉም አማካሪ ናቸው።

| Workflow               | የሚያረጋግጠው                                                                                                                              | አጋጅ      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `nightly-property`     | የfast-check property ፈተናዎች በዘፈቀደ seed + ከፍተኛ የአሂድ ብዛት                                                                                 | **አማካሪ** |
| `nightly-resilience`   | የheap ዕድገት መግቢያ መቆጣጠሪያ፣ chaos fault-injection፣ k6 load/soak                                                                           | **አማካሪ** |
| `nightly-llm-security` | promptfoo injection guard (block mode) + garak probes (የአቅራቢ secret ከሌለ ይዘለላሉ)                                                        | **አማካሪ** |
| `nightly-schemathesis` | `docs/openapi.yaml`ን በመጠቀም በቀጥታ ባለ OmniRoute ላይ የOpenAPI contract fuzzing (schemathesis) — የspec ጥሰቶችን/ያልተያዙ 500ዎችን ያጋልጣል (ደረጃ 8 B.4) | **አማካሪ** |
| `nightly-mutation`     | በፈጣኑ unit lane ላይ የStryker mutation-testing ውጤት — የተረፉ mutants ደካማ assertsን ያጋልጣሉ                                                     | **አማካሪ** |
| `nightly-compat`       | በሚደገፉት `engines.node` ክልሎች ሁሉ የNode engine ተኳኋኝነት ማትሪክስ                                                                               | **አማካሪ** |

የአፈጻጸም መነሻ መስመሮች (heap፣ TTFB፣ የbuild ጊዜ) ይመዘገባሉ እንጂ እንደ መግቢያ መቆጣጠሪያ አይውሉም፦ [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`)ን ይመልከቱ።

---

## የፍጥነት ምዕራፍ (2026-08-30 → v4.0 LTS)፦ እያንዳንዱ የመነሻ መስመር በ20% ላላ ተደርጓል

የባለቤቱ ውሳኔ (2026-08-30)፦ እስከ v4.0 ሞጁላራይዜሽን ድረስ የማድረስ ፍጥነት የቴክኒክ ዕዳውን
ወሰን ከመጠበቅ የበለጠ አስፈላጊ ነው። እያንዳንዱ **ቁጥራዊ** የራቸት መነሻ መስመር ኦዲት ሊደረግበት
በሚችል አንድ ዙር በ20% ላላ ተደርጓል፣ ምዕራፉም በ`config/quality/quality-baseline.json` ውስጥ ታውጇል፦

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| የተቀየረው                                                                                                                                                                               | ቦታ                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — ዝቅተኛ መሆኑ የተሻለ የሆነባቸው ቆጠራዎች ×1.2፣ ከፍተኛ መሆኑ የተሻለ የሆነባቸው መቶኛዎች ÷1.2 (የሽፋን ዝቅተኛ ገደብ 60 እንዳለ ቀርቷል፣ `eslintErrors` 0 ሆኖ ይቆያል፣ `eslintWarnings` 0 → ከታሰረው የማፈኛ ቆጠራ 20%) | `quality-baseline.json` (የ`_relax_velocity_2026_08_30` ማስታወሻ እያንዳንዱን ከቀድሞ → ወደ ኋላ ያለ ለውጥ ይዘረዝራል)       |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                     | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`፣ `testCap`፣ የእያንዳንዱ `frozen[*]` / `testFrozen[*]` የመስመር ገደብ ×1.2                                                                                                               | `file-size-baseline.json`                                                                              |
| የእያንዳንዱ ፋይል / የእያንዳንዱ TS ኮድ ቆጠራዎች ×1.2                                                                                                                                               | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                  | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `_policy.requireTighten === false` በሚሆንበት ጊዜ `--require-tighten` የምክር ብቻ ይሆናል                                                                                                        | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| የማታ `bank-ratchet-shrinks` ይቆማል (የተለካውን መቀነስ በመመዝገብ ተጨማሪውን ክፍተት ያስወግደው ነበር)                                                                                                          | `.github/workflows/nightly-release-green.yml`                                                          |

የተፈቀዱ ዝርዝሮች (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) በጀቶች **አይደሉም** እና አልተነኩም። የማለፍ/የመውደቅ የፖሊሲ በሮች (ሚስጥሮች፣ የSQL ደንቦች፣
የሰነዶች/አካባቢ ውል፣ የi18n እኩልነት፣ የዩኒት ሙከራዎች) አልተቀየሩም — ያልተሳካ ሙከራ አሁንም ያልተሳካ ሙከራ ነው።

**መሣሪያዎች**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — አንድ ጊዜ ብቻ
  የሚደረግ ማላላት (`scripts/quality/relax-baselines.mjs`)፤ በተመሳሳይ ማስታወሻ ሁለት ጊዜ መሥራትን
  ይከለክላል።
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  እያንዳንዱን ቁጥራዊ በር CI በሚለካበት መንገድ ይለካል፣ ለእያንዳንዱ በር የቀረውን ተጨማሪ ክፍተትም
  ያትማል (`scripts/quality/baseline-headroom.mjs`)። የማታ `baseline-headroom` ሥራ ሰንጠረዡን
  በዎርክፍሎው አሂድ ማጠቃለያ ውስጥ ያትማል፣ የJSON/Markdown ሪፖርቱንም
  ለ90 ቀናት እንዲቆይ `baseline-headroom-<run_id>` በሚል ይሰቅላል። የማስጠንቀቂያ እና ወሳኝ ረድፎች
  ከገደባቸው በ10% ውስጥ ያሉ ወይም ገደባቸውን አስቀድመው ያለፉ በሮችን ይለያሉ። በጀቶች እየተጠቀሙ
  ስለመሆናቸው እንደ ቅድመ ማስጠንቀቂያ እነዚህን ሪፖርቶች ይገምግሙ፤ ችግሩ ያለበትን በር
  የ`_rebaseline_*` ማስታወሻዎች ይመርምሩ። ሥራው ከእንግዲህ ቋሚ ጉዳይ አይፈጥርም ወይም አያዘምንም፤
  #12149 የቀድሞውን የሪፖርት ታሪክ ይጠብቃል።

**የአዲስ-ኮድ ሁነታ (Clean-as-You-Code) — ከ2026-08-30 ጀምሮ፣ ለPR ፈጣን መንገድ ብቻ**

በ`pull_request` ክስተቶች ላይ `quality.yml` `--base-ref <PR base SHA>`ን ለ`check:file-size`፣
`check:complexity-ratchets` እና `check:dead-code` ያስተላልፋል። ለ`check:complexity-ratchets` እና
`check:dead-code` በሩ HEADን ከmerge-base ጋር **PRው በነካቸው ፋይሎች ብቻ በመገደብ**
ያነጻጽራል (`scripts/check/newCodeMode.mjs`፦ merge-baseው በጊዜያዊ
`git worktree` ውስጥ ይዘጋጃል፣ ESLint/knip በዚያና በHEAD ላይ ይሠራሉ፣ የእያንዳንዱ ፋይል ቆጠራዎችም ይነጻጸራሉ)፦

- **አጋጅ** — PRው በቀየራቸው ፋይሎች ውስጥ የሳይክሎማቲክ/ኮግኒቲቭ ውስብስብነት ጥሰቶችን ወይም ጥቅም ላይ ያልዋሉ exports ጨምሯል
  (በሎጉ ውስጥ `complexityNewCode=`፣ `cognitiveComplexityNewCode=`፣ `deadExportsNewCode=`);
- **የምክር** — አጠቃላይ ድምሩ ከታሰረው መነሻ መስመር አንጻር። በውርስ የመጣ መንሸራተት ንጹሕ PRን በፍጹም
  አያስወድቅም፤ መንሸራተቱ በሪሊዝ ማስታረቂያ ጊዜ እንደገና ይታሰራል፣ በተጨማሪ ክፍተት ሥራውም ይከታተላል።

`check:file-size` የመሠረት ማጣቀሻውን በራሱ ደንቦች ይጠቀማል (`scripts/check/check-file-size.mjs`, #8522)፦
በዛፉ ውስጥ ያለውን እያንዳንዱን የምንጭ እና የሙከራ ፋይል ይፈትሻል፣ በPR መሠረት ላይ ያለውን የእያንዳንዱን ፋይል የመስመር ቆጠራ
በ`git show` ያነባል፣ እና ፋይሉ ከመነሻ መስመሩ ጣሪያ
(`frozen` / `testFrozen`፣ ወይም ከመነሻ መስመሩ ውጭ ላለ ፋይል `cap` / `testCap`) እና ከመሠረት መጠኑ
መካከል ከሚበልጠው በላይ ሲያድግ ብቻ ያስወድቀዋል። በመሠረቱ ላይ ቀድሞውኑ የተንሸራተተ ፋይል ስለዚህ ንጹሕ PRን በፍጹም
አያስወድቅም።

`check:boundary:ratchet` ተመሳሳይ ሕግን በነጠላ ቁጥሩ ላይ ይተገብራል
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): በPR ክስተቶች ላይ ሁለቱም
የ`quality.yml` ፈጣን ማጣሪያዎች እና የ`ci.yml` lint job የPR base SHAን ያስተላልፋሉ፤ base commit
ከ`git archive` export ይለካል፣ እና PRው የሚወድቀው የ`open-sse → src` edge
ብዛቱ ከ`metrics.boundaryOpenSseToSrc` እና በbaseው ላይ ካለው ብዛት መካከል ከሚበልጠው ሲያልፍ ብቻ ነው። ከጣሪያው
በላይ ያለ base drift ሪፖርት ይደረጋል (`base drift herdado`)፣ ነገር ግን ምንም ጥፋት የሌለበትን PR ፈጽሞ አያወድቅም፤ push → main
ፍጹም ጣሪያውን እንደያዘ ይቀጥላል፣ እና ሊፈታ የማይችል base SHA ከማስጠንቀቂያ ጋር ወደዚያው ይመለሳል።

የ`workflow_dispatch` ሩጫዎች፣ release-green sweep እና የምሽት headroom job የPR base
የላቸውም፣ ስለዚህ ፍጹም (global) ንጽጽሩን እንደያዙ ይቀጥላሉ። Coverage፣ duplication እና type-coverage ለአሁኑ global
ሆነው ይቆያሉ (መሣሪያዎቻቸው per-file diffን በአነስተኛ ወጪ አያመነጩም) — ለተመሳሳይ አያያዝ እጩዎች ናቸው።

**ደረጃውን በv4.0 መዝጋት (LTS = ከቀድሞው የጠበቀ፣ "ወደ መደበኛው መመለስ" አይደለም)**

1. በንጹሁ የ`release/v4.0.0` tip ላይ፦ ለመዝገብ `npm run quality:headroom --json`፣ ከዚያ
   `npm run quality:ratchet -- --update`፣ `check:file-size --update`፣
   `check:complexity-ratchets --update`፣ `check:dead-code --update`፣ የእያንዳንዱ typecheck gate
   `--update` — እያንዳንዱ baseline ወደተለካው እሴት ይወርዳል።
2. `_policy`ን ከ`quality-baseline.json` ይሰርዙ (`--require-tighten`ን እና የምሽት
   bankingን እንደገና ያስነሳል)፣ በ`check-openapi-coverage.mjs` ውስጥ `THRESHOLD = 36`ን (ወይም ከዚያ በላይ) ይመልሱ።
3. modularizationው ውጤት ባስገኘባቸው ቦታዎች ከተለካው በላይ ያጥብቁ፦ የfile-size `cap`ን ወደ 1000
   (ወይም 800) ይመልሱ፣ coverage floorsን +5 ያድርጉ፣ ለmodularized packages dead exportsን 0 ያድርጉ።

## የRatchet መነሻ መስመር (`quality-baseline.json`)

የratchet ሞተሩ (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json`ን
በማንበብ አዲስ ከተሰበሰበው `quality-metrics.json` ጋር ያነጻጽረዋል። ከየራሱ epsilon
በላይ የሚያሽቆለቁል ማንኛውም መለኪያ buildን እንዲወድቅ ያደርጋል።

በአሁኑ ጊዜ ክትትል የሚደረግባቸው መለኪያዎች፦

| መለኪያ                  | አቅጣጫ   | ትርጉም                             |
| --------------------- | ------ | -------------------------------- |
| `eslintWarnings`      | `down` | የESLint ማስጠንቀቂያዎች ብዛት መጨመር የለበትም |
| `coverage.statements` | `up`   | የstatement coverage መቀነስ የለበትም   |
| `coverage.lines`      | `up`   | የline coverage መቀነስ የለበትም        |
| `coverage.functions`  | `up`   | የfunction coverage መቀነስ የለበትም    |
| `coverage.branches`   | `up`   | የbranch coverage መቀነስ የለበትም      |

እውነተኛ ማሻሻያ ከተደረገ በኋላ መነሻ መስመሩን ለማዘመን፦

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

የ`--update` flag አሁን የተለኩትን እሴቶች ወደ `quality-baseline.json` ይጽፋል።
ይህን ፋይል መለኪያውን ካሻሻለው ለውጥ ጋር አብረው commit ያድርጉ። መነሻ መስመሩን
ሳያዘምን መለኪያን የሚያሻሽል PR በ`--require-tighten` ይያዛል (ደረጃ 6A.5፣
ትግበራው በመጠባበቅ ላይ ነው)።

### የCodeQL ratchet፦ የማደሻ ድግግሞሽ እና በእጅ ማስጀመር

`check:codeql-ratchet` **በጊዜ ሰሌዳ የሚታደሰውን የrepo ሁኔታ እንጂ በእያንዳንዱ PR የሚታደሰውን አያነብም።**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup`
`state: configured`፣ `schedule: weekly` የሚል ውጤት ይሰጣል፦ ይህ የGitHub default-setup scan እንጂ
በእያንዳንዱ push የሚካሄድ analysis አይደለም። ውጤቱም፦ alertsን የሚያስተካክል PR merge ከተደረገ በኋላ፣
ቀጣዩ በጊዜ ሰሌዳ የተያዘ scan እስኪካሄድ ድረስ ratchet የቆየውን ከፍተኛ ብዛት ማንበቡን ይቀጥላል፤
ስለዚህ scanው እስኪያዘምን ድረስ በሁሉም ክፍት PR ላይ፣ የማስተካከያው PR ተከታይ ለውጦችንም ጨምሮ፣
ወደኋላ መመለስ እንዳለ ያሳያል።

**በእጅ ማደስ**፦ `gh workflow run codeql.yml --ref release/vX.Y.Z` analysisን እንደገና
ያስኬድና alertsን በደቂቃዎች ውስጥ እንደገና ያትማል። መጀመሪያ `.github/workflows/codeql.yml`ን
ያንብቡ፤ ራስጌው `workflow_dispatch`-ብቻ የሆነው **ከGitHub "default setup" ጋር ስለሚጋጭ**
መሆኑን ያብራራል (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`)። የ`push`/`pull_request`/
`schedule` triggersን መልሶ ማስጀመር በመጀመሪያ **የowner እርምጃ** ይፈልጋል፦ Settings → Code security →
CodeQL: Default → Advanced። ያንን ለውጥ ሳያደርጉ `schedule:` trigger አይጨምሩ፤
ውድቀት የሚያጋጥማቸውን runs ብቻ ይፈጥራል።

**ብዛቱ ከቀነሰ በኋላ መነሻ መስመሩን ያጥብቁ**፦ `node scripts/check/check-codeql-ratchet.mjs
--update` አዲሱን የተለካ ብዛት ወደ `quality-baseline.json` →
`metrics.codeqlAlerts.value` ይጽፋል፤ በዚህም ratchet እንደገና ወደ ቀድሞው ከፍተኛ ገደብ
የሚደረግን ወደኋላ መመለስ በዝምታ እንዳይፈቅድ ያደርጋል። የተሰራ ምሳሌ (2026-09-02/03)፦ PR #12502
7 እውነተኛ alertsን አስተካክሏል (13 → 6 የተለኩ ክፍት alerts)፤ PR #12530 ከዚህ ጋር እንዲዛመድ
የቀዘቀዘውን መነሻ መስመር ከ11 → 6 አጥብቋል፤ ቀሪዎቹ 6 alerts ከዚያ በኋላ ለእያንዳንዱ alert
ምክንያት በመመዝገብ እስከ 0 ክፍት alerts ድረስ dismiss ተደርገዋል።

**Dismissals የoperator ውሳኔ ናቸው (ጥብቅ ደንብ #14)**፦ በdismissal አስተያየቱ ውስጥ ቴክኒካዊ
ምክንያቱን ሳይመዘግቡ የCodeQL alertን በፍጹም dismiss አያድርጉ፦ ለupstream-protocol መስፈርት `won't fix`፣
ለtest fixture `used in tests`፣ CodeQL ማየት ለማይችለው sanitizer `false positive`
(ቀዳሚ ምሳሌ፦ `docs/security/ERROR_SANITIZATION.md`)።

---

## የሙከራ ድጋሚ ማስኬጃ ፖሊሲ (WS5.4, v3.8.49)

ድጋሚ ማስኬድ ለእያንዳንዱ runner የተለየ እንጂ አጠቃላይ የሚሸፍን አይደለም — አጠቃላይ ድጋሚ ማስኬድ እውነተኛ የኋሊት መመለሶችን
ወደማይታዩ አልፎ አልፎ የሚከሰቱ ውድቀቶች ይቀይራቸዋል፦

| Runner           | ፖሊሲ                                                                                                        | ምክንያቱ                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | በCI ውስጥ ብቻ `retries: 1`፣ ከ`trace: on-first-retry` ጋር                                                       | የአሳሽ/አውታረ መረብ ጊዜ በእውነት የማይወሰን ነው፤ አንድ ድጋሚ ማስኬድ ከtrace ጋር አልፎ አልፎ የሚከሰት ውድቀትን ሊመረመር ወደሚችል artifact ይቀይረዋል |
| Vitest           | አጠቃላይ ድጋሚ ማስኬድ የለም። አልፎ አልፎ እንደሚወድቅ የተረጋገጠ ሙከራ ግልጽ የሆነ ለሙከራው-ብቻ ድጋሚ ማስኬጃ ያገኛል (በdiff ውስጥ የሚታይ፣ በPR የሚገመገም) | የለይቶ ማቆያ ዝርዝሩን በrepo ውስጥ ያቆየዋል፣ በፍጹም ድብቅ አይሆንም                                                           |
| node:test (unit) | በፍጹም ድጋሚ ማስኬድ የለም                                                                                          | አልፎ አልፎ የሚወድቅ unit test በሙከራው ውስጥ ያለ bug ነው — ያስተካክሉት፣ እንደገና በዕድል አያስኬዱት                                 |

የአልፎ አልፎ ውድቀት telemetry ከተተገበረ በኋላ የሚፈለጉ SLOs (WS5.2/5.3)፦ ለእያንዳንዱ ሙከራ <1% የአልፎ አልፎ ውድቀት መጠን
("አሁን አስተካክል" ገደብ)፣ ለእያንዳንዱ pipeline ≥95% የማለፍ መጠን። የኢንዱስትሪ ማጣቀሻ እሴቶች —
በራሳችን መለኪያዎች መሠረት እንደገና ይስተካከሉ።

## በልቀት ደረጃ የRatchet መዛባት (WS5.5, v3.8.49)

አንድ ratchet (የፋይል መጠን፣ ውስብስብነት፣ eslint ማስጠንቀቂያዎች) በንጹሕ የልቀት
ጫፍ ላይ ወደኋላ ሲመለስ — ማለትም የmergeዎች **ጥምረት** ወደኋላ እንዲመለስ አድርጎታል፣ እና የትኛውም ነጠላ PR በራሱ branch ላይ
የኋሊት መመለሱን አያስከስተውም — ማስተካከያው የ**release captain ሲሆን፣ አንድ ጊዜ፣ በ
release branch ላይ** መደረግ አለበት፦ extraction/refactorን ይምረጡ፤ rebaseline ማድረግ ያለበት በሰነድ የተመዘገበ
የማስረጃ ግቤት ካለ ብቻ ነው። የጥምረት መዛባትን በአበርካች PR ላይ በፍጹም አይጫኑ፣ እና
ለእያንዳንዱ PR rebaseline በፍጹም አያድርጉ (ያ እውነተኛ የኋሊት መመለሶችን ይደብቃል)። መጀመሪያ ለይተው ይወቁ፦ PRዎ እንዳስከተለው ከመገመትዎ በፊት በprobe worktree ውስጥ
በንጹሑ ጫፍ ላይ ቀዩን ውጤት እንደገና ያስከስቱ።

## የRatchet መቀነሶችን ማከማቸት — ወደታች ያለው አቅጣጫ (#8584)

ratchet በግማሽ ብቻ አውቶማቲክ ነው፣ እሱም የተሳሳተው ግማሽ ነው። capን **ማሳደግ**
አሥር ሰከንድ የሚወስድ በእጅ የሚደረግ JSON አርትዖት ሲሆን ቀይ PRን ለመክፈት ፈጣኑ መንገድ ነው።
አንዱን **መቀነስ** ግን አንድ ሰው `--update`ን አስኪዶ ውጤቱን commit እንዲያደርግ ይጠይቃል — እና
የ`bank-ratchet-shrinks` job እስኪተገበር ድረስ ይህን የሚያስኬድ workflow አልነበረም። የተለካው ውጤት
(2026-07-25)፦ 18 frozen ፋይሎች አስቀድመው ከ800-line የአዲስ ፋይል cap ጋር እኩል ወይም ከዚያ በታች ሲሆኑ፣ ከሁሉ የከፋው
በ132× (`src/shared/validation/schemas.ts`፣ 19 መስመሮች 2,523 capን የተሸከሙ) ነበር፤
የውስብስብነት ጣሪያው በ~37 rebaseline ማስታወሻዎች ውስጥ `1794 → 2169` ከፍ አለ፣ በትክክል አንድ
መቀነስ (−1) ብቻ ነበረው፤ እና "በቀጣዩ ዙር በ`--update` አጥብቅ" 31 ጊዜ ተጽፎ አንድ ጊዜ
ብቻ ተከበረ። ያስገኘው ኮድ ከጠፋ በኋላም የሚቆይ cap እያንዳንዱን የተጠናቀቀ decomposition በጸጥታ
ቀጥሎ ፋይሉን ለሚያርትዕ ሰው የዕድገት ፈቃድ ያደርገዋል።

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** ያንን ዑደት ይዘጋል፦

|          |                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------- |
| የሚሰራበት   | `schedule` (3×/day) + `workflow_dispatch` — ሆን ተብሎ **`push` አይደለም**                            |
| የሚለካው    | ከፍተኛውን `release/vX.Y.Z`፣ ከ`release-green` ጋር ተመሳሳይ resolution + injection guard                |
| የሚጽፈው    | `check:file-size --update` እና `check:complexity-ratchets --update` (ሁለቱም በአወቃቀራቸው መቀነስ-ብቻ ናቸው) |
| የሚያረጋግጠው | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                       |
| የሚልከው    | አንድ ሁልጊዜ-ወቅታዊ PR ወደ release branch — በግድ የሚዘምን፣ በፍጹም spam የማይደረግ                               |

ማከማቸቱ ለእያንዳንዱ push ከመሆን ይልቅ በቡድን ይከናወናል፤ ምክንያቱም የlatency መስፈርት የለውም (በ8h ውስጥ
የተከማቸ መቀነስ በቂ ነው)፣ ለእያንዳንዱ merge ማስኬድ ግን በmerge ዘመቻዎች ወቅት PR branchን ደጋግሞ
እንደገና ይገነባ እና በእያንዳንዱ ጊዜ ለሙሉ ESLint ማለፊያ ወጪ ይከፍላል። ማግኘቱ በ
push (`release-green`) ላይ ይቆያል፤ በቡድን የሚከናወነው ማከማቸቱ ብቻ ነው።

### የደህንነት አረጋጋጭ

jobው ያለ ክትትል ወደ baselines ይጽፋል፣ ስለዚህ `verify-ratchet-bank.mjs` ይህን
ተቀባይነት ያለው ያደርገዋል። ከ`--update` በኋላ ያለውን tree ከ`HEAD` ጋር diff ያደርጋል፣ እና እያንዳንዱ ለውጥ
ከሚከተሉት አንዱ ካልሆነ **ምንም commit ከመኖሩ በፊት jobውን ያቋርጣል** — ምንም PR አይከፍትም፦

- የ`frozen` / `testFrozen` ቁጥራዊ ግቤት **የተቀነሰ** ወይም **የተወገደ**
- `complexity-baseline.json` → `count` **የተቀነሰ**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **የተቀነሰ**

ሌላ ማንኛውም ነገር ያወድቃል፦ ቁጥር ማሳደግ፣ ግቤት መጨመር፣ `cap`/`testCap`ን መቀየር፣ ወይም
የ`_rebaseline_*` ማስታወሻን መሰረዝ/እንደገና መጻፍ (እነዚያ ማስታወሻዎች እያንዳንዱ ጣሪያ ለምን
እንደሚኖር የሚገልጹ የኦዲት ዱካዎች ሲሆኑ ከፋይል ግቤቶቹ ጋር በተመሳሳዩ `frozen` object ውስጥ ይቀመጣሉ)።
capን ማሳደግ የሚችል bot ከአሁኑ ሁኔታ በእጅጉ የከፋ ይሆናል። የኋሊት መመለስ
መከላከያ፦ `tests/unit/verify-ratchet-bank.test.ts`።

jobው ወደ `release/*` በፍጹም push አያደርግም — PRን የሚያዋህደው ሰው ነው፣ ስለዚህ የተሳሳተ መለኪያ
ሳይገመገም ሊገባ አይችልም።

## የAllowlist ፖሊሲ

ቀድሞ በነበሩ ጥሰቶች ምክንያት ሊወድቅ የማይችል እያንዳንዱ gate የተወሰነ allowlist
ይጠቀማል (ለምሳሌ፣ `KNOWN_STALE_DOC_REFS`፣ `KNOWN_MISSING`፣ `KNOWN_RAW_SQL`)። ፖሊሲው፦

**ዋናውን መንስኤ ያስተካክሉ፤ allowlistን ጥሰቱ ቀድሞ የነበረ እና
በዚያው PR ውስጥ ሊስተካከል የማይችል ከሆነ ብቻ ይጠቀሙ።**

ወደ allowlist ግቤት ሲጨምሩ፦

1. ምክንያቱን የሚያብራራ አስተያየት ያካትቱ።
2. የክትትል issueውን ይጥቀሱ (ለምሳሌ፣ `// #3498 — የደረጃ 2 ባህሪ፣ እስካሁን አልተተገበረም`)።
3. ጥሰቱን በሚያስተካክለው PR ውስጥ ግቤቱንም ያስወግዱ — ንቁ ጥሰትን ከእንግዲህ
   የማይገታ ያረጀ ግቤት በራሱ ጉድለት ነው (6A.3 stale-enforcement ከተተገበረ በኋላ
   ባለቤት በሌለው allowlist ግቤት ምክንያት gateውን ያሳክታል)።

ሙከራዎችን በፍጥነት ለማሳለፍ የallowlist ግቤቶችን **አይጨምሩ**። እያደገ ያለ allowlist ያለው
አረንጓዴ gate ስለ ጥራት የተሳሳተ እምነት ይፈጥራል።

### በእርስዎ PR ላይ gate ሲወድቅ

1. **የgateውን ውጤት በጥንቃቄ ያንብቡ** — ደንቡን የጣሰው የትኛው ፋይል ወይም symbol እንደሆነ
   በትክክል ይነግርዎታል።
2. **ጥሰቱን ያስተካክሉ** — አብዛኞቹ gates ኮዱ ትክክል እንደሆነ
   የሚያልፉ ተወስነው የሚሠሩ የfilesystem ፍተሻዎች ናቸው።
3. **ጥሰቱ ቀድሞ የነበረ ከሆነ** (ማለትም፣ እርስዎ ያላስገቡት ነገር ግን gateው አሁን
   የሚሸፍነው ከሆነ)፦ የምክንያት አስተያየት እና የክትትል issue ያለው የallowlist ግቤት ያክሉ።
4. **gateው ratchet ከሆነ** (coverage፣ ESLint warnings፣ duplication፣ complexity)፦
   ለውጥዎ መለኪያውን አባብሶታል። መሠረታዊውን ችግር ያስተካክሉ፣ ወይም (አልፎ አልፎ) ለውጡ
   ሆን ተብሎ የተደረገ እና የመለኪያው መቀነስ ተቀባይነት ያለው ከሆነ
   `npm run quality:ratchet -- --update`ን ያስኪዱ — ነገር ግን ምክንያቱን በPR መግለጫው ውስጥ ይመዝግቡ።
5. **የምክር gates** (`continue-on-error: true`) ለመረጃ ብቻ ናቸው — mergeን አያግዱም፣
   ነገር ግን በCI ማጠቃለያው ውስጥ ይታያሉ። ሆኖም ያስተካክሏቸው።

---

## አዲስ Gate ማከል

1. `scripts/check/check-<name>.mjs`ን (ወይም `.ts`) ይፍጠሩ። የፖሊሲ gates በ0/1 ይወጣሉ።
   Ratchet-style gates `collect-metrics.mjs`ን በመጠቀም መለኪያን ወደ `quality-metrics.json` ያስገባሉ።
2. `"check:<name>": "node scripts/check/check-<name>.mjs"`ን ወደ `package.json` ያክሉ።
3. በተገቢው job ስር በ`.github/workflows/ci.yml` ውስጥ ያገናኙት
   (policy → `lint` ወይም `docs-sync-strict`፤ ratchet → `quality-gate`)።
4. allowlist ካለው፣ ያረጁ ግቤቶች በራስ-ሰር እንዲገኙ
   `reportStaleEntries()`ን ከ`scripts/check/lib/allowlist.mjs` ይተግብሩ።
5. የgateውን የማግኘት ሎጂክ የሚሸፍን ሙከራ በ`tests/unit/build/` ውስጥ ይጻፉ።
6. ይህን ሰነድ ያዘምኑ (ወደ ተገቢው የjob ሰንጠረዥ አንድ ረድፍ ያክሉ)።

---

## የAgent መሣሪያዎች፦ LSP-in-the-loop (opt-in)

ከCI gates በተጨማሪ፣ OmniRoute **opt-in** የሆነ `agent-lsp` scaffold
(በፕሮጀክት ደረጃ ያለ `.mcp.json`፣ Fase 7 Task 15) ይዞ ይመጣል። TypeScript language serverን ለcoding agents ለማጋለጥ `.mcp.json`ን
ይፍጠሩ፤ ይህም ኮድ ከመጻፋቸው **በፊት** symbols /
diagnosticsን እንዲፈቱ ያደርጋል — የ"የተፈጠረ symbol" ስህተቶችን ከመነሻቸው የሚቀንስ፣
ከ`typecheck:core` ጋር የሚሠራ compile-before-claim አጋዥ ነው። ሆን ተብሎ
በራስ-ሰር እንዳይጫን ተደርጓል (የMCP↔LSP bridgeን እርስዎ ይመርጣሉ እና ያረጋግጣሉ)፤ የተበላሸ ግቤት የግንኙነት
ስህተትን ብቻ ይመዘግባል እንጂ sessionsን ፈጽሞ አያቋርጥም።

---

## የምክንያታዊ ማድረግ የኋላ ዝርዝር (የROI ግምገማ — ደረጃ 9 ሞገድ 3)

ይህ ንብረት ዝርዝር በ2026-06-17 ከ`ci.yml` ጋር ተመሳክሯል (ቀዳሚው ስሪት
`audit:deps`፣ `check:tracked-artifacts`፣ `check:lockfile`፣ `check:licenses`፣
`check:dead-code`፣ `check:cognitive-complexity`፣ `check:type-coverage`፣
`check:codeql-ratchet`፣ `check:pr-evidence`ን አላካተተም ነበር)። የተመሳከረው ስብስብ የROI ግምገማ
የሚከተሉትን የምክንያታዊ ማድረግ ዕጩዎች ለይቷል። **ውህደቶቹ መካኒካዊ የCI
ለውጦች ናቸው፤ መቀየር/ማስወገድ ውሳኔዎቹ ለኦፕሬተሩ የተተዉ የፖሊሲ ውሳኔዎች ናቸው።** ከታች ካሉት ውስጥ
እስካሁን የተተገበረ የለም።

**ከላይ ያልተመዘገቡ ተጨማሪ ነገሮችም** (አማካሪ፣ ዝቅተኛ ምልክት)፦ የ`docs-lint` ሥራ
(markdownlint + Vale፣ ሙሉው ሥራ `continue-on-error`) እና ራሳቸውን የቻሉ የስካነር የሥራ ፍሰቶች
`semgrep.yml` / `codeql.yml` / `scorecard.yml`። `semgrepFindings: 0` በ
`quality-baseline.json` ውስጥ አለ፣ ነገር ግን በ`ci.yml` ውስጥ ከሚያግድ ራቼት ጋር አልተገናኘም — መለኪያው
በአሁኑ ጊዜ ወላጅ አልባ ነው።

### ማዋሃድ / ብዜት ማስወገድ (መካኒካዊ፣ ዝቅተኛ አደጋ)

እያንዳንዱ ዕጩ በ2026-06-17 በነበረው የቀጥታ ጌት ሁኔታ ላይ ተረጋግጧል (እመን-ግን-አረጋግጥ)፤
በርካታ "ግልጽ" የሚመስሉ ውህደቶች ዕዳን እንደሚደብቁ ታውቋል እና **ንጹሕ** ቀጥተኛ ምትኮች አይደሉም።

- **`check:docs-sync` ሁለት ጊዜ ይሰራል** — በ`lint` ሥራ ውስጥ ራሱን ችሎ እና እንደገና በ`check:docs-all` (`docs-sync-strict`) ውስጥ እንዲሁም በhusky pre-commit hook ውስጥ። ✅ **ተጠናቋል** — ራሱን የቻለው የ`lint` ጥሪ ተወግዷል።
- **የCVE ቅኝት** — ❌ **ንጹሕ ውህደት አይደለም።** `audit:deps` በማንኛውም high/critical CVE ላይ በጥብቅ ይወድቃል፤ `check:vuln-ratchet` (osv) የሚወድቀው ከመነሻ መስመሩ ጋር ሲነጻጸር _መመለስ_ ሲኖር ብቻ ነው (በአሁኑ ጊዜ 1 MODERATE)። የተለያየ ትርጉም አላቸው — `audit:deps`ን ማስወገድ ፍጹሙን high/critical ጌት ያሳጣል። ሁለቱንም አቆዩ።
- **የዑደት ማወቂያ** — ✅ **ተጠናቋል** (#15159 G-01/G-02)። እዚህ የነበረው የድሮ ጽሑፍ `check:cycles`ን "አረንጓዴው፣ በጥንቃቄ የተመረጠው" ጌት ብሎ ጠርቶታል እና `check:circular-deps` (dpdm) 91 ዑደቶችን ስለዘገበ እንደ አጋጅ መቆየቱን አጽድቋል። ያ አረንጓዴ ውጤት **ሐሰተኛ አረንጓዴ** ነበር፦ `check:cycles` 5 ንዑስ ማውጫዎችን (450 ፋይሎች) ቃኝቷል፣ static `import|export … from`ን ብቻ አዛምዷል፣ እና እያንዳንዱን `@/` እና `@omniroute/open-sse/` specifier አስወግዷል፤ ስለዚህ በrepoው ውስጥ የበዙትን dynamic-import + alias ዑደቶች ማየት አልቻለም። ተስተካክሏል፦ ጌቱ አሁን `src` + `open-sse`ን (5023 ፋይሎች) ያስሳል፣ specifierዎችን ከTypeScript AST ይሰበስባል (ስለዚህ `import("…")` ይቆጠራል እና በtype-position ያለ `typeof import("…")` አይቆጠርም)፣ እንዲሁም የtsconfig `paths`ን ይፈታል። 0 ሳይሆን **14** ዑደቶችን ያገኛል። ቀድሞ የነበሩት 14 ዑደቶች በጌት PR ውስጥ ሊስተካከሉ ስለማይችሉ፣ `check:cycles` አሁን **ራቼት** ነው (`--ratchet`፣ በ`quality-baseline.json` ውስጥ ጣሪያው `metrics.cycles.value = 14`፣ `direction: down`) — ማንኛውንም _መመለስ_ ያግዳል እና ቁጥሩ መቀነስ ብቻ ይችላል። CI `npm run check:cycles:ratchet`ን ያስኬዳል። ቀስ በቀስ የማጥፋት ሥራው ከ**A-01** ጋር ይከናወናል። `check:circular-deps` (dpdm) እንደ ሰፊ ሁለተኛ አስተያየት አማካሪ ሆኖ ይቆያል።
- **ውስብስብነት** — ✅ **ተጠናቋል** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`)፦ አንድ የESLint ቅኝት፣ cyclomatic+max-lines እና cognitive መነሻ መስመሮች እርስ በርሳቸው ነጻ ሆነው እንዲቆዩ በruleId ይቆጥራል፤ የተናጠል `check:complexity` / `check:cognitive-complexity` ለአካባቢያዊ `--update` ይቆያሉ።
- **የ`/api` ፀረ-ቅዠት** — ✅ **ተጠናቋል** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`)፦ አንድ የ`src/app/api` FS ንብረት ዝርዝር፣ openapi-routes + docs-symbols አሁንም በተናጠል ሪፖርት ያደርጋሉ፤ የተናጠል ስክሪፕቶቹ ለአካባቢያዊ ማስኬዶች ይቆያሉ።
- **`check:node-runtime` በ11 ሥራዎች ውስጥ ይሰራል** — ⚠️ **ዝቅተኛ ROI።** እያንዳንዱ የተለየ runner ነው እና ፍተሻው <1s ነው፤ ጠቅላላ ቁጠባው ~10s ነው፣ በምላሹ ግን ርካሽ የየሥራውን ጥበቃ ማጣት ይኖራል። የለውጥ ውጣ ውረዱን አያዋጣም።
- **በCI lint ላይ `typecheck:noimplicit:core`** — ✅ **ከlint ሥራ ተወግዷል** (አማካሪ `continue-on-error` ነበር)፤ አጋጁ የtype ወሰን `typecheck:core` + `check:type-coverage` ነው። አካባቢያዊ ስክሪፕቱ ተቀምጧል።

### መቀየር / መወሰን (የኦፕሬተር ፖሊሲ)

- `check:openapi-security-tiers` (አማካሪ) — ❌ **በንጽሕና ሊቀየር አይችልም።** በ0 ይወጣል፣ ነገር ግን በ`LOCAL_ONLY_API_PREFIXES` ስር ያሉ በርካታ `traffic-inspector` መስመሮች የ`x-loopback-only: true` ማብራሪያ እንደሌላቸው ያስጠነቅቃል። ማስገደድ በመጀመሪያ እነዚያን ማብራሪያዎች ወደ`openapi.yaml` መጨመርን ይጠይቃል።
- `typecheck:noimplicit:core` (አማካሪ) — በአብዛኛው በአጋጁ `check:type-coverage` ራቼት ውስጥ ተካቷል። ወደ ራቼት ይቀየር ወይም ተደጋጋሚው ሁለተኛ የ`tsc` ማለፊያ ይወገድ።
- `test:vitest:ui` (አሁን **አጋጅ**) — ቀድሞ የነበሩ ውድቀቶች በ`vitest.config.ts` ውስጥ በ`// #8618` የክትትል አስተያየቶች በግልጽ ተገልለዋል፤ አዲስ ውድቀቶች ሥራውን ያወድቃሉ።
- `check:secrets` (gitleaks፣ በ3 የተመዘገቡ ሐሰተኛ-አዎንታዊ ውጤቶች ላይ የቀዘቀዘ አጋጅ ራቼት) — 0 ላይ ለመድረስ 3ቱን allowlist ውስጥ ያስገቡ፣ ወይም ወደ አማካሪ ዝቅ ያድርጉት። ከGitHub ቤተኛ secret-scanning + `check:public-creds` ጋር ይደራረባል።
- `check:pr-evidence` (አጋጅ፣ የPR-body ስድ ንባብን በgrep ይፈልጋል) — ከፍተኛ የሐሰት-አዎንታዊ አደጋ አለው፤ ከተወገደ የHard Rule #18 ማስፈጸሚያን ያዳክማል፣ ስለዚህ ይህ እውነተኛ የፖሊሲ ውሳኔ ነው።
- `semgrep` (ራሱን የቻለ አማካሪ) — ለOWASP ቤተሰቦች ከCodeQL ጋር ይደራረባል፤ መነሻ መስመሩን ከራቼት ጋር ያገናኙ ወይም ያስወግዱት።

---

## ተዛማጅ ሰነዶች

- የአቅርቦት ሰንሰለት (provenance፣ SBOM፣ Trivy፣ Scorecard)፦ [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — የቁልፍ-ስብስብ እኩልነት መቆጣጠሪያ

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`፣ job `i18n-ui-coverage`)።
የእያንዳንዱን `src/i18n/messages/<locale>.json` የመጨረሻ ደረጃ ቁልፍ ስብስብ ከ`en.json` ጋር ያነጻጽራል፣ እና
ቁልፉ መቼ እንደታከለ ሳይመለከት በማንኛውም የጎደለ ወይም ተጨማሪ የመጨረሻ ደረጃ ቁልፍ ላይ ይወድቃል። `__MISSING__:` ቦታ-ያዥ ምልክቶች
እንዳሉ ይቆጠራሉ (ይዘታቸው የሬሾ መቆጣጠሪያው ጉዳይ ነው)። ይህ በልዩነት/መቶኛ ላይ የተመሠረቱትን
ሁለት መቆጣጠሪያዎች ሙሉ በሙሉ ያሟላል፦ `check-ui-keys-coverage` ለእያንዳንዱ
locale የ80 % ዝቅተኛ ገደብ ያስፈጽማል (ከ~13,000 ውስጥ 43 ቁልፎች ቢጎድሉም አሁንም 99.7 % ይነበባል)፣ እና `check-new-key-coverage`
PR ወደ `en.json` የሚያክላቸውን ቁልፎች ብቻ ይገመግማል። የlocale ቡድን ቅርንጫፉ በተፈጠረበት ቀን ካለው `en.json`
የሚመነጭ ሲሆን፣ base አዳዲስ ቁልፎችን ማከሉን ሲቀጥል ለቀናት ትርጉም ያከናውናል፤ የቡድኑ PR ራሱ
ምንም ቁልፍ አይጨምርም፣ ስለዚህ batch 1 (#13044) በዘጠኝ locales 43 ቁልፎች ጎድለውት
እና batch 2 (#13660) በስምንት locales 10 ቁልፎች ጎድለውት ሲዋሃዱ (2026-09-15) ሁለቱም ተዛማጅ መቆጣጠሪያዎች ዝም ብለው ቀርተዋል። ቀይ ስህተትን በ
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` ያስተካክሉ፤ `extra` የመጨረሻ ደረጃ ቁልፍ
ምንጩ እንዳስወገደው ያመለክታል — ከlocale ይሰርዙት። `--warn` ሳያወድቅ ሪፖርት ያደርጋል።
`--catalog=cli` በ`bin/cli/locales` ላይ ተመሳሳዩን ንጽጽር ያካሂዳል (`npm run i18n:check-keys:cli`)፤
ሁለቱም ደረጃዎች በjob `i18n-ui-coverage` ውስጥ ይገኛሉ።

#### `check-new-key-coverage` — የአዲስ-ቁልፍ i18n መቆጣጠሪያ

የ`check-ui-value-drift` ተዛማጅ መቆጣጠሪያ ነው። ያኛው፣ ትርጉሞቹ ሳይዘምኑ የቀረ የእንግሊዝኛ እሴት **እንደገና ሲጻፍ**
ይለያል፤ ይህኛው ደግሞ አንዳንድ locales ሳይቀበሉት የቀረ የእንግሊዝኛ ቁልፍ **ሲታከል**
ይለያል።

`check-ui-keys-coverage` ይህን ዓይነት ማየት አይችልም፦ ለእያንዳንዱ locale የመቶኛ ዝቅተኛ ገደብ ያስፈጽማል፣ እና
ከ~13,000 የመጨረሻ ደረጃ ቁልፎች ውስጥ አሥራ አንዱ ቢጎድል ሽፋኑ 99.9% ሆኖ ይቀራል። የእያንዳንዱ ቋንቋ መቶኛ
“ይህ ባህሪ ሳይተረጎም ተለቀቀ” የሚለውን መግለጽ አይችልም — አንድ ሙሉ ባህሪ ምንም
ጽሑፍ ሳይኖረው በአዲስ locale ውስጥ ሊገባ እና ቁጥሩን ፈጽሞ ላይቀይር ይችላል።

ይህ የሚወክለው ክስተት፦ የOrchestration Canvas Phase 3 አሥራ አንዱን ቁልፎች በወቅቱ
በነበሩት 42 locales ተርጉሟል። ከሰዓታት በኋላ የEU-ቋንቋ ቡድን (#13044) repoውን
ወደ 51 locales አሳደገ፣ እና ዘጠኙ አዲስ ገቢዎች (`el`፣ `et`፣ `ga`፣ `hr`፣ `lt`፣ `lv`፣ `mt`፣ `sl`፣ `sr`)
እነዚህን ፈጽሞ አልተቀበሉም። `deepMergeFallback` በጎደለ ቁልፍ ምትክ እንግሊዝኛን ያስገባል፣ ስለዚህ የብልሽቱ ሁኔታ
ባዶ UI ሳይሆን ያልተተረጎመ UI ነበር — እውነተኛ፣ እና በአወቃቀሩ ምክንያት ዝምተኛ።

እንደ ተዛማጅ መቆጣጠሪያው ይህም **ልዩነትን የሚያውቅ** ነው፤ በmerge base ላይ ያለውን እንግሊዝኛ ከworking
tree ጋር ያነጻጽራል፣ ስለዚህ ቀድሞ የነበሩ ክፍተቶች ባሉበት ይቆያሉ እና መቆጣጠሪያውን ለማብራት ምንም migration አላስፈለገም።

**የ`__MISSING__:<english>` ምልክት መስፈርቱን አያሟላም (ከ2026-09-17 ጀምሮ)።** ቀደም ሲል በሰነድ የተገለጸው
የማዘግየት ዘዴ ነበር — runtimeው ወደ ትክክለኛው እንግሊዝኛ ይመለሳል — ነገር ግን በ
2026-09-16 ስምንት የባህሪ PRs 61 ቁልፎችን አክለው ከመተርጎም ይልቅ ምልክቱን በሁሉም 65 locales ውስጥ
አስገብተዋል፦ ይህ መቆጣጠሪያ ሁሉንም ተቀብሏል፣ PRsን ምንም ነገር አላገዳቸውም፣ እና ማገጃው የእውነተኛ-ትርጉም ሬሾ መቆጣጠሪያ
በመቀጠል በrelease tip ላይ ለሁሉም ወደቀ (pt-BR 3.2 % > 2.5 % + 0.5)። አሁን ምልክት
እንደጎደለ ትርጉም ይቆጠራል። ቀይ ስህተትን በ
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`፣ ወይም
ሁሉንም locales በአንድ ጊዜ በ`npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`፣
detached-safe፣ ያለ `OMNIROUTE_TRANSLATION_*` env መጀመርን የሚከለክል) ያስተካክሉ። በእንግሊዝኛ መቆየት ያለበት
ቁልፍ (የተወሰነ የምርት/engine/flag ስም) በ`scripts/i18n/untranslatable-keys.json` ውስጥ መኖር አለበት፣
ከምልክት ጀርባ ፈጽሞ መሆን የለበትም። `vi` ምልክቶችን ሙሉ በሙሉ ይከለክላል (`tests/unit/i18n-vi-completeness.test.ts`)።

#### `check-vitest-exclusions` — የታገዱ-ፈተናዎች መቆጣጠሪያ

በ`vitest.config.ts` `exclude` ዝርዝር ውስጥ ያለ ፋይል የማይሠራ ፈተና ነው፣ እና treeውን ለሚያነብ ሰው
ሽፋን ያለ ይመስላል። ስልሳ ሁለት ፋይሎች
`// #8618 — ቀድሞ የነበረ ውድቀት፤ ሲስተካከል ይህን exclusion ያስወግዱ` ከሚለው አስተያየት ጀርባ ተከማቹ። Issue #8618 በ
2026-08-11 ተዘግቷል፣ እሱ የሚከታተለው ዝርዝር ግን ከ45 ግቤቶች ወደ 62 አደገ፤ እያንዳንዱ አዲስ ግቤት
ወደተዘጋ issue የሚያመለክት አስተያየት ወርሷል። በመጨረሻ ዝርዝሩ ፋይል በፋይል ሲለካ (#13204)፣ **ከ62ቱ 51ዱ
ምንም የsource ለውጥ ሳይደረግ በአሁኑ tree ላይ አልፈዋል**።

መቆጣጠሪያው ወደ እውነተኛ ፋይል የሚያመለክት እያንዳንዱ exclusion (a) የመከታተያ issue እንዲጠቅስ እና
(b) ከተለካው ሁኔታው ጋር በ`config/quality/vitest-exclusions.json` ውስጥ እንዲታይ ይጠይቃል፤ ስለዚህ አንድ መጨመር
በ60-ግቤት array ውስጥ ሌላ አንድ መስመር ከመሆን ይልቅ በተለየ ፋይል ውስጥ ሊገመገም የሚችል diff ይሆናል። ሆን ብሎ
የተገለሉትን ፈተናዎች እንደገና አያስኬድም — ይህ ~10 ደቂቃዎችን ይወስዳል እና በየጊዜው በሚሠራ job ውስጥ መከናወን አለበት፤
inventoryው እያንዳንዱ ለመጨረሻ ጊዜ መቼ እንደተለካ ይመዘግባል።
