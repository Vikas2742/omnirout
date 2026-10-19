# Quality Gates Reference (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Tento dokument je autoritatívnou referenciou pre všetky kvalitatívne brány CI v OmniRoute.
Opisuje každú bránu, čo overuje, v ktorej úlohe CI sa spúšťa, či používa
sprísňujúcu referenčnú hodnotu alebo politiku úspechu/neúspechu a či zostavenie blokuje, alebo má iba poradný charakter.

Stručné zhrnutie a politiku zoznamu povolených výnimiek nájdete v časti „Quality Gates & Ratchets“
v súbore `AGENTS.md`. Kritické posúdenie, klasifikáciu vyspelosti a plán replikácie
rovnakého systému nezávislý od nástrojov nájdete v dokumente
[Príručka ku kvalitatívnym bránam](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Inventár brán a profily vykonávania

### Prijatie kandidáta

Pracovné postupy CI a Quality Gates poskytujú stabilný verdikt: `Gate / CI` a
`Gate / Quality`. Ich verzovaná politika prijímania uvádza každú nadradenú úlohu
ako povinnú alebo poradnú. Príslušná povinná úloha musí uspieť: chýbajúce,
zrušené, preskočené, čakajúce a neznáme výsledky nemôžu preukázať PASS. Platná
klasifikácia iba pre dokumentáciu alebo iba pre katalóg môže spôsobiť, že vetva pre kód nebude relevantná;
koncept PR nie je akceptovaným kandidátom. Označenie `hotfix` neruší požiadavku na dôkazy.

Oba pracovné postupy pokrývajú PR a odoslania do vetiev main/release, manuálne spustenie a
udalosti skupiny zlučovania. Odoslanie, spustenie a skupina zlučovania spúšťajú úplný výber. Forky
a skupiny zlučovania používajú hostované vykonávacie prostredia pre úlohy, ktoré by inak vybrali samostatne hostované
vykonávacie prostredia; pred nasadením sa musí overiť dostatočná hostovaná kapacita.

Každé potvrdenie JSON identifikuje SHA použitej pracovnej kópie, spustenie pracovného postupu a pokus.
CLI odmietne nezhodu medzi SHA pracovnej kópie a udalosti. Testy pracovného postupu viažu členstvo v politike
na zoznam `needs` úlohy s verdiktom, takže nová alebo odstránená vetva nemôže nepozorovane zmiznúť.
Potvrdenia pokrývajú vlastný pracovný postup, nie publikovanie, nasadenie ani interné fungovanie
existujúceho poradného skenera. Aktivácia oboch názvov kontrol v pravidlách vetvy je
samostatná administratívna zmena; pridanie týchto úloh samo osebe nechráni vetvu.

### Inventár statickej kontroly

Verzovaný inventár aliasov npm a členstvo v statickej kontrole sa nachádzajú v
`config/quality/gate-manifest.json`. Spustite `npm run check:gate-manifest`, aby ste overili
názvy skriptov a presné príkazy podľa `package.json`; pridania, odstránenia a
odchýlky príkazov spôsobia zlyhanie lokálneho hooku aj úloh klasifikácie zmien v CI.
Alias nie je úloha pracovného postupu, inštancia matice ani testovací prípad: tieto počty sa
nesmú prezentovať ako vzájomne zameniteľné.

Pomocou `npm run quality:scan -- --list` alebo `npm run quality:scan:fast -- --list`
skontrolujte vybrané aliasy bez ich vykonania. Vykonávacie prostredie vyvoláva
vstupný bod npm, takže jeho runtime (vrátane Bun tam, kde je nakonfigurovaný) zostáva zachovaný.
Manifest zaznamenáva aliasy mimo týchto profilov ako samostatne spúšťané a
príkazy údržby sú v profiloch kontroly iba na čítanie zakázané.

Tieto profily pokrývajú iba statickú kontrolu. Necertifikujú produktové testy,
pokrytie, balenie, externé kontroly ani úplné prijatie kandidáta na vydanie.
Prijímanie v pracovnom postupe používa prepojené súbory `config/quality/admission-policy.json` a
`scripts/quality/admission-verdict.mjs`. Profily pozorovateľa vydania zostávajú oddelené;
ich príslušné kontroly a potvrdenia overujte nezávisle. Nižšie uvedený textový
inventár je referenciou, nie dôkazom, že sa brána skutočne spustila.

Skripty sa nachádzajú v `scripts/check/` (brány politík) a `scripts/quality/` (mechanizmus ratchet).
Zdrojom pravdy pre CI je `.github/workflows/ci.yml`.

### Rýchla cesta pre PR vydania (`quality.yml`)

`.github/workflows/quality.yml` dopĺňa CI pri PR do vetiev main/release, odoslaniach do chránených vetiev,
spusteniach a skupinách zlučovania. PR používajú rýchle kontroly filtrované podľa ciest. Natrvalo
zakázané duplicitné zostavenie bolo odstránené; skutočné kontroly zostavenia/balenia/spustenia zostávajú v CI.

| Úloha                                            | Rozsah                                                                                                                                                                                                           | Blokujúca           |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| `Docs Gates (fast-path)`                         | PR dokumentácie/kódu; referencie dokumentácie API a všetka dokumentácia                                                                                                                                          | Áno                 |
| `Fast Quality Gates`                             | PR kódu; statické kontroly, kontrola typov, kontrola typov dashboardu, ovplyvnené jednotkové testy                                                                                                               | Áno                 |
| `Forgotten sibling tests`                        | PR kódu; zmenené moduly sledované k statickým konzumentom a kandidátskym súrodeneckým testom; cesty cez barrel a dynamický import sa hlásia ako poradná diagnostika s odkazovanými výnimkami zo zoznamu povolení | **Poradná**         |
| `Vitest (fast-path)`                             | PR kódu; rýchly balík vitest                                                                                                                                                                                     | Áno                 |
| `Unit Tests fast-path`                           | PR kódu; balík jednotkových testov so 4 shardmi                                                                                                                                                                  | Áno                 |
| `No new ESLint warnings`                         | PR kódu; ochrana lintovania zohľadňujúca potlačenia                                                                                                                                                              | Áno, vrátane forkov |
| `Merge integrity (changelog + generated skills)` | PR, ktoré nie sú konceptmi; synchronizácia changelogu a generovaných zručností                                                                                                                                   | Áno, vrátane forkov |

#### Správa o zabudnutých súrodeneckých testoch

`npm run check:forgotten-sibling-tests` opätovne používa resolver importov, na ktorom je založená mapa vplyvu testov.
Pre každý zmenený produkčný modul hlási deterministické reťazce
`changed module/symbol -> static consumer -> candidate sibling test`, keď kandidátsky
test chýba v rozdiele pull requestu. Súhrn vo formáte Markdown a výsledok JSON sa uchovávajú ako
artefakt pracovného postupu `forgotten-sibling-tests` na kalibráciu pred akýmkoľvek zavedením blokovania.

Opätovné exporty cez barrel súbory a dynamické importy slúžia iba na diagnostiku rozlíšenia; nikdy nevytvárajú
blokujúce zistenie. Skontrolované výnimky sa nachádzajú v
`config/quality/forgotten-sibling-allowlist.json`. Každá položka musí uvádzať konzumenta a kandidátsky
test, poskytnúť konkrétne odôvodnenie a odkazovať na issue alebo pull request na GitHube. Chybne vytvorené položky
spôsobia zlyhanie v bezpečnom režime. Výnimky nemôžu potlačiť odstránený kandidátsky test ani diff, ktorý pridáva `.skip`/`.todo`;
oslabovanie asercií a iné maskovanie naďalej spadá pod samostatne blokujúcu
bránu `check:test-masking`.

### Úloha: `lint`

Spúšťa sa pri každom PR do vetvy `main`. Pri zlyhaní blokuje zlúčenie.

| Skript (`npm run ...`)            | Overuje                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Blokujúce                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `check:node-runtime`              | Verzia Node.js je v podporovanom rozsahu                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Áno                                          |
| `check:cycles`                    | `src/` + `open-sse/`; AST (`import` / `export`, tsconfig `paths`). `check:cycles`: `cycles > 0 → exit 1`; `SCC → stderr` (#15281). `check:cycles:ratchet` (to, čo spúšťa CI) blokuje, keď počet prekročí strop `metrics.cycles` v súbore `quality-baseline.json` — aktuálne 14, `direction: down`, takže môže iba klesať (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Áno (ratchet)                                |
| `check:boundary`                  | Prepojenie `open-sse → src`: jedinečné importy medzi súbormi z enginu do aplikácie (`scripts/quality/measure-boundary.mjs`; zoznam hrán predstavuje backlog nápravy rozdelenia jadra/modulov v4). Samostatné spustenie = informatívny report (rovnaký ako `quality:boundary`). `check:boundary:ratchet` (spúšťané v CI a tiež v ratchet slučke rýchlych brán v `quality.yml`) blokuje, keď počet prekročí horný limit `metrics.boundaryOpenSseToSrc` v `quality-baseline.json` — počiatočne nastavený na nameraných 771, `direction: down`; `--update` ho môže iba znížiť; pri PR je relatívny voči základnej vetve (`--base-ref`, pozri nižšie)                                                                                                                                                                                                                                                                                       | Áno (ratchet)                                |
| `check:route-validation:t06`      | Prítomnosť schém Zod na všetkých trasách (pravidlá úrovne 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Áno                                          |
| `check:any-budget:t11`            | Počet `@ts-expect-error // any` neprekračuje rozpočet (úroveň 11, catraca)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Áno                                          |
| `check:provider-consistency`      | Každý poskytovateľ v `providers.ts` má zodpovedajúcu položku v `providerRegistry.ts` (a naopak, v rámci zoznamu povolených položiek)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Áno                                          |
| `check:model-lifecycle`           | Tri ručne udržiavané smerovacie tabuľky zostávajú konzistentné so snapshotom životného cyklu uloženým v repozitári (#11503): `FITNESS_TABLE` (`taskFitness.ts`) nepriraďuje skóre žiadnemu vyradenému ID, ktoré dokáže `REGISTRY` smerovať; každý cieľ `BUILT_IN_ALIASES` sa nachádza v `REGISTRY` a nenachádza sa v snapshote vyradených ID; každé vyradené ID, ktoré je stále v `REGISTRY`, je presmerované alebo uvedené v `allowedRetiredInCatalog`; a žiadny zdroj ani cieľ `DEFAULT_DEGRADATION_MAP` sa v tomto snapshote nenachádza medzi vyradenými. Toto nedokazuje, že model momentálne poskytuje aktívny nadradený systém. Offline — porovnáva s `config/quality/model-lifecycle.json`, ktorý sa ručne aktualizuje pomocou `npm run quality:refresh-model-lifecycle` (vyžaduje sieť; nie je zapojené do CI). `allowedRetiredInCatalog` je postupne sprísňovaná poistka: položku pridajte iba spolu so sledovacím problémom. | Áno                                          |
| `check:fetch-targets`             | Každé `fetch("/api/...")` v klientskom `src/` smeruje na skutočný súbor `route.ts`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Áno                                          |
| `check:deps`                      | Všetky závislosti, ktoré možno nainštalovať pomocou `npm install`, vo všetkých súboroch `package.json` v repozitári sa nachádzajú v `dependency-allowlist.json`; nové závislosti bez pevne určenej verzie alebo balíky s preklepovým názvom sú označené                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Áno                                          |
| `audit:deps`                      | `npm audit` (koreňový projekt + electron) — žiadne upozornenia s vysokou/kritickou závažnosťou (prekrýva sa s osv `check:vuln-ratchet`; pozrite si Rationalizačný backlog)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Áno                                          |
| `check:lockfile`                  | Integrita súboru `package-lock.json` — register https, kontrolné súčty integrity, žiadne prepísania hostiteľov                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Áno                                          |
| `check:licenses`                  | Zoznam povolených licencií SPDX pre produkčné závislosti                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Áno                                          |
| `check:tracked-artifacts`         | Žiadne zostavovacie artefakty ani zaznamenané symbolické odkazy na `node_modules` (spúšťa sa aj v husky pre-commit; pre-push je zámerne nenáročný — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Áno                                          |
| `check:ai-attribution`            | Žiadna pätička `Co-Authored-By` od AI/bota ani pätička o generovaní pomocou AI v commitoch, názve či tele PR — pevné pravidlo č. 16 (v slučke rýchlych kontrol v `quality.yml` pre PR→`release/**` — číta dátovú časť udalosti, mimo PR nevykoná žiadnu operáciu — a krok iba pre PR v kontrole lint v `ci.yml` pre PR→`main`; tiež hook husky `commit-msg`; ľudskí spoluautori sú povolení; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `check:vitest-exclusions`         | Každá výnimka Vitest uvádza sledovaný problém a nachádza sa v `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Áno                                          |
| `check:file-size`                 | Zdrojové súbory (`.ts`/`.tsx` v `src/`, `open-sse/`, `electron/`, `bin/`) neprekračujú limit `cap` a testovacie súbory (`*.test.ts(x)`) limit `testCap`; súbory zmrazené v `file-size-baseline.json` (`frozen` / `testFrozen`) nesmú prekročiť svoju zaznamenanú veľkosť                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Áno                                          |
| `check:error-helper`              | Chybové odpovede v exekútoroch/obslužných rutinách používajú `buildErrorBody()` / `sanitizeErrorMessage()` (pevné pravidlo č. 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Áno                                          |
| `check:migration-numbering`       | Migračné SQL súbory sú číslované postupne, bez medzier alebo duplicít                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Áno                                          |
| `check:public-creds`              | Žiadne literály OAuth `client_id`/`client_secret` ani webové kľúče Firebase mimo `publicCreds.ts` (pevné pravidlo č. 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Áno                                          |
| `check:db-rules`                  | Žiadne nespracované SQL mimo modulov `src/lib/db/`; žiadne hromadné importy z `localDb.ts` (pevné pravidlá č. 2/5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Áno                                          |
| `check:known-symbols`             | Exekútory poskytovateľov, stratégie smerovania a prekladače zaregistrované vo svojich dispečerských tabuľkách sa zhodujú so súbormi na disku — žiadne osirotené ani nedeklarované symboly                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Áno                                          |
| `check:route-guard-membership`    | Každá trasa, ktorá spúšťa podradený proces, je klasifikovaná pomocou `isLocalOnlyPath()` (pevné pravidlá č. 15/17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Áno                                          |
| `check:test-discovery`            | Každý súbor `*.test.ts` / `*.spec.ts` v repozitári je zachytený aspoň jedným nástrojom na spúšťanie testov (západka: zoznam osirelých súborov v `test-discovery-baseline.json` sa môže iba zmenšovať)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Áno                                          |
| `check:agent-skills-sync`         | Vygenerované artefakty agent-skills zodpovedajú ich zdrojovému katalógu (bez odchýlok)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `check:provider-asset-provenance` | Logá/aktíva poskytovateľov majú zaznamenaný údaj o pôvode                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `lint:json`                       | Konfiguračné súbory JSON je možné analyzovať a spĺňajú pravidlá lintovania repozitára                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `typecheck:core`                  | Kompilácia TypeScriptu bez chýb (iba informatívne upozornenia)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Áno                                          |
| `typecheck:noimplicit:core`       | Striktné `noImplicitAny` — s výhľadom do budúcnosti; mnohé už existujúce miesta volania stále vyžadujú anotácie                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | **Informatívne** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` obmedzené na `src/app/(dashboard)/**` (#7033) — starostlivo vybraný zoznam 27 súborov v `typecheck:core` neobsahuje žiadne TSX súbory ovládacieho panela a ani `next build` ich nikdy typovo nekontroluje (`next.config.mjs` nastavuje `ignoreBuildErrors: true`), takže regresie osirelých identifikátorov v tejto oblasti (#6625/#6909) boli pre CI neviditeľné. Rozdiely sa porovnávajú so zmrazenou východiskovou hodnotou počtu chýb podľa súboru/kódu TS (`config/quality/dashboard-typecheck-baseline.json`, rovnaký vzor vynucovania zastaranosti ako pri `check:known-symbols`) — kontrola zlyhá iba pri NOVÝCH chybách nad rámec východiskového počtu; po oprave už existujúcej chyby znížte východiskovú hodnotu pomocou `--update`.                                                                                                                                                                                  | Áno                                          |

### Úloha: `quality-gate`

Spúšťa sa po `test-coverage`. Pri zlyhaní blokuje zlúčenie.

| Skript                       | Overuje                                                                                                                                                                                                     | Blokovanie               |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `quality:collect`            | Vytvára `quality-metrics.json` (počet upozornení ESLint, pokrytie zo zlúčenej správy segmentov)                                                                                                             | Áno (predchádza západke) |
| `quality:ratchet`            | Žiadna metrika v `quality-baseline.json` sa nezhoršila (upozornenia ESLint ≤ základná hodnota; pokrytie ≥ základná hodnota)                                                                                 | Áno                      |
| `check:duplication`          | Duplikácia kódu (jscpd@4) neprekračuje základnú hodnotu v `quality-baseline.json`                                                                                                                           | Áno                      |
| `check:complexity`           | Cyklomatická zložitosť na úrovni súboru neprekračuje limit (jadro ESLint `complexity` + `max-lines-per-function`)                                                                                           | Áno                      |
| `check:cognitive-complexity` | Západka kognitívnej zložitosti (`eslint-plugin-sonarjs`) — samostatný priechod ESLint; CI spúšťa oba zlúčené do jediného kroku `check:complexity-ratchets`                                                  | Áno                      |
| `check:dead-code`            | Západka nepoužitých exportov/súborov (knip) sa nezhoršila oproti základnej hodnote                                                                                                                          | Áno                      |
| `check:compression-budget`   | Limit benchmarku kompresie — minimálne úspory tokenov pre jednotlivé enginy sa nesmú zhoršiť                                                                                                                | Áno                      |
| `check:type-coverage`        | Západka percentuálneho pokrytia typmi (`type-coverage`) sa nezhoršila; do veľkej miery nahrádza `typecheck:noimplicit:core`                                                                                 | Áno                      |
| `check:codeql-ratchet`       | Počet otvorených upozornení CodeQL sa nezhoršil (načítava sa cez `gh api`; bez tokenu sa kontrola korektne preskočí) — frekvencia obnovovania a manuálne spustenie: pozrite si nižšie časť „Západka CodeQL“ | Áno                      |

### Úloha: `quality-extended`

Celá úloha je poradná (`continue-on-error: true`). Západky založené na npm sa spúšťajú
skutočne; externé skenery sa inštalujú prostredníctvom `gh release download` a samy sa preskočia (exit 0),
ak binárny súbor stále chýba.

| Skript                   | Overuje                                                                                                                                                                                                                                                              | Blokovanie                                             |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| `check:circular-deps`    | Žiadne cyklické závislosti (dpdm)                                                                                                                                                                                                                                    | **Poradné**                                            |
| `check:bundle-size`      | Veľkosť balíka neprekračuje limit                                                                                                                                                                                                                                    | **Poradné**                                            |
| `check:secrets`          | Skenovanie tajných údajov (gitleaks) — preskočí sa, ak binárny súbor chýba                                                                                                                                                                                           | **Poradné**                                            |
| `check:vuln-ratchet`     | Zraniteľnosti závislostí (osv-scanner) sa nezhoršili — preskočí sa, ak binárny súbor chýba                                                                                                                                                                           | **Poradné**                                            |
| `check:workflows`        | Kontrola pracovných postupov (actionlint + zizmor); chýbajúce alebo nefunkčné skenery, neplatné správy či chýbajúca základná hodnota západky spôsobia zlyhanie so stavom INCOMPLETE. Platné nálezy sa riadia vybranou striktnou, poradnou alebo západkovou politikou | Vykonanie je povinné; západka zizmor je v CI blokujúca |
| `check:openapi-breaking` | Nekompatibilné zmeny verejného kontraktu API (`openapi.yaml`) oproti základnej vetve (oasdiff) — vytvára `openapiBreaking=N`; preskočí sa, ak oasdiff chýba alebo sa základná špecifikácia nedá načítať                                                              | **Poradné**                                            |

### Úloha: `docs-sync-strict`

Spúšťa sa pri každom PR do `main`. Pri zlyhaní blokuje zlúčenie.

| Skript                         | Overuje                                                                                                                                                                                     | Blokujúce                 |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| `check:docs-all`               | Metakontrola, ktorá postupne spúšťa 6 čiastkových kontrol uvedených nižšie                                                                                                                  | Áno                       |
| ↳ `check:docs-sync`            | Konzistentnosť verzií v CHANGELOG / OpenAPI / llm.txt                                                                                                                                       | Áno                       |
| ↳ `check:docs-counts`          | Počty v texte (počet poskytovateľov, počet migrácií atď.) sú v rámci sprísňujúceho sa tolerančného rozsahu skutočných počtov                                                                | Áno                       |
| ↳ `check:env-doc-sync`         | Každá premenná prostredia v `.env.example` je zdokumentovaná v tabuľke dokumentácie a naopak                                                                                                | Áno                       |
| ↳ `check:deprecated-versions`  | V dokumentácii sa nenachádzajú žiadne reťazce zastaraných verzií                                                                                                                            | Áno                       |
| ↳ `check:doc-links`            | Interné odkazy Markdown v dokumentácii odkazujú na skutočné súbory (formát `[text]`/`(path)`)                                                                                               | Áno                       |
| ↳ `check:fabricated-docs`      | Trasy, premenné prostredia, príkazy CLI, názvy hookov a cesty k súborom uvedené v dokumentácii existujú v kódovej báze. Tvrdá kontrola cez `--strict`; bez príznaku len nezáväzné zlyhanie. | Áno (cez `--strict` v CI) |
| `check:cli-i18n`               | Reťazce príkazov CLI sa nachádzajú vo všetkých súboroch lokalizácií i18n                                                                                                                    | Áno                       |
| `check:openapi-coverage`       | Špecifikácia OpenAPI pokrýva aspoň postupne zvyšovanú minimálnu hranicu skutočných trás                                                                                                     | Áno                       |
| `check:openapi-security-tiers` | Anotácie úrovní zabezpečenia v `openapi.yaml` sú konzistentné s klasifikáciami v `routeGuard.ts`                                                                                            | **Odporúčacie**           |
| `check:openapi-routes`         | Každá cesta v `openapi.yaml` zodpovedá skutočnému súboru `route.ts` (ochrana proti halucináciám)                                                                                            | Áno                       |
| `check:docs-symbols`           | Každý odkaz `/api/...` v `docs/**/*.md` zodpovedá skutočnému súboru `route.ts` (ochrana proti halucináciám)                                                                                 | Áno                       |
| `i18n translation drift`       | Nepreložené kľúče v súboroch lokalizácií i18n — iba upozornenie                                                                                                                             | **Odporúčacie**           |

### Úloha: `i18n-ui-coverage`

| Skript                            | Overuje                                                                                                                                                                                                                                       | Blokujúce       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| `check-ui-keys-coverage` (inline) | Pokrytie kľúčov i18n používateľského rozhrania je ≥ 65 %                                                                                                                                                                                      | Áno             |
| `check-ui-value-drift` (inline)   | Prepísaná anglická **hodnota** po sebe nezanechá žiadny zastaraný preklad                                                                                                                                                                     | Áno             |
| `check-new-key-coverage` (inline) | **Nový** anglický kľúč je preložený v každej lokalizácii — značka `__MISSING__:` je zamietnutá                                                                                                                                                | Áno             |
| `check-translation-ratio`         | Pomer skutočných prekladov v jednotlivých lokalizáciách (hodnoty identické s angličtinou / zástupné hodnoty / chýbajúce listy mimo zoznamu povolených výnimiek) nesmie prekročiť `config/quality/i18n-translation-baseline.json` + toleranciu | **Odporúčacie** |

Vyžaduje `fetch-depth: 0` — kontrola zmien hodnôt porovnáva `en.json` so základom zlúčenia.

#### `check-ui-value-drift` — kontrola zastaraných prekladov

Zachytáva jedinú regresiu i18n, ktorú ostatné kontroly zo svojej podstaty nedokážu odhaliť: anglická hodnota
sa prepíše, no preklady odvodené od _predchádzajúcej_ anglickej verzie zostanú, takže
používatelia iných jazykov naďalej čítajú sebavedomo formulovaný, no už nesprávny text.

Toto sa skutočne dostalo do produkcie. Hodnota `oauthModal.googleOAuthWarning` bola prepísaná pri pridaní
pomocníka na prihlásenie Antigravity (#5203); **39 zo 43 lokalizácií** si ponechalo text, ktorý operátorom
hovoril, aby „skopírovali celú URL adresu a vložili ju nižšie“ — postup, ktorý pri tomto poskytovateľovi
nemožno dokončiť. Problém zostal nepovšimnutý až do #8463, pretože:

- `sync-ui-keys` dopĺňa iba kľúče, ktoré **chýbajú**, nikdy nie tie, ktoré sú **zastarané**;
- `check-ui-keys-coverage` počíta _prítomnosť_ kľúčov, takže zastaraný preklad sa považuje za pokrytý;
- `check-translation-drift` sleduje dokumentačné zrkadlá `docs/i18n/<locale>/**.md` —
  nikdy nečíta `src/i18n/messages/*.json`. V úlohe `docs-sync-strict` je blokujúca od opätovnej synchronizácie
  2026-09: upravte základný dokument → `npm run i18n:run -- --files=<doc>` (na úrovni sekcie, nenáročné).

**Zohľadňuje rozdiely, nie je založená na baseline.** Porovnáva `en.json` v merge base
s pracovným stromom; pre každý kľúč, ktorého anglická hodnota sa zmenila, je každý lokalizačný
súbor, ktorý stále obsahuje nezmenený preklad, zastaraný. Týmto sa zámerne **zmrazuje existujúci dlh**
— z diffu nemožno zistiť, z ktorej starej anglickej verzie dlhodobo používaný preklad pochádza,
preto kontrola posudzuje iba to, čo ovplyvňuje aktuálna zmena. Alternatíva (baseline s hashom
pre každý kľúč) by vyžadovala približne 600 KB vygenerovaný súbor, 3× väčší než najväčší
existujúci baseline, ktorý by sa menil pri každom i18n PR.

Kontrolu možno splniť dvoma spôsobmi:

1. aktualizovať dotknuté preklady alebo
2. nastaviť ich na `__MISSING__:<nový anglický text>` — runtime potom poskytne opravený anglický
   text (`src/i18n/request.ts::deepMergeFallback`, #7258) a kľúč zaradí do frontu na preklad.

Ak sa zmenil **význam** reťazca, uprednostnite **premenovanie kľúča**: nový kľúč nemôže zdediť
zastaraný preklad. Tento postup bol použitý v #8463.

```bash
npm run i18n:check-value-drift          # striktné (spúšťa CI)
npm run i18n:check-value-drift:warn     # iba report
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Skončí s kódom 0 a hlásením `SKIP reason=base-unresolved`, keď základný katalóg nemožno prečítať
(plytký klon bez základnej referencie), podobne ako `check-openapi-breaking`.

### Úloha: `i18n`

Úplná matica validácie i18n (jedna úloha pre každý lokalizačný súbor). Celá úloha je informatívna.

| Skript                          | Validuje                           | Blokovanie                                                  |
| ------------------------------- | ---------------------------------- | ----------------------------------------------------------- |
| `validate_translation.py quick` | Úplnosť prekladu podľa lokalizácie | **Informatívne** (`continue-on-error: true` pre celú úlohu) |

### Úloha: `pr-test-policy`

Spúšťa sa iba pri pull requestoch.

| Skript                 | Validuje                                                                                                                                    | Blokovanie |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `check:pr-test-policy` | PR, ktoré menia produkčný kód v `src/`, `open-sse/`, `electron/` alebo `bin/`, musia zahŕňať alebo aktualizovať testy (tvrdé pravidlo č. 8) | Áno        |
| `check:test-masking`   | Zmenené testovacie súbory neznižujú celkový počet asertov ani nepridávajú tautológie `assert.ok(true)`                                      | Áno        |
| `check:pr-evidence`    | Telo PR uvádza dôkazy o testovaní/VPS pre danú zmenu (automatizuje tvrdé pravidlo č. 18 prehľadávaním textu PR — krehké, pozri Backlog)     | Áno        |

### Úloha: `test-vitest`

Spúšťa sa po `build`. Pri zlyhaní blokuje zlúčenie.

| Sada             | Validuje                                                     | Blokovanie                                                                                                             |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | Server MCP (110 nástrojov), autoCombo, cache — runner vitest | Áno                                                                                                                    |
| `test:vitest:ui` | Testy komponentov používateľského rozhrania — runner vitest  | **Blokujúce** — existujúce zlyhania sú explicitne vylúčené v `vitest.config.ts`; nové zlyhania spôsobia zlyhanie úlohy |

### Nočné workflowy (plánované, informatívne)

Spúšťajú sa podľa plánu cron (a cez `workflow_dispatch`), nikdy nie pri PR. Všetky sú informatívne.

| Workflow               | Validuje                                                                                                                                                                   | Blokovanie       |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| `nightly-property`     | Testy vlastností fast-check s náhodným seedom a vysokým počtom spustení                                                                                                    | **Informatívne** |
| `nightly-resilience`   | Kontrola rastu heapu, vkladanie chaotických porúch, záťažové/dlhodobé testy k6                                                                                             | **Informatívne** |
| `nightly-llm-security` | Ochrana pred injekciami promptfoo (režim blokovania) + sondy garak (preskočené bez tajného kľúča poskytovateľa)                                                            | **Informatívne** |
| `nightly-schemathesis` | Fuzzing kontraktu OpenAPI (schemathesis) voči živej inštancii OmniRoute s použitím `docs/openapi.yaml` — odhaľuje porušenia špecifikácie/neošetrené chyby 500 (Fáza 8 B.4) | **Informatívne** |
| `nightly-mutation`     | Skóre mutačného testovania Stryker pre rýchlu vetvu jednotkových testov — prežívajúce mutanty odhaľujú slabé aserty                                                        | **Informatívne** |
| `nightly-compat`       | Matica kompatibility enginu Node v podporovaných rozsahoch `engines.node`                                                                                                  | **Informatívne** |

Výkonnostné baseline (heap, TTFB, čas zostavenia) sa zaznamenávajú, ale nekontrolujú: pozri [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Fáza Velocity (2026-08-30 → v4.0 LTS): každá východisková hodnota uvoľnená o 20 %

Rozhodnutie vlastníka (2026-08-30): až do modularizácie vo v4.0 je rýchlosť vydávania dôležitejšia
než udržiavanie technického dlhu na stanovenej úrovni. Každá **číselná** východisková hodnota postupného sprísňovania bola jednorazovo
a auditovateľne uvoľnená o 20 % a fáza je deklarovaná v `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| Čo sa zmenilo                                                                                                                                                                                                                             | Kde                                                                                                    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — počty, pri ktorých je nižšia hodnota lepšia, ×1.2; percentá, pri ktorých je vyššia hodnota lepšia, ÷1.2 (minimum pokrytia zostalo 60, `eslintErrors` zostáva 0, `eslintWarnings` 0 → 20 % zmrazeného počtu potlačení) | `quality-baseline.json` (poznámka `_relax_velocity_2026_08_30` uvádza každú zmenu pred → po)           |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                                          | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, každý limit riadkov `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                                  | `file-size-baseline.json`                                                                              |
| počty pre jednotlivé súbory / súbory s kódom TS ×1.2                                                                                                                                                                                      | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                                       | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` má len informatívny charakter, kým `_policy.requireTighten === false`                                                                                                                                                 | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| nočná úloha `bank-ratchet-shrinks` je pozastavená (uložila by namerané zníženie a zrušila rezervu)                                                                                                                                        | `.github/workflows/nightly-release-green.yml`                                                          |

Zoznamy povolených výnimiek (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **nie sú** rozpočty a neboli zmenené. Politické brány úspechu/neúspechu (tajomstvá, pravidlá SQL,
zmluva dokumentácie/premenných prostredia, parita i18n, jednotkové testy) zostávajú nezmenené — neúspešný test je stále neúspešný test.

**Nástroje**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — jednorazové
  uvoľnenie (`scripts/quality/relax-baselines.mjs`); odmietne sa spustiť druhýkrát s rovnakou
  poznámkou.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  meria každú číselnú bránu rovnakým spôsobom ako CI a vypíše zostávajúcu rezervu pre každú bránu
  (`scripts/quality/baseline-headroom.mjs`). Nočná úloha `baseline-headroom` zverejňuje
  tabuľku v súhrne behu pracovného postupu a nahráva svoju správu vo formáte JSON/Markdown ako
  `baseline-headroom-<run_id>` s dobou uchovania 90 dní. Riadky s upozornením a kritickým stavom označujú brány,
  ktoré sú do 10 % od svojho limitu alebo ho už prekročili. Tieto správy kontrolujte ako včasné varovanie
  pred vyčerpaním rozpočtov; skontrolujte poznámky `_rebaseline_*` príslušnej brány. Úloha už
  nevytvára ani neaktualizuje trvalý problém; #12149 uchováva staršiu históriu správ.

**Režim nového kódu (Clean-as-You-Code) — od 2026-08-30, iba zrýchlená cesta PR**

Pri udalostiach `pull_request` odovzdáva `quality.yml` parameter `--base-ref <PR base SHA>` príkazom `check:file-size`,
`check:complexity-ratchets` a `check:dead-code`. Pre `check:complexity-ratchets` a
`check:dead-code` brána porovnáva HEAD so spoločným predkom **obmedzene iba na súbory, ktorých sa PR
dotkol** (`scripts/check/newCodeMode.mjs`: spoločný predok sa materializuje v dočasnom
`git worktree`, ESLint/knip sa spustia v ňom aj na HEAD a porovnajú sa počty pre jednotlivé súbory):

- **blokujúce** — PR pridal porušenia cyklomatickej/kognitívnej zložitosti alebo nepoužívané exporty v zmenených súboroch
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` v protokole);
- **informatívne** — globálny súčet voči zmrazenej východiskovej hodnote. Zdedený posun nikdy nespôsobí zlyhanie
  nevinného PR; posun sa znova zmrazí pri zosúladení vydania a sleduje ho úloha kontroly rezervy.

`check:file-size` používa základnú referenciu podľa vlastných pravidiel (`scripts/check/check-file-size.mjs`, #8522):
kontroluje každý zdrojový a testovací súbor v strome, načíta počet jeho riadkov v základnej verzii PR
pomocou `git show` a súbor označí ako neúspešný iba vtedy, keď prekročí vyššiu hodnotu zo svojho východiskového stropu
(`frozen` / `testFrozen` alebo `cap` / `testCap` pre súbor mimo východiskovej hodnoty) a svojej veľkosti
v základnej verzii. Súbor, ktorý sa už v základnej verzii odchýlil, preto nikdy nespôsobí zlyhanie nevinného PR.

`check:boundary:ratchet` uplatňuje rovnaké pravidlo na svoje jediné číslo
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): pri udalostiach PR odovzdávajú
rýchle kontroly v `quality.yml` aj lint úloha v `ci.yml` základné SHA PR, základný commit sa
meria z exportu `git archive` a PR zlyhá iba vtedy, keď jeho počet hrán `open-sse → src`
prekročí vyššiu z hodnôt `metrics.boundaryOpenSseToSrc` a počtu v základe. Posun základu
nad strop sa nahlási (`base drift herdado`), ale nikdy nespôsobí zlyhanie nevinného PR; push → main
zachováva absolútny strop a pri nerozlíšiteľnom základnom SHA sa s upozornením použije tento strop.

Spustenia `workflow_dispatch`, záverečná kontrola úspešnosti vydania a nočná úloha na kontrolu rezervy nemajú základ PR
a zachovávajú absolútne (globálne) porovnanie. Pokrytie, duplicita a pokrytie typmi zatiaľ zostávajú globálne
(ich nástroje nedokážu lacno vytvoriť rozdiely pre jednotlivé súbory) — sú kandidátmi na rovnaké riešenie.

**Ukončenie fázy vo v4.0 (LTS = prísnejšie než predtým, nie „späť do normálu“)**

1. Na čistom vrchole `release/v4.0.0`: pre záznam spustite `npm run quality:headroom --json`, potom
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update` a `--update` pre každú kontrolu typecheck —
   každá základná hodnota klesne na nameranú hodnotu.
2. Odstráňte `_policy` z `quality-baseline.json` (opätovne aktivuje `--require-tighten` a nočné
   vytváranie rezervy), obnovte `THRESHOLD = 36` (alebo vyššiu hodnotu) v `check-openapi-coverage.mjs`.
3. Sprísnite limity nad rámec nameraných hodnôt tam, kde sa modularizácia vyplatila: `cap` pre veľkosť súboru späť na 1000
   (alebo 800), minimálne pokrytie +5, počet nepoužívaných exportov 0 pre modularizované balíky.

## Základná línia ratchetu (`quality-baseline.json`)

Mechanizmus ratchetu (`scripts/quality/check-quality-ratchet.mjs`) načíta súbor `quality-baseline.json`
a porovná ho s čerstvo zozbieraným súborom `quality-metrics.json`. Každá metrika, ktorá sa zhorší
nad rámec svojej hodnoty epsilon, spôsobí zlyhanie zostavenia.

Aktuálne sledované metriky:

| Metrika               | Smer   | Význam                                |
| --------------------- | ------ | ------------------------------------- |
| `eslintWarnings`      | `down` | Počet upozornení ESLint nesmie narásť |
| `coverage.statements` | `up`   | Pokrytie príkazov nesmie klesnúť      |
| `coverage.lines`      | `up`   | Pokrytie riadkov nesmie klesnúť       |
| `coverage.functions`  | `up`   | Pokrytie funkcií nesmie klesnúť       |
| `coverage.branches`   | `up`   | Pokrytie vetiev nesmie klesnúť        |

Ak chcete po skutočnom zlepšení aktualizovať základnú líniu:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

Príznak `--update` zapíše aktuálne namerané hodnoty do súboru `quality-baseline.json`.
Tento súbor potvrďte spolu so zmenou, ktorá metriku zlepšila. PR, ktorý zlepší
metriku bez aktualizácie základnej línie, zachytí `--require-tighten` (Fáza 6A.5,
implementácia sa pripravuje).

### Ratchet CodeQL: frekvencia obnovenia a manuálne spustenie

`check:codeql-ratchet` načítava **stav repozitára, obnovovaný podľa plánu — nie pri každom PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` hlási
`state: configured`, `schedule: weekly`: ide o kontrolu prostredníctvom predvoleného nastavenia GitHubu, nie o analýzu
pri každom odoslaní zmien. Dôsledok: po zlúčení PR, ktorý OPRAVUJE upozornenia, ratchet naďalej načítava
starý, vyšší počet až do spustenia ďalšej naplánovanej kontroly — preto hlási regresiu
pri každom otvorenom PR vrátane nadväzujúcich PR k opravnému PR, až kým sa kontrola neaktualizuje.

**Manuálne obnovenie**: `gh workflow run codeql.yml --ref release/vX.Y.Z` znova spustí
analýzu a v priebehu niekoľkých minút opätovne zverejní upozornenia. Najprv si prečítajte `.github/workflows/codeql.yml`
— jeho hlavička vysvetľuje, že je určený **iba pre `workflow_dispatch`**, **pretože je v konflikte s
„predvoleným nastavením“ GitHubu** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). Obnovenie spúšťačov `push`/`pull_request`/
`schedule` najskôr vyžaduje **zásah vlastníka**: Nastavenia → Zabezpečenie kódu →
CodeQL: Predvolené → Rozšírené. Bez tohto prepnutia nepridávajte spúšťač `schedule:` — spôsobí
iba neúspešné spustenia.

**Po poklese počtu sprísnite základnú líniu** — `node scripts/check/check-codeql-ratchet.mjs
--update` zapíše nový nameraný počet do `quality-baseline.json` →
`metrics.codeqlAlerts.value`, takže ratchet nebude potichu povoľovať regresiu späť
k pôvodnému limitu. Praktický príklad (2026-09-02/03): PR #12502 opravil 7 skutočných upozornení
(13 → 6 nameraných otvorených); PR #12530 sprísnil zmrazenú základnú líniu z 11 → 6, aby sa zhodovala; zostávajúcich
6 upozornení bolo následne zamietnutých s individuálnym odôvodnením pre každé upozornenie, čím sa počet otvorených upozornení znížil na 0.

**O zamietnutiach rozhoduje operátor (Prísne pravidlo č. 14)** — nikdy nezamietajte upozornenie CodeQL
bez zaznamenania technického odôvodnenia v komentári k zamietnutiu: `won't fix` pre
požiadavku nadradeného protokolu, `used in tests` pre testovaciu pomôcku, `false positive`
pre sanitizér, ktorý CodeQL nedokáže rozpoznať (precedens: `docs/security/ERROR_SANITIZATION.md`).

---

## Zásady opakovania testov (WS5.4, v3.8.49)

Opakovanie sa nastavuje pre každý runner samostatne, nikdy nie globálne — plošné opakovanie mení skutočné regresie
na neviditeľné nestability:

| Runner           | Zásady                                                                                                                                             | Dôvod                                                                                                                                    |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` iba v CI, s `trace: on-first-retry`                                                                                                   | Časovanie prehliadača/siete je skutočne nedeterministické; jedno opakovanie so záznamom zmení nestabilitu na diagnostikovateľný artefakt |
| Vitest           | ŽIADNE globálne opakovanie. Preukázateľne nestabilný test dostane explicitné opakovanie pre konkrétny test (viditeľné v diffe, skontrolované v PR) | Udržiava zoznam testov v karanténe v repozitári, nikdy nie skrytý                                                                        |
| node:test (unit) | ŽIADNE opakovanie, nikdy                                                                                                                           | Nestabilný jednotkový test je chyba v teste — opravte ho, nespúšťajte ho jednoducho znova                                                |

Cieľové SLO po zavedení telemetrie nestabilít (WS5.2/5.3): <1 % miera nestability na test
(prah „opraviť teraz“), ≥95 % úspešnosť na pipeline. Referenčné hodnoty z odvetvia —
prekalibrujte ich podľa našich vlastných meraní.

## Odchýlka západiek na úrovni vydania (WS5.5, v3.8.49)

Keď sa západka (veľkosť súboru, zložitosť, upozornenia eslint) zhorší na ČISTOM vrchole
vydania — t. j. zhoršila ju KOMBINÁCIA zlúčení a žiadny jednotlivý PR nereprodukuje
regresiu vo svojej vlastnej vetve — oprava patrí **kapitánovi vydania, jednorazovo, vo
vetve vydania**: uprednostnite extrakciu/refaktoring; základnú hodnotu aktualizujte iba so zdokumentovaným
odôvodnením. Nikdy neprenášajte kombinovanú odchýlku na PR prispievateľa a nikdy
neaktualizujte základnú hodnotu pre každý PR samostatne (to skrýva skutočné regresie). Najprv rozlíšte príčinu: reprodukujte
neúspešný stav na čistom vrchole v skúšobnom worktree skôr, než predpokladáte, že ho spôsobil váš PR.

## Ukladanie sprísnení západiek — smerom nadol (#8584)

Západka je automatická iba napoly, a práve v nesprávnej polovici. **Zvýšenie** limitu je
manuálna úprava JSON, ktorá trvá desať sekúnd a predstavuje najrýchlejší spôsob, ako odblokovať neúspešný PR.
**Zníženie** limitu vyžaduje, aby niekto spustil `--update` a commitol výsledok — a kým
nebola nasadená úloha `bank-ratchet-shrinks`, žiadny workflow ju nespúšťal. Nameraný dôsledok
(2026-07-25): 18 zmrazených súborov už malo najviac 800 riadkov, teda limit pre nové súbory, pričom najhorší
prípad dosahoval 132× (`src/shared/validation/schemas.ts`, 19 riadkov s limitom 2 523); strop
zložitosti sa posunul z `1794 → 2169` počas približne 37 poznámok o aktualizácii základnej hodnoty s presne jedným
znížením (−1); a fráza „sprísniť pomocou `--update` v ďalšom cykle“ bola napísaná 31-krát a dodržaná
raz. Limit, ktorý pretrvá dlhšie než kód, pre ktorý vznikol, potichu mení každý dokončený
rozklad na povolenie rastu pre kohokoľvek, kto súbor upraví nabudúce.

`nightly-release-green.yml` → úloha **`bank-ratchet-shrinks`** uzatvára túto slučku:

|               |                                                                                                                           |
| ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Spúšťa sa pri | `schedule` (3× denne) + `workflow_dispatch` — zámerne **nie** pri `push`                                                  |
| Meria         | najvyššiu vetvu `release/vX.Y.Z`, s rovnakým rozlíšením a ochranou pred injektovaním ako `release-green`                  |
| Zapisuje      | `check:file-size --update` a `check:complexity-ratchets --update` (obe sú svojou konštrukciou určené iba na sprísňovanie) |
| Overuje       | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                                  |
| Dodáva        | jeden vždy aktuálny PR proti vetve vydania — vynútene aktualizovaný, nikdy nevytvára spam                                 |

Ukladanie sa vykonáva dávkovo namiesto každého pushu, pretože nemá požiadavku na latenciu (sprísnenie
uložené do 8 hodín je v poriadku), zatiaľ čo spustenie po každom zlúčení by počas kampaní
zlučovania opakovane zostavovalo vetvu PR a zakaždým by platilo náklady na úplný prechod ESLint. Detekcia zostáva naviazaná na
push (`release-green`); iba ukladanie prebieha dávkovo.

### Bezpečnostný overovač

Úloha zapisuje do základných hodnôt bez dozoru, takže prijateľnosť tohto postupu zabezpečuje
`verify-ratchet-bank.mjs`. Porovná strom po vykonaní `--update` so stavom `HEAD` a **preruší úlohu
pred vytvorením akéhokoľvek commitu** — bez otvorenia PR — pokiaľ každá zmena nie je jednou z nasledujúcich:

- číselná položka `frozen` / `testFrozen` bola **znížená** alebo **odstránená**
- `complexity-baseline.json` → `count` bolo **znížené**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` bolo **znížené**

Čokoľvek iné zlyhá: zvýšenie čísla, pridanie položky, zmena `cap`/`testCap` alebo
odstránenie/prepísanie poznámky `_rebaseline_*` (tieto poznámky predstavujú auditnú stopu dôvodu existencie
každého stropu a sú uložené v rovnakom objekte `frozen` ako položky súborov).
Bot, ktorý by mohol zvýšiť limit, by bol jednoznačne horší než súčasný stav. Ochrana pred regresiou:
`tests/unit/verify-ratchet-bank.test.ts`.

Úloha nikdy nevykonáva push do `release/*` — PR zlučuje človek, takže nesprávne meranie
sa nemôže dostať do vetvy bez kontroly.

## Zásady zoznamu povolených položiek

Každá brána, ktorá nemôže zlyhať pri už existujúcich porušeniach, používa nemenný zoznam povolených položiek
(napr. `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). Platí táto zásada:

**Odstráňte základnú príčinu; zoznam povolených položiek použite iba vtedy, keď porušenie už existovalo a
nemožno ho opraviť v rámci rovnakého PR.**

Pri pridávaní položky do zoznamu povolených položiek:

1. Pridajte komentár s odôvodnením.
2. Uveďte odkaz na sledovaný problém (napr. `// #3498 — Funkcia fázy 2, zatiaľ neimplementovaná`).
3. Odstráňte položku v tom istom PR, ktoré opravuje porušenie — zastaraná položka, ktorá už
   nepotláča aktívne porušenie, je sama osebe chybou (kontrola zastaraného vynucovania 6A.3
   po implementácii spôsobí zlyhanie brány pri osamotenej položke zoznamu povolených položiek).

**Nepridávajte** položky do zoznamu povolených položiek, aby testy prešli rýchlejšie. Zelená brána s rastúcim
zoznamom povolených položiek vytvára falošný pocit kvality.

### Keď brána vo vašom PR zlyhá

1. **Pozorne si prečítajte výstup brány** — presne uvádza, ktorý súbor alebo symbol
   porušil pravidlo.
2. **Opravte porušenie** — väčšina brán vykonáva deterministické kontroly súborového systému, ktoré prejdú hneď,
   ako je kód správny.
3. **Ak porušenie už existovalo** (t. j. nezaviedli ste ho vy, ale brána ho teraz
   pokrýva): pridajte položku do zoznamu povolených položiek spolu s komentárom obsahujúcim odôvodnenie a odkazom na sledovaný problém.
4. **Ak je brána západková** (pokrytie, upozornenia ESLint, duplicita, zložitosť):
   vaša zmena metriku zhoršila. Opravte základný problém alebo (výnimočne) spustite
   `npm run quality:ratchet -- --update`, ak je zmena zámerná a zhoršenie metriky
   prijateľné — v popise PR však zdokumentujte dôvod.
5. **Poradné brány** (`continue-on-error: true`) sú informačné — neblokujú
   zlúčenie, ale zobrazujú sa v súhrne CI. Napriek tomu ich opravte.

---

## Pridanie novej brány

1. Vytvorte `scripts/check/check-<name>.mjs` (alebo `.ts`). Brány zásad sa ukončujú s kódom 0/1.
   Brány západkového typu zapisujú metriku do `quality-metrics.json` prostredníctvom `collect-metrics.mjs`.
2. Pridajte `"check:<name>": "node scripts/check/check-<name>.mjs"` do `package.json`.
3. Zapojte ju v `.github/workflows/ci.yml` do príslušnej úlohy
   (zásada → `lint` alebo `docs-sync-strict`; západka → `quality-gate`).
4. Ak používa zoznam povolených položiek, aplikujte `reportStaleEntries()` zo súboru
   `scripts/check/lib/allowlist.mjs`, aby sa zastarané položky zisťovali automaticky.
5. Napíšte test v `tests/unit/build/`, ktorý pokrýva detekčnú logiku brány.
6. Aktualizujte tento dokument (pridajte riadok do tabuľky príslušnej úlohy).

---

## Nástroje pre agentov: LSP-in-the-loop (voliteľné)

Okrem brán CI obsahuje OmniRoute aj **voliteľnú** kostru `agent-lsp`
(projektový súbor `.mcp.json`, fáza 7, úloha 15). Vytvorte `.mcp.json`,
aby ste sprístupnili jazykový server TypeScript programovacím agentom, vďaka čomu budú riešiť symboly /
diagnostiku **pred** písaním kódu — ide o doplnok ku `typecheck:core` založený na princípe kompilácie pred tvrdením,
ktorý odstraňuje chyby „vymyslených symbolov“ už pri zdroji. Zámerne sa
nenačítava automaticky (most MCP↔LSP si vyberáte a overujete sami); nefunkčná položka iba zaznamená
chybu pripojenia a nikdy nepreruší relácie.

---

## Zoznam racionalizačných úloh (preskúmanie ROI — fáza 9, vlna 3)

Tento inventár bol 2026-06-17 zosúladený s `ci.yml` (predchádzajúca verzia vynechávala
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Preskúmanie ROI zosúladenej množiny
identifikovalo nasledujúcich kandidátov na racionalizáciu. **Zlúčenia sú mechanické zmeny CI;
prepnutia/odstránenia sú politické rozhodnutia vyhradené pre operátora.** Nič z nižšie
uvedeného zatiaľ nebolo aplikované.

**Vyššie takisto nezdokumentované** (informatívne, nízka výpovedná hodnota): úloha `docs-lint`
(markdownlint + Vale, celá úloha s `continue-on-error`) a samostatné pracovné postupy skenerov
`semgrep.yml` / `codeql.yml` / `scorecard.yml`. Hodnota `semgrepFindings: 0` sa nachádza v
`quality-baseline.json`, ale v `ci.yml` nie je napojená na blokujúcu západku — metrika je
momentálne osirelá.

### Zlúčenie / deduplikácia (mechanické, nižšie riziko)

Každý kandidát bol 2026-06-17 overený voči aktuálnemu stavu brán (dôveruj, ale preveruj);
ukázalo sa, že viaceré „zjavné“ zlúčenia skrývajú dlh a **nie sú** bezproblémovými náhradami.

- **`check:docs-sync` sa spúšťa dvakrát** — samostatne v úlohe `lint` a znova v rámci `check:docs-all` (`docs-sync-strict`) a hooku husky pre pre-commit. ✅ **HOTOVO** — samostatné spustenie v úlohe `lint` bolo odstránené.
- **Skenovanie CVE** — ❌ **NIE JE to bezproblémové zlúčenie.** `audit:deps` tvrdo zlyhá pri ľubovoľnej CVE s vysokou/kritickou závažnosťou; `check:vuln-ratchet` (osv) zlyhá iba pri _regresii_ oproti východiskovej hodnote (aktuálne 1 MODERATE). Odlišná sémantika — odstránením `audit:deps` by sa stratila absolútna brána pre vysokú/kritickú závažnosť. Ponechať obe.
- **Detekcia cyklov** — ✅ **HOTOVO** (#15159 G-01/G-02). Starý text tu označoval `check:cycles` za „zelenú, starostlivo zostavenú“ bránu a odôvodňoval jej zachovanie ako blokujúcej tým, že `check:circular-deps` (dpdm) hlásil 91 cyklov. Tento zelený stav bol **falošne zelený**: `check:cycles` skenoval 5 podadresárov (450 súborov), vyhľadával iba statické `import|export … from` a zahadzoval každý špecifikátor `@/` a `@omniroute/open-sse/`, takže nemohol zachytiť cykly dynamických importov a aliasov, ktoré v repozitári prevládali. Opravené: brána teraz prechádza `src` + `open-sse` (5023 súborov), zhromažďuje špecifikátory z AST TypeScriptu (takže `import("…")` sa započítava a `typeof import("…")` v typovej pozícii nie) a rozpoznáva `paths` z tsconfig. Nachádza **14** cyklov, nie 0. Keďže 14 existujúcich cyklov nemožno opraviť v PR pre bránu, `check:cycles` je teraz **západka** (`--ratchet`, strop `metrics.cycles.value = 14` v `quality-baseline.json`, `direction: down`) — blokuje akúkoľvek _regresiu_ a počet môže iba klesať. CI spúšťa `npm run check:cycles:ratchet`. Postupné odstraňovanie prebieha spolu s **A-01**. `check:circular-deps` (dpdm) zostáva informatívny ako širší druhý názor.
- **Zložitosť** — ✅ **HOTOVO** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): jeden prechod ESLintom, počítanie podľa ruleId, aby východiskové hodnoty cyklomatickej zložitosti + max-lines a kognitívnej zložitosti zostali nezávislé; jednotlivé `check:complexity` / `check:cognitive-complexity` zostávajú na lokálne použitie s `--update`.
- **Ochrana `/api` proti halucináciám** — ✅ **HOTOVO** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): jeden inventár FS pre `src/app/api`, openapi-routes + docs-symbols naďalej hlásia výsledky nezávisle; jednotlivé kontroly zostávajú na lokálne spúšťanie.
- **`check:node-runtime` sa spúšťa v 11 úlohách** — ⚠️ **nízke ROI.** Každá beží na samostatnom runneri a kontrola trvá <1 s; celková úspora je približne 10 s za cenu straty lacnej ochrany v každej úlohe. Nestojí to za súvisiace zmeny.
- **`typecheck:noimplicit:core` v úlohe lint CI** — ✅ **odstránené z úlohy lint** (bolo informatívne s `continue-on-error`); blokujúci typový povrch tvoria `typecheck:core` + `check:type-coverage`. Lokálny skript bol zachovaný.

### Prepnúť / rozhodnúť (politika operátora)

- `check:openapi-security-tiers` (informatívne) — ❌ **NEDÁ SA bezproblémovo prepnúť.** Končí s kódom 0, ale upozorňuje, že viacerým trasám `traffic-inspector` pod `LOCAL_ONLY_API_PREFIXES` chýba anotácia `x-loopback-only: true`. Jej vynútenie si najprv vyžaduje pridanie týchto anotácií do `openapi.yaml`.
- `typecheck:noimplicit:core` (informatívne) — do značnej miery ho nahrádza blokujúca západka `check:type-coverage`. Prepnúť na západku alebo odstrániť redundantný druhý prechod `tsc`.
- `test:vitest:ui` (teraz **blokujúce**) — existujúce zlyhania sú explicitne vylúčené vo `vitest.config.ts` pomocou sledovacích komentárov `// #8618`; nové zlyhania spôsobia zlyhanie úlohy.
- `check:secrets` (gitleaks, blokujúca západka zmrazená na 3 zdokumentovaných falošne pozitívnych nálezoch) — pridať tieto 3 prípady do zoznamu povolených a dostať sa na 0 alebo degradovať na informatívnu kontrolu. Prekrýva sa s natívnym skenovaním tajomstiev v GitHube + `check:public-creds`.
- `check:pr-evidence` (blokujúce, prehľadáva prózu v tele PR pomocou grep) — vysoké riziko falošne pozitívnych nálezov; odstránenie oslabí vynucovanie pevného pravidla č. 18, takže ide o skutočné politické rozhodnutie.
- `semgrep` (samostatné informatívne) — pri rodinách OWASP sa prekrýva s CodeQL; napojiť jeho východiskovú hodnotu na západku alebo ho odstrániť.

---

## Súvisiaca dokumentácia

- Dodávateľský reťazec (pôvod, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — kontrola zhody množín kľúčov

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, úloha `i18n-ui-coverage`).
Porovnáva množinu koncových kľúčov každého súboru `src/i18n/messages/<locale>.json` so súborom `en.json` a zlyhá
pri každom chýbajúcom alebo nadbytočnom koncovom kľúči bez ohľadu na to, kedy bol kľúč pridaný. Zástupné hodnoty
`__MISSING__:` sa počítajú ako prítomné (ich obsah rieši kontrola pomeru). Ide o absolútny doplnok
dvoch kontrol založených na rozdieloch/percentách: `check-ui-keys-coverage` vynucuje minimálne 80 % pokrytie pre
každé miestne nastavenie (43 chýbajúcich kľúčov z približne 13 000 sa stále javí ako 99,7 %) a `check-new-key-coverage` posudzuje
iba kľúče, ktoré PR pridáva do `en.json`. Dávka miestnych nastavení sa vygeneruje zo súboru `en.json` v deň,
keď sa vytvorí jej vetva, a prekladá sa niekoľko dní, zatiaľ čo základná vetva naďalej pridáva kľúče; dávkový PR sám
nepridáva žiadny kľúč, takže obe príbuzné kontroly zostali ticho, keď bola dávka 1 (#13044) zlúčená s 43 chýbajúcimi kľúčmi v deviatich
miestnych nastaveniach a dávka 2 (#13660) s 10 chýbajúcimi kľúčmi v ôsmich (2026-09-15). Neúspešnú kontrolu opravte pomocou
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; koncový kľúč označený ako `extra`
znamená, že ho zdroj odstránil — odstráňte ho aj z miestneho nastavenia. `--warn` podá hlásenie bez zlyhania.
`--catalog=cli` spustí rovnaké porovnanie nad `bin/cli/locales` (`npm run i18n:check-keys:cli`);
oba kroky sú súčasťou úlohy `i18n-ui-coverage`.

#### `check-new-key-coverage` — kontrola i18n nových kľúčov

Príbuzná kontrola k `check-ui-value-drift`. Tá zachytáva anglickú hodnotu, ktorá bola **prepísaná**,
zatiaľ čo jej preklady zostali nezmenené; táto zachytáva anglický kľúč, ktorý bol **pridaný**,
ale niektoré miestne nastavenia ho nikdy nedostali.

`check-ui-keys-coverage` nedokáže zachytiť tento prípad: vynucuje minimálne percentuálne pokrytie pre každé miestne nastavenie a
jedenásť chýbajúcich kľúčov z približne 13 000 ponechá pokrytie na úrovni 99,9 %. Percentuálna hodnota pre jednotlivé jazyky nedokáže
vyjadriť „táto funkcia bola vydaná bez prekladu“ — celá funkcia sa môže dostať do nového miestneho nastavenia bez
akéhokoľvek textu a hodnota sa vôbec nezmení.

Incident, ktorý táto kontrola zachytáva: 3. fáza Orchestration Canvas preložila svojich jedenásť kľúčov do
42 miestnych nastavení, ktoré v tom čase existovali. O niekoľko hodín neskôr zvýšila dávka jazykov EÚ (#13044) počet miestnych nastavení
v repozitári na 51 a deväť nových (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) ich nikdy
nedostalo. `deepMergeFallback` nahradí chýbajúci kľúč angličtinou, takže výsledkom bolo
nepreložené používateľské rozhranie namiesto prázdneho používateľského rozhrania — skutočný problém, ktorý bol zo svojej podstaty tichý.

Rovnako ako príbuzná kontrola si aj táto **uvedomuje rozdiely**: porovnáva angličtinu v základe zlúčenia s pracovným
stromom, takže už existujúce medzery zostávajú zmrazené a zapnutie kontroly nevyžadovalo žiadnu migráciu.

**Značka `__MISSING__:<english>` tejto kontrole nevyhovie (od 2026-09-17).** Predtým predstavovala
zdokumentovaný odklad — behové prostredie použije ako náhradu správnu angličtinu — až kým osem PR s funkciami
dňa 2026-09-16 nepridalo 61 kľúčov a nevložilo značku do všetkých 65 miestnych nastavení namiesto prekladu: táto
kontrola prijala každý z nich, PR nič nezablokovalo a blokujúca kontrola pomeru skutočných prekladov
následne zlyhala na konci vydania všetkým (pt-BR 3,2 % > 2,5 % + 0,5). Značka sa teraz posudzuje
ako chýbajúci preklad. Neúspešnú kontrolu opravte pomocou
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` alebo
všetky miestne nastavenia paralelne pomocou `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
bezpečný pri odpojení, odmietne sa spustiť bez premenných prostredia `OMNIROUTE_TRANSLATION_*`). Kľúč, ktorý musí zostať
v angličtine (pevne stanovený názov produktu/modulu/príznaku), patrí do `scripts/i18n/untranslatable-keys.json`,
nikdy za značku. `vi` úplne zakazuje značky (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — kontrola odložených testov

Súbor v zozname `exclude` súboru `vitest.config.ts` je test, ktorý sa nespúšťa, no každému, kto číta
strom, sa javí ako pokrytie. Za komentárom sa nahromadilo šesťdesiatdva súborov
`// #8618 — pre-existing failure; remove this exclusion when fixed`. Problém #8618 bol uzavretý
2026-08-11, zatiaľ čo zoznam, ktorý sledoval, narástol zo 45 položiek na 62, pričom každá nová položka zdedila komentár
odkazujúci na už uzavretý problém. Keď sa zoznam napokon zmeral súbor po súbore (#13204), **51 zo 62
prešlo v aktuálnom strome bez akejkoľvek zmeny zdrojového kódu**.

Kontrola vyžaduje, aby každá výnimka odkazujúca na skutočný súbor (a) uvádzala sledovaný problém a
(b) bola uvedená v `config/quality/vitest-exclusions.json` so svojím nameraným stavom, takže jej pridanie predstavuje
kontrolovateľný rozdiel vo vyhradenom súbore namiesto ďalšieho riadka v poli so 60 položkami. Zámerne
opätovne nespúšťa vylúčené testy — trvá to približne 10 minút a patrí to do periodickej úlohy;
inventár zaznamenáva, kedy bol každý z nich naposledy zmeraný.
