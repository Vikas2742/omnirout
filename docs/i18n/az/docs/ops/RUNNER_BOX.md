# Self-Hosted Runner Box Operations (.113 pool) (Azərbaycan dili)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Öz serverində yerləşdirilən hovuz **.113** maşınında (`tomni-proxmox-113`) işləyir. 2026-10-18 tarixindən etibarən hər
OmniRoute runner-inin **bir rolu**, bir etiketi və iş yükünün ölçülmüş tələbatına uyğun yaddaş/CPU büdcəsi var.
Turbopack slotuna build üçün lazım olan resurslar verilir; digər slotların ölçüsü isə onların
ölçülmüş pik göstəricilərinə əsaslanır. Maşında resursların həddən artıq ayrılması yalnız Turbopack build-i,
Release-Green webpack build-i və lint işi eyni vaxta düşdükdə baş verir; host swap-ı (16 GB) bunu qarşılayır
və pull-request build-ləri hosted runner-lərdə işlədiyindən Turbopack slotu əksər vaxt boş qalır:

| runner               | etiket         | rol                                                                                                                                                      | `MemoryHigh` / `MemoryMax` | `CPUQuota`          |
| -------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------------- |
| `omniroute-113-5`    | `omni-build`   | Turbopack build-ləri: `ci.yml` `Build` (yalnız push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, gecəlik a11y build-i | 56 GB / 60 GB (swap 0)     | 1600 %              |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), webpack build-i                                                                                          | 20 GB / 24 GB (swap 4 GB)  | 800 %               |
| `omniroute-113-2`    | `omni-light`   | gecəlik işlər (Schemathesis, promptfoo, garak, k6, a11y işə salınması) və `quality.yml` `lint-guard`                                                     | 12 GB / 16 GB (swap 4 GB)  | 600 %               |
| `omniroute-113`      | `omni-light`   | yuxarıdakı ilə eyni hovuz                                                                                                                                | 8 GB / 12 GB               | 400 %               |
| OmniHeuris, OmniMind | (öz repoları)  | yalnız Dependabot (hər biri üçün pik 155 MB, 2026-10-18)                                                                                                 | 4 GB / 6 GB                | hər biri üçün 200 % |

2026-10-18 tarixində ölçülüb:

| resurs     | dəyər                             | planlaşdırma baxımından mənası                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU  | **78 GB / 32 nüvə**               | Turbopack production build-i məhdudiyyətsiz işləyərkən 49 GB pik həddinə çatıb (`tests/unit/ci-build-bundler-webpack.test.ts`); Next 16.3.8-də təkcə compile mərhələsi təxminən 40 GB tutur (`next-build` prosesində 36 GB RSS və hər biri 3 GB olan 17 loader worker, 2026-10-18 tarixində ölçülüb); webpack build-i təxminən 14–16 GB tutur. Bir Turbopack və bir webpack build-i birlikdə yerləşir; iki Turbopack build-i yerləşmir |
| swap       | 16 GB                             | `omniroute-113-5` swap söndürülmüş halda (`MemorySwapMax=0`) işləyir; buna görə nəzarətdən çıxan build maşını swap-a məcbur etmək əvəzinə təyin edilmiş limitdə dayandırılır                                                                                                                                                                                                                                                           |
| `/tmp`     | **12 GB tmpfs = RAM**             | burada saxlanılan hər şey yaddaş sərf edir; qalıqlar 3 saatdan sonra təmizlənir                                                                                                                                                                                                                                                                                                                                                        |
| CPU        | 32 nüvədə 60 load müşahidə edilib | kvotalardan əvvəl eyni maşında bir Turbopack build-i (təxminən 1166 % CPU) və coverage dəsti digər listener-lərin heartbeat-lərini resurs çatışmazlığına məruz qoyurdu (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                           |
| runner-lər | **6 listener**                    | 4 OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` deaktiv edilib (`systemctl enable --now` onlardan birini yenidən aktivləşdirir)                                                                                                                                                                                                                                                                                        |

Limitlər hər unit-in `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` faylında yerləşir
(əvvəlki dəyərlər `override.conf.bak-20261018` kimi saxlanılıb) və
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` vasitəsilə canlı tətbiq edilib — restart edilməyib,
buna görə də işləyən heç bir işə toxunulmayıb. Etiketlər runner API-si vasitəsilə
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) dəyişdirilir və bu da canlı şəkildə həyata keçirilir.

