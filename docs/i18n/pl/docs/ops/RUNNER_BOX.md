# Self-Hosted Runner Box Operations (.113 pool) (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samodzielnie hostowana pula działa na serwerze **.113** (`tomni-proxmox-113`). Od 2026-10-18 każdy
runner OmniRoute ma **jedną rolę**, jedną etykietę oraz budżet pamięci/CPU dopasowany do zmierzonego
obciążenia. Slot Turbopack otrzymuje zasoby wymagane przez kompilację, a pozostałe sloty są
skonfigurowane zgodnie ze zmierzonymi wartościami szczytowymi. Nadmiarowe przydzielanie zasobów na
serwerze występuje tylko wtedy, gdy kompilacja Turbopack zbiega się z kompilacją webpack
Release-Green i zadaniem lintowania; pamięć wymiany hosta (16 GB) absorbuje to obciążenie, a ponieważ
kompilacje pull requestów działają na hostowanych runnerach, slot Turbopack przez większość czasu
pozostaje bezczynny:

| runner               | etykieta          | rola                                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`  |
| -------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| `omniroute-113-5`    | `omni-build`      | kompilacje Turbopack: `ci.yml` `Build` (tylko push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nocna kompilacja a11y | 56 GB / 60 GB (swap 0)     | 1600 %      |
| `omniroute-113-6`    | `omni-release`    | Release-Green (`release-green` + `main-green`), kompilacja webpack                                                                                       | 20 GB / 24 GB (swap 4 GB)  | 800 %       |
| `omniroute-113-2`    | `omni-light`      | zadania nocne (Schemathesis, promptfoo, garak, k6, uruchomienie a11y) oraz `quality.yml` `lint-guard`                                                    | 12 GB / 16 GB (swap 4 GB)  | 600 %       |
| `omniroute-113`      | `omni-light`      | ta sama pula co powyżej                                                                                                                                  | 8 GB / 12 GB               | 400 %       |
| OmniHeuris, OmniMind | (ich repozytoria) | tylko Dependabot (wartość szczytowa 155 MB każdy, 2026-10-18)                                                                                            | 4 GB / 6 GB                | 200 % każdy |

Pomiary z 2026-10-18:

| zasób     | wartość                                     | znaczenie dla planowania                                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 rdzenie**                      | produkcyjna kompilacja Turbopack bez limitu osiągnęła szczytowo 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); w Next 16.3.8 sama faza kompilacji zajmuje ~40 GB (36 GB RSS w `next-build` oraz 17 procesów roboczych loadera po 3 GB, pomiar z 2026-10-18); kompilacja webpack zajmuje ~14–16 GB. Jedna kompilacja Turbopack i jedna webpack mieszczą się razem; dwie kompilacje Turbopack — nie |
| swap      | 16 GB                                       | `omniroute-113-5` działa z wyłączoną pamięcią wymiany (`MemorySwapMax=0`), więc niekontrolowana kompilacja zostaje przerwana po osiągnięciu limitu, zamiast wymuszać użycie pamięci wymiany przez serwer                                                                                                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**                       | wszystko, co jest tam przechowywane, zajmuje pamięć; pozostałości są usuwane po 3 godz.                                                                                                                                                                                                                                                                                                                   |
| CPU       | zaobserwowano obciążenie 60 na 32 rdzeniach | przed wprowadzeniem limitów jedna kompilacja Turbopack (~1166 % CPU) wraz z zestawem testów pokrycia uruchomionym na tym samym serwerze blokowały sygnały heartbeat pozostałych procesów nasłuchujących (`The self-hosted runner lost communication`, #16853)                                                                                                                                             |
| runnery   | **6 procesów nasłuchujących**               | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` są wyłączone (`systemctl enable --now` ponownie uruchamia jeden z nich)                                                                                                                                                                                                                                                                   |

Limity znajdują się dla każdej jednostki w `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(poprzednie wartości zachowano jako `override.conf.bak-20261018`) i zostały zastosowane na żywo za pomocą
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez restartu, dzięki czemu
nie wpłynęło to na żadne działające zadanie. Etykiety są zmieniane przez API runnerów
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), również na żywo.

## Instalacja janitora (jednorazowo, na maszynie)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): co 30 min, zapisuj log do /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` jest wymagany: przed usunięciem janitor potwierdza, że ścieżka jest
nieużywana, na podstawie pojedynczej migawki otwartych plików; bez tego narzędzia
niczego nie usuwa i informuje o tym (kod wyjścia 1). Każdą zmianę należy najpierw
wypróbować z `--dry-run` — polecenie wyświetli dokładnie, co zrobiłoby w normalnym
trybie, i niczego nie zmieni.

