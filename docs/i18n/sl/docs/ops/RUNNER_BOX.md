# Self-Hosted Runner Box Operations (.113 pool) (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Samostojno gostovana skupina se izvaja na strežniku **.113** (`tomni-proxmox-113`). Od 2026-10-18 ima vsak
izvajalnik OmniRoute **eno vlogo**, eno oznako ter omejitev pomnilnika/CPE, prilagojeno izmerjenim
potrebam njegove delovne obremenitve. Mesto za Turbopack dobi toliko virov, kot jih zahteva gradnja;
druga mesta so prilagojena svojim izmerjenim konicam. Strežnik čezmerno dodeljuje vire le, kadar
gradnja Turbopack sovpade z gradnjo webpack Release-Green in opravilom lint; izmenjevalni prostor
gostitelja (16 GB) to ublaži, in ker se gradnje zahtev za spojitev izvajajo gostovano, je mesto
Turbopack večino časa nedejavno:

| izvajalnik           | oznaka               | vloga                                                                                                                                             | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`         | gradnje Turbopack: `ci.yml` `Build` (samo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, nočna gradnja a11y | 56 GB / 60 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release`       | Release-Green (`release-green` + `main-green`), gradnja webpack                                                                                   | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`         | nočna opravila (Schemathesis, promptfoo, garak, k6, zagon a11y) in `quality.yml` `lint-guard`                                                     | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`         | ista skupina kot zgoraj                                                                                                                           | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (njuni repozitoriji) | samo Dependabot (konica 155 MB za vsakega, 2026-10-18)                                                                                            | 4 GB / 6 GB                | 200 % vsak |

Izmerjeno 2026-10-18:

