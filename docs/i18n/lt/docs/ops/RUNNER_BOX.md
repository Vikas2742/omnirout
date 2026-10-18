# Self-Hosted Runner Box Operations (.113 pool) (Lietuvių)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Savarankiškai administruojamas telkinys veikia **.113** serveryje (`tomni-proxmox-113`). Nuo 2026-10-18 kiekvienas
OmniRoute vykdytojas turi **vieną paskirtį**, vieną žymą ir atminties / CPU biudžetą, pritaikytą pagal
išmatuotus jo darbo krūvio poreikius. Turbopack vietai skiriama tiek išteklių, kiek reikia komponavimui;
kitoms vietoms jie paskirstomi pagal išmatuotas didžiausias apkrovas. Serverio ištekliai perteklinai
paskirstomi tik tada, kai Turbopack komponavimas sutampa su Release-Green webpack komponavimu ir
lint užduotimi; tai amortizuoja pagrindinio kompiuterio swap sritis (16 GB), o kadangi ištraukimo
užklausų komponavimai vykdomi talpinamuose vykdytojuose, Turbopack vieta didžiąją laiko dalį neveikli:

| vykdytojas           | žyma           | paskirtis                                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota` |
| -------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ---------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack komponavimai: `ci.yml` `Build` (tik push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, naktinis a11y komponavimas | 56 GB / 60 GB (swap 0)     | 1600 %     |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack komponavimas                                                                                          | 20 GB / 24 GB (swap 4 GB)  | 800 %      |
| `omniroute-113-2`    | `omni-light`   | naktinės užduotys (Schemathesis, promptfoo, garak, k6, a11y paleidimas) ir `quality.yml` `lint-guard`                                                         | 12 GB / 16 GB (swap 4 GB)  | 600 %      |
| `omniroute-113`      | `omni-light`   | tas pats telkinys kaip pirmiau                                                                                                                                | 8 GB / 12 GB               | 400 %      |
| OmniHeuris, OmniMind | (jų saugyklos) | tik Dependabot (didžiausia apkrova – po 155 MB, 2026-10-18)                                                                                                   | 4 GB / 6 GB                | po 200 %   |

Išmatuota 2026-10-18:

| išteklius  | reikšmė                             | reikšmė planavimui                                                                                                                                                                                                                                                                                                                                                                              |
| ---------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 branduoliai**          | neapribotas Turbopack produkcinis komponavimas pasiekė 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`); naudojant Next 16.3.8 vien kompiliavimo etapas užima ~40 GB (36 GB RSS procese `next-build` ir 17 įkėliklio procesų po 3 GB, išmatuota 2026-10-18); webpack komponavimas – ~14–16 GB. Vienas Turbopack ir vienas webpack komponavimas telpa kartu; du Turbopack komponavimai – ne |
| swap       | 16 GB                               | `omniroute-113-5` veikia su išjungta swap sritimi (`MemorySwapMax=0`), todėl nevaldomai išaugęs komponavimo procesas nutraukiamas pasiekus jam nustatytą ribą, užuot privertus serverį naudoti swap sritį                                                                                                                                                                                       |
| `/tmp`     | **12 GB tmpfs = RAM**               | viskas, kas ten laikoma, naudoja atmintį; likučiai pašalinami po 3 val.                                                                                                                                                                                                                                                                                                                         |
| CPU        | 32 branduoliams fiksuota 60 apkrova | prieš nustatant kvotas vienas Turbopack komponavimas (~1166 % CPU) kartu su tame pačiame serveryje vykdomu aprėpties testų rinkiniu atėmė iš kitų klausytojų išteklius, reikalingus širdies ritmo signalams (`The self-hosted runner lost communication`, #16853)                                                                                                                               |
| vykdytojai | **6 klausytojai**                   | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` yra išjungti (`systemctl enable --now` vėl įjungia vieną iš jų)                                                                                                                                                                                                                                                                 |

Apribojimai yra kiekvieno vieneto faile `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
(ankstesnės reikšmės išsaugotos kaip `override.conf.bak-20261018`) ir buvo pritaikyti veikiančiai sistemai
naudojant `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — nepaleidžiant
iš naujo, todėl nė viena vykdoma užduotis nebuvo paveikta. Žymos taip pat realiuoju laiku keičiamos per
vykdytojų API (`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## Įdiekite prižiūrėtoją (vieną kartą, serveryje)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): kas 30 min., žurnalą rašyti į /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` yra būtinas: prieš pašalindamas kelią prižiūrėtojas viena atidarytų failų
momentine kopija patvirtina, kad jis nenaudojamas, o be šio įrankio nieko nepašalina
ir apie tai praneša (exit 1). Visus pakeitimus pirmiausia išbandykite su `--dry-run`
— ši parinktis tiksliai parodo, kas būtų atlikta, ir nieko nekeičia.

Kas atliekama kiekvieno paleidimo metu: pašalinami mūsų palikti failai (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`), senesni nei **3 val. tmpfs**
ir 24 val. disko kataloge `_work/_temp`; nutraukiamas senesnis nei 75 min.
`next-build` procesas (jokia užduotis netrunka taip ilgai — 2026-08-27 vienas procesas
veikė 70 min. po to, kai GitHub jo užduotį paskelbė prarasta); pašalinamos prieš 48 val.
sukurtos vykdyklių, kurių tarnyba yra **sustabdyta**, darbinės kopijos; įspėjama, kai
disko užpildymas ≥ 85 %, atminties PSI `full/avg60` ≥ 10 % arba klausytojų yra daugiau
nei `MAX_ACTIVE_RUNNERS` (atskirai nurodant omniroute ir kitus). Išėjimo kodas 1 =
reikia dėmesio; perskaitykite žurnalą.

75 minučių taisyklė neaptinka komponavimo proceso, kurio užduoties GitHub jau atsisakė. Kai
`Runner.Listener` negali pratęsti savo užduoties, `_diag/Runner_*.log` rodoma
`POST request to …/renewjob timed out after 100 seconds`, API nurodo, kad užduotis yra `completed`
(nesėkminga), praėjus maždaug dešimčiai minučių po paskutinio sėkmingo pratęsimo, o `next-build`
toliau veikia be susietos užduoties (2026-10-18: #17066 Build buvo pažymėtas kaip nesėkmingas
19:43, o jo komponavimo procesas po penkių minučių vis dar naudojo 40 GB). Patvirtinkite ref
naujausiame `_diag/Worker_*.log`, tada pagal PID išsiųskite SIGTERM tik komponavimo procesų medžiui
— `next-build`, `npm run build`, `build-next-isolated.mjs` ir `_work` darbininkams. Niekada
nelieskite `Runner.Listener`, `RunnerService.js` ar `Runner.Worker`: darbininkas praneša, kad
užduotis atšaukta, o klausytojas pats vėl prisijungia.

## Vykdyklių tarnybos: KillMode

Numatytoji vykdyklės parinktis `KillMode=process` palieka
`Runner.Worker → npm → next-build` veikti, kai tarnyba sustabdoma arba paleidžiama
iš naujo — našlaitis komponavimo procesas toliau eikvoja RAM ir CPU, nors su juo
nesusieta jokia užduotis. Kiekviena OmniRoute tarnyba turi papildomą konfigūraciją
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
su `KillMode=mixed`: pirmiausia klausytojui siunčiamas SIGTERM, o pasiekus
`TimeoutStop` visai cgroup siunčiamas SIGKILL. Ji įsigalioja kitą kartą paleidus
tarnybą iš naujo — iš naujo paleiskite **po vieną vykdyklę, tik kai ji neveikli**,
neveiklumo patikrą ir paleidimą iš naujo atlikdami ta pačia komanda.

## Naudojimo taisyklės

- **Vienu metu vykdomas tik vienas Turbopack komponavimas — tai užtikrinama žyma.** Kiekviena užduotis, vykdanti visą Turbopack
  `next build`, taikoma į `[self-hosted, omni-build]`, o šią žymą turi tik **`omniroute-113-5`**:
  `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  naktinis a11y komponavimas (#16853) ir `docker-publish.yml` **amd64** (webpack BuildKit viduje —
  ten Turbopack užstrigo, vykdymas 33253576569). arm64 Docker etapas lieka `ubuntu-24.04-arm`.
  `docker-publish` amd64 dalijasi `heavy-build-main` lygiagretumo grupe su `ci.yml` `Build`
  (`cancel-in-progress: false`). Docker Engine turi veikti `omniroute-113-5`. Antroji Turbopack
  vieta netelpa į 78 GB (2 × 33–37 GB ir likusi sistemos dalis); antroji vieta saugi tik
  webpack komponavimams.
- **Pull request komponavimai vykdomi valdomoje infrastruktūroje (2026-10-18).** `ci.yml` `Build` pasiekia `omni-build` tik per
  `push` ir `workflow_dispatch`; kiekvieno `pull_request` (iš savos ar atšakotos saugyklos) ir `merge_group` komponavimas
  vykdomas `ubuntu-latest` aplinkoje su webpack. Kai kiekvienas savos saugyklos PR buvo nukreipiamas į šią vietą, Turbopack
  komponavimas ją užimdavo 29–58 min., 18 komponavimų eilėje laukė iki 18 val., o pačios leidimo šakos `push` komponavimas
  vietą gavo tik vieną kartą per 40 užduočių. Valdomoje infrastruktūroje tas pats PR komponavimas trunka 8–12 min. ir vykdomas kartu su kitomis PR
  užduotimis. Turbopack — susiejimo įrankis, kurį platina `npm-publish`, — leidimo šakoje ir toliau tikrinamas
  numatytosios šakos naktiniu a11y komponavimu (04:41 UTC), kiekvienu vietą
  pasiekiančiu `push` ar `workflow_dispatch` komponavimu ir pačiu `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  įtvirtina keturių sąlygų vartus.
- **Niekada neskirkite Turbopack vietai mažiau išteklių, nei rodo išmatuotas poreikis.** 2026-10-18 18:06 vietos ribos buvo
  sumažintos nuo 56G/60G iki 40G/44G, kad atsirastų vietos `omni-release`. Kompiliavimo etapas visą
  vykdymo laiką laikėsi ties `MemoryHigh` riba (atminties PSI `full` 30–43 %), o `Runner.Listener`, kuris
  dalijasi cgroup, negalėjo pratęsti savo užduoties. Tą pačią dieną buvo grąžintos 2026-10-17 savininko nustatytos 56G/60G
  ribos. Nustačius mažesnę vertę komponavimas nenutrūksta — jis ima strigti, o užduotis prarandama.
- **Release-Green turi atskirą vietą (2026-10-18).** Iki tol abi Release-Green patikros buvo vykdomos
  `omni-build`: po kiekvieno `push` (~10 per valandą; per vieną dieną 97 iš 100 `push` vykdymų buvo atšaukti darbo viduryje)
  ir tris kartus per dieną atliekant ~2 val. trukmės išsamias patikras (05:29 patikra vietos laukė 6 val.) — vienintelė komponavimo
  vieta buvo kelis kartus per daug apkrauta, o savos saugyklos PR komponavimai laukė valandų valandas.
  Dabar `release-green` ir `main-green` taikomi į `omni-release` (tik `omniroute-113-6`) su
  `OMNIROUTE_USE_TURBOPACK=0`, o pradėtas vykdymas nebeatšaukiamas dėl naujesnio `push` (laukianti
  vieta vis dar sutraukia užduočių antplūdį). `tests/unit/build/runner-capacity-routing.test.ts`
  įtvirtina maršruto parinkimą, webpack perjungimą ir tai, kad niekas `omni-release` aplinkoje nekomponuojama naudojant Turbopack.
- **Lengvųjų užduočių telkinys: `omni-light`.** `omniroute-113` ir `omniroute-113-2` vykdo naktines užduotis, kurioms reikia
  tik serverio dalies `next build` (~5–6 GB; webpack), ir `quality.yml` `lint-guard`. `omniroute-113`
  iki 2026-10-18 turėjo `MemoryHigh=4G` — promptfoo komponavimas ten 54 minutes bandė atlaisvinti atmintį;
  8 GB pašalina ribojimą.
- **Mažiau stebėtojų — sąmoningai.** Keturi OmniRoute vienetai buvo išjungti 2026-08-29 — kiekvienas papildomas
  stebėtojas yra dar vienas pirmiau nurodyto atminties biudžeto naudotojas. Tvarkytojo riba yra 6 (`MAX_ACTIVE_RUNNERS=6` cron užduotyje): jis skaičiuoja
  kiekvieną serveryje veikiantį `Runner.Listener`, o OmniHeuris ir OmniMind prie mūsų keturių prideda dar du.
- **Niekada nevalykite `/tmp` ar `_work` rankiniu būdu, kol bent vienas vykdyklės procesas užimtas.**
  Patikrinimas ir vėlesnis šalinimas su pauze tarp šių veiksmų lėmė, kad 2026-08-27 aktyvi `Build` užduotis prarado savo
  `_work`. Tvarkytojas patikrina ir pašalina vienu veiksmu;
  leiskite tai atlikti jam.
- Vykdyklės sustabdymas vykdant užduotį ją atšaukia (pastebėta veikiančioje sistemoje): `systemctl stop` naudokite tik
  tada, kai jos `Runner.Listener` neturi antrinio `Runner.Worker` proceso — ir atlikite tai viena komanda.
- Darbo eigos neturi laikyti artefaktų `/tmp` kataloge (jis yra RAM). Atsisiųskite į
  `$RUNNER_TEMP` (diske, atskirai kiekvienai vykdyklei) — 1,3 GB `next-build` artefakto įrašymas į tmpfs truko 27–32
  minutes, o įkėlimas iš disko — 2 minutes.
- `.15` VPS skirtas tik homologacijai — jame niekada neveikia CI vykdyklės.

## Priglobtoji vykdymo juosta („GitHub“ priglobtos vykdyklės)

Paskyrai taikomas **Pro** planas: **40 vienu metu vykdomų priglobtų užduočių**, kurias bendrai naudoja visos PR patikros,
visos `push` įvykių suaktyvintos darbo eigos ir numatytoji CodeQL sąranka. 2026-10-18, per
suliejimų kampaniją (~10 suliejimų per valandą į `release/v3.8.52`), išmatuota: per
24 h **sukurta 2 500 darbo eigų vykdymų**, per 6 h į šaką atlikti 44 pakeitimų išsiuntimai, **eilėje laukė 106 priglobtos užduotys**, o PR patikros
laukė valandų valandas ir PR buvo suliejami be jų. Kiekvieną kartą išsiuntus pakeitimus į šaką buvo paleidžiamos devynios darbo eigos:

| kiekvienam `push` į `release/v*`            | priglobtos užduotys | rezultatas apkrovos metu                                                | nuo 2026-10-18                                                                            |
| ------------------------------------------- | ------------------: | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `ci.yml` (visa matrica)                     |              iki 30 | atšaukta dėl kito `push`, 24 iš 24 per dieną                            | nepaleidžiama `release/**` šakų `push` įvykiams (PR vykdymas + Release-Green)             |
| `quality.yml`                               |                  ~6 | atšaukta, 23 iš 23                                                      | nepaleidžiama `release/**` šakų `push` įvykiams                                           |
| `Release-Green` `--quick`                   |                   0 | vykdyta per `omni-build`, atšaukta 97 iš 100                            | `omni-release` vieta, niekada neatšaukiama, laukiantys vykdymai sujungiami                |
| `Lock released branch`, `OpenSSF Scorecard` |                   2 | po vieną eilėje laukiantį vykdymą kiekvienam `push`                     | po vieną vykdymą kiekvienai nuorodai (`tests/unit/build/hosted-lane-concurrency.test.ts`) |
| `Release acceptance` (šešėlinė ataskaita)   |                   1 | po vieną priglobtą `npm ci` kiekvienam `push`, niekada neatšaukiama     | nepakeista — tinkama kandidatė `paths:` filtrui                                           |
| `Publish to Docker Hub` → `Deploy to VPS`   |                   2 | atšaukiama kiekvienam `push`; amd64 dalis konkuruoja dėl `omni-build`   | nepakeista — savininko diegimo kanalas                                                    |
| numatytoji CodeQL sąranka (`dynamic`)       |                   4 | `javascript-typescript`, `actions`, `c-cpp`, `python` kiekvienam `push` | nepakeista — Settings → Code security; `c-cpp`/`python` čia neturi ko nuskaityti          |

`tests/unit/build/push-storm-diet.test.ts` užfiksuoja tik `main` šakai skirtą `ci.yml` ir
`quality.yml` `push` aktyviklį. Šalutinis poveikis: Codecov nebegauna bazinio įkėlimo kiekvienam leidimo šakos `push` įvykiui (šis
žingsnis yra informacinis ir naudoja `continue-on-error`); saugykloje esanti aprėpties patikra ir PR komentaras
lieka nepaveikti.

**Didesni savarankiškai priglobtų vykdyklių pajėgumai neišsprendžia priglobtų užduočių eilės problemos.** Kūrimo serveris
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) galėtų talpinti vykdyklę, tačiau agentų seansai jau
palaiko 20–26 apkrovą, agento konteineryje nėra Docker tarnybos, o perpildyta yra būtent
priglobtoji vykdymo juosta. Tuo pačiu metu `.113` serveryje buvo 71 GB laisvos vietos ir 5–8 apkrova; jį riboja
aukščiau nurodytas kiekvienam klausytojui skirtos atminties biudžetas (daugiausia 6 klausytojai), o ne CPU. Likusios
priemonės yra procesinės: kampanijos PR sulieti per Mergify eilę (`label=queue`; paketai bendrai naudoja
vieną `merge_group` CI vykdymą vietoje atskiro vykdymo kiekvienam PR ir dar vieno kiekvienam `push`), sumažinti numatytosios CodeQL
sąrankos kalbų skaičių ir filtruoti `release-acceptance.yml` pagal jos skaitomus failus.
