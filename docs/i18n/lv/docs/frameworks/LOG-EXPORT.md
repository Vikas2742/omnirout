# Log export (Latviešu)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Nepārtraukta, inkrementāla OmniRoute izsaukumu žurnālu eksportēšana uz ārēju analītikas krātuvi.

Informācijas paneļa cilnē Žurnāli pieprasījumu vēsture tiek glabāta SQLite (`call_logs`), un tās apjomu ierobežo
rotācija un glabāšanas termiņš. Žurnālu eksportēšana pēc grafika nosūta to pašu ierakstu kopu uz ārēju krātuvi, lai tā saglabātos
ilgāk par lokālo datubāzi un to varētu apvienot ar citiem datiem. BigQuery ir pirmais galamērķis;
konveijers ir veidots kā reģistrs, tāpēc jaunus galamērķus var pievienot papildus.

---

## 1. Kā tas darbojas

```
server (decrypt + validate config, reconcile cursor)
  → start IPC → isolated exportChild OS process
    → read-only storage.sqlite → shared call-log query/mapping
      → async artifact hydration → destination prepare()/send()
        → batch IPC → server persists cursor → ack IPC
          → next batch; done IPC → server records success
```

- **Grafiks** — viens `JobRegistry` cron uzdevums, `log_export`, ar noklusējuma grafiku `0 * * * *` (reizi stundā,
  UTC). Reģistrēts failā `src/lib/initCloudSync.ts`; to var pārrakstīt ar `OMNIROUTE_LOG_EXPORT_CRON`.
  Katrā aktivizēšanas reizē secīgi tiek eksportēti visu **iespējoto** galamērķu gaidošie ieraksti.
- **Kursors** — SQLite netiešais `call_logs.rowid`, kas katram galamērķim tiek saglabāts laukā
  `log_export_destinations.cursor_row_id`. `timestamp` apzināti netiek izmantots kā kursors: izsaucēji
  var norādīt savu vērtību, tāpēc lēnu pieprasījumu var ierakstīt pēc ātrāka pieprasījuma, kas sākts
  vēlāk, un laikspiedola kursors to izlaistu.
- **Sadalīšana paketēs** — `batch_size` rindas katrā pieprasījumā (noklusējums: 500), `max_rows_per_run` rindas katrā izpildē
  (noklusējums: 10000), lai lielu uzkrājumu apstrādātu vairākās aktivizēšanas reizēs, nevis bloķētu vienu.
- **Piegāde** — kursors tiek virzīts uz priekšu tikai pēc sekmīgas `send()` izpildes. Ja paketes nosūtīšana neizdodas,
  kursors paliek iepriekšējā vietā, tāpēc tās pašas rindas tiek atkārtoti nosūtītas nākamajā izpildē. Garantija ir
  piegāde vismaz vienu reizi kopā ar dublikātu novēršanu galamērķī, nevis patiesa piegāde tieši vienu reizi: BigQuery katras
  rindas atslēgai izmanto izsaukumu žurnāla ID, ko tas ņem vērā iespēju robežās savā dublikātu novēršanas laika intervālā.
- **Aizsardzība pret pārklāšanos** — cron aktivizēšana un `POST .../run` var notikt vienlaikus. Galamērķis,
  kura ieraksti jau tiek eksportēti, tiek izlaists, nevis apstrādāts divreiz (`skipped: true` izpildes rezultātā),
  tāpēc vienlaicīga izpilde nevar atkārtoti nosūtīt paketi vai pārrakstīt kursoru ar mazāku vērtību.
- **Atkopšanās pēc pilnīgas dzēšanas** — ja `cursor_row_id` kļūst lielāks par `MAX(rowid)` (visa tabula ir
  iztīrīta un rowid vērtības sāktas no jauna), izpildītājs atiestata kursoru uz 0, nevis neatgriezeniski pārstāj pamanīt jaunus ierakstus.

### Izolēts izpildītājs un ierobežojumi

Katra galamērķa izpilde Node vidē palaiž atsevišķu, īslaicīgu operētājsistēmas bērnprocesu (`child_process`
ar IPC, nevis `worker_threads`). Pamattekstu lasīšana, datu satura JSON parsēšana/serializēšana, galamērķa
`prepare()` un galamērķa tīkla ievade/izvade notiek tajā, nevis servera notikumu ciklā.
Caur IPC tiek pārsūtīta tikai konfigurācija un nelieli progresa ziņojumi; eksportētie ieraksti nekad netiek atgriezti
serverī. Cron uzdevums un maršruts Palaist tūlīt saglabā to pašu publisko rezultātu un aizsardzību pret pārklāšanos.

