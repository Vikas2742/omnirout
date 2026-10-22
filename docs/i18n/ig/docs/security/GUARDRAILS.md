# Guardrails (Igbo)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Isi mmalite nke eziokwu:** `src/lib/guardrails/`
> **Emelitere ikpeazụ:** 2026-10-17 — v3.8.52 (agbakwunyere [Mkpuchi na oke](#coverage-and-limits):
> ụzọ na ụzọ nzaghachi ndị hooks na-erute, isiokwu nkwụsị agbakwụnyere ọnụ (#16412), ọnọdụ mgbochi
> injection dịka oke a ga-enwerịrị (#16413), yana ihe na-ahụ nzaghachi tupu post-call)

Guardrails na-amanye nchekwa, amụma, na mgbanwe ọdịnaya n'ókè dị n'etiti
OmniRoute na ndị na-eweta upstream. Guardrail ọ bụla nwere ike inyocha (ma
jụ, gbanwee, ma ọ bụ tinye nkọwa ma ọ bụrụ na achọrọ) payload arịrịọ (`preCall`) na
nzaghachi upstream (`postCall`).

Sistemụ ahụ bụ **fail-open**: ọ bụrụ na guardrail atụfuo mperi mgbe ọ na-arụ ọrụ, registry
na-edekọ mperi ahụ ma gaa n'ihu na guardrail na-esote kama ime ka
arịrịọ ahụ daa. Mgbochi bụ mkpebi doro anya (`block: true`), ọ bụghị ihe mberede.
Naanị otu ewezuga bụ arịrịọ a kwụsịrị: mgbe a kwụsịrị `signal` nke onye kpọrọ ya,
guardrail nke tụfuru mperi ga-ajụ ịrụ hook ahụ kama ịwụfe ya.

Hooks ndị ahụ anaghị arụ ọrụ n'ụzọ ọ bụla ma ọ bụ na nzaghachi ọ bụla. Gụọ
[Mkpuchi na oke](#coverage-and-limits) tupu ịdabere na guardrail dịka
njikwa nchekwa.

## Guardrails arụnyere n'ime sistemụ

Registry na-ebunye guardrails isii na-akpaghị aka dịka usoro mkpa ha si dị mgbe a na-eme import
(lee `registry.ts` → `registerDefaultGuardrails()`):

| Mkpa | Aha                 | Oge            | Faịlụ                 |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nọmba mkpa ndị dị ala na-arụ ọrụ **mbụ**.

### Njikọ Ọhụụ (`visionBridge.ts`) — Njikọ Modality PR-1

GLM 5.3 base model na `glm-5.3-{low,high,max}` nwere metadata registry/spec
`supportsVision:false` doro anya. Ụdị GLM 5.3 Flash
ka bụ model ọhụụ-nke-ala. Ụzọ `/v1/messages` nke Claude Code na-abanye
n'usoro guardrail pre-call `handleChat` nke a na-ekekọrịta **tupu** ntụgharị
Claude-gaa-OpenAI; a ga-akọwarịrị ma ọ bụ hazie onyonyo tool-result `Read`
dị n'ime tupu ntụgharị ahụ ebuli ha banye n'ọdịnaya OpenAI `image_url` (#17069).

Ọ na-ejide arịrịọ nwere onyonyo e zigara **model ndị na-enweghị ọhụụ** wee
bugharịa arịrịọ niile gaa na model nwere ike ịhụ onyonyo, ma ọ bụ dochie akụkụ
onyonyo ahụ na nkọwa ederede nke model ọhụụ a pụrụ ịhazi mepụtara tupu
oku upstream. Nke a na-eme ka ndị na-eweta text-only nwee ike ijikwa payload
multimodal n'ụzọ na-apụtaghị ìhè.

Usoro:

1. Wụfee ma ọ bụrụ na model e bu n'obi akwadolarị ọhụụ (belụsọ ma ọ pụtara na
   ndepụta njikọ a manyere `isVisionBridgeForcedModel`).
2. Wepụta akụkụ onyonyo site na `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), nke na-enyefe ọrụ ahụ n'aka **unified media
   detector** `detectMediaParts()` dị na `open-sse/utils/mediaParts.ts` — nke
   bụ naanị isi mmalite nke eziokwu a na-ekekọrịta na combo compatibility filter.
   Mwepụta na-eji allowlist nke shapes `replaceImageParts` nwere ike itinyeghachi
   (nkwekọrịta extract↔replace): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, na Responses
   API `input_image`. A na-ewepụtakwa ma dochie onyonyo kwekọrọ ekwekọ dị n'ime Claude Code
   `tool_result.content` na Responses tool outputs n'ụzọ mbụ ha; shapes ndị bụ naanị ihe ngosi
   bụ ihe combo-filter, ya mere anaghị ewepụta ha.
   Wụfee ma ọ bụrụ na ahụghị nke ọ bụla.
3. Kpebie nhazi runtime site na `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): keys ntọala `modalityBridge*`
   ọhụrụ na-ebute ụzọ; keys `visionBridge*` ochie ka bụ **fallback nke otu cycle**
   (rollback window). Wụfee tupu ịgagharị media ọ bụla mgbe
   agbanyụrụ bridge ahụ.
4. Onye-ahọpụta ọnọdụ (`modalityBridgeVisionMode`, lee tebụl dị n'okpuru) na-ekpebi
   reroute megide describe. Reroute na-eweghachi `modifiedPayload` ebe naanị `model`
   ka agbanwere, tinyere meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ụzọ describe: kpachie onyonyo na `maxImages`, hazie prompt dabere na ọrụ,
   lelee cache describe, kpọọ model ọhụụ **n'otu oge**
   (`Promise.allSettled`), ma tinye akụkụ ederede `[Image N]: <description>` n'ọnọdụ
   ha. Describe dara ada na-ewepụta `null`: a na-echekwa onyonyo raw maka
   targets amaghi/ndị nwere ọhụụ (#4012), mana **direct target text-only
   e kwadoro** ma ọ bụ combo na-enweghị ọhụụ na-enweta stub ederede doro anya
   `(unavailable — no vision-capable provider connected)` maka
   onyonyo ọ bụla a na-akọwaghị, gụnyere ọdịda akụkụ ụfọdụ na onyonyo gafere
   oke oku describe (#17069). Fallback describe combo dị ugbu a mgbe ha niile dara ada
   ka dịkwa (#8430).
6. Weghachite `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Onye-ahọpụta ọnọdụ (`modalityBridgeVisionMode`)

| Ọnọdụ      | Ndabara | Omume                                                                                                                                                                                                                                                                                              |
| ---------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔       | Usoro heuristic ochie, nke a na-emetụghị aka (#6640/#7204): ụdịdị na-abụghị combo/`auto/` na-atụgharị gaa na ụdịdị ọhụụ kacha mma, belụsọ ma ụdịdị mbụ ahụ enweelarị nzere ndị a pụrụ iji (mgbe ahụ, ọ ga-akọwa); ebumnuche combo na-akọwa mgbe niile.                                             |
| `describe` |         | Na-akọwa mgbe niile — a na-amafe ngọngọ ntụgharị ahụ kpamkpam; ụdịdị onye ọrụ họọrọ na-aza mgbe niile.                                                                                                                                                                                             |
| `reroute`  |         | Manye ntụgharị: a na-agafe ihe nche nke na-edobe ụdịdị nwere nzere. Ihe nche nzere nke **ebumnuche** ntụgharị ka na-emetụta — mgbe enweghị ebumnuche ọhụụ a pụrụ iji, bridge ahụ na-eji njehie doro anya gbochie arịrịọ kama ịkọwa ma ọ bụ iziga onyonyo raw na ebumnuche na-akwado naanị ederede. |

Ọnọdụ ndị a manyere na-akwụsị usoro ozugbo **tupu** heuristic auto amalite; omume `auto`
bụ otu byte kpọmkwem na guardrail dị tupu PR-1.

#### Oke API key (`visionBridgeKeyScope.ts`)

Mgbe API key nke onye kpọrọ oku machibidoro `allowedConnections`, ọdọ quota
(`allowedQuotas`) ma ọ bụ ụdịdị (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge ahụ na-ahọrọ naanị
ụdịdị ntụgharị na nkọwa nke key ahụ nwere ike iji, n'elu njikọ ndị key ahụ nwere ike
iji. Oku nkọwa ahụ na-agafe mgbe niile na OmniRoute self-loop site na iji
header `x-omniroute-self-loop-key-id`, ka arịrịọ nkata na-anata ya wee
manyekwa iwu njikọ na ụdịdị nke key ahụ ọzọ. `enforceApiKeyPolicy()`
na-asọpụrụ header ahụ naanị mgbe e jikọtara ya na self-loop bearer, ya mere ọ nwere ike
ime ka ohere dị warara naanị, a ga-ajụkwa id nke a na-enweghị ike ịchọta.

Ọ bụrụ na enweghị ụdịdị ọhụụ enyere key ahụ ikike, **ebumnuche akwadoro na ọ bụ nke ederede naanị**
ga-ajụ arịrịọ onyonyo ahụ n'ime usoro ahụ site na HTTP 400 doro anya kama
ibuga byte onyonyo gaa na upstream na-enweghị ike ịhazi ya (#17069). Maka ebumnuche nwere
ikike ọhụụ amaghị ama ma ọ bụ nke native, ụzọ nkọwa ahụ na-edowe omume fail-open
ya gara aga (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Arịrịọ ndị na-enweghị key, yana key ndị na-enweghị mmachi ndị a, na-eme otu ihe ahụ
ha na-eme na mbụ.

#### Prompt nkọwa maara task (`modalityBridgeVisionTaskAware`)

Ndabara bụ **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) na-agbakwụnye
ederede nke **ozi onye ọrụ ikpeazụ** (ebipụrụ ruo mkpụrụedemede 500) na prompt
nkọwa bụ isi, na-eduzi nkọwa ahụ n'ihe onye ọrụ jụrụ n'ezie
(ụkpụrụ codex-vision-proxy) ma na-arịọ ụdịdị ọhụụ ka ọ depụta ederede a na-ahụ anya.
Mgbe flag ahụ gbanyụrụ — ma ọ bụ mgbe enweghị ederede onye ọrụ — a na-eji prompt bụ isi
n'enweghị mgbanwe.

Arịrịọ OpenAI-compatible nke describe self-loop n'onwe ya (`callVisionModelSingle()`
n'ime `visionBridgeHelpers.ts`) na-arịọ `image_url.detail: "high"` mgbe niile —
n'enweghị ọnọdụ ọ bụla, maka onye kpọrọ oku/onye na-enye ọrụ ọ bụla, ọ bụghị dabere na mgbaàmà
ọ bụla sitere n'aka client. Nlele nkọwa dị ala na-ebelata izi ezi OCR maka kpọmkwem ọrụ
ntụgharị ederede prompt a na-arịọ, ya mere oku nkọwa ahụ n'onwe ya na-arịọ nkọwa dị elu
mgbe niile n'agbanyeghị ọkwa nkọwa arịrịọ mbụ batara jiri. Nke a
na-emetụta naanị body nke arịrịọ nkọwa dị n'ime; ọ naghị agbanwe otú
OmniRoute si ebuga `image_url.detail` nke onye kpọrọ oku n'arịrịọ bụ isi —
a na-etinye ndabara ahụ iche, ma naanị maka client OpenCode achọpụtara, n'ime
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Alaka
wire-format Anthropic nke describe self-loop enweghị field `detail`
ya mere ndabara abụọ ahụ anaghị emetụta ya.

#### Oke mmepụta nkọwa (`modalityBridgeVisionMaxChars`)

| Key                            | Ndabara | Oke                   |
| ------------------------------ | ------- | --------------------- |
| `modalityBridgeVisionMaxChars` | `0`     | `0` ma ọ bụ 100–50000 |

`0` (ndabara) pụtara **enweghị oke** — nkọwa nke
`callVisionModel()` weghachiri na-agafe n'enweghị mgbanwe, nke na-echekwa
omume dị ugbu a. Uru ọ bụla n'etiti 100–50000 na-ebipụ nkọwa ahụ ma tinye
suffix `…` tupu etinyeghachi ya dịka `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` n'ime `src/lib/guardrails/visionBridge.ts`).
Bulie nke a maka ọrụ OCR nwere ọtụtụ nkọwa ebe ụdịdị downstream chọrọ
ntụgharị ederede zuru ezu; wedata ya iji kpachie ojiji token n'ụdịdị ọhụụ na-ekwu ọtụtụ okwu.
Field dashboard ahụ dị na panel Advanced nke taabụ Vision
(`modality-bridge-max-chars` n'ime `ModalityBridgeVisionTab.tsx`) ma na-ebuli uru ọ bụla
n'etiti 1 na 99 ruo na opekempe 100, ebe ọ na-ahapụ `0` e dere kpọmkwem
n'enweghị mgbanwe — `0` bụ uru Zod ziri ezi n'onwe ya
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ọ bụghị naanị
ndabara “edobeghị”.

#### Cache nkọwa (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dị na ebe nchekwa, nke usoro niile na-ekekọrịta.
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` nwere
framing prefix ogologo (enweghị nkukota n'ókè field). Akụkụ model bụ
model bridge **ahaziri**, ọ bụghị model zara n'ezie —
`callVisionModel` nwere ike iji fallback n'ime ya, na imepụta key maka mbọ ọ bụla ga-eme ka
cache kewaa n'ọtụtụ akụkụ. A naghị echekwa nkọwa dara ada na cache. Ntọala:

| Key                             | Ndabara | Oke     |
| ------------------------------- | ------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`  | —       |
| `modalityBridgeCacheTtlMinutes` | `60`    | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`   | 10–5000 |

#### Ịhazigharị onyonyo dịpụrụ adịpụ (nkowa self-loop/nweta base64)

Mgbe bridge ahụ n'onwe ya na-eweta onyonyo **dịpụrụ adịpụ** — self-call nkọwa Anthropic na ntụgharị base64 nke claude-wire-format (`ensureBase64ImagesForClaudeWire`), ha abụọ site na `fetchRemoteImageAsDataUri()` dị na `visionBridgeHelpers.ts` — a na-ebufe data URI e nwetara site na `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) tupu etinye ya na arịrịọ vision-model. A na-ebelata onyonyo ndị buru oke ibu ruo **2048px n'akụkụ kacha ogologo** (nke kwekọrọ na oke nha OpenAI/Anthropic tinyelarị n'akụkụ sava), nke na-ebelata bytes/latency nke nbulite n'emeghị ka ihe vision model na-ahụ gbanwee. Ịgbanwe nha na-eji `sharp`, nke a na-ebunye site na dynamic import: n'elu platform ebe native binary ya anaghị enwe ike ibunye, `normalizeDataUri()` **anaghị atụpụta njehie ma ọlị** — ọ na-alaghachi n'ịnyefe bytes mbụ ahụ ozugbo, ka ụzọ nkọwa/ntụgharị-base64 wee na-arụ ọrụ mgbe niile. A na-enyekwa bytes ndị na-abụghị onyonyo (nwetara site na fetch nke na-enyeghị onyonyo enwere ike ịkọwa) ka ha gafee na-agbanweghị. Ịhazigharị a metụtara naanị onyonyo bridge ahụ wetara maka self-call nke ya — anaghị etinye ya n'ọrụ ma ọlị na raw passthrough payload nke onye na-akpọ ọrụ, dịka ụkpụrụ mgbanwe nke na-arụ ọrụ naanị mgbe ahọrọ ya si dị (Iwu Siri Ike #20).

#### Schema ntọala + migration

A na-eji Zod enyocha igodo `modalityBridge*` ọhụrụ ndị dị na `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, otu igodo atọ nke `modalityBridgeCache*`, na otu `modalityBridgeAudio*` nke Audio Bridge na-eji. Migration `141_modality_bridge_settings.sql` na-edetuo ụkpụrụ `visionBridge*` ochie dị ugbu a gaa na igodo ọhụrụ kwekọrọ na ha (ọ bụ idempotent, ọ dịghị mgbe ọ na-edechi ụkpụrụ `modalityBridge*` onye na-ahụ maka sistemụ tinyere); a ka na-anabata igodo ochie ndị ahụ dịka read fallback maka otu release cycle.

#### Header nghọta doro anya + stats

Nzaghachi ndị gbanwere site na nkọwa na-ebu `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (nke `buildModalityBridgeHeader()` dị na `modalityBridge/bridgeStats.ts` wuru, ma `withModalityBridgeHeader()` dị na `src/sse/handlers/chatHelpers.ts` tinyere). Arịrịọ ndị e zigara n'ụzọ ọzọ anaghị enweta header **ọ bụla** — payload ahụ agbanweghị, a hụkwara mgbanwe model ahụ n'ime field `model` nke body nzaghachi ahụ.

`GET /api/modality-bridge/stats` (management auth, otu ọkwa ahụ dịka `GET /api/settings`) na-eweghachi counters nke modality ọ bụla echekwara na memory `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` maka `vision`, `audio`, na `video`. `averageLatencyMs` na-eji `latencySamples`, ọ bụghị attempts niile, dịka denominator ya; operation na-enweghị timing anaghị emepụta sample efu-millisecond. `bridged` ka bụ alias dakọtara na nsụgharị ochie maka ntụgharị ndị gara nke ọma; attempts dara ada anaghị abawanye ya.  
A na-emegharị counters gaa na efu mgbe process malitegharịrị dịka e mere atụmatụ (telemetry, ọ bụghị accounting).

#### Nhazi dashboard

Peeji dashboard a raara nye ya bụ `/dashboard/settings/modality-bridge`. Tabs `Vision`, `Audio`, na `Video` ya ndị URL nwere ike ịkọwa na-echekwa query parameters mgbe a na-agbanwe ụkpụrụ `tab`. Tab Vision na-enye ohere maka ime ka ọ rụọ ọrụ, mode, nhọrọ model (gụnyere default akpaka), prompting dabere na task, oke timeout/image/ogologo-nkọwa/cache ndị dị elu, counters runtime, na arịrịọ sample echekwara nke ọma. Tab Audio na-arụkwa ọrụ: ọ na-enye ohere maka ime ka ọ rụọ ọrụ, model picker nke bụ naanị STT nwere Auto, oke timeout/max-clip, counters audio, na ule sample `input_audio`. Tab Video na-arụ ọrụ nke ọma: ọ na-akọ ọnọdụ runtime FFmpeg/ffprobe — otu n'ime ọnọdụ UI anọ doro anya (`unknown` mgbe probe ahụ ka na-aga n'ihu ma ọ bụ na ọ nweghị ike imecha, `restricted` na host dashboard na-abụghị loopback ebe a na-awụfe probe ahụ n'akụkụ client, `unavailable` mgbe emechara probe ma kwenye na ọ dịghị, ma ọ bụ `available` yana versions FFmpeg/ffprobe) — na-echekwa oke enable/model/frame/video/timeout, na-enyocha model picker ka ọ gosipụta naanị models nwere ike vision, ma na-enye counters video.

Kaadị Vision Bridge ochie dị n'okpuru ntọala AI bụzi njikọ ndakọrịta gaa na peeji ọhụrụ ahụ; ọ naghịzi enwe oyiri nke abụọ nke form ahụ. Media Providers na-ejikọkwa workflows Image-to-Text na Speech-to-Text na tabs Modality Bridge kwekọrọ na ha, n'ewepụghị playground Speech-to-Text dị ugbu a.

**Self-loop admission bypass:** mgbe describe call gafere self-loop `/v1` nke OmniRoute n'onwe ya (model provider na-abụghị nke ọkọlọtọ), sub-request ahụ na-eziga `x-omniroute-admission-bypass: internal`, a na-ejikwa credential self-loop a chọpụtara mee authentication — sentinel `sk_omniroute` mpaghara na local mode, ma ọ bụ igodo env `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` onye na-ahụ maka sistemụ haziri (#1350), ka deployments nwere `REQUIRE_API_KEY=true` wee ka nwee ike ịrụ describe call ahụ. A na-asọpụrụ bypass ahụ naanị maka credentials ndị ahụ kpọmkwem, ya mere external clients enweghị ike iji header ahụ wụfee admission.

Defaults ochie dị na `src/shared/constants/visionBridgeDefaults.ts`; defaults ọhụrụ maka mode/task-aware/cache na settings resolver dị na `src/shared/constants/modalityBridgeDefaults.ts`. Guardrail ahụ na-enye constructor option `deps` ka ule nwee ike ịtinye implementations `getSettings` na `callVisionModel` adịgboroja.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Ọ na-ejide arịrịọ chat nwere audio tupu ha eruo target a na-amaghị na ọ na-anabata input audio. Ọ dịghị mgbe ọ na-eziga arịrịọ chat ahụ n'ụzọ ọzọ: a na-edegharị akụkụ audio ka ha bụrụ ederede site na endpoint multipart dị ugbu a nke dakọtara na OpenAI, model chat a họọrọ na-aga n'ihu site na transcripts ederede.

Usoro:

1. Kpebie `supportsAudio` site na `getResolvedModelCapabilities()`. Metadata
   provider-registry akọwapụtara nke ọma na-ebute ụzọ, metadata model static na-esote, ma
   `modalities_input` emekọrịtara na-esochi. Ndepụta input ekwuputara nke na-enweghị `audio`
   bụ `false`; enweghị ihe akaebe capability fọdụrụ bụ `null`. Ma `false` ma `null`
   na-eme ka bridge nchekwa rụọ ọrụ, ebe `true` na-agafeghị ya.
2. Kpebie ntọala `modalityBridgeAudio*` ma site na detector `detectMediaParts()`
   a na-ejikọ ọnụ wepụta akụkụ audio top-level ndị enwere ike ịsplice site na ozi ọ bụla.
   Wire shapes ndị akwadoro bụ OpenAI `input_audio`, `audio_url`, na
   `source.media_type: "audio/*"`. A na-achọpụta audio nested maka routing mana
   splice path anaghị ewepụ ya. `modalityBridgeAudioMaxClips` na-etinye oke n'ọrụ;
   akụkụ ndị na-abịa mgbe e mesịrị anaghị agbanwe.
3. Soro `provider/model` ahaziri, ma ọ bụ kwe ka `selectAudioBridgeModel()` gagharịa
   `AUDIO_TRANSCRIPTION_PROVIDERS` n'usoro catalog kwụsiri ike wee họrọ model mbụ
   nwere credential provider active a pụrụ iji.
4. `callAudioTranscription()` na-atụgharị audio base64/data-URI ka ọ bụrụ multipart
   `file`, ma ọ bụ budata `audio_url` remote site na outbound guard nke public-only
   nwere DNS pinning na oke 25 MB. Mgbe ahụ, ọ na-eziga faịlụ ahụ na model ahọpụtara
   site na POST gaa na self-loop `/v1/audio/transcriptions` local, jiri
   `resolveSelfLoopBearer()` mee authentication. Route transcription dị ugbu a
   na-arụ lookup credential nkịtị, njikwa cooldown/rate-limit, na dispatch provider.
5. Oku gara nke ọma na-eji `[Audio N]: <transcript>` dochie akụkụ ha. Oku ndị ahụ
   na-eji `Promise.allSettled` arụ ọrụ: ọdịda nke otu oku na-echekwa akụkụ audio
   mbụ ahụ (#4012 contract). Ọ bụrụ na oku niile ada ma gosi na target ahụ bụ
   `supportsAudio === false`, akụkụ ndị ahụ na-aghọ
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contract). Maka
   target amaghi (`null`), nsonaazụ ebe oku niile dara anaghị agbanwe. Target
   text-only egosiri nke na-enweghị credential STT a pụrụ iji na-enweta stub
   doro anya ahụ kwa, n'emeghị oku network.

Transcript ndị gara nke ọma na-eji cache LRU/TTL nke Modality Bridge nke process
niile na-ekekọrịta. Key ahụ na-ejikọta reference audio, label operation
`audio-transcription` kwụsiri ike, na model STT ahọpụtara; anaghị etinye ọdịda na
cache. Mgbalị audio na-emelite counter `bridged`, `cacheHits`, `failures`, na
`lastUsedAt` ndị a na-ekekọrịta. Response ndị agbanwere na-ebu
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; request
ndị a na-emetụghị anaghị enweta segment Audio Bridge.

Ntọala runtime dị na DB ma Zod na-validate ha:

| Key                           | Default | Range               |
| ----------------------------- | ------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                   |
| `modalityBridgeAudioModel`    | `""`    | Auto ma ọ bụ STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                |

`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries` ka na-achịkwa cache a na-ekekọrịta.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Ọ na-ejide akụkụ video top-level dị na Chat Completions `messages` na Responses
API `input` tupu akpọọ target nke a na-amaghị na ọ nwere nkwado video native.
Shapes ndị akwadoro bụ `input_video`, `video_url`, `video_source`, URL HTTPS,
na data URI `data:video/*;base64,...`. A naghị ewere filename nkịtị dị na text
dịka video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) na-ahụ maka traversal request,
nlele capability/policy, aggregation kwa request, na payload response.
Ọrụ kwa video — acquisition, cache whole-result, ịkọwa usoro frame
(nke na-ejikọta transcript audio ọ bụla caller kwuputara), yana
metrics/abort/cleanup kwa mgbalị — zoro n'azụ `processVideoPart` dị na
`videoBridgePipeline.ts`, nke a na-akpọ otu ugboro maka akụkụ video ọ bụla n'ime
loop `preCall`. Module ahụ na-akọwakwa ókè port doro anya `VideoMediaBrokerPort`
(inweta bytes na iwepụta frame ndị e sampled), `VideoAudioTranscriptionPort`
(ijikọta transcript audio caller kwuputara na caption ndị e sampled), na
`VideoDrilldownPort` (ókè persistence nke frame drill-down; ejikọbeghị ya na
`processVideoPart` — naanị route `/api/modality-bridge/video/drilldown` dị iche
na-ede entry drill-down ugbu a).

Request path public `/v1` anaghị ebubata ma ọ bụ kpọọ subprocess. A na-ebudata
video remote n'okpuru oke 50 MiB; video base64 inline nwere oke decoded kwa video
36 MiB nke e ji akpachapụ anya, ka envelope model/messages/framing nwee ike ịnọ
n'ime oke nnabata request JSON public nke 50 MiB. A na-enyocha ogologo inline
na estimate decoded-size tupu allocation. A chọrọ HTTPS na URL remote mbụ na
redirect ọ bụla, site n'iji outbound guard public-only dị ugbu a nwere DNS
pinning. Bytes ndị ahụ na-agafe kpọmkwem ókè broker internal
`POST /api/modality-bridge/video/extract`. Route ahụ bụ ma `LOCAL_ONLY` ma
`SPAWN_CAPABLE`, ọ na-anabata naanị request trusted-loopback nke a kwadoro
authentication ya kwa process, ọ naghịkwa anabata URL, filesystem path,
executable, ma ọ bụ argument list. Pipeline body-size API na incremental body
reader nke handler na-amanye oke input broker 50 MiB n'onwe ha. Queue ya nwere
oke na-arụ otu extraction n'otu oge, na-ekwe ka job anọ na-eche, ma na-etinye
oke 100 MiB na input ndị na-eche.

N'ime broker ahụ, `ffprobe` na-agụ faịlụ mpaghara nzuzo; ndepụta ụdị
a kwadoro nke edobere anaghị agụnye ụdị playlist na manifest. Maka container
ezinụlọ MOV ndị akwadoro, ntụnye data MOV mpụga ka na-abụ nke agbanyụrụ na
ndabara, iwu ahụ edobere anaghịkwa ahọrọ ịgbanye ha. Ma `ffprobe` ma `ffmpeg`
na-eji ndepụta protocol ndị akwadoro nke bụ naanị `file`, otu thread, usoro
argument ndị edobere, enweghị shell, yana executable ndị a chọtara site na
`PATH`. Stream mkpuchi attached-picture abụghị ndị a ga-ahọrọ maka ịkpọ.
Stream niile enwere ike ịkpọ ga-emezurịrị oke ndị ahụ, a na-ahọrọkwa stream
ndabara akọwapụtara tupu fallback nwere otu nsonaazụ mgbe niile nke index kacha
ala. A na-amachi vidiyo na sekọnd 600, pixel 8,192 n'akụkụ ọ bụla, yana pixel
isi mmalite 33,554,432. FFmpeg na-ewere frame JPEG etiti 1–16, na-ebelata
akụkụ ogologo ruo pixel 1,024 kachasị elu n'emeghị ka ntinye ndị pere mpe bawanye,
ọ dịghịkwa mgbe ọ na-anata URL. Sampling bụ `uniform` na ndabara. Policy
`scene_aware` nke nhọrọ na `segment_aware` nke nnwale na-eme otu pass FFmpeg
ọzọ edobere n'elu stream mpaghara ahụ a kwadoroala, họrọ timestamp scene
`showinfo` ndị nwere oke, ma laghachi n'ụzọ nwere otu nsonaazụ mgbe niile na
midpoint uniform ndị ahụ ma ọ bụrụ na detector dara, oge agwụ, output adịghị
n'ụdị ziri ezi, ma ọ bụ candidate set tọgbọ chakoo. Ụdị segment-aware na-ekenye
sample midpoint n'ụzọ dabara na interval scene ndị akwadoro; a kọwara ihe
akaebe segment-aware na omume fallback n'uju n'okpuru. A na-etinye oke siri
ike nke frame 16 mgbe emechara nhọrọ na policy ọ bụla. Mgbe arịrịọ scene-aware
nwere naanị budget otu frame, ọ na-eji midpoint uniform nke windo full-video
ma ọ bụ focus na-arụ ọrụ ma na-akọ `policyEffective: uniform`: otu frame scene
ahọpụtara enweghị ike idowe nsọtụ oge abụọ ahụ. Onye na-akpọ nwere ike inye
windo focus nwere oke (`start`/`end` sekọnd) dịka nhọrọ; a na-akpagide bounds
n'ime duration media, a na-ajụ windo ndị a tụgharịrị ma ọ bụ ndị na-abụghị
finite, a na-emekwa policy sampling niile naanị n'ime interval normalized.
A na-etinye windo si na ya pụta na metadata sampling nakwa na prefix nkọwa
a na-atụkwasịghị obi, ka model ndị dị n'okpuru nwee ike ịmata ọdịiche dị n'etiti
excerpt e lekwasịrị anya na timeline zuru ezu.

Ilekwasị anya na caption semantic bụ ntọala ọzọ doro anya ma dị iche. Ụdị
analysis `full` nke ndabara na-echekwa prompt frame dị ugbu a, ọ dịghịkwa mgbe
ọ na-ebuga ederede arịrịọ na model caption. N'ụdị `focused`, bridge ahụ na-agụ
naanị `text`/`input_text` kachasị ọhụrụ nke onye ọrụ dere na nke na-adịghị
efu efu site n'otu container Chat ma ọ bụ Responses ahụ, na-eme ka ọ bụrụ NFC,
na-ejikọta control character na whitespace, ma na-amachi ya na code point
Unicode 500. Nsonaazụ tọgbọ chakoo na-alaghachi na prompt `full` ahụ kpọmkwem.
A na-ede hint bara uru dị ka JSON n'ime block untrusted-user-context pụrụ iche,
ọ pụkwara naanị ibute nkọwa a pụrụ ịhụ ụzọ; ọ gaghị agbanwe ịdọ aka ná ntị
dị iche megide ịgbaso ntụziaka a pụrụ ịhụ ma ọ bụ ịnụ n'ime media. Focus ederede
anaghị atụpụta `start`/`end` ma ọ bụ gbanwee temporal sampler.

#### Ihe akaebe segment nhazi FU-07

`segment_aware` na-eji otu pass pre-analysis nwere oke n'elu stream vidiyo
mpaghara ahụ a kwadoroala. Filter chain edobere na-ebu ụzọ ebelata obosara ruo
pixel 320 kachasị elu, chọpụta mgbanwe scene na interval ndị jụrụ oyi, wee
na-ewere sample na frame 1 kwa sekọnd maka blur, luma nkezi, yana ozi
spatial/temporal. A na-amachi pass ahụ na sample nhazi 600, otu thread
FFmpeg/filter, otu protocol nke bụ naanị `file` na ndepụta container ndị
akwadoro, oke output process 1 MiB, yana sekọnd 30 kachasị n'ime abort/deadline
broker ahụ nke a na-ekekọrịta. Ọ dịghị mgbe ọ na-anabata iwu, filter, path,
ma ọ bụ URL site na arịrịọ ahụ.

Uru nhazi ndị ahụ bụ ihe akaebe sampling nwere otu nsonaazụ mgbe niile, ọ bụghị
nghọta semantic nke vidiyo. Ha anaghị atụpụta subject, action, caption, speech,
ma ọ bụ ebumnuche onye ọrụ. Boundary scene na freeze na-emepụta segment;
freeze coverage, blur, exposure, spatial detail, na temporal change na-emetụta
naanị otu e si ekenye budget frame 1–16 dị ugbu a. A na-amachi segment jụrụ
oyi kpamkpam na otu frame, ebe segment ndị na-ajụghị oyi na-asọ mpi maka budget
fọdụrụ. Mgbe boundary karịrị frame n'ọnụọgụ, a na-edowe mkpuchi timeline
uniform ka cut ngwa ngwa dị na mbido ghara izochi segment ogologo dị n'azụ.
A na-ejikọta boundary scene dị n'ime resolution analysis nke sekọnd 1 site na
boundary freeze.

Filter ndị na-efu, ihe akaebe na-adịghị n'ụdị ziri ezi ma ọ bụ tọgbọ chakoo,
njehie detector, ma ọ bụ timeout pre-analysis nwere oke na-eme ka usoro ahụ
mepee gaa na policy midpoint uniform ahụ kpọmkwem. Abort sitere n'aka onye
na-akpọ ma ọ bụ deadline broker anaghị emeghe gaa na fallback: ọ na-akwụsị
subprocess na-aga n'ihu, gbochie frame extraction na-esote, a na-ewepụkwa
osisi temporary nzuzo n'ime `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` na-emepụta fixture FFmpeg ezigbo nke
nwere otu nsonaazụ mgbe niile maka mbelata oku caption mgbe post-dedup gasịrị,
nkesa budget dense-motion, ihe akaebe blur/exposure/SI-TI, cut ngwa ngwa nwere
ọdụ ogologo, yana false positive gradual-fade. Ọ na-edekọ oge mgbidi
pre-analysis, ma ebe `/usr/bin/time` dị, CPU child na RSS kachasị elu. Nlele
quality ya bụ naanị oracle nhazi. Quality model caption ezigbo ka bụ `HOLD`
n'ihi na harness a enweghị endpoint enyere ikike ma ọ bụ judge edobere.
Mbelata ego ka bụkwa `HOLD` belụsọ ma `--caption-cost-per-call-usd` nyere
atụmatụ ego kwa oku doro anya ma dị mma; script ahụ anaghị emepụta nsonaazụ
nke ọ bụla n'ime ha n'ụzọ ụgha.

A na-amachi fremu ọ bụla na 4 MiB, fremu raw niile ọnụ na 23 MiB, yana nzaghachi broker e mere serialized na 32 MiB. A na-ewepụ ndekọ nwa oge nke onwe n'ime `finally`. OmniRoute anaghị ebukọta FFmpeg, ọ naghịkwa anabata ụzọ executable ahaziri iche. Tupu e tinye nkọwa, bridge ahụ na-eme usoro mwepụ oyiri anya nke na-akpachapụ anya: a na-ebelata JPEG ọ bụla ka ọ bụrụ buffer grayscale 16×16 ma jiri naanị fremu ikpeazụ e debere tụnyere ya. Maka oke nkọwa achọrọ nke karịrị otu fremu, extraction na-enye ọdọ candidates nwere oke ruru okpukpu abụọ nke oke ahụ, ma ọ dịghị mgbe ọ ga-agafe fremu 16. A na-etinye oke achọrọ naanị mgbe deduplication gasịrị, ebe a na-echekwa candidate mbụ na nke ikpeazụ ahọrọ n'oge thinning ikpeazụ ma ọ bụrụ na budget ahụ dịkarịa ala abụọ. Iwu nwere version
`grayscale-16x16-mean-cells-v2` na-eji nke ka ukwuu n'etiti mgbanwe mean luma na
oke nke cell thumbnail ndị normalized delta ha dịkarịa ala 0.05. Threshold duplicate bụ constant 0.04, nke ahọrọ maka ịdị mfe ibu amụma kama ime ka ọ bụrụ runtime setting a pụrụ ịgbanwe. Signal secondary a nwere high-contrast na-echekwa obere mmegharị na mgbanwe ederede a na-ahụ anya nke ntụnyere dabere naanị na mean nwere ike izochi. Njehie comparator ma ọ bụ decoder na-eme ka usoro ahụ fail open ma debe coverage. Metadata output na-ekewa candidates e wepụtara, fremu ejiri mee ihe nke ọma, na visual duplicates e wepụrụ.

Akụkụ vidiyo e jiri akara doro anya mee nwere ike ịrịọ contact sheet nwere timestamp. Bridge ahụ na-ewu grid JPEG nwere karịa column 4 na fremu 16. Cell ọ bụla nke pixel 512 na-akpọnye timestamp nke source ya n'ime bottom band nwere high-contrast, ebe timestamps ndị ahụ ka nọkwa na textual metadata maka association na audit downstream. JPEG zuru ezu ka na-enwe oke 32 MiB. Ọ bụrụ na `sharp` enweghị ike decode ma ọ bụ compose grid ahụ, bridge ahụ na-alaghachi n'iji fremu JPEG ndị ahụ n'otu n'otu; abort sitere n'aka client ka na-agafe n'ọrụ sheet ahụ.

A na-ekewa evidence maka promotion n'ụzọ kpachara anya na microbenchmark composition synthetic. `scripts/perf/video-bridge-contact-sheet-eval.ts` na-akọwa harness A/B nwere schema version maka ezigbo model vision kwekọrọ na OpenAI. Ọ na-atụ tokens provider kọrọ, latency wall end-to-end (gụnyere composition sheet), ọnụ ọgụgụ model-call, na njigide fact nke manifest kọwara. A naghị ede raw model responses na report; naanị digest SHA-256 na ID fact ndị kwekọrọ ka a na-edebe. Harness ahụ anaghị eme network call ma ọ bụ paid model call ọ bụla belụsọ na e nyefere `--execute-real`, ma hazie `--model`, `OMNIROUTE_BASE_URL`, na `OMNIROUTE_API_KEY`. Na-enweghị real run ahụ e kwupụtara n'ụzọ doro anya, verdict ya nke machine-readable ka bụ `HOLD`; nha synthetic payload/call-count naanị abụghị evidence maka promotion.

Ndị caller nwere ike itinye array `transcript.cues` nhọrọ na akụkụ vidiyo akwadoro mgbe ha nwere ederede e mekọrịtara. Cue ọ bụla ga-eburịrị `text`, interval `start`/`end` nwere finite value nke dị n'ime duration e probed, yana `source` dị na whitelist (`client`, `embedded`, ma ọ bụ `audio-bridge`); `confidence` na-eji `1` dịka default ma ga-anọrịrị n'etiti `0` na `1`. A na-ejikọta cue ndị bụ exact duplicate. OmniRoute anaghị ebido transcription site na metadata a: a na-edepụta cue ndị validated n'ime result akọwara tinyere source, confidence, na interval, ma na-render ha dịka observation ndị a na-atụkwasịghị obi n'akụkụ nkọwa fremu. A na-ajụ ederede na-adịghị valid, nke gafere range, ma ọ bụ nke na-enweghị provenance kama ịgwakọta ya n'ime caption stream. Channel transcript abụọ nke request-body na-normalize provenance enyere ka ọ bụrụ `client`, gụnyere label `embedded` ma ọ bụ `audio-bridge` onye zitere request ji aka ya kwuo. Naanị adapter nke server nwe nwere ike itinye label ndị ahụ a tụkwasịrị obi site na argument nke naanị code `trustedSource`; field JSON nke request enweghị ike iru argument ahụ. Ederede transcript ka bụ content sitere na media nke a na-atụkwasịghị obi, n'agbanyeghị provenance ya, ọ gaghịkwa ekpebi authorization ma ọlị.

Caller dị elu nwere ike ịnye track `audioTranscript` maka otu vidiyo ahụ; a na-ewere ya dịka ederede client nyere, ọ bụghị ihe akaebe nke transcription server. Fusion seam na-agba observation visual na audio n'okpuru otu deadline na abort signal, na-ahazi ha n'otu timeline, na-ejikọta exact duplicates, ma na-akọ partial result mgbe naanị otu akụkụ gara nke ọma. `audioTranscript` na-adịghị valid na-adaba na partial result ahụ — a na-edebe visual description ma audio branch na-edekọ failure code e sanitized — kama ime ka vidiyo ahụ dum daa. Availability nke branch ọ bụla, partial flag, na failure code ndị e sanitized ka a na-echekwa n'ime result akọwara, n'ime guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), n'ime result-cache metadata, nakwa n'ime counter fusion nke bridge. Ụzọ default nke Video Bridge anaghị akpọ speech-to-text ma ọ bụ download copy media nke abụọ; na-enweghị track ahụ e nyere n'ụzọ doro anya, ọ ka bụ naanị vidiyo.

**Ndịdebe transcript (#12150 P1).** Nke a na-emetụta ozugbo mgbe ọ bụla
Video Bridge (nke a ga-ahọrọ iji n'onwe ya) gosipụtara akara transcript — enweghị ọkọlọtọ
ndịdebe dị iche. Mgbe arịrịọ gosipụtara akara transcript ọ bụla (ma ọ bụ
`transcript` nke onye kpọrọ ọrụ kwupụtara ma ọ bụ `audioTranscript` ejikọtara), guardrail ahụ na-akara ya
`videoBridgeObserved` ma mepụta onyinyo e zoro ezo nke nkọwa vidiyo ahụ —
ngosipụta yiri nke mbụ ebe e ji
`[redacted-video-transcript]` dochie akụkụ ederede efu nke akara ọ bụla, nke a na-ewu site n'iji dochie oghere akara ahaziri
tupu e chịkọta eriri ahụ (ọ bụghị site n'ịtụle ederede e mere ka ọ bụrụ otu ahịrị, ya mere ọdịnaya akara ọ bụla —
ma nke e ji aghụghọ mee ma nke nkịtị, gụnyere akụkụ nwere `]` dịka
`[inaudible]`/`[music]` — agaghị adịgide). Ahụ arịrịọ nke ndekọ oku echekwara na-eji
onyinyo e zoro ezo ahụ dochie akụkụ ederede ọ bụla sitere na vidiyo, site n'ịdakọ ha dịka
ọdịnaya ha si yie; a na-agụgharị arịlịka `fullText` site na payload guardrail
tupu oku nke emechara, ya mere ndakọrịta ahụ ka na-aga nke ọma mgbe guardrail ndị ọzọ n'usoro gasịrị (ndị na-ezo
PII na nzere, nwere mkpa 10/95) degharịrị ederede nkọwa ahụ n'ebe ọ dị na
mgbe ntinye system-prompt/handoff/memory gbanwere nhazi n'usoro ozi ahụ. Ahụ
e zigara n'elu gaa na model anaghị agbanwe. Arịrịọ a hụrụ anaghịkwa etinye
ihe ọ bụla na Memory na-adịgide adịgide (a na-awụpụ mmịpụta sitere ma na arịrịọ ma na nzaghachi),
ya mere nzaghachi model ahụ n'onwe ya enweghị ike ikwughachi ederede transcript n'ime Memory.

**Oghere vidiyo raw (#12430).** Mgbe agbanyere bridge ahụ ma nkwado vidiyo native amaghị ama ma ọ bụ na-adịghị, oghere `transcript`/`audioTranscript` akọwapụtara na-emekwa ka `videoBridgeObserved` rụọ ọrụ, ọbụna mgbe nkọwa dara ma ọ bụ e nwere oke `maxVideos`. `null` na eriri efu na-agụnye; oghere ndị na-anọghị na metadata na-abụghị nke vidiyo anaghị agụnye. Mbipụta echekwara na-ezochi oghere ndị a ma ọ bụ hapụ arịrịọ ahụ kpamkpam, a na-agafekwa caches/Memory.

N'ụzọ fallback ndị ahụ, akara ziri ezi nke onye kpọrọ ọrụ na-aghọ akụkụ `text`/`input_text`
a na-akwado kama ịbụ oghere provider na-abụghị ọkọlọtọ. Track abụọ onye zitere n'arịrịọ
ka bụ nlele `client` a na-apụghị ịtụkwasị obi, tinyere ịdọ aka ná ntị doro anya na akọwaghị vidiyo ahụ
nakwa na ekwenyeghị timestamp ya megide media ahụ. Oke dị ugbu a nke
akara 256/64-KiB n'ozuzu na nke akara ọ bụla na-emetụta track abụọ ahụ ọnụ;
timestamp ga-adaba n'okpuru oke sekọnd 600 nke broker yana n'ime windo focus ọ bụla
e nyere. A na-atụfu track na-ezighị ezi, a naghị eziga ha dịka ederede nkịtị; sibling ziri ezi
ka nwere ike iji ya ma ọ bụrụ na mmefu ha jikọtara ọnụ agafebeghị oke. Oghere null/efu
anaghị atụkwasị ederede ọ bụla. Fallback a anaghị agbakwunye iweta media ma ọ bụ transcription.
A na-ewepụ oghere mgbatị transcript na fallback video carrier yana ihe
`video_url`/`source` ya. Allowlist wire OpenAI ka siri ike; video carrier native
amaghị ama ka dị, ebe target ndị amaara na ha bụ naanị ederede na-ejigide marker nchekwa.
Onyinyo nzuzo ahaziri na-echebe ederede transcript agbakwunyere, ebe arịrịọ mbụ
nke onye kpọrọ ọrụ ka na-agbanweghị. Target nwere nkwado native na bridge agbanyụrụ
na-ejigide omume bypass ha dị ugbu a.

Mbipụta ndị ọzọ echekwara na-eji otu signal arịrịọ a hụrụ. Snapshot arịrịọ client raw
tupu guardrail, arịrịọ pending dị na ebe nchekwa, na ndekọ arịrịọ a jụrụ n'oge
na-eji usoro dochie oghere transcript dị n'akụkụ vidiyo;
a na-ezochi string prompt nke pipeline stage na context handoff mepụtara
n'ebe a na-edebe ahụ arịrịọ echekwara. Marker `video_content_removed` echekwara
na-eme ka continuation `previous_response_id` mechie n'ụzọ nchekwa kama iwughachi
ederede a kpachapụrụ anya tụfuo. Ọ bụrụ na arịrịọ a hụrụ atụfuo
onyinyo nzuzo nke akụkụ ọ bụla tupu logging, ma ọ bụ ọbụna otu n'ime ọtụtụ onyinyo vidiyo
adabaghị mgbe mgbanwe arịrịọ ndị mechara gasịrị, a na-ahapụ ahụ arịrịọ echekwara
kpamkpam kama idobe transcript e zoro naanị akụkụ ya.

Maka arịrịọ a hụrụ, nzaghachi model nwere ike ikwughachi akụkụ ọ bụla nke
transcript na-enweghị oke akara ahaziri. N'ihi ya, a na-eji marker na-egosi mwepụ dochie
`responseBody` nke call-log echekwara; a naghị echekwa artifact pipeline zuru ezu
(nke nwere ike ịgụnye ahụ upstream/client na stream chunk).
Semantic cache, idempotency cache, na reasoning-replay cache na-agafe
ịgụ na ide maka arịrịọ ahụ. Arịrịọ provider na nzaghachi client na-ahụ
anaghị agbanwe. A na-ekpochapụ byte keepalive mbụ na buffer nwa oge
mgbe a hapụrụ artifact zuru ezu. Ịdọ aka ná ntị EventStream Kiro nke mebiri emebi
na-akọ naanị ọnụọgụ byte payload, ọ bụghị ọdịnaya ya ma ọ bụ njehie raw nke
JSON parser.
Nke a anaghị ekwu na enyochala diagnostic provider/plugin niile na-enweghị njikọ;
a na-esochi nyocha sara mbara nke retained-sink na #11658.

Lifecycle ime nke `/api/modality-bridge/video/drilldown` bụ substrate cache dị iche,
nke loopback/token na-eme authentication. Ọrụ ọ bụla na-achọkwa
ID principal canonical opaque. Tupu enyere onye kpọrọ ọrụ production ikike, ọ ga-
esi na tenant e mere authentication nweta ID ahụ ma ghara mgbe ọ bụla iziga uru
client họọrọ. Igodo cache na-ejikọta principal ahụ na session canonical na
ID ntụaka vidiyo, na-echekwa naanị igodo ha sitere na SHA-256, ma na-amachi ma ọgụgụ
ma nhichapụ n'otu principal ahụ. Cache ahụ na-echekwa karịa frame JPEG 16
e wepụtara maka entry ọ bụla, na-eme ka ha kubie ume mgbe nkeji iri gachara, ma na-akwado ọgụgụ
`start`/`end` nwere oke ma ọ bụ nhichapụ session kpọmkwem.

A na-amachi principal ọ bụla na entry 16 na data JPEG canonical 64 MiB. Oke ndị ahụ
dị iche na oke zuru ụwa ọnụ nke entry 64/256 MiB: nrụgide quota principal
na-achụpụ naanị entry nke principal ahụ ejighị n'oge na-adịbeghị anya tupu a tụlee
ịchụpụ LRU zuru ụwa ọnụ. A na-ekpochapụ entry kubiela ume ma na ndekọ principal ma na
ndekọ zuru ụwa ọnụ mgbe cache na-arụ ọrụ, ebe cancellation na ọdịda validation anaghị
edobe partial replacement.

Cache ahụ na-ajụ Base64 na-abụghị canonical, padding karịrị akarị, media na-abụghị JPEG, JPEG ndị ahaziri n'ụzọ na-ezighị ezi ma ọ bụ ndị e bipụrụ mkpụmkpụ, yana JPEG ndị na-emepụta ịdọ aka ná ntị n'oge bounded full-image `sharp` decode. Ọ na-emegharị encoding nke onyonyo ọ bụla a nabatara ka ọ bụrụ canonical JPEG, na-enweta width na height site na bytes e mere decode kama ịtụkwasị fields nke onye kpọrọ ya obi, ma na-atụfu trailing polyglot bytes ọ bụla kama idowe ha. Naanị bounded canonical compressed buffer ka a na-agụnye na quotas abụọ ahụ. JSON wire limit ahụ gụnyere Base64 overhead maka decoded-input ceiling nke 32 MiB. Derivation ọ bụla
echekwara na-edekọ JPEG format/resolution ya e nyochara, sampling policy,
derivation version, oge e kere ya, content hash nke server gbakọrọ, na parent
reference e mere hash tinyere parent-content hash nke onye kpọrọ ya a tụkwasịrị obi. A na-enyocha cancellation
n'etiti asynchronous decode/hash phases tupu atomic cache commit.

Akụkụ a ejikọbeghị production producer na route ahụ ma ọ naghị
enye multi-resolution variant selection. Ya mere, ụzọ arịrịọ Video Bridge nke na-apụta ihe n'ụzọ doro anya
anaghị ebute ọrụ agbakwunyere, ebe tenant-bound principal derivation na
usoro ndụ multi-resolution FU-08 zuru ezu ka bụ ọrụ a ga-eme n'ọdịnihu nke akọwapụtara nke ọma
kama idekọ ha dịka omume arụchaala.

A na-enye frames caption n'usoro site na Video model ahaziri. Video override efu
na-eketa ntọala Vision; ọ bụrụ na ha abụọ efu, Vision
auto-router na-ahọrọ model nwere ikike vision nke a ga-eji. Caption ndị gara nke ọma
na-eji prefix kwụsiri ike `[Video description:` dochie part mbụ ahụ; prefix a na-egosikwa
text ahụ dịka observation sitere na media a na-apụghị ịtụkwasị obi ma gwa downstream
models ka ha ghara ịgbaso instructions ndị dị na media ahụ. Frame-caption cache keys
gụnyere JPEG bytes, prompt, timestamp, na effective model; naanị caption ndị gara nke ọma
ka a na-echekwa na cache. Cache entries na-ejigide actual successful producer model,
gụnyere fallback model; bridge ahụ na-akọ `mixed` mgbe models dị iche iche
mepụtara frames dị iche iche. Cache hit na-eji producer identity ahụ ọzọ
kama ịnye ya label nke requested routing plan. A na-eji input ọ bụla
na-agbanwe output mee key nke whole-video result cache — prompt, effective
model, sampling policy, frame count, semantic analysis mode, SHA-256
fingerprint nke normalized focus hint, focus window, `transcript`,
`audioTranscript`, na contact-sheet flag — ya mere ịgbanwe akụkụ ọ bụla n'ime ndị ahụ
na-ebute cache miss, ọ bụghị iji stale data ọzọ. Visual dedup policy
version, threshold, na bounded candidate-frame count bụkwa ihe akọwapụtara nke ọma na
result-cache key na metadata; ya mere mgbanwe policy agaghị eji stale
whole-video description ọzọ. Result-cache v4 metadata na-edowe mode na
fingerprint, ọ naghị edowe raw user task. Guardrail metadata na-akọ ma requested
ma effective analysis modes; requested `focused` mode na-enweghị user text bara uru
ka a na-akọ dịka `full` n'ụzọ effective.

Guardrail ahụ na-ewepụta video part ọ bụla a na-akwado mana ọ naghị akọwa ihe karịrị
`modalityBridgeVideoMaxVideos`. Maka target e gosipụtara na
`supportsVideo === false`, videos ndị dara ada na ndị gafere limit na-aghọ explicit safe
text markers ka raw video ọ bụla ghara ịfọdụrụ. Mgbe amaghị capability, parts ndị ahụ
na-ejigide video carrier ha; fallback transcript ọ bụla na-eso bounded text
conversion dị n'elu. Targets nwere `supportsVideo === true` na-agafe bridge ahụ.
Client request abort signal na-aga n'ihu site na download, broker queue,
subprocesses, na caption calls; aborts na-akwụsị n'etiti videos ma ọ dịghị mgbe ha na-emeghe ụzọ
ka raw media gafere mgbe ọdịda mere.

A na-akwado runtime settings site na DB ma jiri Zod nyochaa ha:

| Key                                 | Ndabara     | Oke / omume                                                                                              |
| ----------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime nhọrọ, a ga-ahọrọ iji ya                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` na-edowe generic captions; `focused` na-eji bounded, untrusted latest-user context                |
| `modalityBridgeVideoModel`          | `""`        | Na-eketa Vision Bridge model                                                                             |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, ma ọ bụ proportional `segment_aware`; ọdịda detector na-alaghachi na `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                           |

A na-amachi legacy persisted Video timeout values karịrị sekọnd 120 ka ha kwekọọ na
broker deadline; a na-ajụ settings ọhụrụ e dere nke gafere oke ahụ.
`GET /api/modality-bridge/video/runtime` chọrọ trusted stamped loopback
locality tupu authentication ma ọ bụ runtime probing, emesịa ọ chọrọ management
auth. Ọ na-eweghachi naanị `available`, sanitized FFmpeg/ffprobe versions, na fixed
reason mgbe runtime adịghị. Internal extraction endpoint ahụ abụghị
public upload API: queue saturation na-eweghachi `503` tinyere `Retry-After`, nkwụsị njikọ nke onye kpọrọ ya
na-eweghachi `499`, ebe fixed broker deadline na-eweghachi `504`. Converted responses na-agbakwunye
`video->text;model=<visionModel>;parts=<videos>` na central
`x-omniroute-modality-bridge` header n'ewepụghị Vision ma ọ bụ Audio segments.

### Ihe Mkpuchi PII (`piiMasker.ts`)

Ọ na-arụ ọrụ na stages **abụọ ahụ**.

- **`preCall`** na-eme oyiri payload, na-agafe `system`, `messages`, `input`, na
  `prompt` (gụnyere ihe ndị bụ eriri nkịtị), ma na-etinye `processPII()` (site na
  `@/shared/utils/inputSanitizer`) n'ubi `content`/`text` ndị bụ eriri. Mgbe
  `PII_REDACTION_ENABLED=true`, a na-ekpuchi PII achọpụtara n'ime payload
  a na-ezipụ. Nke a anaghị adabere na `INPUT_SANITIZER_MODE` (nke na-achịkwa naanị
  iwu prompt-injection). Mgbe agbanyụrụ ikpuchi ozi, oku ahụ na-edekọ ọnụọgụ
  nchọpụta n'agbanweghị ọdịnaya.
- **`postCall`** na-eme oyiri miri emi nke nzaghachi ahụ, na-agba `sanitizePIIResponse()` tinyere
  ihe nkpuchi maka ọdịdị Responses-API (`maskResponsesOutput` — na-ekpuchi
  `output_text` na `output[].content[].text`). Ọ bụrụ na e nwere ikpuchi ozi ọ bụla,
  nzaghachi a gbanwere ga-anọchi nke mbụ.

Usoro nchebe ahụ anaghị egbochi ihe ọ bụla; ọ na-agbakwụnye naanị nkọwa (`meta.detections`,
`meta.redacted`) ma ọ bụ degharịa ya.

#### Nhọrọ dịka ụdị si dị, ụkpụrụ omenala na ndị ngụ nchọpụta

**Dashboard → Settings → Security → PII masking** na-ahọrọ _ihe_ a ga-ekpuchi. Ọ
naghị agbanye ikpuchi ozi: nke ahụ ka bụ ọrụ `PII_REDACTION_ENABLED` (arịrịọ) na
`PII_RESPONSE_SANITIZATION` (nzaghachi + SSE), ma agbanyụrụ ha abụọ na ndabara.

- **Nhọrọ dịka ụdị si dị** — e depụtara id ndị arụnyere n'ime
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ọ bụrụ na edoghị ya, ọ pụtara ụdị
  niile (omume dị tupu ntọala a adị). Ụkpụrụ `ssn_us` nke injin arịrịọ
  na-adaba na `ssn`. Template (Minimal, Standard, Financial,
  Brazilian, USA, Full) na-emejupụta naanị igbe nhọrọ ndị dị na UI.
- **Ụkpụrụ omenala** — ruo ụkpụrụ regex ma ọ bụ wildcard 20 (`*` = ruo mkpụrụedemede 64
  na-abụghị oghere, `?` = otu). Ihe dakọtara na-aghọ `[CUSTOM_REDACTED]`.
  Ụkpụrụ ọ bụla na-agafe `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): ọ kachasị mkpụrụedemede 500, flags nwere oke
  na `g i m s u`, ọ ga-enwerịrị ike ịkompaịl, ọ ga-agafe `safe-regex` (catastrophic
  backtracking), ọ gaghịkwa adaba na eriri efu ma ọ bụ placeholder ikpuchi ozi.
  A na-ajụ ụkpụrụ dara ule mgbe a na-echekwa ya na mgbe a na-anwale ya, a na-amafekwa
  ahịrị echekwara dara ule n'oge runtime kama ịkompaịl ya. Ụkpụrụ omenala na-agba naanị
  mgbe agbanyere ikpuchi ozi.
- **Ndị ngụ nchọpụta** — ọnụọgụ dịka ụdị si dị (ọ bụghị ụkpụrụ ndị dakọtara), a na-edobe ha na
  memory ma tọgharịa ha mgbe e bidogharịrị (`src/lib/pii/piiDetectionStats.ts`). Ha na-abawanye
  naanị mgbe agbanyere ikpuchi ozi.

Ntọala ndị ahụ dị na tebụl `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) ma a na-agụ ha site na cache nke 1 s. API:

| Usoro  | Ụzọ                      | Ebumnuche                                                                                    |
| ------ | ------------------------ | -------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Ọnọdụ flag, `enabledTypes`, `customPatterns`, ndị ngụ nchọpụta                               |
| `PUT`  | `/api/settings/pii`      | Dochie `enabledTypes` (`null` = niile) na/ma ọ bụ `customPatterns`                           |
| `POST` | `/api/settings/pii/test` | Nwale otu ụkpụrụ na-enweghị nchekwa megide sample nke kachasị 8 KB; ọ dịghị ihe a na-echekwa |

Ha atọ niile chọrọ management auth ma jiri Zod kwado body ahụ
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Na-achọpụta nhazi aghụghọ dị n'ọdịnaya onye ọrụ nyere ma na-amanye
iwu ahaziri. Environment variables na nhọrọ constructor na-achịkwa omume ya:

| Ntọala      | Env var                                                                                                | Ndabara | Mmetụta                                                                                                                                                                                       |
| ----------- | ------------------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Agbanyere   | `INPUT_SANITIZER_ENABLED`                                                                              | `true`  | Mgbe ọ bụ `false`, usoro nchebe na-akwụsị ozugbo.                                                                                                                                             |
| Mode        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`  | Iwu injection: `block`, `warn`, ma ọ bụ `log`. (A na-anabata `redact` maka ndakọrịta ochie mana ọ naghị ewepụ ederede injection; `PII_REDACTION_ENABLED` na-achịkwa idegharị PII nke arịrịọ.) |
| Oke mgbochi | nhọrọ `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (aha ọzọ `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`  | Ogo nsogbu kacha nta achọrọ iji gbochie. Medium bụ naanị maka nlele na ndabara.                                                                                                               |

**Usoro mbute mode** (`getMode`): `options.mode` nke onye kpọrọ nyere →
override **DB feature-flag** nke `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. N'ihi ya, override dashboard na-ebute env vars ụzọ, ya mere UI Feature
Flags na-achịkwa guard na-agba ọsọ ozugbo (enweghị mbugharị). Ọgụgụ DB bụ fail-safe:
ọ bụrụ na njehie emee, guard ahụ na-alaghachi n'omume dabere na env, ma mgbe
edoghị override, omume ya bụ otu ihe ahụ dịka mkpebi dabere naanị na env.

Isi mmalite nchọpụta:

1. `sanitizeRequest()` sitere na `@/shared/utils/inputSanitizer` (otu detector
   e kesara nke a na-eji n'ebe ndị ọzọ na pipeline).
2. `DEFAULT_GUARD_PATTERNS` arụnyere n'ime (ugbu a bụ `system_override_inline` na
   `markdown_system_block`, ha abụọ nwere ogo nsogbu `high`).
3. `customPatterns` nhọrọ ndị e nyefere site na nhọrọ constructor (eriri, regex,
   ma ọ bụ ndekọ `{ name, pattern, severity }`).

Mgbe `mode === "block"` **ma** opekata mpe otu nchọpụta ruru oke ogo
nsogbu, `preCall` na-eweghachi `{ block: true, message: "Request rejected:
suspicious content detected" }`. Na ọnọdụ `warn`/`log`, guardrail na-edekọ ya mana
na-ekwe ka oku ahụ gaa n'ihu. A na-ebupụkwa helper nkekọrịta `evaluatePromptInjection()`
maka ndị na-akpọ ọrụ chọrọ inyocha prompt n'agaghị site na registry.

**Oke nyocha (v3.8.20):** detector ahụ na-enyocha naanị **16 KB mbụ** nke
ederede prompt ejikọtara ọnụ — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) n'ime
`src/shared/utils/inputSanitizer.ts`. Ma `detectInjection()` ma
`evaluatePromptInjection()` na-eme `slice(0, MAX_INJECTION_SCAN_BYTES)` tupu ha agba
loop nke pattern. Ntuziaka injection na-adịkarị nso n'elu input, ya mere nke a
na-etinye oke na regex CPU/GC maka payload ndị ruru ọtụtụ narị KB n'emeghị ka nchọpụta
daa ogbenye (lee #3932, #4041).

### Ihe Na-ekpuchi Credential (`credentialMasker.ts`)

Ọ na-arụ ọrụ na **stages abụọ ahụ**, bụrụkwa nke ikpeazụ na chain ndabara (priority `95`). Ọ na-ekpuchi
pattern API-key / secret-token ndị a maara nke ọma n'ime payload a na-ezipụ (ọdịnaya
ozi, argument oku tool, result tool) **yana** response sitere n'aka provider, ka
credential e tinyere n'ime prompt (ma ọ bụ nke result tool weghachiri) ghara ịpụ
gaa n'aka provider dị n'elu ma ọ bụ laghachikwuru client.

- **A ga-ahọrọ iji ya tupu ọ rụọ ọrụ**, otu ụkpụrụ ahụ dị ka redaction PII (n'akụkụ Hard Rule #20):
  ọ na-adị disabled belụsọ ma `settings.credentialRedactionEnabled === true` **ma ọ bụ**
  `CREDENTIAL_REDACTION_ENABLED=true`. Mgbe agbanyụrụ ya, guardrail ahụ anaghị eme ihe ọ bụla —
  ọ dịghị mgbe ọ na-egbochi ma ọ bụ degharịa ihe.
- `redactCredentials()` na-agafe payload/response tree dum (`walkValue()`,
  nke e chebere pụọ na prototype pollution, ma chebekwa pụọ na cycle site na `WeakSet`) wee jiri
  placeholder `[REDACTED:<type>]` dochie match, na-eme clone naanị branches ndị
  gbanwere n'ezie.
- `CREDENTIAL_PATTERNS` na-ekpuchi key ndị provider LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), key ịkwụ ụgwọ (Stripe, Square), key
  cloud (AWS access key, Twilio, SendGrid, Mailgun), private key / JWT,
  connection string nwere credential (`mongodb://user:pass@...`, wdg.), yana
  pattern zuru ụwa ọnụ maka uru header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  A na-ekpuchi key ndị yiri header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) n'usoro nhazi (naanị uru ya, ebe a na-echekwa scheme prefix dịka
  `Bearer `/`Basic `) kama iji generic text regex.
- Guardrail ahụ anaghị egbochi mgbe ọ bụla; ọ na-edegharị naanị (`modifiedPayload` /
  `modifiedResponse`) ma na-etinye annotation (`meta.credentialsRedacted`, `meta.count`).

Nchedo regression: `tests/unit/credential-masker-guardrail.test.ts`.

## Nkwekọrịta Ndabere (`base.ts`)

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
  block?: boolean; // true na-akwụsị agbụ ahụ ozugbo
  message?: string; // a na-egosi ya mgbe a na-egbochi
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall na-eweghachi nke a iji degharịa arịrịọ ahụ
  modifiedResponse?: TValue; // postCall na-eweghachi nke a iji degharịa nzaghachi ahụ
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

Usoro nchedo na-egosi "enweghị mgbanwe" site n’ịweghachi `void`, `{}`, ma ọ bụ
`{ block: false }`. Iweghachi `modifiedPayload`/`modifiedResponse` na-edochi
uru ahụ na-agafe n’agbụ ahụ maka usoro nchedo ndị na-esote.
`signal?: AbortSignal` na-ebufe okirikiri ndụ nke onye kpọrọ oku gaa n’usoro nchedo. Ịkwụsị arịrịọ bụ ọnọdụ pụrụ iche fail-open a kpachapụrụ anya: njikọ mgbasa ozi na-akwụsị ọrụ ma na-eme nhicha n’eweghachighị mgbasa ozi raw gaa n’ebe a maara na ọ naghị akwado ya.

## Ndebanye (`registry.ts`)

Singleton `guardrailRegistry` na-enye:

- `register(guardrail)` — na-agbakwunye usoro nchedo (ma ọ bụ jiri aha normalized dochie nke dị adị) ma
  haziegharịa ya site na `priority` nke na-arị elu.
- `clear()` / `list()` — ngwa enyemaka nchịkwa.
- `runPreCallHooks(payload, context)` — na-agafe usoro nchedo ndị na-arụ ọrụ, na-ebufe
  payload ahụ site na `modifiedPayload`, ma kwụsị na `block: true` mbụ.
- `runPostCallHooks(response, context)` — otu usoro ahụ n’akụkụ nzaghachi.
- `resetGuardrailsForTests({ registerDefaults })` — na-ehichapụ ọnọdụ ma, ma a họrọ ya,
  debanyegharịa ndabara maka ikewapụ ule nke ọma.

Ndị runner abụọ ahụ na-eweghachi `{ blocked, payload|response, results, guardrail?, message? }`
ebe `results` bụ array nke ndekọ `GuardrailExecutionResult` gụnyere
oghere `blocked`, `skipped`, `modified`, `error`, na `meta` maka usoro nchedo ọ bụla,
nke bara uru maka ịchọpụta usoro mmezu.

### Ịgbanyụ Usoro Nchedo Maka Arịrịọ Ọ Bụla

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` na-achịkọta ndepụta
aha usoro nchedo na-enweghị oyiri, ndị a ga-amafere maka arịrịọ dị ugbu a.
E nwere ụzọ ise, a na-agụ ha n’usoro a ma jikọta ha n’otu ndepụta
(ngosipụta mbụ na-emeri mgbe a na-ewepụ oyiri):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` dị na body arịrịọ (n’ogo kachasị elu)
3. `metadata.disabledGuardrails` dị na body arịrịọ (naanị mgbe `metadata` bụ object)
4. Header `x-omniroute-disabled-guardrails`
5. Header ochie `x-disabled-guardrails`

A na-ejikọta ụzọ ise ahụ niile, gụnyere header abụọ ahụ: izipu ma
`x-omniroute-disabled-guardrails` ma `x-disabled-guardrails` na-amafe njikọ
ndepụta ha, header ọgbara ọhụrụ nke tọgbọ chakoo anaghịkwa ezobe nke ochie
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), edoziri ya na
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Uru ndị ahụ nwere ike ịbụ array nke string ma ọ bụ string e ji rikoma kewaa; a na-ewepụ
oghere ndị dị n’akụkụ aha ma mee ka ha bụrụ lowercase kebab-case (`pii_masker` → `pii-masker`), a na-atụfukwa
ntinye ndị tọgbọ chakoo. A na-ebufe nsonaazụ ahụ site na `context.disabledGuardrails`
gaa na ndebanye ahụ, nke na-amafe usoro nchedo ndị dakọtara (`skipped: true` n’ime `results`).

Ndepụta mgbanyụ ahụ na-emetụta naanị **ndebanye**. Ọnọdụ `block` nke prompt-injection bụ
oke a ga-agbasorịrị: middleware injection-guard
(`src/middleware/promptInjectionGuard.ts`) na-akpọ `evaluatePromptInjection()`
n’enweghị ndepụta mgbanyụ ọ bụla onye kpọrọ oku nwere ike ijikwa (oku
`resolveDisabledGuardrails({ body })` na-adịghị arụ ọrụ nke ọ na-emebu ewepụla ya na
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), ya mere a ka ga-ajụ arịrịọ
na-agbanyụ `prompt-injection` mgbe ọ nọ n’ọnọdụ `block`. Nke a bụ
nhazi e mere ụma. Onye kpọrọ oku nwere ike ijikwa ụzọ mgbanyụ ndị ahụ (body arịrịọ,
metadata, headers), onye kpọrọ oku agaghịkwa enwe ike ịgbanyụ njikwa nchekwa
onye ọrụ sistemụ debere
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Njikọ header
sitere na [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
na-agbanwe naanị usoro nchedo ndebanye ndị a na-amafe; ọ naghị enye client ohere
ịgafe middleware ahụ. A na-esochi iwu usoro nchedo a ga-agbasorịrị maka key ọ bụla na group ọ bụla
n’ime v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Lee [Oke mkpuchi na njedebe](#coverage-and-limits).

## Usoro Mmezu

Maka arịrịọ ọ bụla na-agafe na `src/sse/handlers/chat.ts` na
`open-sse/handlers/chatCore.ts` (ụzọ chat-family ndị edepụtara n'okpuru
[Oke mkpuchi na njedebe](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` na-emepụta ndepụta ihe a ga-amafe site na API key, body,
   na headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` na-agba guardrails n'usoro
   priority na-arịgo:
   - A na-edekọ guardrails ndị agbanyụrụ dị ka `skipped`.
   - `preCall` nke guardrail ọ bụla nwere ike idegharị payload site na `modifiedPayload`.
   - `block: true` mbụ na-akwụsị usoro ahụ ozugbo, handler ahụ wee weghachi
     nzaghachi ọjụjụ guardrail.
3. Payload ahụ (nke enwere ike idegharị) na-abanye na combo routing na upstream
   dispatch.
4. **Naanị nke anaghị eji streaming:** mgbe agbakọtara nzaghachi ahụ,
   `guardrailRegistry.runPostCallHooks(...)` na-agba otu usoro ahụ na
   nzaghachi ahụ. `block: true` n'ebe a na-atụfu nzaghachi upstream ma weghachi HTTP 400. Nzaghachi ndị e ji streaming eziga na-amafe nzọụkwụ a kpamkpam.

A na-edekọ guardrails ndị tụbara njehie na `error: <message>`, a na-ejikwa
`logger.warn` dekọọ ha, mana usoro ahụ na-aga n'ihu — e mere ya ka ọ hapụ arịrịọ gafee ma ọ daa.

## Oke mkpuchi na njedebe

E jikọtara guardrail registry naanị na pipeline chat. A na-eme ka njedebe ndị a
ghara ịgbanwe site na `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` na
`tests/unit/guardrail-pipeline-characterization.test.ts`; jiri ebumnuche doro anya melite ule ndị ahụ
mgbe omume ahụ gbanwere.

### Ebe hooks na-agba

| Hook / njikwa                      | Ebe ọ na-agba                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                  | Arịrịọ ndị `handleChat` (`src/sse/handlers/chat.ts`) na-ahazi: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (na `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, na proxy chat Telegram. Ọzọkwa endpoint ule dashboard `/api/guardrails/test`. Mgbochi pre-call na-eweghachi HTTP 400. |
| `runPostCallHooks`                 | Naanị nzaghachi chat **ndị anaghị eji streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Nzaghachi ndị e ji streaming eziga anaghị eru ya ma ọlị.                                                                                                                                                                                                                                                        |
| PII nke streaming                  | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), nke a na-etinye na pipeline n'ime `streamingPipeline.ts` mgbe `PII_RESPONSE_SANITIZATION` dị n'ọrụ. Ọ bụghị guardrail, ya mere ụzọ mgbanyụ anaghị emetụta ya.                                                                                                                                                                                               |
| Middleware injection-guard (ochie) | Ụzọ `/v1` ọ bụla nwere prompt, gụnyere chat-family (lee [mkpuchi ụzọ](#injection-guard-route-coverage--red-team-phase-8--block-d)). Naanị prompt injection.                                                                                                                                                                                                                                                               |

### Ihe ndị a na-adịghị ekpuchi

- **Ụzọ media, embeddings na data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) anaghị eru registry ma ọlị. Enweghị
  ikpuchi PII, ikpuchi credential ma ọ bụ modality bridge na-agba ebe ahụ. Naanị
  nyocha ha bụ middleware injection-guard ochie.
- **Nzaghachi ndị e ji streaming eziga** anaghị enweta guardrails post-call: enweghị `pii-masker` ma ọ bụ
  `credential-masker` post-call, ọ nweghịkwa mgbochi post-call. Naanị transform PII nke streaming
  na-emetụta ha (mgbe `PII_RESPONSE_SANITIZATION` dị n'ọrụ). A naghị ezobe credential
  e weghachiri n'ime nzaghachi streaming.
- **Ụzọ mgbanyụ ma e jiri ha tụnyere middleware (dịka e si hazie ya):** middleware na-enyocha
  prompt injection site na oku nke ya na `evaluatePromptInjection()`, n'enweghị
  iziga ndepụta mgbanyụ ọ bụla onye na-akpọ oku nwere ike ịchịkwa. Ọnọdụ `block` bụ ókè
  a ga-edoberịrị nke mgbanyụ onye na-akpọ oku na-achịkwa na-enweghị ike ịgafe, gụnyere n'ụzọ chat-family
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ịgbanyụ
  `prompt-injection` na-eme naanị ka a mafere guardrail registry ahụ.

### Ihe na-ahụ nzaghachi tupu post-call

N'ụzọ na-adịghị eji streaming, usoro ya bụ: iwepụta memory → mmezu tool arụnyere
n'ime ya → guardrails post-call → ọpụpụ mgbochi post-call → nchekwa semantic-cache.

- **Mwepụta ebe nchekwa** na **mkp اجرا ngwaọrụ** na-ahụ nzaghachi ahụ tupu usoro
  nchekwa post-call enwee ike idegharị ma ọ bụ gbochie ya. Kemgbe
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), mwepụta ebe
  nchekwa na-ebufe ederede ewepụtara site na `sanitizePII` mgbe
  `PII_RESPONSE_SANITIZATION` gbanyere (ma n’ọnọdụ streaming ma n’ọnọdụ na-abụghị streaming), mana
  nzaghachi nke usoro post-call mechara gbochie ka enyelarị ebe nchekwa na
  ngwaọrụ.
- **Cache semantic** na-echekwa nzaghachi ahụ mgbe usoro post-call gachara, ya mere ọ na-echekwa
  nzaghachi e degharịrị, a naghịkwa echekwa nzaghachi e gbochiri na cache. A na-ahazi ndenye cache
  dịka API key nke ọ bụla.

## Nhazi

Mgbanwe gburugburu ebe obibi ndị guardrail arụnyere n'ime ya na-agụ:

| Mgbanwe                               | Nke na-eji ya                 | Mmetụta                                                                                              |
| ------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`            | Tọọ ya ka ọ bụrụ `false` iji gbanyụọ nchọpụta kpamkpam.                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`            | Iwu injection: `warn`, `block`, ma ọ bụ `log`. Uru ochie `redact` anaghị edegharị ederede injection. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`            | Ọnọdụ maka guard injection; ọ bụkwa akara njirimara atụmatụ DB nke na-**akarị** env vars (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`            | Ogo ihe egwu kacha nta nke `MODE=block` na-ajụ: `high` (ndabara), `medium`, ma ọ bụ `low`.           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`            | Aha ọzọ ochie maka `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`                  | Mgbe ọ bụ `true`, a na-ezochi PII dị na arịrịọ (n'adabereghị na ọnọdụ injection).                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (n'okpuru usoro) | Na-achịkwa omume masker n'akụkụ nzaghachi.                                                           |

Guardrail Modality Bridge na-agụ nhazi oge ọrụ site n'ebe nchekwa ntọala
nke DB na-akwado (`getSettings()`), ọ bụghị site na env vars. Igodo ndị bụ isi nke Vision bụ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, na
`modalityBridgeCacheMaxEntries`. A na-anabata igodo ochie
`visionBridge*` naanị dịka fallback ọgụgụ otu okirikiri e depụtara n'akwụkwọ;
ihe dashboard na-ede na-eji igodo ndị bụ isi. Ndabara na resolver fallback
dị na `src/shared/constants/modalityBridgeDefaults.ts`, ebe e debere constant
ochie na `src/shared/constants/visionBridgeDefaults.ts`.

Audio na-eji `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, na `modalityBridgeAudioMaxClips`, tinyere ntọala
`modalityBridgeCache*` a na-ekekọrịta. Audio enweghị fallback igodo ochie n'ihi na
e webatara igodo ndị a na schema Modality Bridge.

Video na-eji `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, na
`modalityBridgeVideoTimeout`, tinyere ntọala `modalityBridgeCache*` a na-ekekọrịta.
A gbanyụrụ ya na ndabara n'ihi na FFmpeg/ffprobe bụ dependency ọrụ ndị nhọrọ,
yana na ịkọwa frame na-agbakwụnye oge nchere na ụgwọ model.

## Nchedo Ahaziri

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

Nzọụkwụ:

1. Mepụta `src/lib/guardrails/myGuardrail.ts` nke na-agbatị `BaseGuardrail`.
2. Mejuputa `preCall` na/ma ọ bụ `postCall`.
3. Debanye aha ya mgbe a na-ebubata ya (tinye site na `registerDefaultGuardrails`) ma ọ bụ
   kpọọ `guardrailRegistry.register(...)` n'oge ọ na-arụ ọrụ — ndekọ ahụ na-eji
   nchedo ọhụrụ dochie nchedo ọ bụla gara aga nke nwere otu aha ahazịrị.
4. Tinye ule n'okpuru `tests/unit/` (ihe atụ ndị dị adị:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Nnwale

Jiri `resetGuardrailsForTests()` n'etiti ule iji malite site na ọnọdụ a maara.
Nyefee `{ registerDefaults: false }` iji malite na ndekọ efu ma debanye naanị
nchedo ndị a na-anwale. Vision Bridge na-anabata ntinye ndabere
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge na-enye ebe njikọ
dakọtara maka ntọala, ikike, nhọrọ ụdị STT, nyocha nzere, na ntụgharị ọdịyo gaa
na ederede. Ya mere, ule nwere ike ịnwale usoro abụọ ahụ na-enweghị ịnweta DB
ma ọ bụ netwọk.

## Hụkwa

- `src/lib/guardrails/` — mmejuputa
- `src/shared/utils/inputSanitizer.ts` — ihe nchọpụta a na-ekekọrịta nke na-akwado
  mgbochi ntinye prompt na ikpuchi PII
- `src/shared/constants/visionBridgeDefaults.ts` — ndabara Vision Bridge na
  ndepụta ụdị ndị a na-amanye iji bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — ndabara oge ọrụ Vision/Audio a na-ekekọrịta
- `docs/architecture/RESILIENCE_GUIDE.md` — oyi akwa kwụụrụ onwe ya (circuit breaker, oge izu ike)
- `docs/reference/ENVIRONMENT.md` — ntụaka zuru ezu maka env var

## Mkpuchi ụzọ mgbochi ntinye & red-team (Agba 8 · Ngọngọ D)

Mgbochi ntinye (`createInjectionGuard` / `withInjectionGuard`) na-ekpuchi ụzọ niile
na-anabata prompt ndị ọrụ. Ọ na-asọpụrụ `INJECTION_GUARD_MODE` (ndabara `warn` = dekọọ naanị;
`block` = weghachite HTTP 400 `SECURITY_001`).

| Ụdị              | Ụzọ                                                                                                                                                  | Ọnọdụ ndabara |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Ederede (dị adị) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Na-emepụta       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Mwepụta ederede (`extractMessageContents`) na-ekpuchi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (kwa abalị, `nightly-llm-security.yml`):** promptfoo na-akwado na ụzọ ọ bụla na-egbochi
OWASP-LLM corpus mgbe `INJECTION_GUARD_MODE=block`; garak na-agba nyocha (ọ na-awụli ma ọ bụrụ na enweghị secret).
E tinyere `moderations` maka ịdị n'otu. Ọnọdụ ngọngọ bụ oke iwu: `evaluatePromptInjection()`
na-eleghara ndepụta nkwụsị nke middleware na-enyefe ya maka arịrịọ ọ bụla anya, ya mere `disabledGuardrails`
**anaghị** ewepu ụzọ na ya ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Workflow kwa abalị (`.github/workflows/nightly-llm-security.yml`, cron + izipu
aka) nwere ọrụ abụọ:

- **`promptfoo-guard` (na-egbochi)** — na-agba `promptfoo eval -c promptfooconfig.yaml`
  site na `INJECTION_GUARD_MODE=block`. Ikpe mwakpo ọ bụla (dịka ọmụmaatụ, "leghara
  ntuziaka niile gara aga anya…", jailbreak ndị yiri DAN) na-akwado na nzaghachi ahụ nwere
  `error.code === "SECURITY_001"`, ya bụ, nchedo ahụ jụrụ arịrịọ ahụ n'ezie.
- **`garak` (ndụmọdụ)** — na-agba garak `--probes promptinject,dan,leakreplay`
  megide instance OmniRoute dị n'ime mpaghara (`http://localhost:20128/v1`). A na-achịkwa ya site na
  provider secret (`PROMPTFOO_PROVIDER_KEY`); ọ na-awụli n'enweghị nsogbu ma tinye
  `|| true` na njedebe, ya mere ọ na-akọ nsonaazụ na-emeghị ka CI daa.

Mkpuchi nke ihe enyemaka nchedo (`createInjectionGuard` / `withInjectionGuard`)
gbasara ụzọ `/v1` ọ bụla nwere prompt; a na-ewepụta ederede prompt site na
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` site na
`extractMessageContents()` dị na `src/shared/utils/inputSanitizer.ts`.
