# Log export (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Nuolatinis, prieauginis „OmniRoute“ iškvietimų žurnalų eksportas į išorinę analitikos saugyklą.

Valdymo skydelio žurnalų skirtuke užklausų istorija saugoma SQLite (`call_logs`), o jos apimtį riboja
rotacija ir saugojimo trukmė. Žurnalų eksportas pagal tvarkaraštį išsiunčia tą patį įrašų rinkinį, kad jis išliktų
ilgiau nei vietinė duomenų bazė ir jį būtų galima sujungti su kitais duomenimis. „BigQuery“ yra pirmoji paskirties vieta;
konvejeris pagrįstas registru, todėl daugiau paskirties vietų galima pridėti nekeičiant esamų.

---

## 1. Kaip tai veikia

```
server (decrypt + validate config, reconcile cursor)
  → start IPC → isolated exportChild OS process
    → read-only storage.sqlite → shared call-log query/mapping
      → async artifact hydration → destination prepare()/send()
        → batch IPC → server persists cursor → ack IPC
          → next batch; done IPC → server records success
```

- **Tvarkaraštis** — viena `JobRegistry` cron užduotis, `log_export`, pagal numatytuosius nustatymus vykdoma pagal `0 * * * *` (kas valandą,
  UTC). Registruojama `src/lib/initCloudSync.ts`; galima pakeisti naudojant `OMNIROUTE_LOG_EXPORT_CRON`.
  Kiekvieno suveikimo metu nuosekliai eksportuojami visų **įjungtų** paskirties vietų laukiantys įrašai.
- **Žymeklis** — numanomas SQLite `call_logs.rowid`, kiekvienai paskirties vietai išsaugomas
  `log_export_destinations.cursor_row_id`. `timestamp` sąmoningai nenaudojamas kaip žymeklis: iškvietėjai
  gali pateikti savo reikšmę, todėl lėta užklausa gali būti įrašyta po greitesnės, pradėtos
  vėliau, o laiko žymos žymeklis ją praleistų.
- **Paketavimas** — `batch_size` eilučių vienai užklausai (numatytoji reikšmė 500), `max_rows_per_run` eilučių vienam vykdymui
  (numatytoji reikšmė 10000), kad didelė susikaupusių įrašų eilė būtų apdorojama per kelis suveikimus, o ne blokuotų vieną.
- **Pristatymas** — žymeklis pastumiamas tik sėkmingai užbaigus `send()`. Jei paketas nepavyksta,
  žymeklis lieka ankstesnėje vietoje, todėl per kitą vykdymą tas pačias eilutes bandoma siųsti iš naujo. Užtikrinamas
  pristatymas bent vieną kartą ir dublikatų šalinimas paskirties vietoje, o ne tikras pristatymas tiksliai vieną kartą: „BigQuery“ kiekvienos
  eilutės raktu naudoja iškvietimo žurnalo ID ir į jį atsižvelgia pagal geriausių pastangų principą savo dublikatų šalinimo laikotarpiu.
- **Apsauga nuo persidengimo** — cron suveikimas ir `POST .../run` gali įvykti vienu metu. Paskirties vieta,
  kurios įrašai jau eksportuojami, praleidžiama, užuot juos eksportavus du kartus (vykdymo rezultate pateikiama `skipped: true`),
  todėl lygiagretus vykdymas negali pakartotinai išsiųsti paketo ar perkelti žymeklio atgal.
- **Atkūrimas po išvalymo** — jei `cursor_row_id` tampa didesnis už `MAX(rowid)` (visa lentelė buvo
  išvalyta, o rowid reikšmės pradėtos skaičiuoti iš naujo), vykdyklė grąžina žymeklį į 0, užuot visam laikui nebemačiusi naujų įrašų.

### Izoliuota vykdyklė ir ribos

Kiekvienas paskirties vietos vykdymas „Node“ aplinkoje paleidžia atskirą trumpalaikį antrinį OS procesą (`child_process`
su IPC, o ne `worker_threads`). Turinio skaitymas, duomenų JSON analizė ir serializavimas, paskirties vietos
`prepare()` ir tinklo įvesties bei išvesties operacijos vykdomos ten, o ne serverio įvykių cikle.
Per IPC perduodama tik konfigūracija ir nedideli eigos pranešimai; eksportuojami įrašai niekada negrąžinami
į serverį. Cron užduotis ir maršrutas „Vykdyti dabar“ išlaiko tą patį viešą rezultatą ir apsaugą nuo persidengimo.

Antrinis procesas atveria serverio nustatytą `DATA_DIR/storage.sqlite` tik skaityti, naudodamas `node:sqlite`,
su `busy_timeout=5000` ir `query_only=ON`. Jis neimportuoja jokio vienintelio DB egzemplioriaus ir neatlieka
migracijų, atsarginių kopijų kūrimo ar SQLite atnaujinimų. Trūkstamų ar sugadintų artefaktų apskaita (įskaitant
sugadinto artefakto UPDATE) lieka tik valdymo skydelio išsamios informacijos apdorojimo kelyje. Abu keliai naudoja bendrą grynąją
išsamios informacijos nustatymo funkciją; eksportas naudoja asinchroninį failų sistemos skaitymą ir tą pačią nustatymo tvarką: artefaktas → senasis
įterptasis turinys → senasis turinys diske → nieko. Vykdymo pradžioje užfiksuojamas didžiausias įterpimo rowid,
kai antrinis procesas atveria skaitytuvą; vėlesni įterpimai laukia kito vykdymo. Tai įterpimo
riba, o ne ilgalaikė SQLite operacija: laukiant tinklo atsakymų WAL rašymas ir kontrolinių taškų kūrimas nėra blokuojami.
Ši riba neužfiksuoja esamų eilučių būsenos jų atnaujinimo ar ištrynimo atžvilgiu.