## Təmizləyicini quraşdırın (birdəfəlik, serverdə)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): hər 30 dəqiqədən bir, jurnalı /var/log/runner-janitor.log faylına yaz
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` tələb olunur: təmizləyici yolu silməzdən əvvəl açıq faylların bir anlıq görüntüsü ilə
onun istifadəsiz olduğunu təsdiqləyir; bu alət olmadıqda isə heç nə silmir və bunu bildirir
(exit 1). İstənilən dəyişikliyi əvvəlcə `--dry-run` ilə sınaqdan keçirin — o, dəqiq nə edəcəyini
göstərir və heç nəyə toxunmur.

Hər işə salındıqda etdikləri: **tmpfs-də 3 saatdan**, diskdəki
`_work/_temp` daxilində isə 24 saatdan sonra öz qalıqlarımızı (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) təmizləyir; 75 dəqiqədən köhnə `next-build` prosesini
dayandırır (heç bir tapşırıq bu qədər uzun çəkmir — 2026-08-27 tarixində GitHub tapşırığın
itirildiyini elan etdikdən sonra biri 70 dəqiqə işləmişdi); unit-i **dayandırılmış** runner-ların
48 saatlıq checkout-larını silir; disk istifadəsi ≥ 85 %, yaddaş PSI göstəricisi
`full/avg60` ≥ 10 % olduqda və dinləyicilərin sayı `MAX_ACTIVE_RUNNERS` dəyərindən çox olduqda
(omniroute/digər bölgüsü ilə) xəbərdarlıq edir. Exit 1 = diqqət tələb olunur; jurnalı oxuyun.

75 dəqiqə qaydası GitHub-ın artıq imtina etdiyi tapşırığın build prosesini aşkarlamır.
`Runner.Listener` tapşırığı yeniləyə bilmədikdə, `_diag/Runner_*.log` daxilində
`POST request to …/renewjob timed out after 100 seconds` görünür, API son uğurlu yeniləmədən
təxminən on dəqiqə sonra tapşırığı `completed` (uğursuz) kimi bildirir və `next-build` ona
bağlı tapşırıq olmadan işləməyə davam edir (2026-10-18: #17066 üçün Build saat 19:43-də
uğursuz olmuşdu və onun build prosesi beş dəqiqə sonra hələ də 40 GB yaddaş tuturdu). Ən yeni
`_diag/Worker_*.log` daxilində ref-i təsdiqləyin, sonra yalnız build proses ağacına PID üzrə
SIGTERM göndərin — `next-build`, `npm run build`, `build-next-isolated.mjs` və `_work`
işçi proseslərinə. Heç vaxt `Runner.Listener`, `RunnerService.js` və ya `Runner.Worker`
proseslərinə toxunmayın: işçi tapşırığı ləğv edilmiş kimi bildirir və dinləyici özü yenidən
onlayn olur.

## Runner unit-ləri: KillMode

Runner-in standart `KillMode=process` parametri unit dayandırıldıqda və ya yenidən
başladıldıqda `Runner.Worker → npm → next-build` proseslərini işlək saxlayır — yetim build
ona bağlı tapşırıq olmadan RAM və CPU sərf etməyə davam edir. Hər OmniRoute unit-i
`KillMode=mixed` parametrli əlavə konfiqurasiya faylına
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
malikdir: əvvəlcə dinləyiciyə SIGTERM, `TimeoutStop` zamanı isə bütün cgroup-a SIGKILL
göndərilir. Bu, unit-in növbəti yenidən başladılmasında qüvvəyə minir — boşluq yoxlaması ilə
yenidən başlatmanı eyni komandada yerinə yetirərək, **eyni anda yalnız bir runner-i və yalnız
boş olduqda** yenidən başladın.

## Əməliyyat qaydaları

- **Eyni anda yalnız bir Turbopack build-i — label ilə məcburi tətbiq olunur.** Tam Turbopack
  `next build` icra edən hər job `[self-hosted, omni-build]`-i hədəfləyir və həmin label yalnız
  **`omniroute-113-5`** üzərindədir: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, gecəlik a11y build-i (#16853) və `docker-publish.yml` **amd64** (BuildKit daxilində
  webpack — Turbopack orada panikaya düşdü, run 33253576569). arm64 Docker mərhələsi `ubuntu-24.04-arm`
  üzərində qalır. `docker-publish` amd64, `ci.yml` `Build` ilə `heavy-build-main` concurrency qrupunu
  paylaşır (`cancel-in-progress: false`). Docker Engine `omniroute-113-5` üzərində olmalıdır. İkinci
  Turbopack yuvası 78 GB-a sığmır (2 × 33–37 GB və sistemin qalan hissəsi); ikinci yuva yalnız
  webpack build-ləri üçün təhlükəsizdir.
- **Pull request Build-ləri hosted runner-larda icra olunur (2026-10-18).** `ci.yml` `Build` yalnız
  `push` və `workflow_dispatch` üçün `omni-build`-ə çatır; hər `pull_request` (öz mənbəyindən və ya
  fork-dan) və `merge_group` Build-i webpack ilə `ubuntu-latest` üzərində işləyir. Öz mənbəyindən olan
  hər PR yuvaya yönləndiriləndə Turbopack Build-i onu 29–58 dəqiqə məşğul saxlayırdı, 18 Build 18 saata
  qədər növbədə qalırdı və buraxılış xəttinin öz push Build-i 40 job ərzində yuvanı cəmi bir dəfə əldə
  etmişdi. Hosted runner-da eyni PR Build-i həmin PR-ın digər job-ları ilə yanaşı 8–12 dəqiqə çəkir.
  `npm-publish` tərəfindən yayımlanan bundler olan Turbopack buraxılış xəttində default branch-in
  gecəlik a11y build-i (04:41 UTC), yuvaya çatan hər push və ya dispatch Build-i, həmçinin
  `npm-publish` özü vasitəsilə yoxlanılmağa davam edir. `tests/unit/build/heavy-build-queue.test.ts`
  dörd şərtli keçidi təsbit edir.
- **Turbopack yuvasına heç vaxt ölçülmüş ehtiyacından az resurs ayırmayın.** 2026-10-18 tarixində
  saat 18:06-da `omni-release` üçün yer açmaq məqsədilə yuvanın limitləri 56G/60G-dən 40G/44G-yə
  endirildi. Kompilyasiya mərhələsi bütün icrası boyunca `MemoryHigh` həddində qaldı (memory PSI
  `full` 30–43 %) və cgroup-u paylaşan `Runner.Listener` öz job-unu yeniləyə bilmədi. Sahibin
  2026-10-17 tarixli 56G/60G dəyərləri həmin gün bərpa edildi. Bu dəyərdən aşağı olduqda build
  xəta ilə dayanmır; resurs çatışmazlığı səbəbindən həddən artıq yüklənir və job itirilir.
- **Release-Green-in öz yuvası var (2026-10-18).** O vaxta qədər hər iki Release-Green yoxlaması
  `omni-build` üzərində işləyirdi: hər push zamanı (~10/saat, bir gündə 100 push icrasından 97-si
  işin ortasında ləğv edildi) və gündə üç dəfə keçirilən təxminən 2 saatlıq tam yoxlamalarda
  (05:29 yoxlaması yuva üçün 6 saat gözlədi) — yeganə build yuvasının tutumu dəfələrlə aşılırdı
  və öz mənbəyindən olan PR Build-ləri saatlarla gözləyirdi. `release-green` və `main-green` indi
  `OMNIROUTE_USE_TURBOPACK=0` ilə `omni-release`-i (yalnız `omniroute-113-6`) hədəfləyir və başlamış
  icra artıq daha yeni push tərəfindən ləğv edilmir (gözləyən yuva yenə də axını birləşdirir).
  `tests/unit/build/runner-capacity-routing.test.ts` marşrutlaşdırmanı, webpack keçidini və
  `omni-release` üzərində heç nəyin Turbopack ilə build edilmədiyini təsbit edir.
- **Yüngül hovuz: `omni-light`.** `omniroute-113` və `omniroute-113-2` yalnız backend üçün
  `next build` (~5–6 GB; webpack) və `quality.yml` `lint-guard` tələb edən gecəlik job-ları icra edir.
  `omniroute-113` 2026-10-18 tarixinədək `MemoryHigh=4G` ilə işləyirdi — promptfoo build-i orada
  54 dəqiqə ərzində yaddaşın geri alınması ilə mübarizə aparırdı; 8 GB məhdudlaşdırmanı aradan qaldırır.
- **Qəsdən daha az listener.** Dörd OmniRoute vahidi 2026-08-29 tarixində deaktiv edildi — hər əlavə
  listener yuxarıdakı yaddaş büdcəsinin daha bir istifadəçisidir. Janitor limiti 6-dır (cron daxilində
  `MAX_ACTIVE_RUNNERS=6`): o, sistemdəki hər `Runner.Listener`-i sayır və OmniHeuris + OmniMind bizim
  dörd listener-ə daha ikisini əlavə edir.
- **Hər hansı runner məşğul olarkən `/tmp` və ya `_work` qovluğunu heç vaxt əl ilə təmizləməyin.**
  Yoxlama ilə silmə arasında fasilə olan check-then-delete əməliyyatı 2026-08-27 tarixində işləyən
  Build job-unun `_work` qovluğunu itirməsinə səbəb oldu. Janitor yoxlamanı və silməni bir addımda
  həyata keçirir; bunu ona həvalə edin.
- Runner-i job-un ortasında dayandırmaq job-u ləğv edir (canlı sistemdə müşahidə edilib):
  `systemctl stop` yalnız listener-in `Runner.Worker` child prosesi olmadıqda icra edilməlidir —
  və bunu bir komandada edin.
- Workflow-lar artefaktları `/tmp` daxilində saxlamamalıdır (o, RAM-dır). `$RUNNER_TEMP` qovluğuna
  endirin (diskdədir və hər runner üçün ayrıdır) — 1.3 GB ölçülü `next-build` artefaktının tmpfs-ə
  yerləşdirilməsi 27–32 dəqiqə, diskdən upload edilməsi isə 2 dəqiqə çəkdi.
- `.15` VPS yalnız homoloqasiya üçündür — orada heç vaxt CI runner-ları işləmir.

## Host edilən zolaq (GitHub tərəfindən host edilən icraçılar)

Hesab **Pro** planındadır: **eyni vaxtda 40 host edilən iş**; bu limit bütün PR yoxlamaları,
push ilə işə salınan bütün iş axınları və CodeQL-in standart quraşdırması arasında paylaşılır.
2026-10-18 tarixində `release/v3.8.52` üzərində birləşdirmə kampaniyası (~10 birləşdirmə/saat)
zamanı ölçülüb: **24 saat ərzində 2,500 iş axını icrası yaradılıb**, 6 saat ərzində budağa
44 push edilib, PR yoxlamaları saatlarla gözləyərkən **106 host edilən iş növbədə qalıb** və
PR-lər həmin yoxlamalar olmadan birləşdirilib. Budağa edilən hər push zamanı doqquz iş axını işə düşüb:

| `release/v*` üçün hər push                  | host edilən işlər | yük zamanı nəticə                                                             | 2026-10-18 tarixindən etibarən                                                           |
| ------------------------------------------- | ----------------: | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ci.yml` (tam matris)                       |        30-a qədər | növbəti push tərəfindən ləğv edildi, bir gündə 24-dən 24-ü                    | `release/**` push-larında başladılmır (PR icrası + Release-Green)                        |
| `quality.yml`                               |                ~6 | ləğv edildi, 23-dən 23-ü                                                      | `release/**` push-larında başladılmır                                                    |
| `Release-Green` `--quick`                   |                 0 | `omni-build` üzərində işlədi, 100-dən 97-si ləğv edildi                       | `omni-release` slotu, heç vaxt ləğv edilmir, gözləyən icralar birləşdirilir              |
| `Lock released branch`, `OpenSSF Scorecard` |                 2 | hər push üçün növbədə bir icra                                                | hər ref üçün bir icra (`tests/unit/build/hosted-lane-concurrency.test.ts`)               |
| `Release acceptance` (kölgə hesabatı)       |                 1 | hər push üçün bir host edilən `npm ci`, heç vaxt ləğv edilmir                 | dəyişməyib — `paths:` filtri üçün namizəddir                                             |
| `Publish to Docker Hub` → `Deploy to VPS`   |                 2 | hər push üçün ləğv edilir; amd64 hissəsi `omni-build` üzərində rəqabət aparır | dəyişməyib — sahibin yerləşdirmə kanalı                                                  |
| CodeQL standart quraşdırması (`dynamic`)    |                 4 | hər push üçün `javascript-typescript`, `actions`, `c-cpp`, `python`           | dəyişməyib — Parametrlər → Kod təhlükəsizliyi; `c-cpp`/`python` burada heç nə skan etmir |

