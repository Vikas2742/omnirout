# Self-Hosted Runner Box Operations (.113 pool) (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

セルフホステッドプールは **.113** マシン（`tomni-proxmox-113`）上で稼働しています。2026-10-18 以降、各
OmniRoute runner には**1つのロール**と1つのラベルが割り当てられ、メモリ／CPU の予算は実測されたワークロードに
合わせて設定されています。Turbopack スロットにはビルドに必要なリソースを割り当て、その他のスロットは
実測ピークに合わせてサイジングされています。このマシンがオーバーコミット状態になるのは、Turbopack ビルド、Release-Green
webpack ビルド、lint ジョブが同時に実行された場合のみです。その場合はホストの swap（16 GB）で吸収します。また、pull request の Build は
ホステッド環境で実行されるため、Turbopack スロットはほとんどの時間アイドル状態です。

| runner               | ラベル           | ロール                                                                                                                                                | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`     | Turbopack ビルド：`ci.yml` の `Build`（push/dispatch のみ）、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、nightly a11y ビルド | 56 GB / 60 GB（swap 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release`   | Release-Green（`release-green` + `main-green`）、webpack ビルド                                                                                       | 20 GB / 24 GB（swap 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`     | nightly（Schemathesis、promptfoo、garak、k6、a11y boot）および `quality.yml` の `lint-guard`                                                          | 12 GB / 16 GB（swap 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`     | 上記と同じプール                                                                                                                                      | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | （各リポジトリ） | Dependabot のみ（各 runner のピークは 155 MB、2026-10-18）                                                                                            | 4 GB / 6 GB                | 各 200 %   |

2026-10-18 の測定結果：

| リソース  | 値                      | スケジューリング上の意味                                                                                                                                                                                                                                                                                                                                                         |
| --------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32コア**      | Turbopack の本番ビルドは、上限なしでピーク時に 49 GB を使用（`tests/unit/ci-build-bundler-webpack.test.ts`）。Next 16.3.8 では、compile フェーズだけで約40 GB を保持（`next-build` の RSS が 36 GB、さらに17個の loader worker が 3 GB。2026-10-18 測定）。webpack ビルドは約14～16 GB。Turbopack ビルド1つと webpack ビルド1つは同時に収まるが、Turbopack ビルド2つは収まらない |
| swap      | 16 GB                   | `omniroute-113-5` は swap を無効化して実行されるため（`MemorySwapMax=0`）、暴走したビルドはマシン全体を swap させるのではなく、上限到達時に停止される                                                                                                                                                                                                                            |
| `/tmp`    | **12 GB tmpfs = RAM**   | ここに置かれたものはすべてメモリを消費する。残存ファイルは3時間後に削除される                                                                                                                                                                                                                                                                                                    |
| CPU       | 32コアで load 60 を観測 | quota の設定前は、Turbopack ビルド1つ（CPU 約1166 %）と coverage suite を同じマシンで実行すると、他の listener の heartbeat にリソースが回らなくなっていた（`The self-hosted runner lost communication`、#16853）                                                                                                                                                                |
| runners   | **6つの listener**      | OmniRoute 4つ + OmniHeuris + OmniMind。`omniroute-113-3/-4/-7/-8` は無効化されている（`systemctl enable --now` で1つを復帰可能）                                                                                                                                                                                                                                                 |

制限値は各 unit の `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
に設定されています（以前の値は `override.conf.bak-20261018` として保存）。これらは
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` により稼働中に適用されました。再起動は行っていないため、
実行中のジョブには影響していません。ラベルも runners API
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`）を介して、稼働中に変更されています。

## janitor のインストール（初回のみ、対象サーバー上で実施）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：30 分ごとに実行し、/var/log/runner-janitor.log に記録
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` は必須です。janitor は削除前に、開いているファイルのスナップショットを一度取得してパスがアイドル状態であることを確認します。このツールがなければ何も削除せず、その旨を通知します（終了コード 1）。変更を加える場合は、まず `--dry-run` で試してください。実行予定の操作を正確に表示し、実際には何も変更しません。

