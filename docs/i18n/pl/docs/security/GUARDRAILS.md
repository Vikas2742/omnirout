# Guardrails (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Źródło prawdy:** `src/lib/guardrails/`
> **Ostatnia aktualizacja:** 2026-10-17 — v3.8.52 (dodano [Zasięg i ograniczenia](#coverage-and-limits):
> do jakich tras i ścieżek odpowiedzi docierają hooki, scalone nagłówki wyłączania (#16412), tryb blokowania iniekcji
> jako obowiązkową granicę (#16413) oraz co ma dostęp do odpowiedzi przed etapem post-call)

Guardraile egzekwują bezpieczeństwo, politykę i transformacje treści na granicy
między OmniRoute a dostawcami upstream. Każdy guardrail może sprawdzać (i
opcjonalnie odrzucać, przekształcać lub adnotować) payloady żądań (`preCall`) oraz
odpowiedzi upstream (`postCall`).

System działa w trybie **fail-open**: jeśli guardrail zgłosi wyjątek podczas
wykonywania, rejestr zapisuje błąd i przechodzi do kolejnego guardrailu, zamiast
powodować błąd żądania. Blokowanie jest jawną decyzją (`block: true`), nigdy
przypadkiem. Jedynym wyjątkiem jest przerwane żądanie: gdy `signal` wywołującego
zostanie przerwany, guardrail zgłaszający wyjątek odrzuca uruchomienie hooka,
zamiast zostać pominięty.

Hooki **nie** uruchamiają się na każdej trasie ani dla każdej odpowiedzi.
Przeczytaj [Zasięg i ograniczenia](#coverage-and-limits), zanim zaczniesz polegać
na guardrailu jako mechanizmie kontroli bezpieczeństwa.

## Wbudowane guardraile

Rejestr automatycznie ładuje sześć guardraili w kolejności priorytetów przy
imporcie (zobacz `registry.ts` → `registerDefaultGuardrails()`):

| Priorytet | Nazwa               | Etap(y)        | Plik                  |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Niższe numery priorytetów są uruchamiane **najpierw**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Bazowy model GLM 5.3 oraz `glm-5.3-{low,high,max}` mają jawne
metadane rejestru/specyfikacji `supportsVision:false`. Warianty GLM 5.3 Flash
pozostają modelami z natywną obsługą wizji. Trasa `/v1/messages` w Claude Code
wchodzi do współdzielonego łańcucha guardraili pre-call `handleChat` **przed**
tłumaczeniem Claude-to-OpenAI; zagnieżdżone obrazy z wyników narzędzia `Read`
muszą zostać opisane lub obsłużone, zanim to tłumaczenie przeniesie je do
zawartości `image_url` OpenAI (#17069).

Przechwytuje żądania zawierające obrazy kierowane do **modeli bez obsługi wizji**
i albo przekierowuje całe żądanie do modelu obsługującego wizję, albo zastępuje
części z obrazami opisami tekstowymi wygenerowanymi przez konfigurowalny model
wizyjny przed wywołaniem upstream. Dzięki temu dostawcy obsługujący wyłącznie
tekst mogą w przejrzysty sposób obsługiwać payloady multimodalne.

Przepływ:

1. Pomiń, jeśli model docelowy już obsługuje wizję (chyba że występuje na liście
   wymuszonego mostu `isVisionBridgeForcedModel`).
2. Wyodrębnij części z obrazami przez `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), które deleguje do **ujednoliconego detektora
   multimediów** `detectMediaParts()` w `open-sse/utils/mediaParts.ts` — jedynego
   źródła prawdy współdzielonego z filtrem zgodności combo. Wyodrębnianie jest
   objęte listą dozwolonych kształtów, które `replaceImageParts` może wstawić z
   powrotem (kontrakt wyodrębnij↔zastąp): OpenAI `image_url`, Anthropic base64
   `source.type:"base64"`, Anthropic URL `source.type:"url"` i API Responses
   `input_image`. Pasujące obrazy zagnieżdżone w `tool_result.content` Claude Code
   i wynikach narzędzi API Responses są również wyodrębniane i zastępowane w
   oryginalnych ścieżkach; kształty zawierające wyłącznie wskaźniki są materiałem
   filtra combo i nie są wyodrębniane. Pomiń, jeśli nic nie znaleziono.
3. Ustal konfigurację runtime przez `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nowe klucze ustawień
   `modalityBridge*` mają pierwszeństwo; starsze klucze `visionBridge*` pozostają
   **fallbackiem na jeden cykl** (okno wycofania). Pomiń przed jakimkolwiek
   przejściem po multimediach, gdy most jest wyłączony.
4. Selektor trybu (`modalityBridgeVisionMode`, zobacz tabelę poniżej) decyduje,
   czy przekierować, czy opisać. Przekierowanie zwraca `modifiedPayload` z
   podmienionym wyłącznie `model`, plus meta
   `{ rerouted, fromModel, toModel, imagesKept }`.
5. Ścieżka opisu: ogranicz liczbę obrazów do `maxImages`, złóż prompt
   uwzględniający zadanie, sprawdź pamięć podręczną opisów, wywołaj model wizyjny
   **równolegle** (`Promise.allSettled`) i wstaw w ich miejsce części tekstowe
   `[Image N]: <description>`. Nieudany opis zwraca `null`: surowy obraz jest
   zachowywany dla nieznanych celów lub celów obsługujących wizję (#4012), ale
   **potwierdzony bezpośredni cel wyłącznie tekstowy** lub combo bez obsługi wizji
   otrzymuje jawny tekst zastępczy
   `(unavailable — no vision-capable provider connected)` dla każdego nieopisanego
   obrazu, w tym częściowych niepowodzeń i obrazów przekraczających limit
   wywołań opisu (#17069). Istniejący fallback opisu combo w przypadku wszystkich
   niepowodzeń pozostaje bez zmian (#8430).
6. Zwróć `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Selektor trybu (`modalityBridgeVisionMode`)

| Tryb       | Domyślny | Zachowanie                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔        | Dotychczasowa heurystyka, bez zmian (#6640/#7204): modele inne niż combo/`auto/` są przekierowywane do najlepszego modelu wizyjnego, chyba że pierwotny model ma już użyteczne dane uwierzytelniające (wtedy wykonywany jest opis); cele combo zawsze wykonują opis.                                                                                                     |
| `describe` |          | Zawsze wykonuje opis — blok przekierowania jest całkowicie pomijany; zawsze odpowiada model wybrany przez użytkownika.                                                                                                                                                                                                                                                   |
| `reroute`  |          | Wymusza przekierowanie: zabezpieczenie zachowujące model z danymi uwierzytelniającymi jest pomijane. Zabezpieczenie danych uwierzytelniających **celu** przekierowania nadal obowiązuje — gdy nie istnieje użyteczny cel wizyjny, most blokuje żądanie z jasnym błędem, zamiast wykonywać opis lub wysyłać nieprzetworzone obrazy do celu obsługującego wyłącznie tekst. |

Wymuszone tryby kończą przetwarzanie **przed** uruchomieniem automatycznej heurystyki; zachowanie `auto`
jest identyczne bajt w bajt z mechanizmem zabezpieczającym sprzed PR-1.

#### Zakres klucza API (`visionBridgeKeyScope.ts`)

Gdy klucz API wywołującego ogranicza `allowedConnections`, pule limitów
(`allowedQuotas`) lub modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most wybiera wyłącznie
modele przekierowania i opisu, których klucz może używać, w ramach połączeń, z których
klucz może korzystać. Wywołanie opisu zawsze przechodzi następnie przez pętlę zwrotną
OmniRoute z nagłówkiem `x-omniroute-self-loop-key-id`, dzięki czemu odbierające żądanie
czatu ponownie egzekwuje zasady połączeń i modeli tego klucza. `enforceApiKeyPolicy()`
honoruje ten nagłówek wyłącznie w połączeniu z tokenem okaziciela pętli zwrotnej, dlatego
może on jedynie zawężać dostęp, a identyfikator, którego nie można rozpoznać, jest odrzucany.

Jeśli dla klucza nie jest dozwolony żaden model wizyjny, **potwierdzony cel obsługujący
wyłącznie tekst** odrzuca lokalnie żądanie obrazu z jasnym błędem HTTP 400, zamiast
przekazywać bajty obrazu do niezdolnej do ich obsługi usługi nadrzędnej (#17069). W przypadku
celów o nieznanej lub natywnej obsłudze obrazu ścieżka opisu zachowuje swoje wcześniejsze
zachowanie typu fail-open (metadane `{ skipped: true, reason: "no_permitted_vision_model" }`).
Żądania bez klucza oraz klucze bez tych ograniczeń działają dokładnie tak jak
wcześniej.

#### Monit opisu uwzględniający zadanie (`modalityBridgeVisionTaskAware`)

Domyślnie **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) dołącza
tekst **ostatniej wiadomości użytkownika** (skrócony do 500 znaków) do bazowego
monitu opisu, ukierunkowując opis na to, o co użytkownik faktycznie zapytał
(wzorzec codex-vision-proxy), oraz prosząc model wizyjny o transkrypcję widocznego
tekstu. Gdy flaga jest wyłączona — lub brak tekstu użytkownika — bazowy monit
jest używany bez zmian.

Własne żądanie pętli zwrotnej opisu zgodne z OpenAI (`callVisionModelSingle()`
w `visionBridgeHelpers.ts`) zawsze żąda `image_url.detail: "high"` —
bezwarunkowo, dla każdego wywołującego i dostawcy, bez uzależniania od jakiegokolwiek sygnału klienta.
Próbkowanie z niskim poziomem szczegółowości pogarsza dokładność OCR właśnie w przypadku zadania
transkrypcji tekstu, którego wymaga ten monit, dlatego samo wywołanie opisu zawsze żąda wysokiego
poziomu szczegółowości, niezależnie od poziomu użytego w pierwotnym żądaniu przychodzącym. Wpływa
to wyłącznie na wewnętrzną treść żądania opisu; nie zmienia sposobu, w jaki
OmniRoute przekazuje własne ustawienie `image_url.detail` wywołującego w żądaniu głównym —
ta wartość domyślna jest stosowana oddzielnie i tylko dla wykrytych klientów OpenCode, w
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Gałąź pętli zwrotnej
opisu używająca formatu transmisyjnego Anthropic nie ma pola `detail`
i żadna z tych wartości domyślnych nie ma na nią wpływu.

#### Limit danych wyjściowych opisu (`modalityBridgeVisionMaxChars`)

| Klucz                          | Domyślnie | Zakres            |
| ------------------------------ | --------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`       | `0` lub 100–50000 |

`0` (wartość domyślna) oznacza **brak limitu** — opis zwrócony przez
`callVisionModel()` jest przekazywany bez zmian, co zachowuje dotychczasowe
działanie. Każda wartość z zakresu 100–50000 skraca opis i dodaje przyrostek
`…`, zanim zostanie on wstawiony z powrotem jako `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` w `src/lib/guardrails/visionBridge.ts`).
Zwiększ tę wartość w przypadku zadań OCR wymagających dużej szczegółowości, w których model
docelowy potrzebuje pełnej transkrypcji; zmniejsz ją, aby ograniczyć zużycie tokenów
przez nadmiernie rozbudowane modele wizyjne.
Pole w panelu znajduje się na karcie Vision w sekcji Advanced
(`modality-bridge-max-chars` w `ModalityBridgeVisionTab.tsx`) i podnosi każdą
wartość od 1 do 99 do dolnego limitu 100, pozostawiając jawną wartość `0`
bez zmian — `0` jest samodzielną prawidłową wartością Zod
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), a nie jedynie
wartością domyślną oznaczającą „nie ustawiono”.

#### Pamięć podręczna opisów (`modalityBridge/bridgeCache.ts`)

Procesowa, współdzielona pamięć podręczna LRU + TTL w pamięci dla wyników opisów.
Klucz = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z ramkowaniem
za pomocą prefiksów długości (bez kolizji na granicach pól). Składnikiem dotyczącym modelu jest
**skonfigurowany** model mostu, a nie model, który faktycznie odpowiedział —
`callVisionModel` może wewnętrznie użyć modelu rezerwowego, a tworzenie klucza osobno dla każdej
próby powodowałoby fragmentację pamięci podręcznej. Nieudane operacje opisu nigdy nie są zapisywane
w pamięci podręcznej. Ustawienia:

| Klucz                           | Domyślnie | Zakres  |
| ------------------------------- | --------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`    | —       |
| `modalityBridgeCacheTtlMinutes` | `60`      | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`     | 10–5000 |

#### Normalizacja zdalnych obrazów (self-loop describe/pobieranie base64)

Gdy bridge sam pobiera **zdalny** obraz — wywołanie self-call Anthropic describe i konwersję base64 w formacie claude-wire
(`ensureBase64ImagesForClaudeWire`), oba przez
`fetchRemoteImageAsDataUri()` w `visionBridgeHelpers.ts` — wynikowy data
URI jest przepuszczany przez `normalizeDataUri()`
(`open-sse/utils/imageNormalize.ts`) przed osadzeniem w żądaniu modelu
wizyjnego. Obrazy o zbyt dużym rozmiarze są zmniejszane do **długiej krawędzi 2048px** (zgodnie
z limitem skalowania, który OpenAI/Anthropic już stosują po stronie serwera), co zmniejsza
liczbę bajtów przesyłanych i opóźnienie bez zmiany tego, co widzi model wizyjny. Zmiana rozmiaru
używa `sharp`, ładowanego przez dynamiczny import: na platformie, gdzie jego natywny
plik binarny nie ładuje się, `normalizeDataUri()` **nigdy nie rzuca wyjątku** — przechodzi
do przepuszczenia oryginalnych bajtów, więc ścieżka describe/konwersji base64
zawsze działa. Bajty niebędące obrazem (pobranie, które nie zwróciło
dekodowalnego obrazu) również są przepuszczane bez zmian. Ta normalizacja jest
ograniczona do obrazów, które bridge pobiera na potrzeby własnego self-call — nigdy nie jest
stosowana do surowego ładunku passthrough wywołującego, zgodnie z
zasadą mutacji tylko na opt-in (Hard Rule #20).

#### Schemat ustawień + migracja

Nowe klucze `modalityBridge*` są walidowane przez Zod w `updateSettingsSchema`
(`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`,
`modalityBridgeVisionMode`, `modalityBridgeVisionModel`,
`modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`,
`modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`,
`modalityBridgeVisionMaxChars`, trio `modalityBridgeCache*` oraz
grupa `modalityBridgeAudio*` używana przez Audio Bridge. Migracja
`141_modality_bridge_settings.sql` kopiuje istniejące wartości starszego formatu
`visionBridge*` do pasujących nowych kluczy (idempotentnie, nigdy nie nadpisuje
wartości `modalityBridge*` ustawionej przez operatora); stare klucze pozostają akceptowane jako
fallback odczytu przez jeden cykl wydania.

#### Nagłówek przejrzystości + statystyki

Odpowiedzi przekształcone przez describe zawierają
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(budowany przez `buildModalityBridgeHeader()` w `modalityBridge/bridgeStats.ts`,
dodawany przez `withModalityBridgeHeader()` w `src/sse/handlers/chatHelpers.ts`).
Przekierowane żądania **nie** otrzymują nagłówka — ładunek pozostał nietknięty, a zmiana modelu
jest już widoczna w polu `model` treści odpowiedzi.

`GET /api/modality-bridge/stats` (uwierzytelnianie zarządzania, ten sam poziom co
`GET /api/settings`) zwraca liczniki w pamięci dla poszczególnych modalności
`{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs,
latencySamples, averageLatencyMs, lastUsedAt }` dla `vision`, `audio` i
`video`. `averageLatencyMs` używa `latencySamples`, a nie wszystkich prób, jako
mianownika; operacja bez pomiaru czasu nie tworzy próbki zeromilisekundowej.
`bridged` pozostaje aliasem zgodnym wstecz dla udanych
konwersji; nieudane próby go nie zwiększają.
Liczniki resetują się przy restarcie procesu z założenia
(telemetria, nie księgowość).

#### Konfiguracja dashboardu

Dedykowana strona dashboardu to
`/dashboard/settings/modality-bridge`. Jej adresowalne w URL zakładki `Vision`, `Audio`
i `Video` zachowują parametry zapytania podczas przełączania wartości `tab`.
Zakładka Vision udostępnia włączanie, tryb, wybór modelu (w tym automatyczny
domyślny), prompting uwzględniający zadanie, zaawansowane limity timeoutu/obrazów/długości opisu/cache'a,
liczniki działania
i chronione żądanie przykładowe. Zakładka Audio również działa: udostępnia
włączanie, wybór modelu tylko STT z opcją Auto, limity timeoutu/maksymalnego klipu, liczniki audio
i test przykładowy `input_audio`. Zakładka Video jest funkcjonalna: raportuje
stan działania FFmpeg/ffprobe — jeden z czterech jawnych stanów UI (`unknown`, gdy
sonda jest w toku lub nie mogła się zakończyć, `restricted` na hoście dashboardu innym niż loopback,
gdzie sonda jest pomijana po stronie klienta, `unavailable` po sprawdzeniu
i potwierdzeniu braku albo `available` z wersjami FFmpeg/ffprobe) — zapisuje
limity włączenia/modelu/klatek/wideo/timeoutu, filtruje wybór modelu do modeli obsługujących wizję
i udostępnia liczniki video.

Dawna karta Vision Bridge w ustawieniach AI jest linkiem zgodności do
nowej strony; nie przechowuje już drugiej kopii formularza. Media Providers również
linkuje przepływy Image-to-Text i Speech-to-Text do odpowiednich zakładek Modality
Bridge bez usuwania istniejącego Speech-to-Text playground.

**Obejście admission w self-loop:** gdy wywołanie describe kieruje się przez własny
self-loop `/v1` OmniRoute (niestandardowy model dostawcy), podżądanie wysyła
`x-omniroute-admission-bypass: internal` i jest uwierzytelniane rozpoznanym
poświadczeniem self-loop — lokalnym sentinelem `sk_omniroute` w trybie lokalnym albo
skonfigurowanym przez operatora kluczem env `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` (#1350), aby
wdrożenia `REQUIRE_API_KEY=true` nadal mogły uruchamiać wywołanie describe. Obejście
jest honorowane tylko dla tych dokładnych poświadczeń, więc zewnętrzni klienci nie mogą użyć
nagłówka do pominięcia admission.

Domyślne wartości starszego formatu znajdują się w `src/shared/constants/visionBridgeDefaults.ts`;
nowe domyślne wartości trybu/task-aware/cache'a oraz resolver ustawień znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`. Guardrail udostępnia
opcję konstruktora `deps`, dzięki czemu testy mogą wstrzykiwać fałszywe implementacje `getSettings` i
`callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Przechwytuje żądania czatu zawierające audio, zanim dotrą do celu, o którym nie
wiadomo, że akceptuje wejście audio. Nigdy nie przekierowuje żądania czatu: części audio są
transkrybowane przez istniejący endpoint multipart zgodny z OpenAI, a
wybrany model czatu kontynuuje z transkryptami tekstowymi.

Przepływ:

1. Rozwiąż `supportsAudio` poprzez `getResolvedModelCapabilities()`. Jawne
   metadane rejestru dostawcy mają pierwszeństwo, następnie statyczne metadane
   modelu, a potem zsynchronizowane `modalities_input`. Zadeklarowana lista
   wejściowa bez `audio` to `false`; brak dowodów na możliwość pozostaje
   `null`. Zarówno `false`, jak i `null` aktywują konserwatywny bridge,
   podczas gdy `true` go omija.
2. Rozwiąż ustawienia `modalityBridgeAudio*` i wyodrębnij łączliwe części audio
   najwyższego poziomu z każdej wiadomości poprzez współdzielony detektor
   `detectMediaParts()`. Obsługiwane kształty transmisji to OpenAI `input_audio`,
   `audio_url` i `source.media_type: "audio/*"`. Zagnieżdżone audio jest
   wykrywane na potrzeby routingu, ale nie jest usuwane przez ścieżkę splotu.
   Praca jest ograniczona przez `modalityBridgeAudioMaxClips`; późniejsze części
   pozostają nietknięte.
3. Uszanuj skonfigurowany `provider/model` lub pozwól, aby
   `selectAudioBridgeModel()` przeszło przez `AUDIO_TRANSCRIPTION_PROVIDERS` w
   stabilnej kolejności katalogowej i wybrało pierwszy model z użytecznym
   aktywnym poświadczeniem dostawcy.
4. `callAudioTranscription()` konwertuje audio base64/data-URI na wieloczęściowy
   `file` lub pobiera zdalny `audio_url` poprzez publiczny strażnik ruchu
   wychodzącego z przypinaniem DNS i limitem 25 MB. Następnie wysyła POST z
   plikiem i wybranym modelem do lokalnej pętli własnej
   `/v1/audio/transcriptions`, uwierzytelnionej za pomocą
   `resolveSelfLoopBearer()`. Istniejąca trasa transkrypcji wykonuje normalne
   wyszukiwanie poświadczeń, obsługę cooldownu/limitu szybkości i wysyłkę do
   dostawcy.
5. Udane wywołania zastępują swoje części przez `[Audio N]: <transcript>`.
   Wywołania działają z `Promise.allSettled`: pojedyncza awaria zachowuje tę
   oryginalną część audio (kontrakt #4012). Jeśli każde wywołanie zawiedzie, a
   cel jest udowodniony jako `supportsAudio === false`, części stają się
   `[Audio N]: (unavailable — no STT provider connected)` (kontrakt #8430).
   Dla nieznanego celu (`null`), wynik całkowitej awarii pozostaje nietknięty.
   Udowodniony cel tylko tekstowy bez użytecznego poświadczenia STT otrzymuje
   ten sam jawny stub bez wysyłania wywołania sieciowego.

Udane transkrypcje korzystają z procesowego cache'u LRU/TTL Modality Bridge.
Klucz łączy odwołanie do audio, stabilną etykietę operacji
`audio-transcription` i wybrany model STT; awarie nigdy nie są buforowane.
Próby audio aktualizują współdzielone liczniki `bridged`, `cacheHits`,
`failures` i `lastUsedAt`. Przekształcone odpowiedzi niosą
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nietknięte żądania nie otrzymują segmentu Audio Bridge.

Ustawienia runtime są oparte na DB i walidowane przez Zod:

| Klucz                         | Domyślnie | Zakres          |
| ----------------------------- | --------- | --------------- |
| `modalityBridgeAudioEnabled`  | `true`    | —               |
| `modalityBridgeAudioModel`    | `""`      | Auto lub ID STT |
| `modalityBridgeAudioTimeout`  | `60000`   | 1000–300000     |
| `modalityBridgeAudioMaxClips` | `3`       | 1–10            |

Współdzielony cache pozostaje kontrolowany przez `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` i `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Przechwytuje części wideo najwyższego poziomu w `messages` Chat Completions i
`input` Responses API, zanim zostanie wywołany cel bez znanego natywnego
wsparcia wideo. Obsługiwane kształty to `input_video`, `video_url`,
`video_source`, adresy URL HTTPS i URI danych `data:video/*;base64,...`. Zwykłe
nazwy plików w tekście nie są traktowane jako wideo.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) odpowiada za przechodzenie
przez żądanie, sprawdzanie możliwości/polityki, agregację na poziomie żądania i
ładunek odpowiedzi. Praca na wideo — pozyskiwanie, cache całego wyniku,
opisywanie sekwencji klatek (które łączy zadeklarowaną przez wywołującego
transkrypcję audio) oraz metryki/abort/cleanup na próbę — jest ukryta za
`processVideoPart` w `videoBridgePipeline.ts`, wywoływanym raz na część wideo
wewnątrz pętli `preCall`. Ten moduł definiuje również jawne granice portów
`VideoMediaBrokerPort` (pozyskiwanie bajtów i wyodrębnianie próbkowanych
klatek), `VideoAudioTranscriptionPort` (łączenie zadeklarowanej przez
wywołującego transkrypcji audio z próbkowanymi podpisami) i `VideoDrilldownPort`
(granica trwałości drill-down klatek; jeszcze niepodłączona do
`processVideoPart` — dziś wpisy drill-down zapisuje tylko oddzielna trasa
`/api/modality-bridge/video/drilldown`).

Publiczna ścieżka żądania `/v1` nigdy nie importuje ani nie wywołuje
podprocesu. Zdalne wideo są pobierane z limitem 50 MiB; wbudowane wideo base64
mają konserwatywny limit 36 MiB zdekodowanych na wideo, aby koperta
model/messages/framing mogła pozostać w granicach limitu dopuszczania
publicznego żądania JSON wynoszącego 50 MiB. Szacunki długości wbudowanej i
rozmiaru zdekodowanego są sprawdzane przed alokacją. HTTPS jest wymagany na
początkowym zdalnym adresie URL i każdym przekierowaniu, przy użyciu
istniejącego publicznego strażnika ruchu wychodzącego z przypinaniem DNS.
Bajty następnie przekraczają dokładną wewnętrzną granicę brokera
`POST /api/modality-bridge/video/extract`. Ta trasa jest zarówno `LOCAL_ONLY`,
jak i `SPAWN_CAPABLE`, akceptuje tylko uwierzytelnione na poziomie procesu
żądanie z zaufanej pętli zwrotnej i nigdy nie akceptuje adresu URL, ścieżki
systemu plików, pliku wykonywalnego ani listy argumentów. Pipeline rozmiaru
treści API i przyrostowy czytnik treści handlera niezależnie egzekwują limit
wejścia brokera wynoszący 50 MiB. Jego ograniczona kolejka uruchamia jedną
ekstrakcję na raz, pozwala na cztery oczekujące zadania i ogranicza oczekujące
wejście do 100 MiB.

W brokerze `ffprobe` odczytuje prywatny plik lokalny; stała lista dozwolonych formatów wyklucza formaty playlist i manifestów. W przypadku dozwolonych kontenerów z rodziny MOV zewnętrzne odwołania do danych MOV pozostają domyślnie wyłączone, a stałe polecenie nie włącza ich. Zarówno `ffprobe`, jak i `ffmpeg` używają listy dozwolonych protokołów ograniczonej wyłącznie do `file`, jednego wątku, stałych tablic argumentów, nie korzystają z powłoki, a pliki wykonywalne są rozwiązywane na podstawie `PATH`. Strumienie okładek z dołączonym obrazem nie są kandydatami do odtwarzania. Wszystkie strumienie do odtwarzania muszą spełniać limity, a jawny strumień domyślny jest preferowany przed deterministycznym fallbackiem opartym na najniższym indeksie. Filmy są ograniczone do 600 sekund, 8 192 pikseli na wymiar i 33 554 432 pikseli źródłowych. FFmpeg pobiera od 1 do 16 klatek JPEG z punktów środkowych, skaluje dłuższą krawędź w dół do co najwyżej 1 024 pikseli, bez powiększania mniejszych danych wejściowych, i nigdy nie otrzymuje adresu URL. Domyślnie próbkowanie odbywa się według strategii `uniform`. Opcjonalna strategia `scene_aware` i eksperymentalna strategia `segment_aware` wykonują jeden dodatkowy stały przebieg FFmpeg na już zweryfikowanym lokalnym strumieniu, wybierają ograniczone znaczniki czasu scen z `showinfo` i deterministycznie wracają do tych samych równomiernych punktów środkowych w przypadku awarii detektora, przekroczenia terminu, nieprawidłowych danych wyjściowych lub pustego zbioru kandydatów. Tryb segment-aware przydziela próbki punktów środkowych proporcjonalnie do zweryfikowanych przedziałów scen; dowody i zachowanie fallbacku trybu segment-aware opisano poniżej. Twardy limit 16 klatek jest stosowany po dokonaniu wyboru w każdej strategii. Gdy żądanie scene-aware ma budżet tylko jednej klatki, używa ono równomiernego punktu środkowego aktywnego okna pełnego wideo lub okna fokusu i zgłasza `policyEffective: uniform`: pojedyncza wybrana klatka sceny nie może zachować obu końców czasowych. Wywołujący może opcjonalnie podać skończone okno fokusu (`start`/`end` w sekundach); granice są przycinane do czasu trwania multimediów, okna odwrócone lub nieskończone są odrzucane, a wszystkie strategie próbkowania są wykonywane wyłącznie wewnątrz znormalizowanego przedziału. Wynikowe okno jest uwzględniane w metadanych próbkowania oraz w niezaufanym prefiksie opisu, aby modele downstream mogły odróżnić wyodrębniony fragment od pełnej osi czasu.

Semantyczny fokus opisu to osobne, jawne ustawienie. Domyślny tryb analizy `full` zachowuje istniejący prompt klatki i nigdy nie przekazuje tekstu żądania do modelu opisu. W trybie `focused` bridge odczytuje wyłącznie najnowszy niepusty `text`/`input_text` pochodzący od użytkownika z tego samego kontenera Chat lub Responses, normalizuje go do NFC, redukuje znaki sterujące i białe znaki oraz ogranicza go do 500 punktów kodu Unicode. Pusty wynik powoduje powrót do dokładnego promptu `full`. Użyteczna wskazówka jest serializowana jako JSON w dedykowanym bloku niezaufanego kontekstu użytkownika i może wyłącznie priorytetyzować obserwowalne szczegóły; nie może nadpisywać osobnego ostrzeżenia przed podążaniem za instrukcjami widocznymi lub słyszalnymi w multimediach. Fokus tekstowy nigdy nie wnioskuje `start`/`end` ani nie zmienia próbnika czasowego.

#### Dowody strukturalne segmentów FU-07

`segment_aware` wykonuje jeden ograniczony przebieg wstępnej analizy na już zweryfikowanym lokalnym strumieniu wideo. Stały łańcuch filtrów najpierw skaluje obraz do co najwyżej 320 pikseli szerokości, wykrywa zmiany scen i przedziały zamrożenia, a następnie pobiera próbki z częstotliwością 1 klatki na sekundę pod kątem rozmycia, średniej luminancji oraz informacji przestrzenno-czasowych. Przebieg jest ograniczony do 600 próbek strukturalnych, jednego wątku FFmpeg/filtra, tych samych list dozwolonych protokołów ograniczonych wyłącznie do `file` i list dozwolonych kontenerów, limitu 1 MiB danych wyjściowych procesu oraz co najwyżej 30 sekund w ramach współdzielonego mechanizmu przerwania/terminu brokera. Nigdy nie przyjmuje polecenia, filtra, ścieżki ani adresu URL z żądania.

Wartości strukturalne są deterministycznymi dowodami próbkowania, a nie semantycznym rozumieniem wideo. Nie służą do wnioskowania o obiektach, działaniach, opisach, mowie ani intencjach użytkownika. Granice scen i zamrożeń tworzą segmenty; pokrycie zamrożenia, rozmycie, ekspozycja, szczegółowość przestrzenna i zmiana czasowa wpływają wyłącznie na sposób przydziału istniejącego budżetu 1–16 klatek. Całkowicie zamrożony segment jest ograniczony do jednej klatki, natomiast segmenty niezamrożone konkurują o pozostały budżet. Gdy granic jest więcej niż klatek, zachowywane jest równomierne pokrycie osi czasu, aby szybkie wczesne cięcia nie mogły ukryć długiego końcowego segmentu. Granice scen mieszczące się w 1-sekundowej rozdzielczości analizy od granicy zamrożenia są scalane.

Brakujące filtry, nieprawidłowe lub puste dowody, błąd detektora albo przekroczenie terminu ograniczonej wstępnej analizy powodują przejście w tryb fail-open do dokładnej jednolitej strategii punktów środkowych. Przerwanie przez wywołującego lub upływ terminu brokera nie powoduje fail-open: kończy aktywny podproces, uniemożliwia późniejsze wyodrębnianie klatek, a prywatne drzewo tymczasowe jest usuwane w `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generuje deterministyczne rzeczywiste fixture'y FFmpeg na potrzeby oszczędności wywołań opisu po deduplikacji, przydziału budżetu przy gęstym ruchu, dowodów rozmycia/ekspozycji/SI-TI, szybkich cięć z długim ogonem oraz fałszywych trafień przy stopniowym przenikaniu. Rejestruje czas rzeczywisty wstępnej analizy oraz, jeśli dostępne jest `/usr/bin/time`, CPU procesu potomnego i szczytowe RSS. Jego kontrole jakości są wyłącznie wyroczniami strukturalnymi. Rzeczywista jakość modelu opisu pozostaje na statusie `HOLD`, ponieważ ten harness nie ma autoryzowanego punktu końcowego ani zamrożonego sędziego. Oszczędności finansowe również pozostają na statusie `HOLD`, chyba że `--caption-cost-per-call-usd` dostarczy jawny dodatni szacunek kosztu na wywołanie; skrypt nigdy nie fabrykuje żadnego z tych wyników.

Każda klatka jest ograniczona do 4 MiB, wszystkie surowe klatki łącznie do 23 MiB, a zserializowana odpowiedź brokera do 32 MiB. Prywatny katalog tymczasowy jest usuwany w bloku `finally`. OmniRoute nie zawiera FFmpeg i nie akceptuje niestandardowej ścieżki do pliku wykonywalnego. Przed generowaniem podpisów most stosuje zachowawczy etap wizualnej deduplikacji: każdy obraz JPEG jest redukowany do bufora 16×16 w skali szarości i porównywany wyłącznie z ostatnią zachowaną klatką. Dla żądanego budżetu podpisów większego niż jedna klatka ekstrakcja dostarcza ograniczoną pulę kandydatów, obejmującą maksymalnie dwukrotność tego budżetu i nigdy więcej niż 16 klatek. Żądany limit jest stosowany dopiero po deduplikacji, przy czym podczas końcowego przerzedzania zachowywany jest pierwszy i ostatni wybrany kandydat, jeśli budżet wynosi co najmniej dwa. Wersjonowana polityka `grayscale-16x16-mean-cells-v2` wykorzystuje większą z dwóch wartości: średnią różnicę luminancji oraz stosunek komórek miniatury, których znormalizowana różnica wynosi co najmniej 0,05. Próg duplikatu jest stałą o wartości 0,04, wybraną ze względu na przewidywalność, a nie udostępnioną jako ustawienie czasu wykonywania. Ten dodatkowy sygnał o wysokim kontraście pozwala zachować drobny ruch i zmiany widocznego tekstu, które mogłyby zostać ukryte przy porównaniu opartym wyłącznie na średniej. Błędy komparatora lub dekodera powodują tryb otwartej awarii i zachowanie pokrycia. Metadane wyjściowe oddzielają wyodrębnionych kandydatów, pomyślnie wykorzystane klatki oraz odrzucone duplikaty wizualne.

Jawnie oznaczona część wideo może zażądać arkusza kontaktowego ze znacznikami czasu. Most tworzy siatkę JPEG z maksymalnie 4 kolumnami i 16 klatkami. W każdej komórce o rozmiarze 512 pikseli znacznik czasu źródła jest nanoszony na kontrastowy dolny pas, a te same znaczniki czasu pozostają w metadanych tekstowych na potrzeby dalszego kojarzenia i audytu. Kompletny obraz JPEG nadal podlega limitowi 32 MiB. Jeśli `sharp` nie może zdekodować lub skomponować siatki, most powraca do pojedynczych klatek JPEG; przerwanie przez klienta jest nadal propagowane przez operację tworzenia arkusza.

Dowody wymagane do wdrożenia są celowo oddzielone od syntetycznego mikrotestu wydajności kompozycji. `scripts/perf/video-bridge-contact-sheet-eval.ts` definiuje wersjonowany schematem zestaw testów A/B dla rzeczywistych modeli wizyjnych zgodnych z OpenAI. Mierzy on liczbę tokenów zgłaszaną przez dostawcę, całkowite opóźnienie mierzone zegarem czasu rzeczywistego (w tym komponowanie arkusza), liczbę wywołań modelu oraz zachowanie faktów zdefiniowanych w manifeście. Surowe odpowiedzi modelu nie są zapisywane w raporcie; zachowywane są wyłącznie skróty SHA-256 i identyfikatory dopasowanych faktów. Zestaw testów nie wykonuje żadnego wywołania sieciowego ani płatnego wywołania modelu, chyba że przekazano `--execute-real` oraz skonfigurowano `--model`, `OMNIROUTE_BASE_URL` i `OMNIROUTE_API_KEY`. Bez takiego jawnego rzeczywistego uruchomienia jego werdykt w formacie przeznaczonym do odczytu maszynowego pozostaje `HOLD`; same syntetyczne pomiary ładunku i liczby wywołań nie stanowią dowodu wymaganego do wdrożenia.

Wywołujący mogą dołączyć opcjonalną tablicę `transcript.cues` do obsługiwanej części wideo, jeśli już dysponują zsynchronizowanym tekstem. Każda wskazówka musi zawierać `text`, skończony przedział `start`/`end` mieszczący się w sprawdzonym czasie trwania oraz wartość `source` z listy dozwolonych wartości (`client`, `embedded` lub `audio-bridge`); `confidence` ma domyślną wartość `1` i musi pozostawać między `0` a `1`. Identyczne wskazówki są scalane. OmniRoute nigdy nie rozpoczyna transkrypcji na podstawie tych metadanych: zweryfikowane wskazówki są kopiowane do opisanego wyniku wraz ze źródłem, poziomem ufności i przedziałem oraz renderowane jako niezaufane obserwacje obok podpisów klatek. Tekst nieprawidłowy, spoza zakresu lub pozbawiony informacji o pochodzeniu jest odrzucany zamiast dołączania go do strumienia podpisów. Oba kanały transkrypcji w treści żądania normalizują podane pochodzenie do `client`, w tym samodzielnie zadeklarowane etykiety `embedded` lub `audio-bridge`. Tylko adapter kontrolowany przez serwer może przypisać te zaufane etykiety za pośrednictwem dostępnego wyłącznie w kodzie argumentu `trustedSource`; pole JSON żądania nie może dotrzeć do tego argumentu. Tekst transkrypcji pozostaje niezaufaną treścią pochodzącą z multimediów, niezależnie od jego pochodzenia, i nigdy nie może decydować o autoryzacji.

Zaawansowany klient wywołujący może udostępnić ścieżkę `audioTranscript` dla tego samego wideo; jest ona traktowana jako tekst dostarczony przez klienta, a nie jako dowód transkrypcji wykonanej przez serwer. Warstwa łączenia przetwarza obserwacje wizualne i dźwiękowe w ramach jednego terminu i sygnału przerwania, porządkuje je na wspólnej osi czasu, scala identyczne duplikaty i zwraca wynik częściowy, gdy powiedzie się tylko jedna ze stron. Nieprawidłowa wartość `audioTranscript` powoduje przejście do takiego wyniku częściowego — opis wizualny zostaje zachowany, a gałąź dźwiękowa rejestruje oczyszczony kod błędu — zamiast powodować niepowodzenie przetwarzania całego wideo. Dostępność poszczególnych gałęzi, flaga wyniku częściowego i oczyszczone kody błędów są zachowywane w opisanym wyniku, w metadanych mechanizmu zabezpieczającego (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), w metadanych pamięci podręcznej wyników oraz w licznikach łączenia mostu. Domyślna ścieżka Video Bridge nie wywołuje zamiany mowy na tekst ani nie pobiera drugiej kopii multimediów; bez jawnie podanej ścieżki pozostaje ograniczona wyłącznie do wideo.

**Przechowywanie transkrypcji (#12150 P1).** Ma ono zastosowanie automatycznie za każdym razem, gdy
Video Bridge (który sam wymaga jawnego włączenia) renderuje segment transkrypcji — nie istnieje osobna
flaga przechowywania. Gdy żądanie renderuje dowolny segment transkrypcji (zadeklarowany przez wywołującego
`transcript` lub scalony `audioTranscript`), mechanizm zabezpieczający oznacza je jako
`videoBridgeObserved` i tworzy zredagowaną kopię opisu wideo —
identycznie wyrenderowaną wersję, w której treść swobodnego tekstu każdego segmentu zostaje zastąpiona przez
`[redacted-video-transcript]`; jest ona tworzona przez podmianę pola ustrukturyzowanego segmentu
przed złożeniem ciągu znaków (nigdy przez analizowanie spłaszczonego tekstu, dzięki czemu żadna
treść segmentu — złośliwa ani zwykła, w tym treść zawierająca `]`, taka jak
`[inaudible]`/`[music]` — nie może się zachować). Utrwalona treść żądania w dzienniku wywołań zastępuje
każdą część tekstową pochodzącą z wideo tą zredagowaną kopią, dopasowaną na podstawie
równości treści; kotwica `fullText` jest ponownie odczytywana z ukończonego ładunku mechanizmu zabezpieczającego
sprzed wywołania, dzięki czemu dopasowanie nadal się udaje po tym, jak późniejsze mechanizmy zabezpieczające w łańcuchu (maskujące dane osobowe i
dane uwierzytelniające, o priorytetach 10/95) nadpiszą tekst opisu w miejscu, a także
po tym, jak wstrzyknięcie monitu systemowego/przekazania/pamięci zmieni strukturę tablicy wiadomości. Treść
wysyłana do modelu nadrzędnego pozostaje niezmieniona. Zaobserwowane żądanie nie wypełnia również
trwałej pamięci Memory (pomijane jest zarówno wyodrębnianie na podstawie żądania, jak i odpowiedzi),
więc odpowiedź samego modelu nie może skopiować tekstu transkrypcji do pamięci Memory.

**Surowe pola wideo (#12430).** Gdy most jest włączony, a natywna obsługa wideo jest nieznana lub niedostępna, zdefiniowane pola `transcript`/`audioTranscript` również aktywują `videoBridgeObserved`, nawet po nieudanym utworzeniu opisu lub przekroczeniu limitu `maxVideos`. Wartości `null` i puste ciągi znaków są uwzględniane; brakujące pola i metadane niezwiązane z wideo — nie. Zachowywane kopie redagują te pola lub pomijają żądanie, a pamięci podręczne/Memory są omijane.

Na tych ścieżkach awaryjnych prawidłowe segmenty dostarczone przez wywołującego stają się obsługiwanymi częściami `text`/`input_text`
zamiast niestandardowych pól dostawcy. Obie ścieżki dostarczone w żądaniu
pozostają niezaufanymi obserwacjami `client`, z wyraźnym ostrzeżeniem, że wideo
nie zostało opisane, a znaczniki czasu nie zostały zweryfikowane względem materiału. Istniejące
budżety 256 segmentów/64 KiB łącznie oraz budżety dla poszczególnych segmentów obowiązują łącznie dla obu ścieżek;
znaczniki czasu muszą mieścić się w limicie brokera wynoszącym 600 sekund oraz w każdym podanym
oknie zainteresowania. Nieprawidłowe ścieżki są odrzucane, a nie przekazywane jako dowolny tekst; prawidłowa
ścieżka równoległa może nadal zostać użyta, chyba że ich łączny budżet zostanie przekroczony. Pola o wartości null/puste
nie dodają tekstu. Ten mechanizm awaryjny nie dodaje pobierania multimediów ani transkrypcji.
Pola rozszerzeń transkrypcji są usuwane z awaryjnego nośnika wideo oraz jego
obiektów `video_url`/`source`. Lista dozwolonych elementów przesyłanych do OpenAI pozostaje restrykcyjna; nośniki wideo
o nieznanej obsłudze natywnej pozostają dostępne, a znane cele obsługujące wyłącznie tekst zachowują bezpieczne znaczniki.
Ustrukturyzowane, zredagowane kopie chronią dołączony tekst transkrypcji, podczas gdy
oryginalne żądanie należące do wywołującego pozostaje niezmienione. Cele z obsługą natywną i
wyłączone mosty zachowują dotychczasowe zachowanie polegające na pomijaniu tego mechanizmu.

Dodatkowe zachowywane kopie korzystają z tego samego sygnału zaobserwowanego żądania. Surowa
migawka żądania klienta sprzed zastosowania mechanizmu zabezpieczającego, oczekujące żądanie w pamięci oraz dziennik
wcześnie odrzuconego żądania strukturalnie zastępują pola transkrypcji w częściach wideo;
monity w postaci ciągów znaków syntetyzowane przez etapy potoku i przekazywanie kontekstu są redagowane
w ujściu utrwalającym treść żądania. Utrwalony znacznik `video_content_removed`
sprawia, że kontynuacja za pomocą `previous_response_id` zostaje bezpiecznie odrzucona zamiast rekonstruować
tekst, który został celowo usunięty. Jeśli zaobserwowane żądanie utraci swoją
zredagowaną kopię dla części przed rejestrowaniem albo choć jedna z kilku kopii wideo
nie zostanie dopasowana po późniejszych modyfikacjach żądania, zachowywana treść żądania jest
całkowicie pomijana zamiast przechowywać częściowo zredagowaną transkrypcję.

W przypadku zaobserwowanego żądania odpowiedź modelu może cytować dowolny fragment
transkrypcji bez ustrukturyzowanej granicy segmentu. Dlatego jej utrwalona wartość
`responseBody` w dzienniku wywołań jest zastępowana znacznikiem pominięcia; szczegółowy
artefakt potoku (który może zawierać treści po stronie nadrzędnej/klienta oraz fragmenty strumienia)
nie jest przechowywany. Pamięci podręczne semantyczne, idempotencji i odtwarzania rozumowania pomijają
odczyty i zapisy dla tego żądania. Żądanie do dostawcy i odpowiedź widoczna dla klienta
pozostają niezmienione. Wcześnie wysłane bajty podtrzymujące połączenie są usuwane z tymczasowego
bufora, gdy szczegółowy artefakt zostaje pominięty. Ostrzeżenie Kiro o nieprawidłowym EventStream
podaje wyłącznie liczbę bajtów ładunku, nigdy jego zawartość ani surowy błąd
parsera JSON.
Nie oznacza to, że skontrolowano wszystkie niepowiązane komunikaty diagnostyczne dostawców/wtyczek;
szerszy przegląd ujść przechowujących dane jest śledzony w #11658.

Wewnętrzny cykl życia `/api/modality-bridge/video/drilldown` stanowi osobny,
uwierzytelniany tokenem i dostępny przez interfejs pętli zwrotnej mechanizm pamięci podręcznej. Każda operacja wymaga również
kanonicznego, nieprzezroczystego identyfikatora podmiotu. Zanim wywołujący produkcyjny zostanie włączony, musi
wyprowadzić ten identyfikator z uwierzytelnionego dzierżawcy i nigdy nie może przekazywać
wartości wybranej przez klienta. Klucze pamięci podręcznej wiążą ten podmiot z kanonicznymi identyfikatorami sesji i
odwołania do wideo, przechowują wyłącznie ich klucze wyprowadzone przy użyciu SHA-256 oraz ograniczają zarówno odczyty,
jak i usuwanie do tego samego podmiotu. Pamięć podręczna przechowuje najwyżej 16 wygenerowanych klatek JPEG
na wpis, wygasza je po dziesięciu minutach i obsługuje ograniczone odczyty
`start`/`end` lub jawne usunięcie sesji.

Każdy podmiot jest ograniczony do 16 wpisów i 64 MiB kanonicznych danych JPEG. Limity te
są niezależne od globalnego pułapu 64 wpisów/256 MiB: presja limitu dla podmiotu
usuwa najpierw wyłącznie najdawniej używane wpisy tego podmiotu, zanim zostanie rozważone
globalne usuwanie zgodnie z LRU. Wygasłe wpisy są usuwane zarówno z rozliczenia podmiotu, jak i
globalnego podczas aktywności pamięci podręcznej, natomiast anulowanie i niepowodzenie walidacji nie
zatwierdzają częściowego zastąpienia.

Pamięć podręczna odrzuca niekanoniczny Base64, nadmiarowy padding, media inne niż JPEG, uszkodzone lub obcięte pliki JPEG oraz pliki JPEG, które generują ostrzeżenie podczas ograniczonego pełnoobrazowego dekodowania przez `sharp`. Każdy zaakceptowany obraz ponownie koduje jako kanoniczny JPEG, wyprowadza szerokość i wysokość ze zdekodowanych bajtów zamiast ufać polom wywołującego i odrzuca wszelkie końcowe bajty polyglot zamiast je zachowywać. Do obu limitów zaliczany jest wyłącznie ograniczony kanoniczny bufor skompresowany. Limit protokołu JSON obejmuje narzut Base64 dla pułapu 32 MiB zdekodowanego wejścia. Każda przechowywana derywacja zapisuje swój zweryfikowany format/rozdzielczość JPEG, politykę próbkowania, wersję derywacji, czas utworzenia, obliczony przez serwer hash treści oraz zahashowane odniesienie nadrzędne wraz z hashem treści nadrzędnej zaufanego wywołującego. Anulowanie jest sprawdzane między asynchronicznymi fazami dekodowania/hashowania przed atomowym zatwierdzeniem pamięci podręcznej.

Ta transza nie łączy jeszcze produkcyjnego producenta z trasą i nie zapewnia wyboru wariantów wielorozdzielczości. Przezroczysta ścieżka żądań Video Bridge nie powoduje zatem dodatkowej pracy, podczas gdy powiązane z dzierżawcą wyprowadzanie principal i pełny cykl życia wielorozdzielczości FU-08 pozostają wyraźnymi zadaniami następczymi, a nie udokumentowanym jako ukończone zachowaniem.

Klatki są opisane sekwencyjnie przy użyciu skonfigurowanego modelu Video. Puste nadpisanie Video dziedziczy ustawienie Vision; jeśli oba są puste, auto-router Vision wybiera efektywny model obsługujący vision. Udane podpisy zastępują oryginalną część stabilnym prefiksem `[Video description:`, który również oznacza tekst jako niezaufaną obserwację pochodzącą z mediów i informuje modele podrzędne, aby nie postępowały zgodnie z instrukcjami znalezionymi w mediach. Klucze pamięci podręcznej podpisów klatek obejmują bajty JPEG, prompt, znacznik czasu i efektywny model; tylko udane podpisy są buforowane. Wpisy pamięci podręcznej zachowują rzeczywisty model producenta, który odniósł sukces, w tym model zapasowy; most zgłasza `mixed`, gdy różne klatki zostały wyprodukowane przez różne modele. Trafienie w pamięci podręcznej ponownie wykorzystuje tożsamość tego producenta zamiast etykietować ją jako żądany plan routingu. Pamięć podręczna wyników całego wideo jest kluczowana na każdym wejściu, które zmienia wynik — prompt, efektywny model, polityka próbkowania, liczba klatek, tryb analizy semantycznej, odcisk SHA-256 znormalizowanej podpowiedzi fokusu, okno fokusu, `transcript`, `audioTranscript` i flaga arkusza kontaktowego — więc zmiana któregokolwiek z tych wymiarów jest chybieniem pamięci podręcznej, nigdy nieaktualnym ponownym użyciem. Wersja polityki deduplikacji wizualnej, próg i ograniczona liczba kandydatów-klatek są również jawnie określone w kluczu pamięci podręcznej wyników i metadanych; zmiana polityki nie może zatem ponownie wykorzystać nieaktualnego opisu całego wideo. Metadane pamięci podręcznej wyników w wersji 4 zachowują tryb i odcisk, nigdy surowe zadanie użytkownika. Metadane guardrail zgłaszają zarówno żądany, jak i efektywny tryb analizy; żądany tryb `focused` bez użytecznego tekstu użytkownika jest zgłaszany jako efektywnie `full`.

Guardrail wyodrębnia każdą obsługiwaną część wideo, ale opisuje nie więcej niż `modalityBridgeVideoMaxVideos`. Dla celu udowodnionego jako `supportsVideo === false`, nieudane i przekraczające limit filmy stają się jawnymi bezpiecznymi znacznikami tekstowymi, aby żadne surowe wideo nie przetrwało. Gdy możliwości są nieznane, te części zachowują swój nośnik wideo; każdy zapasowy transkrypt podlega ograniczonej konwersji tekstu powyżej. Cele z `supportsVideo === true` pomijają most. Sygnał przerwania żądania klienta propaguje się przez pobieranie, kolejkę brokera, podprocesy i wywołania podpisów; przerwania zatrzymują się między filmami i nigdy nie przechodzą w tryb fail-open do surowych mediów.

Ustawienia środowiska uruchomieniowego są oparte na bazie danych i walidowane przez Zod:

| Klucz                               | Domyślnie   | Zakres / zachowanie                                                                                           |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Opcjonalne ustawienie runtime, wymaga opt-in                                                                  |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` zachowuje ogólne podpisy; `focused` używa ograniczonego, niezaufanego kontekstu ostatniego użytkownika |
| `modalityBridgeVideoModel`          | `""`        | Dziedziczy model Vision Bridge                                                                                |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                          |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` lub proporcjonalne `segment_aware`; awaria detektora powoduje powrót do `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                           |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                |

Starsze utrwalone wartości limitu czasu Video powyżej 120 sekund są przycinane do terminu brokera; nowe zapisy ustawień powyżej tego limitu są odrzucane. `GET /api/modality-bridge/video/runtime` wymaga zaufanej ostemplowanej lokalności loopback przed uwierzytelnieniem lub sondowaniem środowiska uruchomieniowego, a następnie wymaga uwierzytelnienia zarządzania. Zwraca tylko `available`, oczyszczone wersje FFmpeg/ffprobe i stały powód, gdy środowisko uruchomieniowe jest niedostępne. Wewnętrzny punkt końcowy ekstrakcji nie jest publicznym API przesyłania: nasycenie kolejki zwraca `503` plus `Retry-After`, rozłączenie wywołującego zwraca `499`, a stały termin brokera zwraca `504`. Przekonwertowane odpowiedzi dodają `video->text;model=<visionModel>;parts=<videos>` do centralnego nagłówka `x-omniroute-modality-bridge` bez usuwania segmentów Vision lub Audio.

### Masker PII (`piiMasker.ts`)

Działa na **obu** etapach.

- **`preCall`** klonuje payload, przechodzi przez `system`, `messages`, `input` i
  `prompt` (w tym elementy będące zwykłymi ciągami znaków) oraz stosuje `processPII()` (z
  `@/shared/utils/inputSanitizer`) do pól `content`/`text` będących ciągami znaków. Gdy
  `PII_REDACTION_ENABLED=true`, wykryte PII są redagowane w wychodzącym
  payloadzie. Jest to niezależne od `INPUT_SANITIZER_MODE` (który kontroluje
  wyłącznie politykę wstrzykiwania promptów). Gdy redagowanie jest wyłączone, wywołanie rejestruje
  liczby wykryć bez modyfikowania treści.
- **`postCall`** wykonuje głębokie klonowanie odpowiedzi, uruchamia `sanitizePIIResponse()` oraz
  masker kształtu Responses API (`maskResponsesOutput` — obejmuje
  `output_text` i `output[].content[].text`). Jeśli wystąpi jakiekolwiek redagowanie,
  zmodyfikowana odpowiedź zastępuje oryginał.

Mechanizm ochronny nigdy nie blokuje; jedynie dodaje adnotacje (`meta.detections`,
`meta.redacted`) lub przepisuje treść.

#### Wybór według typów, wzorce niestandardowe i liczniki wykryć

**Dashboard → Settings → Security → PII masking** wybiera, _co_ jest maskowane. Nie
włącza maskowania: odpowiadają za to nadal `PII_REDACTION_ENABLED` (żądanie) i
`PII_RESPONSE_SANITIZATION` (odpowiedź + SSE), oba domyślnie wyłączone.

- **Wybór według typów** — wbudowane identyfikatory są wymienione w
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Brak ustawienia oznacza każdy
  typ (zachowanie sprzed wprowadzenia tego ustawienia). Wzorzec `ssn_us` w silniku
  żądań mapuje się na `ssn`. Szablony (Minimal, Standard, Financial,
  Brazilian, USA, Full) jedynie wypełniają pola wyboru w interfejsie.
- **Wzorce niestandardowe** — do 20 wzorców regex lub wildcard (`*` = do 64
  znaków niebędących białymi znakami, `?` = jeden znak). Dopasowania stają się `[CUSTOM_REDACTED]`.
  Każdy wzorzec przechodzi przez `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): maksymalnie 500 znaków, flagi ograniczone
  do `g i m s u`, musi się skompilować, musi przejść `safe-regex` (katastrofalny
  backtracking) i nie może pasować do pustego ciągu ani symbolu zastępczego redagowania.
  Wzorzec, który nie przejdzie walidacji, jest odrzucany przy zapisie i podczas testowania, a zapisany wiersz,
  który nie przechodzi walidacji, jest pomijany w czasie działania zamiast być kompilowany. Wzorce niestandardowe są
  uruchamiane tylko wtedy, gdy maskowanie jest włączone.
- **Liczniki wykryć** — liczby według typu (nigdy dopasowane wartości), przechowywane w
  pamięci i resetowane przy ponownym uruchomieniu (`src/lib/pii/piiDetectionStats.ts`). Zwiększają się tylko
  wtedy, gdy maskowanie jest włączone.

Ustawienia są przechowywane w tabeli `key_value` (przestrzeń nazw `pii_settings`,
`src/lib/db/piiSettings.ts`) i odczytywane przez 1-sekundowy cache. API:

| Metoda | Ścieżka                  | Cel                                                                                                |
| ------ | ------------------------ | -------------------------------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stan flagi, `enabledTypes`, `customPatterns`, liczniki wykryć                                      |
| `PUT`  | `/api/settings/pii`      | Zastąp `enabledTypes` (`null` = wszystkie) i/lub `customPatterns`                                  |
| `POST` | `/api/settings/pii/test` | Próbne uruchomienie jednego wzorca na próbce o rozmiarze maksymalnie 8 KB; nic nie jest zapisywane |

Wszystkie trzy wymagają uwierzytelnienia zarządzania i walidują treść żądania za pomocą Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Wstrzykiwanie promptów (`promptInjection.ts`)

Wykrywa wrogie struktury w treści dostarczonej przez użytkownika i egzekwuje
skonfigurowaną politykę. Zachowanie jest sterowane przez zmienne środowiskowe i opcje
konstruktora:

| Ustawienie      | Zmienna środowiskowa                                                                                 | Domyślnie | Efekt                                                                                                                                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Włączone        | `INPUT_SANITIZER_ENABLED`                                                                            | `true`    | Gdy `false`, mechanizm ochronny pomija dalsze przetwarzanie.                                                                                                                                                                   |
| Tryb            | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                      | `warn`    | Polityka wstrzykiwania: `block`, `warn` lub `log`. (`redact` jest akceptowane dla zgodności wstecznej, ale **nie** usuwa tekstu wstrzyknięcia; przepisywanie PII w żądaniach jest kontrolowane przez `PII_REDACTION_ENABLED`.) |
| Próg blokowania | opcja `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`    | Minimalny poziom istotności wymagany do zablokowania. Poziom średni domyślnie służy tylko do obserwacji.                                                                                                                       |

**Pierwszeństwo trybu** (`getMode`): `options.mode` wywołującego →
`INJECTION_GUARD_MODE` — **nadpisanie flagi funkcji w bazie danych** (Dashboard → Settings →
Feature Flags) → zmienna środowiskowa `INJECTION_GUARD_MODE` → zmienna środowiskowa `INPUT_SANITIZER_MODE` →
`warn`. Nadpisanie z dashboardu wygrywa zatem ze zmiennymi środowiskowymi, więc interfejs Feature
Flags steruje działającym mechanizmem ochronnym na żywo (bez restartu). Odczyt z bazy danych jest bezpieczny w razie awarii:
jeśli wystąpi błąd, mechanizm ochronny wraca do zachowania opartego na zmiennych środowiskowych, a gdy nie
ustawiono nadpisania, zachowanie jest identyczne jak przy rozstrzyganiu wyłącznie na podstawie zmiennych środowiskowych.

Źródła wykrywania:

1. `sanitizeRequest()` z `@/shared/utils/inputSanitizer` (wspólny zestaw detektorów
   używany w innych miejscach potoku).
2. Wbudowane `DEFAULT_GUARD_PATTERNS` (obecnie `system_override_inline` i
   `markdown_system_block`, oba o istotności `high`).
3. Opcjonalne `customPatterns` przekazywane przez opcje konstruktora (ciągi znaków, regex
   lub rekordy `{ name, pattern, severity }`).

When `mode === "block"` **i** co najmniej jedno wykrycie spełnia próg istotności, `preCall` zwraca `{ block: true, message: "Request rejected: suspicious content detected" }`. W trybach `warn`/`log` mechanizm ochronny loguje, ale zezwala na wywołanie. Wspólny helper `evaluatePromptInjection()` jest również eksportowany dla wywołujących, którzy muszą ocenić prompty bez przechodzenia przez rejestr.

**Granica skanowania (v3.8.20):** detektor sprawdza tylko **pierwsze 16 KB** połączonego tekstu promptu — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtów) w `src/shared/utils/inputSanitizer.ts`. Zarówno `detectInjection()`, jak i `evaluatePromptInjection()` wykonują `slice(0, MAX_INJECTION_SCAN_BYTES)` przed uruchomieniem pętli wzorców. Dyrektywy wstrzyknięcia znajdują się blisko początku danych wejściowych, więc ogranicza to obciążenie CPU/GC wyrażeń regularnych w przypadku ładunków o rozmiarze wielu setek KB bez osłabiania wykrywania (por. #3932, #4041).

### Masker poświadczeń (`credentialMasker.ts`)

Działa w **obu** etapach, jako ostatni w domyślnym łańcuchu (priorytet `95`). Redaguje znane wzorce kluczy API / tokenów sekretnych w wychodzącym ładunku (treść wiadomości, argumenty wywołań narzędzi, wyniki narzędzi) **oraz** w odpowiedzi dostawcy, dzięki czemu poświadczenie wklejone do promptu (lub zwrócone w wyniku narzędzia) nie wycieka do dostawcy nadrzędnego ani z powrotem do klienta.

- **Tylko po włączeniu (opt-in)**, zgodnie z tą samą konwencją co redakcja PII (w sąsiedztwie Hard Rule #20): wyłączone, chyba że `settings.credentialRedactionEnabled === true` **lub** `CREDENTIAL_REDACTION_ENABLED=true`. Gdy jest wyłączone, mechanizm ochronny nic nie robi — nigdy nie blokuje i nigdy nie przepisuje.
- `redactCredentials()` przechodzi przez całe drzewo ładunku/odpowiedzi (`walkValue()`, odporne na zanieczyszczenie prototypów, bezpieczne w cyklach dzięki `WeakSet`) i zastępuje dopasowania symbolem zastępczym `[REDACTED:<type>]`, klonując tylko gałęzie, które faktycznie uległy zmianie.
- `CREDENTIAL_PATTERNS` obejmuje klucze dostawców LLM (OpenAI, OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), tokeny VCS/SaaS (GitHub, Slack, Linear, Notion, npm, Postman, Discord), klucze płatności (Stripe, Square), klucze chmurowe (klucz dostępu AWS, Twilio, SendGrid, Mailgun), klucze prywatne / tokeny JWT, ciągi połączeń zawierające poświadczenia (`mongodb://user:pass@...` itd.) oraz ogólny wzorzec wartości nagłówka `Authorization`/`x-api-key`/`api-key`/`apikey`. Klucze w kształcie nagłówków (`authorization`, `x-api-key`, `api-key`, `apikey`) są redagowane strukturalnie (tylko wartość, z zachowaniem prefiksu schematu, np. `Bearer `/`Basic `), a nie przez ogólny regex tekstowy.
- Mechanizm ochronny nigdy nie blokuje; jedynie przepisuje (`modifiedPayload` / `modifiedResponse`) i dodaje adnotacje (`meta.credentialsRedacted`, `meta.count`).

Test regresyjny: `tests/unit/credential-masker-guardrail.test.ts`.

## Kontrakt bazowy (`base.ts`)

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
  block?: boolean; // true powoduje przerwanie łańcucha
  message?: string; // zwracany przy blokowaniu
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // zwracany przez preCall w celu przepisania żądania
  modifiedResponse?: TValue; // zwracany przez postCall w celu przepisania odpowiedzi
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

Guardrail sygnalizuje „brak zmian”, zwracając `void`, `{}` lub
`{ block: false }`. Zwrócenie `modifiedPayload`/`modifiedResponse` zastępuje
wartość przepływającą przez łańcuch dla kolejnych guardrailów.
`signal?: AbortSignal` przenosi cykl życia wywołującego do guardrailów. Przerwanie żądania jest celowym wyjątkiem fail-open: mosty multimedialne zatrzymują pracę i sprzątają bez przywracania surowych mediów do celu, o którym wiadomo, że ich nie obsługuje.

## Rejestr (`registry.ts`)

Singleton `guardrailRegistry` udostępnia:

- `register(guardrail)` — dodaje (lub zastępuje po znormalizowanej nazwie) guardrail i
  ponownie sortuje według rosnącego `priority`.
- `clear()` / `list()` — pomocnicze funkcje administracyjne.
- `runPreCallHooks(payload, context)` — iteruje po aktywnych guardrailach, przewodzi
  payload przez `modifiedPayload` i zatrzymuje się na pierwszym `block: true`.
- `runPostCallHooks(response, context)` — ten sam przepływ po stronie odpowiedzi.
- `resetGuardrailsForTests({ registerDefaults })` — czyści stan i opcjonalnie
  ponownie rejestruje wartości domyślne w celu czystej izolacji testów.

Oba runnery zwracają `{ blocked, payload|response, results, guardrail?, message? }`,
gdzie `results` to tablica rekordów `GuardrailExecutionResult`, które zawierają
pola `blocked`, `skipped`, `modified`, `error` i `meta` dla każdego guardraila,
przydatne do śledzenia.

### Wyłączanie guardrailów dla pojedynczego żądania

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agreguje
zdeduplikowaną listę nazw guardrailów, które należy pominąć dla bieżącego
żądania. Istnieje pięć kanałów, odczytywanych w tej kolejności i scalanych w jedną listę
(pierwsze wystąpienie wygrywa przy deduplikacji):

1. `apiKeyInfo.disabledGuardrails`
2. Pole `disabledGuardrails` w treści żądania (na najwyższym poziomie)
3. Pole `metadata.disabledGuardrails` w treści żądania (tylko gdy `metadata` jest obiektem)
4. Nagłówek `x-omniroute-disabled-guardrails`
5. Starszy nagłówek `x-disabled-guardrails`

Wszystkie pięć kanałów jest scalanych, w tym oba nagłówki: wysłanie zarówno
`x-omniroute-disabled-guardrails`, jak i `x-disabled-guardrails` pomija sumę
ich list, a pusty nowoczesny nagłówek nie ukrywa już starszego
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), poprawione w
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Wartościami mogą być tablice ciągów znaków lub ciąg rozdzielony przecinkami; nazwy są przycinane
i normalizowane do lowercase kebab-case (`pii_masker` → `pii-masker`), a puste
wpisy są usuwane. Wynik jest przekazywany przez `context.disabledGuardrails`
do rejestru, który pomija pasujące guardraile (`skipped: true` w `results`).

Lista wyłączeń dotyczy wyłącznie **rejestru**. Tryb `block` dla wstrzykiwania promptów jest
obowiązkową granicą: middleware guarda wstrzykiwania
(`src/middleware/promptInjectionGuard.ts`) wywołuje `evaluatePromptInjection()`
bez żadnej kontrolowanej przez wywołującego listy wyłączeń (martwe
wywołanie `resolveDisabledGuardrails({ body })`, które wykonywał, zostało usunięte w
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), więc żądanie,
które wyłącza `prompt-injection`, nadal jest odrzucane w trybie `block`. Jest to
zamierzone. Kanały wyłączania są kontrolowane przez wywołującego (treść żądania,
metadane, nagłówki), a wywołujący nie może wyłączyć mechanizmu
zabezpieczającego ustawionego przez operatora
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Suma nagłówków
z [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
zmienia jedynie to, które guardraile rejestru są pomijane; nie pozwala klientowi
obejść middleware. Obowiązkowe polityki guardrailów dla klucza i dla grupy są
śledzone w RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Zobacz [Pokrycie i ograniczenia](#coverage-and-limits).

## Kolejność wykonywania

Dla każdego żądania przepływającego przez `src/sse/handlers/chat.ts` oraz
`open-sse/handlers/chatCore.ts` (trasy z rodziny czatu wymienione w sekcji
[Zakres i ograniczenia](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` tworzy listę pomijanych zabezpieczeń na podstawie klucza API, treści żądania
   oraz nagłówków.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` uruchamia zabezpieczenia w kolejności rosnącego
   priorytetu:
   - Wyłączone zabezpieczenia są rejestrowane jako `skipped`.
   - Metoda `preCall` każdego zabezpieczenia może zmodyfikować dane wejściowe za pomocą `modifiedPayload`.
   - Pierwsze wystąpienie `block: true` przerywa łańcuch, a procedura obsługi zwraca
     odpowiedź informującą o odrzuceniu przez zabezpieczenie.
3. Potencjalnie zmodyfikowane dane wejściowe trafiają do routingu łączonego i są
   przekazywane do usługi nadrzędnej.
4. **Tylko bez strumieniowania:** po złożeniu odpowiedzi
   `guardrailRegistry.runPostCallHooks(...)` uruchamia ten sam łańcuch dla
   odpowiedzi. Wystąpienie `block: true` na tym etapie odrzuca odpowiedź usługi nadrzędnej i zwraca HTTP 400. Odpowiedzi strumieniowane całkowicie pomijają ten krok.

Zabezpieczenia zgłaszające wyjątki są rejestrowane z wartością `error: <message>` i zapisywane w dzienniku za pomocą
`logger.warn`, ale łańcuch jest kontynuowany — zgodnie z założeniem „fail-open”.

## Zakres i ograniczenia

Rejestr zabezpieczeń jest podłączony wyłącznie do potoku czatu. Ograniczenia te są
utrwalone w testach `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` oraz
`tests/unit/guardrail-pipeline-characterization.test.ts`; w przypadku zmiany zachowania
należy świadomie zaktualizować te testy.

### Gdzie uruchamiane są punkty zaczepienia

| Punkt zaczepienia / mechanizm kontrolny                                | Miejsce uruchomienia                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                                      | Żądania obsługiwane przez `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (oraz `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*` oraz serwer proxy czatu Telegram. Także testowy punkt końcowy panelu `/api/guardrails/test`. Blokada przed wywołaniem zwraca HTTP 400. |
| `runPostCallHooks`                                                     | Tylko odpowiedzi czatu **bez strumieniowania** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Odpowiedzi strumieniowane nigdy do niego nie docierają.                                                                                                                                                                                                                                                                                    |
| Strumieniowe przetwarzanie danych PII                                  | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), dołączany do potoku w `streamingPipeline.ts`, gdy włączona jest opcja `PII_RESPONSE_SANITIZATION`. Nie jest to zabezpieczenie, dlatego mechanizmy wyłączania nie mają na niego wpływu.                                                                                                                                                                                              |
| Oprogramowanie pośredniczące chroniące przed wstrzyknięciami (starsze) | Każda trasa `/v1` zawierająca prompt, w tym trasy z rodziny czatu (zobacz [zakres tras](#injection-guard-route-coverage--red-team-phase-8--block-d)). Tylko wstrzyknięcia promptów.                                                                                                                                                                                                                                                               |

### Czego zakres nie obejmuje

- **Trasy multimediów, osadzania i danych** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nigdy nie docierają do rejestru. Nie jest
  tam wykonywane maskowanie danych PII, maskowanie danych uwierzytelniających ani mostkowanie modalności. Ich jedynym
  zabezpieczeniem jest starsze oprogramowanie pośredniczące chroniące przed wstrzyknięciami.
- **Odpowiedzi strumieniowane** nie korzystają z zabezpieczeń po wywołaniu: nie są stosowane
  zabezpieczenia `pii-masker` ani `credential-masker` po wywołaniu i nie występuje blokada po wywołaniu. Stosowane jest tylko strumieniowe
  przekształcanie danych PII (gdy włączona jest opcja `PII_RESPONSE_SANITIZATION`). Dane uwierzytelniające
  zwrócone w odpowiedzi strumieniowanej nie są redagowane.
- **Mechanizmy wyłączania a oprogramowanie pośredniczące (zgodnie z założeniem):** oprogramowanie pośredniczące ocenia
  wstrzyknięcia promptów przy użyciu własnego wywołania `evaluatePromptInjection()`, bez
  przekazywania jakiejkolwiek listy wyłączeń kontrolowanej przez wywołującego. Tryb `block` stanowi obowiązkową
  granicę, której nie można ominąć za pomocą wyłączeń kontrolowanych przez wywołującego, także w trasach z rodziny czatu
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Wyłączenie
  `prompt-injection` powoduje pominięcie jedynie zabezpieczenia z rejestru.

### Co ma dostęp do odpowiedzi przed etapem po wywołaniu

W ścieżce bez strumieniowania kolejność jest następująca: wyodrębnianie pamięci → wykonywanie wbudowanych narzędzi → zabezpieczenia po wywołaniu → zakończenie wskutek blokady po wywołaniu → zapis w pamięci podręcznej semantycznej.

- **Ekstrakcja pamięci** i **wykonywanie narzędzi** widzą odpowiedź, zanim
  guardrails po wywołaniu zdążą ją przepisać lub zablokować. Od wersji
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) ekstrakcja
  pamięci przepuszcza wyodrębniony tekst przez `sanitizePII`, gdy
  `PII_RESPONSE_SANITIZATION` jest włączone (zarówno w trybie strumieniowym, jak i niestrumieniowym), ale
  odpowiedź, którą późniejszy etap po wywołaniu blokuje, i tak została już udostępniona pamięci i
  narzędziom.
- **Pamięć podręczna semantyczna** przechowuje odpowiedź po etapie po wywołaniu, więc przechowuje
  przepisaną odpowiedź, a zablokowana odpowiedź nigdy nie trafia do pamięci podręcznej. Wpisy w pamięci podręcznej są
  kluczowane według klucza API.

## Konfiguracja

Zmienne środowiskowe odczytywane przez wbudowane guardrails:

| Zmienna                               | Używane przez             | Działanie                                                                                                                      |
| ------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Ustaw `false`, aby całkowicie wyłączyć wykrywanie.                                                                             |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Polityka wobec wstrzyknięć: `warn`, `block` lub `log`. Starsza wartość `redact` nie przepisuje tekstu wstrzyknięcia.           |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Tryb strażnika wstrzyknięć; jest to również flaga funkcji w bazie danych, która **nadpisuje** zmienne środowiskowe (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Minimalny poziom istotności odrzucany przez `MODE=block`: `high` (domyślnie), `medium` lub `low`.                              |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starszy alias dla `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                           |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Gdy `true`, dane PII w żądaniu są redagowane (niezależnie od trybu wstrzyknięć).                                               |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Kontroluje zachowanie maskera po stronie odpowiedzi.                                                                           |

Guardrails Modality Bridge odczytują konfigurację czasu wykonania z opartego na bazie danych magazynu ustawień
(`getSettings()`), a nie ze zmiennych środowiskowych. Klucze podstawowe Vision to
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` oraz
`modalityBridgeCacheMaxEntries`. Starsze klucze
`visionBridge*` są akceptowane wyłącznie jako udokumentowany fallback odczytu
na jeden cykl; zapisy z pulpitu nawigacyjnego używają kluczy podstawowych.
Wartości domyślne i resolver fallbacku znajdują się w
`src/shared/constants/modalityBridgeDefaults.ts`, a starsze
stałe zachowano w `src/shared/constants/visionBridgeDefaults.ts`.

Audio używa `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` i `modalityBridgeAudioMaxClips` oraz współdzielonych
ustawień `modalityBridgeCache*`. Audio nie ma fallbacku na starsze klucze, ponieważ
te klucze zostały wprowadzone wraz ze schematem Modality Bridge.

Wideo używa `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` i
`modalityBridgeVideoTimeout` oraz współdzielonych ustawień `modalityBridgeCache*`.
Jest domyślnie wyłączone, ponieważ FFmpeg/ffprobe są opcjonalnymi zależnościami
operacyjnymi, a opisywanie klatek dodaje opóźnienie i koszt modelu.

## Niestandardowe guardraile

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

Kroki:

1. Utwórz `src/lib/guardrails/myGuardrail.ts` rozszerzający `BaseGuardrail`.
2. Zaimplementuj `preCall` i/lub `postCall`.
3. Albo zarejestruj w momencie importu (push z `registerDefaultGuardrails`), albo
   wywołaj `guardrailRegistry.register(...)` w czasie działania — rejestr zastępuje
   każdy wcześniejszy guardrail o tej samej znormalizowanej nazwie.
4. Dodaj testy w `tests/unit/` (istniejące przykłady:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testowanie

Używaj `resetGuardrailsForTests()` między testami, aby zacząć od znanego stanu.
Przekaż `{ registerDefaults: false }`, aby zacząć z pustym rejestrem i
zarejestrować tylko te guardraile, które są testowane. Vision Bridge akceptuje
wstrzykiwanie zależności (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge udostępnia
równoważne punkty zaczepienia dla ustawień, możliwości, wyboru modelu STT, sprawdzania
poświadczeń i transkrypcji. Testy mogą zatem ćwiczyć oba przepływy bez dostępu do bazy
danych ani sieci.

## Zobacz także

- `src/lib/guardrails/` — implementacja
- `src/shared/utils/inputSanitizer.ts` — wspólny detektor, który obsługuje
  maskowanie prompt injection i PII
- `src/shared/constants/visionBridgeDefaults.ts` — wartości domyślne Vision Bridge i
  lista modeli wymuszanych przez bridge
- `src/shared/constants/modalityBridgeDefaults.ts` — wspólne wartości domyślne środowiska uruchomieniowego Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — warstwa ortogonalna (circuit breaker, cooldowny)
- `docs/reference/ENVIRONMENT.md` — pełne odniesienie do zmiennych środowiskowych

## Pokrycie tras przez injection-guard i red-team (Faza 8 · Blok D)

Injection-guard (`createInjectionGuard` / `withInjectionGuard`) obejmuje wszystkie trasy
przyjmujące prompty użytkownika. Respektuje `INJECTION_GUARD_MODE` (domyślnie `warn` = tylko logowanie;
`block` = zwraca HTTP 400 `SECURITY_001`).

| Typ                | Trasy                                                                                                                                                | Tryb domyślny |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| Tekst (istniejący) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn          |
| Generatywny        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn          |
| Dane               | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn          |

Ekstrakcja tekstu (`extractMessageContents`) obejmuje `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (nocny, `nightly-llm-security.yml`):** promptfoo weryfikuje, że każda trasa blokuje
korpus OWASP-LLM w `INJECTION_GUARD_MODE=block`; garak uruchamia sondy (pomijane bez sekretu).
`moderations` jest uwzględnione dla spójności. Tryb block jest obowiązkową granicą: `evaluatePromptInjection()`
ignoruje listę wyłączeń dla pojedynczego żądania przekazaną przez middleware, więc `disabledGuardrails` **nie**
zwalnia trasy z tego trybu ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Nocny workflow (`.github/workflows/nightly-llm-security.yml`, cron + ręczne
uruchomienie) ma dwa zadania:

- **`promptfoo-guard` (blokujące)** — uruchamia `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Każdy przypadek adwersarialny (np. „ignore all
  previous instructions…”, jailbreaki w stylu DAN) weryfikuje, że odpowiedź zawiera
  `error.code === "SECURITY_001"`, tj. że guard faktycznie odrzucił żądanie.
- **`garak` (doradcze)** — uruchamia garak `--probes promptinject,dan,leakreplay`
  przeciwko lokalnej instancji OmniRoute (`http://localhost:20128/v1`). Warunkowane
  sekretem providera (`PROMPTFOO_PROVIDER_KEY`); pomijane w sposób kontrolowany i zakończone
  sufiksem `|| true`, więc raportuje bez powodowania błędu CI.

Pokrycie helpera guarda (`createInjectionGuard` / `withInjectionGuard`)
obejmuje każdą trasę `/v1` niosącą prompt; tekst promptu jest pobierany z
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` przez
`extractMessageContents()` w `src/shared/utils/inputSanitizer.ts`.
