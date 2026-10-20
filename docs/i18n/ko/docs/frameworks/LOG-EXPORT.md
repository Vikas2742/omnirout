# Log export (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

OmniRoute 호출 로그를 외부 분석 저장소로 지속적으로 증분 내보내기합니다.

로그 대시보드 탭은 요청 이력을 SQLite(`call_logs`)에 보관하며, 보관 범위는
로테이션 및 보존 정책에 따라 제한됩니다. 로그 내보내기는 동일한 레코드 집합을 일정에 따라 외부로 전송하므로
로컬 데이터베이스보다 오래 보관하고 다른 데이터와 조인할 수 있습니다. 첫 번째 대상은 BigQuery이며,
파이프라인은 레지스트리 구조이므로 기존 구조를 유지하면서 대상을 추가할 수 있습니다.

---

## 1. 작동 방식

```
서버(구성 복호화 + 검증, 커서 조정)
  → 시작 IPC → 격리된 exportChild OS 프로세스
    → 읽기 전용 storage.sqlite → 공통 호출 로그 쿼리/매핑
      → 비동기 아티팩트 로드 → 대상 prepare()/send()
        → 배치 IPC → 서버가 커서 저장 → 확인 응답 IPC
          → 다음 배치; 완료 IPC → 서버가 성공 기록
```

- **일정** — `JobRegistry` cron 작업인 `log_export` 하나를 사용하며, 기본값은 `0 * * * *`(매시간,
  UTC)입니다. `src/lib/initCloudSync.ts`에 등록되며, `OMNIROUTE_LOG_EXPORT_CRON`으로 재정의할 수 있습니다.
  각 실행 시점마다 **활성화된** 모든 대상의 내보내기 대기 데이터를 순차적으로 처리합니다.
- **커서** — SQLite의 암시적 `call_logs.rowid`를 사용하며, 대상별로
  `log_export_destinations.cursor_row_id`에 저장됩니다. `timestamp`는 의도적으로 커서로 사용하지 않습니다. 호출자가
  자체 값을 지정할 수 있으므로, 느린 요청이 나중에 시작된 더 빠른 요청보다 늦게 기록될 수 있으며,
  타임스탬프 커서는 이러한 요청을 건너뛰게 됩니다.
- **배치 처리** — 요청당 `batch_size`개 행(기본값 500), 실행당 `max_rows_per_run`개 행
  (기본값 10000)을 처리하여, 대량의 대기 데이터가 한 번의 실행을 막는 대신 여러 실행 시점에 걸쳐 처리되도록 합니다.
- **전달** — 커서는 `send()`가 성공적으로 완료된 후에만 이동합니다. 배치가 실패하면
  커서는 기존 위치에 머무르므로, 다음 실행에서 동일한 행을 재시도합니다. 보장되는 것은
  최소 한 번 전달과 대상 측 중복 제거의 조합이며, 엄밀한 의미의 정확히 한 번 전달은 아닙니다. BigQuery는 각
  행의 키로 호출 로그 ID를 사용하며, 자체 중복 제거 기간 내에서 최선형 방식으로 이를 반영합니다.
- **중복 실행 방지** — cron 실행과 `POST .../run`이 동시에 발생할 수 있습니다. 이미
  처리 중인 대상은 두 번 처리하는 대신 건너뛰므로(실행 결과에 `skipped: true` 표시),
  동시 실행으로 인해 배치를 재전송하거나 커서를 이전 위치로 되돌려 기록할 수 없습니다.
- **전체 삭제 후 복구** — `cursor_row_id`가 `MAX(rowid)`보다 커지면(전체 테이블이
  삭제되고 rowid가 다시 시작된 경우), 실행기는 이후 데이터를 영구적으로 놓치는 대신 커서를 0으로 되돌립니다.

### 격리된 실행기와 제한

Node에서 각 대상을 실행할 때마다 별도의 단기 OS 자식 프로세스(IPC를 사용하는 `child_process`이며,
`worker_threads`가 아님)를 시작합니다. 본문 읽기, 페이로드 JSON 파싱/직렬화, 대상의
`prepare()` 및 대상 네트워크 I/O는 모두 서버의 이벤트 루프가 아니라 이 프로세스에서 실행됩니다.
IPC로 전달되는 것은 구성과 작은 진행 상황 메시지뿐이며, 내보낸 레코드는
서버로 돌아오지 않습니다. cron 작업과 지금 실행 라우트는 동일한 외부 공개 결과와 중복 실행 방지 기능을 유지합니다.

