# Self-Hosted Runner Box Operations (.113 pool) (中文 (简体))

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

自托管池运行在 **.113** 主机（`tomni-proxmox-113`）上。自 2026-10-18 起，每个
OmniRoute 运行器都只有**一个角色**、一个标签，并根据其工作负载的实测值分配内存/CPU
预算。Turbopack 槽位获得构建所需的资源；其他槽位则根据其实测峰值确定大小。
只有当 Turbopack 构建、Release-Green webpack 构建和 lint 作业同时运行时，该主机才会
超额分配；主机交换空间（16 GB）会吸收这部分压力，而且由于拉取请求的 Build 在托管运行器上
运行，因此 Turbopack 槽位大部分时间处于空闲状态：

| 运行器               | 标签           | 角色                                                                                                                                      | `MemoryHigh` / `MemoryMax`     | `CPUQuota` |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack 构建：`ci.yml` `Build`（仅 push/dispatch）、Docker amd64、`npm-publish`、`nightly-v4-build`、`preview-artifact`、夜间 a11y 构建 | 56 GB / 60 GB（交换空间 0）    | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green（`release-green` + `main-green`）、webpack 构建                                                                             | 20 GB / 24 GB（交换空间 4 GB） | 800 %      |
| `omniroute-113-2`    | `omni-light`   | 夜间任务（Schemathesis、promptfoo、garak、k6、a11y 启动）和 `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB（交换空间 4 GB） | 600 %      |
| `omniroute-113`      | `omni-light`   | 与上方相同的池                                                                                                                            | 8 GB / 12 GB                   | 400 %      |
| OmniHeuris, OmniMind | （各自的仓库） | 仅 Dependabot（每个峰值 155 MB，2026-10-18）                                                                                              | 4 GB / 6 GB                    | 每个 200 % |

2026-10-18 实测：

| 资源      | 数值                    | 对调度的意义                                                                                                                                                                                                                                                                                                                                        |
| --------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 核**       | 一次 Turbopack 生产构建在未设上限时达到 49 GB 峰值（`tests/unit/ci-build-bundler-webpack.test.ts`）；在 Next 16.3.8 上，仅编译阶段就占用约 40 GB（`next-build` 中 36 GB RSS，加上 17 个各占 3 GB 的 loader worker，测于 2026-10-18）；一次 webpack 构建约占 14–16 GB。一个 Turbopack 构建加一个 webpack 构建可以同时容纳；两个 Turbopack 构建则不行 |
| 交换空间  | 16 GB                   | `omniroute-113-5` 在关闭交换空间的情况下运行（`MemorySwapMax=0`），因此失控的构建会在达到上限时被终止，而不是让整台主机开始使用交换空间                                                                                                                                                                                                             |
| `/tmp`    | **12 GB tmpfs = RAM**   | 任何存放在这里的内容都会占用内存；残留内容会在 3 小时后清理                                                                                                                                                                                                                                                                                         |
| CPU       | 在 32 核上观察到负载 60 | 设置配额之前，同一主机上的一个 Turbopack 构建（约 1166 % CPU）加一个覆盖率测试套件会导致其他监听器的心跳得不到资源（`The self-hosted runner lost communication`，#16853）                                                                                                                                                                           |
| 运行器    | **6 个监听器**          | 4 个 OmniRoute + OmniHeuris + OmniMind；`omniroute-113-3/-4/-7/-8` 已禁用（`systemctl enable --now` 可重新启用其中一个）                                                                                                                                                                                                                            |

这些限制位于各单元的 `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
中（之前的值保存在 `override.conf.bak-20261018`），并已通过
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` 实时应用——无需重启，因此没有
影响任何正在运行的作业。标签通过运行器 API 进行更改
（`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`），同样实时生效。

## 安装清理器（一次性，在机器上操作）

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron（root）：每 30 分钟运行一次，记录到 /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

必须安装 `lsof`：清理器会通过一次打开文件快照来确认路径处于空闲状态，
然后才会将其删除；如果没有此工具，它不会删除任何内容，并会明确说明
（退出码为 1）。任何更改都应先使用 `--dry-run` 试运行——它会准确打印将执行的
操作，而不会改动任何内容。

每次运行时的操作：清理我们自己留下的残留项（`runner-*`、`omniroute-*`、
`next-build*`、`e2e-build.tar.gz`），在 tmpfs 上保留 **3 小时**，在磁盘
`_work/_temp` 上保留 24 小时；终止运行时间超过 75 分钟的 `next-build`（没有作业会运行这么久——
2026-08-27，有一个作业在 GitHub 已判定其丢失后又运行了 70 分钟）；清理所属 runner 单元
**已停止**且存在时间超过 48 小时的检出目录；在磁盘使用率 ≥ 85%、内存 PSI
`full/avg60` ≥ 10%，以及侦听器数量超过 `MAX_ACTIVE_RUNNERS` 时发出警报（并细分为
omniroute/其他）。退出码 1 = 需要处理；请查看日志。

75 分钟规则无法捕获 GitHub 已放弃其作业的构建。当
`Runner.Listener` 无法续订其作业时，`_diag/Runner_*.log` 会显示
`POST request to …/renewjob timed out after 100 seconds`，API 会在最后一次成功续订后约十分钟将作业报告为
`completed`（失败），而 `next-build` 会在未关联任何作业的情况下继续运行
（2026-10-18：#17066 的构建在 19:43 被标记为失败，但五分钟后其构建仍占用
40 GB）。请在最新的 `_diag/Worker_*.log` 中确认 ref，然后仅按 PID 向构建进程树发送
SIGTERM——包括 `next-build`、`npm run build`、`build-next-isolated.mjs` 和
`_work` 工作进程。切勿触碰 `Runner.Listener`、`RunnerService.js` 或 `Runner.Worker`：
工作进程会将作业报告为已取消，而侦听器会自行恢复在线。

## Runner 单元：KillMode

runner 的默认 `KillMode=process` 会在单元停止或重启时留下仍在运行的
`Runner.Worker → npm → next-build`——孤立构建会在没有关联作业的情况下继续消耗内存和
CPU。每个 OmniRoute 单元都带有一个 drop-in 配置
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)，
其中设置了 `KillMode=mixed`：先向侦听器发送 SIGTERM，在
`TimeoutStop` 时向整个 cgroup 发送 SIGKILL。它会在该单元下次重启时生效——每次仅重启
**一个 runner，且只能在其空闲时进行**，并在同一条命令中执行空闲检查和重启。

## 操作规则

- **同一时间只运行一个 Turbopack 构建——通过标签强制执行。** 每个运行完整 Turbopack
  `next build` 的作业都以 `[self-hosted, omni-build]` 为目标，并且只有 **`omniroute-113-5`**
  带有该标签：`ci.yml` 的 `Build`、`npm-publish.yml` 的 `publish`、`nightly-v4-build`、`preview-artifact`、
  nightly a11y 构建（#16853），以及 `docker-publish.yml` 的 **amd64**（在 BuildKit 内使用 webpack——
  Turbopack 在那里发生了 panic，运行编号 33253576569）。arm64 Docker 分支仍在 `ubuntu-24.04-arm` 上运行。
  `docker-publish` 的 amd64 与 `ci.yml` 的 `Build` 共享 `heavy-build-main` 并发组
  （`cancel-in-progress: false`）。Docker Engine 必须位于 `omniroute-113-5` 上。第二个 Turbopack
  槽位无法容纳在 78 GB 内（2 × 33–37 GB，再加上机器的其余负载）；第二个槽位仅对
  webpack 构建是安全的。
- **拉取请求的 Build 在托管运行器上运行（2026-10-18）。** `ci.yml` 的 `Build` 仅在
  `push` 和 `workflow_dispatch` 时进入 `omni-build`；每个 `pull_request`（来自本仓库或 fork）
  和 `merge_group` 的 Build 都在 `ubuntu-latest` 上使用 webpack 运行。将每个来自本仓库的 PR
  都路由到该槽位后，一个 Turbopack Build 会占用它 29–58 分钟，18 个 Build 最多排队 18 小时，
  而发布分支自身的 push Build 在 40 个作业中仅有一次获得该槽位。在托管运行器上，同一个 PR
  Build 与该 PR 的其他作业并行时只需 8–12 分钟。`npm-publish` 所发布内容使用的打包器 Turbopack，
  仍会在发布分支上通过默认分支的 nightly a11y 构建（04:41 UTC）、每个进入该槽位的 push 或
  dispatch Build，以及 `npm-publish` 本身得到验证。`tests/unit/build/heavy-build-queue.test.ts`
  固定了这项包含四个条件的门控规则。
- **绝不能将 Turbopack 槽位的容量设置为低于实测需求。** 2026-10-18 18:06，为了给
  `omni-release` 腾出空间，该槽位从 56G/60G 下调至 40G/44G。编译阶段在整个运行期间都处于
  `MemoryHigh` 限制（内存 PSI `full` 为 30–43 %），而共享该 cgroup 的 `Runner.Listener`
  无法续租其作业。当天恢复了所有者于 2026-10-17 设置的 56G/60G。低于该值时，构建不会失败；
  它会发生颠簸，而作业会丢失。
- **Release-Green 拥有自己的槽位（2026-10-18）。** 在此之前，两项 Release-Green 验证都在
  `omni-build` 上运行：每次 push（约 10 次/小时；一天内 100 次 push 运行中有 97 次在执行中途被取消）
  以及每天三次约 2 小时的完整扫描（05:29 的扫描为等待该槽位排队了 6 小时）——单个构建槽位的
  超额订阅达到数倍，来自本仓库的 PR Build 需要等待数小时。`release-green` 和 `main-green`
  现在以 `omni-release`（仅 `omniroute-113-6`）为目标，并设置 `OMNIROUTE_USE_TURBOPACK=0`；
  已开始的运行不再因新的 push 而被取消（等待中的槽位仍会合并这波密集请求）。
  `tests/unit/build/runner-capacity-routing.test.ts` 固定了路由、webpack 切换规则，以及
  `omni-release` 上没有任何构建使用 Turbopack 这一约束。
- **轻量池：`omni-light`。** `omniroute-113` 和 `omniroute-113-2` 运行需要仅后端
  `next build`（约 5–6 GB；webpack）的 nightly 作业，以及 `quality.yml` 的 `lint-guard`。
  `omniroute-113` 在 2026-10-18 之前一直设置为 `MemoryHigh=4G`——promptfoo 构建在那里花了
  54 分钟不断回收内存才得以完成；8 GB 可消除这种限流。
- **有意减少监听器数量。** 2026-08-29 禁用了四个 OmniRoute 单元——每增加一个监听器，
  就会为上述内存预算增加一个租户。清理器上限为 6（cron 中的 `MAX_ACTIVE_RUNNERS=6`）：它会统计
  机器上的每个 `Runner.Listener`，而 OmniHeuris + OmniMind 在我们的四个之外还会再增加两个。
- **任何运行器繁忙时，绝不能手动清理 `/tmp` 或 `_work`。** 先检查、隔一段时间后再删除，
  正是 2026-08-27 一个正在运行的 Build 作业丢失其 `_work` 的原因。清理器会在一个步骤中完成
  检查和删除；交给它处理。
- 在作业执行期间停止运行器会取消该作业（已在线上观察到）：仅当其监听器没有
  `Runner.Worker` 子进程时才能执行 `systemctl stop`——并且要用一条命令完成。
- 工作流不得将构件放在 `/tmp` 中（它位于 RAM 上）。应下载到
  `$RUNNER_TEMP`（位于磁盘上，且每个运行器独立）——1.3 GB 的 `next-build` 构件下载到 tmpfs
  花费了 27–32 分钟，而从磁盘上传只需 2 分钟。
- `.15` VPS 仅用于预发布验证——绝不运行 CI 运行器。

## 托管通道（GitHub 托管的运行器）

该账户使用 **Pro** 计划：**40 个并发托管作业**，由每个 PR 检查、每个推送触发的工作流以及 CodeQL 的默认设置共享。2026-10-18 在一次合并活动期间（`release/v3.8.52` 上约 10 次合并/小时）测得：**24 小时内创建了 2,500 次工作流运行**，6 小时内向该分支推送了 44 次，PR 检查等待数小时期间有 **106 个托管作业排队**，并且 PR 在检查未完成的情况下被合并。每次推送到该分支时都会触发九个工作流：

| 每次推送到 `release/v*`                     | 托管作业数 | 风暴期间的结果                                                     | 自 2026-10-18 起                                                       |
| ------------------------------------------- | ---------: | ------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `ci.yml`（完整矩阵）                        |    最多 30 | 被下一次推送取消，一天内 24 次中有 24 次被取消                     | 不再因推送到 `release/**` 而启动（PR 运行 + Release-Green）            |
| `quality.yml`                               |         ~6 | 被取消，23 次中有 23 次被取消                                      | 不再因推送到 `release/**` 而启动                                       |
| `Release-Green` `--quick`                   |          0 | 在 `omni-build` 上运行，100 次中有 97 次被取消                     | 使用 `omni-release` 槽位，永不取消，合并待处理的运行                   |
| `Lock released branch`、`OpenSSF Scorecard` |          2 | 每次推送都有一个排队运行                                           | 每个引用运行一次（`tests/unit/build/hosted-lane-concurrency.test.ts`） |
| `Release acceptance`（影子报告）            |          1 | 每次推送都有一个托管的 `npm ci`，且永不取消                        | 未更改——适合添加 `paths:` 过滤器                                       |
| `Publish to Docker Hub` → `Deploy to VPS`   |          2 | 每次推送时取消；amd64 分支在 `omni-build` 上争用资源               | 未更改——所有者的部署通道                                               |
| CodeQL 默认设置（`dynamic`）                |          4 | 每次推送运行 `javascript-typescript`、`actions`、`c-cpp`、`python` | 未更改——设置 → 代码安全；`c-cpp`/`python` 在此处没有可扫描的内容       |

`tests/unit/build/push-storm-diet.test.ts` 固定了 `ci.yml` 和 `quality.yml` 仅限 `main` 的推送触发器。副作用：Codecov 不再接收每次发布推送的基础上传（该步骤仅用于提供信息，并设置了 `continue-on-error`）；仓库内的覆盖率门禁和 PR 评论不受影响。

**增加自托管容量无法解决托管队列问题。** devbox
（`devbox-vm-06-dev002`，24 vCPU / 54 GB）可以托管一个运行器，但代理会话已经使其负载保持在 20–26，代理容器没有 Docker 守护进程，而且饱和的是托管通道。同一时刻，`.113` 主机有 71 GB 可用空间，负载为 5–8；它的限制是上述每个侦听器的内存预算（上限为 6 个侦听器），而不是 CPU。剩余的手段都与流程有关：通过 Mergify 队列合入活动 PR（`label=queue`，批次共享一次 `merge_group` CI 运行，而不是每个 PR 运行一次、每次推送再运行一次）、精简 CodeQL 默认设置中的语言，并根据 `release-acceptance.yml` 所读取的文件对其进行过滤。
