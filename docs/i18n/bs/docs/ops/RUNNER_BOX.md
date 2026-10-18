# Self-Hosted Runner Box Operations (.113 pool) (Bosanski)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostalno hostovani skup izvršava se na uređaju **.113** (`tomni-proxmox-113`). Od 2026-10-18 svaki
OmniRoute runner ima **jednu ulogu**, jednu oznaku i memorijski/CPU budžet prilagođen izmjerenom
opterećenju. Turbopack mjesto dobija resurse potrebne za build; ostala mjesta dimenzionirana su prema
izmjerenim vršnim vrijednostima. Uređaj prekoračuje fizičke resurse samo kada se Turbopack build poklopi s
Release-Green webpack buildom i lint zadatkom; swap hosta (16 GB) to apsorbira, a pošto se buildovi za
pull requestove izvršavaju na hostovanim runnerima, Turbopack mjesto je većinu vremena neaktivno:

| runner               | oznaka                 | uloga                                                                                                                                            | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`           | Turbopack buildovi: `ci.yml` `Build` (samo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, noćni a11y build | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`         | Release-Green (`release-green` + `main-green`), webpack build                                                                                    | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`           | noćni zadaci (Schemathesis, promptfoo, garak, k6, a11y pokretanje) i `quality.yml` `lint-guard`                                                  | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`           | isti skup kao iznad                                                                                                                              | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (njihovi repozitoriji) | samo Dependabot (vršna vrijednost od 155 MB za svaki, 2026-10-18)                                                                                | 4 GB / 6 GB                | 200 % za svaki |

Izmjereno 2026-10-18:

| resurs    | vrijednost                              | šta to znači za raspoređivanje                                                                                                                                                                                                                                                                                                                                                              |
| --------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 jezgre**                   | produkcijski Turbopack build dostigao je vršnih 49 GB bez ograničenja (`tests/unit/ci-build-bundler-webpack.test.ts`); na Next 16.3.8 sama faza kompilacije zauzima ~40 GB (36 GB RSS u `next-build` plus 17 loader workera na 3 GB, izmjereno 2026-10-18); webpack build zauzima ~14–16 GB. Jedan Turbopack i jedan webpack build mogu se izvršavati zajedno; dva Turbopack builda ne mogu |
| swap      | 16 GB                                   | `omniroute-113-5` radi s isključenim swapom (`MemorySwapMax=0`), tako da se nekontrolirani build prekida na svom ograničenju umjesto da cijeli uređaj počne koristiti swap                                                                                                                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**                   | sve što je tamo smješteno zauzima memoriju; ostaci se uklanjaju nakon 3 h                                                                                                                                                                                                                                                                                                                   |
| CPU       | zabilježeno opterećenje 60 na 32 jezgre | prije uvođenja kvota, jedan Turbopack build (~1166 % CPU) zajedno s paketom testova pokrivenosti na istom uređaju blokirao je heartbeat signale drugih listenera (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                      |
| runneri   | **6 listenera**                         | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` su onemogućeni (`systemctl enable --now` ponovo aktivira jedan)                                                                                                                                                                                                                                                             |

Ograničenja se nalaze u datoteci `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
svake jedinice (prethodne vrijednosti sačuvane su kao `override.conf.bak-20261018`) i primijenjena su uživo pomoću
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — bez ponovnog pokretanja, tako da nijedan
aktivni zadatak nije bio pogođen. Oznake se mijenjaju putem runners API-ja
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), također uživo.

## Instalirajte čistač (jednokratno, na serveru)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): svakih 30 min, zapisivanje u /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je obavezan: čistač pomoću jednog snimka otvorenih datoteka potvrđuje da
se putanja ne koristi prije nego što je ukloni, a bez tog alata ne uklanja ništa
i to prijavljuje (izlazni kod 1). Svaku promjenu prvo isprobajte s `--dry-run` —
ispisuje tačno šta bi uradio i ne mijenja ništa.

