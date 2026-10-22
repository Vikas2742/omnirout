# Guardrails (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Tõeallikas:** `src/lib/guardrails/`
> **Viimati uuendatud:** 2026-10-17 — v3.8.52 (lisatud [Katvus ja piirangud](#coverage-and-limits):
> milliste marsruutide ja vastuseteedeni haagid jõuavad, ühendatud keelamispäised (#16412), sisestuse
> blokeerimisrežiim kohustusliku piirina (#16413) ning mis näeb vastust enne kutsejärgset etappi)

Kaitsepiirded jõustavad ohutuse, reeglid ja sisuteisendused OmniRoute'i ning
ülesvoolupakkujate vahelisel piiril. Iga kaitsepiire saab kontrollida (ja
valikuliselt tagasi lükata, teisendada või annoteerida) päringu kasulikke andmeid (`preCall`) ja
ülesvooluvastuseid (`postCall`).

Süsteem on **tõrke korral avatud**: kui kaitsepiire käivitamisel erindi tekitab, salvestab register
vea ja jätkab päringu nurjumise asemel järgmise kaitsepiirdega.
Blokeerimine on selgesõnaline otsus (`block: true`), mitte kunagi juhuslik tagajärg.
Ainus erand on katkestatud päring: kui kutsuja `signal` katkestatakse,
lükkab erindi tekitanud kaitsepiire haagi käituse vahelejätmise asemel tagasi.

Haake **ei** käitata iga marsruudi ega iga vastuse puhul. Enne kaitsepiirdele
kui turvameetmele tuginemist lugege jaotist
[Katvus ja piirangud](#coverage-and-limits).

## Sisseehitatud kaitsepiirded

Register laadib importimisel automaatselt kuus kaitsepiiret prioriteedi järjekorras
(vt `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteet | Nimi                | Etapp/etapid   | Fail                  |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Väiksema prioriteedinumbriga kaitsepiirded käivitatakse **esimesena**.

### Nägemissild (`visionBridge.ts`) — modaalsussild PR-1

GLM 5.3 baasmudelil ja mudelitel `glm-5.3-{low,high,max}` on registri/spetsifikatsiooni metaandmetes
selgesõnaliselt määratud `supportsVision:false`. GLM 5.3 Flashi variandid
jäävad loomuliku nägemisvõimega mudeliteks. Claude Code'i `/v1/messages` marsruut siseneb
jagatud `handleChat` kutse-eelsesse kaitsepiirete ahelasse **enne** Claude'ist OpenAI-ks
teisendamist; pesastatud `Read` tööriista tulemuste pilte tuleb kirjeldada või käsitleda
enne, kui see teisendus tõstab need OpenAI `image_url` sisuks (#17069).

Püüab kinni pilte sisaldavad päringud, mis on suunatud **nägemisvõimeta mudelitele**, ning
suunab kogu päringu ümber nägemisvõimelisele mudelile või asendab pildiosad
enne ülesvoolukutset tekstikirjeldustega, mille loob seadistatav nägemismudel.
See võimaldab ainult teksti toetavatel pakkujatel multimodaalseid kasulikke andmeid
läbipaistvalt töödelda.

Töövoog:

1. Jäta vahele, kui sihtmudel juba toetab nägemist (välja arvatud juhul, kui see on
   sundsilla loendis `isVisionBridgeForcedModel`).
2. Eralda pildiosad funktsiooni `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`) abil, mis delegeerib **ühtsele meediadetektorile**
   `detectMediaParts()` failis `open-sse/utils/mediaParts.ts` — ainsale
   tõeallikale, mida jagatakse kombineeritud ühilduvusfiltriga.
   Eraldamine on lubatud ainult nende kujude puhul, mida `replaceImageParts` saab
   tagasi paigutada (eraldamise↔asendamise leping): OpenAI `image_url`, Anthropicu base64
   `source.type:"base64"`, Anthropicu URL `source.type:"url"` ja Responses
   API `input_image`. Samuti eraldatakse Claude Code'i
   `tool_result.content` ja Responsesi tööriistaväljunditesse pesastatud sobivad pildid ning
   asendatakse nende algsetel teedel; ainult indikaatorit sisaldavad kujud kuuluvad kombineeritud filtri
   töödeldava materjali hulka ja neid ei eraldata.
   Kui midagi ei leita, jäta vahele.
3. Lahenda käitusaegne konfiguratsioon funktsiooni `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) abil: uued `modalityBridge*`
   seadistusvõtmed on ülimuslikud; pärandvõtmed `visionBridge*` jäävad **ühe tsükli
   varuvariandiks** (tagasipööramisaken). Kui sild on keelatud, jäta etapp enne igasugust
   meedia läbivaatamist vahele.
4. Režiimivalija (`modalityBridgeVisionMode`, vt allolevat tabelit) otsustab
   ümbersuunamise või kirjeldamise vahel. Ümbersuunamine tagastab `modifiedPayload`, milles on vahetatud
   ainult `model`, koos metaandmetega `{ rerouted, fromModel, toModel, imagesKept }`.
5. Kirjeldamistee: piira piltide arv väärtusega `maxImages`, koosta ülesannet arvestav viip,
   kontrolli kirjelduste vahemälu, kutsu nägemismudelit **paralleelselt**
   (`Promise.allSettled`) ja sisesta piltide asemele tekstiosad
   `[Image N]: <description>`. Nurjunud kirjeldamine annab tulemuseks `null`: toorpilt säilitatakse
   tundmatute/nägemisvõimeliste sihtmärkide puhul (#4012), kuid **kinnitatud, ainult teksti toetav otsene
   sihtmärk** või nägemisvõimeta kombinatsioon saab iga kirjeldamata pildi jaoks selgesõnalise
   tekstiasenduse `(unavailable — no vision-capable provider connected)`,
   sealhulgas osaliste tõrgete ja kirjeldamiskutsete piirmäära ületavate piltide puhul (#17069).
   Olemasolev kõigi nurjunud kombineeritud kirjelduste varuvariant
   jääb alles (#8430).
6. Tagasta `modifiedPayload` + metaandmed (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Režiimivalija (`modalityBridgeVisionMode`)

| Režiim     | Vaikimisi | Käitumine                                                                                                                                                                                                                                                                                                                    |
| ---------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔         | Pärandheuristika muutmata kujul (#6640/#7204): mitte-combo-/`auto/`-mudelid suunatakse ümber parimale nägemismudelile, välja arvatud juhul, kui algsel mudelil on juba kasutatavad mandaadid (siis kirjeldatakse); combo-sihtmärkide puhul kirjeldatakse alati.                                                              |
| `describe` |           | Kirjeldatakse alati — ümbersuunamisplokk jäetakse täielikult vahele; alati vastab kasutaja valitud mudel.                                                                                                                                                                                                                    |
| `reroute`  |           | Sunnitud ümbersuunamine: mandaate omava mudeli säilitamise kontrollist minnakse mööda. Ümbersuunamise **sihtmärgi** mandaatide kontroll kehtib endiselt — kui kasutatavat nägemissihtmärki pole, blokeerib sild selge veateatega, selle asemel et kirjeldada või saata töötlemata pilte ainult teksti toetavale sihtmärgile. |

Sunnitud režiimid lõpetavad töö **enne** autoheuristika käivitumist; `auto` käitumine
on bait-baidi haaval identne PR-1-eelse kaitsemehhanismiga.

#### API-võtme ulatus (`visionBridgeKeyScope.ts`)

Kui kutsuja API-võti piirab `allowedConnections`, kvoodirühmi
(`allowedQuotas`) või mudeleid (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), valib sild ainult
selliseid ümbersuunamis- ja kirjeldusmudeleid, mida võti tohib kasutada, ning
ühendustel, mida võti tohib kasutada. Seejärel läbib kirjelduskutse alati
OmniRoute'i tagasisilmuse päisega `x-omniroute-self-loop-key-id`, nii et vastuvõttev
vestluspäring jõustab uuesti selle võtme ühenduse- ja mudelipoliitika.
`enforceApiKeyPolicy()` arvestab seda päist ainult koos tagasisilmuse
Bearer-autentimisega, mistõttu saab see üksnes juurdepääsu kitsendada, ning
ID, mida ei õnnestu lahendada, lükatakse tagasi.

Kui võtmel pole lubatud kasutada ühtegi nägemismudelit, lükkab **kinnitatud ainult
teksti toetav sihtmärk** pildipäringu kohapeal selge HTTP 400 vastusega tagasi,
selle asemel et edastada pildibaidid võimetule ülesvooluteenusele (#17069).
Tundmatu või loomupärase nägemisvõimega sihtmärkide puhul säilitab kirjeldustee
oma varasema tõrke korral lubava käitumise (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Võtmeta päringud ja nende piiranguteta võtmed käituvad täpselt nagu varem.

#### Ülesandeteadlik kirjeldusviip (`modalityBridgeVisionTaskAware`)

Vaikimisi **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) lisab
baaskirjeldusviibale **viimase kasutajasõnumi** teksti (kärbitud 500 märgini),
suunates kirjelduse sellele, mida kasutaja tegelikult küsis
(codex-vision-proxy muster), ning paludes nägemismudelil nähtava teksti
transkribeerida. Kui lipp on välja lülitatud — või kasutaja tekst puudub —,
kasutatakse baaskirjeldusviipa muutmata kujul.

Kirjelduse tagasisilmuse enda OpenAI-ga ühilduv päring (`callVisionModelSingle()`
failis `visionBridgeHelpers.ts`) taotleb alati väärtust `image_url.detail: "high"` —
tingimusteta, iga kutsuja/pakkuja puhul ning sõltumata mis tahes kliendisignaalist.
Madala detailsusega diskreetimine vähendab OCR-i täpsust just selle
tekstitranskriptsiooni ülesande puhul, mida see viip nõuab, mistõttu taotleb
kirjelduskutse alati suurt detailsust, olenemata algses sissetulevas päringus
kasutatud detailsustasemest. See mõjutab ainult sisemise kirjelduspäringu keha;
see ei muuda viisi, kuidas OmniRoute edastab kutsuja enda väärtuse
`image_url.detail` põhipäringus — see vaikeväärtus rakendatakse eraldi ja ainult
tuvastatud OpenCode'i klientidele funktsioonis `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Kirjelduse tagasisilmuse
Anthropicu juhtmevormingu harus pole välja `detail` ning kumbki vaikeväärtus
seda ei mõjuta.

#### Kirjelduse väljundipiirang (`modalityBridgeVisionMaxChars`)

| Võti                           | Vaikimisi | Vahemik           |
| ------------------------------ | --------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` või 100–50000 |

`0` (vaikimisi) tähendab, et **piirang puudub** — funktsiooni
`callVisionModel()` tagastatud kirjeldus edastatakse muutmata kujul, säilitades
senise käitumise. Iga väärtus vahemikus 100–50000 kärbib kirjeldust järelliitega
`…`, enne kui see lisatakse tagasi kujul `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` failis `src/lib/guardrails/visionBridge.ts`).
Suurendage seda detailirohkete OCR-ülesannete puhul, kus allavoolumudel vajab
täielikku transkriptsiooni; vähendage seda, et piirata jutukate nägemismudelite
loakasutust. Juhtpaneeli väli asub vahekaardi Vision paneelil Advanced
(`modality-bridge-max-chars` failis `ModalityBridgeVisionTab.tsx`) ning tõstab
kõik väärtused vahemikus 1–99 alumise piirini 100, jättes sõnaselge väärtuse
`0` muutmata — `0` on iseseisvalt kehtiv Zodi väärtus
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), mitte üksnes
„määramata“ vaikeväärtus.

#### Kirjelduse vahemälu (`modalityBridge/bridgeCache.ts`)

Mälusisene LRU + TTL-vahemälu kirjelduse väljundite jaoks, mida jagatakse kogu
protsessi ulatuses. Võti = `sha256(imageRef + composedPrompt + configuredBridgeModel)`
koos pikkuseprefiksiga raamimisega (väljade piiridel kokkupõrkeid ei teki).
Mudeliosa on **konfigureeritud** sildmudel, mitte tegelikult vastanud mudel —
`callVisionModel` võib sisemiselt kasutada varumudelit ning katsepõhine võtmete
loomine killustaks vahemälu. Nurjunud kirjeldusi ei salvestata kunagi vahemällu.
Seaded:

| Võti                            | Vaikimisi | Vahemik |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Kaugpiltide normaliseerimine (eneselingi describe/base64 päring)

Kui sild laadib **kaugpildi** ise alla — Anthropic describe-enesekutse ja claude-wire-vormingu base64-teisendus (`ensureBase64ImagesForClaudeWire`), mõlemad `fetchRemoteImageAsDataUri()` kaudu failis `visionBridgeHelpers.ts` — läbib saadud data-URI enne nägemismudeli päringusse manustamist funktsiooni `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`). Liiga suured pildid vähendatakse **2048px pikema küljeni** (vastavalt suuruse ülempiirile, mida OpenAI/Anthropic juba serveri poolel rakendavad), mis vähendab üleslaaditavate baitide hulka ja latentsust, muutmata seda, mida nägemismudel näeb. Suuruse muutmiseks kasutatakse dünaamilise impordi kaudu laaditavat paketti `sharp`: platvormil, kus selle native-binaarfaili laadimine ebaõnnestub, ei väljasta `normalizeDataUri()` **kunagi erindit** — selle asemel edastatakse algsed baidid muutmata kujul, mistõttu describe/base64-teisenduse töövoog jääb alati toimima. Ka mittepildilised baidid (kui päring ei tagastanud dekodeeritavat pilti) edastatakse muutmata kujul. Seda normaliseerimist rakendatakse ainult piltidele, mille sild laadib alla oma enesekutse jaoks — seda ei rakendata kunagi kutsuja töötlemata, muutmata edastatavale kasulikule koormusele, kooskõlas ainult nõusolekul muutmise põhimõttega (range reegel #20).

#### Seadete skeem + migratsioon

Uued võtmed `modalityBridge*` valideeritakse Zodiga skeemis `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, kolmik `modalityBridgeCache*` ja Audio Bridge'i kasutatav rühm `modalityBridgeAudio*`. Migratsioon `141_modality_bridge_settings.sql` kopeerib olemasolevad pärandvõtmete `visionBridge*` väärtused vastavatesse uutesse võtmetesse (idempotentselt ega kirjuta kunagi üle operaatori määratud `modalityBridge*` väärtust); pärandvõtmeid aktsepteeritakse ühe väljalasketsükli jooksul lugemise varuvariandina.

#### Läbipaistvuspäis + statistika

Describe-teisendatud vastused sisaldavad päist `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (mille koostab `buildModalityBridgeHeader()` failis `modalityBridge/bridgeStats.ts` ja lisab `withModalityBridgeHeader()` failis `src/sse/handlers/chatHelpers.ts`). Ümbersuunatud päringud päist **ei** saa — kasulik koormus jäi muutmata ja mudeli vahetus on juba nähtav vastuse keha väljal `model`.

`GET /api/modality-bridge/stats` (halduse autentimine, sama tase nagu `GET /api/settings`) tagastab mälus hoitavad modaalsusepõhised loendurid `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` modaalsuste `vision`, `audio` ja `video` jaoks. `averageLatencyMs` kasutab nimetajana väärtust `latencySamples`, mitte kõiki katseid; ajastuseta toimingu kohta ei tekitata fiktiivset nullmillisekundilist valimit. `bridged` jääb tagasiühilduvaks edukate teisenduste aliaseks; ebaõnnestunud katsed seda ei suurenda.
Loendurid lähtestatakse protsessi taaskäivitamisel teadlikult
(tegemist on telemeetria, mitte arvestusega).

#### Töölaua konfiguratsioon

Eraldi töölaualehe aadress on `/dashboard/settings/modality-bridge`. Selle URL-i kaudu avatavad vahekaardid `Vision`, `Audio` ja `Video` säilitavad vahetamisel päringuparameetrid, muutes ainult väärtust `tab`. Vahekaart Vision võimaldab hallata aktiveerimist, režiimi, mudeli valikut (sealhulgas automaatset vaikevalikut), ülesandeteadlikku viipamist, täpsemaid ajalõpu-, pildi-, kirjelduse pikkuse ja vahemälu piiranguid, käitusaegseid loendureid ning kaitsemeetmetega näidispäringut. Ka vahekaart Audio on kasutatav: see võimaldab hallata aktiveerimist, ainult STT jaoks mõeldud mudelivalijat koos valikuga Auto, ajalõpu ja klipi maksimaalse pikkuse piiranguid, heli loendureid ning `input_audio` näidistesti. Vahekaart Video on toimiv: see kuvab FFmpeg/ffprobe'i käitusoleku — ühe neljast selgelt määratletud kasutajaliidese olekust (`unknown`, kui kontroll on pooleli või seda ei saanud lõpule viia; `restricted`, kui töölaud asub muul hostil kui loopback ja kontroll jäetakse kliendi poolel vahele; `unavailable`, kui kontroll on tehtud ja puudumine kinnitatud; või `available` koos FFmpeg/ffprobe'i versioonidega) — salvestab aktiveerimise ning mudeli-, kaadri-, video- ja ajalõpupiirangud, filtreerib mudelivalijas ainult nägemisvõimekusega mudelid ning kuvab video loendurid.

Varasem AI seadete all olev Vision Bridge'i kaart on nüüd ühilduvuslink uuele lehele; see ei halda enam vormi teist koopiat. Media Providers lingib ka Image-to-Texti ja Speech-to-Texti töövood vastavatele Modality Bridge'i vahekaartidele, eemaldamata olemasolevat Speech-to-Texti katsekeskkonda.

**Eneselingi vastuvõtukontrollist möödumine:** kui describe-kutse marsruuditakse läbi OmniRoute'i enda `/v1` eneselingi (mittestandardse teenusepakkuja mudel), saadab alampäring päise `x-omniroute-admission-bypass: internal` ning autentimiseks kasutatakse lahendatud eneselingi pääsuteavet — kohalikus režiimis lokaalset `sk_omniroute` sentinelväärtust või operaatori seadistatud keskkonnamuutuja `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` võtit (#1350), et juurutused väärtusega `REQUIRE_API_KEY=true` saaksid describe-kutset siiski käitada. Möödumist lubatakse ainult täpselt nende pääsuandmete korral, seega ei saa välised kliendid kasutada seda päist vastuvõtukontrolli vahelejätmiseks.

Pärandvaikeväärtused asuvad failis `src/shared/constants/visionBridgeDefaults.ts`; uued režiimi, ülesandeteadlikkuse ja vahemälu vaikeväärtused ning seadete lahendaja asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`. Kaitsepiirel on konstruktori suvand `deps`, et testid saaksid sisestada `getSettings` ja `callVisionModel` võltsrakendusi.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Püüab heli sisaldavad vestluspäringud kinni enne, kui need jõuavad sihtkohta, mille puhul pole teada, et see toetaks helisisendit. See ei suuna vestluspäringut kunagi ümber: heliosad transkribeeritakse olemasoleva OpenAI-ga ühilduva mitmeosalise lõpp-punkti kaudu ning valitud vestlusmudel jätkab tekstitranskriptsioonidega.

Töövoog:

1. Lahenda `supportsAudio` funktsiooni `getResolvedModelCapabilities()` kaudu. Esmalt arvestatakse registris provider-registry määratud metaandmeid, seejärel staatilisi mudeli metaandmeid ja lõpuks sünkroonitud välja `modalities_input`. Deklareeritud sisendiloend, milles puudub `audio`, annab tulemuseks `false`; võimekust kinnitavate andmete puudumisel on tulemus `null`. Nii `false` kui ka `null` aktiveerivad konservatiivse silla, samas kui `true` jätab selle vahele.
2. Lahenda `modalityBridgeAudio*` sätted ja eralda iga sõnumi ülemiselt tasemelt liidetavad heliosad jagatud detektori `detectMediaParts()` abil. Toetatud edastusvormingud on OpenAI `input_audio`, `audio_url` ja `source.media_type: "audio/*"`. Pesastatud heli tuvastatakse marsruutimiseks, kuid liitmistee ei eemalda seda. Tööd piirab `modalityBridgeAudioMaxClips`; hilisemad osad jäävad puutumata.
3. Kasuta seadistatud väärtust `provider/model` või lase funktsioonil `selectAudioBridgeModel()` läbida `AUDIO_TRANSCRIPTION_PROVIDERS` stabiilses kataloogijärjestuses ning valida esimene mudel, mille jaoks on olemas kasutatav aktiivne teenusepakkuja mandaat.
4. `callAudioTranscription()` teisendab base64-/data-URI-heli mitmeosalise vormingu väljaks `file` või laadib kaugressursi `audio_url` alla ainult avalikke ressursse lubava väljamineva liikluse kaitse kaudu, kasutades DNS-i sidumist ja 25 MB piirangut. Seejärel saadab see faili ja valitud mudeli POST-päringuga kohalikku isetagasiside lõpp-punkti `/v1/audio/transcriptions`, autentides päringu funktsiooniga `resolveSelfLoopBearer()`. Olemasolev transkriptsioonimarsruut teostab tavapärase mandaadiotsingu, ooteaja ja päringusageduse piirangute käsitluse ning teenusepakkujale edastamise.
5. Õnnestunud kutsete korral asendatakse vastavad osad tekstiga `[Audio N]: <transcript>`. Kutsed käivitatakse funktsiooniga `Promise.allSettled`: üksiku kutse nurjumisel säilitatakse vastav algne heliosa (#4012 leping). Kui kõik kutsed nurjuvad ja sihtmärgi puhul on tõendatud `supportsAudio === false`, asendatakse osad tekstiga `[Audio N]: (unavailable — no STT provider connected)` (#8430 leping). Tundmatu sihtmärgi (`null`) puhul jääb tulemus kõigi kutsete nurjumisel puutumata. Tõendatult ainult teksti toetav sihtmärk, mille jaoks pole kasutatavat STT mandaati, saab sama sõnaselge asendusteksti ilma võrgukutset tegemata.

Õnnestunud transkriptsioonid kasutavad protsessiülest Modality Bridge'i LRU-/TTL-vahemälu. Võti ühendab heliviite, stabiilse toimingusildi `audio-transcription` ja valitud STT mudeli; nurjumisi ei salvestata kunagi vahemällu. Helitöötluskatsed uuendavad jagatud loendureid `bridged`, `cacheHits`, `failures` ja `lastUsedAt`. Teisendatud vastused sisaldavad päist `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; puutumata päringud ei saa Audio Bridge'i segmenti.

Käitusaegsed sätted on andmebaasipõhised ja Zodiga valideeritud:

| Võti                          | Vaikeväärtus | Vahemik või väärtus   |
| ----------------------------- | ------------ | --------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                     |
| `modalityBridgeAudioModel`    | `""`         | Automaatne või STT ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000           |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                  |

Jagatud vahemälu juhitakse jätkuvalt sätetega `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja `modalityBridgeCacheMaxEntries`.

### Videosild (`videoBridge.ts`, `videoBridgePipeline.ts`)

Püüab enne teadaoleva loomuliku videotoeta sihtmärgi kutsumist kinni Chat Completionsi `messages`-välja ja Responses API `input`-välja ülemise taseme videoosad. Toetatud vormingud on `input_video`, `video_url`, `video_source`, HTTPS-i URL-id ja `data:video/*;base64,...` data-URI-d. Tekstis olevaid lihtsaid failinimesid ei käsitleta videotena.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) vastutab päringu läbimise, võimekuse ja poliitika kontrolli, päringupõhise koondamise ning vastuse kasuliku sisu eest. Videopõhine töö — hankimine, terviktulemuse vahemällu salvestamine, kaadrijada kirjeldamine (mis ühendab sellesse kõik kutsuja deklareeritud helitranskriptsioonid) ning katsepõhised mõõdikud, katkestamine ja puhastamine — on peidetud mooduli `videoBridgePipeline.ts` funktsiooni `processVideoPart` taha, mida kutsutakse üks kord iga videoosa kohta funktsiooni `preCall` tsükli sees. See moodul määratleb ka sõnaselged pordipiirid `VideoMediaBrokerPort` (baitide hankimine ja valimisse võetud kaadrite eraldamine), `VideoAudioTranscriptionPort` (kutsuja deklareeritud helitranskriptsiooni ühendamine valimisse võetud kaadrite allkirjadega) ja `VideoDrilldownPort` (kaadrite süvaanalüüsi püsivuspiir; pole veel funktsiooniga `processVideoPart` ühendatud — praegu kirjutab süvaanalüüsi kirjeid ainult eraldiseisev marsruut `/api/modality-bridge/video/drilldown`).

Avalik `/v1` päringutee ei impordi ega käivita kunagi alamprotsessi. Kaugvideod laaditakse alla 50 MiB piiranguga; tekstisisesel base64-videol on konservatiivne 36 MiB dekodeeritud mahu piirang video kohta, et mudeli, sõnumite ja raamimise ümbris mahuks avalike JSON-päringute vastuvõtupiirangu 50 MiB sisse. Tekstisisest pikkust ja dekodeeritud mahu hinnanguid kontrollitakse enne mälu eraldamist. HTTPS on nõutav nii algse kaug-URL-i kui ka iga ümbersuunamise puhul, kasutades olemasolevat ainult avalikke ressursse lubavat väljamineva liikluse kaitset koos DNS-i sidumisega. Seejärel liiguvad baidid üle täpselt määratud sisemise vahendajapiiri `POST /api/modality-bridge/video/extract`. See marsruut on korraga nii `LOCAL_ONLY` kui ka `SPAWN_CAPABLE`, aktsepteerib ainult protsessipõhiselt autenditud usaldusväärset tagasisideaadressi päringut ega aktsepteeri kunagi URL-i, failisüsteemi teed, käivitatavat faili ega argumentide loendit. API päringukeha mahu töötlemisahel ja töötleja järkjärguline päringukeha lugeja jõustavad sõltumatult vahendaja sisendi 50 MiB piirangu. Selle piiratud järjekord käitab korraga üht eraldamist, lubab nelja ootel tööd ja piirab ootel sisendi kogumahu 100 MiB-ni.

Vahendaja sees loeb `ffprobe` privaatset kohalikku faili; fikseeritud vormingute
lubatud loend välistab esitusloendite ja manifestide vormingud. Lubatud MOV-perekonna
konteinerite korral jäävad välised MOV-andmeviited vaikimisi keelatuks ning
fikseeritud käsk ei luba neid. Nii `ffprobe` kui ka `ffmpeg` kasutavad ainult
`file`-protokolli lubatud loendit, üht lõime, fikseeritud argumentide massiive,
ilma kestata, ning täitmisfailid leitakse muutujast `PATH`. Manustatud pildiga
kaanepildivood ei ole esitatavad kandidaadid. Kõik esitatavad vood peavad
piirangutele vastama ning enne deterministlikku väikseima indeksiga varuvalikut
eelistatakse sõnaselgelt määratud vaikevoogu. Videote kestus on piiratud 600
sekundiga, iga mõõtme suurus 8 192 piksliga ja lähtepikslite arv 33 554 432-ga.
FFmpeg võtab keskpunktidest 1–16 JPEG-kaadrit, vähendab pikema külje suurust
maksimaalselt 1 024 pikslini ilma väiksemaid sisendeid suurendamata ega saa
kunagi URL-i. Vaikimisi on diskreetimispoliitika `uniform`. Valikulised
`scene_aware` ja eksperimentaalne `segment_aware` poliitika teevad juba
valideeritud kohaliku voo üle veel ühe fikseeritud FFmpegi läbimi, valivad
piiratud hulga `showinfo` stseeniajatemplid ning kasutavad detektori tõrke,
ajalõpu, vigase väljundi või tühja kandidaatide hulga korral deterministlikult
varuvariandina samu ühtlasi keskpunkte. Segmenditeadlik režiim jaotab
keskpunktiproovid proportsionaalselt valideeritud stseeniintervallidega;
segmenditeadlikke tõendeid ja varukäitumist kirjeldatakse üksikasjalikult
allpool. Kõva 16 kaadri piirang rakendatakse iga poliitika puhul pärast
valimist. Kui stseeniteadlikul päringul on ainult ühe kaadri eelarve, kasutab
see aktiivse täisvideo või fookusakna ühtlast keskpunkti ja esitab
`policyEffective: uniform`: üksainus valitud stseenikaader ei saa säilitada
mõlemat ajalist otsa. Kutsuja võib valikuliselt esitada lõpliku fookusakna
(`start`/`end` sekundites); piirid kärbitakse meediumi kestuse järgi,
vastupidises järjekorras või mittelõplikud aknad lükatakse tagasi ning kõiki
diskreetimispoliitikaid rakendatakse ainult normaliseeritud intervalli sees.
Tulemuseks saadud aken lisatakse diskreetimise metaandmetesse ja ebausaldusväärse
kirjelduse prefiksisse, et järgnevad mudelid saaksid eristada fookustatud
väljavõtet täielikust ajajoonest.

Semantiline pealdise fookus on eraldiseisev, sõnaselgelt määratav seade.
Vaikimisi kasutatav `full` analüüsirežiim säilitab olemasoleva kaadriviiba ega
edasta päringu teksti kunagi pealdisemudelile. Režiimis `focused` loeb sild
ainult uusimat mittetühja kasutaja loodud välja `text`/`input_text` samast Chati
või Responsesi konteinerist, normaliseerib selle NFC-vormingusse, ahendab
juhtmärgid ja tühimärgid ning piirab selle 500 Unicode'i koodipunktiga. Tühja
tulemuse korral kasutatakse varuvariandina täpselt `full` viipa. Kasutatav
vihje serialiseeritakse JSON-ina spetsiaalses ebausaldusväärse kasutajakonteksti
plokis ja see võib ainult vaadeldavaid üksikasju tähtsuse järjekorda seada; see
ei saa tühistada eraldiseisvat hoiatust meediumis nähtavate või kuuldavate
juhiste järgimise eest. Tekstiline fookus ei tuleta kunagi `start`/`end`
väärtusi ega muuda ajalist diskreetijat.

#### FU-07 struktuursed segmenditõendid

`segment_aware` kasutab juba valideeritud kohaliku videovoo üle üht piiratud
eelanalüüsi läbimit. Fikseeritud filtriahel skaleerib esmalt laiuse maksimaalselt
320 pikslini, tuvastab stseenimuutused ja tardunud intervallid ning võtab
seejärel hägususe, keskmise heleduse ja ruumilise/ajalise teabe jaoks ühe kaadri
sekundis. Läbim on piiratud 600 struktuurse prooviga, ühe FFmpegi/filtri
lõimega, samade ainult `file`-protokolli ja konteinerite lubatud loenditega,
1 MiB protsessiväljundi piiranguga ning maksimaalselt 30 sekundiga vahendaja
jagatud katkestuse/tähtaja raames. See ei võta päringust kunagi vastu käsku,
filtrit, teed ega URL-i.

Struktuursed väärtused on deterministlikud diskreetimistõendid, mitte video
semantiline mõistmine. Need ei järelda subjekte, tegevusi, pealdisi, kõnet ega
kasutaja kavatsust. Stseeni- ja tardumispiirid moodustavad segmendid;
tardumiskatvus, hägusus, säritus, ruumiline detailsus ja ajaline muutus
mõjutavad ainult seda, kuidas olemasolev 1–16 kaadri eelarve jaotatakse.
Täielikult tardunud segment on piiratud ühe kaadriga, samas kui tardumata
segmendid konkureerivad ülejäänud eelarve pärast. Kui piire on rohkem kui
kaadreid, säilitatakse ajajoonel ühtlane katvus, et kiired varased lõiked ei
saaks pikka lõppsegmenti varjata. Stseenipiirid, mis jäävad tardumispiirist
1-sekundilise analüüsieraldusvõime sisse, ühendatakse.

Puuduvate filtrite, vigaste/tühjade tõendite, detektori vea või piiratud
eelanalüüsi ajalõpu korral minnakse tõrkekindlalt üle täpselt ühtlaste
keskpunktide poliitikale. Kutsuja katkestus või vahendaja tähtaeg ei käivita
varuvarianti: see lõpetab poolelioleva alamprotsessi, takistab hilisemat
kaadrite eraldamist ning privaatne ajutine puu eemaldatakse plokis `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genereerib deterministlikud reaalsed
FFmpegi testandmed deduplitseerimisjärgse pealdisekutsete säästu, tiheda
liikumise eelarvejaotuse, hägususe/särituse/SI-TI tõendite, pika lõpuosaga
kiirete lõigete ja järkjärgulise hajumise valepositiivsete tulemuste jaoks.
See salvestab eelanalüüsi tegeliku kestuse ning juhul, kui `/usr/bin/time` on
saadaval, alamprotsessi protsessoriaja ja RSS-i maksimumi. Selle
kvaliteedikontrollid on ainult struktuursed oraaklid. Reaalse pealdisemudeli
kvaliteedi olekuks jääb `HOLD`, sest sellel testiraamistikul pole volitatud
lõpp-punkti ega fikseeritud hindajat. Ka rahalise säästu olekuks jääb `HOLD`,
kui `--caption-cost-per-call-usd` ei esita sõnaselget positiivset
kutsepõhist kuluhinnangut; skript ei fabritseeri kumbagi tulemust.

Iga kaadri maht on piiratud 4 MiB-ga, kõigi töötlemata kaadrite kogumaht 23 MiB-ga ja
serialiseeritud vahendaja vastus 32 MiB-ga. Privaatne ajutine kataloog eemaldatakse
plokis `finally`. OmniRoute ei sisalda FFmpeg-i ega aktsepteeri kohandatud
täitmisfaili teed. Enne pealdiste loomist rakendab sild konservatiivset visuaalset
duplikaatide eemaldamist: iga JPEG vähendatakse 16×16 halltoonide puhvriks ja seda
võrreldakse ainult viimase säilitatud kaadriga. Kui soovitud pealdiste eelarve
ületab ühte kaadrit, loob eraldamine piiratud kandidaatide kogumi, mille suurus on
kuni kahekordne eelarve, kuid mitte kunagi üle 16 kaadri. Soovitud ülempiiri
rakendatakse alles pärast duplikaatide eemaldamist; kui eelarve on vähemalt kaks,
säilitatakse lõpliku harvendamise käigus esimene ja viimane valitud kandidaat.
Versioonitud
`grayscale-16x16-mean-cells-v2` reegel kasutab kahest väärtusest suuremat: keskmine
heleduse erinevus või nende pisipildi lahtrite osakaal, mille normaliseeritud
erinevus on vähemalt 0,05. Duplikaadilävi on konstant 0,04, mis valiti
prognoositavuse huvides, mitte käitusaegse sättena avaldamiseks. See teisene
suure kontrastsusega signaal säilitab väikese liikumise ja nähtava teksti
muudatused, mida ainult keskmisel põhinev võrdlus võib varjata. Võrdleja või
dekoodri vigade korral jätkatakse töötlemist ja säilitatakse katvus. Väljundi
metaandmed eristavad eraldatud kandidaate, edukalt kasutatud kaadreid ja
eemaldatud visuaalseid duplikaate.

Selgesõnaliselt märgitud videoosa võib taotleda ajatemplitega kontaktlehte. Sild
koostab kuni 4 veeruga ja 16 kaadriga JPEG-ruudustiku. Iga 512-piksline lahter
lisab oma lähteajatempli suure kontrastsusega alumisele ribale, samal ajal kui
samad ajatemplid jäävad allavoolu seostamise ja auditi jaoks tekstilistesse
metaandmetesse. Tervikliku JPEG-i maht on endiselt piiratud 32 MiB-ga. Kui `sharp`
ei suuda ruudustikku dekodeerida või koostada, läheb sild tagasi üksikute
JPEG-kaadrite kasutamisele; kliendi katkestus levib siiski läbi kontaktlehe
toimingu.

Kasutuselevõtu tõendusmaterjal on teadlikult eraldatud sünteetilisest koostamise
mikrojõudlustestist. `scripts/perf/video-bridge-contact-sheet-eval.ts` määratleb
skeemiversiooniga A/B-testiraamistiku tegelike OpenAI-ga ühilduvate
nägemismudelite jaoks. See mõõdab teenusepakkuja esitatud tokenite arvu,
otsast lõpuni kogulatentsust (sealhulgas kontaktlehe koostamist), mudelikõnede
arvu ja manifestis määratletud faktide säilimist. Mudeli töötlemata vastuseid
aruandesse ei kirjutata; säilitatakse ainult SHA-256 räsid ja sobitatud faktide
ID-d. Testiraamistik ei tee võrgu- ega tasulise mudeli kõnet, välja arvatud juhul,
kui edastatakse `--execute-real` ning `--model`, `OMNIROUTE_BASE_URL` ja
`OMNIROUTE_API_KEY` on seadistatud. Ilma sellise selgesõnalise tegeliku
käivituseta jääb selle masinloetav otsus olekusse `HOLD`; üksnes sünteetilised
kasuliku koormuse ja kõnede arvu mõõtmised ei ole kasutuselevõtu tõendusmaterjal.

Kutsujad võivad toetatud videoosale lisada valikulise massiivi
`transcript.cues`, kui neil on juba olemas ajaliselt joondatud tekst. Iga vihje
peab sisaldama välja `text`, sondeeritud kestuse sisse jäävat lõplikku
`start`/`end` intervalli ja lubatud loendisse kuuluvat välja `source` (`client`,
`embedded` või `audio-bridge`); välja `confidence` vaikeväärtus on `1` ja see
peab jääma vahemikku `0` kuni `1`. Täpselt kattuvad vihjed ühendatakse.
OmniRoute ei alusta nende metaandmete põhjal kunagi transkribeerimist:
valideeritud vihjed kopeeritakse kirjeldatud tulemustesse koos allika,
usaldusväärsuse ja intervalliga ning esitatakse kaadripealdiste kõrval
mitteusaldusväärsete vaatlustena. Sobimatu, vahemikust väljas või päritoluta
tekst lükatakse tagasi, mitte ei segata pealdiste voogu. Mõlemad päringu keha
transkriptsioonikanalid normaliseerivad esitatud päritolu väärtuseks `client`,
sealhulgas kasutaja enda määratud sildid `embedded` või `audio-bridge`. Ainult
serveri hallatav adapter saab määrata need usaldatud sildid üksnes koodis
kasutatava argumendi `trustedSource` kaudu; päringu JSON-väli ei pääse sellele
argumendile ligi. Transkriptsiooni tekst jääb olenemata päritolust
mitteusaldusväärseks meediast tuletatud sisuks ega tohi kunagi määrata
autoriseerimist.

Kogenud kutsuja võib sama video jaoks esitada raja `audioTranscript`; seda
käsitletakse kliendi esitatud tekstina, mitte serveripoolse transkribeerimise
tõendina. Ühenduskiht töötleb visuaalseid ja helivaatlusi ühe tähtaja ja
katkestussignaali all, järjestab need ühisel ajajoonel, ühendab täpsed
duplikaadid ning tagastab osalise tulemuse, kui õnnestub ainult üks pool.
Sobimatu `audioTranscript` taandub osaliseks tulemuseks — visuaalne kirjeldus
säilitatakse ja heliharu talletab puhastatud tõrkekoodi — selle asemel, et kogu
video töötlemine nurjuda. Harupõhine saadavus, osalise tulemuse lipp ja
puhastatud tõrkekoodid säilitatakse kirjeldatud tulemuses, kaitsepiirete
metaandmetes (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), tulemuse vahemälu metaandmetes ja silla ühendamise
loendurites. Video Bridge'i vaikimisi töövoog ei käivita kõnest tekstiks
teisendamist ega laadi alla meedia teist koopiat; ilma selle selgesõnalise
rajata jääb see ainult videot töötlema.

**Transkriptsiooni säilitamine (#12150 P1).** See rakendub automaatselt alati, kui
Video Bridge (mis ise nõuab eraldi lubamist) renderdab transkriptsioonivihje — eraldi
säilitamislippu ei ole. Kui päring renderdab mis tahes transkriptsioonivihje (kutsuja deklareeritud
`transcript` või liidetud `audioTranscript`), märgib kaitsepiire selle väärtusega
`videoBridgeObserved` ja loob video kirjelduse redigeeritud varikoopia —
identse renderduse, milles iga vihje vabatekstiline sisu asendatakse väärtusega
`[redacted-video-transcript]`; see luuakse struktureeritud vihjevälja asendamisega
enne stringi koostamist (mitte kunagi lamendatud teksti sõelumisega, mistõttu ei saa ükski vihje
sisu — pahatahtlik ega tavapärane, sealhulgas märki `]` sisaldav sisu, näiteks
`[inaudible]`/`[music]` — säilida). Püsivasse kutselogi päringukehasse
asendatakse iga videost tuletatud tekstiosa selle redigeeritud varikoopiaga, kasutades vastendamiseks
sisu võrdsust; ankur `fullText` loetakse uuesti valmis, kutse-eelsest kaitsepiirde
kasulikust koormusest, mistõttu vastendamine õnnestub ka pärast seda, kui ahela hilisemad kaitsepiirded (PII ja
mandaadi maskijad, prioriteetidega 10/95) on kirjelduse teksti kohapeal ümber kirjutanud, ning
pärast seda, kui süsteemiviiba/üleandmise/mälu lisamine on sõnumimassiivi ümber kujundanud. Mudelile
ülesvoolu saadetav keha jääb muutmata. Vaadeldud päring ei lisa ka
midagi püsivasse mällu Memory (vahele jäetakse nii päringust kui ka vastusest tuletatud ekstraktimine),
mistõttu ei saa mudeli enda vastus transkriptsiooni teksti mällu Memory tagasi kajastada.

**Video toorväljad (#12430).** Kui sild on lubatud ja omamaise video tugi on teadmata või puudub, aktiveerivad määratud väljad `transcript`/`audioTranscript` samuti `videoBridgeObserved`, isegi pärast kirjelduse nurjumist või piirangu `maxVideos` saavutamist. `null` ja tühjad stringid lähevad arvesse; puuduvad väljad ja videoga mitteseotud metaandmed ei lähe. Säilitatavates koopiates redigeeritakse need väljad või jäetakse päring välja ning vahemäludest/mälust Memory minnakse mööda.

Neil varuteedel teisendatakse kutsuja kehtivad vihjed toetatud `text`/`input_text`
osadeks, mitte ebastandardseteks teenusepakkuja väljadeks. Mõlemad päringuga edastatud rajad
jäävad ebausaldusväärseteks `client` vaatlusteks koos selgesõnalise hoiatusega, et videot
ei kirjeldatud ja ajatempleid ei kontrollitud meediumi suhtes. Olemasolevad
256 vihje / 64 KiB kogumahu ja vihjepõhised eelarved kehtivad mõlemale rajale ühiselt;
ajatemplid peavad mahtuma vahendaja 600-sekundilise ülempiiri ja mis tahes määratud fookusakna
sisse. Sobimatud rajad hüljatakse, mitte ei edastata suvalise tekstina; kehtivat
paarilist võib siiski kasutada, välja arvatud juhul, kui nende ühine eelarve ületatakse. Null-/tühjad
väljad ei lisa teksti. See varumehhanism ei lisa meediumi hankimist ega transkribeerimist.
Transkriptsiooni laiendusväljad eemaldatakse varumehhanismi videoümbrisest ja selle
`video_url`/`source` objektidest. OpenAI juhtmeformaadi lubatute loend jääb rangeks; teadmata omamaise
toega videoümbrised jäävad saadavale ja teadaolevad ainult teksti toetavad sihtmärgid säilitavad ohutud markerid.
Struktureeritud redigeerimisvarjud kaitsevad lisatud transkriptsiooniteksti, samal ajal kui
kutsujale kuuluv algne päring jääb muutmata. Omamaise toega sihtmärgid ja
keelatud sillad säilitavad oma senise möödaviigukäitumise.

Täiendavad säilitatavad koopiad kasutavad sama vaadeldud päringu signaali. Kaitsepiirde-eelne
kliendipäringu töötlemata hetktõmmis, mälus olev ootel päring ja varajane
tagasilükatud päringu logi asendavad videoosade transkriptsiooniväljad struktuurselt;
konveieri etappide ja konteksti üleandmise sünteesitud stringviibad redigeeritakse
püsiva päringukeha väljundis. Püsiv marker `video_content_removed`
paneb jätkamise `previous_response_id` abil turvaliselt nurjuma, selle asemel et rekonstrueerida
tahtlikult kõrvaldatud teksti. Kui vaadeldud päring kaotab enne logimist oma
osapõhise redigeerimisvarju või kui kasvõi üks mitmest videovarjust
ei vasta enam pärast päringu hilisemaid mutatsioone, jäetakse säilitatav päringukeha
täielikult välja, selle asemel et säilitada osaliselt redigeeritud transkriptsioon.

Vaadeldud päringu korral võib mudeli vastus tsiteerida transkriptsiooni mis tahes osa
ilma struktureeritud vihjepiirita. Seetõttu asendatakse selle püsiva kutselogi
`responseBody` väljajätmismarkeriga; üksikasjalikku
konveieri artefakti (mis võib sisaldada ülesvoolu-/kliendikehasid ja voolõike)
ei säilitata. Semantilised, idempotentsus- ja arutluse taasesituse vahemälud jätavad
selle päringu korral nii lugemised kui ka kirjutamised vahele. Teenusepakkuja päring ja kliendile nähtav
vastus jäävad muutmata. Varajased ühenduse elushoidmise baidid eemaldatakse ajutisest
puhvrist, kui üksikasjalik artefakt välja jäetakse. Kiro vigase EventStreami
hoiatus esitab ainult kasuliku koormuse baitide arvu, mitte kunagi selle sisu ega JSON-i
parseri töötlemata veateadet.
See ei väida, et iga sõltumatu teenusepakkuja/pistikprogrammi diagnostika oleks
auditeeritud; laiemat säilitatavate väljundite läbivaatust jälgitakse ülesandes #11658.

Sisemine `/api/modality-bridge/video/drilldown` elutsükkel on eraldiseisev,
tagasisideahela/tokeniga autenditud vahemälualus. Iga toiming nõuab ka
kanoonilist läbipaistmatut subjekti ID-d. Enne tootmiskutsuja lubamist peab see
tuletama kõnealuse ID autenditud rentnikust ega tohi kunagi edastada
kliendi valitud väärtust. Vahemäluvõtmed seovad selle subjekti kanooniliste seansi- ja
videoviite ID-dega, salvestavad ainult nende SHA-256 põhjal tuletatud võtmed ning piiravad nii lugemised
kui ka kustutamise sama subjektiga. Vahemälu talletab kirje kohta kuni 16 tuletatud JPEG-kaadrit,
aegub need kümne minuti pärast ning toetab piiratud `start`/`end` lugemisi või
seansi selgesõnalist kustutamist.

Iga subjekt on piiratud 16 kirje ja 64 MiB kanooniliste JPEG-andmetega. Need
piirangud ei sõltu globaalsest 64 kirje / 256 MiB ülempiirist: subjekti kvoodi
surve eemaldab esmalt ainult selle subjekti kõige kauem kasutamata kirjed, enne kui kaalutakse globaalset
LRU-eemaldamist. Aegunud kirjed eemaldatakse vahemälu tegevuse käigus nii subjekti kui ka
globaalsest arvestusest, samal ajal kui tühistamine ja valideerimise nurjumine ei
kinnista osalist asendust.

Vahemälu lükkab tagasi mittekanoonilise Base64-vormingu, liigse täite, mitte-JPEG-meediumi, vigased või
kärbitud JPEG-failid ning JPEG-failid, mille puhul tekib piiratud täispildi `sharp`
dekodeerimise ajal hoiatus. Iga vastuvõetud pilt kodeeritakse uuesti kanooniliseks JPEG-failiks ning laius ja kõrgus
tuletatakse dekodeeritud baitidest, selle asemel et usaldada kutsuja välju; kõik lõppu lisatud
polüglottbaidid kõrvaldatakse, mitte ei säilitata. Mõlema kvoodi arvestusse läheb ainult piiratud kanooniline tihendatud puhver.
JSON-i andmeedastuslimiit sisaldab Base64 lisamahtu 32 MiB
dekodeeritud sisendi ülempiiri jaoks. Iga
salvestatud tuletis talletab valideeritud JPEG-vormingu ja eraldusvõime, diskreetimispoliitika,
tuletise versiooni, loomise aja, serveri arvutatud sisuräsi ja räsitud lähteobjekti
viite koos usaldatud kutsuja esitatud lähteobjekti sisuräsiga. Tühistamist kontrollitakse
asünkroonsete dekodeerimis- ja räsifaaside vahel enne vahemälu atomaarset kinnitamist.

See etapp ei ühenda veel marsruudiga tootmiskeskkonna tootjat ega
paku mitme eraldusvõimega variantide valimist. Läbipaistev Video Bridge'i päringutee
ei tekita seetõttu lisatööd, samas kui rentnikuga seotud subjekti tuletamine ja
täielik FU-08 mitme eraldusvõimega elutsükkel jäävad selgelt edasiseks tööks,
mitte dokumenteeritud terviklikuks käitumiseks.

Kaadrid varustatakse pealdistega järjest, kasutades konfigureeritud Video mudelit. Tühi
Video alistus pärib Visioni sätte; kui mõlemad on tühjad, valib Visioni
automaatmarsruuter sobiva nägemisvõimekusega mudeli. Õnnestunud pealdised
asendavad algse osa stabiilse `[Video description:` prefiksiga, mis märgib
teksti ka ebausaldusväärse, meediumist tuletatud vaatlusena ja käsib järgmistel
mudelitel meediumist leitud juhiseid mitte järgida. Kaadripõhiste pealdiste vahemäluvõtmed
sisaldavad JPEG-baite, viipa, ajatemplit ja tegelikult kasutatavat mudelit; vahemällu salvestatakse ainult
õnnestunud pealdised. Vahemälukirjed säilitavad tegeliku eduka tootjamudeli,
sealhulgas varumudeli; sild teatab `mixed`, kui eri kaadrid
loodi eri mudelitega. Vahemälutabamus kasutab seda tootja identiteeti uuesti,
selle asemel et nimetada see ümber taotletud marsruutimisplaani järgi. Kogu video tulemuse
vahemälu võti põhineb igal väljundit muutval sisendil — viibal, tegelikult kasutataval
mudelil, diskreetimispoliitikal, kaadrite arvul, semantilise analüüsi režiimil,
normaliseeritud fookusvihje SHA-256
sõrmejäljel, fookusaknal, väärtusel `transcript`,
väärtusel `audioTranscript` ja kontaktlehe lipul — seega põhjustab ükskõik millise
mõõtme muutmine vahemälust möödalasu, mitte aegunud tulemuse taaskasutamise. Visuaalse deduplitseerimise poliitika
versioon, lävi ja piiratud kandidaatkaadrite arv on samuti selgelt esitatud
tulemuse vahemälu võtmes ja metaandmetes; seetõttu ei saa poliitika muudatuse korral aegunud
kogu video kirjeldust uuesti kasutada. Tulemuse vahemälu v4 metaandmed säilitavad režiimi ja
sõrmejälje, kuid mitte kunagi kasutaja töötlemata ülesannet. Kaitsepiirete metaandmed esitavad nii
taotletud kui ka tegeliku analüüsirežiimi; taotletud `focused` režiim ilma
kasutatava kasutajatekstita esitatakse tegelikult režiimina `full`.

Kaitsepiire eraldab kõik toetatud videoosad, kuid kirjeldab neist maksimaalselt
`modalityBridgeVideoMaxVideos` jagu. Sihtmärgi puhul, mille kohta on tõendatud, et
`supportsVideo === false`, muudetakse nurjunud ja limiiti ületavad videod selgesõnalisteks turvalisteks
tekstmarkeriteks, et töötlemata videoid alles ei jääks. Kui võimekus pole teada, säilitavad need osad
oma videokandja; kõik varuvariandina kasutatavad transkriptsioonid läbivad eespool kirjeldatud piiratud tekstiteisenduse.
Sihtmärgid, mille puhul `supportsVideo === true`, mööduvad sillast.
Kliendi päringu katkestussignaal edastatakse allalaadimisele, vahendaja järjekorrale,
alamprotsessidele ja pealdisekutsetele; katkestused peatavad töö videote vahel ega luba kunagi
tõrke korral töötlemata meediumi läbi.

Käitussätted talletatakse andmebaasis ja valideeritakse Zodiga:

| Võti                                | Vaikeväärtus | Vahemik / käitumine                                                                                                        |
| ----------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`      | Valikuline käitusaeg, nõuab sõnaselget lubamist                                                                            |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` säilitab üldised pealdised; `focused` kasutab piiratud ja ebausaldusväärset uusimat kasutajakonteksti               |
| `modalityBridgeVideoModel`          | `""`         | Pärib Vision Bridge'i mudeli                                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                                       |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` või proportsionaalne `segment_aware`; tuvastaja tõrke korral kasutatakse varuvariandina `uniform` |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                        |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                             |

Pärandsüsteemist säilitatud Video ajalõpu väärtused, mis ületavad 120 sekundit, piiratakse
vahendaja tähtajaga; uued sättesalvestused, mis seda limiiti ületavad, lükatakse tagasi.
`GET /api/modality-bridge/video/runtime` nõuab enne autentimist või käitusaja
kontrollimist usaldusväärselt märgistatud tagasisideahela lokaalset päritolu ning seejärel halduse
autentimist. See tagastab ainult väärtuse `available`, puhastatud FFmpegi/ffprobe'i versioonid ja fikseeritud
põhjuse, kui käitusaeg pole saadaval. Sisemine eraldamise lõpp-punkt ei ole
avalik üleslaadimis-API: järjekorra küllastumisel tagastatakse `503` koos päisega `Retry-After`, kutsuja
ühenduse katkemisel tagastatakse `499` ja vahendaja fikseeritud tähtaja ületamisel `504`. Teisendatud vastused lisavad
kesksele `x-omniroute-modality-bridge` päisele
`video->text;model=<visionModel>;parts=<videos>`, eemaldamata Visioni või Audio segmente.

### Isikuandmete maskeerija (`piiMasker.ts`)

Töötab **mõlemas** etapis.

- **`preCall`** kloonib kasuliku koormuse, läbib väljad `system`, `messages`, `input` ja
  `prompt` (sealhulgas lihttekstiüksused) ning rakendab stringitüüpi
  `content`/`text` väljadele funktsiooni `processPII()` (asukohast
  `@/shared/utils/inputSanitizer`). Kui `PII_REDACTION_ENABLED=true`, peidetakse
  tuvastatud isikuandmed väljaminevas kasulikus koormuses. See ei sõltu sättest
  `INPUT_SANITIZER_MODE` (mis juhib ainult viibasüstimise poliitikat). Kui
  peitmine on välja lülitatud, salvestab kutse tuvastamiste arvu sisu ümber
  kirjutamata.
- **`postCall`** süvakloonib vastuse ning käivitab `sanitizePIIResponse()` ja
  Responses API kujule mõeldud maskija (`maskResponsesOutput` — hõlmab välju
  `output_text` ja `output[].content[].text`). Kui midagi peidetakse, asendab
  muudetud vastus algse.

Kaitsemeede ei blokeeri kunagi; see ainult lisab annotatsioone
(`meta.detections`, `meta.redacted`) või kirjutab sisu ümber.

#### Tüübipõhine valik, kohandatud mustrid ja tuvastusloendurid

**Töölaud → Sätted → Turvalisus → Isikuandmete maskimine** määrab, _mida_
maskitakse. See ei lülita maskimist sisse: seda juhivad endiselt
`PII_REDACTION_ENABLED` (päring) ja `PII_RESPONSE_SANITIZATION` (vastus + SSE),
mis on mõlemad vaikimisi välja lülitatud.

- **Tüübipõhine valik** — sisseehitatud ID-d on loetletud failis
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Määramata väärtus
  tähendab kõiki tüüpe (käitumine enne selle sätte lisamist). Päringumootori
  `ssn_us` muster vastendatakse väärtusele `ssn`. Mallid (Minimaalne,
  Standardne, Finantsandmed, Brasiilia, USA, Täielik) täidavad ainult
  kasutajaliidese märkeruudud.
- **Kohandatud mustrid** — kuni 20 regulaaravaldise või metamärgi mustrit
  (`*` = kuni 64 tühikuta märki, `?` = üks märk). Vasted muutuvad väärtuseks
  `[CUSTOM_REDACTED]`. Iga mustrit töödeldakse funktsiooniga
  `compilePiiCustomPattern()` (`src/shared/utils/piiCustomPatterns.ts`): pikkus
  võib olla kuni 500 märki, lipud on piiratud väärtustega `g i m s u`, muster
  peab kompileeruma, läbima `safe-regex` kontrolli (katastroofiline
  tagurdamine) ega tohi vastata tühjale stringile või peitmise kohatäitjale.
  Nõuetele mittevastavat mustrit ei lubata salvestada ega testida ning
  nõuetele mittevastav salvestatud rida jäetakse käitusajal kompileerimise
  asemel vahele. Kohandatud mustreid rakendatakse ainult siis, kui maskimine on
  sisse lülitatud.
- **Tuvastusloendurid** — tüübipõhised loendurid (mitte kunagi leitud
  väärtused), mida hoitakse mälus ja mis lähtestatakse taaskäivitamisel
  (`src/lib/pii/piiDetectionStats.ts`). Need suurenevad ainult siis, kui
  maskimine on sisse lülitatud.

Sätted asuvad tabelis `key_value` (nimeruum `pii_settings`,
`src/lib/db/piiSettings.ts`) ja neid loetakse 1 s vahemälu kaudu. API:

| Meetod | Tee                      | Otstarve                                                            |
| ------ | ------------------------ | ------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Lipu olek, `enabledTypes`, `customPatterns`, tuvastusloendurid      |
| `PUT`  | `/api/settings/pii`      | Asendab `enabledTypes` (`null` = kõik) ja/või `customPatterns`      |
| `POST` | `/api/settings/pii/test` | Ühe mustri proovikäivitus kuni 8 KB näidisega; midagi ei salvestata |

Kõik kolm nõuavad haldusautentimist ja valideerivad päringu keha Zodiga
(`src/shared/validation/schemas/piiSettings.ts`).

### Viibasüstimine (`promptInjection.ts`)

Tuvastab kasutaja sisestatud sisus vaenulikke struktuure ja jõustab
konfigureeritud poliitika. Käitumist juhivad keskkonnamuutujad ja konstruktori
suvandid:

| Säte            | Keskkonnamuutuja                                                                                      | Vaikeväärtus | Mõju                                                                                                                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Lubatud         | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Kui väärtus on `false`, lõpetab kaitsemeede töö kohe.                                                                                                                                                         |
| Režiim          | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Süstimispoliitika: `block`, `warn` või `log`. (`redact` on tagasiühilduvuse tagamiseks lubatud, kuid see **ei** eemalda süstimisteksti; päringu isikuandmete ümberkirjutamist juhib `PII_REDACTION_ENABLED`.) |
| Blokeerimislävi | `blockThreshold` suvand / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Blokeerimiseks nõutav minimaalne raskusaste. Vaikimisi on keskmine raskusaste ainult jälgitav.                                                                                                                |

**Režiimi prioriteet** (`getMode`): kutsuja `options.mode` →
`INJECTION_GUARD_MODE` **andmebaasi funktsioonilipu alistus** (Töölaud → Sätted →
Funktsioonilipud) → keskkonna `INJECTION_GUARD_MODE` → keskkonna
`INPUT_SANITIZER_MODE` → `warn`. Töölaua alistus on seega keskkonnamuutujatest
prioriteetsem, mistõttu funktsioonilippude kasutajaliides juhib töötavat
kaitsemeedet reaalajas (taaskäivitamiseta). Andmebaasist lugemine on tõrke
korral turvaline: vea tekkimisel kasutab kaitsemeede keskkonnal põhinevat
käitumist ning kui alistust pole määratud, on käitumine identne ainult
keskkonnamuutujatel põhineva lahendusega.

Tuvastusallikad:

1. `sanitizeRequest()` moodulist `@/shared/utils/inputSanitizer` (mujal
   töötluskonveieris kasutatav ühine detektorite kogum).
2. Sisseehitatud `DEFAULT_GUARD_PATTERNS` (praegu `system_override_inline` ja
   `markdown_system_block`, mõlema raskusaste on `high`).
3. Konstruktori suvandite kaudu edastatud valikulised `customPatterns`
   (stringid, regulaaravaldised või kirjed kujul
   `{ name, pattern, severity }`).

Kui `mode === "block"` **ja** vähemalt üks tuvastus vastab raskusastme
lävendile, tagastab `preCall` väärtuse `{ block: true, message: "Request rejected:
suspicious content detected" }`. Režiimides `warn`/`log` logib kaitsepiire juhtumi,
kuid lubab kutse. Jagatud abifunktsioon `evaluatePromptInjection()` eksporditakse
samuti kutsujatele, kes peavad viipasid hindama registrit kasutamata.

**Skannimispiirang (v3.8.20):** tuvastaja kontrollib ainult ühendatud viibateksti
**esimest 16 KB** — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 baiti) failis
`src/shared/utils/inputSanitizer.ts`. Nii `detectInjection()` kui ka
`evaluatePromptInjection()` rakendavad enne mustritsükli käivitamist
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Süstimisjuhised asuvad sisendi alguse lähedal,
seega piirab see regulaaravaldiste CPU-/GC-kasutust mitmesaja kilobaidi suuruste
andmekogumite puhul ilma tuvastamist nõrgendamata (vrd #3932, #4041).

### Identimisteabe maskeerija (`credentialMasker.ts`)

Töötab **mõlemas** etapis ja on vaikeahela viimane (prioriteet `95`). Maskeerib
väljaminevas lastis (sõnumi sisu, tööriistakutsete argumendid, tööriistade
tulemused) **ja** teenusepakkuja vastuses tuntud API-võtmete /
salajaste pääsutõendite mustrid, et viibale lisatud (või tööriista tulemuses
tagastatud) identimisteave ei lekiks teenusepakkujale ega tagasi kliendile.

- **Ainult nõusoleku korral**, sama tava nagu isikuandmete maskeerimisel
  (range reegli nr 20 lähikonnas): keelatud, kui
  `settings.credentialRedactionEnabled === true` **või**
  `CREDENTIAL_REDACTION_ENABLED=true` pole määratud. Kui see on välja lülitatud,
  ei tee kaitsepiire midagi — see ei blokeeri ega kirjuta kunagi midagi ümber.
- `redactCredentials()` läbib kogu lasti/vastuse puu (`walkValue()`,
  prototüübisaaste eest kaitstud, tsüklite suhtes turvaline tänu objektile
  `WeakSet`) ning asendab vasted kohatäitega `[REDACTED:<type>]`, kloonides ainult
  tegelikult muutunud harud.
- `CREDENTIAL_PATTERNS` hõlmab LLM-teenusepakkujate võtmeid (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-pääsutõendeid (GitHub,
  Slack, Linear, Notion, npm, Postman, Discord), maksevõtmeid (Stripe, Square),
  pilveteenuste võtmeid (AWS-i juurdepääsuvõti, Twilio, SendGrid, Mailgun),
  privaatvõtmeid / JWT-sid, identimisteavet sisaldavaid ühendusstringe
  (`mongodb://user:pass@...` jne) ja üldist
  `Authorization`/`x-api-key`/`api-key`/`apikey` päise väärtuse mustrit.
  Päisekujulised võtmed (`authorization`, `x-api-key`, `api-key`,
  `apikey`) maskeeritakse üldise tekstilise regulaaravaldise asemel
  struktuurselt (ainult väärtus, jättes alles skeemi prefiksi, näiteks
  `Bearer `/`Basic `).
- Kaitsepiire ei blokeeri kunagi; see ainult kirjutab ümber (`modifiedPayload` /
  `modifiedResponse`) ja lisab annotatsioone (`meta.credentialsRedacted`,
  `meta.count`).

Regressioonikaitse: `tests/unit/credential-masker-guardrail.test.ts`.

## Baasleping (`base.ts`)

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
  block?: boolean; // true katkestab ahela
  message?: string; // kuvatakse blokeerimisel
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tagastatakse funktsioonist preCall päringu ümberkirjutamiseks
  modifiedResponse?: TValue; // tagastatakse funktsioonist postCall vastuse ümberkirjutamiseks
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

Piiraja annab märku, et muudatusi pole, tagastades kas `void`, `{}` või
`{ block: false }`. Väärtuse `modifiedPayload`/`modifiedResponse` tagastamine asendab
ahelas liikuvat väärtust järgmiste piirajate jaoks.
`signal?: AbortSignal` edastab kutsuja elutsükli piirajatele. Päringu katkestamine on tahtlik tõrke korral läbilaskmise erand: meediasillad lõpetavad töö ja puhastavad ressursid, taastamata töötlemata meediat sihtkohale, mis teadaolevalt seda ei toeta.

## Register (`registry.ts`)

Üksikeksemplar `guardrailRegistry` pakub järgmisi funktsioone:

- `register(guardrail)` — lisab piiraja (või asendab selle normaliseeritud nime alusel) ja
  sordib piirajad uuesti `priority` kasvavas järjekorras.
- `clear()` / `list()` — administratiivsed abifunktsioonid.
- `runPreCallHooks(payload, context)` — läbib aktiivsed piirajad, edastab
  kasuliku koormuse läbi `modifiedPayload` ja peatub esimese `block: true` korral.
- `runPostCallHooks(response, context)` — sama voog vastuse poolel.
- `resetGuardrailsForTests({ registerDefaults })` — tühjendab oleku ja soovi korral
  registreerib vaikepiirajad uuesti, et tagada testide puhas isoleerimine.

Mõlemad käitajad tagastavad `{ blocked, payload|response, results, guardrail?, message? }`,
kus `results` on kirjete `GuardrailExecutionResult` massiiv, mis sisaldab
iga piiraja välju `blocked`, `skipped`, `modified`, `error` ja `meta`,
mis on kasulikud jälitamiseks.

### Piirajate keelamine päringupõhiselt

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` koondab
duplikaatideta loendi piirajate nimedest, mis tuleb praeguse
päringu puhul vahele jätta. Kanaleid on viis ning neid loetakse järgmises järjekorras ja liidetakse üheks loendiks
(duplikaatide eemaldamisel jääb alles esimene esinemine):

1. `apiKeyInfo.disabledGuardrails`
2. Päringu keha `disabledGuardrails` (tipptasemel)
3. Päringu keha `metadata.disabledGuardrails` (ainult siis, kui `metadata` on objekt)
4. Päis `x-omniroute-disabled-guardrails`
5. Pärandpäis `x-disabled-guardrails`

Kõik viis kanalit liidetakse, sealhulgas mõlemad päised: nii
`x-omniroute-disabled-guardrails` kui ka `x-disabled-guardrails` saatmisel jäetakse vahele
nende loendite ühend ning tühi tänapäevane päis ei varja enam pärandpäist
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), parandatud muudatuses
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Väärtused võivad olla stringimassiivid või komadega eraldatud stringid; nimedest eemaldatakse
äärmised tühikud ja need normaliseeritakse väiketähtedega kebab-kirjapilti (`pii_masker` → `pii-masker`) ning tühjad
kirjed eemaldatakse. Tulemus edastatakse registrile välja `context.disabledGuardrails`
kaudu ning register jätab vastavad piirajad vahele (`skipped: true` väljal `results`).

Keelamisloend mõjutab ainult **registrit**. Käsuviiba süstimise `block`-režiim on
kohustuslik piir: süstimisvastase kaitse vahevara
(`src/middleware/promptInjectionGuard.ts`) kutsub funktsiooni `evaluatePromptInjection()`
ilma ühegi kutsuja juhitava keelamisloendita (eemaldati kasutuseta
`resolveDisabledGuardrails({ body })` kutse, mida see varem tegi, muudatuses
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), mistõttu lükatakse
`prompt-injection` keelav päring `block`-režiimis ikkagi tagasi. See on
taotluslik. Keelamiskanalid on kutsuja juhitavad (päringu keha,
metaandmed, päised) ning kutsujal ei tohi olla võimalik välja lülitada turbekontrolli, mille operaator on määranud
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Päiste
ühend muudatusest [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
muudab ainult seda, millised registri piirajad vahele jäetakse; see ei võimalda kliendil
vahevarast mööda minna. Kohustuslikke võtmepõhiseid ja grupipõhiseid piirajapoliitikaid
jälgitakse v4 RFC-s [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Vt jaotist [Katvus ja piirangud](#coverage-and-limits).

## Käivitamise järjekord

Iga päringu puhul, mis läbib faile `src/sse/handlers/chat.ts` ja
`open-sse/handlers/chatCore.ts` (vestluspere marsruudid, mis on loetletud jaotises
[Katvus ja piirangud](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` koostab vahelejätmise loendi API-võtme, keha
   ja päiste põhjal.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` käivitab kaitsepiirded prioriteedi
   kasvavas järjekorras:
   - Keelatud kaitsepiirded märgitakse olekuga `skipped`.
   - Iga kaitsepiirde `preCall` võib `modifiedPayload` kaudu lasti ümber kirjutada.
   - Esimene `block: true` katkestab ahela ning töötleja tagastab
     kaitsepiirde tagasilükkamisvastuse.
3. Võimalikult ümber kirjutatud last liigub kombineeritud marsruutimise ja ülesvoolu
   edastamise etappi.
4. **Ainult mittevoogedastuse korral:** pärast vastuse koostamist käivitab
   `guardrailRegistry.runPostCallHooks(...)` vastuse jaoks sama ahela.
   Selles etapis eemaldab `block: true` ülesvoolu vastuse ja tagastab HTTP 400.
   Voogedastatavad vastused jätavad selle etapi täielikult vahele.

Erandi visanud kaitsepiirded salvestatakse kujul `error: <message>` ja logitakse
funktsiooni `logger.warn` kaudu, kuid ahela täitmine jätkub — süsteem on
kavandatud tõrke korral päringut läbi laskma.

## Katvus ja piirangud

Kaitsepiirete register on ühendatud ainult vestluse töötluskonveieriga. Need
piirangud on fikseeritud testidega
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` ja
`tests/unit/guardrail-pipeline-characterization.test.ts`; käitumise muutumisel
uuendage neid teste teadlikult.

### Kus haagid käivitatakse

| Haak / juhtelement                | Käivitub                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                 | Päringud, mida töötleb `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (ja `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` ning Telegrami vestluse puhverserver. Samuti juhtpaneeli testimisotspunkt `/api/guardrails/test`. Kutse-eelne blokeering tagastab HTTP 400. |
| `runPostCallHooks`                | Ainult **mittevoogedastatavad** vestlusvastused (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Voogedastatavad vastused ei jõua selleni kunagi.                                                                                                                                                                                                                                                                                          |
| Voogedastuse PII                  | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), mis ühendatakse failis `streamingPipeline.ts`, kui `PII_RESPONSE_SANITIZATION` on sisse lülitatud. See ei ole kaitsepiire, seega keelamiskanalid seda ei mõjuta.                                                                                                                                                                                                                    |
| Süstimisvastane vahevara (pärand) | Iga viipa sisaldav `/v1` marsruut, kaasa arvatud vestluspere marsruudid (vt [marsruutide katvus](#injection-guard-route-coverage--red-team-phase-8--block-d)). Ainult viibasüst.                                                                                                                                                                                                                                                                  |

### Mida ei kaeta

- **Meedia-, manustus- ja andmemarsruudid** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) ei jõua kunagi registrisse.
  Seal ei käivitata PII maskeerimist, mandaadiandmete maskeerimist ega
  modaalsussilda. Nende ainus kontroll on pärand-süstimisvastane vahevara.
- **Voogedastatavatele vastustele** ei rakendata kutsejärgseid kaitsepiirdeid:
  ei kutsejärgset `pii-masker`-it ega `credential-masker`-it ning puudub ka
  kutsejärgne blokeering. Rakendub ainult voogedastuse PII-teisendus (kui
  `PII_RESPONSE_SANITIZATION` on sisse lülitatud). Voogedastatavas vastuses
  tagasi kajastatud mandaati ei peideta.
- **Keelamiskanalid võrreldes vahevaraga (kavandatud käitumine):** vahevara
  hindab viibasüsti omaenda funktsioonikutsega `evaluatePromptInjection()`,
  edastamata ühtegi kutsuja juhitavat keelamisloendit. Režiim `block` on
  kohustuslik piir, millest kutsuja juhitavad keelamised ei saa mööda minna,
  sealhulgas vestluspere marsruutidel
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Valiku
  `prompt-injection` keelamine jätab vahele ainult registri kaitsepiirde.

### Mis näeb vastust enne kutsejärgset töötlust

Mittevoogedastuse korral on järjekord järgmine: mälust eraldamine → sisseehitatud
tööriista käivitamine → kutsejärgsed kaitsepiirded → väljumine kutsejärgse
blokeeringu korral → semantilisse vahemällu salvestamine.

- **Mälu eraldamine** ja **tööriistade käivitamine** näevad vastust enne, kui kutsejärgsed
  kaitsepiirded saavad selle ümber kirjutada või blokeerida. Alates
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) läbib mälu
  eraldamise käigus eraldatud tekst funktsiooni `sanitizePII`, kui
  `PII_RESPONSE_SANITIZATION` on sisse lülitatud (nii voogedastuse kui ka mittevoogedastuse korral), kuid
  vastus, mille kutsejärgne kontroll hiljem blokeerib, on siiski juba mälule ja
  tööriistadele edastatud.
- **Semantiline vahemälu** salvestab vastuse pärast kutsejärgset kontrolli, seega salvestatakse
  ümber kirjutatud vastus ning blokeeritud vastust ei salvestata kunagi vahemällu. Vahemälukirjed on
  API-võtmepõhised.

## Konfiguratsioon

Sisseehitatud kaitsemehhanismide loetavad keskkonnamuutujad:

| Muutuja                               | Kasutaja                 | Mõju                                                                                                  |
| ------------------------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Määrake väärtuseks `false`, et tuvastamine täielikult keelata.                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Süstimispoliitika: `warn`, `block` või `log`. Pärandväärtus `redact` ei kirjuta süstimisteksti ümber. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Süstimiskaitse režiim; ühtlasi DB funktsioonilipp, mis **alistab** keskkonnamuutujad (DB > ENV).      |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Minimaalne raskusaste, mille `MODE=block` tagasi lükkab: `high` (vaikimisi), `medium` või `low`.      |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Muutuja `INPUT_SANITIZER_BLOCK_THRESHOLD` pärandalias.                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Kui väärtus on `true`, redigeeritakse päringu isikuandmed (sõltumata süstimisrežiimist).              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (allavoolu) | Juhib vastusepoolse maskeri käitumist.                                                                |

Modality Bridge'i kaitsemehhanismid loevad käitusaja konfiguratsiooni DB-põhisest sätete
salvest (`getSettings()`), mitte keskkonnamuutujatest. Visioni peamised võtmed on
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` ja
`modalityBridgeCacheMaxEntries`. Pärandvõtmeid
`visionBridge*` aktsepteeritakse ainult dokumenteeritud ühe tsükli lugemise
varuvariandina; juhtpaneeli kirjutamistoimingud kasutavad peamisi võtmeid. Vaikeväärtused ja varuvariandi
lahendaja asuvad failis `src/shared/constants/modalityBridgeDefaults.ts`, pärand-
konstandid on säilitatud failis `src/shared/constants/visionBridgeDefaults.ts`.

Heli kasutab võtmeid `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` ja `modalityBridgeAudioMaxClips` ning jagatud
`modalityBridgeCache*` sätteid. Helil pole pärandvõtmete varuvarianti, sest need
võtmed võeti kasutusele koos Modality Bridge'i skeemiga.

Video kasutab võtmeid `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` ja
`modalityBridgeVideoTimeout` ning jagatud `modalityBridgeCache*` sätteid.
See on vaikimisi keelatud, sest FFmpeg/ffprobe on valikulised käituskeskkonna
sõltuvused ning kaadrite pealdiste loomine suurendab latentsust ja mudeli kasutuskulu.

## Kohandatud kaitsepiirded

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

Sammud:

1. Looge `src/lib/guardrails/myGuardrail.ts`, mis laiendab klassi `BaseGuardrail`.
2. Rakendage `preCall` ja/või `postCall`.
3. Registreerige kas importimise ajal (lisage funktsioonist `registerDefaultGuardrails`) või
   kutsuge käitusajal välja `guardrailRegistry.register(...)` — register asendab
   kõik varasemad sama normaliseeritud nimega kaitsepiirded.
4. Lisage testid kausta `tests/unit/` (olemasolevad näited:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testimine

Kasutage testide vahel funktsiooni `resetGuardrailsForTests()`, et alustada teadaolevast olekust.
Tühja registriga alustamiseks edastage `{ registerDefaults: false }` ja
registreerige ainult testitavad kaitsepiirded. Vision Bridge toetab sõltuvuste
sisestamist (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge pakub
samaväärseid liideseid seadete, võimekuste, STT-mudeli valiku, mandaadikontrollide
ja transkribeerimise jaoks. Seega saavad testid mõlemat voogu kontrollida ilma
andmebaasi- või võrgujuurdepääsuta.

## Vaadake ka

- `src/lib/guardrails/` — teostus
- `src/shared/utils/inputSanitizer.ts` — ühine tuvastaja, millel põhinevad
  viibasisestuse ja isikuandmete maskeerimine
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge'i vaikeväärtused ja
  sundsillaga mudelite loend
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio ühised käitusaja vaikeväärtused
- `docs/architecture/RESILIENCE_GUIDE.md` — ortogonaalne kiht (kaitselüliti, ooteajad)
- `docs/reference/ENVIRONMENT.md` — keskkonnamuutujate täielik teatmik

## Sisestusründe kaitse marsruutide katvus ja red-team-testimine (8. etapp · plokk D)

Sisestusründe kaitse (`createInjectionGuard` / `withInjectionGuard`) hõlmab kõiki marsruute,
mis võtavad vastu kasutaja viipasid. See arvestab muutujaga `INJECTION_GUARD_MODE` (vaikimisi `warn` = ainult logimine;
`block` = tagastab HTTP 400 `SECURITY_001`).

| Tüüp               | Marsruudid                                                                                                                                           | Vaikerežiim |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Tekst (olemasolev) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn        |
| Genereeriv         | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn        |
| Andmed             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn        |

Teksti eraldamine (`extractMessageContents`) hõlmab välju `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team-testimine (igal ööl, `nightly-llm-security.yml`):** promptfoo kontrollib, et iga marsruut blokeeriks
OWASP-LLM-i korpuse režiimis `INJECTION_GUARD_MODE=block`; garak käitab sondid (saladuse puudumisel jätab vahele).
`moderations` on järjepidevuse huvides kaasatud. Blokeerimisrežiim on kohustuslik piir: `evaluatePromptInjection()`
eirab vahevara edastatud päringupõhist keelamisloendit, mistõttu `disabledGuardrails`
**ei** vabasta marsruuti sellest ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Igaöisel töövool (`.github/workflows/nightly-llm-security.yml`, cron + käsitsi
käivitamine) on kaks tööd:

- **`promptfoo-guard` (blokeeriv)** — käitab käsku `promptfoo eval -c promptfooconfig.yaml`
  väärtusega `INJECTION_GUARD_MODE=block`. Iga ründejuhtum (nt „ignoreeri kõiki
  eelnevaid juhiseid…“, DAN-stiilis piirangutest möödahiilimised) kontrollib, et vastus sisaldaks
  `error.code === "SECURITY_001"`, st et kaitse lükkas päringu tegelikult tagasi.
- **`garak` (nõuandev)** — käitab garakit parameetriga `--probes promptinject,dan,leakreplay`
  kohaliku OmniRoute'i eksemplari (`http://localhost:20128/v1`) vastu. Käivitamine sõltub
  teenusepakkuja saladusest (`PROMPTFOO_PROVIDER_KEY`); selle puudumisel jäetakse töö korrektselt vahele ja käsule
  lisatakse `|| true`, nii et see koostab aruande ilma CI-d nurjamata.

Kaitse abifunktsiooni (`createInjectionGuard` / `withInjectionGuard`)
katvus hõlmab iga viipasid sisaldavat `/v1` marsruuti; viiba tekst eraldatakse väljadest
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`
funktsiooni `extractMessageContents()` abil failis `src/shared/utils/inputSanitizer.ts`.
