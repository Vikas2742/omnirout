# Self-Hosted Runner Box Operations (.113 pool) (中文 (繁體))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md)

---

自託管集區在 **.113** 主機（`tomni-proxmox-113`）上執行。自 2026-10-18 起，每個
OmniRoute runner 都只有**一個角色**、一個標籤，以及依其工作負載實測值配置的記憶體/CPU
預算。Turbopack 執行槽會取得建置所需的資源；其他執行槽則依其
實測峰值配置。只有當 Turbopack 建置、Release-Green webpack 建置與 lint 工作同時執行時，
這台主機才會超額配置；主機交換空間（16 GB）會吸收超出的部分，而且由於提取要求的 Build
在託管 runner 上執行，因此 Turbopack 執行槽大多數時間都處於閒置狀態：

| runner               | 標籤            | 角色                                                                                                                                        | `MemoryHigh` / `MemoryMax`     | `CPUQuota` |
| -------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| `omniroute-113-5`    | `omni-build`    | Turbopack 建置：`ci.yml` `Build`（僅限 push/dispatch）、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、夜間 a11y 建置 | 56 GB / 60 GB（交換空間 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release`  | Release-Green（`release-green` + `main-green`）、webpack 建置                                                                               | 20 GB / 24 GB（交換空間 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`    | 夜間工作（Schemathesis、promptfoo、garak、k6、a11y 啟動）以及 `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB（交換空間 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`    | 與上方相同的集區                                                                                                                            | 8 GB / 12 GB                   | 400 %      |
| OmniHeuris, OmniMind | （各自的 repo） | 僅執行 Dependabot（每個的峰值皆為 155 MB，2026-10-18）                                                                                      | 4 GB / 6 GB                    | 每個 200 % |

2026-10-18 實測：

| 資源      | 數值                      | 對排程的意義                                                                                                                                                                                                                                                                                                                                    |
| --------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 核心**       | 未設上限的 Turbopack 生產環境建置峰值達 49 GB（`tests/unit/ci-build-bundler-webpack.test.ts`）；在 Next 16.3.8 上，僅編譯階段就會占用約 40 GB（`next-build` 的 RSS 為 36 GB，另有 17 個各占 3 GB 的 loader worker，於 2026-10-18 實測）；webpack 建置約占 14–16 GB。一個 Turbopack 加上一個 webpack 建置可以同時容納；兩個 Turbopack 建置則不行 |
| 交換空間  | 16 GB                     | `omniroute-113-5` 執行時會停用交換空間（`MemorySwapMax=0`），因此失控的建置會在達到上限時被終止，而不會讓整台主機開始使用交換空間                                                                                                                                                                                                               |
| `/tmp`    | **12 GB tmpfs = RAM**     | 任何放在其中的內容都會占用記憶體；殘留內容會在 3 小時後清除                                                                                                                                                                                                                                                                                     |
| CPU       | 在 32 核心上觀察到負載 60 | 設定配額之前，一個 Turbopack 建置（約 1166 % CPU）加上同一台主機上的 coverage 套件，會使其他 listener 的 heartbeat 無法獲得資源（`The self-hosted runner lost communication`，#16853）                                                                                                                                                          |
| runner    | **6 個 listener**         | 4 個 OmniRoute + OmniHeuris + OmniMind；`omniroute-113-3/-4/-7/-8` 已停用（`systemctl enable --now` 可重新啟用其中一個）                                                                                                                                                                                                                        |

這些限制位於各 unit 的 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
中（先前的值保留為 `override.conf.bak-20261018`），並已透過
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` 即時套用——不需重新啟動，因此沒有
任何執行中的工作受到影響。標籤則透過 runners API 變更
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`），同樣會即時生效。

## 安裝清理程式（僅需一次，在主機上執行）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：每 30 分鐘執行一次，記錄至 /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