Po kiekvieno priimto paketo antrinis procesas laukia patvirtinimo. Serveris pirmiausia išsaugo
žymeklį naudodamas `advanceLogExportCursor`, tada siunčia `ack`; iki tol kitas paketas nepradedamas.
Siuntimo klaida, strigtis ar skirtasis laikas užregistruojami kaip nesėkmė, nepastumiant to paketo žymeklio. Anksčiau
patvirtinti paketai lieka įrašyti; pakartotinai gali būti išsiųstas daugiausia vienas nepatvirtintas paketas.
Sėkmė registruojama tik gavus `done` ir antriniam procesui tinkamai baigus darbą. Nesėkmės atveju antrinis procesas nutraukiamas
signalu SIGTERM, po 500 ms pereinant prie SIGKILL, o vykdyklė laukia proceso uždarymo.

| Aplinkos kintamasis                           | Numatytoji reikšmė | Paskirtis                                         |
| --------------------------------------------- | ------------------ | ------------------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000             | Kiekvienos paskirties vietos vykdymo trukmės riba |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024               | Antrinio proceso V8 old-space srities riba MB     |

Jei reikšmės netinkamos, neteigiamos ar ne sveikieji skaičiai, naudojamos numatytosios reikšmės. Dinaminės atminties nuostata nėra bendros
RSS atminties riba; labai dideli paketai vis tiek gali išeikvoti antrinio proceso atmintį ir saugiai užbaigti vykdymą nesėkme.
Numatytoji 1024 MB reikšmė palieka atsargą numatytajam 500 eilučių paketui su 512 KiB artefaktais,
kai įjungtas turinio eksportas, įskaitant „BigQuery“ JSON serializavimą į baitų blokus. Ji neužtikrina, kad
10000 eilučių paketas su turiniu bus saugus. Išsekus V8 dinaminei atminčiai užregistruojama klaida su aiškiu sprendimu: sumažinti paketo
dydį arba padidinti `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; žymeklis lieka ties paskutiniu
patvirtintu paketu. Istoriniam įterptajam ar diske saugomam turiniui šiuolaikinė artefaktų dydžio riba netaikoma.
Operatoriai turi atskirai numatyti RSS atminties poreikį, ypač konteineriuose su ribota atmintimi.

Antrinis procesas paveldi tik nustatytas `DATA_DIR`, `NODE_ENV`, aiškiai nurodytą `TZ` (senųjų failų pavadinimų
vietinio laiko nustatymui), `ELECTRON_RUN_AS_NODE`, jei jis yra, ir šiuos išeinančių ryšių parametrus:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (ir jų formas mažosiomis raidėmis),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Globalus „Undici“ dispečeris naudoja tas pačias serverio tarpinio serverio nustatymo vien iš aplinkos ir vietinių mazgų
apėjimo taisykles, įskaitant `NO_PROXY`; jis neimportuoja `proxyFetch.ts` ar jo DB / funkcijų vėliavėlių.
Tarpinio serverio prisijungimo duomenys pašalinami iš persiunčiamos išvesties ir registruojamų klaidų. Paskirties prisijungimo duomenys
perduodami tik viename pradiniame IPC pranešime, niekada ne per argv ar aplinką; persiunčiama išvestis ir klaidos
papildomos priešdėliu ir išvalomos. Antrinio proceso vykdymo argumentuose išjungiamas tik `ExperimentalWarning`, kad
„Node“ įspėjimas apie SQLite nebūtų kartojamas per kiekvieną cron paleidimą; kitų tipų įspėjimai lieka matomi.

Paskirties modulius turi būti galima importuoti be „Next.js“ ar tik serveriui skirtų priklausomybių. Esamas
„BigQuery“ įgyvendinimas jau atitinka šį reikalavimą. Prieigos žetonų podėliai išlieka tik antrinio proceso
vykdymo metu, o ne tarp paleidimų. Palaikoma vykdymo aplinka yra „Node“ (`package.json` engines), tačiau README
diegimo su „Bun“ skyriuje ir `Dockerfile.bun` taip pat nurodomas su gamybine aplinka suderinamas būdas, naudojantis
`bun:sqlite` (`src/lib/db/core.ts` / adapterius). Todėl naudojant „Bun“ eksportavimas išlaiko ankstesnį
vykdymo tame pačiame procese būdą ir vieną kartą pateikia įspėjimą: antrinio proceso dinaminės atminties ir vykdymo laiko ribojimo izoliacija neprieinama. Naudokite
„Node“, jei reikia įvykių ciklo ir atminties trūkumo (OOM) izoliacijos; čia „Bun“ nelaikomas skirtu tik kūrimui.

Kai įjungtas `includeBodies`, verčiau rinkitės kelių minučių intervalą, pavyzdžiui,
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, užuot kaupę valandos duomenų turinio eilę.
Paketų ir eilučių apribojimai vis tiek riboja kiekvieną paleidimą. Procesas paleidžiamas kiekvienai paskirčiai per kiekvieną vykdymą;
nedidelės paleidimo sąnaudos čia iškeičiamos į serverio įvykių ciklo izoliaciją, o ne į mažesnį bendrą CPU naudojimą.

### Duomenų turinys (užklausos ir atsakymai)

Pagal numatytuosius nustatymus eksportuojami tik suvestinės laukai, rodomi žurnalų **sąraše**. Įjungus
**Eksportuoti užklausas ir atsakymus** (`includeBodies`), papildomai perduodama tai, ką kiekvienam iškvietimui rodo žurnalų **išsamios informacijos**
sritis:

| Laukas                           | Kas jame saugoma                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------- |
| `request_body` / `response_body` | Iškvietimo duomenų turinys, kaip jis pateikiamas valdymo skydelyje               |
| `pipeline_route_decision`        | Kurį tikslą ir modelį parinko maršrutizatorius                                   |
| `pipeline_client_request`        | Neapdorota užklausa tiksliai tokia, kokią atsiuntė klientas                      |
| `pipeline_openai_request`        | Užklausa po konvertavimo į vidinį „OpenAI“ formatą                               |
| `pipeline_provider_request`      | Užklausa, faktiškai išsiųsta teikėjui jo formatu                                 |
| `pipeline_provider_response`     | Neapdorotas teikėjo atsakymas                                                    |
| `pipeline_client_response`       | Tai, kas buvo grąžinta iškvietėjui                                               |
| `pipeline_error`                 | Apdorojimo grandinės klaidos informacija nepavykusio iškvietimo atveju           |
| `bodies_truncated`               | Teisinga reikšmė, kai bet kuris aukščiau pateiktas laukas pasiekė `maxBodyBytes` |

Tai yra užklausų turinys, todėl ši parinktis **pagal numatytuosius nustatymus išjungta** ir sąmoningai pasirenkama kiekvienai paskirčiai atskirai.
Perduodama tai, kas rodoma valdymo skydelyje, nes eksportavimas ir `getCallLogById` naudoja tą patį išsamios informacijos
gavimo mechanizmą: duomenų turinys
jau būna išvalytas nuo asmenį identifikuojančios informacijos ir slaptų duomenų įrašymo metu, o iškvietimas su
`noLog` API raktu apskritai neišsaugo jokio turinio, todėl nėra ko eksportuoti.

Kiekvienos eilutės duomenų turinys nuskaitomas iš failų sistemos artefakto, todėl duomenys papildomai įkeliami tik toms paskirtims,
kurios to paprašė. Jei artefakto nėra arba jis sugadintas, eksportuojama jo suvestinė su null turinio reikšmėmis,
užuot nutraukus visą paketą ir sustabdžius žymeklio eigą.

`maxBodyBytes` (numatytoji reikšmė 262144) riboja kiekvieno lauko dydį. Ilgesnis turinys **sutrumpinamas, o ne
atmetamas** — sutrumpinta užklausa vis tiek atsako į klausimą „ko buvo klausta“ — o eilutė pažymima
`bodies_truncated`. Srautu dalimis perduodami pokyčiai neeksportuojami; surinktas atsakymas
jau yra `pipeline_provider_response` ir `pipeline_client_response`.

---

## 2. Failai

| Dalis                                      | Vieta                                        |
| ------------------------------------------ | -------------------------------------------- |
| Paskirties sutartis                        | `src/lib/logExport/types.ts`                 |
| Registras                                  | `src/lib/logExport/registry.ts`              |
| Slaptųjų duomenų tvarkymas                 | `src/lib/logExport/secrets.ts`               |
| Vykdyklė (pirminio proceso IPC)            | `src/lib/logExport/runner.ts`                |
| Proceso gyvavimo ciklas                    | `src/lib/logExport/childRunner.ts`           |
| Antrinio proceso įėjimo taškas             | `src/lib/logExport/exportChild.ts`           |
| Atvėrimas tik skaityti                     | `src/lib/db/logExportReadOnly.ts`            |
| Bendra užklausa ir susiejimas              | `src/lib/usage/callLogExportQueries.ts`      |
| Išsamios informacijos nustatymas           | `src/lib/usage/callLogDetailResolver.ts`     |
| API projekcija                             | `src/lib/logExport/presenter.ts`             |
| BigQuery paskirtis                         | `src/lib/logExport/destinations/bigquery.ts` |
| Google paslaugos paskyros autentifikavimas | `src/lib/logExport/googleServiceAccount.ts`  |
| Iškvietimų žurnalo šaltinis                | `src/lib/usage/callLogExportSource.ts`       |
| Duomenų išsaugojimas                       | `src/lib/db/logExportDestinations.ts`        |
| Cron užduotis                              | `src/lib/jobs/logExportJob.ts`               |
| REST sluoksnis                             | `src/app/api/log-export/`                    |
| Valdymo skydelio puslapis                  | `src/app/(dashboard)/dashboard/log-export/`  |

Schema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Visiems maršrutams taikomas valdymo autentifikavimas (`requireManagementAuth`). Slaptieji duomenys niekada negrąžinami:
išsaugota slaptoji reikšmė grąžinama kaip literalas `__stored__`, o atnaujinant atsiuntus šią reikšmę
išsaugomi esami prisijungimo duomenys.

Kuriant arba atnaujinant paskirtį, kurios tipas deklaruoja slaptąją reikšmę, **būtinas
`STORAGE_ENCRYPTION_KEY`**. Be jo `encrypt()` nepastebimai perduoda duomenis jų nekeisdama, todėl įrašymas
atmetamas su 400 kodu, užuot įrašius prisijungimo duomenis į SQLite atviruoju tekstu (tokia pati apsauga
taikoma Telegram webhook).

| Metodas  | Kelias                                   | Paskirtis                                                                            |
| -------- | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| `GET`    | `/api/log-export/types`                  | Paskirčių tipai ir jų konfigūracijos laukų sąrašas                                   |
| `GET`    | `/api/log-export/destinations`           | Paskirčių sąrašas (slaptieji duomenys paslėpti)                                      |
| `POST`   | `/api/log-export/destinations`           | Sukurti paskirtį                                                                     |
| `GET`    | `/api/log-export/destinations/{id}`      | Nuskaityti vieną paskirtį                                                            |
| `PUT`    | `/api/log-export/destinations/{id}`      | Atnaujinti pavadinimą / įjungimo būseną / konfigūraciją / skaidymą į paketus         |
| `DELETE` | `/api/log-export/destinations/{id}`      | Ištrinti                                                                             |
| `POST`   | `/api/log-export/destinations/{id}/test` | Patikrinti prisijungimo duomenis nieko neįrašant                                     |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Eksportuoti susikaupusius duomenis dabar tuo pačiu būdu kaip suplanuoto vykdymo metu |
| `GET`    | `/api/log-export/status`                 | Cron būsena, naujausi vykdymai, kiekvienos paskirties laukiančių duomenų kiekis      |

`GET /api/log-export/types` leidžia naudoti universalią naudotojo sąsają: valdymo skydelio forma atvaizduojama pagal
grąžintus laukų aprašus, todėl pridėjus naują paskirtį nereikia keisti naudotojo sąsajos.

---

## 4. BigQuery paskirties vieta

Konfigūracijos raktai (`type: "bigquery"`):

| Raktas               | Pastabos                                                                                 |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `projectId`          | GCP projektas, kuriame saugomas duomenų rinkinys                                         |
| `datasetId`          | `[A-Za-z0-9_]+`                                                                          |
| `tableId`            | `[A-Za-z0-9_]+`                                                                          |
| `location`           | Naudojama tik tada, kai reikia sukurti duomenų rinkinį (numatytoji reikšmė `EU`)         |
| `serviceAccountJson` | Tarnybos paskyros raktas. Slaptas: saugomas užšifruotas, niekada negrąžinamas            |
| `autoCreate`         | Sukurti duomenų rinkinį ir lentelę pirmojo eksportavimo metu (numatytoji reikšmė `true`) |

Tarnybos paskyrai reikia `bigquery.tables.updateData` leidimo paskirties lentelėje, taip pat
`bigquery.datasets.create` / `bigquery.tables.create` leidimų, kai įjungta `autoCreate`.

Sukonfigūruotas paketas yra **žymeklio**, o ne HTTP vienetas: `send()` suskaido jį į insertAll
iškvietimus, kurių kiekviename yra ne daugiau kaip 500 eilučių, todėl didelė `batch_size` reikšmė negali viršyti BigQuery 10 MB užklausos ribos.
Gavus laikinus būsenos kodus (408/429/500/502/503/504), bandoma pakartotinai iki trijų kartų, eksponentiškai
ilginant laukimo laiką ir pakartotinai naudojant tuos pačius insertIds; autentifikavimo ir schemos klaidos sukelia išimtį jau pirmuoju bandymu,
užuot be reikalo tęsus vykdymą.

Ką tik sukurta lentelė dar nėra matoma srautinio įrašymo galiniam taškui, kuris kelias sekundes
grąžina 404. Gavus šį 404, bandoma pakartotinai, tačiau **tik tada, kai lentelė buvo sukurta šio vykdymo metu** —
jei lentelės iš tiesų nėra, vykdymas vis tiek nedelsiant nutraukiamas. Atkreipkite dėmesį, kad iš naujo sukūrus lentelę pavadinimu,
kuris neseniai buvo panaikintas, BigQuery kelias minutes nepriima srautinių įterpimų; tai būdinga
panaikinimui ir pakartotiniam sukūrimui, todėl geriau rinkitės naują lentelės pavadinimą, o ne naikinkite ir iš naujo pridėkite esamą.

**Dalinė nesėkmė grąžinama kaip HTTP 200 su netuščiu `insertErrors[]`.** Tai laikoma
nesėkme ir sukeliama išimtis, kuri neleidžia žymekliui pasislinkti už eilučių, kurių BigQuery
nepriėmė; `tests/unit/log-export-bigquery.test.ts` įtvirtina šią elgseną.

Duomenys perduodami per įprastą REST — savarankiškai pasirašytas RS256 patvirtinimas iškeičiamas į prieigos žetoną adresu
`https://oauth2.googleapis.com/token`, tada eilutės siunčiamos į `tabledata.insertAll`. Joks Google SDK
neįtraukiamas. Prieigos žetonai talpinami proceso podėlyje pagal porą (tarnybos paskyra, prieigos sritis).

