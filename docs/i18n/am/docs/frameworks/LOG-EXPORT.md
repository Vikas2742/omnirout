# Log export (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

የOmniRoute ጥሪ መዝገቦችን ወደ ውጫዊ የትንታኔ ማከማቻ ያለማቋረጥ፣ በጭማሪ መላክ።

የመዝገቦች ዳሽቦርድ ትር የጥያቄ ታሪክን በSQLite (`call_logs`) ውስጥ ያስቀምጣል፤ ይህም በማሽከርከርና
በማቆያ ጊዜ የተገደበ ነው። የመዝገብ ኤክስፖርት ተመሳሳይ የመዝገብ ስብስብን በጊዜ ሰሌዳ ወደ ውጭ ይልካል፤ ስለዚህ ከአካባቢያዊው
የውሂብ ጎታ በላይ ሊቆይና ከሌሎች ውሂቦች ጋር ሊጣመር ይችላል። BigQuery የመጀመሪያው መዳረሻ ነው፤
የሂደት መስመሩ በመዝገብ ሥርዓት ላይ የተመሠረተ ስለሆነ፣ ተጨማሪ መዳረሻዎችን በመጨመር ማስፋት ይቻላል።

---

## 1. እንዴት እንደሚሠራ

```
server (decrypt + validate config, reconcile cursor)
  → start IPC → isolated exportChild OS process
    → read-only storage.sqlite → shared call-log query/mapping
      → async artifact hydration → destination prepare()/send()
        → batch IPC → server persists cursor → ack IPC
          → next batch; done IPC → server records success
```

- **የጊዜ ሰሌዳ** — አንድ `JobRegistry` cron ሥራ፣ `log_export`፣ ነባሪው `0 * * * *` (በየሰዓቱ፣
  UTC) ነው። በ`src/lib/initCloudSync.ts` ይመዘገባል፤ በ`OMNIROUTE_LOG_EXPORT_CRON` መቀየር ይቻላል።
  በእያንዳንዱ የመነሻ ጊዜ **የነቁ** መዳረሻዎችን ሁሉ በተራ ያስተላልፋል።
- **ጠቋሚ** — የSQLite ስውር `call_logs.rowid` ሲሆን፣ ለእያንዳንዱ መዳረሻ በ
  `log_export_destinations.cursor_row_id` ውስጥ በቋሚነት ይቀመጣል። `timestamp` ሆን ተብሎ ጠቋሚ አልተደረገም፤ ጠሪዎች
  የራሳቸውን እሴት ሊያቀርቡ ስለሚችሉ፣ ዘገምተኛ ጥያቄ ከእሱ በኋላ ከጀመረ ፈጣን ጥያቄ በኋላ ሊጻፍ ይችላል፤
  የጊዜ ማህተም ጠቋሚ ደግሞ ያንን ይዘለዋል።
- **በቡድን ማስተላለፍ** — በእያንዳንዱ ጥያቄ `batch_size` ረድፎች (ነባሪ 500)፣ በእያንዳንዱ አሂድ `max_rows_per_run` ረድፎች
  (ነባሪ 10000)፤ ይህም ብዙ የተከማቸ ሥራ አንድን የመነሻ ጊዜ ከማገድ ይልቅ በብዙ የመነሻ ጊዜዎች እንዲተላለፍ ያደርጋል።
- **አቅርቦት** — ጠቋሚው ወደፊት የሚሄደው `send()` በተሳካ ሁኔታ ከተጠናቀቀ በኋላ ብቻ ነው። አንድ ቡድን ካልተሳካ፣
  ጠቋሚው ባለበት ይቆያል፤ ስለዚህ ተመሳሳይ ረድፎች በሚቀጥለው አሂድ እንደገና ይሞከራሉ። የሚሰጠው ዋስትና
  ቢያንስ አንድ ጊዜ ማድረስ እና በመዳረሻው በኩል ድግግሞሽን ማስወገድ ነው፣ በእርግጥ አንድ ጊዜ ብቻ ማድረስ አይደለም፤ BigQuery እያንዳንዱን
  ረድፍ በጥሪ መዝገብ መለያ ይለያል፣ ይህንም በራሱ የድግግሞሽ ማስወገጃ ጊዜ ወሰን ውስጥ በተቻለ መጠን ያከብራል።
- **የመደራረብ መከላከያ** — የcron መነሻ ጊዜ እና `POST .../run` በአንድ ጊዜ ሊነሱ ይችላሉ። ውሂብ
  እያስተላለፈ ያለ መዳረሻ ሁለት ጊዜ ከማስተላለፍ ይልቅ ይዘለላል (በአሂዱ ውጤት ውስጥ `skipped: true`)፣
  ስለዚህ በተመሳሳይ ጊዜ የሚካሄድ አሂድ ቡድንን እንደገና መላክ ወይም ጠቋሚውን ወደኋላ መጻፍ አይችልም።
- **ከማጽዳት በኋላ ማገገም** — `cursor_row_id` ከ`MAX(rowid)` በላይ ከሆነ (ሰንጠረዡ በሙሉ
  ተጸድቶ rowid እንደገና መቆጠር ከጀመረ)፣ አስኬጁ እስከመጨረሻው ምንም ማየት ከማቆም ይልቅ ወደ 0 ይመለሳል።

### የተለየ አስኬጅ እና ገደቦች

በNode ላይ የሚካሄድ እያንዳንዱ የመዳረሻ አሂድ የተለየ፣ አጭር ዕድሜ ያለው የOS ንዑስ ሂደት ይጀምራል (`child_process`
ከIPC ጋር፣ `worker_threads` አይደለም)። የይዘት ንባቦች፣ የሚላከው ውሂብ JSON ትንተና/ተከታታይ ቅርጸት መስጠት፣ የመዳረሻ
`prepare()` እና የመዳረሻ የአውታረ መረብ I/O ሁሉ በዚያ ይከናወናሉ፣ በአገልጋዩ የክስተት ዑደት ላይ አይደለም።
በIPC የሚያልፉት ውቅር እና አነስተኛ የሂደት መልዕክቶች ብቻ ናቸው፤ ወደ ውጭ የተላኩ መዝገቦች ወደ
አገልጋዩ አይመለሱም። የcron ሥራውና የ«አሁን አስኪድ» መስመሩ ተመሳሳይ ይፋዊ ውጤትና የመደራረብ መከላከያ ይዘው ይቀጥላሉ።

