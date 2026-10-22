# Guardrails (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Hiteles forrás:** `src/lib/guardrails/`
> **Utolsó frissítés:** 2026-10-17 — v3.8.52 (hozzáadva: [Lefedettség és korlátok](#coverage-and-limits):
> mely útvonalakat és válaszútvonalakat érik el a hookok, az egyesített letiltási fejlécek (#16412), az injektálás
> blokkolási módja mint kötelező határ (#16413), valamint hogy mi látja a választ a hívás utáni feldolgozás előtt)

A védőkorlátok az OmniRoute és az upstream szolgáltatók közötti határon
érvényesítik a biztonsági és tartalmi szabályokat, valamint a tartalomátalakításokat.
Minden védőkorlát megvizsgálhatja (és opcionálisan elutasíthatja, átalakíthatja vagy
megjegyzésekkel láthatja el) a kérések hasznos adatait (`preCall`) és az upstream
válaszokat (`postCall`).

A rendszer **hiba esetén átengedő**: ha egy védőkorlát kivételt dob a végrehajtás
során, a regisztrációs jegyzék rögzíti a hibát, majd a kérés meghiúsítása helyett
a következő védőkorláttal folytatja. A blokkolás mindig kifejezett döntés
(`block: true`), sohasem véletlen. Az egyetlen kivétel a megszakított kérés:
amikor a hívó `signal` értéke megszakított állapotba kerül, a kivételt dobó
védőkorlát a kihagyás helyett elutasítja a hook futását.

A hookok **nem** futnak le minden útvonalon vagy minden válasznál. Mielőtt egy
védőkorlátra biztonsági vezérlőként támaszkodna, olvassa el a
[Lefedettség és korlátok](#coverage-and-limits) című részt.

## Beépített védőkorlátok

Importáláskor a regisztrációs jegyzék prioritási sorrendben automatikusan betölt
hat védőkorlátot (lásd: `registry.ts` → `registerDefaultGuardrails()`):

| Prioritás | Név                 | Fázis(ok)      | Fájl                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Az alacsonyabb prioritási számú elemek futnak le **először**.

### Képi híd (`visionBridge.ts`) — Modalitási híd PR-1

A GLM 5.3 alapmodell és a `glm-5.3-{low,high,max}` explicit
`supportsVision:false` regisztrációs/specifikációs metaadatokkal rendelkezik.
A GLM 5.3 Flash-változatok továbbra is natív képfeldolgozásra képes modellek.
A Claude Code `/v1/messages` útvonala a megosztott `handleChat`, hívás előtti
védőkorlátláncba a Claude-ról OpenAI-formátumra történő átalakítás **előtt** lép
be; az egymásba ágyazott `Read` eszközeredmények képeit még azelőtt le kell írni
vagy fel kell dolgozni, hogy ez az átalakítás OpenAI `image_url` tartalommá
emelné őket (#17069).

Elfogja a **képfeldolgozásra nem képes modelleknek** szánt, képet tartalmazó
kéréseket, és vagy egy képfeldolgozásra képes modellhez irányítja át a teljes
kérést, vagy az upstream hívás előtt a képrészeket egy konfigurálható képi modell
által létrehozott szöveges leírásokra cseréli. Ez lehetővé teszi, hogy a kizárólag
szöveget kezelő szolgáltatók transzparens módon dolgozzák fel a multimodális
hasznos adatokat.

Folyamat:

1. Kihagyás, ha a célmodell már támogatja a képfeldolgozást (kivéve, ha szerepel
   a kényszerített híd listáján: `isVisionBridgeForcedModel`).
2. A képrészek kinyerése az `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) segítségével, amely az `open-sse/utils/mediaParts.ts`
   fájlban található **egységes médiaérzékelőnek**, a `detectMediaParts()`
   függvénynek delegálja a műveletet — ez a kombinált kompatibilitási szűrővel
   megosztott egyetlen hiteles forrás.
   A kinyerés engedélyezési listája azokra a formákra korlátozódik, amelyeket a
   `replaceImageParts` vissza tud illeszteni (a kinyerés↔csere szerződés):
   OpenAI `image_url`, Anthropic base64 `source.type:"base64"`, Anthropic URL
   `source.type:"url"` és Responses API `input_image`. A Claude Code
   `tool_result.content` elemében és a Responses eszközkimeneteiben egymásba
   ágyazott egyező képek szintén kinyerésre kerülnek, majd az eredeti elérési
   útjukon lesznek lecserélve; a csak jelzésre szolgáló formák a kombinált szűrő
   hatáskörébe tartoznak, ezért nem kerülnek kinyerésre.
   Kihagyás, ha egy sem található.
3. A futásidejű konfiguráció feloldása a `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) segítségével: az új
   `modalityBridge*` beállításkulcsok elsőbbséget élveznek; a régi
   `visionBridge*` kulcsok **egy cikluson át tartalékként** maradnak elérhetők
   (visszaállítási időablak). Ha a híd le van tiltva, a rendszer minden
   médiabejárás előtt kihagyja a feldolgozást.
4. A módválasztó (`modalityBridgeVisionMode`, lásd az alábbi táblázatot) dönt az
   átirányítás és a leírás között. Az átirányítás olyan `modifiedPayload`
   értéket ad vissza, amelyben csak a `model` lett lecserélve, a következő
   metaadatokkal: `{ rerouted, fromModel, toModel, imagesKept }`.
5. Leírási útvonal: a képek számának korlátozása `maxImages` értékre, a feladathoz
   igazodó prompt összeállítása, a leírás-gyorsítótár ellenőrzése, a képi modell
   **párhuzamos** meghívása (`Promise.allSettled`), majd
   `[Image N]: <description>` szövegrészek beillesztése a képek helyére.
   Egy sikertelen leírás `null` értéket eredményez: ismeretlen vagy
   képfeldolgozásra képes célok esetén a nyers kép megmarad (#4012), de egy
   **biztosan kizárólag szöveget kezelő közvetlen cél** vagy képfeldolgozásra
   képes modellt nem tartalmazó kombináció minden leírás nélküli képhez explicit
   `(unavailable — no vision-capable provider connected)` szöveges helyőrzőt
   kap, beleértve a részleges hibákat és a leíró hívások korlátját meghaladó
   képeket is (#17069). A kombinált leírás meglévő, minden leírási kísérlet
   meghiúsulásakor használt tartalékmechanizmusa változatlanul megmarad (#8430).
6. A `modifiedPayload` és a metaadatok (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) visszaadása.

#### Módválasztó (`modalityBridgeVisionMode`)

| Mód        | Alapértelmezett | Viselkedés                                                                                                                                                                                                                                                                                                                                                             |
| ---------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔               | Változatlan örökölt heurisztika (#6640/#7204): a nem kombinált/`auto/` modelleket a legjobb képfeldolgozó modellhez irányítja át, kivéve, ha az eredeti modell már rendelkezik használható hitelesítő adatokkal (ekkor leírást készít); a kombinált célok mindig leírást készítenek.                                                                                   |
| `describe` |                 | Mindig leírást készít — az átirányítási blokk teljesen kimarad; mindig a felhasználó által kiválasztott modell válaszol.                                                                                                                                                                                                                                               |
| `reroute`  |                 | Kikényszerített átirányítás: a hitelesítő adatokkal rendelkező modell megtartását biztosító védelem megkerülésre kerül. Az átirányítási **cél** hitelesítőadat-védelme továbbra is érvényes — ha nincs használható képfeldolgozási cél, a híd egyértelmű hibával blokkol, ahelyett, hogy leírást készítene vagy nyers képeket küldene egy csak szöveget kezelő célnak. |

A kényszerített módok **azelőtt** rövidre zárják a folyamatot, hogy az automatikus heurisztika lefutna; az `auto` viselkedése
bájtról bájtra megegyezik a PR-1 előtti védőkorláttal.

#### API-kulcs hatóköre (`visionBridgeKeyScope.ts`)

Ha a hívó API-kulcsa korlátozza az `allowedConnections`, a kvótakészletek
(`allowedQuotas`) vagy a modellek (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) használatát, a híd csak
olyan átirányítási és leíró modelleket választ, amelyeket a kulcs használhat, és csak olyan kapcsolatokon,
amelyeket a kulcs használhat. A leíró hívás ezután mindig az OmniRoute önhurokon keresztül halad,
az `x-omniroute-self-loop-key-id` fejléccel, így a fogadó csevegési kérés
ismét érvényesíti az adott kulcs kapcsolat- és modellházirendjét. Az `enforceApiKeyPolicy()`
ezt a fejlécet csak az önhurok bearer tokenjével együtt veszi figyelembe, ezért az csak
szűkítheti a hozzáférést, és a fel nem oldható azonosítót a rendszer elutasítja.

Ha a kulcs számára egyetlen képfeldolgozó modell sem engedélyezett, egy **biztosan csak szöveget kezelő
cél** helyben, egyértelmű HTTP 400 hibával utasítja el a képkérést, ahelyett, hogy
képbájtokat továbbítana egy arra alkalmatlan upstream szolgáltatásnak (#17069). Az ismeretlen vagy natív
képfeldolgozási képességű célok esetében a leírási útvonal megtartja a korábbi
nyitott hibakezelési viselkedését (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
A kulcs nélküli kérések, valamint az ilyen korlátozások nélküli kulcsok pontosan úgy viselkednek, mint
korábban.

#### Feladattudatos leíró prompt (`modalityBridgeVisionTaskAware`)

Alapértelmezés szerint **true**. A `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hozzáfűzi
az **utolsó felhasználói üzenet** szövegét (500 karakterre csonkítva) az alap
leíró prompthoz, így a leírást arra irányítja, amit a felhasználó ténylegesen kért
(codex-vision-proxy minta), és megkéri a képfeldolgozó modellt a látható
szöveg átírására. Kikapcsolt jelző — vagy felhasználói szöveg hiánya — esetén az alapprompt változatlanul használatos.

A leíró önhurok saját OpenAI-kompatibilis kérése (`callVisionModelSingle()`
a `visionBridgeHelpers.ts` fájlban) mindig az `image_url.detail: "high"` értéket kéri —
feltétel nélkül, minden hívóhoz/szolgáltatóhoz, és nem függ semmilyen kliensjeltől.
Az alacsony részletességű mintavételezés éppen annál a szövegátírási
feladatnál rontja az OCR pontosságát, amelyet ez a prompt kér, ezért maga a leíró hívás mindig nagy
részletességet kér, függetlenül attól, hogy az eredeti bejövő kérés milyen részletességi szintet használt. Ez
csak a belső leíró kérés törzsét érinti; nem módosítja azt, ahogyan az
OmniRoute továbbítja a hívó saját `image_url.detail` értékét az elsődleges kérésben —
ezt az alapértelmezést külön alkalmazza, és csak az észlelt OpenCode kliensekre, a
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) függvényben. A
leíró önhurok Anthropic vezetékformátumú ágában nincs `detail` mező,
így egyik alapértelmezés sem érinti.

#### Leírás kimeneti korlátja (`modalityBridgeVisionMaxChars`)

| Kulcs                          | Alapértelmezett | Tartomány          |
| ------------------------------ | --------------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`             | `0` vagy 100–50000 |

A `0` (alapértelmezett) azt jelenti, hogy **nincs korlát** — a
`callVisionModel()` által visszaadott leírás módosítás nélkül kerül továbbításra, megőrizve a meglévő
viselkedést. A 100–50000 tartomány bármely értéke `…` utótaggal csonkítja a leírást,
mielőtt az `[Image N]: <description>` formában visszaillesztésre kerül
(`VisionBridgeGuardrail.preCall()` a `src/lib/guardrails/visionBridge.ts` fájlban).
Növelje ezt a részletgazdag OCR-feladatokhoz, ahol a downstream modellnek a
teljes átírásra van szüksége; csökkentse a bőbeszédű képfeldolgozó modellek tokenhasználatának korlátozásához.
Az irányítópult mezője a Vision lap Advanced paneljén található
(`modality-bridge-max-chars` a `ModalityBridgeVisionTab.tsx` fájlban), és az 1 és 99 közötti
értékeket a 100-as alsó korlátra emeli, miközben az explicit `0` értéket
változatlanul hagyja — a `0` önmagában is érvényes Zod-érték
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), nem csupán
a „nincs beállítva” alapértelmezés.

#### Leírás-gyorsítótár (`modalityBridge/bridgeCache.ts`)

Memórián belüli LRU + TTL gyorsítótár a leírási kimenetekhez, a teljes folyamaton belül megosztva.
Kulcs = `sha256(imageRef + composedPrompt + configuredBridgeModel)`,
hossz-előtagos keretezéssel (nincsenek mezőhatár-ütközések). A modellkomponens a
**konfigurált** hídmodell, nem pedig a ténylegesen válaszoló modell —
a `callVisionModel` belsőleg tartalék modellre válthat, és a próbálkozásonkénti kulcsképzés
széttöredezné a gyorsítótárat. A sikertelen leírások soha nem kerülnek gyorsítótárba. Beállítások:

| Kulcs                           | Alapértelmezett | Tartomány |
| ------------------------------- | --------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`          | —         |
| `modalityBridgeCacheTtlMinutes` | `60`            | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`           | 10–5000   |

#### Távoli képek normalizálása (önhurok-leírás/base64-letöltés)

Amikor a bridge saját maga tölt le egy **távoli** képet — az Anthropic leíró önhívásához és a claude-wire-format base64-konverzióhoz (`ensureBase64ImagesForClaudeWire`), mindkettőt a `visionBridgeHelpers.ts` fájlban található `fetchRemoteImageAsDataUri()` függvényen keresztül —, az eredményként kapott data URI a `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) függvényen halad át, mielőtt beágyazódna a vision modellnek küldött kérésbe. A túlméretezett képek **2048px hosszú oldalra** lesznek lekicsinyítve (az OpenAI/Anthropic által már szerveroldalon alkalmazott átméretezési korlátnak megfelelően), ami csökkenti a feltöltött adatmennyiséget és a késleltetést anélkül, hogy megváltoztatná azt, amit a vision modell lát. Az átméretezés a dinamikus importtal betöltött `sharp` használatával történik: olyan platformon, ahol a natív bináris nem tölthető be, a `normalizeDataUri()` **soha nem dob kivételt** — visszatér az eredeti bájtok változatlan továbbításához, így a leíró/base64-konverziós útvonal mindig működőképes marad. A nem kép jellegű bájtok (amikor a letöltés nem dekódolható képet adott vissza) szintén változatlanul haladnak tovább. Ez a normalizálás azokra a képekre korlátozódik, amelyeket a bridge a saját önhívásához tölt le — soha nem alkalmazza a hívó nyers, változatlanul továbbított hasznos adatára, összhangban a kizárólag kifejezett engedéllyel végzett módosítás elvével (20. szigorú szabály).

#### Beállítási séma és migráció

Az új `modalityBridge*` kulcsokat Zod validálja az `updateSettingsSchema` sémában (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, a három `modalityBridgeCache*` kulcs, valamint az Audio Bridge által használt `modalityBridgeAudio*` csoport. A `141_modality_bridge_settings.sql` migráció a meglévő örökölt `visionBridge*` értékeket a megfelelő új kulcsokba másolja (idempotens módon, és soha nem írja felül az üzemeltető által beállított `modalityBridge*` értékeket); az örökölt kulcsok egy kiadási cikluson át továbbra is elfogadottak maradnak tartalék olvasási lehetőségként.

#### Átláthatósági fejléc és statisztikák

A leírássá alakított válaszok tartalmazzák az `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` fejlécet (amelyet a `modalityBridge/bridgeStats.ts` fájlban található `buildModalityBridgeHeader()` állít elő, és a `src/sse/handlers/chatHelpers.ts` fájlban található `withModalityBridgeHeader()` illeszt be). Az átirányított kérések **nem** kapnak fejlécet — a hasznos adat változatlan maradt, a modell cseréje pedig már látható a válasz törzsében található `model` mezőben.

A `GET /api/modality-bridge/stats` (felügyeleti hitelesítéssel, a `GET /api/settings` végponttal azonos szinten) visszaadja a memóriában tárolt, modalitásonkénti `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` számlálókat a `vision`, `audio` és `video` modalitásokhoz. Az `averageLatencyMs` nevezőként a `latencySamples` értéket használja, nem az összes kísérlet számát; egy időmérés nélküli művelet nem hoz létre mesterséges, nulla ezredmásodperces mintát. A `bridged` továbbra is a sikeres konverziók visszafelé kompatibilis aliasa; a sikertelen kísérletek nem növelik az értékét. A számlálók a folyamat újraindításakor szándékosan nullázódnak (telemetria, nem elszámolás).

#### Irányítópult-konfiguráció

A dedikált irányítópultoldal a `/dashboard/settings/modality-bridge` címen érhető el. Az URL-ből közvetlenül elérhető `Vision`, `Audio` és `Video` lapfülek a `tab` érték módosítása közben megőrzik a lekérdezési paramétereket. A Vision lapfülön beállítható az engedélyezés, az üzemmód és a modell kiválasztása (beleértve az automatikus alapértelmezést), a feladatfüggő promptolás, valamint a speciális időtúllépési, kép-, leíráshossz- és gyorsítótár-korlátok; emellett futásidejű számlálókat és egy védett mintakérést is biztosít. Az Audio lapfül szintén működőképes: elérhető rajta az engedélyezés, egy kizárólag STT-modelleket tartalmazó modellválasztó Auto lehetőséggel, az időtúllépési és maximális kliphossz-korlátok, a hangszámlálók, valamint egy `input_audio` mintateszt. A Video lapfül működőképes: megjeleníti az FFmpeg/ffprobe futásidejű állapotát a négy explicit felhasználóifelület-állapot egyikeként (`unknown`, amíg a vizsgálat folyamatban van vagy nem fejezhető be; `restricted`, ha az irányítópult nem loopback gazdagépen fut, és ezért a vizsgálat kliensoldalon kimarad; `unavailable`, miután a vizsgálat megerősítette a hiányukat; vagy `available`, az FFmpeg/ffprobe verzióival), tartósan menti az engedélyezési, modell-, képkocka-, videó- és időtúllépési korlátokat, a modellválasztót a képfeldolgozásra képes modellekre szűri, valamint megjeleníti a videószámlálókat.

Az AI-beállítások alatt található korábbi Vision Bridge kártya mostantól kompatibilitási hivatkozásként az új oldalra mutat; már nem tartalmazza az űrlap második példányát. A Media Providers az Image-to-Text és Speech-to-Text munkafolyamatokat is a megfelelő Modality Bridge lapfülekhez kapcsolja, a meglévő Speech-to-Text tesztkörnyezet eltávolítása nélkül.

**Önhurok-beléptetés megkerülése:** amikor a leíró hívás az OmniRoute saját `/v1` önhurkán keresztül halad (nem szabványos szolgáltatói modell), az alkérés elküldi az `x-omniroute-admission-bypass: internal` fejlécet, és a feloldott önhurok-hitelesítő adattal hitelesíti magát — helyi módban a helyi `sk_omniroute` jelzőértékkel, máskülönben az üzemeltető által konfigurált `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` környezeti kulccsal (#1350), így a `REQUIRE_API_KEY=true` beállítást használó telepítések is végre tudják hajtani a leíró hívást. A megkerülés csak pontosan ezekkel a hitelesítő adatokkal működik, ezért külső kliensek nem használhatják a fejlécet a beléptetés kihagyására.

Az örökölt alapértelmezések a `src/shared/constants/visionBridgeDefaults.ts` fájlban találhatók; az új mód-, feladatfüggő és gyorsítótár-alapértelmezések, valamint a beállításfeloldó a `src/shared/constants/modalityBridgeDefaults.ts` fájlban található. A védelmi korlát egy `deps` konstruktorbeállítást biztosít, így a tesztek hamis `getSettings` és `callVisionModel` implementációkat fecskendezhetnek be.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Elfogja a hangot tartalmazó csevegési kéréseket, mielőtt azok olyan célhoz érnének, amelyről nem ismert, hogy fogad hangbemenetet. Magát a csevegési kérést soha nem irányítja át: a hangrészek átírása a meglévő, OpenAI-kompatibilis, többrészes végponton keresztül történik, majd a kiválasztott csevegési modell a szöveges átiratokkal folytatja a feldolgozást.

Folyamat:

1. A `supportsAudio` feloldása a `getResolvedModelCapabilities()` használatával történik. Elsőbbséget élveznek az explicit szolgáltatói nyilvántartás metaadatai, majd a statikus modellmetaadatok, végül a szinkronizált `modalities_input`. Egy deklarált bemeneti lista `audio` nélkül `false` értéket jelent; ha nincs a képességre utaló bizonyíték, az érték `null` marad. A `false` és a `null` egyaránt aktiválja a konzervatív hidat, míg a `true` megkerüli azt.
2. Feloldja a `modalityBridgeAudio*` beállításokat, és minden üzenetből kinyeri az összefűzhető felső szintű hangrészeket a megosztott `detectMediaParts()` detektor segítségével. A támogatott átviteli formák az OpenAI `input_audio`, az `audio_url`, valamint a `source.media_type: "audio/*"`. A beágyazott hang észlelése megtörténik az útválasztáshoz, de az összefűzési útvonal nem távolítja el. A feldolgozást a `modalityBridgeAudioMaxClips` korlátozza; a későbbi részek érintetlenek maradnak.
3. Tiszteletben tartja a konfigurált `provider/model` értéket, vagy engedi, hogy a `selectAudioBridgeModel()` stabil katalógussorrendben végigjárja az `AUDIO_TRANSCRIPTION_PROVIDERS` elemeit, és kiválassza az első olyan modellt, amelyhez használható, aktív szolgáltatói hitelesítő adat tartozik.
4. A `callAudioTranscription()` a base64-/adat-URI-formátumú hangot többrészes `file` mezővé alakítja, vagy letölt egy távoli `audio_url` erőforrást a kizárólag nyilvános címeket engedélyező, DNS-rögzítést alkalmazó kimenő védelmen keresztül, 25 MB-os korláttal. Ezután POST-kéréssel elküldi a fájlt és a kiválasztott modellt a helyi `/v1/audio/transcriptions` önhurokra, a `resolveSelfLoopBearer()` használatával hitelesítve. A meglévő átírási útvonal végzi el a szokásos hitelesítőadat-keresést, a várakozási idő és a sebességkorlátozás kezelését, valamint a szolgáltatóhoz történő továbbítást.
5. A sikeres hívások a megfelelő részeket `[Audio N]: <transcript>` értékre cserélik. A hívások a `Promise.allSettled` használatával futnak: egy egyedi hiba megőrzi az eredeti hangrészt (#4012 szerződés). Ha minden hívás sikertelen, és bizonyított, hogy a cél `supportsAudio === false`, akkor a részek értéke `[Audio N]: (unavailable — no STT provider connected)` lesz (#8430 szerződés). Ismeretlen cél (`null`) esetén minden hívás sikertelenségekor a kérés érintetlen marad. Az olyan bizonyítottan csak szöveget támogató cél, amelyhez nincs használható STT-hitelesítő adat, ugyanezt az explicit helyettesítő szöveget kapja hálózati hívás indítása nélkül.

A sikeres átiratok a teljes folyamatra kiterjedő Modality Bridge LRU-/TTL-gyorsítótárat használják. A kulcs a hanghivatkozásból, a stabil `audio-transcription` műveletcímkéből és a kiválasztott STT-modellből áll; a hibák soha nem kerülnek gyorsítótárba. A hangfeldolgozási kísérletek frissítik a megosztott `bridged`, `cacheHits`, `failures` és `lastUsedAt` számlálókat. Az átalakított válaszok tartalmazzák az `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` fejlécet; az érintetlen kérések nem kapnak Audio Bridge-szegmenst.

A futásidejű beállítások adatbázisban tároltak, és Zod-validációt használnak:

| Kulcs                         | Alapértelmezés | Tartomány                      |
| ----------------------------- | -------------- | ------------------------------ |
| `modalityBridgeAudioEnabled`  | `true`         | —                              |
| `modalityBridgeAudioModel`    | `""`           | Automatikus vagy STT-azonosító |
| `modalityBridgeAudioTimeout`  | `60000`        | 1000–300000                    |
| `modalityBridgeAudioMaxClips` | `3`            | 1–10                           |

A megosztott gyorsítótárat továbbra is a `modalityBridgeCacheEnabled`, a `modalityBridgeCacheTtlMinutes` és a `modalityBridgeCacheMaxEntries` vezérli.

### Videóhíd (`videoBridge.ts`, `videoBridgePipeline.ts`)

Elfogja a Chat Completions `messages` és a Responses API `input` felső szintű videórészeit, mielőtt meghívná azt a célt, amelyről nem ismert, hogy natívan támogatja a videót. A támogatott formák az `input_video`, a `video_url`, a `video_source`, a HTTPS URL-ek, valamint a `data:video/*;base64,...` adat-URI-k. A szövegben szereplő egyszerű fájlneveket nem kezeli videóként.

A `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) felelős a kérés bejárásáért, a képesség- és szabályzat-ellenőrzésért, a kérésenkénti összesítésért és a válasz hasznos adattartalmáért. A videónkénti munka — a beszerzés, a teljes eredmény gyorsítótárazása, a képkockasorozat leírása (amely egyesíti a hívó által deklarált hangátiratot), valamint a kísérletenkénti metrikák, megszakítás és takarítás — a `videoBridgePipeline.ts` fájlban található `processVideoPart` mögé van rejtve, amelyet a `preCall` ciklusa videórészenként egyszer hív meg. Ez a modul határozza meg a `VideoMediaBrokerPort` (bájtok beszerzése és mintavételezett képkockák kinyerése), a `VideoAudioTranscriptionPort` (a hívó által deklarált hangátirat egyesítése a mintavételezett képaláírásokkal) és a `VideoDrilldownPort` (a képkockák részletes vizsgálatához tartozó perzisztenciahatár; még nincs bekötve a `processVideoPart` folyamatába — jelenleg csak a különálló `/api/modality-bridge/video/drilldown` útvonal ír részletes vizsgálati bejegyzéseket) explicit portkorlátait is.

A nyilvános `/v1` kérési útvonal soha nem importál és nem hív meg alfolyamatot. A távoli videók letöltése 50 MiB-os korláttal történik; a beágyazott base64-videókra videónként konzervatív, 36 MiB-os dekódolt méretkorlát vonatkozik, hogy a modell/üzenetek/keretezés burkolóadatai beleférjenek a nyilvános JSON-kérések 50 MiB-os befogadási korlátjába. A beágyazott tartalom hosszát és a becsült dekódolt méretet a memóriafoglalás előtt ellenőrzi. HTTPS szükséges mind a kezdeti távoli URL-nél, mind minden átirányításnál, a meglévő, kizárólag nyilvános címeket engedélyező, DNS-rögzítést alkalmazó kimenő védelem használatával. A bájtok ezután átlépik a pontos belső `POST /api/modality-bridge/video/extract` közvetítői határt. Ez az útvonal egyszerre `LOCAL_ONLY` és `SPAWN_CAPABLE`, kizárólag folyamatonként hitelesített, megbízható visszacsatolási kérés fogad el, és soha nem fogad el URL-t, fájlrendszerbeli elérési utat, végrehajtható fájlt vagy argumentumlistát. Az API törzsméret-feldolgozási folyamata és a kezelő növekményes törzsolvasója egymástól függetlenül érvényesíti az 50 MiB-os közvetítői bemeneti korlátot. A korlátozott várólista egyszerre egy kinyerést futtat, négy függőben lévő feladatot engedélyez, és a függőben lévő bemenet teljes méretét 100 MiB-ra korlátozza.

A közvetítőn belül az `ffprobe` egy privát helyi fájlt olvas; a rögzített formátumengedélyezési lista kizárja a lejátszási lista- és jegyzékformátumokat. Az engedélyezett MOV-családba tartozó konténerek esetében a külső MOV-adathivatkozások alapértelmezés szerint továbbra is le vannak tiltva, és a rögzített parancs nem engedélyezi őket. Az `ffprobe` és az `ffmpeg` is kizárólag a `file` protokollt engedélyező listát, egy szálat és rögzített argumentumtömböket használ, parancsértelmező nélkül, a végrehajtható fájlokat pedig a `PATH` alapján oldja fel. A csatolt képként szolgáló borítófolyamok nem tekinthetők lejátszható jelölteknek. Minden lejátszható folyamnak meg kell felelnie a korlátoknak, és a rendszer előnyben részesíti az explicit alapértelmezett folyamot, mielőtt a determinisztikus, legalacsonyabb indexű tartalékmegoldást alkalmazná. A videók hossza legfeljebb 600 másodperc, méretük dimenziónként legfeljebb 8 192 képpont, a forrás teljes képpontszáma pedig legfeljebb 33 554 432 lehet. Az FFmpeg 1–16, az időközök közepéről vett JPEG-képkockát mintavételez, a hosszabbik élt legfeljebb 1 024 képpontosra méretezi le a kisebb bemenetek felnagyítása nélkül, és soha nem kap URL-t. A mintavételezés alapértelmezés szerint `uniform`. Az opcionális `scene_aware` és a kísérleti `segment_aware` házirend egy további rögzített FFmpeg-menettel dolgozza fel a már ellenőrzött helyi folyamot, korlátozott számú `showinfo` jelenet-időbélyeget választ ki, és detektorhiba, időtúllépés, hibás formátumú kimenet vagy üres jelölthalmaz esetén determinisztikusan ugyanazokra az egyenletes időközök közepére tér vissza. A szegmenstudatos mód a középponti mintákat az ellenőrzött jelenetintervallumokkal arányosan osztja el; a szegmenstudatos bizonyítékokat és a tartalék viselkedést alább részletezzük. A szigorú, 16 képkockás korlátot minden házirendben a kiválasztás után alkalmazza a rendszer. Ha egy jelenettudatos kéréshez csak egyképkockás keret tartozik, az aktív teljes videó vagy fókuszablak egyenletes középpontját használja, és `policyEffective: uniform` értéket jelent: egyetlen kiválasztott jelenetképkocka nem őrizheti meg az időbeli tartomány mindkét végét. A hívó opcionálisan megadhat egy véges fókuszablakot (`start`/`end` másodpercben); a rendszer a határokat a média időtartamához igazítja, a fordított vagy nem véges ablakokat elutasítja, és minden mintavételezési házirendet kizárólag a normalizált intervallumon belül hajt végre. Az eredményül kapott ablak bekerül a mintavételezési metaadatokba és a nem megbízható leírás előtagjába, így a további modellek meg tudják különböztetni a fókuszált részletet a teljes idővonaltól.

A szemantikus feliratfókusz különálló, explicit beállítás. Az alapértelmezett `full` elemzési mód megőrzi a meglévő képkockapromptot, és soha nem továbbítja a kérés szövegét a feliratmodellnek. `focused` módban a híd csak a legutóbbi, nem üres, felhasználó által létrehozott `text`/`input_text` értéket olvassa ki ugyanabból a Chat- vagy Responses-tárolóból, NFC-formára normalizálja, összevonja a vezérlőkaraktereket és az üres helyeket, valamint 500 Unicode-kódpontra korlátozza. Az üres eredmény pontosan a `full` promptra tér vissza. A használható tippet JSON-ként, egy külön, nem megbízható felhasználói kontextusblokkban szerializálja a rendszer, és az csak a megfigyelhető részletek előnyben részesítésére használható; nem írhatja felül a médiában látható vagy hallható utasítások követését tiltó külön figyelmeztetést. A szöveges fókusz soha nem következtet `start`/`end` értékekre, és nem módosítja az időbeli mintavételezőt.

#### FU-07 strukturális szegmensbizonyítékok

A `segment_aware` egyetlen korlátozott előelemzési menetet használ a már ellenőrzött helyi videófolyamon. A rögzített szűrőlánc először legfeljebb 320 képpont szélességűre méretezi a videót, észleli a jelenetváltásokat és a kimerevített intervallumokat, majd másodpercenként 1 képkockát mintavételez az elmosódottság, az átlagos fénysűrűség, valamint a térbeli és időbeli információ meghatározásához. A menet legfeljebb 600 strukturális mintára, egy FFmpeg-/szűrőszálra, ugyanarra a kizárólag `file` protokollt és konténereket engedélyező listára, 1 MiB-os folyamatkimeneti korlátra, valamint a közvetítő megosztott megszakítási/határidő-keretén belül legfeljebb 30 másodpercre korlátozódik. Soha nem fogad el parancsot, szűrőt, elérési utat vagy URL-t a kérésből.

A strukturális értékek determinisztikus mintavételezési bizonyítékok, nem pedig a videó szemantikai értelmezései. Nem következtetnek alanyokra, műveletekre, feliratokra, beszédre vagy felhasználói szándékra. A jelenet- és kimerevítési határok szegmenseket alkotnak; a kimerevítési lefedettség, az elmosódottság, az expozíció, a térbeli részletesség és az időbeli változás kizárólag a meglévő 1–16 képkockás keret elosztását befolyásolja. Egy teljesen kimerevített szegmens legfeljebb egy képkockát kaphat, míg a nem kimerevített szegmensek a fennmaradó keretért versenyeznek. Ha a határok száma meghaladja a képkockákét, a rendszer megtartja az idővonal egyenletes lefedettségét, így a gyors korai vágások nem rejthetnek el egy hosszú befejező szegmenst. A kimerevítési határok 1 másodperces elemzési felbontásán belüli jelenethatárokat a rendszer összevonja.

A hiányzó szűrők, a hibás formátumú vagy üres bizonyítékok, a detektorhibák vagy a korlátozott előelemzés időtúllépése esetén a rendszer nyitott módon, pontosan az egyenletes középponti házirendre tér vissza. A hívó általi megszakítás vagy a közvetítő határidejének lejárta nem eredményez ilyen visszatérést: megszakítja a folyamatban lévő alfolyamatot, megakadályozza a későbbi képkockakinyerést, a privát ideiglenes könyvtárfát pedig a `finally` blokkban eltávolítja.

A `scripts/perf/video-bridge-fu07-eval.ts` determinisztikus, valós FFmpeg-tesztanyagokat hoz létre a duplikátumeltávolítás utáni felirathívás-megtakarítás, a sűrű mozgású tartalmak keretelosztása, az elmosódottsági/expozíciós/SI-TI bizonyítékok, a hosszú befejező szakasszal rendelkező gyors vágások és a fokozatos áttűnésből eredő téves pozitív észlelések vizsgálatához. Rögzíti az előelemzés valós eltelt idejét, és ahol elérhető a `/usr/bin/time`, ott a gyermekfolyamat processzoridejét és maximális RSS-értékét is. Minőség-ellenőrzései kizárólag strukturális orákulumok. A valós feliratmodell minősége továbbra is `HOLD`, mivel ehhez a tesztkörnyezethez nem tartozik engedélyezett végpont vagy rögzített értékelő. A pénzbeli megtakarítások szintén `HOLD` állapotban maradnak, kivéve, ha a `--caption-cost-per-call-usd` explicit pozitív hívásonkénti költségbecslést ad meg; a szkript egyik eredményt sem hamisítja meg.

Minden egyes képkocka mérete legfeljebb 4 MiB, az összes nyers képkockáé együttesen 23 MiB, a szerializált közvetítőválaszé pedig 32 MiB lehet. A rendszer egy privát ideiglenes könyvtárat távolít el a `finally` blokkban. Az OmniRoute nem tartalmazza az FFmpeg programot, és nem fogad el egyéni végrehajthatóállomány-útvonalat. A feliratozás előtt a híd konzervatív vizuális deduplikációt végez: minden JPEG-képet 16×16-os szürkeárnyalatos pufferré kicsinyít, és csak a legutóbb megtartott képkockával hasonlítja össze. Egynél több képkockát engedélyező feliratozási keret esetén a kinyerés a keret legfeljebb kétszeresének megfelelő, korlátozott jelölthalmazt biztosít, amely soha nem tartalmaz 16-nál több képkockát. A kért korlátot a rendszer csak a deduplikáció után alkalmazza; ha a keret legalább két képkocka, a végső ritkítás során megőrzi az első és az utolsó kiválasztott jelöltet. A verziózott `grayscale-16x16-mean-cells-v2` szabályzat az átlagos fénysűrűség-különbség és azon bélyegképcellák aránya közül a nagyobbat használja, amelyek normalizált eltérése legalább 0,05. A duplikációs küszöbérték a 0,04-es konstans, amelyet a kiszámíthatóság érdekében választottak, nem pedig futásidejű beállításként tettek elérhetővé. Ez a másodlagos, nagy kontrasztú jel megőrzi azokat a kis mozgásokat és láthatószöveg-változásokat, amelyeket egy kizárólag az átlagon alapuló összehasonlítás elfedhet. Az összehasonlító vagy a dekóder hibái esetén a rendszer megengedően viselkedik, és fenntartja a lefedettséget. A kimeneti metaadatok elkülönítik a kinyert jelölteket, a sikeresen felhasznált képkockákat és az eldobott vizuális duplikátumokat.

Egy kifejezetten videóként megjelölt rész időbélyeggel ellátott kontaktlapot kérhet. A híd legfeljebb 4 oszlopos, 16 képkockát tartalmazó JPEG-rácsot készít. Minden 512 képpontos cella forrás-időbélyegét ráégeti egy nagy kontrasztú alsó sávra, miközben ugyanezek az időbélyegek a szöveges metaadatokban is megmaradnak a későbbi társítás és auditálás céljából. A teljes JPEG mérete továbbra is legfeljebb 32 MiB lehet. Ha a `sharp` nem tudja dekódolni vagy összeállítani a rácsot, a híd visszatér az egyedi JPEG-képkockákhoz; az ügyfél általi megszakítás továbbra is tovaterjed a kontaktlap-műveleten keresztül.

Az élesítéshez szükséges bizonyíték szándékosan elkülönül a szintetikus összeállítási mikroteljesítmény-méréstől. A `scripts/perf/video-bridge-contact-sheet-eval.ts` egy sémaverzióval ellátott A/B tesztkörnyezetet határoz meg valódi, OpenAI-kompatibilis látásmodellekhez. Méri a szolgáltató által jelentett tokeneket, a teljes folyamat falióra szerinti késleltetését — beleértve a kontaktlap összeállítását —, a modellhívások számát és a jegyzékben meghatározott tények megőrzését. A nyers modellválaszokat nem írja bele a jelentésbe; csak az SHA-256 kivonatokat és az egyező tényazonosítókat őrzi meg. A tesztkörnyezet csak akkor hajt végre hálózati vagy fizetős modellhívást, ha megadták a `--execute-real` kapcsolót, valamint konfigurálták a `--model`, az `OMNIROUTE_BASE_URL` és az `OMNIROUTE_API_KEY` értékét. Ilyen kifejezett valós futtatás nélkül a géppel olvasható döntés `HOLD` marad; a szintetikus adatterhelés- és hívásszámmérések önmagukban nem jelentenek bizonyítékot az élesítéshez.

A hívók opcionális `transcript.cues` tömböt csatolhatnak egy támogatott videórészhez, ha már rendelkeznek időben igazított szöveggel. Minden jelzésnek tartalmaznia kell `text` mezőt, a vizsgált időtartamon belüli véges `start`/`end` intervallumot, valamint egy engedélyezési listán szereplő `source` értéket (`client`, `embedded` vagy `audio-bridge`); a `confidence` alapértelmezett értéke `1`, és `0` és `1` között kell maradnia. A teljesen azonos jelzéseket a rendszer összevonja. Az OmniRoute soha nem indít átírást ezekből a metaadatokból: az ellenőrzött jelzéseket forrásukkal, megbízhatósági értékükkel és intervallumukkal együtt átmásolja a leírt eredménybe, és nem megbízható megfigyelésekként jeleníti meg őket a képkockák feliratai mellett. Az érvénytelen, tartományon kívüli vagy eredetmegjelölés nélküli szöveget elutasítja ahelyett, hogy belekeverné a feliratfolyamba. A kérés törzsében lévő mindkét átirati csatorna `client` értékre normalizálja a megadott eredetmegjelölést, beleértve a saját állítású `embedded` vagy `audio-bridge` címkéket is. Ezeket a megbízható címkéket kizárólag egy szerver által felügyelt adapter rendelheti hozzá a csak kódból elérhető `trustedSource` argumentumon keresztül; a kérés JSON-mezője nem érheti el ezt az argumentumot. Az átirat szövege eredetétől függetlenül nem megbízható, médiából származó tartalom marad, és soha nem határozhatja meg az engedélyezést.

Egy haladó hívó ugyanahhoz a videóhoz `audioTranscript` hangsávot adhat meg; ezt a rendszer ügyfél által biztosított szövegként, nem pedig szerveroldali átírás bizonyítékaként kezeli. Az egyesítési pont egyetlen határidő és megszakítási jel mellett dolgozza fel a vizuális és hangalapú megfigyeléseket, közös idővonalon rendezi őket, összevonja a teljesen azonos elemeket, és részleges eredményt jelent, ha csak az egyik oldal sikeres. Az érvénytelen `audioTranscript` ilyen részleges eredményre korlátozza a feldolgozást — a vizuális leírás megmarad, a hangág pedig megtisztított hibakódot rögzít — ahelyett, hogy a teljes videó feldolgozása meghiúsulna. Az ágankénti elérhetőség, a részleges állapotjelző és a megtisztított hibakódok megmaradnak a leírt eredményben, a védőkorlátok metaadataiban (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), az eredmény-gyorsítótár metaadataiban és a híd egyesítési számlálóiban. A Video Bridge alapértelmezett útvonala nem indít beszédfelismerést, és nem tölt le második médiapéldányt; kifejezetten megadott hangsáv nélkül továbbra is csak a videót dolgozza fel.

**Átiratmegőrzés (#12150 P1).** Ez automatikusan érvényes minden olyan
esetben, amikor a Video Bridge (amely maga is külön engedélyezendő) átiratjelet
jelenít meg — nincs külön megőrzési jelző. Amikor egy kérés bármilyen
átiratjelet megjelenít (a hívó által megadott `transcript` vagy egy egyesített
`audioTranscript` mezőt), a védőkorlát `videoBridgeObserved` jelöléssel látja el,
és létrehozza a videóleírás kitakart árnyékmásolatát — egy azonos megjelenítést,
amelyben minden jel szabad szöveges törzsét a `[redacted-video-transcript]`
helyettesíti. Ez a strukturált jelmező helyettesítésével, még a karakterlánc
összeállítása előtt készül (soha nem az egybesimított szöveg elemzésével, így a
jelek semmilyen tartalma — sem rosszindulatú, sem szokványos, beleértve a `]`
karaktert tartalmazó törzseket, például az `[inaudible]`/`[music]` értékeket —
nem maradhat meg). A tartósan tárolt hívásnapló kérésének törzse minden videóból
származó szövegrészt erre a kitakart árnyékmásolatra cserél, tartalmi egyezés
alapján; a `fullText` horgonyt a rendszer újra beolvassa a hívás előtti
védőkorlát végleges hasznos adatából, így az egyezés akkor is sikeres marad,
miután a lánc későbbi védőkorlátai (a PII- és hitelesítőadat-maszkolók, 10/95-ös
prioritással) helyben átírták a leírás szövegét, valamint miután a
rendszerprompt-/átadás-/memóriabefecskendezés átalakította az üzenettömböt. A
modellnek továbbított törzs változatlan marad. A megfigyelt kérés ezenkívül nem
tölt fel tartós memóriát (a kérésből és a válaszból származó kinyerés egyaránt
kimarad), így a modell saját válasza sem másolhatja be az átirat szövegét a
memóriába.

**Nyers videómezők (#12430).** Ha a híd engedélyezve van, és a natív
videótámogatás ismeretlen vagy hiányzik, a definiált `transcript`/`audioTranscript`
mezők akkor is aktiválják a `videoBridgeObserved` jelölést, ha a leírás
létrehozása sikertelen volt, vagy egy `maxVideos` korlát életbe lépett. A `null`
érték és az üres karakterlánc is számít; a hiányzó mezők és a nem videóhoz
tartozó metaadatok nem. A megőrzött másolatok kitakarják ezeket a mezőket, vagy
kihagyják a kérést, a gyorsítótárak és a memória pedig megkerülésre kerülnek.

Ezeken a tartalék feldolgozási útvonalakon a hívó érvényes jelei támogatott
`text`/`input_text` részekké válnak a nem szabványos szolgáltatói mezők helyett.
A kérésben megadott mindkét sáv nem megbízható `client` megfigyelés marad, és
kifejezett figyelmeztetés jelzi, hogy a videóhoz nem készült leírás, az
időbélyegeket pedig nem ellenőrizték a médiatartalom alapján. A meglévő, összesen
256 jelre/64 KiB-ra vonatkozó, valamint jelenkénti keretek a két sávra együttesen
érvényesek; az időbélyegeknek bele kell férniük a közvetítő 600 másodperces
felső korlátjába és bármely megadott fókuszablakba. Az érvénytelen sávokat a
rendszer elveti, és nem továbbítja tetszőleges szövegként; egy érvényes
párhuzamos sáv továbbra is felhasználható, kivéve, ha az együttes keretüket
túllépik. A null vagy üres mezők nem adnak hozzá szöveget. Ez a tartalék
feldolgozás nem egészül ki médialekéréssel vagy átírással. Az átirat
kiterjesztési mezőit a rendszer eltávolítja a tartalék videohordozóból, valamint
annak `video_url`/`source` objektumaiból. Az OpenAI vezetékes formátumának
engedélyezési listája szigorú marad; az ismeretlen natív támogatású
videohordozók továbbra is elérhetők, az ismerten csak szöveget támogató
célpontok pedig megtartják a biztonságos jelölőket. A strukturált kitakarási
árnyékmásolatok védik a hozzáfűzött átiratszöveget, miközben a hívó tulajdonában
lévő eredeti kérés változatlan marad. A natív támogatással rendelkező célpontok
és a letiltott hidak megtartják meglévő megkerülési viselkedésüket.

A további megőrzött másolatok ugyanazt a megfigyeltkérés-jelzést használják. A
védőkorlát előtti nyers klienskérés-pillanatkép, a memóriában lévő függőben lévő
kérés és a korán elutasított kérés naplója strukturált módon lecseréli a
videórészek átiratmezőit; a folyamat szakaszai és a kontextusátadás által
előállított karakterlánc-promptokat a tartósan tárolt kéréstörzs célhelyén
takarja ki a rendszer. A tartósan tárolt `video_content_removed` jelölő hatására
a `previous_response_id` használatával történő folytatás biztonságosan
meghiúsul, ahelyett hogy rekonstruálná a szándékosan elvetett szöveget. Ha egy
megfigyelt kérés elveszíti a részenkénti kitakarási árnyékmásolatát a naplózás
előtt, vagy több videóárnyék közül akár csak egy sem egyezik a kérés későbbi
módosításai után, a rendszer teljes egészében kihagyja a megőrzött kéréstörzset,
ahelyett hogy részlegesen kitakart átiratot őrizne meg.

Egy megfigyelt kérés esetében a modell válasza strukturált jelhatár nélkül
idézheti az átirat bármely részét. Ezért a tartósan tárolt hívásnapló
`responseBody` mezőjét a rendszer egy kihagyási jelölőre cseréli; a részletes
folyamatműtermék (amely a továbbított/kliensoldali törzseket és a stream
darabjait is tartalmazhatja) nem kerül megőrzésre. A szemantikai,
idempotencia- és következtetés-visszajátszási gyorsítótárak ennél a kérésnél az
olvasásokat és az írásokat egyaránt megkerülik. A szolgáltatói kérés és a kliens
számára látható válasz változatlan marad. A korai életben tartó bájtokat a
rendszer kiüríti az ideiglenes pufferből, amikor kihagyja a részletes
műterméket. A Kiro hibás EventStream-figyelmeztetése csak a hasznos adat
bájtméretét jelenti, annak tartalmát vagy a JSON-elemző nyers hibáját soha.
Ez nem állítja, hogy minden ettől független szolgáltatói/bővítményi
diagnosztikát ellenőriztek; a megőrzési célhelyek szélesebb körű átvizsgálását
a #11658 követi nyomon.

A belső `/api/modality-bridge/video/drilldown` életciklus egy különálló,
visszacsatolási címen/tokenalapú hitelesítéssel elérhető gyorsítótár-alrendszer.
Minden művelethez egy kanonikus, átlátszatlan egyszerűazonosító is szükséges.
Egy éles környezetbeli hívó engedélyezése előtt annak ezt az azonosítót a
hitelesített bérlőből kell származtatnia, és soha nem továbbíthat kliens által
kiválasztott értéket. A gyorsítótárkulcsok ezt az egyszerűazonosítót a kanonikus
munkamenet- és videóhivatkozás-azonosítókhoz kötik, csak azok SHA-256 alapján
származtatott kulcsait tárolják, és az olvasásokat, valamint a törlést ugyanarra
az egyszerűazonosítóra korlátozzák. A gyorsítótár bejegyzésenként legfeljebb 16
származtatott JPEG-képkockát tárol, tíz perc után lejárttá teszi őket, továbbá
korlátozott `start`/`end` olvasásokat vagy kifejezett munkamenet-törlést támogat.

Egyszerűazonosítónként legfeljebb 16 bejegyzés és 64 MiB kanonikus JPEG-adat
engedélyezett. Ezek a korlátok függetlenek a globális, 64 bejegyzéses/256 MiB-os
felső határtól: az egyszerűazonosítói kvóta terhelése csak az adott
egyszerűazonosító legrégebben használt bejegyzéseit üríti ki, mielőtt a rendszer
figyelembe venné a globális LRU szerinti kiürítést. A gyorsítótárban végzett
tevékenységek során a rendszer mind az egyszerűazonosítónkénti, mind a globális
elszámolásból eltávolítja a lejárt bejegyzéseket, míg megszakítás vagy
érvényesítési hiba esetén nem véglegesít részleges cserét.

A gyorsítótár elutasítja a nem kanonikus Base64-kódolást, a felesleges kitöltést, a nem JPEG-formátumú médiát, a hibás vagy
csonkolt JPEG-eket, valamint azokat a JPEG-eket, amelyek figyelmeztetést eredményeznek egy korlátozott, teljes képes `sharp`
dekódolás során. Minden elfogadott képet kanonikus JPEG-ként kódol újra, a szélességet és a magasságot
a dekódolt bájtokból határozza meg a hívó által megadott mezők elfogadása helyett, és a megőrzésük helyett eldobja
a hozzáfűzött poliglott bájtokat. Mindkét kvótába csak a korlátozott méretű, kanonikus tömörített puffer
számít bele. A JSON átviteli korlátja tartalmazza a Base64 többletterhét a 32 MiB-os
dekódolt bemeneti korláthoz. Minden
tárolt származtatás rögzíti az ellenőrzött JPEG-formátumot/-felbontást, a mintavételi szabályzatot,
a származtatás verzióját, a létrehozás időpontját, a kiszolgáló által kiszámított tartalomkivonatot, valamint a kivonatolt szülő-
hivatkozást és a megbízható hívó szülőtartalom-kivonatát. A rendszer ellenőrzi a megszakítást
az aszinkron dekódolási/kivonatolási fázisok között, az atomi gyorsítótár-véglegesítés előtt.

Ez a rész még nem kapcsol éles producert az útvonalhoz, és nem
biztosít többfelbontású változatkiválasztást. Az átlátszó Video Bridge kérési
útvonala ezért nem jár további munkával, míg a bérlőhöz kötött identitásszármaztatás és
a teljes FU-08 többfelbontású életciklus továbbra is kifejezetten utánkövetési feladat,
nem pedig befejezett működésként dokumentált funkció.

A rendszer a képkockákat egymás után látja el képaláírással a konfigurált Video modellel. Az üres
Video felülbírálás örökli a Vision beállítást; ha mindkettő üres, a Vision
automatikus útválasztója választja ki a tényleges, képfeldolgozásra képes modellt. A sikeres képaláírások
az eredeti részt egy stabil `[Video description:` előtaggal helyettesítik, amely egyúttal
nem megbízható, médiából származó megfigyelésként jelöli meg a szöveget, és utasítja a további
modelleket, hogy ne kövessék a médiában található utasításokat. A képkocka-képaláírások gyorsítótárkulcsai
tartalmazzák a JPEG-bájtokat, a promptot, az időbélyeget és a tényleges modellt; csak a sikeres
képaláírások kerülnek gyorsítótárba. A gyorsítótár-bejegyzések megőrzik a ténylegesen sikeres producermodellt,
beleértve a tartalék modellt is; a híd `mixed` értéket jelent, ha a különböző képkockákat
különböző modellek állították elő. A gyorsítótár-találat ezt a producerazonosságot használja újra
ahelyett, hogy a kért útválasztási terv szerint címkézné át. A teljes videó eredményeinek
gyorsítótára minden olyan bemenet alapján kap kulcsot, amely módosítja a kimenetet — a prompt, a tényleges
modell, a mintavételi szabályzat, a képkockaszám, a szemantikai elemzési mód, a normalizált fókusztipp SHA-256-
ujjlenyomata, a fókuszablak, a `transcript`,
az `audioTranscript` és a kontaktlap jelzője —, így ezen
dimenziók bármelyikének módosítása gyorsítótártévesztést eredményez, elavult újrafelhasználást soha. A vizuális deduplikációs szabályzat
verziója, küszöbértéke és a jelölt képkockák korlátozott száma szintén explicit módon szerepel az
eredmény-gyorsítótár kulcsában és metaadataiban; a szabályzat módosítása ezért nem használhat újra elavult
teljesvideó-leírást. Az eredmény-gyorsítótár v4 metaadatai megőrzik a módot és
az ujjlenyomatot, a nyers felhasználói feladatot azonban soha. A védőkorlát metaadatai a
kért és a tényleges elemzési módot egyaránt jelentik; a használható felhasználói szöveg nélkül kért `focused`
mód ténylegesen `full` módként lesz jelentve.

A védőkorlát minden támogatott videórészt kinyer, de legfeljebb
`modalityBridgeVideoMaxVideos` darabot ír le. Az olyan céloknál, amelyekről bizonyított, hogy
`supportsVideo === false`, a sikertelen és a korláton felüli videók explicit, biztonságos
szöveges jelölőkké válnak, így egyetlen nyers videó sem marad meg. Ha a képesség ismeretlen, ezek a részek
megtartják a videohordozójukat; minden tartalék átirat a fent ismertetett korlátozott
szövegkonverziót követi. A `supportsVideo === true` beállítású célok megkerülik a hidat.
A klienskérés megszakítási jele továbbterjed a letöltésre, a közvetítő várólistájára,
az alfolyamatokra és a képaláírás-hívásokra; a megszakítások leállítják a feldolgozást a videók között, és hiba esetén soha nem
engedik tovább a nyers médiát.

A futásidejű beállításokat adatbázis tárolja, és a Zod ellenőrzi:

| Kulcs                               | Alapérték   | Tartomány / működés                                                                                                             |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcionális futásidejű funkció, külön engedélyezendő                                                                             |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | A `full` megőrzi az általános képaláírásokat; a `focused` korlátozott, nem megbízható legutóbbi felhasználói kontextust használ |
| `modalityBridgeVideoModel`          | `""`        | Örökli a Vision Bridge modelljét                                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                            |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` vagy arányos `segment_aware`; az érzékelő hibája esetén visszaáll `uniform` módra                      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                             |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                                  |

A 120 másodpercnél nagyobb, korábban mentett Video-időtúllépési értékeket a rendszer a
közvetítő határidejére korlátozza; az ezt a korlátot meghaladó új beállítások mentését elutasítja.
A `GET /api/modality-bridge/video/runtime` a hitelesítés vagy a futtatókörnyezet vizsgálata
előtt megbízható, bélyegzett visszacsatolási lokalitást követel meg, majd kezelési
hitelesítést igényel. Csak az `available` értéket, a megtisztított FFmpeg/ffprobe-verziókat és egy rögzített
indokot ad vissza, ha a futtatókörnyezet nem érhető el. A belső kinyerési végpont nem
nyilvános feltöltési API: a várólista telítettsége `503` választ és `Retry-After` fejlécet ad vissza, a hívó
kapcsolatbontása `499`, a közvetítő rögzített határideje pedig `504` választ eredményez. A konvertált válaszok
hozzáadják a `video->text;model=<visionModel>;parts=<videos>` értéket a központi
`x-omniroute-modality-bridge` fejléchez, a Vision- vagy Audio-szegmensek eltávolítása nélkül.

### PII-maszkoló (`piiMasker.ts`)

**Mindkét** szakaszban fut.

- A **`preCall`** klónozza a hasznos adatot, bejárja a `system`, `messages`, `input` és
  `prompt` mezőket (beleértve az egyszerű sztringelemeket is), majd alkalmazza a
  `processPII()` függvényt (innen: `@/shared/utils/inputSanitizer`) a sztring típusú
  `content`/`text` mezőkre. Ha `PII_REDACTION_ENABLED=true`, az észlelt személyes
  adatok maszkolásra kerülnek a kimenő hasznos adatban. Ez független az
  `INPUT_SANITIZER_MODE` értékétől (amely csak a promptinjektálási szabályzatot
  vezérli). Ha a maszkolás ki van kapcsolva, a hívás az észlelések számát a
  tartalom átírása nélkül rögzíti.
- A **`postCall`** mélymásolatot készít a válaszról, majd futtatja a
  `sanitizePIIResponse()` függvényt, valamint a Responses API alakzatának
  maszkolóját (`maskResponsesOutput` — lefedi az `output_text` és az
  `output[].content[].text` mezőket). Ha bármilyen maszkolás történik, a
  módosított válasz lecseréli az eredetit.

A védelmi mechanizmus soha nem blokkol; csak megjegyzésekkel lát el
(`meta.detections`, `meta.redacted`) vagy átír.

#### Típusonkénti kiválasztás, egyéni minták és észlelési számlálók

A **Dashboard → Settings → Security → PII masking** határozza meg, hogy _mi_
legyen maszkolva. Magát a maszkolást nem kapcsolja be: azt továbbra is a
`PII_REDACTION_ENABLED` (kérés), illetve a `PII_RESPONSE_SANITIZATION` (válasz +
SSE) vezérli; alapértelmezés szerint mindkettő ki van kapcsolva.

- **Típusonkénti kiválasztás** — a beépített azonosítók listája a
  `src/shared/constants/piiTypes.ts` fájlban található (`PII_BUILTIN_TYPES`).
  Ha nincs beállítva, az minden típust jelent (ez volt a viselkedés a beállítás
  bevezetése előtt). A kérésfeldolgozó motor `ssn_us` mintája az `ssn` típushoz
  rendelődik. A sablonok (Minimal, Standard, Financial, Brazilian, USA, Full)
  csak a felhasználói felület jelölőnégyzeteit töltik ki.
- **Egyéni minták** — legfeljebb 20 reguláris kifejezés vagy helyettesítő
  karakteres minta (`*` = legfeljebb 64 nem szóköz karakter, `?` = egy karakter).
  A találatok helyére `[CUSTOM_REDACTED]` kerül. Minden minta áthalad a
  `compilePiiCustomPattern()` függvényen
  (`src/shared/utils/piiCustomPatterns.ts`): legfeljebb 500 karakterből állhat, a
  jelzők csak `g i m s u` értékek lehetnek, sikeresen lefordíthatónak kell lennie,
  át kell mennie a `safe-regex` ellenőrzésen (katasztrofális visszalépés), és nem
  illeszkedhet üres sztringre vagy maszkolási helyőrzőre. A hibás mintát a
  rendszer mentéskor és teszteléskor is elutasítja, a hibás tárolt sort pedig
  futásidőben kihagyja a lefordítás helyett. Az egyéni minták csak akkor futnak,
  ha a maszkolás be van kapcsolva.
- **Észlelési számlálók** — típusonkénti darabszámok (soha nem az illeszkedő
  értékek), amelyek a memóriában vannak tárolva, és újraindításkor nullázódnak
  (`src/lib/pii/piiDetectionStats.ts`). Csak akkor növekednek, ha a maszkolás be
  van kapcsolva.

A beállítások a `key_value` táblában találhatók (`pii_settings` névtér,
`src/lib/db/piiSettings.ts`), és egy 1 másodperces gyorsítótáron keresztül
olvashatók. API:

| Metódus | Útvonal                  | Cél                                                                      |
| ------- | ------------------------ | ------------------------------------------------------------------------ |
| `GET`   | `/api/settings/pii`      | Jelző állapota, `enabledTypes`, `customPatterns`, észlelési számlálók    |
| `PUT`   | `/api/settings/pii`      | Az `enabledTypes` (`null` = összes) és/vagy `customPatterns` lecserélése |
| `POST`  | `/api/settings/pii/test` | Egy minta próbafuttatása egy legfeljebb 8 KB-os mintán; semmit nem tárol |

Mindhárom felügyeleti hitelesítést igényel, és Zod segítségével ellenőrzi a
törzset (`src/shared/validation/schemas/piiSettings.ts`).

### Promptinjektálás (`promptInjection.ts`)

Észleli a felhasználó által megadott tartalomban található rosszindulatú
struktúrákat, és kikényszeríti a konfigurált szabályzatot. A viselkedést
környezeti változók és konstruktorbeállítások vezérlik:

| Beállítás              | Környezeti változó                                                                                       | Alapértelmezés | Hatás                                                                                                                                                                                                                                    |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Engedélyezve           | `INPUT_SANITIZER_ENABLED`                                                                                | `true`         | `false` esetén a védelmi mechanizmus rövidzárral kilép.                                                                                                                                                                                  |
| Mód                    | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`         | Injektálási szabályzat: `block`, `warn` vagy `log`. (A `redact` a visszamenőleges kompatibilitás érdekében elfogadott, de **nem** távolítja el az injektált szöveget; a kérés személyesadat-átírását a `PII_REDACTION_ENABLED` vezérli.) |
| Blokkolási küszöbérték | `blockThreshold` beállítás / `INPUT_SANITIZER_BLOCK_THRESHOLD` (`INJECTION_GUARD_BLOCK_THRESHOLD` álnév) | `high`         | A blokkoláshoz szükséges minimális súlyosság. Az alapértelmezett beállításnál a közepes súlyosság csak megfigyelést eredményez.                                                                                                          |

**Módprioritás** (`getMode`): a hívó `options.mode` értéke →
az `INJECTION_GUARD_MODE` **adatbázisbeli funkciójelző-felülbírálása**
(Dashboard → Settings → Feature Flags) → az `INJECTION_GUARD_MODE` környezeti
változó → az `INPUT_SANITIZER_MODE` környezeti változó → `warn`. A vezérlőpulti
felülbírálás ezért elsőbbséget élvez a környezeti változókkal szemben, így a
Feature Flags felhasználói felület élőben vezérli a futó védelmet (újraindítás
nélkül). Az adatbázis olvasása hibabiztos: ha hiba történik, a védelem visszatér
a környezeti változókon alapuló viselkedéshez, felülbírálás hiányában pedig a
viselkedés megegyezik a kizárólag környezeti változókon alapuló feloldással.

Észlelési források:

1. A `sanitizeRequest()` függvény innen:
   `@/shared/utils/inputSanitizer` (a folyamat más részeiben is használt közös
   észlelőkészlet).
2. A beépített `DEFAULT_GUARD_PATTERNS` (jelenleg `system_override_inline` és
   `markdown_system_block`, mindkettő `high` súlyosságú).
3. A konstruktorbeállításokon keresztül átadott opcionális `customPatterns`
   (sztringek, reguláris kifejezések vagy `{ name, pattern, severity }`
   rekordok).

Amikor `mode === "block"` **és** legalább egy észlelés eléri a súlyossági
küszöbértéket, a `preCall` a következőt adja vissza: `{ block: true, message: "Request rejected:
suspicious content detected" }`. `warn`/`log` módban a védelmi mechanizmus naplózza az eseményt, de
engedélyezi a hívást. A megosztott `evaluatePromptInjection()` segédfüggvény szintén exportálva van
azon hívók számára, amelyeknek a registry használata nélkül kell kiértékelniük a promptokat.

**Vizsgálati korlát (v3.8.20):** az észlelő csak az összefűzött promptszöveg **első 16 KB-ját**
vizsgálja — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bájt) az
`src/shared/utils/inputSanitizer.ts` fájlban. Mind a `detectInjection()`, mind az
`evaluatePromptInjection()` alkalmazza a `slice(0, MAX_INJECTION_SCAN_BYTES)` műveletet a
minták bejárása előtt. Az injektálási utasítások a bemenet elejéhez közel találhatók, így ez
korlátozza a reguláris kifejezések CPU-/GC-terhelését a több száz KB-os hasznos adatoknál anélkül,
hogy gyengítené az észlelést (vö. #3932, #4041).

### Hitelesítőadat-maszkoló (`credentialMasker.ts`)

**Mindkét** szakaszban fut, az alapértelmezett lánc utolsó elemeként (`95` prioritással). Kitakarja
a jól ismert API-kulcs- és titkostoken-mintákat a kimenő hasznos adatból (üzenettartalom,
eszközhívási argumentumok, eszközeredmények) **és** a szolgáltató válaszából, így a
promptba beillesztett (vagy egy eszközeredmény által visszaadott) hitelesítő adat nem szivárog ki
sem a felsőbb rétegbeli szolgáltatóhoz, sem vissza az ügyfélhez.

- **Csak külön engedélyezéssel**, a személyazonosításra alkalmas adatok kitakarásával megegyező
  módon (a 20. szigorú szabályhoz kapcsolódóan): le van tiltva, kivéve, ha
  `settings.credentialRedactionEnabled === true` **vagy**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kikapcsolt állapotban a védelmi mechanizmus nem végez
  műveletet — soha nem blokkol és nem ír át semmit.
- A `redactCredentials()` bejárja a teljes hasznosadat-/válaszfát (`walkValue()`,
  prototípus-szennyezéssel szemben biztonságos, a `WeakSet` révén ciklusbiztos), és a találatokat
  egy `[REDACTED:<type>]` helyőrzőre cseréli, miközben csak a ténylegesen módosult ágakat klónozza.
- A `CREDENTIAL_PATTERNS` lefedi az LLM-szolgáltatók kulcsait (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), a VCS-/SaaS-tokeneket (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), a fizetési kulcsokat (Stripe, Square), a felhőszolgáltatási
  kulcsokat (AWS-hozzáférési kulcs, Twilio, SendGrid, Mailgun), a privát kulcsokat/JWT-ket,
  a hitelesítő adatokat tartalmazó kapcsolati karakterláncokat (`mongodb://user:pass@...` stb.), valamint
  egy általános `Authorization`/`x-api-key`/`api-key`/`apikey` fejlécérték-mintát.
  A fejlécszerű kulcsok (`authorization`, `x-api-key`, `api-key`,
  `apikey`) strukturálisan vannak kitakarva (csak az érték; a séma előtagja, például
  `Bearer `/`Basic ` megmarad), nem pedig az általános szöveges reguláris kifejezéssel.
- A védelmi mechanizmus soha nem blokkol; csak átír (`modifiedPayload` /
  `modifiedResponse`) és metaadatokkal lát el (`meta.credentialsRedacted`, `meta.count`).

Regresszióvédő teszt: `tests/unit/credential-masker-guardrail.test.ts`.

## Alapszerződés (`base.ts`)

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
  block?: boolean; // true esetén rövidre zárja a láncot
  message?: string; // blokkoláskor megjelenített üzenet
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // a preCall adja vissza a kérés átírásához
  modifiedResponse?: TValue; // a postCall adja vissza a válasz átírásához
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

Egy védőkorlát a „nincs változás” állapotot `void`, `{}` vagy
`{ block: false }` visszaadásával jelzi. A `modifiedPayload`/`modifiedResponse`
visszaadása lecseréli a láncon továbbhaladó értéket a soron következő
védőkorlátok számára. A `signal?: AbortSignal` továbbítja a hívó életciklusát a
védőkorlátoknak. A kérés megszakítása a szándékos, hibánál nyitott kivétel: a
médiakapcsolók leállítják a munkát és elvégzik a takarítást anélkül, hogy
visszaállítanák a nyers médiát egy olyan cél számára, amelyről ismert, hogy nem
támogatja azt.

## Nyilvántartó (`registry.ts`)

Az egyke példányként működő `guardrailRegistry` a következőket teszi elérhetővé:

- `register(guardrail)` — hozzáad egy védőkorlátot (vagy lecseréli azt a
  normalizált neve alapján), majd növekvő `priority` szerint újrarendezi őket.
- `clear()` / `list()` — adminisztrációs segédfüggvények.
- `runPreCallHooks(payload, context)` — végiglépked az aktív védőkorlátokon,
  továbbadja a módosított adatot a `modifiedPayload` használatával, és az első
  `block: true` értéknél leáll.
- `runPostCallHooks(response, context)` — ugyanez a folyamat a válaszoldalon.
- `resetGuardrailsForTests({ registerDefaults })` — törli az állapotot, és
  opcionálisan újraregisztrálja az alapértelmezett elemeket a tesztek tiszta
  elkülönítése érdekében.

Mindkét futtató `{ blocked, payload|response, results, guardrail?, message? }`
értéket ad vissza, ahol a `results` egy `GuardrailExecutionResult` rekordokból
álló tömb, amely védőkorlátonként tartalmazza a `blocked`, `skipped`, `modified`,
`error` és `meta` mezőket, így hasznos a nyomkövetéshez.

### Védőkorlátok kérésenkénti letiltása

A `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` összegyűjti azon
védőkorlátnevek ismétlődésmentes listáját, amelyeket az aktuális kérésnél ki kell
hagyni. Öt csatorna áll rendelkezésre, amelyeket a rendszer ebben a sorrendben
olvas be és egyetlen listába egyesít (az ismétlődések eltávolításakor az első
előfordulás marad meg):

1. `apiKeyInfo.disabledGuardrails`
2. A kérés törzsének felső szintű `disabledGuardrails` mezője
3. A kérés törzsének `metadata.disabledGuardrails` mezője (csak akkor, ha a `metadata` egy objektum)
4. Az `x-omniroute-disabled-guardrails` fejléc
5. Az örökölt `x-disabled-guardrails` fejléc

A rendszer mind az öt csatornát egyesíti, beleértve a két fejlécet is: az
`x-omniroute-disabled-guardrails` és az `x-disabled-guardrails` együttes
elküldése a listáik uniójában szereplő elemek kihagyását eredményezi, és egy üres
modern fejléc többé nem rejti el az örököltet
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), javítva ebben:
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Az értékek lehetnek karakterláncokból álló tömbök vagy vesszővel elválasztott
karakterláncok; a rendszer levágja a neveket, és kisbetűs kebab-case formára
normalizálja őket (`pii_masker` → `pii-masker`), az üres bejegyzéseket pedig
eldobja. Az eredmény a `context.disabledGuardrails` használatával kerül a
nyilvántartóhoz, amely kihagyja az egyező védőkorlátokat (`skipped: true` a
`results` tömbben).

A letiltási lista csak a **nyilvántartót** érinti. A promptinjektálás elleni
`block` mód kötelező határvonal: az injektálásvédelmi köztesréteg
(`src/middleware/promptInjectionGuard.ts`) hívó által vezérelhető letiltási lista
nélkül hívja meg az `evaluatePromptInjection()` függvényt (az általa korábban
végrehajtott, de hatástalan `resolveDisabledGuardrails({ body })` hívást
eltávolították ebben:
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), így a
`prompt-injection` védőkorlátot letiltó kérés `block` módban továbbra is
elutasításra kerül. Ez szándékos működés. A letiltási csatornákat a hívó
vezérli (a kérés törzse, a metaadatok és a fejlécek), és a hívónak nem szabad
képesnek lennie kikapcsolni az üzemeltető által beállított biztonsági
vezérlőelemet
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). A
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412) által
bevezetett fejlécunió csak azt módosítja, hogy a rendszer mely nyilvántartott
védőkorlátokat hagyja ki; nem teszi lehetővé, hogy egy kliens megkerülje a
köztesréteget. A kötelező, kulcsonkénti és csoportonkénti
védőkorlát-szabályzatokat a v4 RFC
[#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) követi nyomon.
Lásd: [Lefedettség és korlátok](#coverage-and-limits).

## Végrehajtási sorrend

A `src/sse/handlers/chat.ts` és az `open-sse/handlers/chatCore.ts` fájlon áthaladó minden kérésnél (a [Lefedettség és korlátozások](#coverage-and-limits) alatt felsorolt chatútvonal-család esetén):

1. A `resolveDisabledGuardrails(...)` összeállítja a kihagyási listát az API-kulcsból, a törzsből és a fejlécekből.
2. A `guardrailRegistry.runPreCallHooks(body, ctx)` növekvő prioritási sorrendben futtatja a védőkorlátokat:
   - A letiltott védőkorlátokat `skipped` állapottal rögzíti.
   - Minden védőkorlát `preCall` metódusa átírhatja a hasznos adatot a `modifiedPayload` használatával.
   - Az első `block: true` rövidre zárja a láncot, és a kezelő védőkorlát általi elutasítási választ ad vissza.
3. A (potenciálisan átírt) hasznos adat a kombinált útválasztásba, majd a külső szolgáltatóhoz történő továbbításba kerül.
4. **Csak nem streamelt válaszoknál:** a válasz összeállítása után a `guardrailRegistry.runPostCallHooks(...)` ugyanazt a láncot futtatja le a válaszon. Az itt előforduló `block: true` elveti a külső szolgáltató válaszát, és HTTP 400 választ ad vissza. A streamelt válaszok ezt a lépést teljesen kihagyják.

A kivételt dobó védőkorlátokat `error: <message>` értékkel rögzíti, és a `logger.warn` használatával naplózza a rendszer, de a lánc futása folytatódik — a kialakítás szándékosan nyitott hibakezelést alkalmaz.

## Lefedettség és korlátozások

A védőkorlát-regisztrációs adatbázis csak a chat-folyamatba van bekötve. Ezeket a korlátozásokat a `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` és a `tests/unit/guardrail-pipeline-characterization.test.ts` tesztek rögzítik; a viselkedés megváltozásakor ezeket a teszteket tudatosan frissítse.

### Hol futnak a hookok

| Hook / vezérlőelem                   | Hol fut                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                    | A `handleChat` (`src/sse/handlers/chat.ts`) által kezelt kérések: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (és `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, valamint a Telegram chatproxy. Továbbá a vezérlőpult `/api/guardrails/test` tesztvégpontja. A hívás előtti blokkolás HTTP 400 választ ad vissza. |
| `runPostCallHooks`                   | Csak **nem streamelt** chatválaszok (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). A streamelt válaszok soha nem jutnak el idáig.                                                                                                                                                                                                                                                                                                              |
| Streamelt PII                        | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), amelyet a `streamingPipeline.ts` illeszt be a folyamatba, amikor a `PII_RESPONSE_SANITIZATION` be van kapcsolva. Ez nem védőkorlát, ezért a letiltási csatornák nincsenek rá hatással.                                                                                                                                                                                                    |
| Injekcióvédelmi middleware (örökölt) | Minden promptot tartalmazó `/v1` útvonal, beleértve a chatútvonal-családot is (lásd az [útvonalak lefedettségét](#injection-guard-route-coverage--red-team-phase-8--block-d)). Csak promptinjekció.                                                                                                                                                                                                                                                     |

### Mi nincs lefedve

- **Média-, beágyazási és adatútvonalak** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) soha nem jutnak el a regisztrációs adatbázisig. Ezeken
  nem fut PII-maszkolás, hitelesítőadat-maszkolás vagy modalitási híd. Az egyetlen
  ellenőrzésük az örökölt injekcióvédelmi middleware.
- A **streamelt válaszokon** nem futnak hívás utáni védőkorlátok: nincs hívás utáni `pii-masker` vagy
  `credential-masker`, és nincs hívás utáni blokkolás. Csak a streamelt PII-
  átalakítás érvényesül (amikor a `PII_RESPONSE_SANITIZATION` be van kapcsolva). A streamelt
  válaszban visszaküldött hitelesítő adat nincs kitakarva.
- **Letiltási csatornák és a middleware viszonya (szándékos kialakítás):** a middleware
  a saját `evaluatePromptInjection()` hívásával értékeli ki a promptinjekciót, anélkül,
  hogy átadna bármilyen, a hívó által vezérelt letiltási listát. A `block` mód kötelező
  határvonal, amelyet a hívó által vezérelt letiltások még a chatútvonal-család esetén sem kerülhetnek meg
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). A
  `prompt-injection` letiltása csak a regisztrációs adatbázis védőkorlátját hagyja ki.

### Mi látja a választ a hívás utáni szakasz előtt

A nem streamelt útvonalon a sorrend a következő: memóriakinyerés → beépített eszköz
végrehajtása → hívás utáni védőkorlátok → kilépés hívás utáni blokkoláskor → tárolás a szemantikai gyorsítótárban.

- A **memóriakinyerés** és az **eszközvégrehajtás** még azelőtt látja a választ, hogy a hívás utáni
  védelmi mechanizmusok átírhatnák vagy blokkolhatnák azt. A
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) óta a memóriakinyerés
  a kinyert szöveget a `sanitizePII` függvényen futtatja át, amikor a
  `PII_RESPONSE_SANITIZATION` be van kapcsolva (streameléses és nem streameléses esetben egyaránt), de a
  hívás utáni ellenőrzés által később blokkolt választ addigra már felkínálták a memóriának és az
  eszközöknek.
- A **szemantikus gyorsítótár** a hívás utáni ellenőrzést követően tárolja a választ, így az átírt
  választ menti, a blokkolt válaszok pedig soha nem kerülnek gyorsítótárba. A gyorsítótár bejegyzései
  API-kulcsonként vannak kulcsolva.

## Konfiguráció

A beépített védelmi mechanizmusok által beolvasott környezeti változók:

| Változó                               | Használja                        | Hatás                                                                                                                              |
| ------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`               | A `false` érték teljesen letiltja az észlelést.                                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`               | Injektálási szabályzat: `warn`, `block` vagy `log`. A korábbi `redact` érték nem írja át az injektált szöveget.                    |
| `INJECTION_GUARD_MODE`                | `prompt-injection`               | Az injektálás elleni védelem módja; egyben egy adatbázisbeli funkciójelző, amely **felülírja** a környezeti változókat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`               | A `MODE=block` által elutasított minimális súlyossági szint: `high` (alapértelmezett), `medium` vagy `low`.                        |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`               | Az `INPUT_SANITIZER_BLOCK_THRESHOLD` korábbi álneve.                                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`                     | `true` érték esetén a kérésben szereplő személyes adatok ki lesznek takarva (az injektálási módtól függetlenül).                   |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (továbbfeldolgozás) | A válaszoldali maszkoló viselkedését szabályozza.                                                                                  |

A Modality Bridge védelmi mechanizmusai futásidőben az adatbázis-alapú beállítástárból (`getSettings()`) olvassák be a konfigurációt, nem környezeti változókból. A Vision elsődleges kulcsai:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` és
`modalityBridgeCacheMaxEntries`. A korábbi
`visionBridge*` kulcsok csak a dokumentált, egy cikluson át elérhető olvasási tartalékmegoldásként támogatottak; az irányítópult az elsődleges kulcsokat írja. Az alapértelmezések és a tartalékérték-feloldó a `src/shared/constants/modalityBridgeDefaults.ts` fájlban található, míg a korábbi konstansok a `src/shared/constants/visionBridgeDefaults.ts` fájlban maradtak meg.

Az Audio a `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` és `modalityBridgeAudioMaxClips` kulcsokat, valamint a megosztott
`modalityBridgeCache*` beállításokat használja. Az Audio esetében nincs korábbi kulcsokra épülő tartalékmegoldás, mivel ezeket a kulcsokat a Modality Bridge sémával együtt vezették be.

A Video a `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` és
`modalityBridgeVideoTimeout` kulcsokat, valamint a megosztott `modalityBridgeCache*` beállításokat használja.
Alapértelmezés szerint le van tiltva, mert az FFmpeg/ffprobe opcionális üzemeltetési függőségek, a képkockák feliratozása pedig növeli a késleltetést és a modell használati költségét.

## Egyéni védőkorlátok

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

Lépések:

1. Hozza létre a `BaseGuardrail` osztályt kiterjesztő `src/lib/guardrails/myGuardrail.ts` fájlt.
2. Implementálja a `preCall` és/vagy a `postCall` metódust.
3. Regisztrálja importáláskor (a `registerDefaultGuardrails` használatával), vagy
   futásidőben hívja meg a `guardrailRegistry.register(...)` metódust — a regisztrációs
   jegyzék lecserél minden korábbi védőkorlátot, amelynek ugyanaz a normalizált neve.
4. Adjon hozzá teszteket a `tests/unit/` könyvtárban (meglévő példák:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tesztelés

A tesztek között használja a `resetGuardrailsForTests()` függvényt, hogy ismert
állapotból induljon. Üres regisztrációs jegyzékkel való induláshoz adja át a
`{ registerDefaults: false }` értéket, és csak a tesztelt védőkorlátokat
regisztrálja. A Vision Bridge támogatja a függőségek injektálását
(`deps.getSettings`, `deps.callVisionModel`); az Audio Bridge ezzel egyenértékű
illesztési pontokat biztosít a beállításokhoz, képességekhez, az STT-modell
kiválasztásához, a hitelesítő adatok ellenőrzéséhez és az átíráshoz. A tesztek
így adatbázis- vagy hálózati hozzáférés nélkül is végrehajthatják mindkét
folyamatot.

## Lásd még

- `src/lib/guardrails/` — implementáció
- `src/shared/utils/inputSanitizer.ts` — a promptinjektálás észlelését és a személyazonosításra alkalmas adatok maszkolását biztosító megosztott detektor
- `src/shared/constants/visionBridgeDefaults.ts` — a Vision Bridge alapértelmezései és a kényszerített bridge-modellek listája
- `src/shared/constants/modalityBridgeDefaults.ts` — a Vision/Audio megosztott futásidejű alapértelmezései
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonális réteg (áramkör-megszakító, várakozási időszakok)
- `docs/reference/ENVIRONMENT.md` — a környezeti változók teljes referenciája

## Az injektálás elleni védelem útvonal-lefedettsége és red-team tesztelése (8. fázis · D blokk)

Az injektálás elleni védelem (`createInjectionGuard` / `withInjectionGuard`) minden,
felhasználói promptokat fogadó útvonalat lefed. Figyelembe veszi az
`INJECTION_GUARD_MODE` beállítást (alapértelmezett `warn` = csak naplózás;
`block` = HTTP 400 `SECURITY_001` választ ad vissza).

| Típus            | Útvonalak                                                                                                                                            | Alapértelmezett mód |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Szöveg (meglévő) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Generatív        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Adat             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

A szövegkinyerés (`extractMessageContents`) lefedi a `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőket.

**Red-team tesztelés (éjszakánként, `nightly-llm-security.yml`):** a promptfoo
ellenőrzi, hogy az egyes útvonalak blokkolják-e az OWASP-LLM korpuszt
`INJECTION_GUARD_MODE=block` módban; a garak próbákat futtat (titkos kulcs nélkül
kihagyja őket). A konzisztencia érdekében a `moderations` is szerepel. A
blokkolási mód kötelező határvonal: az `evaluatePromptInjection()` figyelmen
kívül hagyja a middleware által átadott, kérésenkénti letiltási listát, ezért a
`disabledGuardrails` **nem** mentesít egyetlen útvonalat sem ez alól
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Az éjszakai munkafolyamat (`.github/workflows/nightly-llm-security.yml`, cron +
kézi indítás) két feladatot tartalmaz:

- **`promptfoo-guard` (blokkoló)** — végrehajtja a `promptfoo eval -c promptfooconfig.yaml`
  parancsot `INJECTION_GUARD_MODE=block` beállítással. Minden támadó jellegű
  teszteset (például „hagyj figyelmen kívül minden korábbi utasítást…”,
  DAN-stílusú jailbreak-kísérletek) ellenőrzi, hogy a válasz tartalmazza-e az
  `error.code === "SECURITY_001"` értéket, vagyis hogy a védelem ténylegesen
  elutasította-e a kérést.
- **`garak` (tájékoztató jellegű)** — a garak `--probes promptinject,dan,leakreplay`
  próbáit futtatja egy helyi OmniRoute-példányon (`http://localhost:20128/v1`).
  Futtatása egy szolgáltatói titkos kulcstól (`PROMPTFOO_PROVIDER_KEY`) függ;
  annak hiányában szabályosan kihagyja a feladatot, és `|| true` utótaggal
  rendelkezik, így jelentést készít anélkül, hogy meghiúsítaná a CI-folyamatot.

A védelmi segédfüggvény (`createInjectionGuard` / `withInjectionGuard`)
lefedettsége minden promptot fogadó `/v1` útvonalra kiterjed; a prompt szövegét
az `extractMessageContents()` nyeri ki a
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mezőkből
a `src/shared/utils/inputSanitizer.ts` fájlban.