Bērnprocess atver servera noteikto `DATA_DIR/storage.sqlite` tikai lasīšanai, izmantojot `node:sqlite`,
ar `busy_timeout=5000` un `query_only=ON`. Tas neimportē datubāzes vienīgo instanci un neveic
migrācijas, dublēšanu vai SQLite atjauninājumus. Trūkstošu/bojātu artefaktu uzskaite (tostarp
bojāta artefakta UPDATE) paliek tikai informācijas paneļa detalizētās informācijas apstrādes ceļā. Abos ceļos tiek izmantots kopīgs
detalizētās informācijas noteicējs bez blakusefektiem; eksportēšana izmanto asinhronu failu sistēmas lasīšanu un to pašu noteikšanas secību: artefakts → mantotais
iekļautais saturs → mantotais saturs diskā → nav. Izpildes sākumā tiek fiksēts maksimālais ievietoto rindu rowid,
kad bērnprocess atver lasītāju; vēlāk ievietotie ieraksti gaida nākamo izpildi. Tā ir ievietošanas
robeža, nevis ilgstoša SQLite transakcija: tīkla gaidīšanas laikā WAL rakstītāji un kontrolpunktu izveide netiek
bloķēti. Šī robeža nefiksē esošo rindu atjauninājumus/dzēšanu.

Pēc katras pieņemtās paketes bērnprocess gaida apstiprinājumu. Serveris vispirms saglabā
kursoru ar `advanceLogExportCursor`, pēc tam nosūta `ack`; nākamā pakete netiek sākta pirms tā saņemšanas.
Nosūtīšanas kļūmes, avārijas vai taimauta gadījumā tiek reģistrēta kļūme, nevirzot šīs paketes kursoru uz priekšu. Iepriekš
apstiprinātās paketes paliek saglabātas; atkārtoti var tikt nosūtīta ne vairāk kā viena neapstiprinātā pakete.
Sekmīgs rezultāts tiek reģistrēts tikai pēc `done` un bērnprocesa korektas iziešanas. Kļūmju gadījumā bērnprocess tiek apturēts
ar SIGTERM, pēc 500 ms pārejot uz SIGKILL, un izpildītājs gaida procesa aizvēršanu.

| Vides mainīgais                               | Noklusējums | Nolūks                                             |
| --------------------------------------------- | ----------- | -------------------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000      | Katra galamērķa kopējā izpildes laika ierobežojums |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024        | Bērnprocesa V8 old-space ierobežojums MB           |

