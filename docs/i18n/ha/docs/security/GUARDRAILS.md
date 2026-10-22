# Guardrails (Hausa)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tushen gaskiya:** `src/lib/guardrails/`
> **Sabuntawa ta ƙarshe:** 2026-10-17 — v3.8.52 (an ƙara [Iyaka da iyakantawa](#coverage-and-limits):
> waɗanne hanyoyi da hanyoyin amsa hooks ɗin suke isa, haɗaɗɗun headers na kashewa (#16412), yanayin
> toshe injection a matsayin iyaka ta dole (#16413), da abin da ke ganin amsa kafin post-call)

Guardrails suna aiwatar da aminci, manufofi, da sauye-sauyen abun ciki a iyakar
da ke tsakanin OmniRoute da masu samarwa na upstream. Kowane guardrail na iya bincika (kuma
idan ana so ya ƙi, sauya, ko ƙara bayani ga) payloads na buƙata (`preCall`) da
amsoshin upstream (`postCall`).

Tsarin yana da halin **fail-open**: idan guardrail ya jefa kuskure yayin aiwatarwa, registry
yana yin rikodin kuskuren sannan ya ci gaba da guardrail na gaba maimakon ya gaza
buƙatar. Toshewa shawara ce da ake yanke a sarari (`block: true`), ba taɓa zama haɗari ba.
Keɓantacciyar guda ɗaya ita ce buƙatar da aka soke: idan an soke `signal` na mai kira,
guardrail da ya jefa kuskure zai sa a ƙi gudanar da hook maimakon a tsallake shi.

Hooks ɗin **ba sa** aiki a kan kowace hanya ko kowace amsa. Karanta
[Iyaka da iyakantawa](#coverage-and-limits) kafin dogaro da guardrail a matsayin
matakin tsaro.

## Ginannun Guardrails

Registry yana loda guardrails guda shida kai tsaye bisa tsarin fifiko lokacin import
(duba `registry.ts` → `registerDefaultGuardrails()`):

| Fifiko | Suna                | Mataki/matakai | Fayil                 |
| ------ | ------------------- | -------------- | --------------------- |
| `5`    | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`    | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`    | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`   | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`   | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`   | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ƙananan lambobin fifiko ne suke aiki **da farko**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Asalin model na GLM 5.3 da `glm-5.3-{low,high,max}` suna da takamaiman
metadata na registry/spec mai `supportsVision:false`. Nau'ikan GLM 5.3 Flash
suna ci gaba da kasancewa models masu native-vision. Hanyar `/v1/messages` ta Claude Code tana shiga
jerin guardrail na pre-call na `handleChat` da ake amfani da shi tare **kafin** fassarar
Claude-zuwa-OpenAI; dole ne a bayyana ko a sarrafa hotunan sakamakon tool na `Read`
da ke ciki kafin wannan fassarar ta ɗaga su zuwa abun cikin `image_url` na OpenAI (#17069).

Yana katse buƙatun da ke ɗauke da hotuna waɗanda aka nufa ga **models marasa vision**, sannan ko dai
ya sake tura buƙatar gaba ɗaya zuwa model mai iya vision ko ya maye gurbin sassan hoton
da bayanan rubutu da wani model na vision da za a iya saita shi ya samar kafin
kiran upstream. Wannan yana ba masu samarwa masu rubutu-kawai damar sarrafa
payloads masu salo da dama ba tare da mai amfani ya lura ba.

Tsarin gudana:

1. Tsallake idan model ɗin da aka nufa ya riga ya goyi bayan vision (sai dai idan yana cikin
   jerin tilasta-bridge na `isVisionBridgeForcedModel`).
2. Ciro sassan hoto ta hanyar `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), wanda ke miƙa aikin ga **haɗaɗɗen mai gano kafofin watsa labarai**
   `detectMediaParts()` da ke cikin `open-sse/utils/mediaParts.ts` — tushen
   gaskiya guda ɗaya da ake amfani da shi tare da combo compatibility filter.
   Ana iyakance cirewa ga siffofin da aka ba izini waɗanda `replaceImageParts` zai iya mayarwa
   wurinsu (yarjejeniyar extract↔replace): `image_url` na OpenAI, base64 na Anthropic
   mai `source.type:"base64"`, URL na Anthropic mai `source.type:"url"`, da Responses
   API `input_image`. Ana kuma cire hotuna masu dacewa da ke cikin
   `tool_result.content` na Claude Code da outputs na tools na Responses, sannan a
   maye gurbinsu a ainihin paths ɗinsu; siffofi masu nuna alama kawai na
   combo-filter ne kuma ba a cire su.
   Tsallake idan ba a sami ko ɗaya ba.
3. Warware config na runtime ta hanyar `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): sabbin keys na settings na `modalityBridge*`
   suna da rinjaye; tsoffin keys na `visionBridge*` suna ci gaba a matsayin **fallback na zagaye
   guda ɗaya** (lokacin rollback). Tsallake kafin duk wani zagayawa cikin kafofin watsa labarai idan
   an kashe bridge.
4. Mai zaɓin yanayi (`modalityBridgeVisionMode`, duba jadawalin da ke ƙasa) yana yanke shawarar
   sake turawa ko bayyana. Sake turawa yana dawo da `modifiedPayload` wanda `model`
   kawai aka sauya, tare da meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Hanyar bayyanawa: iyakance hotuna zuwa `maxImages`, haɗa prompt mai la'akari da aikin,
   duba cache na bayani, kira model na vision **a layi ɗaya**
   (`Promise.allSettled`), sannan saka sassan rubutu na `[Image N]: <description>` a
   wurarensu. Bayanin da ya gaza yana samar da `null`: ana adana ɗanyen hoton ga
   targets da ba a san su ba/masu iya vision (#4012), amma **tabbataccen direct
   target mai rubutu-kawai** ko combo marar vision zai sami takamaiman stub na rubutu
   `(unavailable — no vision-capable provider connected)` ga
   kowane hoton da ba a bayyana ba, ciki har da gazawar wani ɓangare da hotunan da suka wuce
   iyakar kiran bayani (#17069). Fallback na combo describe idan duk sun gaza da ake da shi
   yana nan daram (#8430).
6. Dawo da `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mai zaɓin yanayi (`modalityBridgeVisionMode`)

| Yanayi     | Tsoho | Halayya                                                                                                                                                                                                                                                                                                 |
| ---------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔     | Tsohuwar dabara ta hasashe, ba a taɓa ta ba (#6640/#7204): samfuran da ba combo ba/`auto/` suna karkata zuwa mafi kyawun samfurin gani sai dai idan samfurin asali ya riga yana da bayanan shaidar da za a iya amfani da su (a wannan yanayin sai a bayyana); ko da yaushe burin combo yana yin bayani. |
| `describe` |       | Koyaushe a bayyana — ana tsallake tubalin karkatarwa gaba ɗaya; samfurin da mai amfani ya zaɓa ne koyaushe yake ba da amsa.                                                                                                                                                                             |
| `reroute`  |       | Tilasta karkatarwa: ana tsallake kariyar riƙe-samfuri-mai-shaidar-aiki. Har yanzu kariyar shaidar **burin** karkatarwa tana aiki — idan babu burin gani da za a iya amfani da shi, gadar tana dakatarwa da kuskure bayyananne maimakon yin bayani ko aika hotuna kai tsaye zuwa burin rubutu-kawai.     |

Yanayin da aka tilasta suna yanke hanya **kafin** dabarar hasashen auto ta gudana; halayyar `auto`
daidai take byte-da-byte da kariyar kafin-PR-1.

#### Iyakokin API key (`visionBridgeKeyScope.ts`)

Lokacin da API key na mai kira ya taƙaita `allowedConnections`, tafkunan ƙididdiga
(`allowedQuotas`) ko samfura (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), gadar tana zaɓar
samfuran karkatarwa da bayani waɗanda key ɗin zai iya amfani da su kawai, a kan haɗin da key ɗin zai iya
amfani da su. Daga nan kiran bayani koyaushe yana bi ta madaukin-kansa na OmniRoute tare da
header na `x-omniroute-self-loop-key-id`, domin buƙatar chat da ke karɓa
ta sake aiwatar da manufar haɗi da samfurin wannan key. `enforceApiKeyPolicy()`
yana mutunta wannan header ne kawai tare da bearer na madaukin-kansa, don haka zai iya
ƙuntata damar shiga kawai, kuma ana ƙin id da ba a iya warwarewa.

Idan ba a yarda wa key ɗin da wani samfurin gani ba, **tabbataccen burin rubutu-kawai**
yana ƙin buƙatar hoton a cikin gida da HTTP 400 bayyananne maimakon
tura bytes na hoton zuwa upstream marar ikon sarrafa su (#17069). Ga burin da
ikon gani bai tabbata ba ko yake na asali, hanyar bayani tana riƙe halayyar
fail-open da ta gabata (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Buƙatun da ba su da key, da keys marasa waɗannan ƙuntatawa, suna aiki daidai kamar
da.

#### Umarnin bayani mai la'akari da aiki (`modalityBridgeVisionTaskAware`)

Tsoho **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) yana ƙara
rubutun **saƙon mai amfani na ƙarshe** (an taƙaita zuwa haruffa 500) zuwa ainihin
umarnin bayani, yana karkatar da bayanin zuwa ga abin da mai amfani ya nema a zahiri
(tsarin codex-vision-proxy) tare da neman samfurin gani ya rubuta rubutun da ake iya gani.
Idan an kashe flag ɗin — ko babu rubutun mai amfani — ana amfani da ainihin umarnin ba tare da canji ba.

Buƙatar madaukin-kansa na bayani mai dacewa da OpenAI (`callVisionModelSingle()`
a cikin `visionBridgeHelpers.ts`) koyaushe tana neman `image_url.detail: "high"` —
ba tare da wani sharaɗi ba, ga kowane mai kira/mai samarwa, ba a ɗaure shi da wata alama daga abokin ciniki ba.
Samfurin bayani mara zurfi yana rage ingancin OCR musamman ga aikin
kwafin rubutu da wannan umarni ke nema, saboda haka kiran bayani kansa koyaushe yana neman cikakken
bayani ba tare da la'akari da matakin cikakken bayani da asalin buƙatar mai shigowa ta yi amfani da shi ba. Wannan
yana shafar jikin buƙatar bayani ta ciki kawai; ba ya canza yadda
OmniRoute ke tura `image_url.detail` na mai kira a buƙatar farko —
ana amfani da wannan tsohon ƙima dabam, kuma ga abokan cinikin OpenCode da aka gano kawai, a cikin
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Reshen
tsarin waya na Anthropic na madaukin-kansa na bayani ba shi da filin `detail`
kuma ko wane tsohon ƙima ba ya shafarsa.

#### Iyakar fitowar bayani (`modalityBridgeVisionMaxChars`)

| Key                            | Tsoho | Kewayo           |
| ------------------------------ | ----- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` ko 100–50000 |

`0` (tsoho) yana nufin **babu iyaka** — bayanin da
`callVisionModel()` ya dawo da shi ana wuce shi ba tare da gyara ba, don kiyaye halayyar da ake da ita.
Duk wata ƙima a kewayon 100–50000 tana datse bayanin tare da
ƙarin `…` kafin a saka shi baya a matsayin `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` a cikin `src/lib/guardrails/visionBridge.ts`).
Ƙara wannan ga ayyukan OCR masu buƙatar cikakken bayani inda samfurin na gaba yake buƙatar
cikakken kwafi; rage shi don iyakance amfani da token a kan samfuran gani masu yawan magana.
Filin dashboard yana cikin sashen Advanced na shafin Vision
(`modality-bridge-max-chars` a cikin `ModalityBridgeVisionTab.tsx`) kuma yana ɗaga duk
ƙimar da ke tsakanin 1 da 99 zuwa mafi ƙarancin 100 yayin da yake barin `0`
da aka sa kai tsaye ba tare da taɓawa ba — `0` halastacciyar ƙimar Zod ce da kanta
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ba kawai
tsohuwar ƙimar "ba a saita ba" ba.

#### Ma'ajiyar bayanin wucin gadi (`modalityBridge/bridgeCache.ts`)

Ma'ajiyar LRU + TTL ta cikin memory don fitowar bayani, wadda dukkan process ke amfani da ita.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` tare da
tsarin length-prefix (babu karo a iyakokin filaye). Bangaren samfurin shi ne
**saitaccen** samfurin gada, ba samfurin da ya ba da amsa a zahiri ba —
`callVisionModel` na iya komawa ga wani samfurin a ciki, kuma yin key bisa kowane yunƙuri zai
wargaza ma'ajiyar. Ba a taɓa adana bayanan bayanin da ya gaza ba. Saituna:

| Key                             | Tsoho  | Kewayo  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Daidaita hoton nesa (self-loop describe/base64 fetch)

Lokacin da bridge ɗin ya debo hoton **nesa** da kansa — kiran kansa na Anthropic describe
da juyawar base64 ta claude-wire-format
(`ensureBase64ImagesForClaudeWire`), dukansu ta hanyar
`fetchRemoteImageAsDataUri()` a cikin `visionBridgeHelpers.ts` — ana tura data
URI da aka samu ta cikin `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kafin a saka shi cikin buƙatar vision-model.
Ana rage girman hotunan da suka yi girma fiye da kima zuwa **2048px a gefen da ya fi tsawo** (daidai da
iyakar rage girman da OpenAI/Anthropic suka riga suka yi a ɓangaren uwar garke), wanda ke rage
bytes/latency na lodawa ba tare da canza abin da vision model ke gani ba. Rage girman
yana amfani da `sharp`, wanda ake lodawa ta dynamic import: a kan dandamalin da native
binary ɗinsa ya kasa loduwa, `normalizeDataUri()` **ba ya taɓa jefa kuskure** — yana komawa
ga wucewar bytes na asali kai tsaye, don haka hanyar describe/base64-conversion
koyaushe tana ci gaba da aiki. Haka kuma ana barin bytes waɗanda ba na hoto ba (fetch da bai dawo da
hoton da za a iya fassara ba) su wuce ba tare da canji ba. Wannan daidaitawa
ta taƙaitu ne ga hotunan da bridge ɗin ya debo don kiran kansa — ba a taɓa
amfani da ita ga raw passthrough payload na mai kira ba, bisa ƙa'idar
canji sai da izinin zaɓi kawai (Hard Rule #20).

#### Tsarin settings + migration

Sabbin maɓallan `modalityBridge*` ana tantance su da Zod a cikin `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, rukunin `modalityBridgeCache*` guda uku, da kuma
rukunin `modalityBridgeAudio*` da Audio Bridge ke amfani da shi. Migration
`141_modality_bridge_settings.sql` yana kwafe ƙimomin tsoffin
`visionBridge*` zuwa sabbin maɓallan da suka dace (idempotent ne, kuma ba ya taɓa maye gurbin
ƙimar `modalityBridge*` da operator ya saita); ana ci gaba da karɓar tsoffin maɓallan a matsayin
madadin karantawa na tsawon zagayen release guda ɗaya.

#### Header na bayyana aiki + stats

Amsoshin da describe ya sauya suna ɗauke da
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(wanda `buildModalityBridgeHeader()` ke ginawa a cikin `modalityBridge/bridgeStats.ts`,
kuma `withModalityBridgeHeader()` ke saka shi a cikin `src/sse/handlers/chatHelpers.ts`).
Buƙatun da aka sauya musu hanya ba sa samun **wani** header — ba a taɓa payload ɗin ba, kuma ana iya
ganin sauya model ɗin a cikin filin `model` na jikin amsa.

`GET /api/modality-bridge/stats` (management auth, mataki ɗaya da
`GET /api/settings`) yana dawo da counters na kowane modality da ke cikin memory
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` na `vision`, `audio`, da
`video`. `averageLatencyMs` yana amfani da `latencySamples`, ba duk attempts ba, a matsayin
maƙasudin rabawa; aikin da ba shi da timing ba ya ƙirƙiro sample na sifili-millisecond
na bogi. `bridged` ya ci gaba da kasancewa alias mai dacewa da tsoffin nau'uka don conversions
da suka yi nasara; attempts da suka gaza ba sa ƙara shi.
Counters suna komawa sifili idan process ya sake farawa bisa tsari
(telemetry ne, ba accounting ba).

#### Tsarin dashboard

Keɓaɓɓen shafin dashboard ɗin shi ne
`/dashboard/settings/modality-bridge`. Tabs ɗinsa na `Vision`, `Audio`,
da `Video` waɗanda ake iya kaiwa kai tsaye ta URL suna adana query parameters yayin sauya ƙimar `tab`.
Tab ɗin Vision yana ba da damar kunna fasalin, zaɓin mode, zaɓin model (har da automatic
default), prompting mai lura da task, timeout/image/description-length/cache
limits na ci-gaba, runtime
counters, da sample request mai kariya. Tab ɗin Audio ma yana aiki: yana ba da
damar kunna fasalin, mai zaɓar model na STT kawai tare da Auto, timeout/max-clip limits, audio
counters, da gwajin sample na `input_audio`. Tab ɗin Video yana aiki: yana bayar da rahoton
yanayin runtime na FFmpeg/ffprobe — ɗaya daga cikin bayyanannun yanayin UI guda huɗu (`unknown` yayin
da probe ke gudana ko bai iya kammalawa ba, `restricted` a kan dashboard host da ba loopback ba
inda ake tsallake probe a ɓangaren client, `unavailable` bayan an yi probe kuma an tabbatar babu shi,
ko `available` tare da nau'ikan FFmpeg/ffprobe) — yana adana
enable/model/frame/video/timeout limits, yana tace mai zaɓar model zuwa models masu iya vision,
kuma yana nuna video counters.

Tsohon katin Vision Bridge da ke ƙarƙashin AI settings yanzu compatibility link ne zuwa
sabon shafin; ba ya ƙara riƙe kwafi na biyu na form ɗin. Media Providers kuma
yana haɗa workflows na Image-to-Text da Speech-to-Text zuwa tabs na Modality
Bridge da suka dace ba tare da cire playground na Speech-to-Text da ke akwai ba.

**Tsallake admission na self-loop:** lokacin da kiran describe ya bi ta
self-loop na `/v1` na OmniRoute (non-standard provider model), sub-request ɗin yana aika
`x-omniroute-admission-bypass: internal` kuma ana tabbatar da shi ta amfani da self-loop
credential da aka warware — local `sk_omniroute` sentinel a local mode, ko
env key na `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` da operator ya saita (#1350), domin
deployments masu `REQUIRE_API_KEY=true` su ma su iya gudanar da kiran describe. Ana
amincewa da bypass ɗin ne kawai ga waɗannan takamaiman credentials, don haka external clients ba za su iya amfani da
header ɗin wajen tsallake admission ba.

Legacy defaults suna cikin `src/shared/constants/visionBridgeDefaults.ts`; sabbin
mode/task-aware/cache defaults da settings resolver suna cikin
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ɗin yana samar da
constructor option na `deps` domin tests su iya shigar da implementations na bogi na `getSettings` da
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Yana katse chat requests masu ɗauke da audio kafin su isa ga target wanda ba a
san yana karɓar audio input ba. Ba ya taɓa sauya hanyar chat request ɗin: ana
transcribe audio parts ta existing OpenAI-compatible multipart endpoint, sannan
chat model da aka zaɓa ya ci gaba da text transcripts.

Tsari:

1. A tantance `supportsAudio` ta hanyar `getResolvedModelCapabilities()`. Bayanan metadata na
   provider-registry da aka bayyana a sarari su ne ke da fifiko, sai metadata na tsayayyen
   samfuri, sannan `modalities_input` da aka daidaita. Jerin shigarwa da aka ayyana wanda babu
   `audio` a cikinsa yana zama `false`; idan babu wata hujjar iyawa, yana zama `null`. Duka
   `false` da `null` suna kunna gada mai taka-tsantsan, yayin da `true` yake tsallake ta.
2. A tantance saitunan `modalityBridgeAudio*` sannan a fitar da sassan odiyo na matakin-sama
   waɗanda za a iya haɗawa daga kowane saƙo ta hanyar mai ganowa na bai-ɗaya `detectMediaParts()`.
   Tsarukan watsawa da ake tallafawa su ne OpenAI `input_audio`, `audio_url`, da
   `source.media_type: "audio/*"`. Ana gano odiyon da ke ciki don zaɓin hanya, amma hanyar
   haɗawa ba ta cire shi. Ana iyakance aikin da `modalityBridgeAudioMaxClips`;
   sassan da ke biyo baya ba a taɓa su.
3. A mutunta `provider/model` da aka saita, ko kuma a bar `selectAudioBridgeModel()` ya bi
   `AUDIO_TRANSCRIPTION_PROVIDERS` bisa tsayayyen tsarin katalogi ya zaɓi samfurin farko
   wanda yake da sahihin bayanin shaidar mai bayarwa mai aiki.
4. `callAudioTranscription()` yana sauya odiyon base64/data-URI zuwa `file` mai ɓangarori
   da yawa, ko ya sauke `audio_url` na nesa ta hanyar kariyar fitarwa ta jama'a-kawai
   tare da ɗaure DNS da iyakar 25 MB. Sannan yana aika fayil ɗin da samfurin da aka zaɓa
   ta POST zuwa madaukin-kai na gida `/v1/audio/transcriptions`, tare da tabbatarwa ta
   `resolveSelfLoopBearer()`. Hanyar rubutowar sauti da ke akwai tana aiwatar da binciken
   bayanan shaida na yau da kullum, sarrafa lokacin-jira/iyakar ƙima, da tura aiki ga
   mai bayarwa.
5. Kiran da suka yi nasara suna maye gurbin sassansu da `[Audio N]: <transcript>`. Kiran
   suna gudana da `Promise.allSettled`: gazawar guda ɗaya tana kiyaye asalin wannan
   ɓangaren odiyo (yarjejeniyar #4012). Idan duk kira sun gaza kuma an tabbatar cewa
   abin da ake nufi yana da `supportsAudio === false`, sassan suna zama
   `[Audio N]: (unavailable — no STT provider connected)` (yarjejeniyar #8430). Ga
   abin da ba a san matsayinsa ba (`null`), sakamakon gazawar duka ba ya canzawa. Abin
   da aka tabbatar na rubutu-kawai wanda ba shi da sahihin bayanin shaidar STT yana karɓar
   wannan fayyataccen rubutun madadi ba tare da yin kiran hanyar sadarwa ba.

Rubutowar sauti da ta yi nasara tana amfani da ma'ajiyar LRU/TTL ta Modality Bridge
mai aiki a duk faɗin tsari. Maɓallin yana haɗa madogarar odiyo, tsayayyen lakabin aiki
`audio-transcription`, da samfurin STT da aka zaɓa; ba a taɓa adana gazawa a ma'ajiya.
Ƙoƙarin odiyo yana sabunta ƙididdigun bai-ɗaya `bridged`, `cacheHits`, `failures`, da
`lastUsedAt`. Amsoshin da aka sauya suna ɗauke da
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; buƙatun da ba
a taɓa ba ba sa karɓar sashen Audio Bridge.

Saitunan lokacin aiki suna samun tushe daga DB kuma Zod yana tantance su:

| Maɓalli                       | Tsoho   | Iyaka                 |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Ta atomatik ko STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Har yanzu ana sarrafa ma'ajiyar bai-ɗaya ta `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, da `modalityBridgeCacheMaxEntries`.

### Gadar Bidiyo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Tana katse sassan bidiyo na matakin-sama a cikin `messages` na Chat Completions da
`input` na Responses API kafin a kira abin da ake nufi wanda ba a san yana da tallafin
bidiyo na asali ba. Tsarukan da ake tallafawa su ne `input_video`, `video_url`,
`video_source`, URLs na HTTPS, da URIs na bayanai `data:video/*;base64,...`.
Ba a ɗaukar sunayen fayiloli kaɗai a cikin rubutu a matsayin bidiyo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ne ke kula da bi ta cikin buƙata,
binciken iyawa/manufa, tattarawa na kowane buƙata, da nauyin bayanan amsa.
Aikin kowane bidiyo — samo shi, ma'ajiyar cikakken sakamako, bayyana jerin firam
(wanda ke haɗa duk rubutowar odiyo da mai kira ya ayyana), da ma'aunai/sokewa/tsaftacewa
na kowane yunƙuri — an ɓoye shi a bayan `processVideoPart` cikin
`videoBridgePipeline.ts`, wanda ake kira sau ɗaya ga kowane ɓangaren bidiyo a cikin
madaukin `preCall`. Wannan module ɗin kuma yana ayyana fayyatattun iyakokin tashar
`VideoMediaBrokerPort` (samo bytes da fitar da firam ɗin da aka ɗauki samfuri),
`VideoAudioTranscriptionPort` (haɗa rubutowar odiyo da mai kira ya ayyana da rubutun
bayanan firam ɗin da aka ɗauki samfuri), da `VideoDrilldownPort` (iyakar adana bayanan
binciken zurfin firam; har yanzu ba a haɗa ta cikin `processVideoPart` ba — hanyar
dabam `/api/modality-bridge/video/drilldown` ce kaɗai ke rubuta bayanan binciken zurfi
a yau).

Hanyar buƙatar jama'a `/v1` ba ta taɓa shigo da ko kiran ƙaramin tsari. Ana sauke
bidiyoyin nesa ƙarƙashin iyakar 50 MiB; bidiyoyin base64 na cikin layi suna da
iyakar decoded mai taka-tsantsan ta 36 MiB ga kowane bidiyo domin kundin
samfuri/saƙonni/tsara ya ci gaba da kasancewa cikin iyakar karɓar buƙatar JSON ta
jama'a mai 50 MiB. Ana bincika tsawon bayanin cikin layi da ƙiyasin girman decoded
kafin ware ƙwaƙwalwa. Ana buƙatar HTTPS a URL na nesa na farko da kowane karkatarwa,
ta amfani da kariyar fitarwa ta jama'a-kawai da ake da ita tare da ɗaure DNS. Daga nan
bytes ɗin suna ketare ainihin iyakar dillalin ciki
`POST /api/modality-bridge/video/extract`. Wannan hanyar duka `LOCAL_ONLY` ce kuma
`SPAWN_CAPABLE` ce, tana karɓar buƙata mai tabbatarwar kowane tsari daga amintaccen
loopback kawai, kuma ba ta taɓa karɓar URL, hanyar tsarin fayil, fayil mai aiwatuwa,
ko jerin hujjoji ba. Tsarin iyakar girman body na API da mai karanta body a hankali
na handler kowannensu yana tilasta iyakar shigarwar dillali ta 50 MiB da kansa.
Layinsa mai iyaka yana gudanar da fitarwa guda ɗaya a lokaci, yana ba da damar
ayyuka huɗu masu jiran aiki, kuma yana iyakance shigarwar da ke jira zuwa 100 MiB.

A cikin broker, `ffprobe` yana karanta fayil na gida mai zaman kansa; jerin tsayayyun tsarin da aka amince da su ba ya haɗa da tsarin playlist da manifest. Ga kwantenonin dangin MOV da aka amince da su, nassoshin bayanan MOV na waje suna ci gaba da kasancewa a kashe ta tsohuwa, kuma umarnin da aka kayyade ba ya kunna su. Dukansu `ffprobe` da `ffmpeg` suna amfani da jerin ƙa'idojin sadarwa da aka amince da su na `file` kawai, thread guda, tsayayyun jerin hujjoji, ba tare da shell ba, kuma ana gano fayilolin aiwatarwa daga `PATH`. Cover stream na attached-picture ba su cancanci zama 'yan takarar da za a kunna ba. Dole ne duk stream ɗin da za a kunna su cika iyakokin, kuma ana fifita stream na tsoho da aka ayyana a sarari kafin komawa ga mafi ƙarancin index ta hanya mai maimaituwa. An iyakance bidiyoyi zuwa daƙiƙa 600, pixel 8,192 a kowace fuska, da pixel na tushe 33,554,432. FFmpeg yana ɗaukar samfurin frame na JPEG 1–16 daga tsakiyar lokuta, yana rage tsayin gefen mafi tsawo zuwa iyakar pixel 1,024 ba tare da ƙara girman ƙananan bayanai ba, kuma ba ya taɓa karɓar URL. Sampling yana kasancewa `uniform` ta tsohuwa. Manufofin zaɓi na `scene_aware` da na gwaji na `segment_aware` suna yin ƙarin zagayen FFmpeg tsayayye guda ɗaya kan stream na gida da aka riga aka tabbatar, suna zaɓar timestamps na scene na `showinfo` masu iyaka, sannan su koma ta hanya mai maimaituwa zuwa matsakaitan lokutan uniform iri ɗaya idan detector ya gaza, lokaci ya ƙare, fitarwa ta lalace, ko jerin 'yan takara ya kasance fanko. Yanayin segment-aware yana rarraba samfuran midpoint daidai gwargwadon tsawon scene interval da aka tabbatar; an yi bayanin shaidar segment-aware da halayyar fallback a ƙasa. Ana amfani da ƙaƙƙarfan iyakar frame 16 bayan zaɓi a kowace manufa. Idan buƙatar scene-aware tana da kasafin frame guda ɗaya kawai, tana amfani da uniform midpoint na cikakken bidiyo mai aiki ko focus window, sannan ta bayar da rahoton `policyEffective: uniform`: zaɓaɓɓen scene frame guda ɗaya ba zai iya kiyaye ƙarshen lokaci biyu ba. Mai kira zai iya bayar da finite focus window (`start`/`end` seconds) a zaɓe; ana daidaita iyakoki zuwa tsawon media, ana ƙin windows da aka juya ko waɗanda ba finite ba, kuma ana aiwatar da duk manufofin sampling ne kawai cikin interval da aka daidaita. Ana haɗa window da aka samu cikin metadata na sampling da kuma cikin prefix na bayanin da ba a amince da shi ba domin models na gaba su iya bambance wani yanki da aka mayar da hankali a kai daga cikakken timeline.

Mayar da hankalin semantic caption wani saitin daban ne da ake bayyana a sarari. Yanayin nazari na tsoho `full` yana kiyaye frame prompt ɗin da ake da shi kuma ba ya taɓa tura rubutun buƙata zuwa caption model. A yanayin `focused`, bridge yana karanta sabon `text`/`input_text` kawai da ba fanko ba wanda mai amfani ya rubuta daga container ɗin Chat ko Responses guda ɗaya, yana daidaita shi zuwa NFC, yana haɗa control characters da whitespace, sannan yana iyakance shi zuwa Unicode code points 500. Sakamako marar komai zai koma ga ainihin prompt na `full`. Ana serialize hint mai amfani a matsayin JSON cikin keɓantaccen untrusted-user-context block kuma yana iya fifita bayanan da za a iya gani kawai; ba zai iya soke gargaɗi na daban da ke hana bin umarnin da ake gani ko ji a cikin media ba. Textual focus ba ya taɓa hasashen `start`/`end` ko sauya temporal sampler.

#### Shaidar sassa ta FU-07

`segment_aware` yana amfani da bounded pre-analysis pass guda ɗaya kan video stream na gida da aka riga aka tabbatar. Tsayayyen filter chain yana fara da rage faɗi zuwa iyakar pixel 320, yana gano sauye-sauyen scene da frozen intervals, sannan yana ɗaukar samfurin frame 1 a kowace daƙiƙa domin blur, average luma, da spatial/temporal information. An iyakance pass ɗin zuwa structural samples 600, FFmpeg/filter thread guda ɗaya, jerin ƙa'idojin sadarwa na `file` kawai da jerin container da aka amince da su iri ɗaya, iyakar process-output ta 1 MiB, da iyakar daƙiƙa 30 cikin shared abort/deadline na broker. Ba ya taɓa karɓar command, filter, path, ko URL daga buƙatar.

Structural values ɗin hujjojin sampling ne masu maimaituwa, ba semantic video understanding ba. Ba sa hasashen subjects, actions, captions, speech, ko user intent. Iyakokin scene da freeze suna samar da segments; freeze coverage, blur, exposure, spatial detail, da temporal change kawai suke tasiri kan yadda ake rarraba kasafin frame 1–16 da ake da shi. Ana iyakance segment da ya daskare gaba ɗaya zuwa frame guda ɗaya, yayin da segments marasa daskarewa suke fafatawa kan ragowar kasafin. Idan boundaries sun fi frames yawa, ana kiyaye uniform timeline coverage domin saurin cuts na farko kada su ɓoye dogon segment na ƙarshe. Ana haɗa scene boundaries da ke cikin resolution na nazarin daƙiƙa 1 daga freeze boundary.

Rashin filters, hujjoji da suka lalace/waɗanda babu komai a cikinsu, kuskuren detector, ko bounded pre-analysis timeout suna fail open zuwa ainihin uniform midpoint policy. Caller abort ko broker deadline ba sa fail open: suna dakatar da subprocess da ke gudana, suna hana frame extraction na gaba, sannan ana cire private temporary tree a cikin `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` yana samar da deterministic real FFmpeg fixtures domin tanadin caption-call bayan post-dedup, rarraba kasafin dense-motion, shaidar blur/exposure/SI-TI, rapid cuts masu dogon tail, da gradual-fade false positives. Yana rubuta wall time na pre-analysis kuma, idan akwai `/usr/bin/time`, child CPU da peak RSS. Binciken ingancinsa structural oracles ne kawai. Ingancin ainihin caption-model yana ci gaba da kasancewa `HOLD` saboda wannan harness ba shi da authorized endpoint ko frozen judge. Tanadin kuɗi ma yana ci gaba da kasancewa `HOLD` sai dai idan `--caption-cost-per-call-usd` ya samar da bayyanannen ƙididdigar kuɗin kowane kira mai ƙima tabbatacciya; script ɗin ba ya ƙirƙirar ko ɗaya daga cikin sakamakon biyu.

Kowane frame an iyakance shi zuwa 4 MiB, jimillar dukkan raw frames zuwa 23 MiB, sannan martanin broker da aka serialized zuwa 32 MiB. Ana cire kundin adireshin wucin-gadi mai zaman kansa a cikin `finally`. OmniRoute ba ya haɗa FFmpeg a ciki kuma ba ya karɓar hanyar executable ta musamman. Kafin samar da caption, bridge ɗin yana aiwatar da matakin cire maimaituwar gani cikin taka-tsantsan: ana rage kowane JPEG zuwa buffer na grayscale mai 16×16 sannan a kwatanta shi kawai da frame na ƙarshe da aka riƙe. Idan kasafin caption da aka nema ya wuce frame ɗaya, extraction yana samar da iyakantaccen candidate pool wanda bai wuce ninkin wannan kasafi biyu ba, kuma bai taɓa wuce frames 16 ba. Ana amfani da iyakar da aka nema ne kawai bayan cire maimaituwa, tare da kiyaye candidates na farko da na ƙarshe da aka zaɓa yayin rage adadin ƙarshe idan kasafin ya kai aƙalla biyu. Manufofin mai sigar
`grayscale-16x16-mean-cells-v2` yana amfani da mafi girma tsakanin bambancin matsakaicin luma da rabon thumbnail cells waɗanda normalized delta ɗinsu ya kai aƙalla 0.05. Threshold na duplicate shi ne constant 0.04, wanda aka zaɓa domin sauƙin hasashe maimakon a bayyana shi a matsayin saitin runtime. Wannan ƙarin siginar high-contrast yana kiyaye ƙananan motsi da sauye-sauyen rubutun da ake iya gani waɗanda kwatantawar mean kaɗai za ta iya ɓoyewa. Kurakuran comparator ko decoder suna barin aikin ya ci gaba kuma suna kiyaye coverage. Metadata na fitarwa yana bambance candidates da aka ciro, frames da aka yi amfani da su cikin nasara, da visual duplicates da aka cire.

Wani sashen bidiyo da aka yi masa alama a sarari na iya neman contact sheet mai timestamps. Bridge ɗin yana gina grid na JPEG mai columns da ba su wuce 4 ba da frames da ba su wuce 16 ba. Kowane cell mai pixels 512 yana ƙona timestamp na tushensa cikin bottom band mai high-contrast, yayin da timestamps iri ɗaya suke ci gaba da kasancewa a textual metadata domin haɗawa da audit a matakai na gaba. Cikakken JPEG yana ci gaba da kasancewa ƙarƙashin iyakar 32 MiB. Idan `sharp` ba zai iya decode ko compose grid ɗin ba, bridge ɗin yana komawa ga JPEG frames ɗin daban-daban; har yanzu katsewar client tana yaduwa ta cikin aikin sheet ɗin.

An ware shaidar promotion da gangan daga synthetic composition microbenchmark. `scripts/perf/video-bridge-contact-sheet-eval.ts` yana ayyana A/B harness mai schema-version domin ainihin vision models masu dacewa da OpenAI. Yana auna tokens da provider ya ruwaito, end-to-end wall latency (har da sheet composition), adadin model calls, da kiyaye facts da manifest ya ayyana. Ba a rubuta raw model responses cikin report ɗin; SHA-256 digests da matched fact IDs kaɗai ake riƙewa. Harness ɗin ba ya yin network call ko paid model call sai an wuce da `--execute-real` kuma an saita `--model`, `OMNIROUTE_BASE_URL`, da `OMNIROUTE_API_KEY`. Idan babu wannan explicit real run, machine-readable verdict ɗinsa yana ci gaba da zama `HOLD`; synthetic payload/call-count measurements kaɗai ba shaidar promotion ba ce.

Masu kira na iya haɗa optional `transcript.cues` array zuwa sashen bidiyo mai goyon baya idan sun riga suna da aligned text. Dole ne kowane cue ya ƙunshi `text`, finite `start`/`end` interval da ke cikin duration da aka probe, da `source` da ke cikin whitelist (`client`, `embedded`, ko `audio-bridge`); `confidence` yana komawa `1` ta tsohuwa kuma dole ne ya kasance tsakanin `0` da `1`. Ana haɗe exact duplicate cues su zama ɗaya. OmniRoute ba ya taɓa fara transcription daga wannan metadata: ana kwafe cues da aka tabbatar zuwa sakamakon da aka bayyana tare da source, confidence, da interval, sannan a nuna su a matsayin untrusted observations tare da frame captions. Ana ƙin rubutun da ba ingantacce ba, wanda ya fita daga range, ko wanda ba shi da provenance maimakon a gauraya shi cikin caption stream. Duk request-body transcript channels biyun suna normalize provenance da aka kawo zuwa `client`, har da labels na `embedded` ko `audio-bridge` da mai aikawa ya ayyana da kansa. Server-owned adapter kaɗai ne zai iya sanya waɗannan trusted labels ta hanyar code-only `trustedSource` argument; request JSON field ba zai iya isa ga wannan argument ba. Transcript text yana ci gaba da zama untrusted media-derived content, ba tare da la’akari da provenance ɗinsa ba, kuma bai kamata ya taɓa ƙayyade authorization ba.

Advanced caller na iya samar da `audioTranscript` track domin bidiyon guda; ana ɗaukarsa a matsayin rubutun da client ya samar, ba shaidar server transcription ba. Fusion seam yana gudanar da visual da audio observations ƙarƙashin deadline da abort signal guda, yana jeranta su a kan common timeline, yana haɗe exact duplicates su zama ɗaya, sannan yana ruwaito partial result idan gefe ɗaya kawai ya yi nasara. `audioTranscript` mara inganci yana komawa ga wannan partial result — ana riƙe visual description sannan audio branch ya rubuta sanitized failure code — maimakon a sa dukan bidiyon ya gaza. Ana kiyaye availability na kowane branch, partial flag, da sanitized failure codes a cikin sakamakon da aka bayyana, a cikin guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), a cikin result-cache metadata, da kuma a cikin bridge fusion counters. Default Video Bridge path ba ya kiran speech-to-text ko sauke kwafin media na biyu; idan babu wannan explicit track, yana ci gaba da zama video-only.

**Riƙe kwafin magana (#12150 P1).** Wannan yana aiki ta atomatik duk lokacin da
Video Bridge (wanda shi ma sai an zaɓi amfani da shi) ya samar da alamar kwafin magana — babu wata
alama ta daban don riƙewa. Lokacin da buƙata ta samar da kowace alamar kwafin magana (wani
`transcript` da mai kira ya ayyana ko wani `audioTranscript` da aka haɗa), tsarin kariya yana yi mata alamar
`videoBridgeObserved` sannan ya samar da kwafin inuwar bayanin bidiyon da aka ɓoye muhimman bayanansa —
wato samarwa iri ɗaya inda ake maye gurbin jikin rubutun kowace alama da
`[redacted-video-transcript]`, ta hanyar sauya filin alamar mai tsari
kafin a haɗa zaren rubutun (ba ta hanyar tantance shimfiɗaɗɗen rubutun ba, saboda haka babu wani abun cikin alama —
mai cutarwa ko na yau da kullum, har da jikin da ke ɗauke da `]` kamar
`[inaudible]`/`[music]` — da zai tsira). Jikin buƙatar rajistar kira da ake adanawa yana musanya
kowane ɓangaren rubutu da aka samo daga bidiyo da wannan inuwar da aka ɓoye bayananta, ta hanyar daidaita
abun ciki; ana sake karanta anga ta `fullText` daga cikakken sakamakon tsarin kariya
na kafin kira, don haka daidaitawar tana ci gaba da yin nasara bayan tsarin kariya na gaba a jerin
(masu ɓoye PII da bayanan shaida, fifiko 10/95) sun sake rubuta bayanin a wurinsa da kuma
bayan shigar da umarnin-tsari/miƙa-aiki/Memory ya sake tsara jerin saƙonni. Jikin
da ake aikawa sama zuwa samfurin ba ya canzawa. Buƙatar da aka lura da ita kuma ba ta cika
Memory mai ɗorewa da komai (ana tsallake fitar da bayanai daga buƙata da amsa),
don haka amsar samfurin ba za ta iya maimaita rubutun kwafin magana cikin Memory ba.

**Filayen bidiyo marasa sarrafawa (#12430).** Lokacin da aka kunna gadar kuma ba a san ko akwai goyon bayan bidiyo na asali ba ko kuma babu shi, ayyanannun filayen `transcript`/`audioTranscript` su ma suna kunna `videoBridgeObserved`, ko da bayan gazawar bayani ko iyakar `maxVideos`. `null` da zaren rubutu marasa komai suna ƙidayuwa; filayen da babu su da metadata wanda ba na bidiyo ba ba sa ƙidayuwa. Kwafe da aka riƙe suna ɓoye waɗannan filayen ko kuma su bar buƙatar gaba ɗaya, sannan ana kauce wa caches/Memory.

A waɗannan hanyoyin madadin, ingantattun alamomin mai kira suna zama ɓangarorin `text`/`input_text`
da ake goyon baya maimakon filayen mai samarwa marasa ƙa'ida. Duk waƙoƙin biyu da buƙatar ta bayar
suna ci gaba da zama bayanan lura na `client` marasa aminci, tare da gargaɗi a sarari cewa ba a
bayyana bidiyon ba kuma ba a tabbatar da tambarin lokuta da kafofin watsa labaran ba. Kasafin
alamu 256/64-KiB gaba ɗaya da na kowace alama da ake da su suna aiki a kan waƙoƙin biyu tare;
dole tambarin lokuta su dace da iyakar da dillalin ya sa ta daƙiƙa 600 da duk wata taga ta mayar da hankali
da aka bayar. Ana watsar da waƙoƙi marasa inganci, ba a tura su a matsayin rubutu na son rai ba; har yanzu
ana iya amfani da ingantacciyar waƙar da ke tare da ita sai dai idan an wuce kasafin su na haɗin gwiwa. Filayen null/marasa komai
ba sa ƙara rubutu. Wannan hanyar madadin ba ta ƙara ɗauko kafofin watsa labarai ko yin kwafin magana ba.
Ana cire ƙarin filayen kwafin magana daga maɗaukin bidiyon madadin da abubuwan
`video_url`/`source` nasa. Jerin abubuwan da aka yarda da su na hanyar sadarwar OpenAI yana ci gaba da tsauri; maɗaukan bidiyo
waɗanda ba a san goyon bayan asali gare su ba suna ci gaba da kasancewa, yayin da sanannun wuraren da ke karɓar rubutu kawai suke riƙe alamomi masu aminci.
Inuwoyin ɓoye bayanai masu tsari suna kare rubutun kwafin magana da aka ƙara, yayin da
ainihin buƙatar mallakin mai kira ba ta canzawa. Wuraren da ke da goyon bayan asali da
gadar da aka kashe suna ci gaba da halayen kaucewarsu na yanzu.

Ƙarin kwafe da aka riƙe suna amfani da wannan alamar buƙatar da aka lura da ita. Hoton buƙatar abokin ciniki
na asali kafin tsarin kariya, buƙatar da ke jiran aiki a ƙwaƙwalwa, da rajistar buƙatar da aka ƙi da wuri
suna maye gurbin filayen kwafin magana a ɓangarorin bidiyo cikin tsari;
ana ɓoye bayanan saƙonnin zaren rubutu da matakan pipeline da miƙa mahalli suka samar
a wurin karɓar jikin buƙatar da ake adanawa. Alamar `video_content_removed` da aka adana
tana sa ci gaba ta `previous_response_id` ya gaza cikin aminci maimakon sake gina
rubutun da aka watsar da gangan. Idan buƙatar da aka lura da ita ta rasa
inuwa ta ɓoye bayanai ta kowane ɓangare kafin yin rajista, ko ma ɗaya daga cikin inuwoyin bidiyo da yawa
ya kasa daidaituwa bayan sauye-sauyen buƙata na gaba, ana barin jikin buƙatar da aka riƙe
gaba ɗaya maimakon riƙe kwafin magana da aka ɓoye bayanansa a wani ɓangare kawai.

Ga buƙatar da aka lura da ita, amsar samfurin na iya ɗauko kowane sashe na
kwafin maganar ba tare da iyakar alama mai tsari ba. Saboda haka ana maye gurbin
`responseBody` na rajistar kira da aka adana da alamar barin bayani; ba a riƙe cikakken
artifact na pipeline (wanda zai iya haɗawa da jikin sama/abokin ciniki da guntayen stream) ba.
Caches na ma'ana, idempotency, da sake-kunna tunani suna kauce wa
karatu da rubutu ga wannan buƙatar. Buƙatar mai samarwa da amsar da abokin ciniki ke gani
ba sa canzawa. Ana zubar da bytes na keepalive na farko daga buffer na wucin gadi
lokacin da aka bar cikakken artifact. Gargaɗin EventStream mara inganci na Kiro
yana bayar da rahoton adadin bytes na payload kawai, ba ya taɓa bayar da abun cikinsa ko danyen kuskuren
mai tantance JSON.
Wannan ba yana nufin cewa an binciki duk wani bayanin gano matsala na wani mai samarwa/plugin
da ba shi da alaƙa ba; ana bin diddigin faɗaɗaɗɗen binciken wuraren adanawa a #11658.

Zagayowar rayuwar `/api/modality-bridge/video/drilldown` ta cikin gida wata
tushen cache ce daban mai tantancewa ta loopback/token. Kowace aiki kuma tana buƙatar
ID na principal mara bayyananniyar ma'ana kuma na ƙa'ida. Kafin a kunna mai kira na production, dole ne ya
samar da wannan ID daga tenant da aka tantance kuma kada ya taɓa tura
ƙimar da abokin ciniki ya zaɓa. Maɓallan cache suna ɗaure wannan principal da ID na session da
na madogarar bidiyo na ƙa'ida, suna adana maɓallansu da aka samo daga SHA-256 kawai, sannan su ƙuntata karatu
da gogewa ga wannan principal ɗin. Cache yana adana aƙalla firamomin JPEG 16 da aka samo
ga kowace shigarwa, yana sa su ƙare bayan mintuna goma, sannan yana goyon bayan karatu mai iyaka na
`start`/`end` ko gogewar session a sarari.

Ana iyakance kowane principal zuwa shigarwa 16 da MiB 64 na bayanan JPEG na ƙa'ida. Waɗannan
iyakoki sun bambanta da iyakar duniya ta shigarwa 64/MiB 256: matsin ƙimar principal
yana korar shigarwar wannan principal kaɗai waɗanda aka fi daɗewa ba a yi amfani da su ba kafin a
yi la'akari da korar LRU ta duniya. Ana share shigarwar da suka ƙare daga lissafin principal da
na duniya yayin ayyukan cache, yayin da sokewa da gazawar tabbatarwa ba sa
tabbatar da maye gurbi na wani ɓangare.

Ma'ajiyar cache tana ƙin Base64 wanda ba canonical ba, padding mai yawa, kafofin watsa labarai waɗanda ba JPEG ba, JPEG marasa inganci ko waɗanda aka datse, da JPEG waɗanda ke haifar da gargadi yayin cikakken decode na hoto mai iyaka ta `sharp`. Tana sake encode kowane hoton da aka karɓa a matsayin canonical JPEG, tana samo faɗi da tsayi daga bytes da aka decode maimakon amincewa da filayen mai kira, sannan tana watsar da duk wani trailing polyglot bytes maimakon riƙe su. Canonical compressed buffer mai iyaka kaɗai ake lissafawa cikin dukkan quotas biyun. Iyakar JSON wire ta haɗa da ƙarin nauyin Base64 don iyakar decoded-input ta 32 MiB. Kowace derivation da aka adana tana rubuta ingantaccen tsarin JPEG/resolution ɗinta, sampling policy, derivation version, lokacin ƙirƙira, content hash da sabar ta ƙididdige, da hashed parent reference tare da parent-content hash na amintaccen mai kira. Ana duba cancellation tsakanin asynchronous decode/hash phases kafin atomic cache commit.

Wannan tranche ɗin bai haɗa production producer zuwa route ba tukuna, kuma bai samar da zaɓin variant na multi-resolution ba. Saboda haka, hanyar buƙatar Video Bridge mai bayyana kai tsaye ba ta haifar da ƙarin aiki, yayin da tenant-bound principal derivation da cikakken FU-08 multi-resolution lifecycle suka kasance ayyukan bin diddigi a fili maimakon a rubuta su a matsayin halayen da aka kammala.

Ana yi wa frames caption ɗaya bayan ɗaya ta amfani da Video model da aka saita. Video override mara komai yana gādon saitin Vision; idan dukansu babu komai, Vision auto-router yana zaɓar ingantaccen model mai goyon bayan vision. Captions da suka yi nasara suna maye gurbin ainihin part da tsayayyen prefix na `[Video description:` wanda kuma yake nuna rubutun a matsayin observation da ba a amince da shi ba, wanda aka samo daga media, sannan yake gaya wa downstream models kada su bi umarnin da aka samu a cikin media. Frame-caption cache keys sun haɗa da JPEG bytes, prompt, timestamp, da effective model; captions da suka yi nasara kaɗai ake adanawa a cache. Cache entries suna riƙe ainihin producer model da ya yi nasara, har da fallback model; bridge yana bayar da rahoton `mixed` idan models daban-daban ne suka samar da frames daban-daban. Cache hit yana sake amfani da wannan producer identity maimakon sake masa lakabi a matsayin routing plan da aka nema. Ana ƙirƙirar key na whole-video result cache daga kowace input da ke canza output — prompt, effective model, sampling policy, frame count, semantic analysis mode, SHA-256 fingerprint na normalized focus hint, focus window, `transcript`, `audioTranscript`, da contact-sheet flag — saboda haka canza kowanne daga cikin waɗannan dimensions yana haifar da cache miss, ba sake amfani da tsohon bayani ba. Visual dedup policy version, threshold, da bounded candidate-frame count su ma suna bayyana a fili cikin result-cache key da metadata; saboda haka, canjin policy ba zai iya sake amfani da tsohon whole-video description ba. Result-cache v4 metadata yana riƙe mode da fingerprint, ba raw user task ba. Guardrail metadata yana bayar da rahoton requested da effective analysis modes duka; requested `focused` mode ba tare da usable user text ba ana bayar da rahotonsa a matsayin effective `full`.

Guardrail yana cire kowane supported video part amma ba ya bayyana fiye da `modalityBridgeVideoMaxVideos`. Ga target da aka tabbatar yana da `supportsVideo === false`, videos da suka gaza ko suka wuce iyaka suna zama explicit safe text markers domin kada raw video ya tsira. Lokacin da capability ba a sani ba, waɗannan parts suna riƙe video carrier ɗinsu; duk wani fallback transcript yana bin bounded text conversion da ke sama. Targets masu `supportsVideo === true` suna tsallake bridge. Client request abort signal yana yaɗuwa ta download, broker queue, subprocesses, da caption calls; aborts suna tsayawa tsakanin videos kuma ba sa taɓa fail open zuwa raw media.

Runtime settings suna da goyon bayan DB kuma an validate su da Zod:

| Key                                 | Default     | Iyaka / hali                                                                                         |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Optional runtime, sai an zaɓi kunna shi                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` yana kiyaye generic captions; `focused` yana amfani da bounded, untrusted latest-user context |
| `modalityBridgeVideoModel`          | `""`        | Yana gādon Vision Bridge model                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ko proportional `segment_aware`; gazawar detector tana komawa `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                       |

Ana clamp tsofaffin persisted Video timeout values da suka wuce daƙiƙa 120 zuwa broker deadline; ana ƙin sabbin settings writes da suka wuce wannan iyaka. `GET /api/modality-bridge/video/runtime` yana buƙatar trusted stamped loopback locality kafin authentication ko runtime probing, sannan yana buƙatar management auth. Yana dawo da `available` kawai, sanitized FFmpeg/ffprobe versions, da tsayayyen reason lokacin da runtime ba ya samuwa. Internal extraction endpoint ba public upload API ba ne: queue saturation yana dawo da `503` tare da `Retry-After`, yankewar haɗin mai kira tana dawo da `499`, sannan fixed broker deadline yana dawo da `504`. Converted responses suna ƙara `video->text;model=<visionModel>;parts=<videos>` zuwa central `x-omniroute-modality-bridge` header ba tare da cire Vision ko Audio segments ba.

### Mai Rufe PII (`piiMasker.ts`)

Yana aiki a matakai **biyu**.

- **`preCall`** yana ƙirƙirar kwafin payload, yana bi ta cikin `system`, `messages`, `input`, da
  `prompt` (har da abubuwan da suke plain string), sannan yana amfani da `processPII()` (daga
  `@/shared/utils/inputSanitizer`) a kan filayen string na `content`/`text`. Lokacin da
  `PII_REDACTION_ENABLED=true`, ana ɓoye PII da aka gano a cikin payload ɗin da
  za a aika. Wannan ba ya dogara da `INPUT_SANITIZER_MODE` (wanda kawai yake sarrafa
  manufofin prompt-injection). Lokacin da aka kashe ɓoyewa, kiran yana yin rikodin
  adadin abubuwan da aka gano ba tare da sake rubuta abun ciki ba.
- **`postCall`** yana yin deep-clone na amsar, sannan yana gudanar da `sanitizePIIResponse()` tare da
  abin rufe tsarin Responses-API (`maskResponsesOutput` — yana rufe
  `output_text` da `output[].content[].text`). Idan wani ɓoyewa ya faru,
  amsar da aka gyara za ta maye gurbin ta asali.

Guardrail ɗin ba ya taɓa toshewa; yana yin annotation ne kawai (`meta.detections`,
`meta.redacted`) ko sake rubutawa.

#### Zaɓi bisa nau'i, tsare-tsare na musamman da ƙididdigar ganowa

**Dashboard → Settings → Security → PII masking** yana zaɓar _abin da_ za a rufe. Ba ya
kunna rufewar: har yanzu `PII_REDACTION_ENABLED` (buƙata) da
`PII_RESPONSE_SANITIZATION` (amsa + SSE) ne ke yin hakan, kuma dukkansu a kashe suke ta tsohuwa.

- **Zaɓi bisa nau'i** — an jera built-in ids a cikin
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Rashin saiti yana nufin kowane
  nau'i (halin da ake da shi kafin samuwar wannan saitin). Tsarin `ssn_us` na injin buƙata
  yana taswira zuwa `ssn`. Templates (Minimal, Standard, Financial,
  Brazilian, USA, Full) suna cika checkboxes a UI kawai.
- **Tsare-tsare na musamman** — har zuwa regex ko wildcard patterns guda 20 (`*` = har zuwa
  haruffa 64 marasa whitespace, `?` = guda ɗaya). Abubuwan da suka dace suna zama `[CUSTOM_REDACTED]`.
  Kowane pattern yana bi ta cikin `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): matsakaicin haruffa 500, flags sun iyakantu
  ga `g i m s u`, dole ne ya compile, dole ne ya wuce `safe-regex` (catastrophic
  backtracking), kuma kada ya dace da empty string ko placeholder na redaction.
  Ana ƙin pattern da ya gaza yayin adanawa da gwadawa, sannan stored row
  da ya gaza ana tsallake shi a runtime maimakon a compile shi. Custom patterns suna
  aiki ne kawai yayin da aka kunna masking.
- **Ƙididdigar ganowa** — adadi bisa kowane nau'i (ba matched values ba), waɗanda ake riƙewa a
  memory kuma ake sake saita su idan an restart (`src/lib/pii/piiDetectionStats.ts`). Suna
  ƙaruwa ne kawai yayin da aka kunna masking.

Saitunan suna cikin teburin `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) kuma ana karanta su ta cache na sakan 1. API:

| Hanya  | Path                     | Manufa                                                                       |
| ------ | ------------------------ | ---------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Halin flag, `enabledTypes`, `customPatterns`, ƙididdigar ganowa              |
| `PUT`  | `/api/settings/pii`      | Maye gurbin `enabledTypes` (`null` = duka) da/ko `customPatterns`            |
| `POST` | `/api/settings/pii/test` | Dry-run na pattern ɗaya a kan samfurin da bai wuce 8 KB ba; ba a adana komai |

Duk ukun suna buƙatar management auth kuma suna tantance body ta amfani da Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Yana gano tsarin barazana a cikin abun ciki da mai amfani ya bayar kuma yana aiwatar da
manufar da aka saita. Environment variables da constructor options ne ke sarrafa
halayen:

| Saiti          | Env var                                                                                              | Tsoho  | Tasiri                                                                                                                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| An kunna       | `INPUT_SANITIZER_ENABLED`                                                                            | `true` | Lokacin da yake `false`, guardrail yana yin short-circuit.                                                                                                                               |
| Yanayi         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn` | Manufar injection: `block`, `warn`, ko `log`. (Ana karɓar `redact` don back-compat amma **ba ya** cire injection text; `PII_REDACTION_ENABLED` ne ke sarrafa sake rubuta PII na buƙata.) |
| Iyakar toshewa | zaɓin `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Mafi ƙarancin severity da ake buƙata don toshewa. Medium observe-only ne a saitin tsoho.                                                                                                 |

**Fifikon yanayi** (`getMode`): `options.mode` na mai kira →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → env na `INJECTION_GUARD_MODE` → env na `INPUT_SANITIZER_MODE` →
`warn`. Saboda haka, override na dashboard yana da fifiko a kan env vars, don haka Feature
Flags UI yana sarrafa guard ɗin da ke aiki kai-tsaye (ba tare da restart ba). Karatun DB fail-safe ne:
idan kuskure ya faru, guard ɗin yana komawa ga halayen da suka dogara da env, kuma idan ba a
saita override ba, halayen suna daidai da warwarewa ta env kawai.

Tushen ganowa:

1. `sanitizeRequest()` daga `@/shared/utils/inputSanitizer` (shared detector
   set da ake amfani da shi a wasu wurare a cikin pipeline).
2. Built-in `DEFAULT_GUARD_PATTERNS` (a halin yanzu `system_override_inline` da
   `markdown_system_block`, dukkansu da severity na `high`).
3. `customPatterns` na zaɓi da aka wuce ta constructor options (strings, regex,
   ko records na `{ name, pattern, severity }`).

Lokacin da `mode === "block"` **kuma** aƙalla ganowa ɗaya ya kai iyakar
tsanani, `preCall` yana mayar da `{ block: true, message: "Request rejected:
suspicious content detected" }`. A yanayin `warn`/`log`, shingen tsaro yana yin log amma
yana ba da damar kiran. Ana kuma fitar da mataimakin da ake rabawa `evaluatePromptInjection()`
don masu kira da suke buƙatar tantance prompts ba tare da bi ta registry ba.

**Iyakar dubawa (v3.8.20):** mai ganowa yana bincika **16 KB na farko kawai** na
rubutun prompt da aka haɗa — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) a cikin
`src/shared/utils/inputSanitizer.ts`. Dukansu `detectInjection()` da
`evaluatePromptInjection()` suna yin `slice(0, MAX_INJECTION_SCAN_BYTES)` kafin gudanar da
madaukin pattern. Umarnin injection suna kasancewa kusa da saman input, don haka wannan
yana iyakance regex CPU/GC a kan payloads masu girman ɗaruruwan KB ba tare da raunana ganowa ba (duba
#3932, #4041).

### Mai Rufe Bayanan Shaida (`credentialMasker.ts`)

Yana aiki a matakai **biyu**, kuma shi ne na ƙarshe a default chain (priority `95`). Yana ɓoye
sanannun patterns na API-key / secret-token daga payload mai fita (abun cikin saƙo,
arguments na tool-call, sakamakon tools) **da kuma** response na provider, don kada
credential da aka liƙa cikin prompt (ko wanda sakamakon tool ya maimaita) ya zube
zuwa upstream provider ko komawa ga client.

- **Sai an kunna da gangan**, bisa tsarin da ake amfani da shi wajen ɓoye PII (kusa da Doka Mai Tsauri #20):
  yana kasancewa a kashe sai dai idan `settings.credentialRedactionEnabled === true` **ko**
  `CREDENTIAL_REDACTION_ENABLED=true`. Idan yana kashe, shingen tsaron ba ya yin komai —
  ba ya taɓa toshewa kuma ba ya taɓa sake rubutawa.
- `redactCredentials()` yana bi ta dukkan bishiyar payload/response (`walkValue()`,
  mai kariya daga prototype-pollution, kuma mai kariya daga cycle ta hanyar `WeakSet`) sannan yana maye gurbin
  matches da placeholder na `[REDACTED:<type>]`, yana cloning rassan da suka
  canza kawai.
- `CREDENTIAL_PATTERNS` yana rufe keys na LLM providers (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens na VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), keys na biyan kuɗi (Stripe, Square), keys na cloud
  (AWS access key, Twilio, SendGrid, Mailgun), private keys / JWTs,
  connection strings masu ɗauke da credentials (`mongodb://user:pass@...`, da sauransu), da kuma
  generic pattern na ƙimar header na `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Keys masu sifar header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ana ɓoye su ta tsarin tsari (ƙimar kawai, tare da kiyaye scheme prefix kamar
  `Bearer `/`Basic `) maimakon ta generic text regex.
- Shingen tsaron ba ya taɓa toshewa; yana sake rubutawa ne kawai (`modifiedPayload` /
  `modifiedResponse`) kuma yana ƙara annotations (`meta.credentialsRedacted`, `meta.count`).

Mai gadin regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Babban Kwangila (`base.ts`)

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
  block?: boolean; // true yana katse jerin nan take
  message?: string; // ana nuna shi lokacin toshewa
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall ne ke mayar da shi don sake rubuta buƙatar
  modifiedResponse?: TValue; // postCall ne ke mayar da shi don sake rubuta amsar
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

Guardrail yana nuna cewa "babu canji" ta hanyar mayar da ko dai `void`, `{}`, ko
`{ block: false }`. Mayar da `modifiedPayload`/`modifiedResponse` yana maye gurbin
ƙimar da ke gudana cikin jerin domin guardrails na gaba.
`signal?: AbortSignal` yana ɗaukar tsarin rayuwar mai kira zuwa cikin guardrails. Soke buƙata shi ne keɓantaccen yanayin fail-open da aka yi da gangan: hanyoyin haɗa kafofin watsa bayanai suna dakatar da aiki da tsaftacewa ba tare da dawo da ɗanyen media zuwa manufa da aka san ba ta goyon bayansa ba.

## Rijista (`registry.ts`)

Singleton ɗin `guardrailRegistry` yana samar da:

- `register(guardrail)` — yana ƙara guardrail (ko ya maye gurbinsa bisa daidaitaccen suna) sannan
  ya sake jera su bisa `priority` daga mafi ƙanƙanta zuwa mafi girma.
- `clear()` / `list()` — kayan taimakon gudanarwa.
- `runPreCallHooks(payload, context)` — yana bi ta guardrails masu aiki, yana isar da
  payload ta cikin `modifiedPayload`, sannan ya tsaya a farkon `block: true`.
- `runPostCallHooks(response, context)` — irin wannan gudana ne a ɓangaren amsa.
- `resetGuardrailsForTests({ registerDefaults })` — yana share yanayi sannan, idan an zaɓa,
  ya sake yin rijistar tsoffin saituna domin ware gwaji yadda ya kamata.

Dukkan masu gudanarwar biyu suna mayar da `{ blocked, payload|response, results, guardrail?, message? }`
inda `results` ke zama jeri na bayanan `GuardrailExecutionResult` waɗanda suka haɗa da
filayen `blocked`, `skipped`, `modified`, `error`, da `meta` na kowane guardrail,
waɗanda suke da amfani wajen bibiyar aiki.

### Kashe Guardrails Ga Kowace Buƙata

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` yana tattara jerin
sunayen guardrails da aka cire maimaituwa waɗanda ya kamata a tsallake domin
buƙatar yanzu. Akwai hanyoyi guda biyar, ana karanta su a wannan tsari sannan a haɗa su cikin jeri guda
(farkon bayyanar suna ce ke rinjaye yayin cire maimaituwa):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` na jikin buƙata (a matakin sama)
3. `metadata.disabledGuardrails` na jikin buƙata (sai idan `metadata` abu ne)
4. Header `x-omniroute-disabled-guardrails`
5. Tsohon header `x-disabled-guardrails`

Ana haɗa dukkan hanyoyin guda biyar, ciki har da headers biyun: aika duka
`x-omniroute-disabled-guardrails` da `x-disabled-guardrails` yana tsallake haɗakar
jerinsu, kuma header na zamani da ba komai a cikinsa ba ya daina ɓoye tsohon
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), an gyara a
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Ƙimomin na iya zama jerin strings ko string da waƙafi ya raba; ana cire sararin
farko da ƙarshe daga sunaye sannan a daidaita su zuwa lowercase kebab-case (`pii_masker` → `pii-masker`), kuma ana
cire shigarwar da ba komai a cikinta. Ana isar da sakamakon ta `context.disabledGuardrails`
zuwa rijistar, wadda ke tsallake guardrails masu dacewa (`skipped: true` a cikin `results`).

Jerin kashewa yana shafar **rijistar** kawai. Yanayin `block` na kutsen prompt
wajibi ne a matsayin iyaka: middleware na injection-guard
(`src/middleware/promptInjectionGuard.ts`) yana kiran `evaluatePromptInjection()`
ba tare da wani jerin kashewa da mai kira ke sarrafawa ba (an cire kiran
`resolveDisabledGuardrails({ body })` marar amfani da yake yi a baya a cikin
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), saboda haka buƙatar
da ta kashe `prompt-injection` har yanzu za a ƙi ta a yanayin `block`. Wannan
ƙira ce da gangan. Mai kira ne ke sarrafa hanyoyin kashewa (jikin buƙata,
metadata, headers), kuma ba dole ba ne mai kira ya iya kashe matakin tsaron
da mai gudanarwa ya saita
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Haɗakar headers
daga [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
tana canza guardrails na rijista da ake tsallakewa ne kawai; ba ta ba abokin hulɗa
damar kewaye middleware ba. Ana bin diddigin manufofin guardrail na dole ga kowane key da kowane group
a cikin v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Duba [Iyaka da abin da ya ƙunsa](#coverage-and-limits).

## Tsarin Gudanarwa

Ga kowace buƙata da ke bi ta cikin `src/sse/handlers/chat.ts` da
`open-sse/handlers/chatCore.ts` (hanyoyin rukunin chat da aka jera a ƙarƙashin
[Faɗin ɗaukar aiki da iyakoki](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` yana gina jerin abubuwan da za a tsallake daga maɓallin API, body,
   da headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` yana gudanar da guardrails bisa
   tsarin priority daga mafi ƙanƙanta zuwa mafi girma:
   - Ana rubuta guardrails da aka kashe a matsayin `skipped`.
   - `preCall` na kowane guardrail na iya sake rubuta payload ta hanyar `modifiedPayload`.
   - `block: true` na farko yana dakatar da jerin nan take, sannan handler ya mayar
     da amsar ƙin yarda ta guardrail.
3. Payload ɗin (wanda wataƙila aka sake rubutawa) yana shiga combo routing da
   turawa zuwa upstream.
4. **Ga wanda ba streaming ba kawai:** bayan an haɗa amsar,
   `guardrailRegistry.runPostCallHooks(...)` yana gudanar da jerin iri ɗaya a kan
   amsar. `block: true` a nan yana watsar da amsar upstream kuma ya mayar da HTTP 400. Amsoshin streaming suna tsallake wannan matakin gaba ɗaya.

Guardrails da suka jefa kuskure ana rubuta su da `error: <message>` kuma ana shigar
da su cikin log ta hanyar `logger.warn`, amma jerin yana ci gaba — an tsara shi ya ci gaba da aiki idan an samu kuskure.

## Faɗin ɗaukar aiki da iyakoki

An haɗa guardrail registry ne kawai cikin pipeline na chat. Waɗannan iyakokin an
tabbatar da su ta `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` da
`tests/unit/guardrail-pipeline-characterization.test.ts`; a sabunta waɗannan tests
da gangan idan halayen suka canza.

### Inda hooks suke aiki

| Hook / iko                          | Inda yake aiki                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Buƙatun da `handleChat` (`src/sse/handlers/chat.ts`) ke sarrafawa: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (da `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, da Telegram chat proxy. Haka kuma dashboard test endpoint `/api/guardrails/test`. Toshewar pre-call tana mayar da HTTP 400. |
| `runPostCallHooks`                  | Amsoshin chat marasa **streaming** kawai (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Amsoshin streaming ba sa taɓa isa gare shi.                                                                                                                                                                                                                                                                                        |
| Streaming PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), wanda ake haɗawa a `streamingPipeline.ts` lokacin da `PII_RESPONSE_SANITIZATION` ke kunne. Ba guardrail ba ne, don haka hanyoyin kashewa ba sa shafar sa.                                                                                                                                                                                                             |
| Injection-guard middleware (legacy) | Kowace hanyar `/v1` da ke ɗauke da prompt, har da rukunin chat (duba [faɗin hanyoyi](#injection-guard-route-coverage--red-team-phase-8--block-d)). Prompt injection kawai.                                                                                                                                                                                                                                                          |

### Abin da ba a rufe ba

- **Hanyoyin media, embeddings da data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) ba sa taɓa isa registry. Babu
  rufe PII, rufe credential ko modality bridge da ke aiki a can. Bincikensu
  kawai shi ne legacy injection-guard middleware.
- **Amsoshin streaming** ba sa samun post-call guardrails: babu post-call na
  `pii-masker` ko `credential-masker`, kuma babu toshewar post-call. Streaming PII
  transform kawai ake amfani da shi (lokacin da `PII_RESPONSE_SANITIZATION` ke kunne). Credential
  da aka sake maimaitawa a cikin amsar streaming ba a ɓoye shi.
- **Hanyoyin kashewa da middleware (bisa tsari):** middleware yana tantance
  prompt injection ta hanyar kiransa na kansa zuwa `evaluatePromptInjection()`, ba tare da
  aika wani jerin kashewa da mai kira ke iya sarrafawa ba. Yanayin `block` wata
  iyaka ce ta dole wadda hanyoyin kashewa da mai kira ke sarrafawa ba za su iya ƙetarewa ba, har ma a hanyoyin rukunin chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Kashe
  `prompt-injection` yana tsallake guardrail na registry kawai.

### Abin da ke ganin amsa kafin post-call

A hanyar da ba streaming ba, tsarin shi ne: cire bayanai daga memory → gudanar da
built-in tool → post-call guardrails → fita sakamakon toshewar post-call → adanawa a semantic-cache.

- **Ciro bayanai daga ƙwaƙwalwa** da **aiwatar da kayan aiki** suna ganin martani kafin matakan
  kariya na bayan-kira su sake rubuta shi ko su hana shi. Tun daga
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), aikin ciro bayanai daga ƙwaƙwalwa
  yana tura rubutun da aka ciro ta cikin `sanitizePII` idan
  `PII_RESPONSE_SANITIZATION` yana kunne (a yanayin gudana kai-tsaye da marar gudana kai-tsaye), amma
  martanin da matakan bayan-kira suka hana daga baya ya riga ya isa ga ƙwaƙwalwa da
  kayan aiki.
- **Ma'ajiyar wucin gadi ta ma'ana** tana adana martanin bayan matakan bayan-kira, don haka tana adana
  martanin da aka sake rubutawa, kuma ba a taɓa adana martanin da aka hana a ma'ajiyar wucin gadi ba. Ana
  ware maɓallan bayanan ma'ajiyar wucin gadi bisa ga kowane maɓallin API.

## Saitawa

Sauye-sauyen muhalli da ginannun matakan kariya ke karantawa:

| Sauyi                                 | Mai amfani da shi      | Tasiri                                                                                                 |
| ------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Saita zuwa `false` don kashe ganowa gaba ɗaya.                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Manufar kutse: `warn`, `block`, ko `log`. Tsohuwar ƙimar `redact` ba ta sake rubuta rubutun kutse.     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Yanayin kariyar kutse; kuma tutar fasalin DB ce wadda ke **rinjayar** sauye-sauyen muhalli (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Mafi ƙarancin matakin tsanani da `MODE=block` ke ƙi: `high` (na asali), `medium`, ko `low`.            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Tsohon madadin suna na `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Idan `true`, ana ɓoye PII na buƙata (ba tare da dogaro da yanayin kutse ba).                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (na gaba) | Yana sarrafa halayyar mai ɓoyewa a ɓangaren amsa.                                                      |

Matakan kariya na Modality Bridge suna karanta saitunan lokacin aiki daga ma'ajiyar
saituna mai dogaro da DB (`getSettings()`), ba daga sauye-sauyen muhalli ba. Maɓallan farko na Vision su ne
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, da
`modalityBridgeCacheMaxEntries`. Ana karɓar tsoffin maɓallan
`visionBridge*` ne kawai a matsayin madadin karatu na zagaye ɗaya da aka rubuta
a takardu; rubutun dashboard yana amfani da maɓallan farko. Ƙimomin asali da mai warware
madadin suna cikin `src/shared/constants/modalityBridgeDefaults.ts`, yayin da aka riƙe tsoffin
ƙimomi a `src/shared/constants/visionBridgeDefaults.ts`.

Audio yana amfani da `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, da `modalityBridgeAudioMaxClips`, tare da saitunan
`modalityBridgeCache*` na gama-gari. Audio ba shi da madadin tsoffin maɓalli saboda an
gabatar da waɗannan maɓallan ne tare da tsarin Modality Bridge.

Video yana amfani da `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, da
`modalityBridgeVideoTimeout`, tare da saitunan `modalityBridgeCache*` na gama-gari.
An kashe shi a saitin asali saboda FFmpeg/ffprobe dogarorin aiki ne na zaɓi,
kuma sanya wa firam bayani yana ƙara jinkiri da kuɗin samfurin.

## Guardrails na Musamman

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

Matakai:

1. Ƙirƙiri `src/lib/guardrails/myGuardrail.ts` wanda ya faɗaɗa `BaseGuardrail`.
2. Aiwtar da `preCall` da/ko `postCall`.
3. Ko dai a yi rajista a lokacin import (a tura daga `registerDefaultGuardrails`) ko kuma
   a kira `guardrailRegistry.register(...)` a lokacin aiki — registry ɗin yana maye gurbin
   duk wani guardrail na baya mai suna iri ɗaya bayan daidaita sunan.
4. Ƙara gwaje-gwaje a ƙarƙashin `tests/unit/` (misalan da ake da su:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Gwaji

Yi amfani da `resetGuardrailsForTests()` tsakanin gwaje-gwaje domin farawa daga sanannen yanayi.
Wuce `{ registerDefaults: false }` domin farawa da registry mara komai sannan a yi
rajistar guardrails kawai da ake gwadawa. Vision Bridge yana karɓar shigar da
dependencies (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge yana samar da
makamantan wuraren haɗawa don saituna, capabilities, zaɓin samfurin STT, binciken
credentials, da transcription. Saboda haka, gwaje-gwaje za su iya gwada dukkan hanyoyin biyu ba tare da samun damar DB
ko network ba.

## Duba Kuma

- `src/lib/guardrails/` — aiwatarwa
- `src/shared/utils/inputSanitizer.ts` — detector ɗin da ake rabawa wanda ke gudanar da
  gano prompt-injection da ɓoye PII
- `src/shared/constants/visionBridgeDefaults.ts` — tsoffin ƙimomin Vision Bridge da
  jerin samfurorin da ake tilasta amfani da bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — tsoffin ƙimomin runtime da Vision/Audio ke rabawa
- `docs/architecture/RESILIENCE_GUIDE.md` — wani layer mai zaman kansa (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — cikakken bayani kan env vars

## Rufin routes na injection-guard da red-team (Mataki na 8 · Toshe D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) yana rufe dukkan routes
da ke karɓar prompts na mai amfani. Yana bin `INJECTION_GUARD_MODE` (tsoho `warn` = log kawai;
`block` = yana mayar da HTTP 400 `SECURITY_001`).

| Nau'i             | Routes                                                                                                                                               | Yanayin tsoho |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Rubutu (na yanzu) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Samarwa           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Bayanai           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ciro rubutu (`extractMessageContents`) yana rufe `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kowane dare, `nightly-llm-security.yml`):** promptfoo yana tabbatar da cewa kowane route yana toshe
OWASP-LLM corpus a cikin `INJECTION_GUARD_MODE=block`; garak yana gudanar da probes (yana tsallakewa idan babu secret).
An haɗa `moderations` domin daidaito. Yanayin toshewa iyaka ne na tilas: `evaluatePromptInjection()`
yana yin watsi da jerin kashewa na kowane request da middleware ke miƙa masa, don haka `disabledGuardrails` ba ya
**keɓe** route daga gare shi ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Workflow na kowane dare (`.github/workflows/nightly-llm-security.yml`, cron + manual
dispatch) yana da jobs guda biyu:

- **`promptfoo-guard` (mai toshewa)** — yana gudanar da `promptfoo eval -c promptfooconfig.yaml`
  tare da `INJECTION_GUARD_MODE=block`. Kowane shari'ar hari (misali, "yi watsi da duk
  umarnin da suka gabata…", jailbreaks irin na DAN) yana tabbatar da cewa response ɗin yana ɗauke da
  `error.code === "SECURITY_001"`, wato guard ɗin ya ƙi request ɗin a zahiri.
- **`garak` (na shawarwari)** — yana gudanar da garak `--probes promptinject,dan,leakreplay`
  a kan instance na OmniRoute na gida (`http://localhost:20128/v1`). An dogara da
  provider secret (`PROMPTFOO_PROVIDER_KEY`); yana tsallakewa cikin sauƙi idan babu shi kuma ana ƙara masa
  `|| true`, don haka yana bayar da rahoto ba tare da sa CI ya gaza ba.

Rufin helper na guard (`createInjectionGuard` / `withInjectionGuard`)
ya mamaye kowane route na `/v1` mai ɗauke da prompt; ana ciro rubutun prompt daga
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ta hanyar
`extractMessageContents()` a cikin `src/shared/utils/inputSanitizer.ts`.
