# Guardrails (ខ្មែរ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **ប្រភពយោងផ្លូវការ:** `src/lib/guardrails/`
> **បានធ្វើបច្ចុប្បន្នភាពចុងក្រោយ:** 2026-10-17 — v3.8.52 (បានបន្ថែម [វិសាលភាព និងដែនកំណត់](#coverage-and-limits):
> ផ្លូវ និងលំហូរឆ្លើយតបណាខ្លះដែល hooks អាចឈានដល់, headers សម្រាប់បិទដែលបានបញ្ចូលគ្នា (#16412), របៀបទប់ស្កាត់ការចាក់បញ្ចូល
> ជាព្រំដែនចាំបាច់ (#16413), និងអ្វីខ្លះដែលឃើញការឆ្លើយតបមុនដំណាក់កាល post-call)

Guardrails អនុវត្តការការពារសុវត្ថិភាព គោលការណ៍ និងការបម្លែងមាតិកា នៅចំណុចប្រទាក់
រវាង OmniRoute និងអ្នកផ្តល់សេវាខាងលើ។ Guardrail នីមួយៗអាចត្រួតពិនិត្យ (និង
ជាជម្រើស អាចបដិសេធ បម្លែង ឬកំណត់ចំណារពន្យល់លើ) payloads នៃសំណើ (`preCall`) និង
ការឆ្លើយតបពីខាងលើ (`postCall`)។

ប្រព័ន្ធនេះមានលក្ខណៈ **fail-open**៖ ប្រសិនបើ guardrail បង្ក exception ខណៈពេលប្រតិបត្តិការ registry
នឹងកត់ត្រាកំហុស ហើយបន្តទៅ guardrail បន្ទាប់ ជំនួសឱ្យការធ្វើឱ្យសំណើ
បរាជ័យ។ ការទប់ស្កាត់គឺជាការសម្រេចចិត្តច្បាស់លាស់ (`block: true`) មិនមែនកើតឡើងដោយចៃដន្យទេ។
ករណីលើកលែងតែមួយគត់គឺសំណើដែលត្រូវបានបោះបង់៖ នៅពេល `signal` របស់អ្នកហៅត្រូវបានបោះបង់
guardrail ដែលបង្ក exception នឹងធ្វើឱ្យការដំណើរការ hook ត្រូវបានបដិសេធ ជំនួសឱ្យការរំលងវា។

Hooks **មិន**ដំណើរការលើគ្រប់ route ឬគ្រប់ការឆ្លើយតបទេ។ សូមអាន
[វិសាលភាព និងដែនកំណត់](#coverage-and-limits) មុនពេលពឹងផ្អែកលើ guardrail ជា
យន្តការគ្រប់គ្រងសុវត្ថិភាព។

## Guardrails ដែលភ្ជាប់មកជាស្រេច

Registry ផ្ទុក guardrails ចំនួនប្រាំមួយដោយស្វ័យប្រវត្តិតាមលំដាប់អាទិភាព នៅពេល import
(សូមមើល `registry.ts` → `registerDefaultGuardrails()`):

| អាទិភាព | ឈ្មោះ               | ដំណាក់កាល      | ឯកសារ                 |
| ------- | ------------------- | -------------- | --------------------- |
| `5`     | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`     | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`     | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`    | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`    | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`    | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

លេខអាទិភាពកាន់តែទាប នឹងដំណើរការ **មុន**។

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

ម៉ូដែលមូលដ្ឋាន GLM 5.3 និង `glm-5.3-{low,high,max}` មាន metadata ក្នុង
registry/spec ជាក់លាក់ថា `supportsVision:false`។ វ៉ារ្យ៉ង់ GLM 5.3 Flash
នៅតែជាម៉ូដែលដែលគាំទ្រ vision ដោយផ្ទាល់។ Route `/v1/messages` របស់ Claude Code ចូលក្នុង
ខ្សែសង្វាក់ guardrail រួម `handleChat` នៅដំណាក់កាល pre-call **មុន** ការបម្លែង
ពី Claude ទៅ OpenAI; រូបភាពក្នុងលទ្ធផលឧបករណ៍ `Read` ដែលដាក់ជាប់ខាងក្នុង ត្រូវតែបានពណ៌នា ឬដោះស្រាយ
មុនពេលការបម្លែងនោះលើកពួកវាទៅជាមាតិកា OpenAI `image_url` (#17069)។

វាស្ទាក់ចាប់សំណើដែលមានរូបភាព និងកំណត់គោលដៅទៅកាន់ **ម៉ូដែលដែលមិនគាំទ្រ vision** ហើយបន្ទាប់មក
ប្តូរទិសសំណើទាំងមូលទៅម៉ូដែលដែលគាំទ្រ vision ឬជំនួសផ្នែករូបភាព
ដោយការពណ៌នាជាអត្ថបទដែលបង្កើតដោយម៉ូដែល vision ដែលអាចកំណត់រចនាសម្ព័ន្ធបាន មុន
ការហៅទៅខាងលើ។ វាអនុញ្ញាតឱ្យអ្នកផ្តល់សេវាដែលគាំទ្រតែអត្ថបទ អាចដោះស្រាយ
payloads ពហុមធ្យោបាយបានដោយរលូន។

លំហូរ៖

1. រំលង ប្រសិនបើម៉ូដែលគោលដៅគាំទ្រ vision រួចហើយ (លុះត្រាតែវាមាននៅក្នុង
   បញ្ជីបង្ខំឱ្យប្រើ bridge `isVisionBridgeForcedModel`)។
2. ស្រង់យកផ្នែករូបភាពតាមរយៈ `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) ដែលផ្ទេរភារកិច្ចទៅ **កម្មវិធីរកឃើញមេឌៀរួម**
   `detectMediaParts()` ក្នុង `open-sse/utils/mediaParts.ts` — ជា
   ប្រភពយោងផ្លូវការតែមួយដែលប្រើរួមគ្នាជាមួយតម្រងភាពឆបគ្នា combo។
   ការស្រង់យកប្រើ allowlist សម្រាប់តែទម្រង់ដែល `replaceImageParts` អាចបញ្ចូល
   ត្រឡប់ទៅវិញបាន (កិច្ចសន្យា extract↔replace)៖ OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, និង Responses
   API `input_image`។ រូបភាពដែលត្រូវគ្នា និងដាក់ជាប់ខាងក្នុង `tool_result.content` របស់ Claude Code
   និងលទ្ធផលឧបករណ៍របស់ Responses ក៏ត្រូវបានស្រង់យក និង
   ជំនួសនៅ path ដើមរបស់វាផងដែរ; ទម្រង់ដែលមានតែសូចនាករ គឺជាវត្ថុធាតុសម្រាប់ combo-filter
   ហើយមិនត្រូវបានស្រង់យកទេ។
   រំលង ប្រសិនបើរកមិនឃើញ។
3. ដោះស្រាយការកំណត់ runtime តាមរយៈ `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`)៖ keys ការកំណត់ `modalityBridge*`
   ថ្មីមានអាទិភាព; keys `visionBridge*` ចាស់នៅតែជា **fallback សម្រាប់មួយវដ្ត**
   (ចន្លោះពេល rollback)។ រំលងមុនពេលរុករកមេឌៀណាមួយ នៅពេល
   bridge ត្រូវបានបិទ។
4. កម្មវិធីជ្រើសរើសរបៀប (`modalityBridgeVisionMode`, សូមមើលតារាងខាងក្រោម) សម្រេចថា
   ត្រូវប្តូរទិស ឬពណ៌នា។ ការប្តូរទិសត្រឡប់ `modifiedPayload` ដែលមានតែ `model`
   ត្រូវបានប្តូរ រួមជាមួយ meta `{ rerouted, fromModel, toModel, imagesKept }`។
5. ផ្លូវពណ៌នា៖ កំណត់ចំនួនរូបភាពអតិបរមាត្រឹម `maxImages`, បង្កើត prompt ដែលសមស្របនឹងភារកិច្ច,
   ពិនិត្យ describe cache, ហៅម៉ូដែល vision **ស្របពេលគ្នា**
   (`Promise.allSettled`) ហើយបញ្ចូលផ្នែកអត្ថបទ `[Image N]: <description>` ជំនួស
   រូបភាពទាំងនោះ។ ការពណ៌នាដែលបរាជ័យផ្តល់លទ្ធផល `null`៖ រូបភាពដើមត្រូវបានរក្សាទុកសម្រាប់
   គោលដៅដែលមិនស្គាល់/គាំទ្រ vision (#4012) ប៉ុន្តែ **គោលដៅផ្ទាល់ដែលបានបញ្ជាក់ថាគាំទ្រតែអត្ថបទ**
   ឬ combo ដែលគ្មាន vision នឹងទទួលបានអត្ថបទជំនួសជាក់លាក់
   `(unavailable — no vision-capable provider connected)` សម្រាប់
   រាល់រូបភាពដែលមិនបានពណ៌នា រួមទាំងការបរាជ័យដោយផ្នែក និងរូបភាពដែលលើសពី
   ដែនកំណត់ការហៅសម្រាប់ពណ៌នា (#17069)។ Fallback សម្រាប់ការពណ៌នា combo ដែលបរាជ័យទាំងអស់
   ដែលមានស្រាប់ នៅតែត្រូវបានរក្សាទុក (#8430)។
6. ត្រឡប់ `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`)។

#### កម្មវិធីជ្រើសរើសរបៀប (`modalityBridgeVisionMode`)

| របៀប       | លំនាំដើម | ឥរិយាបថ                                                                                                                                                                                                                                                                                        |
| ---------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | ហេរីស្ទិកចាស់ដែលមិនត្រូវបានកែប្រែ (#6640/#7204)៖ ម៉ូដែលដែលមិនមែនជា combo/`auto/` ត្រូវបានប្ដូរទិសទៅម៉ូដែល vision ល្អបំផុត លុះត្រាតែម៉ូដែលដើមមានព័ត៌មានសម្គាល់អត្តសញ្ញាណដែលអាចប្រើបានរួចហើយ (ក្នុងករណីនោះ វានឹងធ្វើការពិពណ៌នា)។ គោលដៅ combo តែងតែធ្វើការពិពណ៌នា។                                |
| `describe` |          | តែងតែធ្វើការពិពណ៌នា — ប្លុកប្ដូរទិសត្រូវបានរំលងទាំងស្រុង ហើយម៉ូដែលដែលអ្នកប្រើបានជ្រើសតែងតែជាអ្នកឆ្លើយតប។                                                                                                                                                                                       |
| `reroute`  |          | បង្ខំឱ្យប្ដូរទិស៖ ការការពារដែលរក្សាម៉ូដែលមានព័ត៌មានសម្គាល់អត្តសញ្ញាណត្រូវបានរំលង។ ការការពារព័ត៌មានសម្គាល់អត្តសញ្ញាណរបស់**គោលដៅ**ប្ដូរទិសនៅតែអនុវត្ត — នៅពេលគ្មានគោលដៅ vision ដែលអាចប្រើបាន bridge នឹងទប់ស្កាត់ដោយបង្ហាញកំហុសច្បាស់លាស់ ជំនួសឱ្យការពិពណ៌នា ឬផ្ញើរូបភាពឆៅទៅគោលដៅសម្រាប់តែអត្ថបទ។ |

របៀបដែលបានបង្ខំ នឹងបញ្ចប់ដំណើរការ **មុនពេល** ហេរីស្ទិក auto ដំណើរការ។ ឥរិយាបថ `auto`
គឺដូចគ្នាគ្រប់ byte ទៅនឹង guardrail មុន PR-1។

#### វិសាលភាព API key (`visionBridgeKeyScope.ts`)

នៅពេល API key របស់អ្នកហៅដាក់កម្រិតលើ `allowedConnections` ក្រុមកូតា
(`allowedQuotas`) ឬម៉ូដែល (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) bridge នឹងជ្រើសតែ
ម៉ូដែលប្ដូរទិស និងពិពណ៌នាដែល key នោះអាចប្រើបាន នៅលើ connection ដែល key នោះអាច
ប្រើបាន។ បន្ទាប់មក ការហៅពិពណ៌នាតែងតែឆ្លងកាត់ OmniRoute self-loop ជាមួយ
header `x-omniroute-self-loop-key-id` ដើម្បីឱ្យសំណើ chat ដែលទទួល
អនុវត្តគោលការណ៍ connection និងម៉ូដែលរបស់ key នោះម្ដងទៀត។ `enforceApiKeyPolicy()`
ទទួលស្គាល់ header នោះតែនៅពេលប្រើរួមជាមួយ self-loop bearer ប៉ុណ្ណោះ ដូច្នេះវាអាច
ត្រឹមតែបង្រួមសិទ្ធិចូលប្រើ ហើយ id ដែលមិនអាចដោះស្រាយបាននឹងត្រូវបដិសេធ។

ប្រសិនបើគ្មានម៉ូដែល vision ណាមួយត្រូវបានអនុញ្ញាតសម្រាប់ key នោះទេ
**គោលដៅដែលបានបញ្ជាក់ថាជា text-only** នឹងបដិសេធសំណើរូបភាពនៅក្នុងប្រព័ន្ធ
ដោយបង្ហាញ HTTP 400 ច្បាស់លាស់ ជំនួសឱ្យការបញ្ជូន byte រូបភាពទៅ upstream ដែលមិនអាចដំណើរការវាបាន
(#17069)។ សម្រាប់គោលដៅដែលមានសមត្ថភាព vision មិនទាន់ដឹង ឬមានស្រាប់ដោយផ្ទាល់
ផ្លូវពិពណ៌នានឹងរក្សាឥរិយាបថ fail-open ពីមុនរបស់វា
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`)។
សំណើដែលគ្មាន key និង key ដែលគ្មានការរឹតត្បិតទាំងនេះ នឹងដំណើរការដូចមុនទាំងស្រុង។

#### prompt ពិពណ៌នាដែលយល់ដឹងអំពីកិច្ចការ (`modalityBridgeVisionTaskAware`)

លំនាំដើមគឺ **true**។ `composeVisionPrompt()` (`visionBridgeHelpers.ts`) បន្ថែម
អត្ថបទនៃ **សារចុងក្រោយរបស់អ្នកប្រើ** (កាត់ត្រឹម 500 តួអក្សរ) ទៅ prompt
ពិពណ៌នាមូលដ្ឋាន ដោយតម្រង់ការពិពណ៌នាឱ្យផ្ដោតលើអ្វីដែលអ្នកប្រើបានសួរពិតប្រាកដ
(លំនាំ codex-vision-proxy) និងស្នើឱ្យម៉ូដែល vision ចម្លងអត្ថបទដែលអាចមើលឃើញ។
នៅពេលបិទ flag នេះ — ឬគ្មានអត្ថបទរបស់អ្នកប្រើ — prompt មូលដ្ឋានត្រូវបានប្រើដោយមិនមានការផ្លាស់ប្ដូរ។

សំណើដែលឆបគ្នាជាមួយ OpenAI ផ្ទាល់របស់ describe self-loop (`callVisionModelSingle()`
នៅក្នុង `visionBridgeHelpers.ts`) តែងតែស្នើ `image_url.detail: "high"` —
ដោយគ្មានលក្ខខណ្ឌ សម្រាប់អ្នកហៅ/provider គ្រប់រូប និងមិនអាស្រ័យលើសញ្ញាណាមួយពី client។
ការយកគំរូដែលមានកម្រិតលម្អិតទាបធ្វើឱ្យភាពត្រឹមត្រូវនៃ OCR ថយចុះ សម្រាប់កិច្ចការចម្លងអត្ថបទ
ដែល prompt នេះស្នើដោយផ្ទាល់ ដូច្នេះការហៅពិពណ៌នាតែងតែស្នើកម្រិតលម្អិតខ្ពស់
ដោយមិនគិតពីកម្រិតលម្អិតដែលសំណើ inbound ដើមបានប្រើ។ វាប៉ះពាល់តែទៅលើ
body នៃសំណើពិពណ៌នាខាងក្នុងប៉ុណ្ណោះ វាមិនផ្លាស់ប្ដូររបៀបដែល OmniRoute បញ្ជូនបន្ត
`image_url.detail` របស់អ្នកហៅនៅលើសំណើចម្បងទេ — លំនាំដើមនោះត្រូវបានអនុវត្ត
ដោយឡែក និងសម្រាប់តែ client OpenCode ដែលបានរកឃើញប៉ុណ្ណោះ នៅក្នុង
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`)។ សាខា
wire-format របស់ Anthropic ក្នុង describe self-loop មិនមានវាល `detail`
ហើយមិនត្រូវបានប៉ះពាល់ដោយលំនាំដើមទាំងពីរឡើយ។

#### ដែនកំណត់ output ពិពណ៌នា (`modalityBridgeVisionMaxChars`)

| Key                            | លំនាំដើម | ជួរ             |
| ------------------------------ | -------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ឬ 100–50000 |

`0` (លំនាំដើម) មានន័យថា **គ្មានដែនកំណត់** — ការពិពណ៌នាដែលត្រឡប់ដោយ
`callVisionModel()` ត្រូវបានបញ្ជូនបន្តដោយមិនមានការកែប្រែ ដើម្បីរក្សាឥរិយាបថ
ដែលមានស្រាប់។ តម្លៃណាមួយក្នុងជួរ 100–50000 នឹងកាត់ការពិពណ៌នា ហើយបន្ថែម
បច្ច័យ `…` មុនពេលវាត្រូវបានបញ្ចូលត្រឡប់ជា `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` នៅក្នុង `src/lib/guardrails/visionBridge.ts`)។
បង្កើនតម្លៃនេះសម្រាប់កិច្ចការ OCR ដែលត្រូវការព័ត៌មានលម្អិតច្រើន ដែលម៉ូដែល downstream
ត្រូវការការចម្លងអត្ថបទពេញលេញ។ បន្ថយវាដើម្បីកំណត់ការប្រើប្រាស់ token លើម៉ូដែល
vision ដែលបង្កើតអត្ថបទច្រើន។ វាល dashboard ស្ថិតនៅក្នុងផ្ទាំង Advanced នៃ tab Vision
(`modality-bridge-max-chars` នៅក្នុង `ModalityBridgeVisionTab.tsx`) ហើយកែតម្លៃណាមួយ
ចន្លោះពី 1 ដល់ 99 ឡើងទៅដល់កម្រិតអប្បបរមា 100 ខណៈពេលរក្សាតម្លៃ `0`
ដែលបានកំណត់ជាក់លាក់ដោយមិនប៉ះពាល់ — `0` គឺជាតម្លៃ Zod ត្រឹមត្រូវដោយខ្លួនវា
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) មិនមែនគ្រាន់តែជា
លំនាំដើម "មិនបានកំណត់" ប៉ុណ្ណោះទេ។

#### cache ពិពណ៌នា (`modalityBridge/bridgeCache.ts`)

cache LRU + TTL ក្នុង memory សម្រាប់ output ពិពណ៌នា ដែលត្រូវបានចែករំលែកទូទាំង process។
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` ជាមួយ
ការរៀបចំ framing ដោយបុព្វបទប្រវែង (គ្មានការប៉ះទង្គិចព្រំដែនរវាងវាល)។ សមាសភាគម៉ូដែល
គឺជាម៉ូដែល bridge ដែលបាន**កំណត់រចនាសម្ព័ន្ធ** មិនមែនម៉ូដែលដែលបានឆ្លើយតបពិតប្រាកដទេ —
`callVisionModel` អាចប្រើ fallback ខាងក្នុង ហើយការកំណត់ key សម្រាប់ការសាកល្បងនីមួយៗ
នឹងបំបែក cache ជាច្រើនផ្នែក។ ការពិពណ៌នាដែលបរាជ័យមិនត្រូវបានរក្សាទុកក្នុង cache ទេ។ ការកំណត់៖

| Key                             | លំនាំដើម | ជួរ     |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### ការធ្វើឱ្យរូបភាពពីចម្ងាយមានលក្ខណៈស្តង់ដារ (ការហៅ describe ត្រឡប់មកខ្លួនឯង/ការទាញយក base64)

នៅពេល bridge ទាញយករូបភាព **ពីចម្ងាយ** ដោយខ្លួនឯង — ការហៅ Anthropic describe
ត្រឡប់មកខ្លួនឯង និងការបម្លែង base64 តាមទម្រង់ claude-wire
(`ensureBase64ImagesForClaudeWire`) ដែលទាំងពីរធ្វើតាមរយៈ
`fetchRemoteImageAsDataUri()` នៅក្នុង `visionBridgeHelpers.ts` — URI ទិន្នន័យដែលទទួលបាន
ត្រូវបានបញ្ជូនឆ្លងកាត់ `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) មុនពេលបង្កប់ទៅក្នុងសំណើទៅកាន់ម៉ូដែល vision។
រូបភាពដែលមានទំហំធំពេកត្រូវបានបន្ថយមាត្រដ្ឋានឱ្យមាន **ជ្រុងវែង 2048px** (ត្រូវគ្នា
នឹងកម្រិតប្តូរទំហំដែល OpenAI/Anthropic អនុវត្តនៅផ្នែក server រួចហើយ) ដែលកាត់បន្ថយ
ចំនួនបៃ និង latency នៃការបង្ហោះ ដោយមិនផ្លាស់ប្តូរអ្វីដែលម៉ូដែល vision មើលឃើញ។
ការប្តូរទំហំប្រើ `sharp` ដែលត្រូវបានផ្ទុកតាមរយៈ dynamic import៖ នៅលើ platform ដែល
native binary របស់វាមិនអាចផ្ទុកបាន `normalizeDataUri()` **មិនបោះ exception ដាច់ខាត**
— វាត្រឡប់ទៅការបញ្ជូនបៃដើមដោយគ្មានការកែប្រែ ដូច្នេះផ្លូវ describe/ការបម្លែង base64
នៅតែដំណើរការជានិច្ច។ បៃដែលមិនមែនជារូបភាព (ការទាញយកដែលមិនបានត្រឡប់
រូបភាពដែលអាច decode បាន) ក៏ត្រូវបានបញ្ជូនបន្តដោយមិនកែប្រែផងដែរ។ ការធ្វើឱ្យមាន
លក្ខណៈស្តង់ដារនេះត្រូវបានកំណត់វិសាលភាពត្រឹមរូបភាពដែល bridge ទាញយកសម្រាប់
ការហៅត្រឡប់មកខ្លួនឯងរបស់វាប៉ុណ្ណោះ — វាមិនត្រូវបានអនុវត្តលើ payload passthrough
ឆៅរបស់អ្នកហៅឡើយ ដោយស្របតាមគោលការណ៍កែប្រែតែនៅពេលជ្រើសរើសចូល
(Hard Rule #20)។

#### Schema នៃការកំណត់ + ការផ្ទេរ

Key `modalityBridge*` ថ្មីត្រូវបានធ្វើ validation ដោយ Zod នៅក្នុង `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`)៖ `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, ក្រុម key ទាំងបី `modalityBridgeCache*` និងក្រុម
`modalityBridgeAudio*` ដែល Audio Bridge ប្រើ។ ការផ្ទេរ
`141_modality_bridge_settings.sql` ចម្លងតម្លៃ `visionBridge*` ចាស់ដែលមានស្រាប់
ទៅកាន់ key ថ្មីដែលត្រូវគ្នា (មានលក្ខណៈ idempotent និងមិនសរសេរជាន់លើតម្លៃ
`modalityBridge*` ដែល operator បានកំណត់ឡើយ)។ Key ចាស់នៅតែត្រូវបានទទួលយក
ជា fallback សម្រាប់ការអាន ក្នុងរយៈពេលមួយវដ្ត release។

#### Header តម្លាភាព + ស្ថិតិ

Response ដែលត្រូវបានបម្លែងតាម describe មាន
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(បង្កើតដោយ `buildModalityBridgeHeader()` នៅក្នុង `modalityBridge/bridgeStats.ts`
និងបោះត្រាដោយ `withModalityBridgeHeader()` នៅក្នុង `src/sse/handlers/chatHelpers.ts`)។
សំណើដែលត្រូវបានប្តូរផ្លូវ **មិនមាន** header ទេ — payload មិនត្រូវបានប៉ះពាល់ ហើយ
ការប្តូរម៉ូដែលអាចមើលឃើញរួចហើយនៅក្នុង field `model` នៃ response body។

`GET /api/modality-bridge/stats` (ប្រើការផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវសម្រាប់ការគ្រប់គ្រង
នៅកម្រិតដូចគ្នានឹង `GET /api/settings`) ត្រឡប់ counter ក្នុង memory តាម modality
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` សម្រាប់ `vision`, `audio` និង
`video`។ `averageLatencyMs` ប្រើ `latencySamples` ជាភាគបែង មិនមែន attempts
ទាំងអស់ទេ។ ប្រតិបត្តិការដែលគ្មានទិន្នន័យពេលវេលា មិនបង្កើត sample សូន្យមិល្លីវិនាទី
ក្លែងក្លាយឡើយ។ `bridged` នៅតែជា alias ដែលរក្សាភាពត្រូវគ្នាជាមួយកំណែមុន
សម្រាប់ការបម្លែងដែលជោគជ័យ។ Attempts ដែលបរាជ័យមិនបង្កើនតម្លៃវាទេ។
តាមការរចនា Counter ត្រូវបានកំណត់ឡើងវិញនៅពេល process ចាប់ផ្តើមឡើងវិញ
(វាជា telemetry មិនមែនជា accounting ទេ)។

#### ការកំណត់រចនាសម្ព័ន្ធ Dashboard

ទំព័រ dashboard ដាច់ដោយឡែកគឺ
`/dashboard/settings/modality-bridge`។ Tab `Vision`, `Audio` និង `Video` ដែលអាច
ចូលប្រើដោយផ្ទាល់តាម URL រក្សាទុក query parameters ខណៈពេលប្តូរតម្លៃ `tab`។
Tab Vision ផ្តល់ជម្រើសបើកដំណើរការ mode ការជ្រើសរើសម៉ូដែល (រួមទាំងតម្លៃលំនាំដើម
ដោយស្វ័យប្រវត្តិ) ការបង្កើត prompt ដែលយល់ដឹងអំពី task កម្រិត timeout/រូបភាព/
ប្រវែងការពិពណ៌នា/cache កម្រិតខ្ពស់ counter ពេលកំពុងដំណើរការ និងសំណើគំរូ
ដែលមានការការពារ។ Tab Audio ក៏ដំណើរការផងដែរ៖ វាផ្តល់ជម្រើសបើកដំណើរការ
ឧបករណ៍ជ្រើសរើសម៉ូដែលសម្រាប់តែ STT ជាមួយ Auto កម្រិត timeout/ប្រវែងអតិបរមា
នៃ clip counter សំឡេង និងការធ្វើតេស្តគំរូ `input_audio`។ Tab Video អាចប្រើប្រាស់បាន៖
វារាយការណ៍ស្ថានភាព runtime របស់ FFmpeg/ffprobe — ជាស្ថានភាព UI ជាក់លាក់មួយ
ក្នុងចំណោមបួន (`unknown` ខណៈពេល probe កំពុងដំណើរការ ឬមិនអាចបញ្ចប់បាន,
`restricted` នៅលើ dashboard host ដែលមិនមែនជា loopback ហើយ probe ត្រូវបានរំលង
នៅផ្នែក client, `unavailable` បន្ទាប់ពីបាន probe ហើយបញ្ជាក់ថាមិនមាន ឬ `available`
ជាមួយ version របស់ FFmpeg/ffprobe) — រក្សាទុកកម្រិត enable/model/frame/video/timeout,
ច្រោះឧបករណ៍ជ្រើសរើសម៉ូដែលឱ្យបង្ហាញតែម៉ូដែលដែលគាំទ្រ vision និងបង្ហាញ counter
វីដេអូ។

Card Vision Bridge ចាស់នៅក្រោមការកំណត់ AI គឺជាតំណសម្រាប់ភាពត្រូវគ្នាទៅកាន់
ទំព័រថ្មី។ វាលែងកាន់កាប់ច្បាប់ចម្លងទីពីរនៃ form ទៀតហើយ។ Media Providers ក៏ភ្ជាប់
workflow Image-to-Text និង Speech-to-Text ទៅកាន់ tab Modality Bridge ដែលត្រូវគ្នា
ដោយមិនដក playground Speech-to-Text ដែលមានស្រាប់ចេញឡើយ។

**ការរំលងការអនុញ្ញាតសម្រាប់ self-loop៖** នៅពេលការហៅ describe ត្រូវបានបញ្ជូនតាម
self-loop `/v1` ផ្ទាល់របស់ OmniRoute (ម៉ូដែលពី provider មិនស្តង់ដារ) សំណើរងផ្ញើ
`x-omniroute-admission-bypass: internal` ហើយត្រូវបានផ្ទៀងផ្ទាត់ភាពត្រឹមត្រូវដោយ
credential self-loop ដែលបាន resolve — sentinel `sk_omniroute` មូលដ្ឋាននៅក្នុង
local mode ឬ env key `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` ដែល operator
បានកំណត់ (#1350) ដើម្បីឱ្យ deployment ដែលមាន `REQUIRE_API_KEY=true` នៅតែអាច
ដំណើរការការហៅ describe បាន។ Bypass ត្រូវបានទទួលយកសម្រាប់តែ credential ជាក់លាក់
ទាំងនោះប៉ុណ្ណោះ ដូច្នេះ client ខាងក្រៅមិនអាចប្រើ header ដើម្បីរំលងការអនុញ្ញាតបានទេ។

តម្លៃលំនាំដើមចាស់ស្ថិតនៅក្នុង `src/shared/constants/visionBridgeDefaults.ts`។
តម្លៃលំនាំដើមថ្មីសម្រាប់ mode/task-aware/cache និង settings resolver ស្ថិតនៅក្នុង
`src/shared/constants/modalityBridgeDefaults.ts`។ Guardrail បង្ហាញជម្រើស constructor
`deps` ដើម្បីឱ្យការធ្វើតេស្តអាច inject implementation ក្លែងក្លាយរបស់ `getSettings`
និង `callVisionModel`។

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

ស្ទាក់ចាប់សំណើ chat ដែលមានសំឡេង មុនពេលសំណើទាំងនោះទៅដល់ target ដែលមិនត្រូវបាន
ដឹងថាគាំទ្រ audio input។ វាមិនប្តូរផ្លូវសំណើ chat ឡើយ៖ ផ្នែកសំឡេងត្រូវបានបម្លែងជា
អត្ថបទតាមរយៈ endpoint multipart ដែលត្រូវគ្នាជាមួយ OpenAI ដែលមានស្រាប់ ហើយ
ម៉ូដែល chat ដែលបានជ្រើសរើសបន្តដំណើរការជាមួយ transcript ជាអត្ថបទ។

លំហូរ៖

1. ដោះស្រាយ `supportsAudio` តាមរយៈ `getResolvedModelCapabilities()`។ ទិន្នន័យមេតារបស់
   provider-registry ដែលបានកំណត់យ៉ាងច្បាស់លាស់មានអាទិភាព បន្ទាប់មកគឺទិន្នន័យមេតារបស់ម៉ូដែលឋិតិវន្ត ហើយបន្ទាប់មកគឺ
   `modalities_input` ដែលបានធ្វើសមកាលកម្ម។ បញ្ជី input ដែលបានប្រកាសដោយគ្មាន `audio` គឺ `false`;
   ប្រសិនបើគ្មានភស្តុតាងអំពីសមត្ថភាពទេ នោះតម្លៃនៅតែជា `null`។ ទាំង `false` និង `null` បើកដំណើរការ
   bridge បែបប្រុងប្រយ័ត្ន ខណៈដែល `true` រំលងវា។
2. ដោះស្រាយការកំណត់ `modalityBridgeAudio*` និងស្រង់ផ្នែកអូឌីយ៉ូកម្រិតកំពូល
   ដែលអាច splice បានពីសារនីមួយៗ តាមរយៈឧបករណ៍រកឃើញរួម `detectMediaParts()`។
   ទម្រង់ wire ដែលគាំទ្រគឺ OpenAI `input_audio`, `audio_url` និង
   `source.media_type: "audio/*"`។ អូឌីយ៉ូដែលដាក់ជាន់ខាងក្នុងត្រូវបានរកឃើញសម្រាប់ការកំណត់ផ្លូវ ប៉ុន្តែមិនត្រូវបាន
   ដកចេញដោយ splice path ទេ។ ការងារត្រូវបានកំណត់អតិបរមាដោយ `modalityBridgeAudioMaxClips`;
   ផ្នែកបន្ទាប់ៗនៅតែមិនត្រូវបានកែប្រែ។
3. គោរព `provider/model` ដែលបានកំណត់រចនាសម្ព័ន្ធ ឬអនុញ្ញាតឱ្យ `selectAudioBridgeModel()` ដើរឆ្លងកាត់
   `AUDIO_TRANSCRIPTION_PROVIDERS` តាមលំដាប់កាតាឡុកដែលមានស្ថិរភាព ហើយជ្រើសរើសម៉ូដែលដំបូង
   ដែលមានព័ត៌មានសម្ងាត់ provider សកម្ម និងអាចប្រើបាន។
4. `callAudioTranscription()` បម្លែងអូឌីយ៉ូ base64/data-URI ទៅជា multipart
   `file` ឬទាញយក `audio_url` ពីចម្ងាយតាមរយៈរបាំង outbound សម្រាប់សាធារណៈតែប៉ុណ្ណោះ
   ដែលមាន DNS pinning និងដែនកំណត់ 25 MB។ បន្ទាប់មក វា POST ឯកសារ និងម៉ូដែលដែលបានជ្រើសរើស
   ទៅកាន់ self-loop មូលដ្ឋាន `/v1/audio/transcriptions` ដោយផ្ទៀងផ្ទាត់អត្តសញ្ញាណជាមួយ
   `resolveSelfLoopBearer()`។ route ចម្លងសំឡេងដែលមានស្រាប់ អនុវត្តការស្វែងរក
   ព័ត៌មានសម្ងាត់ធម្មតា ការគ្រប់គ្រង cooldown/rate-limit និងការបញ្ជូនទៅ provider។
5. ការហៅដែលជោគជ័យជំនួសផ្នែករបស់វាដោយ `[Audio N]: <transcript>`។ ការហៅ
   ដំណើរការជាមួយ `Promise.allSettled`: ការបរាជ័យនីមួយៗរក្សាទុកផ្នែកអូឌីយ៉ូដើមនោះ
   (#4012 contract)។ ប្រសិនបើការហៅទាំងអស់បរាជ័យ ហើយគោលដៅត្រូវបានបញ្ជាក់ថា
   `supportsAudio === false` ផ្នែកទាំងនោះនឹងក្លាយជា
   `[Audio N]: (unavailable — no STT provider connected)` (#8430 contract)។ សម្រាប់
   គោលដៅដែលមិនស្គាល់ (`null`) លទ្ធផលដែលបរាជ័យទាំងអស់នៅតែមិនត្រូវបានកែប្រែ។ គោលដៅ
   ដែលបានបញ្ជាក់ថាគាំទ្រតែអត្ថបទ និងគ្មានព័ត៌មានសម្ងាត់ STT ដែលអាចប្រើបាន នឹងទទួលបាន
   stub ច្បាស់លាស់ដូចគ្នា ដោយមិនធ្វើការហៅតាមបណ្តាញ។

ប្រតិចារឹកដែលជោគជ័យប្រើឃ្លាំងសម្ងាត់ LRU/TTL របស់ Modality Bridge ដែលប្រើរួមទូទាំង process។
key រួមបញ្ចូល audio reference, ស្លាកប្រតិបត្តិការ `audio-transcription` ដែលមានស្ថិរភាព
និងម៉ូដែល STT ដែលបានជ្រើសរើស; ការបរាជ័យមិនត្រូវបានរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ឡើយ។ ការព្យាយាមអូឌីយ៉ូធ្វើបច្ចុប្បន្នភាព
counter រួម `bridged`, `cacheHits`, `failures` និង `lastUsedAt`។
response ដែលបានបម្លែងមាន
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; request ដែលមិនត្រូវបានកែប្រែ
មិនទទួលបាន segment របស់ Audio Bridge ទេ។

ការកំណត់ runtime ត្រូវបានគាំទ្រដោយ DB និងផ្ទៀងផ្ទាត់ដោយ Zod៖

| Key                           | លំនាំដើម | ជួរ                    |
| ----------------------------- | -------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                      |
| `modalityBridgeAudioModel`    | `""`     | ស្វ័យប្រវត្តិ ឬ STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                   |

ឃ្លាំងសម្ងាត់រួមនៅតែត្រូវបានគ្រប់គ្រងដោយ `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` និង `modalityBridgeCacheMaxEntries`។

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

ស្ទាក់យកផ្នែកវីដេអូកម្រិតកំពូលនៅក្នុង Chat Completions `messages` និង Responses
API `input` មុនពេលហៅគោលដៅដែលមិនត្រូវបានដឹងថាមានការគាំទ្រវីដេអូ native។
ទម្រង់ដែលគាំទ្រគឺ `input_video`, `video_url`, `video_source`, HTTPS URLs
និង data URIs ប្រភេទ `data:video/*;base64,...`។ ឈ្មោះឯកសារធម្មតានៅក្នុងអត្ថបទមិនត្រូវបានចាត់ទុក
ជាវីដេអូទេ។

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) គ្រប់គ្រងការឆ្លងកាត់ request,
ការត្រួតពិនិត្យសមត្ថភាព/គោលការណ៍ ការបូកសរុបក្នុង request នីមួយៗ និង payload របស់ response។
ការងារសម្រាប់វីដេអូនីមួយៗ — ការទទួលយក ឃ្លាំងសម្ងាត់លទ្ធផលទាំងមូល ការពណ៌នាលំដាប់ frame
(ដែលបញ្ចូល transcript អូឌីយ៉ូណាមួយដែលអ្នកហៅបានប្រកាស) និង metrics/abort/cleanup
សម្រាប់ការព្យាយាមនីមួយៗ — ត្រូវបានលាក់នៅពីក្រោយ `processVideoPart` ក្នុង
`videoBridgePipeline.ts` ដែលត្រូវបានហៅម្តងសម្រាប់ផ្នែកវីដេអូនីមួយៗនៅក្នុង loop របស់ `preCall`។
module នោះក៏កំណត់ព្រំដែន port យ៉ាងច្បាស់លាស់ `VideoMediaBrokerPort`
(ទទួលយក bytes និងស្រង់ frames ដែលបានយកគំរូ), `VideoAudioTranscriptionPort`
(បញ្ចូល transcript អូឌីយ៉ូដែលអ្នកហៅបានប្រកាសជាមួយ captions ដែលបានយកគំរូ) និង
`VideoDrilldownPort` (ព្រំដែន persistence សម្រាប់ frame drill-down; មិនទាន់បានភ្ជាប់
ទៅក្នុង `processVideoPart` ទេ — បច្ចុប្បន្នមានតែ route
`/api/modality-bridge/video/drilldown` ដាច់ដោយឡែកប៉ុណ្ណោះដែលសរសេរ drill-down entries)។

request path សាធារណៈ `/v1` មិនដែល import ឬ invoke subprocess ឡើយ។ វីដេអូពីចម្ងាយ
ត្រូវបានទាញយកក្រោមដែនកំណត់ 50 MiB; វីដេអូ base64 inline មានដែនកំណត់អភិរក្ស
36 MiB ដែលបាន decode ក្នុងមួយវីដេអូ ដើម្បីឱ្យ envelope របស់ model/messages/framing
អាចស្ថិតនៅក្នុងដែនកំណត់ទទួលយក request JSON សាធារណៈ 50 MiB។ ប្រវែង inline
និងការប៉ាន់ស្មានទំហំដែលបាន decode ត្រូវបានត្រួតពិនិត្យមុនពេល allocation។ HTTPS
ត្រូវបានតម្រូវនៅលើ URL ពីចម្ងាយដំបូង និងរាល់ redirect ដោយប្រើរបាំង outbound
សម្រាប់សាធារណៈតែប៉ុណ្ណោះដែលមានស្រាប់ ជាមួយ DNS pinning។ បន្ទាប់មក bytes ឆ្លងកាត់ព្រំដែន broker
ខាងក្នុងពិតប្រាកដ `POST /api/modality-bridge/video/extract`។ route នោះគឺទាំង
`LOCAL_ONLY` និង `SPAWN_CAPABLE` ទទួលយកតែ request ពី trusted-loopback
ដែលបានផ្ទៀងផ្ទាត់អត្តសញ្ញាណក្នុងមួយ process ហើយមិនដែលទទួលយក URL, filesystem path, executable
ឬបញ្ជី argument ឡើយ។ pipeline ទំហំ body របស់ API និង incremental body reader
របស់ handler អនុវត្តដែនកំណត់ broker input 50 MiB ដោយឯករាជ្យពីគ្នា។ queue ដែលមានដែនកំណត់របស់វា
ដំណើរការ extraction មួយក្នុងមួយពេល អនុញ្ញាតឱ្យមានការងាររង់ចាំចំនួនបួន និងកំណត់
pending input អតិបរមាត្រឹម 100 MiB។

នៅខាងក្នុង broker, `ffprobe` អានឯកសារមូលដ្ឋានឯកជនមួយ។ បញ្ជីអនុញ្ញាតទម្រង់ថេរមិនរាប់បញ្ចូលទម្រង់ playlist និង manifest ទេ។ សម្រាប់ container ក្នុងត្រកូល MOV ដែលត្រូវបានអនុញ្ញាត ឯកសារយោងទិន្នន័យ MOV ខាងក្រៅនៅតែត្រូវបានបិទតាមលំនាំដើម ហើយ command ថេរមិនបើកប្រើវាទេ។ ទាំង `ffprobe` និង `ffmpeg` ប្រើបញ្ជីអនុញ្ញាត protocol ដែលមានតែ `file` ប៉ុណ្ណោះ ប្រើ thread មួយ អារេ argument ថេរ មិនប្រើ shell ហើយ executable ត្រូវបានកំណត់ទីតាំងតាមរយៈ `PATH`។ Stream រូបគម្របប្រភេទ attached-picture មិនមែនជាបេក្ខភាពដែលអាចចាក់បានទេ។ Stream ដែលអាចចាក់បានទាំងអស់ត្រូវតែបំពេញតាមដែនកំណត់ ហើយ default stream ដែលបានបញ្ជាក់ជាក់លាក់ត្រូវបានផ្តល់អាទិភាព មុន fallback ដែលជ្រើស index ទាបបំផុតតាមរបៀបកំណត់ច្បាស់លាស់។ វីដេអូត្រូវបានកំណត់ត្រឹម 600 វិនាទី, 8,192 ភីកសែលក្នុងមួយវិមាត្រ និង 33,554,432 source pixels។ FFmpeg យកគំរូ JPEG frame ចំនួន 1–16 នៅចំណុចកណ្តាល បន្ថយមាត្រដ្ឋានជ្រុងវែងឱ្យនៅត្រឹមច្រើនបំផុត 1,024 ភីកសែល ដោយមិនពង្រីក input ដែលតូចជាង ហើយមិនដែលទទួល URL ទេ។ តាមលំនាំដើម ការយកគំរូគឺ `uniform`។ គោលការណ៍ស្រេចចិត្ត `scene_aware` និងគោលការណ៍សាកល្បង `segment_aware` ដំណើរការ FFmpeg pass ថេរបន្ថែមមួយលើ stream មូលដ្ឋានដែលបានផ្ទៀងផ្ទាត់រួច ជ្រើស timestamp របស់ scene ពី `showinfo` ដែលស្ថិតក្នុងដែនកំណត់ ហើយ fallback តាមរបៀបកំណត់ច្បាស់លាស់ទៅកាន់ចំណុចកណ្តាលបែប uniform ដូចគ្នា នៅពេល detector បរាជ័យ អស់ពេលកំណត់ output មានទ្រង់ទ្រាយមិនត្រឹមត្រូវ ឬសំណុំបេក្ខភាពទទេ។ របៀប segment-aware បែងចែកគំរូចំណុចកណ្តាលតាមសមាមាត្រទៅនឹងចន្លោះ scene ដែលបានផ្ទៀងផ្ទាត់។ ភស្តុតាង និងឥរិយាបថ fallback របស់ segment-aware ត្រូវបានរៀបរាប់លម្អិតខាងក្រោម។ ដែនកំណត់អតិបរមា 16 frame ត្រូវបានអនុវត្តបន្ទាប់ពីការជ្រើសរើសក្នុងគ្រប់គោលការណ៍។ នៅពេលសំណើ scene-aware មានថវិកាត្រឹមតែមួយ frame វាប្រើចំណុចកណ្តាលបែប uniform នៃវីដេអូពេញដែលកំពុងសកម្ម ឬ focus window ហើយរាយការណ៍ `policyEffective: uniform`៖ scene frame តែមួយដែលបានជ្រើសមិនអាចរក្សាបានទាំងចុងពេលវេលាទាំងពីរទេ។ អ្នកហៅអាចផ្តល់ focus window មានកំណត់ (`start`/`end` ជាវិនាទី) ជាជម្រើស។ ព្រំដែនត្រូវបានកាត់តម្រឹមឱ្យស្ថិតក្នុងរយៈពេល media, window ដែលបញ្ច្រាស ឬមិនមែនជាតម្លៃ finite ត្រូវបានបដិសេធ ហើយគោលការណ៍យកគំរូទាំងអស់ត្រូវបានអនុវត្តតែនៅក្នុងចន្លោះដែលបានធ្វើ normalization ប៉ុណ្ណោះ។ window លទ្ធផលត្រូវបានរួមបញ្ចូលក្នុង metadata នៃការយកគំរូ និងក្នុង prefix សេចក្តីពិពណ៌នាដែលមិនគួរឱ្យទុកចិត្ត ដើម្បីឱ្យ model ខាងក្រោមអាចបែងចែក excerpt ដែលបានផ្តោតពី timeline ពេញលេញ។

ការផ្តោត semantic សម្រាប់ caption គឺជាការកំណត់ដាច់ដោយឡែក និងជាក់លាក់មួយ។ របៀបវិភាគលំនាំដើម `full` រក្សា frame prompt ដែលមានស្រាប់ ហើយមិនដែលបញ្ជូនអត្ថបទសំណើទៅ caption model ទេ។ ក្នុងរបៀប `focused`, bridge អានតែ `text`/`input_text` ដែលមិនទទេចុងក្រោយបំផុត និងត្រូវបានសរសេរដោយអ្នកប្រើ ពី container ប្រភេទ Chat ឬ Responses ដូចគ្នា ធ្វើ normalization វាទៅជា NFC បង្រួម control character និង whitespace ហើយកំណត់វាត្រឹម 500 Unicode code points។ លទ្ធផលទទេនឹង fallback ទៅ prompt `full` ដដែលទាំងស្រុង។ Hint ដែលអាចប្រើបានត្រូវបាន serialize ជា JSON នៅក្នុង block បរិបទអ្នកប្រើដែលមិនគួរឱ្យទុកចិត្តដោយឡែក ហើយអាចផ្តល់អាទិភាពបានតែទៅលើព័ត៌មានលម្អិតដែលអាចសង្កេតឃើញប៉ុណ្ណោះ។ វាមិនអាច override ការព្រមានដាច់ដោយឡែកដែលហាមមិនឱ្យធ្វើតាមសេចក្តីណែនាំដែលអាចមើលឃើញ ឬឮនៅក្នុង media បានទេ។ ការផ្តោតតាមអត្ថបទមិនដែលសន្និដ្ឋាន `start`/`end` ឬផ្លាស់ប្តូរ temporal sampler ទេ។

#### ភស្តុតាង segment បែបរចនាសម្ព័ន្ធ FU-07

`segment_aware` ប្រើ pre-analysis pass មួយដែលមានដែនកំណត់ លើ video stream មូលដ្ឋានដែលបានផ្ទៀងផ្ទាត់រួច។ ខ្សែសង្វាក់ filter ថេរដំបូងបន្ថយមាត្រដ្ឋានឱ្យមានទទឹងច្រើនបំផុត 320 ភីកសែល រកឃើញការផ្លាស់ប្តូរ scene និងចន្លោះពេលដែលរូបភាពជាប់គាំង បន្ទាប់មកយកគំរូក្នុងអត្រា 1 frame ក្នុងមួយវិនាទី សម្រាប់ blur, average luma និងព័ត៌មាន spatial/temporal។ pass នេះត្រូវបានកំណត់ត្រឹមគំរូរចនាសម្ព័ន្ធ 600, FFmpeg/filter thread មួយ, protocol ដែលមានតែ `file` និងបញ្ជីអនុញ្ញាត container ដូចគ្នា, ដែនកំណត់ process output ទំហំ 1 MiB និងរយៈពេលច្រើនបំផុត 30 វិនាទីនៅក្នុង abort/deadline រួមរបស់ broker។ វាមិនដែលទទួល command, filter, path ឬ URL ពីសំណើទេ។

តម្លៃរចនាសម្ព័ន្ធគឺជាភស្តុតាងយកគំរូដែលអាចកំណត់ឡើងវិញបាន មិនមែនជាការយល់ដឹង semantic អំពីវីដេអូទេ។ វាមិនសន្និដ្ឋានអំពីប្រធានបទ សកម្មភាព caption សំឡេងនិយាយ ឬចេតនារបស់អ្នកប្រើទេ។ ព្រំដែន scene និង freeze បង្កើតជា segment។ freeze coverage, blur, exposure, spatial detail និង temporal change គ្រាន់តែមានឥទ្ធិពលលើរបៀបបែងចែកថវិកា 1–16 frame ដែលមានស្រាប់ប៉ុណ្ណោះ។ segment ដែលជាប់គាំងទាំងស្រុងត្រូវបានកំណត់ត្រឹមមួយ frame ខណៈ segment ដែលមិនជាប់គាំងប្រកួតប្រជែងគ្នាសម្រាប់ថវិកាដែលនៅសល់។ នៅពេលចំនួនព្រំដែនច្រើនជាងចំនួន frame ការគ្របដណ្តប់ timeline បែប uniform ត្រូវបានរក្សាទុក ដើម្បីកុំឱ្យការកាត់ scene យ៉ាងឆាប់រហ័សនៅដើមបាំង segment វែងនៅចុង។ ព្រំដែន scene ដែលស្ថិតនៅក្នុង resolution វិភាគ 1 វិនាទីពីព្រំដែន freeze ត្រូវបានបញ្ចូលគ្នា។

filter ដែលបាត់ ភស្តុតាងមិនត្រឹមត្រូវ/ទទេ កំហុស detector ឬការអស់ពេល pre-analysis ដែលមានដែនកំណត់ នឹង fail open ទៅកាន់គោលការណ៍ចំណុចកណ្តាលបែប uniform ដដែលទាំងស្រុង។ ការ abort ដោយអ្នកហៅ ឬ deadline របស់ broker មិន fail open ទេ៖ វាបញ្ចប់ subprocess ដែលកំពុងដំណើរការ រារាំងការទាញយក frame នៅពេលក្រោយ ហើយ private temporary tree ត្រូវបានលុបចេញក្នុង `finally`។

`scripts/perf/video-bridge-fu07-eval.ts` បង្កើត fixture FFmpeg ពិតប្រាកដដែលអាចកំណត់ឡើងវិញបាន សម្រាប់ការសន្សំ caption-call ក្រោយ dedup, ការបែងចែកថវិកាសម្រាប់ dense-motion, ភស្តុតាង blur/exposure/SI-TI, ការកាត់ scene យ៉ាងឆាប់រហ័សដែលមានផ្នែកចុងវែង និង gradual-fade false positives។ វាកត់ត្រា wall time របស់ pre-analysis ហើយនៅកន្លែងដែលមាន `/usr/bin/time` វាក៏កត់ត្រា CPU របស់ child process និង peak RSS ផងដែរ។ ការត្រួតពិនិត្យគុណភាពរបស់វាគឺជា structural oracle ប៉ុណ្ណោះ។ គុណភាព caption-model ពិតប្រាកដនៅតែជា `HOLD` ព្រោះ harness នេះមិនមាន endpoint ដែលត្រូវបានអនុញ្ញាត ឬ judge ដែលបានកំណត់ថេរទេ។ ការសន្សំជាទឹកប្រាក់ក៏នៅតែជា `HOLD` ដែរ លុះត្រាតែ `--caption-cost-per-call-usd` ផ្តល់ការប៉ាន់ស្មានវិជ្ជមានជាក់លាក់នៃតម្លៃក្នុងមួយ call។ script មិនដែលប្រឌិតលទ្ធផលណាមួយក្នុងចំណោមលទ្ធផលទាំងពីរនេះទេ។

ស៊ុមនីមួយៗត្រូវបានកំណត់ទំហំត្រឹម 4 MiB ស៊ុមដើមទាំងអស់បញ្ចូលគ្នាត្រឹម 23 MiB ហើយការឆ្លើយតបរបស់ broker ដែលបានធ្វើ serialization ត្រឹម 32 MiB។ ថតបណ្តោះអាសន្នឯកជនមួយត្រូវបានលុបចេញនៅក្នុង `finally`។ OmniRoute មិនភ្ជាប់មកជាមួយ FFmpeg ហើយក៏មិនទទួលយកផ្លូវទៅកាន់ executable ផ្ទាល់ខ្លួនដែរ។ មុនពេលបង្កើតចំណងជើងពណ៌នា bridge អនុវត្តដំណាក់កាលលុបរូបភាពស្ទួនបែបប្រុងប្រយ័ត្ន៖ JPEG នីមួយៗត្រូវបានបន្ថយទៅជា buffer grayscale ទំហំ 16×16 ហើយត្រូវបានប្រៀបធៀបតែជាមួយស៊ុមចុងក្រោយដែលបានរក្សាទុកប៉ុណ្ណោះ។ សម្រាប់កម្រិតចំនួនចំណងជើងដែលបានស្នើសុំលើសពីមួយស៊ុម ដំណើរការស្រង់ចេញផ្តល់សំណុំបេក្ខភាពមានកំណត់រហូតដល់ពីរដងនៃចំនួនកំណត់នោះ ហើយមិនលើសពី 16 ស៊ុមឡើយ។ កម្រិតអតិបរមាដែលបានស្នើសុំត្រូវបានអនុវត្តតែបន្ទាប់ពីការលុបស្ទួន ហើយបេក្ខភាពដំបូង និងចុងក្រោយដែលបានជ្រើសរើសត្រូវបានរក្សាទុកក្នុងអំឡុងពេលកាត់បន្ថយចុងក្រោយ នៅពេលចំនួនកំណត់មានយ៉ាងហោចណាស់ពីរ។ គោលការណ៍មានកំណែ `grayscale-16x16-mean-cells-v2` ប្រើតម្លៃធំជាងរវាងភាពខុសគ្នានៃមធ្យម luma និងសមាមាត្រនៃក្រឡា thumbnail ដែលភាពខុសគ្នាដែលបាន normalize របស់វាមានតម្លៃយ៉ាងហោចណាស់ 0.05។ កម្រិតចាត់ទុកថាស្ទួនគឺជាតម្លៃថេរ 0.04 ដែលត្រូវបានជ្រើសរើសដើម្បីឱ្យអាចព្យាករបាន ជាជាងបង្ហាញវាជាការកំណត់ពេលដំណើរការ។ សញ្ញាកម្រិត contrast ខ្ពស់បន្ទាប់បន្សំនេះរក្សាទុកចលនាតូចៗ និងការផ្លាស់ប្តូរអត្ថបទដែលអាចមើលឃើញ ដែលការប្រៀបធៀបដោយផ្អែកតែលើតម្លៃមធ្យមអាចលាក់បាំងបាន។ កំហុស comparator ឬ decoder ប្រើយុទ្ធសាស្ត្រ fail-open ហើយរក្សាការគ្របដណ្តប់។ Metadata លទ្ធផលបែងចែករវាងបេក្ខភាពដែលបានស្រង់ចេញ ស៊ុមដែលបានប្រើដោយជោគជ័យ និងរូបភាពស្ទួនដែលបានលុបចេញ។

ផ្នែកវីដេអូដែលបានសម្គាល់យ៉ាងច្បាស់អាចស្នើសុំ contact sheet ដែលមាន timestamp។ Bridge បង្កើតក្រឡាចត្រង្គ JPEG អតិបរមា 4 ជួរឈរ និង 16 ស៊ុម។ ក្រឡាទំហំ 512 pixel នីមួយៗបង្កប់ timestamp ប្រភពរបស់វាទៅក្នុងបន្ទះបាតដែលមាន contrast ខ្ពស់ ខណៈដែល timestamp ដូចគ្នានេះនៅតែមានក្នុង metadata ជាអត្ថបទ សម្រាប់ការភ្ជាប់ទំនាក់ទំនង និងការធ្វើសវនកម្មនៅដំណាក់កាលបន្ទាប់។ JPEG ពេញលេញនៅតែត្រូវបានកំណត់ត្រឹម 32 MiB។ ប្រសិនបើ `sharp` មិនអាច decode ឬផ្គុំក្រឡាចត្រង្គបានទេ bridge នឹងត្រឡប់ទៅប្រើស៊ុម JPEG នីមួយៗវិញ។ ការបោះបង់ពី client នៅតែត្រូវបានបញ្ជូនបន្តតាមរយៈប្រតិបត្តិការ sheet។

ភស្តុតាងសម្រាប់ការដំឡើងទៅប្រើប្រាស់ត្រូវបានបំបែកដោយចេតនាចេញពី microbenchmark សមាសភាពសិប្បនិម្មិត។ `scripts/perf/video-bridge-contact-sheet-eval.ts` កំណត់ harness សាកល្បង A/B ដែលមាន schema-version សម្រាប់ម៉ូដែល vision ពិតប្រាកដដែលឆបគ្នាជាមួយ OpenAI។ វាវាស់ tokens ដែលបានរាយការណ៍ដោយ provider, latency ពីដើមដល់ចប់តាមម៉ោងជញ្ជាំង រួមទាំងការផ្គុំ sheet, ចំនួនការហៅ model និងការរក្សាទុកព័ត៌មានពិតដែលបានកំណត់ក្នុង manifest។ ការឆ្លើយតបដើមរបស់ model មិនត្រូវបានសរសេរចូលក្នុងរបាយការណ៍ទេ។ មានតែ SHA-256 digests និង ID នៃព័ត៌មានពិតដែលត្រូវគ្នាប៉ុណ្ណោះដែលត្រូវបានរក្សាទុក។ Harness មិនធ្វើការហៅតាមបណ្តាញ ឬការហៅទៅកាន់ model ដែលគិតថ្លៃទេ លុះត្រាតែបានបញ្ជូន `--execute-real` ហើយ `--model`, `OMNIROUTE_BASE_URL` និង `OMNIROUTE_API_KEY` ត្រូវបានកំណត់រចនាសម្ព័ន្ធ។ បើគ្មានការដំណើរការពិតប្រាកដដែលបានបញ្ជាក់យ៉ាងច្បាស់នោះទេ សេចក្តីសម្រេចដែលអាចអានដោយម៉ាស៊ីនរបស់វានៅតែជា `HOLD`។ ការវាស់វែង payload សិប្បនិម្មិត ឬចំនួនការហៅតែមួយមុខ មិនមែនជាភស្តុតាងសម្រាប់ការដំឡើងទៅប្រើប្រាស់ទេ។

អ្នកហៅអាចភ្ជាប់ array `transcript.cues` ជាជម្រើសទៅផ្នែកវីដេអូដែលបានគាំទ្រ នៅពេលពួកគេមានអត្ថបទដែលបានតម្រឹមរួចហើយ។ Cue នីមួយៗត្រូវមាន `text`, ចន្លោះពេល `start`/`end` ដែលមានតម្លៃកំណត់ច្បាស់លាស់ និងស្ថិតក្នុងរយៈពេលដែលបាន probe ព្រមទាំង `source` ដែលស្ថិតក្នុងបញ្ជីអនុញ្ញាត (`client`, `embedded` ឬ `audio-bridge`)។ `confidence` មានតម្លៃលំនាំដើមជា `1` ហើយត្រូវស្ថិតនៅចន្លោះ `0` និង `1`។ Cue ដែលស្ទួនគ្នាទាំងស្រុងត្រូវបានបង្រួមបញ្ចូល។ OmniRoute មិនដែលចាប់ផ្តើមការបម្លែងសំឡេងទៅជាអត្ថបទពី metadata នេះទេ៖ cue ដែលបានផ្ទៀងផ្ទាត់ត្រូវបានចម្លងទៅក្នុងលទ្ធផលដែលបានពិពណ៌នា រួមជាមួយ source, confidence និងចន្លោះពេល ហើយត្រូវបានបង្ហាញជា observation ដែលមិនគួរទុកចិត្ត នៅក្បែរចំណងជើងពណ៌នាស៊ុម។ អត្ថបទដែលមិនត្រឹមត្រូវ នៅក្រៅចន្លោះ ឬគ្មានប្រភពដើមត្រូវបានបដិសេធ ជាជាងលាយបញ្ចូលទៅក្នុងស្ទ្រីមចំណងជើងពណ៌នា។ ឆានែល transcript ទាំងពីរក្នុង request body ធ្វើ normalize ប្រភពដើមដែលបានផ្តល់ឱ្យទៅជា `client` រួមទាំង label `embedded` ឬ `audio-bridge` ដែលបានអះអាងដោយខ្លួនឯងផងដែរ។ មានតែ adapter ដែលគ្រប់គ្រងដោយ server ប៉ុណ្ណោះដែលអាចកំណត់ label ដែលគួរទុកចិត្តទាំងនោះតាមរយៈ argument ដែលប្រើតែក្នុង code ឈ្មោះ `trustedSource`។ Field ក្នុង request JSON មិនអាចទៅដល់ argument នោះបានទេ។ អត្ថបទ transcript នៅតែជាខ្លឹមសារដែលបានមកពី media និងមិនគួរទុកចិត្ត ដោយមិនគិតពីប្រភពដើមរបស់វា ហើយវាមិនត្រូវប្រើកំណត់ authorization ជាដាច់ខាត។

អ្នកហៅកម្រិតខ្ពស់អាចផ្តល់ track `audioTranscript` សម្រាប់វីដេអូដូចគ្នា។ វាត្រូវបានចាត់ទុកជាអត្ថបទដែលផ្តល់ដោយ client មិនមែនជាភស្តុតាងនៃការបម្លែងសំឡេងទៅជាអត្ថបទដោយ server ទេ។ ចំណុចតភ្ជាប់ fusion ដំណើរការ observation រូបភាព និងសំឡេងក្រោម deadline និង abort signal តែមួយ រៀបលំដាប់ពួកវានៅលើ timeline រួម បង្រួមធាតុដែលស្ទួនគ្នាទាំងស្រុង និងរាយការណ៍លទ្ធផលផ្នែកខ្លះ នៅពេលមានតែផ្នែកម្ខាងប៉ុណ្ណោះដែលជោគជ័យ។ `audioTranscript` ដែលមិនត្រឹមត្រូវនឹងបន្ថយទៅជាលទ្ធផលផ្នែកខ្លះនោះ ដោយរក្សាទុកការពិពណ៌នារូបភាព ហើយសាខាសំឡេងកត់ត្រាកូដបរាជ័យដែលបានសម្អាត ជំនួសឱ្យការធ្វើឱ្យវីដេអូទាំងមូលបរាជ័យ។ ភាពអាចប្រើបានតាមសាខានីមួយៗ, partial flag និងកូដបរាជ័យដែលបានសម្អាត ត្រូវបានរក្សាទុកក្នុងលទ្ធផលដែលបានពិពណ៌នា ក្នុង guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`) ក្នុង result-cache metadata និងក្នុង fusion counters របស់ bridge។ ផ្លូវ Video Bridge លំនាំដើមមិនហៅ speech-to-text ឬទាញយកច្បាប់ចម្លង media ទីពីរទេ។ បើគ្មាន track ដែលបានបញ្ជាក់យ៉ាងច្បាស់នោះ វានៅតែដំណើរការតែវីដេអូប៉ុណ្ណោះ។

**ការរក្សាទុកប្រតិចារឹក (#12150 P1)។** វាត្រូវបានអនុវត្តដោយស្វ័យប្រវត្តិរាល់ពេលដែល
Video Bridge (ដែលខ្លួនវាត្រូវការការជ្រើសចូលប្រើ) បង្ហាញសញ្ញាប្រតិចារឹក — មិនមាន
ទង់រក្សាទុកដាច់ដោយឡែកទេ។ នៅពេលសំណើមួយបង្ហាញសញ្ញាប្រតិចារឹកណាមួយ (ជា
`transcript` ដែលអ្នកហៅបានប្រកាស ឬ `audioTranscript` ដែលបានបញ្ចូលគ្នា) ប្រព័ន្ធការពារ
សម្គាល់វាជា `videoBridgeObserved` ហើយបង្កើតច្បាប់ចម្លងបិទបាំងនៃសេចក្ដីពិពណ៌នាវីដេអូ —
ជាការបង្ហាញដូចគ្នាបេះបិទ ដែលតួអត្ថបទសេរីរបស់សញ្ញានីមួយៗត្រូវបានជំនួសដោយ
`[redacted-video-transcript]` ដោយជំនួសវាលសញ្ញាដែលមានរចនាសម្ព័ន្ធ
មុនពេលផ្គុំខ្សែអក្សរ (មិនដែលញែកអត្ថបទដែលបានធ្វើឱ្យរាបស្មើនោះទេ ដូច្នេះគ្មានខ្លឹមសារ
សញ្ញាណាមួយ — មិនថាជាខ្លឹមសារបង្កគ្រោះថ្នាក់ ឬធម្មតា រួមទាំងតួអត្ថបទដែលមាន `]` ដូចជា
`[inaudible]`/`[music]` — អាចនៅសេសសល់បានទេ)។ តួសំណើក្នុងកំណត់ហេតុការហៅដែលបានរក្សាទុក
ប្ដូរផ្នែកអត្ថបទនីមួយៗដែលកើតចេញពីវីដេអូជាមួយច្បាប់ចម្លងបិទបាំងនោះ ដោយផ្គូផ្គងតាម
ភាពស្មើគ្នានៃខ្លឹមសារ; ចំណុចយោង `fullText` ត្រូវបានអានឡើងវិញពីផ្ទុកទិន្នន័យ guardrail
មុនការហៅដែលបានបញ្ចប់ ដូច្នេះការផ្គូផ្គងនៅតែជោគជ័យ បន្ទាប់ពី guardrail បន្ទាប់ៗក្នុងខ្សែ
(កម្មវិធីបិទបាំង PII និងព័ត៌មានសម្ងាត់ ដែលមានអាទិភាព 10/95) សរសេរអត្ថបទពិពណ៌នាឡើងវិញ
នៅទីតាំងដដែល និងបន្ទាប់ពីការបញ្ចូល system-prompt/handoff/memory កែទម្រង់អារេសារ។
តួសំណើដែលផ្ញើទៅកាន់ម៉ូដែលនៅផ្នែកខាងលើមិនត្រូវបានផ្លាស់ប្ដូរទេ។ សំណើដែលបានសង្កេត
ក៏មិនបញ្ចូលអ្វីទៅក្នុង Memory ដែលអចិន្ត្រៃយ៍ដែរ (ការស្រង់ចេញដែលកើតពីទាំងសំណើ និង
ការឆ្លើយតបត្រូវបានរំលង) ដូច្នេះការឆ្លើយតបផ្ទាល់របស់ម៉ូដែលមិនអាចបន្ទរអត្ថបទប្រតិចារឹក
ចូលទៅក្នុង Memory បានទេ។

**វាលវីដេអូឆៅ (#12430)។** នៅពេល bridge ត្រូវបានបើក ហើយការគាំទ្រវីដេអូដើម
មិនត្រូវបានដឹង ឬមិនមាន វាល `transcript`/`audioTranscript` ដែលបានកំណត់ក៏ធ្វើឱ្យ
`videoBridgeObserved` សកម្មផងដែរ សូម្បីតែបន្ទាប់ពីការពិពណ៌នាបរាជ័យ ឬដល់ដែនកំណត់
`maxVideos` ក៏ដោយ។ `null` និងខ្សែអក្សរទទេត្រូវបានរាប់; វាលដែលអវត្តមាន និង
មេតាទិន្នន័យដែលមិនមែនជាវីដេអូមិនត្រូវបានរាប់ទេ។ ច្បាប់ចម្លងដែលបានរក្សាទុកនឹងបិទបាំង
វាលទាំងនេះ ឬលុបសំណើចេញ ហើយ caches/Memory ត្រូវបានរំលង។

នៅលើផ្លូវ fallback ទាំងនោះ សញ្ញាត្រឹមត្រូវដែលអ្នកហៅបានផ្ដល់ក្លាយជាផ្នែក
`text`/`input_text` ដែលត្រូវបានគាំទ្រ ជំនួសឱ្យវាលរបស់អ្នកផ្ដល់សេវាដែលមិនមែនជាស្តង់ដារ។
ទិន្នន័យទាំងពីរដែលផ្ដល់ជាមួយសំណើនៅតែជាការសង្កេត `client` ដែលមិនគួរឱ្យទុកចិត្ត
ដោយមានការព្រមានច្បាស់លាស់ថា វីដេអូមិនត្រូវបានពិពណ៌នា ហើយ timestamps មិនត្រូវបាន
ផ្ទៀងផ្ទាត់ជាមួយមេឌៀទេ។ ថវិកា 256 សញ្ញា/64-KiB សរុប និងថវិកាសម្រាប់សញ្ញានីមួយៗ
ដែលមានស្រាប់ ត្រូវបានអនុវត្តលើទិន្នន័យទាំងពីររួមគ្នា; timestamps ត្រូវតែស្ថិតក្នុង
ដែនកំណត់អតិបរមា 600 វិនាទីរបស់ broker និងផ្ទាំងពេលវេលាផ្ដោតណាមួយដែលបានផ្ដល់។
ទិន្នន័យមិនត្រឹមត្រូវត្រូវបានបោះចោល មិនមែនបញ្ជូនបន្តជាអត្ថបទតាមអំពើចិត្តទេ;
ទិន្នន័យមួយទៀតដែលត្រឹមត្រូវនៅតែអាចប្រើបាន លុះត្រាតែថវិការួមរបស់ពួកវាត្រូវបានលើស។
វាល null/ទទេមិនបន្ថែមអត្ថបទទេ។ fallback នេះមិនបន្ថែមការទាញយកមេឌៀ ឬការធ្វើ
ប្រតិចារឹកទេ។ វាលផ្នែកបន្ថែមនៃប្រតិចារឹកត្រូវបានដកចេញពីឧបករណ៍ផ្ទុកវីដេអូ fallback
និងវត្ថុ `video_url`/`source` របស់វា។ បញ្ជីអនុញ្ញាតលើខ្សែបញ្ជូនរបស់ OpenAI នៅតែ
តឹងរ៉ឹង; ឧបករណ៍ផ្ទុកវីដេអូដែលសមត្ថភាពដើមមិនត្រូវបានដឹងនៅតែអាចប្រើបាន ហើយ
គោលដៅដែលគេដឹងថាគាំទ្រតែអត្ថបទនៅតែរក្សាសញ្ញាសម្គាល់សុវត្ថិភាព។ ច្បាប់ចម្លងបិទបាំង
ដែលមានរចនាសម្ព័ន្ធការពារអត្ថបទប្រតិចារឹកដែលបានបន្ថែម ខណៈដែលសំណើដើមដែលជាកម្មសិទ្ធិ
របស់អ្នកហៅនៅតែមិនផ្លាស់ប្ដូរ។ គោលដៅដែលគាំទ្រដោយប្រព័ន្ធដើម និង bridge ដែលបានបិទ
នៅតែរក្សាឥរិយាបថរំលងដែលមានស្រាប់របស់ពួកវា។

ច្បាប់ចម្លងបន្ថែមដែលត្រូវបានរក្សាទុកប្រើសញ្ញាសំណើដែលបានសង្កេតដូចគ្នា។ រូបថតចម្លង
សំណើរបស់ client ឆៅមុន guardrail សំណើកំពុងរង់ចាំក្នុងអង្គចងចាំ និងកំណត់ហេតុសំណើ
ដែលត្រូវបានបដិសេធមុនពេលដំណើរការ ជំនួសវាលប្រតិចារឹកក្នុងផ្នែកវីដេអូតាមរចនាសម្ព័ន្ធ;
prompt ជាខ្សែអក្សរដែលបង្កើតដោយដំណាក់កាល pipeline និងការផ្ទេរបរិបទ ត្រូវបានបិទបាំង
នៅ sink នៃតួសំណើដែលបានរក្សាទុក។ សញ្ញាសម្គាល់ `video_content_removed` ដែលបានរក្សាទុក
ធ្វើឱ្យការបន្តដោយ `previous_response_id` បរាជ័យដោយបិទជាសុវត្ថិភាព ជំនួសឱ្យការកសាង
អត្ថបទឡើងវិញដែលត្រូវបានបោះចោលដោយចេតនា។ ប្រសិនបើសំណើដែលបានសង្កេតបាត់បង់ច្បាប់ចម្លង
បិទបាំងសម្រាប់ផ្នែកណាមួយរបស់វាមុនពេលចុះកំណត់ហេតុ ឬសូម្បីតែច្បាប់ចម្លងវីដេអូមួយក្នុង
ចំណោមច្រើនមិនអាចផ្គូផ្គងបាន បន្ទាប់ពីការកែប្រែសំណើនៅពេលក្រោយ តួសំណើដែលត្រូវរក្សាទុក
នឹងត្រូវបានលុបចោលទាំងស្រុង ជំនួសឱ្យការរក្សាទុកប្រតិចារឹកដែលបានបិទបាំងតែផ្នែកខ្លះ។

សម្រាប់សំណើដែលបានសង្កេត ការឆ្លើយតបរបស់ម៉ូដែលអាចដកស្រង់ផ្នែកណាមួយនៃប្រតិចារឹក
ដោយគ្មានព្រំដែនសញ្ញាដែលមានរចនាសម្ព័ន្ធ។ ដូច្នេះ `responseBody` ក្នុងកំណត់ហេតុការហៅ
ដែលបានរក្សាទុករបស់វា ត្រូវបានជំនួសដោយសញ្ញាសម្គាល់ការលុបចោល; artifact លម្អិតរបស់
pipeline (ដែលអាចរួមមានតួ upstream/client និង stream chunks) មិនត្រូវបានរក្សាទុកទេ។
Semantic, idempotency និង reasoning-replay caches រំលងការអាន និងការសរសេរសម្រាប់
សំណើនោះ។ សំណើរបស់អ្នកផ្ដល់សេវា និងការឆ្លើយតបដែល client មើលឃើញនៅតែមិនផ្លាស់ប្ដូរ។
បៃ keepalive ដំបូងត្រូវបានបង្ហូរចេញពី buffer បណ្ដោះអាសន្ន នៅពេល artifact លម្អិត
ត្រូវបានលុបចោល។ ការព្រមាន EventStream ដែលមានទម្រង់មិនត្រឹមត្រូវរបស់ Kiro រាយការណ៍
តែចំនួនបៃនៃ payload ប៉ុណ្ណោះ មិនរាយការណ៍ខ្លឹមសាររបស់វា ឬកំហុសឆៅរបស់ JSON parser ទេ។
ការនេះមិនអះអាងថា រាល់ diagnostic របស់អ្នកផ្ដល់សេវា/plugin ដែលមិនពាក់ព័ន្ធទាំងអស់
ត្រូវបានធ្វើសវនកម្មទេ; ការត្រួតពិនិត្យ retained-sink ទូលំទូលាយជាងនេះត្រូវបានតាមដានក្នុង #11658។

វដ្ដជីវិតខាងក្នុង `/api/modality-bridge/video/drilldown` គឺជា cache substrate ដាច់ដោយឡែក
ដែលមាន loopback/token-authenticated។ ប្រតិបត្តិការនីមួយៗក៏តម្រូវឱ្យមាន canonical opaque
principal ID ផងដែរ។ មុនពេលអ្នកហៅក្នុងបរិស្ថាន production ត្រូវបានបើកឱ្យប្រើ វាត្រូវតែ
ទាញយក ID នោះពី tenant ដែលបានផ្ទៀងផ្ទាត់អត្តសញ្ញាណ ហើយមិនត្រូវបញ្ជូនបន្តតម្លៃដែល
client បានជ្រើសរើសឡើយ។ Cache keys ភ្ជាប់ principal នោះទៅនឹង session និង
video-reference IDs ដែលមានទម្រង់ canonical រក្សាទុកតែ keys ដែលបានមកពី SHA-256
របស់ពួកវា ហើយកំណត់ដែនទាំងការអាន និងការលុបឱ្យស្ថិតក្រោម principal ដូចគ្នា។ cache
រក្សាទុកយ៉ាងច្រើនបំផុត 16 derived JPEG frames ក្នុងមួយ entry ធ្វើឱ្យពួកវាផុតកំណត់
បន្ទាប់ពីដប់នាទី ហើយគាំទ្រការអាន `start`/`end` ដែលមានព្រំដែន ឬការលុប session
យ៉ាងច្បាស់លាស់។

principal នីមួយៗត្រូវបានកំណត់ត្រឹម 16 entries និងទិន្នន័យ canonical JPEG ទំហំ 64 MiB។
ដែនកំណត់ទាំងនោះឯករាជ្យពីដែនកំណត់សកល 64-entry/256 MiB: សម្ពាធលើកូតា principal
បណ្ដេញចេញតែ entries ដែលបានប្រើថ្មីតិចបំផុតរបស់ principal នោះ មុនពេលពិចារណាការបណ្ដេញចេញ
តាម global LRU។ entries ដែលផុតកំណត់ត្រូវបានសម្អាតចេញពីទាំងគណនេយ្យ principal និង
គណនេយ្យសកល នៅពេលមានសកម្មភាព cache ខណៈដែលការលុបចោល និងការផ្ទៀងផ្ទាត់ដែលបរាជ័យ
មិនរក្សាទុកការជំនួសដែលបានធ្វើតែផ្នែកខ្លះទេ។

ឃ្លាំងសម្ងាត់បដិសេធ Base64 ដែលមិនមានទម្រង់ស្តង់ដារ padding លើសកម្រិត មេឌៀដែលមិនមែនជា JPEG ឯកសារ JPEG ខូចទ្រង់ទ្រាយ ឬ
ត្រូវបានកាត់ខ្លី និង JPEG ដែលបង្កើតការព្រមានក្នុងអំឡុងពេលឌិកូដរូបភាពពេញលេញដោយ `sharp`
ក្នុងដែនកំណត់។ វាអ៊ិនកូដរូបភាពដែលបានទទួលយកនីមួយៗឡើងវិញជា JPEG ស្តង់ដារ កំណត់ទទឹង និងកម្ពស់
ពីបៃដែលបានឌិកូដ ជំនួសឱ្យការជឿទុកចិត្តលើវាលពីអ្នកហៅ ហើយបោះបង់បៃបែប
polyglot ដែលនៅសល់នៅខាងចុង ជំនួសឱ្យការរក្សាទុកវា។ មានតែបណ្ដុំទិន្នន័យបង្ហាប់ស្តង់ដារក្នុងដែនកំណត់ប៉ុណ្ណោះ
ដែលត្រូវបានរាប់បញ្ចូលក្នុងកូតាទាំងពីរ។ ដែនកំណត់ការបញ្ជូន JSON រួមបញ្ចូល overhead របស់ Base64 សម្រាប់កម្រិតអតិបរមា
32 MiB នៃ input ដែលបានឌិកូដ។ រាល់
derivation ដែលបានរក្សាទុក កត់ត្រាទ្រង់ទ្រាយ/គុណភាពបង្ហាញ JPEG ដែលបានផ្ទៀងផ្ទាត់ គោលការណ៍ sampling
កំណែ derivation ពេលវេលាបង្កើត content hash ដែលគណនាដោយម៉ាស៊ីនមេ និងឯកសារយោងទៅ parent
ដែលបាន hash រួមទាំង parent-content hash របស់អ្នកហៅដែលទុកចិត្តបាន។ ការលុបចោលត្រូវបានពិនិត្យ
នៅចន្លោះដំណាក់កាលឌិកូដ/hash អសមកាល មុនពេល commit ទៅឃ្លាំងសម្ងាត់ជាអាតូមិក។

ផ្នែកការងារនេះមិនទាន់ភ្ជាប់ producer សម្រាប់ production ទៅកាន់ route នៅឡើយទេ ហើយក៏មិន
ផ្ដល់ការជ្រើសរើស variant ដែលមានគុណភាពបង្ហាញច្រើនកម្រិតដែរ។ ដូច្នេះ ផ្លូវ request របស់ Video Bridge
ដែលមានតម្លាភាព មិនបង្កើតការងារបន្ថែមទេ ខណៈដែលការបង្កើត principal ដែលចងភ្ជាប់នឹង tenant និង
វដ្តជីវិតពេញលេញនៃ FU-08 ដែលមានគុណភាពបង្ហាញច្រើនកម្រិត នៅតែជាការងារបន្តដែលបានបញ្ជាក់យ៉ាងច្បាស់
ជំនួសឱ្យការចងក្រងឯកសារថាជាឥរិយាបថដែលបានបញ្ចប់រួចរាល់។

Frame ត្រូវបានបង្កើត caption តាមលំដាប់លំដោយដោយប្រើម៉ូដែល Video ដែលបានកំណត់រចនាសម្ព័ន្ធ។ Video override ទទេ
ទទួលយកការកំណត់របស់ Vision; ប្រសិនបើទាំងពីរទទេ auto-router របស់ Vision
នឹងជ្រើសរើសម៉ូដែលដែលគាំទ្រ vision និងមានប្រសិទ្ធភាព។ Caption ដែលជោគជ័យ
ជំនួស part ដើមដោយ prefix `[Video description:` ដែលមានស្ថិរភាព ហើយក៏
សម្គាល់អត្ថបទថាជាការសង្កេតដែលបានមកពីមេឌៀមិនគួរឱ្យទុកចិត្ត និងប្រាប់ម៉ូដែលបន្តបន្ទាប់
កុំឱ្យអនុវត្តតាមសេចក្ដីណែនាំដែលរកឃើញក្នុងមេឌៀ។ Cache key របស់ frame-caption
រួមមានបៃ JPEG, prompt, timestamp និងម៉ូដែលដែលមានប្រសិទ្ធភាព; មានតែ
caption ដែលជោគជ័យប៉ុណ្ណោះដែលត្រូវបានរក្សាទុកក្នុងឃ្លាំងសម្ងាត់។ Cache entry រក្សាទុកម៉ូដែល producer ដែលបានជោគជ័យពិតប្រាកដ
រួមទាំង fallback model; bridge រាយការណ៍ជា `mixed` នៅពេល frame ផ្សេងៗគ្នា
ត្រូវបានបង្កើតដោយម៉ូដែលផ្សេងៗគ្នា។ Cache hit ប្រើ producer identity នោះឡើងវិញ
ជំនួសឱ្យការដាក់ស្លាកវាឡើងវិញថាជាផែនការ routing ដែលបានស្នើ។ ឃ្លាំងសម្ងាត់លទ្ធផលវីដេអូទាំងមូល
ប្រើ key ផ្អែកលើរាល់ input ដែលផ្លាស់ប្ដូរ output — prompt, ម៉ូដែលដែលមានប្រសិទ្ធភាព
គោលការណ៍ sampling, ចំនួន frame, mode វិភាគ semantic, fingerprint SHA-256
របស់ focus hint ដែលបាន normalize, focus window, `transcript`,
`audioTranscript` និង flag របស់ contact-sheet — ដូច្នេះ ការផ្លាស់ប្ដូរវិមាត្រណាមួយក្នុងចំណោមនោះ
នឹងក្លាយជា cache miss មិនមែនជាការប្រើទិន្នន័យចាស់ឡើងវិញទេ។ កំណែគោលការណ៍ visual dedup
threshold និងចំនួន candidate-frame ក្នុងដែនកំណត់ ក៏ត្រូវបានបញ្ជាក់យ៉ាងច្បាស់នៅក្នុង
result-cache key និង metadata ផងដែរ; ដូច្នេះ ការផ្លាស់ប្ដូរគោលការណ៍មិនអាចប្រើ
ការពិពណ៌នាវីដេអូទាំងមូលដែលចាស់ឡើងវិញបានទេ។ Metadata របស់ result-cache v4 រក្សាទុក mode និង
fingerprint ប៉ុន្តែមិនរក្សាទុកកិច្ចការឆៅរបស់អ្នកប្រើឡើយ។ Metadata របស់ guardrail រាយការណ៍ទាំង
mode វិភាគដែលបានស្នើ និង mode ដែលមានប្រសិទ្ធភាព; mode `focused` ដែលបានស្នើ ប៉ុន្តែគ្មាន
អត្ថបទអ្នកប្រើដែលអាចប្រើបាន ត្រូវបានរាយការណ៍ថាមានប្រសិទ្ធភាពជា `full`។

Guardrail ស្រង់យករាល់ video part ដែលគាំទ្រ ប៉ុន្តែពិពណ៌នាមិនលើសពី
`modalityBridgeVideoMaxVideos`។ សម្រាប់ target ដែលបានបញ្ជាក់ថាមាន
`supportsVideo === false` វីដេអូដែលបរាជ័យ និងលើសដែនកំណត់ ត្រូវបានបម្លែងជា
text marker សុវត្ថិភាពដែលបញ្ជាក់ច្បាស់ ដើម្បីកុំឱ្យមានវីដេអូឆៅនៅសល់។ នៅពេល capability មិនត្រូវបានដឹង
part ទាំងនោះនៅតែរក្សា video carrier របស់វា; fallback transcript ណាមួយ
នឹងអនុវត្តតាមការបម្លែងអត្ថបទក្នុងដែនកំណត់ខាងលើ។ Target ដែលមាន `supportsVideo === true`
រំលង bridge។ Abort signal របស់ client request ត្រូវបានបញ្ជូនបន្តតាមរយៈការ download, broker queue,
subprocess និងការហៅ caption; ការបោះបង់នឹងបញ្ឈប់នៅចន្លោះវីដេអូនីមួយៗ ហើយមិនដែល fail open
ទៅកាន់មេឌៀឆៅឡើយ។

ការកំណត់ runtime ត្រូវបានរក្សាទុកក្នុង DB និងផ្ទៀងផ្ទាត់ដោយ Zod៖

| Key                                 | លំនាំដើម    | ជួរ / ឥរិយាបថ                                                                                             |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Runtime ជាជម្រើស ត្រូវបើកប្រើដោយចេតនា                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` រក្សាទុក caption ទូទៅ; `focused` ប្រើ context អ្នកប្រើចុងក្រោយដែលមិនគួរឱ្យទុកចិត្ត និងមានដែនកំណត់  |
| `modalityBridgeVideoModel`          | `""`        | ទទួលយកម៉ូដែល Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ឬ `segment_aware` តាមសមាមាត្រ; នៅពេល detector បរាជ័យ វានឹង fallback ទៅ `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

តម្លៃ timeout របស់ Video ចាស់ដែលបានរក្សាទុក និងលើសពី 120 វិនាទី ត្រូវបានកាត់ឱ្យស្មើ
deadline របស់ broker; ការសរសេរការកំណត់ថ្មីដែលលើសពីដែនកំណត់នោះត្រូវបានបដិសេធ។
`GET /api/modality-bridge/video/runtime` ទាមទារ loopback locality ដែលបានបោះត្រា និងទុកចិត្តបាន
មុនពេល authentication ឬ runtime probing បន្ទាប់មកទាមទារ management
auth។ វាត្រឡប់តែ `available` កំណែ FFmpeg/ffprobe ដែលបានសម្អាត និងហេតុផលថេរមួយ
នៅពេល runtime មិនអាចប្រើបាន។ Endpoint ស្រង់ទិន្នន័យខាងក្នុងមិនមែនជា
upload API សាធារណៈទេ៖ broker queue ពេញនឹងត្រឡប់ `503` រួមជាមួយ `Retry-After` ការផ្ដាច់ការតភ្ជាប់
របស់អ្នកហៅនឹងត្រឡប់ `499` ហើយ deadline ថេររបស់ broker នឹងត្រឡប់ `504`។ Response ដែលបានបម្លែង បន្ថែម
`video->text;model=<visionModel>;parts=<videos>` ទៅក្នុង header កណ្ដាល
`x-omniroute-modality-bridge` ដោយមិនដក segment របស់ Vision ឬ Audio ចេញ។

### កម្មវិធីលាក់ PII (`piiMasker.ts`)

ដំណើរការនៅ **ទាំងពីរ** ដំណាក់កាល។

- **`preCall`** ក្លូន payload រួចដើរឆ្លងកាត់ `system`, `messages`, `input` និង
  `prompt` (រួមទាំងធាតុដែលជាខ្សែអក្សរធម្មតា) ហើយអនុវត្ត `processPII()` (ពី
  `@/shared/utils/inputSanitizer`) ទៅលើវាល `content`/`text` ដែលជាខ្សែអក្សរ។ នៅពេល
  `PII_REDACTION_ENABLED=true` PII ដែលបានរកឃើញនឹងត្រូវបានលាក់នៅក្នុង
  payload ដែលផ្ញើចេញ។ វាមិនអាស្រ័យលើ `INPUT_SANITIZER_MODE` ទេ (ដែលគ្រប់គ្រងតែ
  គោលការណ៍ការចាក់បញ្ចូល prompt ប៉ុណ្ណោះ)។ នៅពេលការលាក់ត្រូវបានបិទ ការហៅនឹងកត់ត្រា
  ចំនួននៃការរកឃើញដោយមិនសរសេរខ្លឹមសារឡើងវិញ។
- **`postCall`** ក្លូន response ជម្រៅពេញលេញ រួចដំណើរការ `sanitizePIIResponse()` បូកនឹង
  ឧបករណ៍បិទបាំងសម្រាប់ទម្រង់ Responses API (`maskResponsesOutput` — គ្របដណ្តប់
  `output_text` និង `output[].content[].text`)។ ប្រសិនបើមានការលាក់ណាមួយកើតឡើង
  response ដែលបានកែប្រែនឹងជំនួស response ដើម។

Guardrail មិនដែលទប់ស្កាត់ទេ; វាគ្រាន់តែបន្ថែមចំណារពន្យល់ (`meta.detections`,
`meta.redacted`) ឬសរសេរឡើងវិញប៉ុណ្ណោះ។

#### ការជ្រើសរើសតាមប្រភេទ លំនាំផ្ទាល់ខ្លួន និងបញ្ជររាប់ការរកឃើញ

**Dashboard → Settings → Security → PII masking** ជ្រើសរើស _អ្វី_ ដែលត្រូវបិទបាំង។ វា
មិនបើកការបិទបាំងទេ៖ ការបើកនៅតែគ្រប់គ្រងដោយ `PII_REDACTION_ENABLED` (request) និង
`PII_RESPONSE_SANITIZATION` (response + SSE) ដែលទាំងពីរត្រូវបានបិទតាមលំនាំដើម។

- **ការជ្រើសរើសតាមប្រភេទ** — id ដែលភ្ជាប់មកជាមួយត្រូវបានរាយក្នុង
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`)។ ការមិនកំណត់មានន័យថាជ្រើសគ្រប់
  ប្រភេទ (ឥរិយាបថមុនពេលមានការកំណត់នេះ)។ លំនាំ `ssn_us` របស់ម៉ាស៊ីនដំណើរការ
  request ត្រូវបានផ្គូផ្គងទៅ `ssn`។ គំរូ (Minimal, Standard, Financial,
  Brazilian, USA, Full) គ្រាន់តែបំពេញប្រអប់ធីកក្នុង UI ប៉ុណ្ណោះ។
- **លំនាំផ្ទាល់ខ្លួន** — អាចមានលំនាំ regex ឬ wildcard រហូតដល់ 20 (`*` = តួអក្សរ
  មិនមែនចន្លោះរហូតដល់ 64 តួ, `?` = មួយតួ)។ ការផ្គូផ្គងនឹងក្លាយជា `[CUSTOM_REDACTED]`។
  គ្រប់លំនាំទាំងអស់ត្រូវឆ្លងកាត់ `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`)៖ អតិបរមា 500 តួអក្សរ, flags កំណត់ត្រឹម
  `g i m s u`, ត្រូវតែអាច compile បាន, ត្រូវតែឆ្លងកាត់ `safe-regex` (ការថយក្រោយ
  ដ៏មហន្តរាយ) និងមិនត្រូវផ្គូផ្គងខ្សែអក្សរទទេ ឬ placeholder សម្រាប់ការលាក់ទេ។
  លំនាំដែលបរាជ័យនឹងត្រូវបដិសេធនៅពេលរក្សាទុក និងនៅពេលសាកល្បង ហើយជួរទិន្នន័យដែលបានរក្សាទុក
  ដែលបរាជ័យនឹងត្រូវរំលងនៅ runtime ជំនួសឱ្យការធ្វើ compile។ លំនាំផ្ទាល់ខ្លួន
  ដំណើរការតែនៅពេលការបិទបាំងត្រូវបានបើកប៉ុណ្ណោះ។
- **បញ្ជររាប់ការរកឃើញ** — ចំនួនតាមប្រភេទ (មិនរក្សាទុកតម្លៃដែលបានផ្គូផ្គងឡើយ) ត្រូវបានរក្សា
  ក្នុង memory និងកំណត់ឡើងវិញពេល restart (`src/lib/pii/piiDetectionStats.ts`)។ វា
  កើនឡើងតែនៅពេលការបិទបាំងត្រូវបានបើកប៉ុណ្ណោះ។

ការកំណត់ត្រូវបានរក្សាទុកក្នុងតារាង `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) និងត្រូវបានអានតាមរយៈ cache រយៈពេល 1 វិនាទី។ API៖

| Method | Path                     | គោលបំណង                                                                                    |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | ស្ថានភាព flag, `enabledTypes`, `customPatterns`, បញ្ជររាប់ការរកឃើញ                         |
| `PUT`  | `/api/settings/pii`      | ជំនួស `enabledTypes` (`null` = ទាំងអស់) និង/ឬ `customPatterns`                             |
| `POST` | `/api/settings/pii/test` | សាកល្បងលំនាំមួយដោយមិនរក្សាទុក ទល់នឹងគំរូទិន្នន័យអតិបរមា 8 KB; គ្មានអ្វីត្រូវបានរក្សាទុកឡើយ |

ទាំងបីតម្រូវឱ្យមាន management auth និងធ្វើសុពលកម្ម body ដោយប្រើ Zod
(`src/shared/validation/schemas/piiSettings.ts`)។

### ការចាក់បញ្ចូល Prompt (`promptInjection.ts`)

រកឃើញរចនាសម្ព័ន្ធបង្កគ្រោះថ្នាក់ក្នុងខ្លឹមសារដែលផ្គត់ផ្គង់ដោយអ្នកប្រើ និងអនុវត្ត
គោលការណ៍ដែលបានកំណត់។ ឥរិយាបថត្រូវបានគ្រប់គ្រងដោយ environment variables និង constructor
options៖

| ការកំណត់        | Env var                                                                                               | លំនាំដើម | ឥទ្ធិពល                                                                                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| បានបើក          | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | នៅពេល `false` guardrail នឹងបញ្ចប់ដំណើរការភ្លាមៗ។                                                                                                                                                                            |
| របៀប            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | គោលការណ៍ការចាក់បញ្ចូល៖ `block`, `warn` ឬ `log`។ (`redact` ត្រូវបានទទួលយកសម្រាប់ភាពត្រូវគ្នាថយក្រោយ ប៉ុន្តែវា **មិន** លុបអត្ថបទចាក់បញ្ចូលទេ; ការសរសេរ PII ក្នុង request ឡើងវិញត្រូវបានគ្រប់គ្រងដោយ `PII_REDACTION_ENABLED`។) |
| កម្រិតទប់ស្កាត់ | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | កម្រិតធ្ងន់ធ្ងរអប្បបរមាដែលតម្រូវឱ្យមានដើម្បីទប់ស្កាត់។ កម្រិតមធ្យមគឺសម្រាប់តែការសង្កេតតាមលំនាំដើម។                                                                                                                          |

**លំដាប់អាទិភាពរបស់របៀប** (`getMode`)៖ `options.mode` របស់អ្នកហៅ →
ការកំណត់ជំនួសតាម **DB feature-flag** របស់ `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`។ ដូច្នេះ ការកំណត់ជំនួសពី dashboard មានអាទិភាពលើ env vars ដែលអនុញ្ញាតឱ្យ Feature
Flags UI គ្រប់គ្រង guard ដែលកំពុងដំណើរការភ្លាមៗ (មិនចាំបាច់ restart)។ ការអានពី DB មានលក្ខណៈ fail-safe៖
ប្រសិនបើវាមានកំហុស guard នឹងត្រឡប់ទៅប្រើឥរិយាបថផ្អែកលើ env ហើយនៅពេលគ្មាន
ការកំណត់ជំនួស ឥរិយាបថនឹងដូចគ្នាទាំងស្រុងនឹងការកំណត់តាម env តែប៉ុណ្ណោះ។

ប្រភពរកឃើញ៖

1. `sanitizeRequest()` ពី `@/shared/utils/inputSanitizer` (សំណុំឧបករណ៍រកឃើញរួម
   ដែលត្រូវបានប្រើនៅកន្លែងផ្សេងទៀតក្នុង pipeline)។
2. `DEFAULT_GUARD_PATTERNS` ដែលភ្ជាប់មកជាមួយ (បច្ចុប្បន្នមាន `system_override_inline` និង
   `markdown_system_block` ដែលទាំងពីរមានកម្រិតធ្ងន់ធ្ងរ `high`)។
3. `customPatterns` ជាជម្រើសដែលបានបញ្ជូនតាម constructor options (ខ្សែអក្សរ, regex
   ឬកំណត់ត្រា `{ name, pattern, severity }`)។

នៅពេល `mode === "block"` **ហើយ** យ៉ាងហោចណាស់មានការរកឃើញមួយដែលឈានដល់កម្រិត
ភាពធ្ងន់ធ្ងរ `preCall` នឹងត្រឡប់ `{ block: true, message: "Request rejected:
suspicious content detected" }`។ នៅក្នុងរបៀប `warn`/`log` guardrail នឹងកត់ត្រា ប៉ុន្តែ
អនុញ្ញាតឱ្យការហៅបន្ត។ Helper រួម `evaluatePromptInjection()` ក៏ត្រូវបាន export
សម្រាប់អ្នកហៅដែលត្រូវការវាយតម្លៃ prompt ដោយមិនឆ្លងកាត់ registry ផងដែរ។

**ដែនកំណត់នៃការស្កេន (v3.8.20):** ឧបករណ៍រកឃើញពិនិត្យតែ **16 KB ដំបូង** នៃ
អត្ថបទ prompt ដែលបានភ្ជាប់បញ្ចូលគ្នា — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) នៅក្នុង
`src/shared/utils/inputSanitizer.ts`។ ទាំង `detectInjection()` និង
`evaluatePromptInjection()` អនុវត្ត `slice(0, MAX_INJECTION_SCAN_BYTES)` មុននឹងដំណើរការ
pattern loop។ សេចក្តីបង្គាប់សម្រាប់ injection ជាទូទៅស្ថិតនៅជិតផ្នែកខាងលើនៃ input ដូច្នេះវា
កំណត់ការប្រើប្រាស់ regex CPU/GC លើ payload ដែលមានទំហំច្រើនរយ KB ដោយមិនបន្ថយប្រសិទ្ធភាពនៃការរកឃើញទេ (សូមមើល
#3932, #4041)។

### ឧបករណ៍បិទបាំងព័ត៌មានសម្ងាត់ (`credentialMasker.ts`)

ដំណើរការនៅលើដំណាក់កាល **ទាំងពីរ** និងស្ថិតនៅចុងក្រោយក្នុងលំដាប់លំនាំដើម (អាទិភាព `95`)។ វាលុបបាំង
pattern របស់ API key / secret token ដែលគេស្គាល់ជាទូទៅ ចេញពី outbound payload (ខ្លឹមសារ
សារ, argument នៃ tool-call, លទ្ធផលរបស់ tool) **និង** response របស់ provider ដូច្នេះ
ព័ត៌មានសម្ងាត់ដែលបានបិទភ្ជាប់ទៅក្នុង prompt (ឬត្រូវបានត្រឡប់មកវិញដោយលទ្ធផលរបស់ tool) នឹងមិនលេចធ្លាយ
ទៅកាន់ upstream provider ឬត្រឡប់ទៅ client វិញឡើយ។

- **ត្រូវតែជ្រើសរើសបើកប្រើ**, ដោយអនុវត្តតាមអនុសញ្ញាដូចគ្នានឹងការលុបបាំង PII (នៅជិត Hard Rule #20):
  វាត្រូវបានបិទ លុះត្រាតែ `settings.credentialRedactionEnabled === true` **ឬ**
  `CREDENTIAL_REDACTION_ENABLED=true`។ នៅពេលវាបិទ guardrail នឹងមិនធ្វើអ្វីទាំងអស់ —
  វាមិនដែលរារាំង និងមិនដែលសរសេរឡើងវិញទេ។
- `redactCredentials()` ឆ្លងកាត់ payload/response tree ទាំងមូល (`walkValue()`,
  មានសុវត្ថិភាពពី prototype pollution និងមានសុវត្ថិភាពពី cycle តាមរយៈ `WeakSet`) ហើយជំនួស match ទាំងឡាយដោយ
  placeholder `[REDACTED:<type>]` ដោយ clone តែ branch ដែលពិតជាបានផ្លាស់ប្តូរប៉ុណ្ណោះ។
- `CREDENTIAL_PATTERNS` គ្របដណ្តប់ key របស់ LLM provider (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token របស់ VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), payment key (Stripe, Square), cloud
  key (AWS access key, Twilio, SendGrid, Mailgun), private key / JWT,
  connection string ដែលមានព័ត៌មានសម្ងាត់ (`mongodb://user:pass@...` ជាដើម) និង
  pattern ទូទៅសម្រាប់តម្លៃ header `Authorization`/`x-api-key`/`api-key`/`apikey`។
  Key ដែលមានទម្រង់ជា header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ត្រូវបានលុបបាំងតាមរចនាសម្ព័ន្ធ (តែតម្លៃប៉ុណ្ណោះ ដោយរក្សាទុក scheme prefix ដូចជា
  `Bearer `/`Basic `) ជាជាងប្រើ generic text regex។
- Guardrail នេះមិនដែលរារាំងទេ; វាគ្រាន់តែសរសេរឡើងវិញ (`modifiedPayload` /
  `modifiedResponse`) និងបន្ថែម annotation (`meta.credentialsRedacted`, `meta.count`)។

ឧបករណ៍ការពារ regression៖ `tests/unit/credential-masker-guardrail.test.ts`។

## កិច្ចសន្យាមូលដ្ឋាន (`base.ts`)

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
  block?: boolean; // true ធ្វើឱ្យសង្វាក់បញ្ចប់ភ្លាមៗ
  message?: string; // បង្ហាញនៅពេលរារាំង
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // ត្រូវបានត្រឡប់ដោយ preCall ដើម្បីសរសេរសំណើឡើងវិញ
  modifiedResponse?: TValue; // ត្រូវបានត្រឡប់ដោយ postCall ដើម្បីសរសេរការឆ្លើយតបឡើងវិញ
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

Guardrail បញ្ជាក់ថា "គ្មានការផ្លាស់ប្តូរ" ដោយត្រឡប់ `void`, `{}`, ឬ
`{ block: false }`។ ការត្រឡប់ `modifiedPayload`/`modifiedResponse` នឹងជំនួស
តម្លៃដែលកំពុងហូរកាត់សង្វាក់ សម្រាប់ guardrail ដែលនៅខាងក្រោម។
`signal?: AbortSignal` នាំវដ្តជីវិតរបស់អ្នកហៅចូលទៅក្នុង guardrail។ ការបោះបង់សំណើគឺជាករណីលើកលែង fail-open ដែលធ្វើឡើងដោយចេតនា៖ media bridge បញ្ឈប់ការងារ និងសម្អាត ដោយមិនស្ដារ media ឆៅទៅកាន់គោលដៅដែលដឹងថាមិនគាំទ្រវាឡើយ។

## បញ្ជីចុះឈ្មោះ (`registry.ts`)

Singleton `guardrailRegistry` ផ្តល់នូវ៖

- `register(guardrail)` — បន្ថែម guardrail មួយ (ឬជំនួសតាមឈ្មោះដែលបានធ្វើ normalization)
  ហើយតម្រៀបឡើងវិញតាម `priority` ពីតូចទៅធំ។
- `clear()` / `list()` — មុខងារជំនួយផ្នែករដ្ឋបាល។
- `runPreCallHooks(payload, context)` — ដំណើរការឆ្លងកាត់ guardrail ដែលសកម្ម បញ្ជូន
  payload បន្តតាម `modifiedPayload` ហើយឈប់នៅ `block: true` ដំបូង។
- `runPostCallHooks(response, context)` — ដំណើរការដូចគ្នាសម្រាប់ផ្នែកការឆ្លើយតប។
- `resetGuardrailsForTests({ registerDefaults })` — សម្អាតស្ថានភាព ហើយអាច
  ចុះឈ្មោះតម្លៃលំនាំដើមឡើងវិញ ដើម្បីបំបែកការធ្វើតេស្តឱ្យដាច់ដោយឡែកស្អាត។

Runner ទាំងពីរត្រឡប់ `{ blocked, payload|response, results, guardrail?, message? }`
ដែល `results` ជាអារេនៃ record `GuardrailExecutionResult` ដែលរួមបញ្ចូល field
`blocked`, `skipped`, `modified`, `error`, និង `meta` សម្រាប់ guardrail នីមួយៗ
ដែលមានប្រយោជន៍សម្រាប់ការតាមដាន។

### ការបិទ Guardrail តាមសំណើនីមួយៗ

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` ប្រមូលបញ្ជីឈ្មោះ
guardrail ដែលបានលុបធាតុស្ទួន និងត្រូវរំលងសម្រាប់សំណើបច្ចុប្បន្ន។
មាន channel ចំនួនប្រាំ ដែលត្រូវបានអានតាមលំដាប់នេះ ហើយបញ្ចូលគ្នាជាបញ្ជីតែមួយ
(ការលេចឡើងដំបូងឈ្នះនៅពេលលុបធាតុស្ទួន)៖

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` ក្នុង body របស់សំណើ (កម្រិតកំពូល)
3. `metadata.disabledGuardrails` ក្នុង body របស់សំណើ (តែនៅពេល `metadata` ជា object)
4. Header `x-omniroute-disabled-guardrails`
5. Header ចាស់ `x-disabled-guardrails`

Channel ទាំងប្រាំត្រូវបានបញ្ចូលគ្នា រួមទាំង header ទាំងពីរ៖ ការផ្ញើទាំង
`x-omniroute-disabled-guardrails` និង `x-disabled-guardrails` នឹងរំលងសំណុំរួមនៃ
បញ្ជីរបស់ពួកវា ហើយ header សម័យថ្មីដែលទទេលែងលាក់ header ចាស់ទៀតហើយ
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), បានកែសម្រួលក្នុង
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805))។

តម្លៃអាចជាអារេនៃ string ឬ string ដែលបំបែកដោយសញ្ញាក្បៀស។ ឈ្មោះត្រូវបានដកចន្លោះ
នៅដើមនិងចុង ហើយធ្វើ normalization ទៅជា kebab-case អក្សរតូច (`pii_masker` → `pii-masker`)
ព្រមទាំងលុបធាតុទទេចោល។ លទ្ធផលត្រូវបានបញ្ជូនតាម `context.disabledGuardrails`
ទៅកាន់ registry ដែលរំលង guardrail ដែលផ្គូផ្គង (`skipped: true` ក្នុង `results`)។

បញ្ជីបិទនេះប៉ះពាល់តែ **registry** ប៉ុណ្ណោះ។ របៀប `block` សម្រាប់ prompt injection
គឺជាព្រំដែនចាំបាច់៖ middleware សម្រាប់ការពារ injection
(`src/middleware/promptInjectionGuard.ts`) ហៅ `evaluatePromptInjection()`
ដោយគ្មានបញ្ជីបិទណាមួយដែលគ្រប់គ្រងដោយអ្នកហៅ (ការហៅ
`resolveDisabledGuardrails({ body })` ដែលលែងប្រើ ហើយធ្លាប់ត្រូវបានធ្វើ ត្រូវបានលុបចេញក្នុង
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)) ដូច្នេះសំណើ
ដែលបិទ `prompt-injection` នៅតែត្រូវបានបដិសេធក្នុងរបៀប `block`។ នេះជាការរចនា
ដោយចេតនា។ Channel សម្រាប់បិទត្រូវបានគ្រប់គ្រងដោយអ្នកហៅ (body របស់សំណើ,
metadata, headers) ហើយអ្នកហៅមិនត្រូវអាចបិទការគ្រប់គ្រងសុវត្ថិភាពដែលប្រតិបត្តិករបានកំណត់ឡើយ
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))។ ការរួមបញ្ចូល
header ពី [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ផ្លាស់ប្តូរតែ guardrail ណាខ្លះក្នុង registry ដែលត្រូវរំលងប៉ុណ្ណោះ វាមិនអនុញ្ញាតឱ្យ client
រំលង middleware ទេ។ គោលការណ៍ guardrail ចាំបាច់តាម key និងតាម group
ត្រូវបានតាមដានក្នុង RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417)។
សូមមើល [វិសាលភាពគ្របដណ្តប់ និងដែនកំណត់](#coverage-and-limits)។

## លំដាប់នៃការប្រតិបត្តិ

សម្រាប់សំណើនីមួយៗដែលឆ្លងកាត់ `src/sse/handlers/chat.ts` និង
`open-sse/handlers/chatCore.ts` (ផ្លូវក្នុងក្រុម chat ដែលបានរាយនៅក្រោម
[វិសាលភាព និងដែនកំណត់](#coverage-and-limits))៖

1. `resolveDisabledGuardrails(...)` បង្កើតបញ្ជីរំលងពី API key, body,
   និង headers។
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ដំណើរការ guardrails តាមលំដាប់
   អាទិភាពពីទាបទៅខ្ពស់៖
   - Guardrails ដែលត្រូវបានបិទ ត្រូវបានកត់ត្រាថា `skipped`។
   - `preCall` របស់ guardrail នីមួយៗអាចសរសេរ payload ឡើងវិញតាមរយៈ `modifiedPayload`។
   - `block: true` ដំបូងនឹងបញ្ឈប់ខ្សែសង្វាក់ភ្លាមៗ ហើយ handler នឹងត្រឡប់
     response បដិសេធពី guardrail។
3. Payload ដែលអាចត្រូវបានសរសេរឡើងវិញ នឹងបន្តទៅកាន់ combo routing និងការបញ្ជូន
   ទៅ upstream។
4. **សម្រាប់ non-streaming ប៉ុណ្ណោះ៖** បន្ទាប់ពី response ត្រូវបានរៀបចំរួច
   `guardrailRegistry.runPostCallHooks(...)` នឹងដំណើរការខ្សែសង្វាក់ដដែលលើ
   response។ `block: true` នៅទីនេះនឹងបោះបង់ upstream response ហើយត្រឡប់ HTTP 400។ Streamed responses នឹងរំលងជំហាននេះទាំងស្រុង។

Guardrails ដែលបោះ exception ត្រូវបានកត់ត្រាជាមួយ `error: <message>` និងចុះកំណត់ហេតុតាមរយៈ
`logger.warn` ប៉ុន្តែខ្សែសង្វាក់នៅតែបន្ត — តាមការរចនា វាអនុញ្ញាតឱ្យបន្តនៅពេលមានកំហុស។

## វិសាលភាព និងដែនកំណត់

Guardrail registry ត្រូវបានភ្ជាប់ទៅក្នុង chat pipeline ប៉ុណ្ណោះ។ ដែនកំណត់ទាំងនេះត្រូវបាន
កំណត់ជាប់ដោយ `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` និង
`tests/unit/guardrail-pipeline-characterization.test.ts`; សូមកែប្រែ tests ទាំងនោះ
ដោយចេតនា នៅពេលឥរិយាបថផ្លាស់ប្តូរ។

### កន្លែងដែល hooks ដំណើរការ

| Hook / ការគ្រប់គ្រង               | ដំណើរការលើ                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                 | សំណើដែលគ្រប់គ្រងដោយ `handleChat` (`src/sse/handlers/chat.ts`)៖ `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (និង `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, និង Telegram chat proxy។ រួមទាំង dashboard test endpoint `/api/guardrails/test` ផងដែរ។ ការទប់ស្កាត់មុនការហៅនឹងត្រឡប់ HTTP 400។ |
| `runPostCallHooks`                | Chat responses ប្រភេទ **non-streaming** ប៉ុណ្ណោះ (`open-sse/handlers/chatCore/nonStreamingResponse.ts`)។ Streamed responses មិនដែលទៅដល់វាទេ។                                                                                                                                                                                                                                                                                        |
| Streaming PII                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`) ដែលត្រូវបានភ្ជាប់ជា pipeline នៅក្នុង `streamingPipeline.ts` នៅពេល `PII_RESPONSE_SANITIZATION` បើក។ វាមិនមែនជា guardrail ទេ ដូច្នេះ disable channels មិនមានឥទ្ធិពលលើវាឡើយ។                                                                                                                                                                                              |
| Injection-guard middleware (ចាស់) | រាល់ផ្លូវ `/v1` ដែលផ្ទុក prompt រួមទាំងផ្លូវក្នុងក្រុម chat ផងដែរ (សូមមើល [វិសាលភាពផ្លូវ](#injection-guard-route-coverage--red-team-phase-8--block-d))។ សម្រាប់ prompt injection ប៉ុណ្ណោះ។                                                                                                                                                                                                                                          |

### អ្វីដែលមិនត្រូវបានគ្របដណ្តប់

- **ផ្លូវ media, embeddings និង data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) មិនដែលទៅដល់ registry ទេ។ មិនមាន
  PII masking, credential masking ឬ modality bridge ដំណើរការនៅទីនោះឡើយ។ ការត្រួតពិនិត្យតែមួយគត់របស់ពួកវា
  គឺ injection-guard middleware ចាស់។
- **Streamed responses** មិនទទួលបាន post-call guardrails ទេ៖ មិនមាន `pii-masker` ឬ
  `credential-masker` សម្រាប់ post-call ហើយក៏មិនមាន post-call block ដែរ។ មានតែ streaming PII
  transform ប៉ុណ្ណោះដែលអនុវត្ត (នៅពេល `PII_RESPONSE_SANITIZATION` បើក)។ Credential
  ដែលត្រូវបានបញ្ជូនត្រឡប់មកវិញក្នុង streamed response នឹងមិនត្រូវបានលាក់ឡើយ។
- **Disable channels ធៀបនឹង middleware (តាមការរចនា)៖** middleware វាយតម្លៃ
  prompt injection ដោយប្រើការហៅផ្ទាល់ខ្លួនទៅកាន់ `evaluatePromptInjection()` ដោយមិន
  បញ្ជូន caller-controlled disable list ណាមួយឡើយ។ `block` mode គឺជាព្រំដែនចាំបាច់
  ដែល caller-controlled disables មិនអាចរំលងបាន រួមទាំងនៅលើផ្លូវក្នុងក្រុម chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))។ ការបិទ
  `prompt-injection` គ្រាន់តែរំលង registry guardrail ប៉ុណ្ណោះ។

### អ្វីដែលមើលឃើញ response មុន post-call

នៅលើផ្លូវ non-streaming លំដាប់គឺ៖ memory extraction → built-in tool
execution → post-call guardrails → post-call block exit → semantic-cache store។

- **ការស្រង់ចេញពីអង្គចងចាំ** និង **ការប្រតិបត្តិឧបករណ៍** មើលឃើញការឆ្លើយតប មុនពេលវិធានការការពារក្រោយការហៅអាចសរសេរវាឡើងវិញ ឬទប់ស្កាត់វា។ ចាប់តាំងពី
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) ការស្រង់ចេញពីអង្គចងចាំ
  ដំណើរការអត្ថបទដែលបានស្រង់ចេញតាមរយៈ `sanitizePII` នៅពេល
  `PII_RESPONSE_SANITIZATION` ត្រូវបានបើក (ទាំងក្នុងការផ្សាយបន្ត និងមិនផ្សាយបន្ត) ប៉ុន្តែ
  ការឆ្លើយតបដែលត្រូវបានទប់ស្កាត់នៅពេលក្រោយដោយវិធានការក្រោយការហៅ នៅតែត្រូវបានផ្ដល់ទៅឱ្យអង្គចងចាំ និង
  ឧបករណ៍។
- **ឃ្លាំងសម្ងាត់សេម៉ង់ទិក** រក្សាទុកការឆ្លើយតបបន្ទាប់ពីការត្រួតពិនិត្យក្រោយការហៅ ដូច្នេះវារក្សាទុក
  ការឆ្លើយតបដែលបានសរសេរឡើងវិញ ហើយការឆ្លើយតបដែលត្រូវបានទប់ស្កាត់នឹងមិនត្រូវបានរក្សាទុកក្នុងឃ្លាំងសម្ងាត់ឡើយ។ ធាតុក្នុងឃ្លាំងសម្ងាត់ត្រូវបាន
  កំណត់សោដាច់ដោយឡែកតាម API key នីមួយៗ។

## ការកំណត់រចនាសម្ព័ន្ធ

អថេរបរិស្ថានដែលត្រូវបានអានដោយរបាំងការពារដែលមានស្រាប់៖

| អថេរ                                  | ប្រើដោយ                            | ប្រសិទ្ធភាព                                                                                                      |
| ------------------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`                 | កំណត់ជា `false` ដើម្បីបិទការរកឃើញទាំងស្រុង។                                                                      |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`                 | គោលការណ៍ចាក់បញ្ចូល៖ `warn`, `block` ឬ `log`។ តម្លៃចាស់ `redact` មិនសរសេរអត្ថបទចាក់បញ្ចូលឡើងវិញទេ។                |
| `INJECTION_GUARD_MODE`                | `prompt-injection`                 | របៀបសម្រាប់របាំងការពារការចាក់បញ្ចូល ហើយក៏ជា DB feature flag ដែល **ជំនួសអាទិភាពលើ** អថេរបរិស្ថានផងដែរ (DB > ENV)។ |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`                 | កម្រិតធ្ងន់ធ្ងរអប្បបរមាដែល `MODE=block` បដិសេធ៖ `high` (លំនាំដើម), `medium` ឬ `low`។                             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`                 | ឈ្មោះជំនួសចាស់សម្រាប់ `INPUT_SANITIZER_BLOCK_THRESHOLD`។                                                         |
| `PII_REDACTION_ENABLED`               | `pii-masker`                       | នៅពេលកំណត់ជា `true` ទិន្នន័យ PII ក្នុងសំណើត្រូវបានលាក់បាំង (ឯករាជ្យពីរបៀបចាក់បញ្ចូល)។                            |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (ខ្សែដំណើរការបន្ទាប់) | គ្រប់គ្រងឥរិយាបថរបស់ឧបករណ៍លាក់បាំងនៅផ្នែកឆ្លើយតប។                                                                |

របាំងការពារ Modality Bridge អានការកំណត់ពេលដំណើរការពីឃ្លាំងការកំណត់ដែលគាំទ្រដោយ DB
(`getSettings()`) មិនមែនពីអថេរបរិស្ថានទេ។ សោចម្បងរបស់ Vision គឺ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` និង
`modalityBridgeCacheMaxEntries`។ សោចាស់
`visionBridge*` ត្រូវបានទទួលយកត្រឹមតែជាជម្រើសបម្រុងសម្រាប់ការអានមួយវដ្តតាមដែលបានចងក្រងជាឯកសារ
ប៉ុណ្ណោះ។ ការសរសេរពីផ្ទាំងគ្រប់គ្រងប្រើសោចម្បង។ តម្លៃលំនាំដើម និងកម្មវិធីដោះស្រាយជម្រើសបម្រុង
ស្ថិតនៅក្នុង `src/shared/constants/modalityBridgeDefaults.ts` ដោយរក្សាទុកថេរចាស់
នៅក្នុង `src/shared/constants/visionBridgeDefaults.ts`។

Audio ប្រើ `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` និង `modalityBridgeAudioMaxClips` ព្រមទាំងការកំណត់រួម
`modalityBridgeCache*`។ Audio មិនមានជម្រើសបម្រុងទៅសោចាស់ទេ ព្រោះសោទាំងនេះ
ត្រូវបានណែនាំជាមួយគ្រោងការណ៍ Modality Bridge។

Video ប្រើ `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` និង
`modalityBridgeVideoTimeout` ព្រមទាំងការកំណត់រួម `modalityBridgeCache*`។
វាត្រូវបានបិទតាមលំនាំដើម ព្រោះ FFmpeg/ffprobe ជាធាតុអាស្រ័យប្រតិបត្តិការដែលអាចជ្រើសរើសបាន
ហើយការដាក់ចំណងជើងឱ្យស៊ុមបន្ថែមភាពយឺតយ៉ាវ និងថ្លៃចំណាយរបស់ម៉ូដែល។

## Guardrail ផ្ទាល់ខ្លួន

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

ជំហាន៖

1. បង្កើត `src/lib/guardrails/myGuardrail.ts` ដោយពង្រីកពី `BaseGuardrail`។
2. អនុវត្ត `preCall` និង/ឬ `postCall`។
3. ចុះឈ្មោះនៅពេល import (បន្ថែមពី `registerDefaultGuardrails`) ឬ
   ហៅ `guardrailRegistry.register(...)` នៅពេល runtime — registry នឹងជំនួស
   guardrail មុនណាមួយដែលមានឈ្មោះបានធ្វើ normalization ដូចគ្នា។
4. បន្ថែមការធ្វើតេស្តនៅក្រោម `tests/unit/` (ឧទាហរណ៍ដែលមានស្រាប់៖
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)។

## ការធ្វើតេស្ត

ប្រើ `resetGuardrailsForTests()` រវាងការធ្វើតេស្តនីមួយៗ ដើម្បីចាប់ផ្ដើមពីស្ថានភាពដែលបានដឹង។
បញ្ជូន `{ registerDefaults: false }` ដើម្បីចាប់ផ្ដើមជាមួយ registry ទទេ ហើយ
ចុះឈ្មោះតែ guardrail ដែលកំពុងធ្វើតេស្តប៉ុណ្ណោះ។ Vision Bridge ទទួលយក dependency
injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ផ្ដល់នូវ
ចំណុចភ្ជាប់សមមូលសម្រាប់ការកំណត់ សមត្ថភាព ការជ្រើសរើសម៉ូដែល STT ការត្រួតពិនិត្យ
ព័ត៌មានសម្ងាត់ និងការបម្លែងសំឡេងទៅជាអត្ថបទ។ ដូច្នេះ ការធ្វើតេស្តអាចសាកល្បងដំណើរការទាំងពីរ ដោយមិនចាំបាច់ចូលប្រើ DB
ឬបណ្ដាញ។

## សូមមើលផងដែរ

- `src/lib/guardrails/` — ការអនុវត្ត
- `src/shared/utils/inputSanitizer.ts` — ឧបករណ៍រកឃើញរួមដែលផ្ដល់ថាមពលដល់
  ការការពារការបញ្ចូល prompt និងការបិទបាំង PII
- `src/shared/constants/visionBridgeDefaults.ts` — តម្លៃលំនាំដើមរបស់ Vision Bridge និង
  បញ្ជីម៉ូដែលដែលតម្រូវឱ្យប្រើ bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — តម្លៃលំនាំដើម runtime រួមរបស់ Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ស្រទាប់ឯករាជ្យ (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — ឯកសារយោង env var ពេញលេញ

## វិសាលភាព route របស់ការការពារការបញ្ចូល និងការធ្វើតេស្ត red-team (ដំណាក់កាលទី 8 · ប្លុក D)

ការការពារការបញ្ចូល (`createInjectionGuard` / `withInjectionGuard`) គ្របដណ្ដប់លើ route ទាំងអស់
ដែលទទួលយក prompt របស់អ្នកប្រើ។ វាគោរពតាម `INJECTION_GUARD_MODE` (តម្លៃលំនាំដើម `warn` = កត់ត្រាតែប៉ុណ្ណោះ;
`block` = ត្រឡប់ HTTP 400 `SECURITY_001`)។

| ប្រភេទ             | Route                                                                                                                                                | របៀបលំនាំដើម |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| អត្ថបទ (មានស្រាប់) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| ការបង្កើត          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| ទិន្នន័យ           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

ការស្រង់អត្ថបទ (`extractMessageContents`) គ្របដណ្ដប់លើ `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`។

**Red-team (រៀងរាល់យប់, `nightly-llm-security.yml`)៖** promptfoo ផ្ទៀងផ្ទាត់ថា route នីមួយៗរារាំង
corpus OWASP-LLM ក្នុង `INJECTION_GUARD_MODE=block`; garak ដំណើរការ probe (រំលងបើគ្មាន secret)។
`moderations` ត្រូវបានដាក់បញ្ចូលដើម្បីធានាភាពស៊ីសង្វាក់គ្នា។ របៀប block គឺជាព្រំដែនចាំបាច់៖ `evaluatePromptInjection()`
មិនអើពើនឹងបញ្ជីបិទតាម request ដែល middleware បញ្ជូនទៅវា ដូច្នេះ `disabledGuardrails` **មិន**
លើកលែង route ណាមួយពីវាទេ ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))។

workflow ប្រចាំយប់ (`.github/workflows/nightly-llm-security.yml`, cron + ការបញ្ជាដំណើរការដោយដៃ)
មាន job ពីរ៖

- **`promptfoo-guard` (រារាំង)** — ដំណើរការ `promptfoo eval -c promptfooconfig.yaml`
  ជាមួយ `INJECTION_GUARD_MODE=block`។ ករណីវាយប្រហារនីមួយៗ (ឧ. "មិនអើពើនឹង
  សេចក្ដីណែនាំមុនទាំងអស់…", ការបំបែកការការពារបែប DAN) អះអាងថា response មាន
  `error.code === "SECURITY_001"` មានន័យថា guard ពិតជាបានបដិសេធ request។
- **`garak` (ផ្ដល់ការណែនាំ)** — ដំណើរការ garak `--probes promptinject,dan,leakreplay`
  ប្រឆាំងនឹង instance OmniRoute ក្នុងមូលដ្ឋាន (`http://localhost:20128/v1`)។ ត្រូវបានកំណត់ឱ្យដំណើរការដោយផ្អែកលើ
  secret របស់ provider (`PROMPTFOO_PROVIDER_KEY`); វារំលងដោយរលូន ហើយមានបច្ច័យ
  `|| true` ដូច្នេះវារាយការណ៍ដោយមិនធ្វើឱ្យ CI បរាជ័យ។

វិសាលភាពរបស់ helper ការពារ (`createInjectionGuard` / `withInjectionGuard`)
គ្របដណ្ដប់រាល់ route `/v1` ដែលមាន prompt; អត្ថបទ prompt ត្រូវបានទាញចេញពី
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ដោយ
`extractMessageContents()` ក្នុង `src/shared/utils/inputSanitizer.ts`។
