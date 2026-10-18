# Self-Hosted Runner Box Operations (.113 pool) (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Itse ylläpidetty pooli toimii **.113**-koneella (`tomni-proxmox-113`). Jokaisella
OmniRoute-runnerilla on 2026-10-18 alkaen **yksi rooli**, yksi tunniste sekä työkuorman
mitatun kulutuksen mukaan mitoitettu muisti- ja suoritinbudjetti. Turbopack-paikka saa koonnin
tarvitsemat resurssit; muut paikat on mitoitettu niiden mitattujen huippujen mukaan. Koneen
resurssit ylivarataan vain silloin, kun Turbopack-koonti osuu samaan aikaan Release-Green-
webpack-koonnin ja lint-työn kanssa. Isäntäkoneen sivutustila (16 GB) tasaa tämän, ja koska
pull requestien Build-työt suoritetaan isännöidyillä runnereilla, Turbopack-paikka on suurimman
osan ajasta käyttämättömänä:

| runner               | tunniste            | rooli                                                                                                                                            | `MemoryHigh` / `MemoryMax`   | `CPUQuota`        |
| -------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------- |
| `omniroute-113-5`    | `omni-build`        | Turbopack-koonnit: `ci.yml` `Build` (vain push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, öinen a11y-koonti | 56 GB / 60 GB (sivutus 0)    | 1600 %            |
| `omniroute-113-6`    | `omni-release`      | Release-Green (`release-green` + `main-green`), webpack-koonti                                                                                   | 20 GB / 24 GB (sivutus 4 GB) | 800 %             |
| `omniroute-113-2`    | `omni-light`        | öiset työt (Schemathesis, promptfoo, garak, k6, a11y-käynnistys) ja `quality.yml` `lint-guard`                                                   | 12 GB / 16 GB (sivutus 4 GB) | 600 %             |
| `omniroute-113`      | `omni-light`        | sama pooli kuin edellä                                                                                                                           | 8 GB / 12 GB                 | 400 %             |
| OmniHeuris, OmniMind | (omat repositoriot) | vain Dependabot (kummankin huippu 155 MB, 2026-10-18)                                                                                            | 4 GB / 6 GB                  | 200 % kummallakin |

Mitattu 2026-10-18:

| resurssi  | arvo                           | merkitys ajoitukselle                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 ydintä**          | Turbopack-tuotantokoonti saavutti ilman rajoitusta 49 GB:n huipun (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8:ssa pelkkä käännösvaihe käyttää noin 40 GB (36 GB RSS-prosessissa `next-build` sekä 17 loader-työntekijää, yhteensä 3 GB, mitattu 2026-10-18); webpack-koonti käyttää noin 14–16 GB. Yksi Turbopack- ja yksi webpack-koonti mahtuvat ajettaviksi yhtä aikaa; kaksi Turbopack-koontia eivät mahdu |
| sivutus   | 16 GB                          | `omniroute-113-5` toimii ilman sivutusta (`MemorySwapMax=0`), joten hallitsematon koonti katkaistaan rajan kohdalla sen sijaan, että koko kone alkaisi käyttää sivutusta                                                                                                                                                                                                                                                        |
| `/tmp`    | **12 GB tmpfs = RAM**          | kaikki sinne tallennettu kuluttaa muistia; jäännökset poistetaan 3 tunnin kuluttua                                                                                                                                                                                                                                                                                                                                              |
| CPU       | 32 ytimellä havaittu kuorma 60 | ennen kiintiöitä yksi Turbopack-koonti (noin 1166 % CPU) ja samalla koneella ajettu kattavuustestisarja veivät resurssit muiden kuuntelijoiden heartbeat-signaaleilta (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                     |
| runnerit  | **6 kuuntelijaa**              | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` on poistettu käytöstä (`systemctl enable --now` ottaa yhden uudelleen käyttöön)                                                                                                                                                                                                                                                                                 |

Rajat sijaitsevat kunkin yksikön tiedostossa `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(aiemmat arvot on säilytetty tiedostossa `override.conf.bak-20261018`), ja ne otettiin käyttöön ajonaikaisesti komennolla
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — uudelleenkäynnistystä ei tehty, joten
käynnissä oleviin töihin ei vaikutettu. Tunnisteita muutetaan runnerien API:n kautta
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), niin ikään ajonaikaisesti.

## Asenna siivooja (kerran palvelimelle)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): 30 minuutin välein, loki tiedostoon /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` vaaditaan: siivooja varmistaa polun olevan käyttämättömänä ottamalla yhden tilannekuvan avoimista
tiedostoista ennen sen poistamista. Ilman tätä työkalua se ei poista mitään ja ilmoittaa asiasta
(exit 1). Kokeile kaikkia muutoksia ensin valitsimella `--dry-run` — se tulostaa täsmälleen, mitä se tekisi,
mutta ei muuta mitään.

Mitä se tekee jokaisella suorituskerralla: siivoaa omat jäännöksemme (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`), kun ne ovat olleet **3 h tmpfs:ssä**, ja 24 h:n jälkeen levyllä olevasta
`_work/_temp`-hakemistosta; lopettaa yli 75 minuuttia vanhan `next-build`-prosessin (mikään työ ei kestä niin kauan —
2026-08-27 yksi jatkui 70 minuuttia sen jälkeen, kun GitHub oli ilmoittanut työn kadonneeksi); karsii 48 h vanhat
työhakemistot suoritusagenteilta, joiden yksikkö on **pysäytetty**; hälyttää, kun levytila on ≥ 85 %, muistin PSI-arvo
`full/avg60` on ≥ 10 % tai kuuntelijoita on enemmän kuin `MAX_ACTIVE_RUNNERS` (eriteltynä
omniroute- ja muihin kuuntelijoihin). Exit 1 = toimenpiteitä tarvitaan; lue loki.

75 minuutin sääntö ei havaitse koontia, jonka työstä GitHub on jo luopunut. Kun
`Runner.Listener` ei pysty uusimaan työtään, `_diag/Runner_*.log` näyttää viestin
`POST request to …/renewjob timed out after 100 seconds`, API ilmoittaa työn tilaksi `completed`
(epäonnistuminen) noin kymmenen minuuttia viimeisen onnistuneen uusinnan jälkeen, ja `next-build` jatkaa toimintaansa
ilman siihen liitettyä työtä (2026-10-18: työn #17066 koonti merkittiin epäonnistuneeksi klo 19.43, ja sen koonti
varasi edelleen 40 GB viisi minuuttia myöhemmin). Vahvista viittaus uusimmasta `_diag/Worker_*.log`-tiedostosta ja
lähetä sitten SIGTERM PID:n perusteella vain koontiprosessipuulle — `next-build`, `npm run build`, `build-next-isolated.mjs` ja
`_work`-työprosessit. Älä koskaan koske prosesseihin `Runner.Listener`, `RunnerService.js` tai `Runner.Worker`:
työprosessi ilmoittaa työn peruutetuksi, ja kuuntelija palaa itsestään verkkoon.

## Suoritusagenttien yksiköt: KillMode

Suoritusagentin oletusarvoinen `KillMode=process` jättää ketjun `Runner.Worker → npm → next-build`
käyntiin, kun yksikkö pysäytetään tai käynnistetään uudelleen — orvoksi jäänyt koonti kuluttaa edelleen RAM-muistia ja
suoritinaikaa ilman siihen liitettyä työtä. Jokaisella OmniRoute-yksiköllä on drop-in-määritys
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`),
jossa on `KillMode=mixed`: ensin SIGTERM kuuntelijalle ja sitten SIGKILL koko cgroup-ryhmälle
`TimeoutStop`-ajan kohdalla. Se tulee voimaan yksikön seuraavalla uudelleenkäynnistyksellä — käynnistä uudelleen **yksi suoritusagentti
kerrallaan ja vain sen ollessa käyttämättömänä** siten, että käyttämättömyyden tarkistus ja uudelleenkäynnistys ovat samassa komennossa.

## Käyttösäännöt

- **Vain yksi Turbopack-koonti kerrallaan — pakotetaan tunnisteella.** Jokainen täyden Turbopack-
  `next build` -komennon suorittava työ kohdistetaan tunnisteisiin `[self-hosted, omni-build]`, ja vain
  **`omniroute-113-5`** sisältää kyseisen tunnisteen: `ci.yml`-tiedoston `Build`, `npm-publish.yml`-tiedoston
  `publish`, `nightly-v4-build`, `preview-artifact`, öinen a11y-koonti (#16853) sekä
  `docker-publish.yml`-tiedoston **amd64** (webpack BuildKitin sisällä — Turbopack kaatui siellä,
  suoritus 33253576569). Dockerin arm64-haara pysyy ympäristössä `ubuntu-24.04-arm`.
  `docker-publish`-työn amd64 jakaa `heavy-build-main`-rinnakkaisuusryhmän `ci.yml`-tiedoston
  `Build`-työn kanssa (`cancel-in-progress: false`). Docker Enginen on oltava koneella
  `omniroute-113-5`. Toinen Turbopack-paikka ei mahdu 78 gigatavuun (2 × 33–37 Gt sekä koneen
  muut tarpeet); toinen paikka on turvallinen vain webpack-koonneille.
- **Pull request -koonnit suoritetaan ylläpidetyssä ympäristössä (2026-10-18).** `ci.yml`-tiedoston
  `Build` saavuttaa `omni-build`-ympäristön vain tapahtumilla `push` ja `workflow_dispatch`; jokainen
  `pull_request`-koonti (omasta alkuperästä tai forkista) ja `merge_group`-koonti suoritetaan
  ympäristössä `ubuntu-latest` webpackilla. Kun jokainen omasta alkuperästä tuleva PR ohjattiin
  paikkaan, Turbopack-koonti varasi sen 29–58 minuutiksi, 18 koontia jonotti jopa 18 tuntia ja
  julkaisuhaaran oma push-koonti sai paikan kerran 40 työstä. Ylläpidetyssä ympäristössä sama
  PR-koonti kestää 8–12 minuuttia PR:n muiden töiden rinnalla. Turbopackia, jonka sisältämän
  paketoijan `npm-publish` julkaisee, käytetään edelleen julkaisuhaarassa oletushaaran öisessä
  a11y-koonnissa (04:41 UTC), jokaisessa paikkaan pääsevässä push- tai dispatch-koonnissa sekä
  itse `npm-publish`-työssä. `tests/unit/build/heavy-build-queue.test.ts` lukitsee neliehtoisesta
  portista sovitun toiminnan.
- **Älä koskaan mitoita Turbopack-paikkaa sen mitattua tarvetta pienemmäksi.** Paikan rajoitukset
  laskettiin 2026-10-18 klo 18.06 arvoista 56G/60G arvoihin 40G/44G, jotta `omni-release`-ympäristölle
  saatiin tilaa. Käännösvaihe pysyi koko suorituksensa ajan `MemoryHigh`-rajalla (muistin PSI
  `full` 30–43 %), eikä saman cgroupin jakava `Runner.Listener` pystynyt uusimaan työtään.
  Omistajan 2026-10-17 käyttämät arvot 56G/60G palautettiin samana päivänä. Näitä arvoja
  pienemmillä rajoilla koonti ei epäonnistu vaan ajautuu jatkuvaan sivutukseen, ja työ menetetään.
- **Release-Greenillä on oma paikkansa (2026-10-18).** Siihen asti molemmat Release-Green-
  validoinnit suoritettiin `omni-build`-ympäristössä: jokaisella pushilla (~10/tunti, yhden päivän
  aikana 97 sadasta push-suorituksesta peruttiin kesken työn) sekä kolmessa noin kaksi tuntia
  kestävässä täydessä tarkistuksessa päivässä (klo 05.29 alkanut tarkistus odotti paikkaa kuusi
  tuntia) — ainoan koontipaikan kapasiteetti ylitettiin moninkertaisesti, ja omasta alkuperästä
  tulevat PR-koonnit odottivat tuntikausia. `release-green` ja `main-green` kohdistetaan nyt
  ympäristöön `omni-release` (vain `omniroute-113-6`) asetuksella `OMNIROUTE_USE_TURBOPACK=0`,
  eikä aloitettua suoritusta enää peruta uudemman pushin vuoksi (odottava paikka yhdistää silti
  suoritustulvan). `tests/unit/build/runner-capacity-routing.test.ts` lukitsee reitityksestä,
  webpackiin vaihtamisesta ja siitä sovitun toiminnan, ettei mikään `omni-release`-ympäristössä
  käytä koontiin Turbopackia.
- **Kevyt pooli: `omni-light`.** `omniroute-113` ja `omniroute-113-2` suorittavat öiset työt,
  jotka tarvitsevat vain taustajärjestelmän `next build` -koonnin (~5–6 Gt; webpack), sekä
  `quality.yml`-tiedoston `lint-guard`-työn. Koneella `omniroute-113` oli `MemoryHigh=4G`
  2026-10-18 asti — promptfoo-koonti käytti siellä 54 minuuttia muistinsa jatkuvaan
  takaisinottoon; 8 Gt poistaa kuristuksen.
- **Tarkoituksella vähemmän kuuntelijoita.** Neljä OmniRoute-yksikköä poistettiin käytöstä
  2026-08-29 — jokainen ylimääräinen kuuntelija on yksi lisävuokralainen edellä mainitulle
  muistibudjetille. Siivoojan enimmäismäärä on 6 (`MAX_ACTIVE_RUNNERS=6` cronissa): se laskee
  koneen jokaisen `Runner.Listener`-prosessin, ja OmniHeuris + OmniMind lisäävät kaksi meidän
  neljän prosessimme lisäksi.
- **Älä koskaan siivoa `/tmp`-hakemistoa tai `_work`-hakemistoa käsin minkään suorittajan ollessa
  varattuna.** Tarkistus ja sen jälkeen viiveellä tehty poisto aiheuttivat sen, että käynnissä
  ollut Build-työ menetti `_work`-hakemistonsa 2026-08-27. Siivooja tekee tarkistuksen ja poiston
  yhdessä vaiheessa; anna sen hoitaa tehtävä.
- Suorittajan pysäyttäminen kesken työn peruu työn (havaittu käytössä): käytä `systemctl stop`
  -komentoa vain, kun sen kuuntelijalla ei ole `Runner.Worker`-lapsiprosessia — ja tee se yhdellä
  komennolla.
- Työnkulut eivät saa säilyttää artefakteja `/tmp`-hakemistossa (se sijaitsee RAM-muistissa).
  Lataa ne hakemistoon `$RUNNER_TEMP` (levyllä, suorittajakohtainen) — 1,3 Gt:n `next-build`-artefaktin
  tallentuminen tmpfs-järjestelmään kesti 27–32 minuuttia ja sen lataaminen levyltä kaksi minuuttia.
- `.15`-VPS on tarkoitettu vain homologointiin — sillä ei koskaan suoriteta CI-suorittajia.

## Isännöity jono (GitHubin isännöimät runnerit)

Tili käyttää **Pro**-tilausta: **40 samanaikaista isännöityä työtä**, jotka jaetaan kaikkien PR-tarkistusten,
push-tapahtumien käynnistämien työnkulkujen ja CodeQL:n oletusmäärityksen kesken. Mittaus tehtiin 2026-10-18
yhdistämiskampanjan aikana (~10 yhdistämistä tunnissa haaraan `release/v3.8.52`): **2 500 työnkulkuajoa luotiin
24 tunnissa**, haaraan tehtiin 44 pushia 6 tunnissa ja **106 isännöityä työtä oli jonossa**, samalla kun PR-tarkistukset odottivat
tunteja ja PR:t yhdistettiin ilman niitä. Yhdeksän työnkulkua käynnistyi jokaisesta haaraan tehdystä pushista:

| jokaisella pushilla kohteeseen `release/v*` | isännöidyt työt | tulos ruuhkan aikana                                                | 2026-10-18 lähtien                                                                  |
| ------------------------------------------- | --------------: | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `ci.yml` (täysi matriisi)                   |     enintään 30 | seuraava push peruutti, 24/24 yhden päivän aikana                   | ei käynnistetä `release/**`-pusheista (PR-ajo + Release-Green)                      |
| `quality.yml`                               |              ~6 | peruutettiin, 23/23                                                 | ei käynnistetä `release/**`-pusheista                                               |
| `Release-Green` `--quick`                   |               0 | suoritettiin `omni-build`issa, 97/100 peruutettiin                  | `omni-release`-paikka, ei koskaan peruuteta, odottavat ajot yhdistyvät              |
| `Lock released branch`, `OpenSSF Scorecard` |               2 | yksi jonotettu ajo pushia kohden                                    | yksi ajo viitettä kohden (`tests/unit/build/hosted-lane-concurrency.test.ts`)       |
| `Release acceptance` (varjoraportti)        |               1 | yksi isännöity `npm ci` pushia kohden, ei koskaan peruuteta         | ennallaan — sopiva kohde `paths:`-suodattimelle                                     |
| `Publish to Docker Hub` → `Deploy to VPS`   |               2 | peruutetaan pushia kohden; amd64-haara kilpailee `omni-build`issa   | ennallaan — omistajan julkaisukanava                                                |
| CodeQL:n oletusmääritys (`dynamic`)         |               4 | `javascript-typescript`, `actions`, `c-cpp`, `python` pushia kohden | ennallaan — Settings → Code security; `c-cpp`/`python` eivät tarkista täällä mitään |

`tests/unit/build/push-storm-diet.test.ts` lukitsee `ci.yml`- ja `quality.yml`-tiedostojen
vain `main`-haaraa koskevan push-käynnistimen. Sivuvaikutus: Codecov ei enää vastaanota peruslatausta jokaisesta julkaisuhaaran pushista (vaihe
on vain tiedoksi ja käyttää `continue-on-error`-asetusta); repositorion sisäinen kattavuusportti ja PR-kommentti eivät
muutu.

**Itse isännöidyn kapasiteetin lisääminen ei korjaa isännöityä jonoa.** Kehityskone
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) voisi isännöidä runneria, mutta agentti-istunnot pitävät jo
sen kuormituksen tasolla 20–26, agenttisäilössä ei ole Docker-daemonia ja ruuhkautunut jono on
isännöity jono. `.113`-koneella oli samalla hetkellä 71 GB vapaata tilaa ja kuormitus 5–8; sen rajoitteena
on edellä mainittu kuuntelijakohtainen muistibudjetti (enintään 6 kuuntelijaa), ei CPU. Jäljellä olevat
keinot liittyvät prosessiin: yhdistä kampanjan PR:t Mergify-jonon kautta (`label=queue`, jolloin erät jakavat
yhden `merge_group`-CI-ajon sen sijaan, että jokaiselle PR:lle ja jokaiselle pushille suoritettaisiin oma ajo), karsi CodeQL:n
oletusmäärityksen kielet ja suodata `release-acceptance.yml` sen lukemien tiedostojen perusteella.