各実行時には、**tmpfs 上では 3 時間後**、ディスク上の `_work/_temp` では 24 時間後に、自身が残したファイル（`runner-*`、`omniroute-*`、`next-build*`、`e2e-build.tar.gz`）を消去します。また、75 分を超えた `next-build` を終了します（そこまで長時間実行されるジョブはありません。2026-08-27 には、GitHub がジョブを消失したと判定した後も 70 分間実行され続けた例がありました）。さらに、ユニットが **停止中** の runner について、48 時間以上経過した checkout を削除します。ディスク使用率が 85 % 以上、メモリ PSI の `full/avg60` が 10 % 以上、または listener 数が `MAX_ACTIVE_RUNNERS` を超えた場合には、omniroute/その他の内訳とともに警告します。終了コード 1 は対応が必要であることを示します。ログを確認してください。

75 分ルールでは、GitHub がすでに断念したジョブの build を検出できません。`Runner.Listener` がジョブを更新できない場合、`_diag/Runner_*.log` には
`POST request to …/renewjob timed out after 100 seconds` と記録されます。API は、最後に正常に更新されてから約 10 分後にジョブを `completed`
（失敗）として報告しますが、`next-build` はジョブが紐付いていない状態で実行され続けます（2026-10-18：#17066 の Build は 19:43 に失敗しましたが、その build は 5 分後も 40 GB を占有していました）。最新の `_diag/Worker_*.log` で ref を確認してから、PID を指定して build ツリーのみを SIGTERM で終了してください。対象は `next-build`、`npm run build`、`build-next-isolated.mjs`、および
`_work` worker です。`Runner.Listener`、`RunnerService.js`、`Runner.Worker` には絶対に触れないでください。worker がジョブをキャンセル済みとして報告し、listener は自動的にオンラインへ復帰します。

## Runner ユニット：KillMode

runner のデフォルトである `KillMode=process` では、ユニットを停止または再起動しても `Runner.Worker → npm → next-build`
が動作し続けます。孤立した build は、ジョブが紐付いていない状態で RAM と CPU を消費し続けます。すべての OmniRoute ユニットには、
`KillMode=mixed` を設定する drop-in
（`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`）
があります。まず listener に SIGTERM を送り、`TimeoutStop` の時点で cgroup 全体に SIGKILL を送ります。この設定はユニットの次回再起動時に有効になります。**一度に 1 つの runner のみを、アイドル状態のときに限って**再起動し、アイドル状態の確認と再起動は同じコマンド内で実行してください。

## 運用ルール

- **同時に実行する Turbopack ビルドは 1 つ — ラベルで強制。** 完全な Turbopack
  `next build` を実行するすべてのジョブは `[self-hosted, omni-build]` を対象とし、その
  ラベルを持つのは **`omniroute-113-5`** だけです: `ci.yml` の `Build`、`npm-publish.yml` の
  `publish`、`nightly-v4-build`、`preview-artifact`、夜間 a11y ビルド（#16853）、および
  `docker-publish.yml` の **amd64**（BuildKit 内では webpack — そこで Turbopack がパニックを
  起こした、run 33253576569）。arm64 の Docker レッグは引き続き `ubuntu-24.04-arm` で実行します。
  `docker-publish` の amd64 は、`ci.yml` の `Build` と `heavy-build-main` 並行実行グループを
  共有します（`cancel-in-progress: false`）。Docker Engine は `omniroute-113-5` 上に
  なければなりません。78 GB では Turbopack の 2 つ目のスロットは収まりません
  （2 × 33–37 GB に加えてマシン上の残りの処理があるため）。2 つ目のスロットが安全なのは
  webpack ビルドの場合だけです。
