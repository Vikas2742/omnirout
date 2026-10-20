# Log export (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Priebežný, inkrementálny export záznamov volaní OmniRoute do externého analytického úložiska.

Karta Záznamy na riadiacom paneli uchováva históriu požiadaviek v SQLite (`call_logs`), ktorej rozsah je obmedzený
rotáciou a dobou uchovávania. Export záznamov odosiela rovnakú množinu záznamov podľa harmonogramu, aby sa mohla uchovávať dlhšie než
lokálna databáza a spájať s inými údajmi. BigQuery je prvým cieľom;
spracovateľský reťazec používa register, takže ďalšie ciele možno priebežne pridávať.

---

## 1. Ako to funguje

```
server (dešifrovanie + overenie konfigurácie, zosúladenie kurzora)
  → start IPC → izolovaný proces OS exportChild
    → storage.sqlite iba na čítanie → zdieľané dotazovanie/mapovanie záznamov volaní
      → asynchrónne načítanie artefaktov → prepare()/send() cieľa
        → batch IPC → server uloží kurzor → ack IPC
          → ďalšia dávka; done IPC → server zaznamená úspech
```

- **Harmonogram** — jedna úloha cron v `JobRegistry`, `log_export`, s predvolenou hodnotou `0 * * * *` (každú hodinu,
  UTC). Je zaregistrovaná v `src/lib/initCloudSync.ts`; možno ju prepísať pomocou `OMNIROUTE_LOG_EXPORT_CRON`.
  Každé spustenie postupne vyexportuje čakajúce záznamy pre všetky **povolené** ciele.
- **Kurzor** — implicitné `call_logs.rowid` v SQLite, ukladané pre každý cieľ v
  `log_export_destinations.cursor_row_id`. `timestamp` zámerne nie je kurzorom: volajúci
  môžu zadať vlastnú hodnotu, takže pomalá požiadavka sa môže zapísať až po rýchlejšej, ktorá začala
  neskôr, a kurzor založený na časovej pečiatke by ju preskočil.
- **Dávkovanie** — `batch_size` riadkov na požiadavku (predvolene 500), `max_rows_per_run` riadkov na spustenie
  (predvolene 10000), aby sa veľké množstvo nahromadených záznamov spracovalo počas viacerých spustení namiesto blokovania jediného.
- **Doručenie** — kurzor sa posunie až po úspešnom dokončení `send()`. Pri zlyhaní dávky zostane
  kurzor na pôvodnom mieste, takže pri ďalšom spustení sa zopakuje odoslanie rovnakých riadkov. Zárukou je
  doručenie aspoň raz spolu s odstraňovaním duplicít na strane cieľa, nie skutočné doručenie presne raz: BigQuery používa ako kľúč každého
  riadka identifikátor záznamu volania, ktorý rešpektuje v rámci svojho deduplikačného okna bez úplnej záruky.
- **Ochrana pred súbehom** — spustenie cronu a `POST .../run` môžu nastať súčasne. Cieľ,
  ktorého export už prebieha, sa preskočí namiesto dvojitého exportu (`skipped: true` vo výsledku spustenia),
  takže súbežné spustenie nemôže opätovne odoslať dávku ani posunúť kurzor dozadu.
- **Obnova po vymazaní** — ak sa `cursor_row_id` ocitne nad `MAX(rowid)` (celá tabuľka bola
  vymazaná a hodnoty rowid sa začali prideľovať odznova), vykonávací proces vráti kurzor na 0 namiesto toho, aby natrvalo prestal vidieť nové záznamy.

### Izolovaný vykonávací proces a limity

Každé spustenie exportu do cieľa v Node vytvorí samostatný, krátko žijúci podriadený proces OS (`child_process`
s IPC, nie `worker_threads`). Čítanie tiel, parsovanie/serializácia dát JSON, `prepare()`
cieľa a sieťové I/O cieľa prebiehajú v ňom, nie v slučke udalostí servera.
Cez IPC sa prenáša iba konfigurácia a malé správy o priebehu; exportované záznamy sa nikdy nevracajú
na server. Úloha cron aj trasa Spustiť teraz zachovávajú rovnaký verejný výsledok a ochranu pred súbehom.

Podriadený proces otvorí serverom určený súbor `DATA_DIR/storage.sqlite` iba na čítanie pomocou `node:sqlite`,
s nastaveniami `busy_timeout=5000` a `query_only=ON`. Neimportuje žiadny databázový singleton a nevykonáva
migrácie, zálohy ani aktualizácie SQLite. Evidencia chýbajúcich/poškodených artefaktov (vrátane
príkazu UPDATE pre poškodený artefakt) zostáva výhradne v spracovaní detailu na riadiacom paneli. Obe vetvy zdieľajú čistý
resolver detailov; export používa asynchrónne čítanie súborového systému a rovnaké poradie vyhľadávania artefakt → staršie
vložené údaje → staršie údaje na disku → nič. Spustenie zachytí maximálne rowid vložených záznamov
v okamihu, keď podriadený proces otvorí čítač; neskoršie vloženia počkajú na ďalšie spustenie. Ide o hranicu
vkladania, nie o dlhotrvajúcu transakciu SQLite: zápisy do WAL a kontrolné body môžu počas
čakania na sieť voľne pokračovať. Táto hranica nezmrazuje aktualizácie/odstránenia existujúcich riadkov.