ንዑስ ሂደቱ በአገልጋዩ የተወሰነውን `DATA_DIR/storage.sqlite` በ`node:sqlite` አማካኝነት ለንባብ ብቻ ይከፍታል፣
ከ`busy_timeout=5000` እና `query_only=ON` ጋር። ምንም የDB ነጠላ አብነት አያስመጣም፣ እንዲሁም
ማዛወር፣ ምትኬ መሥራት ወይም የSQLite ማዘመን አያከናውንም። የጎደሉ/የተበላሹ የቅሪት ፋይሎች መዝገብ አያያዝ (የተበላሸ ቅሪት ፋይል
UPDATE ጨምሮ) በዳሽቦርዱ ዝርዝር መንገድ ውስጥ ብቻ ይቀራል። ሁለቱም መንገዶች ንጹህ የዝርዝር
ፈቺ ይጋራሉ፤ ኤክስፖርት ያልተመሳሰሉ የፋይል ሥርዓት ንባቦችን እና ተመሳሳይ የቅሪት ፋይል → የቆየ
ውስጠ-መስመር → የቆየ ዲስክ → ምንም የመፍቻ ቅደም ተከተል ይጠቀማል። ንዑስ ሂደቱ አንባቢውን ሲከፍት አሂዱ ከፍተኛውን የማስገቢያ rowid
ይመዘግባል፤ በኋላ የሚገቡ መዝገቦች ቀጣዩን አሂድ ይጠብቃሉ። ይህ የማስገቢያ
ወሰን እንጂ ለረጅም ጊዜ የሚቆይ የSQLite ግብይት አይደለም፤ አውታረ መረብ በሚጠበቅበት ጊዜ የWAL ጸሐፊዎችና የፍተሻ ነጥቦች ነጻ ይቀጥላሉ።
ነባር ረድፎችን ማዘመን/መሰረዝ በዚህ ወሰን አይታገድም።

እያንዳንዱ ቡድን ከተቀበለ በኋላ፣ ንዑስ ሂደቱ ማረጋገጫ ይጠብቃል። አገልጋዩ በመጀመሪያ
ጠቋሚውን በ`advanceLogExportCursor` በቋሚነት ያስቀምጣል፣ ከዚያ `ack` ይልካል፤ ከዚያ በፊት ቀጣዩ ቡድን አይጀምርም።
የመላክ አለመሳካት፣ ድንገተኛ መቋረጥ ወይም የጊዜ ማብቂያ የዚያን ቡድን ጠቋሚ ሳያራምድ ውድቀትን ይመዘግባል። ቀደም ሲል
የተረጋገጡ ቡድኖች ተቀምጠው ይቆያሉ፤ ቢበዛ አንዱ ያልተረጋገጠ ቡድን ብቻ እንደገና ሊላክ ይችላል።
ስኬት የሚመዘገበው `done` እና ንዑስ ሂደቱ ያለ ስህተት መውጣቱ ከተረጋገጡ በኋላ ብቻ ነው። ውድቀቶች ንዑስ ሂደቱን
በSIGTERM ያቋርጣሉ፣ ከ500 ms በኋላ ወደ SIGKILL ያሳድጋሉ፣ አስኬጁም ሂደቱ እስኪዘጋ ይጠብቃል።

| የአካባቢ ተለዋዋጭ                                   | ነባሪ    | ዓላማ                           |
| --------------------------------------------- | ------ | ----------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | ለእያንዳንዱ መዳረሻ የጠቅላላ ጊዜ ገደብ     |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | የንዑስ ሂደቱ V8 old-space ገደብ በMB |

ልክ ያልሆኑ/አዎንታዊ ያልሆኑ/ኢንቲጀር ያልሆኑ እሴቶች ነባሪዎቹን ይጠቀማሉ። የheap ቅንብሩ የጠቅላላ
RSS ገደብ አይደለም፤ በጣም ትላልቅ ቡድኖች አሁንም የንዑስ ሂደቱን ማህደረ ትውስታ ሊያሟጥጡና አሂዱን በደህና ሊያስወድቁ ይችላሉ።
የ1024 MB ነባሪ እሴት ይዘቶች ሲነቁ፣ የBigQuery በባይት ቁርጥራጮች የሚደረግ JSON ተከታታይ ቅርጸት መስጠትን
ጨምሮ፣ ለነባሪው 500 ረድፍ ያለው የ512 KiB ቅሪት ፋይሎች ቡድን ተጨማሪ ክፍተት ይተዋል። ይህ
10000 ረድፍ ያለውን ይዘቶች የያዘ ቡድን ደህንነቱ የተጠበቀ አያደርገውም። የV8 heap መሟጠጥ እርምጃ ሊወሰድበት የሚችል ውድቀት ይመዘግባል፤ የቡድኑን
መጠን ይቀንሱ ወይም `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` ያሳድጉ፤ ጠቋሚው በመጨረሻው
በተረጋገጠ ቡድን ላይ ይቆያል። የቆዩ ውስጠ-መስመር/ዲስክ ይዘቶች በዘመናዊው የቅሪት ፋይል ገደብ አይሸፈኑም።
አስተዳዳሪዎች ለRSS በተለየ መልኩ የማህደረ ትውስታ በጀት መመደብ አለባቸው፣ በተለይም በማህደረ ትውስታ የተገደቡ ኮንቴይነሮች ውስጥ።

