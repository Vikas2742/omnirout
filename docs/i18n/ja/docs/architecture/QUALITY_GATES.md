# Quality Gates Reference (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇵🇹 [pt](../../../pt/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

このドキュメントは、OmniRoute におけるすべての CI 品質ゲートの正式なリファレンスです。
各ゲート、その検証内容、実行される CI ジョブ、ラチェットベースラインまたは合否ポリシーの
どちらを使用するか、ビルドをブロックするかアドバイザリかを説明します。

簡潔な概要と許可リストポリシーについては、`AGENTS.md` の「Quality Gates & Ratchets」セクションを
参照してください。同じシステムの批判的評価、成熟度分類、ツール非依存の
再現計画については、
[品質ゲートプレイブック](../ops/QUALITY_GATE_PLAYBOOK.md)を参照してください。

---

## ゲート一覧と実行プロファイル

### 候補の受け入れ

CI ワークフローと Quality Gates ワークフローは、それぞれ安定した判定結果 `Gate / CI` と
`Gate / Quality` を出力します。バージョン管理された受け入れポリシーでは、すべての上流ジョブを
必須またはアドバイザリとして列挙します。適用対象となる必須ジョブは成功しなければなりません。
結果が欠落、キャンセル済み、スキップ済み、保留中、不明の場合、PASS を確定できません。有効な
docs-only または catalog-only の分類により、コードレーンが適用対象外になる場合がありますが、
ドラフト PR は受け入れ対象の候補ではありません。`hotfix` ラベルによってエビデンス要件が
免除されることはありません。

両方のワークフローは、PR、main/release ブランチへのプッシュ、手動ディスパッチ、および
マージグループイベントを対象とします。プッシュ、ディスパッチ、マージグループでは、
すべての選択対象が実行されます。フォークとマージグループでは、通常はセルフホストランナーを
選択するジョブにホストランナーを使用します。ロールアウト前に、十分なホスト容量があることを
確認する必要があります。

各 JSON レシートは、チェックアウトされた SHA、ワークフロー実行、および試行を識別します。
CLI は、チェックアウト SHA とイベント SHA の不一致を拒否します。ワークフローテストでは、
ポリシーのメンバーシップを判定ジョブの `needs` リストに結び付けるため、新規または削除された
レーンが暗黙のうちに消えることはありません。レシートが対象とするのは、それ自身の
ワークフローであり、公開、デプロイ、または既存のアドバイザリスキャナーの内部処理ではありません。
ブランチルールで両方のチェック名を有効化することは、別途必要な管理上の変更です。これらの
ジョブを追加するだけでは、ブランチは保護されません。

### 静的スキャン一覧

バージョン管理された npm エイリアス一覧と静的スキャンのメンバーシップは、
`config/quality/gate-manifest.json` にあります。`npm run check:gate-manifest` を実行して、
スクリプト名と正確なコマンドを `package.json` と照合して検証してください。追加、削除、
コマンドのずれがあると、ローカルフックと CI の変更分類ジョブの両方が失敗します。
エイリアスは、ワークフロージョブ、マトリックスインスタンス、テストケースのいずれでもありません。
これらの数を同等のものとして示してはなりません。

選択されたエイリアスを実行せずに確認するには、`npm run quality:scan -- --list` または
`npm run quality:scan:fast -- --list` を使用してください。ランナーは npm エントリポイントを
呼び出すため、設定されている場合の Bun を含め、そのランタイムが維持されます。マニフェストでは、
これらのプロファイルに含まれないエイリアスを個別に呼び出されるものとして記録し、読み取り専用の
スキャンプロファイルではメンテナンスコマンドを禁止しています。

これらのプロファイルが対象とするのは静的スキャンのみです。製品テスト、カバレッジ、
パッケージング、外部チェック、または候補に対するリリース受け入れ全体を保証するものではありません。
ワークフローの受け入れでは、リンクされた `config/quality/admission-policy.json` と
`scripts/quality/admission-verdict.mjs` を使用します。リリースオブザーバープロファイルは
引き続き別個に扱われます。適用対象のチェックとレシートは、それぞれ独立して確認してください。
以下の説明文による一覧は参考情報であり、ゲートが実際に実行されたことの証明ではありません。

スクリプトは `scripts/check/`（ポリシーゲート）と `scripts/quality/`（ラチェットエンジン）に
配置されています。CI の信頼できる唯一の情報源は `.github/workflows/ci.yml` です。

### リリース PR の高速パス（`quality.yml`）

`.github/workflows/quality.yml` は、main/release の PR、保護対象ブランチへのプッシュ、
ディスパッチ、およびマージグループにおいて CI を補完します。PR では、パスでフィルタリングされた
高速チェックを使用します。恒久的に無効化されていた重複ビルドは削除されました。実際の
ビルド、パッケージ、起動チェックは引き続き CI に残っています。

| ジョブ                                           | スコープ                                                                                                                                                                              | ブロッキング           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| `Docs Gates (fast-path)`                         | ドキュメント／コードの PR、API ドキュメント参照および docs-all                                                                                                                        | はい                   |
| `Fast Quality Gates`                             | コード PR、静的チェック、型チェック、ダッシュボードの型チェック、影響を受ける単体テスト                                                                                               | はい                   |
| `Forgotten sibling tests`                        | コード PR、変更されたモジュールから静的コンシューマーと兄弟テスト候補を追跡。バレルおよび動的インポートのパスは、参照された許可リストの例外とともにアドバイザリ診断として報告されます | **アドバイザリ**       |
| `Vitest (fast-path)`                             | コード PR、高速 vitest スイート                                                                                                                                                       | はい                   |
| `Unit Tests fast-path`                           | コード PR、4 シャードの単体テストスイート                                                                                                                                             | はい                   |
| `No new ESLint warnings`                         | コード PR、抑制設定を考慮した lint ガード                                                                                                                                             | はい（フォークを含む） |
| `Merge integrity (changelog + generated skills)` | ドラフトではない PR、変更履歴と生成されたスキルの同期                                                                                                                                 | はい（フォークを含む） |

#### 失念された兄弟テストのレポート

`npm run check:forgotten-sibling-tests` は、テスト影響マップで使用されるインポートリゾルバーを
再利用します。変更された各本番モジュールについて、候補テストがプルリクエストの差分に含まれていない
場合に、決定論的な `changed module/symbol -> static consumer -> candidate sibling test` チェーンを
報告します。Markdown のサマリーと JSON の結果は、ブロッキング方式でのロールアウトに先立つ
調整のため、`forgotten-sibling-tests` ワークフローアーティファクトとして保持されます。

バレル再エクスポートと動的インポートは解決診断専用であり、ブロッキング検出を生成することはありません。レビュー済みの例外は
`config/quality/forgotten-sibling-allowlist.json` にあります。各エントリにはコンシューマーと候補
テストを指定し、具体的な理由を記載して、GitHub issue または pull request へのリンクを含める必要があります。不正な形式のエントリは
安全側に倒して失敗します。例外によって、削除された候補テストや `.skip`/`.todo` を追加する差分を抑制することはできません。
アサーションの弱体化やその他のマスキングについては、独立してブロッキングする
`check:test-masking` ゲートが引き続き管理します。

### ジョブ: `lint`

`main` へのすべての PR で実行されます。失敗した場合はマージをブロックします。