| vir         | vrednost                            | pomen za razporejanje                                                                                                                                                                                                                                                                                                                                                                                  |
| ----------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAM / CPE   | **78 GB / 32 jeder**                | produkcijska gradnja Turbopack je brez omejitve dosegla konico 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); pri Next 16.3.8 že samo faza prevajanja zaseda ~40 GB (36 GB RSS v `next-build` in 17 nalagalnih delavcev s po 3 GB, izmerjeno 2026-10-18); gradnja webpack porabi ~14–16 GB. Ena gradnja Turbopack in ena gradnja webpack se lahko izvajata skupaj; dve gradnji Turbopack pa ne |
| swap        | 16 GB                               | `omniroute-113-5` se izvaja z izklopljenim izmenjevalnim prostorom (`MemorySwapMax=0`), zato je pobegla gradnja ustavljena pri svoji omejitvi, namesto da bi strežnik začel uporabljati izmenjevalni prostor                                                                                                                                                                                           |
| `/tmp`      | **12 GB tmpfs = RAM**               | vse, kar je shranjeno tam, zaseda pomnilnik; ostanki se odstranijo po 3 urah                                                                                                                                                                                                                                                                                                                           |
| CPE         | opažena obremenitev 60 na 32 jedrih | pred uvedbo omejitev je ena gradnja Turbopack (~1166 % CPE) skupaj z zbirko preizkusov pokritosti na istem strežniku izrinila signale dejavnosti drugih poslušalcev (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                              |
| izvajalniki | **6 poslušalcev**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` so onemogočeni (`systemctl enable --now` znova omogoči enega)                                                                                                                                                                                                                                                                          |

Omejitve so določene v datoteki `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
vsake enote (prejšnje vrednosti so ohranjene kot `override.conf.bak-20261018`) in so bile uveljavljene
v živo z ukazom `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — brez
ponovnega zagona, zato to ni vplivalo na nobeno izvajajoče se opravilo. Oznake se prav tako v živo
spreminjajo prek API-ja izvajalnikov
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Namestitev čistilnika (enkratno, na strežniku)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): vsakih 30 min, beleženje v /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` je obvezen: čistilnik pred odstranitvijo z enim posnetkom odprtih
datotek preveri, da pot ni v uporabi; brez tega orodja ne odstrani ničesar in to
tudi sporoči (izhodna koda 1). Vsako spremembo najprej preizkusite z `--dry-run` — izpiše natanko, kaj bi
storil, ne da bi kar koli spremenil.

Kaj naredi ob vsakem zagonu: počisti naše lastne ostanke (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) po **3 urah na tmpfs** in po 24 urah na disku
v `_work/_temp`; konča proces `next-build`, starejši od 75 min (nobeno opravilo ne teče tako dolgo — dne
2026-08-27 je eno teklo 70 min po tem, ko je GitHub njegovo opravilo že razglasil za izgubljeno); odstrani 48 ur stare
delovne kopije izvajalnikov, katerih enota je **ustavljena**; opozori pri zasedenosti diska ≥ 85 %, pomnilniškem PSI
`full/avg60` ≥ 10 % in večjem številu poslušalcev od `MAX_ACTIVE_RUNNERS` (z
razčlenitvijo na omniroute/druge). Izhodna koda 1 pomeni, da je potrebno ukrepanje; preberite dnevnik.

Pravilo 75 minut ne zazna gradnje, nad katero je GitHub že obupal. Ko
`Runner.Listener` ne more podaljšati svojega opravila, je v `_diag/Runner_*.log` prikazano
`POST request to …/renewjob timed out after 100 seconds`, API pa približno deset minut po zadnjem uspešnem podaljšanju sporoči, da je opravilo `completed`
(neuspešno), medtem ko `next-build` še naprej teče brez
pripadajočega opravila (2026-10-18: opravilo Build za #17066 je bilo ob 19:43 označeno kot neuspešno, njegova gradnja pa je pet minut pozneje še vedno
zasedala 40 GB). Preverite referenco v najnovejši datoteki `_diag/Worker_*.log`, nato
po PID-u pošljite SIGTERM samo drevesu procesov gradnje — `next-build`, `npm run build`, `build-next-isolated.mjs` in
procesom iz `_work`. Nikoli ne posegajte v `Runner.Listener`, `RunnerService.js` ali `Runner.Worker`:
delovni proces sporoči, da je opravilo preklicano, poslušalec pa se sam znova poveže.

## Enote izvajalnikov: KillMode

Privzeta nastavitev izvajalnika `KillMode=process` pusti procese `Runner.Worker → npm → next-build`
žive, ko se enota ustavi ali znova zažene — osirotela gradnja še naprej porablja RAM in
CPE brez pripadajočega opravila. Vsaka enota OmniRoute vsebuje dopolnilno konfiguracijo
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
z nastavitvijo `KillMode=mixed`: najprej pošlje SIGTERM poslušalcu, ob
`TimeoutStop` pa SIGKILL celotni kontrolni skupini. Uveljavi se ob naslednjem vnovičnem zagonu enote — znova zaženite **po en izvajalnik
naenkrat in samo, ko ni dejaven**, pri čemer naj bosta preverjanje nedejavnosti in vnovični zagon v istem ukazu.

## Pravila delovanja

- **Hkrati se izvaja samo ena gradnja Turbopack — omejitev je uveljavljena z oznako.** Vsako opravilo, ki izvaja celotno gradnjo Turbopack
  `next build`, cilja na `[self-hosted, omni-build]`, to oznako pa ima samo **`omniroute-113-5`**:
  `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  nočna gradnja a11y (#16853) in **amd64** v `docker-publish.yml` (webpack znotraj BuildKit —
  Turbopack se je tam sesul, izvajanje 33253576569). Veja Docker za arm64 ostaja na `ubuntu-24.04-arm`.
  Veja amd64 v `docker-publish` si z opravilom `Build` v `ci.yml` deli sočasnostno skupino `heavy-build-main`
  (`cancel-in-progress: false`). Docker Engine mora biti na `omniroute-113-5`. Za drugo mesto Turbopack
  78 GB ne zadostuje (2 × 33–37 GB in še preostali procesi na strežniku); drugo mesto je varno samo za
  gradnje webpack.
- **Gradnje zahtev za združitev se izvajajo na gostovani infrastrukturi (2026-10-18).** `Build` v `ci.yml` doseže `omni-build` samo za
  `push` in `workflow_dispatch`; vsaka gradnja `pull_request` (iz lastnega izvora ali razcepa) in `merge_group`
  se izvaja na `ubuntu-latest` z webpack. Ko je bil vsak PR iz lastnega izvora usmerjen v to mesto, ga je gradnja Turbopack
  zasedala 29–58 min, 18 gradenj je v čakalni vrsti čakalo do 18 h, gradnja `push` same izdajne veje
  pa je mesto dobila enkrat v 40 opravilih. Na gostovani infrastrukturi ista gradnja PR traja 8–12 min vzporedno z drugimi
  opravili tega PR-ja. Turbopack, orodje za združevanje, ki ga dobavlja `npm-publish`, se na izdajni veji še naprej
  preverja z nočno gradnjo a11y privzete veje (04:41 UTC), z vsako gradnjo `push` ali `dispatch`, ki
  doseže to mesto, in s samim `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  utrjuje štiridelni pogoj.
- **Mesta Turbopack nikoli ne omejite pod njegovo izmerjeno potrebo.** Dne 2026-10-18 ob 18:06 je bilo mesto
  zmanjšano s 56G/60G na 40G/44G, da bi se sprostil prostor za `omni-release`. Faza prevajanja je bila celotno
  izvajanje na meji `MemoryHigh` (pomnilniški PSI `full` 30–43 %), `Runner.Listener`, ki
  si deli cgroup, pa ni mogel podaljšati veljavnosti svojega opravila. Lastnikova nastavitev 56G/60G z dne 2026-10-17 je bila obnovljena
  še isti dan. Pod to vrednostjo gradnja ne odpove; začne se preobremenjeno izmenjevanje strani, opravilo pa je izgubljeno.
- **Release-Green ima lastno mesto (2026-10-18).** Do takrat sta se obe preverjanji Release-Green izvajali
  na `omni-build`: ob vsakem `push` (~10/uro, 97 od 100 izvajanj `push` preklicanih sredi dela v enem dnevu)
  in trikrat dnevno pri celovitih pregledih, dolgih ~2 h (pregled ob 05:29 je na mesto čakal 6 h) — eno samo mesto za gradnjo
  je bilo večkratno prezasedeno, gradnje PR-jev iz lastnega izvora pa so čakale več ur.
  `release-green` in `main-green` zdaj ciljata na `omni-release` (samo `omniroute-113-6`) z
  `OMNIROUTE_USE_TURBOPACK=0`, novejši `push` pa že začetega izvajanja ne prekliče več (čakajoče
  mesto še vedno združuje naval). `tests/unit/build/runner-capacity-routing.test.ts`
  utrjuje usmerjanje, preklop na webpack in pravilo, da se na `omni-release` nič ne gradi s Turbopack.
- **Skupina za lahka opravila: `omni-light`.** `omniroute-113` in `omniroute-113-2` izvajata nočna opravila, ki potrebujejo
  samo zaledno gradnjo `next build` (~5–6 GB; webpack), ter `lint-guard` iz `quality.yml`. `omniroute-113`
  je imel do 2026-10-18 nastavitev `MemoryHigh=4G` — gradnja promptfoo si je tam 54 minut s sproščanjem pomnilnika
  utirala pot; 8 GB odpravi omejevanje.
- **Namerno manj poslušalcev.** Štiri enote OmniRoute so bile onemogočene 2026-08-29 — vsak dodatni
  poslušalec je še en porabnik zgoraj navedenega pomnilniškega proračuna. Zgornja meja čistilnega opravila je 6 (`MAX_ACTIVE_RUNNERS=6` v cron): šteje
  vsak `Runner.Listener` na strežniku, OmniHeuris in OmniMind pa našim štirim dodata še dva.
- **Nikoli ročno ne čistite `/tmp` ali `_work`, medtem ko je kateri koli izvajalnik zaseden.**
  Preverjanje in nato brisanje s premorom med korakoma je razlog, da je aktivno opravilo Build
  2026-08-27 izgubilo svoj `_work`. Čistilno opravilo izvede preverjanje in odstranitev v enem koraku;
  prepustite mu to.
- Ustavitev izvajalnika sredi opravila prekliče opravilo (opaženo v živo): `systemctl stop` uporabite samo,
  ko njegov poslušalec nima podrejenega procesa `Runner.Worker` — in to izvedite z enim ukazom.
- Delovni tokovi ne smejo odlagati artefaktov v `/tmp` (ta je v pomnilniku RAM). Prenesite jih v
  `$RUNNER_TEMP` (na disku, ločeno za vsak izvajalnik) — prenos 1,3 GB velikega artefakta `next-build` na tmpfs je trajal 27–32
  minut, nalaganje z diska pa 2 minuti.
- VPS `.15` je namenjen samo homologaciji — na njem se izvajalniki CI nikoli ne izvajajo.

## Gostovani kanal (izvajalniki, ki jih gosti GitHub)

Račun uporablja paket **Pro**: **40 sočasnih gostovanih opravil**, ki si jih delijo vsa preverjanja PR-jev,
vsi delovni tokovi, sproženi ob potisku, in privzeta nastavitev CodeQL. Meritve 2026-10-18 med
kampanjo združevanja (~10 združitev/uro v `release/v3.8.52`): **2.500 izvajanj delovnih tokov, ustvarjenih v
24 h**, 44 potiskov v vejo v 6 h, **106 gostovanih opravil v čakalni vrsti**, medtem ko so preverjanja PR-jev čakala
več ur, PR-ji pa so bili združeni brez njih. Ob vsakem potisku v vejo se je sprožilo devet delovnih tokov:

| ob vsakem potisku v `release/v*`            | gostovana opravila | rezultat med navalom                                             | od 2026-10-18                                                                          |
| ------------------------------------------- | -----------------: | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `ci.yml` (celotna matrika)                  |              do 30 | preklicano ob naslednjem potisku, 24 od 24 v enem dnevu          | se ne zažene ob potiskih v `release/**` (izvajanje za PR + Release-Green)              |
| `quality.yml`                               |                 ~6 | preklicano, 23 od 23                                             | se ne zažene ob potiskih v `release/**`                                                |
| `Release-Green` `--quick`                   |                  0 | izvajanje na `omni-build`, preklicanih 97 od 100                 | reža `omni-release`, nikoli preklicano, čakajoča izvajanja se združijo                 |
| `Lock released branch`, `OpenSSF Scorecard` |                  2 | eno izvajanje v čakalni vrsti na potisk                          | eno izvajanje na ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)              |
| `Release acceptance` (senčno poročilo)      |                  1 | en gostovani `npm ci` na potisk, nikoli preklican                | nespremenjeno — kandidat za filter `paths:`                                            |
| `Publish to Docker Hub` → `Deploy to VPS`   |                  2 | preklicano ob vsakem potisku; veja amd64 tekmuje na `omni-build` | nespremenjeno — lastnikov kanal za uvajanje                                            |
| Privzeta nastavitev CodeQL (`dynamic`)      |                  4 | `javascript-typescript`, `actions`, `c-cpp`, `python` na potisk  | nespremenjeno — Settings → Code security; `c-cpp`/`python` tukaj ne pregledata ničesar |

