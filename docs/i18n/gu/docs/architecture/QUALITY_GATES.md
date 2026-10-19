# Quality Gates Reference (ગુજરાતી)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

આ દસ્તાવેજ OmniRoute માંના તમામ CI ગુણવત્તા ગેટ્સ માટેનો અધિકૃત સંદર્ભ છે.
તે દરેક ગેટ, તે શું માન્ય કરે છે, તે કયા CI જોબમાં ચાલે છે, તે
ratchet baseline અથવા pass/fail policy નો ઉપયોગ કરે છે કે કેમ, અને તે બિલ્ડને અવરોધે છે કે માત્ર સલાહકારી છે તે વર્ણવે છે.

ટૂંકા સારાંશ અને allowlist policy માટે, `AGENTS.md` માંનો "Quality Gates & Ratchets" વિભાગ જુઓ.
આ જ સિસ્ટમના નિર્ણાયક મૂલ્યાંકન, પરિપક્વતા વર્ગીકરણ અને ટૂલ-અજ્ઞેયી
પુનરાવર્તન પ્લાન માટે,
[Quality Gate Playbook](../ops/QUALITY_GATE_PLAYBOOK.md) જુઓ.

---

## ગેટ ઇન્વેન્ટરી અને એક્ઝિક્યુશન પ્રોફાઇલ્સ

### ઉમેદવાર સ્વીકૃતિ

CI અને Quality Gates વર્કફ્લો દરેક એક સ્થિર ચુકાદો ઉત્પન્ન કરે છે: `Gate / CI` અને
`Gate / Quality`. તેમની વર્ઝનવાળી સ્વીકૃતિ નીતિ દરેક અપસ્ટ્રીમ જૉબને
આવશ્યક અથવા સલાહકારી તરીકે સૂચિબદ્ધ કરે છે. લાગુ પડતી આવશ્યક જૉબ સફળ થવી જ જોઈએ:
ગેરહાજર, રદ થયેલ, છોડાયેલ, બાકી અને અજ્ઞાત પરિણામો PASS સ્થાપિત કરી શકતા નથી. માત્ર
દસ્તાવેજો અથવા માત્ર કૅટલૉગનું માન્ય વર્ગીકરણ કોડ લેનને બિનલાગુ બનાવી શકે છે;
ડ્રાફ્ટ PR સ્વીકૃત ઉમેદવાર નથી. `hotfix` લેબલ પુરાવાની આવશ્યકતા દૂર કરતું નથી.

બંને વર્કફ્લો PRs અને main/release બ્રાન્ચ પરના pushes, મેન્યુઅલ dispatch અને
merge-group ઇવેન્ટ્સને આવરે છે. Push, dispatch અને merge-group સંપૂર્ણ પસંદગી ચલાવે છે. Forks
અને merge groups એવી જૉબ્સ માટે hosted runners વાપરે છે જે અન્યથા self-hosted
runners પસંદ કરે છે; rollout પહેલાં પૂરતી hosted ક્ષમતાની ચકાસણી કરવી આવશ્યક છે.

દરેક JSON રસીદ check out કરાયેલ SHA, workflow run અને attempt ઓળખાવે છે.
CLI checkout/event SHA mismatchને નકારે છે. Workflow tests નીતિના સભ્યપદને
ચુકાદા જૉબની `needs` યાદી સાથે જોડે છે, જેથી નવી અથવા દૂર કરાયેલી lane ચૂપચાપ અદૃશ્ય ન થઈ શકે.
રસીદો તેમના પોતાના workflowને આવરે છે, publication, deployment અથવા હાલના
advisory scannerના આંતરિક ભાગોને નહીં. Branch rulesમાં બંને check names સક્રિય કરવા એ
એક અલગ વહીવટી ફેરફાર છે; આ જૉબ્સ ઉમેરવાથી branch પોતે સુરક્ષિત થતી નથી.

### સ્ટેટિક સ્કૅન ઇન્વેન્ટરી

વર્ઝનવાળી npm-alias ઇન્વેન્ટરી અને static-scan સભ્યપદ
`config/quality/gate-manifest.json`માં છે. Script names અને exact commandsને
`package.json` સામે માન્ય કરવા `npm run check:gate-manifest` ચલાવો; ઉમેરાઓ, દૂર કરણો અને
command drift સ્થાનિક hook તેમજ CIમાંની change-classification jobs બંનેને નિષ્ફળ કરે છે.
Alias એ workflow job, matrix instance અથવા test case નથી: આ ગણતરીઓને
પરસ્પર સમકક્ષ તરીકે રજૂ કરવી જોઈએ નહીં.

પસંદ કરેલા aliasesને ચલાવ્યા વિના તપાસવા `npm run quality:scan -- --list` અથવા
`npm run quality:scan:fast -- --list` વાપરો. Runner npm entrypointને ચલાવે છે,
તેથી તેનો runtime (જ્યાં ગોઠવેલું હોય ત્યાં Bun સહિત) જળવાઈ રહે છે.
Manifest આ profilesની બહારના aliasesને અલગથી ચલાવવામાં આવતા તરીકે નોંધે છે, અને
read-only scan profilesમાં maintenance commands પ્રતિબંધિત છે.

આ profiles માત્ર static scanને આવરે છે. તેઓ product tests,
coverage, packaging, external checks અથવા ઉમેદવારની સંપૂર્ણ release acceptanceને પ્રમાણિત કરતા નથી.
Workflow admission લિંક કરેલ `config/quality/admission-policy.json` અને
`scripts/quality/admission-verdict.mjs` વાપરે છે. Release-observer profiles અલગ જ રહે છે;
તેમના લાગુ પડતા checks અને receiptsને સ્વતંત્ર રીતે તપાસો. નીચે આપેલી ગદ્યરૂપ
ઇન્વેન્ટરી એક સંદર્ભ છે, કોઈ gate ખરેખર ચાલ્યું હતું તેનો પુરાવો નથી.

Scripts `scripts/check/` (policy gates) અને `scripts/quality/` (ratchet engine) હેઠળ છે.
CI માટેનું અધિકૃત સ્રોત `.github/workflows/ci.yml` છે.

### Release PR ફાસ્ટ-પાથ (`quality.yml`)

`.github/workflows/quality.yml` main/release PRs, protected-branch
pushes, dispatch અને merge groups પર CIને પૂરક બને છે. PRs path-filtered ઝડપી checks વાપરે છે. કાયમી રીતે
અક્ષમ કરાયેલ duplicate build દૂર કરવામાં આવ્યું હતું; વાસ્તવિક build/package/boot checks CIમાં યથાવત્ છે.

| જૉબ                                              | વ્યાપ                                                                                                                                                                                                        | અવરોધક         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- |
| `Docs Gates (fast-path)`                         | Docs/code PRs; API docs refs અને docs-all                                                                                                                                                                    | હા             |
| `Fast Quality Gates`                             | Code PRs; static checks, typecheck, dashboard typecheck, impacted unit tests                                                                                                                                 | હા             |
| `Forgotten sibling tests`                        | Code PRs; બદલાયેલા modulesથી static consumers અને candidate sibling tests સુધી ટ્રેસ; barrel અને dynamic-import pathsને સંદર્ભિત allowlist exceptions સાથે સલાહકારી diagnostics તરીકે રિપોર્ટ કરવામાં આવે છે | **સલાહકારી**   |
| `Vitest (fast-path)`                             | Code PRs; ઝડપી vitest suite                                                                                                                                                                                  | હા             |
| `Unit Tests fast-path`                           | Code PRs; 4-shard unit suite                                                                                                                                                                                 | હા             |
| `No new ESLint warnings`                         | Code PRs; suppressions-aware lint guard                                                                                                                                                                      | હા, forks સહિત |
| `Merge integrity (changelog + generated skills)` | Non-draft PRs; changelog અને generated skill sync                                                                                                                                                            | હા, forks સહિત |

#### ભૂલી જવાયેલી sibling testsનો રિપોર્ટ

`npm run check:forgotten-sibling-tests` test-impact map પાછળના import resolverનો પુનઃઉપયોગ કરે છે.
દરેક બદલાયેલા production module માટે, જ્યારે candidate
test pull-request diffમાં ગેરહાજર હોય ત્યારે તે નિર્ધારિત
`changed module/symbol -> static consumer -> candidate sibling test` સાંકળો રિપોર્ટ કરે છે. Markdown summary અને JSON resultને
કોઈપણ blocking rollout પહેલાં calibration માટે `forgotten-sibling-tests` workflow artifact તરીકે જાળવી રાખવામાં આવે છે.

Barrel re-exports અને dynamic imports માત્ર resolution diagnostics છે; તેઓ ક્યારેય
અવરોધક finding બનાવતા નથી. સમીક્ષા કરેલા અપવાદો
`config/quality/forgotten-sibling-allowlist.json`માં રહે છે. દરેક entryમાં consumer અને candidate
testનું નામ, ચોક્કસ તર્ક અને GitHub issue અથવા pull requestની link હોવી આવશ્યક છે. ખામીયુક્ત entries
fail closed થાય છે. અપવાદો કાઢી નાખવામાં આવેલા candidate test અથવા `.skip`/`.todo` ઉમેરતા diffને
દબાવી શકતા નથી; assertion weakening અને અન્ય maskingની જવાબદારી સ્વતંત્ર રીતે અવરોધક
`check:test-masking` gateની રહે છે.

### Job: `lint`

`main` માટેની દરેક PR પર ચાલે છે. નિષ્ફળતા પર mergeને અવરોધે છે.