ልጅ ሂደቱ የሚወርሰው የተወሰነውን `DATA_DIR`፣ `NODE_ENV`፣ በግልጽ የተቀመጠውን `TZ` (ለቆዩ የፋይል ስሞች
የአካባቢ ሰዓት አወሳሰን)፣ ካለ `ELECTRON_RUN_AS_NODE`፣ እና የሚከተሉትን የወጪ ግንኙነት ግብዓቶች ብቻ ነው፦
`HTTP_PROXY`፣ `HTTPS_PROXY`፣ `ALL_PROXY`፣ `NO_PROXY` (እና በትንንሽ ፊደላት የተጻፉ ቅጾቻቸው)፣
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`፣ `NODE_EXTRA_CA_CERTS`፣ `SSL_CERT_FILE`፣ `SSL_CERT_DIR`።
ዓለም አቀፍ የUndici አሰራጭ፣ `NO_PROXY`ን ጨምሮ፣ የአገልጋዩን በአካባቢ ተለዋዋጮች ብቻ የሚወሰን የፕሮክሲ አወሳሰን እና የአካባቢ አስተናጋጅ
ማለፊያ ደንቦች ይጋራል፤ `proxyFetch.ts`ን ወይም የእሱን የውሂብ ጎታ/ባህሪ መቆጣጠሪያዎች አያስገባም።
የፕሮክሲ ማረጋገጫ መረጃዎች ከሚተላለፈው ውጤት እና ከሚመዘገቡ ስህተቶች ይደበቃሉ። የመድረሻ ማረጋገጫ መረጃዎች
በአንድ የመነሻ IPC መልዕክት ብቻ ይተላለፋሉ፣ በargv ወይም በአካባቢ ተለዋዋጮች ፈጽሞ አይተላለፉም፤ የውጤት/ስህተት ማስተላለፍ
ቅድመ ቅጥያ ይጨመርበታል፣ እንዲሁም ይጣራል። በእያንዳንዱ የcron አሂድ የNode SQLite ማስጠንቀቂያ
እንዳይደገም፣ በልጅ ሂደቱ የማስፈጸሚያ አርግመንቶች ውስጥ `ExperimentalWarning` ብቻ ይሰናከላል፤ ሌሎች የማስጠንቀቂያ ዓይነቶች መታየታቸውን ይቀጥላሉ።

የመድረሻ ሞጁሎች ያለ Next.js/ለአገልጋይ ብቻ የሆኑ ጥገኞች ሊመጡ የሚችሉ መሆን አለባቸው። ያለው
የBigQuery ትግበራ ይህን ውል አስቀድሞ ያሟላል። የመዳረሻ ቶከን መሸጎጫዎች የሚቆዩት በልጅ ሂደቱ
አሂድ ውስጥ ብቻ ነው፣ ከአንድ አሂድ ወደ ሌላ አይቀጥሉም። Node የሚደገፈው የማስኬጃ አካባቢ ነው (`package.json` engines)፣ ነገር ግን በREADME ያለው የBun
መጫኛ ክፍል እና `Dockerfile.bun` እንዲሁም
`bun:sqlite`ን (`src/lib/db/core.ts` / አስማሚዎች) በመጠቀም ለምርት አካባቢ የሚስማማ መንገድ እንዳለ ያሳያሉ። ስለዚህ በBun ላይ ወደ ውጭ መላክ የቀድሞውን
በሂደቱ ውስጥ የሚሠራ መንገድ ይጠቀማል፣ እና የአንድ ጊዜ ማስጠንቀቂያ ያወጣል፦ የልጅ ሂደት የheap/የጊዜ ገደብ ማግለል አይገኝም። ለ
ክስተት ዙር እና ለOOM ማግለል Nodeን ይጠቀሙ፤ Bun እዚህ ለልማት ብቻ እንደሚውል አይቆጠርም።

`includeBodies` ሲነቃ፣ የአንድ ሰዓት ጭነት ክምችት ከማከማቸት ይልቅ
እንደ `OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` ያለ በደቂቃ ደረጃ የሆነ የአሂድ ድግግሞሽ ይምረጡ።
የቡድን እና የረድፍ ገደቦች እያንዳንዱን አሂድ መገደባቸውን ይቀጥላሉ። ለእያንዳንዱ መድረሻ በእያንዳንዱ አሂድ የሂደት ማስጀመሪያ ወጪ ይኖራል፤
ይህ ትንሽ የማስጀመሪያ ወጪን በመክፈል የአገልጋዩን የክስተት ዙር ማግለል ያስገኛል እንጂ አጠቃላይ የCPU አጠቃቀምን አይቀንስም።

### ጭነቶች (ጥያቄዎች እና ማሟያዎች)

በነባሪነት ወደ ውጭ የሚላከው የምዝግብ ማስታወሻዎች **ዝርዝር** የሚያሳየውን የማጠቃለያ መስኮች ብቻ ይይዛል።
**ጥያቄዎችን እና ምላሾችን ወደ ውጭ ላክ** (`includeBodies`) ማንቃት፣ ለእያንዳንዱ ጥሪ የምዝግብ ማስታወሻዎች **ዝርዝር መረጃ**
ክፍል የሚያሳየውን በተጨማሪ ይልካል፦

| መስክ                              | የሚይዘው                                               |
| -------------------------------- | --------------------------------------------------- |
| `request_body` / `response_body` | ዳሽቦርዱ እንደሚያሳያቸው ያሉ የጥሪ ጭነቶች                         |
| `pipeline_route_decision`        | መምሪያው የመረጠው ዒላማ እና ሞዴል                              |
| `pipeline_client_request`        | ደንበኛው እንደላከው ያለ ያልተቀየረ ጥያቄ                          |
| `pipeline_openai_request`        | ወደ ውስጣዊው የOpenAI ቅርጽ ከተቀየረ በኋላ                      |
| `pipeline_provider_request`      | በአቅራቢው ቅርጸት በእርግጥ ወደ አቅራቢው እንደተላከው                  |
| `pipeline_provider_response`     | ከአቅራቢው የመጣው ያልተቀየረ ምላሽ                              |
| `pipeline_client_response`       | ለጠሪው ተመልሶ የተሰጠው                                     |
| `pipeline_error`                 | ላልተሳካ ጥሪ በማቀነባበሪያ ሰንሰለት ደረጃ ያለ የስህተት ዝርዝር           |
| `bodies_truncated`               | ከላይ ካሉት መስኮች ማንኛውም `maxBodyBytes` ላይ ሲደርስ እውነት ይሆናል |

ይህ የጥያቄ ይዘት ስለሆነ፣ **በነባሪነት ጠፍቷል** እና ሆን ተብሎ ለእያንዳንዱ መድረሻ የሚመረጥ ነው።
ወደ ውጭ መላክ እና `getCallLogById` ተመሳሳይ የዝርዝር መረጃ
አወሳሰን ስለሚጋሩ፣ የሚላከው ዳሽቦርዱ የሚያሳየው ነው፦ ጭነቶች
በሚጻፉበት ጊዜ አስቀድመው ከግል መለያ መረጃ ተጣርተው ሚስጥራዊ መረጃዎችም ተደብቀዋል፣ እንዲሁም
በ`noLog` API ቁልፍ የተደረገ ጥሪ ምንም ጭነት አያከማችም፣ ስለዚህ ወደ ውጭ የሚላክ ምንም ነገር የለም።

ጭነቶች ከፋይል ስርዓቱ ቅርስ ለእያንዳንዱ ረድፍ ይነበባሉ፣ ስለዚህ ይዘትን መሙላት የሚከናወነው
ይህን ለጠየቁ መድረሻዎች ብቻ ነው። የጠፋ ወይም የተበላሸ ቅርስ፣ ቡድኑን ከማስቆም እና
ጠቋሚውን ከማስቀረት ይልቅ፣ ማጠቃለያውን ባዶ ጭነቶች ጋር ወደ ውጭ ይልካል።

`maxBodyBytes` (ነባሪው 262144) እያንዳንዱን መስክ ይገድባል። ረዘም ያሉ ጭነቶች **ከመጣል ይልቅ
ይቆረጣሉ** — የተቆረጠ ጥያቄም ቢሆን “ምን ተጠየቀ” የሚለውን ይመልሳል — እና ረድፉ በ
`bodies_truncated` ምልክት ይደረግበታል። በዥረት ቁራጭ በቁራጭ የሚመጡ ለውጦች ወደ ውጭ አይላኩም፤ የተገጣጠመው ምላሽ
ቀድሞውኑ በ`pipeline_provider_response` እና `pipeline_client_response` ውስጥ አለ።

---

## 2. ፋይሎች

| ክፍል              | መገኛ                                          |
| ---------------- | -------------------------------------------- |
| የመዳረሻ ውል         | `src/lib/logExport/types.ts`                 |
| መዝገብ             | `src/lib/logExport/registry.ts`              |
| የሚስጥር አያያዝ       | `src/lib/logExport/secrets.ts`               |
| አስኬጅ (የወላጅ IPC)  | `src/lib/logExport/runner.ts`                |
| የሂደት የሕይወት ዑደት   | `src/lib/logExport/childRunner.ts`           |
| የልጅ ሂደት መግቢያ     | `src/lib/logExport/exportChild.ts`           |
| ለንባብ ብቻ ከፋች      | `src/lib/db/logExportReadOnly.ts`            |
| የጋራ መጠይቅ/ማዛመድ    | `src/lib/usage/callLogExportQueries.ts`      |
| ዝርዝር ፈቺ          | `src/lib/usage/callLogDetailResolver.ts`     |
| የAPI ውሂብ ቅርጽ     | `src/lib/logExport/presenter.ts`             |
| የBigQuery መዳረሻ   | `src/lib/logExport/destinations/bigquery.ts` |
| የGoogle SA ማረጋገጫ | `src/lib/logExport/googleServiceAccount.ts`  |
| የጥሪ መዝገብ ምንጭ     | `src/lib/usage/callLogExportSource.ts`       |
| ቋሚ ማከማቻ          | `src/lib/db/logExportDestinations.ts`        |
| የCron ሥራ         | `src/lib/jobs/logExportJob.ts`               |
| የREST ንብርብር      | `src/app/api/log-export/`                    |
| የዳሽቦርድ ገጽ        | `src/app/(dashboard)/dashboard/log-export/`  |

መዋቅር: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

ሁሉም መስመሮች የአስተዳደር ማረጋገጫ ይፈልጋሉ (`requireManagementAuth`)። ሚስጥሮች ፈጽሞ አይመለሱም፦
የተከማቸ ሚስጥር እንደ ቀጥተኛው እሴት `__stored__` ይመለሳል፣ እና በማዘመን ጊዜ ያንን እሴት መልሶ መላክ
የተከማቸውን የመዳረሻ ማረጋገጫ ይጠብቃል።

ዓይነቱ ሚስጥር እንደሚኖረው የሚገልጽ መዳረሻ መፍጠር ወይም ማዘመን **`STORAGE_ENCRYPTION_KEY`
ያስፈልገዋል**። ይህ ከሌለ `encrypt()` ምንም ሳይቀይር በዝምታ ያሳልፋል፣ ስለዚህ የመዳረሻ ማረጋገጫን በSQLite ውስጥ ያለ ምስጠራ ከማስቀመጥ ይልቅ
የመጻፍ ጥያቄው በ400 ምላሽ ውድቅ ይደረጋል (የTelegram webhook
የሚጠቀምበት ተመሳሳይ ጥበቃ)።

| ዘዴ       | መንገድ                                     | ዓላማ                                            |
| -------- | ---------------------------------------- | ---------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | የመዳረሻ ዓይነቶች + የውቅር መስኮቻቸው ዝርዝር                 |
| `GET`    | `/api/log-export/destinations`           | መዳረሻዎችን መዘርዘር (ሚስጥሮች ተደብቀው)                    |
| `POST`   | `/api/log-export/destinations`           | መዳረሻ መፍጠር                                      |
| `GET`    | `/api/log-export/destinations/{id}`      | አንድ መዳረሻ ማንበብ                                  |
| `PUT`    | `/api/log-export/destinations/{id}`      | ስም / መንቃት / ውቅር / በቡድን ማቀናበርን ማዘመን             |
| `DELETE` | `/api/log-export/destinations/{id}`      | መሰረዝ                                           |
| `POST`   | `/api/log-export/destinations/{id}/test` | የመዳረሻ ማረጋገጫዎችን መፈተሽ፣ ምንም አለመጻፍ                 |
| `POST`   | `/api/log-export/destinations/{id}/run`  | አሁን የሚጠብቀውን ሁሉ ማስወጣት፣ ከታቀደው አሂድ ጋር በተመሳሳይ መንገድ |
| `GET`    | `/api/log-export/status`                 | የCron ሁኔታ፣ የቅርብ ጊዜ አሂዶች፣ በእያንዳንዱ ዒላማ የተጠራቀመ ሥራ |

`GET /api/log-export/types` የUI አጠቃላይ እንዲሆን የሚያደርገው ነው፦ የዳሽቦርዱ ቅጽ የሚታየው
ከተመለሱት የመስክ ገላጮች በመነሳት ስለሆነ፣ አዲስ መዳረሻ የUI ለውጥ አያስፈልገውም።

---

## 4. የBigQuery መድረሻ

የውቅረት ቁልፎች (`type: "bigquery"`):

| ቁልፍ                  | ማስታወሻዎች                                                       |
| -------------------- | ------------------------------------------------------------- |
| `projectId`          | የውሂብ ስብስቡን የያዘው የGCP ፕሮጀክት                                    |
| `datasetId`          | `[A-Za-z0-9_]+`                                               |
| `tableId`            | `[A-Za-z0-9_]+`                                               |
| `location`           | የውሂብ ስብስቡ መፈጠር ሲያስፈልግ ብቻ ይጠቀማል (ነባሪው `EU`)                    |
| `serviceAccountJson` | የአገልግሎት መለያ ቁልፍ። ሚስጥራዊ፦ በማከማቻ ላይ እያለ ይመሰጠራል፣ ፈጽሞ አይመለስም       |
| `autoCreate`         | በመጀመሪያው ወደ ውጭ ማውጣት ጊዜ የውሂብ ስብስቡን እና ሰንጠረዡን ይፍጠር (ነባሪው `true`) |

የአገልግሎት መለያው በዒላማው ሰንጠረዥ ላይ `bigquery.tables.updateData` ያስፈልገዋል፤ በተጨማሪም
`autoCreate` ሲበራ `bigquery.datasets.create` / `bigquery.tables.create` ያስፈልጉታል።

የተዋቀረ ጥቅል የ**ጠቋሚ** ክፍል እንጂ የHTTP ክፍል አይደለም፦ `send()` እያንዳንዳቸው ቢበዛ 500 ረድፎች ወደሚይዙ የinsertAll
ጥሪዎች ይከፋፍለዋል፤ ስለዚህ ትልቅ `batch_size` የBigQueryን 10 MB የጥያቄ ገደብ ሊያልፍ አይችልም።
ጊዜያዊ ሁኔታዎች (408/429/500/502/503/504) ተመሳሳይ insertIdsን እንደገና በመጠቀም፣ በኤክስፖነንሻል እየጨመረ
በሚሄድ የመጠበቂያ ጊዜ እስከ ሦስት ጊዜ እንደገና ይሞከራሉ፤ የማረጋገጫ እና የመዋቅር ስህተቶች ግን ሂደቱን በከንቱ ከመቀጠል ይልቅ
በመጀመሪያው ሙከራ ላይ ስህተት ያስነሳሉ።

ከጥቂት ጊዜ በፊት የተፈጠረ ሰንጠረዥ ለዥረት ማስገቢያው የመጨረሻ ነጥብ ገና አይታይም፤ ይህም
ለጥቂት ሰከንዶች 404 ይመልሳል። ያ 404 እንደገና ይሞከራል፣ ነገር ግን **ሰንጠረዡን የፈጠረው ይህ አፈጻጸም ሲሆን ብቻ** —
በእውነት የሌለ ሰንጠረዥ ግን አሁንም ወዲያውኑ ይከሽፋል። በቅርቡ በተሰረዘ ስም ሰንጠረዥን
እንደገና መፍጠር BigQuery የዥረት ማስገባቶችን ለብዙ ደቂቃዎች እንዲከለክል እንደሚያደርግ ልብ ይበሉ፤ ይህ
ሰርዞ እንደገና የመፍጠር ባህሪ ስለሆነ፣ ሰንጠረዥን ከመሰረዝ እና እንደገና ከመጨመር ይልቅ አዲስ የሰንጠረዥ ስም ይጠቀሙ።

**ከፊል ውድቀት ባዶ ካልሆነ `insertErrors[]` ጋር እንደ HTTP 200 ይመጣል።** ይህ እንደ
ውድቀት ተቆጥሮ ስህተት ያስነሳል፤ ይህም ጠቋሚው BigQuery ፈጽሞ ካልተቀበላቸው ረድፎች አልፎ
እንዳይሄድ የሚያቆመው ነው፤ `tests/unit/log-export-bigquery.test.ts` ይህን ባህሪ በሙከራ ያረጋግጣል።

የመረጃ ማስተላለፉ ቀጥተኛ REST ነው — በራሱ የተፈረመ RS256 ማረጋገጫ በ
`https://oauth2.googleapis.com/token` ላይ በመዳረሻ ቶከን ይለወጣል፣ ከዚያም ረድፎች ወደ `tabledata.insertAll` ይላካሉ። ምንም የGoogle SDK
አይጨመርም። የመዳረሻ ቶከኖች በእያንዳንዱ (የአገልግሎት መለያ፣ የፈቃድ ወሰን) ጥምረት በሂደቱ ውስጥ በመሸጎጫ ይቀመጣሉ።