`tests/unit/build/push-storm-diet.test.ts`, `ci.yml` və `quality.yml` fayllarının yalnız `main`
üçün olan push trigger-ini sabitləşdirir. Yan təsir: Codecov artıq hər release push-u üçün baza
yükləməsi almır (addım məlumat xarakterlidir və `continue-on-error` istifadə edir); repozitoriya
daxilindəki əhatə həddi və PR şərhi bundan təsirlənmir.

**Daha çox öz serverində host edilən tutum host edilən növbə problemini həll etmir.** Devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) bir icraçını host edə bilərdi, lakin agent seansları
artıq onun yükünü 20–26 səviyyəsində saxlayır, agent konteynerində Docker daemon-u yoxdur və
doymuş zolaq host edilən zolaqdır. Eyni anda `.113` maşınında 71 GB boş yer və 5–8 yük var idi;
onun məhdudiyyəti CPU deyil, yuxarıda göstərilən hər dinləyici üçün yaddaş büdcəsidir
(maksimum 6 dinləyici). Qalan təsir vasitələri proseslə bağlıdır: kampaniya PR-lərini Mergify
növbəsi vasitəsilə birləşdirin (`label=queue`; paketlər hər PR üçün bir icra və hər push üçün
bir icra əvəzinə bir `merge_group` CI icrasını paylaşır), CodeQL standart quraşdırmasındakı
dillərin sayını azaldın və `release-acceptance.yml` faylını oxuduğu fayllara görə filtrləyin.
