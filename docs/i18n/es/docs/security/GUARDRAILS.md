# Guardrails (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Fuente de referencia:** `src/lib/guardrails/`
> **Última actualización:** 2026-10-17 — v3.8.52 (se añadió [Cobertura y límites](#coverage-and-limits):
> qué rutas y vías de respuesta alcanzan los hooks, las cabeceras de desactivación combinadas (#16412), el modo
> de bloqueo de inyección como límite obligatorio (#16413) y qué componentes ven una respuesta antes de la posllamada)

Las barreras de protección aplican transformaciones de seguridad, políticas y contenido en el límite
entre OmniRoute y los proveedores upstream. Cada barrera de protección puede inspeccionar (y
opcionalmente rechazar, transformar o anotar) las cargas útiles de las solicitudes (`preCall`) y las
respuestas upstream (`postCall`).

El sistema es **tolerante a fallos**: si una barrera de protección lanza una excepción durante la ejecución, el registro
guarda el error y continúa con la siguiente barrera en lugar de hacer que falle la
solicitud. El bloqueo es una decisión explícita (`block: true`), nunca un accidente.
La única excepción es una solicitud abortada: cuando se aborta la `signal` del llamador,
una barrera de protección que lanza una excepción hace que se rechace la ejecución del hook en lugar de omitirse.

Los hooks **no** se ejecutan en todas las rutas ni en todas las respuestas. Consulta
[Cobertura y límites](#coverage-and-limits) antes de depender de una barrera de protección como
control de seguridad.

## Barreras de protección integradas

Al importarse, el registro carga automáticamente seis barreras de protección por orden de prioridad
(consulta `registry.ts` → `registerDefaultGuardrails()`):

| Prioridad | Nombre              | Etapa(s)       | Archivo               |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Los números de prioridad más bajos se ejecutan **primero**.

### Puente de visión (`visionBridge.ts`) — Puente de modalidad PR-1

El modelo base GLM 5.3 y `glm-5.3-{low,high,max}` tienen metadatos
`supportsVision:false` explícitos en el registro/especificación. Las variantes GLM 5.3 Flash
siguen siendo modelos con visión nativa. La ruta `/v1/messages` de Claude Code entra en la
cadena compartida de barreras de protección de prellamada `handleChat` **antes** de la traducción
de Claude a OpenAI; las imágenes anidadas en los resultados de la herramienta `Read` deben describirse o procesarse
antes de que esa traducción las convierta en contenido `image_url` de OpenAI (#17069).

Intercepta las solicitudes que contienen imágenes dirigidas a **modelos sin visión** y
redirige toda la solicitud a un modelo con capacidad de visión o sustituye las partes
de imagen por descripciones textuales generadas por un modelo de visión configurable antes
de la llamada upstream. Esto permite que los proveedores de solo texto procesen de forma transparente
cargas útiles multimodales.

Flujo:

1. Omitir si el modelo de destino ya admite visión (a menos que aparezca en la
   lista de puente forzado `isVisionBridgeForcedModel`).
2. Extraer las partes de imagen mediante `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), que delega en el **detector de medios unificado**
   `detectMediaParts()` de `open-sse/utils/mediaParts.ts`, la
   única fuente de referencia compartida con el filtro de compatibilidad combinado.
   La extracción se limita a las estructuras permitidas que `replaceImageParts` puede volver a insertar
   (el contrato de extracción↔sustitución): `image_url` de OpenAI, `source.type:"base64"`
   en base64 de Anthropic, `source.type:"url"` de Anthropic y `input_image` de la API
   Responses. También se extraen y sustituyen en sus rutas originales las imágenes coincidentes
   anidadas dentro de `tool_result.content` de Claude Code y de las salidas de herramientas de Responses;
   las estructuras que solo actúan como indicadores son material para el filtro combinado y no se extraen.
   Omitir si no se encuentra ninguna.
3. Resolver la configuración en tiempo de ejecución mediante `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): las nuevas claves de configuración `modalityBridge*`
   tienen prioridad; las claves heredadas `visionBridge*` siguen siendo un **recurso alternativo durante un ciclo**
   (ventana de reversión). Omitir antes de cualquier recorrido de medios cuando el
   puente esté deshabilitado.
4. El selector de modo (`modalityBridgeVisionMode`, consulta la tabla siguiente) decide entre
   redirigir y describir. La redirección devuelve `modifiedPayload` únicamente con el `model`
   sustituido, además de los metadatos `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ruta de descripción: limitar las imágenes a `maxImages`, componer el prompt adaptado a la tarea,
   consultar la caché de descripciones, llamar al modelo de visión **en paralelo**
   (`Promise.allSettled`) e insertar partes de texto `[Image N]: <description>` en
   su lugar. Una descripción fallida produce `null`: la imagen sin procesar se conserva para
   destinos desconocidos o con capacidad de visión (#4012), pero un **destino directo confirmado
   de solo texto** o una combinación sin visión recibe un marcador de texto explícito
   `(unavailable — no vision-capable provider connected)` por cada imagen
   sin describir, incluidos los fallos parciales y las imágenes que superen el límite de
   llamadas de descripción (#17069). Se mantiene el recurso alternativo de descripción combinada
   existente cuando todas las llamadas fallan (#8430).
6. Devolver `modifiedPayload` y los metadatos (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selector de modo (`modalityBridgeVisionMode`)

| Modo       | Predeterminado | Comportamiento                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔              | Heurística heredada, sin cambios (#6640/#7204): los modelos no combinados/`auto/` se redirigen al mejor modelo de visión, a menos que el modelo original ya tenga credenciales utilizables (en cuyo caso se describe); los destinos combinados siempre describen.                                                                                                      |
| `describe` |                | Siempre describe: el bloque de redirección se omite por completo; el modelo elegido por el usuario siempre responde.                                                                                                                                                                                                                                                   |
| `reroute`  |                | Fuerza la redirección: se omite la protección que conserva el modelo con credenciales. La protección de credenciales del **destino** de la redirección sigue aplicándose: cuando no existe un destino de visión utilizable, el puente bloquea la solicitud con un error claro en lugar de describir o enviar imágenes sin procesar a un destino que solo admite texto. |

Los modos forzados cortocircuitan la ejecución **antes** de que se ejecute la heurística automática; el comportamiento de `auto`
es idéntico byte por byte al mecanismo de protección anterior a PR-1.

#### Ámbito de la clave de API (`visionBridgeKeyScope.ts`)

Cuando la clave de API del llamador restringe `allowedConnections`, los grupos de cuotas
(`allowedQuotas`) o los modelos (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), el puente solo
elige modelos de redirección y descripción que la clave pueda utilizar, en conexiones que la clave pueda
utilizar. A continuación, la llamada de descripción siempre pasa por el bucle interno de
OmniRoute con el encabezado `x-omniroute-self-loop-key-id`, de modo que la solicitud de chat receptora
vuelve a aplicar la política de conexiones y modelos de esa clave. `enforceApiKeyPolicy()`
solo respeta ese encabezado junto con el portador del bucle interno, por lo que únicamente puede
restringir el acceso, y se rechaza un identificador que no pueda resolverse.

Si no se permite ningún modelo de visión para la clave, un **destino confirmado como
exclusivamente de texto** rechaza localmente la solicitud de imagen con un HTTP 400 claro, en lugar de
reenviar bytes de imagen a un servicio ascendente incompatible (#17069). Para destinos con
capacidad de visión desconocida o nativa, la ruta de descripción conserva su comportamiento anterior
de apertura ante fallos (metadatos `{ skipped: true, reason: "no_permitted_vision_model" }`).
Las solicitudes sin clave y las claves sin estas restricciones se comportan exactamente como
antes.

#### Prompt de descripción adaptado a la tarea (`modalityBridgeVisionTaskAware`)

El valor predeterminado es **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) añade
el texto del **último mensaje del usuario** (truncado a 500 caracteres) al prompt base
de descripción, orientando la descripción hacia lo que realmente pidió el usuario
(siguiendo el patrón de codex-vision-proxy) y solicitando al modelo de visión que transcriba el texto
visible. Con la opción desactivada, o si no hay texto del usuario, el prompt base se utiliza sin cambios.

La propia solicitud compatible con OpenAI del bucle interno de descripción (`callVisionModelSingle()`
en `visionBridgeHelpers.ts`) siempre solicita `image_url.detail: "high"`:
incondicionalmente, para cada llamador/proveedor, sin depender de ninguna señal del cliente.
El muestreo con un nivel de detalle bajo degrada la precisión del OCR precisamente para la tarea de transcripción
de texto que solicita este prompt, por lo que la propia llamada de descripción siempre pide un nivel de detalle
alto, independientemente del nivel de detalle utilizado por la solicitud entrante original. Esto
solo afecta al cuerpo de la solicitud interna de descripción; no cambia la forma en que
OmniRoute reenvía el propio `image_url.detail` del llamador en la solicitud principal:
ese valor predeterminado se aplica por separado, y únicamente para clientes OpenCode detectados, en
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La
rama con formato de conexión de Anthropic del bucle interno de descripción no tiene ningún campo `detail`
y no se ve afectada por ninguno de los dos valores predeterminados.

#### Límite de salida de la descripción (`modalityBridgeVisionMaxChars`)

| Clave                          | Predeterminado | Intervalo       |
| ------------------------------ | -------------- | --------------- |
| `modalityBridgeVisionMaxChars` | `0`            | `0` o 100–50000 |

`0` (valor predeterminado) significa **sin límite**: la descripción devuelta por
`callVisionModel()` se transfiere sin modificaciones, preservando el comportamiento
existente. Cualquier valor del intervalo 100–50000 trunca la descripción con un
sufijo `…` antes de insertarla de nuevo como `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` en `src/lib/guardrails/visionBridge.ts`).
Aumente este valor para tareas de OCR con muchos detalles en las que el modelo posterior necesite la
transcripción completa; redúzcalo para limitar el uso de tokens en modelos de visión verbosos.
El campo del panel de control se encuentra en el panel Avanzado de la pestaña Visión
(`modality-bridge-max-chars` en `ModalityBridgeVisionTab.tsx`) y eleva cualquier
valor entre 1 y 99 hasta el mínimo de 100, mientras deja intacto un `0`
explícito: `0` es por sí mismo un valor Zod válido
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), no simplemente
el valor predeterminado «sin establecer».

#### Caché de descripciones (`modalityBridge/bridgeCache.ts`)

Caché LRU + TTL en memoria para las salidas de descripción, compartida en todo el proceso.
Clave = `sha256(imageRef + composedPrompt + configuredBridgeModel)` con
delimitación mediante prefijos de longitud (sin colisiones en los límites de los campos). El componente del modelo es
el modelo de puente **configurado**, no el modelo que realmente respondió:
`callVisionModel` puede recurrir internamente a un modelo alternativo, y usar una clave por intento
fragmentaría la caché. Las descripciones fallidas nunca se almacenan en caché. Configuración:

| Clave                           | Predeterminado | Intervalo |
| ------------------------------- | -------------- | --------- |
| `modalityBridgeCacheEnabled`    | `true`         | —         |
| `modalityBridgeCacheTtlMinutes` | `60`           | 1–1440    |
| `modalityBridgeCacheMaxEntries` | `200`          | 10–5000   |

#### Normalización de imágenes remotas (llamada describe/base64 mediante bucle propio)

Cuando el puente obtiene por sí mismo una imagen **remota** —la llamada interna describe de Anthropic y la conversión a base64 del formato claude-wire (`ensureBase64ImagesForClaudeWire`), ambas mediante `fetchRemoteImageAsDataUri()` en `visionBridgeHelpers.ts`—, el URI de datos resultante se procesa mediante `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) antes de incorporarse a la solicitud del modelo de visión. Las imágenes de tamaño excesivo se reducen para que el **lado largo mida 2048 px** (en consonancia con el límite de redimensionamiento que OpenAI/Anthropic ya aplican en el servidor), lo que reduce los bytes de carga y la latencia sin cambiar lo que ve el modelo de visión. El redimensionamiento utiliza `sharp`, cargado mediante importación dinámica: en una plataforma donde no pueda cargarse su binario nativo, `normalizeDataUri()` **nunca lanza una excepción**; recurre a transferir los bytes originales sin modificaciones, de modo que la ruta de descripción/conversión a base64 siempre siga funcionando. Los bytes que no correspondan a una imagen (una descarga que no haya devuelto una imagen decodificable) también se transfieren sin modificaciones. Esta normalización se limita a las imágenes que el puente obtiene para su propia llamada interna; nunca se aplica a la carga útil sin procesar transferida directamente por el llamador, de acuerdo con el principio de mutación exclusivamente voluntaria (regla estricta n.º 20).

#### Esquema de configuración y migración

Las nuevas claves `modalityBridge*` se validan con Zod en `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, el trío `modalityBridgeCache*` y el grupo `modalityBridgeAudio*` utilizado por Audio Bridge. La migración `141_modality_bridge_settings.sql` copia los valores heredados existentes de `visionBridge*` a las nuevas claves correspondientes (es idempotente y nunca sobrescribe un valor `modalityBridge*` establecido por un operador); las claves heredadas se siguen aceptando como alternativa de lectura durante un ciclo de publicación.

#### Cabecera de transparencia y estadísticas

Las respuestas transformadas mediante descripción incluyen `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (generada por `buildModalityBridgeHeader()` en `modalityBridge/bridgeStats.ts` y añadida por `withModalityBridgeHeader()` en `src/sse/handlers/chatHelpers.ts`). Las solicitudes redirigidas **no** reciben ninguna cabecera: la carga útil no se modificó y el cambio de modelo ya se puede ver en el campo `model` del cuerpo de la respuesta.

`GET /api/modality-bridge/stats` (autenticación de administración, del mismo nivel que `GET /api/settings`) devuelve los contadores en memoria por modalidad `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` para `vision`, `audio` y `video`. `averageLatencyMs` utiliza `latencySamples`, no todos los intentos, como denominador; una operación sin medición temporal no genera artificialmente una muestra de cero milisegundos. `bridged` continúa siendo el alias retrocompatible de las conversiones correctas; los intentos fallidos no lo incrementan.
Por diseño, los contadores se restablecen al reiniciar el proceso (son telemetría, no contabilidad).

#### Configuración del panel de control

La página específica del panel de control es `/dashboard/settings/modality-bridge`. Sus pestañas `Vision`, `Audio` y `Video`, accesibles mediante URL, conservan los parámetros de consulta al cambiar el valor de `tab`. La pestaña Vision permite configurar la habilitación, el modo, la selección del modelo (incluido el valor predeterminado automático), las indicaciones adaptadas a la tarea y los límites avanzados de tiempo de espera, imágenes, longitud de descripción y caché; también muestra contadores en tiempo de ejecución y ofrece una solicitud de ejemplo protegida. La pestaña Audio también está activa: permite configurar la habilitación, seleccionar un modelo exclusivo de STT con la opción Auto, definir límites de tiempo de espera y duración máxima de los clips, consultar los contadores de audio y ejecutar una prueba de ejemplo con `input_audio`. La pestaña Video es funcional: informa del estado en tiempo de ejecución de FFmpeg/ffprobe, que puede ser uno de cuatro estados explícitos de la interfaz (`unknown` mientras la comprobación está en curso o no ha podido completarse, `restricted` en un host del panel de control que no sea de bucle invertido y donde la comprobación se omita en el cliente, `unavailable` una vez realizada la comprobación y confirmada su ausencia, o `available` junto con las versiones de FFmpeg/ffprobe); conserva los límites de habilitación, modelo, fotogramas, vídeo y tiempo de espera; filtra el selector de modelos para mostrar únicamente los compatibles con visión; y presenta los contadores de vídeo.

La antigua tarjeta Vision Bridge de la configuración de IA ahora es un enlace de compatibilidad a la nueva página; ya no mantiene una segunda copia del formulario. Media Providers también enlaza los flujos de trabajo de conversión de imagen a texto y de voz a texto con las pestañas correspondientes de Modality Bridge, sin eliminar el entorno de pruebas existente de voz a texto.

**Omisión del control de admisión para el bucle propio:** cuando la llamada de descripción se enruta mediante el bucle propio `/v1` de OmniRoute (modelo de proveedor no estándar), la solicitud secundaria envía `x-omniroute-admission-bypass: internal` y se autentica con la credencial resuelta del bucle propio: el marcador local `sk_omniroute` en modo local, o la clave de entorno `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurada por el operador (#1350), de modo que las implementaciones con `REQUIRE_API_KEY=true` puedan seguir ejecutando la llamada de descripción. La omisión solo se acepta con esas credenciales exactas, por lo que los clientes externos no pueden utilizar la cabecera para eludir el control de admisión.

Los valores predeterminados heredados se encuentran en `src/shared/constants/visionBridgeDefaults.ts`; los nuevos valores predeterminados de modo, adaptación a la tarea y caché, así como el solucionador de configuración, se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`. El mecanismo de protección expone una opción de constructor `deps` para que las pruebas puedan inyectar implementaciones simuladas de `getSettings` y `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — PR-3 de Modality Bridge

Intercepta las solicitudes de chat que contienen audio antes de que lleguen a un destino del que no se sabe si acepta entrada de audio. Nunca redirige la solicitud de chat: las partes de audio se transcriben mediante el endpoint multipart compatible con OpenAI existente y el modelo de chat elegido continúa con las transcripciones de texto.

Flujo:

1. Resuelve `supportsAudio` mediante `getResolvedModelCapabilities()`. Los metadatos
   explícitos de provider-registry tienen prioridad, seguidos de los metadatos estáticos
   del modelo y, por último, de `modalities_input` sincronizado. Una lista de entrada
   declarada sin `audio` da como resultado `false`; si no hay indicios de la capacidad,
   el resultado es `null`. Tanto `false` como `null` activan el puente conservador,
   mientras que `true` lo omite.
2. Resuelve la configuración `modalityBridgeAudio*` y extrae las partes de audio
   de nivel superior que puedan empalmarse de cada mensaje mediante el detector
   compartido `detectMediaParts()`. Los formatos de intercambio compatibles son
   `input_audio` de OpenAI, `audio_url` y `source.media_type: "audio/*"`. El audio
   anidado se detecta para el enrutamiento, pero la ruta de empalme no lo elimina.
   El trabajo está limitado por `modalityBridgeAudioMaxClips`; las partes posteriores
   permanecen intactas.
3. Respeta un `provider/model` configurado o permite que `selectAudioBridgeModel()`
   recorra `AUDIO_TRANSCRIPTION_PROVIDERS` en el orden estable del catálogo y
   seleccione el primer modelo que tenga una credencial de proveedor activa y
   utilizable.
4. `callAudioTranscription()` convierte el audio base64/URI de datos en un `file`
   multiparte, o descarga un `audio_url` remoto mediante la protección de salida
   solo pública, con fijación de DNS y un límite de 25 MB. A continuación, envía
   mediante POST el archivo y el modelo seleccionado al bucle local
   `/v1/audio/transcriptions`, autenticado con `resolveSelfLoopBearer()`. La ruta
   de transcripción existente realiza la búsqueda normal de credenciales, la
   gestión de los períodos de espera y límites de tasa, y el despacho al proveedor.
5. Las llamadas correctas sustituyen sus partes por `[Audio N]: <transcript>`.
   Las llamadas se ejecutan con `Promise.allSettled`: un fallo individual conserva
   esa parte de audio original (contrato #4012). Si todas las llamadas fallan y se
   ha demostrado que el destino tiene `supportsAudio === false`, las partes pasan
   a ser `[Audio N]: (unavailable — no STT provider connected)` (contrato #8430).
   Para un destino desconocido (`null`), el resultado permanece intacto si todas
   las llamadas fallan. Un destino que se haya demostrado que solo admite texto
   y que no tenga una credencial STT utilizable recibe el mismo marcador explícito
   sin realizar ninguna llamada de red.

Las transcripciones correctas utilizan la caché LRU/TTL de Modality Bridge para
todo el proceso. La clave combina la referencia de audio, la etiqueta estable de
la operación `audio-transcription` y el modelo STT seleccionado; los fallos nunca
se almacenan en caché. Los intentos de audio actualizan los contadores compartidos
`bridged`, `cacheHits`, `failures` y `lastUsedAt`. Las respuestas transformadas
incluyen
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; las
solicitudes intactas no reciben ningún segmento de Audio Bridge.

La configuración de ejecución está respaldada por la base de datos y validada
con Zod:

| Clave                         | Valor predeterminado | Intervalo              |
| ----------------------------- | -------------------- | ---------------------- |
| `modalityBridgeAudioEnabled`  | `true`               | —                      |
| `modalityBridgeAudioModel`    | `""`                 | Automático o ID de STT |
| `modalityBridgeAudioTimeout`  | `60000`              | 1000–300000            |
| `modalityBridgeAudioMaxClips` | `3`                  | 1–10                   |

La caché compartida sigue estando controlada por `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` y `modalityBridgeCacheMaxEntries`.

### Puente de vídeo (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepta las partes de vídeo de nivel superior en `messages` de Chat Completions
y en `input` de la API Responses antes de llamar a un destino sin compatibilidad
nativa conocida con vídeo. Los formatos compatibles son `input_video`,
`video_url`, `video_source`, las URL HTTPS y los URI de datos
`data:video/*;base64,...`. Los nombres de archivo sin formato incluidos en texto
no se tratan como vídeo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) se encarga de recorrer la
solicitud, comprobar las capacidades y políticas, realizar la agregación por
solicitud y generar la carga útil de respuesta. El trabajo por vídeo —la
adquisición, la caché del resultado completo, la descripción de una secuencia de
fotogramas (que integra cualquier transcripción de audio declarada por el
llamador) y las métricas, cancelaciones y limpiezas de cada intento— queda oculto
tras `processVideoPart` en `videoBridgePipeline.ts`, al que se llama una vez por
cada parte de vídeo dentro del bucle de `preCall`. Ese módulo también define los
límites de puerto explícitos `VideoMediaBrokerPort` (adquisición de bytes y
extracción de fotogramas muestreados), `VideoAudioTranscriptionPort` (integración
de una transcripción de audio declarada por el llamador con las descripciones
muestreadas) y `VideoDrilldownPort` (el límite de persistencia del análisis
detallado de fotogramas; todavía no está conectado a `processVideoPart`: en la
actualidad, solo la ruta independiente
`/api/modality-bridge/video/drilldown` escribe entradas de análisis detallado).

La ruta de solicitud pública `/v1` nunca importa ni invoca un subproceso. Los
vídeos remotos se descargan con un límite de 50 MiB; los vídeos base64 insertados
tienen un límite conservador de 36 MiB decodificados por vídeo, de modo que la
envoltura del modelo, los mensajes y el entramado puedan permanecer dentro del
límite público de admisión de solicitudes JSON de 50 MiB. La longitud insertada
y las estimaciones del tamaño decodificado se comprueban antes de asignar
memoria. Se exige HTTPS tanto en la URL remota inicial como en cada redirección,
mediante la protección de salida existente solo para destinos públicos y con
fijación de DNS. Después, los bytes atraviesan exactamente el límite del bróker
interno `POST /api/modality-bridge/video/extract`. Esa ruta es a la vez
`LOCAL_ONLY` y `SPAWN_CAPABLE`, solo acepta solicitudes de bucle local de
confianza autenticadas por proceso y nunca acepta una URL, una ruta del sistema
de archivos, un ejecutable ni una lista de argumentos. La canalización del
límite de tamaño del cuerpo de la API y el lector incremental del cuerpo del
controlador aplican de forma independiente un límite de entrada del bróker de
50 MiB. Su cola limitada ejecuta una extracción a la vez, permite cuatro
trabajos pendientes y limita la entrada pendiente a 100 MiB.

Dentro del bróker, `ffprobe` lee un archivo local privado; la lista fija de formatos
permitidos excluye los formatos de listas de reproducción y manifiestos. Para los
contenedores permitidos de la familia MOV, las referencias externas a datos MOV
permanecen deshabilitadas de forma predeterminada y el comando fijo no las habilita.
Tanto `ffprobe` como `ffmpeg` utilizan la lista blanca de protocolos limitada a
`file`, un hilo, matrices de argumentos fijas, ningún shell y ejecutables resueltos
desde `PATH`. Los flujos de portadas con imágenes adjuntas no se consideran
candidatos reproducibles. Todos los flujos reproducibles deben satisfacer los
límites, y se prefiere un flujo predeterminado explícito antes de recurrir a la
alternativa determinista con el índice más bajo. Los vídeos están limitados a
600 segundos, 8.192 píxeles por dimensión y 33.554.432 píxeles de origen. FFmpeg
muestrea entre 1 y 16 fotogramas JPEG de puntos medios, reduce el borde largo a un
máximo de 1.024 píxeles sin ampliar las entradas más pequeñas y nunca recibe una
URL. El muestreo es `uniform` de forma predeterminada. Las políticas opcionales
`scene_aware` y la experimental `segment_aware` realizan una pasada fija adicional
de FFmpeg sobre el flujo local ya validado, seleccionan marcas de tiempo de escenas
acotadas de `showinfo` y recurren de forma determinista a los mismos puntos medios
uniformes en caso de fallo del detector, tiempo de espera agotado, salida malformada
o un conjunto de candidatos vacío. El modo basado en segmentos asigna muestras de
puntos medios proporcionalmente a los intervalos de escena validados; la evidencia
basada en segmentos y el comportamiento de respaldo se detallan a continuación. El
límite estricto de 16 fotogramas se aplica después de la selección en todas las
políticas. Cuando una solicitud basada en escenas solo dispone de un presupuesto de
un fotograma, utiliza el punto medio uniforme del vídeo completo activo o de la
ventana de enfoque e informa de `policyEffective: uniform`: un único fotograma de
escena seleccionado no puede conservar ambos extremos temporales. Opcionalmente, el
invocador puede proporcionar una ventana de enfoque finita (`start`/`end` segundos);
los límites se restringen a la duración del contenido multimedia, las ventanas
invertidas o no finitas se rechazan y todas las políticas de muestreo se ejecutan
únicamente dentro del intervalo normalizado. La ventana resultante se incluye en
los metadatos de muestreo y en el prefijo de descripción no confiable para que los
modelos posteriores puedan distinguir un fragmento enfocado de la línea temporal
completa.

El enfoque semántico de los subtítulos es una configuración independiente y
explícita. El modo de análisis `full` predeterminado conserva el prompt de
fotogramas existente y nunca reenvía el texto de la solicitud al modelo de
subtitulado. En el modo `focused`, el puente lee únicamente el último
`text`/`input_text` no vacío creado por el usuario desde el mismo contenedor de Chat
o Responses, lo normaliza a NFC, contrae los caracteres de control y los espacios
en blanco y lo limita a 500 puntos de código Unicode. Un resultado vacío vuelve al
prompt `full` exacto. Una indicación utilizable se serializa como JSON en un bloque
dedicado de contexto de usuario no confiable y solo puede priorizar detalles
observables; no puede anular la advertencia independiente de no seguir instrucciones
visibles o audibles en el contenido multimedia. El enfoque textual nunca infiere
`start`/`end` ni modifica el muestreador temporal.

#### Evidencia estructural de segmentos de FU-07

`segment_aware` utiliza una pasada acotada de preanálisis sobre el flujo de vídeo
local ya validado. La cadena fija de filtros primero reduce la escala a un máximo de
320 píxeles de ancho, detecta cambios de escena e intervalos congelados y, después,
muestrea a 1 fotograma por segundo para obtener el desenfoque, la luminancia media y
la información espacial/temporal. La pasada está limitada a 600 muestras
estructurales, un hilo de FFmpeg/filtro, las mismas listas de protocolos limitada a
`file` y de contenedores permitidos, un límite de salida del proceso de 1 MiB y un
máximo de 30 segundos dentro de la interrupción o fecha límite compartida del
bróker. Nunca acepta de la solicitud un comando, filtro, ruta ni URL.

Los valores estructurales son evidencia determinista de muestreo, no comprensión
semántica del vídeo. No infieren sujetos, acciones, subtítulos, voz ni intención del
usuario. Los límites de escenas y congelaciones forman segmentos; la cobertura de
congelación, el desenfoque, la exposición, el detalle espacial y el cambio temporal
solo influyen en cómo se asigna el presupuesto existente de entre 1 y 16 fotogramas.
Un segmento completamente congelado está limitado a un fotograma, mientras que los
segmentos no congelados compiten por el presupuesto restante. Cuando hay más límites
que fotogramas, se conserva una cobertura uniforme de la línea temporal para que los
cortes rápidos iniciales no puedan ocultar un segmento final largo. Los límites de
escena que están dentro de la resolución de análisis de 1 segundo respecto de un
límite de congelación se fusionan.

La ausencia de filtros, una evidencia malformada o vacía, un error del detector o el
agotamiento del tiempo del preanálisis acotado recurren sin bloquear a la política
exacta de puntos medios uniformes. Una interrupción del invocador o la fecha límite
del bróker no recurren a dicha política: finalizan el subproceso en curso, impiden la
extracción posterior de fotogramas y el árbol temporal privado se elimina en
`finally`.

`scripts/perf/video-bridge-fu07-eval.ts` genera fixtures deterministas reales de
FFmpeg para evaluar el ahorro de llamadas de subtitulado posterior a la
deduplicación, la asignación del presupuesto para movimiento denso, la evidencia de
desenfoque/exposición/SI-TI, los cortes rápidos con un tramo final largo y los falsos
positivos de fundidos graduales. Registra el tiempo real transcurrido del preanálisis
y, cuando `/usr/bin/time` está disponible, la CPU de los procesos secundarios y el
pico de RSS. Sus comprobaciones de calidad son únicamente oráculos estructurales. La
calidad real del modelo de subtitulado permanece en `HOLD` porque este entorno de
pruebas no dispone de un endpoint autorizado ni de un juez congelado. El ahorro
monetario también permanece en `HOLD` a menos que
`--caption-cost-per-call-usd` proporcione una estimación positiva explícita del coste
por llamada; el script nunca inventa ninguno de los dos resultados.

Cada fotograma está limitado a 4 MiB, el conjunto de todos los fotogramas sin procesar a 23 MiB y la respuesta serializada del bróker a 32 MiB. Se elimina un directorio temporal privado en `finally`. OmniRoute no incluye FFmpeg ni acepta una ruta de ejecutable personalizada. Antes de generar los subtítulos, el puente aplica una pasada conservadora de deduplicación visual: cada JPEG se reduce a un búfer en escala de grises de 16×16 y se compara únicamente con el último fotograma conservado. Para un presupuesto de subtítulos solicitado superior a un fotograma, la extracción proporciona un conjunto acotado de candidatos de hasta el doble de dicho presupuesto y nunca superior a 16 fotogramas. El límite solicitado se aplica únicamente después de la deduplicación; durante la reducción final se conservan el primer y el último candidato seleccionados cuando el presupuesto es de al menos dos. La política versionada `grayscale-16x16-mean-cells-v2` utiliza el mayor valor entre la diferencia media de luminancia y la proporción de celdas de la miniatura cuya diferencia normalizada es de al menos 0,05. El umbral de duplicación es la constante 0,04, elegida por su previsibilidad en lugar de exponerse como una configuración en tiempo de ejecución. Esta señal secundaria de alto contraste conserva los movimientos pequeños y los cambios en el texto visible que una comparación basada únicamente en la media puede ocultar. Los errores del comparador o del descodificador adoptan un comportamiento permisivo y mantienen la cobertura. Los metadatos de salida distinguen entre los candidatos extraídos, los fotogramas utilizados correctamente y los duplicados visuales descartados.

Una parte de vídeo marcada explícitamente puede solicitar una hoja de contactos con marcas de tiempo. El puente crea una cuadrícula JPEG de como máximo 4 columnas y 16 fotogramas. Cada celda de 512 píxeles incrusta la marca de tiempo de su fuente en una franja inferior de alto contraste, mientras que esas mismas marcas de tiempo permanecen en los metadatos textuales para permitir su asociación y auditoría posteriores. El JPEG completo sigue estando limitado a 32 MiB. Si `sharp` no puede descodificar o componer la cuadrícula, el puente recurre a los fotogramas JPEG individuales; una cancelación por parte del cliente sigue propagándose a través de la operación de la hoja.

La evidencia para la promoción se mantiene deliberadamente separada del microbenchmark de composición sintética. `scripts/perf/video-bridge-contact-sheet-eval.ts` define un entorno de pruebas A/B con esquema versionado para modelos de visión reales compatibles con OpenAI. Mide los tokens notificados por el proveedor, la latencia total de extremo a extremo (incluida la composición de la hoja), el número de llamadas al modelo y la retención de hechos definida en el manifiesto. Las respuestas sin procesar del modelo no se escriben en el informe; únicamente se conservan los resúmenes SHA-256 y los identificadores de los hechos coincidentes. El entorno de pruebas no realiza ninguna llamada de red ni a modelos de pago a menos que se proporcione `--execute-real` y se configuren `--model`, `OMNIROUTE_BASE_URL` y `OMNIROUTE_API_KEY`. Sin esa ejecución real explícita, su veredicto legible por máquina permanece como `HOLD`; las mediciones sintéticas de carga útil y número de llamadas, por sí solas, no constituyen evidencia para la promoción.

Los autores de llamadas pueden adjuntar un array opcional `transcript.cues` a una parte de vídeo compatible cuando ya dispongan de texto alineado. Cada indicación debe incluir `text`, un intervalo finito `start`/`end` dentro de la duración detectada y un `source` incluido en la lista de permitidos (`client`, `embedded` o `audio-bridge`); el valor predeterminado de `confidence` es `1` y debe permanecer entre `0` y `1`. Las indicaciones exactamente duplicadas se agrupan. OmniRoute nunca inicia una transcripción a partir de estos metadatos: las indicaciones validadas se copian en el resultado descrito con su fuente, confianza e intervalo, y se representan como observaciones no fiables junto a los subtítulos de los fotogramas. El texto no válido, fuera de rango o sin procedencia se rechaza en lugar de mezclarse con el flujo de subtítulos. Ambos canales de transcripción del cuerpo de la solicitud normalizan la procedencia proporcionada a `client`, incluidas las etiquetas `embedded` o `audio-bridge` declaradas por el propio cliente. Solo un adaptador controlado por el servidor puede asignar esas etiquetas de confianza mediante el argumento exclusivo del código `trustedSource`; ningún campo JSON de una solicitud puede alcanzar dicho argumento. El texto de la transcripción sigue siendo contenido no fiable derivado de medios, independientemente de su procedencia, y nunca debe determinar la autorización.

Un autor de llamadas avanzado puede proporcionar una pista `audioTranscript` para el mismo vídeo; se trata como texto proporcionado por el cliente, no como prueba de una transcripción realizada por el servidor. El punto de fusión ejecuta las observaciones visuales y de audio bajo un único plazo y una única señal de cancelación, las ordena en una línea temporal común, agrupa los duplicados exactos y genera un resultado parcial cuando solo una de las partes se completa correctamente. Un `audioTranscript` no válido se degrada a ese resultado parcial —se conserva la descripción visual y la rama de audio registra un código de error saneado— en lugar de provocar el fallo de todo el vídeo. La disponibilidad por rama, el indicador de resultado parcial y los códigos de error saneados se conservan en el resultado descrito, en los metadatos de las medidas de protección (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), en los metadatos de la caché de resultados y en los contadores de fusión del puente. La ruta predeterminada de Video Bridge no invoca la conversión de voz a texto ni descarga una segunda copia del contenido multimedia; sin esa pista explícita, permanece limitada al vídeo.

**Retención de transcripciones (#12150 P1).** Esto se aplica automáticamente siempre que
Video Bridge (que requiere activación explícita) renderiza una entrada de transcripción; no hay ningún
indicador de retención independiente. Cuando una solicitud renderiza alguna entrada de transcripción (un
`transcript` declarado por el llamador o un `audioTranscript` fusionado), la barrera de protección la marca como
`videoBridgeObserved` y produce una copia paralela censurada de la descripción del vídeo:
un renderizado idéntico en el que el cuerpo de texto libre de cada entrada se sustituye por
`[redacted-video-transcript]`, generado mediante la sustitución del campo estructurado de la entrada
antes de ensamblar la cadena (nunca analizando el texto aplanado, por lo que ningún contenido
de la entrada —malicioso u ordinario, incluidos cuerpos que contengan `]`, como
`[inaudible]`/`[music]`— puede sobrevivir). El cuerpo de la solicitud persistido en el registro de llamadas sustituye
cada parte de texto derivada del vídeo por esa copia paralela censurada, comparándolas por igualdad
de contenido; el ancla `fullText` se vuelve a leer desde la carga útil terminada de la barrera de protección
previa a la llamada, por lo que la coincidencia sigue funcionando después de que otras barreras de protección posteriores
(los enmascaradores de información de identificación personal y credenciales, con prioridades 10/95) reescriban el texto de la descripción en el sitio y
después de que la inyección de mensajes del sistema, traspasos y memoria modifique la estructura del array de mensajes. El
cuerpo enviado al modelo permanece sin cambios. Una solicitud observada tampoco rellena
ninguna memoria duradera (se omite tanto la extracción derivada de la solicitud como la derivada de la respuesta),
por lo que la propia respuesta del modelo no puede reproducir texto de la transcripción en la memoria.

**Campos de vídeo sin procesar (#12430).** Cuando el puente está habilitado y la compatibilidad nativa con vídeo se desconoce o no existe, los campos `transcript`/`audioTranscript` definidos también activan `videoBridgeObserved`, incluso después de un fallo de descripción o de alcanzar un límite `maxVideos`. Los valores `null` y las cadenas vacías cuentan; los campos ausentes y los metadatos que no son de vídeo no cuentan. Las copias retenidas censuran estos campos u omiten la solicitud, y se omiten las cachés y la memoria.

En esas rutas alternativas, las entradas válidas del llamador se convierten en partes compatibles
`text`/`input_text` en lugar de campos no estándar del proveedor. Ambas pistas suministradas en la solicitud
siguen siendo observaciones `client` no fiables, con una advertencia explícita de que el vídeo
no se describió y las marcas de tiempo no se verificaron con respecto al contenido multimedia. Los límites existentes
de 256 entradas/64 KiB en total y por entrada se aplican conjuntamente a las dos pistas;
las marcas de tiempo deben ajustarse al límite máximo de 600 segundos del intermediario y a cualquier ventana de enfoque
proporcionada. Las pistas no válidas se descartan y no se reenvían como texto arbitrario; todavía se puede usar
una pista hermana válida, salvo que se exceda el límite combinado. Los campos nulos o vacíos
no añaden texto. Esta ruta alternativa no añade ninguna obtención ni transcripción del contenido multimedia.
Los campos de extensión de transcripción se eliminan del contenedor de vídeo alternativo y de sus
objetos `video_url`/`source`. La lista de elementos permitidos en el protocolo de OpenAI sigue siendo estricta; los contenedores
de vídeo con compatibilidad nativa desconocida continúan disponibles y los destinos que se sabe que solo admiten texto conservan marcadores seguros.
Las copias paralelas con censura estructurada protegen el texto de transcripción añadido, mientras que la
solicitud original propiedad del llamador permanece sin cambios. Los destinos con compatibilidad nativa y los
puentes deshabilitados conservan su comportamiento de omisión existente.

Las copias retenidas adicionales utilizan la misma señal de solicitud observada. La instantánea
sin procesar de la solicitud del cliente anterior a la barrera de protección, la solicitud pendiente en memoria y el registro
de solicitudes rechazadas anticipadamente sustituyen estructuralmente los campos de transcripción en las partes de vídeo;
las solicitudes de cadena sintetizadas por las etapas de la canalización y el traspaso de contexto se censuran
en el destino del cuerpo de solicitud persistido. El marcador `video_content_removed` persistido
hace que la continuación mediante `previous_response_id` falle de forma segura en lugar de reconstruir
texto que se descartó intencionadamente. Si una solicitud observada pierde su
copia paralela de censura por parte antes del registro, o incluso si una de varias copias paralelas de vídeo
no coincide después de mutaciones posteriores de la solicitud, el cuerpo de solicitud retenido se
omite por completo en lugar de retener una transcripción parcialmente censurada.

Para una solicitud observada, una respuesta del modelo podría citar cualquier parte de la
transcripción sin un límite estructurado de entrada. Por lo tanto, su `responseBody` persistido en el registro de llamadas
se sustituye por un marcador de omisión; el artefacto detallado de la canalización (que puede incluir cuerpos
del proveedor/cliente y fragmentos de transmisión) no se conserva. Las cachés semántica, de idempotencia
y de reproducción del razonamiento omiten las lecturas y escrituras para esa solicitud. La solicitud al proveedor
y la respuesta visible para el cliente permanecen sin cambios. Los bytes iniciales de mantenimiento de conexión se vacían del búfer temporal
cuando se omite el artefacto detallado. La advertencia de EventStream con formato incorrecto de Kiro
solo informa del número de bytes de la carga útil, nunca de su contenido ni del error sin procesar del analizador
JSON.
Esto no afirma que se hayan auditado todos los diagnósticos no relacionados de proveedores o complementos;
la revisión más amplia de destinos con retención se gestiona en #11658.

El ciclo de vida interno de `/api/modality-bridge/video/drilldown` es un sustrato de caché independiente,
autenticado mediante token y limitado a conexiones de bucle invertido. Cada operación también requiere un
ID de entidad principal opaco canónico. Antes de habilitar un llamador de producción, este debe
derivar dicho ID del inquilino autenticado y nunca debe reenviar un valor
seleccionado por el cliente. Las claves de caché vinculan esa entidad principal con los ID canónicos de sesión y
referencia de vídeo, almacenan únicamente sus claves derivadas mediante SHA-256 y limitan tanto las lecturas
como la eliminación a la misma entidad principal. La caché almacena como máximo 16 fotogramas JPEG derivados
por entrada, los hace caducar después de diez minutos y admite lecturas acotadas mediante
`start`/`end` o la eliminación explícita de la sesión.

Cada entidad principal está limitada a 16 entradas y 64 MiB de datos JPEG canónicos. Esos
límites son independientes del máximo global de 64 entradas/256 MiB: la presión sobre la cuota de una entidad principal
solo desaloja las entradas menos usadas recientemente de esa entidad antes de considerar
el desalojo LRU global. Las entradas caducadas se eliminan de la contabilidad tanto de la entidad principal como
de la global durante la actividad de la caché, mientras que una cancelación o un fallo de validación no
confirman una sustitución parcial.

La caché rechaza Base64 no canónico, relleno excesivo, contenido multimedia que no sea JPEG, archivos JPEG con formato incorrecto o
truncados y archivos JPEG que generen una advertencia durante una decodificación completa acotada de la imagen con `sharp`.
Vuelve a codificar cada imagen aceptada como un JPEG canónico, obtiene la anchura y la altura
a partir de los bytes decodificados en lugar de confiar en los campos proporcionados por quien realiza la llamada y descarta cualquier byte
políglota final en lugar de conservarlo. Solo el búfer comprimido canónico acotado
se contabiliza en ambas cuotas. El límite de transmisión JSON incluye la sobrecarga de Base64 para el límite máximo de entrada decodificada de 32 MiB.
Cada
derivación almacenada registra el formato y la resolución JPEG validados, la política de muestreo,
la versión de la derivación, la hora de creación, el hash de contenido calculado por el servidor y la referencia
al elemento principal con hash, además del hash de contenido del elemento principal proporcionado por el solicitante de confianza. La cancelación se comprueba
entre las fases asíncronas de decodificación y cálculo del hash antes de la confirmación atómica en la caché.

Este tramo todavía no conecta un productor de producción con la ruta ni
proporciona selección de variantes con múltiples resoluciones. Por lo tanto, la ruta transparente de solicitudes de Video Bridge
no incurre en trabajo adicional, mientras que la derivación de la entidad principal vinculada al inquilino y
el ciclo de vida completo de múltiples resoluciones de FU-08 siguen siendo trabajo de seguimiento explícito,
en lugar de estar documentados como comportamiento completo.

Los fotogramas se subtitulan secuencialmente con el modelo de Video configurado. Una sobrescritura vacía de
Video hereda la configuración de Vision; si ambas están vacías, el enrutador automático de Vision
selecciona el modelo efectivo con capacidades de visión. Los subtítulos generados correctamente
sustituyen la parte original por un prefijo estable `[Video description:` que también
marca el texto como una observación no fiable derivada de contenido multimedia e indica a los modelos
posteriores que no sigan las instrucciones encontradas en dicho contenido. Las claves de caché de los subtítulos de fotogramas
incluyen los bytes JPEG, la indicación, la marca de tiempo y el modelo efectivo; solo se almacenan en caché
los subtítulos generados correctamente. Las entradas de caché conservan el modelo productor real que tuvo éxito,
incluido un modelo de respaldo; el puente informa de `mixed` cuando diferentes fotogramas
fueron producidos por modelos distintos. Un acierto de caché reutiliza la identidad de ese productor
en lugar de volver a etiquetarla como el plan de enrutamiento solicitado. La caché de resultados
del vídeo completo se indexa mediante cada entrada que modifica la salida: la indicación, el modelo
efectivo, la política de muestreo, el número de fotogramas, el modo de análisis semántico, la huella SHA-256
de la sugerencia de enfoque normalizada, la ventana de enfoque, `transcript`,
`audioTranscript` y el indicador de hoja de contactos; por lo tanto, cambiar cualquiera de esas
dimensiones produce un fallo de caché y nunca una reutilización de datos obsoletos. La versión de la política
de desduplicación visual, el umbral y el número acotado de fotogramas candidatos también son explícitos en la
clave y los metadatos de la caché de resultados; por lo tanto, un cambio de política no puede reutilizar una
descripción obsoleta del vídeo completo. Los metadatos v4 de la caché de resultados conservan el modo y
la huella, pero nunca la tarea sin procesar del usuario. Los metadatos de protección informan tanto del
modo de análisis solicitado como del efectivo; un modo `focused` solicitado sin texto de usuario
utilizable se indica como `full` efectivo.

La protección extrae todas las partes de vídeo compatibles, pero no describe más de
`modalityBridgeVideoMaxVideos`. Para un destino que se haya demostrado que tiene
`supportsVideo === false`, los vídeos fallidos y los que superan el límite se convierten en marcadores de texto seguro explícitos
para que no sobreviva ningún vídeo sin procesar. Cuando se desconoce la capacidad, esas partes
conservan su contenedor de vídeo; cualquier transcripción de respaldo sigue la conversión acotada a texto
indicada anteriormente. Los destinos con `supportsVideo === true` omiten el puente.
La señal de cancelación de la solicitud del cliente se propaga a través de la descarga, la cola del intermediario,
los subprocesos y las llamadas de subtitulado; las cancelaciones detienen el procesamiento entre vídeos y nunca dejan pasar
contenido multimedia sin procesar.

La configuración en tiempo de ejecución está respaldada por la base de datos y validada con Zod:

| Clave                               | Valor predeterminado | Intervalo / comportamiento                                                                                |
| ----------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`              | Tiempo de ejecución opcional, con activación voluntaria                                                   |
| `modalityBridgeVideoAnalysisMode`   | `"full"`             | `full` conserva subtítulos genéricos; `focused` usa contexto acotado y no fiable del usuario más reciente |
| `modalityBridgeVideoModel`          | `""`                 | Hereda el modelo de Vision Bridge                                                                         |
| `modalityBridgeVideoFrameCount`     | `8`                  | 1–16                                                                                                      |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`          | `uniform`, `scene_aware` o `segment_aware` proporcional; si falla el detector, se recurre a `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`                  | 1–4                                                                                                       |
| `modalityBridgeVideoTimeout`        | `120000`             | 1000–120000 ms                                                                                            |

Los valores heredados y persistidos del tiempo de espera de Video superiores a 120 segundos se limitan al
plazo del intermediario; se rechazan las nuevas escrituras de configuración que superen ese límite.
`GET /api/modality-bridge/video/runtime` exige una ubicación local de bucle invertido, fiable y sellada
antes de la autenticación o del sondeo del entorno de ejecución, y después exige autenticación de administración.
Solo devuelve `available`, las versiones saneadas de FFmpeg/ffprobe y un motivo fijo
cuando el entorno de ejecución no está disponible. El punto de conexión interno de extracción no es
una API pública de carga: la saturación de la cola devuelve `503` junto con `Retry-After`, la desconexión de quien realiza la llamada
devuelve `499` y el plazo fijo del intermediario devuelve `504`. Las respuestas convertidas añaden
`video->text;model=<visionModel>;parts=<videos>` al encabezado central
`x-omniroute-modality-bridge` sin eliminar los segmentos de Vision o Audio.

### Enmascarador de PII (`piiMasker.ts`)

Se ejecuta en **ambas** etapas.

- **`preCall`** clona el payload, recorre `system`, `messages`, `input` y
  `prompt` (incluidos los elementos que son cadenas de texto sin formato) y
  aplica `processPII()` (de `@/shared/utils/inputSanitizer`) a los campos de
  cadena `content`/`text`. Cuando `PII_REDACTION_ENABLED=true`, la PII
  detectada se oculta en el payload saliente. Esto es independiente de
  `INPUT_SANITIZER_MODE` (que solo controla la política de inyección de
  prompts). Cuando la ocultación está desactivada, la llamada registra los
  recuentos de detecciones sin reescribir el contenido.
- **`postCall`** clona en profundidad la respuesta y ejecuta
  `sanitizePIIResponse()` junto con el enmascarador para el formato de la API
  Responses (`maskResponsesOutput` — abarca `output_text` y
  `output[].content[].text`). Si se produce alguna ocultación, la respuesta
  modificada sustituye a la original.

La medida de protección nunca bloquea; solo añade anotaciones
(`meta.detections`, `meta.redacted`) o reescribe.

#### Selección por tipo, patrones personalizados y contadores de detecciones

**Panel de control → Configuración → Seguridad → Enmascaramiento de PII**
permite elegir _qué_ se enmascara. No activa el enmascaramiento: eso sigue
dependiendo de `PII_REDACTION_ENABLED` (solicitud) y
`PII_RESPONSE_SANITIZATION` (respuesta + SSE), ambos desactivados de forma
predeterminada.

- **Selección por tipo** — los identificadores integrados aparecen en
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Si no se establece,
  se incluyen todos los tipos (el comportamiento anterior a la existencia de
  esta configuración). El patrón `ssn_us` del motor de solicitudes se asigna a
  `ssn`. Las plantillas (Mínima, Estándar, Financiera, Brasileña,
  Estadounidense, Completa) solo rellenan las casillas de verificación de la
  interfaz de usuario.
- **Patrones personalizados** — hasta 20 patrones de expresiones regulares o
  comodines (`*` = hasta 64 caracteres que no sean espacios en blanco, `?` =
  uno). Las coincidencias se convierten en `[CUSTOM_REDACTED]`. Cada patrón
  pasa por `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): un máximo de 500 caracteres,
  indicadores limitados a `g i m s u`, debe compilarse, debe superar
  `safe-regex` (retroceso catastrófico) y no debe coincidir con una cadena vacía
  ni con un marcador de ocultación. Un patrón que no cumpla estos requisitos se
  rechaza al guardarlo y al probarlo, y una fila almacenada que no los cumpla se
  omite durante la ejecución en lugar de compilarse. Los patrones personalizados
  solo se ejecutan mientras el enmascaramiento está activado.
- **Contadores de detecciones** — recuentos por tipo (nunca valores
  coincidentes), conservados en memoria y reiniciados al reiniciar la
  aplicación (`src/lib/pii/piiDetectionStats.ts`). Solo aumentan mientras el
  enmascaramiento está activado.

La configuración reside en la tabla `key_value` (espacio de nombres
`pii_settings`, `src/lib/db/piiSettings.ts`) y se lee mediante una caché de 1 s.
API:

| Método | Ruta                     | Finalidad                                                                                   |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Estado de los indicadores, `enabledTypes`, `customPatterns` y contadores de detecciones     |
| `PUT`  | `/api/settings/pii`      | Sustituir `enabledTypes` (`null` = todos) y/o `customPatterns`                              |
| `POST` | `/api/settings/pii/test` | Probar un patrón sin ejecutarlo contra una muestra de 8 KB como máximo; no se almacena nada |

Los tres requieren autenticación de administración y validan el cuerpo con Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Inyección de prompts (`promptInjection.ts`)

Detecta estructuras adversarias en el contenido proporcionado por el usuario y
aplica la política configurada. El comportamiento se controla mediante
variables de entorno y opciones del constructor:

| Configuración     | Variable de entorno                                                                                   | Valor predeterminado | Efecto                                                                                                                                                                                                                                          |
| ----------------- | ----------------------------------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activado          | `INPUT_SANITIZER_ENABLED`                                                                             | `true`               | Cuando es `false`, la medida de protección finaliza de inmediato.                                                                                                                                                                               |
| Modo              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`               | Política de inyección: `block`, `warn` o `log`. (`redact` se acepta por compatibilidad con versiones anteriores, pero **no** elimina el texto de inyección; la reescritura de PII de la solicitud está controlada por `PII_REDACTION_ENABLED`.) |
| Umbral de bloqueo | Opción `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`               | Gravedad mínima necesaria para bloquear. Con el valor predeterminado, la gravedad media solo se observa.                                                                                                                                        |

**Precedencia del modo** (`getMode`): `options.mode` del llamador →
**anulación mediante el indicador de funcionalidad de la base de datos**
`INJECTION_GUARD_MODE` (Panel de control → Configuración → Indicadores de
funcionalidad) → variable de entorno `INJECTION_GUARD_MODE` → variable de
entorno `INPUT_SANITIZER_MODE` → `warn`. Por lo tanto, una anulación desde el
panel de control prevalece sobre las variables de entorno, de modo que la
interfaz de usuario de Indicadores de funcionalidad controla la medida de
protección en ejecución en tiempo real (sin reiniciar). La lectura de la base
de datos es segura ante fallos: si se produce un error, la medida de protección
vuelve al comportamiento basado en las variables de entorno y, cuando no se
establece ninguna anulación, el comportamiento es idéntico al de la resolución
basada únicamente en las variables de entorno.

Fuentes de detección:

1. `sanitizeRequest()` de `@/shared/utils/inputSanitizer` (conjunto de
   detectores compartido que se utiliza en otras partes del pipeline).
2. `DEFAULT_GUARD_PATTERNS` integrados (actualmente
   `system_override_inline` y `markdown_system_block`, ambos con gravedad
   `high`).
3. `customPatterns` opcionales proporcionados mediante las opciones del
   constructor (cadenas, expresiones regulares o registros
   `{ name, pattern, severity }`).

Cuando `mode === "block"` **y** al menos una detección alcanza el umbral de
gravedad, `preCall` devuelve `{ block: true, message: "Request rejected:
suspicious content detected" }`. En los modos `warn`/`log`, la barrera de seguridad registra el evento,
pero permite la llamada. El asistente compartido `evaluatePromptInjection()` también se exporta
para los consumidores que necesiten evaluar prompts sin pasar por el registro.

**Límite de análisis (v3.8.20):** el detector solo inspecciona los **primeros 16 KB** del
texto combinado de los prompts: `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bytes) en
`src/shared/utils/inputSanitizer.ts`. Tanto `detectInjection()` como
`evaluatePromptInjection()` aplican `slice(0, MAX_INJECTION_SCAN_BYTES)` antes de ejecutar
el bucle de patrones. Las directivas de inyección se encuentran cerca del principio de una entrada, por lo que esto
limita el uso de CPU/GC de las expresiones regulares en cargas de cientos de KB sin debilitar la detección (véanse
#3932 y #4041).

### Enmascarador de credenciales (`credentialMasker.ts`)

Se ejecuta en **ambas** etapas, en último lugar en la cadena predeterminada (prioridad `95`). Censura
los patrones conocidos de claves de API/tokens secretos en la carga útil saliente (contenido de los
mensajes, argumentos de llamadas a herramientas y resultados de herramientas) **y** en la respuesta del proveedor, para que una
credencial pegada en un prompt (o devuelta como eco por el resultado de una herramienta) no se filtre
al proveedor ascendente ni de vuelta al cliente.

- **Solo mediante activación explícita**, siguiendo la misma convención que la censura de PII (relacionada con la Regla estricta n.º 20):
  está deshabilitado salvo que `settings.credentialRedactionEnabled === true` **o**
  `CREDENTIAL_REDACTION_ENABLED=true`. Cuando está desactivado, la barrera de seguridad no realiza ninguna acción:
  nunca bloquea ni reescribe.
- `redactCredentials()` recorre todo el árbol de la carga útil/respuesta (`walkValue()`,
  protegido contra la contaminación de prototipos y contra ciclos mediante `WeakSet`) y sustituye las coincidencias por
  un marcador `[REDACTED:<type>]`, clonando únicamente las ramas que realmente
  han cambiado.
- `CREDENTIAL_PATTERNS` abarca claves de proveedores de LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), tokens de VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), claves de pago (Stripe, Square), claves de servicios
  en la nube (clave de acceso de AWS, Twilio, SendGrid, Mailgun), claves privadas/JWT,
  cadenas de conexión que contienen credenciales (`mongodb://user:pass@...`, etc.) y
  un patrón genérico de valores de cabecera `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Las claves con formato de cabecera (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se censuran de forma estructural (solo el valor; se conserva el prefijo del esquema, como
  `Bearer `/`Basic `) en lugar de usar la expresión regular de texto genérica.
- La barrera de seguridad nunca bloquea; únicamente reescribe (`modifiedPayload` /
  `modifiedResponse`) y añade anotaciones (`meta.credentialsRedacted`, `meta.count`).

Protección contra regresiones: `tests/unit/credential-masker-guardrail.test.ts`.

## Contrato base (`base.ts`)

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
  block?: boolean; // true interrumpe la cadena
  message?: string; // se muestra cuando se bloquea
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // devuelto por preCall para reescribir la solicitud
  modifiedResponse?: TValue; // devuelto por postCall para reescribir la respuesta
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

Una barrera de protección indica que no hay cambios devolviendo `void`, `{}` o
`{ block: false }`. Devolver un `modifiedPayload`/`modifiedResponse` reemplaza
el valor que fluye a través de la cadena para las barreras de protección posteriores.
`signal?: AbortSignal` transmite el ciclo de vida del llamador a las barreras de protección. La cancelación de una solicitud es la excepción deliberada de apertura en caso de fallo: los puentes multimedia detienen el trabajo y realizan la limpieza sin restaurar los medios sin procesar en un destino que se sabe que no los admite.

## Registro (`registry.ts`)

El singleton `guardrailRegistry` expone:

- `register(guardrail)` — añade una barrera de protección (o reemplaza una por su nombre normalizado) y
  vuelve a ordenarlas por `priority` ascendente.
- `clear()` / `list()` — funciones auxiliares administrativas.
- `runPreCallHooks(payload, context)` — recorre las barreras de protección activas, pasa el
  payload a través de `modifiedPayload` y se detiene en el primer `block: true`.
- `runPostCallHooks(response, context)` — el mismo flujo en el lado de la respuesta.
- `resetGuardrailsForTests({ registerDefaults })` — borra el estado y, opcionalmente,
  vuelve a registrar los valores predeterminados para aislar las pruebas de forma limpia.

Ambos ejecutores devuelven `{ blocked, payload|response, results, guardrail?, message? }`,
donde `results` es un array de registros `GuardrailExecutionResult` que incluyen
los campos `blocked`, `skipped`, `modified`, `error` y `meta` de cada barrera de protección,
útiles para el seguimiento.

### Desactivar barreras de protección por solicitud

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrega una
lista sin duplicados de nombres de barreras de protección que deben omitirse para la
solicitud actual. Hay cinco canales, que se leen en este orden y se combinan en una sola lista
(la primera aparición prevalece al eliminar duplicados):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` en el cuerpo de la solicitud (nivel superior)
3. `metadata.disabledGuardrails` en el cuerpo de la solicitud (solo cuando `metadata` es un objeto)
4. Cabecera `x-omniroute-disabled-guardrails`
5. Cabecera heredada `x-disabled-guardrails`

Los cinco canales se combinan, incluidas las dos cabeceras: enviar tanto
`x-omniroute-disabled-guardrails` como `x-disabled-guardrails` omite la unión de
sus listas, y una cabecera moderna vacía ya no oculta la heredada
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corregido en
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Los valores pueden ser arrays de cadenas o una cadena separada por comas; los nombres se recortan
y se normalizan a kebab-case en minúsculas (`pii_masker` → `pii-masker`), y las entradas
vacías se descartan. El resultado se pasa mediante `context.disabledGuardrails`
al registro, que omite las barreras de protección coincidentes (`skipped: true` en `results`).

La lista de desactivación solo afecta al **registro**. El modo `block` de inyección de prompts es
un límite obligatorio: el middleware de protección contra inyección
(`src/middleware/promptInjectionGuard.ts`) llama a `evaluatePromptInjection()`
sin ninguna lista de desactivación controlada por el llamador (la llamada inactiva a
`resolveDisabledGuardrails({ body })` que realizaba anteriormente se eliminó en
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), por lo que una solicitud
que desactive `prompt-injection` sigue siendo rechazada en el modo `block`. Esto es
intencionado. Los canales de desactivación están controlados por el llamador (cuerpo de la solicitud,
metadatos, cabeceras), y un llamador no debe poder desactivar un control de seguridad
configurado por el operador
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). La unión de cabeceras
de [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
solo cambia qué barreras de protección del registro se omiten; no permite que un cliente
eluda el middleware. Las políticas obligatorias de barreras de protección por clave y por grupo se
rastrean en el RFC de v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Consulta [Cobertura y límites](#coverage-and-limits).

## Orden de ejecución

Para cada solicitud que fluye a través de `src/sse/handlers/chat.ts` y
`open-sse/handlers/chatCore.ts` (las rutas de la familia de chat enumeradas en
[Cobertura y límites](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` construye la lista de exclusión a partir de la clave de API, el cuerpo
   y los encabezados.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` ejecuta las salvaguardas en orden
   ascendente de prioridad:
   - Las salvaguardas deshabilitadas se registran como `skipped`.
   - El método `preCall` de cada salvaguarda puede reescribir la carga útil mediante `modifiedPayload`.
   - El primer `block: true` interrumpe la cadena y el controlador devuelve
     una respuesta de rechazo de la salvaguarda.
3. La carga útil (posiblemente reescrita) pasa al enrutamiento combinado y al envío
   al servicio ascendente.
4. **Solo sin streaming:** después de ensamblar la respuesta,
   `guardrailRegistry.runPostCallHooks(...)` ejecuta la misma cadena sobre la
   respuesta. En este punto, `block: true` descarta la respuesta del servicio ascendente y devuelve HTTP 400. Las respuestas transmitidas por streaming omiten este paso por completo.

Las salvaguardas que generan excepciones se registran con `error: <message>` y se anotan mediante
`logger.warn`, pero la cadena continúa; su diseño permite continuar en caso de error.

## Cobertura y límites

El registro de salvaguardas está integrado únicamente en el flujo de chat. Estos límites están
fijados por `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` y
`tests/unit/guardrail-pipeline-characterization.test.ts`; actualice esas pruebas
de forma deliberada cuando cambie el comportamiento.

### Dónde se ejecutan los hooks

| Hook / control                                       | Se ejecuta en                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                    | Solicitudes gestionadas por `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (y `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` y el proxy de chat de Telegram. También el endpoint de prueba del panel `/api/guardrails/test`. Un bloqueo previo a la llamada devuelve HTTP 400. |
| `runPostCallHooks`                                   | Solo respuestas de chat **sin streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Las respuestas transmitidas por streaming nunca llegan a este punto.                                                                                                                                                                                                                                                                                      |
| PII en streaming                                     | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), conectado en `streamingPipeline.ts` cuando `PII_RESPONSE_SANITIZATION` está activado. No es una salvaguarda, por lo que los canales de deshabilitación no le afectan.                                                                                                                                                                                                                         |
| Middleware de protección contra inyección (heredado) | Todas las rutas `/v1` que contienen prompts, incluidas las de la familia de chat (consulte la [cobertura de rutas](#injection-guard-route-coverage--red-team-phase-8--block-d)). Solo inyección de prompts.                                                                                                                                                                                                                                                 |

### Qué no está cubierto

- **Rutas de medios, embeddings y datos** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nunca llegan al registro. No se
  aplica en ellas enmascaramiento de PII, enmascaramiento de credenciales ni puente de modalidad. Su única
  comprobación es el middleware heredado de protección contra inyección.
- **Las respuestas transmitidas por streaming** no reciben salvaguardas posteriores a la llamada: no se aplican
  `pii-masker` ni `credential-masker` después de la llamada, ni tampoco un bloqueo posterior. Solo se aplica la transformación de PII
  en streaming (cuando `PII_RESPONSE_SANITIZATION` está activado). Una credencial
  devuelta en una respuesta transmitida por streaming no se redacta.
- **Canales de deshabilitación frente al middleware (por diseño):** el middleware evalúa
  la inyección de prompts mediante su propia llamada a `evaluatePromptInjection()`, sin
  pasar ninguna lista de deshabilitación controlada por el llamador. El modo
  `block` es un límite obligatorio que las deshabilitaciones controladas por el llamador no pueden eludir, incluso en las rutas de la familia de chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Deshabilitar
  `prompt-injection` solo omite la salvaguarda del registro.

### Qué procesa una respuesta antes de la fase posterior a la llamada

En la ruta sin streaming, el orden es: extracción de memoria → ejecución de herramientas
integradas → salvaguardas posteriores a la llamada → salida por bloqueo posterior a la llamada → almacenamiento en caché semántica.

- La **extracción de memoria** y la **ejecución de herramientas** ven la respuesta antes de que las medidas de protección posteriores a la llamada puedan reescribirla o bloquearla. Desde
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), la extracción de memoria
  procesa el texto extraído mediante `sanitizePII` cuando
  `PII_RESPONSE_SANITIZATION` está activado (tanto en streaming como sin streaming), pero una
  respuesta que posteriormente sea bloqueada tras la llamada ya se habrá ofrecido a la memoria y
  a las herramientas.
- **La caché semántica** almacena la respuesta después de la llamada, por lo que almacena la
  respuesta reescrita, y una respuesta bloqueada nunca se almacena en caché. Las entradas de la caché se
  indexan por clave de API.

## Configuración

Variables de entorno leídas por las medidas de protección integradas:

| Variable                              | Utilizada por            | Efecto                                                                                                                                |
| ------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`       | Establézcala en `false` para desactivar por completo la detección.                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`       | Política de inyección: `warn`, `block` o `log`. El valor heredado `redact` no reescribe el texto de la inyección.                     |
| `INJECTION_GUARD_MODE`                | `prompt-injection`       | Modo de protección contra inyecciones; también es un indicador de función de la BD que **anula** las variables de entorno (BD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`       | Gravedad mínima que rechaza `MODE=block`: `high` (valor predeterminado), `medium` o `low`.                                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`       | Alias heredado de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                  |
| `PII_REDACTION_ENABLED`               | `pii-masker`             | Cuando es `true`, la PII de la solicitud se oculta (independientemente del modo de inyección).                                        |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (posterior) | Controla el comportamiento del enmascarador en las respuestas.                                                                        |

Las medidas de protección de Modality Bridge leen la configuración en tiempo de ejecución del almacén de ajustes respaldado por la BD (`getSettings()`), no de las variables de entorno. Las claves principales de Vision son `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` y `modalityBridgeCacheMaxEntries`. Las claves heredadas `visionBridge*` se aceptan únicamente como mecanismo alternativo de lectura durante el ciclo documentado; las escrituras del panel usan las claves principales. Los valores predeterminados y el mecanismo de resolución alternativo se encuentran en `src/shared/constants/modalityBridgeDefaults.ts`, mientras que las constantes heredadas se conservan en `src/shared/constants/visionBridgeDefaults.ts`.

Audio usa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` y `modalityBridgeAudioMaxClips`, además de los ajustes compartidos `modalityBridgeCache*`. Audio no tiene un mecanismo alternativo basado en claves heredadas porque estas claves se introdujeron con el esquema de Modality Bridge.

Video usa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` y `modalityBridgeVideoTimeout`, además de los ajustes compartidos `modalityBridgeCache*`. Está desactivado de forma predeterminada porque FFmpeg/ffprobe son dependencias operativas opcionales y la generación de descripciones de fotogramas añade latencia y coste del modelo.

## Barreras de protección personalizadas

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

Pasos:

1. Cree `src/lib/guardrails/myGuardrail.ts` extendiendo `BaseGuardrail`.
2. Implemente `preCall` y/o `postCall`.
3. Regístrela durante la importación (añadiéndola desde `registerDefaultGuardrails`) o
   llame a `guardrailRegistry.register(...)` en tiempo de ejecución; el registro reemplaza
   cualquier barrera de protección anterior con el mismo nombre normalizado.
4. Añada pruebas en `tests/unit/` (ejemplos existentes:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Pruebas

Use `resetGuardrailsForTests()` entre pruebas para comenzar desde un estado conocido.
Pase `{ registerDefaults: false }` para comenzar con un registro vacío y
registrar únicamente las barreras de protección sometidas a prueba. Vision Bridge admite
inyección de dependencias (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge expone
los puntos de extensión equivalentes para la configuración, las capacidades, la selección del
modelo STT, las comprobaciones de credenciales y la transcripción. Por lo tanto, las pruebas
pueden ejercitar ambos flujos sin acceso a la base de datos ni a la red.

## Véase también

- `src/lib/guardrails/` — implementación
- `src/shared/utils/inputSanitizer.ts` — detector compartido que sustenta
  la detección de inyección de prompts y el enmascaramiento de PII
- `src/shared/constants/visionBridgeDefaults.ts` — valores predeterminados de Vision Bridge y
  lista de modelos con puente forzado
- `src/shared/constants/modalityBridgeDefaults.ts` — valores predeterminados compartidos en tiempo de ejecución para Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — capa ortogonal (disyuntor, tiempos de espera)
- `docs/reference/ENVIRONMENT.md` — referencia completa de variables de entorno

## Cobertura de rutas de la protección contra inyecciones y red team (Fase 8 · Bloque D)

La protección contra inyecciones (`createInjectionGuard` / `withInjectionGuard`) cubre todas las rutas
que aceptan prompts de usuario. Respeta `INJECTION_GUARD_MODE` (el valor predeterminado `warn` = solo registra;
`block` = devuelve HTTP 400 `SECURITY_001`).

| Tipo              | Rutas                                                                                                                                                | Modo predeterminado |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Texto (existente) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | advertencia         |
| Generativas       | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | advertencia         |
| Datos             | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | advertencia         |

La extracción de texto (`extractMessageContents`) cubre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (nocturno, `nightly-llm-security.yml`):** promptfoo valida que cada ruta bloquee
el corpus OWASP-LLM con `INJECTION_GUARD_MODE=block`; garak ejecuta pruebas (se omite si no hay un secreto).
`moderations` se incluye por coherencia. El modo de bloqueo es un límite obligatorio: `evaluatePromptInjection()`
ignora la lista de desactivación por solicitud que le pasa el middleware, por lo que `disabledGuardrails`
**no** exime a una ruta de esta protección ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

El flujo de trabajo nocturno (`.github/workflows/nightly-llm-security.yml`, cron + ejecución
manual) tiene dos trabajos:

- **`promptfoo-guard` (bloqueante)** — ejecuta `promptfoo eval -c promptfooconfig.yaml`
  con `INJECTION_GUARD_MODE=block`. Cada caso adversario (p. ej., «ignora todas las
  instrucciones anteriores…», jailbreaks al estilo DAN) comprueba que la respuesta contenga
  `error.code === "SECURITY_001"`, es decir, que la protección haya rechazado realmente la solicitud.
- **`garak` (informativo)** — ejecuta garak `--probes promptinject,dan,leakreplay`
  contra una instancia local de OmniRoute (`http://localhost:20128/v1`). Está condicionado a un
  secreto del proveedor (`PROMPTFOO_PROVIDER_KEY`); se omite correctamente si no está disponible y lleva
  el sufijo `|| true`, por lo que genera un informe sin provocar un fallo de CI.

La cobertura del asistente de protección (`createInjectionGuard` / `withInjectionGuard`)
abarca todas las rutas `/v1` que contienen prompts; el texto del prompt se extrae de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` mediante
`extractMessageContents()` en `src/shared/utils/inputSanitizer.ts`.