የተፈጠረው ሰንጠረዥ ለእያንዳንዱ የምዝግብ ማስታወሻዎች ትር መስክ አንድ ዓምድ እና `exported_at` ይይዛል፤ አቀማመጡም
የጥሪ ምዝግብ ማስታወሻዎች በተግባር እንዴት እንደሚጠየቁ የተመሠረተ ነው፦

- **በ`timestamp` ላይ በቀን የተከፋፈለ ነው**፣ ስለዚህ በቀን የተገደበ መጠይቅ እነዚያን ቀናት ብቻ ይቃኛል።
- **በ`api_key_name`, `provider`, `model`, `status` የተመደበ ነው** (በዚህ ቅደም ተከተል)፣ ስለዚህ ማን
  እንዳስኬደው፣ ወዴት እንደሄደ ወይም መክሸፉን በመመርኮዝ ማጣራት በእያንዳንዱ ክፍፍል ውስጥ የሚቃኙ ብሎኮችን ይቀንሳል። BigQuery
  ቢበዛ አራት የመመደቢያ ዓምዶችን ይፈቅዳል፣ ቅደም ተከተሉም ወሳኝ ነው፦ በ`api_key_name` ብቻ የሚደረግ ማጣራት
  የሚቃኙ ብሎኮችን ይቀንሳል፣ በ`status` ብቻ የሚደረግ ማጣራት ግን አይቀንስም።
