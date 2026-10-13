# Feature Flags (አማርኛ)

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FEATURE_FLAGS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/reference/FEATURE_FLAGS.md)

---

> ያለ **ዳግም ማሰማራት** የOmniRouteን ባህሪ የሚቀይሩ የሩጫ ጊዜ መቀያየሪያዎች።
> እዚህ የተዘረዘረው እያንዳንዱ ጠቋሚ በ
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> ውስጥ ተገልጿል — ይህም ብቸኛው የእውነት ምንጭ ነው። ዳሽቦርዱም ሆነ REST API ከዚያ
> ፋይል ስለሚያነቡ፣ ከታች ያለው ሰንጠረዥ ከእሱ ጋር 1:1 እንዲዛመድ ተፈጥሯል።

---

## የባህሪ ጠቋሚዎች ምንድን ናቸው

የባህሪ ጠቋሚ በስም የተሰየመ መቀያየሪያ (boolean ወይም enum) ሲሆን፣ እሴቱ በሩጫ ጊዜ
ሊቀየር እና ዳግም የሂደት ማሰማራት ሳያስፈልግ በውሂብ ጎታው ውስጥ ሊቀመጥ ይችላል። እያንዳንዱ
ጠቋሚ `key`፣ `label`፣ `description`፣ `category`፣ `defaultValue`፣ `type` እና `requiresRestart`
ፍንጭ ባለው `FeatureFlagDefinition` ይገለጻል።

### የመፍትሔ ቅደም ተከተል

የአንድ ጠቋሚ **ተግባራዊ እሴት** በ
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) በሚከተለው
ቅድሚያ ይወሰናል (ከፍተኛው ያሸንፋል)፦

1. **የDB ተተኪ እሴት** — በ`feature_flags` የስም ክልል ስር ባለው `key_value`
   ሰንጠረዥ ውስጥ የተከማቸ እሴት (በዳሽቦርዱ ወይም በREST API በኩል የሚዋቀር)።
2. **የአካባቢ ተለዋዋጭ** — ከተዋቀረ እና ባዶ ካልሆነ `process.env[<KEY>]`።
3. **የትርጉም ነባሪ** — ከ`featureFlagDefinitions.ts` የሚገኘው `defaultValue`።

የboolean ጠቋሚ ተግባራዊ እሴቱ `"true"`፣ `"1"` ወይም `"yes"` ሲሆን
**እንደነቃ** ይቆጠራል (`isFeatureFlagEnabled()`ን ይመልከቱ)።

> [!NOTE]
> አብዛኞቹ ጠቋሚዎች በ[`ENVIRONMENT.md`](./ENVIRONMENT.md) ውስጥ የተመዘገበ
> **ተመሳሳይ ስም** ያለው ተዛማጅ የአካባቢ ተለዋዋጭም አላቸው። የጠቋሚው የDB ተተኪ እሴት
> ከዚያ የአካባቢ ተለዋዋጭ ቅድሚያ ይኖረዋል። `requiresRestart: true` ያለው ጠቋሚ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ዳግም የሚነበበው ሂደቱ ሲጀምር ብቻ ነው — እሱን መቀያየር በዳሽቦርዱ ውስጥ
> **"አገልጋዩን ዳግም ያስጀምሩ"** የሚል ሰንደቅ ያሳያል።

---

## የባንዲራዎች ዝርዝር

በ6 ምድቦች ውስጥ 86 ባንዲራዎች። **ነባሪ** ማለት በትርጉሙ የተቀመጠው ነባሪ እሴት ነው — ይህም
በውሂብ ጎታ የተተካ እሴትም ሆነ የአካባቢ ተለዋዋጭ በማይኖርበት ጊዜ የሚጠቀምበት እሴት ነው።

### ደህንነት (10)

