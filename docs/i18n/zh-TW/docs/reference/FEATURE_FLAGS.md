# Feature Flags (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇪🇹 [am](../../../am/docs/reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/reference/FEATURE_FLAGS.md)

---

> 無需重新部署即可變更 OmniRoute 行為的執行階段切換開關。
> 此處列出的每個旗標皆定義於
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> — 這是唯一的真實來源。儀表板與 REST API 皆讀取該檔案，
> 因此下表依其內容以 1:1 的方式產生。

---

## 什麼是功能旗標

功能旗標是具名的切換開關（布林值或列舉值），其值可在執行階段變更並
持久化至資料庫，無需重新部署程序。每個旗標皆由 `FeatureFlagDefinition`
描述，包含 `key`、`label`、`description`、`category`、`defaultValue`、
`type`，以及 `requiresRestart` 提示。

### 解析順序

旗標的**有效值**由
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) 依照以下
優先順序解析（順位最高者優先）：

1. **資料庫覆寫值** — 儲存於 `key_value` 資料表之
   `feature_flags` 命名空間下的值（透過儀表板或 REST API 設定）。
2. **環境變數** — `process.env[<KEY>]`，前提是已設定且非空值。
3. **定義預設值** — 來自 `featureFlagDefinitions.ts` 的 `defaultValue`。

當布林旗標的有效值為 `"true"`、`"1"` 或 `"yes"` 時，會被視為**已啟用**
（請參閱 `isFeatureFlagEnabled()`）。

> [!NOTE]
> 多數旗標也有一個記載於 [`ENVIRONMENT.md`](./ENVIRONMENT.md) 且**名稱相同**
> 的對應環境變數。旗標的資料庫覆寫值優先於該環境變數。具有
> `requiresRestart: true` 的旗標會立即持久化，但僅會在程序啟動時重新讀取
> — 切換此類旗標會在儀表板中顯示**「重新啟動伺服器」**橫幅。

---

## 旗標目錄

共 86 個旗標，分為 6 個類別。**預設值**是定義中的預設值 — 當沒有資料庫覆寫值，也沒有環境變數時
所使用的值。

### 安全性 (10)