必須安裝 `lsof`：清理程式會先擷取一次已開啟檔案的快照，以證明路徑處於閒置狀態，之後才會移除；若沒有此工具，它不會移除任何項目，並會明確說明原因
（exit 1）。進行任何變更前，請先使用 `--dry-run` 試跑——它會準確列出將執行的操作，
且不會變更任何內容。

每次執行時的行為：清除我們自己遺留的項目（`runner-*`、`omniroute-*`、
`next-build*`、`e2e-build.tar.gz`）；tmpfs 上超過 **3 小時**的項目，以及磁碟
`_work/_temp` 上超過 24 小時的項目；終止執行超過 75 分鐘的 `next-build`（沒有任何工作會執行那麼久——
在 2026-08-27，某次工作在 GitHub 宣告該工作已遺失後仍執行了 70 分鐘）；清除所屬 unit 為
**已停止**之 runner 的 48 小時前 checkout；當磁碟使用率 ≥ 85%、記憶體 PSI
`full/avg60` ≥ 10%，或 listener 數量超過 `MAX_ACTIVE_RUNNERS` 時發出警示（並列出
omniroute/其他項目的明細）。Exit 1 = 需要處理；請查看日誌。

75 分鐘規則無法捕捉 GitHub 已經放棄其工作的 build。當
`Runner.Listener` 無法續約工作時，`_diag/Runner_*.log` 會顯示
`POST request to …/renewjob timed out after 100 seconds`，API 會在最後一次成功續約後約十分鐘將工作回報為 `completed`
（失敗），而 `next-build` 仍會在未連結任何工作的情況下持續執行
（2026-10-18：#17066 的 Build 在 19:43 被標記為失敗，但其 build 在五分鐘後仍
占用 40 GB）。請先在最新的 `_diag/Worker_*.log` 中確認 ref，然後
僅依 PID 對 build 程序樹傳送 SIGTERM——`next-build`、`npm run build`、`build-next-isolated.mjs`，以及
`_work` 工作程序。絕對不要動到 `Runner.Listener`、`RunnerService.js` 或 `Runner.Worker`：
工作器會將工作回報為已取消，而 listener 會自行恢復上線。

## Runner unit：KillMode

runner 預設的 `KillMode=process` 會在 unit 停止或重新啟動時，留下仍在執行的 `Runner.Worker → npm → next-build`
——孤立的 build 會在沒有連結任何工作的情況下，持續消耗 RAM 與
CPU。每個 OmniRoute unit 都有一個 drop-in
（`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`），
其中設定了 `KillMode=mixed`：先向 listener 傳送 SIGTERM，然後在
`TimeoutStop` 時對整個 cgroup 傳送 SIGKILL。此設定會在 unit 下次重新啟動時生效——每次只重新啟動**一個 runner，
且只能在閒置時進行**，並在同一個命令中完成閒置檢查與重新啟動。

## 操作規則

