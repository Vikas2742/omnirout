# Self-Hosted Runner Box Operations (.113 pool) (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

A saját üzemeltetésű készlet a **.113** gépen (`tomni-proxmox-113`) fut. 2026-10-18 óta minden
OmniRoute runnernek **egyetlen szerepe**, egy címkéje, valamint a munkaterhelés mért igényeihez
méretezett memória- és CPU-kerete van. A Turbopack-hely annyi erőforrást kap, amennyire a buildnek
szüksége van; a többi hely a mért csúcsterheléséhez van méretezve. A gépen csak akkor történik
túlfoglalás, amikor egy Turbopack-build egy Release-Green webpack-builddel és egy lintfeladattal
esik egybe; ezt a gazdagép lapozóterülete (16 GB) kezeli, és mivel a pull requestek buildjei
hosztolt környezetben futnak, a Turbopack-hely az idő nagy részében tétlen:

| runner               | címke          | szerep                                                                                                                                                | `MemoryHigh` / `MemoryMax` | `CPUQuota`      |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack-buildek: `ci.yml` `Build` (csak push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, az éjszakai a11y-build | 56 GB / 60 GB (swap 0)     | 1600 %          |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack-build                                                                                         | 20 GB / 24 GB (swap 4 GB)  | 800 %           |
| `omniroute-113-2`    | `omni-light`   | éjszakai feladatok (Schemathesis, promptfoo, garak, k6, a11y-indítás) és `quality.yml` `lint-guard`                                                   | 12 GB / 16 GB (swap 4 GB)  | 600 %           |
| `omniroute-113`      | `omni-light`   | ugyanaz a készlet, mint fent                                                                                                                          | 8 GB / 12 GB               | 400 %           |
| OmniHeuris, OmniMind | (saját repóik) | csak Dependabot (egyenként 155 MB-os csúcsérték, 2026-10-18)                                                                                          | 4 GB / 6 GB                | egyenként 200 % |

Mérve: 2026-10-18:

| erőforrás | érték                     | mit jelent ez az ütemezés szempontjából                                                                                                                                                                                                                                                                                                                                                                       |
| --------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 mag**        | egy Turbopack production build korlátozás nélkül 49 GB-os csúcsértéket ért el (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8 alatt önmagában a fordítási fázis ~40 GB-ot foglal (36 GB RSS a `next-build` folyamatban, valamint 17, egyenként 3 GB-os loader worker, mérve: 2026-10-18); egy webpack-build ~14–16 GB. Egy Turbopack- és egy webpack-build együtt elfér; két Turbopack-build nem |
| swap      | 16 GB                     | az `omniroute-113-5` kikapcsolt swappal fut (`MemorySwapMax=0`), így egy elszabadult build a korlátjánál leáll, ahelyett hogy a gépet lapozásra kényszerítené                                                                                                                                                                                                                                                 |
| `/tmp`    | **12 GB tmpfs = RAM**     | minden, ami ide kerül, memóriát használ; a maradványok 3 óra elteltével törlődnek                                                                                                                                                                                                                                                                                                                             |
| CPU       | 32 magon 60-as load mérve | a kvóták bevezetése előtt egy Turbopack-build (~1166 % CPU) és egy ugyanazon a gépen futó coverage tesztcsomag elvonta az erőforrásokat a többi listener heartbeatjeitől (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                |
| runnerek  | **6 listener**            | 4 OmniRoute + OmniHeuris + OmniMind; az `omniroute-113-3/-4/-7/-8` le van tiltva (a `systemctl enable --now` paranccsal bármelyik újra engedélyezhető)                                                                                                                                                                                                                                                        |

A korlátok az egyes unitok `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
fájljában találhatók (a korábbi értékek az `override.conf.bak-20261018` fájlban maradtak meg), és
futás közben lettek alkalmazva a
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` paranccsal — újraindítás
nélkül, így egyetlen futó feladatot sem érintettek. A címkék szintén futás közben, a runners API-n
keresztül módosíthatók
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`).

## A takarító telepítése (egyszeri művelet a gépen)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): 30 percenként, naplózás a /var/log/runner-janitor.log fájlba
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

Az `lsof` szükséges: a takarító a megnyitott fájlok egyetlen pillanatfelvételével
bizonyítja, hogy egy elérési út tétlen, mielőtt eltávolítaná; az eszköz nélkül
semmit sem távolít el, és ezt jelzi is (exit 1). Minden módosítást először
`--dry-run` használatával próbálj ki — pontosan kiírja, hogy mit tenne, de semmihez
nem nyúl.

Amit minden futáskor elvégez: eltakarítja a saját maradványainkat (`runner-*`,
`omniroute-*`, `next-build*`, `e2e-build.tar.gz`) **3 óra után tmpfs-en**, illetve
24 óra után a lemezen lévő `_work/_temp` alatt; leállítja a 75 percnél régebbi
`next-build` folyamatot (egyetlen feladat sem fut ilyen sokáig — 2026-08-27-én egy
70 percig futott, miután a GitHub elveszettnek nyilvánította a feladatát); törli
azon futtatók 48 óránál régebbi munkapéldányait, amelyek egysége **leállított**
állapotban van; riaszt, ha a lemezhasználat ≥ 85%, a memória PSI
`full/avg60` értéke ≥ 10%, vagy a figyelők száma meghaladja a
`MAX_ACTIVE_RUNNERS` értékét (omniroute/egyéb bontással). Exit 1 = beavatkozás
szükséges; olvasd el a naplót.

A 75 perces szabály nem észleli azt a buildet, amelynek feladatáról a GitHub már
lemondott. Amikor a `Runner.Listener` nem tudja megújítani a feladatát, az
`_diag/Runner_*.log` ezt mutatja:
`POST request to …/renewjob timed out after 100 seconds`; az API körülbelül tíz
perccel az utolsó sikeres megújítás után `completed` állapotúnak (sikertelennek)
jelenti a feladatot, a `next-build` pedig hozzárendelt feladat nélkül fut tovább
(2026-10-18: a #17066 buildje 19:43-kor sikertelen lett, a buildje pedig öt perccel
később még mindig 40 GB-ot foglalt). Ellenőrizd a refet a legújabb
`_diag/Worker_*.log` fájlban, majd PID alapján csak a build folyamatfájának küldj
SIGTERM jelet — a `next-build`, `npm run build`, `build-next-isolated.mjs`
folyamatoknak és a `_work` munkafolyamatoknak. Soha ne nyúlj a `Runner.Listener`,
`RunnerService.js` vagy `Runner.Worker` folyamatokhoz: a worker megszakítottként
jelenti a feladatot, a listener pedig magától ismét online állapotba kerül.

## Futtatóegységek: KillMode

A futtató alapértelmezett `KillMode=process` beállítása életben hagyja a
`Runner.Worker → npm → next-build` folyamatláncot egy egység leállításakor vagy
újraindításakor — az árva build hozzárendelt feladat nélkül tovább fogyasztja a
RAM-ot és a CPU-t. Minden OmniRoute-egység rendelkezik egy kiegészítő
konfigurációval
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`),
amelyben `KillMode=mixed` van beállítva: először SIGTERM a listenernek, majd
`TimeoutStop` időpontban SIGKILL a teljes cgroupnak. Ez az egység következő
újraindításakor lép érvénybe — **egyszerre csak egy futtatót indíts újra, és csak
akkor, amikor tétlen**, a tétlenség ellenőrzését és az újraindítást ugyanabban a
parancsban végrehajtva.

## Üzemeltetési szabályok

- **Egyszerre csak egy Turbopack-build futhat — címkével kikényszerítve.** Minden teljes Turbopack
  `next build` parancsot futtató job a `[self-hosted, omni-build]` célpontot használja, és ezt a
  címkét csak az **`omniroute-113-5`** viseli: a `ci.yml` `Build`, az `npm-publish.yml` `publish`,
  a `nightly-v4-build`, a `preview-artifact`, az éjszakai a11y-build (#16853), valamint a
  `docker-publish.yml` **amd64** buildje (webpack a BuildKiten belül — a Turbopack ott pánikhibával
  leállt, 33253576569-es futás). Az arm64 Docker-ág továbbra is az `ubuntu-24.04-arm` rendszeren
  marad. A `docker-publish` amd64 ugyanazt a `heavy-build-main` párhuzamossági csoportot használja,
  mint a `ci.yml` `Build` (`cancel-in-progress: false`). A Docker Engine-nek az `omniroute-113-5`
  gépen kell futnia. Egy második Turbopack-hely nem fér bele a 78 GB-ba (2 × 33–37 GB, valamint a
  gép többi terhelése); második hely csak webpack-buildekhez biztonságos.
- **A pull requestek buildjei hosztolt környezetben futnak (2026-10-18).** A `ci.yml` `Build` csak
  `push` és `workflow_dispatch` esetén jut el az `omni-build` célpontra; minden `pull_request`
  (saját eredetű vagy forkról érkező), valamint minden `merge_group` build az `ubuntu-latest`
  rendszeren, webpackkel fut. Amikor minden saját eredetű PR a dedikált helyre volt irányítva, egy
  Turbopack-build 29–58 percig foglalta azt, 18 build akár 18 órán át várakozott, a release ág
  saját push-buildje pedig 40 jobból egyszer kapta meg a helyet. Hosztolt környezetben ugyanez a
  PR-build 8–12 percet vesz igénybe, a PR többi jobja mellett. A Turbopack — az `npm-publish`
  által szállított bundler — továbbra is tesztelve van a release ágon az alapértelmezett ág
  éjszakai a11y-buildje (04:41 UTC), minden, a helyet elérő push- vagy dispatch-build, valamint
  maga az `npm-publish` által. A négyfeltételes kaput a
  `tests/unit/build/heavy-build-queue.test.ts` rögzíti.
- **A Turbopack-helyet soha ne méretezd a mért igénye alá.** 2026-10-18-án 18:06-kor a hely
  korlátját 56G/60G-ről 40G/44G-re csökkentették, hogy helyet biztosítsanak az `omni-release`
  számára. A fordítási fázis a teljes futás alatt a `MemoryHigh` korláton volt (a memória-PSI
  `full` értéke 30–43% volt), és az ugyanazt a cgroupot használó `Runner.Listener` nem tudta
  megújítani a jobját. A tulajdonos 2026-10-17-i 56G/60G értékét még aznap visszaállították.
  Ennél alacsonyabb értéknél a build nem hibával áll le; vergődik, és a job elveszik.
- **A Release-Green saját hellyel rendelkezik (2026-10-18).** Addig mindkét Release-Green-ellenőrzés
  az `omni-build` célponton futott: minden push esetén (~10/óra; egyetlen nap alatt 100 push-futásból
  97-et munka közben megszakítottak), továbbá naponta három, egyenként ~2 órás teljes ellenőrzés
  formájában (a 05:29-es ellenőrzés 6 órát várt a helyre) — az egyetlen buildhely kapacitását
  többszörösen túligényelték, a saját eredetű PR-ek buildjei pedig órákig várakoztak.
  A `release-green` és a `main-green` most az `omni-release` célpontot használja (kizárólag
  `omniroute-113-6`) az `OMNIROUTE_USE_TURBOPACK=0` beállítással, és az elindult futást már nem
  szakítja meg egy újabb push (a függőben lévő hely továbbra is összevonja a hullámot). A
  `tests/unit/build/runner-capacity-routing.test.ts` rögzíti az útválasztást, a webpackre váltást,
  valamint azt, hogy az `omni-release` célponton semmi sem buildel Turbopackkel.
- **Könnyű terhelésű készlet: `omni-light`.** Az `omniroute-113` és az `omniroute-113-2` futtatja
  azokat az éjszakai feladatokat, amelyeknek csak backendhez szükséges `next build` kell
  (~5–6 GB; webpack), valamint a `quality.yml` `lint-guard` jobját. Az `omniroute-113`
  `MemoryHigh=4G` korláttal futott 2026-10-18-ig — a promptfoo-build 54 percen át memória-visszanyerés
  mellett küszködött rajta; 8 GB megszünteti a korlátozást.
- **Szándékosan kevesebb listener.** Négy OmniRoute-egységet letiltottak 2026-08-29-én — minden
  további listener újabb részesedést igényel a fenti memóriakeretből. A janitor felső korlátja 6
  (`MAX_ACTIVE_RUNNERS=6` a cronban): a gépen lévő összes `Runner.Listener` folyamatot számolja,
  az OmniHeuris és az OmniMind pedig további kettőt ad a mi négyünk mellé.
- **Soha ne tisztítsd kézzel a `/tmp` vagy az `_work` könyvtárat, amíg bármelyik runner foglalt.**
  Egy olyan ellenőrzés, majd törlés, amelynél időbeli rés volt a két művelet között, 2026-08-27-én
  egy aktív Build job `_work` könyvtárának elvesztését okozta. A janitor egyetlen lépésben végzi
  az ellenőrzést és az eltávolítást; bízd rá.
- Egy runner job közbeni leállítása megszakítja a jobot (élőben megfigyelve): a `systemctl stop`
  csak akkor használható, ha a listenerének nincs `Runner.Worker` gyermekfolyamata — és ezt
  egyetlen paranccsal kell elvégezni.
- A workflow-k nem tárolhatnak artefaktumokat a `/tmp` könyvtárban (az RAM-ban van). A letöltés
  célja a `$RUNNER_TEMP` legyen (lemezen található, runnerenként külön) — az 1,3 GB-os
  `next-build` artefaktum tmpfs-re történő letöltése 27–32 percig tartott, míg lemezről 2 perc
  alatt feltöltődött.
- A `.15` VPS kizárólag homologizációra szolgál — CI-runnereket soha nem futtat.

## Üzemeltetett sáv (GitHub által üzemeltetett futtatók)

A fiók **Pro** csomagot használ: **40 egyidejű üzemeltetett feladat**, amelyen minden PR-ellenőrzés,
minden push által aktivált munkafolyamat és a CodeQL alapértelmezett konfigurációja osztozik. A
2026-10-18-án, egy összevonási kampány során (~10 összevonás/óra a `release/v3.8.52` ágon) végzett
mérés szerint **2 500 munkafolyamat-futtatás jött létre 24 óra alatt**, 6 óra alatt 44 push érkezett
az ágra, és **106 üzemeltetett feladat várakozott a sorban**, miközben a PR-ellenőrzések órákig
vártak, a PR-eket pedig nélkülük vonták össze. Kilenc munkafolyamat indult el az ágra érkező minden push esetén:

| `release/v*` ágra irányuló pushonként           | üzemeltetett feladatok | eredmény a terhelési hullám alatt                                          | 2026-10-18 óta                                                                     |
| ----------------------------------------------- | ---------------------: | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ci.yml` (teljes mátrix)                        |          legfeljebb 30 | a következő push megszakította, egy nap alatt 24-ből 24-et                 | nem indul el `release/**` pushoknál (PR-futtatás + Release-Green)                  |
| `quality.yml`                                   |                     ~6 | megszakítva, 23-ból 23                                                     | nem indul el `release/**` pushoknál                                                |
| `Release-Green` `--quick`                       |                      0 | az `omni-build` rendszeren futott, 100-ból 97 megszakítva                  | `omni-release` hely, soha nem szakad meg, a függőben lévő futtatások összevonódnak |
| `Lock released branch`, `OpenSSF Scorecard`     |                      2 | pushonként egy sorban álló futtatás                                        | hivatkozásonként egy futtatás (`tests/unit/build/hosted-lane-concurrency.test.ts`) |
| `Release acceptance` (árnyékjelentés)           |                      1 | pushonként egy üzemeltetett `npm ci`, soha nem szakadt meg                 | változatlan — alkalmas lehet egy `paths:` szűrőre                                  |
| `Publish to Docker Hub` → `Deploy to VPS`       |                      2 | pushonként megszakítva; az amd64 ág az `omni-build` erőforrásaiért verseng | változatlan — a tulajdonos telepítési csatornája                                   |
| CodeQL alapértelmezett konfiguráció (`dynamic`) |                      4 | pushonként `javascript-typescript`, `actions`, `c-cpp`, `python`           | változatlan — Settings → Code security; a `c-cpp`/`python` itt semmit sem vizsgál  |

A `tests/unit/build/push-storm-diet.test.ts` rögzíti a `ci.yml` és a `quality.yml` kizárólag
`main` ágra vonatkozó push-eseményindítóját. Mellékhatás: a Codecov többé nem kap alapfeltöltést
kiadási pushonként (a lépés csak tájékoztató jellegű, és `continue-on-error` beállítású); a
tárolón belüli lefedettségi kapu és a PR-megjegyzés változatlan marad.

**A nagyobb saját üzemeltetésű kapacitás nem oldja meg az üzemeltetett várólista problémáját.**
A fejlesztői gép (`devbox-vm-06-dev002`, 24 vCPU / 54 GB) futtathatna egy futtatót, de az
ügynökmunkamenetek már most is 20–26 között tartják a terhelését, az ügynökkonténer nem
rendelkezik Docker-démonnal, és a telített sáv az üzemeltetett sáv. A `.113` gépen ugyanebben
a pillanatban 71 GB szabad tárhely és 5–8 közötti terhelés volt; ott a korlátot a fent ismertetett,
figyelőnkénti memóriakeret jelenti (legfeljebb 6 figyelő), nem pedig a CPU. A fennmaradó
lehetőségek folyamatalapúak: a kampány PR-jeit a Mergify várólistáján keresztül kell beolvasztani
(`label=queue`; a kötegek PR-enként egy futtatás és pushonként még egy futtatás helyett egyetlen
`merge_group` CI-futtatáson osztoznak), csökkenteni kell a CodeQL alapértelmezett konfigurációjának
nyelveit, és a `release-acceptance.yml` fájlt az általa olvasott fájlok alapján kell szűrni.
