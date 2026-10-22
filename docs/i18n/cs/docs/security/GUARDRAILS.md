# Guardrails (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Zdroj pravdy:** `src/lib/guardrails/`
> **Naposledy aktualizováno:** 2026-10-17 — v3.8.52 (přidána část [Pokrytí a omezení](#coverage-and-limits):
> které trasy a cesty odpovědí hooky pokrývají, sloučené hlavičky pro deaktivaci (#16412), režim
> blokování injekcí jako povinná hranice (#16413) a co vidí odpověď před post-call)

Guardraily vynucují bezpečnost, zásady a transformace obsahu na rozhraní
mezi OmniRoute a upstream poskytovateli. Každý guardrail může kontrolovat (a
volitelně odmítnout, transformovat nebo anotovat) datové části požadavků (`preCall`) a
upstream odpovědi (`postCall`).

Systém je typu **fail-open**: pokud guardrail během provádění vyvolá výjimku, registr
chybu zaznamená a pokračuje dalším guardrailem, místo aby požadavek
selhal. Blokování je explicitní rozhodnutí (`block: true`), nikdy ne nehoda.
Jedinou výjimkou je přerušený požadavek: když je volajícího `signal` přerušen,
guardrail, který vyvolá výjimku, způsobí odmítnutí běhu hooku, místo aby byl přeskočen.

Hooky se **nespouštějí** na každé trase ani pro každou odpověď. Než se na guardrail
spolehnete jako na bezpečnostní kontrolní mechanismus, přečtěte si část
[Pokrytí a omezení](#coverage-and-limits).

## Vestavěné guardraily

Registr při importu automaticky načte šest guardrailů v pořadí podle priority
(viz `registry.ts` → `registerDefaultGuardrails()`):

| Priorita | Název               | Fáze           | Soubor                |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižší čísla priority se spouštějí **dříve**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Základní model GLM 5.3 a modely `glm-5.3-{low,high,max}` mají v registru/specifikaci explicitní
metadata `supportsVision:false`. Varianty GLM 5.3 Flash
zůstávají modely s nativní podporou obrazu. Trasa Claude Code `/v1/messages` vstupuje do
sdíleného řetězce guardrailů `handleChat` před voláním **před** překladem
z formátu Claude do formátu OpenAI; vnořené obrázky ve výsledcích nástroje `Read` musí být popsány nebo zpracovány
předtím, než je tento překlad převede na obsah OpenAI `image_url` (#17069).

Zachytává požadavky obsahující obrázky, které jsou směrovány na **modely bez podpory obrazu**, a buď
přesměruje celý požadavek na model podporující obraz, nebo před
upstream voláním nahradí obrazové části textovými popisy vytvořenými konfigurovatelným modelem pro zpracování obrazu.
To umožňuje poskytovatelům podporujícím pouze text transparentně zpracovávat
multimodální datové části.

Průběh:

1. Přeskočí zpracování, pokud cílový model již podporuje obraz (pokud se nenachází v
   seznamu vynuceného přemostění `isVisionBridgeForcedModel`).
2. Extrahuje obrazové části prostřednictvím `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), která deleguje na **sjednocený detektor médií**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — jediný zdroj
   pravdy sdílený s filtrem kompatibility kombinací.
   Extrakce je omezena seznamem povolených tvarů, které může `replaceImageParts` vložit
   zpět (kontrakt extrakce↔nahrazení): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` a Responses
   API `input_image`. Odpovídající obrázky vnořené do Claude Code
   `tool_result.content` a výstupů nástrojů Responses jsou rovněž extrahovány a
   nahrazeny na svých původních cestách; tvary obsahující pouze indikátory jsou určeny pro
   filtr kombinací a nejsou extrahovány.
   Pokud nejsou žádné nalezeny, zpracování se přeskočí.
3. Vyhodnotí běhovou konfiguraci prostřednictvím `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nové klíče nastavení `modalityBridge*`
   mají přednost; starší klíče `visionBridge*` zůstávají jako **záložní možnost na jeden
   cyklus** (okno pro návrat zpět). Když je přemostění deaktivováno, zpracování se přeskočí ještě před průchodem médii.
4. Selektor režimu (`modalityBridgeVisionMode`, viz tabulka níže) rozhodne mezi
   přesměrováním a popisem. Přesměrování vrátí `modifiedPayload`, ve kterém je změněn pouze `model`,
   spolu s metadaty `{ rerouted, fromModel, toModel, imagesKept }`.
5. Cesta popisu: omezí počet obrázků na `maxImages`, sestaví prompt zohledňující úlohu,
   zkontroluje mezipaměť popisů, zavolá model pro zpracování obrazu **paralelně**
   (`Promise.allSettled`) a na jejich místa vloží textové části `[Image N]: <description>`.
   Neúspěšný popis vrátí `null`: nezpracovaný obrázek je zachován pro
   neznámé cíle nebo cíle podporující obraz (#4012), ale u **potvrzeného přímého
   cíle podporujícího pouze text** nebo kombinace bez podpory obrazu se pro
   každý nepopsaný obrázek vloží explicitní textový zástupný obsah
   `(unavailable — no vision-capable provider connected)`, včetně částečných selhání a obrázků překračujících
   limit volání popisu (#17069). Stávající záložní popis pro kombinaci při selhání všech volání
   zůstává zachován (#8430).
6. Vrátí `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor režimu (`modalityBridgeVisionMode`)

| Režim      | Výchozí | Chování                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Původní heuristika beze změn (#6640/#7204): modely, které nejsou kombinované ani `auto/`, jsou přesměrovány na nejlepší model pro zpracování obrazu, pokud původní model již nemá použitelné přihlašovací údaje (pak provede popis); kombinované cíle vždy provedou popis.                                                                              |
| `describe` |         | Vždy provést popis — blok přesměrování je zcela přeskočen; vždy odpovídá model zvolený uživatelem.                                                                                                                                                                                                                                                      |
| `reroute`  |         | Vynutit přesměrování: kontrola zachování modelu s přihlašovacími údaji je obejita. Kontrola přihlašovacích údajů **cíle** přesměrování se stále uplatňuje — pokud neexistuje použitelný cíl pro zpracování obrazu, bridge požadavek zablokuje s jasnou chybou, místo aby provedl popis nebo odeslal nezpracované obrázky cíli podporujícímu pouze text. |

Vynucené režimy ukončí zpracování **předtím**, než se spustí automatická heuristika; chování režimu `auto`
je na úrovni bajtů totožné s ochranným mechanismem před PR-1.

#### Rozsah klíče API (`visionBridgeKeyScope.ts`)

Když klíč API volajícího omezuje `allowedConnections`, fondy kvót
(`allowedQuotas`) nebo modely (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge vybírá pouze
modely pro přesměrování a popis, které smí klíč používat, a to na připojeních,
která smí klíč používat. Volání pro popis poté vždy prochází vlastní smyčkou
OmniRoute s hlavičkou `x-omniroute-self-loop-key-id`, takže přijímající požadavek
chatu znovu vynutí zásady připojení a modelů daného klíče. `enforceApiKeyPolicy()`
respektuje tuto hlavičku pouze společně s nosným tokenem vlastní smyčky, takže
může přístup pouze zúžit, a ID, které nelze přeložit, je odmítnuto.

Pokud pro daný klíč není povolen žádný model pro zpracování obrazu, **potvrzený
cíl podporující pouze text** odmítne požadavek s obrázkem lokálně pomocí jasné
chyby HTTP 400, místo aby bajty obrázku předal nezpůsobilé nadřazené službě
(#17069). U cílů s neznámými nebo nativními schopnostmi zpracování obrazu si
cesta popisu zachovává své předchozí chování „fail-open“ (metadata
`{ skipped: true, reason: "no_permitted_vision_model" }`). Požadavky bez klíče
a klíče bez těchto omezení se chovají přesně jako dříve.

#### Popis zohledňující úlohu (`modalityBridgeVisionTaskAware`)

Výchozí hodnota je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`)
připojí text **poslední uživatelské zprávy** (zkrácený na 500 znaků) k základní
výzvě pro popis, čímž popis zaměří na to, na co se uživatel skutečně ptal
(vzor codex-vision-proxy), a požádá model pro zpracování obrazu o přepis
viditelného textu. Když je příznak vypnutý — nebo není k dispozici žádný text
uživatele — použije se základní výzva beze změny.

Vlastní požadavek kompatibilní s OpenAI ve vlastní smyčce popisu
(`callVisionModelSingle()` v `visionBridgeHelpers.ts`) vždy požaduje
`image_url.detail: "high"` — bezpodmínečně, pro každého volajícího a
poskytovatele, bez závislosti na jakémkoli signálu klienta. Vzorkování s nízkou
úrovní detailů snižuje přesnost OCR právě u úlohy přepisu textu, kterou tato
výzva požaduje, takže samotné volání popisu vždy požaduje vysokou úroveň
detailů bez ohledu na to, jakou úroveň detailů používal původní příchozí
požadavek. To ovlivňuje pouze interní tělo požadavku na popis; nemění to způsob,
jakým OmniRoute předává vlastní `image_url.detail` volajícího v primárním
požadavku — tato výchozí hodnota se použije samostatně a pouze pro rozpoznané
klienty OpenCode ve funkci `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Větev vlastní smyčky popisu
používající přenosový formát Anthropic nemá pole `detail` a žádná z těchto
výchozích hodnot ji neovlivňuje.

#### Limit výstupu popisu (`modalityBridgeVisionMaxChars`)

| Klíč                           | Výchozí | Rozsah             |
| ------------------------------ | ------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`     | `0` nebo 100–50000 |

`0` (výchozí hodnota) znamená **bez omezení** — popis vrácený funkcí
`callVisionModel()` je předán beze změny, čímž je zachováno stávající chování.
Jakákoli hodnota v rozsahu 100–50000 zkrátí popis a přidá příponu `…` předtím,
než je vložen zpět ve tvaru `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` v `src/lib/guardrails/visionBridge.ts`).
Pro úlohy OCR náročné na detaily, u nichž následný model potřebuje celý přepis,
tuto hodnotu zvyšte; snižte ji, chcete-li omezit spotřebu tokenů u upovídaných
modelů pro zpracování obrazu. Pole řídicího panelu se nachází na panelu
Advanced na kartě Vision (`modality-bridge-max-chars` v
`ModalityBridgeVisionTab.tsx`) a každou hodnotu mezi 1 a 99 zvýší na minimální
hodnotu 100, zatímco explicitní `0` ponechá beze změny — `0` je sama o sobě
platná hodnota Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nikoli pouze
výchozí hodnota „nenastaveno“.

#### Mezipaměť popisů (`modalityBridge/bridgeCache.ts`)

Mezipaměť LRU + TTL v paměti pro výstupy popisů, sdílená v rámci celého procesu.
Klíč = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s rámováním
pomocí prefixu délky (bez kolizí na hranicích polí). Komponentou modelu je
**nakonfigurovaný** model bridge, nikoli model, který skutečně odpověděl —
`callVisionModel` může interně použít záložní model a vytváření klíčů pro každý
pokus by mezipaměť fragmentovalo. Neúspěšné popisy se nikdy neukládají do
mezipaměti. Nastavení:

| Klíč                            | Výchozí | Rozsah  |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Normalizace vzdálených obrázků (self-loop describe/načtení base64)

Když bridge sám načítá **vzdálený** obrázek — při interním volání Anthropic describe a převodu do base64 ve formátu claude-wire (`ensureBase64ImagesForClaudeWire`), v obou případech prostřednictvím `fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — výsledný identifikátor URI dat před vložením do požadavku na model pro zpracování obrazu projde funkcí `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`). Příliš velké obrázky jsou zmenšeny tak, aby jejich **delší strana měla 2048 px** (což odpovídá omezení velikosti, které již na straně serveru používají OpenAI/Anthropic), čímž se sníží objem nahrávaných dat a latence, aniž by se změnilo to, co model pro zpracování obrazu vidí. Ke změně velikosti se používá `sharp`, načítaný dynamickým importem: na platformě, kde se jeho nativní binární soubor nepodaří načíst, funkce `normalizeDataUri()` **nikdy nevyvolá výjimku** — vrátí původní bajty beze změny, takže cesta pro describe/převod do base64 vždy zůstane funkční. Data, která nejsou obrázkem (načtení nevrátilo dekódovatelný obrázek), jsou rovněž předána beze změny. Tato normalizace se vztahuje pouze na obrázky, které bridge načítá pro své vlastní interní volání — nikdy se nepoužívá na nezpracovaný payload volajícího, což je v souladu s principem změn pouze po výslovném přihlášení (tvrdé pravidlo č. 20).

#### Schéma nastavení + migrace

Nové klíče `modalityBridge*` jsou validovány pomocí Zod v `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojice `modalityBridgeCache*` a skupina `modalityBridgeAudio*` používaná komponentou Audio Bridge. Migrace `141_modality_bridge_settings.sql` kopíruje stávající zastaralé hodnoty `visionBridge*` do odpovídajících nových klíčů (idempotentně a bez přepsání hodnoty `modalityBridge*` nastavené provozovatelem); zastaralé klíče budou po dobu jednoho cyklu vydání nadále přijímány jako záložní zdroj pro čtení.

#### Hlavička transparentnosti + statistiky

Odpovědi transformované operací describe obsahují hlavičku `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (vytvořenou funkcí `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts` a přidanou funkcí `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`). Přesměrované požadavky **žádnou** hlavičku nedostanou — payload nebyl změněn a záměna modelu je již viditelná v poli `model` v těle odpovědi.

`GET /api/modality-bridge/stats` (ověření pro správu, stejná úroveň jako u `GET /api/settings`) vrací čítače jednotlivých modalit uložené v paměti ve formátu `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` pro `vision`, `audio` a `video`. Hodnota `averageLatencyMs` používá jako jmenovatel `latencySamples`, nikoli všechny pokusy; operace bez měření času nevytváří smyšlený vzorek s nulovou dobou trvání. `bridged` zůstává zpětně kompatibilním aliasem pro úspěšné převody; neúspěšné pokusy tuto hodnotu nezvyšují.
Čítače se záměrně resetují při restartu procesu
(jde o telemetrii, nikoli účetnictví).

#### Konfigurace v dashboardu

Vyhrazená stránka dashboardu je
`/dashboard/settings/modality-bridge`. Její karty `Vision`, `Audio` a `Video`, které lze adresovat pomocí URL, při přepnutí zachovávají parametry dotazu a mění pouze hodnotu `tab`.
Karta Vision poskytuje nastavení povolení, režimu, výběru modelu (včetně automatické výchozí volby), promptů zohledňujících úlohu, pokročilého časového limitu, omezení počtu obrázků, délky popisu a mezipaměti, provozních čítačů a chráněného ukázkového požadavku. Aktivní je také karta Audio: nabízí povolení, výběr modelu pouze pro STT s možností Auto, limity časového limitu a maximální délky klipu, čítače zvuku a ukázkový test `input_audio`. Karta Video je funkční: zobrazuje stav běhového prostředí FFmpeg/ffprobe — jeden ze čtyř explicitních stavů uživatelského rozhraní (`unknown`, dokud probíhá kontrola nebo pokud ji nebylo možné dokončit, `restricted` na hostiteli dashboardu, který není loopback, kde je kontrola přeskočena na straně klienta, `unavailable` po provedení kontroly a potvrzení nedostupnosti, nebo `available` s verzemi FFmpeg/ffprobe) — uchovává nastavení povolení, modelu a limitů počtu snímků, videa a časového limitu, filtruje výběr modelu pouze na modely podporující obraz a zpřístupňuje čítače videa.

Původní karta Vision Bridge v nastavení AI je nyní pouze odkazem na novou stránku kvůli kompatibilitě; již neobsahuje druhou kopii formuláře. Sekce Media Providers také odkazuje workflow Image-to-Text a Speech-to-Text na odpovídající karty Modality Bridge, aniž by odstraňovala stávající playground pro Speech-to-Text.

**Vynechání kontroly přijetí u self-loop:** když je volání describe směrováno přes vlastní self-loop OmniRoute `/v1` (nestandardní model poskytovatele), dílčí požadavek odesílá `x-omniroute-admission-bypass: internal` a je ověřen pomocí přihlašovacího údaje určeného pro self-loop — lokálního zástupného údaje `sk_omniroute` v místním režimu nebo klíče prostředí `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` nakonfigurovaného provozovatelem (#1350), aby nasazení s `REQUIRE_API_KEY=true` mohla nadále provádět volání describe. Toto vynechání se akceptuje pouze pro přesně tyto přihlašovací údaje, takže externí klienti nemohou hlavičku použít k přeskočení kontroly přijetí.

Zastaralé výchozí hodnoty se nacházejí v `src/shared/constants/visionBridgeDefaults.ts`; nové výchozí hodnoty pro režim, zohlednění úlohy a mezipaměť a resolver nastavení se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`. Ochranná vrstva poskytuje konstruktorovou volbu `deps`, aby testy mohly vkládat falešné implementace `getSettings` a `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Zachytává chatové požadavky obsahující zvuk ještě předtím, než dorazí k cíli, o němž není známo, že přijímá zvukový vstup. Chatový požadavek nikdy nepřesměrovává: zvukové části jsou přepsány prostřednictvím stávajícího multipart endpointu kompatibilního s OpenAI a zvolený chatovací model pokračuje s textovými přepisy.

Průběh:

1. Určete `supportsAudio` prostřednictvím `getResolvedModelCapabilities()`. Přednost mají explicitní metadata registru poskytovatelů, poté statická metadata modelu a nakonec synchronizované `modalities_input`. Deklarovaný seznam vstupů bez `audio` znamená `false`; pokud neexistují žádné informace o této schopnosti, zůstává hodnota `null`. Jak `false`, tak `null` aktivují konzervativní bridge, zatímco `true` jej obchází.
2. Určete nastavení `modalityBridgeAudio*` a ze všech zpráv extrahujte spojitelné zvukové části nejvyšší úrovně pomocí sdíleného detektoru `detectMediaParts()`. Podporované přenosové formáty jsou OpenAI `input_audio`, `audio_url` a `source.media_type: "audio/*"`. Vnořený zvuk je pro účely směrování detekován, ale cesta spojování jej neodstraňuje. Množství zpracování je omezeno pomocí `modalityBridgeAudioMaxClips`; další části zůstávají beze změny.
3. Respektujte nakonfigurovanou hodnotu `provider/model`, nebo nechte `selectAudioBridgeModel()` projít `AUDIO_TRANSCRIPTION_PROVIDERS` ve stabilním pořadí katalogu a vybrat první model s použitelnými přihlašovacími údaji aktivního poskytovatele.
4. `callAudioTranscription()` převede zvuk ve formátu base64 nebo data URI na vícedílný soubor `file`, případně stáhne vzdálenou adresu `audio_url` prostřednictvím ochrany odchozího připojení pouze k veřejným adresám, s připnutím DNS a limitem 25 MB. Poté odešle pomocí POST soubor a vybraný model do místní samosmyčky `/v1/audio/transcriptions`, ověřené pomocí `resolveSelfLoopBearer()`. Existující trasa přepisu provede standardní vyhledání přihlašovacích údajů, zpracování intervalů vychladnutí a omezení rychlosti a předání poskytovateli.
5. Úspěšná volání nahradí příslušné části řetězcem `[Audio N]: <transcript>`. Volání se spouštějí pomocí `Promise.allSettled`: jednotlivé selhání zachová původní zvukovou část (kontrakt #4012). Pokud selžou všechna volání a u cíle je prokázáno `supportsAudio === false`, části se změní na `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430). U neznámého cíle (`null`) zůstane při selhání všech volání obsah beze změny. Cíl, u kterého je prokázána podpora pouze textu a pro který nejsou k dispozici použitelné přihlašovací údaje STT, obdrží stejný explicitní zástupný text bez provedení síťového volání.

Úspěšné přepisy používají LRU/TTL mezipaměť Modality Bridge sdílenou v rámci celého procesu. Klíč kombinuje odkaz na zvuk, stabilní označení operace `audio-transcription` a vybraný model STT; selhání se nikdy neukládají do mezipaměti. Pokusy o zpracování zvuku aktualizují sdílená počítadla `bridged`, `cacheHits`, `failures` a `lastUsedAt`. Transformované odpovědi obsahují `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; nezměněné požadavky neobdrží segment Audio Bridge.

Nastavení běhového prostředí jsou uložena v databázi a validována pomocí Zod:

| Klíč                          | Výchozí hodnota | Rozsah                  |
| ----------------------------- | --------------- | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`          | —                       |
| `modalityBridgeAudioModel`    | `""`            | Automaticky nebo ID STT |
| `modalityBridgeAudioTimeout`  | `60000`         | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`             | 1–10                    |

Sdílená mezipaměť zůstává řízena nastaveními `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Zachytává video části nejvyšší úrovně v `messages` rozhraní Chat Completions a v `input` rozhraní Responses API před voláním cíle bez známé nativní podpory videa. Podporované formáty jsou `input_video`, `video_url`, `video_source`, adresy URL používající HTTPS a datové URI `data:video/*;base64,...`. Prosté názvy souborů v textu nejsou považovány za video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) zajišťuje průchod požadavkem, kontrolu schopností a zásad, agregaci pro jednotlivé požadavky a datovou část odpovědi. Zpracování jednotlivých videí — získání dat, mezipaměť celého výsledku, popis sekvence snímků (který začleňuje případný volajícím deklarovaný přepis zvuku) a metriky, přerušení a čištění pro jednotlivé pokusy — je skryto za `processVideoPart` v `videoBridgePipeline.ts`, které je voláno jednou pro každou video část ve smyčce funkce `preCall`. Tento modul také definuje explicitní hranice portů `VideoMediaBrokerPort` (získávání bajtů a extrakce vzorkovaných snímků), `VideoAudioTranscriptionPort` (sloučení volajícím deklarovaného přepisu zvuku s titulky vzorkovaných snímků) a `VideoDrilldownPort` (hranice perzistence detailního rozboru snímků; dosud není zapojena do `processVideoPart` — záznamy detailního rozboru dnes zapisuje pouze samostatná trasa `/api/modality-bridge/video/drilldown`).

Veřejná cesta požadavku `/v1` nikdy neimportuje ani nespouští podproces. Vzdálená videa se stahují s limitem 50 MiB; vložená videa ve formátu base64 mají konzervativní limit 36 MiB dekódovaných dat na jedno video, aby se obálka modelu, zpráv a rámců vešla do limitu 50 MiB pro příjem veřejného požadavku JSON. Délka vložených dat a odhad dekódované velikosti se kontrolují před alokací. Na počáteční vzdálené adrese URL i při každém přesměrování je vyžadováno HTTPS; používá se existující ochrana odchozího připojení pouze k veřejným adresám s připnutím DNS. Bajty poté překročí přesnou interní hranici brokeru `POST /api/modality-bridge/video/extract`. Tato trasa je současně `LOCAL_ONLY` a `SPAWN_CAPABLE`, přijímá pouze ověřený požadavek důvěryhodné místní smyčky v rámci procesu a nikdy nepřijímá adresu URL, cestu v souborovém systému, spustitelný soubor ani seznam argumentů. Zpracování velikosti těla na úrovni API a inkrementální čtečka těla obslužné rutiny nezávisle vynucují limit vstupu brokeru 50 MiB. Jeho omezená fronta spouští vždy jednu extrakci, umožňuje čtyři čekající úlohy a omezuje čekající vstup na 100 MiB.

Uvnitř brokeru čte `ffprobe` soukromý místní soubor; pevný seznam
povolených formátů vylučuje formáty playlistů a manifestů. U povolených
kontejnerů rodiny MOV zůstávají externí odkazy na data MOV ve výchozím nastavení
zakázané a pevně stanovený příkaz je nepovoluje. `ffprobe` i `ffmpeg` používají
seznam povolených protokolů omezený pouze na `file`, jedno vlákno, pevná pole
argumentů, žádný shell a spustitelné soubory vyhledané pomocí `PATH`. Streamy
s připojenými obrázky obalů nejsou kandidáty na přehrání. Všechny přehratelné
streamy musí splňovat limity a explicitní výchozí stream je upřednostněn před
deterministickým záložním výběrem s nejnižším indexem. Videa jsou omezena na
600 sekund, 8 192 pixelů v každém rozměru a 33 554 432 zdrojových pixelů.
FFmpeg vzorkuje 1–16 prostředních snímků JPEG, zmenšuje delší hranu nejvýše na
1 024 pixelů bez zvětšování menších vstupů a nikdy neobdrží URL. Výchozí
metodou vzorkování je `uniform`. Volitelné zásady `scene_aware` a experimentální
`segment_aware` provedou jeden dodatečný pevně stanovený průchod FFmpeg přes již
ověřený místní stream, vyberou omezené časové značky scén z `showinfo`
a při selhání detektoru, vypršení časového limitu, chybném výstupu nebo prázdné
množině kandidátů se deterministicky vrátí ke stejným rovnoměrným středovým
bodům. Režim zohledňující segmenty přiděluje vzorky středových bodů úměrně
ověřeným intervalům scén; podklady režimu zohledňujícího segmenty a chování při
použití záložního postupu jsou podrobně popsány níže. Pevný limit 16 snímků se
u každé zásady použije až po výběru. Pokud má požadavek zohledňující scény
rozpočet pouze na jeden snímek, použije rovnoměrný středový bod aktivního okna
celého videa nebo okna zaměření a uvede `policyEffective: uniform`: jediný
vybraný snímek scény nemůže zachovat oba časové konce. Volající může volitelně
zadat konečné okno zaměření (`start`/`end` v sekundách); hranice se oříznou
podle délky média, obrácená nebo nekonečná okna jsou odmítnuta a všechny zásady
vzorkování se provádějí pouze uvnitř normalizovaného intervalu. Výsledné okno
je zahrnuto do metadat vzorkování a do prefixu nedůvěryhodného popisu, aby
následné modely dokázaly rozlišit zaměřený úryvek od celé časové osy.

Sémantické zaměření popisku je samostatné, explicitní nastavení. Výchozí režim
analýzy `full` zachovává stávající výzvu pro snímky a nikdy nepředává text
požadavku modelu pro tvorbu popisků. V režimu `focused` načítá most pouze
nejnovější neprázdný uživatelský `text`/`input_text` ze stejného kontejneru
Chat nebo Responses, normalizuje jej do NFC, slučuje řídicí znaky a bílé znaky
a omezuje jej na 500 kódových bodů Unicode. Prázdný výsledek vede k návratu
k přesné výzvě režimu `full`. Použitelná nápověda je serializována jako JSON
ve vyhrazeném bloku nedůvěryhodného uživatelského kontextu a smí pouze
upřednostňovat pozorovatelné podrobnosti; nemůže potlačit samostatné varování,
že se nemají následovat pokyny viditelné nebo slyšitelné v médiu. Textové
zaměření nikdy neodvozuje `start`/`end` ani nemění časový vzorkovač.

#### FU-07 strukturální podklady segmentů

`segment_aware` používá jeden omezený průchod předběžné analýzy přes již
ověřený místní videostream. Pevně stanovený řetězec filtrů nejprve zmenší obraz
na šířku nejvýše 320 pixelů, detekuje změny scén a zamrzlé intervaly a poté
vzorkuje frekvencí 1 snímek za sekundu za účelem zjištění rozmazání,
průměrného jasu a prostorových/časových informací. Průchod je omezen na 600
strukturálních vzorků, jedno vlákno FFmpeg/filtru, stejné seznamy povolených
protokolů omezené pouze na `file` a povolených kontejnerů, limit výstupu procesu
1 MiB a nejvýše 30 sekund v rámci sdíleného přerušení/termínu brokeru. Nikdy
nepřijímá příkaz, filtr, cestu ani URL z požadavku.

Strukturální hodnoty jsou deterministické podklady vzorkování, nikoli
sémantické porozumění videu. Neodvozují subjekty, akce, popisky, řeč ani záměr
uživatele. Hranice scén a zamrznutí tvoří segmenty; pokrytí zamrznutím,
rozmazání, expozice, prostorové detaily a časové změny ovlivňují pouze způsob,
jakým je přidělován stávající rozpočet 1–16 snímků. Zcela zamrzlý segment je
omezen na jeden snímek, zatímco nezamrzlé segmenty soutěží o zbývající
rozpočet. Když počet hranic překročí počet snímků, zachová se rovnoměrné
pokrytí časové osy, aby rychlé střihy na začátku nemohly skrýt dlouhý závěrečný
segment. Hranice scén v rámci jednosekundového rozlišení analýzy od hranice
zamrznutí se sloučí.

Chybějící filtry, chybné nebo prázdné podklady, chyba detektoru či vypršení
časového limitu omezené předběžné analýzy vedou k bezpečnému pokračování pomocí
přesné zásady rovnoměrného středového bodu. Přerušení volajícím nebo dosažení
termínu brokeru takové pokračování neumožňuje: ukončí probíhající podproces,
zabrání pozdější extrakci snímků a soukromý dočasný strom je odstraněn
v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministické skutečné
testovací vstupy FFmpeg pro úspory volání modelu popisků po deduplikaci,
přidělování rozpočtu při hustém pohybu, podklady rozmazání/expozice/SI-TI,
rychlé střihy s dlouhým závěrem a falešně pozitivní výsledky při postupném
prolínání. Zaznamenává reálný čas předběžné analýzy a tam, kde je k dispozici
`/usr/bin/time`, také čas CPU podřízeného procesu a maximální RSS. Jeho kontroly
kvality jsou pouze strukturální referenční mechanismy. Kvalita skutečného
modelu popisků zůstává `HOLD`, protože tento testovací nástroj nemá autorizovaný
koncový bod ani neměnného posuzovatele. Peněžní úspory rovněž zůstávají `HOLD`,
pokud `--caption-cost-per-call-usd` neposkytne explicitní kladný odhad ceny za
volání; skript nikdy žádný z těchto výsledků nevytváří uměle.

Každý snímek je omezen na 4 MiB, všechny nezpracované snímky dohromady na 23 MiB a
serializovaná odpověď brokeru na 32 MiB. Soukromý dočasný adresář je odstraněn
v bloku `finally`. OmniRoute neobsahuje FFmpeg a neumožňuje zadat vlastní
cestu ke spustitelnému souboru. Před vytvářením popisků provádí můstek konzervativní
vizuální deduplikaci: každý soubor JPEG je zmenšen na 16×16 buffer ve stupních šedi a
porovnán pouze s posledním zachovaným snímkem. Pro požadovaný rozpočet popisků
vyšší než jeden snímek poskytuje extrakce
omezenou množinu kandidátů o velikosti maximálně dvojnásobku tohoto rozpočtu, nikdy však více než 16 snímků.
Požadovaný limit se uplatní až po deduplikaci, přičemž při konečném ztenčování
zůstanou zachováni první a poslední vybraný kandidát, pokud je rozpočet alespoň
dva. Verzovaná zásada
`grayscale-16x16-mean-cells-v2` používá vyšší z hodnot průměrného rozdílu jasu a
podílu buněk miniatury, jejichž normalizovaný rozdíl je alespoň 0,05.
Prahová hodnota duplicity je konstanta 0,04, zvolená kvůli předvídatelnosti namísto
jejího zpřístupnění jako nastavení za běhu. Tento sekundární
vysokokontrastní signál zachovává drobný pohyb a změny viditelného textu, které může
porovnání založené pouze na průměru skrýt. Chyby komparátoru nebo dekodéru vedou k propustnému selhání a zachování
pokrytí. Výstupní metadata oddělují extrahované kandidáty, úspěšně použité
snímky a vyřazené vizuální duplicity.

Explicitně označená část videa může vyžádat kontaktní náhled s časovými značkami.
Můstek vytvoří mřížku JPEG s nejvýše 4 sloupci a 16 snímky. Každá buňka o velikosti 512 pixelů
vykreslí časovou značku svého zdroje do vysoce kontrastního spodního pruhu, zatímco stejné časové značky
zůstanou v textových metadatech pro následné přiřazení a audit. Celý
soubor JPEG zůstává omezen na 32 MiB. Pokud `sharp` nedokáže mřížku dekódovat nebo sestavit,
můstek se vrátí k jednotlivým snímkům JPEG; přerušení ze strany klienta se nadále propaguje
operací s kontaktním náhledem.

Důkazy pro povýšení jsou záměrně odděleny od syntetického mikrobenchmarku
kompozice. `scripts/perf/video-bridge-contact-sheet-eval.ts` definuje
A/B testovací nástroj s verzovaným schématem pro skutečné modely vidění kompatibilní s OpenAI. Měří
tokeny uváděné poskytovatelem, celkovou časovou latenci (včetně sestavení kontaktního náhledu),
počet volání modelu a zachování faktů definovaných manifestem. Nezpracované odpovědi modelu se
do reportu nezapisují; uchovávají se pouze otisky SHA-256 a ID nalezených faktů. Tento
nástroj neprovádí žádné síťové volání ani volání placeného modelu, pokud není předán parametr `--execute-real` a
nejsou nakonfigurovány `--model`, `OMNIROUTE_BASE_URL` a `OMNIROUTE_API_KEY`. Bez
takového explicitního reálného spuštění zůstává jeho strojově čitelný verdikt `HOLD`; samotná syntetická
měření datové zátěže a počtu volání nejsou důkazem pro povýšení.

Volající mohou k podporované části videa připojit volitelné pole `transcript.cues`,
pokud již mají zarovnaný text. Každá položka musí obsahovat `text`, konečný
interval `start`/`end` v rámci zjištěné délky trvání a hodnotu `source` ze seznamu povolených hodnot
(`client`, `embedded` nebo `audio-bridge`); výchozí hodnota `confidence` je
`1` a musí zůstat mezi `0` a `1`. Přesně duplicitní položky se sloučí.
OmniRoute nikdy nespouští přepis na základě těchto metadat: ověřené položky jsou
zkopírovány do popsaného výsledku spolu se zdrojem, mírou spolehlivosti a intervalem a
vykresleny jako nedůvěryhodná pozorování vedle popisků snímků. Neplatný text,
text mimo rozsah nebo bez provenience je odmítnut, místo aby byl přimíchán do
proudu popisků. Oba kanály přepisu v těle požadavku normalizují dodanou provenienci
na `client`, včetně uživatelem deklarovaných štítků `embedded` nebo `audio-bridge`.
Tyto důvěryhodné štítky může prostřednictvím argumentu `trustedSource`, dostupného pouze v kódu,
přiřadit výhradně adaptér řízený serverem; pole JSON v požadavku k tomuto argumentu nemá přístup.
Text přepisu zůstává nedůvěryhodným obsahem odvozeným z médií
bez ohledu na svou provenienci a nikdy nesmí určovat autorizaci.

Pokročilý volající může pro stejné video poskytnout stopu `audioTranscript`;
ta je považována za text poskytnutý klientem, nikoli za důkaz přepisu serverem.
Spojovací vrstva zpracovává vizuální a zvuková pozorování s jedním
termínem dokončení a signálem přerušení, seřazuje je na společné časové ose, slučuje
přesné duplicity a vrací částečný výsledek, pokud uspěje pouze jedna strana.
Neplatný `audioTranscript` vede pouze k tomuto částečnému výsledku — vizuální
popis je zachován a zvuková větev zaznamená sanitizovaný kód chyby —
místo aby selhalo celé video. Dostupnost jednotlivých větví, příznak částečného výsledku
a sanitizované kódy chyb jsou zachovány v popsaném výsledku, v
metadatech ochranných mechanismů (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), v metadatech mezipaměti výsledků a v čítačích
slučování můstku. Výchozí cesta Video Bridge nespouští převod řeči na text
ani nestahuje druhou kopii média; bez této explicitní stopy zůstává
omezena pouze na video.

**Uchovávání přepisů (#12150 P1).** Toto se použije automaticky vždy, když
Video Bridge (který je sám volitelný) vykreslí úsek přepisu — neexistuje žádný
samostatný příznak uchovávání. Když požadavek vykreslí libovolný úsek přepisu
(údaj `transcript` deklarovaný volajícím nebo sloučený údaj `audioTranscript`),
ochranné opatření jej označí jako `videoBridgeObserved` a vytvoří redigovanou
stínovou kopii popisu videa — identické vykreslení, v němž je volný text každého
úseku nahrazen řetězcem `[redacted-video-transcript]`. Kopie se vytváří nahrazením
strukturovaného pole úseku ještě před sestavením řetězce (nikdy ne parsováním
sloučeného textu, takže žádný obsah úseku — škodlivý ani běžný, včetně textů
obsahujících `]`, jako jsou `[inaudible]`/`[music]` — nemůže zůstat zachován).
V těle požadavku uchovávaném v protokolu volání se každá textová část odvozená
z videa nahradí touto redigovanou stínovou kopií na základě shody obsahu; kotva
`fullText` se znovu načte z dokončeného datového obsahu ochranného opatření před
voláním, takže porovnání zůstane úspěšné i poté, co následná řetězená ochranná
opatření (maskování osobních údajů a přihlašovacích údajů, priority 10/95) přepíší
text popisu na místě a vložení systémové výzvy, předání a Paměti změní strukturu
pole zpráv. Tělo odeslané modelu zůstává beze změny. Pozorovaný požadavek rovněž
nevytváří žádnou trvalou Paměť (extrakce odvozená z požadavku i odpovědi se
přeskočí), takže vlastní odpověď modelu nemůže zopakovat text přepisu do Paměti.

**Nezpracovaná pole videa (#12430).** Když je most povolen a nativní podpora videa
je neznámá nebo chybí, definovaná pole `transcript`/`audioTranscript` rovněž
aktivují `videoBridgeObserved`, a to i po selhání popisu nebo dosažení limitu
`maxVideos`. Hodnoty `null` a prázdné řetězce se započítávají; chybějící pole
a metadata nesouvisející s videem nikoli. Uchovávané kopie tato pole redigují
nebo požadavek vynechají a mezipaměti i Paměť se obcházejí.

Na těchto záložních cestách se platné úseky od volajícího stanou podporovanými
částmi `text`/`input_text`, nikoli nestandardními poli poskytovatele. Obě stopy
dodané v požadavku zůstávají nedůvěryhodnými pozorováními `client` a obsahují
výslovné upozornění, že video nebylo popsáno a časové značky nebyly ověřeny vůči
médiu. Stávající limity 256 úseků, celkem 64 KiB a limity jednotlivých úseků se
uplatňují na obě stopy dohromady; časové značky se musí vejít do 600sekundového
stropu zprostředkovatele a případného zadaného okna zaměření. Neplatné stopy se
zahodí a nepředávají se jako libovolný text; platnou související stopu lze nadále
použít, pokud není překročen jejich společný limit. Pole s hodnotou null nebo
prázdná pole nepřidávají žádný text. Tento záložní mechanismus nepřidává žádné
načítání médií ani přepis. Rozšiřující pole přepisu se odeberou ze záložního
nosiče videa a jeho objektů `video_url`/`source`. Seznam povolených položek na
rozhraní OpenAI zůstává striktní; nosiče videa s neznámou nativní podporou
zůstávají dostupné a známé cíle podporující pouze text si zachovávají bezpečné
značky. Strukturované redigované stínové kopie chrání připojený text přepisu,
zatímco původní požadavek vlastněný volajícím zůstává beze změny. Cíle s nativní
podporou a zakázané mosty si zachovávají své dosavadní chování s vynecháním
zpracování.

Další uchovávané kopie používají stejný signál pozorovaného požadavku.
Nezpracovaný snímek klientského požadavku před ochrannými opatřeními, čekající
požadavek v paměti a protokol předčasně odmítnutého požadavku strukturálně
nahrazují pole přepisu ve video částech; řetězcové výzvy vytvořené fázemi
zpracování a předáním kontextu jsou redigovány ve výstupu pro ukládané tělo
požadavku. Uchovávaná značka `video_content_removed` způsobí, že pokračování
pomocí `previous_response_id` bezpečně selže namísto rekonstrukce textu, který
byl záměrně zahozen. Pokud pozorovaný požadavek před protokolováním ztratí svou
redigovanou stínovou kopii pro jednotlivou část nebo se po pozdějších změnách
požadavku nepodaří spárovat byť jen jednu z několika stínových kopií videa,
uchovávané tělo požadavku se zcela vynechá namísto uchování pouze částečně
redigovaného přepisu.

U pozorovaného požadavku může odpověď modelu citovat libovolnou část přepisu bez
strukturované hranice úseku. Hodnota `responseBody` uchovávaná v protokolu volání
je proto nahrazena značkou vynechání; podrobný artefakt zpracování (který může
obsahovat těla komunikace s poskytovatelem či klientem a bloky streamu) se
neuchovává. Sémantická mezipaměť, mezipaměť idempotence a mezipaměť opakovaného
přehrání uvažování pro takový požadavek obcházejí čtení i zápisy. Požadavek
poskytovateli a odpověď viditelná klientovi zůstávají beze změny. Pokud je
podrobný artefakt vynechán, bajty časného keepalive se z dočasného bufferu
vyprázdní. Upozornění systému Kiro na poškozený EventStream uvádí pouze počet
bajtů datového obsahu, nikdy jeho obsah ani nezpracovanou chybu parseru JSON.
Toto netvrdí, že byly prověřeny všechny nesouvisející diagnostické výstupy
poskytovatelů či pluginů; širší kontrola výstupů s uchovávanými daty je sledována
v #11658.

Interní životní cyklus `/api/modality-bridge/video/drilldown` představuje
samostatnou mezipaměťovou infrastrukturu ověřovanou přes loopback/token. Každá
operace rovněž vyžaduje kanonický neprůhledný identifikátor subjektu. Než je
produkční volající povolen, musí tento identifikátor odvodit z ověřeného tenanta
a nikdy nesmí předávat hodnotu zvolenou klientem. Klíče mezipaměti vážou tento
subjekt ke kanonickým identifikátorům relace a odkazu na video, ukládají pouze
jejich klíče odvozené pomocí SHA-256 a omezují čtení i odstraňování na tentýž
subjekt. Mezipaměť ukládá nejvýše 16 odvozených snímků JPEG na položku, po deseti
minutách ukončí jejich platnost a podporuje omezené čtení pomocí `start`/`end`
nebo explicitní odstranění relace.

Každý subjekt je omezen na 16 položek a 64 MiB kanonických dat JPEG. Tyto limity
jsou nezávislé na globálním stropu 64 položek/256 MiB: tlak na kvótu subjektu
nejprve odstraní pouze nejméně nedávno používané položky daného subjektu a teprve
poté se zvažuje globální odstranění podle LRU. Položky s ukončenou platností se
při aktivitě mezipaměti odstraní z účetnictví subjektu i globálního účetnictví,
zatímco zrušení a selhání validace neuloží částečnou náhradu.

Mezipaměť odmítá nekanonický Base64, nadbytečné doplnění, média jiná než JPEG, poškozené nebo
neúplné soubory JPEG a soubory JPEG, které během omezeného dekódování celého obrazu pomocí `sharp`
vyvolají varování. Každý přijatý obrázek znovu zakóduje jako kanonický JPEG, určí šířku a výšku
z dekódovaných bajtů namísto důvěřování polím volajícího a zahodí veškeré koncové
polyglotní bajty namísto jejich zachování. Do obou kvót se započítává pouze omezený kanonický komprimovaný buffer.
Limit přenosu JSON zahrnuje režii Base64 pro limit 32 MiB
dekódovaného vstupu. Každé
uložené odvození zaznamenává ověřený formát a rozlišení JPEG, zásady vzorkování,
verzi odvození, čas vytvoření, hash obsahu vypočítaný serverem a hashovaný odkaz na
nadřazený objekt společně s hashem obsahu nadřazeného objektu od důvěryhodného volajícího. Zrušení se kontroluje
mezi asynchronními fázemi dekódování a hashování před atomickým potvrzením do mezipaměti.

Tato etapa zatím k trase nepřipojuje produkčního producenta a neposkytuje
výběr variant s více rozlišeními. Transparentní cesta požadavku Video Bridge
proto nepřináší žádnou dodatečnou práci, zatímco odvozování principalů vázaných na tenanty a
úplný životní cyklus FU-08 s více rozlišeními zůstávají výslovně navazujícími úkoly,
nikoli chováním dokumentovaným jako dokončené.

Snímky jsou postupně opatřovány popisky pomocí nakonfigurovaného modelu Video. Prázdné
přepsání nastavení Video zdědí nastavení Vision; pokud jsou obě prázdná, automatický směrovač
Vision vybere efektivní model podporující obraz. Úspěšné popisky
nahradí původní část stabilním prefixem `[Video description:`, který také
označuje text jako nedůvěryhodné pozorování odvozené z média a sděluje navazujícím
modelům, aby se neřídily pokyny nalezenými v médiu. Klíče mezipaměti popisků snímků
zahrnují bajty JPEG, prompt, časové razítko a efektivní model; ukládají se pouze úspěšné
popisky. Položky mezipaměti uchovávají skutečný úspěšný produkční model,
včetně záložního modelu; bridge hlásí `mixed`, pokud byly různé snímky
vytvořeny různými modely. Zásah mezipaměti znovu použije identitu tohoto producenta
namísto jejího přeznačení podle požadovaného plánu směrování. Mezipaměť výsledků
celého videa je klíčována podle každého vstupu, který mění výstup — promptu, efektivního
modelu, zásad vzorkování, počtu snímků, režimu sémantické analýzy, otisku SHA-256
normalizované nápovědy k zaměření, okna zaměření, `transcript`,
`audioTranscript` a příznaku kontaktního listu — takže změna kterékoli z těchto
dimenzí způsobí minutí mezipaměti, nikdy opětovné použití zastaralé položky. Verze zásad
vizuální deduplikace, prahová hodnota a omezený počet kandidátních snímků jsou rovněž explicitně uvedeny v
klíči a metadatech mezipaměti výsledků; změna zásad proto nemůže znovu použít zastaralý
popis celého videa. Metadata mezipaměti výsledků v4 uchovávají režim a
otisk, nikdy nezpracovaný uživatelský úkol. Metadata ochranných pravidel uvádějí požadovaný
i efektivní režim analýzy; požadovaný režim `focused` bez
použitelného uživatelského textu je uveden jako efektivně `full`.

Ochranné pravidlo extrahuje každou podporovanou část videa, ale nepopíše více než
`modalityBridgeVideoMaxVideos`. Pro cíl, u něhož je prokázáno
`supportsVideo === false`, se neúspěšná videa a videa překračující limit změní na explicitní bezpečné
textové značky, takže nezůstane žádné nezpracované video. Pokud schopnost není známa, tyto části
si zachovají svůj nosič videa; případný záložní přepis projde výše uvedeným omezeným převodem
na text. Cíle s `supportsVideo === true` bridge obcházejí.
Signál přerušení klientského požadavku se šíří přes stahování, frontu brokeru,
podprocesy a volání pro vytvoření popisků; přerušení zastavují zpracování mezi videi a nikdy při selhání nepovolí
průchod nezpracovaných médií.

Nastavení běhového prostředí jsou uložena v DB a ověřována pomocí Zod:

| Klíč                                | Výchozí     | Rozsah / chování                                                                                         |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Volitelné běhové prostředí, vyžaduje explicitní zapnutí                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachovává obecné popisky; `focused` používá omezený, nedůvěryhodný kontext posledního uživatele   |
| `modalityBridgeVideoModel`          | `""`        | Zdědí model Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` nebo proporcionální `segment_aware`; při selhání detektoru se použije `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

Starší uložené hodnoty časového limitu Video nad 120 sekund se omezí na
termín brokeru; nové zápisy nastavení nad tímto limitem jsou odmítnuty.
`GET /api/modality-bridge/video/runtime` před ověřením nebo zjišťováním běhového prostředí vyžaduje
důvěryhodnou orazítkovanou lokálnost zpětné smyčky a poté vyžaduje správcovské
ověření. Vrací pouze `available`, sanitizované verze FFmpeg/ffprobe a pevně stanovený
důvod, pokud běhové prostředí není dostupné. Interní endpoint pro extrakci není
veřejným API pro nahrávání: nasycení fronty vrací `503` spolu s `Retry-After`, odpojení
volajícího vrací `499` a pevně stanovený termín brokeru vrací `504`. Převedené odpovědi přidávají
`video->text;model=<visionModel>;parts=<videos>` do centrální hlavičky
`x-omniroute-modality-bridge`, aniž by odstraňovaly segmenty Vision nebo Audio.

### Maskování PII (`piiMasker.ts`)

Spouští se v **obou** fázích.

- **`preCall`** naklonuje datovou část, projde `system`, `messages`, `input` a
  `prompt` (včetně položek tvořených prostým řetězcem) a použije `processPII()` (z
  `@/shared/utils/inputSanitizer`) na řetězcová pole `content`/`text`. Když je
  `PII_REDACTION_ENABLED=true`, jsou zjištěné osobní údaje v odchozí datové
  části redigovány. To je nezávislé na `INPUT_SANITIZER_MODE` (které řídí pouze
  zásady pro prompt injection). Když je redigování vypnuté, volání zaznamenává
  počty detekcí, aniž by přepisovalo obsah.
- **`postCall`** vytvoří hlubokou kopii odpovědi a spustí `sanitizePIIResponse()`
  spolu s maskováním struktury Responses API (`maskResponsesOutput` — zahrnuje
  `output_text` a `output[].content[].text`). Pokud dojde k jakémukoli
  redigování, upravená odpověď nahradí původní.

Ochranné pravidlo nikdy neblokuje; pouze přidává anotace (`meta.detections`,
`meta.redacted`) nebo přepisuje obsah.

#### Výběr podle typu, vlastní vzory a čítače detekcí

**Dashboard → Settings → Security → PII masking** určuje, _co_ se maskuje.
Maskování však nezapíná: to nadále řídí `PII_REDACTION_ENABLED` (požadavek) a
`PII_RESPONSE_SANITIZATION` (odpověď + SSE), přičemž obě jsou ve výchozím
nastavení vypnuté.

- **Výběr podle typu** — vestavěná ID jsou uvedena v
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Nenastavená hodnota
  znamená všechny typy (chování před zavedením tohoto nastavení). Vzor
  `ssn_us` modulu pro požadavky se mapuje na `ssn`. Šablony (Minimal, Standard,
  Financial, Brazilian, USA, Full) pouze vyplňují zaškrtávací políčka v UI.
- **Vlastní vzory** — až 20 regulárních výrazů nebo vzorů se zástupnými znaky
  (`*` = až 64 nebílých znaků, `?` = jeden znak). Shody se nahradí textem
  `[CUSTOM_REDACTED]`. Každý vzor prochází přes `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): může mít nejvýše 500 znaků,
  příznaky jsou omezeny na `g i m s u`, musí jej být možné zkompilovat, musí
  projít kontrolou `safe-regex` (katastrofické zpětné vyhodnocování) a nesmí
  odpovídat prázdnému řetězci ani zástupnému textu redigování. Vzor, který
  neprojde, je odmítnut při ukládání i testování, a uložený řádek, který
  neprojde, je za běhu přeskočen namísto kompilace. Vlastní vzory se používají
  pouze tehdy, když je maskování zapnuté.
- **Čítače detekcí** — počty podle jednotlivých typů (nikdy ne odpovídající
  hodnoty), uchovávané v paměti a vynulované při restartu
  (`src/lib/pii/piiDetectionStats.ts`). Zvyšují se pouze tehdy, když je
  maskování zapnuté.

Nastavení jsou uložena v tabulce `key_value` (jmenný prostor `pii_settings`,
`src/lib/db/piiSettings.ts`) a načítají se prostřednictvím mezipaměti s dobou
platnosti 1 s. API:

| Metoda | Cesta                    | Účel                                                                                  |
| ------ | ------------------------ | ------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stav příznaků, `enabledTypes`, `customPatterns`, čítače detekcí                       |
| `PUT`  | `/api/settings/pii`      | Nahrazení `enabledTypes` (`null` = vše) a/nebo `customPatterns`                       |
| `POST` | `/api/settings/pii/test` | Zkušební spuštění jednoho vzoru nad vzorkem o velikosti nejvýše 8 KB; nic se neukládá |

Všechny tři vyžadují ověření pro správu a validují tělo pomocí Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Detekuje nepřátelské struktury v obsahu zadaném uživatelem a vynucuje
nakonfigurované zásady. Chování je řízeno proměnnými prostředí a parametry
konstruktoru:

| Nastavení      | Proměnná prostředí                                                                                      | Výchozí hodnota | Účinek                                                                                                                                                                                                       |
| -------------- | ------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Povoleno       | `INPUT_SANITIZER_ENABLED`                                                                               | `true`          | Při hodnotě `false` se ochranné pravidlo okamžitě ukončí.                                                                                                                                                    |
| Režim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`          | Zásady pro injection: `block`, `warn` nebo `log`. (`redact` je podporováno kvůli zpětné kompatibilitě, ale text injection **neodstraňuje**; přepis osobních údajů v požadavku řídí `PII_REDACTION_ENABLED`.) |
| Práh blokování | parametr `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`          | Minimální závažnost vyžadovaná k zablokování. Při výchozím nastavení je střední závažnost pouze sledována.                                                                                                   |

**Priorita režimů** (`getMode`): `options.mode` volajícího →
**přepsání příznakem funkce v DB** `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → proměnná prostředí `INJECTION_GUARD_MODE` → proměnná prostředí
`INPUT_SANITIZER_MODE` → `warn`. Přepsání z řídicího panelu má proto přednost
před proměnnými prostředí, takže UI Feature Flags řídí běžící ochranu živě
(bez restartu). Čtení z DB je zabezpečeno proti selhání: pokud dojde k chybě,
ochrana přejde na chování založené na proměnných prostředí, a když není
nastaveno žádné přepsání, je chování totožné s vyhodnocením pouze podle
proměnných prostředí.

Zdroje detekce:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (sdílená sada
   detektorů používaná i jinde v pipeline).
2. Vestavěné `DEFAULT_GUARD_PATTERNS` (aktuálně `system_override_inline` a
   `markdown_system_block`, obojí se závažností `high`).
3. Volitelné `customPatterns` předané prostřednictvím parametrů konstruktoru
   (řetězce, regulární výrazy nebo záznamy `{ name, pattern, severity }`).

Když `mode === "block"` **a zároveň** alespoň jedna detekce splňuje prahovou
hodnotu závažnosti, `preCall` vrátí `{ block: true, message: "Request rejected:
suspicious content detected" }`. V režimech `warn`/`log` ochranný mechanismus
událost zaznamená, ale volání povolí. Sdílená pomocná funkce
`evaluatePromptInjection()` je také exportována pro volající, kteří potřebují
vyhodnocovat prompty bez použití registru.

**Limit kontroly (v3.8.20):** detektor kontroluje pouze **prvních 16 KB**
spojeného textu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtů)
v `src/shared/utils/inputSanitizer.ts`. Funkce `detectInjection()` i
`evaluatePromptInjection()` před spuštěním smyčky se vzory používají
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Direktivy pro injekci se nacházejí poblíž
začátku vstupu, takže se tím omezuje spotřeba CPU a GC regulárními výrazy
u datových obsahů o velikosti stovek KB, aniž by se oslabila detekce (viz
#3932, #4041).

### Maskování přihlašovacích údajů (`credentialMasker.ts`)

Spouští se v **obou** fázích jako poslední v rámci výchozího řetězce (priorita
`95`). Rediguje známé vzory klíčů API a tajných tokenů z odchozích dat (obsahu
zpráv, argumentů volání nástrojů a výsledků nástrojů) **i** z odpovědi
poskytovatele, takže přihlašovací údaj vložený do promptu (nebo zopakovaný ve
výsledku nástroje) neunikne poskytovateli ani zpět klientovi.

- **Pouze po explicitním povolení**, stejně jako u redigování PII (v návaznosti
  na tvrdé pravidlo č. 20): funkce je zakázána, pokud neplatí
  `settings.credentialRedactionEnabled === true` **nebo**
  `CREDENTIAL_REDACTION_ENABLED=true`. Když je vypnutá, ochranný mechanismus
  neprovádí žádnou operaci — nikdy neblokuje ani nepřepisuje.
- `redactCredentials()` prochází celý strom dat/odpovědi (`walkValue()`,
  bezpečné proti znečištění prototypu a bezpečné vůči cyklům díky `WeakSet`)
  a nahrazuje shody zástupným symbolem `[REDACTED:<type>]`, přičemž klonuje
  pouze větve, které se skutečně změnily.
- `CREDENTIAL_PATTERNS` pokrývá klíče poskytovatelů LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), platební klíče (Stripe, Square),
  cloudové klíče (přístupový klíč AWS, Twilio, SendGrid, Mailgun), privátní
  klíče / JWT, připojovací řetězce obsahující přihlašovací údaje
  (`mongodb://user:pass@...` atd.) a obecný vzor hodnoty hlavičky
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Klíče ve tvaru hlaviček
  (`authorization`, `x-api-key`, `api-key`, `apikey`) jsou redigovány
  strukturálně (pouze hodnota, prefix schématu jako `Bearer `/`Basic ` je
  zachován), nikoli pomocí obecného textového regulárního výrazu.
- Ochranný mechanismus nikdy neblokuje; pouze přepisuje (`modifiedPayload` /
  `modifiedResponse`) a přidává anotace (`meta.credentialsRedacted`,
  `meta.count`).

Ochrana proti regresím: `tests/unit/credential-masker-guardrail.test.ts`.

## Základní kontrakt (`base.ts`)

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
  block?: boolean; // hodnota true zkrátí zpracování řetězce
  message?: string; // zobrazí se při blokování
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vráceno metodou preCall pro přepsání požadavku
  modifiedResponse?: TValue; // vráceno metodou postCall pro přepsání odpovědi
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

Ochranný mechanismus signalizuje „beze změny“ vrácením hodnoty `void`, `{}` nebo
`{ block: false }`. Vrácení `modifiedPayload`/`modifiedResponse` nahradí
hodnotu předávanou řetězcem navazujícím ochranným mechanismům.
`signal?: AbortSignal` přenáší životní cyklus volajícího do ochranných mechanismů. Přerušení požadavku je záměrnou výjimkou umožňující pokračovat při selhání: multimediální můstky ukončí práci a provedou úklid, aniž by obnovily nezpracovaná média pro cíl, o němž je známo, že je nepodporuje.

## Registr (`registry.ts`)

Jediná instance `guardrailRegistry` zpřístupňuje:

- `register(guardrail)` — přidá ochranný mechanismus (nebo jej nahradí podle normalizovaného názvu) a
  znovu seřadí mechanismy vzestupně podle `priority`.
- `clear()` / `list()` — pomocné administrativní funkce.
- `runPreCallHooks(payload, context)` — prochází aktivní ochranné mechanismy, předává
  datovou část přes `modifiedPayload` a zastaví se při prvním `block: true`.
- `runPostCallHooks(response, context)` — stejný postup na straně odpovědi.
- `resetGuardrailsForTests({ registerDefaults })` — vymaže stav a volitelně
  znovu zaregistruje výchozí mechanismy pro čistou izolaci testů.

Obě spouštěcí funkce vracejí `{ blocked, payload|response, results, guardrail?, message? }`,
kde `results` je pole záznamů `GuardrailExecutionResult` obsahujících pro každý
ochranný mechanismus pole `blocked`, `skipped`, `modified`, `error` a `meta`,
která jsou užitečná pro trasování.

### Vypnutí ochranných mechanismů pro jednotlivé požadavky

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` sestaví
seznam názvů ochranných mechanismů, které mají být pro aktuální požadavek
přeskočeny, a odstraní z něj duplicity. Existuje pět kanálů, které se čtou v tomto pořadí a slučují do jednoho seznamu
(při odstraňování duplicit má přednost první výskyt):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` v těle požadavku (na nejvyšší úrovni)
3. `metadata.disabledGuardrails` v těle požadavku (pouze pokud je `metadata` objekt)
4. Hlavička `x-omniroute-disabled-guardrails`
5. Starší hlavička `x-disabled-guardrails`

Všech pět kanálů se sloučí, včetně obou hlaviček: odeslání obou
`x-omniroute-disabled-guardrails` a `x-disabled-guardrails` způsobí přeskočení sjednocení
jejich seznamů a prázdná moderní hlavička již neskryje starší hlavičku
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), opraveno v
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Hodnoty mohou být pole řetězců nebo řetězce oddělené čárkami; názvy jsou oříznuty
a normalizovány na kebab-case s malými písmeny (`pii_masker` → `pii-masker`) a prázdné
položky jsou odstraněny. Výsledek je předán registru prostřednictvím `context.disabledGuardrails`,
který odpovídající ochranné mechanismy přeskočí (`skipped: true` v `results`).

Seznam vypnutých mechanismů ovlivňuje pouze **registr**. Režim `block` pro detekci prompt injection je
povinnou hranicí: middleware pro ochranu před prompt injection
(`src/middleware/promptInjectionGuard.ts`) volá `evaluatePromptInjection()`
bez seznamu vypnutých mechanismů ovládaného volajícím (nefunkční volání
`resolveDisabledGuardrails({ body })`, které se dříve používalo, bylo odstraněno v
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), takže požadavek,
který vypne `prompt-injection`, je v režimu `block` přesto odmítnut. Jde o
záměrné chování. Kanály pro vypnutí jsou ovládány volajícím (tělo požadavku,
metadata, hlavičky) a volající nesmí mít možnost vypnout bezpečnostní
mechanismus nastavený provozovatelem
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Sjednocení
hlaviček z [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mění pouze to, které ochranné mechanismy registru budou přeskočeny; neumožňuje klientovi
obejít middleware. Povinné zásady ochranných mechanismů pro jednotlivé klíče a skupiny jsou
sledovány v RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Viz [Pokrytí a omezení](#coverage-and-limits).

## Pořadí provádění

Pro každý požadavek procházející přes `src/sse/handlers/chat.ts` a
`open-sse/handlers/chatCore.ts` (trasy z rodiny chatu uvedené v části
[Pokrytí a omezení](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` sestaví seznam vynechaných ochranných mechanismů z klíče API, těla požadavku
   a hlaviček.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` spustí ochranné mechanismy ve vzestupném
   pořadí priority:
   - Zakázané ochranné mechanismy se zaznamenají jako `skipped`.
   - Metoda `preCall` každého ochranného mechanismu může přepsat datovou část prostřednictvím `modifiedPayload`.
   - První výskyt `block: true` ukončí řetězec a obslužná rutina vrátí
     odpověď s odmítnutím ochranným mechanismem.
3. (Potenciálně přepsaná) datová část pokračuje do kombinovaného směrování a odeslání
   nadřazené službě.
4. **Pouze bez streamování:** po sestavení odpovědi spustí
   `guardrailRegistry.runPostCallHooks(...)` nad odpovědí stejný řetězec.
   Hodnota `block: true` v tomto kroku zahodí odpověď nadřazené služby a vrátí HTTP 400. Streamované odpovědi tento krok zcela vynechají.

Ochranné mechanismy, které vyvolají výjimku, se zaznamenají s `error: <message>` a zaprotokolují prostřednictvím
`logger.warn`, ale řetězec pokračuje — záměrně se používá přístup fail-open.

## Pokrytí a omezení

Registr ochranných mechanismů je zapojen pouze do pipeline chatu. Tato omezení jsou
ukotvena testy `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` a
`tests/unit/guardrail-pipeline-characterization.test.ts`; při změně chování
tyto testy upravujte záměrně.

### Kde se hooky spouštějí

| Hook / řízení                             | Spouští se pro                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                         | Požadavky zpracované funkcí `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (a `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` a proxy chatu Telegramu. Také testovací endpoint dashboardu `/api/guardrails/test`. Blokování před voláním vrátí HTTP 400. |
| `runPostCallHooks`                        | Pouze **nestreamované** odpovědi chatu (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Streamované odpovědi se k němu nikdy nedostanou.                                                                                                                                                                                                                                                                                      |
| Streamování osobních údajů                | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), připojený v `streamingPipeline.ts`, když je zapnuto `PII_RESPONSE_SANITIZATION`. Nejedná se o ochranný mechanismus, takže kanály pro zakázání jej neovlivňují.                                                                                                                                                                                                         |
| Middleware ochrany proti injekci (starší) | Každá trasa `/v1` obsahující prompt, včetně tras z rodiny chatu (viz [pokrytí tras](#injection-guard-route-coverage--red-team-phase-8--block-d)). Pouze injekce promptu.                                                                                                                                                                                                                                                             |

### Co není pokryto

- **Trasy pro média, embeddingy a data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) se do registru nikdy nedostanou. Neprobíhá
  zde žádné maskování osobních údajů, maskování přihlašovacích údajů ani převod mezi modalitami. Jejich jedinou
  kontrolou je starší middleware ochrany proti injekci.
- **Streamované odpovědi** neprocházejí žádnými ochrannými mechanismy po volání: nepoužije se
  `pii-masker` ani `credential-masker` po volání a nedojde ani k blokování po volání. Použije se pouze transformace osobních údajů
  při streamování (když je zapnuto `PII_RESPONSE_SANITIZATION`). Přihlašovací údaj
  vrácený ve streamované odpovědi nebude redigován.
- **Kanály pro zakázání oproti middlewaru (záměrně):** middleware vyhodnocuje
  injekci promptu vlastním voláním `evaluatePromptInjection()`, aniž by předával
  jakýkoli seznam zakázání ovládaný volajícím. Režim `block` je povinná
  hranice, kterou zakázání ovládaná volajícím nemohou obejít, a to ani na trasách z rodiny chatu
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Zakázání
  `prompt-injection` pouze přeskočí ochranný mechanismus v registru.

### Co vidí odpověď před zpracováním po volání

Na nestreamované cestě je pořadí následující: extrakce paměti → spuštění vestavěných nástrojů
→ ochranné mechanismy po volání → ukončení při blokování po volání → uložení do sémantické mezipaměti.

- **Extrakce paměti** a **spouštění nástrojů** zpracovávají odpověď dříve, než ji ochranná opatření po volání mohou přepsat nebo zablokovat. Od změny [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) prochází extrahovaný text při extrakci paměti funkcí `sanitizePII`, pokud je zapnuto `PII_RESPONSE_SANITIZATION` (pro streamované i nestreamované odpovědi), ale odpověď, kterou ochranná opatření po volání později zablokují, již byla nabídnuta paměti a nástrojům.
- **Sémantická mezipaměť** ukládá odpověď až po zpracování ochrannými opatřeními po volání, takže ukládá přepsanou odpověď a zablokovaná odpověď se do mezipaměti nikdy neuloží. Položky mezipaměti jsou rozlišeny podle klíče API.

## Konfigurace

Proměnné prostředí načítané vestavěnými ochrannými mechanismy:

| Proměnná                              | Používá ji                         | Účinek                                                                                                                 |
| ------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                 | Nastavením na `false` detekci zcela zakážete.                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                 | Zásada pro injekce: `warn`, `block` nebo `log`. Starší hodnota `redact` text injekce nepřepisuje.                      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                 | Režim ochrany proti injekcím; zároveň příznak funkce v DB, který **má přednost** před proměnnými prostředí (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                 | Minimální závažnost, kterou `MODE=block` odmítne: `high` (výchozí), `medium` nebo `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                 | Starší alias pro `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                       | Při hodnotě `true` jsou PII v požadavku redigovány (nezávisle na režimu injekcí).                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (následné zpracování) | Řídí chování maskování na straně odpovědi.                                                                             |

Ochranné mechanismy Modality Bridge načítají konfiguraci za běhu z úložiště
nastavení podporovaného databází (`getSettings()`), nikoli z proměnných prostředí. Primární klíče pro Vision jsou
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` a
`modalityBridgeCacheMaxEntries`. Starší klíče
`visionBridge*` jsou přijímány pouze jako zdokumentovaný záložní mechanismus čtení pro jeden cyklus;
zápisy z řídicího panelu používají primární klíče. Výchozí hodnoty a překladač záložních hodnot
se nacházejí v `src/shared/constants/modalityBridgeDefaults.ts`, přičemž starší
konstanty zůstávají zachovány v `src/shared/constants/visionBridgeDefaults.ts`.

Audio používá `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` a `modalityBridgeAudioMaxClips` spolu se sdílenými
nastaveními `modalityBridgeCache*`. Audio nemá žádný záložní mechanismus pro starší klíče, protože tyto
klíče byly zavedeny se schématem Modality Bridge.

Video používá `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` a
`modalityBridgeVideoTimeout` spolu se sdílenými nastaveními `modalityBridgeCache*`.
Ve výchozím nastavení je zakázáno, protože FFmpeg/ffprobe jsou volitelné provozní
závislosti a generování popisků snímků zvyšuje latenci a náklady na model.

## Vlastní ochranné mechanismy

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

Postup:

1. Vytvořte `src/lib/guardrails/myGuardrail.ts` rozšiřující `BaseGuardrail`.
2. Implementujte `preCall` a/nebo `postCall`.
3. Buď jej zaregistrujte při importu (přidáním z `registerDefaultGuardrails`), nebo
   za běhu zavolejte `guardrailRegistry.register(...)` — registr nahradí
   jakýkoli předchozí ochranný mechanismus se stejným normalizovaným názvem.
4. Přidejte testy do `tests/unit/` (existující příklady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testování

Mezi testy používejte `resetGuardrailsForTests()`, abyste vždy začínali ze známého stavu.
Předáním `{ registerDefaults: false }` začnete s prázdným registrem a
zaregistrujete pouze testované ochranné mechanismy. Vision Bridge podporuje vkládání
závislostí (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge poskytuje
ekvivalentní rozhraní pro nastavení, schopnosti, výběr modelu STT, kontrolu
přihlašovacích údajů a přepis. Testy tak mohou ověřovat oba toky bez přístupu
k databázi nebo síti.

## Viz také

- `src/lib/guardrails/` — implementace
- `src/shared/utils/inputSanitizer.ts` — sdílený detektor zajišťující
  detekci prompt injection a maskování PII
- `src/shared/constants/visionBridgeDefaults.ts` — výchozí nastavení Vision Bridge a
  seznam modelů s vynuceným přemostěním
- `src/shared/constants/modalityBridgeDefaults.ts` — sdílená výchozí nastavení běhového prostředí pro Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonální vrstva (circuit breaker, doby zklidnění)
- `docs/reference/ENVIRONMENT.md` — úplný přehled proměnných prostředí

## Pokrytí tras ochranou proti injection a red-team testování (Fáze 8 · Blok D)

Ochrana proti injection (`createInjectionGuard` / `withInjectionGuard`) pokrývá všechny trasy,
které přijímají uživatelské prompty. Řídí se `INJECTION_GUARD_MODE` (výchozí hodnota `warn` = pouze protokolování;
`block` = vrátí HTTP 400 `SECURITY_001`).

| Typ              | Trasy                                                                                                                                                | Výchozí režim |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (stávající) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativní      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Extrakce textu (`extractMessageContents`) pokrývá `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testování (každou noc, `nightly-llm-security.yml`):** promptfoo ověřuje, že každá trasa blokuje
korpus OWASP-LLM v režimu `INJECTION_GUARD_MODE=block`; garak spouští sondy (bez tajného klíče se přeskočí).
`moderations` je zahrnuto kvůli konzistenci. Režim blokování představuje povinnou hranici: `evaluatePromptInjection()`
ignoruje seznam vypnutí pro jednotlivé požadavky, který mu middleware předává, takže `disabledGuardrails`
**nevyjímá** trasu z této ochrany ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Noční pracovní postup (`.github/workflows/nightly-llm-security.yml`, cron + ruční
spuštění) obsahuje dvě úlohy:

- **`promptfoo-guard` (blokující)** — spustí `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Každý adversariální případ (např. „ignoruj všechny
  předchozí instrukce…“, jailbreaky ve stylu DAN) ověřuje, že odpověď obsahuje
  `error.code === "SECURITY_001"`, tedy že ochrana požadavek skutečně odmítla.
- **`garak` (informativní)** — spustí garak `--probes promptinject,dan,leakreplay`
  proti místní instanci OmniRoute (`http://localhost:20128/v1`). Spuštění je podmíněno
  tajným klíčem poskytovatele (`PROMPTFOO_PROVIDER_KEY`); bez něj se úloha korektně přeskočí a je zakončena
  `|| true`, takže pouze podává hlášení, aniž by způsobila selhání CI.

Pokrytí pomocné ochranné funkce (`createInjectionGuard` / `withInjectionGuard`)
zahrnuje každou trasu `/v1` přijímající prompt; text promptu se získává z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomocí
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