Šta radi pri svakom pokretanju: čisti naše vlastite ostatke (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) nakon **3 h na tmpfs-u** i 24 h
na disku u `_work/_temp`; zaustavlja `next-build` stariji od 75 min (nijedan
zadatak ne traje toliko dugo — 2026-08-27 jedan je trajao 70 min nakon što je
GitHub proglasio njegov zadatak izgubljenim); uklanja radne kopije starije od
48 h za runnere čija je jedinica **zaustavljena**; upozorava kada je disk
popunjen ≥ 85 %, memorijski PSI `full/avg60` ≥ 10 % i kada ima više listenera
nego što iznosi `MAX_ACTIVE_RUNNERS` (uz podjelu na omniroute/ostale). Izlazni
kod 1 = potrebna je pažnja; pročitajte zapisnik.

Pravilo od 75 minuta ne prepoznaje build od kojeg je GitHub već odustao. Kada
`Runner.Listener` ne može obnoviti svoj zadatak, `_diag/Runner_*.log` prikazuje
`POST request to …/renewjob timed out after 100 seconds`, API prijavljuje zadatak kao `completed`
(neuspjeh) otprilike deset minuta nakon posljednje uspješne obnove, a `next-build` nastavlja raditi
bez povezanog zadatka (2026-10-18: build za #17066 označen je neuspješnim u 19:43, a njegov build je
i pet minuta kasnije još uvijek zauzimao 40 GB). Potvrdite ref u najnovijem `_diag/Worker_*.log`, a zatim
pošaljite SIGTERM samo stablu build procesa prema PID-u — `next-build`, `npm run build`, `build-next-isolated.mjs` i
workerima u `_work`. Nikada ne dirajte `Runner.Listener`, `RunnerService.js` ili `Runner.Worker`: worker
prijavljuje zadatak kao otkazan, a listener se sam vraća online.

## Jedinice runnera: KillMode

Zadani `KillMode=process` runnera ostavlja `Runner.Worker → npm → next-build`
aktivnim kada se jedinica zaustavi ili ponovo pokrene — napušteni build nastavlja
trošiti RAM i CPU bez povezanog zadatka. Svaka OmniRoute jedinica ima dodatnu
konfiguraciju
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
s postavkom `KillMode=mixed`: prvo šalje SIGTERM listeneru, a zatim SIGKILL cijeloj
cgroupi pri `TimeoutStop`. Stupa na snagu pri sljedećem ponovnom pokretanju jedinice
— ponovo pokrećite **jedan po jedan runner, samo kada je neaktivan**, pri čemu
provjera neaktivnosti i ponovno pokretanje moraju biti u istoj naredbi.

## Pravila rada

- **Samo jedan Turbopack build istovremeno — nametnuto oznakom.** Svaki posao koji pokreće puni Turbopack
  `next build` cilja `[self-hosted, omni-build]`, a samo **`omniroute-113-5`** ima tu
  oznaku: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  noćni a11y build (#16853) i `docker-publish.yml` **amd64** (webpack unutar BuildKita —
  Turbopack se tamo srušio, pokretanje 33253576569). arm64 Docker grana ostaje na `ubuntu-24.04-arm`.
  `docker-publish` amd64 dijeli grupu konkurentnosti `heavy-build-main` sa `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Drugi Turbopack
  slot ne stane u 78 GB (2 × 33–37 GB plus ostatak sistema); drugi slot je siguran samo za
  webpack buildove.
- **Buildovi za pull requestove pokreću se na hostovanoj infrastrukturi (2026-10-18).** `ci.yml` `Build` dolazi do `omni-build` samo za
  `push` i `workflow_dispatch`; svaki `pull_request` (iz vlastitog repozitorija ili forka) i `merge_group` Build
  pokreće se na `ubuntu-latest` uz webpack. Kada je svaki PR iz vlastitog repozitorija bio usmjeren na taj slot, Turbopack
  Build ga je zauzimao 29–58 min, 18 Buildova čekalo je u redu do 18 h, a vlastiti push Build
  grane izdanja dobio je slot jednom u 40 poslova. Na hostovanoj infrastrukturi isti PR Build traje 8–12 min uz ostale
  poslove tog PR-a. Turbopack, bundler koji `npm-publish` isporučuje, nastavlja se testirati na grani izdanja putem
  noćnog a11y builda zadane grane (04:41 UTC), svakog push ili dispatch Builda koji
  dobije slot i samog `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  fiksira uslov od četiri klauzule.