Nederīgu, nepozitīvu vai neveselu vērtību vietā tiek izmantotas noklusējuma vērtības. Kaudzes iestatījums nav kopējās
RSS atmiņas ierobežojums; ļoti lielas paketes joprojām var izsmelt bērnprocesa atmiņu un droši pārtraukt izpildi ar kļūmi.
Noklusējuma 1024 MB atstāj rezervi noklusējuma 500 rindu paketei ar 512 KiB artefaktiem, ja
ir iespējoti pamatteksti, tostarp BigQuery JSON serializēšanai baitos ierobežotos blokos. Tas nepadara
10000 rindu paketi ar pamattekstiem drošu. V8 kaudzes izsmelšanas gadījumā tiek reģistrēta kļūme ar norādi uz risinājumu: samaziniet paketes
lielumu vai palieliniet `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; kursors paliek pie pēdējās
apstiprinātās paketes. Uz vēsturiskajiem iekļautajiem vai diskā glabātajiem pamattekstiem mūsdienu artefaktu lieluma ierobežojums neattiecas.
Operatoriem RSS atmiņas apjoms jāplāno atsevišķi, īpaši konteineros ar ierobežotu atmiņu.

Pakārtotais process manto tikai atrisināto `DATA_DIR`, `NODE_ENV`, skaidri norādīto `TZ` (mantoto failu nosaukumu
vietējā laika noteikšanai), `ELECTRON_RUN_AS_NODE`, ja tas ir iestatīts, un tālāk norādītos izejošo savienojumu parametrus:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (un to formas ar mazajiem burtiem),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Globālais Undici dispečers izmanto tos pašus servera starpniekservera noteikšanas noteikumus, kuru pamatā ir tikai vides mainīgie, un lokālo resursdatoru
apiešanas noteikumus, tostarp `NO_PROXY`; tas neimportē `proxyFetch.ts` vai tā datubāzes/funkciju karodziņus.
Starpniekservera akreditācijas dati tiek aizklāti pārsūtītajā izvadē un reģistrētajās kļūdās. Galamērķa akreditācijas dati
tiek nosūtīti tikai vienā sākuma IPC ziņojumā, nekad argv vai vides mainīgajos; pārsūtītajai izvadei un kļūdām tiek
pievienots prefikss, un tās tiek attīrītas. Pakārtotā procesa izpildes argumentos tiek atspējots tikai `ExperimentalWarning`, lai
katrā cron izpildē neatkārtotu Node brīdinājumu par SQLite; citu veidu brīdinājumi paliek redzami.

Galamērķa moduļiem jābūt importējamiem bez Next.js/servera puses atkarībām. Esošā
BigQuery realizācija jau atbilst šai prasībai. Piekļuves pilnvaru kešatmiņas pastāv tikai pakārtotā procesa
izpildes laikā, nevis starp izpildēm. Atbalstītā izpildvide ir Node (`package.json` engines), taču README Bun
instalēšanas sadaļa un `Dockerfile.bun` piedāvā arī ar produkcijas vidi saderīgu risinājumu, izmantojot
`bun:sqlite` (`src/lib/db/core.ts` / adapteri). Tāpēc Bun vidē eksportēšana saglabā iepriekšējo
izpildi tajā pašā procesā un vienreiz parāda brīdinājumu: pakārtotā procesa dinamiskās atmiņas/taimauta izolācija nav pieejama. Izmantojiet
Node notikumu cikla un atmiņas izsīkuma (OOM) izolācijai; Bun šeit netiek uzskatīts par paredzētu tikai izstrādei.

Ja ir iespējots `includeBodies`, ieteicams izmantot intervālu minūšu līmenī, piemēram,
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, nevis uzkrāt stundas laikā sakrājušos datu apjomu.
Pakešu un rindu ierobežojumi joprojām ierobežo katru izpildi. Procesa palaišanas izmaksas rodas katram galamērķim katrā izpildē;
nelielas palaišanas izmaksas tiek apmainītas pret servera notikumu cikla izolāciju, nevis mazāku kopējo CPU lietojumu.

### Datu saturs (uzvednes un ģenerētās atbildes)

Pēc noklusējuma eksportā ir tikai tie kopsavilkuma lauki, kas redzami žurnālu **sarakstā**. Iespējojot
**Eksportēt uzvednes un atbildes** (`includeBodies`), papildus tiek nosūtīts tas, kas katram izsaukumam redzams žurnālu **detalizētās informācijas**
panelī:

| Lauks                            | Ko tas satur                                                              |
| -------------------------------- | ------------------------------------------------------------------------- |
| `request_body` / `response_body` | Izsaukuma dati tā, kā tos attēlo informācijas panelis                     |
| `pipeline_route_decision`        | Maršrutētāja izvēlētais mērķis un modelis                                 |
| `pipeline_client_request`        | Neapstrādāts pieprasījums tieši tāds, kā to nosūtīja klients              |
| `pipeline_openai_request`        | Pēc pārveidošanas iekšējā OpenAI formātā                                  |
| `pipeline_provider_request`      | Faktiski pakalpojuma sniedzējam nosūtītais pieprasījums tā formātā        |
| `pipeline_provider_response`     | Neapstrādāta pakalpojuma sniedzēja atbilde                                |
| `pipeline_client_response`       | Izsaucējam atgrieztie dati                                                |
| `pipeline_error`                 | Apstrādes konveijera līmeņa kļūdas informācija par neveiksmīgu izsaukumu  |
| `bodies_truncated`               | Patiess, ja kāds no iepriekš minētajiem laukiem sasniedzis `maxBodyBytes` |

Tas ir uzvedņu saturs, tāpēc šī iespēja ir **pēc noklusējuma izslēgta** un apzināti tiek izvēlēta katram galamērķim atsevišķi.
Tiek nosūtīts tas, kas redzams informācijas panelī, jo eksportēšana un `getCallLogById` izmanto vienu un to pašu detalizētās informācijas
iegūšanas mehānismu: datos
personu identificējošā informācija jau ir attīrīta un noslēpumi aizklāti to ierakstīšanas brīdī, savukārt izsaukums ar
`noLog` API atslēgu nesaglabā nekādu datu saturu, tāpēc nav ko eksportēt.

Datu saturs katrai rindai tiek nolasīts no failu sistēmas artefakta, tāpēc datu ielāde notiek tikai tiem galamērķiem,
kas to pieprasījuši. Ja artefakta nav vai tas ir bojāts, tiek eksportēts tā kopsavilkums ar null vērtībām datu satura vietā, nevis
pārtraukta visas paketes apstrāde un apturēta kursora virzība.

`maxBodyBytes` (noklusējums 262144) ierobežo katra lauka lielumu. Garāks datu saturs tiek **saīsināts, nevis
atmests** — arī apgriezta uzvedne joprojām atbild uz jautājumu “kas tika vaicāts” — un rinda tiek atzīmēta ar
`bodies_truncated`. Straumēto fragmentu secīgās izmaiņas netiek eksportētas; apkopotā atbilde
jau ir ietverta `pipeline_provider_response` un `pipeline_client_response`.

---

## 2. Faili

| Komponents                               | Atrašanās vieta                              |
| ---------------------------------------- | -------------------------------------------- |
| Galamērķa līgums                         | `src/lib/logExport/types.ts`                 |
| Reģistrs                                 | `src/lib/logExport/registry.ts`              |
| Noslēpumu apstrāde                       | `src/lib/logExport/secrets.ts`               |
| Izpildītājs (vecākprocesa IPC)           | `src/lib/logExport/runner.ts`                |
| Procesa dzīves cikls                     | `src/lib/logExport/childRunner.ts`           |
| Bērnprocesa ieejas punkts                | `src/lib/logExport/exportChild.ts`           |
| Atvēršana tikai lasīšanai                | `src/lib/db/logExportReadOnly.ts`            |
| Koplietojamais vaicājums/kartējums       | `src/lib/usage/callLogExportQueries.ts`      |
| Detalizētās informācijas atrisinātājs    | `src/lib/usage/callLogDetailResolver.ts`     |
| API projekcija                           | `src/lib/logExport/presenter.ts`             |
| BigQuery galamērķis                      | `src/lib/logExport/destinations/bigquery.ts` |
| Google pakalpojuma konta autentifikācija | `src/lib/logExport/googleServiceAccount.ts`  |
| Izsaukumu žurnāla avots                  | `src/lib/usage/callLogExportSource.ts`       |
| Datu saglabāšana                         | `src/lib/db/logExportDestinations.ts`        |
| Cron uzdevums                            | `src/lib/jobs/logExportJob.ts`               |
| REST slānis                              | `src/app/api/log-export/`                    |
| Informācijas paneļa lapa                 | `src/app/(dashboard)/dashboard/log-export/`  |

Shēma: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Visiem maršrutiem ir nepieciešama pārvaldības autentifikācija (`requireManagementAuth`). Noslēpumi nekad netiek atgriezti:
saglabāts noslēpums tiek atgriezts kā literālā vērtība `__stored__`, un šīs vērtības nosūtīšana atjauninājumā
saglabā esošos akreditācijas datus.

Veidojot vai atjauninot galamērķi, kura tips deklarē noslēpumu, **ir nepieciešams
`STORAGE_ENCRYPTION_KEY`**. Bez tā `encrypt()` nemanāmi nodod datus tālāk bez izmaiņām, tāpēc ierakstīšana tiek
noraidīta ar statusu 400, nevis akreditācijas dati tiek ievietoti SQLite atklātā tekstā (tādu pašu aizsardzību izmanto
Telegram tīmekļa aizķere).

| Metode   | Ceļš                                     | Mērķis                                                                                    |
| -------- | ---------------------------------------- | ----------------------------------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Galamērķu tipi un to konfigurācijas lauku saraksts                                        |
| `GET`    | `/api/log-export/destinations`           | Galamērķu saraksts (noslēpumi aizklāti)                                                   |
| `POST`   | `/api/log-export/destinations`           | Izveidot galamērķi                                                                        |
| `GET`    | `/api/log-export/destinations/{id}`      | Nolasīt vienu galamērķi                                                                   |
| `PUT`    | `/api/log-export/destinations/{id}`      | Atjaunināt nosaukumu / iespējoto stāvokli / konfigurāciju / apstrādi paketēs              |
| `DELETE` | `/api/log-export/destinations/{id}`      | Dzēst                                                                                     |
| `POST`   | `/api/log-export/destinations/{id}/test` | Pārbaudīt akreditācijas datus, neko neierakstot                                           |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Eksportēt gaidošos ierakstus tūlīt, izmantojot to pašu izpildes ceļu kā plānotajā izpildē |
| `GET`    | `/api/log-export/status`                 | Cron stāvoklis, nesenās izpildes, gaidošie ieraksti katram galamērķim                     |

`GET /api/log-export/types` padara lietotāja saskarni universālu: informācijas paneļa veidlapa tiek atveidota no
atgrieztajiem lauku aprakstiem, tāpēc jaunam galamērķim nav nepieciešamas izmaiņas lietotāja saskarnē.

---

## 4. BigQuery galamērķis

Konfigurācijas atslēgas (`type: "bigquery"`):

| Atslēga              | Piezīmes                                                                        |
| -------------------- | ------------------------------------------------------------------------------- |
| `projectId`          | GCP projekts, kurā atrodas datu kopa                                            |
| `datasetId`          | `[A-Za-z0-9_]+`                                                                 |
| `tableId`            | `[A-Za-z0-9_]+`                                                                 |
| `location`           | Izmanto tikai tad, ja datu kopa ir jāizveido (noklusējums `EU`)                 |
| `serviceAccountJson` | Pakalpojuma konta atslēga. Noslēpums: glabāšanā šifrēta, nekad netiek atgriezta |
| `autoCreate`         | Izveidot datu kopu un tabulu pirmajā eksportēšanas reizē (noklusējums `true`)   |

Pakalpojuma kontam ir nepieciešama `bigquery.tables.updateData` atļauja mērķa tabulai, kā arī
`bigquery.datasets.create` / `bigquery.tables.create`, ja ir ieslēgts `autoCreate`.

Konfigurētā pakete ir **kursora** vienība, nevis HTTP vienība: `send()` sadala to insertAll
izsaukumos ar ne vairāk kā 500 rindām, tāpēc liels `batch_size` nevar pārsniegt BigQuery 10 MB pieprasījuma ierobežojumu.
Pārejošu statusu (408/429/500/502/503/504) gadījumā pieprasījumi tiek atkārtoti līdz trim reizēm ar eksponenciāli
pieaugošu aizkavi, atkārtoti izmantojot tos pašus insertIds; autentifikācijas un shēmas kļūmes izraisa izņēmumu jau pirmajā mēģinājumā,
nevis lieki turpina izpildi.

Tikko izveidota tabula straumēšanas galapunktā vēl nav redzama, un tas dažas sekundes atbild ar 404. Šī 404 gadījumā pieprasījums tiek atkārtots, taču **tikai tad, ja tabula tika izveidota šajā izpildes reizē** —
ja tabula patiešām neeksistē, kļūme joprojām tiek konstatēta uzreiz. Ņemiet vērā: atkārtoti izveidojot tabulu ar nosaukumu,
kas nesen izdzēsts, BigQuery vairākas minūtes atsakās pieņemt straumēšanas ievietojumus; tā ir
dzēšanas un atkārtotas izveides īpatnība, tāpēc labāk izvēlēties jaunu tabulas nosaukumu, nevis dzēst un no jauna pievienot esošo.

**Daļēja kļūme tiek atgriezta kā HTTP 200 ar netukšu `insertErrors[]`.** Tā tiek uzskatīta par
kļūmi un izraisa izņēmumu, kas neļauj kursoram pārvietoties tālāk par rindām, kuras BigQuery nav
pieņēmis; `tests/unit/log-export-bigquery.test.ts` nostiprina šo uzvedību.

Pārsūtīšanai tiek izmantots parasts REST — pašparakstīts RS256 apliecinājums tiek apmainīts pret piekļuves pilnvaru adresē
`https://oauth2.googleapis.com/token`, pēc tam rindas tiek nosūtītas uz `tabledata.insertAll`. Google SDK netiek
pievienots. Piekļuves pilnvaras tiek kešotas procesa ietvaros katram pārim (pakalpojuma konts, tvērums).