| スクリプト (`npm run ...`)        | 検証内容                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ブロッキング                          |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| `check:node-runtime`              | Node.js のバージョンがサポート対象範囲内であること                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | はい                                  |
| `check:cycles`                    | `src/` + `open-sse/`; AST (`import` / `export`, tsconfig `paths`). `check:cycles`: `cycles > 0 → exit 1`; `SCC → stderr` (#15281). `check:cycles:ratchet`（CI で実行されるもの）は、件数が `quality-baseline.json` の `metrics.cycles` 上限を超えるとブロックします。現在は 14、`direction: down` であるため、値は減少のみ可能です（#15159 G-01/G-02）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | はい（ラチェット）                    |
| `check:boundary`                  | `open-sse → src` の結合: エンジンからアプリへの一意なファイル間インポート（`scripts/quality/measure-boundary.mjs`。エッジ一覧は v4 のコア／モジュール分割修正バックログです）。Bare 実行はアドバイザリーレポート（`quality:boundary` と同じ）です。`check:boundary:ratchet`（CI で実行され、`quality.yml` の高速ゲートのラチェットループにも含まれるもの）は、カウントが `quality-baseline.json` の `metrics.boundaryOpenSseToSrc` 上限を超えるとブロックします。上限は測定値 771 で初期化され、`direction: down` です。`--update` では値を下げることしかできません。PR ではベース相対です（`--base-ref`、以下を参照）                                                                                                                                                                                                                                                                                                                                                                                                                    | はい（ラチェット）                    |
| `check:route-validation:t06`      | すべてのルートに Zod スキーマが存在すること（Tier 6 ポリシー）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | はい                                  |
| `check:any-budget:t11`            | `@ts-expect-error // any` の数が予算を超えていないこと（Tier 11 catraca）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | はい                                  |
| `check:provider-consistency`      | `providers.ts` 内のすべてのプロバイダーに、`providerRegistry.ts` 内の対応するエントリが存在すること（また、その逆も allowlist の範囲内で成立すること）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | はい                                  |
| `check:model-lifecycle`           | 手動で管理されている3つのルーティングテーブルが、チェックイン済みのライフサイクルスナップショット（#11503）との整合性を維持していること：`FITNESS_TABLE`（`taskFitness.ts`）は、`REGISTRY` がルーティング可能な廃止済み id をスコアリングしないこと、すべての `BUILT_IN_ALIASES` のターゲットが `REGISTRY` に存在し、廃止済み id のスナップショットには存在しないこと、`REGISTRY` に残っているすべての廃止済み id が転送されるか `allowedRetiredInCatalog` に記載されていること、そして `DEFAULT_DEGRADATION_MAP` のソースまたはターゲットがそのスナップショットで廃止済みとして記載されていないこと。これは、モデルが現在稼働中のアップストリームによって提供されていることを証明するものではありません。オフライン — `config/quality/model-lifecycle.json` と比較します。このファイルは `npm run quality:refresh-model-lifecycle`（ネットワークを使用、CI には組み込まれていない）により手動で更新されます。`allowedRetiredInCatalog` は段階的削減のためのラチェットです。エントリを追加する場合は、必ず追跡用 issue を添えてください。 | はい                                  |
| `check:fetch-targets`             | クライアント側の `src/` にあるすべての `fetch("/api/...")` が、実在する `route.ts` に解決されること                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | はい                                  |
| `check:deps`                      | リポジトリ内のすべての `package.json` に含まれる、`npm install` でインストール可能なすべての依存関係が `dependency-allowlist.json` に含まれていること。新しいバージョン未固定パッケージまたは slopsquatting が疑われるパッケージはフラグ付けされます                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | はい                                  |
| `audit:deps`                      | `npm audit`（ルート + electron）— high/critical のアドバイザリがないこと（OSV の `check:vuln-ratchet` と重複。Rationalization Backlog を参照）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | はい                                  |
| `check:lockfile`                  | `package-lock.json` の整合性 — https レジストリ、整合性ハッシュ、ホストの上書きなし                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | はい                                  |
| `check:licenses`                  | 本番環境用依存関係に対する SPDX ライセンス許可リスト                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | はい                                  |
| `check:tracked-artifacts`         | ビルド成果物およびコミットされた `node_modules` シンボリックリンクがないこと（husky の pre-commit でも実行。pre-push は意図的に軽量 — #6716）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | はい                                  |
| `check:ai-attribution`            | PR のコミット、タイトル、本文に AI/bot の `Co-Authored-By` トレーラーや AI 生成フッターがないこと — ハードルール #16（PR→`release/**` に対する `quality.yml` の fast-gates ループ内 — イベントペイロードを読み取り、PR 以外では何もしない — および PR→`main` に対する `ci.yml` の lint にある PR 専用ステップ。husky の `commit-msg` フックでも実行。人間の共同作成者は許可。#14436）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `check:vitest-exclusions`         | すべての Vitest 除外で追跡用 Issue を指定し、`config/quality/vitest-exclusions.json` に記載すること（#13204）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | はい                                  |
| `check:file-size`                 | ソースファイル（`src/`、`open-sse/`、`electron/`、`bin/` 内の `.ts`/`.tsx`）は `cap` 以内、テストファイル（`*.test.ts(x)`）は `testCap` 以内に維持すること。`file-size-baseline.json` で固定されたファイル（`frozen` / `testFrozen`）は記録済みサイズを超えて増大してはならない                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | はい                                  |
| `check:error-helper`              | executor/handler 内のエラーレスポンスが `buildErrorBody()` / `sanitizeErrorMessage()` を使用していること（厳格ルール #12）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | はい                                  |
| `check:migration-numbering`       | マイグレーション SQL ファイルに欠番や重複がなく、連番になっていること                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | はい                                  |
| `check:public-creds`              | `publicCreds.ts` 以外に OAuth の `client_id`/`client_secret` または Firebase Web キーのリテラルが存在しないこと（厳格ルール #11）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | はい                                  |
| `check:db-rules`                  | `src/lib/db/` モジュール以外に生の SQL が存在せず、`localDb.ts` からのバレルインポートがないこと（厳格ルール #2/#5）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | はい                                  |
| `check:known-symbols`             | ディスパッチテーブルに登録されているプロバイダー executor、ルーティング戦略、およびトランスレーターがディスク上のファイルと一致し、孤立したシンボルや未宣言のシンボルがないこと                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | はい                                  |
| `check:route-guard-membership`    | 子プロセスを生成するすべてのルートが `isLocalOnlyPath()` によって分類されていること（厳格ルール #15/#17）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | はい                                  |
| `check:test-discovery`            | リポジトリ内のすべての `*.test.ts` / `*.spec.ts` ファイルが、少なくとも1つのテストランナーによって収集される（ラチェット方式: `test-discovery-baseline.json` 内の孤立ファイル一覧は縮小のみ可能）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | はい                                  |
| `check:agent-skills-sync`         | 生成された agent-skills アーティファクトが、そのソースカタログと一致している（差異なし）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `check:provider-asset-provenance` | プロバイダーのロゴ／アセットに、記録済みの出所情報エントリが付与されている                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `lint:json`                       | JSON 設定ファイルが正常に解析され、リポジトリの lint ルールを満たしている                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `typecheck:core`                  | エラーなしで TypeScript をコンパイルできる（勧告的な警告のみ）                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | はい                                  |
| `typecheck:noimplicit:core`       | 厳格な `noImplicitAny` — 将来を見据えたチェック。既存の多くの呼び出し箇所には、依然として型注釈が必要                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | **勧告**（`continue-on-error: true`） |
| `check:dashboard-typecheck`       | `src/app/(dashboard)/**` に限定した `tsc`（#7033）— `typecheck:core` の厳選された27ファイルの許可リストにはダッシュボードの TSX が1つも含まれておらず、`next build` も型チェックを一切行わない（`next.config.mjs` で `ignoreBuildErrors: true` が設定されている）ため、そこで発生した孤立識別子のリグレッション（#6625/#6909）は CI で検出できなかった。ファイルごと／TS コードごとの件数を固定したベースライン（`config/quality/dashboard-typecheck-baseline.json`、`check:known-symbols` と同じ古いベースラインの強制パターン）と差分比較する。ベースライン化された件数を超える新規エラーのみがゲートを失敗させる。既存のエラーを修正した際は、`--update` でラチェットを縮小する。                                                                                                                                                                                                                                                                                                                                                      | はい                                  |

### ジョブ: `quality-gate`

`test-coverage` の後に実行されます。失敗した場合、マージをブロックします。

| スクリプト                   | 検証内容                                                                                                                                                                                    | ブロッキング             |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `quality:collect`            | `quality-metrics.json`（ESLint の警告数、マージ済みシャードレポートから取得したカバレッジ）を出力します                                                                                     | はい（ラチェットの前段） |
| `quality:ratchet`            | `quality-baseline.json` 内の各メトリクスが悪化していないこと（ESLint の警告数 ≤ ベースライン、カバレッジ ≥ ベースライン）                                                                   | はい                     |
| `check:duplication`          | コード重複（jscpd@4）が `quality-baseline.json` のベースラインを超えていないこと                                                                                                            | はい                     |
| `check:complexity`           | ファイルレベルの循環的複雑度が上限を超えていないこと（コア ESLint の `complexity` + `max-lines-per-function`）                                                                              | はい                     |
| `check:cognitive-complexity` | 認知的複雑度ラチェット（`eslint-plugin-sonarjs`）— 個別の ESLint パス。CI では両方を単一の `check:complexity-ratchets` ステップとしてまとめて実行します                                     | はい                     |
| `check:dead-code`            | 未使用のエクスポート／ファイルのラチェット（knip）がベースラインより悪化していないこと                                                                                                      | はい                     |
| `check:compression-budget`   | 圧縮ベンチマークの予算 — エンジンごとのトークン削減率の下限が悪化してはならないこと                                                                                                         | はい                     |
| `check:type-coverage`        | 型付け率のラチェット（`type-coverage`）が悪化していないこと。`typecheck:noimplicit:core` の大部分を包含します                                                                               | はい                     |
| `check:codeql-ratchet`       | 未解決の CodeQL アラート数が増加していないこと（`gh api` 経由で読み取り。トークンがない場合は正常にスキップ）— 更新頻度と手動トリガーについては、以下の「CodeQL ratchet」を参照してください | はい                     |

### ジョブ: `quality-extended`

ジョブ全体はアドバイザリです（`continue-on-error: true`）。npm ベースのラチェットは
実際に実行されます。外部スキャナーは `gh release download` 経由でインストールされ、バイナリが
依然として存在しない場合は自己スキップ（終了コード 0）します。

| スクリプト               | 検証内容                                                                                                                                                                                                                                 | ブロッキング                                      |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `check:circular-deps`    | 循環依存がないこと（dpdm）                                                                                                                                                                                                               | **アドバイザリ**                                  |
| `check:bundle-size`      | バンドルサイズが上限を超えていないこと                                                                                                                                                                                                   | **アドバイザリ**                                  |
| `check:secrets`          | シークレットスキャン（gitleaks）— バイナリが存在しない場合はスキップ                                                                                                                                                                     | **アドバイザリ**                                  |
| `check:vuln-ratchet`     | 依存関係の脆弱性（osv-scanner）が悪化していないこと — バイナリが存在しない場合はスキップ                                                                                                                                                 | **アドバイザリ**                                  |
| `check:workflows`        | ワークフローの lint（actionlint + zizmor）。スキャナーの欠落／破損、無効なレポート、またはラチェットのベースライン欠落は INCOMPLETE として失敗します。有効な検出結果には、選択された厳格／アドバイザリ／ラチェットポリシーが適用されます | 実行必須。CI では zizmor ラチェットがブロッキング |
| `check:openapi-breaking` | ベースブランチと比較した公開 API コントラクト（`openapi.yaml`）の破壊的変更（oasdiff）— `openapiBreaking=N` を出力します。oasdiff が存在しない場合、またはベース仕様を解決できない場合はスキップします                                   | **アドバイザリ**                                  |

### ジョブ: `docs-sync-strict`

`main` へのすべての PR で実行されます。失敗した場合、マージをブロックします。

| スクリプト                     | 検証内容                                                                                                                                                                  | ブロッキング                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `check:docs-all`               | 以下の6つのサブゲートを順番に実行するメタゲート                                                                                                                           | はい                              |
| ↳ `check:docs-sync`            | CHANGELOG / OpenAPI / llm.txt のバージョン整合性                                                                                                                          | はい                              |
| ↳ `check:docs-counts`          | 本文中の件数（プロバイダー数、マイグレーション数など）が、実際の件数に対するラチェット範囲内にあること                                                                    | はい                              |
| ↳ `check:env-doc-sync`         | `.env.example` 内のすべての環境変数がドキュメントの表に記載されており、その逆も成立すること                                                                               | はい                              |
| ↳ `check:deprecated-versions`  | ドキュメント内に非推奨のバージョン文字列がないこと                                                                                                                        | はい                              |
| ↳ `check:doc-links`            | ドキュメント内の Markdown 内部リンクが実在するファイルを参照していること（`[text]`/`(path)` 形式）                                                                        | はい                              |
| ↳ `check:fabricated-docs`      | ドキュメントに記載されたルート、環境変数、CLI コマンド、フック名、ファイルパスがコードベース内に存在すること。`--strict` ではハードゲート、フラグなしではソフトフェイル。 | はい（CI では `--strict` を使用） |
| `check:cli-i18n`               | CLI コマンド文字列がすべての i18n ロケールファイルに存在すること                                                                                                          | はい                              |
| `check:openapi-coverage`       | OpenAPI 仕様が、実在するルート数についてラチェットされた最低基準以上をカバーしていること                                                                                  | はい                              |
| `check:openapi-security-tiers` | `openapi.yaml` のセキュリティ階層アノテーションが `routeGuard.ts` の分類と一致していること                                                                                | **勧告のみ**                      |
| `check:openapi-routes`         | `openapi.yaml` 内のすべてのパスが実在する `route.ts` に解決されること（ハルシネーション防止）                                                                             | はい                              |
| `check:docs-symbols`           | `docs/**/*.md` 内のすべての `/api/...` 参照が実在する `route.ts` に解決されること（ハルシネーション防止）                                                                 | はい                              |
| `i18n translation drift`       | i18n ロケールファイル内の未翻訳キー — 警告のみ                                                                                                                            | **勧告のみ**                      |

### ジョブ: `i18n-ui-coverage`

| スクリプト                        | 検証内容                                                                                                                                                    | ブロッキング |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check-ui-keys-coverage` (inline) | UI i18n キーのカバレッジが 65% 以上であること                                                                                                               | はい         |
| `check-ui-value-drift` (inline)   | 書き換えられた英語の**値**に対して、古い翻訳が残っていないこと                                                                                              | はい         |
| `check-new-key-coverage` (inline) | **新しい**英語キーがすべてのロケールで翻訳されていること — `__MISSING__:` マーカーは拒否される                                                              | はい         |
| `check-translation-ratio`         | ロケールごとの実翻訳率（英語と同一／プレースホルダー／許可リスト外の欠落項目）が `config/quality/i18n-translation-baseline.json` + 許容幅を超えてはならない | **勧告のみ** |

`fetch-depth: 0` が必要です — 値ドリフトゲートはマージベースとの差分で `en.json` を比較します。

#### `check-ui-value-drift` — 古い翻訳の残存を防ぐゲート

他のゲートでは構造的に検出できない、ある種の i18n リグレッションを検出します。英語の値が
書き換えられたにもかかわらず、_以前の_英語から作成された翻訳が残り、
英語以外のユーザーが、断定的に書かれてはいるものの現在では誤っている文言を読み続ける問題です。

これは実際にリリースされました。Antigravity ログインヘルパーが導入された際（#5203）、
`oauthModal.googleOAuthWarning` が書き換えられましたが、**43ロケール中39ロケール**には、
運用担当者に「完全な URL をコピーして下に貼り付ける」よう指示する文言が残っていました。
このプロバイダーでは完了できないフローです。#8463 まで見過ごされた理由は次のとおりです。

- `sync-ui-keys` は**存在しない**キーのみを補完し、**古くなった**キーは更新しないため。
- `check-ui-keys-coverage` はキーの_存在_を数えるため、古い翻訳もカバー済みとして計上されるため。
- `check-translation-drift` は `docs/i18n/<locale>/**.md` のドキュメントミラーを追跡し、
  `src/i18n/messages/*.json` は読み取らないため。2026-09 の再同期以降、ジョブ `docs-sync-strict` でブロッキング:
  コアドキュメントを編集したら → `npm run i18n:run -- --files=<doc>`（セクション単位で低コスト）。

**差分を認識し、ベースラインには依存しません。** マージベースの `en.json` と
作業ツリーを比較します。英語の値が変更された各キーについて、変更されていない
翻訳が残っているロケールは古いものと判定されます。これは意図的に**既存の負債を凍結**します。差分からは、
長期間存在する翻訳がどの古い英語に由来するかを判別できないため、ゲートは
現在の変更が触れる箇所のみを判定します。代替案（キーごとのハッシュベースライン）では、
約600 KBの生成ファイルが必要となり、既存の最大ベースラインの3倍のサイズで、i18n PRのたびに変更が発生します。

これを満たす方法は2つあります。

1. 影響を受ける翻訳を更新する、または
2. `__MISSING__:<new english>` に設定する — これにより、ランタイムは修正済みの英語を返し
   （`src/i18n/request.ts::deepMergeFallback`、#7258）、そのキーは翻訳待ちキューに入ります。

文字列の**意味**が変わった場合は、**キー名の変更**を推奨します。新しいキーが
古い翻訳を継承することはありません。#8463 ではこのパターンが使用されています。

```bash
npm run i18n:check-value-drift          # 厳格モード（CIで実行されるもの）
npm run i18n:check-value-drift:warn     # レポートのみ
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

ベースカタログを読み取れない場合（ベースrefのないシャロークローン）は、
`check-openapi-breaking` と同様に、`SKIP reason=base-unresolved` を出力して終了コード0で終了します。

### ジョブ：`i18n`

完全なi18n検証マトリクス（ロケールごとに1ジョブ）。ジョブ全体が参考情報扱いです。

| スクリプト                      | 検証内容                   | ブロッキング                                           |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `validate_translation.py quick` | ロケールごとの翻訳の完全性 | **参考情報**（ジョブ全体に `continue-on-error: true`） |

### ジョブ：`pr-test-policy`

プルリクエストでのみ実行されます。

| スクリプト             | 検証内容                                                                                                                                | ブロッキング |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `check:pr-test-policy` | `src/`、`open-sse/`、`electron/`、または `bin/` の本番コードを変更するPRには、テストの追加または更新が必要（厳格ルール #8）             | はい         |
| `check:test-masking`   | 変更されたテストファイルがアサーションの正味数を減らしておらず、`assert.ok(true)` のような恒真式を追加していないこと                    | はい         |
| `check:pr-evidence`    | PR本文に変更に対するテスト/VPSの証拠が記載されていること（PR本文のgrepにより厳格ルール #18を機械化 — 壊れやすいため、バックログを参照） | はい         |

### ジョブ：`test-vitest`

`build` の後に実行されます。失敗するとマージをブロックします。

| スイート         | 検証内容                                                         | ブロッキング                                                                                                      |
| ---------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | MCPサーバー（110ツール）、autoCombo、キャッシュ — vitestランナー | はい                                                                                                              |
| `test:vitest:ui` | UIコンポーネントテスト — vitestランナー                          | **ブロッキング** — 既存の失敗は `vitest.config.ts` で明示的に除外されており、新たな失敗があるとジョブは失敗します |

### 夜間ワークフロー（スケジュール実行、参考情報）

これらはcronスケジュール（および `workflow_dispatch`）で実行され、PRでは実行されません。すべて参考情報扱いです。

| ワークフロー           | 検証内容                                                                                                                                                                  | ブロッキング |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `nightly-property`     | ランダムシードと多い実行回数を使用したfast-checkプロパティテスト                                                                                                          | **参考情報** |
| `nightly-resilience`   | ヒープ増加ゲート、カオス障害注入、k6負荷/ソークテスト                                                                                                                     | **参考情報** |
| `nightly-llm-security` | promptfooインジェクションガード（ブロックモード）+ garakプローブ（プロバイダーシークレットがない場合はスキップ）                                                          | **参考情報** |
| `nightly-schemathesis` | `docs/openapi.yaml` を使用し、稼働中のOmniRouteに対してOpenAPIコントラクトファジング（schemathesis）を実施 — 仕様違反や未処理の500エラーを明らかにします（フェーズ8 B.4） | **参考情報** |
| `nightly-mutation`     | 高速ユニットレーンに対するStrykerミューテーションテストスコア — 生き残ったミュータントによって弱いアサーションを明らかにします                                            | **参考情報** |
| `nightly-compat`       | サポート対象の `engines.node` 範囲全体にわたるNodeエンジン互換性マトリクス                                                                                                | **参考情報** |

パフォーマンスベースライン（ヒープ、TTFB、ビルド時間）は記録されますが、ゲートには使用されません。詳細は [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md)（`npm run perf:lts-baseline`）を参照してください。

---

## ベロシティフェーズ（2026-08-30 → v4.0 LTS）：すべてのベースラインを20%緩和

オーナー判断（2026-08-30）：v4.0でのモジュール化までは、技術的負債の増加を抑えることよりも
リリース速度を優先します。すべての**数値**ラチェットベースラインを、監査可能な1回の処理で20%緩和し、
そのフェーズを`config/quality/quality-baseline.json`で宣言しています。

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| 変更内容                                                                                                                                                                             | 場所                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — 小さいほど良いカウントは×1.2、大きいほど良いパーセンテージは÷1.2（カバレッジの下限60は維持、`eslintErrors`は0のまま、`eslintWarnings`は0 → 固定済み抑制数の20%） | `quality-baseline.json`（`_relax_velocity_2026_08_30`の注記に、変更前 → 変更後をすべて記載）           |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                     | `complexity-baseline.json`、`duplication-baseline.json`                                                |
| `cap`、`testCap`、すべての`frozen[*]` / `testFrozen[*]`行数上限を×1.2                                                                                                                | `file-size-baseline.json`                                                                              |
| ファイルごと／TSコードごとのカウントを×1.2                                                                                                                                           | `api-typecheck-baseline.json`、`dashboard-typecheck-baseline.json`、`open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                  | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `_policy.requireTighten === false`の間、`--require-tighten`を勧告扱いに変更                                                                                                          | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| nightlyの`bank-ratchet-shrinks`を一時停止（測定された縮小分が確定され、余裕が取り消されてしまうため）                                                                                | `.github/workflows/nightly-release-green.yml`                                                          |

許可リスト（`eslint-suppressions.json`、`test-masking-allowlist.json`、`test-discovery-baseline.json`、
…）は予算ではないため、変更していません。合否判定を行うポリシーゲート（シークレット、SQLルール、
ドキュメント／環境契約、i18nの同等性、ユニットテスト）にも変更はありません — 赤いテストは引き続き赤いテストです。

**ツール**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` —
  1回限りの緩和（`scripts/quality/relax-baselines.mjs`）。同じ注記で2回実行することは拒否されます。
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  CIと同じ方法ですべての数値ゲートを測定し、ゲートごとの残りの余裕を出力します
  （`scripts/quality/baseline-headroom.mjs`）。nightlyの`baseline-headroom`ジョブは、
  ワークフロー実行サマリーに表を公開し、JSON／Markdownレポートを
  `baseline-headroom-<run_id>`としてアップロードし、90日間保持します。警告および重大の行は、
  上限まで10%以内のゲート、またはすでに上限を超えているゲートを示します。予算消費の早期警告として
  これらのレポートを確認し、該当するゲートの`_rebaseline_*`注記を調査してください。このジョブは、
  恒久的なissueを作成または更新しなくなりました。以前のレポート履歴は#12149に保持されています。

**新規コードモード（Clean-as-You-Code）— 2026-08-30以降、PRの高速パスのみ**

`pull_request`イベントでは、`quality.yml`が`--base-ref <PR base SHA>`を`check:file-size`、
`check:complexity-ratchets`、`check:dead-code`に渡します。`check:complexity-ratchets`と
`check:dead-code`では、ゲートはHEADとマージベースを、**PRが変更したファイルに限定して**
比較します（`scripts/check/newCodeMode.mjs`：マージベースを使い捨ての
`git worktree`に展開し、そこで、およびHEAD上でESLint/knipを実行して、ファイルごとのカウントの差分を取ります）。

- **ブロッキング** — PRが変更したファイルに、循環的／認知的複雑度の違反または未使用のexportを追加した場合
  （ログ内の`complexityNewCode=`、`cognitiveComplexityNewCode=`、`deadExportsNewCode=`）。
- **勧告** — 固定済みベースラインに対する全体の合計。継承されたドリフトによって、無関係なPRが
  赤になることはありません。ドリフトはリリース時の調整で再固定され、headroomジョブによって監視されます。

`check:file-size`は独自のルールでベースrefを使用します（`scripts/check/check-file-size.mjs`、#8522）。
ツリー内のすべてのソースファイルとテストファイルを確認し、`git show`を使ってPRベース時点での各ファイルの
行数を読み取り、ベースライン上限（ベースライン内のファイルの場合は`frozen` / `testFrozen`、
ベースライン外のファイルの場合は`cap` / `testCap`）とベース時点のサイズのうち、大きい方を超えて
増加したファイルだけを失敗とします。したがって、ベース上ですでにドリフトしていたファイルによって、
無関係なPRが赤になることはありません。

`check:boundary:ratchet` は、その単一の数値にも同じルールを適用します
（`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`）。PR イベントでは、
`quality.yml` の高速ゲートと `ci.yml` の lint ジョブの両方が PR のベース SHA を渡し、
ベースコミットは `git archive` によるエクスポートから測定されます。また、PR の
`open-sse → src` エッジ数が、`metrics.boundaryOpenSseToSrc` とベース上のエッジ数の
うち大きい方を超えた場合にのみ、PR は失敗します。上限を超えるベースのドリフトは
報告されますが（`base drift herdado`）、無関係な PR を失敗させることはありません。
push → main では絶対上限が維持され、ベース SHA を解決できない場合は、警告を出して
その絶対上限へフォールバックします。

`workflow_dispatch` の実行、リリース時の全体的なグリーン確認、および nightly の
ヘッドルームジョブには PR ベースがないため、絶対値による（グローバルな）比較を
維持します。カバレッジ、重複、型カバレッジについても、現時点ではグローバルなままです
（それらのツールではファイル単位の差分を低コストで生成できないためです）。これらは
同じ処理を適用する候補です。

**v4.0 でのフェーズ終了（LTS = 以前より厳格であり、「通常に戻す」ことではない）**

1. 純粋な `release/v4.0.0` の先端で、記録用に `npm run quality:headroom --json` を実行し、その後
   `npm run quality:ratchet -- --update`、`check:file-size --update`、
   `check:complexity-ratchets --update`、`check:dead-code --update`、各 typecheck ゲートの
   `--update` を実行します。すべてのベースラインが測定値まで引き下げられます。
2. `quality-baseline.json` から `_policy` を削除し（`--require-tighten` と nightly の
   バンキングを再度有効化）、`check-openapi-coverage.mjs` の `THRESHOLD = 36`（またはそれ以上）を復元します。
3. モジュール化の効果が得られた箇所では、測定値よりもさらに厳格化します。file-size の `cap` を 1000
   （または 800）に戻し、カバレッジの下限を +5 し、モジュール化されたパッケージの未使用エクスポートを 0 にします。

## ラチェットベースライン (`quality-baseline.json`)

ラチェットエンジン (`scripts/quality/check-quality-ratchet.mjs`) は `quality-baseline.json`
を読み込み、新たに収集された `quality-metrics.json` と比較します。イプシロンを超えて
悪化したメトリクスがある場合、ビルドは失敗します。

現在追跡されているメトリクス:

| メトリクス            | 方向   | 意味                                         |
| --------------------- | ------ | -------------------------------------------- |
| `eslintWarnings`      | `down` | ESLint の警告数が増えてはならない            |
| `coverage.statements` | `up`   | ステートメントカバレッジが低下してはならない |
| `coverage.lines`      | `up`   | 行カバレッジが低下してはならない             |
| `coverage.functions`  | `up`   | 関数カバレッジが低下してはならない           |
| `coverage.branches`   | `up`   | ブランチカバレッジが低下してはならない       |

実際に改善された後でベースラインを更新するには、次を実行します:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

`--update` フラグは、現在の測定値を `quality-baseline.json` に書き込みます。
このファイルは、メトリクスを改善した変更と一緒にコミットしてください。メトリクスを
改善してもベースラインを更新していない PR は、`--require-tighten` によって検出されます
（フェーズ 6A.5、実装予定）。

### CodeQL ラチェット: 更新頻度と手動トリガー

`check:codeql-ratchet` は、**スケジュールに従って更新されるリポジトリの状態を読み取ります。PR ごとではありません。**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` は
`state: configured`、`schedule: weekly` を返します。これは GitHub のデフォルトセットアップによるスキャンであり、
push ごとの分析ではありません。そのため、アラートを修正する PR がマージされた後も、次回の
スケジュール済みスキャンが実行されるまでは、ラチェットが古い高い件数を読み取り続けます。その結果、
スキャン結果が追いつくまで、修正 PR 自体のフォローアップを含むすべてのオープンな PR で
リグレッションが報告されます。

**手動更新**: `gh workflow run codeql.yml --ref release/vX.Y.Z` を実行すると、
分析が再実行され、数分以内にアラートが再公開されます。最初に `.github/workflows/codeql.yml`
を読んでください。そのヘッダーでは、GitHub の「デフォルトセットアップ」と競合するため、
`workflow_dispatch` 専用であることが説明されています（`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`）。`push`/`pull_request`/
`schedule` トリガーを復元するには、まず**オーナーによる操作**が必要です: Settings → Code security →
CodeQL: Default → Advanced。この切り替えを行わずに `schedule:` トリガーを追加しないでください。
失敗する実行が生成されるだけです。

**件数が減少したらベースラインを厳格化してください** — `node scripts/check/check-codeql-ratchet.mjs
--update` は、新しい測定件数を `quality-baseline.json` →
`metrics.codeqlAlerts.value` に書き込みます。これにより、ラチェットが以前の上限までのリグレッションを
暗黙に許可することを防ぎます。実例（2026-09-02/03）: PR #12502 で実在する 7 件のアラートを
修正しました（測定されたオープン件数は 13 → 6）。PR #12530 では、それに合わせて固定された
ベースラインを 11 → 6 に厳格化しました。その後、残りの 6 件はアラートごとの根拠を添えて却下され、
オープン件数は 0 になりました。

**却下はオペレーターの判断です（ハードルール #14）** — CodeQL アラートを却下する際は、
必ず却下コメントに技術的な根拠を記録してください。上流プロトコルの要件には `won't fix`、
テストフィクスチャには `used in tests`、CodeQL が認識できないサニタイザーには `false positive`
を使用します（先例: `docs/security/ERROR_SANITIZATION.md`）。

---

## テスト再試行ポリシー (WS5.4, v3.8.49)

再試行はランナー単位で行い、グローバルに一律適用してはなりません。一律の再試行は、実際のリグレッションを見えないフレークへと変えてしまいます。

| ランナー         | ポリシー                                                                                                                                            | 理由                                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | CI でのみ `retries: 1`、および `trace: on-first-retry`                                                                                              | ブラウザーやネットワークのタイミングは実際に非決定的です。トレース付きで1回再試行することで、フレークを診断可能な成果物に変えられます |
| Vitest           | グローバルな再試行は禁止。フレークすることが確認されたテストにのみ、テスト単位の再試行を明示的に設定します（差分に表示され、PR でレビューされます） | 隔離リストを不透明にせず、リポジトリ内に保持します                                                                                    |
| node:test (unit) | 再試行は常に禁止                                                                                                                                    | 不安定なユニットテストはテストのバグです。再実行するのではなく、修正してください                                                      |

フレークのテレメトリが導入された後の目標 SLO (WS5.2/5.3)：テストごとのフレーク率 <1%
（「今すぐ修正」のしきい値）、パイプラインごとの合格率 ≥95%。これらは業界の参考値です。
自分たちの測定結果に基づいて再調整してください。

## リリースレベルのラチェットドリフト (WS5.5, v3.8.49)

PURE リリース先端でラチェット（ファイルサイズ、複雑度、eslint 警告）が悪化した場合、
つまり、マージの組み合わせによって悪化したものの、個々の PR のブランチでは
そのリグレッションを再現できない場合、その修正は**リリースキャプテンが一度だけ、
リリースブランチ上で**行う責任があります。抽出やリファクタリングを優先し、
ベースラインの再設定は、根拠を記録したエントリがある場合にのみ行ってください。
組み合わせによるドリフトをコントリビューターの PR に押し付けてはならず、
PR ごとにベースラインを再設定してもなりません（実際のリグレッションが隠れてしまいます）。
まず原因を切り分けてください。自分の PR が原因だと決めつける前に、検証用 worktree で
純粋な先端に対して失敗を再現してください。

## ラチェット縮小値のバンキング — 下方への方向 (#8584)

ラチェットの自動化は半分しかなく、しかも自動化されているのは間違った側です。
上限の**引き上げ**は10秒で済む手動の JSON 編集であり、失敗している PR のブロックを
解除する最速の方法です。上限の**引き下げ**には、誰かが `--update` を実行して結果を
コミットする必要があります。そして `bank-ratchet-shrinks` ジョブが導入されるまで、
それを実行するワークフローはありませんでした。測定された結果 (2026-07-25)：
18個の frozen ファイルがすでに新規ファイルの800行上限以下であり、最悪のものでは
132倍（`src/shared/validation/schemas.ts` は19行なのに2,523の上限を保持）。
複雑度の上限は約37件のベースライン再設定メモを経て `1794 → 2169` まで上昇し、
低下はちょうど1回（−1）だけでした。また、「次のサイクルで `--update` を使って
厳格化する」と31回記載されたものの、実行されたのは1回だけでした。
その上限の根拠となったコードより長く残り続ける上限は、完了した分割作業のすべてを、
次にそのファイルを編集する人のための増加許容量へと密かに変えてしまいます。

`nightly-release-green.yml` → ジョブ **`bank-ratchet-shrinks`** がこのループを閉じます。

|          |                                                                                                    |
| -------- | -------------------------------------------------------------------------------------------------- |
| 実行条件 | `schedule`（1日3回）+ `workflow_dispatch` — 意図的に `push` では**実行しません**                   |
| 測定対象 | 最上位の `release/vX.Y.Z`。`release-green` と同じ解決処理およびインジェクションガードを使用します  |
| 書き込み | `check:file-size --update` および `check:complexity-ratchets --update`（どちらも構造上、縮小のみ） |
| 検証     | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                           |
| 提供方法 | リリースブランチに対する、常に最新の単一 PR — 強制更新され、PR が乱立することはありません          |

バンキングはプッシュごとではなく、まとめて実行されます。これはレイテンシー要件がなく
（縮小が8時間以内にバンキングされれば十分）、マージ作業中にマージごとに実行すると、
PR ブランチが繰り返し再構築され、そのたびに ESLint の完全な走査コストがかかるためです。
検出は引き続き push 時に行われます (`release-green`)。まとめて実行されるのは
バンキングだけです。

### 安全性検証ツール

このジョブは無人でベースラインへ書き込むため、それを許容可能にしているのが
`verify-ratchet-bank.mjs` です。これは `--update` 後のツリーと `HEAD` の差分を取得し、
すべての変更が次のいずれかに該当しない限り、**コミットが作成される前にジョブを中止**
します。その場合、PR は作成されません。

- `frozen` / `testFrozen` の数値エントリが**引き下げられた**、または**削除された**
- `complexity-baseline.json` → `count` が**引き下げられた**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` が**引き下げられた**

それ以外はすべて失敗となります。数値の引き上げ、エントリの追加、`cap`/`testCap` の変更、
または `_rebaseline_*` メモの削除や書き換えは禁止です（これらのメモは各上限が存在する
理由を示す監査証跡であり、ファイルエントリと同じ `frozen` オブジェクト内に保存されます）。
上限を引き上げられるボットは、現状より確実に悪いものとなります。
リグレッションガード：`tests/unit/verify-ratchet-bank.test.ts`。

このジョブが `release/*` にプッシュすることはありません。PR は人間がマージするため、
誤った測定結果がレビューなしで取り込まれることはありません。

## 許可リストポリシー

既存の違反によって失敗させることができないすべてのゲートでは、固定された許可リスト
（例: `KNOWN_STALE_DOC_REFS`、`KNOWN_MISSING`、`KNOWN_RAW_SQL`）を使用します。ポリシーは次のとおりです。

**根本原因を修正してください。違反が既存のものであり、同じ PR 内で修正できない場合にのみ許可リストを使用してください。**

許可リストにエントリを追加する場合:

1. 理由を記載したコメントを含めます。
2. 追跡用 Issue を参照します（例: `// #3498 — フェーズ 2 の機能、未実装`）。
3. 違反を修正する同じ PR 内でエントリを削除します。アクティブな違反を抑制しなくなった古いエントリは、それ自体が不具合です（6A.3 の古い適用ルールのチェックが実装されると、孤立した許可リストエントリによってゲートが失敗します）。

テストを早く通すために許可リストエントリを追加しては**なりません**。許可リストが増え続ける一方でゲートが成功していても、品質に対する誤った安心感を与えるだけです。

### PR でゲートが失敗した場合

1. **ゲートの出力を注意深く読みます** — ルールに違反したファイルまたはシンボルが正確に示されています。
2. **違反を修正します** — ほとんどのゲートは決定的なファイルシステムチェックであり、コードが正しくなればすぐに成功します。
3. **違反が既存のものである場合**（つまり、自分が導入したものではなく、ゲートが新たに対象とするようになった場合）: 理由を記載したコメントと追跡用 Issue を添えて、許可リストにエントリを追加します。
4. **ゲートがラチェット方式の場合**（カバレッジ、ESLint の警告、重複、複雑度）:
   変更によってメトリクスが悪化しています。根本的な問題を修正するか、変更が意図的でメトリクスの悪化が許容可能な場合に限り、（まれに）`npm run quality:ratchet -- --update` を実行します。ただし、その理由を PR の説明に記載してください。
5. **助言目的のゲート**（`continue-on-error: true`）は情報提供用です。マージをブロックしませんが、CI のサマリーに表示されます。それでも修正してください。

---

## 新しいゲートの追加

1. `scripts/check/check-<name>.mjs`（または `.ts`）を作成します。ポリシーゲートは終了コード 0/1 で終了します。
   ラチェット方式のゲートは、`collect-metrics.mjs` を介して `quality-metrics.json` にメトリクスを出力します。
2. `"check:<name>": "node scripts/check/check-<name>.mjs"` を `package.json` に追加します。
3. `.github/workflows/ci.yml` の適切なジョブ配下に組み込みます
   （ポリシー → `lint` または `docs-sync-strict`、ラチェット → `quality-gate`）。
4. 許可リストがある場合は、古いエントリが自動的に検出されるように、
   `scripts/check/lib/allowlist.mjs` の `reportStaleEntries()` を適用します。
5. ゲートの検出ロジックをカバーするテストを `tests/unit/build/` に記述します。
6. このドキュメントを更新します（該当するジョブの表に行を追加します）。

---

## エージェントツール: LSP-in-the-loop（オプトイン）

CI ゲートに加えて、OmniRoute には**オプトイン**の `agent-lsp` スキャフォールド
（プロジェクトレベルの `.mcp.json`、Fase 7 Task 15）が含まれています。`.mcp.json`
を作成して TypeScript 言語サーバーをコーディングエージェントに公開することで、エージェントがコードを記述する**前に**シンボルや診断情報を解決できるようにします。これは、発生源で「存在しないシンボルを捏造する」エラーを減らす、`typecheck:core` のコンパイル前提の主張を補完する仕組みです。これは意図的に自動読み込みされません（MCP↔LSP ブリッジは利用者が選択して検証します）。壊れたエントリがあっても接続エラーがログに記録されるだけで、セッションが中断されることはありません。

---

## 合理化バックログ（ROI レビュー — フェーズ 9 ウェーブ 3）

このインベントリは 2026-06-17 に `ci.yml` と照合されました（以前のバージョンでは
`audit:deps`、`check:tracked-artifacts`、`check:lockfile`、`check:licenses`、
`check:dead-code`、`check:cognitive-complexity`、`check:type-coverage`、
`check:codeql-ratchet`、`check:pr-evidence` が欠落していました）。照合済みのセットに対する ROI レビューにより、
以下の合理化候補が特定されました。**統合は機械的な CI
変更です。切り替え／削除はオペレーターに委ねられたポリシー判断です。** 以下の項目は
まだ何も適用されていません。

**上記に記載されていないもの**（アドバイザリー、シグナルが弱い）：`docs-lint` ジョブ
（markdownlint + Vale、ジョブ全体が `continue-on-error`）および独立したスキャナーワークフロー
`semgrep.yml` / `codeql.yml` / `scorecard.yml`。`semgrepFindings: 0` は
`quality-baseline.json` にありますが、`ci.yml` のブロッキングラチェットには接続されていません。このメトリクスは
現在孤立しています。

### 統合／重複排除（機械的、低リスク）

各候補は 2026-06-17 時点の実際のゲート状態と照合して検証されました（信頼しつつ検証）。
「明らか」に見えた複数の統合が、実際には負債を隠しており、**そのまま置き換えられるものではない**ことが判明しました。

- **`check:docs-sync` が 2 回実行される** — `lint` ジョブで単独実行され、さらに `check:docs-all`（`docs-sync-strict`）内と husky の pre-commit フックでも実行されます。✅ **完了** — 単独の `lint` 呼び出しを削除しました。
- **CVE スキャン** — ❌ **そのまま統合可能ではありません。** `audit:deps` は high/critical の CVE が 1 件でもあればハードフェイルします。`check:vuln-ratchet`（osv）はベースライン（現在 1 MODERATE）に対する_悪化_の場合にのみ失敗します。セマンティクスが異なるため、`audit:deps` を削除すると high/critical に対する絶対的なゲートが失われます。両方を維持します。
- **循環検出** — ✅ **完了**（#15159 G-01/G-02）。以前の記述では `check:cycles` を「グリーンで、厳選された」ゲートと呼び、`check:circular-deps`（dpdm）が 91 件の循環を報告していたことを理由に、ブロッキングのまま維持することを正当化していました。そのグリーンは**偽のグリーン**でした。`check:cycles` は 5 個のサブディレクトリ（450 ファイル）をスキャンし、静的な `import|export … from` のみにマッチし、すべての `@/` および `@omniroute/open-sse/` 指定子を除外していたため、リポジトリ内の大半を占める動的 import + エイリアスの循環を検出できませんでした。修正済みです。現在のゲートは `src` + `open-sse`（5023 ファイル）を走査し、TypeScript AST から指定子を収集し（そのため `import("…")` はカウントされ、型位置の `typeof import("…")` はカウントされません）、tsconfig の `paths` を解決します。検出される循環は 0 件ではなく **14** 件です。既存の 14 件の循環はゲート PR では修正できないため、`check:cycles` は現在**ラチェット**になっています（`--ratchet`、`quality-baseline.json` 内の上限は `metrics.cycles.value = 14`、`direction: down`）。あらゆる_悪化_をブロックし、件数は減少することしか許されません。CI は `npm run check:cycles:ratchet` を実行します。段階的な解消は **A-01** と併せて進めます。`check:circular-deps`（dpdm）は、より広範なセカンドオピニオンとしてアドバイザリーのまま維持します。
- **複雑度** — ✅ **完了**（`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`）：1 回の ESLint 走査で、ruleId ごとにカウントするため、循環的複雑度 + 最大行数と認知的複雑度のベースラインは独立したままです。個別の `check:complexity` / `check:cognitive-complexity` は、ローカルでの `--update` 用に維持します。
- **`/api` の幻覚防止** — ✅ **完了**（`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`）：`src/app/api` に対する 1 回の FS インベントリで、openapi-routes + docs-symbols は引き続き個別に報告します。個別のチェックはローカル実行用に維持します。
- **`check:node-runtime` が 11 ジョブで実行される** — ⚠️ **ROI が低いです。** それぞれが別のランナーであり、チェックは 1 秒未満です。節約できる合計時間は約 10 秒ですが、その代わりに安価なジョブ単位のガードを失います。変更に伴う手間に見合いません。
- **CI lint での `typecheck:noimplicit:core`** — ✅ **lint ジョブから削除済み**（以前はアドバイザリーの `continue-on-error`）。ブロッキング対象の型サーフェスは `typecheck:core` + `check:type-coverage` です。ローカルスクリプトは維持しています。

### 切り替え／判断（オペレーターポリシー）

- `check:openapi-security-tiers`（アドバイザリー）— ❌ **そのまま切り替えることはできません。** 終了コードは 0 ですが、`LOCAL_ONLY_API_PREFIXES` 配下の複数の `traffic-inspector` ルートに `x-loopback-only: true` アノテーションがないことを警告します。強制するには、まずそれらのアノテーションを `openapi.yaml` に追加する必要があります。
- `typecheck:noimplicit:core`（アドバイザリー）— 大部分がブロッキングの `check:type-coverage` ラチェットに包含されています。ラチェットに切り替えるか、重複する 2 回目の `tsc` パスを削除します。
- `test:vitest:ui`（現在は**ブロッキング**）— 既存の失敗は、`// #8618` 追跡コメント付きで `vitest.config.ts` から明示的に除外されています。新たな失敗が発生するとジョブは失敗します。
- `check:secrets`（gitleaks、文書化された 3 件の誤検知で固定されたブロッキングラチェット）— 3 件を許可リストに追加して 0 件にするか、アドバイザリーへ降格します。GitHub ネイティブの secret-scanning + `check:public-creds` と重複します。
- `check:pr-evidence`（ブロッキング、PR 本文の文章を grep）— 誤検知のリスクが高いです。削除するとハードルール #18 の強制力が弱まるため、これは実質的なポリシー判断です。
- `semgrep`（独立したアドバイザリー）— OWASP 系統について CodeQL と重複します。ベースラインをラチェットに接続するか、削除します。

---

## 関連ドキュメント

- サプライチェーン（プロベナンス、SBOM、Trivy、Scorecard）：[`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — キーセット整合性ゲート

`scripts/i18n/check-key-completeness.mjs`（`npm run i18n:check-keys`、ジョブ `i18n-ui-coverage`）。
各 `src/i18n/messages/<locale>.json` の末端キーセットを `en.json` と比較し、キーが追加された時期にかかわらず、欠落または余分な末端キーが1つでもあれば失敗します。`__MISSING__:` プレースホルダーは存在するものとして扱われます（その内容は比率ゲートの管轄です）。これは、差分ベース／パーセンテージベースの2つのゲートを完全に補完するものです。`check-ui-keys-coverage` はロケールごとに 80 % の下限を適用します（約13,000個のうち43個のキーが欠落していても 99.7 % と表示されます）。一方、`check-new-key-coverage` はPRによって `en.json` に追加されたキーのみを判定します。ロケールバッチは、ブランチを切った当日の `en.json` から生成され、ベース側でキーが追加され続けている間も数日間にわたって翻訳が行われます。バッチPR自体はキーを追加しないため、バッチ1（#13044）が9ロケールで43キー不足のまま、バッチ2（#13660）が8ロケールで10キー不足のまま取り込まれた際（2026-09-15）、どちらの関連ゲートも何も検出しませんでした。失敗を修正するには、`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers` を実行します。`extra` の末端キーはソース側で削除されたことを意味するため、ロケールからも削除してください。`--warn` を指定すると、失敗させずに報告のみ行います。`--catalog=cli` を指定すると、`bin/cli/locales` に対して同じ比較を実行します（`npm run i18n:check-keys:cli`）。両方のステップはジョブ `i18n-ui-coverage` に含まれています。

#### `check-new-key-coverage` — 新規キーのi18nゲート

`check-ui-value-drift` の関連ゲートです。`check-ui-value-drift` は、英語の値が**書き換えられた**にもかかわらず翻訳が更新されていないケースを検出します。一方、このゲートは、英語のキーが**追加された**にもかかわらず、一部のロケールにそのキーが追加されていないケースを検出します。

`check-ui-keys-coverage` では、この種類の問題を検出できません。ロケールごとにカバレッジ率の下限を適用するため、約13,000個の末端キーのうち11個が欠落していても、カバレッジは 99.9% のままです。言語ごとのパーセンテージでは「この機能が未翻訳のままリリースされた」という状況を表現できません。新しいロケールで機能全体にテキストが存在しなくても、数値がまったく変化しないことがあります。

このゲートが防ぐことになったインシデントは、Orchestration Canvasのフェーズ3に関するものです。当時存在していた42ロケールすべてで11個のキーが翻訳されました。その数時間後、EU言語バッチ（#13044）によってリポジトリのロケール数が51に増えましたが、新たに追加された9ロケール（`el`、`et`、`ga`、`hr`、`lt`、`lv`、`mt`、`sl`、`sr`）には、それらのキーが追加されませんでした。`deepMergeFallback` は欠落したキーを英語で置き換えるため、障害の現れ方は空白のUIではなく未翻訳のUIでした。これは実際の問題でありながら、設計上、検知されないものでした。

関連ゲートと同様に、このゲートも**差分を認識**し、マージベース時点の英語と作業ツリーを比較します。そのため、既存の欠落はそのまま固定され、このゲートを有効化するための移行は不要でした。

**`__MISSING__:<english>` マーカーでは要件を満たしません（2026-09-17以降）。** 以前は、ランタイムが正しい英語へフォールバックするため、文書化された延期手段として使用されていました。しかし、2026-09-16に8件の機能PRで61個のキーが追加された際、翻訳の代わりに全65ロケールへマーカーが一括設定されました。このゲートはそれらすべてを受け入れ、PRをブロックするものは何もありませんでした。その結果、実際の翻訳率を検証するブロッキングゲートがリリース先端で全員に対して失敗しました（pt-BR 3.2 % > 2.5 % + 0.5）。現在、マーカーは翻訳の欠落として判定されます。失敗を修正するには、`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40` を実行します。または、`npm run i18n:translate-new-keys`（`scripts/i18n/translate-new-keys.sh`、デタッチ状態でも安全、`OMNIROUTE_TRANSLATION_*` 環境変数がなければ開始を拒否）を使用して、すべてのロケールを並列に処理します。英語のままにする必要があるキー（固定された製品名、エンジン名、フラグ名）は、マーカーの背後に置くのではなく、`scripts/i18n/untranslatable-keys.json` に登録してください。`vi` ではマーカーが全面的に禁止されています（`tests/unit/i18n-vi-completeness.test.ts`）。

#### `check-vitest-exclusions` — 保留テストゲート

`vitest.config.ts` の `exclude` リストにあるファイルは、実行されないテストであり、ツリーを読む人にはカバレッジがあるように見えます。62個のファイルが、コメント `// #8618 — 既存の失敗。修正後、この除外を削除すること` の背後に蓄積されていました。Issue #8618 は2026-08-11にクローズされましたが、その間、追跡対象のリストは45エントリから62エントリに増え、新しいエントリのそれぞれが、終了済みのIssueを指すコメントを継承していました。最終的にファイルごとの測定が行われたところ（#13204）、**62個中51個が、ソースを変更することなく現在のツリーに対して合格しました**。

このゲートでは、実在するファイルへ解決されるすべての除外項目について、（a）追跡用Issueを明記し、（b）測定済みステータスとともに `config/quality/vitest-exclusions.json` に記載することを要求します。これにより、除外の追加は、60エントリの配列にさらに1行を足すだけではなく、専用ファイル上でレビュー可能な差分になります。このゲートは、除外されたテストを意図的に再実行しません。再実行には約10分かかり、定期ジョブで行うべきだからです。インベントリには、各テストが最後に測定された日時が記録されます。