- በ`partitionExpirationDays` አማካይነት **አማራጭ የክፍፍል ማቆያ ጊዜ** (0 ሁሉንም ያቆያል)፣
  ሰንጠረዡ ሲፈጠር ተግባራዊ ይሆናል።

ሁለቱም ቅንብሮች በመፍጠር ጊዜ ተግባራዊ ይሆናሉ። ያለ ሰንጠረዥ ቀድሞ የነበረውን አቀማመጥ ይዞ ይቀጥላል፣ ስለዚህ
እነዚህን መጠቀም ከፈለጉ መድረሻውን ወደ አዲስ የሰንጠረዥ መለያ ያመልክቱ።

`tests/unit/log-export-bigquery.test.ts` አዛማጁ እና የሰንጠረዡ መዋቅር ተመሳስለው መቀጠላቸውን
ያረጋግጣል፣ ስለዚህ አዲስ የጥሪ ምዝግብ ማስታወሻ ዓምድ ወደ ውጭ በማውጣት ሂደት ሳይታወቅ ሊቀር አይችልም።

ጥቅሎች **በሁለቱም**፣ በረድፍ ብዛት እና በተከታታይ ቅርጽ በተቀየሩ ባይቶች መጠን ይከፋፈላሉ። የውሂብ ይዘቶች ወደ ውጭ ሲወጡ
የረድፍ ብዛት ብቻውን በቂ አይደለም፦ የግቤት መመሪያዎችን የያዙ 500 ረድፎች አስርተ ሜጋባይቶች ሊሆኑ ይችላሉ፣ insertAllም
ከ10 MB በላይ የሆነ ጥያቄን አይቀበልም። ክፍሎች 500 ረድፎች ወይም 9 MB ሲደርሱ፣ ቀድሞ በደረሰው መሠረት ይዘጋሉ።

---

## 5. የOTLP/HTTP መከታተያዎች መዳረሻ

ውቅሩ `type: "otlp-http"` ይጠቀማል። ይህ በመርሐ ግብር የሚሰራ፣ በጠቋሚ የሚደገፍ የተቀመጡ
የጥሪ ምዝግቦች ወደ ውጭ መላኪያ ነው፤ በ
`open-sse/services/routing/otel.ts` ያለው በተቻለ መጠን የሚሰራ የቀጥታ ማዘዋወር ክስተቶች መቀበያ አይደለም። የዚያን መቀበያ የአካባቢ
ተለዋዋጮች፣ ጊዜ ቆጣሪዎች ወይም ቋቶች አያነብም ወይም አይለውጥም። ሁለቱንም ማንቃት ሁለት ገለልተኛ የስፓን ዓይነቶችን ሊፈጥር ይችላል፤
እነዚህን የጥሪ ምዝግብ ስፓኖች ለመለየት የ`omniroute.log-export` የመለኪያ ወሰንን ይጠቀሙ።

| ቁልፍ               | ነባሪ / ዓላማ                                                |
| ----------------- | -------------------------------------------------------- |
| `endpoint`        | ሙሉ የHTTP(S) መከታተያዎች URL ያስፈልጋል፤ የ`/v1/traces` ቅጥያ አይጨመርም |
| `headers`         | አማራጭ የ`Name: value` መስመሮች ወይም የሕብረቁምፊዎች JSON ነገር፤ የተመሰጠረ |
| `serviceName`     | `omniroute`፤ የሀብት መለያ `service.name`                     |
| `langfuseMapping` | `false`፤ የLangfuse ማመንጨት/ክፍለ ጊዜ/ተጠቃሚ ባህሪያትን ይጨምራል        |
| `identity`        | `pseudonymous`፣ `keyName`፣ ወይም `none`                    |
| `paths`           | `/v1/chat/completions`፣ `/v1/responses`፣ `/v1/messages`  |
| `timeoutMs`       | ለእያንዳንዱ የHTTP ሙከራ `30000`                                |
| `environment`     | አልተዋቀረም፤ አማራጭ `langfuse.environment`                     |

አጠቃላይ ዳሽቦርዱ እነዚህን መስኮች ያሳያል። `paths` የAPI ድርድር ወይም ትክክለኛ ዱካዎች
በአዲስ መስመሮች/በነጠላ ሰረዞች የተለዩበትን የጽሑፍ ቦታ ይቀበላል። Embeddings፣ rerank እና ሌሎች ዱካዎች
በግልጽ ካልተፈቀዱ በስተቀር ይዘለላሉ። የተዘለሉ ረድፎችም ጠቋሚውን ወደፊት ያንቀሳቅሳሉ፤ የነባሩ
አስኬጅ `exported`/`exportedTotal` ቆጣሪዎች የተቀበሉ ስፓኖችን ሳይሆን፣ ተጣርተው የተወገዱ
ረድፎችን ጨምሮ የተሰሩ የምንጭ ረድፎችን ይቆጥራሉ። ማጣራት በልጅ ሂደቱ ውስጥ፣
የIPC/ጠቋሚ ውሉን ሳይቀይር ይከናወናል።

