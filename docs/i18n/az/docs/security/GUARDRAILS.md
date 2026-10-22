# Guardrails (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Əsas həqiqət mənbəyi:** `src/lib/guardrails/`
> **Son yenilənmə:** 2026-10-17 — v3.8.52 ([Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits) əlavə edildi:
> hook-ların hansı marşrutlara və cavab yollarına çatdığı, birləşdirilmiş deaktivləşdirmə başlıqları (#16412), məcburi sərhəd kimi inyeksiyanın
> bloklama rejimi (#16413) və post-call mərhələsindən əvvəl cavabı nələrin gördüyü)

Guardrail-lər OmniRoute ilə yuxarı axın provayderləri arasındakı sərhəddə
təhlükəsizliyi, siyasətləri və məzmun transformasiyalarını təmin edir. Hər bir guardrail sorğu faydalı yüklərini (`preCall`) və
yuxarı axın cavablarını (`postCall`) yoxlaya (və istəyə bağlı olaraq rədd edə, transformasiya edə və ya annotasiya edə) bilər.

Sistem **xətalara açıqdır (fail-open)**: guardrail icra zamanı xəta atarsa, reyestr
xətanı qeydə alır və sorğunu uğursuz etmək əvəzinə növbəti guardrail ilə davam edir.
Bloklama təsadüfən deyil, açıq qərarla (`block: true`) həyata keçirilir.
Yeganə istisna dayandırılmış sorğudur: çağıranın `signal` siqnalı dayandırıldıqda,
xəta atan guardrail ötürülmək əvəzinə hook icrasının rədd edilməsinə səbəb olur.

Hook-lar hər marşrutda və ya hər cavabda **işləmir**. Guardrail-ə
təhlükəsizlik nəzarəti kimi güvənməzdən əvvəl [Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits) bölməsini oxuyun.

## Daxili Guardrail-lər

Reyestr import zamanı prioritet sırasına uyğun olaraq altı guardrail-i avtomatik yükləyir
(`registry.ts` → `registerDefaultGuardrails()` bölməsinə baxın):

| Prioritet | Ad                  | Mərhələ(lər)   | Fayl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Daha aşağı prioritet nömrələri **birinci** icra olunur.

### Görüntü Körpüsü (`visionBridge.ts`) — Modallıq Körpüsü PR-1

GLM 5.3 baza modelində və `glm-5.3-{low,high,max}` modellərində açıq şəkildə
`supportsVision:false` reyestr/spesifikasiya metadatası var. GLM 5.3 Flash variantları
yerli görüntü dəstəyinə malik modellər olaraq qalır. Claude Code-un `/v1/messages` marşrutu
Claude-dan OpenAI formatına tərcümədən **əvvəl** ortaq `handleChat` pre-call guardrail zəncirinə daxil olur;
iç-içə `Read` alət nəticələrindəki şəkillər həmin tərcümə onları OpenAI `image_url` məzmununa
çevirməzdən əvvəl təsvir edilməli və ya emal olunmalıdır (#17069).

**Görüntünü dəstəkləməyən modellərə** yönəldilmiş şəkil ehtiva edən sorğuları tutur və
yuxarı axın çağırışından əvvəl ya bütün sorğunu görüntünü dəstəkləyən modelə
yönləndirir, ya da şəkil hissələrini konfiqurasiya edilə bilən görüntü modelinin yaratdığı
mətn təsvirləri ilə əvəz edir. Bu, yalnız mətni dəstəkləyən provayderlərin
multimodal faydalı yükləri şəffaf şəkildə emal etməsinə imkan verir.

Axın:

1. Hədəf model artıq görüntünü dəstəkləyirsə, keçin (məcburi körpü siyahısında
   `isVisionBridgeForcedModel` yer alması istisna olmaqla).
2. Şəkil hissələrini `extractImageParts(messages)` vasitəsilə çıxarın
   (`visionBridgeHelpers.ts`); bu funksiya `open-sse/utils/mediaParts.ts` daxilindəki
   **vahid media detektoruna** — kombinasiya uyğunluğu filtri ilə paylaşılan
   yeganə həqiqət mənbəyi olan `detectMediaParts()` funksiyasına həvalə edir.
   Çıxarma əməliyyatı `replaceImageParts` funksiyasının yenidən yerləşdirə bildiyi
   formalarla məhdudlaşdırılıb (çıxarma↔əvəzləmə müqaviləsi): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` və Responses
   API `input_image`. Claude Code `tool_result.content` və Responses alət çıxışları daxilində
   iç-içə yerləşən uyğun şəkillər də çıxarılır və ilkin yollarında
   əvəz olunur; yalnız indikator olan formalar kombinasiya filtri üçün nəzərdə tutulur və çıxarılmır.
   Heç biri tapılmazsa, keçin.
3. İcra vaxtı konfiqurasiyasını `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) vasitəsilə müəyyən edin: yeni `modalityBridge*`
   parametr açarları üstünlük təşkil edir; köhnə `visionBridge*` açarları isə **bir dövrlük
   ehtiyat variant** (geri qaytarma pəncərəsi) olaraq qalır. Körpü deaktivdirsə, hər hansı media
   keçidindən əvvəl bu mərhələni ötürün.
4. Rejim seçicisi (`modalityBridgeVisionMode`, aşağıdakı cədvələ baxın)
   yenidən yönləndirmə və ya təsvir arasında seçim edir. Yenidən yönləndirmə yalnız `model`
   dəyişdirilmiş `modifiedPayload` və əlavə olaraq `{ rerouted, fromModel, toModel, imagesKept }` metadatasını qaytarır.
5. Təsvir yolu: şəkillərin sayını `maxImages` ilə məhdudlaşdırın, tapşırığı nəzərə alan prompt-u yaradın,
   təsvir keşini yoxlayın, görüntü modelini **paralel şəkildə**
   (`Promise.allSettled`) çağırın və şəkillərin yerinə `[Image N]: <description>` mətn hissələrini
   daxil edin. Uğursuz təsvir `null` qaytarır: naməlum/görüntünü dəstəkləyən hədəflər üçün
   xam şəkil qorunur (#4012), lakin **yalnız mətni dəstəklədiyi təsdiqlənmiş birbaşa
   hədəf** və ya görüntü imkanına malik olmayan kombinasiya, qismən uğursuzluqlar və təsvir çağırışı
   limitini aşan şəkillər də daxil olmaqla, təsvir edilməmiş hər bir şəkil üçün açıq şəkildə
   `(unavailable — no vision-capable provider connected)` mətn əvəzedicisi alır (#17069).
   Bütün təsvir cəhdləri uğursuz olduqda mövcud kombinasiya ehtiyat mexanizmi qüvvədə qalır (#8430).
6. `modifiedPayload` və metadatanı (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) qaytarın.

#### Rejim seçicisi (`modalityBridgeVisionMode`)

| Rejim      | İlkin dəyər | Davranış                                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔           | Dəyişdirilməmiş köhnə evristika (#6640/#7204): combo olmayan/`auto/` modellər, ilkin modelin artıq istifadəyə yararlı giriş məlumatları olmadığı halda, ən yaxşı görüntü modelinə yönləndirilir (giriş məlumatları varsa, təsvir edilir); combo hədəflər həmişə təsvir edir.                                                                                 |
| `describe` |             | Həmişə təsvir et — yenidən yönləndirmə bloku tamamilə ötürülür; həmişə istifadəçinin seçdiyi model cavab verir.                                                                                                                                                                                                                                              |
| `reroute`  |             | Məcburi yenidən yönləndirmə: giriş məlumatları olan modeli saxlama qoruyucusu nəzərə alınmır. Yenidən yönləndirmə **hədəfi** üçün giriş məlumatları qoruyucusu yenə də tətbiq olunur — istifadəyə yararlı görüntü hədəfi olmadıqda körpü təsvir etmək və ya xam şəkilləri yalnız mətn dəstəkləyən hədəfə göndərmək əvəzinə aydın xəta ilə sorğunu bloklayır. |

Məcburi rejimlər `auto` evristikası işə düşməzdən **əvvəl** icranı qısa kəsir;
`auto` davranışı PR-1-dən əvvəlki qoruyucu mexanizmlə bayt səviyyəsində eynidir.

#### API açarının əhatə dairəsi (`visionBridgeKeyScope.ts`)

Çağıranın API açarı `allowedConnections`, kvota hovuzlarını
(`allowedQuotas`) və ya modelləri (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) məhdudlaşdırdıqda, körpü yalnız
açarın istifadə edə biləcəyi bağlantılarda, açarın istifadə edə biləcəyi
yenidən yönləndirmə və təsvir modellərini seçir. Daha sonra təsvir çağırışı həmişə
`x-omniroute-self-loop-key-id` başlığı ilə OmniRoute özünə dövrəsi vasitəsilə
keçir, beləliklə qəbul edən çat sorğusu həmin açarın bağlantı və model
siyasətini yenidən tətbiq edir. `enforceApiKeyPolicy()` həmin başlığı yalnız
özünə dövrə bearer-i ilə birlikdə nəzərə alır; buna görə o, yalnız girişi
daralda bilər və mövcud obyektə uyğun gəlməyən id rədd edilir.

Açar üçün heç bir görüntü modelinə icazə verilmirsə, **mətn rejimli olduğu
təsdiqlənmiş hədəf** şəkil baytlarını uyğun olmayan upstream-ə ötürmək əvəzinə
şəkil sorğusunu aydın HTTP 400 xətası ilə lokal olaraq rədd edir (#17069).
Görüntü imkanları naməlum və ya yerli olan hədəflər üçün təsvir yolu əvvəlki
fail-open davranışını saxlayır (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Açarsız sorğular və bu məhdudiyyətlərə malik olmayan açarlar tam olaraq əvvəlki
kimi davranır.

#### Tapşırığı nəzərə alan təsvir sorğusu (`modalityBridgeVisionTaskAware`)

İlkin dəyər **true**-dur. `composeVisionPrompt()` (`visionBridgeHelpers.ts`)
**son istifadəçi mesajının** mətnini (500 simvoladək qısaldılmış) əsas təsvir
sorğusuna əlavə edərək təsviri istifadəçinin həqiqətən soruşduğu mövzuya
yönəldir (codex-vision-proxy nümunəsi) və görüntü modelindən görünən mətni
transkripsiya etməsini istəyir. Bayraq söndürülübsə və ya istifadəçi mətni
yoxdursa, əsas sorğu dəyişdirilmədən istifadə olunur.

Təsvir özünə dövrəsinin OpenAI ilə uyğun öz sorğusu (`callVisionModelSingle()`
funksiyası `visionBridgeHelpers.ts` faylındadır) həmişə `image_url.detail: "high"`
tələb edir — istisnasız olaraq, hər çağıran/provayder üçün və heç bir müştəri
siqnalından asılı olmadan. Aşağı detallı seçmə məhz bu sorğunun tələb etdiyi
mətn transkripsiyası tapşırığında OCR dəqiqliyini pisləşdirir; buna görə təsvir
çağırışının özü, ilkin daxil olan sorğuda hansı detal səviyyəsindən istifadə
olunmasından asılı olmayaraq, həmişə yüksək detal tələb edir. Bu, yalnız daxili
təsvir sorğusunun gövdəsinə təsir edir; OmniRoute-un əsas sorğuda çağıranın öz
`image_url.detail` dəyərini necə ötürdüyünü dəyişdirmir — həmin ilkin dəyər
ayrıca və yalnız aşkarlanmış OpenCode müştəriləri üçün `defaultImageDetail()`
funksiyasında (`open-sse/handlers/chatCore/upstreamBody.ts`) tətbiq olunur.
Təsvir özünə dövrəsinin Anthropic kabel formatı qolunda `detail` sahəsi yoxdur
və bu ilkin dəyərlərin heç biri ona təsir etmir.

#### Təsvir çıxışının limiti (`modalityBridgeVisionMaxChars`)

| Açar                           | İlkin dəyər | Diapazon            |
| ------------------------------ | ----------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` və ya 100–50000 |

`0` (ilkin dəyər) **limit yoxdur** deməkdir — `callVisionModel()` tərəfindən
qaytarılan təsvir dəyişdirilmədən ötürülür və mövcud davranış qorunur.
100–50000 diapazonundakı istənilən dəyər təsviri yenidən
`[Image N]: <description>` şəklində yerləşdirilməzdən əvvəl `…` suffiksi ilə
qısaldır (`VisionBridgeGuardrail.preCall()` funksiyası
`src/lib/guardrails/visionBridge.ts` faylındadır). Aşağı axın modelinin tam
transkripsiyaya ehtiyac duyduğu, çoxlu detal ehtiva edən OCR tapşırıqları üçün
bu dəyəri artırın; çox danışan görüntü modellərində token istifadəsini
məhdudlaşdırmaq üçün isə azaldın. İdarəetmə panelindəki sahə Vision
sekməsinin Advanced panelində yerləşir (`ModalityBridgeVisionTab.tsx`
faylındakı `modality-bridge-max-chars`) və açıq şəkildə göstərilmiş `0`
dəyərinə toxunmadan 1 ilə 99 arasındakı istənilən dəyəri minimum 100 həddinə
qaldırır — `0` sadəcə "təyin edilməyib" ilkin dəyəri deyil, ayrıca etibarlı Zod
dəyəridir (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### Təsvir keşi (`modalityBridge/bridgeCache.ts`)

Təsvir çıxışları üçün proses səviyyəsində ortaq istifadə edilən yaddaşdaxili
LRU + TTL keşi. Açar = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
uzunluq prefiksli çərçivələmə ilə (sahə sərhədlərinin toqquşması yoxdur). Model
komponenti faktiki cavab vermiş model deyil, **konfiqurasiya edilmiş** körpü
modelidir — `callVisionModel` daxildə ehtiyat modelə keçə bilər və hər cəhdə
görə açar yaratmaq keşi parçalayardı. Uğursuz təsvirlər heç vaxt keşlənmir.
Parametrlər:

| Açar                            | İlkin dəyər | Diapazon |
| ------------------------------- | ----------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`      | —        |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000  |

#### Uzaq təsvirin normallaşdırılması (özünə dövr edən təsvir/base64 gətirilməsi)

Körpü **uzaq** təsviri özü əldə etdikdə — Anthropic təsvirinin özünə çağırışı və claude-wire-format base64 çevrilməsi (`ensureBase64ImagesForClaudeWire`), hər ikisi `visionBridgeHelpers.ts` daxilindəki `fetchRemoteImageAsDataUri()` vasitəsilə — nəticədə yaranan data URI görmə modeli sorğusuna yerləşdirilməzdən əvvəl `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) vasitəsilə emal olunur. Həddindən böyük təsvirlər **uzun tərəfi 2048px** ölçüsünədək kiçildilir (OpenAI/Anthropic-in artıq server tərəfində tətbiq etdiyi ölçü limitinə uyğun olaraq); bu, görmə modelinin gördüyü məzmunu dəyişmədən yüklənən baytların həcmini və gecikməni azaldır. Ölçünün dəyişdirilməsi dinamik import vasitəsilə yüklənən `sharp` paketindən istifadə edir: onun yerli binar faylının yüklənə bilmədiyi platformada `normalizeDataUri()` **heç vaxt xəta atmır** — ilkin baytları dəyişmədən ötürür və beləliklə, təsvir/base64 çevrilməsi yolu həmişə işləməyə davam edir. Təsvir olmayan baytlar (dekodlaşdırıla bilən təsvir qaytarmayan gətirmə əməliyyatı) da dəyişdirilmədən ötürülür. Bu normallaşdırma yalnız körpünün özünə çağırış üçün əldə etdiyi təsvirlərə tətbiq olunur — yalnız açıq razılıqla dəyişiklik prinsipinə (Sərt Qayda #20) uyğun olaraq, çağıran tərəfin xam, dəyişdirilmədən ötürülən faydalı yükünə heç vaxt tətbiq edilmir.

#### Parametrlər sxemi + miqrasiya

Yeni `modalityBridge*` açarları `updateSettingsSchema` daxilində (`src/shared/validation/settingsSchemas.ts`) Zod ilə yoxlanılır: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` üçlüyü və Audio Bridge tərəfindən istifadə edilən `modalityBridgeAudio*` qrupu. `141_modality_bridge_settings.sql` miqrasiyası mövcud köhnə `visionBridge*` dəyərlərini uyğun yeni açarlara köçürür (idempotentdir və operator tərəfindən təyin edilmiş `modalityBridge*` dəyərinin üzərinə heç vaxt yazmır); köhnə açarlar bir buraxılış dövrü ərzində oxuma ehtiyatı kimi qəbul edilməyə davam edir.

#### Şəffaflıq başlığı + statistika

Təsvirlə çevrilmiş cavablarda `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` başlığı olur (`modalityBridge/bridgeStats.ts` daxilindəki `buildModalityBridgeHeader()` tərəfindən yaradılır, `src/sse/handlers/chatHelpers.ts` daxilindəki `withModalityBridgeHeader()` tərəfindən əlavə edilir). Yenidən marşrutlaşdırılmış sorğular **heç bir** başlıq almır — faydalı yük dəyişdirilməyib və model dəyişikliyi cavab gövdəsinin `model` sahəsində artıq görünür.

`GET /api/modality-bridge/stats` (idarəetmə autentifikasiyası, `GET /api/settings` ilə eyni səviyyə) `vision`, `audio` və `video` üçün yaddaşdakı hər modallıq üzrə `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` sayğaclarını qaytarır. `averageLatencyMs` məxrəc kimi bütün cəhdlərdən deyil, `latencySamples` dəyərindən istifadə edir; vaxtı ölçülməyən əməliyyat saxta sıfır millisaniyəlik nümunə yaratmır. `bridged` uğurlu çevrilmələr üçün geriyə uyğun ləqəb olaraq qalır; uğursuz cəhdlər onu artırmır. Sayğaclar nəzərdə tutulduğu kimi proses yenidən başladıqda sıfırlanır (bu, uçot deyil, telemetriyadır).

#### İdarəetmə panelinin konfiqurasiyası

Xüsusi idarəetmə paneli səhifəsi `/dashboard/settings/modality-bridge` ünvanındadır. Onun URL vasitəsilə ünvanlana bilən `Vision`, `Audio` və `Video` tabları `tab` dəyərini dəyişərkən sorğu parametrlərini qoruyur. Vision tabı aktivləşdirmə, rejim, model seçimi (avtomatik ilkin dəyər daxil olmaqla), tapşırığa uyğun sorğu yaradılması, təkmil vaxt aşımı/təsvir/təsvir mətninin uzunluğu/keş limitləri, icra vaxtı sayğacları və qorunan nümunə sorğusu təqdim edir. Audio tabı da aktivdir: o, aktivləşdirmə, Auto seçimi olan yalnız STT üçün model seçicisi, vaxt aşımı/maksimum klip limitləri, audio sayğacları və `input_audio` nümunə testi təqdim edir. Video tabı funksionaldır: o, FFmpeg/ffprobe icra mühitinin vəziyyətini — dörd aydın UI vəziyyətindən birini (`unknown`: yoxlama davam edərkən və ya tamamlana bilmədikdə; `restricted`: yoxlamanın müştəri tərəfində buraxıldığı, dövrəvi olmayan idarəetmə paneli hostunda; `unavailable`: yoxlanılıb mövcud olmadığı təsdiqləndikdə; yaxud `available`: FFmpeg/ffprobe versiyaları ilə birlikdə) — bildirir, aktivləşdirmə/model/kadr/video/vaxt aşımı limitlərini yadda saxlayır, model seçicisini görmə imkanlı modellərlə məhdudlaşdırır və video sayğaclarını təqdim edir.

AI parametrləri altındakı əvvəlki Vision Bridge kartı yeni səhifəyə uyğunluq keçididir; o, artıq formanın ikinci nüsxəsini saxlamır. Media Providers həmçinin mövcud Speech-to-Text sınaq mühitini silmədən Image-to-Text və Speech-to-Text iş axınlarını müvafiq Modality Bridge tablarına bağlayır.

**Özünə dövr üçün qəbulun yan keçilməsi:** təsvir çağırışı OmniRoute-un öz `/v1` dövrəsi (standart olmayan provayder modeli) vasitəsilə marşrutlaşdırıldıqda, alt sorğu `x-omniroute-admission-bypass: internal` göndərir və müəyyən edilmiş özünə dövr etimadnaməsi ilə autentifikasiya olunur — yerli rejimdə yerli `sk_omniroute` sentinel dəyəri, yaxud operator tərəfindən konfiqurasiya edilmiş `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` mühit açarı (#1350); beləliklə, `REQUIRE_API_KEY=true` olan yerləşdirmələrdə də təsvir çağırışı işləyə bilir. Yan keçmə yalnız həmin dəqiq etimadnamələr üçün qəbul edilir, buna görə xarici müştərilər qəbul yoxlamasını keçmək üçün bu başlıqdan istifadə edə bilməz.

Köhnə ilkin dəyərlər `src/shared/constants/visionBridgeDefaults.ts` daxilindədir; yeni rejim/tapşırığa uyğunluq/keş ilkin dəyərləri və parametrlər həlledicisi `src/shared/constants/modalityBridgeDefaults.ts` daxilindədir. Qoruyucu mexanizm testlərin saxta `getSettings` və `callVisionModel` implementasiyaları daxil edə bilməsi üçün `deps` konstruktor seçimini təqdim edir.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Audio girişini qəbul etdiyi məlum olmayan hədəfə çatmazdan əvvəl audio ehtiva edən çat sorğularını tutur. O, çat sorğusunu heç vaxt yenidən marşrutlaşdırmır: audio hissələri mövcud OpenAI-uyğun çoxhissəli son nöqtə vasitəsilə transkripsiya edilir və seçilmiş çat modeli mətn transkriptləri ilə işləməyə davam edir.

Axın:

1. `supportsAudio` göstəricisini `getResolvedModelCapabilities()` vasitəsilə müəyyənləşdirin. Açıq şəkildə göstərilən
   provider-registry metadatası üstünlük təşkil edir, sonra statik model metadatası, daha sonra isə sinxronlaşdırılmış
   `modalities_input` nəzərə alınır. `audio` ehtiva etməyən elan edilmiş giriş siyahısı `false` sayılır;
   imkanla bağlı heç bir sübut yoxdursa, nəticə `null` olur. Həm `false`, həm də `null`
   konservativ körpünü aktivləşdirir, `true` isə onu yan keçir.
2. `modalityBridgeAudio*` parametrlərini müəyyənləşdirin və ortaq `detectMediaParts()`
   detektoru vasitəsilə hər mesajdan birləşdirilə bilən üst səviyyəli
   audio hissələrini çıxarın. Dəstəklənən ötürmə formatları OpenAI `input_audio`, `audio_url` və
   `source.media_type: "audio/*"` formatlarıdır. İç-içə audio marşrutlaşdırma üçün aşkarlanır, lakin
   birləşdirmə yolu tərəfindən silinmir. Emal `modalityBridgeAudioMaxClips` ilə məhdudlaşdırılır;
   sonrakı hissələrə toxunulmur.
3. Konfiqurasiya edilmiş `provider/model` dəyərinə riayət edin və ya `selectAudioBridgeModel()` funksiyasına
   `AUDIO_TRANSCRIPTION_PROVIDERS` siyahısını stabil kataloq ardıcıllığı ilə gəzməyə və istifadəyə yararlı
   aktiv provayder etimadnaməsinə malik ilk modeli seçməyə imkan verin.
4. `callAudioTranscription()` base64/data-URI audionu çoxhissəli
   `file` formatına çevirir və ya uzaq `audio_url` resursunu DNS sabitləməsi və 25 MB
   məhdudiyyəti ilə yalnız ictimai resurslara icazə verən çıxış qoruyucusu vasitəsilə endirir. Daha sonra faylı və seçilmiş
   modeli `resolveSelfLoopBearer()` ilə autentifikasiya olunan lokal `/v1/audio/transcriptions`
   özünədövrə sorğusuna POST edir. Mövcud transkripsiya marşrutu standart
   etimadnamə axtarışını, gözləmə müddəti/sorğu tezliyi məhdudiyyətinin emalını və provayderə yönləndirməni həyata keçirir.
5. Uğurlu çağırışlar müvafiq hissələri `[Audio N]: <transcript>` ilə əvəz edir. Çağırışlar
   `Promise.allSettled` ilə icra olunur: ayrıca bir uğursuzluq həmin orijinal
   audio hissəsini qoruyur (#4012 müqaviləsi). Bütün çağırışlar uğursuz olarsa və hədəfin
   `supportsAudio === false` olduğu sübut edilərsə, hissələr
   `[Audio N]: (unavailable — no STT provider connected)` formasını alır (#8430 müqaviləsi).
   Naməlum hədəf (`null`) üçün bütün çağırışların uğursuz nəticəsi dəyişdirilmədən saxlanılır. İstifadəyə yararlı
   STT etimadnaməsi olmayan və yalnız mətn dəstəklədiyi sübut edilmiş hədəf şəbəkə çağırışı etmədən eyni açıq
   doldurucu mətni alır.

Uğurlu transkriptlər proses miqyasında ortaq Modality Bridge LRU/TTL keşindən istifadə edir.
Açar audio istinadını, stabil `audio-transcription` əməliyyat
etiketini və seçilmiş STT modelini birləşdirir; uğursuzluqlar heç vaxt keşlənmir. Audio cəhdləri ortaq
`bridged`, `cacheHits`, `failures` və `lastUsedAt` sayğaclarını yeniləyir.
Transformasiya edilmiş cavablar
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` başlığını daşıyır; toxunulmamış
sorğular Audio Bridge seqmenti almır.

İcra vaxtı parametrləri DB-də saxlanılır və Zod ilə doğrulanır:

| Açar                          | Standart | Diapazon               |
| ----------------------------- | -------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                      |
| `modalityBridgeAudioModel`    | `""`     | Avtomatik və ya STT ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                   |

Ortaq keş yenə də `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` və `modalityBridgeCacheMaxEntries` vasitəsilə idarə olunur.

### Video Körpüsü (`videoBridge.ts`, `videoBridgePipeline.ts`)

Məlum yerli video dəstəyi olmayan hədəf çağırılmazdan əvvəl Chat Completions `messages`
və Responses API `input` daxilindəki üst səviyyəli video hissələrini tutur.
Dəstəklənən formatlar `input_video`, `video_url`, `video_source`, HTTPS URL-ləri
və `data:video/*;base64,...` data URI-ləridir. Mətn daxilindəki adi fayl adları
video kimi qəbul edilmir.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) sorğunun nəzərdən keçirilməsini,
imkan/siyasət yoxlamasını, sorğu üzrə aqreqasiyanı və cavabın faydalı yükünü idarə edir.
Hər video üzrə iş — resursun əldə edilməsi, tam nəticə keşi, kadrlar ardıcıllığının
təsviri (çağıran tərəfindən elan edilmiş istənilən audio transkriptini birləşdirir) və hər cəhd üzrə
metriklər/dayandırma/təmizləmə — `videoBridgePipeline.ts` daxilindəki `processVideoPart`
arxasında gizlədilir və `preCall` dövrəsi daxilində hər video hissəsi üçün bir dəfə çağırılır.
Həmin modul həmçinin açıq port sərhədlərini müəyyənləşdirir: `VideoMediaBrokerPort`
(baytların əldə edilməsi və nümunələnmiş kadrların çıxarılması), `VideoAudioTranscriptionPort`
(çağıran tərəfindən elan edilmiş audio transkriptinin nümunələnmiş kadr təsvirləri ilə birləşdirilməsi) və
`VideoDrilldownPort` (kadrların detallı təhlilinin saxlanma sərhədi; hələ
`processVideoPart` daxilində qoşulmayıb — hazırda yalnız ayrıca `/api/modality-bridge/video/drilldown`
marşrutu detallı təhlil qeydlərini yazır).

İctimai `/v1` sorğu yolu heç vaxt alt prosesi idxal etmir və ya çağırmır. Uzaq
videolar 50 MiB məhdudiyyəti daxilində endirilir; daxili base64 videoları üçün hər video üzrə
konservativ 36 MiB dekodlaşdırılmış məlumat limiti tətbiq olunur ki, model/messages/çərçivələmə zərfi
ictimai JSON sorğularının 50 MiB-lıq qəbul limiti daxilində qala bilsin. Daxili
uzunluq və dekodlaşdırılmış ölçü təxminləri yaddaş ayrılmazdan əvvəl yoxlanılır. İlkin uzaq URL-də və
hər yönləndirmədə HTTPS tələb olunur və DNS sabitləməsi ilə mövcud
yalnız ictimai resurslara icazə verən çıxış qoruyucusundan istifadə edilir. Daha sonra baytlar dəqiq daxili
`POST /api/modality-bridge/video/extract` broker sərhədindən keçir. Bu marşrut həm
`LOCAL_ONLY`, həm də `SPAWN_CAPABLE` xüsusiyyətinə malikdir, yalnız hər proses üçün autentifikasiya edilmiş,
etibarlı geri-dövrə sorğusunu qəbul edir və heç vaxt URL, fayl sistemi yolu, icra olunan fayl
və ya arqument siyahısı qəbul etmir. API sorğu gövdəsinin ölçüsünü idarə edən konveyer və işləyicinin artımlı gövdə
oxuyucusu müstəqil şəkildə broker girişinə 50 MiB limit tətbiq edir. Onun məhdudlaşdırılmış növbəsi
eyni anda bir çıxarma əməliyyatı icra edir, dörd gözləyən işə icazə verir və gözləyən giriş məlumatını
100 MiB ilə məhdudlaşdırır.

Broker daxilində `ffprobe` məxfi lokal faylı oxuyur; sabit format üzrə icazə siyahısı pleylist və manifest formatlarını istisna edir. İcazə verilən MOV ailəsinə aid konteynerlər üçün xarici MOV məlumat istinadları standart olaraq deaktiv qalır və sabit komanda onları aktivləşdirmir. Həm `ffprobe`, həm də `ffmpeg` yalnız `file` protokolundan ibarət icazə siyahısından, bir axından, sabit arqument massivlərindən istifadə edir, shell istifadə etmir və icra olunan faylları `PATH` vasitəsilə tapır. Əlavə edilmiş şəkil tipli üz qabığı axınları oynadıla bilən namizədlər deyil. Oynadıla bilən bütün axınlar limitlərə uyğun olmalıdır və deterministik ən aşağı indeksli ehtiyat seçimdən əvvəl açıq şəkildə standart kimi təyin edilmiş axına üstünlük verilir. Videolar 600 saniyə, hər ölçü üzrə 8,192 piksel və 33,554,432 mənbə pikseli ilə məhdudlaşdırılır. FFmpeg orta nöqtələrdən 1–16 JPEG kadrı seçir, kiçik girişləri böyütmədən uzun tərəfi ən çox 1,024 pikselə qədər kiçildir və heç vaxt URL qəbul etmir. Nümunə götürmə standart olaraq `uniform` rejimindədir. İxtiyari `scene_aware` və eksperimental `segment_aware` siyasətləri artıq doğrulanmış lokal axın üzərində bir əlavə sabit FFmpeg keçidi həyata keçirir, məhdudlaşdırılmış `showinfo` səhnə zaman nişanlarını seçir və detektor nasazlığı, vaxt aşımı, yanlış formatlı çıxış və ya boş namizəd dəsti halında deterministik şəkildə eyni bərabər intervallı orta nöqtələrə qayıdır. Seqmentdən xəbərdar rejim orta nöqtə nümunələrini doğrulanmış səhnə intervallarına mütənasib şəkildə bölüşdürür; seqmentdən xəbərdar sübutlar və ehtiyat davranışı aşağıda ətraflı izah edilir. Sərt 16 kadr limiti hər siyasətdə seçimdən sonra tətbiq olunur. Səhnədən xəbərdar sorğunun yalnız bir kadrlıq büdcəsi olduqda, aktiv tam video və ya fokus pəncərəsinin bərabər intervallı orta nöqtəsindən istifadə edilir və `policyEffective: uniform` bildirilir: seçilmiş tək səhnə kadrı zaman diapazonunun hər iki ucunu qoruyub saxlaya bilməz. Çağıran tərəf istəyə bağlı olaraq sonlu fokus pəncərəsi (`start`/`end` saniyələri) təqdim edə bilər; sərhədlər media müddətinə uyğun məhdudlaşdırılır, tərsinə çevrilmiş və ya sonlu olmayan pəncərələr rədd edilir və bütün nümunə götürmə siyasətləri yalnız normallaşdırılmış interval daxilində icra olunur. Nəticədə yaranan pəncərə nümunə götürmə metadatasına və etibar edilməyən təsvir prefiksinə daxil edilir ki, aşağı axındakı modellər fokuslanmış fraqmenti tam zaman xəttindən fərqləndirə bilsin.

Semantik başlıq fokusu ayrıca və açıq şəkildə təyin edilən parametrdir. Standart `full` analiz rejimi mövcud kadr promptunu qoruyur və sorğu mətnini heç vaxt başlıq modelinə ötürmür. `focused` rejimində körpü eyni Chat və ya Responses konteynerindən yalnız istifadəçinin yazdığı ən son boş olmayan `text`/`input_text` mətnini oxuyur, onu NFC formasına normallaşdırır, idarəetmə simvollarını və boşluqları sıxlaşdırır və 500 Unicode kod nöqtəsi ilə məhdudlaşdırır. Boş nəticə olduqda dəqiq `full` promptuna qayıdılır. İstifadəyə yararlı ipucu xüsusi etibar edilməyən istifadəçi konteksti blokunda JSON kimi seriallaşdırılır və yalnız müşahidə edilə bilən detalları prioritetləşdirə bilər; o, mediada görünən və ya eşidilən təlimatlara əməl etməmək barədə ayrıca xəbərdarlığı ləğv edə bilməz. Mətn fokusu heç vaxt `start`/`end` dəyərlərini çıxarmır və zaman nümunələyicisini dəyişdirmir.

#### FU-07 struktur seqment sübutları

`segment_aware` artıq doğrulanmış lokal video axını üzərində bir məhdudlaşdırılmış ilkin analiz keçidindən istifadə edir. Sabit filtr zənciri əvvəlcə eni ən çox 320 pikselə qədər kiçildir, səhnə dəyişikliklərini və donmuş intervalları aşkarlayır, sonra bulanıqlıq, orta parlaqlıq və məkan/zaman məlumatı üçün saniyədə 1 kadr nümunəsi götürür. Keçid 600 struktur nümunəsi, bir FFmpeg/filtr axını, eyni yalnız `file` protokolundan ibarət icazə siyahısı və konteyner icazə siyahıları, 1 MiB proses çıxışı həddi və brokerin ortaq dayandırma/son müddəti daxilində maksimum 30 saniyə ilə məhdudlaşdırılır. O, sorğudan heç vaxt komanda, filtr, yol və ya URL qəbul etmir.

Struktur dəyərləri semantik video anlayışı deyil, deterministik nümunə götürmə sübutlarıdır. Onlar subyektləri, hərəkətləri, başlıqları, nitqi və ya istifadəçi niyyətini müəyyən etmir. Səhnə və donma sərhədləri seqmentləri formalaşdırır; donma əhatəsi, bulanıqlıq, ekspozisiya, məkan detalları və zaman dəyişiklikləri yalnız mövcud 1–16 kadrlıq büdcənin necə bölüşdürüldüyünə təsir edir. Tamamilə donmuş seqment maksimum bir kadrla məhdudlaşdırılır, donmamış seqmentlər isə qalan büdcə uğrunda rəqabət aparır. Sərhədlərin sayı kadrların sayını keçdikdə, zaman xətti üzrə bərabər paylanmış əhatə saxlanılır ki, başlanğıcdakı sürətli keçidlər uzun son seqmenti gizlətməsin. Donma sərhədinin 1 saniyəlik analiz ayırdetmə qabiliyyəti daxilində yerləşən səhnə sərhədləri birləşdirilir.

Çatışmayan filtrlər, yanlış formatlı və ya boş sübutlar, detektor xətası və ya məhdudlaşdırılmış ilkin analizin vaxt aşımı dəqiq bərabər intervallı orta nöqtə siyasətinə açıq keçidlə nəticələnir. Çağıran tərəfin dayandırması və ya brokerin son müddətinin bitməsi açıq keçidlə nəticələnmir: icra olunan alt prosesi dayandırır, sonrakı kadr çıxarılmasının qarşısını alır və məxfi müvəqqəti ağac `finally` daxilində silinir.

`scripts/perf/video-bridge-fu07-eval.ts` deduplikasiyadan sonrakı başlıq çağırışı qənaəti, sıx hərəkət büdcəsinin bölüşdürülməsi, bulanıqlıq/ekspozisiya/SI-TI sübutları, uzun sonluqlu sürətli keçidlər və tədricən solmanın yanlış müsbət nəticələri üçün deterministik real FFmpeg test nümunələri yaradır. O, ilkin analizin faktiki müddətini və `/usr/bin/time` mövcud olduqda alt prosesin CPU istifadəsi ilə pik RSS göstəricisini qeydə alır. Onun keyfiyyət yoxlamaları yalnız struktur orakullarıdır. Real başlıq modelinin keyfiyyəti `HOLD` olaraq qalır, çünki bu test infrastrukturunda səlahiyyətli son nöqtə və ya sabitlənmiş qiymətləndirici yoxdur. Pul qənaəti də `--caption-cost-per-call-usd` açıq müsbət çağırışbaşına xərc təxmini təqdim etmədiyi halda `HOLD` olaraq qalır; skript heç bir nəticəni uydurmur.

Hər kadr 4 MiB, bütün xam kadrlar birlikdə 23 MiB, seriallaşdırılmış broker cavabı isə 32 MiB ilə məhdudlaşdırılır. Şəxsi müvəqqəti qovluq `finally` blokunda silinir. OmniRoute FFmpeg-i paketə daxil etmir və fərdi icra olunan fayl yolunu qəbul etmir. Subtitrləmədən əvvəl körpü konservativ vizual dublikat aradan qaldırma mərhələsi tətbiq edir: hər JPEG 16×16 ölçülü boz çalarlar buferinə kiçildilir və yalnız saxlanılan sonuncu kadrla müqayisə edilir. Bir kadrdan çox tələb olunan subtitr büdcəsi üçün çıxarma prosesi həmin büdcənin ən çox iki misli qədər, lakin heç vaxt 16 kadrdan artıq olmayan məhdud namizəd hovuzu təqdim edir. Tələb olunan limit yalnız dublikatlar aradan qaldırıldıqdan sonra tətbiq edilir; büdcə ən azı iki olduqda yekun seyrəltmə zamanı seçilmiş ilk və son namizədlər qorunur. Versiyalaşdırılmış `grayscale-16x16-mean-cells-v2` siyasəti orta parlaqlıq fərqi ilə normallaşdırılmış fərqi ən azı 0,05 olan miniatür xanalarının nisbətindən daha böyük olanını istifadə edir. Dublikat həddi proqnozlaşdırıla bilməsi üçün seçilmiş 0,04 sabitidir və icra vaxtı parametri kimi təqdim edilmir. Bu ikinci yüksək kontrastlı siqnal yalnız orta qiymətə əsaslanan müqayisənin gizlədə biləcəyi kiçik hərəkətləri və görünən mətn dəyişikliklərini qoruyur. Komparator və ya dekoder xətaları açıq uğursuzluq prinsipi ilə işləyir və əhatəni saxlayır. Çıxış metadatası çıxarılmış namizədləri, uğurla istifadə edilmiş kadrları və atılmış vizual dublikatları ayrı-ayrılıqda göstərir.

Açıq şəkildə işarələnmiş video hissəsi vaxt nişanlı kontakt vərəqi tələb edə bilər. Körpü ən çox 4 sütundan və 16 kadrdan ibarət JPEG toru yaradır. 512 piksellik hər xana mənbə vaxt nişanını yüksək kontrastlı alt zolağa həkk edir; eyni vaxt nişanları sonrakı əlaqələndirmə və audit üçün mətn metadatasında da saxlanılır. Tam JPEG 32 MiB ilə məhdudlaşdırılır. `sharp` torun dekodlaşdırılmasını və ya tərtib edilməsini həyata keçirə bilməzsə, körpü ayrı-ayrı JPEG kadrlarına geri qayıdır; müştəri tərəfindən dayandırılma yenə də vərəq əməliyyatına ötürülür.

İrəlilətmə sübutları sintetik kompozisiya mikrobençmarkından məqsədli şəkildə ayrıdır. `scripts/perf/video-bridge-contact-sheet-eval.ts` real OpenAI-uyğun görüntü modelləri üçün sxem versiyalı A/B sınaq çərçivəsi müəyyən edir. O, provayder tərəfindən bildirilən tokenləri, başdan sona divar saatı gecikməsini (vərəqin tərtib edilməsi daxil olmaqla), model çağırışlarının sayını və manifestlə müəyyən edilən faktların saxlanmasını ölçür. Xam model cavabları hesabata yazılmır; yalnız SHA-256 xülasələri və uyğun gələn fakt identifikatorları saxlanılır. `--execute-real` ötürülmədikcə və `--model`, `OMNIROUTE_BASE_URL` və `OMNIROUTE_API_KEY` konfiqurasiya edilmədikcə sınaq çərçivəsi heç bir şəbəkə və ya ödənişli model çağırışı etmir. Belə açıq real icra olmadan onun maşın tərəfindən oxuna bilən hökmü `HOLD` olaraq qalır; yalnız sintetik faydalı yük və çağırış sayı ölçmələri irəlilətmə sübutu deyil.

Çağıranlar artıq sinxronlaşdırılmış mətnə sahib olduqda dəstəklənən video hissəsinə istəyə bağlı `transcript.cues` massivi əlavə edə bilərlər. Hər replika `text`, yoxlanılmış müddət daxilində sonlu `start`/`end` intervalı və icazə siyahısındakı `source` (`client`, `embedded` və ya `audio-bridge`) daşımalıdır; `confidence` üçün standart dəyər `1`-dir və o, `0` ilə `1` arasında qalmalıdır. Tam eyni olan replikalar birləşdirilir. OmniRoute bu metadata əsasında heç vaxt transkripsiya başlatmır: doğrulanmış replikalar mənbə, etibarlılıq və intervalla birlikdə təsvir edilmiş nəticəyə köçürülür və kadr subtitrlərinin yanında etibar edilməyən müşahidələr kimi göstərilir. Etibarsız, diapazondan kənar və ya mənşəyi göstərilməyən mətn subtitr axınına qarışdırılmaq əvəzinə rədd edilir. Sorğu gövdəsindəki hər iki transkript kanalı təqdim edilmiş mənşəyi, o cümlədən özünün bəyan etdiyi `embedded` və ya `audio-bridge` etiketlərini `client` olaraq normallaşdırır. Yalnız serverə məxsus adapter həmin etibarlı etiketləri yalnız kod vasitəsilə əlçatan `trustedSource` arqumenti ilə təyin edə bilər; sorğunun JSON sahəsi həmin arqumentə çata bilməz. Mənşəyindən asılı olmayaraq, transkript mətni etibar edilməyən, mediadan əldə olunmuş məzmun olaraq qalır və heç vaxt avtorizasiyanı müəyyən etməməlidir.

Təkmil çağıran eyni video üçün `audioTranscript` treki təqdim edə bilər; bu, server transkripsiyasının sübutu deyil, müştəri tərəfindən təqdim edilmiş mətn kimi qəbul edilir. Birləşdirmə sərhədi vizual və audio müşahidələri vahid son müddət və dayandırma siqnalı altında icra edir, onları ümumi zaman xəttində sıralayır, tam dublikatları birləşdirir və yalnız bir tərəf uğurlu olduqda qismən nəticə bildirir. Etibarsız `audioTranscript` bütün videonun emalını uğursuz etmək əvəzinə həmin qismən nəticəyə keçir — vizual təsvir saxlanılır, audio şaxə isə təmizlənmiş xəta kodunu qeydə alır. Hər şaxənin əlçatanlığı, qismənlik bayrağı və təmizlənmiş xəta kodları təsvir edilmiş nəticədə, qoruyucu mexanizm metadatasında (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nəticə keşinin metadatasında və körpünün birləşdirmə sayğaclarında saxlanılır. Standart Video Bridge yolu nitqdən-mətnə çevirməni işə salmır və ikinci media nüsxəsini endirmir; bu açıq şəkildə təqdim edilən trek olmadıqda o, yalnız video rejimində qalır.

**Transkriptin saxlanması (#12150 P1).** Bu, Video Bridge (özü seçimlə aktivləşdirilir) transkript işarəsini render etdikdə avtomatik tətbiq olunur — ayrıca saxlanma bayrağı yoxdur. Sorğu hər hansı transkript işarəsini (çağıran tərəfindən elan edilmiş `transcript` və ya birləşdirilmiş `audioTranscript`) render etdikdə, qoruyucu mexanizm onu `videoBridgeObserved` kimi işarələyir və video təsvirinin redaktə edilmiş kölgə nüsxəsini yaradır — bu, hər bir işarənin sərbəst mətn gövdəsinin `[redacted-video-transcript]` ilə əvəzləndiyi eyni renderdir və sətir yığılmazdan əvvəl strukturlaşdırılmış işarə sahəsinin əvəzlənməsi ilə yaradılır (heç vaxt hamarlanmış mətn təhlil edilmir, buna görə də heç bir işarə məzmunu — istər zərərli, istərsə də adi, o cümlədən `[inaudible]`/`[music]` kimi `]` ehtiva edən gövdələr — qorunub qala bilməz). Saxlanılan çağırış jurnalı sorğusunun gövdəsində videodan əldə edilmiş hər bir mətn hissəsi məzmun bərabərliyinə əsasən uyğunlaşdırılaraq həmin redaktə edilmiş kölgə nüsxəsi ilə əvəzlənir; `fullText` istinadı çağırışdan əvvəlki tamamlanmış qoruyucu mexanizm yükündən yenidən oxunur, buna görə sonrakı zəncir qoruyucu mexanizmləri (PII və etimadnamə maskalayıcıları, prioritetlər 10/95) təsvir mətnini yerində yenidən yazdıqdan və sistem promptu/təhvilvermə/yaddaş inyeksiyası mesaj massivinin formasını dəyişdirdikdən sonra belə uyğunlaşdırma uğurlu olur. Modelə yuxarı axın üzrə göndərilən gövdə dəyişməz qalır. Müşahidə edilmiş sorğu həmçinin davamlı Memory-ni doldurmur (həm sorğudan, həm də cavabdan əldə edilən çıxarış ötürülür), beləliklə modelin öz cavabı transkript mətnini Memory-yə əks etdirə bilməz.

**Xam video sahələri (#12430).** Körpü aktiv olduqda və yerli video dəstəyinin olub-olmadığı məlum olmadıqda və ya bu dəstək mövcud olmadıqda, müəyyən edilmiş `transcript`/`audioTranscript` sahələri, hətta təsvir xətasından və ya `maxVideos` limitindən sonra belə, `videoBridgeObserved`-u aktivləşdirir. `null` və boş sətirlər nəzərə alınır; mövcud olmayan sahələr və videoya aid olmayan metadata nəzərə alınmır. Saxlanılan nüsxələr bu sahələri redaktə edir və ya sorğunu buraxır, keşlərdən/Memory-dən isə yan keçilir.

Həmin ehtiyat yollarda çağıranın etibarlı işarələri qeyri-standart provayder sahələri əvəzinə dəstəklənən `text`/`input_text` hissələrinə çevrilir. Sorğuda təqdim edilən hər iki trek, videonun təsvir edilmədiyi və vaxt nişanlarının media ilə tutuşdurulmadığı barədə açıq xəbərdarlıqla birlikdə, etibar edilməyən `client` müşahidələri olaraq qalır. Mövcud 256 işarə/64 KiB ümumi və hər işarə üçün büdcələr iki trekə birlikdə tətbiq olunur; vaxt nişanları brokerin 600 saniyəlik yuxarı həddinə və təqdim edilmiş hər hansı fokus pəncərəsinə uyğun gəlməlidir. Etibarsız treklər ixtiyari mətn kimi ötürülmür, atılır; birləşdirilmiş büdcə aşılmadığı halda etibarlı eyni səviyyəli trek yenə də istifadə edilə bilər. Null/boş sahələr heç bir mətn əlavə etmir. Bu ehtiyat mexanizmi media əldə edilməsi və ya transkripsiya əlavə etmir. Transkript genişləndirmə sahələri ehtiyat video daşıyıcısından və onun `video_url`/`source` obyektlərindən silinir. OpenAI ötürmə səviyyəsinin icazə siyahısı sərt olaraq qalır; yerli dəstəyi naməlum olan video daşıyıcıları əlçatan qalır və yalnız mətni dəstəklədiyi məlum olan hədəflər təhlükəsiz markerləri saxlayır. Strukturlaşdırılmış redaktə kölgələri əlavə edilmiş transkript mətnini qoruyur, çağırana məxsus orijinal sorğu isə dəyişməz qalır. Yerli dəstəyi olan hədəflər və deaktiv edilmiş körpülər mövcud yan keçmə davranışlarını saxlayır.

Əlavə saxlanılan nüsxələr eyni müşahidə edilmiş sorğu siqnalından istifadə edir. Qoruyucu mexanizmdən əvvəlki xam müştəri sorğusu ani görüntüsü, yaddaşdakı gözləyən sorğu və erkən rədd edilmiş sorğu jurnalı video hissələrindəki transkript sahələrini struktur şəkildə əvəzləyir; konveyer mərhələləri və kontekst təhvilverməsi tərəfindən sintez edilən sətir promptları saxlanılan sorğu gövdəsi qəbuledicisində redaktə edilir. Saxlanılan `video_content_removed` markeri `previous_response_id` davamının qəsdən atılmış mətni yenidən qurması əvəzinə qapalı şəkildə uğursuz olmasını təmin edir. Müşahidə edilmiş sorğu jurnallaşdırmadan əvvəl hissə üzrə redaktə kölgəsini itirərsə və ya bir neçə video kölgəsindən hətta biri sonrakı sorğu dəyişikliklərindən sonra uyğun gəlməzsə, qismən redaktə edilmiş transkriptin saxlanması əvəzinə saxlanılan sorğu gövdəsi tamamilə buraxılır.

Müşahidə edilmiş sorğu üçün model cavabı transkriptin istənilən hissəsini strukturlaşdırılmış işarə sərhədi olmadan sitat gətirə bilər. Buna görə onun saxlanılan çağırış jurnalındakı `responseBody` buraxılma markeri ilə əvəzlənir; təfərrüatlı konveyer artefaktı (yuxarı axın/müştəri gövdələrini və axın fraqmentlərini ehtiva edə bilər) saxlanılmır. Semantik, idempotentlik və əsaslandırmanın təkrar icrası keşləri həmin sorğu üçün oxuma və yazmalardan yan keçir. Provayder sorğusu və müştərinin görə bildiyi cavab dəyişməz qalır. Təfərrüatlı artefakt buraxıldıqda erkən keepalive baytları müvəqqəti buferdən boşaldılır. Kiro-nun səhv formatlı EventStream xəbərdarlığı yalnız faydalı yükün bayt sayını bildirir, heç vaxt onun məzmununu və ya JSON parserinin xam xətasını bildirmir.
Bu, əlaqəsiz hər bir provayder/plagin diaqnostikasının audit edildiyini iddia etmir; saxlanılan qəbuledicilərin daha geniş yoxlanışı #11658-də izlənilir.

Daxili `/api/modality-bridge/video/drilldown` həyat dövrü ayrıca, loopback/token ilə autentifikasiya olunan keş substratıdır. Hər əməliyyat həmçinin kanonik qeyri-şəffaf principal ID tələb edir. İstehsal çağıranı aktivləşdirilməzdən əvvəl həmin ID-ni autentifikasiya olunmuş tenant əsasında əldə etməli və heç vaxt müştəri tərəfindən seçilmiş dəyəri ötürməməlidir. Keş açarları həmin principal-ı kanonik sessiya və video istinadı ID-lərinə bağlayır, yalnız onların SHA-256 əsasında yaradılmış açarlarını saxlayır və həm oxumaları, həm də silməni eyni principal ilə məhdudlaşdırır. Keş hər qeyd üçün ən çox 16 törəmə JPEG kadrı saxlayır, onların müddətini on dəqiqədən sonra bitirir və məhdud `start`/`end` oxumalarını və ya sessiyanın açıq şəkildə silinməsini dəstəkləyir.

Hər principal 16 qeyd və 64 MiB kanonik JPEG məlumatı ilə məhdudlaşdırılır. Bu limitlər qlobal 64 qeyd/256 MiB yuxarı həddindən müstəqildir: principal kvotasına təzyiq olduqda qlobal LRU xaricetməsi nəzərdən keçirilməzdən əvvəl yalnız həmin principal-ın ən uzun müddətdir istifadə olunmayan qeydləri xaric edilir. Müddəti bitmiş qeydlər keş fəaliyyəti zamanı həm principal, həm də qlobal uçotdan təmizlənir, ləğvetmə və doğrulama xətası isə qismən əvəzləməni qeydə almır.

Keş qeyri-kanonik Base64 kodlamasını, həddindən artıq doldurmanı, JPEG olmayan medianı, xətalı və ya
yarımçıq JPEG-ləri, eləcə də məhdudlaşdırılmış tam təsvir `sharp` dekodlaşdırması zamanı xəbərdarlıq
yaradan JPEG-ləri rədd edir. O, qəbul edilmiş hər təsviri kanonik JPEG kimi yenidən kodlaşdırır, eni və hündürlüyü
çağıran tərəfin sahələrinə etibar etmək əvəzinə dekodlaşdırılmış baytlardan müəyyən edir və sondakı
poliqlot baytları saxlamaq əvəzinə atır. Hər iki kvotaya yalnız məhdudlaşdırılmış kanonik sıxılmış bufer
daxil edilir. JSON ötürmə limiti dekodlaşdırılmış giriş üçün 32 MiB həddinə aid Base64 əlavə yükünü ehtiva edir.
Saxlanılan hər törəmə onun doğrulanmış JPEG formatını/ayırdetməsini, seçmə siyasətini,
törəmə versiyasını, yaradılma vaxtını, server tərəfindən hesablanmış məzmun heşini və heşlənmiş ana
istinadını, eləcə də etibarlı çağıran tərəfin ana məzmun heşini qeydə alır. Ləğvetmə
atomik keş təsdiqindən əvvəl asinxron dekodlaşdırma/heşləmə mərhələləri arasında yoxlanılır.

Bu mərhələdə hələ istehsal prodüseri marşruta qoşulmur və
çoxayırdetməli variant seçimi təmin edilmir. Buna görə də şəffaf Video Bridge sorğu
yolu əlavə iş yükü yaratmır, tenantla əlaqələndirilmiş əsas subyektin törədilməsi və
tam FU-08 çoxayırdetməli həyat dövrü isə tamamlanmış davranış kimi sənədləşdirilmək əvəzinə
aydın şəkildə sonrakı işlər olaraq qalır.

Kadrlar konfiqurasiya edilmiş Video modeli ilə ardıcıl şəkildə təsvir olunur. Boş
Video əvəzləməsi Vision parametrini miras alır; hər ikisi boşdursa, Vision
avtomatik marşrutlaşdırıcısı effektiv, görüntü emalını dəstəkləyən modeli seçir. Uğurlu təsvirlər
orijinal hissəni sabit `[Video description:` prefiksi ilə əvəz edir; bu prefiks həmçinin
mətni etibar edilməyən, mediadan törədilmiş müşahidə kimi işarələyir və aşağı axındakı
modellərə mediada aşkar edilmiş təlimatlara əməl etməməyi bildirir. Kadr təsviri keşinin açarları
JPEG baytlarını, sorğunu, zaman nişanını və effektiv modeli ehtiva edir; yalnız uğurlu
təsvirlər keşlənir. Keş qeydləri ehtiyat model də daxil olmaqla faktiki uğurlu
prodüser modelini saxlayır; müxtəlif kadrlar fərqli modellər tərəfindən
hazırlanıbsa, körpü `mixed` bildirir. Keş uyğunluğu həmin prodüser kimliyini
tələb edilmiş marşrutlaşdırma planı kimi yenidən işarələmək əvəzinə təkrar istifadə edir. Bütün video üzrə nəticə
keşi çıxışı dəyişdirən hər giriş əsasında açarlanır — sorğu, effektiv
model, seçmə siyasəti, kadr sayı, semantik təhlil rejimi, normallaşdırılmış fokus ipucunun SHA-256
barmaq izi, fokus pəncərəsi, `transcript`,
`audioTranscript` və əlaqə vərəqi bayrağı — buna görə də bu
ölçülərdən hər hansı birinin dəyişdirilməsi köhnəlmiş nəticənin təkrar istifadəsinə deyil, keş uyğunsuzluğuna səbəb olur. Vizual dublikatların aradan qaldırılması siyasətinin
versiyası, həddi və məhdudlaşdırılmış namizəd kadr sayı da
nəticə keşinin açarında və metadatasında açıq şəkildə göstərilir; buna görə siyasət dəyişikliyi
köhnəlmiş bütün-video təsvirini təkrar istifadə edə bilməz. Nəticə keşinin v4 metadatası rejimi və
barmaq izini saxlayır, istifadəçinin ilkin tapşırığını isə heç vaxt saxlamır. Qoruyucu mexanizm metadatası həm
tələb edilmiş, həm də effektiv təhlil rejimlərini bildirir; istifadəyə yararlı istifadəçi mətni olmadan tələb edilmiş
`focused` rejimi effektiv olaraq `full` kimi bildirilir.

Qoruyucu mexanizm dəstəklənən bütün video hissələrini çıxarır, lakin
`modalityBridgeVideoMaxVideos` sayından çoxunu təsvir etmir. `supportsVideo === false`
olduğu sübut edilmiş hədəf üçün uğursuz və limiti aşan videolar açıq təhlükəsiz
mətn markerlərinə çevrilir ki, heç bir xam video qalmasın. İmkan məlum olmadıqda həmin hissələr
video daşıyıcısını saxlayır; hər hansı ehtiyat transkript yuxarıdakı məhdudlaşdırılmış mətn
çevrilməsinə uyğun olur. `supportsVideo === true` olan hədəflər körpünü yan keçir.
Müştəri sorğusunun dayandırma siqnalı endirmə, broker növbəsi,
alt proseslər və təsvir çağırışları boyunca ötürülür; dayandırmalar videolar arasında prosesi saxlayır və
heç vaxt xam medianın ötürülməsinə yol açmır.

İcra zamanı parametrləri verilənlər bazasında saxlanılır və Zod ilə doğrulanır:

| Açar                                | İlkin dəyər | Aralıq / davranış                                                                                                         |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | İcra zamanı isteğe bağlıdır, ayrıca aktivləşdirilməlidir                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ümumi təsvirləri qoruyur; `focused` məhdudlaşdırılmış, etibar edilməyən son istifadəçi kontekstindən istifadə edir |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge modelini miras alır                                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` və ya proporsional `segment_aware`; detektor xətası zamanı `uniform` istifadə edilir             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                            |

120 saniyədən yuxarı olan köhnə, saxlanılmış Video vaxt aşımı dəyərləri
brokerin son müddətinə qədər məhdudlaşdırılır; bu limitdən yuxarı yeni parametr yazılışları rədd edilir.
`GET /api/modality-bridge/video/runtime` autentifikasiya və ya icra mühitinin yoxlanılmasından əvvəl
etibarlı şəkildə işarələnmiş geri dövrə lokalizasiyasını, sonra isə idarəetmə
autentifikasiyasını tələb edir. O, yalnız `available`, təmizlənmiş FFmpeg/ffprobe versiyalarını və icra
mühiti əlçatan olmadıqda sabit səbəbi qaytarır. Daxili çıxarma son nöqtəsi
ictimai yükləmə API-si deyil: növbənin dolması `503` və `Retry-After` qaytarır, çağıran tərəfin
əlaqəni kəsməsi `499`, sabit broker son müddəti isə `504` qaytarır. Çevrilmiş cavablar
Vision və ya Audio seqmentlərini silmədən mərkəzi
`x-omniroute-modality-bridge` başlığına
`video->text;model=<visionModel>;parts=<videos>` əlavə edir.

### PII Maskalayıcısı (`piiMasker.ts`)

**Hər iki** mərhələdə işləyir.

- **`preCall`** faydalı yükü klonlayır, `system`, `messages`, `input` və
  `prompt` sahələrini (sadə sətir elementləri daxil olmaqla) nəzərdən keçirir və
  sətir tipli `content`/`text` sahələrinə `processPII()` funksiyasını
  (`@/shared/utils/inputSanitizer` modulundan) tətbiq edir.
  `PII_REDACTION_ENABLED=true` olduqda aşkarlanmış PII çıxış faydalı yükündə
  redaktə edilir. Bu, `INPUT_SANITIZER_MODE` parametrindən asılı deyil (həmin
  parametr yalnız prompt inyeksiyası siyasətini idarə edir). Redaktə söndürülübsə,
  çağırış məzmunu dəyişdirmədən aşkarlanma saylarını qeydə alır.
- **`postCall`** cavabı dərin klonlayır, `sanitizePIIResponse()` funksiyasını və
  Responses API formasının maskalayıcısını (`maskResponsesOutput` —
  `output_text` və `output[].content[].text` sahələrini əhatə edir) işə salır.
  Hər hansı redaktə baş verərsə, dəyişdirilmiş cavab orijinalı əvəz edir.

Qoruyucu mexanizm heç vaxt bloklamır; yalnız annotasiya edir
(`meta.detections`, `meta.redacted`) və ya məzmunu yenidən yazır.

#### Növ üzrə seçim, fərdi nümunələr və aşkarlanma sayğacları

**İdarəetmə paneli → Parametrlər → Təhlükəsizlik → PII maskalanması** _nəyin_
maskalanacağını seçir. Bu, maskalanmanı aktivləşdirmir: bunun üçün hələ də
`PII_REDACTION_ENABLED` (sorğu) və `PII_RESPONSE_SANITIZATION` (cavab + SSE)
istifadə olunur və hər ikisi standart olaraq söndürülüb.

- **Növ üzrə seçim** — daxili identifikatorlar
  `src/shared/constants/piiTypes.ts` faylında (`PII_BUILTIN_TYPES`) sadalanıb.
  Dəyərin təyin edilməməsi bütün növlər deməkdir (bu parametr mövcud olmamışdan
  əvvəlki davranış). Sorğu mexanizminin `ssn_us` nümunəsi `ssn` növünə
  uyğunlaşdırılır. Şablonlar (Minimal, Standart, Maliyyə, Braziliya, ABŞ, Tam)
  yalnız istifadəçi interfeysindəki seçim xanalarını doldurur.
- **Fərdi nümunələr** — 20-yə qədər regex və ya wildcard nümunəsi (`*` = 64-ə
  qədər boşluq olmayan simvol, `?` = bir simvol). Uyğunluqlar
  `[CUSTOM_REDACTED]` ilə əvəzlənir. Hər bir nümunə
  `compilePiiCustomPattern()` funksiyasından
  (`src/shared/utils/piiCustomPatterns.ts`) keçir: maksimum 500 simvol, bayraqlar
  yalnız `g i m s u` ilə məhdudlaşır, nümunə kompilyasiya olunmalı,
  `safe-regex` yoxlamasından (fəlakətli geriyə izləmə) keçməli və boş sətirə və
  ya redaktə yer tutucusuna uyğun gəlməməlidir. Yoxlamadan keçməyən nümunənin
  saxlanması və sınaqdan keçirilməsi rədd edilir; yoxlamadan keçməyən saxlanmış
  sətir isə kompilyasiya edilmək əvəzinə icra zamanı ötürülür. Fərdi nümunələr
  yalnız maskalanma aktiv olduqda işləyir.
- **Aşkarlanma sayğacları** — yaddaşda saxlanılan və yenidən başladılma zamanı
  sıfırlanan növ üzrə saylardır (uyğun gələn dəyərlər heç vaxt saxlanılmır)
  (`src/lib/pii/piiDetectionStats.ts`). Onlar yalnız maskalanma aktiv olduqda
  artır.

Parametrlər `key_value` cədvəlində (`pii_settings` ad məkanı,
`src/lib/db/piiSettings.ts`) saxlanılır və 1 saniyəlik keş vasitəsilə oxunur.
API:

| Metod  | Yol                      | Məqsəd                                                                               |
| ------ | ------------------------ | ------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Bayraq vəziyyəti, `enabledTypes`, `customPatterns`, aşkarlanma sayğacları            |
| `PUT`  | `/api/settings/pii`      | `enabledTypes` (`null` = hamısı) və/və ya `customPatterns` dəyərlərini əvəz etmək    |
| `POST` | `/api/settings/pii/test` | Bir nümunəni maksimum 8 KB-lıq nümunə üzərində sınaqdan keçirmək; heç nə saxlanılmır |

Hər üçü idarəetmə autentifikasiyası tələb edir və sorğu gövdəsini Zod ilə
(`src/shared/validation/schemas/piiSettings.ts`) yoxlayır.

### Prompt inyeksiyası (`promptInjection.ts`)

İstifadəçi tərəfindən təqdim olunan məzmundakı zərərli strukturları aşkarlayır
və konfiqurasiya edilmiş siyasəti tətbiq edir. Davranış mühit dəyişənləri və
konstruktor seçimləri ilə idarə olunur:

| Parametr       | Mühit dəyişəni                                                                                        | Standart | Təsir                                                                                                                                                                                                            |
| -------------- | ----------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivdir       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`   | `false` olduqda qoruyucu mexanizm işi dərhal dayandırır.                                                                                                                                                         |
| Rejim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`   | İnyeksiya siyasəti: `block`, `warn` və ya `log`. (`redact` geriyə uyğunluq üçün qəbul edilir, lakin inyeksiya mətnini **silməz**; sorğudakı PII-nin yenidən yazılması `PII_REDACTION_ENABLED` ilə idarə olunur.) |
| Bloklama həddi | `blockThreshold` seçimi / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ləqəb `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Bloklama üçün tələb olunan minimum ciddilik. Standart parametrdə orta səviyyə yalnız müşahidə olunur.                                                                                                            |

**Rejim prioriteti** (`getMode`): çağıranın `options.mode` dəyəri →
`INJECTION_GUARD_MODE` üçün **DB funksiya bayrağı üstünlüyü** (İdarəetmə paneli →
Parametrlər → Funksiya bayraqları) → `INJECTION_GUARD_MODE` mühit dəyişəni →
`INPUT_SANITIZER_MODE` mühit dəyişəni → `warn`. Buna görə də idarəetmə
panelindəki üstünlük mühit dəyişənlərindən daha yüksək prioritetə malikdir və
Funksiya bayraqları interfeysi işləyən qoruyucu mexanizmi canlı şəkildə
idarə edir (yenidən başlatma tələb olunmur). DB-dən oxuma xətalara qarşı
təhlükəsizdir: xəta baş verərsə, qoruyucu mexanizm mühit dəyişənlərinə əsaslanan
davranışa qayıdır; heç bir üstünlük təyin edilmədikdə isə davranış yalnız mühit
dəyişənləri ilə müəyyən edilən davranışla eyni olur.

Aşkarlanma mənbələri:

1. `@/shared/utils/inputSanitizer` modulundakı `sanitizeRequest()` (konveyerin
   digər hissələrində də istifadə edilən ortaq detektor dəsti).
2. Daxili `DEFAULT_GUARD_PATTERNS` (hazırda `system_override_inline` və
   `markdown_system_block`; hər ikisinin ciddiliyi `high` səviyyəsindədir).
3. Konstruktor seçimləri vasitəsilə ötürülən əlavə `customPatterns` (sətirlər,
   regex və ya `{ name, pattern, severity }` qeydləri).

`mode === "block"` olduqda **və** ən azı bir aşkarlama ciddilik həddinə
çatdıqda, `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` qaytarır. `warn`/`log` rejimlərində qoruyucu jurnal qeydi
aparır, lakin çağırışa icazə verir. Paylaşılan `evaluatePromptInjection()` köməkçi funksiyası
sorğuları reyestrdən keçirmədən qiymətləndirməli olan çağıranlar üçün də ixrac edilir.

**Skan limiti (v3.8.20):** detektor birləşdirilmiş sorğu mətninin yalnız **ilk 16 KB**-ını
yoxlayır — `src/shared/utils/inputSanitizer.ts` faylında
`MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bayt). Həm `detectInjection()`, həm də
`evaluatePromptInjection()` nümunə dövrünü icra etməzdən əvvəl
`slice(0, MAX_INJECTION_SCAN_BYTES)` çağırır. İnyeksiya direktivləri girişin yuxarı hissəsinə
yaxın yerləşdiyi üçün bu, aşkarlamanı zəiflətmədən yüzlərlə KB ölçüsündə olan faydalı yüklərdə
regex CPU/GC istifadəsini məhdudlaşdırır (bax: #3932, #4041).

### Etimadnamə maskalayıcısı (`credentialMasker.ts`)

**Hər iki** mərhələdə, standart zəncirin sonunda (prioritet `95`) işləyir. Yaxşı tanınan
API açarı / məxfi token nümunələrini göndərilən faydalı yükdən (mesaj məzmunu,
alət çağırışı arqumentləri, alət nəticələri) **və** təchizatçı cavabından redaktə edir ki,
sorğuya yapışdırılmış (və ya alət nəticəsi tərəfindən təkrar qaytarılmış) etimadnamə
yuxarı axındakı təchizatçıya və ya yenidən müştəriyə sızmasın.

- PII redaktəsi ilə eyni qaydaya əsasən **yalnız açıq şəkildə aktivləşdirilir**
  (Sərt Qayda #20 ilə əlaqəli): `settings.credentialRedactionEnabled === true` **və ya**
  `CREDENTIAL_REDACTION_ENABLED=true` olmadıqda deaktivdir. Söndürülmüş vəziyyətdə
  qoruyucu heç bir əməliyyat yerinə yetirmir — heç vaxt bloklamır və yenidən yazmır.
- `redactCredentials()` bütün faydalı yük/cavab ağacını dolaşır (`walkValue()`,
  prototip çirkləndirilməsinə qarşı təhlükəsizdir, `WeakSet` vasitəsilə dövrlərə qarşı
  təhlükəsizdir) və uyğunluqları `[REDACTED:<type>]` yer tutucusu ilə əvəz edir; yalnız
  həqiqətən dəyişmiş budaqları klonlayır.
- `CREDENTIAL_PATTERNS` LLM təchizatçısı açarlarını (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokenlərini (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ödəniş açarlarını (Stripe, Square), bulud
  açarlarını (AWS giriş açarı, Twilio, SendGrid, Mailgun), şəxsi açarları / JWT-ləri,
  etimadnamə ehtiva edən bağlantı sətirlərini (`mongodb://user:pass@...` və s.) və
  ümumi `Authorization`/`x-api-key`/`api-key`/`apikey` başlıq-dəyər
  nümunəsini əhatə edir. Başlıq formasındakı açarlar (`authorization`, `x-api-key`, `api-key`,
  `apikey`) ümumi mətn regex-i vasitəsilə deyil, struktur olaraq redaktə edilir (yalnız
  dəyər; `Bearer `/`Basic ` kimi sxem prefiksləri qorunur).
- Qoruyucu heç vaxt bloklamır; o, yalnız yenidən yazır (`modifiedPayload` /
  `modifiedResponse`) və annotasiya əlavə edir (`meta.credentialsRedacted`, `meta.count`).

Reqressiya qoruyucusu: `tests/unit/credential-masker-guardrail.test.ts`.

## Baza Müqaviləsi (`base.ts`)

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
  block?: boolean; // true zəncirin icrasını dərhal dayandırır
  message?: string; // bloklama zamanı göstərilir
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // sorğunu yenidən yazmaq üçün preCall tərəfindən qaytarılır
  modifiedResponse?: TValue; // cavabı yenidən yazmaq üçün postCall tərəfindən qaytarılır
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

Qoruyucu mexanizm `void`, `{}` və ya `{ block: false }` qaytarmaqla "dəyişiklik yoxdur" siqnalını verir. `modifiedPayload`/`modifiedResponse` qaytarılması zəncir boyunca sonrakı qoruyucu mexanizmlərə ötürülən dəyəri əvəz edir.
`signal?: AbortSignal` çağıranın həyat dövrünü qoruyucu mexanizmlərə ötürür. Sorğunun dayandırılması məqsədli fail-open istisnasıdır: media körpüləri işi dayandırır və xam medianı dəstəkləmədiyi məlum olan hədəfə onu bərpa etmədən təmizləmə aparır.

## Reyestr (`registry.ts`)

Tək nüsxəli `guardrailRegistry` aşağıdakıları təqdim edir:

- `register(guardrail)` — qoruyucu mexanizm əlavə edir (və ya normallaşdırılmış ada əsasən əvəz edir) və artan `priority` sırasına görə yenidən çeşidləyir.
- `clear()` / `list()` — inzibati köməkçi funksiyalar.
- `runPreCallHooks(payload, context)` — aktiv qoruyucu mexanizmlər üzərində iterasiya edir, faydalı yükü `modifiedPayload` vasitəsilə ötürür və ilk `block: true` zamanı dayanır.
- `runPostCallHooks(response, context)` — cavab tərəfində eyni axını yerinə yetirir.
- `resetGuardrailsForTests({ registerDefaults })` — vəziyyəti təmizləyir və təmiz test izolyasiyası üçün istəyə bağlı olaraq standartları yenidən qeydiyyatdan keçirir.

Hər iki icraçı `{ blocked, payload|response, results, guardrail?, message? }` qaytarır; burada `results`, hər qoruyucu mexanizm üzrə `blocked`, `skipped`, `modified`, `error` və `meta` sahələrini ehtiva edən `GuardrailExecutionResult` qeydlərindən ibarət massivdir və izləmə üçün faydalıdır.

### Hər Sorğu Üçün Qoruyucu Mexanizmlərin Deaktiv Edilməsi

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` cari sorğu üçün ötürülməli olan qoruyucu mexanizm adlarının təkrarsız siyahısını toplayır. Bu ardıcıllıqla oxunan və vahid siyahıda birləşdirilən beş kanal mövcuddur (təkrarlanan dəyərlər çıxarılarkən ilk rast gəlinən saxlanılır):

1. `apiKeyInfo.disabledGuardrails`
2. Sorğu gövdəsində `disabledGuardrails` (yuxarı səviyyə)
3. Sorğu gövdəsində `metadata.disabledGuardrails` (yalnız `metadata` obyekt olduqda)
4. `x-omniroute-disabled-guardrails` başlığı
5. Köhnə `x-disabled-guardrails` başlığı

İki başlıq da daxil olmaqla bütün beş kanal birləşdirilir: həm `x-omniroute-disabled-guardrails`, həm də `x-disabled-guardrails` göndərildikdə onların siyahılarının birləşməsindəki qoruyucu mexanizmlər ötürülür və boş müasir başlıq artıq köhnə başlığı gizlətmir
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805) ilə düzəldilib).

Dəyərlər sətirlərdən ibarət massivlər və ya vergüllə ayrılmış sətir ola bilər; adların əvvəl və sonundakı boşluqlar silinir, onlar kiçik hərfli kebab-case formatına normallaşdırılır (`pii_masker` → `pii-masker`) və boş elementlər çıxarılır. Nəticə `context.disabledGuardrails` vasitəsilə reyestrə ötürülür və reyestr uyğun qoruyucu mexanizmləri ötürür (`results` daxilində `skipped: true`).

Deaktiv etmə siyahısı yalnız **reyestrə** təsir edir. Prompt inyeksiyasının `block` rejimi məcburi sərhəddir: injection-guard ara proqramı
(`src/middleware/promptInjectionGuard.ts`) `evaluatePromptInjection()` funksiyasını çağıran tərəfindən idarə olunan heç bir deaktiv etmə siyahısı olmadan çağırır (əvvəllər etdiyi, lakin istifadə olunmayan `resolveDisabledGuardrails({ body })` çağırışı
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) çərçivəsində silinib), buna görə `prompt-injection` mexanizmini deaktiv edən sorğu `block` rejimində yenə də rədd edilir. Bu, məqsədli şəkildə belə hazırlanıb. Deaktiv etmə kanalları çağıran tərəfindən idarə olunur (sorğu gövdəsi, metadata, başlıqlar) və çağıran operatorun təyin etdiyi təhlükəsizlik nəzarətini söndürə bilməməlidir
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) çərçivəsindəki başlıq birləşməsi yalnız hansı reyestr qoruyucu mexanizmlərinin ötürüldüyünü dəyişir; bu, müştəriyə ara proqramdan yan keçməyə imkan vermir. Hər açar və hər qrup üzrə məcburi qoruyucu mexanizm siyasətləri v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) daxilində izlənilir.
[Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits) bölməsinə baxın.

## İcra ardıcıllığı

`src/sse/handlers/chat.ts` və `open-sse/handlers/chatCore.ts` vasitəsilə keçən hər bir sorğu üçün ([Əhatə dairəsi və məhdudiyyətlər](#coverage-and-limits) bölməsində sadalanan çat ailəsi marşrutları):

1. `resolveDisabledGuardrails(...)` API açarı, gövdə və başlıqlardan ötürüləcək qoruyucu mexanizmlərin siyahısını yaradır.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` qoruyucu mexanizmləri prioritetin artan sırası ilə işə salır:
   - Deaktiv edilmiş qoruyucu mexanizmlər `skipped` kimi qeydə alınır.
   - Hər qoruyucu mexanizmin `preCall` funksiyası `modifiedPayload` vasitəsilə faydalı yükü yenidən yaza bilər.
   - İlk `block: true` zəncirin icrasını qısa qapayır və işləyici qoruyucu mexanizm tərəfindən rədd cavabı qaytarır.
3. (Ehtimal ki, yenidən yazılmış) faydalı yük kombinasiya marşrutlaşdırmasına və yuxarı axın xidmətinə göndərişə ötürülür.
4. **Yalnız axınsız rejim:** cavab formalaşdırıldıqdan sonra `guardrailRegistry.runPostCallHooks(...)` cavab üzərində eyni zənciri işə salır. Buradakı `block: true` yuxarı axın cavabını ləğv edir və HTTP 400 qaytarır. Axınla ötürülən cavablar bu addımı tamamilə buraxır.

İstisna atan qoruyucu mexanizmlər `error: <message>` ilə qeydə alınır və `logger.warn` vasitəsilə jurnala yazılır, lakin zəncir davam edir — bu, layihələndirməyə əsasən xətaya açıq davranışdır.

## Əhatə dairəsi və məhdudiyyətlər

Qoruyucu mexanizmlər reyestri yalnız çat konveyerinə qoşulub. Bu məhdudiyyətlər `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` və `tests/unit/guardrail-pipeline-characterization.test.ts` tərəfindən təsbit edilir; davranış dəyişdikdə həmin testləri məqsədli şəkildə yeniləyin.

### Qarmaqların işlədiyi yerlər

| Qarmaq / idarəetmə                      | İşlədiyi yerlər                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                       | `handleChat` (`src/sse/handlers/chat.ts`) tərəfindən emal edilən sorğular: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (və `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` və Telegram çat proksisi. Həmçinin idarəetmə panelinin `/api/guardrails/test` sınaq son nöqtəsi. Çağırışdan əvvəlki bloklama HTTP 400 qaytarır. |
| `runPostCallHooks`                      | Yalnız **axınsız** çat cavabları (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Axınla ötürülən cavablar ona heç vaxt çatmır.                                                                                                                                                                                                                                                                                                                         |
| Axın PII emalı                          | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), `PII_RESPONSE_SANITIZATION` aktiv olduqda `streamingPipeline.ts` daxilində konveyerə qoşulur. Bu, qoruyucu mexanizm deyil, buna görə deaktivləşdirmə kanalları ona təsir etmir.                                                                                                                                                                                                                  |
| İnyeksiya qoruyucu ara proqramı (köhnə) | Sorğu mətni daşıyan bütün `/v1` marşrutları, o cümlədən çat ailəsi ([marşrutların əhatə dairəsinə](#injection-guard-route-coverage--red-team-phase-8--block-d) baxın). Yalnız sorğu mətni inyeksiyası.                                                                                                                                                                                                                                                         |

### Əhatə olunmayanlar

- **Media, yerləşdirmə və məlumat marşrutları** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) heç vaxt reyestrə çatmır.
  Orada PII maskalanması, etimadnamə maskalanması və ya modallıq körpüsü işləmir.
  Onların yeganə yoxlaması köhnə inyeksiya qoruyucu ara proqramıdır.
- **Axınla ötürülən cavablara** çağırışdan sonrakı qoruyucu mexanizmlər tətbiq
  edilmir: çağırışdan sonra `pii-masker` və ya `credential-masker` işləmir və
  çağırışdan sonrakı bloklama yoxdur. Yalnız axın PII çevirməsi tətbiq olunur
  (`PII_RESPONSE_SANITIZATION` aktiv olduqda). Axınla ötürülən cavabda geri
  qaytarılan etimadnamə redaktə edilmir.
- **Deaktivləşdirmə kanalları və ara proqram (layihəyə əsasən):** ara proqram
  sorğu mətni inyeksiyasını çağıran tərəfin idarə etdiyi heç bir deaktivləşdirmə
  siyahısını ötürmədən öz `evaluatePromptInjection()` çağırışı ilə qiymətləndirir.
  `block` rejimi, çat ailəsi marşrutları da daxil olmaqla, çağıran tərəfin idarə
  etdiyi deaktivləşdirmələrin yan keçə bilmədiyi məcburi sərhəddir
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).
  `prompt-injection` deaktiv edildikdə yalnız reyestrdəki qoruyucu mexanizm
  buraxılır.

### Çağırışdan sonrakı mərhələdən əvvəl cavabı görənlər

Axınsız yolda ardıcıllıq belədir: yaddaşın çıxarılması → daxili alətlərin icrası → çağırışdan sonrakı qoruyucu mexanizmlər → çağırışdan sonrakı bloklama çıxışı → semantik keşdə saxlama.

- **Yaddaşın çıxarılması** və **alətlərin icrası** cavabı çağırışdan sonrakı qoruyucu mexanizmlər onu yenidən yaza və ya bloklaya bilməzdən əvvəl görür. [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) dəyişikliklərindən etibarən, `PII_RESPONSE_SANITIZATION` aktiv olduqda yaddaşın çıxarılması əldə edilmiş mətni `sanitizePII` vasitəsilə emal edir (həm axınlı, həm də axınsız rejimdə), lakin çağırışdan sonrakı mərhələdə bloklanan cavab buna baxmayaraq yaddaşa və alətlərə təqdim edilmiş olur.
- **Semantik keş** cavabı çağırışdan sonrakı mərhələdən sonra saxlayır, buna görə də yenidən yazılmış cavab saxlanılır, bloklanmış cavab isə heç vaxt keşlənmir. Keş qeydləri hər API açarı üzrə açarlanır.

## Konfiqurasiya

Daxili qoruyucu mexanizmlər tərəfindən oxunan mühit dəyişənləri:

| Dəyişən                               | İstifadə edən             | Təsiri                                                                                                                        |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Aşkarlamanı tamamilə deaktiv etmək üçün `false` təyin edin.                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | İnyeksiya siyasəti: `warn`, `block` və ya `log`. Köhnə `redact` dəyəri inyeksiya mətnini yenidən yazmır.                      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | İnyeksiya qoruyucusu üçün rejim; həmçinin mühit dəyişənlərini **üstələyən** verilənlər bazası funksiya bayrağıdır (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block` rejiminin rədd etdiyi minimum ciddilik səviyyəsi: `high` (standart), `medium` və ya `low`.                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD` üçün köhnə alternativ ad.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true` olduqda sorğudakı PII redaktə edilir (inyeksiya rejimindən asılı olmayaraq).                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (aşağı axın) | Cavab tərəfindəki maskalayıcının davranışını idarə edir.                                                                      |

Modallıq Körpüsünün qoruyucu mexanizmləri icra vaxtı konfiqurasiyasını mühit dəyişənlərindən deyil, verilənlər bazası tərəfindən dəstəklənən parametrlər yaddaşından (`getSettings()`) oxuyur. Görüntü üçün əsas açarlar bunlardır:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` və
`modalityBridgeCacheMaxEntries`. Köhnə
`visionBridge*` açarları yalnız sənədləşdirilmiş bir dövrlük oxuma ehtiyat variantı kimi qəbul edilir; idarəetmə panelindən yazma əməliyyatları əsas açarlardan istifadə edir. Standart dəyərlər və ehtiyat variant həlledicisi `src/shared/constants/modalityBridgeDefaults.ts` faylında yerləşir, köhnə sabitlər isə `src/shared/constants/visionBridgeDefaults.ts` faylında saxlanılır.

Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` və `modalityBridgeAudioMaxClips`, həmçinin ortaq
`modalityBridgeCache*` parametrlərindən istifadə edir. Audio üçün köhnə açar ehtiyat variantı yoxdur, çünki bu açarlar Modallıq Körpüsü sxemi ilə birlikdə təqdim edilib.

Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` və
`modalityBridgeVideoTimeout`, həmçinin ortaq `modalityBridgeCache*` parametrlərindən istifadə edir.
FFmpeg/ffprobe isteğe bağlı əməliyyat asılılıqları olduğuna və kadrların təsvir edilməsi gecikmə və model xərclərini artırdığına görə bu funksiya standart olaraq deaktivdir.

## Fərdi qoruyucu mexanizmlər

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

Addımlar:

1. `BaseGuardrail` sinfini genişləndirən `src/lib/guardrails/myGuardrail.ts` faylını yaradın.
2. `preCall` və/və ya `postCall` metodunu reallaşdırın.
3. Ya import zamanı qeydiyyatdan keçirin (`registerDefaultGuardrails` daxilindən əlavə edin), ya da
   icra zamanı `guardrailRegistry.register(...)` çağırın — reyestr eyni normallaşdırılmış ada
   malik əvvəlki qoruyucu mexanizmi əvəz edir.
4. Testləri `tests/unit/` altında əlavə edin (mövcud nümunələr:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Məlum vəziyyətdən başlamaq üçün testlər arasında `resetGuardrailsForTests()` istifadə edin.
Boş reyestrlə başlamaq və yalnız sınaqdan keçirilən qoruyucu mexanizmləri
qeydiyyatdan keçirmək üçün `{ registerDefaults: false }` ötürün. Vision Bridge asılılıqların
yeridilməsini (`deps.getSettings`, `deps.callVisionModel`) dəstəkləyir; Audio Bridge isə
parametrlər, imkanlar, STT modelinin seçilməsi, giriş məlumatlarının yoxlanılması və
transkripsiya üçün ekvivalent qoşulma nöqtələri təqdim edir. Beləliklə, testlər hər iki axını
DB və ya şəbəkə çıxışı olmadan yoxlaya bilər.

## Həmçinin baxın

- `src/lib/guardrails/` — reallaşdırma
- `src/shared/utils/inputSanitizer.ts` — prompt inyeksiyası və PII maskalanmasını təmin edən ortaq detektor
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge standartları və
  məcburi körpü model siyahısı
- `src/shared/constants/modalityBridgeDefaults.ts` — ortaq Vision/Audio icra mühiti standartları
- `docs/architecture/RESILIENCE_GUIDE.md` — ortoqonal qat (dövrə açarı, gözləmə müddətləri)
- `docs/reference/ENVIRONMENT.md` — mühit dəyişənləri üzrə tam arayış

## İnyeksiya qoruyucusunun marşrut əhatəsi və red-team (Mərhələ 8 · Blok D)

İnyeksiya qoruyucusu (`createInjectionGuard` / `withInjectionGuard`) istifadəçi promptlarını
qəbul edən bütün marşrutları əhatə edir. O, `INJECTION_GUARD_MODE` parametrinə əməl edir (standart `warn` = yalnız jurnala yazır;
`block` = HTTP 400 `SECURITY_001` qaytarır).

| Növ           | Marşrutlar                                                                                                                                           | Standart rejim |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Mətn (mövcud) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn           |
| Generativ     | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn           |
| Məlumat       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn           |

Mətnin çıxarılması (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrini əhatə edir.

**Red-team (gecəlik, `nightly-llm-security.yml`):** promptfoo hər marşrutun
`INJECTION_GUARD_MODE=block` rejimində OWASP-LLM korpusunu blokladığını yoxlayır; garak zondları işə salır (məxfi açar olmadıqda ötürülür).
Ardıcıllıq üçün `moderations` də daxil edilib. Bloklama rejimi məcburi sərhəddir: `evaluatePromptInjection()`
ara proqramın ona ötürdüyü hər sorğu üzrə deaktivləşdirmə siyahısını nəzərə almır, buna görə `disabledGuardrails`
marşrutu bundan azad **etmir** ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Gecəlik iş axınının (`.github/workflows/nightly-llm-security.yml`, cron + əl ilə
işə salma) iki işi var:

- **`promptfoo-guard` (bloklayıcı)** — `INJECTION_GUARD_MODE=block` ilə
  `promptfoo eval -c promptfooconfig.yaml` icra edir. Hər rəqib ssenari (məsələn, "bütün
  əvvəlki təlimatları nəzərə alma…", DAN tipli məhdudiyyət aşma cəhdləri) cavabın
  `error.code === "SECURITY_001"` daşıdığını, yəni qoruyucunun sorğunu həqiqətən rədd etdiyini yoxlayır.
- **`garak` (tövsiyə xarakterli)** — yerli OmniRoute instansına (`http://localhost:20128/v1`)
  qarşı garak `--probes promptinject,dan,leakreplay` icra edir. Provayderin məxfi açarından
  (`PROMPTFOO_PROVIDER_KEY`) asılıdır; açar olmadıqda problemsiz ötürülür və sonuna
  `|| true` əlavə olunur, buna görə CI prosesini uğursuz etmədən hesabat verir.

Qoruyucu köməkçi funksiyanın (`createInjectionGuard` / `withInjectionGuard`)
əhatə dairəsinə prompt daşıyan bütün `/v1` marşrutları daxildir; prompt mətni
`src/shared/utils/inputSanitizer.ts` daxilindəki `extractMessageContents()` tərəfindən
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` sahələrindən çıxarılır.
