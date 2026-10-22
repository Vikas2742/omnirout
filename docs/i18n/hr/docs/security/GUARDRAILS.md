# Guardrails (Hrvatski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-10-17 — v3.8.52 (dodano [Pokrivenost i ograničenja](#coverage-and-limits):
> koje rute i putanje odgovora obuhvaćaju priključci, objedinjena zaglavlja za onemogućavanje (#16412), način
> blokiranja ubacivanja kao obvezna granica (#16413) i što vidi odgovor prije naknadnog poziva)

Zaštitne ograde provode sigurnosna pravila, pravila upotrebe i transformacije sadržaja na granici
između sustava OmniRoute i nadređenih pružatelja usluga. Svaka zaštitna ograda može pregledati (i
po potrebi odbiti, transformirati ili označiti) sadržaje zahtjeva (`preCall`) i
odgovore nadređenih sustava (`postCall`).

Sustav radi po načelu **propuštanja u slučaju pogreške**: ako zaštitna ograda tijekom izvođenja izazove iznimku, registar
bilježi pogrešku i nastavlja sa sljedećom zaštitnom ogradom umjesto da
zahtjev završi neuspjehom. Blokiranje je izričita odluka (`block: true`), a nikad slučajnost.
Jedina je iznimka prekinuti zahtjev: kada se prekine pozivateljev `signal`,
zaštitna ograda koja izazove iznimku uzrokuje odbijanje izvođenja priključka umjesto da bude preskočena.

Priključci se **ne** izvršavaju na svakoj ruti ni za svaki odgovor. Prije oslanjanja na zaštitnu ogradu kao
sigurnosnu kontrolu pročitajte odjeljak
[Pokrivenost i ograničenja](#coverage-and-limits).

## Ugrađene zaštitne ograde

Registar pri uvozu automatski učitava šest zaštitnih ograda prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza/e         | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži brojevi prioriteta izvršavaju se **prvi**.

### Most za slike (`visionBridge.ts`) — Most modaliteta PR-1

Osnovni model GLM 5.3 i `glm-5.3-{low,high,max}` imaju izričite metapodatke
`supportsVision:false` u registru/specifikaciji. Varijante GLM 5.3 Flash
ostaju modeli s izvornom podrškom za slike. Ruta `/v1/messages` sustava Claude Code ulazi u
zajednički lanac zaštitnih ograda prije poziva `handleChat` **prije** prevođenja
iz formata Claude u format OpenAI; slike u rezultatima alata `Read` moraju se opisati ili obraditi
prije nego što ih to prevođenje podigne u sadržaj `image_url` formata OpenAI (#17069).

Presreće zahtjeve koji sadržavaju slike i usmjereni su prema **modelima bez podrške za slike** te
preusmjerava cijeli zahtjev na model koji podržava slike ili zamjenjuje slikovne
dijelove tekstnim opisima koje prije poziva nadređenog sustava izrađuje podesivi model za obradu slika.
Time se pružateljima koji podržavaju samo tekst omogućuje transparentna obrada
multimodalnih sadržaja.

Tijek:

1. Preskoči ako ciljni model već podržava slike (osim ako se nalazi na
   popisu prisilne upotrebe mosta `isVisionBridgeForcedModel`).
2. Izdvoji slikovne dijelove putem `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji obradu delegira **objedinjenom detektoru medija**
   `detectMediaParts()` u datoteci `open-sse/utils/mediaParts.ts` — jedinstvenom
   izvoru istine koji se dijeli s kombiniranim filtrom kompatibilnosti.
   Izdvajanje je ograničeno popisom dopuštenih oblika koje `replaceImageParts` može vratiti
   na njihovo mjesto (ugovor izdvajanje↔zamjena): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` i Responses
   API `input_image`. Podudarne slike ugniježđene unutar sadržaja
   `tool_result.content` sustava Claude Code i izlaza alata Responses također se izdvajaju i
   zamjenjuju na svojim izvornim putanjama; oblici koji služe samo kao pokazatelji namijenjeni su
   kombiniranom filtru i ne izdvajaju se.
   Preskoči ako ništa nije pronađeno.
3. Odredi konfiguraciju izvođenja putem `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki `modalityBridge*`
   imaju prednost; naslijeđeni ključevi `visionBridge*` ostaju kao **rezervna opcija tijekom jednog
   ciklusa** (razdoblje za vraćanje na prethodnu verziju). Preskoči prije bilo kakvog obilaska medijskog sadržaja kada je
   most onemogućen.
4. Birač načina rada (`modalityBridgeVisionMode`, pogledajte tablicu u nastavku) odlučuje između
   preusmjeravanja i opisivanja. Preusmjeravanje vraća `modifiedPayload` u kojem je zamijenjen samo `model`,
   zajedno s metapodacima `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograničava broj slika na `maxImages`, sastavlja upit prilagođen zadatku,
   provjerava predmemoriju opisa, poziva model za obradu slika **paralelno**
   (`Promise.allSettled`) i umjesto slika umeće tekstne dijelove `[Image N]: <description>`.
   Neuspjeli opis daje `null`: izvorna slika zadržava se za
   nepoznate ciljeve ili ciljeve koji podržavaju slike (#4012), ali **potvrđeni izravni cilj
   koji podržava samo tekst** ili kombinacija bez ikakve podrške za slike dobiva izričiti tekstni nadomjestak
   `(unavailable — no vision-capable provider connected)` za
   svaku neopisanu sliku, uključujući djelomične neuspjehe i slike iznad
   ograničenja broja poziva za opisivanje (#17069). Postojeća rezervna opcija opisivanja za kombinacije kada svi pokušaji
   ne uspiju ostaje na snazi (#8430).
6. Vrati `modifiedPayload` i metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Birač načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, neizmijenjena (#6640/#7204): modeli koji nisu kombinirani/`auto/` preusmjeravaju se na najbolji model za vid, osim ako izvorni model već ima upotrebljive vjerodajnice (tada opisuje); kombinirana odredišta uvijek opisuju.                                                                                          |
| `describe` |        | Uvijek opisuje — blok za preusmjeravanje u potpunosti se preskače; model koji je korisnik odabrao uvijek odgovara.                                                                                                                                                                                                                            |
| `reroute`  |        | Prisilno preusmjeravanje: zaobilazi se zaštita koja zadržava model s vjerodajnicama. Zaštita vjerodajnica za **odredište** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljivo odredište za vid, most blokira zahtjev uz jasnu pogrešku umjesto opisivanja ili slanja neobrađenih slika odredištu koje podržava samo tekst. |

Prisilni načini rada prekidaju obradu **prije** pokretanja automatske heuristike; ponašanje načina `auto`
identično je na razini bajtova zaštitnom mehanizmu prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivatelja ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most odabire samo
modele za preusmjeravanje i opisivanje koje taj ključ smije upotrebljavati, na vezama koje
ključ smije upotrebljavati. Poziv za opisivanje zatim uvijek prolazi kroz OmniRoute samopetlju sa
zaglavljem `x-omniroute-self-loop-key-id`, tako da chat zahtjev koji ga prima
ponovno provodi pravila tog ključa za veze i modele. `enforceApiKeyPolicy()`
uvažava to zaglavlje samo zajedno s bearer tokenom samopetlje, pa ono može samo
suziti pristup, a ID koji se ne može razriješiti odbija se.

Ako ključ ne dopušta nijedan model za vid, **potvrđeno odredište koje podržava
samo tekst** lokalno odbija zahtjev sa slikom uz jasnu HTTP 400 pogrešku umjesto
prosljeđivanja bajtova slike nepodržanom nadređenom sustavu (#17069). Za odredišta s
nepoznatom ili izvornom podrškom za vid, putanja opisivanja zadržava svoje prethodno
ponašanje dopuštanja u slučaju pogreške (metapodaci `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa i ključevi bez tih ograničenja ponašaju se potpuno jednako kao
prije.

#### Opisni upit prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) osnovnom
opisnom upitu dodaje tekst **posljednje korisničke poruke** (skraćen na 500 znakova),
usmjeravajući opis prema onome što je korisnik doista pitao
(obrazac codex-vision-proxy) i tražeći od modela za vid da prepiše vidljivi
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovni upit
upotrebljava se neizmijenjen.

Vlastiti OpenAI-kompatibilni zahtjev opisne samopetlje (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuvjetno, za svakog pozivatelja/pružatelja usluge, bez uvjetovanja bilo kakvim signalom klijenta.
Uzorkovanje s malo detalja smanjuje točnost OCR-a upravo za zadatak prijepisa teksta
koji ovaj upit zahtijeva, pa sam poziv za opisivanje uvijek traži mnogo
detalja bez obzira na razinu detalja koju je upotrebljavao izvorni dolazni zahtjev. To
utječe samo na tijelo internog zahtjeva za opisivanje; ne mijenja način na koji
OmniRoute prosljeđuje pozivateljevu vlastitu vrijednost `image_url.detail` u primarnom zahtjevu —
ta se zadana vrijednost primjenjuje zasebno i samo za prepoznate OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana
opisne samopetlje s Anthropicovim formatom prijenosa nema polje `detail`
te nijedna zadana vrijednost na nju ne utječe.

#### Ograničenje izlaza opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se bez izmjena, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis i dodaje
sufiks `…` prije nego što se umetne kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke s mnogo detalja, gdje je nizvodnom modelu potreban
potpuni prijepis; smanjite je kako biste ograničili potrošnju tokena kod opširnih modela za vid.
Polje nadzorne ploče nalazi se na ploči Napredno kartice Vid
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i svaku
vrijednost između 1 i 99 podiže na donju granicu od 100, dok izričitu vrijednost `0`
ostavlja netaknutom — `0` je samostalno valjana Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost „nije postavljeno”.

#### Predmemorija opisa (`modalityBridge/bridgeCache.ts`)

Predmemorija LRU + TTL u memoriji za izlaze opisivanja, zajednička cijelom procesu.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
uokvirivanjem prefiksom duljine (bez kolizija granica polja). Komponenta modela jest
**konfigurirani** model mosta, a ne model koji je stvarno odgovorio —
`callVisionModel` može interno prijeći na rezervni model, a stvaranje ključa za svaki pokušaj
fragmentiralo bi predmemoriju. Neuspješni opisi nikada se ne predmemoriraju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (opisivanje u samopetlji / dohvaćanje base64)

Kada most sam dohvaća **udaljenu** sliku — Anthropicov samopoziv za opisivanje i pretvorba u base64 za claude-wire-format (`ensureBase64ImagesForClaudeWire`), oboje putem `fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultirajući podatkovni URI prosljeđuje se kroz `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) prije ugrađivanja u zahtjev prema modelu za obradu slike. Prevelike slike smanjuju se tako da im **dulja stranica iznosi 2048px** (što odgovara ograničenju promjene veličine koje OpenAI/Anthropic već primjenjuju na strani poslužitelja), čime se smanjuju količina prenesenih bajtova i latencija bez promjene onoga što model za obradu slike vidi. Za promjenu veličine upotrebljava se `sharp`, učitan dinamičkim uvozom: na platformi na kojoj se njegova nativna binarna datoteka ne uspije učitati, `normalizeDataUri()` **nikada ne izbacuje iznimku** — vraća izvorne bajtove bez izmjena, pa putanja opisivanja/pretvorbe u base64 uvijek nastavlja raditi. Bajtovi koji nisu slika (dohvaćanje koje nije vratilo sliku koja se može dekodirati) također se prosljeđuju bez izmjena. Ova se normalizacija primjenjuje samo na slike koje most dohvaća za vlastiti samopoziv — nikada se ne primjenjuje na sirovi sadržaj pozivatelja koji se prosljeđuje bez izmjena, u skladu s načelom izmjena isključivo uz izričitu prijavu (Strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` provjeravaju se Zodom u `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*` i grupa `modalityBridgeAudio*` koju upotrebljava Audio Bridge. Migracija `141_modality_bridge_settings.sql` kopira postojeće naslijeđene vrijednosti `visionBridge*` u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje vrijednost `modalityBridge*` koju je postavio operater); naslijeđeni ključevi ostaju prihvaćeni kao pričuvni izvor za čitanje tijekom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformirani opisivanjem sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(izrađuje ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`, a postavlja `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`). Preusmjereni zahtjevi **ne dobivaju** zaglavlje — sadržaj nije izmijenjen, a zamjena modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (autorizacija za upravljanje, ista razina kao za `GET /api/settings`) vraća brojače po modalitetu pohranjene u memoriji
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` kao nazivnik upotrebljava `latencySamples`, a ne sve pokušaje; operacija bez mjerenja trajanja ne stvara izmišljeni uzorak od nula milisekundi. `bridged` ostaje unatrag kompatibilan pseudonim za uspješne pretvorbe; neuspjeli pokušaji ne povećavaju njegovu vrijednost.
Brojači se namjerno poništavaju pri ponovnom pokretanju procesa
(telemetrija, a ne obračun).

#### Konfiguracija nadzorne ploče

Namjenska stranica nadzorne ploče nalazi se na
`/dashboard/settings/modality-bridge`. Njezine kartice `Vision`, `Audio` i
`Video`, kojima se može pristupiti putem URL-a, zadržavaju parametre upita pri promjeni vrijednosti `tab`.
Kartica Vision omogućuje uključivanje, odabir načina rada i modela (uključujući automatsku zadanu vrijednost), oblikovanje upita prilagođeno zadatku, napredna ograničenja vremena čekanja/broja slika/duljine opisa/predmemorije, brojače tijekom izvođenja i zaštićeni ogledni zahtjev. Kartica Audio također je aktivna: omogućuje uključivanje, birač modela samo za STT s opcijom Auto, ograničenja vremena čekanja/maksimalnog trajanja isječka, brojače zvuka i ogledni test `input_audio`. Kartica Video funkcionalna je: prikazuje stanje okruženja FFmpeg/ffprobe — jedno od četiriju izričitih stanja korisničkog sučelja (`unknown` dok je provjera u tijeku ili se nije mogla dovršiti, `restricted` na hostu nadzorne ploče koji nije povratna petlja i na kojem se provjera preskače na strani klijenta, `unavailable` nakon provjere i potvrde da nedostaje ili `available` s verzijama FFmpeg/ffprobe) — trajno sprema ograničenja uključivanja/modela/kadrova/videozapisa/vremena čekanja, filtrira birač modela tako da prikazuje modele koji podržavaju obradu slike i prikazuje brojače videozapisa.

Prijašnja kartica Vision Bridge u postavkama umjetne inteligencije sada je poveznica za kompatibilnost prema novoj stranici; više ne sadrži drugu kopiju obrasca. Media Providers također povezuje tijekove rada Image-to-Text i Speech-to-Text s odgovarajućim karticama Modality Bridge bez uklanjanja postojećeg okruženja za isprobavanje Speech-to-Text.

**Zaobilaženje kontrole prihvata u samopetlji:** kada se poziv za opisivanje usmjerava kroz OmniRouteovu vlastitu samopetlju `/v1` (model nestandardnog pružatelja), podzahtjev šalje `x-omniroute-admission-bypass: internal` i autentificira se razriješenom vjerodajnicom samopetlje — lokalnim sentinelom `sk_omniroute` u lokalnom načinu rada ili ključem okruženja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao operater (#1350), tako da implementacije s `REQUIRE_API_KEY=true` i dalje mogu izvršavati poziv za opisivanje. Zaobilaženje se prihvaća samo za te točne vjerodajnice, pa vanjski klijenti ne mogu upotrijebiti zaglavlje za preskakanje kontrole prihvata.

Naslijeđene zadane vrijednosti nalaze se u `src/shared/constants/visionBridgeDefaults.ts`; nove zadane vrijednosti za način rada/prilagođenost zadatku/predmemoriju i razrješavatelj postavki nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam nudi opciju konstruktora `deps` kako bi testovi mogli umetnuti lažne implementacije `getSettings` i `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što stignu do cilja za koji nije poznato da prihvaća zvučni ulaz. Nikada ne preusmjerava zahtjev za razgovor: zvučni dijelovi transkribiraju se putem postojećeg višedijelnog krajnjeg čvora kompatibilnog s OpenAI-jem, a odabrani model za razgovor nastavlja s tekstnim transkriptima.

Tijek:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra pružatelja imaju prednost, zatim slijede statički metapodaci modela, pa sinkronizirani
   `modalities_input`. Deklarirani popis ulaza bez `audio` daje `false`; ako nema
   dokaza o mogućnosti, rezultat je `null`. I `false` i `null` aktiviraju
   konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite spojive dijelove zvuka najviše razine
   iz svake poruke putem zajedničkog detektora `detectMediaParts()`.
   Podržani formati prijenosa su OpenAI `input_audio`, `audio_url` i
   `source.media_type: "audio/*"`. Ugniježđeni zvuk otkriva se za usmjeravanje, ali se ne
   uklanja putem spajanja. Obrada je ograničena postavkom `modalityBridgeAudioMaxClips`;
   kasniji dijelovi ostaju neizmijenjeni.
3. Poštujte konfigurirani `provider/model` ili prepustite funkciji `selectAudioBridgeModel()` da prođe kroz
   `AUDIO_TRANSCRIPTION_PROVIDERS` stabilnim redoslijedom kataloga i odabere prvi
   model s upotrebljivom aktivnom vjerodajnicom pružatelja.
4. `callAudioTranscription()` pretvara base64/data-URI zvuk u višedijelnu
   datoteku `file` ili preuzima udaljeni `audio_url` putem zaštite odlaznih veza
   koja dopušta samo javna odredišta, uz DNS prikvačivanje i ograničenje od 25 MB. Zatim POST-om šalje datoteku i odabrani
   model u lokalnu samopetlju `/v1/audio/transcriptions`, autentificiranu putem
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   traženje vjerodajnica, rukovanje razdobljima hlađenja/ograničenjima brzine i prosljeđivanje pružatelju.
5. Uspješni pozivi zamjenjuju svoje dijelove s `[Audio N]: <transcript>`. Pozivi
   se izvode pomoću `Promise.allSettled`: pojedinačni neuspjeh zadržava izvorni
   zvučni dio (ugovor #4012). Ako svi pozivi ne uspiju, a za cilj je dokazano
   `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznati cilj (`null`) rezultat u kojem su svi pozivi neuspješni ostaje neizmijenjen. Dokazano
   tekstualni cilj bez upotrebljive STT vjerodajnice dobiva isti eksplicitni
   zamjenski tekst bez slanja mrežnog poziva.

Uspješne transkripcije koriste LRU/TTL predmemoriju Modality Bridgea na razini procesa. Ključ
kombinira referencu zvuka, stabilnu oznaku operacije `audio-transcription`
i odabrani STT model; neuspjesi se nikada ne predmemoriraju. Pokušaji obrade zvuka ažuriraju
zajednička brojila `bridged`, `cacheHits`, `failures` i `lastUsedAt`.
Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; neizmijenjeni
zahtjevi ne dobivaju segment Audio Bridgea.

Postavke tijekom izvođenja pohranjuju se u bazu podataka i provjeravaju Zodom:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Zajedničkom predmemorijom i dalje upravljaju `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće dijelove videozapisa najviše razine u `messages` API-ja Chat Completions i
`input` API-ja Responses prije poziva cilja bez poznate izvorne podrške za video.
Podržani formati su `input_video`, `video_url`, `video_source`, HTTPS URL-ovi
i podatkovni URI-ji `data:video/*;base64,...`. Obični nazivi datoteka u tekstu ne smatraju se
videozapisima.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom kroz zahtjev,
provjerom mogućnosti/pravilnika, agregiranjem po zahtjevu i korisnim sadržajem odgovora.
Obrada pojedinačnog videozapisa — dohvaćanje, predmemoriranje cjelokupnog rezultata, opisivanje slijeda
kadrova (koje spaja svaki audiosadržaj transkripcije koji je deklarirao pozivatelj) te metrike/prekid/čišćenje
po pokušaju — skrivena je iza `processVideoPart` u
`videoBridgePipeline.ts`, koja se poziva jednom za svaki dio videozapisa unutar petlje funkcije `preCall`.
Taj modul također definira eksplicitne granice priključaka `VideoMediaBrokerPort`
(dohvaćanje bajtova i izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort`
(spajanje transkripcije zvuka koju je deklarirao pozivatelj s opisima uzorkovanih kadrova) i
`VideoDrilldownPort` (granica trajne pohrane detaljnog pregleda kadrova; još nije povezana
s `processVideoPart` — danas samo zasebna ruta `/api/modality-bridge/video/drilldown`
zapisuje unose detaljnog pregleda).

Javni put zahtjeva `/v1` nikada ne uvozi niti poziva potproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; ugrađeni base64 videozapisi imaju
konzervativno ograničenje dekodirane veličine od 36 MiB po videozapisu kako bi omotnica
modela/poruka/uokvirivanja mogla ostati unutar javnog ograničenja prihvata JSON zahtjeva od 50 MiB. Duljina ugrađenog
sadržaja i procjene dekodirane veličine provjeravaju se prije dodjele memorije. HTTPS je
obvezan za početni udaljeni URL i svako preusmjeravanje, uz postojeću
zaštitu odlaznih veza koja dopušta samo javna odredišta i koristi DNS prikvačivanje. Bajtovi zatim prelaze točno definiranu internu
granicu posrednika `POST /api/modality-bridge/video/extract`. Ta je ruta istodobno
`LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvaća samo autentificiran zahtjev
pouzdane lokalne povratne veze za pojedini proces te nikada ne prihvaća URL, put datotečnog sustava, izvršnu datoteku
ni popis argumenata. Obradni cjevovod ograničenja veličine tijela API-ja i inkrementalni čitač tijela
rukovatelja neovisno primjenjuju ograničenje ulaza posrednika od 50 MiB. Njegov ograničeni red čekanja izvodi
jedno izdvajanje odjednom, dopušta četiri posla na čekanju i ograničava ukupni ulaz na čekanju na
100 MiB.

Unutar posrednika `ffprobe` čita privatnu lokalnu datoteku; fiksni popis
dopuštenih formata isključuje formate popisa za reprodukciju i manifesta. Za
dopuštene spremnike iz obitelji MOV vanjske reference na MOV podatke ostaju
prema zadanim postavkama onemogućene, a fiksna naredba ne uključuje ih izričito.
I `ffprobe` i `ffmpeg` upotrebljavaju popis dopuštenih protokola koji sadrži
samo `file`, jednu dretvu, fiksne nizove argumenata, bez ljuske, a izvršne se
datoteke razrješavaju iz `PATH`. Tokovi naslovnih slika u privitku nisu kandidati
za reprodukciju. Svi tokovi koji se mogu reproducirati moraju zadovoljiti
ograničenja, a eksplicitni zadani tok ima prednost pred determinističkim
rezervnim odabirom s najnižim indeksom. Videozapisi su ograničeni na 600
sekundi, 8.192 piksela po dimenziji i 33.554.432 izvorna piksela. FFmpeg uzorkuje
1–16 JPEG sličica iz sredine intervala, smanjuje dulji rub na najviše 1.024
piksela bez povećavanja manjih ulaznih sadržaja i nikada ne prima URL. Uzorkovanje
je prema zadanim postavkama `uniform`. Neobavezna pravila `scene_aware` i
eksperimentalno `segment_aware` izvode jedan dodatni fiksni prolaz FFmpegom nad
već provjerenim lokalnim tokom, odabiru ograničene vremenske oznake scena
`showinfo` i deterministički se vraćaju na iste jednoliko raspoređene sredine
intervala u slučaju pogreške detektora, isteka vremena, neispravnog izlaza ili
praznog skupa kandidata. Način rada svjestan segmenata dodjeljuje uzorke iz
sredine intervala razmjerno provjerenim intervalima scena; dokazi svjesni
segmenata i rezervno ponašanje detaljno su opisani u nastavku. Čvrsto ograničenje
od 16 sličica primjenjuje se nakon odabira u svakom pravilu. Kada zahtjev
svjestan scena ima proračun od samo jedne sličice, upotrebljava jednoliko
odabranu sredinu aktivnog prozora cijelog videozapisa ili fokusnog prozora i
prijavljuje `policyEffective: uniform`: jedna odabrana sličica scene ne može
očuvati oba vremenska kraja. Pozivatelj može neobavezno navesti konačan fokusni
prozor (`start`/`end` u sekundama); granice se ograničavaju na trajanje medija,
obrnuti ili nekonačni prozori odbijaju se, a sva pravila uzorkovanja izvode se
samo unutar normaliziranog intervala. Dobiveni prozor uključuje se u metapodatke
uzorkovanja i u prefiks nepouzdanog opisa kako bi daljnji modeli mogli
razlikovati fokusirani isječak od cijele vremenske crte.

Semantički fokus opisa zasebna je, eksplicitna postavka. Zadani način analize
`full` zadržava postojeći upit za sličicu i nikada ne prosljeđuje tekst zahtjeva
modelu za opisivanje. U načinu `focused` most čita samo najnoviji neprazni
`text`/`input_text` koji je napisao korisnik iz istog spremnika Chat ili
Responses, normalizira ga u NFC, sažima kontrolne znakove i bjeline te ga
ograničava na 500 Unicode kodnih točaka. Prazan rezultat vraća se na točan upit
`full`. Upotrebljiva naznaka serijalizira se kao JSON u namjenskom bloku
nepouzdanog korisničkog konteksta i smije samo dati prednost uočljivim
pojedinostima; ne može nadjačati zasebno upozorenje protiv slijeđenja uputa koje
su vidljive ili čujne u mediju. Tekstualni fokus nikada ne izvodi `start`/`end`
niti mijenja vremenski uzorkivač.

#### FU-07 strukturni dokazi segmenata

`segment_aware` izvodi jedan ograničeni prolaz predanalize nad već provjerenim
lokalnim videotokom. Fiksni lanac filtara najprije smanjuje širinu na najviše
320 piksela, otkriva promjene scena i zamrznute intervale, a zatim uzorkuje
brzinom od 1 sličice u sekundi radi procjene zamućenja, prosječne luminancije te
prostornih i vremenskih informacija. Prolaz je ograničen na 600 strukturnih
uzoraka, jednu FFmpeg/filtersku dretvu, iste popise dopuštenih protokola koji
sadrže samo `file` i dopuštenih spremnika, ograničenje izlaza procesa od 1 MiB
te najviše 30 sekundi unutar zajedničkog prekida/roka posrednika. Nikada ne
prihvaća naredbu, filtar, putanju ni URL iz zahtjeva.

Strukturne vrijednosti deterministički su dokazi uzorkovanja, a ne semantičko
razumijevanje videozapisa. Ne izvode zaključke o subjektima, radnjama, opisima,
govoru ni namjeri korisnika. Granice scena i zamrzavanja tvore segmente;
pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i vremenska
promjena utječu samo na način dodjele postojećeg proračuna od 1–16 sličica.
Potpuno zamrznuti segment ograničen je na jednu sličicu, dok se nezamrznuti
segmenti natječu za preostali proračun. Kada broj granica premašuje broj
sličica, zadržava se jednolika pokrivenost vremenske crte kako brzi rani rezovi
ne bi mogli sakriti dugačak završni segment. Granice scena unutar razlučivosti
analize od 1 sekunde u odnosu na granicu zamrzavanja spajaju se.

Nedostajući filtri, neispravni/prazni dokazi, pogreška detektora ili istek
vremena ograničene predanalize dopuštaju nastavak rada prema točnom pravilu
jednoliko raspoređenih sredina intervala. Prekid pozivatelja ili rok posrednika
ne dopuštaju takav nastavak: prekidaju podproces u tijeku, sprječavaju naknadno
izdvajanje sličica, a privatno privremeno stablo uklanja se u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg
ispitne sadržaje za uštede u pozivima opisivanja nakon uklanjanja duplikata,
dodjelu proračuna pri gustom kretanju, dokaze zamućenja/ekspozicije/SI-TI, brze
rezove s dugim završetkom i lažno pozitivne rezultate postupnog pretapanja.
Bilježi proteklo vrijeme predanalize i, kada je `/usr/bin/time` dostupan,
procesorsko vrijeme podređenog procesa i vršnu vrijednost RSS-a. Njegove
provjere kvalitete samo su strukturni orakuli. Kvaliteta stvarnog modela za
opisivanje ostaje `HOLD` jer ovaj ispitni okvir nema ovlaštenu krajnju točku ni
zamrznutog ocjenjivača. Novčane uštede također ostaju `HOLD` osim ako
`--caption-cost-per-call-usd` ne navede eksplicitnu pozitivnu procjenu troška po
pozivu; skripta nikada ne izmišlja nijedan od tih rezultata.

Svaki je okvir ograničen na 4 MiB, svi neobrađeni okviri zajedno na 23 MiB, a
serijalizirani odgovor posrednika na 32 MiB. Privatni privremeni direktorij uklanja se
u bloku `finally`. OmniRoute ne isporučuje FFmpeg u paketu i ne prihvaća prilagođeni
put do izvršne datoteke. Prije opisivanja most primjenjuje konzervativan postupak
vizualne deduplikacije: svaki se JPEG smanjuje na međuspremnik sivih tonova veličine
16×16 i uspoređuje samo s posljednjim zadržanim okvirom. Za zatraženi proračun opisa
veći od jednog okvira izdvajanje stvara
ograničen skup kandidata koji može sadržavati najviše dvostruko više okvira od tog proračuna, ali nikad više od 16 okvira.
Zatraženo ograničenje primjenjuje se tek nakon deduplikacije, pri čemu se prvi i posljednji
odabrani kandidat zadržavaju tijekom završnog prorjeđivanja kada proračun iznosi najmanje
dva. Verzijski definirano pravilo
`grayscale-16x16-mean-cells-v2` upotrebljava veću vrijednost između srednje razlike luminancije i
udjela ćelija minijature čija je normalizirana razlika najmanje 0,05.
Prag za duplikate konstantna je vrijednost 0,04, odabrana radi predvidljivosti umjesto
izlaganja u obliku postavke tijekom izvođenja. Taj sekundarni
signal visokog kontrasta zadržava male pokrete i promjene vidljivog teksta koje
usporedba temeljena samo na srednjoj vrijednosti može prikriti. Pogreške uspoređivača ili dekodera ne prekidaju obradu i zadržavaju
pokrivenost. Metapodaci izlaza zasebno prikazuju izdvojene kandidate, uspješno upotrijebljene
okvire i odbačene vizualne duplikate.

Izričito označen videodio može zatražiti kontaktni list s vremenskim oznakama. Most
izrađuje JPEG mrežu s najviše 4 stupca i 16 okvira. Svaka ćelija od 512 piksela trajno
utiskuje vremensku oznaku svojeg izvora u donju traku visokog kontrasta, dok iste vremenske oznake
ostaju u tekstnim metapodacima radi naknadnog povezivanja i revizije. Cjeloviti
JPEG i dalje je ograničen na 32 MiB. Ako `sharp` ne može dekodirati ili sastaviti mrežu,
most se vraća na pojedinačne JPEG okvire; prekid koji pokrene klijent i dalje se prosljeđuje
kroz operaciju izrade lista.

Dokazi za promicanje namjerno su odvojeni od sintetičkog mikrotesta performansi
sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira
A/B ispitni okvir s verzioniranom shemom za stvarne modele računalnog vida kompatibilne s OpenAI-jem. Mjeri
broj tokena koji prijavi pružatelj, ukupnu latenciju od početka do kraja (uključujući sastavljanje lista),
broj poziva modela i zadržavanje činjenica definiranih manifestom. Neobrađeni odgovori modela ne
zapisuju se u izvješće; zadržavaju se samo SHA-256 sažeci i ID-jevi podudarnih činjenica.
Ispitni okvir ne upućuje mrežni poziv ni poziv modelu koji se plaća osim ako je proslijeđen `--execute-real` te su
konfigurirani `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez
takvog izričitog stvarnog izvođenja njegov strojno čitljiv zaključak ostaje `HOLD`; sama sintetička
mjerenja korisnog sadržaja i broja poziva nisu dokaz za promicanje.

Pozivatelji mogu podržanom videodijelu pridružiti neobavezno polje `transcript.cues` u obliku niza
ako već imaju vremenski usklađen tekst. Svaka natuknica mora sadržavati `text`,
konačan interval `start`/`end` unutar utvrđenog trajanja i vrijednost
`source` s popisa dopuštenih vrijednosti (`client`, `embedded` ili `audio-bridge`); zadana je vrijednost za `confidence`
`1` i mora ostati između `0` i `1`. Potpuno jednake natuknice spajaju se.
OmniRoute nikad ne pokreće transkripciju na temelju tih metapodataka: provjerene natuknice
kopiraju se u rezultat opisa zajedno s izvorom, pouzdanošću i intervalom te se
prikazuju kao nepouzdana opažanja uz opise okvira. Nevaljan tekst,
tekst izvan raspona ili tekst bez podrijetla odbacuje se umjesto miješanja s
tokom opisa. Oba kanala transkripta u tijelu zahtjeva normaliziraju dostavljeno
podrijetlo na `client`, uključujući samostalno navedene oznake `embedded` ili `audio-bridge`.
Samo adapter pod nadzorom poslužitelja može dodijeliti te pouzdane oznake putem
argumenta `trustedSource` dostupnog isključivo u kodu; JSON polje zahtjeva ne može
dosegnuti taj argument. Tekst transkripta ostaje nepouzdan sadržaj izveden iz medija
bez obzira na svoje podrijetlo i nikada ne smije određivati autorizaciju.

Napredni pozivatelj može za isti video dostaviti zapis `audioTranscript`;
on se smatra tekstom koji je dostavio klijent, a ne dokazom poslužiteljske transkripcije.
Spojni sloj obrađuje vizualna i zvučna opažanja unutar
jednog roka i signala prekida, raspoređuje ih na zajedničkoj vremenskoj crti, spaja
potpuno jednake stavke i prijavljuje djelomičan rezultat kada uspije samo jedna strana.
Nevaljan `audioTranscript` dovodi do takvog djelomičnog rezultata — vizualni
opis ostaje sačuvan, a zvučna grana bilježi sanitizirani kôd pogreške —
umjesto neuspjeha cijelog videozapisa. Dostupnost svake grane, oznaka djelomičnog rezultata
i sanitizirani kodovi pogrešaka čuvaju se u rezultatu opisa, u
metapodacima zaštitnih mehanizama (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u brojačima
spajanja mosta. Zadani put Video Bridgea ne poziva pretvorbu govora u tekst
niti preuzima drugu kopiju medija; bez tog izričito navedenog zapisa ostaje
ograničen samo na video.

**Zadržavanje transkripta (#12150 P1).** Ovo se primjenjuje automatski kad god
Video Bridge (koji se zasebno mora uključiti) renderira znak transkripta — ne
postoji zasebna zastavica za zadržavanje. Kada zahtjev renderira bilo koji znak
transkripta (`transcript` koji je deklarirao pozivatelj ili objedinjeni
`audioTranscript`), zaštitni mehanizam označava ga kao `videoBridgeObserved` i
izrađuje redigiranu presliku opisa videozapisa — identično renderiranje u kojem
je tijelo slobodnog teksta svakog znaka zamijenjeno s
`[redacted-video-transcript]`, izrađeno zamjenom strukturiranog polja znaka prije
sastavljanja niza (nikada raščlanjivanjem objedinjenog teksta, tako da nikakav
sadržaj znaka — zlonamjeran ili običan, uključujući tijela koja sadržavaju `]`
poput `[inaudible]`/`[music]` — ne može ostati). U tijelu zahtjeva trajno
pohranjenog zapisnika poziva svaki se tekstualni dio izveden iz videozapisa
zamjenjuje tom redigiranom preslikom, uparenom prema jednakosti sadržaja;
sidro `fullText` ponovno se čita iz dovršenog korisničkog sadržaja zaštitnog
mehanizma prije poziva, pa je uparivanje i dalje uspješno nakon što naknadni
zaštitni mehanizmi u lancu (alati za maskiranje osobnih podataka i vjerodajnica,
prioriteta 10/95) prepišu tekst opisa na mjestu te nakon što umetanje sistemskog
upita, predaje i memorije preoblikuje polje poruka. Tijelo poslano modelu nije
promijenjeno. Promatrani zahtjev također ne popunjava trajnu Memory (preskače se
izdvajanje izvedeno i iz zahtjeva i iz odgovora), tako da vlastiti odgovor
modela ne može prenijeti tekst transkripta u Memory.

**Neobrađena polja videozapisa (#12430).** Kada je most omogućen, a izvorna
podrška za videozapis nepoznata ili nije dostupna, definirana polja
`transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i
nakon neuspjelog opisivanja ili dosezanja ograničenja `maxVideos`. `null` i prazni
nizovi računaju se; odsutna polja i metapodaci koji se ne odnose na videozapis ne
računaju se. U zadržanim se kopijama ta polja redigiraju ili se zahtjev izostavlja,
a predmemorije i Memory zaobilaze se.

Na tim pričuvnim putovima valjani znakovi pozivatelja postaju podržani dijelovi
`text`/`input_text`, umjesto nestandardnih polja pružatelja usluge. Obje staze
isporučene u zahtjevu ostaju nepouzdana opažanja `client`, uz izričito upozorenje
da videozapis nije opisan i da vremenske oznake nisu provjerene prema medijskom
sadržaju. Postojeća ograničenja od 256 znakova/64 KiB ukupno i po znaku
primjenjuju se na obje staze zajedno; vremenske oznake moraju stati unutar
ograničenja posrednika od 600 sekundi i svakog navedenog fokusnog prozora.
Nevaljane staze odbacuju se i ne prosljeđuju kao proizvoljan tekst; valjana
paralelna staza i dalje se može upotrijebiti, osim ako je prekoračeno njihovo
zajedničko ograničenje. Polja s vrijednošću null ili prazna polja ne dodaju
tekst. Ovaj pričuvni mehanizam ne dodaje dohvaćanje medijskog sadržaja ni
transkripciju. Proširena polja transkripta uklanjaju se iz pričuvnog nosača
videozapisa i njegovih objekata `video_url`/`source`. OpenAI popis dopuštenih
elemenata u prijenosnom formatu ostaje strog; nosači videozapisa s nepoznatom
izvornom podrškom ostaju dostupni, a poznata odredišta samo za tekst zadržavaju
sigurne oznake. Strukturirane redigirane preslike štite dodani tekst transkripta,
dok izvorni zahtjev u vlasništvu pozivatelja ostaje nepromijenjen. Odredišta s
izvornom podrškom i onemogućeni mostovi zadržavaju postojeće ponašanje
zaobilaženja.

Dodatne zadržane kopije koriste isti signal promatranog zahtjeva. Neobrađena
snimka klijentskog zahtjeva prije zaštitnog mehanizma, zahtjev na čekanju u
memoriji i rani zapisnik odbijenog zahtjeva strukturno zamjenjuju polja
transkripta u dijelovima videozapisa; znakovni upiti koje sintetiziraju faze
cjevovoda i predaja konteksta redigiraju se na odredištu trajno pohranjenog
tijela zahtjeva. Trajno pohranjena oznaka `video_content_removed` uzrokuje da se
nastavak `previous_response_id` zatvori na siguran način umjesto rekonstrukcije
teksta koji je namjerno odbačen. Ako promatrani zahtjev izgubi svoju redigiranu
presliku po dijelu prije bilježenja ili ako se nakon naknadnih izmjena zahtjeva
ne uspije upariti čak ni jedna od nekoliko preslika videozapisa, zadržano tijelo
zahtjeva u potpunosti se izostavlja umjesto zadržavanja djelomično redigiranog
transkripta.

Za promatrani zahtjev odgovor modela može citirati bilo koji dio transkripta bez
strukturirane granice znaka. Njegov se trajno pohranjeni `responseBody` zapisnika
poziva stoga zamjenjuje oznakom izostavljanja; detaljni artefakt cjevovoda (koji
može uključivati tijela uzvodnog sustava/klijenta i dijelove toka) ne zadržava
se. Semantičke predmemorije, predmemorije idempotentnosti i predmemorije
ponavljanja zaključivanja zaobilaze čitanja i pisanja za taj zahtjev. Zahtjev
pružatelju usluge i odgovor vidljiv klijentu ostaju nepromijenjeni. Rani bajtovi
signala održavanja veze uklanjaju se iz privremenog međuspremnika kada se
detaljni artefakt izostavi. Kirovo upozorenje o neispravnom EventStreamu navodi
samo broj bajtova korisničkog sadržaja, nikada njegov sadržaj ni neobrađenu
pogrešku JSON raščlanjivača.
Time se ne tvrdi da je provjerena svaka nepovezana dijagnostika pružatelja
usluge/dodatka; šira provjera odredišta sa zadržavanjem prati se u #11658.

Životni ciklus internog `/api/modality-bridge/video/drilldown` zaseban je
predmemorijski podsloj ovjeren povratnom petljom/tokenom. Svaka operacija također
zahtijeva kanonski neprozirni ID principala. Prije omogućavanja produkcijskog
pozivatelja on taj ID mora izvesti iz ovjerenog najmoprimca i nikada ne smije
proslijediti vrijednost koju je odabrao klijent. Ključevi predmemorije povezuju
taj principal s kanonskim ID-ovima sesije i reference videozapisa, pohranjuju
samo njihove ključeve izvedene algoritmom SHA-256 te ograničavaju i čitanja i
brisanje na isti principal. Predmemorija pohranjuje najviše 16 izvedenih JPEG
okvira po unosu, uklanja ih nakon deset minuta i podržava ograničena čitanja
`start`/`end` ili izričito brisanje sesije.

Svaki principal ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta su
ograničenja neovisna o globalnoj gornjoj granici od 64 unosa/256 MiB: pritisak
kvote principala najprije uklanja samo najdulje nekorištene unose tog principala,
prije razmatranja globalnog LRU uklanjanja. Istekli unosi uklanjaju se iz
obračuna principala i globalnog obračuna pri aktivnosti predmemorije, dok otkazivanje
i neuspjela provjera valjanosti ne potvrđuju djelomičnu zamjenu.

Predmemorija odbija nekanonski Base64, prekomjerno popunjavanje, medije koji nisu JPEG, neispravne ili
skraćene JPEG-ove te JPEG-ove koji stvaraju upozorenje tijekom ograničenog dekodiranja cijele slike pomoću biblioteke `sharp`.
Svaku prihvaćenu sliku ponovno kodira kao kanonski JPEG, određuje širinu i visinu
iz dekodiranih bajtova umjesto pouzdavanja u polja pozivatelja te odbacuje sve završne
poliglotske bajtove umjesto da ih zadrži. Samo se ograničeni kanonski komprimirani međuspremnik
uračunava u obje kvote. Ograničenje JSON prijenosa uključuje dodatni prostor za Base64 za gornju granicu
dekodiranog ulaza od 32 MiB. Svaka
pohranjena izvedenica bilježi svoj validirani JPEG format/razlučivost, pravilo uzorkovanja,
verziju izvedenice, vrijeme stvaranja, poslužiteljski izračunat sažetak sadržaja i sažetu referencu
nadređenog elementa zajedno sa sažetkom sadržaja nadređenog elementa pouzdanog pozivatelja. Otkazivanje se provjerava
između asinkronih faza dekodiranja/izračuna sažetka prije atomskog zapisivanja u predmemoriju.

Ova etapa još ne povezuje produkcijskog proizvođača s rutom i ne
omogućuje odabir varijante s više razlučivosti. Transparentni put zahtjeva Video Bridgea
stoga ne donosi dodatnu obradu, dok izvođenje principala vezanog uz najmoprimca i
cijeli FU-08 životni ciklus s više razlučivosti ostaju izričiti naknadni zadaci
umjesto da budu dokumentirani kao dovršeno ponašanje.

Okviri se redom opisuju pomoću konfiguriranog modela za Video. Prazno
nadjačavanje za Video nasljeđuje postavku za Vision; ako su oba prazna, Visionov
automatski usmjerivač odabire odgovarajući model koji podržava vid. Uspješni opisi
zamjenjuju izvorni dio stabilnim prefiksom `[Video description:` koji također
označava tekst kao nepouzdano opažanje izvedeno iz medija i nalaže modelima
u nastavku obrade da ne slijede upute pronađene u mediju. Ključevi predmemorije opisa okvira
uključuju JPEG bajtove, upit, vremensku oznaku i stvarni model; u predmemoriju se spremaju samo uspješni
opisi. Zapisi predmemorije zadržavaju stvarni uspješni model proizvođača,
uključujući pričuvni model; most prijavljuje `mixed` kada su različite okvire
proizveli različiti modeli. Pogodak u predmemoriji ponovno upotrebljava taj identitet proizvođača
umjesto da ga ponovno označi kao traženi plan usmjeravanja. Predmemorija rezultata
cijelog videozapisa indeksirana je svakim ulazom koji mijenja izlaz — upitom, stvarnim
modelom, pravilom uzorkovanja, brojem okvira, načinom semantičke analize, SHA-256
otiskom normaliziranog savjeta za fokusiranje, prozorom fokusa, vrijednostima `transcript`,
`audioTranscript` i zastavicom kontaktnog lista — pa promjena bilo koje od tih
dimenzija uzrokuje promašaj predmemorije, a nikada ponovnu upotrebu zastarjelog rezultata. Verzija
pravila vizualne deduplikacije, prag i ograničeni broj kandidata za okvire također su izričito navedeni u
ključu i metapodacima predmemorije rezultata; promjena pravila stoga ne može ponovno upotrijebiti zastarjeli
opis cijelog videozapisa. Metapodaci predmemorije rezultata v4 čuvaju način rada i
otisak, ali nikada neobrađeni korisnički zadatak. Metapodaci zaštitnih mehanizama prijavljuju i
zatraženi i stvarni način analize; zatraženi način `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao stvarni način `full`.

Zaštitni mehanizam izdvaja svaki podržani dio videozapisa, ali ne opisuje više od
`modalityBridgeVideoMaxVideos`. Za cilj za koji je dokazano da ima
`supportsVideo === false`, neuspjeli videozapisi i oni iznad ograničenja postaju eksplicitne sigurne
tekstne oznake kako ne bi preživio nijedan neobrađeni videozapis. Kada mogućnost nije poznata, ti dijelovi
zadržavaju svoj nosač videozapisa; svaki pričuvni transkript slijedi prethodno opisanu ograničenu
pretvorbu teksta. Ciljevi s `supportsVideo === true` zaobilaze most.
Signal za prekid klijentskog zahtjeva prenosi se kroz preuzimanje, red čekanja posrednika,
podprocese i pozive za opisivanje; prekidi zaustavljaju obradu između videozapisa i nikada ne propuštaju
neobrađeni medij u slučaju pogreške.

Postavke izvođenja pohranjene su u bazi podataka i validirane pomoću Zoda:

| Ključ                               | Zadano      | Raspon / ponašanje                                                                                            |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Neobavezno tijekom izvođenja, uz izričito uključivanje                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zadržava generičke opise; `focused` upotrebljava ograničeni, nepouzdani kontekst posljednjeg korisnika |
| `modalityBridgeVideoModel`          | `""`        | Nasljeđuje model Vision Bridgea                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; neuspjeh detektora vraća se na `uniform`         |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Naslijeđene trajno pohranjene vrijednosti vremenskog ograničenja za Video iznad 120 sekundi ograničavaju se na
rok posrednika; nova zapisivanja postavki iznad tog ograničenja odbijaju se.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu, označenu lokalnost povratne petlje
prije autentikacije ili ispitivanja okruženja izvođenja, a zatim zahtijeva upravljačku
autorizaciju. Vraća samo `available`, pročišćene verzije FFmpega/ffprobea i fiksni
razlog kada okruženje izvođenja nije dostupno. Interna krajnja točka za izdvajanje nije
javni API za prijenos: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivatelja vraća `499`, a fiksni rok posrednika vraća `504`. Pretvoreni odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u središnje
zaglavlje `x-omniroute-modality-bridge` bez uklanjanja segmenata Vision ili Audio.

### Maskiranje osobnih podataka (`piiMasker.ts`)

Izvodi se u **obje** faze.

- **`preCall`** klonira korisni sadržaj, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući stavke u obliku običnog niza znakova) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na polja `content`/`text` koja sadrže nizove znakova. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni osobni podaci redigiraju se u odlaznom
  korisnom sadržaju. To je neovisno o `INPUT_SANITIZER_MODE` (koji upravlja samo
  pravilima za ubacivanje upita). Kada je redigiranje isključeno, poziv bilježi broj
  otkrivenih podataka bez izmjene sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` zajedno
  s maskiranjem oblika Responses API-ja (`maskResponsesOutput` — obuhvaća
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog redigiranja,
  izmijenjeni odgovor zamjenjuje izvorni.

Zaštitna provjera nikada ne blokira; samo dodaje napomene (`meta.detections`,
`meta.redacted`) ili prepisuje sadržaj.

#### Odabir prema vrsti, prilagođeni uzorci i brojači otkrivanja

**Nadzorna ploča → Postavke → Sigurnost → Maskiranje osobnih podataka** određuje _što_ se maskira. Time se
maskiranje ne uključuje: za to se i dalje upotrebljavaju `PII_REDACTION_ENABLED` (zahtjev) i
`PII_RESPONSE_SANITIZATION` (odgovor + SSE), a oba su prema zadanim postavkama isključena.

- **Odabir prema vrsti** — ugrađeni identifikatori navedeni su u
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ako vrijednost nije postavljena, to znači sve
  vrste (ponašanje prije uvođenja ove postavke). Uzorak
  `ssn_us` mehanizma za zahtjeve mapira se na `ssn`. Predlošci (Minimalni, Standardni, Financijski,
  Brazilski, SAD, Potpuni) samo označavaju potvrdne okvire u korisničkom sučelju.
- **Prilagođeni uzorci** — do 20 uzoraka regularnih izraza ili zamjenskih znakova (`*` = do 64
  znaka koji nisu razmaci, `?` = jedan). Podudaranja postaju `[CUSTOM_REDACTED]`.
  Svaki uzorak prolazi kroz `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): najviše 500 znakova, zastavice su ograničene
  na `g i m s u`, mora se moći kompilirati, mora proći `safe-regex` (katastrofalno
  vraćanje unatrag) te se ne smije podudarati s praznim nizom znakova ili rezerviranim tekstom redigiranja.
  Uzorak koji ne prođe odbija se pri spremanju i testiranju, a spremljeni redak
  koji ne prođe preskače se tijekom izvođenja umjesto da se kompilira. Prilagođeni uzorci
  izvršavaju se samo dok je maskiranje uključeno.
- **Brojači otkrivanja** — brojevi prema vrsti (nikada podudarne vrijednosti), čuvaju se u
  memoriji i poništavaju pri ponovnom pokretanju (`src/lib/pii/piiDetectionStats.ts`). Povećavaju se
  samo dok je maskiranje uključeno.

Postavke se nalaze u tablici `key_value` (imenski prostor `pii_settings`,
`src/lib/db/piiSettings.ts`) i čitaju se putem predmemorije od 1 s. API:

| Metoda | Put                      | Svrha                                                                          |
| ------ | ------------------------ | ------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Stanje zastavice, `enabledTypes`, `customPatterns`, brojači otkrivanja         |
| `PUT`  | `/api/settings/pii`      | Zamjena `enabledTypes` (`null` = sve) i/ili `customPatterns`                   |
| `POST` | `/api/settings/pii/test` | Probno izvođenje jednog uzorka na primjeru od najviše 8 KB; ništa se ne sprema |

Sva tri zahtijevaju autentifikaciju za upravljanje i provjeravaju tijelo pomoću biblioteke Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Ubacivanje upita (`promptInjection.ts`)

Otkriva neprijateljske strukture u sadržaju koji je dostavio korisnik i primjenjuje
konfigurirana pravila. Ponašanjem upravljaju varijable okruženja i opcije
konstruktora:

| Postavka        | Varijabla okruženja                                                                                   | Zadano | Učinak                                                                                                                                                                                                                   |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kada je `false`, zaštitna provjera odmah završava.                                                                                                                                                                       |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Pravilo za ubacivanje: `block`, `warn` ili `log`. (`redact` je prihvaćen radi kompatibilnosti unatrag, ali **ne** uklanja tekst ubacivanja; prepisivanjem osobnih podataka u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Najniža razina ozbiljnosti potrebna za blokiranje. Srednja razina prema zadanim postavkama služi samo za praćenje.                                                                                                       |

**Redoslijed prvenstva načina rada** (`getMode`): pozivateljev `options.mode` →
nadjačavanje `INJECTION_GUARD_MODE` putem **DB zastavice značajke** (Nadzorna ploča → Postavke →
Zastavice značajki) → varijabla okruženja `INJECTION_GUARD_MODE` → varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Nadjačavanje putem nadzorne ploče stoga ima prednost nad varijablama okruženja, pa korisničko sučelje Zastavice
značajki upravlja aktivnom zaštitom uživo (bez ponovnog pokretanja). Čitanje iz baze podataka sigurno je u slučaju pogreške:
ako dođe do pogreške, zaštita se vraća na ponašanje utemeljeno na varijablama okruženja, a kada
nadjačavanje nije postavljeno, ponašanje je identično razrješavanju samo putem varijabli okruženja.

Izvori otkrivanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup detektora
   koji se upotrebljava drugdje u cjevovodu).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutačno `system_override_inline` i
   `markdown_system_block`, oba s razinom ozbiljnosti `high`).
3. Neobavezni `customPatterns` proslijeđeni putem opcija konstruktora (nizovi znakova, regularni izrazi
   ili zapisi `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** barem jedna detekcija zadovoljava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U načinima rada `warn`/`log` zaštitna mjera bilježi događaj, ali
dopušta poziv. Dijeljena pomoćna funkcija `evaluatePromptInjection()` također se izvozi
za pozivatelje koji trebaju procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor pregledava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje uzoraka. Direktive za umetanje obično se nalaze pri vrhu ulaza, pa se time
ograničava potrošnja procesorskih resursa za regularne izraze i GC kod sadržaja od više stotina KB bez slabljenja detekcije (usp.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Izvodi se u **objema** fazama, posljednje u zadanom lancu (prioritet `95`). Redigira
poznate uzorke API ključeva / tajnih tokena iz izlaznog sadržaja (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora pružatelja, tako da vjerodajnica
zalijepljena u upit (ili vraćena u rezultatu alata) ne procuri
uzvodnom pružatelju ni natrag klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao redigiranje osobnih podataka (uz Strogo pravilo #20):
  onemogućeno je osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključena, zaštitna mjera ne poduzima ništa —
  nikada ne blokira niti prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo sadržaja/odgovora (`walkValue()`,
  zaštićeno od onečišćenja prototipa, sigurno za cikluse putem `WeakSet`) i zamjenjuje podudaranja
  rezerviranim tekstom `[REDACTED:<type>]`, klonirajući samo grane koje su se zaista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvaća ključeve pružatelja LLM-a (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve za usluge
  u oblaku (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  nizove za povezivanje koji sadrže vjerodajnice (`mongodb://user:pass@...` itd.) i
  generički uzorak vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigiraju se strukturno (samo vrijednost, dok se prefiks sheme poput
  `Bearer `/`Basic ` zadržava), a ne putem generičkog tekstualnog regularnog izraza.
- Zaštitna mjera nikada ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje bilješke (`meta.credentialsRedacted`, `meta.count`).

Zaštita od regresije: `tests/unit/credential-masker-guardrail.test.ts`.

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
  message?: string; // prikazuje se pri blokiranju
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // vraća ga preCall radi izmjene zahtjeva
  modifiedResponse?: TValue; // vraća ga postCall radi izmjene odgovora
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

Zaštitni mehanizam signalizira „bez promjene” vraćanjem vrijednosti `void`, `{}` ili
`{ block: false }`. Vraćanje vrijednosti `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja prolazi kroz lanac za sljedeće zaštitne mehanizme.
`signal?: AbortSignal` prenosi životni ciklus pozivatelja u zaštitne mehanizme. Prekid zahtjeva namjerna je iznimka koja dopušta nastavak u slučaju pogreške: medijski mostovi prekidaju rad i obavljaju čišćenje bez vraćanja neobrađenog medija odredištu za koje je poznato da ga ne podržava.

## Registar (`registry.ts`)

Jedinstvena instanca `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje zaštitni mehanizam (ili ga zamjenjuje prema normaliziranom nazivu) i
  ponovno sortira uzlazno prema vrijednosti `priority`.
- `clear()` / `list()` — administrativne pomoćne funkcije.
- `runPreCallHooks(payload, context)` — prolazi kroz aktivne zaštitne mehanizme, prosljeđuje
  sadržaj kroz `modifiedPayload` i zaustavlja se na prvom `block: true`.
- `runPostCallHooks(response, context)` — isti tijek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i po potrebi
  ponovno registrira zadane vrijednosti radi čiste izolacije testova.

Oba izvršitelja vraćaju `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemu je `results` polje zapisa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` za svaki zaštitni mehanizam,
što je korisno za praćenje.

### Onemogućavanje zaštitnih mehanizama po zahtjevu

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` objedinjuje
popis bez duplikata s nazivima zaštitnih mehanizama koje treba preskočiti za trenutačni
zahtjev. Postoji pet kanala koji se čitaju ovim redoslijedom i spajaju u jedan popis
(prvo pojavljivanje ima prednost pri uklanjanju duplikata):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` u tijelu zahtjeva (na najvišoj razini)
3. `metadata.disabledGuardrails` u tijelu zahtjeva (samo kada je `metadata` objekt)
4. Zaglavlje `x-omniroute-disabled-guardrails`
5. Naslijeđeno zaglavlje `x-disabled-guardrails`

Svih pet kanala spaja se, uključujući oba zaglavlja: slanjem i
`x-omniroute-disabled-guardrails` i `x-disabled-guardrails` preskače se unija
njihovih popisa, a prazno moderno zaglavlje više ne skriva naslijeđeno
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ispravljeno u
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrijednosti mogu biti polja nizova znakova ili niz znakova s vrijednostima odvojenima zarezima; nazivi se obrezuju
i normaliziraju u kebab-case s malim slovima (`pii_masker` → `pii-masker`), a prazne
stavke se uklanjaju. Rezultat se prosljeđuje registru putem `context.disabledGuardrails`,
koji preskače podudarne zaštitne mehanizme (`skipped: true` u `results`).

Popis za onemogućavanje utječe samo na **registar**. Način rada `block` za ubacivanje u upit
obvezna je granica: posrednički softver za zaštitu od ubacivanja u upit
(`src/middleware/promptInjectionGuard.ts`) poziva `evaluatePromptInjection()`
bez ikakvog popisa za onemogućavanje kojim upravlja pozivatelj (neupotrebljavani
poziv `resolveDisabledGuardrails({ body })`, koji se prije izvršavao, uklonjen je u
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), pa se zahtjev
koji onemogućuje `prompt-injection` i dalje odbija u načinu rada `block`. To je
namjerno. Kanalima za onemogućavanje upravlja pozivatelj (tijelo zahtjeva,
metapodaci, zaglavlja), a pozivatelju se ne smije omogućiti isključivanje sigurnosne
kontrole koju je postavio operater
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija zaglavlja
iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mijenja samo koji se zaštitni mehanizmi registra preskaču; klijentu ne omogućuje
zaobilaženje posredničkog softvera. Obvezna pravila zaštitnih mehanizama za svaki ključ i svaku grupu
prate se u v4 RFC-u [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Pogledajte [Pokrivenost i ograničenja](#coverage-and-limits).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts` (rute iz obitelji chat navedene u odjeljku
[Pokrivenost i ograničenja](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` izrađuje popis za preskakanje na temelju API ključa, tijela zahtjeva
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne mehanizme uzlaznim
   redoslijedom prioriteta:
   - Onemogućeni zaštitni mehanizmi bilježe se kao `skipped`.
   - `preCall` svakog zaštitnog mehanizma može izmijeniti sadržaj putem `modifiedPayload`.
   - Prvi `block: true` prekida lanac, a rukovatelj vraća
     odgovor o odbijanju zbog zaštitnog mehanizma.
3. Potencijalno izmijenjeni sadržaj prosljeđuje se kombiniranom usmjeravanju i otpremi
   prema nadređenoj usluzi.
4. **Samo bez strujanja:** nakon sastavljanja odgovora,
   `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac nad
   odgovorom. `block: true` u ovom koraku odbacuje odgovor nadređene usluge i vraća HTTP 400. Odgovori koji se struje u potpunosti preskaču ovaj korak.

Zaštitni mehanizmi koji izazovu iznimku bilježe se s `error: <message>` i zapisuju putem
`logger.warn`, ali lanac se nastavlja — prema dizajnu se u slučaju pogreške dopušta nastavak.

## Pokrivenost i ograničenja

Registar zaštitnih mehanizama povezan je samo s obradnim tokom za chat. Ta su ograničenja
utvrđena testovima `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` i
`tests/unit/guardrail-pipeline-characterization.test.ts`; namjerno ažurirajte te testove
kada se ponašanje promijeni.

### Gdje se kuke izvršavaju

| Kuka / kontrola                                            | Izvršava se na                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                          | Zahtjevima koje obrađuje `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (i `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` i Telegram chat proxy. Također i testnoj krajnjoj točki nadzorne ploče `/api/guardrails/test`. Blokiranje prije poziva vraća HTTP 400. |
| `runPostCallHooks`                                         | Samo odgovorima chata **bez strujanja** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Odgovori koji se struje nikada ne dosežu ovu kuku.                                                                                                                                                                                                                                                                                            |
| Strujanje osobnih podataka                                 | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), povezan u `streamingPipeline.ts` kada je `PII_RESPONSE_SANITIZATION` uključen. To nije zaštitni mehanizam, pa kanali za onemogućavanje ne utječu na njega.                                                                                                                                                                                                                      |
| Posrednički softver za zaštitu od ubacivanja (naslijeđeni) | Svakoj `/v1` ruti koja sadrži upit, uključujući obitelj chat ruta (pogledajte [pokrivenost ruta](#injection-guard-route-coverage--red-team-phase-8--block-d)). Samo ubacivanje upita.                                                                                                                                                                                                                                                         |

### Što nije pokriveno

- **Rute za medije, ugradnje i podatke** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nikada ne dosežu registar. Ondje se ne
  izvršavaju maskiranje osobnih podataka, maskiranje vjerodajnica ni most između modaliteta. Njihova je jedina
  provjera naslijeđeni posrednički softver za zaštitu od ubacivanja.
- **Odgovori koji se struje** nemaju zaštitne mehanizme nakon poziva: nema zaštitnih mehanizama
  `pii-masker` ni `credential-masker` nakon poziva, kao ni blokiranja nakon poziva. Primjenjuje se samo transformacija osobnih podataka pri strujanju
  (kada je `PII_RESPONSE_SANITIZATION` uključen). Vjerodajnica
  vraćena u odgovoru koji se struje nije redigirana.
- **Kanali za onemogućavanje u odnosu na posrednički softver (prema dizajnu):** posrednički softver procjenjuje
  ubacivanje upita vlastitim pozivom funkcije `evaluatePromptInjection()`, bez
  prosljeđivanja popisa za onemogućavanje kojim upravlja pozivatelj. Način rada
  `block` obvezna je granica koju onemogućavanja pod kontrolom pozivatelja ne mogu zaobići, uključujući na rutama iz obitelji chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Onemogućavanje
  `prompt-injection` samo preskače zaštitni mehanizam registra.

### Što vidi odgovor prije obrade nakon poziva

Na putu bez strujanja redoslijed je: izdvajanje memorije → izvršavanje ugrađenih alata
→ zaštitni mehanizmi nakon poziva → izlaz zbog blokiranja nakon poziva → pohrana u semantičku predmemoriju.

- **Izdvajanje memorije** i **izvršavanje alata** vide odgovor prije nego što ga zaštitne mjere nakon poziva mogu prepisati ili blokirati. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), izdvajanje
  memorije prosljeđuje izdvojeni tekst kroz `sanitizePII` kada je
  `PII_RESPONSE_SANITIZATION` uključena (i za strujanje i bez strujanja), ali
  odgovor koji se naknadno blokira nakon poziva ipak je već ponuđen memoriji i
  alatima.
- **Semantička predmemorija** pohranjuje odgovor nakon obrade poslije poziva, pa
  pohranjuje prepisani odgovor, dok se blokirani odgovor nikada ne sprema u
  predmemoriju. Unosi u predmemoriji indeksiraju se zasebno prema API ključu.

## Konfiguracija

Varijable okruženja koje čitaju ugrađeni zaštitni mehanizmi:

| Varijabla                             | Koristi je              | Učinak                                                                                                                 |
| ------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite na `false` kako biste potpuno onemogućili otkrivanje.                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Pravilo za ubacivanje: `warn`, `block` ili `log`. Zastarjela vrijednost `redact` ne mijenja tekst pokušaja ubacivanja. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada zaštite od ubacivanja; ujedno i DB zastavica značajke koja **nadjačava** varijable okruženja (DB > ENV).    |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Najniža razina ozbiljnosti koju `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Zastarjeli pseudonim za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                             |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je postavljeno na `true`, osobni podaci u zahtjevu se redigiraju (neovisno o načinu rada zaštite od ubacivanja).  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nizvodno) | Upravlja ponašanjem maskiranja na strani odgovora.                                                                     |

Zaštitni mehanizmi Modality Bridgea čitaju konfiguraciju izvođenja iz spremišta
postavki u bazi podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za Vision su
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i
`modalityBridgeCacheMaxEntries`. Zastarjeli ključevi
`visionBridge*` prihvaćaju se samo kao dokumentirani rezervni način čitanja tijekom jednog ciklusa;
nadzorna ploča zapisuje primarne ključeve. Zadane vrijednosti i razrješivač rezervnih vrijednosti
nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, dok su zastarjele
konstante zadržane u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, zajedno s dijeljenim
postavkama `modalityBridgeCache*`. Audio nema rezervno korištenje zastarjelih ključeva jer su ti
ključevi uvedeni sa shemom Modality Bridgea.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout`, zajedno s dijeljenim postavkama `modalityBridgeCache*`.
Prema zadanim je postavkama onemogućen jer su FFmpeg/ffprobe neobavezne operativne
ovisnosti, a opisivanje sličica povećava latenciju i trošak modela.

## Prilagođene zaštitne ograde

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

Koraci:

1. Izradite `src/lib/guardrails/myGuardrail.ts` koji proširuje `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrirajte ga pri uvozu (dodavanjem putem `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tijekom izvođenja — registar zamjenjuje
   svaku prethodnu zaštitnu ogradu s istim normaliziranim nazivom.
4. Dodajte testove u `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Između testova upotrijebite `resetGuardrailsForTests()` kako biste započeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` kako biste započeli s praznim registrom i
registrirali samo zaštitne ograde koje se testiraju. Vision Bridge prihvaća umetanje ovisnosti
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže ekvivalentne točke za
postavke, mogućnosti, odabir STT modela, provjere vjerodajnica i transkripciju. Testovi stoga
mogu provjeravati oba toka bez pristupa bazi podataka ili mreži.

## Pogledajte također

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji omogućuje
  otkrivanje ubacivanja upita i maskiranje osobnih podataka
- `src/shared/constants/visionBridgeDefaults.ts` — zadane postavke za Vision Bridge i
  popis modela za prisilnu upotrebu mosta
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane postavke izvođenja za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač strujnog kruga, razdoblja čekanja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okruženja

## Pokrivenost ruta zaštitom od ubacivanja i red-team testiranje (Faza 8 · Blok D)

Zaštita od ubacivanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvaćaju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo zapisivanje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Vrsta             | Rute                                                                                                                                                 | Zadani način |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Tekst (postojeće) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn         |
| Generativne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn         |
| Podatkovne        | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn         |

Izdvajanje teksta (`extractMessageContents`) obuhvaća `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (svake noći, `nightly-llm-security.yml`):** promptfoo potvrđuje da svaka ruta blokira
OWASP-LLM korpus kada je `INJECTION_GUARD_MODE=block`; garak pokreće sonde (preskače se bez tajne).
`moderations` je uključen radi dosljednosti. Način blokiranja obvezna je granica: `evaluatePromptInjection()`
zanemaruje popis za onemogućavanje po zahtjevu koji mu posrednički softver prosljeđuje, pa `disabledGuardrails`
**ne** izuzima rutu od njega ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Noćni tijek rada (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokirajući)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  uz `INJECTION_GUARD_MODE=block`. Svaki protivnički slučaj (npr. "ignore all
  previous instructions…", proboji zaštite u DAN-stilu) provjerava sadrži li odgovor
  `error.code === "SECURITY_001"`, odnosno je li zaštita doista odbila zahtjev.
- **`garak` (savjetodavni)** — pokreće garak `--probes promptinject,dan,leakreplay`
  prema lokalnoj instanci OmniRoutea (`http://localhost:20128/v1`). Uvjetovan je
  tajnom pružatelja usluge (`PROMPTFOO_PROVIDER_KEY`); elegantno se preskače i ima sufiks
  `|| true`, pa izvještava bez uzrokovanja neuspjeha CI-ja.

Pokrivenost pomoćne funkcije zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvaća svaku `/v1` rutu koja prihvaća upite; tekst upita dohvaća se iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