| ቁልፍ                                     | ዓይነት     | ነባሪ      | መግለጫ                                                                                                                                                                                                       |
| --------------------------------------- | -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REQUIRE_API_KEY`                       | ቡሊያን     | `false`  | ለሁሉም ገቢ ጥያቄዎች የAPI ቁልፍ እንዲኖር ያስገድዳል።                                                                                                                                                                       |
| `INPUT_SANITIZER_ENABLED`               | ቡሊያን     | `true`   | ለሁሉም ጥያቄዎች የግቤት ማጽዳትን ያነቃል።                                                                                                                                                                                |
| `INJECTION_GUARD_MODE`                  | ዝርዝር ምርጫ | `off`    | የፕሮምፕት ኢንጀክሽን መከላከያ ሁነታ። እሴቶች፦ `off`፣ `warn`፣ `block`፣ `redact`።                                                                                                                                           |
| `PII_REDACTION_ENABLED`                 | ቡሊያን     | `false`  | ግለሰብን ለመለየት የሚያስችል መረጃን (PII) ከጥያቄዎች ይሰውራል (ከ`INPUT_SANITIZER_MODE` ገለልተኛ ነው)።                                                                                                                             |
| `PII_RESPONSE_SANITIZATION`             | ቡሊያን     | `false`  | PIIን ከአቅራቢ ምላሾች ያጸዳል።                                                                                                                                                                                      |
| `PII_RESPONSE_SANITIZATION_MODE`        | ዝርዝር ምርጫ | `redact` | በምላሽ ውስጥ ያለውን PII የማጽዳት ሁነታ። እሴቶች፦ `redact`፣ `warn`፣ `block`፣ `off`።                                                                                                                                       |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | ቡሊያን     | `true`   | የቆየ አማራጭ ስም፦ በዚህ ባንዲራ የመቆጣጠሪያ ሰሌዳ መቀየሪያ ላይ የተቀመጠ እሴት ከአካባቢ ተለዋዋጩ በፊት ይነበባል፤ በሁለቱ በአንዱ ያለ `false`፣ `0`፣ `no` ወይም `off` እንደ `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` ሁሉ የወጪ URL መከላከያውን የአስተናጋጅ ፍተሻዎች ያሰናክላል። |
| `ALLOW_API_KEY_REVEAL`                  | ቡሊያን     | `false`  | ማንነታቸው የተረጋገጠ የመቆጣጠሪያ ሰሌዳ ተጠቃሚዎች የተሸፈኑ እሴቶችን ብቻ ከማየት ይልቅ የተቀመጡ የAPI ቁልፎችን እንዲገልጡ ይፈቅዳል።                                                                                                                    |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | ቡሊያን     | `false`  | በAUTH ምዝግብ መስመሮች ውስጥ የመለያውን የመጀመሪያ ክፍል ያካትታል (ለምሳሌ፦ "የ<provider> መለያን በመጠቀም ላይ፦ abc12345...")። የመለያ መለያዎች ከጋራ/ከብዙ ተከራዮች የሂደት ምዝግቦች እንዲሰወሩ በነባሪ ተሰናክሏል። ከማረሚያ ሁነታ ገለልተኛ ነው፤ የማረሚያ ሁነታን መቀየር ይህን አይገልጠውም።    |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | ቡሊያን     | `false`  | OIDC ሲነቃ፣ ተጠቃሚዎች በOIDC ነጠላ መግቢያ ብቻ ማንነታቸውን ማረጋገጥ እንዲችሉ በይለፍ ቃል መግባትን ያሰናክላል። ሲሰናከል (ነባሪ)፣ በይለፍ ቃል መግባትም ሆነ OIDC ይገኛሉ።                                                                                      |

### አውታረ መረብ (23)

| ቁልፍ                                             | ዓይነት | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------- | ---- | ------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLE_TLS_FINGERPRINT`                        | ቡሊያን | `false` | ✓         | የTLS አሻራ ስውር ሁነታን አንቃ።                                                                                                                                                                                                                                                                                                                                                                                      |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | ቡሊያን | `false` |           | የ/v1/audio/* መስመሮች ከlocalhost ውጭ የሚስተናገዱ፣ ከOpenAI ጋር ተኳሃኝ የሆኑ የአቅራቢ ኖዶችን እንዲጠቀሙ ፍቀድ። በነባሪ የተሰናከለ ነው — ድምፅን ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ስለሚቀይር፣ ይህ በአስተዳዳሪው ግልጽ ውሳኔ መፈቀድ አለበት። የloopback ኖዶች ሁልጊዜ ይፈቀዳሉ፣ በዚህም አይነኩም።                                                                                                                                                                                  |
| `RERANK_REMOTE_PROVIDER_NODES`                  | ቡሊያን | `false` |           | POST /v1/rerank (እና የማህደረ ትውስታ ሞተሩ የloopback ዳግም ደረጃ አሰጣጥ ደረጃ) ከlocalhost ውጭ የሚስተናገዱ፣ ከOpenAI ጋር ተኳሃኝ የሆኑ የአቅራቢ ኖዶችን እንዲጠቀም ፍቀድ። በነባሪ የተሰናከለ ነው — ወደ ሩቅ አስተናጋጅ ማስተላለፍ የወጪ ትራፊክ ማንነትን ስለሚቀይር፣ ይህ በአስተዳዳሪው ግልጽ ውሳኔ መፈቀድ አለበት። የloopback ኖዶች ሁልጊዜ ይፈቀዳሉ፤ የሩቅ ኖዶች በተጨማሪም የአቅራቢውን የወጪ URL መመሪያ ማሟላት አለባቸው።                                                                                                       |
| `PROXY_AUTO_SELECT_ENABLED`                     | ቡሊያን | `false` |           | ለአንድ ግንኙነት ፕሮክሲ ካልተመደበ፣ ከመዝገቡ ውስጥ የመጀመሪያውን የሚሰራ ፕሮክሲ በራስ-ሰር ምረጥ። በነባሪ የተሰናከለ ነው (አለበለዚያ በመዝገቡ ያለ ማንኛውም ፕሮክሲ አጠቃላይ ተለዋጭ ይሆናል — #3332)።                                                                                                                                                                                                                                                                       |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | ቡሊያን | `false` |           | የፕሮክሲ ተደራሽነት ቅድመ ምርመራዎች ሲከሽፉ፣ የOAuth እና የአቅራቢ ማረጋገጫ ሂደቶች የተወሰነላቸውን ፕሮክሲ አልፈው በቀጥታ እንዲገናኙ ፍቀድ። ይህ የወጪ ትራፊክ IPን ሊቀይር ስለሚችል በነባሪ የተሰናከለ ነው።                                                                                                                                                                                                                                                                    |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | ቡሊያን | `true`  |           | ብዙ መለያዎችን በተራ ለሚጠቀም አስፈጻሚ የአውታረ መረብ ስህተት (የጊዜ ገደብ ማለፍ፣ ግንኙነት መከልከል/ዳግም መጀመር) ሲከሰት፣ የከሸፈው መለያ የራሱ ፕሮክሲ ከሌለው፣ እያንዳንዱን እንደገና ከመሞከር ይልቅ አጭር የእረፍት ጊዜ ተግብር እና ለቀሪው የጥያቄው ሂደት ፕሮክሲ የሌላቸውን ሌሎች መለያዎች ዝለል። በነባሪ የነቃ ነው (ደህንነቱ የተጠበቀ ነው፦ የወጪ ትራፊክ IP አይቀየርም፤ የወጪ ትራፊክ መውጫን በሚጋሩ መለያዎች ላይ የመዘግየት/የእረፍት ጊዜ ስጋትን ብቻ ይቀንሳል)። ፕሮክሲ የሌለው መለያ የመጀመሪያውን ስህተት ሲያስነሳ ስህተቱ ወዲያውኑ ወደ ላይ እንዲተላለፍ ለመመለስ ይህን አሰናክል።                 |
| `ROTATION_ATTRIBUTION`                          | ቡሊያን | `false` |           | የOpencode በተራ መጠቀም ሂደት የትኛው መለያ እንዳገለገለ ወይም እንደተዘለለ ይመዘግባል (የተሸፈኑ መለያ ቁጥሮች ብቻ፣ ሙሉ የመለያ ቁጥሮች በፍጹም አይመዘገቡም)፣ እና አስተዳዳሪው የተዘለሉ መለያዎችን ካልተጠቀሙባቸው መለያዎች መለየት እንዲችል የፕሮክሲ ምዝግብ ግቤቶችን ከጥያቄያቸው ጋር ያገናኛል። በነባሪ የተሰናከለ ነው።                                                                                                                                                                                            |
| `PROXY_SKIP_RECENTLY_FAILED`                    | ቡሊያን | `true`  |           | የፕሮክሲ ስብስቦች እና የopencode በእያንዳንዱ መለያ ላይ የሚደረግ በተራ መጠቀም ሂደት፣ አሁን የከሸፈ ፕሮክሲን (የTCP ሙከራ የተከለከለበት፣ ወይም በእሱ በኩል 429 የተቀበለ) እንደገና መጠቀም ያቆማሉ፤ ይህም ለእያንዳንዱ ሂደት በተወሰነ ጊዜ ውስጥ ሲሆን፣ በእያንዳንዱ ድግግሞሽ ጊዜው በእጥፍ እየጨመረ እስከ ከፍተኛ ገደብ ይደርሳል። ምንም የፕሮክሲ ሁኔታ አይመዘገብም፤ ሁሉም እጩዎች ወደ ጎን ከተተዉ ምርጫው አይቀየርም። በነባሪ የነቃ ነው፤ `false` መደበኛ ምርጫን ይመልሳል።                                                                                     |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | ቡሊያን | `false` |           | ኮታቸው በመውጫ አድራሻ ለሚመደብ አቅራቢዎች፣ በቅርቡ ከተከለከለ አባል ጋር ተመሳሳይ የታየ የመውጫ አድራሻ የሚጋራውን የገንዳ አባል ከጤናማ አባላት በቀጥታ በታች ያስቀምጡ። ቅደም ተከተልን ብቻ ይቀይራል፣ ፈጽሞ አያስወግድም። የሚያነበውን የክልከላ ምልክት የሚያመነጨው PROXY_SKIP_RECENTLY_FAILED ያስፈልገዋል። በነባሪ ጠፍቷል።                                                                                                                                                                                    |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | ቡሊያን | `false` |           | በዳሽቦርዱ ውስጥ፣ ከፕሮክሲ ገንዳ ስር፣ ባለፉት 24 ሰዓታት ስንት የታዩ የመውጫ IP አድራሻዎች አባላቱን እንዳገለገሉ እና ስንት ግንኙነቶች እንደተጠቀሙባቸው ያሳዩ። ለንባብ ብቻ ነው፣ ከፕሮክሲ መዝገብ ይሰላል፣ ለማዘዋወር ፈጽሞ አይጠቀምም። በነባሪ ጠፍቷል።                                                                                                                                                                                                                                        |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | ቡሊያን | `false` |           | ኦፕሬተሩ ለእያንዳንዱ የገንዳ አባል የላካቸውን፣ ቀን የተመዘገበባቸውን የታዩ አድራሻዎች ይቀበሉ፣ እና ለማሳያና ለገንዳ ቅደም ተከተል ከመዝገቡ ከተነበበው መረጃ ጋር ያዋህዷቸው። በነባሪ ጠፍቷል፦ የመላኪያ መንገዱ 404 ይመልሳል፣ የገንዳ ንባቦችም ልክ እንደበፊቱ ይሰራሉ።                                                                                                                                                                                                                                |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | ቡሊያን | `false` |           | ለOpenCode አስፈጻሚ፣ በዥረት የሚላክ የResponses ምላሽ የመጀመሪያውን የአካል ባይት ይከታተሉ (የጊዜ ገደብ፦ `RESPONSES_FIRST_BYTE_TIMEOUT_MS`፣ ነባሪው `15000`)። ከጊዜ ገደቡ በላይ ምንም ሳይልክ የሚቆይ 2xx የResponses ዥረት እንደተቋረጠ ይቆጠራል፦ መለያው ለጊዜው ይታገዳል፣ ጥያቄውም አንድ ጊዜ ወደሚቀጥለው መለያ ይዛወራል፤ ሁለተኛ መቋረጥ ከተከሰተ ወዲያውኑ ይከሽፋል። በነባሪ ጠፍቷል፦ የተቋረጡ ዥረቶች የዥረት ዝግጁነት ጊዜ ገደብ እስኪያበቃ ድረስ አሁን ያለውን መጠበቅ ይቀጥላሉ።                                                             |
| `OPENCODE_USER_BLOCKED_ROTATION`                | ቡሊያን | `false` |           | OpenCode አስፈጻሚ፦ የ`user_blocked` ክልከላ የያዘ 403/451 ሲከሰት (በጂኦግራፊያዊ ቦታ ምክንያት ወይም በCloudflare አሻራ ውድቅ መደረግ ሳይሆን)፣ የተከለከለውን መለያ ለጊዜው ያግዱ እና በእያንዳንዱ ጥያቄ ቢበዛ አንድ ጊዜ ወደሚቀጥለው መለያ ያዛውሩ፤ ሁለተኛ ክልከላ ሲከሰት፣ የስኬት ምልክት ሳይሰጠው እንዳለ ይመለሳል። በነባሪ ጠፍቷል፦ በአቅራቢው በኩል የተጣለን የተጠቃሚ እገዳ ለማለፍ መንገድ መቀየር እንደ እገዳ መሸሽ ሊታይ እና ምልክቱን ወደ ሁሉም መለያዎች ሊያሰራጭ ይችላል።                                                                           |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | ቡሊያን | `false` |           | OpenCode ማዘዋወር፦ በአቅራቢው በኩል ሁለት ተከታታይ ጊዜያዊ ውድቀቶች (5xx ወይም ባዶ 400) ከተከሰቱ በኋላ፣ ወደሚቀጥለው መለያ ከመሄድዎ በፊት ይጠብቁ — 1.5 ሰከንድ፣ በእያንዳንዱ ተጨማሪ ውድቀት በእጥፍ እየጨመረ፣ በእያንዳንዱ ቆይታ እስከ 6 ሰከንድ እና በእያንዳንዱ ጥያቄ እስከ 10 ሰከንድ የተገደበ፣ ደንበኛው ግንኙነቱን ሲያቋርጥ የሚዘለል፤ ከመጠበቅ በፊት ያልተሳካው ምላሽ አካል ይለቀቃል። በነባሪ ጠፍቷል፦ ወደ ተተኪ መዛወር ወዲያውኑ መፈጸሙን ይቀጥላል።                                                                                               |
| `OPENCODE_PARK_AND_RESUME`                      | ቡሊያን | `false` |           | OpenCode ማዘዋወር፦ ተደጋጋሚ ጊዜያዊ 429 ምላሾች (ወይም አዲስ የገንዳ ጫና ምልክት) ከተከሰቱ በኋላ፣ የሕያውነት ምልክት እየላኩ ጥያቄውን ለጊዜው ያቆዩ፣ ከዚያም ወደ ሁሉም መለያዎች ከማሰራጨት ይልቅ እስከ 3 ተከታታይ መለያዎች ብቻ የተገደበ አንድ ዙር እንደገና ያስኬዱ። በነባሪ ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዛውራል።                                                                                                                                                                        |
| `STREAM_READINESS_STALL_RETRY`                  | ቡሊያን | `false` |           | በዥረት የሚቀርብ ውይይት፦ ከአቅራቢው የሚመጣው የመጀመሪያ ምላሽ አካል ሊጠቀሙበት የሚችሉትን ክስተት ከማመንጨቱ በፊት ሲቋረጥ፣ በተመሳሳይ የማዘዋወሪያ መንገድ፣ በተመሳሳይ የዝግጁነት ጊዜ በጀት እና ያለ መለያ ቅጣት አንድ የተገደበ ሁለተኛ ሙከራ ያድርጉ። በነባሪ ጠፍቷል፦ የተቋረጠ የመጀመሪያ ምላሽ አካል ጥያቄውን ያለ ድጋሚ ሙከራ ያከሽፋል።                                                                                                                                                                                   |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | ቡሊያን | `false` |           | በተተረጎሙ የዥረት ዙሮች ላይ፣ ከአቅራቢው የሚመጣው ዙር ሊጠቀሙበት የሚችሉትን ይዘት ሳይይዝ ሲቀር (ምክንያታዊ ትንተና ብቻ የያዘ ማጠናቀቂያ ወይም ምንም ጠቃሚ የይዘት ቁርጥራጮች ሳይኖሩ)፣ ማንኛውም ነገር ለደንበኛው ከመታየቱ በፊት በመደበኛው የማረጋገጫ መረጃ መንገድ የተገደቡ ድጋሚ ሙከራዎችን ያድርጉ (እስከ `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX`)። በነባሪ ጠፍቷል፦ ባዶ ዙሮች አሁን ያለውን ባህሪ ይጠብቃሉ (ባዶ 200 ወይም ባዶ ይዘት ያለው 502)።                                                                                            |
| `OPENCODE_POOL_RESELECT`                        | ቡሊያን | `false` |           | OpenCode ማዘዋወር፦ በአጠቃላይ የገንዳ አውድ ውስጥ ባለ ፕሮክሲ በሌለው መለያ ላይ፣ ኮታውን በመውጫ አድራሻ ከሚመድብ አቅራቢ 429 ከመጣ በኋላ፣ በተመሳሳይ የመውጫ አድራሻ እንደገና ከመሞከር ይልቅ ለሚቀጥለው ሙከራ ሌላ አባል እንዲሰጥ የግንኙነት ገንዳውን ይጠይቁ። ቅደም ተከተልን ይቀይራል፣ ፈጽሞ አያስወግድም፦ አማራጮቹ ያለቁበት ገንዳ አሁን ያለውን ባህሪ ይጠብቃል። በነባሪ ጠፍቷል፦ እያንዳንዱ 429 ልክ እንደበፊቱ ወደሚቀጥለው መለያ ያዛውራል።                                                                                                            |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | ቡሊያን | `false` |           | የOpenCode ማዞር፦ እውነተኛ የጥያቄ መጠን ገደብ እንደሆነ በተመደበው የመጀመሪያ 429 (ሊተነተን የሚችል `Retry-After`፣ ወይም የጥያቄ/አጠቃቀም ገደብን የሚጠቅስ የምላሽ አካል) ላይ የመለያዎችን ዙር ያቁሙ እና ያንን ከላይኛው አገልጋይ የመጣ 429 ሳይቀየር ይመልሱ። ያልተመደቡ 429ዎች ማዞሩን ይቀጥላሉ። በነባሪ ጠፍቷል፦ ነፃው ደረጃ በእያንዳንዱ ወጪ IP ይገደባል (#9611)፣ ስለዚህ እያንዳንዱ 429 ወደ ቀጣዩ መለያ ያሸጋግራል፣ ሁሉንም መለያዎች ያሟጠጠ ዙር ደግሞ የመጨረሻውን ከላይኛው አገልጋይ የመጣ 429 ይመልሳል።                                                     |
| `MITM_DISABLE_TLS_VERIFY`                       | ቡሊያን | `false` | ✓         | ለMITM ፕሮክሲ የTLS ሰርተፊኬት ማረጋገጥን ያሰናክሉ። **አደገኛ።**                                                                                                                                                                                                                                                                                                                                                              |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | ቡሊያን | `false` |           | በአቅራቢ URL ማረጋገጥ፣ በሞዴል ፍለጋ፣ በአቅራቢ-ኖድ መሠረታዊ URLዎች እና በፕሮክሲ ተለዋጭ ሙከራ ላይ፣ የወጪ URL ጥበቃውን የአስተናጋጅ ፍተሻዎች፣ የደመና ሜታዳታ እገዳን ጨምሮ፣ ያጠፋል፤ እንዲሁም የግል webhook መዳረሻዎችን ይፈቅዳል። የአካባቢ እና የLAN URLዎች በማረጋገጥ፣ በፍለጋ እና በአቅራቢ-ኖድ መንገዶች ላይ በነባሪ አስቀድመው ይፈቀዳሉ (`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`)፤ የፕሮክሲ ተለዋጭ ሙከራ እና የግል webhook መዳረሻዎች `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`ን ብቻ ይመለከታሉ፣ ይህም ጠፍቶ ሳለ የአካባቢ/LAN አስተናጋጆችን ያግዳሉ። |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | ቡሊያን | `true`  |           | በአካባቢ/የግል አድራሻዎች (127.0.0.1, localhost, LAN) ላይ ያሉ የአቅራቢ URLዎችን ይፍቀዱ። በነባሪ በርቷል (ለአካባቢያዊ አጠቃቀም ቅድሚያ የሚሰጥ)፦ በዚህ ጊዜ ጥበቃው የደመና ሜታዳታ መዳረሻዎችን (ሁሉንም 169.254.0.0/16 እና የታወቁ የሜታዳታ አስተናጋጅ ስሞችን) ያግዳል። የሕዝብ አድራሻዎችን ብቻ በጥብቅ ለመፍቀድ ያሰናክሉ፦ የግል እና የloopback አስተናጋጆችም ይታገዳሉ።                                                                                                                                           |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | ቡሊያን | `false` | ✓         | ከClaude Code ጋር የሚስማማ የአቅራቢ ሁነታን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                       |

### ፖሊሲዎች (7)

| ቁልፍ                             | ዓይነት        | ነባሪ           | መግለጫ                                                                                                                                                                                                                                                |
| ------------------------------- | ----------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNPRICED_USAGE_BUDGET_POLICY`  | የተዘረዘሩ እሴቶች | `fail_closed` | ለእያንዳንዱ ቁልፍ ያሉ ዕለታዊ/ሳምንታዊ የUSD ገደቦች፣ አቅራቢው/ሞዴሉ የዋጋ ረድፍ የሌለውን አጠቃቀም እንዴት እንደሚያስተናግዱ። `fail_closed` (ነባሪ) የጊዜ ክፍሉን ገደብ እንዳለፈ ያመለክታል (#12341)፤ `count_as_zero` እንደ $0 ይቆጥረዋል እና ዋጋ ባለው ወጪ ላይ ገደቦችን ማስፈጸሙን ይቀጥላል። እሴቶች፦ `fail_closed`, `count_as_zero`። |
| `TOOL_POLICY_MODE`              | የተዘረዘሩ እሴቶች | `disabled`    | የመሣሪያ አጠቃቀም ፖሊሲ ማስፈጸሚያ ሁነታ። እሴቶች፦ `disabled`, `warn`, `block`።                                                                                                                                                                                      |
| `RATE_LIMIT_AUTO_ENABLE`        | ቡሊያን        | `false`       | በአካባቢ ተለዋዋጩ በኩል የጥያቄ መጠን ገደብን በራስ-ሰር የሚያነቃውን የደህንነት መከላከያ እንዲበራ/እንዲጠፋ ያስገድዱ። የማስኬጃ አካባቢው የሚያነበው የአካባቢ ተለዋዋጩን ብቻ ነው፦ ካልተዋቀረ፣ ይህን የካታሎግ ነባሪ ሳይሆን የዳሽቦርዱን ቅንብር (በነባሪ በርቷል) ይከተላል።                                                                      |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | ቡሊያን        | `false`       | ለቀጥተኛ ነጠላ-ሞዴል ጥያቄዎች የOmniRoute አካባቢያዊ የአውድ መስኮት / ከፍተኛ የግቤት ቶከን ፍተሻን ይዝለሉ። የላይኛው አገልጋይ ገደቦች አሁንም ይተገበራሉ።                                                                                                                                            |
| `CAPABILITY_FILTER_ENABLED`     | ቡሊያን        | `false`       | የታለመው ሞዴል አስፈላጊ ችሎታዎች (ምስል ማየት፣ መሣሪያዎች፣ የተዋቀረ ውጤት፣ የአውድ መስኮት) ሲጎድሉት ጥያቄዎችን ከመላካቸው በፊት ውድቅ ያድርጉ። የጥምር ንብርብሩን የተኳኋኝነት ማጣሪያ የሚያልፉ ቀጥተኛ ነጠላ-አቅራቢ ጥያቄዎችን ይጠብቃል።                                                                                          |
| `USAGE_LIMIT_IGNORE_UNPRICED`   | ቡሊያን        | `false`       | ዋጋ የሌላቸውን ሞዴሎች አጠቃቀም፣ ኮታው እንዳለፈ ከመቁጠር ይልቅ፣ ለእያንዳንዱ ቁልፍ ባሉ የUSD አጠቃቀም ኮታዎች ውስጥ እንደ $0 ይቁጠሩ። በነባሪ ጠፍቷል፦ ዋጋ ያልተመደበለት ሞዴል ወይም የማዘዋወር ተለዋጭ ስም እውነተኛ ወጪን ሊደብቅ ስለሚችል፣ ኮታው በእርግጠኝነት እጥረት ጊዜ ይከለክላል።                                                         |
| `RADAR_ENABLED`                 | ቡሊያን        | `false`       | የOmniRoute Radar ሞጁልን (የካታሎግ መረጃ ፍሰት ማያ ገጾችን እና ማመሳሰልን) ያንቁ። በነባሪ ጠፍቷል፤ ማንቃቱ የሚከፍተው የተጠቃሚ በይነገጹን ብቻ ነው — የውሂብ ማመሳሰል የተለየ የፈቃድ ምርጫ እንደሆነ ይቀጥላል።                                                                                                      |

`UNPRICED_USAGE_BUDGET_POLICY` በግልጽ ሲዋቀር (የDB መተኪያ ቅንብር ከአካባቢ ቅንብር በፊት ቅድሚያ ይኖረዋል)፣
ከ`USAGE_LIMIT_IGNORE_UNPRICED` በላይ ቅድሚያ ይወስዳል። ግልጽ የenum እሴት ከሌለ፣
በቀደመው ደረጃ ያለው የቡሊያን መርጦ መውጫ ቅንብር `count_as_zero`ን ይመርጣል፤ ካልሆነ ግን ነባሪው `fail_closed` ነው።
ልክ ያልሆኑ የenum እሴቶች እና ሊነበብ የማይችል የባህሪ መቆጣጠሪያ ማከማቻ ሲኖሩ፣ አሠራሩ ፈቃድ በመከልከል ይዘጋል። ከሁለቱም መርጦ መውጫ ቅንብሮች አንዳቸውም
ዋጋ የተወሰነለትን ወጪ ወይም ያልተሳካ የዋጋ ፍለጋን የሚመለከቱ ገደቦችን አያላሉም። የፖሊሲ አስፈጻሚው እና የአስተዳዳሪው ሪፖርት
ተመሳሳይ ተግባራዊ ፖሊሲ ይወስናሉ።

### የሩጫ ጊዜ (36)

| ቁልፍ                                         | ዓይነት    | ነባሪ     | እንደገና ማስጀመር | መግለጫ                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------------------------- | ------- | ------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | ቡሊያን    | `true`  |             | የጥምር ማዘዋወር ሞዴሎችን ሲቀይር የውይይት ማጠቃለያዎችን ይፍጠሩ እና ያስገቡ። የሞዴል ለውጦችን እርስ በርሳቸው ገለልተኛ አድርጎ ለመቆጠር እና ለሁሉም ነባር እና ወደፊት ለሚፈጠሩ ጥምረቶች የጀርባ ርክክብ ጥያቄዎችን ለመከላከል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                      |
| `REASONING_REPLAY_ENABLED`                  | ቡሊያን    | `true`  |             | በብዙ ዙር ውይይቶች ውስጥ የሞዴሉን የማመዛዘን ሂደት በመሸጎጫ ያስቀምጡ እና እንደገና ይጠቀሙበት። የማመዛዘን ሂደቱን ማስቀመጥ እና እንደገና ማስገባት ለማቆም ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                  |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | ቡሊያን    | `true`  |             | ወደ ደንበኞች ከማስተላለፍዎ በፊት፣ ከResponses API ቀጥታ ማስተላለፊያ ዥረቶች ውስጥ የውስጥ አስተያየት ደረጃ ውጤት ንጥሎችን ያስወግዱ። ከላይኛው አቅራቢ የሚመጡ ያልተለወጡ አስተያየቶችን ለመቀበል ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | ቡሊያን    | `false` |             | በMCP መሣሪያዎች መዳረሻ ላይ የፈቃድ ወሰን ገደቦችን ያስፈጽሙ።                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | ቡሊያን    | `false` |             | የቶከን አጠቃቀምን ለመቀነስ የMCP መሣሪያ መግለጫዎችን ያጭቁ።                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | ቡሊያን    | `false` |             | በማስኬጃ ጊዜ የጀርባ ተግባሮችን ማከናወን ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | boolean | `false` | ✓           | ሁሉንም የበስተጀርባ አገልግሎቶች (የኮታ ማደስ፣ ማመሳሰል፣ ወዘተ) ያሰናክሉ።                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | boolean | `false` |             | በፕሮጀክት ደረጃ ያሉ የRTK ማጣሪያዎችን ያለማረጋገጥ ይመኑ።                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | boolean | `true`  | ✓           | በማስመጣት ጊዜ የቅጽበታዊ ዳሽቦርድ WebSocket አገልጋዩን ያስጀምሩ (በነባሪ ወደብ 20132)።                                                                                                                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_CODEX_WS_ENABLED`                | boolean | `true`  |             | Codex የResponses-over-WebSocket ማጓጓዣን እንዲጠቀም ይፍቀዱ። ሲሰናከል፣ Codex ወደ HTTP Responses ይመለሳል።                                                                                                                                                                                                                                                                                                                                                                                      |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | boolean | `true`  |             | Codex የአካባቢውን app-server WebSocket JSON-RPC ማጓጓዣ (codexTransport=app-server) እንዲጠቀም ይፍቀዱ። ሲሰናከል፣ app-server እንዲጠቀሙ የተመረጡ ግንኙነቶች ወደ Codex ሌሎች ማጓጓዣዎች ይመለሳሉ።                                                                                                                                                                                                                                                                                                                    |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | boolean | `true`  |             | በጀታቸው ያለቀ ጥያቄዎችን ወደ አስቸኳይ ነፃ አማራጭ አቅራቢ/ሞዴል ያስተላልፉ። (ከታች ያለውን [የአስቸኳይ በጀት አማራጭ](#emergency-budget-fallback) ይመልከቱ።)                                                                                                                                                                                                                                                                                                                                                            |
| `STREAM_RECOVERY_ENABLED`                   | boolean | `false` |             | ማንኛውም የምላሽ ባይቶች ወደ ደንበኛው ከመድረሳቸው በፊት፣ በመካከል ለተቋረጡ ከላይኛው አገልጋይ የሚመጡ የSSE ፍሰቶች ለደንበኛው ሳይታወቅ ቀደም ብሎ ዳግም መሞከርን ያንቁ።                                                                                                                                                                                                                                                                                                                                                               |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | boolean | `false` |             | ባይቶች ወደ ደንበኛው ከደረሱ በኋላ፣ የፍሰት መልሶ ማግኛ ምላሹን እንደገና እንዲጠይቅና እንዲያገናኝ ይፍቀዱ።                                                                                                                                                                                                                                                                                                                                                                                                         |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |             | በዥረት መካከል የሚደረግ ቀጣይ ሂደት ለመሣሪያ ጥሪ ደህንነቱ የተጠበቀ እንዲሆን ያድርጉ፦ የመሣሪያ ጥሪ ከተላከ በኋላ (በሂደት ላይ ቢሆንም ሆነ በfinish_reason tool_calls አስቀድሞ ተጠናቆ ቢሆን) የተቋረጠ ዥረት ፈጽሞ አይቀጥሉ፤ እንዲሁም ሙሉውን የተመደበ ወሰን ከመጠቀም ይልቅ ከአንድ ባዶ ቀጣይ ሙከራ በኋላ ይዝጉ። ሲጠፋ፦ የተለቀቀው ስሪት ባህሪ።                                                                                                                                                                                                                                       |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |             | የSSE ዥረት ምንም ጠቃሚ ፍሬም ከመላኩ በፊት ሲዘጋ እና በተመሳሳይ ግንኙነት ላይ የተወሰነው ድጋሚ ሙከራ ሲሟጠጥ፣ አንድ ጊዜ ወደ ተጓዳኝ ግንኙነት ይቀይሩ፤ ጥቅም ላይ ሊውል የሚችል ተጓዳኝ ግንኙነት ከሌለ፣ የመጀመሪያው `STREAM_EARLY_EOF` 502 ይመለሳል። በነባሪ ጠፍቷል፦ ቀደም ብሎ የሚከሰት EOF በተመሳሳይ ግንኙነት ላይ ከሚደረገው ድጋሚ ሙከራ በኋላ የመጨረሻ ማቋረጫ ሆኖ ይቀጥላል።                                                                                                                                                                                                                |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |             | በ`/v1/models` ምላሾች ውስጥ ለማሳያ ተስማሚ የሆኑ የስም መስኮችን ያካትቱ። የሞዴል መለያዎችን ብቻ ለሚጠብቁ ደንበኞች ያሰናክሉት።                                                                                                                                                                                                                                                                                                                                                                                       |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |             | በ/v1/models ውስጥ በሞዴል መለያዎች ላይ ቅድመ ቅጥያ እንዴት እንደሚጨመር ይቆጣጠራል። 'dual' (ነባሪ) ከቀድሞ ስሪቶች ጋር ተኳሃኝነት ለማስጠበቅ የተለዋጭ ስም እና የመደበኛ አቅራቢ መለያ ቅድመ ቅጥያዎችን ሁለቱንም ያወጣል። 'alias' አጭሩን የተለዋጭ ስም ቅድመ ቅጥያ ብቻ ያወጣል (ለምሳሌ፣ ds-web/model፣ deepseek-web/model ሳይሆን)። 'canonical' ሙሉውን የአቅራቢ መለያ ቅድመ ቅጥያ ብቻ ያወጣል። እሴቶች፦ `dual`፣ `alias`፣ `canonical`።                                                                                                                                                     |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |             | ለሞዴል የብልህነት ደረጃዎች በየጊዜው የሚደረገውን የArena AI የደረጃ ሰንጠረዥ ELO ማመሳሰል ያንቁ።                                                                                                                                                                                                                                                                                                                                                                                                           |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |             | የClaude Code መግቢያ መንገድ የሞዴል ማግኛ ከClaude ውጭ ያሉ ሞዴሎችን እንዲዘረዝር፣ በ`/v1/models` ላይ የ`claude/<provider>/<model>` ተመሳሳይ መለያዎችን ያሳዩ። የሶስት-ደረጃው መቆጣጠሪያ አጠቃላይ ደረጃ (የአካባቢ ቅንብሩ ከዳሽቦርዱ መተኪያ ቅንብር ቅድሚያ ይኖረዋል)። [የClaude Code ውቅር](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)ን ይመልከቱ።                                                                                                                                         |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |             | ለno-think/<provider>/<model> የመግቢያ መንገድ ተለዋጭ ስሞች ዋና መቆጣጠሪያ። ሲበራ (ነባሪ)፦ /v1/models ለእያንዳንዱ ብቁ እና የማሰብ ችሎታ ላለው የClaude ሞዴል ያለ ማሰብ የሚሠራ አማራጭ ያሳያል፤ በጥያቄ የተላከ no-think/ መለያም የማመዛዘን ሂደቱ ተገድቦ ወደ እውነተኛው ሞዴል ይመራል። ሲጠፋ፦ ምንም አማራጮች አይታዩም፣ እና no-think/ መለያ እንደ ማንኛውም ሌላ ያልታወቀ የሞዴል መለያ ይወሰዳል። ይህ ሲበራም፣ ለእያንዳንዱ ሞዴል የModelSpec.noThinkingAlias ማካተት/ማስወጣት ቅንብር አሁንም ተፈጻሚ ይሆናል።                                                                                                        |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |             | በ/v1/models ካታሎግ ውስጥ የማሰብ ደረጃ አማራጮች (ለምሳሌ፣ -low፣ -medium፣ -high) እንዳይፈጠሩ ያሰናክሉ።                                                                                                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | ቡሊያን    | `false` | ✓           | ለአቅራቢ ጥያቄ ማስተላለፍ፣ በእያንዳንዱ ተከራይ ደረጃ ራሳቸውን የሚያስተካክሉ ምናባዊ የመግቢያ መስመሮችን ያንቁ (#9654)፦ የአንድ ተከራይ ድንገተኛ የጥያቄ ጭማሪ ከእንግዲህ ሌላው ተከራይ 503 ምላሽ እንዲያገኝ አያደርግም። የOMNIROUTE_CHAT_VIRTUAL_LANES የአካባቢ ተለዋዋጭ ከዚህ የዳሽቦርድ ቅንብር ማስተካከያ ቅድሚያ ይወስዳል፤ ለውጦች አገልጋዩ እንደገና ሲጀመር ተግባራዊ ይሆናሉ።                                                                                                                                                                                                               |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | ቡሊያን    | `false` |             | ዋና ባለቤታቸው ንቁ የማረጋገጫ መረጃ ለሌለው፣ ነገር ግን ንቁ የማረጋገጫ መረጃ ባለው አስተላላፊ መግቢያ በር ለሚመሩ ሞዴሎች፣ <gateway-alias>/<model> የመስታወት መለያዎችን በ/v1/models ላይ ያሳውቁ። ማስጠንቀቂያ፦ በአጠቃላይ ሲነቃ ለሁሉም ደንበኞች የካታሎግ ግቤቶችን ይጨምራል።                                                                                                                                                                                                                                                                                 |
| `NEWAPI_AGGREGATOR_BALANCE`                 | ቡሊያን    | `false` |             | ከNew-API / One-API / Sub2API አሰባሳቢ ጋር ለሚስማሙ ኖዶች የቀሪ ሂሳብ ማወቂያን ያንቁ። ሲነቃ፣ የአሰባሳቢ ምልክት የተዘጋጀላቸው ተስማሚ ኖዶች ቀሪ ሂሳባቸውን በዳሽቦርዱ እና በኮታ ቅድመ ማረጋገጫ የጥያቄ ማዘዋወር ሂደት ውስጥ ያሳውቃሉ።                                                                                                                                                                                                                                                                                                             |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | ቡሊያን    | `false` |             | ሞዴሉ ደንበኛው ሊጠቀምበት የሚችል ምላሽ እስኪመልስ ድረስ፣ በአገልጋዩ የሚተዳደሩ በዥረት ያልሆኑ የመሣሪያ ጥሪዎችን ይቀጥሉ።                                                                                                                                                                                                                                                                                                                                                                                               |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | ቡሊያን    | `false` |             | የፍለጋ ስታቲስቲክስ እና የቅርብ ጊዜ ፍለጋዎች አሁንም ንቁ ግንኙነት ያላቸውን አቅራቢዎች ብቻ ይቆጥራሉ (እንደ duckduckgo-free ያሉ ቁልፍ የማይጠይቁ አቅራቢዎች ሁልጊዜ ይቆጠራሉ)። ሲጠፋ፣ የአቅራቢ መለያ ያለውን እያንዳንዱን የተቀመጠ የፍለጋ ረድፍ ያቆያል።                                                                                                                                                                                                                                                                                                     |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | ቡሊያን    | `false` |             | የዳሽቦርድ አቅራቢ ገጾች፦ የነፃ ባጁን አቅራቢው በሚያከብራቸው ምልክቶች ላይ ብቻ ያሳዩ — የማሳያ ስም ግምታዊ መመዘኛን፣ ቡሊያን ያልሆኑ የነፃ መስኮችን እና በሰነድ የተገለጸ ነፃ ደረጃ በሌላቸው የተመዘገቡ አቅራቢዎች ላይ ያሉ :free ቅጥያዎችን ያስወግዳል። ሲጠፋ፣ የቀድሞውን የባጅ ደንብ ያቆያል።                                                                                                                                                                                                                                                                               |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | ቡሊያን    | `false` |             | በተሰበሰቡ 429/503 አገልግሎት አለመገኘት ምላሾች ላይ፣ የተወሰነ የወደፊት ዳግም ሙከራ ጊዜ ሳይታወቅ `Retry-After`ን ያስቀሩ (ሰው ሠራሽ 1s ከመጠቀም ይልቅ)፣ `error.retry_after_provenance` (`signal` \| `none`) ይጨምሩ፣ እና የጥምር ማሟጠጫ መንገዶች ከJSON እና ከቀላል ጽሑፍ የላይኛው አገልጋይ ምላሽ አካላት ውስጥ በጽሑፍ የተገለጹ የዳግም ሙከራ ፍንጮችን እንዲያነቡ ያድርጉ። መስኩ በ`unavailableResponse()` በተገነቡ ምላሾች ላይ ብቻ ይታያል፤ ሌሎች የ429/503 ምላሽ አካላት አይለወጡም።                                                                                                                |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | ቡሊያን    | `false` |             | ኮታ ሲያልቅ ብቻ ወደ አማራጭ እንዲያልፍ የተመለከተበት `priority` የጥምር ዒላማ፣ ኮታ እንዳልሆነ በማስረጃ ሊረጋገጥ በሚችል ምክንያት (የአቅራቢ የወረዳ መቋረጫ ክፍት መሆን፣ በተተነበየ መዘግየት ምክንያት መዝለል) ጥምሩን ሲያቆም፣ ከኮታ ጋር የተያያዘ በሚመስለው 503 ፈንታ 502 ይመልሱ። በመቆለፍ፣ በማቀዝቀዣ ጊዜ፣ በአለመገኘት፣ በማለቅ እና በአንድ ጊዜ የሚካሄዱ ጥያቄዎች ገደብ ምክንያት የሚከሰቱ ማቆሞች 503ን ያቆያሉ።                                                                                                                                                                                           |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | ቡሊያን    | `false` |             | ግልጽ የማረጋገጫ ምልክት የሌለው የMistral 401 ምላሽ (`{"detail":"Unauthorized"}`) ለተሻረ ቁልፍም ሆነ ላለቀ ኮታ ተመሳሳይ ነው። ሲነቃ፣ ግንኙነቱን እንደ `expired` አድርጎ ከማቆም ይልቅ ለጊዜው ያሳርፈዋል፤ ይህም ለእያንዳንዱ ግንኙነት በሰዓት ቢበዛ 3 ጊዜ ይሆናል። ቀጣዩ ምላሽ ግንኙነቱን ያቆመዋል፣ ስለዚህ የተሻረ ቁልፍ በመጨረሻ ወደ መቆም ሁኔታ ይደርሳል። በነባሪ የቦዘነ ነው፦ እያንዳንዱ ግልጽ የማረጋገጫ ምልክት የሌለው የMistral 401 ምላሽ እንደበፊቱ ግንኙነቱን ያቆማል።                                                                                                                                       |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | ቡሊያን    | `false` |             | የxai-oauth (xao) እና grok-cli ምስል መስመሮችን ይመዝግቡ፣ እና የOpenAI high/hd ጥራትን ከxAI medium ጋር ያዛምዱ። በነባሪ የቦዘነ ነው፦ የAPI ቁልፍ የሚጠቀመው የxAI ምስል መንገድ አሁን ባለው ከOpenAI ጋር ተኳሃኝ በሆነ ጥያቄ ይቀጥላል፣ የደንበኝነት ምዝገባ መስመሮቹም አይመዘገቡም።                                                                                                                                                                                                                                                                   |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | ቡሊያን    | `true`  |             | ከቋሚው የመነሻ ውሂብ ይልቅ፣ የOAuth ተሸካሚ ቶከንን በመጠቀም ለxai-oauth ግንኙነቶች ወቅታዊውን የxAI ሞዴል ካታሎግ ከ https://api.x.ai/v1/models ያምጡ። በነባሪ የነቃ ነው። ቋሚውን የመነሻ ውሂብ ማቅረብ ለመቀጠል ቅንብሩን false ያድርጉ። በማግኛ መስመሩ ውስጥ የHTTP ውድቀቶች ሲከሰቱ ወደ መነሻ ውሂቡ ይመለሳል፤ የቅንብሩን እሴት የሚያነበው ክፍል ራሱ የHTTP ጥያቄ አይልክም።                                                                                                                                                                                                         |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | ቡሊያን    | `false` |             | ራስ-ሰር የጽዳት ሂደቱ ከ`OMNIROUTE_BATCH_RETENTION_DAYS` በላይ የቆዩ፣ የመጨረሻ ሁኔታ ላይ የደረሱ (የተጠናቀቁ/የከሸፉ/የተሰረዙ/ጊዜያቸው ያለፈ) የBatch API ሥራዎችን ከየመስመራቸው የሂደት ማስቀመጫ ነጥቦች ጋር እንዲሰርዝ፣ እንዲሁም የራሳቸውን `expires_at` ያለፉ የተሰቀሉ ፋይሎችን የBLOB ይዘት እንዲያጸዳ ይፍቀዱ። በነባሪ የቦዘነ ነው፦ አስተዳዳሪ እስኪያነቃው ድረስ እያንዳንዱ ነባር ጭነት ይህን ውሂብ ልክ እንደበፊቱ ያቆያል። በአስተዳዳሪ የሚነሳው `DELETE /api/v1/batches/delete-completed` መስመር በሁለቱም ሁኔታዎች አይነካም — የተለየ፣ ቅድመ ሁኔታ የሌለው የይፋ API ውል ነው።                                                    |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | ቡሊያን    | `false` |             | የተመረጠውን የAntigravity መለያ ለመረጠው ጥያቄ የዥረት ሂደት ቆይታ ያስይዙ፣ ይህም በአንድ ጊዜ የሚካሄድ ዳግም ሙከራ ወይም የመግቢያ ማረጋገጫ ርክክብ በሂደት ላይ ላለ ዥረት አስቀድሞ የተመደበን መለያ እንደገና እንዳይመርጥ ያደርጋል። የማስያዣው ወሰን (ግንኙነት፣ ሊጠራ የሚችል የላይኛው አቅራቢ ሞዴል) ነው፣ ስለዚህ አንድ መለያ አሁንም ሁለት የተለያዩ ሞዴሎችን በአንድ ጊዜ ሊያገለግል ይችላል። ሁሉም ብቁ መለያዎች ለዚያ ሞዴል አስቀድመው ተይዘው ሲሆን፣ ጥያቄው ሥራ በበዛበት መለያ ላይ ከመደራረብ ይልቅ፣ የተዋቀረ 503 `antigravity_pool_busy` ምላሽ ከተወሰነ ገደብ ያለው `Retry-After` ጋር ይመልሳል። በነባሪ የቦዘነ ነው፦ የመለያ ምርጫ ልክ እንደበፊቱ ይቀጥላል፣ ምንም ማስያዣም አይደረግም። |
| `COMBO_AUTO_PRUNE_STALE_STEPS`              | ቡሊያን    | `false` |             | ከሥልጣን ካለው ወቅታዊ ካታሎግ ጋር የሞዴል ማመሳሰል በተሳካ ሁኔታ ከተከናወነ በኋላ፣ ካታሎጉ ከእንግዲህ ወዲህ ከማይዘረዝራቸው ሞዴሎች ጋር በቋሚነት የተያያዙ የጥምር ደረጃዎችን ያስወግዱ፣ ለእያንዳንዱ የተወገደ ደረጃም አንድ የኦዲት መዝገብ ያስፍሩ። ማመሳሰሉ ከከሸፈ፣ ጥራቱ ከቀነሰ ወይም ነጻ ሞዴሎችን ብቻ ያካተተ ከሆነ ፈጽሞ አያስወግድም፣ ጥምርንም ፈጽሞ ባዶ አያደርግም። በነባሪ የቦዘነ ነው፦ ጊዜ ያለፈባቸው ደረጃዎች ምልክት ብቻ ይደረግባቸዋል።                                                                                                                                                                                |

### CLI (5)

| ቁልፍ                                   | ዓይነት | ነባሪ     | ዳግም ማስጀመር | መግለጫ                                                                                                                                                                 |
| ------------------------------------- | ---- | ------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLI_COMPAT_ALL`                      | ቡሊያን | `false` | ✓         | ለሁሉም CLI ደንበኞች የተኳኋኝነት ሁነታን ያንቁ።                                                                                                                                     |
| `MODEL_ALIAS_COMPAT_ENABLED`          | ቡሊያን | `false` |           | የሞዴል ተለዋጭ ስም ተኳኋኝነት ንብርብርን ያንቁ።                                                                                                                                      |
| `PRICING_SYNC_ENABLED`                | ቡሊያን | `false` |           | የዋጋ ውሂብ ራስ-ሰር ማመሳሰልን ያንቁ (የ`PRICING_SYNC_ENABLED` የአካባቢ ተለዋዋጭንም ይፈልጋል)።                                                                                              |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | ቡሊያን | `false` |           | የአቅራቢ ሞዴሎች ከተመሳሰሉ በኋላ፣ ከቀጥታ ካታሎግ የ~/.codex/*.config.toml መገለጫ ፋይሎችን በራስ-ሰር ይጻፉ (ወይም እንደገና ይጻፉ)። ንቁ/ነባሪ የCodex ውቅርን ፈጽሞ አይቀይርም። በነባሪ ጠፍቷል።                            |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | ቡሊያን | `false` |           | የአቅራቢ ሞዴሎች ከተመሳሰሉ በኋላ፣ ከቀጥታ ካታሎግ የ~/.claude/profiles/<name>/settings.json Claude Code መገለጫዎችን በራስ-ሰር ይጻፉ (ወይም እንደገና ይጻፉ)። ንቁ/ነባሪ የClaude ውቅርን ፈጽሞ አይቀይርም። በነባሪ ጠፍቷል። |

### ጤና (5)

| ቁልፍ                                       | ዓይነት | ነባሪ     | መግለጫ                                                                                                                                                                                                                   |
| ----------------------------------------- | ---- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | ቡሊያን | `false` | የአካባቢያዊ አገልግሎት ቅጂ የጤና ምርመራ መዳረሻን ያሰናክሉ።                                                                                                                                                                                |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | ቡሊያን | `false` | የቶከን ማረጋገጫ የጤና ምርመራን ያሰናክሉ።                                                                                                                                                                                            |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | ቡሊያን | `false` | በክህሎቶች ማጠሪያ አካባቢ ውስጥ የአውታረ መረብ መዳረሻን ያንቁ።                                                                                                                                                                              |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | ቡሊያን | `false` | በፕሮክሲ ጤና ፍተሻ ወቅት፣ ዒላማው የከለከለው የሙከራ ጥያቄ (401/403/429) የፕሮክሲውን ተከታታይ ውድቀት ቆጠራ ወደ ዜሮ ይመልሳል። በነባሪ ጠፍቷል፦ እምቢታ ገለልተኛ ሆኖ ይቆያል (#10654)። በሁለቱም ሁኔታዎች 5xx የማያረጋግጥ ውጤት ሆኖ ይቆያል፤ እምቢታ ፕሮክሲን ፈጽሞ አያስወግድም፣ አያሰናክልም ወይም እንደገና አያነቃም። |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | ቡሊያን | `false` | የጅማሬ DB ትክክለኛነት/ጤና ምርመራ እስኪጠናቀቅ ድረስ ጅማሬውን ከማገድ ይልቅ፣ አገልጋዩ ጥያቄዎችን መቀበል ከጀመረ በኋላ (በ`setImmediate` በኩል) ያካሂዱት (#13717)። በነባሪ ጠፍቷል፦ ጅማሬው ከዚህ PR በፊት እንደነበረው በትክክል ይታገዳል።                                                   |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` እና የቀድሞ ተለዋጭ ስሙ
> `INJECTION_GUARD_BLOCK_THRESHOLD` የ
> `INJECTION_GUARD_MODE`ን `block` ሁነታ ያስተካክላሉ፣ ነገር ግን በ
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts) የሚነበቡ ተራ የአካባቢ ተለዋዋጮች ናቸው፣
> የባህሪ መቆጣጠሪያዎች አይደሉም፦ የDB እሴት መተኪያም ሆነ የዳሽቦርድ ማብሪያ/ማጥፊያ የላቸውም።
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)ን ይመልከቱ።

> [!NOTE]
> የ`ዳግም ማስጀመር` አምድ `requiresRestart: true` ያላቸውን መቆጣጠሪያዎች ያመለክታል — እሴቱ
> ወዲያውኑ ይቀመጣል፣ ነገር ግን ተግባራዊ የሚሆነው ሂደቱ እንደገና ከተጫነ በኋላ ብቻ ነው። የEnum
> መቆጣጠሪያዎች ከተፈቀዱላቸው ስብስብ ውጭ ያለ ማንኛውንም እሴት አይቀበሉም (በአገልጋይ ወገን
> በ`setFeatureFlagOverride()` እና በREST `PUT` ተቆጣጣሪ ውስጥ ይረጋገጣል)።

---

## ጠቋሚዎችን ማብራትና ማጥፋት

### ዳሽቦርድ

ወደ **ዳሽቦርድ → ቅንብሮች → የባህሪ ጠቋሚዎች**
(`/dashboard/settings/feature-flags`) ይሂዱ። ሰንጠረዡ
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
የሚከተሉትን ይደግፋል፦

- በቁልፍ ወይም በመግለጫ **መፈለግ**፣ እና በምድብ **ማጣራት** (በተጨማሪም የተፈጠረ
  **ዳግም ማስጀመር ያስፈልገዋል** እይታ)።
- ለቡሊያን ጠቋሚዎች **ማብሪያ/ማጥፊያ** እና ለenum ጠቋሚዎች **ተቆልቋይ ምናሌ**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)።
- በእያንዳንዱ ጠቋሚ ላይ ውጤታማው እሴት ከየት እንደመጣ የሚያሳይ **የምንጭ ባጅ** — `DB`፣ `ENV`፣ ወይም `DEF`።
- ልዩ ቅንብሩን ለማስወገድ **ዳግም አስጀምር** አዝራር (`DB` ምንጭ ላላቸው ጠቋሚዎች ብቻ የሚታይ)፣
  እና ከታች **ሁሉንም ልዩ ቅንብሮች ዳግም አስጀምር** አዝራር።
- `requiresRestart` ያለው ጠቋሚ ሲቀየር **ሰርቨሩን ዳግም አስጀምር** ባነር።

### REST API

ሁሉም ክወናዎች በአንድ መስመር ብቻ ያልፋሉ፦
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)።
እያንዳንዱ ዘዴ የተረጋገጠ የዳሽቦርድ ክፍለ ጊዜ ይፈልጋል (ካልሆነ `401`)።

#### `GET /api/settings/feature-flags`

እያንዳንዱን ጠቋሚ ከውጤታማ እሴቱ፣ ምንጩ እና ማጠቃለያው ጋር ይመልሳል።

```jsonc
{
  "flags": [
    {
      "key": "REQUIRE_API_KEY",
      "label": "Require API Key",
      "description": "Require an API key for all incoming requests",
      "category": "security",
      "type": "boolean",
      "enumValues": null,
      "defaultValue": "false",
      "effectiveValue": "false",
      "source": "default", // "db" | "env" | "default"
      "requiresRestart": false,
      "warningLevel": "caution",
    },
    // ... ሁሉም 77 ጠቋሚዎች
  ],
  "summary": {
    "total": 56,
    "active": 0,
    "inactive": 0,
    "overriddenByDb": 0,
    "overriddenByEnv": 0,
  },
}
```

#### `PUT /api/settings/feature-flags`

አንድ ልዩ ቅንብር ያዘጋጁ ወይም ያስወግዱ። የጥያቄ አካል፦ `{ key: string; value?: string }`።
`value`ን አለማካተት ልዩ ቅንብሩን ያስወግዳል (የenv / default እሴቱን ይመልሳል)።

```bash
# የDB ልዩ ቅንብር አዘጋጅ
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# ልዩ ቅንብሩን አስወግድ ("value" የለም)
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

ምላሹ አዲሱን `effectiveValue`/`source`፣ `previousValue`/
`previousSource` እና `requiresRestart` መልሶ ያሳያል። ያልታወቁ ቁልፎች እና ከተፈቀደው ክልል ውጭ ያሉ የenum
እሴቶች በ`400` ውድቅ ይደረጋሉ።

#### `DELETE /api/settings/feature-flags`

**ሁሉንም** የDB ልዩ ቅንብሮች በአንድ ጊዜ ያጸዳል፣ እያንዳንዱን ጠቋሚ ወደ env / default
እሴቱ ይመልሳል። `{ cleared: <count>, message: "..." }`ን ይመልሳል።

> [!NOTE]
> `requiresRestart: true` ያላቸው ጠቋሚዎች ሥራ ላይ የሚውሉት ፕሮሰሱ ዳግም ከተጫነ በኋላ ብቻ ነው።
> የዳሽቦርዱ ዳግም ማስጀመሪያ ፍሰት `POST /api/restart`ን ይጠራል፣ ከዚያም ሰርቨሩ ዳግም እስኪነሳ ድረስ
> `GET /api/health/ping`ን በተደጋጋሚ ይፈትሻል።

---

## የአደጋ ጊዜ በጀት አማራጭ

`OMNIROUTE_EMERGENCY_FALLBACK` (ምድብ `runtime`፣ ነባሪ `true`) በ
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
ውስጥ ያለውን የአደጋ ጊዜ ነፃ አማራጭ መንገድ ይቆጣጠራል።
ሲነቃ፣ በጀታቸውን የጨረሱ ጥያቄዎች ሙሉ በሙሉ ከመክሸፍ ይልቅ ወደ ነፃ አማራጭ
አቅራቢ/ሞዴል ይመራሉ። ይህን ባህሪ ለማሰናከል እና በጀታቸውን የጨረሱ ጥያቄዎች
እንዲከሽፉ ለማድረግ፣ በዳሽቦርድ ማብሪያ/ማጥፊያ፣ በDB መሻር፣ ወይም በ
`OMNIROUTE_EMERGENCY_FALLBACK` የአካባቢ ተለዋዋጭ በኩል — ወደ `false` (ወይም `0`)
ያቀናብሩት። (በPRs #3741 / #3752 ውስጥ እንደ የዳሽቦርድ ማብሪያ/ማጥፊያ ቀርቧል።)

በዚህ አማራጭ የቀረበ ምላሽ
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>` ይይዛል፤ በዚህም
ደንበኛው `X-OmniRoute-Provider`ን ከጥያቄው ጋር ሳያነጻጽር ጥያቄው እንደገና መመራቱን
ማወቅ ይችላል። ይህ ራስጌ በሌሎች ምላሾች ሁሉ ላይ አይኖርም።

---

## በተጨማሪ ይመልከቱ

- [የአካባቢ ተለዋዋጮች ማጣቀሻ](./ENVIRONMENT.md) — አብዛኛዎቹ ጠቋሚዎች እዚያ የተመዘገበ ተመሳሳይ ስም ያለው የአካባቢ ተለዋዋጭ አላቸው (የDB መሻር ከእሱ ይቀድማል)።
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — ለእያንዳንዱ ጠቋሚ ትክክለኛው የመረጃ ምንጭ።
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — የመፍታት አመክንዮ (`resolveFeatureFlag`፣ `isFeatureFlagEnabled`፣
  `resolveAllFeatureFlags`)።
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — በ`key_value` ሰንጠረዥ
  `feature_flags` namespace ውስጥ የDB መሻርን በቋሚነት ማከማቸት።