자식 프로세스는 `node:sqlite`를 사용하여 서버에서 확정된 `DATA_DIR/storage.sqlite`를 읽기 전용으로 열며,
`busy_timeout=5000` 및 `query_only=ON`을 적용합니다. DB 싱글턴을 가져오지 않으며
마이그레이션, 백업 또는 SQLite 업데이트를 수행하지 않습니다. 누락되거나 손상된 아티팩트의 상태 관리(손상된
아티팩트에 대한 UPDATE 포함)는 대시보드 상세 조회 경로에서만 수행됩니다. 두 경로는 순수 함수 형태의
상세 정보 리졸버를 공유합니다. 내보내기는 비동기 파일 시스템 읽기를 사용하며, 아티팩트 → 레거시
인라인 → 레거시 디스크 → 없음의 동일한 조회 순서를 따릅니다. 실행 시 자식 프로세스가 리더를 열 때 최대 삽입 rowid를
스냅샷으로 저장하며, 이후 삽입된 데이터는 다음 실행까지 대기합니다. 이는 삽입 경계일
뿐, 장시간 유지되는 SQLite 트랜잭션이 아닙니다. 네트워크 대기 중에도 WAL 쓰기 작업과 체크포인트는 자유롭게
진행됩니다. 이 경계는 기존 행의 업데이트/삭제를 동결하지 않습니다.

각 배치가 수락된 후 자식 프로세스는 확인 응답을 기다립니다. 서버는 먼저
`advanceLogExportCursor`로 커서를 저장한 다음 `ack`를 보냅니다. 그전에는 다음 배치를 시작하지 않습니다.
전송 실패, 비정상 종료 또는 시간 초과가 발생하면 해당 배치의 커서를 이동하지 않고 실패를 기록합니다. 이전에
확인 응답을 받은 배치는 커밋된 상태로 유지되며, 재전송될 수 있는 것은 확인 응답을 받지 못한 배치 최대 하나뿐입니다.
성공은 `done` 수신과 자식 프로세스의 정상 종료 후에만 기록됩니다. 실패 시에는 SIGTERM으로 자식 프로세스를
종료하고, 500 ms 후에는 SIGKILL로 강제 종료하며, 실행기는 프로세스 종료를 기다립니다.

| 환경 변수                                     | 기본값 | 용도                                  |
| --------------------------------------------- | ------ | ------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | 대상별 실제 경과 시간 제한            |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | 자식 프로세스의 V8 old-space 제한(MB) |

유효하지 않은 값, 양수가 아닌 값 또는 정수가 아닌 값에는 기본값이 적용됩니다. 힙 설정은 전체
RSS 제한이 아닙니다. 배치가 매우 크면 여전히 자식 프로세스의 메모리가 고갈될 수 있으며, 이 경우 실행은 안전하게 실패합니다.
기본값인 1024 MB는 본문을 포함하는 512 KiB 아티팩트의 기본 500행 배치를 처리할 수 있도록
여유 공간을 확보하며, 여기에는 BigQuery의 바이트 단위 청크 JSON 직렬화도 포함됩니다. 이 설정이
본문을 포함하는 10000행 배치까지 안전하게 처리할 수 있게 하는 것은 아닙니다. V8 힙이 고갈되면 조치 가능한 실패가 기록됩니다. 배치
크기를 줄이거나 `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`를 높이세요. 커서는 마지막으로
확인 응답을 받은 배치 위치에 유지됩니다. 과거의 인라인/디스크 본문에는 최신 아티팩트 크기 제한이 적용되지 않습니다.
운영자는 특히 메모리가 제한된 컨테이너 내부에서 RSS를 별도로 산정해야 합니다.

자식 프로세스는 해석된 `DATA_DIR`, `NODE_ENV`, 명시적으로 지정된 `TZ`(레거시 파일명의
현지 시간 해석용), 존재하는 경우 `ELECTRON_RUN_AS_NODE`, 그리고 다음 아웃바운드 입력만 상속합니다:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY`(및 각각의 소문자 형태),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
전역 Undici 디스패처는 `NO_PROXY`를 포함하여 서버의 순수 환경 변수 기반 프록시 해석 및 로컬 호스트
우회 규칙을 공유하며, `proxyFetch.ts`나 해당 DB/기능 플래그를 가져오지 않습니다.
프록시 자격 증명은 전달되는 출력과 기록된 오류에서 마스킹됩니다. 대상 자격 증명은
시작 IPC 메시지 하나로만 전달되며, argv나 환경 변수로는 전달되지 않습니다. 출력/오류 전달 시에는
접두사를 붙이고 민감한 정보를 제거합니다. cron 실행마다 Node의 SQLite 경고가 반복되지 않도록 자식 프로세스 실행 인수에서는
`ExperimentalWarning`만 비활성화하며, 다른 유형의 경고는 계속 표시됩니다.

대상 모듈은 Next.js/서버 전용 의존성 없이 가져올 수 있어야 합니다. 기존
BigQuery 구현은 이미 이 계약을 충족합니다. 액세스 토큰 캐시는 자식 프로세스가
실행되는 동안만 유지되며, 실행 간에는 유지되지 않습니다. 지원되는 런타임은 Node(`package.json`의 engines)이지만, README의 Bun
설치 섹션과 `Dockerfile.bun`에서도
`bun:sqlite`(`src/lib/db/core.ts` / 어댑터)를 사용하는 프로덕션 호환 경로를 안내합니다. 따라서 Bun에서는 내보내기가 기존
프로세스 내 실행 경로를 유지하고, 자식 프로세스의 힙/시간 제한 격리를 사용할 수 없다는 경고를 한 번 표시합니다.
이벤트 루프 및 OOM 격리가 필요하면 Node를 사용하세요. 여기서는 Bun을 개발 전용으로 취급하지 않습니다.

`includeBodies`를 활성화한 경우, 한 시간 분량의 페이로드가 밀리지 않도록
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"` 같은 분 단위 주기를 권장합니다.
배치 및 행 제한은 여전히 각 실행에 적용됩니다. 프로세스 시작 비용은 실행할 때마다 대상별로 발생합니다.
이는 작은 시작 비용을 감수하여 서버 이벤트 루프를 격리하는 방식이며, 전체 CPU 사용량을 줄이는 것은 아닙니다.

