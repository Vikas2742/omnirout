# Self-Hosted Runner Box Operations (.113 pool) (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samoobslužný fond běží na serveru **.113** (`tomni-proxmox-113`). Od 2026-10-18 má každý
runner OmniRoute **jednu roli**, jeden štítek a přidělenou paměť/CPU odpovídající naměřeným nárokům
jeho úlohy. Slot pro Turbopack dostává prostředky potřebné pro sestavení; ostatní sloty jsou dimenzovány
podle naměřených špiček. Server překračuje své kapacity pouze tehdy, když se sestavení Turbopack překrývá
se sestavením webpack pro Release-Green a úlohou lint; toto překročení absorbuje swap hostitele (16 GB),
a protože sestavení pro pull requesty běží na hostovaných runnerech, je slot pro Turbopack většinu času nečinný:

| runner               | štítek              | role                                                                                                                                                   | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`        | Sestavení Turbopack: `ci.yml` `Build` (pouze push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noční sestavení a11y | 56 GB / 60 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), sestavení webpack                                                                                      | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`        | noční úlohy (Schemathesis, promptfoo, garak, k6, spuštění a11y) a `quality.yml` `lint-guard`                                                           | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`        | stejný fond jako výše                                                                                                                                  | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (jejich repozitáře) | pouze Dependabot (špička 155 MB u každého, 2026-10-18)                                                                                                 | 4 GB / 6 GB                | 200 % každý |

Naměřeno 2026-10-18:

| prostředek | hodnota                            | význam pro plánování                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 jader**               | produkční sestavení Turbopack dosáhlo bez omezení špičky 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); v Next 16.3.8 samotná fáze kompilace zabírá přibližně 40 GB (36 GB RSS v `next-build` plus 17 workerů loaderu po 3 GB, naměřeno 2026-10-18); sestavení webpack přibližně 14–16 GB. Jedno sestavení Turbopack a jedno sestavení webpack se vejdou současně; dvě sestavení Turbopack nikoli |
| swap       | 16 GB                              | `omniroute-113-5` běží s vypnutým swapem (`MemorySwapMax=0`), takže nekontrolovaně rostoucí sestavení je ukončeno při dosažení limitu, místo aby přimělo server swapovat                                                                                                                                                                                                                                  |
| `/tmp`     | **12 GB tmpfs = RAM**              | cokoli zde uloženého zabírá paměť; zbylé soubory se odstraňují po 3 h                                                                                                                                                                                                                                                                                                                                     |
| CPU        | zaznamenána zátěž 60 na 32 jádrech | před zavedením kvót jedno sestavení Turbopack (~1166 % CPU) společně se sadou testů pokrytí na stejném serveru připravily heartbeaty ostatních listenerů o prostředky (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                               |
| runnery    | **6 listenerů**                    | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` jsou zakázané (`systemctl enable --now` některý z nich znovu aktivuje)                                                                                                                                                                                                                                                                    |