የURL ማረጋገጥ ከ
`src/shared/network/outboundUrlGuard.ts` የመጣውን፣ DB የማይጠቀም `parseAndValidateNonMetadataUrl` አጋዥ ይጠቀማል፤ ይህም የ`block-metadata` መመሪያ ነው። የግል URLዎች
እንዲፈቀዱ ከተዋቀረው የwebhook አረጋጋጭ ጋር ተመሳሳይ ያለ ቅድመ ሁኔታ የሜታዳታ/ፕሮቶኮል/በውስጥ የተካተቱ የመግቢያ መረጃዎች ፍተሻዎች አሉት፤
ነገር ግን ዓለም አቀፍ የባህሪ ማንቂያ መሻር ሳያስፈልግ localhost/LAN ዒላማዎችን ሆን ብሎ ይፈቅዳል። ይህ በራስ የሚስተናገዱ Langfuse፣ Phoenix፣ Tempo እና Collector
መጨረሻ ነጥቦችን፣ የግል HTTP መጨረሻ ነጥቦችንም ጨምሮ ይፈቅዳል። የደመና ሜታዳታ አስተናጋጆች ሁልጊዜ ይታገዳሉ።
ማዞሪያዎች አይከተሉም፤ ስለዚህ ሰብሳቢው የመግቢያ መረጃዎችን ወደ ሌላ አስተናጋጅ ማዞር አይችልም።
እንደ ነባሩ በጽሑፍ ቅርጽ ላይ የተመሰረተ የURL ጠባቂ፣ ይህም የDNS መፍታትን አያስቀምጥም፤ በኦፕሬተሩ ቁጥጥር ስር ያሉ አስተናጋጆችን ብቻ
ያዋቅሩ። መጨረሻ ነጥቡ በታመነ አውታረ መረብ ላይ በማይሆንበት ጊዜ ሁሉ HTTPSን ይምረጡ።

### የውሂብ ጭነት እና ማድረስ

OTLP/HTTP JSON (`ExportTraceServiceRequest`, `Content-Type: application/json`) ለእያንዳንዱ
የተፈቀደ ረድፍ፣ በትክክለኛው የጥያቄ ዱካ የተሰየመ አንድ CLIENT ስፓን ይይዛል። በዱካ መሰየም
የሞዴል ወይም የማንነት ውሂብን በስፓኑ ስም ውስጥ ሳያካትት Chat Completions፣ Responses እና Messagesን
ይለያል። የሀብት ባህሪያት `service.name` እና የፓኬጁን `service.version` ያካትታሉ።

መደበኛው የቻት ሙከራ መመዝገቢያ (`open-sse/handlers/chatCore/attemptLogging.ts`)
ሲጠናቀቅ `duration = Date.now() - startTime` ይጽፋል፣ የጊዜ ማህተም ግን አያቀርብም፤
በ`src/lib/usage/callLogs.ts` ያለው `saveCallLogOperation` የጊዜ ማህተሙን በነባሪነት ወደ መጻፍ
(መጠናቀቅ) ጊዜ ያዋቅራል። ስለዚህ ወደ ውጭ መላክ መጨረሻ = የረድፍ ጊዜ ማህተም እና መጀመሪያ = መጨረሻ − ቆይታ
(ሚሊሰከንዶች፣ ወደ አስርዮሽ ናኖሰከንዶች የተቀየሩ) እንዲሆን ያደርጋል። በጠሪው የቀረቡ ታሪካዊ የጊዜ ማህተሞችም
እንደ መጨረሻ ጊዜ ይጠበቃሉ፤ ለእያንዳንዱ ረድፍ የመጀመሪያ/መጠናቀቅ መለያ የለም።
ባዶ ቆይታ ዜሮ ይሆናል። የማይሰሩ/የጎደሉ የጊዜ ማህተሞች ያልተወሰኑ ስፓኖችን ከመፍጠር ይልቅ
የስብስቡን ሂደት እንዲከሽፍ ያደርጋሉ። `ttftMs` ባዶ ሊሆን ይችላል፣ እና ወደ `omniroute.ttft_ms` ይመደባል።

ባህሪያት `gen_ai.operation.name="chat"`፣ አቅራቢ፣ የተጠየቀ/የምላሽ ሞዴል፣
የግቤት/ውጤት ቶከኖች፣ አማራጭ የመሸጎጫ ንባብ/የመሸጎጫ ፍጠር/የማመዛዘን ቶከኖች፣ የHTTP ሁኔታ፣
ጥምረት፣ የመሸጎጫ ምንጭ፣ የክፍለ ጊዜ መለያ እና የትስስር መለያ ያካትታሉ። የኢንቲጀር OTLP እሴቶች እና የጊዜ ማህተሞች
አስርዮሽ ሕብረቁምፊዎች ናቸው፤ ሕብረቁምፊዎች፣ ቡሊያኖች እና ክፍልፋይ ቁጥሮች የራሳቸውን ተወላጅ የOTLP እሴት
ዓይነቶች ይጠቀማሉ። የስህተት ስፓኖች ERROR ሁኔታ እና የተጣራ የሁኔታ መልዕክት አላቸው። ዋናው
መዝገብ የላይኛው አስተናጋጅ URL የለውም፤ ስለዚህ ሰብሳቢውን እንደ ሞዴል አገልጋይ በስህተት
ከመለየት ይልቅ `server.address` ይቀራል። ወጪ ወደ ውጭ አይላክም።

ይዘትን የሚጭነው `includeBodies=true` ብቻ ነው። `langfuseMapping=false` ሲሆን፣
`gen_ai.input.messages` / `gen_ai.output.messages` እንደገና የተቀረጸ የsemconv
መልዕክቶች ድርድር ሳይሆን፣ OmniRoute እንዳስቀመጠው የተጣራውን የጥያቄ/ምላሽ አካል
JSON (ሊተነተን ሲችል መደበኛ ቅርጽ የተሰጠውን) ይይዛሉ። የተቆረጡ/JSON ያልሆኑ አካሎች እንደ ጥሬ ጽሑፍ ይቀራሉ። `langfuseMapping=true` ሲሆን፣
አካሎች እንደ `langfuse.observation.input` / `langfuse.observation.output` ብቻ ይላካሉ፤
እያንዳንዱ አካል አንድ ጊዜ ብቻ እንዲላክ የ`gen_ai.*.messages` ባህሪያት ይቀራሉ። ሁለቱም ሁነታዎች
ከነባሩ የይዘት መጫኛ ሂደት `maxBodyBytes`ን ይወርሳሉ፤
`omniroute.bodies_truncated=true` መቆረጥን ያመለክታል።
ይህ መዳረሻ ተጨማሪ የፓይፕላይን ቅጽበታዊ ቅጂዎችን ወይም ያልተጣሩ የአርቲፋክት ንባቦችን አይጨምርም።
አካሎችን ወደ ውጭ ሲልኩ፣ በየሰዓቱ የሚሰራ ያልተላከ ክምችት ከማከማቸት ይልቅ
እንደ `OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` ያለ በደቂቃ ደረጃ የሚደጋገም መርሐ ግብር ይጠቀሙ።