| Script (`npm run ...`)            | શું માન્ય કરે છે                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | અવરોધક                                  |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `check:node-runtime`              | Node.js version સમર્થિત rangeમાં છે                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | હા                                      |
| `check:cycles`                    | `src/` + `open-sse/`; AST (`import` / `export`, tsconfig `paths`). `check:cycles`: `cycles > 0 → exit 1`; `SCC → stderr` (#15281). `check:cycles:ratchet` (જે CI ચલાવે છે) ત્યારે અવરોધે છે જ્યારે count `quality-baseline.json`માંની `metrics.cycles` ceilingને વટાવે — હાલમાં 14, `direction: down`, તેથી તે માત્ર ઘટી શકે છે (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | હા (ratchet)                            |
| `check:boundary`                  | `open-sse → src` coupling: engineમાંથી appમાં થતા અનન્ય file-to-file imports (`scripts/quality/measure-boundary.mjs`; edge list એ v4 core/module-split remediation backlog છે). Bare = સલાહરૂપ report (`quality:boundary` જેવો જ). `check:boundary:ratchet` (જે CI ચલાવે છે અને `quality.yml` fast-gates ratchet loopમાં પણ છે) ત્યારે અવરોધે છે જ્યારે ગણતરી `quality-baseline.json`માં રહેલી `metrics.boundaryOpenSseToSrc` ceiling કરતાં વધી જાય — માપવામાં આવેલા 771 પર seed કરેલું, `direction: down`; `--update` તેને માત્ર ઘટાડે છે; PRs પર base-relative (`--base-ref`, નીચે જુઓ)                                                                                                                                                                                                                                                                                                                      | હા (ratchet)                            |
| `check:route-validation:t06`      | તમામ routes પર Zod schemas હાજર છે (Tier 6 policy)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | હા                                      |
| `check:any-budget:t11`            | `@ts-expect-error // any` ની સંખ્યા બજેટ કરતાં વધુ નથી (Tier 11 catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | હા                                      |
| `check:provider-consistency`      | `providers.ts` માંના દરેક provider માટે `providerRegistry.ts` માં મેળ ખાતી entry છે (અને તેનાથી વિપરીત પણ, allowlist ની મર્યાદામાં)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | હા                                      |
| `check:model-lifecycle`           | હાથથી જાળવવામાં આવતા ત્રણ routing tables, ચેક-ઇન કરેલા lifecycle snapshot (#11503) સાથે સુસંગત રહે છે: `FITNESS_TABLE` (`taskFitness.ts`) એવા કોઈ નિવૃત્ત id ને score આપતું નથી જેને `REGISTRY` route કરી શકે; દરેક `BUILT_IN_ALIASES` target `REGISTRY` માં હાજર છે અને retired-id snapshot માં ગેરહાજર છે; `REGISTRY` માં હજુ રહેલા દરેક નિવૃત્ત id ને forward કરવામાં આવે છે અથવા `allowedRetiredInCatalog` માં સૂચિબદ્ધ કરવામાં આવે છે; અને કોઈ `DEFAULT_DEGRADATION_MAP` source અથવા target તે snapshot માં નિવૃત્ત તરીકે દેખાતું નથી. આ સાબિત કરતું નથી કે કોઈ model ને હાલમાં live upstream દ્વારા સેવા આપવામાં આવે છે. Offline — `config/quality/model-lifecycle.json` સામે સરખામણી કરે છે, જેને `npm run quality:refresh-model-lifecycle` વડે હાથથી refresh કરવામાં આવે છે (network; CI સાથે જોડાયેલ નથી). `allowedRetiredInCatalog` એ burn-down ratchet છે: tracking issue હોય ત્યારે જ entry ઉમેરો. | હા                                      |
| `check:fetch-targets`             | client-side `src/` માંનો દરેક `fetch("/api/...")` વાસ્તવિક `route.ts` પર resolve થાય છે                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | હા                                      |
| `check:deps`                      | repo માંના દરેક `package.json` માંની બધી `npm install` કરી શકાય તેવી deps `dependency-allowlist.json` માં છે; નવા unpinned અથવા slopsquatted packages ને flag કરવામાં આવે છે                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | હા                                      |
| `audit:deps`                      | `npm audit` (root + electron) — કોઈ high/critical advisories નથી (osv `check:vuln-ratchet` સાથે overlap થાય છે; Rationalization Backlog જુઓ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | હા                                      |
| `check:lockfile`                  | `package-lock.json` ની અખંડિતતા — https રજિસ્ટ્રી, અખંડિતતા હેશ, કોઈ હોસ્ટ ઓવરરાઇડ નહીં                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | હા                                      |
| `check:licenses`                  | પ્રોડક્શન ડિપેન્ડન્સીઓ માટે SPDX લાઇસન્સ અનુમતિસૂચિ                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | હા                                      |
| `check:tracked-artifacts`         | કોઈ બિલ્ડ આર્ટિફેક્ટ્સ / કમિટ કરેલી `node_modules` સિમલિંક્સ નહીં (husky pre-commit માં પણ ચાલે છે; pre-push ઇરાદાપૂર્વક હળવું રાખવામાં આવ્યું છે — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | હા                                      |
| `check:ai-attribution`            | PR કમિટ્સ, શીર્ષક અથવા મુખ્ય ભાગમાં કોઈ AI/bot `Co-Authored-By` ટ્રેલર અથવા AI-જનરેશન ફૂટર નહીં — કડક નિયમ #16 (`quality.yml` ના PR→`release/**` માટેના fast-gates લૂપમાં — ઇવેન્ટ પેલોડ વાંચે છે, PR ન હોય ત્યારે કંઈ કરતું નથી — અને `ci.yml` lint માં PR→`main` માટેનું માત્ર-PR પગલું; husky `commit-msg` હૂક પણ; માનવીય સહ-લેખકોને મંજૂરી છે; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `check:vitest-exclusions`         | દરેક Vitest બાકાતીકરણમાં ટ્રેકિંગ ઇશ્યૂનો ઉલ્લેખ હોવો જોઈએ અને તે `config/quality/vitest-exclusions.json` માં દેખાવું જોઈએ (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | હા                                      |
| `check:file-size`                 | સોર્સ ફાઇલો (`src/`, `open-sse/`, `electron/`, `bin/` માં `.ts`/`.tsx`) `cap` ની અંદર અને ટેસ્ટ ફાઇલો (`*.test.ts(x)`) `testCap` ની અંદર રહેવી જોઈએ; `file-size-baseline.json` માં ફ્રીઝ કરેલી ફાઇલો (`frozen` / `testFrozen`) તેમના નોંધાયેલા કદથી વધુ વધવી જોઈએ નહીં                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | હા                                      |
| `check:error-helper`              | executors/handlers માંના ભૂલ પ્રતિસાદો `buildErrorBody()` / `sanitizeErrorMessage()` નો ઉપયોગ કરે છે (કડક નિયમ #12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | હા                                      |
| `check:migration-numbering`       | Migration SQL ફાઇલો ક્રમિક રીતે ક્રમાંકિત છે, કોઈ ખાલી ક્રમાંક કે ડુપ્લિકેટ નથી                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | હા                                      |
| `check:public-creds`              | `publicCreds.ts` ની બહાર કોઈ શાબ્દિક OAuth `client_id`/`client_secret` અથવા Firebase Web કી નથી (કડક નિયમ #11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | હા                                      |
| `check:db-rules`                  | `src/lib/db/` મોડ્યુલોની બહાર કોઈ raw SQL નથી; `localDb.ts` માંથી કોઈ barrel-imports નથી (કડક નિયમો #2/#5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | હા                                      |
| `check:known-symbols`             | તેમની dispatch કોષ્ટકોમાં નોંધાયેલા provider executors, routing strategies અને translators ડિસ્ક પરની ફાઇલો સાથે મેળ ખાય છે — કોઈ અનાથ કે અઘોષિત symbols નથી                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | હા                                      |
| `check:route-guard-membership`    | child process શરૂ કરતો દરેક route `isLocalOnlyPath()` દ્વારા વર્ગીકૃત થયેલો છે (કડક નિયમો #15/#17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | હા                                      |
| `check:test-discovery`            | રેપોમાંની દરેક `*.test.ts` / `*.spec.ts` ફાઇલ ઓછામાં ઓછા એક ટેસ્ટ રનર દ્વારા એકત્રિત થાય છે (રેચેટ: `test-discovery-baseline.json`માંની અનાથ સૂચિ ફક્ત ઘટી શકે છે)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | હા                                      |
| `check:agent-skills-sync`         | જનરેટ કરેલી agent-skills આર્ટિફેક્ટ્સ તેમના સ્રોત કૅટલોગ સાથે મેળ ખાય છે (કોઈ વિચલન નથી)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `check:provider-asset-provenance` | પ્રદાતા લોગો/એસેટ્સ માટે નોંધાયેલ ઉદ્ભવ એન્ટ્રી હોય છે                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `lint:json`                       | JSON કૉન્ફિગ ફાઇલો પાર્સ થાય છે અને રેપોના લિન્ટ નિયમોનું પાલન કરે છે                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `typecheck:core`                  | ભૂલો વિના TypeScript કમ્પાઇલેશન (ફક્ત સલાહરૂપ ચેતવણીઓ)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | હા                                      |
| `typecheck:noimplicit:core`       | કડક `noImplicitAny` — ભવિષ્યલક્ષી; અગાઉથી અસ્તિત્વમાં રહેલી ઘણી કૉલ સાઇટ્સને હજી પણ એનોટેશન્સની જરૂર છે                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **સલાહરૂપ** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` સુધી મર્યાદિત `tsc` (#7033) — `typecheck:core`ની કાળજીપૂર્વક પસંદ કરેલી 27-ફાઇલની મંજૂર સૂચિમાં કોઈ dashboard TSX સામેલ નથી, અને `next build` પણ ક્યારેય તેનું ટાઇપ-ચેકિંગ કરતું નથી (`next.config.mjs`માં `ignoreBuildErrors: true` સેટ છે), તેથી ત્યાંની અનાથ-આઇડેન્ટિફાયર રિગ્રેશન્સ (#6625/#6909) CI માટે અદૃશ્ય હતી. સ્થિર કરેલી પ્રતિ-ફાઇલ/પ્રતિ-TS-કોડ ગણતરીની બેઝલાઇન (`config/quality/dashboard-typecheck-baseline.json`, `check:known-symbols` જેવી જ જૂની-બેઝલાઇન અમલીકરણ પદ્ધતિ) સામે ડિફ કરવામાં આવે છે — બેઝલાઇનમાં રહેલી ગણતરી કરતાં ફક્ત નવી ભૂલો જ ગેટને નિષ્ફળ બનાવે છે; અગાઉથી અસ્તિત્વમાં રહેલી ભૂલ સુધારાય ત્યારે `--update` વડે રેચેટ ઘટાડો.                                                                                                                                                                                                                    | હા                                      |

### જૉબ: `quality-gate`

`test-coverage` પછી ચાલે છે. નિષ્ફળતા થાય તો મર્જને અવરોધે છે.

| સ્ક્રિપ્ટ                    | ચકાસે છે                                                                                                                                                                       | અવરોધક            |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| `quality:collect`            | `quality-metrics.json` ઉત્પન્ન કરે છે (ESLint ચેતવણીઓની સંખ્યા, મર્જ કરેલા શાર્ડ રિપોર્ટમાંથી કવરેજ)                                                                           | હા (રૅચેટ પહેલાં) |
| `quality:ratchet`            | `quality-baseline.json` માંની દરેક મેટ્રિક પાછળ ગઈ નથી (ESLint ચેતવણીઓ ≤ બેઝલાઇન; કવરેજ ≥ બેઝલાઇન)                                                                             | હા                |
| `check:duplication`          | કોડ ડુપ્લિકેશન (jscpd@4) `quality-baseline.json` માંની બેઝલાઇનથી વધુ નથી                                                                                                       | હા                |
| `check:complexity`           | ફાઇલ-સ્તરની સાયક્લોમેટિક જટિલતા મર્યાદાથી વધુ નથી (મુખ્ય ESLint `complexity` + `max-lines-per-function`)                                                                       | હા                |
| `check:cognitive-complexity` | કૉગ્નિટિવ જટિલતા રૅચેટ (`eslint-plugin-sonarjs`) — અલગ ESLint પાસ; CI બંનેને એક જ `check:complexity-ratchets` પગલા તરીકે મર્જ કરીને ચલાવે છે                                   | હા                |
| `check:dead-code`            | વણવપરાયેલા exports / ફાઇલોનું રૅચેટ (knip) બેઝલાઇનની સરખામણીએ પાછળ જતું નથી                                                                                                    | હા                |
| `check:compression-budget`   | કમ્પ્રેશન બેન્ચમાર્ક બજેટ — દરેક એન્જિન માટેની ટોકન-બચતની લઘુતમ મર્યાદા પાછળ જવી ન જોઈએ                                                                                        | હા                |
| `check:type-coverage`        | ટાઇપ કરેલી ટકાવારીનું રૅચેટ (`type-coverage`) પાછળ જતું નથી; મોટાભાગે `typecheck:noimplicit:core` ને આવરી લે છે                                                                | હા                |
| `check:codeql-ratchet`       | ખુલ્લી CodeQL ચેતવણીઓની સંખ્યા પાછળ જતી નથી (`gh api` દ્વારા વાંચે છે; ટોકન વિના સુગમતાપૂર્વક સ્કિપ કરે છે) — રિફ્રેશ આવર્તન અને મેન્યુઅલ ટ્રિગર માટે: નીચે "CodeQL રૅચેટ" જુઓ | હા                |

### જૉબ: `quality-extended`

સમગ્ર જૉબ સલાહાત્મક છે (`continue-on-error: true`). npm-આધારિત રૅચેટ્સ
વાસ્તવમાં ચાલે છે; બાહ્ય સ્કેનર્સ `gh release download` દ્વારા ઇન્સ્ટોલ થાય છે અને જ્યારે
બાઇનરી હજી પણ ગેરહાજર હોય ત્યારે સ્વયં સ્કિપ થાય છે (exit 0).

| સ્ક્રિપ્ટ                | ચકાસે છે                                                                                                                                                                                                          | અવરોધક                                            |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `check:circular-deps`    | કોઈ સર્ક્યુલર ડિપેન્ડન્સી નથી (dpdm)                                                                                                                                                                              | **સલાહાત્મક**                                     |
| `check:bundle-size`      | બંડલનું કદ મર્યાદાથી વધુ નથી                                                                                                                                                                                      | **સલાહાત્મક**                                     |
| `check:secrets`          | સિક્રેટ સ્કેનિંગ (gitleaks) — બાઇનરી ગેરહાજર હોય તો સ્કિપ કરે છે                                                                                                                                                  | **સલાહાત્મક**                                     |
| `check:vuln-ratchet`     | ડિપેન્ડન્સીની નબળાઈઓ (osv-scanner) પાછળ જતી નથી — બાઇનરી ગેરહાજર હોય તો સ્કિપ કરે છે                                                                                                                              | **સલાહાત્મક**                                     |
| `check:workflows`        | વર્કફ્લો લિન્ટ (actionlint + zizmor); ગેરહાજર/ખામીયુક્ત સ્કેનર્સ, અમાન્ય રિપોર્ટ્સ અથવા ગેરહાજર રૅચેટ બેઝલાઇનને કારણે INCOMPLETE તરીકે નિષ્ફળ થાય છે. માન્ય તારણો પસંદ કરેલી કડક/સલાહાત્મક/રૅચેટ નીતિને અનુસરે છે | એક્ઝિક્યુશન આવશ્યક; CI માં zizmor રૅચેટ અવરોધક છે |
| `check:openapi-breaking` | બેઝ બ્રાન્ચની સરખામણીએ જાહેર API કરાર (`openapi.yaml`) માં ભંગકારક ફેરફારો (oasdiff) — `openapiBreaking=N` ઉત્પન્ન કરે છે; oasdiff ગેરહાજર હોય અથવા બેઝ સ્પેક ઉકેલી ન શકાય તો સ્કિપ કરે છે                        | **સલાહાત્મક**                                     |

### જૉબ: `docs-sync-strict`

`main` માટેની દરેક PR પર ચાલે છે. નિષ્ફળતા થાય તો મર્જને અવરોધે છે.

| સ્ક્રિપ્ટ                      | શું ચકાસે છે                                                                                                                                                     | અવરોધક                        |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- |
| `check:docs-all`               | નીચેના 6 પેટા-ગેટને ક્રમશઃ ચલાવતો મેટા-ગેટ                                                                                                                       | હા                            |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt સંસ્કરણની સુસંગતતા                                                                                                                 | હા                            |
| ↳ `check:docs-counts`          | ગદ્યમાં દર્શાવેલી સંખ્યાઓ (પ્રદાતાઓની સંખ્યા, માઇગ્રેશનની સંખ્યા વગેરે) વાસ્તવિક સંખ્યાઓની રૅચેટ વિન્ડોની અંદર છે                                                | હા                            |
| ↳ `check:env-doc-sync`         | `.env.example` માંનો દરેક env var દસ્તાવેજોના કોષ્ટકમાં દસ્તાવેજીકૃત છે અને તેનાથી વિપરીત પણ સાચું છે                                                            | હા                            |
| ↳ `check:deprecated-versions`  | દસ્તાવેજોમાં કોઈ નાપસંદ કરાયેલ સંસ્કરણ સ્ટ્રિંગ નથી                                                                                                              | હા                            |
| ↳ `check:doc-links`            | દસ્તાવેજોમાંની આંતરિક markdown લિંક્સ વાસ્તવિક ફાઇલો તરફ દોરી જાય છે (`[text]`/`(path)` સ્વરૂપ)                                                                  | હા                            |
| ↳ `check:fabricated-docs`      | દસ્તાવેજોમાં ઉલ્લેખિત routes, env vars, CLI commands, hook names અને file paths કોડબેઝમાં અસ્તિત્વ ધરાવે છે. `--strict` દ્વારા સખત ગેટ; ફ્લૅગ વિના નરમ નિષ્ફળતા. | હા (CI માં `--strict` દ્વારા) |
| `check:cli-i18n`               | CLI command strings તમામ i18n locale files માં હાજર છે                                                                                                           | હા                            |
| `check:openapi-coverage`       | OpenAPI spec વાસ્તવિક routes માટેના ઓછામાં ઓછા રૅચેટ કરેલા ન્યૂનતમ સ્તરને આવરી લે છે                                                                             | હા                            |
| `check:openapi-security-tiers` | `openapi.yaml` માંની security tier annotations `routeGuard.ts` classifications સાથે સુસંગત છે                                                                    | **સલાહરૂપ**                   |
| `check:openapi-routes`         | `openapi.yaml` માંનો દરેક path વાસ્તવિક `route.ts` તરફ દોરી જાય છે (ભ્રમ-વિરોધી)                                                                                 | હા                            |
| `check:docs-symbols`           | `docs/**/*.md` માંનો દરેક `/api/...` સંદર્ભ વાસ્તવિક `route.ts` તરફ દોરી જાય છે (ભ્રમ-વિરોધી)                                                                    | હા                            |
| `i18n translation drift`       | i18n locale files માં અનુવાદ ન થયેલી keys — ફક્ત ચેતવણી                                                                                                          | **સલાહરૂપ**                   |

### જોબ: `i18n-ui-coverage`

| સ્ક્રિપ્ટ                         | શું ચકાસે છે                                                                                                                                                                           | અવરોધક      |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `check-ui-keys-coverage` (inline) | UI i18n key coverage ≥ 65% છે                                                                                                                                                          | હા          |
| `check-ui-value-drift` (inline)   | ફરી લખાયેલું અંગ્રેજી **value** કોઈ જૂનો અનુવાદ પાછળ છોડતું નથી                                                                                                                        | હા          |
| `check-new-key-coverage` (inline) | **નવી** અંગ્રેજી key નો દરેક locale માં અનુવાદ થયેલો છે — `__MISSING__:` marker નામંજૂર કરવામાં આવે છે                                                                                 | હા          |
| `check-translation-ratio`         | locale દીઠ વાસ્તવિક અનુવાદનો ગુણોત્તર (allowlist બહાર અંગ્રેજી સાથે સમાન / placeholder / missing leaves) `config/quality/i18n-translation-baseline.json` + slack કરતાં વધુ ન હોવો જોઈએ | **સલાહરૂપ** |

`fetch-depth: 0` જરૂરી છે — value-drift gate merge base સામે `en.json` નો diff કરે છે.

#### `check-ui-value-drift` — જૂના અનુવાદનો ગેટ

આ એક એવી i18n regression પકડે છે જેને અન્ય gates માળખાકીય રીતે જોઈ શકતા નથી: કોઈ અંગ્રેજી value
ફરી લખાય છે અને _અગાઉના_ અંગ્રેજીમાંથી બનાવેલા અનુવાદો યથાવત્ રહી જાય છે, જેથી
બિન-અંગ્રેજી વપરાશકર્તાઓ આત્મવિશ્વાસપૂર્વક લખાયેલી, પરંતુ હવે ખોટી નકલ વાંચતા રહે છે.

આ ખરેખર રિલીઝ થયું હતું. Antigravity login helper ઉમેરવામાં આવ્યું ત્યારે (#5203)
`oauthModal.googleOAuthWarning` ફરી લખવામાં આવ્યું હતું; **43 માંથી 39 locales** માં operators ને "સંપૂર્ણ
URL કૉપિ કરીને તેને નીચે પેસ્ટ કરો" એવું કહેતો ટેક્સ્ટ યથાવત્ રહ્યો — એવી પ્રક્રિયા જે તે provider માટે પૂર્ણ થઈ શકતી નથી. આ
#8463 સુધી ધ્યાનમાં આવ્યું નહોતું, કારણ કે:

- `sync-ui-keys` ફક્ત **ગેરહાજર** keys જ પાછી ભરે છે, **જૂની** keys ક્યારેય નહીં;
- `check-ui-keys-coverage` key ની _હાજરી_ ગણે છે, તેથી જૂનો અનુવાદ પણ આવરી લેવાયો હોવાનું ગણાય છે;
- `check-translation-drift` `docs/i18n/<locale>/**.md` documentation mirrors ને ટ્રૅક કરે છે —
  તે `src/i18n/messages/*.json` ક્યારેય વાંચતું નથી. 2026-09 re-sync થી job `docs-sync-strict` માં અવરોધક:
  કોઈ મુખ્ય દસ્તાવેજ સંપાદિત કરો → `npm run i18n:run -- --files=<doc>` (વિભાગ-સ્તરનું, ઓછા ખર્ચાળ).

**ડિફ-જાગૃત, બેઝલાઇન-સમર્થિત નહીં.** તે મર્જ બેઝ પરના `en.json`ની વર્કિંગ ટ્રી સાથે
સરખામણી કરે છે; જે દરેક કીનું અંગ્રેજી મૂલ્ય બદલાયું હોય, તેના માટે અસ્પર્શિત અનુવાદ
ધરાવતું કોઈપણ લોકેલ જૂનું ગણાય છે. આ ઇરાદાપૂર્વક **પહેલેથી અસ્તિત્વમાં રહેલું ઋણ સ્થિર કરે છે** — લાંબા સમયથી
ચાલતા અનુવાદનું મૂળ કયા જૂના અંગ્રેજી લખાણમાં છે તે ડિફ જાહેર કરી શકતું નથી, તેથી ગેટ ફક્ત
વર્તમાન ફેરફાર જેને સ્પર્શે છે તેનું જ મૂલ્યાંકન કરે છે. વિકલ્પ (પ્રતિ-કી હૅશ બેઝલાઇન) માટે
~600 KBની જનરેટ કરેલી ફાઇલની જરૂર પડે, જે હાલની સૌથી મોટી બેઝલાઇન કરતાં 3× મોટી હોય અને દરેક i18n PR પર બદલાતી રહે.

તેને સંતોષવાની બે રીતો:

1. અસરગ્રસ્ત અનુવાદો અપડેટ કરો, અથવા
2. તેમને `__MISSING__:<new english>` પર સેટ કરો — ત્યારબાદ રનટાઇમ સુધારેલું અંગ્રેજી પ્રદાન કરે છે
   (`src/i18n/request.ts::deepMergeFallback`, #7258) અને કી અનુવાદ માટે કતારમાં ઉમેરાય છે.

જો સ્ટ્રિંગનો **અર્થ** બદલાયો હોય, તો **કીનું નામ બદલવાનું** પસંદ કરો: નવી કી
જૂનો અનુવાદ વારસામાં મેળવી શકતી નથી. #8463માં આ જ પેટર્નનો ઉપયોગ થયો હતો.

```bash
npm run i18n:check-value-drift          # કડક (CI જે ચલાવે છે)
npm run i18n:check-value-drift:warn     # ફક્ત અહેવાલ
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

જ્યારે બેઝ કૅટલૉગ વાંચી શકાતો ન હોય (બેઝ ref વિનાનો શેલો
ક્લોન), ત્યારે `SKIP reason=base-unresolved` સાથે 0 પર બહાર નીકળે છે, જે `check-openapi-breaking`ના વર્તનને અનુસરે છે.

### જૉબ: `i18n`

સંપૂર્ણ i18n માન્યતા મેટ્રિક્સ (દરેક લોકેલ દીઠ એક જૉબ). આખી જૉબ સલાહરૂપ છે.

| સ્ક્રિપ્ટ                       | શું માન્ય કરે છે             | અવરોધક                                             |
| ------------------------------- | ---------------------------- | -------------------------------------------------- |
| `validate_translation.py quick` | લોકેલ દીઠ અનુવાદની સંપૂર્ણતા | **સલાહરૂપ** (આખી જૉબ પર `continue-on-error: true`) |

### જૉબ: `pr-test-policy`

ફક્ત પુલ રિક્વેસ્ટ્સ પર ચાલે છે.

| સ્ક્રિપ્ટ              | શું માન્ય કરે છે                                                                                                                         | અવરોધક |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| `check:pr-test-policy` | `src/`, `open-sse/`, `electron/`, અથવા `bin/`માં પ્રોડક્શન કોડ બદલતા PRમાં ટેસ્ટ ઉમેરવા અથવા અપડેટ કરવા આવશ્યક છે (કડક નિયમ #8)          | હા     |
| `check:test-masking`   | બદલાયેલી ટેસ્ટ ફાઇલો કુલ assertની સંખ્યા ઘટાડતી નથી અથવા `assert.ok(true)` જેવી નિરર્થક રીતે હંમેશાં સાચી અભિવ્યક્તિઓ ઉમેરતી નથી         | હા     |
| `check:pr-evidence`    | PRનું વર્ણન ફેરફાર માટે ટેસ્ટ/VPS પુરાવાનો ઉલ્લેખ કરે છે (PRના લખાણમાં grep કરીને કડક નિયમ #18ને યાંત્રિક બનાવે છે — નાજુક, Backlog જુઓ) | હા     |

### જૉબ: `test-vitest`

`build` પછી ચાલે છે. નિષ્ફળતા આવે તો મર્જને અવરોધે છે.

| સ્યુટ            | શું માન્ય કરે છે                                   | અવરોધક                                                                                                                                      |
| ---------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCP સર્વર (110 ટૂલ્સ), autoCombo, કૅશ — vitest રનર | હા                                                                                                                                          |
| `test:vitest:ui` | UI કમ્પોનેન્ટ ટેસ્ટ્સ — vitest રનર                 | **અવરોધક** — પહેલેથી અસ્તિત્વમાં રહેલી નિષ્ફળતાઓ `vitest.config.ts`માં સ્પષ્ટપણે બાકાત રાખવામાં આવી છે; નવી નિષ્ફળતાઓ જૉબને નિષ્ફળ બનાવે છે |

### રાત્રિકાલીન વર્કફ્લોઝ (નિર્ધારિત, સલાહરૂપ)

આ cron શેડ્યૂલ પર (અને `workflow_dispatch` દ્વારા) ચાલે છે, PR પર ક્યારેય નહીં. બધા સલાહરૂપ છે.

| વર્કફ્લો               | શું માન્ય કરે છે                                                                                                                                            | અવરોધક      |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `nightly-property`     | રૅન્ડમ સીડ + વધુ રન સંખ્યા સાથે fast-check પ્રોપર્ટી ટેસ્ટ્સ                                                                                                | **સલાહરૂપ** |
| `nightly-resilience`   | હીપ-ગ્રોથ ગેટ, કેઓસ ફૉલ્ટ-ઇન્જેક્શન, k6 લોડ/સોક                                                                                                             | **સલાહરૂપ** |
| `nightly-llm-security` | promptfoo ઇન્જેક્શન ગાર્ડ (બ્લોક મોડ) + garak પ્રોબ્સ (પ્રોવાઇડર સિક્રેટ વિના છોડી દેવાય છે)                                                                | **સલાહરૂપ** |
| `nightly-schemathesis` | `docs/openapi.yaml`નો ઉપયોગ કરીને લાઇવ OmniRoute સામે OpenAPI કોન્ટ્રેક્ટ ફઝિંગ (schemathesis) — સ્પેક ઉલ્લંઘનો / અનહેન્ડલ્ડ 500s દર્શાવે છે (તબક્કો 8 B.4) | **સલાહરૂપ** |
| `nightly-mutation`     | ઝડપી યુનિટ લેન પર Stryker મ્યુટેશન-ટેસ્ટિંગ સ્કોર — બચી ગયેલા મ્યુટન્ટ્સ નબળા asserts દર્શાવે છે                                                            | **સલાહરૂપ** |
| `nightly-compat`       | સપોર્ટેડ `engines.node` રેન્જોમાં Node એન્જિન સુસંગતતા મેટ્રિક્સ                                                                                            | **સલાહરૂપ** |

કાર્યક્ષમતા બેઝલાઇન્સ (હીપ, TTFB, બિલ્ડ સમય) નોંધવામાં આવે છે, પરંતુ તેના આધારે ગેટ લાગુ પડતો નથી: [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`) જુઓ.

---

## વેલોસિટી તબક્કો (2026-08-30 → v4.0 LTS): દરેક બેઝલાઇન 20% ઢીલી કરવામાં આવી

માલિકનો નિર્ણય (2026-08-30): v4.0 મોડ્યુલરાઇઝેશન સુધી, ટેક્નિકલ ડેટની મર્યાદા જાળવવા કરતાં
રિલીઝની ઝડપ વધુ મહત્ત્વપૂર્ણ છે. દરેક **આંકડાકીય** રૅચેટ બેઝલાઇનને એક જ
ઑડિટ કરી શકાય તેવી પ્રક્રિયામાં 20% ઢીલી કરવામાં આવી હતી અને આ તબક્કો `config/quality/quality-baseline.json`માં જાહેર કરવામાં આવ્યો છે:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| શું બદલાયું                                                                                                                                                                                                                             | ક્યાં                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — ઓછી સંખ્યા વધુ સારી હોય તેવા કાઉન્ટ ×1.2, વધુ ટકાવારી વધુ સારી હોય તેવા મૂલ્યો ÷1.2 (કવરેજની લઘુતમ મર્યાદા 60 જ રાખવામાં આવી, `eslintErrors` 0 જ રહે છે, `eslintWarnings` 0 → સ્થિર કરેલી suppression સંખ્યાના 20%) | `quality-baseline.json` (`_relax_velocity_2026_08_30` નોંધ દરેક પહેલાંનો → પછીનો મૂલ્ય દર્શાવે છે)     |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                        | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, દરેક `frozen[*]` / `testFrozen[*]` લાઇન મર્યાદા ×1.2                                                                                                                                                                  | `file-size-baseline.json`                                                                              |
| પ્રતિ-ફાઇલ / પ્રતિ-TS-code સંખ્યાઓ ×1.2                                                                                                                                                                                                 | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                     | `scripts/check/check-openapi-coverage.mjs`                                                             |
| જ્યારે `_policy.requireTighten === false` હોય ત્યારે `--require-tighten` માત્ર સલાહરૂપ બને છે                                                                                                                                           | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| રાત્રિનું `bank-ratchet-shrinks` થોભે છે (તે માપવામાં આવેલ ઘટાડો બેંક કરીને વધારાની ઉપલબ્ધ મર્યાદાને રદ કરી દેત)                                                                                                                        | `.github/workflows/nightly-release-green.yml`                                                          |

અનુમતિ-સૂચિઓ (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) બજેટ **નથી** અને તેમને બદલવામાં આવી નથી. પાસ/ફેલ નીતિ ગેટ્સ (સિક્રેટ્સ, SQL નિયમો,
docs/env કરાર, i18n સમાનતા, યુનિટ ટેસ્ટ્સ) યથાવત્ છે — નિષ્ફળ ટેસ્ટ હજી પણ નિષ્ફળ ટેસ્ટ જ છે.

**ટૂલિંગ**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — એકવારનું
  ઢીલું કરવાની પ્રક્રિયા (`scripts/quality/relax-baselines.mjs`); સમાન નોંધ સાથે બીજી વાર ચલાવવાનો ઇનકાર કરે છે.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CI જે રીતે દરેક આંકડાકીય ગેટને માપે છે તે રીતે માપે છે અને દરેક ગેટ માટે બાકી રહેલી વધારાની ઉપલબ્ધ મર્યાદા
  છાપે છે (`scripts/quality/baseline-headroom.mjs`). રાત્રિનું `baseline-headroom` જોબ
  વર્કફ્લો રન સારાંશમાં કોષ્ટક પ્રકાશિત કરે છે અને તેના JSON/Markdown અહેવાલને
  `baseline-headroom-<run_id>` તરીકે અપલોડ કરે છે, જે 90 દિવસ સુધી રાખવામાં આવે છે. ચેતવણી અને ગંભીર પંક્તિઓ એવા ગેટ્સ ઓળખાવે છે
  જે પોતાની મર્યાદાના 10%ની અંદર છે અથવા પહેલેથી જ તેને વટાવી ચૂક્યા છે. બજેટ વપરાઈ રહ્યા હોવાની વહેલી ચેતવણી તરીકે
  આ અહેવાલોની સમીક્ષા કરો; સંબંધિત ગેટની `_rebaseline_*` નોંધો તપાસો. આ જોબ હવે
  કાયમી ઇશ્યૂ બનાવતું કે અપડેટ કરતું નથી; #12149 અગાઉના અહેવાલનો ઇતિહાસ જાળવે છે.

**નવા કોડનો મોડ (Clean-as-You-Code) — 2026-08-30થી, માત્ર PR ફાસ્ટ-પાથ**

`pull_request` ઇવેન્ટ્સ પર `quality.yml`, `check:file-size`,
`check:complexity-ratchets` અને `check:dead-code`ને `--base-ref <PR base SHA>` પાઠવે છે. `check:complexity-ratchets` અને
`check:dead-code` માટે ગેટ, PRએ સ્પર્શ કરેલી ફાઇલો સુધી **મર્યાદિત રહીને**, HEADની merge-base સાથે
સરખામણી કરે છે (`scripts/check/newCodeMode.mjs`: merge-baseને કામચલાઉ
`git worktree`માં સાકાર કરવામાં આવે છે, ESLint/knip ત્યાં અને HEAD પર ચલાવવામાં આવે છે અને પ્રતિ-ફાઇલ સંખ્યાઓનો તફાવત કાઢવામાં આવે છે):

- **અવરોધક** — PRએ બદલેલી ફાઇલોમાં cyclomatic/cognitive ઉલ્લંઘનો અથવા dead exports ઉમેર્યા
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` લૉગમાં);
- **સલાહરૂપ** — વૈશ્વિક કુલ સંખ્યા વિરુદ્ધ સ્થિર કરેલી બેઝલાઇન. વારસામાં મળેલો drift ક્યારેય
  નિર્દોષ PRને નિષ્ફળ કરતો નથી; રિલીઝ સમાધાન વખતે drift ફરીથી સ્થિર કરવામાં આવે છે અને headroom જોબ દ્વારા તેનું નિરીક્ષણ થાય છે.

`check:file-size` પોતાની શરતો અનુસાર base refનો ઉપયોગ કરે છે (`scripts/check/check-file-size.mjs`, #8522):
તે ટ્રીમાંની દરેક સોર્સ અને ટેસ્ટ ફાઇલ તપાસે છે, `git show` વડે PR base પર દરેક ફાઇલની લાઇન સંખ્યા વાંચે છે
અને કોઈ ફાઇલ તેની બેઝલાઇન મર્યાદા
(`frozen` / `testFrozen`, અથવા બેઝલાઇનની બહારની ફાઇલ માટે `cap` / `testCap`) અને તેના base કદમાંથી જે મોટું હોય તેનાથી આગળ વધે ત્યારે જ તેને નિષ્ફળ કરે છે. તેથી base પર પહેલેથી drift થયેલી ફાઇલ ક્યારેય નિર્દોષ PRને નિષ્ફળ કરતી નથી.

`check:boundary:ratchet` તેના એકમાત્ર આંકડા પર પણ એ જ નિયમ લાગુ કરે છે
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): PR ઇવેન્ટ્સ પર
`quality.yml` ફાસ્ટ-ગેટ્સ અને `ci.yml` lint જોબ બંને PRનો બેઝ SHA પાસ કરે છે, બેઝ કમિટને
`git archive` એક્સપોર્ટમાંથી માપવામાં આવે છે, અને PR માત્ર ત્યારે નિષ્ફળ જાય છે જ્યારે તેની `open-sse → src` એજ
સંખ્યા `metrics.boundaryOpenSseToSrc` અને બેઝ પરની સંખ્યામાંથી જે મોટી હોય તેનાથી વધી જાય. મર્યાદાથી
ઉપરનો બેઝ ડ્રિફ્ટ રિપોર્ટ થાય છે (`base drift herdado`), પરંતુ તે ક્યારેય નિર્દોષ PRને નિષ્ફળ કરતો નથી; push → main
નિરપેક્ષ મર્યાદા જાળવે છે, અને ઉકેલી ન શકાય તેવો બેઝ SHA ચેતવણી સાથે તેના પર પાછો ફરે છે.

`workflow_dispatch` રન્સ, release-green સ્વીપ અને nightly headroom જોબ પાસે કોઈ PR બેઝ
હોતો નથી અને તેઓ નિરપેક્ષ (વૈશ્વિક) સરખામણી જાળવે છે. કવરેજ, ડુપ્લિકેશન અને ટાઇપ-કવરેજ હાલમાં
વૈશ્વિક જ રહે છે (તેમના ટૂલ્સ ઓછા ખર્ચે પ્રતિ-ફાઇલ diff બનાવતા નથી) — સમાન વ્યવહાર માટેના સંભવિત ઉમેદવારો.

**v4.0 પર તબક્કો પૂર્ણ કરવો (LTS = પહેલાં કરતાં વધુ કડક, "ફરી સામાન્ય પર" નહીં)**

1. શુદ્ધ `release/v4.0.0` tip પર: રેકોર્ડ માટે `npm run quality:headroom --json`, પછી
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, દરેક typecheck ગેટનું
   `--update` — દરેક બેઝલાઇન માપવામાં આવેલા મૂલ્ય સુધી ઘટે છે.
2. `quality-baseline.json`માંથી `_policy` કાઢી નાખો (`--require-tighten` અને nightly
   bankingને ફરી સક્રિય કરે છે), `check-openapi-coverage.mjs`માં `THRESHOLD = 36` (અથવા વધુ) પુનઃસ્થાપિત કરો.
3. જ્યાં મોડ્યુલરાઇઝેશનથી લાભ થયો હોય ત્યાં માપવામાં આવેલા મૂલ્ય કરતાં વધુ કડક બનાવો: file-size `cap`ને ફરી 1000
   (અથવા 800) કરો, કવરેજની ન્યૂનતમ મર્યાદાઓ +5 કરો, મોડ્યુલરાઇઝ કરેલા પેકેજો માટે dead exports 0 કરો.

## રૅચેટ બેઝલાઇન (`quality-baseline.json`)

રૅચેટ એન્જિન (`scripts/quality/check-quality-ratchet.mjs`) `quality-baseline.json` વાંચે છે
અને તેની તાજા એકત્રિત કરેલા `quality-metrics.json` સાથે સરખામણી કરે છે. કોઈપણ મેટ્રિક તેના એપ્સિલોનથી
વધુ ખરાબ થાય તો બિલ્ડ નિષ્ફળ જાય છે.

હાલમાં ટ્રૅક કરવામાં આવતા મેટ્રિક્સ:

| મેટ્રિક               | દિશા   | અર્થ                                |
| --------------------- | ------ | ----------------------------------- |
| `eslintWarnings`      | `down` | ESLint ચેતવણીઓની સંખ્યા વધવી ન જોઈએ |
| `coverage.statements` | `up`   | સ્ટેટમેન્ટ કવરેજ ઘટવું ન જોઈએ       |
| `coverage.lines`      | `up`   | લાઇન કવરેજ ઘટવું ન જોઈએ             |
| `coverage.functions`  | `up`   | ફંક્શન કવરેજ ઘટવું ન જોઈએ           |
| `coverage.branches`   | `up`   | બ્રાન્ચ કવરેજ ઘટવું ન જોઈએ          |

વાસ્તવિક સુધારા પછી બેઝલાઇન અપડેટ કરવા માટે:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` ફ્લૅગ હાલના માપેલા મૂલ્યો `quality-baseline.json`માં લખે છે.
મેટ્રિકમાં સુધારો કરનાર ફેરફારની સાથે આ ફાઇલ કમિટ કરો. બેઝલાઇન અપડેટ કર્યા વિના
મેટ્રિકમાં સુધારો કરતી PRને `--require-tighten` દ્વારા પકડવામાં આવશે (તબક્કો 6A.5,
અમલીકરણ બાકી છે).

### CodeQL રૅચેટ: રિફ્રેશની આવર્તનતા અને મેન્યુઅલ ટ્રિગર

`check:codeql-ratchet` **રિપોઝિટરીની સ્થિતિ વાંચે છે, જે શેડ્યૂલ મુજબ રિફ્રેશ થાય છે — દરેક PR દીઠ નહીં.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` આ અહેવાલ આપે છે:
`state: configured`, `schedule: weekly`: આ GitHubનું ડિફૉલ્ટ-સેટઅપ સ્કૅન છે, દરેક પુશ દીઠ થતું
વિશ્લેષણ નથી. પરિણામે: ચેતવણીઓને સુધારતી PR મર્જ થયા પછી, રૅચેટ આગામી નિર્ધારિત સ્કૅન
ચાલે ત્યાં સુધી જૂની, વધુ ઊંચી સંખ્યા વાંચતું રહે છે — તેથી સ્કૅન અપડેટ થાય ત્યાં સુધી તે
દરેક ખુલ્લી PR પર, સુધારો કરનાર PRની પોતાની અનુગામી PR સહિત, રિગ્રેશનનો અહેવાલ આપે છે.

**મેન્યુઅલ રિફ્રેશ**: `gh workflow run codeql.yml --ref release/vX.Y.Z` વિશ્લેષણ ફરી ચલાવે છે
અને થોડી મિનિટોમાં ચેતવણીઓ ફરી પ્રકાશિત કરે છે. પહેલાં `.github/workflows/codeql.yml`
વાંચો — તેનું હેડર સમજાવે છે કે તે માત્ર `workflow_dispatch` માટે જ છે, **કારણ કે તે
GitHubના "ડિફૉલ્ટ સેટઅપ" સાથે સંઘર્ષ કરે છે** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). `push`/`pull_request`/
`schedule` ટ્રિગર્સ પુનઃસ્થાપિત કરવા માટે પહેલાં **માલિકની કાર્યવાહી** જરૂરી છે: Settings → Code security →
CodeQL: Default → Advanced. આ સ્વિચ કર્યા વિના `schedule:` ટ્રિગર ઉમેરશો નહીં — તે
ફક્ત નિષ્ફળ રન ઉત્પન્ન કરશે.

**સંખ્યા ઘટ્યા પછી બેઝલાઇનને કડક બનાવો** — `node scripts/check/check-codeql-ratchet.mjs
--update` નવી માપેલી સંખ્યાને `quality-baseline.json` →
`metrics.codeqlAlerts.value`માં લખે છે, જેથી રૅચેટ જૂની મહત્તમ મર્યાદા સુધી પાછા જતા
રિગ્રેશનને ચૂપચાપ મંજૂરી ન આપે. કાર્યરત ઉદાહરણ (2026-09-02/03): PR #12502એ 7 વાસ્તવિક
ચેતવણીઓ સુધારી (13 → 6 માપેલી ખુલ્લી); PR #12530એ સ્થિર કરેલી બેઝલાઇનને 11 → 6 સુધી
કડક બનાવી જેથી તે મેળ ખાય; ત્યારબાદ બાકીની 6 ચેતવણીઓ દરેક ચેતવણી માટેના કારણ સાથે
નકારીને ખુલ્લી ચેતવણીઓની સંખ્યા 0 કરવામાં આવી.

**ચેતવણીઓને નકારવાનો નિર્ણય ઑપરેટરનો છે (કડક નિયમ #14)** — નકારવાની ટિપ્પણીમાં
તકનીકી કારણ નોંધ્યા વિના ક્યારેય CodeQL ચેતવણી નકારશો નહીં: અપસ્ટ્રીમ-પ્રોટોકોલની
જરૂરિયાત માટે `won't fix`, ટેસ્ટ ફિક્સચર માટે `used in tests`, અને CodeQL જોઈ ન શકે
એવા સેનિટાઇઝર માટે `false positive` (પૂર્વદૃષ્ટાંત: `docs/security/ERROR_SANITIZATION.md`).

---

## ટેસ્ટ રીટ્રાય નીતિ (WS5.4, v3.8.49)

રીટ્રાય દરેક રનર દીઠ છે, ક્યારેય વૈશ્વિક બ્લેન્કેટ નથી — બ્લેન્કેટ રીટ્રાય વાસ્તવિક રિગ્રેશન્સને
અદૃશ્ય ફ્લેક્સમાં ફેરવે છે:

| રનર              | નીતિ                                                                                                                      | કારણ                                                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | માત્ર CIમાં `retries: 1`, અને સાથે `trace: on-first-retry`                                                                | બ્રાઉઝર/નેટવર્ક ટાઇમિંગ ખરેખર અનિર્ધારિત હોય છે; ટ્રેસ સાથેનો એક રીટ્રાય ફ્લેકને નિદાન કરી શકાય તેવી આર્ટિફેક્ટમાં ફેરવે છે |
| Vitest           | કોઈ વૈશ્વિક રીટ્રાય નહીં. સાબિત થયેલા ફ્લેકી ટેસ્ટને સ્પષ્ટ પ્રતિ-ટેસ્ટ રીટ્રાય મળે છે (diffમાં દૃશ્યમાન, PRમાં સમીક્ષિત) | ક્વોરન્ટીન સૂચિને repoમાં રાખે છે, ક્યારેય અપારદર્શક નહીં                                                                   |
| node:test (unit) | ક્યારેય કોઈ રીટ્રાય નહીં                                                                                                  | ફ્લેકી યુનિટ ટેસ્ટ એ ટેસ્ટમાં રહેલી બગ છે — તેને સુધારો, તેને ફરીથી ચલાવી નસીબ અજમાવશો નહીં                                 |

ફ્લેક ટેલિમેટ્રી ઉપલબ્ધ થયા પછીના લક્ષિત SLOs (WS5.2/5.3): પ્રતિ ટેસ્ટ <1% ફ્લેક દર
("હમણાં સુધારો" થ્રેશોલ્ડ), પ્રતિ પાઇપલાઇન ≥95% પાસ દર. ઉદ્યોગના સંદર્ભ મૂલ્યો —
આપણા પોતાના માપનોની સરખામણીએ ફરીથી કેલિબ્રેટ કરો.

## રિલીઝ-સ્તરનું રૅચેટ ડ્રિફ્ટ (WS5.5, v3.8.49)

જ્યારે કોઈ રૅચેટ (ફાઇલ-કદ, જટિલતા, eslint ચેતવણીઓ) શુદ્ધ રિલીઝ
ટિપ પર રિગ્રેસ થાય — એટલે કે, મર્જોના સંયોજને તેમાં રિગ્રેશન કર્યું હોય અને કોઈ એક PR પોતાની
બ્રાન્ચ પર સ્વતંત્ર રીતે રિગ્રેશન પુનઃઉત્પન્ન ન કરતો હોય — ત્યારે તેને સુધારવાની જવાબદારી
**રિલીઝ કૅપ્ટનની છે, એક વખત, રિલીઝ બ્રાન્ચ પર**: એક્સ્ટ્રેક્શન/રિફેક્ટરને પ્રાધાન્ય આપો;
માત્ર દસ્તાવેજીકૃત વાજબીપણાની એન્ટ્રી સાથે જ રિબેઝલાઇન કરો. સંયોજનથી થતા ડ્રિફ્ટને ક્યારેય
યોગદાનકર્તાના PR પર ન ધકેલો અને પ્રતિ-PR રિબેઝલાઇન ક્યારેય ન કરો (તે વાસ્તવિક રિગ્રેશન્સ છુપાવે છે).
પહેલા ભેદ પારખો: તમારા PRને કારણ માનતા પહેલાં પ્રોબ worktreeમાં શુદ્ધ ટિપ સામેની
લાલ સ્થિતિ પુનઃઉત્પન્ન કરો.

## રૅચેટના ઘટાડાને બેન્ક કરવું — નીચેની દિશા (#8584)

રૅચેટ માત્ર અર્ધ-સ્વચાલિત છે અને એ પણ ખોટો અર્ધભાગ છે. કૅપને **વધારવી** એ
દસ સેકન્ડ લેતો મેન્યુઅલ JSON ફેરફાર છે અને લાલ PRને અનબ્લોક કરવાની સૌથી ઝડપી રીત છે.
કૅપને **ઘટાડવા** માટે કોઈએ `--update` ચલાવીને પરિણામ કમિટ કરવું પડે છે — અને
`bank-ratchet-shrinks` જૉબ આવ્યા પહેલાં કોઈ workflow તેને ચલાવતું નહોતું. માપવામાં આવેલ પરિણામ
(2026-07-25): 800-લાઇનની નવી-ફાઇલ કૅપ જેટલી કે તેનાથી ઓછી લાઇન ધરાવતી 18 ફ્રોઝન ફાઇલો,
જેમાં સૌથી ખરાબ 132× હતી (`src/shared/validation/schemas.ts`, 19 લાઇન્સ માટે 2,523ની કૅપ);
જટિલતાની મહત્તમ મર્યાદા લગભગ 37 રિબેઝલાઇન નોંધો દરમિયાન `1794 → 2169` સુધી વધી, જેમાં
બરાબર એક ઘટાડો (−1) હતો; અને "આગલા ચક્રમાં `--update` દ્વારા કડક કરો" 31 વખત લખાયું અને
એક વખત અમલમાં મુકાયું. જે કૅપ તેને વાજબી બનાવનાર કોડ કરતાં વધુ સમય ટકી રહે છે, તે પૂર્ણ થયેલા
દરેક વિઘટનને ત્યારબાદ ફાઇલ સંપાદિત કરનાર માટે ચૂપચાપ વૃદ્ધિની છૂટમાં ફેરવે છે.

`nightly-release-green.yml` → જૉબ **`bank-ratchet-shrinks`** તે ચક્રને પૂર્ણ કરે છે:

|          |                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------- |
| ચાલે છે  | `schedule` (દિવસમાં 3×) + `workflow_dispatch` — ઇરાદાપૂર્વક **`push` નહીં**                               |
| માપે છે  | સૌથી ઉચ્ચ `release/vX.Y.Z`, `release-green` જેવી જ રિઝોલ્યુશન + ઇન્જેક્શન ગાર્ડ                           |
| લખે છે   | `check:file-size --update` અને `check:complexity-ratchets --update` (બંને બંધારણ મુજબ માત્ર ઘટાડો કરે છે) |
| ચકાસે છે | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                  |
| મોકલે છે | રિલીઝ બ્રાન્ચ સામે હંમેશા અદ્યતન રહેતો એક PR — ફોર્સ-અપડેટ થાય છે, ક્યારેય સ્પૅમ થતો નથી                  |

બેન્કિંગ પ્રતિ-push કરવાને બદલે બૅચમાં થાય છે, કારણ કે તેની કોઈ લેટન્સી આવશ્યકતા નથી
(8 કલાકની અંદર બેન્ક થયેલો ઘટાડો સ્વીકાર્ય છે), જ્યારે પ્રતિ-મર્જ રન મર્જ અભિયાનો દરમિયાન
PR બ્રાન્ચને વારંવાર ફરીથી બિલ્ડ કરશે અને દરેક વખતે સંપૂર્ણ ESLint વૉકનો ખર્ચ કરશે.
શોધ `push` (`release-green`) પર ચાલુ રહે છે; માત્ર બેન્કિંગ બૅચમાં થાય છે.

### સુરક્ષા ચકાસણીકાર

જૉબ કોઈ દેખરેખ વિના બેઝલાઇન્સમાં લખે છે, તેથી `verify-ratchet-bank.mjs` જ તેને
સ્વીકાર્ય બનાવે છે. તે `HEAD` સામે `--update` પછીના ટ્રીનો diff કરે છે અને જ્યાં સુધી
દરેક ફેરફાર નીચેનામાંથી કોઈ એક ન હોય ત્યાં સુધી **કોઈ કમિટ અસ્તિત્વમાં આવે તે પહેલાં જ જૉબને
અબોર્ટ કરે છે** — અને કોઈ PR ખોલતું નથી:

- `frozen` / `testFrozen` સંખ્યાત્મક એન્ટ્રી **ઘટાડવામાં** અથવા **દૂર કરવામાં** આવી હોય
- `complexity-baseline.json` → `count` **ઘટાડવામાં** આવ્યું હોય
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **ઘટાડવામાં** આવ્યું હોય

બીજું કંઈપણ નિષ્ફળ જાય છે: સંખ્યા વધારવી, એન્ટ્રી ઉમેરવી, `cap`/`testCap` બદલવું અથવા
`_rebaseline_*` નોંધ કાઢી નાખવી/ફરી લખવી (આ નોંધો દરેક મહત્તમ મર્યાદા શા માટે અસ્તિત્વમાં છે
તેની ઑડિટ ટ્રેઇલ છે અને ફાઇલ એન્ટ્રીઓ સાથે એ જ `frozen` ઑબ્જેક્ટમાં સંગ્રહિત છે).
કૅપ વધારી શકે તેવો બૉટ વર્તમાન સ્થિતિ કરતાં નિશ્ચિતપણે વધુ ખરાબ હશે. રિગ્રેશન
ગાર્ડ: `tests/unit/verify-ratchet-bank.test.ts`.

જૉબ ક્યારેય `release/*` પર push કરતી નથી — કોઈ માનવી PR મર્જ કરે છે, તેથી ખોટું માપન
સમીક્ષા વિના સામેલ થઈ શકતું નથી.

## મંજૂર-યાદી નીતિ

પહેલેથી અસ્તિત્વમાં રહેલા ઉલ્લંઘનોને કારણે નિષ્ફળ ન થઈ શકે તેવો દરેક ગેટ સ્થિર મંજૂર-યાદીનો ઉપયોગ કરે છે
(દા.ત., `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). નીતિ આ છે:

**મૂળ કારણ સુધારો; મંજૂર-યાદીનો ઉપયોગ માત્ર ત્યારે જ કરો જ્યારે ઉલ્લંઘન પહેલેથી અસ્તિત્વમાં હોય અને
તેને એ જ PRમાં સુધારી ન શકાય.**

મંજૂર-યાદીમાં એન્ટ્રી ઉમેરતી વખતે:

1. વાજબી કારણ દર્શાવતી ટિપ્પણી સામેલ કરો.
2. ટ્રેકિંગ ઇશ્યૂનો સંદર્ભ આપો (દા.ત., `// #3498 — તબક્કો 2 સુવિધા, હજુ અમલમાં મૂકાઈ નથી`).
3. ઉલ્લંઘન સુધારતા એ જ PRમાં એન્ટ્રી દૂર કરો — હવે કોઈ સક્રિય ઉલ્લંઘનને
   દબાવતી ન હોય તેવી જૂની એન્ટ્રી પોતે જ એક ખામી છે (એકવાર અમલમાં મૂકાયા પછી 6A.3 જૂના-અમલીકરણની તપાસ
   અનાથ મંજૂર-યાદી એન્ટ્રી પર ગેટને નિષ્ફળ કરશે).

પરીક્ષણો ઝડપથી પાસ કરાવવા માટે મંજૂર-યાદી એન્ટ્રીઓ ઉમેરશો **નહીં**. વધતી જતી
મંજૂર-યાદી સાથેનો લીલો ગેટ ગુણવત્તાની ખોટી ખાતરી આપે છે.

### જ્યારે તમારા PR પર કોઈ ગેટ નિષ્ફળ જાય

1. **ગેટનું આઉટપુટ ધ્યાનપૂર્વક વાંચો** — તે તમને ચોક્કસ જણાવે છે કે કઈ ફાઇલ અથવા સિમ્બલે
   નિયમનું ઉલ્લંઘન કર્યું છે.
2. **ઉલ્લંઘન સુધારો** — મોટાભાગના ગેટ નિર્ધારિત ફાઇલસિસ્ટમ તપાસો છે, જે કોડ સાચો
   થતાં જ પાસ થાય છે.
3. **જો ઉલ્લંઘન પહેલેથી અસ્તિત્વમાં હોય** (એટલે કે, તમે તેને રજૂ કર્યું નથી, પરંતુ હવે ગેટ
   તેને આવરે છે): વાજબી કારણ દર્શાવતી ટિપ્પણી અને ટ્રેકિંગ ઇશ્યૂ સાથે મંજૂર-યાદી એન્ટ્રી ઉમેરો.
4. **જો ગેટ રૅચેટ હોય** (કવરેજ, ESLint ચેતવણીઓ, પુનરાવર્તન, જટિલતા):
   તમારા ફેરફારે મેટ્રિકને ખરાબ બનાવ્યું છે. મૂળભૂત સમસ્યા સુધારો અથવા (ભાગ્યે જ)
   જો ફેરફાર ઇરાદાપૂર્વકનો હોય અને મેટ્રિકમાં થયેલો ઘટાડો સ્વીકાર્ય હોય, તો
   `npm run quality:ratchet -- --update` ચલાવો — પરંતુ PRના વર્ણનમાં તેનું કારણ દસ્તાવેજિત કરો.
5. **સલાહકારી ગેટ** (`continue-on-error: true`) માહિતીપ્રદ છે — તે મર્જને અવરોધતા
   નથી, પરંતુ CI સારાંશમાં દેખાય છે. તેમ છતાં તેમને સુધારો.

---

## નવો ગેટ ઉમેરવો

1. `scripts/check/check-<name>.mjs` (અથવા `.ts`) બનાવો. નીતિ ગેટ 0/1 સાથે બહાર નીકળે છે.
   રૅચેટ-શૈલીના ગેટ `collect-metrics.mjs` મારફતે `quality-metrics.json`માં મેટ્રિક લખે છે.
2. `package.json`માં `"check:<name>": "node scripts/check/check-<name>.mjs"` ઉમેરો.
3. તેને યોગ્ય જોબ હેઠળ `.github/workflows/ci.yml`માં જોડો
   (નીતિ → `lint` અથવા `docs-sync-strict`; રૅચેટ → `quality-gate`).
4. જો તેની પાસે મંજૂર-યાદી હોય, તો `scripts/check/lib/allowlist.mjs`માંથી
   `reportStaleEntries()` લાગુ કરો જેથી જૂની એન્ટ્રીઓ આપમેળે શોધાય.
5. ગેટના શોધ-તર્કને આવરી લેતું પરીક્ષણ `tests/unit/build/`માં લખો.
6. આ દસ્તાવેજ અપડેટ કરો (સંબંધિત જોબ ટેબલમાં એક પંક્તિ ઉમેરો).

---

## એજન્ટ ટૂલિંગ: LSP-ઇન-ધ-લૂપ (વૈકલ્પિક)

CI ગેટ ઉપરાંત, OmniRoute એક **વૈકલ્પિક** `agent-lsp` સ્કેફોલ્ડ પ્રદાન કરે છે
(પ્રોજેક્ટ-સ્તરનું `.mcp.json`, Fase 7 Task 15). કોડિંગ એજન્ટો માટે TypeScript ભાષા સર્વર
ઉપલબ્ધ કરાવવા `.mcp.json` બનાવો, જેથી તેઓ કોડ લખતા **પહેલાં** સિમ્બલ /
ડાયગ્નોસ્ટિક્સનું નિરાકરણ કરે — આ `typecheck:core`નું કમ્પાઇલ-બિફોર-ક્લેમ સાથી છે,
જે "કલ્પિત સિમ્બલ" ભૂલોને તેમના સ્ત્રોતે જ ઘટાડે છે. તેને ઇરાદાપૂર્વક આપમેળે લોડ કરવામાં
આવતું નથી (તમે MCP↔LSP બ્રિજ પસંદ કરીને ચકાસો છો); ખામીયુક્ત એન્ટ્રી માત્ર કનેક્શન ભૂલને
લૉગ કરે છે અને ક્યારેય સેશનોને વિક્ષેપિત કરતી નથી.

---

## તર્કસંગતીકરણ બૅકલૉગ (ROI સમીક્ષા — તબક્કો 9 તરંગ 3)

આ ઇન્વેન્ટરીનું 2026-06-17ના રોજ `ci.yml` સામે સમાધાન કરવામાં આવ્યું હતું (અગાઉની આવૃત્તિમાં
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence` છૂટી ગયાં હતાં). સમાધાન કરાયેલા સમૂહની ROI સમીક્ષાએ
નીચેના તર્કસંગતીકરણ ઉમેદવારો ઓળખ્યા. **મર્જ યાંત્રિક CI ફેરફારો છે;
ફ્લિપ/ડ્રૉપ ઓપરેટર માટે અનામત નીતિગત નિર્ણયો છે.** નીચેનું કશું હજી
લાગુ કરવામાં આવ્યું નથી.

**ઉપર દસ્તાવેજીકૃત ન થયેલું પણ** (સલાહરૂપ, ઓછો સંકેત): `docs-lint` જોબ
(markdownlint + Vale, સમગ્ર જોબ `continue-on-error`) અને સ્વતંત્ર સ્કૅનર વર્કફ્લો
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0`
`quality-baseline.json`માં છે, પરંતુ `ci.yml`માં અવરોધક રૅચેટ સાથે જોડાયેલું નથી — મેટ્રિક
હાલમાં અનાથ છે.

### મર્જ / ડિડુપ્લિકેશન (યાંત્રિક, ઓછું જોખમ)

દરેક ઉમેદવારને 2026-06-17ના રોજ લાઇવ ગેટ સ્થિતિ સામે માન્ય કરવામાં આવ્યો હતો (વિશ્વાસ કરો, પણ ચકાસો);
કેટલાક "સ્પષ્ટ" મર્જ હકીકતમાં ટેક્નિકલ ઋણ છુપાવતા હોવાનું બહાર આવ્યું અને તે **સ્વચ્છ ડ્રૉપ-ઇન નથી**.

- **`check:docs-sync` બે વાર ચાલે છે** — `lint` જોબમાં સ્વતંત્ર રીતે અને ફરીથી `check:docs-all` (`docs-sync-strict`) તથા husky pre-commit હૂકની અંદર. ✅ **પૂર્ણ** — સ્વતંત્ર `lint` ઇન્વોકેશન દૂર કરવામાં આવ્યું.
- **CVE સ્કૅનિંગ** — ❌ **સ્વચ્છ મર્જ નથી.** `audit:deps` કોઈપણ high/critical CVE પર હાર્ડ-ફેઇલ થાય છે; `check:vuln-ratchet` (osv) માત્ર બેઝલાઇનની સરખામણીએ _રીગ્રેશન_ પર નિષ્ફળ થાય છે (હાલમાં 1 MODERATE). સિમેન્ટિક્સ અલગ છે — `audit:deps` દૂર કરવાથી નિરપેક્ષ high/critical ગેટ ગુમાવવો પડે. બંને રાખો.
- **સાઇકલ શોધ** — ✅ **પૂર્ણ** (#15159 G-01/G-02). અહીંના જૂના લખાણમાં `check:cycles`ને "લીલું, કાળજીપૂર્વક પસંદ કરેલું" ગેટ કહેવાયું હતું અને તેને અવરોધક રાખવાનું સમર્થન એ આધારે કરાયું હતું કે `check:circular-deps` (dpdm)એ 91 સાઇકલ દર્શાવ્યાં હતાં. એ લીલું પરિણામ **ખોટું લીલું પરિણામ** હતું: `check:cycles`એ 5 સબડિરેક્ટરી (450 ફાઇલ) સ્કૅન કરી હતી, માત્ર સ્થિર `import|export … from` સાથે મેળ સાધ્યો હતો અને દરેક `@/` તથા `@omniroute/open-sse/` સ્પેસિફાયર કાઢી નાખ્યો હતો, તેથી તે રિપોઝિટરીમાં પ્રભુત્વ ધરાવતી dynamic-import + alias સાઇકલ જોઈ શકતું નહોતું. સુધાર્યું: ગેટ હવે `src` + `open-sse` (5023 ફાઇલ)માં ફરે છે, TypeScript ASTમાંથી સ્પેસિફાયર એકત્ર કરે છે (જેથી `import("…")` ગણાય છે અને ટાઇપ-સ્થાનમાં `typeof import("…")` ગણાતું નથી), અને tsconfig `paths`નું રિઝોલ્યુશન કરે છે. તેને 0 નહીં, પરંતુ **14** સાઇકલ મળે છે. અગાઉથી અસ્તિત્વમાં રહેલી 14 સાઇકલને ગેટ PRમાં સુધારી શકાતી ન હોવાથી, `check:cycles` હવે **રૅચેટ** છે (`--ratchet`, `quality-baseline.json`માં ઉચ્ચતમ મર્યાદા `metrics.cycles.value = 14`, `direction: down`) — તે કોઈપણ _રીગ્રેશન_ને અવરોધે છે અને ગણતરી માત્ર ઘટી શકે છે. CI `npm run check:cycles:ratchet` ચલાવે છે. ઘટાડાની કામગીરી **A-01** સાથે આગળ વધે છે. વધુ વ્યાપક બીજા અભિપ્રાય તરીકે `check:circular-deps` (dpdm) સલાહરૂપ રહે છે.
- **જટિલતા** — ✅ **પૂર્ણ** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): એક ESLint વૉક, ruleId પ્રમાણે ગણતરી કરે છે જેથી cyclomatic+max-lines અને cognitive બેઝલાઇન સ્વતંત્ર રહે; સ્થાનિક `--update` માટે વ્યક્તિગત `check:complexity` / `check:cognitive-complexity` યથાવત્ રહે છે.
- **`/api` ઍન્ટિ-હેલ્યુસિનેશન** — ✅ **પૂર્ણ** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): `src/app/api`ની એક FS ઇન્વેન્ટરી, openapi-routes + docs-symbols હજી પણ સ્વતંત્ર રીતે અહેવાલ આપે છે; સ્થાનિક રન માટે વ્યક્તિગત ચેક્સ યથાવત્ રહે છે.
- **`check:node-runtime` 11 જોબમાં ચાલે છે** — ⚠️ **ઓછું ROI.** દરેક અલગ રનર છે અને ચેક <1sનો છે; સસ્તું પ્રતિ-જોબ સુરક્ષા નિયંત્રણ ગુમાવવાની સામે કુલ બચત ~10s છે. આટલી ઉથલપાથલ યોગ્ય નથી.
- **CI lint પર `typecheck:noimplicit:core`** — ✅ **lint જોબમાંથી દૂર કરાયું** (સલાહરૂપ `continue-on-error` હતું); અવરોધક ટાઇપ સપાટી `typecheck:core` + `check:type-coverage` છે. સ્થાનિક સ્ક્રિપ્ટ જાળવી રાખવામાં આવી છે.

### ફ્લિપ / નિર્ણય (ઓપરેટર નીતિ)

- `check:openapi-security-tiers` (સલાહરૂપ) — ❌ **સ્વચ્છ રીતે ફ્લિપ કરી શકાય તેમ નથી.** તે 0 સાથે એક્ઝિટ થાય છે, પરંતુ ચેતવણી આપે છે કે `LOCAL_ONLY_API_PREFIXES` હેઠળના કેટલાક `traffic-inspector` રૂટમાં `x-loopback-only: true` ઍનોટેશન નથી. તેને અમલમાં મૂકતાં પહેલાં `openapi.yaml`માં એ ઍનોટેશન ઉમેરવા જરૂરી છે.
- `typecheck:noimplicit:core` (સલાહરૂપ) — અવરોધક `check:type-coverage` રૅચેટ દ્વારા મોટા ભાગે આવરી લેવાય છે. તેને રૅચેટમાં ફ્લિપ કરો અથવા બિનજરૂરી બીજા `tsc` પાસને દૂર કરો.
- `test:vitest:ui` (હવે **અવરોધક**) — અગાઉથી અસ્તિત્વમાં રહેલી નિષ્ફળતાઓને `vitest.config.ts`માં `// #8618` ટ્રૅકિંગ ટિપ્પણીઓ સાથે સ્પષ્ટ રીતે બાકાત રાખવામાં આવી છે; નવી નિષ્ફળતાઓ જોબને નિષ્ફળ બનાવે છે.
- `check:secrets` (gitleaks, 3 દસ્તાવેજીકૃત false-positive પર સ્થિર કરાયેલ અવરોધક રૅચેટ) — 0 સુધી પહોંચવા માટે એ 3ને allowlist કરો અથવા તેને સલાહરૂપ સ્તરે ઉતારો. GitHubના મૂળ secret-scanning + `check:public-creds` સાથે ઓવરલેપ થાય છે.
- `check:pr-evidence` (અવરોધક, PR-bodyના ગદ્યમાં greps કરે છે) — false-positiveનું ઊંચું જોખમ; તેને દૂર કરવાથી Hard Rule #18નો અમલ નબળો પડે છે, તેથી આ ખરેખર નીતિગત નિર્ણય છે.
- `semgrep` (સલાહરૂપ સ્વતંત્ર) — OWASP ફૅમિલી માટે CodeQL સાથે ઓવરલેપ થાય છે; તેની બેઝલાઇનને રૅચેટ સાથે જોડો અથવા તેને દૂર કરો.

---

## સંબંધિત દસ્તાવેજીકરણ

- સપ્લાય-ચેઇન (પ્રોવેનન્સ, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — કી-સેટ સમાનતા ગેટ

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, જોબ `i18n-ui-coverage`).
દરેક `src/i18n/messages/<locale>.json`ના લીફ કી સેટની `en.json` સાથે તુલના કરે છે અને
કી ક્યારે ઉમેરાઈ હતી તેની પરવા કર્યા વિના, કોઈપણ ગેરહાજર અથવા વધારાની લીફ મળતાં નિષ્ફળ જાય છે.
`__MISSING__:` પ્લેસહોલ્ડર્સ હાજર ગણાય છે (તેમની સામગ્રી રેશિયો ગેટનો વિષય છે). આ બે
ડિફ-આધારિત/ટકાવારી ગેટ્સનું સંપૂર્ણ પૂરક છે: `check-ui-keys-coverage` દરેક locale માટે
80 %ની લઘુતમ મર્યાદા લાગુ કરે છે (~13,000માંથી 43 કી ગેરહાજર હોય તો પણ 99.7 % દર્શાય છે)
અને `check-new-key-coverage` માત્ર PR દ્વારા `en.json`માં ઉમેરાયેલી કીનું મૂલ્યાંકન કરે છે.
locale બૅચ તેની બ્રાન્ચ કાપવામાં આવે તે દિવસના `en.json` પરથી જનરેટ થાય છે અને બેઝમાં
કી ઉમેરાતી રહે ત્યારે ઘણા દિવસો સુધી અનુવાદ કરે છે; બૅચ PR પોતે કોઈ કી ઉમેરતો નથી, તેથી
બૅચ 1 (#13044) નવ localesમાં 43 કી ઓછી અને બૅચ 2 (#13660) આઠમાં 10 કી ઓછી સાથે
મર્જ થયા ત્યારે (2026-09-15) બંને સહગેટ મૌન રહ્યાં. લાલ નિષ્ફળતા સુધારવા માટે
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` ચલાવો; `extra` લીફનો
અર્થ છે કે સ્રોતમાંથી તે દૂર કરવામાં આવી છે — તેને localeમાંથી કાઢી નાખો. `--warn` નિષ્ફળ કર્યા
વિના અહેવાલ આપે છે. `--catalog=cli` એ જ તુલના `bin/cli/locales` પર ચલાવે છે
(`npm run i18n:check-keys:cli`); બંને પગલાં જોબ `i18n-ui-coverage`માં છે.

#### `check-new-key-coverage` — નવી-કી i18n ગેટ

`check-ui-value-drift`નું સહગેટ. તે એવા અંગ્રેજી મૂલ્યને પકડે છે જે **ફરી લખાયું** હોય
પરંતુ તેના અનુવાદો પાછળ રહી ગયા હોય; આ ગેટ એવી અંગ્રેજી કીને પકડે છે જે **ઉમેરાઈ** હોય
પરંતુ કેટલાક localesને ક્યારેય મળી ન હોય.

`check-ui-keys-coverage` આ પ્રકારની સમસ્યા જોઈ શકતું નથી: તે દરેક locale માટે ટકાવારીની
લઘુતમ મર્યાદા લાગુ કરે છે, અને ~13,000 લીફમાંથી અગિયાર કી ગેરહાજર હોય તો કવરેજ 99.9% રહે છે.
ભાષા દીઠ ટકાવારીથી "આ સુવિધા અનુવાદ વિના રિલીઝ થઈ" વ્યક્ત કરી શકાતું નથી — નવી localeમાં
સમગ્ર સુવિધા કોઈપણ ટેક્સ્ટ વિના ઉમેરાઈ શકે છે અને આ આંકડો ક્યારેય બદલાતો નથી.

તે જે ઘટનાને અંકિત કરે છે: Orchestration Canvasના તબક્કા 3માં તે સમયે અસ્તિત્વ ધરાવતા
42 localesમાં તેની અગિયાર કીનો અનુવાદ કરવામાં આવ્યો હતો. થોડા કલાકો પછી EU-ભાષા બૅચ
(#13044) રિપોઝિટરીને 51 locales સુધી લઈ ગઈ, અને નવ નવા locales (`el`, `et`, `ga`, `hr`,
`lt`, `lv`, `mt`, `sl`, `sr`)ને એ કી ક્યારેય મળી નહીં. ગેરહાજર કી માટે `deepMergeFallback`
અંગ્રેજી મૂકે છે, તેથી નિષ્ફળતાનું સ્વરૂપ ખાલી UIને બદલે અનુવાદ વિનાનું UI હતું — વાસ્તવિક,
અને રચનાત્મક રીતે મૌન.

તેના સહગેટની જેમ આ પણ **ડિફ-અવેર** છે, જે મર્જ બેઝ પરના અંગ્રેજીની વર્કિંગ ટ્રી સાથે
તુલના કરે છે, તેથી અગાઉથી અસ્તિત્વ ધરાવતી ખામીઓ સ્થિર રહે છે અને ગેટ ચાલુ કરવા માટે કોઈ
માઇગ્રેશનની જરૂર પડી નહોતી.

**`__MISSING__:<english>` માર્કર તેને સંતોષતું નથી (2026-09-17થી).** અગાઉ તે દસ્તાવેજીકૃત
મુલતવીકરણ હતું — રનટાઇમ યોગ્ય અંગ્રેજી પર ફૉલબૅક કરે છે — પરંતુ 2026-09-16ના આઠ ફીચર
PRએ 61 કી ઉમેરી અને અનુવાદ કરવાને બદલે તમામ 65 localesમાં માર્કર મૂકી દીધું: આ ગેટે
દરેકને સ્વીકારી લીધું, PRને કંઈએ અવરોધ્યો નહીં, અને ત્યારબાદ અવરોધક વાસ્તવિક-અનુવાદ રેશિયો
ગેટ દરેક માટે રિલીઝ ટિપ પર નિષ્ફળ ગયો (pt-BR 3.2 % > 2.5 % + 0.5). હવે માર્કરને ગેરહાજર
અનુવાદ તરીકે મૂલવવામાં આવે છે. લાલ નિષ્ફળતા સુધારવા માટે
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` ચલાવો,
અથવા `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`, detached-safe,
`OMNIROUTE_TRANSLATION_*` env વિના શરૂ થવાનો ઇનકાર કરે છે) વડે તમામ localesને સમાંતરમાં
ચલાવો. જે કી અંગ્રેજીમાં જ રહેવી આવશ્યક હોય (નિશ્ચિત કરેલું પ્રોડક્ટ/એન્જિન/ફ્લૅગ નામ) તે
`scripts/i18n/untranslatable-keys.json`માં હોવી જોઈએ, માર્કર પાછળ ક્યારેય નહીં. `vi`માં
માર્કર્સ પર સંપૂર્ણ પ્રતિબંધ છે (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — સ્થગિત-ટેસ્ટ ગેટ

`vitest.config.ts`ની `exclude` સૂચિમાં રહેલી ફાઇલ એવો ટેસ્ટ છે જે ચાલતો નથી, અને ટ્રી
વાંચનારને તે કવરેજ જેવો દેખાય છે. બાસઠ ફાઇલો
`// #8618 — pre-existing failure; remove this exclusion when fixed` ટિપ્પણી પાછળ એકઠી થઈ.
Issue #8618ને 2026-08-11ના રોજ બંધ કરવામાં આવ્યો હતો, જ્યારે તે ટ્રૅક કરતી સૂચિ 45 એન્ટ્રીથી
વધીને 62 થઈ ગઈ હતી, અને દરેક નવી એન્ટ્રીને બંધ થઈ ચૂકેલા issue તરફ નિર્દેશ કરતી ટિપ્પણી
વારસામાં મળી હતી. આખરે જ્યારે સૂચિને ફાઇલ દીઠ માપવામાં આવી (#13204), ત્યારે **62માંથી 51
ફાઇલો વર્તમાન ટ્રી સામે કોઈપણ સ્રોત ફેરફાર વિના પાસ થઈ**.

ગેટ માટે જરૂરી છે કે વાસ્તવિક ફાઇલમાં રિઝોલ્વ થતું દરેક exclusion (a) ટ્રૅકિંગ issueનું નામ આપે
અને (b) તેની માપેલી સ્થિતિ સાથે `config/quality/vitest-exclusions.json`માં દેખાય, જેથી એક વધુ
લાઇન 60-એન્ટ્રીવાળા ઍરેમાં ઉમેરવાને બદલે exclusion ઉમેરવું સમર્પિત ફાઇલમાં સમીક્ષા કરી શકાય
તેવું ડિફ બને. તે ઇરાદાપૂર્વક બાકાત રાખેલા ટેસ્ટ ફરી ચલાવતું નથી — તેમાં ~10 મિનિટ લાગે છે
અને તે આવર્તક જોબમાં હોવું જોઈએ; ઇન્વેન્ટરી દરેકને છેલ્લે ક્યારે માપવામાં આવ્યું હતું તે નોંધે છે.