Co robi przy każdym uruchomieniu: usuwa nasze pozostałości (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) po **3 godz. na tmpfs** i po
24 godz. na dysku w `_work/_temp`; zatrzymuje proces `next-build` starszy niż
75 min (żadne zadanie nie działa tak długo — 2026-08-27 jeden z nich działał
przez 70 min po tym, jak GitHub uznał jego zadanie za utracone); usuwa katalogi
robocze starsze niż 48 godz. należące do runnerów, których jednostka jest
**zatrzymana**; alarmuje przy wykorzystaniu dysku ≥ 85%, pamięci PSI
`full/avg60` ≥ 10% oraz liczbie procesów nasłuchujących większej niż
`MAX_ACTIVE_RUNNERS` (z podziałem na omniroute/inne). Kod wyjścia 1 = wymagana
interwencja; przeczytaj log.

Reguła 75 minut nie wykrywa kompilacji, z której zadania GitHub już zrezygnował. Gdy
`Runner.Listener` nie może odnowić swojego zadania, `_diag/Runner_*.log` zawiera
`POST request to …/renewjob timed out after 100 seconds`, API zgłasza zadanie jako `completed`
(niepowodzenie) około dziesięciu minut po ostatnim pomyślnym odnowieniu, a `next-build` nadal działa
bez powiązanego zadania (2026-10-18: kompilacja dla #17066 została oznaczona jako nieudana o 19:43,
a jej proces kompilacji pięć minut później nadal zajmował 40 GB). Potwierdź ref w najnowszym
`_diag/Worker_*.log`, a następnie wyślij SIGTERM wyłącznie do drzewa procesów kompilacji według PID —
`next-build`, `npm run build`, `build-next-isolated.mjs` oraz procesów roboczych `_work`. Nigdy nie
ingeruj w `Runner.Listener`, `RunnerService.js` ani `Runner.Worker`: proces roboczy zgłosi zadanie
jako anulowane, a proces nasłuchujący samodzielnie wróci do trybu online.

## Jednostki runnerów: KillMode

Domyślne ustawienie runnera `KillMode=process` pozostawia procesy
`Runner.Worker → npm → next-build` aktywne po zatrzymaniu lub ponownym uruchomieniu
jednostki — osierocony proces kompilacji nadal zużywa pamięć RAM i CPU bez
powiązanego zadania. Każda jednostka OmniRoute ma konfigurację rozszerzającą
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
z ustawieniem `KillMode=mixed`: najpierw SIGTERM do procesu nasłuchującego,
a po upływie `TimeoutStop` SIGKILL do całej grupy cgroup. Ustawienie zacznie
obowiązywać przy następnym ponownym uruchomieniu jednostki — uruchamiaj ponownie
**po jednym runnerze naraz, tylko gdy jest bezczynny**, wykonując sprawdzenie
bezczynności i ponowne uruchomienie w tym samym poleceniu.

## Reguły operacyjne