Izveidotajā tabulā ir viena kolonna katram žurnālu cilnes laukam, kā arī `exported_at`, un tās izkārtojums ir pielāgots tam,
kā izsaukumu žurnāli faktiski tiek vaicāti:

- **Sadalīta dienu nodalījumos pēc `timestamp`**, tāpēc vaicājums ar datuma ierobežojumu skenē tikai attiecīgās dienas.
- **Klasterēta pēc `api_key_name`, `provider`, `model`, `status`** (šādā secībā), tāpēc filtrēšana pēc tā,
  kurš veica izsaukumu, uz kurieni tas tika nosūtīts vai vai tas neizdevās, ļauj izlaist blokus katrā nodalījumā. BigQuery
  atļauj ne vairāk kā četras klasterēšanas kolonnas, un to secībai ir nozīme: filtrs tikai pēc `api_key_name`
  ļauj izlaist blokus, bet filtrs tikai pēc `status` — ne.
- **Neobligāts nodalījumu glabāšanas termiņš**, izmantojot `partitionExpirationDays` (0 saglabā visu), tiek piemērots
  tabulas izveides laikā.

Abi iestatījumi tiek piemēroti izveides laikā. Esoša tabula saglabā savu pašreizējo izkārtojumu, tāpēc,
ja vēlaties tos izmantot, norādiet galamērķim jaunu tabulas identifikatoru.