### 페이로드(프롬프트 및 완성 응답)

기본적으로 내보내기에는 로그 **목록**에 표시되는 요약 필드만 포함됩니다.
**프롬프트 및 응답 내보내기**(`includeBodies`)를 켜면 각 호출에 대해 로그 **상세**
창에 표시되는 다음 내용도 전송됩니다:

| 필드                             | 포함 내용                                          |
| -------------------------------- | -------------------------------------------------- |
| `request_body` / `response_body` | 대시보드에 렌더링되는 호출 페이로드                |
| `pipeline_route_decision`        | 라우터가 선택한 대상 및 모델                       |
| `pipeline_client_request`        | 클라이언트가 보낸 그대로의 원본 요청               |
| `pipeline_openai_request`        | 내부 OpenAI 형식으로 변환된 요청                   |
| `pipeline_provider_request`      | 공급자 형식으로 업스트림에 실제 전송된 요청        |
| `pipeline_provider_response`     | 원본 업스트림 응답                                 |
| `pipeline_client_response`       | 호출자에게 반환된 내용                             |
| `pipeline_error`                 | 실패한 호출의 파이프라인 수준 오류 상세 정보       |
| `bodies_truncated`               | 위 필드 중 하나라도 `maxBodyBytes`에 도달하면 true |

여기에는 프롬프트 내용이 포함되므로 **기본적으로 꺼져 있으며**, 의도적으로 대상별로 선택하도록 되어 있습니다.
내보내기와 `getCallLogById`가 상세 정보 해석 로직을 공유하므로, 전송되는 내용은 대시보드에 표시되는 내용과 같습니다.
페이로드는
기록 시점에 이미 개인 식별 정보(PII)가 정제되고 비밀 정보가 마스킹되며,
`noLog` API 키로 수행된 호출은 페이로드를 전혀 저장하지 않으므로 내보낼 내용이 없습니다.

페이로드는 파일 시스템 아티팩트에서 행별로 읽으므로, 이를 요청한 대상에 대해서만
하이드레이션이 실행됩니다. 아티팩트가 없거나 손상된 경우 배치를 실패시키고 커서를 진행하지 못하게 하는 대신,
페이로드가 null인 요약을 내보냅니다.

`maxBodyBytes`(기본값 262144)는 각 필드의 크기를 제한합니다. 더 긴 페이로드는 **삭제되지 않고
잘립니다**. 잘린 프롬프트라도 "무엇을 요청했는지"는 알 수 있으며, 해당 행에는
`bodies_truncated` 플래그가 설정됩니다. 스트리밍된 청크별 델타는 내보내지 않습니다. 조립된 응답이
이미 `pipeline_provider_response`와 `pipeline_client_response`에 들어 있습니다.

---

## 2. 파일

| 구성 요소               | 위치                                         |
| ----------------------- | -------------------------------------------- |
| 대상 계약               | `src/lib/logExport/types.ts`                 |
| 레지스트리              | `src/lib/logExport/registry.ts`              |
| 비밀 정보 처리          | `src/lib/logExport/secrets.ts`               |
| 실행기 (부모 IPC)       | `src/lib/logExport/runner.ts`                |
| 프로세스 수명 주기      | `src/lib/logExport/childRunner.ts`           |
| 자식 프로세스 진입점    | `src/lib/logExport/exportChild.ts`           |
| 읽기 전용 연결 열기     | `src/lib/db/logExportReadOnly.ts`            |
| 공유 쿼리/매핑          | `src/lib/usage/callLogExportQueries.ts`      |
| 상세 정보 리졸버        | `src/lib/usage/callLogDetailResolver.ts`     |
| API 표현 변환           | `src/lib/logExport/presenter.ts`             |
| BigQuery 대상           | `src/lib/logExport/destinations/bigquery.ts` |
| Google 서비스 계정 인증 | `src/lib/logExport/googleServiceAccount.ts`  |
| 호출 로그 소스          | `src/lib/usage/callLogExportSource.ts`       |
| 영속화                  | `src/lib/db/logExportDestinations.ts`        |
| Cron 작업               | `src/lib/jobs/logExportJob.ts`               |
| REST 계층               | `src/app/api/log-export/`                    |
| 대시보드 페이지         | `src/app/(dashboard)/dashboard/log-export/`  |

