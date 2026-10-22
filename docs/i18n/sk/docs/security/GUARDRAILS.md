# Guardrails (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Posledná aktualizácia:** 2026-10-17 — v3.8.52 (pridané [Pokrytie a limity](#coverage-and-limits):
> ktoré trasy a cesty odpovedí hooky zachytávajú, zlúčené hlavičky na vypnutie (#16412), režim
> blokovania injekcií ako povinná hranica (#16413) a čo vidí odpoveď pred post-call)

Guardraily vynucujú bezpečnosť, politiky a transformácie obsahu na hranici
medzi OmniRoute a upstream poskytovateľmi. Každý guardrail môže kontrolovať (a
voliteľne zamietnuť, transformovať alebo anotovať) payloady požiadaviek (`preCall`) a
upstream odpovede (`postCall`).

Systém je **fail-open**: ak guardrail pri vykonávaní vyhodí výnimku, registr
zaznamená chybu a pokračuje ďalším guardrailom namiesto zlyhania
požiadavky. Blokovanie je explicitné rozhodnutie (`block: true`), nikdy nie náhoda.
Jedinou výnimkou je prerušená požiadavka: keď je `signal` volajúceho abortovaný,
guardrail, ktorý vyhodí výnimku, zamietne spustenie hooku namiesto toho, aby bol preskočený.

Hooky sa **nespúšťajú** na každej trase ani pri každej odpovedi. Prečítajte si
[Pokrytie a limity](#coverage-and-limits) skôr, než sa začnete spoliehať na guardrail ako na
bezpečnostnú kontrolu.

## Vstavané guardraily

Registr pri importe automaticky načíta šesť guardrailov v poradí priority
(pozri `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Názov               | Fáza(fázy)     | Súbor                 |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižšie čísla priority sa spúšťajú **prvé**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Základný model GLM 5.3 a `glm-5.3-{low,high,max}` majú explicitné
metadáta registra/špecifikácie `supportsVision:false`. Varianty GLM 5.3 Flash
zostávajú modelmi s natívnym videním. Trasa `/v1/messages` v Claude Code vstupuje
do zdieľaného reťazca pre-call guardrailov `handleChat` **pred** prekladom
Claude→OpenAI; vnorené obrázky z výsledkov nástroja `Read` musia byť opísané alebo spracované
predtým, než ich tento preklad povýši na obsah `image_url` v OpenAI (#17069).

Zachytáva požiadavky obsahujúce obrázky cielené na **modely bez videnia** a buď
presmeruje celú požiadavku na model s podporou videnia, alebo nahradí časti s obrázkami
textovými opismi vytvorenými konfigurovateľným modelom s videním ešte pred
upstream volaním. To umožňuje poskytovateľom iba s textom transparentne spracovať
multimodálne payloady.

Priebeh:

1. Preskočí sa, ak cieľový model už podporuje videnie (pokiaľ sa nenachádza v
   zozname vynúteného premostenia `isVisionBridgeForcedModel`).
2. Extrahuje časti s obrázkami cez `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ktorá deleguje na **zjednotený detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný
   zdroj pravdy zdieľaný s filtrom kompatibility combo. Extrakcia
   je povolená len pre tvary, ktoré `replaceImageParts` dokáže vložiť
   späť (kontrakt extract↔replace): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` a Responses
   API `input_image`. Zodpovedajúce obrázky vnorené v Claude Code
   `tool_result.content` a vo výstupoch nástrojov Responses sa tiež extrahujú a
   nahrádzajú na svojich pôvodných cestách; tvary obsahujúce iba indikátor sú materiálom pre
   combo filter a nie sú extrahované.
   Ak sa nič nenájde, preskočí sa.
3. Rozlíši runtime konfiguráciu cez `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové kľúče nastavení
   `modalityBridge*` majú prednosť; staršie kľúče `visionBridge*` zostávajú **jednocyklovým
   fallbackom** (okno pre rollback). Ak je premostenie vypnuté, preskočí sa ešte pred
   akýmkoľvek prechádzaním médií.
4. Selektor režimu (`modalityBridgeVisionMode`, pozri tabuľku nižšie) rozhoduje
   o presmerovaní vs. opise. Presmerovanie vráti `modifiedPayload` len s vymeneným
   `model`, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta opisu: obrázky sa obmedzia na `maxImages`, zloží sa prompt zohľadňujúci úlohu,
   použije sa cache opisov, model s videním sa zavolá **paralelne**
   (`Promise.allSettled`) a na ich miesto sa vložia textové časti
   `[Image N]: <description>`. Zlyhaný opis vráti `null`: surový obrázok sa zachová pre
   neznáme/na videnie schopné ciele (#4012), ale **potvrdený cieľ iba s textom** alebo
   combo s nulovým videním dostane explicitný textový stub
   `(unavailable — no vision-capable provider connected)` pre
   každý neopísaný obrázok, vrátane čiastočných zlyhaní a obrázkov nad
   limitom volaní opisov (#17069). Existujúci fallback opisu pre combo so
   všetkými zlyhaniami zostáva zachovaný (#8430).
6. Vráti `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor režimu (`modalityBridgeVisionMode`)

| Mode       | Default | Behavior                                                                                                                                                                                                                                                                                                          |
| ---------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Zdedená heuristika, nezmenená (#6640/#7204): modely, ktoré nie sú typu combo ani `auto/`, sa presmerujú na najlepší vision model, pokiaľ pôvodný model už nemá použiteľné prihlasovacie údaje (vtedy describe); combo ciele vždy describe.                                                                        |
| `describe` |         | Vždy describe — blok reroute sa úplne preskočí; vždy odpovedá model, ktorý si zvolil používateľ.                                                                                                                                                                                                                  |
| `reroute`  |         | Vynútiť reroute: ochranné pravidlo zachovania modelu s prihlasovacími údajmi sa obchádza. Ochranné pravidlo pre prihlasovacie údaje **cieľa** reroute stále platí — keď neexistuje použiteľný vision cieľ, bridge zablokuje jasnou chybou namiesto describe alebo odoslania surových obrázkov do text-only cieľa. |

Vynútené režimy skratujú **pred** spustením auto heuristiky; správanie `auto` je
bajtovo identické s ochranným pravidlom spred PR-1.

#### Rozsah podľa API kľúča (`visionBridgeKeyScope.ts`)

Keď API kľúč volajúceho obmedzuje `allowedConnections`, kvótne pooly
(`allowedQuotas`) alebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge vyberá na
reroute a describe iba modely, ktoré kľúč smie používať, na pripojeniach, ktoré
kľúč smie používať. Volanie describe potom vždy prechádza cez OmniRoute self-loop
s hlavičkou `x-omniroute-self-loop-key-id`, takže prijímajúca chat požiadavka
znova vynucuje politiku pripojení a modelov daného kľúča. `enforceApiKeyPolicy()`
rešpektuje túto hlavičku len spolu so self-loop bearer, takže môže iba zúžiť
prístup, a id, ktoré sa nedá vyriešiť, je odmietnuté.

Ak pre daný kľúč nie je povolený žiadny vision model, **potvrdený text-only
cieľ** odmietne požiadavku s obrázkom lokálne jasnou HTTP 400 namiesto
preposlania bajtov obrázka do neschopného upstreamu (#17069). Pre ciele s
neznámou alebo natívnou vision schopnosťou si describe cesta zachováva svoje
predchádzajúce fail-open správanie (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Požiadavky bez kľúča a kľúče bez týchto obmedzení sa správajú presne ako predtým.

#### Describe prompt s ohľadom na úlohu (`modalityBridgeVisionTaskAware`)

Predvolene **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) pripája
text **poslednej používateľskej správy** (skrátený na 500 znakov) k základnému
describe promptu, čím usmerňuje opis k tomu, na čo sa používateľ skutočne pýtal
(vzor codex-vision-proxy), a žiada vision model, aby prepísal viditeľný text.
Pri vypnutom príznaku — alebo bez používateľského textu — sa základný prompt
používa nezmenený.

Vlastná OpenAI-kompatibilná požiadavka describe self-loopu (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`) vždy žiada `image_url.detail: "high"` —
bezpodmienečne, pre každého volajúceho/poskytovateľa, neviazané na žiadny signál
klienta. Vzorkovanie s nízkou podrobnosťou zhoršuje presnosť OCR práve pri úlohe
prepisu textu, ktorú tento prompt žiada, takže samotné volanie describe vždy
žiada vysokú podrobnosť bez ohľadu na to, akú úroveň podrobnosti použila pôvodná
prichádzajúca požiadavka. Týka sa to len vnútorného tela describe požiadavky;
nemení to, ako OmniRoute preposiela vlastné `image_url.detail` volajúceho v
primárnej požiadavke — táto predvolená hodnota sa uplatňuje oddelene, a iba pre
detegovaných klientov OpenCode, v `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Vetva describe self-loopu vo
formáte Anthropic wire nemá pole `detail` a nie je ovplyvnená ani jednou z
týchto predvolených hodnôt.

#### Limit výstupu describe (`modalityBridgeVisionMaxChars`)

| Kľúč                           | Predvolené | Rozsah              |
| ------------------------------ | ---------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` alebo 100–50000 |

`0` (predvolené) znamená **bez limitu** — opis vrátený
`callVisionModel()` sa prenáša nezmenený, čím sa zachováva existujúce
správanie. Akákoľvek hodnota v rozsahu 100–50000 skráti opis s príponou
`…` predtým, než sa vloží späť ako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Zvýšte ju pri OCR úlohách náročných na detail, kde downstream model potrebuje
úplný prepis; znížte ju na ohraničenie spotreby tokenov pri ukecaných vision modeloch.
Pole v dashboarde sa nachádza v paneli Advanced karty Vision
(`modality-bridge-max-chars` v `ModalityBridgeVisionTab.tsx`) a akúkoľvek
hodnotu medzi 1 a 99 zarovná nahor na spodnú hranicu 100, pričom explicitnú `0`
ponechá nedotknutú — `0` je platná hodnota Zod sama o sebe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nie iba
predvolená hodnota „nenastavené“.

#### Cache describe (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache pre výstupy describe, zdieľaná v rámci celého procesu.
Kľúč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
rámovaním dĺžkovým prefixom (žiadne kolízie na hraniciach polí). Modelová zložka
je **nakonfigurovaný** model bridge, nie model, ktorý skutočne odpovedal —
`callVisionModel` môže interne prepnúť na fallback a kľúčovanie podľa pokusu by
fragmentovalo cache. Neúspešné describe sa nikdy neukladajú do cache. Nastavenia:

| Kľúč                            | Predvolené | Rozsah  |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### Normalizácia vzdialených obrázkov (describe/base64 fetch v rámci self-loopu)

Keď bridge sám načíta **vzdialený** obrázok — self-call Anthropic describe
a konverziu base64 do claude-wire-formátu
(`ensureBase64ImagesForClaudeWire`), obe cez
`fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledné data
URI prechádza cez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) predtým, než sa vloží do požiadavky na
vision model. Príliš veľké obrázky sa zmenšia na **dlhšiu hranu 2048 px** (čo
zodpovedá limitu zmenšovania, ktorý OpenAI/Anthropic už uplatňujú na strane
servera), čím sa znížia odosielané bajty a latencia bez toho, aby sa zmenilo to,
čo vision model vidí. Zmenšovanie používa `sharp`, načítavaný cez dynamický
import: na platforme, kde sa jeho natívny binárny súbor nepodarí načítať,
`normalizeDataUri()` **nikdy nevyhodí výnimku** — vráti sa k priechodu
pôvodných bajtov, takže cesta describe/konverzie na base64 vždy funguje ďalej.
Nebajtové dáta, ktoré nie sú obrázkom (načítanie, ktoré nevrátilo dekódovateľný
obrázok), tiež prechádzajú nezmenené. Táto normalizácia je obmedzená na obrázky,
ktoré bridge načítava pre svoj vlastný self-call — nikdy sa neuplatňuje na
surový passthrough payload volajúceho, v súlade s princípom mutácie len na
základe opt-in (Hard Rule #20).

#### Schéma nastavení + migrácia

Nové kľúče `modalityBridge*` sú validované cez Zod v `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*` a skupina
`modalityBridgeAudio*` používaná cez Audio Bridge. Migrácia
`141_modality_bridge_settings.sql` kopíruje existujúce staršie hodnoty
`visionBridge*` do zodpovedajúcich nových kľúčov (idempotentne, nikdy
neprepisuje hodnotu `modalityBridge*` nastavenú operátorom); staršie kľúče
zostávajú akceptované ako záložné čítanie počas jedného vydaného cyklu.

#### Hlavička transparentnosti + štatistiky

Odpovede transformované cez describe nesú
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(zostavené cez `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`,
pečiatkované cez `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`).
Presmerované požiadavky **nedostanú** žiadnu hlavičku — payload zostal
nezmenený a výmena modelu je už viditeľná v poli `model` tela odpovede.

`GET /api/modality-bridge/stats` (autentifikácia správy, rovnaká úroveň ako
`GET /api/settings`) vracia in-memory počítadlá podľa modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` pre `vision`, `audio` a
`video`. `averageLatencyMs` používa ako menovateľa `latencySamples`, nie všetky
pokusy; operácia bez merania času nevyrobí falošnú vzorku s nulovou
milisekundou. `bridged` zostáva spätne kompatibilným aliasom pre úspešné
konverzie; neúspešné pokusy ho neinkrementujú.
Počítadlá sa pri reštarte procesu zámerme resetujú
(telemetria, nie účtovníctvo).

#### Konfigurácia dashboardu

Vyhradená stránka dashboardu je
`/dashboard/settings/modality-bridge`. Jej karty `Vision`, `Audio` a `Video`
adresovateľné cez URL zachovávajú parametre dotazu pri prepínaní hodnoty
`tab`. Karta Vision sprístupňuje zapnutie, režim, výber modelu (vrátane
automatického predvoleného), task-aware promptovanie, pokročilé limity pre
timeout/počet obrázkov/dĺžku popisu/cache, runtime
počítadlá a chránenú vzorovú požiadavku. Karta Audio je tiež funkčná: sprístupňuje
zapnutie, výber modelu iba pre STT s možnosťou Auto, limity pre timeout/maximálnu
dĺžku klipu, audio počítadlá a vzorový test `input_audio`. Karta Video je funkčná: hlási
stav runtime FFmpeg/ffprobe — jeden zo štyroch explicitných stavov UI (`unknown`, keď je
sonda v behu alebo sa nemohla dokončiť, `restricted` na non-loopback hostiteľovi
dashboardu, kde sa sonda na strane klienta preskočí, `unavailable` po overení sondou
a potvrdení neprítomnosti, alebo `available` s verziami FFmpeg/ffprobe) — uchováva
limity enable/model/frame/video/timeout, filtruje výber modelu na modely
schopné videnia a sprístupňuje video počítadlá.

Bývalá karta Vision Bridge v nastaveniach AI je odkazom na kompatibilitu
na novú stránku; už nevlastní druhú kópiu formulára. Media Providers tiež
odkazujú pracovné postupy Image-to-Text a Speech-to-Text na zodpovedajúce karty
Modality Bridge bez odstránenia existujúceho playgroundu Speech-to-Text.

**Obchádzanie prijímania v rámci self-loopu:** keď describe volanie smeruje cez
vlastný `/v1` self-loop OmniRoute (neštandardný model poskytovateľa), podriadená
požiadavka odošle
`x-omniroute-admission-bypass: internal` a je autentifikovaná pomocou vyriešeného
self-loop prihlasovacieho údaju — lokálnej sentinely `sk_omniroute` v lokálnom
režime, alebo operátorom nakonfigurovaného kľúča prostredia `OMNIROUTE_API_KEY` /
`ROUTER_API_KEY` (#1350), aby nasadenia s `REQUIRE_API_KEY=true` mohli stále
spúšťať describe volanie. Obchádzanie sa uznáva iba pre presne tieto
prihlasovacie údaje, takže externí klienti nemôžu použiť hlavičku na preskočenie
prijímania.

Staršie predvolené hodnoty sa nachádzajú v `src/shared/constants/visionBridgeDefaults.ts`;
nové predvolené hodnoty režimu/task-aware/cache a resolver nastavení sa nachádzajú
v `src/shared/constants/modalityBridgeDefaults.ts`. Guardrail sprístupňuje
konštrukčnú možnosť `deps`, aby testy mohli vložiť falošné implementácie
`getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytáva chatové požiadavky obsahujúce audio skôr, než dosiahnu cieľ, o ktorom
nie je známe, že by prijímal audio vstup. Nikdy nepresmeruje chatovú požiadavku:
audio časti sa prepíšu na text cez existujúci multipart endpoint kompatibilný
s OpenAI a zvolený chat model pokračuje s textovými prepismi.

Tok:

1. Vyhodnoťte `supportsAudio` cez `getResolvedModelCapabilities()`. Explicitné
   metadáta registra poskytovateľov majú prednosť, potom statické metadáta
   modelu a napokon synchronizované `modalities_input`. Deklarovaný zoznam
   vstupov bez `audio` je `false`; ak neexistuje dôkaz o schopnosti, zostáva
   `null`. `false` aj `null` aktivujú konzervatívne premostenie, kým `true` ho
   obchádza.
2. Vyhodnoťte nastavenia `modalityBridgeAudio*` a extrahujte zlúčiteľné
   zvukové časti najvyššej úrovne z každej správy prostredníctvom zdieľaného
   detektora `detectMediaParts()`. Podporované tvary prenosu sú OpenAI
   `input_audio`, `audio_url` a `source.media_type: "audio/*"`. Vnorené zvukové
   časti sa detegujú na smerovanie, ale cesta spájania ich neodstraňuje. Počet
   spracovaní je ohraničený `modalityBridgeAudioMaxClips`; neskoršie časti
   zostávajú nezmenené.
3. Rešpektujte nakonfigurovaný `provider/model` alebo nechajte
   `selectAudioBridgeModel()` prejsť `AUDIO_TRANSCRIPTION_PROVIDERS` v stabilnom
   poradí katalógu a vyberte prvý model s použiteľným aktívnym poverením
   poskytovateľa.
4. `callAudioTranscription()` konvertuje zvuk vo formáte base64/data-URI na
   multipartový `file` alebo stiahne vzdialenú adresu `audio_url` cez výstupnú
   ochranu iba pre verejné adresy s pripnutím DNS a limitom 25 MB. Následne
   odošle súbor a vybraný model pomocou POST na lokálnu slučku
   `/v1/audio/transcriptions`, overenú cez `resolveSelfLoopBearer()`. Existujúca
   trasa prepisu vykonáva bežné vyhľadanie poverenia, spracovanie cooldownu a
   obmedzenia rýchlosti a odoslanie poskytovateľovi.
5. Úspešné volania nahradia svoje časti textom `[Audio N]: <transcript>`. Volania
   prebiehajú cez `Promise.allSettled`: zlyhanie jednotlivého volania zachová
   tú pôvodnú zvukovú časť (kontrakt #4012). Ak zlyhajú všetky volania a cieľ má
   preukázateľne `supportsAudio === false`, časti sa zmenia na
   `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430). Pri
   neznámom cieli (`null`) zostáva výsledok so všetkými zlyhaniami nezmenený.
   Preukázateľne textový cieľ bez použiteľného poverenia STT dostane rovnaký
   explicitný zástupný text bez vykonania sieťového volania.

Úspešné prepisy používajú celoprocesovú vyrovnávaciu pamäť LRU/TTL Modality
Bridge. Kľúč kombinuje zvukovú referenciu, stabilný štítok operácie
`audio-transcription` a vybraný model STT; zlyhania sa nikdy neukladajú do
vyrovnávacej pamäte. Zvukové pokusy aktualizujú zdieľané počítadlá `bridged`,
`cacheHits`, `failures` a `lastUsedAt`. Transformované odpovede nesú
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nezmenené
požiadavky nedostanú segment Audio Bridge.

Nastavenia za behu sú ukladané v databáze a validované cez Zod:

| Kľúč                          | Predvolené | Rozsah            |
| ----------------------------- | ---------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                 |
| `modalityBridgeAudioModel`    | `""`       | Auto alebo ID STT |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10              |

Zdieľaná vyrovnávacia pamäť zostáva riadená nastaveniami
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytáva video časti najvyššej úrovne v `messages` rozhrania Chat Completions
a v `input` rozhrania Responses API pred volaním cieľa bez známej natívnej
podpory videa. Podporované tvary sú `input_video`, `video_url`, `video_source`,
adresy HTTPS a dátové URI `data:video/*;base64,...`. Obyčajné názvy súborov v
texte sa nepovažujú za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) má na starosti prechádzanie
požiadavky, kontrolu schopností/zásad, agregáciu pre jednotlivé požiadavky a telo
odpovede. Práca pre jednotlivé videá – získavanie, vyrovnávacia pamäť celých
výsledkov, opis sekvencie snímok (ktorý spája akýkoľvek volajúcim deklarovaný
zvukový prepis) a metriky/abort/čistenie pre jednotlivé pokusy – je skrytá za
`processVideoPart` v `videoBridgePipeline.ts`, ktorý sa volá raz pre každú video
časť vo vnútri slučky `preCall`. Tento modul tiež definuje explicitné hranice
portov `VideoMediaBrokerPort` (získavanie bajtov a extrakcia vzorkovaných
snímok), `VideoAudioTranscriptionPort` (spájanie volajúcim deklarovaného
zvukového prepisu so vzorkovanými titulkami) a `VideoDrilldownPort` (hranica
perzistencie drill-down snímok; zatiaľ nie je zapojená do `processVideoPart` –
dnes zapisuje záznamy drill-down iba samostatná trasa
`/api/modality-bridge/video/drilldown`).

Verejná trasa požiadaviek `/v1` nikdy neimportuje ani nevyvoláva podproces.
Vzdialené videá sa sťahujú s limitom 50 MiB; inline videá vo formáte base64 majú
konzervatívny limit 36 MiB dekódovaných dát na jedno video, aby sa obálka
model/messages/framing zmestila do limitu prijatia verejnej JSON požiadavky
50 MiB. Dĺžka inline obsahu a odhady dekódovanej veľkosti sa kontrolujú pred
alokáciou. HTTPS sa vyžaduje pri počiatočnej vzdialenej URL a pri každom
presmerovaní, pričom sa používa existujúca výstupná ochrana iba pre verejné
adresy s pripnutím DNS. Bajty potom prechádzajú presnou internou hranicou brokera
`POST /api/modality-bridge/video/extract`. Táto trasa je súčasne `LOCAL_ONLY` a
`SPAWN_CAPABLE`, prijíma iba požiadavku z dôveryhodného loopbacku autentifikovanú
v rámci procesu a nikdy neprijíma URL, cestu v systéme súborov, spustiteľný súbor
ani zoznam argumentov. Pipeline veľkosti tela API a inkrementálny čítač tela v
handleri nezávisle presadzujú vstupný limit brokera 50 MiB. Jeho ohraničený rad
spracúva jednu extrakciu naraz, povoľuje štyri čakajúce úlohy a obmedzuje
čakajúci vstup na 100 MiB.

Vnútri brokera `ffprobe` číta súkromný lokálny súbor; pevný zoznam povolených formátov vylučuje formáty playlistov a manifestov. Pre povolené kontajnery z rodiny MOV zostávajú externé dátové odkazy MOV predvolene zakázané a pevný príkaz ich neaktivuje. `ffprobe` aj `ffmpeg` používajú zoznam povolených protokolov iba `file`, jedno vlákno, pevné polia argumentov, žiadny shell a spustiteľné súbory sa vyhľadávajú v `PATH`. Priložené obrázkové cover streamy nie sú kandidátmi na prehrávanie. Všetky prehrateľné streamy musia spĺňať limity a explicitný predvolený stream sa uprednostní pred deterministickým záložným výberom podľa najnižšieho indexu. Videá sú obmedzené na 600 sekúnd, 8 192 pixelov na rozmer a 33 554 432 zdrojových pixelov. FFmpeg vzorkuje 1–16 stredových JPEG snímok, zmenšuje dlhšiu hranu na najviac 1 024 pixelov bez zväčšovania menších vstupov a nikdy nedostane URL. Vzorkovanie je predvolene `uniform`. Voliteľná politika `scene_aware` a experimentálna politika `segment_aware` vykonajú jeden dodatočný pevný prechod FFmpeg cez už overený lokálny stream, vyberú ohraničené časové značky scén `showinfo` a pri zlyhaní detektora, časovom limite, poškodenom výstupe alebo prázdnej množine kandidátov deterministicky prepadnú na rovnaké rovnomerne rozložené stredové body. Režim citlivý na segmenty prideľuje stredové vzorky proporcionálne k overeným intervalom scén; dôkazy a záložné správanie režimu citlivého na segmenty sú podrobne opísané nižšie. Tvrdý limit 16 snímok sa uplatňuje po výbere v každej politike. Keď má požiadavka citlivá na scénu iba rozpočet jednej snímky, použije rovnomerný stredový bod aktívneho okna celého videa alebo okna zamerania a nahlási `policyEffective: uniform`: jediná vybraná snímka scény nemôže zachovať oba časové konce. Volajúci môže voliteľne poskytnúť konečné okno zamerania (`start`/`end` v sekundách); hranice sa orezávajú na trvanie média, obrátené alebo nie konečné okná sa odmietajú a všetky politiky vzorkovania sa vykonávajú iba v normalizovanom intervale. Výsledné okno sa zahrnie do metadát vzorkovania a do prefixu nedôveryhodného popisu, aby nadväzné modely dokázali rozlíšiť zameraný výňatok od celej časovej osi.

Sémantické zameranie popisu je samostatné, explicitné nastavenie. Predvolený režim analýzy `full` zachováva existujúci prompt snímky a nikdy neposiela text požiadavky modelu popisov. V režime `focused` most číta iba najnovší neprázdny `text`/`input_text` od používateľa z rovnakého kontajnera Chat alebo Responses, normalizuje ho na NFC, zredukuje riadiace znaky a medzery a obmedzí ho na 500 kódových bodov Unicode. Prázdny výsledok sa vráti k presnému promptu `full`. Použiteľná nápoveda sa serializuje ako JSON do vyhradeného bloku nedôveryhodného používateľského kontextu a môže iba uprednostniť pozorovateľné detaily; nemôže potlačiť samostatné upozornenie pred nasledovaním pokynov viditeľných alebo počuteľných v médiu. Textové zameranie nikdy neodvodzuje `start`/`end` ani nemení časový vzorkovač.

#### FU-07 štrukturálne dôkazy segmentov

`segment_aware` používa jeden ohraničený predanalytický prechod cez už overený lokálny video stream. Pevný reťazec filtrov najprv zmenší šírku na najviac 320 pixelov, deteguje zmeny scén a zamrznuté intervaly, potom vzorkuje po 1 snímke za sekundu pre rozmazanie, priemernú lumu a priestorové/časové informácie. Prechod je obmedzený na 600 štrukturálnych vzoriek, jedno vlákno FFmpeg/filtra, rovnaké zoznamy povolených protokolov iba `file` a kontajnerov, limit 1 MiB výstupu procesu a najviac 30 sekúnd v rámci zdieľaného prerušenia/termínu brokera. Nikdy neprijíma príkaz, filter, cestu ani URL z požiadavky.

Štrukturálne hodnoty sú deterministické dôkazy vzorkovania, nie sémantické porozumenie videa. Neodvodzujú subjekty, akcie, popisy, reč ani zámer používateľa. Hranice scén a zamrznutí tvoria segmenty; pokrytie zamrznutia, rozmazanie, expozícia, priestorový detail a časová zmena iba ovplyvňujú, ako sa prideľuje existujúci rozpočet 1–16 snímok. Plne zamrznutý segment je obmedzený na jednu snímku, zatiaľ čo nezamrznuté segmenty súťažia o zostávajúci rozpočet. Keď je hraníc viac ako snímok, zachová sa rovnomerné pokrytie časovej osi, aby rýchle skoré strihy nemohli skryť dlhý koncový segment. Hranice scén v rámci 1-sekundového analytického rozlíšenia hranice zamrznutia sa zlúčia.

Chýbajúce filtre, poškodené/prázdne dôkazy, chyba detektora alebo ohraničený časový limit predbežnej analýzy sa riešia fail-open prechodom na presnú politiku rovnomerných stredových bodov. Prerušenie volajúcim alebo termín brokera sa nerieši fail-open: ukončí prebiehajúci podproces, zabráni neskoršiemu extrahovaniu snímok a súkromný dočasný strom sa odstráni v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické reálne fixtúry FFmpeg pre úspory volaní popisov po deduplikácii, prideľovanie rozpočtu pri hustote pohybu, dôkazy o rozmazaní/expozícii/SI-TI, rýchle strihy s dlhým koncom a falošné pozitíva postupného stmievania. Zaznamenáva čas predbežnej analýzy v reálnom čase a, ak je dostupný `/usr/bin/time`, CPU podriadeného procesu a špičkovú RSS. Jeho kontroly kvality sú iba štrukturálne orákuly. Skutočná kvalita modelu popisov zostáva `HOLD`, pretože tento testovací harness nemá autorizovaný endpoint ani zamrznutého hodnotiteľa. Peňažné úspory tiež zostávajú `HOLD`, pokiaľ `--caption-cost-per-call-usd` neposkytne explicitný kladný odhad na volanie; skript nikdy nefabrikuje ani jeden z týchto výsledkov.

Každý snímok je obmedzený na 4 MiB, všetky surové snímky spolu na 23 MiB a serializovaná odpoveď brokera na 32 MiB. Súkromný dočasný adresár sa odstráni v `finally`. OmniRoute nepribaľuje FFmpeg a neakceptuje vlastnú cestu k spustiteľnému súboru. Pred generovaním popisov most vykoná konzervatívny vizuálny deduplikačný prechod: každý JPEG sa zredukuje na 16×16 šedotónový buffer a porovnáva sa iba s posledným zachovaným snímkom. Pre požadovaný rozpočet popisov nad jeden snímok extrakcia poskytuje obmedzený fond kandidátov do dvojnásobku tohto rozpočtu a nikdy viac ako 16 snímok. Požadovaný strop sa uplatní až po deduplikácii, pričom prvý a posledný vybraný kandidát sa zachová počas záverečného preriedenia, keď je rozpočet aspoň dva. Verzionovaná politika `grayscale-16x16-mean-cells-v2` používa väčšiu z hodnôt rozdielu strednej lumy a podielu buniek náhľadu, ktorých normalizovaný rozdiel je aspoň 0,05. Prah duplicít je konštanta 0,04, zvolená pre predvídateľnosť namiesto toho, aby bola vystavená ako behové nastavenie. Tento sekundárny vysokokontrastný signál zachováva malý pohyb a zmeny viditeľného textu, ktoré môže porovnanie iba podľa priemeru skryť. Chyby komparátora alebo dekodéra sa správajú fail-open a zachovávajú pokrytie. Výstupné metadáta oddeľujú extrahovaných kandidátov, úspešne použité snímky a vyradené vizuálne duplikáty.

Explicitne označená video časť môže požiadať o kontaktný list s časovými značkami. Most vytvorí mriežku JPEG s najviac 4 stĺpcami a 16 snímkami. Každá bunka s rozmermi 512 pixelov vypáli svoju zdrojovú časovú značku do vysokokontrastného spodného pásu, zatiaľ čo rovnaké časové značky zostávajú v textových metadátach pre nadväzujúce priradenie a audit. Celý JPEG zostáva obmedzený na 32 MiB. Ak `sharp` nedokáže dekódovať alebo zložiť mriežku, most sa vráti k jednotlivým snímkam JPEG; prerušenie zo strany klienta sa stále propaguje cez operáciu kontaktného listu.

Dôkazy pre povýšenie sú zámerne oddelené od syntetického mikrobenchmarku skladania. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje A/B nástroj s verzovanou schémou pre reálne vizuálne modely kompatibilné s OpenAI. Meria tokeny nahlásené poskytovateľom, end-to-end latenciu meranú v reálnom čase (vrátane skladania listu), počet volaní modelu a zachovanie faktov definovaných manifestom. Surové odpovede modelu sa do reportu nezapisujú; uchovávajú sa iba SHA-256 digesty a ID zhodných faktov. Nástroj nevykoná žiadne sieťové ani platené volanie modelu, pokiaľ nie je zadaný `--execute-real` a nie sú nastavené `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez tohto explicitného reálneho spustenia zostáva jeho strojovo čitateľný verdikt `HOLD`; samotné syntetické merania veľkosti payloadu/počtu volaní nie sú dôkazom pre povýšenie.

Volajúci môžu pripojiť voliteľné pole `transcript.cues` k podporovanej video časti, ak už disponujú zarovnaným textom. Každá položka cue musí obsahovať `text`, konečný interval `start`/`end` v rámci zistenej dĺžky a povolený `source` (`client`, `embedded` alebo `audio-bridge`); `confidence` má predvolenú hodnotu `1` a musí zostať medzi `0` a `1`. Presne duplicitné položky cue sa zlúčia. OmniRoute nikdy nezačína prepis z týchto metadát: validované položky cue sa skopírujú do opísaného výsledku so zdrojom, istotou a intervalom a vykreslia sa ako nedôveryhodné pozorovania popri popisoch snímok. Neplatný text, text mimo rozsahu alebo text bez pôvodu sa odmietne, namiesto toho, aby sa zmiešal do prúdu popisov. Oba kanály prepisu v tele požiadavky normalizujú dodaný pôvod na `client`, vrátane označení `embedded` alebo `audio-bridge`, ktoré deklaroval samotný klient. Iba adaptér vo vlastníctve servera môže priradiť tieto dôveryhodné označenia prostredníctvom argumentu `trustedSource` dostupného iba z kódu; pole JSON požiadavky sa k tomuto argumentu nemôže dostať. Text prepisu zostáva nedôveryhodným obsahom odvodeným z médií bez ohľadu na jeho pôvod a nikdy nesmie určovať autorizáciu.

Pokročilý volajúci môže pre to isté video poskytnúť stopu `audioTranscript`; považuje sa za text poskytnutý klientom, nie za dôkaz o prepise na strane servera. Fúzne rozhranie vykonáva vizuálne a zvukové pozorovania pod jedným časovým limitom a signálom prerušenia, zoraďuje ich na spoločnej časovej osi, zlučuje presné duplikáty a hlási čiastočný výsledok, keď uspeje iba jedna strana. Neplatný `audioTranscript` degraduje na tento čiastočný výsledok — vizuálny opis sa zachová a zvuková vetva zaznamená sanitizovaný kód zlyhania — namiesto zlyhania celého videa. Dostupnosť jednotlivých vetiev, príznak čiastočného výsledku a sanitizované kódy zlyhania sa zachovávajú v opísanom výsledku, v metadátach guardrailov (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), v metadátach cache výsledkov a v počítadlách fúzie mosta. Predvolená cesta Video Bridge nevyvoláva prevod reči na text ani nesťahuje druhú kópiu médií; bez tejto explicitnej stopy zostáva iba videom.

**Uchovávanie transkriptu (#12150 P1).** Toto sa uplatňuje automaticky vždy, keď
Video Bridge (ktorý sám vyžaduje výslovné zapnutie) vykreslí cue transkriptu — neexistuje
samostatný príznak uchovávania. Keď požiadavka vykreslí akýkoľvek cue transkriptu
(volajúcim deklarovaný `transcript` alebo zlúčený `audioTranscript`), guardrail ho
označí ako `videoBridgeObserved` a vytvorí redigovanú tieňovú kópiu opisu videa —
identické vykreslenie, v ktorom je voľný text každého cue nahradený
`[redacted-video-transcript]`, vytvorenú nahradením štruktúrovaného poľa cue
pred zostavením reťazca (nikdy nie parsovaním splošteného textu, takže žiadny
obsah cue — adversárny ani bežný, vrátane textov obsahujúcich `]`, ako sú
`[inaudible]`/`[music]` — nemôže pretrvať). Perzistované telo požiadavky v
protokole volaní nahradí každú textovú časť odvodenú z videa touto redigovanou
tieňovou kópiou, pričom párovanie prebieha podľa zhody obsahu; kotva `fullText`
sa znovu načíta z dokončeného payloadu guardrailu spusteného pred volaním,
takže zhoda stále uspeje aj po tom, čo neskoršie reťazové guardraily (maskovače
PII a prihlasovacích údajov, priority 10/95) prepíšu text opisu na mieste, a aj
po tom, čo injektovanie systémového promptu/handoffu/pamäte preformuje pole
správ. Telo odoslané upstream modelu zostáva nezmenené. Pozorovaná požiadavka
tiež neplní žiadnu trvalú Memory (preskakuje sa extrakcia odvodená z požiadavky
aj z odpovede), takže vlastná odpoveď modelu nemôže ozvenou preniesť text
transkriptu do Memory.

**Surové polia videa (#12430).** Keď je most povolený a natívna podpora videa je
neznáma alebo chýba, definované polia `transcript`/`audioTranscript` tiež
aktivujú `videoBridgeObserved`, a to aj po zlyhaní opisu alebo po dosiahnutí
limitu `maxVideos`. `null` a prázdne reťazce sa počítajú; chýbajúce polia a
metadáta nesúvisiace s videom nie. Zachované kópie tieto polia redigujú alebo
požiadavku vynechajú a cache/Memory sa obchádzajú.

Na týchto fallback cestách sa platné cue od volajúceho stanú podporovanými
časťami `text`/`input_text` namiesto neštandardných polí poskytovateľa. Obe
stopy dodané požiadavkou zostávajú nedôveryhodnými pozorovaniami `client` s
explicitným upozornením, že video nebolo opísané a časové značky neboli
overené voči médiu. Existujúce celkové rozpočty 256 cue/64 KiB a rozpočty na
cue sa uplatňujú spoločne na obe stopy; časové značky sa musia zmestiť do
600-sekundového stropu brokera a do akéhokoľvek dodaného okna záujmu. Neplatné
stopy sa zahodia, nepreposielajú sa ako ľubovoľný text; platná súrodená stopa
sa môže stále použiť, ak sa neprekročí ich kombinovaný rozpočet. Polia s hodnotou
null alebo prázdne polia nepridávajú žiadny text. Tento fallback nepridáva
žiadne načítanie médií ani transkripciu. Polia rozšírenia transkriptu sa
odstránia z fallbackového nosiča videa a z jeho objektov `video_url`/`source`.
Povolený zoznam pre prenos OpenAI zostáva prísny; nosiče videa s neznámou
natívnou podporou zostávajú dostupné a známe ciele určené iba na text si
zachovávajú bezpečnostné markery. Štruktúrované redigované tieňové kópie chránia
pripojený text transkriptu, zatiaľ čo pôvodná požiadavka patriaca volajúcemu
zostáva nezmenená. Ciele s natívnou podporou a zakázané mosty si zachovávajú
existujúce správanie obchádzania.

Ďalšie zachované kópie používajú rovnaký signál pozorovanej požiadavky. Surová
snímka klientskej požiadavky pred guardrailom, čakajúca požiadavka v pamäti a
log požiadaviek zamietnutých v skorom štádiu štruktúrne nahrádzajú polia
transkriptu v častiach videa; textové prompty syntetizované fázami pipeline a
handoffom kontextu sa redigujú v sinku perzistovaného tela požiadavky.
Perzistovaný marker `video_content_removed` spôsobí, že pokračovanie cez
`previous_response_id` zlyhá v uzavretom režime, namiesto rekonštrukcie textu,
ktorý bol zámerne zahodený. Ak pozorovaná požiadavka stratí svoju redigovanú
tieňovú kópiu pre jednotlivú časť pred logovaním, alebo ak sa dokonca jedna z
viacerých tieňových kópií videa nepodarí spárovať po neskorších mutáciách
požiadavky, zachované telo požiadavky sa úplne vynechá namiesto zachovania
čiastočne redigovaného transkriptu.

Pri pozorovanej požiadavke môže odpoveď modelu citovať akúkoľvek časť transkriptu
bez štruktúrovanej hranice cue. Jej perzistované pole `responseBody` v protokole
volaní sa preto nahradí markerom vynechania; podrobný artefakt pipeline (ktorý
môže obsahovať upstream/klientské telá a časti streamu) sa nezachováva.
Sémantické, idempotenčné a reasoning-replay cache pre túto požiadavku obchádzajú
čítania aj zápisy. Požiadavka poskytovateľa a odpoveď viditeľná klientovi
zostávajú nezmenené. Skoré bajty keepalive sa pri vynechaní podrobného artefaktu
vypustia z dočasného bufferu. Upozornenie Kiro na poškodený EventStream uvádza
iba počet bajtov payloadu, nikdy jeho obsah ani surovú chybu JSON parsera.
Toto netvrdí, že každá nesúvisiaca diagnostika poskytovateľa/pluginu bola
auditovaná; širší audit zachovaných sinkov je sledovaný v #11658.

Interný životný cyklus `/api/modality-bridge/video/drilldown` je samostatný
substrát cache autentifikovaný cez loopback/token. Každá operácia tiež vyžaduje
kanonické nepriehľadné ID subjektu. Pred povolením produkčného volajúceho musí
odvodiť toto ID z autentifikovaného tenanta a nikdy nesmie preposlať hodnotu
vybranú klientom. Kľúče cache viažu tento subjekt na kanonické ID relácie a
videoreferencie, ukladajú iba ich kľúče odvodené pomocou SHA-256 a obmedzujú
čítanie aj mazanie na ten istý subjekt. Cache ukladá najviac 16 odvodených
snímok JPEG na záznam, po desiatich minútach ich nechá expirovať a podporuje
ohraničené čítania `start`/`end` alebo explicitné vymazanie relácie.

Každý subjekt je obmedzený na 16 záznamov a 64 MiB kanonických údajov JPEG. Tieto
limity sú nezávislé od globálneho stropu 64 záznamov/256 MiB: tlak na kvótu
subjektu vyradí iba záznamy tohto subjektu použité najmenej nedávno, predtým než
sa zohľadní globálne vyraďovanie LRU. Expirované záznamy sa pri aktivite cache
odstraňujú z účtovníctva subjektu aj globálneho účtovníctva, zatiaľ čo zrušenie
a zlyhanie validácie neuložia čiastočnú náhradu.

Cache odmieta nekánonické Base64, nadbytočné dopĺňanie, médiá, ktoré nie sú JPEG, poškodené alebo
skrátené JPEGy a JPEGy, ktoré počas ohraničeného úplného dekódovania obrázka pomocou `sharp`
vygenerujú upozornenie. Každý prijatý obrázok znovu zakóduje ako kanonický JPEG, šírku a výšku
odvodí z dekódovaných bajtov namiesto toho, aby dôveroval poliam od volajúceho, a akékoľvek koncové
polyglotné bajty zahodí namiesto ich zachovania. Do oboch kvót sa započítava iba ohraničená kanonická komprimovaná vyrovnávacia pamäť. Limit JSON na úrovni prenosu zahŕňa režijné náklady Base64 pre 32 MiB
strop dekódovaného vstupu. Každá
uložená derivácia zaznamenáva svoj overený formát/rozlíšenie JPEG, politiku vzorkovania,
verziu derivácie, čas vytvorenia, serverom vypočítaný hash obsahu a zahashovanú referenciu na rodiča
plus hash obsahu rodiča od dôveryhodného volajúceho. Zrušenie sa kontroluje
medzi asynchrónnymi fázami dekódovania/hashovania pred atomickým potvrdením do cache.

Táto etapa zatiaľ nepripája produkčného producenta k trase a neposkytuje
výber variantov s viacerými rozlíšeniami. Transparentná cesta požiadavky Video Bridge preto nespôsobuje žiadnu dodatočnú prácu, zatiaľ čo odvodzovanie principála viazaného na nájomcu a
celý životný cyklus viacerých rozlíšení FU-08 zostávajú výslovnou následnou prácou, a nie
zdokumentovaným dokončeným správaním.

Snímky sa postupne opatrujú popismi pomocou nakonfigurovaného modelu Video. Prázdny
override pre Video dedí nastavenie Vision; ak sú prázdne oba, auto-smerovač Vision
vyberie efektívny model schopný videnia. Úspešné popisy
nahradia pôvodnú časť stabilným prefixom `[Video description:`, ktorý tiež
označuje text ako nedôveryhodné pozorovanie odvodené z média a hovorí nadväzujúcim
modelom, aby nenasledovali pokyny nachádzajúce sa v médiu. Kľúče cache popisov snímok
zahŕňajú bajty JPEG, výzvu, časovú pečiatku a efektívny model; ukladajú sa iba úspešné
popisy. Záznamy cache si zachovávajú skutočný úspešný model producenta vrátane záložného modelu; most hlási `mixed`, keď rôzne snímky
vytvorili rôzne modely. Zásah do cache znovu použije túto identitu producenta
namiesto toho, aby ju premenoval na požadovaný plán smerovania. Cache výsledku celého videa je kľúčovaná podľa každého vstupu, ktorý mení výstup — výzva, efektívny
model, politika vzorkovania, počet snímok, režim sémantickej analýzy, odtlačok SHA-256
normalizovaného náznaku zamerania, okno zamerania, `transcript`,
`audioTranscript` a príznak kontaktného listu — takže zmena ktoréhokoľvek z týchto
rozmerov je netrafenie cache, nikdy nie zastarané opätovné použitie. Verzia politiky vizuálnej deduplikácie, prah a ohraničený počet kandidátskych snímok sú tiež explicitne uvedené v
kľúči a metadátach cache výsledku; zmena politiky preto nemôže znovu použiť zastaraný
popis celého videa. Metadáta cache výsledku v4 uchovávajú režim a
odtlačok, nikdy nie surovú úlohu používateľa. Metadáta guardrailu uvádzajú požadovaný aj efektívny režim analýzy; požadovaný režim `focused` bez
použiteľného textu používateľa sa uvádza ako efektívne `full`.

Guardrail extrahuje každú podporovanú časť videa, ale popisuje najviac
`modalityBridgeVideoMaxVideos`. Pre cieľ, u ktorého je preukázané, že má
`supportsVideo === false`, zlyhané a nadlimitné videá sa stanú explicitnými bezpečnými
textovými značkami, aby neprežilo žiadne surové video. Keď je schopnosť neznáma, tieto časti
si zachovajú svoj video nosič; akýkoľvek záložný prepis sa riadi ohraničenou textovou
konverziou vyššie. Ciele s `supportsVideo === true` obchádzajú most.
Signál zrušenia klientskej požiadavky sa šíri cez stiahnutie, front brokera,
podprocesy a volania popisov; zrušenia sa zastavia medzi videami a nikdy sa pri zlyhaní neprepnú na surové médium.

Nastavenia runtime sú podložené databázou a validované cez Zod:

| Kľúč                                | Predvolené  | Rozsah / správanie                                                                                            |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Voliteľný runtime, vyžaduje opt-in                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachováva generické popisy; `focused` používa ohraničený, nedôveryhodný kontext posledného používateľa |
| `modalityBridgeVideoModel`          | `""`        | Dedí model Vision Bridge                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` alebo proporcionálny `segment_aware`; zlyhanie detektora sa vráti k `uniform`        |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Staršie uložené hodnoty časového limitu Video nad 120 sekúnd sa obmedzia na
časový limit brokera; nové zápisy nastavení nad týmto limitom sa odmietnu.
`GET /api/modality-bridge/video/runtime` vyžaduje dôveryhodnú označenú lokalitu loopback
pred autentifikáciou alebo sondovaním runtime, potom vyžaduje autentifikáciu pre správu.
Vracia iba `available`, očistené verzie FFmpeg/ffprobe a pevne stanovený
dôvod, keď je runtime nedostupný. Interný koncový bod extrakcie nie je
verejné API na nahrávanie: nasýtenie frontu vracia `503` plus `Retry-After`, odpojenie volajúceho
vracia `499` a pevný časový limit brokera vracia `504`. Konvertované odpovede pridávajú
`video->text;model=<visionModel>;parts=<videos>` do centrálnej
hlavičky `x-omniroute-modality-bridge` bez odstránenia segmentov Vision alebo Audio.

### Maskovač PII (`piiMasker.ts`)

Spúšťa sa v **oboch** fázach.

- **`preCall`** klonuje dátový obsah, prechádza položky `system`, `messages`, `input` a
  `prompt` (vrátane položiek vo forme obyčajných reťazcov) a aplikuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) na reťazcové polia `content`/`text`. Keď je
  `PII_REDACTION_ENABLED=true`, zistené osobné údaje sa vo výstupnom dátovom
  obsahu zredigujú. Toto je nezávislé od `INPUT_SANITIZER_MODE` (ktorý riadi iba
  pravidlá pre prompt injection). Keď je redigovanie vypnuté, volanie zaznamenáva
  počty detekcií bez prepisovania obsahu.
- **`postCall`** vytvorí hĺbkovú kópiu odpovede, spustí `sanitizePIIResponse()` spolu
  s maskovaním štruktúry Responses API (`maskResponsesOutput` — zahŕňa
  `output_text` a `output[].content[].text`). Ak dôjde k akejkoľvek redakcii,
  upravená odpoveď nahradí pôvodnú.

Ochranné pravidlo nikdy neblokuje; iba pridáva anotácie (`meta.detections`,
`meta.redacted`) alebo prepisuje obsah.

#### Výber podľa typu, vlastné vzory a počítadlá detekcií

**Dashboard → Settings → Security → PII masking** určuje, _čo_ sa maskuje.
Maskovanie však nezapína: to naďalej riadia `PII_REDACTION_ENABLED` (požiadavka) a
`PII_RESPONSE_SANITIZATION` (odpoveď + SSE), pričom obe sú predvolene vypnuté.

- **Výber podľa typu** — vstavané identifikátory sú uvedené v
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Nenastavená hodnota
  znamená všetky typy (správanie pred zavedením tohto nastavenia). Vzor
  `ssn_us` enginu požiadaviek sa mapuje na `ssn`. Šablóny (Minimálna,
  Štandardná, Finančná, Brazílska, USA, Úplná) iba vyplnia začiarkavacie políčka
  v používateľskom rozhraní.
- **Vlastné vzory** — najviac 20 regulárnych výrazov alebo vzorov so zástupnými
  znakmi (`*` = najviac 64 znakov, ktoré nie sú bielymi znakmi, `?` = jeden znak).
  Zhody sa zmenia na `[CUSTOM_REDACTED]`. Každý vzor prechádza cez
  `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`): najviac
  500 znakov, príznaky obmedzené na `g i m s u`, musí sa dať skompilovať, musí
  prejsť kontrolou `safe-regex` (katastrofický backtracking) a nesmie sa zhodovať
  s prázdnym reťazcom ani so zástupným textom redakcie. Vzor, ktorý kontrolou
  neprejde, sa odmietne pri ukladaní aj testovaní a uložený riadok, ktorý
  kontrolou neprejde, sa za behu preskočí namiesto skompilovania. Vlastné vzory
  sa používajú iba vtedy, keď je maskovanie zapnuté.
- **Počítadlá detekcií** — počty podľa typu (nikdy nie nájdené hodnoty), uchovávané
  v pamäti a vynulované pri reštarte (`src/lib/pii/piiDetectionStats.ts`).
  Zvyšujú sa iba vtedy, keď je maskovanie zapnuté.

Nastavenia sú uložené v tabuľke `key_value` (menný priestor `pii_settings`,
`src/lib/db/piiSettings.ts`) a čítajú sa prostredníctvom vyrovnávacej pamäte
s platnosťou 1 s. API:

| Metóda | Cesta                    | Účel                                                                                |
| ------ | ------------------------ | ----------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stav príznakov, `enabledTypes`, `customPatterns`, počítadlá detekcií                |
| `PUT`  | `/api/settings/pii`      | Nahradenie `enabledTypes` (`null` = všetky) a/alebo `customPatterns`                |
| `POST` | `/api/settings/pii/test` | Skúšobné spustenie jedného vzoru na vzorke s veľkosťou najviac 8 KB; nič sa neuloží |

Všetky tri vyžadujú overenie správcu a validujú telo pomocou Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Deteguje nepriateľské štruktúry v obsahu zadanom používateľom a vynucuje
nakonfigurované pravidlá. Správanie určujú premenné prostredia a možnosti
konštruktora:

| Nastavenie      | Premenná prostredia                                                                                    | Predvolená hodnota | Účinok                                                                                                                                                                                                         |
| --------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Zapnuté         | `INPUT_SANITIZER_ENABLED`                                                                              | `true`             | Keď je hodnota `false`, ochranné pravidlo sa okamžite ukončí.                                                                                                                                                  |
| Režim           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`             | Pravidlá pre injection: `block`, `warn` alebo `log`. (`redact` sa akceptuje pre spätnú kompatibilitu, ale **neodstraňuje** text injection; prepis osobných údajov v požiadavke riadi `PII_REDACTION_ENABLED`.) |
| Prah blokovania | Možnosť `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Minimálna závažnosť potrebná na blokovanie. Pri predvolenom nastavení sa stredná závažnosť iba sleduje.                                                                                                        |

**Priorita režimov** (`getMode`): `options.mode` volajúceho →
**prepísanie príznakom funkcie v DB** pre `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → premenná prostredia `INJECTION_GUARD_MODE` → premenná prostredia
`INPUT_SANITIZER_MODE` → `warn`. Prepísanie cez dashboard má preto prednosť pred
premennými prostredia, takže používateľské rozhranie Feature Flags riadi spustenú
ochranu naživo (bez reštartu). Čítanie z DB používa bezpečný záložný mechanizmus:
ak zlyhá, ochrana sa vráti k správaniu založenému na premenných prostredia, a keď
nie je nastavené žiadne prepísanie, správanie je rovnaké ako pri vyhodnocovaní
výhradne podľa premenných prostredia.

Zdroje detekcie:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (zdieľaná množina
   detektorov používaná aj na iných miestach spracovateľského reťazca).
2. Vstavané `DEFAULT_GUARD_PATTERNS` (aktuálne `system_override_inline` a
   `markdown_system_block`, oba so závažnosťou `high`).
3. Voliteľné `customPatterns` odovzdané prostredníctvom možností konštruktora
   (reťazce, regulárne výrazy alebo záznamy `{ name, pattern, severity }`).

Keď `mode === "block"` **a** aspoň jedna detekcia spĺňa prah závažnosti,
`preCall` vráti `{ block: true, message: "Request rejected:
suspicious content detected" }`. V režimoch `warn`/`log` ochranný mechanizmus udalosť
zaznamená, ale volanie povolí. Zdieľaná pomocná funkcia `evaluatePromptInjection()` sa tiež exportuje
pre volajúcich, ktorí potrebujú vyhodnocovať prompty bez použitia registra.

**Limit skenovania (v3.8.20):** detektor kontroluje iba **prvých 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Funkcie `detectInjection()` aj
`evaluatePromptInjection()` pred spustením slučky vzorov použijú
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Inštrukcie na injekciu sa nachádzajú blízko začiatku vstupu, takže
sa tým obmedzuje využitie CPU regulárnymi výrazmi a GC pri dátach s veľkosťou niekoľkých stoviek KB bez oslabenia detekcie (pozri
#3932, #4041).

### Maskovanie prihlasovacích údajov (`credentialMasker.ts`)

Spúšťa sa v **oboch** fázach ako posledné v predvolenom reťazci (priorita `95`). Rediguje
známe vzory kľúčov API a tajných tokenov z odchádzajúcich dát (obsah správ,
argumenty volaní nástrojov, výsledky nástrojov) **aj** z odpovede poskytovateľa, takže
prihlasovací údaj vložený do promptu (alebo zopakovaný vo výsledku nástroja) neunikne
externému poskytovateľovi ani späť klientovi.

- **Iba po explicitnom povolení**, podľa rovnakej konvencie ako redigovanie PII (v súlade s tvrdým pravidlom č. 20):
  vypnuté, pokiaľ `settings.credentialRedactionEnabled === true` **alebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Keď je vypnuté, ochranný mechanizmus nevykonáva žiadnu operáciu —
  nikdy neblokuje ani neupravuje.
- `redactCredentials()` prechádza celým stromom dát/odpovede (`walkValue()`,
  bezpečne voči znečisteniu prototypu, bezpečne pri cykloch prostredníctvom `WeakSet`) a nahrádza zhody
  zástupným reťazcom `[REDACTED:<type>]`, pričom klonuje iba vetvy, ktoré sa skutočne
  zmenili.
- `CREDENTIAL_PATTERNS` pokrýva kľúče poskytovateľov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platobné kľúče (Stripe, Square), cloudové
  kľúče (prístupový kľúč AWS, Twilio, SendGrid, Mailgun), súkromné kľúče/JWT,
  reťazce pripojenia obsahujúce prihlasovacie údaje (`mongodb://user:pass@...` atď.) a
  všeobecný vzor hodnoty hlavičky `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kľúče v tvare hlavičiek (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sa redigujú štrukturálne (iba hodnota, predpona schémy ako
  `Bearer `/`Basic ` sa zachová) namiesto použitia všeobecného textového regulárneho výrazu.
- Ochranný mechanizmus nikdy neblokuje; iba upravuje (`modifiedPayload` /
  `modifiedResponse`) a pridáva anotácie (`meta.credentialsRedacted`, `meta.count`).

Ochrana proti regresii: `tests/unit/credential-masker-guardrail.test.ts`.

## Základný kontrakt (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true predčasne ukončí reťaz
  message?: string; // zobrazí sa pri blokovaní
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vrátené z preCall na prepis požiadavky
  modifiedResponse?: TValue; // vrátené z postCall na prepis odpovede
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Guardrail signalizuje „žiadnu zmenu“ vrátením buď `void`, `{}`, alebo
`{ block: false }`. Vrátenie `modifiedPayload`/`modifiedResponse` nahradí
hodnotu, ktorá preteká reťazou pre nadväzujúce guardrails.
`signal?: AbortSignal` prenáša životný cyklus volajúceho do guardrails. Prerušenie požiadavky je zámernou výnimkou fail-open: mediálne mosty ukončia prácu a vyčistia sa bez obnovenia surových médií cieľu, o ktorom je známe, že ich nepodporuje.

## Register (`registry.ts`)

Singleton `guardrailRegistry` sprístupňuje:

- `register(guardrail)` — pridá guardrail (alebo ho nahradí podľa normalizovaného názvu) a
  znovu zoradí podľa vzostupného `priority`.
- `clear()` / `list()` — administratívne pomocné metódy.
- `runPreCallHooks(payload, context)` — iteruje aktívne guardrails, posúva
  payload cez `modifiedPayload` a zastaví sa pri prvom `block: true`.
- `runPostCallHooks(response, context)` — rovnaký postup na strane odpovede.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a voliteľne
  znovu zaregistruje predvolené hodnoty pre čistú izoláciu testov.

Oba spúšťače vracajú `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamov `GuardrailExecutionResult`, ktoré obsahujú
polia `blocked`, `skipped`, `modified`, `error` a `meta` pre každý guardrail,
užitočné na trasovanie.

### Vypnutie guardrails pre jednotlivú požiadavku

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
deduplikovaný zoznam názvov guardrails, ktoré sa majú pre aktuálnu
požiadavku preskočiť. Existuje päť kanálov, čítajú sa v tomto poradí a zlučujú do jedného zoznamu
(pri deduplikácii vyhráva prvý výskyt):

1. `apiKeyInfo.disabledGuardrails`
2. Telo požiadavky `disabledGuardrails` (na najvyššej úrovni)
3. Telo požiadavky `metadata.disabledGuardrails` (len keď je `metadata` objekt)
4. Hlavička `x-omniroute-disabled-guardrails`
5. Staršia hlavička `x-disabled-guardrails`

Všetkých päť kanálov sa zlúči, vrátane oboch hlavičiek: odoslanie oboch
`x-omniroute-disabled-guardrails` a `x-disabled-guardrails` preskočí zjednotenie
ich zoznamov a prázdna moderná hlavička už neskryje staršiu
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), opravené v
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Hodnoty môžu byť polia reťazcov alebo reťazec oddelený čiarkami; názvy sa orezávajú
a normalizujú na malé písmená v kebab-case (`pii_masker` → `pii-masker`) a prázdne
položky sa vynechávajú. Výsledok sa odovzdá cez `context.disabledGuardrails`
do registra, ktorý preskočí zodpovedajúce guardrails (`skipped: true` v `results`).

Zoznam vypnutia ovplyvňuje iba **register**. Režim `block` pri prompt-injection je
povinná hranica: middleware injection-guard
(`src/middleware/promptInjectionGuard.ts`) volá `evaluatePromptInjection()`
bez akéhokoľvek zoznamu vypnutia riadeného volajúcim (mŕtve
volanie `resolveDisabledGuardrails({ body })`, ktoré predtým vykonával, bolo odstránené v
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), takže požiadavka,
ktorá vypne `prompt-injection`, je v režime `block` stále odmietnutá. Je to zámer.
Kanály vypnutia sú riadené volajúcim (telo požiadavky,
metadata, hlavičky) a volajúci nesmie mať možnosť vypnúť bezpečnostnú
kontrolu, ktorú nastavil operátor
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Zjednotenie hlavičiek
z [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mení iba to, ktoré guardrails z registra sa preskočia; neumožňuje klientovi
obísť middleware. Povinné guardrail politiky pre jednotlivé kľúče a skupiny sú
sledované v RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Pozrite si [Pokrytie a limity](#coverage-and-limits).

## Poradie vykonávania

Pre každú požiadavku prechádzajúcu cez `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts` (trasy z rodiny chat uvedené v
[Pokrytie a limity](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` zostaví zoznam preskočení z API kľúča, tela
   a hlavičiek.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spúšťa guardrails vo vzostupnom
   poradí priorít:
   - Zakázané guardrails sa zaznamenajú ako `skipped`.
   - `preCall` každého guardrailu môže prepísať payload prostredníctvom `modifiedPayload`.
   - Prvé `block: true` preruší reťazec a handler vráti
     odpoveď s odmietnutím guardrailu.
3. (Potenciálne prepísaný) payload vstupuje do combo routingu a odoslania
   na upstream.
4. **Iba pre non-streaming:** po zostavení odpovede
   `guardrailRegistry.runPostCallHooks(...)` spustí rovnaký reťazec na
   odpovedi. `block: true` tu zahodí odpoveď z upstreamu a vráti HTTP 400. Streamované odpovede tento krok úplne preskočia.

Guardrails, ktoré vyhodia výnimku, sa zaznamenajú s `error: <message>` a zalogujú cez
`logger.warn`, ale reťazec pokračuje — fail-open je zámerný.

## Pokrytie a limity

Registrácia guardrails je zapojená iba do chat pipeline. Tieto limity sú
zafixované testami `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` a
`tests/unit/guardrail-pipeline-characterization.test.ts`; tieto testy aktualizujte zámerne, keď sa správanie zmení.

### Kde sa hooky spúšťajú

| Hook / riadenie                     | Spúšťa sa na                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                   | Požiadavky spracúvané cez `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (a `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` a Telegram chat proxy. Tiež testovací endpoint dashboardu `/api/guardrails/test`. Blokovanie v pre-call fáze vráti HTTP 400. |
| `runPostCallHooks`                  | Iba **non-streaming** odpovede chatu (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Streamované odpovede sa k nemu nikdy nedostanú.                                                                                                                                                                                                                                                                                         |
| PII v streamovaní                   | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), zapojený v `streamingPipeline.ts`, keď je `PII_RESPONSE_SANITIZATION` zapnuté. Nie je to guardrail, takže kanály na zakázanie ho neovplyvňujú.                                                                                                                                                                                                                         |
| Middleware injection-guard (legacy) | Každá trasa `/v1` nesúca prompt vrátane chat-family (pozri [pokrytie trás](#injection-guard-route-coverage--red-team-phase-8--block-d)). Iba prompt injection.                                                                                                                                                                                                                                                                       |

### Čo nie je pokryté

- **Médiá, embeddings a dátové trasy** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) sa nikdy nedostanú do registrácie. Nevykonáva sa tam
  žiadne maskovanie PII, maskovanie poverení ani modality bridge. Ich jedinou
  kontrolou je starší middleware injection-guard.
- **Streamované odpovede** nedostávajú žiadne post-call guardrails: žiadny `pii-masker` ani
  `credential-masker` v post-call fáze a žiadne blokovanie v post-call fáze. Uplatní sa iba streaming PII
  transform (keď je `PII_RESPONSE_SANITIZATION` zapnuté). Poverenie vrátené v streamovanej odpovedi nie je redigované.
- **Kanály na zakázanie vs. middleware (zámerne):** middleware vyhodnocuje
  prompt injection vlastným volaním `evaluatePromptInjection()` bez odovzdania akéhokoľvek
  zoznamu zakázaní ovládaného volajúcim. Režim `block` je povinná hranica, ktorú zakázania ovládané volajúcim nemôžu obísť, vrátane tras chat-family
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Zakázanie
  `prompt-injection` preskočí iba guardrail v registrácii.

### Čo spracúva odpoveď pred post-call

Na non-streaming ceste je poradie: extrakcia pamäte → vykonanie vstavaného nástroja → post-call guardrails → výstup z post-call bloku → uloženie do sémantickej cache.

- **Extrahovanie pamäte** a **vykonávanie nástrojov** vidia odpoveď skôr, než ju guardrails po volaní môžu prepísať alebo zablokovať. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) prechádza
  extrahovaný text pri extrahovaní pamäte cez `sanitizePII`, keď je zapnuté
  `PII_RESPONSE_SANITIZATION` (pri streamovaní aj bez streamovania), ale
  odpoveď, ktorú neskoršie post-call guardrails zablokujú, už bola ponúknutá
  pamäti a nástrojom.
- **Sémantická cache** ukladá odpoveď až po post-call, takže ukladá
  prepísanú odpoveď a zablokovaná odpoveď sa nikdy neukladá do cache. Záznamy
  v cache sú kľúčované podľa API kľúča.

## Konfigurácia

Premenné prostredia, ktoré čítajú vstavané guardrails:

| Premenná                              | Používa                   | Účinok                                                                                                                |
| ------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Nastavte `false` na úplné vypnutie detekcie.                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Politika pre injekcie: `warn`, `block` alebo `log`. Staršia hodnota `redact` neprepisuje text injekcie.               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Režim pre ochranu proti injekciám; tiež databázový príznak funkcie, ktorý **prepíše** premenné prostredia (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimálna závažnosť, ktorú `MODE=block` odmietne: `high` (predvolené), `medium` alebo `low`.                          |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starší alias pre `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Keď je `true`, PII v požiadavke sa redigujú (nezávisle od režimu injekcií).                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Riadi správanie maskeru na strane odpovede.                                                                           |

Guardrails Modality Bridge čítajú konfiguráciu za behu z úložiska nastavení
podloženého databázou (`getSettings()`), nie z premenných prostredia. Primárne
kľúče Vision sú `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Staršie kľúče
`visionBridge*` sa akceptujú iba ako dokumentované záložné čítanie v jednom
cykle; zápisy z dashboardu používajú primárne kľúče. Predvolené hodnoty a
resolver záložného režimu sa nachádzajú v
`src/shared/constants/modalityBridgeDefaults.ts`, pričom staršie
konštanty zostávajú v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips`, plus zdieľané
nastavenia `modalityBridgeCache*`. Audio nemá záložný režim pre staršie kľúče,
pretože tieto kľúče boli zavedené so schémou Modality Bridge.

Video používa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout`, plus zdieľané nastavenia `modalityBridgeCache*`.
Je predvolene vypnuté, pretože FFmpeg/ffprobe sú voliteľné prevádzkové
závislosti a popisovanie snímok zvyšuje latenciu a náklady na model.

## Vlastné guardrails

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Kroky:

1. Vytvorte `src/lib/guardrails/myGuardrail.ts` rozširujúci `BaseGuardrail`.
2. Implementujte `preCall` a/alebo `postCall`.
3. Buď zaregistrujte pri importe (push z `registerDefaultGuardrails`), alebo
   zavolajte `guardrailRegistry.register(...)` za behu — registry nahradí
   akýkoľvek predchádzajúci guardrail s rovnakým normalizovaným názvom.
4. Pridajte testy do `tests/unit/` (existujúce príklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testovanie

Medzi testami použite `resetGuardrailsForTests()`, aby ste začínali zo známeho stavu.
Ak chcete začať s prázdnym registrom a zaregistrovať iba testované guardrails,
odovzdajte `{ registerDefaults: false }`. Vision Bridge akceptuje vstrekovanie
závislostí (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge sprístupňuje
ekvivalentné rozhrania pre nastavenia, schopnosti, výber modelu STT, kontroly
prihlasovacích údajov a prepis. Testy tak môžu precvičiť oba toky bez prístupu
k DB alebo sieti.

## Pozri aj

- `src/lib/guardrails/` — implementácia
- `src/shared/utils/inputSanitizer.ts` — zdieľaný detektor, ktorý poháňa
  prompt-injection a PII
- `src/shared/constants/visionBridgeDefaults.ts` — predvolené hodnoty Vision Bridge a
  zoznam modelov vynútených pre bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — zdieľané runtime predvolené hodnoty Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonálna vrstva (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — úplný prehľad premenných prostredia

## Pokrytie trás injection-guard & red-team (Fáza 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) pokrýva všetky trasy,
ktoré prijímajú používateľské prompty. Rešpektuje `INJECTION_GUARD_MODE` (predvolené `warn` = iba logovanie;
`block` = vráti HTTP 400 `SECURITY_001`).

| Typ               | Trasy                                                                                                                                                | Predvolený režim |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Text (existujúce) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generatívne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Dáta              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Extrakcia textu (`extractMessageContents`) pokrýva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nočný, `nightly-llm-security.yml`):** promptfoo overuje, že každá trasa blokuje
korpus OWASP-LLM v `INJECTION_GUARD_MODE=block`; garak spúšťa sondy (preskočí bez tajného údaja).
`moderations` je zahrnuté pre konzistenciu. Režim block je povinná hranica: `evaluatePromptInjection()`
ignoruje zoznam vypnutí pre jednotlivé požiadavky, ktorý mu middleware odovzdáva, takže `disabledGuardrails`
**nevyraďuje** trasu z tejto kontroly ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Nočný workflow (`.github/workflows/nightly-llm-security.yml`, cron + manuálne
spustenie) má dve úlohy:

- **`promptfoo-guard` (blokujúca)** — spúšťa `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý adversariálny prípad (napr. „ignore all
  previous instructions…“, jailbreaky v štýle DAN) overuje, že odpoveď obsahuje
  `error.code === "SECURITY_001"`, t. j. že guard požiadavku skutočne odmietol.
- **`garak` (informačná)** — spúšťa garak `--probes promptinject,dan,leakreplay`
  proti lokálnej inštancii OmniRoute (`http://localhost:20128/v1`). Podmienené
  poskytovateľským tajným údajom (`PROMPTFOO_PROVIDER_KEY`); elegantne sa preskočí a má príponu
  `|| true`, takže podáva správu bez zlyhania CI.

Pokrytie pomocníka guardu (`createInjectionGuard` / `withInjectionGuard`)
zahŕňa každú trasu `/v1` nesúcu prompt; text promptu sa získava z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocou
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
