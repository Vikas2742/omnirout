# Self-Hosted Runner Box Operations (.113 pool) (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostatne hostovaný fond beží na serveri **.113** (`tomni-proxmox-113`). Od 2026-10-18 má každý
runner OmniRoute **jednu rolu**, jeden štítok a limit pamäte/CPU nastavený podľa nameranej záťaže.
Slot pre Turbopack dostáva prostriedky potrebné na zostavenie; ostatné sloty sú dimenzované podľa
nameraných špičiek. K prekročeniu kapacity servera dochádza iba vtedy, keď sa zostavenie Turbopack
prekrýva so zostavením webpack pre Release-Green a úlohou lint; swap hostiteľa (16 GB) túto situáciu
absorbuje, a keďže zostavenia pre pull requesty bežia na hostovaných runneroch, slot Turbopack je
väčšinu času nečinný:

| runner               | štítok           | rola                                                                                                                                                   | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`     | zostavenia Turbopack: `ci.yml` `Build` (iba push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nočné zostavenie a11y | 56 GB / 60 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), zostavenie webpack                                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`     | nočné úlohy (Schemathesis, promptfoo, garak, k6, spustenie a11y) a `quality.yml` `lint-guard`                                                          | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`     | rovnaký fond ako vyššie                                                                                                                                | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (ich repozitáre) | iba Dependabot (špička 155 MB pre každý, 2026-10-18)                                                                                                   | 4 GB / 6 GB                | 200 % každý |

Namerané 2026-10-18:

| prostriedok | hodnota                            | význam pre plánovanie                                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU   | **78 GB / 32 jadier**              | produkčné zostavenie Turbopack dosiahlo bez obmedzenia špičku 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); vo verzii Next 16.3.8 samotná fáza kompilácie využíva približne 40 GB (36 GB RSS v `next-build` plus 17 loader workerov po 3 GB, namerané 2026-10-18); zostavenie webpack približne 14–16 GB. Jedno zostavenie Turbopack a jedno zostavenie webpack sa zmestia súčasne; dve zostavenia Turbopack nie |
| swap        | 16 GB                              | `omniroute-113-5` beží s vypnutým swapom (`MemorySwapMax=0`), takže nekontrolované zostavenie sa ukončí pri dosiahnutí svojho limitu namiesto toho, aby spôsobilo swapovanie servera                                                                                                                                                                                                                                      |
| `/tmp`      | **12 GB tmpfs = RAM**              | všetko, čo je tam uložené, zaberá pamäť; zvyšky sa odstraňujú po 3 h                                                                                                                                                                                                                                                                                                                                                      |
| CPU         | zaznamenaná záťaž 60 na 32 jadrách | pred zavedením kvót jedno zostavenie Turbopack (~1166 % CPU) spolu so sadou testov pokrytia na rovnakom serveri blokovali signály prezenčnosti ostatných listenerov (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                 |
| runnery     | **6 listenerov**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sú zakázané (`systemctl enable --now` jeden z nich znova aktivuje)                                                                                                                                                                                                                                                                                        |

Limity sa nachádzajú v súbore `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
každej jednotky (predchádzajúce hodnoty sú uložené ako `override.conf.bak-20261018`) a boli použité
za behu pomocou `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez
reštartu, takže nebola ovplyvnená žiadna spustená úloha. Štítky sa menia prostredníctvom API runnerov
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), takisto za behu.

## Nainštalujte čistiaci skript (jednorazovo, na serveri)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): každých 30 minút, protokol do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je povinný: čistiaci skript pred odstránením overí nečinnosť cesty pomocou jednej snímky otvorených
súborov; bez tohto nástroja nič neodstráni a oznámi to
(ukončovací kód 1). Každú zmenu najprv vyskúšajte s `--dry-run` — vypíše presne, čo by
urobil, a ničoho sa nedotkne.

Čo robí pri každom spustení: odstraňuje naše vlastné pozostatky (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 h na tmpfs** a po 24 h na disku
v `_work/_temp`; ukončuje proces `next-build` starší ako 75 minút (žiadna úloha netrvá tak dlho — dňa
2026-08-27 jedna bežala 70 minút po tom, čo GitHub označil jej úlohu za stratenú); odstraňuje checkouty staršie ako 48 h
z runnerov, ktorých jednotka je **zastavená**; upozorňuje pri využití disku ≥ 85 %, hodnote PSI pamäte
`full/avg60` ≥ 10 % a väčšom počte listenerov, než určuje `MAX_ACTIVE_RUNNERS` (s
rozdelením na omniroute/ostatné). Ukončovací kód 1 = vyžaduje sa pozornosť; prečítajte si protokol.

Pravidlo 75 minút nezachytí build, ktorého úlohu už GitHub vzdal. Keď
`Runner.Listener` nedokáže obnoviť svoju úlohu, `_diag/Runner_*.log` obsahuje
`POST request to …/renewjob timed out after 100 seconds`, API nahlási úlohu ako `completed`
(neúspešnú) približne desať minút po poslednom úspešnom obnovení a `next-build` pokračuje v behu
bez priradenej úlohy (2026-10-18: build pre #17066 zlyhal o 19:43 a jeho proces zostavenia
ešte o päť minút neskôr zaberal 40 GB). Overte ref v najnovšom `_diag/Worker_*.log` a potom
odošlite SIGTERM iba stromu procesov buildu podľa PID — `next-build`, `npm run build`, `build-next-isolated.mjs` a
workerom v `_work`. Nikdy sa nedotýkajte procesov `Runner.Listener`, `RunnerService.js` ani `Runner.Worker`:
worker nahlási úlohu ako zrušenú a listener sa sám znova prepne do online stavu.

## Jednotky runnerov: KillMode

Predvolená hodnota `KillMode=process` runnera ponechá procesy `Runner.Worker → npm → next-build`
spustené aj po zastavení alebo reštartovaní jednotky — osirotený build naďalej spotrebúva RAM a
CPU bez priradenej úlohy. Každá jednotka OmniRoute obsahuje doplnkovú konfiguráciu
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s hodnotou `KillMode=mixed`: najprv odošle SIGTERM listeneru a pri
`TimeoutStop` odošle SIGKILL celej cgroup. Zmena sa prejaví pri nasledujúcom reštarte jednotky — reštartujte **jeden runner
naraz, iba keď je nečinný**, pričom kontrolu nečinnosti a reštart vykonajte rovnakým príkazom.

## Prevádzkové pravidlá

- **Naraz iba jedno zostavenie Turbopack — vynútené štítkom.** Každá úloha, ktorá spúšťa úplné
  `next build` pomocou Turbopacku, cieli na `[self-hosted, omni-build]`, pričom tento štítok má iba
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, nočné zostavenie a11y (#16853) a **amd64** v `docker-publish.yml` (webpack
  v BuildKite — Turbopack tam zlyhal, beh 33253576569). Vetva Dockeru pre arm64 zostáva na
  `ubuntu-24.04-arm`. amd64 v `docker-publish` zdieľa skupinu súbežnosti `heavy-build-main`
  s úlohou `Build` v `ci.yml` (`cancel-in-progress: false`). Docker Engine musí byť na
  `omniroute-113-5`. Druhý slot pre Turbopack sa nezmestí do 78 GB (2 × 33–37 GB plus zvyšok
  servera); druhý slot je bezpečný iba pre zostavenia pomocou webpacku.
- **Zostavenia pull requestov bežia na hostovaných runneroch (2026-10-18).** Úloha `Build` v
  `ci.yml` sa dostane na `omni-build` iba pri `push` a `workflow_dispatch`; úloha `Build` pre každý
  `pull_request` (z vlastného repozitára aj z forku) a `merge_group` beží na `ubuntu-latest`
  pomocou webpacku. Keď bol každý PR z vlastného repozitára smerovaný do slotu, zostavenie pomocou
  Turbopacku ho blokovalo 29–58 minút, 18 zostavení čakalo vo fronte až 18 h a zostavenie po
  odoslaní zmien na samotnú vydávaciu vetvu získalo slot raz za 40 úloh. Na hostovanom runneri
  trvá rovnaké zostavenie PR 8–12 minút a beží súbežne s ostatnými úlohami PR. Turbopack, teda
  bundler distribuovaný cez `npm-publish`, sa na vydávacej vetve naďalej používa v nočnom
  zostavení a11y predvolenej vetvy (04:41 UTC), v každom zostavení po odoslaní zmien alebo ručnom
  spustení, ktoré sa dostane do slotu, aj v samotnom `npm-publish`.
  `tests/unit/build/heavy-build-queue.test.ts` fixuje túto bránu so štyrmi podmienkami.
- **Nikdy nenastavujte slot Turbopacku pod jeho nameranú potrebu.** Dňa 2026-10-18 o 18:06 bol
  slot znížený z 56G/60G na 40G/44G, aby sa uvoľnilo miesto pre `omni-release`. Fáza kompilácie
  zostala počas celého behu na hodnote `MemoryHigh` (pamäťové PSI `full` 30–43 %) a
  `Runner.Listener`, ktorý zdieľa rovnakú cgroup, nedokázal obnoviť svoju úlohu. Hodnoty vlastníka
  56G/60G z 2026-10-17 boli obnovené v ten istý deň. Pod touto hodnotou zostavenie nezlyhá;
  začne zahlcovať systém a úloha sa stratí.
- **Release-Green má vlastný slot (2026-10-18).** Dovtedy obe validácie Release-Green bežali na
  `omni-build`: pri každom odoslaní zmien (~10/hodinu, pričom 97 zo 100 behov po odoslaní zmien
  bolo za jediný deň zrušených uprostred práce) a pri troch úplných kontrolách denne trvajúcich
  približne 2 h (kontrola o 05:29 čakala na slot 6 h) — jediný slot na zostavenie bol
  niekoľkonásobne preťažený a zostavenia PR z vlastného repozitára čakali celé hodiny.
  `release-green` a `main-green` teraz cielia na `omni-release` (iba `omniroute-113-6`) s
  `OMNIROUTE_USE_TURBOPACK=0` a spustený beh už nie je zrušený novším odoslaním zmien (čakajúci
  slot naďalej zlučuje nápor behov). `tests/unit/build/runner-capacity-routing.test.ts` fixuje
  smerovanie, prepnutie na webpack a skutočnosť, že nič na `omni-release` sa nezostavuje pomocou
  Turbopacku.
- **Ľahký pool: `omni-light`.** `omniroute-113` a `omniroute-113-2` spúšťajú nočné úlohy, ktoré
  potrebujú `next build` iba pre backend (~5–6 GB; webpack), a úlohu `lint-guard` v `quality.yml`.
  `omniroute-113` mal až do 2026-10-18 nastavené `MemoryHigh=4G` — zostavenie promptfoo sa tam
  54 minút predieralo opakovaným uvoľňovaním pamäte; 8 GB toto obmedzovanie odstraňuje.
- **Zámerne menej listenerov.** Štyri jednotky OmniRoute boli 2026-08-29 deaktivované — každý
  ďalší listener je ďalším používateľom vyššie uvedeného pamäťového rozpočtu. Strop čistiaceho
  procesu je 6 (`MAX_ACTIVE_RUNNERS=6` v crone): počíta každý `Runner.Listener` na serveri a
  OmniHeuris + OmniMind pridávajú k našim štyrom ďalšie dva.
- **Nikdy ručne nečistite `/tmp` ani `_work`, kým je ktorýkoľvek runner zaneprázdnený.** Kontrola
  nasledovaná po určitom čase odstránením je dôvodom, prečo aktívna úloha `Build` prišla
  2026-08-27 o svoj adresár `_work`. Čistiaci proces vykonáva kontrolu a odstránenie v jednom
  kroku; nechajte to naň.
- Zastavenie runnera uprostred úlohy túto úlohu zruší (pozorované naživo): `systemctl stop`
  používajte iba vtedy, keď jeho listener nemá žiadny podradený proces `Runner.Worker` — a
  vykonajte to jediným príkazom.
- Workflowy nesmú ukladať artefakty do `/tmp` (nachádza sa v RAM). Sťahujte ich do
  `$RUNNER_TEMP` (na disku, samostatne pre každý runner) — stiahnutie artefaktu `next-build`
  s veľkosťou 1,3 GB do tmpfs trvalo 27–32 minút, zatiaľ čo jeho nahratie z disku trvalo 2 minúty.
- VPS `.15` slúži iba na homologáciu — nikdy na ňom nebežia CI runnery.

## Hostovaný kanál (spúšťače hostované službou GitHub)

Účet využíva plán **Pro**: **40 súbežných hostovaných úloh**, ktoré zdieľajú všetky kontroly PR,
všetky workflow spúšťané po pushi a predvolené nastavenie CodeQL. Meranie z 2026-10-18 počas
kampane zlučovania (~10 zlúčení za hodinu do `release/v3.8.52`): **2 500 spustení workflow
vytvorených za 24 h**, 44 pushov do vetvy za 6 h, **106 hostovaných úloh vo fronte**, zatiaľ čo
kontroly PR čakali celé hodiny a PR boli zlúčené bez nich. Pri každom pushi do vetvy sa spustilo
deväť workflow:

| pri každom pushi do `release/v*`            | hostované úlohy | výsledok počas náporu                                         | od 2026-10-18                                                               |
| ------------------------------------------- | --------------: | ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `ci.yml` (úplná matica)                     |           až 30 | zrušené nasledujúcim pushom, 24 z 24 za deň                   | nespúšťa sa pri pushoch do `release/**` (spustenie PR + Release-Green)      |
| `quality.yml`                               |              ~6 | zrušené, 23 z 23                                              | nespúšťa sa pri pushoch do `release/**`                                     |
| `Release-Green` `--quick`                   |               0 | spustené na `omni-build`, zrušených 97 zo 100                 | slot `omni-release`, nikdy sa nezruší, čakajúce spustenia sa zlúčia         |
| `Lock released branch`, `OpenSSF Scorecard` |               2 | jedno spustenie vo fronte na každý push                       | jedno spustenie na ref (`tests/unit/build/hosted-lane-concurrency.test.ts`) |
| `Release acceptance` (tieňová správa)       |               1 | jedno hostované `npm ci` na každý push, nikdy nezrušené       | bez zmeny — kandidát na filter `paths:`                                     |
| `Publish to Docker Hub` → `Deploy to VPS`   |               2 | zrušené pri každom pushi; vetva amd64 súperí na `omni-build`  | bez zmeny — kanál nasadzovania vlastníka                                    |
| Predvolené nastavenie CodeQL (`dynamic`)    |               4 | `javascript-typescript`, `actions`, `c-cpp`, `python` na push | bez zmeny — Settings → Code security; `c-cpp`/`python` tu nič neskenujú     |

`tests/unit/build/push-storm-diet.test.ts` pevne kontroluje, že `ci.yml` a `quality.yml` sa pri
pushi spúšťajú iba pre `main`. Vedľajší účinok: Codecov už nedostáva základné nahratie pri
každom pushi do vydávacej vetvy (krok je iba informatívny a používa `continue-on-error`);
kontrola pokrytia v repozitári ani komentár k PR nie sú ovplyvnené.

**Väčšia kapacita na vlastných spúšťačoch nevyrieši front hostovaných úloh.** Vývojový server
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) by mohol hostiť spúšťač, no relácie agentov už
udržiavajú jeho zaťaženie na úrovni 20–26, kontajner agenta nemá démona Docker a preťažený je
hostovaný kanál. Server `.113` mal v rovnakom čase 71 GB voľného priestoru a zaťaženie 5–8;
jeho obmedzením je vyššie uvedený pamäťový rozpočet na jeden listener (maximum 6 listenerov),
nie procesor. Zostávajú už len procesné opatrenia: začleňovať PR kampane prostredníctvom
frontu Mergify (`label=queue`, dávky zdieľajú jedno spustenie CI `merge_group` namiesto jedného
spustenia na každý PR a ďalšieho na každý push), obmedziť jazyky v predvolenom nastavení
CodeQL a filtrovať `release-acceptance.yml` podľa súborov, ktoré číta.
