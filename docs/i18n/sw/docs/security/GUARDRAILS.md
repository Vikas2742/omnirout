# Guardrails (Kiswahili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Chanzo cha ukweli:** `src/lib/guardrails/`
> **Ilisasishwa mwisho:** 2026-10-17 — v3.8.52 (imeongeza [Ufikiaji na mipaka](#coverage-and-limits):
> ni njia zipi na njia za majibu ambazo hook hufikia, vichwa vilivyounganishwa vya kuzima (#16412), hali ya kuzuia
> ya kuingiza kama mpaka wa lazima (#16413), na nini huona jibu kabla ya post-call)

Guardrails hutekeleza usalama, sera, na mabadiliko ya maudhui kwenye mpaka
kati ya OmniRoute na watoa huduma wa juu. Kila guardrail inaweza kukagua (na
kwa hiari kukataa, kubadilisha, au kuweka maelezo) maudhui ya ombi (`preCall`) na
majibu ya watoa huduma wa juu (`postCall`).

Mfumo ni **fail-open**: ikiwa guardrail itatoa hitilafu wakati wa utekelezaji, rejista
huhifadhi hitilafu na kuendelea na guardrail inayofuata badala ya kushindwa
ombi. Kuzuia ni uamuzi wa wazi (`block: true`), kamwe si ajali.
Isipokuwa moja ni ombi lililokatishwa: wakati `signal` ya mwitaji inakatishwa,
guardrail inayotoa hitilafu hukataa utekelezaji wa hook badala ya kurukwa.

Hook **haziendeshwi** kwenye kila njia au kila jibu. Soma
[Ufikiaji na mipaka](#coverage-and-limits) kabla ya kutegemea guardrail kama
udhibiti wa usalama.

## Guardrails Zilizojengwa Ndani

Rejista hupakia kiotomatiki guardrails sita kwa mpangilio wa kipaumbele wakati wa kuagiza
(ona `registry.ts` → `registerDefaultGuardrails()`):

| Kipaumbele | Jina                | Hatua          | Faili                 |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nambari ndogo za kipaumbele huendeshwa **kwanza**.

### Daraja la Vision (`visionBridge.ts`) — Modality Bridge PR-1

Modeli msingi ya GLM 5.3 na `glm-5.3-{low,high,max}` zina metadata ya rejista/spec iliyo wazi
`supportsVision:false`. Lahaja za GLM 5.3 Flash
zinabaki kuwa modeli zenye vision asili. Njia ya `/v1/messages` ya Claude Code inaingia kwenye
mnyororo wa guardrail wa kabla ya wito wa `handleChat` **kabla** ya tafsiri ya Claude-to-OpenAI;
picha za matokeo ya zana za `Read` zilizopachikwa lazima zielezwe au kushughulikiwa
kabla tafsiri hiyo kuziinua kuwa maudhui ya `image_url` ya OpenAI (#17069).

Inakamata maombi yenye picha yanayolengwa kwa **modeli zisizo na vision** na ama
hupitisha ombi zima kwa modeli yenye uwezo wa vision au hubadilisha sehemu za picha
na maelezo ya maandishi yanayotolewa na modeli ya vision inayoweza kusanidiwa kabla
ya wito wa juu. Hii huwawezesha watoa huduma wa maandishi pekee kushughulikia
maudhui ya multimodal kwa uwazi.

Mtiririko:

1. Ruka ikiwa modeli lengwa tayari inaunga mkono vision (isipokuwa inaonekana kwenye
   orodha ya daraja la kulazimishwa `isVisionBridgeForcedModel`).
2. Toa sehemu za picha kupitia `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ambayo hupeleka kwa **kigunduzi cha media kilichounganishwa**
   `detectMediaParts()` katika `open-sse/utils/mediaParts.ts` — chanzo kimoja cha ukweli
   kinachoshirikiwa na kichujio cha uoanifu wa combo.
   Uchimbaji umeruhusiwa tu kwa maumbo ambayo `replaceImageParts` inaweza kuunganisha
   tena (mkataba wa extract↔replace): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, na Responses
   API `input_image`. Picha zinazolingana zilizopachikwa ndani ya Claude Code
   `tool_result.content` na matokeo ya zana za Responses pia hutolewa na
   kubadilishwa kwenye njia zao za awali; maumbo ya kiashiria pekee ni
   nyenzo za kichujio cha combo na hayatolewi.
   Ruka ikiwa hakuna kilichopatikana.
3. Tatua usanidi wa wakati wa utekelezaji kupitia `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): funguo mpya za mipangilio `modalityBridge*`
   hushinda; funguo za zamani `visionBridge*` zinabaki kama **akiba ya mzunguko mmoja**
   (dirisha la kurejesha). Ruka kabla ya uchanganuzi wowote wa media wakati
   daraja limezimwa.
4. Kichaguzi cha hali (`modalityBridgeVisionMode`, ona jedwali hapa chini) huamua
   upitishaji upya dhidi ya ufafanuzi. Upitishaji upya hurudisha `modifiedPayload` ukiwa na `model`
   pekee iliyobadilishwa, pamoja na meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Njia ya ufafanuzi: punguza picha hadi `maxImages`, tunga prompt inayojua kazi,
   tumia akiba ya ufafanuzi, ita modeli ya vision **kwa wakati mmoja**
   (`Promise.allSettled`), na ingiza sehemu za maandishi `[Image N]: <description>` mahali
   pao. Ufafanuzi ulioshindikana hutoa `null`: picha mbichi huhifadhiwa kwa
   malengo yasiyojulikana/yenye uwezo wa vision (#4012), lakini **lengo la moja kwa moja la maandishi pekee lililothibitishwa**
   au combo isiyo na vision hupata kizuizi cha maandishi
   `(unavailable — no vision-capable provider connected)` kwa
   kila picha isiyoelezewa, ikiwa ni pamoja na kushindikana kwa sehemu na picha zaidi ya
   kikomo cha wito wa ufafanuzi (#17069). Akiba ya ufafanuzi ya combo iliyoshindikana yote
   iliyopo inabaki mahali (#8430).
6. Rudisha `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Kichaguzi cha hali (`modalityBridgeVisionMode`)

| Hali       | Chaguo-msingi | Tabia                                                                                                                                                                                                                                                                                                               |
| ---------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔             | Heuristiki ya zamani, bila kubadilishwa (#6640/#7204): modeli zisizo za combo/`auto/` huelekezwa upya kwenye modeli bora ya kuona isipokuwa modeli asili tayari ina vitambulisho vinavyoweza kutumika (basi hueleza); malengo ya combo daima hueleza.                                                               |
| `describe` |               | Daima hueleza — kizuizi cha uelekezaji upya hupitwa kabisa; modeli aliyochagua mtumiaji ndiyo daima inayojibu.                                                                                                                                                                                                      |
| `reroute`  |               | Lazimisha uelekezaji upya: kinga ya kuhifadhi modeli yenye vitambulisho inapitiwa. Kinga ya vitambulisho ya **lengo** la uelekezaji upya bado inatumika — pasipo lengo la kuona linaloweza kutumika, daraja huzuia kwa hitilafu iliyo wazi badala ya kueleza au kutuma picha ghafi kwenye lengo la maandishi pekee. |

Hali za kulazimishwa hufupisha mzunguko **kabla** ya heuristiki ya auto kuanza; tabia ya `auto`
ni sawa kwa baiti-baiti na kizuizi cha kabla ya PR-1.

#### Wigo wa ufunguo wa API (`visionBridgeKeyScope.ts`)

Wakati ufunguo wa API wa mpigaji simu unazuia `allowedConnections`, madimbwi ya kwota
(`allowedQuotas`) au modeli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), daraja huchagua tu
modeli za uelekezaji upya na uelezaji ambazo ufunguo unaweza kutumia, kwenye miunganisho ambayo ufunguo
unaweza kutumia. Simu ya uelezaji basi daima hupitia kitanzi cha ndani cha OmniRoute
kwa kichwa cha `x-omniroute-self-loop-key-id`, hivyo ombi la gumzo linalopokea
hutekeleza sera ya miunganisho na modeli ya ufunguo huo tena. `enforceApiKeyPolicy()`
huheshimu kichwa hicho pamoja na bearer ya kitanzi cha ndani pekee, hivyo inaweza
kupunguza ufikiaji tu, na kitambulisho kisichotatulika hukataliwa.

Ikiwa hakuna modeli ya kuona inayoruhusiwa kwa ufunguo, **lengo lililothibitishwa la maandishi
pekee** hukataa ombi la picha kienyeji kwa HTTP 400 iliyo wazi badala ya
kupeleka baiti za picha kwenye upande wa juu usioweza (#17069). Kwa malengo yenye
uwezo wa kuona usiojulikana au asilia, njia ya uelezaji huhifadhi tabia yake ya awali
ya fail-open (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Maombi yasiyo na ufunguo, na funguo zisizo na vizuizi hivi, hutenda sawa kabisa na
zamani.

#### Kidokezo cha uelezaji kinachojua kazi (`modalityBridgeVisionTaskAware`)

Chaguo-msingi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) huongeza
maandishi ya **ujumbe wa mwisho wa mtumiaji** (yaliyopunguzwa hadi herufi 500) kwenye kidokezo cha msingi
cha uelezaji, kuelekeza maelezo kuelekea kile mtumiaji alichouliza hasa
(muundo wa codex-vision-proxy) na kumwomba modeli ya kuona kunakili maandishi
yanayoonekana. Bendera ikiwa imezimwa — au hakuna maandishi ya mtumiaji — kidokezo cha msingi
hutumika bila kubadilishwa.

Ombi la kitanzi cha ndani cha uelezaji lenyewe linalooana na OpenAI (`callVisionModelSingle()`
katika `visionBridgeHelpers.ts`) daima huomba `image_url.detail: "high"` —
bila masharti, kwa kila mpigaji simu/mtoa huduma, bila kutegemea ishara yoyote ya
mteja. Sampuli ya maelezo ya chini huharibu usahihi wa OCR kwa kazi ya unakili wa maandishi
ambayo kidokezo hiki hukiomba hasa, kwa hivyo simu ya uelezaji yenyewe daima huomba
maelezo ya juu bila kujali ni kiwango gani cha maelezo ombi asilia lililopokelewa
lilitumia. Hii inaathiri tu mwili wa ombi la ndani la uelezaji; haibadilishi jinsi
OmniRoute inavyopeleka `image_url.detail` ya mpigaji simu mwenyewe kwenye ombi la msingi —
chaguo-msingi hilo hutumika kivyake, na kwa wateja wa OpenCode waliogunduliwa pekee, katika
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Tawi la muundo wa waya
la Anthropic la kitanzi cha ndani cha uelezaji halina uga wa `detail`
na haliathiriwi na chaguo-msingi lolote kati ya haya mawili.

#### Kikomo cha matokeo ya uelezaji (`modalityBridgeVisionMaxChars`)

| Ufunguo                        | Chaguo-msingi | Masafa           |
| ------------------------------ | ------------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` au 100–50000 |

`0` (chaguo-msingi) inamaanisha **hakuna kikomo** — maelezo yanayorejeshwa na
`callVisionModel()` hupitishwa bila kubadilishwa, kikihifadhi tabia iliyopo. Thamani
yoyote katika masafa ya 100–50000 hupunguza maelezo kwa kiambishi cha `…`
kabla ya kuunganishwa tena kama `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` katika `src/lib/guardrails/visionBridge.ts`).
Pandisha hii kwa kazi za OCR zenye maelezo mengi ambapo modeli ya chini inahitaji
unakili kamili; shusha ili kupunguza matumizi ya tokeni kwenye modeli za kuona
zinazozungumza sana. Uga wa dashibodi unapatikana kwenye paneli ya Kina ya kichupo cha Vision
(`modality-bridge-max-chars` katika `ModalityBridgeVisionTab.tsx`) na hulazimisha thamani
yoyote kati ya 1 na 99 hadi kiwango cha chini cha 100 huku ikiacha `0` iliyo wazi
bila kuguswa — `0` ni thamani halali ya Zod yenyewe
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), si
chaguo-msingi la "kutowekwa" pekee.

#### Akiba ya uelezaji (`modalityBridge/bridgeCache.ts`)

Akiba ya LRU + TTL ya ndani ya kumbukumbu kwa matokeo ya uelezaji, inayoshirikiwa kote katika
mchakato. Ufunguo = `sha256(imageRef + composedPrompt + configuredBridgeModel)` wenye
ufungaji wa kiambishi-urefu (hakuna migongano ya mipaka ya uga). Sehemu ya modeli ni
modeli ya daraja **iliyowekwa**, si modeli iliyojibu hasa —
`callVisionModel` inaweza kurudi nyuma ndani yake, na kufungua kwa kila jaribio kungevunja-vunja
akiba. Maelezo yaliyoshindikana hayahifadhiwi kamwe. Mipangilio:

| Ufunguo                         | Chaguo-msingi | Masafa  |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Usawazishaji wa picha za mbali (self-loop describe/base64 fetch)

Wakati daraja linapakua **picha ya mbali** lenyewe — wito wa ndani wa Anthropic describe
na ubadilishaji wa base64 wa claude-wire-format
(`ensureBase64ImagesForClaudeWire`), zote mbili kupitia
`fetchRemoteImageAsDataUri()` katika `visionBridgeHelpers.ts` — data URI
inayotokana hupitishwa kupitia `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kabla ya kuwekwa ndani ya ombi la
vision-model. Picha kubwa kupita kiasi hupunguzwa hadi **2048px long edge**
(inalingana na kikomo cha resize ambacho OpenAI/Anthropic tayari hutumia upande wa
server), jambo linalopunguza baiti za upload/latency bila kubadilisha kile
vision model inachokiona. Upunguzaji hutumia `sharp`, inayopakiwa kupitia dynamic
import: kwenye jukwaa ambalo binary yake ya asili inashindwa kupakiwa,
`normalizeDataUri()` **haitupi hitilafu kamwe** — huangukia kwenye
passthrough ya baiti za awali, hivyo njia ya describe/base64-conversion
huendelea kufanya kazi kila wakati. Baiti zisizo za picha (fetch ambayo
haikurudisha picha inayoweza kudecode) pia hupitishwa bila kubadilishwa. Usawazishaji
huu umezuiliwa kwa picha ambazo daraja hupakua kwa ajili ya wito wake wa ndani —
hautumiki kamwe kwenye payload mbichi ya passthrough ya mwitaji, sawa na
kanuni ya mabadiliko ya opt-in pekee (Hard Rule #20).

#### Schema ya mipangilio + uhamishaji

Funguo mpya za `modalityBridge*` huthibitishwa na Zod katika `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio ya `modalityBridgeCache*`, na
kundi la `modalityBridgeAudio*` linalotumika na Audio Bridge. Uhamishaji
`141_modality_bridge_settings.sql` hunakili thamani zilizopo za urithi
`visionBridge*` kwenda kwenye funguo mpya zinazolingana (idempotent, haififishi kamwe
thamani ya `modalityBridge*` iliyowekwa na mwendeshaji); funguo za urithi zinaendelea
kukubalika kama read fallback kwa mzunguko mmoja wa toleo.

#### Kichwa cha transparency + takwimu

Majibu yaliyobadilishwa na Describe hubeba
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(inajengwa na `buildModalityBridgeHeader()` katika
`modalityBridge/bridgeStats.ts`, inagongwa na `withModalityBridgeHeader()` katika
`src/sse/handlers/chatHelpers.ts`).
Maombi yaliyoelekezwa upya hayapati **kichwa chochote** — payload haikuguswa na
ubadilishaji wa model unaonekana tayari kwenye sehemu ya `model` ya mwili wa jibu.

`GET /api/modality-bridge/stats` (uthibitishaji wa usimamizi, tabaka sawa na
`GET /api/settings`) hurudisha vihesabu vya kumbukumbu kwa kila modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` kwa `vision`, `audio`, na
`video`. `averageLatencyMs` hutumia `latencySamples`, si majaribio yote, kama
kihesabu chake; operesheni isiyo na muda haitengenezi sampuli ya
millisecond sifuri. `bridged` inabaki kuwa alias inayolingana na nyuma kwa
ubadilishaji uliofaulu; majaribio yaliyoshindwa hayiongezi.
Vihesabu hurejea upya mchakato unapoanzishwa kwa muundo
(telemetry, si uhasibu).

#### Usanidi wa dashibodi

Ukurasa maalum wa dashibodi ni
`/dashboard/settings/modality-bridge`. Tab zake `Vision`, `Audio`,
na `Video` zinazoweza kufikiwa kwa URL huhifadhi vigezo vya query wakati wa kubadilisha
thamani ya `tab`. Tab ya Vision inaonyesha uwezeshaji, hali, uteuzi wa model (ikijumuisha
chaguo-msingi la kiotomatiki), task-aware prompting, mipaka ya juu ya timeout/picha/urefu-wa-maelezo/cache,
vihesabu vya
runtime, na ombi la sampuli lililolindwa. Tab ya Audio pia iko hai: inaonyesha
uwezeshaji, kichaguzi cha model cha STT-only chenye Auto, mipaka ya timeout/max-clip,
vihesabu vya audio, na jaribio la sampuli la `input_audio`. Tab ya Video inafanya kazi: inaripoti
hali ya runtime ya FFmpeg/ffprobe — moja ya hali nne dhahiri za UI (`unknown` wakati
probe inaendelea au haikuweza kukamilika, `restricted` kwenye host ya dashibodi
isiyo ya loopback ambapo probe hurukwa upande wa client, `unavailable` mara baada ya kupimwa
na kuthibitishwa haipo, au `available` ikiwa na matoleo ya FFmpeg/ffprobe) — huhifadhi
mipaka ya enable/model/frame/video/timeout, huchuja kichaguzi cha model hadi model
zenye uwezo wa vision, na inaonyesha vihesabu vya video.

Kadi ya zamani ya Vision Bridge chini ya mipangilio ya AI ni kiungo cha
uunganishaji kwenda ukurasa mpya; haimiliki tena nakala ya pili ya
fomu. Media Providers pia
huunganisha mitiririko ya Image-to-Text na Speech-to-Text kwenda kwenye tab
zinazolingana za Modality Bridge bila kuondoa Speech-to-Text playground
iliyopo.

**Self-loop admission bypass:** wakati wito wa describe unapitia OmniRoute's
self-loop yake ya `/v1` (model ya provider isiyo ya kawaida), ombi dogo hutuma
`x-omniroute-admission-bypass: internal` na huthibitishwa kwa credential ya self-loop
iliyotatuliwa — sentinel ya ndani ya `sk_omniroute` katika hali ya ndani, au
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ya env iliyowekwa na mwendeshaji (#1350) ili
usambazaji wa `REQUIRE_API_KEY=true` uweze bado kuendesha wito wa describe. Bypass
inaheshimiwa tu kwa hizo credential kamili, hivyo wateja wa nje hawawezi kutumia
kichwa hicho kuruka admission.

Chaguo-msingi za urithi ziko katika `src/shared/constants/visionBridgeDefaults.ts`;
chaguo-msingi mpya za mode/task-aware/cache na resolver ya mipangilio ziko katika
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail inaonyesha
chaguo la `deps` la constructor ili majaribio yaweze kuingiza utekelezaji bandia wa `getSettings` na
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Hunasa maombi ya chat yenye audio kabla hayajafikia lengo ambalo halijulikani
kuwa linakubali ingizo la audio. Haiwezi kamwe kuelekeza upya ombi la chat: sehemu za audio
hunayaribiwa kupitia endpoint ya multipart inayolingana na OpenAI iliyopo na
model ya chat iliyochaguliwa huendelea na maandishi ya transcript.

Mtiririko:

1. Tatua `supportsAudio` kupitia `getResolvedModelCapabilities()`. Metadata dhahiri ya rejista ya mtoa huduma hushinda, kisha metadata tuli ya modeli, kisha `modalities_input` iliyosawazishwa. Orodha ya pembejeo iliyotangazwa bila `audio` ni `false`; ushahidi wowote wa uwezo haupo hubaki `null`. Zote `false` na `null` huwasha daraja la kihafidhina, ilhali `true` hulipita.
2. Tatua mipangilio ya `modalityBridgeAudio*` na toa sehemu za sauti za juu zinazoweza kuunganishwa kutoka kwa kila ujumbe kupitia kigunduzi shirikishi cha `detectMediaParts()`. Maumbo ya waya yanayotumika ni `input_audio` ya OpenAI, `audio_url`, na `source.media_type: "audio/*"`. Sauti iliyopachikwa hugunduliwa kwa uelekezaji lakini haiondolewi na njia ya kuunganisha. Kazi imewekewa kikomo na `modalityBridgeAudioMaxClips`; sehemu za baadaye hubaki bila kuguswa.
3. Heshi `provider/model` iliyosanidiwa, au acha `selectAudioBridgeModel()` ipitie `AUDIO_TRANSCRIPTION_PROVIDERS` kwa mpangilio thabiti wa katalogi na kuchagua modeli ya kwanza yenye hati ya uthibitisho ya mtoa huduma inayotumika.
4. `callAudioTranscription()` hubadilisha sauti ya base64/data-URI kuwa `file` ya multipart, au hupakua `audio_url` ya mbali kupitia kizuizi cha nje cha umma pekee chenye kuandika DNS na kikomo cha 25 MB. Kisha huposti faili na modeli iliyochaguliwa kwenye mzunguko wa ndani wa `/v1/audio/transcriptions`, iliyothibitishwa na `resolveSelfLoopBearer()`. Njia iliyopo ya unukuzi hufanya utafutaji wa kawaida wa hati ya uthibitisho, usimamizi wa kupunguza kasi/kikomo cha kasi, na utumaji wa mtoa huduma.
5. Miito iliyofanikiwa hubadilisha sehemu zake na `[Audio N]: <transcript>`. Miito huendeshwa kwa `Promise.allSettled`: kushindwa kwa mtu mmoja huhifadhi sehemu hiyo ya awali ya sauti (mkataba #4012). Ikiwa kila mwito unashindwa na lengo limethibitika kuwa `supportsAudio === false`, sehemu hubadilika kuwa `[Audio N]: (unavailable — no STT provider connected)` (mkataba #8430). Kwa lengo lisilojulikana (`null`), matokeo ya kushindwa kote hubaki bila kuguswa. Lengo lililothibitika kuwa la maandishi pekee lisilo na hati ya uthibitisho ya STT inayotumika hupokea stub hiyo hiyo dhahiri bila kutoa mwito wa mtandao.

Manukuu yaliyofanikiwa hutumia akiba ya LRU/TTL ya Modality Bridge ya mchakato mzima. Ufunguo huchanganya rejeleo la sauti, lebo thabiti ya operesheni `audio-transcription`, na modeli ya STT iliyochaguliwa; kushindwa hakuwekwi kamwe kwenye akiba. Majaribio ya sauti husasisha vihesabu shirikishi vya `bridged`, `cacheHits`, `failures`, na `lastUsedAt`. Majibu yaliyobadilishwa hubeba
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; maombi yasiyoguswa hayapokei sehemu ya Audio Bridge.

Mipangilio ya wakati wa utekelezaji inaungwa mkono na DB na inathibitishwa na Zod:

| Ufunguo                       | Chaguo-msingi | Masafa                            |
| ----------------------------- | ------------- | --------------------------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                                 |
| `modalityBridgeAudioModel`    | `""`          | Otomatiki au Kitambulisho cha STT |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000                       |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10                              |

Akiba shirikishi inabaki kudhibitiwa na `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`.

### Daraja la Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Hunasa sehemu za video za juu katika `messages` za Chat Completions na `input`
ya Responses API kabla lengo lisilo na usaidizi wa asili wa video unaojulikana
halijaitwa. Maumbo yanayotumika ni `input_video`, `video_url`, `video_source`,
URL za HTTPS, na data URI za `data:video/*;base64,...`. Majina ya faili ya
kawaida katika maandishi hayachukuliwi kama video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) inamiliki upitishaji wa
maombi, ukaguzi wa uwezo/sera, ujumlishaji kwa kila ombi, na pakia ya majibu.
Kazi kwa kila video — upatikanaji, akiba ya matokeo yote, kueleza mfuatano wa
fremu (ambayo huunganisha manukuu yoyote ya sauti yaliyotangazwa na mpigaji
simu), na vipimo/kusitisha/usafishaji kwa kila jaribio — imefichwa nyuma ya
`processVideoPart` katika `videoBridgePipeline.ts`, inayoitwa mara moja kwa kila
sehemu ya video ndani ya mzunguko wa `preCall`.
Moduli hiyo pia hufafanua mipaka dhahiri ya bandari `VideoMediaBrokerPort`
(kupata baiti na kutoa fremu zilizosampuliwa), `VideoAudioTranscriptionPort`
(kuunganisha manukuu ya sauti yaliyotangazwa na mpigaji simu na manukuu
yaliyosampuliwa), na `VideoDrilldownPort` (mpaka wa uhifadhi wa uchanganuzi wa
fremu; bado haujaunganishwa kwenye `processVideoPart` — ni njia tofauti ya
`/api/modality-bridge/video/drilldown` pekee inayoandika maingizo ya uchanganuzi
leo).

Njia ya maombi ya umma ya `/v1` haileti kamwe au kuita mchakato mdogo. Video za
mbali hupakuliwa chini ya kikomo cha 50 MiB; video za base64 zilizo ndani zina
kikomo cha kihafidhina cha 36 MiB kilichotafsiriwa kwa kila video ili bahasha ya
modeli/ujumbe/fremu iweze kubaki ndani ya kikomo cha umma cha upokeaji wa maombi
ya JSON cha 50 MiB. Makadirio ya urefu wa ndani na ukubwa uliotafsiriwa
hukaguliwa kabla ya ugawaji. HTTPS inahitajika kwenye URL ya awali ya mbali na
kila uelekezaji upya, kwa kutumia kizuizi kilichopo cha nje cha umma pekee chenye
kuandika DNS. Baiti kisha huvuka mpaka kamili wa ndani wa wakala wa
`POST /api/modality-bridge/video/extract`. Njia hiyo ni `LOCAL_ONLY` na
`SPAWN_CAPABLE` kwa pamoja, inakubali tu ombi lililothibitishwa kwa kila
mchakato, la loopback inayoaminika, na haikubali kamwe URL, njia ya mfumo wa
faili, faili inayotekelezeka, au orodha ya hoja. Bomba la ukubwa wa mwili wa API
na kisomaji cha mwili cha nyongeza cha mshughulikiaji hutekeleza kwa uhuru kikomo
cha pembejeo cha wakala cha 50 MiB. Foleni yake yenye mipaka huendesha uchimbaji
mmoja kwa wakati, huruhusu kazi nne zinazosubiri, na huweka kikomo cha pembejeo
inayosubiri kuwa 100 MiB.

Ndani ya broker, `ffprobe` husoma faili la ndani la faragha; orodha isiyobadilika
ya miundo inayoruhusiwa huondoa miundo ya orodha za kucheza na manifesti. Kwa
kontena zinazoruhusiwa za familia ya MOV, marejeleo ya nje ya data ya MOV
hubaki yamezimwa kwa chaguomsingi, na amri isiyobadilika haiyawezeshi. `ffprobe`
na `ffmpeg` zote hutumia orodha ya itifaki zinazoruhusiwa ya `file` pekee,
uzi mmoja, safu za hoja zisizobadilika, bila shell, na programu zinazotekelezeka
zinazotafutwa kutoka `PATH`. Mitiririko ya picha za jalada zilizoambatishwa
si viteuliwa vinavyoweza kuchezwa. Mitiririko yote inayoweza kuchezwa lazima
ikidhi vikomo, na mtiririko chaguomsingi uliobainishwa hupendelewa kabla ya
mbadala bainifu wa faharasa ya chini zaidi. Video zinawekewa kikomo cha sekunde
600, pikseli 8,192 kwa kila kipimo, na pikseli chanzo 33,554,432. FFmpeg
huchukua sampuli za fremu 1–16 za JPEG katika sehemu za katikati, hupunguza
ukingo mrefu hadi usiozidi pikseli 1,024 bila kuongeza ukubwa wa ingizo dogo,
na kamwe haipokei URL. Uchukuaji wa sampuli ni `uniform` kwa chaguomsingi.
Sera ya hiari ya `scene_aware` na sera ya majaribio ya `segment_aware` hufanya
upitishaji mmoja wa ziada usiobadilika wa FFmpeg kwenye mtiririko wa ndani
uliokwisha kuthibitishwa, huchagua mihuri ya muda ya matukio ya `showinfo`
iliyo ndani ya mipaka, na hurudi kwa namna bainifu kwenye sehemu zilezile za
katikati zilizosambazwa sawasawa ikiwa kigunduzi kitashindwa, muda utaisha,
tokeo litakuwa na muundo mbovu, au seti ya viteuliwa itakuwa tupu. Modi
inayozingatia sehemu hugawa sampuli za sehemu za katikati kwa uwiano wa vipindi
vya matukio vilivyothibitishwa; ushahidi wa kuzingatia sehemu na tabia ya
kurudi kwenye mbadala zimefafanuliwa hapa chini. Kikomo kisichoweza kuvukwa cha
fremu 16 hutumika baada ya uteuzi katika kila sera. Ombi linalozingatia tukio
linapokuwa na bajeti ya fremu moja tu, hutumia sehemu ya katikati iliyosambazwa
sawasawa ya video nzima inayotumika au dirisha la kulenga na huripoti
`policyEffective: uniform`: fremu moja iliyochaguliwa ya tukio haiwezi kuhifadhi
ncha zote mbili za muda. Mpigaji anaweza kutoa kwa hiari dirisha lenye ukomo la
kulenga (`start`/`end` kwa sekunde); mipaka hubanwa ndani ya muda wa maudhui,
madirisha yaliyogeuzwa au yasiyo na thamani yenye ukomo hukataliwa, na sera zote
za uchukuaji sampuli hutekelezwa ndani ya kipindi kilichosanifishwa pekee.
Dirisha linalopatikana hujumuishwa katika metadata ya uchukuaji sampuli na
katika kiambishi awali cha maelezo yasiyoaminika ili modeli za hatua za baadaye
ziweze kutofautisha dondoo iliyolengwa na ratiba kamili ya muda.

Ulengaji wa kisemantiki wa maelezo mafupi ni mpangilio tofauti na wa wazi.
Modi chaguomsingi ya uchanganuzi ya `full` huhifadhi kidokezo kilichopo cha
fremu na kamwe haipeleki maandishi ya ombi kwa modeli ya maelezo mafupi. Katika
modi ya `focused`, daraja husoma tu `text`/`input_text` ya hivi karibuni zaidi
isiyo tupu iliyoandikwa na mtumiaji kutoka kwenye kontena lilelile la Chat au
Responses, huisawazisha kuwa NFC, hukusanya vibambo dhibiti na nafasi tupu, na
huiwekea kikomo cha alama 500 za msimbo wa Unicode. Tokeo tupu hurudi kwenye
kidokezo halisi cha `full`. Kidokezo kinachoweza kutumika hubadilishwa kuwa JSON
katika bloku maalumu ya muktadha wa mtumiaji usioaminika na kinaweza tu
kutanguliza maelezo yanayoweza kuonekana; hakiwezi kubatilisha onyo tofauti
dhidi ya kufuata maagizo yanayoonekana au kusikika katika maudhui. Ulengaji wa
maandishi kamwe haukisi `start`/`end` wala kubadilisha kichukua sampuli cha muda.

#### Ushahidi wa kimuundo wa sehemu wa FU-07

`segment_aware` hutumia upitishaji mmoja wenye mipaka wa uchanganuzi wa awali
juu ya mtiririko wa video wa ndani uliokwisha kuthibitishwa. Msururu
usiobadilika wa vichujio kwanza hupunguza ukubwa hadi upana usiozidi pikseli
320, hugundua mabadiliko ya matukio na vipindi vilivyoganda, kisha huchukua
sampuli ya fremu 1 kwa sekunde kwa ajili ya ukungu, wastani wa mwangaza, na
taarifa za anga/muda. Upitishaji unawekewa kikomo cha sampuli 600 za kimuundo,
uzi mmoja wa FFmpeg/kichujio, itifaki ileile ya `file` pekee na orodha za
kontena zinazoruhusiwa, kikomo cha MiB 1 cha tokeo la mchakato, na upeo wa
sekunde 30 ndani ya uondoaji/kikomo cha muda cha pamoja cha broker. Kamwe
haupokei amri, kichujio, njia, au URL kutoka kwenye ombi.

Thamani za kimuundo ni ushahidi bainifu wa uchukuaji sampuli, si uelewa wa
kisemantiki wa video. Hazikisi mada, vitendo, maelezo mafupi, matamshi, au nia
ya mtumiaji. Mipaka ya matukio na kuganda huunda sehemu; kiwango cha kuganda,
ukungu, mwangaza, maelezo ya anga, na mabadiliko ya muda huathiri tu jinsi
bajeti iliyopo ya fremu 1–16 inavyogawanywa. Sehemu iliyoganda kabisa huwekewa
kikomo cha fremu moja, huku sehemu zisizoganda zikishindania bajeti iliyosalia.
Mipaka inapozidi idadi ya fremu, uwakilishi uliosambazwa sawasawa wa ratiba ya
muda huhifadhiwa ili mikato ya haraka ya mapema isiweze kuficha sehemu ndefu ya
mwisho. Mipaka ya matukio iliyo ndani ya azimio la uchanganuzi la sekunde 1
kutoka kwenye mpaka wa kuganda huunganishwa.

Vichujio vinavyokosekana, ushahidi wenye muundo mbovu/ulio tupu, hitilafu ya
kigunduzi, au kuisha kwa muda wa uchanganuzi wa awali wenye mipaka huruhusu
kurudi kwenye sera halisi ya sehemu za katikati zilizosambazwa sawasawa.
Uondoaji unaofanywa na mpigaji au kufikiwa kwa kikomo cha muda cha broker
hakuruhusu kurudi kwenye mbadala: husitisha mchakato mdogo unaoendelea, huzuia
uchopoaji wa fremu unaofuata, na mti wa muda wa faragha huondolewa katika
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` huzalisha data za majaribio bainifu za
FFmpeg halisi kwa ajili ya upunguzaji wa miito ya maelezo mafupi baada ya
kuondoa nakala zinazofanana, ugawaji wa bajeti kwa mwendo mnene, ushahidi wa
ukungu/mwangaza/SI-TI, mikato ya haraka yenye mkia mrefu, na matokeo chanya ya
uongo ya kufifia taratibu. Hurekodi muda halisi wa uchanganuzi wa awali na,
pale ambapo `/usr/bin/time` inapatikana, CPU ya mchakato mtoto na kilele cha RSS.
Ukaguzi wake wa ubora ni viashiria vya kimuundo pekee. Ubora halisi wa modeli
ya maelezo mafupi hubaki `HOLD` kwa sababu mfumo huu wa majaribio hauna endpoint
iliyoidhinishwa au mwamuzi asiyebadilika. Akiba ya kifedha pia hubaki `HOLD`
isipokuwa `--caption-cost-per-call-usd` itoe makadirio bayana na chanya ya gharama
kwa kila mwito; skripti kamwe haibuni matokeo yoyote kati ya hayo.

Kila fremu ina kikomo cha 4 MiB, fremu zote ghafi kwa pamoja hadi 23 MiB, na jibu la broker lililosanifishwa hadi 32 MiB. Saraka ya muda ya faragha huondolewa katika `finally`. OmniRoute haijumuishi FFmpeg na haikubali njia maalum ya kitekelezo. Kabla ya kuweka maelezo, daraja hutumia mzunguko wa kihafidhina wa kuondoa nakala rudufu za kuona: kila JPEG hupunguzwa hadi bafa ya kijivu ya 16×16 na hulinganishwa tu na fremu ya mwisho iliyohifadhiwa. Kwa bajeti ya maelezo iliyoombwa zaidi ya fremu moja, uchimbaji hutoa bwawa la wagombea lenye mipaka hadi mara mbili ya bajeti hiyo na kamwe si zaidi ya fremu 16. Kikomo kilichoombwa hutumika tu baada ya kuondoa nakala rudufu, huku wagombea wa kwanza na wa mwisho waliochaguliwa wakihifadhiwa wakati wa upunguzaji wa mwisho wakati bajeti ni angalau mbili. Sera yenye toleo `grayscale-16x16-mean-cells-v2` hutumia kubwa kati ya tofauti ya wastani ya luma na uwiano wa seli za kijipicha ambazo tofauti yake iliyorekebishwa ni angalau 0.05. Kizingiti cha nakala rudufu ni thabiti 0.04, kilichochaguliwa kwa utabirikaji badala ya kuwekwa wazi kama mpangilio wa wakati wa utekelezaji. Ishara hii ya pili ya utofautishaji mkubwa huhifadhi mwendo mdogo na mabadiliko ya maandishi yanayoonekana ambayo ulinganisho wa wastani pekee unaweza kuficha. Hitilafu za kilinganishi au kidekoda hushindwa kwa njia ya wazi na kudumisha ufikiaji. Metadata ya matokeo hutenganisha wagombea waliotolewa, fremu zilizotumika kwa mafanikio, na nakala rudufu za kuona zilizoachwa.

Sehemu ya video iliyowekwa alama kwa uwazi inaweza kuomba karatasi ya mawasiliano yenye alama za muda. Daraja huunda gridi ya JPEG ya safu 4 na fremu 16 kwa upeo. Kila seli ya pikseli 512 huchoma muhuri wa muda wa chanzo chake kwenye ukanda wa chini wenye utofautishaji mkubwa, huku alama zilezile za muda zikibaki katika metadata ya maandishi kwa uhusiano na ukaguzi wa mtoa huduma. JPEG kamili hubaki na kikomo cha 32 MiB. Iwapo `sharp` haiwezi kusimbua au kuunganisha gridi, daraja hurudi kwenye fremu za JPEG binafsi; usitishaji wa mteja bado huenea kupitia operesheni ya karatasi.

Ushahidi wa kupandisha daraja kwa makusudi umetenganishwa na microbenchmark ya usanisi wa uundaji. `scripts/perf/video-bridge-contact-sheet-eval.ts` hufafanua chombo cha A/B chenye toleo la schema kwa modeli halisi za maono zinazooana na OpenAI. Hupima tokens zilizoripotiwa na mtoa huduma, ucheleweshaji wa ukuta kutoka mwanzo hadi mwisho (pamoja na uundaji wa karatasi), idadi ya miito ya modeli, na uhifadhi wa ukweli uliofafanuliwa na manifest. Majibu ghafi ya modeli hayaandikwi kwenye ripoti; ni digest za SHA-256 na vitambulisho vya ukweli vilivyolingana pekee huhifadhiwa. Chombo hicho hakifanyi simu yoyote ya mtandao au modeli inayolipiwa isipokuwa `--execute-real` ipitishwe na `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY` zimesanidiwa. Bila mwendo huo halisi wa wazi, hukumu yake inayosomeka na mashine hubaki `HOLD`; vipimo vya payload ya usanisi/idadi ya miito pekee si ushahidi wa kupandisha daraja.

Wapigaji simu wanaweza kuambatisha safu ya hiari `transcript.cues` kwenye sehemu ya video inayotumika wanapokuwa tayari wana maandishi yaliyooanishwa. Kila kidokezo lazima kibebe `text`, muda wenye kikomo wa `start`/`end` ndani ya muda uliochunguzwa, na `source` iliyoruhusiwa (`client`, `embedded`, au `audio-bridge`); `confidence` huchukuliwa kama `1` kwa chaguo-msingi na lazima ibaki kati ya `0` na `1`. Vidokezo halisi vinavyojirudia huunganishwa. OmniRoute haianzi kamwe unukuzi kutoka kwa metadata hii: vidokezo vilivyothibitishwa hunakiliwa kwenye matokeo yaliyoelezwa vikiwa na source, confidence, na interval, na huonyeshwa kama uchunguzi usioaminika pamoja na maelezo ya fremu. Maandishi batili, nje ya masafa, au yasiyo na asili hukataliwa badala ya kuchanganywa kwenye mtiririko wa maelezo. Njia zote mbili za transcript za mwili wa ombi hurekebisha asili iliyotolewa kuwa `client`, ikiwemo lebo zilizojidai kuwa `embedded` au `audio-bridge`. Adapta inayomilikiwa na seva pekee ndiyo inaweza kuweka lebo hizo zinazoaminika kupitia hoja ya msimbo pekee `trustedSource`; sehemu ya JSON ya ombi haiwezi kufikia hoja hiyo. Maandishi ya transcript hubaki maudhui yanayotokana na midia yasiyoaminika, bila kujali asili yake, na hayapaswi kamwe kuamua idhini.

Mpigaji simu wa hali ya juu anaweza kutoa wimbo wa `audioTranscript` kwa video hiyo hiyo; huchukuliwa kama maandishi yaliyotolewa na mteja, si uthibitisho wa unukuzi wa seva. Mshono wa muunganisho huendesha uchunguzi wa kuona na sauti chini ya muda wa mwisho mmoja na ishara ya kusitisha, huzipanga kwenye mstari wa muda wa pamoja, huunganisha nakala rudufu halisi, na huripoti matokeo ya sehemu wakati upande mmoja tu unafanikiwa. `audioTranscript` batili hushuka hadi matokeo hayo ya sehemu — maelezo ya kuona huhifadhiwa na tawi la sauti hurekodi msimbo wa hitilafu uliosafishwa — badala ya kushindwa video nzima. Upatikanaji wa kila tawi, bendera ya sehemu, na misimbo ya hitilafu iliyosafishwa huhifadhiwa katika matokeo yaliyoelezwa, katika metadata ya guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), katika metadata ya akiba ya matokeo, na katika vihesabu vya muunganisho vya daraja. Njia chaguo-msingi ya Video Bridge haiitishe kigeuzi cha sauti-kuwa-maandishi wala kupakua nakala ya pili ya midia; bila wimbo huo wa wazi, hubaki video pekee.

**Uhifadhi wa nakala ya maandishi (#12150 P1).** Hii inatumika kiotomatiki kila wakati Daraja la Video (lenyewe huchaguliwa kwa hiari) linapoonyesha kidokezo cha nakala ya maandishi — hakuna bendera tofauti ya uhifadhi. Wakati ombi linapoonyesha kidokezo chochote cha nakala ya maandishi (`transcript` iliyotangazwa na mtoa ombi au `audioTranscript` iliyounganishwa), kizuizi cha ulinzi (guardrail) kinaiweka alama `videoBridgeObserved` na kutoa kivuli kilichofichwa cha maelezo ya video — uonyeshaji sawa kabisa ambapo mwili wa maandishi huru wa kila kidokezo hubadilishwa na `[redacted-video-transcript]`, unaoundwa kwa kubadilisha sehemu ya kidokezo iliyopangwa kabla ya mfuatano wa herufi kukusanywa (kamwe si kwa kuchanganua maandishi yaliyobanwa, hivyo hakuna maudhui ya kidokezo — ya uadui au ya kawaida, ikiwa ni pamoja na miili iliyo na `]` kama `[inaudible]`/`[music]` — yanayoweza kunusurika). Mwili wa ombi la kumbukumbu ya miito iliyohifadhiwa hubadilisha kila sehemu ya maandishi inayotokana na video kwa kivuli hicho kilichofichwa, kinacholinganishwa kwa usawa wa maudhui; nanga ya `fullText` husomwa upya kutoka kwa mzigo wa kizuizi cha ulinzi kilichokamilika kabla ya simu, hivyo ulinganifu bado unafanikiwa baada ya vizuizi vya ulinzi vya mnyororo wa baadaye (vificha vya PII na vitambulisho, vipaumbele 10/95) kuandika upya maandishi ya maelezo mahali pake na baada ya sindikizo la maagizo ya mfumo/kukabidhi kazi/kumbukumbu kubadilisha muundo wa safu ya jumbe. Mwili unaotumwa juu (upstream) kwa modeli haubadiliki. Ombi lililozingatiwa pia halijazi Kumbukumbu (Memory) ya kudumu (uchimbaji unaotokana na ombi na jibu wote hupitwa), hivyo jibu la modeli yenyewe haliwezi kurudisha maandishi ya nakala ya maandishi kwenye Kumbukumbu.

**Sehemu mbichi za video (#12430).** Wakati daraja limewashwa na usaidizi wa asili wa video haujulikani au haupo, sehemu zilizobainishwa za `transcript`/`audioTranscript` pia huwasha `videoBridgeObserved`, hata baada ya kushindwa kwa maelezo au kikomo cha `maxVideos`. `null` na mifuatano tupu huhesabiwa; sehemu zisizopo na metadata isiyo ya video hazihusiki. Nakala zilizohifadhiwa huficha sehemu hizi au huacha ombi, na akiba za joto (caches)/Kumbukumbu hupitwa.

Kwenye njia hizo za akiba (fallback), vidokezo halali vya mtoa ombi huwa sehemu za `text`/`input_text` zinazotumika badala ya sehemu zisizo za kawaida za mtoa huduma. Njia zote mbili zilizotolewa na ombi hubaki kama uchunguzi wa `client` usioaminika, pamoja na onyo la wazi kwamba video haikuelezwa na alama za muda hazikuthibitishwa dhidi ya media. Bajeti zilizopo za vidokezo 256/jumla ya KiB 64 na kwa kila kidokezo hutumika kwa njia zote mbili kwa pamoja; alama za muda lazima zitosheke kikomo cha sekunde 600 cha wakala (broker) na dirisha lolote la kulenga lililotolewa. Njia batili hutupwa, hazipitishwi kama maandishi holela; ndugu halali bado anaweza kutumika isipokuwa bajeti yao ya pamoja imepitwa. Sehemu za `null`/tupu haziongezi maandishi. Hakuna upataji wa media au unukuzi unaoongezwa na akiba hii. Sehemu za kiendelezi za nakala ya maandishi huondolewa kutoka kwa mbeba video wa akiba na vitu vyake vya `video_url`/`source`. Orodha ya kuruhusiwa ya waya ya OpenAI inabaki kali; wabeba video wasiojulikana asili wanabaki kupatikana na malengo yanayojulikana ya maandishi pekee huhifadhi alama salama. Vivuli vilivyopangwa vya ufichaji hulinda maandishi ya nakala ya maandishi yaliyoongezwa, wakati ombi la awali linalomilikiwa na mtoa ombi linabaki bila kubadilika. Malengo yanayotumika asili na madaraja yaliyozimwa huhifadhi tabia yao iliyopo ya kupita.

Nakala za ziada zilizohifadhiwa hutumia ishara hiyo hiyo ya ombi lililozingatiwa. Picha ya awali ya ombi la mteja kabla ya kizuizi cha ulinzi, ombi linalosubiri kwenye kumbukumbu, na kumbukumbu ya ombi lililokataliwa mapema hubadilisha kwa muundo sehemu za nakala ya maandishi kwenye sehemu za video; maagizo ya mfuatano wa herufi yaliyotengenezwa na hatua za mchakato (pipeline) na ukabidhaji wa muktadha hufichwa kwenye sinki ya mwili wa ombi lililohifadhiwa. Alama iliyohifadhiwa `video_content_removed` hufanya mwendelezo wa `previous_response_id` ushindwe kwa njia salama (fail closed) badala ya kuunda upya maandishi ambayo yalitupwa kwa kusudi. Ikiwa ombi lililozingatiwa litapoteza kivuli chake cha ufichaji kwa kila sehemu kabla ya kuandikwa kwenye kumbukumbu, au hata kivuli kimoja kati ya vivuli kadhaa vya video kikishindwa kulingana baada ya mabadiliko ya baadaye ya ombi, mwili wa ombi lililohifadhiwa huachwa kabisa badala ya kuhifadhi nakala ya maandishi iliyofichwa kwa sehemu.

Kwa ombi lililozingatiwa, jibu la modeli linaweza kunukuu sehemu yoyote ya nakala ya maandishi bila mpaka uliopangwa wa kidokezo. Kwa hivyo `responseBody` yake ya kumbukumbu ya miito iliyohifadhiwa hubadilishwa na alama ya kuacha; bidhaa ya kina ya mchakato (inayoweza kujumuisha miili ya juu/mteja na vipande vya mtiririko) hakihifadhiwi. Akiba za maana (semantic), za kujirudia (idempotency), na za uchezaji upya wa hoja (reasoning-replay) hupita usomaji na uandishi kwa ombi hilo. Ombi la mtoa huduma na jibu linaloonekana kwa mteja hubaki bila kubadilika. Baiti za mapema za kuweka uhai (keepalive) hutolewa kutoka kwa bafa ya muda wakati bidhaa ya kina inaachwa. Onyo la Kiro la EventStream yenye hitilafu huripoti tu hesabu ya baiti za mzigo, kamwe si maudhui yake au hitilafu mbichi ya kichanganuzi cha JSON. Hii haidai kwamba kila utambuzi usiohusiana wa mtoa huduma/programu-jalizi umekaguliwa; ukaguzi mpana wa sinki zilizohifadhiwa unafuatiliwa katika #11658.

Mzunguko wa maisha wa ndani wa `/api/modality-bridge/video/drilldown` ni sehemu ndogo tofauti ya akiba inayothibitishwa kwa loopback/tokeni. Kila operesheni pia inahitaji kitambulisho cha msingi kisichoeleweka cha kawaida (canonical opaque principal ID). Kabla mtoa ombi wa uzalishaji hajawashwa, ni lazima apate kitambulisho hicho kutoka kwa mpangaji (tenant) aliyethibitishwa na kamwe asipitishe thamani iliyochaguliwa na mteja. Funguo za akiba hufungamanisha msingi huo na vitambulisho vya kawaida vya kipindi na marejeleo ya video, huhifadhi tu funguo zao zinazotokana na SHA-256, na huelekeza usomaji na ufutaji kwa msingi huo huo. Akiba huhifadhi fremu 16 za JPEG zinazotokana kwa kila ingizo, huziisha baada ya dakika kumi, na inasaidia usomaji wenye mipaka wa `start`/`end` au ufutaji wa wazi wa kipindi.

Kila msingi una kikomo cha maingizo 16 na MiB 64 za data ya kawaida ya JPEG. Mipaka hiyo ni huru kutoka kikomo cha jumla cha maingizo 64/MiB 256: shinikizo la kiwango cha msingi huondoa tu maingizo ya msingi huo yaliyotumika mara ya mwisho kabla ya kuondoa kwa LRU ya jumla kuzingatiwa. Maingizo yaliyoisha muda hufagiliwa kutoka kwa hesabu za msingi na za jumla wakati wa shughuli za akiba, wakati kughairi na kushindwa kwa uthibitishaji hakuweki badala ya sehemu.

The cache hukataa Base64 isiyo kanoniki, pedi ya ziada, media isiyo JPEG, JPEG zenye hitilafu au
zilizokatwa, na JPEG zinazotoa onyo wakati wa usimbuaji kamili wa picha wenye mipaka wa `sharp`.
Husimba upya kila picha inayokubaliwa kama JPEG kanoniki, hupata upana na urefu
kutoka baiti zilizosimbuliwa badala ya kuamini sehemu za mwitaji, na hutupa baiti za polyglot
zinazofuata badala ya kuzihifadhi. Ni bafa tu ya kanoniki iliyobanwa yenye mipaka
inayotozwa kwa kwota zote mbili. Kikomo cha waya cha JSON kinajumuisha gharama ya ziada ya Base64
kwa kikomo cha MiB 32 cha ingizo lililosimbuliwa. Kila
derivesheni iliyohifadhiwa hurekodi umbizo/azimio lake la JPEG lililothibitishwa, sera ya sampuli,
toleo la derivesheni, muda wa kuundwa, hash ya maudhui iliyokokotolewa na seva, na rejeleo la mzazi
lililohashifiwa pamoja na hash ya maudhui ya mzazi ya mwitaji anayeaminika. Kughairi hukaguliwa
kati ya awamu za usimbuaji/hash zisizo za moja kwa moja kabla ya uwasilishaji wa cache wa atomiki.

Sehemu hii ya kazi bado haijaunganisha mzalishaji wa uzalishaji kwenye njia na haitoi
uteuzi wa vibadala vya maazimio mengi. Kwa hivyo njia ya ombi ya Video Bridge iliyo wazi
haipati kazi ya ziada, wakati derivesheni kuu iliyofungwa kwa mteniti na
mzunguko kamili wa maisha wa maazimio mengi wa FU-08 vinabaki kuwa kazi ya ufuatiliaji iliyo wazi
badala ya kuandikwa kama tabia iliyokamilika.

Fremu hupewa manukuu kwa mfuatano kwa kutumia modeli ya Video iliyosanidiwa. Ubatilishaji tupu
wa Video hurithi mpangilio wa Vision; ikiwa zote ni tupu, kipanga njia kiotomatiki cha Vision
huchagua modeli tendaji yenye uwezo wa kuona. Manukuu yaliyofanikiwa hubadilisha sehemu asili
na kiambishi thabiti `[Video description:` ambacho pia huweka alama kwenye maandishi kama
ushuhuda usioaminika unaotokana na media na huwaambia modeli zinazofuata zisifuate maagizo
yanayopatikana kwenye media. Funguo za cache ya manukuu ya fremu hujumuisha baiti za JPEG, kidokezo,
muhuri wa muda, na modeli tendaji; ni manukuu yaliyofanikiwa pekee huhifadhiwa kwenye cache.
Maingizo ya cache huhifadhi modeli halisi ya mzalishaji iliyofanikiwa, ikiwa ni pamoja na modeli
mbadala; daraja huripoti `mixed` wakati fremu tofauti zilitolewa na modeli tofauti. Upatikanaji
wa cache hutumia tena utambulisho huo wa mzalishaji badala ya kuuweka tena lebo kama mpango
wa uelekezaji ulioombwa. Cache ya matokeo ya video nzima ina funguo kwa kila ingizo linalobadilisha
matokeo — kidokezo, modeli tendaji, sera ya sampuli, idadi ya fremu, hali ya uchambuzi wa maana,
alama ya vidole ya SHA-256 ya kidokezo cha lengo lililosawazishwa, dirisha la lengo, `transcript`,
`audioTranscript`, na bendera ya karatasi ya mawasiliano — hivyo kubadilisha mojawapo ya vipimo
hivyo ni kukosa cache, kamwe si utumiaji tena wa kizamani. Toleo la sera ya uondoaji rudufu wa
kuona, kizingiti, na idadi ya fremu za wagombea yenye mipaka pia ziko wazi katika ufunguo na
metadata ya cache ya matokeo; kwa hivyo mabadiliko ya sera hayawezi kutumia tena maelezo ya
video nzima ya kizamani. Metadata ya cache ya matokeo v4 huhifadhi hali na alama ya vidole,
kamwe si kazi mbichi ya mtumiaji. Metadata ya guardrail huripoti hali zote mbili za uchambuzi
zilizoombwa na tendaji; hali `focused` iliyoombwa bila maandishi ya mtumiaji yanayoweza kutumika
huripotiwa kama `full` kwa ufanisi.

Guardrail huchukua kila sehemu ya video inayotumika lakini haielezi zaidi ya
`modalityBridgeVideoMaxVideos`. Kwa lengo lililothibitishwa kuwa na
`supportsVideo === false`, video zilizoshindwa na zilizozidi kikomo huwa alama za maandishi
salama zilizo wazi ili hakuna video mbichi inayosalia. Wakati uwezo haujulikani, sehemu hizo
huhifadhi mtoaji wake wa video; nakala yoyote mbadala ya maandishi hufuata ubadilishaji wa
maandishi wenye mipaka ulio juu. Malengo yenye `supportsVideo === true` hupita kando ya daraja.
Ishara ya kughairi ombi la mteja huenea kupitia upakuaji, foleni ya broker, michakato ndogo, na
simu za manukuu; kughairi husimama kati ya video na kamwe hakuruhusu media mbichi kupita kwa
hitilafu.

Mipangilio ya wakati wa utekelezaji inaungwa mkono na DB na huthibitishwa na Zod:

| Ufunguo                             | Chaguo-msingi | Masafa / tabia                                                                                                         |
| ----------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Muda wa utekelezaji wa hiari, unahitaji kuwezeshwa                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` huhifadhi manukuu ya jumla; `focused` hutumia muktadha wa mtumiaji wa hivi karibuni usioaminika na wenye mipaka |
| `modalityBridgeVideoModel`          | `""`          | Hurithi modeli ya Vision Bridge                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware`, au `segment_aware` ya uwiano; kushindwa kwa kigunduzi hurejea kwenye `uniform`               |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                                         |

Thamani za muda wa kusubiri za Video zilizohifadhiwa za urithi zilizo juu ya sekunde 120
hupunguzwa hadi muda wa mwisho wa broker; mipangilio mipya inayoandikwa juu ya kikomo hicho
hukataliwa.
`GET /api/modality-bridge/video/runtime` inahitaji eneo la loopback lililopigwa muhuri
linaloaminika kabla ya uthibitishaji au uchunguzi wa wakati wa utekelezaji, kisha inahitaji
uthibitishaji wa usimamizi. Hurejesha tu `available`, matoleo ya FFmpeg/ffprobe yaliyosafishwa,
na sababu isiyobadilika wakati muda wa utekelezaji haupatikani. Kiishio cha uchimbaji cha ndani
si API ya upakiaji ya umma: kujaa kwa foleni hurejesha `503` pamoja na `Retry-After`, kukatika
kwa mwitaji hurejesha `499`, na muda maalum wa mwisho wa broker hurejesha `504`. Majibu
yaliyobadilishwa huongeza `video->text;model=<visionModel>;parts=<videos>` kwenye kichwa cha
kati `x-omniroute-modality-bridge` bila kuondoa sehemu za Vision au Audio.

### PII Masker (`piiMasker.ts`)

Hufanya kazi katika **hatua zote mbili**.

- **`preCall`** hutengeneza nakala ya payload, hupitia `system`, `messages`, `input`, na
  `prompt` (ikiwemo vipengee vya mfuatano wa kawaida), na hutumia `processPII()` (kutoka
  `@/shared/utils/inputSanitizer`) kwenye sehemu za mfuatano za `content`/`text`. Wakati
  `PII_REDACTION_ENABLED=true`, PII iliyogunduliwa hufichwa katika payload
  inayotumwa. Hii haitegemei `INPUT_SANITIZER_MODE` (ambayo hudhibiti tu
  sera ya uingizaji wa prompt). Wakati ufichaji umezimwa, mwito hurekodi idadi
  ya ugunduzi bila kuandika upya maudhui.
- **`postCall`** hutengeneza nakala ya kina ya jibu, huendesha `sanitizePIIResponse()` pamoja
  na kifichaji cha muundo wa Responses-API (`maskResponsesOutput` — hushughulikia
  `output_text` na `output[].content[].text`). Ikiwa ufichaji wowote unafanyika,
  jibu lililorekebishwa huchukua nafasi ya lile la awali.

Guardrail haizuii kamwe; huongeza tu maelezo (`meta.detections`,
`meta.redacted`) au huandika upya.

#### Uteuzi kwa kila aina, ruwaza maalum na vihesabio vya ugunduzi

**Dashibodi → Mipangilio → Usalama → Ufichaji wa PII** huchagua _kile_ kinachofichwa. Hii
haiwashi ufichaji: bado hudhibitiwa na `PII_REDACTION_ENABLED` (ombi) na
`PII_RESPONSE_SANITIZATION` (jibu + SSE), ambazo zote zimezimwa kwa chaguo-msingi.

- **Uteuzi kwa kila aina** — vitambulisho vilivyojengewa ndani vimeorodheshwa katika
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Kutoweka kwa thamani kunamaanisha
  kila aina (tabia iliyokuwepo kabla ya mpangilio huu). Ruwaza ya injini ya ombi ya
  `ssn_us` hulingana na `ssn`. Violezo (Minimal, Standard, Financial,
  Brazilian, USA, Full) hujaza tu visanduku vya kuteua katika UI.
- **Ruwaza maalum** — hadi ruwaza 20 za regex au wildcard (`*` = hadi vibambo 64
  visivyo nafasi tupu, `?` = kimoja). Ulinganifu hubadilishwa kuwa `[CUSTOM_REDACTED]`.
  Kila ruwaza hupitia `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): isizidi vibambo 500, alama ziishie
  kwenye `g i m s u`, lazima iweze kukusanywa, lazima ipite `safe-regex` (urejeaji nyuma
  wa maafa), na haipaswi kulingana na mfuatano mtupu au kishikilia nafasi cha ufichaji.
  Ruwaza inayoshindwa hukataliwa wakati wa kuhifadhi na kujaribu, na safu iliyohifadhiwa
  inayoshindwa hurukwa wakati wa utekelezaji badala ya kukusanywa. Ruwaza maalum
  huendeshwa tu wakati ufichaji umewashwa.
- **Vihesabio vya ugunduzi** — idadi kwa kila aina (kamwe si thamani zilizolingana), huhifadhiwa
  katika kumbukumbu na kuwekwa upya baada ya kuwasha upya (`src/lib/pii/piiDetectionStats.ts`). Huongezeka
  tu wakati ufichaji umewashwa.

Mipangilio huhifadhiwa katika jedwali la `key_value` (nafasi ya majina `pii_settings`,
`src/lib/db/piiSettings.ts`) na husomwa kupitia akiba ya sekunde 1. API:

| Mbinu  | Njia                     | Kusudi                                                                               |
| ------ | ------------------------ | ------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Hali ya alama, `enabledTypes`, `customPatterns`, vihesabio vya ugunduzi              |
| `PUT`  | `/api/settings/pii`      | Badilisha `enabledTypes` (`null` = zote) na/au `customPatterns`                      |
| `POST` | `/api/settings/pii/test` | Jaribio kavu la ruwaza moja dhidi ya sampuli isiyozidi KB 8; hakuna kinachohifadhiwa |

Zote tatu zinahitaji uthibitishaji wa usimamizi na huhakiki body kwa kutumia Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Uingizaji wa Prompt (`promptInjection.ts`)

Hugundua miundo hasidi katika maudhui yaliyotolewa na mtumiaji na kutekeleza
sera iliyosanidiwa. Tabia huendeshwa na vigezo vya mazingira na chaguo za constructor:

| Mpangilio            | Kigezo cha mazingira                                                                                            | Chaguo-msingi | Athari                                                                                                                                                                                                     |
| -------------------- | --------------------------------------------------------------------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Imewashwa            | `INPUT_SANITIZER_ENABLED`                                                                                       | `true`        | Wakati ni `false`, guardrail hukatisha mchakato mapema.                                                                                                                                                    |
| Modi                 | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                                 | `warn`        | Sera ya uingizaji: `block`, `warn`, au `log`. (`redact` inakubaliwa kwa uoanifu wa nyuma lakini **haiondoi** maandishi ya uingizaji; uandishi upya wa PII ya ombi hudhibitiwa na `PII_REDACTION_ENABLED`.) |
| Kizingiti cha kuzuia | Chaguo la `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (jina mbadala `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Kiwango cha chini zaidi cha ukali kinachohitajika ili kuzuia. Kiwango cha kati ni cha uangalizi pekee kwa chaguo-msingi.                                                                                   |

**Kipaumbele cha modi** (`getMode`): `options.mode` ya mwitaji →
ubatilishaji wa **alama ya kipengele ya DB** wa `INJECTION_GUARD_MODE` (Dashibodi → Mipangilio →
Alama za Vipengele) → env ya `INJECTION_GUARD_MODE` → env ya `INPUT_SANITIZER_MODE` →
`warn`. Kwa hivyo, ubatilishaji wa dashibodi hupewa kipaumbele kuliko vigezo vya mazingira, hivyo UI ya Alama za
Vipengele hudhibiti guard inayoendeshwa moja kwa moja (bila kuwasha upya). Usomaji wa DB ni salama unaposhindwa:
ikiwa hitilafu inatokea, guard hurudi kwenye tabia inayotegemea mazingira, na wakati hakuna
ubatilishaji uliowekwa, tabia hufanana na utatuzi unaotegemea mazingira pekee.

Vyanzo vya ugunduzi:

1. `sanitizeRequest()` kutoka `@/shared/utils/inputSanitizer` (seti ya pamoja ya vigunduzi
   inayotumika kwingineko katika pipeline).
2. `DEFAULT_GUARD_PATTERNS` zilizojengewa ndani (kwa sasa `system_override_inline` na
   `markdown_system_block`, zote zikiwa na ukali wa `high`).
3. `customPatterns` za hiari zinazopitishwa kupitia chaguo za constructor (mifuatano, regex,
   au rekodi za `{ name, pattern, severity }`).

Wakati `mode === "block"` **na** angalau ugunduzi mmoja unakidhi kizingiti cha
ukali, `preCall` hurejesha `{ block: true, message: "Request rejected:
suspicious content detected" }`. Katika modi `warn`/`log`, kizuizi cha usalama
huandika kwenye kumbukumbu lakini huruhusu wito. Kisaidizi kinachoshirikiwa
`evaluatePromptInjection()` pia hutumwa nje kwa waombaji wanaohitaji
kutathmini vidokezo bila kupitia rejista.

**Kikomo cha uchanganuzi (v3.8.20):** kigunduzi huchunguza tu **16 KB za kwanza**
za maandishi ya kidokezo yaliyounganishwa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`
(baiti 16 384) katika `src/shared/utils/inputSanitizer.ts`. `detectInjection()` na
`evaluatePromptInjection()` zote hufanya `slice(0, MAX_INJECTION_SCAN_BYTES)` kabla ya kuendesha
mzunguko wa ruwaza. Maelekezo ya uingizaji hukaa karibu na sehemu ya juu ya ingizo, kwa hivyo hii
huweka kikomo cha matumizi ya CPU/GC ya regex kwenye payload za mamia kadhaa ya KB bila kudhoofisha ugunduzi (linganisha
#3932, #4041).

### Kificha Vitambulisho (`credentialMasker.ts`)

Hufanya kazi katika **hatua zote mbili**, mwisho katika mnyororo chaguo-msingi
(kipaumbele `95`). Hufunika ruwaza zinazojulikana za funguo za API / tokeni za siri
kutoka kwenye payload inayotoka (maudhui ya ujumbe, hoja za wito wa zana,
matokeo ya zana) **na** jibu la mtoa huduma, ili kitambulisho kilichobandikwa
kwenye kidokezo (au kurudishwa kwa mwangwi na matokeo ya zana) kisivuje
kwa mtoa huduma wa juu au kurudi kwa mteja.

- **Kwa hiari pekee**, kanuni sawa na ufutaji wa PII (unaohusiana na Kanuni
  Ngumu #20): huzimwa isipokuwa `settings.credentialRedactionEnabled === true` **au**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ikiwa imezimwa, kizuizi cha usalama hakifanyi kazi —
  hakizuii kamwe na hakiandishi upya kamwe.
- `redactCredentials()` hupitia mti kamili wa payload/jibu (`walkValue()`,
  salama dhidi ya uchafuzi wa prototype, salama dhidi ya mizunguko kupitia `WeakSet`) na hubadilisha vinavyolingana na
  kishika nafasi cha `[REDACTED:<type>]`, ikitoa nakala tu ya matawi yaliyobadilika
  kweli.
- `CREDENTIAL_PATTERNS` hujumuisha funguo za watoa huduma wa LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokeni za VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), funguo za malipo (Stripe, Square), funguo
  za wingu (funguo ya ufikiaji ya AWS, Twilio, SendGrid, Mailgun), funguo za faragha / JWT,
  mifuatano ya muunganisho inayobeba vitambulisho (`mongodb://user:pass@...`, n.k.), na
  ruwaza ya jumla ya thamani ya kichwa cha `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Funguo zenye umbo la kichwa (`authorization`, `x-api-key`, `api-key`,
  `apikey`) hufunikwa kimuundo (thamani pekee, kiambishi cha mpango kama
  `Bearer `/`Basic ` kimehifadhiwa) badala ya kupitia regex ya maandishi ya jumla.
- Kizuizi cha usalama hakizuii kamwe; huandika upya tu (`modifiedPayload` /
  `modifiedResponse`) na kuweka maelezo (`meta.credentialsRedacted`, `meta.count`).

Kinga dhidi ya urejeshaji: `tests/unit/credential-masker-guardrail.test.ts`.

## Mkataba wa Msingi (`base.ts`)

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
  block?: boolean; // true hukatisha mnyororo
  message?: string; // huonyeshwa wakati wa kuzuia
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // hurudishwa na preCall ili kuandika upya ombi
  modifiedResponse?: TValue; // hurudishwa na postCall ili kuandika upya jibu
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

Guardrail huashiria "hakuna mabadiliko" kwa kurudisha aidha `void`, `{}`, au
`{ block: false }`. Kurudisha `modifiedPayload`/`modifiedResponse` hubadilisha
thamani inayotiririka kupitia mnyororo kwa guardrail za chini.
`signal?: AbortSignal` hubeba mzunguko wa maisha wa mpigaji simu ndani ya guardrail. Kughairi ombi ni ubaguzi wa makusudi wa fail-open: madaraja ya media husimamisha kazi na kusafisha bila kurejesha media ghafi kwa lengo linalojulikana kuwa haliungi mkono.

## Rejista (`registry.ts`)

`guardrailRegistry` ya singleton hufichua:

- `register(guardrail)` — huongeza (au hubadilisha kwa jina lililorekebishwa) guardrail na
  hupanga upya kwa `priority` inayopanda.
- `clear()` / `list()` — visaidizi vya utawala.
- `runPreCallHooks(payload, context)` — hupitia guardrail zinazotumika, hupitisha
  payload kupitia `modifiedPayload`, na husimama kwenye `block: true` ya kwanza.
- `runPostCallHooks(response, context)` — mtiririko sawa upande wa jibu.
- `resetGuardrailsForTests({ registerDefaults })` — husafisha hali na kwa hiari
  husajili upya chaguo-msingi kwa utengaji safi wa majaribio.

Wakimbiaji wote wawili hurudisha `{ blocked, payload|response, results, guardrail?, message? }`
ambapo `results` ni safu ya rekodi za `GuardrailExecutionResult` ambazo hujumuisha
sehemu za kila guardrail `blocked`, `skipped`, `modified`, `error`, na `meta`,
muhimu kwa ufuatiliaji.

### Kuzima Guardrail kwa Kila Ombi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` hukusanya
orodha isiyo na nakala rudufu ya majina ya guardrail ambayo inapaswa kurukwa kwa ombi
la sasa. Kuna njia tano, zinasomwa kwa mpangilio huu na kuunganishwa katika orodha moja
(tukio la kwanza hushinda wakati wa kuondoa nakala rudufu):

1. `apiKeyInfo.disabledGuardrails`
2. Mwili wa ombi `disabledGuardrails` (kiwango cha juu)
3. Mwili wa ombi `metadata.disabledGuardrails` (tu wakati `metadata` ni kitu)
4. Kichwa `x-omniroute-disabled-guardrails`
5. Kichwa cha urithi `x-disabled-guardrails`

Njia zote tano zimeunganishwa, vichwa viwili vimejumuishwa: kutuma vyote
`x-omniroute-disabled-guardrails` na `x-disabled-guardrails` huruka muungano wa
orodha zao, na kichwa cha kisasa tupu hakisitiri tena kile cha urithi
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), imerekebishwa katika
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Thamani zinaweza kuwa safu za mifuatano au mfuatano uliotenganishwa kwa koma; majina hupunguzwa
na kurekebishwa hadi kebab-case ndogo (`pii_masker` → `pii-masker`), na maingizo tupu
huondolewa. Matokeo hupitishwa kupitia `context.disabledGuardrails`
hadi kwenye rejista, ambayo huruka guardrail zinazolingana (`skipped: true` katika `results`).

Orodha ya kuzima huathiri tu **rejista**. Hali ya `block` ya kuingiza kidokezo ni
mpaka wa lazima: middleware ya kinga ya kuingiza
(`src/middleware/promptInjectionGuard.ts`) huita `evaluatePromptInjection()`
bila orodha yoyote ya kuzima inayodhibitiwa na mpigaji simu (wito uliokufa
`resolveDisabledGuardrails({ body })` ambao ilikuwa ikifanya uliondolewa katika
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), kwa hivyo ombi
linalozima `prompt-injection` bado linakataliwa katika hali ya `block`. Hii ni kwa
muundo. Njia za kuzima zinadhibitiwa na mpigaji simu (mwili wa ombi,
metadata, vichwa), na mpigaji simu hapaswi kuweza kuzima
udhibiti wa usalama uliowekwa na mwendeshaji
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Muungano wa vichwa
kutoka [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
hubadilisha tu ni guardrail zipi za rejista zinazorukwa; haimruhusu mteja
kupita middleware. Sera za lazima za guardrail kwa kila ufunguo na kwa kila kikundi zinafuatiliwa
katika RFC ya v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Tazama [Ufikiaji na mipaka](#coverage-and-limits).

## Mpangilio wa Utekelezaji

Kwa kila ombi linalopitia `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts` (njia za familia ya chat zilizoorodheshwa chini ya
[Wigo na mipaka](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` huunda orodha ya kuruka kutoka kwa ufunguo wa API, body,
   na headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` huendesha guardrails kwa mpangilio wa
   kipaumbele kinachoongezeka:
   - Guardrails zilizozimwa hurekodiwa kama `skipped`.
   - `preCall` ya kila guardrail inaweza kuandika upya payload kupitia `modifiedPayload`.
   - `block: true` ya kwanza hukatisha mnyororo na handler hurudisha
     jibu la kukataa la guardrail.
3. Payload (inayoweza kuwa imeandikwa upya) inaingia kwenye uelekezaji wa combo na
   usambazaji wa upstream.
4. **Isiyo ya mtiririko pekee:** baada ya jibu kukusanywa,
   `guardrailRegistry.runPostCallHooks(...)` huendesha mnyororo huo huo kwenye
   jibu. `block: true` hapa huondoa jibu la upstream na kurudisha HTTP 400. Majibu ya mtiririko huruka hatua hii kabisa.

Guardrails zinazotoa hitilafu hurekodiwa na `error: <message>` na kuandikwa kwenye kumbukumbu kupitia
`logger.warn`, lakini mnyororo unaendelea — fail-open kwa muundo.

## Wigo na mipaka

Rejista ya guardrail imeunganishwa kwenye pipeline ya chat pekee. Mipaka hii
imeainishwa na `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` na
`tests/unit/guardrail-pipeline-characterization.test.ts`; sasisha majaribio hayo
kwa makusudi tabia inapobadilika.

### Mahali ambapo hooks hutekelezwa

| Hook / udhibiti                     | Hutekelezwa kwenye                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Maombi yanayoshughulikiwa na `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (na `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, na proksi ya chat ya Telegram. Pia endpoint ya jaribio ya dashibodi `/api/guardrails/test`. Kizuizi cha pre-call hurudisha HTTP 400. |
| `runPostCallHooks`                  | Majibu ya chat **yasiyo ya mtiririko** pekee (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Majibu ya mtiririko hayafikii hapo kamwe.                                                                                                                                                                                                                                                                                                    |
| Streaming PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), inayopitishwa kwenye `streamingPipeline.ts` wakati `PII_RESPONSE_SANITIZATION` imewashwa. Si guardrail, kwa hivyo njia za kuzima haziathiri.                                                                                                                                                                                                                                        |
| Injection-guard middleware (legacy) | Kila njia ya `/v1` inayobeba prompt, ikiwa ni pamoja na familia ya chat (tazama [wigo wa njia](#injection-guard-route-coverage--red-team-phase-8--block-d)). Injection ya prompt pekee.                                                                                                                                                                                                                                                           |

### Kisichofunikwa

- **Njia za media, embeddings na data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) hazifikii rejista kamwe. Hakuna
  ufichaji wa PII, ufichaji wa credential au daraja la modality linaloendeshwa hapo. Ukaguzi wao
  pekee ni middleware ya injection-guard ya zamani.
- **Majibu ya mtiririko** hayapati guardrails za baada ya simu: hakuna `pii-masker` au
  `credential-masker` ya baada ya simu, na hakuna kizuizi cha baada ya simu. Ni
  mabadiliko ya PII ya mtiririko pekee yanayotumika (wakati `PII_RESPONSE_SANITIZATION` imewashwa). Credential
  inayorudishwa kwenye jibu la mtiririko haifichwi.
- **Njia za kuzima dhidi ya middleware (kwa muundo):** middleware hutathmini
  injection ya prompt kwa wito wake yenyewe kwa `evaluatePromptInjection()`, bila
  kupitisha orodha yoyote ya kuzima inayodhibitiwa na mwitaji. Hali ya `block` ni
  mpaka wa lazima ambao uzimaji unaodhibitiwa na mwitaji hauwezi kuupita, ikiwa ni pamoja na kwenye njia za familia ya chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Kuzima
  `prompt-injection` hukuruka guardrail ya rejista pekee.

### Kinachoona jibu kabla ya hatua ya baada ya simu

Kwenye njia isiyo ya mtiririko, mpangilio ni: uchimbaji wa kumbukumbu → utekelezaji wa zana
zilizojengwa ndani → guardrails za baada ya simu → kutoka kwa kizuizi cha baada ya simu → hifadhi ya semantic-cache.

- **Uchimbaji wa kumbukumbu** na **utekelezaji wa zana** huona jibu kabla ya vizuizi vya baada ya mwito kuweza kuliandika upya au kulizuia. Tangu
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), uchimbaji wa
  kumbukumbu hupitisha maandishi yaliyochimbwa kwenye `sanitizePII` wakati
  `PII_RESPONSE_SANITIZATION` imewashwa (kwa utiririshaji na bila utiririshaji), lakini
  jibu ambalo baadaye huzuiwa baada ya mwito bado huwa limetolewa kwa kumbukumbu na
  zana.
- **Akiba ya kisemantiki** huhifadhi jibu baada ya mwito, kwa hivyo huhifadhi
  jibu lililoandikwa upya, na jibu lililozuiwa halihifadhiwi kamwe kwenye akiba. Maingizo ya akiba
  huwekewa funguo kulingana na kila ufunguo wa API.

## Usanidi

Vigeu vya mazingira vinavyosomwa na guardrails zilizojengwa ndani:

| Kigeu                                 | Inatumiwa na              | Athari                                                                                                              |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Weka `false` ili kuzima utambuzi kabisa.                                                                            |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Sera ya uingizaji: `warn`, `block`, au `log`. Thamani ya urithi `redact` haibadilishi maandishi ya uingizaji.       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Hali ya ulinzi wa uingizaji; pia bendera ya kipengele ya DB ambayo **inabatilisha** vigeu vya mazingira (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Ukali wa chini kabisa ambao `MODE=block` hukataa: `high` (chaguo-msingi), `medium`, au `low`.                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Jina mbadala la urithi kwa `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                       |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Wakati `true`, PII ya ombi hufichwa (bila kutegemea hali ya uingizaji).                                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Hudhibiti tabia ya kificha cha upande wa jibu.                                                                      |

Guardrails za Modality Bridge husoma usanidi wa wakati wa utekelezaji kutoka hifadhi ya mipangilio inayotegemea DB (`getSettings()`), si vigeu vya mazingira. Funguo za msingi za Vision ni `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na `modalityBridgeCacheMaxEntries`. Funguo za urithi `visionBridge*` zinakubalika tu kama hifadhi mbadala ya usomaji wa mzunguko mmoja iliyoandikwa kwenye nyaraka; uandishi wa dashibodi hutumia funguo za msingi. Chaguo-msingi na kitatuzi cha hifadhi mbadala viko katika `src/shared/constants/modalityBridgeDefaults.ts`, huku vibadala vya urithi vikihifadhiwa katika `src/shared/constants/visionBridgeDefaults.ts`.

Sauti hutumia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`. Sauti haina hifadhi mbadala ya funguo za urithi kwa sababu funguo hizi zilianzishwa na skema ya Modality Bridge.

Video hutumia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos`, na `modalityBridgeVideoTimeout`, pamoja na mipangilio ya pamoja ya `modalityBridgeCache*`. Imezimwa kwa chaguo-msingi kwa sababu FFmpeg/ffprobe ni vitegemezi vya uendeshaji vya hiari na uwekaji maelezo ya fremu huongeza ucheleweshaji na gharama ya modeli.

## Guardrails Maalum

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

Hatua:

1. Unda `src/lib/guardrails/myGuardrail.ts` inayorithi `BaseGuardrail`.
2. Tekeleza `preCall` na/au `postCall`.
3. Ama sajili wakati wa kuimport (sukuma kutoka `registerDefaultGuardrails`) au
   ita `guardrailRegistry.register(...)` wakati wa utekelezaji — rejista hubadilisha
   guardrail yoyote iliyotangulia yenye jina lilelile lililorekebishwa.
4. Ongeza majaribio chini ya `tests/unit/` (mifano iliyopo:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Upimaji

Tumia `resetGuardrailsForTests()` kati ya majaribio ili kuanza kutoka hali inayojulikana.
Pitisha `{ registerDefaults: false }` ili kuanza na rejista tupu na
usajili guardrails zinazojaribiwa pekee. Vision Bridge inakubali uingizaji wa
vitegemezi (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge hufichua
sehemu zinazolingana kwa mipangilio, uwezo, uteuzi wa modeli ya STT, ukaguzi wa
vyeti, na unukuzi wa maandishi. Kwa hivyo majaribio yanaweza kufanyia mtihani
mikondo yote miwili bila ufikiaji wa DB au mtandao.

## Tazama Pia

- `src/lib/guardrails/` — utekelezaji
- `src/shared/utils/inputSanitizer.ts` — kigunduzi cha pamoja kinachowezesha
  ufichaji wa prompt-injection na PII
- `src/shared/constants/visionBridgeDefaults.ts` — chaguo-msingi za Vision Bridge na
  orodha ya modeli za bridge ya kulazimishwa
- `src/shared/constants/modalityBridgeDefaults.ts` — chaguo-msingi za pamoja za utekelezaji za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — tabaka huru (circuit breaker, vipindi vya kupoa)
- `docs/reference/ENVIRONMENT.md` — marejeleo kamili ya vigeu vya mazingira

## Ufikiaji wa njia za injection-guard na red-team (Awamu 8 · Block D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) hushughulikia njia zote
zinazokubali maombisho ya mtumiaji. Inaheshimu `INJECTION_GUARD_MODE` (chaguo-msingi `warn` = andika kwenye kumbukumbu pekee;
`block` = hurudisha HTTP 400 `SECURITY_001`).

| Aina                 | Njia                                                                                                                                                 | Hali ya chaguo-msingi |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| Maandishi (yaliyopo) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                  |
| Uzalishaji           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                  |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                  |

Uchimbaji wa maandishi (`extractMessageContents`) hushughulikia `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kila usiku, `nightly-llm-security.yml`):** promptfoo huthibitisha kuwa kila njia huzuia
mkusanyiko wa OWASP-LLM ikiwa `INJECTION_GUARD_MODE=block`; garak huendesha uchunguzi (huruka bila siri).
`moderations` imejumuishwa kwa ajili ya uthabiti. Hali ya block ni mpaka wa lazima: `evaluatePromptInjection()`
hupuuza orodha ya kuzima kwa kila ombi ambayo middleware huipitisha, kwa hivyo `disabledGuardrails` haiwezi
**ku**iachia njia kutoka kwayo ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Mtiririko wa kazi wa kila usiku (`.github/workflows/nightly-llm-security.yml`, cron + uanzishaji wa
mkono) una kazi mbili:

- **`promptfoo-guard` (inayozuia)** — huendesha `promptfoo eval -c promptfooconfig.yaml`
  ikiwa na `INJECTION_GUARD_MODE=block`. Kila kisa cha ushindani (k.m. "ignore all
  previous instructions…", jailbreaks za mtindo wa DAN) huthibitisha kuwa jibu limebeba
  `error.code === "SECURITY_001"`, yaani guard ilikataa ombi hilo kweli.
- **`garak` (ya ushauri)** — huendesha garak `--probes promptinject,dan,leakreplay`
  dhidi ya mfano wa OmniRoute wa ndani (`http://localhost:20128/v1`). Inadhibitiwa na
  siri ya mtoa huduma (`PROMPTFOO_PROVIDER_KEY`); huruka kwa upole na huambatanishwa na
  `|| true`, kwa hivyo huripoti bila kufeli CI.

Ufikiaji wa kisaidizi cha guard (`createInjectionGuard` / `withInjectionGuard`)
unashughulikia kila njia ya `/v1` inayobeba maombisho; maandishi ya maombisho huchukuliwa kutoka
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` na
`extractMessageContents()` katika `src/shared/utils/inputSanitizer.ts`.
