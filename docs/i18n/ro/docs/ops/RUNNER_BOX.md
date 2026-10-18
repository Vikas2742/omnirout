# Self-Hosted Runner Box Operations (.113 pool) (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Pool-ul autogăzduit rulează pe serverul **.113** (`tomni-proxmox-113`). Începând cu 2026-10-18, fiecare
runner OmniRoute are **un singur rol**, o singură etichetă și un buget de memorie/CPU dimensionat în funcție de valorile
măsurate pentru sarcina sa de lucru. Slotul Turbopack primește resursele necesare compilării; celelalte sloturi sunt dimensionate conform
vârfurilor măsurate. Serverul supralocă resurse doar atunci când o compilare Turbopack coincide cu o compilare webpack
Release-Green și cu o sarcină de lint; spațiul swap al gazdei (16 GB) absoarbe această situație și, deoarece compilările pentru cererile de integrare rulează
pe infrastructură găzduită, slotul Turbopack este inactiv în cea mai mare parte a timpului:

| runner               | etichetă         | rol                                                                                                                                                       | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`     | Compilări Turbopack: `ci.yml` `Build` (doar push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, compilarea a11y nocturnă | 56 GB / 60 GB (swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release`   | Release-Green (`release-green` + `main-green`), compilare webpack                                                                                         | 20 GB / 24 GB (swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`     | sarcini nocturne (Schemathesis, promptfoo, garak, k6, pornirea a11y) și `quality.yml` `lint-guard`                                                        | 12 GB / 16 GB (swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`     | același pool ca mai sus                                                                                                                                   | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (repo-urile lor) | doar Dependabot (vârf de 155 MB fiecare, 2026-10-18)                                                                                                      | 4 GB / 6 GB                | 200 % fiecare |

Măsurători din 2026-10-18:

| resursă   | valoare                                | implicații pentru planificare                                                                                                                                                                                                                                                                                                                                                                               |
| --------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 de nuclee**               | o compilare de producție Turbopack a atins un vârf de 49 GB fără limitare (`tests/unit/ci-build-bundler-webpack.test.ts`); în Next 16.3.8, numai faza de compilare ocupă ~40 GB (36 GB RSS în `next-build` plus 17 procese worker de încărcare la 3 GB, măsurat la 2026-10-18); o compilare webpack ocupă ~14–16 GB. O compilare Turbopack și una webpack încap împreună; două compilări Turbopack nu încap |
| swap      | 16 GB                                  | `omniroute-113-5` rulează cu swap dezactivat (`MemorySwapMax=0`), astfel încât o compilare scăpată de sub control este oprită la limita sa, în loc să forțeze serverul să folosească swap                                                                                                                                                                                                                   |
| `/tmp`    | **12 GB tmpfs = RAM**                  | orice este păstrat acolo ocupă memorie; fișierele rămase sunt eliminate după 3 h                                                                                                                                                                                                                                                                                                                            |
| CPU       | încărcare 60 observată pe 32 de nuclee | înainte de aplicarea cotelor, o compilare Turbopack (~1166 % CPU) împreună cu o suită de acoperire rulată pe același server au împiedicat heartbeat-urile celorlalți listeneri să primească suficiente resurse (`The self-hosted runner lost communication`, #16853)                                                                                                                                        |
| runneri   | **6 listeneri**                        | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sunt dezactivați (`systemctl enable --now` reactivează unul)                                                                                                                                                                                                                                                                                |

Limitele se află în fișierul `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` al fiecărei unități
(valorile anterioare sunt păstrate ca `override.conf.bak-20261018`) și au fost aplicate din mers cu
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — fără repornire, astfel încât nicio
sarcină în curs de rulare nu a fost afectată. Etichetele sunt modificate prin API-ul runnerilor
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), tot din mers.

## Instalați janitorul (o singură dată, pe server)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): la fiecare 30 min, jurnal în /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` este necesar: janitorul confirmă că o cale este inactivă printr-un instantaneu al fișierelor
deschise înainte de a o elimina, iar fără acest instrument nu elimină nimic și raportează acest lucru
(exit 1). Încercați mai întâi orice modificare cu `--dry-run` — afișează exact ce ar face
și nu modifică nimic.

Ce face la fiecare rulare: curăță propriile noastre fișiere reziduale (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) după **3 h pe tmpfs** și după 24 h pe discul
`_work/_temp`; oprește un `next-build` mai vechi de 75 min (niciun job nu rulează atât de mult — la
2026-08-27, unul a rulat 70 min după ce GitHub declarase jobul pierdut); elimină checkout-urile mai vechi
de 48 h ale runnerelor a căror unitate este **oprită**; emite alerte când discul este ocupat ≥ 85 %, PSI-ul
memoriei `full/avg60` este ≥ 10 % și există mai mulți listeneri decât `MAX_ACTIVE_RUNNERS` (cu o
defalcare omniroute/altele). Exit 1 = necesită atenție; citiți jurnalul.

Regula de 75 de minute nu detectează un build la care GitHub a renunțat deja. Când
`Runner.Listener` nu își poate reînnoi jobul, `_diag/Runner_*.log` afișează
`POST request to …/renewjob timed out after 100 seconds`, API-ul raportează jobul drept `completed`
(eșec) la aproximativ zece minute după ultima reînnoire reușită, iar `next-build` continuă să ruleze fără
niciun job atașat (2026-10-18: buildul pentru #17066 a eșuat la 19:43, iar procesul său de build încă
ocupa 40 GB cinci minute mai târziu). Confirmați referința în cel mai recent `_diag/Worker_*.log`, apoi
trimiteți SIGTERM numai arborelui de procese al buildului, după PID — `next-build`, `npm run build`, `build-next-isolated.mjs` și
procesele worker din `_work`. Nu modificați niciodată `Runner.Listener`, `RunnerService.js` sau `Runner.Worker`:
workerul raportează jobul drept anulat, iar listenerul revine online singur.

## Unitățile runner: KillMode

Valoarea implicită `KillMode=process` a runnerului lasă procesele `Runner.Worker → npm → next-build`
active atunci când o unitate este oprită sau repornită — un build orfan continuă să consume RAM și
CPU fără niciun job atașat. Fiecare unitate OmniRoute are un drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
cu `KillMode=mixed`: SIGTERM este trimis mai întâi listenerului, apoi SIGKILL întregului cgroup la
`TimeoutStop`. Acesta intră în vigoare la următoarea repornire a unității — reporniți **câte un runner
pe rând, numai când este inactiv**, cu verificarea stării de inactivitate și repornirea în aceeași comandă.

## Reguli de operare

- **O singură compilare Turbopack simultan — restricție impusă prin etichetă.** Fiecare job care execută un
  `next build` complet cu Turbopack vizează `[self-hosted, omni-build]`, iar numai **`omniroute-113-5`**
  are această etichetă: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, compilarea nocturnă a11y (#16853) și **amd64** din `docker-publish.yml`
  (webpack în BuildKit — Turbopack a intrat în panică acolo, rularea 33253576569). Ramura Docker
  arm64 rămâne pe `ubuntu-24.04-arm`. Ramura amd64 din `docker-publish` folosește același grup de
  concurență `heavy-build-main` ca `Build` din `ci.yml` (`cancel-in-progress: false`). Docker
  Engine trebuie să fie pe `omniroute-113-5`. Un al doilea slot Turbopack nu încape în 78 GB
  (2 × 33–37 GB plus restul consumului mașinii); un al doilea slot este sigur numai pentru
  compilări webpack.
- **Compilările pentru pull request-uri rulează pe infrastructură găzduită (2026-10-18).** `Build`
  din `ci.yml` ajunge la `omni-build` numai pentru `push` și `workflow_dispatch`; fiecare compilare
  `pull_request` (din originea proprie sau dintr-un fork) și `merge_group` rulează pe
  `ubuntu-latest` cu webpack. Când fiecare PR din originea proprie era direcționat către slot, o
  compilare Turbopack îl ocupa timp de 29–58 min, 18 compilări au rămas în coadă până la 18 h, iar
  compilarea push a liniei de release a obținut slotul o singură dată din 40 de joburi. Pe
  infrastructura găzduită, aceeași compilare de PR durează 8–12 min, în paralel cu celelalte
  joburi ale PR-ului. Turbopack, bundlerul livrat de `npm-publish`, continuă să fie testat pe linia
  de release prin compilarea nocturnă a11y a ramurii implicite (04:41 UTC), prin fiecare compilare
  push sau dispatch care ajunge la slot și prin `npm-publish` însuși.
  `tests/unit/build/heavy-build-queue.test.ts` fixează condiția cu patru clauze.
- **Nu dimensionați niciodată slotul Turbopack sub necesarul său măsurat.** La 2026-10-18, ora
  18:06, slotul a fost redus de la 56G/60G la 40G/44G pentru a face loc pentru `omni-release`.
  Faza de compilare a rămas la limita `MemoryHigh` pe toată durata rulării (PSI de memorie `full`
  30–43 %), iar `Runner.Listener`, care folosește același cgroup, nu și-a putut reînnoi jobul.
  Valorile de 56G/60G stabilite de proprietar la 2026-10-17 au fost restaurate în aceeași zi.
  Sub această valoare, compilarea nu eșuează; sistemul intră în thrashing, iar jobul este pierdut.
- **Release-Green are propriul slot (2026-10-18).** Până atunci, ambele validări Release-Green
  rulau pe `omni-build`: la fiecare push (~10/oră, 97 din 100 de rulări push fiind anulate în
  timpul execuției într-o singură zi) și în trei verificări complete de ~2 h pe zi (cea de la
  05:29 a așteptat 6 h pentru slot) — singurul slot de compilare era suprasolicitat de câteva ori
  peste capacitate, iar compilările PR-urilor din originea proprie așteptau ore întregi.
  `release-green` și `main-green` vizează acum `omni-release` (numai `omniroute-113-6`) cu
  `OMNIROUTE_USE_TURBOPACK=0`, iar o rulare începută nu mai este anulată de un push mai nou
  (slotul în așteptare continuă să consolideze avalanșa de rulări).
  `tests/unit/build/runner-capacity-routing.test.ts` fixează rutarea, comutarea la webpack și
  faptul că nimic de pe `omni-release` nu este compilat cu Turbopack.
- **Pool pentru sarcini ușoare: `omni-light`.** `omniroute-113` și `omniroute-113-2` rulează
  joburile nocturne care necesită un `next build` numai pentru backend (~5–6 GB; webpack) și
  `lint-guard` din `quality.yml`. `omniroute-113` a avut `MemoryHigh=4G` până la 2026-10-18 —
  compilarea promptfoo și-a făcut loc prin recuperarea repetată a memoriei timp de 54 de minute;
  8 GB elimină limitarea.
- **Mai puține procese listener, în mod intenționat.** Patru unități OmniRoute au fost dezactivate
  la 2026-08-29 — fiecare listener suplimentar este încă un consumator al bugetului de memorie de
  mai sus. Limita superioară a janitorului este 6 (`MAX_ACTIVE_RUNNERS=6` în cron): acesta numără
  fiecare `Runner.Listener` de pe mașină, iar OmniHeuris + OmniMind adaugă două la cele patru ale
  noastre.
- **Nu curățați niciodată manual `/tmp` sau `_work` cât timp vreun runner este ocupat.** O
  verificare urmată de ștergere, cu o pauză între cele două operații, a făcut ca un job `Build`
  activ să-și piardă directorul `_work` la 2026-08-27. Janitorul efectuează verificarea și
  eliminarea într-un singur pas; lăsați-l să facă acest lucru.
- Oprirea unui runner în timpul unui job anulează jobul (observat în direct): folosiți
  `systemctl stop` numai când listenerul său nu are niciun proces copil `Runner.Worker` — și
  efectuați operația printr-o singură comandă.
- Workflow-urile nu trebuie să depoziteze artefacte în `/tmp` (acesta se află în RAM). Descărcați
  în `$RUNNER_TEMP` (pe disc, separat pentru fiecare runner) — artefactul `next-build` de 1,3 GB
  a avut nevoie de 27–32 de minute pentru a ajunge pe tmpfs și de 2 minute pentru a fi încărcat
  de pe disc.
- VPS-ul `.15` este destinat exclusiv omologării — nu rulează niciodată runneri CI.

## Culoarul găzduit (runnere găzduite de GitHub)

Contul folosește planul **Pro**: **40 de joburi găzduite simultan**, partajate de toate verificările PR,
toate fluxurile de lucru declanșate de push și configurația implicită CodeQL. Măsurat la 2026-10-18 în
timpul unei campanii de merge (~10 merge-uri/oră pe `release/v3.8.52`): **2.500 de execuții ale fluxurilor de lucru create în
24 h**, 44 de push-uri în ramură în 6 h, **106 joburi găzduite puse în coadă**, în timp ce verificările PR au așteptat
ore întregi, iar PR-urile au fost îmbinate fără ele. Nouă fluxuri de lucru au fost declanșate la fiecare push în ramură:

| per push în `release/v*`                    | joburi găzduite | rezultat în timpul furtunii                                    | începând cu 2026-10-18                                                         |
| ------------------------------------------- | --------------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `ci.yml` (matrice completă)                 |      până la 30 | anulat de următorul push, 24 din 24 într-o zi                  | nu pornește la push-uri în `release/**` (execuție PR + Release-Green)          |
| `quality.yml`                               |              ~6 | anulat, 23 din 23                                              | nu pornește la push-uri în `release/**`                                        |
| `Release-Green` `--quick`                   |               0 | a rulat pe `omni-build`, 97 din 100 anulate                    | slot `omni-release`, niciodată anulat, execuțiile în așteptare se comasează    |
| `Lock released branch`, `OpenSSF Scorecard` |               2 | câte o execuție pusă în coadă pentru fiecare push              | câte o execuție per ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)   |
| `Release acceptance` (raport din umbră)     |               1 | câte un `npm ci` găzduit per push, niciodată anulat            | neschimbat — candidat pentru un filtru `paths:`                                |
| `Publish to Docker Hub` → `Deploy to VPS`   |               2 | anulat per push; etapa amd64 concurează pe `omni-build`        | neschimbat — canalul de deploy al proprietarului                               |
| Configurația implicită CodeQL (`dynamic`)   |               4 | `javascript-typescript`, `actions`, `c-cpp`, `python` per push | neschimbat — Settings → Code security; `c-cpp`/`python` nu scanează nimic aici |

`tests/unit/build/push-storm-diet.test.ts` fixează declanșatorul exclusiv la push pe `main` pentru `ci.yml` și
`quality.yml`. Efect secundar: Codecov nu mai primește un upload de bază la fiecare push de release (pasul
este informativ și folosește `continue-on-error`); pragul de acoperire din repository și comentariul PR nu sunt
afectate.

**Mai multă capacitate self-hosted nu rezolvă coada găzduită.** Devbox-ul
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) ar putea găzdui un runner, dar sesiunile agenților mențin deja
încărcarea sa la 20–26, containerul agentului nu are un daemon Docker, iar culoarul saturat este
cel găzduit. Mașina `.113` avea 71 GB liberi și o încărcare de 5–8 în același moment; constrângerea sa
este bugetul de memorie per listener de mai sus (maximum 6 listenere), nu procesorul. Pârghiile rămase
țin de proces: integrați PR-urile campaniei prin coada Mergify (`label=queue`, loturile partajează
o singură execuție CI `merge_group`, în loc de câte o execuție per PR plus una per push), reduceți limbajele
din configurația implicită CodeQL și filtrați `release-acceptance.yml` după fișierele pe care le citește.