스키마: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. REST API

모든 라우트에는 관리 인증이 적용됩니다 (`requireManagementAuth`). 비밀 정보는 절대 반환되지 않습니다:
저장된 비밀 정보는 리터럴 `__stored__`로 반환되며, 업데이트 시 이 값을 다시 보내면
저장된 자격 증명이 유지됩니다.

비밀 정보를 선언하는 유형의 대상을 생성하거나 업데이트하려면 **`STORAGE_ENCRYPTION_KEY`가
필요합니다**. 이 키가 없으면 `encrypt()`가 아무런 경고 없이 입력값을 그대로 반환하므로,
자격 증명을 SQLite에 평문으로 저장하는 대신 400 응답으로 쓰기를 거부합니다 (Telegram 웹훅에
적용되는 것과 동일한 보호 장치입니다).

| 메서드   | 경로                                     | 용도                                                   |
| -------- | ---------------------------------------- | ------------------------------------------------------ |
| `GET`    | `/api/log-export/types`                  | 대상 유형 및 각 유형의 설정 필드 목록                  |
| `GET`    | `/api/log-export/destinations`           | 대상 목록 조회 (비밀 정보 마스킹)                      |
| `POST`   | `/api/log-export/destinations`           | 대상 생성                                              |
| `GET`    | `/api/log-export/destinations/{id}`      | 단일 대상 조회                                         |
| `PUT`    | `/api/log-export/destinations/{id}`      | 이름 / 활성화 여부 / 설정 / 배치 처리 업데이트         |
| `DELETE` | `/api/log-export/destinations/{id}`      | 삭제                                                   |
| `POST`   | `/api/log-export/destinations/{id}/test` | 자격 증명 확인, 쓰기 작업 없음                         |
| `POST`   | `/api/log-export/destinations/{id}/run`  | 지금 대기 항목 모두 처리, 예약 실행과 동일한 경로 사용 |
| `GET`    | `/api/log-export/status`                 | Cron 상태, 최근 실행, 대상별 미처리 항목               |

`GET /api/log-export/types` 덕분에 UI를 범용적으로 구현할 수 있습니다: 반환된 필드 설명자를 바탕으로
대시보드 양식이 렌더링되므로 새 대상을 추가해도 UI를 변경할 필요가 없습니다.

---

## 4. BigQuery 대상

설정 키 (`type: "bigquery"`):

| 키                   | 참고                                                                 |
| -------------------- | -------------------------------------------------------------------- |
| `projectId`          | 데이터 세트가 있는 GCP 프로젝트                                      |
| `datasetId`          | `[A-Za-z0-9_]+`                                                      |
| `tableId`            | `[A-Za-z0-9_]+`                                                      |
| `location`           | 데이터 세트를 생성해야 할 때만 사용됩니다 (기본값 `EU`)              |
| `serviceAccountJson` | 서비스 계정 키. 비밀 정보: 저장 시 암호화되며 절대 반환되지 않습니다 |
| `autoCreate`         | 첫 내보내기 시 데이터 세트와 테이블을 생성합니다 (기본값 `true`)     |

서비스 계정에는 대상 테이블에 대한 `bigquery.tables.updateData` 권한이 필요하며,
`autoCreate`가 켜져 있으면 `bigquery.datasets.create` / `bigquery.tables.create` 권한도 필요합니다.

설정된 배치는 HTTP 단위가 아니라 **커서** 단위입니다. `send()`는 이를 최대 500행씩 insertAll
호출로 나누므로, `batch_size`가 커도 BigQuery의 10 MB 요청 제한을 초과하지 않습니다.
일시적인 상태 코드(408/429/500/502/503/504)에 대해서는 동일한 insertId를 재사용하면서 지수
백오프로 최대 세 번 재시도합니다. 인증 및 스키마 오류는 실행을 낭비하지 않도록 첫 시도에서
예외를 발생시킵니다.

방금 생성한 테이블은 아직 스트리밍 엔드포인트에서 보이지 않아 몇 초 동안
404를 반환합니다. 이 404는 재시도하지만, **이번 실행에서 테이블을 생성한 경우에만** 해당합니다.
실제로 존재하지 않는 테이블은 여전히 즉시 실패합니다. 최근에 삭제한 이름으로 테이블을
다시 생성하면 BigQuery가 몇 분 동안 스트리밍 삽입을 거부한다는 점에 유의하세요. 이는
삭제 후 재생성 방식의 특성이므로, 테이블을 삭제하고 다시 추가하기보다는 새 테이블 이름을 사용하세요.