Po každej prijatej dávke podriadený proces čaká na potvrdenie. Server najprv uloží
kurzor pomocou `advanceLogExportCursor` a potom odošle `ack`; dovtedy sa ďalšia dávka nezačne.
Zlyhanie odosielania, pád alebo prekročenie časového limitu zaznamená neúspech bez posunutia kurzora pre danú dávku. Predtým
potvrdené dávky zostávajú uložené; opätovne sa môže odoslať najviac jedna nepotvrdená dávka.
Úspech sa zaznamená až po `done` a riadnom ukončení podriadeného procesu. Pri zlyhaní sa podriadený proces ukončí
signálom SIGTERM, po 500 ms sa prípadne použije SIGKILL a vykonávací proces počká na úplné ukončenie procesu.

| Premenná prostredia                           | Predvolená hodnota | Účel                                                   |
| --------------------------------------------- | ------------------ | ------------------------------------------------------ |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000             | Limit reálneho času pre každý cieľ                     |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024               | Limit priestoru old-space V8 podriadeného procesu v MB |

Neplatné, nekladné alebo neceločíselné hodnoty sa nahradia predvolenými hodnotami. Nastavenie haldy nepredstavuje celkový
limit RSS; veľmi veľké dávky môžu aj tak vyčerpať pamäť podriadeného procesu a bezpečne ukončiť spustenie neúspechom.
Predvolená hodnota 1024 MB ponecháva rezervu pre predvolenú dávku 500 riadkov s artefaktmi s veľkosťou 512 KiB
a povolenými telami vrátane serializácie JSON pre BigQuery rozdelenej do blokov podľa počtu bajtov. Neznamená to, že
dávka 10000 riadkov s telami je bezpečná. Pri vyčerpaní haldy V8 sa zaznamená zlyhanie s odporúčaním nápravy: znížte veľkosť
dávky alebo zvýšte `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; kurzor zostane na poslednej
potvrdenej dávke. Historické telá uložené priamo v záznamoch alebo na disku nepodliehajú modernému limitu veľkosti artefaktov.
Prevádzkovatelia musia RSS plánovať samostatne, najmä v kontajneroch s obmedzenou pamäťou.

Podriadený proces dedí iba vyhodnotené `DATA_DIR`, `NODE_ENV`, explicitné `TZ` (starší spôsob
vyhodnocovania miestneho času v názvoch súborov), `ELECTRON_RUN_AS_NODE`, ak je prítomné, a nasledujúce vstupy pre odchádzajúce spojenia:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (a ich varianty s malými písmenami),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Globálny dispečer Undici zdieľa so serverom vyhodnocovanie proxy výhradne z prostredia a pravidlá
obchádzania proxy pre lokálnych hostiteľov vrátane `NO_PROXY`; neimportuje `proxyFetch.ts` ani jeho príznaky databázy či funkcií.
Prihlasovacie údaje proxy sa odstraňujú z preposielaného výstupu a zaznamenaných chýb. Prihlasovacie údaje cieľa
sa prenášajú iba v jednej úvodnej správe IPC, nikdy nie cez argv ani prostredie; preposielaný výstup a chyby
dostávajú predponu a očisťujú sa. V argumentoch spustenia podriadeného procesu sa vypína iba `ExperimentalWarning`, aby sa
upozornenie Node na SQLite neopakovalo pri každom spustení cron; ostatné typy upozornení zostávajú viditeľné.

Moduly cieľov musia byť importovateľné bez závislostí od Next.js alebo závislostí určených iba pre server. Existujúca
implementácia BigQuery už túto požiadavku spĺňa. Vyrovnávacie pamäte prístupových tokenov existujú iba počas behu podriadeného
procesu, nie medzi jednotlivými behmi. Podporovaným behovým prostredím je Node (engines v `package.json`), ale sekcia inštalácie Bun
v README a `Dockerfile.bun` tiež uvádzajú cestu ku kompatibilite v produkcii pomocou
`bun:sqlite` (`src/lib/db/core.ts` / adaptéry). V prostredí Bun preto exporty zachovávajú predchádzajúci
spôsob vykonávania v rámci procesu a jednorazovo vypíšu upozornenie: izolácia haldy a časového limitu podriadeného procesu nie je dostupná. Použite
Node na izoláciu slučky udalostí a ochranu pred vyčerpaním pamäte; Bun sa tu nepovažuje za prostredie určené iba na vývoj.

Keď je zapnuté `includeBodies`, uprednostnite interval v ráde minút, napríklad
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, namiesto hromadenia dát čakajúcich na hodinový export.
Limity dávok a riadkov naďalej obmedzujú každý beh. Náklady na spustenie procesu vznikajú pre každý cieľ pri každom behu;
ide o výmenu malých nákladov na spustenie za izoláciu slučky udalostí servera, nie o zníženie celkového využitia CPU.

### Prenášané dáta (prompty a dokončenia)

Export predvolene obsahuje iba súhrnné polia, ktoré zobrazuje **zoznam** protokolov. Zapnutím možnosti
**Exportovať prompty a odpovede** (`includeBodies`) sa navyše prenáša to, čo panel **detailov**
protokolov zobrazuje pre každé volanie:

| Pole                             | Čo obsahuje                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------- |
| `request_body` / `response_body` | Dáta volania tak, ako ich vykresľuje informačný panel                        |
| `pipeline_route_decision`        | Ktorý cieľ a model smerovač vybral                                           |
| `pipeline_client_request`        | Nespracovaná požiadavka presne tak, ako ju odoslal klient                    |
| `pipeline_openai_request`        | Po prevode do interného formátu OpenAI                                       |
| `pipeline_provider_request`      | V podobe skutočne odoslanej poskytovateľovi, v jeho formáte                  |
| `pipeline_provider_response`     | Nespracovaná odpoveď poskytovateľa                                           |
| `pipeline_client_response`       | Čo bolo vrátené volajúcemu                                                   |
| `pipeline_error`                 | Podrobnosti o chybe na úrovni spracovateľského reťazca pri neúspešnom volaní |
| `bodies_truncated`               | Pravda, ak niektoré z uvedených polí dosiahlo `maxBodyBytes`                 |

Ide o obsah promptov, preto je táto možnosť **predvolene vypnutá** a zámerne sa volí pre každý cieľ osobitne.
Odosiela sa to, čo zobrazuje informačný panel, pretože export a `getCallLogById` zdieľajú vyhodnocovanie
detailov: z prenášaných dát
sa už pri zápise odstraňujú osobné údaje a tajné informácie a volanie vykonané pomocou
kľúča API s `noLog` neukladá žiadne dáta volania, takže nie je čo exportovať.

Dáta volania sa načítavajú pre každý riadok z artefaktu v súborovom systéme, takže dopĺňanie dát prebieha iba pre ciele,
ktoré o ne požiadali. Pri chýbajúcom alebo poškodenom artefakte sa exportuje jeho súhrn s hodnotami null namiesto dát volania,
namiesto toho, aby zlyhala celá dávka a kurzor sa nemohol posunúť ďalej.

`maxBodyBytes` (predvolene 262144) obmedzuje každé pole. Dlhšie dáta sa **skrátia namiesto
zahodenia** — aj skrátený prompt stále odpovedá na otázku „čo sa požadovalo“ — a riadok sa označí príznakom
`bodies_truncated`. Priebežné zmeny streamované po jednotlivých blokoch sa neexportujú; zostavená odpoveď je
už v `pipeline_provider_response` a `pipeline_client_response`.

---

## 2. Súbory

| Súčasť                                | Umiestnenie                                  |
| ------------------------------------- | -------------------------------------------- |
| Kontrakt cieľa                        | `src/lib/logExport/types.ts`                 |
| Register                              | `src/lib/logExport/registry.ts`              |
| Správa tajných údajov                 | `src/lib/logExport/secrets.ts`               |
| Spúšťač (IPC nadradeného procesu)     | `src/lib/logExport/runner.ts`                |
| Životný cyklus procesu                | `src/lib/logExport/childRunner.ts`           |
| Vstupný bod podradeného procesu       | `src/lib/logExport/exportChild.ts`           |
| Otváranie iba na čítanie              | `src/lib/db/logExportReadOnly.ts`            |
| Zdieľané dotazy/mapovanie             | `src/lib/usage/callLogExportQueries.ts`      |
| Riešenie detailov                     | `src/lib/usage/callLogDetailResolver.ts`     |
| Projekcia API                         | `src/lib/logExport/presenter.ts`             |
| Cieľ BigQuery                         | `src/lib/logExport/destinations/bigquery.ts` |
| Autentifikácia servisného účtu Google | `src/lib/logExport/googleServiceAccount.ts`  |
| Zdroj denníka volaní                  | `src/lib/usage/callLogExportSource.ts`       |
| Trvalé ukladanie                      | `src/lib/db/logExportDestinations.ts`        |
| Úloha cron                            | `src/lib/jobs/logExportJob.ts`               |
| Vrstva REST                           | `src/app/api/log-export/`                    |
| Stránka ovládacieho panela            | `src/app/(dashboard)/dashboard/log-export/`  |

Schéma: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

Všetky trasy vyžadujú autentifikáciu pre správu (`requireManagementAuth`). Tajné údaje sa nikdy nevracajú:
uložený tajný údaj sa vráti ako literál `__stored__` a odoslanie tejto hodnoty späť pri aktualizácii
zachová uložený prihlasovací údaj.

Vytvorenie alebo aktualizácia cieľa, ktorého typ deklaruje tajný údaj, **vyžaduje
`STORAGE_ENCRYPTION_KEY`**. Bez neho `encrypt()` potichu prepúšťa údaje bez zmeny, takže zápis sa
odmietne s kódom 400 namiesto uloženia prihlasovacieho údaja do SQLite v otvorenom texte (rovnakú ochranu
používa aj webhook Telegramu).

| Metóda   | Cesta                                    | Účel                                                                                   |
| -------- | ---------------------------------------- | -------------------------------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Typy cieľov + zoznam ich konfiguračných polí                                           |
| `GET`    | `/api/log-export/destinations`           | Zoznam cieľov (tajné údaje skryté)                                                     |
| `POST`   | `/api/log-export/destinations`           | Vytvorenie cieľa                                                                       |
| `GET`    | `/api/log-export/destinations/{id}`      | Načítanie jedného cieľa                                                                |
| `PUT`    | `/api/log-export/destinations/{id}`      | Aktualizácia názvu / povolenia / konfigurácie / dávkovania                             |
| `DELETE` | `/api/log-export/destinations/{id}`      | Odstránenie                                                                            |
| `POST`   | `/api/log-export/destinations/{id}/test` | Overenie prihlasovacích údajov bez zápisu                                              |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Okamžité spracovanie čakajúcich záznamov rovnakým postupom ako pri plánovanom spustení |
| `GET`    | `/api/log-export/status`                 | Stav cronu, nedávne spustenia, čakajúce záznamy pre každý cieľ                         |

`GET /api/log-export/types` umožňuje univerzálne používateľské rozhranie: formulár ovládacieho panela sa vykresľuje
na základe vrátených deskriptorov polí, takže nový cieľ nevyžaduje žiadnu zmenu používateľského rozhrania.

---

## 4. Cieľ BigQuery

Konfiguračné kľúče (`type: "bigquery"`):

| Kľúč                 | Poznámky                                                                   |
| -------------------- | -------------------------------------------------------------------------- |
| `projectId`          | Projekt GCP obsahujúci množinu údajov                                      |
| `datasetId`          | `[A-Za-z0-9_]+`                                                            |
| `tableId`            | `[A-Za-z0-9_]+`                                                            |
| `location`           | Používa sa iba pri vytváraní množiny údajov (predvolene `EU`)              |
| `serviceAccountJson` | Kľúč servisného účtu. Tajný údaj: šifrovaný pri uložení, nikdy sa nevracia |
| `autoCreate`         | Vytvoriť množinu údajov a tabuľku pri prvom exporte (predvolene `true`)    |

Servisný účet potrebuje oprávnenie `bigquery.tables.updateData` pre cieľovú tabuľku a tiež
`bigquery.datasets.create` / `bigquery.tables.create`, keď je zapnuté `autoCreate`.

Nakonfigurovaná dávka je jednotkou **kurzora**, nie požiadavky HTTP: `send()` ju rozdelí na volania insertAll
s najviac 500 riadkami, takže ani veľká hodnota `batch_size` neprekročí limit požiadavky BigQuery 10 MB.
Pri dočasných stavoch (408/429/500/502/503/504) sa pokus opakuje najviac trikrát s exponenciálne
rastúcim oneskorením a s rovnakými insertIds; chyby autentifikácie a schémy vyvolajú výnimku už pri prvom pokuse,
aby sa zbytočne nemrhal časom behu.

Práve vytvorená tabuľka ešte nie je viditeľná pre koncový bod streamovania, ktorý niekoľko sekúnd
odpovedá kódom 404. Pri tomto kóde 404 sa pokus opakuje, ale **iba ak bola tabuľka vytvorená počas tohto behu** —
ak tabuľka skutočne chýba, operácia naďalej okamžite zlyhá. Upozorňujeme, že opätovné vytvorenie tabuľky s názvom,
ktorý bol nedávno odstránený, spôsobí, že BigQuery bude niekoľko minút odmietať streamované vkladanie; ide o
vlastnosť postupu odstránenia a následného opätovného vytvorenia, preto radšej použite nový názov tabuľky namiesto jej odstránenia a opätovného pridania.

**Čiastočné zlyhanie sa vracia ako HTTP 200 s neprázdnym `insertErrors[]`.** Považuje sa za
zlyhanie a vyvolá výnimku, čím sa zabráni posunu kurzora za riadky, ktoré BigQuery nikdy
neprijalo; `tests/unit/log-export-bigquery.test.ts` toto správanie overuje.

Prenos používa priamo REST — vlastnoručne podpísané tvrdenie RS256 sa vymení za prístupový token na adrese
`https://oauth2.googleapis.com/token` a riadky sa potom odosielajú do `tabledata.insertAll`. Žiadne Google SDK sa
nepridáva. Prístupové tokeny sa ukladajú do vyrovnávacej pamäte v rámci procesu pre každú dvojicu (servisný účet, rozsah oprávnení).