Sukurtoje lentelėje kiekvienam žurnalų skirtuko laukui yra po vieną stulpelį ir papildomas `exported_at` stulpelis; jos struktūra pritaikyta
faktinėms iškvietimų žurnalų užklausoms:

- **Skaidoma į dienos skaidinius pagal `timestamp`**, todėl užklausa, apribota datomis, nuskaito tik tas dienas.
- **Grupuojama pagal `api_key_name`, `provider`, `model`, `status`** (tokia tvarka), todėl filtruojant pagal
  tai, kas vykdė iškvietimą, kur jis buvo nukreiptas arba ar jis nepavyko, kiekviename skaidinyje atmetami nereikalingi blokai. BigQuery
  leidžia ne daugiau kaip keturis grupavimo stulpelius, o jų tvarka svarbi: filtras vien pagal `api_key_name`
  leidžia atmesti blokus, o filtras vien pagal `status` — ne.
- **Pasirenkama skaidinių saugojimo trukmė** nustatoma per `partitionExpirationDays` (0 reiškia, kad saugoma viskas) ir taikoma
  kuriant lentelę.

Abu nustatymai taikomi kūrimo metu. Esamos lentelės struktūra nekeičiama, todėl,
jei norite juos pritaikyti, paskirties vietoje nurodykite naujos lentelės identifikatorių.

