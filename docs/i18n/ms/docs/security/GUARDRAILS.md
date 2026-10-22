# Guardrails (Bahasa Melayu)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Sumber rujukan muktamad:** `src/lib/guardrails/`
> **Kemas kini terakhir:** 2026-10-17 — v3.8.52 (menambahkan [Liputan dan had](#coverage-and-limits):
> laluan dan aliran respons yang dicapai oleh cangkuk, pengepala penyahdayaan yang digabungkan (#16412), mod
> sekatan suntikan sebagai sempadan wajib (#16413), serta komponen yang melihat respons sebelum pascapanggilan)

Rel pengadang menguatkuasakan keselamatan, dasar dan transformasi kandungan pada sempadan
antara OmniRoute dengan penyedia huluan. Setiap rel pengadang boleh memeriksa (dan
secara pilihan menolak, mengubah atau menganotasi) muatan permintaan (`preCall`) dan
respons huluan (`postCall`).

Sistem ini **terbuka apabila gagal**: jika rel pengadang melontarkan ralat semasa pelaksanaan, daftar
merekodkan ralat tersebut dan meneruskan kepada rel pengadang seterusnya dan bukannya menggagalkan
permintaan. Penyekatan ialah keputusan yang dibuat secara eksplisit (`block: true`), bukan berlaku secara tidak sengaja.
Satu-satunya pengecualian ialah permintaan yang dibatalkan: apabila `signal` pemanggil dibatalkan,
rel pengadang yang melontarkan ralat akan menyebabkan pelaksanaan cangkuk ditolak dan bukannya dilangkau.

Cangkuk **tidak** dijalankan pada setiap laluan atau setiap respons. Baca
[Liputan dan had](#coverage-and-limits) sebelum bergantung pada rel pengadang sebagai
kawalan keselamatan.

## Rel Pengadang Terbina Dalam

Daftar memuatkan enam rel pengadang secara automatik mengikut turutan keutamaan semasa import
(lihat `registry.ts` → `registerDefaultGuardrails()`):

| Keutamaan | Nama                | Peringkat      | Fail                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nombor keutamaan yang lebih rendah dijalankan **terlebih dahulu**.

### Jambatan Penglihatan (`visionBridge.ts`) — Jambatan Modaliti PR-1

Model asas GLM 5.3 dan `glm-5.3-{low,high,max}` mempunyai metadata
daftar/spesifikasi `supportsVision:false` yang eksplisit. Varian GLM 5.3 Flash
kekal sebagai model penglihatan natif. Laluan `/v1/messages` Claude Code memasuki
rantaian rel pengadang prapanggilan `handleChat` yang dikongsi **sebelum** terjemahan
Claude-kepada-OpenAI; imej hasil alat `Read` yang tersarang mesti dihuraikan atau dikendalikan
sebelum terjemahan tersebut mengangkatnya menjadi kandungan `image_url` OpenAI (#17069).

Memintas permintaan yang mengandungi imej dan ditujukan kepada **model tanpa penglihatan**, lalu sama ada
menghalakan semula keseluruhan permintaan kepada model berkeupayaan penglihatan atau menggantikan
bahagian imej dengan huraian teks yang dihasilkan oleh model penglihatan boleh dikonfigurasikan sebelum
panggilan huluan. Ini membolehkan penyedia teks sahaja mengendalikan
muatan multimodal secara telus.

Aliran:

1. Langkau jika model sasaran sudah menyokong penglihatan (melainkan model tersebut terdapat dalam
   senarai jambatan paksa `isVisionBridgeForcedModel`).
2. Ekstrak bahagian imej melalui `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), yang mengagihkan tugas kepada **pengesan media bersepadu**
   `detectMediaParts()` dalam `open-sse/utils/mediaParts.ts` — sumber rujukan muktamad
   tunggal yang dikongsi dengan penapis keserasian gabungan.
   Pengekstrakan menggunakan senarai dibenarkan yang terhad kepada bentuk yang boleh disisipkan semula oleh
   `replaceImageParts` (kontrak ekstrak↔ganti): `image_url` OpenAI, `source.type:"base64"`
   base64 Anthropic, `source.type:"url"` URL Anthropic dan `input_image` Responses
   API. Imej sepadan yang tersarang dalam `tool_result.content` Claude Code dan
   output alat Responses turut diekstrak dan digantikan pada laluan asalnya;
   bentuk yang hanya berupa penunjuk ialah bahan untuk penapis gabungan dan tidak diekstrak.
   Langkau jika tiada imej ditemui.
3. Tentukan konfigurasi masa jalan melalui `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): kekunci tetapan `modalityBridge*`
   baharu diutamakan; kekunci `visionBridge*` legasi kekal sebagai **sandaran satu kitaran**
   (tetingkap pengembalian). Langkau sebelum sebarang penelusuran media apabila
   jambatan dinyahdayakan.
4. Pemilih mod (`modalityBridgeVisionMode`, lihat jadual di bawah) menentukan
   penghalaan semula berbanding penghuraian. Penghalaan semula mengembalikan `modifiedPayload` dengan hanya `model`
   ditukar, berserta metadata `{ rerouted, fromModel, toModel, imagesKept }`.
5. Laluan penghuraian: hadkan imej kepada `maxImages`, gubah gesaan yang mengambil kira tugas,
   rujuk cache penghuraian, panggil model penglihatan **secara selari**
   (`Promise.allSettled`), kemudian suntik bahagian teks `[Image N]: <description>` sebagai
   gantinya. Penghuraian yang gagal menghasilkan `null`: imej mentah dikekalkan untuk
   sasaran tidak diketahui/berkeupayaan penglihatan (#4012), tetapi **sasaran langsung teks sahaja yang
   disahkan** atau gabungan tanpa penglihatan menerima stub teks eksplisit
   `(unavailable — no vision-capable provider connected)` bagi
   setiap imej yang tidak dihuraikan, termasuk kegagalan separa dan imej yang melebihi
   had panggilan penghuraian (#17069). Sandaran penghuraian gabungan sedia ada apabila
   semua percubaan gagal dikekalkan (#8430).
6. Kembalikan `modifiedPayload` + metadata (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Pemilih mod (`modalityBridgeVisionMode`)

| Mod        | Lalai | Tingkah laku                                                                                                                                                                                                                                                                                                                                            |
| ---------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔     | Heuristik legasi, tidak diubah (#6640/#7204): model bukan kombo/`auto/` dihalakan semula kepada model penglihatan terbaik melainkan model asal sudah mempunyai kelayakan yang boleh digunakan (kemudian huraikan); sasaran kombo sentiasa menghuraikan.                                                                                                 |
| `describe` |       | Sentiasa huraikan — blok penghalakan semula dilangkau sepenuhnya; model pilihan pengguna sentiasa menjawab.                                                                                                                                                                                                                                             |
| `reroute`  |       | Paksa penghalakan semula: pelindung untuk mengekalkan model yang mempunyai kelayakan dipintas. Pelindung kelayakan **sasaran** penghalakan semula masih digunakan — apabila tiada sasaran penglihatan yang boleh digunakan, jambatan menyekat dengan ralat yang jelas dan bukannya menghuraikan atau menghantar imej mentah kepada sasaran teks sahaja. |

Mod paksa membuat pintasan awal **sebelum** heuristik auto dijalankan; tingkah laku `auto`
adalah serupa bait demi bait dengan pagar keselamatan sebelum PR-1.

#### Skop kunci API (`visionBridgeKeyScope.ts`)

Apabila kunci API pemanggil mengehadkan `allowedConnections`, kumpulan kuota
(`allowedQuotas`) atau model (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), jambatan hanya
memilih model penghalakan semula dan penghuraian yang boleh digunakan oleh kunci tersebut, pada sambungan yang boleh
digunakan oleh kunci tersebut. Panggilan penghuraian kemudiannya sentiasa melalui gelung kendiri OmniRoute dengan
pengepala `x-omniroute-self-loop-key-id`, supaya permintaan sembang penerima
menguatkuasakan semula dasar sambungan dan model kunci tersebut. `enforceApiKeyPolicy()`
menghormati pengepala itu hanya bersama pembawa gelung kendiri, jadi ia hanya boleh
mengehadkan akses, dan id yang tidak dapat dileraikan akan ditolak.

Jika tiada model penglihatan dibenarkan untuk kunci tersebut, **sasaran teks sahaja yang
disahkan** menolak permintaan imej secara setempat dengan HTTP 400 yang jelas dan bukannya
memajukan bait imej kepada huluan yang tidak berkeupayaan (#17069). Bagi sasaran dengan
keupayaan penglihatan yang tidak diketahui atau asli, laluan penghuraian mengekalkan tingkah laku
gagal-terbuka yang terdahulu (meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Permintaan tanpa kunci, dan kunci tanpa sekatan ini, berfungsi tepat seperti
sebelumnya.

#### Prom penghuraian peka tugas (`modalityBridgeVisionTaskAware`)

Lalai **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) menambahkan
teks **mesej pengguna terakhir** (dipotong kepada 500 aksara) pada prom
penghuraian asas, menghalakan huraian kepada perkara yang sebenarnya diminta oleh pengguna
(corak codex-vision-proxy) dan meminta model penglihatan mentranskripsikan teks yang
kelihatan. Apabila bendera dimatikan — atau tiada teks pengguna — prom asas digunakan tanpa perubahan.

Permintaan serasi OpenAI milik gelung kendiri penghuraian (`callVisionModelSingle()`
dalam `visionBridgeHelpers.ts`) sentiasa meminta `image_url.detail: "high"` —
tanpa syarat, untuk setiap pemanggil/penyedia, tanpa bergantung pada sebarang isyarat klien.
Pensampelan perincian rendah merendahkan ketepatan OCR untuk tugas transkripsi teks
yang diminta oleh prom ini, jadi panggilan penghuraian itu sendiri sentiasa meminta perincian
tinggi tanpa mengira aras perincian yang digunakan oleh permintaan masuk asal. Ini
hanya mempengaruhi isi permintaan penghuraian dalaman; ia tidak mengubah cara
OmniRoute memajukan `image_url.detail` milik pemanggil pada permintaan utama —
nilai lalai itu digunakan secara berasingan, dan hanya untuk klien OpenCode yang dikesan, dalam
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Cabang
format wayar Anthropic bagi gelung kendiri penghuraian tidak mempunyai medan `detail`
dan tidak dipengaruhi oleh mana-mana nilai lalai tersebut.

#### Had output penghuraian (`modalityBridgeVisionMaxChars`)

| Kunci                          | Lalai | Julat              |
| ------------------------------ | ----- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`   | `0` atau 100–50000 |

`0` (lalai) bermaksud **tiada had** — huraian yang dikembalikan oleh
`callVisionModel()` diteruskan tanpa pengubahsuaian, mengekalkan tingkah laku
sedia ada. Sebarang nilai dalam julat 100–50000 memotong huraian dengan
akhiran `…` sebelum ia disisipkan semula sebagai `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` dalam `src/lib/guardrails/visionBridge.ts`).
Naikkan nilai ini untuk tugas OCR dengan banyak perincian apabila model hiliran memerlukan
transkripsi penuh; turunkannya untuk mengehadkan penggunaan token pada model penglihatan yang prolifik.
Medan papan pemuka terletak pada panel Lanjutan tab Penglihatan
(`modality-bridge-max-chars` dalam `ModalityBridgeVisionTab.tsx`) dan mengepit sebarang
nilai antara 1 hingga 99 ke nilai minimum 100 sambil membiarkan `0` yang dinyatakan secara jelas
tidak berubah — `0` ialah nilai Zod yang sah secara tersendiri
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), bukan sekadar
nilai lalai "tidak ditetapkan".

#### Cache penghuraian (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL dalam memori untuk output penghuraian, dikongsi di seluruh proses.
Kunci = `sha256(imageRef + composedPrompt + configuredBridgeModel)` dengan
pembingkaian awalan panjang (tiada perlanggaran sempadan medan). Komponen model ialah
model jambatan yang **dikonfigurasikan**, bukan model yang benar-benar menjawab —
`callVisionModel` mungkin menggunakan sandaran secara dalaman, dan penggunaan kunci mengikut percubaan akan
memecahkan cache. Penghuraian yang gagal tidak pernah dicache. Tetapan:

| Kunci                           | Lalai  | Julat   |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### Penormalan imej jauh (describe gelung sendiri/fetch base64)

Apabila bridge mengambil imej **jauh** sendiri — panggilan sendiri describe Anthropic dan penukaran base64 format-wayar-claude (`ensureBase64ImagesForClaudeWire`), kedua-duanya melalui `fetchRemoteImageAsDataUri()` dalam `visionBridgeHelpers.ts` — data URI yang terhasil dihantar melalui `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) sebelum dibenamkan dalam permintaan model vision. Imej bersaiz berlebihan dikecilkan kepada **tepi panjang 2048px** (sepadan dengan had saiz semula yang OpenAI/Anthropic sudah gunakan di pihak pelayan), yang mengurangkan bait/kependaman muat naik tanpa mengubah apa yang dilihat oleh model vision. Saiz semula menggunakan `sharp`, dimuatkan melalui import dinamik: pada platform di mana binari natifnya gagal dimuatkan, `normalizeDataUri()` **tidak pernah melontar** — ia kembali kepada passthrough bait asal, jadi laluan describe/penukaran-base64 sentiasa terus berfungsi. Bait bukan-imej (fetch yang tidak mengembalikan imej yang boleh dinyahkod) juga dihantar melalui tanpa disentuh. Penormalan ini hanya terhad kepada imej yang bridge ambil untuk panggilan sendiri — ia tidak pernah digunakan pada muatan passthrough mentah pemanggil, selaras dengan prinsip mutasi pilihan-sahaja (Peraturan Keras #20).

#### Skema tetapan + migrasi

Kunci baharu `modalityBridge*` disahkan Zod dalam `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*`, dan kumpulan `modalityBridgeAudio*` yang digunakan oleh Audio Bridge. Migrasi `141_modality_bridge_settings.sql` menyalin nilai `visionBridge*` legasi sedia ada ke kunci baharu yang sepadan (idempoten, tidak pernah menimpa nilai `modalityBridge*` yang ditetapkan oleh operator); kunci legasi kekal diterima sebagai sandaran baca untuk satu kitaran keluaran.

#### Pengepala ketelusan + statistik

Respons yang diubah oleh Describe membawa `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (dibina oleh `buildModalityBridgeHeader()` dalam `modalityBridge/bridgeStats.ts`, dicap oleh `withModalityBridgeHeader()` dalam `src/sse/handlers/chatHelpers.ts`). Permintaan yang dialih hala tidak mendapat **sebarang** pengepala — muatan tidak disentuh dan pertukaran model sudah kelihatan dalam medan `model` badan respons.

`GET /api/modality-bridge/stats` (pengesahan pengurusan, tahap sama dengan `GET /api/settings`) mengembalikan pembilang setiap modaliti dalam memori `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` untuk `vision`, `audio`, dan `video`. `averageLatencyMs` menggunakan `latencySamples`, bukan semua percubaan, sebagai penyebutnya; operasi tanpa pemasaan tidak merekakan sampel sifar milisaat. `bridged` kekal sebagai alias serasi ke belakang untuk penukaran yang berjaya; percubaan yang gagal tidak menambahnya. Pembilang ditetapkan semula apabila proses dimulakan semula mengikut reka bentuk (telemetri, bukan perakaunan).

#### Konfigurasi papan pemuka

Halaman papan pemuka khusus ialah `/dashboard/settings/modality-bridge`. Tab `Vision`, `Audio`, dan `Video` yang boleh dialamatkan melalui URL mengekalkan parameter pertanyaan semasa menukar nilai `tab`. Tab Vision mendedahkan pengaktifan, mod, pemilihan model (termasuk lalai automatik), prompting sedar-tugas, had lanjutan timeout/imej/panjang-huraian/cache, pembilang masa jalan, dan permintaan sampel yang dikawal. Tab Audio juga berfungsi: ia mendedahkan pengaktifan, pemilih model STT-sahaja dengan Auto, had timeout/klip-maksimum, pembilang audio, dan ujian sampel `input_audio`. Tab Video berfungsi: ia melaporkan keadaan masa jalan FFmpeg/ffprobe — salah satu daripada empat keadaan UI eksplisit (`unknown` semasa probe sedang berjalan atau tidak dapat diselesaikan, `restricted` pada hos papan pemuka bukan-loopback di mana probe dilangkau di pihak klien, `unavailable` setelah diprobe dan disahkan tiada, atau `available` dengan versi FFmpeg/ffprobe) — mengekalkan had dayakan/model/bingkai/video/timeout, menapis pemilih model kepada model berkebolehan vision, dan mendedahkan pembilang video.

Kad Vision Bridge dahulu di bawah tetapan AI ialah pautan keserasian ke halaman baharu; ia tidak lagi memiliki salinan kedua borang. Media Providers juga memautkan aliran kerja Image-to-Text dan Speech-to-Text ke tab Modality Bridge yang sepadan tanpa membuang playground Speech-to-Text sedia ada.

**Pintasan kemasukan gelung-sendiri:** apabila panggilan describe menghala melalui gelung-sendiri `/v1` OmniRoute sendiri (model penyedia bukan standard), sub-permintaan menghantar `x-omniroute-admission-bypass: internal` dan disahkan dengan kelayakan gelung-sendiri yang diselesaikan — sentinel `sk_omniroute` tempatan dalam mod tempatan, atau kunci env `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` yang dikonfigurasikan operator (#1350) supaya penggunaan `REQUIRE_API_KEY=true` masih boleh menjalankan panggilan describe. Pintasan hanya dihormati untuk kelayakan tepat tersebut, jadi klien luaran tidak boleh menggunakan pengepala untuk melangkau kemasukan.

Lalai legasi terletak dalam `src/shared/constants/visionBridgeDefaults.ts`; lalai mod/sedar-tugas/cache baharu dan penyelesai tetapan terletak dalam `src/shared/constants/modalityBridgeDefaults.ts`. Guardrail mendedahkan pilihan pembina `deps` supaya ujian boleh menyuntik pelaksanaan palsu `getSettings` dan `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Mencegat permintaan sembang yang membawa audio sebelum ia sampai ke sasaran yang tidak diketahui menerima input audio. Ia tidak pernah mengubah hala permintaan sembang: bahagian audio ditranskripsikan melalui titik hujung multipart serasi-OpenAI sedia ada dan model sembang yang dipilih meneruskan dengan transkrip teks.

Aliran:

1. Selesaikan `supportsAudio` melalui `getResolvedModelCapabilities()`. Metadata daftar penyedia yang eksplisit diutamakan, kemudian metadata model statik, kemudian `modalities_input` yang disegerakkan. Senarai input yang diisytiharkan tanpa `audio` ialah `false`; tiada bukti keupayaan kekal `null`. Kedua-dua `false` dan `null` mengaktifkan jambatan konservatif, manakala `true` memintasnya.
2. Selesaikan tetapan `modalityBridgeAudio*` dan ekstrak bahagian audio aras atas yang boleh disambung daripada setiap mesej melalui pengesan kongsi `detectMediaParts()`. Bentuk wayar yang disokong ialah `input_audio`, `audio_url`, dan `source.media_type: "audio/*"` OpenAI. Audio bersarang dikesan untuk penghalaan tetapi tidak dibuang oleh laluan sambungan. Kerja dihadkan oleh `modalityBridgeAudioMaxClips`; bahagian seterusnya dibiarkan tidak disentuh.
3. Hormati `provider/model` yang dikonfigurasikan, atau biarkan `selectAudioBridgeModel()` menelusuri `AUDIO_TRANSCRIPTION_PROVIDERS` dalam susunan katalog yang stabil dan memilih model pertama dengan kelayakan penyedia aktif yang boleh digunakan.
4. `callAudioTranscription()` menukar audio base64/data-URI kepada `file` multipart, atau memuat turun `audio_url` jauh melalui pengawal keluar khusus awam dengan penyematan DNS dan had 25 MB. Ia kemudian POST fail dan model terpilih ke gelung kendiri tempatan `/v1/audio/transcriptions`, disahkan dengan `resolveSelfLoopBearer()`. Laluan transkripsi sedia ada menjalankan carian kelayakan biasa, pengendalian cooldown/rate-limit, dan penghantaran penyedia.
5. Panggilan yang berjaya menggantikan bahagiannya dengan `[Audio N]: <transcript>`. Panggilan dijalankan dengan `Promise.allSettled`: kegagalan individu mengekalkan bahagian audio asal itu (kontrak #4012). Jika setiap panggilan gagal dan sasaran terbukti `supportsAudio === false`, bahagian menjadi `[Audio N]: (unavailable — no STT provider connected)` (kontrak #8430). Bagi sasaran tidak diketahui (`null`), hasil semua-gagal dibiarkan tidak disentuh. Sasaran teks sahaja yang terbukti tanpa kelayakan STT yang boleh digunakan menerima rintisan eksplisit yang sama tanpa membuat panggilan rangkaian.

Transkrip yang berjaya menggunakan cache LRU/TTL Modality Bridge seluruh proses. Kunci menggabungkan rujukan audio, label operasi `audio-transcription` yang stabil, dan model STT terpilih; kegagalan tidak pernah dicache. Cubaan audio mengemas kini pembilang kongsi `bridged`, `cacheHits`, `failures`, dan `lastUsedAt`. Respons yang diubah membawa
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; permintaan yang tidak disentuh tidak menerima segmen Audio Bridge.

Tetapan masa jalan disokong DB dan disahkan Zod:

| Kunci                         | Lalai   | Julat            |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | Auto atau STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

Cache kongsi kekal dikawal oleh `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Memintas bahagian video aras atas dalam `messages` Chat Completions dan `input` API Responses sebelum sasaran tanpa sokongan video asli yang diketahui dipanggil.
Bentuk yang disokong ialah `input_video`, `video_url`, `video_source`, URL HTTPS,
dan URI data `data:video/*;base64,...`. Nama fail biasa dalam teks tidak dianggap
sebagai video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) memiliki penelusuran permintaan,
semakan keupayaan/dasar, pengagregatan setiap permintaan, dan muatan respons.
Kerja setiap video — perolehan, cache hasil keseluruhan, penerangan jujukan bingkai
(yang menggabungkan sebarang transkrip audio yang diisytiharkan pemanggil), dan
metrik/pembatalan/pembersihan setiap cubaan — tersembunyi di sebalik `processVideoPart` dalam
`videoBridgePipeline.ts`, dipanggil sekali bagi setiap bahagian video dalam gelung `preCall`.
Modul itu juga mentakrifkan sempadan port eksplisit `VideoMediaBrokerPort`
(memperoleh bait dan mengekstrak bingkai tersampel), `VideoAudioTranscriptionPort`
(menggabungkan transkrip audio yang diisytiharkan pemanggil dengan kapsyen tersampel), dan
`VideoDrilldownPort` (sempadan kegigihan drill-down bingkai; belum disambungkan
ke `processVideoPart` — hanya laluan berasingan `/api/modality-bridge/video/drilldown`
yang menulis entri drill-down hari ini).

Laluan permintaan awam `/v1` tidak pernah mengimport atau memanggil subproses. Video
jauh dimuat turun di bawah had 50 MiB; video base64 sebaris mempunyai
had konservatif 36 MiB ternyah setiap video supaya sampul model/mesej/pembingkaian
boleh kekal dalam had kemasukan permintaan JSON awam 50 MiB. Anggaran
panjang sebaris dan saiz ternyah disemak sebelum peruntukan. HTTPS
diperlukan pada URL jauh awal dan setiap ubah hala, menggunakan
pengawal keluar khusus awam sedia ada dengan penyematan DNS. Bait kemudian melintasi
sempadan broker dalaman tepat `POST /api/modality-bridge/video/extract`. Laluan itu
ialah kedua-dua `LOCAL_ONLY` dan `SPAWN_CAPABLE`, hanya menerima permintaan
gelung-balik dipercayai yang disahkan setiap proses, dan tidak pernah menerima URL, laluan sistem fail, boleh laku,
atau senarai argumen. Saluran saiz badan API dan pembaca badan inkremental
pengendali secara bebas menguatkuasakan had input broker 50 MiB. Baris gilir berbatasnya menjalankan
satu pengekstrakan pada satu masa, membenarkan empat kerja tertangguh, dan mengehadkan input tertangguh pada
100 MiB.

Di dalam broker, `ffprobe` membaca fail tempatan peribadi; senarai putih format tetap mengecualikan format senarai main dan manifes. Bagi bekas keluarga MOV yang dibenarkan, rujukan data MOV luaran kekal dilumpuhkan secara lalai, dan perintah tetap tidak memilih untuk menggunakannya. Kedua-dua `ffprobe` dan `ffmpeg` menggunakan senarai putih protokol hanya `file`, satu benang, tatasusunan argumen tetap, tiada shell, dan fail boleh laku yang diselesaikan daripada `PATH`. Strim kulit gambar terlampir bukan calon boleh dimainkan. Semua strim boleh dimainkan mesti memenuhi had, dan strim lalai eksplisit diutamakan sebelum sandaran indeks terendah deterministik. Video dihadkan kepada 600 saat, 8,192 piksel setiap dimensi, dan 33,554,432 piksel sumber. FFmpeg mengambil sampel 1–16 bingkai JPEG titik tengah, mengecilkan tepi panjang kepada paling banyak 1,024 piksel tanpa membesarkan input yang lebih kecil, dan tidak sekali-kali menerima URL. Pensampelan ialah `uniform` secara lalai. Dasar `scene_aware` pilihan dan `segment_aware` eksperimen melakukan satu laluan FFmpeg tetap tambahan terhadap strim tempatan yang telah disahkan, memilih cap masa babak `showinfo` terbatas, dan beralih secara deterministik kepada titik tengah seragam yang sama apabila pengesan gagal, tamat masa, output cacat, atau set calon kosong. Mod peka segmen memperuntukkan sampel titik tengah secara berkadar kepada selang babak yang disahkan; bukti peka segmen dan tingkah laku sandaran diperincikan di bawah. Had keras 16 bingkai dikenakan selepas pemilihan dalam setiap dasar. Apabila permintaan peka babak mempunyai bajet hanya satu bingkai, ia menggunakan titik tengah seragam bagi tetingkap video penuh atau fokus yang aktif dan melaporkan `policyEffective: uniform`: satu bingkai babak terpilih tidak boleh mengekalkan kedua-dua hujung temporal. Pemanggil boleh secara pilihan memberikan tetingkap fokus terhingga (`start`/`end` saat); sempadan dikapit kepada tempoh media, tetingkap terbalik atau bukan terhingga ditolak, dan semua dasar pensampelan dilakukan hanya dalam selang ternormal. Tetingkap yang terhasil dimasukkan dalam metadata pensampelan dan dalam awalan penerangan tidak dipercayai supaya model hiliran dapat membezakan petikan fokus daripada garis masa penuh.

Fokus kapsyen semantik ialah tetapan berasingan dan eksplisit. Mod analisis `full` lalai mengekalkan gesaan bingkai sedia ada dan tidak pernah menghantar teks permintaan kepada model kapsyen. Dalam mod `focused`, komponen bridge hanya membaca `text`/`input_text` terbaharu yang tidak kosong dan ditulis oleh pengguna daripada bekas Chat atau Responses yang sama, menormalkannya kepada NFC, meruntuhkan aksara kawalan dan ruang putih, dan mengehadkannya kepada 500 titik kod Unicode. Hasil kosong beralih kepada gesaan `full` yang tepat. Petunjuk yang boleh digunakan diserialkan sebagai JSON dalam blok konteks pengguna tidak dipercayai khusus dan hanya boleh mengutamakan butiran yang boleh diperhatikan; ia tidak boleh mengatasi amaran berasingan supaya tidak mengikut arahan yang kelihatan atau kedengaran dalam media. Fokus tekstual tidak pernah menyimpulkan `start`/`end` atau mengubah pensampel temporal.

#### Bukti segmen struktur FU-07

`segment_aware` menggunakan satu laluan pra-analisis terbatas terhadap strim video tempatan yang telah disahkan. Rantaian penapis tetap mula-mula mengecilkan kepada paling banyak 320 piksel lebar, mengesan perubahan babak dan selang beku, kemudian mengambil sampel pada 1 bingkai sesaat untuk kabur, luma purata, dan maklumat spatial/temporal. Laluan ini dihadkan kepada 600 sampel struktur, satu benang FFmpeg/penapis, senarai putih protokol hanya `file` dan senarai putih bekas yang sama, had output proses 1 MiB, dan paling banyak 30 saat dalam pembatalan/tarikh akhir bersama broker. Ia tidak pernah menerima perintah, penapis, laluan, atau URL daripada permintaan.

Nilai struktur ialah bukti pensampelan deterministik, bukan pemahaman video semantik. Ia tidak menyimpulkan subjek, tindakan, kapsyen, pertuturan, atau niat pengguna. Sempadan babak dan beku membentuk segmen; liputan beku, kabur, pendedahan, perincian spatial, dan perubahan temporal hanya mempengaruhi cara bajet 1–16 bingkai sedia ada diperuntukkan. Segmen yang beku sepenuhnya dihadkan kepada satu bingkai, manakala segmen tidak beku bersaing untuk baki bajet. Apabila sempadan melebihi bilangan bingkai, liputan garis masa seragam dikekalkan supaya potongan awal yang pantas tidak dapat menyembunyikan segmen hujung yang panjang. Sempadan babak dalam resolusi analisis 1 saat bagi sempadan beku digabungkan.

Penapis yang tiada, bukti cacat/kosong, ralat pengesan, atau tamat masa pra-analisis terbatas gagal terbuka kepada dasar titik tengah seragam yang tepat. Pembatalan pemanggil atau tarikh akhir broker tidak gagal terbuka: ia menamatkan subproses yang sedang berjalan, menghalang pengekstrakan bingkai kemudian, dan pokok sementara peribadi dialih keluar dalam `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` menjana fixture FFmpeg sebenar yang deterministik untuk penjimatan panggilan kapsyen selepas dedup, peruntukan bajet gerakan padat, bukti kabur/pendedahan/SI-TI, potongan pantas dengan ekor panjang, dan positif palsu pudar beransur-ansur. Ia merekodkan masa dinding pra-analisis dan, jika `/usr/bin/time` tersedia, CPU proses anak dan RSS puncak. Semakan kualitinya hanyalah oracle struktur. Kualiti model kapsyen sebenar kekal `HOLD` kerana harness ini tiada titik akhir dibenarkan atau penilai beku. Penjimatan kewangan juga kekal `HOLD` melainkan `--caption-cost-per-call-usd` membekalkan anggaran positif eksplisit setiap panggilan; skrip tidak sekali-kali memalsukan mana-mana hasil.

Setiap bingkai dihadkan kepada 4 MiB, semua bingkai mentah secara keseluruhan kepada 23 MiB, dan respons broker bersiri kepada 32 MiB. Direktori sementara persendirian dialih keluar dalam `finally`. OmniRoute tidak menyertakan FFmpeg dan tidak menerima laluan boleh laku tersuai. Sebelum penjanaan kapsyen, jambatan menggunakan proses penyahduplikasian visual yang konservatif: setiap JPEG dikecilkan kepada penimbal skala kelabu 16×16 dan dibandingkan hanya dengan bingkai terakhir yang dikekalkan. Untuk belanjawan kapsyen yang diminta melebihi satu bingkai, pengekstrakan menyediakan kumpulan calon terhad sehingga dua kali ganda belanjawan tersebut dan tidak pernah melebihi 16 bingkai. Had yang diminta hanya digunakan selepas penyahduplikasian, dengan calon pertama dan terakhir yang dipilih dikekalkan semasa penipisan akhir apabila belanjawan sekurang-kurangnya dua. Dasar berversi `grayscale-16x16-mean-cells-v2` menggunakan nilai yang lebih besar antara delta luma purata dengan nisbah sel imej kecil yang delta ternormalnya sekurang-kurangnya 0.05. Ambang pendua ialah pemalar 0.04, dipilih untuk kebolehramalan dan bukannya didedahkan sebagai tetapan masa jalan. Isyarat sekunder berkontras tinggi ini mengekalkan pergerakan kecil dan perubahan teks yang kelihatan, yang boleh disembunyikan oleh perbandingan berasaskan purata sahaja. Ralat pembanding atau penyahkod dibiarkan terbuka dan liputan dikekalkan. Metadata output membezakan calon yang diekstrak, bingkai yang berjaya digunakan, dan pendua visual yang digugurkan.

Bahagian video yang ditandai secara eksplisit boleh meminta helaian kenalan dengan cap masa. Jambatan membina grid JPEG dengan maksimum 4 lajur dan 16 bingkai. Setiap sel 512 piksel menerapkan cap masa sumbernya pada jalur bawah berkontras tinggi, manakala cap masa yang sama dikekalkan dalam metadata teks untuk perkaitan dan audit hiliran. JPEG lengkap kekal dihadkan kepada 32 MiB. Jika `sharp` tidak dapat menyahkod atau menggubah grid, jambatan kembali menggunakan bingkai JPEG individu; pembatalan oleh klien masih disebarkan melalui operasi helaian tersebut.

Bukti promosi sengaja dipisahkan daripada penanda aras mikro penggubahan sintetik. `scripts/perf/video-bridge-contact-sheet-eval.ts` mentakrifkan abah-abah A/B berversi skema untuk model penglihatan sebenar yang serasi dengan OpenAI. Ia mengukur token yang dilaporkan oleh penyedia, kependaman masa sebenar hujung ke hujung (termasuk penggubahan helaian), bilangan panggilan model, dan pengekalan fakta yang ditakrifkan oleh manifes. Respons model mentah tidak ditulis ke dalam laporan; hanya ringkasan SHA-256 dan ID fakta yang sepadan dikekalkan. Abah-abah tidak membuat sebarang panggilan rangkaian atau panggilan model berbayar melainkan `--execute-real` diberikan serta `--model`, `OMNIROUTE_BASE_URL`, dan `OMNIROUTE_API_KEY` dikonfigurasikan. Tanpa pelaksanaan sebenar yang eksplisit itu, keputusan yang boleh dibaca mesin kekal `HOLD`; pengukuran muatan/bilangan panggilan sintetik sahaja bukanlah bukti promosi.

Pemanggil boleh melampirkan tatasusunan pilihan `transcript.cues` pada bahagian video yang disokong apabila mereka telah memiliki teks yang dijajarkan. Setiap kiu mesti mengandungi `text`, selang `start`/`end` terhingga dalam tempoh yang disiasat, dan `source` yang disenaraikan dalam senarai dibenarkan (`client`, `embedded`, atau `audio-bridge`); `confidence` lalai kepada `1` dan mesti kekal antara `0` dengan `1`. Kiu pendua tepat digabungkan. OmniRoute tidak pernah memulakan transkripsi daripada metadata ini: kiu yang disahkan disalin ke dalam hasil yang dihuraikan bersama sumber, keyakinan, dan selang, serta dipaparkan sebagai pemerhatian yang tidak dipercayai bersama kapsyen bingkai. Teks yang tidak sah, di luar julat, atau tanpa asal-usul ditolak dan bukannya dicampurkan ke dalam aliran kapsyen. Kedua-dua saluran transkrip badan permintaan menormalkan asal-usul yang dibekalkan kepada `client`, termasuk label `embedded` atau `audio-bridge` yang diisytiharkan sendiri. Hanya penyesuai milik pelayan boleh menetapkan label dipercayai tersebut melalui argumen kod sahaja `trustedSource`; medan JSON permintaan tidak boleh mencapai argumen itu. Teks transkrip kekal sebagai kandungan tidak dipercayai yang diperoleh daripada media, tanpa mengira asal-usulnya, dan tidak sekali-kali boleh menentukan kebenaran akses.

Pemanggil lanjutan boleh menyediakan trek `audioTranscript` untuk video yang sama; ia dianggap sebagai teks yang disediakan oleh klien, bukannya bukti transkripsi pelayan. Titik penyepaduan menjalankan pemerhatian visual dan audio di bawah satu tarikh akhir dan isyarat pembatalan, menyusunnya pada garis masa yang sama, menggabungkan pendua tepat, dan melaporkan hasil separa apabila hanya satu pihak berjaya. `audioTranscript` yang tidak sah merosot kepada hasil separa tersebut — huraian visual dikekalkan dan cabang audio merekodkan kod kegagalan yang disanitasi — dan bukannya menggagalkan keseluruhan video. Ketersediaan setiap cabang, bendera separa, dan kod kegagalan yang disanitasi dikekalkan dalam hasil yang dihuraikan, dalam metadata pagar keselamatan (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), dalam metadata cache hasil, dan dalam pembilang penyepaduan jambatan. Laluan Video Bridge lalai tidak memanggil pertuturan-ke-teks atau memuat turun salinan media kedua; tanpa trek eksplisit tersebut, ia kekal sebagai video sahaja.

**Pengekalan transkrip (#12150 P1).** Ini terpakai secara automatik apabila
Video Bridge (yang penggunaannya sendiri perlu dipilih secara eksplisit) memaparkan kiu transkrip — tiada bendera
pengekalan berasingan. Apabila sesuatu permintaan memaparkan mana-mana kiu transkrip (`transcript`
yang diisytiharkan oleh pemanggil atau `audioTranscript` yang digabungkan), pagar keselamatan menandakannya sebagai
`videoBridgeObserved` dan menghasilkan salinan bayang penerangan video yang telah disunting —
paparan serupa yang menggantikan badan teks bebas setiap kiu dengan
`[redacted-video-transcript]`, yang dibina dengan menggantikan medan kiu berstruktur
sebelum rentetan dihimpunkan (bukan dengan menghuraikan teks yang telah diratakan, supaya tiada
kandungan kiu — sama ada bersifat adversarial atau biasa, termasuk badan yang mengandungi `]` seperti
`[inaudible]`/`[music]` — boleh kekal). Badan permintaan log panggilan yang disimpan menggantikan
setiap bahagian teks yang berasal daripada video dengan salinan bayang yang telah disunting itu, yang dipadankan berdasarkan
kesamaan kandungan; sauh `fullText` dibaca semula daripada muatan pagar keselamatan prapanggilan yang
telah lengkap, supaya padanan masih berjaya selepas pagar keselamatan dalam rantaian yang berikutnya (penyamar PII dan
kelayakan, keutamaan 10/95) menulis semula teks penerangan secara setempat dan
selepas suntikan gesaan sistem/serah tugas/memori membentuk semula tatasusunan mesej. Badan
yang dihantar ke hulu kepada model tidak berubah. Permintaan yang diperhatikan juga tidak mengisi
sebarang Memory tahan lama (pengekstrakan yang berasal daripada permintaan dan respons kedua-duanya dilangkau),
supaya balasan model sendiri tidak boleh menggemakan teks transkrip ke dalam Memory.

**Medan video mentah (#12430).** Apabila jambatan didayakan dan sokongan video natif tidak diketahui atau tiada, medan `transcript`/`audioTranscript` yang ditakrifkan turut mengaktifkan `videoBridgeObserved`, walaupun selepas kegagalan penerangan atau had `maxVideos`. `null` dan rentetan kosong turut dikira; medan yang tiada dan metadata bukan video tidak dikira. Salinan yang dikekalkan menyunting medan ini atau mengecualikan permintaan, manakala cache/Memory dipintas.

Pada laluan sandaran tersebut, kiu pemanggil yang sah menjadi bahagian `text`/`input_text`
yang disokong dan bukannya medan penyedia bukan standard. Kedua-dua trek yang dibekalkan oleh permintaan
kekal sebagai pemerhatian `client` yang tidak dipercayai, dengan amaran jelas bahawa video
tidak diterangkan dan cap masa tidak disahkan terhadap media. Bajet sedia ada sebanyak
256 kiu/64 KiB secara keseluruhan dan bagi setiap kiu terpakai merentasi kedua-dua trek secara bersama;
cap masa mesti mematuhi had maksimum 600 saat broker dan sebarang tetingkap fokus yang
dibekalkan. Trek yang tidak sah dibuang, bukannya dimajukan sebagai teks sewenang-wenangnya; trek saudara yang sah
masih boleh digunakan melainkan bajet gabungannya dilebihi. Medan nol/kosong
tidak menambahkan teks. Sandaran ini tidak menambahkan pengambilan media atau transkripsi.
Medan sambungan transkrip dialih keluar daripada pembawa video sandaran dan objek
`video_url`/`source` miliknya. Senarai dibenarkan pada protokol OpenAI kekal ketat; pembawa video
natif yang tidak diketahui kekal tersedia dan sasaran teks sahaja yang diketahui mengekalkan penanda selamat.
Salinan bayang penyuntingan berstruktur melindungi teks transkrip yang ditambahkan, manakala
permintaan asal milik pemanggil kekal tidak berubah. Sasaran yang menyokong ciri natif dan
jambatan yang dinyahdayakan mengekalkan tingkah laku pintasan sedia ada.

Salinan tambahan yang dikekalkan menggunakan isyarat permintaan diperhatikan yang sama. Petikan mentah
permintaan klien sebelum pagar keselamatan, permintaan belum selesai dalam memori dan log
permintaan ditolak awal menggantikan medan transkrip dalam bahagian video secara berstruktur;
gesaan rentetan yang disintesis oleh peringkat talian paip dan serah tugas konteks disunting
pada sink badan permintaan yang disimpan. Penanda `video_content_removed` yang disimpan
menyebabkan penerusan `previous_response_id` gagal secara tertutup dan bukannya membina semula
teks yang sengaja dibuang. Jika permintaan yang diperhatikan kehilangan
salinan bayang penyuntingan bagi setiap bahagiannya sebelum pengelogan, atau walaupun hanya satu daripada beberapa salinan bayang video
gagal dipadankan selepas mutasi permintaan yang berikutnya, badan permintaan yang dikekalkan akan
dikecualikan sepenuhnya dan bukannya mengekalkan transkrip yang hanya disunting sebahagian.

Bagi permintaan yang diperhatikan, respons model mungkin memetik mana-mana bahagian
transkrip tanpa sempadan kiu berstruktur. Oleh itu, `responseBody` log panggilan
yang disimpan digantikan dengan penanda pengecualian; artifak talian paip terperinci (yang boleh
merangkumi badan hulu/klien dan cebisan strim) tidak dikekalkan. Cache semantik,
idempotensi dan main semula penaakulan memintas bacaan dan penulisan bagi permintaan tersebut.
Permintaan penyedia dan respons yang kelihatan kepada klien kekal tidak berubah. Bait keepalive awal
disalirkan keluar daripada penimbal sementara apabila artifak terperinci dikecualikan.
Amaran EventStream Kiro yang rosak hanya melaporkan kiraan bait muatan, dan tidak sekali-kali
melaporkan kandungannya atau ralat mentah penghurai JSON.
Ini tidak mendakwa bahawa setiap diagnostik penyedia/pemalam yang tidak berkaitan telah
diaudit; penyisiran sink yang dikekalkan secara lebih luas dijejaki dalam #11658.

Kitaran hayat dalaman `/api/modality-bridge/video/drilldown` ialah substrat cache berasingan
yang disahkan melalui gelung balik/token. Setiap operasi juga memerlukan ID prinsipal legap
yang kanonik. Sebelum pemanggil pengeluaran didayakan, ia mesti
menerbitkan ID tersebut daripada penyewa yang disahkan dan tidak sekali-kali memajukan
nilai yang dipilih oleh klien. Kekunci cache mengikat prinsipal tersebut kepada ID sesi dan
rujukan video kanonik, hanya menyimpan kekunci terbitan SHA-256 masing-masing dan mengehadkan skop bacaan
serta pemadaman kepada prinsipal yang sama. Cache menyimpan paling banyak 16 bingkai JPEG
terbitan bagi setiap entri, meluputkannya selepas sepuluh minit dan menyokong bacaan `start`/`end`
yang dibatasi atau pemadaman sesi secara eksplisit.

Setiap prinsipal dihadkan kepada 16 entri dan 64 MiB data JPEG kanonik. Had tersebut
adalah bebas daripada had global 64 entri/256 MiB: tekanan kuota prinsipal
hanya menyingkirkan entri yang paling lama tidak digunakan bagi prinsipal itu sebelum penyingkiran LRU
global dipertimbangkan. Entri yang telah luput disingkirkan daripada perakaunan prinsipal dan
global semasa aktiviti cache, manakala pembatalan dan kegagalan pengesahan tidak
menyimpan penggantian separa.

Cache menolak Base64 bukan kanonik, padding berlebihan, media bukan JPEG, JPEG cacat atau terpotong, dan JPEG yang menghasilkan amaran semasa nyahkod `sharp` imej penuh terbatas. Ia mengekod semula setiap imej yang diterima sebagai JPEG kanonik, memperoleh lebar dan tinggi daripada bait yang dinyahkod dan bukannya mempercayai medan pemanggil, serta membuang sebarang bait poliglot di hujung dan bukannya mengekalkannya. Hanya penimbal termampat kanonik terbatas dicaj kepada kedua-dua kuota. Had wayar JSON termasuk overhed Base64 untuk siling input ternyahkod 32 MiB. Setiap derivasi yang disimpan merekodkan format/resolusi JPEG yang disahkan, dasar persampelan, versi derivasi, masa penciptaan, cincang kandungan yang dikira pelayan, dan rujukan induk yang dicincang serta cincang kandungan induk pemanggil yang dipercayai. Pembatalan diperiksa antara fasa nyahkod/cincang tak segerak sebelum komit cache atomik.

Tranche ini belum lagi menyambungkan pengeluar produksi ke laluan dan tidak menyediakan pemilihan varian berbilang resolusi. Oleh itu, laluan permintaan Video Bridge telus tidak menanggung kerja tambahan, manakala derivasi prinsipal terikat penyewa dan kitaran hayat berbilang resolusi FU-08 penuh kekal sebagai kerja susulan eksplisit dan bukan didokumentasikan sebagai tingkah laku lengkap.

Bingkai diberi kapsyen secara berurutan dengan model Video yang dikonfigurasikan. Penggantian Video yang kosong mewarisi tetapan Vision; jika kedua-duanya kosong, penghala automatik Vision memilih model berkeupayaan vision yang berkesan. Kapsyen yang berjaya menggantikan bahagian asal dengan awalan stabil `[Video description:` yang juga menandakan teks itu sebagai pemerhatian terbitan media yang tidak dipercayai dan memberitahu model hiliran supaya tidak mengikut arahan yang terdapat dalam media. Kunci cache kapsyen bingkai termasuk bait JPEG, prompt, cap masa, dan model berkesan; hanya kapsyen yang berjaya dimasukkan ke cache. Entri cache mengekalkan model pengeluar sebenar yang berjaya, termasuk model sandaran; jambatan melaporkan `mixed` apabila bingkai berbeza dihasilkan oleh model berbeza. Cache hit menggunakan semula identiti pengeluar itu dan bukannya melabel semulanya sebagai pelan penghalaan yang diminta. Cache hasil video penuh berkunci pada setiap input yang mengubah output — prompt, model berkesan, dasar persampelan, kiraan bingkai, mod analisis semantik, cap jari SHA-256 bagi petunjuk fokus ternormal, tetingkap fokus, `transcript`, `audioTranscript`, dan flag lembaran kontak — jadi mengubah mana-mana dimensi tersebut ialah cache miss, bukan penggunaan semula basi. Versi dasar penyahgandaan visual, ambang, dan kiraan bingkai calon terbatas juga eksplisit dalam kunci dan metadata cache hasil; oleh itu, perubahan dasar tidak boleh menggunakan semula deskripsi video penuh yang basi. Metadata cache hasil v4 mengekalkan mod dan cap jari, tidak sekali-kali tugas pengguna mentah. Metadata guardrail melaporkan kedua-dua mod analisis yang diminta dan berkesan; mod `focused` yang diminta tanpa teks pengguna yang boleh digunakan dilaporkan sebagai `full` secara berkesan.

Guardrail mengekstrak setiap bahagian video yang disokong tetapi menerangkan tidak lebih daripada `modalityBridgeVideoMaxVideos`. Bagi sasaran yang terbukti mempunyai `supportsVideo === false`, video yang gagal dan melebihi had menjadi penanda teks selamat eksplisit supaya tiada video mentah kekal. Apabila keupayaan tidak diketahui, bahagian tersebut mengekalkan pembawa video masing-masing; sebarang transkrip sandaran mengikut penukaran teks terbatas di atas. Sasaran dengan `supportsVideo === true` memintas jambatan. Isyarat pembatalan permintaan klien merambat melalui muat turun, baris gilir broker, subproses, dan panggilan kapsyen; pembatalan berhenti antara video dan tidak pernah gagal terbuka kepada media mentah.

Tetapan masa jalan disokong DB dan disahkan Zod:

| Kunci                               | Lalai       | Julat / tingkah laku                                                                                             |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Masa jalan pilihan, pilih masuk                                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` mengekalkan kapsyen generik; `focused` menggunakan konteks pengguna terkini terbatas dan tidak dipercayai |
| `modalityBridgeVideoModel`          | `""`        | Warisi model Vision Bridge                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                             |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, atau `segment_aware` berkadar; kegagalan pengesan kembali kepada `uniform`             |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                              |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                   |

Nilai tamat masa Video legasi yang disimpan melebihi 120 saat dihadkan kepada tarikh akhir broker; penulisan tetapan baharu melebihi had tersebut ditolak. `GET /api/modality-bridge/video/runtime` memerlukan lokaliti gelung balik bercap dipercayai sebelum pengesahan atau pemeriksaan masa jalan, kemudian memerlukan pengesahan pengurusan. Ia mengembalikan hanya `available`, versi FFmpeg/ffprobe yang disanitasi, dan sebab tetap apabila masa jalan tidak tersedia. Titik akhir pengekstrakan dalaman bukan API muat naik awam: ketepuan baris gilir mengembalikan `503` serta `Retry-After`, pemutusan pemanggil mengembalikan `499`, dan tarikh akhir broker tetap mengembalikan `504`. Respons yang ditukar menambah `video->text;model=<visionModel>;parts=<videos>` pada pengepala pusat `x-omniroute-modality-bridge` tanpa membuang segmen Vision atau Audio.

### PII Masker (`piiMasker.ts`)

Berjalan pada **kedua-dua** peringkat.

- **`preCall`** mengklon muatan, menelusuri `system`, `messages`, `input`, dan
  `prompt` (termasuk item rentetan biasa), dan menggunakan `processPII()` (daripada
  `@/shared/utils/inputSanitizer`) pada medan `content`/`text` jenis rentetan. Apabila
  `PII_REDACTION_ENABLED=true`, PII yang dikesan akan disamarkan dalam muatan
  keluar. Ini tidak bergantung pada `INPUT_SANITIZER_MODE` (yang hanya mengawal
  dasar suntikan prompt). Apabila penyamaran dimatikan, panggilan itu merekod kiraan
  pengesanan tanpa menulis semula kandungan.
- **`postCall`** mengklon secara mendalam respons, menjalankan `sanitizePIIResponse()` serta
  penyamaran bentuk Responses-API (`maskResponsesOutput` — merangkumi
  `output_text` dan `output[].content[].text`). Jika berlaku sebarang penyamaran,
  respons yang diubah menggantikan yang asal.

Pagar keselamatan ini tidak pernah menyekat; ia hanya membuat anotasi (`meta.detections`,
`meta.redacted`) atau menulis semula.

#### Pemilihan mengikut jenis, corak tersuai dan pembilang pengesanan

**Papan Pemuka → Tetapan → Keselamatan → Penyamaran PII** memilih _apa_ yang disamarkan. Ia
tidak menghidupkan penyamaran: itu masih lagi `PII_REDACTION_ENABLED` (permintaan) dan
`PII_RESPONSE_SANITIZATION` (respons + SSE), kedua-duanya dimatikan secara lalai.

- **Pemilihan mengikut jenis** — id terbina dalam disenaraikan dalam
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Tidak ditetapkan bermaksud setiap
  jenis (tingkah laku sebelum tetapan ini wujud). Corak `ssn_us` enjin permintaan
  dipetakan kepada `ssn`. Templat (Minimal, Standard, Financial,
  Brazilian, USA, Full) hanya mengisi kotak semak dalam UI.
- **Corak tersuai** — sehingga 20 corak regex atau wildcard (`*` = sehingga 64
  aksara bukan ruang putih, `?` = satu). Padanan menjadi `[CUSTOM_REDACTED]`.
  Setiap corak melalui `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): paling banyak 500 aksara, flag terhad
  kepada `g i m s u`, mesti dapat dikompil, mesti lulus `safe-regex` (backtracking
  katastrofik), dan tidak boleh memadankan rentetan kosong atau pemegang tempat penyamaran.
  Corak yang gagal akan ditolak semasa disimpan dan semasa diuji, dan baris tersimpan
  yang gagal akan dilangkau semasa runtime dan bukannya dikompil. Corak tersuai hanya
  berjalan semasa penyamaran dihidupkan.
- **Pembilang pengesanan** — kiraan mengikut jenis (nilai yang dipadankan tidak pernah
  disimpan), disimpan dalam memori dan ditetapkan semula apabila dimulakan semula
  (`src/lib/pii/piiDetectionStats.ts`). Ia hanya meningkat semasa penyamaran dihidupkan.

Tetapan ini disimpan dalam jadual `key_value` (ruang nama `pii_settings`,
`src/lib/db/piiSettings.ts`) dan dibaca melalui cache 1 s. API:

| Kaedah | Laluan                   | Tujuan                                                                                 |
| ------ | ------------------------ | -------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Keadaan bendera, `enabledTypes`, `customPatterns`, pembilang pengesanan                |
| `PUT`  | `/api/settings/pii`      | Gantikan `enabledTypes` (`null` = semua) dan/atau `customPatterns`                     |
| `POST` | `/api/settings/pii/test` | Larian percubaan satu corak terhadap sampel paling banyak 8 KB; tiada apa-apa disimpan |

Ketiga-tiganya memerlukan pengautentikasian pengurusan dan mengesahkan badan permintaan dengan Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Suntikan Prompt (`promptInjection.ts`)

Mengesan struktur bermusuhan dalam kandungan yang dibekalkan pengguna dan melaksanakan
dasar yang dikonfigurasikan. Tingkah laku dikawal oleh pemboleh ubah persekitaran dan pilihan
konstruktor:

| Tetapan        | Pemboleh ubah persekitaran                                                                             | Lalai  | Kesan                                                                                                                                                                                                        |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dihidupkan     | `INPUT_SANITIZER_ENABLED`                                                                              | `true` | Apabila `false`, pagar keselamatan memintas.                                                                                                                                                                 |
| Mod            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                        | `warn` | Dasar suntikan: `block`, `warn`, atau `log`. (`redact` diterima untuk keserasian ke belakang tetapi **tidak** membuang teks suntikan; penulisan semula PII permintaan dikawal oleh `PII_REDACTION_ENABLED`.) |
| Ambang sekatan | `blockThreshold` pilihan / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | Keterukan minimum yang diperlukan untuk menyekat. Tahap sederhana hanya untuk pemerhatian secara lalai.                                                                                                      |

**Keutamaan mod** (`getMode`): pemanggil `options.mode` →
`INJECTION_GUARD_MODE` **pengatasan bendera ciri DB** (Papan Pemuka → Tetapan →
Bendera Ciri) → env `INJECTION_GUARD_MODE` → env `INPUT_SANITIZER_MODE` →
`warn`. Oleh itu, pengatasan papan pemuka mengatasi pemboleh ubah env, jadi UI Bendera
Ciri mengawal pagar yang sedang berjalan secara langsung (tanpa mula semula). Bacaan DB adalah selamat gagal:
jika ia ralat, pagar kembali kepada tingkah laku berasaskan env, dan apabila tiada
pengatasan ditetapkan, tingkah laku adalah sama dengan penyelesaian env sahaja.

Sumber pengesanan:

1. `sanitizeRequest()` daripada `@/shared/utils/inputSanitizer` (set pengesan
   dikongsi yang digunakan di tempat lain dalam saluran paip).
2. `DEFAULT_GUARD_PATTERNS` terbina dalam (pada masa ini `system_override_inline` dan
   `markdown_system_block`, kedua-duanya keterukan `high`).
3. `customPatterns` pilihan yang dihantar melalui pilihan konstruktor (rentetan, regex,
   atau rekod `{ name, pattern, severity }`).

Apabila `mode === "block"` **dan** sekurang-kurangnya satu pengesanan memenuhi ambang
keterukan, `preCall` mengembalikan `{ block: true, message: "Request rejected:
suspicious content detected" }`. Dalam mod `warn`/`log`, pagar keselamatan merekodkan log tetapi
membenarkan panggilan tersebut. Pembantu dikongsi `evaluatePromptInjection()` turut dieksport
untuk pemanggil yang perlu menilai gesaan tanpa melalui daftar.

**Had imbasan (v3.8.20):** pengesan hanya memeriksa **16 KB pertama** daripada
teks gesaan yang digabungkan — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bait) dalam
`src/shared/utils/inputSanitizer.ts`. Kedua-dua `detectInjection()` dan
`evaluatePromptInjection()` menggunakan `slice(0, MAX_INJECTION_SCAN_BYTES)` sebelum menjalankan
gelung corak. Arahan suntikan terletak berhampiran bahagian atas input, maka ini
mengehadkan penggunaan CPU/GC regex pada muatan bersaiz beratus-ratus KB tanpa melemahkan pengesanan (rujuk
#3932, #4041).

### Penyamar Bukti Kelayakan (`credentialMasker.ts`)

Berjalan pada **kedua-dua** peringkat, paling akhir dalam rantaian lalai (keutamaan `95`). Menyunting
corak kunci API / token rahsia yang diketahui umum daripada muatan keluar (kandungan
mesej, argumen panggilan alat, hasil alat) **dan** respons penyedia, supaya
bukti kelayakan yang ditampal ke dalam gesaan (atau digemakan semula oleh hasil alat) tidak dibocorkan
kepada penyedia huluan atau kembali kepada klien.

- **Ikut serta sahaja**, konvensyen yang sama seperti penyuntingan PII (bersebelahan Peraturan Tegas #20):
  dilumpuhkan melainkan `settings.credentialRedactionEnabled === true` **atau**
  `CREDENTIAL_REDACTION_ENABLED=true`. Apabila dimatikan, pagar keselamatan tidak melakukan apa-apa —
  ia tidak pernah menyekat dan tidak pernah menulis semula.
- `redactCredentials()` menelusuri keseluruhan pepohon muatan/respons (`walkValue()`,
  selamat daripada pencemaran prototaip, selamat daripada kitaran melalui `WeakSet`) dan menggantikan padanan dengan
  ruang letak `[REDACTED:<type>]`, dengan mengklon hanya cabang yang benar-benar
  berubah.
- `CREDENTIAL_PATTERNS` merangkumi kunci penyedia LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), token VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), kunci pembayaran (Stripe, Square), kunci
  awan (kunci akses AWS, Twilio, SendGrid, Mailgun), kunci peribadi / JWT,
  rentetan sambungan yang mengandungi bukti kelayakan (`mongodb://user:pass@...`, dan sebagainya), serta
  corak nilai pengepala generik `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Kunci berbentuk pengepala (`authorization`, `x-api-key`, `api-key`,
  `apikey`) disunting secara berstruktur (nilai sahaja, awalan skema seperti
  `Bearer `/`Basic ` dikekalkan), bukannya melalui regex teks generik.
- Pagar keselamatan tidak pernah menyekat; ia hanya menulis semula (`modifiedPayload` /
  `modifiedResponse`) dan menganotasi (`meta.credentialsRedacted`, `meta.count`).

Pelindung regresi: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrak Asas (`base.ts`)

```typescript
class BaseGuardrail {
  enabled: boolean;
  name: string;
  priority: number;

  constructor(name: string, options?: { enabled?: boolean; priority?: number });

  async preCall(payload: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;

  async postCall(response: unknown, context: GuardrailContext): Promise<GuardrailResult | void>;
}

interface GuardrailResult<TValue = unknown> {
  block?: boolean; // true memintas baki rantaian
  message?: string; // dipaparkan apabila menyekat
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // dikembalikan oleh preCall untuk menulis semula permintaan
  modifiedResponse?: TValue; // dikembalikan oleh postCall untuk menulis semula respons
}

interface GuardrailContext {
  apiKeyInfo?: Record<string, unknown> | null;
  disabledGuardrails?: string[] | null;
  endpoint?: string | null;
  headers?: Headers | Record<string, unknown> | null;
  log?: GuardrailLog | Console | null;
  method?: string | null;
  model?: string | null;
  provider?: string | null;
  signal?: AbortSignal;
  sourceFormat?: string | null;
  stream?: boolean;
  targetFormat?: string | null;
}
```

Sesuatu pagar pengawal menandakan "tiada perubahan" dengan mengembalikan sama ada `void`, `{}`, atau
`{ block: false }`. Pengembalian `modifiedPayload`/`modifiedResponse` menggantikan
nilai yang mengalir melalui rantaian untuk pagar pengawal seterusnya.
`signal?: AbortSignal` membawa kitar hayat pemanggil ke dalam pagar pengawal. Pembatalan permintaan ialah pengecualian gagal-terbuka yang disengajakan: jambatan media menghentikan kerja dan melakukan pembersihan tanpa memulihkan media mentah kepada sasaran yang diketahui tidak menyokongnya.

## Pendaftaran (`registry.ts`)

Tunggal `guardrailRegistry` menyediakan:

- `register(guardrail)` — menambah pagar pengawal (atau menggantikannya berdasarkan nama yang dinormalkan) dan
  mengisih semula mengikut `priority` menaik.
- `clear()` / `list()` — pembantu pentadbiran.
- `runPreCallHooks(payload, context)` — melelar pagar pengawal aktif, mengalirkan
  muatan melalui `modifiedPayload`, dan berhenti pada `block: true` yang pertama.
- `runPostCallHooks(response, context)` — aliran yang sama pada bahagian respons.
- `resetGuardrailsForTests({ registerDefaults })` — mengosongkan keadaan dan secara pilihan
  mendaftarkan semula nilai lalai untuk pengasingan ujian yang bersih.

Kedua-dua pelaksana mengembalikan `{ blocked, payload|response, results, guardrail?, message? }`
dengan `results` merupakan tatasusunan rekod `GuardrailExecutionResult` yang merangkumi
medan `blocked`, `skipped`, `modified`, `error`, dan `meta` bagi setiap pagar pengawal,
yang berguna untuk penjejakan.

### Menyahdayakan Pagar Pengawal bagi Setiap Permintaan

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` mengagregatkan
senarai nama pagar pengawal tanpa pendua yang harus dilangkau untuk
permintaan semasa. Terdapat lima saluran, dibaca mengikut urutan ini dan digabungkan menjadi satu senarai
(kemunculan pertama diutamakan semasa menyahduplikasi):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` dalam badan permintaan (peringkat teratas)
3. `metadata.disabledGuardrails` dalam badan permintaan (hanya apabila `metadata` ialah objek)
4. Pengepala `x-omniroute-disabled-guardrails`
5. Pengepala legasi `x-disabled-guardrails`

Kesemua lima saluran digabungkan, termasuk kedua-dua pengepala: menghantar kedua-dua
`x-omniroute-disabled-guardrails` dan `x-disabled-guardrails` akan melangkau gabungan
senarai mereka, dan pengepala moden yang kosong tidak lagi menyembunyikan pengepala legasi
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), dibetulkan dalam
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Nilai boleh berupa tatasusunan rentetan atau rentetan dipisahkan koma; nama dipangkas
dan dinormalkan kepada kebab-case huruf kecil (`pii_masker` → `pii-masker`), manakala entri
kosong dibuang. Hasilnya dihantar melalui `context.disabledGuardrails`
kepada pendaftaran, yang melangkau pagar pengawal sepadan (`skipped: true` dalam `results`).

Senarai nyahdaya hanya mempengaruhi **pendaftaran**. Mod `block` suntikan gesaan ialah
sempadan mandatori: perisian tengah pengawal suntikan
(`src/middleware/promptInjectionGuard.ts`) memanggil `evaluatePromptInjection()`
tanpa sebarang senarai nyahdaya yang dikawal oleh pemanggil (panggilan
`resolveDisabledGuardrails({ body })` yang tidak lagi digunakan telah dialih keluar dalam
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), maka permintaan
yang menyahdayakan `prompt-injection` masih ditolak dalam mod `block`. Ini adalah
mengikut reka bentuk. Saluran nyahdaya dikawal oleh pemanggil (badan permintaan,
metadata, pengepala), dan pemanggil tidak boleh dibenarkan mematikan kawalan
keselamatan yang ditetapkan oleh pengendali
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Gabungan pengepala
daripada [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
hanya mengubah pagar pengawal pendaftaran yang dilangkau; ia tidak membenarkan klien
memintas perisian tengah. Dasar pagar pengawal mandatori bagi setiap kunci dan setiap kumpulan
dijejaki dalam RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Lihat [Liputan dan batasan](#coverage-and-limits).

## Urutan Pelaksanaan

Bagi setiap permintaan yang mengalir melalui `src/sse/handlers/chat.ts` dan
`open-sse/handlers/chatCore.ts` (laluan keluarga chat yang disenaraikan di bawah
[Liputan dan had](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` membina senarai langkau daripada kunci API, badan,
   dan pengepala.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` menjalankan guardrail mengikut urutan
   keutamaan menaik:
   - Guardrail yang dilumpuhkan direkodkan sebagai `skipped`.
   - `preCall` setiap guardrail boleh menulis semula muatan melalui `modifiedPayload`.
   - `block: true` yang pertama memintas rantaian dan pengendali memulangkan
     respons penolakan guardrail.
3. Muatan (yang berpotensi ditulis semula) mengalir ke penghalaan kombo dan penghantaran
   huluan.
4. **Bukan penstriman sahaja:** selepas respons dihimpunkan,
   `guardrailRegistry.runPostCallHooks(...)` menjalankan rantaian yang sama pada
   respons. `block: true` di sini menggugurkan respons huluan dan memulangkan HTTP 400. Respons yang distrim melangkau langkah ini sepenuhnya.

Guardrail yang melontar pengecualian direkodkan dengan `error: <message>` dan dilog melalui
`logger.warn`, tetapi rantaian diteruskan — gagal-terbuka secara reka bentuk.

## Liputan dan had

Pendaftaran guardrail hanya disambungkan ke saluran paip chat. Had ini
dikunci oleh `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` dan
`tests/unit/guardrail-pipeline-characterization.test.ts`; kemas kini ujian tersebut
secara sengaja apabila tingkah laku berubah.

### Di mana hook dijalankan

| Hook / kawalan                        | Dijalankan pada                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                     | Permintaan yang dikendalikan oleh `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (dan `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, dan proksi chat Telegram. Juga titik akhir ujian papan pemuka `/api/guardrails/test`. Blok pra-panggilan memulangkan HTTP 400. |
| `runPostCallHooks`                    | Respons chat **bukan penstriman** sahaja (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Respons yang distrim tidak pernah sampai ke sini.                                                                                                                                                                                                                                                                                                |
| PII Penstriman                        | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), disalurkan dalam `streamingPipeline.ts` apabila `PII_RESPONSE_SANITIZATION` dihidupkan. Ia bukan guardrail, jadi saluran nyahdaya tidak mempengaruhinya.                                                                                                                                                                                                                            |
| Middleware pengawal suntikan (legacy) | Setiap laluan `/v1` yang membawa prompt, termasuk keluarga chat (lihat [liputan laluan](#injection-guard-route-coverage--red-team-phase-8--block-d)). Suntikan prompt sahaja.                                                                                                                                                                                                                                                                     |

### Apa yang tidak diliputi

- **Laluan media, embeddings dan data** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) tidak pernah sampai ke pendaftaran. Tiada
  penyamaran PII, penyamaran kredensial atau jambatan modaliti dijalankan di sana. Satu-satunya
  semakan mereka ialah middleware pengawal suntikan legacy.
- **Respons yang distrim** tidak mendapat guardrail selepas panggilan: tiada `pii-masker` atau
  `credential-masker` selepas panggilan, dan tiada blok selepas panggilan. Hanya transformasi PII
  penstriman terpakai (apabila `PII_RESPONSE_SANITIZATION` dihidupkan). Kredensial
  yang dipantulkan semula dalam respons distrim tidak disunting.
- **Saluran nyahdaya vs. middleware (secara reka bentuk):** middleware menilai
  suntikan prompt dengan panggilannya sendiri ke `evaluatePromptInjection()`, tanpa
  menghantar sebarang senarai nyahdaya yang dikawal pemanggil. Mod `block` ialah
  sempadan wajib yang tidak boleh dipintas oleh nyahdaya yang dikawal pemanggil, termasuk pada laluan keluarga chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Menyahdayakan
  `prompt-injection` hanya melangkau guardrail dalam pendaftaran.

### Apa yang memproses respons sebelum peringkat selepas panggilan

Pada laluan bukan penstriman, urutannya ialah: pengekstrakan memori → pelaksanaan alat terbina dalam → guardrail selepas panggilan → keluar blok selepas panggilan → stor cache semantik.

- **Pengekstrakan memori** dan **pelaksanaan alat** melihat respons sebelum guardrail selepas panggilan dapat menulis semula atau menyekatnya. Sejak
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), pengekstrakan
  memori menjalankan teks yang diekstrak melalui `sanitizePII` apabila
  `PII_RESPONSE_SANITIZATION` dihidupkan (kedua-dua penstriman dan bukan
  penstriman), tetapi respons yang kemudiannya disekat oleh peringkat selepas
  panggilan masih telah ditawarkan kepada memori dan alat.
- **Cache semantik** menyimpan respons selepas panggilan, jadi ia menyimpan
  respons yang telah ditulis semula, dan respons yang disekat tidak pernah
  dicache. Entri cache dikunci mengikut kunci API.

## Konfigurasi

Pembolehubah persekitaran yang dibaca oleh pagar keselamatan terbina dalam:

| Pembolehubah                          | Digunakan oleh         | Kesan                                                                                                      |
| ------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Tetapkan `false` untuk lumpuhkan pengesanan sepenuhnya.                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Dasar suntikan: `warn`, `block`, atau `log`. Nilai legasi `redact` tidak menulis semula teks suntikan.     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Mod untuk pengawal suntikan; juga bendera ciri DB yang **mengatasi** pembolehubah persekitaran (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Keterukan minimum yang ditolak oleh `MODE=block`: `high` (lalai), `medium`, atau `low`.                    |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Alias legasi untuk `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                      |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Apabila `true`, PII dalam permintaan ditapis (tidak bergantung pada mod suntikan).                         |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (hiliran) | Mengawal tingkah laku penopeng pada bahagian respons.                                                      |

Pagar keselamatan Modality Bridge membaca konfigurasi masa jalan daripada stor
tetapan yang disokong DB (`getSettings()`), bukan pembolehubah persekitaran.
Kunci utama Vision ialah `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes`, dan `modalityBridgeCacheMaxEntries`. Kunci
legasi `visionBridge*` diterima hanya sebagai sandaran bacaan satu kitaran yang
didokumenkan; penulisan papan pemuka menggunakan kunci utama. Nilai lalai dan
penyelesai sandaran terletak dalam
`src/shared/constants/modalityBridgeDefaults.ts`, dengan pemalar legasi
dikekalkan dalam `src/shared/constants/visionBridgeDefaults.ts`.

Audio menggunakan `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, dan `modalityBridgeAudioMaxClips`, serta tetapan
`modalityBridgeCache*` yang dikongsi. Audio tidak mempunyai sandaran kunci
legasi kerana kunci ini diperkenalkan dengan skema Modality Bridge.

Video menggunakan `modalityBridgeVideoEnabled`,
`modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, dan `modalityBridgeVideoTimeout`, serta tetapan
`modalityBridgeCache*` yang dikongsi. Ia dilumpuhkan secara lalai kerana
FFmpeg/ffprobe ialah kebergantungan operasi pilihan dan kapsyen bingkai
menambah kependaman serta kos model.

## Guardrail Tersuai

```typescript
import { BaseGuardrail, guardrailRegistry } from "@/lib/guardrails";

class BudgetGuardrail extends BaseGuardrail {
  constructor() {
    super("budget", { priority: 50 });
  }

  async preCall(payload, ctx) {
    if (ctx.apiKeyInfo?.budgetExceeded) {
      return { block: true, message: "Daily budget exceeded" };
    }
    return { block: false };
  }
}

guardrailRegistry.register(new BudgetGuardrail());
```

Langkah-langkah:

1. Cipta `src/lib/guardrails/myGuardrail.ts` yang mewarisi `BaseGuardrail`.
2. Laksanakan `preCall` dan/atau `postCall`.
3. Sama ada daftar semasa import (push daripada `registerDefaultGuardrails`) atau
   panggil `guardrailRegistry.register(...)` semasa runtime — pendaftaran menggantikan
   mana-mana guardrail terdahulu dengan nama ternormal yang sama.
4. Tambah ujian di bawah `tests/unit/` (contoh sedia ada:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pengujian

Gunakan `resetGuardrailsForTests()` antara ujian untuk bermula daripada keadaan yang diketahui.
Hantar `{ registerDefaults: false }` untuk bermula dengan pendaftaran kosong dan
daftarkan hanya guardrail yang diuji. Vision Bridge menerima suntikan kebergantungan
(`deps.getSettings`, `deps.callVisionModel`); Audio Bridge mendedahkan titik sambungan
yang setara untuk tetapan, keupayaan, pemilihan model STT, semakan kelayakan, dan
transkripsi. Oleh itu, ujian boleh melaksanakan kedua-dua aliran tanpa akses DB
atau rangkaian.

## Lihat Juga

- `src/lib/guardrails/` — pelaksanaan
- `src/shared/utils/inputSanitizer.ts` — pengesan kongsi yang menjana
  penyuntikan prompt dan penyamaran PII
- `src/shared/constants/visionBridgeDefaults.ts` — lalai Vision Bridge dan
  senarai model bridge paksa
- `src/shared/constants/modalityBridgeDefaults.ts` — lalai runtime Vision/Audio yang dikongsi
- `docs/architecture/RESILIENCE_GUIDE.md` — lapisan ortogon (pemutus litar, tempoh bertenang)
- `docs/reference/ENVIRONMENT.md` — rujukan penuh pemboleh ubah persekitaran

## Liputan laluan injection-guard & red-team (Fasa 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) meliputi semua laluan
yang menerima prompt pengguna. Ia mematuhi `INJECTION_GUARD_MODE` (lalai `warn` = log sahaja;
`block` = mengembalikan HTTP 400 `SECURITY_001`).

| Jenis            | Laluan                                                                                                                                               | Mod lalai |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Teks (sedia ada) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn      |
| Generatif        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn      |
| Data             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn      |

Pengekstrakan teks (`extractMessageContents`) meliputi `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (setiap malam, `nightly-llm-security.yml`):** promptfoo mengesahkan bahawa setiap laluan menyekat
korpus OWASP-LLM dalam `INJECTION_GUARD_MODE=block`; garak menjalankan prob (melangkau tanpa rahsia).
`moderations` disertakan untuk konsistensi. Mod blok ialah sempadan mandatori: `evaluatePromptInjection()`
mengabaikan senarai nyahdaya setiap permintaan yang dihantar oleh middleware, jadi `disabledGuardrails` **tidak**
mengecualikan sesuatu laluan daripadanya ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Aliran kerja malam (`.github/workflows/nightly-llm-security.yml`, cron + penghantaran manual)
mempunyai dua kerja:

- **`promptfoo-guard` (menyekat)** — menjalankan `promptfoo eval -c promptfooconfig.yaml`
  dengan `INJECTION_GUARD_MODE=block`. Setiap kes adversarial (contohnya "abaikan semua
  arahan sebelumnya…", jailbreak gaya DAN) menegaskan bahawa respons membawa
  `error.code === "SECURITY_001"`, iaitu guard benar-benar menolak permintaan itu.
- **`garak` (nasihat)** — menjalankan garak `--probes promptinject,dan,leakreplay`
  terhadap instans OmniRoute tempatan (`http://localhost:20128/v1`). Bergantung pada
  rahsia penyedia (`PROMPTFOO_PROVIDER_KEY`); melangkau dengan lancar dan diberi akhiran
  `|| true`, jadi ia melaporkan tanpa menggagalkan CI.

Liputan pembantu guard (`createInjectionGuard` / `withInjectionGuard`)
merangkumi setiap laluan `/v1` yang membawa prompt; teks prompt diambil daripada
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` oleh
`extractMessageContents()` dalam `src/shared/utils/inputSanitizer.ts`.
