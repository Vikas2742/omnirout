# Guardrails (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sanningskälla:** `src/lib/guardrails/`
> **Senast uppdaterad:** 2026-10-17 — v3.8.52 (lade till [Täckning och begränsningar](#coverage-and-limits):
> vilka routes och svarsvägar som hookarna når, de sammanslagna inaktiveringshuvudena (#16412), injektionsblockeringsläge
> som en obligatorisk gräns (#16413) samt vad som ser ett svar före post-call)

Skyddsräcken upprätthåller säkerhet, policyer och innehållstransformeringar vid gränsen
mellan OmniRoute och uppströmsleverantörer. Varje skyddsräcke kan inspektera (och
valfritt avvisa, transformera eller annotera) nyttolaster i förfrågningar (`preCall`) och
svar från uppströmsleverantörer (`postCall`).

Systemet är **fail-open**: om ett skyddsräcke genererar ett undantag under körning registrerar
registret felet och fortsätter med nästa skyddsräcke i stället för att misslyckas med
förfrågan. Blockering är ett uttryckligt beslut (`block: true`), aldrig en olyckshändelse.
Det enda undantaget är en avbruten förfrågan: när anroparens `signal` avbryts
gör ett skyddsräcke som genererar ett undantag att hook-körningen avvisas i stället för att
hoppas över.

Hookarna körs **inte** för varje route eller varje svar. Läs
[Täckning och begränsningar](#coverage-and-limits) innan du förlitar dig på ett skyddsräcke som
säkerhetskontroll.

## Inbyggda skyddsräcken

Registret läser automatiskt in sex skyddsräcken i prioritetsordning vid import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Namn                | Steg           | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lägre prioritetsnummer körs **först**.

### Visionsbrygga (`visionBridge.ts`) — Modalitetsbrygga PR-1

Basmodellen GLM 5.3 och `glm-5.3-{low,high,max}` har explicita
`supportsVision:false`-metadata i registret/specifikationen. GLM 5.3 Flash-varianterna
förblir modeller med inbyggt visionsstöd. Claude Codes route `/v1/messages` går in i
den delade skyddsräckeskedjan `handleChat` för pre-call **före** översättning från Claude
till OpenAI; nästlade bilder i `Read`-verktygsresultat måste beskrivas eller hanteras
innan översättningen lyfter in dem i OpenAI-innehåll av typen `image_url` (#17069).

Fångar upp förfrågningar som innehåller bilder och är riktade till **modeller utan visionsstöd** och
dirigerar antingen om hela förfrågan till en modell med visionsstöd eller ersätter
bilddelarna med textbeskrivningar som produceras av en konfigurerbar visionsmodell före
anropet till uppströmsleverantören. Detta gör att leverantörer som endast stöder text transparent kan hantera
multimodala nyttolaster.

Flöde:

1. Hoppa över om målmodellen redan stöder vision (såvida den inte finns i
   listan över framtvingade bryggmodeller `isVisionBridgeForcedModel`).
2. Extrahera bilddelar via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerar till den **enhetliga mediedetektorn**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den enda
   sanningskällan som delas med kompatibilitetsfiltret för kombinationer.
   Extraheringen begränsas till en tillåten lista över de former som `replaceImageParts` kan foga
   tillbaka (kontraktet extrahera↔ersätt): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic-URL `source.type:"url"` och Responses
   API `input_image`. Matchande bilder som är nästlade i Claude Codes
   `tool_result.content` och verktygsutdata från Responses extraheras och
   ersätts också på sina ursprungliga sökvägar; former som endast fungerar som indikatorer är material
   för kombinationsfiltret och extraheras inte.
   Hoppa över om inga hittas.
3. Lös upp körningskonfigurationen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nya inställningsnycklar för `modalityBridge*`
   har företräde; äldre nycklar för `visionBridge*` finns kvar som en **reservlösning under
   en cykel** (återställningsfönster). Hoppa över före all genomgång av media när
   bryggan är inaktiverad.
4. Lägesväljaren (`modalityBridgeVisionMode`, se tabellen nedan) avgör
   omdirigering kontra beskrivning. Omdirigering returnerar `modifiedPayload` där endast `model`
   har bytts ut, plus metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivningsväg: begränsa bilderna till `maxImages`, sätt samman den uppgiftsanpassade prompten,
   kontrollera beskrivningscachen, anropa visionsmodellen **parallellt**
   (`Promise.allSettled`) och injicera textdelarna `[Image N]: <description>` på
   deras plats. En misslyckad beskrivning ger `null`: den obehandlade bilden bevaras för
   okända mål/mål med visionsstöd (#4012), men ett **bekräftat direkt
   mål som endast stöder text** eller en kombination utan visionsstöd får en uttrycklig
   textplatshållare `(unavailable — no vision-capable provider connected)` för
   varje obeskriven bild, inklusive partiella fel och bilder utöver
   gränsen för beskrivningsanrop (#17069). Den befintliga reservlösningen för kombinationsbeskrivning
   när alla anrop misslyckas finns kvar (#8430).
6. Returnera `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Lägesväljare (`modalityBridgeVisionMode`)

| Läge       | Standard | Beteende                                                                                                                                                                                                                                                                                                                                            |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Äldre heuristik, orörd (#6640/#7204): modeller som inte är combo/`auto/` omdirigeras till den bästa synmodellen om inte den ursprungliga modellen redan har användbara autentiseringsuppgifter (då beskrivs bilden); combo-mål beskriver alltid.                                                                                                    |
| `describe` |          | Beskriv alltid – omdirigeringsblocket hoppas över helt; användarens valda modell svarar alltid.                                                                                                                                                                                                                                                     |
| `reroute`  |          | Tvinga omdirigering: skyddet som behåller modellen med autentiseringsuppgifter kringgås. Skyddet för omdirigerings-**målets** autentiseringsuppgifter gäller fortfarande – när det inte finns något användbart synmål blockerar bryggan med ett tydligt fel i stället för att beskriva eller skicka råa bilder till ett mål som bara hanterar text. |

Tvingade lägen kortsluter **innan** auto-heuristiken körs; `auto`-beteendet
är byte-identiskt med guardrailen före PR-1.

#### API-nyckelns omfattning (`visionBridgeKeyScope.ts`)

När anroparens API-nyckel begränsar `allowedConnections`, kvotpooler
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), väljer bryggan
endast omdirigerings- och beskrivningsmodeller som nyckeln får använda, på
anslutningar som nyckeln får använda. Beskrivningsanropet går sedan alltid via
OmniRoute-self-loopen med headern `x-omniroute-self-loop-key-id`, så att den
mottagande chattförfrågan återigen tillämpar nyckelns policy för anslutningar
och modeller. `enforceApiKeyPolicy()` respekterar den headern endast tillsammans
med self-loop-bearern, så den kan bara begränsa åtkomsten, och ett id som inte
kan lösas upp avvisas.

Om ingen synmodell är tillåten för nyckeln avvisar ett **bekräftat
text-only-mål** bildförfrågan lokalt med en tydlig HTTP 400 i stället för att
vidarebefordra bildbytes till en otillräcklig uppström (#17069). För mål med
okänd eller inbyggd synförmåga behåller beskrivningsvägen sitt tidigare
fail-open-beteende (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Förfrågningar utan nyckel, och nycklar utan dessa begränsningar, beter sig exakt
som tidigare.

#### Uppgiftsmedveten beskrivningsprompt (`modalityBridgeVisionTaskAware`)

Standard **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lägger
till texten från det **senaste användarmeddelandet** (trunkerad till 500 tecken)
i basbeskrivningsprompten, vilket styr beskrivningen mot det användaren
faktiskt frågade om (codex-vision-proxy-mönstret) och ber synmodellen att
transkribera synlig text. Med flaggan avstängd – eller utan användartext –
används basprompten oförändrad.

Beskrivnings-self-loopens egen OpenAI-kompatibla förfrågan (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) begär alltid `image_url.detail: "high"` –
ovillkorligt, för varje anropare/provider, inte villkorat av någon klientsignal.
Låg-detalj-sampling försämrar OCR-noggrannheten för just den
texttranskriberingsuppgift som denna prompt efterfrågar, så själva
beskrivningsanropet begär alltid hög detalj oavsett vilken detaljnivå den
ursprungliga inkommande förfrågan använde. Detta påverkar endast den interna
beskrivningsförfrågans body; det ändrar inte hur OmniRoute vidarebefordrar
anroparens egen `image_url.detail` på den primära förfrågan – den standarden
tillämpas separat, och endast för identifierade OpenCode-klienter, i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic-trådformatsgrenen av beskrivnings-self-loopen har inget `detail`-fält
och påverkas inte av någon av standarderna.

#### Tak för beskrivningslängd (`modalityBridgeVisionMaxChars`)

| Nyckel                         | Standard | Intervall           |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **inget tak** – beskrivningen som returneras av
`callVisionModel()` skickas igenom oförändrad, vilket bevarar det befintliga
beteendet. Alla värden i intervallet 100–50000 trunkerar beskrivningen med
suffixet `…` innan den sätts in igen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Höj detta för detaljtunga OCR-uppgifter där den nedströms modellen behöver hela
transkriptionen; sänk det för att begränsa tokenanvändningen för pratsamma
synmodeller. Dashboardfältet finns på fliken Visions panel Advanced
(`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) och klämmer upp
alla värden mellan 1 och 99 till golvet 100 medan ett explicit `0` lämnas orört
– `0` är ett giltigt Zod-värde i sig
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), inte bara
standardvärdet för "osatt".

#### Cache för beskrivningar (`modalityBridge/bridgeCache.ts`)

LRU + TTL-cache i minnet för beskrivningsutdata, delad i hela processen.
Nyckel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` med
längdprefixad inramning (inga kollisioner vid fältgränser). Modellkomponenten är
den **konfigurerade** bryggmodellen, inte modellen som faktiskt svarade –
`callVisionModel` kan falla tillbaka internt, och nyckling per försök skulle
fragmentera cachen. Misslyckade beskrivningar cachas aldrig. Inställningar:

| Nyckel                          | Standard | Intervall |
| ------------------------------- | -------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`   | —         |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000   |

#### Normalisering av fjärrbilder (self-loop describe/base64-hämtning)

När bryggan själv hämtar en **fjärrbild** — Anthropics describe-självanrop och base64-konverteringen för claude-wire-format (`ensureBase64ImagesForClaudeWire`), båda via `fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — skickas den resulterande data-URI:n genom `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) innan den bäddas in i visionsmodellens begäran. Bilder som är för stora skalas ned till en **lång sida på 2048px** (vilket matchar storleksgränsen som OpenAI/Anthropic redan tillämpar på serversidan), vilket minskar uppladdade byte och latens utan att ändra vad visionsmodellen ser. Storleksändringen använder `sharp`, som laddas via dynamisk import: på en plattform där dess inbyggda binärfil inte kan laddas **kastar `normalizeDataUri()` aldrig** — den faller tillbaka på att skicka igenom de ursprungliga byten, så att describe/base64-konverteringsvägen alltid fortsätter att fungera. Byte som inte är bilder (en hämtning som inte returnerade en avkodbar bild) skickas också igenom orörda. Denna normalisering är begränsad till bilder som bryggan hämtar för sitt eget självanrop — den tillämpas aldrig på anroparens råa passthrough-payload, i linje med mutationsprincipen med enbart opt-in (Hard Rule #20).

#### Inställningsschema + migrering

De nya nycklarna `modalityBridge*` valideras med Zod i `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trion `modalityBridgeCache*` och gruppen `modalityBridgeAudio*` som används av Audio Bridge. Migreringen `141_modality_bridge_settings.sql` kopierar befintliga äldre `visionBridge*`-värden till matchande nya nycklar (idempotent, skriver aldrig över ett operatörsinställt `modalityBridge*`-värde); de äldre nycklarna fortsätter att accepteras som läsfallback under en releasecykel.

#### Transparensheader + statistik

Describe-transformerade svar bär `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (byggs av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts`, stämplas av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`). Omdirigerade begäranden får **ingen** header — payloaden var orörd och modellbytet syns redan i svarskroppens `model`-fält.

`GET /api/modality-bridge/stats` (management-autentisering, samma nivå som `GET /api/settings`) returnerar de minnesbaserade räknarna per modalitet `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` för `vision`, `audio` och `video`. `averageLatencyMs` använder `latencySamples`, inte alla försök, som nämnare; en operation utan tidsmätning hittar inte på ett mätvärde på noll millisekunder. `bridged` förblir det bakåtkompatibla aliaset för lyckade konverteringar; misslyckade försök räknar inte upp det. Räknarna nollställs vid omstart av processen enligt design (telemetri, inte bokföring).

#### Konfiguration i instrumentpanelen

Den dedikerade instrumentpanelssidan är `/dashboard/settings/modality-bridge`. Dess URL-adresserbara flikar `Vision`, `Audio` och `Video` bevarar query-parametrar när värdet för `tab` byts. Fliken Vision visar aktivering, läge, modellval (inklusive det automatiska standardvalet), uppgiftsmedveten prompting, avancerade gränser för timeout/bild/beskrivningslängd/cache, körtidsräknare och en skyddad exempelbegäran. Fliken Audio är också aktiv: den visar aktivering, en modellväljare endast för STT med Auto, gränser för timeout/maximal klipplängd, ljudräknare och ett exempeltest med `input_audio`. Fliken Video är funktionell: den rapporterar körtidstillståndet för FFmpeg/ffprobe — ett av fyra uttryckliga UI-tillstånd (`unknown` medan proben pågår eller inte kunde slutföras, `restricted` på en instrumentpanelsvärd som inte är loopback, där proben hoppas över på klientsidan, `unavailable` när den har probats och bekräftats saknas, eller `available` med versionerna för FFmpeg/ffprobe) — sparar gränser för aktivering/modell/frame/video/timeout, filtrerar modellväljaren till visionskapabla modeller och visar videoräknare.

Det tidigare Vision Bridge-kortet under AI-inställningar är en kompatibilitetslänk till den nya sidan; det har inte längre en andra kopia av formuläret. Media Providers länkar också Image-to-Text- och Speech-to-Text-arbetsflöden till motsvarande flikar i Modality Bridge utan att ta bort den befintliga Speech-to-Text-playgrounden.

**Admission-bypass för self-loop:** när describe-anropet dirigeras genom OmniRoutes egen `/v1`-self-loop (leverantörsmodell som inte är standard) skickar underbegäran `x-omniroute-admission-bypass: internal` och autentiseras med den upplösta self-loop-autentiseringsuppgiften — det lokala sentinelvärdet `sk_omniroute` i lokalt läge, eller den operatörskonfigurerade miljönyckeln `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350) så att distributioner med `REQUIRE_API_KEY=true` fortfarande kan köra describe-anropet. Bypassen respekteras endast för just dessa autentiseringsuppgifter, så externa klienter kan inte använda headern för att hoppa över admission.

Äldre standardvärden finns i `src/shared/constants/visionBridgeDefaults.ts`; de nya standardvärdena för läge/uppgiftsmedvetenhet/cache och inställningsupplösaren finns i `src/shared/constants/modalityBridgeDefaults.ts`. Guardrail exponerar ett konstruktörsalternativ `deps` så att tester kan injicera falska implementationer av `getSettings` och `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fångar upp chattbegäranden som innehåller ljud innan de når ett mål som inte är känt för att acceptera ljudindata. Den dirigerar aldrig om chattbegäran: ljuddelar transkriberas via den befintliga OpenAI-kompatibla multipart-endpointen och den valda chattmodellen fortsätter med texttranskriptioner.

Flöde:

1. Bestäm `supportsAudio` via `getResolvedModelCapabilities()`. Explicit metadata från providerregistret vinner, därefter statisk modellmetadata, sedan synkad `modalities_input`. En deklarerad indatalista utan `audio` är `false`; utan kapabilitetsbevis förblir värdet `null`. Både `false` och `null` aktiverar den konservativa bryggan, medan `true` förbigår den.
2. Lös upp inställningarna `modalityBridgeAudio*` och extrahera skarvbara ljuddelar på toppnivå från varje meddelande genom den delade detektorn `detectMediaParts()`. Stödda wire-format är OpenAI `input_audio`, `audio_url` och `source.media_type: "audio/*"`. Nästlat ljud detekteras för routning men avlägsnas inte av skarvningsvägen. Arbetet begränsas av `modalityBridgeAudioMaxClips`; senare delar lämnas orörda.
3. Respektera ett konfigurerat `provider/model`, eller låt `selectAudioBridgeModel()` gå igenom `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogordning och välja den första modellen med en användbar aktiv leverantörsautentiseringsuppgift.
4. `callAudioTranscription()` konverterar base64/data-URI-ljud till en multipart-`file`, eller laddar ner en fjärr-`audio_url` genom den endast-offentliga utgående vakten med DNS-pinning och en gräns på 25 MB. Den POSTar sedan filen och vald modell till den lokala självloopen `/v1/audio/transcriptions`, autentiserad med `resolveSelfLoopBearer()`. Den befintliga transkriptionsrouten utför normal uppslagning av autentiseringsuppgifter, hantering av nedkylning/ratbegränsning och leverantörsutskick.
5. Lyckade anrop ersätter sina delar med `[Audio N]: <transcript>`. Anropen körs med `Promise.allSettled`: ett enskilt fel bevarar den ursprungliga ljuddelen (#4012-kontraktet). Om varje anrop misslyckas och målet är bevisat `supportsAudio === false`, blir delarna `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontraktet). För ett okänt mål (`null`) lämnas ett resultat där allt misslyckats orört. Ett bevisat text-only-mål utan användbar STT-autentiseringsuppgift får samma explicita stubb utan att göra ett nätverksanrop.

Lyckade transkript använder Modality Bridge-cachen (LRU/TTL) för hela processen. Nyckeln kombinerar ljudreferensen, den stabila åtgärdsbeteckningen `audio-transcription` och den valda STT-modellen; misslyckanden cachas aldrig. Ljudförsök uppdaterar de delade räknarna `bridged`, `cacheHits`, `failures` och `lastUsedAt`. Transformerade svar bär `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; orörda förfrågningar får inget Audio Bridge-segment.

Körningsinställningar lagras i databasen och Zod-valideras:

| Nyckel                        | Standard | Intervall         |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den delade cachen styrs fortfarande av `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` och `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fångar upp videodelar på toppnivå i Chat Completions `messages` och Responses API `input` innan ett mål utan känt inbyggt videostöd anropas. Format som stöds är `input_video`, `video_url`, `video_source`, HTTPS-URL:er och data-URI:er av typen `data:video/*;base64,...`. Vanliga filnamn i text behandlas inte som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ansvarar för genomgång av förfrågan, kapabilitets-/policykontrollen, aggregering per förfrågan och svarets nyttolast. Arbete per video — hämtning, cachen för hela resultatet, beskrivning av en bildsekvens (som sammanfogar eventuell anropardeklarerad ljudtranskription) samt mätvärden/avbrytande/städning per försök — är dolt bakom `processVideoPart` i `videoBridgePipeline.ts`, som anropas en gång per videodel inuti `preCall`s loop. Den modulen definierar också de explicita portgränserna `VideoMediaBrokerPort` (hämta byte och extrahera samplade bildrutor), `VideoAudioTranscriptionPort` (sammanfoga en anropardeklarerad ljudtranskription med de samplade bildtexterna) och `VideoDrilldownPort` (persistensgränsen för bildrute-drilldown; ännu inte inkopplad i `processVideoPart` — idag är det bara den separata routen `/api/modality-bridge/video/drilldown` som skriver drilldown-poster).

Den publika `/v1`-förfrågningsvägen importerar eller anropar aldrig en underprocess. Fjärrvideor laddas ner med en gräns på 50 MiB; inlinade base64-videor har en konservativ gräns på 36 MiB dekoderat per video så att kuvertet för modell/meddelanden/inramning kan förbli inom den publika JSON-förfrågans tillåtna gräns på 50 MiB. Uppskattningar av inlinelängd och dekoderad storlek kontrolleras före allokering. HTTPS krävs för den initiala fjärr-URL:en och varje omdirigering, med hjälp av den befintliga endast-offentliga utgående vakten med DNS-pinning. Byten korsar sedan exakt den interna brokergränsen `POST /api/modality-bridge/video/extract`. Den routen är både `LOCAL_ONLY` och `SPAWN_CAPABLE`, accepterar endast en per-process autentiserad förfrågan från betrodd loopback och accepterar aldrig en URL, filsökväg, körbar fil eller argumentlista. API:ets pipeline för brödtextstorlek och hanterarens inkrementella brödtextläsare upprätthåller oberoende av varandra en gräns på 50 MiB för mäklarindata. Dess begränsade kö kör en extrahering i taget, tillåter fyra väntande jobb och begränsar väntande indata till 100 MiB.

Inuti brokern läser `ffprobe` en privat lokal fil; den fasta formatlistan över tillåtna format utesluter spellist- och manifestformat. För tillåtna containrar i MOV-familjen förblir externa MOV-datareferenser inaktiverade som standard, och det fasta kommandot aktiverar dem inte. Både `ffprobe` och `ffmpeg` använder vitlistan med endast `file`-protokollet, en tråd, fasta argumentarrayer, ingen shell och körbara filer som löses upp från `PATH`. Bifogade bild-coverströmmar är inte spelbara kandidater. Alla spelbara strömmar måste uppfylla gränserna, och en explicit standardström föredras framför den deterministiska reservlösningen med lägst index. Videor är begränsade till 600 sekunder, 8,192 pixlar per dimension och 33,554,432 källpixlar. FFmpeg samplar 1–16 JPEG-rutor vid mittpunkter, skalar ned långsidan till högst 1,024 pixlar utan att skala upp mindre indata och tar aldrig emot en URL. Provtagningen är `uniform` som standard. Policyn `scene_aware` (valfri) och den experimentella policyn `segment_aware` utför en ytterligare fast FFmpeg-omgång över den redan validerade lokala strömmen, väljer avgränsade `showinfo`-scensidsstämplar och fallerar deterministiskt tillbaka till samma uniforma mittpunkter vid detektorfel, tidsgräns, felaktig utdata eller en tom kandidatmängd. Segmentmedvetet läge fördelar mittpunktsprover proportionellt mot de validerade scenintervallen; segmentmedvetet underlag och reservbeteende beskrivs närmare nedan. Det hårda taket på 16 rutor tillämpas efter urval i varje policy. När en scenmedveten begäran endast har en budget på en ruta använder den den uniforma mittpunkten för det aktiva helvideo- eller fokusfönstret och rapporterar `policyEffective: uniform`: en enda vald scenruta kan inte bevara båda de tidsmässiga ändarna. En anropare kan valfritt ange ett ändligt fokusfönster (`start`/`end` i sekunder); gränserna kläms till medielängden, omvända eller icke-ändliga fönster avvisas, och alla samplingspolicyer utförs endast inom det normaliserade intervallet. Det resulterande fönstret ingår i samplingsmetadata och i prefixet för den ej betrodda beskrivningen så att nedströmsmodeller kan skilja ett fokuserat utdrag från den fullständiga tidslinjen.

Semantiskt bildtextfokus är en separat, explicit inställning. Standardläget `full` för analys bevarar den befintliga bildruteprompten och vidarebefordrar aldrig begärantext till bildtextsmodellen. I läget `focused` läser bryggan endast den senaste icke-tomma användarskapade `text`/`input_text` från samma Chat- eller Responses-container, normaliserar den till NFC, komprimerar styrtecken och blanksteg och begränsar den till 500 Unicode-kodpunkter. Ett tomt resultat faller tillbaka till den exakta `full`-prompten. En användbar ledtråd serialiseras som JSON i ett dedikerat block för ej betrodd användarkontext och får endast prioritera observerbara detaljer; den kan inte åsidosätta den separata varningen mot att följa instruktioner som är synliga eller hörbara i mediet. Textuellt fokus härleder aldrig `start`/`end` och ändrar inte den temporala samplern.

#### FU-07 strukturellt segmentunderlag

`segment_aware` använder en avgränsad föranalysomgång över den redan validerade lokala videoströmmen. Den fasta filterkedjan skalar först till högst 320 pixlar i bredd, identifierar scenbyten och frysta intervall och samplar sedan vid 1 ruta per sekund för oskärpa, genomsnittlig luma och spatial/temporal information. Omgången är begränsad till 600 strukturella prover, en FFmpeg-/filtertråd, samma `file`-only-protokoll och container-allowlistor, en gräns på 1 MiB processutdata och högst 30 sekunder inom brokerns delade avbrotts-/tidsgräns. Den tar aldrig emot ett kommando, ett filter, en sökväg eller en URL från begäran.

De strukturella värdena är deterministiskt samplingsunderlag, inte semantisk videoförståelse. De härleder inte subjekt, handlingar, bildtexter, tal eller användaravsikt. Scen- och frysgränser bildar segment; frystäckning, oskärpa, exponering, spatial detalj och temporal förändring påverkar endast hur den befintliga budgeten på 1–16 rutor fördelas. Ett helt fryst segment begränsas till en ruta, medan icke-frysta segment konkurrerar om den återstående budgeten. När gränserna är fler än rutorna behålls en uniform tidslinjetäckning så att snabba tidiga klipp inte kan dölja ett långt avslutande segment. Scengränser som ligger inom 1-sekundersupplösningen för en frysgräns slås samman.

Saknade filter, felaktigt/tomt underlag, ett detektorfel eller tidsgränsen för den avgränsade föranalysen fallerar öppet till den exakta policyn med uniforma mittpunkter. Ett avbrott från anroparen eller brokerns tidsgräns fallerar inte öppet: det avslutar delprocessen som pågår, förhindrar senare rutextrahering, och den privata temporära trädstrukturen tas bort i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererar deterministiska riktiga FFmpeg-fixtures för besparingar i bildtextsanrop efter deduplicering, budgetfördelning för tät rörelse, oskärpe-/exponerings-/SI-TI-underlag, snabba klipp med en lång svans och falska positiver vid gradvisa toningar. Den registrerar väggklockstid för föranalysen och, där `/usr/bin/time` är tillgängligt, barnprocessens CPU och högsta RSS. Dess kvalitetskontroller är endast strukturella orakel. Verklig bildtextsmodellkvalitet förblir `HOLD` eftersom denna testrigg saknar en auktoriserad slutpunkt eller en fryst bedömare. Monetära besparingar förblir också `HOLD` om inte `--caption-cost-per-call-usd` anger en explicit positiv uppskattning per anrop; skriptet hittar aldrig på något av resultaten.

Varje bildruta är begränsad till 4 MiB, alla råa bildrutor tillsammans till 23 MiB och det serialiserade brokersvaret till 32 MiB. En privat temporär katalog tas bort i `finally`. OmniRoute inkluderar inte FFmpeg och accepterar inte en anpassad sökväg till den körbara filen. Före textningen tillämpar bryggan en konservativ visuell deduplicering: varje JPEG reduceras till en 16×16-gråskalebuffert och jämförs endast med den senast behållna bildrutan. För en begärd textningsbudget på mer än en bildruta tillhandahåller extraheringen en begränsad pool av kandidater på upp till dubbla budgeten och aldrig fler än 16 bildrutor. Det begärda taket tillämpas först efter dedupliceringen, och den första och sista valda kandidaten bevaras under den slutliga gallringen när budgeten är minst två. Den versionshanterade policyn `grayscale-16x16-mean-cells-v2` använder det större värdet av förändringen i genomsnittlig luminans och andelen miniatyrceller vars normaliserade förändring är minst 0,05. Tröskelvärdet för dubbletter är konstanten 0,04, vald för förutsägbarhet snarare än exponerad som en körningsinställning. Denna sekundära högkontrastsignal bevarar små rörelser och förändringar i synlig text som en jämförelse enbart baserad på medelvärden kan dölja. Fel i jämförelsefunktionen eller avkodaren hanteras tillåtande så att täckningen bibehålls. Metadata i utdata skiljer mellan extraherade kandidater, bildrutor som använts med framgång och borttagna visuella dubbletter.

En uttryckligen markerad videodel kan begära en tidsstämplad kontaktkarta. Bryggan skapar ett JPEG-rutnät med högst 4 kolumner och 16 bildrutor. Varje cell på 512 bildpunkter bränner in källans tidsstämpel i ett bottenfält med hög kontrast, samtidigt som samma tidsstämplar finns kvar i textmetadata för efterföljande koppling och granskning. Den fullständiga JPEG-filen är fortfarande begränsad till 32 MiB. Om `sharp` inte kan avkoda eller sammanställa rutnätet återgår bryggan till de enskilda JPEG-bildrutorna; ett klientavbrott vidarebefordras fortfarande genom kontaktkarteåtgärden.

Underlag för produktionssättning hålls avsiktligt åtskilt från det syntetiska mikroriktmärket för sammanställning. `scripts/perf/video-bridge-contact-sheet-eval.ts` definierar ett schemaversionshanterat A/B-ramverk för verkliga OpenAI-kompatibla visionsmodeller. Det mäter leverantörsrapporterade tokens, total väggklockstid (inklusive sammanställning av kontaktkartan), antal modellanrop och bibehållande av fakta enligt manifestet. Råa modellsvar skrivs inte till rapporten; endast SHA-256-kondensat och ID:n för matchade fakta sparas. Ramverket gör inga nätverksanrop eller anrop till avgiftsbelagda modeller om inte `--execute-real` anges och `--model`, `OMNIROUTE_BASE_URL` samt `OMNIROUTE_API_KEY` har konfigurerats. Utan denna uttryckliga verkliga körning förblir dess maskinläsbara utlåtande `HOLD`; enbart syntetiska mätningar av nyttolast och antal anrop utgör inget underlag för produktionssättning.

Anropare kan bifoga en valfri `transcript.cues`-matris till en videodel som stöds när de redan har synkroniserad text. Varje segment måste innehålla `text`, ett ändligt `start`/`end`-intervall inom den identifierade varaktigheten och en vitlistad `source` (`client`, `embedded` eller `audio-bridge`); `confidence` har standardvärdet `1` och måste ligga mellan `0` och `1`. Exakt duplicerade segment slås samman. OmniRoute startar aldrig transkribering från dessa metadata: validerade segment kopieras till det beskrivna resultatet med källa, konfidens och intervall och återges som ej betrodda observationer tillsammans med bildrutetexterna. Ogiltig text, text utanför intervallet eller text utan härkomstinformation avvisas i stället för att blandas in i textningsflödet. Båda transkriptionskanalerna i begärans innehåll normaliserar angiven härkomst till `client`, inklusive självangivna etiketter som `embedded` eller `audio-bridge`. Endast en serverägd adapter kan tilldela dessa betrodda etiketter via det kodexklusiva argumentet `trustedSource`; ett JSON-fält i en begäran kan inte nå detta argument. Transkriptionstext förblir ej betrott innehåll som härletts från medier, oavsett dess härkomst, och får aldrig avgöra auktorisering.

En avancerad anropare kan tillhandahålla ett `audioTranscript`-spår för samma video; det behandlas som text från klienten, inte som bevis på serverutförd transkribering. Sammanslagningspunkten kör visuella observationer och ljudobservationer under en gemensam tidsfrist och avbrottssignal, ordnar dem på en gemensam tidslinje, slår samman exakta dubbletter och rapporterar ett partiellt resultat när endast den ena sidan lyckas. Ett ogiltigt `audioTranscript` leder till detta partiella resultat – den visuella beskrivningen behålls och ljudgrenen registrerar en sanerad felkod – i stället för att hela videon misslyckas. Tillgänglighet per gren, flaggan för partiellt resultat och de sanerade felkoderna bevaras i det beskrivna resultatet, i skyddsräckesmetadata (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), i resultatcachemetadata och i bryggans sammanslagningsräknare. Standardsökvägen för Video Bridge anropar inte tal-till-text och hämtar inte en andra kopia av mediet; utan detta uttryckliga spår förblir den endast videobaserad.

**Kvarhållning av transkript (#12150 P1).** Detta tillämpas automatiskt närhelst Video Bridge (som själv är opt-in) renderar en transkriptcue – det finns ingen separat kvarhållningsflagga. När en förfrågan renderar någon transkriptcue (en av anroparen deklarerad `transcript` eller en sammanfogad `audioTranscript`) markerar skyddsrälsen den som `videoBridgeObserved` och producerar en maskerad skugga av videobeskrivningen – en identisk rendering där varje cues fritextinnehåll ersätts med `[redacted-video-transcript]`, byggd genom att ersätta det strukturerade cue-fältet innan strängen sätts samman (aldrig genom att tolka den tillplattade texten, så inget cue-innehåll – adversariellt eller vanligt, inklusive innehåll som innehåller `]` såsom `[inaudible]`/`[music]` – kan överleva). Den kvarhållna förfrågningsbody:n i anropsloggen byter ut varje videohärledd textdel mot denna maskerade skugga, matchad genom innehållsekvivalens; `fullText`-ankaret läses om från den färdigställda nyttolasten från skyddsrälsen före anropet, så matchningen lyckas fortfarande efter att senare kedjade skyddsrälsar (PII- och autentiseringsuppgiftsmaskerarna, prioriteringar 10/95) har skrivit om beskrivningstexten på plats och efter att injektion av systemprompt/överlämning/minne har format om meddelandematrisen. Den body som skickas uppströms till modellen är oförändrad. En observerad förfrågan fyller inte heller något beständigt minne (extrahering som härleds både från förfrågan och från svaret hoppas över), så modellens eget svar kan inte eka transkripttext till minnet.

**Råa videofält (#12430).** När bryggan är aktiverad och inbyggt videostöd är okänt eller saknas, aktiverar definierade `transcript`/`audioTranscript`-fält även `videoBridgeObserved`, även efter beskrivningsfel eller en `maxVideos`-gräns. `null` och tomma strängar räknas; saknade fält och icke-videometadata räknas inte. Kvarhållna kopior maskerar dessa fält eller utelämnar förfrågan, och cacheminnen/minne kringgås.

På dessa reservvägar blir giltiga cues från anroparen `text`/`input_text`-delar som stöds i stället för icke-standardiserade leverantörsfält. Båda spåren som tillhandahålls i förfrågan förblir opålitliga `client`-observationer, med en explicit varning om att videon inte beskrevs och att tidsstämplar inte verifierades mot mediet. De befintliga totala och per-cue-budgetarna på 256 cues/64 KiB gäller för de två spåren tillsammans; tidsstämplar måste rymmas inom brokerns tak på 600 sekunder och eventuellt angivet fokusfönster. Ogiltiga spår kasseras och vidarebefordras inte som godtycklig text; ett giltigt syskonspår kan fortfarande användas om deras kombinerade budget inte överskrids. Null-/tomma fält lägger inte till någon text. Denna reservväg lägger inte till någon mediehämtning eller transkription. Tilläggsfält för transkript tas bort från reservvideobäraren och dess `video_url`/`source`-objekt. OpenAI-wire-allowlistan förblir strikt; videobärare med okänt inbyggt stöd är fortfarande tillgängliga och kända text-only-mål behåller säkra markörer. Strukturerade maskeringsskuggor skyddar den tillagda transkripttexten, medan den ursprungliga anroparens förfrågan förblir oförändrad. Mål med inbyggt stöd och inaktiverade bryggor behåller sitt befintliga kringgåendebeteende.

Ytterligare kvarhållna kopior använder samma signal för observerad förfrågan. Den råa ögonblicksbilden av klientförfrågan före skyddsrälsen, den väntande förfrågan i minnet och loggen över tidigt avvisade förfrågningar ersätter strukturellt transkriptfält i videodelar; strängprompter som syntetiseras av pipelinesteg och kontextöverlämning maskeras vid sinken för kvarhållen förfrågningsbody. Den kvarhållna markören `video_content_removed` gör att fortsättning med `previous_response_id` misslyckas stängt i stället för att rekonstruera text som avsiktligt kasserats. Om en observerad förfrågan förlorar sin maskeringsskugga per del före loggning, eller om ens en av flera videoskuggor inte matchar efter senare förfrågningsmutationer, utelämnas den kvarhållna förfrågningsbody:n helt i stället för att en delvis maskerad transkripttext kvarhålls.

För en observerad förfrågan kan ett modellsvar citera vilken del som helst av transkriptet utan en strukturerad cue-gräns. Dess kvarhållna `responseBody` i anropsloggen ersätts därför med en utelämningsmarkör; den detaljerade pipeline-artefakten (som kan innehålla uppströms-/klient-body:n och strömchunkar) kvarhålls inte. Cacheminnen för semantik, idempotens och reasoning-replay kringgår läsningar och skrivningar för den förfrågan. Leverantörsförfrågan och svaret som är synligt för klienten förblir oförändrade. Tidiga keepalive-byte töms från den tillfälliga bufferten när den detaljerade artefakten utelämnas. Kiros varning för felaktig EventStream rapporterar endast nyttolastens byteantal, aldrig dess innehåll eller JSON-tolkens råa fel.
Detta gör inte anspråk på att varje orelaterad leverantörs-/plugin-diagnostik har granskats; den bredare genomgången av kvarhållna sinks spåras i #11658.

Livscykeln för den interna `/api/modality-bridge/video/drilldown` är ett separat cachesubstrat som autentiseras via loopback/token. Varje åtgärd kräver även ett kanoniskt, ogenomskinligt principal-ID. Innan en produktionsanropare aktiveras måste den härleda detta ID från den autentiserade tenanten och får aldrig vidarebefordra ett klientvalt värde. Cache-nycklar binder denna principal till kanoniska sessions- och videoreferens-ID:n, lagrar endast deras SHA-256-härledda nycklar och begränsar både läsningar och borttagning till samma principal. Cachen lagrar högst 16 härledda JPEG-bildrutor per post, låter dem gå ut efter tio minuter och stöder avgränsade `start`/`end`-läsningar eller explicit borttagning av session.

Varje principal är begränsad till 16 poster och 64 MiB kanonisk JPEG-data. Dessa gränser är oberoende av det globala taket på 64 poster/256 MiB: kvottryck för en principal vräker endast ut den principalens minst nyligen använda poster innan global LRU-utvägling övervägs. Utgångna poster rensas från både principal- och global redovisning vid cacheaktivitet, medan avbrott och valideringsfel inte genomför en partiell ersättning.

Cachen avvisar icke-kanonisk Base64, överflödig utfyllnad, media som inte är JPEG, felaktiga eller trunkerade JPEG-filer samt JPEG-filer som ger en varning under en avgränsad fullständig `sharp`-avkodning. Den kodar om varje accepterad bild som en kanonisk JPEG, härleder bredd och höjd från de avkodade byten i stället för att lita på anroparens fält, och kastar eventuella efterföljande polyglot-byten i stället för att behålla dem. Endast den avgränsade kanoniska komprimerade bufferten belastar båda kvoterna. JSON-gränsen för överföringen inkluderar Base64-overhead för taket på 32 MiB avkodad indata. Varje lagrad härledning registrerar sitt validerade JPEG-format/upplösning, samplingspolicy, härledningsversion, skapandetid, serverberäknad innehållshash och hashade föräldrareferens plus den betrodda anroparens föräldrainnehållshash. Avbrytning kontrolleras mellan asynkrona avkodnings-/hashfaser före den atomiska commiten till cachen.

Denna etapp ansluter ännu inte en produktionsproducent till rutten och tillhandahåller inte val av varianter med flera upplösningar. Den transparenta begäransvägen för Video Bridge medför därför inget extra arbete, medan tenantbunden principalhärledning och den fullständiga livscykeln för flera upplösningar i FU-08 kvarstår som uttryckligt uppföljningsarbete i stället för att dokumenteras som fullständigt beteende.

Bildrutor förses med bildtext sekventiellt med den konfigurerade Video-modellen. En tom Video-överstyrning ärver Vision-inställningen; om båda är tomma väljer Vision-autoroutern den effektiva visionskapabla modellen. Lyckade bildtexter ersätter den ursprungliga delen med ett stabilt `[Video description:`-prefix som också markerar texten som en icke betrodd mediehärledd observation och säger till nedströmsmodeller att inte följa instruktioner som finns i mediet. Cachenycklar för bildrutebildtexter innehåller JPEG-byten, prompten, tidsstämpeln och den effektiva modellen; endast lyckade bildtexter cachas. Cacheposter behåller den faktiska lyckade producentmodellen, inklusive en reservmodell; bryggan rapporterar `mixed` när olika bildrutor producerades av olika modeller. En cacheträff återanvänder den producentidentiteten i stället för att märka om den som den begärda routningsplanen. Resultatcachen för hela videon nycklas på varje indata som ändrar utdata — prompt, effektiv modell, samplingspolicy, antal bildrutor, semantiskt analysläge, SHA-256-fingeravtrycket för den normaliserade fokushinten, fokusfönstret, `transcript`, `audioTranscript` och flaggan för kontaktark — så en ändring av någon av dessa dimensioner är en cachemiss, aldrig en återanvändning av inaktuella data. Versionen av policyn för visuell deduplicering, tröskelvärdet och det avgränsade antalet kandidatbildrutor är också uttryckliga i resultatcachenyckeln och metadata; en policyändring kan därför inte återanvända en inaktuell beskrivning av hela videon. Metadata för resultatcache v4 behåller läget och fingeravtrycket, aldrig den råa användaruppgiften. Guardrail-metadata rapporterar både det begärda och det effektiva analysläget; ett begärt `focused`-läge utan användbar användartext rapporteras som effektivt `full`.

Guardrail extraherar varje videodel som stöds men beskriver högst `modalityBridgeVideoMaxVideos`. För ett mål som bevisligen har `supportsVideo === false` blir misslyckade videor och videor över gränsen uttryckliga säkra textmarkörer så att ingen rå video överlever. När kapabiliteten är okänd behåller dessa delar sin videobärare; eventuell reservtranskription följer den avgränsade textkonverteringen ovan. Mål med `supportsVideo === true` kringgår bryggan. Klientbegärans avbrytarsignal fortplantar sig genom nedladdning, broker-kö, underprocesser och bildtextsanrop; avbrott stoppar mellan videor och släpper aldrig igenom rå media vid fel.

Körtidsinställningarna är databasbaserade och Zod-validerade:

| Nyckel                              | Standard    | Intervall / beteende                                                                                            |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valfri körtid, opt-in                                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarar generiska bildtexter; `focused` använder avgränsad, icke betrodd kontext från senaste användaren |
| `modalityBridgeVideoModel`          | `""`        | Ärv Vision Bridge-modellen                                                                                      |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` eller proportionell `segment_aware`; detektorfel faller tillbaka till `uniform`        |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                  |

Äldre sparade timeoutvärden för Video över 120 sekunder begränsas till broker-deadlinen; nya inställningsskrivningar över den gränsen avvisas. `GET /api/modality-bridge/video/runtime` kräver betrodd stämplad loopback-lokalitet före autentisering eller körtidsavsökning och kräver därefter hanteringsautentisering. Den returnerar endast `available`, sanerade FFmpeg-/ffprobe-versioner och en fast orsak när körtiden är otillgänglig. Den interna extraheringsändpunkten är inte ett offentligt uppladdnings-API: kömetning returnerar `503` plus `Retry-After`, en anropares frånkoppling returnerar `499`, och den fasta broker-deadlinen returnerar `504`. Konverterade svar lägger till `video->text;model=<visionModel>;parts=<videos>` i den centrala headern `x-omniroute-modality-bridge` utan att ta bort Vision- eller Audio-segment.

### PII-maskerare (`piiMasker.ts`)

Körs i **båda** stegen.

- **`preCall`** klonar nyttolasten, går igenom `system`, `messages`, `input` och
  `prompt` (inklusive objekt som är vanliga strängar) och tillämpar `processPII()` (från
  `@/shared/utils/inputSanitizer`) på strängfälten `content`/`text`. När
  `PII_REDACTION_ENABLED=true` maskeras identifierade personuppgifter i den utgående
  nyttolasten. Detta är oberoende av `INPUT_SANITIZER_MODE` (som endast styr
  policyn för promptinjektion). När maskering är avstängd registrerar anropet antalet
  identifieringar utan att skriva om innehållet.
- **`postCall`** djupklonar svaret och kör `sanitizePIIResponse()` samt
  maskeringen för Responses API-formatet (`maskResponsesOutput` — omfattar
  `output_text` och `output[].content[].text`). Om någon maskering sker ersätter
  det ändrade svaret originalet.

Skyddet blockerar aldrig; det lägger endast till annoteringar (`meta.detections`,
`meta.redacted`) eller skriver om innehåll.

#### Val per typ, anpassade mönster och identifieringsräknare

**Dashboard → Settings → Security → PII masking** avgör _vad_ som maskeras. Det
aktiverar inte maskering: det görs fortfarande av `PII_REDACTION_ENABLED` (begäran) och
`PII_RESPONSE_SANITIZATION` (svar + SSE), som båda är avstängda som standard.

- **Val per typ** — de inbyggda ID:na listas i
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Om värdet inte är angivet
  används alla typer (beteendet innan den här inställningen fanns). Begärandemotorns
  `ssn_us`-mönster mappas till `ssn`. Mallar (Minimal, Standard, Financial,
  Brazilian, USA, Full) fyller endast i kryssrutorna i användargränssnittet.
- **Anpassade mönster** — upp till 20 reguljära uttryck eller jokerteckenmönster (`*` = upp till 64
  tecken som inte är blanksteg, `?` = ett tecken). Träffar blir `[CUSTOM_REDACTED]`.
  Varje mönster går igenom `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): högst 500 tecken, flaggor begränsade
  till `g i m s u`, måste kunna kompileras, måste klara `safe-regex` (katastrofal
  backtracking) och får inte matcha en tom sträng eller en platshållare för maskering.
  Ett mönster som inte godkänns avvisas både när det sparas och när det testas, och en lagrad rad
  som inte godkänns hoppas över under körning i stället för att kompileras. Anpassade mönster körs endast
  medan maskering är aktiverad.
- **Identifieringsräknare** — antal per typ (aldrig de matchade värdena), som lagras i
  minnet och nollställs vid omstart (`src/lib/pii/piiDetectionStats.ts`). De
  ökar endast medan maskering är aktiverad.

Inställningarna lagras i tabellen `key_value` (namnrymd `pii_settings`,
`src/lib/db/piiSettings.ts`) och läses via en cache på 1 s. API:

| Metod  | Sökväg                   | Syfte                                                                |
| ------ | ------------------------ | -------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Flaggstatus, `enabledTypes`, `customPatterns`, identifieringsräknare |
| `PUT`  | `/api/settings/pii`      | Ersätt `enabledTypes` (`null` = alla) och/eller `customPatterns`     |
| `POST` | `/api/settings/pii/test` | Provkör ett mönster mot ett exempel på högst 8 KB; ingenting lagras  |

Alla tre kräver administrationsautentisering och validerar innehållet med Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Promptinjektion (`promptInjection.ts`)

Identifierar fientliga strukturer i innehåll som användaren tillhandahåller och tillämpar den
konfigurerade policyn. Beteendet styrs av miljövariabler och konstruktoralternativ:

| Inställning        | Miljövariabel                                                                                               | Standardvärde | Effekt                                                                                                                                                                                                        |
| ------------------ | ----------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiverad          | `INPUT_SANITIZER_ENABLED`                                                                                   | `true`        | När värdet är `false` avslutas skyddet omedelbart.                                                                                                                                                            |
| Läge               | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                             | `warn`        | Injektionspolicy: `block`, `warn` eller `log`. (`redact` accepteras för bakåtkompatibilitet men tar **inte** bort injektionstext; omskrivning av personuppgifter i begäran styrs av `PII_REDACTION_ENABLED`.) |
| Blockeringströskel | alternativet `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`        | Lägsta allvarlighetsgrad som krävs för blockering. Medelhög är endast observerande som standard.                                                                                                              |

**Lägesprioritet** (`getMode`): anroparens `options.mode` →
**åsidosättning via DB-funktionsflaggan** `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → miljövariabeln `INJECTION_GUARD_MODE` → miljövariabeln `INPUT_SANITIZER_MODE` →
`warn`. En åsidosättning via kontrollpanelen har därför företräde framför miljövariablerna, så användargränssnittet
för funktionsflaggor styr det aktiva skyddet direkt (utan omstart). DB-läsningen är felsäker:
om den misslyckas återgår skyddet till det miljövariabelbaserade beteendet, och när ingen
åsidosättning har angetts är beteendet identiskt med en lösning som enbart använder miljövariabler.

Identifieringskällor:

1. `sanitizeRequest()` från `@/shared/utils/inputSanitizer` (gemensam uppsättning identifierare
   som används på andra ställen i pipelinen).
2. Inbyggda `DEFAULT_GUARD_PATTERNS` (för närvarande `system_override_inline` och
   `markdown_system_block`, båda med allvarlighetsgraden `high`).
3. Valfria `customPatterns` som skickas via konstruktoralternativ (strängar, reguljära uttryck
   eller poster av typen `{ name, pattern, severity }`).

När `mode === "block"` **och** minst en detektering uppfyller allvarlighetsgradströskeln returnerar `preCall` `{ block: true, message: "Request rejected: suspicious content detected" }`. I lägena `warn`/`log` loggar skyddsräcket men tillåter anropet. Den delade hjälpfunktionen `evaluatePromptInjection()` exporteras också för anropare som behöver utvärdera prompts utan att gå via registret.

**Skanningsgräns (v3.8.20):** detektorn inspekterar endast de **första 16 KB** av sammanfogad prompttext – `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i `src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` och `evaluatePromptInjection()` utför `slice(0, MAX_INJECTION_SCAN_BYTES)` innan mönsterloopen körs. Injektionsdirektiv ligger nära början av en indata, så detta begränsar regex-CPU/GC för nyttolaster på flera hundra KB utan att försvaga detekteringen (jfr. #3932, #4041).

### Credential Masker (`credentialMasker.ts`)

Körs i **båda** stegen, sist i standardkedjan (prioritet `95`). Maskerar välkända mönster för API-nycklar/hemliga token i den utgående nyttolasten (meddelandeinnehåll, argument för verktygsanrop, verktygsresultat) **och** leverantörens svar, så att en referens som klistrats in i en prompt (eller ekoats tillbaka av ett verktygsresultat) inte läcker till den uppströms leverantören eller tillbaka till klienten.

- **Endast opt-in**, samma konvention som PII-maskering (angränsande till Hard Rule #20): inaktiverad om inte `settings.credentialRedactionEnabled === true` **eller** `CREDENTIAL_REDACTION_ENABLED=true`. När den är av är skyddsräcket en no-op – det blockerar aldrig och skriver aldrig om.
- `redactCredentials()` går igenom hela trädet för nyttolast/svar (`walkValue()`, säker mot prototypförorening, cykelsäker via `WeakSet`) och ersätter matchningar med en platshållare `[REDACTED:<type>]`, och klonar endast de grenar som faktiskt ändrades.
- `CREDENTIAL_PATTERNS` täcker nycklar för LLM-leverantörer (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-token (GitHub, Slack, Linear, Notion, npm, Postman, Discord), betalningsnycklar (Stripe, Square), molnnycklar (AWS access key, Twilio, SendGrid, Mailgun), privata nycklar/JWT:er, anslutningssträngar som innehåller referenser (`mongodb://user:pass@...` m.fl.) samt ett generiskt mönster för `Authorization`/`x-api-key`/`api-key`/`apikey`-headervärden. Nycklar i header-form (`authorization`, `x-api-key`, `api-key`, `apikey`) maskeras strukturellt (endast värdet, schemaprefix som `Bearer `/`Basic ` bevaras) i stället för via det generiska textregexet.
- Skyddsräcket blockerar aldrig; det skriver endast om (`modifiedPayload` / `modifiedResponse`) och annoterar (`meta.credentialsRedacted`, `meta.count`).

Regressionsskydd: `tests/unit/credential-masker-guardrail.test.ts`.

## Baskontrakt (`base.ts`)

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
  block?: boolean; // true kortsluter kedjan
  message?: string; // visas vid blockering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneras av preCall för att skriva om förfrågan
  modifiedResponse?: TValue; // returneras av postCall för att skriva om svaret
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

En guardrail signalerar "ingen ändring" genom att returnera antingen `void`, `{}` eller
`{ block: false }`. Att returnera en `modifiedPayload`/`modifiedResponse` ersätter
värdet som flödar genom kedjan för nedströms guardrails.
`signal?: AbortSignal` bär anroparens livscykel in i guardrails. En avbruten förfrågan är det avsiktliga fail-open-undantaget: mediebryggor avbryter arbete och städar upp utan att återställa råmedia till ett mål som man vet inte stöder det.

## Register (`registry.ts`)

Singleton-instansen `guardrailRegistry` exponerar:

- `register(guardrail)` — lägger till (eller ersätter via normaliserat namn) en guardrail och
  sorterar om efter stigande `priority`.
- `clear()` / `list()` — administrativa hjälpfunktioner.
- `runPreCallHooks(payload, context)` — itererar över aktiva guardrails, trär payloaden genom
  `modifiedPayload` och stoppar vid första `block: true`.
- `runPostCallHooks(response, context)` — samma flöde på svarsidan.
- `resetGuardrailsForTests({ registerDefaults })` — rensar tillstånd och registrerar
  eventuellt om standardvärdena för ren testisolering.

Båda runner-funktionerna returnerar `{ blocked, payload|response, results, guardrail?, message? }`
där `results` är en array av `GuardrailExecutionResult`-poster som innehåller
fälten `blocked`, `skipped`, `modified`, `error` och `meta` per guardrail,
användbara för spårning.

### Inaktivera guardrails per förfrågan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` sammanställer en
dubblettfri lista med guardrailnamn som ska hoppas över för den aktuella
förfrågan. Det finns fem kanaler, som läses i denna ordning och slås samman till en lista
(första förekomsten vinner vid borttagning av dubbletter):

1. `apiKeyInfo.disabledGuardrails`
2. Förfrågningsbody `disabledGuardrails` (på översta nivån)
3. Förfrågningsbody `metadata.disabledGuardrails` (endast när `metadata` är ett objekt)
4. Header `x-omniroute-disabled-guardrails`
5. Äldre header `x-disabled-guardrails`

Alla fem kanaler slås samman, inklusive de båda headrarna: att skicka både
`x-omniroute-disabled-guardrails` och `x-disabled-guardrails` hoppar över unionen av
deras listor, och en tom modern header döljer inte längre den äldre
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), åtgärdat i
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Värden får vara arrayer av strängar eller en kommaseparerad sträng; namn trimmas
och normaliseras till gemener i kebab-case (`pii_masker` → `pii-masker`), och tomma
poster tas bort. Resultatet skickas via `context.disabledGuardrails`
till registret, som hoppar över matchande guardrails (`skipped: true` i `results`).

Inaktiveringslistan påverkar endast **registret**. Prompt-injection `block`-läge är
en obligatorisk gräns: injection-guard-middlewaren
(`src/middleware/promptInjectionGuard.ts`) anropar `evaluatePromptInjection()`
utan någon anroparkontrollerad inaktiveringslista (det döda
`resolveDisabledGuardrails({ body })`-anropet som den tidigare gjorde togs bort i
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), så en förfrågan
som inaktiverar `prompt-injection` avvisas fortfarande i `block`-läge. Detta är
avsiktligt. Inaktiveringskanalerna styrs av anroparen (förfrågningsbody,
metadata, headers), och en anropare får inte kunna stänga av en säkerhetskontroll
som operatören har angett
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Header-unionen
från [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ändrar endast vilka guardrails i registret som hoppas över; den låter inte en klient
kringgå middlewaren. Obligatoriska guardrail-principer per nyckel och per grupp
spåras i v4-RFC:n [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Se [Täckning och begränsningar](#coverage-and-limits).

## Körningsordning

För varje förfrågan som passerar genom `src/sse/handlers/chat.ts` och
`open-sse/handlers/chatCore.ts` (chattfamiljens rutter som listas under
[Täckning och begränsningar](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` bygger överhoppningslistan från API-nyckel, body
   och headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kör guardrails i stigande
   prioritetsordning:
   - Inaktiverade guardrails registreras som `skipped`.
   - För varje guardrail kan `preCall` skriva om nyttolasten via `modifiedPayload`.
   - Det första `block: true` kortsluter kedjan och hanteraren returnerar
     ett guardrail-avvisningssvar.
3. Den (potentiellt omskrivna) nyttolasten flödar in i combo-routning och
   upstream-dispatch.
4. **Endast icke-strömmande:** efter att svaret har satts ihop kör
   `guardrailRegistry.runPostCallHooks(...)` samma kedja på svaret. `block: true`
   här förkastar svaret från uppströmmen och returnerar HTTP 400. Strömmade svar
   hoppar helt över detta steg.

Guardrails som kastar fel registreras med `error: <message>` och loggas via
`logger.warn`, men kedjan fortsätter – fail-open enligt design.

## Täckning och begränsningar

Guardrail-registret är endast inkopplat i chatt-pipelinen. Dessa begränsningar
låses fast av `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` och
`tests/unit/guardrail-pipeline-characterization.test.ts`; uppdatera dessa tester
medvetet när beteendet ändras.

### Var hookarna körs

| Hook / kontroll                    | Körs på                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                  | Förfrågningar som hanteras av `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (och `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` och Telegram-chattproxyn. Även teständpunkten för instrumentpanelen `/api/guardrails/test`. Ett pre-call-block returnerar HTTP 400. |
| `runPostCallHooks`                 | **Endast icke-strömmande** chatt-svar (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Strömmade svar når den aldrig.                                                                                                                                                                                                                                                                                                                      |
| Strömmande PII                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), kopplas in i `streamingPipeline.ts` när `PII_RESPONSE_SANITIZATION` är på. Det är inte en guardrail, så inaktiveringskanalerna påverkar den inte.                                                                                                                                                                                                                                   |
| Injection-guard-middleware (äldre) | Varje promptbärande `/v1`-rutt, inklusive chattfamiljen (se [ruttäckning](#injection-guard-route-coverage--red-team-phase-8--block-d)). Endast prompt-injektion.                                                                                                                                                                                                                                                                                  |

### Vad som inte täcks

- **Medie-, embeddings- och datarutter** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) når aldrig registret. Ingen
  PII-maskering, credential-maskering eller modalitetsbrygga körs där. Deras enda
  kontroll är den äldre injection-guard-middlewaren.
- **Strömmade svar** får inga post-call-guardrails: ingen `pii-masker` eller
  `credential-masker` efter anropet, och inget post-call-block. Endast den strömmande PII-
  transformen tillämpas (när `PII_RESPONSE_SANITIZATION` är på). En credential
  som returneras i ett strömmat svar maskeras inte.
- **Inaktiveringskanaler kontra middlewaren (enligt design):** middlewaren utvärderar
  prompt-injektion med sitt eget anrop till `evaluatePromptInjection()`, utan att
  skicka någon anroparkontrollerad inaktiveringslista. Läget `block` är en obligatorisk
  gräns som anroparkontrollerade inaktiveringar inte kan kringgå, även på chattfamiljens rutter
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Att inaktivera
  `prompt-injection` hoppar bara över registrets guardrail.

### Vad som ser ett svar före post-call

På den icke-strömmande vägen är ordningen: minnesutvinning → körning av inbyggda
verktyg → post-call-guardrails → post-call-blockavslut → semantisk cache-lagring.

- **Minneextrahering** och **verktygskörning** ser svaret innan guardrails som körs efter anropet kan skriva om eller blockera det. Sedan
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) kör minneextraheringen den extraherade texten genom `sanitizePII` när
  `PII_RESPONSE_SANITIZATION` är på (både streaming och icke-streaming), men ett
  svar som efteranropssteget senare blockerar har ändå erbjudits till minnet och
  verktygen.
- **Den semantiska cachen** lagrar svaret efter efteranropssteget, så den lagrar
  det omskrivna svaret, och ett blockerat svar cachas aldrig. Cacheposter
  nycklas per API-nyckel.

## Konfiguration

Miljövariabler som läses av de inbyggda guardrails:

| Variabel                              | Används av               | Effekt                                                                                                  |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Sätt `false` för att helt inaktivera identifiering.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Injektionspolicy: `warn`, `block` eller `log`. Äldre värdet `redact` skriver inte om injektionstext.    |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Läge för injektionsskyddet; även en DB-funktionsflagga som **åsidosätter** miljövariablerna (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Lägsta allvarlighetsgrad som `MODE=block` avvisar: `high` (standard), `medium` eller `low`.             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Äldre alias för `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | När `true` maskeras PII i förfrågan (oberoende av injektionsläge).                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nedströms) | Styr beteendet för maskeraren på svarsidan.                                                             |

Modality Bridge-guardrails läser körtidskonfiguration från det DB-backade inställningslagret (`getSettings()`), inte från miljövariabler. Visions primärnycklar är `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` och `modalityBridgeCacheMaxEntries`. De äldre nycklarna `visionBridge*` accepteras endast som den dokumenterade läs-fallbacken för en cykel; skrivningar från instrumentpanelen använder primärnycklarna. Standardvärden och fallback-resolvern finns i `src/shared/constants/modalityBridgeDefaults.ts`, med äldre konstanter kvar i `src/shared/constants/visionBridgeDefaults.ts`.

Ljud använder `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` och `modalityBridgeAudioMaxClips`, plus de delade inställningarna `modalityBridgeCache*`. Ljud har ingen fallback för äldre nycklar eftersom dessa nycklar introducerades med Modality Bridge-schemat.

Video använder `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` och `modalityBridgeVideoTimeout`, plus de delade inställningarna `modalityBridgeCache*`. Det är inaktiverat som standard eftersom FFmpeg/ffprobe är valfria driftberoenden och captioning av bildrutor lägger till latens och modellkostnad.

## Anpassade guardrails

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

Steg:

1. Skapa `src/lib/guardrails/myGuardrail.ts` som utökar `BaseGuardrail`.
2. Implementera `preCall` och/eller `postCall`.
3. Antingen registrera vid importtillfället (pusha från `registerDefaultGuardrails`) eller
   anropa `guardrailRegistry.register(...)` vid körning — registret ersätter
   alla tidigare guardrails med samma normaliserade namn.
4. Lägg till tester under `tests/unit/` (befintliga exempel:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testning

Använd `resetGuardrailsForTests()` mellan tester för att utgå från ett känt tillstånd.
Skicka `{ registerDefaults: false }` för att starta med ett tomt register och
registrera endast de guardrails som testas. Vision Bridge accepterar
beroendeinjektion (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge
exponerar motsvarande kopplingspunkter för inställningar, kapaciteter, val av
STT-modell, kontroller av autentiseringsuppgifter och transkribering. Tester kan
därför utöva båda flödena utan databas- eller nätverksåtkomst.

## Se även

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — delad detektor som driver
  prompt-injektion och PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — standardvärden för Vision Bridge och
  lista över modeller som tvingas via bryggan
- `src/shared/constants/modalityBridgeDefaults.ts` — delade körningsstandardvärden för Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lager (kretsbrytare, nedkylningsperioder)
- `docs/reference/ENVIRONMENT.md` — fullständig referens för miljövariabler

## Ruttäckning och red-team för injektionsskyddet (Fas 8 · Block D)

Injektionsskyddet (`createInjectionGuard` / `withInjectionGuard`) täcker alla rutter
som tar emot användarprompter. Det respekterar `INJECTION_GUARD_MODE` (standard `warn` = endast loggning;
`block` = returnerar HTTP 400 `SECURITY_001`).

| Typ              | Rutter                                                                                                                                               | Standardläge |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Text (befintlig) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Textextrahering (`extractMessageContents`) täcker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo verifierar att varje rutt blockerar
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kör prober (hoppar över utan hemlighet).
`moderations` ingår för konsekvens. Blockläge är en obligatorisk gräns: `evaluatePromptInjection()`
ignorerar listan över inaktiverade skydd per begäran som middleware skickar till den, så `disabledGuardrails` undantar
**inte** en rutt från den ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Det nattliga arbetsflödet (`.github/workflows/nightly-llm-security.yml`, cron + manuell
utlösning) har två jobb:

- **`promptfoo-guard` (blockerande)** — kör `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Varje fientligt fall (t.ex. ”ignorera alla
  tidigare instruktioner…”, DAN-liknande jailbreaks) verifierar att svaret har
  `error.code === "SECURITY_001"`, dvs. att skyddet faktiskt avvisade begäran.
- **`garak` (rådgivande)** — kör garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Villkoras av en
  leverantörshemlighet (`PROMPTFOO_PROVIDER_KEY`); hoppar över smidigt och har suffixet
  `|| true`, så att det rapporterar utan att CI misslyckas.

Täckningen för skyddshjälparen (`createInjectionGuard` / `withInjectionGuard`)
omfattar alla promptbärande `/v1`-rutter; prompttext hämtas från
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
