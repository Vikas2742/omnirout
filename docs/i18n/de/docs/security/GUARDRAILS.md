# Guardrails (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Maßgebliche Quelle:** `src/lib/guardrails/`
> **Zuletzt aktualisiert:** 2026-10-17 — v3.8.52 ([Abdeckung und Einschränkungen](#coverage-and-limits) hinzugefügt:
> welche Routen und Antwortpfade die Hooks erreichen, die zusammengeführten Deaktivierungs-Header (#16412), der
> Blockierungsmodus für Injektionen als zwingende Grenze (#16413) und was eine Antwort vor `postCall` sieht)

Guardrails erzwingen Sicherheit, Richtlinien und Inhaltstransformationen an der Grenze
zwischen OmniRoute und vorgelagerten Anbietern. Jedes Guardrail kann Anfrage-Payloads
(`preCall`) und Antworten vorgelagerter Anbieter (`postCall`) prüfen (und optional
ablehnen, transformieren oder annotieren).

Das System ist **fehlertolerant**: Wenn ein Guardrail während der Ausführung eine
Exception auslöst, zeichnet die Registry den Fehler auf und fährt mit dem nächsten
Guardrail fort, anstatt die Anfrage fehlschlagen zu lassen. Eine Blockierung ist eine
explizite Entscheidung (`block: true`) und niemals ein Versehen. Die einzige Ausnahme
ist eine abgebrochene Anfrage: Wenn das `signal` des Aufrufers abgebrochen wird, führt
ein eine Exception auslösendes Guardrail zur Ablehnung der Hook-Ausführung, anstatt
übersprungen zu werden.

Die Hooks werden **nicht** bei jeder Route oder jeder Antwort ausgeführt. Lesen Sie
[Abdeckung und Einschränkungen](#coverage-and-limits), bevor Sie sich auf ein Guardrail
als Sicherheitskontrolle verlassen.

## Integrierte Guardrails

Die Registry lädt beim Import automatisch sechs Guardrails in Prioritätsreihenfolge
(siehe `registry.ts` → `registerDefaultGuardrails()`):

| Priorität | Name                | Phase(n)       | Datei                 |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niedrigere Prioritätsnummern werden **zuerst** ausgeführt.

### Vision Bridge (`visionBridge.ts`) — Modalitäts-Bridge PR-1

Das GLM-5.3-Basismodell und `glm-5.3-{low,high,max}` verfügen über explizite
`supportsVision:false`-Metadaten in Registry/Spezifikation. Die GLM-5.3-Flash-Varianten
bleiben Modelle mit nativer Bildverarbeitung. Die `/v1/messages`-Route von Claude Code
durchläuft die gemeinsame `handleChat`-Guardrail-Kette vor dem Aufruf **vor** der
Claude-zu-OpenAI-Übersetzung; in `Read`-Werkzeugergebnissen verschachtelte Bilder müssen
beschrieben oder verarbeitet werden, bevor diese Übersetzung sie in OpenAI-Inhalte vom
Typ `image_url` überführt (#17069).

Fängt bildhaltige Anfragen ab, die an **Modelle ohne Bildverarbeitung** gerichtet sind,
und leitet entweder die gesamte Anfrage an ein bildverarbeitungsfähiges Modell um oder
ersetzt die Bildbestandteile vor dem vorgelagerten Aufruf durch Textbeschreibungen, die
von einem konfigurierbaren Bildverarbeitungsmodell erzeugt werden. Dadurch können reine
Textanbieter multimodale Payloads transparent verarbeiten.

Ablauf:

1. Überspringen, wenn das Zielmodell bereits Bildverarbeitung unterstützt (es sei denn,
   es ist in der Liste für erzwungene Überbrückung `isVisionBridgeForcedModel`
   enthalten).
2. Bildbestandteile über `extractImageParts(messages)` extrahieren
   (`visionBridgeHelpers.ts`), das an den **einheitlichen Mediendetektor**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` delegiert — die einzige
   maßgebliche Quelle, die gemeinsam mit dem Combo-Kompatibilitätsfilter verwendet wird.
   Die Extraktion ist auf die Formen beschränkt, die `replaceImageParts` wieder einsetzen
   kann (der Extrahieren↔Ersetzen-Vertrag): OpenAI `image_url`, Anthropic-base64
   `source.type:"base64"`, Anthropic-URL `source.type:"url"` und Responses API
   `input_image`. Übereinstimmende Bilder, die innerhalb von Claude-Code-
   `tool_result.content` und Responses-Werkzeugausgaben verschachtelt sind, werden
   ebenfalls extrahiert und an ihren ursprünglichen Pfaden ersetzt; reine Indikatorformen
   sind Material für den Combo-Filter und werden nicht extrahiert.
   Überspringen, wenn keine gefunden wurden.
3. Laufzeitkonfiguration über `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) auflösen: Neue
   `modalityBridge*`-Einstellungsschlüssel haben Vorrang; veraltete
   `visionBridge*`-Schlüssel bleiben für **einen Zyklus als Rückfalloption**
   (Rollback-Fenster) erhalten. Vor jeglichem Durchlaufen der Medien überspringen,
   wenn die Bridge deaktiviert ist.
4. Der Moduswähler (`modalityBridgeVisionMode`, siehe Tabelle unten) entscheidet
   zwischen Umleitung und Beschreibung. Bei einer Umleitung wird `modifiedPayload`
   zurückgegeben, wobei nur `model` ausgetauscht wurde, zusammen mit den Metadaten
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Beschreibungspfad: Bilder auf `maxImages` begrenzen, den aufgabenspezifischen Prompt
   erstellen, den Beschreibungs-Cache abfragen, das Bildverarbeitungsmodell **parallel**
   aufrufen (`Promise.allSettled`) und stattdessen Textbestandteile im Format
   `[Image N]: <description>` einfügen. Eine fehlgeschlagene Beschreibung ergibt
   `null`: Das Rohbild bleibt für unbekannte/bildverarbeitungsfähige Ziele erhalten
   (#4012), aber ein **bestätigtes direktes reines Textziel** oder eine Combo ohne
   Bildverarbeitung erhält für jedes unbeschriebene Bild einen expliziten Textplatzhalter
   `(unavailable — no vision-capable provider connected)`, einschließlich bei
   teilweisen Fehlern und Bildern über dem Limit für Beschreibungsaufrufe (#17069).
   Der bestehende Combo-Beschreibungs-Fallback für den Fall, dass alle Aufrufe
   fehlgeschlagen sind, bleibt bestehen (#8430).
6. `modifiedPayload` + Metadaten (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`) zurückgeben.

#### Moduswähler (`modalityBridgeVisionMode`)

| Modus      | Standard | Verhalten                                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Unveränderte Legacy-Heuristik (#6640/#7204): Nicht-Combo-/`auto/`-Modelle werden an das beste Vision-Modell umgeleitet, sofern für das ursprüngliche Modell nicht bereits verwendbare Anmeldedaten vorliegen (dann erfolgt eine Beschreibung); Combo-Ziele führen immer eine Beschreibung durch.                                                                                  |
| `describe` |          | Immer beschreiben — der Umleitungsblock wird vollständig übersprungen; das vom Benutzer ausgewählte Modell antwortet immer.                                                                                                                                                                                                                                                       |
| `reroute`  |          | Umleitung erzwingen: Die Schutzprüfung zum Beibehalten eines Modells mit Anmeldedaten wird umgangen. Die Schutzprüfung der Anmeldedaten für das Umleitungs-**ziel** gilt weiterhin — wenn kein verwendbares Vision-Ziel vorhanden ist, blockiert die Bridge mit einem eindeutigen Fehler, anstatt eine Beschreibung zu erstellen oder Rohbilder an ein reines Textziel zu senden. |

Erzwungene Modi brechen **vor** der Ausführung der Auto-Heuristik ab; das Verhalten von `auto`
ist Byte für Byte identisch mit der Schutzlogik vor PR-1.

#### API-Schlüssel-Geltungsbereich (`visionBridgeKeyScope.ts`)

Wenn der API-Schlüssel des Aufrufers `allowedConnections`, Kontingentpools
(`allowedQuotas`) oder Modelle (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`) einschränkt, wählt die Bridge nur
Umleitungs- und Beschreibungsmodelle aus, die der Schlüssel verwenden darf, und zwar über Verbindungen, die der Schlüssel
verwenden darf. Der Beschreibungsaufruf erfolgt anschließend immer über die OmniRoute-Self-Loop mit
dem Header `x-omniroute-self-loop-key-id`, sodass die empfangende Chat-Anfrage
die Verbindungs- und Modellrichtlinie dieses Schlüssels erneut durchsetzt. `enforceApiKeyPolicy()`
berücksichtigt diesen Header nur zusammen mit dem Self-Loop-Bearer, sodass er den Zugriff ausschließlich
einschränken kann; eine ID, die nicht aufgelöst werden kann, wird abgelehnt.

Wenn für den Schlüssel kein Vision-Modell zulässig ist, lehnt ein **bestätigtes reines
Textziel** die Bildanfrage lokal mit einem eindeutigen HTTP-400-Fehler ab, anstatt
Bildbytes an einen nicht dazu fähigen Upstream weiterzuleiten (#17069). Bei Zielen mit
unbekannter oder nativer Vision-Fähigkeit behält der Beschreibungspfad sein bisheriges
Fail-Open-Verhalten bei (Metadaten `{ skipped: true, reason: "no_permitted_vision_model" }`).
Anfragen ohne Schlüssel sowie Schlüssel ohne diese Einschränkungen verhalten sich exakt wie
zuvor.

#### Aufgabenbezogener Beschreibungsprompt (`modalityBridgeVisionTaskAware`)

Standardmäßig **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) hängt
den Text der **letzten Benutzernachricht** (auf 500 Zeichen gekürzt) an den
Basis-Beschreibungsprompt an, richtet die Beschreibung damit auf die tatsächliche Frage des Benutzers aus
(Codex-Vision-Proxy-Muster) und fordert das Vision-Modell auf, sichtbaren
Text zu transkribieren. Bei deaktiviertem Flag — oder wenn kein Benutzertext vorhanden ist — wird der Basisprompt unverändert verwendet.

Die eigene OpenAI-kompatible Anfrage der Beschreibungs-Self-Loop (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) fordert immer `image_url.detail: "high"` an —
bedingungslos, für jeden Aufrufer/Provider und unabhängig von jeglichem Client-Signal.
Sampling mit geringer Detailstufe verschlechtert die OCR-Genauigkeit gerade bei der
Texttranskriptionsaufgabe, die dieser Prompt anfordert. Daher fordert der Beschreibungsaufruf selbst immer eine hohe
Detailstufe an, unabhängig davon, welche Detailstufe die ursprüngliche eingehende Anfrage verwendet hat. Dies
betrifft nur den internen Body der Beschreibungsanfrage; es ändert nicht, wie
OmniRoute das eigene `image_url.detail` des Aufrufers bei der primären Anfrage weiterleitet —
dieser Standardwert wird separat und nur für erkannte OpenCode-Clients in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`) angewendet. Der
Anthropic-Wire-Format-Zweig der Beschreibungs-Self-Loop besitzt kein `detail`-Feld
und wird von keinem der beiden Standardwerte beeinflusst.

#### Ausgabelimit für Beschreibungen (`modalityBridgeVisionMaxChars`)

| Schlüssel                      | Standard | Bereich            |
| ------------------------------ | -------- | ------------------ |
| `modalityBridgeVisionMaxChars` | `0`      | `0` oder 100–50000 |

`0` (Standard) bedeutet **keine Begrenzung** — die von
`callVisionModel()` zurückgegebene Beschreibung wird unverändert weitergereicht, wodurch das bestehende
Verhalten erhalten bleibt. Jeder Wert im Bereich 100–50000 kürzt die Beschreibung und fügt ein
`…`-Suffix hinzu, bevor sie als `[Image N]: <description>` wieder eingefügt wird
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Erhöhen Sie diesen Wert für detailreiche OCR-Aufgaben, bei denen das nachgelagerte Modell die
vollständige Transkription benötigt; verringern Sie ihn, um die Token-Nutzung bei ausgabefreudigen Vision-Modellen zu begrenzen.
Das Dashboard-Feld befindet sich im Bereich „Advanced“ des Vision-Tabs
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) und hebt jeden
Wert zwischen 1 und 99 auf die Untergrenze von 100 an, während ein expliziter Wert von `0`
unverändert bleibt — `0` ist selbst ein gültiger Zod-Wert
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`) und nicht lediglich
der Standardwert für „nicht festgelegt“.

#### Beschreibungs-Cache (`modalityBridge/bridgeCache.ts`)

Prozessweit gemeinsam genutzter In-Memory-LRU- und TTL-Cache für Beschreibungsausgaben.
Schlüssel = `sha256(imageRef + composedPrompt + configuredBridgeModel)` mit
Längenpräfix-Framing (keine Kollisionen an Feldgrenzen). Die Modellkomponente ist
das **konfigurierte** Bridge-Modell und nicht das Modell, das tatsächlich geantwortet hat —
`callVisionModel` kann intern auf ein anderes Modell zurückfallen, und eine Schlüsselbildung pro Versuch würde
den Cache fragmentieren. Fehlgeschlagene Beschreibungen werden niemals zwischengespeichert. Einstellungen:

| Schlüssel                       | Standard | Bereich |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalisierung entfernter Bilder (Self-Loop-Beschreibung/Base64-Abruf)

Wenn die Bridge selbst ein **entferntes** Bild abruft — beim Anthropic-Self-Call
zur Beschreibung und bei der Base64-Konvertierung für das claude-wire-Format
(`ensureBase64ImagesForClaudeWire`), beide über
`fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — wird die resultierende
Data-URI durch `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) geleitet, bevor sie in die Anfrage an das
Vision-Modell eingebettet wird. Übermäßig große Bilder werden auf eine
**lange Kante von 2048px** herunterskaliert (entsprechend der
Größenbegrenzung, die OpenAI/Anthropic bereits serverseitig anwenden), wodurch
Upload-Datenmenge und -Latenz reduziert werden, ohne zu verändern, was das
Vision-Modell sieht. Für die Größenänderung wird `sharp` verwendet, das per
dynamischem Import geladen wird: Auf einer Plattform, auf der dessen natives
Binary nicht geladen werden kann, löst `normalizeDataUri()` **niemals eine
Ausnahme aus** — stattdessen werden die ursprünglichen Bytes unverändert
durchgereicht, sodass der Pfad für Beschreibung/Base64-Konvertierung stets
funktionsfähig bleibt. Bytes, die kein Bild darstellen (ein Abruf, der kein
dekodierbares Bild zurückgegeben hat), werden ebenfalls unverändert
durchgereicht. Diese Normalisierung ist auf Bilder beschränkt, die die Bridge
für ihren eigenen Self-Call abruft — sie wird niemals auf die unveränderte
Passthrough-Nutzlast des Aufrufers angewendet, im Einklang mit dem Prinzip,
dass Änderungen nur nach ausdrücklicher Aktivierung erfolgen (Unverrückbare
Regel Nr. 20).

#### Einstellungsschema + Migration

Die neuen `modalityBridge*`-Schlüssel werden in `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`) mit Zod validiert:
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, das
`modalityBridgeCache*`-Trio und die von der Audio Bridge verwendete
`modalityBridgeAudio*`-Gruppe. Die Migration
`141_modality_bridge_settings.sql` kopiert vorhandene ältere
`visionBridge*`-Werte in die entsprechenden neuen Schlüssel (idempotent und
ohne jemals einen vom Betreiber gesetzten `modalityBridge*`-Wert zu
überschreiben); die älteren Schlüssel werden für einen Release-Zyklus weiterhin
als Lese-Fallback akzeptiert.

#### Transparenz-Header + Statistiken

Durch Beschreibung transformierte Antworten enthalten
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(erstellt durch `buildModalityBridgeHeader()` in
`modalityBridge/bridgeStats.ts`, gesetzt durch
`withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`).
Umgeleitete Anfragen erhalten **keinen** Header — die Nutzlast blieb unverändert,
und der Modellwechsel ist bereits im Feld `model` des Antwortkörpers sichtbar.

`GET /api/modality-bridge/stats` (Management-Authentifizierung, dieselbe Stufe
wie `GET /api/settings`) gibt die speicherinternen, nach Modalität aufgeteilten
Zähler `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` für `vision`, `audio` und
`video` zurück. Für den Nenner von `averageLatencyMs` wird `latencySamples`
verwendet, nicht die Anzahl aller Versuche; bei einem Vorgang ohne Zeitmessung
wird nicht künstlich ein Null-Millisekunden-Sample erzeugt. `bridged` bleibt
der abwärtskompatible Alias für erfolgreiche Konvertierungen; fehlgeschlagene
Versuche erhöhen diesen Wert nicht.
Die Zähler werden beim Neustart des Prozesses absichtlich zurückgesetzt
(Telemetrie, keine Abrechnung).

#### Dashboard-Konfiguration

Die dedizierte Dashboard-Seite befindet sich unter
`/dashboard/settings/modality-bridge`. Ihre über die URL adressierbaren Tabs
`Vision`, `Audio` und `Video` behalten beim Wechseln des Werts `tab` die
Abfrageparameter bei. Der Vision-Tab bietet Aktivierung, Modus, Modellauswahl
(einschließlich des automatischen Standards), aufgabenbezogene
Eingabeaufforderungen, erweiterte Grenzwerte für Zeitüberschreitung,
Bildanzahl, Beschreibungslänge und Cache, Laufzeitzähler sowie eine
abgesicherte Beispielanfrage. Der Audio-Tab ist ebenfalls aktiv: Er bietet
Aktivierung, eine ausschließlich für STT vorgesehene Modellauswahl mit
automatischer Option, Grenzwerte für Zeitüberschreitung und maximale Cliplänge,
Audiozähler sowie einen `input_audio`-Beispieltest. Der Video-Tab ist
funktionsfähig: Er zeigt den Laufzeitstatus von FFmpeg/ffprobe an — einen von
vier expliziten UI-Zuständen (`unknown`, während die Prüfung läuft oder nicht
abgeschlossen werden konnte, `restricted` bei einem Dashboard-Host, der nicht
auf Loopback basiert und bei dem die Prüfung clientseitig übersprungen wird,
`unavailable`, nachdem die Prüfung abgeschlossen und das Fehlen bestätigt
wurde, oder `available` mit den FFmpeg-/ffprobe-Versionen) —, speichert
Grenzwerte für Aktivierung, Modell, Frames, Video und Zeitüberschreitung,
filtert die Modellauswahl auf visionfähige Modelle und zeigt Videozähler an.

Die frühere Vision-Bridge-Karte unter den KI-Einstellungen ist nun ein
Kompatibilitätslink zur neuen Seite; sie enthält keine zweite Kopie des
Formulars mehr. Media Providers verknüpft außerdem die Workflows
Image-to-Text und Speech-to-Text mit den entsprechenden Modality-Bridge-Tabs,
ohne den vorhandenen Speech-to-Text-Playground zu entfernen.

**Umgehung der Self-Loop-Zulassungsprüfung:** Wenn der Beschreibungsaufruf über
OmniRoutes eigenen `/v1`-Self-Loop geleitet wird (Modell eines nicht
standardmäßigen Providers), sendet die Unteranfrage
`x-omniroute-admission-bypass: internal` und wird mit den aufgelösten
Self-Loop-Anmeldedaten authentifiziert — dem lokalen `sk_omniroute`-Sentinel
im lokalen Modus oder dem vom Betreiber konfigurierten Env-Schlüssel
`OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), sodass Deployments mit
`REQUIRE_API_KEY=true` den Beschreibungsaufruf weiterhin ausführen können.
Die Umgehung wird nur für genau diese Anmeldedaten berücksichtigt, sodass
externe Clients den Header nicht verwenden können, um die Zulassungsprüfung
zu überspringen.

Ältere Standardwerte befinden sich in
`src/shared/constants/visionBridgeDefaults.ts`; die neuen Standardwerte für
Modus, Aufgabenbezug und Cache sowie der Einstellungs-Resolver befinden sich
in `src/shared/constants/modalityBridgeDefaults.ts`. Der Schutzmechanismus
stellt eine `deps`-Konstruktoroption bereit, damit Tests gefälschte
Implementierungen von `getSettings` und `callVisionModel` einschleusen können.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Fängt audiohaltige Chat-Anfragen ab, bevor sie ein Ziel erreichen, von dem
nicht bekannt ist, dass es Audioeingaben akzeptiert. Die Chat-Anfrage wird
niemals umgeleitet: Audioteile werden über den vorhandenen
OpenAI-kompatiblen Multipart-Endpunkt transkribiert, und das ausgewählte
Chat-Modell fährt mit Texttranskripten fort.

Ablauf:

1. `supportsAudio` über `getResolvedModelCapabilities()` auflösen. Explizite
   Metadaten aus der Provider-Registry haben Vorrang, gefolgt von statischen
   Modellmetadaten und anschließend synchronisierten `modalities_input`. Eine
   deklarierte Eingabeliste ohne `audio` ergibt `false`; liegen keine
   Anhaltspunkte zur Fähigkeit vor, bleibt der Wert `null`. Sowohl `false` als
   auch `null` aktivieren die konservative Bridge, während `true` sie umgeht.
2. Die Einstellungen `modalityBridgeAudio*` auflösen und über den gemeinsam
   genutzten Detektor `detectMediaParts()` aus jeder Nachricht spleißbare
   Audio-Teile auf oberster Ebene extrahieren. Unterstützte Übertragungsformate
   sind OpenAI-`input_audio`, `audio_url` und
   `source.media_type: "audio/*"`. Verschachteltes Audio wird für das Routing
   erkannt, aber nicht durch den Spleißpfad entfernt. Die Verarbeitung wird
   durch `modalityBridgeAudioMaxClips` begrenzt; spätere Teile bleiben
   unverändert.
3. Ein konfiguriertes `provider/model` berücksichtigen oder
   `selectAudioBridgeModel()` `AUDIO_TRANSCRIPTION_PROVIDERS` in stabiler
   Katalogreihenfolge durchlaufen und das erste Modell mit verwendbaren,
   aktiven Provider-Anmeldedaten auswählen lassen.
4. `callAudioTranscription()` konvertiert Base64-/Daten-URI-Audio in eine
   mehrteilige `file`-Nutzlast oder lädt eine entfernte `audio_url` über den
   nur öffentliche Ziele zulassenden Ausgangsschutz mit DNS-Pinning und einer
   Begrenzung auf 25 MB herunter. Anschließend werden die Datei und das
   ausgewählte Modell per POST an den lokalen Self-Loop-Endpunkt
   `/v1/audio/transcriptions` gesendet, authentifiziert mit
   `resolveSelfLoopBearer()`. Die bestehende Transkriptionsroute führt die
   normale Suche nach Anmeldedaten, die Behandlung von Cooldowns und
   Ratenbegrenzungen sowie das Provider-Dispatching durch.
5. Erfolgreiche Aufrufe ersetzen ihre Teile durch
   `[Audio N]: <transcript>`. Aufrufe werden mit `Promise.allSettled`
   ausgeführt: Ein einzelner Fehler behält den ursprünglichen Audio-Teil bei
   (#4012-Vertrag). Wenn alle Aufrufe fehlschlagen und für das Ziel nachgewiesen
   ist, dass `supportsAudio === false` gilt, werden die Teile zu
   `[Audio N]: (unavailable — no STT provider connected)` (#8430-Vertrag). Bei
   einem unbekannten Ziel (`null`) bleibt das Ergebnis unverändert, wenn alle
   Aufrufe fehlschlagen. Ein nachweislich reines Textziel ohne verwendbare
   STT-Anmeldedaten erhält denselben expliziten Platzhalter, ohne dass ein
   Netzwerkaufruf ausgeführt wird.

Erfolgreiche Transkripte verwenden den prozessweiten LRU-/TTL-Cache der
Modality Bridge. Der Schlüssel kombiniert die Audioreferenz, die stabile
Operationsbezeichnung `audio-transcription` und das ausgewählte STT-Modell;
Fehler werden niemals zwischengespeichert. Audio-Versuche aktualisieren die
gemeinsam genutzten Zähler `bridged`, `cacheHits`, `failures` und `lastUsedAt`.
Transformierte Antworten enthalten
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
unveränderte Anfragen erhalten kein Audio-Bridge-Segment.

Laufzeiteinstellungen sind DB-gestützt und Zod-validiert:

| Schlüssel                     | Standardwert | Bereich                 |
| ----------------------------- | ------------ | ----------------------- |
| `modalityBridgeAudioEnabled`  | `true`       | —                       |
| `modalityBridgeAudioModel`    | `""`         | Automatisch oder STT-ID |
| `modalityBridgeAudioTimeout`  | `60000`      | 1000–300000             |
| `modalityBridgeAudioMaxClips` | `3`          | 1–10                    |

Der gemeinsam genutzte Cache wird weiterhin durch
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` und
`modalityBridgeCacheMaxEntries` gesteuert.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Fängt Video-Teile auf oberster Ebene in Chat-Completions-`messages` und der
Responses-API-`input` ab, bevor ein Ziel ohne bekannte native
Videounterstützung aufgerufen wird. Unterstützte Formate sind `input_video`,
`video_url`, `video_source`, HTTPS-URLs und
`data:video/*;base64,...`-Daten-URIs. Einfache Dateinamen im Text werden nicht
als Video behandelt.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) ist für das Durchlaufen der
Anfrage, die Fähigkeits-/Richtlinienprüfung, die Aggregation pro Anfrage und
die Antwortnutzlast zuständig. Die Verarbeitung pro Video – Erfassung, Cache
für das Gesamtergebnis, Beschreibung einer Frame-Sequenz (einschließlich der
Zusammenführung eines vom Aufrufer deklarierten Audiotranskripts) sowie
Metriken, Abbruch und Bereinigung pro Versuch – ist hinter `processVideoPart`
in `videoBridgePipeline.ts` verborgen, das innerhalb der Schleife von
`preCall` einmal pro Video-Teil aufgerufen wird. Dieses Modul definiert
außerdem die expliziten Portgrenzen `VideoMediaBrokerPort` (Erfassung von Bytes
und Extraktion abgetasteter Frames), `VideoAudioTranscriptionPort`
(Zusammenführung eines vom Aufrufer deklarierten Audiotranskripts mit den
abgetasteten Bildunterschriften) und `VideoDrilldownPort` (Persistenzgrenze für
den Frame-Drilldown; noch nicht in `processVideoPart` eingebunden – derzeit
schreibt nur die separate Route
`/api/modality-bridge/video/drilldown` Drilldown-Einträge).

Der öffentliche `/v1`-Anfragepfad importiert oder startet niemals einen
Unterprozess. Entfernte Videos werden mit einer Begrenzung auf 50 MiB
heruntergeladen; eingebettete Base64-Videos haben eine konservative
dekodierte Obergrenze von 36 MiB pro Video, damit die Hülle aus
Modell/Nachrichten/Framing innerhalb des öffentlichen JSON-Zulassungslimits für
Anfragen von 50 MiB bleiben kann. Die Inline-Länge und Schätzungen der
dekodierten Größe werden vor der Speicherzuweisung geprüft. Für die
ursprüngliche Remote-URL und jede Weiterleitung ist HTTPS erforderlich, wobei
der bestehende, nur öffentliche Ziele zulassende Ausgangsschutz mit
DNS-Pinning verwendet wird. Die Bytes überschreiten anschließend exakt die
interne Broker-Grenze `POST /api/modality-bridge/video/extract`. Diese Route
ist sowohl `LOCAL_ONLY` als auch `SPAWN_CAPABLE`, akzeptiert ausschließlich
eine prozessspezifisch authentifizierte, vertrauenswürdige Loopback-Anfrage und
akzeptiert niemals eine URL, einen Dateisystempfad, eine ausführbare Datei oder
eine Argumentliste. Die Pipeline für API-Bodygrößen und der inkrementelle
Body-Reader des Handlers erzwingen unabhängig voneinander eine
Eingabeobergrenze von 50 MiB für den Broker. Seine begrenzte Warteschlange
führt jeweils eine Extraktion aus, erlaubt vier ausstehende Aufträge und
begrenzt ausstehende Eingaben auf 100 MiB.

Innerhalb des Brokers liest `ffprobe` eine private lokale Datei; die feste Format-Positivliste schließt Playlist- und Manifestformate aus. Bei zulässigen Containern der MOV-Familie bleiben externe MOV-Datenreferenzen standardmäßig deaktiviert, und der feste Befehl aktiviert sie nicht. Sowohl `ffprobe` als auch `ffmpeg` verwenden die ausschließlich auf `file` beschränkte Protokoll-Positivliste, einen Thread, feste Argument-Arrays, keine Shell sowie über `PATH` aufgelöste ausführbare Dateien. Cover-Streams mit angehängten Bildern gelten nicht als abspielbare Kandidaten. Alle abspielbaren Streams müssen die Grenzwerte einhalten, und ein expliziter Standard-Stream wird vor dem deterministischen Fallback auf den niedrigsten Index bevorzugt. Videos sind auf 600 Sekunden, 8.192 Pixel pro Dimension und 33.554.432 Quellpixel begrenzt. FFmpeg erfasst 1–16 JPEG-Frames an zeitlichen Mittelpunkten, skaliert die lange Kante ohne Hochskalierung kleinerer Eingaben auf höchstens 1.024 Pixel herunter und erhält niemals eine URL. Das Sampling ist standardmäßig `uniform`. Die optionalen Richtlinien `scene_aware` und die experimentelle Richtlinie `segment_aware` führen einen zusätzlichen festen FFmpeg-Durchlauf über den bereits validierten lokalen Stream aus, wählen eine begrenzte Anzahl von `showinfo`-Szenenzeitstempeln aus und greifen bei einem Fehler oder Timeout des Detektors, einer fehlerhaften Ausgabe oder einer leeren Kandidatenmenge deterministisch auf dieselben gleichmäßig verteilten Mittelpunkte zurück. Der segmentbezogene Modus weist Mittelpunkt-Samples proportional zu den validierten Szenenintervallen zu; segmentbezogene Nachweise und das Fallback-Verhalten werden weiter unten ausführlich beschrieben. Die feste Obergrenze von 16 Frames wird bei jeder Richtlinie nach der Auswahl angewendet. Wenn eine szenenbezogene Anfrage nur über ein Budget von einem Frame verfügt, verwendet sie den gleichmäßig bestimmten Mittelpunkt des aktiven Gesamtvideo- oder Fokusfensters und meldet `policyEffective: uniform`: Ein einzelner ausgewählter Szenen-Frame kann nicht beide zeitlichen Enden abdecken. Ein Aufrufer kann optional ein endliches Fokusfenster (`start`/`end` in Sekunden) angeben; die Grenzen werden auf die Mediendauer beschränkt, umgekehrte oder nicht endliche Fenster werden abgelehnt, und alle Sampling-Richtlinien werden ausschließlich innerhalb des normalisierten Intervalls ausgeführt. Das resultierende Fenster wird in die Sampling-Metadaten und in das Präfix der nicht vertrauenswürdigen Beschreibung aufgenommen, damit nachgelagerte Modelle einen fokussierten Ausschnitt von der vollständigen Zeitleiste unterscheiden können.

Der semantische Fokus für Bildunterschriften ist eine separate, explizite Einstellung. Der standardmäßige Analysemodus `full` behält den bestehenden Frame-Prompt bei und leitet niemals Anfragetext an das Bildunterschriftenmodell weiter. Im Modus `focused` liest die Bridge nur den neuesten nicht leeren, vom Benutzer verfassten `text`/`input_text` aus demselben Chat- oder Responses-Container, normalisiert ihn auf NFC, fasst Steuerzeichen und Leerraum zusammen und begrenzt ihn auf 500 Unicode-Codepunkte. Ein leeres Ergebnis führt zum exakten `full`-Prompt zurück. Ein verwendbarer Hinweis wird als JSON in einem dedizierten Block für nicht vertrauenswürdigen Benutzerkontext serialisiert und darf nur beobachtbare Details priorisieren; er kann die separate Warnung, in den Medien sichtbaren oder hörbaren Anweisungen nicht zu folgen, nicht außer Kraft setzen. Der textuelle Fokus leitet niemals `start`/`end` ab und verändert den zeitlichen Sampler nicht.

#### Strukturelle Segmentnachweise für FU-07

`segment_aware` verwendet einen begrenzten Voranalysedurchlauf über den bereits validierten lokalen Videostream. Die feste Filterkette skaliert zunächst auf eine Breite von höchstens 320 Pixeln, erkennt Szenenwechsel und eingefrorene Intervalle und tastet anschließend mit 1 Frame pro Sekunde ab, um Unschärfe, durchschnittliche Luminanz sowie räumliche/zeitliche Informationen zu ermitteln. Der Durchlauf ist auf 600 strukturelle Samples, einen FFmpeg-/Filter-Thread, dieselben ausschließlich auf `file` beschränkten Protokoll- und Container-Positivlisten, eine Obergrenze von 1 MiB für die Prozessausgabe und höchstens 30 Sekunden innerhalb des gemeinsamen Abbruch-/Fristmechanismus des Brokers begrenzt. Er akzeptiert niemals einen Befehl, Filter, Pfad oder eine URL aus der Anfrage.

Die strukturellen Werte sind deterministische Sampling-Nachweise und kein semantisches Videoverständnis. Sie leiten keine Subjekte, Aktionen, Bildunterschriften, Sprache oder Benutzerabsichten ab. Szenen- und Standbildgrenzen bilden Segmente; die Standbildabdeckung, Unschärfe, Belichtung, räumliche Detailtiefe und zeitliche Veränderung beeinflussen lediglich, wie das bestehende Budget von 1–16 Frames zugewiesen wird. Ein vollständig eingefrorenes Segment ist auf einen Frame begrenzt, während nicht eingefrorene Segmente um das verbleibende Budget konkurrieren. Wenn mehr Grenzen als Frames vorhanden sind, bleibt eine gleichmäßige Abdeckung der Zeitleiste erhalten, damit schnelle frühe Schnitte kein langes nachfolgendes Segment verbergen können. Szenengrenzen, die innerhalb der einsekündigen Analyseauflösung einer Standbildgrenze liegen, werden zusammengeführt.

Fehlende Filter, fehlerhafte oder leere Nachweise, ein Detektorfehler oder ein Timeout der begrenzten Voranalyse führen zur exakten Richtlinie mit gleichmäßig verteilten Mittelpunkten zurück. Ein Abbruch durch den Aufrufer oder das Erreichen der Broker-Frist führt nicht zu einem Fallback: Dadurch wird der laufende Unterprozess beendet, eine spätere Frame-Extraktion verhindert und der private temporäre Verzeichnisbaum in `finally` entfernt.

`scripts/perf/video-bridge-fu07-eval.ts` erzeugt deterministische reale FFmpeg-Testdaten für Einsparungen bei Bildunterschriftenaufrufen nach der Deduplizierung, die Budgetzuweisung bei dichter Bewegung, Unschärfe-/Belichtungs-/SI-TI-Nachweise, schnelle Schnitte mit einem langen Nachlauf sowie falsch positive Ergebnisse bei allmählichen Überblendungen. Das Skript erfasst die verstrichene Zeit der Voranalyse sowie – sofern `/usr/bin/time` verfügbar ist – die CPU-Zeit des Kindprozesses und den maximalen RSS-Speicherverbrauch. Seine Qualitätsprüfungen sind ausschließlich strukturelle Orakel. Die Qualität des realen Bildunterschriftenmodells bleibt `HOLD`, da dieses Testsystem weder über einen autorisierten Endpunkt noch über einen eingefrorenen Beurteiler verfügt. Monetäre Einsparungen bleiben ebenfalls `HOLD`, sofern `--caption-cost-per-call-usd` keine explizite positive Kostenschätzung pro Aufruf angibt; das Skript erfindet keines der beiden Ergebnisse.

Jeder Frame ist auf 4 MiB, alle Rohframes zusammen auf 23 MiB und die
serialisierte Broker-Antwort auf 32 MiB begrenzt. Ein privates temporäres
Verzeichnis wird in `finally` entfernt. OmniRoute enthält FFmpeg nicht und
akzeptiert keinen benutzerdefinierten Pfad zur ausführbaren Datei. Vor der
Bildbeschreibung führt die Bridge eine konservative visuelle Deduplizierung
durch: Jedes JPEG wird auf einen 16×16-Graustufenpuffer reduziert und nur mit
dem zuletzt beibehaltenen Frame verglichen. Bei einem angeforderten
Bildbeschreibungsbudget von mehr als einem Frame stellt die Extraktion einen
begrenzten Kandidatenpool bereit, der höchstens doppelt so groß wie dieses
Budget ist und niemals mehr als 16 Frames umfasst. Die angeforderte Obergrenze
wird erst nach der Deduplizierung angewendet, wobei beim abschließenden
Ausdünnen der erste und der letzte ausgewählte Kandidat erhalten bleiben, wenn
das Budget mindestens zwei beträgt. Die versionierte Richtlinie
`grayscale-16x16-mean-cells-v2` verwendet den größeren Wert aus der mittleren
Luminanzdifferenz und dem Anteil der Thumbnail-Zellen, deren normalisierte
Differenz mindestens 0,05 beträgt. Der Schwellenwert für Duplikate ist die
Konstante 0,04, die zugunsten der Vorhersagbarkeit gewählt wurde, anstatt als
Laufzeiteinstellung verfügbar zu sein. Dieses sekundäre kontrastreiche Signal
bewahrt kleine Bewegungen und Änderungen an sichtbarem Text, die ein Vergleich
allein anhand des Mittelwerts verbergen kann. Fehler des Vergleichers oder
Decoders werden im Sinne eines Fail-open-Verhaltens behandelt, sodass die
Abdeckung erhalten bleibt. Die Ausgabemetadaten unterscheiden zwischen
extrahierten Kandidaten, erfolgreich verwendeten Frames und verworfenen
visuellen Duplikaten.

Ein ausdrücklich als Video gekennzeichneter Teil kann einen mit Zeitstempeln
versehenen Kontaktabzug anfordern. Die Bridge erstellt ein JPEG-Raster mit
höchstens 4 Spalten und 16 Frames. Jede 512 Pixel große Zelle bettet den
Zeitstempel ihrer Quelle in ein kontrastreiches unteres Band ein, während
dieselben Zeitstempel zur nachgelagerten Zuordnung und Überprüfung auch in den
Textmetadaten verbleiben. Das vollständige JPEG bleibt auf 32 MiB begrenzt.
Falls `sharp` das Raster nicht decodieren oder zusammensetzen kann, greift die
Bridge auf die einzelnen JPEG-Frames zurück; ein Abbruch durch den Client wird
weiterhin durch den Kontaktabzugsvorgang propagiert.

Nachweise für eine Produktivsetzung sind bewusst vom synthetischen
Mikrobenchmark für die Zusammensetzung getrennt.
`scripts/perf/video-bridge-contact-sheet-eval.ts` definiert ein
schemaversioniertes A/B-Testsystem für reale OpenAI-kompatible Vision-Modelle.
Es misst die vom Anbieter gemeldeten Token, die End-to-End-Latenz in Echtzeit
(einschließlich der Zusammensetzung des Kontaktabzugs), die Anzahl der
Modellaufrufe und die Beibehaltung der im Manifest definierten Fakten. Rohe
Modellantworten werden nicht in den Bericht geschrieben; nur SHA-256-Digests
und IDs übereinstimmender Fakten werden aufbewahrt. Das Testsystem führt keinen
Netzwerkaufruf und keinen Aufruf eines kostenpflichtigen Modells durch, sofern
nicht `--execute-real` übergeben wird und `--model`, `OMNIROUTE_BASE_URL` sowie
`OMNIROUTE_API_KEY` konfiguriert sind. Ohne einen solchen ausdrücklich realen
Durchlauf bleibt sein maschinenlesbares Urteil `HOLD`; synthetische Messungen
von Nutzlast und Aufrufanzahl allein gelten nicht als Nachweis für eine
Produktivsetzung.

Aufrufer können einem unterstützten Videoteil optional ein
`transcript.cues`-Array hinzufügen, wenn sie bereits über zeitlich
synchronisierten Text verfügen. Jeder Hinweis muss `text`, ein endliches
`start`-/`end`-Intervall innerhalb der ermittelten Dauer und eine zulässige
`source` (`client`, `embedded` oder `audio-bridge`) enthalten; `confidence`
hat standardmäßig den Wert `1` und muss zwischen `0` und `1` liegen. Exakt
identische Hinweise werden zusammengeführt. OmniRoute startet anhand dieser
Metadaten niemals eine Transkription: Validierte Hinweise werden mit Quelle,
Konfidenz und Intervall in das Beschreibungsergebnis kopiert und neben den
Frame-Bildbeschreibungen als nicht vertrauenswürdige Beobachtungen dargestellt.
Ungültiger Text, Text außerhalb des gültigen Bereichs oder Text ohne
Herkunftsangabe wird abgelehnt, anstatt ihn mit dem Bildbeschreibungsstrom zu
vermischen. Beide Transkriptkanäle des Anfragekörpers normalisieren die
angegebene Herkunft zu `client`, einschließlich selbst deklarierter
Kennzeichnungen als `embedded` oder `audio-bridge`. Nur ein serverseitig
verwalteter Adapter kann diese vertrauenswürdigen Kennzeichnungen über das nur
im Code verfügbare Argument `trustedSource` zuweisen; ein JSON-Feld der Anfrage
kann dieses Argument nicht erreichen. Transkripttext bleibt unabhängig von
seiner Herkunft nicht vertrauenswürdiger, aus Medien abgeleiteter Inhalt und
darf niemals über eine Autorisierung entscheiden.

Ein fortgeschrittener Aufrufer kann für dasselbe Video eine
`audioTranscript`-Spur bereitstellen; sie wird als vom Client bereitgestellter
Text und nicht als Nachweis einer serverseitigen Transkription behandelt. Die
Fusionsschnittstelle verarbeitet visuelle und akustische Beobachtungen unter
einer gemeinsamen Frist und mit demselben Abbruchsignal, ordnet sie auf einer
gemeinsamen Zeitachse an, führt exakte Duplikate zusammen und meldet ein
Teilergebnis, wenn nur eine Seite erfolgreich ist. Ein ungültiges
`audioTranscript` führt zu einem solchen Teilergebnis – die visuelle
Beschreibung bleibt erhalten, und der Audiozweig zeichnet einen bereinigten
Fehlercode auf –, anstatt die Verarbeitung des gesamten Videos fehlschlagen zu
lassen. Die Verfügbarkeit je Zweig, das Teilresultat-Flag und die bereinigten
Fehlercodes bleiben im Beschreibungsergebnis, in den
Schutzmechanismus-Metadaten (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), in den Metadaten des Ergebnis-Caches und in den
Fusionszählern der Bridge erhalten. Der standardmäßige Video-Bridge-Pfad ruft
keine Spracherkennung auf und lädt keine zweite Medienkopie herunter; ohne
diese explizite Spur bleibt er auf Video beschränkt.

**Aufbewahrung von Transkripten (#12150 P1).** Dies gilt automatisch, sobald die
Video Bridge (die selbst Opt-in ist) einen Transkript-Cue rendert — es gibt kein
separates Aufbewahrungs-Flag. Wenn eine Anfrage irgendeinen Transkript-Cue rendert
(ein vom Aufrufer deklariertes `transcript` oder ein zusammengeführtes
`audioTranscript`), markiert die Schutzvorrichtung sie als
`videoBridgeObserved` und erzeugt eine redigierte Schattenkopie der
Videobeschreibung — ein identisches Rendering, in dem der Freitextinhalt jedes
Cues durch `[redacted-video-transcript]` ersetzt wird. Dies erfolgt durch
Ersetzen des strukturierten Cue-Felds, bevor die Zeichenfolge zusammengesetzt
wird (niemals durch Parsen des abgeflachten Textes, sodass kein Cue-Inhalt —
weder adversarieller noch gewöhnlicher, einschließlich Inhalten mit `]` wie
`[inaudible]`/`[music]` — erhalten bleiben kann). Im Anfrageinhalt des
persistierten Aufrufprotokolls wird jeder aus dem Video abgeleitete Textteil
durch diese redigierte Schattenkopie ersetzt, wobei der Abgleich anhand der
Inhaltsgleichheit erfolgt. Der `fullText`-Anker wird erneut aus der fertigen
Schutzvorrichtungs-Payload vor dem Aufruf gelesen, sodass der Abgleich auch dann
weiterhin erfolgreich ist, wenn nachfolgende Schutzvorrichtungen in der Kette
(die Maskierer für personenbezogene Daten und Zugangsdaten mit den Prioritäten
10/95) den Beschreibungstext direkt umschreiben und nachdem die Einfügung von
System-Prompt, Übergabe und Memory das Nachrichten-Array umgeformt hat. Der
Inhalt, der vorgelagert an das Modell gesendet wird, bleibt unverändert. Eine
beobachtete Anfrage befüllt außerdem keinen dauerhaften Memory-Speicher (sowohl
die aus der Anfrage als auch die aus der Antwort abgeleitete Extraktion werden
übersprungen), sodass die eigene Antwort des Modells keinen Transkripttext in
Memory wiedergeben kann.

**Unverarbeitete Videofelder (#12430).** Wenn die Bridge aktiviert und die native Videounterstützung unbekannt oder nicht vorhanden ist, aktivieren definierte `transcript`-/`audioTranscript`-Felder ebenfalls `videoBridgeObserved`, selbst nach einem Fehler bei der Beschreibung oder bei Erreichen eines `maxVideos`-Limits. `null` und leere Zeichenfolgen zählen; nicht vorhandene Felder und Metadaten, die sich nicht auf Videos beziehen, zählen nicht. In aufbewahrten Kopien werden diese Felder redigiert oder die Anfrage wird weggelassen, und Caches/Memory werden umgangen.

Auf diesen Fallback-Pfaden werden gültige vom Aufrufer bereitgestellte Cues zu
unterstützten `text`-/`input_text`-Teilen anstatt zu nicht standardmäßigen
Provider-Feldern. Beide von der Anfrage bereitgestellten Spuren bleiben nicht
vertrauenswürdige `client`-Beobachtungen, mit einem ausdrücklichen Warnhinweis,
dass das Video nicht beschrieben und die Zeitstempel nicht anhand des Mediums
überprüft wurden. Die bestehenden Gesamt- und Pro-Cue-Budgets von 256 Cues/64
KiB gelten gemeinsam für beide Spuren; Zeitstempel müssen innerhalb der
600-Sekunden-Obergrenze des Brokers und eines gegebenenfalls angegebenen
Fokusfensters liegen. Ungültige Spuren werden verworfen und nicht als beliebiger
Text weitergeleitet; eine gültige parallele Spur kann weiterhin verwendet
werden, sofern ihr gemeinsames Budget nicht überschritten wird. Null-/leere
Felder fügen keinen Text hinzu. Durch diesen Fallback werden weder Medienabruf
noch Transkription hinzugefügt. Transkript-Erweiterungsfelder werden aus dem
Fallback-Videoträger und seinen `video_url`-/`source`-Objekten entfernt. Die
OpenAI-Positivliste für das Übertragungsformat bleibt strikt; Videoträger mit
unbekannter nativer Unterstützung bleiben verfügbar, und bekannte reine
Textziele behalten sichere Marker. Strukturierte Redaktions-Schattenkopien
schützen den angefügten Transkripttext, während die ursprüngliche, dem Aufrufer
gehörende Anfrage unverändert bleibt. Ziele mit nativer Unterstützung und
deaktivierte Bridges behalten ihr bestehendes Umgehungsverhalten bei.

Zusätzliche aufbewahrte Kopien verwenden dasselbe Signal für beobachtete
Anfragen. Der unverarbeitete Snapshot der Client-Anfrage vor der
Schutzvorrichtung, die im Arbeitsspeicher ausstehende Anfrage und das Protokoll
frühzeitig abgelehnter Anfragen ersetzen Transkriptfelder in Videoteilen
strukturell; von Pipeline-Stufen und der Kontextübergabe erzeugte
Zeichenketten-Prompts werden an der Senke des persistierten Anfrageinhalts
redigiert. Der persistierte Marker `video_content_removed` sorgt dafür, dass
eine Fortsetzung über `previous_response_id` sicher fehlschlägt, anstatt
absichtlich verworfenen Text zu rekonstruieren. Wenn eine beobachtete Anfrage
ihre teilbezogene Redaktions-Schattenkopie vor der Protokollierung verliert oder
auch nur eine von mehreren Video-Schattenkopien nach späteren
Anfragemutationen nicht mehr übereinstimmt, wird der aufbewahrte Anfrageinhalt
vollständig weggelassen, anstatt ein nur teilweise redigiertes Transkript
aufzubewahren.

Bei einer beobachteten Anfrage könnte eine Modellantwort einen beliebigen Teil
des Transkripts ohne strukturierte Cue-Grenze zitieren. Ihr im Aufrufprotokoll
persistiertes `responseBody` wird daher durch einen Auslassungsmarker ersetzt;
das detaillierte Pipeline-Artefakt (das vorgelagerte/Client-Inhalte und
Stream-Chunks enthalten kann) wird nicht aufbewahrt. Semantische,
Idempotenz- und Reasoning-Replay-Caches umgehen für diese Anfrage sowohl
Lese- als auch Schreibvorgänge. Die Provider-Anfrage und die für den Client
sichtbare Antwort bleiben unverändert. Frühe Keepalive-Bytes werden aus dem
temporären Puffer entfernt, wenn das detaillierte Artefakt weggelassen wird.
Kiros Warnung zu fehlerhaftem EventStream meldet nur die Byteanzahl der Payload,
niemals deren Inhalt oder den unverarbeiteten Fehler des JSON-Parsers.
Dies erhebt keinen Anspruch darauf, dass jede nicht damit zusammenhängende
Provider-/Plugin-Diagnose geprüft wurde; die umfassendere Überprüfung
persistierter Senken wird in #11658 nachverfolgt.

Der interne Lebenszyklus von `/api/modality-bridge/video/drilldown` ist ein
separates, per Loopback/Token authentifiziertes Cache-Substrat. Jeder Vorgang
erfordert außerdem eine kanonische undurchsichtige Prinzipal-ID. Bevor ein
Produktionsaufrufer aktiviert wird, muss er diese ID aus dem authentifizierten
Mandanten ableiten und darf niemals einen vom Client ausgewählten Wert
weiterleiten. Cache-Schlüssel binden diesen Prinzipal an kanonische Sitzungs-
und Videoreferenz-IDs, speichern nur deren mittels SHA-256 abgeleitete Schlüssel
und beschränken sowohl Lese- als auch Löschvorgänge auf denselben Prinzipal. Der
Cache speichert höchstens 16 abgeleitete JPEG-Frames pro Eintrag, lässt sie nach
zehn Minuten ablaufen und unterstützt begrenzte `start`-/`end`-Lesevorgänge oder
das explizite Löschen einer Sitzung.

Jeder Prinzipal ist auf 16 Einträge und 64 MiB kanonischer JPEG-Daten begrenzt.
Diese Limits sind unabhängig von der globalen Obergrenze von 64 Einträgen/256
MiB: Quotendruck eines Prinzipals verdrängt nur die am längsten nicht
verwendeten Einträge dieses Prinzipals, bevor eine globale LRU-Verdrängung in
Betracht gezogen wird. Abgelaufene Einträge werden bei Cache-Aktivität sowohl
aus der prinzipalbezogenen als auch aus der globalen Abrechnung entfernt,
während bei Abbruch und Validierungsfehlern kein teilweiser Ersatz übernommen
wird.

Der Cache lehnt nicht-kanonisches Base64, übermäßiges Padding, Nicht-JPEG-Medien, fehlerhafte oder
abgeschnittene JPEGs sowie JPEGs ab, die während einer begrenzten vollständigen `sharp`-Dekodierung
eine Warnung erzeugen. Jedes akzeptierte Bild wird erneut als kanonisches JPEG kodiert; Breite und Höhe
werden aus den dekodierten Bytes abgeleitet, anstatt den Feldern des Aufrufers zu vertrauen, und
nachgestellte Polyglot-Bytes werden verworfen, statt sie beizubehalten. Nur der begrenzte kanonische
komprimierte Puffer wird auf beide Kontingente angerechnet. Das JSON-Übertragungslimit berücksichtigt
den Base64-Overhead für die Obergrenze von 32 MiB für dekodierte Eingaben. Jede
gespeicherte Ableitung zeichnet ihr validiertes JPEG-Format und ihre validierte Auflösung, die Sampling-Richtlinie,
die Ableitungsversion, den Erstellungszeitpunkt, den serverseitig berechneten Inhalts-Hash und die gehashte
übergeordnete Referenz sowie den Inhalts-Hash des übergeordneten Elements vom vertrauenswürdigen Aufrufer auf.
Zwischen asynchronen Dekodierungs-/Hash-Phasen wird vor dem atomaren Cache-Commit auf Abbruch geprüft.

Diese Tranche verbindet noch keinen Produktions-Produzenten mit der Route und bietet
keine Auswahl von Varianten mit mehreren Auflösungen. Der transparente Anfragepfad der Video Bridge
verursacht daher keinen zusätzlichen Aufwand, während die mandantengebundene Principal-Ableitung und
der vollständige FU-08-Lebenszyklus für mehrere Auflösungen ausdrücklich als nachgelagerte Arbeiten verbleiben,
statt als vollständig implementiertes Verhalten dokumentiert zu werden.

Frames werden nacheinander mit dem konfigurierten Video-Modell beschriftet. Eine leere
Video-Überschreibung übernimmt die Vision-Einstellung; wenn beide leer sind, wählt der Vision-
Auto-Router das tatsächlich verwendete visionsfähige Modell aus. Erfolgreiche Beschriftungen
ersetzen den ursprünglichen Teil durch ein stabiles Präfix `[Video description:`, das den Text außerdem
als nicht vertrauenswürdige, aus Medien abgeleitete Beobachtung kennzeichnet und nachgelagerte
Modelle anweist, in den Medien gefundenen Anweisungen nicht zu folgen. Cache-Schlüssel für
Frame-Beschriftungen enthalten die JPEG-Bytes, den Prompt, den Zeitstempel und das tatsächlich verwendete Modell;
nur erfolgreiche Beschriftungen werden zwischengespeichert. Cache-Einträge enthalten das tatsächlich erfolgreiche
Produzentenmodell, einschließlich eines Fallback-Modells; die Bridge meldet `mixed`, wenn unterschiedliche Frames
von unterschiedlichen Modellen erzeugt wurden. Bei einem Cache-Treffer wird diese Produzentenidentität
wiederverwendet, statt sie als angeforderten Routing-Plan neu zu kennzeichnen. Der Ergebnis-Cache
für das gesamte Video wird anhand jeder Eingabe verschlüsselt, die die Ausgabe verändert — Prompt, tatsächlich
verwendetes Modell, Sampling-Richtlinie, Frame-Anzahl, semantischer Analysemodus, der SHA-256-
Fingerabdruck des normalisierten Fokus-Hinweises, Fokusfenster, `transcript`,
`audioTranscript` und das Kontaktbogen-Flag —, sodass jede Änderung an einer dieser
Dimensionen zu einem Cache-Miss führt und niemals zu einer veralteten Wiederverwendung. Die Version
der visuellen Deduplizierungsrichtlinie, der Schwellenwert und die begrenzte Anzahl von Kandidaten-Frames
sind ebenfalls explizit im Ergebnis-Cache-Schlüssel und in den Metadaten enthalten; eine Richtlinienänderung
kann daher keine veraltete Beschreibung des gesamten Videos wiederverwenden. Die Metadaten des Ergebnis-Caches
v4 enthalten den Modus und den Fingerabdruck, niemals die Rohaufgabe des Benutzers. Guardrail-Metadaten
melden sowohl den angeforderten als auch den tatsächlich verwendeten Analysemodus; ein angeforderter
`focused`-Modus ohne verwendbaren Benutzertext wird effektiv als `full` gemeldet.

Die Guardrail extrahiert jeden unterstützten Videoteil, beschreibt jedoch nicht mehr als
`modalityBridgeVideoMaxVideos`. Bei einem Ziel, für das nachgewiesen wurde, dass
`supportsVideo === false` gilt, werden fehlgeschlagene und das Limit überschreitende Videos in explizite
sichere Textmarkierungen umgewandelt, sodass kein Rohvideo erhalten bleibt. Wenn die Fähigkeit unbekannt ist,
behalten diese Teile ihren Videoträger bei; jedes Fallback-Transkript folgt der oben beschriebenen
begrenzten Textkonvertierung. Ziele mit `supportsVideo === true` umgehen die Bridge.
Das Abbruchsignal der Client-Anfrage wird an Download, Broker-Warteschlange,
Unterprozesse und Beschriftungsaufrufe weitergegeben; Abbrüche stoppen zwischen Videos und führen niemals
nach dem Fail-open-Prinzip zur Weitergabe von Rohmedien.

Laufzeiteinstellungen werden in der Datenbank gespeichert und mit Zod validiert:

| Schlüssel                           | Standardwert | Bereich / Verhalten                                                                                                                  |
| ----------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`      | Optionale Laufzeit, Opt-in                                                                                                           |
| `modalityBridgeVideoAnalysisMode`   | `"full"`     | `full` behält generische Beschriftungen bei; `focused` verwendet begrenzten, nicht vertrauenswürdigen Kontext des neuesten Benutzers |
| `modalityBridgeVideoModel`          | `""`         | Übernimmt das Modell der Vision Bridge                                                                                               |
| `modalityBridgeVideoFrameCount`     | `8`          | 1–16                                                                                                                                 |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`  | `uniform`, `scene_aware` oder proportionales `segment_aware`; bei Detektorfehler erfolgt ein Fallback auf `uniform`                  |
| `modalityBridgeVideoMaxVideos`      | `1`          | 1–4                                                                                                                                  |
| `modalityBridgeVideoTimeout`        | `120000`     | 1000–120000 ms                                                                                                                       |

Ältere persistierte Video-Timeout-Werte über 120 Sekunden werden auf die
Broker-Deadline begrenzt; neue Schreibvorgänge für Einstellungen oberhalb dieses Limits werden abgelehnt.
`GET /api/modality-bridge/video/runtime` erfordert vor der Authentifizierung oder Laufzeitprüfung
eine vertrauenswürdige, gekennzeichnete Loopback-Lokalität und anschließend eine Management-
Authentifizierung. Die Antwort enthält nur `available`, bereinigte FFmpeg-/ffprobe-Versionen und einen festen
Grund, wenn die Laufzeit nicht verfügbar ist. Der interne Extraktionsendpunkt ist keine
öffentliche Upload-API: Bei Sättigung der Warteschlange werden `503` und `Retry-After` zurückgegeben, bei einer
Trennung durch den Aufrufer `499` und bei Erreichen der festen Broker-Deadline `504`. Konvertierte Antworten fügen
`video->text;model=<visionModel>;parts=<videos>` zum zentralen
`x-omniroute-modality-bridge`-Header hinzu, ohne Vision- oder Audio-Segmente zu entfernen.

### PII-Maskierer (`piiMasker.ts`)

Wird in **beiden** Phasen ausgeführt.

- **`preCall`** klont die Nutzlast, durchläuft `system`, `messages`, `input` und
  `prompt` (einschließlich einfacher Zeichenfolgenelemente) und wendet `processPII()` (aus
  `@/shared/utils/inputSanitizer`) auf `content`-/`text`-Felder vom Typ Zeichenfolge an. Wenn
  `PII_REDACTION_ENABLED=true` ist, werden erkannte personenbezogene Daten in der ausgehenden
  Nutzlast geschwärzt. Dies ist unabhängig von `INPUT_SANITIZER_MODE` (das nur die
  Richtlinie für Prompt-Injection steuert). Wenn die Schwärzung deaktiviert ist, zeichnet der Aufruf
  Erkennungszahlen auf, ohne Inhalte umzuschreiben.
- **`postCall`** erstellt eine tiefe Kopie der Antwort und führt `sanitizePIIResponse()` sowie
  die Maskierung für die Form der Responses API (`maskResponsesOutput` — deckt
  `output_text` und `output[].content[].text` ab) aus. Wenn eine Schwärzung erfolgt,
  ersetzt die geänderte Antwort das Original.

Die Schutzmaßnahme blockiert niemals; sie fügt lediglich Anmerkungen hinzu (`meta.detections`,
`meta.redacted`) oder schreibt Inhalte um.

#### Auswahl nach Typ, benutzerdefinierte Muster und Erkennungszähler

Unter **Dashboard → Einstellungen → Sicherheit → Maskierung personenbezogener Daten** wird ausgewählt, _was_ maskiert wird. Dadurch
wird die Maskierung nicht aktiviert: Dies geschieht weiterhin über `PII_REDACTION_ENABLED` (Anfrage) und
`PII_RESPONSE_SANITIZATION` (Antwort + SSE); beide sind standardmäßig deaktiviert.

- **Auswahl nach Typ** — die integrierten IDs sind in
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`) aufgeführt. Nicht gesetzt bedeutet alle
  Typen (das Verhalten vor Einführung dieser Einstellung). Das
  `ssn_us`-Muster der Anfrage-Engine wird `ssn` zugeordnet. Vorlagen (Minimal, Standard, Finanzen,
  Brasilianisch, USA, Vollständig) befüllen lediglich die Kontrollkästchen in der Benutzeroberfläche.
- **Benutzerdefinierte Muster** — bis zu 20 Regex- oder Platzhaltermuster (`*` = bis zu 64
  Nicht-Leerraumzeichen, `?` = eines). Treffer werden zu `[CUSTOM_REDACTED]`.
  Jedes Muster wird durch `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`) verarbeitet: höchstens 500 Zeichen, Flags beschränkt
  auf `g i m s u`, muss kompilierbar sein, muss `safe-regex` bestehen (katastrophales
  Backtracking) und darf weder auf eine leere Zeichenfolge noch auf einen Schwärzungsplatzhalter passen.
  Ein fehlerhaftes Muster wird beim Speichern und Testen abgelehnt, und eine gespeicherte Zeile,
  die fehlschlägt, wird zur Laufzeit übersprungen, anstatt kompiliert zu werden. Benutzerdefinierte Muster werden nur
  ausgeführt, solange die Maskierung aktiviert ist.
- **Erkennungszähler** — Anzahl pro Typ (niemals die gefundenen Werte), im
  Arbeitsspeicher gehalten und bei einem Neustart zurückgesetzt (`src/lib/pii/piiDetectionStats.ts`). Sie werden nur
  erhöht, solange die Maskierung aktiviert ist.

Die Einstellungen befinden sich in der Tabelle `key_value` (Namespace `pii_settings`,
`src/lib/db/piiSettings.ts`) und werden über einen 1-s-Cache gelesen. API:

| Methode | Pfad                     | Zweck                                                                                   |
| ------- | ------------------------ | --------------------------------------------------------------------------------------- |
| `GET`   | `/api/settings/pii`      | Status der Flags, `enabledTypes`, `customPatterns`, Erkennungszähler                    |
| `PUT`   | `/api/settings/pii`      | `enabledTypes` (`null` = alle) und/oder `customPatterns` ersetzen                       |
| `POST`  | `/api/settings/pii/test` | Testlauf eines Musters mit einer Stichprobe von höchstens 8 KB; nichts wird gespeichert |

Alle drei erfordern eine Verwaltungsauthentifizierung und validieren den Body mit Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Prompt-Injection (`promptInjection.ts`)

Erkennt gegnerische Strukturen in vom Benutzer bereitgestellten Inhalten und setzt die
konfigurierte Richtlinie durch. Das Verhalten wird durch Umgebungsvariablen und Konstruktoroptionen
gesteuert:

| Einstellung      | Umgebungsvariable                                                                                     | Standardwert | Auswirkung                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Aktiviert        | `INPUT_SANITIZER_ENABLED`                                                                             | `true`       | Bei `false` bricht die Schutzmaßnahme vorzeitig ab.                                                                                                                                                                                                            |
| Modus            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`       | Injection-Richtlinie: `block`, `warn` oder `log`. (`redact` wird aus Gründen der Abwärtskompatibilität akzeptiert, entfernt aber **keinen** Injection-Text; das Umschreiben personenbezogener Daten in Anfragen wird durch `PII_REDACTION_ENABLED` gesteuert.) |
| Blockierschwelle | Option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (Alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`       | Zum Blockieren erforderlicher minimaler Schweregrad. Medium dient beim Standardwert nur der Beobachtung.                                                                                                                                                       |

**Modus-Priorität** (`getMode`): `options.mode` des Aufrufers →
**DB-Feature-Flag-Überschreibung** für `INJECTION_GUARD_MODE` (Dashboard → Einstellungen →
Feature-Flags) → Umgebungsvariable `INJECTION_GUARD_MODE` → Umgebungsvariable `INPUT_SANITIZER_MODE` →
`warn`. Eine Dashboard-Überschreibung hat daher Vorrang vor den Umgebungsvariablen, sodass die
Feature-Flags-Benutzeroberfläche die laufende Schutzmaßnahme unmittelbar steuert (kein Neustart). Das Lesen aus der DB ist ausfallsicher:
Bei einem Fehler fällt die Schutzmaßnahme auf das umgebungsvariablenbasierte Verhalten zurück, und wenn keine
Überschreibung festgelegt ist, ist das Verhalten identisch mit der ausschließlich umgebungsvariablenbasierten Auflösung.

Erkennungsquellen:

1. `sanitizeRequest()` aus `@/shared/utils/inputSanitizer` (gemeinsamer Detektorsatz,
   der an anderer Stelle in der Pipeline verwendet wird).
2. Integrierte `DEFAULT_GUARD_PATTERNS` (derzeit `system_override_inline` und
   `markdown_system_block`, beide mit dem Schweregrad `high`).
3. Optionale `customPatterns`, die über Konstruktoroptionen übergeben werden (Zeichenfolgen, Regex
   oder Datensätze vom Typ `{ name, pattern, severity }`).

Wenn `mode === "block"` gilt **und** mindestens eine Erkennung den Schweregrad-
Schwellenwert erreicht, gibt `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` zurück. In den Modi `warn`/`log` protokolliert die
Schutzfunktion den Vorfall, lässt den Aufruf jedoch zu. Die gemeinsam genutzte
Hilfsfunktion `evaluatePromptInjection()` wird ebenfalls exportiert, damit
Aufrufer Prompts auswerten können, ohne die Registry zu durchlaufen.

**Scanbegrenzung (v3.8.20):** Der Detektor untersucht nur die **ersten 16 KB**
des zusammengefügten Prompt-Texts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024`
(16 384 Byte) in `src/shared/utils/inputSanitizer.ts`. Sowohl `detectInjection()`
als auch `evaluatePromptInjection()` führen `slice(0, MAX_INJECTION_SCAN_BYTES)`
aus, bevor sie die Musterschleife durchlaufen. Injektionsanweisungen stehen nahe
am Anfang einer Eingabe. Dadurch wird die Regex-CPU-/GC-Belastung bei Payloads
von mehreren Hundert KB begrenzt, ohne die Erkennung zu schwächen (vgl. #3932,
#4041).

### Anmeldedatenmaskierer (`credentialMasker.ts`)

Wird in **beiden** Phasen ausgeführt, zuletzt in der Standardkette (Priorität
`95`). Schwärzt bekannte Muster für API-Schlüssel und geheime Token im
ausgehenden Payload (Nachrichteninhalt, Argumente von Tool-Aufrufen,
Tool-Ergebnisse) **und** in der Provider-Antwort, sodass in einen Prompt
eingefügte Anmeldedaten (oder von einem Tool-Ergebnis zurückgegebene
Anmeldedaten) weder an den vorgelagerten Provider noch zurück an den Client
gelangen.

- **Nur nach expliziter Aktivierung**, gemäß derselben Konvention wie bei der
  Schwärzung personenbezogener Daten (angrenzend an feste Regel Nr. 20):
  deaktiviert, sofern nicht `settings.credentialRedactionEnabled === true`
  **oder** `CREDENTIAL_REDACTION_ENABLED=true` gilt. Ist die Funktion
  ausgeschaltet, führt die Schutzfunktion keine Aktion aus — sie blockiert und
  verändert nie etwas.
- `redactCredentials()` durchläuft die gesamte Payload-/Antwortstruktur
  (`walkValue()`, sicher gegen Prototype Pollution, mittels `WeakSet`
  zyklensicher) und ersetzt Treffer durch einen Platzhalter vom Typ
  `[REDACTED:<type>]`. Dabei werden nur tatsächlich veränderte Zweige geklont.
- `CREDENTIAL_PATTERNS` deckt Schlüssel von LLM-Providern (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), VCS-/SaaS-Token (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), Zahlungsschlüssel (Stripe, Square),
  Cloud-Schlüssel (AWS-Zugriffsschlüssel, Twilio, SendGrid, Mailgun), private
  Schlüssel/JWTs, Verbindungszeichenfolgen mit Anmeldedaten
  (`mongodb://user:pass@...` usw.) sowie ein generisches Muster für Werte der
  Header `Authorization`/`x-api-key`/`api-key`/`apikey` ab. Header-förmige
  Schlüssel (`authorization`, `x-api-key`, `api-key`, `apikey`) werden
  strukturell geschwärzt (nur der Wert; Schemapräfixe wie `Bearer `/`Basic `
  bleiben erhalten), statt den generischen Text-Regex zu verwenden.
- Die Schutzfunktion blockiert nie; sie schreibt nur um (`modifiedPayload` /
  `modifiedResponse`) und fügt Annotationen hinzu
  (`meta.credentialsRedacted`, `meta.count`).

Regressionsschutz: `tests/unit/credential-masker-guardrail.test.ts`.

## Basisvertrag (`base.ts`)

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
  block?: boolean; // true unterbricht die Kette vorzeitig
  message?: string; // wird beim Blockieren ausgegeben
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // wird von preCall zurückgegeben, um die Anfrage umzuschreiben
  modifiedResponse?: TValue; // wird von postCall zurückgegeben, um die Antwort umzuschreiben
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

Ein Guardrail signalisiert „keine Änderung“, indem es entweder `void`, `{}` oder
`{ block: false }` zurückgibt. Die Rückgabe eines `modifiedPayload`/`modifiedResponse`
ersetzt den Wert, der für nachgelagerte Guardrails durch die Kette fließt.
`signal?: AbortSignal` überträgt den Lebenszyklus des Aufrufers auf die Guardrails. Der Abbruch einer Anfrage ist die bewusst gewählte Fail-open-Ausnahme: Medienbrücken stellen ihre Arbeit ein und bereinigen Ressourcen, ohne unverarbeitete Medien für ein Ziel wiederherzustellen, von dem bekannt ist, dass es diese nicht unterstützt.

## Registry (`registry.ts`)

Der Singleton `guardrailRegistry` stellt Folgendes bereit:

- `register(guardrail)` — fügt ein Guardrail hinzu (oder ersetzt es anhand des normalisierten Namens) und
  sortiert die Guardrails erneut nach aufsteigender `priority`.
- `clear()` / `list()` — administrative Hilfsfunktionen.
- `runPreCallHooks(payload, context)` — durchläuft aktive Guardrails, reicht das
  Payload über `modifiedPayload` weiter und stoppt beim ersten `block: true`.
- `runPostCallHooks(response, context)` — derselbe Ablauf auf der Antwortseite.
- `resetGuardrailsForTests({ registerDefaults })` — leert den Zustand und registriert optional
  die Standardwerte erneut, um eine saubere Testisolation zu gewährleisten.

Beide Runner geben `{ blocked, payload|response, results, guardrail?, message? }`
zurück, wobei `results` ein Array von `GuardrailExecutionResult`-Datensätzen ist, die
für jedes Guardrail die Felder `blocked`, `skipped`, `modified`, `error` und `meta`
enthalten, was für die Ablaufverfolgung nützlich ist.

### Guardrails pro Anfrage deaktivieren

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` fasst eine
deduplizierte Liste der Guardrail-Namen zusammen, die für die aktuelle
Anfrage übersprungen werden sollen. Es gibt fünf Kanäle, die in dieser Reihenfolge
gelesen und zu einer Liste zusammengeführt werden (beim Deduplizieren hat das
erste Vorkommen Vorrang):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` im Anfrage-Body (auf oberster Ebene)
3. `metadata.disabledGuardrails` im Anfrage-Body (nur wenn `metadata` ein Objekt ist)
4. Header `x-omniroute-disabled-guardrails`
5. Veralteter Header `x-disabled-guardrails`

Alle fünf Kanäle werden zusammengeführt, einschließlich der beiden Header: Werden sowohl
`x-omniroute-disabled-guardrails` als auch `x-disabled-guardrails` gesendet, wird die Vereinigungsmenge
ihrer Listen übersprungen, und ein leerer moderner Header verbirgt den veralteten Header nicht mehr
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), behoben in
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Werte können Arrays von Zeichenfolgen oder eine kommagetrennte Zeichenfolge sein; Namen werden zugeschnitten
und in kleingeschriebene Kebab-Case-Namen normalisiert (`pii_masker` → `pii-masker`), und leere
Einträge werden entfernt. Das Ergebnis wird über `context.disabledGuardrails`
an die Registry übergeben, die übereinstimmende Guardrails überspringt (`skipped: true` in `results`).

Die Deaktivierungsliste wirkt sich nur auf die **Registry** aus. Der `block`-Modus der Prompt-Injection-Erkennung ist
eine obligatorische Grenze: Die Injection-Guard-Middleware
(`src/middleware/promptInjectionGuard.ts`) ruft `evaluatePromptInjection()`
ohne eine vom Aufrufer kontrollierte Deaktivierungsliste auf (der nicht mehr verwendete
Aufruf `resolveDisabledGuardrails({ body })`, den sie zuvor ausführte, wurde in
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934) entfernt), sodass eine Anfrage,
die `prompt-injection` deaktiviert, im `block`-Modus weiterhin abgelehnt wird. Dies ist
beabsichtigt. Die Deaktivierungskanäle werden vom Aufrufer kontrolliert (Anfrage-Body,
Metadaten, Header), und ein Aufrufer darf keine Sicherheitskontrolle deaktivieren können,
die der Betreiber festgelegt hat
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Die Header-Vereinigung aus
[#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ändert nur, welche Registry-Guardrails übersprungen werden; sie ermöglicht einem Client
nicht, die Middleware zu umgehen. Verbindliche Guardrail-Richtlinien pro Schlüssel und pro Gruppe werden
im v4-RFC [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417) nachverfolgt.
Siehe [Abdeckung und Einschränkungen](#coverage-and-limits).

## Ausführungsreihenfolge

Für jede Anfrage, die durch `src/sse/handlers/chat.ts` und
`open-sse/handlers/chatCore.ts` läuft (die unter
[Abdeckung und Einschränkungen](#coverage-and-limits) aufgeführten Routen der Chat-Familie):

1. `resolveDisabledGuardrails(...)` erstellt die Überspringliste aus API-Schlüssel, Body
   und Headern.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` führt Guardrails in aufsteigender
   Prioritätsreihenfolge aus:
   - Deaktivierte Guardrails werden als `skipped` erfasst.
   - Das `preCall` jedes Guardrails kann den Payload über `modifiedPayload` umschreiben.
   - Das erste `block: true` beendet die Kette vorzeitig, und der Handler gibt
     eine Guardrail-Ablehnungsantwort zurück.
3. Der (möglicherweise umgeschriebene) Payload wird an das Combo-Routing und den
   Upstream-Versand weitergeleitet.
4. **Nur ohne Streaming:** Nachdem die Antwort zusammengestellt wurde,
   führt `guardrailRegistry.runPostCallHooks(...)` dieselbe Kette für die
   Antwort aus. `block: true` verwirft hier die Upstream-Antwort und gibt HTTP 400 zurück. Bei gestreamten Antworten wird dieser Schritt vollständig übersprungen.

Guardrails, die eine Exception auslösen, werden mit `error: <message>` erfasst und über
`logger.warn` protokolliert, aber die Kette wird fortgesetzt — konstruktionsbedingt nach dem Fail-open-Prinzip.

## Abdeckung und Einschränkungen

Die Guardrail-Registry ist nur in die Chat-Pipeline eingebunden. Diese Einschränkungen sind
durch `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` und
`tests/unit/guardrail-pipeline-characterization.test.ts` festgeschrieben; aktualisieren Sie diese Tests
bewusst, wenn sich das Verhalten ändert.

### Wo die Hooks ausgeführt werden

| Hook / Steuerung                    | Wird ausgeführt für                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                   | Von `handleChat` (`src/sse/handlers/chat.ts`) verarbeitete Anfragen: `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (und `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` sowie der Telegram-Chat-Proxy. Außerdem der Dashboard-Testendpunkt `/api/guardrails/test`. Eine Blockierung vor dem Aufruf gibt HTTP 400 zurück. |
| `runPostCallHooks`                  | Nur Chat-Antworten **ohne Streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Gestreamte Antworten erreichen diesen Hook nie.                                                                                                                                                                                                                                                                                                              |
| Streaming-PII                       | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), in `streamingPipeline.ts` eingebunden, wenn `PII_RESPONSE_SANITIZATION` aktiviert ist. Dies ist kein Guardrail, daher wirken sich die Deaktivierungskanäle nicht darauf aus.                                                                                                                                                                                                                 |
| Injection-Guard-Middleware (Legacy) | Jede Prompt-enthaltende `/v1`-Route, einschließlich der Chat-Familie (siehe [Routenabdeckung](#injection-guard-route-coverage--red-team-phase-8--block-d)). Nur Prompt-Injection.                                                                                                                                                                                                                                                                          |

### Was nicht abgedeckt ist

- **Medien-, Embedding- und Datenrouten** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) erreichen die Registry nie. Dort werden weder
  PII-Maskierung noch Zugangsdatenmaskierung oder Modality Bridge ausgeführt. Ihre einzige
  Prüfung ist das Legacy-Injection-Guard-Middleware.
- **Gestreamte Antworten** erhalten keine Guardrails nach dem Aufruf: weder
  `pii-masker` noch `credential-masker` werden nach dem Aufruf ausgeführt, und es gibt keine Blockierung nach dem Aufruf. Es wird lediglich die Streaming-PII-Transformation
  angewendet (wenn `PII_RESPONSE_SANITIZATION` aktiviert ist). Zugangsdaten,
  die in einer gestreamten Antwort zurückgegeben werden, werden nicht unkenntlich gemacht.
- **Deaktivierungskanäle im Vergleich zum Middleware (konstruktionsbedingt):** Das Middleware bewertet
  Prompt-Injection durch einen eigenen Aufruf von `evaluatePromptInjection()`, ohne
  eine vom Aufrufer kontrollierte Deaktivierungsliste zu übergeben. Der Modus `block` ist eine obligatorische
  Grenze, die nicht durch vom Aufrufer kontrollierte Deaktivierungen umgangen werden kann, auch nicht auf Routen der Chat-Familie
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Durch das Deaktivieren von
  `prompt-injection` wird nur das Registry-Guardrail übersprungen.

### Was eine Antwort vor dem Hook nach dem Aufruf sieht

Auf dem Pfad ohne Streaming lautet die Reihenfolge: Speicherextraktion → Ausführung integrierter Tools
→ Guardrails nach dem Aufruf → Beendigung bei Blockierung nach dem Aufruf → Speicherung im semantischen Cache.

- **Speicherextraktion** und **Tool-Ausführung** sehen die Antwort, bevor nachgelagerte
  Schutzmechanismen sie umschreiben oder blockieren können. Seit
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) wird der extrahierte
  Text bei der Speicherextraktion durch `sanitizePII` geleitet, wenn
  `PII_RESPONSE_SANITIZATION` aktiviert ist (sowohl beim Streaming als auch ohne Streaming). Eine
  Antwort, die später nachgelagert blockiert wird, wurde dem Speicher und den
  Tools jedoch bereits bereitgestellt.
- **Der semantische Cache** speichert die Antwort nach den nachgelagerten Schutzmechanismen und
  damit die umgeschriebene Antwort; eine blockierte Antwort wird niemals zwischengespeichert. Cache-Einträge werden
  pro API-Schlüssel verwaltet.

## Konfiguration

Von den integrierten Guardrails gelesene Umgebungsvariablen:

| Variable                              | Verwendet von               | Wirkung                                                                                                               |
| ------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`          | Auf `false` setzen, um die Erkennung vollständig zu deaktivieren.                                                     |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`          | Injektionsrichtlinie: `warn`, `block` oder `log`. Der veraltete Wert `redact` schreibt Injektionstext nicht um.       |
| `INJECTION_GUARD_MODE`                | `prompt-injection`          | Modus für den Injektionsschutz; zugleich ein DB-Feature-Flag, das die Umgebungsvariablen **überschreibt** (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`          | Mindestschweregrad, den `MODE=block` ablehnt: `high` (Standard), `medium` oder `low`.                                 |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`          | Veralteter Alias für `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                               |
| `PII_REDACTION_ENABLED`               | `pii-masker`                | Wenn `true`, werden personenbezogene Daten in Anfragen redigiert (unabhängig vom Injektionsmodus).                    |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (nachgelagert) | Steuert das Verhalten des Maskierers auf der Antwortseite.                                                            |

Die Guardrails der Modality Bridge lesen die Laufzeitkonfiguration aus dem DB-gestützten Einstellungsspeicher (`getSettings()`) und nicht aus Umgebungsvariablen. Die primären Schlüssel für Vision sind `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` und `modalityBridgeCacheMaxEntries`. Die veralteten `visionBridge*`-Schlüssel werden nur als dokumentierter Lese-Fallback für einen Zyklus akzeptiert; Schreibvorgänge im Dashboard verwenden die primären Schlüssel. Standardwerte und der Fallback-Resolver befinden sich in `src/shared/constants/modalityBridgeDefaults.ts`, wobei veraltete Konstanten in `src/shared/constants/visionBridgeDefaults.ts` beibehalten werden.

Audio verwendet `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` und `modalityBridgeAudioMaxClips` sowie die gemeinsamen `modalityBridgeCache*`-Einstellungen. Für Audio gibt es keinen Fallback auf veraltete Schlüssel, da diese Schlüssel mit dem Modality-Bridge-Schema eingeführt wurden.

Video verwendet `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` und `modalityBridgeVideoTimeout` sowie die gemeinsamen `modalityBridgeCache*`-Einstellungen. Es ist standardmäßig deaktiviert, da FFmpeg/ffprobe optionale betriebliche Abhängigkeiten sind und die Beschriftung von Einzelbildern zusätzliche Latenz und Modellkosten verursacht.

## Benutzerdefinierte Guardrails

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

Schritte:

1. Erstellen Sie `src/lib/guardrails/myGuardrail.ts` als Erweiterung von `BaseGuardrail`.
2. Implementieren Sie `preCall` und/oder `postCall`.
3. Registrieren Sie die Guardrail entweder beim Import (durch Hinzufügen in `registerDefaultGuardrails`) oder
   rufen Sie zur Laufzeit `guardrailRegistry.register(...)` auf — die Registry ersetzt
   jede vorherige Guardrail mit demselben normalisierten Namen.
4. Fügen Sie Tests unter `tests/unit/` hinzu (vorhandene Beispiele:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Verwenden Sie zwischen den Tests `resetGuardrailsForTests()`, um mit einem bekannten Zustand zu beginnen.
Übergeben Sie `{ registerDefaults: false }`, um mit einer leeren Registry zu beginnen und
nur die zu testenden Guardrails zu registrieren. Vision Bridge unterstützt Dependency
Injection (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge stellt entsprechende
Schnittstellen für Einstellungen, Fähigkeiten, STT-Modellauswahl, Anmeldedatenprüfungen
und Transkription bereit. Tests können daher beide Abläufe ohne Datenbank- oder
Netzwerkzugriff prüfen.

## Siehe auch

- `src/lib/guardrails/` — Implementierung
- `src/shared/utils/inputSanitizer.ts` — gemeinsam genutzter Detektor für
  Prompt-Injection und PII-Maskierung
- `src/shared/constants/visionBridgeDefaults.ts` — Standardwerte von Vision Bridge und
  Modellliste für erzwungenes Bridging
- `src/shared/constants/modalityBridgeDefaults.ts` — gemeinsam genutzte Laufzeitstandardwerte für Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — orthogonale Schicht (Circuit Breaker, Cooldowns)
- `docs/reference/ENVIRONMENT.md` — vollständige Referenz der Umgebungsvariablen

## Routenabdeckung des Injection-Guards und Red-Teaming (Phase 8 · Block D)

Der Injection-Guard (`createInjectionGuard` / `withInjectionGuard`) deckt alle Routen ab,
die Benutzer-Prompts akzeptieren. Er berücksichtigt `INJECTION_GUARD_MODE` (Standardwert `warn` = nur protokollieren;
`block` = gibt HTTP 400 `SECURITY_001` zurück).

| Typ              | Routen                                                                                                                                               | Standardmodus |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Text (vorhanden) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generativ        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Daten            | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Die Textextraktion (`extractMessageContents`) deckt `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` ab.

**Red-Team (nächtlich, `nightly-llm-security.yml`):** promptfoo überprüft, dass jede Route
den OWASP-LLM-Korpus bei `INJECTION_GUARD_MODE=block` blockiert; garak führt Prüfungen aus (wird ohne Secret übersprungen).
`moderations` ist aus Konsistenzgründen enthalten. Der Blockierungsmodus ist eine verbindliche Grenze: `evaluatePromptInjection()`
ignoriert die vom Middleware-Code übergebene Deaktivierungsliste pro Anfrage, sodass `disabledGuardrails`
eine Route davon **nicht** ausnimmt ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Der nächtliche Workflow (`.github/workflows/nightly-llm-security.yml`, Cron + manuelle
Ausführung) umfasst zwei Jobs:

- **`promptfoo-guard` (blockierend)** — führt `promptfoo eval -c promptfooconfig.yaml`
  mit `INJECTION_GUARD_MODE=block` aus. Jeder adversariale Testfall (z. B. „Ignoriere alle
  vorherigen Anweisungen …“, Jailbreaks im DAN-Stil) stellt sicher, dass die Antwort
  `error.code === "SECURITY_001"` enthält, d. h., dass die Guardrail die Anfrage tatsächlich abgelehnt hat.
- **`garak` (informativ)** — führt garak mit `--probes promptinject,dan,leakreplay`
  gegen eine lokale OmniRoute-Instanz (`http://localhost:20128/v1`) aus. Der Job ist an ein
  Provider-Secret (`PROMPTFOO_PROVIDER_KEY`) gebunden; er wird ordnungsgemäß übersprungen und mit
  `|| true` abgeschlossen, sodass er Ergebnisse meldet, ohne CI fehlschlagen zu lassen.

Die Abdeckung des Guard-Helfers (`createInjectionGuard` / `withInjectionGuard`)
erstreckt sich über jede Prompt-verarbeitende `/v1`-Route; der Prompt-Text wird durch
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts` aus
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` extrahiert.