- **Jedna kompilacja Turbopack naraz — wymuszane przez etykietę.** Każde zadanie wykonujące pełne
  `next build` przy użyciu Turbopack jest kierowane do `[self-hosted, omni-build]`, a tylko
  **`omniroute-113-5`** ma tę etykietę: `ci.yml` `Build`, `npm-publish.yml` `publish`,
  `nightly-v4-build`, `preview-artifact`, nocna kompilacja a11y (#16853) oraz
  `docker-publish.yml` **amd64** (webpack wewnątrz BuildKit — Turbopack uległ tam awarii,
  uruchomienie 33253576569). Etap Docker dla arm64 pozostaje na `ubuntu-24.04-arm`.
  `docker-publish` dla amd64 współdzieli grupę współbieżności `heavy-build-main` z zadaniem
  `Build` w `ci.yml` (`cancel-in-progress: false`). Docker Engine musi znajdować się na
  `omniroute-113-5`. Drugi slot Turbopack nie mieści się w 78 GB (2 × 33–37 GB plus pozostałe
  procesy na maszynie); drugi slot jest bezpieczny wyłącznie dla kompilacji webpack.
- **Kompilacje pull requestów działają na hostowanych runnerach (2026-10-18).** Zadanie `Build`
  w `ci.yml` trafia do `omni-build` wyłącznie dla `push` i `workflow_dispatch`; każde zadanie
  `Build` dla `pull_request` (z własnego repozytorium lub forka) oraz `merge_group` działa na
  `ubuntu-latest` z webpack. Gdy każdy PR z własnego repozytorium był kierowany do tego slotu,
  kompilacja Turbopack zajmowała go przez 29–58 min, 18 kompilacji czekało w kolejce nawet 18 h,
  a kompilacja push własnej gałęzi wydaniowej otrzymała slot raz na 40 zadań. Na hostowanym
  runnerze ta sama kompilacja PR trwa 8–12 min i działa równolegle z pozostałymi zadaniami PR.
  Turbopack, czyli bundler dostarczany przez `npm-publish`, pozostaje testowany na gałęzi
  wydaniowej przez nocną kompilację a11y domyślnej gałęzi (04:41 UTC), przez każdą kompilację
  push lub dispatch, która trafi do slotu, oraz przez samo `npm-publish`.
  `tests/unit/build/heavy-build-queue.test.ts` utrwala czterowarunkową bramkę.
- **Nigdy nie ustawiaj rozmiaru slotu Turbopack poniżej zmierzonego zapotrzebowania.**
  2026-10-18 o 18:06 limit slotu obniżono z 56G/60G do 40G/44G, aby zrobić miejsce dla
  `omni-release`. Faza kompilacji pozostawała na poziomie `MemoryHigh` przez cały czas działania
  (wskaźnik `full` pamięci PSI wynosił 30–43%), a `Runner.Listener`, który współdzieli cgroup,
  nie mógł odnowić dzierżawy zadania. Wartości właściciela 56G/60G z 2026-10-17 przywrócono tego
  samego dnia. Poniżej tej wartości kompilacja nie kończy się błędem; zaczyna intensywnie
  przerzucać pamięć, a zadanie zostaje utracone.
- **Release-Green ma własny slot (2026-10-18).** Do tego czasu obie walidacje Release-Green
  działały na `omni-build`: przy każdym pushu (~10/godzinę, 97 ze 100 uruchomień push anulowano
  w trakcie pracy w ciągu jednego dnia) oraz podczas trzech pełnych przebiegów dziennie,
  trwających około 2 h (przebieg o 05:29 czekał na slot 6 h) — pojedynczy slot kompilacji był
  przeciążony kilkukrotnie ponad swoją przepustowość, a kompilacje PR z własnego repozytorium
  czekały godzinami. `release-green` i `main-green` są teraz kierowane do `omni-release`
  (wyłącznie `omniroute-113-6`) z `OMNIROUTE_USE_TURBOPACK=0`, a rozpoczęte uruchomienie nie jest
  już anulowane przez nowszy push (oczekujący slot nadal konsoliduje nawał zadań).
  `tests/unit/build/runner-capacity-routing.test.ts` utrwala routing, przełączenie na webpack
  oraz gwarancję, że nic na `omni-release` nie jest kompilowane przy użyciu Turbopack.
- **Pula lekkich zadań: `omni-light`.** `omniroute-113` i `omniroute-113-2` uruchamiają nocne
  zadania wymagające `next build` tylko dla backendu (~5–6 GB; webpack) oraz `lint-guard`
  z `quality.yml`. `omniroute-113` miał `MemoryHigh=4G` do 2026-10-18 — kompilacja promptfoo
  przez 54 minuty odzyskiwała tam pamięć; 8 GB eliminuje ograniczanie wydajności.
- **Celowo mniej procesów nasłuchujących.** Cztery jednostki OmniRoute wyłączono 2026-08-29 —
  każdy dodatkowy proces nasłuchujący jest kolejnym użytkownikiem opisanego powyżej budżetu
  pamięci. Limit janitora wynosi 6 (`MAX_ACTIVE_RUNNERS=6` w cron): zlicza on każdy proces
  `Runner.Listener` na maszynie, a OmniHeuris i OmniMind dodają dwa procesy do naszych czterech.
- **Nigdy nie czyść ręcznie `/tmp` ani `_work`, gdy którykolwiek runner jest zajęty.**
  Sprawdzenie, a następnie usunięcie z przerwą między tymi operacjami spowodowało, że aktywne
  zadanie Build utraciło swój katalog `_work` 2026-08-27. Janitor wykonuje sprawdzenie i usunięcie
  w jednym kroku; pozostaw to jemu.
- Zatrzymanie runnera w trakcie zadania anuluje je (zaobserwowano na żywo): używaj
  `systemctl stop` tylko wtedy, gdy jego proces nasłuchujący nie ma procesu potomnego
  `Runner.Worker` — i wykonuj to jednym poleceniem.
- Workflowy nie mogą przechowywać artefaktów w `/tmp` (znajduje się on w RAM-ie). Pobieraj je do
  `$RUNNER_TEMP` (na dysku, osobno dla każdego runnera) — zapisanie artefaktu `next-build`
  o rozmiarze 1,3 GB na tmpfs zajmowało 27–32 minuty, a przesłanie go z dysku trwało 2 minuty.
- VPS `.15` służy wyłącznie do homologacji — nigdy nie uruchamia runnerów CI.

## Pula hostowana (moduły uruchamiające hostowane przez GitHub)

Konto korzysta z planu **Pro**: **40 równoczesnych zadań hostowanych**, współdzielonych przez wszystkie kontrole PR,
wszystkie przepływy pracy wyzwalane przez wypchnięcia oraz domyślną konfigurację CodeQL. Pomiar z 2026-10-18 podczas
kampanii scaleń (~10 scaleń/godzinę w `release/v3.8.52`): **2500 uruchomień przepływów pracy utworzonych w
ciągu 24 h**, 44 wypchnięcia do gałęzi w ciągu 6 h, **106 hostowanych zadań w kolejce**, podczas gdy kontrole PR czekały
godzinami, a PR-y scalano bez nich. Przy każdym wypchnięciu do gałęzi uruchamiało się dziewięć przepływów pracy:

| przy każdym wypchnięciu do `release/v*`     | zadania hostowane | wynik podczas przeciążenia                                              | od 2026-10-18                                                                             |
| ------------------------------------------- | ----------------: | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `ci.yml` (pełna macierz)                    |             do 30 | anulowane przez następne wypchnięcie, 24 z 24 w ciągu dnia              | nie jest uruchamiany przy wypchnięciach do `release/**` (uruchomienie PR + Release-Green) |
| `quality.yml`                               |                ~6 | anulowane, 23 z 23                                                      | nie jest uruchamiany przy wypchnięciach do `release/**`                                   |
| `Release-Green` `--quick`                   |                 0 | działał na `omni-build`, anulowano 97 ze 100                            | slot `omni-release`, nigdy nie jest anulowany, oczekujące uruchomienia są scalane         |
| `Lock released branch`, `OpenSSF Scorecard` |                 2 | jedno uruchomienie w kolejce na każde wypchnięcie                       | jedno uruchomienie na ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)            |
| `Release acceptance` (raport w tle)         |                 1 | jedno hostowane `npm ci` na wypchnięcie, nigdy nieanulowane             | bez zmian — kandydat do filtra `paths:`                                                   |
| `Publish to Docker Hub` → `Deploy to VPS`   |                 2 | anulowane przy każdym wypchnięciu; etap amd64 konkuruje na `omni-build` | bez zmian — kanał wdrożeniowy właściciela                                                 |
| Domyślna konfiguracja CodeQL (`dynamic`)    |                 4 | `javascript-typescript`, `actions`, `c-cpp`, `python` na wypchnięcie    | bez zmian — Ustawienia → Bezpieczeństwo kodu; `c-cpp`/`python` niczego tutaj nie skanują  |