`tests/unit/log-export-bigquery.test.ts` pārbauda, vai kartētājs un tabulas shēma paliek savstarpēji saskaņoti,
lai jauna izsaukumu žurnāla kolonna eksportēšanas laikā nevarētu tikt nepamanīti atmesta.

Paketes tiek sadalītas daļās **gan** pēc rindu skaita, gan serializēto baitu skaita. Ar rindu skaitu vien nepietiek,
ja tiek eksportēts arī datu saturs: 500 rindas ar uzvednēm var aizņemt desmitiem megabaitu, un insertAll
noraida pieprasījumu, kas pārsniedz 10 MB. Daļa tiek noslēgta, sasniedzot 500 rindas vai 9 MB — atkarībā no tā, kurš ierobežojums sasniegts pirmais.

---

## 5. OTLP/HTTP trasējumu galamērķis

Konfigurācijā izmanto `type: "otlp-http"`. Tā ir plānota saglabāto izsaukumu žurnālu eksportēšana
ar kursora atbalstu, nevis reāllaika maršrutēšanas notikumu saņēmējs failā
`open-sse/services/routing/otel.ts`, kas darbojas bez piegādes garantijas. Tā nelasa un nemaina šī saņēmēja vides
mainīgos, taimerus vai buferus. Iespējojot abus, var tikt radīti divi neatkarīgi laidumu veidi;
izmantojiet instrumentācijas tvērumu `omniroute.log-export`, lai atšķirtu šos izsaukumu žurnālu laidumus.