- **プルリクエストの Build はホステッドランナーで実行（2026-10-18）。** `ci.yml` の `Build` が
  `omni-build` に到達するのは `push` と `workflow_dispatch` の場合だけです。すべての
  `pull_request`（同一オリジンまたはフォーク）および `merge_group` の Build は、webpack を
  使用して `ubuntu-latest` 上で実行されます。同一オリジンのすべての PR をこのスロットに
  ルーティングしていたときは、1 回の Turbopack Build がスロットを 29～58 分占有し、
  18 件の Build が最大 18 時間待機し、リリースライン自身の push Build がスロットを
  獲得できたのは 40 ジョブ中 1 回でした。ホステッドランナーでは、同じ PR Build が
  その PR のほかのジョブと並行して 8～12 分で完了します。`npm-publish` が配布する
  バンドラーである Turbopack は、デフォルトブランチの夜間 a11y ビルド（04:41 UTC）、
  スロットに到達するすべての push または dispatch の Build、および `npm-publish`
  自体によって、リリースライン上で引き続き検証されます。
  `tests/unit/build/heavy-build-queue.test.ts` が、この 4 条件のゲートを固定しています。
- **Turbopack スロットを、測定済みの必要量未満に設定してはなりません。** 2026-10-18 の
  18:06 に、`omni-release` 用の余地を確保するため、スロットが 56G/60G から 40G/44G に
  引き下げられました。コンパイルフェーズは実行中ずっと `MemoryHigh` に張り付き
  （メモリ PSI の `full` は 30～43 %）、同じ cgroup を共有する `Runner.Listener` は
  ジョブを更新できませんでした。2026-10-17 に所有者が設定した 56G/60G は同日中に
  復元されました。この値を下回ってもビルド自体は失敗しませんが、スラッシングが発生し、
  ジョブが失われます。
- **Release-Green には専用スロットがあります（2026-10-18）。** それまでは 2 つの
  Release-Green 検証がどちらも `omni-build` 上で実行されていました。すべての push
  （約 10 回/時、1 日の push 実行 100 件中 97 件が処理途中でキャンセル）と、1 日 3 回の
  約 2 時間にわたる完全スイープ（05:29 のスイープはスロットを 6 時間待機）により、
  単一のビルドスロットは許容量の数倍まで過負荷となり、同一オリジンの PR Build は
  数時間待機していました。`release-green` と `main-green` は現在、`OMNIROUTE_USE_TURBOPACK=0`
  を設定して `omni-release`（`omniroute-113-6` のみ）を対象としており、開始済みの実行が
  新しい push によってキャンセルされることもなくなりました（保留中のスロットでは、
  引き続き大量発生した実行が集約されます）。
  `tests/unit/build/runner-capacity-routing.test.ts` が、ルーティング、webpack への切り替え、
  および `omni-release` 上では何も Turbopack でビルドされないことを固定しています。
- **軽量プール: `omni-light`。** `omniroute-113` と `omniroute-113-2` は、バックエンド専用の
  `next build`（約 5～6 GB、webpack）を必要とする夜間ジョブと、`quality.yml` の
  `lint-guard` を実行します。`omniroute-113` には 2026-10-18 まで `MemoryHigh=4G` が設定されていました。
  promptfoo ビルドはそこで 54 分間、メモリ回収を繰り返しながら処理を進めましたが、
  8 GB にすることでスロットリングは解消されます。
- **リスナー数を意図的に削減。** 2026-08-29 に 4 つの OmniRoute ユニットが無効化されました。
  追加のリスナーはそれぞれ、上記のメモリ予算を消費する別のテナントになるためです。
  janitor の上限は 6（cron 内の `MAX_ACTIVE_RUNNERS=6`）です。これはマシン上のすべての
  `Runner.Listener` をカウントし、OmniHeuris と OmniMind がこちらの 4 つにさらに 2 つを
  加えます。
- **いずれかのランナーがビジーな間は、決して `/tmp` や `_work` を手動でクリーンアップ
  しないでください。** 確認してから削除するまでの間に時間差があったため、2026-08-27 に
  実行中の Build ジョブから `_work` が失われました。janitor は確認と削除を 1 ステップで
  行うため、janitor に任せてください。
- ジョブの途中でランナーを停止すると、そのジョブはキャンセルされます（実環境で確認済み）。
  `systemctl stop` は、そのリスナーに `Runner.Worker` の子プロセスが存在しない場合にのみ
  実行し、しかも 1 つのコマンドで行ってください。
