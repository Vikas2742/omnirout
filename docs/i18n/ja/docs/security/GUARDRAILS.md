# Guardrails (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **信頼できる唯一の情報源:** `src/lib/guardrails/`
> **最終更新:** 2026-10-17 — v3.8.52（[適用範囲と制限](#coverage-and-limits)を追加:
> フックが到達するルートとレスポンスパス、統合された無効化ヘッダー (#16412)、必須境界としてのインジェクション
> ブロックモード (#16413)、および post-call より前にレスポンスを参照するもの）

ガードレールは、OmniRoute とアップストリームプロバイダーの境界で、
安全性、ポリシー、およびコンテンツ変換を適用します。各ガードレールは、リクエストペイロード (`preCall`) と
アップストリームレスポンス (`postCall`) を検査し、必要に応じて拒否、変換、または注釈付けできます。

このシステムは **フェイルオープン** です。ガードレールの実行中に例外が発生した場合、
レジストリはエラーを記録し、リクエストを失敗させる代わりに次のガードレールへ進みます。
ブロックは明示的な判断 (`block: true`) であり、偶発的に発生することはありません。
唯一の例外は、中止されたリクエストです。呼び出し元の `signal` が中止された場合、
例外を送出したガードレールはスキップされず、フックの実行を拒否します。

フックは、すべてのルートやすべてのレスポンスで実行されるわけでは**ありません**。ガードレールを
セキュリティ制御として利用する前に、[適用範囲と制限](#coverage-and-limits)を確認してください。

## 組み込みガードレール

レジストリはインポート時に、優先順位に従って 6 つのガードレールを自動ロードします
（`registry.ts` → `registerDefaultGuardrails()` を参照）。

| 優先順位 | 名前                | ステージ       | ファイル              |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

優先順位の数値が小さいものから**先に**実行されます。

### Vision Bridge (`visionBridge.ts`) — モダリティブリッジ PR-1

GLM 5.3 ベースモデルと `glm-5.3-{low,high,max}` には、明示的な
`supportsVision:false` レジストリ／仕様メタデータがあります。GLM 5.3 Flash バリアントは、
引き続きネイティブビジョンモデルです。Claude Code の `/v1/messages` ルートは、
Claude から OpenAI への変換の**前に**、共有の `handleChat` pre-call ガードレールチェーンへ入ります。
ネストされた `Read` ツール結果の画像は、その変換によって OpenAI の `image_url` コンテンツへ
持ち上げられる前に、説明または処理される必要があります (#17069)。

**非ビジョンモデル**を対象とする画像入りのリクエストをインターセプトし、
リクエスト全体をビジョン対応モデルへ再ルーティングするか、アップストリーム呼び出しの前に、
画像部分を構成可能なビジョンモデルが生成したテキスト説明へ置き換えます。
これにより、テキスト専用プロバイダーでもマルチモーダルペイロードを透過的に処理できます。

フロー:

1. 対象モデルがすでにビジョンをサポートしている場合はスキップします
   （強制ブリッジリスト `isVisionBridgeForcedModel` に含まれる場合を除く）。
2. `extractImageParts(messages)` (`visionBridgeHelpers.ts`) を使用して画像部分を抽出します。
   これは、`open-sse/utils/mediaParts.ts` の **統合メディア検出器**
   `detectMediaParts()` に処理を委譲します。この検出器は、combo 互換性フィルターと共有される
   信頼できる唯一の情報源です。抽出対象は、`replaceImageParts` が元の位置へ差し戻せる形式
   （extract↔replace 契約）に限定されています。対象は、OpenAI `image_url`、Anthropic base64
   `source.type:"base64"`、Anthropic URL `source.type:"url"`、および Responses
   API `input_image` です。Claude Code の `tool_result.content` および Responses のツール出力内に
   ネストされた一致画像も抽出され、元のパスで置き換えられます。インジケーターのみの形式は
   combo フィルターの対象であり、抽出されません。
   画像が見つからなければスキップします。
3. `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) を使用して実行時設定を解決します。新しい
   `modalityBridge*` 設定キーが優先され、従来の `visionBridge*` キーは**1 サイクルのみの
   フォールバック**（ロールバック期間）として残ります。ブリッジが無効な場合は、
   メディアの走査前にスキップします。
4. モードセレクター（`modalityBridgeVisionMode`、下表を参照）が、再ルーティングと説明生成の
   どちらを使用するか決定します。再ルーティングでは、`model` のみを置き換えた
   `modifiedPayload` と、メタデータ `{ rerouted, fromModel, toModel, imagesKept }` を返します。
5. 説明生成パスでは、画像数を `maxImages` に制限し、タスクを考慮したプロンプトを構成して、
   説明キャッシュを参照し、ビジョンモデルを**並列**で呼び出し (`Promise.allSettled`)、
   元の位置へ `[Image N]: <description>` テキスト部分を挿入します。
   説明生成に失敗すると `null` になります。不明な対象またはビジョン対応の対象については
   元の画像が保持されます (#4012)。一方、**テキスト専用であることが確認された直接の対象**
   またはビジョン対応プロバイダーがゼロの combo では、部分的な失敗や説明呼び出し上限を超えた
   画像を含め、説明されなかったすべての画像に対して、明示的な
   `(unavailable — no vision-capable provider connected)` テキストスタブが使用されます
   (#17069)。既存の、すべて失敗した場合の combo 説明フォールバックは維持されます (#8430)。
6. `modifiedPayload` とメタデータ（`imagesProcessed`、`descriptions`、
   `processingTimeMs`、`visionModel`）を返します。

#### モードセレクター (`modalityBridgeVisionMode`)

| モード     | デフォルト | 動作                                                                                                                                                                                                                                                                                                            |
| ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔          | 従来のヒューリスティックで、変更なし (#6640/#7204): 非コンボ/`auto/` モデルは、元のモデルにすでに使用可能な認証情報がない限り、最適なビジョンモデルへ再ルーティングされます（認証情報がある場合は describe）。コンボターゲットは常に describe します。                                                          |
| `describe` |            | 常に describe — 再ルーティングのブロックは完全にスキップされ、ユーザーが選択したモデルが常に応答します。                                                                                                                                                                                                        |
| `reroute`  |            | 強制再ルーティング: 認証情報を保持するモデルのガードがバイパスされます。再ルーティング**ターゲット**の認証情報ガードは引き続き適用されます — 使用可能なビジョンターゲットが存在しない場合、ブリッジは describe したり、テキスト専用ターゲットに生の画像を送信したりする代わりに、明確なエラーでブロックします。 |

強制モードは auto ヒューリスティックが実行される**前に**ショートサーキットされます。`auto` の動作は
PR-1 以前のガードレールとバイト単位で同一です。

#### API キーのスコープ (`visionBridgeKeyScope.ts`)

呼び出し元の API キーが `allowedConnections`、クォータプール
(`allowedQuotas`)、またはモデル (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) を制限している場合、
ブリッジはそのキーが使用を許可されている接続上で、そのキーが使用できる
再ルーティングおよび describe モデルのみを選択します。その後 describe 呼び出しは常に
`x-omniroute-self-loop-key-id` ヘッダーを付けて OmniRoute のセルフループを経由するため、
受信側のチャットリクエストがそのキーの接続およびモデルポリシーを再度適用します。`enforceApiKeyPolicy()` は
そのヘッダーをセルフループのベアラーと組み合わせた場合にのみ尊重するため、アクセスを狭めることしかできず、
解決できない id は拒否されます。

キーに対してビジョンモデルが一切許可されていない場合、**確認済みのテキスト専用
ターゲット**は、画像のバイトを能力のない上流へ転送する代わりに、明確な HTTP 400 で画像リクエストをローカルで拒否します (#17069)。ターゲットのビジョン機能が不明または
ネイティブなビジョン機能を持つ場合、describe パスは以前の
フェイルオープン動作を維持します (メタ `{ skipped: true, reason: "no_permitted_vision_model" }`)。
キーのないリクエスト、およびこれらの制限のないキーは、正確に
以前と同じように動作します。

#### タスク認識 describe プロンプト (`modalityBridgeVisionTaskAware`)

デフォルト **true**。`composeVisionPrompt()` (`visionBridgeHelpers.ts`) は
**最後のユーザーメッセージ**のテキスト（500 文字に切り詰め）を基本の
describe プロンプトに追加し、説明をユーザーが実際に尋ねた内容へと導き
（codex-vision-proxy パターン）、ビジョンモデルに可視テキストの文字起こしを要求します。
フラグがオフの場合 — またはユーザーテキストがない場合 — は、基本プロンプトがそのまま使用されます。

describe セルフループ独自の OpenAI 互換リクエスト (`visionBridgeHelpers.ts` の
`callVisionModelSingle()` 内) は、常に `image_url.detail: "high"` を要求します —
無条件に、すべての呼び出し元／プロバイダーに対して、クライアントのシグナルによって
ゲートされることなく。低詳細サンプリングは、まさにこのプロンプトが要求する
テキスト文字起こしタスクの OCR 精度を低下させるため、describe 呼び出し自体は、
元のインバウンドリクエストがどの詳細レベルを使用したかに関係なく常に高詳細を要求します。これは
内部の describe リクエストボディにのみ影響し、OmniRoute がプライマリリクエストで呼び出し元自身の `image_url.detail` を
どのように転送するかは変更しません —
そのデフォルトは別個に適用され、検出された OpenCode クライアントに対してのみ、
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) で行われます。describe セルフループの
Anthropic ワイヤーフォーマットブランチには `detail` フィールドがなく、どちらのデフォルトの影響も受けません。

#### Describe 出力の上限 (`modalityBridgeVisionMaxChars`)

| キー                           | デフォルト | 範囲                 |
| ------------------------------ | ---------- | -------------------- |
| `modalityBridgeVisionMaxChars` | `0`        | `0` または 100–50000 |

`0`（デフォルト）は**上限なし**を意味します — `callVisionModel()` によって返された
説明は変更されずにそのまま渡され、既存の動作が維持されます。100–50000 の範囲のいずれかの値は、
`[Image N]: <description>` としてスプライスして戻す前に、説明を `…` サフィックス付きで
切り詰めます（`src/lib/guardrails/visionBridge.ts` の
`VisionBridgeGuardrail.preCall()`）。下流モデルが完全な文字起こしを必要とする
詳細重視の OCR タスクではこれを上げ、おしゃべりなビジョンモデルでトークン使用量を
抑えたい場合は下げてください。ダッシュボードのフィールドは Vision タブの Advanced パネルにあり
（`ModalityBridgeVisionTab.tsx` の `modality-bridge-max-chars`）、1 から 99 の間の値は
すべて 100 の下限まで引き上げ、明示的な `0` はそのままにします — `0` はそれ自体が有効な Zod 値であり
（`z.union([z.literal(0), z.number().int().min(100).max(50000)])`）、単なる
「未設定」のデフォルトではありません。

#### Describe キャッシュ (`modalityBridge/bridgeCache.ts`)

describe 出力用のインメモリ LRU + TTL キャッシュで、プロセス全体で共有されます。
キー = `sha256(imageRef + composedPrompt + configuredBridgeModel)` で、
長さプレフィックスフレーミング（フィールド境界の衝突なし）。モデルコンポーネントは
実際に応答したモデルではなく**設定された**ブリッジモデルです —
`callVisionModel` は内部的にフォールバックする可能性があり、試行ごとにキーを分けると
キャッシュが断片化します。失敗した describe は決してキャッシュされません。設定:

| キー                            | デフォルト | 範囲    |
| ------------------------------- | ---------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`     | —       |
| `modalityBridgeCacheTtlMinutes` | `60`       | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`      | 10–5000 |

#### リモート画像の正規化（セルフループの describe/base64 取得）

ブリッジが**リモート**画像を自身で取得する場合 — Anthropic の describe 自己呼び出しと claude-wire-format の base64 変換（`ensureBase64ImagesForClaudeWire`）で、いずれも `visionBridgeHelpers.ts` の `fetchRemoteImageAsDataUri()` を経由します — 結果の data URI は、ビジョンモデルへのリクエストに埋め込まれる前に `normalizeDataUri()`（`open-sse/utils/imageNormalize.ts`）を通されます。サイズ超過の画像は**長辺 2048px** にダウンスケールされ（OpenAI/Anthropic がサーバー側ですでに適用しているリサイズ上限に合わせます）、ビジョンモデルが見る内容を変えずにアップロードバイト数/レイテンシを削減します。リサイズには `sharp` を使用し、動的インポートで読み込みます。ネイティブバイナリの読み込みに失敗するプラットフォームでは、`normalizeDataUri()` は**決して例外を投げません** — 元のバイトのパススルーにフォールバックするため、describe/base64 変換の経路は常に動作し続けます。画像以外のバイト（デコード可能な画像を返さなかった取得結果）もそのままパススルーされます。この正規化は、ブリッジが自身の自己呼び出しのために取得する画像に限定されます — 呼び出し元の生のパススルーペイロードには決して適用されず、オプトイン時のみ変更する原則（ハードルール #20）と一致します。

#### 設定スキーマ + マイグレーション

新しい `modalityBridge*` キーは `updateSettingsSchema`（`src/shared/validation/settingsSchemas.ts`）で Zod 検証されます: `modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、`modalityBridgeCache*` の 3 つ、および Audio Bridge が使用する `modalityBridgeAudio*` グループです。マイグレーション `141_modality_bridge_settings.sql` は、既存のレガシー `visionBridge*` 値を対応する新しいキーにコピーします（冪等で、運用者が設定した `modalityBridge*` 値を上書きしません）。レガシーキーは 1 リリースサイクルの間、読み取り時のフォールバックとして引き続き受け付けられます。

#### 透過性ヘッダー + 統計

describe 変換されたレスポンスには `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` が付与されます（`modalityBridge/bridgeStats.ts` の `buildModalityBridgeHeader()` で構築され、`src/sse/handlers/chatHelpers.ts` の `withModalityBridgeHeader()` で付与されます）。再ルーティングされたリクエストにはヘッダーが**付与されません** — ペイロードは未変更であり、モデルの差し替えはレスポンスボディの `model` フィールドですでに確認できるためです。

`GET /api/modality-bridge/stats`（管理認証、`GET /api/settings` と同じ層）は、`vision`、`audio`、`video` のモダリティごとのインメモリカウンター `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` を返します。`averageLatencyMs` は分母にすべての試行ではなく `latencySamples` を使用します。タイミングのない操作が 0 ミリ秒のサンプルを捏造することはありません。`bridged` は成功した変換の後方互換エイリアスのままであり、失敗した試行では増加しません。カウンターは仕様によりプロセス再起動時にリセットされます（会計ではなくテレメトリーです）。

#### ダッシュボード設定

専用のダッシュボードページは `/dashboard/settings/modality-bridge` です。URL で指定可能な `Vision`、`Audio`、`Video` タブは、`tab` 値を切り替えてもクエリパラメータを保持します。Vision タブは、有効化、モード、モデル選択（自動デフォルトを含む）、タスク認識プロンプト、詳細なタイムアウト/画像/説明長/キャッシュ制限、実行時カウンター、およびガード付きサンプルリクエストを公開します。Audio タブもライブです: 有効化、Auto 付きの STT 専用モデルピッカー、タイムアウト/最大クリップ制限、音声カウンター、`input_audio` サンプルテストを公開します。Video タブは機能します: FFmpeg/ffprobe の実行時状態 — 4 つの明示的な UI 状態（プローブ実行中または完了できなかった場合は `unknown`、クライアント側でプローブがスキップされる非ループバックのダッシュボードホストでは `restricted`、プローブ済みで存在しないことが確認されたら `unavailable`、または FFmpeg/ffprobe のバージョン付きの `available`）のいずれか — を報告し、有効化/モデル/フレーム/動画/タイムアウト制限を永続化し、モデルピッカーをビジョン対応モデルに絞り込み、動画カウンターを公開します。

AI 設定配下の旧 Vision Bridge カードは、新しいページへの互換性リンクです。フォームの複製を保持しなくなりました。Media Providers も、既存の Speech-to-Text プレイグラウンドを削除せずに、Image-to-Text および Speech-to-Text ワークフローを対応する Modality Bridge タブにリンクします。

**セルフループの受付バイパス：** describe 呼び出しが OmniRoute 自身の `/v1` セルフループ（非標準プロバイダーモデル）を経由する場合、サブリクエストは `x-omniroute-admission-bypass: internal` を送信し、解決されたセルフループ資格情報 — ローカルモードではローカルの `sk_omniroute` センチネル、または運用者が設定した `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 環境変数キー（#1350） — で認証されるため、`REQUIRE_API_KEY=true` のデプロイでも describe 呼び出しを実行できます。バイパスはこれらの正確な資格情報に対してのみ尊重されるため、外部クライアントがこのヘッダーを使って受付をスキップすることはできません。

レガシーのデフォルト値は `src/shared/constants/visionBridgeDefaults.ts` にあります。新しいモード/タスク認識/キャッシュのデフォルト値と設定リゾルバーは `src/shared/constants/modalityBridgeDefaults.ts` にあります。ガードレールは `deps` コンストラクターオプションを公開しているため、テストは偽の `getSettings` および `callVisionModel` 実装を注入できます。

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

音声入力を受け付けることが知られていないターゲットに到達する前に、音声を含むチャットリクエストをインターセプトします。チャットリクエストを再ルーティングすることは決してありません: 音声パートは既存の OpenAI 互換マルチパートエンドポイントを通じて文字起こしされ、選択されたチャットモデルはテキストの文字起こしで続行します。

フロー：

1. `getResolvedModelCapabilities()` を通じて `supportsAudio` を解決します。明示的な
   プロバイダーレジストリのメタデータが優先され、次に静的モデルメタデータ、次に同期された
   `modalities_input` が続きます。宣言された入力リストに `audio` が含まれない場合は `false` です。
   機能の証拠がない場合は `null` のままです。`false` と `null` の両方が
   保守的なブリッジを有効化し、`true` はそれをバイパスします。
2. `modalityBridgeAudio*` 設定を解決し、共有の `detectMediaParts()`
   検出器を通じて、すべてのメッセージからスプライス可能なトップレベルの
   オーディオパーツを抽出します。サポートされるワイヤ形式は、OpenAI の `input_audio`、`audio_url`、および
   `source.media_type: "audio/*"` です。ネストされたオーディオはルーティングのために検出されますが、
   スプライス経路では削除されません。処理は `modalityBridgeAudioMaxClips` によって上限が設定され、
   後続のパーツは変更されません。
3. 設定済みの `provider/model` を優先するか、`selectAudioBridgeModel()` に
   `AUDIO_TRANSCRIPTION_PROVIDERS` を安定したカタログ順で走査させ、使用可能なアクティブな
   プロバイダー認証情報を持つ最初のモデルを選択させます。
4. `callAudioTranscription()` は base64/data-URI オーディオをマルチパートの
   `file` に変換するか、公開専用のアウトバウンドガードを通じてリモートの `audio_url` を
   DNS ピン留めと 25 MB の上限付きでダウンロードします。その後、ファイルと選択された
   モデルをローカルの `/v1/audio/transcriptions` セルフループに POST し、`resolveSelfLoopBearer()` で
   認証します。既存の文字起こしルートは、通常の認証情報の検索、クールダウン/レート制限の処理、およびプロバイダーディスパッチを実行します。
5. 成功した呼び出しは、そのパーツを `[Audio N]: <transcript>` に置き換えます。呼び出しは
   `Promise.allSettled` で実行されます。個々の失敗はその元の
   オーディオパーツを保持します（#4012 契約）。すべての呼び出しが失敗し、ターゲットが
   `supportsAudio === false` であると証明されている場合、パーツは
   `[Audio N]: (unavailable — no STT provider connected)` になります（#8430 契約）。不明な
   ターゲット（`null`）の場合、全失敗の結果はそのまま維持されます。使用可能な STT 認証情報を持たない、
   テキスト専用であると証明されたターゲットは、ネットワーク呼び出しを発行せずに同じ明示的な
   スタブを受け取ります。

成功した文字起こしは、プロセス全体の Modality Bridge LRU/TTL キャッシュを使用します。キーは
オーディオ参照、安定した `audio-transcription` 操作ラベル、および選択された STT モデルを組み合わせたものです。失敗は決してキャッシュされません。オーディオの試行は
共有の `bridged`、`cacheHits`、`failures`、および `lastUsedAt` カウンターを更新します。
変換されたレスポンスは
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` を伴います。未変更の
リクエストには Audio Bridge セグメントは付与されません。

実行時設定は DB に基づき、Zod で検証されます。

| キー                          | デフォルト | 範囲              |
| ----------------------------- | ---------- | ----------------- |
| `modalityBridgeAudioEnabled`  | `true`     | —                 |
| `modalityBridgeAudioModel`    | `""`       | 自動または STT ID |
| `modalityBridgeAudioTimeout`  | `60000`    | 1000–300000       |
| `modalityBridgeAudioMaxClips` | `3`        | 1–10              |

共有キャッシュは引き続き `modalityBridgeCacheEnabled`、
`modalityBridgeCacheTtlMinutes`、および `modalityBridgeCacheMaxEntries` によって制御されます。

### ビデオブリッジ (`videoBridge.ts`, `videoBridgePipeline.ts`)

既知のネイティブビデオサポートを持たないターゲットが呼び出される前に、Chat Completions の `messages` および Responses
API の `input` 内のトップレベルのビデオパーツをインターセプトします。
サポートされる形式は、`input_video`、`video_url`、`video_source`、HTTPS URL、
および `data:video/*;base64,...` データ URI です。テキスト内の単なるファイル名は
ビデオとして扱われません。

`VideoBridgeGuardrail.preCall`（`videoBridge.ts`）は、リクエストの走査、
機能/ポリシーチェック、リクエストごとの集約、およびレスポンスペイロードを担います。
ビデオごとの処理 — 取得、結果全体のキャッシュ、フレームシーケンスの記述（呼び出し元が宣言したオーディオ文字起こしを融合します）、および試行ごとの
メトリクス/中止/クリーンアップ — は、`videoBridgePipeline.ts` の `processVideoPart` の背後に隠されており、
`preCall` のループ内でビデオパーツごとに 1 回呼び出されます。
このモジュールはまた、明示的なポート境界である `VideoMediaBrokerPort`
（バイトの取得とサンプリングされたフレームの抽出）、`VideoAudioTranscriptionPort`
（呼び出し元が宣言したオーディオ文字起こしとサンプリングされたキャプションの融合）、および
`VideoDrilldownPort`（フレームドリルダウンの永続化境界。まだ
`processVideoPart` には接続されておらず、現在ドリルダウンエントリを書き込むのは別個の `/api/modality-bridge/video/drilldown`
ルートのみです）を定義します。

公開 `/v1` リクエストパスは、サブプロセスをインポートすることも呼び出すこともありません。リモート
ビデオは 50 MiB の上限付きでダウンロードされます。インライン base64 ビデオには、
モデル/メッセージ/フレーミングのエンベロープが 50 MiB の公開 JSON リクエスト受付上限内に
収まるように、控えめな 36 MiB のデコード済みビデオごとの上限があります。インライン
長とデコード後サイズの見積もりは、割り当て前にチェックされます。HTTPS は
最初のリモート URL とすべてのリダイレクトで必須であり、DNS ピン留めを伴う既存の
公開専用アウトバウンドガードを使用します。その後、バイトは正確な内部
`POST /api/modality-bridge/video/extract` ブローカー境界を通過します。このルートは
`LOCAL_ONLY` と `SPAWN_CAPABLE` の両方であり、プロセスごとに認証された
信頼済みループバックリクエストのみを受け入れ、URL、ファイルシステムパス、実行可能ファイル、
または引数リストを決して受け入れません。API のボディサイズパイプラインとハンドラーのインクリメンタルボディ
リーダーは、それぞれ独立して 50 MiB のブローカー入力上限を適用します。その有界キューは
一度に 1 つの抽出を実行し、4 つの保留ジョブを許可し、保留入力を
100 MiB に制限します。

ブローカー内部では、`ffprobe` がプライベートなローカルファイルを読み取る。固定のフォーマット許可リストはプレイリスト形式とマニフェスト形式を除外する。許可された MOV ファミリーのコンテナでは、外部 MOV データ参照はデフォルトで無効のままであり、固定コマンドはそれらをオプトインしない。`ffprobe` と `ffmpeg` はどちらも、`file` のみのプロトコル許可リスト、1 スレッド、固定の引数配列、シェルなしを使用し、実行ファイルは `PATH` から解決される。添付画像のカバーストリームは再生可能な候補ではない。すべての再生可能ストリームは制限を満たす必要があり、明示的なデフォルトストリームは、決定論的な最小インデックスへのフォールバックより優先される。動画は 600 秒、各次元 8,192 ピクセル、ソースピクセル数 33,554,432 に制限される。FFmpeg は 1～16 個の中間点 JPEG フレームをサンプリングし、小さい入力をアップスケーリングせずに長辺を最大 1,024 ピクセルに縮小し、URL を決して受け取らない。サンプリングはデフォルトで `uniform` である。オプションの `scene_aware` および実験的な `segment_aware` ポリシーは、検証済みのローカルストリームに対して固定の FFmpeg パスを 1 回追加実行し、境界付きの `showinfo` シーンタイムスタンプを選択し、検出器の失敗、タイムアウト、不正な出力、または空の候補セットでは、同じ均等中間点へ決定論的にフォールバックする。セグメント対応モードは、検証済みのシーン区間に比例して中間点サンプルを割り当てる。セグメント対応のエビデンスとフォールバック動作については後述する。ハードな 16 フレーム上限は、すべてのポリシーで選択後に適用される。シーン対応リクエストのバジェットが 1 フレームのみの場合、アクティブな全動画またはフォーカスウィンドウの均等中間点を使用し、`policyEffective: uniform` を報告する。選択された単一のシーンフレームでは時間軸の両端を保持できないためである。呼び出し元は任意で有限のフォーカスウィンドウ（`start`/`end` 秒）を指定できる。境界はメディアの長さにクランプされ、逆順または非有限のウィンドウは拒否され、すべてのサンプリングポリシーは正規化された区間内でのみ実行される。結果のウィンドウはサンプリングメタデータと信頼されていない説明プレフィックスに含まれるため、下流モデルはフォーカスされた抜粋と完全なタイムラインを区別できる。

セマンティックキャプションフォーカスは、別個の明示的な設定である。デフォルトの `full` 分析モードは既存のフレームプロンプトを維持し、リクエストテキストをキャプションモデルへ転送しない。`focused` モードでは、ブリッジは同じ Chat または Responses コンテナから、最新の空でないユーザー作成の `text`/`input_text` のみを読み取り、NFC に正規化し、制御文字と空白を折りたたみ、500 Unicode コードポイントに制限する。結果が空の場合は、正確に `full` プロンプトへフォールバックする。使用可能なヒントは専用の信頼されていないユーザーコンテキストブロックで JSON としてシリアライズされ、観察可能な詳細の優先順位付けにのみ使用できる。メディア内で表示または聞こえる指示に従わないよう警告する別個の警告を上書きすることはできない。テキストフォーカスは `start`/`end` を推測せず、時間サンプラーを変更しない。

#### FU-07 構造的セグメントエビデンス

`segment_aware` は、検証済みのローカル動画ストリームに対して、境界付きの事前分析パスを 1 回使用する。固定のフィルタチェーンは、まず幅を最大 320 ピクセルにスケールし、シーン変化とフリーズ区間を検出してから、ぼけ、平均輝度、空間/時間情報のために 1 秒あたり 1 フレームでサンプリングする。このパスは、600 個の構造サンプル、FFmpeg/フィルタスレッド 1 個、同じ `file` のみのプロトコルおよびコンテナ許可リスト、1 MiB のプロセス出力上限、ブローカーの共有アボート/デッドライン内で最大 30 秒に制限される。リクエストからコマンド、フィルタ、パス、URL を受け取ることは決してない。

構造値は決定論的なサンプリングエビデンスであり、意味的な動画理解ではない。被写体、アクション、キャプション、発話、ユーザー意図を推測しない。シーン境界とフリーズ境界がセグメントを形成し、フリーズ範囲、ぼけ、露出、空間的詳細、時間的変化は、既存の 1～16 フレームバジェットの割り当て方法にのみ影響する。完全にフリーズしたセグメントは 1 フレームに上限設定され、フリーズしていないセグメントは残りのバジェットを競合する。境界がフレーム数より多い場合、均等なタイムラインカバレッジが維持されるため、早い段階の急速なカットが長い末尾セグメントを隠すことはできない。フリーズ境界の 1 秒分析解像度内にあるシーン境界は統合される。

フィルタの欠落、不正または空のエビデンス、検出器エラー、または境界付き事前分析のタイムアウトは、正確に均等中間点ポリシーへフェイルオープンする。呼び出し元のアボートまたはブローカーのデッドラインはフェイルオープンしない。実行中のサブプロセスを終了し、後続のフレーム抽出を防ぎ、プライベート一時ツリーは `finally` で削除される。

`scripts/perf/video-bridge-fu07-eval.ts` は、重複排除後のキャプション呼び出し削減、高密度モーションのバジェット割り当て、ぼけ/露出/SI-TI エビデンス、長い末尾を伴う急速なカット、および漸進的フェードの誤検出に対する決定論的な実 FFmpeg フィクスチャを生成する。事前分析のウォールタイムを記録し、`/usr/bin/time` が利用可能な場合は子プロセスの CPU とピーク RSS も記録する。その品質チェックは構造的なオラクルにすぎない。実際のキャプションモデル品質は `HOLD` のままである。このハーネスには認可されたエンドポイントも固定されたジャッジもないためである。`--caption-cost-per-call-usd` が明示的な正の呼び出しあたり推定値を提供しない限り、金銭的削減も `HOLD` のままである。スクリプトはどちらの結果も捏造しない。

各フレームは 4 MiB、未加工フレーム全体は 23 MiB、シリアライズされたブローカーレスポンスは 32 MiB に制限されます。プライベートな一時ディレクトリは `finally` で削除されます。OmniRoute は FFmpeg を同梱しておらず、カスタム実行可能ファイルのパスも受け付けません。キャプション生成の前に、ブリッジは保守的な視覚的重複排除を行います。各 JPEG は 16×16 のグレースケールバッファに縮小され、最後に保持されたフレームとのみ比較されます。要求されたキャプション予算が 1 フレームを超える場合、抽出処理はその予算の最大 2 倍、かつ 16 フレームを超えない有界の候補プールを提供します。要求された上限は重複排除後にのみ適用され、予算が 2 以上の場合、最終的な間引きでも最初と最後に選択された候補が保持されます。バージョン管理された `grayscale-16x16-mean-cells-v2` ポリシーは、平均輝度差と、正規化された差分が 0.05 以上であるサムネイルセルの比率のうち、大きい方を使用します。重複判定のしきい値は定数 0.04 であり、実行時設定として公開するのではなく、予測可能性を重視して選択されています。この補助的な高コントラスト信号により、平均値のみの比較では見落とされる可能性がある小さな動きや可視テキストの変化を保持できます。比較処理またはデコーダーでエラーが発生した場合はフェイルオープンとなり、カバレッジが維持されます。出力メタデータでは、抽出された候補、正常に使用されたフレーム、除外された視覚的重複が区別されます。

明示的にマークされた動画パートでは、タイムスタンプ付きコンタクトシートを要求できます。ブリッジは、最大 4 列、16 フレームの JPEG グリッドを作成します。各 512 ピクセルのセルでは、ソースのタイムスタンプが高コントラストの下部帯に焼き込まれます。同じタイムスタンプは、後続処理での関連付けと監査のため、テキストメタデータにも保持されます。完成した JPEG は引き続き 32 MiB に制限されます。`sharp` がグリッドをデコードまたは合成できない場合、ブリッジは個々の JPEG フレームにフォールバックします。クライアントによる中断は、コンタクトシート処理にも引き続き伝播します。

昇格の根拠は、合成コンポジションのマイクロベンチマークから意図的に分離されています。`scripts/perf/video-bridge-contact-sheet-eval.ts` は、実際の OpenAI 互換ビジョンモデル向けに、スキーマでバージョン管理された A/B ハーネスを定義します。このハーネスは、プロバイダーから報告されたトークン数、エンドツーエンドのウォールクロックレイテンシ（コンタクトシートの合成を含む）、モデル呼び出し回数、およびマニフェストで定義された事実の保持率を測定します。モデルの未加工レスポンスはレポートに書き込まれません。保持されるのは SHA-256 ダイジェストと一致した事実 ID のみです。`--execute-real` が渡され、`--model`、`OMNIROUTE_BASE_URL`、`OMNIROUTE_API_KEY` が設定されていない限り、このハーネスがネットワーク呼び出しや有料モデルの呼び出しを行うことはありません。この明示的な実行がなければ、機械可読な判定は `HOLD` のままです。合成されたペイロードや呼び出し回数の測定結果だけでは、昇格の根拠にはなりません。

呼び出し元がすでに時間整合済みのテキストを保持している場合、サポート対象の動画パートにオプションの `transcript.cues` 配列を添付できます。各キューには `text`、調査済みの動画時間内に収まる有限の `start`/`end` 区間、および許可リストに登録された `source`（`client`、`embedded`、`audio-bridge` のいずれか）を含める必要があります。`confidence` のデフォルト値は `1` で、`0` から `1` の範囲内でなければなりません。完全に重複するキューは統合されます。OmniRoute がこのメタデータから文字起こしを開始することはありません。検証済みのキューは、ソース、信頼度、時間区間とともに記述結果へコピーされ、フレームのキャプションと並んで、信頼されていない観測結果としてレンダリングされます。無効なテキスト、範囲外のテキスト、または出所情報のないテキストは、キャプションストリームに混入させるのではなく拒否されます。両方のリクエスト本文のトランスクリプトチャネルでは、自己申告された `embedded` または `audio-bridge` ラベルを含め、提供された出所が `client` に正規化されます。コード専用の `trustedSource` 引数を介してこれらの信頼済みラベルを割り当てられるのは、サーバー所有のアダプターだけです。リクエストの JSON フィールドからこの引数に到達することはできません。トランスクリプトのテキストは、その出所にかかわらず、信頼されていないメディア由来コンテンツのままであり、認可を決定するために使用してはなりません。

上級の呼び出し元は、同じ動画に対して `audioTranscript` トラックを提供できます。これはクライアント提供のテキストとして扱われ、サーバーによる文字起こしの証拠とは見なされません。融合処理の境界では、1 つの期限と中断シグナルの下で視覚および音声の観測処理を実行し、それらを共通のタイムライン上で並べ、完全な重複を統合し、片方だけが成功した場合は部分的な結果を報告します。無効な `audioTranscript` は動画全体を失敗させるのではなく、その部分的な結果へと劣化します。つまり、視覚的な説明は保持され、音声ブランチにはサニタイズされた失敗コードが記録されます。ブランチごとの可用性、部分結果フラグ、サニタイズされた失敗コードは、記述結果、ガードレールメタデータ（`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`）、結果キャッシュのメタデータ、およびブリッジの融合カウンターに保持されます。デフォルトの Video Bridge パスでは、音声テキスト化を呼び出したり、メディアの 2 つ目のコピーをダウンロードしたりしません。この明示的なトラックがなければ、動画のみの処理のままです。

**トランスクリプト保持（#12150 P1）。** これは、Video Bridge（それ自体がオプトイン）がトランスクリプトキューをレンダリングするたびに自動的に適用されます。個別の保持フラグはありません。リクエストがいずれかのトランスクリプトキュー（呼び出し元が宣言した `transcript` または統合された `audioTranscript`）をレンダリングすると、ガードレールはそれを `videoBridgeObserved` としてマークし、動画説明のリダクション済みシャドウを生成します。これは、各キューの自由記述本文を `[redacted-video-transcript]` に置き換えた同一のレンダリングであり、文字列を組み立てる前に構造化されたキューフィールドを置換することで構築されます（平坦化されたテキストを解析することはないため、敵対的か通常かを問わず、`[inaudible]`/`[music]` のように `]` を含む本文を含め、キューの内容が残ることはありません）。永続化される呼び出しログのリクエスト本文では、コンテンツの一致に基づいて、動画由来の各テキスト部分がそのリダクション済みシャドウに置き換えられます。`fullText` アンカーは、完了した呼び出し前ガードレールのペイロードから再読み込みされるため、後続のチェーンガードレール（優先度10/95のPIIおよび認証情報マスカー）が説明テキストをインプレースで書き換えた後や、システムプロンプト、ハンドオフ、Memoryの注入によってメッセージ配列の形状が変更された後でも、一致処理は成功します。モデルへアップストリーム送信される本文は変更されません。観測されたリクエストは永続的なMemoryにも何も格納しません（リクエスト由来とレスポンス由来の両方の抽出がスキップされます）。そのため、モデル自身の応答によってトランスクリプトのテキストがMemoryへ反映されることもありません。

**生の動画フィールド（#12430）。** ブリッジが有効で、ネイティブ動画サポートが不明または存在しない場合、定義済みの `transcript`/`audioTranscript` フィールドも、説明処理の失敗後や `maxVideos` 制限後であっても `videoBridgeObserved` を有効化します。`null` と空文字列も該当しますが、存在しないフィールドと動画以外のメタデータは該当しません。保持されるコピーでは、これらのフィールドがリダクションされるか、リクエスト自体が省略され、キャッシュとMemoryはバイパスされます。

これらのフォールバック経路では、有効な呼び出し元のキューは、非標準のプロバイダーフィールドではなく、サポートされている `text`/`input_text` パートになります。リクエストで提供された両方のトラックは、引き続き信頼されていない `client` 観測として扱われ、動画が説明されておらず、タイムスタンプがメディアに照らして検証されていないことを示す明示的な警告が付与されます。既存の256キュー、合計64 KiB、およびキューごとの上限は、2つのトラックを合わせて適用されます。タイムスタンプは、ブローカーの600秒という上限、および指定されたフォーカスウィンドウの範囲内に収まる必要があります。無効なトラックは破棄され、任意のテキストとして転送されることはありません。有効な兄弟トラックは、合計上限を超えない限り引き続き使用できます。nullまたは空のフィールドからテキストが追加されることはありません。このフォールバックによってメディア取得や文字起こしが追加されることもありません。トランスクリプト拡張フィールドは、フォールバック用の動画キャリアと、その `video_url`/`source` オブジェクトから削除されます。OpenAIのワイヤー許可リストは引き続き厳格です。ネイティブサポートが不明な動画キャリアは引き続き利用でき、テキストのみをサポートすることが判明しているターゲットでは安全なマーカーが維持されます。構造化されたリダクションシャドウによって追加されたトランスクリプトテキストが保護される一方、呼び出し元が所有する元のリクエストは変更されません。ネイティブサポート対象および無効化されたブリッジでは、既存のバイパス動作が維持されます。

追加で保持されるコピーでも、同じ観測済みリクエストシグナルが使用されます。ガードレール適用前の生のクライアントリクエストスナップショット、メモリ内の保留中リクエスト、および早期に拒否されたリクエストのログでは、動画パート内のトランスクリプトフィールドが構造的に置き換えられます。パイプラインステージとコンテキストハンドオフによって合成された文字列プロンプトは、永続化されるリクエスト本文のシンクでリダクションされます。永続化された `video_content_removed` マーカーにより、`previous_response_id` による継続は、意図的に破棄されたテキストを再構築するのではなく、フェイルクローズします。観測済みリクエストがログ記録前にパート単位のリダクションシャドウを失った場合、または複数ある動画シャドウのうち1つでも後続のリクエスト変更後に一致しなかった場合、部分的にリダクションされたトランスクリプトを保持する代わりに、保持対象のリクエスト本文全体が省略されます。

観測済みリクエストでは、モデルの応答が構造化されたキュー境界なしにトランスクリプトの任意の部分を引用する可能性があります。そのため、永続化される呼び出しログの `responseBody` は省略マーカーに置き換えられます。詳細なパイプライン成果物（アップストリーム本文、クライアント本文、ストリームチャンクを含む可能性があります）は保持されません。そのリクエストについては、セマンティックキャッシュ、冪等性キャッシュ、および推論リプレイキャッシュの読み取りと書き込みがバイパスされます。プロバイダーへのリクエストとクライアントから見えるレスポンスは変更されません。詳細な成果物が省略される場合、早期のキープアライブバイトは一時バッファから排出されます。Kiroの不正なEventStreamに関する警告では、ペイロードのバイト数のみが報告され、その内容やJSONパーサーの生のエラーが報告されることはありません。
これは、無関係なすべてのプロバイダー／プラグイン診断が監査済みであると主張するものではありません。より広範な保持シンクの精査は#11658で追跡されています。

内部の `/api/modality-bridge/video/drilldown` ライフサイクルは、独立したループバック／トークン認証済みのキャッシュ基盤です。すべての操作には、正規化された不透明なプリンシパルIDも必要です。本番環境の呼び出し元を有効化する前に、そのIDを認証済みテナントから導出する必要があり、クライアントが選択した値を転送してはなりません。キャッシュキーは、そのプリンシパルを正規化されたセッションIDおよび動画参照IDに結び付け、それらのSHA-256由来のキーのみを保存し、読み取りと削除の両方を同じプリンシパルにスコープします。キャッシュはエントリごとに最大16個の派生JPEGフレームを保存し、10分後に期限切れにします。また、範囲が制限された `start`/`end` 読み取り、または明示的なセッション削除をサポートします。

各プリンシパルは、16エントリおよび64 MiBの正規JPEGデータに制限されます。これらの制限は、グローバルな64エントリ／256 MiBの上限とは独立しています。プリンシパルのクォータ逼迫時には、グローバルLRUによる削除が検討される前に、そのプリンシパルで最も長く使用されていないエントリのみが削除されます。期限切れのエントリは、キャッシュ操作時にプリンシパルとグローバルの両方の集計から除去されます。一方、キャンセルや検証失敗では、不完全な置換がコミットされることはありません。

キャッシュは、非正規の Base64、過剰なパディング、JPEG 以外のメディア、不正または切り詰められた JPEG、および境界付きの全画像 `sharp` デコード中に警告を生成する JPEG を拒否します。受け入れた各画像を正規の JPEG として再エンコードし、呼び出し元のフィールドを信頼せずにデコードされたバイトから幅と高さを導出し、末尾のポリグロットバイトは保持せず破棄します。両方のクォータには、境界付きの正規圧縮バッファのみが計上されます。JSON ワイヤ制限には、32 MiB のデコード済み入力上限に対する Base64 オーバーヘッドが含まれます。保存される各導出には、検証済みの JPEG 形式/解像度、サンプリングポリシー、導出バージョン、作成時刻、サーバー計算のコンテンツハッシュ、ハッシュ化された親参照、および信頼された呼び出し元の親コンテンツハッシュが記録されます。キャンセルは、アトミックなキャッシュコミット前の非同期デコード/ハッシュフェーズ間でチェックされます。

このトランシェでは、まだ本番プロデューサーをルートに接続しておらず、マルチ解像度バリアント選択も提供していません。したがって、透過的な Video Bridge リクエストパスでは追加の処理は発生せず、テナントにバインドされたプリンシパル導出と完全な FU-08 マルチ解像度ライフサイクルは、完了した動作として文書化されるのではなく、明示的なフォローアップ作業として残ります。

フレームには、設定された Video モデルで順次キャプションが付けられます。空の Video オーバーライドは Vision 設定を継承します。両方が空の場合、Vision オートルーターが有効な vision 対応モデルを選択します。成功したキャプションは、元のパートを安定した `[Video description:` プレフィックスに置き換えます。これは、テキストを信頼されていないメディア由来の観察としてマークし、下流のモデルにメディア内で見つかった指示に従わないよう伝えます。フレームキャプションのキャッシュキーには、JPEG バイト、プロンプト、タイムスタンプ、および有効なモデルが含まれます。キャッシュされるのは成功したキャプションのみです。キャッシュエントリは、フォールバックモデルを含む、実際に成功したプロデューサモデルを保持します。異なるフレームが異なるモデルによって生成された場合、ブリッジは `mixed` を報告します。キャッシュヒットは、そのプロデューサアイデンティティを、要求されたルーティング計画として再ラベル付けするのではなく再利用します。全体動画の結果キャッシュは、出力を変更するすべての入力 — プロンプト、有効なモデル、サンプリングポリシー、フレーム数、セマンティック分析モード、正規化されたフォーカスヒントの SHA-256 フィンガープリント、フォーカスウィンドウ、`transcript`、`audioTranscript`、およびコンタクトシートフラグ — をキーとします。したがって、これらの次元のいずれかを変更するとキャッシュミスとなり、古い再利用にはなりません。ビジュアル重複排除ポリシーのバージョン、しきい値、および境界付き候補フレーム数も、結果キャッシュのキーとメタデータに明示されます。したがって、ポリシーの変更によって古い全体動画の説明を再利用することはできません。結果キャッシュ v4 のメタデータはモードとフィンガープリントを保持し、生のユーザータスクは保持しません。ガードレールのメタデータは、要求された分析モードと有効な分析モードの両方を報告します。使用可能なユーザーテキストがない状態で要求された `focused` モードは、実質的に `full` として報告されます。

ガードレールはサポートされているすべての動画パートを抽出しますが、`modalityBridgeVideoMaxVideos` を超えて記述することはありません。`supportsVideo === false` であることが証明されたターゲットでは、失敗した動画と上限超過の動画は明示的な安全なテキストマーカーになり、生の動画が残らないようにします。機能が不明な場合、それらのパートは動画キャリアを保持します。フォールバックのトランスクリプトは、上記の境界付きテキスト変換に従います。`supportsVideo === true` のターゲットはブリッジをバイパスします。クライアントリクエストのアボートシグナルは、ダウンロード、ブローカーキュー、サブプロセス、およびキャプション呼び出しに伝播します。アボートは動画間で停止し、生のメディアへのフェイルオープンは決して行いません。

ランタイム設定は DB ベースで Zod 検証されます:

| キー                                | デフォルト  | 範囲 / 動作                                                                                                       |
| ----------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | オプションのランタイム。オプトイン                                                                                |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` は汎用キャプションを保持します。`focused` は境界付きの信頼されていない最新ユーザーコンテキストを使用します |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge モデルを継承                                                                                        |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                              |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`、`scene_aware`、または比例的な `segment_aware`。検出器の失敗時は `uniform` にフォールバックします       |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                               |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                    |

レガシーの永続化された Video タイムアウト値が 120 秒を超える場合、ブローカーの期限にクランプされます。その制限を超える新しい設定の書き込みは拒否されます。`GET /api/modality-bridge/video/runtime` は、認証またはランタイムプロービングの前に、信頼されたスタンプ付きループバックローカリティを要求し、その後、管理認証を要求します。返されるのは `available`、サニタイズされた FFmpeg/ffprobe のバージョン、およびランタイムが利用できない場合の固定の理由のみです。内部抽出エンドポイントは公開アップロード API ではありません。キュー飽和時は `503` と `Retry-After` を返し、呼び出し元の切断時は `499`、固定のブローカー期限時は `504` を返します。変換されたレスポンスは、Vision または Audio セグメントを削除せずに、中央の `x-omniroute-modality-bridge` ヘッダーに `video->text;model=<visionModel>;parts=<videos>` を追加します。

### PII Masker (`piiMasker.ts`)

**両方**のステージで実行されます。

**`preCall`** はペイロードをクローンし、`system`、`messages`、`input`、`prompt`（プレーン文字列の項目を含む）を走査して、文字列の `content`/`text` フィールドに `processPII()`（`@/shared/utils/inputSanitizer` から）を適用します。`PII_REDACTION_ENABLED=true` の場合、検出された PII は送信ペイロード内で秘匿化されます。これは `INPUT_SANITIZER_MODE`（プロンプトインジェクションポリシーのみを制御します）とは独立しています。秘匿化がオフの場合、呼び出しはコンテンツを書き換えずに検出件数を記録します。

- **`postCall`** はレスポンスをディープクローンし、`sanitizePIIResponse()` と Responses API 形状のマスカー（`maskResponsesOutput` — `output_text` と `output[].content[].text` を対象）を実行します。秘匿化が発生した場合、変更されたレスポンスが元のレスポンスを置き換えます。

このガードレールは決してブロックせず、注釈を付ける（`meta.detections`、`meta.redacted`）か、書き換えるだけです。

#### タイプ別選択、カスタムパターン、検出カウンター

**ダッシュボード → 設定 → セキュリティ → PII マスキング**では、_何を_マスクするかを選択します。マスキング自体を有効化するものではありません。それには引き続き `PII_REDACTION_ENABLED`（リクエスト）と `PII_RESPONSE_SANITIZATION`（レスポンス + SSE）が必要で、どちらもデフォルトではオフです。

- **タイプ別選択** — 組み込み ID は `src/shared/constants/piiTypes.ts`（`PII_BUILTIN_TYPES`）に一覧されています。未設定はすべてのタイプを意味します（この設定が存在する前の動作）。リクエストエンジンの `ssn_us` パターンは `ssn` にマッピングされます。テンプレート（Minimal、Standard、Financial、Brazilian、USA、Full）は UI のチェックボックスを埋めるだけです。
- **カスタムパターン** — 最大 20 個の正規表現またはワイルドカードパターン（`*` = 最大 64 文字の非空白文字、`?` = 1 文字）。一致部分は `[CUSTOM_REDACTED]` になります。すべてのパターンは `compilePiiCustomPattern()`（`src/shared/utils/piiCustomPatterns.ts`）を通ります。最大 500 文字、フラグは `g i m s u` に限定、コンパイルできること、`safe-regex`（壊滅的なバックトラッキング）に合格すること、空文字列または秘匿化プレースホルダーに一致しないことが必要です。失敗するパターンは保存時とテスト時に拒否され、保存済みの行が失敗する場合は実行時にコンパイルされずにスキップされます。カスタムパターンはマスキングがオンの間だけ実行されます。
- **検出カウンター** — タイプ別の件数（一致した値を決して含まない）で、メモリ内に保持され、再起動時にリセットされます（`src/lib/pii/piiDetectionStats.ts`）。マスキングがオンの間だけ増加します。

設定は `key_value` テーブル（名前空間 `pii_settings`、`src/lib/db/piiSettings.ts`）に存在し、1 秒のキャッシュを介して読み取られます。API:

| メソッド | パス                     | 目的                                                                        |
| -------- | ------------------------ | --------------------------------------------------------------------------- |
| `GET`    | `/api/settings/pii`      | フラグ状態、`enabledTypes`、`customPatterns`、検出カウンター                |
| `PUT`    | `/api/settings/pii`      | `enabledTypes`（`null` = すべて）および/または `customPatterns` を置き換え  |
| `POST`   | `/api/settings/pii/test` | 最大 8 KB のサンプルに対して 1 つのパターンをドライラン。何も保存されません |

3 つすべてが管理認証を必要とし、Zod（`src/shared/validation/schemas/piiSettings.ts`）でボディを検証します。

### プロンプトインジェクション（`promptInjection.ts`）

ユーザー提供コンテンツ内の敵対的な構造を検出し、設定されたポリシーを適用します。動作は環境変数とコンストラクターオプションによって制御されます:

| 設定             | 環境変数                                                                                                  | デフォルト | 効果                                                                                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 有効             | `INPUT_SANITIZER_ENABLED`                                                                                 | `true`     | `false` の場合、ガードレールは短絡します。                                                                                                                                                                                           |
| モード           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                           | `warn`     | インジェクションポリシー: `block`、`warn`、または `log`。（`redact` は後方互換性のために受け入れられますが、インジェクションテキストを**除去しません**。リクエストの PII 書き換えは `PII_REDACTION_ENABLED` によって制御されます。） |
| ブロックしきい値 | `blockThreshold` オプション / `INPUT_SANITIZER_BLOCK_THRESHOLD`（別名 `INJECTION_GUARD_BLOCK_THRESHOLD`） | `high`     | ブロックに必要な最小重大度。デフォルトでは Medium は監視のみです。                                                                                                                                                                   |

**モードの優先順位**（`getMode`）: 呼び出し元の `options.mode` → `INJECTION_GUARD_MODE` の **DB 機能フラグによる上書き**（ダッシュボード → 設定 → 機能フラグ） → `INJECTION_GUARD_MODE` 環境変数 → `INPUT_SANITIZER_MODE` 環境変数 → `warn`。したがって、ダッシュボードの上書きは環境変数より優先されるため、機能フラグ UI は実行中のガードをライブで制御します（再起動不要）。DB 読み取りはフェイルセーフです。エラーが発生した場合、ガードは環境変数ベースの動作にフォールバックし、上書きが設定されていない場合の動作は環境変数のみによる解決と同一です。

検出ソース:

1. `@/shared/utils/inputSanitizer` の `sanitizeRequest()`（パイプラインの他の場所で使用される共有検出器セット）。
2. 組み込みの `DEFAULT_GUARD_PATTERNS`（現在は `system_override_inline` と `markdown_system_block`、どちらも `high` 重大度）。
3. コンストラクターオプションで渡される任意の `customPatterns`（文字列、正規表現、または `{ name, pattern, severity }` レコード）。

`mode === "block"` **かつ**少なくとも1つの検出結果が重大度のしきい値を満たす場合、`preCall` は `{ block: true, message: "Request rejected:
suspicious content detected" }` を返します。`warn`/`log` モードでは、ガードレールはログを記録しますが、呼び出しを許可します。共有ヘルパー `evaluatePromptInjection()` もエクスポートされており、レジストリを経由せずにプロンプトを評価する必要がある呼び出し元で使用できます。

**スキャン上限（v3.8.20）：**検出器が検査するのは、結合されたプロンプトテキストの**先頭16 KB**のみです。`src/shared/utils/inputSanitizer.ts` で `MAX_INJECTION_SCAN_BYTES = 16 * 1024`（16 384バイト）と定義されています。`detectInjection()` と `evaluatePromptInjection()` はどちらも、パターンループを実行する前に `slice(0, MAX_INJECTION_SCAN_BYTES)` を適用します。インジェクション命令は入力の先頭付近に配置されるため、これにより検出能力を低下させることなく、数百KB規模のペイロードに対する正規表現のCPU/GC負荷を制限できます（#3932、#4041を参照）。

### 認証情報マスカー（`credentialMasker.ts`）

デフォルトチェーンの最後（優先度 `95`）で、**両方**のステージに対して実行されます。送信ペイロード（メッセージ内容、ツール呼び出しの引数、ツールの結果）**および**プロバイダーのレスポンスから、よく知られたAPIキー／シークレットトークンのパターンを秘匿化します。これにより、プロンプトに貼り付けられた認証情報（またはツールの結果によってそのまま返された認証情報）が、上流のプロバイダーやクライアントに漏洩するのを防ぎます。

- **明示的な有効化が必要**で、PII秘匿化と同じ規約です（ハードルール#20に準拠）：`settings.credentialRedactionEnabled === true` **または** `CREDENTIAL_REDACTION_ENABLED=true` でない限り無効です。無効な場合、ガードレールは何も行いません。ブロックも書き換えも一切行いません。
- `redactCredentials()` はペイロード／レスポンスのツリー全体を走査し（`walkValue()`、プロトタイプ汚染に対して安全、`WeakSet` により循環参照にも対応）、一致箇所を `[REDACTED:<type>]` プレースホルダーに置き換えます。実際に変更されたブランチのみを複製します。
- `CREDENTIAL_PATTERNS` は、LLMプロバイダーキー（OpenAI、OpenAI-proj、Anthropic、Google、Hugging Face、Replicate）、VCS/SaaSトークン（GitHub、Slack、Linear、Notion、npm、Postman、Discord）、決済キー（Stripe、Square）、クラウドキー（AWSアクセスキー、Twilio、SendGrid、Mailgun）、秘密鍵／JWT、認証情報を含む接続文字列（`mongodb://user:pass@...` など）、および汎用の `Authorization`/`x-api-key`/`api-key`/`apikey` ヘッダー値パターンを対象とします。ヘッダー形式のキー（`authorization`、`x-api-key`、`api-key`、`apikey`）は、汎用テキスト正規表現ではなく構造的に秘匿化されます（値のみを秘匿化し、`Bearer `/`Basic ` のようなスキームプレフィックスは保持します）。
- このガードレールはブロックを一切行わず、書き換え（`modifiedPayload` / `modifiedResponse`）と注釈付け（`meta.credentialsRedacted`、`meta.count`）のみを行います。

リグレッションガード：`tests/unit/credential-masker-guardrail.test.ts`。

## 基本コントラクト (`base.ts`)

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
  block?: boolean; // true の場合、チェーンを短絡する
  message?: string; // ブロック時に表示される
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // リクエストを書き換えるために preCall から返される
  modifiedResponse?: TValue; // レスポンスを書き換えるために postCall から返される
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

ガードレールは、`void`、`{}`、または
`{ block: false }` のいずれかを返すことで「変更なし」を示します。`modifiedPayload`/`modifiedResponse` を返すと、
チェーン内を流れる値が置き換えられ、後続のガードレールに渡されます。
`signal?: AbortSignal` は、呼び出し元のライフサイクルをガードレールに伝達します。リクエストの中断は、意図的なフェイルオープンの例外です。メディアブリッジは処理を停止してクリーンアップし、対応していないことが分かっているターゲットに未加工のメディアを復元することはありません。

## レジストリ (`registry.ts`)

シングルトン `guardrailRegistry` は以下を公開します。

- `register(guardrail)` — ガードレールを追加（または正規化された名前に基づいて置換）し、
  `priority` の昇順で再ソートします。
- `clear()` / `list()` — 管理用ヘルパーです。
- `runPreCallHooks(payload, context)` — 有効なガードレールを反復処理し、`modifiedPayload` を介して
  ペイロードを引き渡し、最初の `block: true` で停止します。
- `runPostCallHooks(response, context)` — レスポンス側で同じ処理を実行します。
- `resetGuardrailsForTests({ registerDefaults })` — 状態をクリアし、必要に応じて
  デフォルトを再登録して、テストをクリーンに分離します。

どちらのランナーも `{ blocked, payload|response, results, guardrail?, message? }`
を返します。ここで `results` は、ガードレールごとの
`blocked`、`skipped`、`modified`、`error`、`meta` フィールドを含む
`GuardrailExecutionResult` レコードの配列で、トレースに役立ちます。

### リクエスト単位でのガードレールの無効化

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` は、現在の
リクエストでスキップすべきガードレール名を重複排除したリストに集約します。
次の5つの経路がこの順番で読み取られ、1つのリストに統合されます
（重複排除では最初に出現したものが優先されます）。

1. `apiKeyInfo.disabledGuardrails`
2. リクエストボディの `disabledGuardrails`（トップレベル）
3. リクエストボディの `metadata.disabledGuardrails`（`metadata` がオブジェクトの場合のみ）
4. ヘッダー `x-omniroute-disabled-guardrails`
5. レガシーヘッダー `x-disabled-guardrails`

2つのヘッダーを含む5つの経路がすべて統合されます。`x-omniroute-disabled-guardrails` と
`x-disabled-guardrails` の両方を送信すると、それぞれのリストの和集合がスキップされます。また、空の新しいヘッダーによってレガシーヘッダーが隠されることもなくなりました
（[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)、修正は
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)）。

値には文字列の配列またはカンマ区切りの文字列を指定できます。名前は前後の空白が除去され、
小文字のケバブケースに正規化され（`pii_masker` → `pii-masker`）、空の
エントリは削除されます。結果は `context.disabledGuardrails`
を介してレジストリに渡され、一致するガードレールがスキップされます（`results` 内で `skipped: true`）。

無効化リストが影響するのは **レジストリ** のみです。プロンプトインジェクションの `block` モードは
必須の境界です。インジェクションガードミドルウェア
（`src/middleware/promptInjectionGuard.ts`）は、呼び出し元が制御できる無効化リストを渡さずに `evaluatePromptInjection()` を呼び出します（以前実行していた、使用されない
`resolveDisabledGuardrails({ body })` 呼び出しは
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) で削除されました）。そのため、
`prompt-injection` を無効化するリクエストでも、`block` モードでは拒否されます。これは
意図された設計です。無効化経路は呼び出し元が制御できるため（リクエストボディ、
メタデータ、ヘッダー）、オペレーターが設定したセキュリティ制御を呼び出し元が
無効化できてはなりません
（[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
で導入されたヘッダーの和集合は、どのレジストリガードレールがスキップされるかだけを変更し、クライアントが
ミドルウェアを迂回できるようにするものではありません。キー単位およびグループ単位の必須ガードレールポリシーは、
v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) で追跡されています。
[適用範囲と制限](#coverage-and-limits)を参照してください。

## 実行順序

`src/sse/handlers/chat.ts` と `open-sse/handlers/chatCore.ts`（[カバレッジと制限](#coverage-and-limits)に記載されている chat 系ルート）を流れる各リクエストについて:

1. `resolveDisabledGuardrails(...)` は API キー、body、ヘッダーからスキップリストを構築します。
2. `guardrailRegistry.runPreCallHooks(body, ctx)` は優先度の昇順でガードレールを実行します:
   - 無効化されたガードレールは `skipped` として記録されます。
   - 各ガードレールの `preCall` は `modifiedPayload` を介してペイロードを書き換える場合があります。
   - 最初の `block: true` でチェーンが短絡され、ハンドラーはガードレール拒否レスポンスを返します。
3. （書き換えられた可能性のある）ペイロードは combo ルーティングと上流へのディスパッチへ流れます。
4. **非ストリーミングのみ:** レスポンスが組み立てられた後、`guardrailRegistry.runPostCallHooks(...)` がレスポンスに対して同じチェーンを実行します。ここでの `block: true` は上流のレスポンスを破棄し、HTTP 400 を返します。ストリーミングレスポンスはこのステップを完全にスキップします。

例外をスローするガードレールは `error: <message>` として記録され、`logger.warn` を介してログに出力されますが、チェーンは継続します — 設計上 fail-open です。

## カバレッジと制限

ガードレールレジストリは chat パイプラインにのみ組み込まれています。これらの制限は `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` と `tests/unit/guardrail-pipeline-characterization.test.ts` によって固定されています。動作を変更する際は、これらのテストを意図的に更新してください。

### フックが実行される場所

| フック / 制御                                  | 実行対象                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `runPreCallHooks`                              | `handleChat`（`src/sse/handlers/chat.ts`）で処理されるリクエスト: `/v1/chat/completions`、`/v1/completions`、`/v1/messages`、`/v1/responses`（および `/v1/responses/*`）、`/v1/relay/chat/completions`、`/v1/providers/{provider}/chat/completions`、`/v1/api/chat`、`/v1/antigravity`、`/v1beta/models/*`、Telegram chat プロキシ。またダッシュボードのテストエンドポイント `/api/guardrails/test`。pre-call のブロックは HTTP 400 を返します。 |
| `runPostCallHooks`                             | **非ストリーミング**の chat レスポンスのみ（`open-sse/handlers/chatCore/nonStreamingResponse.ts`）。ストリーミングレスポンスは決してここに到達しません。                                                                                                                                                                                                                                                                                         |
| ストリーミング PII                             | `createPiiSseTransform`（`src/lib/streamingPiiTransform.ts`）。`PII_RESPONSE_SANITIZATION` がオンのとき `streamingPipeline.ts` でパイプされます。これはガードレールではないため、無効化チャネルの影響を受けません。                                                                                                                                                                                                                              |
| インジェクションガードミドルウェア（レガシー） | プロンプトを含むすべての `/v1` ルート（chat 系を含む。[ルートカバレッジ](#injection-guard-route-coverage--red-team-phase-8--block-d)を参照）。プロンプトインジェクションのみ。                                                                                                                                                                                                                                                                   |

### 対象外のもの

- **メディア、embeddings、データルート**（`/v1/images/*`、`/v1/embeddings`、`/v1/audio/*`、`/v1/videos/generations`、`/v1/music/generations`、`/v1/rerank`、`/v1/search`、`/v1/moderations`）はレジストリに到達しません。ここでは PII マスキング、認証情報マスキング、モダリティブリッジは実行されません。唯一のチェックはレガシーのインジェクションガードミドルウェアです。
- **ストリーミングレスポンス**には post-call ガードレールが適用されません: `pii-masker` や `credential-masker` の post-call もなく、post-call ブロックもありません。適用されるのはストリーミング PII 変換のみです（`PII_RESPONSE_SANITIZATION` がオンの場合）。ストリーミングレスポンスでエコーバックされた認証情報はリダクトされません。
- **無効化チャネルとミドルウェア（設計上）:** ミドルウェアは `evaluatePromptInjection()` への独自の呼び出しでプロンプトインジェクションを評価し、呼び出し元が制御する無効化リストを一切渡しません。`block` モードは必須の境界であり、chat 系ルートを含め、呼び出し元が制御する無効化ではバイパスできません（[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。`prompt-injection` を無効化しても、レジストリのガードレールがスキップされるだけです。

### post-call の前にレスポンスを参照するもの

非ストリーミングパスでは、順序は次のとおりです: メモリ抽出 → 組み込みツール実行 → post-call ガードレール → post-call ブロックによる終了 → セマンティックキャッシュの保存。

- **メモリ抽出**と**ツール実行**は、ポストコールのガードレールが応答を書き換えたりブロックしたりする前に、その応答を参照します。[#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) 以降、メモリ抽出は `PII_RESPONSE_SANITIZATION` がオンの場合（ストリーミングと非ストリーミングの両方）、抽出されたテキストを `sanitizePII` に通しますが、ポストコールで後からブロックされる応答も、依然としてメモリとツールに渡されています。
- **セマンティックキャッシュ**はポストコール後に応答を保存するため、書き換え後の応答を保存し、ブロックされた応答はキャッシュされません。キャッシュエントリのキーは API キーごとに設定されます。

## 設定

組み込みガードレールが読み取る環境変数:

| 変数                                  | 使用元               | 効果                                                                                                                  |
| ------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`   | `false` に設定すると検出を完全に無効化します。                                                                        |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`   | インジェクションポリシー: `warn`、`block`、または `log`。レガシー値 `redact` はインジェクション本文を書き換えません。 |
| `INJECTION_GUARD_MODE`                | `prompt-injection`   | インジェクションガードのモード。同時に DB の機能フラグでもあり、環境変数を**上書き**します（DB > ENV）。              |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`   | `MODE=block` が拒否する最小重大度: `high`（デフォルト）、`medium`、または `low`。                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`   | `INPUT_SANITIZER_BLOCK_THRESHOLD` のレガシーエイリアス。                                                              |
| `PII_REDACTION_ENABLED`               | `pii-masker`         | `true` の場合、リクエスト内の PII がマスクされます（インジェクションモードとは独立）。                                |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker`（下流） | レスポンス側のマスカーの動作を制御します。                                                                            |

Modality Bridge のガードレールは、環境変数ではなく DB に裏付けられた設定ストア（`getSettings()`）からランタイム設定を読み取ります。Vision のプライマリキーは `modalityBridgeVisionEnabled`、`modalityBridgeVisionMode`、`modalityBridgeVisionModel`、`modalityBridgeVisionTaskAware`、`modalityBridgeVisionPrompt`、`modalityBridgeVisionTimeout`、`modalityBridgeVisionMaxImages`、`modalityBridgeVisionMaxChars`、`modalityBridgeCacheEnabled`、`modalityBridgeCacheTtlMinutes`、`modalityBridgeCacheMaxEntries` です。レガシーの `visionBridge*` キーは、ドキュメント化された 1 サイクル分の読み取りフォールバックとしてのみ受け付けられます。ダッシュボードからの書き込みではプライマリキーが使用されます。デフォルト値とフォールバックリゾルバは `src/shared/constants/modalityBridgeDefaults.ts` にあり、レガシー定数は `src/shared/constants/visionBridgeDefaults.ts` に保持されています。

Audio は `modalityBridgeAudioEnabled`、`modalityBridgeAudioModel`、`modalityBridgeAudioTimeout`、`modalityBridgeAudioMaxClips` に加えて、共有の `modalityBridgeCache*` 設定を使用します。Audio にはレガシーキーのフォールバックがありません。これらのキーは Modality Bridge スキーマとともに導入されたためです。

Video は `modalityBridgeVideoEnabled`、`modalityBridgeVideoAnalysisMode`、`modalityBridgeVideoModel`、`modalityBridgeVideoFrameCount`、`modalityBridgeVideoSamplingPolicy`、`modalityBridgeVideoMaxVideos`、`modalityBridgeVideoTimeout` に加えて、共有の `modalityBridgeCache*` 設定を使用します。FFmpeg/ffprobe はオプションの運用依存関係であり、フレームキャプション生成はレイテンシとモデルコストを増加させるため、デフォルトでは無効になっています。

## カスタムガードレール

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

手順:

1. `BaseGuardrail` を拡張して `src/lib/guardrails/myGuardrail.ts` を作成します。
2. `preCall` および/または `postCall` を実装します。
3. インポート時に登録する（`registerDefaultGuardrails` から push する）か、実行時に `guardrailRegistry.register(...)` を呼び出します — レジストリは同じ正規化名を持つ既存のガードレールを置き換えます。
4. `tests/unit/` 配下にテストを追加します（既存の例:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`）。

## テスト

テスト間で既知の状態から開始するには `resetGuardrailsForTests()` を使用します。
空のレジストリで開始し、テスト対象のガードレールのみを登録するには `{ registerDefaults: false }` を渡します。Vision Bridge は依存性注入（`deps.getSettings`、`deps.callVisionModel`）を受け入れます。Audio Bridge は設定、機能、STT モデル選択、認証情報チェック、文字起こしのための同等の接続点を公開します。したがって、テストは DB やネットワークアクセスなしで両方のフローを実行できます。

## 関連項目

- `src/lib/guardrails/` — 実装
- `src/shared/utils/inputSanitizer.ts` — プロンプトインジェクションと PII マスキングを支える共有検出器
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge のデフォルトと強制ブリッジモデル一覧
- `src/shared/constants/modalityBridgeDefaults.ts` — Vision/Audio の共有ランタイムデフォルト
- `docs/architecture/RESILIENCE_GUIDE.md` — 直交レイヤー（サーキットブレーカー、クールダウン）
- `docs/reference/ENVIRONMENT.md` — 環境変数の完全リファレンス

## インジェクションガードのルートカバレッジとレッドチーム（Phase 8 · Block D）

インジェクションガード（`createInjectionGuard` / `withInjectionGuard`）は、ユーザープロンプトを受け付けるすべてのルートをカバーします。これは `INJECTION_GUARD_MODE` に従います（デフォルトの `warn` = ログのみ、`block` = HTTP 400 `SECURITY_001` を返す）。

| 種類             | ルート                                                                                                                                               | デフォルトモード |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| テキスト（既存） | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn             |
| 生成系           | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn             |
| データ           | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn             |

テキスト抽出（`extractMessageContents`）は `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` をカバーします。

**レッドチーム（夜間、`nightly-llm-security.yml`）:** promptfoo は、`INJECTION_GUARD_MODE=block` において各ルートが OWASP-LLM コーパスをブロックすることを検証します。garak はプローブを実行します（シークレットがない場合はスキップ）。`moderations` は一貫性のために含まれています。ブロックモードは必須の境界です。`evaluatePromptInjection()` はミドルウェアが渡すリクエストごとの無効化リストを無視するため、`disabledGuardrails` はルートをこれから免除する**ことはありません**（[#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)）。

夜間ワークフロー（`.github/workflows/nightly-llm-security.yml`、cron + 手動ディスパッチ）には 2 つのジョブがあります:

- **`promptfoo-guard`（ブロッキング）** — `INJECTION_GUARD_MODE=block` で `promptfoo eval -c promptfooconfig.yaml` を実行します。各敵対的ケース（例:「ignore all previous instructions…」、DAN スタイルのジェイルブレイク）は、レスポンスが `error.code === "SECURITY_001"` を含むこと、すなわちガードが実際にリクエストを拒否したことを検証します。
- **`garak`（advisory）** — ローカルの OmniRoute インスタンス（`http://localhost:20128/v1`）に対して garak `--probes promptinject,dan,leakreplay` を実行します。プロバイダーシークレット（`PROMPTFOO_PROVIDER_KEY`）によって制御され、正常にスキップされ、`|| true` が付加されるため、CI を失敗させずにレポートします。

ガードヘルパー（`createInjectionGuard` / `withInjectionGuard`）のカバレッジは、プロンプトを含むすべての `/v1` ルートに及びます。プロンプトテキストは、`src/shared/utils/inputSanitizer.ts` の `extractMessageContents()` によって `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` から取得されます。
