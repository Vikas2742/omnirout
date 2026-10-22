# Guardrails (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Pinagmumulan ng katotohanan:** `src/lib/guardrails/`
> **Huling na-update:** 2026-10-17 — v3.8.52 (idinagdag ang [Saklaw at mga limitasyon](#saklaw-at-mga-limitasyon):
> aling mga route at response path ang naaabot ng mga hook, ang pinagsamang disable headers (#16412), injection
> block mode bilang mandatoryong hangganan (#16413), at ano ang nakakakita ng response bago ang post-call)

Ipinapatupad ng mga guardrail ang kaligtasan, patakaran, at mga pagbabago sa nilalaman sa hangganan
sa pagitan ng OmniRoute at mga upstream provider. Bawat guardrail ay maaaring suriin (at opsyonal na
tanggihan, baguhin, o lagyan ng anotasyon) ang mga request payload (`preCall`) at
mga upstream response (`postCall`).

Ang sistema ay **fail-open**: kung may guardrail na mag-throw habang tumatakbo, itinatala ng registry
ang error at nagpapatuloy sa susunod na guardrail sa halip na pabiguin ang
request. Ang pag-block ay isang tahasang desisyon (`block: true`), hindi kailanman aksidente.
Ang tanging eksepsiyon ay ang na-abort na request: kapag na-abort ang `signal` ng caller,
tinatanggihan ng isang nag-throw na guardrail ang hook run sa halip na laktawan ito.

Ang mga hook ay **hindi** tumatakbo sa bawat route o bawat response. Basahin ang
[Saklaw at mga limitasyon](#saklaw-at-mga-limitasyon) bago umasa sa isang guardrail bilang
kontrol sa seguridad.

## Mga Built-in na Guardrail

Awtomatikong nilo-load ng registry ang anim na guardrail sa pagkakasunod-sunod ng priority sa oras ng import
(tingnan ang `registry.ts` → `registerDefaultGuardrails()`):

| Priority | Pangalan            | Stage(s)       | File                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ang mas mababang numero ng priority ay tumatakbo **una**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Ang GLM 5.3 base model at `glm-5.3-{low,high,max}` ay may tahasang
`supportsVision:false` na registry/spec metadata. Ang mga GLM 5.3 Flash variant
ay nananatiling native-vision na mga modelo. Ang `/v1/messages` route ng Claude Code ay pumapasok sa
shared `handleChat` pre-call guardrail chain **bago** ang Claude-to-OpenAI
translation; ang mga nested `Read` tool-result na larawan ay dapat ilarawan o hawakan
bago pa iangat ng translation na iyon ang mga ito sa OpenAI `image_url` content (#17069).

Hinaharangan nito ang mga request na may lamang larawan na patungo sa **mga non-vision na modelo** at alinman sa
ini-reroute ang buong request sa isang modelong may kakayahang vision o pinapalitan ang mga image
part ng mga text description na ginawa ng isang configurable na vision model bago
ang upstream call. Pinapayagan nitong transparent na mahawakan ng mga text-only provider
ang mga multimodal na payload.

Daloy:

1. Laktawan kung sinusuportahan na ng target na modelo ang vision (maliban kung lumilitaw ito sa
   forced-bridge list na `isVisionBridgeForcedModel`).
2. I-extract ang mga image part sa pamamagitan ng `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), na nagde-delegate sa **unified media
   detector** na `detectMediaParts()` sa `open-sse/utils/mediaParts.ts` — ang
   nag-iisang pinagmumulan ng katotohanan na ibinabahagi sa combo compatibility filter.
   Ang extraction ay allowlisted sa mga shape na kayang i-splice pabalik ng `replaceImageParts`
   (ang extract↔replace contract): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, at Responses
   API `input_image`. Ang mga tugmang larawan na nested sa loob ng Claude Code
   `tool_result.content` at Responses tool outputs ay kinukuha rin at
   pinapalitan sa kanilang orihinal na path; ang indicator-only na mga shape ay combo-filter
   material at hindi kinukuha.
   Laktawan kung wala naman natagpuan.
3. I-resolve ang runtime config sa pamamagitan ng `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nananaig ang mga bagong `modalityBridge*`
   settings key; ang mga legacy na `visionBridge*` key ay nananatiling **one-cycle
   fallback** (rollback window). Laktawan bago ang anumang media traversal kapag naka-disable
   ang bridge.
4. Ang mode selector (`modalityBridgeVisionMode`, tingnan ang talahanayan sa ibaba) ang magdedesisyon
   kung reroute o describe. Ang reroute ay nagbabalik ng `modifiedPayload` na ang pinalitan lamang ay `model`,
   kasama ang meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Describe path: i-cap ang mga larawan sa `maxImages`, buuin ang task-aware na prompt,
   konsultahin ang describe cache, tawagin ang vision model **nang sabay-sabay**
   (`Promise.allSettled`), at i-inject ang `[Image N]: <description>` na text part sa
   kanilang lugar. Ang bigong describe ay nagbibigay ng `null`: pinapanatili ang raw na larawan para sa
   unknown/vision-capable na mga target (#4012), ngunit ang isang **kumpirmadong text-only na direktang
   target** o zero-vision combo ay makakakuha ng tahasang
   `(unavailable — no vision-capable provider connected)` na text stub para sa
   bawat hindi nailarawang larawan, kasama ang mga partial failure at mga larawang lagpas sa
   describe-call cap (#17069). Ang umiiral nang all-failed combo describe fallback
   ay nananatili (#8430).
6. Ibalik ang `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Mode selector (`modalityBridgeVisionMode`)

| Mode       | Default | Pag-uugali                                                                                                                                                                                                                                                                                               |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Legacy heuristic, hindi ginalaw (#6640/#7204): ang mga modelong non-combo/`auto/` ay nagre-reroute sa pinakamagandang vision model maliban kung ang orihinal na modelo ay mayroon nang magagamit na credentials (pagkatapos ay maglalarawan); ang mga combo target ay laging naglalarawan.               |
| `describe` |         | Laging maglalarawan — ganap na nilalaktawan ang reroute block; ang modelong pinili ng user ang laging sumasagot.                                                                                                                                                                                         |
| `reroute`  |         | Puwersahing i-reroute: nilalampasan ang keep-credentialed-model guard. Nalalapat pa rin ang credential guard ng reroute-**target** — kapag walang magagamit na vision target, humaharang ang bridge na may malinaw na error sa halip na maglarawan o magpadala ng raw na larawan sa text-only na target. |

Ang mga forced mode ay short-circuit **bago** tumakbo ang auto heuristic; ang pag-uugali ng `auto` ay byte-identical sa pre-PR-1 guardrail.

#### Saklaw ng API key (`visionBridgeKeyScope.ts`)

Kapag ang API key ng caller ay naglilimita sa `allowedConnections`, mga quota pool
(`allowedQuotas`) o mga modelo (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ang bridge ay pumipili lamang
ng mga modelong reroute at describe na maaaring gamitin ng key, sa mga koneksyong maaaring
gamitin ng key. Ang describe call ay laging dumadaan sa OmniRoute self-loop kasama ang
`x-omniroute-self-loop-key-id` header, kaya ang tumatanggap na chat request
ay muling ipinapatupad ang connection at model policy ng key na iyon. Pinapahalagahan ng `enforceApiKeyPolicy()`
ang header na iyon kasama lamang ng self-loop bearer, kaya makakapagpaliit lamang ito ng access,
at ang id na hindi nagre-resolve ay tinatanggihan.

Kung walang vision model na pinapayagan para sa key, ang **kumpirmadong text-only
na target** ay lokal na tinatanggihan ang image request na may malinaw na HTTP 400 sa halip na
ipasa ang image bytes sa isang upstream na walang kakayahan (#17069). Para sa mga target na may
hindi alam o native vision capability, pinapanatili ng describe path ang dati nitong
fail-open na pag-uugali (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Ang mga request na walang key, at mga key na walang mga paghihigpit na ito, ay kumikilos nang eksakto
tulad ng dati.

#### Task-aware na describe prompt (`modalityBridgeVisionTaskAware`)

Default: **true**. Idinadagdag ng `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ang
teksto ng **huling user message** (pinaikli sa 500 chars) sa base
describe prompt, na itinutuon ang paglalarawan sa aktwal na itinanong ng user
(codex-vision-proxy pattern) at hinihiling sa vision model na i-transcribe ang nakikitang
teksto. Kapag off ang flag — o walang user text — ang base prompt ay ginagamit nang hindi binago.

Ang sariling OpenAI-compatible na request ng describe self-loop (`callVisionModelSingle()`
sa `visionBridgeHelpers.ts`) ay laging humihiling ng `image_url.detail: "high"` —
walang kondisyon, para sa bawat caller/provider, hindi naka-gate sa anumang client signal.
Ang low-detail sampling ay nagpapababa ng OCR accuracy para mismo sa text-transcription
task na hinihiling ng prompt na ito, kaya ang describe call mismo ay laging humihiling ng high
detail anuman ang detail level na ginamit ng orihinal na inbound request. Naaapektuhan lamang nito
ang internal na describe request body; hindi nito binabago kung paano
ipinapasa ng OmniRoute ang sariling `image_url.detail` ng caller sa primary request —
ang default na iyon ay inilalapat nang hiwalay, at para lamang sa mga natukoy na OpenCode client, sa
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ang
Anthropic wire-format branch ng describe self-loop ay walang `detail` field
at hindi naaapektuhan ng alinman sa mga default.

#### Cap sa output ng describe (`modalityBridgeVisionMaxChars`)

| Key                            | Default | Saklaw          |
| ------------------------------ | ------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` o 100–50000 |

`0` (default) ay nangangahulugang **walang cap** — ang paglalarawang ibinabalik ng
`callVisionModel()` ay ipinapasa nang hindi binabago, pinapanatili ang umiiral na
pag-uugali. Ang anumang value sa 100–50000 na saklaw ay pumuputol sa paglalarawan gamit ang
`…` suffix bago ito i-splice pabalik bilang `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` sa `src/lib/guardrails/visionBridge.ts`).
Taasan ito para sa detail-heavy OCR task kung saan kailangan ng downstream model ang
buong transcription; bawasan ito para limitahan ang token usage sa mga chatty na vision model.
Ang field sa dashboard ay nasa Advanced panel ng Vision tab
(`modality-bridge-max-chars` sa `ModalityBridgeVisionTab.tsx`) at ini-clamp ang anumang
value sa pagitan ng 1 at 99 pataas sa 100 floor habang hinahayaan ang hayagang `0`
na hindi ginalaw — ang `0` ay valid na Zod value sa sarili nitong karapatan
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), hindi lamang
ang "unset" na default.

#### Cache ng describe (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL cache para sa mga output ng describe, shared process-wide.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` na may
length-prefix framing (walang field-boundary collisions). Ang model component ay
ang **configured** na bridge model, hindi ang modelong aktwal na sumagot —
maaaring mag-fallback internally ang `callVisionModel`, at ang pag-key per attempt ay
mag-fragment ng cache. Ang mga nabigong describe ay hindi kailanman naka-cache. Mga setting:

| Key                             | Default | Saklaw  |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Remote na normalisasyon ng larawan (self-loop describe/base64 fetch)

Kapag ang bridge mismo ang kumukuha ng **remote** na larawan — ang Anthropic describe
self-call at ang claude-wire-format base64 conversion
(`ensureBase64ImagesForClaudeWire`), parehong sa pamamagitan ng
`fetchRemoteImageAsDataUri()` sa `visionBridgeHelpers.ts` — ang nagresultang data
URI ay dumadaan sa `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) bago ito i-embed sa vision-model
request. Ang mga sobrang laki na larawan ay dinodownscale sa **2048px long edge**
(tumutugma sa resize cap na inilalapat na ng OpenAI/Anthropic sa server-side), na
nagpapababa sa upload bytes/latency nang hindi binabago ang nakikita ng vision model. Ang pag-resize
ay gumagamit ng `sharp`, na nilo-load sa pamamagitan ng dynamic import: sa isang platform kung saan
nabigo ang native binary nito na mag-load, ang `normalizeDataUri()` ay **hindi kailanman nag-throw** — bumabalik
ito sa passthrough ng orihinal na bytes, kaya ang describe/base64-conversion
path ay laging patuloy na gumagana. Ang mga non-image bytes (isang fetch na hindi nagbalik ng
decodable na larawan) ay dumadaan din nang hindi ginalaw. Ang normalisasyong ito ay
nakasaklaw lamang sa mga larawang kinukuha ng bridge para sa sarili nitong self-call — hindi ito kailanman
inilalapat sa raw passthrough payload ng caller, kaayon ng
opt-in-only mutation na prinsipyo (Hard Rule #20).

#### Settings schema + migration

Ang mga bagong `modalityBridge*` key ay Zod-validated sa `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, ang `modalityBridgeCache*` trio, at ang
`modalityBridgeAudio*` group na ginagamit ng Audio Bridge. Ang migration
`141_modality_bridge_settings.sql` ay kinokopya ang umiiral na legacy
`visionBridge*` values papunta sa katumbas na bagong key (idempotent, hindi kailanman nino-overwrite
ang operator-set na `modalityBridge*` value); ang mga legacy key ay nananatiling tinatanggap bilang
read fallback para sa isang release cycle.

#### Transparency header + stats

Ang mga describe-transformed na response ay may dalang
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(gawa ng `buildModalityBridgeHeader()` sa `modalityBridge/bridgeStats.ts`,
iniistampa ng `withModalityBridgeHeader()` sa `src/sse/handlers/chatHelpers.ts`).
Ang mga rerouted na request ay **walang** header — hindi ginalaw ang payload at
ang model swap ay makikita na sa `model` field ng response body.

Ang `GET /api/modality-bridge/stats` (management auth, parehong tier gaya ng
`GET /api/settings`) ay nagbabalik ng in-memory per-modality counters
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` para sa `vision`, `audio`, at
`video`. Ang `averageLatencyMs` ay gumagamit ng `latencySamples`, hindi lahat ng attempts, bilang
denominator nito; ang operasyong walang timing ay hindi gumagawa ng pekeng zero-millisecond
sample. Ang `bridged` ay nananatiling backward-compatible alias para sa mga matagumpay na
conversion; ang mga nabigong attempt ay hindi ito dinadagdagan.
Ang mga counter ay nagre-reset sa process restart ayon sa disenyo
(telemetry, hindi accounting).

#### Dashboard configuration

Ang dedicated na dashboard page ay
`/dashboard/settings/modality-bridge`. Ang URL-addressable nitong `Vision`, `Audio`,
at `Video` tabs ay pinapanatili ang query parameters habang pinapalitan ang `tab` value.
Ang Vision tab ay naglalabas ng enablement, mode, model selection (kabilang ang automatic
default), task-aware prompting, advanced timeout/image/description-length/cache
limits, runtime
counters, at isang guarded sample request. Ang Audio tab ay live din: naglalabas ito ng
enablement, isang STT-only model picker na may Auto, timeout/max-clip limits, audio
counters, at isang `input_audio` sample test. Ang Video tab ay functional: iniuulat nito
ang FFmpeg/ffprobe runtime state — isa sa apat na tahasang UI states (`unknown` habang
ang probe ay in-flight o hindi makumpleto, `restricted` sa isang non-loopback
dashboard host kung saan ang probe ay nilalaktawan sa client-side, `unavailable` kapag na-probe
at nakumpirmang wala, o `available` kasama ang FFmpeg/ffprobe versions) — pinapanatili ang
enable/model/frame/video/timeout limits, sinasala ang model picker para sa vision-capable
models, at naglalabas ng video counters.

Ang dating Vision Bridge card sa ilalim ng AI settings ay isang compatibility link papunta sa
bagong page; hindi na ito nagmamay-ari ng pangalawang kopya ng form. Ang Media Providers ay
nagli-link din ng Image-to-Text at Speech-to-Text workflows papunta sa kaukulang Modality
Bridge tabs nang hindi tinatanggal ang umiiral na Speech-to-Text playground.

**Self-loop admission bypass:** kapag ang describe call ay dumadaan sa OmniRoute's
sariling `/v1` self-loop (non-standard provider model), ang sub-request ay nagpapadala ng
`x-omniroute-admission-bypass: internal` at ine-authenticate gamit ang resolved
self-loop credential — ang lokal na `sk_omniroute` sentinel sa local mode, o ang
operator-configured na `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) para
makapagpatakbo pa rin ang `REQUIRE_API_KEY=true` deployments ng describe call. Ang bypass
ay iginagalang lamang para sa mga eksaktong credential na iyon, kaya hindi magagamit ng mga external client
ang header para laktawan ang admission.

Ang mga legacy default ay nasa `src/shared/constants/visionBridgeDefaults.ts`; ang
bagong mode/task-aware/cache defaults at ang settings resolver ay nasa
`src/shared/constants/modalityBridgeDefaults.ts`. Ang guardrail ay naglalabas ng
`deps` constructor option para makapag-inject ang mga test ng fake na `getSettings` at
`callVisionModel` implementations.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ini-intercept ang mga audio-bearing chat request bago ang mga ito makarating sa target na hindi
kilalang tumatanggap ng audio input. Hindi kailanman nire-reroute ang chat request: ang mga audio part ay
ini-transcribe sa pamamagitan ng umiiral na OpenAI-compatible multipart endpoint at ang
napiling chat model ay nagpapatuloy sa mga text transcript.

Daloy:

1. I-resolve ang `supportsAudio` sa pamamagitan ng `getResolvedModelCapabilities()`. May prayoridad ang tahasang metadata ng provider-registry, kasunod ang static na metadata ng modelo, at pagkatapos ang naka-sync na `modalities_input`. Ang idineklarang listahan ng input na walang `audio` ay `false`; kung walang natitirang ebidensya ng capability, ito ay `null`. Parehong ina-activate ng `false` at `null` ang konserbatibong bridge, samantalang nilalampasan ito ng `true`.
2. I-resolve ang mga setting na `modalityBridgeAudio*` at kunin ang mga top-level na bahagi ng audio na maaaring i-splice mula sa bawat mensahe sa pamamagitan ng pinagsasaluhang detector na `detectMediaParts()`. Ang mga sinusuportahang wire shape ay ang OpenAI `input_audio`, `audio_url`, at `source.media_type: "audio/*"`. Natutukoy ang naka-nest na audio para sa routing ngunit hindi ito inaalis ng splice path. Nililimitahan ng `modalityBridgeAudioMaxClips` ang dami ng gawaing isasagawa; mananatiling hindi nababago ang mga susunod na bahagi.
3. Sundin ang naka-configure na `provider/model`, o hayaang isa-isahin ng `selectAudioBridgeModel()` ang `AUDIO_TRANSCRIPTION_PROVIDERS` ayon sa hindi nagbabagong pagkakasunod-sunod sa catalog at piliin ang unang modelong may magagamit na aktibong credential ng provider.
4. Kino-convert ng `callAudioTranscription()` ang base64/data-URI na audio sa multipart na `file`, o dina-download ang remote na `audio_url` sa pamamagitan ng public-only outbound guard na may DNS pinning at limitasyong 25 MB. Pagkatapos, ipinapadala nito sa pamamagitan ng POST ang file at napiling modelo sa lokal na `/v1/audio/transcriptions` self-loop, na ina-authenticate gamit ang `resolveSelfLoopBearer()`. Isinasagawa ng kasalukuyang transcription route ang karaniwang paghahanap ng credential, pangangasiwa ng cooldown/rate-limit, at pagpapadala sa provider.
5. Pinapalitan ng mga matagumpay na tawag ang kani-kanilang bahagi ng `[Audio N]: <transcript>`. Tumatakbo ang mga tawag gamit ang `Promise.allSettled`: pinapanatili ng isang indibidwal na kabiguan ang orihinal na bahagi ng audio na iyon (#4012 contract). Kung mabigo ang lahat ng tawag at napatunayang `supportsAudio === false` ang target, magiging
   `[Audio N]: (unavailable — no STT provider connected)` ang mga bahagi (#8430 contract). Para sa hindi kilalang target (`null`), mananatiling hindi nababago ang resulta kapag bigo ang lahat. Ang napatunayang text-only na target na walang magagamit na STT credential ay makakatanggap ng parehong tahasang stub nang hindi nagsasagawa ng network call.

Ginagamit ng matagumpay na mga transcript ang process-wide na Modality Bridge LRU/TTL cache. Pinagsasama ng key ang audio reference, ang hindi nagbabagong label ng operasyong `audio-transcription`, at ang napiling STT model; hindi kailanman kino-cache ang mga kabiguan. Ina-update ng mga pagtatangka sa audio ang pinagsasaluhang mga counter na `bridged`, `cacheHits`, `failures`, at `lastUsedAt`. Ang mga na-transform na tugon ay may
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; hindi nakakatanggap ng segment ng Audio Bridge ang mga kahilingang hindi binago.

Naka-back sa DB at vina-validate ng Zod ang mga runtime setting:

| Key                           | Default | Saklaw        |
| ----------------------------- | ------- | ------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —             |
| `modalityBridgeAudioModel`    | `""`    | Auto o STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000   |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10          |

Patuloy na kinokontrol ang pinagsasaluhang cache ng `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, at `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Hinaharang nito ang mga top-level na bahagi ng video sa Chat Completions `messages` at Responses API `input` bago tawagin ang target na walang kilalang native na suporta sa video. Ang mga sinusuportahang anyo ay `input_video`, `video_url`, `video_source`, mga HTTPS URL, at mga data URI na `data:video/*;base64,...`. Hindi itinuturing na video ang mga plain na filename sa text.

Ang `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ang nangangasiwa sa pag-traverse ng kahilingan, pagsusuri ng capability/policy, pagsasama-sama sa bawat kahilingan, at payload ng tugon. Ang gawain para sa bawat video — pagkuha, whole-result cache, paglalarawan ng pagkakasunod-sunod ng mga frame (na isinasama ang anumang audio transcript na idineklara ng caller), at mga metric/abort/cleanup para sa bawat pagtatangka — ay nakatago sa likod ng `processVideoPart` sa `videoBridgePipeline.ts`, na tinatawag nang isang beses para sa bawat bahagi ng video sa loob ng loop ng `preCall`. Tinutukoy rin ng module na iyon ang mga tahasang hangganan ng port na `VideoMediaBrokerPort` (pagkuha ng mga byte at pag-extract ng mga na-sample na frame), `VideoAudioTranscriptionPort` (pagsasama ng audio transcript na idineklara ng caller sa mga na-sample na caption), at `VideoDrilldownPort` (ang hangganan ng persistence para sa frame drill-down; hindi pa nakakonekta sa `processVideoPart` — tanging ang hiwalay na route na `/api/modality-bridge/video/drilldown` ang nagsusulat ng mga drill-down entry sa kasalukuyan).

Ang pampublikong path ng kahilingang `/v1` ay hindi kailanman nag-i-import o tumatawag ng subprocess. Dina-download ang mga remote na video sa ilalim ng limitasyong 50 MiB; ang mga inline na base64 video ay may konserbatibong decoded cap na 36 MiB bawat video upang manatili ang model/messages/framing envelope sa loob ng pampublikong limitasyon sa pagtanggap ng JSON request na 50 MiB. Sinusuri ang inline na haba at mga pagtataya sa decoded size bago ang allocation. Kinakailangan ang HTTPS sa paunang remote URL at sa bawat redirect, gamit ang kasalukuyang public-only outbound guard na may DNS pinning. Pagkatapos, tumatawid ang mga byte sa eksaktong internal na broker boundary na `POST /api/modality-bridge/video/extract`. Ang route na iyon ay parehong `LOCAL_ONLY` at `SPAWN_CAPABLE`, tumatanggap lamang ng authenticated na trusted-loopback request na natatangi sa bawat proseso, at hindi kailanman tumatanggap ng URL, filesystem path, executable, o listahan ng argument. Magkahiwalay na ipinapatupad ng API body-size pipeline at ng incremental body reader ng handler ang 50 MiB na limitasyon sa broker input. Ang bounded queue nito ay nagsasagawa ng isang extraction sa bawat pagkakataon, nagpapahintulot ng apat na nakabinbing job, at naglilimita sa nakabinbing input sa 100 MiB.

Sa loob ng broker, ang `ffprobe` ay nagbabasa ng pribadong lokal na file; ang fixed na allowlist ng format ay hindi kasama ang mga format ng playlist at manifest. Para sa mga pinapayagang container na kabilang sa pamilyang MOV, ang mga panlabas na reference ng data ng MOV ay nananatiling disabled bilang default, at hindi pinipili ng fixed na command na gamitin ang mga ito. Parehong gumagamit ang `ffprobe` at `ffmpeg` ng `file`-only protocol whitelist, isang thread, fixed na array ng argumento, walang shell, at mga executable na niresolba mula sa `PATH`. Ang mga attached-picture cover stream ay hindi mga kandidatong maaaring i-play. Dapat matugunan ng lahat ng playable stream ang mga limitasyon, at mas pinipili ang tahasang default stream bago ang deterministic na fallback sa pinakamababang index. Limitado ang mga video sa 600 segundo, 8,192 pixel bawat dimensyon, at 33,554,432 source pixel. Nag-sample ang FFmpeg ng 1–16 midpoint na JPEG frame, pinaliit ang mahabang gilid hanggang sa hindi hihigit sa 1,024 pixel nang hindi ini-upscale ang mas maliliit na input, at hindi kailanman tumatanggap ng URL. `uniform` ang sampling bilang default. Ang opsyonal na `scene_aware` at eksperimental na `segment_aware` na mga patakaran ay nagsasagawa ng isang karagdagang fixed na FFmpeg pass sa na-validate nang lokal na stream, pumipili ng bounded na `showinfo` na mga timestamp ng eksena, at deterministic na bumabalik sa parehong uniform na midpoint kapag nabigo ang detector, nag-timeout, malformed ang output, o walang laman ang set ng kandidato. Ang segment-aware mode ay naglalaan ng midpoint sample nang proporsyonal sa mga na-validate na interval ng eksena; detalyado sa ibaba ang segment-aware na ebidensya at pag-uugali ng fallback. Ang mahigpit na cap na 16 na frame ay inilalapat pagkatapos ng pagpili sa bawat patakaran. Kapag ang isang scene-aware na kahilingan ay may budget na isang frame lamang, ginagamit nito ang uniform midpoint ng aktibong full-video o focus window at nag-uulat ng `policyEffective: uniform`: hindi kayang pangalagaan ng isang napiling scene frame ang parehong temporal na dulo. Maaaring opsyonal na magbigay ang caller ng finite focus window (`start`/`end` segundo); ang mga bound ay ini-clamp sa tagal ng media, tinatanggihan ang reversed o non-finite na window, at ang lahat ng sampling policy ay isinasagawa lamang sa loob ng normalized interval. Kasama ang resultang window sa sampling metadata at sa untrusted description prefix upang makilala ng mga downstream model ang focused na excerpt mula sa buong timeline.

Ang semantic caption focus ay isang hiwalay at tahasang setting. Pinapanatili ng default na `full` analysis mode ang umiiral na frame prompt at hindi kailanman ipinapasa ang request text sa caption model. Sa `focused` mode, ang bridge ay nagbabasa lamang ng pinakabagong non-empty na `text`/`input_text` na isinulat ng user mula sa parehong Chat o Responses container, ginagawa itong NFC, pinagsasama-sama ang mga control character at whitespace, at nililimitahan ito sa 500 Unicode code point. Ang empty na resulta ay bumabalik sa eksaktong `full` prompt. Ang magagamit na hint ay ini-serialize bilang JSON sa isang dedicated na untrusted-user-context block at maaari lamang unahin ang mga observable na detalye; hindi nito maaaring i-override ang hiwalay na babala laban sa pagsunod sa mga instruksyong nakikita o naririnig sa media. Ang textual focus ay hindi kailanman naghihinuha ng `start`/`end` o nagbabago ng temporal sampler.

#### FU-07 estrukturang ebidensya ng segmento

Gumagamit ang `segment_aware` ng isang bounded pre-analysis pass sa na-validate nang lokal na video stream. Ang fixed filter chain ay unang nag-scale sa hindi hihigit sa 320 pixel ang lapad, nag-detect ng mga pagbabago sa eksena at frozen interval, pagkatapos ay nag-sample sa 1 frame bawat segundo para sa blur, average luma, at spatial/temporal na impormasyon. Ang pass na ito ay limitado sa 600 structural sample, isang FFmpeg/filter thread, parehong `file`-only protocol at container allowlist, 1 MiB na bound sa process output, at hindi hihigit sa 30 segundo sa loob ng shared abort/deadline ng broker. Hindi ito kailanman tumatanggap ng command, filter, path, o URL mula sa request.

Ang mga structural value ay deterministic na sampling evidence, hindi semantic na pag-unawa sa video. Hindi sila naghihinuha ng mga subject, aksyon, caption, pagsasalita, o intent ng user. Ang mga hangganan ng eksena at freeze ay bumubuo ng mga segment; ang freeze coverage, blur, exposure, spatial detail, at temporal change ay nakakaapekto lamang sa kung paano inilalaan ang umiiral na 1–16 frame budget. Ang isang ganap na frozen na segment ay nililimitahan sa isang frame, habang ang mga non-frozen na segment ay nagkukumpetensya para sa natitirang budget. Kapag mas marami ang boundary kaysa sa frame, pinapanatili ang uniform na coverage ng timeline upang hindi maitago ng mabibilis na maagang cut ang isang mahabang trailing segment. Ang mga hangganan ng eksena sa loob ng 1-segundong analysis resolution ng isang freeze boundary ay pinagsasama-sama.

Ang mga nawawalang filter, malformed/empty na ebidensya, error ng detector, o ang bounded na pre-analysis timeout ay fail open sa eksaktong uniform midpoint policy. Ang caller abort o deadline ng broker ay hindi nag-fail open: tinatapos nito ang in-flight na subprocess, pinipigilan ang kasunod na frame extraction, at ang private temporary tree ay tinatanggal sa `finally`.

Ang `scripts/perf/video-bridge-fu07-eval.ts` ay bumubuo ng deterministic na totoong FFmpeg fixture para sa post-dedup na caption-call savings, dense-motion na alokasyon ng budget, blur/exposure/SI-TI evidence, mabibilis na cut na may mahabang tail, at gradual-fade na false positive. Itinatala nito ang pre-analysis wall time at, kung available ang `/usr/bin/time`, ang child CPU at peak RSS. Ang mga quality check nito ay structural oracle lamang. Ang tunay na kalidad ng caption-model ay nananatiling `HOLD` dahil ang harness na ito ay walang authorized endpoint o frozen judge. Ang monetary savings ay nananatiling `HOLD` din maliban kung ang `--caption-cost-per-call-usd` ay magbigay ng tahasang positibong per-call estimate; hindi kailanman gumagawa ang script ng alinman sa resulta.

Ang bawat frame ay limitado sa 4 MiB, ang lahat ng raw frame kapag pinagsama-sama ay limitado sa 23 MiB, at ang serialized na tugon ng broker ay limitado sa 32 MiB. Ang pribadong pansamantalang direktoryo ay tinatanggal sa `finally`. Hindi binibigkis ng OmniRoute ang FFmpeg at hindi tumatanggap ng custom na executable path. Bago ang captioning, naglalapat ang bridge ng konserbatibong visual deduplication pass: bawat JPEG ay binabawasan sa 16×16 grayscale buffer at inihahambing lamang sa huling frame na pinanatili. Para sa hiniling na caption budget na higit sa isang frame, nagbibigay ang extraction ng bounded na candidate pool na hanggang dalawang beses ng budget na iyon at hindi hihigit sa 16 na frame. Ang hiniling na cap ay inilalapat lamang pagkatapos ng deduplication, kung saan ang una at huling napiling candidate ay pinapanatili sa final thinning kapag ang budget ay hindi bababa sa dalawa. Ginagamit ng versioned na patakarang `grayscale-16x16-mean-cells-v2` ang mas malaki sa mean luma delta at ang ratio ng mga thumbnail cell na ang normalized delta ay hindi bababa sa 0.05. Ang duplicate threshold ay ang constant na 0.04, pinili para sa predictability sa halip na ilantad bilang runtime setting. Pinapanatili ng pangalawang high-contrast signal na ito ang maliliit na paggalaw at mga pagbabago sa visible text na kayang itago ng mean-only comparison. Ang mga error ng comparator o decoder ay fail open at pinapanatili ang coverage. Pinaghihiwalay ng output metadata ang mga extracted candidate, mga frame na matagumpay na nagamit, at mga visual duplicate na tinanggal.

Ang isang tahasang minarkahang video part ay maaaring humiling ng timestamped contact sheet. Gumagawa ang bridge ng hindi hihigit sa 4-column, 16-frame na JPEG grid. Ang bawat 512-pixel na cell ay nagsusunog ng source timestamp nito sa isang high-contrast na bottom band, habang ang parehong mga timestamp ay nananatili sa textual metadata para sa downstream association at audit. Ang kumpletong JPEG ay nananatiling capped sa 32 MiB. Kung hindi kayang i-decode o i-compose ng `sharp` ang grid, bumabalik ang bridge sa mga indibidwal na JPEG frame; ang client abort ay nagpo-propagate pa rin sa sheet operation.

Ang promotion evidence ay sadyang hiwalay sa synthetic composition microbenchmark. Ang `scripts/perf/video-bridge-contact-sheet-eval.ts` ay nagtatakda ng schema-versioned na A/B harness para sa tunay na OpenAI-compatible vision models. Sinusukat nito ang provider-reported tokens, end-to-end wall latency (kasama ang sheet composition), bilang ng model-call, at manifest-defined fact retention. Ang raw model responses ay hindi isinusulat sa report; tanging SHA-256 digest at matched fact ID ang pinapanatili. Ang harness ay hindi gumagawa ng network o paid model call maliban kung ipapasa ang `--execute-real` at naka-configure ang `--model`, `OMNIROUTE_BASE_URL`, at `OMNIROUTE_API_KEY`. Kung wala ang tahasang real run na iyon, ang machine-readable verdict nito ay nananatiling `HOLD`; ang synthetic payload/call-count measurements lamang ay hindi promotion evidence.

Maaaring mag-attach ang mga caller ng opsyonal na `transcript.cues` array sa isang suportadong video part kapag mayroon na silang aligned text. Ang bawat cue ay dapat magdala ng `text`, isang finite na `start`/`end` interval sa loob ng probed duration, at isang whitelisted na `source` (`client`, `embedded`, o `audio-bridge`); ang `confidence` ay naka-default sa `1` at dapat manatili sa pagitan ng `0` at `1`. Ang mga eksaktong duplicate na cue ay pinagsasama-sama. Hindi kailanman nagsisimula ang OmniRoute ng transcription mula sa metadata na ito: ang mga validated cue ay kinokopya sa inilarawang resulta kasama ang source, confidence, at interval, at ginagawa bilang untrusted observations kasabay ng mga frame caption. Ang invalid, out-of-range, o provenance-free na text ay tinatanggihan sa halip na ihalo sa caption stream. Ang parehong request-body transcript channel ay nag-normalize ng ibinigay na provenance sa `client`, kasama ang self-asserted na `embedded` o `audio-bridge` label. Tanging isang server-owned adapter ang makakapagtalaga ng mga trusted label na iyon sa pamamagitan ng code-only na `trustedSource` argument; hindi kayang maabot ng isang request JSON field ang argument na iyon. Ang transcript text ay nananatiling untrusted media-derived content, anuman ang provenance nito, at hindi kailanman dapat magdetermina ng authorization.

Maaaring magbigay ang isang advanced caller ng `audioTranscript` track para sa parehong video; ito ay itinuturing na client-provided text, hindi patunay ng server transcription. Ang fusion seam ay nagpapatakbo ng visual at audio observations sa ilalim ng isang deadline at abort signal, inaayos ang mga ito sa isang common timeline, kinokollapse ang exact duplicates, at nag-uulat ng partial result kapag isang panig lamang ang nagtagumpay. Ang isang invalid na `audioTranscript` ay nagde-degrade sa partial result na iyon — pinapanatili ang visual description at nagtatala ang audio branch ng sanitized failure code — sa halip na mabigo ang buong video. Ang per-branch availability, partial flag, at sanitized failure code ay pinapanatili sa inilarawang resulta, sa guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), sa result-cache metadata, at sa bridge fusion counters. Ang default na Video Bridge path ay hindi nag-i-invoke ng speech-to-text o nagda-download ng pangalawang media copy; kung wala ang tahasang track na iyon, nananatili itong video-only.

**Pagpapanatili ng transcript (#12150 P1).** Awtomatiko itong nalalapat sa tuwing
nagre-render ang Video Bridge (na opt-in mismo) ng isang transcript cue — walang hiwalay na
flag para sa pagpapanatili. Kapag nag-render ang isang request ng anumang transcript cue (isang idineklara ng caller na
`transcript` o isang pinagsamang `audioTranscript`), minamarkahan ito ng guardrail bilang
`videoBridgeObserved` at gumagawa ng na-redact na shadow ng paglalarawan ng video —
isang kaparehong rendering kung saan pinapalitan ang free-text body ng bawat cue ng
`[redacted-video-transcript]`, na binubuo sa pamamagitan ng pagpapalit sa structured cue field
bago buuin ang string (hindi kailanman sa pamamagitan ng pag-parse sa na-flatten na text, kaya walang nilalaman ng cue —
mapanlinlang man o karaniwan, kabilang ang mga body na naglalaman ng `]` gaya ng
`[inaudible]`/`[music]` — ang maaaring manatili). Pinapalitan sa request body ng naka-persist na call log
ang bawat text part na nagmula sa video ng na-redact na shadow na iyon, na itinutugma ayon sa pagkakapareho ng
nilalaman; muling binabasa ang `fullText` anchor mula sa natapos na pre-call guardrail
payload, kaya matagumpay pa rin ang pagtutugma matapos muling isulat nang in-place ng mga susunod na chain guardrail
(ang mga masker ng PII at credential, na may mga priority na 10/95) ang text ng paglalarawan at
matapos baguhin ng system-prompt/handoff/memory injection ang anyo ng message array. Ang
body na ipinapadala upstream sa model ay hindi binabago. Wala ring inilalagay na
pangmatagalang Memory ang isang naobserbahang request (nilalaktawan ang extraction na nagmula sa request at
response), kaya hindi maie-echo ng sariling tugon ng model ang transcript text papunta sa Memory.

**Mga raw video field (#12430).** Kapag naka-enable ang bridge at hindi alam o wala ang native video support, ina-activate rin ng mga nakatakdang `transcript`/`audioTranscript` field ang `videoBridgeObserved`, kahit nabigo ang paglalarawan o may limitasyong `maxVideos`. Kabilang ang `null` at mga empty string; hindi kabilang ang mga absent field at non-video metadata. Nire-redact ng mga pinanatiling kopya ang mga field na ito o inaalis ang request, at nilalaktawan ang mga cache/Memory.

Sa mga fallback path na iyon, ang mga valid na cue mula sa caller ay nagiging mga sinusuportahang `text`/`input_text`
part sa halip na mga hindi karaniwang provider field. Ang parehong track na ibinigay sa request
ay nananatiling hindi pinagkakatiwalaang mga `client` observation, na may tahasang babala na hindi
inilarawan ang video at hindi na-verify ang mga timestamp laban sa media. Ang umiiral na
256-cue/64-KiB na kabuuan at mga budget sa bawat cue ay nalalapat sa dalawang track nang magkasama;
dapat magkasya ang mga timestamp sa 600-segundong ceiling ng broker at sa anumang ibinigay na focus
window. Itinatapon ang mga invalid na track at hindi ipinapasa bilang arbitraryong text; maaari pa ring
gamitin ang isang valid na sibling maliban kung lumampas ang pinagsamang budget ng mga ito. Walang idinaragdag na
text ang mga null/empty field. Walang idinaragdag na media fetch o transcription ang fallback na ito.
Inaalis ang mga transcript extension field mula sa fallback video carrier at sa mga
`video_url`/`source` object nito. Nananatiling mahigpit ang OpenAI wire allowlist; nananatiling
available ang mga video carrier na hindi alam kung native, at pinananatili ng mga kilalang text-only target ang mga ligtas na marker.
Pinoprotektahan ng mga structured redaction shadow ang idinugtong na transcript text, habang
hindi binabago ang orihinal na request na pagmamay-ari ng caller. Pinananatili ng mga target na may native support at
mga naka-disable na bridge ang kasalukuyan nilang bypass behavior.

Ginagamit ng mga karagdagang pinanatiling kopya ang parehong signal ng naobserbahang request. Ang raw
na pre-guardrail client-request snapshot, in-memory pending request, at early
rejected-request log ay istruktural na pinapalitan ang mga transcript field sa mga video part;
ang mga string prompt na binuo ng mga pipeline stage at context handoff ay nire-redact
sa persisted-request-body sink. Dahil sa naka-persist na `video_content_removed` marker,
fail-closed ang `previous_response_id` continuation sa halip na muling buuin ang
text na sadyang itinapon. Kung mawala sa isang naobserbahang request ang
redaction shadow nito sa bawat part bago ang logging, o kahit isa sa ilang video shadow
ang hindi maitugma pagkatapos ng mga susunod na pagbabago sa request, ganap na
inaalis ang pinanatiling request body sa halip na magpanatili ng bahagyang na-redact na transcript.

Para sa isang naobserbahang request, maaaring sipiin ng tugon ng model ang anumang bahagi ng
transcript nang walang structured cue boundary. Kaya pinapalitan ang naka-persist na call-log
`responseBody` nito ng isang omission marker; hindi pinananatili ang detalyadong
pipeline artifact (na maaaring maglaman ng mga upstream/client body at stream chunk).
Nilalaktawan ng mga semantic, idempotency, at reasoning-replay cache ang mga read at write
para sa request na iyon. Hindi binabago ang provider request at ang response na nakikita ng client.
Dini-drain ang mga early keepalive byte mula sa pansamantalang buffer kapag inalis ang
detalyadong artifact. Ang malformed EventStream warning ng Kiro ay nag-uulat lamang ng bilang ng payload byte,
at hindi kailanman ng nilalaman nito o ng raw error ng JSON parser.
Hindi nito inaangkin na na-audit na ang bawat hindi nauugnay na provider/plugin diagnostic;
sinusubaybayan sa #11658 ang mas malawak na pagsusuri sa mga retained sink.

Ang internal na `/api/modality-bridge/video/drilldown` lifecycle ay isang hiwalay na
loopback/token-authenticated cache substrate. Nangangailangan din ang bawat operasyon ng isang
canonical opaque principal ID. Bago i-enable ang isang production caller, dapat nitong
kunin ang ID na iyon mula sa authenticated tenant at hindi kailanman dapat mag-forward ng
value na pinili ng client. Itinatali ng mga cache key ang principal na iyon sa mga canonical session at
video-reference ID, ang mga key lamang na hinango sa SHA-256 ang iniimbak, at nililimitahan ang mga read
at deletion sa parehong principal. Nag-iimbak ang cache ng hindi hihigit sa 16 derived JPEG
frame sa bawat entry, ine-expire ang mga ito pagkalipas ng sampung minuto, at sumusuporta sa mga bounded
na `start`/`end` read o tahasang session deletion.

Ang bawat principal ay limitado sa 16 na entry at 64 MiB ng canonical JPEG data. Ang mga
limitasyong iyon ay hiwalay sa global na ceiling na 64 na entry/256 MiB: ang pressure sa principal quota
ay nag-e-evict lamang ng mga least-recently-used entry ng principal na iyon bago isaalang-alang ang global
LRU eviction. Inaalis ang mga expired na entry mula sa parehong principal at
global accounting kapag may cache activity, habang hindi nagko-commit ng bahagyang replacement ang
cancellation at validation failure.

Tinatanggihan ng cache ang non-canonical Base64, excess padding, non-JPEG media, malformed o
truncated na mga JPEG, at mga JPEG na naglalabas ng babala habang bounded full-image `sharp`
decode. Muli nitong ini-encode ang bawat tinanggap na imahe bilang canonical JPEG, hinahango ang width at height
mula sa na-decode na bytes sa halip na magtiwala sa mga field ng caller, at itinatapon ang anumang trailing
polyglot bytes sa halip na panatilihin ang mga ito. Tanging ang bounded canonical compressed buffer
ang sinisingil sa parehong quotas. Kasama sa JSON wire limit ang Base64 overhead para sa 32 MiB
decoded-input ceiling. Bawat
naka-store na derivation ay nagtatala ng validated JPEG format/resolution, sampling policy,
derivation version, creation time, server-computed content hash, at hashed parent
reference kasama ang parent-content hash ng trusted caller. Sinusuri ang cancellation
sa pagitan ng asynchronous decode/hash phases bago ang atomic cache commit.

Hindi pa ikinokonekta ng tranche na ito ang isang production producer sa route at hindi
nagbibigay ng multi-resolution variant selection. Kaya ang transparent Video Bridge request
path ay walang idinadagdag na trabaho, habang ang tenant-bound principal derivation at
ang buong FU-08 multi-resolution lifecycle ay nananatiling explicit na follow-up work sa halip
na idokumento bilang kumpletong behavior.

Ang mga frame ay kinukuhaan ng caption nang sunud-sunod gamit ang naka-configure na Video model. Ang walang laman
na Video override ay nagmamana ng Vision setting; kapag parehong walang laman, pinipili ng Vision
auto-router ang effective vision-capable model. Pinapalitan ng mga successful na caption
ang orihinal na part ng stable na `[Video description:` prefix na nagmamarka rin
sa text bilang isang untrusted na media-derived observation at nagsasabi sa mga downstream
model na huwag sundin ang mga instruction na makikita sa media. Kasama sa frame-caption cache keys
ang JPEG bytes, prompt, timestamp, at effective model; ang mga successful na caption lamang ang naka-cache. Pinananatili ng mga cache entry ang aktwal na successful producer model,
kabilang ang fallback model; iniuulat ng bridge ang `mixed` kapag magkaibang frame
ang ginawa ng magkaibang model. Ginagamit muli ng cache hit ang producer identity na iyon
sa halip na i-relabel ito bilang requested routing plan. Ang whole-video result
cache ay naka-key sa bawat input na nagbabago sa output — prompt, effective
model, sampling policy, frame count, semantic analysis mode, ang SHA-256
fingerprint ng normalized focus hint, focus window, `transcript`,
`audioTranscript`, at ang contact-sheet flag — kaya ang pagbabago sa alinman sa mga
dimension na iyon ay cache miss, hindi kailanman stale reuse. Ang visual dedup policy
version, threshold, at bounded candidate-frame count ay explicit din sa
result-cache key at metadata; kaya ang isang pagbabago sa policy ay hindi maaaring gumamit muli ng stale
whole-video description. Pinananatili ng Result-cache v4 metadata ang mode at
fingerprint, hindi kailanman ang raw user task. Iniuulat ng guardrail metadata ang parehong
requested at effective analysis modes; ang requested na `focused` mode na walang
usable user text ay iniuulat bilang effective na `full`.

Kinukuha ng guardrail ang bawat supported na video part pero hindi naglalarawan ng higit sa
`modalityBridgeVideoMaxVideos`. Para sa target na napatunayang may
`supportsVideo === false`, ang mga nabigo at lampas sa limit na video ay nagiging explicit safe
text markers para walang raw video na matira. Kapag unknown ang capability, pinananatili ng mga part na iyon
ang kanilang video carrier; ang anumang fallback transcript ay sumusunod sa bounded text
conversion sa itaas. Ang mga target na may `supportsVideo === true` ay binabypass ang bridge.
Ang client request abort signal ay nagpo-propagate sa download, broker queue,
subprocesses, at caption calls; humihinto ang aborts sa pagitan ng mga video at hindi kailanman nagfa-fail open
sa raw media.

Ang runtime settings ay DB-backed at Zod-validated:

| Susi                                | Default     | Saklaw / pag-uugali                                                                                                 |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opsyonal na runtime, opt-in                                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Pinapanatili ng `full` ang generic na caption; gumagamit ang `focused` ng bounded, untrusted na latest-user context |
| `modalityBridgeVideoModel`          | `""`        | Nagmamana ng Vision Bridge model                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, o proportional na `segment_aware`; bumabalik sa `uniform` kapag nag-fail ang detector     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                      |

Ang mga legacy persisted Video timeout value na lampas sa 120 segundo ay kini-clamp sa
broker deadline; ang mga bagong settings write na lampas sa limit na iyon ay tinatanggihan.
Ang `GET /api/modality-bridge/video/runtime` ay nangangailangan ng trusted stamped loopback
locality bago ang authentication o runtime probing, pagkatapos ay nangangailangan ng management
auth. Nagbabalik lamang ito ng `available`, sanitized FFmpeg/ffprobe versions, at fixed
na dahilan kapag hindi available ang runtime. Ang internal extraction endpoint ay hindi
isang public upload API: kapag saturated ang queue, nagbabalik ito ng `503` kasama ang `Retry-After`; ang pag-disconnect ng caller
ay nagbabalik ng `499`; at ang fixed broker deadline ay nagbabalik ng `504`. Nagdadagdag ang mga converted response ng
`video->text;model=<visionModel>;parts=<videos>` sa central
`x-omniroute-modality-bridge` header nang hindi tinatanggal ang Vision o Audio segments.

### PII Masker (`piiMasker.ts`)

Tumatakbo sa **parehong** stage.

- **`preCall`** ay nagko-clone ng payload, dumadaan sa `system`, `messages`, `input`, at
  `prompt` (kabilang ang mga plain string item), at inilalapat ang `processPII()` (mula sa
  `@/shared/utils/inputSanitizer`) sa mga field na string na `content`/`text`. Kapag
  `PII_REDACTION_ENABLED=true`, nire-redact ang natukoy na PII sa outbound
  payload. Ito ay independiyente sa `INPUT_SANITIZER_MODE` (na kumokontrol lamang sa
  prompt-injection policy). Kapag naka-off ang redaction, itinatala ng call ang mga detection
  count nang hindi nire-rewrite ang content.
- **`postCall`** ay deep-clone ang response, pinapatakbo ang `sanitizePIIResponse()` at
  ang Responses-API-shape masker (`maskResponsesOutput` — sumasaklaw sa
  `output_text` at `output[].content[].text`). Kung may anumang redaction na nangyari,
  pinapalitan ng modified response ang orihinal.

Hindi kailanman nagba-block ang guardrail; nagdadagdag lamang ito ng annotation (`meta.detections`,
`meta.redacted`) o nagre-rewrite.

#### Pagpili kada uri, mga custom pattern at detection counter

Pinipili ng **Dashboard → Settings → Security → PII masking** kung _ano_ ang ika-redact. Hindi
nito binubuksan ang masking: `PII_REDACTION_ENABLED` pa rin ang nagko-control (request) at
`PII_RESPONSE_SANITIZATION` (response + SSE), parehong naka-off bilang default.

- **Pagpili kada uri** — ang mga built-in na id ay nakalista sa
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ang hindi pag-set ay nangangahulugang lahat ng
  uri (ang pag-uugali bago umiral ang setting na ito). Ang pattern na `ssn_us` ng request engine
  ay naka-map sa `ssn`. Pinupuno lamang ng mga template (Minimal, Standard, Financial,
  Brazilian, USA, Full) ang mga checkbox sa UI.
- **Mga custom pattern** — hanggang 20 regex o wildcard pattern (`*` = hanggang 64
  non-whitespace character, `?` = isa). Ang mga match ay nagiging `[CUSTOM_REDACTED]`.
  Ang bawat pattern ay dumadaan sa `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): hindi hihigit sa 500 character, limitado ang mga flag
  sa `g i m s u`, dapat mag-compile, dapat pumasa sa `safe-regex` (catastrophic
  backtracking), at hindi dapat mag-match ng empty string o redaction placeholder.
  Ang pattern na nabigo ay tinatanggihan kapag sine-save at kapag tine-test, at ang nakaimbak na row
  na nabigo ay nilalaktawan sa runtime sa halip na i-compile. Tumatakbo lamang ang mga custom pattern
  habang naka-on ang masking.
- **Mga detection counter** — bilang kada uri (hindi kailanman ang mga matched value), nasa
  memory at nire-reset sa restart (`src/lib/pii/piiDetectionStats.ts`). Tumatas lamang ang mga ito
  habang naka-on ang masking.

Nasa `key_value` table ang mga setting (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) at binabasa sa pamamagitan ng 1 s cache. API:

| Method | Path                     | Layunin                                                                              |
| ------ | ------------------------ | ------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Estado ng flag, `enabledTypes`, `customPatterns`, mga detection counter              |
| `PUT`  | `/api/settings/pii`      | Palitan ang `enabledTypes` (`null` = lahat) at/o `customPatterns`                    |
| `POST` | `/api/settings/pii/test` | Dry-run ng isang pattern laban sa sample na hindi hihigit sa 8 KB; walang naka-store |

Lahat ng tatlo ay nangangailangan ng management auth at vine-validate ang body gamit ang Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Natutukoy ang mga adversarial na istruktura sa content na ibinigay ng user at ipinapatupad ang
na-configure na policy. Ang behavior ay pinapatakbo ng mga environment variable at constructor
option:

| Setting         | Env var                                                                                               | Default | Epekto                                                                                                                                                                                                                  |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Naka-enable     | `INPUT_SANITIZER_ENABLED`                                                                             | `true`  | Kapag `false`, nagsa-short-circuit ang guardrail.                                                                                                                                                                       |
| Mode            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`  | Patakaran sa injection: `block`, `warn`, o `log`. (Tinatanggap ang `redact` para sa back-compat pero **hindi** nito tinatanggal ang injection text; ang request PII rewrite ay kinokontrol ng `PII_REDACTION_ENABLED`.) |
| Block threshold | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Minimum na severity na kailangan para mag-block. Ang Medium ay observe-only bilang default.                                                                                                                             |

**Precedence ng mode** (`getMode`): caller `options.mode` →
**override ng feature flag sa DB** ng `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`. Kaya ang override sa dashboard ang nananaig sa mga env var, kaya
kinokontrol ng Feature Flags UI ang tumatakbong guard nang live (walang restart). Ang pagbasa sa DB ay fail-safe:
kung mag-error ito, babalik ang guard sa behavior na nakabatay sa env, at kapag walang
naka-set na override, kapareho ng env-only resolution ang behavior.

Mga pinagmumulan ng detection:

1. `sanitizeRequest()` mula sa `@/shared/utils/inputSanitizer` (shared detector
   set na ginagamit sa ibang bahagi ng pipeline).
2. Mga built-in na `DEFAULT_GUARD_PATTERNS` (kasalukuyang `system_override_inline` at
   `markdown_system_block`, parehong `high` severity).
3. Opsyonal na `customPatterns` na ipinapasa sa constructor options (mga string, regex,
   o `{ name, pattern, severity }` record).

Kapag `mode === "block"` **at** may kahit isang detection na umaabot sa severity threshold, nagbabalik ang `preCall` ng `{ block: true, message: "Request rejected: suspicious content detected" }`. Sa `warn`/`log` na mode, naglo-log ang guardrail ngunit pinapayagan ang call. Ini-export din ang shared helper na `evaluatePromptInjection()` para sa mga caller na kailangang i-evaluate ang mga prompt nang hindi dumadaan sa registry.

**Limitasyon sa pag-scan (v3.8.20):** sinusuri lamang ng detector ang **unang 16 KB** ng pinagsamang prompt text — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) sa `src/shared/utils/inputSanitizer.ts`. Parehong nagsasagawa ang `detectInjection()` at `evaluatePromptInjection()` ng `slice(0, MAX_INJECTION_SCAN_BYTES)` bago patakbuhin ang pattern loop. Nasa malapit sa itaas ng isang input ang mga injection directive, kaya nililimitahan nito ang regex CPU/GC sa mga payload na daan-daang KB ang haba nang hindi pinapahina ang detection (tingnan ang #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Tumatakbo sa **parehong** stage, huli sa default chain (priority `95`). Nagre-redact ng mga kilalang pattern ng API-key / secret-token mula sa outbound payload (nilalaman ng mensahe, mga argumento ng tool-call, mga tool result) **at** sa response ng provider, para ang credential na na-paste sa isang prompt (o na-echo pabalik ng isang tool result) ay hindi ma-leak sa upstream provider o pabalik sa client.

- **Opt-in lamang**, kaparehong convention ng PII redaction (katabi ng Hard Rule #20): naka-disable maliban kung `settings.credentialRedactionEnabled === true` **o** `CREDENTIAL_REDACTION_ENABLED=true`. Kapag naka-off ito, no-op ang guardrail — hindi ito kailanman nagba-block at hindi kailanman nagsusulat muli.
- Binabagtas ng `redactCredentials()` ang buong payload/response tree (`walkValue()`, ligtas sa prototype-pollution, ligtas sa cycle sa pamamagitan ng `WeakSet`) at pinapalitan ang mga tugma ng placeholder na `[REDACTED:<type>]`, at kino-clone lamang ang mga branch na aktuwal na nagbago.
- Sinasaklaw ng `CREDENTIAL_PATTERNS` ang mga LLM provider key (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS token (GitHub, Slack, Linear, Notion, npm, Postman, Discord), payment key (Stripe, Square), cloud key (AWS access key, Twilio, SendGrid, Mailgun), mga private key / JWT, mga connection string na may dalang credential (`mongodb://user:pass@...`, atbp.), at isang generic na `Authorization`/`x-api-key`/`api-key`/`apikey` header-value pattern. Ang mga hugis-header na key (`authorization`, `x-api-key`, `api-key`, `apikey`) ay nire-redact nang structural (value lamang, pinapanatili ang scheme prefix tulad ng `Bearer `/`Basic `) sa halip na sa pamamagitan ng generic text regex.
- Hindi kailanman nagba-block ang guardrail; nagsusulat lamang ito muli (`modifiedPayload` / `modifiedResponse`) at nagdadagdag ng annotation (`meta.credentialsRedacted`, `meta.count`).

Pananggalang sa regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Batayang Kontrata (`base.ts`)

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
  block?: boolean; // kapag true, agad na ihihinto ang chain
  message?: string; // ipinapakita kapag bina-block
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ibinabalik ng preCall upang muling isulat ang request
  modifiedResponse?: TValue; // ibinabalik ng postCall upang muling isulat ang response
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

Ipinahihiwatig ng isang guardrail na "walang pagbabago" sa pamamagitan ng pagbabalik ng `void`, `{}`, o
`{ block: false }`. Kapag nagbalik ng `modifiedPayload`/`modifiedResponse`, pinapalitan nito
ang value na dumadaloy sa chain para sa mga downstream guardrail.
Dinadala ng `signal?: AbortSignal` ang lifecycle ng caller papunta sa mga guardrail. Ang pag-abort ng request ang sinadyang fail-open na eksepsiyon: humihinto sa pagproseso at naglilinis ang mga media bridge nang hindi ibinabalik ang raw media sa isang target na alam na hindi sumusuporta rito.

## Registry (`registry.ts`)

Inilalantad ng singleton na `guardrailRegistry` ang:

- `register(guardrail)` — nagdaragdag ng guardrail (o pinapalitan ito batay sa na-normalize na pangalan) at
  muling nagsasaayos ayon sa pataas na `priority`.
- `clear()` / `list()` — mga administratibong helper.
- `runPreCallHooks(payload, context)` — iniisa-isa ang mga aktibong guardrail, ipinapasa ang
  payload sa pamamagitan ng `modifiedPayload`, at humihinto sa unang `block: true`.
- `runPostCallHooks(response, context)` — kaparehong daloy sa panig ng response.
- `resetGuardrailsForTests({ registerDefaults })` — nililinis ang state at opsiyonal na
  muling nirerehistro ang mga default para sa malinis na test isolation.

Parehong nagbabalik ang dalawang runner ng `{ blocked, payload|response, results, guardrail?, message? }`
kung saan ang `results` ay isang array ng mga record na `GuardrailExecutionResult` na may
mga field na `blocked`, `skipped`, `modified`, `error`, at `meta` para sa bawat guardrail,
na kapaki-pakinabang sa tracing.

### Pag-disable ng Mga Guardrail Para sa Bawat Request

Pinagsasama-sama ng `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ang isang
listahan ng mga pangalan ng guardrail na inalisan ng duplicate at dapat laktawan para sa kasalukuyang
request. May limang channel, na binabasa sa ganitong pagkakasunod-sunod at pinagsasama sa iisang listahan
(nangingibabaw ang unang paglitaw kapag nag-aalis ng duplicate):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` sa request body (nasa top-level)
3. `metadata.disabledGuardrails` sa request body (kapag object lamang ang `metadata`)
4. Header na `x-omniroute-disabled-guardrails`
5. Legacy header na `x-disabled-guardrails`

Pinagsasama ang lahat ng limang channel, kabilang ang dalawang header: kapag ipinadala ang parehong
`x-omniroute-disabled-guardrails` at `x-disabled-guardrails`, lalaktawan ang union ng
kanilang mga listahan, at hindi na itinatago ng isang walang-lamang modernong header ang legacy na header
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), inayos sa
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Maaaring mga array ng string o comma-separated na string ang mga value; tina-trim ang mga pangalan
at ginagawang lowercase kebab-case (`pii_masker` → `pii-masker`), at inaalis ang mga
entry na walang laman. Ipinapasa ang resulta sa registry sa pamamagitan ng `context.disabledGuardrails`,
na lumalaktaw sa mga tumutugmang guardrail (`skipped: true` sa `results`).

Ang disable list ay nakaaapekto lamang sa **registry**. Ang `block` mode ng prompt injection ay
isang mandatoryong boundary: tinatawag ng injection-guard middleware
(`src/middleware/promptInjectionGuard.ts`) ang `evaluatePromptInjection()`
nang walang anumang disable list na kontrolado ng caller (ang hindi na ginagamit na
`resolveDisabledGuardrails({ body })` call na dati nitong ginagawa ay inalis sa
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), kaya ang isang request
na nagdi-disable sa `prompt-injection` ay tatanggihan pa rin sa `block` mode. Sinadya
ang ganitong disenyo. Kontrolado ng caller ang mga disable channel (request body,
metadata, mga header), at hindi dapat magawang i-off ng caller ang isang security
control na itinakda ng operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Binabago lamang ng header
union mula sa [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
kung aling mga registry guardrail ang lalaktawan; hindi nito hinahayaan ang isang client
na lampasan ang middleware. Sinusubaybayan sa v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417)
ang mga mandatoryong patakaran sa guardrail para sa bawat key at bawat group.
Tingnan ang [Saklaw at mga limitasyon](#coverage-and-limits).

## Pagkakasunod-sunod ng Pagpapatupad

Para sa bawat request na dumadaan sa `src/sse/handlers/chat.ts` at
`open-sse/handlers/chatCore.ts` (ang mga chat-family route na nakalista sa ilalim ng
[Saklaw at mga limitasyon](#coverage-and-limits)):

1. Binubuo ng `resolveDisabledGuardrails(...)` ang listahan ng mga lalaktawan mula sa API key, body,
   at mga header.
2. Pinapatakbo ng `guardrailRegistry.runPreCallHooks(body, ctx)` ang mga guardrail ayon sa pataas
   na pagkakasunod-sunod ng priority:
   - Itinatala bilang `skipped` ang mga naka-disable na guardrail.
   - Maaaring baguhin ng `preCall` ng bawat guardrail ang payload sa pamamagitan ng `modifiedPayload`.
   - Agad na pinatitigil ng unang `block: true` ang chain at nagbabalik ang handler
     ng tugon ng pagtanggi mula sa guardrail.
3. Ang payload (na maaaring nabago) ay dumadaloy papunta sa combo routing at upstream
   dispatch.
4. **Non-streaming lamang:** pagkatapos mabuo ang tugon,
   pinapatakbo ng `guardrailRegistry.runPostCallHooks(...)` ang parehong chain sa
   tugon. Kapag may `block: true` dito, itinatapon ang upstream response at ibinabalik ang HTTP 400. Ganap na nilalaktawan ng mga streamed response ang hakbang na ito.

Ang mga guardrail na nag-throw ay itinatala nang may `error: <message>` at nila-log sa pamamagitan ng
`logger.warn`, ngunit nagpapatuloy ang chain — fail-open ayon sa disenyo.

## Saklaw at mga limitasyon

Ang guardrail registry ay naka-wire lamang sa chat pipeline. Ang mga limitasyong ito ay
itinakda ng `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` at
`tests/unit/guardrail-pipeline-characterization.test.ts`; sadyang i-update ang mga test na iyon
kapag nagbago ang gawi.

### Kung saan pinapatakbo ang mga hook

| Hook / kontrol                      | Pinapatakbo sa                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Mga request na pinangangasiwaan ng `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (at `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, at ang Telegram chat proxy. Gayundin ang dashboard test endpoint na `/api/guardrails/test`. Nagbabalik ng HTTP 400 ang isang pre-call block. |
| `runPostCallHooks`                  | Mga **non-streaming** na chat response lamang (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Hindi ito kailanman naaabot ng mga streamed response.                                                                                                                                                                                                                                                                                                     |
| Streaming PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), na ipinapasok sa pipeline sa `streamingPipeline.ts` kapag naka-on ang `PII_RESPONSE_SANITIZATION`. Hindi ito guardrail, kaya hindi ito naaapektuhan ng mga disable channel.                                                                                                                                                                                                                       |
| Injection-guard middleware (legacy) | Bawat `/v1` route na may prompt, kabilang ang chat-family (tingnan ang [saklaw ng route](#injection-guard-route-coverage--red-team-phase-8--block-d)). Prompt injection lamang.                                                                                                                                                                                                                                                                                 |

### Ano ang hindi saklaw

- Ang mga **media, embedding, at data route** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) ay hindi kailanman umaabot sa registry. Walang
  PII masking, credential masking, o modality bridge na tumatakbo roon. Ang tanging
  pagsusuri sa mga ito ay ang legacy injection-guard middleware.
- Walang post-call guardrail ang mga **streamed response**: walang post-call na `pii-masker` o
  `credential-masker`, at walang post-call block. Ang streaming PII
  transform lamang ang inilalapat (kapag naka-on ang `PII_RESPONSE_SANITIZATION`). Hindi
  nire-redact ang credential na ibinalik sa isang streamed response.
- **Mga disable channel kumpara sa middleware (ayon sa disenyo):** sinusuri ng middleware
  ang prompt injection gamit ang sarili nitong pagtawag sa `evaluatePromptInjection()`, nang hindi
  nagpapasa ng anumang disable list na kontrolado ng caller. Ang `block` mode ay isang mandatoryong
  boundary na hindi maaaring lampasan ng mga disable na kontrolado ng caller, kabilang ang mga chat-family route
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ang pag-disable sa
  `prompt-injection` ay lumalaktaw lamang sa registry guardrail.

### Ano ang nakakakita sa tugon bago ang post-call

Sa non-streaming path, ang pagkakasunod-sunod ay: memory extraction → pagpapatupad ng built-in tool
→ mga post-call guardrail → paglabas dahil sa post-call block → pag-store sa semantic cache.

- **Pag-extract ng memorya** at **pagpapatupad ng tool** ay nakikita ang response
  bago pa ito ma-rewrite o ma-block ng post-call guardrails. Mula noong
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), pinapadaan ng
  pag-extract ng memorya ang na-extract na text sa `sanitizePII` kapag
  naka-on ang `PII_RESPONSE_SANITIZATION` (parehong streaming at
  non-streaming), pero ang isang response na hinaharangan ng post-call sa
  bandang huli ay naialok pa rin sa memorya at sa mga tool.
- **Ang semantic cache** ay nag-iimbak ng response pagkatapos ng post-call, kaya
  iniimbak nito ang na-rewrite na response, at ang na-block na response ay
  hindi kailanman naka-cache. Ang mga cache entry ay naka-key bawat API key.

## Konfigurasyon

Mga environment variable na binabasa ng mga built-in na guardrail:

| Variable                              | Ginagamit ng              | Epekto                                                                                                                       |
| ------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Itakda sa `false` upang ganap na i-disable ang detection.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Patakaran sa injection: `warn`, `block`, o `log`. Hindi nire-rewrite ng legacy na value na `redact` ang teksto ng injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Mode para sa injection guard; feature flag din sa DB na **nag-o-override** sa mga env var (DB > ENV).                        |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Pinakamababang severity na tinatanggihan ng `MODE=block`: `high` (default), `medium`, o `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Legacy na alias para sa `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Kapag `true`, nire-redact ang PII ng request (independyente sa injection mode).                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kinokontrol ang behavior ng masker sa response side.                                                                         |

Ang mga guardrail ng Modality Bridge ay nagbabasa ng runtime config mula sa DB-backed settings
store (`getSettings()`), hindi sa mga env var. Ang mga primary key ng Vision ay
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, at
`modalityBridgeCacheMaxEntries`. Ang mga legacy na key na
`visionBridge*` ay tinatanggap lamang bilang dokumentadong one-cycle read
fallback; ang mga write mula sa dashboard ay gumagamit ng mga primary key. Nasa
`src/shared/constants/modalityBridgeDefaults.ts` ang mga default at ang fallback
resolver, habang ang mga legacy constant ay pinapanatili sa
`src/shared/constants/visionBridgeDefaults.ts`.

Ang Audio ay gumagamit ng `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, at `modalityBridgeAudioMaxClips`, kasama ang shared
na `modalityBridgeCache*` settings. Walang legacy-key fallback ang Audio dahil
ipinakilala ang mga key na ito kasama ng Modality Bridge schema.

Ang Video ay gumagamit ng `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, at
`modalityBridgeVideoTimeout`, kasama ang shared na `modalityBridgeCache*` settings.
Naka-disable ito bilang default dahil ang FFmpeg/ffprobe ay mga optional na
operational dependency at ang frame captioning ay nagdadagdag ng latency at
model cost.

## Mga Custom na Guardrail

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

Mga Hakbang:

1. Gumawa ng `src/lib/guardrails/myGuardrail.ts` na nag-e-extend sa `BaseGuardrail`.
2. I-implement ang `preCall` at/o `postCall`.
3. Maaaring mag-register sa oras ng import (push mula sa `registerDefaultGuardrails`) o tawagin ang `guardrailRegistry.register(...)` sa runtime — pinapalitan ng registry ang anumang naunang guardrail na may parehong normalized na pangalan.
4. Magdagdag ng mga test sa ilalim ng `tests/unit/` (mga umiiral na halimbawa:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pagsubok

Gamitin ang `resetGuardrailsForTests()` sa pagitan ng mga test para magsimula sa kilalang estado.
Ipasa ang `{ registerDefaults: false }` para magsimula sa walang laman na registry at i-register lamang ang mga guardrail na sinusubok. Tumatanggap ang Vision Bridge ng dependency injection (`deps.getSettings`, `deps.callVisionModel`); inilalantad ng Audio Bridge ang katumbas na mga seam para sa settings, capabilities, pagpili ng STT model, pagsusuri ng credential, at transkripsyon. Kaya't masusubukan ng mga test ang dalawang flow nang walang DB o network access.

## Tingnan Din

- `src/lib/guardrails/` — implementasyon
- `src/shared/utils/inputSanitizer.ts` — shared detector na nagpapagana ng prompt-injection at PII masking
- `src/shared/constants/visionBridgeDefaults.ts` — mga default ng Vision Bridge at listahan ng forced-bridge model
- `src/shared/constants/modalityBridgeDefaults.ts` — mga shared na runtime default ng Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonal layer (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — kumpletong reference ng env var

## Saklaw ng ruta ng injection-guard at red-team (Phase 8 · Block D)

Ang injection-guard (`createInjectionGuard` / `withInjectionGuard`) ay sumasaklaw sa lahat ng ruta na tumatanggap ng mga prompt ng user. Ginagalang nito ang `INJECTION_GUARD_MODE` (default `warn` = log lamang; `block` = nagbabalik ng HTTP 400 `SECURITY_001`).

| Uri            | Mga Ruta                                                                                                                                             | Default na mode |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Text (umiiral) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Generative     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Data           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

Ang text extraction (`extractMessageContents`) ay sumasaklaw sa `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nightly, `nightly-llm-security.yml`):** bine-verify ng promptfoo na bina-block ng bawat ruta ang OWASP-LLM corpus sa `INJECTION_GUARD_MODE=block`; nagpapatakbo ang garak ng mga probe (nilalaktawan kapag walang secret). Kasama ang `moderations` para sa consistency. Ang block mode ay isang mandatory na hangganan: binabalewala ng `evaluatePromptInjection()` ang per-request disable list na ipinapasa ng middleware dito, kaya **hindi** inaalis ng `disabledGuardrails` ang isang ruta mula rito ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Ang nightly workflow (`.github/workflows/nightly-llm-security.yml`, cron + manual dispatch) ay may dalawang job:

- **`promptfoo-guard` (blocking)** — pinapatakbo ang `promptfoo eval -c promptfooconfig.yaml` gamit ang `INJECTION_GUARD_MODE=block`. Bawat adversarial case (hal. "ignore all previous instructions…", DAN-style jailbreaks) ay nag-a-assert na ang response ay may `error.code === "SECURITY_001"`, ibig sabihin, aktwal na tinanggihan ng guard ang request.
- **`garak` (advisory)** — pinapatakbo ang garak `--probes promptinject,dan,leakreplay` laban sa lokal na instance ng OmniRoute (`http://localhost:20128/v1`). Nakadepende sa isang provider secret (`PROMPTFOO_PROVIDER_KEY`); maayos na nilalaktawan at may suffix na `|| true`, kaya nag-uulat ito nang hindi binabagsak ang CI.

Ang saklaw ng guard helper (`createInjectionGuard` / `withInjectionGuard`) ay sumasakop sa bawat rutang `/v1` na may prompt; ang prompt text ay kinukuha mula sa `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ng `extractMessageContents()` sa `src/shared/utils/inputSanitizer.ts`.