**부분 실패는 비어 있지 않은 `insertErrors[]`와 함께 HTTP 200으로 반환됩니다.** 이는
실패로 처리되어 예외가 발생하므로, BigQuery가 수락하지 않은 행을 지나 커서가
전진하지 않게 됩니다. `tests/unit/log-export-bigquery.test.ts`에서 이 동작을 검증합니다.

전송에는 일반 REST를 사용합니다. 자체 서명된 RS256 어설션을
`https://oauth2.googleapis.com/token`에서 액세스 토큰으로 교환한 다음, 행을 `tabledata.insertAll`로 전송합니다. Google SDK는
사용하지 않습니다. 액세스 토큰은 (서비스 계정, 범위)별로 프로세스 내에 캐시됩니다.

생성된 테이블에는 Logs 탭의 각 필드에 대응하는 열과 `exported_at`이 포함되며,
실제 호출 로그 쿼리 방식에 맞게 구성됩니다.

- **`timestamp` 기준 일별 파티셔닝**으로, 날짜 범위가 지정된 쿼리는 해당 날짜만 스캔합니다.
- **`api_key_name`, `provider`, `model`, `status` 순서로 클러스터링**하므로, 실행 주체,
  요청 대상 또는 실패 여부로 필터링하면 각 파티션 내에서 스캔할 블록을 줄일 수 있습니다. BigQuery는
  클러스터링 열을 최대 4개까지 허용하며, 순서가 중요합니다. `api_key_name`만으로 필터링하면
  스캔할 블록이 줄어들지만, `status`만으로 필터링하면 그렇지 않습니다.
- `partitionExpirationDays`를 통한 **선택적 파티션 보존 기간**(0은 모두 보존)은
  테이블 생성 시 적용됩니다.

두 설정 모두 생성 시점에 적용됩니다. 기존 테이블은 원래 구성을 유지하므로,
이 설정을 적용하려면 대상이 새 테이블 ID를 가리키도록 하세요.

`tests/unit/log-export-bigquery.test.ts`는 매퍼와 테이블 스키마가 항상 일치하는지
검증하므로, 새로운 호출 로그 열이 내보내기 과정에서 아무런 알림 없이 누락되지 않습니다.

배치는 행 수와 직렬화된 바이트 크기 **둘 다**를 기준으로 분할됩니다. 페이로드까지 내보내면
행 수만으로는 충분하지 않습니다. 프롬프트가 포함된 500행은 수십 메가바이트에 달할 수 있으며, insertAll은
10 MB를 초과하는 요청을 거부합니다. 청크는 500행 또는 9 MB 중 먼저 도달하는 기준에서 마감됩니다.

---

## 5. OTLP/HTTP 트레이스 대상

설정에서는 `type: "otlp-http"`를 사용합니다. 이는 영구 저장된 호출 로그를 커서 기반으로 예약 내보내기하는 기능이며,
`open-sse/services/routing/otel.ts`의 최선형 실시간 라우팅 이벤트 싱크와는 다릅니다.
이 기능은 해당 싱크의 환경 변수, 타이머 또는 버퍼를 읽거나 변경하지 않습니다.
둘 다 활성화하면 서로 독립적인 두 종류의 스팬이 생성될 수 있습니다.
이러한 호출 로그 스팬을 구분하려면 `omniroute.log-export` 계측 스코프를 사용하세요.