Limity se nacházejí v souboru `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
každé jednotky (předchozí hodnoty jsou zachovány jako `override.conf.bak-20261018`) a byly aplikovány za běhu pomocí
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez restartu, takže nebyla
ovlivněna žádná běžící úloha. Štítky se rovněž za běhu mění prostřednictvím API runnerů
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Instalace úklidového skriptu (jednorázově, na serveru)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): každých 30 min, protokolovat do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je vyžadován: úklidový skript před odstraněním cesty ověří pomocí jednoho
snímku otevřených souborů, že se nepoužívá; bez tohoto nástroje nic neodstraní,
oznámí to a skončí s kódem 1. Každou změnu nejprve vyzkoušejte s `--dry-run` —
vypíše přesně, co by provedl, a ničeho se nedotkne.

Co dělá při každém spuštění: uklízí naše vlastní pozůstatky (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 h na tmpfs** a po 24 h na disku
`_work/_temp`; ukončí proces `next-build` starší než 75 min (žádná úloha neběží tak
dlouho — dne 2026-08-27 jedna běžela 70 min poté, co GitHub prohlásil její úlohu za
ztracenou); odstraňuje 48 h staré checkouty runnerů, jejichž jednotka je
**zastavená**; upozorňuje na využití disku ≥ 85 %, paměťový PSI `full/avg60` ≥ 10 %
a vyšší počet naslouchajících procesů než `MAX_ACTIVE_RUNNERS` (s rozdělením na
omniroute/ostatní). Návratový kód 1 = vyžaduje pozornost; přečtěte si protokol.

Pravidlo 75 minut nezachytí sestavení, jehož úlohu už GitHub vzdal. Když
`Runner.Listener` nemůže obnovit svou úlohu, `_diag/Runner_*.log` zobrazí
`POST request to …/renewjob timed out after 100 seconds`, API nahlásí úlohu jako `completed`
(neúspěšnou) přibližně deset minut po posledním úspěšném obnovení a `next-build` pokračuje
bez připojené úlohy (2026-10-18: sestavení #17066 bylo v 19:43 označeno jako neúspěšné a jeho
proces sestavení ještě o pět minut později zabíral 40 GB). Ověřte ref v nejnovějším
`_diag/Worker_*.log` a poté pomocí PID pošlete SIGTERM pouze stromu procesů sestavení —
`next-build`, `npm run build`, `build-next-isolated.mjs` a workerům v `_work`. Nikdy se
nedotýkejte procesů `Runner.Listener`, `RunnerService.js` ani `Runner.Worker`: worker
nahlásí úlohu jako zrušenou a listener se sám vrátí do stavu online.

## Jednotky runnerů: KillMode

Výchozí nastavení runneru `KillMode=process` ponechá při zastavení nebo restartování
jednotky procesy `Runner.Worker → npm → next-build` spuštěné — osiřelý proces sestavení
dál spotřebovává RAM a CPU, aniž by k němu byla připojena úloha. Každá jednotka OmniRoute
obsahuje doplňkovou konfiguraci
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s nastavením `KillMode=mixed`: nejprve odešle SIGTERM listeneru a při
`TimeoutStop` odešle SIGKILL celé cgroup. Nastavení se projeví při příštím restartování
jednotky — restartujte **vždy jen jeden runner a pouze tehdy, když je nečinný**,
přičemž kontrola nečinnosti a restart musí být ve stejném příkazu.

## Provozní pravidla

- **V jednu chvíli pouze jeden build Turbopacku — vynuceno štítkem.** Každá úloha, která spouští úplný
  `next build` s Turbopackem, cílí na `[self-hosted, omni-build]` a tento štítek nese pouze
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noční a11y build (#16853) a **amd64** v `docker-publish.yml` (webpack uvnitř BuildKitu —
  Turbopack tam selhal panikou, běh 33253576569). Větev Dockeru pro arm64 zůstává na `ubuntu-24.04-arm`.
  amd64 v `docker-publish` sdílí skupinu souběžnosti `heavy-build-main` s `Build` v `ci.yml`
  (`cancel-in-progress: false`). Na `omniroute-113-5` musí být Docker Engine. Druhý slot pro Turbopack
  se do 78 GB nevejde (2 × 33–37 GB plus zbytek systému); druhý slot je bezpečný pouze pro
  buildy s webpackem.
- **Buildy pull requestů běží na hostovaných runnerech (2026-10-18).** `Build` v `ci.yml` se dostane na
  `omni-build` pouze pro `push` a `workflow_dispatch`; každý `Build` pro `pull_request` (z vlastního
  repozitáře i z forku) a `merge_group` běží na `ubuntu-latest` s webpackem. Když byl každý PR
  z vlastního repozitáře směrován do tohoto slotu, build s Turbopackem jej zabral na 29–58 min,
  18 buildů čekalo ve frontě až 18 h a push build samotné release větve získal slot pouze jednou
  ze 40 úloh. Na hostovaném runneru trvá stejný PR build 8–12 min a běží vedle ostatních úloh
  daného PR. Turbopack, tedy bundler distribuovaný prostřednictvím `npm-publish`, zůstává na release
  větvi ověřován nočním a11y buildem výchozí větve (04:41 UTC), každým buildem spuštěným přes push
  nebo ručně, který se dostane do slotu, a samotným `npm-publish`.
  `tests/unit/build/heavy-build-queue.test.ts` zajišťuje tuto čtyřpodmínkovou bránu.
- **Nikdy nenastavujte slot Turbopacku pod jeho změřené požadavky.** Dne 2026-10-18 v 18:06 byl slot
  snížen z 56G/60G na 40G/44G, aby vzniklo místo pro `omni-release`. Fáze kompilace zůstala po celý
  běh na limitu `MemoryHigh` (paměťový PSI `full` 30–43 %) a `Runner.Listener`, který sdílí stejnou
  cgroup, nedokázal obnovit svou úlohu. Ještě tentýž den bylo obnoveno vlastníkem nastavených
  56G/60G z 2026-10-17. Pod touto hodnotou build neselže; začne zahlcovat systém přesouváním paměti
  a úloha se ztratí.
- **Release-Green má vlastní slot (2026-10-18).** Do té doby běžely obě validace Release-Green
  na `omni-build`: při každém pushi (~10/hodinu, 97 ze 100 běhů po pushi bylo během jediného dne
  zrušeno uprostřed práce) a při třech úplných průchodech denně trvajících ~2 h (průchod v 05:29
  čekal na slot 6 h) — jediný buildovací slot byl několikanásobně přetížen a buildy PR z vlastního
  repozitáře čekaly celé hodiny. `release-green` a `main-green` nyní cílí na `omni-release`
  (pouze `omniroute-113-6`) s `OMNIROUTE_USE_TURBOPACK=0` a spuštěný běh již není zrušen novějším
  pushem (čekající slot stále slučuje příval požadavků). `tests/unit/build/runner-capacity-routing.test.ts`
  zajišťuje směrování, přepnutí na webpack a to, že se na `omni-release` nic nebuildí pomocí Turbopacku.
- **Fond pro lehké úlohy: `omni-light`.** `omniroute-113` a `omniroute-113-2` spouštějí noční úlohy,
  které potřebují `next build` pouze pro backend (~5–6 GB; webpack), a `lint-guard` z `quality.yml`.
  `omniroute-113` měl až do 2026-10-18 nastaveno `MemoryHigh=4G` — build promptfoo se tam 54 minut
  prodíral opakovaným uvolňováním paměti; 8 GB toto omezování odstraňuje.
- **Záměrně méně listenerů.** Dne 2026-08-29 byly zakázány čtyři jednotky OmniRoute — každý další
  listener je dalším spotřebitelem výše uvedeného paměťového rozpočtu. Limit úklidového procesu je 6 (`MAX_ACTIVE_RUNNERS=6` v cronu): počítá
  každý `Runner.Listener` na stroji a OmniHeuris + OmniMind přidávají dva k našim čtyřem.
- **Nikdy ručně nečistěte `/tmp` ani `_work`, dokud je některý runner zaneprázdněný.**
  Kontrola následovaná s odstupem odstraněním způsobila, že běžící úloha `Build` přišla
  dne 2026-08-27 o svůj `_work`. Úklidový proces provádí kontrolu a odstranění v jediném kroku;
  nechte to na něm.
- Zastavení runneru uprostřed úlohy tuto úlohu zruší (pozorováno za provozu): `systemctl stop`
  používejte pouze tehdy, když jeho listener nemá podřízený proces `Runner.Worker` — a proveďte
  to jediným příkazem.
- Workflow nesmí ukládat artefakty do `/tmp` (je v RAM). Stahujte je do
  `$RUNNER_TEMP` (na disku, samostatně pro každý runner) — stažení 1,3GB artefaktu `next-build`
  na tmpfs trvalo 27–32 minut, zatímco jeho nahrání z disku trvalo 2 minuty.
- VPS `.15` slouží pouze k homologaci — nikdy na něm neběží CI runnery.

## Hostovaná kapacita (běhové instance hostované GitHubem)

Účet využívá tarif **Pro**: **40 souběžných hostovaných úloh**, sdílených všemi kontrolami PR,
všemi pracovními postupy spouštěnými při pushi a výchozím nastavením CodeQL. Naměřeno dne
2026-10-18 během slučovací kampaně (~10 sloučení za hodinu do `release/v3.8.52`): během
24 h bylo vytvořeno **2 500 běhů pracovních postupů**, za 6 h proběhlo 44 pushů do větve a
**106 hostovaných úloh čekalo ve frontě**, zatímco kontroly PR čekaly celé hodiny a PR byly
slučovány bez nich. Při každém pushi do větve se spouštělo devět pracovních postupů:

| při každém pushi do `release/v*`            | hostované úlohy | výsledek během náporu                                         | od 2026-10-18                                                               |
| ------------------------------------------- | --------------: | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `ci.yml` (úplná matice)                     |           až 30 | zrušeno následujícím pushem, 24 z 24 za den                   | nespouští se při pushi do `release/**` (běh PR + Release-Green)             |
| `quality.yml`                               |              ~6 | zrušeno, 23 z 23                                              | nespouští se při pushi do `release/**`                                      |
| `Release-Green` `--quick`                   |               0 | běželo na `omni-build`, zrušeno 97 ze 100                     | slot `omni-release`, nikdy se nezruší, čekající běhy se slučují             |
| `Lock released branch`, `OpenSSF Scorecard` |               2 | jeden běh ve frontě na každý push                             | jeden běh na každý ref (`tests/unit/build/hosted-lane-concurrency.test.ts`) |
| `Release acceptance` (stínová zpráva)       |               1 | jedno hostované `npm ci` na každý push, nikdy se nezruší      | beze změny — kandidát na filtr `paths:`                                     |
| `Publish to Docker Hub` → `Deploy to VPS`   |               2 | zrušeno při každém pushi; větev amd64 soupeří na `omni-build` | beze změny — kanál vlastníka pro nasazení                                   |
| Výchozí nastavení CodeQL (`dynamic`)        |               4 | `javascript-typescript`, `actions`, `c-cpp`, `python` na push | beze změny — Settings → Code security; `c-cpp`/`python` zde nic neskenují   |

`tests/unit/build/push-storm-diet.test.ts` vynucuje u `ci.yml` a `quality.yml` spouštění při
pushi pouze do `main`. Vedlejší efekt: Codecov již při každém pushi do vydávací větve
nedostává základní nahrání (tento krok je pouze informativní a používá `continue-on-error`);
brána pokrytí v repozitáři ani komentář k PR nejsou ovlivněny.

**Vyšší self-hostovaná kapacita nevyřeší frontu hostovaných úloh.** Devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) by mohl hostovat runner, ale relace agentů již
udržují jeho vytížení na hodnotách 20–26, kontejner agenta nemá démona Docker a nasycená je
hostovaná kapacita. Stroj `.113` měl ve stejném okamžiku 71 GB volného místa a vytížení 5–8;
jeho omezením je výše uvedený paměťový rozpočet na listener (maximum 6 listenerů), nikoli
CPU. Zbývající možnosti jsou procesní: začleňovat PR z kampaně prostřednictvím fronty
Mergify (`label=queue`, dávky sdílejí jeden běh CI `merge_group` namísto jednoho běhu na PR
a dalšího na každý push), omezit jazyky ve výchozím nastavení CodeQL a filtrovat
`release-acceptance.yml` podle souborů, které čte.
