# Quality Gates Reference (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Wannan takarda ita ce madogara mafi inganci ga dukkan ƙofofin ingancin CI a OmniRoute.
Tana bayyana kowace ƙofa, abin da take tantancewa, aikin CI da take gudana a cikinsa, ko tana amfani da
ma’aunin ratchet ko tsarin wucewa/faɗuwa, da kuma ko tana hana ginin ci gaba ko kuwa shawara ce kawai.

Don taƙaitaccen bayani da tsarin allowlist, duba sashen "Quality Gates & Ratchets"
a cikin `AGENTS.md`. Don nazari mai zurfi, rarrabuwar matakin balaga, da tsarin
maimaitawa wanda bai dogara da takamaiman kayan aiki ba na wannan tsarin, duba
[Jagorar Ƙofofin Inganci](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Jerin gate da bayanan martabar aiwatarwa

### Karɓar ɗan takara

Tsarukan aikin CI da Quality Gates kowannensu yana fitar da tabbataccen hukunci: `Gate / CI` da
`Gate / Quality`. Manufofin karɓarsu masu sigar da aka kayyade suna lissafa kowane aikin upstream
a matsayin wajibi ko na shawarwari. Duk aikin wajibi da ya dace dole ne ya yi nasara: sakamakon da
babu, aka soke, aka tsallake, ke jiran kammalawa ko ba a san shi ba ba zai iya tabbatar da PASS ba.
Ingantaccen rarrabewar docs-only ko catalog-only na iya sa layin lamba bai dace ba;
ba a karɓar draft PR a matsayin ɗan takara. Alamar `hotfix` ba ta soke buƙatar shaida.

Dukkan tsarukan aikin suna rufe PRs da pushes zuwa rassan main/release, manual dispatch da
abubuwan merge-group. Push, dispatch da merge-group suna gudanar da cikakken zaɓi. Forks
da merge groups suna amfani da hosted runners don ayyukan da in ba haka ba za su zaɓi self-hosted
runners; dole ne a tabbatar da isasshen ƙarfin hosted kafin ƙaddamarwa.

Kowane JSON receipt yana tantance SHA da aka checkout, workflow run da attempt.
CLI yana ƙin rashin daidaituwar checkout/event SHA. Gwaje-gwajen workflow suna ɗaure kasancewa
cikin manufa da jerin `needs` na aikin hukunci, don kada sabon lane ko wanda aka cire ya ɓace a ɓoye.
Receipts ɗin suna rufe workflow nasu ne kawai, ba wallafawa, deployment, ko bayanan cikin
wani advisory scanner da ake da shi ba. Kunna dukkan sunayen check biyu a cikin ƙa’idojin reshe
wani sauyin gudanarwa ne daban; ƙara waɗannan ayyuka ba ya kare reshe da kansa.

### Jerin static scan

Jerin npm-alias mai sigar da aka kayyade da kasancewar static-scan suna cikin
`config/quality/gate-manifest.json`. Gudanar da `npm run check:gate-manifest` don tantance
sunayen script da ainihin commands da ke cikin `package.json`; ƙari, cirewa da
sauyin command suna sa local hook da ayyukan change-classification a CI su gaza.
Alias ba workflow job, matrix instance ko test case ba ne: kada a gabatar da waɗannan ƙididdiga
a matsayin masu musanyawa.

Yi amfani da `npm run quality:scan -- --list` ko `npm run quality:scan:fast -- --list`
don duba aliases da aka zaɓa ba tare da aiwatar da su ba. Runner yana kiran
npm entrypoint, saboda haka ana kiyaye runtime ɗinsa (har da Bun inda aka saita shi).
Manifest yana rubuta aliases da ke wajen waɗannan profiles a matsayin waɗanda ake kira dabam,
kuma an hana maintenance commands a cikin read-only scan profiles.

Waɗannan profiles suna rufe static scan kaɗai. Ba sa tabbatar da product tests,
coverage, packaging, external checks ko cikakken amincewar sakin ɗan takara.
Karɓar workflow yana amfani da `config/quality/admission-policy.json` da aka haɗa da
`scripts/quality/admission-verdict.mjs`. Release-observer profiles suna ci gaba da kasancewa daban;
duba applicable checks da receipts nasu dabam. Jerin bayani
da ke ƙasa abin dubawa ne, ba hujjar cewa an aiwatar da gate da gaske ba.

Scripts suna ƙarƙashin `scripts/check/` (policy gates) da `scripts/quality/` (ratchet engine).
Asalin sahihin bayanin CI shi ne `.github/workflows/ci.yml`.

### Hanya mai sauri ta Release PR (`quality.yml`)

`.github/workflows/quality.yml` yana cika CI a kan main/release PRs, pushes zuwa protected-branch,
dispatch da merge groups. PRs suna amfani da fast checks da aka tace bisa path. An cire duplicate
build da aka kashe na dindindin; ainihin build/package/boot checks suna nan a CI.

| Job                                              | Iyaka                                                                                                                                                                                                              | Mai toshewa     |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs; nassoshin API docs da docs-all                                                                                                                                                                      | E               |
| `Fast Quality Gates`                             | Code PRs; static checks, typecheck, dashboard typecheck, impacted unit tests                                                                                                                                       | E               |
| `Forgotten sibling tests`                        | Code PRs; changed modules da aka bi zuwa static consumers da candidate sibling tests; ana bayar da rahoton barrel da dynamic-import paths a matsayin advisory diagnostics, tare da referenced allowlist exceptions | **Na shawara**  |
| `Vitest (fast-path)`                             | Code PRs; fast vitest suite                                                                                                                                                                                        | E               |
| `Unit Tests fast-path`                           | Code PRs; 4-shard unit suite                                                                                                                                                                                       | E               |
| `No new ESLint warnings`                         | Code PRs; suppressions-aware lint guard                                                                                                                                                                            | E, har da forks |
| `Merge integrity (changelog + generated skills)` | Non-draft PRs; daidaitawar changelog da generated skill                                                                                                                                                            | E, har da forks |

#### Rahoton forgotten sibling tests

`npm run check:forgotten-sibling-tests` yana sake amfani da import resolver da ke bayan test-impact map.
Ga kowane changed production module, yana bayar da rahoton tabbatattun jerin
`changed module/symbol -> static consumer -> candidate sibling test` lokacin da candidate
test ba ya cikin pull-request diff. Ana adana taƙaitaccen Markdown da sakamakon JSON a matsayin
workflow artifact na `forgotten-sibling-tests` don daidaitawa kafin duk wani blocking rollout.

Sake-fitarwa na barrel da shigo da abubuwa na dynamic binciken gano matsala ne kawai; ba sa taɓa haifar da
wani sakamakon da zai toshe aiki. Keɓance-keɓancen da aka tantance suna cikin
`config/quality/forgotten-sibling-allowlist.json`. Kowane shigarwa dole ne ya ambaci consumer da candidate
test, ya bayar da takamaiman dalili, sannan ya haɗa hanyar GitHub issue ko pull request. Shigarwar da ba ta da ingantaccen tsari tana haifar da
toshewa kai tsaye. Keɓance-keɓance ba za su iya ɓoye candidate test da aka goge ko diff da ke ƙara `.skip`/`.todo` ba;
raunana assertion da sauran hanyoyin ɓoye matsala suna ci gaba da kasancewa ƙarƙashin gate mai toshewa mai zaman kansa na
`check:test-masking`.

### Aiki: `lint`

Yana gudana a kan kowane PR zuwa `main`. Yana hana merge idan ya gaza.

| Script (`npm run ...`)            | Abin da yake tantancewa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Toshewa                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| `check:node-runtime`              | Sigar Node.js tana cikin kewayon da ake tallafawa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Ee                                         |
| `check:cycles`                    | `src/` + `open-sse/`; AST (`import` / `export`, tsconfig `paths`). `check:cycles`: `cycles > 0 → exit 1`; `SCC → stderr` (#15281). `check:cycles:ratchet` (abin da CI ke gudanarwa) yana hana ci gaba idan adadin ya wuce iyakar `metrics.cycles` a cikin `quality-baseline.json` — a halin yanzu 14 ne, `direction: down`, don haka zai iya raguwa kawai (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Ee (ratchet)                               |
| `check:boundary`                  | Haɗin `open-sse → src`: shigo da abubuwa na musamman daga fayil zuwa fayil daga engine zuwa app (`scripts/quality/measure-boundary.mjs`; jerin edge ɗin shi ne backlog na gyaran raba core/module na v4). Yanayin asali = rahoton shawara (iri ɗaya da `quality:boundary`). `check:boundary:ratchet` (wanda CI ke gudanarwa, kuma yana cikin madauwariyar ratchet ta fast-gates ta `quality.yml`) yana toshewa idan adadin ya wuce iyakar `metrics.boundaryOpenSseToSrc` da ke cikin `quality-baseline.json` — an fara ta da adadin 771 da aka auna, `direction: down`; `--update` yana rage ta ne kawai; yana danganta da tushe a kan PRs (`--base-ref`, duba ƙasa)                                                                                                                                                                                                                                                                                                      | Ee (ratchet)                               |
| `check:route-validation:t06`      | Kasancewar schemas na Zod a kan duk routes (manufar Tier 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Ee                                         |
| `check:any-budget:t11`            | Adadin `@ts-expect-error // any` bai wuce kasafin da aka ware ba (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Eh                                         |
| `check:provider-consistency`      | Kowane mai samarwa a cikin `providers.ts` yana da shigarwar da ta dace a cikin `providerRegistry.ts` (haka kuma akasin haka, a cikin allowlist)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Eh                                         |
| `check:model-lifecycle`           | Teburan routing guda uku da ake kula da su da hannu suna ci gaba da daidaituwa da lifecycle snapshot da aka adana (#11503): `FITNESS_TABLE` (`taskFitness.ts`) ba ya ba wa wani retired id da `REGISTRY` zai iya tura masa maki; kowace manufa ta `BUILT_IN_ALIASES` tana cikin `REGISTRY` kuma ba ta cikin retired-id snapshot; kowane retired id da har yanzu yake cikin `REGISTRY` ana tura shi zuwa wani wuri ko kuma an jera shi a cikin `allowedRetiredInCatalog`; kuma babu source ko target na `DEFAULT_DEGRADATION_MAP` da ya bayyana a matsayin retired a cikin wannan snapshot. Wannan ba ya tabbatar da cewa a halin yanzu wani live upstream ne ke hidimar model. Offline — yana kwatantawa da `config/quality/model-lifecycle.json`, wanda ake sabunta shi da hannu ta hanyar `npm run quality:refresh-model-lifecycle` (network; ba a haɗa shi cikin CI ba). `allowedRetiredInCatalog` burn-down ratchet ne: a ƙara entry ne kawai tare da tracking issue. | Eh                                         |
| `check:fetch-targets`             | Kowane `fetch("/api/...")` a cikin `src/` na ɓangaren client yana warwarewa zuwa ainihin `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Eh                                         |
| `check:deps`                      | Duk deps da za a iya shigarwa ta `npm install` a cikin kowane `package.json` da ke repo suna cikin `dependency-allowlist.json`; ana yi wa sabbin packages marasa pinned version ko waɗanda aka slopsquat alama                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Eh                                         |
| `audit:deps`                      | `npm audit` (root + electron) — babu advisories masu matakin high/critical (ya yi karo da osv `check:vuln-ratchet`; duba Rationalization Backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Eh                                         |
| `check:lockfile`                  | Mutuncin `package-lock.json` — rajistar https, hashes na mutunci, babu sauya rundunar masauki                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Eh                                         |
| `check:licenses`                  | Jerin izinin lasisin SPDX don abubuwan dogaro na samarwa                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Eh                                         |
| `check:tracked-artifacts`         | Babu ragowar gini / symlinks na `node_modules` da aka commit (ana kuma gudanar da shi a husky pre-commit; da gangan pre-push yake da sauƙi — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Eh                                         |
| `check:ai-attribution`            | Babu trailer na AI/bot `Co-Authored-By` ko footer na samarwar AI a commits, take ko jikin PR — Ƙa'ida Mai Tsauri #16 (a cikin zagayen fast-gates na `quality.yml` don PR→`release/**` — yana karanta payload na event, baya yin komai a wajen PRs — da kuma matakin da aka keɓe ga PR kawai a lint na `ci.yml` don PR→`main`; haka kuma hook na husky `commit-msg`; an yarda da marubuta-tare na mutane; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `check:vitest-exclusions`         | Kowane keɓewar Vitest yana ambaton batun bin diddigi kuma yana bayyana a cikin `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Eh                                         |
| `check:file-size`                 | Fayilolin tushe (`.ts`/`.tsx` a cikin `src/`, `open-sse/`, `electron/`, `bin/`) su kasance cikin `cap`, kuma fayilolin gwaji (`*.test.ts(x)`) cikin `testCap`; fayilolin da aka daskarar a cikin `file-size-baseline.json` (`frozen` / `testFrozen`) kada su wuce girman da aka rubuta musu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Eh                                         |
| `check:error-helper`              | Amsoshin kuskure a cikin executors/handlers suna amfani da `buildErrorBody()` / `sanitizeErrorMessage()` (Ƙa’ida Mai Tsauri #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ee                                         |
| `check:migration-numbering`       | Fayilolin SQL na migration suna da lambobi a jere, ba tare da gibi ko maimaituwa ba                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ee                                         |
| `check:public-creds`              | Babu ƙimar OAuth `client_id`/`client_secret` ko maɓallan Firebase Web da aka rubuta kai tsaye a wajen `publicCreds.ts` (Ƙa’ida Mai Tsauri #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Ee                                         |
| `check:db-rules`                  | Babu ɗanyen SQL a wajen modules na `src/lib/db/`; babu barrel-imports daga `localDb.ts` (Ƙa’idoji Masu Tsauri #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Ee                                         |
| `check:known-symbols`             | Provider executors, dabarun routing, da translators da aka yi wa rajista a cikin dispatch tables nasu sun dace da fayilolin da ke kan faifai — babu symbols marasa alaƙa ko waɗanda ba a bayyana ba                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Ee                                         |
| `check:route-guard-membership`    | Kowace route da ke ƙaddamar da child process an rarraba ta ta amfani da `isLocalOnlyPath()` (Ƙa’idoji Masu Tsauri #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Ee                                         |
| `check:test-discovery`            | Kowane fayil na `*.test.ts` / `*.spec.ts` a cikin repo ana tattara shi ta aƙalla test runner ɗaya (ratchet: jerin fayilolin da ba su da mai kula a cikin `test-discovery-baseline.json` zai iya raguwa kawai)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Eh                                         |
| `check:agent-skills-sync`         | Kayan aikin agent-skills da aka samar sun yi daidai da kundin tushensu (babu karkacewa)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `check:provider-asset-provenance` | Tambura/kadarorin mai samarwa suna da shigar asali da aka rubuta                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `lint:json`                       | Ana iya tantance fayilolin saitin JSON kuma suna cika ƙa'idodin lint na repo                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `typecheck:core`                  | Harhaɗa TypeScript ba tare da kurakurai ba (gargaɗin shawara kawai)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Eh                                         |
| `typecheck:noimplicit:core`       | Tsauraran `noImplicitAny` — na gaba; wuraren kira da yawa da suka riga suka kasance har yanzu suna buƙatar bayanin nau'i                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **Na shawara** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` da aka iyakance zuwa `src/app/(dashboard)/**` (#7033) — jerin izini na fayiloli 27 da aka zaɓa na `typecheck:core` bai ƙunshi kowane dashboard TSX ba, haka kuma `next build` ba ya taɓa duba nau'insa (`next.config.mjs` yana saita `ignoreBuildErrors: true`), don haka koma-bayan masu gano abubuwa marasa mai alaƙa a can (#6625/#6909) ba sa bayyana ga CI. Ana kwatanta bambance-bambance da daskararren ma'aunin asali na ƙidayar kowanne fayil/kowace lambar TS (`config/quality/dashboard-typecheck-baseline.json`, tsarin tilasta tsufa iri ɗaya da `check:known-symbols`) — kurakuran SABBI kawai da suka wuce ƙidayar ma'aunin asali ne suke sa matakin ya gaza; rage ma'aunin da `--update` idan an gyara kuskuren da ya riga ya kasance.                                                                                                                                                                                                              | Eh                                         |

### Aiki: `quality-gate`

Yana gudana bayan `test-coverage`. Yana hana haɗewa idan an samu gazawa.

| Script                       | Abin da yake tabbatarwa                                                                                                                                                                                        | Hanawa                   |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `quality:collect`            | Yana fitar da `quality-metrics.json` (adadin gargaɗin ESLint, ɗaukar gwaji daga rahoton shard da aka haɗe)                                                                                                     | E (yana gaba da ratchet) |
| `quality:ratchet`            | Kowace ma'auni a cikin `quality-baseline.json` ba ta taɓarɓare ba (gargaɗin ESLint ≤ baseline; ɗaukar gwaji ≥ baseline)                                                                                        | E                        |
| `check:duplication`          | Maimaituwar lamba (jscpd@4) ba ta wuce baseline da ke cikin `quality-baseline.json` ba                                                                                                                         | E                        |
| `check:complexity`           | Sarkakiyar cyclomatic ta matakin fayil ba ta wuce iyaka ba (ainihin ESLint `complexity` + `max-lines-per-function`)                                                                                            | E                        |
| `check:cognitive-complexity` | Ratchet na sarkakiyar fahimta (`eslint-plugin-sonarjs`) — zagayen ESLint na daban; CI yana gudanar da dukansu a haɗe a matsayin mataki guda na `check:complexity-ratchets`                                     | E                        |
| `check:dead-code`            | Ratchet na exports / fayilolin da ba a amfani da su (knip) bai taɓarɓare idan aka kwatanta da baseline ba                                                                                                      | E                        |
| `check:compression-budget`   | Kasafin benchmark na matsawa — dole ne mafi ƙarancin adana token na kowane engine kada ya taɓarɓare                                                                                                            | E                        |
| `check:type-coverage`        | Ratchet na kaso mai type (`type-coverage`) bai taɓarɓare ba; galibi ya ƙunshi aikin `typecheck:noimplicit:core`                                                                                                | E                        |
| `check:codeql-ratchet`       | Adadin faɗakarwar CodeQL da suke buɗe bai taɓarɓare ba (yana karantawa ta `gh api`; yana tsallakewa cikin sauƙi idan babu token) — don jadawalin sabuntawa da kunna shi da hannu: duba "CodeQL ratchet" a ƙasa | E                        |

### Aiki: `quality-extended`

Dukkan aikin na bayar da shawara ne (`continue-on-error: true`). Ratchets masu tushen npm suna gudana
da gaske; na'urorin bincike na waje suna shigarwa ta `gh release download` kuma suna tsallake kansu (exit 0)
idan har yanzu babu binary.

| Script                   | Abin da yake tabbatarwa                                                                                                                                                                                                                     | Hanawa                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `check:circular-deps`    | Babu dogaro masu zagaye (dpdm)                                                                                                                                                                                                              | **Na shawara**                                              |
| `check:bundle-size`      | Girman bundle bai wuce iyaka ba                                                                                                                                                                                                             | **Na shawara**                                              |
| `check:secrets`          | Binciken sirrika (gitleaks) — yana tsallakewa idan babu binary                                                                                                                                                                              | **Na shawara**                                              |
| `check:vuln-ratchet`     | Raunin tsaro na dependencies (osv-scanner) bai taɓarɓare ba — yana tsallakewa idan babu binary                                                                                                                                              | **Na shawara**                                              |
| `check:workflows`        | Lint na workflow (actionlint + zizmor); scanners da suka ɓace/karye, rahotanni marasa inganci ko rashin baseline na ratchet suna gazawa da INCOMPLETE. Ingantattun sakamakon bincike suna bin manufofin strict/advisory/ratchet da aka zaɓa | Ana buƙatar aiwatarwa; zizmor ratchet yana hana haɗewa a CI |
| `check:openapi-breaking` | Sauye-sauyen da ke karya kwangilar API ta jama'a (`openapi.yaml`) idan aka kwatanta da reshen tushe (oasdiff) — yana fitar da `openapiBreaking=N`; yana tsallakewa idan babu oasdiff ko ba a iya warware takamaiman tushe ba                | **Na shawara**                                              |

### Aiki: `docs-sync-strict`

Yana gudana a kan kowane PR zuwa `main`. Yana hana haɗewa idan an samu gazawa.

| Skrif                          | Abin da yake tabbatarwa                                                                                                                                                                  | Mai toshewa                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `check:docs-all`               | Babban shinge da ke gudanar da ƙananan shingaye 6 da ke ƙasa ɗaya bayan ɗaya                                                                                                             | Ee                            |
| ↳ `check:docs-sync`            | Daidaiton sigar CHANGELOG / OpenAPI / llm.txt                                                                                                                                            | Ee                            |
| ↳ `check:docs-counts`          | Ƙididdiga a cikin rubutu (yawan masu samarwa, yawan ƙaura, da sauransu) suna cikin iyakar ratchet na ainihin ƙididdiga                                                                   | Ee                            |
| ↳ `check:env-doc-sync`         | Kowane env var a cikin `.env.example` yana da bayani a teburin takardu, kuma haka ma akasin haka                                                                                         | Ee                            |
| ↳ `check:deprecated-versions`  | Babu tsoffin kirtanin siga da aka daina amfani da su a cikin takardu                                                                                                                     | Ee                            |
| ↳ `check:doc-links`            | Mahaɗan markdown na ciki a cikin takardu suna kaiwa ga fayiloli na ainihi (tsarin `[text]`/`(path)`)                                                                                     | Ee                            |
| ↳ `check:fabricated-docs`      | Routes, env vars, umarnin CLI, sunayen hook, da file paths da aka ambata a takardu suna wanzuwa a cikin codebase. Shinge mai tsauri ta `--strict`; gazawa mai laushi ba tare da flag ba. | Ee (ta `--strict` a cikin CI) |
| `check:cli-i18n`               | Kirtanin umarnin CLI suna cikin dukkan fayilolin locale na i18n                                                                                                                          | Ee                            |
| `check:openapi-coverage`       | Bayanin OpenAPI yana rufe aƙalla ƙaramar iyakar ainihin routes da aka sa wa ratchet                                                                                                      | Ee                            |
| `check:openapi-security-tiers` | Bayanan matakan tsaro a cikin `openapi.yaml` sun yi daidai da rabe-raben `routeGuard.ts`                                                                                                 | **Na shawara**                |
| `check:openapi-routes`         | Kowane path a cikin `openapi.yaml` yana kaiwa ga `route.ts` na ainihi (hana ƙirƙirar bayanan ƙarya)                                                                                      | Ee                            |
| `check:docs-symbols`           | Kowane ambaton `/api/...` a cikin `docs/**/*.md` yana kaiwa ga `route.ts` na ainihi (hana ƙirƙirar bayanan ƙarya)                                                                        | Ee                            |
| `i18n translation drift`       | Maɓallan da ba a fassara ba a cikin fayilolin locale na i18n — gargadi kawai                                                                                                             | **Na shawara**                |

### Aiki: `i18n-ui-coverage`

| Skrif                             | Abin da yake tabbatarwa                                                                                                                                                                             | Mai toshewa    |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `check-ui-keys-coverage` (a ciki) | Rufin maɓallan i18n na UI ya kai ≥ 65%                                                                                                                                                              | Ee             |
| `check-ui-value-drift` (a ciki)   | Sake rubuta **ƙima** ta Turanci ba ya barin tsohuwar fassara a baya                                                                                                                                 | Ee             |
| `check-new-key-coverage` (a ciki) | An fassara **sabon** maɓallin Turanci a kowane locale — ana ƙin alamar `__MISSING__:`                                                                                                               | Ee             |
| `check-translation-ratio`         | Adadin ainihin fassara na kowane locale (ganye masu daidai da Turanci / placeholder / ɓacewa waɗanda ba sa cikin allowlist) dole ne ya wuce `config/quality/i18n-translation-baseline.json` + slack | **Na shawara** |

Yana buƙatar `fetch-depth: 0` — shingen value-drift yana kwatanta bambancin `en.json` da merge base.

#### `check-ui-value-drift` — shingen tsohuwar fassara

Yana gano matsalar i18n guda ɗaya da sauran shingayen ba za su iya gani ta fuskar tsari ba: ana sake rubuta ƙimar Turanci
amma fassarorin da aka samo daga Turancin _da ya gabata_ su ci gaba da kasancewa, don haka
masu amfani da ba Turanci ba su ci gaba da karanta rubutu mai gamsasshen salo amma wanda yanzu ba daidai ba ne.

Wannan ya taɓa shiga fitowar gaske. An sake rubuta `oauthModal.googleOAuthWarning` lokacin da aka
ƙara mataimakin shiga na Antigravity (#5203); **39 daga cikin locale 43** sun ci gaba da nuna wa masu gudanarwa rubutun da ke cewa su "kwafi
cikakken URL su manna shi a ƙasa" — wata hanya da ba za ta iya kammala aiki ga wannan provider ba. Ba a
lura da shi ba har sai #8463 saboda:

- `sync-ui-keys` yana cike maɓallan da kawai suke **ɓace**, ba waɗanda suka zama **tsofaffi** ba;
- `check-ui-keys-coverage` yana ƙirga _kasancewar_ maɓalli, don haka ana ɗaukar tsohuwar fassara a matsayin an rufe ta;
- `check-translation-drift` yana bin madubin takardun `docs/i18n/<locale>/**.md` —
  ba ya taɓa karanta `src/i18n/messages/*.json`. Yana toshewa a aikin `docs-sync-strict` tun bayan
  sake daidaitawar 2026-09: gyara core doc → `npm run i18n:run -- --files=<doc>` (a matakin sashe, mai sauƙi).

**Yana lura da diff, ba ya dogaro da baseline.** Yana kwatanta `en.json` a merge base da
working tree; ga kowane key da ƙimar Turancinsa ta canza, duk locale da har yanzu yake riƙe da
fassarar da ba a taɓa ba, ya tsufa. Wannan da gangan yana **daskarar da bashin da ya riga ya wanzu** — diff
ba zai iya bayyana daga wane tsohon Turanci wata fassara da ta daɗe ta samo asali ba, don haka gate ɗin yana tantance
abin da canjin yanzu kawai ya taɓa. Madadin haka (baseline na hash ga kowane key) zai buƙaci
generated file mai girman ~600 KB, sau 3 na baseline mafi girma da ake da shi, yana sauyawa a kowane i18n PR.

Akwai hanyoyi biyu na cika wannan:

1. sabunta fassarorin da abin ya shafa, ko
2. saita su zuwa `__MISSING__:<new english>` — runtime zai gabatar da gyararren Turancin
   (`src/i18n/request.ts::deepMergeFallback`, #7258), sannan key ɗin ya shiga jerin jiran fassara.

Idan **ma’anar** string ɗin ta canza, ya fi kyau a **sake wa key ɗin suna**: sabon key ba zai iya gādon
fassarar da ta tsufa ba. Wannan shi ne tsarin da #8463 ya yi amfani da shi.

```bash
npm run i18n:check-value-drift          # tsauri (abin da CI ke gudanarwa)
npm run i18n:check-value-drift:warn     # rahoto kawai
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Yana fita da 0 tare da `SKIP reason=base-unresolved` idan ba za a iya karanta base catalog ba (shallow
clone ba tare da base ref ba), kamar yadda `check-openapi-breaking` yake yi.

### Job: `i18n`

Cikakken matrix na tabbatar da i18n (job ɗaya ga kowane locale). Gaba ɗayan job ɗin na shawarwari ne.

| Script                          | Abin da yake tabbatarwa           | Toshewa                                                            |
| ------------------------------- | --------------------------------- | ------------------------------------------------------------------ |
| `validate_translation.py quick` | Cikakken fassara ga kowane locale | **Na shawarwari** (`continue-on-error: true` a kan gaba ɗayan job) |

### Job: `pr-test-policy`

Yana gudana a kan pull requests kawai.

| Script                 | Abin da yake tabbatarwa                                                                                                                   | Toshewa |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| `check:pr-test-policy` | PRs da suka canza production code a cikin `src/`, `open-sse/`, `electron/`, ko `bin/` dole ne su ƙunsa ko su sabunta tests (Hard Rule #8) | Eh      |
| `check:test-masking`   | Test files da aka canza ba sa rage jimillar adadin assert ko ƙara tautologies na `assert.ok(true)`                                        | Eh      |
| `check:pr-evidence`    | Jikin PR yana ambaton shaidar test/VPS don canjin (yana sarrafa Hard Rule #18 ta hanyar yin grep a rubutun PR — mai rauni, duba Backlog)  | Eh      |

### Job: `test-vitest`

Yana gudana bayan `build`. Yana hana merge idan ya gaza.

| Suite            | Abin da yake tabbatarwa                                  | Toshewa                                                                                                                          |
| ---------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP server (tools 110), autoCombo, cache — vitest runner | Eh                                                                                                                               |
| `test:vitest:ui` | Tests na UI components — vitest runner                   | **Mai toshewa** — an ware gazawar da ta riga ta wanzu a sarari a cikin `vitest.config.ts`; sabbin gazawa suna sa job ɗin ya gaza |

### Nightly workflows (an tsara lokaci, na shawarwari)

Waɗannan suna gudana bisa cron schedule (da `workflow_dispatch`), ba sa gudana a kan PRs. Dukansu na shawarwari ne.

| Workflow               | Abin da yake tabbatarwa                                                                                                                                             | Toshewa           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `nightly-property`     | fast-check property tests tare da random seed + yawan gudu mai yawa                                                                                                 | **Na shawarwari** |
| `nightly-resilience`   | gate na heap-growth, chaos fault-injection, k6 load/soak                                                                                                            | **Na shawarwari** |
| `nightly-llm-security` | kariyar promptfoo injection (block mode) + garak probes (ana tsallake su idan babu provider secret)                                                                 | **Na shawarwari** |
| `nightly-schemathesis` | OpenAPI contract fuzzing (schemathesis) a kan OmniRoute mai aiki ta amfani da `docs/openapi.yaml` — yana fito da keta spec / 500s da ba a sarrafa ba (Mataki 8 B.4) | **Na shawarwari** |
| `nightly-mutation`     | Makin Stryker mutation-testing a kan fast unit lane — mutants da suka tsira suna fito da asserts marasa ƙarfi                                                       | **Na shawarwari** |
| `nightly-compat`       | Matrix na dacewar Node engine a cikin ranges na `engines.node` da ake tallafawa                                                                                     | **Na shawarwari** |

Ana rubuta performance baselines (heap, TTFB, build time), ba a sanya su a matsayin gate ba: duba [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Matakin sauri (2026-08-30 → v4.0 LTS): an sassauta kowane ma'aunin tushe da 20%

Shawarar mai aikin (2026-08-30): har zuwa rarraba v4.0 zuwa sassa, saurin fitar da samfur ya fi
muhimmanci fiye da hana bashin fasaha ƙaruwa. An sassauta kowane ma'aunin tushe na **lamba**
da 20% a zagaye guda da za a iya dubawa, kuma an ayyana matakin a cikin
`config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Abin da ya canza                                                                                                                                                                                                                     | Inda yake                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — ƙididdigar da ƙarami ya fi kyau ×1.2, kaso na da babba ya fi kyau ÷1.2 (an bar mafi ƙarancin coverage a 60, `eslintErrors` ya ci gaba da zama 0, `eslintWarnings` 0 → 20% na adadin suppression da aka daskarar) | `quality-baseline.json` (bayanin `_relax_velocity_2026_08_30` ya jera kowane kafin → bayan)            |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                     | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, iyakar layin kowane `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                             | `file-size-baseline.json`                                                                              |
| ƙididdiga na kowane fayil / kowace lambar TS ×1.2                                                                                                                                                                                    | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                  | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` ya zama shawara yayin da `_policy.requireTighten === false`                                                                                                                                                      | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| aikin dare na `bank-ratchet-shrinks` ya tsaya na ɗan lokaci (zai adana raguwar da aka auna kuma ya soke sararin da aka tanada)                                                                                                       | `.github/workflows/nightly-release-green.yml`                                                          |

Jerin abubuwan da aka yarda da su (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) ba kasafin iyaka ba ne kuma ba a taɓa su ba. Ƙofofin manufofin nasara/faduwa (sirrika, ƙa'idojin SQL,
yarjejeniyar docs/env, daidaiton i18n, gwaje-gwajen unit) ba su canza ba — gwajin da ya gaza har yanzu ya gaza.

**Kayan aiki**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — sassautawa
  ta lokaci ɗaya (`scripts/quality/relax-baselines.mjs`); yana ƙin sake aiki sau biyu da bayanin
  guda.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  yana auna kowace ƙofar lamba yadda CI ke yi kuma yana buga sauran sararin da ya rage ga kowace ƙofa
  (`scripts/quality/baseline-headroom.mjs`). Aikin dare na `baseline-headroom` yana wallafa
  teburin a taƙaitaccen bayanin gudanawar workflow sannan ya ɗora rahotonsa na JSON/Markdown a matsayin
  `baseline-headroom-<run_id>`, inda ake riƙe shi na tsawon kwanaki 90. Layukan gargaɗi da masu haɗari
  suna nuna ƙofofin da suka kai cikin 10% na iyakarsu ko suka riga suka wuce ta. Duba waɗannan rahotannin
  a matsayin gargaɗin farko cewa ana cinye kasafin iyaka; bincika bayanan `_rebaseline_*` na ƙofar da
  abin ya shafa. Aikin ba ya ƙirƙira ko sabunta issue na dindindin kuma; #12149 yana adana tarihin
  rahotannin da suka gabata.

**Yanayin sabuwar lamba (Clean-as-You-Code) — tun daga 2026-08-30, hanyar gaggawa ta PR kawai**

A kan abubuwan da suka faru na `pull_request`, `quality.yml` yana miƙa `--base-ref <PR base SHA>` zuwa
`check:file-size`, `check:complexity-ratchets` da `check:dead-code`. Ga `check:complexity-ratchets` da
`check:dead-code`, ƙofar tana kwatanta HEAD da merge-base **inda aka taƙaita ga fayilolin da PR
ya taɓa** (`scripts/check/newCodeMode.mjs`: ana samar da merge-base a cikin `git worktree` na wucin
gadi, ana gudanar da ESLint/knip a can da kuma kan HEAD, sannan a kwatanta bambancin ƙididdigar kowane fayil):

- **mai toshewa** — PR ya ƙara take-taken cyclomatic/cognitive ko dead exports a fayilolin da ya canza
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` a cikin log);
- **na shawara** — jimillar duniya idan aka kwatanta da ma'aunin tushe da aka daskarar. Sauyin da aka gada
  ba zai taɓa sa PR marar laifi ya gaza ba; ana sake daskarar da sauyin yayin daidaitawar fitarwa,
  kuma aikin headroom yana sa ido a kansa.

`check:file-size` yana amfani da base ref bisa nasa ƙa'idoji (`scripts/check/check-file-size.mjs`, #8522):
yana bincika kowane fayil na source da test a cikin tree, yana karanta adadin layukan kowannensu a PR base
ta amfani da `git show`, kuma yana sa fayil ya gaza ne kawai idan ya ƙaru ya wuce mafi girma daga iyakar
ma'aunin tushensa (`frozen` / `testFrozen`, ko `cap` / `testCap` ga fayil da ba ya cikin ma'aunin tushe)
da girmansa na base. Saboda haka, fayil da ya riga ya sauya a base ba zai taɓa sa PR marar laifi ya gaza ba.

`check:boundary:ratchet` yana amfani da ƙa’ida iri ɗaya ga lambarsa guda ɗaya
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): a kan abubuwan PR, duka
matatar-gaggawa ta `quality.yml` da aikin lint na `ci.yml` suna miƙa SHA na tushen PR, ana
auna tushen commit daga fitarwar `git archive`, kuma PR yana gaza ne kawai idan adadin gefen
`open-sse → src` ya zarce mafi girma tsakanin `metrics.boundaryOpenSseToSrc` da adadin da ke tushen. Ana
bayar da rahoton karkatar tushe sama da iyaka (`base drift herdado`) amma ba ya taɓa sa PR marar laifi
ya gaza; push → main yana ci gaba da amfani da cikakkiyar iyaka, kuma SHA na tushe da ba za a iya warwarewa ba
yana komawa gare ta tare da gargaɗi.

Gudanarwar `workflow_dispatch`, cikakken gwajin tabbatar da release-green, da aikin headroom na dare ba su da
tushen PR, don haka suna ci gaba da amfani da cikakkiyar kwatantawa (ta duniya). Coverage, duplication da
type-coverage suna ci gaba da kasancewa na duniya a yanzu (kayan aikinsu ba sa samar da bambancin kowane fayil
cikin sauƙi) — su ma ’yan takarar samun irin wannan tsarin ne.

**Rufe matakin a v4.0 (LTS = ya fi da tsauri fiye da da, ba “komawa yadda aka saba” ba)**

1. A kan tsantsar tip na `release/v4.0.0`: gudanar da `npm run quality:headroom --json` domin rikodi, sannan
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, da `--update` na kowace
   katangar typecheck — kowane baseline zai sauka zuwa ƙimar da aka auna.
2. Goge `_policy` daga `quality-baseline.json` (yana sake kunna `--require-tighten` da taskancewar
   dare), sannan a mayar da `THRESHOLD = 36` (ko sama da haka) a cikin `check-openapi-coverage.mjs`.
3. Ƙara tsauri fiye da abin da aka auna a inda rarrabawa zuwa modules ta yi tasiri: mayar da `cap` na file-size zuwa 1000
   (ko 800), ƙara mafi ƙarancin coverage da 5, sannan dead exports su zama 0 ga packages da aka rarraba zuwa modules.

## Ma'aunin Ratchet (`quality-baseline.json`)

Injin ratchet (`scripts/quality/check-quality-ratchet.mjs`) yana karanta `quality-baseline.json`
kuma yana kwatanta shi da sabon `quality-metrics.json` da aka tattara. Duk wani ma'auni da ya koma
baya fiye da epsilon ɗinsa zai sa ginin ya gaza.

Ma'aunan da ake bibiyarsu a halin yanzu:

| Ma'auni               | Alkibla | Ma'ana                              |
| --------------------- | ------- | ----------------------------------- |
| `eslintWarnings`      | `down`  | Kada adadin gargaɗin ESLint ya ƙaru |
| `coverage.statements` | `up`    | Kada ɗaukar bayanai ya ragu         |
| `coverage.lines`      | `up`    | Kada ɗaukar layuka ya ragu          |
| `coverage.functions`  | `up`    | Kada ɗaukar ayyuka ya ragu          |
| `coverage.branches`   | `up`    | Kada ɗaukar rassa ya ragu           |

Don sabunta ma'aunin bayan ingantawa ta gaskiya:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Tutocin `--update` yana rubuta ƙimomin da aka auna a yanzu cikin `quality-baseline.json`.
Yi commit na wannan fayil tare da canjin da ya inganta ma'aunin. PR da ya inganta wani
ma'auni ba tare da sabunta ma'aunin ba, `--require-tighten` zai gano shi (Mataki 6A.5,
ana jiran aiwatarwa).

### Ratchet na CodeQL: lokacin sabuntawa da kunnawa da hannu

`check:codeql-ratchet` yana karanta **yanayin repo, wanda ake sabuntawa bisa jadawali — ba a kowane PR ba.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` yana bayar da rahoton
`state: configured`, `schedule: weekly`: binciken default-setup na GitHub ne, ba bincike
a kowane push ba. Sakamako: bayan an haɗa PR da ya GYARA faɗakarwa, ratchet zai ci gaba da karanta
tsohon adadi mafi girma har sai an gudanar da bincike na gaba da aka tsara — don haka yana bayar da rahoton koma-baya
a kan kowane buɗaɗɗen PR, har da PR na bin diddigin gyaran kansa, har sai binciken ya sabunta.

**Sabuntawa da hannu**: `gh workflow run codeql.yml --ref release/vX.Y.Z` yana sake gudanar da
binciken kuma yana sake wallafa faɗakarwa cikin mintuna. Fara da karanta `.github/workflows/codeql.yml`
— taken kansa yana bayyana cewa `workflow_dispatch` kaɗai ne **saboda yana cin karo da
"default setup" na GitHub** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Maido da masu kunnawa na `push`/`pull_request`/
`schedule` yana buƙatar **matakin mai repo da farko**: Settings → Code security →
CodeQL: Default → Advanced. Kada a ƙara mai kunnawa na `schedule:` ba tare da wannan sauyin ba — zai
samar da ayyukan da ke gazawa ne kawai.

**Tsaurara ma'aunin bayan adadin ya ragu** — `node scripts/check/check-codeql-ratchet.mjs
--update` yana rubuta sabon adadin da aka auna cikin `quality-baseline.json` →
`metrics.codeqlAlerts.value`, domin ratchet kada ya amince da koma-baya zuwa tsohon
iyaka ba tare da bayyana ba. Misalin da aka aiwatar (2026-09-02/03): PR #12502 ya gyara faɗakarwa na gaske guda 7
(13 → 6 da aka auna a buɗe); PR #12530 ya tsaurara daskararren ma'aunin daga 11 → 6 don su dace; sannan
aka yi watsi da sauran 6 tare da hujjar kowace faɗakarwa har suka koma 0 a buɗe.

**Yin watsi da faɗakarwa shawarar mai gudanarwa ce (Doka Mai Tsauri #14)** — kada a taɓa yin watsi da faɗakarwar CodeQL
ba tare da rubuta hujjar fasaha a sharhin yin watsi ba: `won't fix` don
wani buƙatar yarjejeniyar upstream, `used in tests` don wani test fixture, `false positive`
don sanitizer da CodeQL ba zai iya gani ba (misalin da ya gabata: `docs/security/ERROR_SANITIZATION.md`).

---

## Manufar Sake Gwaji (WS5.4, v3.8.49)

Sake gwaji yana keɓanta ga kowane runner, ba ya zama ƙa’ida gama-gari — sake gwaji gama-gari yana mayar da ainihin koma-baya
zuwa matsalolin bazata da ba a iya gani:

| Runner           | Manufa                                                                                                                                                                  | Dalili                                                                                                                                                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` a CI kawai, tare da `trace: on-first-retry`                                                                                                                | Lokacin burauza/cibiyar sadarwa ba ya da tabbas a zahiri; sake gwaji sau ɗaya tare da trace yana mayar da matsalar bazata zuwa artifact da za a iya bincikowa |
| Vitest           | BABU sake gwaji na gama-gari. Gwajin da aka tabbatar yana samun matsalar bazata zai samu sake gwaji takamaimai ga gwajin (a bayyane a cikin diff, kuma a duba shi a PR) | Yana adana jerin keɓewar a cikin repo, ba tare da ɓoye shi ba                                                                                                 |
| node:test (unit) | BABU sake gwaji, har abada                                                                                                                                              | Gwajin unit mai matsalar bazata kwaro ne a cikin gwajin — a gyara shi, kada a sake gwada sa’a                                                                 |

SLOs da ake hari da zarar telemetry na matsalolin bazata ya fara aiki (WS5.2/5.3): ƙasa da 1% na yawan matsalar bazata ga kowane gwaji
(ma’aunin “gyara yanzu”), da yawan nasarar aƙalla 95% ga kowane pipeline. Waɗannan ƙimomin manuniya ne na masana’antu —
a sake daidaita su da ma’aunanmu.

## Kaucewar Ratchet a Matakin Release (WS5.5, v3.8.49)

Lokacin da ratchet (girman fayil, sarƙaƙiya, gargadin eslint) ya koma baya a kan TSANTSAR tip na release
— wato, HAƊIN merges ne ya jawo koma-bayan, kuma babu wani PR guda da zai iya sake haifar da
koma-bayan a branch ɗinsa shi kaɗai — gyaran yana wuyan **release captain, sau ɗaya, a kan
release branch**: a fifita cirewa/refactor; a sake saita baseline ne kawai tare da rubutacciyar
shigar bayanin dalili. Kada a taɓa ɗora kaucewar haɗin kan PR na mai ba da gudummawa, kuma kada a taɓa
sake saita baseline ga kowane PR (hakan yana ɓoye ainihin koma-baya). Da farko a bambance: a sake haifar da
ja a kan tsantsar tip cikin probe worktree kafin a ɗauka cewa PR ɗinka ne ya jawo shi.

## Adana Raguwar Ratchet — alkiblar ƙasa (#8584)

Ratchet ɗin rabinsa kawai yake aiki ta atomatik, kuma wannan rabin ne mara dacewa. **Ɗaga** cap
gyaran JSON ne da hannu wanda ke ɗaukar daƙiƙa goma, kuma shi ne hanya mafi sauri ta warware toshewar jan PR.
**Rage** cap yana buƙatar wani ya gudanar da `--update` sannan ya commit sakamakon — kuma har sai
job ɗin `bank-ratchet-shrinks` ya fara aiki, babu workflow da ke gudanar da shi. Sakamakon da aka auna
(2026-07-25): frozen files guda 18 sun riga sun kai ko sun gaza cap na layi 800 na sabon fayil, mafi muni
yana da 132× (`src/shared/validation/schemas.ts`, layi 19 suna ɗauke da cap na 2,523); iyakar
sarƙaƙiya ta tashi daga `1794 → 2169` ta cikin bayanan sake saita baseline kusan 37 tare da raguwa
guda ɗaya tak (−1); sannan an rubuta “ƙara tsaurara ta `--update` a zagaye na gaba” sau 31 amma an aiwatar
sau ɗaya. Cap da ya daɗe fiye da lambar da ta jawo kafa shi yana mayar da duk wani kammalallen
rarrabawa a ɓoye zuwa izinin faɗaɗawa ga duk wanda zai gyara fayil ɗin a gaba.

`nightly-release-green.yml` → job **`bank-ratchet-shrinks`** yana rufe wannan zagayen:

|                 |                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Yana gudana a   | `schedule` (sau 3/rana) + `workflow_dispatch` — da gangan **ba** `push` ba                                                          |
| Yana aunawa     | `release/vX.Y.Z` mafi girma, daidai da resolution + injection guard na `release-green`                                              |
| Yana rubutawa   | `check:file-size --update` da `check:complexity-ratchets --update` (dukansu an gina su don ragewa kawai)                            |
| Yana tabbatarwa | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                            |
| Yana aikawa     | PR guda ɗaya mai kasancewa na zamani koyaushe zuwa release branch — ana force-update ɗinsa, ba a taɓa cika shi da saƙonnin banza ba |

Ana tara aikin adanawa a rukuni maimakon yin sa ga kowane push saboda ba shi da buƙatar ƙarancin jinkiri (idan an adana raguwa
cikin awa 8 babu matsala), alhali gudanarwa ga kowane merge zai sake gina PR branch akai-akai
a lokacin kamfen na merge kuma ya biya cikakken zagayen ESLint kowane lokaci. Ganowa yana ci gaba a kan
push (`release-green`); adanawa kawai ake tarawa rukuni-rukuni.

### Mai tabbatar da aminci

Job ɗin yana rubuta zuwa baselines ba tare da kulawa ba, don haka `verify-ratchet-bank.mjs` ne yake sa
hakan ya zama abin karɓa. Yana yin diff na tree bayan `--update` da `HEAD` sannan ya **dakatar da job
kafin wani commit ya wanzu** — ba tare da buɗe PR ba — sai dai idan kowane canji yana ɗaya daga cikin:

- shigar lamba ta `frozen` / `testFrozen` da aka **rage** ko aka **cire**
- `complexity-baseline.json` → `count` da aka **rage**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` da aka **rage**

Duk wani abu dabam zai gaza: ɗaga lamba, ƙara shigarwa, canza `cap`/`testCap`, ko
share/sake rubuta bayanin `_rebaseline_*` (waɗannan bayanan su ne tarihin binciken dalilin da ya sa kowace
iyaka take wanzu, kuma ana adana su cikin object ɗin `frozen` guda ɗaya da shigarwar fayilolin).
Bot da zai iya ɗaga cap zai fi halin da ake ciki muni ƙwarai. Kariyar koma-baya:
`tests/unit/verify-ratchet-bank.test.ts`.

Job ɗin ba ya taɓa yin push zuwa `release/*` — mutum ne yake merge na PR, don haka mummunan ma’auni
ba zai iya shiga ba tare da an duba shi ba.

## Manufar Allowlist

Duk wata ƙofa da ba za ta iya gazawa saboda keta dokoki da suka riga suka kasance ba tana amfani da daskararren allowlist
(misali, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Manufar ita ce:

**Gyara tushen matsalar; yi amfani da allowlist ne kawai idan ketawar ta riga ta kasance kuma
ba za a iya gyara ta a cikin PR ɗin nan ba.**

Lokacin ƙara wani shigarwa zuwa allowlist:

1. Haɗa tsokaci mai bayyana dalilin.
2. Nuna batun bin diddigi (misali, `// #3498 — Fasalin Phase 2 ne, ba a aiwatar da shi ba tukuna`).
3. Cire shigarwar a cikin PR ɗin da ya gyara ketawar — tsohuwar shigarwar da ba ta ƙara
   danne wata keta doka mai aiki ba ita ma matsala ce (tilasta-dokar tsofaffin shigarwa ta 6A.3 za ta
   sa ƙofar ta gaza saboda shigarwar allowlist marar alaƙa da zarar an aiwatar da ita).

**Kada** a ƙara shigarwar allowlist don kawai a sa gwaje-gwaje su wuce da sauri. Korewar ƙofa tare da allowlist
mai ci gaba da ƙaruwa yana ba da ruɗin inganci ne kawai.

### Lokacin da wata ƙofa ta gaza a kan PR ɗinka

1. **Karanta sakamakon ƙofar da kyau** — yana gaya maka takamaiman fayil ko alamar da ta karya
   dokar.
2. **Gyara ketawar** — yawancin ƙofofi binciken tsarin fayil ne mai ƙayyadadden sakamako waɗanda ke wucewa da zarar
   lambar ta zama daidai.
3. **Idan ketawar ta riga ta kasance** (wato, ba kai ne ka shigar da ita ba amma yanzu ƙofar
   tana rufe ta): ƙara shigarwar allowlist tare da tsokacin dalili da batun bin diddigi.
4. **Idan ƙofar ratchet ce** (coverage, gargaɗin ESLint, maimaitawa, sarƙaƙiya):
   canjinka ya ƙara munana ma'aunin. Gyara ainihin matsalar, ko kuma (da wuya) gudanar da
   `npm run quality:ratchet -- --update` idan canjin da gangan aka yi shi kuma ana iya amincewa da
   tabarbarewar ma'aunin — amma bayyana dalilin a bayanin PR.
5. **Ƙofofin shawarwari** (`continue-on-error: true`) na bayar da bayanai ne — ba sa hana
   haɗawa amma suna bayyana a taƙaitaccen bayanin CI. Duk da haka, a gyara su.

---

## Ƙara Sabuwar Ƙofa

1. Ƙirƙiri `scripts/check/check-<name>.mjs` (ko `.ts`). Ƙofofin manufofi suna fita da 0/1.
   Ƙofofi irin na ratchet suna fitar da ma'auni zuwa `quality-metrics.json` ta hanyar `collect-metrics.mjs`.
2. Ƙara `"check:<name>": "node scripts/check/check-<name>.mjs"` zuwa `package.json`.
3. Haɗa ta a cikin `.github/workflows/ci.yml` ƙarƙashin aikin da ya dace
   (manufa → `lint` ko `docs-sync-strict`; ratchet → `quality-gate`).
4. Idan tana da allowlist, yi amfani da `reportStaleEntries()` daga
   `scripts/check/lib/allowlist.mjs` domin a gano tsofaffin shigarwa ta atomatik.
5. Rubuta gwaji a cikin `tests/unit/build/` wanda ya ƙunshi dabarar gano ketawar ta ƙofar.
6. Sabunta wannan takarda (ƙara layi zuwa jadawalin aikin da ya dace).

---

## Kayan aikin wakili: LSP-in-the-loop (na zaɓi)

Baya ga ƙofofin CI, OmniRoute yana zuwa da tsarin farawa na **zaɓi** na `agent-lsp`
(`.mcp.json` na matakin aikin, Fase 7 Task 15). Ƙirƙiri `.mcp.json`
don samar wa wakilan rubuta lamba damar amfani da uwar garken harshen TypeScript, domin su tantance alamomi /
binciken kurakurai **kafin** rubuta lamba — abokin `typecheck:core` na tantancewa-kafin-da'awa
wanda ke rage kurakuran "alamar da aka ƙirƙira" tun daga tushe. Da gangan ba a
loda shi ta atomatik (kai ne za ka zaɓa kuma ka tabbatar da gadar MCP↔LSP); gurɓatacciyar shigarwa tana rubuta
kuskuren haɗi ne kawai kuma ba ta taɓa karya zaman aiki ba.

---

## Jerin Ayyukan Da Aka Jira Don Daidaitawa (bitar ROI — Mataki 9 Zagaye 3)

An daidaita wannan kundin da `ci.yml` a ranar 2026-06-17 (sigar da ta gabata ba ta haɗa da
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` ba). Bitar ROI kan jerin da aka daidaita
ta gano waɗannan ayyukan da za a iya sauƙaƙawa. **Haɗe-haɗen sauye-sauyen CI ne na
inji kawai; sauya matsayi/cirewa kuwa shawarwarin manufofi ne da aka keɓe wa mai gudanarwa.** Babu wani abu a ƙasa
da aka fara aiwatarwa tukuna.

**Haka kuma ba a rubuta bayaninsu a sama ba** (na shawara, alama mai rauni): aikin `docs-lint`
(markdownlint + Vale, dukan aikin yana da `continue-on-error`) da kuma workflows na na'urorin dubawa masu zaman kansu
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` yana cikin
`quality-baseline.json` amma ba a haɗa shi da ratchet mai toshewa a `ci.yml` ba — a halin yanzu
ma'aunin ba shi da abin da yake sarrafawa.

### Haɗewa / cire maimaituwa (na inji, haɗari kaɗan)

An tabbatar da kowane zaɓi bisa halin gate na ainihi a ranar 2026-06-17 (amince amma a tabbatar);
haɗe-haɗe da dama da suka yi kama da “bayyane” sun ɓoye bashi, don haka **ba** za a iya maye gurbinsu kai tsaye cikin sauƙi ba.

- **`check:docs-sync` yana gudana sau biyu** — shi kaɗai a aikin `lint`, sannan kuma a cikin `check:docs-all` (`docs-sync-strict`) da husky pre-commit hook. ✅ **AN KAMMALA** — an cire kiran da ke gudana shi kaɗai daga `lint`.
- **Binciken CVE** — ❌ **BA haɗewa ce mai sauƙi ba.** `audit:deps` yana gaza kai tsaye idan ya ga kowane CVE mai haɗari/babban haɗari; `check:vuln-ratchet` (osv) kuwa yana gaza ne kawai idan an samu _taɓarɓarewa_ idan aka kwatanta da baseline (a halin yanzu 1 MODERATE). Ma'anoninsu sun bambanta — cire `audit:deps` zai kawar da cikakken gate na haɗari/babban haɗari. A bar su duka.
- **Gano madauwari** — ✅ **AN KAMMALA** (#15159 G-01/G-02). Tsohon rubutun nan ya kira `check:cycles` gate “mai kore, da aka zaɓa a tsanake” kuma ya ba da hujjar ci gaba da sanya shi mai toshewa saboda `check:circular-deps` (dpdm) ya bayar da rahoton madauwari 91. Wannan koren sakamakon **koren ƙarya ne**: `check:cycles` ya binciki ƙananan kundin adireshi 5 (fayiloli 450), ya dace da static `import|export … from` kawai, sannan ya yi watsi da duk wani specifier na `@/` da `@omniroute/open-sse/`, don haka bai iya ganin madauwuran dynamic-import + alias da suka mamaye repo ba. An gyara: yanzu gate ɗin yana ratsa `src` + `open-sse` (fayiloli 5023), yana tattara specifiers daga TypeScript AST (don haka `import("…")` yana ƙidayuwa amma `typeof import("…")` da ke matsayin type ba ya ƙidayuwa), kuma yana warware tsconfig `paths`. Yana gano madauwari **14**, ba 0 ba. Saboda ba za a iya gyara madauwari 14 da suka riga suka kasance a cikin gate PR ba, yanzu `check:cycles` ya zama **ratchet** (`--ratchet`, iyaka `metrics.cycles.value = 14` a cikin `quality-baseline.json`, `direction: down`) — yana toshe duk wata _taɓarɓarewa_ kuma adadin zai iya raguwa ne kawai. CI yana gudanar da `npm run check:cycles:ratchet`. Rage adadin a hankali yana tafiya tare da **A-01**. `check:circular-deps` (dpdm) zai ci gaba da zama na shawara a matsayin ra'ayi na biyu mai faɗi.
- **Sarƙaƙiya** — ✅ **AN KAMMALA** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): zagayen ESLint guda ɗaya, yana ƙirga bisa ruleId domin cyclomatic+max-lines da cognitive baselines su ci gaba da kasancewa masu zaman kansu; `check:complexity` / `check:cognitive-complexity` na ɗaiɗaiku suna nan don `--update` na gida.
- **Hana ruɗin `/api`** — ✅ **AN KAMMALA** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): lissafin FS guda ɗaya na `src/app/api`, openapi-routes + docs-symbols har yanzu suna bayar da rahoto daban-daban; na ɗaiɗaiku suna nan don gudanarwa ta gida.
- **`check:node-runtime` yana gudana a ayyuka 11** — ⚠️ **ROI kaɗan.** Kowanne yana da runner daban kuma binciken bai kai sakan 1 ba; jimillar abin da za a adana kusan sakan 10 ne, amma hakan zai sa a rasa kariyar kowane aiki mai arha. Bai cancanci rikicin sauyin ba.
- **`typecheck:noimplicit:core` a CI lint** — ✅ **an cire daga aikin lint** (a baya na shawara ne da `continue-on-error`); ɓangaren type mai toshewa shi ne `typecheck:core` + `check:type-coverage`. An riƙe script na gida.

### Sauya matsayi / yanke shawara (manufar mai gudanarwa)

- `check:openapi-security-tiers` (na shawara) — ❌ **BA za a iya sauya matsayinsa kai tsaye cikin sauƙi ba.** Yana fita da 0 amma yana gargadin cewa routes na `traffic-inspector` da dama a ƙarƙashin `LOCAL_ONLY_API_PREFIXES` ba su da annotation na `x-loopback-only: true`. Tilasta shi yana buƙatar fara ƙara waɗannan annotations zuwa `openapi.yaml`.
- `typecheck:noimplicit:core` (na shawara) — ratchet mai toshewa na `check:type-coverage` ya riga ya rufe yawancin aikinsa. A sauya shi zuwa ratchet ko a cire zagayen `tsc` na biyu mai maimaituwa.
- `test:vitest:ui` (yanzu **mai toshewa**) — an ware gazawar da ta riga ta kasance a sarari cikin `vitest.config.ts` tare da sharhin bin diddigi na `// #8618`; sababbin gazawa za su sa aikin ya gaza.
- `check:secrets` (gitleaks, ratchet mai toshewa da aka daskarar a sakamakon ƙarya 3 da aka rubuta bayaninsu) — a saka ukun cikin allowlist domin a kai 0, ko a saukar da shi zuwa na shawara. Yana maimaita wani ɓangare na aikin GitHub native secret-scanning + `check:public-creds`.
- `check:pr-evidence` (mai toshewa, yana grep rubutun PR-body) — haɗarin sakamakon ƙarya yana da yawa; cire shi zai raunana aiwatar da Hard Rule #18, don haka wannan shawarar manufa ce ta gaske.
- `semgrep` (na shawara mai zaman kansa) — yana maimaita aikin CodeQL ga rukunin OWASP; a haɗa baseline ɗinsa da ratchet ko a cire shi.

---

## Takardun da Suka Shafi Wannan

- Sarkar samarwa (provenance, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — ƙofar daidaiton tarin maɓallai

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, aikin `i18n-ui-coverage`).
Yana kwatanta tarin maɓallan ƙarshe na kowane `src/i18n/messages/<locale>.json` da `en.json`, kuma yana kasa
idan akwai wani maɓallin ƙarshe da ya ɓace ko ya yi ƙari, ba tare da la’akari da lokacin da aka ƙara maɓallin ba. Alamomin wucin-gadi na `__MISSING__:`
ana ƙirga su a matsayin suna nan (abin da ke cikinsu aikin ƙofar rabo ne). Wannan shi ne cikakken abin da ke cike gibin
ƙofofin nan biyu masu dogaro da diff/kashi: `check-ui-keys-coverage` yana tilasta mafi ƙarancin 80 % ga kowane
locale (maɓallai 43 da suka ɓace cikin ~13,000 har yanzu suna nuna 99.7 %), sannan `check-new-key-coverage` yana tantance
maɓallan da PR ya ƙara wa `en.json` kawai. Ana samar da rukunin locale daga `en.json` na ranar
da aka ƙirƙiri branch ɗinsa, sannan yana ci gaba da fassara na kwanaki yayin da base ke ƙara sabbin maɓallai; PR ɗin rukunin ba ya ƙara
wani maɓalli da kansa, don haka dukkan ƙofofin biyu ba su yi ƙararrawa ba lokacin da rukuni na 1 (#13044) ya shiga yana da ƙarancin maɓallai 43 a
locale tara, haka kuma rukuni na 2 (#13660) yana da ƙarancin maɓallai 10 a locale takwas (2026-09-15). Gyara gazawa da
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; maɓallin ƙarshe na `extra`
yana nufin tushen ya cire shi — share shi daga locale ɗin. `--warn` yana bayar da rahoto ba tare da sa gazawa ba.
`--catalog=cli` yana gudanar da kwatancin iri ɗaya a kan `bin/cli/locales` (`npm run i18n:check-keys:cli`);
duk matakan biyu suna cikin aikin `i18n-ui-coverage`.

#### `check-new-key-coverage` — ƙofar i18n ta sabon maɓalli

Abokin `check-ui-value-drift`. Wancan yana gano lokacin da aka **sake rubuta** ƙimar Turanci
amma aka bar fassarorinta a baya; wannan kuma yana gano maɓallin Turanci da aka **ƙara**
amma wasu locale ba su taɓa samunsa ba.

`check-ui-keys-coverage` ba zai iya ganin wannan nau’in ba: yana tilasta mafi ƙarancin kashi ga kowane locale, kuma
maɓallai goma sha ɗaya da suka ɓace cikin ~13,000 suna barin coverage a 99.9%. Kashi ga kowane harshe ba zai iya
bayyana cewa "an fitar da wannan fasalin ba tare da fassara ba" — cikakken fasali zai iya shiga sabon locale ba tare da
wani rubutu ba, kuma lambar ba za ta taɓa motsawa ba.

Lamarin da yake wakilta: Mataki na 3 na Orchestration Canvas ya fassara maɓallansa goma sha ɗaya a duk
locale 42 da suke akwai a lokacin. Bayan sa’o’i kaɗan, rukunin harsunan EU (#13044) ya kai repo ɗin
zuwa locale 51, kuma sabbin locale tara (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) ba su taɓa
samun su ba. `deepMergeFallback` yana maye gurbin maɓallin da ya ɓace da Turanci, don haka yanayin gazawar ya kasance
UI da ba a fassara ba maimakon UI marar rubutu — matsala ta gaske, kuma wadda tsarin ya sa ta kasance shiru.

Kamar abokin nasa, yana **la’akari da diff**, yana kwatanta Turanci a merge base da working
tree, don haka tsoffin giɓi suna ci gaba da kasancewa daskararru, kuma ƙofar ba ta buƙaci migration kafin a kunna ta.

**Alamar `__MISSING__:<english>` ba ta cika sharadin ba (tun daga 2026-09-17).** A baya ita ce hanyar jinkirtawa
da aka rubuta a takardu — runtime yana komawa ga ingantaccen Turanci — har sai PR na fasali takwas a
2026-09-16 suka ƙara maɓallai 61 kuma suka sanya alamar a duk locale 65 maimakon fassara: wannan
ƙofa ta amince da kowannensu, babu abin da ya toshe PR ɗin, sannan ƙofar rabo ta ainihin fassara mai toshewa
ta kasa a release tip ga kowa (pt-BR 3.2 % > 2.5 % + 0.5). Yanzu ana ɗaukar alama
a matsayin fassarar da ta ɓace. Gyara gazawa da
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`, ko kuma
duk locale a lokaci guda da `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
yana aiki lafiya a detached state, kuma ya ƙi farawa ba tare da env na `OMNIROUTE_TRANSLATION_*` ba). Maɓallin da dole ya ci gaba da kasancewa
da Turanci (sunan samfur/engine/flag da aka kafe) ya kamata ya kasance a `scripts/i18n/untranslatable-keys.json`,
ba a ɓoye shi a bayan alama ba. `vi` yana haramta alamomin gaba ɗaya (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — ƙofar gwaje-gwajen da aka ajiye gefe

Fayil da ke cikin jerin `exclude` na `vitest.config.ts` gwaji ne da ba ya gudana, kuma ga duk wanda ya karanta
tree ɗin, yana bayyana kamar coverage ne. Fayil sittin da biyu sun taru a bayan sharhin
`// #8618 — pre-existing failure; remove this exclusion when fixed`. An rufe issue #8618 a
2026-08-11 yayin da jerin da yake bi ya ƙaru daga shigarwar 45 zuwa 62, kowace sabuwa tana gadon sharhin
da ke nuna issue da ya riga ya mutu. Lokacin da a ƙarshe aka auna jerin fayil bayan fayil (#13204), **51 daga cikin 62
sun yi nasara a kan tree na yanzu ba tare da wani canji ga source ba**.

Ƙofar tana buƙatar kowane exclusion da ya warware zuwa ainihin fayil ya (a) ambaci tracking issue, kuma
(b) bayyana a `config/quality/vitest-exclusions.json` tare da matsayin da aka auna, don haka ƙara ɗaya zai zama
diff da za a iya bitarwa a cikin keɓantaccen fayil maimakon ƙara wani layi guda a cikin array mai shigarwa 60. Da gangan,
ba ta sake gudanar da gwaje-gwajen da aka ware ba — hakan yana ɗaukar ~10 minutes kuma ya dace da periodic job;
inventory ɗin yana rubuta lokacin da aka auna kowannensu a karo na ƙarshe.
