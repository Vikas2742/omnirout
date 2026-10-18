# Self-Hosted Runner Box Operations (.113 pool) (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Der selbst gehostete Pool läuft auf dem **.113**-Server (`tomni-proxmox-113`). Seit dem 18.10.2026 hat jeder
OmniRoute-Runner **genau eine Rolle**, ein Label und ein Arbeitsspeicher-/CPU-Budget, das auf seine gemessene
Arbeitslast abgestimmt ist. Der Turbopack-Slot erhält die für den Build erforderlichen Ressourcen; die anderen Slots sind auf ihre
gemessenen Spitzenwerte ausgelegt. Der Server wird nur dann überbucht, wenn ein Turbopack-Build mit einem Release-Green-
webpack-Build und einem Lint-Job zusammenfällt; der Host-Swap (16 GB) fängt dies ab. Da Builds für Pull Requests
gehostet ausgeführt werden, ist der Turbopack-Slot die meiste Zeit inaktiv:

| Runner               | Label          | Rolle                                                                                                                                                  | `MemoryHigh` / `MemoryMax` | `CPUQuota`    |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | ------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-Builds: `ci.yml` `Build` (nur Push/Dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, der nächtliche a11y-Build | 56 GB / 60 GB (Swap 0)     | 1600 %        |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-Build                                                                                          | 20 GB / 24 GB (Swap 4 GB)  | 800 %         |
| `omniroute-113-2`    | `omni-light`   | nächtliche Jobs (Schemathesis, promptfoo, garak, k6, a11y-Boot) und `quality.yml` `lint-guard`                                                         | 12 GB / 16 GB (Swap 4 GB)  | 600 %         |
| `omniroute-113`      | `omni-light`   | derselbe Pool wie oben                                                                                                                                 | 8 GB / 12 GB               | 400 %         |
| OmniHeuris, OmniMind | (ihre Repos)   | nur Dependabot (Spitzenwert jeweils 155 MB, 18.10.2026)                                                                                                | 4 GB / 6 GB                | jeweils 200 % |

Gemessen am 18.10.2026:

| Ressource | Wert                             | Bedeutung für die Planung                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 Kerne**             | ein Turbopack-Produktions-Build erreichte ohne Begrenzung einen Spitzenwert von 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); bei Next 16.3.8 belegt allein die Kompilierungsphase ~40 GB (36 GB RSS in `next-build` plus 17 Loader-Worker mit 3 GB, gemessen am 18.10.2026); ein webpack-Build benötigt ~14–16 GB. Ein Turbopack- und ein webpack-Build passen zusammen; zwei Turbopack-Builds nicht |
| Swap      | 16 GB                            | `omniroute-113-5` läuft mit deaktiviertem Swap (`MemorySwapMax=0`), damit ein außer Kontrolle geratener Build beim Erreichen seines Limits beendet wird, statt den Server zum Swappen zu bringen                                                                                                                                                                                                               |
| `/tmp`    | **12 GB tmpfs = RAM**            | alles, was dort abgelegt wird, belegt Arbeitsspeicher; Überreste werden nach 3 Stunden entfernt                                                                                                                                                                                                                                                                                                                |
| CPU       | Last 60 auf 32 Kernen beobachtet | vor Einführung der Quoten ließ ein Turbopack-Build (~1166 % CPU) zusammen mit einer Coverage-Suite auf demselben Server die Heartbeats der anderen Listener verhungern (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                   |
| Runner    | **6 Listener**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` sind deaktiviert (`systemctl enable --now` reaktiviert einen davon)                                                                                                                                                                                                                                                                            |

Die Limits befinden sich für jede Unit in `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(vorherige Werte wurden als `override.conf.bak-20261018` beibehalten) und wurden im laufenden Betrieb mit
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` angewendet — ohne Neustart, sodass kein
laufender Job beeinträchtigt wurde. Labels werden ebenfalls im laufenden Betrieb über die Runner-API geändert
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Janitor installieren (einmalig auf dem Server)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): alle 30 Minuten, Protokollierung nach /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` ist erforderlich: Der Janitor weist anhand einer Momentaufnahme der geöffneten
Dateien nach, dass ein Pfad inaktiv ist, bevor er ihn entfernt. Ohne dieses Werkzeug
entfernt er nichts und meldet dies entsprechend (Exit-Code 1). Testen Sie jede Änderung
zuerst mit `--dry-run` — damit wird genau ausgegeben, was geschehen würde, ohne etwas
zu verändern.

Was bei jedem Durchlauf geschieht: Eigene Rückstände (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) werden nach **3 h auf tmpfs** und nach 24 h auf
dem Datenträger unter `_work/_temp` entfernt; ein `next-build`, das älter als 75 Minuten
ist, wird beendet (kein Job läuft so lange — am 2026-08-27 lief einer noch 70 Minuten
weiter, nachdem GitHub seinen Job bereits als verloren eingestuft hatte); 48 h alte
Checkouts von Runnern, deren Unit **gestoppt** ist, werden entfernt; Warnungen werden
bei einer Datenträgerauslastung ≥ 85 %, einem Arbeitsspeicher-PSI-Wert `full/avg60`
≥ 10 % und bei mehr Listenern als `MAX_ACTIVE_RUNNERS` ausgegeben (mit einer
Aufschlüsselung nach omniroute/sonstige). Exit-Code 1 = Eingreifen erforderlich;
lesen Sie das Protokoll.

Die 75-Minuten-Regel erfasst keinen Build, dessen Job von GitHub bereits aufgegeben
wurde. Wenn der `Runner.Listener` seinen Job nicht verlängern kann, enthält
`_diag/Runner_*.log` die Meldung `POST request to …/renewjob timed out after 100 seconds`;
die API meldet den Job etwa zehn Minuten nach der letzten erfolgreichen Verlängerung
als `completed` (fehlgeschlagen), und `next-build` läuft ohne zugeordneten Job weiter
(2026-10-18: Der Build von #17066 wurde um 19:43 als fehlgeschlagen markiert und
belegte fünf Minuten später immer noch 40 GB). Überprüfen Sie den Ref im neuesten
`_diag/Worker_*.log` und senden Sie dann nur an den Build-Prozessbaum anhand der PID
SIGTERM — `next-build`, `npm run build`, `build-next-isolated.mjs` und die
`_work`-Worker. Beenden Sie niemals `Runner.Listener`, `RunnerService.js` oder
`Runner.Worker`: Der Worker meldet den Job als abgebrochen, und der Listener geht
von selbst wieder online.

## Runner-Units: KillMode

Das standardmäßige `KillMode=process` des Runners lässt
`Runner.Worker → npm → next-build` weiterlaufen, wenn eine Unit gestoppt oder neu
gestartet wird — ein verwaister Build verbraucht weiterhin RAM und CPU, obwohl ihm
kein Job zugeordnet ist. Jede OmniRoute-Unit besitzt eine Drop-in-Datei
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
mit `KillMode=mixed`: zuerst SIGTERM an den Listener, dann bei `TimeoutStop` SIGKILL
an die gesamte cgroup. Die Einstellung wird beim nächsten Neustart der Unit wirksam
— starten Sie **jeweils nur einen Runner und nur dann neu, wenn er inaktiv ist**,
wobei die Inaktivitätsprüfung und der Neustart im selben Befehl ausgeführt werden
müssen.

## Betriebsregeln

- **Jeweils nur ein Turbopack-Build — durch ein Label erzwungen.** Jeder Job, der einen vollständigen
  Turbopack-`next build` ausführt, verwendet `[self-hosted, omni-build]`, und nur **`omniroute-113-5`**
  trägt dieses Label: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, der nächtliche a11y-Build (#16853) und **amd64** aus `docker-publish.yml`
  (webpack innerhalb von BuildKit — Turbopack geriet dort in Panik, Lauf 33253576569). Der
  arm64-Docker-Zweig bleibt auf `ubuntu-24.04-arm`. `docker-publish` amd64 teilt sich die
  Nebenläufigkeitsgruppe `heavy-build-main` mit `Build` aus `ci.yml`
  (`cancel-in-progress: false`). Docker Engine muss auf `omniroute-113-5` vorhanden sein. Ein
  zweiter Turbopack-Slot passt nicht in 78 GB (2 × 33–37 GB zuzüglich des Rests des Systems);
  ein zweiter Slot ist nur für webpack-Builds sicher.
- **Pull-Request-Builds laufen gehostet (2026-10-18).** `Build` aus `ci.yml` erreicht `omni-build`
  nur bei `push` und `workflow_dispatch`; jeder `pull_request` (aus dem eigenen Repository oder
  einem Fork) sowie jeder `merge_group`-Build läuft mit webpack auf `ubuntu-latest`. Als jeder PR
  aus dem eigenen Repository an den Slot weitergeleitet wurde, belegte ein Turbopack-Build ihn
  29–58 Minuten lang, 18 Builds standen bis zu 18 Stunden in der Warteschlange, und der
  Push-Build des Release-Zweigs selbst erhielt den Slot nur einmal in 40 Jobs. Gehostet dauert
  derselbe PR-Build neben den anderen Jobs des PRs 8–12 Minuten. Turbopack, der von
  `npm-publish` ausgelieferte Bundler, wird auf dem Release-Zweig weiterhin durch den nächtlichen
  a11y-Build des Standard-Branches (04:41 UTC), durch jeden Push- oder Dispatch-Build, der den
  Slot erreicht, sowie durch `npm-publish` selbst getestet.
  `tests/unit/build/heavy-build-queue.test.ts` schreibt die aus vier Bedingungen bestehende
  Zugangsregel fest.
- **Der Turbopack-Slot darf niemals kleiner als der gemessene Bedarf dimensioniert werden.** Am
  2026-10-18 um 18:06 wurde der Slot von 56G/60G auf 40G/44G verkleinert, um Platz für
  `omni-release` zu schaffen. Die Kompilierungsphase lag während ihrer gesamten Laufzeit am
  `MemoryHigh`-Grenzwert (Speicher-PSI `full` 30–43 %), und der `Runner.Listener`, der dieselbe
  cgroup verwendet, konnte seinen Job nicht verlängern. Die Einstellung des Besitzers von
  56G/60G vom 2026-10-17 wurde noch am selben Tag wiederhergestellt. Unterhalb dieses Werts
  schlägt der Build nicht fehl; er verbringt seine Zeit mit Thrashing, und der Job geht verloren.
- **Release-Green hat einen eigenen Slot (2026-10-18).** Bis dahin liefen beide
  Release-Green-Validierungen auf `omni-build`: bei jedem Push (~10/Stunde, 97 von 100
  Push-Läufen wurden an einem Tag mitten in der Arbeit abgebrochen) sowie bei drei vollständigen,
  jeweils etwa 2 Stunden dauernden Durchläufen pro Tag (der Durchlauf um 05:29 wartete 6 Stunden
  auf den Slot) — der einzelne Build-Slot war um ein Mehrfaches überbelegt, und PR-Builds aus dem
  eigenen Repository warteten stundenlang. `release-green` und `main-green` verwenden jetzt
  `omni-release` (ausschließlich `omniroute-113-6`) mit `OMNIROUTE_USE_TURBOPACK=0`, und ein
  gestarteter Lauf wird nicht mehr durch einen neueren Push abgebrochen (der wartende Slot fasst
  den Ansturm weiterhin zusammen). `tests/unit/build/runner-capacity-routing.test.ts` schreibt
  das Routing, die Umschaltung auf webpack sowie die Vorgabe fest, dass auf `omni-release` nichts
  mit Turbopack gebaut wird.
- **Leichtgewichtiger Pool: `omni-light`.** `omniroute-113` und `omniroute-113-2` führen die
  nächtlichen Jobs aus, die lediglich einen Backend-`next build` benötigen (~5–6 GB; webpack),
  sowie `lint-guard` aus `quality.yml`. `omniroute-113` hatte bis zum 2026-10-18
  `MemoryHigh=4G` — der promptfoo-Build kämpfte sich dort 54 Minuten lang mittels
  Speicherfreigabe durch; 8 GB beseitigen die Drosselung.
- **Absichtlich weniger Listener.** Vier OmniRoute-Units wurden am 2026-08-29 deaktiviert — jeder
  zusätzliche Listener ist ein weiterer Nutzer des oben genannten Speicherbudgets. Die
  Obergrenze des Janitors beträgt 6 (`MAX_ACTIVE_RUNNERS=6` in cron): Er zählt jeden
  `Runner.Listener` auf dem System, und OmniHeuris sowie OmniMind ergänzen unsere vier um zwei
  weitere.
- **Niemals `/tmp` oder `_work` manuell bereinigen, während irgendein Runner beschäftigt ist.**
  Eine Prüfung mit anschließender, zeitlich verzögerter Löschung führte dazu, dass ein laufender
  Build-Job am 2026-08-27 sein `_work` verlor. Der Janitor führt die Prüfung und das Entfernen in
  einem einzigen Schritt aus; überlassen Sie es ihm.
- Das Stoppen eines Runners während eines Jobs bricht den Job ab (im laufenden Betrieb
  beobachtet): `systemctl stop` nur dann ausführen, wenn sein Listener keinen
  `Runner.Worker`-Kindprozess hat — und dies in einem einzigen Befehl tun.
- Workflows dürfen keine Artefakte in `/tmp` ablegen (es liegt im RAM). Downloads müssen nach
  `$RUNNER_TEMP` erfolgen (pro Runner auf der Festplatte) — das 1,3 GB große
  `next-build`-Artefakt benötigte 27–32 Minuten, um im tmpfs anzukommen, und 2 Minuten für den
  Upload von der Festplatte.
- Der VPS `.15` ist ausschließlich für die Homologation vorgesehen — darauf laufen niemals
  CI-Runner.

## Gehostete Lane (GitHub-gehostete Runner)

Das Konto nutzt den **Pro**-Tarif: **40 gleichzeitig ausgeführte gehostete Jobs**, die von allen PR-Prüfungen,
allen durch Pushes ausgelösten Workflows und der CodeQL-Standardkonfiguration gemeinsam genutzt werden. Gemessen am 2026-10-18 während einer
Merge-Kampagne (~10 Merges/Stunde auf `release/v3.8.52`): **2.500 Workflow-Ausführungen innerhalb von
24 h erstellt**, 44 Pushes auf den Branch innerhalb von 6 h, **106 gehostete Jobs in der Warteschlange**, während PR-Prüfungen
stundenlang warteten und PRs ohne sie gemergt wurden. Bei jedem Push auf den Branch wurden neun Workflows ausgelöst:

| pro Push auf `release/v*`                   | gehostete Jobs | Ergebnis während des Ansturms                                  | seit 2026-10-18                                                                            |
| ------------------------------------------- | -------------: | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `ci.yml` (vollständige Matrix)              |      bis zu 30 | durch den nächsten Push abgebrochen, 24 von 24 an einem Tag    | wird bei Pushes auf `release/**` nicht gestartet (PR-Ausführung + Release-Green)           |
| `quality.yml`                               |             ~6 | abgebrochen, 23 von 23                                         | wird bei Pushes auf `release/**` nicht gestartet                                           |
| `Release-Green` `--quick`                   |              0 | lief auf `omni-build`, 97 von 100 abgebrochen                  | `omni-release`-Slot, wird nie abgebrochen, ausstehende Ausführungen werden zusammengefasst |
| `Lock released branch`, `OpenSSF Scorecard` |              2 | eine Ausführung pro Push in der Warteschlange                  | eine Ausführung pro Ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)               |
| `Release acceptance` (Schattenbericht)      |              1 | ein gehostetes `npm ci` pro Push, nie abgebrochen              | unverändert — Kandidat für einen `paths:`-Filter                                           |
| `Publish to Docker Hub` → `Deploy to VPS`   |              2 | pro Push abgebrochen; amd64-Teil konkurriert auf `omni-build`  | unverändert — Deployment-Kanal des Eigentümers                                             |
| CodeQL-Standardkonfiguration (`dynamic`)    |              4 | `javascript-typescript`, `actions`, `c-cpp`, `python` pro Push | unverändert — Settings → Code security; `c-cpp`/`python` scannen hier nichts               |

`tests/unit/build/push-storm-diet.test.ts` fixiert den ausschließlich für `main` geltenden Push-Trigger von `ci.yml` und
`quality.yml`. Nebeneffekt: Codecov erhält nicht mehr bei jedem Release-Push einen Basis-Upload (der
Schritt dient nur zur Information und verwendet `continue-on-error`); das repositoryinterne Coverage-Gate und der PR-Kommentar bleiben
davon unberührt.

**Mehr selbst gehostete Kapazität löst die Warteschlange der gehosteten Lane nicht.** Die Devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) könnte einen Runner hosten, doch die Agent-Sitzungen halten
ihre Last bereits bei 20–26, der Agent-Container verfügt über keinen Docker-Daemon, und ausgelastet ist
die gehostete Lane. Die `.113`-Box hatte zum selben Zeitpunkt 71 GB freien Speicherplatz und eine Last
von 5–8; ihre Einschränkung ist das oben genannte Speicherbudget pro Listener (Obergrenze von 6 Listenern),
nicht die CPU. Die verbleibenden Stellschrauben sind prozessbezogen: Kampagnen-PRs über die
Mergify-Warteschlange mergen (`label=queue`; Batches teilen sich eine `merge_group`-CI-Ausführung statt
einer Ausführung pro PR plus einer pro Push), die Sprachen der CodeQL-Standardkonfiguration reduzieren
und `release-acceptance.yml` anhand der Dateien filtern, die der Workflow liest.
