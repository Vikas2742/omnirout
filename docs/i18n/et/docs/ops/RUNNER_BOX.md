# Self-Hosted Runner Box Operations (.113 pool) (Eesti)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Isehostitud kogum töötab **.113** serveris (`tomni-proxmox-113`). Alates 2026-10-18 on igal
OmniRoute'i käitajal **üks roll**, üks silt ning mälu- ja CPU-eelarve, mis vastab selle töökoormuse
mõõdetud vajadustele. Turbopacki pesa saab koostamiseks vajaliku ressursi; teiste pesade suurus vastab
nende mõõdetud tippudele. Server kasutab ülemäärast ressursijaotust ainult siis, kui Turbopacki koostamine langeb kokku Release-Greeni
webpacki koostamise ja lintimistööga; hosti saalemälu (16 GB) katab selle ning kuna tõmbetaotluste `Build`-tööd töötavad
majutatud käitajates, on Turbopacki pesa enamiku ajast jõude:

| käitaja              | silt            | roll                                                                                                                                                       | `MemoryHigh` / `MemoryMax`     | `CPUQuota`     |
| -------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | -------------- |
| `omniroute-113-5`    | `omni-build`    | Turbopacki koostamised: `ci.yml` `Build` (ainult push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, öine a11y-koostamine | 56 GB / 60 GB (saalemälu 0)    | 1600 %         |
| `omniroute-113-6`    | `omni-release`  | Release-Green (`release-green` + `main-green`), koostamine webpackiga                                                                                      | 20 GB / 24 GB (saalemälu 4 GB) | 800 %          |
| `omniroute-113-2`    | `omni-light`    | öised tööd (Schemathesis, promptfoo, garak, k6, a11y käivitus) ja `quality.yml` `lint-guard`                                                               | 12 GB / 16 GB (saalemälu 4 GB) | 600 %          |
| `omniroute-113`      | `omni-light`    | sama kogum nagu eespool                                                                                                                                    | 8 GB / 12 GB                   | 400 %          |
| OmniHeuris, OmniMind | (nende hoidlad) | ainult Dependabot (kummagi tipp 155 MB, 2026-10-18)                                                                                                        | 4 GB / 6 GB                    | kummalgi 200 % |

Mõõdetud 2026-10-18:

| ressurss  | väärtus                         | tähendus ajastamise jaoks                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 tuuma**            | Turbopacki tootmiskoostamise tipp oli piiranguta 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8 puhul kasutab ainuüksi kompileerimisetapp ~40 GB (36 GB RSS protsessis `next-build` ning 17 laaduri tööprotsessi, igaüks 3 GB; mõõdetud 2026-10-18); webpacki koostamine kasutab ~14–16 GB. Üks Turbopacki ja üks webpacki koostamine mahuvad korraga; kaks Turbopacki koostamist ei mahu |
| saalemälu | 16 GB                           | `omniroute-113-5` töötab ilma saalemäluta (`MemorySwapMax=0`), et kontrolli alt väljuv koostamine katkestataks piirväärtuse juures, selle asemel et server saalema hakkaks                                                                                                                                                                                                                                    |
| `/tmp`    | **12 GB tmpfs = RAM**           | kõik sinna paigutatu kasutab mälu; jäägid eemaldatakse 3 h pärast                                                                                                                                                                                                                                                                                                                                             |
| CPU       | 32 tuumal täheldati koormust 60 | enne kvootide rakendamist jättis üks Turbopacki koostamine (~1166 % CPU) koos samas serveris töötava katvustestide komplektiga teised kuulajad elusignaalideta (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                          |
| käitajad  | **6 kuulajat**                  | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` on keelatud (`systemctl enable --now` toob ühe neist tagasi)                                                                                                                                                                                                                                                                                  |

Piirangud asuvad iga teenuseüksuse failis `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(varasemad väärtused on säilitatud failina `override.conf.bak-20261018`) ja need rakendati käigult käsuga
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — taaskäivitust ei tehtud, seega ei
mõjutatud ühtegi käimasolevat tööd. Silte muudetakse käitajate API kaudu
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), samuti käigult.

## Paigalda puhastaja (ühekordselt serverisse)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): iga 30 minuti järel, logi faili /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` on vajalik: puhastaja tõendab enne tee eemaldamist ühe avatud failide
hetktõmmise põhjal, et see pole kasutuses; ilma selle tööriistata ei eemalda see
midagi ja annab sellest teada (exit 1). Proovi kõiki muudatusi esmalt võtmega
`--dry-run` — see väljastab täpselt, mida teeks, ega muuda midagi.

Mida see igal käivitusel teeb: koristab meie enda jäägid (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) pärast **3 tundi tmpfs-is** ja 24 tundi kettal
asuvas `_work/_temp`-is; lõpetab üle 75 minuti vana `next-build`-i (ükski töö ei
kesta nii kaua — 2026-08-27 töötas üks neist 70 minutit pärast seda, kui GitHub oli
selle töö kadunuks tunnistanud); eemaldab nende runner'ite 48 tunni vanused
töökoopiad, mille üksus on **peatatud**; annab hoiatuse, kui kettakasutus on ≥ 85 %,
mälu PSI `full/avg60` on ≥ 10 % või kuulajaid on rohkem kui
`MAX_ACTIVE_RUNNERS` (koos jaotusega omniroute/muu). Exit 1 = vajab tähelepanu;
loe logi.

75 minuti reegel ei tuvasta build'i, mille tööst GitHub on juba loobunud. Kui
`Runner.Listener` ei saa oma tööd uuendada, kuvatakse `_diag/Runner_*.log`-is
`POST request to …/renewjob timed out after 100 seconds`, API märgib töö umbes
kümme minutit pärast viimast edukat uuendamist olekusse `completed`
(ebaõnnestunud) ning `next-build` jätkab töötamist ilma seotud tööta
(2026-10-18: #17066 build märgiti kell 19:43 ebaõnnestunuks ja selle build hoidis
viis minutit hiljem endiselt enda all 40 GB). Kontrolli ref-i uusimas
`_diag/Worker_*.log`-is, seejärel saada PID-i järgi SIGTERM ainult build'i
protsessipuule — `next-build`, `npm run build`, `build-next-isolated.mjs` ja
`_work`-i tööprotsessid. Ära kunagi puutu protsesse `Runner.Listener`,
`RunnerService.js` ega `Runner.Worker`: tööprotsess märgib töö tühistatuks ja
kuulaja läheb ise uuesti võrku.

## Runner'i üksused: KillMode

Runner'i vaikimisi `KillMode=process` jätab üksuse peatamisel või taaskäivitamisel
ahela `Runner.Worker → npm → next-build` tööle — orvuks jäänud build kulutab
endiselt RAM-i ja CPU-d, ilma et sellega oleks seotud ühtegi tööd. Igal OmniRoute'i
üksusel on lisakonfiguratsioon
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
sättega `KillMode=mixed`: kõigepealt SIGTERM kuulajale, seejärel `TimeoutStop`-i
saabudes SIGKILL kogu cgroup'ile. See jõustub üksuse järgmisel taaskäivitamisel —
taaskäivita **üks runner korraga ja ainult siis, kui see pole kasutuses**, tehes
jõudeoleku kontrolli ja taaskäivituse sama käsuga.

## Käitusreeglid

- **Korraga üks Turbopacki järg — jõustatud sildiga.** Iga töö, mis käitab täielikku Turbopacki
  `next build` protsessi, sihib `[self-hosted, omni-build]`, ning seda silti kannab ainult
  **`omniroute-113-5`**: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, igaöine a11y järk (#16853) ja `docker-publish.yml` **amd64** (webpack
  BuildKiti sees — Turbopack jooksis seal paanikaga kokku, käitus 33253576569). Docker arm64 etapp
  jääb platvormile `ubuntu-24.04-arm`. `docker-publish` amd64 jagab `ci.yml` tööga `Build`
  sama `heavy-build-main` paralleelsusrühma (`cancel-in-progress: false`). Docker Engine peab
  asuma masinas `omniroute-113-5`. Teine Turbopacki pesa ei mahu 78 GB sisse (2 × 33–37 GB
  pluss ülejäänud masin); teine pesa on ohutu ainult webpacki järkude jaoks.
- **Tõmbetaotluste järgud töötavad majutatud käitajatel (2026-10-18).** `ci.yml` töö `Build`
  jõuab sildini `omni-build` ainult sündmuste `push` ja `workflow_dispatch` korral; iga
  `pull_request` (oma hoidlast või hargist) ja `merge_group` järk `Build` töötab platvormil
  `ubuntu-latest` koos webpackiga. Kui iga oma hoidla PR suunati sellesse pessa, hoidis üks
  Turbopacki järk seda enda käes 29–58 minutit, 18 järku ootasid järjekorras kuni 18 tundi ning
  väljalaskeharu enda push-järk sai pesa 40 tööst vaid ühel korral. Majutatud käitajal võtab sama
  PR-i järk 8–12 minutit ja töötab PR-i teiste tööde kõrval. Turbopacki, millega komplekteeritakse
  `npm-publish`, kasutatakse väljalaskeharus endiselt vaikeharu igaöise a11y järgu kaudu
  (04:41 UTC), iga pessa jõudva push- või dispatch-järgu kaudu ning `npm-publish` enda kaudu.
  `tests/unit/build/heavy-build-queue.test.ts` fikseerib nelja tingimusega lüüsi.
- **Ärge määrake Turbopacki pesa kunagi väiksemaks kui selle mõõdetud vajadus.** 2026-10-18 kell
  18:06 vähendati pesa 56G/60G pealt 40G/44G peale, et teha ruumi üksusele `omni-release`.
  Kompileerimisetapp püsis kogu käituse vältel piiril `MemoryHigh` (mälu PSI `full` 30–43 %) ning
  sama cgroup'i jagav `Runner.Listener` ei saanud oma tööd pikendada. Omaniku 2026-10-17 seadistus
  56G/60G taastati samal päeval. Sellest väärtusest allpool järk ei nurju; see takerdub pidevasse
  ressursivõitlusse ja töö läheb kaotsi.
- **Release-Greenil on oma pesa (2026-10-18).** Seni töötasid mõlemad Release-Greeni valideerimised
  sildiga `omni-build`: igal push-sündmusel (~10 tunnis, ühe päeva jooksul tühistati töö käigus
  97 push-käitust 100-st) ja kolmel ~2-tunnisel täielikul kontrollkäitusel päevas (kell 05:29
  alanud kontroll ootas pesa 6 tundi) — üksainus järgupesa oli mitu korda üle koormatud ning oma
  hoidla PR-järgud ootasid tunde. `release-green` ja `main-green` sihivad nüüd silti
  `omni-release` (ainult `omniroute-113-6`) koos seadistusega `OMNIROUTE_USE_TURBOPACK=0` ning
  uuem push ei tühista enam juba alustatud käitust (ootel pesa koondab endiselt sündmuste tulva).
  `tests/unit/build/runner-capacity-routing.test.ts` fikseerib marsruutimise, webpackile lülitumise
  ja nõude, et miski sildiga `omni-release` ei kasutaks järkudeks Turbopacki.
- **Kergekaaluline kogum: `omni-light`.** `omniroute-113` ja `omniroute-113-2` käitavad igaöiseid
  töid, mis vajavad ainult taustsüsteemi `next build` protsessi (~5–6 GB; webpack), ning
  `quality.yml` tööd `lint-guard`. Masinal `omniroute-113` oli kuni 2026-10-18
  `MemoryHigh=4G` — promptfoo järk võitles seal mälu tagasinõudmisega 54 minutit; 8 GB kõrvaldab
  piiramise.
- **Teadlikult vähem kuulajaid.** 2026-08-29 keelati neli OmniRoute'i üksust — iga lisakuulaja
  on eespool kirjeldatud mälueelarve jaoks veel üks rentnik. Koristaja ülempiir on 6
  (`MAX_ACTIVE_RUNNERS=6` cronis): see loendab masinas kõiki `Runner.Listener` protsesse ning
  OmniHeuris + OmniMind lisavad meie neljale veel kaks.
- **Ärge puhastage `/tmp` ega `_work` katalooge käsitsi, kui mõni käitaja on hõivatud.**
  Kontrollimise ja kustutamise eraldi sammudena tegemise tõttu kaotas aktiivne `Build` töö
  2026-08-27 oma `_work` kataloogi. Koristaja teeb kontrolli ja eemaldamise ühe sammuna;
  laske tal seda teha.
- Käitaja peatamine töö ajal tühistab töö (reaalselt täheldatud): kasutage `systemctl stop` ainult
  siis, kui selle kuulajal pole alamprotsessi `Runner.Worker` — ja tehke seda ühe käsuga.
- Töövood ei tohi talletada artefakte kataloogis `/tmp` (see asub RAM-is). Laadige need alla
  kataloogi `$RUNNER_TEMP` (kettal, iga käitaja jaoks eraldi) — 1,3 GB `next-build` artefakti
  paigutamine tmpfs-i võttis 27–32 minutit, kuid kettalt üleslaadimine 2 minutit.
- VPS `.15` on mõeldud ainult homologeerimiseks — selles ei käitata kunagi CI-käitajaid.

## Majutatud rada (GitHubi majutatud käitajad)

Konto kasutab paketti **Pro**: **40 samaaegset majutatud tööd**, mida jagavad kõik PR-i kontrollid,
kõik tõukekäivitusega töövood ja CodeQL-i vaikeseadistus. Mõõdetud 2026-10-18
ühendamiskampaania ajal (~10 ühendamist tunnis harus `release/v3.8.52`): **24 tunni jooksul
loodi 2500 töövoo käivitust**, 6 tunni jooksul tehti harusse 44 tõuget ning **106 majutatud tööd olid järjekorras**, samal ajal kui PR-i kontrollid ootasid
tunde ja PR-id ühendati ilma nendeta. Iga harusse tehtud tõuke korral käivitus üheksa töövoogu:

| iga tõuge harusse `release/v*`              | majutatud töid | tulemus koormustormi ajal                                                    | alates 2026-10-18                                                             |
| ------------------------------------------- | -------------: | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `ci.yml` (täielik maatriks)                 |        kuni 30 | järgmine tõuge tühistas; ühe päeva jooksul 24-st 24                          | ei käivitata `release/**` tõugete korral (PR-i käivitus + Release-Green)      |
| `quality.yml`                               |             ~6 | tühistati, 23-st 23                                                          | ei käivitata `release/**` tõugete korral                                      |
| `Release-Green` `--quick`                   |              0 | käitati ressursil `omni-build`, tühistati 100-st 97                          | `omni-release` pesa, ei tühistata kunagi, ootel käivitus koondatakse          |
| `Lock released branch`, `OpenSSF Scorecard` |              2 | üks järjekorras olev käivitus tõuke kohta                                    | üks käivitus viite kohta (`tests/unit/build/hosted-lane-concurrency.test.ts`) |
| `Release acceptance` (variraport)           |              1 | üks majutatud `npm ci` iga tõuke kohta, ei tühistata kunagi                  | muutmata — sobib `paths:` filtriga piiramiseks                                |
| `Publish to Docker Hub` → `Deploy to VPS`   |              2 | tühistatakse iga tõuke korral; amd64 haru konkureerib ressursil `omni-build` | muutmata — omaniku juurutuskanal                                              |
| CodeQL-i vaikeseadistus (`dynamic`)         |              4 | `javascript-typescript`, `actions`, `c-cpp`, `python` iga tõuke kohta        | muutmata — Settings → Code security; `c-cpp`/`python` ei skanni siin midagi   |

`tests/unit/build/push-storm-diet.test.ts` fikseerib failide `ci.yml` ja
`quality.yml` ainult `main`-haru tõukel käivitumise. Kõrvalmõju: Codecov ei saa enam iga väljalaskeharu tõuke kohta
baasüleslaadimist (samm on informatiivne ja kasutab `continue-on-error`); hoidlasisene katvuse kontroll ja PR-i kommentaar
ei muutu.

**Suurem isemajutatud võimsus ei lahenda majutatud tööde järjekorda.** Arendusmasin
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) võiks käitajat majutada, kuid agendisessioonid hoiavad
selle koormuse juba tasemel 20–26, agendikonteineril puudub Dockeri deemon ning ülekoormatud on
majutatud rada. Masinal `.113` oli samal hetkel 71 GB vaba ruumi ja koormus 5–8; selle piirang
on ülaltoodud kuulajapõhine mälueelarve (ülempiir 6 kuulajat), mitte CPU. Ülejäänud hoovad
on protsessipõhised: ühendage kampaania PR-id Mergify järjekorra kaudu (`label=queue`, partiid jagavad
ühte `merge_group` CI-käivitust, selle asemel et käivitada üks kord iga PR-i ja lisaks iga tõuke kohta), vähendage CodeQL-i
vaikeseadistuse keelte hulka ning filtreerige `release-acceptance.yml` vastavalt failidele, mida see loeb.