| 索引鍵                                  | 類型   | 預設值   | 說明                                                                                                                                                                                                    |
| --------------------------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REQUIRE_API_KEY`                       | 布林值 | `false`  | 要求所有傳入請求都必須提供 API 金鑰。                                                                                                                                                                   |
| `INPUT_SANITIZER_ENABLED`               | 布林值 | `true`   | 對所有請求啟用輸入清理。                                                                                                                                                                                |
| `INJECTION_GUARD_MODE`                  | 列舉   | `off`    | 提示注入防護模式。可用值：`off`、`warn`、`block`、`redact`。                                                                                                                                            |
| `PII_REDACTION_ENABLED`                 | 布林值 | `false`  | 遮蔽請求中的個人識別資訊 (PII)（獨立於 `INPUT_SANITIZER_MODE`）。                                                                                                                                       |
| `PII_RESPONSE_SANITIZATION`             | 布林值 | `false`  | 清理提供者回應中的個人識別資訊 (PII)。                                                                                                                                                                  |
| `PII_RESPONSE_SANITIZATION_MODE`        | 列舉   | `redact` | PII 回應清理模式。可用值：`redact`、`warn`、`block`、`off`。                                                                                                                                            |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | 布林值 | `true`   | 舊版別名：會先讀取此旗標在儀表板切換開關中儲存的值，再讀取環境變數；任一來源中的值為 `false`、`0`、`no` 或 `off` 時，都會像 `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` 一樣，關閉對外 URL 防護的主機檢查。 |
| `ALLOW_API_KEY_REVEAL`                  | 布林值 | `false`  | 允許已通過驗證的儀表板使用者顯示已儲存的 API 金鑰，而不只是查看遮蔽後的值。                                                                                                                             |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | 布林值 | `false`  | 在 AUTH 日誌行中包含帳戶前綴（例如「使用 <provider> 帳戶：abc12345...」）。預設停用，以便在共用／多租戶程序日誌中遮蔽帳戶識別碼。此設定獨立於偵錯模式；切換偵錯模式不會顯示此資訊。                     |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | 布林值 | `false`  | 啟用 OIDC 時，停用密碼登入，讓使用者只能透過 OIDC 單一登入進行驗證。停用時（預設），密碼登入與 OIDC 均可使用。                                                                                          |

### 網路 (23)

| 鍵                                              | 類型    | 預設值  | 需重新啟動 | 說明                                                                                                                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------- | ------- | ------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ENABLE_TLS_FINGERPRINT`                        | 布林值  | `false` | ✓          | 啟用 TLS 指紋隱匿模式。                                                                                                                                                                                                                                                                                                                                                                    |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | 布林值  | `false` |            | 允許 /v1/audio/* 路由使用託管於 localhost 以外的 OpenAI 相容提供者節點。預設關閉 — 將音訊路由至遠端主機會改變對外連線身分，必須由操作人員明確決定。回送節點一律允許使用，不受影響。                                                                                                                                                                                                        |
| `RERANK_REMOTE_PROVIDER_NODES`                  | 布林值  | `false` |            | 允許 POST /v1/rerank（以及記憶引擎的回送重新排序步驟）使用託管於 localhost 以外的 OpenAI 相容提供者節點。預設關閉 — 路由至遠端主機會改變對外連線身分，必須由操作人員明確決定。回送節點一律允許使用；遠端節點也必須通過提供者的對外 URL 政策檢查。                                                                                                                                          |
| `PROXY_AUTO_SELECT_ENABLED`                     | 布林值  | `false` |            | 當連線未指派代理伺服器時，自動從登錄表中選取第一個可用的代理伺服器。預設關閉（否則登錄表中的任何代理伺服器都會成為全域備援 — #3332）。                                                                                                                                                                                                                                                     |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | 布林值  | `false` |            | 當代理伺服器可達性預先檢查失敗時，允許 OAuth 與提供者驗證流程略過固定指定的代理伺服器，改為直接連線。預設關閉，因為這可能會改變對外 IP。                                                                                                                                                                                                                                                   |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | 布林值  | `true`  |            | 多帳號輪替執行器發生網路例外（逾時、連線遭拒／重設）時，若失敗的帳號沒有專用代理伺服器，則套用短暫冷卻時間，並在該請求的後續處理中略過其他未使用代理伺服器的帳號，而非逐一重試。預設開啟（安全：不會改變對外 IP，只會降低共用對外連線帳號的延遲／冷卻風險）。停用後，將恢復在首次未使用代理伺服器的連線擲出例外時立即向上傳遞例外的行為。                                                  |
| `ROTATION_ATTRIBUTION`                          | 布林值  | `false` |            | Opencode 輪替會記錄由哪個帳號處理請求或哪個帳號遭略過（僅記錄遮蔽後的 ID，絕不記錄完整帳號 ID），並將代理伺服器日誌項目連結至對應請求，讓操作人員能區分遭略過的帳號與未使用的帳號。預設關閉。                                                                                                                                                                                              |
| `PROXY_SKIP_RECENTLY_FAILED`                    | 布林值  | `true`  |            | 代理伺服器集區與 opencode 的個別帳號輪替會在各處理程序的暫停期間內，停止再次使用剛失敗的代理伺服器（TCP 探測遭拒，或透過該代理伺服器收到 429）；每次重複失敗時，暫停期間會加倍，直到上限。不會寫入代理伺服器狀態；若所有候選項目都被暫時排除，選擇結果仍維持不變。預設開啟；設為 `false` 可恢復一般選擇行為。                                                                              |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | boolean | `false` |            | 對於依出口位址分配配額的提供者，若集區成員與近期遭拒絕的成員共用相同的觀測出口位址，則將其排序在健康成員之後。僅調整順序，絕不排除。需要啟用 PROXY_SKIP_RECENTLY_FAILED，以產生此功能讀取的拒絕訊號。預設關閉。                                                                                                                                                                            |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | boolean | `false` |            | 在儀表板的代理集區下方，顯示過去 24 小時內為其成員提供服務的觀測出口 IP 數量，以及使用這些 IP 的連線數量。此資訊為唯讀，根據代理日誌計算，絕不用於路由。預設關閉。                                                                                                                                                                                                                         |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | boolean | `false` |            | 接受操作人員為各集區成員推送的附日期觀測位址，並將其與讀取的日誌合併，用於顯示及集區排序。預設關閉：推送路由回傳 404，集區讀取的行為則與先前完全相同。                                                                                                                                                                                                                                     |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | boolean | `false` |            | 對於 OpenCode 執行器，監控串流 Responses 回覆的第一個主體位元組（時間窗：`RESPONSES_FIRST_BYTE_TIMEOUT_MS`，預設為 `15000`）。若 2xx Responses 串流在時間窗結束後仍未傳送資料，則視為停滯：該帳號進入冷卻期，並將請求切換至下一個帳號一次；若再次停滯，則立即失敗。預設關閉：停滯的串流維持目前的等待行為，直到串流就緒逾時。                                                              |
| `OPENCODE_USER_BLOCKED_ROTATION`                | boolean | `false` |            | OpenCode 執行器：收到帶有 `user_blocked` 拒絕訊息的 403/451 時（非地理位置限制，也非 Cloudflare 指紋拒絕），讓遭拒絕的帳號進入冷卻期，並切換至下一個帳號，每個請求最多切換一次；若再次遭拒絕，則原樣回傳，不標記為成功。預設關閉：繞過上游使用者封鎖的路由行為可能被視為規避，並使封鎖標記擴散至整個帳號群。                                                                               |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | boolean | `false` |            | OpenCode 帳號輪替：連續發生兩次暫時性上游失敗（5xx 或空白 400）後，在切換至下一個帳號前暫停 — 初始為 1.5 秒，之後每多一次失敗便加倍，每次暫停上限為 6 秒，每個請求累計上限為 10 秒；用戶端中斷連線時略過暫停；等待前會先釋放失敗回應的主體。預設關閉：容錯移轉維持立即執行。                                                                                                               |
| `OPENCODE_PARK_AND_RESUME`                      | boolean | `false` |            | OpenCode 帳號輪替：重複收到暫時性 429（或新出現集區負載吃緊標記）後，暫存請求並維持心跳，接著重播一段最多依序嘗試 3 個帳號的受限流程，而非將請求分散至整個帳號群。預設關閉：每次收到 429 都會切換至下一個帳號，與先前完全相同。                                                                                                                                                            |
| `STREAM_READINESS_STALL_RETRY`                  | boolean | `false` |            | 串流聊天：當第一個上游回應主體在產生可用事件前停滯時，透過相同路由路徑，以相同的就緒時間預算進行一次受限的第二次嘗試，且不對帳號施加懲罰。預設關閉：第一個回應主體停滯時，請求直接失敗，不進行重試。                                                                                                                                                                                       |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | boolean | `false` |            | 對於經轉換的串流回合，當上游回合未包含可用內容（僅有推理的完成回應，或沒有任何有用的區塊）時，在向用戶端提供任何內容之前，透過一般憑證路徑進行有限次重試（最多 `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX` 次）。預設關閉：空白回合維持目前的行為（空白 200 或內容為空的 502）。                                                                                                                |
| `OPENCODE_POOL_RESELECT`                        | boolean | `false` |            | OpenCode 帳號輪替：在環境集區情境下，未設定代理的帳號收到依出口位址分配配額的提供者所回傳的 429 後，向連線集區要求另一個成員以進行下一次嘗試，而非重試相同的出口位址。僅調整順序，絕不排除：集區耗盡時維持目前的行為。預設關閉：每次收到 429 都會切換至下一個帳號，與先前完全相同。                                                                                                        |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | 布林值  | `false` |            | OpenCode 輪替：在帳戶輪替批次中遇到第一個被判定為真正速率限制的 429 時停止（具有可解析的 `Retry-After`，或回應主體指出速率／用量限制），並原樣傳回該上游 429。未分類的 429 會繼續輪替。預設關閉：免費方案按出口 IP 限制用量 (#9611)，因此每個 429 都會觸發輪替，且批次耗盡所有帳戶後會傳回最後一個上游 429。                                                                               |
| `MITM_DISABLE_TLS_VERIFY`                       | 布林值  | `false` | ✓          | 停用 MITM 代理的 TLS 憑證驗證。**危險。**                                                                                                                                                                                                                                                                                                                                                  |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | 布林值  | `false` |            | 在提供者 URL 驗證、模型探索、提供者節點基礎 URL 及代理備援測試中，關閉對外 URL 防護機制的主機檢查（包括雲端中繼資料封鎖），並允許私有網路 webhook 目標。在驗證、探索及提供者節點流程中，本機與區域網路 URL 預設已允許通過 (`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`)；代理備援測試與私有網路 webhook 目標僅檢查 `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`，並在其關閉時封鎖本機／區域網路主機。 |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | 布林值  | `true`  |            | 允許位於本機／私有位址（127.0.0.1、localhost、區域網路）的提供者 URL。預設開啟（本機優先）：此時防護機制會封鎖雲端中繼資料端點（整個 169.254.0.0/16 網段及已知的中繼資料主機名稱）。停用後會採用嚴格的僅限公用網路模式：私有與迴路主機也會遭到封鎖。                                                                                                                                       |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | 布林值  | `false` | ✓          | 啟用 Claude Code 相容提供者模式。                                                                                                                                                                                                                                                                                                                                                          |

### 政策 (7)

| 鍵                              | 類型   | 預設值        | 說明                                                                                                                                                                                                                              |
| ------------------------------- | ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNPRICED_USAGE_BUDGET_POLICY`  | 列舉   | `fail_closed` | 每個金鑰的每日／每週美元限額如何處理提供者／模型沒有定價資料列的用量。`fail_closed`（預設）會將該期間標記為已超限 (#12341)；`count_as_zero` 會將其計為 $0，並繼續對已定價的支出執行限額。可用值：`fail_closed`、`count_as_zero`。 |
| `TOOL_POLICY_MODE`              | 列舉   | `disabled`    | 工具使用政策的執行模式。可用值：`disabled`、`warn`、`block`。                                                                                                                                                                     |
| `RATE_LIMIT_AUTO_ENABLE`        | 布林值 | `false`       | 透過環境變數強制開啟／關閉自動啟用的速率限制安全機制。執行階段僅讀取環境變數：未設定時會遵循儀表板設定（預設開啟），而非此目錄中的預設值。                                                                                        |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | 布林值 | `false`       | 對直接單一模型請求，略過 OmniRoute 的本機上下文視窗／最大輸入 token 數檢查。上游限制仍然適用。                                                                                                                                    |
| `CAPABILITY_FILTER_ENABLED`     | 布林值 | `false`       | 當目標模型缺少必要能力（視覺、工具、結構化輸出、上下文視窗）時，在派送前拒絕請求。保護繞過組合層相容性篩選器的直接單一提供者請求。                                                                                                |
| `USAGE_LIMIT_IGNORE_UNPRICED`   | 布林值 | `false`       | 在每個金鑰的美元用量配額中，將未定價模型的用量計為 $0，而非視為配額已超限。預設關閉：未定價模型或路由別名可能隱藏實際支出，因此配額會採取保守封鎖策略。                                                                           |
| `RADAR_ENABLED`                 | 布林值 | `false`       | 啟用 OmniRoute Radar 模組（目錄資訊流畫面與同步）。預設關閉；啟用後僅會解鎖使用者介面 — 資料同步仍須另外選擇啟用。                                                                                                                |

當明確設定 `UNPRICED_USAGE_BUDGET_POLICY` 時（資料庫覆寫設定優先於環境設定），
它的優先順序高於 `USAGE_LIMIT_IGNORE_UNPRICED`。若未明確設定列舉值，
上游的布林停用選項會選擇 `count_as_zero`；否則預設為 `fail_closed`。
列舉值無效或無法讀取功能旗標儲存空間時，一律採取封閉式失敗處理。這兩種停用選項都不會放寬
對已定價支出的限制，也不會放行定價查詢失敗的情況。限制執行機制與管理員報表會解析出
相同的有效政策。

### 執行階段 (36)

| 鍵                                          | 類型    | 預設值  | 重新啟動 | 說明                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------- | ------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | 布林值  | `true`  |          | 當組合路由切換模型時，產生並注入對話摘要。停用後，模型切換將獨立處理，並阻止所有現有及未來組合的背景交接請求。                                                                                                                                                                                                                                                                                                        |
| `REASONING_REPLAY_ENABLED`                  | 布林值  | `true`  |          | 在多輪對話中快取並重播模型推理內容。停用後，將停止儲存及重新注入推理內容。                                                                                                                                                                                                                                                                                                                                            |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | 布林值  | `true`  |          | 將 Responses API 直通串流轉送至用戶端之前，移除內部評論階段的輸出項目。停用後，即可接收上游的原始評論內容。                                                                                                                                                                                                                                                                                                           |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | 布林值  | `false` |          | 強制對 MCP 工具存取套用範圍限制。                                                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | 布林值  | `false` |          | 壓縮 MCP 工具說明，以減少詞元用量。                                                                                                                                                                                                                                                                                                                                                                                   |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | 布林值  | `false` |          | 在執行階段啟用背景工作處理。                                                                                                                                                                                                                                                                                                                                                                                          |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | 布林值  | `false` | ✓        | 停用所有背景服務（配額更新、同步等）。                                                                                                                                                                                                                                                                                                                                                                                |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | 布林值  | `false` |          | 信任專案層級的 RTK 篩選器，不進行驗證。                                                                                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | 布林值  | `true`  | ✓        | 在匯入時啟動即時儀表板 WebSocket 伺服器（預設連接埠為 20132）。                                                                                                                                                                                                                                                                                                                                                       |
| `OMNIROUTE_CODEX_WS_ENABLED`                | 布林值  | `true`  |          | 允許 Codex 使用 Responses-over-WebSocket 傳輸方式。停用時，Codex 會改用 HTTP Responses。                                                                                                                                                                                                                                                                                                                              |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | 布林值  | `true`  |          | 允許 Codex 使用本機 app-server WebSocket JSON-RPC 傳輸方式（codexTransport=app-server）。停用時，選擇使用 app-server 的連線會改用 Codex 的其他傳輸方式。                                                                                                                                                                                                                                                              |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | 布林值  | `true`  |          | 將預算已耗盡的請求路由至緊急備援的免費提供者／模型。（請參閱下方的[預算耗盡時的緊急備援](#emergency-budget-fallback)。）                                                                                                                                                                                                                                                                                              |
| `STREAM_RECOVERY_ENABLED`                   | 布林值  | `false` |          | 啟用透明的早期重試機制，在任何回應位元組傳送至用戶端之前，重試遭截斷的上游 SSE 串流。                                                                                                                                                                                                                                                                                                                                 |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | 布林值  | `false` |          | 允許串流復原機制在位元組已傳送至用戶端後，重新發出請求並接合回應。                                                                                                                                                                                                                                                                                                                                                    |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |          | 確保串流中途的接續處理不會影響工具呼叫安全：一旦已發出工具呼叫（仍在進行中，或已以 finish_reason tool_calls 結束），絕不恢復遭截斷的串流；並在一次空白接續後關閉，而非耗盡整個預算。關閉：維持已發布版本的行為。                                                                                                                                                                                                      |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |          | 當 SSE 串流在發出任何有用的訊框前關閉，且同一連線的有限重試次數已耗盡時，容錯切換至同級連線一次；若沒有可用的同級連線，則傳回原始的 `STREAM_EARLY_EOF` 502。預設關閉：在同一連線重試後，提早 EOF 仍會導致終止。                                                                                                                                                                                                       |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |          | 在 `/v1/models` 回應中包含適合顯示的名稱欄位。若用戶端僅預期模型 ID，請停用此選項。                                                                                                                                                                                                                                                                                                                                   |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |          | 控制 /v1/models 中模型 ID 的前綴方式。'dual'（預設）會同時輸出別名與標準提供者 ID 前綴，以維持回溯相容性。'alias' 僅輸出簡短的別名前綴（例如 ds-web/model，而非 deepseek-web/model）。'canonical' 僅輸出完整的提供者 ID 前綴。可用值：`dual`、`alias`、`canonical`。                                                                                                                                                  |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |          | 啟用定期同步 Arena AI 排行榜 ELO，以供模型智慧能力排名使用。                                                                                                                                                                                                                                                                                                                                                          |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |          | 在 `/v1/models` 中公布 `claude/<provider>/<model>` 鏡像 ID，讓 Claude Code 閘道的模型探索列出非 Claude 模型。這是三級閘控的全域層級（環境變數優先於儀表板覆寫設定）。請參閱 [Claude Code 設定](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)。                                                                                                             |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |          | no-think/<provider>/<model> 閘道別名的總開關。開啟（預設）：/v1/models 會為每個符合條件且具備思考能力的 Claude 模型公布不進行思考的變體，而請求中傳送的 no-think/ ID 會解析回實際模型，並抑制推理。關閉：不公布任何變體，且 no-think/ ID 會被視為一般未知模型 ID。開啟時，各模型的 ModelSpec.noThinkingAlias 啟用／停用設定仍然適用。                                                                                 |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |          | 停用在 /v1/models 目錄中產生思考層級變體（例如 -low、-medium、-high）。                                                                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | boolean | `false` | ✓        | 啟用依租戶調整的自適應虛擬准入通道，以派送至提供者 (#9654)：單一租戶的突發流量不再導致其他租戶收到 503。OMNIROUTE_CHAT_VIRTUAL_LANES 環境變數優先於此儀表板覆寫設定；變更會在伺服器重新啟動時生效。                                                                                                                                                                                                                   |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | boolean | `false` |          | 若模型的標準所屬提供者沒有有效憑證，但具有有效憑證的透傳閘道可將請求路由至該模型，則在 /v1/models 上公布其 <gateway-alias>/<model> 鏡像 ID。警告：全域啟用時，會為所有用戶端新增目錄項目。                                                                                                                                                                                                                            |
| `NEWAPI_AGGREGATOR_BALANCE`                 | boolean | `false` |          | 為相容於 New-API / One-API / Sub2API 聚合器的節點啟用餘額偵測。啟用後，已設定聚合器旗標的相容節點會在儀表板及配額預檢路由中回報其餘額。                                                                                                                                                                                                                                                                               |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | boolean | `false` |          | 持續執行由伺服器管理的非串流工具呼叫，直到模型傳回用戶端可用的回應。                                                                                                                                                                                                                                                                                                                                                  |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | boolean | `false` |          | 搜尋統計與最近搜尋僅計入仍有有效連線的提供者（duckduckgo-free 等無需金鑰的提供者一律計入）。關閉時，會保留所有具有提供者 ID 的既存搜尋資料列。                                                                                                                                                                                                                                                                        |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | boolean | `false` |          | 儀表板提供者頁面：僅根據提供者實際支援的訊號顯示「免費」徽章 — 不再使用顯示名稱啟發式判斷、非布林值的免費欄位，以及沒有已記載免費方案的已註冊提供者之 :free 後綴。關閉時，沿用原有的徽章規則。                                                                                                                                                                                                                        |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | boolean | `false` |          | 對於彙整後的 429/503 無法使用回應，若沒有已知的明確未來重試時間，則省略 `Retry-After`（而非設定人為產生的 1 秒），新增 `error.retry_after_provenance`（`signal` \| `none`），並允許組合耗盡處理路徑從上游的 JSON 與純文字回應本文中讀取自然語言重試提示。此欄位只會出現在由 `unavailableResponse()` 建立的回應中；其他 429/503 回應本文維持不變。                                                                     |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | boolean | `false` |          | 當標記為僅在配額耗盡時才回退的 `priority` 組合目標，因可證明與配額無關的原因（提供者斷路器開啟、預測延遲略過）而使組合停止時，回傳 502，而非看似配額問題的 503。因鎖定、冷卻、無法使用、耗盡及並行上限而停止時，仍回傳 503。                                                                                                                                                                                          |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | boolean | `false` |          | 單純的 Mistral 401（`{"detail":"Unauthorized"}`，沒有明確的驗證訊號）在金鑰遭撤銷與配額耗盡時完全相同。啟用後，會讓連線進入冷卻狀態，而非將其擱置為 `expired`，每個連線每小時最多 3 次；下一次便會將其擱置，因此遭撤銷的金鑰最終仍會被停用。預設停用：每次單純的 Mistral 401 都會如以往一樣將連線擱置。                                                                                                               |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | boolean | `false` |          | 註冊 xai-oauth（xao）與 grok-cli 圖像路由，並將 OpenAI 的 high/hd 品質對應至 xAI 的 medium。預設停用：使用 API 金鑰的 xAI 圖像路徑仍沿用現有的 OpenAI 相容請求，且不會註冊訂閱路由。                                                                                                                                                                                                                                  |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | boolean | `true`  |          | 使用 OAuth bearer 權杖，從 https://api.x.ai/v1/models 為 xai-oauth 連線擷取即時 xAI 模型目錄，而非使用固定的靜態初始資料。預設啟用。將此旗標設為 false 即可繼續提供靜態初始資料。探索路由遇到 HTTP 失敗時會回退至初始資料；旗標讀取函式本身不會發出 HTTP 請求。                                                                                                                                                       |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | boolean | `false` |          | 允許自動清理作業刪除已進入終止狀態（已完成／失敗／已取消／已過期）且存留時間超過 `OMNIROUTE_BATCH_RETENTION_DAYS` 的 Batch API 工作及其逐行檢查點，並清除已超過各自 `expires_at` 的上傳檔案之 BLOB 內容。預設停用：在操作人員主動啟用前，所有現有安裝都會如以往一樣保留這些資料。由操作人員觸發的 `DELETE /api/v1/batches/delete-completed` 路由在任何設定下都不受影響 — 它是獨立且無條件生效的公開 API 契約。        |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | boolean | `false` |          | 在選取帳號的請求之串流生命週期內，保留所選的 Antigravity 帳號，避免並行重試或憑證交接再次選取已分配給進行中串流的帳號。保留範圍限定於（連線、可呼叫的上游模型），因此同一個帳號仍可同時服務兩個不同模型。當該模型的所有合資格帳號都已出租時，請求會傳回結構化的 503 `antigravity_pool_busy`，並附上有界限的 `Retry-After`，而非繼續將請求堆疊至忙碌的帳號。預設停用：帳號選取方式與以往完全相同，且不會進行任何保留。 |
| `COMBO_AUTO_PRUNE_STALE_STEPS`              | boolean | `false` |          | 成功依據具權威性的即時目錄同步模型後，移除綁定至目錄中已不再列出之模型的組合步驟，並為每個移除的步驟建立一筆稽核紀錄。同步失敗、降級或僅同步免費模型時絕不清除，也絕不會清空組合。預設停用：僅標記過時步驟。                                                                                                                                                                                                          |

### CLI (5)

| 鍵                                    | 類型    | 預設值  | 重新啟動 | 說明                                                                                                                                                             |
| ------------------------------------- | ------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLI_COMPAT_ALL`                      | boolean | `false` | ✓        | 為所有 CLI 用戶端啟用相容模式。                                                                                                                                  |
| `MODEL_ALIAS_COMPAT_ENABLED`          | boolean | `false` |          | 啟用模型別名相容層。                                                                                                                                             |
| `PRICING_SYNC_ENABLED`                | boolean | `false` |          | 啟用定價資料自動同步（也需要設定 `PRICING_SYNC_ENABLED` 環境變數）。                                                                                             |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | boolean | `false` |          | 在提供者模型同步後，自動根據即時目錄寫入（或重寫）~/.codex/*.config.toml 設定檔。絕不變更目前使用中或預設的 Codex 設定。預設停用。                               |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | boolean | `false` |          | 在提供者模型同步後，自動根據即時目錄寫入（或重寫）~/.claude/profiles/<name>/settings.json Claude Code 設定檔。絕不變更目前使用中或預設的 Claude 設定。預設停用。 |

### 健康狀態 (5)

| 鍵                                        | 類型    | 預設值  | 說明                                                                                                                                                                                                                          |
| ----------------------------------------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | boolean | `false` | 停用本機執行個體的健康檢查端點。                                                                                                                                                                                              |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | boolean | `false` | 停用權杖驗證健康檢查。                                                                                                                                                                                                        |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | boolean | `false` | 啟用技能沙箱環境中的網路存取。                                                                                                                                                                                                |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | boolean | `false` | 在代理伺服器健康狀態掃描中，若探測遭目標拒絕（401/403/429），則重設代理伺服器的連續失敗次數。預設停用：遭拒絕時維持中立判定（#10654）。無論此設定為何，5xx 皆視為無法判定；遭拒絕絕不會導致代理伺服器遭移除、停用或重新啟用。 |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | boolean | `false` | 在伺服器開始接受請求後（透過 `setImmediate`），才執行啟動時的資料庫完整性／健康檢查，而不是阻塞啟動直到檢查完成（#13717）。預設停用：啟動時的阻塞行為與此 PR 之前完全相同。                                                   |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` 及其舊版別名
> `INJECTION_GUARD_BLOCK_THRESHOLD` 用於調整
> `INJECTION_GUARD_MODE` 的 `block` 模式，但它們是由
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts)
> 讀取的一般環境變數，而非功能旗標：它們沒有資料庫覆寫設定，也沒有儀表板切換開關。請參閱
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)。

> [!NOTE]
> `重新啟動` 欄標示具有 `requiresRestart: true` 的旗標 — 其值會
> 立即儲存，但只有在程序重新載入後才會生效。列舉
> 旗標會拒絕允許集合以外的任何值（在伺服器端的
> `setFeatureFlagOverride()` 與 REST `PUT` 處理常式中皆會進行驗證）。

---

## 切換功能旗標

### 儀表板

導覽至 **儀表板 → 設定 → 功能旗標**
(`/dashboard/settings/feature-flags`)。該網格
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
支援：

- 依據鍵或描述進行**搜尋**，並依類別進行**篩選**（加上一個合成的**需要重新啟動**視圖）。
- 布林旗標的**切換開關**和列舉旗標的**下拉式選單**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)。
- 每個旗標的**來源標籤** — `DB`、`ENV` 或 `DEF` — 顯示有效值來自何處。
- **重設**按鈕（僅針對 `DB` 來源的旗標顯示）以取消覆寫，以及底部的**重設所有覆寫**按鈕。
- 當 `requiresRestart` 旗標變更時，會顯示**重新啟動伺服器**橫幅。

### REST API

所有操作都透過單一路徑進行：
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)。
每個方法都需要經過驗證的儀表板會話（否則為 `401`）。

#### `GET /api/settings/feature-flags`

返回每個旗標及其有效值、來源和摘要。

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
    // ... 所有 77 個旗標
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

設定或移除單一覆寫。請求主體：`{ key: string; value?: string }`。
省略 `value` 會移除覆寫（恢復環境變數 / 預設值）。

```bash
# 設定一個 DB 覆寫
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# 移除覆寫（無 "value"）
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

回應會回顯新的 `effectiveValue`/`source`、`previousValue`/
`previousSource` 和 `requiresRestart`。未知鍵和超出範圍的列舉值將被 `400` 拒絕。

#### `DELETE /api/settings/feature-flags`

一次清除**所有** DB 覆寫，將每個旗標恢復為其環境變數 / 預設值。返回 `{ cleared: <count>, message: "..." }`。

> [!注意]
> 帶有 `requiresRestart: true` 的旗標僅在程序重新載入後生效。
> 儀表板的重新啟動流程會呼叫 `POST /api/restart`，然後輪詢
> `GET /api/health/ping` 直到伺服器恢復運作。

---

## 緊急預算備援

`OMNIROUTE_EMERGENCY_FALLBACK`（類別為 `runtime`，預設值為 `true`）控制
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
中的緊急免費備援路徑。啟用時，預算耗盡的請求會被路由至免費的備援
提供者/模型，而非直接失敗。若要停用此行為，並讓預算耗盡的請求
失敗，請透過儀表板切換開關、資料庫覆寫或
`OMNIROUTE_EMERGENCY_FALLBACK` 環境變數，將其設為 `false`（或 `0`）。
（已在 PR #3741 / #3752 中以儀表板切換開關的形式提供。）

由此備援機制提供的回應會帶有
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>`，
因此用戶端無須將 `X-OmniRoute-Provider` 與其請求進行比對，即可得知請求已被重新路由。
其他所有回應均不會包含此標頭。

---

## 另請參閱

- [環境變數參考](./ENVIRONMENT.md) — 大多數旗標都有一個同名的環境變數記錄於此（DB 覆寫的優先順序高於該環境變數）。
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — 所有旗標的權威來源。
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — 解析邏輯（`resolveFeatureFlag`、`isFeatureFlagEnabled`、
  `resolveAllFeatureFlags`）。
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — 在 `key_value` 資料表的 `feature_flags` 命名空間中持久儲存 DB 覆寫。