`tests/unit/log-export-bigquery.test.ts` tikrina, ar laukų susiejimo logika ir lentelės schema išlieka
suderintos, kad naujas iškvietimų žurnalo stulpelis eksportuojant nebūtų nepastebimai praleistas.

Paketai skaidomi pagal **abu** kriterijus: eilučių skaičių ir serializuotų duomenų dydį baitais. Vien eilučių skaičiaus nepakanka,
kai eksportuojami ir duomenų turiniai: 500 eilučių su užklausų tekstais gali užimti dešimtis megabaitų, o insertAll
atmeta didesnes nei 10 MB užklausas. Dalis užbaigiama pasiekus 500 eilučių arba 9 MB, atsižvelgiant į tai, kuri riba pasiekiama pirmiau.

---

## 5. OTLP/HTTP trasų paskirties vieta

Konfigūracijoje naudojama `type: "otlp-http"`. Tai suplanuotas, žymekliu valdomas išsaugotų
iškvietimų žurnalų eksportas, o ne negarantuoto pristatymo tiesioginių maršruto parinkimo įvykių imtuvas faile
`open-sse/services/routing/otel.ts`. Jis neskaito ir nekeičia to imtuvo aplinkos
kintamųjų, laikmačių ar buferių. Įjungus abu, gali būti sukuriamos dvi nepriklausomos trasų atkarpų rūšys;
šioms iškvietimų žurnalų atkarpoms atskirti naudokite `omniroute.log-export` instrumentavimo sritį.