ጥያቄዎች የመልዕክቱን መጠቅለያ ጨምሮ በ500 spans እና በ4 MiB UTF-8 JSON የተገደቡ ናቸው።
የcursor ባች የመጀመሪያ ጥያቄ ከመላኩ በፊት የእያንዳንዱ የተፈቀደ span መጠን ይፈተሻል። አንድ
span ከገደቡ በላይ ከሆነ፣ ከዚያ ባች ምንም ክፍል አይላክም፤ `maxBodyBytes`ን
እንዲቀንሱ መመሪያ በመስጠት ይከሽፋል፤ በዝምታ አይተውም። የቅድመ ፍተሻው ሂደት የመዝገብ ማጣቀሻዎችን እና
የባይት ብዛቶችን ብቻ ያቆያል፣ እያንዳንዱን ጊዜያዊ span/JSON ያስወግዳል፤ የባቹን ሁለተኛ ተከታታይ ቅጂ
ከማቆየት ይልቅ spans በተገደበ መጠን ላሉ ቁርጥራጮች እንደገና ይገነባሉ። HTTP 408/429/5xx፣ የአውታረ መረብ ብልሽቶች እና የጊዜ ገደብ ማለፎች ቢበዛ
ሦስት ሙከራዎች ያገኛሉ፣ በ250/500 ms እየጨመረ በሚሄድ የመጠበቂያ ጊዜ። `Retry-After` በሰከንዶች ወይም በHTTP ቀኖች
መዘግየቱን እስከ 5 ሰከንዶች ሊያራዝም ይችላል። ሌሎች የሁኔታ ኮዶች ወዲያውኑ ያስከሽፋሉ። OTLP 2xx ከፊል እምቢታም
የጠፋ span ተቀባይነት ከማረጋገጥ ይልቅ ስህተት ያስነሳል፤ ባዶ ወይም ትክክለኛ JSON ማረጋገጫዎች ይቀበላሉ፣
የምላሽ ንባብ ገደቡም 64 KiB ነው።

ስህተቶች ወደ ውጭ ላኪው የራሱ የሆኑ እውነታዎችን ብቻ ይይዛሉ፦ የHTTP ሁኔታ፣ የድጋሚ ሙከራ ክፍል፣ የሙከራዎች እና የተላኩ span
ብዛቶች፣ ወይም ቋሚ የማረጋገጫ/የአውታረ መረብ ብልሽት መግለጫዎች። የcollector ምላሽ አካላት፣
ከፊል ስኬት ብዛቶች እና የምላሽ ራስጌዎች በፍጹም ወደ ስህተቶች፣ ምዝግቦች ወይም
ዳሽቦርዱ አይቀዱም። የከሸፈ ወይም በከፊል የተቀበለ ባች አይረጋገጥም፦ መዳረሻው
በዚያ ሁኔታ በመክሸፍ ላይ መሆኑን ያሳያል፣ cursor በመጨረሻ በተረጋገጠው ባች ላይ ይቆያል፣ ቀጣዩ አፈጻጸምም
ተመሳሳይ ረድፎችን እንደገና ይልካል። ቋሚ የሁኔታ ኮዶች collector ወይም ውቅሩ
እስኪስተካከል ድረስ መክሸፋቸውን ይቀጥላሉ። ለምላሽ ዝርዝሮች የcollectorን የራሱን ምዝግቦች ይጠቀሙ። የጥሪ መዝገብ ስህተት ማጠቃለያዎች
የተለየ የስውር መረጃ ማስወገጃ አሰራራቸውን ይቀጥላሉ።
`prepare()` ምንም አያዘጋጅም፤ ሙከራ በትክክል `{"resourceSpans":[]}`ን ይልካል እና
የጥሪ መዝገብ spans ሳይጽፍ የHTTP ሁኔታን ያሳውቃል።

የtrace መለያዎች እና የspan መለያዎች በቅደም ተከተል በ
`"omniroute.trace\\0" + callLogId` እና `"omniroute.span\\0" + callLogId` ላይ የSHA-256 የመጀመሪያዎቹ 32/16 የሄክሳዴሲማል አሃዞች ናቸው። ድጋሚ ላኪዎች
ተመሳሳይ መለያዎችን ይይዛሉ። ይህ ድግግሞሽን የማስወገድ ዋስትና አይደለም፦ Langfuse
v4 ingestionን ጨምሮ አንዳንድ የጀርባ ስርዓቶች ተመሳሳይ መለያ ያላቸውን spans አያጣሩም። የስርዓት መቋረጥ ወይም የከፊል ቁርጥራጭ ውድቀት
ቢበዛ አንዱን ያልተረጋገጠ የcursor ባች እንደገና ሊልክ ይችላል፤ የመጨረሻው HTTP ቁርጥራጭ ብቻ ሳይሆን
ያ ሙሉ ባች ሊደገም ይችላል። ይህን ልውውጥ ከግምት ውስጥ በማስገባት የcursor ባች መጠኑን ይምረጡ።

### የLangfuse ምሳሌ

በራስዎ ለሚያስተናግዱት Langfuse እነዚህን መስኮች ያዋቅሩ፦

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

የAuthorization እሴቱን በአካባቢዎ የ`public-key:secret-key` ቀጥተኛ ሕብረቁምፊ Base64 አድርገው
ይገንቡ (ለምሳሌ በ`Buffer.from(publicKey + ":" + secretKey).toString("base64")`)።
እውነተኛ የመግቢያ መረጃዎችን በምዝግቦች፣ በስክሪን ቅጂዎች ወይም በችግር ሪፖርቶች ውስጥ አይለጥፉ። ማዛመጃው በራስ-ሰር
`x-langfuse-ingestion-version: 4`ን ያዘጋጃል፤ Authorization አሁንም በ`headers` ውስጥ ይሰጣል።
ሁለቱም ራስጌዎች እና የሚፈጠረው የማንነት salt ነባሩን የተመሰጠረ ሚስጥር-መስክ
ዘዴ እና የAPI ቦታ ያዥዎች ይጠቀማሉ፤ `STORAGE_ENCRYPTION_KEY` ያስፈልጋል።

ማዛመጃው የማመንጨት ዓይነት/ሞዴል፣ የJSON አጠቃቀም ዝርዝሮች (ግቤት/ውጤት/ድምር እና ያሉ
የcache ቁልፎች)፣ የJSON ግቤት/ውጤት ቅጽበታዊ ቅጂዎች፣ የERROR/DEFAULT ደረጃ፣ የጸዳ የሁኔታ መልዕክት፣
የtrace ስም፣ የክፍለ ጊዜ መለያ፣ አማራጭ አካባቢ እና ለአቅራቢ፣ ለተጠየቀው ሞዴል፣ ለመንገድ፣ ለጥምረት፣ ለcache
ምንጭ እና ለሁኔታ ማጣሪያ ሊደረግበት የሚችል
`langfuse.observation.metadata.<key>` ይጨምራል። `langfuse.observation.completion_start_time` የISO 8601 እሴት ሲሆን
መጀመሪያ + TTFT ይሆናል፣ TTFT ሲታወቅ እና በቆይታው ውስጥ ሲሆን ብቻ። ምንም የወጪ ባህሪያት አይላኩም።

