# Self-Hosted Runner Box Operations (.113 pool) (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

พูลแบบ self-hosted ทำงานอยู่บนเครื่อง **.113** (`tomni-proxmox-113`) ตั้งแต่ 2026-10-18 runner ของ
OmniRoute แต่ละตัวมี **หนึ่งบทบาท** หนึ่ง label และงบประมาณหน่วยความจำ/CPU ที่กำหนดตามการใช้งานจริง
สล็อต Turbopack ได้รับทรัพยากรตามที่การ build ต้องการ ส่วนสล็อตอื่น ๆ กำหนดขนาดตามค่าสูงสุด
ที่วัดได้ เครื่องจะจัดสรรทรัพยากรเกินขนาดจริงเฉพาะเมื่อการ build ด้วย Turbopack เกิดขึ้นพร้อมกับการ build
ด้วย webpack ของ Release-Green และงาน lint โดย swap ของโฮสต์ (16 GB) จะรองรับส่วนเกินนั้น และเนื่องจาก
Build ของ pull request ทำงานบน runner แบบ hosted สล็อต Turbopack จึงว่างอยู่เกือบตลอดเวลา:

| runner               | label                 | บทบาท                                                                                                                                                        | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`          | การ build ด้วย Turbopack: `ci.yml` `Build` (เฉพาะ push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, การ build a11y รายคืน | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release`        | Release-Green (`release-green` + `main-green`), การ build ด้วย webpack                                                                                       | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`          | งานรายคืน (Schemathesis, promptfoo, garak, k6, การบูต a11y) และ `quality.yml` `lint-guard`                                                                   | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`          | พูลเดียวกับด้านบน                                                                                                                                            | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (repo ของแต่ละรายการ) | เฉพาะ Dependabot (ค่าสูงสุดรายการละ 155 MB, 2026-10-18)                                                                                                      | 4 GB / 6 GB                | รายการละ 200 % |

วัดเมื่อ 2026-10-18:

