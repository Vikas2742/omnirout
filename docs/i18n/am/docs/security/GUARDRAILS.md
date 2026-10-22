# Guardrails (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **የእውነት ምንጭ:** `src/lib/guardrails/`
> **ለመጨረሻ ጊዜ የተዘመነው:** 2026-10-17 — v3.8.52 ([ሽፋን እና ገደቦች](#coverage-and-limits) ታክሏል፦
> hooks የትኞቹ routes እና response paths ላይ እንደሚደርሱ፣ የተዋሃዱ disable headers (#16412)፣ injection
> block mode እንደ አስገዳጅ ድንበር (#16413)፣ እና ከ post-call በፊት responseን ምን እንደሚያይ)

Guardrails በ OmniRoute እና upstream providers መካከል ባለው ድንበር
ደህንነትን፣ ፖሊሲን እና የይዘት ለውጦችን ያስፈጽማሉ። እያንዳንዱ guardrail request payloadsን (`preCall`) እና
upstream responsesን (`postCall`) መመርመር (እንዲሁም እንደ አማራጭ ውድቅ ማድረግ፣ መለወጥ ወይም ማብራሪያ ማከል) ይችላል።

ሥርዓቱ **fail-open** ነው፦ guardrail በሚሰራበት ጊዜ exception ከጣለ፣ registryው
ስህተቱን መዝግቦ requestን ከማሳካት ይልቅ ወደ ቀጣዩ guardrail ይቀጥላል።
Blocking ግልጽ ውሳኔ (`block: true`) እንጂ በአጋጣሚ የሚከሰት አይደለም።
ብቸኛው ልዩ ሁኔታ የተቋረጠ request ነው፦ የጠሪው `signal` ሲቋረጥ፣
exception የሚጥል guardrail ከመዘለሉ ይልቅ የ hook አሂዶቱን ውድቅ ያደርጋል።

hooks በእያንዳንዱ route ወይም በእያንዳንዱ response ላይ **አይሰሩም**። guardrailን እንደ
የደህንነት ቁጥጥር ከመተማመንዎ በፊት [ሽፋን እና ገደቦች](#coverage-and-limits)ን ያንብቡ።

## አብረው የተካተቱ Guardrails

registryው ሲመጣ ስድስት guardrailsን በቅድሚያ ቅደም ተከተል በራስ-ሰር ይጭናል
(`registry.ts` → `registerDefaultGuardrails()`ን ይመልከቱ)፦

| ቅድሚያ | ስም                  | ደረጃ(ዎች)        | ፋይል                   |
| ---- | ------------------- | -------------- | --------------------- |
| `5`  | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`  | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`  | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10` | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20` | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95` | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

ዝቅተኛ የቅድሚያ ቁጥሮች **በመጀመሪያ** ይሰራሉ።

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

የ GLM 5.3 base model እና `glm-5.3-{low,high,max}` ግልጽ
`supportsVision:false` የ registry/spec metadata አላቸው። የ GLM 5.3 Flash variants
የ native-vision models ሆነው ይቀጥላሉ። የ Claude Code `/v1/messages` route ከ Claude-to-OpenAI
ትርጉም **በፊት** ወደ የጋራ `handleChat` pre-call guardrail chain ይገባል፤ nested `Read` tool-result images ትርጉሙ ወደ OpenAI `image_url` ይዘት ከማሳደጉ በፊት መገለጽ ወይም መስተናገድ
አለባቸው (#17069)።

ወደ **non-vision models** የተላኩ ምስል-የያዙ requestsን ይይዛል፣ እና ሙሉውን request
ወደ vision-capable model እንደገና ይመራል ወይም ከ upstream call በፊት የምስል
ክፍሎቹን configurable vision model ባመነጫቸው የጽሑፍ መግለጫዎች ይተካል።
ይህ text-only providers የ multimodal payloadsን ያለማስተጓጎል እንዲያስተናግዱ ያስችላቸዋል።

ፍሰት፦

1. target modelው አስቀድሞ visionን የሚደግፍ ከሆነ ዝለል (በ forced-bridge ዝርዝር
   `isVisionBridgeForcedModel` ውስጥ ካልታየ በስተቀር)።
2. የምስል ክፍሎችን በ `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) አውጣ፤ ይህም በ `open-sse/utils/mediaParts.ts` ውስጥ ላለው **የተዋሃደ media
   detector** `detectMediaParts()` ውክልና ይሰጣል — ይህ ከ combo compatibility filter ጋር የሚጋራው
   ብቸኛው የእውነት ምንጭ ነው።
   Extraction፣ `replaceImageParts` መልሶ ሊያገናኛቸው በሚችላቸው
   shapes (የ extract↔replace contract) ላይ ብቻ የተፈቀደ ነው፦ OpenAI `image_url`፣ Anthropic base64
   `source.type:"base64"`፣ Anthropic URL `source.type:"url"`፣ እና Responses
   API `input_image`። በ Claude Code `tool_result.content` እና Responses tool outputs ውስጥ
   nested የሆኑ matching imagesም ከመጀመሪያ ዱካዎቻቸው ይወጣሉ እና ይተካሉ፤ indicator-only shapes የ combo-filter
   ቁሳቁስ ስለሆኑ አይወጡም።
   ምንም ካልተገኘ ዝለል።
3. runtime configን በ `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) ፍታ፦ አዲሶቹ `modalityBridge*`
   settings keys ቅድሚያ ያገኛሉ፤ legacy `visionBridge*` keys እንደ **የአንድ-cycle
   fallback** (rollback window) ይቆያሉ። bridgeው disabled ሲሆን ከማንኛውም media traversal
   በፊት ዝለል።
4. Mode selector (`modalityBridgeVisionMode`፣ ከታች ያለውን ሰንጠረዥ ይመልከቱ)
   reroute ወይም describe እንደሚደረግ ይወስናል። Reroute `modifiedPayload`ን `model` ብቻ በመቀየር፣
   ከ meta `{ rerouted, fromModel, toModel, imagesKept }` ጋር ይመልሳል።
5. Describe path፦ ምስሎችን በ `maxImages` ገድብ፣ task-aware promptን አዘጋጅ፣
   describe cacheን አረጋግጥ፣ vision modelን **በትይዩ**
   (`Promise.allSettled`) ጥራ፣ እና በቦታቸው `[Image N]: <description>` የጽሑፍ ክፍሎችን
   አስገባ። ያልተሳካ describe `null`ን ያስገኛል፦ ለ unknown/vision-capable targets ጥሬው ምስል ይጠበቃል
   (#4012)፣ ነገር ግን **በተረጋገጠ text-only direct
   target** ወይም zero-vision combo ውስጥ መግለጫ ላልተሰጠው እያንዳንዱ ምስል፣
   partial failuresን እና ከ describe-call cap ያለፉ ምስሎችን ጨምሮ፣ ግልጽ
   `(unavailable — no vision-capable provider connected)` የጽሑፍ stub ይቀበላል
   (#17069)። ነባሩ all-failed combo describe fallback እንዳለ ይቆያል (#8430)።
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) መልስ።

#### Mode selector (`modalityBridgeVisionMode`)

| ሁነታ        | ነባሪ | ባህሪ                                                                                                                                                                                                  |
| ---------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔   | የቀድሞው ሂዩሪስቲክ ሳይነካ ይቆያል (#6640/#7204)፦ combo ያልሆኑ/`auto/` ሞዴሎች፣ የመጀመሪያው ሞዴል አስቀድሞ ጥቅም ላይ የሚውሉ ማረጋገጫዎች ካሉት በስተቀር፣ ወደ ምርጡ vision ሞዴል ይዛወራሉ (ካሉት ይገልጻል)፤ combo ዒላማዎች ሁልጊዜ ይገልጻሉ።                         |
| `describe` |     | ሁልጊዜ ይገልጻል — የማዛወሪያው ብሎክ ሙሉ በሙሉ ይዘለላል፤ ተጠቃሚው የመረጠው ሞዴል ሁልጊዜ መልስ ይሰጣል።                                                                                                                                |
| `reroute`  |     | ማዛወርን በግድ ያስፈጽማል፦ ማረጋገጫ ያለውን ሞዴል የሚያቆየው ጥበቃ ይታለፋል። የማዛወሪያ-**ዒላማው** የማረጋገጫ ጥበቃ ግን አሁንም ይተገበራል — ጥቅም ላይ የሚውል vision ዒላማ ከሌለ፣ bridge-ው ከመግለጽ ወይም ጥሬ ምስሎችን ጽሑፍ-ብቻ ወደሚቀበል ዒላማ ከመላክ ይልቅ ግልጽ በሆነ ስህተት ያግዳል። |

በግድ የተመረጡ ሁነታዎች የauto ሂዩሪስቲኩ ከመሄዱ **በፊት** በቀጥታ ይቋረጣሉ፤ የ`auto` ባህሪ
ከpre-PR-1 guardrail ጋር በባይት ደረጃ ተመሳሳይ ነው።

#### የAPI ቁልፍ ወሰን (`visionBridgeKeyScope.ts`)

የጠሪው API ቁልፍ `allowedConnections`ን፣ የኮታ ስብስቦችን
(`allowedQuotas`) ወይም ሞዴሎችን (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) ሲገድብ፣ bridge-ው ቁልፉ
ሊጠቀምባቸው በሚችላቸው ግንኙነቶች ላይ፣ ቁልፉ ሊጠቀምባቸው የሚችላቸውን የማዛወሪያ እና የመግለጫ ሞዴሎች ብቻ
ይመርጣል። ከዚያም የመግለጫ ጥሪው ሁልጊዜ በOmniRoute self-loop በኩል፣
ከ`x-omniroute-self-loop-key-id` ራስጌ ጋር ያልፋል፤ በዚህም ጥያቄውን የሚቀበለው chat
የዚያን ቁልፍ የግንኙነት እና የሞዴል ፖሊሲ እንደገና ያስፈጽማል። `enforceApiKeyPolicy()`
ያንን ራስጌ የሚቀበለው ከself-loop bearer ጋር አብሮ ሲቀርብ ብቻ ነው፤ ስለዚህ
መዳረሻን ማጥበብ ብቻ ይችላል፣ እንዲሁም የማይፈታ id ውድቅ ይደረጋል።

ለቁልፉ የተፈቀደ vision ሞዴል ከሌለ፣ **ጽሑፍ-ብቻ መቀበሉ የተረጋገጠ
ዒላማ** የምስል ባይቶችን አቅም ወደሌለው upstream ከማስተላለፍ ይልቅ
የምስል ጥያቄውን በግልጽ HTTP 400 በአካባቢው ውድቅ ያደርጋል (#17069)።
ያልታወቀ ወይም native vision ችሎታ ላላቸው ዒላማዎች፣ የመግለጫው መንገድ የቀድሞውን
fail-open ባህሪ ይዞ ይቆያል (meta `{ skipped: true, reason: "no_permitted_vision_model" }`)።
ቁልፍ የሌላቸው ጥያቄዎች እና እነዚህ ገደቦች የሌሏቸው ቁልፎች ልክ እንደበፊቱ
ይሰራሉ።

#### ተግባርን የሚያገናዝብ የመግለጫ prompt (`modalityBridgeVisionTaskAware`)

ነባሪው **true** ነው። `composeVisionPrompt()` (`visionBridgeHelpers.ts`) የ**መጨረሻውን የተጠቃሚ መልዕክት** ጽሑፍ
(እስከ 500 ቁምፊዎች የተቆረጠ) ወደ መሠረታዊው
የመግለጫ prompt ያክላል፤ ይህም መግለጫውን ተጠቃሚው በትክክል ወደጠየቀው
(codex-vision-proxy ንድፍ) ይመራዋል፣ እንዲሁም vision ሞዴሉ የሚታየውን
ጽሑፍ እንዲገለብጥ ይጠይቃል። flag-ው ሲጠፋ — ወይም የተጠቃሚ ጽሑፍ ከሌለ — መሠረታዊው prompt ሳይቀየር ጥቅም ላይ ይውላል።

የመግለጫ self-loop-ው የራሱ OpenAI-compatible ጥያቄ (`callVisionModelSingle()`
በ`visionBridgeHelpers.ts` ውስጥ) ሁልጊዜ `image_url.detail: "high"`ን ይጠይቃል —
ያለምንም ቅድመ ሁኔታ፣ ለእያንዳንዱ ጠሪ/provider፣ በማንኛውም የclient ምልክት ላይ
ሳይመሠረት። Low-detail sampling ይህ prompt በትክክል ለሚጠይቀው የጽሑፍ-ግልባጭ
ተግባር የOCR ትክክለኛነትን ያዋርዳል፤ ስለዚህ የመግለጫ ጥሪው ራሱ
የመጀመሪያው inbound ጥያቄ የተጠቀመበት የዝርዝር ደረጃ ምንም ይሁን ምን
ሁልጊዜ ከፍተኛ ዝርዝርን ይጠይቃል። ይህ የሚነካው የውስጣዊውን የመግለጫ
ጥያቄ body ብቻ ነው፤ OmniRoute የጠሪውን የራሱን `image_url.detail` በዋናው ጥያቄ
ላይ እንዴት እንደሚያስተላልፍ አይቀይርም — ያ ነባሪ በተናጠል፣ እና ለተለዩ
OpenCode clients ብቻ፣ በ`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) ውስጥ ይተገበራል።
የመግለጫ self-loop-ው Anthropic wire-format ቅርንጫፍ የ`detail` መስክ የለውም፣
ስለዚህ በሁለቱም ነባሪዎች አይነካም።

#### የመግለጫ ውጤት ገደብ (`modalityBridgeVisionMaxChars`)

| ቁልፍ                            | ነባሪ | ክልል               |
| ------------------------------ | --- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0` | `0` ወይም 100–50000 |

`0` (ነባሪ) ማለት **ገደብ የለም** ማለት ነው — በ
`callVisionModel()` የተመለሰው መግለጫ ሳይሻሻል ይተላለፋል፣ ይህም ነባሩን
ባህሪ ይጠብቃል። በ100–50000 ክልል ውስጥ ያለ ማንኛውም እሴት፣ መግለጫው እንደ
`[Image N]: <description>` ተመልሶ ከመክተቱ በፊት በ`…` ቅጥያ ይቆርጠዋል
(`VisionBridgeGuardrail.preCall()` በ`src/lib/guardrails/visionBridge.ts` ውስጥ)።
downstream ሞዴሉ ሙሉውን ግልባጭ ለሚፈልግባቸው ዝርዝር-በዛ የOCR ተግባራት
ይህን ከፍ ያድርጉት፤ ብዙ ለሚያወሩ vision ሞዴሎች የtoken አጠቃቀምን ለመገደብ
ዝቅ ያድርጉት። የdashboard መስኩ በVision tab Advanced panel ላይ
ይገኛል (`modality-bridge-max-chars` በ`ModalityBridgeVisionTab.tsx` ውስጥ)፣ እና በ1 እና 99
መካከል ያለ ማንኛውንም እሴት ወደ ዝቅተኛው 100 ያሳድጋል፣ በግልጽ የተገለጸውን
`0` ግን ሳይነካ ይተወዋል — `0` በራሱ ትክክለኛ የZod እሴት ነው
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)፣ የ"unset" ነባሪ ብቻ አይደለም።

#### የመግለጫ cache (`modalityBridge/bridgeCache.ts`)

ለመግለጫ ውጤቶች፣ በprocess ደረጃ የሚጋራ in-memory LRU + TTL cache።
ቁልፍ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ከ
length-prefix framing ጋር (የመስክ-ድንበር ግጭቶች የሉም)። የሞዴል ክፍሉ
**የተዋቀረው** bridge ሞዴል ነው፣ በትክክል መልስ የሰጠው ሞዴል አይደለም —
`callVisionModel` በውስጥ ሊያማርጥ ይችላል፣ እና በእያንዳንዱ ሙከራ መሠረት ቁልፍ መፍጠር
cache-ውን ይበታትነዋል። ያልተሳኩ መግለጫዎች በcache ውስጥ ፈጽሞ አይቀመጡም። ቅንብሮች፦

| ቁልፍ                             | ነባሪ    | ክልል     |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### የርቀት ምስል መደበኛነት ማስጠበቂያ (የራስ-ዙር describe/base64 ሰርስሮ ማምጣት)

Bridge-ው አንድን **የርቀት** ምስል ራሱ ሲያመጣ — የAnthropic describe
የራስ-ጥሪ እና የclaude-wire-format base64 ልወጣ
(`ensureBase64ImagesForClaudeWire`)፣ ሁለቱም በ
`visionBridgeHelpers.ts` ውስጥ ባለው `fetchRemoteImageAsDataUri()` በኩል — የተገኘው data
URI በvision-model ጥያቄው ውስጥ ከመካተቱ በፊት በ`normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) ውስጥ ያልፋል። ከመጠን በላይ የሆኑ ምስሎች ወደ **2048px ረጅም ጠርዝ** ዝቅ ብለው ይመጠናሉ (ይህም
OpenAI/Anthropic ቀድሞውኑ በserver-side ከሚተገብሩት የመጠን ገደብ ጋር ይዛመዳል)፤ ይህም
vision model-ው የሚያየውን ሳይቀይር የupload bytes/latencyን
ይቀንሳል። መጠን መቀየር `sharp`ን ይጠቀማል፣ ይህም በdynamic import ይጫናል፦ native
binary-ው መጫን ባልቻለበት platform ላይ `normalizeDataUri()` **ፈጽሞ exception አይጥልም** — የመጀመሪያዎቹን bytes ሳይቀይር ወደማሳለፍ ይመለሳል፤ ስለዚህ የdescribe/base64-conversion
መንገድ ሁልጊዜ መስራቱን ይቀጥላል። ምስል ያልሆኑ bytes (decode ሊደረግ የሚችል ምስል ያልመለሰ fetch) እንዲሁም ሳይነኩ ይተላለፋሉ። ይህ መደበኛነት ማስጠበቂያ
Bridge-ው ለራሱ self-call በሚያመጣቸው ምስሎች ብቻ የተወሰነ ነው — በጠሪው raw passthrough payload ላይ ፈጽሞ
አይተገበርም፤ ይህም ከopt-in-only mutation መርህ (ጥብቅ ደንብ #20) ጋር ይጣጣማል።

#### የቅንብሮች schema + migration

አዲሶቹ `modalityBridge*` keys በ`updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) ውስጥ በZod ይረጋገጣሉ፦ `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`፣ የ`modalityBridgeCache*` ሶስትዮሽ፣ እና በAudio Bridge ጥቅም ላይ የሚውለው
`modalityBridgeAudio*` ቡድን። Migration
`141_modality_bridge_settings.sql` ነባር legacy
`visionBridge*` እሴቶችን ወደሚዛመዱት አዲስ keys ይቀዳል (idempotent ነው፣ በoperator የተቀናበረን `modalityBridge*` እሴት ፈጽሞ በላዩ ላይ አይጽፍም)፤ legacy keys ለአንድ release cycle እንደ read fallback ተቀባይነታቸውን ይቀጥላሉ።

#### የግልጽነት header + ስታቲስቲክስ

በDescribe የተለወጡ responses
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
ይይዛሉ (በ`modalityBridge/bridgeStats.ts` ውስጥ ባለው `buildModalityBridgeHeader()` የተገነባ፣
በ`src/sse/handlers/chatHelpers.ts` ውስጥ ባለው `withModalityBridgeHeader()` የተጨመረ)።
ዳግም መንገድ የተሰጣቸው requests **ምንም** header አያገኙም — payload-ው አልተነካም፣ እና model
መቀየሩ ቀድሞውኑ በresponse body-ው `model` field ውስጥ ይታያል።

`GET /api/modality-bridge/stats` (የmanagement auth፣ ከ
`GET /api/settings` ጋር ተመሳሳይ tier) ለ`vision`፣ `audio` እና
`video` በmemory ውስጥ ያሉትን የእያንዳንዱ modality counters
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` ይመልሳል። `averageLatencyMs` እንደ denominator ሁሉንም attempts ሳይሆን `latencySamples`ን ይጠቀማል፤ timing የሌለው operation የዜሮ-millisecond
sample አይፈጥርም። `bridged` ለተሳኩ
ልወጣዎች backward-compatible alias ሆኖ ይቆያል፤ ያልተሳኩ attempts እሱን አይጨምሩትም።
Counters በዲዛይን መሠረት process-ው ዳግም ሲጀምር reset ይደረጋሉ
(telemetry እንጂ accounting አይደለም)።

#### የDashboard ውቅር

የተለየው dashboard page
`/dashboard/settings/modality-bridge` ነው። በURL ሊደረስባቸው የሚችሉት `Vision`፣ `Audio`
እና `Video` tabs የ`tab` እሴትን በሚቀይሩበት ጊዜ query parametersን እንዳሉ ያቆያሉ።
Vision tab-ው enablement፣ mode፣ model selection (automatic
default-ን ጨምሮ)፣ task-aware prompting፣ የላቁ timeout/image/description-length/cache
ገደቦች፣ runtime
counters፣ እና ጥበቃ ያለው sample request ያቀርባል። Audio tab-ውም live ነው፦
enablement፣ Auto ያለው STT-only model picker፣ timeout/max-clip ገደቦች፣ የaudio
counters፣ እና `input_audio` sample test ያቀርባል። Video tab-ው ተግባራዊ ነው፦
የFFmpeg/ffprobe runtime ሁኔታን ሪፖርት ያደርጋል — ከአራት ግልጽ UI states አንዱ (`unknown` probe-ው
በሂደት ላይ ሳለ ወይም ማጠናቀቅ ባልቻለበት ጊዜ፣ `restricted` probe-ው client-side በሚዘለልበት non-loopback
dashboard host ላይ፣ `unavailable` probe ከተደረገ እና አለመኖሩ ከተረጋገጠ በኋላ፣ ወይም `available` ከFFmpeg/ffprobe versions ጋር) — የenable/model/frame/video/timeout ገደቦችን
በቋሚነት ያስቀምጣል፣ model picker-ውን vision-capable
models ብቻ እንዲያሳይ ያጣራል፣ እና የvideo countersን ያቀርባል።

በAI settings ሥር የነበረው Vision Bridge card ወደ
አዲሱ page የሚወስድ compatibility link ነው፤ ከእንግዲህ ሁለተኛ የform ቅጂ አይዝም። Media Providers እንዲሁም
ነባሩን Speech-to-Text playground ሳያስወግድ Image-to-Text እና Speech-to-Text workflowsን ከሚዛመዱት Modality
Bridge tabs ጋር ያገናኛል።

**የራስ-ዙር admission bypass፦** describe call-ው በOmniRoute የራሱ
`/v1` self-loop (non-standard provider model) በኩል ሲጓዝ፣ sub-request-ው
`x-omniroute-admission-bypass: internal`ን ይልካል እና በተፈታው
self-loop credential ይረጋገጣል — በlocal mode ውስጥ ያለው local `sk_omniroute` sentinel፣ ወይም
በoperator የተቀናበረው `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350)፤ ይህም
`REQUIRE_API_KEY=true` deployments እንኳን describe call-ውን ማስኬድ እንዲችሉ ያደርጋል። bypass-ው
ተቀባይነት የሚያገኘው ለእነዚያ exact credentials ብቻ ነው፤ ስለዚህ external clients header-ውን ተጠቅመው
admissionን መዝለል አይችሉም።

Legacy defaults በ`src/shared/constants/visionBridgeDefaults.ts` ውስጥ ይገኛሉ፤
አዲሶቹ mode/task-aware/cache defaults እና settings resolver በ
`src/shared/constants/modalityBridgeDefaults.ts` ውስጥ ይገኛሉ። guardrail-ው tests ሐሰተኛ `getSettings` እና
`callVisionModel` implementationsን inject ማድረግ እንዲችሉ
`deps` constructor option ያቀርባል።

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

የaudio input እንደሚቀበል ወደማይታወቅ target ከመድረሳቸው በፊት audio የያዙ chat requestsን
ይይዛል። chat request-ውን ፈጽሞ ዳግም route አያደርግም፦ audio parts ነባሩን OpenAI-compatible multipart endpoint በመጠቀም
ወደጽሑፍ ይቀየራሉ፣ እና የተመረጠው chat model በtext transcripts ይቀጥላል።

ፍሰት፦

1. `supportsAudio`ን በ`getResolvedModelCapabilities()` በኩል ይፍቱ። በግልጽ
   የተገለጸው የprovider-registry ሜታዳታ ቅድሚያ ይኖረዋል፤ ከዚያ የማይለወጥ
   የሞዴል ሜታዳታ፣ ቀጥሎም የተመሳሰለው `modalities_input` ይከተላል። `audio`
   የሌለበት የታወጀ የግቤት ዝርዝር `false` ነው፤ ምንም የችሎታ ማስረጃ
   ከሌለ `null` ይሆናል። `false` እና `null` ሁለቱም ጥንቃቄ የተሞላበትን
   ድልድይ ያነቃሉ፤ `true` ግን ያልፈዋል።
2. የ`modalityBridgeAudio*` ቅንብሮችን ይፍቱ፣ እና በጋራው `detectMediaParts()`
   ማወቂያ በኩል ከእያንዳንዱ መልዕክት ሊቆራረጡ የሚችሉ ከፍተኛ-ደረጃ
   የኦዲዮ ክፍሎችን ያውጡ። የሚደገፉ የውሂብ ልውውጥ ቅርጾች OpenAI
   `input_audio`፣ `audio_url` እና `source.media_type: "audio/*"` ናቸው።
   የተከተተ ኦዲዮ ለማስተላለፍ ይታወቃል፣ ነገር ግን በመቆራረጫ መንገዱ
   አይወገድም። ሥራው በ`modalityBridgeAudioMaxClips` ይገደባል፤ በኋላ
   የሚመጡ ክፍሎች ሳይነኩ ይቀራሉ።
3. የተዋቀረ `provider/model`ን ያክብሩ፣ ወይም `selectAudioBridgeModel()` በተረጋጋ
   የካታሎግ ቅደም ተከተል `AUDIO_TRANSCRIPTION_PROVIDERS`ን እንዲያልፍና
   ጥቅም ላይ ሊውል የሚችል ንቁ የአቅራቢ ማረጋገጫ ያለውን የመጀመሪያ
   ሞዴል እንዲመርጥ ያድርጉ።
4. `callAudioTranscription()` base64/data-URI ኦዲዮን ወደ ባለብዙ-ክፍል
   `file` ይቀይራል፣ ወይም የርቀት `audio_url`ን DNS ማያያዝ እና የ25 MB
   ገደብ ባለው ለሕዝብ-ብቻ የሚፈቅደው የወጪ ጥያቄ ጥበቃ በኩል
   ያወርዳል። ከዚያ ፋይሉንና የተመረጠውን ሞዴል፣ በ
   `resolveSelfLoopBearer()` በተረጋገጠው የአካባቢ `/v1/audio/transcriptions`
   ራስ-ዙር ላይ POST ያደርጋል። ነባሩ የጽሑፍ ቅጂ መንገድ መደበኛ
   የማረጋገጫ ፍለጋን፣ የመጠባበቂያ ጊዜ/የፍጥነት ገደብ አያያዝን እና
   የአቅራቢ ማስተላለፍን ያከናውናል።
5. የተሳኩ ጥሪዎች ክፍሎቻቸውን በ`[Audio N]: <transcript>` ይተካሉ። ጥሪዎቹ
   በ`Promise.allSettled` ይሠራሉ፤ አንድ ጥሪ ቢሳካ ያ የመጀመሪያው የኦዲዮ
   ክፍል እንዳለ ይቆያል (#4012 ውል)። ሁሉም ጥሪዎች ካልተሳኩ እና ዒላማው
   `supportsAudio === false` መሆኑ ከተረጋገጠ፣ ክፍሎቹ
   `[Audio N]: (unavailable — no STT provider connected)` ይሆናሉ (#8430 ውል)።
   ለማይታወቅ ዒላማ (`null`)፣ ሁሉም ያልተሳኩበት ውጤት ሳይነካ ይቀራል።
   ጥቅም ላይ ሊውል የሚችል የSTT ማረጋገጫ የሌለው ጽሑፍ-ብቻ መሆኑ
   የተረጋገጠ ዒላማ፣ የአውታረ መረብ ጥሪ ሳያደርግ ተመሳሳዩን ግልጽ
   ምትክ ይቀበላል።

የተሳኩ የጽሑፍ ቅጂዎች በሂደቱ አቀፍ የModality Bridge LRU/TTL መሸጎጫ
ይጠቀማሉ። ቁልፉ የኦዲዮ ማጣቀሻውን፣ የተረጋጋውን `audio-transcription`
የክወና መለያ እና የተመረጠውን የSTT ሞዴል ያጣምራል፤ ያልተሳኩ ውጤቶች
ፈጽሞ አይሸጎጡም። የኦዲዮ ሙከራዎች የጋራ `bridged`፣ `cacheHits`፣
`failures` እና `lastUsedAt` ቆጣሪዎችን ያዘምናሉ። የተቀየሩ ምላሾች
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`ን ይይዛሉ፤
ያልተነኩ ጥያቄዎች የAudio Bridge ክፍል አያገኙም።

የአሂድ ጊዜ ቅንብሮች በDB የሚደገፉ እና በZod የተረጋገጡ ናቸው፦

| ቁልፍ                           | ነባሪ     | ክልል              |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | ራስ-ሰር ወይም STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

የጋራ መሸጎጫው አሁንም በ`modalityBridgeCacheEnabled`፣
`modalityBridgeCacheTtlMinutes` እና `modalityBridgeCacheMaxEntries` ይቆጣጠራል።

### የቪዲዮ ድልድይ (`videoBridge.ts`, `videoBridgePipeline.ts`)

የታወቀ አገርኛ የቪዲዮ ድጋፍ የሌለው ዒላማ ከመጠራቱ በፊት፣ በChat
Completions `messages` እና Responses API `input` ውስጥ ያሉ ከፍተኛ-ደረጃ
የቪዲዮ ክፍሎችን ይጠልፋል። የሚደገፉ ቅርጾች `input_video`፣ `video_url`፣
`video_source`፣ HTTPS URLs እና `data:video/*;base64,...` data URIs ናቸው።
በጽሑፍ ውስጥ ያሉ ተራ የፋይል ስሞች እንደ ቪዲዮ አይወሰዱም።

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) የጥያቄ መዘዋወርን፣
የችሎታ/ፖሊሲ ፍተሻን፣ የእያንዳንዱ ጥያቄ ድምርን እና የምላሽ ውሂብን
ይቆጣጠራል። የእያንዳንዱ ቪዲዮ ሥራ — ማግኘት፣ የሙሉ ውጤት
መሸጎጫ፣ የፍሬም ቅደም ተከተልን መግለጽ (ይህም በጠሪው የታወጀ
ማንኛውንም የኦዲዮ ጽሑፍ ቅጂ ያዋህዳል)፣ እና የእያንዳንዱ ሙከራ
መለኪያዎች/ማቋረጥ/ማጽዳት — በ`videoBridgePipeline.ts` ውስጥ ካለው
`processVideoPart` በስተጀርባ ተደብቋል፤ ይህም በ`preCall` ዙር ውስጥ
ለእያንዳንዱ የቪዲዮ ክፍል አንድ ጊዜ ይጠራል። ያ ሞጁል ግልጽ የወደብ
ወሰኖቹንም ይገልጻል፦ `VideoMediaBrokerPort` (ባይቶችን ማግኘት እና
ናሙና የተወሰደባቸውን ፍሬሞች ማውጣት)፣ `VideoAudioTranscriptionPort`
(በጠሪው የታወጀ የኦዲዮ ጽሑፍ ቅጂን ናሙና ከተወሰደባቸው መግለጫ
ጽሑፎች ጋር ማዋሃድ)፣ እና `VideoDrilldownPort` (የፍሬም ዝርዝር-ጥልቀት
ማቆያ ወሰን፤ እስካሁን ወደ `processVideoPart` አልተገናኘም — በአሁኑ ጊዜ
የዝርዝር-ጥልቀት ግቤቶችን የሚጽፈው የተለየው
`/api/modality-bridge/video/drilldown` መንገድ ብቻ ነው)።

የሕዝብ `/v1` የጥያቄ መንገድ ንዑስ ሂደትን ፈጽሞ አያስመጣም ወይም
አይጠራም። የርቀት ቪዲዮዎች በ50 MiB ገደብ ውስጥ ይወርዳሉ፤ የውስጥ
base64 ቪዲዮዎች የሞዴል/መልዕክቶች/ማቀፊያ ኤንቨሎፕ በ50 MiB የሕዝብ
JSON ጥያቄ መቀበያ ገደብ ውስጥ እንዲቆይ፣ ለእያንዳንዱ ቪዲዮ
ጥንቃቄ የተሞላበት 36 MiB ዲኮድ የተደረገ ገደብ አላቸው። ከማህደረ
ትውስታ ምደባ በፊት የውስጥ ርዝመት እና የዲኮድ መጠን ግምቶች
ይፈተሻሉ። በመጀመሪያው የርቀት URL እና በእያንዳንዱ ማዘዋወሪያ ላይ
HTTPS ያስፈልጋል፤ ይህም DNS ማያያዝ ያለውን ነባሩን ለሕዝብ-ብቻ
የሚፈቅደውን የወጪ ጥያቄ ጥበቃ ይጠቀማል። ከዚያ ባይቶቹ ትክክለኛውን
የውስጥ `POST /api/modality-bridge/video/extract` የደላላ ወሰን ያቋርጣሉ።
ያ መንገድ `LOCAL_ONLY` እና `SPAWN_CAPABLE` ሁለቱንም የያዘ ሲሆን፣
በእያንዳንዱ ሂደት የተረጋገጠና የታመነ loopback ጥያቄ ብቻ ይቀበላል፤
URL፣ የፋይል ስርዓት ዱካ፣ ተፈጻሚ ፋይል ወይም የመከራከሪያ ዝርዝር
ፈጽሞ አይቀበልም። የAPI የአካል-መጠን ቧንቧ መስመር እና የአስተናጋጁ
ጭማሪያዊ የአካል አንባቢ፣ እያንዳንዳቸው የ50 MiB የደላላ ግቤት ገደብን
በተናጠል ያስገድዳሉ። የተገደበው ወረፋ በአንድ ጊዜ አንድ የማውጣት
ሥራ ያከናውናል፣ አራት በመጠባበቅ ላይ ያሉ ሥራዎችን ይፈቅዳል፣ እና
በመጠባበቅ ላይ ያለውን ግቤት በ100 MiB ይገድባል።

በbroker ውስጥ፣ `ffprobe` የግል አካባቢያዊ ፋይልን ያነባል፤ ቋሚው የቅርጸት
የተፈቀዱ ዝርዝር የplaylist እና manifest ቅርጸቶችን አያካትትም። ለተፈቀዱ የMOV ቤተሰብ
መያዣዎች፣ ውጫዊ የMOV ውሂብ ማጣቀሻዎች በነባሪነት እንደተሰናከሉ ይቆያሉ፣ እና
ቋሚው ትዕዛዝ እነሱን ለማንቃት አይመርጥም። `ffprobe` እና `ffmpeg` ሁለቱም
`file`-ብቻ የፕሮቶኮል የተፈቀዱ ዝርዝር፣ አንድ thread፣ ቋሚ የargument ድርድሮች፣ shell የሌለው
አፈጻጸም፣ እና ከ`PATH` የሚፈቱ executables ይጠቀማሉ። እንደ ዓባሪ-ምስል የተያያዙ የሽፋን streams
ሊጫወቱ የሚችሉ ዕጩዎች አይደሉም። ሊጫወቱ የሚችሉ ሁሉም streams ገደቦቹን ማሟላት
አለባቸው፣ እና ከሚወሰነው ዝቅተኛ-index fallback በፊት በግልጽ የተገለጸ default stream
ይመረጣል። ቪዲዮዎች በ600 ሰከንድ፣ በእያንዳንዱ ልኬት 8,192 pixels፣ እና
33,554,432 የምንጭ pixels የተገደቡ ናቸው። FFmpeg ከመሃል ነጥቦች 1–16 የJPEG frames ናሙና ይወስዳል፣
ትንንሽ inputsን ወደ ላይ ሳያሳድግ ረጅሙን ጠርዝ ቢበዛ ወደ 1,024 pixels ዝቅ ያደርጋል፣ እና
በፍጹም URL አይቀበልም። Sampling በነባሪ `uniform` ነው። አማራጭ የሆኑት
`scene_aware` እና የሙከራ `segment_aware` policies አስቀድሞ ተቀባይነቱ በተረጋገጠው አካባቢያዊ stream ላይ
አንድ ተጨማሪ ቋሚ የFFmpeg pass ያከናውናሉ፣ የተገደቡ
`showinfo` የscene timestampsን ይመርጣሉ፣ እና detector ሲሳካ፣ timeout ሲከሰት፣ output የተበላሸ ሲሆን፣ ወይም
የዕጩዎች ስብስብ ባዶ ሲሆን፣ በሚወሰን መንገድ ወደዚያው
uniform የመሃል ነጥቦች fallback ያደርጋሉ። Segment-aware mode የመሃል ነጥብ ናሙናዎችን
ከተረጋገጡት scene intervals ጋር በተመጣጣኝ መልኩ ይመድባል፤ segment-aware evidence እና fallback ባህሪ
ከዚህ በታች በዝርዝር ተገልጸዋል። ጥብቁ የ16-frame ጣሪያ
በእያንዳንዱ policy ውስጥ ከምርጫ በኋላ ይተገበራል። አንድ scene-aware request የአንድ-frame በጀት ብቻ ሲኖረው፣
የነቃውን ሙሉ-ቪዲዮ ወይም focus window uniform የመሃል ነጥብ ይጠቀማል እና
`policyEffective: uniform` ብሎ ሪፖርት ያደርጋል፦ አንድ የተመረጠ scene frame
ሁለቱንም የጊዜ ጫፎች ማቆየት አይችልም። ጠሪው በአማራጭነት
ውስን focus window (`start`/`end` በሰከንዶች) ሊያቀርብ ይችላል፤ ወሰኖቹ ከmedia
ቆይታ ጋር እንዲገጥሙ ይገደባሉ፣ የተገለበጡ ወይም ውስን ያልሆኑ windows ውድቅ ይደረጋሉ፣ እና ሁሉም sampling
policies የሚከናወኑት normalized interval ውስጥ ብቻ ነው። የሚገኘው
window በsampling metadata ውስጥ እና በማይታመነው description
prefix ውስጥ ይካተታል፣ ስለዚህ downstream models ትኩረት የተሰጠውን excerpt ከሙሉ
timeline መለየት ይችላሉ።

የትርጉም caption focus የተለየ፣ በግልጽ የሚዋቀር ቅንብር ነው። ነባሪው `full`
analysis mode ነባሩን frame prompt ይጠብቃል እና request textን ወደ caption model
በፍጹም አያስተላልፍም። በ`focused` mode፣ bridge ከተመሳሳዩ Chat ወይም Responses
container ውስጥ በተጠቃሚ የተጻፈውን የቅርብ ጊዜ ባዶ ያልሆነ `text`/`input_text` ብቻ ያነባል፣
ወደ NFC normalize ያደርገዋል፣ control charactersን እና whitespaceን ያጠቃልላል፣
እና በ500 Unicode code points ይገድበዋል። ባዶ ውጤት ወደ
ትክክለኛው `full` prompt fallback ያደርጋል። ጥቅም ላይ ሊውል የሚችል hint በተለየ
የማይታመን-user-context block ውስጥ እንደ JSON serialized ይደረጋል እና የሚታዩ ዝርዝሮችን ብቻ
ቅድሚያ ሊሰጥ ይችላል፤ በmedia ውስጥ የሚታዩ ወይም የሚሰሙ instructionsን እንዳይከተሉ
የሚያስጠነቅቀውን የተለየ ማስጠንቀቂያ ሊሽር አይችልም። Textual focus በፍጹም `start`/`end`ን አይገምትም ወይም
temporal samplerን አይቀይርም።

#### FU-07 መዋቅራዊ የsegment evidence

`segment_aware` አስቀድሞ ተቀባይነቱ በተረጋገጠው
አካባቢያዊ video stream ላይ አንድ የተገደበ pre-analysis pass ይጠቀማል። ቋሚው filter chain መጀመሪያ ስፋቱን ቢበዛ ወደ 320 pixels
ዝቅ ያደርጋል፣ scene changes እና frozen intervalsን ይለያል፣ ከዚያም ለblur፣ average luma፣ እና
spatial/temporal information በሰከንድ 1 frame ናሙና ይወስዳል። passው
በ600 መዋቅራዊ samples፣ አንድ FFmpeg/filter thread፣ በተመሳሳዩ
`file`-ብቻ protocol እና container allowlists፣ በ1 MiB የprocess-output ገደብ፣
እና በbroker የጋራ abort/deadline ውስጥ ቢበዛ በ30 ሰከንዶች የተገደበ ነው። ከrequest
ትዕዛዝ፣ filter፣ path፣ ወይም URL በፍጹም አይቀበልም።

መዋቅራዊ values የሚወሰን sampling evidence ናቸው፣ semantic video
understanding አይደሉም። subjects፣ actions፣ captions፣ speech፣ ወይም user
intentን አይገምቱም። Scene እና freeze boundaries segmentsን ይፈጥራሉ፤ freeze coverage፣ blur፣
exposure፣ spatial detail፣ እና temporal change ነባሩ
የ1–16 frame በጀት እንዴት እንደሚመደብ ላይ ብቻ ተጽዕኖ ያሳድራሉ። ሙሉ በሙሉ frozen የሆነ segment በአንድ frame ይገደባል፣
frozen ያልሆኑ segments ደግሞ ለቀሪው በጀት ይወዳደራሉ። boundaries
ከframes በቁጥር ሲበልጡ፣ ፈጣን የመጀመሪያ cuts ረጅም trailing segmentን
እንዳይደብቁ uniform timeline coverage ይጠበቃል። ከfreeze boundary የ1-second
analysis resolution ውስጥ ያሉ Scene boundaries ይዋሃዳሉ።

የጎደሉ filters፣ malformed/empty evidence፣ detector error፣ ወይም የተገደበው
pre-analysis timeout ወደ ትክክለኛው uniform midpoint policy fail open ያደርጋሉ። የጠሪ abort
ወይም broker deadline fail open አያደርግም፦ በሂደት ላይ ያለውን
subprocess ያቋርጣል፣ ቀጣይ frame extractionን ይከለክላል፣ እና የግል temporary tree
በ`finally` ውስጥ ይወገዳል።

`scripts/perf/video-bridge-fu07-eval.ts` ለpost-dedup caption-call savings፣ dense-motion budget allocation፣
blur/exposure/SI-TI evidence፣ ረጅም tail ላላቸው rapid cuts፣ እና gradual-fade
false positives የሚወሰኑ እውነተኛ የFFmpeg fixtures ያመነጫል። pre-analysis wall timeን እና፣ `/usr/bin/time`
ባለበት ቦታ፣ child CPU እና peak RSSን ይመዘግባል። የጥራት ምርመራዎቹ መዋቅራዊ oracles
ብቻ ናቸው። ይህ harness ፈቃድ ያለው endpoint ወይም frozen judge ስለሌለው፣ የእውነተኛ caption-model ጥራት
`HOLD` ሆኖ ይቆያል። የገንዘብ ቁጠባም `--caption-cost-per-call-usd` በአንድ call
ግልጽ የሆነ positive የወጪ ግምት ካላቀረበ በስተቀር `HOLD` ሆኖ ይቆያል፤ scriptው ከሁለቱም ውጤቶች
አንዱንም በፍጹም አይፈብርክም።

እያንዳንዱ ፍሬም በ4 MiB፣ ሁሉም ጥሬ ፍሬሞች በአጠቃላይ በ23 MiB፣ እና
ተከታታይ ቅርጽ የተሰጠው የደላላ ምላሽ በ32 MiB የተገደበ ነው። የግል ጊዜያዊ ማውጫ
በ`finally` ውስጥ ይወገዳል። OmniRoute FFmpegን አያካትትም፣ እንዲሁም ብጁ
የማስፈጸሚያ ፋይል ዱካን አይቀበልም። መግለጫ ጽሑፍ ከመፍጠሩ በፊት ድልድዩ ጥንቃቄ የተሞላበት የእይታ
ብዜት-ማስወገድ ሂደት ይተገብራል፦ እያንዳንዱ JPEG ወደ 16×16 ግራጫ-ልኬት ቋት ይቀነሳል እና
በመጨረሻ ከተቀመጠው ፍሬም ጋር ብቻ ይነጻጸራል። ከአንድ ፍሬም በላይ ለሆነ የተጠየቀ የመግለጫ ጽሑፍ በጀት፣
ማውጣቱ እስከ በጀቱ ሁለት እጥፍ የሚደርስ እና ፈጽሞ ከ16 ፍሬሞች የማይበልጥ
የተገደበ የእጩዎች ስብስብ ያቀርባል።
የተጠየቀው ገደብ የሚተገበረው ብዜት-ማስወገዱ ከተከናወነ በኋላ ብቻ ሲሆን፣ በጀቱ ቢያንስ
ሁለት በሚሆንበት ጊዜ በመጨረሻው ማቅጠኛ ወቅት የመጀመሪያው እና የመጨረሻው
የተመረጡ እጩዎች ይጠበቃሉ። ስሪት ያለው
`grayscale-16x16-mean-cells-v2` መመሪያ ከአማካይ የሉማ ልዩነት እና
የተስተካከለ ልዩነታቸው ቢያንስ 0.05 ከሆነው የድንክዬ ምስል ሕዋሶች ጥምርታ
መካከል ትልቁን ይጠቀማል። የብዜት ጣሪያው ቋሚ 0.04 ነው፤ ይህም እንደ የአሂድ-ጊዜ ቅንብር
ከመቅረብ ይልቅ ለመተንበይ ቀላል እንዲሆን የተመረጠ ነው። ይህ ሁለተኛ
ከፍተኛ-ንጽጽር ምልክት፣ በአማካይ ብቻ የሚደረግ ንጽጽር ሊደብቃቸው የሚችላቸውን
አነስተኛ እንቅስቃሴዎች እና የሚታዩ የጽሑፍ ለውጦችን ይጠብቃል። የማነጻጸሪያ ወይም የዲኮደር ስህተቶች ሂደቱን ክፍት እንዲቀጥል ያደርጋሉ እና
ሽፋኑን ይጠብቃሉ። የውጤት ሜታዳታው የወጡ እጩዎችን፣ በተሳካ ሁኔታ ጥቅም ላይ የዋሉ
ፍሬሞችን፣ እና የተወገዱ የእይታ ብዜቶችን ለይቶ ያሳያል።

በግልጽ ምልክት የተደረገበት የቪዲዮ ክፍል የጊዜ ማህተም ያለው የእውቂያ ሉህ ሊጠይቅ ይችላል።
ድልድዩ ቢበዛ ባለ4-ዓምድ፣ 16-ፍሬም JPEG ፍርግርግ ይገነባል። እያንዳንዱ ባለ512-ፒክሰል ሕዋስ
የምንጩን የጊዜ ማህተም ከፍተኛ-ንጽጽር ባለው የታችኛው ሰቅ ላይ በቋሚነት ያትማል፣ ተመሳሳይ የጊዜ ማህተሞችም
ለቀጣይ ማዛመድ እና ኦዲት በጽሑፋዊ ሜታዳታው ውስጥ ይቆያሉ። ሙሉው
JPEG በ32 MiB ተገድቦ ይቆያል። `sharp` ፍርግርጉን ዲኮድ ወይም አቀናብሮ ማዘጋጀት ካልቻለ፣
ድልድዩ ወደ ነጠላ JPEG ፍሬሞች ይመለሳል፤ የደንበኛ ማቋረጥ ግን
በሉህ ክዋኔው በኩል መተላለፉን ይቀጥላል።

የማስተዋወቂያ ማስረጃ ሆን ተብሎ ከሰው ሠራሽ የአቀነባበር
ጥቃቅን የአፈጻጸም ሙከራ ተለይቷል። `scripts/perf/video-bridge-contact-sheet-eval.ts` ለእውነተኛ OpenAI-ተኳሃኝ የእይታ ሞዴሎች
በስርዓተ-መረጃ ስሪት የተደነገገ A/B የሙከራ ማዕቀፍ ይገልጻል። እሱም
አቅራቢው ሪፖርት ያደረጋቸውን ቶከኖች፣ ከጫፍ እስከ ጫፍ ያለውን የሰዓት መዘግየት (የሉህ አቀነባበርን ጨምሮ)፣
የሞዴል ጥሪ ብዛትን፣ እና በማኒፌስት የተገለጸ የእውነታ መያዝን ይለካል። ጥሬ የሞዴል ምላሾች
ወደ ሪፖርቱ አይጻፉም፤ የሚቀመጡት SHA-256 ዳይጀስቶች እና የተዛመዱ የእውነታ መታወቂያዎች ብቻ ናቸው።
`--execute-real` ካልተላለፈ እና
`--model`፣ `OMNIROUTE_BASE_URL`፣ እና `OMNIROUTE_API_KEY` ካልተዋቀሩ፣ ማዕቀፉ ምንም የአውታረ መረብ ወይም የሚከፈልበት የሞዴል ጥሪ አያደርግም። ያለዚያ
ግልጽ እውነተኛ ሂደት፣ በማሽን የሚነበበው ውሳኔው `HOLD` ሆኖ ይቆያል፤ ሰው ሠራሽ
የመረጃ ጭነት/የጥሪ-ብዛት መለኪያዎች ብቻቸውን የማስተዋወቂያ ማስረጃ አይደሉም።

ጥሪ አድራጊዎች አስቀድመው የተሰለፈ ጽሑፍ ካላቸው፣ አማራጭ የሆነ `transcript.cues` ድርድርን ከሚደገፍ የቪዲዮ
ክፍል ጋር ማያያዝ ይችላሉ። እያንዳንዱ ፍንጭ `text`፣ በተመረመረው ቆይታ ውስጥ ያለ
ውሱን የ`start`/`end` ክፍተት፣ እና በፍቃድ ዝርዝር የተካተተ `source` (`client`፣ `embedded`፣ ወይም `audio-bridge`) መያዝ አለበት፤ `confidence` ነባሪው `1` ሲሆን
በ`0` እና `1` መካከል መቆየት አለበት። በትክክል ተመሳሳይ የሆኑ ፍንጮች ይዋሃዳሉ።
OmniRoute ከዚህ ሜታዳታ ፈጽሞ ጽሑፍ-ማውጣትን አይጀምርም፦ የተረጋገጡ ፍንጮች
ከምንጫቸው፣ ከእምነት ደረጃቸው፣ እና ከጊዜ ክፍተታቸው ጋር ወደ ተገለጸው ውጤት ይቀዳሉ፣ እና
ከፍሬም መግለጫ ጽሑፎች ጎን እንደ የማይታመኑ ምልከታዎች ይቀርባሉ። ልክ ያልሆነ፣
ከክልል ውጭ የሆነ፣ ወይም የመነሻ ማረጋገጫ የሌለው ጽሑፍ ከመግለጫ ጽሑፍ ፍሰቱ ጋር ከመቀላቀል ይልቅ ውድቅ ይደረጋል።
ሁለቱም የጥያቄ-አካል የጽሑፍ ቅጂ ሰርጦች፣ በራስ የተረጋገጡ
`embedded` ወይም `audio-bridge` መለያዎችን ጨምሮ፣ የቀረበውን የመነሻ ማረጋገጫ ወደ `client` ያመሳስላሉ።
እነዚያን የታመኑ መለያዎች በኮድ-ብቻ በሚገኘው `trustedSource` ነጋሪ እሴት በኩል ሊመድብ የሚችለው
በአገልጋይ የሚተዳደር አስማሚ ብቻ ነው፤ የጥያቄ JSON መስክ ወደዚያ ነጋሪ እሴት ሊደርስ
አይችልም። የጽሑፍ ቅጂው ይዘት፣ የመነሻ ማረጋገጫው ምንም ይሁን ምን፣ ከሚዲያ የተገኘ የማይታመን ይዘት ሆኖ ይቆያል፣
እና ፈጽሞ ፈቃድ አሰጣጥን መወሰን የለበትም።

የላቀ ጥሪ አድራጊ ለተመሳሳዩ ቪዲዮ የ`audioTranscript` ትራክ ሊያቀርብ ይችላል፤
ይህም እንደ በደንበኛ የቀረበ ጽሑፍ እንጂ በአገልጋይ የተደረገ ጽሑፍ-ማውጣት ማረጋገጫ ተደርጎ አይወሰድም።
የውህደት ስፌቱ የእይታ እና የድምጽ ምልከታዎችን
በአንድ የጊዜ ገደብ እና የማቋረጫ ምልክት ስር ያስኬዳል፣ በአንድ የጋራ የጊዜ መስመር ላይ ያስተካክላቸዋል፣ ትክክለኛ
ብዜቶችን ያዋህዳል፣ እና ከሁለቱ ወገኖች አንዱ ብቻ ሲሳካ ከፊል ውጤት ሪፖርት ያደርጋል።
ልክ ያልሆነ `audioTranscript` ወደዚያ ከፊል ውጤት ዝቅ ይላል — የእይታ
መግለጫው ይቀመጣል እና የድምጽ ቅርንጫፉ የተጣራ የውድቀት ኮድ ይመዘግባል —
ሙሉውን ቪዲዮ ከማሳካት ይልቅ። የእያንዳንዱ ቅርንጫፍ ተገኝነት፣ የከፊልነት ጠቋሚው፣
እና የተጣሩ የውድቀት ኮዶች በተገለጸው ውጤት፣
በጥበቃ ሜታዳታ (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`)፣ በውጤት-መሸጎጫ ሜታዳታ፣ እና በድልድዩ
የውህደት ቆጣሪዎች ውስጥ ይጠበቃሉ። ነባሪው የVideo Bridge ዱካ ንግግር-ወደ-ጽሑፍን
አይጠራም ወይም ሁለተኛ የሚዲያ ቅጂን አያወርድም፤ ያ ግልጽ ትራክ ከሌለ፣
ለቪዲዮ ብቻ የተወሰነ ሆኖ ይቆያል።

**የጽሑፍ ቅጂ ማቆየት (#12150 P1)።** Video Bridge (ራሱ በፈቃድ የሚነቃ) የጽሑፍ ቅጂ ምልክት ባቀረበ ቁጥር ይህ በራስ-ሰር ተግባራዊ ይሆናል — የተለየ የማቆያ ጠቋሚ የለም። አንድ ጥያቄ ማንኛውንም የጽሑፍ ቅጂ ምልክት (በጥሪ አቅራቢው የተገለጸ `transcript` ወይም የተዋሃደ `audioTranscript`) ሲያቀርብ፣ መከላከያው `videoBridgeObserved` ብሎ ምልክት ያደርግበትና የቪዲዮ መግለጫውን የተሰወረ ጥላ ያመነጫል — ይህም የእያንዳንዱ ምልክት ነፃ-ጽሑፍ ይዘት በ`[redacted-video-transcript]` የተተካበት ተመሳሳይ አቀራረብ ነው፤ ጽሑፉ ከመገጣጠሙ በፊት የተዋቀረውን የምልክት መስክ በመተካት ይገነባል (የተዘረጋውን ጽሑፍ በመተንተን ፈጽሞ አይደለም፤ ስለዚህ ተቃራኒም ሆነ መደበኛ የምልክት ይዘት፣ `]` የያዙ እንደ `[inaudible]`/`[music]` ያሉ ይዘቶችን ጨምሮ፣ ሊቀር አይችልም)። በቋሚነት የሚቀመጠው የጥሪ ምዝግብ ጥያቄ ይዘት፣ እያንዳንዱን ከቪዲዮ የመጣ የጽሑፍ ክፍል በይዘት እኩልነት ተዛምዶ በዚያ የተሰወረ ጥላ ይተካል፤ `fullText` መልሕቅ ከተጠናቀቀው የቅድመ-ጥሪ መከላከያ ጭነት እንደገና ይነበባል፤ ስለዚህ ቀጣይ የሰንሰለት መከላከያዎች (የPII እና የማረጋገጫ መረጃ ሸፋኞች፣ ቅድሚያዎች 10/95) የመግለጫውን ጽሑፍ በቦታው ላይ ከጻፉት በኋላና የስርዓት-መመሪያ/ርክክብ/Memory ማስገባት የመልዕክት ድርድሩን እንደገና ከቀረጸው በኋላም ማዛመዱ ይሳካል። ወደ ሞዴሉ በላይኛው አቅጣጫ የሚላከው ይዘት አይለወጥም። የታየ ጥያቄም ምንም ዘላቂ Memory አይሞላም (ከጥያቄም ሆነ ከምላሽ የሚመነጭ ማውጣት ይዘለላል)፤ ስለዚህ የሞዴሉ የራሱ ምላሽ የጽሑፍ ቅጂ ይዘትን ወደ Memory መልሶ ሊያስተጋባ አይችልም።

**ጥሬ የቪዲዮ መስኮች (#12430)።** Bridge ሲነቃና አገርኛ የቪዲዮ ድጋፍ የማይታወቅ ወይም የሌለ ሲሆን፣ የተገለጹ `transcript`/`audioTranscript` መስኮችም፣ የመግለጫ ውድቀት ወይም የ`maxVideos` ገደብ ካጋጠመ በኋላም፣ `videoBridgeObserved`ን ያነቃሉ። `null` እና ባዶ ሕብረቁምፊዎች ይቆጠራሉ፤ ያልተገኙ መስኮችና ከቪዲዮ ጋር ያልተያያዙ ሜታዳታዎች አይቆጠሩም። የሚቀመጡ ቅጂዎች እነዚህን መስኮች ይሰውራሉ ወይም ጥያቄውን ይተዋሉ፣ እንዲሁም መሸጎጫዎች/Memory ይታለፋሉ።

በእነዚያ የተተኪ መንገዶች ላይ፣ ትክክለኛ የጥሪ አቅራቢ ምልክቶች መደበኛ ያልሆኑ የአቅራቢ መስኮች ከመሆን ይልቅ የሚደገፉ `text`/`input_text` ክፍሎች ይሆናሉ። በጥያቄው የቀረቡት ሁለቱም ትራኮች የማይታመኑ የ`client` ምልከታዎች ሆነው ይቆያሉ፤ ቪዲዮው እንዳልተገለጸና የጊዜ ማኅተሞቹ ከሚዲያው ጋር እንዳልተረጋገጡ ግልጽ ማስጠንቀቂያ ይኖራቸዋል። ነባሮቹ የ256-ምልክት/64-KiB ጠቅላላ እና የእያንዳንዱ ምልክት ገደቦች በሁለቱ ትራኮች ላይ በጋራ ተፈጻሚ ይሆናሉ፤ የጊዜ ማኅተሞች በደላላው የ600-ሰከንድ ከፍተኛ ገደብና በማንኛውም የቀረበ የትኩረት መስኮት ውስጥ መግባት አለባቸው። ልክ ያልሆኑ ትራኮች ይጣላሉ፤ እንደ ዘፈቀደ ጽሑፍ ወደፊት አይላኩም፤ የጋራ ገደባቸው እስካልታለፈ ድረስ ትክክለኛ የሆነ ተዛማጅ ትራክ አሁንም ሊጠቀም ይችላል። Null/ባዶ መስኮች ምንም ጽሑፍ አይጨምሩም። በዚህ ተተኪ መንገድ ምንም የሚዲያ ሰርስሮ ማምጣት ወይም የጽሑፍ ቅጂ ማዘጋጀት አይጨመርም። የጽሑፍ ቅጂ ቅጥያ መስኮች ከተተኪው የቪዲዮ መያዣና ከ`video_url`/`source` ነገሮቹ ይወገዳሉ። የOpenAI የመስመር ላይ ፈቃድ ዝርዝር ጥብቅ ሆኖ ይቆያል፤ አገርኛ ድጋፋቸው ያልታወቀ የቪዲዮ መያዣዎች እንዳሉ ይቆያሉ፣ እና የታወቁ ጽሑፍ-ብቻ መዳረሻዎች ደህንነቱ የተጠበቀ ምልክቶችን ይይዛሉ። የተዋቀሩ የመሰወሪያ ጥላዎች የተያያዘውን የጽሑፍ ቅጂ ጽሑፍ ይጠብቃሉ፣ የጥሪ አቅራቢው ባለቤት የሆነው ዋናው ጥያቄ ግን ሳይለወጥ ይቆያል። አገርኛ ድጋፍ ያላቸው መዳረሻዎችና የተሰናከሉ Bridges ነባሩን የማለፊያ ባህሪያቸውን ይይዛሉ።

ተጨማሪ የሚቀመጡ ቅጂዎች ተመሳሳዩን የታየ-ጥያቄ ምልክት ይጠቀማሉ። ጥሬው የቅድመ-መከላከያ የደንበኛ-ጥያቄ ቅጽበታዊ ቅጂ፣ በማኅደረ ትውስታ ያለው በመጠባበቅ ላይ ያለ ጥያቄና ቀደም ብሎ ውድቅ የተደረገ ጥያቄ ምዝግብ በቪዲዮ ክፍሎች ውስጥ ያሉ የጽሑፍ ቅጂ መስኮችን በመዋቅራዊ ሁኔታ ይተካሉ፤ በቧንቧ መስመሩ ደረጃዎችና በአውድ ርክክብ የተፈጠሩ ሕብረቁምፊ መመሪያዎች በቋሚው የጥያቄ-ይዘት መድረሻ ላይ ይሰወራሉ። በቋሚነት የተቀመጠው `video_content_removed` ምልክት፣ `previous_response_id` ቀጣይነት ሆን ተብሎ የተጣለውን ጽሑፍ መልሶ ከመገንባት ይልቅ በዝግ ሁኔታ እንዲወድቅ ያደርገዋል። የታየ ጥያቄ ከመመዝገቡ በፊት የእያንዳንዱን ክፍል የመሰወሪያ ጥላ ካጣ፣ ወይም ከበርካታ የቪዲዮ ጥላዎች አንዱ እንኳን ከቀጣይ የጥያቄ ለውጦች በኋላ መዛመድ ካልቻለ፣ በከፊል የተሰወረ የጽሑፍ ቅጂ ከማቆየት ይልቅ የሚቀመጠው የጥያቄ ይዘት ሙሉ በሙሉ ይተዋል።

ለታየ ጥያቄ፣ የሞዴል ምላሽ የጽሑፍ ቅጂውን ማንኛውንም ክፍል ያለ የተዋቀረ የምልክት ወሰን ሊጠቅስ ይችላል። ስለዚህ በቋሚነት የሚቀመጠው የጥሪ ምዝግብ `responseBody` በመተው ምልክት ይተካል፤ ዝርዝር የቧንቧ መስመር ውጤት (በላይኛው አቅጣጫ/የደንበኛ ይዘቶችንና የዥረት ቁርጥራጮችን ሊያካትት የሚችል) አይቀመጥም። የትርጉም፣ የድግግሞሽ-አልባነትና የምክንያታዊ-ድጋሚ-ማጫወቻ መሸጎጫዎች ለዚያ ጥያቄ ንባብና ጽሑፍን ያልፋሉ። የአቅራቢው ጥያቄና ለደንበኛው የሚታየው ምላሽ ሳይለወጡ ይቆያሉ። ዝርዝር ውጤቱ ሲተው፣ ቀደምት የkeepalive ባይቶች ከጊዜያዊው ቋት ይፈስሳሉ። የKiro የተበላሸ EventStream ማስጠንቀቂያ የሚያሳየው የጭነቱን የባይት ብዛት ብቻ ነው፤ ይዘቱን ወይም የJSON ተንታኙን ጥሬ ስህተት ፈጽሞ አያሳይም።
ይህ ሁሉም ያልተዛመዱ የአቅራቢ/ተሰኪ ምርመራዎች ኦዲት ተደርገዋል ማለት አይደለም፤ ሰፋ ያለው የተቀመጡ-መድረሻዎች ፍተሻ በ#11658 ውስጥ ክትትል ይደረግበታል።

ውስጣዊው `/api/modality-bridge/video/drilldown` የሕይወት ዑደት የተለየ፣ በloopback/token የተረጋገጠ የመሸጎጫ መሠረተ ልማት ነው። እያንዳንዱ ክዋኔ መደበኛ ግልጽነት የሌለው የዋና አካል መታወቂያም ይፈልጋል። የምርት ጥሪ አቅራቢ ከመንቃቱ በፊት፣ ያንን መታወቂያ ከተረጋገጠው ተከራይ መፍጠር አለበት፣ እና በደንበኛ የተመረጠ እሴትን ፈጽሞ ወደፊት ማስተላለፍ የለበትም። የመሸጎጫ ቁልፎች ያንን ዋና አካል ከመደበኛ የክፍለ ጊዜና የቪዲዮ-ማጣቀሻ መታወቂያዎች ጋር ያስተሳስራሉ፣ በSHA-256 የተፈጠሩ ቁልፎቻቸውን ብቻ ያከማቻሉ፣ እንዲሁም ንባብና ስረዛን ለተመሳሳዩ ዋና አካል ይገድባሉ። መሸጎጫው በእያንዳንዱ ግቤት ቢበዛ 16 የተፈጠሩ JPEG ፍሬሞችን ያከማቻል፣ ከአሥር ደቂቃ በኋላ ጊዜያቸውን ያሳልፋል፣ እንዲሁም የተገደቡ `start`/`end` ንባቦችን ወይም ግልጽ የክፍለ ጊዜ ስረዛን ይደግፋል።

እያንዳንዱ ዋና አካል በ16 ግቤቶችና 64 MiB መደበኛ JPEG ውሂብ የተገደበ ነው። እነዚህ ገደቦች ከዓለም አቀፉ የ64-ግቤት/256 MiB ከፍተኛ ገደብ ነጻ ናቸው፤ የዋና አካል ኮታ ጫና፣ ዓለም አቀፍ LRU ማስወጣት ከመታሰቡ በፊት፣ የዚያን ዋና አካል በቅርብ ጊዜ በትንሹ ጥቅም ላይ የዋሉ ግቤቶችን ብቻ ያስወጣል። ጊዜያቸው ያለፈ ግቤቶች በመሸጎጫ እንቅስቃሴ ወቅት ከዋና አካልና ከዓለም አቀፍ ስሌት ይጠረጋሉ፤ ስረዛና የማረጋገጫ ውድቀት ግን ከፊል ምትክን አያጸድቁም።

መሸጎጫው መደበኛ ያልሆነ Base64ን፣ ከመጠን ያለፈ ማሟያን፣ JPEG ያልሆነ ሚዲያን፣ የተበላሹ ወይም
ያልተሟሉ JPEGዎችን፣ እንዲሁም ወሰን ባለው የሙሉ ምስል `sharp`
ዲኮድ ወቅት ማስጠንቀቂያ የሚያመነጩ JPEGዎችን ውድቅ ያደርጋል። ተቀባይነት ያገኘውን እያንዳንዱን ምስል እንደ መደበኛ JPEG እንደገና ኢንኮድ ያደርጋል፣ በጠሪው መስኮች ከመታመን ይልቅ ስፋትንና ቁመትን
ከዲኮድ ከተደረጉት ባይቶች ይወስዳል፣ እንዲሁም ተከታትለው የመጡ
ፖሊግሎት ባይቶችን ከማቆየት ይልቅ ያስወግዳል። በወሰን ውስጥ ያለው መደበኛ የታመቀ ቋት ብቻ
በሁለቱም ኮታዎች ላይ ይቆጠራል። የJSON የማስተላለፊያ ገደቡ ለ32 MiB
የዲኮድ-ግብዓት ጣሪያ የBase64 ተጨማሪ መጠንን ያካትታል። እያንዳንዱ
የተከማቸ ውጤት የተረጋገጠውን የJPEG ቅርጸት/ጥራት፣ የናሙና መውሰጃ ፖሊሲ፣
የውጤት ስሪት፣ የመፍጠሪያ ጊዜ፣ በአገልጋዩ የተሰላ የይዘት ሃሽ፣ እና ሃሽ የተደረገ
የወላጅ ማጣቀሻን ከታመነው ጠሪ የወላጅ-ይዘት ሃሽ ጋር ይመዘግባል። ስረዛ ከአቶሚክ የመሸጎጫ ማስገባት በፊት
ባሉ ያልተመሳሰሉ የዲኮድ/ሃሽ ደረጃዎች መካከል ይፈተሻል።

ይህ ክፍለ ልቀት የምርት አምራችን ከመንገዱ ጋር ገና አያገናኝም፣ እንዲሁም
ባለብዙ-ጥራት ተለዋጭ ምርጫን አያቀርብም። ስለዚህ ግልጽ የVideo Bridge ጥያቄ
መንገድ ምንም ተጨማሪ ሥራ አያስከትልም፤ በተከራይ የተገደበ የዋና ማንነት ውጤት ማመንጨት እና
ሙሉው የFU-08 ባለብዙ-ጥራት የሕይወት ዑደት እንደተጠናቀቀ ባህሪ
ከመመዝገብ ይልቅ ግልጽ የቀጣይ ሥራ ሆነው ይቀራሉ።

ፍሬሞች በተዋቀረው የVideo ሞዴል በቅደም ተከተል መግለጫ ይሰጣቸዋል። ባዶ
የVideo ሽረት የVision ቅንብሩን ይወርሳል፤ ሁለቱም ባዶ ከሆኑ የVision
ራስ-ሰር መምሪያው ውጤታማውን ራዕይ-ብቃት ያለው ሞዴል ይመርጣል። የተሳኩ መግለጫዎች
ዋናውን ክፍል በተረጋጋ `[Video description:` ቅድመ ቅጥያ ይተካሉ፤ ይህም
ጽሑፉን ከማይታመን ሚዲያ የተገኘ ምልከታ መሆኑን ያመለክታል፣ እንዲሁም በሚዲያው ውስጥ ያሉ መመሪያዎችን እንዳይከተሉ
ለተከታይ ሞዴሎች ይነግራል። የፍሬም-መግለጫ መሸጎጫ ቁልፎች
የJPEG ባይቶችን፣ መጠየቂያን፣ የጊዜ ማህተምን እና ውጤታማውን ሞዴል ያካትታሉ፤ የተሳኩ
መግለጫዎች ብቻ ይሸጎጣሉ። የመሸጎጫ ግቤቶች የመጠባበቂያ ሞዴልን ጨምሮ በትክክል የተሳካውን አምራች ሞዴል
ይይዛሉ፤ ድልድዩም የተለያዩ ፍሬሞች
በተለያዩ ሞዴሎች ሲመረቱ `mixed` ሲል ሪፖርት ያደርጋል። የመሸጎጫ ግጥሚያ ያንን የአምራች ማንነት
እንደተጠየቀው የማስተላለፊያ ዕቅድ እንደገና ከመሰየም ይልቅ እንደገና ይጠቀምበታል። የሙሉ-ቪዲዮ ውጤት
መሸጎጫው ውጤቱን በሚቀይሩ እያንዳንዱ ግብዓቶች ላይ ቁልፍ ይደረግለታል — መጠየቂያ፣ ውጤታማ
ሞዴል፣ የናሙና መውሰጃ ፖሊሲ፣ የፍሬም ብዛት፣ የትርጉማዊ ትንተና ሁነታ፣ መደበኛ የተደረገው የትኩረት ፍንጭ SHA-256
አሻራ፣ የትኩረት መስኮት፣ `transcript`፣
`audioTranscript`፣ እና የእውቂያ-ሉህ ምልክት — ስለዚህ ከእነዚህ
መጠኖች አንዱን መቀየር የመሸጎጫ አለመግጠም እንጂ ያረጀ ውጤትን እንደገና መጠቀም አይሆንም። የእይታ ተደጋጋሚነት ማስወገጃ ፖሊሲ
ስሪት፣ ገደብ እና ወሰን ያለው የእጩ-ፍሬም ብዛትም በውጤት-መሸጎጫ
ቁልፍ እና ሜታዳታ ውስጥ በግልጽ ተካትተዋል፤ ስለዚህ የፖሊሲ ለውጥ ያረጀ
የሙሉ-ቪዲዮ መግለጫን እንደገና መጠቀም አይችልም። የውጤት-መሸጎጫ v4 ሜታዳታ ሁነታውን እና
አሻራውን ይይዛል፤ ጥሬ የተጠቃሚ ተግባሩን ግን ፈጽሞ አያስቀምጥም። የመከላከያ ሜታዳታ የተጠየቀውንም ሆነ
ውጤታማውን የትንተና ሁነታ ሪፖርት ያደርጋል፤ ጠቃሚ የተጠቃሚ ጽሑፍ ሳይኖር የተጠየቀ `focused` ሁነታ
በተግባር `full` ሆኖ ሪፖርት ይደረጋል።

መከላከያው ሁሉንም የሚደገፉ የቪዲዮ ክፍሎች ያወጣል፣ ነገር ግን
ከ`modalityBridgeVideoMaxVideos` በላይ አይገልጽም።
`supportsVideo === false` እንዳለው ለተረጋገጠ ዒላማ፣ ያልተሳኩ እና ከገደብ በላይ የሆኑ ቪዲዮዎች ጥሬ ቪዲዮ
እንዳይቀር ግልጽ ወደሆኑ ደህንነታቸው የተጠበቀ የጽሑፍ ምልክቶች ይቀየራሉ። ብቃቱ በማይታወቅበት ጊዜ እነዚያ ክፍሎች
የቪዲዮ ተሸካሚያቸውን ይይዛሉ፤ ማንኛውም የመጠባበቂያ ግልባጭ ከላይ የተገለጸውን ወሰን ያለው የጽሑፍ
ልወጣ ይከተላል። `supportsVideo === true` ያላቸው ዒላማዎች ድልድዩን ይዘላሉ።
የደንበኛው የጥያቄ ማቋረጫ ምልክት በማውረድ፣ በደላላ ወረፋ፣
በንዑስ ሂደቶች እና በመግለጫ ጥሪዎች በኩል ይተላለፋል፤ ማቋረጦች በቪዲዮዎች መካከል ያቆማሉ፣ እና ወደ ጥሬ
ሚዲያ ክፍት ሆነው አይወድቁም።

የአሂድ ጊዜ ቅንብሮች በDB የተደገፉ እና በZod የተረጋገጡ ናቸው፦

| ቁልፍ                                 | ነባሪ         | ክልል / ባህሪ                                                                            |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | አማራጭ የአሂድ ጊዜ፣ በፈቃድ የሚነቃ                                                              |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` አጠቃላይ መግለጫዎችን ይጠብቃል፤ `focused` ወሰን ያለውን፣ የማይታመን የቅርብ ጊዜ የተጠቃሚ አውድ ይጠቀማል       |
| `modalityBridgeVideoModel`          | `""`        | የVision Bridge ሞዴልን ይወርሳል                                                            |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`፣ `scene_aware`፣ ወይም ተመጣጣኝ `segment_aware`፤ የመለየት አለመሳካት ወደ `uniform` ይመለሳል |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                       |

ከ120 ሰከንድ በላይ የሆኑ የቆዩ የVideo ጊዜ ገደብ እሴቶች ወደ
ደላላው የጊዜ ገደብ ይቆረጣሉ፤ ከዚያ ገደብ በላይ የሆኑ አዳዲስ የቅንብር ጽፎች ውድቅ ይደረጋሉ።
`GET /api/modality-bridge/video/runtime` ከማረጋገጫ ወይም ከአሂድ ጊዜ ምርመራ በፊት ታማኝ ማህተም ያለው የሉፕባክ
አካባቢያዊነትን ይጠይቃል፣ ከዚያም የአስተዳደር
ማረጋገጫን ይጠይቃል። የሚመልሰው `available`ን፣ የጸዱ የFFmpeg/ffprobe ስሪቶችን፣ እና የአሂድ ጊዜው በማይገኝበት ጊዜ ቋሚ
ምክንያትን ብቻ ነው። የውስጥ ማውጫ መጨረሻ ነጥብ
የሕዝብ ሰቀላ API አይደለም፦ የወረፋ ሙላት `503` ከ`Retry-After` ጋር ይመልሳል፣ የጠሪ
ግንኙነት መቋረጥ `499` ይመልሳል፣ እና ቋሚው የደላላ ጊዜ ገደብ `504` ይመልሳል። የተቀየሩ ምላሾች
የVision ወይም Audio ክፍሎችን ሳያስወግዱ `video->text;model=<visionModel>;parts=<videos>`ን ወደ ማዕከላዊው
`x-omniroute-modality-bridge` ራስጌ ያክላሉ።

### የPII መሸፈኛ (`piiMasker.ts`)

በ**ሁለቱም** ደረጃዎች ላይ ይሰራል።

- **`preCall`** payload-ን clone ያደርጋል፣ `system`፣ `messages`፣ `input` እና
  `prompt`-ን (ተራ string ንጥሎችንም ጨምሮ) ይዳስሳል፣ እንዲሁም በ string
  `content`/`text` fields ላይ `processPII()`-ን (ከ
  `@/shared/utils/inputSanitizer`) ይተገብራል።
  `PII_REDACTION_ENABLED=true` ሲሆን፣ የተገኘ PII ከስርዓቱ በሚወጣው
  payload ውስጥ ይደበቃል። ይህ ከ`INPUT_SANITIZER_MODE` (ይህም
  የprompt-injection ፖሊሲን ብቻ የሚቆጣጠር) ነጻ ነው። ድብቀቱ ሲጠፋ፣
  call-ው content-ን ሳይቀይር የመገኘት ብዛቶችን ይመዘግባል።
- **`postCall`** response-ን deep-clone ያደርጋል፣ `sanitizePIIResponse()`-ን
  ከResponses-API-shape masker (`maskResponsesOutput` — `output_text` እና
  `output[].content[].text`-ን ይሸፍናል) ጋር ያስኬዳል። ማንኛውም ድብቀት
  ከተከሰተ፣ የተሻሻለው response ዋናውን ይተካል።

guardrail-ው ፈጽሞ አያግድም፤ ማብራሪያ ብቻ ይጨምራል
(`meta.detections`፣ `meta.redacted`) ወይም እንደገና ይጽፋል።

#### በዓይነት የሚደረግ ምርጫ፣ ብጁ patterns እና የመገኘት ቆጣሪዎች

**Dashboard → Settings → Security → PII masking** የሚደበቀውን _ምን_ እንደሆነ
ይመርጣል። masking-ን አያበራም፦ ያንን አሁንም `PII_REDACTION_ENABLED`
(request) እና `PII_RESPONSE_SANITIZATION` (response + SSE) ይቆጣጠራሉ፣
ሁለቱም በነባሪ ጠፍተዋል።

- **በዓይነት የሚደረግ ምርጫ** — አብሮገነብ ids በ
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) ውስጥ ተዘርዝረዋል።
  አለመወሰን ማለት ሁሉም ዓይነቶች ማለት ነው (ይህ setting ከመኖሩ በፊት
  የነበረው ባህሪ)። የrequest engine `ssn_us` pattern ወደ `ssn` ይመደባል።
  Templates (Minimal፣ Standard፣ Financial፣ Brazilian፣ USA፣ Full) በUI ውስጥ
  ያሉትን checkboxes ብቻ ይሞላሉ።
- **ብጁ patterns** — እስከ 20 regex ወይም wildcard patterns (`*` = እስከ 64
  ነጭ-ክፍተት ያልሆኑ ቁምፊዎች፣ `?` = አንድ)። Matches
  `[CUSTOM_REDACTED]` ይሆናሉ። እያንዳንዱ pattern
  `compilePiiCustomPattern()`-ን
  (`src/shared/utils/piiCustomPatterns.ts`) ያልፋል፦ ቢበዛ 500 ቁምፊዎች፣
  flags በ`g i m s u` የተወሰኑ፣ compile መሆን የሚችል፣ `safe-regex`-ን
  (አስከፊ backtracking) ማለፍ ያለበት፣ እንዲሁም ባዶ string ወይም
  redaction placeholder ጋር match መሆን የሌለበት። ያልተሳካ pattern
  ሲቀመጥም ሆነ ሲፈተሽ ውድቅ ይደረጋል፣ እና ያልተሳካ የተከማቸ row
  compile ከመደረግ ይልቅ በruntime ይዘለላል። ብጁ patterns የሚሰሩት
  masking በርቶ እያለ ብቻ ነው።
- **የመገኘት ቆጣሪዎች** — በዓይነት የተከፋፈሉ ብዛቶች (match
  የሆኑት እሴቶች ፈጽሞ አይቀመጡም)፣ በmemory ውስጥ ይያዛሉ እና restart
  ሲደረግ reset ይሆናሉ (`src/lib/pii/piiDetectionStats.ts`)። የሚጨምሩት
  masking በርቶ እያለ ብቻ ነው።

settings በ`key_value` table (namespace `pii_settings`፣
`src/lib/db/piiSettings.ts`) ውስጥ ይቀመጣሉ እና በ1 s cache በኩል ይነበባሉ። API፦

| ዘዴ     | Path                     | ዓላማ                                                               |
| ------ | ------------------------ | ----------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | የflag ሁኔታ፣ `enabledTypes`፣ `customPatterns`፣ የመገኘት ቆጣሪዎች          |
| `PUT`  | `/api/settings/pii`      | `enabledTypes`-ን (`null` = ሁሉም) እና/ወይም `customPatterns`-ን መተካት    |
| `POST` | `/api/settings/pii/test` | አንድ pattern-ን ቢበዛ 8 KB በሆነ sample ላይ ያለማስቀመጥ መፈተሽ፤ ምንም ነገር አይከማችም |

ሦስቱም management auth ይፈልጋሉ እና body-ውን በZod
(`src/shared/validation/schemas/piiSettings.ts`) ያረጋግጣሉ።

### Prompt Injection (`promptInjection.ts`)

በተጠቃሚ በቀረበ content ውስጥ ያሉ ጠላትነት ያላቸውን አወቃቀሮች
ያገኛል እና የተዋቀረውን ፖሊሲ ያስፈጽማል። ባህሪው በenvironment
variables እና constructor options ይመራል፦

| Setting  | Env var                                                                                               | ነባሪ    | ውጤት                                                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ነቅቷል     | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | `false` ሲሆን፣ guardrail-ው ወዲያውኑ ያቋርጣል።                                                                                                                                   |
| Mode     | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | የInjection ፖሊሲ፦ `block`፣ `warn` ወይም `log`። (`redact` ለኋላ-ተኳኋኝነት ተቀባይነት አለው፣ ነገር ግን injection text-ን **አያስወግድም**፤ የrequest PII ዳግም መጻፍ በ`PII_REDACTION_ENABLED` ይቆጣጠራል።) |
| የማገጃ ገደብ | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | ለማገድ የሚያስፈልገው ዝቅተኛው severity። በነባሪው Medium ለክትትል ብቻ ነው።                                                                                                                 |

**የMode ቅድሚያ** (`getMode`)፦ caller `options.mode` →
`INJECTION_GUARD_MODE` **የDB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`። ስለዚህ የdashboard override ከenv vars ይቀድማል፣ በዚህም Feature
Flags UI እየሰራ ያለውን guard በቀጥታ ይቆጣጠራል (restart አያስፈልግም)።
የDB read fail-safe ነው፦ ስህተት ካጋጠመው guard-ው ወደ env-based
ባህሪ ይመለሳል፣ override ካልተወሰነም ባህሪው ከenv-only resolution ጋር
ተመሳሳይ ነው።

የማግኛ ምንጮች፦

1. `sanitizeRequest()` ከ`@/shared/utils/inputSanitizer` (በpipeline ውስጥ
   በሌሎች ቦታዎችም ጥቅም ላይ የሚውል የጋራ detector set)።
2. አብሮገነብ `DEFAULT_GUARD_PATTERNS` (በአሁኑ ጊዜ `system_override_inline`
   እና `markdown_system_block`፣ ሁለቱም `high` severity)።
3. በconstructor options በኩል የሚተላለፉ አማራጭ `customPatterns`
   (strings፣ regex ወይም `{ name, pattern, severity }` records)።

`mode === "block"` **ሲሆን** እና ቢያንስ አንድ ማወቂያ የክብደት
ገደቡን ሲያሟላ፣ `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` ይመልሳል። በ`warn`/`log` ሁነታዎች guardrail መዝገብ ይይዛል፣ ነገር ግን
ጥሪውን ይፈቅዳል። የጋራ helper የሆነው `evaluatePromptInjection()` በregistry ውስጥ
ሳያልፉ prompts መገምገም ለሚፈልጉ ጠሪዎችም export ተደርጓል።

**የፍተሻ ወሰን (v3.8.20):** detector የተቀላቀለውን የprompt ጽሑፍ **የመጀመሪያ 16 KB** ብቻ
ይመረምራል — `src/shared/utils/inputSanitizer.ts` ውስጥ `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes)
ነው። `detectInjection()` እና
`evaluatePromptInjection()` ሁለቱም የpattern loop ከማስኬዳቸው በፊት
`slice(0, MAX_INJECTION_SCAN_BYTES)` ይጠቀማሉ። የInjection መመሪያዎች ከinput መጀመሪያ አካባቢ ስለሚገኙ፣ ይህ
የማወቅ ብቃትን ሳያዳክም ባለብዙ-መቶ-KB payloads ላይ የregex CPU/GC አጠቃቀምን ይገድባል (cf.
#3932, #4041)።

### የCredential መሸፈኛ (`credentialMasker.ts`)

በ**ሁለቱም** stages ላይ ይሰራል፣ በነባሪ chain ውስጥ የመጨረሻ ነው (priority `95`)። በስፋት የሚታወቁ
የAPI-key / secret-token patternsን ከወጪ payload (የmessage
ይዘት፣ የtool-call arguments፣ የtool results) **እና** ከprovider response ውስጥ ይደብቃል፤ ስለዚህ ወደ
prompt ውስጥ የተለጠፈ credential (ወይም በtool result ተመልሶ የተላከ) ወደ upstream provider
ወይም ወደ client ተመልሶ አይጋለጥም።

- **በምርጫ ሲነቃ ብቻ**፣ ከPII redaction ጋር ተመሳሳይ ልምድ ነው (ከጥብቅ ደንብ #20 ጋር የተጎራበተ)፦
  `settings.credentialRedactionEnabled === true` **ወይም**
  `CREDENTIAL_REDACTION_ENABLED=true` ካልሆነ በስተቀር የተሰናከለ ነው። ሲጠፋ guardrail no-op ነው —
  በፍጹም አያግድም እና በፍጹም ዳግም አይጽፍም።
- `redactCredentials()` ሙሉውን የpayload/response tree (`walkValue()`፣
  ከprototype-pollution የተጠበቀ፣ በ`WeakSet` አማካኝነት ከcycle የተጠበቀ) ያልፋል እና matchesን
  በ`[REDACTED:<type>]` placeholder ይተካል፤ በእርግጥ የተለወጡትን branches ብቻ
  clone ያደርጋል።
- `CREDENTIAL_PATTERNS` የLLM provider keys (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate)፣ VCS/SaaS tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord)፣ payment keys (Stripe, Square)፣ cloud
  keys (AWS access key, Twilio, SendGrid, Mailgun)፣ private keys / JWTs፣
  credential የያዙ connection strings (`mongodb://user:pass@...` ወዘተ) እና
  አጠቃላይ የ`Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  patternን ይሸፍናል። Header ቅርጽ ያላቸው keys (`authorization`, `x-api-key`, `api-key`,
  `apikey`) በአጠቃላይ የtext regex ሳይሆን በመዋቅራዊ መንገድ ይደበቃሉ (value ብቻ፣ እንደ
  `Bearer `/`Basic ` ያለው scheme prefix ይጠበቃል)።
- guardrail በፍጹም አያግድም፤ ዳግም ይጽፋል (`modifiedPayload` /
  `modifiedResponse`) እና annotation ያክላል (`meta.credentialsRedacted`, `meta.count`) ብቻ።

የRegression መከላከያ፦ `tests/unit/credential-masker-guardrail.test.ts`።

## መሠረታዊ ውል (`base.ts`)

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
  block?: boolean; // true ሰንሰለቱን ወዲያውኑ ያቋርጣል
  message?: string; // ሲታገድ ይታያል
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ጥያቄውን እንደገና ለመጻፍ በ-preCall ይመለሳል
  modifiedResponse?: TValue; // ምላሹን እንደገና ለመጻፍ በ-postCall ይመለሳል
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

አንድ guardrail `void`፣ `{}` ወይም
`{ block: false }` በመመለስ “ምንም ለውጥ የለም” የሚለውን ያመለክታል። `modifiedPayload`/`modifiedResponse` መመለስ
በሰንሰለቱ ውስጥ ወደ ቀጣዮቹ guardrails የሚተላለፈውን እሴት ይተካል።
`signal?: AbortSignal` የጠሪውን የሕይወት ዑደት ወደ guardrails ያስተላልፋል። የጥያቄ ማቋረጥ ሆን ተብሎ የተደረገ fail-open ልዩ ሁኔታ ነው፦ media bridges ሥራቸውን አቁመው የማጽዳት ሥራ ያከናውናሉ፤ ነገር ግን እንደማይደግፈው ወደሚታወቅ target ጥሬ media አይመልሱም።

## መዝገብ (`registry.ts`)

singleton `guardrailRegistry` የሚከተሉትን ያቀርባል፦

- `register(guardrail)` — guardrail ያክላል (ወይም normalized name በመጠቀም ይተካል) እና
  በ`priority` ከትንሹ ወደ ትልቁ እንደገና ይደረድራል።
- `clear()` / `list()` — አስተዳደራዊ ረዳት ተግባራት።
- `runPreCallHooks(payload, context)` — ንቁ guardrails ላይ በቅደም ተከተል ያልፋል፣
  payloadን በ`modifiedPayload` በኩል ያስተላልፋል፣ እና በመጀመሪያው `block: true` ላይ ይቆማል።
- `runPostCallHooks(response, context)` — በresponse በኩል ተመሳሳይ ሂደትን ይከተላል።
- `resetGuardrailsForTests({ registerDefaults })` — stateን ያጸዳል፣ እና ንጹሕ የtest isolation ለማግኘት
  እንደ አማራጭ defaultsን እንደገና ይመዘግባል።

ሁለቱም runners `{ blocked, payload|response, results, guardrail?, message? }`
ይመልሳሉ፤ በዚህ ውስጥ `results` ለእያንዳንዱ guardrail
`blocked`፣ `skipped`፣ `modified`፣ `error` እና `meta` fieldsን የሚያካትቱ
የ`GuardrailExecutionResult` records ድርድር ሲሆን፣ ለtracing ጠቃሚ ነው።

### Guardrailsን ለእያንዳንዱ ጥያቄ ማሰናከል

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ለአሁኑ
ጥያቄ መዝለል ያለባቸውን የguardrail ስሞች የተደጋገሙ ቅጂዎች የተወገዱበት ዝርዝር
ያሰባስባል። አምስት channels አሉ፤ በዚህ ቅደም ተከተል ይነበባሉ እና ወደ አንድ ዝርዝር
ይዋሃዳሉ (የተደጋገሙት ሲወገዱ መጀመሪያ የታየው ይቆያል)፦

1. `apiKeyInfo.disabledGuardrails`
2. የጥያቄ body `disabledGuardrails` (top-level)
3. የጥያቄ body `metadata.disabledGuardrails` (`metadata` object ሲሆን ብቻ)
4. Header `x-omniroute-disabled-guardrails`
5. Legacy header `x-disabled-guardrails`

ሁሉም አምስቱ channels ይዋሃዳሉ፣ ሁለቱ headersም ይካተታሉ፦
`x-omniroute-disabled-guardrails` እና `x-disabled-guardrails`ን ሁለቱንም መላክ
የዝርዝሮቻቸውን union እንዲዘለል ያደርጋል፣ እና ባዶ modern header ከእንግዲህ
legacy headerን አይደብቅም
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)፣ በ
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) ተስተካክሏል)።

እሴቶች የstrings ድርድሮች ወይም በነጠላ ሰረዝ የተለዩ string ሊሆኑ ይችላሉ፤ ስሞች
ዙሪያቸው ያለው ባዶ ቦታ ይወገዳል፣ ወደ lowercase kebab-case (`pii_masker` → `pii-masker`) normalize
ይደረጋሉ፣ እና ባዶ entries ይወገዳሉ። ውጤቱ ተዛማጅ guardrailsን ወደሚዘለው registry
በ`context.disabledGuardrails` በኩል ይተላለፋል (`skipped: true` በ`results` ውስጥ)።

የdisable ዝርዝሩ የሚነካው **registry**ን ብቻ ነው። የPrompt-injection `block` mode
ግዴታዊ boundary ነው፦ injection-guard middleware
(`src/middleware/promptInjectionGuard.ts`) ምንም በጠሪው ቁጥጥር ሥር ያለ disable list ሳይኖር
`evaluatePromptInjection()`ን ይጠራል (ከዚህ በፊት ያደርገው የነበረው ጥቅም አልባ
`resolveDisabledGuardrails({ body })` call በ
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) ተወግዷል)፤ ስለዚህ
`prompt-injection`ን የሚያሰናክል ጥያቄ እንኳ በ`block` mode ውስጥ ውድቅ ይደረጋል። ይህ
ሆን ተብሎ የተነደፈ ነው። disable channels በጠሪው ቁጥጥር ሥር ናቸው (የጥያቄ body፣
metadata፣ headers)፣ እና አንድ ጠሪ operator ያዋቀረውን የደህንነት
መቆጣጠሪያ ማጥፋት መቻል የለበትም
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))። በ
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) የተደረገው header
union ለውጥ የሚቀይረው የትኞቹ registry guardrails እንደሚዘለሉ ብቻ ነው፤ client
middlewareን bypass እንዲያደርግ አያስችለውም። ግዴታዊ የper-key እና per-group guardrail policies
በv4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) ውስጥ ክትትል ይደረግባቸዋል።
[ሽፋን እና ገደቦች](#coverage-and-limits)ን ይመልከቱ።

## የአፈጻጸም ቅደም ተከተል

በ`src/sse/handlers/chat.ts` እና
`open-sse/handlers/chatCore.ts` በኩል ለሚያልፍ ለእያንዳንዱ ጥያቄ (በ
[ሽፋን እና ገደቦች](#coverage-and-limits) ስር የተዘረዘሩት የውይይት ቤተሰብ መንገዶች)፦

1. `resolveDisabledGuardrails(...)` ከAPI ቁልፉ፣ ከbody እና ከheaders የሚዘለሉትን ዝርዝር ይገነባል።
2. `guardrailRegistry.runPreCallHooks(body, ctx)` የደኅንነት ገደቦችን ከዝቅተኛ ወደ ከፍተኛ
   የቅድሚያ ቅደም ተከተል ያስኬዳል፦
   - የተሰናከሉ የደኅንነት ገደቦች እንደ `skipped` ይመዘገባሉ።
   - የእያንዳንዱ የደኅንነት ገደብ `preCall` በ`modifiedPayload` በኩል payloadን እንደገና ሊጽፍ ይችላል።
   - የመጀመሪያው `block: true` ሰንሰለቱን ወዲያውኑ ያቋርጣል፣ እና handlerው
     የደኅንነት ገደብ ውድቅ ማድረጊያ ምላሽ ይመልሳል።
3. (ሊሻሻል የሚችለው) payload ወደ combo routing እና upstream
   dispatch ይተላለፋል።
4. **streaming ላልሆነ ብቻ፦** ምላሹ ከተገጣጠመ በኋላ፣
   `guardrailRegistry.runPostCallHooks(...)` በምላሹ ላይ ተመሳሳዩን ሰንሰለት
   ያስኬዳል። እዚህ `block: true` የupstream ምላሹን ትቶ HTTP 400ን ይመልሳል። Streaming የሚደረጉ ምላሾች ይህንን ደረጃ ሙሉ በሙሉ ይዘሉታል።

exception የሚያስነሱ የደኅንነት ገደቦች በ`error: <message>` ይመዘገባሉ፣ እንዲሁም በ
`logger.warn` በኩል log ይደረጋሉ፤ ነገር ግን ሰንሰለቱ ይቀጥላል — ይህ በንድፍ የተመረጠ fail-open ባህሪ ነው።

## ሽፋን እና ገደቦች

የደኅንነት ገደብ registryው የተገናኘው ከውይይት pipeline ጋር ብቻ ነው። እነዚህ ገደቦች
በ`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` እና
`tests/unit/guardrail-pipeline-characterization.test.ts` የተወሰኑ ናቸው፤ ባህሪው
በሚቀየርበት ጊዜ እነዚያን tests ሆን ብለው ያዘምኑ።

### Hooks የሚሰሩባቸው ቦታዎች

| Hook / መቆጣጠሪያ                    | የሚሰራበት                                                                                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                | በ`handleChat` (`src/sse/handlers/chat.ts`) የሚስተናገዱ ጥያቄዎች፦ `/v1/chat/completions`፣ `/v1/completions`፣ `/v1/messages`፣ `/v1/responses` (እና `/v1/responses/*`)፣ `/v1/relay/chat/completions`፣ `/v1/providers/{provider}/chat/completions`፣ `/v1/api/chat`፣ `/v1/antigravity`፣ `/v1beta/models/*` እና የTelegram ውይይት proxy። እንዲሁም የdashboard test endpoint `/api/guardrails/test`። የpre-call block HTTP 400ን ይመልሳል። |
| `runPostCallHooks`               | **streaming ያልሆኑ** የውይይት ምላሾች ብቻ (`open-sse/handlers/chatCore/nonStreamingResponse.ts`)። Streaming የሚደረጉ ምላሾች ፈጽሞ ወደዚህ አይደርሱም።                                                                                                                                                                                                                                                                                 |
| Streaming PII                    | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`)፣ `PII_RESPONSE_SANITIZATION` ክፍት ሲሆን በ`streamingPipeline.ts` ውስጥ pipe ይደረጋል። ይህ የደኅንነት ገደብ ስላልሆነ የማሰናከያ ቻናሎቹ አይነኩትም።                                                                                                                                                                                                                              |
| Injection-guard middleware (የቆየ) | prompt ያለው እያንዳንዱ `/v1` route፣ የውይይት ቤተሰብን ጨምሮ ([የroute ሽፋንን](#injection-guard-route-coverage--red-team-phase-8--block-d) ይመልከቱ)። Prompt injection ብቻ።                                                                                                                                                                                                                                                         |

### ያልተሸፈነው

- **የmedia፣ embeddings እና data routes** (`/v1/images/*`፣ `/v1/embeddings`፣
  `/v1/audio/*`፣ `/v1/videos/generations`፣ `/v1/music/generations`፣
  `/v1/rerank`፣ `/v1/search`፣ `/v1/moderations`) ፈጽሞ registryው ጋር
  አይደርሱም። በዚያ PII masking፣ credential masking ወይም modality bridge
  አይሰራም። ብቸኛው ማረጋገጫቸው የቆየው injection-guard middleware ነው።
- **Streaming የሚደረጉ ምላሾች** ምንም post-call guardrails አያገኙም፦ post-call
  `pii-masker` ወይም `credential-masker` የለም፣ post-call blockም የለም። Streaming PII
  transform ብቻ ይተገበራል (`PII_RESPONSE_SANITIZATION` ክፍት ሲሆን)። Streaming በሚደረግ
  ምላሽ ውስጥ ተመልሶ የተላከ credential አይሰወርም።
- **የማሰናከያ ቻናሎች ከmiddleware ጋር (በንድፍ)፦** middlewareው
  prompt injectionን በራሱ የ`evaluatePromptInjection()` ጥሪ ይገመግማል፣ በcaller
  የሚቆጣጠር ምንም የማሰናከያ ዝርዝር ሳያስተላልፍ። `block` mode በcaller የሚቆጣጠሩ
  ማሰናከያዎች ሊያልፉት የማይችሉት አስገዳጅ ድንበር ነው፣ ይህም በውይይት ቤተሰብ routes
  ላይም ይሠራል
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))።
  `prompt-injection`ን ማሰናከል የregistryውን የደኅንነት ገደብ ብቻ ያስዘላል።

### ከpost-call በፊት ምላሽን የሚያዩ ደረጃዎች

streaming ባልሆነው መንገድ ላይ ቅደም ተከተሉ፦ memory extraction → built-in tool
execution → post-call guardrails → post-call block exit → semantic-cache store።

- **የማህደረ ትውስታ ማውጣት** እና **የመሳሪያ አፈጻጸም** የድህረ-ጥሪ ጥበቃዎች ምላሹን እንደገና ከመጻፋቸው ወይም ከማገዳቸው በፊት ያዩታል።
  ከ[#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) ጀምሮ፣
  `PII_RESPONSE_SANITIZATION` በርቶ ሲሆን የማህደረ ትውስታ
  ማውጣት የወጣውን ጽሑፍ በ`sanitizePII` በኩል ያስኬዳል
  (በዥረት እና ያለዥረት ሁነታዎች ሁለቱም)፤ ነገር ግን በኋላ
  በድህረ-ጥሪ የሚታገድ ምላሽ አሁንም ለማህደረ ትውስታ እና
  ለመሳሪያዎች ቀርቦ ይሆናል።
- **የትርጉም መሸጎጫው** ምላሹን ከድህረ-ጥሪ በኋላ ስለሚያከማች፣
  እንደገና የተጻፈውን ምላሽ ያከማቻል፤ የታገደ ምላሽ ደግሞ ፈጽሞ
  መሸጎጫ ውስጥ አይገባም። የመሸጎጫ ግቤቶች በእያንዳንዱ API ቁልፍ
  ይመደባሉ።

## ውቅር

አብሮገነብ የጥበቃ ሕጎቹ የሚያነቧቸው የአካባቢ ተለዋዋጮች፦

| ተለዋዋጭ                                 | የሚጠቀምበት                   | ውጤት                                                                               |
| ------------------------------------- | ------------------------- | --------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | ማወቂያውን ሙሉ በሙሉ ለማሰናከል `false` ያድርጉት።                                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | የማስገባት ፖሊሲ፦ `warn`፣ `block` ወይም `log`። የቆየው እሴት `redact` የማስገባት ጽሑፉን እንደገና አይጽፍም። |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | የማስገባት ጥበቃው ሁነታ፤ በተጨማሪም የአካባቢ ተለዋዋጮቹን **የሚሽር** የDB ባህሪ ጠቋሚ ነው (DB > ENV)።         |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` ውድቅ የሚያደርገው ዝቅተኛው የክብደት ደረጃ፦ `high` (ነባሪ)፣ `medium` ወይም `low`።       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | ለ`INPUT_SANITIZER_BLOCK_THRESHOLD` የቆየ ተለዋጭ ስም።                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` ሲሆን፣ በጥያቄው ውስጥ ያለው PII ይሰወራል (ከማስገባት ሁነታው ነጻ ነው)።                          |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | በምላሽ በኩል ያለውን የመሸፈኛ ባህሪ ይቆጣጠራል።                                                   |

የModality Bridge ጥበቃ ሕጎች በሂደት ጊዜ ውቅርን ከDB-የሚደገፈው የቅንብሮች
ማከማቻ (`getSettings()`) ያነባሉ፤ ከአካባቢ ተለዋዋጮች አይደለም። የVision ዋና ቁልፎች
`modalityBridgeVisionEnabled`፣ `modalityBridgeVisionMode`፣
`modalityBridgeVisionModel`፣ `modalityBridgeVisionTaskAware`፣
`modalityBridgeVisionPrompt`፣ `modalityBridgeVisionTimeout`፣
`modalityBridgeVisionMaxImages`፣ `modalityBridgeVisionMaxChars`፣
`modalityBridgeCacheEnabled`፣ `modalityBridgeCacheTtlMinutes` እና
`modalityBridgeCacheMaxEntries` ናቸው። የቆዩት
`visionBridge*` ቁልፎች በሰነድ የተገለጸው የአንድ-ዑደት ንባብ
ምትኬ ብቻ ሆነው ተቀባይነት አላቸው፤ የዳሽቦርድ ጽሁፎች ዋናዎቹን ቁልፎች ይጠቀማሉ። ነባሪዎቹ እና የምትኬ
ፈቺው `src/shared/constants/modalityBridgeDefaults.ts` ውስጥ ይገኛሉ፤ የቆዩ
ቋሚዎች ደግሞ `src/shared/constants/visionBridgeDefaults.ts` ውስጥ እንደተጠበቁ ናቸው።

Audio `modalityBridgeAudioEnabled`፣ `modalityBridgeAudioModel`፣
`modalityBridgeAudioTimeout` እና `modalityBridgeAudioMaxClips`ን፣ እንዲሁም የጋራ
`modalityBridgeCache*` ቅንብሮችን ይጠቀማል። እነዚህ
ቁልፎች ከModality Bridge ንድፍ ጋር የተዋወቁ ስለሆኑ Audio የቆየ-ቁልፍ ምትኬ የለውም።

Video `modalityBridgeVideoEnabled`፣ `modalityBridgeVideoAnalysisMode`፣
`modalityBridgeVideoModel`፣
`modalityBridgeVideoFrameCount`፣ `modalityBridgeVideoSamplingPolicy`፣
`modalityBridgeVideoMaxVideos` እና
`modalityBridgeVideoTimeout`ን፣ እንዲሁም የጋራ `modalityBridgeCache*` ቅንብሮችን ይጠቀማል።
FFmpeg/ffprobe አማራጭ የክወና
ጥገኞች ስለሆኑ እና የፍሬም መግለጫ መስጠት መዘግየትና የሞዴል ወጪ ስለሚጨምር፣ በነባሪነት ተሰናክሏል።

## ብጁ መከላከያዎች

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

ደረጃዎች፦

1. `BaseGuardrail`ን የሚያራዝም `src/lib/guardrails/myGuardrail.ts` ይፍጠሩ።
2. `preCall`ን እና/ወይም `postCall`ን ይተግብሩ።
3. በማስመጣት ጊዜ ይመዝግቡ (`registerDefaultGuardrails` ውስጥ ያክሉት) ወይም
   በአሂድ ጊዜ `guardrailRegistry.register(...)`ን ይጥሩ — መዝገቡ ተመሳሳይ መደበኛ የተደረገ ስም ያለውን
   ማንኛውንም ቀዳሚ መከላከያ ይተካል።
4. ሙከራዎችን በ`tests/unit/` ስር ያክሉ (ነባር ምሳሌዎች፦
   `tests/unit/guardrails-registry.test.ts`፣
   `tests/unit/prompt-injection-guard.test.ts`፣
   `tests/unit/guardrails/visionBridge.test.ts`)።

## ሙከራ

ከሚታወቅ ሁኔታ ለመጀመር በሙከራዎች መካከል `resetGuardrailsForTests()`ን ይጠቀሙ።
ባዶ መዝገብ ለመጀመር `{ registerDefaults: false }`ን ያስተላልፉ እና
በሙከራ ላይ ያሉትን መከላከያዎች ብቻ ይመዝግቡ። Vision Bridge የጥገኝነት
ማስገባትን (`deps.getSettings`፣ `deps.callVisionModel`) ይቀበላል፤ Audio Bridge ደግሞ
ለቅንብሮች፣ ችሎታዎች፣ የSTT ሞዴል ምርጫ፣ የምስክርነት መረጃ
ማረጋገጫዎች እና ጽሑፍ ማድረግ ተመሳሳይ የሙከራ መገናኛዎችን ያቀርባል። ስለዚህ ሙከራዎች ያለ DB
ወይም የአውታረ መረብ መዳረሻ ሁለቱንም ፍሰቶች ሊፈትሹ ይችላሉ።

## በተጨማሪ ይመልከቱ

- `src/lib/guardrails/` — ትግበራ
- `src/shared/utils/inputSanitizer.ts` — የጥያቄ ማስገባት ጥቃትን እና የPII መሸፈንን
  የሚያንቀሳቅስ የጋራ ፈላጊ
- `src/shared/constants/visionBridgeDefaults.ts` — የVision Bridge ነባሪዎች እና
  የግዳጅ-ድልድይ ሞዴል ዝርዝር
- `src/shared/constants/modalityBridgeDefaults.ts` — የጋራ የVision/Audio የአሂድ ጊዜ ነባሪዎች
- `docs/architecture/RESILIENCE_GUIDE.md` — ተደራራቢ ያልሆነ ንብርብር (የወረዳ መቋረጫ፣ የማቀዝቀዣ ጊዜያት)
- `docs/reference/ENVIRONMENT.md` — ሙሉ የenv var ማጣቀሻ

## የማስገባት-መከላከያ መስመር ሽፋን እና የቀይ-ቡድን ሙከራ (ደረጃ 8 · ብሎክ D)

የማስገባት-መከላከያው (`createInjectionGuard` / `withInjectionGuard`) የተጠቃሚ ጥያቄዎችን
የሚቀበሉ ሁሉንም መስመሮች ይሸፍናል። `INJECTION_GUARD_MODE`ን ያከብራል (ነባሪ `warn` = ምዝግብ ብቻ፤
`block` = HTTP 400 `SECURITY_001`ን ይመልሳል)።

| ዓይነት      | መስመሮች                                                                                                                                                | ነባሪ ሁነታ |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| ጽሑፍ (ነባር) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn    |
| አመንጪ      | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn    |
| ውሂብ       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn    |

የጽሑፍ ማውጣት (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`ን ይሸፍናል።

**የቀይ-ቡድን ሙከራ (በየሌሊቱ፣ `nightly-llm-security.yml`)፦** promptfoo እያንዳንዱ መስመር
በ`INJECTION_GUARD_MODE=block` ውስጥ ያለውን የOWASP-LLM ኮርፐስ እንደሚያግድ ያረጋግጣል፤ garak ምርመራዎችን ያሂዳል (ሚስጥር ከሌለ ይዘላል)።
`moderations` ለወጥነት ተካትቷል። የማገጃ ሁነታ አስገዳጅ ወሰን ነው፦ `evaluatePromptInjection()`
መካከለኛ ሶፍትዌሩ የሚያስተላልፈውን የእያንዳንዱ-ጥያቄ ማሰናከያ ዝርዝር ችላ ስለሚል፣ `disabledGuardrails`
መስመርን ከእሱ ነፃ **አያደርገውም** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))።

የሌሊት የስራ ፍሰቱ (`.github/workflows/nightly-llm-security.yml`፣ cron + በእጅ
ማስነሳት) ሁለት ስራዎች አሉት፦

- **`promptfoo-guard` (አጋጅ)** — `promptfoo eval -c promptfooconfig.yaml`ን
  ከ`INJECTION_GUARD_MODE=block` ጋር ያሂዳል። እያንዳንዱ የጥቃት ሙከራ (ለምሳሌ፦ "ሁሉንም
  ቀዳሚ መመሪያዎች ችላ በል…", የDAN-ዓይነት ማምለጫዎች) ምላሹ
  `error.code === "SECURITY_001"`ን እንደሚይዝ፣ ማለትም መከላከያው ጥያቄውን በእርግጥ ውድቅ እንዳደረገው ያረጋግጣል።
- **`garak` (አማካሪ)** — garakን `--probes promptinject,dan,leakreplay`
  በአካባቢያዊ OmniRoute አገልግሎት (`http://localhost:20128/v1`) ላይ ያሂዳል። በአቅራቢ
  ሚስጥር (`PROMPTFOO_PROVIDER_KEY`) የሚወሰን ነው፤ ሚስጥሩ ከሌለ ያለችግር ይዘላል እና
  `|| true` ቅጥያ ተጨምሮበታል፣ ስለዚህ CIን ሳያሳክት ሪፖርት ያደርጋል።

የመከላከያ ረዳቱ (`createInjectionGuard` / `withInjectionGuard`) ሽፋን
ጥያቄ የያዘ እያንዳንዱን `/v1` መስመር ያካትታል፤ የጥያቄ ጽሑፉ በ
`src/shared/utils/inputSanitizer.ts` ውስጥ ባለው `extractMessageContents()` አማካኝነት ከ
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ይወሰዳል።