| 키                | 기본값 / 용도                                                                |
| ----------------- | ---------------------------------------------------------------------------- |
| `endpoint`        | 필수 전체 HTTP(S) 트레이스 URL; `/v1/traces` 접미사는 추가되지 않음          |
| `headers`         | 선택 사항인 `Name: value` 형식의 줄 또는 문자열로 구성된 JSON 객체; 암호화됨 |
| `serviceName`     | `omniroute`; 리소스 `service.name`                                           |
| `langfuseMapping` | `false`; Langfuse 생성/세션/사용자 속성 추가                                 |
| `identity`        | `pseudonymous`, `keyName` 또는 `none`                                        |
| `paths`           | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`                      |
| `timeoutMs`       | HTTP 시도당 `30000`                                                          |
| `environment`     | 미설정; 선택 사항인 `langfuse.environment`                                   |

일반 대시보드에서 이 필드를 표시합니다. `paths`는 API 배열 또는 정확한 경로를
줄바꿈/쉼표로 구분한 텍스트 영역 입력을 허용합니다. 임베딩, 재순위화 및 기타 경로는
명시적으로 허용하지 않으면 건너뜁니다. 건너뛴 행도 커서를 전진시킵니다. 기존
실행기의 `exported`/`exportedTotal` 카운터는 수락된 스팬 수가 아니라 필터링된
행을 포함하여 처리된 원본 행 수를 집계합니다. 필터링은 자식 프로세스에서 수행되며,
IPC/커서 계약은 변경하지 않습니다.

URL 검증에는 `src/shared/network/outboundUrlGuard.ts`의 DB를 사용하지 않는
`parseAndValidateNonMetadataUrl` 헬퍼, 즉 `block-metadata` 정책을 사용합니다. 비공개 URL을
허용하도록 설정한 웹훅 검증기와 동일하게 메타데이터/프로토콜/내장 자격 증명을 무조건 검사하지만,
전역 기능 플래그 재정의 없이도 localhost/LAN 대상을 의도적으로 허용합니다.
따라서 비공개 HTTP 엔드포인트를 포함한 자체 호스팅 Langfuse, Phoenix, Tempo 및 Collector
엔드포인트를 사용할 수 있습니다. 클라우드 메타데이터 호스트는 항상 차단됩니다.
리디렉션을 따르지 않으므로 수집기가 자격 증명을 다른 호스트로 리디렉션할 수 없습니다.
기존의 문자열 기반 URL 가드와 마찬가지로 DNS 확인 결과를 고정하지 않으므로,
운영자가 제어하는 호스트만 설정하세요. 엔드포인트가 신뢰할 수 있는 네트워크에 있지 않다면
가급적 HTTPS를 사용하세요.

### 페이로드 및 전송

OTLP/HTTP JSON (`ExportTraceServiceRequest`, `Content-Type: application/json`)은 허용된 행마다
CLIENT 스팬 하나를 전송하며, 이름은 해당 행의 정확한 요청 경로로 지정합니다. 경로를 이름으로 사용하면
스팬 이름에 모델이나 식별 데이터를 포함하지 않고도 Chat Completions, Responses 및 Messages를
구분할 수 있습니다. 리소스 속성에는 `service.name`과 패키지의 `service.version`이 포함됩니다.

일반 채팅 시도 로거(`open-sse/handlers/chatCore/attemptLogging.ts`)는 완료 시
`duration = Date.now() - startTime`을 기록하며 타임스탬프는 제공하지 않습니다.
`src/lib/usage/callLogs.ts`의 `saveCallLogOperation`은 타임스탬프의 기본값을 기록
(완료) 시각으로 설정합니다. 따라서 내보내기에서는 종료 시각 = 행 타임스탬프,
시작 시각 = 종료 시각 − 소요 시간으로 설정합니다
(밀리초를 10진수 나노초로 변환). 호출자가 제공한 과거 타임스탬프도 종료 시각으로
유지됩니다. 행별로 시작/완료를 구분하는 표시는 없습니다.
소요 시간이 null이면 0이 됩니다. 타임스탬프가 잘못되었거나 누락되면 비결정적인 스팬을
생성하는 대신 배치가 실패합니다. `ttftMs`는 null을 허용하며 `omniroute.ttft_ms`에 매핑됩니다.

속성에는 `gen_ai.operation.name="chat"`, 제공자, 요청/응답 모델,
입력/출력 토큰, 선택 사항인 캐시 읽기/캐시 생성/추론 토큰, HTTP 상태,
콤보, 캐시 소스, 세션 태그 및 상관관계 ID가 포함됩니다. 정수 OTLP 값과 타임스탬프는
10진수 문자열이며, 문자열, 불리언 및 소수는 각각 해당하는 네이티브 OTLP 값
유형을 사용합니다. 오류 스팬에는 ERROR 상태와 민감 정보가 제거된 상태 메시지가 포함됩니다.
정규 레코드에는 업스트림 호스트 URL이 없으므로 수집기를 모델 서버로 잘못
식별하지 않도록 `server.address`를 생략합니다. 비용은 내보내지 않습니다.

`includeBodies=true`인 경우에만 콘텐츠를 로드합니다. `langfuseMapping=false`이면
`gen_ai.input.messages` / `gen_ai.output.messages`에는 semconv
메시지 배열로 재구성한 데이터가 아니라 OmniRoute에 저장된 대로 민감 정보가 제거된 요청/응답
본문 JSON이 담깁니다(파싱 가능한 경우 정규화됨). 잘렸거나 JSON이 아닌 본문은 원시 텍스트로 유지됩니다.
`langfuseMapping=true`이면 본문은 `langfuse.observation.input` / `langfuse.observation.output`으로만
출력됩니다. 각 본문을 한 번만 전송하도록 `gen_ai.*.messages` 속성은 생략됩니다.
두 모드 모두 기존 콘텐츠 로드 경로의 `maxBodyBytes`를 상속하며,
`omniroute.bodies_truncated=true`는 잘림을 나타냅니다.
이 대상은 추가 파이프라인 스냅샷이나 민감 정보가 제거되지 않은 아티팩트 읽기를 추가하지 않습니다.
본문을 내보낼 때는 한 시간 분량의 미처리 데이터가 쌓이지 않도록
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`와 같은 분 단위 주기를 사용하세요.