Vytvorená tabuľka obsahuje jeden stĺpec pre každé pole na karte Logs a navyše `exported_at` a jej usporiadanie
zodpovedá tomu, ako sa záznamy volaní skutočne vyhľadávajú:

- **Rozdelenie na denné partície podľa `timestamp`**, takže dopyt ohraničený dátumom prehľadáva iba príslušné dni.
- **Zoskupenie podľa `api_key_name`, `provider`, `model`, `status`** (v tomto poradí), takže filtrovanie podľa
  toho, kto volanie spustil, kam smerovalo alebo či zlyhalo, vynecháva bloky v rámci každej partície. BigQuery
  povoľuje najviac štyri stĺpce zoskupenia a na poradí záleží: filter iba podľa `api_key_name`
  umožňuje vynechávanie blokov, filter iba podľa `status` nie.
- **Voliteľná doba uchovávania partícií** prostredníctvom `partitionExpirationDays` (0 zachová všetko), ktorá sa uplatní
  pri vytvorení tabuľky.

Obe nastavenia sa uplatňujú pri vytvorení. Existujúca tabuľka si zachová svoje pôvodné usporiadanie, takže
ak ich chcete využiť, nastavte v cieli nový identifikátor tabuľky.

`tests/unit/log-export-bigquery.test.ts` overuje, že mapovanie a schéma tabuľky zostávajú
zosúladené, takže nový stĺpec záznamu volania sa pri exporte nemôže potichu vynechať.

