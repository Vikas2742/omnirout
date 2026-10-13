# Feature Flags (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../reference/FEATURE_FLAGS.md) · 🇪🇹 [am](../../../am/docs/reference/FEATURE_FLAGS.md) · 🇸🇦 [ar](../../../ar/docs/reference/FEATURE_FLAGS.md) · 🇦🇿 [az](../../../az/docs/reference/FEATURE_FLAGS.md) · 🇧🇬 [bg](../../../bg/docs/reference/FEATURE_FLAGS.md) · 🇧🇩 [bn](../../../bn/docs/reference/FEATURE_FLAGS.md) · 🇧🇦 [bs](../../../bs/docs/reference/FEATURE_FLAGS.md) · 🇨🇿 [cs](../../../cs/docs/reference/FEATURE_FLAGS.md) · 🇩🇰 [da](../../../da/docs/reference/FEATURE_FLAGS.md) · 🇩🇪 [de](../../../de/docs/reference/FEATURE_FLAGS.md) · 🇬🇷 [el](../../../el/docs/reference/FEATURE_FLAGS.md) · 🇪🇸 [es](../../../es/docs/reference/FEATURE_FLAGS.md) · 🇪🇪 [et](../../../et/docs/reference/FEATURE_FLAGS.md) · 🇮🇷 [fa](../../../fa/docs/reference/FEATURE_FLAGS.md) · 🇫🇮 [fi](../../../fi/docs/reference/FEATURE_FLAGS.md) · 🇫🇷 [fr](../../../fr/docs/reference/FEATURE_FLAGS.md) · 🇮🇪 [ga](../../../ga/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [gu](../../../gu/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ha](../../../ha/docs/reference/FEATURE_FLAGS.md) · 🇮🇱 [he](../../../he/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [hi](../../../hi/docs/reference/FEATURE_FLAGS.md) · 🇭🇷 [hr](../../../hr/docs/reference/FEATURE_FLAGS.md) · 🇭🇺 [hu](../../../hu/docs/reference/FEATURE_FLAGS.md) · 🇦🇲 [hy](../../../hy/docs/reference/FEATURE_FLAGS.md) · 🇮🇩 [id](../../../id/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [ig](../../../ig/docs/reference/FEATURE_FLAGS.md) · 🇮🇹 [it](../../../it/docs/reference/FEATURE_FLAGS.md) · 🇯🇵 [ja](../../../ja/docs/reference/FEATURE_FLAGS.md) · 🇬🇪 [ka](../../../ka/docs/reference/FEATURE_FLAGS.md) · 🇰🇭 [km](../../../km/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [kn](../../../kn/docs/reference/FEATURE_FLAGS.md) · 🇰🇷 [ko](../../../ko/docs/reference/FEATURE_FLAGS.md) · 🇱🇹 [lt](../../../lt/docs/reference/FEATURE_FLAGS.md) · 🇱🇻 [lv](../../../lv/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ml](../../../ml/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [mr](../../../mr/docs/reference/FEATURE_FLAGS.md) · 🇲🇾 [ms](../../../ms/docs/reference/FEATURE_FLAGS.md) · 🇲🇹 [mt](../../../mt/docs/reference/FEATURE_FLAGS.md) · 🇲🇲 [my](../../../my/docs/reference/FEATURE_FLAGS.md) · 🇳🇵 [ne](../../../ne/docs/reference/FEATURE_FLAGS.md) · 🇳🇱 [nl](../../../nl/docs/reference/FEATURE_FLAGS.md) · 🇳🇴 [no](../../../no/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [or](../../../or/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [pa](../../../pa/docs/reference/FEATURE_FLAGS.md) · 🇵🇭 [phi](../../../phi/docs/reference/FEATURE_FLAGS.md) · 🇵🇱 [pl](../../../pl/docs/reference/FEATURE_FLAGS.md) · 🇵🇹 [pt](../../../pt/docs/reference/FEATURE_FLAGS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/reference/FEATURE_FLAGS.md) · 🇷🇴 [ro](../../../ro/docs/reference/FEATURE_FLAGS.md) · 🇷🇺 [ru](../../../ru/docs/reference/FEATURE_FLAGS.md) · 🇱🇰 [si](../../../si/docs/reference/FEATURE_FLAGS.md) · 🇸🇰 [sk](../../../sk/docs/reference/FEATURE_FLAGS.md) · 🇸🇮 [sl](../../../sl/docs/reference/FEATURE_FLAGS.md) · 🇷🇸 [sr](../../../sr/docs/reference/FEATURE_FLAGS.md) · 🇸🇪 [sv](../../../sv/docs/reference/FEATURE_FLAGS.md) · 🇰🇪 [sw](../../../sw/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [ta](../../../ta/docs/reference/FEATURE_FLAGS.md) · 🇮🇳 [te](../../../te/docs/reference/FEATURE_FLAGS.md) · 🇹🇭 [th](../../../th/docs/reference/FEATURE_FLAGS.md) · 🇹🇷 [tr](../../../tr/docs/reference/FEATURE_FLAGS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/reference/FEATURE_FLAGS.md) · 🇵🇰 [ur](../../../ur/docs/reference/FEATURE_FLAGS.md) · 🇺🇿 [uz](../../../uz/docs/reference/FEATURE_FLAGS.md) · 🇻🇳 [vi](../../../vi/docs/reference/FEATURE_FLAGS.md) · 🇳🇬 [yo](../../../yo/docs/reference/FEATURE_FLAGS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/reference/FEATURE_FLAGS.md)

