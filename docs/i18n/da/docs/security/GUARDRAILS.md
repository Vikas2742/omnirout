# Guardrails (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sandhedskilde:** `src/lib/guardrails/`
> **Senest opdateret:** 2026-10-17 — v3.8.52 (tilføjede [Dækning og begrænsninger](#coverage-and-limits):
> hvilke ruter og svarstier hooks når, de flettede deaktiveringsheadere (#16412), blokeringstilstand
> for injektion som en obligatorisk grænse (#16413), og hvad der ser et svar før post-call)

Guardrails håndhæver sikkerhed, politikker og indholdstransformationer ved grænsen
mellem OmniRoute og upstream-udbydere. Hver guardrail kan inspicere (og
eventuelt afvise, transformere eller annotere) request-payloads (`preCall`) og
upstream-svar (`postCall`).

Systemet er **fail-open**: Hvis en guardrail kaster en fejl under udførelsen, registrerer
registret fejlen og fortsætter med den næste guardrail i stedet for at lade
requesten fejle. Blokering er en eksplicit beslutning (`block: true`), aldrig et uheld.
Den eneste undtagelse er en afbrudt request: Når kalderens `signal` er afbrudt,
vil en guardrail, der kaster en fejl, få hook-kørslen til at blive afvist i stedet for at blive sprunget over.

Hooks kører **ikke** på alle ruter eller alle svar. Læs
[Dækning og begrænsninger](#coverage-and-limits), før du anvender en guardrail som
sikkerhedskontrol.

## Indbyggede guardrails

Registret indlæser automatisk seks guardrails i prioritetsrækkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Trin           | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstal kører **først**.

### Vision Bridge (`visionBridge.ts`) — Modalitetsbro PR-1

Basismodellen GLM 5.3 og `glm-5.3-{low,high,max}` har eksplicitte
`supportsVision:false`-metadata i registret/specifikationen. GLM 5.3 Flash-varianterne
forbliver modeller med indbygget understøttelse af vision. Claude Codes `/v1/messages`-rute går ind i
den fælles `handleChat`-kæde af pre-call-guardrails **før** oversættelsen
fra Claude til OpenAI; indlejrede billeder i `Read`-værktøjsresultater skal beskrives eller håndteres,
før denne oversættelse løfter dem ind i OpenAI-`image_url`-indhold (#17069).

Opfanger requests med billeder, som er rettet mod **modeller uden vision**, og
omdirigerer enten hele requesten til en model med vision eller erstatter
billeddelene med tekstbeskrivelser, som genereres af en konfigurerbar vision-model før
upstream-kaldet. Dette gør det muligt for udbydere, der kun understøtter tekst, at håndtere
multimodale payloads transparent.

Forløb:

1. Spring over, hvis målmodellen allerede understøtter vision (medmindre den fremgår af
   listen over tvungen brug af broen `isVisionBridgeForcedModel`).
2. Udtræk billeddele via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **samlede mediedetektor**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   eneste sandhedskilde, som deles med kompatibilitetsfilteret for kombinationer.
   Udtrækningen er begrænset til de former, som `replaceImageParts` kan indsætte
   igen (udtræk↔erstat-kontrakten): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic-URL `source.type:"url"` og Responses
   API `input_image`. Matchende billeder, der er indlejret i Claude Code
   `tool_result.content` og Responses-værktøjsoutput, udtrækkes og
   erstattes også på deres oprindelige stier; former, der kun fungerer som indikatorer, er materiale for
   kombinationsfilteret og udtrækkes ikke.
   Spring over, hvis ingen findes.
3. Bestem runtime-konfigurationen via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): Nye indstillingsnøgler af typen `modalityBridge*`
   har forrang; ældre nøgler af typen `visionBridge*` forbliver en **fallback i én cyklus**
   (tilbagerulningsvindue). Spring over før enhver gennemgang af medier, når
   broen er deaktiveret.
4. Tilstandsvælgeren (`modalityBridgeVisionMode`, se tabellen nedenfor) afgør,
   om der skal omdirigeres eller beskrives. Omdirigering returnerer `modifiedPayload`, hvor kun `model`
   er udskiftet, samt metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsessti: Begræns billeder til `maxImages`, sammensæt den opgavebevidste prompt,
   slå op i beskrivelsescachen, kald vision-modellen **parallelt**
   (`Promise.allSettled`), og indsæt tekstdele af typen `[Image N]: <description>` på
   deres plads. En mislykket beskrivelse giver `null`: Det rå billede bevares for
   ukendte mål eller mål med vision (#4012), men et **bekræftet direkte mål,
   der kun understøtter tekst**, eller en kombination uden vision får en eksplicit
   `(unavailable — no vision-capable provider connected)`-tekstpladsholder for
   hvert ubeskrevet billede, herunder delvise fejl og billeder ud over
   grænsen for beskrivelseskald (#17069). Den eksisterende fallback for kombinationsbeskrivelse,
   når alle kald mislykkes, bevares (#8430).
6. Returner `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilstandsvælger (`modalityBridgeVisionMode`)

| Tilstand   | Standard | Adfærd                                                                                                                                                                                                                                                                                                                                              |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Ældre heuristik, uændret (#6640/#7204): Ikke-kombinationsmodeller/`auto/`-modeller omdirigeres til den bedste visionsmodel, medmindre den oprindelige model allerede har brugbare legitimationsoplysninger (så beskrives billedet); kombinationsmål beskriver altid.                                                                                |
| `describe` |          | Beskriv altid — omdirigeringsblokken springes helt over; brugerens valgte model svarer altid.                                                                                                                                                                                                                                                       |
| `reroute`  |          | Gennemtving omdirigering: Kontrollen, der bevarer modellen med legitimationsoplysninger, tilsidesættes. Legitimationskontrollen for omdirigerings-**målet** gælder stadig — når der ikke findes et brugbart visionsmål, blokerer broen med en tydelig fejl i stedet for at beskrive eller sende rå billeder til et mål, der kun understøtter tekst. |

Tvungne tilstande afsluttes tidligt, **før** autoheuristikken køres; `auto`-adfærden
er byteidentisk med beskyttelsesmekanismen før PR-1.

#### API-nøglens omfang (`visionBridgeKeyScope.ts`)

Når kalderens API-nøgle begrænser `allowedConnections`, kvotepuljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), vælger broen kun
omdirigerings- og beskrivelsesmodeller, som nøglen må bruge, på forbindelser,
som nøglen må bruge. Beskrivelseskaldet går derefter altid gennem OmniRoutes
selvsløjfe med headeren `x-omniroute-self-loop-key-id`, så den modtagende
chatanmodning håndhæver nøglens forbindelses- og modelpolitik igen.
`enforceApiKeyPolicy()` respekterer kun denne header sammen med
selvsløjfens bearer-token, så den kan kun indsnævre adgangen, og et id, der
ikke kan slås op, afvises.

Hvis ingen visionsmodel er tilladt for nøglen, afviser et **bekræftet mål,
der kun understøtter tekst**, billedanmodningen lokalt med en tydelig HTTP
400-fejl i stedet for at videresende billedbytes til en inkompetent upstream
(#17069). For mål med ukendt eller indbygget visionsunderstøttelse bevarer
beskrivelsesforløbet sin tidligere fail-open-adfærd (meta
`{ skipped: true, reason: "no_permitted_vision_model" }`). Anmodninger uden
en nøgle og nøgler uden disse begrænsninger opfører sig præcis som før.

#### Opgavebevidst beskrivelsesprompt (`modalityBridgeVisionTaskAware`)

Standard er **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`)
føjer teksten fra den **seneste brugermeddelelse** (afkortet til 500 tegn) til
den grundlæggende beskrivelsesprompt, så beskrivelsen målrettes det, brugeren
faktisk spurgte om (codex-vision-proxy-mønsteret), og visionsmodellen anmodes
om at transskribere synlig tekst. Når flaget er slået fra — eller der ikke er
nogen brugertekst — bruges den grundlæggende prompt uændret.

Beskrivelsessløjfens egen OpenAI-kompatible anmodning (`callVisionModelSingle()`
i `visionBridgeHelpers.ts`) anmoder altid om `image_url.detail: "high"` —
ubetinget, for alle kaldere/udbydere og uden at være betinget af noget signal
fra klienten. Sampling med lav detaljegrad forringer OCR-nøjagtigheden for
netop den teksttransskriberingsopgave, som denne prompt anmoder om, så selve
beskrivelseskaldet anmoder altid om høj detaljegrad, uanset hvilket
detaljeniveau den oprindelige indgående anmodning brugte. Dette påvirker kun
det interne beskrivelseskalds request body; det ændrer ikke, hvordan OmniRoute
videresender kalderens egen `image_url.detail` i den primære anmodning —
denne standard anvendes separat og kun for registrerede OpenCode-klienter i
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Anthropic-wire-formatgrenen i beskrivelsessløjfen har ikke noget `detail`-felt
og påvirkes ikke af nogen af standarderne.

#### Maksimum for beskrivelsesoutput (`modalityBridgeVisionMaxChars`)

| Nøgle                          | Standard | Interval            |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyder **ingen grænse** — beskrivelsen, der returneres af
`callVisionModel()`, videregives uændret, hvilket bevarer den eksisterende
adfærd. Enhver værdi i intervallet 100–50000 afkorter beskrivelsen med
suffikset `…`, før den indsættes igen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Hæv værdien for OCR-opgaver med mange detaljer, hvor downstream-modellen har
brug for hele transskriptionen; sænk den for at begrænse tokenforbruget fra
snakkesalige visionsmodeller. Dashboard-feltet findes i panelet Avanceret på
fanen Vision (`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og
hæver enhver værdi mellem 1 og 99 til minimumsværdien 100, mens et eksplicit
`0` forbliver uændret — `0` er i sig selv en gyldig Zod-værdi
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke blot
standardværdien for "ikke angivet".

#### Beskrivelsescache (`modalityBridge/bridgeCache.ts`)

LRU- og TTL-cache i hukommelsen til beskrivelsesoutput, delt på tværs af hele
processen. Nøgle = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
med længdepræfiksrammer (ingen kollisioner mellem feltgrænser). Modelkomponenten
er den **konfigurerede** bromodel, ikke den model, der faktisk svarede —
`callVisionModel` kan internt falde tilbage til en anden model, og brug af en
nøgle pr. forsøg ville fragmentere cachen. Mislykkede beskrivelser caches
aldrig. Indstillinger:

| Nøgle                           | Standard | Interval |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Normalisering af fjernbilleder (self-loop describe/base64-hentning)

Når broen selv henter et **fjernbillede** — Anthropic describe-self-kaldet og base64-konverteringen til claude-wire-format (`ensureBase64ImagesForClaudeWire`), begge via `fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — sendes den resulterende data-URI gennem `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`), før den indlejres i anmodningen til vision-modellen. For store billeder nedskaleres til en **lang kant på 2048 px** (svarende til den grænse for størrelsesændring, som OpenAI/Anthropic allerede anvender på serversiden), hvilket reducerer uploadmængde og latenstid uden at ændre, hvad vision-modellen ser. Til størrelsesændringen bruges `sharp`, som indlæses via dynamisk import: På en platform, hvor dens native binære fil ikke kan indlæses, kaster `normalizeDataUri()` **aldrig en undtagelse** — den falder tilbage til at videresende de oprindelige bytes uændret, så describe/base64-konverteringsforløbet altid fortsætter med at fungere. Bytes, der ikke er billeddata (en hentning, som ikke returnerede et billede, der kunne afkodes), videresendes også uændret. Denne normalisering er begrænset til billeder, som broen henter til sit eget self-kald — den anvendes aldrig på kalderens rå passthrough-payload i overensstemmelse med princippet om, at ændringer kun foretages efter tilvalg (ufravigelig regel nr. 20).

#### Indstillingsskema + migrering

De nye `modalityBridge*`-nøgler valideres med Zod i `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-trioen og `modalityBridgeAudio*`-gruppen, der bruges af Audio Bridge. Migreringen `141_modality_bridge_settings.sql` kopierer eksisterende ældre `visionBridge*`-værdier til de tilsvarende nye nøgler (idempotent og overskriver aldrig en `modalityBridge*`-værdi, som en operatør har angivet). De ældre nøgler accepteres fortsat som reserve ved læsning i én udgivelsescyklus.

#### Transparensheader + statistik

Describe-transformerede svar indeholder
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(oprettet af `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts` og påført af `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`). Omdirigerede anmodninger får **ingen** header — payloaden blev ikke ændret, og modelskiftet er allerede synligt i svarindholdets `model`-felt.

`GET /api/modality-bridge/stats` (administrationsgodkendelse på samme niveau som `GET /api/settings`) returnerer tællerne pr. modalitet i hukommelsen `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og `video`. `averageLatencyMs` bruger `latencySamples`, ikke alle forsøg, som nævner. En handling uden tidsmåling opretter ikke en kunstig prøve på nul millisekunder. `bridged` forbliver det bagudkompatible alias for gennemførte konverteringer. Mislykkede forsøg øger det ikke.
Tællerne nulstilles bevidst, når processen genstartes
(telemetri, ikke regnskabsføring).

#### Konfiguration i dashboardet

Den dedikerede dashboardside er
`/dashboard/settings/modality-bridge`. Dens URL-adresserbare faner `Vision`, `Audio` og `Video` bevarer forespørgselsparametrene, mens `tab`-værdien skiftes. Fanen Vision giver adgang til aktivering, tilstand, modelvalg (inklusive den automatiske standardindstilling), opgavebevidst prompting, avancerede grænser for timeout, billeder, beskrivelseslængde og cache, kørselstællere samt en beskyttet eksempelanmodning. Fanen Audio er også aktiv: Den giver adgang til aktivering, en modelvælger udelukkende til STT med Auto, grænser for timeout og maksimal kliplængde, lydtællere samt en `input_audio`-eksempeltest. Fanen Video er funktionel: Den viser kørselstilstanden for FFmpeg/ffprobe — én af fire eksplicitte UI-tilstande (`unknown`, mens kontrollen kører eller ikke kunne fuldføres, `restricted` på en dashboardvært, der ikke bruger loopback, og hvor kontrollen springes over på klientsiden, `unavailable`, når kontrollen er udført og manglende tilgængelighed er bekræftet, eller `available` med versionerne af FFmpeg/ffprobe) — gemmer grænser for aktivering, model, billeder, video og timeout, filtrerer modelvælgeren til modeller med visionsunderstøttelse og viser videotællere.

Det tidligere Vision Bridge-kort under AI-indstillinger er et kompatibilitetslink til den nye side. Det har ikke længere sin egen separate kopi af formularen. Media Providers linker også arbejdsgange for Image-to-Text og Speech-to-Text til de tilsvarende faner i Modality Bridge uden at fjerne den eksisterende Speech-to-Text-sandkasse.

**Tilsidesættelse af adgangskontrol for self-loop:** Når describe-kaldet rutes gennem OmniRoutes eget `/v1`-self-loop (model fra en ikke-standardudbyder), sender underanmodningen `x-omniroute-admission-bypass: internal` og godkendes med den fundne self-loop-legitimationsoplysning — den lokale `sk_omniroute`-sentinel i lokal tilstand eller den operatørkonfigurerede miljønøgle `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), så installationer med `REQUIRE_API_KEY=true` stadig kan udføre describe-kaldet. Tilsidesættelsen accepteres kun for netop disse legitimationsoplysninger, så eksterne klienter ikke kan bruge headeren til at omgå adgangskontrollen.

Ældre standardværdier findes i `src/shared/constants/visionBridgeDefaults.ts`. De nye standardværdier for tilstand, opgavebevidsthed og cache samt indstillingsresolveren findes i `src/shared/constants/modalityBridgeDefaults.ts`. Sikkerhedsmekanismen tilbyder konstruktørindstillingen `deps`, så tests kan injicere falske implementeringer af `getSettings` og `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Opfanger chatanmodninger med lyd, før de når et mål, som ikke vides at acceptere lydinput. Den omdirigerer aldrig chatanmodningen: Lyddele transskriberes gennem det eksisterende OpenAI-kompatible multipart-slutpunkt, hvorefter den valgte chatmodel fortsætter med teksttransskriptioner.

Forløb:

1. Bestem `supportsAudio` via `getResolvedModelCapabilities()`. Eksplicitte
   metadata fra provider-registret har forrang, derefter statiske modelmetadata
   og til sidst synkroniserede `modalities_input`. En deklareret inputliste uden
   `audio` er `false`; hvis der ikke findes dokumentation for egenskaben, er
   værdien `null`. Både `false` og `null` aktiverer den konservative bro, mens
   `true` omgår den.
2. Bestem indstillingerne for `modalityBridgeAudio*`, og udtræk splejsbare
   lyddele på øverste niveau fra hver meddelelse via den fælles
   `detectMediaParts()`-detektor. Understøttede wire-formater er OpenAI
   `input_audio`, `audio_url` og `source.media_type: "audio/*"`. Indlejret lyd
   registreres med henblik på routing, men fjernes ikke af splejsningsstien.
   Arbejdet begrænses af `modalityBridgeAudioMaxClips`; efterfølgende dele
   forbliver uberørte.
3. Respekter en konfigureret `provider/model`, eller lad
   `selectAudioBridgeModel()` gennemgå `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil
   katalogrækkefølge og vælge den første model med en brugbar, aktiv
   udbyderlegitimationsoplysning.
4. `callAudioTranscription()` konverterer base64-/data-URI-lyd til en multipart
   `file` eller downloader en ekstern `audio_url` gennem outbound-beskyttelsen,
   der kun tillader offentlige adresser, med DNS-fastlåsning og en grænse på 25
   MB. Derefter POSTer den filen og den valgte model til det lokale
   `/v1/audio/transcriptions`-selvkald, godkendt med
   `resolveSelfLoopBearer()`. Den eksisterende transskriptionsrute udfører
   normalt opslag af legitimationsoplysninger, håndtering af nedkøling og
   hastighedsbegrænsning samt videresendelse til udbyderen.
5. Vellykkede kald erstatter deres dele med `[Audio N]: <transcript>`. Kaldene
   kører med `Promise.allSettled`: En individuel fejl bevarer den oprindelige
   lyddel (#4012-kontrakten). Hvis alle kald mislykkes, og målet beviseligt har
   `supportsAudio === false`, bliver delene til
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontrakten).
   For et ukendt mål (`null`) forbliver resultatet uberørt, hvis alle kald
   mislykkes. Et beviseligt tekstbaseret mål uden brugbare
   STT-legitimationsoplysninger modtager den samme eksplicitte pladsholder uden
   at foretage et netværkskald.

Vellykkede transskriptioner bruger Modality Bridges procesomspændende
LRU-/TTL-cache. Nøglen kombinerer lydreferencen, den stabile
`audio-transcription`-operationsetiket og den valgte STT-model; fejl cachelagres
aldrig. Lydforsøg opdaterer de fælles tællere `bridged`, `cacheHits`, `failures`
og `lastUsedAt`. Transformerede svar indeholder
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; uberørte
anmodninger modtager ikke et Audio Bridge-segment.

Kørselsindstillingerne er DB-understøttede og Zod-validerede:

| Nøgle                         | Standard | Interval          |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den fælles cache styres fortsat af `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Opsnapper videodele på øverste niveau i Chat Completions-`messages` og Responses
API-`input`, før et mål uden kendt integreret videounderstøttelse kaldes.
Understøttede formater er `input_video`, `video_url`, `video_source`,
HTTPS-URL'er og `data:video/*;base64,...`-data-URI'er. Almindelige filnavne i
tekst behandles ikke som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) håndterer gennemgang af
anmodningen, egenskabs-/politikkontrollen, aggregering pr. anmodning og
svarpayloaden. Arbejde pr. video — hentning, cachelagring af hele resultatet,
beskrivelse af en billedsekvens (som sammenfletter en eventuel lydtransskription
deklareret af kalderen) samt målinger, afbrydelse og oprydning pr. forsøg — er
skjult bag `processVideoPart` i `videoBridgePipeline.ts`, som kaldes én gang pr.
videodel i `preCall`-løkken. Modulet definerer også de eksplicitte portgrænser
`VideoMediaBrokerPort` (hentning af bytes og udtrækning af samplede billeder),
`VideoAudioTranscriptionPort` (sammenfletning af en lydtransskription deklareret
af kalderen med de samplede billedtekster) og `VideoDrilldownPort`
(persistensgrænsen for billeddetaljering; endnu ikke forbundet til
`processVideoPart` — i dag er det kun den separate
`/api/modality-bridge/video/drilldown`-rute, der skriver
detaljeringsposter).

Den offentlige `/v1`-anmodningssti importerer eller starter aldrig en
underproces. Eksterne videoer downloades med en grænse på 50 MiB; indlejrede
base64-videoer har en konservativ grænse på 36 MiB afkodet pr. video, så
modellen, meddelelserne og framing-indpakningen kan forblive inden for den
offentlige grænse på 50 MiB for godkendelse af JSON-anmodninger. Indlejret
længde og estimater af afkodet størrelse kontrolleres før allokering. HTTPS
kræves for den oprindelige eksterne URL og hver omdirigering via den
eksisterende outbound-beskyttelse, der kun tillader offentlige adresser, med
DNS-fastlåsning. Derefter krydser byteindholdet den præcise interne
`POST /api/modality-bridge/video/extract`-brokergrænse. Denne rute er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, accepterer kun en proceslokalt godkendt,
betroet loopback-anmodning og accepterer aldrig en URL, filsystemsti, eksekverbar
fil eller argumentliste. API'ets pipeline for body-størrelse og handlerens
inkrementelle body-læser håndhæver uafhængigt en inputgrænse på 50 MiB for
brokeren. Dens begrænsede kø kører én udtrækning ad gangen, tillader fire
ventende job og begrænser ventende input til 100 MiB.

Inde i brokeren læser `ffprobe` en privat lokal fil; listen over tilladte faste formater udelukker afspilningsliste- og manifestformater. For tilladte containere i MOV-familien forbliver eksterne MOV-datareferencer som standard deaktiveret, og den faste kommando aktiverer dem ikke. Både `ffprobe` og `ffmpeg` bruger protokol-listen med kun `file`, én tråd, faste argument-arrays, ingen shell og eksekverbare filer fundet via `PATH`. Coverstreams med vedhæftede billeder er ikke kandidater til afspilning. Alle afspilningsbare streams skal overholde grænserne, og en eksplicit standardstream foretrækkes før det deterministiske alternativ med det laveste indeks. Videoer er begrænset til 600 sekunder, 8.192 pixels pr. dimension og 33.554.432 kildepixels. FFmpeg udtager 1–16 JPEG-frames ved midtpunkter, nedskalerer den lange kant til højst 1.024 pixels uden at opskalere mindre input og modtager aldrig en URL. Sampling er som standard `uniform`. De valgfrie politikker `scene_aware` og den eksperimentelle `segment_aware` udfører én yderligere fast FFmpeg-gennemløb over den allerede validerede lokale stream, vælger afgrænsede `showinfo`-scenetidsstempler og falder deterministisk tilbage til de samme ensartede midtpunkter ved detektorfejl, timeout, forkert formateret output eller et tomt kandidatsæt. Segmentbevidst tilstand fordeler midpoint-samples proportionalt med de validerede sceneintervaller; evidens og fallback-adfærd for segmentbevidst tilstand er beskrevet nedenfor. Den faste grænse på 16 frames anvendes efter udvælgelsen i alle politikker. Når en scenebevidst anmodning kun har et budget på én frame, bruger den det ensartede midtpunkt i det aktive fulde video- eller fokusvindue og rapporterer `policyEffective: uniform`: En enkelt udvalgt sceneframe kan ikke bevare begge tidsmæssige ender. En klient kan valgfrit angive et endeligt fokusvindue (`start`/`end` sekunder); grænserne begrænses til mediets varighed, omvendte eller ikke-endelige vinduer afvises, og alle samplingpolitikker udføres kun inden for det normaliserede interval. Det resulterende vindue medtages i samplingmetadataene og i præfikset til den upålidelige beskrivelse, så efterfølgende modeller kan skelne et fokuseret uddrag fra hele tidslinjen.

Semantisk fokus for billedtekster er en separat, eksplicit indstilling. Standardanalysetilstanden `full` bevarer den eksisterende frame-prompt og videresender aldrig anmodningstekst til billedtekstmodellen. I tilstanden `focused` læser broen kun den seneste ikke-tomme brugerskrevne `text`/`input_text` fra den samme Chat- eller Responses-container, normaliserer den til NFC, samler kontroltegn og blanktegn og begrænser den til 500 Unicode-kodepunkter. Et tomt resultat falder tilbage til den nøjagtige `full`-prompt. Et brugbart hint serialiseres som JSON i en dedikeret blok med upålidelig brugerkontekst og må kun prioritere observerbare detaljer; det kan ikke tilsidesætte den separate advarsel mod at følge instruktioner, der er synlige eller hørbare i mediet. Tekstbaseret fokus udleder aldrig `start`/`end` og ændrer ikke den tidsmæssige sampler.

#### FU-07 strukturel segmentevidens

`segment_aware` bruger ét afgrænset foranalysegennemløb over den allerede validerede lokale videostream. Den faste filterkæde skalerer først til højst 320 pixels i bredden, registrerer sceneskift og fastfrosne intervaller og sampler derefter med 1 frame pr. sekund for sløring, gennemsnitlig luminans samt rumlig og tidsmæssig information. Gennemløbet er begrænset til 600 strukturelle samples, én FFmpeg-/filtertråd, de samme protokol- og containerlister med kun `file`, en grænse på 1 MiB for procesoutput og højst 30 sekunder inden for brokerens delte afbrydelse/deadline. Det accepterer aldrig en kommando, et filter, en sti eller en URL fra anmodningen.

De strukturelle værdier er deterministisk sampling-evidens, ikke semantisk videoforståelse. De udleder ikke motiver, handlinger, billedtekster, tale eller brugerhensigt. Scene- og fastfrysningsgrænser danner segmenter; fastfrysningsdækning, sløring, eksponering, rumlige detaljer og tidsmæssige ændringer påvirker kun, hvordan det eksisterende budget på 1–16 frames fordeles. Et fuldstændigt fastfrosset segment begrænses til én frame, mens ikke-fastfrosne segmenter konkurrerer om det resterende budget. Når der er flere grænser end frames, bevares en ensartet dækning af tidslinjen, så hurtige tidlige klip ikke kan skjule et langt afsluttende segment. Scenegrænser, der ligger inden for analysens opløsning på 1 sekund fra en fastfrysningsgrænse, slås sammen.

Manglende filtre, forkert formateret eller tom evidens, en detektorfejl eller timeout for den afgrænsede foranalyse medfører et åbent fallback til den nøjagtige politik med ensartede midtpunkter. En afbrydelse fra klienten eller en broker-deadline medfører ikke et åbent fallback: Den afslutter den igangværende underproces, forhindrer efterfølgende frameudtrækning, og det private midlertidige filtræ fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske, virkelige FFmpeg-fixtures til besparelser på billedtekstkald efter deduplikering, budgetfordeling ved tæt bevægelse, evidens for sløring/eksponering/SI-TI, hurtige klip med en lang afslutning og falske positiver ved gradvis udtoning. Det registrerer foranalysens samlede køretid og, hvor `/usr/bin/time` er tilgængelig, underprocessens CPU-forbrug og maksimale RSS. Dets kvalitetstjek er kun strukturelle orakler. Kvaliteten af den virkelige billedtekstmodel forbliver `HOLD`, fordi denne testplatform ikke har noget autoriseret slutpunkt eller nogen fastlåst bedømmer. Monetære besparelser forbliver også `HOLD`, medmindre `--caption-cost-per-call-usd` angiver et eksplicit positivt estimat pr. kald; scriptet fabrikerer aldrig nogen af resultaterne.

Hver frame er begrænset til 4 MiB, alle rå frames tilsammen til 23 MiB og det
serialiserede broker-svar til 32 MiB. En privat midlertidig mappe fjernes
i `finally`. OmniRoute inkluderer ikke FFmpeg og accepterer ikke en brugerdefineret
sti til en eksekverbar fil. Før billedtekstgenerering anvender broen en konservativ
visuel deduplikeringsproces: Hver JPEG reduceres til en gråtonebuffer på 16×16 og
sammenlignes kun med den senest bevarede frame. Ved et ønsket budget til
billedtekstgenerering på mere end én frame leverer udtrækningen en
begrænset pulje af kandidater på op til det dobbelte af budgettet og aldrig mere end 16 frames.
Den ønskede grænse anvendes først efter deduplikering, og den første og sidste
valgte kandidat bevares under den endelige udtynding, når budgettet er mindst
to. Den versionsstyrede
`grayscale-16x16-mean-cells-v2`-politik anvender den største værdi af den gennemsnitlige luminansforskel og
andelen af miniatureceller, hvis normaliserede forskel er mindst 0,05.
Tærsklen for dubletter er konstanten 0,04, som er valgt for at sikre forudsigelighed frem for
at være tilgængelig som en indstilling under kørsel. Dette sekundære
højkontrastsignal bevarer små bevægelser og ændringer i synlig tekst, som en
sammenligning, der kun bruger gennemsnittet, kan skjule. Fejl i sammenligningsfunktionen eller dekoderen håndteres åbent, så
dækningen bevares. Outputmetadata skelner mellem udtrukne kandidater, korrekt anvendte
frames og frasorterede visuelle dubletter.

En eksplicit markeret videodel kan anmode om et kontaktark med tidsstempler.
Broen opbygger et JPEG-gitter med højst 4 kolonner og 16 frames. Hver celle på 512 pixel
indlejrer kildens tidsstempel i et bundbånd med høj kontrast, mens de samme tidsstempler
bevares i tekstmetadata til efterfølgende tilknytning og revision. Den komplette
JPEG er fortsat begrænset til 32 MiB. Hvis `sharp` ikke kan afkode eller sammensætte gitteret,
falder broen tilbage til de enkelte JPEG-frames. En klientafbrydelse videreføres stadig
gennem kontaktarkoperationen.

Dokumentation til promovering er bevidst adskilt fra mikrobenchmarken for syntetisk
sammensætning. `scripts/perf/video-bridge-contact-sheet-eval.ts` definerer en
skema-versionsstyret A/B-teststruktur til ægte OpenAI-kompatible vision-modeller. Den måler
tokens rapporteret af udbyderen, samlet latenstid fra start til slut (inklusive sammensætning af kontaktarket),
antal modelkald og fastholdelse af fakta defineret i manifestet. Rå modelsvar
skrives ikke til rapporten; kun SHA-256-digests og ID'er for matchede fakta bevares.
Teststrukturen foretager ingen netværkskald eller kald til betalingsmodeller, medmindre `--execute-real` angives, og
`--model`, `OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigureret. Uden
denne eksplicitte virkelige kørsel forbliver dens maskinlæsbare resultat `HOLD`; syntetiske
målinger af nyttelast og antal kald udgør ikke i sig selv dokumentation til promovering.

Kaldere kan vedhæfte et valgfrit `transcript.cues`-array til en understøttet videodel,
når de allerede har justeret tekst. Hver cue skal indeholde `text`, et endeligt
`start`/`end`-interval inden for den registrerede varighed og en kilde fra hvidlisten
`source` (`client`, `embedded` eller `audio-bridge`); `confidence` er som standard
`1` og skal forblive mellem `0` og `1`. Helt identiske cues slås sammen.
OmniRoute starter aldrig transskription ud fra disse metadata: Validerede cues
kopieres til det beskrevne resultat sammen med kilde, konfidens og interval og
gengives som observationer, der ikke er tillid til, sammen med frame-billedteksterne. Ugyldig tekst,
tekst uden for intervallet eller tekst uden herkomst afvises frem for at blive blandet ind i
billedtekststrømmen. Begge transskriptionskanaler i request-body normaliserer den angivne
herkomst til `client`, herunder selvangivne `embedded`- eller `audio-bridge`-etiketter.
Kun en serverejet adapter kan tildele disse pålidelige etiketter via
kodeargumentet `trustedSource`; et JSON-felt i en request kan ikke nå
dette argument. Transskriptionstekst forbliver medieafledt indhold, der ikke er tillid til,
uanset herkomsten, og må aldrig afgøre autorisation.

En avanceret kalder kan angive et `audioTranscript`-spor til den samme video;
det behandles som tekst leveret af klienten og ikke som bevis på servertransskription.
Fusionsgrænsefladen kører visuelle observationer og lydobservationer under
én deadline og ét afbrydelsessignal, placerer dem på en fælles tidslinje, slår
helt identiske dubletter sammen og rapporterer et delvist resultat, når kun den ene side lykkes.
Et ugyldigt `audioTranscript` reduceres til dette delvise resultat — den visuelle
beskrivelse bevares, og lydgrenen registrerer en renset fejlkode —
i stedet for at hele videoen fejler. Tilgængelighed pr. gren, markeringen af delvist resultat
og de rensede fejlkoder bevares i det beskrevne resultat, i
værnemekanismernes metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultatcachens metadata og i broens
fusionstællere. Video Bridges standardsti aktiverer ikke tale-til-tekst
og downloader ikke en ekstra kopi af mediet; uden dette eksplicitte spor forbliver den
udelukkende videobaseret.

**Opbevaring af transskriptioner (#12150 P1).** Dette gælder automatisk, hver gang
Video Bridge (som i sig selv kræver tilvalg) gengiver et transskriptionssegment — der findes ikke et separat
flag for opbevaring. Når en anmodning gengiver et transskriptionssegment (en
`transcript`, der er angivet af kalderen, eller en flettet `audioTranscript`), markerer guardrailen den som
`videoBridgeObserved` og producerer en redigeret skygge af videobeskrivelsen —
en identisk gengivelse, hvor hvert segments fritekstindhold erstattes med
`[redacted-video-transcript]`, oprettet ved at erstatte det strukturerede segmentfelt,
før strengen sammensættes (aldrig ved at parse den fladgjorte tekst, så intet
segmentindhold — skadeligt eller almindeligt, herunder indhold med `]` såsom
`[inaudible]`/`[music]` — kan overleve). Anmodningsindholdet i den permanente
kaldslog erstatter hver videoafledt tekstdel med denne redigerede skygge, matchet
ud fra indholdslighed; `fullText`-ankeret genindlæses fra den færdige
guardrail-nyttelast før kaldet, så matchet stadig lykkes, efter at senere
guardrails i kæden (maskering af PII og legitimationsoplysninger, prioriteterne
10/95) omskriver beskrivelsesteksten på stedet, og efter at injektion af
systemprompt/overdragelse/hukommelse har omformet meddelelsesarrayet. Indholdet,
der sendes opstrøms til modellen, er uændret. En observeret anmodning udfylder
heller ingen permanent Memory (både anmodnings- og svarafledt udtrækning springes over),
så modellens eget svar ikke kan gengive transskriptionstekst i Memory.

**Rå videofelter (#12430).** Når broen er aktiveret, og indbygget videounderstøttelse er ukendt eller mangler, aktiverer definerede `transcript`-/`audioTranscript`-felter også `videoBridgeObserved`, selv efter en fejl i beskrivelsen eller en `maxVideos`-grænse. `null` og tomme strenge tæller med; manglende felter og metadata, der ikke vedrører video, gør ikke. Opbevarede kopier redigerer disse felter eller udelader anmodningen, og caches/Memory omgås.

På disse fallback-stier bliver gyldige segmenter fra kalderen til understøttede
`text`-/`input_text`-dele i stedet for ikke-standardiserede udbyderfelter. Begge
spor, der leveres i anmodningen, forbliver ikke-betroede `client`-observationer
med en udtrykkelig advarsel om, at videoen ikke blev beskrevet, og at
tidsstemplerne ikke blev verificeret mod mediet. De eksisterende budgetter på
256 segmenter/64 KiB i alt samt pr. segment gælder samlet for de to spor;
tidsstempler skal være inden for brokerens loft på 600 sekunder og et eventuelt
angivet fokusvindue. Ugyldige spor kasseres og videresendes ikke som vilkårlig
tekst; et gyldigt søskendespor kan stadig bruges, medmindre deres samlede budget
overskrides. Null/tomme felter tilføjer ingen tekst. Denne fallback tilføjer
ingen hentning af medier eller transskription. Udvidelsesfelter til
transskription fjernes fra fallback-videobæreren og dens
`video_url`-/`source`-objekter. OpenAI's wire-tilladelsesliste forbliver streng;
videobærere med ukendt indbygget understøttelse forbliver tilgængelige, og kendte
mål, der kun understøtter tekst, beholder sikre markører. Strukturerede
redigeringsskygger beskytter den tilføjede transskriptionstekst, mens den
oprindelige anmodning, som ejes af kalderen, forbliver uændret. Mål med
indbygget understøttelse og deaktiverede broer beholder deres eksisterende
omgåelsesadfærd.

Yderligere opbevarede kopier bruger det samme signal for observerede anmodninger.
Det rå snapshot af klientanmodningen før guardrails, den ventende anmodning i
hukommelsen og loggen over tidligt afviste anmodninger erstatter strukturelt
transskriptionsfelter i videodele; strengprompter, der syntetiseres af
pipelinefaser og kontekstoverdragelse, redigeres ved sinken for det permanent
lagrede anmodningsindhold. Den permanent lagrede `video_content_removed`-markør
får `previous_response_id`-fortsættelse til at fejle lukket i stedet for at
rekonstruere tekst, der bevidst blev kasseret. Hvis en observeret anmodning
mister sin redigeringsskygge pr. del før logning, eller hvis blot én af flere
videoskygger ikke længere matcher efter senere ændringer af anmodningen,
udelades det opbevarede anmodningsindhold helt i stedet for at opbevare en kun
delvist redigeret transskription.

For en observeret anmodning kan et modelsvar citere en hvilken som helst del af
transskriptionen uden en struktureret segmentgrænse. Dets permanent lagrede
`responseBody` i kaldsloggen erstattes derfor med en udeladelsesmarkør; den
detaljerede pipelineartefakt (som kan indeholde opstrøms-/klientindhold og
stream-segmenter) opbevares ikke. Semantiske caches, idempotenscaches og caches
til genafspilning af ræsonnement omgår læsninger og skrivninger for denne
anmodning. Udbyderanmodningen og det klientvendte svar forbliver uændrede.
Tidlige keepalive-bytes tømmes fra den midlertidige buffer, når den detaljerede
artefakt udelades. Kiros advarsel om misdannet EventStream rapporterer kun
nyttelastens byteantal, aldrig dens indhold eller JSON-parserens rå fejl.
Dette er ikke en påstand om, at alle ikke-relaterede diagnosticeringsdata fra
udbydere/plugins er blevet revideret; den bredere gennemgang af sinks med
opbevaring spores i #11658.

Den interne `/api/modality-bridge/video/drilldown`-livscyklus er et separat
cachefundament, der er loopback-/token-godkendt. Hver handling kræver også et
kanonisk, uigennemsigtigt principal-id. Før en produktionskalder aktiveres, skal
den udlede dette id fra den godkendte tenant og må aldrig videresende en værdi,
som klienten har valgt. Cachenøgler binder denne principal til kanoniske
sessions- og videoreference-id'er, lagrer kun deres SHA-256-afledte nøgler og
afgrænser både læsninger og sletning til den samme principal. Cachen lagrer højst
16 afledte JPEG-billeder pr. post, lader dem udløbe efter ti minutter og
understøtter afgrænsede `start`-/`end`-læsninger eller eksplicit sletning af en
session.

Hver principal er begrænset til 16 poster og 64 MiB kanoniske JPEG-data. Disse
grænser er uafhængige af det globale loft på 64 poster/256 MiB:
kvotepres for en principal fjerner kun denne principals mindst nyligt anvendte
poster, før global LRU-fjernelse overvejes. Udløbne poster fjernes fra både
principalens og den globale opgørelse ved cacheaktivitet, mens annullering og
valideringsfejl ikke gemmer en delvis erstatning.

Cachen afviser ikke-kanonisk Base64, overflødig padding, medier, der ikke er JPEG, ugyldige eller
afkortede JPEG'er samt JPEG'er, der udløser en advarsel under en afgrænset fuldbilledafkodning med `sharp`.
Den genkoder hvert accepteret billede som en kanonisk JPEG, udleder bredde og højde
fra de afkodede bytes i stedet for at stole på felter fra kalderen og kasserer eventuelle efterfølgende
polyglot-bytes frem for at bevare dem. Kun den afgrænsede, kanoniske komprimerede buffer
medregnes i begge kvoter. JSON-overførselsgrænsen inkluderer Base64-overhead for loftet på 32 MiB
for afkodet input. Hver
gemt afledning registrerer sit validerede JPEG-format og sin validerede opløsning, samplingpolitik,
afledningsversion, oprettelsestidspunkt, serverberegnede indholdshash og hash-baserede
forældrereference samt den betroede kalders hash af forældreindholdet. Der kontrolleres for annullering
mellem asynkrone afkodnings- og hashfaser før den atomare cache-commit.

Denne tranche forbinder endnu ikke en produktionsproducer med ruten og understøtter ikke
valg af varianter med flere opløsninger. Den transparente Video Bridge-anmodningssti
medfører derfor intet yderligere arbejde, mens principalafledning bundet til en tenant og
hele FU-08-livscyklussen med flere opløsninger fortsat er eksplicit opfølgningsarbejde
frem for dokumenteret som fuldt implementeret adfærd.

Frames forsynes sekventielt med billedtekster ved hjælp af den konfigurerede Video-model. En tom
Video-tilsidesættelse arver Vision-indstillingen. Hvis begge er tomme, vælger Vision-
autorouteren den effektive model med understøttelse af billedbehandling. Vellykkede billedtekster
erstatter den oprindelige del med et stabilt `[Video description:`-præfiks, der også
markerer teksten som en observation udledt af ikke-betroede medier og instruerer efterfølgende
modeller i ikke at følge instruktioner fundet i mediet. Cache-nøgler til frame-billedtekster
inkluderer JPEG-bytene, prompten, tidsstemplet og den effektive model. Kun vellykkede
billedtekster caches. Cache-poster bevarer den faktisk anvendte producermodel,
herunder en fallback-model. Broen rapporterer `mixed`, når forskellige frames
blev produceret af forskellige modeller. Et cache-hit genbruger denne produceridentitet
i stedet for at ommærke den som den anmodede routingplan. Resultatcachen
for hele videoen har en nøgle baseret på samtlige input, der ændrer outputtet — prompt, effektiv
model, samplingpolitik, antal frames, semantisk analysetilstand, SHA-256-
fingeraftrykket af det normaliserede fokus-hint, fokusvinduet, `transcript`,
`audioTranscript` og kontaktarkflaget — så en ændring af en hvilken som helst af disse
dimensioner er et cache-miss og aldrig genbrug af forældede data. Versionen af
politikken for visuel deduplikering, tærsklen og det afgrænsede antal kandidatframes er også eksplicitte i
resultatcache-nøglen og metadataene. En politikændring kan derfor ikke genbruge en forældet
beskrivelse af hele videoen. Metadata for resultatcache v4 bevarer tilstanden og
fingeraftrykket, men aldrig den rå brugeropgave. Guardrail-metadata rapporterer både den
anmodede og den effektive analysetilstand. En anmodet `focused`-tilstand uden
anvendelig brugertekst rapporteres som effektivt `full`.

Guardrailen udtrækker alle understøttede videodele, men beskriver højst
`modalityBridgeVideoMaxVideos`. For et mål, der beviseligt har
`supportsVideo === false`, bliver mislykkede videoer og videoer over grænsen til eksplicitte, sikre
tekstmarkører, så ingen rå video bevares. Når funktionaliteten er ukendt, bevarer disse dele
deres videocontainer. En eventuel fallback-transskription følger den afgrænsede
tekstkonvertering ovenfor. Mål med `supportsVideo === true` omgår broen.
Klientanmodningens afbrydelsessignal videresendes gennem download, broker-kø,
underprocesser og kald til generering af billedtekster. Afbrydelser stopper mellem videoer og falder aldrig
åbent tilbage til rå medier.

Runtime-indstillingerne er DB-understøttede og Zod-validerede:

| Nøgle                               | Standardværdi | Interval/adfærd                                                                                                  |
| ----------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`       | Valgfri runtime, kræver aktivt tilvalg                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`      | `full` bevarer generiske billedtekster; `focused` bruger afgrænset, ikke-betroet kontekst fra den seneste bruger |
| `modalityBridgeVideoModel`          | `""`          | Arver Vision Bridge-modellen                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`           | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`   | `uniform`, `scene_aware` eller proportional `segment_aware`; fejl i detektoren falder tilbage til `uniform`      |
| `modalityBridgeVideoMaxVideos`      | `1`           | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`      | 1000–120000 ms                                                                                                   |

Ældre gemte Video-timeoutværdier over 120 sekunder begrænses til
broker-deadlinen. Nye skrivninger af indstillinger over denne grænse afvises.
`GET /api/modality-bridge/video/runtime` kræver betroet, stemplet loopback-
lokalitet før godkendelse eller runtime-kontrol og kræver derefter management-
godkendelse. Det returnerer kun `available`, rensede FFmpeg/ffprobe-versioner og en fast
årsag, når runtime-miljøet ikke er tilgængeligt. Det interne udtrækningsendpoint er ikke
et offentligt upload-API: Kømætning returnerer `503` plus `Retry-After`, en afbrudt
kaldende klient returnerer `499`, og den faste broker-deadline returnerer `504`. Konverterede svar føjer
`video->text;model=<visionModel>;parts=<videos>` til den centrale
`x-omniroute-modality-bridge`-header uden at fjerne Vision- eller Audio-segmenter.

### PII-maskering (`piiMasker.ts`)

Kører i **begge** faser.

- **`preCall`** kloner payloaden, gennemgår `system`, `messages`, `input` og
  `prompt` (inklusive elementer med almindelige strenge) og anvender `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på `content`-/`text`-felter med strenge. Når
  `PII_REDACTION_ENABLED=true`, maskeres registrerede personhenførbare oplysninger i den udgående
  payload. Dette er uafhængigt af `INPUT_SANITIZER_MODE` (som kun styrer
  politikken for prompt-injektion). Når maskering er slået fra, registrerer kaldet antallet
  af registreringer uden at omskrive indholdet.
- **`postCall`** dybdekloner svaret og kører `sanitizePIIResponse()` samt
  maskeringsfunktionen for Responses API-formatet (`maskResponsesOutput` — dækker
  `output_text` og `output[].content[].text`). Hvis der foretages nogen maskering, erstatter
  det ændrede svar det oprindelige.

Sikkerhedsmekanismen blokerer aldrig; den tilføjer kun annoteringer (`meta.detections`,
`meta.redacted`) eller omskriver.

#### Valg pr. type, brugerdefinerede mønstre og registreringstællere

**Dashboard → Indstillinger → Sikkerhed → PII-maskering** vælger, _hvad_ der maskeres. Det
slår ikke maskering til: Det styres stadig af `PII_REDACTION_ENABLED` (anmodning) og
`PII_RESPONSE_SANITIZATION` (svar + SSE), som begge er slået fra som standard.

- **Valg pr. type** — de indbyggede id'er er angivet i
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Hvis værdien ikke er angivet, betyder det alle
  typer (adfærden, før denne indstilling blev indført). Anmodningsmotorens
  `ssn_us`-mønster knyttes til `ssn`. Skabeloner (Minimal, Standard, Finansiel,
  Brasiliansk, USA, Fuld) udfylder kun afkrydsningsfelterne i brugergrænsefladen.
- **Brugerdefinerede mønstre** — op til 20 regex- eller jokertegnsmønstre (`*` = op til 64
  tegn, der ikke er mellemrum, `?` = ét). Match bliver til `[CUSTOM_REDACTED]`.
  Hvert mønster behandles af `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): højst 500 tegn, flag begrænset
  til `g i m s u`, skal kunne kompileres, skal bestå `safe-regex` (katastrofal
  backtracking) og må ikke matche en tom streng eller en pladsholder for maskering.
  Et mønster, der ikke består, afvises både ved lagring og test, og en gemt række,
  der ikke består, springes over under kørsel i stedet for at blive kompileret. Brugerdefinerede mønstre
  køres kun, mens maskering er slået til.
- **Registreringstællere** — antal pr. type (aldrig matchede værdier), som opbevares i
  hukommelsen og nulstilles ved genstart (`src/lib/pii/piiDetectionStats.ts`). De stiger kun,
  mens maskering er slået til.

Indstillingerne findes i tabellen `key_value` (navneområde `pii_settings`,
`src/lib/db/piiSettings.ts`) og læses via en cache på 1 s. API:

| Metode | Sti                      | Formål                                                               |
| ------ | ------------------------ | -------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Flagtilstand, `enabledTypes`, `customPatterns`, registreringstællere |
| `PUT`  | `/api/settings/pii`      | Erstat `enabledTypes` (`null` = alle) og/eller `customPatterns`      |
| `POST` | `/api/settings/pii/test` | Prøvekør ét mønster mod et eksempel på højst 8 KB; intet gemmes      |

Alle tre kræver administrationsgodkendelse og validerer body'en med Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt-injektion (`promptInjection.ts`)

Registrerer fjendtlige strukturer i brugerleveret indhold og håndhæver den
konfigurerede politik. Adfærden styres af miljøvariabler og konstruktørindstillinger:

| Indstilling       | Miljøvariabel                                                                                                | Standard | Effekt                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiveret         | `INPUT_SANITIZER_ENABLED`                                                                                    | `true`   | Når værdien er `false`, afsluttes sikkerhedsmekanismen med det samme.                                                                                                                                                  |
| Tilstand          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                              | `warn`   | Politik for injektion: `block`, `warn` eller `log`. (`redact` accepteres af hensyn til bagudkompatibilitet, men fjerner **ikke** injektionstekst; omskrivning af PII i anmodninger styres af `PII_REDACTION_ENABLED`.) |
| Blokeringstærskel | Indstillingen `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Den laveste alvorsgrad, der kræves for at blokere. Medium overvåges kun som standard.                                                                                                                                  |

**Tilstandsprioritet** (`getMode`): kalderens `options.mode` →
`INJECTION_GUARD_MODE` **tilsidesættelse af DB-funktionsflag** (Dashboard → Indstillinger →
Funktionsflag) → miljøvariablen `INJECTION_GUARD_MODE` → miljøvariablen `INPUT_SANITIZER_MODE` →
`warn`. En tilsidesættelse fra dashboardet har derfor højere prioritet end miljøvariablerne, så brugergrænsefladen
Funktionsflag styrer den kørende sikkerhedsmekanisme direkte (uden genstart). DB-læsningen er fejlsikker:
Hvis der opstår en fejl, falder sikkerhedsmekanismen tilbage til den miljøbaserede adfærd, og når der ikke
er angivet nogen tilsidesættelse, er adfærden identisk med en fortolkning, der kun bruger miljøvariabler.

Registreringskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (fælles sæt af detektorer,
   der bruges andre steder i pipelinen).
2. Indbyggede `DEFAULT_GUARD_PATTERNS` (i øjeblikket `system_override_inline` og
   `markdown_system_block`, begge med alvorsgraden `high`).
3. Valgfrie `customPatterns`, der overføres via konstruktørindstillinger (strenge, regex
   eller poster af typen `{ name, pattern, severity }`).

Når `mode === "block"` **og** mindst én registrering opfylder tærsklen for
alvorlighedsgrad, returnerer `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I tilstandene `warn`/`log` logger guardrailen, men
tillader kaldet. Den delte hjælpefunktion `evaluatePromptInjection()` eksporteres også
til kaldere, der har brug for at evaluere prompts uden at gå gennem registreringsdatabasen.

**Scanningsgrænse (v3.8.20):** Detektoren undersøger kun de **første 16 KB** af
den sammenkædede prompttekst — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` udfører `slice(0, MAX_INJECTION_SCAN_BYTES)`, før
mønsterløkken køres. Injektionsdirektiver befinder sig tæt på starten af et input, så dette
begrænser regex-CPU/GC for payloads på flere hundrede KB uden at svække registreringen (jf.
#3932, #4041).

### Maskering af legitimationsoplysninger (`credentialMasker.ts`)

Kører på **begge** stadier, sidst i standardkæden (prioritet `95`). Bortredigerer
velkendte mønstre for API-nøgler/hemmelige tokens fra den udgående payload (beskedindhold,
argumenter til værktøjskald, værktøjsresultater) **og** udbyderens svar, så
legitimationsoplysninger, der indsættes i en prompt (eller returneres af et værktøjsresultat), ikke lækkes
til den eksterne udbyder eller tilbage til klienten.

- **Kun ved aktivt tilvalg**, samme konvention som bortredigering af personhenførbare oplysninger (i relation til fast regel nr. 20):
  deaktiveret, medmindre `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når funktionen er slået fra, gør guardrailen intet —
  den blokerer aldrig og omskriver aldrig.
- `redactCredentials()` gennemgår hele payload-/svartræet (`walkValue()`,
  sikkert mod prototypeforurening og sikkert ved cyklusser via `WeakSet`) og erstatter træffere med
  en `[REDACTED:<type>]`-pladsholder, idet kun de grene, der rent faktisk
  er ændret, klones.
- `CREDENTIAL_PATTERNS` dækker nøgler til LLM-udbydere (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokens (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøgler (Stripe, Square), cloud-
  nøgler (AWS-adgangsnøgle, Twilio, SendGrid, Mailgun), private nøgler/JWT'er,
  forbindelsesstrenge med legitimationsoplysninger (`mongodb://user:pass@...` osv.) samt
  et generisk mønster for værdier i `Authorization`-/`x-api-key`-/`api-key`-/`apikey`-headere.
  Headerlignende nøgler (`authorization`, `x-api-key`, `api-key`,
  `apikey`) bortredigeres strukturelt (kun værdien, mens skemapræfikser som
  `Bearer `/`Basic ` bevares) frem for via det generiske tekst-regex.
- Guardrailen blokerer aldrig; den omskriver kun (`modifiedPayload` /
  `modifiedResponse`) og tilføjer annoteringer (`meta.credentialsRedacted`, `meta.count`).

Regressionskontrol: `tests/unit/credential-masker-guardrail.test.ts`.

## Basiskontrakt (`base.ts`)

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
  block?: boolean; // true afbryder kæden med det samme
  message?: string; // vises ved blokering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres af preCall for at omskrive anmodningen
  modifiedResponse?: TValue; // returneres af postCall for at omskrive svaret
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

En guardrail signalerer "ingen ændring" ved at returnere enten `void`, `{}` eller
`{ block: false }`. Returnering af en `modifiedPayload`/`modifiedResponse` erstatter
den værdi, der sendes gennem kæden til efterfølgende guardrails.
`signal?: AbortSignal` overfører kalderens livscyklus til guardrails. En afbrudt anmodning er den bevidste fail-open-undtagelse: mediebroer stopper arbejdet og rydder op uden at gendanne rå medier til et mål, som man ved ikke understøtter dem.

## Register (`registry.ts`)

Singletonen `guardrailRegistry` eksponerer:

- `register(guardrail)` — tilføjer en guardrail (eller erstatter den ud fra det normaliserede navn) og
  sorterer igen efter stigende `priority`.
- `clear()` / `list()` — administrative hjælpefunktioner.
- `runPreCallHooks(payload, context)` — gennemløber aktive guardrails, sender
  payloaden videre gennem `modifiedPayload` og stopper ved den første `block: true`.
- `runPostCallHooks(response, context)` — samme forløb på svarsiden.
- `resetGuardrailsForTests({ registerDefaults })` — rydder tilstanden og
  genregistrerer eventuelt standarderne for ren testisolering.

Begge kørere returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
hvor `results` er et array af `GuardrailExecutionResult`-poster, der indeholder
felterne `blocked`, `skipped`, `modified`, `error` og `meta` for hver guardrail,
hvilket er nyttigt til sporing.

### Deaktivering af guardrails pr. anmodning

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
deduplikeret liste over navne på guardrails, som skal springes over for den aktuelle
anmodning. Der er fem kanaler, som læses i denne rækkefølge og flettes til én liste
(den første forekomst bevares ved deduplikering):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` i anmodningens body (øverste niveau)
3. `metadata.disabledGuardrails` i anmodningens body (kun når `metadata` er et objekt)
4. Headeren `x-omniroute-disabled-guardrails`
5. Den ældre header `x-disabled-guardrails`

Alle fem kanaler flettes, inklusive de to headere: Hvis både
`x-omniroute-disabled-guardrails` og `x-disabled-guardrails` sendes, springes
unionen af deres lister over, og en tom moderne header skjuler ikke længere den
ældre
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), rettet i
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Værdier kan være arrays af strenge eller en kommasepareret streng; navne trimmes
og normaliseres til kebab-case med små bogstaver (`pii_masker` → `pii-masker`), og tomme
poster fjernes. Resultatet overføres gennem `context.disabledGuardrails`
til registret, som springer matchende guardrails over (`skipped: true` i `results`).

Deaktiveringslisten påvirker kun **registret**. Prompt-injection i `block`-tilstand er
en obligatorisk grænse: injection-guard-middlewaren
(`src/middleware/promptInjectionGuard.ts`) kalder `evaluatePromptInjection()`
uden nogen deaktiveringsliste, som kalderen kan styre (det overflødige
`resolveDisabledGuardrails({ body })`-kald, den tidligere foretog, blev fjernet i
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), så en anmodning,
der deaktiverer `prompt-injection`, afvises stadig i `block`-tilstand. Dette er
tilsigtet. Deaktiveringskanalerne styres af kalderen (anmodningens body,
metadata, headere), og en kalder må ikke kunne slå en sikkerhedskontrol fra,
som operatøren har konfigureret
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Headerunionen
fra [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ændrer kun, hvilke guardrails i registret der springes over; den gør det ikke muligt
for en klient at omgå middlewaren. Obligatoriske guardrail-politikker pr. nøgle
og pr. gruppe spores i v4-RFC'en [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Se [Dækning og begrænsninger](#coverage-and-limits).

## Udførelsesrækkefølge

For hver anmodning, der passerer gennem `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts` (chat-ruterne angivet under
[Dækning og begrænsninger](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` opbygger listen over elementer, der skal springes over, ud fra API-nøgle, body
   og headers.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kører guardrails i stigende
   prioritetsrækkefølge:
   - Deaktiverede guardrails registreres som `skipped`.
   - Hver guardrails `preCall` kan omskrive payloaden via `modifiedPayload`.
   - Den første `block: true` kortslutter kæden, og handleren returnerer
     et afvisningssvar fra guardrailen.
3. Den (potentielt omskrevne) payload sendes videre til kombinationsrouting og upstream-
   videresendelse.
4. **Kun ikke-streaming:** Når svaret er samlet,
   kører `guardrailRegistry.runPostCallHooks(...)` den samme kæde på
   svaret. `block: true` her kasserer upstream-svaret og returnerer HTTP 400. Streamede svar springer dette trin helt over.

Guardrails, der udløser exceptions, registreres med `error: <message>` og logges via
`logger.warn`, men kæden fortsætter — designet følger fail-open-princippet.

## Dækning og begrænsninger

Guardrail-registret er kun forbundet med chat-pipelinen. Disse begrænsninger er
fastholdt af `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` og
`tests/unit/guardrail-pipeline-characterization.test.ts`; opdater disse tests
bevidst, når adfærden ændres.

### Hvor hooks køres

| Hook/kontrol                        | Køres på                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Anmodninger håndteret af `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (og `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` og Telegram-chatproxyen. Desuden dashboardets testendpoint `/api/guardrails/test`. En pre-call-blokering returnerer HTTP 400. |
| `runPostCallHooks`                  | Kun **ikke-streamede** chatsvar (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Streamede svar når aldrig dertil.                                                                                                                                                                                                                                                                                                             |
| Streaming-PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), tilkoblet i `streamingPipeline.ts`, når `PII_RESPONSE_SANITIZATION` er slået til. Det er ikke en guardrail, så deaktiveringskanalerne påvirker det ikke.                                                                                                                                                                                                                |
| Injection-guard-middleware (legacy) | Alle prompt-bærende `/v1`-ruter, inklusive chat-ruterne (se [rutedækning](#injection-guard-route-coverage--red-team-phase-8--block-d)). Kun prompt-injektion.                                                                                                                                                                                                                                                                         |

### Hvad der ikke er dækket

- **Medie-, embedding- og dataruter** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) når aldrig registret. Der
  køres ingen PII-maskering, legitimationsoplysningsmaskering eller modalitetsbro dér. Deres eneste
  kontrol er det ældre injection-guard-middleware.
- **Streamede svar** får ingen post-call-guardrails: ingen post-call-kørsel af `pii-masker` eller
  `credential-masker` og ingen post-call-blokering. Kun streaming-PII-
  transformationen anvendes (når `PII_RESPONSE_SANITIZATION` er slået til). En legitimationsoplysning,
  der returneres i et streamet svar, bliver ikke maskeret.
- **Deaktiveringskanaler kontra middleware (tilsigtet):** Middlewaret evaluerer
  prompt-injektion med sit eget kald til `evaluatePromptInjection()` uden
  at videregive nogen deaktiveringsliste, som kalderen kontrollerer. `block`-tilstand er en obligatorisk
  grænse, som deaktiveringer kontrolleret af kalderen ikke kan omgå, heller ikke på chat-ruter
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Deaktivering af
  `prompt-injection` springer kun guardrailen i registret over.

### Hvad der ser et svar før post-call

På ikke-streaming-stien er rækkefølgen: hukommelsesudtrækning → udførelse af indbyggede værktøjer
→ post-call-guardrails → afslutning ved post-call-blokering → lagring i semantisk cache.

- **Hukommelsesudtrækning** og **værktøjsudførelse** ser svaret, før post-call-
  sikkerhedsregler kan omskrive eller blokere det. Siden
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) køres den
  udtrukne tekst fra hukommelsesudtrækningen gennem `sanitizePII`, når
  `PII_RESPONSE_SANITIZATION` er aktiveret (både ved streaming og uden
  streaming), men et svar, som senere blokeres af post-call, er stadig blevet
  videregivet til hukommelsen og værktøjerne.
- **Den semantiske cache** gemmer svaret efter post-call, så den gemmer det
  omskrevne svar, og et blokeret svar cachelagres aldrig. Cacheposter er
  nøgleinddelt pr. API-nøgle.

## Konfiguration

Miljøvariabler, der læses af de indbyggede sikkerhedsmekanismer:

| Variabel                              | Bruges af                 | Effekt                                                                                                               |
| ------------------------------------- | ------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Indstil til `false` for at deaktivere registrering fuldstændigt.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injektionspolitik: `warn`, `block` eller `log`. Den ældre værdi `redact` omskriver ikke injektionstekst.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tilstand for injektionsbeskyttelsen; også et DB-funktionsflag, der **tilsidesætter** miljøvariablerne (DB > ENV).    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Laveste alvorsgrad, som `MODE=block` afviser: `high` (standard), `medium` eller `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Ældre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                   |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Når værdien er `true`, anonymiseres personhenførbare oplysninger i anmodningen (uafhængigt af injektionstilstanden). |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Styrer maskeringsfunktionens adfærd på svarsiden.                                                                    |

Modality Bridge-sikkerhedsmekanismerne læser kørselskonfigurationen fra det DB-understøttede indstillingslager
(`getSettings()`), ikke fra miljøvariabler. Visions primære nøgler er
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De ældre
`visionBridge*`-nøgler accepteres kun som den dokumenterede læsereserveløsning i én cyklus;
skrivninger fra kontrolpanelet bruger de primære nøgler. Standardværdierne og reserveløseren
findes i `src/shared/constants/modalityBridgeDefaults.ts`, mens ældre
konstanter er bevaret i `src/shared/constants/visionBridgeDefaults.ts`.

Lyd bruger `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips` samt de delte
`modalityBridgeCache*`-indstillinger. Lyd har ingen reserveløsning til ældre nøgler, fordi disse
nøgler blev introduceret med Modality Bridge-skemaet.

Video bruger `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout` samt de delte `modalityBridgeCache*`-indstillinger.
Funktionen er som standard deaktiveret, fordi FFmpeg/ffprobe er valgfrie driftsmæssige
afhængigheder, og billedtekstning af videobilleder øger svartiden og modelomkostningerne.

## Brugerdefinerede sikkerhedsrækværk

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

Trin:

1. Opret `src/lib/guardrails/myGuardrail.ts`, som udvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Registrer enten ved import (tilføj fra `registerDefaultGuardrails`), eller
   kald `guardrailRegistry.register(...)` under kørsel — registreringsdatabasen erstatter
   ethvert tidligere sikkerhedsrækværk med det samme normaliserede navn.
4. Tilføj tests under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Brug `resetGuardrailsForTests()` mellem tests for at starte fra en kendt tilstand.
Angiv `{ registerDefaults: false }` for at starte med en tom registreringsdatabase og
kun registrere de sikkerhedsrækværk, der testes. Vision Bridge accepterer
afhængighedsinjektion (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge
har tilsvarende integrationspunkter for indstillinger, funktionalitet, valg af
STT-model, kontrol af legitimationsoplysninger og transskription. Tests kan derfor
afprøve begge flows uden adgang til database eller netværk.

## Se også

- `src/lib/guardrails/` — implementering
- `src/shared/utils/inputSanitizer.ts` — fælles detektor, der driver
  promptinjektions- og PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — standardværdier for Vision Bridge og
  modelliste for tvungen bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — fælles standardværdier for Vision/Audio under kørsel
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (circuit breaker, nedkølingsperioder)
- `docs/reference/ENVIRONMENT.md` — komplet reference til miljøvariabler

## Rutedækning og red-team-test for injektionsbeskyttelse (fase 8 · blok D)

Injektionsbeskyttelsen (`createInjectionGuard` / `withInjectionGuard`) dækker alle ruter,
der accepterer brugerprompter. Den respekterer `INJECTION_GUARD_MODE` (standardværdien `warn` = kun logning;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardtilstand |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

Tekstudtrækning (`extractMessageContents`) dækker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (hver nat, `nightly-llm-security.yml`):** promptfoo validerer, at hver rute blokerer
OWASP-LLM-korpusset i `INJECTION_GUARD_MODE=block`; garak kører sonderinger (springes over uden hemmelighed).
`moderations` er inkluderet for at sikre konsistens. Blokeringstilstand er en obligatorisk grænse: `evaluatePromptInjection()`
ignorerer deaktiveringslisten pr. forespørgsel, som middleware sender til den, så `disabledGuardrails`
**ikke** undtager en rute fra den ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Det natlige workflow (`.github/workflows/nightly-llm-security.yml`, cron + manuel
igangsættelse) har to jobs:

- **`promptfoo-guard` (blokerende)** — kører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hver adversarial test (f.eks. "ignore all
  previous instructions…", jailbreaks i DAN-stil) kontrollerer, at svaret indeholder
  `error.code === "SECURITY_001"`, dvs. at sikkerhedsrækværket faktisk afviste forespørgslen.
- **`garak` (vejledende)** — kører garak `--probes promptinject,dan,leakreplay`
  mod en lokal OmniRoute-instans (`http://localhost:20128/v1`). Betinget af en
  udbyderhemmelighed (`PROMPTFOO_PROVIDER_KEY`); springes problemfrit over og har suffikset
  `|| true`, så jobbet rapporterer uden at få CI til at fejle.

Dækningen af sikkerhedshjælperen (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle `/v1`-ruter, der modtager prompter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` af
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