| Atslēga           | Noklusējums / mērķis                                                         |
| ----------------- | ---------------------------------------------------------------------------- |
| `endpoint`        | Obligāts pilns HTTP(S) trasējumu URL; sufikss `/v1/traces` netiek pievienots |
| `headers`         | Neobligātas `Name: value` rindas vai virkņu JSON objekts; šifrēts            |
| `serviceName`     | `omniroute`; resursa atribūts `service.name`                                 |
| `langfuseMapping` | `false`; pievieno Langfuse ģenerēšanas/sesijas/lietotāja atribūtus           |
| `identity`        | `pseudonymous`, `keyName` vai `none`                                         |
| `paths`           | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`                      |
| `timeoutMs`       | `30000` katram HTTP mēģinājumam                                              |
| `environment`     | Nav iestatīts; neobligāts `langfuse.environment`                             |

Vispārīgais informācijas panelis attēlo šos laukus. `paths` pieņem API masīvu vai teksta apgabalu
ar precīziem ceļiem, kas atdalīti ar jaunām rindām/komatiem. Iegultņu, pārkārtošanas un citi ceļi tiek
izlaisti, ja vien tie nav skaidri atļauti. Arī izlaistās rindas virza kursoru uz priekšu; esošā
izpildītāja `exported`/`exportedTotal` skaitītāji uzskaita apstrādātās avota rindas, tostarp filtrētās
rindas, nevis pieņemtos laidumus. Filtrēšana tiek veikta pakārtotajā procesā, nemainot tā
IPC/kursora līgumu.

URL validācijai izmanto palīgfunkciju `parseAndValidateNonMetadataUrl` no
`src/shared/network/outboundUrlGuard.ts`, kurai nav nepieciešama datubāze: politiku `block-metadata`. Tai ir tādas pašas
beznosacījumu metadatu/protokola/iegulto akreditācijas datu pārbaudes kā tīmekļa aizķeres validatoram ar
atļautiem privātajiem URL, taču tā apzināti atļauj localhost/LAN mērķus bez globālas
funkcionalitātes karodziņa ignorēšanas. Tas ļauj izmantot pašmitinātus Langfuse, Phoenix, Tempo un Collector
galapunktus, tostarp privātus HTTP galapunktus. Mākoņa metadatu resursdatori vienmēr tiek bloķēti.
Pārvirzīšanai netiek sekots, tāpēc savācējs nevar pārvirzīt akreditācijas datus uz citu resursdatoru.
Tāpat kā esošā leksiskā URL aizsardzība, arī šī nefiksē DNS atrisinājumu; konfigurējiet tikai
operatora kontrolētus resursdatorus. Dodiet priekšroku HTTPS, ja galapunkts neatrodas uzticamā tīklā.

### Datu saturs un piegāde

OTLP/HTTP JSON (`ExportTraceServiceRequest`, `Content-Type: application/json`) satur vienu
CLIENT laidumu katrai atļautajai rindai, nosaucot to pēc precīzā pieprasījuma ceļa. Nosaukumu veidošana pēc ceļa ļauj atšķirt
Chat Completions, Responses un Messages, neiekļaujot laiduma nosaukumā modeļa vai identitātes datus.
Resursa atribūti ietver `service.name` un pakotnes `service.version`.

Parastais tērzēšanas mēģinājumu žurnalētājs (`open-sse/handlers/chatCore/attemptLogging.ts`) pabeigšanas brīdī ieraksta
`duration = Date.now() - startTime` un nenorāda laikspiedolu;
`saveCallLogOperation` failā `src/lib/usage/callLogs.ts` pēc noklusējuma iestata laikspiedolu uz ierakstīšanas
(pabeigšanas) laiku. Tāpēc eksportā beigas = rindas laikspiedols un sākums = beigas − ilgums
(milisekundēs, pārveidots par nanosekundēm decimālā pierakstā). Arī izsaucēja norādītie vēsturiskie laikspiedoli
tiek saglabāti kā beigu laiks; atsevišķām rindām nav sākuma/pabeigšanas atšķīrēja.
Nulles vērtības ilgums tiek pārvērsts par nulli. Nederīgu vai trūkstošu laikspiedolu gadījumā visa pakete beidzas ar kļūdu, nevis tiek izveidoti
nedeterministiski laidumi. `ttftMs` var būt nulles vērtība, un tas tiek kartēts uz `omniroute.ttft_ms`.

Atribūti ietver `gen_ai.operation.name="chat"`, pakalpojumu sniedzēju, pieprasīto/atbildes modeli,
ievades/izvades tokenus, neobligātus kešatmiņas lasīšanas/kešatmiņas izveides/spriešanas tokenus, HTTP statusu,
kombināciju, kešatmiņas avotu, sesijas birku un korelācijas ID. OTLP veselo skaitļu vērtības un laikspiedoli
ir decimālas virknes; virknēm, Būla vērtībām un daļskaitļiem izmanto to dabiskos OTLP vērtību
variantus. Kļūdu laidumiem ir ERROR statuss un sanitizēts statusa ziņojums. Kanoniskajā
ierakstā nav augšupējā resursdatora URL, tāpēc `server.address` tiek izlaists, nevis savācējs kļūdaini
norādīts kā modeļa serveris. Izmaksas netiek eksportētas.

Tikai `includeBodies=true` ielādē saturu. Ja `langfuseMapping=false`,
`gen_ai.input.messages` / `gen_ai.output.messages` satur sanitizētu pieprasījuma/atbildes
pamatteksta JSON tādā formā, kādā tas saglabāts OmniRoute (kanonizētu, ja to var parsēt), nevis pārveidotu semconv
ziņojumu masīvu. Saīsināti pamatteksti un pamatteksti, kas nav JSON, paliek neapstrādāta teksta formā. Ja `langfuseMapping=true`,
pamatteksti tiek izvadīti tikai kā `langfuse.observation.input` / `langfuse.observation.output`;
atribūti `gen_ai.*.messages` tiek izlaisti, lai katrs pamatteksts tiktu nosūtīts vienreiz. Abi režīmi
pārmanto `maxBodyBytes` no esošā satura ielādes ceļa;
`omniroute.bodies_truncated=true` norāda uz saīsināšanu.
Šis galamērķis nepievieno papildu apstrādes konveijera momentuzņēmumus vai nesanitizētu artefaktu lasīšanu.
Eksportējot pamattekstus, izmantojiet dažu minūšu intervālu, piemēram, `OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`,
nevis uzkrājiet stundas laikā neizpildītu darbu apjomu.

Pieprasījumu ierobežojums ir 500 laidumi un 4 MiB UTF-8 JSON, ieskaitot aploksni.
Pirms kursora paketes pirmā pieprasījuma tiek pārbaudīts katra atļautā laiduma lielums. Ja atsevišķs
laidums pārsniedz ierobežojumu, netiek nosūtīta neviena šīs paketes daļa, un darbība neizdodas ar norādi samazināt
`maxBodyBytes`; laidums netiek atmests bez brīdinājuma. Sākotnējā pārbaude saglabā tikai atsauces uz ierakstiem un
baitu skaitu, atmetot katru pagaidu laidumu/JSON; laidumi tiek izveidoti atkārtoti ierobežota lieluma daļām,
nevis glabājot otru paketes serializēto kopiju. HTTP 408/429/5xx, tīkla kļūmju un taimautu gadījumā tiek veikti ne vairāk kā
trīs mēģinājumi ar 250/500 ms eksponenciālu atkārtošanas aizturi. `Retry-After` sekundes vai HTTP datumi
var pagarināt aizturi līdz 5 sekundēm. Citu statusu gadījumā darbība neizdodas nekavējoties. Arī OTLP 2xx daļējas noraidīšanas gadījumā tiek izmests izņēmums, nevis
apstiprināts zaudēts laidums; tiek pieņemti tukši apstiprinājumi vai apstiprinājumi derīgā JSON formātā, piemērojot
64 KiB atbildes nolasīšanas ierobežojumu.

Kļūdas satur tikai eksportētāja rīcībā esošus faktus: HTTP statusu, atkārtošanas klasi, mēģinājumu un nosūtīto laidumu
skaitu vai fiksētu apstiprinājuma/tīkla kļūmes formulējumu. Savācēja atbilžu saturs,
daļējas izdošanās skaitītāji un atbilžu galvenes nekad netiek kopētas kļūdās, žurnālos vai
informācijas panelī. Neizdevusies vai daļēji pieņemta pakete netiek apstiprināta: galamērķis rāda
kļūmes stāvokli ar attiecīgo statusu, kursors paliek pie pēdējās apstiprinātās paketes, un nākamajā izpildes reizē
tās pašas rindas tiek nosūtītas atkārtoti. Pastāvīgu kļūdu statusu gadījumā darbība turpina neizdoties, līdz tiek novērsta savācēja vai konfigurācijas
problēma. Lai iegūtu atbildes detalizēto informāciju, izmantojiet paša savācēja žurnālus. Izsaukumu žurnāla kļūdu kopsavilkumiem tiek saglabāta
atsevišķa sensitīvās informācijas aizklāšana.
`prepare()` neko nesagatavo infrastruktūrā; pārbaude nosūta tieši `{"resourceSpans":[]}` un ziņo par
HTTP statusu, neierakstot izsaukumu žurnāla laidumus.

Trasējumu ID un laidumu ID ir pirmie 32/16 heksadecimālie cipari no SHA-256 vērtības, kas aprēķināta attiecīgi no
`"omniroute.trace\\0" + callLogId` un `"omniroute.span\\0" + callLogId`. Atkārtotiem sūtījumiem ir
identiski ID. Tas negarantē dublikātu novēršanu: dažas aizmugursistēmas, tostarp Langfuse
v4 datu uzņemšana, nenovērš laidumu dublikātus ar vienādiem ID. Avārijas vai atsevišķas daļas kļūmes dēļ var
atkārtoti nosūtīt ne vairāk kā vienu neapstiprināto kursora paketi; var tikt dublēta visa šī pakete,
ne tikai tās pēdējā HTTP daļa. Izvēlieties kursora paketes lielumu, ņemot vērā šo kompromisu.

### Langfuse piemērs

Pašmitinātai Langfuse instancei konfigurējiet šos laukus:

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

Izveidojiet Authorization vērtību lokāli kā burtiskās virknes `public-key:secret-key`
Base64 kodējumu (piemēram, ar `Buffer.from(publicKey + ":" + secretKey).toString("base64")`).
Neievietojiet īstus piekļuves datus žurnālos, ekrānuzņēmumos vai problēmu pieteikumos. Kartēšana automātiski
iestata `x-langfuse-ingestion-version: 4`; Authorization joprojām tiek norādīts laukā `headers`.
Gan galvenes, gan ģenerētā identitātes sāls vērtība izmanto esošo šifrēto slepeno lauku
mehānismu un API vietturus; ir nepieciešams `STORAGE_ENCRYPTION_KEY`.

Kartēšana pievieno ģenerēšanas tipu/modeli, JSON lietojuma informāciju (ievadi/izvadi/kopsummu un pieejamās
kešatmiņas atslēgas), ievades/izvades JSON momentuzņēmumus, ERROR/DEFAULT līmeni, attīrītu statusa ziņojumu,
trasējuma nosaukumu, sesijas ID, neobligātu vidi un filtrējamu
`langfuse.observation.metadata.<key>` informāciju par pakalpojuma sniedzēju, pieprasīto modeli, ceļu, kombināciju, kešatmiņas
avotu un statusu. `langfuse.observation.completion_start_time` ir ISO 8601 formātā izteikts
sākuma laiks + TTFT tikai tad, ja TTFT ir zināms un ietilpst ilgumā. Izmaksu atribūti netiek sūtīti.

Identitātes režīmi attiecas uz `langfuse.user.id`:

- `pseudonymous` (noklusējums): API atslēgas iekšējā ID HMAC-SHA256 ar nejaušu,
  katram galamērķim atsevišķu 32 baitu sāls vērtību. Ja sāls vērtības nav, tā tiek ģenerēta izveides brīdī, šifrēta
  kā `identitySalt`, nekad netiek atgriezta un tiek saglabāta rediģēšanas laikā. Neapstrādāti atslēgu ID nekad
  netiek ievietoti laidumu atribūtos. Galamērķa sāls vērtības atkārtota izveide/rotācija maina identitātes.
- `keyName`: konfigurētais API atslēgas nosaukums, apzināti atklājot šo operatora etiķeti.
- `none`: bez lietotāja ID. Sesiju tagi joprojām tiek eksportēti, ja tie ir pieejami; šie režīmi
  neanonimizē patvaļīgu uzvedņu saturu vai operatora norādītas sesiju/korelācijas etiķetes.

### Sākšana bez vēsturisko datu aizpildīšanas

Tikai izveides laikā iespējojiet **Sākt no pašreizējās pozīcijas (izlaist esošos žurnālus)** vai norādiet
`startFromCurrentPosition: true` izveides API pieprasījuma satura augšējā līmenī. Tas inicializē
`cursor_row_id` ar pašreizējo maksimālo saglabāto izsaukumu žurnāla rowid, izmantojot esošās kursora
palīgfunkcijas, bez migrācijas. Noklusējuma vērtība ir false (kursors 0 un saglabātās vēstures aizpildīšana).
Tas nav iestatījums kursora atiestatīšanai atjaunināšanas laikā.

Koplietojamā `ttftMs` pievienošana arī pievieno kolonnu `ttft_ms`, kurā atļauta null vērtība, BigQuery kartētājam
un jaunās tabulas shēmai: tās shēmas tests pieprasa, lai katram kanoniskā ieraksta laukam būtu
kolonna. Esošās tabulas turpina eksportēt bez izmaiņām: `prepare()` nolasa tabulas shēmu un
izlaiž tikai `ttft_ms`, ja šīs kolonnas nav. Pievienojiet INT64 kolonnu, kurā atļauta null vērtība, lai saņemtu TTFT
nākamajā izpildes reizē, vai izmantojiet jaunu tabulu. Nav nepieciešams PATCH, automātiskas shēmas izmaiņas vai papildu
atļaujas; visiem pārējiem rindas laukiem tiek saglabāta stingra shēmas pārbaude.

---

## 6. Galamērķa pievienošana

1. Izveidojiet `src/lib/logExport/destinations/<name>.ts`, kas eksportē `LogExportDestinationType`:
   Zod `configSchema`, `fields` deskriptoru masīvu lietotāja saskarnei, `secretFields` un
   `createClient(config)`, kas atgriež `test()` / `prepare()` / `send(records)`.
2. Pievienojiet to `DESTINATIONS` masīvam failā `src/lib/logExport/registry.ts`.
3. Uzrakstiet testus direktorijā `tests/unit/`.

Tās ir visas izmaiņas: datu saglabāšana, cron uzdevums, REST slānis, slepeno datu šifrēšana un
vadības paneļa veidlapa izmanto reģistru.

Divi noteikumi jaunam galamērķim:

- `send()` **ir jāizmet izņēmums**, ja rodas daļēja kļūme. Veiksmīga izpilde nozīmē, ka “galamērķī ir šīs rindas”,
  un kursors tiek neatgriezeniski pārvietots aiz tām.
- Galamērķim, kas pieņem lietotāja norādītu URL, pirms pieprasījuma veikšanas tas ir jāvalidē, izmantojot
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`),
  tāpat kā to dara tīmekļa aizķeres. BigQuery tas nav nepieciešams: tā resursdatori ir konstanti.