요청은 엔벌로프를 포함하여 스팬 500개 및 UTF-8 JSON 4 MiB로 제한됩니다.
허용된 모든 스팬은 커서 배치의 첫 요청 전에 크기를 검사합니다. 개별
스팬이 제한을 초과하면 해당 배치의 어떤 부분도 전송하지 않고 `maxBodyBytes`를
낮추라는 안내와 함께 실패합니다. 자동으로 누락시키지 않습니다. 사전 검사에서는 레코드 참조와
바이트 수만 유지하고 임시 스팬/JSON은 각각 폐기합니다. 배치의 직렬화된 사본을 추가로
보관하는 대신, 크기가 제한된 청크별로 스팬을 다시 구성합니다. HTTP 408/429/5xx, 네트워크 실패 및 시간 초과는
250/500 ms의 지수 백오프를 적용하여 최대 3회 시도합니다. `Retry-After`의 초 단위 값 또는 HTTP 날짜는
지연 시간을 최대 5초까지 늘릴 수 있습니다. 그 외 상태는 즉시 실패합니다. OTLP 2xx 부분 거부도
유실된 스팬을 수신 확인 처리하는 대신 예외를 발생시킵니다. 비어 있거나 유효한 JSON 수신 확인 응답은 허용하며,
응답 읽기 한도는 64 KiB입니다.

오류에는 익스포터 자체에서 확인한 정보만 포함됩니다. HTTP 상태, 재시도 분류, 시도 횟수 및 전송된 스팬
수, 또는 고정된 수신 확인/네트워크 실패 문구입니다. 컬렉터 응답 본문,
부분 성공 건수 및 응답 헤더는 오류, 로그 또는
대시보드에 절대 복사되지 않습니다. 실패하거나 일부만 수락된 배치는 수신 확인 처리되지 않습니다. 대상에는
해당 상태와 함께 실패 중으로 표시되고, 커서는 마지막으로 수신 확인된 배치에 유지되며, 다음 실행에서
동일한 행을 다시 전송합니다. 영구적인 실패 상태는 컬렉터나 구성을
수정할 때까지 계속 실패합니다. 응답 세부 정보는 컬렉터 자체 로그를 확인하세요. 호출 로그 오류 요약에는
별도의 민감 정보 마스킹이 계속 적용됩니다.
`prepare()`는 아무것도 프로비저닝하지 않습니다. 테스트는 정확히 `{"resourceSpans":[]}`를 POST로 전송하고,
호출 로그 스팬을 기록하지 않은 채 HTTP 상태를 보고합니다.

트레이스 ID와 스팬 ID는 각각
`"omniroute.trace\\0" + callLogId` 및 `"omniroute.span\\0" + callLogId`의 SHA-256 해시에서 처음 32/16자리의 16진수입니다. 재전송 시에도
동일한 ID를 사용합니다. 이것이 중복 제거를 보장하지는 않습니다. Langfuse
v4 수집을 포함한 일부 백엔드는 동일한 ID의 스팬을 중복 제거하지 않습니다. 충돌이나 일부 청크의 실패로 인해
재전송될 수 있는 범위는 최대 하나의 미확인 커서 배치입니다. 마지막 HTTP 청크뿐 아니라
해당 배치 전체가 중복될 수 있습니다. 이러한 절충점을 고려하여 커서 배치 크기를 선택하세요.

### Langfuse 예제

자체 호스팅 Langfuse 인스턴스에 대해 다음 필드를 구성하세요.

```json
{
  "endpoint": "https://langfuse.example.com/api/public/otel/v1/traces",
  "headers": "Authorization: Basic <base64-of-public-key:secret-key>",
  "serviceName": "omniroute",
  "langfuseMapping": true,
  "identity": "pseudonymous",
  "environment": "production"
}
```

리터럴 `public-key:secret-key` 문자열을 로컬에서 Base64로 인코딩하여 Authorization 값을
만드세요(예: `Buffer.from(publicKey + ":" + secretKey).toString("base64")`).
실제 자격 증명을 로그, 스크린샷 또는 이슈에 붙여 넣지 마세요. 매핑은
`x-langfuse-ingestion-version: 4`를 자동으로 설정합니다. Authorization은 여전히 `headers`로 제공합니다.
헤더와 생성된 식별용 솔트 모두 기존의 암호화된 비밀 필드
메커니즘 및 API 자리표시자를 사용합니다. `STORAGE_ENCRYPTION_KEY`가 필요합니다.

매핑은 생성 유형/모델, JSON 사용량 세부 정보(입력/출력/합계 및 사용 가능한
캐시 키), JSON 입력/출력 스냅샷, ERROR/DEFAULT 수준, 정제된 상태 메시지,
트레이스 이름, 세션 ID, 선택적 환경 및 공급자, 요청 모델, 경로, 콤보, 캐시
소스, 상태에 대한 필터링 가능한
`langfuse.observation.metadata.<key>`를 추가합니다. `langfuse.observation.completion_start_time`은
TTFT가 알려져 있고 지속 시간 범위 내에 있는 경우에만 시작 시각 + TTFT를 ISO 8601 형식으로 나타냅니다. 비용 속성은 전송하지 않습니다.