| Raktas            | Numatytoji reikšmė / paskirtis                                                 |
| ----------------- | ------------------------------------------------------------------------------ |
| `endpoint`        | Privalomas visas HTTP(S) trasų URL; priesaga `/v1/traces` nepridedama          |
| `headers`         | Neprivalomos `Name: value` eilutės arba JSON objektas su eilutėmis; šifruojama |
| `serviceName`     | `omniroute`; ištekliaus `service.name`                                         |
| `langfuseMapping` | `false`; prideda Langfuse generavimo, seanso ir naudotojo atributus            |
| `identity`        | `pseudonymous`, `keyName` arba `none`                                          |
| `paths`           | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`                        |
| `timeoutMs`       | `30000` kiekvienam HTTP bandymui                                               |
| `environment`     | Nenustatyta; neprivalomas `langfuse.environment`                               |

Bendrasis valdymo skydelis atvaizduoja šiuos laukus. `paths` priima API masyvą arba teksto sritį
su tiksliais keliais, atskirtais naujomis eilutėmis arba kableliais. Įterpinių, perrikiavimo ir kiti keliai
praleidžiami, nebent jie aiškiai leidžiami. Praleistos eilutės taip pat pastumia žymeklį; esamo
vykdymo komponento `exported`/`exportedTotal` skaitikliai skaičiuoja apdorotas šaltinio eilutes, įskaitant išfiltruotas
eilutes, o ne priimtas atkarpas. Filtravimas atliekamas antriniame procese, nekeičiant jo
IPC ir žymeklio sąsajos sutarties.

URL tikrinimui naudojama nuo DB nepriklausoma pagalbinė funkcija `parseAndValidateNonMetadataUrl` iš
`src/shared/network/outboundUrlGuard.ts`: politika `block-metadata`. Ji atlieka tas pačias
besąlygines metaduomenų, protokolo ir įterptųjų prisijungimo duomenų patikras kaip ir webhook tikrintuvas,
kuriame leidžiami privatūs URL, tačiau sąmoningai leidžia localhost ir LAN paskirties vietas be globalaus
funkcijos vėliavėlės nustatymo pakeitimo. Tai leidžia naudoti savarankiškai prieglobiamus Langfuse, Phoenix, Tempo ir Collector
galinius taškus, įskaitant privačius HTTP galinius taškus. Debesijos metaduomenų prieglobos serveriai visada blokuojami.
Peradresavimai nevykdomi, todėl rinktuvas negali peradresuoti prisijungimo duomenų į kitą prieglobos serverį.
Kaip ir esama leksinė URL apsauga, ši priemonė nefiksuoja DNS vardų vertimo rezultatų; konfigūruokite tik
operatoriaus valdomus prieglobos serverius. Kai galinis taškas nėra patikimame tinkle, pirmenybę teikite HTTPS.

### Naudingoji apkrova ir pristatymas

OTLP/HTTP JSON (`ExportTraceServiceRequest`, `Content-Type: application/json`) perduoda po vieną
CLIENT atkarpą kiekvienai leidžiamai eilutei, pavadintą pagal tikslų jos užklausos kelią. Pavadinimai pagal kelią leidžia atskirti
Chat Completions, Responses ir Messages, neįtraukiant modelio ar tapatybės duomenų į
atkarpos pavadinimą. Išteklių atributai apima `service.name` ir paketo `service.version`.

Įprastas pokalbių bandymų žurnalavimo komponentas (`open-sse/handlers/chatCore/attemptLogging.ts`) užbaigimo metu įrašo
`duration = Date.now() - startTime` ir nepateikia laiko žymos;
`saveCallLogOperation` faile `src/lib/usage/callLogs.ts` pagal numatytąją nuostatą laiko žymą nustato į įrašymo
(užbaigimo) laiką. Todėl eksportuojant pabaiga nustatoma pagal eilutės laiko žymą, o pradžia = pabaiga − trukmė
(milisekundėmis, konvertuotomis į dešimtaines nanosekundes). Kvietėjo pateiktos istorinės laiko žymos
taip pat išsaugomos kaip pabaigos laikas; nėra atskiro kiekvienos eilutės pradžios ir užbaigimo skiriamojo požymio.
Null trukmė tampa nuliu. Dėl netinkamų ar trūkstamų laiko žymų paketo apdorojimas nutraukiamas, užuot kūrus
nedeterministines atkarpas. `ttftMs` gali būti null ir susiejamas su `omniroute.ttft_ms`.

Atributai apima `gen_ai.operation.name="chat"`, teikėją, užklaustą ir atsakymo modelį,
įvesties ir išvesties žetonus, neprivalomus podėlio skaitymo, podėlio kūrimo ir samprotavimo žetonus, HTTP būseną,
kombinaciją, podėlio šaltinį, seanso žymą ir koreliacijos identifikatorių. Sveikųjų skaičių OTLP reikšmės ir laiko žymos
yra dešimtainės eilutės; eilutėms, loginėms reikšmėms ir trupmeniniams skaičiams naudojami jų savieji OTLP reikšmių
variantai. Klaidų atkarpos turi ERROR būseną ir išvalytą būsenos pranešimą. Kanoniniame
įraše nėra aukštesniojo lygmens prieglobos serverio URL, todėl `server.address` praleidžiamas, užuot klaidingai
nurodžius rinktuvą kaip modelio serverį. Kaina neeksportuojama.

Turinys įkeliamas tik nustačius `includeBodies=true`. Kai `langfuseMapping=false`,
`gen_ai.input.messages` / `gen_ai.output.messages` perduoda išvalytą užklausos ir atsakymo
turinio JSON, kaip jį saugo OmniRoute (kanonizuotą, kai jį galima išanalizuoti), o ne performuotą semantinių konvencijų
pranešimų masyvą. Nukirstas arba ne JSON turinys lieka paprastuoju tekstu. Kai `langfuseMapping=true`,
turinys pateikiamas tik kaip `langfuse.observation.input` / `langfuse.observation.output`;
atributai `gen_ai.*.messages` praleidžiami, kad kiekvienas turinys būtų siunčiamas vieną kartą. Abu režimai
paveldi `maxBodyBytes` iš esamo turinio įkėlimo mechanizmo;
`omniroute.bodies_truncated=true` žymi nukirpimą.
Ši paskirties vieta neprideda papildomų apdorojimo grandinės momentinių kopijų ar neišvalytų artefaktų skaitymo.
Eksportuodami turinį naudokite minučių lygmens periodiškumą, pvz., `OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`,
užuot kaupę valandinę neapdorotų duomenų eilę.

Užklausoms taikoma 500 atkarpų ir 4 MiB UTF-8 JSON dydžio riba, įskaitant apgaubą.
Kiekvienos leidžiamos atkarpos dydis patikrinamas prieš pirmąją žymeklio paketo užklausą. Jei atskira
atkarpa viršija ribą, nesiunčiama jokia to paketo dalis ir operacija baigiama klaida su nurodymu sumažinti
`maxBodyBytes`; atkarpa nėra tyliai atmetama. Išankstinės patikros metu išsaugomos tik nuorodos į įrašus ir
baitų skaičiai, o kiekviena laikina atkarpa ir JSON pašalinami; atkarpos iš naujo sudaromos riboto dydžio dalims,
užuot saugojus antrą serializuotą paketo kopiją. Gavus HTTP 408/429/5xx atsakymus, įvykus tinklo klaidoms ar pasibaigus laukimo laikui, atliekami ne daugiau kaip
trys bandymai, taikant 250/500 ms eksponentinį delsos didinimą. `Retry-After` nurodytos sekundės arba HTTP datos
gali pailginti delsą iki 5 sekundžių. Gavus kitus būsenos kodus, operacija iškart baigiama klaida. Dalinis OTLP 2xx atmetimas taip pat sukelia klaidą, užuot
patvirtinus prarastą atkarpą; priimami tušti patvirtinimai arba patvirtinimai su tinkamu JSON, taikant
64 KiB atsakymo skaitymo ribą.

Klaidose pateikiami tik eksportuotojo turimi faktai: HTTP būsenos kodas, pakartotinio bandymo klasė, bandymų ir išsiųstų atkarpų
skaičius arba fiksuotos patvirtinimo ar tinklo klaidos formuluotės. Rinktuvo atsakymų turinys,
dalinės sėkmės skaičiai ir atsakymų antraštės niekada nekopijuojami į klaidas, žurnalus ar
valdymo skydelį. Nepavykęs arba iš dalies priimtas paketas nepatvirtinamas: paskirties vietai rodoma
klaidos būsena su tuo būsenos kodu, žymeklis lieka ties paskutiniu patvirtintu paketu, o kito vykdymo metu
tos pačios eilutės siunčiamos iš naujo. Nuolatinės klaidų būsenos kartojasi, kol pataisomas rinktuvas arba konfigūracija.
Atsakymo išsamios informacijos ieškokite paties rinktuvo žurnaluose. Iškvietimų žurnalo klaidų suvestinėms ir toliau taikomas
atskiras neskelbtinų duomenų šalinimas.
`prepare()` nesukuria jokių išteklių; testas siunčia tiksliai `{"resourceSpans":[]}` ir praneša
HTTP būsenos kodą, neįrašydamas iškvietimų žurnalo atkarpų.

Sekimo identifikatoriai ir atkarpų identifikatoriai yra pirmieji 32/16 šešioliktainių SHA-256 maišos skaitmenų, apskaičiuotų iš
`"omniroute.trace\\0" + callLogId` ir `"omniroute.span\\0" + callLogId`. Pakartotinai siunčiant naudojami
identiški identifikatoriai. Tai negarantuoja dublikatų šalinimo: kai kurios serverinės sistemos, įskaitant Langfuse
v4 duomenų priėmimą, nešalina atkarpų su tais pačiais identifikatoriais dublikatų. Dėl strigties arba dalies siuntimo klaidos gali būti
pakartotinai išsiųstas daugiausia vienas nepatvirtintas žymeklio paketas; gali būti dubliuotas visas tas paketas,
o ne tik paskutinė jo HTTP dalis. Rinkdamiesi žymeklio paketo dydį atsižvelkite į šį kompromisą.

### Langfuse pavyzdys

Savarankiškai valdomam Langfuse egzemplioriui sukonfigūruokite šiuos laukus:

```json
{
  "endpoint": "https://langfuse.example.com/api/public/otel/v1/traces",
  "headers": "Authorization: Basic <base64-of-public-key:secret-key>",
  "serviceName": "omniroute",
  "langfuseMapping": true,
  "identity": "pseudonymous",
  "environment": "production"
}
```

Authorization reikšmę sukurkite vietoje, užkoduodami pažodinę `public-key:secret-key`
eilutę Base64 formatu (pavyzdžiui, naudodami `Buffer.from(publicKey + ":" + secretKey).toString("base64")`).
Nekopijuokite tikrų prisijungimo duomenų į žurnalus, ekrano kopijas ar problemų pranešimus. Susiejimas automatiškai
nustato `x-langfuse-ingestion-version: 4`; Authorization vis tiek pateikiama lauke `headers`.
Tiek antraštėms, tiek sugeneruotai tapatybės druskai naudojamas esamas šifruotų slaptųjų laukų
mechanizmas ir API vietaženkliai; būtinas `STORAGE_ENCRYPTION_KEY`.

Susiejimas prideda generavimo tipą ir modelį, JSON naudojimo informaciją (įvestį, išvestį, bendrą kiekį ir galimus
podėlio raktus), JSON įvesties ir išvesties momentines kopijas, ERROR/DEFAULT lygį, išvalytą būsenos pranešimą,
sekimo pavadinimą, seanso identifikatorių, pasirenkamą aplinką ir filtruojamą
`langfuse.observation.metadata.<key>` reikšmę tiekėjui, prašomam modeliui, keliui, deriniui, podėlio
šaltiniui ir būsenai. `langfuse.observation.completion_start_time` yra ISO 8601 formato laikas,
lygus pradžiai + TTFT, tik kai TTFT žinomas ir neviršija trukmės. Kainos atributai nesiunčiami.

Tapatybės režimai taikomi `langfuse.user.id`:

- `pseudonymous` (numatytasis): vidinio API rakto identifikatoriaus HMAC-SHA256 su atsitiktine
  kiekvienai paskirties vietai skirta 32 baitų druska. Jei druskos nėra, ji sugeneruojama kuriant, užšifruojama
  kaip `identitySalt`, niekada negrąžinama ir išsaugoma redaguojant. Neapdoroti raktų identifikatoriai niekada
  neįtraukiami į atkarpų atributus. Iš naujo sukūrus arba pakeitus paskirties vietos druską, tapatybės pasikeičia.
- `keyName`: sukonfigūruotas API rakto pavadinimas, sąmoningai atskleidžiantis šią operatoriaus žymą.
- `none`: be naudotojo identifikatoriaus. Seansų žymos vis tiek eksportuojamos, jei jos yra; šie režimai
  neanonimizuoja savavališko užklausų turinio ar operatoriaus pateiktų seanso ir koreliacijos žymų.

### Paleidimas be istorinių duomenų įkėlimo

Tik kuriant įjunkite **Pradėti nuo dabartinės padėties (praleisti esamus žurnalus)** arba perduokite
`startFromCurrentPosition: true` aukščiausiu kūrimo API užklausos turinio lygiu. Tai nustato pradinę
`cursor_row_id` reikšmę į didžiausią šiuo metu išsaugoto iškvietimų žurnalo rowid, naudojant esamas žymeklio
pagalbines funkcijas, be migracijos. Numatytoji reikšmė yra false (žymeklis 0 ir išsaugotos istorijos įkėlimas).
Tai nėra žymeklio nustatymo iš naujo atnaujinimo metu parinktis.

Bendras `ttftMs` papildymas taip pat prideda stulpelį `ttft_ms`, kuriame leidžiamos null reikšmės, prie BigQuery susiejimo
ir naujos lentelės schemos: schemos testas reikalauja, kad kiekvienas kanoninio įrašo laukas turėtų
stulpelį. Esamų lentelių eksportavimas nesikeičia: `prepare()` perskaito lentelės schemą ir
praleidžia tik `ttft_ms`, jei to stulpelio nėra. Pridėkite INT64 stulpelį, kuriame leidžiamos null reikšmės, kad gautumėte TTFT
kito vykdymo metu, arba naudokite naują lentelę. Nereikia PATCH, automatinio schemos keitimo ar papildomų
leidimų; visiems kitiems eilutės laukams ir toliau taikoma griežta schemos patikra.

---

## 6. Paskirties vietos pridėjimas

1. Sukurkite `src/lib/logExport/destinations/<name>.ts`, eksportuojantį `LogExportDestinationType`:
   Zod `configSchema`, naudotojo sąsajai skirtą `fields` aprašų masyvą, `secretFields` ir
   `createClient(config)`, grąžinantį `test()` / `prepare()` / `send(records)`.
2. Pridėkite jį į `DESTINATIONS` masyvą faile `src/lib/logExport/registry.ts`.
3. Parašykite testus kataloge `tests/unit/`.

Tai ir yra visas pakeitimas: duomenų išsaugojimas, cron užduotis, REST sluoksnis, slaptųjų duomenų šifravimas ir
valdymo skydelio forma naudoja registrą.

Dvi taisyklės naujai paskirties vietai:

- `send()` **privalo išmesti išimtį**, jei įvyksta dalinė nesėkmė. Sėkmingas užbaigimas reiškia „paskirties vieta turi šias eilutes“,
  o žymeklis visam laikui perkeliamas už jų.
- Paskirties vieta, priimanti naudotojo pateiktą URL, prieš siųsdama užklausą privalo jį patikrinti naudodama
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`),
  kaip tai daroma su žiniatinklio atgaliniais iškvietimais. BigQuery to nereikia: jo serverių adresai yra konstantos.