| ทรัพยากร  | ค่า                   | ความหมายต่อการจัดตารางงาน                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 คอร์**   | การ build สำหรับ production ด้วย Turbopack มีค่าสูงสุด 49 GB เมื่อไม่จำกัด (`tests/unit/ci-build-bundler-webpack.test.ts`); บน Next 16.3.8 เฉพาะเฟส compile ก็ใช้หน่วยความจำค้างไว้ประมาณ 40 GB (RSS 36 GB ใน `next-build` พร้อมเวิร์กเกอร์ loader 17 ตัวที่ 3 GB วัดเมื่อ 2026-10-18); การ build ด้วย webpack ใช้ประมาณ 14–16 GB การ build ด้วย Turbopack หนึ่งงาน + webpack หนึ่งงานทำงานพร้อมกันได้ แต่การ build ด้วย Turbopack สองงานทำไม่ได้ |
| swap      | 16 GB                 | `omniroute-113-5` ทำงานโดยปิด swap (`MemorySwapMax=0`) เพื่อให้งาน build ที่ใช้ทรัพยากรผิดปกติถูกหยุดเมื่อถึงขีดจำกัด แทนที่จะทำให้ทั้งเครื่องใช้ swap                                                                                                                                                                                                                                                                                            |
| `/tmp`    | **tmpfs 12 GB = RAM** | ทุกอย่างที่เก็บไว้ที่นี่จะใช้หน่วยความจำ โดยไฟล์ตกค้างจะถูกล้างหลังจาก 3 ชั่วโมง                                                                                                                                                                                                                                                                                                                                                                  |
| CPU       | พบ load 60 บน 32 คอร์ | ก่อนกำหนด quota การ build ด้วย Turbopack หนึ่งงาน (CPU ประมาณ 1166 %) ร่วมกับชุดทดสอบ coverage บนเครื่องเดียวกัน ทำให้ heartbeat ของ listener อื่นไม่ได้รับทรัพยากรเพียงพอ (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                                  |
| runner    | **listener 6 ตัว**    | OmniRoute 4 ตัว + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` ถูกปิดใช้งาน (`systemctl enable --now` สามารถเปิดกลับมาได้หนึ่งตัว)                                                                                                                                                                                                                                                                                                           |

ขีดจำกัดต่าง ๆ อยู่ใน `/etc/systemd/system/actions.runner.<…>.service.d/override.conf` ของแต่ละ unit
(เก็บค่าก่อนหน้าไว้เป็น `override.conf.bak-20261018`) และนำไปใช้แบบสดด้วย
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` โดยไม่ต้อง restart ดังนั้น
งานที่กำลังทำงานอยู่จึงไม่ได้รับผลกระทบ การเปลี่ยน label ทำผ่าน runners API
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`) และมีผลแบบสดเช่นกัน

## ติดตั้งตัวทำความสะอาด (ครั้งเดียวบนเครื่อง)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): ทุก 30 นาที บันทึกล็อกไปยัง /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

จำเป็นต้องมี `lsof`: ตัวทำความสะอาดจะยืนยันว่าพาธไม่ได้ถูกใช้งานด้วยสแนปช็อตของไฟล์ที่เปิดอยู่หนึ่งครั้ง
ก่อนลบ และหากไม่มีเครื่องมือนี้ ตัวทำความสะอาดจะไม่ลบสิ่งใดพร้อมทั้งแจ้งให้ทราบ
(exit 1) ทดลองการเปลี่ยนแปลงใดๆ ด้วย `--dry-run` ก่อนเสมอ — คำสั่งนี้จะแสดงสิ่งที่จะ
ดำเนินการอย่างแม่นยำโดยไม่แก้ไขสิ่งใดเลย

สิ่งที่ทำในแต่ละรอบ: กวาดไฟล์ตกค้างของเราเอง (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) หลังจาก **3 ชม. บน tmpfs** และ 24 ชม. บนดิสก์
`_work/_temp`; ยุติ `next-build` ที่มีอายุเกิน 75 นาที (ไม่มีงานใดทำงานนานขนาดนั้น — เมื่อ
2026-08-27 มีงานหนึ่งทำงานต่อถึง 70 นาทีหลังจาก GitHub ประกาศว่างานสูญหายแล้ว); ล้าง
checkout ที่มีอายุ 48 ชม. ของ runner ซึ่ง unit **หยุดทำงานแล้ว**; แจ้งเตือนเมื่อดิสก์ ≥ 85%, memory PSI
`full/avg60` ≥ 10% และมี listener มากกว่า `MAX_ACTIVE_RUNNERS` (พร้อมแจกแจงเป็น
omniroute/อื่นๆ) Exit 1 = ต้องตรวจสอบ; โปรดอ่านล็อก

กฎ 75 นาทีไม่สามารถตรวจจับบิลด์ที่ GitHub ยกเลิกการรอไปแล้วได้ เมื่อ
`Runner.Listener` ไม่สามารถต่ออายุงานได้ `_diag/Runner_*.log` จะแสดง
`POST request to …/renewjob timed out after 100 seconds`, API จะรายงานว่างาน `completed`
(ล้มเหลว) ประมาณสิบนาทีหลังการต่ออายุสำเร็จครั้งล่าสุด และ `next-build` จะยังคงทำงานต่อโดย
ไม่มีงานเชื่อมโยงอยู่ (2026-10-18: บิลด์ของ #17066 ล้มเหลวเมื่อ 19:43 และบิลด์นั้นยังคง
ครอบครองพื้นที่ 40 GB ในอีกห้านาทีต่อมา) ยืนยัน ref ใน `_diag/Worker_*.log` ไฟล์ล่าสุด จากนั้น
ส่ง SIGTERM เฉพาะให้โครงสร้างโปรเซสของบิลด์ตาม PID — `next-build`, `npm run build`, `build-next-isolated.mjs` และ
worker ของ `_work` ห้ามแตะต้อง `Runner.Listener`, `RunnerService.js` หรือ `Runner.Worker`:
worker จะรายงานว่างานถูกยกเลิก และ listener จะกลับมาออนไลน์เอง

## Unit ของ runner: KillMode

ค่าเริ่มต้น `KillMode=process` ของ runner จะปล่อยให้ `Runner.Worker → npm → next-build`
ยังทำงานอยู่เมื่อ unit ถูกหยุดหรือรีสตาร์ต — บิลด์กำพร้าจะยังคงใช้ RAM และ
CPU โดยไม่มีงานเชื่อมโยงอยู่ OmniRoute unit ทุกตัวมี drop-in
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
ที่กำหนด `KillMode=mixed`: ส่ง SIGTERM ไปยัง listener ก่อน แล้วจึงส่ง SIGKILL ไปยัง cgroup ทั้งหมดเมื่อถึง
`TimeoutStop` การตั้งค่านี้จะมีผลเมื่อรีสตาร์ต unit ครั้งถัดไป — รีสตาร์ต **ครั้งละหนึ่ง runner
และเฉพาะเมื่อไม่มีงานเท่านั้น** โดยให้การตรวจสอบว่าไม่มีงานและการรีสตาร์ตอยู่ในคำสั่งเดียวกัน

## กฎการปฏิบัติงาน

- **รันบิลด์ Turbopack ได้ครั้งละหนึ่งงาน — บังคับใช้ด้วย label** ทุก job ที่รัน Turbopack
  `next build` แบบเต็มจะกำหนดเป้าหมายเป็น `[self-hosted, omni-build]` และมีเพียง **`omniroute-113-5`** เท่านั้นที่มี
  label นี้ ได้แก่ `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  บิลด์ a11y รายคืน (#16853) และ **amd64** ของ `docker-publish.yml` (ใช้ webpack ภายใน BuildKit —
  Turbopack เกิด panic ที่นั่นใน run 33253576569) ส่วน Docker ฝั่ง arm64 ยังคงรันบน `ubuntu-24.04-arm`
  `docker-publish` ฝั่ง amd64 ใช้ concurrency group `heavy-build-main` ร่วมกับ `ci.yml` `Build`
  (`cancel-in-progress: false`) โดย Docker Engine ต้องอยู่บน `omniroute-113-5` การเพิ่ม slot Turbopack
  ที่สองไม่สามารถรองรับได้ด้วยหน่วยความจำ 78 GB (2 × 33–37 GB บวกกับส่วนที่เหลือของเครื่อง) โดย slot ที่สองจะปลอดภัย
  เฉพาะสำหรับบิลด์ webpack เท่านั้น
- **บิลด์ของ pull request รันบน hosted runner (2026-10-18)** `ci.yml` `Build` จะไปถึง `omni-build` เฉพาะเมื่อเป็น
  `push` และ `workflow_dispatch` เท่านั้น ส่วน Build ของทุก `pull_request` (ทั้งจาก origin เดียวกันหรือ fork) และ `merge_group`
  จะรันบน `ubuntu-latest` ด้วย webpack เมื่อกำหนดเส้นทางให้ PR จาก origin เดียวกันทุกรายการไปยัง slot ดังกล่าว บิลด์ Turbopack
  จะยึด slot ไว้ 29–58 นาที ทำให้มี Build 18 งานเข้าคิวนานสูงสุด 18 ชั่วโมง และ Build จาก push ของ release line เอง
  ได้ใช้ slot เพียงครั้งเดียวจาก 40 job เมื่อใช้ hosted runner บิลด์ PR เดียวกันใช้เวลา 8–12 นาทีควบคู่กับ job อื่นๆ
  ของ PR นั้น Turbopack ซึ่งเป็น bundler ที่ `npm-publish` เผยแพร่ ยังคงได้รับการทดสอบบน release line ผ่าน
  บิลด์ a11y รายคืนของ default branch (04:41 UTC), ผ่าน Build จากทุก push หรือ dispatch ที่
  ได้ใช้ slot และผ่าน `npm-publish` เอง `tests/unit/build/heavy-build-queue.test.ts`
  กำหนด gate สี่เงื่อนไขนี้ไว้อย่างตายตัว
- **ห้ามกำหนดขนาด slot ของ Turbopack ให้ต่ำกว่าความต้องการที่วัดได้** เมื่อ 2026-10-18 เวลา 18:06 slot ถูก
  ลดจาก 56G/60G เป็น 40G/44G เพื่อให้มีพื้นที่สำหรับ `omni-release` ระยะ compile ค้างอยู่ที่
  `MemoryHigh` ตลอดการรัน (memory PSI `full` 30–43 %) และ `Runner.Listener` ซึ่ง
  ใช้ cgroup ร่วมกัน ไม่สามารถต่ออายุ job ของตนได้ จึงมีการคืนค่า 56G/60G ของ owner จาก 2026-10-17
  ภายในวันเดียวกัน หากต่ำกว่าค่านี้ บิลด์จะไม่ได้ล้มเหลว แต่จะเกิด thrashing และทำให้ job สูญหาย
- **Release-Green มี slot ของตนเอง (2026-10-18)** ก่อนหน้านั้น validation ของ Release-Green ทั้งสองรายการรัน
  บน `omni-build` ทั้งเมื่อมีทุก push (~10 ครั้ง/ชั่วโมง โดย 97 จาก 100 push run ถูกยกเลิกกลางคันภายในหนึ่งวัน)
  และการ sweep แบบเต็มที่ใช้เวลาประมาณ 2 ชั่วโมง วันละสามครั้ง (sweep เวลา 05:29 รอ slot นาน 6 ชั่วโมง) — slot บิลด์เพียง
  slot เดียวถูกใช้งานเกินขีดความสามารถหลายเท่า และ Build ของ PR จาก origin เดียวกันต้องรอหลายชั่วโมง
  ขณะนี้ `release-green` และ `main-green` กำหนดเป้าหมายเป็น `omni-release` (เฉพาะ `omniroute-113-6`) พร้อม
  `OMNIROUTE_USE_TURBOPACK=0` และ run ที่เริ่มแล้วจะไม่ถูกยกเลิกโดย push ที่ใหม่กว่าอีกต่อไป (แต่
  slot ที่ยังรออยู่จะยังคงยุบงานจำนวนมากให้เหลือเพียงรายการล่าสุด) `tests/unit/build/runner-capacity-routing.test.ts`
  กำหนด routing, การสลับไปใช้ webpack และเงื่อนไขที่ว่าไม่มีสิ่งใดบน `omni-release` บิลด์ด้วย Turbopackไว้อย่างตายตัว
- **พูลสำหรับงานเบา: `omni-light`** `omniroute-113` และ `omniroute-113-2` รันงานรายคืนที่ต้องใช้
  `next build` เฉพาะ backend (~5–6 GB; webpack) และ `quality.yml` `lint-guard` โดย `omniroute-113`
  มี `MemoryHigh=4G` จนถึง 2026-10-18 — บิลด์ promptfoo ต้อง reclaim หน่วยความจำไปตลอด 54 นาที
  บนเครื่องนั้น การเพิ่มเป็น 8 GB ช่วยขจัดการ throttling
- **ตั้งใจให้มี listener น้อยลง** unit ของ OmniRoute สี่รายการถูกปิดใช้งานเมื่อ 2026-08-29 — listener ที่เพิ่มขึ้น
  แต่ละตัวคือ tenant เพิ่มเติมของงบประมาณหน่วยความจำข้างต้น เพดานของ janitor คือ 6 (`MAX_ACTIVE_RUNNERS=6` ใน cron) โดยจะนับ
  `Runner.Listener` ทุกตัวบนเครื่อง และ OmniHeuris + OmniMind เพิ่มอีกสองตัวจากสี่ตัวของเรา
- **ห้ามล้าง `/tmp` หรือ `_work` ด้วยตนเองในขณะที่ runner ใดๆ ยังทำงานอยู่** การ
  ตรวจสอบแล้วค่อยลบโดยมีช่วงว่างระหว่างสองขั้นตอนนี้คือสาเหตุที่ทำให้ job Build ที่กำลังทำงานสูญเสีย
  `_work` ไปเมื่อ 2026-08-27 janitor จะตรวจสอบและลบภายในขั้นตอนเดียว
  จงปล่อยให้มันจัดการ
- การหยุด runner ระหว่างทำ job จะยกเลิก job นั้น (สังเกตจากระบบจริง): ใช้ `systemctl stop` เฉพาะ
  เมื่อ listener ของมันไม่มี `Runner.Worker` เป็น child — และต้องดำเนินการด้วยคำสั่งเดียว
- Workflow ต้องไม่พัก artefact ไว้ใน `/tmp` (พื้นที่ดังกล่าวอยู่ใน RAM) ให้ดาวน์โหลดไปยัง
  `$RUNNER_TEMP` (อยู่บนดิสก์และแยกตาม runner) — artefact `next-build` ขนาด 1.3 GB ใช้เวลา 27–32
  นาทีในการบันทึกลง tmpfs และใช้เวลา 2 นาทีในการอัปโหลดจากดิสก์
- VPS `.15` ใช้สำหรับ homologation เท่านั้น — ห้ามรัน CI runner โดยเด็ดขาด

## เลนแบบโฮสต์ (รันเนอร์ที่โฮสต์โดย GitHub)

บัญชีนี้ใช้แผน **Pro**: **งานแบบโฮสต์พร้อมกัน 40 งาน** ซึ่งใช้ร่วมกันระหว่างการตรวจสอบ PR ทั้งหมด
เวิร์กโฟลว์ทั้งหมดที่ทริกเกอร์จากการพุช และการตั้งค่าเริ่มต้นของ CodeQL จากการวัดเมื่อ 2026-10-18 ระหว่าง
แคมเปญการผสานโค้ด (~10 การผสาน/ชั่วโมงบน `release/v3.8.52`) พบว่า: **มีการสร้างการรันเวิร์กโฟลว์ 2,500 ครั้ง
ภายใน 24 ชม.**, มีการพุช 44 ครั้งไปยังบรานช์ภายใน 6 ชม., **งานแบบโฮสต์ 106 งานอยู่ในคิว** ขณะที่การตรวจสอบ PR รออยู่
หลายชั่วโมง และ PR ถูกผสานโดยไม่รอการตรวจสอบเหล่านั้น มีเก้าเวิร์กโฟลว์ที่ทำงานทุกครั้งเมื่อมีการพุชไปยังบรานช์:

| ต่อการพุชไปยัง `release/v*`                 |   งานแบบโฮสต์ | ผลลัพธ์ระหว่างภาวะงานถาโถม                                                | ตั้งแต่ 2026-10-18                                                                 |
| ------------------------------------------- | ------------: | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `ci.yml` (เมทริกซ์เต็มรูปแบบ)               | สูงสุด 30 งาน | ถูกยกเลิกโดยการพุชครั้งถัดไป 24 จาก 24 ครั้งในหนึ่งวัน                    | ไม่เริ่มทำงานเมื่อพุชไปยัง `release/**` (การรัน PR + Release-Green)                |
| `quality.yml`                               |            ~6 | ถูกยกเลิก 23 จาก 23 ครั้ง                                                 | ไม่เริ่มทำงานเมื่อพุชไปยัง `release/**`                                            |
| `Release-Green` `--quick`                   |             0 | ทำงานบน `omni-build` และถูกยกเลิก 97 จาก 100 ครั้ง                        | สล็อต `omni-release` ไม่ถูกยกเลิก และรวมการรันที่รอดำเนินการเข้าด้วยกัน            |
| `Lock released branch`, `OpenSSF Scorecard` |             2 | มีการรันหนึ่งครั้งเข้าคิวต่อการพุชหนึ่งครั้ง                              | หนึ่งการรันต่อ ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)            |
| `Release acceptance` (รายงานเงา)            |             1 | มี `npm ci` แบบโฮสต์หนึ่งครั้งต่อการพุชและไม่เคยถูกยกเลิก                 | ไม่เปลี่ยนแปลง — เหมาะที่จะเพิ่มตัวกรอง `paths:`                                   |
| `Publish to Docker Hub` → `Deploy to VPS`   |             2 | ถูกยกเลิกต่อการพุชแต่ละครั้ง ส่วน amd64 แข่งขันกันบน `omni-build`         | ไม่เปลี่ยนแปลง — ช่องทางดีพลอยของเจ้าของ                                           |
| การตั้งค่าเริ่มต้นของ CodeQL (`dynamic`)    |             4 | `javascript-typescript`, `actions`, `c-cpp`, `python` ต่อการพุชหนึ่งครั้ง | ไม่เปลี่ยนแปลง — Settings → Code security; `c-cpp`/`python` ไม่ได้สแกนสิ่งใดที่นี่ |