`tests/unit/build/push-storm-diet.test.ts` utrwala wyzwalacz wypchnięć wyłącznie dla `main` w `ci.yml` i
`quality.yml`. Efekt uboczny: Codecov nie otrzymuje już bazowego przesłania przy każdym wypchnięciu wydania (ten
krok ma charakter informacyjny i używa `continue-on-error`); bramka pokrycia w repozytorium i komentarz PR
pozostają bez zmian.

**Większa pojemność infrastruktury self-hosted nie rozwiąże problemu kolejki hostowanej.** Maszyna deweloperska
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) mogłaby obsługiwać moduł uruchamiający, ale sesje agentów już
utrzymują jej obciążenie na poziomie 20–26, kontener agenta nie ma demona Docker, a przeciążona jest
pula hostowana. Maszyna `.113` miała w tym samym momencie 71 GB wolnego miejsca i obciążenie 5–8; jej ograniczeniem
jest opisany powyżej budżet pamięci na proces nasłuchujący (limit 6 procesów), a nie CPU. Pozostałe możliwości
dotyczą procesu: scalanie PR-ów kampanii za pośrednictwem kolejki Mergify (`label=queue`; partie współdzielą
jedno uruchomienie CI `merge_group` zamiast jednego uruchomienia na PR i jednego na wypchnięcie), ograniczenie języków
w domyślnej konfiguracji CodeQL oraz filtrowanie `release-acceptance.yml` według odczytywanych przez niego plików.
