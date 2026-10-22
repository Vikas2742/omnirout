# Guardrails (မြန်မာ)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **အမှန်တရားရင်းမြစ်:** `src/lib/guardrails/`
> **နောက်ဆုံးအပ်ဒိတ်ချိန်:** 2026-10-17 — v3.8.52 ([Coverage and limits](#coverage-and-limits) ကို ထည့်သွင်းထားသည်- hooks များ ရောက်ရှိသည့် route များနှင့် response path များ၊ ပေါင်းစပ်ထားသော disable header များ (#16412)၊ မဖြစ်မနေ နယ်နိမိတ်အဖြစ် injection block mode (#16413)၊ နှင့် post-call မတိုင်မီ response ကို မည်သည့်အရာက မြင်သည်)

Guardrail များသည် OmniRoute နှင့် upstream provider များကြားရှိ နယ်နိမိတ်တွင် လုံခြုံရေး၊ မူဝါဒနှင့် အကြောင်းအရာ အသွင်ပြောင်းလဲမှုများကို ကျင့်သုံးစေသည်။ Guardrail တစ်ခုချင်းစီသည် request payload များ (`preCall`) နှင့် upstream response များ (`postCall`) ကို စစ်ဆေးနိုင်သည် (ရွေးချယ်စရာအဖြစ် ပယ်ချ၊ အသွင်ပြောင်း သို့မဟုတ် မှတ်ချက်ပြုနိုင်သည်)။

စနစ်သည် **fail-open** ဖြစ်သည်- guardrail တစ်ခု လုပ်ဆောင်နေစဉ် throw ဖြစ်ပါက registry သည် error ကို မှတ်တမ်းတင်ပြီး request ကို မအောင်မြင်စေဘဲ နောက် guardrail သို့ ဆက်သွားသည်။ Blocking သည် တိကျပြတ်သားသော ဆုံးဖြတ်ချက် (`block: true`) ဖြစ်ပြီး မတော်တဆ ဖြစ်ပေါ်ခြင်း မဟုတ်ပါ။ တစ်ခုတည်းသော ခြွင်းချက်မှာ ပယ်ဖျက်ခံရသော request ဖြစ်သည်- caller ၏ `signal` ပယ်ဖျက်ခံရသောအခါ throw ဖြစ်သော guardrail ကို ကျော်သွားမည့်အစား hook run ကို ပယ်ချသည်။

Hooks များသည် route တိုင်း သို့မဟုတ် response တိုင်းတွင် **မလုပ်ဆောင်ပါ**။ Guardrail ကို လုံခြုံရေး ထိန်းချုပ်မှုအဖြစ် အားကိုးမီ [Coverage and limits](#coverage-and-limits) ကို ဖတ်ပါ။

## Built-in Guardrail များ

Registry သည် import လုပ်ချိန်တွင် guardrail ခြောက်ခုကို ဦးစားပေးအစီအစဉ်အတိုင်း အလိုအလျောက် load လုပ်သည် (`registry.ts` → `registerDefaultGuardrails()` ကို ကြည့်ပါ)-

| ဦးစားပေးအဆင့် | အမည်                | အဆင့်(များ)    | ဖိုင်                 |
| ------------- | ------------------- | -------------- | --------------------- |
| `5`           | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`           | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`           | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`          | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`          | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`          | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

ဦးစားပေး နံပါတ် နည်းသော အရာများက **ဦးစွာ** လုပ်ဆောင်သည်။

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

GLM 5.3 base model နှင့် `glm-5.3-{low,high,max}` တို့တွင် တိကျပြတ်သားသော `supportsVision:false` registry/spec metadata ရှိသည်။ GLM 5.3 Flash မျိုးကွဲများသည် native-vision model များအဖြစ် ဆက်လက်ရှိနေသည်။ Claude Code ၏ `/v1/messages` route သည် Claude-to-OpenAI ဘာသာပြန်ခြင်း **မတိုင်မီ** မျှဝေထားသော `handleChat` pre-call guardrail ကွင်းဆင်းထဲသို့ ဝင်ရောက်သည်။ ထို ဘာသာပြန်ခြင်းက ၎င်းတို့ကို OpenAI `image_url` အကြောင်းအရာအဖြစ် မြှင့်တင်မီ nested `Read` tool-result ပုံများကို ဖော်ပြခြင်း သို့မဟုတ် ကိုင်တွယ်ခြင်း ပြုရမည် (#17069)။

**Vision မရှိသော model များ** သို့ ဦးတည်သော ပုံပါဝင်သည့် request များကို ကြားဖြတ်ပြီး request တစ်ခုလုံးကို vision ရနိုင်သော model သို့ ပြန်လမ်းကြောင်းချ သို့မဟုတ် upstream call မတိုင်မီ ပြင်ဆင်သတ်မှတ်နိုင်သော vision model မှ ထုတ်လုပ်သည့် စာသားဖော်ပြချက်များဖြင့် ပုံအစိတ်အပိုင်းများကို အစားထိုးသည်။ ၎င်းက စာသားသီးသန့် provider များအား multimodal payload များကို ပွင့်လင်းစွာ ကိုင်တွယ်နိုင်စေသည်။

လုပ်ငန်းစဉ်-

1. ပစ်မှတ် model သည် vision ကို ရှိပြီးသားဖြစ်ပါက ကျော်သွားပါ (မဖြစ်မနေ bridge လုပ်ရမည့် စာရင်း `isVisionBridgeForcedModel` တွင် ပါဝင်နေခြင်း မရှိပါက)။
2. `extractImageParts(messages)` (`visionBridgeHelpers.ts`) မှတစ်ဆင့် ပုံအစိတ်အပိုင်းများကို ထုတ်ယူပါ။ ၎င်းသည် `open-sse/utils/mediaParts.ts` ရှိ **ပေါင်းစပ်ထားသော media detector** `detectMediaParts()` သို့ လွှဲအပ်ပြီး၊ ၎င်းသည် combo compatibility filter နှင့် မျှဝေထားသော တစ်ခုတည်းသော အမှန်တရားရင်းမြစ် ဖြစ်သည်။ ထုတ်ယူခြင်းကို `replaceImageParts` ပြန်လည်ထည့်သွင်းနိုင်သည့် ပုံသဏ္ဌာန်များအတွက် allowlist ပြုလုပ်ထားသည် (extract↔replace စာချုပ်)- OpenAI `image_url`၊ Anthropic base64 `source.type:"base64"`၊ Anthropic URL `source.type:"url"` နှင့် Responses API `input_image`။ Claude Code `tool_result.content` နှင့် Responses tool output များအတွင်း ထပ်နေသော ကိုက်ညီသည့် ပုံများကိုလည်း ထုတ်ယူပြီး ၎င်းတို့၏ မူလ path များတွင် အစားထိုးသည်။ indicator-only ပုံသဏ္ဌာန်များသည် combo-filter ပစ္စည်းများဖြစ်ပြီး ထုတ်ယူခြင်း မပြုပါ။ တစ်ခုမျှ မတွေ့ပါက ကျော်သွားပါ။
3. `resolveVisionBridgeRuntimeSettings()` (`src/shared/constants/modalityBridgeDefaults.ts`) မှတစ်ဆင့် runtime config ကို ဖြေရှင်းပါ- `modalityBridge*` setting key အသစ်များ ဦးစားပေးသည်။ ရှေးဟောင်း `visionBridge*` key များသည် **တစ်ပတ်လည် fallback** အဖြစ် ဆက်ရှိနေသည် (rollback window)။ Bridge ပိတ်ထားပါက media ဖြတ်သန်းခြင်း မပြုမီ ကျော်သွားပါ။
4. Mode ရွေးချယ်မှု (`modalityBridgeVisionMode`၊ အောက်ပါ ဇယားကို ကြည့်ပါ) သည် reroute သို့မဟုတ် describe ကို ဆုံးဖြတ်သည်။ Reroute သည် `model` ကိုသာ လဲလှယ်ထားသော `modifiedPayload` နှင့်အတူ meta `{ rerouted, fromModel, toModel, imagesKept }` ကို ပြန်ပေးသည်။
5. Describe လမ်းကြောင်း- ပုံများကို `maxImages` တွင် ကန့်သတ်ပါ၊ task-aware prompt ကို စီစဉ်ပါ၊ describe cache ကို စစ်ဆေးပါ၊ vision model ကို **တစ်ပြိုင်နက်** ခေါ်ပါ (`Promise.allSettled`)၊ ပြီးလျှင် ၎င်းတို့၏ နေရာတွင် `[Image N]: <description>` စာသားအစိတ်အပိုင်းများကို ထည့်သွင်းပါ။ Describe မအောင်မြင်ပါက `null` ကို ရရှိသည်- မသိသော/vision ရနိုင်သော ပစ်မှတ်များအတွက် မူရင်းပုံကို ထိန်းသိမ်းထားသည် (#4012)၊ သို့သော် **အတည်ပြုထားသော စာသားသီးသန့် တိုက်ရိုက်ပစ်မှတ်** သို့မဟုတ် vision ကင်းမဲ့သော combo အတွက် ဖော်ပြမထားသော ပုံတိုင်းအတွက် တိကျသော `(unavailable — no vision-capable provider connected)` စာသား stub ကို ရရှိမည်၊ ၎င်းတွင် တစ်စိတ်တစ်ပိုင်း မအောင်မြင်မှုများနှင့် describe-call ကန့်သတ်ချက် ကျော်လွန်သော ပုံများလည်း ပါဝင်သည် (#17069)။ ရှိပြီးသား all-failed combo describe fallback သည် ဆက်လက်တည်ရှိနေသည် (#8430)။
6. `modifiedPayload` + meta (`imagesProcessed`, `descriptions`, `processingTimeMs`, `visionModel`) ကို ပြန်ပေးသည်။

#### Mode ရွေးချယ်မှု (`modalityBridgeVisionMode`)

| မုဒ်       | ပုံသေ | အပြုအမူ                                                                                                                                                                                                                                                                                                                                  |
| ---------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔     | ရှေးဟောင်း heuristic၊ မပြောင်းလဲ (#6640/#7204): non-combo/`auto/` မော်ဒယ်များသည် မူရင်းမော်ဒယ်တွင် အသုံးပြုနိုင်သော credentials ရှိပြီးသားဖြစ်နေပါက (ထိုအခါ describe လုပ်သည်) မဟုတ်ပါက အကောင်းဆုံး vision မော်ဒယ်သို့ ပြန်လည်လမ်းကြောင်းချသည်; combo ပစ်မှတ်များသည် အမြဲ describe လုပ်သည်။                                               |
| `describe` |       | အမြဲ describe လုပ်သည် — reroute block ကို လုံးလုံးကျော်သွားသည်; အသုံးပြုသူရွေးချယ်ထားသော မော်ဒယ်က အမြဲဖြေကြားသည်။                                                                                                                                                                                                                        |
| `reroute`  |       | reroute ကို အတင်းအကျပ် လုပ်သည်: keep-credentialed-model guard ကို ကျော်လွှားသည်။ reroute-**target** credential guard ကား အသုံးပြုနေဆဲဖြစ်သည် — အသုံးပြုနိုင်သော vision ပစ်မှတ် မရှိသည့်အခါ bridge သည် describe လုပ်ခြင်း သို့မဟုတ် ရုပ်ပုံအကြမ်းများကို text-only ပစ်မှတ်သို့ ပေးပို့ခြင်းမပြုဘဲ ရှင်းလင်းသော error ဖြင့် block လုပ်သည်။ |

အတင်းအကျပ်မုဒ်များသည် auto heuristic မလုပ်ဆောင်မီ **အရင်** short-circuit ဖြစ်သွားသည်; `auto` အပြုအမူသည်
PR-1 အလွန်မတိုင်မီ guardrail နှင့် byte-identical ဖြစ်သည်။

#### API-key scope (`visionBridgeKeyScope.ts`)

caller ၏ API key က `allowedConnections`၊ quota pool များ
(`allowedQuotas`) သို့မဟုတ် မော်ဒယ်များ (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) ကို ကန့်သတ်သည့်အခါ bridge သည်
key အသုံးပြုခွင့်ရှိသော connection များပေါ်တွင် key အသုံးပြုနိုင်သော reroute နှင့် describe မော်ဒယ်များကိုသာ
ရွေးချယ်သည်။ ထို့နောက် describe ခေါ်ဆိုမှုသည် `x-omniroute-self-loop-key-id` header ဖြင့်
OmniRoute self-loop မှတစ်ဆင့် အမြဲသွားသည်၊ ထို့ကြောင့် လက်ခံရရှိသော chat request သည် ထို key ၏ connection နှင့် မော်ဒယ်မူဝါဒကို ထပ်မံပြဋ္ဌာန်းသည်။ `enforceApiKeyPolicy()`
သည် ထို header ကို self-loop bearer နှင့်တွဲဖက်မှသာ လိုက်နာသည်၊ ထို့ကြောင့် ၎င်းသည် အသုံးပြုခွင့်ကို ကျဉ်းမြောင်းစေနိုင်ရုံသာဖြစ်ပြီး resolve မဖြစ်သော id ကို ငြင်းပယ်သည်။

key အတွက် vision မော်ဒယ် ခွင့်မပြုပါက **အတည်ပြုထားသော text-only
ပစ်မှတ်**သည် ရုပ်ပုံ request ကို ရုပ်ပုံ bytes များကို စွမ်းဆောင်နိုင်စွမ်းမရှိသော upstream သို့ ပေးပို့ခြင်းမပြုဘဲ
ရှင်းလင်းသော HTTP 400 ဖြင့် locally ငြင်းပယ်သည် (#17069)။ မသိသော သို့မဟုတ် native vision စွမ်းဆောင်နိုင်စွမ်းရှိသော ပစ်မှတ်များအတွက် describe လမ်းကြောင်းသည် ၎င်း၏ယခင်
fail-open အပြုအမူကို ဆက်လက်ထိန်းသိမ်းထားသည် (meta `{ skipped: true, reason: "no_permitted_vision_model" }`)။
key မပါသော request များနှင့် ဤကန့်သတ်ချက်များ မရှိသော key များသည် ယခင်အတိုင်း အတိအကျ ပြုမူသည်။

#### Task-aware describe prompt (`modalityBridgeVisionTaskAware`)

ပုံသေ **true**။ `composeVisionPrompt()` (`visionBridgeHelpers.ts`) သည်
**နောက်ဆုံး user message** ၏ စာသား (စာလုံး 500 အထိ ဖြတ်တောက်ထားသည်) ကို base
describe prompt သို့ ထည့်သွင်းပေးသည်၊ ဖော်ပြချက်ကို အသုံးပြုသူ အမှန်တကယ်မေးခဲ့သည့်အရာဆီသို့ ဦးတည်စေပြီး
(codex-vision-proxy ပုံစံ) မြင်နိုင်သော စာသားကို ကူးယူပေးရန် vision မော်ဒယ်ကို တောင်းဆိုသည်။ flag ပိတ်ထားလျှင် — သို့မဟုတ် user စာသား မရှိလျှင် — base prompt ကို
မပြောင်းလဲဘဲ အသုံးပြုသည်။

describe self-loop ၏ ကိုယ်ပိုင် OpenAI-compatible request (`callVisionModelSingle()`
`visionBridgeHelpers.ts` အတွင်း) သည် `image_url.detail: "high"` ကို အမြဲတောင်းဆိုသည် —
ခြွင်းချက်မရှိ၊ caller/provider တိုင်းအတွက်၊ client signal တစ်ခုခုအပေါ် မှီခိုခြင်းမရှိဘဲ။
Low-detail sampling သည် ဤ prompt တောင်းဆိုသည့် စာသားကူးယူခြင်းလုပ်ငန်းအတွက် OCR တိကျမှုကို ကျဆင်းစေသည်၊
ထို့ကြောင့် describe ခေါ်ဆိုမှုကိုယ်တိုင်သည် မူရင်း inbound request အသုံးပြုခဲ့သော detail အဆင့် မည်သို့ပင်ဖြစ်စေ
high detail ကို အမြဲတောင်းဆိုသည်။ ၎င်းသည် internal describe request body ကိုသာ သက်ရောက်သည်၊
OmniRoute က caller ၏ ကိုယ်ပိုင် `image_url.detail` ကို primary request တွင် မည်သို့ ထပ်ဆင့်ပို့သည်ကို
မပြောင်းလဲစေပါ — ထို default ကို သီးခြားအသုံးချပြီး၊ ရှာဖွေတွေ့ရှိထားသော OpenCode client များအတွက်သာ
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) တွင် အသုံးချသည်။
describe self-loop ၏ Anthropic wire-format ခွဲခန်းတွင် `detail` field မရှိဘဲ
default နှစ်ခုစလုံးမှ သက်ရောက်မှုမရှိပါ။

#### Describe output cap (`modalityBridgeVisionMaxChars`)

| Key                            | ပုံသေ | အပိုင်းအခြား            |
| ------------------------------ | ----- | ----------------------- |
| `modalityBridgeVisionMaxChars` | `0`   | `0` သို့မဟုတ် 100–50000 |

`0` (ပုံသေ) ဆိုသည်မှာ **cap မရှိ** — `callVisionModel()` မှ ပြန်ပေးသော ဖော်ပြချက်ကို
မပြောင်းလဲဘဲ ဖြတ်သန်းစေပြီး ရှိပြီးသားအပြုအမူကို ထိန်းသိမ်းသည်။ 100–50000 အပိုင်းအခြားအတွင်း မည်သည့်တန်ဖိုးမဆို
ဖော်ပြချက်ကို `[Image N]: <description>` အဖြစ် ပြန်လည်ထည့်သွင်းမည့်အရှေ့တွင် `…` suffix ဖြင့်
ဖြတ်တောက်သည် (`src/lib/guardrails/visionBridge.ts` အတွင်း `VisionBridgeGuardrail.preCall()`)။
downstream မော်ဒယ်သည် စာသားအပြည့်အစုံ ကူးယူခြင်းကို လိုအပ်သည့် detail-heavy OCR လုပ်ငန်းများအတွက် ၎င်းကို
မြှင့်ပါ; စကားများသော vision မော်ဒယ်များတွင် token အသုံးပြုမှုကို ကန့်သတ်ရန် ၎င်းကို လျှော့ပါ။
Dashboard field သည် Vision tab ၏ Advanced panel တွင် ရှိသည်
(`ModalityBridgeVisionTab.tsx` အတွင်း `modality-bridge-max-chars`) နှင့် 1 မှ 99 အကြား မည်သည့်တန်ဖိုးကိုမဆို 100 floor အထိ
clamp လုပ်ပြီး တိကျသော `0` ကို မထိဘဲ ထားခဲ့သည် — `0` သည် ၎င်း၏ကိုယ်ပိုင်အားဖြင့် တရားဝင် Zod တန်ဖိုးဖြစ်သည်
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`)၊ "unset" ပုံသေတန်ဖိုးမျှသာ မဟုတ်ပါ။

#### Describe cache (`modalityBridge/bridgeCache.ts`)

describe output များအတွက် in-memory LRU + TTL cache၊ process တစ်ခုလုံး မျှဝေအသုံးပြုသည်။
Key = `sha256(imageRef + composedPrompt + configuredBridgeModel)` with
length-prefix framing (field-boundary ထိပ်တိုက်မှုများမရှိ)။ မော်ဒယ် အစိတ်အပိုင်းသည်
**configured** bridge မော်ဒယ်ဖြစ်ပြီး အမှန်တကယ်ဖြေကြားခဲ့သော မော်ဒယ် မဟုတ်ပါ —
`callVisionModel` သည် အတွင်းပိုင်း fallback ဖြစ်နိုင်ပြီး ကြိုးပမ်းမှုတစ်ခုချင်းအလိုက် key သတ်မှတ်ပါက cache ကို
ကွဲပြားစေမည်။ မအောင်မြင်သော describe များကို cache ဘယ်တော့မှ မလုပ်ပါ။ ဆက်တင်များ:

| Key                             | ပုံသေ  | အပိုင်းအခြား |
| ------------------------------- | ------ | ------------ |
| `modalityBridgeCacheEnabled`    | `true` | —            |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440       |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000      |

#### အဝေးရှိ ပုံ ပုံမှန်ပြုလုပ်ခြင်း (self-loop describe/base64 ရယူခြင်း)

Bridge က **အဝေးရှိ** ပုံတစ်ပုံကို ကိုယ်တိုင် ရယူသည့်အခါ — Anthropic describe self-call နှင့် claude-wire-format base64 ပြောင်းလဲခြင်း (`ensureBase64ImagesForClaudeWire`) နှစ်ခုစလုံးသည် `visionBridgeHelpers.ts` ရှိ `fetchRemoteImageAsDataUri()` မှတစ်ဆင့် လုပ်ဆောင်သည် — ရရှိလာသော data URI ကို vision-model request ထဲ မထည့်သွင်းမီ `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) မှတစ်ဆင့် ပုံမှန်ပြုလုပ်သည်။ အရွယ်အစားလွန်ကဲသော ပုံများကို **အရှည်ဆုံးအနား 2048px** အထိ လျှော့ချသည် (OpenAI/Anthropic က server-side တွင် အသုံးပြုထားပြီးဖြစ်သည့် resize ကန့်သတ်ချက်နှင့် ကိုက်ညီသည်)။ ထို့ကြောင့် vision model မြင်ရသည့်အရာကို မပြောင်းလဲဘဲ upload bytes/latency ကို လျှော့ချပေးသည်။ ပုံအရွယ်အစားပြောင်းရန် dynamic import ဖြင့် load လုပ်ထားသော `sharp` ကို အသုံးပြုသည်။ ၎င်း၏ native binary ကို load မလုပ်နိုင်သည့် platform တွင် `normalizeDataUri()` သည် **မည်သည့်အခါမျှ error မပစ်ပါ** — မူလ bytes များကို မပြောင်းလဲဘဲ ဖြတ်သန်းပေးသည့် fallback ကို အသုံးပြုသဖြင့် describe/base64-conversion လမ်းကြောင်းသည် အမြဲ ဆက်လက်အလုပ်လုပ်နိုင်သည်။ ပုံမဟုတ်သော bytes များ (decode လုပ်နိုင်သည့် ပုံကို ပြန်မပေးသော fetch တစ်ခု) ကိုလည်း မပြောင်းလဲဘဲ ဖြတ်သန်းပေးသည်။ ဤ normalization သည် bridge က ၎င်း၏ ကိုယ်ပိုင် self-call အတွက် ရယူသော ပုံများအတွက်သာ သက်ရောက်သည် — caller ၏ raw passthrough payload တွင် မည်သည့်အခါမျှ မသက်ရောက်ပါ။ ၎င်းသည် opt-in-only mutation စည်းမျဉ်း (Hard Rule #20) နှင့် ကိုက်ညီသည်။

#### Settings schema + migration

`modalityBridge*` key အသစ်များကို `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) တွင် Zod ဖြင့် validate လုပ်ထားသည်။ ၎င်းတို့မှာ `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` သုံးခုနှင့် Audio Bridge အသုံးပြုသော `modalityBridgeAudio*` အုပ်စုတို့ ဖြစ်သည်။ Migration `141_modality_bridge_settings.sql` သည် လက်ရှိ legacy `visionBridge*` တန်ဖိုးများကို ကိုက်ညီသော key အသစ်များသို့ ကူးယူသည် (idempotent ဖြစ်ပြီး operator က သတ်မှတ်ထားသော `modalityBridge*` တန်ဖိုးကို မည်သည့်အခါမျှ overwrite မလုပ်ပါ)။ Legacy key များကို release cycle တစ်ခုအတွက် read fallback အဖြစ် ဆက်လက်လက်ခံထားသည်။

#### ပွင့်လင်းမြင်သာမှု header + stats

Describe ဖြင့် ပြောင်းလဲထားသော response များတွင် `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` ပါရှိသည် (`modalityBridge/bridgeStats.ts` ရှိ `buildModalityBridgeHeader()` ဖြင့် တည်ဆောက်ပြီး `src/sse/handlers/chatHelpers.ts` ရှိ `withModalityBridgeHeader()` ဖြင့် ထည့်သွင်းသည်)။ Reroute လုပ်ထားသော request များတွင် header **မပါရှိပါ** — payload ကို မပြောင်းလဲထားဘဲ model ပြောင်းထားမှုကို response body ၏ `model` field တွင် မြင်နိုင်ပြီးဖြစ်သည်။

`GET /api/modality-bridge/stats` (`GET /api/settings` နှင့် tier တူသော management auth) သည် `vision`, `audio` နှင့် `video` အတွက် memory ထဲရှိ modality အလိုက် counter များဖြစ်သော `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` ကို ပြန်ပေးသည်။ `averageLatencyMs` သည် attempt အားလုံးကို မဟုတ်ဘဲ `latencySamples` ကို ပိုင်းခြေအဖြစ် အသုံးပြုသည်။ Timing မရှိသော operation တစ်ခုသည် zero-millisecond sample အတုကို မဖန်တီးပါ။ `bridged` သည် အောင်မြင်သော conversion များအတွက် backward-compatible alias အဖြစ် ဆက်ရှိနေသည်။ မအောင်မြင်သော attempt များသည် ၎င်းကို တိုးမပေးပါ။
Counter များကို ဒီဇိုင်းအရ process restart လုပ်သည့်အခါ reset လုပ်သည်
(accounting မဟုတ်ဘဲ telemetry ဖြစ်သည်)။

#### Dashboard ဖွဲ့စည်းသတ်မှတ်ခြင်း

သီးသန့် dashboard စာမျက်နှာမှာ `/dashboard/settings/modality-bridge` ဖြစ်သည်။ URL မှ တိုက်ရိုက်သတ်မှတ်နိုင်သော `Vision`, `Audio` နှင့် `Video` tab များသည် `tab` တန်ဖိုးကို ပြောင်းနေစဉ် query parameter များကို ထိန်းသိမ်းထားသည်။ Vision tab တွင် ဖွင့်/ပိတ်ခြင်း၊ mode၊ model ရွေးချယ်မှု (အလိုအလျောက် default အပါအဝင်)၊ task-aware prompting၊ အဆင့်မြင့် timeout/image/description-length/cache ကန့်သတ်ချက်များ၊ runtime counter များနှင့် အကာအကွယ်ပါသော sample request တစ်ခုကို အသုံးပြုနိုင်သည်။ Audio tab သည်လည်း အမှန်တကယ် အလုပ်လုပ်သည်။ ၎င်းတွင် ဖွင့်/ပိတ်ခြင်း၊ Auto ပါဝင်သော STT-only model picker၊ timeout/max-clip ကန့်သတ်ချက်များ၊ audio counter များနှင့် `input_audio` sample test တစ်ခုကို အသုံးပြုနိုင်သည်။ Video tab သည်လည်း အပြည့်အဝ အလုပ်လုပ်သည်။ ၎င်းသည် FFmpeg/ffprobe runtime အခြေအနေကို ဖော်ပြသည် — တိကျစွာ သတ်မှတ်ထားသော UI အခြေအနေလေးမျိုးအနက် တစ်မျိုးဖြစ်သည် (`unknown` သည် probe လုပ်ဆောင်နေဆဲ သို့မဟုတ် အပြီးမသတ်နိုင်သည့်အခါ၊ `restricted` သည် non-loopback dashboard host တစ်ခုတွင် probe ကို client-side မှ ကျော်သွားသည့်အခါ၊ `unavailable` သည် probe လုပ်ပြီး မရှိကြောင်း အတည်ပြုပြီးသည့်အခါ၊ သို့မဟုတ် `available` သည် FFmpeg/ffprobe version များနှင့်အတူ ရရှိနိုင်သည့်အခါ ဖြစ်သည်) — enable/model/frame/video/timeout ကန့်သတ်ချက်များကို သိမ်းဆည်းထားပြီး model picker ကို vision စွမ်းရည်ရှိသော model များသာ ပါဝင်စေရန် စစ်ထုတ်ကာ video counter များကို ဖော်ပြပေးသည်။

AI settings အောက်ရှိ ယခင် Vision Bridge card သည် ယခုအခါ စာမျက်နှာအသစ်သို့ ညွှန်ပြသော compatibility link တစ်ခုဖြစ်သည်။ ၎င်းတွင် form ၏ ဒုတိယမိတ္တူကို မထားရှိတော့ပါ။ Media Providers သည် လက်ရှိ Speech-to-Text playground ကို မဖယ်ရှားဘဲ Image-to-Text နှင့် Speech-to-Text workflow များကို သက်ဆိုင်ရာ Modality Bridge tab များသို့လည်း ချိတ်ဆက်ပေးသည်။

**Self-loop admission bypass:** describe call သည် OmniRoute ၏ ကိုယ်ပိုင် `/v1` self-loop (non-standard provider model) မှတစ်ဆင့် route လုပ်သည့်အခါ sub-request က `x-omniroute-admission-bypass: internal` ကို ပေးပို့ပြီး ဖြေရှင်းထားသော self-loop credential ဖြင့် authenticate လုပ်သည် — local mode တွင် local `sk_omniroute` sentinel ကို အသုံးပြုပြီး၊ သို့မဟုတ် operator က သတ်မှတ်ထားသော `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` env key (#1350) ကို အသုံးပြုသဖြင့် `REQUIRE_API_KEY=true` deployment များတွင်လည်း describe call ကို ဆက်လက်လုပ်ဆောင်နိုင်သည်။ Bypass ကို အဆိုပါ credential အတိအကျအတွက်သာ လက်ခံသဖြင့် external client များသည် admission ကို ကျော်ရန် ထို header ကို အသုံးမပြုနိုင်ပါ။

Legacy default များကို `src/shared/constants/visionBridgeDefaults.ts` တွင် ထားရှိသည်။ mode/task-aware/cache default အသစ်များနှင့် settings resolver ကို `src/shared/constants/modalityBridgeDefaults.ts` တွင် ထားရှိသည်။ Guardrail သည် test များက `getSettings` နှင့် `callVisionModel` implementation အတုများကို inject လုပ်နိုင်ရန် `deps` constructor option တစ်ခုကို ဖော်ထုတ်ပေးသည်။

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio input ကို လက်ခံနိုင်သည်ဟု မသိရသော target ထံ မရောက်မီ audio ပါဝင်သည့် chat request များကို ကြားဖြတ်ကိုင်တွယ်သည်။ ၎င်းသည် chat request ကို မည်သည့်အခါမျှ reroute မလုပ်ပါ။ Audio part များကို လက်ရှိ OpenAI-compatible multipart endpoint မှတစ်ဆင့် စာသားအဖြစ် ပြောင်းလဲပြီး ရွေးချယ်ထားသော chat model သည် စာသား transcript များဖြင့် ဆက်လက်လုပ်ဆောင်သည်။

လုပ်ငန်းစဉ်:

1. `supportsAudio` ကို `getResolvedModelCapabilities()` မှတစ်ဆင့် ဖြေရှင်းပါ။ ပြတ်သားစွာ သတ်မှတ်ထားသော provider-registry metadata က ဦးစားပေးအနိုင်ရပြီး၊ ထို့နောက် static model metadata၊ ထို့နောက် sync လုပ်ထားသော `modalities_input` ကို အသုံးပြုပါ။ `audio` မပါသော ကြေညာထားသည့် input စာရင်းသည် `false` ဖြစ်သည်။ capability အထောက်အထား မရှိပါက `null` အဖြစ် ကျန်ရှိသည်။ `false` နှင့် `null` နှစ်ခုစလုံးက conservative bridge ကို အသက်သွင်းပြီး၊ `true` က ၎င်းကို ကျော်ဖြတ်သည်။
2. `modalityBridgeAudio*` ဆက်တင်များကို ဖြေရှင်းပြီး မျှဝေထားသော `detectMediaParts()` detector မှတစ်ဆင့် message တိုင်းမှ ဆက်စပ်ဖြတ်နိုင်သော top-level audio အစိတ်အပိုင်းများကို ထုတ်ယူပါ။ ပံ့ပိုးထားသော wire ပုံစံများမှာ OpenAI `input_audio`၊ `audio_url` နှင့် `source.media_type: "audio/*"` ဖြစ်သည်။ nested audio ကို routing အတွက် ရှာဖွေတွေ့ရှိသော်လည်း splice လမ်းကြောင်းက ဖယ်ရှားမည်မဟုတ်ပါ။ အလုပ်ပမာဏကို `modalityBridgeAudioMaxClips` ဖြင့် ကန့်သတ်ထားပြီး၊ နောက်ပိုင်း အစိတ်အပိုင်းများကို မထိဘဲ ထားရှိသည်။
3. configure လုပ်ထားသော `provider/model` ကို လိုက်နာပါ၊ သို့မဟုတ် `selectAudioBridgeModel()` ကို `AUDIO_TRANSCRIPTION_PROVIDERS` ထဲတွင် တည်ငြိမ်သော catalog အစဉ်အတိုင်း လျှောက်စေပြီး အသုံးပြုနိုင်သော active provider credential ရှိသည့် ပထမဆုံး model ကို ရွေးချယ်ခွင့်ပြုပါ။
4. `callAudioTranscription()` သည် base64/data-URI audio ကို multipart `file` အဖြစ် ပြောင်းလဲသည်၊ သို့မဟုတ် remote `audio_url` ကို DNS pinning နှင့် 25 MB ကန့်သတ်ချက်ပါသော public-only outbound guard မှတစ်ဆင့် download လုပ်သည်။ ထို့နောက် ၎င်းသည် file နှင့် ရွေးချယ်ထားသော model ကို local `/v1/audio/transcriptions` self-loop သို့ POST လုပ်ပြီး၊ `resolveSelfLoopBearer()` ဖြင့် authenticate လုပ်သည်။ ရှိပြီးသား transcription route သည် ပုံမှန် credential lookup၊ cooldown/rate-limit ကိုင်တွယ်မှုနှင့် provider dispatch ကို လုပ်ဆောင်သည်။
5. အောင်မြင်သော ခေါ်ဆိုမှုများသည် ၎င်းတို့၏ အစိတ်အပိုင်းများကို `[Audio N]: <transcript>` ဖြင့် အစားထိုးသည်။ ခေါ်ဆိုမှုများကို `Promise.allSettled` ဖြင့် လုပ်ဆောင်သည်။ တစ်ခုချင်း မအောင်မြင်မှုသည် မူလ audio အစိတ်အပိုင်းကို ထိန်းသိမ်းထားသည် (#4012 contract)။ ခေါ်ဆိုမှုအားလုံး မအောင်မြင်ပြီး target သည် `supportsAudio === false` ဖြစ်ကြောင်း သက်သေပြထားပါက အစိတ်အပိုင်းများသည် `[Audio N]: (unavailable — no STT provider connected)` ဖြစ်လာသည် (#8430 contract)။ မသိသော target (`null`) အတွက် အားလုံးမအောင်မြင်သော ရလဒ်သည် မထိဘဲ ကျန်ရှိသည်။ အသုံးပြုနိုင်သော STT credential မရှိသော သက်သေပြထားသည့် text-only target သည် network ခေါ်ဆိုမှု မပြုလုပ်ဘဲ တူညီသော ပြတ်သားသည့် stub ကို ရရှိသည်။

အောင်မြင်သော transcript များသည် process တစ်ခုလုံးအတွက် Modality Bridge LRU/TTL cache ကို အသုံးပြုသည်။ key တွင် audio reference၊ တည်ငြိမ်သော `audio-transcription` operation label နှင့် ရွေးချယ်ထားသော STT model တို့ ပေါင်းစပ်ပါဝင်သည်။ မအောင်မြင်မှုများကို ဘယ်တော့မှ cache မလုပ်ပါ။ Audio ကြိုးစားမှုများသည် မျှဝေထားသော `bridged`၊ `cacheHits`၊ `failures` နှင့် `lastUsedAt` counter များကို update လုပ်သည်။ ပြောင်းလဲထားသော response များတွင် `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ပါရှိသည်။ မထိဘဲထားသော request များသည် Audio Bridge အပိုင်း မရရှိပါ။

Runtime ဆက်တင်များကို DB ဖြင့် ထောက်ပံ့ပြီး Zod ဖြင့် validate လုပ်ထားသည်။

| ကီး                           | မူလတန်ဖိုး | အပိုင်းအခြား                 |
| ----------------------------- | ---------- | ---------------------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                            |
| `modalityBridgeAudioModel`    | `""`       | အလိုအလျောက် သို့မဟုတ် STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000                  |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10                         |

မျှဝေထားသော cache ကို `modalityBridgeCacheEnabled`၊ `modalityBridgeCacheTtlMinutes` နှင့် `modalityBridgeCacheMaxEntries` ဖြင့် ထိန်းချုပ်ထားဆဲ ဖြစ်သည်။

### Video Bridge (`videoBridge.ts`၊ `videoBridgePipeline.ts`)

Chat Completions `messages` နှင့် Responses API `input` ထဲရှိ top-level video အစိတ်အပိုင်းများကို native video ပံ့ပိုးမှုကို မသိရသေးသည့် target ကို မခေါ်မီ ကြားဖြတ်ဖမ်းယူသည်။ ပံ့ပိုးထားသော ပုံစံများမှာ `input_video`၊ `video_url`၊ `video_source`၊ HTTPS URL များနှင့် `data:video/*;base64,...` data URI များ ဖြစ်သည်။ စာသားထဲရှိ ရိုးရှင်းသော filename များကို video အဖြစ် မသတ်မှတ်ပါ။

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) သည် request traversal၊ capability/policy စစ်ဆေးမှု၊ request တစ်ခုချင်းစီအလိုက် စုစည်းမှုနှင့် response payload ကို တာဝန်ယူသည်။ Video တစ်ခုချင်းစီအတွက် အလုပ်—ရယူခြင်း၊ ရလဒ်တစ်ခုလုံး cache၊ frame sequence ကို ဖော်ပြခြင်း (မည်သည့် caller ကြေညာထားသော audio transcript ကိုမဆို ပေါင်းစပ်သည်)၊ နှင့် ကြိုးစားမှုတစ်ခုချင်းစီအတွက် metrics/abort/cleanup—ကို `videoBridgePipeline.ts` ထဲရှိ `processVideoPart` နောက်တွင် ဝှက်ထားပြီး၊ `preCall` ၏ loop အတွင်း video အစိတ်အပိုင်းတစ်ခုလျှင် တစ်ကြိမ် ခေါ်သည်။ ထို module သည် တိကျသော port နယ်နိမိတ်များဖြစ်သည့် `VideoMediaBrokerPort` (byte များ ရယူခြင်းနှင့် sample frame များ ထုတ်ယူခြင်း)၊ `VideoAudioTranscriptionPort` (caller ကြေညာထားသော audio transcript ကို sample caption များနှင့် ပေါင်းစပ်ခြင်း) နှင့် `VideoDrilldownPort` (frame drill-down သိမ်းဆည်းမှု နယ်နိမိတ်၊ `processVideoPart` ထဲသို့ မချိတ်ဆက်ရသေးပါ—ယနေ့တွင် သီးခြား `/api/modality-bridge/video/drilldown` route ကသာ drill-down entry များကို ရေးသားသည်) တို့ကို သတ်မှတ်သည်။

Public `/v1` request လမ်းကြောင်းသည် subprocess ကို ဘယ်တော့မှ import သို့မဟုတ် invoke မလုပ်ပါ။ Remote video များကို 50 MiB ကန့်သတ်ချက်အောက်တွင် download လုပ်သည်။ inline base64 video များတွင် per-video decoded ကန့်သတ်ချက် 36 MiB ရှိပြီး ရှေးရိုးစွဲအားဖြင့် သတ်မှတ်ထားသည်။ သို့မှသာ model/messages/framing envelope သည် public JSON request လက်ခံမှု ကန့်သတ်ချက် 50 MiB အတွင်း ဆက်လက်ရှိနိုင်သည်။ Inline အရှည်နှင့် decoded-size ခန့်မှန်းချက်များကို allocation မလုပ်မီ စစ်ဆေးသည်။ မူလ remote URL နှင့် redirect တိုင်းတွင် HTTPS လိုအပ်ပြီး၊ ရှိပြီးသား public-only outbound guard ကို DNS pinning ဖြင့် အသုံးပြုသည်။ ထို့နောက် byte များသည် တိကျသော internal `POST /api/modality-bridge/video/extract` broker နယ်နိမိတ်ကို ဖြတ်သွားသည်။ ထို route သည် `LOCAL_ONLY` နှင့် `SPAWN_CAPABLE` နှစ်ခုစလုံး ဖြစ်ပြီး၊ process တစ်ခုချင်းအတွက် authenticate လုပ်ထားသော trusted-loopback request ကိုသာ လက်ခံသည်။ URL၊ filesystem path၊ executable သို့မဟုတ် argument list ကို ဘယ်တော့မှ လက်မခံပါ။ API body-size pipeline နှင့် handler ၏ incremental body reader တို့သည် 50 MiB broker input ကန့်သတ်ချက်ကို သီးခြားစီ ပြဋ္ဌာန်းသည်။ ၎င်း၏ ကန့်သတ်ထားသော queue သည် တစ်ကြိမ်လျှင် extraction တစ်ခု လုပ်ဆောင်ပြီး၊ pending job လေးခုကို ခွင့်ပြုကာ pending input ကို 100 MiB ဖြင့် ကန့်သတ်သည်။

broker အတွင်းတွင် `ffprobe` သည် သီးသန့် local ဖိုင်တစ်ခုကို ဖတ်သည်။ ပုံသေ ဖော်မတ် ခွင့်ပြုစာရင်းတွင် playlist နှင့် manifest ဖော်မတ်များ မပါဝင်ပါ။ ခွင့်ပြုထားသော MOV မိသားစု ကွန်တိန်နာများအတွက် ပြင်ပ MOV ဒေတာ ရည်ညွှန်းချက်များကို မူလအားဖြင့် ပိတ်ထားဆဲဖြစ်ပြီး ပုံသေ command က ၎င်းတို့ကို opt in မလုပ်ပါ။ `ffprobe` နှင့် `ffmpeg` နှစ်ခုလုံးသည် `file` သီးသန့် ပရိုတိုကော ခွင့်ပြုစာရင်း၊ thread တစ်ခု၊ ပုံသေ argument array များ၊ shell မပါဘဲနှင့် `PATH` မှ ရှာဖွေဖြေရှင်းသော executable များကို အသုံးပြုသည်။ ပူးတွဲပုံ cover stream များသည် ဖွင့်နိုင်သော ကိုယ်စားလှယ်လောင်းများ မဟုတ်ပါ။ ဖွင့်နိုင်သော stream အားလုံးသည် ကန့်သတ်ချက်များကို ဖြည့်ဆည်းရမည်ဖြစ်ပြီး တိကျပြတ်သားသော default stream ကို ဦးစားပေးကာ ထို့နောက်မှ အဆုံးအဖြတ်ရသော အနိမ့်ဆုံး index fallback ကို အသုံးပြုသည်။ ဗီဒီယိုများကို စက္ကန့် 600၊ ဘက်တစ်ခုလျှင် pixel 8,192 နှင့် source pixel 33,554,432 အထိ ကန့်သတ်ထားသည်။ FFmpeg သည် အလယ်မှတ် JPEG frame 1–16 ခုကို နမူနာယူပြီး အရှည်ဘက်အစွန်းကို အများဆုံး 1,024 pixel သို့ ချုံ့ကာ သေးငယ်သော input များကို မချဲ့ပါ၊ URL ကို ဘယ်တော့မှ လက်ခံမည်မဟုတ်ပါ။ နမူနာယူခြင်းသည် မူလအားဖြင့် `uniform` ဖြစ်သည်။ ရွေးချယ်နိုင်သော `scene_aware` နှင့် စမ်းသပ်ဆဲ `segment_aware` မူဝါဒများသည် အတည်ပြုပြီးသော local stream အပေါ် ပုံသေ FFmpeg pass တစ်ခု ထပ်လုပ်ဆောင်ပြီး ကန့်သတ်ထားသော `showinfo` scene timestamp များကို ရွေးချယ်ကာ detector ချို့ယွင်းမှု၊ timeout၊ မမှန်သော output သို့မဟုတ် ကိုယ်စားလှယ်လောင်း အစုအဝေး ဗလာဖြစ်နေမှုတို့တွင် တူညီသော uniform အလယ်မှတ်များသို့ အဆုံးအဖြတ်ရသော နည်းဖြင့် ပြန်ကျသည်။ Segment-aware mode သည် အတည်ပြုပြီးသော scene interval များအလိုက် အချိုးကျစွာ midpoint နမူနာများကို ခွဲဝေသည်။ segment-aware အထောက်အထားနှင့် fallback အပြုအမူကို အောက်တွင် အသေးစိတ် ဖော်ပြထားသည်။ မူဝါဒတိုင်းတွင် ရွေးချယ်ပြီးနောက် တင်းကျပ်သော 16-frame ကန့်သတ်ချက်ကို ကျင့်သုံးသည်။ scene-aware တောင်းဆိုမှုတွင် one-frame budget သာရှိပါက active full-video သို့မဟုတ် focus window ၏ uniform midpoint ကို အသုံးပြုပြီး `policyEffective: uniform` ဟု ဖော်ပြသည်။ ရွေးချယ်ထားသော scene frame တစ်ခုတည်းဖြင့် temporal အစွန်းနှစ်ခုလုံးကို ထိန်းထားနိုင်မည်မဟုတ်ပါ။ ခေါ်ဆိုသူသည် ရွေးချယ်နိုင်စွာ ကန့်သတ်ထားသော focus window (`start`/`end` စက္ကန့်) ကို ပေးနိုင်သည်။ ဘောင် (bounds) များကို media duration သို့ clamp လုပ်ပြီး ပြောင်းပြန် သို့မဟုတ် non-finite window များကို ပယ်ချကာ နမူနာယူသည့် မူဝါဒအားလုံးကို normalized interval အတွင်း၌သာ လုပ်ဆောင်သည်။ ရလဒ် window ကို sampling metadata နှင့် untrusted description prefix တွင် ထည့်သွင်းထားသဖြင့် downstream model များသည် focused excerpt နှင့် full timeline ကို ခွဲခြားနိုင်သည်။

Semantic caption focus သည် သီးခြား၊ တိကျပြတ်သားသော setting တစ်ခု ဖြစ်သည်။ မူလ `full` analysis mode သည် လက်ရှိ frame prompt ကို ထိန်းသိမ်းထားပြီး request text ကို caption model သို့ ဘယ်တော့မှ မပို့ပါ။ `focused` mode တွင် bridge သည် တူညီသော Chat သို့မဟုတ် Responses container မှ အသုံးပြုသူ ရေးသားသည့် နောက်ဆုံး ဗလာမဟုတ်သော `text`/`input_text` ကိုသာ ဖတ်ပြီး NFC သို့ normalize လုပ်ကာ control character နှင့် whitespace များကို ပေါင်းစည်းပြီး Unicode code point 500 ခုအထိ ကန့်သတ်သည်။ ရလဒ်ဗလာဖြစ်ပါက အတိအကျ `full` prompt သို့ ပြန်ကျသည်။ အသုံးဝင်သော hint ကို သီးသန့် untrusted-user-context block တွင် JSON အဖြစ် serialize လုပ်ပြီး မြင်နိုင်သော အသေးစိတ်များကို ဦးစားပေးနိုင်ရုံသာ ဖြစ်သည်။ media အတွင်း မြင်နိုင် သို့မဟုတ် ကြားနိုင်သော ညွှန်ကြားချက်များကို လိုက်နာခြင်းနှင့် ပတ်သက်သည့် သီးခြား သတိပေးချက်ကို ၎င်းက မလွှမ်းမိုးနိုင်ပါ။ Textual focus သည် `start`/`end` ကို ဘယ်တော့မှ မခန့်မှန်းပါ သို့မဟုတ် temporal sampler ကို မပြောင်းလဲပါ။

#### FU-07 ဖွဲ့စည်းပုံဆိုင်ရာ segment အထောက်အထား

`segment_aware` သည် အတည်ပြုပြီးသော local video stream အပေါ် ကန့်သတ်ထားသော pre-analysis pass တစ်ခုကို အသုံးပြုသည်။ ပုံသေ filter chain သည် ဦးစွာ အကျယ် အများဆုံး 320 pixel သို့ scale လုပ်ပြီး scene ပြောင်းလဲမှုနှင့် frozen interval များကို detect လုပ်ကာ ထို့နောက် blur၊ average luma နှင့် spatial/temporal information အတွက် တစ်စက္ကန့်လျှင် frame 1 ခုနှုန်းဖြင့် နမူနာယူသည်။ ဤ pass ကို structural sample 600 ခု၊ FFmpeg/filter thread တစ်ခု၊ အလားတူ `file` သီးသန့် ပရိုတိုကောနှင့် container ခွင့်ပြုစာရင်းများ၊ process-output ကန့်သတ်ချက် 1 MiB နှင့် broker ၏ shared abort/deadline အတွင်း အများဆုံး 30 စက္ကန့်အထိ ကန့်သတ်ထားသည်။ ၎င်းသည် request မှ command၊ filter၊ path သို့မဟုတ် URL ကို ဘယ်တော့မှ လက်ခံမည်မဟုတ်ပါ။

structural တန်ဖိုးများသည် အဆုံးအဖြတ်ရသော နမူနာယူမှု အထောက်အထားများဖြစ်ပြီး semantic video understanding မဟုတ်ပါ။ ၎င်းတို့သည် subject၊ action၊ caption၊ speech သို့မဟုတ် user intent ကို မခန့်မှန်းပါ။ Scene နှင့် freeze boundary များက segment များ ဖွဲ့စည်းသည်။ freeze coverage၊ blur၊ exposure၊ spatial detail နှင့် temporal change တို့သည် လက်ရှိ 1–16 frame budget ကို မည်သို့ ခွဲဝေမည်ကိုသာ လွှမ်းမိုးသည်။ လုံးဝ frozen ဖြစ်သော segment ကို frame တစ်ခုအထိ ကန့်သတ်ထားပြီး frozen မဟုတ်သော segment များက ကျန်ရှိ budget အတွက် ယှဉ်ပြိုင်သည်။ boundary အရေအတွက်က frame အရေအတွက်ထက် များသောအခါ အစောပိုင်း လျင်မြန်သော cut များက ရှည်လျားသော အဆုံးပိုင်း segment ကို မဖုံးကွယ်နိုင်စေရန် uniform timeline coverage ကို ထိန်းထားသည်။ freeze boundary ၏ 1 စက္ကန့် analysis resolution အတွင်းရှိ scene boundary များကို ပေါင်းစည်းသည်။

Filter များ မရှိခြင်း၊ မမှန်သော/ဗလာဖြစ်သော အထောက်အထား၊ detector error သို့မဟုတ် ကန့်သတ်ထားသော pre-analysis timeout တို့သည် အတိအကျ uniform midpoint မူဝါဒသို့ fail open ဖြစ်သည်။ ခေါ်ဆိုသူ abort သို့မဟုတ် broker deadline သည် fail open မဖြစ်ပါ။ ၎င်းသည် လုပ်ဆောင်နေဆဲ subprocess ကို ရပ်တန့်ပြီး နောက်ပိုင်း frame ထုတ်ယူခြင်းကို တားဆီးကာ private temporary tree ကို `finally` တွင် ဖယ်ရှားသည်။

`scripts/perf/video-bridge-fu07-eval.ts` သည် post-dedup caption-call သက်သာမှုများ၊ dense-motion budget ခွဲဝေမှု၊ blur/exposure/SI-TI အထောက်အထား၊ long tail ပါသော rapid cut များနှင့် gradual-fade false positive များအတွက် အဆုံးအဖြတ်ရသော real FFmpeg fixture များကို ဖန်တီးသည်။ ၎င်းသည် pre-analysis wall time ကို မှတ်တမ်းတင်ပြီး `/usr/bin/time` ရရှိနိုင်သည့်နေရာတွင် child CPU နှင့် peak RSS ကိုလည်း မှတ်တမ်းတင်သည်။ ၎င်း၏ အရည်အသွေး စစ်ဆေးမှုများသည် structural oracle များသာ ဖြစ်သည်။ ဤ harness တွင် ခွင့်ပြုထားသော endpoint သို့မဟုတ် frozen judge မရှိသောကြောင့် real caption-model အရည်အသွေးသည် `HOLD` အဖြစ် ဆက်ရှိနေသည်။ `--caption-cost-per-call-usd` က တိကျပြတ်သားသော positive per-call ခန့်မှန်းချက်ကို မပေးပါက ငွေကြေးဆိုင်ရာ သက်သာမှုသည်လည်း `HOLD` အဖြစ် ဆက်ရှိနေမည်ဖြစ်ပြီး script သည် ရလဒ်နှစ်ခုလုံးကို ဘယ်တော့မှ လုပ်ကြံဖန်တီးမည်မဟုတ်ပါ။

ဖရိမ်တစ်ခုစီကို 4 MiB၊ raw ဖရိမ်အားလုံး ပေါင်းကို 23 MiB နှင့် serialize လုပ်ထားသော broker တုံ့ပြန်မှုကို 32 MiB အထိ ကန့်သတ်ထားသည်။ သီးသန့် ယာယီဖိုလ်ဒါကို `finally` တွင် ဖယ်ရှားသည်။ OmniRoute သည် FFmpeg ကို bundle မလုပ်ပါ၊ စိတ်ကြိုက် executable လမ်းကြောင်းကိုလည်း လက်မခံပါ။ Caption မထုတ်မီ bridge သည် သတိထားချဉ်းကပ်သော အမြင်ပိုင်း ထပ်တူဖယ်ရှားခြင်း အဆင့်ကို ကျင့်သုံးသည်။ JPEG တစ်ခုစီကို 16×16 grayscale buffer အဖြစ် ချုံ့ပြီး ထိန်းသိမ်းထားသည့် နောက်ဆုံးဖရိမ်နှင့်သာ နှိုင်းယှဉ်သည်။ တောင်းဆိုထားသော caption ဘတ်ဂျက်သည် ဖရိမ်တစ်ခုထက် ကျော်ပါက extraction သည် ထိုဘတ်ဂျက်၏ နှစ်ဆအထိ၊ ဖရိမ် 16 ခုထက် ဘယ်တော့မှ မပိုသော ကန့်သတ်ထားသည့် ကိုယ်စားလှယ်လောင်း အစုအဝေးကို ပေးသည်။ တောင်းဆိုထားသော ကန့်သတ်ချက်ကို ထပ်တူဖယ်ရှားပြီးမှသာ ကျင့်သုံးပြီး ဘတ်ဂျက်သည် အနည်းဆုံး နှစ်ခုဖြစ်ပါက နောက်ဆုံး လျှော့ချခြင်းအတွင်း ရွေးချယ်ထားသော ပထမနှင့် နောက်ဆုံး ကိုယ်စားလှယ်လောင်းများကို ထိန်းသိမ်းထားသည်။ Version ပါ `grayscale-16x16-mean-cells-v2` မူဝါဒသည် mean luma delta နှင့် normalized delta အနည်းဆုံး 0.05 ရှိသော thumbnail cell များ၏ အချိုးအစား အနက် ပိုကြီးသည်ကို အသုံးပြုသည်။ ထပ်တူဖြစ်မှု အဆင့်သတ်မှတ်ချက်မှာ ကိန်းသေ 0.04 ဖြစ်ပြီး ခန့်မှန်နိုင်မှုအတွက် ရွေးချယ်ထားခြင်းဖြစ်ကာ runtime setting အဖြစ် ဖော်ထုတ်ထားခြင်း မရှိပါ။ ဤ ဒုတိယ high-contrast အချက်ပြသည် mean-only နှိုင်းယှဉ်မှုက ဖုံးကွယ်နိုင်သော သေးငယ်သော လှုပ်ရှားမှုနှင့် မြင်နိုင်သော စာသားပြောင်းလဲမှုများကို ထိန်းသိမ်းသည်။ Comparator သို့မဟုတ် decoder အမှားများသည် fail open ဖြစ်ပြီး coverage ကို ထိန်းသိမ်းသည်။ Output metadata သည် ထုတ်ယူထားသော ကိုယ်စားလှယ်လောင်းများ၊ အောင်မြင်စွာ အသုံးပြုထားသော ဖရိမ်များနှင့် ဖယ်ရှားလိုက်သော အမြင်ပိုင်း ထပ်တူများကို ခွဲခြားထားသည်။

ရှင်းလင်းစွာ အမှတ်အသားပြုထားသော ဗီဒီယိုအပိုင်းတစ်ခုသည် အချိန်တံဆိပ်တပ်ထားသော contact sheet ကို တောင်းဆိုနိုင်သည်။ Bridge သည် အများဆုံး ကော်လံ 4 ခု၊ ဖရိမ် 16 ခုပါသော JPEG grid ကို တည်ဆောက်သည်။ 512-pixel cell တစ်ခုစီသည် ၎င်း၏ source timestamp ကို high-contrast အောက်ခြေ band ထဲသို့ burn-in လုပ်ပြီး တူညီသော timestamp များကို downstream association နှင့် audit အတွက် textual metadata တွင် ဆက်လက်ထားရှိသည်။ အပြည့်အစုံ JPEG သည် 32 MiB ဖြင့် ကန့်သတ်ထားဆဲ ဖြစ်သည်။ `sharp` သည် grid ကို decode သို့မဟုတ် compose မလုပ်နိုင်ပါက bridge သည် တစ်ခုချင်း JPEG ဖရိမ်များသို့ အရန်အနေဖြင့် ပြောင်းသည်; client abort သည် sheet operation မှတစ်ဆင့် ဆက်လက် ပျံ့နှံ့သွားသည်။

Promotion အတွက် အထောက်အထားကို synthetic composition microbenchmark နှင့် တမင်သီးခြားထားသည်။ `scripts/perf/video-bridge-contact-sheet-eval.ts` သည် အစစ်အမှန် OpenAI-compatible vision model များအတွက် schema-version ပါ A/B harness ကို သတ်မှတ်သည်။ ၎င်းသည် provider မှ အစီရင်ခံသော token များ၊ end-to-end wall latency (sheet composition အပါအဝင်)၊ model-call အရေအတွက်နှင့် manifest မှ သတ်မှတ်ထားသော fact retention ကို တိုင်းတာသည်။ Raw model response များကို report ထဲသို့ မရေးပါ; SHA-256 digest များနှင့် ကိုက်ညီသော fact ID များကိုသာ ထိန်းသိမ်းသည်။ `--execute-real` ကို ပေးပြီး `--model`၊ `OMNIROUTE_BASE_URL` နှင့် `OMNIROUTE_API_KEY` ကို configure လုပ်ထားမှသာ harness သည် network သို့မဟုတ် အခကြေးငွေယူသော model ခေါ်ဆိုမှုကို လုပ်သည်; မဟုတ်ပါက မလုပ်ပါ။ ထို explicit real run မရှိပါက ၎င်း၏ machine-readable verdict သည် `HOLD` အဖြစ် ဆက်ရှိသည်; synthetic payload/call-count တိုင်းတာမှုများတစ်ခုတည်းသည် promotion အထောက်အထား မဟုတ်ပါ။

ခေါ်ဆိုသူများသည် align လုပ်ထားသော စာသား ရှိပြီးသားဖြစ်ပါက ပံ့ပိုးထားသော ဗီဒီယိုအပိုင်းတစ်ခုသို့ optional `transcript.cues` array ကို ပူးတွဲနိုင်သည်။ Cue တစ်ခုစီတွင် `text`၊ probe လုပ်ထားသော ကြာချိန်အတွင်းရှိ finite `start`/`end` interval နှင့် whitelist ထဲပါဝင်သော `source` (`client`၊ `embedded` သို့မဟုတ် `audio-bridge`) ပါရမည်; `confidence` သည် default အားဖြင့် `1` ဖြစ်ပြီး `0` နှင့် `1` အကြား ရှိနေရမည်။ အတိအကျ ထပ်တူဖြစ်သော cue များကို ပေါင်းချုပ်လိုက်သည်။ OmniRoute သည် ဤ metadata မှ transcription ကို ဘယ်တော့မှ မစတင်ပါ။ validated cue များကို source၊ confidence နှင့် interval နှင့်အတူ described result ထဲသို့ ကူးယူပြီး frame caption များနှင့်အတူ untrusted observation များအဖြစ် render လုပ်သည်။ မမှန်သော၊ အပိုင်းအခြားပြင်ပ သို့မဟုတ် provenance မပါသော စာသားများကို caption stream ထဲ ရောမစုပ်ဘဲ ပယ်ချသည်။ Request-body transcript channel နှစ်ခုစလုံးသည် ပေးထားသော provenance ကို `client` သို့ normalize လုပ်သည်; self-asserted `embedded` သို့မဟုတ် `audio-bridge` label များလည်း အပါအဝင်ဖြစ်သည်။ Server-owned adapter တစ်ခုတည်းကသာ code-only `trustedSource` argument မှတစ်ဆင့် ထို trusted label များကို assign လုပ်နိုင်သည်; request JSON field သည် ထို argument သို့ မရောက်နိုင်ပါ။ Transcript စာသားသည် ၎င်း၏ provenance မည်သို့ဖြစ်ပါစေ untrusted media-derived content အဖြစ် ဆက်ရှိပြီး authorization ကို ဘယ်တော့မှ မဆုံးဖြတ်ရပါ။

အဆင့်မြင့် ခေါ်ဆိုသူသည် တူညီသော ဗီဒီယိုအတွက် `audioTranscript` track ကို ပေးနိုင်သည်; ၎င်းကို client မှ ပေးသော စာသားအဖြစ် သတ်မှတ်ပြီး server transcription ၏ သက်သေအဖြစ် မဟုတ်ပါ။ Fusion seam သည် visual နှင့် audio observation များကို deadline နှင့် abort signal တစ်ခုတည်းအောက်တွင် run သည်၊ ၎င်းတို့ကို common timeline တစ်ခုပေါ်တွင် စီစဉ်သည်၊ အတိအကျ ထပ်တူများကို ပေါင်းချုပ်သည်၊ နှင့် တစ်ဖက်တည်း အောင်မြင်ပါက partial result ကို report လုပ်သည်။ မမှန်သော `audioTranscript` သည် ဗီဒီယိုတစ်ခုလုံးကို fail မဖြစ်စေဘဲ ထို partial result သို့ ဆုတ်ယုတ်သွားသည် — visual description ကို ထိန်းသိမ်းထားပြီး audio branch သည် sanitized failure code ကို မှတ်တမ်းတင်သည်။ Branch တစ်ခုချင်းစီ၏ availability၊ partial flag နှင့် sanitized failure code များကို described result တွင်၊ guardrail metadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`) တွင်၊ result-cache metadata တွင်၊ နှင့် bridge fusion counter များတွင် ထိန်းသိမ်းထားသည်။ default Video Bridge လမ်းကြောင်းသည် speech-to-text ကို မခေါ်ဆိုပါ၊ ဒုတိယ media copy ကို မဒေါင်းလုဒ်လုပ်ပါ; ထို explicit track မရှိပါက ၎င်းသည် video-only အဖြစ် ဆက်ရှိသည်။

**စာသားမှတ်တမ်း ထိန်းသိမ်းမှု (#12150 P1)။** Video Bridge (၎င်းကိုယ်တိုင်က opt-in ဖြစ်သည်) က transcript cue တစ်ခုကို render လုပ်သည့်အခါတိုင်း ၎င်းသည် အလိုအလျောက် သက်ရောက်သည် — သီးခြား retention flag မရှိပါ။ Request တစ်ခုက transcript cue တစ်ခုခု (caller က ကြေညာထားသော `transcript` သို့မဟုတ် ပေါင်းစပ်ထားသော `audioTranscript`) ကို render လုပ်သည့်အခါ guardrail က ၎င်းကို `videoBridgeObserved` ဟု အမှတ်အသားပြုပြီး video description ၏ ဖျောက်ထားသော shadow တစ်ခုကို ထုတ်ပေးသည် — cue တစ်ခုစီ၏ လွတ်လပ်စာသား body ကို `[redacted-video-transcript]` ဖြင့် အစားထိုးထားသည့် တူညီသော rendering တစ်ခုဖြစ်ပြီး string ကို မစုစည်းမီ structured cue field ကို အစားထိုးခြင်းဖြင့် တည်ဆောက်သည် (ပြန့်ပြားထားသော စာသားကို parse လုပ်ခြင်းဖြင့် မည်သည့်အခါမျှ မတည်ဆောက်သဖြင့် cue content တစ်ခုမျှ — ရန်လိုသော content ဖြစ်စေ၊ သာမန် content ဖြစ်စေ၊ `[inaudible]`/`[music]` ကဲ့သို့ `]` ပါဝင်သော body များအပါအဝင် — ကျန်ရှိမနေနိုင်ပါ)။ သိမ်းဆည်းထားသော call-log request body သည် video မှ ဆင်းသက်လာသော text part တစ်ခုစီကို content equality ဖြင့် တိုက်ဆိုင်စစ်ဆေးထားသည့် အဆိုပါ redacted shadow ဖြင့် လဲလှယ်သည်။ `fullText` anchor ကို အပြီးသတ်ထားသော pre-call guardrail payload မှ ပြန်လည်ဖတ်ယူသောကြောင့် နောက်ပိုင်း chain guardrail များ (PII နှင့် credential masker များ၊ priority 10/95) က description စာသားကို နေရာတင်ပြန်ရေးပြီးနောက်နှင့် system-prompt/handoff/memory injection က message array ကို ပြန်လည်ပုံဖော်ပြီးနောက်တွင်လည်း တိုက်ဆိုင်မှု အောင်မြင်နေဆဲဖြစ်သည်။ Model ထံ upstream ပေးပို့သည့် body သည် မပြောင်းလဲပါ။ စောင့်ကြည့်တွေ့ရှိထားသော request တစ်ခုသည် ရေရှည်တည်တံ့သော Memory ကိုလည်း မဖြည့်သွင်းပါ (request နှင့် response မှ ဆင်းသက်လာသော extraction နှစ်မျိုးစလုံးကို ကျော်သွားသည်)၊ ထို့ကြောင့် model ၏ ကိုယ်ပိုင် reply က transcript စာသားကို Memory ထဲသို့ ပြန်လည်ပဲ့တင်မထည့်နိုင်ပါ။

**Video field အကြမ်းများ (#12430)။** Bridge ကို ဖွင့်ထားပြီး native video support ကို မသိရသေးသည့်အခါ သို့မဟုတ် မရှိသည့်အခါ သတ်မှတ်ထားသော `transcript`/`audioTranscript` field များသည် description ပျက်ကွက်ပြီးနောက် သို့မဟုတ် `maxVideos` ကန့်သတ်ချက် ပြည့်သွားပြီးနောက်တွင်ပင် `videoBridgeObserved` ကို အသက်ဝင်စေသည်။ `null` နှင့် empty string များကို ထည့်တွက်သည်။ မပါရှိသော field များနှင့် video မဟုတ်သော metadata များကို မထည့်တွက်ပါ။ ထိန်းသိမ်းထားသော မိတ္တူများတွင် ဤ field များကို ဖျောက်ထားခြင်း သို့မဟုတ် request ကို ချန်လှပ်ခြင်း ပြုလုပ်ပြီး cache/Memory များကို ကျော်သွားသည်။

အဆိုပါ fallback လမ်းကြောင်းများတွင် မှန်ကန်သော caller cue များသည် စံမဟုတ်သော provider field များအစား ပံ့ပိုးထားသည့် `text`/`input_text` part များ ဖြစ်လာသည်။ Request မှ ပေးထားသော track နှစ်ခုစလုံးသည် ယုံကြည်စိတ်ချ၍မရသော `client` observation များအဖြစ် ဆက်ရှိပြီး video ကို ဖော်ပြမထားကြောင်းနှင့် timestamp များကို media နှင့် တိုက်ဆိုင်စစ်ဆေးအတည်ပြုထားခြင်း မရှိကြောင်း ရှင်းလင်းသော သတိပေးချက် ပါရှိသည်။ ရှိပြီးသား cue 256 ခု/စုစုပေါင်း 64-KiB နှင့် cue တစ်ခုချင်းစီဆိုင်ရာ budget များသည် track နှစ်ခုလုံးအတွက် စုပေါင်းသက်ရောက်သည်။ Timestamp များသည် broker ၏ 600-second အမြင့်ဆုံးကန့်သတ်ချက်နှင့် ပေးထားသည့် focus window တစ်ခုခုအတွင်း ကိုက်ညီရမည်။ မမှန်ကန်သော track များကို စိတ်ကြိုက်စာသားအဖြစ် မပို့ဘဲ စွန့်ပစ်သည်။ ၎င်းတို့၏ ပေါင်းစပ် budget ကို မကျော်လွန်သရွေ့ မှန်ကန်သော sibling ကို ဆက်လက်အသုံးပြုနိုင်သည်။ Null/empty field များသည် စာသားမထည့်ပါ။ ဤ fallback ကြောင့် media fetch သို့မဟုတ် transcription ထပ်မထည့်ပါ။ Transcript extension field များကို fallback video carrier နှင့် ၎င်း၏ `video_url`/`source` object များမှ ဖယ်ရှားသည်။ OpenAI wire allowlist သည် တင်းကျပ်စွာ ဆက်ရှိသည်။ native support ကို မသိရသေးသော video carrier များကို ဆက်လက်အသုံးပြုနိုင်ပြီး text-only ဖြစ်ကြောင်း သိထားသော target များတွင် လုံခြုံသော marker များ ဆက်ရှိသည်။ Structured redaction shadow များက ထပ်ဖြည့်ထားသော transcript စာသားကို ကာကွယ်ပေးပြီး caller ပိုင် မူရင်း request သည် မပြောင်းလဲဘဲ ရှိနေသည်။ Native support ရှိသော target များနှင့် ပိတ်ထားသော bridge များသည် ရှိပြီးသား bypass အပြုအမူကို ဆက်လက်ထိန်းသိမ်းသည်။

ထပ်ဆောင်း ထိန်းသိမ်းထားသော မိတ္တူများသည် တူညီသော observed-request signal ကို အသုံးပြုသည်။ Guardrail မတိုင်မီရှိ raw client-request snapshot၊ memory အတွင်းရှိ pending request နှင့် အစောပိုင်း rejected-request log တို့သည် video part များအတွင်းရှိ transcript field များကို ဖွဲ့စည်းပုံအတိုင်း အစားထိုးသည်။ Pipeline stage များနှင့် context handoff က ဖန်တီးထားသော string prompt များကို persisted-request-body sink တွင် ဖျောက်ထားသည်။ သိမ်းဆည်းထားသော `video_content_removed` marker ကြောင့် `previous_response_id` continuation သည် ရည်ရွယ်ချက်ရှိရှိ စွန့်ပစ်ထားသော စာသားကို ပြန်လည်တည်ဆောက်မည့်အစား fail closed ဖြစ်စေသည်။ စောင့်ကြည့်တွေ့ရှိထားသော request တစ်ခုသည် logging မလုပ်မီ ၎င်း၏ per-part redaction shadow ကို ဆုံးရှုံးသွားပါက၊ သို့မဟုတ် နောက်ပိုင်း request ပြင်ဆင်မှုများအပြီး video shadow များစွာထဲမှ တစ်ခုတည်းကပင် တိုက်ဆိုင်မှုမရှိပါက၊ တစ်စိတ်တစ်ပိုင်းသာ ဖျောက်ထားသော transcript ကို ထိန်းသိမ်းမည့်အစား ထိန်းသိမ်းထားသော request body တစ်ခုလုံးကို ချန်လှပ်သည်။

စောင့်ကြည့်တွေ့ရှိထားသော request တစ်ခုအတွက် model response သည် structured cue boundary မရှိဘဲ transcript ၏ မည်သည့်အစိတ်အပိုင်းကိုမဆို ကိုးကားနိုင်သည်။ ထို့ကြောင့် ၎င်း၏ persisted call-log `responseBody` ကို omission marker တစ်ခုဖြင့် အစားထိုးသည်။ အသေးစိတ် pipeline artifact (upstream/client body များနှင့် stream chunk များ ပါဝင်နိုင်သည်) ကို မထိန်းသိမ်းပါ။ Semantic၊ idempotency နှင့် reasoning-replay cache များသည် ထို request အတွက် read နှင့် write များကို ကျော်သွားသည်။ Provider request နှင့် client မြင်နိုင်သော response တို့သည် မပြောင်းလဲပါ။ အသေးစိတ် artifact ကို ချန်လှပ်သည့်အခါ အစောပိုင်း keepalive byte များကို ယာယီ buffer မှ ရှင်းထုတ်သည်။ Kiro ၏ malformed EventStream သတိပေးချက်သည် payload byte အရေအတွက်ကိုသာ ဖော်ပြပြီး ၎င်း၏ content သို့မဟုတ် JSON parser ၏ raw error ကို မည်သည့်အခါမျှ မဖော်ပြပါ။
၎င်းသည် ဆက်စပ်မှုမရှိသော provider/plugin diagnostic အားလုံးကို စစ်ဆေးပြီးကြောင်း အခိုင်အမာဆိုခြင်း မဟုတ်ပါ။ ပိုမိုကျယ်ပြန့်သော retained-sink စစ်ဆေးမှုကို #11658 တွင် ခြေရာခံထားသည်။

Internal `/api/modality-bridge/video/drilldown` lifecycle သည် သီးခြားဖြစ်သော loopback/token-authenticated cache substrate တစ်ခုဖြစ်သည်။ Operation တစ်ခုစီတိုင်းတွင် canonical opaque principal ID တစ်ခုလည်း လိုအပ်သည်။ Production caller တစ်ခုကို ဖွင့်မပေးမီ ထို ID ကို authenticated tenant မှ ဆင်းသက်ဖန်တီးရမည်ဖြစ်ပြီး client က ရွေးချယ်ထားသော value ကို မည်သည့်အခါမျှ forward မလုပ်ရပါ။ Cache key များသည် ထို principal ကို canonical session နှင့် video-reference ID များနှင့် ချိတ်ဆက်ပြီး ၎င်းတို့၏ SHA-256 မှ ဆင်းသက်လာသော key များကိုသာ သိမ်းဆည်းကာ read နှင့် deletion နှစ်မျိုးစလုံးကို တူညီသော principal အတွင်း ကန့်သတ်သည်။ Cache သည် entry တစ်ခုလျှင် ဆင်းသက်ဖန်တီးထားသော JPEG frame အများဆုံး 16 ခုကို သိမ်းဆည်းပြီး ဆယ်မိနစ်အကြာတွင် သက်တမ်းကုန်စေကာ ကန့်သတ်ထားသော `start`/`end` read များ သို့မဟုတ် session ကို အတိအလင်း ဖျက်ခြင်းကို ပံ့ပိုးသည်။

Principal တစ်ခုစီကို entry 16 ခုနှင့် canonical JPEG data 64 MiB အထိ ကန့်သတ်ထားသည်။ အဆိုပါ ကန့်သတ်ချက်များသည် global entry 64 ခု/256 MiB အမြင့်ဆုံးကန့်သတ်ချက်နှင့် သီးခြားဖြစ်သည်။ Principal quota ဖိအားရှိပါက global LRU eviction ကို မစဉ်းစားမီ ထို principal ၏ အသုံးမပြုတာ အကြာဆုံး entry များကိုသာ ဖယ်ရှားသည်။ Cache လုပ်ဆောင်မှုရှိချိန်တွင် သက်တမ်းကုန်သွားသော entry များကို principal နှင့် global accounting နှစ်ခုစလုံးမှ ရှင်းလင်းပြီး cancellation နှင့် validation failure တို့သည် မပြည့်စုံသော replacement တစ်ခုကို commit မလုပ်ပါ။

Cache သည် canonical မဟုတ်သော Base64၊ ပိုလျှံသော padding၊ JPEG မဟုတ်သော မီဒီယာ၊ ပုံပျက်နေသော သို့မဟုတ် ဖြတ်တောက်ထားသော JPEG များ၊ နှင့် အကန့်အသတ်ရှိသော ပုံအပြည့် `sharp` decode အတွင်း သတိပေးချက် ထုတ်ပေးသော JPEG များကို ပယ်ချသည်။ လက်ခံထားသော ပုံတစ်ပုံစီကို canonical JPEG အဖြစ် ပြန်လည် encode လုပ်သည်၊ caller field များကို ယုံကြည်မည့်အစား decoded bytes များမှ width နှင့် height ကို ရယူသည်၊ နောက်တွင် ကပ်ပါလာသော polyglot bytes များကို သိမ်းဆည်းမထားဘဲ ဖယ်ရှားပစ်သည်။ အကန့်အသတ်ရှိသော canonical compressed buffer ကိုသာ quota နှစ်ခုစလုံးတွင် တွက်ချက်ကောက်ခံသည်။ JSON wire limit တွင် 32 MiB decoded-input ceiling အတွက် Base64 overhead ပါဝင်သည်။ သိမ်းဆည်းထားသော derivation တစ်ခုစီသည် ၎င်း၏ အတည်ပြုပြီး JPEG format/resolution၊ sampling policy၊ derivation version၊ creation time၊ server-computed content hash၊ နှင့် hashed parent reference အပြင် ယုံကြည်ရသော caller ၏ parent-content hash ကို မှတ်တမ်းတင်သည်။ Atomic cache commit မပြုမီ asynchronous decode/hash အဆင့်များကြားတွင် cancellation ကို စစ်ဆေးသည်။

ဤ tranche သည် production producer ကို route နှင့် မချိတ်ဆက်ရသေးဘဲ multi-resolution variant selection ကိုလည်း မပံ့ပိုးပေးပါ။ ထို့ကြောင့် transparent Video Bridge request path တွင် ထပ်ဆောင်းအလုပ်များ မဖြစ်ပေါ်စေဘဲ၊ tenant-bound principal derivation နှင့် အပြည့်အစုံ FU-08 multi-resolution lifecycle သည် ပြီးပြည့်စုံသော behavior အဖြစ် မှတ်တမ်းတင်ထားခြင်းမရှိဘဲ တိကျသော follow-up work အဖြစ် ဆက်လက်ရှိနေသည်။

Frame များကို configure လုပ်ထားသော Video model ဖြင့် အစဉ်လိုက် caption ပြုလုပ်သည်။ Video override ဗလာဖြစ်ပါက Vision setting ကို အမွေဆက်ခံသည်၊ နှစ်ခုစလုံး ဗလာဖြစ်ပါက Vision auto-router သည် အသုံးပြုနိုင်သော vision-capable model ကို ရွေးချယ်သည်။ အောင်မြင်သော caption များသည် မူရင်း part ကို တည်ငြိမ်သော `[Video description:` prefix ဖြင့် အစားထိုးသည်၊ ထို prefix သည် စာသားကို ယုံကြည်မရသော media-derived observation အဖြစ် အမှတ်အသားပြုပြီး downstream model များအား မီဒီယာထဲတွင် တွေ့ရသော ညွှန်ကြားချက်များကို မလိုက်နာရန် ပြောကြားသည်။ Frame-caption cache key များတွင် JPEG bytes၊ prompt၊ timestamp နှင့် effective model ပါဝင်သည်၊ အောင်မြင်သော caption များကိုသာ cache လုပ်သည်။ Cache entry များသည် fallback model အပါအဝင် အမှန်တကယ် အောင်မြင်ခဲ့သော producer model ကို ထိန်းသိမ်းထားသည်၊ မတူညီသော frame များကို မတူညီသော model များက ထုတ်လုပ်ခဲ့ပါက bridge သည် `mixed` ဟု အစီရင်ခံသည်။ Cache hit တစ်ခုသည် ထို producer identity ကို တောင်းဆိုထားသော routing plan အဖြစ် ပြန်လည်တံဆိပ်ကပ်မည့်အစား ပြန်လည်အသုံးပြုသည်။ Whole-video result cache ကို output ကို ပြောင်းလဲစေသော input တိုင်းအပေါ် key လုပ်ထားသည် — prompt၊ effective model၊ sampling policy၊ frame count၊ semantic analysis mode၊ normalized focus hint ၏ SHA-256 fingerprint၊ focus window၊ `transcript`၊ `audioTranscript` နှင့် contact-sheet flag — ထို့ကြောင့် ထို dimension တစ်ခုခုကို ပြောင်းလဲခြင်းသည် cache miss ဖြစ်ပြီး stale reuse ဘယ်သောအခါမျှ မဖြစ်ပါ။ Visual dedup policy version၊ threshold နှင့် bounded candidate-frame count တို့သည်လည်း result-cache key နှင့် metadata တွင် အတိအလင်း ပါဝင်သည်၊ ထို့ကြောင့် policy ပြောင်းလဲမှုသည် stale whole-video description ကို ပြန်လည်အသုံးပြု၍ မရပါ။ Result-cache v4 metadata သည် mode နှင့် fingerprint ကို ထိန်းသိမ်းထားပြီး raw user task ကို ဘယ်တော့မှ မထိန်းသိမ်းပါ။ Guardrail metadata သည် တောင်းဆိုထားသော နှင့် effective analysis mode နှစ်ခုစလုံးကို အစီရင်ခံသည်၊ အသုံးပြုနိုင်သော user text မရှိဘဲ တောင်းဆိုထားသော `focused` mode ကို effective အားဖြင့် `full` အဖြစ် အစီရင်ခံသည်။

Guardrail သည် supported video part တိုင်းကို extract လုပ်သော်လည်း `modalityBridgeVideoMaxVideos` ထက် ပို၍ ဖော်ပြမည်မဟုတ်ပါ။ `supportsVideo === false` ရှိကြောင်း သက်သေပြထားသော target အတွက် မအောင်မြင်သော နှင့် ကန့်သတ်ချက်ကျော်လွန်သော video များသည် ရှင်းလင်းသော safe text marker များ ဖြစ်လာပြီး raw video လုံးဝ မကျန်ရှိစေရန် ပြုလုပ်သည်။ စွမ်းရည်ကို မသိရသောအခါ ထို part များသည် ၎င်းတို့၏ video carrier ကို ဆက်လက်ထိန်းသိမ်းထားသည်၊ မည်သည့် fallback transcript မဆို အထက်ဖော်ပြပါ bounded text conversion ကို လိုက်နာသည်။ `supportsVideo === true` ရှိသော target များသည် bridge ကို ကျော်ဖြတ်သည်။ Client request abort signal သည် download၊ broker queue၊ subprocess များနှင့် caption call များမှတစ်ဆင့် ပြန့်နှံ့သွားသည်၊ abort များသည် video များကြားတွင် ရပ်တန့်ပြီး raw media သို့ fail open ဘယ်တော့မှ မဖြစ်ပါ။

Runtime setting များသည် DB-backed ဖြစ်ပြီး Zod ဖြင့် validate လုပ်ထားသည်။

| Key                                 | မူလတန်ဖိုး  | အပိုင်းအခြား / အပြုအမူ                                                                                                               |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | ရွေးချယ်နိုင်သော runtime၊ opt-in                                                                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` သည် generic caption များကို ထိန်းသိမ်းသည်၊ `focused` သည် bounded ဖြစ်ပြီး မယုံကြည်ရသော နောက်ဆုံး user context ကို အသုံးပြုသည် |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge model ကို အမွေဆက်ခံသည်                                                                                                 |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`၊ `scene_aware` သို့မဟုတ် အချိုးကျ `segment_aware`၊ detector မအောင်မြင်ပါက `uniform` သို့ ပြန်လည်ကျသည်                      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                       |

120 စက္ကန့်ထက် ကျော်သော legacy persisted Video timeout တန်ဖိုးများကို broker deadline သို့ clamp လုပ်သည်၊ ထို limit ထက် ကျော်သော setting အသစ် write များကို ပယ်ချသည်။ `GET /api/modality-bridge/video/runtime` သည် authentication သို့မဟုတ် runtime probing မပြုမီ trusted stamped loopback locality လိုအပ်ပြီး ထို့နောက် management auth လိုအပ်သည်။ ၎င်းသည် `available`၊ sanitized FFmpeg/ffprobe version များနှင့် runtime မရနိုင်သောအခါ ပုံသေသတ်မှတ်ထားသော အကြောင်းပြချက်ကိုသာ ပြန်ပေးသည်။ Internal extraction endpoint သည် public upload API မဟုတ်ပါ၊ queue saturation ဖြစ်ပါက `503` နှင့် `Retry-After` ကို ပြန်ပေးသည်၊ caller disconnect ဖြစ်ပါက `499` ကို ပြန်ပေးသည်၊ ပုံသေသတ်မှတ်ထားသော broker deadline ဖြစ်ပါက `504` ကို ပြန်ပေးသည်။ ပြောင်းလဲထားသော response များသည် Vision သို့မဟုတ် Audio segment များကို မဖယ်ရှားဘဲ ဗဟို `x-omniroute-modality-bridge` header သို့ `video->text;model=<visionModel>;parts=<videos>` ကို ထည့်သည်။

### PII Masker (`piiMasker.ts`)

အဆင့် **နှစ်ခုစလုံး**တွင် လုပ်ဆောင်သည်။

- **`preCall`** သည် payload ကို clone လုပ်ပြီး `system`၊ `messages`၊ `input` နှင့်
  `prompt` (plain string item များ အပါအဝင်) ကို ဖြတ်လျှောက်ကာ string `content`/`text`
  field များတွင် `processPII()` (`@/shared/utils/inputSanitizer` မှ) ကို အသုံးပြုသည်။
  `PII_REDACTION_ENABLED=true` ဖြစ်သောအခါ တွေ့ရှိထားသော PII ကို outbound
  payload အတွင်း redact လုပ်သည်။ ၎င်းသည် `INPUT_SANITIZER_MODE` နှင့် မသက်ဆိုင်ပါ
  (ယင်းက prompt-injection policy ကိုသာ ထိန်းချုပ်သည်)။ Redaction ပိတ်ထားသောအခါ
  call သည် content ကို ပြန်လည်မရေးဘဲ detection count များကို မှတ်တမ်းတင်သည်။
- **`postCall`** သည် response ကို deep-clone လုပ်ပြီး `sanitizePIIResponse()` အပြင်
  Responses-API-shape masker (`maskResponsesOutput` — `output_text` နှင့်
  `output[].content[].text` ကို ဖုံးလွှမ်းသည်) ကို run လုပ်သည်။ Redaction တစ်ခုခု
  ဖြစ်ပေါ်ပါက ပြင်ဆင်ထားသော response သည် မူရင်းကို အစားထိုးသည်။

Guardrail သည် ဘယ်သောအခါမျှ block မလုပ်ပါ။ ၎င်းသည် (`meta.detections`၊
`meta.redacted`) ကို အမှတ်အသားပြုခြင်း သို့မဟုတ် ပြန်လည်ရေးသားခြင်းသာ ပြုလုပ်သည်။

#### အမျိုးအစားအလိုက် ရွေးချယ်မှု၊ စိတ်ကြိုက် pattern များနှင့် detection counter များ

**Dashboard → Settings → Security → PII masking** သည် _မည်သည့်အရာကို_ mask လုပ်မည်ကို
ရွေးချယ်သည်။ ၎င်းသည် masking ကို ဖွင့်ပေးသည် မဟုတ်ပါ။ ယင်းကို `PII_REDACTION_ENABLED`
(request) နှင့် `PII_RESPONSE_SANITIZATION` (response + SSE) က ဆက်လက်ထိန်းချုပ်ထားပြီး
နှစ်ခုစလုံးသည် default အားဖြင့် ပိတ်ထားသည်။

- **အမျိုးအစားအလိုက် ရွေးချယ်မှု** — built-in id များကို
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) တွင် စာရင်းပြုစုထားသည်။
  မသတ်မှတ်ထားပါက အမျိုးအစားအားလုံးဟု အဓိပ္ပာယ်ရသည် (ဤ setting မရှိမီက အပြုအမူ)။
  Request engine ၏ `ssn_us` pattern သည် `ssn` သို့ map လုပ်သည်။ Template များ
  (Minimal, Standard, Financial, Brazilian, USA, Full) သည် UI ရှိ checkbox များကိုသာ
  ဖြည့်ပေးသည်။
- **စိတ်ကြိုက် pattern များ** — regex သို့မဟုတ် wildcard pattern 20 ခုအထိ (`*` = non-whitespace
  character 64 ခုအထိ၊ `?` = တစ်ခု)။ Match များသည် `[CUSTOM_REDACTED]` ဖြစ်လာသည်။
  Pattern တိုင်းသည် `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`) ကို ဖြတ်သန်းရသည်။ အများဆုံး character 500 ခု၊
  flag များကို `g i m s u` အတွင်းသာ ကန့်သတ်ထားသည်၊ compile ဖြစ်ရမည်၊ `safe-regex`
  (catastrophic backtracking) ကို အောင်ရမည်၊ ပြီးနောက် empty string သို့မဟုတ် redaction
  placeholder နှင့် match မဖြစ်ရပါ။ မအောင်မြင်သော pattern ကို သိမ်းဆည်းချိန်နှင့် စမ်းသပ်ချိန်တွင်
  ငြင်းပယ်ပြီး မအောင်မြင်သော သိမ်းဆည်းထားသည့် row ကို runtime တွင် compile မလုပ်ဘဲ ကျော်သွားသည်။
  စိတ်ကြိုက် pattern များသည် masking ဖွင့်ထားစဉ်တွင်သာ run သည်။
- **Detection counter များ** — အမျိုးအစားအလိုက် count များ (match ဖြစ်သည့် တန်ဖိုးများ ဘယ်တော့မှ မပါဝင်ပါ)၊
  memory တွင် ထားရှိပြီး restart လုပ်သောအခါ reset ဖြစ်သည် (`src/lib/pii/piiDetectionStats.ts`)။
  ၎င်းတို့သည် masking ဖွင့်ထားစဉ်တွင်သာ တိုးလာသည်။

Setting များသည် `key_value` table (namespace `pii_settings`၊
`src/lib/db/piiSettings.ts`) တွင် ရှိပြီး 1 s cache မှတစ်ဆင့် ဖတ်ရှုသည်။ API:

| နည်းလမ်း | လမ်းကြောင်း              | ရည်ရွယ်ချက်                                                                        |
| -------- | ------------------------ | ---------------------------------------------------------------------------------- |
| `GET`    | `/api/settings/pii`      | Flag အခြေအနေ၊ `enabledTypes`၊ `customPatterns`၊ detection counter များ             |
| `PUT`    | `/api/settings/pii`      | `enabledTypes` (`null` = အားလုံး) နှင့်/သို့မဟုတ် `customPatterns` ကို အစားထိုးသည် |
| `POST`   | `/api/settings/pii/test` | pattern တစ်ခုကို အများဆုံး 8 KB sample ဖြင့် dry-run လုပ်သည်။ ဘာမှ မသိမ်းဆည်းပါ    |

သုံးခုစလုံးသည် management auth လိုအပ်ပြီး body ကို Zod
(`src/shared/validation/schemas/piiSettings.ts`) ဖြင့် validate လုပ်သည်။

### Prompt Injection (`promptInjection.ts`)

အသုံးပြုသူ ပေးအပ်သော content အတွင်း ရန်လိုဖွဲ့စည်းပုံများကို ရှာဖွေပြီး သတ်မှတ်ထားသော
policy ကို ကျင့်သုံးသည်။ အပြုအမူကို environment variable များနှင့် constructor
option များက မောင်းနှင်သည်။

| ဆက်တင်            | Env var                                                                                               | မူလ    | သက်ရောက်မှု                                                                                                                                                                                           |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ဖွင့်ထားသည်       | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | `false` ဖြစ်သောအခါ guardrail သည် short-circuit လုပ်သည်။                                                                                                                                               |
| Mode              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Injection policy: `block`၊ `warn` သို့မဟုတ် `log`။ (`redact` ကို back-compat အတွက် လက်ခံသော်လည်း injection text ကို **မဖယ်ရှားပါ**။ request PII rewrite ကို `PII_REDACTION_ENABLED` က ထိန်းချုပ်သည်။) |
| Block သတ်မှတ်ချက် | `blockThreshold` option / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Block လုပ်ရန် လိုအပ်သော အနိမ့်ဆုံး severity။ Default တွင် Medium သည် observe-only ဖြစ်သည်။                                                                                                            |

**Mode ဦးစားပေးအစီအစဉ်** (`getMode`): ခေါ်သူ `options.mode` →
`INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings →
Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env →
`warn`။ ထို့ကြောင့် dashboard override သည် env var များကို အနိုင်ရပြီး Feature
Flags UI သည် running guard ကို live (restart မလိုဘဲ) ထိန်းချုပ်သည်။ DB ဖတ်ခြင်းသည် fail-safe
ဖြစ်သည်။ error ဖြစ်ပါက guard သည် env အခြေပြု အပြုအမူသို့ ပြန်ကျသွားပြီး override
မသတ်မှတ်ထားပါက အပြုအမူသည် env-only resolution နှင့် တူညီသည်။

ရှာဖွေတွေ့ရှိမှု ရင်းမြစ်များ:

1. `@/shared/utils/inputSanitizer` မှ `sanitizeRequest()` (pipeline အတွင်း အခြားနေရာများတွင်
   အသုံးပြုသော shared detector အစု)။
2. Built-in `DEFAULT_GUARD_PATTERNS` (လက်ရှိ `system_override_inline` နှင့်
   `markdown_system_block`၊ နှစ်ခုစလုံး `high` severity)။
3. Constructor option များမှတစ်ဆင့် ပေးပို့သော ရွေးချယ်နိုင်သည့် `customPatterns` (string၊ regex၊
   သို့မဟုတ် `{ name, pattern, severity }` record များ)။

`mode === "block"` ဖြစ်ခြင်း **နှင့်** အနည်းဆုံး ထောက်လှမ်းတွေ့ရှိမှုတစ်ခုက ပြင်းထန်မှုအဆင့်သတ်မှတ်ချက်နှင့် ကိုက်ညီပါက `preCall` သည် `{ block: true, message: "Request rejected:
suspicious content detected" }` ကို ပြန်ပေးသည်။ `warn`/`log` မုဒ်များတွင် guardrail သည် မှတ်တမ်းတင်သော်လည်း
ခေါ်ဆိုမှုကို ခွင့်ပြုသည်။ မျှဝေထားသော helper `evaluatePromptInjection()` ကို registry မှတစ်ဆင့် မသွားဘဲ prompt များကို
အကဲဖြတ်လိုသော ခေါ်သုံးသူများအတွက်လည်း export လုပ်ထားသည်။

**စကန်ပမာဏ ကန့်သတ်ချက် (v3.8.20):** detector သည် ပေါင်းစပ်ထားသော prompt စာသား၏ **ပထမ 16 KB** ကို
သာ စစ်ဆေးသည် — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) သည်
`src/shared/utils/inputSanitizer.ts` ထဲတွင် ရှိသည်။ `detectInjection()` နှင့်
`evaluatePromptInjection()` နှစ်ခုစလုံးသည် pattern loop မလုပ်ဆောင်မီ
`slice(0, MAX_INJECTION_SCAN_BYTES)` ကို လုပ်ဆောင်သည်။ Injection ညွှန်ကြားချက်များသည်
input ၏ အပေါ်ပိုင်းအနီးတွင် ရှိနေသောကြောင့် ၎င်းက ရာနှင့်ချီသော KB ရှိသည့် payload များတွင်
regex CPU/GC ကို ကန့်သတ်ပေးပြီး ထောက်လှမ်းမှုကို အားမနည်းစေပါ။ (နှိုင်းယှဉ်ကြည့်ပါ — #3932, #4041)။

### အထောက်အထား ဖုံးကွယ်ကိရိယာ (`credentialMasker.ts`)

အဆင့် **နှစ်ခုစလုံး** တွင် အလုပ်လုပ်ပြီး ပုံသေကွင်းဆက် (default chain) တွင် နောက်ဆုံးဖြစ်သည် (ဦးစားပေး `95`)။ ထွက်သွားသော payload (message content၊ tool-call arguments၊ tool results) **နှင့်** provider ၏ တုံ့ပြန်မှုမှ လူသိများသော API-key / secret-token ပုံစံများကို ဖုံးကွယ်ပေးသည်။ ထို့ကြောင့် prompt ထဲသို့ ကူးထည့်ထားသော (သို့မဟုတ် tool result မှ ပြန်လည်ထုတ်ပေးထားသော) အထောက်အထားသည် upstream provider သို့ သို့မဟုတ် client ထံသို့ ပြန်မပေါက်ကြားစေရန် ဖြစ်သည်။

- **Opt-in သာ**၊ PII ဖုံးကွယ်ခြင်းနှင့် တူညီသော စံနှုန်း (Hard Rule #20 နှင့် ကပ်လျက်):
  `settings.credentialRedactionEnabled === true` **သို့မဟုတ်**
  `CREDENTIAL_REDACTION_ENABLED=true` ဖြစ်မှသာ ဖွင့်ထားသည်။ ၎င်းကို ပိတ်ထားလျှင် guardrail သည် no-op ဖြစ်သည် —
  ဘယ်တော့မှ မပိတ်ဆို့ဘဲ ဘယ်တော့မှ ပြန်မရေးပါ။
- `redactCredentials()` သည် payload/response tree တစ်ခုလုံးကို လျှောက်သွားပြီး (`walkValue()`၊
  prototype-pollution-safe၊ `WeakSet` ဖြင့် cycle-safe) တွေ့ရှိမှုများကို
  `[REDACTED:<type>]` placeholder ဖြင့် အစားထိုးကာ အမှန်တကယ် ပြောင်းလဲသွားသော branch များကိုသာ
  clone လုပ်သည်။
- `CREDENTIAL_PATTERNS` သည် LLM provider key များ (OpenAI၊ OpenAI-proj၊
  Anthropic၊ Google၊ Hugging Face၊ Replicate)၊ VCS/SaaS token များ (GitHub၊ Slack၊
  Linear၊ Notion၊ npm၊ Postman၊ Discord)၊ payment key များ (Stripe၊ Square)၊ cloud
  key များ (AWS access key၊ Twilio၊ SendGrid၊ Mailgun)၊ private key / JWT များ၊
  အထောက်အထားပါသော connection string များ (`mongodb://user:pass@...` စသည်) နှင့်
  ယေဘုယျ `Authorization`/`x-api-key`/`api-key`/`apikey` header-value
  ပုံစံတို့ကို လွှမ်းခြုံသည်။ Header ပုံစံ key များ (`authorization`၊ `x-api-key`၊ `api-key`၊
  `apikey`) ကို ယေဘုယျ text regex မှတစ်ဆင့် မဟုတ်ဘဲ ဖွဲ့စည်းပုံအရ (value သာ၊
  `Bearer `/`Basic ` ကဲ့သို့ scheme prefix ကို ထိန်းသိမ်းထားသည်) ဖုံးကွယ်သည်။
- guardrail သည် ဘယ်တော့မှ မပိတ်ဆို့ပါ။ ၎င်းသည် ပြန်လည်ရေးသားရုံသာ (`modifiedPayload` /
  `modifiedResponse`) နှင့် မှတ်ချက်ပြုရုံသာ (`meta.credentialsRedacted`၊ `meta.count`) လုပ်သည်။

Regression ကာကွယ်စစ်ဆေးချက်: `tests/unit/credential-masker-guardrail.test.ts`။

## အခြေခံ စာချုပ် (`base.ts`)

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
  block?: boolean; // true ဖြစ်လျှင် ကွင်းဆက်ကို ချက်ချင်းရပ်စဲစေသည်
  message?: string; // ပိတ်ဆို့စဉ် ဖော်ပြသည်
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // တောင်းဆိုချက်ကို ပြန်လည်ရေးသားရန် preCall မှ ပြန်ပေးသည်
  modifiedResponse?: TValue; // တုံ့ပြန်ချက်ကို ပြန်လည်ရေးသားရန် postCall မှ ပြန်ပေးသည်
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

guardrail တစ်ခုသည် `void`၊ `{}` သို့မဟုတ်
`{ block: false }` ကို ပြန်ပေးခြင်းဖြင့် "ပြောင်းလဲမှုမရှိ" ဟု အချက်ပြသည်။
`modifiedPayload`/`modifiedResponse` ကို ပြန်ပေးခြင်းသည် နောက်ဆက်တွဲ
guardrail များအတွက် ကွင်းဆက်အတွင်း စီးဆင်းနေသော တန်ဖိုးကို အစားထိုးသည်။
`signal?: AbortSignal` သည် ခေါ်ဆိုသူ၏ ဘဝသံသရာကို guardrail များထံ သယ်ဆောင်ပေးသည်။
တောင်းဆိုချက် ရပ်ဆိုင်းခြင်းသည် တမင်သက်သက် fail-open ခြွင်းချက်ဖြစ်သည်။
မီဒီယာ bridge များသည် မပံ့ပိုးကြောင်း သိထားသော ပစ်မှတ်သို့ raw မီဒီယာကို
ပြန်မထည့်ဘဲ အလုပ်ရပ်ဆိုင်းပြီး ရှင်းလင်းဆောင်ရွက်သည်။

## မှတ်ပုံတင်စနစ် (`registry.ts`)

တစ်ခုတည်းသော instance ဖြစ်သည့် `guardrailRegistry` သည် အောက်ပါတို့ကို ဖော်ထုတ်ပေးသည်။

- `register(guardrail)` — guardrail တစ်ခုကို ထည့်သည် (သို့မဟုတ် ပုံမှန်ပြုလုပ်ထားသော အမည်ဖြင့် အစားထိုးသည်) ပြီး `priority` ငယ်စဉ်ကြီးလိုက် ပြန်လည်စီစဉ်သည်။
- `clear()` / `list()` — စီမံခန့်ခွဲရေး အကူအညီများ။
- `runPreCallHooks(payload, context)` — အသက်ဝင်နေသော guardrail များကို လှည့်ပတ်စစ်ဆေးပြီး payload ကို `modifiedPayload` မှတစ်ဆင့် ဖြတ်သန်းစေကာ ပထမဆုံး `block: true` တွင် ရပ်တန့်သည်။
- `runPostCallHooks(response, context)` — တုံ့ပြန်ချက်ဘက်တွင် အလားတူ လုပ်ငန်းစဉ်အတိုင်း လုပ်ဆောင်သည်။
- `resetGuardrailsForTests({ registerDefaults })` — state ကို ရှင်းလင်းပြီး စမ်းသပ်မှု သီးခြားဖြစ်စေရန် ရွေးချယ်နိုင်သည့်အနေဖြင့် default များကို ပြန်လည်မှတ်ပုံတင်ပေးသည်။

runner နှစ်ခုစလုံးသည် `{ blocked, payload|response, results, guardrail?, message? }` ကို
ပြန်ပေးသည်။ ယင်းတွင် `results` သည် guardrail တစ်ခုချင်းစီအတွက် `blocked`၊ `skipped`၊
`modified`၊ `error` နှင့် `meta` အကွက်များ ပါဝင်သော `GuardrailExecutionResult`
မှတ်တမ်းများ၏ array ဖြစ်ပြီး ခြေရာခံရာတွင် အသုံးဝင်သည်။

### တောင်းဆိုချက်တစ်ခုချင်းစီအတွက် guardrail များကို ပိတ်ခြင်း

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` သည် လက်ရှိတောင်းဆိုချက်အတွက်
ကျော်လွှားသင့်သော guardrail အမည်များကို ထပ်နေမှုများ ဖယ်ရှားထားသော စာရင်းတစ်ခုအဖြစ်
စုစည်းပေးသည်။ အောက်ပါ အစဉ်အတိုင်း ဖတ်ပြီး စာရင်းတစ်ခုတည်းအဖြစ် ပေါင်းစပ်သည့်
လမ်းကြောင်း ငါးခု ရှိသည် (ထပ်နေမှု ဖယ်ရှားရာတွင် ပထမဆုံး တွေ့ရှိမှုက အနိုင်ရသည်)။

1. `apiKeyInfo.disabledGuardrails`
2. တောင်းဆိုချက် body ရှိ `disabledGuardrails` (ထိပ်တန်းအဆင့်)
3. တောင်းဆိုချက် body ရှိ `metadata.disabledGuardrails` (`metadata` သည် object ဖြစ်သည့်အခါတွင်သာ)
4. Header `x-omniroute-disabled-guardrails`
5. ယခင်အသုံးပြုခဲ့သော header `x-disabled-guardrails`

လမ်းကြောင်း ငါးခုစလုံးကို ပေါင်းစပ်ထားပြီး header နှစ်ခုလည်း ပါဝင်သည်။
`x-omniroute-disabled-guardrails` နှင့် `x-disabled-guardrails` နှစ်ခုစလုံးကို ပို့ပါက
၎င်းတို့၏ စာရင်းများ ပေါင်းစပ်မှုကို ကျော်လွှားမည်ဖြစ်ပြီး၊ ဗလာဖြစ်သော ခေတ်မီ header သည်
ယခင်အသုံးပြုခဲ့သော header ကို မဖုံးကွယ်နိုင်တော့ပါ
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)၊
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) တွင် ပြင်ဆင်ခဲ့သည်)။

တန်ဖိုးများသည် string များ၏ array သို့မဟုတ် comma ဖြင့် ခြားထားသော string ဖြစ်နိုင်သည်။
အမည်များကို ရှေ့နောက် နေရာလွတ်များ ဖယ်ရှားပြီး စာလုံးအသေး kebab-case အဖြစ်
ပုံမှန်ပြုလုပ်သည် (`pii_masker` → `pii-masker`)၊ ဗလာ entries များကို ဖယ်ရှားသည်။
ရလဒ်ကို `context.disabledGuardrails` မှတစ်ဆင့် မှတ်ပုံတင်စနစ်သို့ ပေးပို့ပြီး
ကိုက်ညီသော guardrail များကို ကျော်လွှားသည် (`results` ရှိ `skipped: true`)။

ပိတ်ထားသည့် စာရင်းသည် **မှတ်ပုံတင်စနစ်** အပေါ်သာ သက်ရောက်သည်။ Prompt-injection `block` mode သည်
မဖြစ်မနေ လိုက်နာရမည့် နယ်နိမိတ်ဖြစ်သည်။ injection-guard middleware
(`src/middleware/promptInjectionGuard.ts`) သည် caller ထိန်းချုပ်နိုင်သော disable
စာရင်းမရှိဘဲ `evaluatePromptInjection()` ကို ခေါ်သည် (ယခင်က ၎င်းပြုလုပ်ခဲ့သော
အသုံးမဝင်တော့သည့် `resolveDisabledGuardrails({ body })` ခေါ်ဆိုမှုကို
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) တွင် ဖယ်ရှားခဲ့သည်)၊
ထို့ကြောင့် `prompt-injection` ကို ပိတ်ထားသော တောင်းဆိုချက်သည် `block` mode တွင်
ငြင်းပယ်ခံရဆဲဖြစ်သည်။ ဤသည်မှာ ဒီဇိုင်းအရ ရည်ရွယ်ထားခြင်းဖြစ်သည်။
disable လမ်းကြောင်းများကို caller က ထိန်းချုပ်နိုင်ပြီး (တောင်းဆိုချက် body၊
metadata၊ headers)၊ caller သည် operator သတ်မှတ်ထားသော လုံခြုံရေး
ထိန်းချုပ်မှုကို ပိတ်နိုင်ခွင့် မရှိရပါ
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))။
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) မှ header
ပေါင်းစပ်မှုသည် မည်သည့် မှတ်ပုံတင်စနစ် guardrail များကို ကျော်လွှားမည်ကိုသာ
ပြောင်းလဲသည်။ client အား middleware ကို ကျော်လွှားခွင့် မပေးပါ။
မဖြစ်မနေ လိုက်နာရမည့် key တစ်ခုချင်းစီနှင့် group တစ်ခုချင်းစီအတွက် guardrail
မူဝါဒများကို v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417)
တွင် ခြေရာခံထားသည်။
ကြည့်ပါ [ဖုံးလွှမ်းမှုနှင့် ကန့်သတ်ချက်များ](#coverage-and-limits)။

## လုပ်ဆောင်မှု အစီအစဉ်

`src/sse/handlers/chat.ts` နှင့် `open-sse/handlers/chatCore.ts` ( [လွှမ်းခြုံမှုနှင့် ကန့်သတ်ချက်များ](#coverage-and-limits) အောက်တွင် ဖော်ပြထားသော chat အုပ်စု လမ်းကြောင်းများ) မှတစ်ဆင့် ဖြတ်သန်းသွားသော တောင်းဆိုမှုတစ်ခုစီအတွက်—

1. `resolveDisabledGuardrails(...)` သည် API key၊ body နှင့် headers တို့မှ ကျော်လွှားမည့်စာရင်းကို တည်ဆောက်သည်။
2. `guardrailRegistry.runPreCallHooks(body, ctx)` သည် guardrail များကို ဦးစားပေး ငယ်မှကြီးသို့ အစဉ်လိုက် လုပ်ဆောင်သည်။
   - ပိတ်ထားသော guardrail များကို `skipped` အဖြစ် မှတ်တမ်းတင်သည်။
   - guardrail တစ်ခုစီ၏ `preCall` သည် `modifiedPayload` မှတစ်ဆင့် payload ကို ပြန်လည်ရေးသားနိုင်သည်။
   - ပထမဆုံး `block: true` သည် ကွင်းဆက်ကို ချက်ချင်းရပ်ဆိုင်းပြီး handler သည် guardrail ပယ်ချမှု တုံ့ပြန်ချက်ကို ပြန်ပေးသည်။
3. (ပြန်လည်ရေးသားနိုင်သော) payload သည် combo routing နှင့် upstream dispatch သို့ စီးဆင်းသွားသည်။
4. **Streaming မဟုတ်သည့်အခါသာ:** တုံ့ပြန်ချက်ကို စုစည်းပြီးနောက် `guardrailRegistry.runPostCallHooks(...)` သည် တုံ့ပြန်ချက်အပေါ် အလားတူကွင်းဆက်ကို လုပ်ဆောင်သည်။ ဤနေရာတွင် `block: true` ဖြစ်ပါက upstream တုံ့ပြန်ချက်ကို ပယ်ဖျက်ပြီး HTTP 400 ပြန်ပေးသည်။ Stream အဖြစ် ပေးပို့သော တုံ့ပြန်ချက်များသည် ဤအဆင့်ကို လုံးဝကျော်သွားသည်။

Exception ပစ်သော guardrail များကို `error: <message>` ဖြင့် မှတ်တမ်းတင်ပြီး `logger.warn` မှတစ်ဆင့် log မှတ်သည်၊ သို့သော် ကွင်းဆက်သည် ဆက်လက်လုပ်ဆောင်သည် — ဒီဇိုင်းအရ fail-open ဖြစ်သည်။

## လွှမ်းခြုံမှုနှင့် ကန့်သတ်ချက်များ

guardrail registry ကို chat pipeline တွင်သာ ချိတ်ဆက်ထားသည်။ ဤကန့်သတ်ချက်များကို `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` နှင့် `tests/unit/guardrail-pipeline-characterization.test.ts` ဖြင့် သတ်မှတ်ထားသည်၊ အပြုအမူ ပြောင်းလဲသောအခါ ထိုစမ်းသပ်မှုများကို တမင်တကာ update လုပ်ပါ။

### Hooks များ အလုပ်လုပ်သည့်နေရာ

| Hook / ထိန်းချုပ်မှု                | အလုပ်လုပ်သည့်နေရာ                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | `handleChat` (`src/sse/handlers/chat.ts`) မှ ကိုင်တွယ်သော တောင်းဆိုမှုများ: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (နှင့် `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, နှင့် Telegram chat proxy။ Dashboard စမ်းသပ်မှု endpoint `/api/guardrails/test` လည်း ပါဝင်သည်။ Pre-call block သည် HTTP 400 ပြန်ပေးသည်။ |
| `runPostCallHooks`                  | **Streaming မဟုတ်သော** chat တုံ့ပြန်ချက်များတွင်သာ (`open-sse/handlers/chatCore/nonStreamingResponse.ts`)။ Stream အဖြစ်ပေးပို့သော တုံ့ပြန်ချက်များသည် ၎င်းသို့ ဘယ်တော့မှ မရောက်ပါ။                                                                                                                                                                                                                                                                         |
| Streaming PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`)၊ `PII_RESPONSE_SANITIZATION` ဖွင့်ထားချိန်တွင် `streamingPipeline.ts` အတွင်း ချိတ်ဆက်ထားသည်။ ၎င်းသည် guardrail မဟုတ်သောကြောင့် disable channel များက ၎င်းကို မထိခိုက်ပါ။                                                                                                                                                                                                                      |
| Injection-guard middleware (legacy) | prompt ပါဝင်သော `/v1` လမ်းကြောင်းတိုင်း၊ chat အုပ်စု အပါအဝင် ([လမ်းကြောင်း လွှမ်းခြုံမှု](#injection-guard-route-coverage--red-team-phase-8--block-d) ကို ကြည့်ပါ)။ Prompt injection အတွက်သာ။                                                                                                                                                                                                                                                              |

### လွှမ်းခြုံမထားသည့်အရာများ

- **Media၊ embeddings နှင့် data လမ်းကြောင်းများ** (`/v1/images/*`, `/v1/embeddings`, `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/rerank`, `/v1/search`, `/v1/moderations`) သည် registry သို့ ဘယ်တော့မှ မရောက်ပါ။ ထိုနေရာတွင် PII masking၊ credential masking သို့မဟုတ် modality bridge မလုပ်ဆောင်ပါ။ ၎င်းတို့၏ တစ်ခုတည်းသော စစ်ဆေးမှုမှာ legacy injection-guard middleware ဖြစ်သည်။
- **Stream အဖြစ် ပေးပို့သော တုံ့ပြန်ချက်များ** သည် post-call guardrail များ မရပါ: `pii-masker` သို့မဟုတ် `credential-masker` post-call မရှိပါ၊ post-call block လည်း မရှိပါ။ `PII_RESPONSE_SANITIZATION` ဖွင့်ထားချိန်တွင် streaming PII transform သာ အကျုံးဝင်သည်။ Stream တုံ့ပြန်ချက်ထဲတွင် ပြန်ထွက်လာသော credential ကို redact မလုပ်ပါ။
- **Disable channel များ နှင့် middleware (ဒီဇိုင်းအရ):** middleware သည် ခေါ်သူက ထိန်းချုပ်နိုင်သော disable စာရင်းကို လုံးဝမပေးဘဲ ကိုယ်ပိုင် `evaluatePromptInjection()` ခေါ်ဆိုမှုဖြင့် prompt injection ကို အကဲဖြတ်သည်။ `block` mode သည် ခေါ်သူက ထိန်းချုပ်သော disable များဖြင့် ကျော်လွှား၍ မရနိုင်သော မဖြစ်မနေ နယ်နိမိတ်ဖြစ်ပြီး chat အုပ်စု လမ်းကြောင်းများတွင်လည်း အကျုံးဝင်သည် ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))။ `prompt-injection` ကို ပိတ်ခြင်းသည် registry guardrail ကို ကျော်လွှားစေရုံသာ ဖြစ်သည်။

### Post-call မတိုင်မီ တုံ့ပြန်ချက်ကို ဘာများ မြင်သလဲ

Streaming မဟုတ်သော လမ်းကြောင်းတွင် အစီအစဉ်မှာ: memory ထုတ်ယူခြင်း → built-in tool လုပ်ဆောင်ခြင်း → post-call guardrail များ → post-call block မှ ထွက်ခြင်း → semantic-cache သိမ်းဆည်းခြင်း။

- **မမ်မိုရီ ထုတ်ယူခြင်း** နှင့် **ကိရိယာ လုပ်ဆောင်ခြင်း** တို့သည် post-call
  guardrails များက တုံ့ပြန်ချက်ကို ပြန်လည်ရေးသားခြင်း သို့မဟုတ် ပိတ်ဆို့ခြင်းမပြုမီ ၎င်းကို မြင်တွေ့ရသည်။
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) မှစ၍
  `PII_RESPONSE_SANITIZATION` ကို ဖွင့်ထားသည့်အခါ မမ်မိုရီထုတ်ယူခြင်းသည်
  ထုတ်ယူထားသော စာသားကို `sanitizePII` မှတစ်ဆင့် လုပ်ဆောင်သည်
  (streaming နှင့် non-streaming နှစ်မျိုးလုံး)။ သို့သော် post-call က နောက်ပိုင်းတွင်
  ပိတ်ဆို့လိုက်သော တုံ့ပြန်ချက်ကို မမ်မိုရီနှင့် ကိရိယာများထံ ပေးပို့ပြီးဖြစ်နေဆဲ ဖြစ်သည်။
- **semantic cache** သည် post-call ပြီးနောက် တုံ့ပြန်ချက်ကို သိမ်းဆည်းသောကြောင့်
  ပြန်လည်ရေးသားထားသော တုံ့ပြန်ချက်ကို သိမ်းဆည်းပြီး ပိတ်ဆို့ထားသော တုံ့ပြန်ချက်ကိုမူ
  မည်သည့်အခါမျှ cache မလုပ်ပါ။ Cache entry များကို API key တစ်ခုစီအလိုက်
  key သတ်မှတ်ထားသည်။

## ဖွဲ့စည်းသတ်မှတ်မှု

Built-in guardrails များက ဖတ်ရှုသော environment variables များ-

| Variable                              | အသုံးပြုသည့်နေရာ          | သက်ရောက်မှု                                                                                                                       |
| ------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | ရှာဖွေစစ်ဆေးမှုကို အပြည့်အဝပိတ်ရန် `false` ဟု သတ်မှတ်ပါ။                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injection မူဝါဒ- `warn`, `block`, သို့မဟုတ် `log`။ Legacy value ဖြစ်သော `redact` သည် injection စာသားကို ပြန်လည်ရေးသားခြင်းမပြုပါ။ |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Injection guard အတွက် mode ဖြစ်ပြီး env vars များကို **လွှမ်းမိုးအစားထိုးသည့်** DB feature flag လည်းဖြစ်သည် (DB > ENV)။           |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` က ငြင်းပယ်မည့် အနည်းဆုံး severity- `high` (မူလသတ်မှတ်ချက်), `medium`, သို့မဟုတ် `low`။                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` အတွက် legacy alias ဖြစ်သည်။                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` ဖြစ်ပါက request PII ကို ဖုံးကွယ်မည် (injection mode နှင့် သီးခြားလွတ်လပ်သည်)။                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Response ဘက်ရှိ masker ၏ လုပ်ဆောင်ပုံကို ထိန်းချုပ်သည်။                                                                           |

Modality Bridge guardrails များသည် runtime config ကို env vars များမှမဟုတ်ဘဲ DB-backed settings store (`getSettings()`) မှ ဖတ်ရှုသည်။ Vision ၏ primary keys များမှာ
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, နှင့်
`modalityBridgeCacheMaxEntries` တို့ဖြစ်သည်။ Legacy
`visionBridge*` keys များကို မှတ်တမ်းတင်ဖော်ပြထားသော တစ်စက်ဝန်းစာ read fallback အဖြစ်သာ လက်ခံသည်။ Dashboard မှ ရေးသားမှုများတွင် primary keys များကို အသုံးပြုသည်။ မူလသတ်မှတ်ချက်များနှင့် fallback resolver သည် `src/shared/constants/modalityBridgeDefaults.ts` တွင်ရှိပြီး legacy constants များကို `src/shared/constants/visionBridgeDefaults.ts` တွင် ဆက်လက်ထိန်းသိမ်းထားသည်။

Audio သည် `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, နှင့် `modalityBridgeAudioMaxClips` တို့အပြင် မျှဝေသုံးစွဲသည့်
`modalityBridgeCache*` settings များကို အသုံးပြုသည်။ ဤ keys များကို Modality Bridge schema နှင့်အတူ စတင်မိတ်ဆက်ခဲ့ခြင်းကြောင့် Audio တွင် legacy-key fallback မရှိပါ။

Video သည် `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, နှင့်
`modalityBridgeVideoTimeout` တို့အပြင် မျှဝေသုံးစွဲသည့် `modalityBridgeCache*` settings များကို အသုံးပြုသည်။
FFmpeg/ffprobe တို့သည် မဖြစ်မနေမဟုတ်သော လုပ်ငန်းလည်ပတ်မှုဆိုင်ရာ dependencies များဖြစ်ပြီး frame captioning သည် latency နှင့် model ကုန်ကျစရိတ်ကို တိုးစေသောကြောင့် ၎င်းကို မူလအားဖြင့် ပိတ်ထားသည်။

## စိတ်ကြိုက် Guardrail များ

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

အဆင့်များ-

1. `BaseGuardrail` ကို တိုးချဲ့ထားသော `src/lib/guardrails/myGuardrail.ts` ကို ဖန်တီးပါ။
2. `preCall` နှင့်/သို့မဟုတ် `postCall` ကို အကောင်အထည်ဖော်ပါ။
3. Import ပြုလုပ်ချိန်တွင် မှတ်ပုံတင်ပါ (`registerDefaultGuardrails` မှ push လုပ်ခြင်း) သို့မဟုတ်
   runtime တွင် `guardrailRegistry.register(...)` ကို ခေါ်ပါ — registry သည် ပုံမှန်ပြုလုပ်ထားသော အမည်တူရှိသည့်
   ယခင် guardrail မှန်သမျှကို အစားထိုးပါသည်။
4. `tests/unit/` အောက်တွင် စမ်းသပ်မှုများ ထည့်ပါ (ရှိပြီးသား နမူနာများ-
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`)။

## စမ်းသပ်ခြင်း

သိရှိထားသော အခြေအနေတစ်ခုမှ စတင်ရန် စမ်းသပ်မှုများကြားတွင် `resetGuardrailsForTests()` ကို အသုံးပြုပါ။
Registry အလွတ်ဖြင့် စတင်ပြီး စမ်းသပ်မည့် guardrail များကိုသာ
မှတ်ပုံတင်ရန် `{ registerDefaults: false }` ကို ပေးပို့ပါ။ Vision Bridge သည် dependency
injection (`deps.getSettings`, `deps.callVisionModel`) ကို လက်ခံပါသည်။ Audio Bridge ကလည်း
ဆက်တင်များ၊ စွမ်းဆောင်ရည်များ၊ STT မော်ဒယ် ရွေးချယ်မှု၊ အထောက်အထား
စစ်ဆေးမှုများနှင့် transcription အတွက် အလားတူ ချိတ်ဆက်နိုင်သည့် နေရာများကို ဖော်ထုတ်ပေးထားပါသည်။ ထို့ကြောင့် စမ်းသပ်မှုများသည် DB
သို့မဟုတ် ကွန်ရက် အသုံးပြုခွင့်မရှိဘဲ flow နှစ်ခုလုံးကို စမ်းသပ်နိုင်ပါသည်။

## ထပ်မံကြည့်ရှုရန်

- `src/lib/guardrails/` — အကောင်အထည်ဖော်ထားမှု
- `src/shared/utils/inputSanitizer.ts` — prompt-injection နှင့် PII ဖုံးကွယ်ခြင်းကို
  လုပ်ဆောင်ပေးသည့် မျှဝေထားသော detector
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge ၏ မူလတန်ဖိုးများနှင့်
  အတင်းအကျပ် bridge လုပ်မည့် မော်ဒယ်စာရင်း
- `src/shared/constants/modalityBridgeDefaults.ts` — မျှဝေထားသော Vision/Audio runtime မူလတန်ဖိုးများ
- `docs/architecture/RESILIENCE_GUIDE.md` — သီးခြားလွတ်လပ်သော layer (circuit breaker၊ cooldown များ)
- `docs/reference/ENVIRONMENT.md` — env var အပြည့်အစုံ ကိုးကားချက်

## Injection-guard route လွှမ်းခြုံမှုနှင့် red-team (Phase 8 · Block D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) သည် အသုံးပြုသူ prompt များကို
လက်ခံသည့် route အားလုံးကို လွှမ်းခြုံထားပါသည်။ ၎င်းသည် `INJECTION_GUARD_MODE` ကို လိုက်နာသည် (မူလ `warn` = log သာရေးသားခြင်း၊
`block` = HTTP 400 `SECURITY_001` ကို ပြန်ပေးခြင်း)။

| အမျိုးအစား         | Route များ                                                                                                                                           | မူလ mode |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| စာသား (ရှိပြီးသား) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn     |
| ဖန်တီးမှုဆိုင်ရာ   | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn     |
| ဒေတာ               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn     |

စာသားထုတ်ယူခြင်း (`extractMessageContents`) သည် `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ကို လွှမ်းခြုံပါသည်။

**Red-team (ညစဉ်၊ `nightly-llm-security.yml`):** promptfoo သည် route တစ်ခုစီက
`INJECTION_GUARD_MODE=block` တွင် OWASP-LLM corpus ကို ပိတ်ဆို့ကြောင်း အတည်ပြုပါသည်။ garak သည် probe များကို လုပ်ဆောင်သည် (secret မရှိပါက ကျော်သွားသည်)။
ညီညွတ်မှုရှိစေရန် `moderations` ကို ထည့်သွင်းထားပါသည်။ Block mode သည် မဖြစ်မနေလိုအပ်သော နယ်နိမိတ်တစ်ခုဖြစ်သည်- `evaluatePromptInjection()`
သည် middleware က ၎င်းထံ ပေးပို့သော request တစ်ခုချင်းစီအလိုက် ပိတ်ထားသည့်စာရင်းကို လျစ်လျူရှုသောကြောင့် `disabledGuardrails` သည်
route တစ်ခုကို ၎င်းမှ **ကင်းလွတ်ခွင့်မပေးပါ** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413))။

ညစဉ် workflow (`.github/workflows/nightly-llm-security.yml`၊ cron + ကိုယ်တိုင်
dispatch လုပ်ခြင်း) တွင် job နှစ်ခုရှိပါသည်-

- **`promptfoo-guard` (ပိတ်ဆို့တားဆီးမှုရှိသော)** — `INJECTION_GUARD_MODE=block` ဖြင့်
  `promptfoo eval -c promptfooconfig.yaml` ကို လုပ်ဆောင်ပါသည်။ ရန်လိုသော case တစ်ခုစီ (ဥပမာ "ယခင်
  ညွှန်ကြားချက်အားလုံးကို လျစ်လျူရှုပါ…"၊ DAN ပုံစံ jailbreak များ) သည် response တွင်
  `error.code === "SECURITY_001"` ပါရှိကြောင်း အတည်ပြုပါသည်။ တစ်နည်းအားဖြင့် guard က request ကို အမှန်တကယ် ငြင်းပယ်ခဲ့ကြောင်း စစ်ဆေးခြင်းဖြစ်သည်။
- **`garak` (အကြံပြုချက်အဖြစ်သာ)** — ဒေသတွင်း OmniRoute instance (`http://localhost:20128/v1`) ကို
  garak `--probes promptinject,dan,leakreplay` ဖြင့် စမ်းသပ်ပါသည်။ Provider secret
  (`PROMPTFOO_PROVIDER_KEY`) ရှိမှသာ လုပ်ဆောင်ပြီး၊ မရှိပါက ပြဿနာမဖြစ်စေဘဲ ကျော်သွားကာ
  `|| true` ကို နောက်ဆက်တွဲ ထည့်ထားသဖြင့် CI ကို မအောင်မြင်စေဘဲ အစီရင်ခံနိုင်ပါသည်။

Guard helper (`createInjectionGuard` / `withInjectionGuard`) ၏ လွှမ်းခြုံမှုသည်
prompt ပါရှိသည့် `/v1` route အားလုံးကို အကျုံးဝင်ပါသည်။ Prompt စာသားကို
`src/shared/utils/inputSanitizer.ts` ရှိ `extractMessageContents()` က
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` မှ ထုတ်ယူပါသည်။
