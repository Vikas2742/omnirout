# Guardrails (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **신뢰할 수 있는 원본:** `src/lib/guardrails/`
> **마지막 업데이트:** 2026-10-17 — v3.8.52 ([적용 범위 및 제한 사항](#coverage-and-limits) 추가:
> 훅이 적용되는 라우트 및 응답 경로, 병합된 비활성화 헤더(#16412), 필수 경계로서의 인젝션
> 차단 모드(#16413), 그리고 사후 호출 전에 응답을 확인하는 요소)

가드레일은 OmniRoute와 업스트림 제공자 사이의 경계에서 안전성, 정책 및 콘텐츠 변환을
적용합니다. 각 가드레일은 요청 페이로드(`preCall`)와 업스트림 응답(`postCall`)을
검사하고 필요에 따라 거부, 변환 또는 주석을 추가할 수 있습니다.

시스템은 **실패 허용(fail-open)** 방식입니다. 가드레일 실행 중 예외가 발생하면 레지스트리는
요청을 실패시키는 대신 오류를 기록하고 다음 가드레일을 계속 실행합니다. 차단은 명시적인
결정(`block: true`)이며, 우발적으로 발생하지 않습니다. 단, 중단된 요청은 예외입니다.
호출자의 `signal`이 중단된 경우, 예외가 발생한 가드레일을 건너뛰는 대신 훅 실행을
거부합니다.

훅은 모든 라우트나 모든 응답에서 실행되지 **않습니다**. 가드레일을 보안 제어 수단으로
사용하기 전에 [적용 범위 및 제한 사항](#coverage-and-limits)을 읽으십시오.

## 기본 제공 가드레일

레지스트리는 임포트 시 우선순위에 따라 6개의 가드레일을 자동으로 로드합니다
(`registry.ts` → `registerDefaultGuardrails()` 참조).

| 우선순위 | 이름                | 단계           | 파일                  |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

우선순위 숫자가 낮을수록 **먼저** 실행됩니다.

### 비전 브리지(`visionBridge.ts`) — 모달리티 브리지 PR-1

GLM 5.3 기본 모델과 `glm-5.3-{low,high,max}`에는 명시적인
`supportsVision:false` 레지스트리/사양 메타데이터가 있습니다. GLM 5.3 Flash 변형은
네이티브 비전 모델로 유지됩니다. Claude Code의 `/v1/messages` 라우트는 Claude에서
OpenAI로 변환하기 **전에** 공유 `handleChat` 사전 호출 가드레일 체인에 진입합니다.
중첩된 `Read` 도구 결과 이미지는 해당 변환을 통해 OpenAI `image_url` 콘텐츠로
승격되기 전에 설명되거나 처리되어야 합니다(#17069).

**비전 미지원 모델**로 전송되는 이미지 포함 요청을 가로채 전체 요청을 비전 지원 모델로
다시 라우팅하거나, 업스트림 호출 전에 이미지 부분을 구성 가능한 비전 모델이 생성한 텍스트
설명으로 교체합니다. 이를 통해 텍스트 전용 제공자가 멀티모달 페이로드를 투명하게 처리할
수 있습니다.

흐름:

1. 대상 모델이 이미 비전을 지원하는 경우 건너뜁니다(강제 브리지 목록
   `isVisionBridgeForcedModel`에 있는 경우는 제외).
2. `extractImageParts(messages)`(`visionBridgeHelpers.ts`)를 통해 이미지 부분을
   추출합니다. 이 함수는 `open-sse/utils/mediaParts.ts`의 **통합 미디어 감지기**
   `detectMediaParts()`에 처리를 위임합니다. 이는 콤보 호환성 필터와 공유되는 단일
   기준 정보원입니다. 추출은 `replaceImageParts`가 다시 삽입할 수 있는 형태
   (추출↔교체 계약)로 제한됩니다. 허용되는 형태는 OpenAI `image_url`, Anthropic
   base64 `source.type:"base64"`, Anthropic URL `source.type:"url"`, Responses API
   `input_image`입니다. Claude Code `tool_result.content`와 Responses 도구 출력 내부에
   중첩된 일치 이미지도 추출되고 원래 경로에서 교체됩니다. 표시자 전용 형태는 콤보 필터
   대상이므로 추출되지 않습니다.
   발견된 이미지가 없으면 건너뜁니다.
3. `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`)를 통해 런타임 설정을 확인합니다.
   새로운 `modalityBridge*` 설정 키가 우선하며, 기존 `visionBridge*` 키는 **한 주기
   동안의 대체 수단**(롤백 기간)으로 유지됩니다. 브리지가 비활성화된 경우 미디어를
   순회하기 전에 건너뜁니다.
4. 모드 선택기(`modalityBridgeVisionMode`, 아래 표 참조)가 재라우팅 또는 설명 생성을
   결정합니다. 재라우팅은 `model`만 교체된 `modifiedPayload`와 메타
   `{ rerouted, fromModel, toModel, imagesKept }`를 반환합니다.
5. 설명 생성 경로: 이미지 수를 `maxImages`로 제한하고, 작업을 고려한 프롬프트를 구성하며,
   설명 캐시를 확인하고, 비전 모델을 **병렬로** 호출한 후(`Promise.allSettled`), 해당
   위치에 `[Image N]: <description>` 텍스트 부분을 삽입합니다. 설명 생성에 실패하면
   `null`이 반환됩니다. 알 수 없거나 비전 지원 대상에는 원본 이미지가 유지되지만
   (#4012), **텍스트 전용으로 확인된 직접 대상** 또는 비전 지원 제공자가 없는 콤보에는
   부분 실패 및 설명 호출 한도를 초과한 이미지를 포함하여 설명되지 않은 모든 이미지에
   명시적인 `(unavailable — no vision-capable provider connected)` 텍스트 스텁이
   삽입됩니다(#17069). 모든 설명 생성이 실패한 경우의 기존 콤보 설명 대체 처리도
   유지됩니다(#8430).
6. `modifiedPayload`와 메타(`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`)를 반환합니다.

#### 모드 선택기(`modalityBridgeVisionMode`)

| 모드       | 기본값 | 동작                                                                                                                                                                                                                                                |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔      | 레거시 휴리스틱, 변경 없음(#6640/#7204): 비콤보/`auto/` 모델은 원본 모델에 이미 사용 가능한 자격 증명이 없는 한 최적의 비전 모델로 리라우트됩니다(자격 증명이 있으면 설명). 콤보 대상은 항상 설명합니다.                                            |
| `describe` |        | 항상 설명 — 리라우트 블록을 완전히 건너뛰며, 사용자가 선택한 모델이 항상 응답합니다.                                                                                                                                                                |
| `reroute`  |        | 강제 리라우트: 자격 증명이 있는 모델 유지 가드가 우회됩니다. 리라우트-**대상** 자격 증명 가드는 여전히 적용됩니다. 사용 가능한 비전 대상이 없으면 브리지는 설명하거나 텍스트 전용 대상에 원본 이미지를 전송하는 대신 명확한 오류와 함께 차단합니다. |

강제 모드는 자동 휴리스틱이 실행되기 **전에** 단락 평가되며, `auto` 동작은
PR-1 이전 가드레일과 바이트 단위로 동일합니다.

#### API 키 범위(`visionBridgeKeyScope.ts`)

호출자의 API 키가 `allowedConnections`, 할당량 풀
(`allowedQuotas`) 또는 모델(`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`)을 제한하는 경우, 브리지는
키가 사용할 수 있는 연결에서 키가 사용할 수 있는 리라우트 및 설명 모델만
선택합니다. 그런 다음 설명 호출은 항상 `x-omniroute-self-loop-key-id` 헤더와 함께
OmniRoute 셀프 루프를 거치므로, 수신 채팅 요청이 해당 키의 연결 및 모델 정책을
다시 적용합니다. `enforceApiKeyPolicy()`는 셀프 루프 베어러와 함께일 때만
해당 헤더를 인정하므로 접근 범위를 좁힐 수만 있으며, 확인되지 않는 id는
거부됩니다.

키에 대해 허용된 비전 모델이 없으면, **확인된 텍스트 전용 대상**은 이미지
바이트를 능력이 없는 업스트림으로 전달하는 대신 명확한 HTTP 400과 함께 이미지
요청을 로컬에서 거부합니다(#17069). 비전 능력이 알려지지 않았거나 네이티브인
대상의 경우, 설명 경로는 이전의 fail-open 동작을 유지합니다(메타
`{ skipped: true, reason: "no_permitted_vision_model" }`).
키가 없는 요청과 이러한 제한이 없는 키는 이전과 정확히 동일하게 동작합니다.

#### 작업 인식 설명 프롬프트(`modalityBridgeVisionTaskAware`)

기본값 **true**. `composeVisionPrompt()`(`visionBridgeHelpers.ts`)는
**마지막 사용자 메시지**의 텍스트(500자로 잘림)를 기본 설명 프롬프트에
추가하여 설명을 사용자가 실제로 요청한 내용 쪽으로 유도하고
(codex-vision-proxy 패턴), 비전 모델에 보이는 텍스트를 전사하도록 요청합니다.
플래그가 꺼져 있거나 사용자 텍스트가 없으면 기본 프롬프트가 변경 없이
사용됩니다.

설명 셀프 루프 자체의 OpenAI 호환 요청(`visionBridgeHelpers.ts`의
`callVisionModelSingle()`)은 항상 `image_url.detail: "high"`를 요청합니다.
즉, 모든 호출자/제공자에 대해 무조건 요청하며 어떤 클라이언트 신호에도
좌우되지 않습니다. 저해상도 샘플링은 이 프롬프트가 요구하는 바로 그
텍스트 전사 작업의 OCR 정확도를 떨어뜨리므로, 설명 호출 자체는 원래 인바운드
요청이 어떤 상세 수준을 사용했든 항상 고해상도를 요청합니다. 이는 내부 설명
요청 본문에만 영향을 미치며, OmniRoute가 기본 요청에서 호출자 자신의
`image_url.detail`을 전달하는 방식은 변경하지 않습니다. 해당 기본값은 별도로
적용되며, 감지된 OpenCode 클라이언트에 대해서만 `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`)에서 적용됩니다. 설명 셀프 루프의
Anthropic 와이어 포맷 분기에는 `detail` 필드가 없어 두 기본값 모두의 영향을
받지 않습니다.

#### 설명 출력 상한(`modalityBridgeVisionMaxChars`)

| 키                             | 기본값 | 범위               |
| ------------------------------ | ------ | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`    | `0` 또는 100–50000 |

`0`(기본값)은 **상한 없음**을 의미합니다. 즉, `callVisionModel()`이 반환한
설명이 수정 없이 그대로 전달되어 기존 동작을 유지합니다. 100–50000 범위의
값은 설명을 `…` 접미사로 잘라낸 뒤 `[Image N]: <description>`으로 다시
삽입합니다(`src/lib/guardrails/visionBridge.ts`의
`VisionBridgeGuardrail.preCall()`). 세부 정보가 많은 OCR 작업에서 다운스트림
모델이 전체 전사가 필요한 경우 이 값을 높이고, 수다스러운 비전 모델의 토큰
사용량을 제한하려면 낮추십시오. 대시보드 필드는 Vision 탭의 Advanced 패널
(`ModalityBridgeVisionTab.tsx`의 `modality-bridge-max-chars`)에 있으며, 1에서
99 사이의 값은 100 하한으로 올리되 명시적인 `0`은 그대로 둡니다. `0`은 단순히
"설정 안 됨" 기본값이 아니라 그 자체로 유효한 Zod 값입니다
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`).

#### 설명 캐시(`modalityBridge/bridgeCache.ts`)

설명 출력에 대한 인메모리 LRU + TTL 캐시로, 프로세스 전역에서 공유됩니다.
키 = `sha256(imageRef + composedPrompt + configuredBridgeModel)`이며
길이 접두사 프레이밍을 사용합니다(필드 경계 충돌 없음). 모델 구성 요소는
실제로 응답한 모델이 아니라 **구성된** 브리지 모델입니다. `callVisionModel`은
내부적으로 폴백할 수 있으며, 시도별로 키를 구성하면 캐시가 조각나기
때문입니다. 실패한 설명은 절대 캐시되지 않습니다. 설정:

| 키                              | 기본값 | 범위    |
| ------------------------------- | ------ | ------- |
| `modalityBridgeCacheEnabled`    | `true` | —       |
| `modalityBridgeCacheTtlMinutes` | `60`   | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`  | 10–5000 |

#### 원격 이미지 정규화 (셀프 루프 describe/base64 fetch)

브리지가 **원격** 이미지를 직접 fetch할 때 — Anthropic describe셀프 호출과 claude-wire-format base64 변환(`ensureBase64ImagesForClaudeWire`) 둘 다 `visionBridgeHelpers.ts`의 `fetchRemoteImageAsDataUri()`를 통해 수행됨 — 결과 데이터 URI는 비전 모델 요청에 임베드되기 전에 `normalizeDataUri()`(`open-sse/utils/imageNormalize.ts`)를 거칩니다. 크기가 너무 큰 이미지는 **2048px 긴 변**으로 축소되며(OpenAI/Anthropic이 이미 서버 측에서 적용하는 리사이즈 상한과 동일), 이는 비전 모델이 보는 내용을 바꾸지 않으면서 업로드 바이트/지연 시간을 줄입니다. 리사이즈는 동적 import로 로드되는 `sharp`를 사용합니다: 네이티브 바이너리가 로드되지 않는 플랫폼에서도 `normalizeDataUri()`는 **절대 throw하지 않습니다** — 원본 바이트를 그대로 통과시키는 방식으로 폴백하므로 describe/base64 변환 경로는 항상 계속 동작합니다. 이미지가 아닌 바이트(디코딩 가능한 이미지를 반환하지 않은 fetch)도 그대로 통과됩니다. 이 정규화는 브리지가 자체 셀프 호출을 위해 fetch한 이미지에만 적용됩니다 — 호출자의 원본 패스스루 페이로드에는 절대 적용되지 않으며, 이는 옵트인 전용 변경 원칙(Hard Rule #20)과 일치합니다.

#### 설정 스키마 + 마이그레이션

새로운 `modalityBridge*` 키들은 `updateSettingsSchema`(`src/shared/validation/settingsSchemas.ts`)에서 Zod로 검증됩니다: `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCache*` 트리오, 그리고 Audio Bridge에서 사용하는 `modalityBridgeAudio*` 그룹. 마이그레이션 `141_modality_bridge_settings.sql`은 기존 레거시 `visionBridge*` 값을 대응하는 새 키로 복사합니다(멱등적이며, 운영자가 설정한 `modalityBridge*` 값은 절대 덮어쓰지 않음); 레거시 키는 한 릴리스 주기 동안 읽기 폴백으로 계속 허용됩니다.

#### 투명성 헤더 + 통계

describe 변환이 적용된 응답에는 `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`가 포함됩니다(`modalityBridge/bridgeStats.ts`의 `buildModalityBridgeHeader()`가 생성하고, `src/sse/handlers/chatHelpers.ts`의 `withModalityBridgeHeader()`가 부여함). 재라우팅된 요청에는 헤더가 **없습니다** — 페이로드는 그대로였고 모델 교체는 이미 응답 본문의 `model` 필드에서 확인할 수 있습니다.

`GET /api/modality-bridge/stats`(관리 인증, `GET /api/settings`와 동일 계층)는 `vision`, `audio`, `video`에 대한 인메모리 모달리티별 카운터 `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }`를 반환합니다. `averageLatencyMs`는 전체 시도가 아니라 `latencySamples`를 분모로 사용합니다; 타이밍이 없는 작업은 0밀리초 샘플을 만들어내지 않습니다. `bridged`는 성공적인 변환에 대한 하위 호환 별칭으로 유지됩니다; 실패한 시도는 이를 증가시키지 않습니다. 카운터는 설계상 프로세스 재시작 시 초기화됩니다(회계가 아닌 텔레메트리).

#### 대시보드 구성

전용 대시보드 페이지는 `/dashboard/settings/modality-bridge`입니다. URL로 접근 가능한 `Vision`, `Audio`, `Video` 탭은 `tab` 값을 전환하는 동안 쿼리 파라미터를 보존합니다. Vision 탭은 활성화 여부, 모드, 모델 선택(자동 기본값 포함), 작업 인식 프롬프팅, 고급 타임아웃/이미지/설명 길이/캐시 제한, 런타임 카운터, 그리고 보호된 샘플 요청을 제공합니다. Audio 탭도 활성화되어 있습니다: 활성화 여부, Auto가 포함된 STT 전용 모델 선택기, 타임아웃/최대 클립 제한, 오디오 카운터, 그리고 `input_audio` 샘플 테스트를 제공합니다. Video 탭은 기능적으로 동작합니다: FFmpeg/ffprobe 런타임 상태를 보고하며 — 네 가지 명시적 UI 상태 중 하나(`unknown`: 프로브가 진행 중이거나 완료할 수 없음, `restricted`: 프로브가 클라이언트 측에서 건너뛰어지는 비루프백 대시보드 호스트, `unavailable`: 프로브 후 누락이 확인됨, `available`: FFmpeg/ffprobe 버전 포함) — 활성화/모델/프레임/비디오/타임아웃 제한을 저장하고, 모델 선택기를 비전 지원 모델로 필터링하며, 비디오 카운터를 제공합니다.

AI 설정 아래의 이전 Vision Bridge 카드는 새 페이지로 가는 호환성 링크이며, 더 이상 폼의 두 번째 사본을 소유하지 않습니다. Media Providers는 또한 기존 Speech-to-Text 플레이그라운드를 제거하지 않으면서 Image-to-Text 및 Speech-to-Text 워크플로를 해당 Modality Bridge 탭으로 연결합니다.

**셀프 루프 어드미션 우회:** describe 호출이 OmniRoute 자체 `/v1` 셀프 루프(비표준 프로바이더 모델)를 통해 라우팅될 때, 하위 요청은 `x-omniroute-admission-bypass: internal`을 전송하고 해석된 셀프 루프 자격 증명으로 인증됩니다 — 로컬 모드에서는 로컬 `sk_omniroute` 센티널, 또는 운영자가 설정한 `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` 환경 변수 키(#1350)를 사용하여 `REQUIRE_API_KEY=true` 배포에서도 describe 호출을 계속 실행할 수 있습니다. 우회는 해당 정확한 자격 증명에 대해서만 존중되므로, 외부 클라이언트가 이 헤더를 사용해 어드미션을 건너뛸 수 없습니다.

레거시 기본값은 `src/shared/constants/visionBridgeDefaults.ts`에 있습니다; 새 모드/작업 인식/캐시 기본값과 설정 리졸버는 `src/shared/constants/modalityBridgeDefaults.ts`에 있습니다. 가드레일은 테스트가 가짜 `getSettings` 및 `callVisionModel` 구현을 주입할 수 있도록 `deps` 생성자 옵션을 노출합니다.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

오디오를 포함한 채팅 요청이 오디오 입력을 받는 것으로 알려지지 않은 대상에 도달하기 전에 가로챕니다. 채팅 요청을 재라우팅하지는 않습니다: 오디오 파트는 기존 OpenAI 호환 multipart 엔드포인트를 통해 전사되고, 선택된 채팅 모델은 텍스트 전사본으로 계속 진행됩니다.

흐름:

1. `supportsAudio`를 `getResolvedModelCapabilities()`를 통해 확인합니다. 명시적인 provider-registry 메타데이터가 우선하고, 그다음 정적 모델 메타데이터, 그다음 동기화된 `modalities_input`이 적용됩니다. 선언된 입력 목록에 `audio`가 없으면 `false`이고, 기능 증거가 없으면 `null`로 유지됩니다. `false`와 `null` 모두 보수적 브리지를 활성화하며, `true`는 이를 우회합니다.
2. `modalityBridgeAudio*` 설정을 확인하고 공유 `detectMediaParts()` 감지기를 통해 모든 메시지에서 이어 붙일 수 있는 최상위 오디오 파트를 추출합니다. 지원되는 와이어 형식은 OpenAI `input_audio`, `audio_url`, `source.media_type: "audio/*"`입니다. 중첩 오디오는 라우팅을 위해 감지되지만 스플라이스 경로에서 제거되지 않습니다. 작업은 `modalityBridgeAudioMaxClips`로 제한되며, 이후 파트는 그대로 유지됩니다.
3. 구성된 `provider/model`을 존중하거나, `selectAudioBridgeModel()`이 안정적인 카탈로그 순서로 `AUDIO_TRANSCRIPTION_PROVIDERS`를 순회하여 사용 가능한 활성 provider 자격 증명이 있는 첫 번째 모델을 선택하도록 합니다.
4. `callAudioTranscription()`는 base64/data-URI 오디오를 multipart `file`로 변환하거나, DNS 피닝과 25 MB 제한이 있는 공인 주소 전용 아웃바운드 가드를 통해 원격 `audio_url`을 다운로드합니다. 그런 다음 `resolveSelfLoopBearer()`로 인증하여 파일과 선택된 모델을 로컬 `/v1/audio/transcriptions` 셀프 루프에 POST합니다. 기존 transcription 라우트는 일반적인 자격 증명 조회, 쿨다운/속도 제한 처리, provider 디스패치를 수행합니다.
5. 성공한 호출은 해당 파트를 `[Audio N]: <transcript>`로 대체합니다. 호출은 `Promise.allSettled`로 실행됩니다. 개별 실패는 해당 원본 오디오 파트를 보존합니다(#4012 계약). 모든 호출이 실패하고 대상이 `supportsAudio === false`임이 입증되면, 파트는 `[Audio N]: (unavailable — no STT provider connected)`가 됩니다(#8430 계약). 알 수 없는 대상(`null`)의 경우, 모든 호출이 실패한 결과는 그대로 유지됩니다. 사용 가능한 STT 자격 증명이 없는 것으로 입증된 텍스트 전용 대상은 네트워크 호출을 발행하지 않고 동일한 명시적 스텁을 받습니다.

성공한 트랜스크립트는 프로세스 전역 모달리티 브리지 LRU/TTL 캐시를 사용합니다. 키는 오디오 참조, 안정적인 `audio-transcription` 작업 레이블, 선택된 STT 모델을 결합합니다. 실패는 절대 캐시되지 않습니다. 오디오 시도는 공유 `bridged`, `cacheHits`, `failures`, `lastUsedAt` 카운터를 업데이트합니다. 변환된 응답은 `x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`를 포함합니다. 변경되지 않은 요청은 오디오 브리지 세그먼트를 받지 않습니다.

런타임 설정은 DB 기반이며 Zod로 검증됩니다:

| 키                            | 기본값  | 범위             |
| ----------------------------- | ------- | ---------------- |
| `modalityBridgeAudioEnabled`  | `true`  | —                |
| `modalityBridgeAudioModel`    | `""`    | 자동 또는 STT ID |
| `modalityBridgeAudioTimeout`  | `60000` | 1000–300000      |
| `modalityBridgeAudioMaxClips` | `3`     | 1–10             |

공유 캐시는 계속 `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, `modalityBridgeCacheMaxEntries`로 제어됩니다.

### 비디오 브리지 (`videoBridge.ts`, `videoBridgePipeline.ts`)

Chat Completions `messages`와 Responses API `input`의 최상위 비디오 파트를, 알려진 네이티브 비디오 지원이 없는 대상이 호출되기 전에 가로챕니다. 지원되는 형식은 `input_video`, `video_url`, `video_source`, HTTPS URL, `data:video/*;base64,...` 데이터 URI입니다. 텍스트의 일반 파일 이름은 비디오로 처리되지 않습니다.

`VideoBridgeGuardrail.preCall`(`videoBridge.ts`)는 요청 순회, 기능/정책 검사, 요청별 집계, 응답 페이로드를 담당합니다. 비디오별 작업 — 획득, 전체 결과 캐시, 프레임 시퀀스 설명(호출자가 선언한 오디오 트랜스크립트를 융합함), 시도별 메트릭/중단/정리 — 은 `videoBridgePipeline.ts`의 `processVideoPart` 뒤에 숨겨져 있으며, `preCall` 루프 내에서 비디오 파트당 한 번 호출됩니다. 해당 모듈은 또한 명시적 포트 경계인 `VideoMediaBrokerPort`(바이트 획득 및 샘플링된 프레임 추출), `VideoAudioTranscriptionPort`(호출자가 선언한 오디오 트랜스크립트를 샘플링된 캡션과 융합), `VideoDrilldownPort`(프레임 드릴다운 지속성 경계, 아직 `processVideoPart`에 연결되지 않음 — 현재는 별도의 `/api/modality-bridge/video/drilldown` 라우트만 드릴다운 항목을 기록함)를 정의합니다.

공용 `/v1` 요청 경로는 하위 프로세스를 임포트하거나 호출하지 않습니다. 원격 비디오는 50 MiB 제한 아래에서 다운로드됩니다. 인라인 base64 비디오는 보수적인 비디오당 디코딩 크기 상한 36 MiB를 가지므로 모델/메시지/프레이밍 엔벨로프가 50 MiB의 공용 JSON 요청 허용 한도 내에 유지될 수 있습니다. 인라인 길이와 디코딩된 크기 추정치는 할당 전에 검사됩니다. 초기 원격 URL과 모든 리디렉션에서 HTTPS가 필요하며, DNS 피닝이 적용된 기존 공인 주소 전용 아웃바운드 가드를 사용합니다. 그런 다음 바이트는 정확한 내부 `POST /api/modality-bridge/video/extract` 브로커 경계를 통과합니다. 해당 라우트는 `LOCAL_ONLY`이면서 `SPAWN_CAPABLE`이고, 프로세스별 인증된 신뢰할 수 있는 루프백 요청만 허용하며, URL, 파일 시스템 경로, 실행 파일 또는 인수 목록을 절대 허용하지 않습니다. API 본문 크기 파이프라인과 핸들러의 증분 본문 리더는 각각 50 MiB 브로커 입력 상한을 적용합니다. 해당 제한된 큐는 한 번에 하나의 추출을 실행하고, 네 개의 보류 작업을 허용하며, 보류 입력을 100 MiB로 제한합니다.

브로커 내부에서 `ffprobe`는 비공개 로컬 파일을 읽으며, 고정된 형식
허용 목록에서는 재생 목록 및 매니페스트 형식을 제외합니다. 허용된 MOV 계열
컨테이너의 경우 외부 MOV 데이터 참조는 기본적으로 비활성화된 상태로 유지되며,
고정 명령은 이를 활성화하지 않습니다. `ffprobe`와 `ffmpeg`는 모두
`file` 전용 프로토콜 허용 목록, 하나의 스레드, 고정된 인수 배열을 사용하며,
셸은 사용하지 않고 실행 파일은 `PATH`에서 확인합니다. 첨부된 사진 형식의 커버
스트림은 재생 가능한 후보가 아닙니다. 모든 재생 가능 스트림은 제한을 충족해야
하며, 결정론적인 최저 인덱스 대체 항목보다 명시적인 기본 스트림이 우선됩니다.
동영상은 600초, 차원당 8,192픽셀, 소스 픽셀 33,554,432개로 제한됩니다.
FFmpeg는 중간 지점의 JPEG 프레임 1~16개를 샘플링하고, 더 작은 입력을
확대하지 않으면서 긴 변을 최대 1,024픽셀로 축소하며, URL을 전달받지 않습니다.
샘플링의 기본값은 `uniform`입니다. 선택 사항인 `scene_aware` 및 실험적인
`segment_aware` 정책은 이미 검증된 로컬 스트림에 대해 추가로 한 번의 고정된
FFmpeg 패스를 수행하고, 제한된 `showinfo` 장면 타임스탬프를 선택하며, 감지기
실패, 시간 초과, 잘못된 형식의 출력 또는 빈 후보 집합이 발생하면 동일한 균일
중간 지점으로 결정론적으로 대체합니다. 세그먼트 인식 모드는 검증된 장면 구간에
비례하여 중간 지점 샘플을 할당합니다. 세그먼트 인식 증거와 대체 동작은 아래에
자세히 설명되어 있습니다. 모든 정책에서 선택 후에는 최대 16프레임이라는 엄격한
제한이 적용됩니다. 장면 인식 요청의 프레임 예산이 1개뿐인 경우 활성화된 전체
동영상 또는 포커스 창의 균일 중간 지점을 사용하고 `policyEffective: uniform`을
보고합니다. 선택된 장면 프레임 하나만으로는 시간축의 양쪽 끝을 모두 보존할 수
없기 때문입니다. 호출자는 선택적으로 유한한 포커스 창(`start`/`end`초)을
제공할 수 있습니다. 경계는 미디어 재생 시간에 맞게 제한되고, 역순이거나 유한하지
않은 창은 거부되며, 모든 샘플링 정책은 정규화된 구간 내에서만 수행됩니다. 결과
창은 샘플링 메타데이터와 신뢰할 수 없는 설명 접두사에 포함되므로, 다운스트림
모델은 포커스가 지정된 발췌 부분과 전체 타임라인을 구분할 수 있습니다.

의미론적 캡션 포커스는 별도의 명시적 설정입니다. 기본 `full` 분석 모드는 기존
프레임 프롬프트를 유지하며 요청 텍스트를 캡션 모델에 절대 전달하지 않습니다.
`focused` 모드에서 브리지는 동일한 Chat 또는 Responses 컨테이너로부터 사용자가
작성한 비어 있지 않은 최신 `text`/`input_text`만 읽고, 이를 NFC로 정규화하며,
제어 문자와 공백을 축약하고, 500개의 유니코드 코드 포인트로 제한합니다. 결과가
비어 있으면 정확히 `full` 프롬프트로 대체됩니다. 사용할 수 있는 힌트는 전용
신뢰할 수 없는 사용자 컨텍스트 블록에서 JSON으로 직렬화되며, 관찰 가능한 세부
정보의 우선순위만 지정할 수 있습니다. 미디어에서 보이거나 들리는 지시를 따르지
말라는 별도의 경고를 재정의할 수는 없습니다. 텍스트 포커스는 `start`/`end`를
추론하지 않으며 시간 샘플러를 변경하지도 않습니다.

#### FU-07 구조적 세그먼트 증거

`segment_aware`는 이미 검증된 로컬 동영상 스트림에 대해 제한된 사전 분석 패스를
한 번 사용합니다. 고정 필터 체인은 먼저 너비를 최대 320픽셀로 조정하고 장면
전환과 정지 구간을 감지한 다음, 블러, 평균 휘도, 공간적/시간적 정보를 위해 초당
1프레임을 샘플링합니다. 이 패스는 구조적 샘플 600개, FFmpeg/필터 스레드 1개,
동일한 `file` 전용 프로토콜 및 컨테이너 허용 목록, 1 MiB의 프로세스 출력 한도,
그리고 브로커의 공유 중단/기한 내에서 최대 30초로 제한됩니다. 요청으로부터 명령,
필터, 경로 또는 URL을 절대 받지 않습니다.

구조적 값은 결정론적 샘플링 증거이지 의미론적 동영상 이해가 아닙니다. 이러한 값은
주제, 동작, 캡션, 음성 또는 사용자 의도를 추론하지 않습니다. 장면 및 정지 경계는
세그먼트를 구성합니다. 정지 범위, 블러, 노출, 공간적 세부 정보, 시간적 변화는
기존 1~16프레임 예산의 할당 방식에만 영향을 줍니다. 완전히 정지된 세그먼트는
최대 1프레임으로 제한되는 반면, 정지되지 않은 세그먼트는 남은 예산을 두고
경쟁합니다. 경계 수가 프레임 수보다 많을 때는 균일한 타임라인 범위가 유지되므로,
초반의 빠른 컷들이 긴 후반 세그먼트를 가릴 수 없습니다. 정지 경계로부터 1초의
분석 해상도 이내에 있는 장면 경계는 병합됩니다.

누락된 필터, 잘못된 형식이거나 비어 있는 증거, 감지기 오류 또는 제한된 사전 분석의
시간 초과가 발생하면 정확한 균일 중간 지점 정책으로 개방형 대체됩니다. 호출자
중단이나 브로커 기한의 경우에는 개방형 대체가 이루어지지 않습니다. 대신 진행 중인
하위 프로세스를 종료하고 이후의 프레임 추출을 방지하며, 비공개 임시 트리는
`finally`에서 제거됩니다.

`scripts/perf/video-bridge-fu07-eval.ts`는 중복 제거 후 캡션 호출 절감, 고밀도
모션 예산 할당, 블러/노출/SI-TI 증거, 긴 후반부가 있는 빠른 컷, 점진적 페이드의
오탐을 위한 결정론적 실제 FFmpeg 픽스처를 생성합니다. 사전 분석의 경과 시간을
기록하고, `/usr/bin/time`을 사용할 수 있는 경우 자식 프로세스 CPU와 최대 RSS도
기록합니다. 품질 검사는 구조적 오라클일 뿐입니다. 이 하네스에는 승인된 엔드포인트나
고정된 판정자가 없으므로 실제 캡션 모델 품질은 `HOLD` 상태로 유지됩니다.
`--caption-cost-per-call-usd`가 명시적인 양수 호출당 비용 추정치를 제공하지 않는
한 금전적 절감도 `HOLD` 상태로 유지됩니다. 스크립트는 어느 결과도 임의로 만들어
내지 않습니다.

각 프레임은 4 MiB로 제한되며, 모든 원시 프레임의 합계는 23 MiB, 직렬화된 브로커 응답은 32 MiB로 제한됩니다. 비공개 임시 디렉터리는 `finally`에서 제거됩니다. OmniRoute는 FFmpeg를 번들로 제공하지 않으며 사용자 지정 실행 파일 경로를 허용하지 않습니다. 캡션을 생성하기 전에 브리지는 보수적인 시각적 중복 제거 패스를 적용합니다. 각 JPEG는 16×16 그레이스케일 버퍼로 축소되고 마지막으로 유지된 프레임과만 비교됩니다. 요청된 캡션 예산이 한 프레임을 초과하는 경우, 추출은 해당 예산의 최대 두 배이면서 16개 프레임을 넘지 않는 제한된 후보 풀을 제공합니다. 요청된 상한은 중복 제거 후에만 적용되며, 예산이 2 이상일 때 최종 솎아내기 중에 첫 번째와 마지막 선택 후보가 보존됩니다. 버전이 지정된 `grayscale-16x16-mean-cells-v2` 정책은 평균 휘도 델타와 정규화된 델타가 0.05 이상인 썸네일 셀 비율 중 더 큰 값을 사용합니다. 중복 임계값은 상수 0.04이며, 런타임 설정으로 노출되기보다는 예측 가능성을 위해 선택되었습니다. 이 보조 고대비 신호는 평균만 비교할 때 숨겨질 수 있는 작은 움직임과 가시 텍스트 변화를 보존합니다. 비교기 또는 디코더 오류는 fail open으로 처리되어 커버리지를 유지합니다. 출력 메타데이터는 추출된 후보, 성공적으로 사용된 프레임, 삭제된 시각적 중복을 구분합니다.

명시적으로 표시된 비디오 파트는 타임스탬프가 포함된 콘택트 시트를 요청할 수 있습니다. 브리지는 최대 4열, 16프레임 JPEG 그리드를 생성합니다. 각 512픽셀 셀은 소스 타임스탬프를 고대비 하단 밴드에 새기며, 동일한 타임스탬프는 다운스트림 연관 및 감사를 위해 텍스트 메타데이터에 유지됩니다. 전체 JPEG는 32 MiB로 제한된 상태로 유지됩니다. `sharp`가 그리드를 디코딩하거나 구성할 수 없으면 브리지는 개별 JPEG 프레임으로 폴백합니다. 클라이언트 중단은 여전히 시트 작업을 통해 전파됩니다.

프로모션 증거는 합성 구성 마이크로벤치마크와 의도적으로 분리되어 있습니다. `scripts/perf/video-bridge-contact-sheet-eval.ts`는 실제 OpenAI 호환 비전 모델을 위한 스키마 버전이 지정된 A/B 하네스를 정의합니다. 이는 제공자가 보고한 토큰, 종단 간 실제 지연(시트 구성 포함), 모델 호출 횟수, 매니페스트에 정의된 사실 보존율을 측정합니다. 원시 모델 응답은 보고서에 기록되지 않으며, SHA-256 다이제스트와 일치된 사실 ID만 유지됩니다. `--execute-real`이 전달되고 `--model`, `OMNIROUTE_BASE_URL`, `OMNIROUTE_API_KEY`가 구성된 경우가 아니면 하네스는 네트워크 또는 유료 모델 호출을 수행하지 않습니다. 해당 명시적 실제 실행이 없으면 기계 판독 가능한 판정은 `HOLD`로 유지되며, 합성 페이로드/호출 횟수 측정만으로는 프로모션 증거가 되지 않습니다.

호출자는 이미 정렬된 텍스트를 보유한 경우 지원되는 비디오 파트에 선택적 `transcript.cues` 배열을 첨부할 수 있습니다. 각 큐는 `text`, 프로브된 지속 시간 내의 유한한 `start`/`end` 구간, 그리고 허용 목록에 있는 `source`(`client`, `embedded`, 또는 `audio-bridge`)를 포함해야 합니다. `confidence`는 기본값이 `1`이며 `0`과 `1` 사이에 있어야 합니다. 정확히 중복되는 큐는 축소됩니다. OmniRoute는 이 메타데이터로 전사를 시작하지 않습니다. 검증된 큐는 소스, 신뢰도, 구간과 함께 설명된 결과에 복사되며, 프레임 캡션과 나란히 신뢰할 수 없는 관찰로 렌더링됩니다. 유효하지 않거나 범위를 벗어나거나 출처가 없는 텍스트는 캡션 스트림에 섞이지 않고 거부됩니다. 두 요청 본문 전사 채널 모두 제공된 출처를 `client`로 정규화하며, 여기에는 자기 주장된 `embedded` 또는 `audio-bridge` 레이블도 포함됩니다. 서버 소유 어댑터만 코드 전용 `trustedSource` 인수를 통해 해당 신뢰 레이블을 할당할 수 있습니다. 요청 JSON 필드는 그 인수에 도달할 수 없습니다. 전사 텍스트는 출처와 관계없이 신뢰할 수 없는 미디어 파생 콘텐츠로 남으며, 절대 권한 부여를 결정해서는 안 됩니다.

고급 호출자는 동일한 비디오에 대해 `audioTranscript` 트랙을 제공할 수 있습니다. 이는 클라이언트 제공 텍스트로 취급되며 서버 전사의 증거가 아닙니다. 융합 접점은 시각 및 오디오 관찰을 하나의 데드라인과 중단 신호 아래에서 실행하고, 공통 타임라인에서 정렬하며, 정확한 중복을 축소하고, 한쪽만 성공하면 부분 결과를 보고합니다. 유효하지 않은 `audioTranscript`는 전체 비디오를 실패시키는 대신 해당 부분 결과로 저하됩니다. 즉, 시각 설명은 유지되고 오디오 분기는 정제된 실패 코드를 기록합니다. 분기별 가용성, 부분 플래그, 정제된 실패 코드는 설명된 결과, 가드레일 메타데이터(`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), 결과 캐시 메타데이터, 브리지 융합 카운터에 보존됩니다. 기본 Video Bridge 경로는 음성-텍스트 변환을 호출하거나 두 번째 미디어 사본을 다운로드하지 않습니다. 해당 명시적 트랙이 없으면 비디오 전용으로 유지됩니다.

**트랜스크립트 보존(#12150 P1).** 이는 Video Bridge(자체가 옵트인)가 트랜스크립트 큐를 렌더링할 때마다 자동으로 적용됩니다 — 별도의 보존 플래그는 없습니다. 요청이 트랜스크립트 큐(호출자가 선언한 `transcript` 또는 결합된 `audioTranscript`)를 렌더링하면, 가드레일은 이를 `videoBridgeObserved`로 표시하고 비디오 설명의 리댁트된 섀도, 즉 모든 큐의 자유 텍스트 본문이 `[redacted-video-transcript]`로 대체된 동일한 렌더링을 생성합니다. 이 섀도는 문자열이 조립되기 전에 구조화된 큐 필드를 치환하여 만들어지며(평탄화된 텍스트를 파싱하여 만드는 방식이 아니므로, `[inaudible]`/`[music]`처럼 `]`를 포함하는 본문을 비롯해 적대적이든 일반적이든 어떤 큐 콘텐츠도 살아남을 수 없습니다). 영속화된 호출 로그 요청 본문은 각 비디오에서 파생된 텍스트 파트를 해당 리댁트된 섀도로 교체하며, 이는 내용 동등성으로 매칭됩니다. `fullText` 앵커는 완료된 호출 전 가드레일 페이로드에서 다시 읽으므로, 이후 체인 가드레일(PII 및 자격 증명 마스커, 우선순위 10/95)이 설명 텍스트를 제자리에서 다시 작성한 후에도, 그리고 시스템 프롬프트/핸드오프/메모리 주입이 메시지 배열을 재구성한 후에도 매칭이 여전히 성공합니다. 모델로 업스트림 전송되는 본문은 변경되지 않습니다. 관측된 요청은 영구 Memory도 채우지 않으므로(요청 및 응답에서 파생된 추출이 모두 건너뛰어짐), 모델 자체의 응답이 트랜스크립트 텍스트를 Memory에 에코할 수 없습니다.

**원시 비디오 필드(#12430).** 브리지가 활성화되어 있고 네이티브 비디오 지원이 알 수 없거나 없는 경우, 정의된 `transcript`/`audioTranscript` 필드 또한 `videoBridgeObserved`를 활성화하며, 이는 설명 실패 이후나 `maxVideos` 제한 이후에도 마찬가지입니다. `null`과 빈 문자열은 포함되지만, 존재하지 않는 필드와 비디오가 아닌 메타데이터는 포함되지 않습니다. 보존된 사본은 이 필드들을 리댁트하거나 요청을 생략하며, 캐시/Memory는 우회됩니다.

해당 폴백 경로에서는 유효한 호출자 큐가 비표준 제공자 필드가 아니라 지원되는 `text`/`input_text` 파트가 됩니다. 요청이 제공한 두 트랙은 모두 신뢰할 수 없는 `client` 관측치로 남으며, 비디오가 설명되지 않았고 타임스탬프가 미디어와 대조 검증되지 않았다는 명시적 경고가 함께 제공됩니다. 기존의 256개 큐/64-KiB 총계 및 큐당 예산은 두 트랙에 걸쳐 함께 적용됩니다. 타임스탬프는 브로커의 600초 상한과 제공된 포커스 윈도 내에 맞아야 합니다. 유효하지 않은 트랙은 폐기되며 임의 텍스트로 전달되지 않습니다. 결합 예산을 초과하지 않는 한 유효한 형제 트랙은 여전히 사용할 수 있습니다. `null`/빈 필드는 텍스트를 추가하지 않습니다. 이 폴백은 미디어 가져오기나 트랜스크립션을 추가하지 않습니다. 트랜스크립트 확장 필드는 폴백 비디오 캐리어와 그 `video_url`/`source` 객체에서 제거됩니다. OpenAI 와이어 허용 목록은 엄격하게 유지됩니다. 알 수 없는 네이티브 비디오 캐리어는 계속 사용할 수 있으며, 알려진 텍스트 전용 대상은 안전 마커를 유지합니다. 구조화된 리댁션 섀도는 추가된 트랜스크립트 텍스트를 보호하며, 원래 호출자 소유 요청은 변경되지 않습니다. 네이티브 지원 대상과 비활성화된 브리지는 기존 바이패스 동작을 유지합니다.

추가 보존 사본은 동일한 관측 요청 신호를 사용합니다. 가드레일 이전의 원시 클라이언트 요청 스냅샷, 메모리 내 대기 중 요청, 조기 거부된 요청 로그는 비디오 파트의 트랜스크립트 필드를 구조적으로 대체합니다. 파이프라인 단계와 컨텍스트 핸드오프에서 합성된 문자열 프롬프트는 영속화된 요청 본문 싱크에서 리댁트됩니다. 영속화된 `video_content_removed` 마커는 `previous_response_id` 이어하기가 의도적으로 폐기된 텍스트를 재구성하는 대신 페일 클로즈 방식으로 실패하도록 만듭니다. 관측된 요청이 로깅 전에 파트별 리댁션 섀도를 잃거나, 이후 요청 변형 후 여러 비디오 섀도 중 하나라도 매칭에 실패하면, 부분적으로 리댁트된 트랜스크립트를 보존하는 대신 보존된 요청 본문 전체를 생략합니다.

관측된 요청의 경우 모델 응답이 구조화된 큐 경계 없이 트랜스크립트의 일부를 인용할 수 있습니다. 따라서 영속화된 호출 로그 `responseBody`는 생략 마커로 대체되며, 상세 파이프라인 아티팩트(업스트림/클라이언트 본문과 스트림 청크를 포함할 수 있음)는 보존되지 않습니다. 해당 요청에 대해 시맨틱, 멱등성, 추론 재생 캐시는 읽기와 쓰기를 모두 우회합니다. 제공자 요청과 클라이언트에 표시되는 응답은 변경되지 않습니다. 상세 아티팩트가 생략될 때 조기 keepalive 바이트는 임시 버퍼에서 배출됩니다. Kiro의 잘못된 EventStream 경고는 페이로드 바이트 수만 보고하며, 그 내용이나 JSON 파서의 원시 오류는 절대 보고하지 않습니다. 이는 모든 무관한 제공자/플러그인 진단이 감사되었다고 주장하는 것은 아닙니다. 더 광범위한 보존 싱크 점검은 #11658에서 추적됩니다.

내부 `/api/modality-bridge/video/drilldown` 라이프사이클은 별도의 루프백/토큰 인증 캐시 기반입니다. 모든 작업에는 정규 불투명 주체 ID도 필요합니다. 프로덕션 호출자가 활성화되기 전에는 인증된 테넌트로부터 해당 ID를 파생해야 하며, 클라이언트가 선택한 값을 절대 전달해서는 안 됩니다. 캐시 키는 해당 주체를 정규 세션 및 비디오 참조 ID에 바인딩하고, SHA-256에서 파생된 키만 저장하며, 읽기와 삭제 모두를 동일한 주체로 범위를 한정합니다. 캐시는 항목당 최대 16개의 파생 JPEG 프레임을 저장하고, 10분 후에 만료하며, 제한된 `start`/`end` 읽기 또는 명시적 세션 삭제를 지원합니다.

각 주체는 16개 항목과 64 MiB의 정규 JPEG 데이터로 제한됩니다. 이러한 제한은 전역 64개 항목/256 MiB 상한과 독립적입니다. 주체 할당량 압박은 전역 LRU 제거를 고려하기 전에 해당 주체의 최근 최소 사용 항목만 제거합니다. 만료된 항목은 캐시 활동 시 주체 및 전역 회계 모두에서 정리되며, 취소와 검증 실패는 부분 교체를 커밋하지 않습니다.

캐시는 비정규 Base64, 과도한 패딩, JPEG가 아닌 미디어, 형식이 잘못되었거나 잘린 JPEG, 그리고 경계가 설정된 전체 이미지 `sharp` 디코드 중 경고를 발생시키는 JPEG를 거부합니다. 수락된 각 이미지는 정규 JPEG로 재인코딩하고, 호출자 필드를 신뢰하는 대신 디코드된 바이트에서 너비와 높이를 도출하며, 뒤따르는 polyglot 바이트는 보존하지 않고 버립니다. 경계가 설정된 정규 압축 버퍼만 두 할당량 모두에 부과됩니다. JSON 전송 한도에는 32 MiB 디코드 입력 상한에 대한 Base64 오버헤드가 포함됩니다. 저장된 각 파생물은 검증된 JPEG 포맷/해상도, 샘플링 정책, 파생 버전, 생성 시각, 서버가 계산한 콘텐츠 해시, 해시된 부모 참조, 그리고 신뢰된 호출자의 부모 콘텐츠 해시를 기록합니다. 취소는 원자적 캐시 커밋 전 비동기 디코드/해시 단계 사이에서 확인됩니다.

이번 작업 범위에서는 아직 프로덕션 프로듀서를 라우트에 연결하지 않으며, 다중 해상도 변형 선택도 제공하지 않습니다. 따라서 투명한 Video Bridge 요청 경로에는 추가 작업이 발생하지 않으며, 테넌트에 바인딩된 principal 파생과 전체 FU-08 다중 해상도 수명주기는 완료된 동작으로 문서화되는 대신 명시적인 후속 작업으로 남아 있습니다.

프레임은 구성된 Video 모델로 순차적으로 캡션됩니다. 빈 Video 재정의는 Vision 설정을 상속하며, 둘 다 비어 있으면 Vision 자동 라우터가 실효 비전 지원 모델을 선택합니다. 성공한 캡션은 원본 파트를 안정적인 `[Video description:` 접두사로 대체하며, 이 접두사는 해당 텍스트를 신뢰할 수 없는 미디어 파생 관찰로 표시하고 다운스트림 모델에 미디어에서 발견된 지시를 따르지 말라고 알립니다. 프레임 캡션 캐시 키에는 JPEG 바이트, 프롬프트, 타임스탬프, 유효 모델이 포함되며, 성공한 캡션만 캐시됩니다. 캐시 항목은 폴백 모델을 포함하여 실제로 성공한 프로듀서 모델을 유지하며, 서로 다른 프레임이 서로 다른 모델에 의해 생성된 경우 브리지는 `mixed`를 보고합니다. 캐시 적중은 해당 프로듀서 ID를 요청된 라우팅 계획으로 다시 라벨링하지 않고 재사용합니다. 전체 비디오 결과 캐시는 출력을 바꾸는 모든 입력을 키로 사용합니다 — 프롬프트, 유효 모델, 샘플링 정책, 프레임 수, 의미 분석 모드, 정규화된 포커스 힌트의 SHA-256 지문, 포커스 윈도, `transcript`, `audioTranscript`, 컨택트 시트 플래그 — 따라서 해당 차원 중 하나라도 변경되면 캐시 미스이며, 절대 오래된 결과를 재사용하지 않습니다. 시각적 중복 제거 정책 버전, 임계값, 경계가 설정된 후보 프레임 수 역시 결과 캐시 키와 메타데이터에 명시되므로, 정책 변경 시 오래된 전체 비디오 설명을 재사용할 수 없습니다. 결과 캐시 v4 메타데이터는 모드와 지문을 유지하며, 원시 사용자 작업은 절대 유지하지 않습니다. 가드레일 메타데이터는 요청된 분석 모드와 유효 분석 모드를 모두 보고하며, 사용 가능한 사용자 텍스트 없이 요청된 `focused` 모드는 실효적으로 `full`로 보고됩니다.

가드레일은 지원되는 모든 비디오 파트를 추출하지만 `modalityBridgeVideoMaxVideos`개를 초과하여 설명하지 않습니다. `supportsVideo === false`임이 입증된 대상의 경우, 실패했거나 한도를 초과한 비디오는 명시적인 안전 텍스트 마커가 되어 원시 비디오가 남지 않습니다. 기능을 알 수 없는 경우 해당 파트는 비디오 캐리어를 유지하며, 폴백 트랜스크립트는 위의 경계 설정된 텍스트 변환을 따릅니다. `supportsVideo === true`인 대상은 브리지를 우회합니다. 클라이언트 요청 중단 신호는 다운로드, 브로커 큐, 하위 프로세스, 캡션 호출을 통해 전파되며, 중단은 비디오 사이에서 멈추고 원시 미디어로 fail open하지 않습니다.

런타임 설정은 DB 기반이며 Zod로 검증됩니다:

| 키                                  | 기본값      | 범위 / 동작                                                                                                   |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | 선택적 런타임, 옵트인                                                                                         |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full`은 일반 캡션을 유지합니다. `focused`는 경계가 설정된, 신뢰할 수 없는 최신 사용자 컨텍스트를 사용합니다. |
| `modalityBridgeVideoModel`          | `""`        | Vision Bridge 모델 상속                                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, 또는 비례식 `segment_aware`; 검출기 실패 시 `uniform`으로 폴백                      |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

120초를 초과하는 레거시 영구 저장 Video 타임아웃 값은 브로커 데드라인으로 클램프됩니다. 해당 한도를 초과하는 새 설정 쓰기는 거부됩니다. `GET /api/modality-bridge/video/runtime`은 인증 또는 런타임 프로빙 전에 신뢰된 스탬프된 루프백 로컬리티를 요구한 다음 관리 인증을 요구합니다. 이 엔드포인트는 `available`, 정제된 FFmpeg/ffprobe 버전, 그리고 런타임을 사용할 수 없을 때 고정된 사유만 반환합니다. 내부 추출 엔드포인트는 공개 업로드 API가 아닙니다. 큐 포화 시 `503`과 `Retry-After`를 반환하고, 호출자 연결 끊김 시 `499`, 고정 브로커 데드라인 시 `504`를 반환합니다. 변환된 응답은 Vision 또는 Audio 세그먼트를 제거하지 않고 중앙 `x-omniroute-modality-bridge` 헤더에 `video->text;model=<visionModel>;parts=<videos>`를 추가합니다.

### PII Masker (`piiMasker.ts`)

**두** 단계 모두에서 실행됩니다.

- **`preCall`**은 페이로드를 복제하고 `system`, `messages`, `input`, `prompt`(일반 문자열 항목 포함)를 순회하며, 문자열 `content`/`text` 필드에 `processPII()`(`@/shared/utils/inputSanitizer`에서 제공)를 적용합니다. `PII_REDACTION_ENABLED=true`이면 탐지된 PII가 아웃바운드 페이로드에서 리대크션됩니다. 이는 `INPUT_SANITIZER_MODE`(프롬프트 인젝션 정책만 제어)와는 무관합니다. 리대크션이 꺼져 있으면, 호출은 콘텐츠를 다시 쓰지 않고 탐지 횟수만 기록합니다.
- **`postCall`**은 응답을 깊은 복제하고, `sanitizePIIResponse()`와 Responses API 형태 마스커(`maskResponsesOutput` — `output_text`와 `output[].content[].text`를 처리)를 실행합니다. 리대크션이 하나라도 발생하면 수정된 응답이 원본을 대체합니다.

가드레일은 절대 차단하지 않으며, 주석을 달거나(`meta.detections`, `meta.redacted`) 재작성만 합니다.

#### 유형별 선택, 사용자 정의 패턴 및 탐지 카운터

**대시보드 → 설정 → 보안 → PII 마스킹**은 _무엇을_ 마스킹할지 선택합니다. 마스킹을 켜지는 않습니다. 켜는 것은 여전히 `PII_REDACTION_ENABLED`(요청)와 `PII_RESPONSE_SANITIZATION`(응답 + SSE)이며, 둘 다 기본값은 꺼짐입니다.

- **유형별 선택** — 내장 id는 `src/shared/constants/piiTypes.ts`(`PII_BUILTIN_TYPES`)에 나열되어 있습니다. 설정하지 않으면 모든 유형을 의미합니다(이 설정이 존재하기 전의 동작). 요청 엔진의 `ssn_us` 패턴은 `ssn`에 매핑됩니다. 템플릿(Minimal, Standard, Financial, Brazilian, USA, Full)은 UI의 체크박스만 채웁니다.
- **사용자 정의 패턴** — 최대 20개의 정규식 또는 와일드카드 패턴(`*` = 공백이 아닌 문자 최대 64개, `?` = 1개)입니다. 일치 항목은 `[CUSTOM_REDACTED]`가 됩니다. 모든 패턴은 `compilePiiCustomPattern()`(`src/shared/utils/piiCustomPatterns.ts`)을 거칩니다: 최대 500자, 플래그는 `g i m s u`로 제한, 컴파일되어야 함, `safe-regex`(치명적 백트래킹)를 통과해야 함, 빈 문자열이나 리대크션 플레이스홀더와 일치해서는 안 됨. 실패한 패턴은 저장할 때와 테스트할 때 거부되며, 저장된 행이 실패하면 런타임에 컴파일되지 않고 건너뛰어집니다. 사용자 정의 패턴은 마스킹이 켜져 있는 동안에만 실행됩니다.
- **탐지 카운터** — 유형별 횟수(일치된 값은 절대 저장하지 않음)로, 메모리에 보관되며 재시작 시 초기화됩니다(`src/lib/pii/piiDetectionStats.ts`). 마스킹이 켜져 있는 동안에만 증가합니다.

설정은 `key_value` 테이블(네임스페이스 `pii_settings`, `src/lib/db/piiSettings.ts`)에 저장되며 1초 캐시를 통해 읽힙니다. API:

| 메서드 | 경로                     | 용도                                                              |
| ------ | ------------------------ | ----------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | 플래그 상태, `enabledTypes`, `customPatterns`, 탐지 카운터        |
| `PUT`  | `/api/settings/pii`      | `enabledTypes`(`null` = 전체) 및/또는 `customPatterns` 교체       |
| `POST` | `/api/settings/pii/test` | 최대 8KB 샘플에 대해 패턴 하나를 드라이런; 아무것도 저장되지 않음 |

세 엔드포인트 모두 관리자 인증이 필요하며 Zod(`src/shared/validation/schemas/piiSettings.ts`)로 본문을 검증합니다.

### 프롬프트 인젝션 (`promptInjection.ts`)

사용자가 제공한 콘텐츠에서 적대적 구조를 탐지하고 구성된 정책을 적용합니다. 동작은 환경 변수와 생성자 옵션에 의해 결정됩니다:

| 설정        | 환경 변수                                                                                          | 기본값 | 효과                                                                                                                                                                         |
| ----------- | -------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 활성화      | `INPUT_SANITIZER_ENABLED`                                                                          | `true` | `false`이면 가드레일이 즉시 단락됩니다.                                                                                                                                      |
| 모드        | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                    | `warn` | 인젝션 정책: `block`, `warn`, `log`. (`redact`는 하위 호환을 위해 허용되지만 인젝션 텍스트를 **제거하지 않습니다**; 요청 PII 재작성은 `PII_REDACTION_ENABLED`로 제어됩니다.) |
| 차단 임계값 | `blockThreshold` 옵션 / `INPUT_SANITIZER_BLOCK_THRESHOLD` (별칭 `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high` | 차단에 필요한 최소 심각도. 기본값에서 Medium은 관찰 전용입니다.                                                                                                              |

**모드 우선순위** (`getMode`): 호출자 `options.mode` → `INJECTION_GUARD_MODE` **DB 기능 플래그 오버라이드**(대시보드 → 설정 → 기능 플래그) → `INJECTION_GUARD_MODE` 환경 변수 → `INPUT_SANITIZER_MODE` 환경 변수 → `warn`. 따라서 대시보드 오버라이드가 환경 변수보다 우선하므로, 기능 플래그 UI가 실행 중인 가드레일을 실시간으로 제어합니다(재시작 불필요). DB 읽기는 페일 세이프입니다. 오류가 발생하면 가드레일이 환경 변수 기반 동작으로 폴백하며, 오버라이드가 설정되지 않은 경우 동작은 환경 변수만 사용하는 해석과 동일합니다.

탐지 소스:

1. `@/shared/utils/inputSanitizer`의 `sanitizeRequest()`(파이프라인 다른 곳에서도 사용되는 공용 탐지기 세트).
2. 내장 `DEFAULT_GUARD_PATTERNS`(현재 `system_override_inline`과 `markdown_system_block`, 둘 다 `high` 심각도).
3. 생성자 옵션으로 전달되는 선택적 `customPatterns`(문자열, 정규식 또는 `{ name, pattern, severity }` 레코드).

`mode === "block"` **이고** 하나 이상의 탐지가 심각도 임계값을 충족하면, `preCall`은 `{ block: true, message: "Request rejected: suspicious content detected" }`를 반환합니다. `warn`/`log` 모드에서는 가드레일이 로그를 남기지만 호출은 허용합니다. 공유 헬퍼 `evaluatePromptInjection()`도 레지스트리를 거치지 않고 프롬프트를 평가해야 하는 호출자를 위해 내보냅니다.

**스캔 범위(v3.8.20):** 탐지기는 결합된 프롬프트 텍스트의 **처음 16KB**만 검사합니다 — `src/shared/utils/inputSanitizer.ts`의 `MAX_INJECTION_SCAN_BYTES = 16 * 1024`(16,384바이트)입니다. `detectInjection()`과 `evaluatePromptInjection()` 모두 패턴 루프를 실행하기 전에 `slice(0, MAX_INJECTION_SCAN_BYTES)`를 수행합니다. 인젝션 지시문은 입력의 상단 근처에 위치하므로, 이는 탐지를 약화시키지 않으면서 수백 KB 규모의 페이로드에서 정규식 CPU/GC를 제한합니다(참고: #3932, #4041).

### 자격 증명 마스커 (`credentialMasker.ts`)

**두** 단계 모두에서 실행되며, 기본 체인에서 마지막입니다(우선순위 `95`). 아웃바운드 페이로드(메시지 콘텐츠, 도구 호출 인수, 도구 결과) **및** 제공자 응답에서 잘 알려진 API 키/비밀 토큰 패턴을 마스킹하므로, 프롬프트에 붙여넣은(또는 도구 결과로 에코된) 자격 증명이 업스트림 제공자나 클라이언트로 유출되지 않습니다.

- **옵트인 전용**, PII 마스킹과 동일한 방식(Hard Rule #20 관련): `settings.credentialRedactionEnabled === true` **또는** `CREDENTIAL_REDACTION_ENABLED=true`가 아니면 비활성화됩니다. 꺼져 있으면 이 가드레일은 아무 동작도 하지 않습니다 — 차단하지도, 재작성하지도 않습니다.
- `redactCredentials()`는 전체 페이로드/응답 트리를 순회하며(`walkValue()`, 프로토타입 오염 방지, `WeakSet`을 통한 순환 안전) 일치 항목을 `[REDACTED:<type>]` 플레이스홀더로 교체하고, 실제로 변경된 브랜치만 복제합니다.
- `CREDENTIAL_PATTERNS`는 LLM 제공자 키(OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), VCS/SaaS 토큰(GitHub, Slack, Linear, Notion, npm, Postman, Discord), 결제 키(Stripe, Square), 클라우드 키(AWS 액세스 키, Twilio, SendGrid, Mailgun), 개인 키/JWT, 자격 증명이 포함된 연결 문자열(`mongodb://user:pass@...` 등), 그리고 일반 `Authorization`/`x-api-key`/`api-key`/`apikey` 헤더 값 패턴을 포함합니다. 헤더 형태의 키(`authorization`, `x-api-key`, `api-key`, `apikey`)는 일반 텍스트 정규식이 아니라 구조적으로(값만, `Bearer `/`Basic ` 같은 스킴 접두사는 보존) 마스킹됩니다.
- 이 가드레일은 절대 차단하지 않습니다. 오직 재작성(`modifiedPayload` / `modifiedResponse`)하고 주석을 추가(`meta.credentialsRedacted`, `meta.count`)할 뿐입니다.

회귀 가드: `tests/unit/credential-masker-guardrail.test.ts`.

## 기본 계약 (`base.ts`)

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
  block?: boolean; // true이면 체인을 단락(short-circuit)합니다
  message?: string; // 차단 시 표면화됩니다
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // 요청을 다시 쓰기 위해 preCall에서 반환됩니다
  modifiedResponse?: TValue; // 응답을 다시 쓰기 위해 postCall에서 반환됩니다
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

가드레일은 `void`, `{}`, 또는 `{ block: false }` 중 하나를 반환하여 "변경 없음"을 나타냅니다. `modifiedPayload`/`modifiedResponse`를 반환하면 다운스트림 가드레일을 위해 체인을 통해 흐르는 값을 대체합니다. `signal?: AbortSignal`은 호출자 라이프사이클을 가드레일로 전달합니다. 요청 중단은 의도된 fail-open 예외입니다: 미디어 브리지는 지원하지 않는 것으로 알려진 대상에 원시 미디어를 복원하지 않고 작업을 중단하고 정리합니다.

## 레지스트리 (`registry.ts`)

싱글턴 `guardrailRegistry`는 다음을 노출합니다:

- `register(guardrail)` — 가드레일을 추가(또는 정규화된 이름으로 대체)하고 오름차순 `priority`로 다시 정렬합니다.
- `clear()` / `list()` — 관리용 헬퍼입니다.
- `runPreCallHooks(payload, context)` — 활성 가드레일을 반복하고, `modifiedPayload`를 통해 페이로드를 전달하며, 첫 `block: true`에서 중지합니다.
- `runPostCallHooks(response, context)` — 응답 측에서 동일한 흐름입니다.
- `resetGuardrailsForTests({ registerDefaults })` — 상태를 지우고, 선택적으로 기본값을 다시 등록하여 깔끔한 테스트 격리를 수행합니다.

두 러너 모두 `{ blocked, payload|response, results, guardrail?, message? }`를 반환하며, 여기서 `results`는 가드레일별 `blocked`, `skipped`, `modified`, `error`, `meta` 필드를 포함하는 `GuardrailExecutionResult` 레코드의 배열로, 추적에 유용합니다.

### 요청별 가드레일 비활성화

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })`는 현재 요청에 대해 건너뛰어야 할 가드레일 이름의 중복 제거된 목록을 집계합니다. 다섯 개의 채널이 있으며, 다음 순서로 읽혀 하나의 목록으로 병합됩니다(중복 제거 시 첫 번째 발생이 우선):

1. `apiKeyInfo.disabledGuardrails`
2. 요청 본문 `disabledGuardrails` (최상위)
3. 요청 본문 `metadata.disabledGuardrails` (`metadata`가 객체일 때만)
4. 헤더 `x-omniroute-disabled-guardrails`
5. 레거시 헤더 `x-disabled-guardrails`

다섯 개 채널이 모두 병합되며, 두 헤더도 포함됩니다: `x-omniroute-disabled-guardrails`와 `x-disabled-guardrails`를 모두 보내면 두 목록의 합집합이 건너뛰어지고, 빈 최신 헤더가 더 이상 레거시 헤더를 가리지 않습니다 ([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), [#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)에서 수정됨).

값은 문자열 배열 또는 쉼표로 구분된 문자열일 수 있습니다. 이름은 트림되고 소문자 케밥 케이스로 정규화되며(`pii_masker` → `pii-masker`), 빈 항목은 버려집니다. 결과는 `context.disabledGuardrails`를 통해 레지스트리로 전달되며, 레지스트리는 일치하는 가드레일을 건너뜁니다(`results`에서 `skipped: true`).

비활성화 목록은 **레지스트리**에만 영향을 미칩니다. 프롬프트 인젝션 `block` 모드는 필수 경계입니다: 인젝션 가드 미들웨어(`src/middleware/promptInjectionGuard.ts`)는 호출자가 제어하는 비활성화 목록 없이 `evaluatePromptInjection()`을 호출하므로([#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)에서 예전에 수행하던 죽은 `resolveDisabledGuardrails({ body })` 호출이 제거됨), `prompt-injection`을 비활성화하는 요청도 `block` 모드에서는 여전히 거부됩니다. 이는 의도된 설계입니다. 비활성화 채널은 호출자가 제어하며(요청 본문, 메타데이터, 헤더), 호출자가 운영자가 설정한 보안 제어를 끌 수 있어서는 안 됩니다([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)의 헤더 합집합은 어떤 레지스트리 가드레일이 건너뛰어지는지만 변경하며, 클라이언트가 미들웨어를 우회하도록 허용하지 않습니다. 키별 및 그룹별 필수 가드레일 정책은 v4 RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417)에서 추적됩니다. [커버리지 및 제한](#coverage-and-limits)을 참조하세요.

## 실행 순서

`src/sse/handlers/chat.ts`와 `open-sse/handlers/chatCore.ts`(즉, [적용 범위 및 제한](#coverage-and-limits)에 나열된 채팅 계열 라우트)를 통과하는 각 요청에 대해:

1. `resolveDisabledGuardrails(...)`는 API 키, 본문, 헤더로부터 건너뛸 목록을 구성합니다.
2. `guardrailRegistry.runPreCallHooks(body, ctx)`는 우선순위 오름차순으로 가드레일을 실행합니다:
   - 비활성화된 가드레일은 `skipped`로 기록됩니다.
   - 각 가드레일의 `preCall`은 `modifiedPayload`를 통해 페이로드를 다시 작성할 수 있습니다.
   - 첫 번째 `block: true`가 체인을 단락시키고 핸들러는 가드레일 거부 응답을 반환합니다.
3. (잠재적으로 재작성된) 페이로드는 콤보 라우팅과 업스트림 디스패치로 흘러갑니다.
4. **비스트리밍 전용:** 응답이 조립된 후 `guardrailRegistry.runPostCallHooks(...)`가 응답에 대해 동일한 체인을 실행합니다. 여기서 `block: true`는 업스트림 응답을 버리고 HTTP 400을 반환합니다. 스트리밍 응답은 이 단계를 완전히 건너뜁니다.

예외를 던지는 가드레일은 `error: <message>`로 기록되고 `logger.warn`을 통해 로깅되지만, 체인은 계속됩니다 — 설계상 페일오픈입니다.

## 적용 범위 및 제한

가드레일 레지스트리는 채팅 파이프라인에만 연결되어 있습니다. 이러한 제한은 `tests/unit/guardrail-pipeline-wiring-characterization.test.ts`와 `tests/unit/guardrail-pipeline-characterization.test.ts`에 고정되어 있습니다. 동작이 변경되면 해당 테스트를 의도적으로 업데이트하세요.

### 훅이 실행되는 위치

| 훅 / 제어                     | 실행 대상                                                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`             | `handleChat`(`src/sse/handlers/chat.ts`)이 처리하는 요청: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses`(및 `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, 그리고 Telegram 채팅 프록시. 또한 대시보드 테스트 엔드포인트 `/api/guardrails/test`. 프리콜 차단은 HTTP 400을 반환합니다. |
| `runPostCallHooks`            | **비스트리밍** 채팅 응답만 (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). 스트리밍 응답은 절대 여기에 도달하지 않습니다.                                                                                                                                                                                                                                                                                       |
| 스트리밍 PII                  | `createPiiSseTransform`(`src/lib/streamingPiiTransform.ts`), `PII_RESPONSE_SANITIZATION`이 켜져 있을 때 `streamingPipeline.ts`에서 파이프됩니다. 가드레일이 아니므로 비활성화 채널의 영향을 받지 않습니다.                                                                                                                                                                                                              |
| 인젝션 가드 미들웨어 (레거시) | 채팅 계열을 포함한 모든 프롬프트를 포함하는 `/v1` 라우트([라우트 적용 범위](#injection-guard-route-coverage--red-team-phase-8--block-d) 참조). 프롬프트 인젝션 전용.                                                                                                                                                                                                                                                    |

### 적용되지 않는 항목

- **미디어, 임베딩 및 데이터 라우트**(`/v1/images/*`, `/v1/embeddings`, `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/rerank`, `/v1/search`, `/v1/moderations`)는 레지스트리에 절대 도달하지 않습니다. 여기서는 PII 마스킹, 자격 증명 마스킹 또는 모달리티 브리지가 실행되지 않습니다. 이들의 유일한 검사는 레거시 인젝션 가드 미들웨어입니다.
- **스트리밍 응답**에는 포스트콜 가드레일이 적용되지 않습니다: `pii-masker` 또는 `credential-masker` 포스트콜이 없고, 포스트콜 차단도 없습니다. 스트리밍 PII 변환만 적용됩니다(`PII_RESPONSE_SANITIZATION`이 켜져 있을 때). 스트리밍 응답으로 되돌아온 자격 증명은 마스킹되지 않습니다.
- **비활성화 채널 vs. 미들웨어 (설계상):** 미들웨어는 호출자가 제어하는 비활성화 목록을 전달하지 않고 자체적으로 `evaluatePromptInjection()`을 호출하여 프롬프트 인젝션을 평가합니다. `block` 모드는 채팅 계열 라우트를 포함하여 호출자가 제어하는 비활성화로 우회할 수 없는 필수 경계입니다([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). `prompt-injection`을 비활성화하면 레지스트리 가드레일만 건너뜁니다.

### 포스트콜 전에 응답을 보는 대상

비스트리밍 경로에서의 순서는 다음과 같습니다: 메모리 추출 → 내장 도구 실행 → 포스트콜 가드레일 → 포스트콜 차단 종료 → 시맨틱 캐시 저장.

- **메모리 추출**과 **도구 실행**은 호출 후 가드레일이 응답을 재작성하거나 차단하기 전에 응답을 보게 됩니다.
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) 이후로, 메모리
  추출은 `PII_RESPONSE_SANITIZATION`이 켜져 있을 때(스트리밍과 비스트리밍 모두)
  추출된 텍스트를 `sanitizePII`를 통해 처리하지만, 호출 후에 나중에 차단되는
  응답도 여전히 메모리와 도구에 제공됩니다.
- **시맨틱 캐시**는 호출 후에 응답을 저장하므로, 재작성된 응답을 저장하며
  차단된 응답은 절대 캐시되지 않습니다. 캐시 항목은 API 키별로 키가 지정됩니다.

## 구성

기본 제공 가드레일이 읽는 환경 변수:

| 변수                                  | 사용 주체                 | 효과                                                                                                  |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | 감지를 완전히 비활성화하려면 `false`로 설정합니다.                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | 인젝션 정책: `warn`, `block` 또는 `log`. 레거시 값 `redact`는 인젝션 텍스트를 다시 작성하지 않습니다. |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | 인젝션 가드의 모드이며, 환경 변수보다 **우선하는** DB 기능 플래그이기도 합니다(DB > ENV).             |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | `MODE=block`이 거부할 최소 심각도: `high`(기본값), `medium` 또는 `low`.                               |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | `INPUT_SANITIZER_BLOCK_THRESHOLD`의 레거시 별칭입니다.                                                |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | `true`이면 요청의 PII가 마스킹됩니다(인젝션 모드와 무관).                                             |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (다운스트림) | 응답 측 마스커 동작을 제어합니다.                                                                     |

Modality Bridge 가드레일은 환경 변수가 아니라 DB 기반 설정 저장소(`getSettings()`)에서 런타임 구성을 읽습니다. Vision의 기본 키는
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, 그리고
`modalityBridgeCacheMaxEntries`입니다. 레거시
`visionBridge*` 키는 문서화된 한 주기 읽기 폴백으로만 허용되며,
대시보드 쓰기 작업에는 기본 키가 사용됩니다. 기본값과 폴백
리졸버는 `src/shared/constants/modalityBridgeDefaults.ts`에 있으며, 레거시
상수는 `src/shared/constants/visionBridgeDefaults.ts`에 유지됩니다.

Audio는 `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, `modalityBridgeAudioMaxClips`와 공유
`modalityBridgeCache*` 설정을 사용합니다. 이러한 키는 Modality Bridge 스키마와 함께
도입되었으므로 Audio에는 레거시 키 폴백이 없습니다.

Video는 `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`,
`modalityBridgeVideoTimeout`과 공유 `modalityBridgeCache*` 설정을 사용합니다.
FFmpeg/ffprobe는 선택적 운영 종속성이며 프레임 캡셔닝은 지연 시간과 모델 비용을
추가하므로 기본적으로 비활성화되어 있습니다.

## 사용자 지정 가드레일

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

단계:

1. `BaseGuardrail`을 확장하는 `src/lib/guardrails/myGuardrail.ts`를 생성합니다.
2. `preCall` 및/또는 `postCall`을 구현합니다.
3. 가져오기 시점에 등록하거나(`registerDefaultGuardrails`에서 추가) 런타임에
   `guardrailRegistry.register(...)`를 호출합니다. 레지스트리는 정규화된 이름이
   동일한 기존 가드레일을 대체합니다.
4. `tests/unit/` 아래에 테스트를 추가합니다(기존 예시:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## 테스트

알려진 상태에서 시작하려면 테스트 사이에 `resetGuardrailsForTests()`를 사용합니다.
빈 레지스트리로 시작하고 테스트 대상 가드레일만 등록하려면 `{ registerDefaults: false }`를
전달합니다. Vision Bridge는 의존성 주입(`deps.getSettings`, `deps.callVisionModel`)을
지원하며, Audio Bridge는 설정, 기능, STT 모델 선택, 자격 증명 검사 및 트랜스크립션을
위한 동일한 주입 지점을 제공합니다. 따라서 테스트에서 DB 또는 네트워크에 접근하지
않고도 두 흐름을 모두 실행할 수 있습니다.

## 참고 항목

- `src/lib/guardrails/` — 구현
- `src/shared/utils/inputSanitizer.ts` — 프롬프트 인젝션 및 PII 마스킹을 지원하는 공유 탐지기
- `src/shared/constants/visionBridgeDefaults.ts` — Vision Bridge 기본값 및
  강제 브리지 모델 목록
- `src/shared/constants/modalityBridgeDefaults.ts` — 공유 Vision/Audio 런타임 기본값
- `docs/architecture/RESILIENCE_GUIDE.md` — 직교 계층(서킷 브레이커, 쿨다운)
- `docs/reference/ENVIRONMENT.md` — 전체 환경 변수 참조

## 인젝션 가드 라우트 범위 및 레드팀(Phase 8 · Block D)

인젝션 가드(`createInjectionGuard` / `withInjectionGuard`)는 사용자 프롬프트를
허용하는 모든 라우트를 포괄합니다. 이 가드는 `INJECTION_GUARD_MODE`를 따릅니다
(기본값 `warn` = 로그만 기록, `block` = HTTP 400 `SECURITY_001` 반환).

| 유형         | 라우트                                                                                                                                               | 기본 모드 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 텍스트(기존) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn      |
| 생성형       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn      |
| 데이터       | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn      |

텍스트 추출(`extractMessageContents`)은 `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`을 포괄합니다.

**레드팀(야간, `nightly-llm-security.yml`):** promptfoo는 각 라우트가
`INJECTION_GUARD_MODE=block`에서 OWASP-LLM 코퍼스를 차단하는지 검증하며, garak은
프로브를 실행합니다(시크릿이 없으면 건너뜀). 일관성을 위해 `moderations`도 포함됩니다.
차단 모드는 필수 경계입니다. `evaluatePromptInjection()`은 미들웨어가 전달하는 요청별
비활성화 목록을 무시하므로 `disabledGuardrails`로 라우트를 예외 처리할 수
**없습니다**([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

야간 워크플로(`.github/workflows/nightly-llm-security.yml`, cron + 수동
디스패치)에는 두 개의 작업이 있습니다.

- **`promptfoo-guard`(차단)** — `INJECTION_GUARD_MODE=block`을 사용하여
  `promptfoo eval -c promptfooconfig.yaml`을 실행합니다. 각 적대적 사례(예:
  "이전의 모든 지침을 무시…" 및 DAN 스타일 탈옥)는 응답에
  `error.code === "SECURITY_001"`이 포함되는지, 즉 가드가 실제로 요청을
  거부했는지 확인합니다.
- **`garak`(권고)** — 로컬 OmniRoute 인스턴스
  (`http://localhost:20128/v1`)를 대상으로 garak
  `--probes promptinject,dan,leakreplay`를 실행합니다. 공급자 시크릿
  (`PROMPTFOO_PROVIDER_KEY`)이 있어야 실행되며, 없으면 정상적으로 건너뜁니다.
  또한 `|| true`가 접미사로 지정되어 있어 CI를 실패시키지 않고 결과만 보고합니다.

가드 도우미(`createInjectionGuard` / `withInjectionGuard`)의 적용 범위는 프롬프트를
포함하는 모든 `/v1` 라우트에 걸쳐 있습니다. 프롬프트 텍스트는
`src/shared/utils/inputSanitizer.ts`의 `extractMessageContents()`를 통해
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`에서
추출됩니다.
