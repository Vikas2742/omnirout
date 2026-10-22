# Guardrails (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Kilde til sannhet:** `src/lib/guardrails/`
> **Sist oppdatert:** 2026-10-17 — v3.8.52 (la til [Dekning og begrensninger](#dekning-og-begrensninger):
> hvilke ruter og responsstier hookene når, de sammenslåtte deaktiveringsheaderne (#16412), injeksjonsblokkmodus
> som en obligatorisk grense (#16413), og hva som ser en respons før post-call)

Guardrails håndhever sikkerhet, policy og innholdstransformasjoner ved grensen
mellom OmniRoute og oppstrømsleverandører. Hver guardrail kan inspisere (og
valgfritt avvise, transformere eller annotere) forespørselsnyttelaster (`preCall`) og
oppstrømsresponser (`postCall`).

Systemet er **fail-open**: hvis en guardrail kaster en feil under kjøring, registrerer
registeret feilen og fortsetter med neste guardrail i stedet for å feile
forespørselen. Blokkering er en eksplisitt beslutning (`block: true`), aldri en tilfeldighet.
Det eneste unntaket er en avbrutt forespørsel: når kallerens `signal` er avbrutt,
avviser en guardrail som kaster, kjøringen av hooken i stedet for å bli hoppet over.

Hokene kjører **ikke** på hver rute eller hver respons. Les
[Dekning og begrensninger](#dekning-og-begrensninger) før du stoler på en guardrail som
en sikkerhetskontroll.

## Innebygde guardrails

Registeret laster automatisk inn seks guardrails i prioritetsrekkefølge ved import
(se `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Navn                | Fase(r)        | Fil                   |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Lavere prioritetstall kjører **først**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

GLM 5.3-basismodellen og `glm-5.3-{low,high,max}` har eksplisitt
`supportsVision:false`-register-/spesifikasjonsmetadata. GLM 5.3 Flash-variantene
forblir native-vision-modeller. Claude Codes `/v1/messages`-rute går inn i
den delte `handleChat`-pre-call-guardrail-kjeden **før** Claude-til-OpenAI-
oversettelse; nestede `Read`-verktøyresultatbilder må beskrives eller håndteres
før den oversettelsen løfter dem inn i OpenAI `image_url`-innhold (#17069).

Avskjærer bildeholdige forespørsler rettet mot **ikke-vision-modeller** og enten
omdirigerer hele forespørselen til en vision-kapabel modell eller erstatter bildedelene
med tekstbeskrivelser produsert av en konfigurerbar vision-modell før
oppstrømskallet. Dette lar kun-tekst-leverandører håndtere multimodale nyttelaster
gjennomsiktig.

Flyt:

1. Hopp over hvis målmodellen allerede støtter vision (med mindre den vises i
   den tvungne bro-listen `isVisionBridgeForcedModel`).
2. Trekk ut bildedeler via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), som delegerer til den **enhetlige mediedetektoren**
   `detectMediaParts()` i `open-sse/utils/mediaParts.ts` — den
   eneste kilden til sannhet som deles med kompatibilitetsfilteret for kombinasjoner.
   Utvinning er allowlistet til formene `replaceImageParts` kan sette tilbake
   (uttrekk↔erstatning-kontrakten): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"`, og Responses
   API `input_image`. Matchende bilder nestet inne i Claude Code
   `tool_result.content` og Responses-verktøyutdata trekkes også ut og
   erstattes på sine opprinnelige stier; kun-indikator-former er materiale for kombinasjonsfilteret
   og trekkes ikke ut.
   Hopp over hvis ingen funnet.
3. Løs opp kjøretidskonfigurasjon via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nye `modalityBridge*`-
   innstillingsnøkler vinner; eldre `visionBridge*`-nøkler forblir en **én-syklus-
   fallback** (tilbakerullingsvindu). Hopp over før noen mediegjennomgang når
   broen er deaktivert.
4. Modusvelger (`modalityBridgeVisionMode`, se tabellen nedenfor) avgjør
   omdirigering vs beskrivelse. Omdirigering returnerer `modifiedPayload` med kun
   `model` byttet ut, pluss meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beskrivelsessti: begrens bilder til `maxImages`, komponer den oppgavebevisste ledeteksten,
   konsulter beskrivelsescachen, kall vision-modellen **parallelt**
   (`Promise.allSettled`), og injiser `[Image N]: <description>`-tekstdeler på
   deres plass. En mislykket beskrivelse gir `null`: det rå bildet bevares for
   ukjente/vision-kapable mål (#4012), men et **bekreftet kun-tekst direkte
   mål** eller en null-vision-kombinasjon får en eksplisitt
   `(unavailable — no vision-capable provider connected)`-tekststub for
   hvert ubestemte bilde, inkludert delvise feil og bilder utover
   beskrivelseskallets tak (#17069). Den eksisterende fallbacken for beskrivelse av
   alle-feilet-kombinasjoner forblir på plass (#8430).
6. Returner `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Modusvelger (`modalityBridgeVisionMode`)

| Modus      | Standard | Virkemåte                                                                                                                                                                                                                                                                                                   |
| ---------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Eldre heuristikk, uendret (#6640/#7204): modeller som ikke er kombinasjonsmodeller/`auto/`, omdirigeres til den beste synsmodellen med mindre den opprinnelige modellen allerede har brukbar legitimasjon (da beskrives bildet); kombinasjonsmål beskriver alltid.                                          |
| `describe` |          | Beskriv alltid — omdirigeringsblokken hoppes over i sin helhet; modellen brukeren har valgt, svarer alltid.                                                                                                                                                                                                 |
| `reroute`  |          | Tving omdirigering: sperren som beholder modellen med legitimasjon, omgås. Legitimasjonssperren for omdirigerings-**målet** gjelder fortsatt — når det ikke finnes et brukbart synsmål, blokkerer broen med en tydelig feil i stedet for å beskrive eller sende råbilder til et mål som bare støtter tekst. |

Tvungne moduser avbryter **før** autoheuristikken kjøres; virkemåten for `auto`
er byte-identisk med sikkerhetsmekanismen fra før PR-1.

#### API-nøkkelomfang (`visionBridgeKeyScope.ts`)

Når innringerens API-nøkkel begrenser `allowedConnections`, kvotepuljer
(`allowedQuotas`) eller modeller (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), velger broen bare
omdirigerings- og beskrivelsesmodeller som nøkkelen kan bruke, på tilkoblinger
som nøkkelen kan bruke. Beskrivelseskallet går deretter alltid gjennom
OmniRoute-selvsløyfen med `x-omniroute-self-loop-key-id`-hodet, slik at den
mottakende chatforespørselen håndhever nøkkelens tilkoblings- og modellpolicy
på nytt. `enforceApiKeyPolicy()` respekterer bare dette hodet sammen med
selvsløyfens bearer-token, så det kan bare begrense tilgangen, og en ID som
ikke kan slås opp, avvises.

Hvis ingen synsmodell er tillatt for nøkkelen, avviser et **bekreftet mål som
bare støtter tekst** bildeforespørselen lokalt med en tydelig HTTP 400-feil i
stedet for å videresende bildebyte til en oppstrømstjeneste som ikke kan
behandle dem (#17069). For mål med ukjent eller innebygd synsfunksjonalitet
beholder beskrivelsesbanen sin tidligere fail-open-virkemåte (metadata
`{ skipped: true, reason: "no_permitted_vision_model" }`). Forespørsler uten
nøkkel og nøkler uten disse begrensningene fungerer nøyaktig som før.

#### Oppgavebevisst beskrivelsesledetekst (`modalityBridgeVisionTaskAware`)

Standardverdi er **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`)
legger teksten fra den **siste brukermeldingen** (avkortet til 500 tegn) til
den grunnleggende beskrivelsesledeteksten, slik at beskrivelsen styres mot det
brukeren faktisk spurte om (codex-vision-proxy-mønsteret), og ber synsmodellen
om å transkribere synlig tekst. Når flagget er slått av — eller det ikke finnes
noen brukertekst — brukes den grunnleggende ledeteksten uendret.

Beskrivelsesselvsløyfens egen OpenAI-kompatible forespørsel
(`callVisionModelSingle()` i `visionBridgeHelpers.ts`) ber alltid om
`image_url.detail: "high"` — ubetinget, for alle innringere/leverandører, og
uten å være avhengig av noe klientsignal. Sampling med lav detaljgrad
reduserer OCR-nøyaktigheten for nettopp teksttranskriberingsoppgaven som denne
ledeteksten ber om, så selve beskrivelseskallet ber alltid om høy detaljgrad,
uavhengig av detaljnivået den opprinnelige innkommende forespørselen brukte.
Dette påvirker bare den interne beskrivelsesforespørselens brødtekst; det
endrer ikke hvordan OmniRoute videresender innringerens egen
`image_url.detail` i den primære forespørselen — denne standardverdien brukes
separat og bare for oppdagede OpenCode-klienter i `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Anthropic-grenen i
wire-formatet til beskrivelsesselvsløyfen har ikke noe `detail`-felt og
påvirkes ikke av noen av standardverdiene.

#### Grense for beskrivelsesresultat (`modalityBridgeVisionMaxChars`)

| Nøkkel                         | Standard | Område              |
| ------------------------------ | -------- | ------------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` eller 100–50000 |

`0` (standard) betyr **ingen grense** — beskrivelsen som returneres av
`callVisionModel()`, sendes videre uendret, slik at eksisterende virkemåte
bevares. Enhver verdi i området 100–50000 avkorter beskrivelsen med et
`…`-suffiks før den flettes inn igjen som `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` i `src/lib/guardrails/visionBridge.ts`).
Øk denne verdien for OCR-oppgaver med mange detaljer der den nedstrøms
modellen trenger hele transkripsjonen; reduser den for å begrense tokenbruken
fra pratsomme synsmodeller. Feltet på kontrollpanelet finnes under Avansert i
Syn-fanen (`modality-bridge-max-chars` i `ModalityBridgeVisionTab.tsx`) og
justerer enhver verdi mellom 1 og 99 opp til minimumsverdien 100, samtidig som
en eksplisitt `0` forblir uendret — `0` er en gyldig Zod-verdi i seg selv
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ikke bare
standardverdien for «ikke angitt».

#### Beskrivelsesbuffer (`modalityBridge/bridgeCache.ts`)

LRU- og TTL-buffer i minnet for beskrivelsesresultater, delt på tvers av hele
prosessen. Nøkkel = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
med lengdeprefiksramming (ingen kollisjoner mellom feltgrenser).
Modellkomponenten er den **konfigurerte** bromodellen, ikke modellen som
faktisk svarte — `callVisionModel` kan bruke en reservemodell internt, og
nøkkelgenerering per forsøk ville fragmentert bufferen. Mislykkede
beskrivelser bufres aldri. Innstillinger:

| Nøkkel                          | Standard | Område  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalisering av eksterne bilder (selvløkke for beskrivelse/base64-henting)

Når broen selv henter et **eksternt** bilde — Anthropic-selvkallet for beskrivelse og base64-konverteringen for claude-wire-formatet (`ensureBase64ImagesForClaudeWire`), begge via `fetchRemoteImageAsDataUri()` i `visionBridgeHelpers.ts` — sendes den resulterende data-URI-en gjennom `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) før den bygges inn i forespørselen til vision-modellen. For store bilder skaleres ned til en **langsideslengde på 2048 px** (i samsvar med grensen for størrelsesendring som OpenAI/Anthropic allerede bruker på serversiden), noe som reduserer opplastingsmengde og ventetid uten å endre hva vision-modellen ser. Størrelsesendringen bruker `sharp`, som lastes via dynamisk import: På en plattform der den plattformspesifikke binærfilen ikke kan lastes, **kaster aldri** `normalizeDataUri()` et unntak — den faller tilbake til å sende de opprinnelige bytene uendret videre, slik at banen for beskrivelse/base64-konvertering alltid fortsetter å fungere. Byter som ikke representerer et bilde (en henting som ikke returnerte et dekodbart bilde), sendes også uendret videre. Denne normaliseringen er begrenset til bilder som broen henter for sitt eget selvkall — den brukes aldri på innringerens ubehandlede payload som sendes direkte videre, i samsvar med prinsippet om at mutasjon kun skal skje ved aktivt samtykke (ufravikelig regel nr. 20).

#### Innstillingsskjema + migrering

De nye `modalityBridge*`-nøklene Zod-valideres i `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*`-trioen og `modalityBridgeAudio*`-gruppen som brukes av Audio Bridge. Migreringen `141_modality_bridge_settings.sql` kopierer eksisterende eldre `visionBridge*`-verdier til de tilsvarende nye nøklene (idempotent og overskriver aldri en `modalityBridge*`-verdi angitt av operatøren). De eldre nøklene godtas fortsatt som reserveløsning for lesing i én utgivelsessyklus.

#### Transparens-header + statistikk

Svar som er transformert ved beskrivelse, inneholder `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (opprettet av `buildModalityBridgeHeader()` i `modalityBridge/bridgeStats.ts` og lagt til av `withModalityBridgeHeader()` i `src/sse/handlers/chatHelpers.ts`). Omdirigerte forespørsler får **ingen** header — payloaden ble ikke endret, og modellbyttet er allerede synlig i `model`-feltet i svarteksten.

`GET /api/modality-bridge/stats` (administrasjonsautentisering, samme nivå som `GET /api/settings`) returnerer de prosessinterne tellerne per modalitet `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` for `vision`, `audio` og `video`. `averageLatencyMs` bruker `latencySamples`, ikke alle forsøk, som nevner. En operasjon uten tidtaking oppretter ikke kunstig en måling på null millisekunder. `bridged` forblir det bakoverkompatible aliaset for vellykkede konverteringer. Mislykkede forsøk øker ikke denne telleren.
Tellerne nullstilles når prosessen startes på nytt, slik det er tiltenkt
(telemetri, ikke regnskapsføring).

#### Konfigurasjon i kontrollpanelet

Den dedikerte kontrollpanelsiden er `/dashboard/settings/modality-bridge`. De URL-adresserbare fanene `Vision`, `Audio` og `Video` bevarer spørringsparametere ved bytte av `tab`-verdien. Vision-fanen viser aktivering, modus, modellvalg (inkludert den automatiske standardinnstillingen), oppgavebevisst prompting, avanserte grenser for tidsavbrudd/bilder/beskrivelseslengde/hurtigbuffer, kjøretidstellere og en beskyttet eksempelforespørsel. Audio-fanen er også aktiv: Den viser aktivering, en modellvelger med Auto begrenset til STT-modeller, grenser for tidsavbrudd og maksimal klipplengde, lydtellere og en `input_audio`-eksempeltest. Video-fanen er funksjonell: Den rapporterer kjøretidstilstanden for FFmpeg/ffprobe — én av fire eksplisitte UI-tilstander (`unknown` mens kontrollen pågår eller ikke kunne fullføres, `restricted` på en kontrollpanelvert som ikke er loopback, der kontrollen hoppes over på klientsiden, `unavailable` etter at kontrollen er utført og komponentene er bekreftet å mangle, eller `available` med FFmpeg/ffprobe-versjonene) — lagrer grenser for aktivering/modell/bilderammer/video/tidsavbrudd, filtrerer modellvelgeren til modeller som støtter vision, og viser videotellere.

Det tidligere Vision Bridge-kortet under KI-innstillinger er en kompatibilitetslenke til den nye siden. Det inneholder ikke lenger en separat kopi av skjemaet. Media Providers lenker også arbeidsflytene Image-to-Text og Speech-to-Text til de tilsvarende Modality Bridge-fanene uten å fjerne den eksisterende Speech-to-Text-sandkassen.

**Omgåelse av adgangskontroll for selvløkke:** Når beskrivelseskallet rutes gjennom OmniRoutes egen `/v1`-selvløkke (modell fra en ikke-standard leverandør), sender underforespørselen `x-omniroute-admission-bypass: internal` og autentiseres med den løste selvløkkelegitimasjonen — den lokale `sk_omniroute`-sentinelen i lokal modus eller den operatørkonfigurerte miljønøkkelen `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), slik at distribusjoner med `REQUIRE_API_KEY=true` fortsatt kan kjøre beskrivelseskallet. Omgåelsen godtas bare for akkurat disse legitimasjonsopplysningene, slik at eksterne klienter ikke kan bruke headeren til å hoppe over adgangskontrollen.

Eldre standardverdier finnes i `src/shared/constants/visionBridgeDefaults.ts`. De nye standardverdiene for modus, oppgavebevissthet og hurtigbuffer samt innstillingsoppløseren finnes i `src/shared/constants/modalityBridgeDefaults.ts`. Sikkerhetsmekanismen eksponerer et `deps`-konstruktørvalg, slik at tester kan injisere falske implementasjoner av `getSettings` og `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fanger opp chatforespørsler som inneholder lyd, før de når et mål som ikke er kjent for å godta lydinndata. Den omdirigerer aldri chatforespørselen: Lyddelene transkriberes gjennom det eksisterende OpenAI-kompatible multipart-endepunktet, og den valgte chatmodellen fortsetter med teksttranskripsjoner.

Flyt:

1. Løs opp `supportsAudio` gjennom `getResolvedModelCapabilities()`. Eksplisitt
   metadata i leverandørregisteret har forrang, deretter statisk modellmetadata, deretter synkronisert
   `modalities_input`. En deklarert inndataliste uten `audio` er `false`; finnes det ikke
   kapabilitetsbevis, forblir verdien `null`. Både `false` og `null` aktiverer den
   konservative broen, mens `true` omgår den.
2. Løs opp `modalityBridgeAudio*`-innstillingene og trekk ut sammenføybare toppnivå-
   lyddeler fra hver melding via den delte `detectMediaParts()`-
   detektoren. Støttede wire-former er OpenAI `input_audio`, `audio_url` og
   `source.media_type: "audio/*"`. Nestet lyd oppdages for ruting, men fjernes
   ikke av sammenføyningsbanen. Arbeidet begrenses av `modalityBridgeAudioMaxClips`;
   senere deler forblir urørt.
3. Følg en konfigurert `provider/model`, eller la `selectAudioBridgeModel()` gå gjennom
   `AUDIO_TRANSCRIPTION_PROVIDERS` i stabil katalogrekkefølge og velge den første
   modellen med en brukbar aktiv leverandørlegitimasjon.
4. `callAudioTranscription()` konverterer base64/data-URI-lyd til en multipart
   `file`, eller laster ned en ekstern `audio_url` via den utgående vakten som kun tillater offentlige adresser,
   med DNS-pinning og en grense på 25 MB. Deretter sender den filen og den valgte
   modellen med POST til den lokale selvsløyfen `/v1/audio/transcriptions`, autentisert med
   `resolveSelfLoopBearer()`. Den eksisterende transkripsjonsruten utfører vanlig
   oppslag av legitimasjon, håndtering av nedkjøling/ratebegrensning og leverandørutsending.
5. Vellykkede kall erstatter delene sine med `[Audio N]: <transcript>`. Kall
   kjøres med `Promise.allSettled`: en enkelt feil bevarer den opprinnelige
   lyddelen (#4012-kontrakten). Hvis hvert kall feiler og det er bevist at målet har
   `supportsAudio === false`, blir delene
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-kontrakten). For
   et ukjent mål (`null`) forblir et resultat der alle kall feilet, urørt. Et bevist
   tekstmål uten brukbar STT-legitimasjon får samme eksplisitte stubb
   uten å sende et nettverkskall.

Vellykkede transkripsjoner bruker den prosessomfattende LRU/TTL-cachen til Modality Bridge. Nøkkelen
kombinerer lydreferansen, den stabile operasjonsetiketten `audio-transcription`
og den valgte STT-modellen; feil caches aldri. Lydforsøk oppdaterer
de delte tellerne `bridged`, `cacheHits`, `failures` og `lastUsedAt`.
Transformerte svar har
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; urørte
forespørsler får ikke noe Audio Bridge-segment.

Kjøretidsinnstillinger er DB-baserte og Zod-validert:

| Nøkkel                        | Standard | Område            |
| ----------------------------- | -------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                 |
| `modalityBridgeAudioModel`    | `""`     | Auto eller STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10              |

Den delte cachen styres fortsatt av `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` og `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Avskjærer toppnivå-videodeler i Chat Completions `messages` og Responses
API `input` før et mål uten kjent innebygd videostøtte kalles.
Støttede former er `input_video`, `video_url`, `video_source`, HTTPS-URL-er
og `data:video/*;base64,...`-data-URI-er. Vanlige filnavn i tekst behandles ikke
som video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) eier gjennomgang av forespørsler,
kapabilitets-/policykontrollen, aggregering per forespørsel og svarets nyttelast.
Arbeid per video – innhenting, cachen for hele resultatet, beskrivelse av en
bildesekvens (som fuserer en eventuell lydtranskripsjon deklarert av kaller) og
metrikker/avbrudd/opprydding per forsøk – er skjult bak `processVideoPart` i
`videoBridgePipeline.ts`, som kalles én gang per videodel i løkken til `preCall`.
Den modulen definerer også de eksplisitte portgrensene `VideoMediaBrokerPort`
(innhenting av bytes og uttrekk av samplede bilder), `VideoAudioTranscriptionPort`
(fusjonering av en lydtranskripsjon deklarert av kaller med de samplede bildetekstene) og
`VideoDrilldownPort` (persistensgrensen for bildenedboring; ennå ikke koblet
inn i `processVideoPart` – bare den separate ruten `/api/modality-bridge/video/drilldown`
skriver nedboringsoppføringer i dag).

Den offentlige forespørselsbanen `/v1` importerer eller kaller aldri en underprosess. Eksterne
videoer lastes ned med en grense på 50 MiB; innebygde base64-videoer har en
konservativ dekodet grense på 36 MiB per video, slik at modell-/meldings-/innrammingskonvolutten
kan holde seg innenfor adgangsgrensen på 50 MiB for offentlige JSON-forespørsler. Lengde på innebygd data
og estimater for dekodet størrelse kontrolleres før allokering. HTTPS kreves
for den opprinnelige eksterne URL-en og hver omdirigering, ved hjelp av den eksisterende
utgående vakten som kun tillater offentlige adresser, med DNS-pinning. Bytene krysser deretter den eksakte interne
brokergrensen `POST /api/modality-bridge/video/extract`. Den ruten er både
`LOCAL_ONLY` og `SPAWN_CAPABLE`, godtar bare en per-prosess autentisert,
klarert loopback-forespørsel, og godtar aldri en URL, filsystembane, kjørbar fil
eller argumentliste. API-pipelinen for kroppsstørrelse og behandlerens inkrementelle kroppsleser
håndhever uavhengig en grense på 50 MiB for brokerinndata. Den avgrensede køen kjører
én uttrekking om gangen, tillater fire ventende jobber og begrenser ventende inndata til
100 MiB.

I brokeren leser `ffprobe` en privat lokal fil; den faste formatallowlisten utelater spilleliste- og manifestformater. For tillatte containere i MOV-familien forblir eksterne MOV-datareferanser deaktivert som standard, og den faste kommandoen aktiverer dem ikke eksplisitt. Både `ffprobe` og `ffmpeg` bruker protokollallowlisten som bare tillater `file`, én tråd, faste argumentmatriser, ingen shell og kjørbare filer som løses opp fra `PATH`. Cover-strømmer med vedlagt bilde er ikke spillbare kandidater. Alle spillbare strømmer må oppfylle grensene, og en eksplisitt strøm foretrekkes fremfor den deterministiske fallbacken med lavest indeks. Videoer er begrenset til 600 sekunder, 8 192 piksler per dimensjon og 33 554 432 kildepiksler. FFmpeg sampler 1–16 JPEG-rammer ved midtpunktet, skalerer ned den lange kanten til maksimalt 1 024 piksler uten å skalere opp mindre inndata, og mottar aldri en URL. Samplingen er `uniform` som standard. De valgfrie `scene_aware`- og de eksperimentelle `segment_aware`-policyene utfører én ekstra fast FFmpeg-kjøring over den allerede validerte lokale strømmen, velger avgrensede `showinfo`-scenetidsstempler og faller deterministisk tilbake til de samme uniforme midtpunktene ved detektorfeil, tidsavbrudd, feilformet utdata eller et tomt kandidatsett. Segment-aware-modus fordeler midtpunktsutvalg proporsjonalt med de validerte sceneintervallene; segment-aware-evidens og fallback-atferd er beskrevet nedenfor. Den harde grensen på 16 rammer brukes etter utvalget i hver policy. Når en scene-aware-forespørsel bare har et budsjett på én ramme, bruker den det uniforme midtpunktet i det aktive vinduet for hele videoen eller fokusvinduet og rapporterer `policyEffective: uniform`: en enkelt valgt sceneramme kan ikke bevare begge tidsendene. En kaller kan eventuelt oppgi et endelig fokusvindu (`start`/`end` i sekunder); grensene klemmes til mediet, omvendte eller ikke-endelige vinduer avvises, og alle samplingspolicyer utføres bare innenfor det normaliserte intervallet. Det resulterende vinduet inkluderes i samplingsmetadata og i prefikset for den ikke-klarerte beskrivelsen, slik at nedstrømsmodeller kan skille et fokusert utdrag fra hele tidslinjen.

Semantisk bildetekstfokus er en separat, eksplisitt innstilling. Den forvalgte `full`-analysemodusen bevarer den eksisterende rammeprompten og videresender aldri forespørselstekst til bildetekstmodellen. I `focused`-modus leser broen bare den nyeste ikke-tomme brukerskrevne `text`/`input_text` fra samme Chat- eller Responses-container, normaliserer den til NFC, komprimerer kontrolltegn og mellomrom og begrenser den til 500 Unicode-kodepunkter. Et tomt resultat faller tilbake til den nøyaktige `full`-prompten. Et brukbart hint serialiseres som JSON i en dedikert blokk for ikke-klarert brukerkontekst og kan bare prioritere observerbare detaljer; det kan ikke overstyre den separate advarselen mot å følge instruksjoner som er synlige eller hørbare i mediet. Tekstlig fokus utleder aldri `start`/`end` eller endrer den tidsmessige samplereren.

#### FU-07 strukturell segmentevidens

`segment_aware` bruker en avgrenset forhåndsanalyse-kjøring over den allerede validerte lokale videostrømmen. Den faste filterkjeden skalerer først til maksimalt 320 piksler i bredden, oppdager sceneskift og frosne intervaller og sampler deretter med 1 ramme per sekund for uskarphet, gjennomsnittlig luma og romlig/temporal informasjon. Kjøringen er begrenset til 600 strukturelle samples, én FFmpeg-/filtertråd, de samme allowlistene for `file`-protokoll og containere, en grense på 1 MiB prosessutdata og maksimalt 30 sekunder innenfor brokerens delte avbrytelse/frist. Den godtar aldri en kommando, et filter, en bane eller en URL fra forespørselen.

De strukturelle verdiene er deterministisk evidens fra samplingen, ikke semantisk videoforståelse. De utleder ikke subjekter, handlinger, bildetekster, tale eller brukerintensjon. Scene- og frysegrenser danner segmenter; frysedekning, uskarphet, eksponering, romlig detalj og tidsmessig endring påvirker bare hvordan det eksisterende budsjettet på 1–16 rammer fordeles. Et fullstendig frosset segment begrenses til én ramme, mens ikke-frosne segmenter konkurrerer om det gjenværende budsjettet. Når grensene er flere enn rammene, beholdes en uniform tidslinjedekning, slik at raske kutt tidlig ikke kan skjule et langt segment på slutten. Scenegrenser innenfor analyseoppløsningen på 1 sekund fra en frysegrense slås sammen.

Manglende filtre, feilformet/tom evidens, en detektorfeil eller tidsavbruddet for den avgrensede forhåndsanalysen feiler åpent til den nøyaktige policyen med uniformt midtpunkt. En avbrytelse fra kaller eller brokerens frist feiler ikke åpent: den avslutter underprosessen som pågår, hindrer senere rammeuttrekk, og det private midlertidige treet fjernes i `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genererer deterministiske ekte FFmpeg-fixtures for besparelser i bildetekstkall etter dedup, budsjettfordeling ved tett bevegelse, evidens for uskarphet/eksponering/SI-TI, raske kutt med en lang hale og falske positiver ved gradvis uttoning. Den registrerer wall time for forhåndsanalysen og, der `/usr/bin/time` er tilgjengelig, barneprosess-CPU og topp-RSS. Kvalitetssjekkene er bare strukturelle orakler. Kvaliteten til den ekte bildetekstmodellen forblir `HOLD` fordi denne testriggen ikke har noe autorisert endepunkt eller en frosset dommer. Økonomiske besparelser forblir også `HOLD` med mindre `--caption-cost-per-call-usd` gir et eksplisitt positivt anslag per kall; skriptet fabrikkerer aldri noen av resultatene.

Hver ramme er begrenset til 4 MiB, alle rårammer samlet til 23 MiB og det
serialiserte brokersvaret til 32 MiB. En privat midlertidig katalog fjernes
i `finally`. OmniRoute inkluderer ikke FFmpeg og godtar ikke en egendefinert
bane til den kjørbare filen. Før teksting utfører broen en konservativ visuell
deduplisering: Hver JPEG reduseres til en gråtonebuffer på 16×16 og
sammenlignes bare med den siste rammen som ble beholdt. For et forespurt
tekstingsbudsjett på mer enn én ramme leverer ekstraksjonen en begrenset
kandidatgruppe på opptil det dobbelte av dette budsjettet, og aldri mer enn 16
rammer. Den forespurte grensen anvendes først etter deduplisering, og den første
og siste valgte kandidaten bevares under den endelige uttynningen når budsjettet
er minst to. Den versjonerte
`grayscale-16x16-mean-cells-v2`-policyen bruker den største verdien av
gjennomsnittlig luminansdifferanse og andelen miniatyrbildeceller der den
normaliserte differansen er minst 0,05. Terskelen for duplikater er konstanten
0,04, valgt for forutsigbarhet fremfor å være eksponert som en
kjøretidsinnstilling. Dette sekundære høykontrastsignalet bevarer små bevegelser
og endringer i synlig tekst som en sammenligning basert bare på gjennomsnitt kan
skjule. Feil i sammenligneren eller dekoderen håndteres åpent, slik at dekningen
beholdes. Utdataenes metadata skiller mellom ekstraherte kandidater, rammer som
ble brukt, og visuelle duplikater som ble fjernet.

En eksplisitt merket videodel kan be om et kontaktark med tidsstempler. Broen
bygger et JPEG-rutenett med maksimalt 4 kolonner og 16 rammer. Hver celle på 512
piksler brenner kildetidsstempelet inn i et bånd med høy kontrast nederst,
samtidig som de samme tidsstemplene beholdes i tekstlige metadata for senere
tilknytning og revisjon. Den komplette JPEG-filen er fortsatt begrenset til 32
MiB. Hvis `sharp` ikke kan dekode eller sette sammen rutenettet, faller broen
tilbake til de enkelte JPEG-rammene. Et klientavbrudd videreføres fortsatt
gjennom kontaktarkoperasjonen.

Dokumentasjon for produksjonssetting er bevisst holdt atskilt fra den syntetiske
mikroytelsestesten for komposisjon.
`scripts/perf/video-bridge-contact-sheet-eval.ts` definerer et
skjemaversjonert A/B-testverktøy for reelle OpenAI-kompatible synsmodeller. Det
måler tokens rapportert av leverandøren, total veggklokkelatens (inkludert
komponering av kontaktarket), antall modellkall og bevaring av fakta definert i
manifestet. Rå modellsvar skrives ikke til rapporten. Bare SHA-256-sammendrag og
ID-er for samsvarende fakta beholdes. Testverktøyet foretar ingen nettverkskall
eller kall til betalte modeller med mindre `--execute-real` angis og `--model`,
`OMNIROUTE_BASE_URL` og `OMNIROUTE_API_KEY` er konfigurert. Uten en slik
eksplisitt reell kjøring forblir den maskinlesbare konklusjonen `HOLD`.
Syntetiske målinger av nyttelast og antall kall er alene ikke dokumentasjon for
produksjonssetting.

Kallere kan legge ved en valgfri `transcript.cues`-matrise i en støttet videodel
når de allerede har tidsjustert tekst. Hvert innslag må inneholde `text`, et
endelig `start`/`end`-intervall innenfor den undersøkte varigheten og en
hvitlistet `source` (`client`, `embedded` eller `audio-bridge`). `confidence`
har standardverdien `1` og må være mellom `0` og `1`. Helt identiske innslag
slås sammen. OmniRoute starter aldri transkripsjon fra disse metadataene:
Validerte innslag kopieres til det beskrevne resultatet sammen med kilde,
konfidens og intervall, og gjengis som ikke-klarerte observasjoner ved siden av
rammetekstene. Ugyldig tekst, tekst utenfor gyldig område eller tekst uten
proveniens avvises i stedet for å blandes inn i tekstestrømmen. Begge
transkripsjonskanalene i forespørselskroppen normaliserer oppgitt proveniens til
`client`, inkludert selvoppgitte etiketter som `embedded` eller `audio-bridge`.
Bare en servereid adapter kan tilordne disse klarerte etikettene gjennom det
kodeeksklusive argumentet `trustedSource`. Et JSON-felt i en forespørsel kan
ikke nå dette argumentet. Transkripsjonstekst forblir ikke-klarert innhold
avledet fra medier, uavhengig av proveniens, og må aldri avgjøre autorisasjon.

En avansert kaller kan oppgi et `audioTranscript`-spor for den samme videoen.
Det behandles som tekst levert av klienten, ikke som bevis på transkripsjon
utført av serveren. Flettingsgrensesnittet kjører visuelle observasjoner og
lydobservasjoner med én felles tidsfrist og ett felles avbruddssignal, ordner
dem på en felles tidslinje, slår sammen helt identiske duplikater og rapporterer
et delvis resultat når bare én side lykkes. Et ugyldig `audioTranscript`
reduseres til et slikt delvis resultat – den visuelle beskrivelsen beholdes, og
lydgrenen registrerer en sanert feilkode – i stedet for at hele videoen
mislykkes. Tilgjengelighet per gren, flagget for delvis resultat og de sanerte
feilkodene bevares i det beskrevne resultatet, i
sikkerhetsmekanismens metadata (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i resultatbufferens metadata og i broens
flettetellere. Standardbanen for Video Bridge starter ikke tale-til-tekst og
laster ikke ned en ekstra kopi av mediet. Uten dette eksplisitte sporet forblir
den begrenset til video.

**Transkripsjonsretensjon (#12150 P1).** Dette gjelder automatisk hver gang Video Bridge (som selv er opt-in) gjengir et transkripsjonsstikk – det finnes ingen separat retensjonsflagg. Når en forespørsel gjengir et hvilket som helst transkripsjonsstikk (en `transcript` som er deklarert av kaller, eller en sammenslått `audioTranscript`), markerer guardrailen den som `videoBridgeObserved` og produserer en redigert skyggekopi av videobeskrivelsen – en identisk gjengivelse der fritekstinnholdet i hvert stikk erstattes av `[redacted-video-transcript]`, bygget ved å erstatte det strukturerte stikkfeltet før strengen settes sammen (aldri ved å parse den flatede teksten, slik at ingen stikkinnhold – ondsinnet eller vanlig, inkludert innhold som inneholder `]`, som `[inaudible]`/`[music]` – kan overleve). Den lagrede forespørselskroppen i call-loggen bytter ut hver videoderivert tekst del med den redigerte skyggekopien, matchet etter innholdslikhet; `fullText`-ankeret leses på nytt fra den ferdige guardrail-nyttelasten før kallet, slik at matchen fortsatt lykkes etter at senere kjedeguardrails (PII- og legitimasjonsmaskeringene, prioritet 10/95) skriver om beskrivelsesteksten på stedet, og etter at systemprompt-/overleverings-/minneinjeksjon omformer meldingsarrayen. Kroppen som sendes oppstrøms til modellen, er uendret. En observert forespørsel fyller heller ikke noe varig Memory (både forespørsels- og svarsavledet uttrekk hoppes over), slik at modellens eget svar ikke kan ekkoe transkripsjonstekst inn i Memory.

**Rå videofelt (#12430).** Når broen er aktivert og innebygd videostøtte er ukjent eller fraværende, aktiverer definerte `transcript`/`audioTranscript`-felt også `videoBridgeObserved`, selv etter beskrivelsesfeil eller en `maxVideos`-grense. `null` og tomme strenger teller; fraværende felt og ikke-videometadata gjør det ikke. Lagrede kopier redigerer disse feltene eller utelater forespørselen, og cacher/Memory omgås.

På disse fallback-banene blir gyldige stikk fra kaller støttede `text`/`input_text`-deler i stedet for ikke-standard leverandørfelt. Begge sporene som leveres med forespørselen, forblir ubetrodde `client`-observasjoner, med en eksplisitt advarsel om at videoen ikke ble beskrevet, og at tidsstemplene ikke ble verifisert mot mediet. De eksisterende budsjettene på 256 stikk/64 KiB totalt og per stikk gjelder på tvers av de to sporene samlet; tidsstempler må passe innenfor brokerens tak på 600 sekunder og eventuelt angitt fokusvindu. Ugyldige spor forkastes og videresendes ikke som vilkårlig tekst; et gyldig søskenspor kan fortsatt brukes med mindre deres samlede budsjett overskrides. Null-/tomme felt legger ikke til tekst. Denne fallbacken legger ikke til noe mediehenting eller transkripsjon. Transkripsjonsutvidelsesfelt fjernes fra fallback-videobæreren og dens `video_url`/`source`-objekter. OpenAI-wire-allowlisten forblir streng; videobærere med ukjent native støtte forblir tilgjengelige, og kjente kun-tekst-mål beholder trygge markører. Strukturerte redigeringsskygger beskytter den tilføyde transkripsjonsteksten, mens den opprinnelige kaller-eide forespørselen forblir uendret. Mål med innebygd støtte og deaktiverte broer beholder sin eksisterende omgåelsesatferd.

Ytterligere lagrede kopier bruker samme signal for observerte forespørsler. Det rå øyeblikksbildet av klientforespørselen før guardrail, den ventende forespørselen i minnet og loggen over tidlig avviste forespørsler erstatter strukturelt transkripsjonsfelt i videodeler; strengprompter som syntetiseres av pipeline-trinn og kontekstoverlevering, redigeres ved mottaket for den lagrede forespørselskroppen. Den lagrede `video_content_removed`-markøren gjør at `previous_response_id`-videreføring feiler lukket i stedet for å rekonstruere tekst som bevisst ble forkastet. Hvis en observert forespørsel mister sin per-del-redigeringsskygge før logging, eller selv én av flere videoskygger ikke matcher etter senere forespørselsmutasjoner, utelates den lagrede forespørselskroppen helt i stedet for å beholde en delvis redigert transkripsjon.

For en observert forespørsel kan et modellsvar sitere enhver del av transkripsjonen uten en strukturert stikkgrense. Dens lagrede `responseBody` i call-loggen erstattes derfor av en utelatelsesmarkør; den detaljerte pipeline-artefakten (som kan inneholde oppstrøms-/klientkropper og strømchunks) lagres ikke. Semantiske, idempotens- og reasoning-replay-cacher omgår lesinger og skrivinger for den forespørselen. Leverandørforespørselen og det klientvisible svaret forblir uendret. Tidlige keepalive-byter tømmes fra den midlertidige bufferen når den detaljerte artefakten utelates. Kiros advarsel om feilformet EventStream rapporterer bare antall byter i nyttelasten, aldri innholdet eller JSON-parserens rå feil. Dette hevder ikke at hver urelaterte leverandør-/plugin-diagnostikk er revidert; den bredere gjennomgangen av lagrede mottak spores i #11658.

Den interne livssyklusen til `/api/modality-bridge/video/drilldown` er et separat cache-substrat med loopback-/token-autentisering. Hver operasjon krever også en kanonisk opak principal-ID. Før en produksjonskaller aktiveres, må den utlede denne ID-en fra den autentiserte tenanten og må aldri videresende en klientvalgt verdi. Cache-nøkler binder den principalen til kanoniske sesjons- og videoreferanse-ID-er, lagrer bare deres SHA-256-avledede nøkler og begrenser både lesing og sletting til samme principal. Cachen lagrer maksimalt 16 avledede JPEG-bilder per oppføring, utløper dem etter ti minutter og støtter avgrensede `start`/`end`-lesinger eller eksplisitt sesjonssletting.

Hver principal er begrenset til 16 oppføringer og 64 MiB kanoniske JPEG-data. Disse grensene er uavhengige av det globale taket på 64 oppføringer/256 MiB: press på principal-kvoten fjerner bare den principalens minst nylig brukte oppføringer før global LRU-fjerning vurderes. Utløpte oppføringer feies fra både principal- og globalregnskapet ved cache-aktivitet, mens kansellering og valideringsfeil ikke fullfører en delvis erstatning.

Cachen avviser ikke-kanonisk Base64, overflødig utfylling, ikke-JPEG-media, misdannede eller avkortede JPEG-er, og JPEG-er som gir en advarsel under en avgrenset fullbilde-`sharp`-dekoding. Den koder hvert godkjente bilde på nytt som en kanonisk JPEG, utleder bredde og høyde fra de dekodede bytene i stedet for å stole på kallers felt, og forkaster eventuelle etterfølgende polyglot-bytes i stedet for å beholde dem. Bare den avgrensede kanoniske komprimerte bufferen belastes begge kvotene. JSON-overføringsgrensen inkluderer Base64-overhead for taket på 32 MiB dekodet inndata. Hver lagrede avledning registrerer sitt validerte JPEG-format/oppløsning, samplingspolicy, avledningsversjon, opprettelsestidspunkt, serverberegnet innholdshash og hashet overordnet referanse pluss den klarerte kallers overordnede innholdshash. Avbrudd kontrolleres mellom asynkrone dekodings-/hashfaser før den atomiske cache-commiten.

Denne etappen kobler ennå ikke en produksjonsprodusent til ruten og tilbyr ikke variantvalg for flere oppløsninger. Den transparente forespørselsbanen for Video Bridge påfører derfor ingen ekstra arbeid, mens leietakerbundet avledning av principal og hele FU-08-livssyklusen for flere oppløsninger forblir eksplisitt oppfølgingsarbeid i stedet for å bli dokumentert som fullstendig atferd.

Rammer får bildetekst sekvensielt med den konfigurerte Video-modellen. En tom Video-overstyring arver Vision-innstillingen; hvis begge er tomme, velger Vision-autoruteren den effektive visjonskapable modellen. Vellykkede bildetekster erstatter den opprinnelige delen med et stabilt `[Video description:`-prefiks som også markerer teksten som en ikke-klarert medieavledet observasjon og forteller nedstrømsmodeller at de ikke skal følge instruksjoner som finnes i mediet. Cache-nøkler for bildetekster per ramme inkluderer JPEG-bytene, prompten, tidsstemplet og den effektive modellen; bare vellykkede bildetekster lagres i cache. Cacheoppføringer beholder den faktiske vellykkede produsentmodellen, inkludert en reserve-modell; broen rapporterer `mixed` når forskjellige rammer ble produsert av forskjellige modeller. En cachetreff gjenbruker denne produsentidentiteten i stedet for å merke den på nytt som den forespurte rutingsplanen. Resultatcachen for hele videoen nøkles på hver inndata som endrer utdata — prompt, effektiv modell, samplingspolicy, antall rammer, semantisk analysemodus, SHA-256-fingeravtrykket til det normaliserte fokushintet, fokusvinduet, `transcript`, `audioTranscript` og kontaktarkflagget — slik at endring av noen av disse dimensjonene er en cache-miss, aldri en foreldet gjenbruk. Versjonen av den visuelle dedup-policyen, terskelen og det avgrensede antallet kandidatrammer er også eksplisitte i resultatcache-nøkkelen og metadataene; en policyendring kan derfor ikke gjenbruke en foreldet beskrivelse av hele videoen. Metadata for resultatcache v4 beholder modusen og fingeravtrykket, aldri den rå brukeroppgaven. Guardrail-metadata rapporterer både den forespurte og den effektive analysemodusen; en forespurt `focused`-modus uten brukbar brukertekst rapporteres som effektivt `full`.

Guardrailen trekker ut hver støttet videodel, men beskriver ikke flere enn `modalityBridgeVideoMaxVideos`. For et mål som er bevist å ha `supportsVideo === false`, blir mislykkede videoer og videoer over grensen eksplisitte trygge tekstmarkører, slik at ingen rå video overlever. Når kapabiliteten er ukjent, beholder disse delene videobæreren sin; enhver reserve-transkripsjon følger den avgrensede tekstkonverteringen ovenfor. Mål med `supportsVideo === true` går utenom broen. Klientforespørselens avbruddssignal forplantes gjennom nedlasting, brokerkø, delprosesser og bildetekstkall; avbrudd stopper mellom videoer og fører aldri til at rå media slipper gjennom ved feil.

Kjøretidsinnstillinger er DB-baserte og Zod-validerte:

| Nøkkel                              | Standard    | Område / atferd                                                                                           |
| ----------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valgfri kjøretid, opt-in                                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` bevarer generiske bildetekster; `focused` bruker avgrenset, ikke-klarert kontekst fra siste bruker |
| `modalityBridgeVideoModel`          | `""`        | Arver Vision Bridge-modellen                                                                              |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` eller proporsjonal `segment_aware`; detektorfeil faller tilbake til `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                            |

Eldre lagrede Video-timeoutverdier over 120 sekunder begrenses til brokerens frist; nye innstillingsskrivinger over denne grensen avvises. `GET /api/modality-bridge/video/runtime` krever klarert stemplet loopback-lokalitet før autentisering eller kjøretidsproving, og krever deretter administrasjonsautentisering. Den returnerer bare `available`, sanerte FFmpeg/ffprobe-versjoner og en fast grunn når kjøretiden er utilgjengelig. Det interne ekstraksjonsendepunktet er ikke et offentlig opplastings-API: kømetning returnerer `503` pluss `Retry-After`, en kallers frakobling returnerer `499`, og den faste brokerfristen returnerer `504`. Konverterte svar legger til `video->text;model=<visionModel>;parts=<videos>` i den sentrale `x-omniroute-modality-bridge`-headeren uten å fjerne Vision- eller Audio-segmenter.

### PII-maskerer (`piiMasker.ts`)

Kjører på **begge** stadier.

- **`preCall`** kloner nyttelasten, går gjennom `system`, `messages`, `input` og
  `prompt` (inkludert elementer som er vanlige strenger), og bruker `processPII()` (fra
  `@/shared/utils/inputSanitizer`) på `content`-/`text`-felt som inneholder strenger. Når
  `PII_REDACTION_ENABLED=true`, blir oppdagede personopplysninger sladdet i den utgående
  nyttelasten. Dette er uavhengig av `INPUT_SANITIZER_MODE` (som bare styrer
  policyen for prompt-injeksjon). Når sladding er deaktivert, registrerer kallet antall
  oppdagelser uten å endre innholdet.
- **`postCall`** dypkloner responsen og kjører `sanitizePIIResponse()` samt
  maskeringen for Responses-API-formatet (`maskResponsesOutput` — dekker
  `output_text` og `output[].content[].text`). Hvis noe blir sladdet, erstatter den
  endrede responsen originalen.

Sikkerhetsmekanismen blokkerer aldri; den legger bare til merknader (`meta.detections`,
`meta.redacted`) eller skriver om innhold.

#### Valg per type, egendefinerte mønstre og oppdagelsestellere

**Kontrollpanel → Innstillinger → Sikkerhet → Maskering av personopplysninger** velger _hva_ som maskeres. Det
slår ikke på maskering: dette styres fortsatt av `PII_REDACTION_ENABLED` (forespørsel) og
`PII_RESPONSE_SANITIZATION` (respons + SSE), som begge er deaktivert som standard.

- **Valg per type** — de innebygde ID-ene er oppført i
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Hvis dette ikke er angitt, brukes alle
  typer (oppførselen før denne innstillingen fantes). Forespørselsmotorens
  `ssn_us`-mønster tilordnes til `ssn`. Maler (Minimal, Standard, Financial,
  Brazilian, USA, Full) fyller bare ut avmerkingsboksene i brukergrensesnittet.
- **Egendefinerte mønstre** — opptil 20 regulære uttrykk eller jokertegnmønstre (`*` = opptil 64
  tegn som ikke er mellomrom, `?` = ett tegn). Treff blir til `[CUSTOM_REDACTED]`.
  Hvert mønster behandles av `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maksimalt 500 tegn, flagg begrenset
  til `g i m s u`, må kunne kompileres, må bestå `safe-regex` (katastrofal
  tilbakesporing), og må ikke samsvare med en tom streng eller en plassholder for sladding.
  Et mønster som ikke består, avvises både når det lagres og når det testes, og en lagret rad
  som ikke består, hoppes over under kjøring i stedet for å bli kompilert. Egendefinerte mønstre
  kjøres bare når maskering er aktivert.
- **Oppdagelsestellere** — antall per type (aldri samsvarende verdier), lagres i
  minnet og nullstilles ved omstart (`src/lib/pii/piiDetectionStats.ts`). De øker bare
  når maskering er aktivert.

Innstillingene lagres i `key_value`-tabellen (navnerommet `pii_settings`,
`src/lib/db/piiSettings.ts`) og leses via en hurtigbuffer på 1 s. API:

| Metode | Bane                     | Formål                                                                    |
| ------ | ------------------------ | ------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Flaggstatus, `enabledTypes`, `customPatterns`, oppdagelsestellere         |
| `PUT`  | `/api/settings/pii`      | Erstatt `enabledTypes` (`null` = alle) og/eller `customPatterns`          |
| `POST` | `/api/settings/pii/test` | Prøvekjør ett mønster mot et eksempel på maksimalt 8 kB; ingenting lagres |

Alle tre krever administrasjonstilgang og validerer innholdet med Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt-injeksjon (`promptInjection.ts`)

Oppdager fiendtlige strukturer i brukerlevert innhold og håndhever den
konfigurerte policyen. Virkemåten styres av miljøvariabler og konstruktørvalg:

| Innstilling        | Miljøvariabel                                                                                       | Standard | Effekt                                                                                                                                                                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktivert           | `INPUT_SANITIZER_ENABLED`                                                                           | `true`   | Når denne er `false`, avsluttes sikkerhetsmekanismen umiddelbart.                                                                                                                                                    |
| Modus              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                     | `warn`   | Injeksjonspolicy: `block`, `warn` eller `log`. (`redact` godtas for bakoverkompatibilitet, men fjerner **ikke** injeksjonstekst; omskriving av personopplysninger i forespørsler styres av `PII_REDACTION_ENABLED`.) |
| Blokkeringsterskel | `blockThreshold`-valg / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Laveste alvorlighetsgrad som kreves for blokkering. Middels er kun til observasjon som standard.                                                                                                                     |

**Modusprioritet** (`getMode`): anropers `options.mode` →
**overstyring av databasefunksjonsflagget** `INJECTION_GUARD_MODE` (Kontrollpanel → Innstillinger →
Funksjonsflagg) → miljøvariabelen `INJECTION_GUARD_MODE` → miljøvariabelen `INPUT_SANITIZER_MODE` →
`warn`. En overstyring i kontrollpanelet har derfor prioritet over miljøvariablene, slik at brukergrensesnittet for
funksjonsflagg styrer den kjørende sikkerhetsmekanismen direkte (uten omstart). Databaselesingen er feilsikker:
Hvis den mislykkes, går sikkerhetsmekanismen tilbake til den miljøbaserte virkemåten, og når ingen
overstyring er angitt, er virkemåten identisk med en løsning som bare bruker miljøvariabler.

Oppdagelseskilder:

1. `sanitizeRequest()` fra `@/shared/utils/inputSanitizer` (felles detektor-
   sett som brukes andre steder i behandlingskjeden).
2. Innebygde `DEFAULT_GUARD_PATTERNS` (for øyeblikket `system_override_inline` og
   `markdown_system_block`, begge med alvorlighetsgraden `high`).
3. Valgfrie `customPatterns` som sendes via konstruktørvalg (strenger, regulære uttrykk
   eller poster av typen `{ name, pattern, severity }`).

Når `mode === "block"` **og** minst én deteksjon oppfyller terskelen for
alvorlighetsgrad, returnerer `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }`. I modusene `warn`/`log` logger sikkerhetsregelen,
men tillater kallet. Den delte hjelpefunksjonen `evaluatePromptInjection()` eksporteres
også for kallere som må evaluere ledetekster uten å gå gjennom registeret.

**Skannegrense (v3.8.20):** Detektoren undersøker bare de **første 16 KB** av
den sammenføyde ledeteksten — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) i
`src/shared/utils/inputSanitizer.ts`. Både `detectInjection()` og
`evaluatePromptInjection()` bruker `slice(0, MAX_INJECTION_SCAN_BYTES)` før
mønsterløkken kjøres. Injeksjonsdirektiver finnes vanligvis nær starten av inndataene,
så dette begrenser CPU-/GC-bruken fra regulære uttrykk for nyttelaster på flere hundre
KB uten å svekke deteksjonen (jf. #3932, #4041).

### Maskering av legitimasjon (`credentialMasker.ts`)

Kjører i **begge** stadier, sist i standardkjeden (prioritet `95`). Sladder
velkjente mønstre for API-nøkler / hemmelige tokener fra den utgående nyttelasten
(meldingsinnhold, verktøykallargumenter og verktøyresultater) **og** leverandørsvaret,
slik at legitimasjon som limes inn i en ledetekst (eller returneres i et verktøyresultat),
ikke lekkes til den eksterne leverandøren eller tilbake til klienten.

- **Kun eksplisitt aktivering**, samme konvensjon som sladding av
  personopplysninger (tilstøtende til hard regel nr. 20): deaktivert med mindre
  `settings.credentialRedactionEnabled === true` **eller**
  `CREDENTIAL_REDACTION_ENABLED=true`. Når den er deaktivert, gjør
  sikkerhetsregelen ingenting — den blokkerer aldri og omskriver aldri.
- `redactCredentials()` går gjennom hele nyttelast-/svartreet (`walkValue()`,
  sikker mot prototypeforurensning og syklussikker via `WeakSet`) og erstatter
  treff med en `[REDACTED:<type>]`-plassholder, samtidig som bare grenene som
  faktisk ble endret, klones.
- `CREDENTIAL_PATTERNS` dekker nøkler for LLM-leverandører (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-tokener (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), betalingsnøkler (Stripe, Square),
  skynøkler (AWS-tilgangsnøkkel, Twilio, SendGrid, Mailgun), private nøkler /
  JWT-er, tilkoblingsstrenger som inneholder legitimasjon
  (`mongodb://user:pass@...` osv.), samt et generisk mønster for verdier i
  `Authorization`-/`x-api-key`-/`api-key`-/`apikey`-hoder. Hodelignende nøkler
  (`authorization`, `x-api-key`, `api-key`, `apikey`) sladdes strukturelt (bare
  verdien, mens skjemaprefikser som `Bearer `/`Basic ` beholdes) i stedet for via
  det generiske regulære tekstuttrykket.
- Sikkerhetsregelen blokkerer aldri; den omskriver bare (`modifiedPayload` /
  `modifiedResponse`) og legger til annotasjoner (`meta.credentialsRedacted`,
  `meta.count`).

Regresjonsvern: `tests/unit/credential-masker-guardrail.test.ts`.

## Grunnkontrakt (`base.ts`)

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
  block?: boolean; // true avbryter kjeden
  message?: string; // vises ved blokkering
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returneres av preCall for å omskrive forespørselen
  modifiedResponse?: TValue; // returneres av postCall for å omskrive responsen
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

Et sikkerhetsfilter signaliserer «ingen endring» ved å returnere enten `void`, `{}` eller
`{ block: false }`. Returnering av en `modifiedPayload`/`modifiedResponse` erstatter
verdien som flyter gjennom kjeden for etterfølgende sikkerhetsfiltre.
`signal?: AbortSignal` fører kallende parts livssyklus inn i sikkerhetsfiltrene. Avbrudd av en forespørsel er det bevisste fail-open-unntaket: mediebroer stopper arbeidet og rydder opp uten å gjenopprette råmedier til et mål som er kjent for ikke å støtte dem.

## Register (`registry.ts`)

Singleton-objektet `guardrailRegistry` eksponerer:

- `register(guardrail)` — legger til et sikkerhetsfilter (eller erstatter det basert på normalisert navn) og
  sorterer på nytt etter stigende `priority`.
- `clear()` / `list()` — administrative hjelpefunksjoner.
- `runPreCallHooks(payload, context)` — itererer over aktive sikkerhetsfiltre, sender
  nyttelasten videre gjennom `modifiedPayload` og stopper ved første `block: true`.
- `runPostCallHooks(response, context)` — samme flyt på responssiden.
- `resetGuardrailsForTests({ registerDefaults })` — tømmer tilstanden og kan
  valgfritt registrere standardfiltrene på nytt for ren testisolasjon.

Begge kjørerne returnerer `{ blocked, payload|response, results, guardrail?, message? }`,
der `results` er en matrise med `GuardrailExecutionResult`-oppføringer som inneholder
feltene `blocked`, `skipped`, `modified`, `error` og `meta` per sikkerhetsfilter,
noe som er nyttig for sporing.

### Deaktivere sikkerhetsfiltre per forespørsel

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` samler en
duplikatfri liste over navn på sikkerhetsfiltre som skal hoppes over for den gjeldende
forespørselen. Det finnes fem kanaler som leses i denne rekkefølgen og slås sammen til én liste
(første forekomst beholdes når duplikater fjernes):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` i forespørselskroppen (på toppnivå)
3. `metadata.disabledGuardrails` i forespørselskroppen (bare når `metadata` er et objekt)
4. Headeren `x-omniroute-disabled-guardrails`
5. Den eldre headeren `x-disabled-guardrails`

Alle de fem kanalene slås sammen, inkludert de to headerne: Hvis både
`x-omniroute-disabled-guardrails` og `x-disabled-guardrails` sendes, hoppes unionen av
listene deres over, og en tom moderne header skjuler ikke lenger den eldre
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), rettet i
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Verdier kan være matriser med strenger eller en kommaseparert streng. Navn trimmes
og normaliseres til kebab-case med små bokstaver (`pii_masker` → `pii-masker`), og tomme
oppføringer fjernes. Resultatet sendes gjennom `context.disabledGuardrails`
til registeret, som hopper over samsvarende sikkerhetsfiltre (`skipped: true` i `results`).

Deaktiveringslisten påvirker bare **registeret**. `block`-modusen for promptinjeksjon er
en obligatorisk grense: middleware-komponenten for injeksjonsbeskyttelse
(`src/middleware/promptInjectionGuard.ts`) kaller `evaluatePromptInjection()`
uten noen deaktiveringsliste kontrollert av kallende part (det ubrukte
`resolveDisabledGuardrails({ body })`-kallet den tidligere utførte, ble fjernet i
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), så en forespørsel
som deaktiverer `prompt-injection`, blir fortsatt avvist i `block`-modus. Dette er
tilsiktet. Deaktiveringskanalene kontrolleres av kallende part (forespørselskropp,
metadata og headere), og en kallende part må ikke kunne slå av en sikkerhetskontroll
som operatøren har angitt
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Headerunionen
fra [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
endrer bare hvilke sikkerhetsfiltre i registeret som hoppes over; den lar ikke en klient
omgå middleware-komponenten. Obligatoriske retningslinjer for sikkerhetsfiltre per nøkkel
og per gruppe spores i v4-RFC-en [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Se [Dekning og begrensninger](#coverage-and-limits).

## Kjøre-rekkefølge

For hver forespørsel som går gjennom `src/sse/handlers/chat.ts` og
`open-sse/handlers/chatCore.ts` (chat-familie-rutene som er listet under
[Dekning og begrensninger](#dekning-og-begrensninger)):

1. `resolveDisabledGuardrails(...)` bygger hopplisten fra API-nøkkel, body
   og headere.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` kjører guardrails i stigende
   prioritetsrekkefølge:
   - Deaktiverte guardrails registreres som `skipped`.
   - Hver guardrails `preCall` kan skrive om payloaden via `modifiedPayload`.
   - Den første `block: true` kortslutter kjeden, og handleren returnerer
     et guardrail-avvisningssvar.
3. Den (potensielt omskrevne) payloaden går videre til combo-ruting og
   oppstrøms utsending.
4. **Kun ikke-streaming:** etter at svaret er satt sammen, kjører
   `guardrailRegistry.runPostCallHooks(...)` den samme kjeden på
   svaret. `block: true` her forkaster oppstrømssvaret og returnerer HTTP 400. Streamede svar hopper helt over dette trinnet.

Guardrails som kaster en feil, registreres med `error: <message>` og logges via
`logger.warn`, men kjeden fortsetter — fail-open er tilsiktet.

## Dekning og begrensninger

Guardrail-registeret er bare koblet inn i chat-pipelinen. Disse begrensningene
er låst av `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` og
`tests/unit/guardrail-pipeline-characterization.test.ts`; oppdater disse testene
bevisst når atferden endres.

### Hvor hookene kjører

| Hook / kontroll                    | Kjører på                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                  | Forespørsler som håndteres av `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (og `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, og Telegram-chat-proxyen. Også dashbordets testendepunkt `/api/guardrails/test`. En blokkering før kallet returnerer HTTP 400. |
| `runPostCallHooks`                 | Kun **ikke-streaming**-chatsvar (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Streamede svar når den aldri.                                                                                                                                                                                                                                                                                                                        |
| Streaming PII                      | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), kobles inn i `streamingPipeline.ts` når `PII_RESPONSE_SANITIZATION` er på. Den er ikke en guardrail, så deaktiveringskanalene påvirker den ikke.                                                                                                                                                                                                                               |
| Injection-guard-middleware (eldre) | Hver `/v1`-rute som bærer en prompt, inkludert chat-familien (se [ruteprioritering](#injection-guard-route-coverage--red-team-phase-8--block-d)). Kun prompt-injeksjon.                                                                                                                                                                                                                                                                      |

### Hva som ikke dekkes

- **Media-, embeddings- og dataruter** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) når aldri registeret. Ingen
  PII-maskering, credential-maskering eller modalitetsbro kjører der. Deres
  eneste sjekk er den eldre injection-guard-middlewaren.
- **Streamede svar** får ingen guardrails etter kallet: ingen `pii-masker` eller
  `credential-masker` etter kallet, og ingen blokkering etter kallet. Bare den
  streamende PII-transformen gjelder (når `PII_RESPONSE_SANITIZATION` er på).
  En credential som ekkoes tilbake i et streamet svar, blir ikke maskert.
- **Deaktiveringskanaler vs. middlewaren (tilsiktet):** middlewaren evaluerer
  prompt-injeksjon med sitt eget kall til `evaluatePromptInjection()`, uten
  å sende noen kallerstyrt deaktiveringsliste. `block`-modus er en obligatorisk
  grense som kallerstyrte deaktiveringer ikke kan omgå, også på chat-familie-ruter
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Å deaktivere
  `prompt-injection` hopper bare over registerets guardrail.

### Hva som ser et svar før etter-kallet

På ikke-streaming-stien er rekkefølgen: minneuthenting → kjøring av innebygde
verktøy → guardrails etter kallet → utgang ved blokkering etter kallet → lagring
i semantisk cache.

- **Minneuttrekking** og **verktøykjøring** ser svaret før guardrails som kjører etter kallet, kan skrive det om eller blokkere det. Siden
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), kjører
  minneuttrekking den uttrukne teksten gjennom `sanitizePII` når
  `PII_RESPONSE_SANITIZATION` er på (både strømming og ikke-strømming), men et
  svar som senere blir blokkert etter kallet, har likevel blitt tilbudt til minnet og
  verktøyene.
- **Den semantiske cachen** lagrer svaret etter kallet, så den lagrer det
  omskrevne svaret, og et blokkert svar blir aldri cachet. Cacheoppføringer
  nøkles per API-nøkkel.

## Konfigurasjon

Miljøvariabler som leses av de innebygde guardrails:

| Variabel                              | Brukes av                 | Effekt                                                                                                 |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Sett til `false` for å deaktivere deteksjon fullstendig.                                               |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Injeksjonspolicy: `warn`, `block` eller `log`. Eldre verdi `redact` skriver ikke om injeksjonsteksten. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Modus for injeksjonsvakten; også et DB-funksjonsflagg som **overstyrer** miljøvariablene (DB > ENV).   |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minste alvorlighetsgrad som `MODE=block` avviser: `high` (standard), `medium` eller `low`.             |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Eldre alias for `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Når `true`, maskeres PII i forespørselen (uavhengig av injeksjonsmodus).                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Styrer oppførselen til maskeringen på responssiden.                                                    |

Guardrails for Modality Bridge leser kjøretidskonfigurasjon fra det DB-støttede
innstillingslageret (`getSettings()`), ikke fra miljøvariabler. Primærnøklene for
Vision er `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` og
`modalityBridgeCacheMaxEntries`. De eldre `visionBridge*`-nøklene godtas bare
som den dokumenterte lesefallbacken for én syklus; skrivinger fra dashbordet
bruker primærnøklene. Standardverdier og fallback-oppløseren ligger i
`src/shared/constants/modalityBridgeDefaults.ts`, med eldre konstanter beholdt i
`src/shared/constants/visionBridgeDefaults.ts`.

Lyd bruker `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` og `modalityBridgeAudioMaxClips`, i tillegg til de
delte `modalityBridgeCache*`-innstillingene. Lyd har ingen fallback for eldre
nøkler fordi disse nøklene ble innført med Modality Bridge-skjemaet.

Video bruker `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` og
`modalityBridgeVideoTimeout`, i tillegg til de delte
`modalityBridgeCache*`-innstillingene. Det er deaktivert som standard fordi
FFmpeg/ffprobe er valgfrie driftsavhengigheter, og bildeteksting av rammer øker
latens og modellkostnad.

## Egendefinerte guardrails

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

1. Opprett `src/lib/guardrails/myGuardrail.ts` som utvider `BaseGuardrail`.
2. Implementer `preCall` og/eller `postCall`.
3. Enten registrer ved importtid (push fra `registerDefaultGuardrails`) eller
   kall `guardrailRegistry.register(...)` ved kjøretid — registeret erstatter
   enhver tidligere guardrail med samme normaliserte navn.
4. Legg til tester under `tests/unit/` (eksisterende eksempler:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testing

Bruk `resetGuardrailsForTests()` mellom tester for å starte fra en kjent tilstand.
Send `{ registerDefaults: false }` for å starte med et tomt register og
registrere bare guardrailsene som testes. Vision Bridge godtar
avhengighetsinjeksjon (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge
eksponerer tilsvarende skjøter for innstillinger, kapabiliteter, valg av STT-modell,
legitimasjonskontroller og transkripsjon. Tester kan derfor kjøre begge flytene uten
database- eller nettverkstilgang.

## Se også

- `src/lib/guardrails/` — implementasjon
- `src/shared/utils/inputSanitizer.ts` — fellesdetektor som driver
  prompt-injeksjon og PII-maskering
- `src/shared/constants/visionBridgeDefaults.ts` — standardverdier for Vision Bridge og
  liste over tvungne bridge-modeller
- `src/shared/constants/modalityBridgeDefaults.ts` — felles kjøretidsstandarder for Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalt lag (kretssikring, nedkjølingsperioder)
- `docs/reference/ENVIRONMENT.md` — fullstendig referanse for miljøvariabler

## Dekning av injection-guard-ruter og red-team (Fase 8 · Blokk D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) dekker alle ruter
som godtar brukerprompter. Den respekterer `INJECTION_GUARD_MODE` (standard `warn` = kun logging;
`block` = returnerer HTTP 400 `SECURITY_001`).

| Type                 | Ruter                                                                                                                                                | Standardmodus |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (eksisterende) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ            | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Data                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Tekstuttrekk (`extractMessageContents`) dekker `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nattlig, `nightly-llm-security.yml`):** promptfoo validerer at hver rute blokkerer
OWASP-LLM-korpuset i `INJECTION_GUARD_MODE=block`; garak kjører prober (hoppes over uten hemmelighet).
`moderations` er inkludert for konsistens. Blokkmodus er en obligatorisk grense: `evaluatePromptInjection()`
ignorerer den per-forespørsel deaktiveringslisten som middleware sender den, så `disabledGuardrails` fritar
**ikke** en rute fra den ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Den nattlige arbeidsflyten (`.github/workflows/nightly-llm-security.yml`, cron + manuell
utløsning) har to jobber:

- **`promptfoo-guard` (blokkerende)** — kjører `promptfoo eval -c promptfooconfig.yaml`
  med `INJECTION_GUARD_MODE=block`. Hvert adversarielle tilfelle (f.eks. «ignorer alle
  tidligere instruksjoner…», DAN-lignende jailbreaks) bekrefter at svaret inneholder
  `error.code === "SECURITY_001"`, dvs. at guard faktisk avviste forespørselen.
- **`garak` (rådgivende)** — kjører garak `--probes promptinject,dan,leakreplay`
  mot en lokal OmniRoute-instans (`http://localhost:20128/v1`). Forutsetter en
  leverandørhemmelighet (`PROMPTFOO_PROVIDER_KEY`); hoppes over på en kontrollert måte og får
  suffikset `|| true`, slik at den rapporterer uten å feile CI.

Dekningen av guard-hjelperen (`createInjectionGuard` / `withInjectionGuard`)
omfatter alle promptbærende `/v1`-ruter; prompttekst hentes fra
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` av
`extractMessageContents()` i `src/shared/utils/inputSanitizer.ts`.
