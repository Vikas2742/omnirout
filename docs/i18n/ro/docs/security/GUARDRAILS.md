# Guardrails (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sursa de adevăr:** `src/lib/guardrails/`
> **Ultima actualizare:** 2026-10-17 — v3.8.52 (adăugat [Acoperire și limite](#coverage-and-limits):
> ce rute și căi de răspuns ating hook-urile, antetele de dezactivare fuzionate (#16412), modul de
> blocare a injecției ca graniță obligatorie (#16413) și ce vede un răspuns înainte de post-call)

Guardrails aplică reguli de siguranță, politică și transformări de conținut la granița
dintre OmniRoute și furnizorii upstream. Fiecare guardrail poate inspecta (și opțional
respinge, transforma sau adnota) payload-urile cererilor (`preCall`) și răspunsurile
upstream (`postCall`).

Sistemul este **fail-open**: dacă un guardrail aruncă o excepție în timpul execuției,
registrul înregistrează eroarea și continuă cu următorul guardrail, în loc să facă
cererea să eșueze. Blocarea este o decizie explicită (`block: true`), niciodată un
accident. Singura excepție este o cerere anulată: când `signal`-ul apelantului este
anulat, un guardrail care aruncă o excepție respinge rularea hook-ului în loc să fie
omis.

Hook-urile **nu** rulează pe fiecare rută sau pe fiecare răspuns. Citiți
[Acoperire și limite](#coverage-and-limits) înainte de a vă baza pe un guardrail ca
mecanism de control de securitate.

## Guardrails încorporate

Registrul încarcă automat șase guardrails în ordinea priorității la import
(vezi `registry.ts` → `registerDefaultGuardrails()`):

| Prioritate | Nume                | Etapă/etape    | Fișier                |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Numerele de prioritate mai mici rulează **primele**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Modelul de bază GLM 5.3 și `glm-5.3-{low,high,max}` au metadate explicite de
registru/spec `supportsVision:false`. Variantele GLM 5.3 Flash rămân modele cu viziune
nativă. Ruta `/v1/messages` din Claude Code intră în lanțul partajat de guardrails
pre-call `handleChat` **înainte** de traducerea Claude-to-OpenAI; imaginile imbricate
din rezultatele uneltei `Read` trebuie descrise sau gestionate înainte ca acea traducere
să le ridice în conținut OpenAI `image_url` (#17069).

Interceptează cererile care conțin imagini și vizează **modele fără viziune** și fie
redirecționează întreaga cerere către un model capabil de viziune, fie înlocuiește
părțile cu imagini cu descrieri text produse de un model de viziune configurabil înainte
de apelul upstream. Astfel, furnizorii doar-text pot gestiona transparent payload-uri
multimodale.

Flux:

1. Se omite dacă modelul țintă suportă deja viziune (cu excepția cazului în care apare
   în lista de bridge forțat `isVisionBridgeForcedModel`).
2. Se extrag părțile cu imagini prin `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), care deleagă către **detectorul unificat de media**
   `detectMediaParts()` din `open-sse/utils/mediaParts.ts` — sursa unică de adevăr
   partajată cu filtrul de compatibilitate al combo-urilor. Extragerea este permisă
   doar pentru formele pe care `replaceImageParts` le poate reînsăila (contractul
   extract↔replace): OpenAI `image_url`, Anthropic base64 `source.type:"base64"`,
   Anthropic URL `source.type:"url"` și Responses API `input_image`. Imaginile
   corespunzătoare imbricate în `tool_result.content` din Claude Code și în ieșirile
   uneltelor din Responses sunt de asemenea extrase și înlocuite la căile lor
   originale; formele doar-indicator sunt material pentru filtrul de combo-uri și nu
   sunt extrase.
   Se omite dacă nu se găsește niciuna.
3. Se rezolvă configurația runtime prin `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): noile chei de setări
   `modalityBridge*` au prioritate; cheile legacy `visionBridge*` rămân un **fallback
   de un ciclu** (fereastră de rollback). Se omite înainte de orice parcurgere a
   media dacă bridge-ul este dezactivat.
4. Selectorul de mod (`modalityBridgeVisionMode`, vezi tabelul de mai jos) decide
   între redirecționare și descriere. Redirecționarea returnează `modifiedPayload` cu
   doar `model` schimbat, plus meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Calea de descriere: se limitează imaginile la `maxImages`, se compune promptul
   adaptat sarcinii, se consultă cache-ul de descrieri, se apelează modelul de viziune
   **în paralel** (`Promise.allSettled`) și se injectează părți text
   `[Image N]: <description>` în locul lor. O descriere eșuată produce `null`: imaginea
   brută este păstrată pentru ținte necunoscute/cu viziune (#4012), dar o **țintă
   directă confirmată doar-text** sau un combo fără viziune primește un stub text
   explicit `(unavailable — no vision-capable provider connected)` pentru fiecare
   imagine nedescrisă, inclusiv eșecurile parțiale și imaginile peste limita apelurilor
   de descriere (#17069). Fallback-ul existent de descriere pentru combo-urile cu toate
   apelurile eșuate rămâne în vigoare (#8430).
6. Se returnează `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de mod (`modalityBridgeVisionMode`)

| Mod        | Implicit | Comportament                                                                                                                                                                                                                                                                                                               |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Euristică legacy, neatinsă (#6640/#7204): modelele non-combo/`auto/` sunt redirecționate către cel mai bun model de viziune, cu excepția cazului în care modelul original are deja credențiale utilizabile (atunci se descrie); țintele combo descriu întotdeauna.                                                         |
| `describe` |          | Descrie întotdeauna — blocul de rerutare este omis în întregime; modelul ales de utilizator răspunde întotdeauna.                                                                                                                                                                                                          |
| `reroute`  |          | Forțează rerutarea: garda de păstrare a modelului cu credențiale este ocolită. Garda de credențiale pentru **ținta** rerutării se aplică în continuare — când nu există nicio țintă de viziune utilizabilă, bridge-ul blochează cu o eroare clară, în loc să descrie sau să trimită imagini brute către o țintă doar-text. |

Modurile forțate scurtează circuitul **înainte** ca euristica auto să ruleze; comportamentul `auto` este identic octet cu octet cu cel al guardrail-ului dinainte de PR-1.

#### Domeniul cheii API (`visionBridgeKeyScope.ts`)

Când cheia API a apelantului restricționează `allowedConnections`, pool-urile de cotă (`allowedQuotas`) sau modelele (`allowedModels` / `blockedModels` / `modelAccessMode: "restricted"` / `disableNonPublicModels`), bridge-ul alege numai modele de rerutare și de descriere pe care cheia le poate folosi, pe conexiuni pe care cheia le poate folosi. Apelul de descriere trece apoi întotdeauna prin self-loop-ul OmniRoute cu header-ul `x-omniroute-self-loop-key-id`, astfel încât cererea de chat care îl primește aplică din nou politica de conexiuni și de modele a acelei chei. `enforceApiKeyPolicy()` respectă acel header numai împreună cu bearer-ul self-loop, deci poate doar restrânge accesul, iar un id care nu se rezolvă este respins.

Dacă nu este permis niciun model de viziune pentru cheie, o **țintă confirmată doar-text** respinge local cererea cu imagine cu un HTTP 400 clar, în loc să transmită octeții imaginii către un upstream incapabil (#17069). Pentru țintele cu capacitate de viziune necunoscută sau nativă, calea de descriere își păstrează comportamentul anterior de fail-open (meta `{ skipped: true, reason: "no_permitted_vision_model" }`). Cererile fără cheie și cheile fără aceste restricții se comportă exact ca înainte.

#### Prompt de descriere conștient de sarcină (`modalityBridgeVisionTaskAware`)

Implicit **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) adaugă textul **ultimului mesaj al utilizatorului** (trunchiat la 500 de caractere) la promptul de descriere de bază, orientând descrierea către ceea ce a întrebat de fapt utilizatorul (pattern-ul codex-vision-proxy) și cerând modelului de viziune să transcrie textul vizibil. Cu flag-ul dezactivat — sau fără text — promptul de bază este folosit neschimbat.

Cererea proprie compatibilă OpenAI a self-loop-ului de descriere (`callVisionModelSingle()` din `visionBridgeHelpers.ts`) solicită întotdeauna `image_url.detail: "high"` — necondiționat, pentru fiecare apelant/furnizor, fără a depinde de vreun semnal al clientului. Eșantionarea cu detaliu redus degradează acuratețea OCR exact pentru sarcina de transcriere de text pe care o cere acest prompt, așa că apelul de descriere în sine solicită întotdeauna detaliu ridicat, indiferent de nivelul de detaliu folosit de cererea originală primită. Acest lucru afectează doar corpul cererii interne de descriere; nu schimbă modul în care OmniRoute transmite mai departe propriul `image_url.detail` al apelantului în cererea principală — acea valoare implicită este aplicată separat, și numai pentru clienții OpenCode detectați, în `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Ramura în format wire Anthropic a self-loop-ului de descriere nu are câmp `detail` și nu este afectată de niciuna dintre valorile implicite.

#### Limitarea ieșirii de descriere (`modalityBridgeVisionMaxChars`)

| Cheie                          | Implicit | Interval          |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` sau 100–50000 |

`0` (implicit) înseamnă **fără limită** — descrierea returnată de `callVisionModel()` este transmisă nemodificată, păstrând comportamentul existent. Orice valoare din intervalul 100–50000 trunchiază descrierea cu un sufix `…` înainte ca aceasta să fie inserată înapoi ca `[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` din `src/lib/guardrails/visionBridge.ts`). Măriți această valoare pentru sarcini OCR bogate în detalii, unde modelul din aval are nevoie de transcrierea completă; reduceți-o pentru a limita consumul de tokeni la modelele de viziune vorbărețe. Câmpul din dashboard se află în panoul Advanced al tabului Vision (`modality-bridge-max-chars` din `ModalityBridgeVisionTab.tsx`) și limitează orice valoare între 1 și 99 la pragul minim de 100, lăsând un `0` explicit neatins — `0` este o valoare Zod validă în sine (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nu doar valoarea implicită „nesetată”.

#### Cache-ul de descriere (`modalityBridge/bridgeCache.ts`)

Cache în memorie LRU + TTL pentru ieșirile de descriere, partajat la nivel de proces. Cheie = `sha256(imageRef + composedPrompt + configuredBridgeModel)` cu încadrare cu prefix de lungime (fără coliziuni la granițele câmpurilor). Componenta de model este modelul de bridge **configurat**, nu modelul care a răspuns de fapt — `callVisionModel` poate face fallback intern, iar cheierea pe fiecare încercare ar fragmenta cache-ul. Descrierile eșuate nu sunt niciodată memorate în cache. Setări:

| Cheie                           | Implicit | Interval |
| ------------------------------- | -------- | -------- |
| `modalityBridgeCacheEnabled`    | `true`   | —        |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440   |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000  |

#### Normalizarea imaginilor de la distanță (auto-apel describe/preluare base64)

Atunci când bridge-ul preia el însuși o imagine **de la distanță** — auto-apelul Anthropic describe și conversia în base64 pentru formatul claude-wire (`ensureBase64ImagesForClaudeWire`), ambele prin `fetchRemoteImageAsDataUri()` din `visionBridgeHelpers.ts` — URI-ul de date rezultat este procesat prin `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) înainte de a fi încorporat în cererea către modelul de viziune. Imaginile supradimensionate sunt redimensionate la o **latură lungă de 2048px** (corespunzând limitei de redimensionare pe care OpenAI/Anthropic o aplică deja pe server), ceea ce reduce numărul de octeți încărcați și latența fără a schimba ceea ce vede modelul de viziune. Redimensionarea utilizează `sharp`, încărcat prin import dinamic: pe o platformă unde binarul său nativ nu poate fi încărcat, `normalizeDataUri()` **nu generează niciodată o excepție** — revine la transmiterea nemodificată a octeților originali, astfel încât fluxul describe/conversie-base64 continuă să funcționeze întotdeauna. Octeții care nu reprezintă o imagine (o preluare care nu a returnat o imagine decodabilă) sunt, de asemenea, transmiși nemodificați. Această normalizare se limitează la imaginile pe care bridge-ul le preia pentru propriul auto-apel — nu este aplicată niciodată sarcinii utile brute transmise direct de apelant, în conformitate cu principiul modificării exclusiv prin consimțământ explicit (Regula strictă nr. 20).

#### Schema setărilor + migrare

Noile chei `modalityBridge*` sunt validate cu Zod în `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, triada `modalityBridgeCache*` și grupul `modalityBridgeAudio*` utilizat de Audio Bridge. Migrarea `141_modality_bridge_settings.sql` copiază valorile existente din vechile chei `visionBridge*` în noile chei corespunzătoare (idempotent, fără a suprascrie vreodată o valoare `modalityBridge*` setată de operator); cheile vechi rămân acceptate ca alternativă pentru citire pe durata unui ciclu de lansare.

#### Antet de transparență + statistici

Răspunsurile transformate prin describe conțin `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (construit de `buildModalityBridgeHeader()` în `modalityBridge/bridgeStats.ts`, aplicat de `withModalityBridgeHeader()` în `src/sse/handlers/chatHelpers.ts`). Cererile redirecționate **nu** primesc antet — sarcina utilă nu a fost modificată, iar schimbarea modelului este deja vizibilă în câmpul `model` din corpul răspunsului.

`GET /api/modality-bridge/stats` (autentificare de administrare, același nivel ca `GET /api/settings`) returnează contoarele din memorie pentru fiecare modalitate `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` pentru `vision`, `audio` și `video`. `averageLatencyMs` utilizează `latencySamples`, nu toate încercările, ca numitor; o operațiune fără informații de temporizare nu generează artificial un eșantion de zero milisecunde. `bridged` rămâne aliasul compatibil cu versiunile anterioare pentru conversiile reușite; încercările eșuate nu îl incrementează. Prin proiectare, contoarele sunt resetate la repornirea procesului (telemetrie, nu contabilizare).

#### Configurarea panoului de control

Pagina dedicată din panoul de control este `/dashboard/settings/modality-bridge`. Filele sale `Vision`, `Audio` și `Video`, adresabile prin URL, păstrează parametrii de interogare la schimbarea valorii `tab`. Fila Vision oferă activarea, modul, selectarea modelului (inclusiv valoarea implicită automată), prompturi adaptate sarcinii, limite avansate pentru expirare/imagini/lungimea descrierii/cache, contoare de execuție și o cerere exemplificativă protejată. Fila Audio este, de asemenea, funcțională: oferă activarea, un selector exclusiv pentru modele STT cu opțiunea Auto, limite pentru expirare/durata maximă a clipului, contoare audio și un test exemplificativ `input_audio`. Fila Video este funcțională: raportează starea de execuție FFmpeg/ffprobe — una dintre cele patru stări explicite ale interfeței (`unknown` cât timp verificarea este în curs sau nu a putut fi finalizată, `restricted` pe o gazdă a panoului de control care nu este loopback și unde verificarea este omisă pe partea de client, `unavailable` după ce verificarea a confirmat absența sau `available` împreună cu versiunile FFmpeg/ffprobe) — persistă activarea/modelul/limitele pentru cadre/video/expirare, filtrează selectorul de modele pentru a afișa modele cu capabilități de viziune și oferă contoare video.

Fostul card Vision Bridge din setările AI este un link de compatibilitate către noua pagină; acesta nu mai deține o a doua copie a formularului. Media Providers oferă, de asemenea, linkuri de la fluxurile Image-to-Text și Speech-to-Text către filele corespunzătoare din Modality Bridge, fără a elimina spațiul de testare Speech-to-Text existent.

**Ocolirea controlului de admitere pentru auto-apel:** atunci când apelul describe este rutat prin propriul auto-loop `/v1` al OmniRoute (model de furnizor nestandard), subcererea trimite `x-omniroute-admission-bypass: internal` și este autentificată cu acreditarea auto-loop rezolvată — santinela locală `sk_omniroute` în modul local sau cheia de mediu `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurată de operator (#1350), astfel încât implementările cu `REQUIRE_API_KEY=true` să poată executa în continuare apelul describe. Ocolirea este acceptată numai pentru exact aceste acreditări, astfel încât clienții externi nu pot utiliza antetul pentru a omite controlul de admitere.

Valorile implicite vechi se află în `src/shared/constants/visionBridgeDefaults.ts`; noile valori implicite pentru mod/funcționalitatea adaptată sarcinii/cache și rezolvatorul de setări se află în `src/shared/constants/modalityBridgeDefaults.ts`. Mecanismul de protecție oferă o opțiune de constructor `deps`, astfel încât testele să poată injecta implementări false pentru `getSettings` și `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Interceptează cererile de chat care conțin audio înainte ca acestea să ajungă la o destinație despre care nu se știe că acceptă intrări audio. Nu redirecționează niciodată cererea de chat: părțile audio sunt transcrise prin endpoint-ul multipart compatibil OpenAI existent, iar modelul de chat ales continuă cu transcrierile text.

Flux:

1. Rezolvați `supportsAudio` prin `getResolvedModelCapabilities()`. Metadatele explicite din registrul de provideri au prioritate, apoi metadatele statice ale modelului, apoi `modalities_input` sincronizat. O listă de intrări declarată fără `audio` este `false`; absența dovezilor privind capabilitatea rămâne `null`. Atât `false`, cât și `null` activează puntea conservatoare, în timp ce `true` o ocolește.
2. Rezolvați setările `modalityBridgeAudio*` și extrageți părțile audio de nivel superior care pot fi îmbinate din fiecare mesaj prin detectorul partajat `detectMediaParts()`. Formele acceptate sunt `input_audio`, `audio_url` și `source.media_type: "audio/*"` din OpenAI. Audio-ul imbricat este detectat pentru rutare, dar nu este eliminat de calea de îmbinare. Volumul de lucru este limitat de `modalityBridgeAudioMaxClips`; părțile ulterioare rămân neatinse.
3. Respectați un `provider/model` configurat sau lăsați `selectAudioBridgeModel()` să parcurgă `AUDIO_TRANSCRIPTION_PROVIDERS` în ordinea stabilă a catalogului și să selecteze primul model cu o credențială de provider activă utilizabilă.
4. `callAudioTranscription()` convertește audio base64/data-URI într-un `file` multipart sau descarcă un `audio_url` la distanță prin garda de ieșire doar-publică, cu fixarea DNS și o limită de 25 MB. Apoi trimite prin POST fișierul și modelul selectat către bucla locală `/v1/audio/transcriptions`, autentificându-se cu `resolveSelfLoopBearer()`. Ruta de transcriere existentă efectuează căutarea normală a credențialelor, gestionarea cooldown-ului/limitării ratei și dispatch-ul către provider.
5. Apelurile reușite își înlocuiesc părțile cu `[Audio N]: <transcript>`. Apelurile rulează cu `Promise.allSettled`: o eșuare individuală păstrează partea audio originală (contractul #4012). Dacă toate apelurile eșuează și ținta este dovedită `supportsAudio === false`, părțile devin `[Audio N]: (unavailable — no STT provider connected)` (contractul #8430). Pentru o țintă necunoscută (`null`), un rezultat cu toate eșuate rămâne neatins. O țintă dovedită doar-text, fără o credențială STT utilizabilă, primește același stub explicit fără a efectua un apel de rețea.

Transcriptele reușite folosesc cache-ul LRU/TTL Modality Bridge la nivel de proces. Cheia combină referința audio, eticheta stabilă de operație `audio-transcription` și modelul STT selectat; eșuările nu sunt niciodată stocate în cache. Încercările audio actualizează contoarele partajate `bridged`, `cacheHits`, `failures` și `lastUsedAt`. Răspunsurile transformate poartă `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; cererile neatinse nu primesc un segment Audio Bridge.

Setările de runtime sunt stocate în baza de date și validate cu Zod:

| Cheie                         | Implicit | Interval        |
| ----------------------------- | -------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —               |
| `modalityBridgeAudioModel`    | `""`     | Auto sau ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10            |

Cache-ul partajat rămâne controlat de `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` și `modalityBridgeCacheMaxEntries`.

### Puntea Video (`videoBridge.ts`, `videoBridgePipeline.ts`)

Interceptează părțile video de nivel superior din `messages` la Chat Completions și din `input` la Responses API înainte de a fi apelată o țintă fără suport video nativ cunoscut. Formele acceptate sunt `input_video`, `video_url`, `video_source`, URL-uri HTTPS și data URI-uri `data:video/*;base64,...`. Numele de fișiere simple din text nu sunt tratate ca video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) deține traversarea cererii, verificarea capabilității/politicii, agregarea pe cerere și payload-ul răspunsului. Lucrul per-video — achiziția, cache-ul întregului rezultat, descrierea unei secvențe de cadre (care fuzionează orice transcript audio declarat de apelant) și metricile/abortarea/curățarea per încercare — este ascuns în spatele `processVideoPart` din `videoBridgePipeline.ts`, apelat o dată pentru fiecare parte video în bucla lui `preCall`. Acel modul definește, de asemenea, granițele explicite de port `VideoMediaBrokerPort` (achiziționarea octeților și extragerea cadrelor eșantionate), `VideoAudioTranscriptionPort` (fuzionarea unui transcript audio declarat de apelant cu subtitrările eșantionate) și `VideoDrilldownPort` (granița de persistență pentru drill-down-ul cadrelor; încă neconectată la `processVideoPart` — doar ruta separată `/api/modality-bridge/video/drilldown` scrie în prezent intrări de drill-down).

Calea publică de cerere `/v1` nu importă și nu invocă niciodată un subproces. Videoclipurile la distanță sunt descărcate sub o limită de 50 MiB; videoclipurile base64 inline au o limită conservatoare de 36 MiB decodați per videoclip, astfel încât anvelopa model/mesaje/încadrare să poată rămâne în limita publică de admitere a cererilor JSON de 50 MiB. Lungimea inline și estimările dimensiunii decodate sunt verificate înainte de alocare. HTTPS este obligatoriu pe URL-ul inițial la distanță și pe fiecare redirecționare, folosind garda de ieșire existentă doar-publică cu fixarea DNS. Octeții traversează apoi exact granița internă de broker `POST /api/modality-bridge/video/extract`. Această rută este atât `LOCAL_ONLY`, cât și `SPAWN_CAPABLE`, acceptă doar o cerere autentificată per proces către loopback de încredere și nu acceptă niciodată un URL, o cale de sistem de fișiere, un executabil sau o listă de argumente. Pipeline-ul de dimensionare a corpului API și cititorul incremental de corp al handler-ului impun independent o limită de intrare de 50 MiB pentru broker. Coada sa mărginită rulează o singură extracție odată, permite patru joburi în așteptare și limitează intrarea în așteptare la 100 MiB.

În interiorul brokerului, `ffprobe` citește un fișier local privat; lista fixă de formate permise exclude formatele de tip playlist și manifest. Pentru containerele permise din familia MOV, referințele externe la date MOV rămân dezactivate implicit, iar comanda fixă nu le activează. Atât `ffprobe`, cât și `ffmpeg` folosesc lista de protocoale permise doar pentru `file`, un singur thread, tablouri fixe de argumente, fără shell și executabile rezolvate din `PATH`. Fluxurile de copertă cu imagine atașată nu sunt candidate redabile. Toate fluxurile redabile trebuie să respecte limitele, iar un flux implicit specificat explicit este preferat înaintea fallback-ului determinist la cel mai mic index. Videoclipurile sunt limitate la 600 de secunde, 8.192 pixeli pe dimensiune și 33.554.432 de pixeli sursă. FFmpeg eșantionează 1–16 cadre JPEG la mijlocul intervalului, micșorează latura lungă la cel mult 1.024 de pixeli fără a mări intrările mai mici și nu primește niciodată un URL. Eșantionarea este `uniform` implicit. Politicile opționale `scene_aware` și experimentala `segment_aware` efectuează o trecere FFmpeg fixă suplimentară peste fluxul local deja validat, selectează marcații temporale de scenă `showinfo` mărginite și revin determinist la aceleași puncte medii uniforme în caz de eșec al detectorului, timeout, ieșire malformată sau set gol de candidați. Modul segment-aware alocă eșantioane de mijloc proporțional cu intervalele de scenă validate; dovezile și comportamentul de fallback pentru segment-aware sunt detaliate mai jos. Limita strictă de 16 cadre este aplicată după selecție în fiecare politică. Când o cerere scene-aware are doar un buget de un cadru, aceasta folosește punctul de mijloc uniform al ferestrei active video complet sau de focalizare și raportează `policyEffective: uniform`: un singur cadru de scenă selectat nu poate păstra ambele capete temporale. Un apelant poate furniza opțional o fereastră de focalizare finită (`start`/`end` secunde); limitele sunt restrânse la durata conținutului media, ferestrele inversate sau nefinite sunt respinse, iar toate politicile de eșantionare sunt aplicate numai în intervalul normalizat. Fereastra rezultată este inclusă în metadatele de eșantionare și în prefixul descrierii nesigure, astfel încât modelele din aval să poată distinge un extras focalizat de cronologia completă.

Focalizarea semantică a descrierii este o setare separată și explicită. Modul implicit de analiză `full` păstrează promptul de cadre existent și nu transmite niciodată textul cererii către modelul de descriere. În modul `focused`, bridge-ul citește doar ultimul `text`/`input_text` nevid scris de utilizator din același container Chat sau Responses, îl normalizează la NFC, reduce caracterele de control și spațiile albe și îl limitează la 500 de puncte de cod Unicode. Un rezultat gol revine la promptul `full` exact. Un indiciu utilizabil este serializat ca JSON într-un bloc dedicat de context nesigur al utilizatorului și poate doar prioritiza detalii observabile; nu poate suprascrie avertismentul separat împotriva urmării instrucțiunilor vizibile sau audibile din conținutul media. Focalizarea textuală nu deduce niciodată `start`/`end` și nu modifică eșantionatorul temporal.

#### FU-07 Dovezi structurale de segment

`segment_aware` folosește o singură trecere de preanaliză mărginită peste fluxul video local deja validat. Lanțul fix de filtre scalează mai întâi la cel mult 320 de pixeli lățime, detectează schimbări de scenă și intervale înghețate, apoi eșantionează la 1 cadru pe secundă pentru blur, luma medie și informații spațiale/temporale. Trecerea este limitată la 600 de eșantioane structurale, un thread FFmpeg/filtru, aceleași liste de protocoale permise doar pentru `file` și de containere permise, o limită de ieșire a procesului de 1 MiB și cel mult 30 de secunde în cadrul mecanismului partajat de abandonare/termen-limită al brokerului. Nu acceptă niciodată o comandă, un filtru, o cale sau un URL din cerere.

Valorile structurale sunt dovezi de eșantionare deterministe, nu înțelegere semantică a videoclipului. Ele nu deduc subiecți, acțiuni, descrieri, vorbire sau intenția utilizatorului. Limitele scenelor și ale înghețării formează segmente; acoperirea înghețării, blurul, expunerea, detaliul spațial și schimbarea temporală influențează doar modul în care este alocat bugetul existent de 1–16 cadre. Un segment complet înghețat este limitat la un cadru, în timp ce segmentele neînghețate concurează pentru bugetul rămas. Când limitele depășesc numărul de cadre, acoperirea uniformă a cronologiei este păstrată, astfel încât tăieturile rapide de la început să nu poată ascunde un segment lung de la final. Limitele de scenă aflate în rezoluția de analiză de 1 secundă a unei limite de înghețare sunt comasate.

Filtrele lipsă, dovezile malformate/goale, o eroare a detectorului sau timeout-ul mărginit de preanaliză eșuează deschis către politica exactă a punctelor medii uniforme. Un abandon al apelantului sau un termen-limită al brokerului nu eșuează deschis: acesta termină subprocesul în curs, împiedică extragerea ulterioară de cadre, iar arborele temporar privat este eliminat în `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generează fixture-uri FFmpeg reale deterministe pentru economiile la apelurile de descriere după deduplicare, alocarea bugetului în mișcare densă, dovezi de blur/expunere/SI-TI, tăieturi rapide cu o coadă lungă și pozitive false la estomparea treptată. Înregistrează timpul real de preanaliză și, acolo unde `/usr/bin/time` este disponibil, CPU-ul procesului copil și RSS-ul de vârf. Verificările sale de calitate sunt doar oracole structurale. Calitatea reală a modelului de descriere rămâne `HOLD`, deoarece acest cadru de testare nu are un endpoint autorizat sau un judecător înghețat. Economiile monetare rămân de asemenea `HOLD` dacă `--caption-cost-per-call-usd` nu furnizează o estimare pozitivă explicită pe apel; scriptul nu fabrică niciodată niciunul dintre rezultate.

Fiecare cadru este limitat la 4 MiB, toate cadrele brute împreună la 23 MiB, iar
răspunsul serializat al brokerului la 32 MiB. Un director temporar privat este eliminat
în `finally`. OmniRoute nu include FFmpeg și nu acceptă o cale personalizată
către executabil. Înainte de generarea legendelor, bridge-ul aplică o trecere conservatoare de
deduplicare vizuală: fiecare JPEG este redus la un buffer grayscale de 16×16 și este
comparat doar cu ultimul cadru păstrat. Pentru un buget de legende solicitat
mai mare de un cadru, extragerea furnizează un
pool limitat de candidați de până la dublul acelui buget și niciodată mai mult de 16 cadre.
Limita solicitată este aplicată numai după deduplicare, primul și ultimul
candidat selectat fiind păstrate în timpul subțierii finale atunci când bugetul este de cel puțin
doi. Politica versionată
`grayscale-16x16-mean-cells-v2` folosește valoarea mai mare dintre delta medie de luma și
raportul celulelor miniaturii a căror deltă normalizată este de cel puțin 0,05. Pragul
de duplicat este constanta 0,04, aleasă pentru predictibilitate, nu
expusă ca setare de runtime. Acest semnal secundar
de contrast ridicat păstrează mișcările mici și modificările de text vizibil pe care o
comparație doar după medie le poate ascunde. Erorile comparatorului sau decodorului eșuează deschis și păstrează
acoperirea. Metadatele de ieșire separă candidații extrași, cadrele utilizate cu succes
și duplicatele vizuale eliminate.

O parte video marcată în mod explicit poate solicita o foaie de contact cu marcaje temporale. Bridge-ul
construiește o grilă JPEG de cel mult 4 coloane și 16 cadre. Fiecare celulă de 512 pixeli imprimă
marcajul temporal al sursei într-o bandă inferioară cu contrast ridicat, în timp ce aceleași marcaje temporale
rămân în metadatele text pentru asociere și audit în aval. JPEG-ul complet rămâne limitat la 32 MiB. Dacă `sharp` nu poate decoda sau compune grila,
bridge-ul revine la cadrele JPEG individuale; un abort al clientului se propagă în continuare
prin operația de foaie.

Dovezile de promovare sunt în mod deliberat separate de microbenchmark-ul de compunere
sintetică. `scripts/perf/video-bridge-contact-sheet-eval.ts` definește un
harness A/B versionat după schemă pentru modele vision reale compatibile cu OpenAI. Acesta măsoară
tokenii raportați de furnizor, latența end-to-end pe wall clock (inclusiv compunerea foii),
numărul de apeluri către model și retenția faptelor definită de manifest. Răspunsurile brute ale modelului nu sunt
scrise în raport; sunt păstrate doar digesturile SHA-256 și ID-urile faptelor potrivite.
Harness-ul nu face niciun apel de rețea sau către un model plătit decât dacă se transmite `--execute-real` și
sunt configurate `--model`, `OMNIROUTE_BASE_URL` și `OMNIROUTE_API_KEY`. Fără
acea rulare reală explicită, verdictul său lizibil de mașină rămâne `HOLD`; măsurătorile sintetice
de payload/număr de apeluri singure nu constituie dovezi de promovare.

Apelanții pot atașa un array opțional `transcript.cues` la o parte video
acceptată atunci când dețin deja text aliniat. Fiecare cue trebuie să conțină `text`, un
interval finit `start`/`end` în interiorul duratei detectate și o
`source` permisă (`client`, `embedded` sau `audio-bridge`); `confidence` are valoarea implicită
`1` și trebuie să rămână între `0` și `1`. Cue-urile duplicate exact sunt eliminate.
OmniRoute nu începe niciodată transcrierea din aceste metadate: cue-urile validate sunt
copiate în rezultatul descris împreună cu source, confidence și interval, și
sunt redate ca observații nesigure alături de legendele cadrelor. Textul invalid,
în afara intervalului sau fără proveniență este respins, nu amestecat în
fluxul de legende. Ambele canale de transcript din corpul cererii normalizează proveniența
furnizată la `client`, inclusiv etichetele auto-declarate `embedded` sau `audio-bridge`.
Doar un adaptor deținut de server poate atribui acele etichete de încredere prin
argumentul `trustedSource` disponibil doar în cod; un câmp JSON din cerere nu poate ajunge
la acel argument. Textul transcriptului rămâne conținut nesigur derivat din media,
indiferent de proveniența sa, și nu trebuie niciodată să determine autorizarea.

Un apelant avansat poate furniza o pistă `audioTranscript` pentru același video;
aceasta este tratată ca text furnizat de client, nu ca dovadă a transcrierii pe server.
Îmbinarea de fuziune rulează observațiile vizuale și audio sub
un singur termen-limită și semnal de abort, le ordonează pe o cronologie comună, elimină
duplicatele exacte și raportează un rezultat parțial atunci când doar o parte reușește.
Un `audioTranscript` invalid degradează la acel rezultat parțial — descrierea vizuală
este păstrată, iar ramura audio înregistrează un cod de eșec sanitizat —
în loc să eșueze întregul video. Disponibilitatea pe ramură, flag-ul de parțial
și codurile de eșec sanitizate sunt păstrate în rezultatul descris, în
metadatele guardrail (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), în metadatele cache-ului de rezultate și în contoarele
de fuziune ale bridge-ului. Calea implicită Video Bridge nu invocă speech-to-text
și nu descarcă o a doua copie a media; fără acea pistă explicită, rămâne
doar video.

**Retenția transcrierii (#12150 P1).** Aceasta se aplică automat ori de câte ori Video Bridge (el însuși opt-in) redă un cue de transcriere — nu există un indicator separat de retenție. Când o cerere redă orice cue de transcriere (un `transcript` declarat de apelant sau un `audioTranscript` fuzionat), mecanismul de protecție îl marchează `videoBridgeObserved` și produce o umbră redactată a descrierii video — o redare identică în care corpul de text liber al fiecărui cue este înlocuit cu `[redacted-video-transcript]`, construită prin substituirea câmpului structurat al cue-ului înainte de asamblarea șirului (niciodată prin parsarea textului aplatizat, astfel încât niciun conținut de cue — advers sau obișnuit, inclusiv corpuri care conțin `]`, cum ar fi `[inaudible]`/`[music]` — să nu poată supraviețui). Corpul cererii persistat în jurnalul de apeluri înlocuiește fiecare parte de text derivată din video cu acea umbră redactată, potrivită prin egalitate de conținut; ancora `fullText` este recitită din payload-ul final al mecanismului de protecție pre-apel, astfel încât potrivirea reușește în continuare după ce mecanismele de protecție ulterioare din lanț (mascatorii de PII și de acreditări, prioritățile 10/95) rescriu textul descrierii pe loc și după ce injecția de prompt de sistem/handoff/memorie remodelează matricea de mesaje. Corpul trimis în amonte către model rămâne neschimbat. O cerere observată, de asemenea, nu populează nicio Memorie durabilă (atât extragerea derivată din cerere, cât și cea derivată din răspuns sunt omise), astfel încât răspunsul propriu al modelului nu poate reproduce textul transcrierii în Memorie.

**Câmpuri video brute (#12430).** Când bridge-ul este activat și suportul video nativ este necunoscut sau absent, câmpurile definite `transcript`/`audioTranscript` activează de asemenea `videoBridgeObserved`, chiar și după eșecul descrierii sau după o limită `maxVideos`. `null` și șirurile goale contează; câmpurile absente și metadatele non-video nu contează. Copiile reținute redactează aceste câmpuri sau omit cererea, iar cache-urile/Memoria sunt ocolite.

Pe acele căi de rezervă, cue-urile valide ale apelantului devin părți `text`/`input_text` acceptate, în loc de câmpuri de furnizor nestandard. Ambele piste furnizate de cerere rămân observații `client` neîncrezute, cu un avertisment explicit că videoclipul nu a fost descris și că marcajele temporale nu au fost verificate față de media. Bugetul total existent de 256 de cue-uri/64 KiB și bugetele pe cue se aplică împreună celor două piste; marcajele temporale trebuie să se încadreze în plafonul de 600 de secunde al brokerului și în orice fereastră de focalizare furnizată. Pistele invalide sunt eliminate, nu transmise mai departe ca text arbitrar; o pistă soră validă poate fi încă utilizată dacă bugetul lor combinat nu este depășit. Câmpurile nule/goale nu adaugă text. Această cale de rezervă nu adaugă nicio preluare de media sau transcriere. Câmpurile de extensie ale transcrierii sunt eliminate din transportorul video de rezervă și din obiectele sale `video_url`/`source`. Lista de permisiuni pentru protocolul OpenAI rămâne strictă; transportoarele video cu nativ necunoscut rămân disponibile, iar țintele cunoscute doar-text păstrează markeri siguri. Umbrele structurate de redactare protejează textul transcrierii adăugat, în timp ce cererea originală deținută de apelant rămâne neschimbată. Țintele cu suport nativ și bridge-urile dezactivate își păstrează comportamentul existent de ocolire.

Copiile reținute suplimentare folosesc același semnal de cerere observată. Instantaneul brut al cererii client dinainte de mecanismul de protecție, cererea în așteptare din memorie și jurnalul timpuriu al cererilor respinse înlocuiesc structural câmpurile de transcriere din părțile video; prompturile sub formă de șir sintetizate de etapele pipeline-ului și de handoff-ul de context sunt redactate la sink-ul corpului de cerere persistat. Markerul persistat `video_content_removed` face ca continuarea prin `previous_response_id` să eșueze în siguranță (fail closed) în loc să reconstruiască textul care a fost eliminat intenționat. Dacă o cerere observată își pierde umbra de redactare pentru fiecare parte înainte de jurnalizare sau chiar una dintre mai multe umbre video nu se potrivește după mutațiile ulterioare ale cererii, corpul de cerere reținut este omis în întregime, în loc să se rețină o transcriere parțial redactată.

Pentru o cerere observată, răspunsul unui model ar putea cita orice porțiune a transcrierii fără o limită structurată de cue. Prin urmare, `responseBody` persistat din jurnalul de apeluri este înlocuit cu un marker de omitere; artefactul detaliat al pipeline-ului (care poate include corpuri upstream/client și fragmente de flux) nu este reținut. Cache-urile semantice, de idempotență și de reluare a raționamentului ocolesc citirile și scrierile pentru acea cerere. Cererea către furnizor și răspunsul vizibil pentru client rămân neschimbate. Octeții timpurii de keepalive sunt goliți din bufferul temporar atunci când artefactul detaliat este omis. Avertismentul Kiro privind EventStream malformat raportează doar numărul de octeți ai payload-ului, niciodată conținutul acestuia sau eroarea brută a parserului JSON.
Aceasta nu pretinde că fiecare diagnostic nelegat de furnizor/plugin a fost auditat; analiza extinsă a sink-urilor reținute este urmărită în #11658.

Ciclul de viață intern `/api/modality-bridge/video/drilldown` este un substrat de cache separat, autentificat prin loopback/token. Fiecare operație necesită, de asemenea, un ID principal opac canonic. Înainte de activarea unui apelant de producție, acesta trebuie să derive acel ID din tenantul autentificat și nu trebuie să transmită niciodată o valoare selectată de client. Cheile de cache leagă acel principal de ID-urile canonice de sesiune și de referință video, stochează doar cheile lor derivate prin SHA-256 și limitează atât citirile, cât și ștergerea la același principal. Cache-ul stochează cel mult 16 cadre JPEG derivate pe intrare, le expiră după zece minute și acceptă citiri limitate `start`/`end` sau ștergere explicită a sesiunii.

Fiecare principal este limitat la 16 intrări și 64 MiB de date JPEG canonice. Aceste limite sunt independente de plafonul global de 64 de intrări/256 MiB: presiunea cotei principalului elimină doar intrările cele mai puțin utilizate recent ale acelui principal înainte de a fi luată în considerare eliminarea LRU globală. Intrările expirate sunt eliminate din evidența atât a principalului, cât și cea globală la activitatea cache-ului, în timp ce anularea și eșecul validării nu confirmă o înlocuire parțială.

Cache-ul respinge datele Base64 necanonice, umplutura în exces, conținutul media non-JPEG, fișierele JPEG corupte sau trunchiate și fișierele JPEG care produc un avertisment în timpul unei decodări complete limitate a imaginii cu `sharp`. Acesta recodifică fiecare imagine acceptată ca JPEG canonic, determină lățimea și înălțimea din octeții decodificați în loc să considere de încredere câmpurile furnizate de apelant și elimină orice octeți poligloți aflați la final, în loc să îi păstreze. Numai bufferul comprimat canonic și limitat este contabilizat în ambele cote. Limita JSON pentru transfer include suprasarcina Base64 aferentă plafonului de 32 MiB pentru intrarea decodificată. Fiecare
derivare stocată înregistrează formatul și rezoluția JPEG validate, politica de eșantionare,
versiunea derivării, ora creării, hash-ul conținutului calculat de server și referința
hash-uită la părinte, împreună cu hash-ul conținutului părinte furnizat de apelantul de încredere. Anularea este verificată
între fazele asincrone de decodificare/hash, înainte de commit-ul atomic în cache.

Această tranșă nu conectează încă un producător de producție la rută și nu
oferă selectarea variantelor cu rezoluții multiple. Prin urmare, calea transparentă a cererii
Video Bridge nu implică procesare suplimentară, în timp ce derivarea principalului asociat entității găzduite și
întregul ciclu de viață FU-08 cu rezoluții multiple rămân activități ulterioare explicite,
în loc să fie documentate drept comportament complet.

Cadrele primesc legende secvențial, folosind modelul Video configurat. O suprascriere
Video goală moștenește setarea Vision; dacă ambele sunt goale, routerul automat Vision
selectează modelul efectiv cu capabilități de procesare vizuală. Legendele generate cu succes
înlocuiesc partea originală cu un prefix stabil `[Video description:`, care marchează, de asemenea,
textul drept observație nevalidată derivată din conținut media și indică modelelor din aval
să nu urmeze instrucțiunile găsite în conținutul media. Cheile cache-ului pentru legendele cadrelor
includ octeții JPEG, promptul, marca temporală și modelul efectiv; numai legendele generate cu succes
sunt memorate în cache. Intrările din cache păstrează modelul producător efectiv care a avut succes,
inclusiv un model de rezervă; puntea raportează `mixed` atunci când cadre diferite
au fost produse de modele diferite. O potrivire în cache reutilizează identitatea producătorului
în loc să o reeticheteze drept planul de rutare solicitat. Cache-ul rezultatului
pentru întregul videoclip este indexat pe baza fiecărei intrări care modifică rezultatul — promptul, modelul
efectiv, politica de eșantionare, numărul de cadre, modul de analiză semantică, amprenta SHA-256
a indiciului de focalizare normalizat, fereastra de focalizare, `transcript`,
`audioTranscript` și indicatorul pentru foaia de contact — astfel încât modificarea oricăreia dintre aceste
dimensiuni produce o ratare a cache-ului, niciodată reutilizarea unor date învechite. Versiunea
politicii de deduplicare vizuală, pragul și numărul limitat de cadre candidate sunt, de asemenea, explicite în
cheia și metadatele cache-ului de rezultate; prin urmare, o modificare a politicii nu poate reutiliza o
descriere învechită a întregului videoclip. Metadatele v4 ale cache-ului de rezultate păstrează modul și
amprenta, niciodată sarcina brută a utilizatorului. Metadatele mecanismelor de protecție raportează atât
modul de analiză solicitat, cât și pe cel efectiv; un mod `focused` solicitat fără
text utilizabil din partea utilizatorului este raportat efectiv drept `full`.

Mecanismul de protecție extrage fiecare parte video acceptată, dar nu descrie mai mult de
`modalityBridgeVideoMaxVideos`. Pentru o destinație despre care s-a demonstrat că are
`supportsVideo === false`, videoclipurile a căror procesare a eșuat și cele care depășesc limita devin marcaje text sigure explicite,
astfel încât niciun videoclip brut să nu rămână. Când capabilitatea este necunoscută, acele părți
își păstrează suportul video; orice transcriere de rezervă urmează conversia limitată în text
descrisă mai sus. Destinațiile cu `supportsVideo === true` ocolesc puntea.
Semnalul de anulare al cererii clientului se propagă prin descărcare, coada brokerului,
subprocese și apelurile pentru generarea legendelor; anulările opresc procesarea între videoclipuri și nu permit niciodată,
în caz de eroare, trecerea conținutului media brut.

Setările de rulare sunt stocate în baza de date și validate cu Zod:

| Cheie                               | Valoare implicită | Interval / comportament                                                                                                    |
| ----------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`           | Componentă de rulare opțională, activată explicit                                                                          |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` păstrează legendele generice; `focused` utilizează context limitat și nevalidat din ultimul mesaj al utilizatorului |
| `modalityBridgeVideoModel`          | `""`              | Moștenește modelul Vision Bridge                                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` sau `segment_aware` proporțional; eșecul detectorului revine la `uniform`                         |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                                             |

Valorile persistente moștenite pentru expirarea Video care depășesc 120 de secunde sunt limitate la
termenul-limită al brokerului; scrierile de setări noi care depășesc această limită sunt respinse.
`GET /api/modality-bridge/video/runtime` necesită o localitate loopback de încredere și marcată
înainte de autentificare sau de sondarea mediului de rulare, apoi necesită autentificare
de administrare. Returnează numai `available`, versiunile igienizate ale FFmpeg/ffprobe și un motiv fix
atunci când mediul de rulare nu este disponibil. Endpointul intern de extragere nu este
un API public de încărcare: saturarea cozii returnează `503` împreună cu `Retry-After`, o deconectare
a apelantului returnează `499`, iar termenul-limită fix al brokerului returnează `504`. Răspunsurile convertite adaugă
`video->text;model=<visionModel>;parts=<videos>` la antetul central
`x-omniroute-modality-bridge`, fără a elimina segmentele Vision sau Audio.

### Mascator PII (`piiMasker.ts`)

Rulează în **ambele** etape.

- **`preCall`** clonează sarcina utilă, parcurge `system`, `messages`, `input` și
  `prompt` (inclusiv elementele de tip șir simplu) și aplică `processPII()` (din
  `@/shared/utils/inputSanitizer`) câmpurilor șir `content`/`text`. Când
  `PII_REDACTION_ENABLED=true`, informațiile PII detectate sunt redactate în
  sarcina utilă de ieșire. Acest lucru este independent de `INPUT_SANITIZER_MODE`
  (care controlează doar politica privind injectarea în prompt). Când redactarea
  este dezactivată, apelul înregistrează numărul detectărilor fără a rescrie
  conținutul.
- **`postCall`** clonează în profunzime răspunsul, rulează
  `sanitizePIIResponse()` împreună cu mascarea pentru structura API-ului
  Responses (`maskResponsesOutput` — acoperă `output_text` și
  `output[].content[].text`). Dacă are loc vreo redactare, răspunsul modificat
  îl înlocuiește pe cel original.

Mecanismul de protecție nu blochează niciodată; doar adnotează
(`meta.detections`, `meta.redacted`) sau rescrie.

#### Selectarea în funcție de tip, modele personalizate și contoare de detectare

**Dashboard → Settings → Security → PII masking** stabilește _ce_ este mascat.
Nu activează mascarea: aceasta este controlată în continuare de
`PII_REDACTION_ENABLED` (cerere) și `PII_RESPONSE_SANITIZATION` (răspuns + SSE),
ambele fiind dezactivate implicit.

- **Selectarea în funcție de tip** — ID-urile încorporate sunt enumerate în
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). O valoare nesetată
  înseamnă toate tipurile (comportamentul de dinaintea introducerii acestei
  setări). Modelul `ssn_us` al motorului pentru cereri se mapează la `ssn`.
  Șabloanele (Minimal, Standard, Financial, Brazilian, USA, Full) doar
  completează casetele de selectare din interfața cu utilizatorul.
- **Modele personalizate** — până la 20 de modele regex sau wildcard (`*` =
  până la 64 de caractere care nu sunt spații albe, `?` = unul singur).
  Potrivirile devin `[CUSTOM_REDACTED]`. Fiecare model este procesat prin
  `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`): cel
  mult 500 de caractere, indicatori limitați la `g i m s u`, trebuie să poată
  fi compilat, să treacă verificarea `safe-regex` (backtracking catastrofal) și
  să nu corespundă unui șir gol sau unui substituent de redactare. Un model care
  nu îndeplinește aceste condiții este refuzat atât la salvare, cât și la
  testare, iar un rând stocat care nu le îndeplinește este omis în timpul
  rulării, în loc să fie compilat. Modelele personalizate rulează numai când
  mascarea este activată.
- **Contoare de detectare** — numărători pentru fiecare tip (niciodată valorile
  găsite), păstrate în memorie și resetate la repornire
  (`src/lib/pii/piiDetectionStats.ts`). Acestea cresc numai când mascarea este
  activată.

Setările se află în tabelul `key_value` (spațiul de nume `pii_settings`,
`src/lib/db/piiSettings.ts`) și sunt citite printr-un cache de 1 s. API:

| Metodă | Cale                     | Scop                                                                                  |
| ------ | ------------------------ | ------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Starea indicatorilor, `enabledTypes`, `customPatterns`, contoarele de detectare       |
| `PUT`  | `/api/settings/pii`      | Înlocuiește `enabledTypes` (`null` = toate) și/sau `customPatterns`                   |
| `POST` | `/api/settings/pii/test` | Testează fără salvare un model pe un eșantion de cel mult 8 KB; nu se stochează nimic |

Toate cele trei necesită autentificare de administrare și validează corpul
folosind Zod (`src/shared/validation/schemas/piiSettings.ts`).

### Injectarea în prompt (`promptInjection.ts`)

Detectează structurile ostile din conținutul furnizat de utilizator și aplică
politica configurată. Comportamentul este determinat de variabilele de mediu și
de opțiunile constructorului:

| Setare          | Variabilă de mediu                                                                                      | Valoare implicită | Efect                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Activat         | `INPUT_SANITIZER_ENABLED`                                                                               | `true`            | Când este `false`, mecanismul de protecție încheie imediat procesarea.                                                                                                                                                         |
| Mod             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                         | `warn`            | Politica privind injectarea: `block`, `warn` sau `log`. (`redact` este acceptat pentru compatibilitate retroactivă, dar **nu** elimină textul injectat; rescrierea PII din cerere este controlată de `PII_REDACTION_ENABLED`.) |
| Prag de blocare | opțiunea `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`            | Severitatea minimă necesară pentru blocare. La valoarea implicită, severitatea medie este doar monitorizată.                                                                                                                   |

**Precedența modurilor** (`getMode`): `options.mode` furnizat de apelant →
suprascrierea **indicatorului de funcționalitate din BD** pentru
`INJECTION_GUARD_MODE` (Dashboard → Settings → Feature Flags) →
variabila de mediu `INJECTION_GUARD_MODE` → variabila de mediu
`INPUT_SANITIZER_MODE` → `warn`. Prin urmare, o suprascriere din tabloul de bord
are prioritate față de variabilele de mediu, astfel încât interfața Feature
Flags controlează în timp real mecanismul de protecție aflat în execuție (fără
repornire). Citirea din BD este tolerantă la erori: dacă apare o eroare,
mecanismul de protecție revine la comportamentul bazat pe variabilele de mediu,
iar când nu este setată nicio suprascriere, comportamentul este identic cu
rezoluția bazată exclusiv pe variabilele de mediu.

Surse de detectare:

1. `sanitizeRequest()` din `@/shared/utils/inputSanitizer` (setul comun de
   detectoare utilizat și în alte părți ale fluxului de procesare).
2. `DEFAULT_GUARD_PATTERNS` încorporate (în prezent
   `system_override_inline` și `markdown_system_block`, ambele cu severitatea
   `high`).
3. `customPatterns` opționale, transmise prin opțiunile constructorului (șiruri,
   expresii regex sau înregistrări `{ name, pattern, severity }`).

Când `mode === "block"` **și** cel puțin o detecție îndeplinește pragul de
severitate, `preCall` returnează `{ block: true, message: "Request rejected:
suspicious content detected" }`. În modurile `warn`/`log`, bariera de protecție
înregistrează în jurnal, dar permite apelul. Helperul partajat
`evaluatePromptInjection()` este, de asemenea, exportat pentru apelanții care
trebuie să evalueze prompturi fără a trece prin registru.

**Limită de scanare (v3.8.20):** detectorul inspectează doar **primii 16 KB** din
textul de prompt concatenat — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 de
octeți) în `src/shared/utils/inputSanitizer.ts`. Atât `detectInjection()` cât și
`evaluatePromptInjection()` aplică `slice(0, MAX_INJECTION_SCAN_BYTES)` înainte
de a rula bucla de potrivire a șabloanelor. Directivele de injecție se află
aproape de începutul unui input, așa că acest lucru limitează consumul de CPU/GC
al regexului pe payload-uri de sute de KB fără a slăbi detecția (cf. #3932,
#4041).

### Mascator de credențiale (`credentialMasker.ts`)

Rulează pe **ambele** etape, ultimul în lanțul implicit (prioritate `95`).
Redactează modelele bine-cunoscute de chei API / tokenuri secrete din payload-ul
de ieșire (conținutul mesajului, argumentele apelurilor de instrumente,
rezultatele instrumentelor) **și** din răspunsul furnizorului, astfel încât o
credențială lipită într-un prompt (sau returnată de un rezultat al
instrumentului) să nu fie scursă către furnizorul upstream sau înapoi către
client.

- **Doar opt-in**, aceeași convenție ca redactarea PII (adiacentă Regulii
  stricte #20): dezactivată cu excepția cazului în care
  `settings.credentialRedactionEnabled === true` **sau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Când este dezactivată, bariera de
  protecție nu are niciun efect — nu blochează niciodată și nu rescrie
  niciodată.
- `redactCredentials()` parcurge întregul arbore de payload/răspuns
  (`walkValue()`, sigur împotriva poluării prototipului, sigur la cicluri prin
  `WeakSet`) și înlocuiește potrivirile cu un substituent `[REDACTED:<type>]`,
  clonând doar ramurile care s-au schimbat efectiv.
- `CREDENTIAL_PATTERNS` acoperă chei de furnizori LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokenuri VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), chei de plată (Stripe, Square), chei
  cloud (AWS access key, Twilio, SendGrid, Mailgun), chei private / JWT-uri,
  șiruri de conexiune care conțin credențiale (`mongodb://user:pass@...`, etc.)
  și un model generic de valoare de antet
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Cheile sub formă de antet
  (`authorization`, `x-api-key`, `api-key`, `apikey`) sunt redactate structural
  (doar valoarea, prefixul de schemă precum `Bearer `/`Basic ` este păstrat)
  mai degrabă decât prin regexul generic de text.
- Bariera de protecție nu blochează niciodată; doar rescrie (`modifiedPayload` /
  `modifiedResponse`) și adaugă adnotări (`meta.credentialsRedacted`,
  `meta.count`).

Test de regresie: `tests/unit/credential-masker-guardrail.test.ts`.

## Contract de bază (`base.ts`)

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
  block?: boolean; // true scurtcircuitează lanțul
  message?: string; // afișat când se blochează
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returnat de preCall pentru a rescrie cererea
  modifiedResponse?: TValue; // returnat de postCall pentru a rescrie răspunsul
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

Un guardrail semnalează „nicio modificare” returnând fie `void`, fie `{}`, fie
`{ block: false }`. Returnarea unui `modifiedPayload`/`modifiedResponse` înlocuiește
valoarea care circulă prin lanț pentru guardrail-urile din aval.
`signal?: AbortSignal` propagă ciclul de viață al apelantului în guardrail-uri. Anularea unei cereri este excepția deliberată de tip fail-open: bridge-urile media opresc lucrul și curățarea fără a restaura media brută către o țintă despre care se știe că nu o acceptă.

## Registru (`registry.ts`)

Singleton-ul `guardrailRegistry` expune:

- `register(guardrail)` — adaugă (sau înlocuiește după numele normalizat) un guardrail și
  re-sortează după `priority` crescător.
- `clear()` / `list()` — funcții ajutătoare administrative.
- `runPreCallHooks(payload, context)` — iterează guardrail-urile active, transmite
  payload-ul prin `modifiedPayload` și se oprește la primul `block: true`.
- `runPostCallHooks(response, context)` — același flux pe partea de răspuns.
- `resetGuardrailsForTests({ registerDefaults })` — curăță starea și, opțional,
  re-înregistrează valorile implicite pentru izolare curată în teste.

Ambele funcții de rulare returnează `{ blocked, payload|response, results, guardrail?, message? }`,
unde `results` este un array de înregistrări `GuardrailExecutionResult` care includ
câmpurile `blocked`, `skipped`, `modified`, `error` și `meta` pentru fiecare guardrail,
utile pentru trasare.

### Dezactivarea guardrail-urilor per cerere

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agregă o
listă deduplicată de nume de guardrail-uri care trebuie omise pentru cererea
curentă. Există cinci canale, citite în această ordine și fuzionate într-o singură listă
(prima apariție câștigă la deduplicare):

1. `apiKeyInfo.disabledGuardrails`
2. Corpul cererii `disabledGuardrails` (nivel superior)
3. Corpul cererii `metadata.disabledGuardrails` (doar când `metadata` este un obiect)
4. Headerul `x-omniroute-disabled-guardrails`
5. Headerul legacy `x-disabled-guardrails`

Toate cele cinci canale sunt fuzionate, inclusiv cele două header-e: trimiterea ambelor
`x-omniroute-disabled-guardrails` și `x-disabled-guardrails` omite uniunea
listelor lor, iar un header modern gol nu mai ascunde headerul legacy
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corectat în
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Valorile pot fi array-uri de string-uri sau un string separat prin virgule; numele sunt
tăiate de spații și normalizate la kebab-case cu litere mici (`pii_masker` → `pii-masker`), iar
intrările goale sunt eliminate. Rezultatul este transmis prin `context.disabledGuardrails`
către registru, care omite guardrail-urile potrivite (`skipped: true` în `results`).

Lista de dezactivare afectează doar **registrul**. Modul `block` pentru
prompt-injection este o limită obligatorie: middleware-ul injection-guard
(`src/middleware/promptInjectionGuard.ts`) apelează `evaluatePromptInjection()`
fără nicio listă de dezactivare controlată de apelant (apelul mort
`resolveDisabledGuardrails({ body })` pe care îl făcea anterior a fost eliminat în
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), astfel încât o cerere
care dezactivează `prompt-injection` este totuși respinsă în modul `block`. Acest lucru este
intenționat. Canalele de dezactivare sunt controlate de apelant (corpul cererii,
metadata, header-e), iar un apelant nu trebuie să poată opri un control
de securitate setat de operator
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Uniunea header-elor
din [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
schimbă doar care guardrail-uri din registru sunt omise; nu permite unui client
să ocolească middleware-ul. Politicile obligatorii de guardrail per cheie și per grup sunt
urmărite în RFC-ul v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Vezi [Acoperire și limite](#coverage-and-limits).

## Ordinea de execuție

Pentru fiecare cerere care trece prin `src/sse/handlers/chat.ts` și
`open-sse/handlers/chatCore.ts` (rutele din familia chat listate la
[Acoperire și limite](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` construiește lista de ignorare din cheia API, corp
   și antete.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` rulează guardrail-urile în ordinea
   crescătoare a priorității:
   - Guardrail-urile dezactivate sunt înregistrate ca `skipped`.
   - `preCall` al fiecărui guardrail poate rescrie payload-ul prin `modifiedPayload`.
   - Primul `block: true` întrerupe lanțul și handlerul returnează
     un răspuns de respingere din partea guardrail-ului.
3. Payload-ul (posibil rescris) intră în rutarea combo și în trimiterea către
   upstream.
4. **Doar non-streaming:** după ce răspunsul este asamblat,
   `guardrailRegistry.runPostCallHooks(...)` rulează același lanț pe
   răspuns. `block: true` aici elimină răspunsul upstream și returnează HTTP 400. Răspunsurile în streaming omit complet acest pas.

Guardrail-urile care aruncă o excepție sunt înregistrate cu `error: <message>` și consemnate în log prin
`logger.warn`, dar lanțul continuă — fail-open prin design.

## Acoperire și limite

Registrul de guardrails este conectat doar la pipeline-ul de chat. Aceste limite sunt
fixate de `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` și
`tests/unit/guardrail-pipeline-characterization.test.ts`; actualizează acele teste
în mod deliberat când comportamentul se schimbă.

### Unde rulează hook-urile

| Hook / control                      | Rulează pe                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Cereri gestionate de `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (și `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` și proxy-ul de chat Telegram. De asemenea, endpointul de test al dashboard-ului `/api/guardrails/test`. Un blocaj pre-call returnează HTTP 400. |
| `runPostCallHooks`                  | Doar răspunsuri de chat **non-streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Răspunsurile în streaming nu ajung niciodată la el.                                                                                                                                                                                                                                                                                               |
| PII în streaming                    | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), conectat în `streamingPipeline.ts` când `PII_RESPONSE_SANITIZATION` este activat. Nu este un guardrail, așa că canalele de dezactivare nu îl afectează.                                                                                                                                                                                                                               |
| Middleware injection-guard (legacy) | Fiecare rută `/v1` care transportă prompturi, inclusiv cele din familia chat (vezi [acoperirea rutelor](#injection-guard-route-coverage--red-team-phase-8--block-d)). Doar injecție de prompt.                                                                                                                                                                                                                                                      |

### Ce nu este acoperit

- **Rutele media, embeddings și date** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nu ajung niciodată la registru. Acolo
  nu rulează mascare PII, mascare a credențialelor sau modality bridge. Singura lor
  verificare este middleware-ul legacy injection-guard.
- **Răspunsurile în streaming** nu primesc guardrail-uri post-call: niciun `pii-masker` sau
  `credential-masker` post-call și niciun blocaj post-call. Se aplică doar transformarea PII
  pentru streaming (când `PII_RESPONSE_SANITIZATION` este activat). O credențială returnată în ecou într-un răspuns în streaming nu este redactată.
- **Canalele de dezactivare vs. middleware (prin design):** middleware-ul evaluează
  injecția de prompt cu propriul apel la `evaluatePromptInjection()`, fără a
  transmite vreo listă de dezactivare controlată de apelant. Modul `block` este o limită
  obligatorie pe care dezactivările controlate de apelant nu o pot ocoli, inclusiv pe rutele din familia chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Dezactivarea
  `prompt-injection` omite doar guardrail-ul din registru.

### Ce vede un răspuns înainte de post-call

Pe calea non-streaming, ordinea este: extragerea memoriei → executarea instrumentelor integrate → guardrail-uri post-call → ieșirea la blocajul post-call → stocarea în cache-ul semantic.

- **Extracția memoriei** și **execuția instrumentelor** văd răspunsul înainte ca
  guardrails-urile post-apel să îl poată rescrie sau bloca. Începând cu
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), extracția
  memoriei trece textul extras prin `sanitizePII` când
  `PII_RESPONSE_SANITIZATION` este activat (atât streaming, cât și non-streaming), dar un
  răspuns pe care etapa post-apel îl blochează ulterior a fost totuși oferit memoriei și
  instrumentelor.
- **Cache-ul semantic** stochează răspunsul după etapa post-apel, deci stochează
  răspunsul rescris, iar un răspuns blocat nu este niciodată stocat în cache. Intrările din cache sunt
  indexate după cheia API.

## Configurare

Variabilele de mediu citite de gardiile de protecție integrate:

| Variabilă                             | Utilizată de           | Efect                                                                                                                   |
| ------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Setați `false` pentru a dezactiva complet detectarea.                                                                   |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Politica de injecție: `warn`, `block` sau `log`. Valoarea moștenită `redact` nu rescrie textul injecției.               |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Modul pentru garda de injecție; de asemenea, un flag de funcție DB care **suprascrie** variabilele de mediu (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Severitatea minimă pe care `MODE=block` o respinge: `high` (implicit), `medium` sau `low`.                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Alias moștenit pentru `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Când este `true`, PII din cerere este redactat (independent de modul de injecție).                                      |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (în aval) | Controlează comportamentul componentei de mascare pe partea de răspuns.                                                 |

Gardiile de protecție Modality Bridge citesc configurația de runtime din magazinul de setări bazat pe DB (`getSettings()`), nu din variabile de mediu. Cheile primare pentru Vision sunt `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` și `modalityBridgeCacheMaxEntries`. Cheile moștenite `visionBridge*` sunt acceptate doar ca fallback documentat pentru citire pe un singur ciclu; scrierile din dashboard folosesc cheile primare. Valorile implicite și resolverul de fallback se află în `src/shared/constants/modalityBridgeDefaults.ts`, iar constantele moștenite sunt păstrate în `src/shared/constants/visionBridgeDefaults.ts`.

Audio folosește `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` și `modalityBridgeAudioMaxClips`, plus setările partajate `modalityBridgeCache*`. Audio nu are fallback pentru chei moștenite, deoarece aceste chei au fost introduse odată cu schema Modality Bridge.

Video folosește `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` și `modalityBridgeVideoTimeout`, plus setările partajate `modalityBridgeCache*`. Este dezactivat implicit deoarece FFmpeg/ffprobe sunt dependențe operaționale opționale, iar descrierea cadrelor adaugă latență și costuri de model.

## Mecanisme de protecție personalizate

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

Pași:

1. Creați `src/lib/guardrails/myGuardrail.ts` extinzând `BaseGuardrail`.
2. Implementați `preCall` și/sau `postCall`.
3. Fie înregistrați la momentul importului (adăugați din `registerDefaultGuardrails`), fie
   apelați `guardrailRegistry.register(...)` în timpul execuției — registrul înlocuiește
   orice mecanism de protecție anterior cu același nume normalizat.
4. Adăugați teste în `tests/unit/` (exemple existente:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testare

Utilizați `resetGuardrailsForTests()` între teste pentru a porni de la o stare cunoscută.
Transmiteți `{ registerDefaults: false }` pentru a porni cu un registru gol și
înregistrați numai mecanismele de protecție testate. Vision Bridge acceptă injectarea
dependențelor (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expune punctele
de extensie echivalente pentru setări, capabilități, selectarea modelului STT, verificarea
acreditărilor și transcriere. Prin urmare, testele pot acoperi ambele fluxuri fără acces
la baza de date sau la rețea.

## Consultați și

- `src/lib/guardrails/` — implementare
- `src/shared/utils/inputSanitizer.ts` — detectorul partajat care asigură
  detectarea injectării de prompturi și mascarea PII
- `src/shared/constants/visionBridgeDefaults.ts` — valorile implicite pentru Vision Bridge și
  lista modelelor cu utilizare forțată a punții
- `src/shared/constants/modalityBridgeDefaults.ts` — valorile implicite partajate pentru execuția Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — strat ortogonal (întrerupător de circuit, perioade de așteptare)
- `docs/reference/ENVIRONMENT.md` — referința completă a variabilelor de mediu

## Acoperirea rutelor de către protecția împotriva injectării și testarea red-team (Faza 8 · Blocul D)

Protecția împotriva injectării (`createInjectionGuard` / `withInjectionGuard`) acoperă toate rutele
care acceptă prompturi de la utilizatori. Aceasta respectă `INJECTION_GUARD_MODE` (implicit `warn` = doar jurnalizare;
`block` = returnează HTTP 400 `SECURITY_001`).

| Tip              | Rute                                                                                                                                                 | Mod implicit |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Text (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | avertizare   |
| Generative       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | avertizare   |
| Date             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | avertizare   |

Extragerea textului (`extractMessageContents`) acoperă `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (în fiecare noapte, `nightly-llm-security.yml`):** promptfoo validează că fiecare rută blochează
corpusul OWASP-LLM când `INJECTION_GUARD_MODE=block`; garak execută probe (omise în lipsa secretului).
`moderations` este inclus pentru consecvență. Modul de blocare este o limită obligatorie: `evaluatePromptInjection()`
ignoră lista de dezactivare pentru fiecare solicitare pe care middleware-ul i-o transmite, astfel încât `disabledGuardrails`
**nu** scutește o rută de această verificare ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Fluxul de lucru nocturn (`.github/workflows/nightly-llm-security.yml`, cron + declanșare
manuală) are două sarcini:

- **`promptfoo-guard` (blocantă)** — execută `promptfoo eval -c promptfooconfig.yaml`
  cu `INJECTION_GUARD_MODE=block`. Fiecare caz adversarial (de exemplu, „ignorați toate
  instrucțiunile anterioare…”, evadări de tip DAN) verifică dacă răspunsul conține
  `error.code === "SECURITY_001"`, adică dacă mecanismul de protecție a respins efectiv solicitarea.
- **`garak` (consultativă)** — execută garak `--probes promptinject,dan,leakreplay`
  asupra unei instanțe OmniRoute locale (`http://localhost:20128/v1`). Este condiționată de existența
  unui secret al furnizorului (`PROMPTFOO_PROVIDER_KEY`); este omisă fără eroare și are sufixul
  `|| true`, astfel încât raportează rezultatele fără a provoca eșecul CI.

Acoperirea utilitarului de protecție (`createInjectionGuard` / `withInjectionGuard`)
include fiecare rută `/v1` care acceptă prompturi; textul promptului este extras din
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` de către
`extractMessageContents()` din `src/shared/utils/inputSanitizer.ts`.