---

## 7. Naudojimas

- **Valdymo skydelis**: Integracijos → Žurnalų eksportas. Pridėkite paskirties vietą, paleiskite **Testuoti**, kad patikrintumėte prisijungimo duomenis
  neįrašydami eilučių, tada ją įjunkite.
- **Neapdorotų įrašų eilė**: kiekvienos paskirties vietos kortelėje rodomos laukiančios eilutės ir žymeklis; `GET
/api/log-export/status` grąžina tuos pačius rodiklius ir paskutinius 20 užduoties vykdymų.
- **Vienos paskirties vietos nesėkmė netrukdo kitoms** — vykdymo suvestinėje kiekvienos paskirties vietos
  būsena įrašoma į `last_status` / `last_error`, o užduoties vykdymų istorijoje saugomi apibendrinti duomenys.
- **Ištrynus paskirties vietą, ištrinamas ir jos žymeklis.** Pridėjus ją iš naujo, pradedama nuo seniausio išsaugoto
  iškvietimų žurnalo įrašo, todėl iš naujo siunčiamos eilutės, kurias paskirties vieta jau gali turėti. BigQuery atveju kiekvienos eilutės
  `insertId` apsaugo nuo tokių dublikatų tik paties BigQuery dublikatų šalinimo laikotarpiu, todėl geriau paskirties vietą išjungti,
  o ne ištrinti.
