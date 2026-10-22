# Guardrails (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Izvor istine:** `src/lib/guardrails/`
> **Posljednje ažuriranje:** 2026-10-17 — v3.8.52 (dodano [Pokrivenost i ograničenja](#coverage-and-limits):
> koje rute i putanje odgovora obuhvataju hookovi, objedinjena zaglavlja za onemogućavanje (#16412), način
> blokiranja ubrizgavanja kao obavezna granica (#16413) i šta vidi odgovor prije post-call faze)

Zaštitni mehanizmi provode sigurnosna pravila, politike i transformacije sadržaja na granici
između OmniRoutea i upstream pružalaca usluga. Svaki zaštitni mehanizam može pregledati (i
po želji odbiti, transformirati ili označiti) podatke zahtjeva (`preCall`) i
upstream odgovore (`postCall`).

Sistem radi po principu **fail-open**: ako zaštitni mehanizam izazove izuzetak tokom izvršavanja, registar
bilježi grešku i nastavlja sa sljedećim zaštitnim mehanizmom umjesto da prekine
zahtjev. Blokiranje je izričita odluka (`block: true`), nikada slučajnost.
Jedini izuzetak je prekinuti zahtjev: kada se prekine pozivaočev `signal`,
zaštitni mehanizam koji izazove izuzetak odbija izvršavanje hooka umjesto da bude preskočen.

Hookovi se **ne** izvršavaju na svakoj ruti niti za svaki odgovor. Pročitajte
[Pokrivenost i ograničenja](#coverage-and-limits) prije nego što se oslonite na zaštitni mehanizam kao
sigurnosnu kontrolu.

## Ugrađeni zaštitni mehanizmi

Registar pri uvozu automatski učitava šest zaštitnih mehanizama prema redoslijedu prioriteta
(pogledajte `registry.ts` → `registerDefaultGuardrails()`):

| Prioritet | Naziv               | Faza/faze      | Datoteka              |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niži brojevi prioriteta izvršavaju se **prvi**.

### Vision Bridge (`visionBridge.ts`) — Most modaliteta PR-1

Osnovni model GLM 5.3 i `glm-5.3-{low,high,max}` imaju eksplicitne
`supportsVision:false` metapodatke registra/specifikacije. Varijante GLM 5.3 Flash
ostaju modeli s izvornom podrškom za vid. Ruta `/v1/messages` alata Claude Code ulazi u
zajednički lanac pre-call zaštitnih mehanizama `handleChat` **prije** prevođenja
iz Claude formata u OpenAI format; ugniježđene slike u rezultatima alata `Read` moraju biti opisane ili obrađene
prije nego što ih to prevođenje podigne u OpenAI sadržaj `image_url` (#17069).

Presreće zahtjeve koji sadrže slike i usmjereni su prema **modelima bez podrške za vid** te
ili preusmjerava cijeli zahtjev prema modelu koji podržava vid ili zamjenjuje dijelove sa slikama
tekstualnim opisima koje konfigurabilni model za vid proizvede prije
upstream poziva. Time se pružaocima koji podržavaju samo tekst omogućava transparentna obrada
multimodalnih podataka.

Tok:

1. Preskoči ako ciljni model već podržava vid (osim ako se nalazi na
   listi modela za koje je most obavezan `isVisionBridgeForcedModel`).
2. Izdvoji dijelove sa slikama pomoću `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), koji delegira **objedinjenom detektoru medija**
   `detectMediaParts()` u `open-sse/utils/mediaParts.ts` — jedinstvenom
   izvoru istine koji se dijeli s kombinovanim filterom kompatibilnosti.
   Izdvajanje je ograničeno listom dozvoljenih oblika koje `replaceImageParts` može umetnuti
   nazad (ugovor izdvajanje↔zamjena): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` i Responses
   API `input_image`. Odgovarajuće slike ugniježđene unutar Claude Code
   `tool_result.content` i izlaza alata Responses također se izdvajaju i
   zamjenjuju na svojim izvornim putanjama; oblici koji sadrže samo indikatore pripadaju
   kombinovanom filteru i ne izdvajaju se.
   Preskoči ako nijedan nije pronađen.
3. Razriješi konfiguraciju u vrijeme izvršavanja pomoću `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): novi ključevi postavki `modalityBridge*`
   imaju prednost; naslijeđeni ključevi `visionBridge*` ostaju **rezervna opcija tokom jednog
   ciklusa** (period za vraćanje prethodne verzije). Preskoči prije bilo kakvog prolaska kroz medije kada je
   most onemogućen.
4. Selektor načina rada (`modalityBridgeVisionMode`, pogledajte tabelu ispod) odlučuje između
   preusmjeravanja i opisivanja. Preusmjeravanje vraća `modifiedPayload` u kojem je zamijenjen samo `model`,
   zajedno s metapodacima `{ rerouted, fromModel, toModel, imagesKept }`.
5. Putanja opisivanja: ograniči broj slika na `maxImages`, sastavi prompt prilagođen zadatku,
   provjeri keš opisa, pozovi model za vid **paralelno**
   (`Promise.allSettled`) i umjesto njih umetni tekstualne dijelove `[Image N]: <description>`.
   Neuspjelo opisivanje daje `null`: izvorna slika zadržava se za
   nepoznate ciljeve/ciljeve koji podržavaju vid (#4012), ali **potvrđeni direktni
   cilj koji podržava samo tekst** ili kombinacija bez podrške za vid dobija eksplicitni tekstualni zamjenski sadržaj
   `(unavailable — no vision-capable provider connected)` za
   svaku neopisanu sliku, uključujući djelimične neuspjehe i slike iznad
   ograničenja broja poziva za opisivanje (#17069). Postojeća kombinovana rezervna opcija za opisivanje kada su
   svi pokušaji neuspješni ostaje na snazi (#8430).
6. Vrati `modifiedPayload` + metapodatke (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor načina rada (`modalityBridgeVisionMode`)

| Način rada | Zadano | Ponašanje                                                                                                                                                                                                                                                                                                                                      |
| ---------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Naslijeđena heuristika, neizmijenjena (#6640/#7204): modeli koji nisu kombinovani/`auto/` preusmjeravaju se na najbolji model za vid, osim ako izvorni model već ima upotrebljive vjerodajnice (tada opisuje); kombinovana odredišta uvijek opisuju.                                                                                           |
| `describe` |        | Uvijek opisuje — blok za preusmjeravanje u potpunosti se preskače; model koji je korisnik odabrao uvijek odgovara.                                                                                                                                                                                                                             |
| `reroute`  |        | Prisilno preusmjeravanje: zaštita koja zadržava model s vjerodajnicama se zaobilazi. Zaštita vjerodajnica za **odredište** preusmjeravanja i dalje se primjenjuje — kada ne postoji upotrebljivo odredište za vid, posrednik blokira zahtjev uz jasnu grešku umjesto da opisuje ili šalje neobrađene slike odredištu koje podržava samo tekst. |

Prisilni načini rada prekidaju obradu **prije** pokretanja automatske heuristike; ponašanje načina `auto`
potpuno je identično zaštitnom mehanizmu prije PR-1.

#### Opseg API ključa (`visionBridgeKeyScope.ts`)

Kada API ključ pozivaoca ograničava `allowedConnections`, skupove kvota
(`allowedQuotas`) ili modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), posrednik bira samo
modele za preusmjeravanje i opisivanje koje ključ smije koristiti, na vezama koje ključ smije
koristiti. Poziv za opisivanje zatim uvijek prolazi kroz OmniRoute samopetlju sa
zaglavljeм `x-omniroute-self-loop-key-id`, tako da primajući zahtjev za razgovor
ponovo primjenjuje pravila tog ključa za veze i modele. `enforceApiKeyPolicy()`
uvažava to zaglavlje samo zajedno s bearer tokenom samopetlje, pa ono može samo
sužavati pristup, a ID koji se ne može razriješiti se odbija.

Ako nijedan model za vid nije dozvoljen za ključ, **potvrđeno odredište koje
podržava samo tekst** lokalno odbija zahtjev sa slikom jasnim HTTP 400 odgovorom umjesto
prosljeđivanja bajtova slike nekompatibilnom uzvodnom sistemu (#17069). Za odredišta
s nepoznatom ili izvornom podrškom za vid, putanja za opisivanje zadržava svoje prethodno
ponašanje nastavka rada pri grešci (metapodaci `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahtjevi bez ključa i ključevi bez ovih ograničenja ponašaju se potpuno isto kao
ranije.

#### Prompt za opisivanje prilagođen zadatku (`modalityBridgeVisionTaskAware`)

Zadano je **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dodaje
tekst **posljednje korisničke poruke** (skraćen na 500 znakova) osnovnom
promptu za opisivanje, usmjeravajući opis prema onome što je korisnik zaista pitao
(obrazac codex-vision-proxy) i tražeći od modela za vid da transkribuje vidljivi
tekst. Kada je zastavica isključena — ili nema korisničkog teksta — osnovni prompt se koristi neizmijenjen.

OpenAI-kompatibilni zahtjev same samopetlje za opisivanje (`callVisionModelSingle()`
u `visionBridgeHelpers.ts`) uvijek zahtijeva `image_url.detail: "high"` —
bezuslovno, za svakog pozivaoca/pružaoca, bez uslovljavanja bilo kakvim signalom klijenta.
Uzorkovanje s malo detalja smanjuje tačnost OCR-a upravo za zadatak transkripcije
teksta koji ovaj prompt zahtijeva, pa sam poziv za opisivanje uvijek zahtijeva mnogo
detalja, bez obzira na nivo detalja korišten u izvornom dolaznom zahtjevu. Ovo
utiče samo na tijelo internog zahtjeva za opisivanje; ne mijenja način na koji
OmniRoute prosljeđuje pozivaočev vlastiti `image_url.detail` u primarnom zahtjevu —
ta zadana vrijednost primjenjuje se zasebno i samo za otkrivene OpenCode klijente, u
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Grana
žičanog formata Anthropic samopetlje za opisivanje nema polje `detail`
i nijedna zadana vrijednost ne utiče na nju.

#### Ograničenje izlaza opisivanja (`modalityBridgeVisionMaxChars`)

| Ključ                          | Zadano | Raspon            |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` ili 100–50000 |

`0` (zadano) znači **bez ograničenja** — opis koji vrati
`callVisionModel()` prosljeđuje se neizmijenjen, čime se zadržava postojeće
ponašanje. Svaka vrijednost u rasponu 100–50000 skraćuje opis uz
sufiks `…` prije nego što se umetne nazad kao `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` u `src/lib/guardrails/visionBridge.ts`).
Povećajte ovu vrijednost za OCR zadatke s mnogo detalja u kojima nizvodni model treba
potpunu transkripciju; smanjite je kako biste ograničili potrošnju tokena kod opširnih modela za vid.
Polje kontrolne ploče nalazi se na panelu Napredno kartice Vid
(`modality-bridge-max-chars` u `ModalityBridgeVisionTab.tsx`) i svaku
vrijednost između 1 i 99 podiže na donju granicu od 100, dok eksplicitnu vrijednost `0`
ostavlja neizmijenjenom — `0` je samostalno važeća Zod vrijednost
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a ne samo
zadana vrijednost „nije postavljeno“.

#### Keš opisa (`modalityBridge/bridgeCache.ts`)

LRU + TTL keš u memoriji za rezultate opisivanja, dijeljen na nivou cijelog procesa.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` s
uokvirivanjem prefiksom dužine (bez kolizija granica polja). Komponenta modela je
**konfigurisani** model posrednika, a ne model koji je stvarno odgovorio —
`callVisionModel` se može interno vratiti na rezervnu opciju, a određivanje ključa po pokušaju
fragmentiralo bi keš. Neuspjeli opisi nikada se ne keširaju. Postavke:

| Ključ                           | Zadano | Raspon  |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Normalizacija udaljenih slika (opisivanje putem samopetlje/base64 dohvaćanje)

Kada most sam dohvaća **udaljenu** sliku — Anthropic samopoziv za opisivanje i claude-wire-format base64 konverzija
(`ensureBase64ImagesForClaudeWire`), oba putem
`fetchRemoteImageAsDataUri()` u `visionBridgeHelpers.ts` — rezultirajući podatkovni
URI prolazi kroz `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) prije nego što se ugradi u zahtjev modela za
obradu slike. Prevelike slike smanjuju se na **dužu ivicu od 2048px** (u skladu
s ograničenjem veličine koje OpenAI/Anthropic već primjenjuju na strani servera), čime se
smanjuju broj bajtova za prijenos i latencija bez promjene onoga što model za obradu slike vidi. Promjena
veličine koristi `sharp`, učitan dinamičkim uvozom: na platformi na kojoj se njegov nativni
binarni program ne može učitati, `normalizeDataUri()` **nikada ne izbacuje izuzetak** — vraća se
na neizmijenjeno prosljeđivanje izvornih bajtova, tako da putanja opisivanja/base64 konverzije
uvijek nastavlja raditi. Bajtovi koji nisu slika (dohvaćanje koje nije vratilo
sliku koju je moguće dekodirati) također se prosljeđuju neizmijenjeni. Ova normalizacija
ograničena je na slike koje most dohvaća za vlastiti samopoziv — nikada se ne
primjenjuje na izvorni neizmijenjeni sadržaj pozivaoca, u skladu s principom
izmjene isključivo uz izričitu saglasnost (Strogo pravilo #20).

#### Shema postavki + migracija

Novi ključevi `modalityBridge*` validiraju se pomoću Zoda u `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trojka `modalityBridgeCache*` i grupa
`modalityBridgeAudio*` koju koristi Audio Bridge. Migracija
`141_modality_bridge_settings.sql` kopira postojeće zastarjele vrijednosti
`visionBridge*` u odgovarajuće nove ključeve (idempotentno, nikada ne prepisuje
vrijednost `modalityBridge*` koju je postavio operater); zastarjeli ključevi ostaju prihvaćeni kao
rezervna opcija za čitanje tokom jednog ciklusa izdanja.

#### Zaglavlje transparentnosti + statistika

Odgovori transformirani opisivanjem sadrže
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(kreira ga `buildModalityBridgeHeader()` u `modalityBridge/bridgeStats.ts`,
a dodaje `withModalityBridgeHeader()` u `src/sse/handlers/chatHelpers.ts`).
Preusmjereni zahtjevi **ne** dobijaju zaglavlje — sadržaj nije mijenjan, a zamjena
modela već je vidljiva u polju `model` tijela odgovora.

`GET /api/modality-bridge/stats` (upravljačka autentifikacija, isti nivo kao
`GET /api/settings`) vraća brojače po modalitetu iz memorije
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` i
`video`. `averageLatencyMs` kao nazivnik koristi `latencySamples`, a ne sve pokušaje;
operacija bez mjerenja vremena ne stvara izmišljeni uzorak od nula milisekundi.
`bridged` ostaje unazad kompatibilan pseudonim za uspješne
konverzije; neuspjeli pokušaji ga ne povećavaju.
Brojači se namjerno poništavaju pri ponovnom pokretanju procesa
(telemetrija, ne obračun).

#### Konfiguracija kontrolne ploče

Namjenska stranica kontrolne ploče nalazi se na
`/dashboard/settings/modality-bridge`. Njene kartice `Vision`, `Audio`
i `Video`, kojima se može pristupiti putem URL-a, zadržavaju parametre upita prilikom promjene vrijednosti `tab`.
Kartica Vision nudi omogućavanje, način rada, izbor modela (uključujući automatsku
zadanu vrijednost), upite prilagođene zadatku, napredna ograničenja vremena čekanja/broja slika/dužine opisa/keša,
brojače tokom izvođenja
i zaštićeni primjer zahtjeva. Kartica Audio također je aktivna: nudi
omogućavanje, birač modela isključivo za STT s opcijom Auto, ograničenja vremena čekanja/maksimalnog trajanja isječka, audio
brojače i primjer testa `input_audio`. Kartica Video je funkcionalna: prikazuje
stanje FFmpeg/ffprobe okruženja za izvođenje — jedno od četiri eksplicitna stanja korisničkog interfejsa (`unknown` dok
je provjera u toku ili se nije mogla dovršiti, `restricted` na hostu kontrolne ploče koji nije povratna petlja,
gdje se provjera preskače na strani klijenta, `unavailable` nakon izvršene provjere
i potvrde da nedostaje ili `available` s verzijama FFmpeg/ffprobe) — trajno pohranjuje
ograničenja omogućavanja/modela/kadrova/videa/vremena čekanja, filtrira birač modela na modele
koji podržavaju obradu slike i prikazuje video brojače.

Prethodna kartica Vision Bridge u postavkama umjetne inteligencije sada je veza za kompatibilnost prema
novoj stranici; više ne sadrži drugu kopiju obrasca. Media Providers također
povezuje radne tokove Image-to-Text i Speech-to-Text s odgovarajućim karticama Modality
Bridgea bez uklanjanja postojećeg Speech-to-Text okruženja za testiranje.

**Zaobilaženje kontrole prijema za samopetlju:** kada se poziv za opisivanje usmjerava kroz OmniRouteovu
vlastitu `/v1` samopetlju (model nestandardnog pružaoca), podzahtjev šalje
`x-omniroute-admission-bypass: internal` i autentificira se razriješenim
akreditivom samopetlje — lokalnim sentinelom `sk_omniroute` u lokalnom načinu rada ili
ključem okruženja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` koji je konfigurirao operater (#1350), kako bi
implementacije s `REQUIRE_API_KEY=true` i dalje mogle izvršavati poziv za opisivanje. Zaobilaženje
se prihvata samo za te tačne akreditive, tako da vanjski klijenti ne mogu koristiti
zaglavlje za preskakanje kontrole prijema.

Zastarjele zadane vrijednosti nalaze se u `src/shared/constants/visionBridgeDefaults.ts`;
nove zadane vrijednosti za način rada/prilagođenost zadatku/keš i razrješivač postavki nalaze se u
`src/shared/constants/modalityBridgeDefaults.ts`. Zaštitni mehanizam izlaže
opciju konstruktora `deps` kako bi testovi mogli umetnuti lažne implementacije `getSettings` i
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Presreće zahtjeve za razgovor koji sadrže zvuk prije nego što stignu do cilja za koji nije
poznato da prihvata audio ulaz. Nikada ne preusmjerava zahtjev za razgovor: audio dijelovi se
transkribuju putem postojećeg OpenAI-kompatibilnog multipart endpointa, a
odabrani model za razgovor nastavlja raditi s tekstualnim transkriptima.

Tok:

1. Razriješite `supportsAudio` putem `getResolvedModelCapabilities()`. Eksplicitni
   metapodaci registra pružalaca imaju prednost, zatim statički metapodaci modela,
   pa sinhronizirani `modalities_input`. Deklarirana lista ulaza bez `audio` daje
   `false`; ako nema dokaza o mogućnosti, rezultat je `null`. I `false` i `null`
   aktiviraju konzervativni most, dok ga `true` zaobilazi.
2. Razriješite postavke `modalityBridgeAudio*` i izdvojite audio dijelove najvišeg
   nivoa pogodne za spajanje iz svake poruke putem zajedničkog detektora
   `detectMediaParts()`. Podržani formati prijenosa su OpenAI `input_audio`,
   `audio_url` i `source.media_type: "audio/*"`. Ugniježđeni audio otkriva se
   radi usmjeravanja, ali se ne uklanja putem spajanja. Obrada je ograničena
   vrijednošću `modalityBridgeAudioMaxClips`; kasniji dijelovi ostaju netaknuti.
3. Poštujte konfigurirani `provider/model` ili omogućite funkciji
   `selectAudioBridgeModel()` da prođe kroz `AUDIO_TRANSCRIPTION_PROVIDERS`
   stabilnim redoslijedom kataloga i odabere prvi model s upotrebljivim
   vjerodajnicama aktivnog pružaoca.
4. `callAudioTranscription()` pretvara base64/data-URI audio u višedijelni
   `file` ili preuzima udaljeni `audio_url` putem zaštite za isključivo javni
   izlazni promet, uz DNS pričvršćivanje i ograničenje od 25 MB. Zatim POST
   metodom šalje datoteku i odabrani model lokalnoj samopovratnoj krajnjoj tački
   `/v1/audio/transcriptions`, autentificiranoj pomoću
   `resolveSelfLoopBearer()`. Postojeća ruta za transkripciju obavlja uobičajeno
   pronalaženje vjerodajnica, rukovanje periodima mirovanja/ograničenjima brzine
   i prosljeđivanje pružaocu.
5. Uspješni pozivi zamjenjuju svoje dijelove s `[Audio N]: <transcript>`.
   Pozivi se izvršavaju pomoću `Promise.allSettled`: pojedinačni neuspjeh čuva
   taj izvorni audio dio (ugovor #4012). Ako svaki poziv ne uspije, a za odredište
   je dokazano `supportsAudio === false`, dijelovi postaju
   `[Audio N]: (unavailable — no STT provider connected)` (ugovor #8430). Za
   nepoznato odredište (`null`), rezultat u kojem svi pozivi ne uspiju ostaje
   netaknut. Odredište za koje je dokazano da podržava samo tekst i koje nema
   upotrebljive STT vjerodajnice dobija istu eksplicitnu zamjensku poruku bez
   upućivanja mrežnog poziva.

Uspješne transkripcije koriste LRU/TTL keš Mosta modaliteta na nivou procesa.
Ključ objedinjuje referencu na audio, stabilnu oznaku operacije
`audio-transcription` i odabrani STT model; neuspjesi se nikada ne keširaju.
Pokušaji obrade audiosadržaja ažuriraju zajedničke brojače `bridged`,
`cacheHits`, `failures` i `lastUsedAt`. Transformirani odgovori sadrže
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; netaknuti
zahtjevi ne dobijaju segment Audio Bridge.

Postavke tokom izvršavanja pohranjene su u bazi podataka i validirane pomoću
biblioteke Zod:

| Ključ                         | Zadano  | Raspon                |
| ----------------------------- | ------- | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                     |
| `modalityBridgeAudioModel`    | `""`    | Automatski ili STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10                  |

Zajednički keš i dalje se kontrolira postavkama `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video most (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreće videodijelove najvišeg nivoa u `messages` API-ja Chat Completions i
`input` API-ja Responses prije pozivanja odredišta bez poznate izvorne podrške
za video. Podržani formati su `input_video`, `video_url`, `video_source`, HTTPS
URL-ovi i podatkovni URI-jevi `data:video/*;base64,...`. Obični nazivi datoteka
u tekstu ne tretiraju se kao video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) upravlja prolaskom kroz
zahtjev, provjerom mogućnosti/pravila, agregacijom po zahtjevu i sadržajem
odgovora. Obrada svakog videa — preuzimanje, keširanje cjelokupnog rezultata,
opisivanje slijeda kadrova (koje objedinjuje audio transkripciju koju je
deklarirao pozivalac) te metrike/prekid/čišćenje za svaki pokušaj — skrivena je
iza funkcije `processVideoPart` u `videoBridgePipeline.ts`, koja se poziva
jednom za svaki videodio unutar petlje funkcije `preCall`. Taj modul također
definira eksplicitne granice priključaka `VideoMediaBrokerPort` (preuzimanje
bajtova i izdvajanje uzorkovanih kadrova), `VideoAudioTranscriptionPort`
(objedinjavanje audio transkripcije koju je deklarirao pozivalac s opisima
uzorkovanih kadrova) i `VideoDrilldownPort` (granica trajne pohrane za detaljnu
analizu kadrova; još nije povezana s funkcijom `processVideoPart` — danas samo
zasebna ruta `/api/modality-bridge/video/drilldown` zapisuje unose detaljne
analize).

Javna putanja zahtjeva `/v1` nikada ne uvozi niti pokreće potproces. Udaljeni
videozapisi preuzimaju se uz ograničenje od 50 MiB; ugrađeni base64 videozapisi
imaju konzervativno ograničenje od 36 MiB dekodiranih podataka po videu kako bi
omotač modela/poruka/uokviravanja mogao ostati unutar javnog ograničenja za
prihvat JSON zahtjeva od 50 MiB. Dužina ugrađenog sadržaja i procjene dekodirane
veličine provjeravaju se prije alokacije. HTTPS je obavezan za početni udaljeni
URL i svako preusmjeravanje, uz korištenje postojeće zaštite za isključivo javni
izlazni promet s DNS pričvršćivanjem. Bajtovi zatim prelaze tačno definiranu
internu granicu posrednika `POST /api/modality-bridge/video/extract`. Ta ruta je
istovremeno `LOCAL_ONLY` i `SPAWN_CAPABLE`, prihvata samo autentificiran,
pouzdan zahtjev povratne petlje po procesu i nikada ne prihvata URL, putanju
datotečnog sistema, izvršnu datoteku niti listu argumenata. Cjevovod API-ja za
veličinu tijela i inkrementalni čitač tijela u rukovaocu nezavisno nameću
ograničenje ulaza posrednika od 50 MiB. Njegov ograničeni red čekanja izvršava
jedno izdvajanje istovremeno, dopušta četiri posla na čekanju i ograničava ulaz
na čekanju na 100 MiB.

Unutar brokera, `ffprobe` čita privatnu lokalnu datoteku; fiksna lista dozvoljenih formata isključuje formate plejlista i manifesta. Za dozvoljene kontejnere iz MOV porodice, vanjske MOV reference na podatke ostaju onemogućene prema zadanim postavkama, a fiksna naredba ih ne uključuje. I `ffprobe` i `ffmpeg` koriste listu dozvoljenih protokola ograničenu samo na `file`, jednu nit, fiksne nizove argumenata, bez ljuske, te izvršne datoteke pronađene putem `PATH`. Tokovi naslovnih slika u prilogu nisu kandidati za reprodukciju. Svi tokovi koji se mogu reproducirati moraju zadovoljiti ograničenja, a eksplicitni zadani tok ima prednost prije determinističke rezervne opcije s najnižim indeksom. Videozapisi su ograničeni na 600 sekundi, 8.192 piksela po dimenziji i 33.554.432 izvorna piksela. FFmpeg uzorkuje 1–16 JPEG kadrova iz sredine intervala, smanjuje dužu ivicu na najviše 1.024 piksela bez povećavanja manjih ulaza i nikada ne prima URL. Uzorkovanje je prema zadanim postavkama `uniform`. Opcionalne politike `scene_aware` i eksperimentalna `segment_aware` izvršavaju jedan dodatni fiksni prolaz FFmpega nad već validiranim lokalnim tokom, biraju ograničene vremenske oznake scena iz `showinfo` i deterministički se vraćaju na iste ravnomjerne sredine intervala u slučaju neuspjeha detektora, isteka vremena, neispravnog izlaza ili praznog skupa kandidata. Način rada svjestan segmenata proporcionalno raspoređuje uzorke iz sredine intervala prema validiranim intervalima scena; dokazi za način rada svjestan segmenata i ponašanje rezervne opcije detaljno su opisani u nastavku. Strogo ograničenje od 16 kadrova primjenjuje se nakon odabira u svakoj politici. Kada zahtjev svjestan scena ima budžet od samo jednog kadra, koristi ravnomjernu sredinu aktivnog prozora cijelog videozapisa ili fokusnog prozora i prijavljuje `policyEffective: uniform`: jedan odabrani kadar scene ne može sačuvati oba vremenska kraja. Pozivatelj opcionalno može navesti konačan fokusni prozor (`start`/`end` u sekundama); granice se ograničavaju na trajanje medija, obrnuti ili nekonačni prozori se odbijaju, a sve politike uzorkovanja izvršavaju se samo unutar normaliziranog intervala. Rezultirajući prozor uključuje se u metapodatke uzorkovanja i u prefiks nepouzdanog opisa kako bi nizvodni modeli mogli razlikovati fokusirani isječak od pune vremenske linije.

Semantički fokus opisa zasebna je, eksplicitna postavka. Zadani način analize `full` zadržava postojeći upit za kadrove i nikada ne prosljeđuje tekst zahtjeva modelu za opisivanje. U načinu `focused`, most čita samo najnoviji korisnički uneseni `text`/`input_text` koji nije prazan iz istog Chat ili Responses kontejnera, normalizira ga u NFC, sažima kontrolne znakove i razmake te ga ograničava na 500 Unicode kodnih tačaka. Prazan rezultat vraća se na tačan upit načina `full`. Upotrebljiv nagovještaj serijalizira se kao JSON u namjenskom bloku nepouzdanog korisničkog konteksta i smije samo odrediti prioritet uočljivih detalja; ne može nadjačati zasebno upozorenje da se ne slijede upute vidljive ili čujne u mediju. Tekstualni fokus nikada ne izvodi `start`/`end` niti mijenja vremenski uzorkivač.

#### FU-07 strukturni dokazi o segmentima

`segment_aware` koristi jedan ograničeni prolaz predanalize nad već validiranim lokalnim videotokom. Fiksni lanac filtera prvo smanjuje širinu na najviše 320 piksela, otkriva promjene scena i zamrznute intervale, a zatim uzorkuje 1 kadar u sekundi radi mjerenja zamućenja, prosječne luminanse te prostornih/vremenskih informacija. Prolaz je ograničen na 600 strukturnih uzoraka, jednu FFmpeg/filtersku nit, iste liste dozvoljenih protokola ograničene samo na `file` i dozvoljenih kontejnera, ograničenje izlaza procesa od 1 MiB i najviše 30 sekundi unutar zajedničkog mehanizma brokera za prekid/rok. Nikada ne prihvata naredbu, filter, putanju ili URL iz zahtjeva.

Strukturne vrijednosti predstavljaju determinističke dokaze uzorkovanja, a ne semantičko razumijevanje videozapisa. One ne izvode zaključke o subjektima, radnjama, opisima, govoru ili namjeri korisnika. Granice scena i zamrzavanja formiraju segmente; pokrivenost zamrzavanjem, zamućenje, ekspozicija, prostorni detalji i vremenska promjena utječu samo na način raspodjele postojećeg budžeta od 1–16 kadrova. Potpuno zamrznut segment ograničen je na jedan kadar, dok se nezamrznuti segmenti nadmeću za preostali budžet. Kada broj granica premašuje broj kadrova, zadržava se ravnomjerna pokrivenost vremenske linije kako brzi rani rezovi ne bi mogli sakriti dugi završni segment. Granice scena koje su unutar rezolucije analize od 1 sekunde u odnosu na granicu zamrzavanja spajaju se.

Nedostajući filteri, neispravni/prazni dokazi, greška detektora ili istek vremena ograničene predanalize dopuštaju povratak na tačnu politiku ravnomjernih sredina intervala. Prekid koji zatraži pozivatelj ili istek roka brokera ne dopušta takav povratak: prekida podproces koji je u toku, sprečava naknadno izdvajanje kadrova, a privatno privremeno stablo uklanja se u `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira determinističke stvarne FFmpeg testne podatke za uštede poziva opisivanja nakon uklanjanja duplikata, raspodjelu budžeta za gusto kretanje, dokaze zamućenja/ekspozicije/SI-TI, brze rezove s dugim završnim dijelom i lažno pozitivne rezultate postepenog zatamnjenja. Bilježi vrijeme predanalize prema zidnom satu te, gdje je `/usr/bin/time` dostupan, CPU vrijeme podređenog procesa i vršnu vrijednost RSS-a. Njegove provjere kvaliteta predstavljaju samo strukturne orakule. Kvalitet stvarnog modela za opisivanje ostaje `HOLD` jer ovaj testni okvir nema autoriziranu krajnju tačku niti fiksiranog ocjenjivača. Novčane uštede također ostaju `HOLD` osim ako `--caption-cost-per-call-usd` ne navede eksplicitnu pozitivnu procjenu troška po pozivu; skripta nikada ne izmišlja nijedan od tih rezultata.

Svaki okvir ograničen je na 4 MiB, svi sirovi okviri zajedno na 23 MiB, a serijalizirani odgovor brokera na 32 MiB. Privatni privremeni direktorij uklanja se u bloku `finally`. OmniRoute ne uključuje FFmpeg i ne prihvata prilagođenu putanju izvršne datoteke. Prije dodavanja opisa, most primjenjuje konzervativni postupak vizuelne deduplikacije: svaki JPEG svodi se na bafer sivih tonova veličine 16×16 i poredi samo s posljednjim zadržanim okvirom. Za traženi budžet opisa veći od jednog okvira, izdvajanje osigurava ograničeni skup kandidata do dvostruke vrijednosti tog budžeta, ali nikada više od 16 okvira. Traženo ograničenje primjenjuje se tek nakon deduplikacije, pri čemu se tokom završnog prorjeđivanja zadržavaju prvi i posljednji odabrani kandidat kada budžet iznosi najmanje dva. Verzijska politika `grayscale-16x16-mean-cells-v2` koristi veću vrijednost između prosječne razlike luminanse i udjela ćelija minijature čija je normalizirana razlika najmanje 0,05. Prag duplikata je konstanta 0,04, odabrana radi predvidljivosti umjesto da bude izložena kao postavka za vrijeme izvršavanja. Ovaj sekundarni signal visokog kontrasta zadržava male pokrete i promjene vidljivog teksta koje poređenje zasnovano samo na srednjoj vrijednosti može sakriti. Greške komparatora ili dekodera ne zaustavljaju obradu i zadržavaju pokrivenost. Izlazni metapodaci odvojeno navode izdvojene kandidate, uspješno korištene okvire i odbačene vizuelne duplikate.

Eksplicitno označeni videodio može zatražiti kontaktni list s vremenskim oznakama. Most izrađuje JPEG mrežu s najviše 4 kolone i 16 okvira. Svaka ćelija od 512 piksela umeće vremensku oznaku svog izvora u donju traku visokog kontrasta, dok iste vremenske oznake ostaju u tekstualnim metapodacima radi naknadnog povezivanja i revizije. Cjeloviti JPEG i dalje je ograničen na 32 MiB. Ako `sharp` ne može dekodirati ili sastaviti mrežu, most se vraća na pojedinačne JPEG okvire; prekid koji pokrene klijent i dalje se prenosi kroz operaciju izrade lista.

Dokazi za promociju namjerno su odvojeni od sintetičkog mikrotesta performansi sastavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` definira A/B testni okvir s verzioniranom shemom za stvarne modele vida kompatibilne s OpenAI-jem. On mjeri broj tokena koji prijavi pružalac usluge, ukupnu latenciju od početka do kraja (uključujući sastavljanje lista), broj poziva modela i zadržavanje činjenica definiranih manifestom. Neobrađeni odgovori modela ne zapisuju se u izvještaj; zadržavaju se samo SHA-256 sažeci i ID-ovi podudarnih činjenica. Testni okvir ne upućuje mrežni poziv niti poziv plaćenom modelu osim ako se ne proslijedi `--execute-real` i ako su konfigurirani `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez tog eksplicitnog stvarnog pokretanja, njegov mašinski čitljiv zaključak ostaje `HOLD`; sintetička mjerenja korisnog sadržaja i broja poziva sama po sebi nisu dokaz za promociju.

Pozivaoci mogu priložiti opcionalni niz `transcript.cues` podržanom videodijelu kada već posjeduju usklađeni tekst. Svaka stavka mora sadržavati `text`, konačan interval `start`/`end` unutar provjerenog trajanja i `source` s liste dozvoljenih vrijednosti (`client`, `embedded` ili `audio-bridge`); `confidence` ima zadanu vrijednost `1` i mora ostati između `0` i `1`. Potpuno identične stavke se objedinjuju. OmniRoute nikada ne pokreće transkripciju na osnovu ovih metapodataka: provjerene stavke kopiraju se u opisani rezultat zajedno s izvorom, pouzdanošću i intervalom te se prikazuju kao nepouzdana zapažanja uz opise okvira. Nevažeći tekst, tekst izvan raspona ili tekst bez porijekla odbacuje se umjesto da se miješa u tok opisa. Oba transkriptna kanala tijela zahtjeva normaliziraju dostavljeno porijeklo na `client`, uključujući samostalno navedene oznake `embedded` ili `audio-bridge`. Samo adapter pod kontrolom servera može dodijeliti te pouzdane oznake putem argumenta `trustedSource`, dostupnog isključivo kroz kod; JSON polje zahtjeva ne može dosegnuti taj argument. Tekst transkripta ostaje nepouzdan sadržaj izveden iz medija bez obzira na njegovo porijeklo i nikada ne smije određivati autorizaciju.

Napredni pozivalac može dostaviti zapis `audioTranscript` za isti video; on se tretira kao tekst koji je dostavio klijent, a ne kao dokaz serverske transkripcije. Spojni sloj obrađuje vizuelna i zvučna zapažanja unutar jednog roka i signala za prekid, raspoređuje ih na zajedničkoj vremenskoj liniji, objedinjuje potpuno identične stavke i prijavljuje djelimičan rezultat kada uspije samo jedna strana. Nevažeći `audioTranscript` svodi se na takav djelimičan rezultat — vizuelni opis se zadržava, a zvučna grana bilježi sanitizirani kôd greške — umjesto da cijeli video završi neuspjehom. Dostupnost svake grane, oznaka djelimičnog rezultata i sanitizirani kodovi grešaka čuvaju se u opisanom rezultatu, u metapodacima zaštitnih mehanizama (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), u metapodacima predmemorije rezultata i u brojačima spajanja mosta. Zadana putanja Video Bridgea ne pokreće pretvaranje govora u tekst niti preuzima drugu kopiju medija; bez tog eksplicitnog zapisa ostaje ograničena samo na video.

**Zadržavanje transkripta (#12150 P1).** Ovo se primjenjuje automatski kad god
Video Bridge (koji se sam zasebno uključuje) renderuje oznaku transkripta — ne postoji zasebna
zastavica za zadržavanje. Kada zahtjev renderuje bilo koju oznaku transkripta (pozivateljem deklarisani
`transcript` ili objedinjeni `audioTranscript`), zaštitni mehanizam označava ga kao
`videoBridgeObserved` i proizvodi redigovanu kopiju opisa videosnimka —
identičan prikaz u kojem je tijelo slobodnog teksta svake oznake zamijenjeno sa
`[redacted-video-transcript]`, izrađen zamjenom strukturiranog polja oznake
prije sastavljanja niza znakova (nikad raščlanjivanjem poravnatog teksta, tako da nijedan sadržaj
oznake — zlonamjeran ili običan, uključujući tijela koja sadrže `]`, poput
`[inaudible]`/`[music]` — ne može ostati). Tijelo zahtjeva u trajno pohranjenom dnevniku poziva zamjenjuje
svaki tekstualni dio izveden iz videosnimka tom redigovanom kopijom, uparenom prema jednakosti
sadržaja; sidro `fullText` ponovo se čita iz završenog sadržaja zaštitnog mehanizma
prije poziva, tako da je podudaranje i dalje uspješno nakon što kasniji ulančani zaštitni mehanizmi (maskeri
ličnih podataka i vjerodajnica, prioriteti 10/95) izmijene tekst opisa na licu mjesta i
nakon što umetanje sistemskog odzivnika/predaje/memorije preoblikuje niz poruka. Tijelo
poslano uzvodno modelu ostaje nepromijenjeno. Uočeni zahtjev također ne popunjava
nikakvu trajnu Memory (preskače se izdvajanje izvedeno i iz zahtjeva i iz odgovora),
tako da vlastiti odgovor modela ne može preslikati tekst transkripta u Memory.

**Neobrađena videopolja (#12430).** Kada je most omogućen, a nativna podrška za video nepoznata ili nedostupna, definirana polja `transcript`/`audioTranscript` također aktiviraju `videoBridgeObserved`, čak i nakon neuspješnog opisa ili ograničenja `maxVideos`. `null` i prazni nizovi znakova se računaju; odsutna polja i metapodaci koji nisu videosadržaj ne računaju se. Zadržane kopije rediguju ova polja ili izostavljaju zahtjev, a predmemorije/Memory se zaobilaze.

Na tim rezervnim putanjama, važeće oznake koje je dostavio pozivatelj postaju podržani dijelovi
`text`/`input_text` umjesto nestandardnih polja pružatelja usluge. Obje staze
dostavljene u zahtjevu ostaju nepouzdana `client` opažanja, uz izričito upozorenje da videosnimak
nije opisan i da vremenske oznake nisu provjerene u odnosu na medij. Postojeća
ograničenja od 256 oznaka/ukupno 64 KiB i ograničenja po oznaci primjenjuju se na obje staze zajedno;
vremenske oznake moraju biti unutar ograničenja posrednika od 600 sekundi i bilo kojeg navedenog
vremenskog prozora fokusa. Nevažeće staze se odbacuju i ne prosljeđuju kao proizvoljan tekst; važeća
paralelna staza i dalje se može koristiti osim ako je njihovo objedinjeno ograničenje prekoračeno. Nulta/prazna
polja ne dodaju tekst. Ova rezervna opcija ne dodaje dohvaćanje medija niti transkripciju.
Polja proširenja transkripta uklanjaju se iz rezervnog videonosioca i njegovih
objekata `video_url`/`source`. OpenAI lista dozvoljenih elemenata za prijenos ostaje stroga; videonosioci
s nepoznatom nativnom podrškom ostaju dostupni, a poznata odredišta samo za tekst zadržavaju sigurne oznake.
Strukturirane redigovane kopije štite dodani tekst transkripta, dok
izvorni zahtjev u vlasništvu pozivatelja ostaje nepromijenjen. Odredišta s nativnom podrškom i
onemogućeni mostovi zadržavaju postojeće ponašanje zaobilaženja.

Dodatne zadržane kopije koriste isti signal uočenog zahtjeva. Neobrađeni
snimak klijentskog zahtjeva prije zaštitnog mehanizma, zahtjev na čekanju u memoriji i zapisnik
rano odbijenog zahtjeva strukturno zamjenjuju polja transkripta u videodijelovima;
tekstualni odzivnici koje sintetizuju faze obrade i predaja konteksta rediguju se
na odredištu trajno pohranjenog tijela zahtjeva. Trajno pohranjena oznaka `video_content_removed`
uzrokuje da nastavak putem `previous_response_id` bude zatvoren u slučaju greške umjesto da rekonstruiše
tekst koji je namjerno odbačen. Ako uočeni zahtjev izgubi svoju
redigovanu kopiju za pojedinačni dio prije zapisivanja ili ako se čak samo jedna od nekoliko videokopija
ne podudara nakon kasnijih izmjena zahtjeva, zadržano tijelo zahtjeva
potpuno se izostavlja umjesto zadržavanja djelimično redigovanog transkripta.

Za uočeni zahtjev, odgovor modela može citirati bilo koji dio
transkripta bez strukturirane granice oznake. Njegov trajno pohranjeni `responseBody`
u dnevniku poziva zato se zamjenjuje oznakom izostavljanja; detaljni
artefakt obrade (koji može uključivati uzvodna/klijentska tijela i dijelove toka)
ne zadržava se. Semantička predmemorija, predmemorija idempotentnosti i predmemorija ponavljanja zaključivanja zaobilaze
čitanja i pisanja za taj zahtjev. Zahtjev pružatelju usluge i odgovor
vidljiv klijentu ostaju nepromijenjeni. Rani bajtovi za održavanje veze uklanjaju se iz privremenog
međuspremnika kada se detaljni artefakt izostavi. Kirovo upozorenje o neispravnom EventStreamu
prijavljuje samo broj bajtova korisnog sadržaja, nikad njegov sadržaj niti neobrađenu grešku
JSON raščlanjivača.
Ovim se ne tvrdi da je provjerena svaka nepovezana dijagnostika pružatelja usluge/dodatka;
šira provjera odredišta sa zadržavanjem prati se u #11658.

Interni životni ciklus `/api/modality-bridge/video/drilldown` zaseban je,
povratnom petljom/tokenom autentificiran predmemorijski supstrat. Svaka operacija također zahtijeva
kanonski neprozirni ID principala. Prije nego što se produkcijskom pozivatelju omogući pristup, on mora
izvesti taj ID iz autentificiranog zakupca i nikad ne smije proslijediti
vrijednost koju je odabrao klijent. Ključevi predmemorije vežu tog principala za kanonske ID-jeve sesije i
reference videosnimka, pohranjuju samo njihove ključeve izvedene pomoću SHA-256 te ograničavaju i čitanja
i brisanje na istog principala. Predmemorija pohranjuje najviše 16 izvedenih JPEG
kadrova po unosu, uklanja ih nakon deset minuta i podržava ograničena
čitanja `start`/`end` ili izričito brisanje sesije.

Svaki principal ograničen je na 16 unosa i 64 MiB kanonskih JPEG podataka. Ta
ograničenja nezavisna su od globalne granice od 64 unosa/256 MiB: pritisak na kvotu
principala uklanja samo najmanje nedavno korištene unose tog principala prije razmatranja
globalnog LRU uklanjanja. Istekli unosi uklanjaju se i iz obračuna principala i iz
globalnog obračuna pri aktivnosti predmemorije, dok otkazivanje i neuspješna validacija ne
pohranjuju djelimičnu zamjenu.

Keš odbacuje nekanonski Base64, prekomjerno popunjavanje, medije koji nisu JPEG, neispravne ili
skraćene JPEG-ove i JPEG-ove koji proizvedu upozorenje tokom ograničenog `sharp`
dekodiranja cijele slike. Svaku prihvaćenu sliku ponovo kodira kao kanonski JPEG, izvodi širinu i visinu
iz dekodiranih bajtova umjesto da vjeruje poljima pozivaoca te odbacuje sve završne
poliglotske bajtove umjesto da ih zadržava. Samo se ograničeni kanonski komprimirani međuspremnik
uračunava u obje kvote. Ograničenje JSON prijenosa uključuje Base64 dodatak za gornju granicu
dekodiranog ulaza od 32 MiB. Svaka
pohranjena izvedenica bilježi svoj validirani JPEG format/rezoluciju, pravilo uzorkovanja,
verziju izvedenice, vrijeme kreiranja, sažetak sadržaja koji je izračunao server i sažetu referencu
na nadređeni element zajedno sa sažetkom sadržaja nadređenog elementa od pouzdanog pozivaoca. Otkazivanje se provjerava
između asinhronih faza dekodiranja/izračunavanja sažetka prije atomskog upisa u keš.

Ova tranša još ne povezuje produkcijskog proizvođača s rutom i ne
pruža odabir varijante s više rezolucija. Transparentna putanja zahtjeva za Video Bridge
stoga ne uvodi dodatni rad, dok izvođenje principala vezanog za zakupca i
potpuni FU-08 životni ciklus s više rezolucija ostaju eksplicitni naknadni zadaci
umjesto da budu dokumentirani kao dovršeno ponašanje.

Okviri se redom opisuju pomoću konfiguriranog Video modela. Prazno
Video nadjačavanje nasljeđuje Vision postavku; ako su obje prazne, Vision
automatski usmjerivač bira efektivni model koji podržava obradu slike. Uspješni opisi
zamjenjuju izvorni dio stabilnim prefiksom `[Video description:` koji također
označava tekst kao nepouzdano opažanje izvedeno iz medija i nalaže modelima
u nastavku da ne slijede upute pronađene u mediju. Ključevi keša opisa okvira
uključuju JPEG bajtove, upit, vremensku oznaku i efektivni model; keširaju se samo uspješni
opisi. Unosi keša zadržavaju stvarni model proizvođača koji je uspješno korišten,
uključujući rezervni model; most prijavljuje `mixed` kada su različite okvire
proizveli različiti modeli. Pogodak u kešu ponovo koristi taj identitet proizvođača
umjesto da ga preoznači kao traženi plan usmjeravanja. Keš rezultata
cijelog videosnimka određuje se prema svakom ulazu koji mijenja izlaz — upitu, efektivnom
modelu, pravilu uzorkovanja, broju okvira, režimu semantičke analize, SHA-256
otisku normaliziranog nagovještaja fokusa, prozoru fokusa, `transcript`,
`audioTranscript` i zastavici kontaktne ploče — pa promjena bilo koje od tih
dimenzija predstavlja promašaj keša, a nikada ponovnu upotrebu zastarjelih podataka. Verzija
pravila vizuelne deduplikacije, prag i ograničeni broj kandidatskih okvira također su eksplicitni u
ključu i metapodacima keša rezultata; promjena pravila stoga ne može ponovo koristiti zastarjeli
opis cijelog videosnimka. Metapodaci keša rezultata v4 čuvaju režim i
otisak, a nikada izvorni korisnički zadatak. Metapodaci zaštitnih ograničenja prijavljuju i
traženi i efektivni režim analize; traženi režim `focused` bez
upotrebljivog korisničkog teksta prijavljuje se kao efektivno `full`.

Zaštitno ograničenje izdvaja svaki podržani video dio, ali ne opisuje više od
`modalityBridgeVideoMaxVideos`. Za odredište za koje je dokazano da ima
`supportsVideo === false`, neuspjeli videosnimci i oni iznad ograničenja postaju eksplicitne sigurne
tekstualne oznake tako da nijedan neobrađeni video ne opstane. Kada je mogućnost nepoznata, ti dijelovi
zadržavaju svoj video nosač; svaki rezervni transkript slijedi gore navedenu ograničenu tekstualnu
konverziju. Odredišta s `supportsVideo === true` zaobilaze most.
Signal prekida klijentskog zahtjeva prenosi se kroz preuzimanje, red posrednika,
podprocese i pozive za izradu opisa; prekidi zaustavljaju obradu između videosnimaka i nikada ne dopuštaju
nastavak s neobrađenim medijem.

Postavke izvršnog okruženja pohranjuju se u bazi podataka i validiraju pomoću biblioteke Zod:

| Ključ                               | Zadana vrijednost | Raspon / ponašanje                                                                                       |
| ----------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`           | Opcionalno izvršno okruženje, zahtijeva izričito uključivanje                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` zadržava generičke opise; `focused` koristi ograničeni, nepouzdani kontekst posljednjeg korisnika |
| `modalityBridgeVideoModel`          | `""`              | Nasljeđuje model Vision Bridgea                                                                          |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                     |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` ili proporcionalni `segment_aware`; neuspjeh detektora vraća se na `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                      |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                           |

Naslijeđene pohranjene vrijednosti vremenskog ograničenja za Video iznad 120 sekundi svode se na
krajnji rok posrednika; novi upisi postavki iznad tog ograničenja se odbacuju.
`GET /api/modality-bridge/video/runtime` zahtijeva pouzdanu, označenu lokalnost povratne petlje
prije autentifikacije ili provjere izvršnog okruženja, a zatim zahtijeva upravljačku
autentifikaciju. Vraća samo `available`, pročišćene verzije FFmpeg/ffprobe i fiksni
razlog kada izvršno okruženje nije dostupno. Interna krajnja tačka za izdvajanje nije
javni API za prijenos: zasićenje reda vraća `503` uz `Retry-After`, prekid veze
pozivaoca vraća `499`, a fiksni krajnji rok posrednika vraća `504`. Konvertirani odgovori dodaju
`video->text;model=<visionModel>;parts=<videos>` u centralno
`x-omniroute-modality-bridge` zaglavlje bez uklanjanja Vision ili Audio segmenata.

### Masker ličnih identifikacijskih podataka (`piiMasker.ts`)

Pokreće se u **obje** faze.

- **`preCall`** klonira korisni sadržaj, prolazi kroz `system`, `messages`, `input` i
  `prompt` (uključujući obične stavke tipa string) te primjenjuje `processPII()` (iz
  `@/shared/utils/inputSanitizer`) na string polja `content`/`text`. Kada je
  `PII_REDACTION_ENABLED=true`, otkriveni lični podaci se rediguju u odlaznom
  korisnom sadržaju. Ovo je nezavisno od `INPUT_SANITIZER_MODE` (koji kontroliše
  samo pravila za ubacivanje upita). Kada je redigovanje isključeno, poziv
  bilježi broj otkrivanja bez izmjene sadržaja.
- **`postCall`** dubinski klonira odgovor, pokreće `sanitizePIIResponse()` zajedno
  s maskiranjem za strukturu Responses API-ja (`maskResponsesOutput` — obuhvata
  `output_text` i `output[].content[].text`). Ako dođe do bilo kakvog
  redigovanja, izmijenjeni odgovor zamjenjuje originalni.

Zaštitna mjera nikada ne blokira; ona samo dodaje napomene (`meta.detections`,
`meta.redacted`) ili prepisuje sadržaj.

#### Odabir po tipu, prilagođeni obrasci i brojači otkrivanja

**Kontrolna ploča → Postavke → Sigurnost → Maskiranje ličnih podataka** određuje _šta_ se maskira.
Time se maskiranje ne uključuje: za to su i dalje zaduženi `PII_REDACTION_ENABLED` (zahtjev) i
`PII_RESPONSE_SANITIZATION` (odgovor + SSE), a oba su podrazumijevano isključena.

- **Odabir po tipu** — ugrađeni ID-jevi navedeni su u
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Ako nije postavljeno,
  podrazumijevaju se svi tipovi (ponašanje prije uvođenja ove postavke). Obrazac
  `ssn_us` mehanizma za obradu zahtjeva mapira se na `ssn`. Predlošci (Minimalni,
  Standardni, Finansijski, Brazilski, SAD, Potpuni) samo popunjavaju polja za
  potvrdu u korisničkom interfejsu.
- **Prilagođeni obrasci** — do 20 regularnih izraza ili obrazaca sa zamjenskim
  znakovima (`*` = do 64 znaka koji nisu razmaci, `?` = jedan znak). Podudaranja
  postaju `[CUSTOM_REDACTED]`. Svaki obrazac prolazi kroz
  `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): najviše 500 znakova, oznake su
  ograničene na `g i m s u`, mora se moći kompajlirati, mora proći provjeru
  `safe-regex` (katastrofalno vraćanje unazad) i ne smije se podudarati s praznim
  stringom ili rezerviranim tekstom za redigovanje. Obrazac koji ne prođe
  odbija se prilikom čuvanja i testiranja, a sačuvani red koji ne prođe preskače
  se tokom izvršavanja umjesto da bude kompajliran. Prilagođeni obrasci
  izvršavaju se samo dok je maskiranje uključeno.
- **Brojači otkrivanja** — broj podudaranja po tipu (nikada podudarene
  vrijednosti), čuva se u memoriji i poništava pri ponovnom pokretanju
  (`src/lib/pii/piiDetectionStats.ts`). Povećavaju se samo dok je maskiranje
  uključeno.

Postavke se nalaze u tabeli `key_value` (imenski prostor `pii_settings`,
`src/lib/db/piiSettings.ts`) i čitaju se putem predmemorije od 1 s. API:

| Metoda | Putanja                  | Svrha                                                                      |
| ------ | ------------------------ | -------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stanje zastavice, `enabledTypes`, `customPatterns`, brojači otkrivanja     |
| `PUT`  | `/api/settings/pii`      | Zamjena `enabledTypes` (`null` = svi) i/ili `customPatterns`               |
| `POST` | `/api/settings/pii/test` | Probno pokretanje jednog obrasca na uzorku do 8 KB; ništa se ne pohranjuje |

Sve tri krajnje tačke zahtijevaju autentifikaciju za upravljanje i validiraju
tijelo pomoću Zoda (`src/shared/validation/schemas/piiSettings.ts`).

### Ubacivanje upita (`promptInjection.ts`)

Otkriva neprijateljske strukture u sadržaju koji je dostavio korisnik i
primjenjuje konfigurirana pravila. Ponašanje je određeno varijablama okruženja i
opcijama konstruktora:

| Postavka        | Varijabla okruženja                                                                                       | Zadano | Efekat                                                                                                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogućeno       | `INPUT_SANITIZER_ENABLED`                                                                                 | `true` | Kada je `false`, zaštitna mjera odmah prekida obradu.                                                                                                                                                                   |
| Način rada      | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn` | Pravilo za ubacivanje: `block`, `warn` ili `log`. (`redact` je prihvaćeno radi kompatibilnosti unazad, ali **ne** uklanja tekst ubacivanja; prepisivanjem ličnih podataka u zahtjevu upravlja `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Opcija `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (pseudonim `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Minimalni nivo ozbiljnosti potreban za blokiranje. Srednji nivo se pri zadanim postavkama samo prati.                                                                                                                   |

**Redoslijed prvenstva načina rada** (`getMode`): `options.mode` pozivaoca →
**nadjačavanje zastavice funkcionalnosti u bazi podataka** za `INJECTION_GUARD_MODE` (Kontrolna ploča → Postavke →
Zastavice funkcionalnosti) → varijabla okruženja `INJECTION_GUARD_MODE` →
varijabla okruženja `INPUT_SANITIZER_MODE` →
`warn`. Nadjačavanje putem kontrolne ploče stoga ima prednost nad varijablama
okruženja, pa korisnički interfejs Zastavice funkcionalnosti upravlja aktivnom
zaštitom uživo (bez ponovnog pokretanja). Čitanje iz baze podataka je otporno na
greške: ako dođe do greške, zaštitna mjera vraća se na ponašanje zasnovano na
varijablama okruženja, a kada nadjačavanje nije postavljeno, ponašanje je
identično određivanju samo na osnovu varijabli okruženja.

Izvori otkrivanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (zajednički skup
   detektora koji se koristi na drugim mjestima u procesnom toku).
2. Ugrađeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` i
   `markdown_system_block`, oba nivoa ozbiljnosti `high`).
3. Opcionalni `customPatterns` proslijeđeni putem opcija konstruktora (stringovi,
   regularni izrazi ili zapisi oblika `{ name, pattern, severity }`).

Kada je `mode === "block"` **i** najmanje jedna detekcija zadovoljava prag
ozbiljnosti, `preCall` vraća `{ block: true, message: "Request rejected:
suspicious content detected" }`. U režimima `warn`/`log` zaštitni mehanizam bilježi događaj, ali
dozvoljava poziv. Dijeljena pomoćna funkcija `evaluatePromptInjection()` također se izvozi
za pozivaoce koji trebaju procijeniti upite bez prolaska kroz registar.

**Ograničenje skeniranja (v3.8.20):** detektor provjerava samo **prvih 16 KB**
spojenog teksta upita — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajta) u
`src/shared/utils/inputSanitizer.ts`. I `detectInjection()` i
`evaluatePromptInjection()` primjenjuju `slice(0, MAX_INJECTION_SCAN_BYTES)` prije pokretanja
petlje obrazaca. Direktive za ubacivanje obično se nalaze pri vrhu unosa, pa se time
ograničava korištenje CPU-a/GC-a za regularne izraze na payloadima od više stotina KB bez slabljenja detekcije (up.
#3932, #4041).

### Maskiranje vjerodajnica (`credentialMasker.ts`)

Izvršava se u **obje** faze, kao posljednji element zadanog lanca (prioritet `95`). Redigira
poznate obrasce API ključeva / tajnih tokena iz odlaznog payloada (sadržaj poruke,
argumenti poziva alata, rezultati alata) **i** odgovora pružaoca usluge, tako da
vjerodajnica zalijepljena u upit (ili vraćena u rezultatu alata) ne procuri
prema pružaocu usluge niti nazad klijentu.

- **Samo uz izričito uključivanje**, prema istoj konvenciji kao redigiranje ličnih podataka (u vezi sa Strogim pravilom #20):
  onemogućeno je osim ako je `settings.credentialRedactionEnabled === true` **ili**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kada je isključeno, zaštitni mehanizam ne radi ništa —
  nikada ne blokira niti prepisuje.
- `redactCredentials()` prolazi kroz cijelo stablo payloada/odgovora (`walkValue()`,
  sigurno od zagađenja prototipa, sigurno od ciklusa putem `WeakSet`) i zamjenjuje podudaranja
  rezerviranim mjestom `[REDACTED:<type>]`, klonirajući samo grane koje su se zaista
  promijenile.
- `CREDENTIAL_PATTERNS` obuhvata ključeve pružalaca LLM usluga (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS/SaaS tokene (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), ključeve za plaćanje (Stripe, Square), ključeve
  usluga u oblaku (AWS pristupni ključ, Twilio, SendGrid, Mailgun), privatne ključeve / JWT-ove,
  konekcijske nizove koji sadrže vjerodajnice (`mongodb://user:pass@...` itd.) i
  generički obrazac vrijednosti zaglavlja `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Ključevi u obliku zaglavlja (`authorization`, `x-api-key`, `api-key`,
  `apikey`) redigiraju se strukturno (samo vrijednost, dok se prefiks šeme poput
  `Bearer `/`Basic ` zadržava), umjesto putem generičkog tekstualnog regularnog izraza.
- Zaštitni mehanizam nikada ne blokira; on samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) i dodaje anotacije (`meta.credentialsRedacted`, `meta.count`).

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
  block?: boolean; // vrijednost true odmah prekida lanac
  message?: string; // prikazuje se prilikom blokiranja
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

Zaštitni mehanizam signalizira „bez izmjena“ vraćanjem vrijednosti `void`, `{}` ili
`{ block: false }`. Vraćanje `modifiedPayload`/`modifiedResponse` zamjenjuje
vrijednost koja se prosljeđuje kroz lanac narednim zaštitnim mehanizmima.
`signal?: AbortSignal` prenosi životni ciklus pozivaoca u zaštitne mehanizme. Prekid zahtjeva predstavlja namjerni izuzetak s ponašanjem fail-open: mostovi za medijske sadržaje prekidaju rad i obavljaju čišćenje bez vraćanja neobrađenog medijskog sadržaja cilju za koji je poznato da ga ne podržava.

## Registar (`registry.ts`)

Singleton `guardrailRegistry` izlaže:

- `register(guardrail)` — dodaje zaštitni mehanizam (ili ga zamjenjuje prema normaliziranom nazivu) i
  ponovo sortira prema rastućoj vrijednosti `priority`.
- `clear()` / `list()` — pomoćne funkcije za administraciju.
- `runPreCallHooks(payload, context)` — prolazi kroz aktivne zaštitne mehanizme, prosljeđuje
  sadržaj zahtjeva kroz `modifiedPayload` i zaustavlja se na prvoj vrijednosti `block: true`.
- `runPostCallHooks(response, context)` — isti tok na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — briše stanje i opcionalno
  ponovo registruje zadane vrijednosti radi čiste izolacije testova.

Oba izvršivača vraćaju `{ blocked, payload|response, results, guardrail?, message? }`,
pri čemu je `results` niz zapisa tipa `GuardrailExecutionResult` koji uključuju
polja `blocked`, `skipped`, `modified`, `error` i `meta` za svaki zaštitni mehanizam,
što je korisno za praćenje.

### Onemogućavanje zaštitnih mehanizama za pojedinačni zahtjev

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` objedinjuje
dedupliciranu listu naziva zaštitnih mehanizama koje treba preskočiti za trenutni
zahtjev. Postoji pet kanala koji se čitaju ovim redoslijedom i spajaju u jednu listu
(prvo pojavljivanje ima prednost prilikom dedupliciranja):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` u tijelu zahtjeva (na najvišem nivou)
3. `metadata.disabledGuardrails` u tijelu zahtjeva (samo kada je `metadata` objekt)
4. Zaglavlje `x-omniroute-disabled-guardrails`
5. Zastarjelo zaglavlje `x-disabled-guardrails`

Svih pet kanala se spaja, uključujući oba zaglavlja: slanje i
`x-omniroute-disabled-guardrails` i `x-disabled-guardrails` preskače uniju
njihovih lista, a prazno moderno zaglavlje više ne skriva zastarjelo
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), ispravljeno u
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrijednosti mogu biti nizovi stringova ili string s vrijednostima odvojenim zarezima; iz naziva se uklanjaju okolne bjeline
i oni se normaliziraju u kebab-case s malim slovima (`pii_masker` → `pii-masker`), dok se prazni
unosi odbacuju. Rezultat se putem `context.disabledGuardrails`
prosljeđuje registru, koji preskače odgovarajuće zaštitne mehanizme (`skipped: true` u `results`).

Lista za onemogućavanje utiče samo na **registar**. Režim `block` za ubacivanje prompta
obavezna je granica: middleware za zaštitu od ubacivanja
(`src/middleware/promptInjectionGuard.ts`) poziva `evaluatePromptInjection()`
bez liste za onemogućavanje kojom upravlja pozivalac (neaktivni poziv
`resolveDisabledGuardrails({ body })` koji je ranije izvršavao uklonjen je u
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), pa se zahtjev
koji onemogućava `prompt-injection` i dalje odbija u režimu `block`. To je
namjerno. Kanalima za onemogućavanje upravlja pozivalac (tijelo zahtjeva,
metapodaci, zaglavlja), a pozivaocu se ne smije omogućiti da isključi sigurnosnu
kontrolu koju je postavio operater
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija zaglavlja
iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
mijenja samo koji se zaštitni mehanizmi registra preskaču; ona klijentu ne
omogućava zaobilaženje middlewarea. Obavezne politike zaštitnih mehanizama za pojedinačne ključeve i grupe
prate se u v4 RFC-u [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Pogledajte [Pokrivenost i ograničenja](#coverage-and-limits).

## Redoslijed izvršavanja

Za svaki zahtjev koji prolazi kroz `src/sse/handlers/chat.ts` i
`open-sse/handlers/chatCore.ts` (rute iz porodice chata navedene pod
[Pokrivenost i ograničenja](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` sastavlja listu za preskakanje na osnovu API ključa, tijela
   i zaglavlja.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` pokreće zaštitne mehanizme prema rastućem
   redoslijedu prioriteta:
   - Onemogućeni zaštitni mehanizmi evidentiraju se kao `skipped`.
   - `preCall` svakog zaštitnog mehanizma može izmijeniti korisni sadržaj putem `modifiedPayload`.
   - Prvi `block: true` prekida lanac, a rukovalac vraća
     odgovor o odbijanju od strane zaštitnog mehanizma.
3. (Potencijalno izmijenjeni) korisni sadržaj prosljeđuje se kombinovanom usmjeravanju i otpremanju
   prema nadređenom servisu.
4. **Samo bez streaminga:** nakon sastavljanja odgovora,
   `guardrailRegistry.runPostCallHooks(...)` pokreće isti lanac nad
   odgovorom. `block: true` ovdje odbacuje odgovor nadređenog servisa i vraća HTTP 400. Odgovori koji se prenose streamingom potpuno preskaču ovaj korak.

Zaštitni mehanizmi koji izazovu izuzetak evidentiraju se s `error: <message>` i bilježe putem
`logger.warn`, ali se lanac nastavlja — po dizajnu dopušta nastavak u slučaju greške.

## Pokrivenost i ograničenja

Registar zaštitnih mehanizama povezan je samo s tokom obrade chata. Ova ograničenja su
utvrđena testovima `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` i
`tests/unit/guardrail-pipeline-characterization.test.ts`; namjerno ažurirajte te testove
kada se ponašanje promijeni.

### Gdje se hookovi pokreću

| Hook / kontrola                                   | Pokreće se za                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                                 | Zahtjeve koje obrađuje `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (i `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` i Telegram proxy za chat. Također i krajnju tačku nadzorne ploče za testiranje `/api/guardrails/test`. Blokada prije poziva vraća HTTP 400. |
| `runPostCallHooks`                                | Samo odgovore chata **bez streaminga** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Odgovori koji se prenose streamingom nikada ne dolaze do njega.                                                                                                                                                                                                                                                                                   |
| Streaming PII                                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), koji se prosljeđuje kroz cjevovod u `streamingPipeline.ts` kada je `PII_RESPONSE_SANITIZATION` uključen. To nije zaštitni mehanizam, pa kanali za onemogućavanje ne utiču na njega.                                                                                                                                                                                                |
| Middleware za zaštitu od ubacivanja (naslijeđeni) | Svaku `/v1` rutu koja sadrži upit, uključujući porodicu chata (pogledajte [pokrivenost ruta](#injection-guard-route-coverage--red-team-phase-8--block-d)). Samo ubacivanje u upit.                                                                                                                                                                                                                                                               |

### Šta nije pokriveno

- **Rute za medije, ugrađivanja i podatke** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nikada ne dolaze do registra. Tamo se ne
  izvršavaju maskiranje ličnih podataka, maskiranje vjerodajnica niti most između modaliteta. Njihova jedina
  provjera je naslijeđeni middleware za zaštitu od ubacivanja.
- **Odgovori koji se prenose streamingom** nemaju zaštitne mehanizme nakon poziva: nema
  `pii-masker` ili `credential-masker` nakon poziva niti blokade nakon poziva. Primjenjuje se samo transformacija PII podataka u streamingu
  (kada je `PII_RESPONSE_SANITIZATION` uključen). Vjerodajnica
  vraćena u odgovoru koji se prenosi streamingom neće biti redigovana.
- **Kanali za onemogućavanje naspram middlewarea (po dizajnu):** middleware procjenjuje
  ubacivanje u upit vlastitim pozivom funkcije `evaluatePromptInjection()`, bez
  prosljeđivanja liste za onemogućavanje kojom upravlja pozivatelj. Režim `block` predstavlja obaveznu
  granicu koju onemogućavanja pod kontrolom pozivatelja ne mogu zaobići, uključujući rute iz porodice chata
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Onemogućavanje
  `prompt-injection` preskače samo zaštitni mehanizam registra.

### Šta vidi odgovor prije obrade nakon poziva

Na putanji bez streaminga redoslijed je: izdvajanje memorije → izvršavanje ugrađenih alata
→ zaštitni mehanizmi nakon poziva → izlaz zbog blokade nakon poziva → pohranjivanje u semantički keš.

- **Ekstrakcija memorije** i **izvršavanje alata** vide odgovor prije nego što ga zaštitne mjere nakon poziva mogu prepisati ili blokirati. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), ekstrakcija
  memorije prosljeđuje izdvojeni tekst kroz `sanitizePII` kada je
  `PII_RESPONSE_SANITIZATION` uključen (i za streaming i za non-streaming), ali je
  odgovor koji se naknadno blokira nakon poziva ipak već ponuđen memoriji i
  alatima.
- **Semantički keš** pohranjuje odgovor nakon provjera poslije poziva, tako da
  pohranjuje prepisani odgovor, dok se blokirani odgovor nikada ne kešira. Unosi
  u kešu imaju zasebne ključeve za svaki API ključ.

## Konfiguracija

Varijable okruženja koje čitaju ugrađene zaštitne mjere:

| Varijabla                             | Koristi je              | Efekat                                                                                                                                |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`      | Postavite na `false` da biste potpuno onemogućili detekciju.                                                                          |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`      | Pravilo za injekcije: `warn`, `block` ili `log`. Naslijeđena vrijednost `redact` ne mijenja tekst injekcije.                          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`      | Način rada zaštite od injekcija; također je oznaka funkcionalnosti u bazi podataka koja **nadjačava** varijable okruženja (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`      | Minimalna ozbiljnost koju `MODE=block` odbija: `high` (zadano), `medium` ili `low`.                                                   |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`      | Naslijeđeni pseudonim za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`            | Kada je postavljeno na `true`, PII u zahtjevu se redigira (nezavisno od načina rada za injekcije).                                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (naknadno) | Kontrolira ponašanje maskiranja na strani odgovora.                                                                                   |

Zaštitne mjere Modality Bridgea čitaju konfiguraciju tokom izvođenja iz spremišta postavki zasnovanog na bazi podataka (`getSettings()`), a ne iz varijabli okruženja. Primarni ključevi za Vision su `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`. Naslijeđeni ključevi `visionBridge*` prihvataju se samo kao dokumentirani rezervni način čitanja tokom jednog ciklusa; zapisi s kontrolne ploče koriste primarne ključeve. Zadane vrijednosti i razrješivač rezervnih vrijednosti nalaze se u `src/shared/constants/modalityBridgeDefaults.ts`, dok su naslijeđene konstante zadržane u `src/shared/constants/visionBridgeDefaults.ts`.

Audio koristi `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips`, zajedno sa zajedničkim postavkama `modalityBridgeCache*`. Audio nema rezervnu podršku za naslijeđene ključeve jer su ovi ključevi uvedeni sa shemom Modality Bridge.

Video koristi `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` i `modalityBridgeVideoTimeout`, zajedno sa zajedničkim postavkama `modalityBridgeCache*`. Zadano je onemogućen jer su FFmpeg/ffprobe opcionalne operativne zavisnosti, a opisivanje kadrova povećava latenciju i troškove modela.

## Prilagođeni zaštitni mehanizmi

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

1. Kreirajte `src/lib/guardrails/myGuardrail.ts` koji proširuje `BaseGuardrail`.
2. Implementirajte `preCall` i/ili `postCall`.
3. Registrujte ga prilikom uvoza (dodavanjem iz `registerDefaultGuardrails`) ili
   pozovite `guardrailRegistry.register(...)` tokom izvršavanja — registar zamjenjuje
   svaki prethodni zaštitni mehanizam s istim normalizovanim nazivom.
4. Dodajte testove u `tests/unit/` (postojeći primjeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Koristite `resetGuardrailsForTests()` između testova kako biste počeli iz poznatog stanja.
Proslijedite `{ registerDefaults: false }` kako biste počeli s praznim registrom i
registrujte samo zaštitne mehanizme koji se testiraju. Vision Bridge prihvata ubacivanje
zavisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge izlaže
ekvivalentne tačke za postavke, mogućnosti, izbor STT modela, provjere vjerodajnica
i transkripciju. Testovi stoga mogu provjeriti oba toka bez pristupa bazi podataka
ili mreži.

## Također pogledajte

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — zajednički detektor koji pokreće
  otkrivanje ubacivanja upita i maskiranje ličnih identifikacionih podataka
- `src/shared/constants/visionBridgeDefaults.ts` — zadane vrijednosti za Vision Bridge i
  lista modela s obaveznim premošćavanjem
- `src/shared/constants/modalityBridgeDefaults.ts` — zajedničke zadane vrijednosti izvođenja za Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonalni sloj (prekidač kola, periodi čekanja)
- `docs/reference/ENVIRONMENT.md` — potpuna referenca varijabli okruženja

## Pokrivenost ruta zaštitom od ubacivanja i red-team testiranje (Faza 8 · Blok D)

Zaštita od ubacivanja (`createInjectionGuard` / `withInjectionGuard`) pokriva sve rute
koje prihvataju korisničke upite. Poštuje `INJECTION_GUARD_MODE` (zadano `warn` = samo evidentiranje;
`block` = vraća HTTP 400 `SECURITY_001`).

| Vrsta             | Rute                                                                                                                                                 | Zadani način rada |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| Tekst (postojeće) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | upozorenje        |
| Generativne       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | upozorenje        |
| Podaci            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | upozorenje        |

Izdvajanje teksta (`extractMessageContents`) obuhvata `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (svake noći, `nightly-llm-security.yml`):** promptfoo potvrđuje da svaka ruta blokira
OWASP-LLM korpus kada je `INJECTION_GUARD_MODE=block`; garak pokreće probe (preskače ih bez tajne).
`moderations` je uključen radi dosljednosti. Način blokiranja predstavlja obaveznu granicu: `evaluatePromptInjection()`
zanemaruje listu onemogućavanja po zahtjevu koju mu prosljeđuje posrednički softver, pa `disabledGuardrails`
**ne** izuzima rutu iz njega ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Noćni tok rada (`.github/workflows/nightly-llm-security.yml`, cron + ručno
pokretanje) ima dva posla:

- **`promptfoo-guard` (blokirajući)** — pokreće `promptfoo eval -c promptfooconfig.yaml`
  s `INJECTION_GUARD_MODE=block`. Svaki protivnički slučaj (npr. "zanemari sve
  prethodne upute…", pokušaji zaobilaženja zaštite u DAN stilu) provjerava da odgovor sadrži
  `error.code === "SECURITY_001"`, tj. da je zaštita zaista odbila zahtjev.
- **`garak` (savjetodavni)** — pokreće garak `--probes promptinject,dan,leakreplay`
  nad lokalnom OmniRoute instancom (`http://localhost:20128/v1`). Uslovljen je
  tajnom pružaoca (`PROMPTFOO_PROVIDER_KEY`); uredno se preskače i ima dodatak
  `|| true`, tako da izvještava bez izazivanja neuspjeha CI-ja.

Pokrivenost pomoćne funkcije zaštite (`createInjectionGuard` / `withInjectionGuard`)
obuhvata svaku `/v1` rutu koja prenosi upite; tekst upita se preuzima iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` pomoću
`extractMessageContents()` u `src/shared/utils/inputSanitizer.ts`.