---

> 无需重新部署即可更改 OmniRoute 行为的运行时开关。
> 此处列出的每个标志均定义于
> [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
> ——这是唯一事实来源。仪表板和 REST API 都从
> 该文件读取，因此下表按 1:1 的对应关系生成。

---

## 什么是功能标志

功能标志是一种具名开关（布尔值或枚举值），其值可在运行时更改并持久化到数据库中，无需重新部署进程。每个标志均由一个 `FeatureFlagDefinition` 描述，其中包含 `key`、`label`、`description`、`category`、`defaultValue`、`type` 和 `requiresRestart` 提示。

### 解析顺序

标志的**有效值**由
[`resolveFeatureFlag()`](../../src/shared/utils/featureFlags.ts) 按以下优先级解析（优先级最高者生效）：

1. **数据库覆盖值**——存储在 `key_value` 表的
   `feature_flags` 命名空间中的值（通过仪表板或 REST API 设置）。
2. **环境变量**——`process.env[<KEY>]`，前提是已设置且非空。
3. **定义默认值**——`featureFlagDefinitions.ts` 中的 `defaultValue`。

当布尔标志的有效值为 `"true"`、`"1"` 或 `"yes"` 时，该标志被视为**已启用**
（参见 `isFeatureFlagEnabled()`）。

> [!NOTE]
> 大多数标志还有一个在 [`ENVIRONMENT.md`](./ENVIRONMENT.md) 中记录的**同名**
> 环境变量。标志的数据库覆盖值优先于该环境变量。具有
> `requiresRestart: true` 的标志会立即持久化，但仅在进程启动时重新读取
> ——切换该标志后，仪表板中会显示**“重启服务器”**横幅。

---

## 标志目录

共 86 个标志，分为 6 个类别。**默认值**是定义中的默认值——即
未设置数据库覆盖值或环境变量时使用的值。

### 安全 (10)

| 键                                      | 类型   | 默认值   | 描述                                                                                                                                                                                                    |
| --------------------------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `REQUIRE_API_KEY`                       | 布尔值 | `false`  | 要求所有传入请求提供 API 密钥。                                                                                                                                                                         |
| `INPUT_SANITIZER_ENABLED`               | 布尔值 | `true`   | 为所有请求启用输入净化。                                                                                                                                                                                |
| `INJECTION_GUARD_MODE`                  | 枚举   | `off`    | 提示注入防护模式。可选值：`off`、`warn`、`block`、`redact`。                                                                                                                                            |
| `PII_REDACTION_ENABLED`                 | 布尔值 | `false`  | 隐去请求中的个人身份信息（PII）（独立于 `INPUT_SANITIZER_MODE`）。                                                                                                                                      |
| `PII_RESPONSE_SANITIZATION`             | 布尔值 | `false`  | 净化提供者响应中的个人身份信息（PII）。                                                                                                                                                                 |
| `PII_RESPONSE_SANITIZATION_MODE`        | 枚举   | `redact` | 响应中个人身份信息（PII）的净化模式。可选值：`redact`、`warn`、`block`、`off`。                                                                                                                         |
| `OUTBOUND_SSRF_GUARD_ENABLED`           | 布尔值 | `true`   | 旧版别名：优先读取在仪表板上为此标志的开关保存的值，然后才读取环境变量；任一来源中的 `false`、`0`、`no` 或 `off` 都会关闭出站 URL 防护的主机检查，效果与 `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS` 相同。 |
| `ALLOW_API_KEY_REVEAL`                  | 布尔值 | `false`  | 允许已通过身份验证的仪表板用户查看已存储的 API 密钥明文，而不只是看到掩码值。                                                                                                                           |
| `AUTH_LOG_INCLUDE_ACCOUNT_ID`           | 布尔值 | `false`  | 在 AUTH 日志行中包含账户前缀（例如“使用 <provider> 账户：abc12345...”）。默认禁用，以便在共享/多租户进程日志中隐去账户标识符。独立于调试模式；切换调试模式不会显示此信息。                              |
| `OMNIROUTE_OIDC_DISABLE_PASSWORD_LOGIN` | 布尔值 | `false`  | 启用 OIDC 时，禁用密码登录，使用户只能通过 OIDC 单点登录进行身份验证。禁用此标志时（默认），密码登录和 OIDC 均可用。                                                                                    |

### 网络 (23)

| 键                                              | 类型    | 默认值  | 需要重启 | 描述                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------- | ------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ENABLE_TLS_FINGERPRINT`                        | 布尔值  | `false` | ✓        | 启用 TLS 指纹隐蔽模式。                                                                                                                                                                                                                                                                                                                                                     |
| `AUDIO_REMOTE_PROVIDER_NODES`                   | 布尔值  | `false` |          | 允许 /v1/audio/* 路由使用托管在 localhost 之外的 OpenAI 兼容提供者节点。默认关闭 — 将音频路由到远程主机会改变出口身份，必须由运维人员明确决定。始终允许使用回环节点，且其不受影响。                                                                                                                                                                                         |
| `RERANK_REMOTE_PROVIDER_NODES`                  | 布尔值  | `false` |          | 允许 POST /v1/rerank（以及记忆引擎的回环重排序步骤）使用托管在 localhost 之外的 OpenAI 兼容提供者节点。默认关闭 — 路由到远程主机会改变出口身份，必须由运维人员明确决定。始终允许使用回环节点；远程节点还必须通过提供者出站 URL 策略检查。                                                                                                                                   |
| `PROXY_AUTO_SELECT_ENABLED`                     | 布尔值  | `false` |          | 当连接未分配代理时，自动从注册表中选择第一个可用代理。默认关闭（否则，注册表中的任何代理都会成为全局回退选项 — #3332）。                                                                                                                                                                                                                                                    |
| `OMNIROUTE_CONTROL_PLANE_PROXY_DIRECT_FALLBACK` | 布尔值  | `false` |          | 当代理可达性预检查失败时，允许 OAuth 和提供者验证流程绕过固定代理并直接连接。默认关闭，因为这可能改变出口 IP。                                                                                                                                                                                                                                                              |
| `NETWORK_ROTATION_SHARED_EGRESS_GUARD`          | 布尔值  | `true`  |          | 当多账号轮换执行器遇到网络异常（超时、连接被拒绝或重置），且发生故障的账号没有专用代理时，施加短暂冷却，并在该请求的后续处理中跳过其他无代理账号，而不是逐一重试。默认开启（安全：不会改变出口 IP，只会降低共享出口账号的延迟和冷却风险）。禁用后，将恢复在无代理账号首次抛出异常时立即向上传播异常的行为。                                                                 |
| `ROTATION_ATTRIBUTION`                          | 布尔值  | `false` |          | Opencode 轮换会记录由哪个账号提供服务或哪个账号被跳过（仅记录脱敏后的 ID，绝不记录完整账号 ID），并将代理日志条目关联到相应请求，以便运维人员区分被跳过的账号和未使用的账号。默认关闭。                                                                                                                                                                                     |
| `PROXY_SKIP_RECENTLY_FAILED`                    | 布尔值  | `true`  |          | 代理池和 opencode 的逐账号轮换会在进程内的一段时间内停止复用刚刚失败的代理（TCP 探测被拒绝，或通过该代理收到 429 响应）；每次重复失败时，该时长翻倍，直至达到上限。不会写入代理状态；如果所有候选代理都被暂时排除，则选择结果保持不变。默认开启；设为 `false` 可恢复普通选择行为。                                                                                          |
| `PROXY_POOL_SHARED_EGRESS_ORDER`                | boolean | `false` |          | 对于按出口地址划分配额的提供者，如果某个池成员与最近被拒绝的成员共享同一个观测到的出口地址，则将其排在健康成员之后。仅调整排序，绝不排除成员。需要启用 PROXY_SKIP_RECENTLY_FAILED，由其产生此功能读取的拒绝信号。默认关闭。                                                                                                                                                 |
| `PROXY_POOL_EGRESS_OBSERVATION`                 | boolean | `false` |          | 在仪表板的代理池下方，显示过去 24 小时内为该池成员提供服务的已观测出口 IP 数量，以及使用这些 IP 的连接数。仅供查看，根据代理日志计算，绝不用于路由。默认关闭。                                                                                                                                                                                                              |
| `PROXY_OPERATOR_EGRESS_ENABLED`                 | boolean | `false` |          | 接受运维人员为各池成员推送的带日期的已观测地址，并将其与读取的日志记录合并，用于显示和池成员排序。默认关闭：推送路由返回 404，池读取行为与之前完全一致。                                                                                                                                                                                                                    |
| `OPENCODE_RESPONSES_STALL_ROTATION`             | boolean | `false` |          | 对于 OpenCode 执行器，监测流式 Responses 回复的首个正文字节（等待窗口：`RESPONSES_FIRST_BYTE_TIMEOUT_MS`，默认值为 `15000`）。如果 2xx Responses 流在窗口结束后仍未输出任何数据，则将其视为停滞：让该账号进入冷却期，并将请求切换到下一个账号一次；若再次停滞，则快速失败。默认关闭：停滞的流保持现有等待行为，直到流就绪超时。                                             |
| `OPENCODE_USER_BLOCKED_ROTATION`                | boolean | `false` |          | OpenCode 执行器：遇到携带 `user_blocked` 拒绝信息的 403/451 响应时（非地域限制，也非 Cloudflare 指纹拒绝），让被拒绝的账号进入冷却期，并切换到下一个账号，每个请求最多切换一次；若再次遭到拒绝，则原样返回响应，不标记为成功。默认关闭：通过改换路由绕过上游用户封禁可能被视为规避行为，并将该标记扩散到整个账号集群。                                                      |
| `OPENCODE_TRANSIENT_FAILOVER_BACKOFF`           | boolean | `false` |          | OpenCode 轮换：连续两次发生上游暂时性故障（5xx 或正文为空的 400）后，在切换到下一个账号之前暂停——初始暂停 1.5 秒，此后每多一次故障便翻倍，单次暂停最多 6 秒，每个请求累计最多 10 秒；客户端断开连接时跳过暂停；等待前会释放失败响应的正文。默认关闭：故障转移保持即时执行。                                                                                                 |
| `OPENCODE_PARK_AND_RESUME`                      | boolean | `false` |          | OpenCode 轮换：反复出现暂时性 429 响应（或出现新的池压力标记）后，挂起请求并保持心跳，随后执行一轮有上限的重放，最多依次尝试 3 个账号，而不是向整个账号集群扇出请求。默认关闭：每次遇到 429 都与之前完全一样，切换到下一个账号。                                                                                                                                            |
| `STREAM_READINESS_STALL_RETRY`                  | boolean | `false` |          | 流式聊天：当首次上游响应正文在生成可用事件之前停滞时，通过相同的路由路径发起一次受限的第二次尝试，使用相同的就绪等待预算，且不惩罚账号。默认关闭：首次响应正文停滞时，请求直接失败，不进行重试。                                                                                                                                                                            |
| `FLUSH_EMPTY_RETRY_ENABLED`                     | boolean | `false` |          | 对于经过转换的流式轮次，当上游轮次不包含可用内容时（仅包含推理内容的完成响应，或没有任何有效数据块），在向客户端输出任何内容之前，通过正常的凭据路径进行有限次数的重试（最多 `STREAM_RECOVERY.EMPTY_TURN_RETRY_MAX` 次）。默认关闭：空轮次保持当前行为（空的 200 响应或内容为空的 502 响应）。                                                                              |
| `OPENCODE_POOL_RESELECT`                        | boolean | `false` |          | OpenCode 轮换：在已有池上下文中，当未配置代理的账号收到按出口地址划分配额的提供者返回的 429 响应后，向连接池请求另一个成员用于下一次尝试，而不是使用同一个出口地址重试。仅调整排序，绝不排除成员：池耗尽时保持当前行为。默认关闭：每次遇到 429 都与之前完全一样，切换到下一个账号。                                                                                         |
| `OPENCODE_RATE_LIMITED_429_EARLY_STOP`          | 布尔值  | `false` |          | OpenCode 轮换：遇到首个被判定为真实速率限制的 429 响应（`Retry-After` 可解析，或响应体明确指出速率/用量限制）时，停止本轮账户轮换，并原样返回该上游 429 响应。未归类的 429 响应会继续触发轮换。默认关闭：免费套餐按出口 IP 限制用量（#9611），因此每个 429 响应都会触发轮换，本轮账户全部尝试完毕后返回最后一个上游 429 响应。                                              |
| `MITM_DISABLE_TLS_VERIFY`                       | 布尔值  | `false` | ✓        | 禁用 MITM 代理的 TLS 证书验证。**危险。**                                                                                                                                                                                                                                                                                                                                   |
| `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`         | 布尔值  | `false` |          | 在提供者 URL 验证、模型发现、提供者节点基础 URL 和代理回退测试中，关闭出站 URL 防护的主机检查（包括云元数据屏蔽），并允许私有地址上的 webhook 目标。验证、发现和提供者节点流程默认已允许本地和局域网 URL（`OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`）；代理回退测试和私有地址上的 webhook 目标仅依据 `OMNIROUTE_ALLOW_PRIVATE_PROVIDER_URLS`，在其关闭时会屏蔽本地/局域网主机。 |
| `OMNIROUTE_ALLOW_LOCAL_PROVIDER_URLS`           | 布尔值  | `true`  |          | 允许使用本地/私有地址（127.0.0.1、localhost、局域网）上的提供者 URL。默认开启（本地优先）：此时防护会屏蔽云元数据端点（整个 169.254.0.0/16 网段及已知的元数据主机名）。禁用后将严格限制为仅允许公共地址：私有地址和环回主机也会被屏蔽。                                                                                                                                     |
| `ENABLE_CC_COMPATIBLE_PROVIDER`                 | 布尔值  | `false` | ✓        | 启用兼容 Claude Code 的提供者模式。                                                                                                                                                                                                                                                                                                                                         |

### 策略 (7)

| 键                              | 类型   | 默认值        | 描述                                                                                                                                                                                                                                 |
| ------------------------------- | ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `UNPRICED_USAGE_BUDGET_POLICY`  | 枚举   | `fail_closed` | 每个密钥的每日/每周美元限额如何处理提供者/模型没有定价记录的用量。`fail_closed`（默认）会将该时间窗口标记为已超限（#12341）；`count_as_zero` 将其计为 $0，并继续对已定价的支出执行限额检查。可选值：`fail_closed`、`count_as_zero`。 |
| `TOOL_POLICY_MODE`              | 枚举   | `disabled`    | 工具使用策略的执行模式。可选值：`disabled`、`warn`、`block`。                                                                                                                                                                        |
| `RATE_LIMIT_AUTO_ENABLE`        | 布尔值 | `false`       | 通过环境变量强制开启/关闭速率限制自动启用保护机制。运行时仅读取环境变量：未设置时遵循仪表板设置（默认开启），而非此目录中的默认值。                                                                                                  |
| `DISABLE_CONTEXT_WINDOW_CHECKS` | 布尔值 | `false`       | 对直接发送的单模型请求，跳过 OmniRoute 的本地上下文窗口/最大输入令牌数检查。上游限制仍然适用。                                                                                                                                       |
| `CAPABILITY_FILTER_ENABLED`     | 布尔值 | `false`       | 当目标模型缺少所需能力（视觉、工具、结构化输出、上下文窗口）时，在分发前拒绝请求。保护绕过组合层兼容性过滤器的直接单提供者请求。                                                                                                     |
| `USAGE_LIMIT_IGNORE_UNPRICED`   | 布尔值 | `false`       | 在每个密钥的美元用量配额中，将未定价模型的用量计为 $0，而不是将配额视为已超限。默认关闭：未定价模型或路由别名可能掩盖实际支出，因此配额检查会按超限处理。                                                                            |
| `RADAR_ENABLED`                 | 布尔值 | `false`       | 启用 OmniRoute Radar 模块（目录订阅源页面和同步）。默认关闭；启用仅会解锁界面——数据同步仍需单独选择开启。                                                                                                                            |

当显式配置 `UNPRICED_USAGE_BUDGET_POLICY` 时（数据库覆盖配置优先于环境配置），
它的优先级高于 `USAGE_LIMIT_IGNORE_UNPRICED`。如果没有显式设置枚举值，
上游布尔型退出选项会选择 `count_as_zero`；否则默认值为 `fail_closed`。
枚举值无效或功能标志存储无法读取时，均采用失败关闭策略。这两种退出选项都不会放宽
对已定价支出的限制，也不会放行定价查询失败的情况。策略执行和管理员报告会解析出
相同的有效策略。

### 运行时 (36)

| 键                                          | 类型    | 默认值  | 重启 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------- | ------- | ------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `UNIVERSAL_CONTEXT_HANDOFF_ENABLED`         | 布尔值  | `true`  |      | 当组合路由切换模型时，生成并注入对话摘要。禁用后，各次模型切换将独立处理，并阻止所有现有和未来组合的后台交接请求。                                                                                                                                                                                                                                                                                                      |
| `REASONING_REPLAY_ENABLED`                  | 布尔值  | `true`  |      | 在多轮对话中缓存并重放模型推理内容。禁用后，将停止存储和重新注入推理内容。                                                                                                                                                                                                                                                                                                                                              |
| `RESPONSES_PASSTHROUGH_DROP_COMMENTARY`     | 布尔值  | `true`  |      | 在将 Responses API 透传流转发给客户端之前，丢弃其中内部 commentary 阶段的输出项。禁用后，可接收上游原始 commentary 内容。                                                                                                                                                                                                                                                                                               |
| `OMNIROUTE_MCP_ENFORCE_SCOPES`              | 布尔值  | `false` |      | 对 MCP 工具访问强制执行作用域限制。                                                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_MCP_COMPRESS_DESCRIPTIONS`       | 布尔值  | `false` |      | 压缩 MCP 工具描述，以减少 token 用量。                                                                                                                                                                                                                                                                                                                                                                                  |
| `OMNIROUTE_ENABLE_RUNTIME_BACKGROUND_TASKS` | 布尔值  | `false` |      | 在运行时启用后台任务处理。                                                                                                                                                                                                                                                                                                                                                                                              |
| `OMNIROUTE_DISABLE_BACKGROUND_SERVICES`     | 布尔值  | `false` | ✓    | 禁用所有后台服务（配额刷新、同步等）。                                                                                                                                                                                                                                                                                                                                                                                  |
| `OMNIROUTE_RTK_TRUST_PROJECT_FILTERS`       | 布尔值  | `false` |      | 信任项目级 RTK 过滤器，不进行验证。                                                                                                                                                                                                                                                                                                                                                                                     |
| `OMNIROUTE_ENABLE_LIVE_WS`                  | 布尔值  | `true`  | ✓    | 在导入时启动实时仪表板 WebSocket 服务器（默认端口为 20132）。                                                                                                                                                                                                                                                                                                                                                           |
| `OMNIROUTE_CODEX_WS_ENABLED`                | 布尔值  | `true`  |      | 允许 Codex 使用基于 WebSocket 的 Responses 传输。关闭时，Codex 会回退到 HTTP Responses。                                                                                                                                                                                                                                                                                                                                |
| `OMNIROUTE_CODEX_APP_SERVER_ENABLED`        | 布尔值  | `true`  |      | 允许 Codex 使用本地 app-server WebSocket JSON-RPC 传输（codexTransport=app-server）。关闭时，选择使用 app-server 的连接会回退到 Codex 的其他传输方式。                                                                                                                                                                                                                                                                  |
| `OMNIROUTE_EMERGENCY_FALLBACK`              | 布尔值  | `true`  |      | 将预算耗尽的请求路由到紧急免费回退提供者/模型。（参见下方的[紧急预算回退](#emergency-budget-fallback)。）                                                                                                                                                                                                                                                                                                               |
| `STREAM_RECOVERY_ENABLED`                   | 布尔值  | `false` |      | 在任何响应字节到达客户端之前，为截断的上游 SSE 流启用透明的提前重试。                                                                                                                                                                                                                                                                                                                                                   |
| `STREAM_RECOVERY_MIDSTREAM_ENABLED`         | 布尔值  | `false` |      | 允许流恢复机制在已有字节到达客户端后重新请求并拼接响应。                                                                                                                                                                                                                                                                                                                                                                |
| `STREAM_RECOVERY_TOOLCALL_ORDER_FIX`        | boolean | `false` |      | 确保流中途续传时的工具调用安全：一旦已发出工具调用（正在执行，或已完成且 finish_reason 为 tool_calls），就绝不恢复被中断的流；一次空续传后即关闭，而不是耗尽全部预算。关闭时：采用发布版本的行为。                                                                                                                                                                                                                      |
| `STREAM_EARLY_EOF_SIBLING_FAILOVER_ENABLED` | boolean | `false` |      | 当 SSE 流在发出任何有效帧之前关闭，且同一连接上的有限重试次数已用尽时，向同级连接执行一次故障转移；如果没有可用的同级连接，则返回原始的 `STREAM_EARLY_EOF` 502 错误。默认关闭：同一连接上的重试结束后，提前 EOF 仍会导致终止。                                                                                                                                                                                          |
| `MODEL_CATALOG_INCLUDE_NAMES`               | boolean | `true`  |      | 在 `/v1/models` 响应中包含便于显示的名称字段。对于仅期望模型 ID 的客户端，请禁用此项。                                                                                                                                                                                                                                                                                                                                  |
| `MODELS_CATALOG_PREFIX_MODE`                | enum    | `dual`  |      | 控制 /v1/models 中模型 ID 的前缀方式。'dual'（默认）同时输出别名和规范提供者 ID 前缀，以保持向后兼容。'alias' 仅输出短别名前缀（例如 ds-web/model，而非 deepseek-web/model）。'canonical' 仅输出完整的提供者 ID 前缀。可选值：`dual`、`alias`、`canonical`。                                                                                                                                                            |
| `ARENA_ELO_SYNC_ENABLED`                    | boolean | `true`  |      | 启用 Arena AI 排行榜 ELO 的定期同步，用于模型智能水平排名。                                                                                                                                                                                                                                                                                                                                                             |
| `EXPOSE_CC_DISCOVERY_ALIASES`               | boolean | `false` |      | 在 `/v1/models` 中公布 `claude/<provider>/<model>` 镜像 ID，使 Claude Code 网关的模型发现列表包含非 Claude 模型。这是三级开关机制中的全局级别（环境变量优先于仪表板覆盖设置）。请参阅 [Claude Code 配置](../guides/CLAUDE-CODE-CONFIGURATION.md#discovery-aliases--surface-non-claude-models-in-the-model-picker)。                                                                                                     |
| `NO_THINKING_ALIAS_ENABLED`                 | boolean | `true`  |      | no-think/<provider>/<model> 网关别名的总开关。开启时（默认）：/v1/models 会为每个符合条件且支持思考的 Claude 模型公布一个无思考变体，请求中发送的 no-think/ ID 会解析回真实模型，并抑制推理。关闭时：不公布任何变体，no-think/ ID 会像其他未知模型 ID 一样处理。开启此开关时，每个模型的 ModelSpec.noThinkingAlias 启用/禁用设置仍然有效。                                                                              |
| `OMNIROUTE_DISABLE_THINKING_LEVEL_VARIANTS` | boolean | `false` |      | 禁止在 /v1/models 目录中生成思考级别变体（例如 -low、-medium、-high）。                                                                                                                                                                                                                                                                                                                                                 |
| `OMNIROUTE_CHAT_VIRTUAL_LANES`              | boolean | `false` | ✓    | 为提供者调度启用按租户划分的自适应虚拟准入通道 (#9654)：一个租户的突发流量不再导致另一个租户收到 503。环境变量 OMNIROUTE_CHAT_VIRTUAL_LANES 的优先级高于此仪表板覆盖设置；更改将在服务器重启后生效。                                                                                                                                                                                                                    |
| `EXPOSE_FUNCTIONAL_GATEWAY_MIRRORS`         | boolean | `false` |      | 对于规范归属提供者没有有效凭据、但具有有效凭据的透传网关可路由的模型，在 /v1/models 上公布 <gateway-alias>/<model> 镜像 ID。警告：全局启用后，会为所有客户端添加目录条目。                                                                                                                                                                                                                                              |
| `NEWAPI_AGGREGATOR_BALANCE`                 | boolean | `false` |      | 为兼容 New-API / One-API / Sub2API 聚合器的节点启用余额检测。启用后，设置了聚合器标志的兼容节点将在仪表板和配额预检路由中报告其余额。                                                                                                                                                                                                                                                                                   |
| `SERVER_OWNED_TOOL_LOOP_ENABLED`            | boolean | `false` |      | 持续执行由服务器管理的非流式工具调用，直到模型返回客户端可用的响应。                                                                                                                                                                                                                                                                                                                                                    |
| `SEARCH_STATS_HIDE_DELETED_CONNECTIONS`     | boolean | `false` |      | 搜索统计和最近搜索仅统计仍有有效连接的提供者（duckduckgo-free 等无需密钥的提供者始终计入）。关闭时，保留所有带有提供者 ID 的已留存搜索记录。                                                                                                                                                                                                                                                                            |
| `FREE_BADGE_REQUIRES_PROVIDER_FREE_TIER`    | boolean | `false` |      | 仪表板提供者页面：仅依据提供者实际认可的信号显示“免费”徽章 — 对于没有已记录免费套餐的已注册提供者，不再采用显示名称启发式规则、非布尔值的 free 字段和 :free 后缀。关闭时，沿用原有徽章规则。                                                                                                                                                                                                                            |
| `RETRY_AFTER_PROVENANCE_ENABLED`            | boolean | `false` |      | 对于聚合后的 429/503 不可用响应，在没有已知的具体未来重试时间时省略 `Retry-After`（而不是使用人为设定的 1 秒），添加 `error.retry_after_provenance`（`signal` \| `none`），并允许组合耗尽处理路径从 JSON 和纯文本上游响应体中读取自然语言重试提示。该字段仅出现在由 `unavailableResponse()` 构建的响应中；其他 429/503 响应体保持不变。                                                                                 |
| `PROTECTED_PRIORITY_INFRA_502_ENABLED`      | boolean | `false` |      | 当标记为仅在配额耗尽时回退的 `priority` 组合目标因可证实与配额无关的原因（提供者断路器已断开、预测延迟跳过）停止组合时，返回 502，而不是看起来像配额问题的 503。因锁定、冷却、不可用、耗尽和并发上限而停止时，仍返回 503。                                                                                                                                                                                              |
| `MISTRAL_AMBIGUOUS_401_SOFT_LOCKOUT`        | boolean | `false` |      | 不带明确身份验证信号的 Mistral 401（`{"detail":"Unauthorized"}`）在密钥被吊销和配额耗尽时完全相同。启用后，会让连接进入冷却状态，而不是将其搁置并标记为 `expired`，每个连接每小时最多冷却 3 次；下一次则会将其搁置，因此被吊销的密钥最终仍会被停用。默认关闭：每次出现此类 Mistral 401 时，都会像以前一样搁置连接。                                                                                                     |
| `GROK_SUBSCRIPTION_IMAGES_ENABLED`          | boolean | `false` |      | 注册 xai-oauth (xao) 和 grok-cli 图像路由，并将 OpenAI 的 high/hd 质量映射为 xAI 的 medium。默认关闭：使用 API 密钥的 xAI 图像路径继续使用现有的 OpenAI 兼容请求，且不注册订阅路由。                                                                                                                                                                                                                                    |
| `XAI_OAUTH_LIVE_MODEL_DISCOVERY`            | boolean | `true`  |      | 对于 xai-oauth 连接，使用 OAuth 持有者令牌从 https://api.x.ai/v1/models 获取 xAI 实时模型目录，而不是使用固定的静态初始数据。默认开启。将此标志设为 false 可继续提供静态初始数据。发现路由中的 HTTP 请求失败时会回退到初始数据；标志获取函数本身不会发起 HTTP 请求。                                                                                                                                                    |
| `BATCH_AND_FILE_AUTO_CLEANUP_ENABLED`       | boolean | `false` |      | 允许自动清理扫描删除超过 `OMNIROUTE_BATCH_RETENTION_DAYS` 天且处于终止状态（已完成/失败/已取消/已过期）的 Batch API 作业及其逐行检查点，并清除已超过自身 `expires_at` 的上传文件的 BLOB 内容。默认关闭：在操作人员主动启用之前，所有现有安装实例都将像以前一样保留这些数据。无论是否启用此选项，操作人员触发的 `DELETE /api/v1/batches/delete-completed` 路由都不受影响——它是独立且无条件生效的公共 API 契约。          |
| `ANTIGRAVITY_ACCOUNT_LEASE_ENABLED`         | boolean | `false` |      | 在请求的整个流式传输生命周期内，为该请求预留其选中的 Antigravity 账户，防止并发重试或凭据交接再次选中已用于进行中流式传输的账户。预留范围为（连接，可调用的上游模型），因此同一账户仍可同时服务两个不同的模型。当所有符合条件的账户都已被该模型租用时，请求会返回结构化的 503 `antigravity_pool_busy`，并附带有界的 `Retry-After`，而不是继续向繁忙账户堆积请求。默认关闭：账户选择方式与以前完全一致，不进行任何预留。 |
| `COMBO_AUTO_PRUNE_STALE_STEPS`              | boolean | `false` |      | 与权威实时目录成功同步模型后，移除固定使用目录中已不再列出的模型的组合步骤，并为每个移除的步骤记录一条审计条目。同步失败、降级或仅同步免费模型时绝不执行清理，也绝不会清空组合。默认关闭：仅标记过时步骤。                                                                                                                                                                                                              |

### CLI (5)

| 键                                    | 类型   | 默认值  | 重启 | 说明                                                                                                                                                              |
| ------------------------------------- | ------ | ------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CLI_COMPAT_ALL`                      | 布尔值 | `false` | ✓    | 为所有 CLI 客户端启用兼容模式。                                                                                                                                   |
| `MODEL_ALIAS_COMPAT_ENABLED`          | 布尔值 | `false` |      | 启用模型别名兼容层。                                                                                                                                              |
| `PRICING_SYNC_ENABLED`                | 布尔值 | `false` |      | 启用定价数据自动同步（还需要设置 `PRICING_SYNC_ENABLED` 环境变量）。                                                                                              |
| `OMNIROUTE_AUTO_SYNC_CODEX_PROFILES`  | 布尔值 | `false` |      | 在提供者模型同步后，根据实时目录自动写入或重写 ~/.codex/*.config.toml 配置文件。绝不会更改当前启用的或默认的 Codex 配置。默认关闭。                               |
| `OMNIROUTE_AUTO_SYNC_CLAUDE_PROFILES` | 布尔值 | `false` |      | 在提供者模型同步后，根据实时目录自动写入或重写 ~/.claude/profiles/<name>/settings.json Claude Code 配置文件。绝不会更改当前启用的或默认的 Claude 配置。默认关闭。 |

### 健康检查 (5)

| 键                                        | 类型   | 默认值  | 说明                                                                                                                                                                                                      |
| ----------------------------------------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OMNIROUTE_DISABLE_LOCAL_HEALTHCHECK`     | 布尔值 | `false` | 禁用本地实例健康检查端点。                                                                                                                                                                                |
| `OMNIROUTE_DISABLE_TOKEN_HEALTHCHECK`     | 布尔值 | `false` | 禁用令牌验证健康检查。                                                                                                                                                                                    |
| `SKILLS_SANDBOX_NETWORK_ENABLED`          | 布尔值 | `false` | 启用技能沙箱环境中的网络访问。                                                                                                                                                                            |
| `PROXY_HEALTH_BLOCKED_RESETS_STREAK`      | 布尔值 | `false` | 在代理健康巡检中，被目标拒绝的探测（401/403/429）会重置代理的连续失败次数。默认关闭：拒绝响应保持中性（#10654）。无论此开关如何设置，5xx 响应都无法得出确定结论；拒绝响应绝不会移除、禁用或重新激活代理。 |
| `DB_HEALTHCHECK_STARTUP_DEFERRED_ENABLED` | 布尔值 | `false` | 在服务器开始接受请求后（通过 `setImmediate`）运行启动时的数据库完整性/健康检查，而不是阻塞启动直至检查完成（#13717）。默认关闭：启动会像此 PR 之前一样被阻塞。                                            |

> [!NOTE]
> `INPUT_SANITIZER_BLOCK_THRESHOLD` 及其旧版别名
> `INJECTION_GUARD_BLOCK_THRESHOLD` 用于调整
> `INJECTION_GUARD_MODE` 的 `block` 模式，但它们只是由
> [`src/shared/utils/injectionSeverity.ts`](../../src/shared/utils/injectionSeverity.ts) 读取的普通环境变量，
> 而非功能开关：它们不支持数据库覆盖，也没有仪表板切换开关。请参阅
> [`ENVIRONMENT.md`](./ENVIRONMENT.md#4-security--authentication)。

> [!NOTE]
> `重启` 列标记了具有 `requiresRestart: true` 的开关——其值会
> 立即持久化，但只有在进程重新加载后才会生效。枚举
> 开关会拒绝允许集合之外的任何值（在服务端的
> `setFeatureFlagOverride()` 和 REST `PUT` 处理程序中均进行验证）。

---

## 切换标志

### 仪表板

导航到 **仪表板 → 设置 → 功能标志**
(`/dashboard/settings/feature-flags`)。该网格
(`src/app/(dashboard)/dashboard/settings/components/FeatureFlagsGrid.tsx`)
支持：

- 按键或描述**搜索**，并按类别**筛选**（外加一个合成的**需要重启**视图）。
- 布尔标志的**开关**和枚举标志的**下拉菜单**
  (`src/app/(dashboard)/dashboard/settings/components/FeatureFlagCard.tsx`)。
- 每个标志的**来源徽章**——`DB`、`ENV`或`DEF`——显示有效值来自何处。
- **重置**按钮（仅对`DB`来源的标志显示）用于取消覆盖，底部还有一个**重置所有覆盖**按钮。
- 当`requiresRestart`标志被更改时，会显示**重启服务器**横幅。

### REST API

所有操作都通过一个路由进行：
[`src/app/api/settings/feature-flags/route.ts`](../../src/app/api/settings/feature-flags/route.ts)。
每个方法都需要经过身份验证的仪表板会话（否则返回`401`）。

#### `GET /api/settings/feature-flags`

返回每个标志及其有效值、来源和摘要。

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
    // ... 所有 77 个标志
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

设置或移除单个覆盖。请求体：`{ key: string; value?: string }`。
省略`value`会移除覆盖（恢复环境变量/默认值）。

```bash
# 设置一个 DB 覆盖
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY","value":"true"}'

# 移除覆盖（无 "value"）
curl -X PUT http://localhost:20128/api/settings/feature-flags \
  -H "Content-Type: application/json" \
  -d '{"key":"REQUIRE_API_KEY"}'
```

响应会回显新的`effectiveValue`/`source`、`previousValue`/
`previousSource`和`requiresRestart`。未知键和超出范围的枚举值将被`400`拒绝。

#### `DELETE /api/settings/feature-flags`

一次性清除**所有**DB覆盖，将每个标志恢复到其环境变量/默认值。返回`{ cleared: <count>, message: "..." }`。

> [!注意]
> 带有`requiresRestart: true`的标志仅在进程重新加载后生效。
> 仪表板的重启流程会调用`POST /api/restart`，然后轮询
> `GET /api/health/ping`直到服务器恢复运行。

---

## 紧急预算回退

`OMNIROUTE_EMERGENCY_FALLBACK`（类别为 `runtime`，默认值为 `true`）控制
[`open-sse/services/emergencyFallback.ts`](../../open-sse/services/emergencyFallback.ts)
中的紧急免费回退路径。启用后，预算耗尽的请求将被路由到免费的回退
提供者/模型，而不是直接失败。可通过控制面板开关、数据库覆盖配置或
`OMNIROUTE_EMERGENCY_FALLBACK` 环境变量将其设置为 `false`（或 `0`），
以禁用此行为，并让预算耗尽的请求失败。（已在 PR #3741 / #3752 中作为
控制面板开关提供。）

由此回退机制处理的响应会携带
`X-OmniRoute-Emergency-Fallback: from=<provider/model>; to=<provider/model>`，
因此客户端无需将 `X-OmniRoute-Provider` 与其请求进行比对，即可判断请求是否
被重新路由。其他所有响应均不包含此标头。

---

## 另请参阅

- [环境变量参考](./ENVIRONMENT.md) — 大多数标志都有一个同名的环境变量，其文档记录于此（数据库覆盖值的优先级高于该环境变量）。
- [`src/shared/constants/featureFlagDefinitions.ts`](../../src/shared/constants/featureFlagDefinitions.ts)
  — 所有标志的权威定义来源。
- [`src/shared/utils/featureFlags.ts`](../../src/shared/utils/featureFlags.ts)
  — 解析逻辑（`resolveFeatureFlag`、`isFeatureFlagEnabled`、
  `resolveAllFeatureFlags`）。
- [`src/lib/db/featureFlags.ts`](../../src/lib/db/featureFlags.ts) — 数据库覆盖值
  持久化于 `key_value` 表的 `feature_flags` 命名空间中。