식별 모드는 `langfuse.user.id`에 적용됩니다.

- `pseudonymous`(기본값): 대상별 무작위
  32바이트 솔트를 사용하여 API 키의 내부 ID에 HMAC-SHA256을 적용합니다. 솔트가 없으면 생성 시 만들어져
  `identitySalt`로 암호화되며, 절대 반환되지 않고 편집 중에도 유지됩니다. 원시 키 ID는
  스팬 속성에 절대 넣지 않습니다. 대상의 솔트를 다시 생성하거나 교체하면 식별자가 변경됩니다.
- `keyName`: 구성된 API 키 이름으로, 운영자가 지정한 해당 레이블을 의도적으로 공개합니다.
- `none`: 사용자 ID를 포함하지 않습니다. 세션 태그가 있으면 계속 내보냅니다. 이러한 모드는
  임의의 프롬프트 내용이나 운영자가 제공한 세션/상관관계 레이블을 익명화하지 않습니다.

### 백필 없이 시작하기

생성 시에만 **현재 위치에서 시작(기존 로그 건너뛰기)**을 활성화하거나
생성 API 페이로드의 최상위 수준에 `startFromCurrentPosition: true`를 전달하세요. 이렇게 하면 마이그레이션 없이
기존 커서 헬퍼를 사용하여 `cursor_row_id`를 현재 보존된 호출 로그의 최대 rowid로
초기화합니다. 기본값은 false입니다(커서 0 및 보존된 기록 백필).
이는 업데이트 시 커서를 재설정하는 설정이 아닙니다.

공유 `ttftMs` 필드가 추가되면서 BigQuery 매퍼와
새 테이블 스키마에도 null을 허용하는 `ttft_ms` 열이 추가됩니다. 스키마 테스트에서는 모든 표준 레코드 필드에
대응하는 열이 있어야 합니다. 기존 테이블은 변경 없이 계속 내보냅니다. `prepare()`는 테이블 스키마를 읽고
해당 열이 없으면 `ttft_ms`만 생략합니다. 다음 실행에서 TTFT를 포함하려면
null을 허용하는 INT64 열을 추가하거나 새 테이블을 사용하세요. PATCH, 자동 스키마 변경 또는 추가
권한은 필요하지 않습니다. 다른 모든 행 필드에는 엄격한 스키마 검사가 유지됩니다.

---

## 6. 대상 추가하기

1. `LogExportDestinationType`을 내보내는 `src/lib/logExport/destinations/<name>.ts`를 생성합니다.
   Zod `configSchema`, UI용 `fields` 설명자 배열, `secretFields`, 그리고
   `test()` / `prepare()` / `send(records)`를 반환하는 `createClient(config)`를 구현합니다.
2. 이를 `src/lib/logExport/registry.ts`의 `DESTINATIONS` 배열에 추가합니다.
3. `tests/unit/` 아래에 테스트를 작성합니다.

변경 사항은 이것이 전부입니다. 영속성 처리, cron 작업, REST 계층, 비밀 정보 암호화 및
대시보드 양식은 모두 레지스트리를 참조합니다.

새 대상에 적용되는 두 가지 규칙:

- `send()`는 부분 실패 시 **반드시 예외를 던져야 합니다**. 정상적으로 완료되면 "대상에 이 행들이 저장되어 있다"는 뜻이며,
  커서는 해당 행들을 영구적으로 지나갑니다.
- 사용자가 제공한 URL을 사용하는 대상은 웹훅과 마찬가지로 요청을 보내기 전에
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`)을 통해 URL을 검증해야 합니다.
  BigQuery는 호스트가 상수로 정해져 있으므로 이 과정이 필요하지 않습니다.

---

## 7. 운영하기

- **대시보드**: 통합 → 로그 내보내기. 대상을 추가하고 **테스트**를 실행하여 행을 기록하지 않고
  자격 증명을 확인한 다음 활성화합니다.
- **백로그**: 각 대상 카드에는 대기 중인 행과 커서가 표시됩니다. `GET
/api/log-export/status`는 동일한 수치와 함께 최근 작업 실행 20건을 반환합니다.
- **한 대상의 실패가 다른 대상의 실패로 이어지지는 않습니다** — 실행 요약은 대상별 상태를
  `last_status` / `last_error`에 기록하며, 작업 실행 이력에는 집계 결과가 보관됩니다.
- **대상을 삭제하면 해당 커서도 삭제됩니다.** 다시 추가하면 보관 중인 가장 오래된
  호출 로그부터 시작하므로, 대상에 이미 저장되어 있을 수 있는 행도 다시 전송됩니다. BigQuery에서는 행별
  `insertId`가 BigQuery 자체의 중복 제거 기간 내에서만 이러한 중복을 처리하므로, 대상을 삭제하기보다는
  비활성화하는 것이 좋습니다.