የማንነት ሁነታዎች በ`langfuse.user.id` ላይ ተፈጻሚ ናቸው፦

- `pseudonymous` (ነባሪ)፦ በእያንዳንዱ መዳረሻ የዘፈቀደ
  32-ባይት salt የAPI ቁልፉ ውስጣዊ መለያ HMAC-SHA256። salt ከሌለ በፍጠር ጊዜ ይመነጫል፣
  እንደ `identitySalt` ይመሰጠራል፣ ፈጽሞ አይመለስም፣ በአርትዖት ጊዜም ይቆያል። ጥሬ የቁልፍ መለያዎች ፈጽሞ
  በspan ባህሪያት ውስጥ አይገቡም። የመዳረሻን salt እንደገና መፍጠር/መቀየር ማንነቶችን ይቀይራል።
- `keyName`፦ የተዋቀረው የAPI ቁልፍ ስም፣ ያንን የአስተዳዳሪ መለያ ሆን ብሎ ያሳያል።
- `none`፦ የተጠቃሚ መለያ የለም። የክፍለ ጊዜ መለያዎች ሲኖሩ አሁንም ወደ ውጭ ይላካሉ፤ እነዚህ ሁነታዎች
  የዘፈቀደ የጥያቄ ይዘትን ወይም በአስተዳዳሪ የተሰጡ የክፍለ ጊዜ/የግንኙነት መለያዎችን ማንነት አልባ አያደርጉም።

### ያለ የቀድሞ መረጃ መሙላት መጀመር

በመፍጠር ጊዜ ብቻ፣ **ከአሁኑ ቦታ ጀምር (ነባር ምዝግቦችን ዝለል)**ን ያንቁ ወይም
`startFromCurrentPosition: true`ን በመፍጠሪያ API ጭነት የላይኛው ደረጃ ላይ ያስተላልፉ። ነባሮቹን የcursor
አጋዥዎች በመጠቀም፣ ያለ ፍልሰት፣ `cursor_row_id`ን አሁን ተይዞ ወዳለው ከፍተኛው የጥሪ መዝገብ rowid
ያስጀምራል። ነባሪው false ነው (cursor 0 እና የተያዘ ታሪክን መልሶ መሙላት)።
ይህ በማዘመን ጊዜ cursorን የማስጀመሪያ ቅንብር አይደለም።

የጋራው `ttftMs` ጭማሪ እንዲሁም ባዶ ሊሆን የሚችል `ttft_ms` አምድ ወደ BigQuery ማዛመጃ
እና የአዲስ ሰንጠረዥ መዋቅር ይጨምራል፦ የመዋቅር ፈተናው እያንዳንዱ መደበኛ የመዝገብ መስክ
አምድ እንዲኖረው ይጠይቃል። ነባር ሰንጠረዦች ያለ ለውጥ መላካቸውን ይቀጥላሉ፦ `prepare()` የሰንጠረዡን መዋቅር ያነባል እና
ያ አምድ በሌለበት ጊዜ `ttft_ms`ን ብቻ ይተዋል። በቀጣዩ አፈጻጸም TTFT
ለማግኘት ባዶ ሊሆን የሚችል INT64 አምድ ይጨምሩ፣ ወይም አዲስ ሰንጠረዥ ይጠቀሙ። PATCH፣ ራስ-ሰር የመዋቅር ለውጥ ወይም ተጨማሪ
ፈቃዶች አያስፈልጉም፤ ሁሉም ሌሎች የረድፍ መስኮች ጥብቅ የመዋቅር ፍተሻቸውን ይቀጥላሉ።

---

## 6. መዳረሻ ማከል

1. `LogExportDestinationType` ወደ ውጭ የሚያቀርብ `src/lib/logExport/destinations/<name>.ts` ይፍጠሩ፦
   የZod `configSchema`፣ ለተጠቃሚ በይነገጹ የ`fields` ገላጭ ድርድር፣ `secretFields`፣ እና
   `test()` / `prepare()` / `send(records)` የሚመልስ `createClient(config)`።
2. በ`src/lib/logExport/registry.ts` ውስጥ ወዳለው `DESTINATIONS` ድርድር ያክሉት።
3. በ`tests/unit/` ስር ሙከራዎችን ይጻፉ።

ለውጡ ይህ ብቻ ነው፦ ቋሚ ማከማቻው፣ የcron ሥራው፣ የREST ንብርብሩ፣ የሚስጥር መረጃ ምስጠራው እና
የዳሽቦርዱ ቅጽ ሁሉም ከመዝገቡ ያነባሉ።

ለአዲስ መዳረሻ ሁለት ደንቦች አሉ፦

- `send()` ከፊል አለመሳካት ሲከሰት **ስህተት መወርወር አለበት**። በስኬት መጠናቀቅ ማለት «መዳረሻው እነዚህ ረድፎች አሉት» ማለት ነው፣
  እና ጠቋሚው እነሱን አልፎ በቋሚነት ወደፊት ይሄዳል።
- በተጠቃሚ የቀረበ URL የሚቀበል መዳረሻ፣ መረጃ ከማምጣቱ በፊት
  ልክ እንደ webhooks፣ በ`parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) አማካይነት ማረጋገጥ አለበት።
  BigQuery ይህን አያስፈልገውም፦ አስተናጋጆቹ ቋሚዎች ናቸው።

---

## 7. ማስኬድ

- **ዳሽቦርድ**፦ ውህደቶች → የምዝግብ ወደ ውጭ መላክ። መዳረሻ ያክሉ፣ ረድፎችን ሳይጽፉ የመግቢያ ማረጋገጫ መረጃዎችን ለማጣራት **ሙከራ**ን ያስኪዱ፣
  ከዚያም ያንቁት።
- **በመጠባበቅ ላይ ያለ ክምችት**፦ እያንዳንዱ የመዳረሻ ካርድ በመጠባበቅ ላይ ያሉ ረድፎችን እና ጠቋሚውን ያሳያል፤ `GET
/api/log-export/status` እነዚሁኑ አሃዞች ከመጨረሻዎቹ 20 የሥራ ሂደቶች ጋር ይመልሳል።
- **የአንድ መዳረሻ አለመሳካት ሌሎቹን አያስከሽፍም** — የሂደቱ ማጠቃለያ የእያንዳንዱን መዳረሻ
  ሁኔታ በ`last_status` / `last_error` ውስጥ ይመዘግባል፣ የሥራ ሂደት ታሪኩም አጠቃላይ ውጤቱን ይይዛል።
- **መዳረሻን መሰረዝ ጠቋሚውንም ይሰርዛል።** እንደገና ማከል ከተያዘው እጅግ አሮጌ
  የጥሪ ምዝግብ ይጀምራል፤ ይህም መዳረሻው አስቀድሞ የያዛቸውን ረድፎች እንደገና ይልካል። በBigQuery ላይ የእያንዳንዱ ረድፍ
  `insertId` ይህን ድግግሞሽ የሚያስወግደው በBigQuery የራሱ ድግግሞሽ ማስወገጃ የጊዜ ገደብ ውስጥ ብቻ ነው፤ ስለዚህ
  መዳረሻን ከመሰረዝ ይልቅ ማሰናከልን ይምረጡ።
