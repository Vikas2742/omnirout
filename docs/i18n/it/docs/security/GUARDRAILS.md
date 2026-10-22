# Guardrails (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fonte ufficiale:** `src/lib/guardrails/`
> **Ultimo aggiornamento:** 2026-10-17 — v3.8.52 (aggiunta la sezione [Copertura e limiti](#coverage-and-limits):
> quali route e percorsi di risposta vengono raggiunti dagli hook, gli header di disabilitazione unificati (#16412), la modalità
> di blocco dell'iniezione come confine obbligatorio (#16413) e quali componenti vedono una risposta prima della fase post-chiamata)

I guardrail applicano controlli di sicurezza, policy e trasformazioni dei contenuti al confine
tra OmniRoute e i provider upstream. Ogni guardrail può esaminare (ed
eventualmente rifiutare, trasformare o annotare) i payload delle richieste (`preCall`) e le
risposte upstream (`postCall`).

Il sistema è **fail-open**: se un guardrail genera un'eccezione durante l'esecuzione, il registro
registra l'errore e prosegue con il guardrail successivo anziché far fallire la
richiesta. Il blocco è una decisione esplicita (`block: true`), mai un incidente.
L'unica eccezione è una richiesta interrotta: quando il `signal` del chiamante viene interrotto,
un guardrail che genera un'eccezione causa il rifiuto dell'esecuzione dell'hook anziché essere ignorato.

Gli hook **non** vengono eseguiti su ogni route o per ogni risposta. Leggere
[Copertura e limiti](#coverage-and-limits) prima di fare affidamento su un guardrail come
controllo di sicurezza.

## Guardrail integrati

Al momento dell'importazione, il registro carica automaticamente sei guardrail in ordine di priorità
(vedere `registry.ts` → `registerDefaultGuardrails()`):

| Priorità | Nome                | Fase/i         | File                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

I numeri di priorità più bassi vengono eseguiti **per primi**.

### Bridge visivo (`visionBridge.ts`) — Bridge di modalità PR-1

Il modello base GLM 5.3 e `glm-5.3-{low,high,max}` dispongono di metadati
espliciti `supportsVision:false` nel registro/nelle specifiche. Le varianti GLM 5.3 Flash
rimangono modelli con supporto visivo nativo. La route `/v1/messages` di Claude Code entra nella
catena condivisa di guardrail pre-chiamata `handleChat` **prima** della traduzione
da Claude a OpenAI; le immagini annidate nei risultati dello strumento `Read` devono essere descritte o gestite
prima che tale traduzione le converta in contenuti OpenAI `image_url` (#17069).

Intercetta le richieste contenenti immagini destinate a **modelli senza supporto visivo** e
reindirizza l'intera richiesta a un modello con supporto visivo oppure sostituisce le parti
contenenti immagini con descrizioni testuali prodotte da un modello visivo configurabile prima
della chiamata upstream. Ciò consente ai provider solo testuali di gestire in modo trasparente
i payload multimodali.

Flusso:

1. Ignora l'elaborazione se il modello di destinazione supporta già la visione (a meno che non compaia
   nell'elenco di bridge forzati `isVisionBridgeForcedModel`).
2. Estrae le parti contenenti immagini tramite `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), che delega al **rilevatore unificato dei media**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — l'unica
   fonte ufficiale condivisa con il filtro di compatibilità delle combinazioni.
   L'estrazione è limitata alle forme consentite che `replaceImageParts` può reinserire
   (il contratto estrazione↔sostituzione): OpenAI `image_url`, `source.type:"base64"`
   base64 di Anthropic, `source.type:"url"` URL di Anthropic e `input_image`
   dell'API Responses. Vengono inoltre estratte e sostituite nei rispettivi percorsi originali le immagini corrispondenti
   annidate in `tool_result.content` di Claude Code e negli output degli strumenti di Responses; le forme
   contenenti solo indicatori sono materiale per il filtro delle combinazioni e non vengono estratte.
   Ignora l'elaborazione se non ne viene trovata alcuna.
3. Risolve la configurazione di runtime tramite `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): le nuove chiavi delle impostazioni `modalityBridge*`
   hanno la precedenza; le chiavi legacy `visionBridge*` rimangono un **fallback valido per un ciclo**
   (finestra di rollback). Se il bridge è disabilitato, l'elaborazione viene ignorata prima di qualsiasi attraversamento dei media.
4. Il selettore della modalità (`modalityBridgeVisionMode`, vedere la tabella seguente) determina
   se effettuare il reindirizzamento o la descrizione. Il reindirizzamento restituisce `modifiedPayload` con il solo `model`
   sostituito, più i metadati `{ rerouted, fromModel, toModel, imagesKept }`.
5. Percorso di descrizione: limita le immagini a `maxImages`, compone il prompt in base all'attività,
   consulta la cache delle descrizioni, chiama il modello visivo **in parallelo**
   (`Promise.allSettled`) e inserisce al loro posto parti di testo `[Image N]: <description>`.
   Una descrizione non riuscita produce `null`: l'immagine non elaborata viene mantenuta per
   destinazioni sconosciute o con supporto visivo (#4012), mentre una **destinazione diretta confermata
   come solo testuale** o una combinazione senza alcuna capacità visiva riceve un segnaposto testuale esplicito
   `(unavailable — no vision-capable provider connected)` per
   ogni immagine priva di descrizione, inclusi i fallimenti parziali e le immagini oltre il
   limite delle chiamate di descrizione (#17069). Il fallback di descrizione già esistente per le combinazioni
   in cui tutti i tentativi falliscono rimane attivo (#8430).
6. Restituisce `modifiedPayload` + metadati (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selettore della modalità (`modalityBridgeVisionMode`)

| Modalità   | Predefinita | Comportamento                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔           | Euristica legacy, invariata (#6640/#7204): i modelli non combo/`auto/` vengono reindirizzati al miglior modello di visione, a meno che il modello originale non disponga già di credenziali utilizzabili (in tal caso viene generata una descrizione); le destinazioni combo generano sempre una descrizione.                                                                                                               |
| `describe` |             | Genera sempre una descrizione: il blocco di reindirizzamento viene ignorato completamente; risponde sempre il modello scelto dall'utente.                                                                                                                                                                                                                                                                                   |
| `reroute`  |             | Forza il reindirizzamento: il controllo che mantiene il modello dotato di credenziali viene ignorato. Il controllo delle credenziali della **destinazione** del reindirizzamento continua ad applicarsi: quando non esiste una destinazione di visione utilizzabile, il bridge blocca la richiesta con un errore chiaro anziché generare una descrizione o inviare immagini non elaborate a una destinazione solo testuale. |

Le modalità forzate interrompono il flusso **prima** dell'esecuzione dell'euristica automatica; il comportamento di `auto`
è identico byte per byte al meccanismo di protezione precedente a PR-1.

#### Ambito della chiave API (`visionBridgeKeyScope.ts`)

Quando la chiave API del chiamante limita `allowedConnections`, i pool di quote
(`allowedQuotas`) o i modelli (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), il bridge
seleziona soltanto modelli di reindirizzamento e descrizione che la chiave può
utilizzare, su connessioni che la chiave può utilizzare. La chiamata di descrizione
passa quindi sempre attraverso il self-loop di OmniRoute con
l'header `x-omniroute-self-loop-key-id`, in modo che la richiesta di chat ricevente
applichi nuovamente i criteri della chiave relativi a connessioni e modelli. `enforceApiKeyPolicy()`
rispetta tale header soltanto insieme al bearer del self-loop, quindi può solo
restringere l'accesso, mentre un id che non viene risolto viene rifiutato.

Se nessun modello di visione è consentito per la chiave, una **destinazione
confermata come solo testuale** rifiuta localmente la richiesta dell'immagine con un
chiaro HTTP 400, anziché inoltrare i byte dell'immagine a un upstream non compatibile
(#17069). Per le destinazioni con capacità di visione sconosciuta o nativa, il
percorso di descrizione mantiene il precedente comportamento fail-open (meta
`{ skipped: true, reason: "no_permitted_vision_model" }`). Le richieste prive di
chiave e le chiavi senza queste restrizioni si comportano esattamente come prima.

#### Prompt di descrizione consapevole dell'attività (`modalityBridgeVisionTaskAware`)

Valore predefinito: **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) aggiunge
il testo dell'**ultimo messaggio dell'utente** (troncato a 500 caratteri) al prompt
di descrizione di base, orientando la descrizione verso ciò che l'utente ha effettivamente
chiesto (schema codex-vision-proxy) e chiedendo al modello di visione di trascrivere il
testo visibile. Con il flag disattivato, oppure in assenza di testo dell'utente, il prompt
di base viene utilizzato senza modifiche.

La richiesta compatibile con OpenAI del self-loop di descrizione (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) richiede sempre `image_url.detail: "high"` —
incondizionatamente, per ogni chiamante/provider, senza dipendere da alcun segnale del client.
Il campionamento a basso livello di dettaglio riduce l'accuratezza OCR proprio per
l'attività di trascrizione del testo richiesta da questo prompt, quindi la chiamata di
descrizione richiede sempre un livello di dettaglio elevato, indipendentemente dal livello
usato dalla richiesta originale in ingresso. Ciò influisce soltanto sul corpo della richiesta
interna di descrizione; non modifica il modo in cui OmniRoute inoltra l'`image_url.detail`
del chiamante nella richiesta principale: tale valore predefinito viene applicato
separatamente, e soltanto per i client OpenCode rilevati, in `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Il ramo del self-loop di descrizione
nel formato wire di Anthropic non dispone di un campo `detail` e non è interessato
da nessuno dei due valori predefiniti.

#### Limite dell'output della descrizione (`modalityBridgeVisionMaxChars`)

| Chiave                         | Predefinito | Intervallo           |
| ------------------------------ | ----------- | -------------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` oppure 100–50000 |

`0` (valore predefinito) significa **nessun limite**: la descrizione restituita da
`callVisionModel()` viene trasmessa senza modifiche, preservando il comportamento
esistente. Qualsiasi valore nell'intervallo 100–50000 tronca la descrizione aggiungendo
il suffisso `…` prima che venga reinserita come `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Aumentare questo valore per le attività OCR ricche di dettagli nelle quali il modello
downstream necessita della trascrizione completa; ridurlo per limitare l'utilizzo di
token da parte di modelli di visione prolissi.
Il campo della dashboard si trova nel pannello Avanzate della scheda Visione
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) e porta qualsiasi
valore compreso tra 1 e 99 al minimo di 100, lasciando invariato uno `0`
esplicito: `0` è di per sé un valore Zod valido
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), non semplicemente
il valore predefinito che indica "non impostato".

#### Cache delle descrizioni (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL in memoria per gli output delle descrizioni, condivisa a livello
dell'intero processo. Chiave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con
framing basato sul prefisso di lunghezza (senza collisioni ai confini dei campi). Il componente
del modello è il modello bridge **configurato**, non il modello che ha effettivamente risposto:
`callVisionModel` può eseguire internamente il fallback e creare una chiave per ogni tentativo
frammenterebbe la cache. Le descrizioni non riuscite non vengono mai memorizzate nella cache. Impostazioni:

| Chiave                          | Predefinito | Intervallo |
| ------------------------------- | ----------- | ---------- |
| `modalityBridgeCacheEnabled`    | `true`      | —          |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440     |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000    |

#### Normalizzazione delle immagini remote (chiamata describe ricorsiva/recupero base64)

Quando il bridge recupera autonomamente un'immagine **remota** — nella chiamata ricorsiva describe di Anthropic e nella conversione base64 per il formato wire di Claude (`ensureBase64ImagesForClaudeWire`), entrambe tramite `fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — l'URI di dati risultante viene elaborato da `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) prima di essere incorporato nella richiesta al modello di visione. Le immagini sovradimensionate vengono ridimensionate impostando il **lato lungo a 2048 px** (in linea con il limite di ridimensionamento già applicato lato server da OpenAI/Anthropic), riducendo così i byte caricati e la latenza senza modificare ciò che vede il modello di visione. Il ridimensionamento usa `sharp`, caricato tramite importazione dinamica: su una piattaforma in cui il relativo binario nativo non riesce a caricarsi, `normalizeDataUri()` **non genera mai eccezioni** — ripiega sul passaggio diretto dei byte originali, così il percorso di conversione describe/base64 continua sempre a funzionare. Anche i byte non appartenenti a un'immagine (un recupero che non ha restituito un'immagine decodificabile) vengono trasmessi senza modifiche. Questa normalizzazione è limitata alle immagini recuperate dal bridge per la propria chiamata ricorsiva e non viene mai applicata al payload non elaborato del chiamante, in conformità con il principio di modifica esclusivamente su consenso esplicito (Regola rigida n. 20).

#### Schema delle impostazioni + migrazione

Le nuove chiavi `modalityBridge*` vengono convalidate tramite Zod in `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, il trio `modalityBridgeCache*` e il gruppo `modalityBridgeAudio*` utilizzato dall'Audio Bridge. La migrazione `141_modality_bridge_settings.sql` copia i valori legacy `visionBridge*` esistenti nelle nuove chiavi corrispondenti (in modo idempotente, senza mai sovrascrivere un valore `modalityBridge*` impostato dall'operatore); le chiavi legacy continuano a essere accettate come fallback di lettura per un ciclo di rilascio.

#### Header di trasparenza + statistiche

Le risposte trasformate tramite describe includono
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(creato da `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts` e applicato da `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`). Le richieste reindirizzate non ricevono **alcun** header: il payload non è stato modificato e il cambio di modello è già visibile nel campo `model` del corpo della risposta.

`GET /api/modality-bridge/stats` (autenticazione di gestione, stesso livello di `GET /api/settings`) restituisce i contatori in memoria per ciascuna modalità
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` per `vision`, `audio` e
`video`. `averageLatencyMs` usa `latencySamples`, non tutti i tentativi, come denominatore; un'operazione senza misurazione temporale non crea artificiosamente un campione di zero millisecondi. `bridged` rimane l'alias retrocompatibile per le conversioni riuscite; i tentativi non riusciti non lo incrementano.
Per progettazione, i contatori vengono azzerati al riavvio del processo
(telemetria, non contabilizzazione).

#### Configurazione della dashboard

La pagina dedicata della dashboard è
`/dashboard/settings/modality-bridge`. Le relative schede indirizzabili tramite URL `Vision`, `Audio` e `Video` preservano i parametri di query durante la modifica del valore `tab`.
La scheda Vision consente di configurare l'abilitazione, la modalità, la selezione del modello (inclusa l'impostazione predefinita automatica), i prompt sensibili all'attività, i limiti avanzati relativi a timeout/immagini/lunghezza della descrizione/cache, i contatori di runtime e una richiesta di esempio protetta. Anche la scheda Audio è operativa: consente di configurare l'abilitazione, un selettore di modelli riservato a STT con opzione Auto, i limiti di timeout/durata massima delle clip, i contatori audio e un test di esempio `input_audio`. La scheda Video è funzionale: mostra lo stato di runtime di FFmpeg/ffprobe, corrispondente a uno dei quattro stati espliciti dell'interfaccia (`unknown` mentre la verifica è in corso o non è stato possibile completarla, `restricted` su un host della dashboard non loopback in cui la verifica viene ignorata lato client, `unavailable` dopo che la verifica ha confermato l'assenza degli strumenti oppure `available` con le versioni di FFmpeg/ffprobe), conserva le impostazioni di abilitazione/modello/fotogrammi/video/timeout, filtra il selettore dei modelli mostrando quelli compatibili con la visione ed espone i contatori video.

La precedente scheda Vision Bridge nelle impostazioni IA è ora un collegamento di compatibilità alla nuova pagina e non contiene più una seconda copia del modulo. Media Providers collega inoltre i flussi di lavoro Image-to-Text e Speech-to-Text alle schede corrispondenti di Modality Bridge, senza rimuovere il playground Speech-to-Text esistente.

**Bypass dell'ammissione per la chiamata ricorsiva:** quando la chiamata describe viene instradata attraverso il loop `/v1` interno di OmniRoute (modello di un provider non standard), la richiesta secondaria invia `x-omniroute-admission-bypass: internal` e viene autenticata con la credenziale risolta per il loop interno: il valore sentinella locale `sk_omniroute` in modalità locale oppure la chiave d'ambiente `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurata dall'operatore (#1350), in modo che le distribuzioni con `REQUIRE_API_KEY=true` possano comunque eseguire la chiamata describe. Il bypass viene accettato solo per quelle credenziali esatte, quindi i client esterni non possono usare l'header per eludere l'ammissione.

I valori predefiniti legacy si trovano in `src/shared/constants/visionBridgeDefaults.ts`; i nuovi valori predefiniti per modalità/funzionamento sensibile all'attività/cache e il resolver delle impostazioni si trovano in `src/shared/constants/modalityBridgeDefaults.ts`. Il meccanismo di protezione espone un'opzione del costruttore `deps`, così i test possono iniettare implementazioni fittizie di `getSettings` e `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercetta le richieste di chat contenenti audio prima che raggiungano una destinazione che non è nota per accettare input audio. Non reindirizza mai la richiesta di chat: le parti audio vengono trascritte tramite l'endpoint multipart esistente compatibile con OpenAI e il modello di chat selezionato prosegue con le trascrizioni testuali.

Flusso:

1. Risolvere `supportsAudio` tramite `getResolvedModelCapabilities()`. I metadati
   espliciti del registro dei provider hanno la precedenza, seguiti dai metadati statici
   del modello e quindi da `modalities_input` sincronizzato. Un elenco di input dichiarato
   senza `audio` equivale a `false`; in assenza di indicazioni sulle funzionalità, il valore
   rimane `null`. Sia `false` sia `null` attivano il bridge conservativo, mentre `true`
   lo ignora.
2. Risolvere le impostazioni `modalityBridgeAudio*` ed estrarre da ogni messaggio
   le parti audio di primo livello sostituibili tramite il rilevatore condiviso
   `detectMediaParts()`. I formati wire supportati sono `input_audio` di OpenAI,
   `audio_url` e `source.media_type: "audio/*"`. L'audio annidato viene rilevato ai
   fini dell'instradamento, ma non viene rimosso dal percorso di sostituzione. Il
   lavoro è limitato da `modalityBridgeAudioMaxClips`; le parti successive rimangono
   inalterate.
3. Rispettare un `provider/model` configurato oppure consentire a
   `selectAudioBridgeModel()` di scorrere `AUDIO_TRANSCRIPTION_PROVIDERS`
   nell'ordine stabile del catalogo e selezionare il primo modello con credenziali
   del provider attive e utilizzabili.
4. `callAudioTranscription()` converte l'audio base64/data URI in un `file`
   multipart oppure scarica un `audio_url` remoto tramite la protezione in uscita
   che consente solo destinazioni pubbliche, con DNS pinning e un limite di 25 MB.
   Invia quindi tramite POST il file e il modello selezionato al self-loop locale
   `/v1/audio/transcriptions`, autenticato con `resolveSelfLoopBearer()`. La route
   di trascrizione esistente esegue la normale ricerca delle credenziali, la gestione
   di cooldown/limiti di frequenza e l'inoltro al provider.
5. Le chiamate riuscite sostituiscono le rispettive parti con
   `[Audio N]: <transcript>`. Le chiamate vengono eseguite con `Promise.allSettled`:
   un singolo errore conserva la parte audio originale (contratto #4012). Se tutte
   le chiamate falliscono e viene dimostrato che il destinatario ha
   `supportsAudio === false`, le parti diventano
   `[Audio N]: (unavailable — no STT provider connected)` (contratto #8430). Per
   un destinatario sconosciuto (`null`), se tutte le chiamate falliscono il contenuto
   rimane inalterato. Un destinatario comprovato come solo testo senza credenziali
   STT utilizzabili riceve lo stesso segnaposto esplicito senza effettuare alcuna
   chiamata di rete.

Le trascrizioni riuscite utilizzano la cache LRU/TTL del Modality Bridge condivisa
a livello di processo. La chiave combina il riferimento audio, l'etichetta stabile
dell'operazione `audio-transcription` e il modello STT selezionato; gli errori non
vengono mai memorizzati nella cache. I tentativi audio aggiornano i contatori condivisi
`bridged`, `cacheHits`, `failures` e `lastUsedAt`. Le risposte trasformate includono
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; le richieste
inalterate non ricevono un segmento Audio Bridge.

Le impostazioni di runtime sono archiviate nel DB e validate con Zod:

| Chiave                        | Valore predefinito | Intervallo          |
| ----------------------------- | ------------------ | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`             | —                   |
| `modalityBridgeAudioModel`    | `""`               | Automatico o ID STT |
| `modalityBridgeAudioTimeout`  | `60000`            | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`                | 1–10                |

La cache condivisa continua a essere controllata da `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` e `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercetta le parti video di primo livello nei `messages` di Chat Completions e
nell'`input` dell'API Responses prima che venga chiamato un destinatario privo di
supporto video nativo noto. I formati supportati sono `input_video`, `video_url`,
`video_source`, URL HTTPS e data URI `data:video/*;base64,...`. I semplici nomi
di file nel testo non vengono considerati video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gestisce l'attraversamento della
richiesta, il controllo di funzionalità/policy, l'aggregazione per richiesta e il
payload della risposta. Il lavoro per ciascun video — acquisizione, cache del
risultato completo, descrizione di una sequenza di fotogrammi (che integra
qualsiasi trascrizione audio dichiarata dal chiamante) e metriche/annullamento/pulizia
per tentativo — è nascosto dietro `processVideoPart` in `videoBridgePipeline.ts`,
chiamato una volta per ogni parte video all'interno del ciclo di `preCall`. Tale
modulo definisce inoltre i confini espliciti delle porte `VideoMediaBrokerPort`
(acquisizione dei byte ed estrazione dei fotogrammi campionati),
`VideoAudioTranscriptionPort` (integrazione di una trascrizione audio dichiarata
dal chiamante con le didascalie campionate) e `VideoDrilldownPort` (confine di
persistenza per l'analisi dettagliata dei fotogrammi; non ancora collegato a
`processVideoPart` — attualmente solo la route separata
`/api/modality-bridge/video/drilldown` scrive le voci di analisi dettagliata).

Il percorso pubblico delle richieste `/v1` non importa né invoca mai un
sottoprocesso. I video remoti vengono scaricati con un limite di 50 MiB; i video
base64 inline hanno un limite conservativo di 36 MiB decodificati per video,
affinché l'involucro di modello/messaggi/framing possa rimanere entro il limite
pubblico di ammissione delle richieste JSON pari a 50 MiB. La lunghezza inline
e le stime delle dimensioni decodificate vengono verificate prima dell'allocazione.
HTTPS è obbligatorio sia per l'URL remoto iniziale sia per ogni reindirizzamento,
utilizzando la protezione in uscita esistente che consente solo destinazioni
pubbliche, con DNS pinning. I byte attraversano quindi l'esatto confine interno
del broker `POST /api/modality-bridge/video/extract`. Tale route è sia
`LOCAL_ONLY` sia `SPAWN_CAPABLE`, accetta esclusivamente una richiesta autenticata
per processo proveniente da un loopback attendibile e non accetta mai URL,
percorsi del file system, eseguibili o elenchi di argomenti. La pipeline per le
dimensioni del corpo dell'API e il lettore incrementale del corpo dell'handler
applicano indipendentemente un limite di 50 MiB all'input del broker. La relativa
coda limitata esegue un'estrazione alla volta, consente quattro processi in attesa
e limita l'input in attesa a 100 MiB.

All'interno del broker, `ffprobe` legge un file locale privato; l'allowlist fissa dei formati esclude i formati di playlist e manifest. Per i container consentiti della famiglia MOV, i riferimenti esterni ai dati MOV rimangono disabilitati per impostazione predefinita e il comando fisso non ne abilita l'uso. Sia `ffprobe` sia `ffmpeg` utilizzano l'allowlist di protocolli limitata a `file`, un solo thread, array di argomenti fissi, nessuna shell ed eseguibili risolti da `PATH`. Gli stream di copertina con immagine allegata non sono candidati riproducibili. Tutti gli stream riproducibili devono rispettare i limiti e viene preferito uno stream predefinito esplicito prima del fallback deterministico all'indice più basso. I video sono limitati a 600 secondi, 8.192 pixel per dimensione e 33.554.432 pixel sorgente. FFmpeg campiona da 1 a 16 fotogrammi JPEG nei punti centrali, ridimensiona verso il basso il lato lungo fino a un massimo di 1.024 pixel senza ingrandire gli input più piccoli e non riceve mai un URL. Il campionamento è `uniform` per impostazione predefinita. Le policy opzionali `scene_aware` e sperimentali `segment_aware` eseguono un ulteriore passaggio FFmpeg fisso sullo stream locale già convalidato, selezionano un numero limitato di timestamp di scena `showinfo` e ricorrono in modo deterministico agli stessi punti centrali uniformi in caso di errore del rilevatore, timeout, output non valido o insieme di candidati vuoto. La modalità segment-aware assegna i campioni dei punti centrali proporzionalmente agli intervalli di scena convalidati; le evidenze segment-aware e il comportamento di fallback sono descritti in dettaglio di seguito. Il limite rigido di 16 fotogrammi viene applicato dopo la selezione in ogni policy. Quando una richiesta scene-aware dispone di un budget di un solo fotogramma, utilizza il punto centrale uniforme dell'intero video attivo o della finestra di messa a fuoco e riporta `policyEffective: uniform`: un singolo fotogramma di scena selezionato non può preservare entrambe le estremità temporali. Un chiamante può facoltativamente fornire una finestra di messa a fuoco finita (`start`/`end` in secondi); i limiti vengono vincolati alla durata del contenuto multimediale, le finestre invertite o non finite vengono rifiutate e tutte le policy di campionamento vengono eseguite esclusivamente all'interno dell'intervallo normalizzato. La finestra risultante viene inclusa nei metadati di campionamento e nel prefisso della descrizione non attendibile, affinché i modelli a valle possano distinguere un estratto mirato dall'intera sequenza temporale.

La messa a fuoco semantica delle didascalie è un'impostazione distinta ed esplicita. La modalità di analisi predefinita `full` mantiene il prompt esistente per i fotogrammi e non inoltra mai il testo della richiesta al modello di generazione delle didascalie. In modalità `focused`, il bridge legge soltanto il più recente `text`/`input_text` non vuoto creato dall'utente nello stesso container Chat o Responses, lo normalizza in NFC, comprime i caratteri di controllo e gli spazi bianchi e lo limita a 500 punti di codice Unicode. Un risultato vuoto ricorre esattamente al prompt `full`. Un suggerimento utilizzabile viene serializzato come JSON in un blocco dedicato al contesto utente non attendibile e può soltanto dare priorità ai dettagli osservabili; non può ignorare l'avviso separato che vieta di seguire istruzioni visibili o udibili nel contenuto multimediale. La messa a fuoco testuale non deduce mai `start`/`end` né modifica il campionatore temporale.

#### Evidenze strutturali dei segmenti FU-07

`segment_aware` utilizza un passaggio di pre-analisi limitato sullo stream video locale già convalidato. La catena di filtri fissa ridimensiona prima il video fino a una larghezza massima di 320 pixel, rileva i cambi di scena e gli intervalli bloccati, quindi campiona a 1 fotogramma al secondo per rilevare sfocatura, luminanza media e informazioni spaziali/temporali. Il passaggio è limitato a 600 campioni strutturali, un solo thread FFmpeg/filtri, le stesse allowlist limitate al protocollo `file` e ai container, un limite di 1 MiB per l'output del processo e un massimo di 30 secondi entro il meccanismo condiviso di interruzione/scadenza del broker. Non accetta mai dalla richiesta un comando, un filtro, un percorso o un URL.

I valori strutturali sono evidenze di campionamento deterministiche, non comprensione semantica del video. Non deducono soggetti, azioni, didascalie, parlato o intenzioni dell'utente. I confini di scena e di blocco formano i segmenti; la copertura dei blocchi, la sfocatura, l'esposizione, il dettaglio spaziale e il cambiamento temporale influenzano soltanto il modo in cui viene assegnato il budget esistente di 1–16 fotogrammi. Un segmento completamente bloccato è limitato a un solo fotogramma, mentre i segmenti non bloccati competono per il budget rimanente. Quando i confini sono più numerosi dei fotogrammi, viene mantenuta una copertura uniforme della sequenza temporale, affinché tagli rapidi iniziali non possano nascondere un lungo segmento finale. I confini di scena entro la risoluzione di analisi di 1 secondo rispetto a un confine di blocco vengono accorpati.

Filtri mancanti, evidenze non valide o vuote, un errore del rilevatore o il timeout della pre-analisi limitata attivano il fallback aperto alla policy esatta dei punti centrali uniformi. Un'interruzione da parte del chiamante o la scadenza del broker non attivano il fallback aperto: terminano il sottoprocesso in corso, impediscono la successiva estrazione dei fotogrammi e l'albero temporaneo privato viene rimosso in `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera fixture FFmpeg reali e deterministiche per misurare la riduzione delle chiamate di generazione delle didascalie dopo la deduplicazione, l'allocazione del budget per movimenti densi, le evidenze di sfocatura/esposizione/SI-TI, i tagli rapidi con una lunga coda e i falsi positivi delle dissolvenze graduali. Registra il tempo trascorso della pre-analisi e, dove `/usr/bin/time` è disponibile, il tempo CPU dei processi figli e il picco RSS. I relativi controlli di qualità sono esclusivamente oracoli strutturali. La qualità del modello reale di generazione delle didascalie rimane `HOLD` perché questo harness non dispone di un endpoint autorizzato né di un valutatore congelato. Anche i risparmi monetari rimangono `HOLD`, a meno che `--caption-cost-per-call-usd` non fornisca una stima positiva esplicita del costo per chiamata; lo script non inventa mai nessuno dei due risultati.

Ogni frame è limitato a 4 MiB, l'insieme di tutti i frame non elaborati a 23 MiB e la risposta serializzata del broker a 32 MiB. Una directory temporanea privata viene rimossa in `finally`. OmniRoute non include FFmpeg e non accetta un percorso personalizzato per l'eseguibile. Prima della generazione delle didascalie, il bridge applica un passaggio conservativo di deduplicazione visiva: ogni JPEG viene ridotto a un buffer in scala di grigi 16×16 e confrontato esclusivamente con l'ultimo frame conservato. Quando il budget richiesto per le didascalie supera un frame, l'estrazione fornisce un insieme limitato di candidati pari al massimo al doppio del budget e comunque non superiore a 16 frame. Il limite richiesto viene applicato solo dopo la deduplicazione; quando il budget è di almeno due frame, il primo e l'ultimo candidato selezionato vengono preservati durante il diradamento finale. La policy con versione `grayscale-16x16-mean-cells-v2` utilizza il valore maggiore tra la variazione media della luminanza e il rapporto delle celle della miniatura la cui variazione normalizzata è almeno 0,05. La soglia di duplicazione è la costante 0,04, scelta per garantire prevedibilità anziché essere esposta come impostazione di runtime. Questo segnale secondario ad alto contrasto preserva i piccoli movimenti e le variazioni del testo visibile che un confronto basato esclusivamente sulla media potrebbe nascondere. Gli errori del comparatore o del decoder adottano un comportamento fail-open e mantengono la copertura. I metadati di output distinguono tra candidati estratti, frame utilizzati correttamente e duplicati visivi eliminati.

Una parte video contrassegnata esplicitamente può richiedere un provino a contatto con timestamp. Il bridge crea una griglia JPEG con un massimo di 4 colonne e 16 frame. Ogni cella da 512 pixel imprime il timestamp della sorgente in una fascia inferiore ad alto contrasto, mentre gli stessi timestamp rimangono disponibili nei metadati testuali per l'associazione e il controllo a valle. Il JPEG completo rimane limitato a 32 MiB. Se `sharp` non riesce a decodificare o comporre la griglia, il bridge ripiega sui singoli frame JPEG; un annullamento da parte del client continua comunque a propagarsi durante l'operazione sul provino.

Le evidenze per la promozione sono deliberatamente separate dal microbenchmark sintetico di composizione. `scripts/perf/video-bridge-contact-sheet-eval.ts` definisce un'infrastruttura di test A/B con schema versionato per modelli di visione reali compatibili con OpenAI. Misura i token riportati dal provider, la latenza end-to-end effettiva (inclusa la composizione del provino), il numero di chiamate al modello e la conservazione dei fatti definiti nel manifesto. Le risposte non elaborate del modello non vengono scritte nel report; vengono conservati esclusivamente i digest SHA-256 e gli ID dei fatti corrispondenti. L'infrastruttura non effettua chiamate di rete o a modelli a pagamento a meno che non venga passato `--execute-real` e siano configurati `--model`, `OMNIROUTE_BASE_URL` e `OMNIROUTE_API_KEY`. Senza tale esecuzione reale esplicita, il suo verdetto leggibile dalla macchina rimane `HOLD`; le sole misurazioni sintetiche del payload e del numero di chiamate non costituiscono evidenze per la promozione.

I chiamanti possono associare un array facoltativo `transcript.cues` a una parte video supportata quando dispongono già di testo allineato. Ogni indicazione deve contenere `text`, un intervallo finito `start`/`end` incluso nella durata rilevata e un valore `source` incluso nella whitelist (`client`, `embedded` o `audio-bridge`); `confidence` ha come valore predefinito `1` e deve rimanere compreso tra `0` e `1`. Le indicazioni esattamente duplicate vengono accorpate. OmniRoute non avvia mai la trascrizione a partire da questi metadati: le indicazioni convalidate vengono copiate nel risultato descritto insieme a sorgente, confidenza e intervallo e vengono presentate come osservazioni non attendibili accanto alle didascalie dei frame. Il testo non valido, fuori intervallo o privo di provenienza viene rifiutato anziché essere inserito nel flusso delle didascalie. Entrambi i canali di trascrizione nel corpo della richiesta normalizzano la provenienza fornita in `client`, incluse le etichette `embedded` o `audio-bridge` dichiarate autonomamente. Solo un adattatore controllato dal server può assegnare tali etichette attendibili mediante l'argomento accessibile esclusivamente tramite codice `trustedSource`; un campo JSON della richiesta non può raggiungere tale argomento. Il testo della trascrizione rimane contenuto non attendibile derivato dai media, indipendentemente dalla sua provenienza, e non deve mai determinare l'autorizzazione.

Un chiamante avanzato può fornire una traccia `audioTranscript` per lo stesso video; questa viene trattata come testo fornito dal client, non come prova di una trascrizione eseguita dal server. Il punto di fusione elabora le osservazioni visive e audio con un'unica scadenza e un unico segnale di annullamento, le ordina su una timeline comune, accorpa i duplicati esatti e restituisce un risultato parziale quando riesce una sola delle due elaborazioni. Un valore `audioTranscript` non valido produce tale risultato parziale — la descrizione visiva viene mantenuta e il ramo audio registra un codice di errore sanificato — anziché causare il fallimento dell'intero video. La disponibilità di ciascun ramo, l'indicatore di risultato parziale e i codici di errore sanificati vengono conservati nel risultato descritto, nei metadati dei guardrail (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), nei metadati della cache dei risultati e nei contatori di fusione del bridge. Il percorso predefinito di Video Bridge non invoca la conversione da voce a testo né scarica una seconda copia del contenuto multimediale; in assenza di tale traccia esplicita, rimane limitato al video.

**Conservazione delle trascrizioni (#12150 P1).** Questo si applica automaticamente ogni volta che il
Video Bridge (a sua volta facoltativo) esegue il rendering di un segmento di trascrizione: non esiste un flag di
conservazione separato. Quando una richiesta esegue il rendering di un qualsiasi segmento di trascrizione (un
`transcript` dichiarato dal chiamante o un `audioTranscript` unificato), il guardrail lo contrassegna come
`videoBridgeObserved` e produce una copia oscurata della descrizione del video:
un rendering identico in cui il corpo di testo libero di ogni segmento viene sostituito con
`[redacted-video-transcript]`, ottenuto sostituendo il campo strutturato del segmento
prima dell'assemblaggio della stringa (mai analizzando il testo appiattito, affinché nessun contenuto
del segmento, ostile o ordinario, inclusi i corpi contenenti `]` come
`[inaudible]`/`[music]`, possa sopravvivere). Il corpo della richiesta conservato nel registro delle chiamate sostituisce
ogni parte testuale derivata dal video con tale copia oscurata, abbinata in base
all'uguaglianza del contenuto; l'ancoraggio `fullText` viene riletto dal payload completo del guardrail
precedente alla chiamata, quindi l'abbinamento riesce anche dopo che i guardrail successivi nella catena (gli strumenti
di mascheramento di PII e credenziali, con priorità 10/95) riscrivono sul posto il testo della descrizione e
dopo che l'inserimento di prompt di sistema, handoff e memoria rimodella l'array dei messaggi. Il
corpo inviato a monte al modello rimane invariato. Inoltre, una richiesta osservata non popola
alcuna Memory durevole (viene ignorata l'estrazione derivata sia dalla richiesta sia dalla risposta),
quindi la risposta del modello non può riportare il testo della trascrizione in Memory.

**Campi video non elaborati (#12430).** Quando il bridge è abilitato e il supporto video nativo è sconosciuto o assente, anche i campi `transcript`/`audioTranscript` definiti attivano `videoBridgeObserved`, persino dopo un errore della descrizione o il raggiungimento di un limite `maxVideos`. `null` e le stringhe vuote vengono conteggiati; i campi assenti e i metadati non video no. Le copie conservate oscurano questi campi oppure omettono la richiesta, mentre cache e Memory vengono escluse.

In tali percorsi di fallback, i segmenti validi forniti dal chiamante diventano parti `text`/`input_text`
supportate anziché campi non standard del provider. Entrambe le tracce fornite nella richiesta
rimangono osservazioni `client` non attendibili, con un avviso esplicito che il video
non è stato descritto e che le marche temporali non sono state verificate rispetto ai contenuti multimediali. I limiti esistenti
di 256 segmenti/64 KiB totali e per segmento si applicano congiuntamente alle due tracce;
le marche temporali devono rientrare nel limite massimo di 600 secondi del broker e in qualsiasi finestra di
interesse fornita. Le tracce non valide vengono eliminate e non inoltrate come testo arbitrario; una traccia
associata valida può comunque essere utilizzata, a meno che non venga superato il loro limite combinato. I campi nulli/vuoti
non aggiungono testo. Questo fallback non aggiunge alcun recupero o trascrizione dei contenuti multimediali.
I campi di estensione della trascrizione vengono rimossi dal contenitore video di fallback e dai relativi
oggetti `video_url`/`source`. L'elenco consentito per il protocollo OpenAI rimane rigoroso; i contenitori video
con supporto nativo sconosciuto rimangono disponibili e le destinazioni note come esclusivamente testuali mantengono indicatori sicuri.
Le copie oscurate strutturate proteggono il testo della trascrizione aggiunto, mentre la
richiesta originale di proprietà del chiamante rimane invariata. Le destinazioni con supporto nativo e i
bridge disabilitati mantengono il comportamento di esclusione esistente.

Le ulteriori copie conservate utilizzano lo stesso segnale di richiesta osservata. Lo snapshot non elaborato
della richiesta client precedente al guardrail, la richiesta in sospeso in memoria e il registro
delle richieste respinte anticipatamente sostituiscono strutturalmente i campi della trascrizione nelle parti video;
i prompt stringa sintetizzati dalle fasi della pipeline e dall'handoff del contesto vengono oscurati
nel punto di destinazione del corpo della richiesta conservata. L'indicatore `video_content_removed` conservato
fa sì che la continuazione tramite `previous_response_id` si interrompa in modo sicuro anziché ricostruire
testo intenzionalmente eliminato. Se una richiesta osservata perde la propria
copia oscurata per ciascuna parte prima della registrazione, o anche una sola di più copie video oscurate
non trova corrispondenza dopo le successive modifiche alla richiesta, il corpo della richiesta conservato viene
omesso completamente anziché conservare una trascrizione parzialmente oscurata.

Per una richiesta osservata, una risposta del modello potrebbe citare qualsiasi parte della
trascrizione senza un confine strutturato del segmento. Il relativo `responseBody` conservato nel registro delle chiamate
viene pertanto sostituito da un indicatore di omissione; l'artefatto dettagliato della
pipeline, che può includere corpi upstream/client e frammenti del flusso, non viene conservato.
Le cache semantiche, di idempotenza e di riproduzione del ragionamento ignorano
letture e scritture per tale richiesta. La richiesta al provider e la risposta
visibile al client rimangono invariate. I byte keepalive iniziali vengono rimossi dal buffer
temporaneo quando l'artefatto dettagliato viene omesso. L'avviso EventStream non valido di Kiro
riporta solo il numero di byte del payload, mai il relativo contenuto né l'errore non elaborato
del parser JSON.
Ciò non implica che sia stata eseguita una verifica di ogni diagnostica non correlata di provider/plugin;
l'analisi più ampia delle destinazioni con conservazione è monitorata in #11658.

Il ciclo di vita interno `/api/modality-bridge/video/drilldown` è un substrato di cache separato,
autenticato tramite loopback/token. Ogni operazione richiede inoltre un
ID principale opaco canonico. Prima che un chiamante di produzione venga abilitato, deve
derivare tale ID dal tenant autenticato e non deve mai inoltrare un valore
selezionato dal client. Le chiavi della cache associano tale principale agli ID canonici di sessione e
di riferimento video, memorizzano soltanto le chiavi derivate tramite SHA-256 e limitano sia le letture
sia l'eliminazione allo stesso principale. La cache memorizza al massimo 16 fotogrammi JPEG
derivati per voce, li fa scadere dopo dieci minuti e supporta letture limitate tramite
`start`/`end` o l'eliminazione esplicita della sessione.

Ogni principale è limitato a 16 voci e 64 MiB di dati JPEG canonici. Tali
limiti sono indipendenti dal limite globale di 64 voci/256 MiB: la pressione sulla quota
di un principale comporta l'espulsione soltanto delle voci usate meno di recente da tale principale prima
che venga presa in considerazione l'espulsione LRU globale. Le voci scadute vengono rimosse sia dalla contabilizzazione
per principale sia da quella globale durante l'attività della cache, mentre l'annullamento e gli errori di convalida non
salvano una sostituzione parziale.

La cache rifiuta Base64 non canonico, padding eccessivo, contenuti multimediali non JPEG, JPEG non validi o
troncati e JPEG che generano un avviso durante una decodifica completa dell'immagine con limiti definiti tramite `sharp`.
Ogni immagine accettata viene ricodificata come JPEG canonico; larghezza e altezza vengono ricavate
dai byte decodificati anziché considerare attendibili i campi forniti dal chiamante, e gli eventuali byte
poliglotti finali vengono eliminati anziché conservati. Solo il buffer compresso canonico con limiti
definiti viene conteggiato in entrambe le quote. Il limite JSON sul canale di trasmissione include l'overhead Base64 per il limite massimo
di input decodificato di 32 MiB. Ogni
derivazione archiviata registra il formato e la risoluzione JPEG convalidati, la policy di campionamento,
la versione della derivazione, l'ora di creazione, l'hash del contenuto calcolato dal server e il riferimento
al genitore sottoposto a hash, oltre all'hash del contenuto del genitore fornito dal chiamante attendibile. L'annullamento viene verificato
tra le fasi asincrone di decodifica e hashing, prima del commit atomico nella cache.

Questa tranche non collega ancora un produttore di produzione alla route e non
fornisce la selezione delle varianti a più risoluzioni. Il percorso trasparente delle richieste
Video Bridge non comporta quindi alcun lavoro aggiuntivo, mentre la derivazione dell'identità associata
al tenant e il ciclo di vita completo multirisoluzione di FU-08 rimangono esplicitamente attività successive,
anziché essere documentati come funzionalità complete.

I fotogrammi vengono descritti in sequenza con il modello Video configurato. Un override
Video vuoto eredita l'impostazione Vision; se entrambi sono vuoti, l'auto-router Vision
seleziona il modello effettivo con funzionalità visive. Le descrizioni generate
correttamente sostituiscono la parte originale con un prefisso stabile `[Video description:`
che contrassegna inoltre il testo come osservazione non attendibile derivata da contenuti multimediali e indica ai modelli
a valle di non seguire le istruzioni presenti nei contenuti multimediali. Le chiavi della cache delle descrizioni dei fotogrammi
includono i byte JPEG, il prompt, il timestamp e il modello effettivo; vengono memorizzate nella cache solo le descrizioni
generate correttamente. Le voci della cache conservano il modello produttore effettivamente utilizzato con successo,
incluso un modello di fallback; il bridge restituisce `mixed` quando fotogrammi diversi
sono stati prodotti da modelli diversi. Un hit della cache riutilizza l'identità di tale produttore
invece di rietichettarla come il piano di routing richiesto. La cache dei risultati dell'intero video
usa come chiave ogni input che modifica l'output: prompt, modello effettivo,
policy di campionamento, numero di fotogrammi, modalità di analisi semantica, fingerprint SHA-256
dell'indicazione di focus normalizzata, finestra di focus, `transcript`,
`audioTranscript` e flag del contact sheet; di conseguenza, la modifica di una qualsiasi di queste
dimensioni produce un cache miss, senza mai riutilizzare dati obsoleti. Anche la versione,
la soglia e il numero limitato di fotogrammi candidati della policy di deduplicazione visiva sono espliciti nella
chiave e nei metadati della cache dei risultati; una modifica della policy non può quindi riutilizzare una
descrizione obsoleta dell'intero video. I metadati v4 della cache dei risultati conservano la modalità e
il fingerprint, mai l'attività utente non elaborata. I metadati del guardrail riportano sia la
modalità di analisi richiesta sia quella effettiva; una modalità `focused` richiesta senza
testo utente utilizzabile viene indicata come effettivamente `full`.

Il guardrail estrae tutte le parti video supportate, ma non ne descrive più di
`modalityBridgeVideoMaxVideos`. Per una destinazione per cui è stato verificato che
`supportsVideo === false`, i video non elaborati correttamente e quelli oltre il limite diventano marcatori testuali sicuri
espliciti, in modo che non rimanga alcun video non elaborato. Quando la funzionalità è sconosciuta, tali parti
mantengono il proprio contenitore video; qualsiasi trascrizione di fallback segue la conversione testuale
con limiti definita sopra. Le destinazioni con `supportsVideo === true` ignorano il bridge.
Il segnale di interruzione della richiesta del client si propaga attraverso download, coda del broker,
sottoprocessi e chiamate di generazione delle descrizioni; le interruzioni arrestano l'elaborazione tra un video e l'altro e non consentono mai
il passaggio dei contenuti multimediali non elaborati in caso di errore.

Le impostazioni di runtime sono archiviate nel DB e convalidate tramite Zod:

| Chiave                              | Valore predefinito | Intervallo/comportamento                                                                                            |
| ----------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`            | Runtime facoltativo, con adesione esplicita                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`           | `full` conserva descrizioni generiche; `focused` usa il contesto limitato e non attendibile dell'utente più recente |
| `modalityBridgeVideoModel`          | `""`               | Eredita il modello Vision Bridge                                                                                    |
| `modalityBridgeVideoFrameCount`     | `8`                | 1–16                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`        | `uniform`, `scene_aware` o `segment_aware` proporzionale; un errore del rilevatore comporta il fallback a `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`                | 1–4                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`           | 1000–120000 ms                                                                                                      |

I valori legacy persistenti del timeout Video superiori a 120 secondi vengono limitati alla
scadenza del broker; le nuove scritture delle impostazioni che superano tale limite vengono rifiutate.
`GET /api/modality-bridge/video/runtime` richiede una località loopback attendibile e contrassegnata
prima dell'autenticazione o del probing del runtime, quindi richiede l'autenticazione
di gestione. Restituisce solo `available`, le versioni sanificate di FFmpeg/ffprobe e un motivo
fisso quando il runtime non è disponibile. L'endpoint di estrazione interno non è
un'API pubblica di caricamento: la saturazione della coda restituisce `503` più `Retry-After`, la
disconnessione di un chiamante restituisce `499` e la scadenza fissa del broker restituisce `504`. Le risposte convertite aggiungono
`video->text;model=<visionModel>;parts=<videos>` all'header centrale
`x-omniroute-modality-bridge` senza rimuovere i segmenti Vision o Audio.

### Mascheratore PII (`piiMasker.ts`)

Viene eseguito in **entrambe** le fasi.

- **`preCall`** clona il payload, esamina `system`, `messages`, `input` e
  `prompt` (inclusi gli elementi costituiti da semplici stringhe) e applica `processPII()` (da
  `@/shared/utils/inputSanitizer`) ai campi stringa `content`/`text`. Quando
  `PII_REDACTION_ENABLED=true`, le PII rilevate vengono oscurate nel
  payload in uscita. Questo comportamento è indipendente da `INPUT_SANITIZER_MODE` (che controlla
  solo la policy relativa alla prompt injection). Quando l'oscuramento è disattivato, la chiamata registra i conteggi
  dei rilevamenti senza riscrivere il contenuto.
- **`postCall`** clona in profondità la risposta, esegue `sanitizePIIResponse()` insieme
  al mascheratore per il formato dell'API Responses (`maskResponsesOutput` — copre
  `output_text` e `output[].content[].text`). Se si verifica un oscuramento, la
  risposta modificata sostituisce quella originale.

Il guardrail non blocca mai; si limita ad annotare (`meta.detections`,
`meta.redacted`) o a riscrivere.

#### Selezione per tipo, pattern personalizzati e contatori dei rilevamenti

**Dashboard → Settings → Security → PII masking** consente di scegliere _cosa_ mascherare. Non
attiva il mascheramento: questo continua a dipendere da `PII_REDACTION_ENABLED` (richiesta) e
`PII_RESPONSE_SANITIZATION` (risposta + SSE), entrambi disattivati per impostazione predefinita.

- **Selezione per tipo** — gli id integrati sono elencati in
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Se non impostata, vengono selezionati tutti
  i tipi (il comportamento precedente all'introduzione di questa impostazione). Il pattern
  `ssn_us` del motore delle richieste corrisponde a `ssn`. I modelli (Minimal, Standard, Financial,
  Brazilian, USA, Full) si limitano a selezionare le caselle nell'interfaccia utente.
- **Pattern personalizzati** — fino a 20 pattern regex o con caratteri jolly (`*` = fino a 64
  caratteri diversi dagli spazi, `?` = uno). Le corrispondenze diventano `[CUSTOM_REDACTED]`.
  Ogni pattern viene elaborato da `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): massimo 500 caratteri, flag limitati
  a `g i m s u`, deve essere compilabile, deve superare il controllo `safe-regex` (backtracking
  catastrofico) e non deve corrispondere a una stringa vuota o a un segnaposto di oscuramento.
  Un pattern non valido viene rifiutato al momento del salvataggio e del test, mentre una riga
  memorizzata non valida viene ignorata in fase di esecuzione anziché essere compilata. I pattern personalizzati vengono
  applicati solo quando il mascheramento è attivo.
- **Contatori dei rilevamenti** — conteggi per tipo (mai i valori corrispondenti), conservati in
  memoria e azzerati al riavvio (`src/lib/pii/piiDetectionStats.ts`). Aumentano solo
  quando il mascheramento è attivo.

Le impostazioni risiedono nella tabella `key_value` (namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) e vengono lette tramite una cache di 1 s. API:

| Metodo | Percorso                 | Scopo                                                                       |
| ------ | ------------------------ | --------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stato dei flag, `enabledTypes`, `customPatterns`, contatori dei rilevamenti |
| `PUT`  | `/api/settings/pii`      | Sostituisce `enabledTypes` (`null` = tutti) e/o `customPatterns`            |
| `POST` | `/api/settings/pii/test` | Prova un pattern su un campione di massimo 8 KB senza salvare nulla         |

Tutti e tre richiedono l'autenticazione di gestione e convalidano il corpo con Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt Injection (`promptInjection.ts`)

Rileva strutture ostili nei contenuti forniti dall'utente e applica la
policy configurata. Il comportamento è determinato dalle variabili di ambiente e dalle opzioni del
costruttore:

| Impostazione     | Variabile di ambiente                                                                                  | Valore predefinito | Effetto                                                                                                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Abilitazione     | `INPUT_SANITIZER_ENABLED`                                                                              | `true`             | Quando è `false`, il guardrail termina immediatamente.                                                                                                                                                                      |
| Modalità         | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn`             | Policy di injection: `block`, `warn` o `log`. (`redact` è accettato per retrocompatibilità, ma **non** rimuove il testo dell'injection; la riscrittura delle PII della richiesta è controllata da `PII_REDACTION_ENABLED`.) |
| Soglia di blocco | Opzione `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`             | Gravità minima necessaria per il blocco. Con il valore predefinito, il livello Medium viene solo monitorato.                                                                                                                |

**Precedenza delle modalità** (`getMode`): `options.mode` del chiamante →
override del **feature flag nel DB** `INJECTION_GUARD_MODE` (Dashboard → Settings →
Feature Flags) → variabile di ambiente `INJECTION_GUARD_MODE` → variabile di ambiente `INPUT_SANITIZER_MODE` →
`warn`. Un override dalla dashboard ha quindi la precedenza sulle variabili di ambiente, pertanto l'interfaccia
Feature Flags controlla in tempo reale il guardrail in esecuzione (senza riavvio). La lettura dal DB è fail-safe:
in caso di errore, il guardrail ripiega sul comportamento basato sulle variabili di ambiente e, quando non è
impostato alcun override, il comportamento è identico alla risoluzione basata esclusivamente sulle variabili di ambiente.

Fonti di rilevamento:

1. `sanitizeRequest()` da `@/shared/utils/inputSanitizer` (insieme di rilevatori condiviso
   utilizzato altrove nella pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrati (attualmente `system_override_inline` e
   `markdown_system_block`, entrambi con gravità `high`).
3. `customPatterns` facoltativi passati tramite le opzioni del costruttore (stringhe, regex
   o record `{ name, pattern, severity }`).

Quando `mode === "block"` **e** almeno un rilevamento raggiunge la soglia di
gravità, `preCall` restituisce `{ block: true, message: "Request rejected:
suspicious content detected" }`. Nelle modalità `warn`/`log`, il guardrail registra
l'evento ma consente la chiamata. Anche l'helper condiviso `evaluatePromptInjection()` viene esportato
per i chiamanti che devono valutare i prompt senza passare attraverso il registro.

**Limite di scansione (v3.8.20):** il rilevatore esamina solo i **primi 16 KB** del
testo del prompt concatenato — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 byte) in
`src/shared/utils/inputSanitizer.ts`. Sia `detectInjection()` sia
`evaluatePromptInjection()` eseguono `slice(0, MAX_INJECTION_SCAN_BYTES)` prima di avviare
il ciclo sui pattern. Le direttive di injection si trovano all'inizio di un input, quindi questo
limita l'utilizzo di CPU/GC da parte delle espressioni regolari sui payload di diverse centinaia di KB senza indebolire il rilevamento (cfr.
#3932, #4041).

### Mascheramento delle credenziali (`credentialMasker.ts`)

Viene eseguito in **entrambe** le fasi, per ultimo nella catena predefinita (priorità `95`). Oscura
i pattern noti di chiavi API / token segreti nel payload in uscita (contenuto dei messaggi,
argomenti delle chiamate agli strumenti, risultati degli strumenti) **e** nella risposta del provider, affinché una
credenziale incollata in un prompt (o restituita come eco dal risultato di uno strumento) non venga divulgata
al provider upstream o nuovamente al client.

- **Solo previa attivazione**, secondo la stessa convenzione dell'oscuramento dei dati PII (adiacente alla Regola rigida n. 20):
  disabilitato a meno che `settings.credentialRedactionEnabled === true` **oppure**
  `CREDENTIAL_REDACTION_ENABLED=true`. Quando è disattivato, il guardrail non esegue alcuna operazione —
  non blocca e non riscrive mai.
- `redactCredentials()` percorre l'intero albero del payload/della risposta (`walkValue()`,
  protetto dalla prototype pollution e dai cicli tramite `WeakSet`) e sostituisce le corrispondenze con
  un segnaposto `[REDACTED:<type>]`, clonando solo i rami effettivamente
  modificati.
- `CREDENTIAL_PATTERNS` copre le chiavi dei provider LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), i token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), le chiavi di pagamento (Stripe, Square), le chiavi
  cloud (chiave di accesso AWS, Twilio, SendGrid, Mailgun), le chiavi private / i JWT,
  le stringhe di connessione contenenti credenziali (`mongodb://user:pass@...`, ecc.) e
  un pattern generico per il valore degli header `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Le chiavi strutturate come header (`authorization`, `x-api-key`, `api-key`,
  `apikey`) vengono oscurate strutturalmente (solo il valore, preservando i prefissi dello schema come
  `Bearer `/`Basic `) anziché tramite l'espressione regolare generica per il testo.
- Il guardrail non blocca mai; si limita a riscrivere (`modifiedPayload` /
  `modifiedResponse`) e ad aggiungere annotazioni (`meta.credentialsRedacted`, `meta.count`).

Protezione dalle regressioni: `tests/unit/credential-masker-guardrail.test.ts`.

## Contratto di base (`base.ts`)

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
  block?: boolean; // true interrompe immediatamente la catena
  message?: string; // mostrato in caso di blocco
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // restituito da preCall per riscrivere la richiesta
  modifiedResponse?: TValue; // restituito da postCall per riscrivere la risposta
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

Un guardrail segnala "nessuna modifica" restituendo `void`, `{}` oppure
`{ block: false }`. La restituzione di un `modifiedPayload`/`modifiedResponse`
sostituisce il valore che attraversa la catena per i guardrail successivi.
`signal?: AbortSignal` propaga il ciclo di vita del chiamante nei guardrail. L'interruzione di una richiesta costituisce l'eccezione fail-open intenzionale: i bridge multimediali interrompono il lavoro ed eseguono la pulizia senza ripristinare i contenuti multimediali non elaborati verso una destinazione che, com'è noto, non li supporta.

## Registro (`registry.ts`)

Il singleton `guardrailRegistry` espone:

- `register(guardrail)` — aggiunge un guardrail (o lo sostituisce in base al nome normalizzato) e
  lo riordina in base alla `priority` crescente.
- `clear()` / `list()` — utilità amministrative.
- `runPreCallHooks(payload, context)` — itera sui guardrail attivi, propaga il
  payload tramite `modifiedPayload` e si arresta al primo `block: true`.
- `runPostCallHooks(response, context)` — applica lo stesso flusso sul lato della risposta.
- `resetGuardrailsForTests({ registerDefaults })` — cancella lo stato e, facoltativamente,
  registra nuovamente i valori predefiniti per garantire un isolamento pulito dei test.

Entrambi gli esecutori restituiscono `{ blocked, payload|response, results, guardrail?, message? }`,
dove `results` è un array di record `GuardrailExecutionResult` che includono
i campi `blocked`, `skipped`, `modified`, `error` e `meta` per ciascun guardrail,
utili per il tracciamento.

### Disabilitazione dei guardrail per singola richiesta

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` aggrega un
elenco senza duplicati dei nomi dei guardrail da ignorare per la richiesta
corrente. Esistono cinque canali, letti in questo ordine e uniti in un unico elenco
(in fase di deduplicazione prevale la prima occorrenza):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` nel corpo della richiesta (al livello principale)
3. `metadata.disabledGuardrails` nel corpo della richiesta (solo quando `metadata` è un oggetto)
4. Header `x-omniroute-disabled-guardrails`
5. Header legacy `x-disabled-guardrails`

Tutti e cinque i canali vengono uniti, inclusi i due header: l'invio sia di
`x-omniroute-disabled-guardrails` sia di `x-disabled-guardrails` fa ignorare l'unione
dei rispettivi elenchi e un header moderno vuoto non nasconde più quello legacy
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corretto in
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

I valori possono essere array di stringhe o una stringa separata da virgole; i nomi vengono privati degli spazi
superflui e normalizzati in kebab-case minuscolo (`pii_masker` → `pii-masker`), mentre le voci
vuote vengono eliminate. Il risultato viene passato tramite `context.disabledGuardrails`
al registro, che ignora i guardrail corrispondenti (`skipped: true` in `results`).

L'elenco di disabilitazione influisce solo sul **registro**. La modalità `block` per la prompt injection
è un limite obbligatorio: il middleware di protezione dalla prompt injection
(`src/middleware/promptInjectionGuard.ts`) chiama `evaluatePromptInjection()`
senza alcun elenco di disabilitazione controllato dal chiamante (la chiamata inutilizzata a
`resolveDisabledGuardrails({ body })` che eseguiva in precedenza è stata rimossa in
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)); pertanto, una richiesta
che disabilita `prompt-injection` viene comunque rifiutata in modalità `block`. Questo comportamento è
intenzionale. I canali di disabilitazione sono controllati dal chiamante (corpo della richiesta,
metadati, header) e un chiamante non deve poter disattivare un controllo di sicurezza
impostato dall'operatore
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). L'unione degli header
introdotta da [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
modifica solo quali guardrail del registro vengono ignorati; non consente a un client
di aggirare il middleware. Le policy obbligatorie dei guardrail per chiave e per gruppo sono
tracciate nell'RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Vedere [Copertura e limiti](#coverage-and-limits).

## Ordine di esecuzione

Per ogni richiesta che passa attraverso `src/sse/handlers/chat.ts` e
`open-sse/handlers/chatCore.ts` (le route della famiglia chat elencate in
[Copertura e limiti](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` crea l'elenco degli elementi da ignorare a partire dalla chiave API, dal corpo
   e dagli header.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` esegue i guardrail in ordine
   crescente di priorità:
   - I guardrail disabilitati vengono registrati come `skipped`.
   - Il metodo `preCall` di ciascun guardrail può riscrivere il payload tramite `modifiedPayload`.
   - Il primo `block: true` interrompe anticipatamente la catena e l'handler restituisce
     una risposta di rifiuto del guardrail.
3. Il payload (eventualmente riscritto) passa al routing combinato e all'inoltro
   verso il servizio upstream.
4. **Solo senza streaming:** dopo che la risposta è stata assemblata,
   `guardrailRegistry.runPostCallHooks(...)` esegue la stessa catena sulla
   risposta. In questo caso, `block: true` elimina la risposta upstream e restituisce HTTP 400. Le risposte in streaming ignorano completamente questo passaggio.

I guardrail che generano eccezioni vengono registrati con `error: <message>` e inseriti nei log tramite
`logger.warn`, ma la catena continua: per progettazione, il comportamento è fail-open.

## Copertura e limiti

Il registro dei guardrail è integrato esclusivamente nella pipeline della chat. Questi limiti sono
definiti da `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` e
`tests/unit/guardrail-pipeline-characterization.test.ts`; aggiornare deliberatamente questi test
quando il comportamento cambia.

### Dove vengono eseguiti gli hook

| Hook / controllo                    | Viene eseguito su                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                   | Richieste gestite da `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (e `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` e il proxy della chat Telegram. Anche l'endpoint di test della dashboard `/api/guardrails/test`. Un blocco pre-chiamata restituisce HTTP 400. |
| `runPostCallHooks`                  | Solo risposte della chat **senza streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Le risposte in streaming non lo raggiungono mai.                                                                                                                                                                                                                                                                                            |
| PII in streaming                    | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), inserito tramite pipe in `streamingPipeline.ts` quando `PII_RESPONSE_SANITIZATION` è attivo. Non è un guardrail, quindi i canali di disabilitazione non hanno alcun effetto su di esso.                                                                                                                                                                                            |
| Middleware injection-guard (legacy) | Ogni route `/v1` contenente prompt, incluse quelle della famiglia chat (vedere [copertura delle route](#injection-guard-route-coverage--red-team-phase-8--block-d)). Solo prompt injection.                                                                                                                                                                                                                                                      |

### Cosa non è coperto

- **Route per contenuti multimediali, embedding e dati** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) non raggiungono mai il registro. In questi casi non viene
  eseguito alcun mascheramento delle PII, mascheramento delle credenziali o bridge di modalità. Il loro unico
  controllo è il middleware injection-guard legacy.
- **Le risposte in streaming** non ricevono guardrail post-chiamata: nessun
  `pii-masker` o `credential-masker` post-chiamata e nessun blocco post-chiamata. Si applica soltanto la trasformazione PII
  per lo streaming (quando `PII_RESPONSE_SANITIZATION` è attivo). Una credenziale
  restituita nella risposta in streaming non viene oscurata.
- **Canali di disabilitazione rispetto al middleware (per progettazione):** il middleware valuta
  la prompt injection tramite una propria chiamata a `evaluatePromptInjection()`, senza
  passare alcun elenco di disabilitazione controllato dal chiamante. La modalità `block` è un limite
  obbligatorio che non può essere aggirato tramite disabilitazioni controllate dal chiamante, incluse quelle sulle route della famiglia chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). La disabilitazione di
  `prompt-injection` ignora soltanto il guardrail del registro.

### Cosa elabora una risposta prima della fase post-chiamata

Nel percorso senza streaming, l'ordine è: estrazione dalla memoria → esecuzione degli strumenti integrati
→ guardrail post-chiamata → uscita per blocco post-chiamata → archiviazione nella cache semantica.

- **L’estrazione della memoria** e **l’esecuzione degli strumenti** vedono la risposta prima che i
  guardrail post-chiamata possano riscriverla o bloccarla. A partire dalla
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), l’estrazione della memoria
  sottopone il testo estratto a `sanitizePII` quando
  `PII_RESPONSE_SANITIZATION` è attiva (sia in streaming sia senza streaming), ma una
  risposta che viene successivamente bloccata nella fase post-chiamata è stata comunque resa disponibile alla memoria e
  agli strumenti.
- **La cache semantica** memorizza la risposta dopo la fase post-chiamata, quindi conserva la
  risposta riscritta, mentre una risposta bloccata non viene mai memorizzata nella cache. Le voci della cache sono
  indicizzate per chiave API.

## Configurazione

Variabili d'ambiente lette dai guardrail integrati:

| Variabile                             | Utilizzata da          | Effetto                                                                                                                                 |
| ------------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Impostare su `false` per disabilitare completamente il rilevamento.                                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Criterio per le injection: `warn`, `block` o `log`. Il valore legacy `redact` non riscrive il testo dell'injection.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Modalità del guardrail per le injection; è anche un flag di funzionalità del DB che **sostituisce** le variabili d'ambiente (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Gravità minima rifiutata da `MODE=block`: `high` (predefinita), `medium` o `low`.                                                       |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Alias legacy di `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Se impostata su `true`, le PII della richiesta vengono oscurate (indipendentemente dalla modalità di injection).                        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (a valle) | Controlla il comportamento del mascheramento sul lato della risposta.                                                                   |

I guardrail Modality Bridge leggono la configurazione di runtime dall'archivio
delle impostazioni supportato dal DB (`getSettings()`), non dalle variabili d'ambiente. Le chiavi principali per Vision sono
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` e
`modalityBridgeCacheMaxEntries`. Le chiavi legacy
`visionBridge*` sono accettate esclusivamente come fallback di lettura per un ciclo, come documentato;
le scritture dalla dashboard utilizzano le chiavi principali. I valori predefiniti e il resolver di fallback
si trovano in `src/shared/constants/modalityBridgeDefaults.ts`, mentre le costanti legacy
sono mantenute in `src/shared/constants/visionBridgeDefaults.ts`.

Audio utilizza `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` e `modalityBridgeAudioMaxClips`, oltre alle impostazioni
condivise `modalityBridgeCache*`. Audio non prevede alcun fallback alle chiavi legacy, poiché queste
chiavi sono state introdotte con lo schema Modality Bridge.

Video utilizza `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` e
`modalityBridgeVideoTimeout`, oltre alle impostazioni condivise `modalityBridgeCache*`.
È disabilitato per impostazione predefinita perché FFmpeg/ffprobe sono dipendenze operative
facoltative e la generazione di didascalie per i fotogrammi aumenta la latenza e il costo del modello.

## Guardrail personalizzati

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

Passaggi:

1. Crea `src/lib/guardrails/myGuardrail.ts` estendendo `BaseGuardrail`.
2. Implementa `preCall` e/o `postCall`.
3. Esegui la registrazione al momento dell'importazione (tramite `registerDefaultGuardrails`) oppure
   chiama `guardrailRegistry.register(...)` in fase di esecuzione — il registro sostituisce
   qualsiasi guardrail precedente con lo stesso nome normalizzato.
4. Aggiungi i test in `tests/unit/` (esempi esistenti:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Test

Usa `resetGuardrailsForTests()` tra un test e l'altro per iniziare da uno stato noto.
Passa `{ registerDefaults: false }` per iniziare con un registro vuoto e
registrare solo i guardrail sottoposti a test. Vision Bridge accetta la dependency
injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge espone punti
di integrazione equivalenti per impostazioni, funzionalità, selezione del modello STT, verifiche
delle credenziali e trascrizione. I test possono quindi verificare entrambi i flussi senza
accesso al DB o alla rete.

## Vedi anche

- `src/lib/guardrails/` — implementazione
- `src/shared/utils/inputSanitizer.ts` — rilevatore condiviso su cui si basano
  il rilevamento della prompt injection e il mascheramento delle PII
- `src/shared/constants/visionBridgeDefaults.ts` — valori predefiniti di Vision Bridge ed
  elenco dei modelli con bridge forzato
- `src/shared/constants/modalityBridgeDefaults.ts` — valori predefiniti di runtime condivisi per Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — livello ortogonale (circuit breaker, periodi di cooldown)
- `docs/reference/ENVIRONMENT.md` — riferimento completo delle variabili di ambiente

## Copertura delle route e red team per il guard contro le injection (Fase 8 · Blocco D)

Il guard contro le injection (`createInjectionGuard` / `withInjectionGuard`) copre tutte le route
che accettano prompt degli utenti. Rispetta `INJECTION_GUARD_MODE` (valore predefinito `warn` = solo registrazione nei log;
`block` = restituisce HTTP 400 `SECURITY_001`).

| Tipo              | Route                                                                                                                                                | Modalità predefinita |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Testo (esistenti) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                 |
| Generative        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                 |
| Dati              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                 |

L'estrazione del testo (`extractMessageContents`) copre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (notturno, `nightly-llm-security.yml`):** promptfoo verifica che ogni route blocchi
il corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak esegue sonde (viene ignorato in assenza del secret).
`moderations` è incluso per coerenza. La modalità di blocco è un confine obbligatorio: `evaluatePromptInjection()`
ignora l'elenco di disabilitazione per richiesta passato dal middleware, quindi `disabledGuardrails`
**non** esenta una route da tale controllo ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Il workflow notturno (`.github/workflows/nightly-llm-security.yml`, cron + attivazione
manuale) comprende due job:

- **`promptfoo-guard` (bloccante)** — esegue `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Ogni caso avversario (ad es. "ignore all
  previous instructions…", jailbreak in stile DAN) verifica che la risposta contenga
  `error.code === "SECURITY_001"`, ovvero che il guard abbia effettivamente rifiutato la richiesta.
- **`garak` (consultivo)** — esegue garak con `--probes promptinject,dan,leakreplay`
  su un'istanza OmniRoute locale (`http://localhost:20128/v1`). È subordinato alla presenza di un
  secret del provider (`PROMPTFOO_PROVIDER_KEY`); in sua assenza viene ignorato senza errori ed è seguito
  da `|| true`, pertanto genera un report senza causare il fallimento della CI.

La copertura dell'helper del guard (`createInjectionGuard` / `withInjectionGuard`)
si estende a ogni route `/v1` che accetta prompt; il testo del prompt viene estratto da
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` tramite
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.