- ワークフローはアーティファクトを `/tmp` に置いてはなりません（ここは RAM です）。
  `$RUNNER_TEMP`（各ランナー専用のディスク上の領域）にダウンロードしてください。
  1.3 GB の `next-build` アーティファクトは tmpfs への配置に 27～32 分かかりましたが、
  ディスクからのアップロードは 2 分でした。
- `.15` VPS は検証環境専用です。CI ランナーを実行してはなりません。

## ホステッドレーン（GitHub-hosted runners）

このアカウントは **Pro** プランで、**同時実行可能なホステッドジョブは40件**です。この枠は、すべてのPRチェック、プッシュをトリガーとするすべてのワークフロー、およびCodeQLのデフォルトセットアップで共有されます。2026-10-18のマージキャンペーン中（`release/v3.8.52` で約10マージ/時間）に計測したところ、**24時間で2,500件のワークフロー実行が作成**され、6時間で同ブランチに44回プッシュされ、PRチェックが数時間待機する一方で **106件のホステッドジョブがキューに滞留**し、PRはチェックなしでマージされました。ブランチへのプッシュごとに、9つのワークフローが起動していました。

| `release/v*` へのプッシュ1回あたり          | ホステッドジョブ数 | 集中発生時の結果                                                     | 2026-10-18以降                                                                     |
| ------------------------------------------- | -----------------: | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ci.yml`（全マトリクス）                    |             最大30 | 次のプッシュでキャンセル、1日で24件中24件                            | `release/**` へのプッシュでは起動しない（PR実行 + Release-Green）                  |
| `quality.yml`                               |                 ~6 | キャンセル、23件中23件                                               | `release/**` へのプッシュでは起動しない                                            |
| `Release-Green` `--quick`                   |                  0 | `omni-build` で実行、100件中97件がキャンセル                         | `omni-release` スロットを使用し、キャンセルされず、保留中の実行は集約              |
| `Lock released branch`、`OpenSSF Scorecard` |                  2 | プッシュごとに1件の実行がキュー入り                                  | refごとに1件の実行（`tests/unit/build/hosted-lane-concurrency.test.ts`）           |
| `Release acceptance`（シャドーレポート）    |                  1 | プッシュごとにホステッド環境で `npm ci` を1回実行、キャンセルなし    | 変更なし — `paths:` フィルターの候補                                               |
| `Publish to Docker Hub` → `Deploy to VPS`   |                  2 | プッシュごとにキャンセル。amd64レッグは `omni-build` で競合          | 変更なし — オーナーのデプロイチャネル                                              |
| CodeQLデフォルトセットアップ（`dynamic`）   |                  4 | プッシュごとに `javascript-typescript`、`actions`、`c-cpp`、`python` | 変更なし — 設定 → コードセキュリティ。ここでは `c-cpp`/`python` のスキャン対象なし |

`tests/unit/build/push-storm-diet.test.ts` は、`ci.yml` と `quality.yml` のプッシュトリガーを
`main` のみに固定します。副作用として、CodeCovはリリースのプッシュごとのベースアップロードを
受信しなくなります（このステップは情報提供用であり、`continue-on-error` が設定されています）。
リポジトリ内のカバレッジゲートとPRコメントには影響しません。

**セルフホステッドの容量を増やしても、ホステッドキューの問題は解決しません。** devbox
（`devbox-vm-06-dev002`、24 vCPU / 54 GB）にランナーを配置することは可能ですが、エージェント
セッションによってすでに負荷が20～26に達しており、エージェントコンテナにはDockerデーモンが
ありません。また、飽和しているのはホステッド側のレーンです。同じ時点で `.113` ボックスには
71 GBの空き容量があり、負荷は5～8でした。制約となっているのはCPUではなく、上記のリスナーごとの
メモリ予算（上限6リスナー）です。残る対策はプロセス面のものです。キャンペーンPRはMergifyキュー
（`label=queue`）経由でマージし、バッチごとに1つの `merge_group` CI実行を共有することで、PRごとに
1回、さらにプッシュごとに1回実行されるのを避けます。また、CodeQLデフォルトセットアップの言語を
削減し、`release-acceptance.yml` が読み取るファイルに基づいてフィルタリングします。
