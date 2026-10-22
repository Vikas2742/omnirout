# Guardrails (Српски)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Извор истине:** `src/lib/guardrails/`
> **Последње ажурирање:** 2026-10-17 — v3.8.52 (додато [Покривеност и ограничења](#coverage-and-limits):
> које руте и путање одговора достижу hook-ови, спојена заглавља за онемогућавање (#16412), режим
> блокирања убризгавања као обавезну границу (#16413) и шта види одговор пре post-call)

Заштитни механизми спроводе безбедност, политику и трансформације садржаја на граници
између OmniRoute-а и узводних провајдера. Сваки заштитни механизам може да прегледа (и
опционо одбије, трансформише или дода напомене на) payload-ове захтева (`preCall`) и
одговоре узводних провајдера (`postCall`).

Систем је **fail-open**: ако заштитни механизам баци изузетак током извршавања, регистар
бележи грешку и наставља са следећим заштитним механизмом уместо да обори захтев.
Блокирање је експлицитна одлука (`block: true`), никада случајност. Једини изузетак је
прекинут захтев: када је позиваочев `signal` прекинут, заштитни механизам који баци
изузетак одбија покретање hook-а уместо да буде прескочен.

Hook-ови се **не** извршавају на свакој рути или за сваки одговор. Прочитајте
[Покривеност и ограничења](#coverage-and-limits) пре него што се ослоните на заштитни
механизам као безбедносну контролу.

## Уграђени заштитни механизми

Регистар аутоматски учитава шест заштитних механизама по редоследу приоритета приликом
импорта (погледајте `registry.ts` → `registerDefaultGuardrails()`):

| Приоритет | Назив               | Фаза(е)        | Датотека              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Нижи бројеви приоритета се извршавају **први**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Основни модел GLM 5.3 и `glm-5.3-{low,high,max}` имају експлицитне
`supportsVision:false` метаподатке регистра/спецификације. Варијанте GLM 5.3 Flash
остају модели са нативном визијом. Рута `/v1/messages` у Claude Code-у улази у
заједнички ланац pre-call заштитних механизама `handleChat` **пре** превођења Claude-а у
OpenAI; угнежђене слике из резултата алата `Read` морају бити описане или обрађене
пре него што их то превођење претвори у OpenAI `image_url` садржај (#17069).

Пресреће захтеве са сликама намењене **моделима без визије** и или преусмерава цео
захтев на модел способан за визију, или замењује делове са сликама текстуалним описима
које генерише конфигурабилни модел за визију пре позива ка узводном провајдеру. То
омогућава провајдерима само за текст да транспарентно обрађују мултимодалне payload-ове.

Ток:

1. Прескаче се ако циљни модел већ подржава визију (осим ако се налази на листи
   присилног моста `isVisionBridgeForcedModel`).
2. Делови са сликама издвајају се помоћу `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), који делегира на **обједињени детектор медија**
   `detectMediaParts()` у `open-sse/utils/mediaParts.ts` — једини извор истине који се
   дели са филтером компатибилности комбоа. Издвајање је дозвољено само за облике које
   `replaceImageParts` може да врати на место (уговор extract↔replace): OpenAI
   `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` и Responses API `input_image`. Одговарајуће слике угнежђене у
   Claude Code `tool_result.content` и излазе алата Responses такође се издвајају и
   замењују на оригиналним путањама; облици само са индикатором су материјал за
   филтер комбоа и не издвајају се.
   Прескаче се ако није пронађена ниједна.
3. Конфигурација за време извршавања се разрешава помоћу
   `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): нови кључеви подешавања
   `modalityBridge*` имају предност; стари кључеви `visionBridge*` остају као
   **резервна опција за један циклус** (прозор за враћање). Прескаче се пре било каквог
   прегледа медија када је мост онемогућен.
4. Селектор режима (`modalityBridgeVisionMode`, види табелу испод) одлучује између
   преусмеравања и описивања. Преусмеравање враћа `modifiedPayload` у коме је замењен
   само `model`, плус метаподатке `{ rerouted, fromModel, toModel, imagesKept }`.
5. Путања описивања: слике се ограничавају на `maxImages`, саставља се упит
   прилагођен задатку, консултује се кеш описа, позива се модел за визију
   **паралелно** (`Promise.allSettled`) и убацују се текстуални делови
   `[Image N]: <description>` на њихово место. Неуспешно описивање даје `null`:
   сирова слика се чува за непознате/циљеве који подржавају визију (#4012), али
   **потврђени директни циљ само за текст** или комбо без визије добија експлицитну
   текстуалну замену `(unavailable — no vision-capable provider connected)` за сваку
   неописану слику, укључујући делимичне неуспехе и слике изнад ограничења позива за
   описивање (#17069). Постојећи резервни механизам за описивање комбоа када све не
   успе остаје на месту (#8430).
6. Враћају се `modifiedPayload` + метаподаци (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Селектор режима (`modalityBridgeVisionMode`)

| Режим      | Подразумевано | Понашање                                                                                                                                                                                                                                                                   |
| ---------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔             | Наслеђена хеуристика, непромењена (#6640/#7204): модели који нису део combo-а и немају префикс `auto/` преусмеравају се на најбољи vision модел, осим ако оригинални модел већ има употребљиве акредитиве (тада се описује); combo циљеви увек описују.                    |
| `describe` |               | Увек описује — блок за преусмеравање се у потпуности прескаче; увек одговара модел који је корисник изабрао.                                                                                                                                                               |
| `reroute`  |               | Присилно преусмеравање: заштита која задржава модел са акредитивима се заобилази. Заштита акредитива **циља** преусмеравања и даље важи — када не постоји употребљив vision циљ, bridge блокира са јасном грешком, уместо да описује или шаље сирове слике text-only циљу. |

Присилни режими прекидају обраду **пре** него што се покрене auto хеуристика; понашање `auto`
je бајт-идентично са guardrail-ом пре PR-1.

#### Обим API кључа (`visionBridgeKeyScope.ts`)

Када API кључ позиваоца ограничава `allowedConnections`, квоте
(`allowedQuotas`) или моделе (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge бира
само reroute и describe моделе које кључ сме да користи, на везама које кључ
сме да користи. Describe позив се затим увек обавља кроз OmniRoute self-loop са
заглављем `x-omniroute-self-loop-key-id`, тако да примљени chat захтев
поново спроводи политику веза и модела тог кључа. `enforceApiKeyPolicy()`
поштује то заглавље само заједно са self-loop bearer-ом, тако да може само да
сузи приступ, а id који се не може разрешити се одбија.

Ако ниједан vision модел није дозвољен за кључ, **потврђени text-only
циљ** одбија захтев за слику локално са јасним HTTP 400, уместо да прослеђује
бајтове слике неспособном upstream-у (#17069). За циљеве са
непознатом нативном vision способношћу, describe путања задржава своје претходно
fail-open понашање (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Захтеви без кључа, као и кључеви без ових ограничења, понашају се потпуно исто као
раније.

#### Describe prompt свестан задатка (`modalityBridgeVisionTaskAware`)

Подразумевано **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) додаје
текст **последње корисничке поруке** (скраћен на 500 знакова) на основни
describe prompt, усмеравајући опис ка ономе што је корисник заиста питао
(образац codex-vision-proxy) и тражећи од vision модела да транскрибује видљиви
текст. Када је флаг искључен — или нема корисничког текста — основни prompt се користи непромењен.

Сопствени OpenAI-компатибилни захтев describe self-loop-а (`callVisionModelSingle()`
у `visionBridgeHelpers.ts`) увек захтева `image_url.detail: "high"` —
безусловно, за сваког позиваоца/провајдера, без условљавања било којим
клијентским сигналом. Low-detail семплирање деградира OCR тачност управо за
задатак транскрипције текста који овај prompt захтева, тако да describe позив
сам по себи увек тражи висок ниво детаља, без обзира на то који ниво детаља је
користио оригинални долазни захтев. Ово утиче само на интерно тело describe
захтева; не мења како OmniRoute прослеђује сопствени `image_url.detail` позиваоца
у примарном захтеву — та подразумевана вредност се примењује одвојено, и то само за
детектоване OpenCode клијенте, у `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic wire-format грана
describe self-loop-а нема поље `detail` и на њу не утиче ниједна од ових
подразумеваних вредности.

#### Ограничење излаза describe (`modalityBridgeVisionMaxChars`)

| Кључ                           | Подразумевано | Опсег             |
| ------------------------------ | ------------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`           | `0` или 100–50000 |

`0` (подразумевано) значи **без ограничења** — опис који враћа
`callVisionModel()` прослеђује се неизмењен, чувајући постојеће
понашање. Било која вредност у опсегу 100–50000 скраћује опис са
суфиксом `…` пре него што се убаци као `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` у `src/lib/guardrails/visionBridge.ts`).
Повећајте ово за OCR задатке са пуно детаља, где је низводном моделу потребна
пуна транскрипција; смањите да бисте ограничили потрошњу токена на причљивим vision моделима.
Поље на контролној табли налази се на Advanced панелу Vision картице
(`modality-bridge-max-chars` у `ModalityBridgeVisionTab.tsx`) и сваку
вредност између 1 и 99 подиже на доњу границу 100, док експлицитну `0`
оставља нетакнутом — `0` је и сама по себи валидна Zod вредност
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), а не само
подразумевана вредност за „није постављено“.

#### Кеш за describe (`modalityBridge/bridgeCache.ts`)

In-memory LRU + TTL кеш за describe излазе, дељен на нивоу целог процеса.
Кључ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` са
length-prefix framing-ом (без колизија на границама поља). Компонента модела је
**конфигурисани** bridge модел, а не модел који је стварно одговорио —
`callVisionModel` може интерно да прибегне fallback-у, а кеширање по покушају би
фрагментирало кеш. Неуспели describe позиви се никада не кеширају. Подешавања:

| Кључ                            | Подразумевано | Опсег   |
| ------------------------------- | ------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`        | —       |
| `modalityBridgeCacheTtlMinutes` | `60`          | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`         | 10–5000 |

#### Нормализација удаљених слика (самопозив за описивање/base64 преузимање)

Када мост сам преузима **удаљену** слику — Anthropic самопозив за описивање и конверзија у base64 за claude-wire-format (`ensureBase64ImagesForClaudeWire`), оба преко `fetchRemoteImageAsDataUri()` у `visionBridgeHelpers.ts` — резултујући URI података прослеђује се кроз `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) пре уграђивања у захтев моделу за визуелни садржај. Превелике слике се умањују на **2048px по дужој ивици** (што одговара ограничењу промене величине које OpenAI/Anthropic већ примењују на серверској страни), чиме се смањују број бајтова за отпремање и кашњење без промене онога што модел за визуелни садржај види. За промену величине користи се `sharp`, учитан динамичким увозом: на платформи на којој његово изворно бинарно издање не може да се учита, `normalizeDataUri()` **никада не изазива изузетак** — враћа непромењене оригиналне бајтове, тако да путања за описивање/base64 конверзију увек наставља да ради. Бајтови који нису слика (када преузимање није вратило слику која се може декодирати) такође се прослеђују непромењени. Ова нормализација је ограничена на слике које мост преузима за сопствени самопозив — никада се не примењује на сирови садржај позиваоца који се директно прослеђује, у складу са принципом измена само уз изричиту сагласност (Строго правило #20).

#### Шема подешавања + миграција

Нови кључеви `modalityBridge*` проверавају се помоћу Zod-а у `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, тројка `modalityBridgeCache*` и група `modalityBridgeAudio*` коју користи аудио-мост. Миграција `141_modality_bridge_settings.sql` копира постојеће застареле вредности `visionBridge*` у одговарајуће нове кључеве (идемпотентно, без преписивања вредности `modalityBridge*` коју је поставио оператер); застарели кључеви остају прихваћени као резервни извор за читање током једног циклуса издања.

#### Заглавље транспарентности + статистика

Одговори трансформисани описивањем садрже `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (прави га `buildModalityBridgeHeader()` у `modalityBridge/bridgeStats.ts`, а поставља `withModalityBridgeHeader()` у `src/sse/handlers/chatHelpers.ts`). Преусмерени захтеви **немају** заглавље — садржај није измењен, а замена модела већ је видљива у пољу `model` тела одговора.

`GET /api/modality-bridge/stats` (аутентификација за управљање, исти ниво као `GET /api/settings`) враћа бројаче по модалитету из меморије `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` за `vision`, `audio` и `video`. `averageLatencyMs` као именилац користи `latencySamples`, а не све покушаје; операција без мерења времена не ствара лажни узорак од нула милисекунди. `bridged` остаје уназад компатибилан псеудоним за успешне конверзије; неуспели покушаји га не увећавају. Бројачи се по дизајну ресетују при поновном покретању процеса (телеметрија, а не обрачун).

#### Конфигурација контролне табле

Наменска страница контролне табле налази се на `/dashboard/settings/modality-bridge`. Њене картице `Vision`, `Audio` и `Video`, којима се може приступити преко URL-а, задржавају параметре упита приликом промене вредности `tab`. Картица Vision омогућава укључивање, избор режима и модела (укључујући аутоматску подразумевану вредност), формирање упита прилагођено задатку, напредна ограничења за временско ограничење/слике/дужину описа/кеш, бројаче током извршавања и заштићени пробни захтев. Картица Audio је такође активна: омогућава укључивање, избор модела само за STT са опцијом Auto, ограничења временског трајања/максималног трајања снимка, аудио-бројаче и пробу са `input_audio`. Картица Video је функционална: приказује стање FFmpeg/ffprobe окружења током извршавања — једно од четири експлицитна стања корисничког интерфејса (`unknown` док је провера у току или није могла да се заврши, `restricted` на хосту контролне табле који није loopback и где се провера прескаче на клијентској страни, `unavailable` након провере и потврде да недостаје или `available` са верзијама FFmpeg/ffprobe) — чува ограничења за укључивање/модел/кадрове/видео/временско трајање, филтрира избор модела на моделе који подржавају визуелни садржај и приказује видео-бројаче.

Некадашња картица Vision Bridge у подешавањима вештачке интелигенције сада је веза за компатибилност ка новој страници; више не садржи другу копију обрасца. Media Providers такође повезује токове рада Image-to-Text и Speech-to-Text са одговарајућим картицама Modality Bridge-а, без уклањања постојећег Speech-to-Text окружења за испробавање.

**Заобилажење контроле пријема за самопозив:** када се позив за описивање усмерава кроз OmniRoute-ову сопствену `/v1` повратну петљу (нестандардни модел добављача), подзахтев шаље `x-omniroute-admission-bypass: internal` и аутентификује се разрешеним акредитивом повратне петље — локалним маркером `sk_omniroute` у локалном режиму или кључем окружења `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` који је подесио оператер (#1350), тако да примене са `REQUIRE_API_KEY=true` и даље могу да изврше позив за описивање. Заобилажење се прихвата само за те тачне акредитиве, тако да спољни клијенти не могу да користе заглавље за прескакање контроле пријема.

Застареле подразумеване вредности налазе се у `src/shared/constants/visionBridgeDefaults.ts`; нове подразумеване вредности за режим/прилагођавање задатку/кеш и механизам за разрешавање подешавања налазе се у `src/shared/constants/modalityBridgeDefaults.ts`. Заштитни механизам нуди опцију конструктора `deps`, тако да тестови могу да убаце лажне имплементације `getSettings` и `callVisionModel`.

### Аудио-мост (`audioBridge.ts`) — Modality Bridge PR-3

Пресреће захтеве за ћаскање који садрже аудио пре него што стигну до циља за који није познато да прихвата аудио-улаз. Никада не преусмерава захтев за ћаскање: аудио-делови се транскрибују преко постојеће OpenAI-компатибилне multipart крајње тачке, а изабрани модел за ћаскање наставља са текстуалним транскриптима.

Ток:

1. Разрешите `supportsAudio` преко `getResolvedModelCapabilities()`. Експлицитни
   метаподаци регистра провајдера имају предност, затим статички метаподаци модела, па
   синхронизовани `modalities_input`. Декларисана листа улаза без `audio` има вредност
   `false`; ако нема доказа о могућности, вредност остаје `null`. И `false` и `null`
   активирају конзервативни мост, док га `true` заобилази.
2. Разрешите подешавања `modalityBridgeAudio*` и издвојте аудио-делове највишег нивоа
   који се могу заменити из сваке поруке помоћу заједничког детектора
   `detectMediaParts()`. Подржани формати преноса су OpenAI `input_audio`, `audio_url`
   и `source.media_type: "audio/*"`. Угнежђени аудио се открива ради усмеравања, али
   га путања замене не уклања. Обрада је ограничена помоћу
   `modalityBridgeAudioMaxClips`; каснији делови остају непромењени.
3. Поштујте конфигурисани `provider/model` или дозволите да
   `selectAudioBridgeModel()` прође кроз `AUDIO_TRANSCRIPTION_PROVIDERS` по стабилном
   редоследу каталога и изабере први модел са употребљивим акредитивом активног
   провајдера.
4. `callAudioTranscription()` претвара base64/data-URI аудио у вишеделни `file` или
   преузима удаљени `audio_url` преко заштите за искључиво јавни одлазни саобраћај,
   уз DNS фиксирање и ограничење од 25 MB. Затим POST-ује датотеку и изабрани модел
   локалној самоповратној крајњој тачки `/v1/audio/transcriptions`, уз аутентификацију
   помоћу `resolveSelfLoopBearer()`. Постојећа рута за транскрипцију обавља уобичајено
   проналажење акредитива, обраду периода хлађења/ограничења брзине и прослеђивање
   провајдеру.
5. Успешни позиви замењују своје делове са `[Audio N]: <transcript>`. Позиви се
   извршавају помоћу `Promise.allSettled`: појединачни неуспех задржава тај
   оригинални аудио-део (уговор #4012). Ако сви позиви не успеју, а за циљ је
   доказано `supportsAudio === false`, делови постају
   `[Audio N]: (unavailable — no STT provider connected)` (уговор #8430). За
   непознат циљ (`null`), резултат у којем су сви позиви неуспешни остаје
   непромењен. Циљ за који је доказано да подржава само текст, без употребљивог
   STT акредитива, добија исти експлицитни заменски текст без мрежног позива.

Успешни транскрипти користе LRU/TTL кеш Моста модалитета на нивоу целог процеса.
Кључ комбинује аудио-референцу, стабилну ознаку операције `audio-transcription`
и изабрани STT модел; неуспеси се никада не кеширају. Покушаји обраде аудио-садржаја
ажурирају заједничке бројаче `bridged`, `cacheHits`, `failures` и `lastUsedAt`.
Трансформисани одговори садрже
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; непромењени
захтеви не добијају сегмент Аудио-моста.

Подешавања времена извршавања чувају се у бази података и валидирају помоћу Zod-а:

| Кључ                          | Подразумевано | Опсег                 |
| ----------------------------- | ------------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`        | —                     |
| `modalityBridgeAudioModel`    | `""`          | Аутоматски или STT ID |
| `modalityBridgeAudioTimeout`  | `60000`       | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`           | 1–10                  |

Заједничким кешом и даље управљају `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` и `modalityBridgeCacheMaxEntries`.

### Видео-мост (`videoBridge.ts`, `videoBridgePipeline.ts`)

Пресреће видео-делове највишег нивоа у `messages` API-ја Chat Completions и
`input` API-ја Responses пре позивања циља без познате изворне подршке за видео.
Подржани формати су `input_video`, `video_url`, `video_source`, HTTPS URL-ови
и URI-ји података `data:video/*;base64,...`. Обични називи датотека у тексту не
третирају се као видео.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) управља обиласком захтева,
провером могућности/смерница, агрегацијом по захтеву и садржајем одговора.
Обрада појединачног видео-записа — преузимање, кеширање целог резултата, описивање
низа кадрова (које обједињује сваки аудио-транскрипт који је декларисао позивалац)
и метрике/прекид/чишћење за сваки покушај — скривена је иза `processVideoPart` у
`videoBridgePipeline.ts`, који се позива једном за сваки видео-део унутар петље
функције `preCall`. Тај модул такође дефинише експлицитне границе портова
`VideoMediaBrokerPort` (преузимање бајтова и издвајање узоркованих кадрова),
`VideoAudioTranscriptionPort` (обједињавање аудио-транскрипта који је декларисао
позивалац са описима узоркованих кадрова) и `VideoDrilldownPort` (граница
перзистенције за детаљну анализу кадрова; још није повезана са
`processVideoPart` — тренутно само засебна рута
`/api/modality-bridge/video/drilldown` уписује ставке детаљне анализе).

Јавна путања захтева `/v1` никада не увози нити позива потпроцес. Удаљени
видео-записи преузимају се уз ограничење од 50 MiB; уграђени base64 видео-записи
имају конзервативно ограничење од 36 MiB декодираних података по видео-запису,
како би омотач модела/порука/уоквиравања могао да остане унутар јавног ограничења
од 50 MiB за прихватање JSON захтева. Дужина уграђеног садржаја и процене
декодиране величине проверавају се пре алокације. HTTPS је обавезан за почетни
удаљени URL и свако преусмеравање, уз употребу постојеће заштите за искључиво
јавни одлазни саобраћај са DNS фиксирањем. Бајтови затим прелазе тачну интерну
посредничку границу `POST /api/modality-bridge/video/extract`. Та рута је и
`LOCAL_ONLY` и `SPAWN_CAPABLE`, прихвата само аутентификовани захтев по процесу
са поуздане повратне петље и никада не прихвата URL, путању система датотека,
извршну датотеку или листу аргумената. Процесна линија API-ја за величину тела
и инкрементални читач тела руковаоца независно намећу ограничење од 50 MiB за
посреднички улаз. Његов ограничени ред обрађује једно издвајање истовремено,
дозвољава четири посла на чекању и ограничава улаз на чекању на 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksna lista dozvoljenih formata isključuje plejlist i manifest formate. Za dozvoljene kontejnere iz MOV familije, spoljne MOV reference na podatke ostaju podrazumevano onemogućene, a fiksna komanda ih ne uključuje. I `ffprobe` i `ffmpeg` koriste listu dozvoljenih protokola samo sa `file`, jednu nit, fiksne nizove argumenata, bez shell-a, a izvršne datoteke se rešavaju iz `PATH`. Priloženi tokovi sa slikom omota nisu kandidati za reprodukciju. Svi tokovi koji se mogu reprodukovati moraju da zadovolje ograničenja, a eksplicitni podrazumevani tok ima prednost u odnosu na deterministički fallback sa najnižim indeksom. Video zapisi su ograničeni na 600 sekundi, 8.192 piksela po dimenziji i 33.554.432 izvornih piksela. FFmpeg uzorkuje 1–16 JPEG frejmova u srednjim tačkama, smanjuje dužu ivicu na najviše 1.024 piksela bez uvećavanja manjih ulaza i nikada ne prima URL. Uzorkovanje je podrazumevano `uniform`. Opciona politika `scene_aware` i eksperimentalna politika `segment_aware` izvode jedan dodatni fiksni FFmpeg prolaz kroz već validirani lokalni tok, biraju ograničene `showinfo` vremenske oznake scena i deterministički se vraćaju na iste uniformne srednje tačke u slučaju greške detektora, isteka vremena, neispravnog izlaza ili praznog skupa kandidata. Režim svesti o segmentima dodeljuje uzorke srednjih tačaka proporcionalno validiranim intervalima scena; dokazi i ponašanje fallback-a u režimu svesti o segmentima detaljno su opisani u nastavku. Tvrdo ograničenje od 16 frejmova primenjuje se nakon selekcije u svakoj politici. Kada zahtev svestan scena ima budžet od samo jednog frejma, koristi uniformnu srednju tačku aktivnog celog videa ili fokus prozora i prijavljuje `policyEffective: uniform`: jedan izabrani frejm scene ne može da očuva oba temporalna kraja. Pozivalac može opciono da obezbedi konačan fokus prozor (`start`/`end` u sekundama); granice se ograničavaju na trajanje medija, obrnuti ili ne-konačni prozori se odbijaju, a sve politike uzorkovanja izvode se samo unutar normalizovanog intervala. Rezultujući prozor se uključuje u metapodatke uzorkovanja i u prefiks nepoverljivog opisa, kako bi nizvodni modeli mogli da razlikuju fokusirani isečak od pune vremenske linije.

Semantički fokus na opis je zasebno, eksplicitno podešavanje. Podrazumevani režim analize `full` čuva postojeći prompt za frejmove i nikada ne prosleđuje tekst zahteva modelu za opise. U režimu `focused`, most čita samo najnoviji neprazan tekst koji je napisao korisnik (`text`/`input_text`) iz istog Chat ili Responses kontejnera, normalizuje ga u NFC, sažima kontrolne karaktere i razmake i ograničava ga na 500 Unicode kodnih tačaka. Prazan rezultat se vraća na tačan `full` prompt. Upotrebljiv nagoveštaj se serijalizuje kao JSON u posebnom bloku nepoverljivog korisničkog konteksta i može samo da daje prioritet uočljivim detaljima; ne može da nadjača zasebno upozorenje protiv praćenja uputstava koja su vidljiva ili čujna u mediju. Tekstualni fokus nikada ne izvodi `start`/`end` niti menja temporalni uzorkivač.

#### FU-07 dokazi o strukturnim segmentima

`segment_aware` koristi jedan ograničen prolaz predanalize kroz već validirani lokalni video tok. Fiksni lanac filtera prvo skalira na najviše 320 piksela širine, detektuje promene scena i zamrznute intervale, a zatim uzorkuje 1 frejm u sekundi radi zamućenja, prosečne lume i prostornih/temporalnih informacija. Prolaz je ograničen na 600 strukturnih uzoraka, jednu FFmpeg/filter nit, iste liste dozvoljenih protokola (samo `file`) i kontejnera, ograničenje izlaza procesa od 1 MiB i najviše 30 sekundi unutar brokerovog deljenog mehanizma za prekid/rok. Nikada ne prihvata komandu, filter, putanju ili URL iz zahteva.

Strukturne vrednosti su deterministički dokazi uzorkovanja, a ne semantičko razumevanje videa. One ne izvode subjekte, radnje, opise, govor ili korisničku nameru. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalj i temporalna promena samo utiču na to kako se postojeći budžet od 1–16 frejmova dodeljuje. Potpuno zamrznut segment je ograničen na jedan frejm, dok se nezamrznuti segmenti takmiče za preostali budžet. Kada granice prevazilaze broj frejmova, zadržava se uniformna pokrivenost vremenske linije, tako da brzi rani rezovi ne mogu sakriti dugi završni segment. Granice scena unutar 1-sekundne rezolucije analize u odnosu na granicu zamrzavanja se spajaju.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora ili istek vremena ograničene predanalize prelaze na tačnu politiku uniformnih srednjih tačaka (fail open). Prekid od strane pozivaoca ili brokerov rok ne aktiviraju fail-open: prekidaju podproces koji je u toku, sprečavaju kasnije izdvajanje frejmova, a privatno privremeno stablo se uklanja u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generiše determinističke stvarne FFmpeg fiksure za uštede od poziva modela za opise nakon deduplikacije, dodelu budžeta za gusti pokret, dokaze o zamućenju/ekspoziciji/SI-TI, brze rezove sa dugim repom i lažne pozitive postepenog izbledivanja. Beleži stvarno vreme predanalize i, kada je `/usr/bin/time` dostupan, CPU vreme potomka i maksimalni RSS. Njegove provere kvaliteta su samo strukturni orakuli. Kvalitet stvarnog modela za opise ostaje `HOLD` jer ovaj harness nema autorizovanu krajnju tačku niti zamrznutog sudiju. Novčane uštede takođe ostaju `HOLD` osim ako `--caption-cost-per-call-usd` obezbedi eksplicitnu pozitivnu procenu po pozivu; skripta nikada ne izmišlja nijedan od ta dva rezultata.

Сваки кадар је ограничен на 4 MiB, сви необрађени кадрови заједно на 23 MiB, а
серијализовани одговор посредника на 32 MiB. Приватни привремени директоријум се уклања
у блоку `finally`. OmniRoute не испоручује FFmpeg у свом пакету и не прихвата прилагођену
путању до извршне датотеке. Пре генерисања описа, мост примењује конзервативни поступак
визуелне дедупликације: сваки JPEG се своди на 16×16 бафер у нијансама сиве и
пореди се само са последњим задржаним кадром. Када је захтевани буџет за описе
већи од једног кадра, издвајање обезбеђује
ограничени скуп кандидата који садржи највише двоструко више кадрова од тог буџета, али никада више од 16 кадрова.
Захтевано ограничење се примењује тек након дедупликације, при чему се први и последњи
изабрани кандидат задржавају током завршног проређивања када је буџет најмање
два. Верзионисана смерница
`grayscale-16x16-mean-cells-v2` користи већу вредност између средње разлике луминансе и
удела ћелија сличице чија је нормализована разлика најмање 0,05.
Праг за дупликате је константа 0,04, изабрана ради предвидљивости уместо
излагања као подешавања током извршавања. Овај секундарни
сигнал високог контраста задржава мале покрете и промене видљивог текста које
поређење засновано само на средњој вредности може да прикрије. Грешке компаратора или декодера не блокирају обраду и задржавају
покривеност. Излазни метаподаци засебно приказују издвојене кандидате, успешно употребљене
кадрове и одбачене визуелне дупликате.

Експлицитно означен видео-део може да захтева контактни лист са временским ознакама. Мост
прави JPEG мрежу са највише 4 колоне и 16 кадрова. Свака ћелија од 512 пиксела
уграђује временску ознаку свог извора у доњу траку високог контраста, док исте временске ознаке
остају у текстуалним метаподацима ради накнадног повезивања и ревизије. Комплетан
JPEG остаје ограничен на 32 MiB. Ако `sharp` не може да декодира или састави мрежу,
мост се враћа на појединачне JPEG кадрове; прекид од стране клијента и даље се преноси
кроз операцију над контактним листом.

Докази за промоцију су намерно одвојени од синтетичког микротеста перформанси
састављања. `scripts/perf/video-bridge-contact-sheet-eval.ts` дефинише
A/B оквир са верзионисаном шемом за стварне моделе за вид компатибилне са OpenAI-јем. Он мери
број токена који пријављује добављач, укупно протекло време од почетка до краја (укључујући састављање листа),
број позива модела и задржавање чињеница дефинисаних манифестом. Необрађени одговори модела се не
уписују у извештај; чувају се само SHA-256 сажеци и идентификатори подударних чињеница.
Оквир не упућује мрежни позив нити позив плаћеном моделу ако није прослеђено `--execute-real` и ако
нису подешени `--model`, `OMNIROUTE_BASE_URL` и `OMNIROUTE_API_KEY`. Без
таквог експлицитног стварног извршавања, машински читљива оцена остаје `HOLD`; синтетичка
мерења величине корисног садржаја и броја позива сама по себи нису доказ за промоцију.

Позиваоци могу да додају опциони низ `transcript.cues` подржаном видео-делу
када већ поседују временски усклађен текст. Свака ставка мора да садржи `text`,
коначан интервал `start`/`end` унутар утврђеног трајања и
дозвољени `source` (`client`, `embedded` или `audio-bridge`); подразумевана вредност за `confidence` је
`1` и мора остати између `0` и `1`. Потпуно идентичне ставке се обједињују.
OmniRoute никада не покреће транскрипцију на основу ових метаподатака: валидиране ставке се
копирају у резултат описа заједно са извором, поузданошћу и интервалом и
приказују се као непоуздана запажања уз описе кадрова. Неважећи текст,
текст изван опсега или текст без порекла одбацује се уместо мешања са током
описа. Оба канала за транскрипт у телу захтева нормализују достављено
порекло на `client`, укључујући самостално декларисане ознаке `embedded` или `audio-bridge`.
Само адаптер под контролом сервера може да додели те поуздане ознаке путем
аргумента `trustedSource` доступног искључиво у коду; JSON поље захтева не може да допре до
тог аргумента. Текст транскрипта остаје непоуздан садржај изведен из медија,
без обзира на његово порекло, и никада не сме да одређује ауторизацију.

Напредни позивалац може да достави нумеру `audioTranscript` за исти видео;
она се третира као текст који је доставио клијент, а не као доказ транскрипције на серверу.
Спојни слој обрађује визуелна и звучна запажања у оквиру
једног крајњег рока и сигнала за прекид, ређа их на заједничкој временској линији, обједињује
потпуно идентичне ставке и пријављује делимичан резултат када успе само једна страна.
Неважећи `audioTranscript` доводи до таквог делимичног резултата — визуелни
опис се задржава, а звучна грана бележи санирани кôд грешке —
уместо да обрада целог видеа не успе. Доступност сваке гране, ознака делимичног резултата
и санирани кодови грешака чувају се у резултату описа, у
метаподацима заштитних механизама (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), у метаподацима кеша резултата и у бројачима
спајања моста. Подразумевана путања Video Bridge-а не покреће претварање говора у текст
нити преузима другу копију медија; без те експлицитне нумере остаје
ограничена само на видео.

**Задржавање транскрипта (#12150 P1).** Ово се примењује аутоматски кад год
Video Bridge (који се и сам експлицитно укључује) рендерује сегмент транскрипта — не постоји посебна
ознака за задржавање. Када захтев рендерује било који сегмент транскрипта (онај који је позивалац декларисао као
`transcript` или спојени `audioTranscript`), заштитна контрола га означава као
`videoBridgeObserved` и производи редиговану копију описа видео-снимка —
идентичан рендер у којем је тело слободног текста сваког сегмента замењено са
`[redacted-video-transcript]`, направљену заменом структурираног поља сегмента
пре састављања ниске (никада рашчлањивањем спљоштеног текста, тако да никакав садржај
сегмента — злонамеран или обичан, укључујући тела која садрже `]`, као што су
`[inaudible]`/`[music]` — не може да опстане). Тело захтева у трајно сачуваном евиденционом запису позива замењује
сваки текстуални део изведен из видео-снимка том редигованом копијом, упареном на основу
једнакости садржаја; сидро `fullText` се поново чита из завршеног корисног садржаја заштитне контроле
пре позива, тако да упаривање и даље успева након што накнадне ланчане заштитне контроле (маскери за PII и
акредитиве, приоритети 10/95) препишу текст описа на лицу места и
након што уметање системског упита/примопредаје/Меморије преобликује низ порука. Тело
послато узводно моделу остаје непромењено. Посматрани захтев такође не попуњава
никакву трајну Меморију (издвајање изведено и из захтева и из одговора се прескаче),
тако да сопствени одговор модела не може да понови текст транскрипта у Меморији.

**Необрађена поља видео-снимка (#12430).** Када је мост омогућен, а изворна подршка за видео непозната или одсутна, дефинисана поља `transcript`/`audioTranscript` такође активирају `videoBridgeObserved`, чак и након неуспеха описа или ограничења `maxVideos`. `null` и празне ниске се рачунају; одсутна поља и метаподаци који нису видео-подаци не рачунају се. Задржане копије редигују ова поља или изостављају захтев, а кешеви/Меморија се заобилазе.

На тим резервним путањама, важећи сегменти које је доставио позивалац постају подржани `text`/`input_text`
делови, уместо нестандардних поља добављача. Обе нумере достављене у захтеву
остају непоуздана `client` запажања, уз изричито упозорење да видео
није описан и да временске ознаке нису проверене у односу на медијски садржај. Постојећа
ограничења од 256 сегмената/укупно 64 KiB, као и ограничења по сегменту, примењују се заједно на обе нумере;
временске ознаке морају да се уклопе у горњу границу посредника од 600 секунди и у сваки наведени
прозор фокуса. Неважеће нумере се одбацују и не прослеђују као произвољан текст; важећа
сродна нумера и даље може да се користи, осим ако је њихово заједничко ограничење прекорачено. Null/празна
поља не додају текст. Ова резервна путања не додаје преузимање медија нити транскрипцију.
Поља проширења транскрипта уклањају се из резервног носача видео-снимка и његових
`video_url`/`source` објеката. OpenAI листа дозвољених поља у преносном формату остаје строга; носачи видео-снимака
са непознатом изворном подршком остају доступни, а позната одредишта која подржавају само текст задржавају безбедне маркере.
Структуриране редиговане копије штите додати текст транскрипта, док
оригинални захтев у власништву позиваоца остаје непромењен. Одредишта са изворном подршком и
онемогућени мостови задржавају постојеће понашање заобилажења.

Додатне задржане копије користе исти сигнал посматраног захтева. Необрађени
снимак клијентског захтева пре заштитне контроле, захтев на чекању у меморији и рани
дневник одбијеног захтева структурно замењују поља транскрипта у видео-деловима;
текстуални упити које синтетишу фазе процесног тока и примопредаја контекста редигују се
на одредишту тела трајно сачуваног захтева. Трајно сачувани маркер `video_content_removed`
узрокује да наставак помоћу `previous_response_id` буде безбедно одбијен, уместо да реконструише
текст који је намерно одбачен. Ако посматрани захтев изгуби своју
редиговану копију за појединачни део пре евидентирања или ако се макар једна од више копија видео-снимка
не упари након каснијих измена захтева, задржано тело захтева се
у потпуности изоставља, уместо да се задржи делимично редигован транскрипт.

За посматрани захтев, одговор модела може да цитира било који део
транскрипта без структуриране границе сегмента. Његов `responseBody` у трајно сачуваном евиденционом запису позива
зато се замењује маркером изостављања; детаљни
артефакт процесног тока (који може да обухвати узводна/клијентска тела и делове тока)
не задржава се. Семантички кешеви, кешеви идемпотентности и кешеви за поновно извођење резоновања
заобилазе читања и уписе за тај захтев. Захтев добављачу и одговор
видљив клијенту остају непромењени. Рани keepalive бајтови се уклањају из привременог
бафера када се детаљни артефакт изостави. Kiro упозорење о неисправном EventStream-у
пријављује само број бајтова корисног садржаја, никада његов садржај нити сирову грешку
JSON парсера.
Овим се не тврди да је проверена свака неповезана дијагностика добављача/прикључка;
шире испитивање одредишта на којима се подаци задржавају прати се у #11658.

Интерни животни циклус `/api/modality-bridge/video/drilldown` представља засебан
кеш-подсистем са аутентификацијом путем loopback интерфејса/токена. Свака операција такође захтева
канонски непрозиран ID принципала. Пре него што се омогући продукциони позивалац, он мора
да изведе тај ID из аутентификованог закупца и никада не сме да проследи
вредност коју је изабрао клијент. Кључеви кеша везују тај принципал за канонске ID-еве сесије и
референце видео-снимка, чувају само њихове кључеве изведене помоћу SHA-256 и ограничавају и читања
и брисање на исти принципал. Кеш чува највише 16 изведених JPEG
кадрова по уносу, истиче их након десет минута и подржава ограничена
`start`/`end` читања или изричито брисање сесије.

Сваки принципал је ограничен на 16 уноса и 64 MiB канонских JPEG података. Та
ограничења су независна од глобалне горње границе од 64 уноса/256 MiB: притисак квоте принципала
избацује само најдуже некоришћене уносе тог принципала пре него што се размотри глобално
LRU избацивање. Истекли уноси се уклањају и из обрачуна по принципалу и из
глобалног обрачуна током активности кеша, док отказивање и неуспех валидације не
уписују делимичну замену.

Кеш одбија неканонски Base64, прекомерно попуњавање, медије који нису JPEG, неисправне или одсечене JPEG датотеке и JPEG датотеке које производе упозорење током ограниченог декодирања целе слике помоћу `sharp`. Поново кодира сваку прихваћену слику као канонски JPEG, изводи ширину и висину из декодираних бајтова уместо да верује пољима позиваоца и одбацује све завршне polyglot бајтове уместо да их задржи. Само се ограничени канонски компресовани бафер урачунава у обе квоте. JSON лимит преноса укључује Base64 трошак за горњу границу декодираног улаза од 32 MiB. Свака ускладиштена деривација бележи свој валидирани JPEG формат/резолуцију, политику узорковања, верзију деривације, време стварања, хеш садржаја који је израчунао сервер и хеширану референцу на родитеља, заједно са хешем садржаја родитеља који је доставио поуздани позивалац. Отказивање се проверава између асинхроних фаза декодирања/хеширања пре атомског уписа у кеш.

Овај део још увек не повезује продукционог произвођача са рутом и не пружа избор варијанти са више резолуција. Транспарентна путања захтева Видео моста стога не ствара додатни посао, док извођење принципала везаног за закупца и пуни FU-08 животни циклус са више резолуција и даље представљају експлицитан накнадни рад, а не документовано комплетно понашање.

Кадрови се описују секвенцијално помоћу конфигурисаног видео модела. Празно Video надјачавање наслеђује Vision подешавање; ако су оба празна, Vision аутоматски рутер бира ефективни модел способан за вид. Успешни описи замењују оригинални део стабилним префиксом `[Video description:` који такође означава текст као неповерљиво запажање изведено из медија и говори низводним моделима да не прате упутства пронађена у медију. Кључеви кеша описа кадрова укључују JPEG бајтове, упит, временску ознаку и ефективни модел; кеширају се само успешни описи. Уноси у кешу задржавају стварни модел произвођача који је успео, укључујући резервни модел; мост пријављује `mixed` када су различите кадрове произвели различити модели. Погодак кеша поново користи тај идентитет произвођача уместо да га преозначи као затражени план рутирања. Кеш резултата целог видеа користи као кључ сваки улаз који мења излаз — упит, ефективни модел, политика узорковања, број кадрова, режим семантичке анализе, SHA-256 отисак нормализованог фокусног наговештаја, фокусни прозор, `transcript`, `audioTranscript` и ознака контактне табеле — тако да је промена било које од тих димензија промашај кеша, никада застарело поновно коришћење. Верзија политике визуелне дедупликације, праг и ограничени број кандидатских кадрова такође су експлицитни у кључу и метаподацима кеша резултата; промена политике стога не може поново користити застарели опис целог видеа. Метаподаци кеша резултата v4 чувају режим и отисак, никада сирови кориснички задатак. Метаподаци заштитне ограде пријављују и затражени и ефективни режим анализе; затражени режим `focused` без употребљивог корисничког текста пријављује се као ефективно `full`.

Заштитна ограда издваја сваки подржани видео део, али описује не више од `modalityBridgeVideoMaxVideos`. За циљ за који је доказано да има `supportsVideo === false`, неуспели и прекомерни видео-записи постају експлицитни безбедни текстуални маркери, тако да ниједан сирови видео не остане. Када је способност непозната, ти делови задржавају свој видео носач; било који резервни транскрипт следи горе описану ограничену текстуалну конверзију. Циљеви са `supportsVideo === true` заобилазе мост. Сигнал за прекид клијентског захтева пропагира се кроз преузимање, ред брокера, подпроцесе и позиве описа; прекиди се примењују између видеа и никада не доводе до отвореног приступа сировим медијима.

Подешавања током рада чувају се у бази података и валидирају Zod-ом:

| Кључ                                | Подразумевано | Опсег / понашање                                                                                     |
| ----------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Опционално током рада, укључује се по избору                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` чува генеричке описе; `focused` користи ограничен, неповерљив контекст последњег корисника    |
| `modalityBridgeVideoModel`          | `""`          | Наслеђује модел Vision Bridge                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware` или пропорционални `segment_aware`; неуспех детектора враћа се на `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                       |

Застареле сачуване вредности Video временског ограничења изнад 120 секунди ограничавају се на рок брокера; нови уписи подешавања изнад тог лимита се одбијају. `GET /api/modality-bridge/video/runtime` захтева поуздану, оверену loopback локалност пре аутентификације или испитивања извршавања, затим захтева ауторизацију за управљање. Враћа само `available`, очишћене верзије FFmpeg/ffprobe и фиксни разлог када извршавање није доступно. Интерна крајња тачка за издвајање није јавни API за отпремање: засићење реда враћа `503` плус `Retry-After`, прекид везе позиваоца враћа `499`, а фиксни рок брокера враћа `504`. Конвертовани одговори додају `video->text;model=<visionModel>;parts=<videos>` у централно заглавље `x-omniroute-modality-bridge` без уклањања Vision или Audio сегмената.

### PII маскирач (`piiMasker.ts`)

Ради на **оба** стадијума.

- **`preCall`** клонира payload, обилази `system`, `messages`, `input` и `prompt` (укључујући обичне стрингове као ставке) и примењује `processPII()` (из `@/shared/utils/inputSanitizer`) на стринг поља `content`/`text`. Када је `PII_REDACTION_ENABLED=true`, детектовани PII се редигује у одлазном payload-у. Ово је независно од `INPUT_SANITIZER_MODE` (који контролише само политику prompt injection-а). Када је редиговање искључено, позив бележи бројеве детекција без преписивања садржаја.
- **`postCall`** дубоко клонира одговор, покреће `sanitizePIIResponse()` плус маскер за облик Responses API-ја (`maskResponsesOutput` — покрива `output_text` и `output[].content[].text`). Ако дође до било каквог редиговања, измењени одговор замењује оригинал.

Заштитни механизам никада не блокира; он само анотира (`meta.detections`, `meta.redacted`) или преписује.

#### Избор по типу, прилагођени обрасци и бројачи детекција

**Dashboard → Settings → Security → PII masking** одређује _шта_ се маскира. Ово не укључује маскирање: за то су и даље задужени `PII_REDACTION_ENABLED` (захтев) и `PII_RESPONSE_SANITIZATION` (одговор + SSE), а обоје је подразумевано искључено.

- **Избор по типу** — уграђени id-јеви су наведени у `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Непостављено значи сваки тип (понашање пре него што је ово подешавање постојало). Образац `ssn_us` у механизму за обраду захтева мапира се на `ssn`. Шаблони (Minimal, Standard, Financial, Brazilian, USA, Full) само попуњавају поља за потврду у UI-ју.
- **Прилагођени обрасци** — до 20 regex или wildcard образаца (`*` = до 64 знака који нису размаци, `?` = један). Поклапања постају `[CUSTOM_REDACTED]`. Сваки образац пролази кроз `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`): највише 500 знакова, флегови ограничени на `g i m s u`, мора да се компајлира, мора да прође `safe-regex` (катастрофално бектрековање) и не сме да се поклопи са празним стрингом или placeholder-ом за редиговање. Образац који не прође се одбија при чувању и при тестирању, а сачувани ред који не прође се прескаче у време извршавања уместо да се компајлира. Прилагођени обрасци се извршавају само док је маскирање укључено.
- **Бројачи детекција** — бројеви по типу (никада поклопљене вредности), држе се у меморији и ресетују се при рестарту (`src/lib/pii/piiDetectionStats.ts`). Повећавају се само док је маскирање укључено.

Подешавања се налазе у табели `key_value` (namespace `pii_settings`, `src/lib/db/piiSettings.ts`) и читају се кроз кеш од 1 s. API:

| Метод  | Путања                   | Намена                                                                 |
| ------ | ------------------------ | ---------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Стање флегова, `enabledTypes`, `customPatterns`, бројачи детекција     |
| `PUT`  | `/api/settings/pii`      | Замена `enabledTypes` (`null` = сви) и/или `customPatterns`            |
| `POST` | `/api/settings/pii/test` | Пробни тест једног обрасца на узорку од највише 8 KB; ништа се не чува |

Сва три захтевају management auth и валидирају тело помоћу Zod-а (`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Детектује адверзаријалне структуре у садржају који доставља корисник и примењује конфигурисану политику. Понашање се води променљивим окружења и опцијама конструктора:

| Подешавање     | Env var                                                                                                | Подразумевано | Ефекат                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Укључено       | `INPUT_SANITIZER_ENABLED`                                                                              | `true`        | Када је `false`, заштитни механизам се прескаче.                                                                                                                                                            |
| Режим          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`        | Политика за инјекције: `block`, `warn` или `log`. (`redact` се прихвата због компатибилности уназад, али **не** уклања инјектовани текст; преписивање PII-ја у захтеву контролише `PII_REDACTION_ENABLED`.) |
| Праг блокирања | опција `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (алијас `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Минимална тежина потребна за блокирање. Medium је само за посматрање при подразумеваним вредностима.                                                                                                        |

**Приоритет режима** (`getMode`): позиваочев `options.mode` → `INJECTION_GUARD_MODE` **DB feature-flag override** (Dashboard → Settings → Feature Flags) → `INJECTION_GUARD_MODE` env → `INPUT_SANITIZER_MODE` env → `warn`. Override са dashboard-а, дакле, побеђује env променљиве, тако да Feature Flags UI контролише заштиту у раду уживо (без рестарта). Читање из DB-а је fail-safe: ако дође до грешке, заштита се враћа на понашање засновано на env променљивама, а када override није подешен, понашање је идентично резолуцији само преко env променљивих.

Извори детекције:

1. `sanitizeRequest()` из `@/shared/utils/inputSanitizer` (заједнички скуп детектора који се користи и другде у pipeline-у).
2. Уграђени `DEFAULT_GUARD_PATTERNS` (тренутно `system_override_inline` и `markdown_system_block`, обојица са тежином `high`).
3. Опциони `customPatterns` који се прослеђују кроз опције конструктора (стрингови, regex или записи `{ name, pattern, severity }`).

Када је `mode === "block"` **и** бар једна детекција задовољава праг озбиљности, `preCall` враћа `{ block: true, message: "Request rejected: suspicious content detected" }`. У режимима `warn`/`log` guardrail само логује, али дозвољава позив. Заједнички помоћни хелпер `evaluatePromptInjection()` је такође извезен за позиваоце којима је потребно да евалуирају упите без проласка кроз регистар.

**Граница скенирања (v3.8.20):** детектор прегледа само **првих 16 KB** спојеног текста упита — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 бајта) у `src/shared/utils/inputSanitizer.ts`. И `detectInjection()` и `evaluatePromptInjection()` позивају `slice(0, MAX_INJECTION_SCAN_BYTES)` пре покретања петље образаца. Инјекционе директиве се налазе при врху улаза, тако да ово ограничава CPU/GC за regex на payload-има од више стотина KB без слабљења детекције (в. #3932, #4041).

### Маскирање креденцијала (`credentialMasker.ts`)

Извршава се на **обе** фазе, последњи у подразумеваном ланцу (приоритет `95`). Редагује добро познате обрасце API кључева / тајних токена из одлазног payload-а (садржај поруке, аргументи позива алата, резултати алата) **и** одговора провајдера, тако да креденцијал налепљен у упит (или враћен од стране резултата алата) не буде процурео ка узводном провајдеру нити назад ка клијенту.

- **Само уз експлицитно укључивање**, иста конвенција као код редаговања PII (везано за Hard Rule #20): онемогућено осим ако је `settings.credentialRedactionEnabled === true` **или** `CREDENTIAL_REDACTION_ENABLED=true`. Када је искључено, guardrail не ради ништа — никада не блокира и никада не преписује.
- `redactCredentials()` обилази цело стабло payload-а/одговора (`walkValue()`, безбедно од загађења прототипа, безбедно од циклуса преко `WeakSet`) и замењује поклапања са `[REDACTED:<type>]` као заменским текстом, клонирајући само гране које су заиста промењене.
- `CREDENTIAL_PATTERNS` покрива кључеве LLM провајдера (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS токене (GitHub, Slack, Linear, Notion, npm, Postman, Discord), кључеве за плаћање (Stripe, Square), кључеве облака (AWS приступни кључ, Twilio, SendGrid, Mailgun), приватне кључеве / JWT-ове, ниске за повезивање које садрже креденцијале (`mongodb://user:pass@...`, итд.), и генерички образац вредности заглавља `Authorization`/`x-api-key`/`api-key`/`apikey`. Кључеви у облику заглавља (`authorization`, `x-api-key`, `api-key`, `apikey`) се редагују структурно (само вредност, префикс шеме као што је `Bearer `/`Basic ` се задржава) уместо преко генеричког regex-а за текст.
- Guardrail никада не блокира; само преписује (`modifiedPayload` / `modifiedResponse`) и анотира (`meta.credentialsRedacted`, `meta.count`).

Заштита од регресије: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovni ugovor (`base.ts`)

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
  block?: boolean; // true prekida lanac
  message?: string; // prikazuje se kada se blokira
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća preCall za prepisivanje zahteva
  modifiedResponse?: TValue; // vraća postCall za prepisivanje odgovora
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

Guardrail signalizira „nema promene“ vraćanjem bilo `void`, `{}` ili
`{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamenjuje
vrednost koja prolazi kroz lanac za nizvodne guardrail-ove.
`signal?: AbortSignal` nosi životni ciklus pozivaoca u guardrail-ove. Prekid zahteva je namerni fail-open izuzetak: mostovi za medije zaustavljaju rad i vrše čišćenje bez vraćanja sirovih medija na cilj za koji se zna da ih ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje (ili zamenjuje po normalizovanom imenu) guardrail i
  ponovo sortira po rastućem `priority`.
- `clear()` / `list()` — administrativni pomoćnici.
- `runPreCallHooks(payload, context)` — iterira kroz aktivne guardrail-ove, provlači
  payload kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i opciono
  ponovo registruje podrazumevane vrednosti radi čiste izolacije testova.

Oba izvršioca vraćaju `{ blocked, payload|response, results, guardrail?, message? }`
gde je `results` niz `GuardrailExecutionResult` zapisa koji sadrže polja
`blocked`, `skipped`, `modified`, `error` i `meta` po guardrail-u i korisni su za praćenje.

### Onemogućavanje guardrail-ova po zahtevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregira
deduplikovanu listu imena guardrail-ova koje treba preskočiti za trenutni
zahtev. Postoji pet kanala, čitaju se ovim redosledom i spajaju u jednu listu
(prvo pojavljivanje pobeđuje pri deduplikaciji):

1. `apiKeyInfo.disabledGuardrails`
2. Telo zahteva `disabledGuardrails` (najviši nivo)
3. Telo zahteva `metadata.disabledGuardrails` (samo kada je `metadata` objekat)
4. Zaglavlje `x-omniroute-disabled-guardrails`
5. Nasleđeno zaglavlje `x-disabled-guardrails`

Svih pet kanala se spaja, uključujući dva zaglavlja: slanje i
`x-omniroute-disabled-guardrails` i `x-disabled-guardrails` preskače uniju
njihovih listi, a prazno savremeno zaglavlje više ne skriva nasleđeno
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ispravljeno u
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrednosti mogu biti nizovi stringova ili string razdvojen zapetama; imena se trimuju
i normalizuju u kebab-case sa malim slovima (`pii_masker` → `pii-masker`), a prazni
unosi se odbacuju. Rezultat se prosleđuje kroz `context.disabledGuardrails`
registru, koji preskače odgovarajuće guardrail-ove (`skipped: true` u `results`).

Lista za onemogućavanje utiče samo na **registar**. Režim `block` za prompt-injection je
obavezna granica: middleware injection-guard
(`src/middleware/promptInjectionGuard.ts`) poziva `evaluatePromptInjection()`
bez ikakve liste za onemogućavanje pod kontrolom pozivaoca (neiskorišćen
poziv `resolveDisabledGuardrails({ body })` koji je ranije pravio uklonjen je u
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), tako da zahtev
koji onemogući `prompt-injection` i dalje biva odbijen u `block` režimu. To je
namerno. Kanali za onemogućavanje su pod kontrolom pozivaoca (telo zahteva,
metapodaci, zaglavlja), i pozivalac ne sme biti u mogućnosti da isključi bezbednosnu
kontrolu koju je postavio operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija zaglavlja
iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
menja samo to koji se guardrail-ovi u registru preskaču; ne dozvoljava klijentu
da zaobiđe middleware. Obavezujuće guardrail politike po ključu i po grupi
prate se u v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Videti [Pokrivenost i ograničenja](#coverage-and-limits).

## Редослед извршавања

За сваки захтев који пролази кроз `src/sse/handlers/chat.ts` и
`open-sse/handlers/chatCore.ts` (руте из chat-породице наведене у
[Покривеност и ограничења](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` гради листу прескакања из API кључа, тела
   и заглавља.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` покреће guardrails у растућем
   редоследу приоритета:
   - Онемогућени guardrails се бележе као `skipped`.
   - Сваки `preCall` guardrail-а може преписати payload преко `modifiedPayload`.
   - Први `block: true` прекида ланац и handler враћа одговор са одбијањем
     од guardrail-а.
3. (Потенцијално преписан) payload улази у combo рутирање и upstream
   dispatch.
4. **Само за не-стриминг:** након што се одговор састави,
   `guardrailRegistry.runPostCallHooks(...)` покреће исти ланац на
   одговору. `block: true` овде одбацује upstream одговор и враћа HTTP 400. Стримовани одговори у потпуности прескачу овај корак.

Guardrails који баце изузетак бележе се са `error: <message>` и логују преко
`logger.warn`, али ланац се наставља — fail-open по дизајну.

## Покривеност и ограничења

Регистар guardrail-а је повезан само са chat pipeline-ом. Ова ограничења су
фиксирана тестовима `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` и
`tests/unit/guardrail-pipeline-characterization.test.ts`; ажурирајте те тестове
намерно када се понашање промени.

### Где се hooks покрећу

| Hook / контрола                     | Покреће се на                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Захтеви које обрађује `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (и `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, и Telegram chat proxy. Такође тест endpoint на dashboard-у `/api/guardrails/test`. Pre-call блок враћа HTTP 400. |
| `runPostCallHooks`                  | **Не-стриминг** chat одговори само (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Стримовани одговори га никада не достижу.                                                                                                                                                                                                                                                                                  |
| Streaming PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), повезан у `streamingPipeline.ts` када је `PII_RESPONSE_SANITIZATION` укључен. То није guardrail, тако да канали за онемогућавање не утичу на њега.                                                                                                                                                                                                      |
| Injection-guard middleware (legacy) | Свака `/v1` рута која садржи prompt, укључујући chat-породицу (погледајте [покривеност рута](#injection-guard-route-coverage--red-team-phase-8--block-d)). Само prompt injection.                                                                                                                                                                                                                                     |

### Шта није покривено

- **Медијске, embeddings и data руте** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) никада не достижу регистар. Тамо се не извршавају
  PII masking, credential masking ни modality bridge. Њихова једина провера је
  legacy injection-guard middleware.
- **Стримовани одговори** не добијају post-call guardrails: нема `pii-masker` ни
  `credential-masker` post-call, ни post-call блока. Примењује се само streaming PII
  трансформација (када је `PII_RESPONSE_SANITIZATION` укључен). Credential који се врати
  у стримованом одговору није редакциран.
- **Канали за онемогућавање наспрам middleware-а (по дизајну):** middleware процењује
  prompt injection сопственим позивом `evaluatePromptInjection()`, без
  преношења било које листе за онемогућавање коју контролише позивалац. Режим `block` је обавезна
  граница коју онемогућавања под контролом позиваоца не могу заобићи, укључујући на рутама chat-породице
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Онемогућавање
  `prompt-injection` прескаче само registry guardrail.

### Шта види одговор пре post-call

На не-стриминг путањи редослед је: memory extraction → извршавање уграђених
алата → post-call guardrails → post-call block излаз → semantic-cache store.

- **Екстракција меморије** и **извршавање алата** виде одговор пре него што заштитна правила након позива могу да га препишу или блокирају. Од
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), екстракција
  меморије провлачи извучени текст кроз `sanitizePII` када је
  `PII_RESPONSE_SANITIZATION` укључен (и за стриминг и за не-стриминг), али
  одговор који се касније блокира након позива и даље је већ понуђен меморији и
  алатима.
- **Семантички кеш** чува одговор након позива, тако да чува
  преписани одговор, а блокирани одговор се никада не кешира. Ставке кеша се
  кључују према API кључу.

## Конфигурација

Променљиве окружења које читају уграђене заштитне мере:

| Променљива                            | Користи је              | Ефекат                                                                                                                                   |
| ------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Подесите на `false` да бисте у потпуности онемогућили откривање.                                                                         |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Политика за инјекције: `warn`, `block` или `log`. Застарела вредност `redact` не мења текст инјекције.                                   |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Режим заштите од инјекција; такође је ознака функционалности у бази података која **има предност** над променљивама окружења (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Минимални ниво озбиљности који `MODE=block` одбија: `high` (подразумевано), `medium` или `low`.                                          |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Застарели псеудоним за `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Када је `true`, PII у захтеву се редигује (независно од режима за инјекције).                                                            |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (низводно) | Контролише понашање маскирања на страни одговора.                                                                                        |

Заштитне мере Modality Bridge-а читају конфигурацију током извршавања из складишта подешавања заснованог на бази података
(`getSettings()`), а не из променљивих окружења. Примарни кључеви за Vision су
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` и
`modalityBridgeCacheMaxEntries`. Застарели
`visionBridge*` кључеви прихватају се само као документовани резервни механизам читања током једног циклуса;
уписи са контролне табле користе примарне кључеве. Подразумеване вредности и механизам за разрешавање резервних вредности
налазе се у `src/shared/constants/modalityBridgeDefaults.ts`, док су застареле
константе задржане у `src/shared/constants/visionBridgeDefaults.ts`.

Audio користи `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` и `modalityBridgeAudioMaxClips`, као и дељена
`modalityBridgeCache*` подешавања. Audio нема резервни механизам за застареле кључеве јер су ови
кључеви уведени са Modality Bridge шемом.

Video користи `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` и
`modalityBridgeVideoTimeout`, као и дељена `modalityBridgeCache*` подешавања.
Подразумевано је онемогућен јер су FFmpeg/ffprobe опционе оперативне
зависности, а генерисање описа кадрова повећава кашњење и трошкове коришћења модела.

## Прилагођене заштитне баријере

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

Кораци:

1. Направите `src/lib/guardrails/myGuardrail.ts` који наслеђује `BaseGuardrail`.
2. Имплементирајте `preCall` и/или `postCall`.
3. Региструјте га или у време увоза (push из `registerDefaultGuardrails`) или
   позовите `guardrailRegistry.register(...)` у време извршавања — регистар замењује
   сваки претходни guardrail са истим нормализованим именом.
4. Додајте тестове у `tests/unit/` (постојећи примери:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Тестирање

Користите `resetGuardrailsForTests()` између тестова да бисте почели од познатог стања.
Проследите `{ registerDefaults: false }` да бисте почели са празним регистром и
регистровали само guardrails који се тестирају. Vision Bridge прихвата убризгавање
зависности (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge излаже
еквивалентне тачке за подешавања, могућности, избор STT модела, провере
акредитива и транскрипцију. Тестови стога могу да вежбају оба тока без приступа
бази података или мрежи.

## Погледајте такође

- `src/lib/guardrails/` — имплементација
- `src/shared/utils/inputSanitizer.ts` — заједнички детектор који покреће
  prompt-injection и PII маскирање
- `src/shared/constants/visionBridgeDefaults.ts` — подразумеване вредности Vision Bridge-а и
  листа модела са принудним мостом
- `src/shared/constants/modalityBridgeDefaults.ts` — заједничке подразумеване вредности Vision/Audio извршавања
- `docs/architecture/RESILIENCE_GUIDE.md` — ортогонални слој (circuit breaker, cooldowns)
- `docs/reference/ENVIRONMENT.md` — потпуна референца env променљивих

## Покривеност рута injection-guard-ом и red-team (Фаза 8 · Блок D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) покрива све руте
које прихватају корисничке prompt-ове. Поштује `INJECTION_GUARD_MODE` (подразумевано `warn` = само логовање;
`block` = враћа HTTP 400 `SECURITY_001`).

| Тип               | Руте                                                                                                                                                 | Подразумевани режим |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Текст (постојеће) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Генеративне       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Подаци            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Извлачење текста (`extractMessageContents`) покрива `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (ноћни, `nightly-llm-security.yml`):** promptfoo проверава да свака рута блокира
OWASP-LLM корпус у `INJECTION_GUARD_MODE=block`; garak извршава пробе (прескаче без тајне).
`moderations` је укључен ради доследности. Режим блокирања је обавезна граница: `evaluatePromptInjection()`
игнорише листу искључивања по захтеву коју му прослеђује middleware, тако да `disabledGuardrails`
**не** изузима руту од њега ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Ноћни workflow (`.github/workflows/nightly-llm-security.yml`, cron + ручно
покретање) има два посла:

- **`promptfoo-guard` (блокирајући)** — извршава `promptfoo eval -c promptfooconfig.yaml`
  са `INJECTION_GUARD_MODE=block`. Сваки адверсаријални случај (нпр. „ignore all
  previous instructions…“, DAN jailbreak-ови) тврди да одговор носи
  `error.code === "SECURITY_001"`, тј. да је guard заиста одбио захтев.
- **`garak` (саветодавни)** — извршава garak `--probes promptinject,dan,leakreplay`
  против локалне OmniRoute инстанце (`http://localhost:20128/v1`). Условљен је
  тајном провајдера (`PROMPTFOO_PROVIDER_KEY`); грациозно се прескаче и има суфикс
  `|| true`, тако да извештава без обарања CI-ја.

Покривеност guard помоћника (`createInjectionGuard` / `withInjectionGuard`)
обухвата сваку `/v1` руту која садржи prompt; текст prompt-а се извлачи из
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` помоћу
`extractMessageContents()` у `src/shared/utils/inputSanitizer.ts`.