- **Nikada ne postavljajte veličinu Turbopack slota ispod njegove izmjerene potrebe.** Dana 2026-10-18 u 18:06 slot je
  smanjen sa 56G/60G na 40G/44G kako bi se napravilo mjesta za `omni-release`. Faza kompajliranja bila je na
  `MemoryHigh` tokom cijelog pokretanja (memorijski PSI `full` 30–43 %), a `Runner.Listener`, koji
  dijeli cgroup, nije mogao obnoviti svoj posao. Vlasnikove vrijednosti 56G/60G od 2026-10-17 vraćene su
  istog dana. Ispod te vrijednosti build ne pada; počinje intenzivno prebacivati memoriju, a posao se gubi.
- **Release-Green ima vlastiti slot (2026-10-18).** Do tada su se obje Release-Green validacije pokretale
  na `omni-build`: pri svakom pushu (~10/sat, 97 od 100 push pokretanja otkazano je usred rada u jednom danu)
  i tri potpuna prolaza od ~2 h dnevno (prolaz u 05:29 čekao je 6 h na slot) — jedini build
  slot bio je višestruko preopterećen, a PR Buildovi iz vlastitog repozitorija čekali su satima.
  `release-green` i `main-green` sada ciljaju `omni-release` (samo `omniroute-113-6`) uz
  `OMNIROUTE_USE_TURBOPACK=0`, a započeto pokretanje više se ne otkazuje zbog novijeg pusha (
  slot na čekanju i dalje sažima nalet). `tests/unit/build/runner-capacity-routing.test.ts`
  fiksira usmjeravanje, prebacivanje na webpack i činjenicu da se ništa na `omni-release` ne gradi Turbopackom.
- **Lagani skup: `omni-light`.** `omniroute-113` i `omniroute-113-2` pokreću noćne poslove kojima je potreban
  `next build` samo za backend (~5–6 GB; webpack) i `quality.yml` `lint-guard`. `omniroute-113`
  imao je `MemoryHigh=4G` do 2026-10-18 — promptfoo build se tamo probijao kroz povrat memorije 54 minute;
  8 GB uklanja usporavanje.
- **Namjerno manje listenera.** Četiri OmniRoute jedinice onemogućene su 2026-08-29 — svaki dodatni
  listener još je jedan korisnik prethodno navedenog memorijskog budžeta. Gornja granica čistača je 6 (`MAX_ACTIVE_RUNNERS=6` u cronu): on broji
  svaki `Runner.Listener` na sistemu, a OmniHeuris + OmniMind dodaju dva na naša četiri.
- **Nikada ručno ne čistite `/tmp` ili `_work` dok je bilo koji runner zauzet.** Postupak
  provjeri-pa-izbriši s razmakom između ta dva koraka razlog je zbog kojeg je aktivni Build posao izgubio svoj
  `_work` 2026-08-27. Čistač obavlja provjeru i uklanjanje u jednom koraku;
  prepustite to njemu.
- Zaustavljanje runnera usred posla otkazuje posao (uočeno uživo): koristite `systemctl stop` samo
  kada njegov listener nema podređeni proces `Runner.Worker` — i uradite to jednom naredbom.
- Workflowi ne smiju ostavljati artefakte u `/tmp` (nalazi se u RAM-u). Preuzimajte u
  `$RUNNER_TEMP` (na disku, zasebno za svaki runner) — artefaktu `next-build` od 1.3 GB trebalo je 27–32
  minute da se smjesti na tmpfs i 2 minute da se učita s diska.