`tests/unit/build/push-storm-diet.test.ts` določa sprožilec `ci.yml` in
`quality.yml` ob potisku samo v `main`. Stranski učinek: Codecov ne prejme več osnovnega nalaganja ob vsakem potisku v izdajno vejo (ta
korak je informativen in uporablja `continue-on-error`); preverjanje pokritosti v repozitoriju in komentar v PR-ju ostaneta
nespremenjena.

**Več lastne izvajalne zmogljivosti ne odpravi čakalne vrste gostovanih izvajalnikov.** Razvojni strežnik
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) bi lahko gostil izvajalnik, vendar seje agentov že
vzdržujejo njegovo obremenitev pri 20–26, vsebnik agenta nima demona Docker, nasičen pa je
gostovani kanal. Strežnik `.113` je imel v istem trenutku 71 GB prostega prostora in obremenitev 5–8; njegova omejitev
je zgoraj navedeni pomnilniški proračun na poslušalnik (največ 6 poslušalnikov), ne CPE. Preostali vzvodi
so procesni: PR-je kampanje združujte prek čakalne vrste Mergify (`label=queue`, paketi si delijo
eno izvajanje CI za `merge_group` namesto enega izvajanja na PR in še enega na potisk), zmanjšajte nabor jezikov
privzete nastavitve CodeQL ter filtrirajte `release-acceptance.yml` glede na datoteke, ki jih bere.