Dávky sa delia podľa **oboch** kritérií: počtu riadkov aj počtu serializovaných bajtov. Samotný počet riadkov nestačí,
keď sa exportujú aj dátové obsahy: 500 riadkov obsahujúcich prompty môže mať desiatky megabajtov a insertAll
odmietne požiadavku väčšiu než 10 MB. Časť dávky sa uzavrie pri dosiahnutí 500 riadkov alebo 9 MB, podľa toho, čo nastane skôr.

---

## 5. Cieľ exportu stôp OTLP/HTTP

Konfigurácia používa `type: "otlp-http"`. Ide o plánovaný export uložených
záznamov volaní s využitím kurzora, nie o výstup živých udalostí smerovania s doručením podľa možností v
`open-sse/services/routing/otel.ts`. Nečíta ani nemení premenné prostredia,
časovače či vyrovnávacie pamäte tohto výstupu. Zapnutie oboch môže vytvárať dva nezávislé druhy spanov;
na odlíšenie týchto spanov zo záznamov volaní použite inštrumentačný rozsah `omniroute.log-export`.

| Kľúč              | Predvolená hodnota / účel                                               |
| ----------------- | ----------------------------------------------------------------------- |
| `endpoint`        | Povinná úplná HTTP(S) URL pre stopy; prípona `/v1/traces` sa nepridáva  |
| `headers`         | Voliteľné riadky `Name: value` alebo objekt JSON s reťazcami; šifrované |
| `serviceName`     | `omniroute`; atribút prostriedku `service.name`                         |
| `langfuseMapping` | `false`; pridáva atribúty generovania/relácie/používateľa pre Langfuse  |
| `identity`        | `pseudonymous`, `keyName` alebo `none`                                  |
| `paths`           | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`                 |
| `timeoutMs`       | `30000` na jeden pokus HTTP                                             |
| `environment`     | Nenastavené; voliteľné `langfuse.environment`                           |

Všeobecný ovládací panel zobrazuje tieto polia. `paths` prijíma pole cez API alebo textové pole
s presnými cestami oddelenými novými riadkami/čiarkami. Cesty pre embeddingy, rerank a ďalšie operácie sa
preskakujú, pokiaľ nie sú výslovne povolené. Aj preskočené riadky posúvajú kurzor; existujúce
počítadlá `exported`/`exportedTotal` vykonávacieho procesu počítajú spracované zdrojové riadky vrátane odfiltrovaných
riadkov, nie prijaté spany. Filtrovanie sa vykonáva v podradenom procese bez zmeny jeho
kontraktu IPC/kurzora.

Overovanie URL používa pomocnú funkciu `parseAndValidateNonMetadataUrl` bez prístupu k DB zo súboru
`src/shared/network/outboundUrlGuard.ts`: politiku `block-metadata`. Má rovnaké
bezpodmienečné kontroly metadát/protokolu/vložených prihlasovacích údajov ako validátor webhookov
s povolenými súkromnými URL, ale zámerne povoľuje ciele localhost/LAN bez globálneho
prepísania príznaku funkcie. To umožňuje používať koncové body Langfuse, Phoenix, Tempo a Collector
vo vlastnej infraštruktúre vrátane súkromných koncových bodov HTTP. Hostitelia cloudových metadát sú vždy blokovaní.
Presmerovania sa nenasledujú, takže kolektor nemôže presmerovať prihlasovacie údaje na iného hostiteľa.
Podobne ako existujúca lexikálna ochrana URL, ani táto ochrana nefixuje výsledok rozlíšenia DNS; konfigurujte iba
hostiteľov pod kontrolou prevádzkovateľa. Vždy, keď koncový bod nie je v dôveryhodnej sieti, uprednostnite HTTPS.

### Obsah a doručovanie

OTLP/HTTP JSON (`ExportTraceServiceRequest`, `Content-Type: application/json`) prenáša jeden
span typu CLIENT na každý povolený riadok, pomenovaný presnou cestou požiadavky. Pomenovanie podľa cesty rozlišuje
Chat Completions, Responses a Messages bez zahrnutia údajov o modeli alebo identite do
názvu spanu. Atribúty prostriedku zahŕňajú `service.name` a `service.version` balíka.

Štandardný zapisovač pokusov o chat (`open-sse/handlers/chatCore/attemptLogging.ts`) pri dokončení zapisuje
`duration = Date.now() - startTime` a neposkytuje časovú pečiatku;
`saveCallLogOperation` v `src/lib/usage/callLogs.ts` predvolene nastavuje časovú pečiatku na čas zápisu
(dokončenia). Export preto nastavuje koniec = časová pečiatka riadka a začiatok = koniec − trvanie
(milisekundy prevedené na desiatkové nanosekundy). Historické časové pečiatky zadané volajúcim
sa takisto zachovávajú ako čas konca; na úrovni riadka sa nerozlišuje začiatok a dokončenie.
Trvanie s hodnotou null sa zmení na nulu. Neplatné/chýbajúce časové pečiatky spôsobia zlyhanie dávky namiesto vytvorenia
nedeterministických spanov. `ttftMs` môže mať hodnotu null a mapuje sa na `omniroute.ttft_ms`.

Atribúty zahŕňajú `gen_ai.operation.name="chat"`, poskytovateľa, požadovaný model/model odpovede,
vstupné/výstupné tokeny, voliteľné tokeny čítania z vyrovnávacej pamäte/vytvárania vyrovnávacej pamäte/uvažovania, stav HTTP,
combo, zdroj vyrovnávacej pamäte, značku relácie a korelačný identifikátor. Celočíselné hodnoty OTLP a časové pečiatky
sú desiatkové reťazce; reťazce, booleovské hodnoty a neceločíselné čísla používajú svoje natívne varianty hodnôt
OTLP. Chybové spany majú stav ERROR a sanitizovanú stavovú správu. Kanonický
záznam neobsahuje URL nadradeného hostiteľa, preto sa `server.address` vynecháva, aby sa kolektor nesprávne
neidentifikoval ako server modelu. Náklady sa neexportujú.

Obsah sa načítava iba pri `includeBodies=true`. Pri `langfuseMapping=false`
atribúty `gen_ai.input.messages` / `gen_ai.output.messages` obsahujú sanitizované telo požiadavky/odpovede
vo formáte JSON tak, ako ho ukladá OmniRoute (kanonizované, ak sa dá parsovať), nie pole správ
pretvorené podľa sémantických konvencií. Skrátené telá/telá mimo formátu JSON zostávajú obyčajným textom. Pri `langfuseMapping=true`
sa telá odosielajú iba ako `langfuse.observation.input` / `langfuse.observation.output`;
atribúty `gen_ai.*.messages` sa vynechávajú, takže každé telo sa odošle iba raz. Oba režimy
preberajú `maxBodyBytes` z existujúceho postupu načítavania obsahu;
`omniroute.bodies_truncated=true` označuje skrátenie.
Tento cieľ nepridáva žiadne ďalšie snímky spracovateľského reťazca ani čítanie nesanitizovaných artefaktov.
Pri exporte tiel používajte interval v rádoch minút, napríklad `OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`,
namiesto hromadenia hodinovej fronty nespracovaných záznamov.

Požiadavky sú obmedzené na 500 spanov a 4 MiB JSON vo formáte UTF-8 vrátane obálky.
Veľkosť každého povoleného spanu sa kontroluje pred prvou požiadavkou dávky kurzora. Ak jednotlivý
span prekročí limit, neodošle sa žiadna časť danej dávky a operácia zlyhá s odporúčaním znížiť
`maxBodyBytes`; span sa nezahodí bez upozornenia. Predbežná kontrola uchováva iba odkazy na záznamy a
počty bajtov, pričom každý dočasný span/JSON zahodí; spany sa znova zostavujú pre bloky s obmedzenou veľkosťou
namiesto uchovávania druhej serializovanej kópie dávky. Pri HTTP 408/429/5xx, zlyhaniach siete a prekročení časového limitu sa vykonajú najviac
tri pokusy s exponenciálnym oneskorením 250/500 ms. Hodnoty `Retry-After` v sekundách alebo vo forme dátumov HTTP
môžu predĺžiť oneskorenie až na 5 sekúnd. Ostatné stavové kódy spôsobia okamžité zlyhanie. Aj čiastočné odmietnutie OTLP 2xx vyvolá výnimku namiesto
potvrdenia strateného spanu; akceptujú sa prázdne potvrdenia alebo potvrdenia s platným JSON, pričom
čítanie odpovede je obmedzené na 64 KiB.

Chyby obsahujú iba údaje pochádzajúce z exportéra: stav HTTP, triedu opakovania, počet pokusov a počet odoslaných
spanov alebo pevne stanovené znenie chyby potvrdenia či siete. Telá odpovedí kolektora,
počty čiastočne úspešných položiek ani hlavičky odpovedí sa nikdy nekopírujú do chýb, protokolov ani na
prehľadový panel. Neúspešná alebo čiastočne prijatá dávka sa nepotvrdí: cieľ zobrazuje
stav Zlyháva s daným stavovým kódom, kurzor zostáva na poslednej potvrdenej dávke a ďalšie spustenie
znova odošle tie isté riadky. Trvalé stavové chyby budú naďalej spôsobovať zlyhanie, kým sa neopraví kolektor alebo konfigurácia.
Podrobnosti odpovedí nájdete vo vlastných protokoloch kolektora. Súhrny chýb v protokole volaní si zachovávajú
samostatné odstraňovanie citlivých údajov.
`prepare()` nič nezriaďuje; Test odošle presne `{"resourceSpans":[]}` a oznámi
stav HTTP bez zápisu spanov protokolu volaní.

Identifikátory trás a spanov sú prvých 32/16 hexadecimálnych číslic hodnoty SHA-256 vypočítanej z
`"omniroute.trace\\0" + callLogId` a `"omniroute.span\\0" + callLogId`. Pri opätovnom odoslaní majú
rovnaké identifikátory. To nezaručuje deduplikáciu: niektoré backendy vrátane príjmu dát Langfuse
v4 nededuplikujú spany s rovnakým identifikátorom. Pád alebo čiastočné zlyhanie bloku môže
spôsobiť opätovné odoslanie najviac jednej nepotvrdenej dávky kurzora; duplikovať sa môže celá táto dávka,
nielen jej posledný blok HTTP. Pri výbere veľkosti dávky kurzora zohľadnite tento kompromis.

### Príklad pre Langfuse

Pre inštanciu Langfuse na vlastnom hostingu nakonfigurujte tieto polia:

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

Hodnotu Authorization vytvorte lokálne zakódovaním doslovného reťazca `public-key:secret-key`
do Base64 (napríklad pomocou `Buffer.from(publicKey + ":" + secretKey).toString("base64")`).
Nevkladajte skutočné prihlasovacie údaje do protokolov, snímok obrazovky ani hlásení problémov. Mapovanie automaticky
nastaví `x-langfuse-ingestion-version: 4`; Authorization sa naďalej zadáva v `headers`.
Hlavičky aj vygenerovaná soľ identity používajú existujúci mechanizmus šifrovaných tajných polí
a zástupné hodnoty API; vyžaduje sa `STORAGE_ENCRYPTION_KEY`.

Mapovanie pridáva typ generovania/model, podrobnosti o využití v JSON (vstup/výstup/celkom a dostupné
kľúče vyrovnávacej pamäte), snímky vstupu/výstupu v JSON, úroveň ERROR/DEFAULT, očistenú stavovú správu,
názov trasy, identifikátor relácie, voliteľné prostredie a filtrovateľné
`langfuse.observation.metadata.<key>` pre poskytovateľa, požadovaný model, cestu, kombináciu, zdroj vyrovnávacej
pamäte a stav. `langfuse.observation.completion_start_time` má formát ISO 8601 a hodnotu
začiatok + TTFT iba vtedy, keď je TTFT známy a nepresahuje trvanie. Žiadne atribúty nákladov sa neodosielajú.

Režimy identity sa vzťahujú na `langfuse.user.id`:

- `pseudonymous` (predvolené): HMAC-SHA256 interného identifikátora kľúča API s náhodnou
  32-bajtovou soľou pre každý cieľ. Ak soľ chýba, vygeneruje sa pri vytvorení, zašifruje
  sa ako `identitySalt`, nikdy sa nevracia a pri úpravách sa zachováva. Pôvodné identifikátory kľúčov sa nikdy
  nevkladajú do atribútov spanov. Opätovné vytvorenie alebo rotácia soli cieľa zmení identity.
- `keyName`: nakonfigurovaný názov kľúča API, ktorý zámerne odhaľuje toto označenie operátora.
- `none`: bez identifikátora používateľa. Značky relácie sa naďalej exportujú, ak sú prítomné; tieto režimy
  neanonymizujú ľubovoľný obsah promptov ani označenia relácií/korelácií zadané operátorom.

### Spustenie bez spätného doplnenia

Iba pri vytváraní povoľte **Začať od aktuálnej pozície (preskočiť existujúce protokoly)** alebo odovzdajte
`startFromCurrentPosition: true` na najvyššej úrovni tela požiadavky API na vytvorenie. Tým sa inicializuje
`cursor_row_id` na aktuálnu maximálnu hodnotu rowid uchovávaných záznamov protokolu volaní pomocou existujúcich pomocných funkcií
kurzora, bez migrácie. Predvolená hodnota je false (kurzor 0 a spätné doplnenie uchovávanej histórie).
Nejde o nastavenie na resetovanie kurzora pri aktualizácii.

Spoločné doplnenie `ttftMs` pridáva aj stĺpec `ttft_ms`, ktorý povoľuje hodnotu null, do mapovača BigQuery
a schémy nových tabuliek: test schémy vyžaduje, aby každé pole kanonického záznamu malo
stĺpec. Existujúce tabuľky sa naďalej exportujú bez zmeny: `prepare()` načíta schému tabuľky a
vynechá iba `ttft_ms`, ak tento stĺpec chýba. Pridajte stĺpec INT64 povoľujúci hodnotu null, aby ste získali TTFT
pri ďalšom spustení, alebo použite novú tabuľku. Nevyžaduje sa PATCH, automatická úprava schémy ani dodatočné
oprávnenia; pri všetkých ostatných poliach riadkov zostáva zachovaná prísna kontrola schémy.

---

## 6. Pridanie cieľa

1. Vytvorte `src/lib/logExport/destinations/<name>.ts`, ktorý exportuje `LogExportDestinationType`:
   Zod `configSchema`, pole deskriptorov `fields` pre používateľské rozhranie, `secretFields` a
   `createClient(config)`, ktorý vracia `test()` / `prepare()` / `send(records)`.
2. Pridajte ho do poľa `DESTINATIONS` v `src/lib/logExport/registry.ts`.
3. Napíšte testy v `tests/unit/`.

To je celá zmena: ukladanie údajov, úloha cron, vrstva REST, šifrovanie tajných údajov aj
formulár na ovládacom paneli čítajú register.

Dve pravidlá pre nový cieľ:

- `send()` **musí vyhodiť výnimku** pri čiastočnom zlyhaní. Úspešné dokončenie znamená „cieľ má tieto riadky“
  a kurzor sa natrvalo posunie za ne.
- Cieľ, ktorý prijíma URL zadanú používateľom, ju musí pred načítaním overiť pomocou
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`),
  rovnako ako webhooky. BigQuery to nepotrebuje: jeho hostitelia sú konštanty.

---

## 7. Prevádzka

- **Ovládací panel**: Integrácie → Export protokolov. Pridajte cieľ, spustite **Test** na overenie prihlasovacích údajov
  bez zápisu riadkov a potom ho povoľte.
- **Čakajúce záznamy**: každá karta cieľa zobrazuje čakajúce riadky a kurzor; `GET
/api/log-export/status` vracia rovnaké údaje spolu s poslednými 20 spusteniami úlohy.
- **Zlyhanie jedného cieľa nespôsobí zlyhanie ostatných** — súhrn spustenia zaznamenáva stav jednotlivých cieľov
  v `last_status` / `last_error` a história spustení úlohy uchováva súhrnné údaje.
- **Odstránením cieľa sa odstráni aj jeho kurzor.** Po opätovnom pridaní sa začne od najstaršieho uchovaného
  protokolu volania, čím sa znova odošlú riadky, ktoré už cieľ môže obsahovať. V BigQuery hodnota
  `insertId` pre každý riadok zabráni duplicite iba v rámci vlastného deduplikačného okna BigQuery, preto cieľ radšej zakážte,
  než by ste ho odstránili.