- VPS `.15` služi samo za homologaciju — nikada ne pokreće CI runnere.

## Hostovana traka (izvršioci koje hostuje GitHub)

Račun je na **Pro** planu: **40 istovremenih hostovanih poslova**, koje dijele sve provjere PR-ova,
svi radni tokovi pokrenuti slanjem izmjena i zadana CodeQL konfiguracija. Mjereno 2026-10-18 tokom
kampanje spajanja (~10 spajanja/sat na `release/v3.8.52`): **2.500 pokretanja radnih tokova kreirano je
u 24 h**, 44 slanja izmjena na granu u 6 h, **106 hostovanih poslova čekalo je u redu** dok su provjere
PR-ova čekale satima, a PR-ovi su spajani bez njih. Devet radnih tokova pokretalo se pri svakom slanju
izmjena na granu:

| po slanju izmjena na `release/v*`           | hostovani poslovi | ishod tokom navale                                                      | od 2026-10-18                                                                        |
| ------------------------------------------- | ----------------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `ci.yml` (puna matrica)                     |             do 30 | otkazano sljedećim slanjem izmjena, 24 od 24 u jednom danu              | ne pokreće se pri slanju izmjena na `release/**` (PR pokretanje + Release-Green)     |
| `quality.yml`                               |                ~6 | otkazano, 23 od 23                                                      | ne pokreće se pri slanju izmjena na `release/**`                                     |
| `Release-Green` `--quick`                   |                 0 | pokretano na `omni-build`, otkazano 97 od 100                           | utor `omni-release`, nikad se ne otkazuje, pokretanja na čekanju se sažimaju         |
| `Lock released branch`, `OpenSSF Scorecard` |                 2 | jedno pokretanje u redu čekanja po slanju izmjena                       | jedno pokretanje po referenci (`tests/unit/build/hosted-lane-concurrency.test.ts`)   |
| `Release acceptance` (izvještaj u sjeni)    |                 1 | jedan hostovani `npm ci` po slanju izmjena, nikad otkazan               | nepromijenjeno — kandidat za filter `paths:`                                         |
| `Publish to Docker Hub` → `Deploy to VPS`   |                 2 | otkazano po slanju izmjena; amd64 dio se takmiči na `omni-build`        | nepromijenjeno — vlasnikov kanal za implementaciju                                   |
| Zadana CodeQL konfiguracija (`dynamic`)     |                 4 | `javascript-typescript`, `actions`, `c-cpp`, `python` po slanju izmjena | nepromijenjeno — Settings → Code security; `c-cpp`/`python` ovdje ništa ne skeniraju |

`tests/unit/build/push-storm-diet.test.ts` utvrđuje okidač `ci.yml` i
`quality.yml` za slanje izmjena samo na `main`. Nuspojava: Codecov više ne prima osnovno učitavanje
po slanju izmjena na granu izdanja (korak je informativan i koristi `continue-on-error`); provjera
pokrivenosti unutar repozitorija i komentar na PR-u ostaju nepromijenjeni.

**Veći samostalno hostovani kapacitet ne rješava red čekanja hostovanih poslova.** Razvojni računar
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) mogao bi hostovati izvršioca, ali sesije agenata već
održavaju njegovo opterećenje na 20–26, kontejner agenta nema Docker daemon, a zasićena je
hostovana traka. Računar `.113` je u istom trenutku imao 71 GB slobodnog prostora i opterećenje
5–8; njegovo ograničenje je prethodno navedeni memorijski budžet po slušaocu (najviše 6 slušalaca),
a ne CPU. Preostale mogućnosti su procesne: spojiti PR-ove kampanje putem Mergify reda
(`label=queue`, serije dijele jedno `merge_group` CI pokretanje umjesto jednog pokretanja po PR-u
plus jednog po slanju izmjena), smanjiti broj jezika u zadanoj CodeQL konfiguraciji i filtrirati
`release-acceptance.yml` prema datotekama koje čita.
