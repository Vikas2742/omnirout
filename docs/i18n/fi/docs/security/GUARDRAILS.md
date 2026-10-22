# Guardrails (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Totuuden lähde:** `src/lib/guardrails/`
> **Viimeksi päivitetty:** 2026-10-17 — v3.8.52 (lisätty [Kattavuus ja rajoitukset](#coverage-and-limits):
> mitkä reitit ja vastauspolut koukut tavoittavat, yhdistetyt käytöstäpoisto-otsakkeet (#16412), injektion
> estotila pakollisena rajana (#16413) sekä mikä näkee vastauksen ennen kutsun jälkeistä vaihetta)

Suojakaiteet toteuttavat turvallisuus-, käytäntö- ja sisältömuunnokset OmniRouten
ja ylävirran palveluntarjoajien välisellä rajalla. Kukin suojakaide voi tarkastaa
(ja valinnaisesti hylätä, muuntaa tai merkitä) pyyntöjen tietosisältöjä (`preCall`)
ja ylävirran vastauksia (`postCall`).

Järjestelmä on **häiriöissä salliva**: jos suojakaide heittää poikkeuksen suorituksen
aikana, rekisteri kirjaa virheen ja jatkaa seuraavaan suojakaiteeseen sen sijaan,
että pyyntö epäonnistuisi. Estäminen on aina nimenomainen päätös (`block: true`),
ei koskaan vahinko. Ainoa poikkeus on keskeytetty pyyntö: kun kutsujan `signal`
on keskeytetty, poikkeuksen heittävä suojakaide hylkää koukun suorituksen sen
ohittamisen sijaan.

Koukkuja **ei** suoriteta jokaisella reitillä tai jokaiselle vastaukselle. Lue
[Kattavuus ja rajoitukset](#coverage-and-limits), ennen kuin käytät suojakaidetta
turvallisuuskontrollina.

## Sisäänrakennetut suojakaiteet

Rekisteri lataa tuonnin yhteydessä automaattisesti kuusi suojakaidetta
prioriteettijärjestyksessä (katso `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteetti | Nimi                | Vaihe(et)      | Tiedosto              |
| ------------ | ------------------- | -------------- | --------------------- |
| `5`          | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`          | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`          | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`         | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`         | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`         | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Pienemmät prioriteettiluvut suoritetaan **ensin**.

### Näkösilta (`visionBridge.ts`) — Modaliteettisilta PR-1

GLM 5.3 -perusmallilla ja malleilla `glm-5.3-{low,high,max}` on eksplisiittinen
`supportsVision:false`-rekisteri-/määritysmetatieto. GLM 5.3 Flash -variantit
säilyvät natiivisti näköä tukevina malleina. Claude Coden `/v1/messages`-reitti
siirtyy jaettuun `handleChat`-kutsua edeltävään suojakaideketjuun **ennen**
Claude–OpenAI-muunnosta; sisäkkäiset `Read`-työkalutulosten kuvat on kuvailtava
tai käsiteltävä, ennen kuin muunnos nostaa ne OpenAI:n `image_url`-sisällöksi
(#17069).

Sieppaa **näköä tukemattomille malleille** suunnatut kuvia sisältävät pyynnöt ja
joko reitittää koko pyynnön uudelleen näköä tukevalle mallille tai korvaa
kuvaosuudet määritettävän näkömallin tuottamilla tekstikuvauksilla ennen
ylävirran kutsua. Näin vain tekstiä tukevat palveluntarjoajat voivat käsitellä
multimodaalisia tietosisältöjä läpinäkyvästi.

Kulku:

1. Ohita, jos kohdemalli tukee jo näköä (ellei se sisälly pakotettujen
   siltamallien luetteloon `isVisionBridgeForcedModel`).
2. Poimi kuvaosuudet kutsulla `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), joka delegoi **yhtenäiselle median
   tunnistimelle** `detectMediaParts()` tiedostossa `open-sse/utils/mediaParts.ts`
   — tämä on yhdistelmäyhteensopivuussuodattimen kanssa jaettu ainoa
   totuuden lähde. Poiminta on sallittujen muotojen luetteloon rajattu niihin
   muotoihin, jotka `replaceImageParts` voi liittää takaisin
   (poiminta↔korvaus-sopimus): OpenAI `image_url`, Anthropicin base64
   `source.type:"base64"`, Anthropicin URL `source.type:"url"` ja Responses
   API:n `input_image`. Myös Claude Coden `tool_result.content`-sisällön ja
   Responses-työkalutulosteiden sisällä olevat vastaavat kuvat poimitaan ja
   korvataan alkuperäisillä poluillaan; vain ilmaisimen sisältävät muodot
   kuuluvat yhdistelmäsuodattimelle, eikä niitä poimita.
   Ohita, jos kuvia ei löydy.
3. Ratkaise ajonaikainen määritys kutsulla `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): uudet `modalityBridge*`-
   asetusavaimet ovat ensisijaisia; vanhat `visionBridge*`-avaimet säilyvät
   **yhden syklin varajärjestelynä** (palautusikkuna). Ohita ennen median
   läpikäyntiä, kun silta on poistettu käytöstä.
4. Tilanvalitsin (`modalityBridgeVisionMode`, katso alla oleva taulukko) päättää
   uudelleenreitityksen ja kuvailun välillä. Uudelleenreititys palauttaa
   `modifiedPayload`-arvon, jossa vain `model` on vaihdettu, sekä metatiedot
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kuvailupolku: rajaa kuvien määrä arvoon `maxImages`, muodosta tehtävän
   huomioiva kehote, tarkista kuvailuvälimuisti, kutsu näkömallia **rinnakkain**
   (`Promise.allSettled`) ja lisää kuvien tilalle
   `[Image N]: <description>`-tekstiosat. Epäonnistunut kuvailu tuottaa arvon
   `null`: raakakuva säilytetään tuntemattomille tai näköä tukeville kohteille
   (#4012), mutta **vahvistettu vain tekstiä tukeva suora kohde** tai
   näkökyvytön yhdistelmä saa eksplisiittisen
   `(unavailable — no vision-capable provider connected)`-tekstipaikkamerkin
   jokaiselle kuvailemattomalle kuvalle, mukaan lukien osittaiset
   epäonnistumiset ja kuvailukutsujen enimmäismäärän ylittävät kuvat (#17069).
   Nykyinen kaikkien epäonnistuneiden yhdistelmäkuvailun varajärjestely säilyy
   käytössä (#8430).
6. Palauta `modifiedPayload` ja metatiedot (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Tilanvalitsin (`modalityBridgeVisionMode`)

| Tila       | Oletus | Toiminta                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | Vanha heuristiikka säilyy muuttumattomana (#6640/#7204): muut kuin yhdistelmämallit ja `auto/`-mallit ohjataan parhaalle näkömallille, ellei alkuperäisellä mallilla jo ole käyttökelpoisia tunnistetietoja (jolloin kuvaus luodaan); yhdistelmäkohteet luovat aina kuvauksen.                                                                                  |
| `describe` |        | Luo aina kuvaus — uudelleenohjauslohko ohitetaan kokonaan, ja käyttäjän valitsema malli vastaa aina.                                                                                                                                                                                                                                                            |
| `reroute`  |        | Pakota uudelleenohjaus: tunnistetiedot sisältävän mallin säilyttävä tarkistus ohitetaan. Uudelleenohjauksen **kohteen** tunnistetietojen tarkistus on edelleen voimassa — jos käyttökelpoista näkökohdetta ei ole, silta estää pyynnön selkeällä virheellä sen sijaan, että se loisi kuvauksen tai lähettäisi raakakuvat vain tekstiä käsittelevälle kohteelle. |

Pakotetut tilat keskeyttävät käsittelyn **ennen** automaattisen heuristiikan
suorittamista; `auto`-toiminta on tavutasolla identtinen PR-1:tä edeltävän
suojauksen kanssa.

#### API-avaimen käyttöalue (`visionBridgeKeyScope.ts`)

Kun kutsujan API-avain rajoittaa kohteita `allowedConnections`, kiintiövarantoja
(`allowedQuotas`) tai malleja (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), silta valitsee
uudelleenohjaus- ja kuvausmalleiksi vain malleja, joita avain saa käyttää, ja
vain yhteyksistä, joita avain saa käyttää. Kuvauskutsu kulkee tämän jälkeen aina
OmniRoute-itsepalautussilmukan kautta käyttäen `x-omniroute-self-loop-key-id`-otsaketta,
jotta vastaanottava keskustelupyyntö panee kyseisen avaimen yhteys- ja
mallikäytännöt uudelleen täytäntöön. `enforceApiKeyPolicy()` huomioi tämän
otsakkeen vain yhdessä itsepalautussilmukan bearer-tunnisteen kanssa, joten se
voi ainoastaan kaventaa käyttöoikeuksia, ja tunniste, jota ei voida selvittää,
hylätään.

Jos avaimelle ei ole sallittu mitään näkömallia, **vahvistettu vain tekstiä
käsittelevä kohde** hylkää kuvapyynnön paikallisesti selkeällä HTTP 400
-vastauksella sen sijaan, että kuvatavut välitettäisiin niitä käsittelemään
kykenemättömälle ylävirran palvelulle (#17069). Kohteille, joiden näkökyvykkyys
on tuntematon tai natiivi, kuvauspolku säilyttää aiemman avoimesti sallivan
toimintansa (metatiedot `{ skipped: true, reason: "no_permitted_vision_model" }`).
Pyynnöt ilman avainta sekä avaimet ilman näitä rajoituksia toimivat täsmälleen
kuten aiemmin.

#### Tehtävätietoinen kuvauskehote (`modalityBridgeVisionTaskAware`)

Oletuksena **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisää
**viimeisimmän käyttäjäviestin** tekstin (katkaistuna 500 merkkiin)
peruskuvauskehotteeseen, jolloin kuvaus kohdistuu siihen, mitä käyttäjä
todellisuudessa pyysi (codex-vision-proxy-malli), ja näkömallia pyydetään
litteroimaan näkyvä teksti. Kun asetus on pois käytöstä — tai käyttäjän tekstiä
ei ole — peruskehotetta käytetään muuttamattomana.

Kuvaavan itsepalautussilmukan oma OpenAI-yhteensopiva pyyntö (`callVisionModelSingle()`
tiedostossa `visionBridgeHelpers.ts`) pyytää aina `image_url.detail: "high"` —
ehdottomasti jokaiselle kutsujalle ja palveluntarjoajalle, eikä toiminta riipu
mistään asiakkaan signaalista. Pienen tarkkuuden näytteistys heikentää
tekstintunnistuksen tarkkuutta juuri siinä tekstin litterointitehtävässä, jota
tämä kehote pyytää, joten itse kuvauskutsu pyytää aina suuren tarkkuuden
riippumatta alkuperäisen saapuvan pyynnön käyttämästä tarkkuustasosta. Tämä
vaikuttaa vain sisäisen kuvauspyynnön runkoon; se ei muuta sitä, miten OmniRoute
välittää kutsujan oman `image_url.detail`-arvon ensisijaisessa pyynnössä —
kyseinen oletus asetetaan erikseen ja vain tunnistetuille OpenCode-asiakkaille
funktiossa `defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`).
Kuvaavan itsepalautussilmukan Anthropic-siirtomuotohaara ei sisällä `detail`-kenttää,
eikä kumpikaan oletus vaikuta siihen.

#### Kuvauksen tulosteen raja (`modalityBridgeVisionMaxChars`)

| Avain                          | Oletus | Alue              |
| ------------------------------ | ------ | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`    | `0` tai 100–50000 |

`0` (oletus) tarkoittaa, että **rajaa ei ole** — funktion
`callVisionModel()` palauttama kuvaus välitetään muuttamattomana, mikä säilyttää
nykyisen toiminnan. Mikä tahansa arvo alueella 100–50000 katkaisee kuvauksen ja
lisää sen loppuun `…`-merkin ennen kuin kuvaus liitetään takaisin muodossa
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` tiedostossa
`src/lib/guardrails/visionBridge.ts`). Suurenna tätä yksityiskohtaisissa
tekstintunnistustehtävissä, joissa jatkokäsittelymalli tarvitsee koko
litteroinnin; pienennä sitä rajoittaaksesi paljon tekstiä tuottavien näkömallien
tokenien käyttöä. Hallintapaneelin kenttä sijaitsee Vision-välilehden
Advanced-paneelissa (`modality-bridge-max-chars` tiedostossa
`ModalityBridgeVisionTab.tsx`) ja nostaa kaikki arvot väliltä 1–99
vähimmäisarvoon 100 jättäen nimenomaisen `0`-arvon muuttamattomaksi — `0` on
itsessään kelvollinen Zod-arvo
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ei vain
asettamatonta arvoa tarkoittava oletus.

#### Kuvausvälimuisti (`modalityBridge/bridgeCache.ts`)

Muistissa oleva LRU- ja TTL-välimuisti kuvausten tuloksille, jaettuna koko
prosessin laajuisesti. Avain = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
pituusetuliitteisellä kehystyksellä (ei kenttien rajojen törmäyksiä).
Mallikomponentti on **määritetty** siltamalli, ei tosiasiassa vastannut malli —
`callVisionModel` voi käyttää sisäisesti varamallia, ja avainten muodostaminen
yrityskohtaisesti pirstaloisi välimuistin. Epäonnistuneita kuvauksia ei koskaan
tallenneta välimuistiin. Asetukset:

| Avain                           | Oletus | Alue    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Etäkuvien normalisointi (itseensä ohjautuva kuvaus-/base64-haku)

Kun silta noutaa **etäkuvan** itse — Anthropicin kuvausta varten tehtävä
itsekutsu ja claude-wire-muodon base64-muunnos
(`ensureBase64ImagesForClaudeWire`), jotka molemmat käyttävät tiedoston
`visionBridgeHelpers.ts` funktiota `fetchRemoteImageAsDataUri()` — tuloksena saatu data-URI
välitetään funktion `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) kautta ennen sen upottamista kuvamallin
pyyntöön. Liian suuret kuvat pienennetään niin, että niiden **pitkä sivu on 2048px** (vastaten
koon ylärajaa, jota OpenAI/Anthropic jo käyttää palvelinpuolella), mikä vähentää
lähetettävien tavujen määrää ja viivettä muuttamatta sitä, mitä kuvamalli näkee. Koon muuttamiseen
käytetään `sharp`-pakettia, joka ladataan dynaamisella tuonnilla: alustalla, jolla sen natiivin
binäärin lataaminen epäonnistuu, `normalizeDataUri()` **ei koskaan heitä poikkeusta** — se palauttaa
alkuperäiset tavut sellaisinaan, joten kuvaus-/base64-muunnoksen
polku toimii aina. Myös muut kuin kuvatavut (haku, joka ei palauttanut
purettavissa olevaa kuvaa) välitetään muuttamattomina. Tämä normalisointi
rajataan kuviin, jotka silta noutaa omaa itsekutsuaan varten — sitä ei koskaan
sovelleta kutsujan sellaisenaan välitettävään raakakuormaan, mikä noudattaa
vain erikseen käyttöön otettavien muutosten periaatetta (tiukka sääntö nro 20).

#### Asetusskeema ja migraatio

Uudet `modalityBridge*`-avaimet validoidaan Zodilla skeemassa `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, kolmen avaimen `modalityBridgeCache*`-ryhmä sekä
Audio Bridgen käyttämä `modalityBridgeAudio*`-ryhmä. Migraatio
`141_modality_bridge_settings.sql` kopioi olemassa olevat vanhat
`visionBridge*`-arvot vastaaviin uusiin avaimiin (idempotentisti eikä koskaan korvaa
ylläpitäjän asettamaa `modalityBridge*`-arvoa); vanhat avaimet hyväksytään edelleen
lukemisen varavaihtoehtona yhden julkaisusyklin ajan.

#### Läpinäkyvyysotsake ja tilastot

Kuvauksella muunnetuissa vastauksissa on otsake
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(jonka rakentaa `buildModalityBridgeHeader()` tiedostossa `modalityBridge/bridgeStats.ts`
ja jonka lisää `withModalityBridgeHeader()` tiedostossa `src/sse/handlers/chatHelpers.ts`).
Uudelleenreititetyt pyynnöt **eivät** saa otsaketta — hyötykuormaa ei muutettu ja mallin
vaihto näkyy jo vastauksen rungon `model`-kentässä.

`GET /api/modality-bridge/stats` (hallinnan todennus, sama taso kuin
`GET /api/settings`) palauttaa muistissa olevat modaliteettikohtaiset laskurit
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` modaliteeteille `vision`, `audio` ja
`video`. `averageLatencyMs` käyttää nimittäjänä `latencySamples`-arvoa eikä kaikkia
yrityksiä; toiminto, jolle ei ole ajoitustietoa, ei luo keinotekoista nollan millisekunnin
näytettä. `bridged` säilyy taaksepäin yhteensopivana onnistuneiden
muunnosten aliaksena; epäonnistuneet yritykset eivät kasvata sitä.
Laskurit nollautuvat suunnitellusti prosessin käynnistyessä uudelleen
(telemetriaa, ei kirjanpitoa).

#### Hallintapaneelin määritykset

Erillinen hallintapaneelisivu on
`/dashboard/settings/modality-bridge`. Sen URL-osoitteella käytettävät välilehdet `Vision`, `Audio`
ja `Video` säilyttävät kyselyparametrit vaihtaessaan `tab`-arvoa.
Vision-välilehdellä voi määrittää käyttöönoton, tilan, mallin valinnan (mukaan lukien automaattisen
oletusarvon), tehtävätietoisen kehotteen, edistyneet aikakatkaisu-, kuva-, kuvauspituus- ja
välimuistirajat sekä tarkastella suorituksenaikaisia
laskureita ja suorittaa suojatun esimerkkipyynnön. Myös Audio-välilehti on käytössä: siinä voi määrittää
käyttöönoton, vain STT-mallit sisältävän mallivalitsimen automaattisella vaihtoehdolla sekä aikakatkaisu- ja leikkeen enimmäispituusrajat, tarkastella äänen
laskureita ja suorittaa `input_audio`-esimerkkitestin. Video-välilehti on toiminnallinen: se raportoi
FFmpeg-/ffprobe-ajoaikaisen tilan — yhden neljästä nimenomaisesta käyttöliittymätilasta (`unknown`, kun
tarkistus on käynnissä tai sitä ei voitu suorittaa, `restricted`, kun hallintapaneelin
isäntä ei ole takaisinkytkentäosoite ja tarkistus ohitetaan asiakaspuolella, `unavailable`, kun tarkistus
on tehty ja komponenttien puuttuminen vahvistettu, tai `available` FFmpeg-/ffprobe-versioiden kanssa) — tallentaa
käyttöönotto-, malli-, ruutu-, video- ja aikakatkaisurajat, suodattaa mallivalitsimeen vain kuvakykyiset
mallit ja näyttää videolaskurit.

AI-asetusten aiempi Vision Bridge -kortti on yhteensopivuuslinkki uudelle
sivulle; se ei enää ylläpidä lomakkeen toista kopiota. Media Providers myös
linkittää kuvasta tekstiksi- ja puheesta tekstiksi -työnkulut vastaaville Modality
Bridge -välilehdille poistamatta nykyistä puheesta tekstiksi -testiympäristöä.

**Itsekutsun hyväksynnän ohitus:** kun kuvauskutsu reititetään OmniRouten
oman `/v1`-itsekutsun kautta (epästandardi palveluntarjoajamalli), alipyyntö lähettää
otsakkeen `x-omniroute-admission-bypass: internal` ja se todennetaan ratkaistulla
itsekutsun tunnistetiedolla — paikallisen tilan paikallisella `sk_omniroute`-sentineliarvolla tai
ylläpitäjän määrittämällä `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` -ympäristöavaimella (#1350), jotta
`REQUIRE_API_KEY=true`-käyttöönotot voivat edelleen suorittaa kuvauskutsun. Ohitus
hyväksytään vain täsmälleen näillä tunnistetiedoilla, joten ulkoiset asiakkaat eivät voi käyttää
otsaketta hyväksynnän ohittamiseen.

Vanhat oletusarvot sijaitsevat tiedostossa `src/shared/constants/visionBridgeDefaults.ts`;
uudet tila-, tehtävätietoisuus- ja välimuistioletusarvot sekä asetusten ratkaisija sijaitsevat tiedostossa
`src/shared/constants/modalityBridgeDefaults.ts`. Suojamekanismi tarjoaa
`deps`-konstruktorivalinnan, jotta testit voivat injektoida valeimplementaatiot funktioille `getSettings` ja
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Sieppaa ääntä sisältävät keskustelupyynnöt ennen kuin ne saavuttavat kohteen, jonka ei
tiedetä hyväksyvän äänisyötettä. Se ei koskaan reititä keskustelupyyntöä uudelleen: ääniosat
litteroidaan nykyisen OpenAI-yhteensopivan multipart-päätepisteen kautta, ja
valittu keskustelumalli jatkaa tekstilitteraateilla.

Kulku:

1. Selvitä `supportsAudio`-arvo `getResolvedModelCapabilities()`-funktion avulla. Eksplisiittiset
   provider-rekisterin metatiedot ovat etusijalla, sitten staattiset mallin metatiedot ja lopuksi synkronoitu
   `modalities_input`. Määritetty syöteluettelo ilman `audio`-arvoa tuottaa arvon `false`; jos
   ominaisuudesta ei ole näyttöä, arvoksi jää `null`. Sekä `false` että `null` aktivoivat
   konservatiivisen sillan, kun taas `true` ohittaa sen.
2. Selvitä `modalityBridgeAudio*`-asetukset ja poimi jokaisesta viestistä yhdistettävissä olevat ylimmän tason
   ääniosat jaetun `detectMediaParts()`-tunnistimen avulla. Tuettuja siirtomuotoja ovat OpenAI:n
   `input_audio`, `audio_url` ja `source.media_type: "audio/*"`. Sisäkkäinen ääni tunnistetaan reititystä varten,
   mutta sitä ei poisteta yhdistämispolulla. Työmäärää rajoittaa `modalityBridgeAudioMaxClips`;
   myöhemmät osat jätetään ennalleen.
3. Käytä määritettyä `provider/model`-arvoa tai anna `selectAudioBridgeModel()`-funktion käydä
   `AUDIO_TRANSCRIPTION_PROVIDERS` läpi vakaassa luettelojärjestyksessä ja valita ensimmäinen
   malli, jolla on käytettävissä oleva aktiivisen palveluntarjoajan tunnistetieto.
4. `callAudioTranscription()` muuntaa base64-/data-URI-äänen moniosaiseksi
   `file`-kentäksi tai lataa etäresurssin `audio_url` julkiset osoitteet sallivan lähtevän liikenteen
   suojauksen kautta käyttäen DNS-kiinnitystä ja 25 Mt:n rajaa. Sen jälkeen se lähettää tiedoston ja valitun
   mallin POST-pyynnöllä paikalliseen `/v1/audio/transcriptions`-itsepalvelukutsuun, jonka todennus tehdään
   `resolveSelfLoopBearer()`-funktion avulla. Nykyinen transkriptioreitti suorittaa tavallisen
   tunnistetietojen haun, jäähdytys- ja nopeusrajoitusten käsittelyn sekä palveluntarjoajalle välityksen.
5. Onnistuneissa kutsuissa osat korvataan muodolla `[Audio N]: <transcript>`. Kutsut
   suoritetaan `Promise.allSettled`-menetelmällä: yksittäinen epäonnistuminen säilyttää alkuperäisen
   ääniosan (#4012-sopimus). Jos kaikki kutsut epäonnistuvat ja kohteen on todistettu olevan
   `supportsAudio === false`, osiksi tulee
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-sopimus). Jos
   kohde on tuntematon (`null`), kaikkien kutsujen epäonnistuessa osat jätetään ennalleen. Kohde, jonka
   on todistettu tukevan vain tekstiä ja jolle ei ole käytettävissä STT-tunnistetietoa, saa saman eksplisiittisen
   paikkamerkin ilman verkkokutsua.

Onnistuneet transkriptiot käyttävät prosessinlaajuista Modality Bridge -LRU-/TTL-välimuistia.
Avain yhdistää ääniviitteen, vakaan `audio-transcription`-toimintotunnisteen
ja valitun STT-mallin; epäonnistumisia ei koskaan tallenneta välimuistiin. Ääniyritykset päivittävät
jaetut `bridged`-, `cacheHits`-, `failures`- ja `lastUsedAt`-laskurit.
Muunnetut vastaukset sisältävät otsakkeen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; muuttamattomat
pyynnöt eivät saa Audio Bridge -segmenttiä.

Suorituksenaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                         | Oletusarvo | Vaihteluväli        |
| ----------------------------- | ---------- | ------------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                   |
| `modalityBridgeAudioModel`    | `""`       | Auto tai STT-tunnus |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000         |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10                |

Jaettua välimuistia hallitaan edelleen asetuksilla `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosilta (`videoBridge.ts`, `videoBridgePipeline.ts`)

Sieppaa Chat Completions -rajapinnan `messages`-kentän ja Responses
API -rajapinnan `input`-kentän ylimmän tason video-osat ennen kuin kutsutaan kohdetta, jonka
natiivista videotuesta ei ole tietoa. Tuettuja muotoja ovat `input_video`, `video_url`,
`video_source`, HTTPS-URL-osoitteet ja `data:video/*;base64,...`-data-URI:t. Tekstissä olevia
pelkkiä tiedostonimiä ei käsitellä videoina.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastaa pyynnön läpikäynnistä,
ominaisuus- ja käytäntötarkistuksesta, pyyntökohtaisesta koostamisesta ja vastauksen hyötykuormasta.
Videokohtainen työ — hankinta, koko tuloksen välimuisti, kehysjakson kuvailu
(joka yhdistää kutsujan mahdollisesti määrittämän äänitranskription) sekä yrityskohtaiset
mittarit, keskeytys ja siivous — on piilotettu `videoBridgePipeline.ts`-tiedoston
`processVideoPart`-funktion taakse, jota kutsutaan kerran kutakin video-osaa kohden `preCall`-silmukassa.
Kyseinen moduuli määrittelee myös eksplisiittiset porttirajat: `VideoMediaBrokerPort`
(tavujen hankinta ja näytteistettyjen kehysten poiminta), `VideoAudioTranscriptionPort`
(kutsujan määrittämän äänitranskription yhdistäminen näytteistettyjen kehysten kuvauksiin) ja
`VideoDrilldownPort` (kehysten yksityiskohtaisen tarkastelun pysyvyysraja; sitä ei ole vielä kytketty
`processVideoPart`-funktioon — tällä hetkellä vain erillinen `/api/modality-bridge/video/drilldown`-reitti
kirjoittaa yksityiskohtaisen tarkastelun merkintöjä).

Julkinen `/v1`-pyyntöpolku ei koskaan tuo tai käynnistä aliprosessia. Etävideot
ladataan 50 MiB:n rajan puitteissa; sisäisille base64-videoille on konservatiivinen
36 MiB:n dekoodattu videokohtainen enimmäiskoko, jotta malli-, viesti- ja kehystyskuori
pysyy julkisen JSON-pyynnön 50 MiB:n hyväksymisrajan sisällä. Sisäisen datan
pituus- ja dekoodatun koon arviot tarkistetaan ennen muistivarausta. HTTPS vaaditaan
sekä alkuperäisessä etä-URL-osoitteessa että jokaisessa uudelleenohjauksessa käyttäen nykyistä,
vain julkiset osoitteet sallivaa lähtevän liikenteen suojausta ja DNS-kiinnitystä. Tämän jälkeen tavut
siirtyvät tarkan sisäisen `POST /api/modality-bridge/video/extract`-välittäjärajan yli. Kyseinen reitti on sekä
`LOCAL_ONLY` että `SPAWN_CAPABLE`, hyväksyy vain prosessikohtaisesti todennetun,
luotetusta loopback-osoitteesta tulevan pyynnön eikä koskaan hyväksy URL-osoitetta, tiedostojärjestelmäpolkua,
suoritettavaa tiedostoa tai argumenttiluetteloa. API:n rungon koon käsittelyketju ja käsittelijän asteittainen rungon
lukija valvovat toisistaan riippumatta välittäjän 50 MiB:n syöterajaa. Sen rajattu jono suorittaa
yhden poiminnan kerrallaan, sallii neljä odottavaa työtä ja rajoittaa odottavan syötteen
100 MiB:iin.

Välittäjän sisällä `ffprobe` lukee yksityisen paikallisen tiedoston; kiinteä muotojen sallittujen luettelo sulkee pois soittolista- ja manifestimuodot. Sallituissa MOV-perheen säilöissä ulkoiset MOV-dataviittaukset pysyvät oletusarvoisesti poissa käytöstä, eikä kiinteä komento ota niitä käyttöön. Sekä `ffprobe` että `ffmpeg` käyttävät vain `file`-protokollan sallivaa luetteloa, yhtä säiettä, kiinteitä argumenttitaulukoita, eivät komentotulkkia, ja suoritettavat tiedostot ratkaistaan `PATH`-muuttujasta. Liitettyjä kansikuvavirtoja ei pidetä toistettavina ehdokkaina. Kaikkien toistettavien virtojen on täytettävä rajoitukset, ja eksplisiittistä oletusvirtaa suositaan ennen determinististä pienimmän indeksin varavaihtoehtoa. Videoiden enimmäiskesto on 600 sekuntia, enimmäiskoko 8 192 pikseliä ulottuvuutta kohden ja enimmäismäärä 33 554 432 lähdepikseliä. FFmpeg poimii 1–16 JPEG-kuvaa aikavälien keskipisteistä, skaalaa pitkän sivun enintään 1 024 pikseliin suurentamatta pienempiä syötteitä eikä koskaan vastaanota URL-osoitetta. Näytteenoton oletusarvo on `uniform`. Valinnaiset `scene_aware`- ja kokeelliset `segment_aware`-käytännöt suorittavat yhden kiinteän FFmpeg-lisäajon jo validoidulle paikalliselle virralle, valitsevat rajatut `showinfo`-kohtausaikaleimat ja palaavat deterministisesti samoihin tasavälisiin keskipisteisiin, jos tunnistin epäonnistuu, aikakatkaisu tapahtuu, tuloste on virheellinen tai ehdokasjoukko on tyhjä. Segmenttitietoinen tila jakaa keskipistenäytteet suhteessa validoituihin kohtausväleihin; segmenttitietoinen evidenssi ja varatoiminta kuvataan yksityiskohtaisesti jäljempänä. Kiinteää 16 kuvan enimmäisrajaa sovelletaan valinnan jälkeen kaikissa käytännöissä. Kun kohtaustietoisella pyynnöllä on vain yhden kuvan budjetti, se käyttää aktiivisen koko videon tai kohdistusikkunan tasavälistä keskipistettä ja ilmoittaa `policyEffective: uniform`: yksi valittu kohtauskuva ei voi säilyttää molempia ajallisia päitä. Kutsuja voi halutessaan antaa äärellisen kohdistusikkunan (`start`/`end` sekunteina); rajat rajataan median kestoon, käänteiset tai ei-äärelliset ikkunat hylätään ja kaikki näytteenottokäytännöt suoritetaan vain normalisoidun aikavälin sisällä. Tuloksena saatu ikkuna sisällytetään näytteenoton metatietoihin ja epäluotetun kuvauksen etuliitteeseen, jotta myöhemmät mallit voivat erottaa kohdistetun otteen koko aikajanalta.

Semanttinen kuvatekstikohdistus on erillinen, eksplisiittinen asetus. Oletusarvoinen `full`-analyysitila säilyttää nykyisen kuvakehotteen eikä koskaan välitä pyyntötekstiä kuvatekstimallille. `focused`-tilassa silta lukee vain uusimman ei-tyhjän käyttäjän kirjoittaman `text`/`input_text`-sisällön samasta Chat- tai Responses-säilöstä, normalisoi sen NFC-muotoon, tiivistää ohjausmerkit ja tyhjemerkit sekä rajoittaa sen 500 Unicode-koodipisteeseen. Tyhjä tulos palautuu täsmälleen `full`-kehotteeseen. Käyttökelpoinen vihje serialisoidaan JSON-muodossa erilliseen epäluotetun käyttäjäkontekstin lohkoon, ja se saa ainoastaan priorisoida havaittavia yksityiskohtia; se ei voi ohittaa erillistä varoitusta, jonka mukaan mediassa näkyviä tai kuuluvia ohjeita ei saa noudattaa. Tekstuaalinen kohdistus ei koskaan päättele `start`/`end`-arvoja eikä muuta ajallista näytteenotinta.

#### FU-07:n rakenteellinen segmenttievidenssi

`segment_aware` käyttää yhtä rajattua esianalyysiajoa jo validoidulle paikalliselle videovirralle. Kiinteä suodatinketju skaalaa ensin leveyden enintään 320 pikseliin, tunnistaa kohtausvaihdokset ja pysähtyneet aikavälit ja ottaa sitten yhden kuvan sekunnissa näytteeksi epäterävyyden, keskimääräisen luminanssin sekä spatiaalisen ja temporaalisen informaation analysointia varten. Ajo on rajattu 600 rakenteelliseen näytteeseen, yhteen FFmpeg-/suodatinsäikeeseen, samoihin vain `file`-protokollan ja säilömuotojen salliviin luetteloihin, 1 MiB:n prosessitulosterajaan ja enintään 30 sekuntiin välittäjän yhteisen keskeytys-/määräajan puitteissa. Se ei koskaan hyväksy pyynnöstä komentoa, suodatinta, polkua tai URL-osoitetta.

Rakenteelliset arvot ovat determinististä näytteenottoevidenssiä, eivät videon semanttista ymmärtämistä. Ne eivät päättele kohteita, toimintoja, kuvatekstejä, puhetta tai käyttäjän tarkoitusta. Kohtaus- ja pysähtymisrajat muodostavat segmentit; pysähtymisen kattavuus, epäterävyys, valotus, spatiaalinen yksityiskohtaisuus ja temporaalinen muutos vaikuttavat vain siihen, miten nykyinen 1–16 kuvan budjetti jaetaan. Täysin pysähtynyt segmentti rajataan yhteen kuvaan, kun taas muut kuin pysähtyneet segmentit kilpailevat jäljellä olevasta budjetista. Kun rajoja on enemmän kuin kuvia, aikajanan tasainen kattavuus säilytetään, jotta nopeat varhaiset leikkaukset eivät voi peittää pitkää loppusegmenttiä. Kohtausrajat, jotka ovat yhden sekunnin analyysiresoluution sisällä pysähtymisrajasta, yhdistetään.

Puuttuvat suodattimet, virheellinen tai tyhjä evidenssi, tunnistimen virhe tai rajatun esianalyysin aikakatkaisu palautuvat sallivasti täsmälleen tasavälisten keskipisteiden käytäntöön. Kutsujan keskeytys tai välittäjän määräaika ei palaudu sallivasti: se lopettaa käynnissä olevan aliprosessin, estää myöhemmän kuvien poiminnan ja poistaa yksityisen väliaikaisen hakemistopuun `finally`-lohkossa.

`scripts/perf/video-bridge-fu07-eval.ts` luo deterministisiä, aitoja FFmpeg-testiaineistoja duplikaattien poiston jälkeisiä kuvatekstikutsujen säästöjä, tiheän liikkeen budjetinjakoa, epäterävyys-/valotus-/SI-TI-evidenssiä, nopeita leikkauksia pitkällä loppuosalla sekä asteittaisten häivytysten vääriä positiivisia varten. Se tallentaa esianalyysin seinäkelloajan sekä aliprosessin suoritinajan ja RSS-muistin huippuarvon, jos `/usr/bin/time` on käytettävissä. Sen laatutarkistukset ovat vain rakenteellisia oraakkeleita. Aidon kuvatekstimallin laatu pysyy tilassa `HOLD`, koska tällä testikehyksellä ei ole valtuutettua päätepistettä tai kiinnitettyä arvioijaa. Myös rahalliset säästöt pysyvät tilassa `HOLD`, ellei `--caption-cost-per-call-usd` anna eksplisiittistä positiivista kutsukohtaista kustannusarviota; skripti ei koskaan keksi kumpaakaan tulosta.

Kunkin kehyksen enimmäiskoko on 4 MiB, kaikkien raakamuotoisten kehysten yhteiskoko 23 MiB ja sarjallistetun välittäjäpalvelimen vastauksen koko 32 MiB. Yksityinen väliaikaishakemisto poistetaan `finally`-lohkossa. OmniRoute ei sisällä FFmpegiä eikä hyväksy mukautettua suoritettavan tiedoston polkua. Ennen tekstitystä silta suorittaa konservatiivisen visuaalisen kaksoiskappaleiden poistovaiheen: kukin JPEG pienennetään 16×16-kokoiseksi harmaasävypuskuriksi, ja sitä verrataan vain viimeisimpään säilytettyyn kehykseen. Kun pyydetty tekstitysbudjetti on yhtä kehystä suurempi, poiminta tuottaa rajatun ehdokasjoukon, jonka koko on enintään kaksinkertainen budjettiin nähden ja aina enintään 16 kehystä. Pyydettyä enimmäismäärää sovelletaan vasta kaksoiskappaleiden poistamisen jälkeen, ja ensimmäinen sekä viimeinen valittu ehdokas säilytetään lopullisessa harvennuksessa, kun budjetti on vähintään kaksi. Versioitu `grayscale-16x16-mean-cells-v2`-käytäntö käyttää suurempaa seuraavista arvoista: luminanssin keskimääräinen ero tai niiden pikkukuvan solujen osuus, joiden normalisoitu ero on vähintään 0,05. Kaksoiskappaleiden tunnistuskynnys on vakio 0,04, joka on valittu ennustettavuuden vuoksi sen sijaan, että se tarjottaisiin ajonaikaisena asetuksena. Tämä toissijainen, suuren kontrastin signaali säilyttää pienet liikkeet ja näkyvän tekstin muutokset, jotka pelkkään keskiarvoon perustuva vertailu voi jättää huomaamatta. Vertailijan tai dekooderin virhetilanteissa toiminta jatkuu sallivasti ja kattavuus säilytetään. Tulosteen metatiedoissa erotellaan poimitut ehdokkaat, onnistuneesti käytetyt kehykset ja poistetut visuaaliset kaksoiskappaleet.

Eksplisiittisesti videoksi merkitty osa voi pyytää aikaleimoilla varustetun kontaktivedoksen. Silta muodostaa JPEG-ruudukon, jossa on enintään 4 saraketta ja 16 kehystä. Kuhunkin 512 pikselin soluun upotetaan sen lähdeaikaleima suurikontrastiseen alapalkkiin, ja samat aikaleimat säilyvät tekstimuotoisissa metatiedoissa myöhempää yhdistämistä ja tarkastusta varten. Koko JPEG-tiedoston enimmäiskoko on edelleen 32 MiB. Jos `sharp` ei pysty dekoodaamaan tai koostamaan ruudukkoa, silta palaa käyttämään yksittäisiä JPEG-kehyksiä. Asiakkaan tekemä keskeytys välittyy silti kontaktivedostoiminnon läpi.

Tuotantoon siirtämistä tukeva näyttö pidetään tarkoituksella erillään synteettisestä koostamisen mikrosuorituskykytestistä. `scripts/perf/video-bridge-contact-sheet-eval.ts` määrittelee skeemaversioidun A/B-testikehyksen todellisille OpenAI-yhteensopiville konenäkömalleille. Se mittaa palveluntarjoajan ilmoittamat tokenit, päästä päähän -viiveen seinäkellolla mitattuna (mukaan lukien kontaktivedoksen koostaminen), mallikutsujen määrän sekä manifestissa määriteltyjen faktojen säilymisen. Mallien raakavastauksia ei kirjoiteta raporttiin, vaan ainoastaan SHA-256-tiivisteet ja täsmänneiden faktojen tunnisteet säilytetään. Testikehys ei tee verkko- tai maksullisia mallikutsuja, ellei `--execute-real`-valitsinta ole annettu ja `--model`, `OMNIROUTE_BASE_URL` sekä `OMNIROUTE_API_KEY` ole määritetty. Ilman tällaista eksplisiittistä todellista suoritusta sen koneellisesti luettava päätös säilyy arvossa `HOLD`; pelkät synteettiset hyötykuorma- ja kutsumäärämittaukset eivät ole näyttöä tuotantoon siirtämisen tueksi.

Kutsujat voivat liittää valinnaisen `transcript.cues`-taulukon tuettuun video-osaan, jos heillä on jo aikakohdistettu teksti. Jokaisen vihjeen on sisällettävä `text`, äärellinen `start`/`end`-väli tarkistetun keston sisällä sekä sallittujen arvojen luetteloon kuuluva `source` (`client`, `embedded` tai `audio-bridge`). `confidence` saa oletusarvon `1`, ja sen on pysyttävä välillä `0`–`1`. Täsmälleen samat vihjeet yhdistetään. OmniRoute ei koskaan käynnistä litterointia näiden metatietojen perusteella: validoidut vihjeet kopioidaan kuvattuun tulokseen lähteen, luottamusarvon ja aikavälin kanssa, ja ne esitetään kehystekstitysten rinnalla epäluotettuina havaintoina. Virheellinen, aikavälin ulkopuolinen tai alkuperätiedoton teksti hylätään sen sijaan, että se sekoitettaisiin tekstitysvirtaan. Molemmat pyyntörungon litterointikanavat normalisoivat annetun alkuperän arvoksi `client`, mukaan lukien itse ilmoitetut `embedded`- ja `audio-bridge`-tunnisteet. Vain palvelimen hallitsema sovitin voi määrittää nämä luotetut tunnisteet vain koodissa käytettävän `trustedSource`-argumentin kautta; pyynnön JSON-kenttä ei voi välittyä kyseiseen argumenttiin. Litterointiteksti säilyy alkuperästään riippumatta epäluotettuna, mediasta johdettuna sisältönä, eikä se saa koskaan vaikuttaa valtuutukseen.

Edistynyt kutsuja voi toimittaa samalle videolle `audioTranscript`-raidan. Sitä käsitellään asiakkaan toimittamana tekstinä, ei todisteena palvelimen tekemästä litteroinnista. Yhdistämisrajapinta käsittelee visuaaliset ja äänihavainnot saman määräajan ja keskeytyssignaalin alaisina, järjestää ne yhteiselle aikajanalle, yhdistää täsmälleen samat kaksoiskappaleet ja raportoi osittaisen tuloksen, jos vain toinen haara onnistuu. Virheellinen `audioTranscript` johtaa osittaiseen tulokseen — visuaalinen kuvaus säilytetään ja äänihaaraan kirjataan puhdistettu virhekoodi — sen sijaan, että koko videon käsittely epäonnistuisi. Haarakohtainen saatavuus, osittaisuuden ilmaiseva lippu ja puhdistetut virhekoodit säilytetään kuvatussa tuloksessa, suojausehtojen metatiedoissa (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), tulosvälimuistin metatiedoissa sekä sillan yhdistämislaskureissa. Video Bridgen oletuspolku ei käynnistä puheentunnistusta eikä lataa mediasta toista kopiota; ilman erikseen annettua raitaa se käsittelee edelleen vain videota.

**Transkriptin säilyttäminen (#12150 P1).** Tätä sovelletaan automaattisesti aina, kun
Video Bridge (joka on itsessään erikseen käyttöön otettava) hahmontaa transkriptivihjeen — erillistä
säilytyslippua ei ole. Kun pyyntö hahmontaa minkä tahansa transkriptivihjeen (kutsujan määrittämän
`transcript`-kentän tai yhdistetyn `audioTranscript`-kentän), suojakaide merkitsee sen
`videoBridgeObserved`-tilaan ja tuottaa videokuvauksesta peitetyn varjokopion —
muuten identtisen hahmonnuksen, jossa jokaisen vihjeen vapaamuotoinen tekstisisältö korvataan arvolla
`[redacted-video-transcript]`. Tämä tehdään korvaamalla jäsennelty vihjekenttä
ennen merkkijonon kokoamista (ei koskaan jäsentämällä litistettyä tekstiä, joten mikään vihjeen
sisältö — vihamielinen tai tavallinen, mukaan lukien merkkiä `]` sisältävät sisällöt, kuten
`[inaudible]`/`[music]` — ei voi säilyä). Säilytetyn kutsulokin pyynnön runko vaihtaa
jokaisen videosta johdetun tekstiosan tähän peitettyyn varjokopioon sisällön
yhtäläisyyden perusteella; `fullText`-ankkuri luetaan uudelleen valmiista kutsua edeltävän suojakaiteen
hyötykuormasta, joten vastaavuus onnistuu edelleen sen jälkeen, kun ketjun myöhemmät suojakaiteet (henkilötietojen ja
tunnistetietojen peittäjät, prioriteetit 10/95) ovat kirjoittaneet kuvaustekstin uudelleen paikan päällä, sekä
sen jälkeen, kun järjestelmäkehotteen, luovutuksen tai muistin injektointi on muokannut viestitaulukkoa.
Mallille ylävirtaan lähetettävä runko säilyy muuttumattomana. Havaittu pyyntö ei myöskään täytä
pysyvää Memory-muistia (sekä pyynnöstä että vastauksesta johdettu poiminta ohitetaan),
joten mallin oma vastaus ei voi kaiuttaa transkriptitekstiä Memory-muistiin.

**Videon raakakentät (#12430).** Kun silta on käytössä ja natiivi videotuki on tuntematon tai puuttuu, määritetyt `transcript`- ja `audioTranscript`-kentät aktivoivat myös `videoBridgeObserved`-tilan, vaikka kuvauksen tuottaminen epäonnistuisi tai `maxVideos`-raja ylittyisi. `null` ja tyhjät merkkijonot otetaan huomioon; puuttuvia kenttiä ja muuhun kuin videoon liittyviä metatietoja ei oteta huomioon. Säilytetyt kopiot peittävät nämä kentät tai jättävät pyynnön pois, ja välimuistit sekä Memory ohitetaan.

Näillä varapoluilla kelvollisista kutsujan vihjeistä tulee tuettuja `text`- tai `input_text`-osia
epästandardien palveluntarjoajakenttien sijaan. Molemmat pyynnössä annetut raidat
säilyvät epäluotettuina `client`-havaintoina, ja mukana on nimenomainen varoitus siitä, ettei videota
kuvailtu eikä aikaleimoja tarkistettu mediaa vasten. Nykyisiä
256 vihjeen / 64 KiB:n kokonaisrajoja ja vihjekohtaisia rajoja sovelletaan kahteen raitaan yhdessä;
aikaleimojen on mahduttava välittäjän 600 sekunnin enimmäisrajaan ja mahdolliseen annettuun kohdistusikkunaan.
Virheelliset raidat hylätään eikä niitä välitetä mielivaltaisena tekstinä; kelvollista
rinnakkaisraitaa voidaan silti käyttää, ellei niiden yhteinen budjetti ylity. Null-arvoiset tai tyhjät
kentät eivät lisää tekstiä. Tämä varamekanismi ei lisää median noutoa tai litterointia.
Transkription laajennuskentät poistetaan varamekanismin videokantajasta ja sen
`video_url`- ja `source`-objekteista. OpenAI-siirtomuodon sallittujen kenttien luettelo pysyy tiukkana; natiivituen osalta
tuntemattomat videokantajat säilyvät käytettävissä, ja tunnetut vain tekstiä tukevat kohteet säilyttävät turvalliset merkinnät.
Jäsennellyt peittävät varjokopiot suojaavat lisättyä transkriptitekstiä, kun taas
alkuperäinen kutsujan omistama pyyntö säilyy muuttumattomana. Natiivisti tuetut kohteet ja
käytöstä poistetut sillat säilyttävät nykyisen ohitustoimintansa.

Muut säilytetyt kopiot käyttävät samaa havaitun pyynnön signaalia. Raaka
suojakaidetta edeltävä asiakaspyynnön tilannevedos, muistissa oleva odottava pyyntö ja varhaisen
hylätyn pyynnön loki korvaavat rakenteellisesti video-osien transkriptikentät;
putkiston vaiheiden ja kontekstin luovutuksen muodostamat merkkijonokehotteet peitetään
säilytetyn pyyntörungon kohteessa. Säilytetty `video_content_removed`-merkintä
saa `previous_response_id`-jatkamisen epäonnistumaan turvallisesti sen sijaan, että se muodostaisi uudelleen
tarkoituksella poistetun tekstin. Jos havaittu pyyntö menettää
osakohtaisen peittävän varjokopionsa ennen lokitusta tai jos yksikin useista videon varjokopioista
ei enää vastaa myöhempien pyyntömuutosten jälkeen, säilytettävä pyyntörunko
jätetään kokonaan pois sen sijaan, että säilytettäisiin osittain peitetty transkriptio.

Havaitun pyynnön tapauksessa mallin vastaus voi lainata mitä tahansa transkription osaa
ilman jäsenneltyä vihjerajaa. Sen säilytetyn kutsulokin
`responseBody` korvataan siksi poisjättömerkinnällä; yksityiskohtaista
putkistoartefaktia (joka voi sisältää ylävirran ja asiakkaan rungot sekä suoratoiston osat)
ei säilytetä. Semanttiset, idempotenssi- ja päättelytoiston välimuistit ohittavat
sekä luvut että kirjoitukset kyseiselle pyynnölle. Palveluntarjoajapyyntö ja asiakkaalle näkyvä
vastaus säilyvät muuttumattomina. Varhaiset keepalive-tavut tyhjennetään väliaikaisesta
puskurista, kun yksityiskohtainen artefakti jätetään pois. Kiron virheellistä EventStream-muotoa koskeva
varoitus ilmoittaa vain hyötykuorman tavumäärän, ei koskaan sen sisältöä tai JSON-
jäsentimen raakaa virhettä.
Tässä ei väitetä, että kaikki asiaan liittymättömät palveluntarjoajien tai liitännäisten diagnostiikat olisi
auditoitu; laajemman säilytyskohteiden tarkistuksen seuranta on kohdassa #11658.

Sisäinen `/api/modality-bridge/video/drilldown`-elinkaari on erillinen,
loopback-osoitteeseen ja tunnistepohjaiseen todennukseen perustuva välimuistialusta. Jokainen toiminto edellyttää lisäksi
kanonista läpinäkymätöntä pääkäyttäjätunnusta. Ennen tuotantokutsujan käyttöönottoa sen on
johdettava kyseinen tunnus todennetusta vuokraajasta, eikä se saa koskaan välittää
asiakkaan valitsemaa arvoa. Välimuistiavaimet sitovat tämän pääkäyttäjän kanonisiin istunto- ja
videoviitetunnuksiin, tallentavat vain niiden SHA-256-johdetut avaimet ja rajaavat sekä luvut
että poistot samaan pääkäyttäjään. Välimuisti tallentaa enintään 16 johdettua JPEG-
kehystä merkintää kohden, vanhentaa ne kymmenen minuutin kuluttua ja tukee rajattuja
`start`/`end`-lukuja tai istunnon nimenomaista poistamista.

Kutakin pääkäyttäjää rajoitetaan 16 merkintään ja 64 MiB:uun kanonista JPEG-dataa. Nämä
rajat ovat riippumattomia globaalista 64 merkinnän / 256 MiB:n enimmäisrajasta: pääkäyttäjän kiintiöpaine
poistaa vain kyseisen pääkäyttäjän vähiten äskettäin käytettyjä merkintöjä ennen kuin globaalia
LRU-poistoa harkitaan. Vanhentuneet merkinnät poistetaan sekä pääkäyttäjäkohtaisesta että
globaalista kirjanpidosta välimuistitoiminnan yhteydessä, kun taas peruutus ja validoinnin epäonnistuminen eivät
tallenna osittaista korvausta.

Välimuisti hylkää ei-kanonisen Base64-koodauksen, ylimääräisen täytteen, muut kuin JPEG-mediat, virheelliset tai
katkenneet JPEG-kuvat sekä JPEG-kuvat, jotka aiheuttavat varoituksen rajatun, koko kuvan kattavan `sharp`-purkamisen
aikana. Se uudelleenkoodaa jokaisen hyväksytyn kuvan kanoniseen JPEG-muotoon, määrittää leveyden ja korkeuden
puretuista tavuista sen sijaan, että luottaisi kutsujan kenttiin, ja hylkää mahdolliset perään liitetyt
polyglottitavut niiden säilyttämisen sijaan. Molempiin kiintiöihin lasketaan vain rajattu kanoninen pakattu puskuri.
JSON-siirtomuodon raja sisältää Base64-koodauksen lisätilan 32 MiB:n
puretun syötteen enimmäismäärälle. Jokainen
tallennettu johdannainen sisältää sen validoidun JPEG-muodon ja -resoluution, näytteenottokäytännön,
johdannaisversion, luontiajan, palvelimen laskeman sisältötiivisteen sekä tiivistetyn viittauksen
ylätason kohteeseen ja luotetun kutsujan antaman ylätason sisällön tiivisteen. Peruutus tarkistetaan
asynkronisten purku- ja tiivistevaiheiden välissä ennen välimuistin atomista vahvistusta.

Tämä erä ei vielä yhdistä tuotantotason tuottajaa reittiin eikä
tarjoa moniresoluutioisten varianttien valintaa. Läpinäkyvä Video Bridge -pyyntöpolku
ei siten aiheuta lisätyötä, kun taas vuokralaiseen sidottu pääidentiteetin johtaminen ja
FU-08:n koko moniresoluutioelinkaari jäävät nimenomaisesti jatkotyöksi sen sijaan,
että ne dokumentoitaisiin valmiiksi toiminnallisuudeksi.

Kehyksille luodaan kuvatekstit peräkkäin määritetyllä Video-mallilla. Tyhjä
Video-ohitus perii Vision-asetuksen; jos molemmat ovat tyhjiä, Visionin
automaattinen reititin valitsee käytettävän näkökykyisen mallin. Onnistuneet kuvatekstit
korvaavat alkuperäisen osan vakaalla `[Video description:`-etuliitteellä, joka myös
merkitsee tekstin epäluotettavaksi, mediasta johdetuksi havainnoksi ja ohjeistaa jatkokäsittelyn
malleja olemaan noudattamatta mediasta löytyviä ohjeita. Kehyskuvatekstien välimuistiavaimet
sisältävät JPEG-tavut, kehotteen, aikaleiman ja käytettävän mallin; vain onnistuneet
kuvatekstit tallennetaan välimuistiin. Välimuistimerkinnät säilyttävät tosiasiallisesti onnistuneen tuottajamallin,
myös varamallin; silta ilmoittaa arvon `mixed`, kun eri kehykset
ovat eri mallien tuottamia. Välimuistiosuma käyttää tätä tuottajan identiteettiä uudelleen
sen sijaan, että se nimettäisiin uudelleen pyydetyn reitityssuunnitelman mukaiseksi. Koko videon tuloksen
välimuistiavain perustuu jokaiseen tulosta muuttavaan syötteeseen — kehotteeseen, käytettävään
malliin, näytteenottokäytäntöön, kehysten määrään, semanttisen analyysin tilaan, normalisoidun
kohdistusvihjeen SHA-256-sormenjälkeen, kohdistusikkunaan, `transcript`-arvoon,
`audioTranscript`-arvoon ja yhteystaulukkovalitsimeen — joten minkä tahansa näistä
ulottuvuuksista muuttaminen aiheuttaa välimuistihudin, eikä koskaan vanhentuneen tuloksen uudelleenkäyttöä. Visuaalisen duplikaattien poiston käytännön
versio, kynnysarvo ja rajattu ehdokaskehysten määrä sisältyvät myös nimenomaisesti
tulosvälimuistin avaimeen ja metatietoihin; käytännön muutos ei siksi voi käyttää uudelleen vanhentunutta
koko videon kuvausta. Tulosvälimuistin v4-metatiedot säilyttävät tilan ja
sormenjäljen, eivät koskaan käyttäjän raakaa tehtävää. Suojakaiteiden metatiedot ilmoittavat sekä
pyydetyn että käytetyn analyysitilan; pyydetty `focused`-tila ilman
käyttökelpoista käyttäjätekstiä ilmoitetaan tosiasiallisesti `full`-tilana.

Suojakaide poimii kaikki tuetut video-osat, mutta kuvailee enintään
`modalityBridgeVideoMaxVideos` videota. Kohteessa, jonka on osoitettu sisältävän asetuksen
`supportsVideo === false`, epäonnistuneet ja rajan ylittävät videot muuttuvat nimenomaisiksi turvallisiksi
tekstimerkinnöiksi, jotta raakavideota ei jää jäljelle. Kun ominaisuus on tuntematon, kyseiset osat
säilyttävät videosäiliönsä; mahdollinen varatranskriptio noudattaa edellä kuvattua rajattua tekstimuunnosta.
Kohteet, joilla on `supportsVideo === true`, ohittavat sillan.
Asiakaspyynnön keskeytyssignaali välittyy lataukseen, välittäjän jonoon,
aliprosesseihin ja kuvatekstikutsuihin; keskeytykset pysäyttävät käsittelyn videoiden välillä eivätkä koskaan siirry virhetilanteessa
raakamedian käyttöön.

Ajonaikaiset asetukset tallennetaan tietokantaan ja validoidaan Zodilla:

| Avain                               | Oletusarvo  | Alue / toiminta                                                                                                     |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Valinnainen ajonaikainen ominaisuus, otettava erikseen käyttöön                                                     |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` säilyttää yleiset kuvatekstit; `focused` käyttää rajattua, epäluotettavaa uusinta käyttäjäkontekstia         |
| `modalityBridgeVideoModel`          | `""`        | Perii Vision Bridge -mallin                                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` tai suhteellinen `segment_aware`; tunnistimen epäonnistuessa käytetään `uniform`-käytäntöä |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                 |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                      |

Vanhat tallennetut Video-aikakatkaisuarvot, jotka ylittävät 120 sekuntia, rajataan
välittäjän määräaikaan; uudet asetuskirjoitukset, jotka ylittävät tämän rajan, hylätään.
`GET /api/modality-bridge/video/runtime` edellyttää luotettua, leimattua loopback-
paikallisuutta ennen todennusta tai ajoympäristön tutkimista ja sen jälkeen hallinnan
todennusta. Se palauttaa vain arvon `available`, puhdistetut FFmpeg/ffprobe-versiot ja kiinteän
syyn, kun ajoympäristö ei ole käytettävissä. Sisäinen poimintapäätepiste ei ole
julkinen latausrajapinta: jonon ruuhkautuminen palauttaa `503` sekä `Retry-After`-otsakkeen, kutsujan
yhteyden katkeaminen palauttaa `499` ja välittäjän kiinteän määräajan ylittyminen palauttaa `504`. Muunnetut vastaukset lisäävät
merkkijonon `video->text;model=<visionModel>;parts=<videos>` keskitettyyn
`x-omniroute-modality-bridge`-otsakkeeseen poistamatta Vision- tai Audio-segmenttejä.

### PII-peittäjä (`piiMasker.ts`)

Suoritetaan **molemmissa** vaiheissa.

- **`preCall`** kloonaa hyötykuorman, käy läpi kentät `system`, `messages`, `input` ja
  `prompt` (mukaan lukien pelkkää merkkijonoa sisältävät kohteet) sekä käyttää
  `processPII()`-funktiota (moduulista `@/shared/utils/inputSanitizer`) merkkijonomuotoisiin
  `content`/`text`-kenttiin. Kun `PII_REDACTION_ENABLED=true`, havaittavat
  henkilötiedot peitetään lähtevässä hyötykuormassa. Tämä ei riipu asetuksesta
  `INPUT_SANITIZER_MODE` (joka hallitsee vain kehotesyötteiden käsittelykäytäntöä).
  Kun peittäminen ei ole käytössä, kutsu tallentaa havaintojen lukumäärät
  kirjoittamatta sisältöä uudelleen.
- **`postCall`** syväkloonaa vastauksen ja suorittaa `sanitizePIIResponse()`-funktion
  sekä Responses API:n rakenteelle tarkoitetun peittimen (`maskResponsesOutput` — kattaa
  kentät `output_text` ja `output[].content[].text`). Jos peittämistä tapahtuu,
  muokattu vastaus korvaa alkuperäisen.

Suojamekanismi ei koskaan estä pyyntöä, vaan ainoastaan lisää merkintöjä
(`meta.detections`, `meta.redacted`) tai kirjoittaa sisältöä uudelleen.

#### Tyyppikohtainen valinta, mukautetut mallit ja havaintolaskurit

**Dashboard → Settings → Security → PII masking** määrittää, _mitä_ peitetään.
Se ei ota peittämistä käyttöön: sitä hallitsevat edelleen `PII_REDACTION_ENABLED`
(pyynnöt) ja `PII_RESPONSE_SANITIZATION` (vastaukset + SSE), jotka molemmat ovat
oletusarvoisesti poissa käytöstä.

- **Tyyppikohtainen valinta** — sisäänrakennetut tunnisteet on lueteltu tiedostossa
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Asetuksen puuttuminen
  tarkoittaa kaikkia tyyppejä (toiminta ennen tämän asetuksen lisäämistä).
  Pyyntömoottorin `ssn_us`-malli vastaa tyyppiä `ssn`. Mallipohjat (Minimal,
  Standard, Financial, Brazilian, USA, Full) täyttävät vain käyttöliittymän
  valintaruudut.
- **Mukautetut mallit** — enintään 20 säännöllistä lauseketta tai jokerimerkkimallia
  (`*` = enintään 64 muuta kuin tyhjätilamerkkiä, `?` = yksi merkki). Osumat
  korvataan arvolla `[CUSTOM_REDACTED]`. Jokainen malli käsitellään
  `compilePiiCustomPattern()`-funktiolla
  (`src/shared/utils/piiCustomPatterns.ts`): enintään 500 merkkiä, sallitut liput
  ovat `g i m s u`, mallin kääntämisen on onnistuttava, sen on läpäistävä
  `safe-regex`-tarkistus (katastrofaalinen takaisinhaku), eikä se saa vastata
  tyhjää merkkijonoa tai peittämisen paikkamerkkiä. Virheellinen malli hylätään
  tallennettaessa ja testattaessa, ja virheellinen tallennettu rivi ohitetaan
  suorituksen aikana sen sijaan, että se käännettäisiin. Mukautettuja malleja
  käytetään vain, kun peittäminen on käytössä.
- **Havaintolaskurit** — tyyppikohtaiset lukumäärät (eivät koskaan täsmänneitä
  arvoja), joita säilytetään muistissa ja jotka nollataan uudelleenkäynnistyksen
  yhteydessä (`src/lib/pii/piiDetectionStats.ts`). Niitä kasvatetaan vain, kun
  peittäminen on käytössä.

Asetukset sijaitsevat `key_value`-taulussa (nimiavaruus `pii_settings`,
`src/lib/db/piiSettings.ts`), ja ne luetaan yhden sekunnin välimuistin kautta. API:

| Menetelmä | Polku                    | Tarkoitus                                                         |
| --------- | ------------------------ | ----------------------------------------------------------------- |
| `GET`     | `/api/settings/pii`      | Lippujen tila, `enabledTypes`, `customPatterns`, havaintolaskurit |
| `PUT`     | `/api/settings/pii`      | Korvaa `enabledTypes` (`null` = kaikki) ja/tai `customPatterns`   |
| `POST`    | `/api/settings/pii/test` | Testaa yhtä mallia tallentamatta enintään 8 KB:n näytettä vasten  |

Kaikki kolme edellyttävät hallintatodennusta ja validoivat pyynnön rungon Zodilla
(`src/shared/validation/schemas/piiSettings.ts`).

### Kehotesyötteet (`promptInjection.ts`)

Havaitsee käyttäjän toimittamassa sisällössä olevat vihamieliset rakenteet ja
toimeenpanee määritetyn käytännön. Toimintaa ohjaavat ympäristömuuttujat ja
konstruktorin asetukset:

| Asetus     | Ympäristömuuttuja                                                                                     | Oletus | Vaikutus                                                                                                                                                                                                                                        |
| ---------- | ----------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Käytössä   | `INPUT_SANITIZER_ENABLED`                                                                             | `true` | Kun arvo on `false`, suojamekanismi lopettaa käsittelyn välittömästi.                                                                                                                                                                           |
| Tila       | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn` | Kehotesyötteiden käytäntö: `block`, `warn` tai `log`. (`redact` hyväksytään taaksepäin yhteensopivuuden vuoksi, mutta se **ei** poista kehotesyötteen tekstiä; pyynnön henkilötietojen uudelleenkirjoitusta hallitsee `PII_REDACTION_ENABLED`.) |
| Estokynnys | `blockThreshold`-asetus / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Estämiseen vaadittava vähimmäisvakavuus. Keskitasoisia havaintoja vain seurataan oletusasetuksilla.                                                                                                                                             |

**Tilojen ensisijaisuusjärjestys** (`getMode`): kutsujan `options.mode` →
`INJECTION_GUARD_MODE`-asetuksen **tietokantaan tallennettu ominaisuuslipun ohitus**
(Dashboard → Settings → Feature Flags) → `INJECTION_GUARD_MODE`-ympäristömuuttuja →
`INPUT_SANITIZER_MODE`-ympäristömuuttuja → `warn`. Hallintapaneelin ohitus on siis
ympäristömuuttujia ensisijaisempi, joten Feature Flags -käyttöliittymä ohjaa
käynnissä olevaa suojausta reaaliaikaisesti (ilman uudelleenkäynnistystä).
Tietokannasta lukeminen on vikasietoista: jos siinä tapahtuu virhe, suojamekanismi
palaa ympäristömuuttujiin perustuvaan toimintaan. Kun ohitusta ei ole määritetty,
toiminta vastaa täysin pelkkiin ympäristömuuttujiin perustuvaa määritystä.

Havaintolähteet:

1. `sanitizeRequest()` moduulista `@/shared/utils/inputSanitizer` (muuallakin
   käsittelyputkessa käytettävä jaettu tunnistinjoukko).
2. Sisäänrakennetut `DEFAULT_GUARD_PATTERNS`-mallit (tällä hetkellä
   `system_override_inline` ja `markdown_system_block`, molempien vakavuus on
   `high`).
3. Konstruktorin asetuksissa välitetyt valinnaiset `customPatterns`-mallit
   (merkkijonoja, säännöllisiä lausekkeita tai
   `{ name, pattern, severity }`-tietueita).

Kun `mode === "block"` **ja** vähintään yksi havainto täyttää vakavuuden
kynnysarvon, `preCall` palauttaa arvon `{ block: true, message: "Request rejected:
suspicious content detected" }`. Tiloissa `warn`/`log` suojakaide kirjaa tapahtuman mutta
sallii kutsun. Jaettu apufunktio `evaluatePromptInjection()` viedään myös
kutsujille, joiden on arvioitava kehotteita käyttämättä rekisteriä.

**Tarkistusraja (v3.8.20):** tunnistin tarkistaa vain yhdistetyn kehotetekstin
**ensimmäiset 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 tavua)
tiedostossa `src/shared/utils/inputSanitizer.ts`. Sekä `detectInjection()` että
`evaluatePromptInjection()` suorittavat operaation `slice(0, MAX_INJECTION_SCAN_BYTES)` ennen
mallisilmukan suorittamista. Injektiodirektiivit sijaitsevat syötteen alkupuolella, joten tämä
rajoittaa säännöllisten lausekkeiden CPU-/GC-kuormitusta useiden satojen kilotavujen hyötykuormissa
heikentämättä tunnistusta (vrt. #3932, #4041).

### Tunnistetietojen peittäjä (`credentialMasker.ts`)

Suoritetaan **molemmissa** vaiheissa oletusketjun viimeisenä (prioriteetti `95`). Se peittää
tunnetut API-avainten ja salaisten tunnusten mallit lähtevästä hyötykuormasta (viestien
sisältö, työkalukutsujen argumentit ja työkalujen tulokset) **sekä** palveluntarjoajan vastauksesta,
jotta kehotteeseen liitetty tunnistetieto (tai työkalun tuloksen takaisin kaiuttama tunnistetieto)
ei vuoda palveluntarjoajalle tai takaisin asiakkaalle.

- **Vain erikseen käyttöön otettava**, samalla tavalla kuin henkilötietojen peittäminen (lähellä kovaa sääntöä #20):
  poissa käytöstä, ellei `settings.credentialRedactionEnabled === true` **tai**
  `CREDENTIAL_REDACTION_ENABLED=true`. Kun se on poissa käytöstä, suojakaide ei tee mitään —
  se ei koskaan estä eikä muokkaa.
- `redactCredentials()` käy läpi koko hyötykuorma-/vastauspuun (`walkValue()`,
  suojattu prototyyppisaastumiselta, sykliturvallinen `WeakSet`-rakenteen avulla) ja korvaa osumat
  `[REDACTED:<type>]`-paikkamerkillä kloonaten vain ne haarat, jotka
  todella muuttuivat.
- `CREDENTIAL_PATTERNS` kattaa LLM-palveluntarjoajien avaimet (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), versionhallinta- ja SaaS-tunnukset (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), maksuavaimet (Stripe, Square), pilvipalvelujen
  avaimet (AWS-käyttöavain, Twilio, SendGrid, Mailgun), yksityiset avaimet / JWT:t,
  tunnistetietoja sisältävät yhteysmerkkijonot (`mongodb://user:pass@...` jne.) sekä
  yleisen `Authorization`/`x-api-key`/`api-key`/`apikey`-otsakearvon
  mallin. Otsakkeen muotoiset avaimet (`authorization`, `x-api-key`, `api-key`,
  `apikey`) peitetään rakenteellisesti (vain arvo; skeeman etuliite, kuten
  `Bearer `/`Basic `, säilytetään) yleisen tekstin säännöllisen lausekkeen käyttämisen sijaan.
- Suojakaide ei koskaan estä, vaan ainoastaan muokkaa (`modifiedPayload` /
  `modifiedResponse`) ja lisää metatietoja (`meta.credentialsRedacted`, `meta.count`).

Regressiosuojaus: `tests/unit/credential-masker-guardrail.test.ts`.

## Perussopimus (`base.ts`)

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
  block?: boolean; // true katkaisee ketjun välittömästi
  message?: string; // näytetään estettäessä
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // preCall palauttaa tämän pyynnön uudelleenkirjoittamiseksi
  modifiedResponse?: TValue; // postCall palauttaa tämän vastauksen uudelleenkirjoittamiseksi
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

Suojakaide ilmaisee, ettei muutoksia ole, palauttamalla joko `void`, `{}` tai
`{ block: false }`. Arvon `modifiedPayload`/`modifiedResponse` palauttaminen korvaa
ketjussa kulkevan arvon myöhempiä suojakaiteita varten.
`signal?: AbortSignal` välittää kutsujan elinkaaren suojakaiteille. Pyynnön keskeytys on tarkoituksellinen fail-open-poikkeus: mediasillat lopettavat työn ja siivoavat palauttamatta raakaa mediaa kohteelle, jonka tiedetään olevan tukematta sitä.

## Rekisteri (`registry.ts`)

Singleton-olio `guardrailRegistry` tarjoaa seuraavat:

- `register(guardrail)` — lisää suojakaiteen (tai korvaa sen normalisoidun nimen perusteella) ja
  lajittelee suojakaiteet uudelleen nousevan `priority`-arvon mukaan.
- `clear()` / `list()` — hallinnolliset apufunktiot.
- `runPreCallHooks(payload, context)` — käy aktiiviset suojakaiteet läpi, välittää
  hyötykuorman `modifiedPayload`-arvon kautta ja pysähtyy ensimmäiseen `block: true` -tulokseen.
- `runPostCallHooks(response, context)` — sama käsittely vastauksen puolella.
- `resetGuardrailsForTests({ registerDefaults })` — tyhjentää tilan ja valinnaisesti
  rekisteröi oletusarvot uudelleen testien puhdasta eristämistä varten.

Molemmat suorittajat palauttavat arvon `{ blocked, payload|response, results, guardrail?, message? }`,
jossa `results` on taulukko `GuardrailExecutionResult`-tietueita, jotka sisältävät
suojakaidekohtaiset `blocked`-, `skipped`-, `modified`-, `error`- ja `meta`-kentät,
joista on hyötyä jäljityksessä.

### Suojakaiteiden poistaminen käytöstä pyyntökohtaisesti

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` kokoaa
ilman kaksoiskappaleita luettelon suojakaiteiden nimistä, jotka tulee ohittaa nykyisessä
pyynnössä. Kanavia on viisi, ja ne luetaan tässä järjestyksessä sekä yhdistetään yhdeksi luetteloksi
(ensimmäinen esiintymä säilytetään kaksoiskappaleita poistettaessa):

1. `apiKeyInfo.disabledGuardrails`
2. Pyynnön rungon ylätason `disabledGuardrails`
3. Pyynnön rungon `metadata.disabledGuardrails` (vain kun `metadata` on objekti)
4. Otsake `x-omniroute-disabled-guardrails`
5. Vanha otsake `x-disabled-guardrails`

Kaikki viisi kanavaa yhdistetään, mukaan lukien molemmat otsakkeet: sekä
`x-omniroute-disabled-guardrails`- että `x-disabled-guardrails`-otsakkeen lähettäminen ohittaa niiden
luetteloiden unionin, eikä tyhjä uusi otsake enää piilota vanhaa otsaketta
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), korjattu muutoksessa
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Arvot voivat olla merkkijonotaulukoita tai pilkuilla eroteltu merkkijono. Nimistä poistetaan
ylimääräiset välilyönnit ja ne normalisoidaan pienaakkosiseksi kebab-case-muodoksi (`pii_masker` → `pii-masker`), ja tyhjät
merkinnät poistetaan. Tulos välitetään rekisterille `context.disabledGuardrails`-arvon
kautta, jolloin rekisteri ohittaa vastaavat suojakaiteet (`skipped: true` kohdassa `results`).

Käytöstäpoistoluettelo vaikuttaa vain **rekisteriin**. Kehotesyötteen `block`-tila on
pakollinen raja: syötesuojauksen väliohjelmisto
(`src/middleware/promptInjectionGuard.ts`) kutsuu `evaluatePromptInjection()`-funktiota
ilman kutsujan hallitsemaa käytöstäpoistoluetteloa (sen aiemmin tekemä, tarpeeton
`resolveDisabledGuardrails({ body })`-kutsu poistettiin muutoksessa
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), joten pyyntö,
joka poistaa `prompt-injection`-suojakaiteen käytöstä, hylätään silti `block`-tilassa. Tämä on
tarkoituksellista. Käytöstäpoistokanavat ovat kutsujan hallittavissa (pyynnön runko,
metadata ja otsakkeet), eikä kutsujan pidä voida poistaa käytöstä operaattorin määrittämää
suojausta
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Otsakkeiden
unioni muutoksesta [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
muuttaa vain sitä, mitkä rekisterin suojakaiteet ohitetaan; se ei anna asiakkaalle
mahdollisuutta ohittaa väliohjelmistoa. Pakollisia avain- ja ryhmäkohtaisia suojakaidekäytäntöjä
seurataan v4-RFC:ssä [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Katso [Kattavuus ja rajoitukset](#coverage-and-limits).

## Suoritusjärjestys

Jokaiselle pyynnölle, joka kulkee tiedostojen `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` kautta ([Kattavuus ja rajoitukset](#coverage-and-limits) -kohdassa luetellut chat-tyyppiset reitit):

1. `resolveDisabledGuardrails(...)` muodostaa ohitettavien suojamekanismien luettelon API-avaimesta, pyynnön rungosta
   ja otsakkeista.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` suorittaa suojamekanismit nousevassa
   prioriteettijärjestyksessä:
   - Käytöstä poistetut suojamekanismit kirjataan tilaan `skipped`.
   - Kunkin suojamekanismin `preCall` voi kirjoittaa hyötykuorman uudelleen `modifiedPayload`-arvon avulla.
   - Ensimmäinen `block: true` keskeyttää ketjun, ja käsittelijä palauttaa
     suojamekanismin hylkäysvastauksen.
3. Mahdollisesti uudelleenkirjoitettu hyötykuorma siirtyy yhdistelmäreititykseen ja edelleen
   ylävirran käsittelyyn.
4. **Vain ei-suoratoistavat vastaukset:** vastauksen muodostamisen jälkeen
   `guardrailRegistry.runPostCallHooks(...)` suorittaa saman ketjun
   vastaukselle. Tässä kohdassa `block: true` hylkää ylävirran vastauksen ja palauttaa HTTP 400 -vastauksen. Suoratoistettavat vastaukset ohittavat tämän vaiheen kokonaan.

Poikkeuksen aiheuttavat suojamekanismit kirjataan muodossa `error: <message>` ja lokitetaan
`logger.warn`-kutsulla, mutta ketjun suorittaminen jatkuu — suunnitellusti avoimesti epäonnistuva toimintamalli.

## Kattavuus ja rajoitukset

Suojamekanismirekisteri on kytketty vain chat-käsittelyputkeen. Nämä rajoitukset on
kiinnitetty testeillä `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` ja
`tests/unit/guardrail-pipeline-characterization.test.ts`; päivitä nämä testit
tarkoituksella, kun toiminta muuttuu.

### Missä koukut suoritetaan

| Koukku / ohjaus                     | Suoritetaan seuraavissa                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | `handleChat`-funktion (`src/sse/handlers/chat.ts`) käsittelemät pyynnöt: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (ja `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` sekä Telegram-chat-välityspalvelin. Lisäksi hallintapaneelin testipäätepiste `/api/guardrails/test`. Ennakkokutsun esto palauttaa HTTP 400 -vastauksen. |
| `runPostCallHooks`                  | Vain **ei-suoratoistettavat** chat-vastaukset (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Suoratoistettavat vastaukset eivät koskaan saavuta sitä.                                                                                                                                                                                                                                                                                                       |
| Suoratoistettava PII                | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), joka putkitetaan tiedostossa `streamingPipeline.ts`, kun `PII_RESPONSE_SANITIZATION` on käytössä. Se ei ole suojamekanismi, joten käytöstäpoistokanavat eivät vaikuta siihen.                                                                                                                                                                                                                          |
| Injektionestoväliohjelmisto (vanha) | Jokainen kehotteita sisältävä `/v1`-reitti, mukaan lukien chat-tyyppiset reitit (katso [reittien kattavuus](#injection-guard-route-coverage--red-team-phase-8--block-d)). Vain kehoteinjektiot.                                                                                                                                                                                                                                                                      |

### Mitä ei kateta

- **Media-, upotus- ja datareitit** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) eivät koskaan saavuta rekisteriä. Niissä ei
  suoriteta PII-tietojen peittämistä, tunnistetietojen peittämistä tai modaliteettisiltaa. Niiden ainoa
  tarkistus on vanha injektionestoväliohjelmisto.
- **Suoratoistettaviin vastauksiin** ei sovelleta kutsun jälkeisiä suojamekanismeja: ei
  kutsun jälkeistä `pii-masker`- tai `credential-masker`-toimintoa eikä kutsun jälkeistä estoa. Vain suoratoiston PII-muunnos
  suoritetaan (kun `PII_RESPONSE_SANITIZATION` on käytössä). Suoratoistettavassa vastauksessa
  takaisin kaiutettuja tunnistetietoja ei peitetä.
- **Käytöstäpoistokanavat suhteessa väliohjelmistoon (suunnitellusti):** väliohjelmisto arvioi
  kehoteinjektion omalla `evaluatePromptInjection()`-kutsullaan välittämättä
  mitään kutsujan hallitsemaa käytöstäpoistoluetteloa. `block`-tila on pakollinen
  raja, jota kutsujan hallitsemilla käytöstäpoistoilla ei voi ohittaa, ei myöskään chat-tyyppisillä reiteillä
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). `prompt-injection`-suojamekanismin käytöstä poistaminen ohittaa
  vain rekisterin suojamekanismin.

### Mikä näkee vastauksen ennen kutsun jälkeistä käsittelyä

Ei-suoratoistavalla polulla järjestys on: muistin poiminta → sisäänrakennettujen työkalujen
suoritus → kutsun jälkeiset suojamekanismit → kutsun jälkeinen estopoistuminen → tallennus semanttiseen välimuistiin.

- **Muistin poiminta** ja **työkalujen suoritus** näkevät vastauksen ennen kuin kutsun jälkeiset suojaukset voivat kirjoittaa sen uudelleen tai estää sen. Muistin poiminta on muutoksesta [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) lähtien käsitellyt poimitun tekstin `sanitizePII`-toiminnolla, kun `PII_RESPONSE_SANITIZATION` on käytössä (sekä suoratoistossa että ilman suoratoistoa), mutta vastaus, jonka kutsun jälkeinen suojaus myöhemmin estää, on silti jo tarjottu muistille ja työkaluille.
- **Semanttinen välimuisti** tallentaa vastauksen kutsun jälkeisen käsittelyn jälkeen, joten se tallentaa uudelleenkirjoitetun vastauksen, eikä estettyä vastausta koskaan tallenneta välimuistiin. Välimuistin tietueet avainnetaan API-avaimen mukaan.

## Määritys

Sisäänrakennettujen suojakaiteiden lukemat ympäristömuuttujat:

| Muuttuja                              | Käyttäjä                      | Vaikutus                                                                                               |
| ------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`            | Aseta arvoksi `false`, jos haluat poistaa tunnistuksen kokonaan käytöstä.                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`            | Injektiokäytäntö: `warn`, `block` tai `log`. Vanha arvo `redact` ei korvaa injektiotekstiä.            |
| `INJECTION_GUARD_MODE`                | `prompt-injection`            | Injektiosuojan tila; myös tietokannan ominaisuuslippu, joka **ohittaa** ympäristömuuttujat (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`            | Vähimmäisvakavuusaste, jonka `MODE=block` hylkää: `high` (oletus), `medium` tai `low`.                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`            | Vanha alias muuttujalle `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                             |
| `PII_REDACTION_ENABLED`               | `pii-masker`                  | Kun arvo on `true`, pyynnön henkilötiedot peitetään (injektiotilasta riippumatta).                     |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (jatkokäsittely) | Ohjaa vastauksen peittotoiminnon käyttäytymistä.                                                       |

Modality Bridgen suojakaiteet lukevat ajonaikaisen määrityksen tietokantapohjaisesta asetussäilöstä (`getSettings()`), eivät ympäristömuuttujista. Vision ensisijaiset avaimet ovat `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`. Vanhoja `visionBridge*`-avaimia hyväksytään vain dokumentoituna yhden syklin lukemisen varavaihtoehtona; hallintapaneelin kirjoitukset käyttävät ensisijaisia avaimia. Oletusarvot ja varavaihtoehtojen ratkaisija sijaitsevat tiedostossa `src/shared/constants/modalityBridgeDefaults.ts`, ja vanhat vakiot säilytetään tiedostossa `src/shared/constants/visionBridgeDefaults.ts`.

Ääni käyttää asetuksia `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` sekä jaettuja `modalityBridgeCache*`-asetuksia. Äänelle ei ole vanhojen avainten varavaihtoehtoa, koska nämä avaimet otettiin käyttöön Modality Bridge -skeeman yhteydessä.

Video käyttää asetuksia `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` ja `modalityBridgeVideoTimeout` sekä jaettuja `modalityBridgeCache*`-asetuksia. Se on oletusarvoisesti poissa käytöstä, koska FFmpeg/ffprobe ovat valinnaisia käyttöympäristön riippuvuuksia ja kuvakehysten kuvailu lisää viivettä ja mallin käyttökustannuksia.

## Mukautetut suojaukset

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

Vaiheet:

1. Luo tiedosto `src/lib/guardrails/myGuardrail.ts`, joka laajentaa `BaseGuardrail`-luokkaa.
2. Toteuta `preCall` ja/tai `postCall`.
3. Rekisteröi joko tuonnin yhteydessä (lisää `registerDefaultGuardrails`-funktiosta) tai
   kutsu `guardrailRegistry.register(...)` ajon aikana — rekisteri korvaa
   aiemman suojauksen, jolla on sama normalisoitu nimi.
4. Lisää testit hakemistoon `tests/unit/` (olemassa olevia esimerkkejä:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testaus

Käytä `resetGuardrailsForTests()`-funktiota testien välillä aloittaaksesi tunnetusta tilasta.
Välitä `{ registerDefaults: false }`, jos haluat aloittaa tyhjällä rekisterillä ja
rekisteröidä vain testattavat suojaukset. Vision Bridge tukee riippuvuuksien
injektointia (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge tarjoaa
vastaavat liityntäkohdat asetuksille, ominaisuuksille, STT-mallin valinnalle, tunnistetietojen
tarkistuksille ja transkriptiolle. Testeillä voidaan siten käsitellä molemmat työnkulut ilman
tietokanta- tai verkkoyhteyttä.

## Katso myös

- `src/lib/guardrails/` — toteutus
- `src/shared/utils/inputSanitizer.ts` — jaettu tunnistin, johon
  kehoteinjektioiden ja henkilötietojen peittäminen perustuvat
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridgen oletukset ja
  pakotetun siltauksen malliluettelo
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio-ajonaikaiset jaetut oletukset
- `docs/architecture/RESILIENCE_GUIDE.md` — erillinen kerros (katkaisija, palautumisajat)
- `docs/reference/ENVIRONMENT.md` — kattava ympäristömuuttujien viite

## Injektiosuojauksen reittikattavuus ja red-team-testaus (vaihe 8 · lohko D)

Injektiosuojaus (`createInjectionGuard` / `withInjectionGuard`) kattaa kaikki reitit,
jotka hyväksyvät käyttäjän kehotteita. Se noudattaa `INJECTION_GUARD_MODE`-asetusta (oletus `warn` = vain lokitus;
`block` = palauttaa HTTP 400 `SECURITY_001`).

| Tyyppi            | Reitit                                                                                                                                               | Oletustila |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Teksti (nykyiset) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn       |
| Generatiiviset    | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn       |
| Data              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn       |

Tekstin poiminta (`extractMessageContents`) kattaa kentät `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testaus (öisin, `nightly-llm-security.yml`):** promptfoo varmistaa, että jokainen reitti estää
OWASP-LLM-korpuksen tilassa `INJECTION_GUARD_MODE=block`; garak suorittaa koetuksia (ohitetaan ilman salaisuutta).
`moderations` on mukana yhdenmukaisuuden vuoksi. Estotila on pakollinen raja: `evaluatePromptInjection()`
ohittaa väliohjelmiston sille välittämän pyyntökohtaisen käytöstäpoistoluettelon, joten `disabledGuardrails`-asetus
**ei** vapauta reittiä siitä ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Öisin suoritettavassa työnkulussa (`.github/workflows/nightly-llm-security.yml`, cron + manuaalinen
käynnistys) on kaksi työtä:

- **`promptfoo-guard` (estävä)** — suorittaa komennon `promptfoo eval -c promptfooconfig.yaml`
  asetuksella `INJECTION_GUARD_MODE=block`. Jokainen vihamielinen tapaus (esim. "ignore all
  previous instructions…", DAN-tyyliset suojauksen ohitukset) varmistaa, että vastaus sisältää
  ehdon `error.code === "SECURITY_001"`, eli että suojaus todella hylkäsi pyynnön.
- **`garak` (neuvoa-antava)** — suorittaa garakin asetuksella `--probes promptinject,dan,leakreplay`
  paikallista OmniRoute-instanssia (`http://localhost:20128/v1`) vasten. Suoritus riippuu
  palveluntarjoajan salaisuudesta (`PROMPTFOO_PROVIDER_KEY`); ilman sitä työ ohitetaan hallitusti, ja komennon
  loppuun on lisätty `|| true`, joten se raportoi tulokset aiheuttamatta CI-ajon epäonnistumista.

Suojauksen apufunktion (`createInjectionGuard` / `withInjectionGuard`)
kattavuus ulottuu jokaiseen kehotteita sisältävään `/v1`-reittiin; kehoteteksti poimitaan
kentistä `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
`extractMessageContents()`-funktiolla tiedostossa `src/shared/utils/inputSanitizer.ts`.