---

## 7. Lietošana

- **Vadības panelis**: Integrācijas → Žurnālu eksportēšana. Pievienojiet galamērķi, palaidiet **Pārbaudīt**, lai pārbaudītu akreditācijas datus,
  neierakstot rindas, un pēc tam iespējojiet to.
- **Neapstrādātās rindas**: katra galamērķa kartītē ir redzamas gaidošās rindas un kursors; `GET
/api/log-export/status` atgriež tos pašus rādītājus un pēdējās 20 uzdevuma izpildes.
- **Viena galamērķa kļūme neizraisa pārējo galamērķu kļūmi** — izpildes kopsavilkumā katra galamērķa
  statuss tiek ierakstīts laukos `last_status` / `last_error`, savukārt uzdevuma izpilžu vēsturē tiek saglabāts kopējais rezultāts.
- **Dzēšot galamērķi, tiek dzēsts arī tā kursors.** Pievienojot to atkārtoti, apstrāde sākas no vecākā saglabātā
  izsaukumu žurnāla ieraksta, tādējādi atkārtoti nosūtot rindas, kas galamērķī jau var būt. BigQuery gadījumā katras rindas
  `insertId` novērš dublēšanos tikai paša BigQuery deduplikācijas laika logā, tāpēc labāk
  atspējot galamērķi, nevis to dzēst.