- **一次只能執行一個 Turbopack 建置——透過標籤強制執行。** 每個執行完整 Turbopack
  `next build` 的工作都以 `[self-hosted, omni-build]` 為目標，而只有 **`omniroute-113-5`** 帶有該
  標籤：`ci.yml` 的 `Build`、`npm-publish.yml` 的 `publish`、`nightly-v4-build`、`preview-artifact`、
  每晚的 a11y 建置 (#16853)，以及 `docker-publish.yml` 的 **amd64**（在 BuildKit 內使用 webpack——
  Turbopack 曾在該處發生 panic，執行編號 33253576569）。arm64 Docker 工作仍在 `ubuntu-24.04-arm` 上執行。
  `docker-publish` 的 amd64 與 `ci.yml` 的 `Build` 共用 `heavy-build-main` 並行群組
  (`cancel-in-progress: false`)。Docker Engine 必須位於 `omniroute-113-5`。78 GB 容不下第二個 Turbopack
  執行槽（2 × 33–37 GB，再加上機器其餘部分的用量）；第二個執行槽僅對
  webpack 建置安全。
- **提取要求的 Builds 在託管執行器上執行 (2026-10-18)。** `ci.yml` 的 `Build` 只有在
  `push` 和 `workflow_dispatch` 時才會到達 `omni-build`；每個 `pull_request`（來自自身或 fork）
  以及 `merge_group` Build 都會在 `ubuntu-latest` 上使用 webpack 執行。當每個來自自身的 PR 都路由至該執行槽時，一個 Turbopack
  Build 會占用它 29–58 分鐘，18 個 Builds 最長排隊 18 小時，而發行分支本身的 push Build
  在 40 個工作中僅有一次取得該執行槽。在託管執行器上，同一個 PR Build 與該 PR 的其他
  工作並行時僅需 8–12 分鐘。`npm-publish` 所發佈的 bundler Turbopack，仍會透過
  預設分支每晚的 a11y 建置（04:41 UTC）、每個到達該執行槽的 push 或 dispatch Build，
  以及 `npm-publish` 本身，在發行分支上持續接受測試。`tests/unit/build/heavy-build-queue.test.ts`
  固定了這個四條件閘門。
- **絕不可將 Turbopack 執行槽的容量設得低於實測需求。** 在 2026-10-18 18:06，為了替 `omni-release`
  騰出空間，該執行槽從 56G/60G 降至 40G/44G。編譯階段在整個執行期間都維持於
  `MemoryHigh`（記憶體 PSI `full` 為 30–43 %），而共用該 cgroup 的 `Runner.Listener`
  無法續租其工作。2026-10-17 原本的 56G/60G 設定已於同日恢復。
  低於此值時，建置不會失敗；它會反覆換頁抖動，最終導致工作遺失。
- **Release-Green 擁有自己的執行槽 (2026-10-18)。** 在此之前，兩個 Release-Green 驗證都於
  `omni-build` 上執行：每次 push（約每小時 10 次；一天內 100 次 push 執行中有 97 次在工作途中取消）
  以及每天三次約 2 小時的完整掃描（05:29 的掃描為等待執行槽等了 6 小時）——單一建置
  執行槽被數倍超額使用，來自自身的 PR Builds 也得等待數小時。
  `release-green` 和 `main-green` 現在以 `omni-release`（僅 `omniroute-113-6`）為目標，並設定
  `OMNIROUTE_USE_TURBOPACK=0`；已開始的執行不再因較新的 push 而取消（待處理執行槽仍會合併這波大量請求）。
  `tests/unit/build/runner-capacity-routing.test.ts`
  固定了路由、webpack 切換，以及 `omni-release` 上不會使用 Turbopack 建置的規則。
- **輕量集區：`omni-light`。** `omniroute-113` 和 `omniroute-113-2` 執行需要
  僅後端 `next build`（約 5–6 GB；webpack）的每晚工作，以及 `quality.yml` 的 `lint-guard`。`omniroute-113`
  在 2026-10-18 之前的 `MemoryHigh=4G`——promptfoo 建置在該處因記憶體回收而耗費了 54 分鐘；
  8 GB 可消除此節流問題。
- **刻意減少監聽器數量。** 四個 OmniRoute 單元已於 2026-08-29 停用——每增加一個
  監聽器，就會多一個租戶共享上述記憶體預算。清理程式的上限為 6（cron 中的 `MAX_ACTIVE_RUNNERS=6`）：它會計算
  機器上的每個 `Runner.Listener`，而 OmniHeuris + OmniMind 會在我們的四個之外再增加兩個。
- **任何 runner 忙碌時，絕不可手動清理 `/tmp` 或 `_work`。**
  先檢查、隔一段時間後再刪除，正是 2026-08-27 一個執行中的 Build 工作遺失其
  `_work` 的原因。清理程式會在單一步驟中完成檢查與移除；
  交給它處理。
- 在工作執行途中停止 runner 會取消該工作（已於實際環境觀察到）：只有當其監聽器沒有
  `Runner.Worker` 子行程時才能執行 `systemctl stop`——而且必須以單一命令完成。
- 工作流程不得將產出物放在 `/tmp`（它位於 RAM 中）。請下載至
  `$RUNNER_TEMP`（位於磁碟上，每個 runner 各自獨立）——1.3 GB 的 `next-build` 產出物需要 27–32
  分鐘才能寫入 tmpfs，而從磁碟上傳只需 2 分鐘。
- `.15` VPS 僅供驗收測試使用——絕不執行 CI runners。

## 託管通道（GitHub-hosted 執行器）

此帳戶採用 **Pro** 方案：**40 個並行託管作業**，由每個 PR 檢查、每個由推送觸發的工作流程，以及 CodeQL 的預設設定共用。於 2026-10-18 的合併作業期間（`release/v3.8.52` 上每小時約 10 次合併）測得：**24 小時內建立了 2,500 次工作流程執行**，6 小時內有 44 次推送至該分支，當 PR 檢查等待數小時且 PR 未經這些檢查便遭合併時，有 **106 個託管作業排入佇列**。每次推送至該分支時，都會觸發九個工作流程：

| 每次推送至 `release/v*`                     | 託管作業數 | 高峰期間的結果                                                     | 自 2026-10-18 起                                                        |
| ------------------------------------------- | ---------: | ------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `ci.yml`（完整矩陣）                        |    最多 30 | 由下一次推送取消，一天內 24 次中有 24 次遭取消                     | 不會在推送至 `release/**` 時啟動（PR 執行 + Release-Green）             |
| `quality.yml`                               |         ~6 | 遭取消，23 次中有 23 次                                            | 不會在推送至 `release/**` 時啟動                                        |
| `Release-Green` `--quick`                   |          0 | 在 `omni-build` 上執行，100 次中有 97 次遭取消                     | 使用 `omni-release` 插槽，永不取消，合併待處理的執行                    |
| `Lock released branch`、`OpenSSF Scorecard` |          2 | 每次推送都有一個執行排入佇列                                       | 每個 ref 執行一次（`tests/unit/build/hosted-lane-concurrency.test.ts`） |
| `Release acceptance`（影子報告）            |          1 | 每次推送都有一個託管的 `npm ci`，永不取消                          | 未變更——適合加入 `paths:` 篩選條件                                      |
| `Publish to Docker Hub` → `Deploy to VPS`   |          2 | 每次推送時取消；amd64 分支會競爭 `omni-build`                      | 未變更——擁有者的部署通道                                                |
| CodeQL 預設設定（`dynamic`）                |          4 | 每次推送執行 `javascript-typescript`、`actions`、`c-cpp`、`python` | 未變更——Settings → Code security；`c-cpp`/`python` 在此處未掃描任何內容 |

`tests/unit/build/push-storm-diet.test.ts` 固定了 `ci.yml` 與 `quality.yml` 僅限 `main` 的推送觸發條件。副作用：Codecov 不再於每次發行分支推送時接收基準上傳（該步驟僅供參考，且設有 `continue-on-error`）；儲存庫內的涵蓋率閘門與 PR 留言不受影響。

**增加更多自託管容量並不能解決託管佇列問題。** 開發機
（`devbox-vm-06-dev002`，24 vCPU / 54 GB）可以託管一個執行器，但代理程式工作階段已使其負載維持在 20–26，代理程式容器沒有 Docker daemon，而飽和的是託管通道。同一時間，`.113` 主機有 71 GB 可用空間，負載為 5–8；其限制是上述每個監聽器的記憶體預算（上限為 6 個監聽器），而非 CPU。其餘可採取的措施屬於流程面：透過 Mergify 佇列合併作業 PR（`label=queue`，批次共用一次 `merge_group` CI 執行，而非每個 PR 執行一次再加上每次推送執行一次）、精簡 CodeQL 預設設定的語言，並依據其讀取的檔案篩選 `release-acceptance.yml`。