`tests/unit/build/push-storm-diet.test.ts` กำหนดให้ทริกเกอร์การพุชของ `ci.yml` และ
`quality.yml` ทำงานเฉพาะบน `main` ผลข้างเคียง: Codecov จะไม่ได้รับการอัปโหลดฐานต่อการพุชรีลีสอีกต่อไป (ขั้นตอนนี้
มีไว้เพื่อให้ข้อมูลและใช้ `continue-on-error`); เกตความครอบคลุมภายในรีโพซิทอรีและความคิดเห็นใน PR
ไม่ได้รับผลกระทบ

**การเพิ่มความจุของระบบ self-hosted ไม่สามารถแก้ปัญหาคิวแบบโฮสต์ได้** devbox
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) สามารถโฮสต์รันเนอร์ได้ แต่เซสชันของเอเจนต์ทำให้โหลดอยู่ที่
20–26 อยู่แล้ว คอนเทนเนอร์ของเอเจนต์ไม่มี Docker daemon และเลนที่อิ่มตัวคือเลนแบบโฮสต์
เครื่อง `.113` มีพื้นที่ว่าง 71 GB และโหลด 5–8 ในเวลาเดียวกัน ข้อจำกัดของเครื่องนี้คือ
งบประมาณหน่วยความจำต่อ listener ตามที่ระบุข้างต้น (เพดาน 6 listeners) ไม่ใช่ CPU ทางเลือกที่เหลือ
เป็นเรื่องของกระบวนการ: ผสาน PR ของแคมเปญผ่านคิว Mergify (`label=queue` โดยแต่ละแบตช์ใช้การรัน CI
ของ `merge_group` ร่วมกันหนึ่งครั้ง แทนที่จะรันหนึ่งครั้งต่อ PR และอีกหนึ่งครั้งต่อการพุช) ลดภาษาของ
การตั้งค่าเริ่มต้น CodeQL และกรอง `release-acceptance.yml` ตามไฟล์ที่เวิร์กโฟลว์อ่าน
