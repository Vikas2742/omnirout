# Guardrails (Slovenščina)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Vir resnice:** `src/lib/guardrails/`
> **Nazadnje posodobljeno:** 2026-10-17 — v3.8.52 (dodano [Pokritost in omejitve](#coverage-and-limits):
> katere poti in odzivne poti dosežejo hooki, združene glave za onemogočanje (#16412), način
> blokiranja vbrizgavanja kot obvezna meja (#16413) in kaj vidi odgovor pred klicem po izvedbi)

Guardraili uveljavljajo varnost, politike in preoblikovanje vsebine na meji med OmniRoute in
izvornimi ponudniki. Vsak guardrail lahko pregleda (in po želji zavrne, preoblikuje ali opremi
z opombami) koristne obremenitve zahtev (`preCall`) in odgovore izvornih ponudnikov (`postCall`).

Sistem deluje po načelu **fail-open**: če guardrail med izvajanjem sproži izjemo, registr
zabeleži napako in nadaljuje z naslednjim guardrailom, namesto da bi zahtevek propadel. Blokiranje
je izrecna odločitev (`block: true`), nikoli naključje. Edina izjema je prekinjen zahtevek: ko je
klicateljev `signal` prekinjen, guardrail, ki sproži izjemo, zavrne izvajanje hooka, namesto da bi
bil preskočen.

Hooki se **ne** izvajajo na vsaki poti ali pri vsakem odgovoru. Preden se zanesete na guardrail
kot varnostni mehanizem, preberite [Pokritost in omejitve](#coverage-and-limits).

## Vgrajeni guardraili

Registr ob uvozu samodejno naloži šest guardrailov v vrstnem redu prioritete
(glejte `registry.ts` → `registerDefaultGuardrails()`):

| Prioriteta | Ime                 | Faza/e         | Datoteka              |
| ---------- | ------------------- | -------------- | --------------------- |
| `5`        | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`        | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`        | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`       | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`       | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`       | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Nižje številke prioritete se izvedejo **prve**.

### Vision Bridge (`visionBridge.ts`) — Modality Bridge PR-1

Osnovni model GLM 5.3 in `glm-5.3-{low,high,max}` imata v registru/specifikaciji izrecno
metapodatek `supportsVision:false`. Različice GLM 5.3 Flash ostajajo modeli z vgrajeno vizijo.
Pot `/v1/messages` v Claude Code vstopi v skupno verigo guardrailov pred klicem `handleChat`
**pred** prevajanjem Claude→OpenAI; slike, ugnezdene v rezultatih orodja `Read`, morajo biti
opisane ali obravnavane, preden jih ta prevod dvigne v vsebino OpenAI `image_url` (#17069).

Prestreže zahteve s slikami, namenjene **modelom brez vizije**, in bodisi preusmeri celotno
zahtevo na model z zmožnostjo vizije bodisi pred klicem izvornega ponudnika zamenja dele slik
z besedilnimi opisi, ki jih ustvari konfigurabilni vizijski model. To ponudnikom, ki podpirajo
le besedilo, omogoča pregledno obravnavo multimodalnih koristnih obremenitev.

Potek:

1. Preskoči, če ciljni model že podpira vizijo (razen če je naveden na seznamu prisilnega
   mostu `isVisionBridgeForcedModel`).
2. Izvleci dele slik prek `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), ki nalogo prepusti **enotnemu zaznavalniku medijev**
   `detectMediaParts()` v `open-sse/utils/mediaParts.ts` — edinemu viru resnice, ki si ga
   deli s filtrom združljivosti kombinacij (combo). Izvleček je omejen na dovoljene oblike,
   ki jih `replaceImageParts` lahko vstavi nazaj (pogodba izvleci↔zamenjaj): OpenAI `image_url`,
   Anthropic base64 `source.type:"base64"`, Anthropic URL `source.type:"url"` in Responses
   API `input_image`. Ujemajoče se slike, ugnezdene v `tool_result.content` v Claude Code
   in v izhodih orodij Responses, so prav tako izvlečene in zamenjane na svojih prvotnih
   poteh; oblike, ki vsebujejo le indikator, so gradivo za combo filter in se ne izvlečejo.
   Preskoči, če nobena ni najdena.
3. Razreši izvajalno konfiguracijo prek `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): nove nastavitvene ključe
   `modalityBridge*` imajo prednost; starejši ključi `visionBridge*` ostajajo kot
   **nadomestna možnost za en cikel** (obdobje za povrnitev). Če je most onemogočen,
   se preskoči pred vsakršnim pregledovanjem medijev.
4. Izbirnik načina (`modalityBridgeVisionMode`, glejte tabelo spodaj) odloči med preusmeritvijo
   in opisovanjem. Preusmeritev vrne `modifiedPayload`, kjer je zamenjan samo `model`,
   skupaj z meta `{ rerouted, fromModel, toModel, imagesKept }`.
5. Pot opisovanja: omeji število slik na `maxImages`, sestavi poziv, ki upošteva nalogo,
   preveri predpomnilnik opisov, pokliči vizijski model **vzporedno**
   (`Promise.allSettled`) in na njihovo mesto vstavi besedilne dele `[Image N]: <description>`.
   Neuspešno opisovanje vrne `null`: surova slika se ohrani za neznane cilje/cilje z vizijo
   (#4012), vendar **potrjen neposredni cilj samo z besedilom** ali combo brez vizije prejme
   izrecno besedilno nadomestilo `(unavailable — no vision-capable provider connected)` za
   vsako neopisano sliko, vključno z delnimi napakami in slikami, ki presegajo omejitev klicev
   za opis (#17069). Obstoječa nadomestna možnost opisovanja za combo, kjer vse odpove, ostaja
   nespremenjena (#8430).
6. Vrni `modifiedPayload` + meta (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Izbirnik načina (`modalityBridgeVisionMode`)

| Način      | Privzeto | Vedenje                                                                                                                                                                                                                                                                         |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔        | Zastarela heuristika, nespremenjena (#6640/#7204): modeli, ki niso combo/`auto/`, se preusmerijo na najboljši vizualni model, razen če ima izvirni model že uporabne poverilnice (takrat opiše); combo cilji vedno opišejo.                                                     |
| `describe` |          | Vedno opiši – blok za preusmeritev se v celoti preskoči; vedno odgovori model, ki ga je izbral uporabnik.                                                                                                                                                                       |
| `reroute`  |          | Vsili preusmeritev: zaščita ohranitve modela s poverilnicami se obide. Zaščita poverilnic **cilja** preusmeritve še vedno velja – ko ni uporabnega vizualnega cilja, most blokira z jasno napako, namesto da bi opisal ali poslal surove slike cilju, ki podpira samo besedilo. |

Vsiljeni načini se zaključijo **preden** se zažene samodejna heuristika; vedenje
`auto` je bajtno identično varovalki iz obdobja pred PR-1.

#### Obseg API-ključa (`visionBridgeKeyScope.ts`)

Ko API-ključ klicatelja omejuje `allowedConnections`, nabore kvot
(`allowedQuotas`) ali modele (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), most izbere samo
modele za preusmeritev in opis, ki jih ključ sme uporabljati, in sicer na
povezavah, ki jih ključ sme uporabljati. Klic za opis nato vedno poteka prek
OmniRoute self-loopa z glavo `x-omniroute-self-loop-key-id`, tako da prejeta
zahteva za klepet znova uveljavi povezavno in modelno politiko tega ključa.
`enforceApiKeyPolicy()` upošteva to glavo le skupaj z nosilcem (bearer) self-loopa,
zato lahko dostop le zoži, in id, ki se ne razreši, se zavrne.

Če ključu ni dovoljen noben vizualni model, **potrjen cilj samo z besedilom**
zavrne zahtevo s sliko lokalno z jasno napako HTTP 400, namesto da bi posredoval
bajte slike nezmožnemu nadrejenemu sistemu (#17069). Pri ciljih z neznano ali
izvorno vizualno zmožnostjo pot opisovanja ohrani prejšnje vedenje fail-open
(meta `{ skipped: true, reason: "no_permitted_vision_model" }`).
Zahteve brez ključa in ključi brez teh omejitev se obnašajo popolnoma enako kot
prej.

#### Opisni poziv, ki upošteva opravilo (`modalityBridgeVisionTaskAware`)

Privzeto **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) doda
besedilo **zadnjega uporabnikovega sporočila** (okrnjeno na 500 znakov) osnovnemu
opisnemu pozivu, s čimer usmeri opis k temu, kar je uporabnik dejansko vprašal
(vzorec codex-vision-proxy), in vizualni model prosi, naj prepiše vidno besedilo.
Ko je zastavica izklopljena – ali ko ni uporabnikovega besedila – se osnovni
poziv uporabi nespremenjen.

Lastna zahteva self-loopa za opis, združljiva z OpenAI (`callVisionModelSingle()`
v `visionBridgeHelpers.ts`), vedno zahteva `image_url.detail: "high"` –
brezpogojno, za vsakega klicatelja/ponudnika, ne glede na kakršen koli signal
odjemalca. Vzorčenje z nizko podrobnostjo poslabša natančnost OCR prav pri
opravilu prepisovanja besedila, ki ga ta poziv zahteva, zato klic za opis sam
vedno zahteva visoko podrobnost, ne glede na to, katero raven podrobnosti je
uporabila izvirna dohodna zahteva. To vpliva samo na notranje telo zahteve za
opis; ne spreminja tega, kako OmniRoute posreduje klicateljev lastni
`image_url.detail` pri primarni zahtevi – ta privzeta vrednost se uporabi ločeno
in samo za zaznane odjemalce OpenCode v `defaultImageDetail()`
(`open-sse/handlers/chatCore/upstreamBody.ts`). Razveja self-loopa za opis v
formatu Anthropic nima polja `detail` in nanjo ne vpliva nobena od obeh privzetih
vrednosti.

#### Omejitev izhoda opisa (`modalityBridgeVisionMaxChars`)

| Ključ                          | Privzeto | Razpon            |
| ------------------------------ | -------- | ----------------- |
| `modalityBridgeVisionMaxChars` | `0`      | `0` ali 100–50000 |

`0` (privzeto) pomeni **brez omejitve** – opis, ki ga vrne `callVisionModel()`,
se posreduje nespremenjen, s čimer se ohrani obstoječe vedenje. Vsaka vrednost v
razponu 100–50000 okrni opis s pripono `…`, preden se vstavi nazaj kot
`[Image N]: <description>` (`VisionBridgeGuardrail.preCall()` v
`src/lib/guardrails/visionBridge.ts`). Povečajte jo za OCR-opravila, bogata s
podrobnostmi, kjer podrejeni model potrebuje celoten prepis; znižajte jo, da
omejite porabo žetonov pri klepetavih vizualnih modelih. Polje na nadzorni plošči
je na zavihku Vision v napredni plošči (`modality-bridge-max-chars` v
`ModalityBridgeVisionTab.tsx`) in vsako vrednost med 1 in 99 dvigne na spodnjo
mejo 100, medtem ko izrecno `0` pusti nedotaknjeno – `0` je sama po sebi veljavna
vrednost Zod (`z.union([z.literal(0), z.number().int().min(100).max(50000)])`),
ne le privzeta vrednost za »nenastavljeno«.

#### Predpomnilnik opisov (`modalityBridge/bridgeCache.ts`)

Predpomnilnik LRU + TTL v pomnilniku za izhode opisov, skupen za celoten proces.
Ključ = `sha256(imageRef + composedPrompt + configuredBridgeModel)` z okvirjanjem
s predpono dolžine (brez trkov na mejah polj). Komponenta modela je
**konfigurirani** mostni model, ne model, ki je dejansko odgovoril –
`callVisionModel` lahko interno uporabi nadomestno možnost in ključenje po
posameznem poskusu bi razdrobilo predpomnilnik. Neuspeli opisi se nikoli ne
shranijo v predpomnilnik. Nastavitve:

| Ključ                           | Privzeto | Razpon  |
| ------------------------------- | -------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`   | —       |
| `modalityBridgeCacheTtlMinutes` | `60`     | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`    | 10–5000 |

#### Normalizacija oddaljenih slik (samozančni klic describe/pridobivanje base64)

Ko most sam pridobi **oddaljeno** sliko — Anthropicov samoklic describe in pretvorbo base64 v claude-wire-format (`ensureBase64ImagesForClaudeWire`), oboje prek `fetchRemoteImageAsDataUri()` v `visionBridgeHelpers.ts` — se dobljeni podatkovni URI prenese skozi `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`), preden se vgradi v zahtevo za vizualni model. Prevelike slike se pomanjšajo na **2048px dolgo stran** (v skladu z omejitvijo velikosti, ki jo OpenAI/Anthropic že uporabljata na strežniku), kar zmanjša bajte za nalaganje in zakasnitev, ne da bi spremenilo, kar vidi vizualni model. Spreminjanje velikosti uporablja `sharp`, naložen prek dinamičnega uvoza: na platformi, kjer se njen izvorni binarni vmesnik ne naloži, `normalizeDataUri()` **nikoli ne vrže izjeme** — vrne se na prehod izvirnih bajtov, tako da pot describe/pretvorbe base64 vedno deluje. Bajti, ki niso slika (pridobitev, ki ni vrnila dekodirljive slike), se prav tako prenesejo nespremenjeni. Ta normalizacija je omejena na slike, ki jih most pridobi za svoj samoklic — nikoli se ne uporabi za surov prehodni payload klicatelja, v skladu z načelom mutacije samo z izrecno privolitvijo (trdo pravilo #20).

#### Shema nastavitev + migracija

Novi ključi `modalityBridge*` so validirani z Zod v `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, trojica `modalityBridgeCache*` in skupina `modalityBridgeAudio*`, ki jo uporablja Audio Bridge. Migracija `141_modality_bridge_settings.sql` kopira obstoječe vrednosti starejših ključev `visionBridge*` v ustrezne nove ključe (idempotentno, nikoli ne prepiše vrednosti `modalityBridge*`, ki jo je nastavil upravljavec); starejši ključi ostanejo sprejeti kot nadomestno branje za en cikel izdaje.

#### Glava preglednosti + statistika

Z describe preoblikovani odgovori vsebujejo `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (zgradi `buildModalityBridgeHeader()` v `modalityBridge/bridgeStats.ts`, vstavi `withModalityBridgeHeader()` v `src/sse/handlers/chatHelpers.ts`). Preusmerjene zahteve **nimajo** glave — payload je ostal nespremenjen in zamenjava modela je že vidna v polju `model` v telesu odgovora.

`GET /api/modality-bridge/stats` (upravljavska avtentikacija, enaka raven kot `GET /api/settings`) vrne v pomnilniku shranjene števce po modalnostih `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` za `vision`, `audio` in `video`. `averageLatencyMs` uporablja `latencySamples`, ne vseh poskusov, kot imenovalec; operacija brez merjenja časa ne ustvari vzorca z nič milisekundami. `bridged` ostaja vzvratno združljiv alias za uspešne pretvorbe; neuspešni poskusi ga ne povečajo. Števci se ob ponovnem zagonu procesa ponastavijo po zasnovi (telemetrija, ne računovodstvo).

#### Konfiguracija nadzorne plošče

Namenska stran nadzorne plošče je `/dashboard/settings/modality-bridge`. Njeni naslovljivi prek URL zavihki `Vision`, `Audio` in `Video` ohranijo parametre poizvedbe med spreminjanjem vrednosti `tab`. Zavihek Vision omogoča vklop, način, izbiro modela (vključno s samodejno privzeto vrednostjo), pozivanje glede na nalogo, napredne omejitve zakasnitve/števila slik/dolžine opisa/predpomnilnika, števce med izvajanjem in zaščiten vzorčni zahtevek. Zavihek Audio je prav tako aktiven: omogoča vklop, izbirnik modelov samo za STT s funkcijo Auto, omejitve zakasnitve/največjega posnetka, avdio števce in vzorčni test `input_audio`. Zavihek Video je funkcionalen: poroča o stanju izvajanja FFmpeg/ffprobe — eno od štirih izrecnih stanj UI (`unknown`, medtem ko preverjanje poteka ali se ni moglo dokončati, `restricted` na gostitelju nadzorne plošče, ki ni loopback, kjer se preverjanje na strani odjemalca preskoči, `unavailable`, ko je preverjeno in potrjeno, da manjka, ali `available` z različicama FFmpeg/ffprobe) — shranjuje omejitve vklopa/modela/sličice/videa/zakasnitve, filtrira izbirnik modelov na modele, zmožne vida, in prikazuje video števce.

Prejšnja kartica Vision Bridge v nastavitvah AI je združljivostna povezava na novo stran; ne vsebuje več druge kopije obrazca. Media Providers prav tako povezuje poteke Image-to-Text in Speech-to-Text z ustreznimi zavihki Modality Bridge, ne da bi odstranil obstoječi preizkuševalnik Speech-to-Text.

**Obhod vstopne kontrole pri samozančnem klicu:** ko se klic describe usmeri skozi OmniRouteovo lastno samozančno zanko `/v1` (nestandardni model ponudnika), podzahteva pošlje `x-omniroute-admission-bypass: internal` in je overjena z razrešenimi poverilnicami samozančne zanke — lokalno sentinelno vrednostjo `sk_omniroute` v lokalnem načinu ali z okoljskim ključem `OMNIROUTE_API_KEY` / `ROUTER_API_KEY`, ki ga nastavi upravljavec (#1350), tako da lahko tudi namestitve z `REQUIRE_API_KEY=true` še vedno izvedejo klic describe. Obhod se upošteva samo za te natančne poverilnice, zato zunanji odjemalci ne morejo uporabiti glave za preskok vstopne kontrole.

Starejše privzete vrednosti so v `src/shared/constants/visionBridgeDefaults.ts`; nove privzete vrednosti za način/pozivanje glede na nalogo/predpomnilnik in razreševalnik nastavitev so v `src/shared/constants/modalityBridgeDefaults.ts`. Varovalka izpostavi konstruktorsko možnost `deps`, tako da lahko testi vstavijo lažne implementacije `getSettings` in `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Prestreže klepetalne zahteve z avdio vsebino, preden dosežejo cilj, za katerega ni znano, da sprejema avdio vhod. Klepetalne zahteve nikoli ne preusmeri: avdio deli se prepišejo prek obstoječe večdelne končne točke, združljive z OpenAI, izbrani model klepeta pa nadaljuje s prepisi besedila.

Potek:

1. Razrešite `supportsAudio` prek `getResolvedModelCapabilities()`. Izrecni
   metapodatki registra ponudnikov imajo prednost, nato statični metapodatki
   modela in nazadnje sinhronizirani `modalities_input`. Deklarirani vhodni
   seznam brez `audio` je `false`; če ni nobenega dokaza o zmožnosti, ostane
   `null`. Obe vrednosti, `false` in `null`, aktiviramo konservativni most,
   medtem ko ga `true` obide.
2. Razrešite nastavitve `modalityBridgeAudio*` in iz vsakega sporočila s pomočjo
   skupnega detektorja `detectMediaParts()` izluščite zvočne dele na najvišji
   ravni, ki jih je mogoče spojiti. Podprte oblike zapisa so OpenAI
   `input_audio`, `audio_url` in `source.media_type: "audio/*"`. Gnezdeni zvok
   se zazna zaradi usmerjanja, vendar ga pot spajanja ne odstrani. Količina dela
   je omejena z `modalityBridgeAudioMaxClips`; poznejši deli ostanejo
   nedotaknjeni.
3. Upoštevajte konfigurirani `provider/model` ali pustite, da
   `selectAudioBridgeModel()` prehodi `AUDIO_TRANSCRIPTION_PROVIDERS` v
   stabilnem vrstnem redu kataloga in izbere prvi model z uporabno aktivno
   poverilnico ponudnika.
4. `callAudioTranscription()` pretvori zvok v obliki base64/data-URI v
   večdelno datoteko `file` ali prenese oddaljeni `audio_url` prek izhodnega
   varovala samo za javne naslove s pripenjanjem DNS in omejitvijo 25 MB. Nato
   izvede POST datoteke in izbranega modela na lokalno povratno zanko
   `/v1/audio/transcriptions`, overjeno z `resolveSelfLoopBearer()`. Obstoječa
   pot za prepisovanje izvede običajno iskanje poverilnic, obravnavo
   ohlajanja/omejevanja hitrosti in posredovanje ponudniku.
5. Uspešni klici svoje dele nadomestijo z `[Audio N]: <transcript>`. Klici se
   izvajajo s `Promise.allSettled`: posamezna napaka ohrani prvotni zvočni del
   (pogodba #4012). Če vsi klici spodletijo in je za cilj dokazano
   `supportsAudio === false`, deli postanejo
   `[Audio N]: (unavailable — no STT provider connected)` (pogodba #8430). Za
   neznan cilj (`null`) rezultat, kjer vse spodleti, ostane nedotaknjen.
   Dokazano samo besedilni cilj brez uporabne poverilnice STT prejme isto
   izrecno nadomestno sporočilo brez izvedbe omrežnega klica.

Uspešni prepisi uporabljajo predpomnilnik LRU/TTL Modality Bridge na ravni
procesa. Ključ združuje zvočno referenco, stabilno oznako operacije
`audio-transcription` in izbrani model STT; napake se nikoli ne predpomnijo.
Poskusi zvoka posodabljajo skupne števce `bridged`, `cacheHits`, `failures` in
`lastUsedAt`. Preoblikovani odgovori vsebujejo
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`;
nedotaknjene zahteve ne prejmejo segmenta Audio Bridge.

Nastavitve izvajanja so shranjene v zbirki podatkov in validirane z Zod:

| Ključ                         | Privzeto | Razpon               |
| ----------------------------- | -------- | -------------------- |
| `modalityBridgeAudioEnabled`  | `true`   | —                    |
| `modalityBridgeAudioModel`    | `""`     | Samodejno ali ID STT |
| `modalityBridgeAudioTimeout`  | `60000`  | 1000–300000          |
| `modalityBridgeAudioMaxClips` | `3`      | 1–10                 |

Skupni predpomnilnik ostaja pod nadzorom nastavitev
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in
`modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Presreže video dele na najvišji ravni v `messages` pri Chat Completions in
`input` pri Responses API, preden se pokliče cilj brez znane izvorne podpore za
video. Podprte oblike so `input_video`, `video_url`, `video_source`, URL-ji
HTTPS in podatkovni URI-ji `data:video/*;base64,...`. Navadna imena datotek v
besedilu se ne obravnavajo kot video.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) skrbi za prehod po zahtevi,
preverjanje zmožnosti/pravil, združevanje na ravni posamezne zahteve in vsebino
odgovora. Delo za posamezni video – pridobivanje, predpomnilnik celotnega
rezultata, opisovanje zaporedja sličic (ki združi morebitni zvočni prepis, ki ga
je deklariral klicatelj), ter meritve/prekinitev/čiščenje za posamezen poskus –
je skrito za `processVideoPart` v `videoBridgePipeline.ts`, ki se pokliče enkrat
na video del znotraj zanke `preCall`. Ta modul tudi določa izrecne meje vrat
`VideoMediaBrokerPort` (pridobivanje bajtov in izluščanje vzorčenih sličic),
`VideoAudioTranscriptionPort` (združevanje zvočnega prepisa, ki ga je deklariral
klicatelj, z vzorčenimi podnapisi) in `VideoDrilldownPort` (meja trajnega
shranjevanja za poglobljeni pregled sličic; še ni povezana v
`processVideoPart` – le ločena pot `/api/modality-bridge/video/drilldown` danes
zapisuje zapise poglobljenega pregleda).

Javna pot zahteve `/v1` nikoli ne uvozi ali pokliče podprocesa. Oddaljeni
videoposnetki se prenesejo z omejitvijo 50 MiB; vdelani videoposnetki base64
imajo konservativno omejitev 36 MiB dekodiranih podatkov na video, da lahko
ovoj modela/sporočil/sličic ostane znotraj omejitve sprejema javne zahteve JSON
50 MiB. Dolžina vdelane vsebine in ocene dekodirane velikosti se preverijo pred
dodelitvijo. HTTPS je obvezen pri začetnem oddaljenem URL-ju in vsaki
preusmeritvi, pri čemer se uporabi obstoječe izhodno varovalo samo za javne
naslove s pripenjanjem DNS. Bajti nato prečkajo natančno določeno notranjo mejo
posrednika `POST /api/modality-bridge/video/extract`. Ta pot je hkrati
`LOCAL_ONLY` in `SPAWN_CAPABLE`, sprejema le zahtevo, overjeno na ravni
posameznega procesa, iz zaupanja vredne povratne zanke, in nikoli ne sprejme
URL-ja, poti v datotečnem sistemu, izvršljive datoteke ali seznama argumentov.
Cevovod za velikost telesa API-ja in inkrementalni bralnik telesa v
upravljalniku neodvisno uveljavljata omejitev vhoda posrednika 50 MiB. Njegova
omejena čakalna vrsta izvaja eno izluščanje naenkrat, dovoljuje štiri čakajoče
naloge in omejuje čakajoči vhod na 100 MiB.

Znotraj posrednika `ffprobe` bere zasebno lokalno datoteko; fiksni seznam dovoljenih formatov izključuje predvajalne sezname in manifestne formate. Pri dovoljenih vsebnikih družine MOV zunanje podatkovne reference MOV ostanejo privzeto onemogočene in fiksni ukaz jih ne omogoči. Oba, `ffprobe` in `ffmpeg`, uporabljata seznam dovoljenih protokolov samo `file`, eno nit, fiksna polja argumentov, brez lupine, izvršljive datoteke pa se razrešijo iz `PATH`. Tokovi naslovnic s priloženo sliko niso kandidati za predvajanje. Vsi predvajljivi tokovi morajo ustrezati omejitvam, izrecni privzeti tok pa ima prednost pred determinističnim nadomestnim tokom z najnižjim indeksom. Videoposnetki so omejeni na 600 sekund, 8.192 slikovnih pik na dimenzijo in 33.554.432 izvornih slikovnih pik. FFmpeg vzorči 1–16 vmesnih sličic JPEG, dolgo stran pomanjša na največ 1.024 slikovnih pik, pri čemer manjših vhodov ne povečuje, in nikoli ne prejme URL-ja. Vzorčenje je privzeto `uniform`. Izbirne politike `scene_aware` in poskusna `segment_aware` izvedejo en dodaten fiksni prehod FFmpeg po že potrjenem lokalnem toku, izberejo omejene časovne žige prizorov `showinfo` in se ob napaki detektorja, časovni prekoračitvi, nepravilni izhodni strukturi ali praznem naboru kandidatov deterministično vrnejo na iste enakomerne vmesne točke. Segmentno ozaveščeni način razporeja vzorce vmesnih točk sorazmerno s potrjenimi intervali prizorov; dokazi in nadomestno vedenje segmentno ozaveščenega načina so podrobneje opisani spodaj. Trda omejitev 16 sličic se uporabi po izbiri pri vsaki politiki. Kadar ima zahteva, ki se zaveda prizorov, samo proračun za eno sličico, uporabi enakomerno vmesno točko aktivnega celotnega videoposnetka ali okna fokusa in poroča `policyEffective: uniform`: ena izbrana sličica prizora ne more ohraniti obeh časovnih koncev. Klicatelj lahko neobvezno poda končno okno fokusa (`start`/`end` v sekundah); meje se omejijo na trajanje medija, obrnjena ali nekončna okna se zavrnejo, vse politike vzorčenja pa se izvajajo samo znotraj normaliziranega intervala. Nastalo okno je vključeno v metapodatke vzorčenja in v predpono nezaupanja vrednega opisa, da lahko nadaljnji modeli ločijo osredotočen izsek od celotne časovne osi.

Semantični fokus opisov je ločena, izrecna nastavitev. Privzeti način analize `full` ohrani obstoječi poziv za sličice in nikoli ne posreduje besedila zahteve modelu za opise. V načinu `focused` most bere samo najnovejši neprazni `text`/`input_text`, ki ga je ustvaril uporabnik, iz istega vsebnika Chat ali Responses, ga normalizira v NFC, skrči krmilne znake in presledke ter ga omeji na 500 kodnih točk Unicode. Prazen rezultat se vrne na točen poziv `full`. Uporaben namig se serializira kot JSON v namenskem bloku nezaupanja vrednega uporabniškega konteksta in lahko le daje prednost opazljivim podrobnostim; ne more razveljaviti ločenega opozorila pred sledenjem navodilom, ki so vidna ali slišna v mediju. Besedilni fokus nikoli ne sklepa na `start`/`end` niti ne spreminja časovnega vzorčevalnika.

#### Strukturni dokazi segmentov FU-07

`segment_aware` uporablja en omejen predanalizni prehod po že potrjenem lokalnem videotoku. Fiksna veriga filtrov najprej pomanjša na največ 320 slikovnih pik v širino, zazna spremembe prizorov in zamrznjene intervale, nato pa vzorči z 1 sličico na sekundo za zamegljenost, povprečno lumo in prostorsko/časovno informacijo. Prehod je omejen na 600 strukturnih vzorcev, eno nit FFmpeg/filtra, iste sezname dovoljenih protokolov (samo `file`) in vsebnikov, omejitev izhoda procesa na 1 MiB in največ 30 sekund znotraj skupnega preklica/roka posrednika. Nikoli ne sprejme ukaza, filtra, poti ali URL-ja iz zahteve.

Strukturne vrednosti so deterministični dokazi vzorčenja, ne pa semantično razumevanje videoposnetka. Ne sklepajo na subjekte, dejanja, opise, govor ali namen uporabnika. Meje prizorov in zamrznitve tvorijo segmente; pokritost zamrznitve, zamegljenost, osvetljenost, prostorske podrobnosti in časovne spremembe le vplivajo na to, kako se razporedi obstoječi proračun 1–16 sličic. Popolnoma zamrznjen segment je omejen na eno sličico, medtem ko se nezamrznjeni segmenti potegujejo za preostali proračun. Ko je mej več kot sličic, se ohrani enakomerna pokritost časovne osi, da hitri zgodnji rezi ne morejo skriti dolgega zaključnega segmenta. Meje prizorov znotraj 1-sekundne ločljivosti analize meje zamrznitve se združijo.

Manjkajoči filtri, nepravilni/prazni dokazi, napaka detektorja ali časovna prekoračitev omejene predanalize ob napaki preidejo na natančno politiko enakomernih vmesnih točk. Preklic s strani klicatelja ali rok posrednika ne sproži fail-open vedenja: prekine podproces v teku, prepreči poznejše pridobivanje sličic, zasebno začasno drevo pa se odstrani v `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` generira deterministične resnične testne priprave FFmpeg za prihranke pri klicih opisov po odstranjevanju dvojnikov, razporejanje proračuna pri gostem gibanju, dokaze o zamegljenosti/osvetljenosti/SI-TI, hitre reze z dolgim repom in lažno pozitivne postopne zatemnitve. Zapisuje dejanski čas predanalize in, kjer je na voljo `/usr/bin/time`, CPU podrejenega procesa in najvišjo vrednost RSS. Njegova preverjanja kakovosti so samo strukturni oraklji. Dejanska kakovost modela za opise ostaja `HOLD`, ker ta preskusni okvir nima pooblaščene končne točke ali zamrznjenega ocenjevalnika. Denarni prihranki prav tako ostajajo `HOLD`, razen če `--caption-cost-per-call-usd` navede izrecno pozitivno oceno stroškov na klic; skript nikoli ne izmišlja nobenega od obeh rezultatov.

Vsak okvir je omejen na 4 MiB, vsi neobdelani okviri skupaj na 23 MiB, serializirani odgovor posrednika pa na 32 MiB. Zasebni začasni imenik se odstrani v bloku `finally`. OmniRoute ne vključuje FFmpeg in ne sprejema poti do izvedljive datoteke po meri. Pred ustvarjanjem napisov most uporabi konzervativen postopek vizualnega odstranjevanja dvojnikov: vsak JPEG zmanjša v sivinski medpomnilnik velikosti 16 × 16 in ga primerja samo z zadnjim ohranjenim okvirom. Če zahtevani proračun napisov presega en okvir, pridobivanje zagotovi omejeno zbirko kandidatov z največ dvakratnikom tega proračuna in nikoli več kot 16 okvirji. Zahtevana zgornja meja se uporabi šele po odstranjevanju dvojnikov, pri končnem redčenju pa se prvi in zadnji izbrani kandidat ohranita, kadar je proračun vsaj dva. Različicirana politika `grayscale-16x16-mean-cells-v2` uporabi večjo vrednost med povprečno razliko svetilnosti in deležem celic sličice, katerih normalizirana razlika znaša vsaj 0,05. Prag za dvojnike je konstanta 0,04, izbrana zaradi predvidljivosti in ne izpostavljena kot nastavitev med izvajanjem. Ta sekundarni visokokontrastni signal ohrani majhne premike in spremembe vidnega besedila, ki jih lahko primerjava zgolj na podlagi povprečja skrije. Napake primerjalnika ali dekodirnika ne blokirajo obdelave, zato se pokritost ohrani. Izhodni metapodatki ločujejo pridobljene kandidate, uspešno uporabljene okvire in odstranjene vizualne dvojnike.

Izrecno označen videodel lahko zahteva kontaktni list s časovnimi oznakami. Most ustvari mrežo JPEG z največ 4 stolpci in 16 okvirji. Vsaka celica velikosti 512 slikovnih pik vtisne časovno oznako svojega vira v visokokontrastni spodnji pas, iste časovne oznake pa ostanejo tudi v besedilnih metapodatkih za nadaljnje povezovanje in revizijo. Celoten JPEG ostane omejen na 32 MiB. Če `sharp` ne more dekodirati ali sestaviti mreže, most preklopi nazaj na posamezne okvire JPEG; prekinitev odjemalca se še vedno prenese skozi postopek izdelave kontaktnega lista.

Dokazila za napredovanje so namenoma ločena od sintetičnega mikromerila zmogljivosti sestavljanja. `scripts/perf/video-bridge-contact-sheet-eval.ts` določa različicirano shemo ogrodja za preizkušanje A/B z dejanskimi modeli vida, združljivimi z OpenAI. Meri žetone, o katerih poroča ponudnik, skupno latenco od začetka do konca (vključno s sestavljanjem kontaktnega lista), število klicev modela in ohranitev dejstev, opredeljenih v manifestu. Neobdelani odgovori modela se ne zapisujejo v poročilo; ohranijo se samo povzetki SHA-256 in ID-ji ujemajočih se dejstev. Ogrodje ne izvede nobenega omrežnega klica ali plačljivega klica modela, razen če je podana možnost `--execute-real` ter so konfigurirani `--model`, `OMNIROUTE_BASE_URL` in `OMNIROUTE_API_KEY`. Brez takšnega izrecnega dejanskega zagona njegov strojno berljivi rezultat ostane `HOLD`; sintetične meritve koristne vsebine oziroma števila klicev same po sebi niso dokazilo za napredovanje.

Klicatelji lahko podprtemu videodelu priložijo neobvezno polje `transcript.cues`, če že imajo poravnano besedilo. Vsaka oznaka mora vsebovati `text`, končen interval `start`/`end` znotraj preverjenega trajanja in dovoljen `source` (`client`, `embedded` ali `audio-bridge`); privzeta vrednost za `confidence` je `1` in mora ostati med `0` in `1`. Popolnoma enake oznake se združijo. OmniRoute na podlagi teh metapodatkov nikoli ne zažene prepisovanja: preverjene oznake se kopirajo v opisani rezultat skupaj z virom, zaupanjem in intervalom ter se prikažejo kot nezaupanja vredna opažanja poleg napisov okvirjev. Neveljavno besedilo, besedilo zunaj razpona ali besedilo brez navedbe izvora se zavrne, namesto da bi se pomešalo v tok napisov. Oba kanala prepisa v telesu zahteve normalizirata podani izvor na `client`, vključno s samodeklariranimi oznakami `embedded` ali `audio-bridge`. Te zaupanja vredne oznake lahko prek argumenta `trustedSource`, dostopnega samo iz kode, dodeli le strežniško upravljani prilagodilnik; polje JSON v zahtevi tega argumenta ne more doseči. Besedilo prepisa ostane nezaupanja vredna vsebina, izpeljana iz medija, ne glede na njegov izvor, in nikoli ne sme določati avtorizacije.

Napredni klicatelj lahko za isti videoposnetek zagotovi sled `audioTranscript`; ta se obravnava kot besedilo, ki ga je zagotovil odjemalec, in ne kot dokaz strežniškega prepisovanja. Stična točka združevanja izvaja vizualna in zvočna opažanja znotraj enega roka in z istim signalom za prekinitev, jih razvrsti na skupni časovnici, združi popolnoma enake vnose ter poroča o delnem rezultatu, kadar uspe samo ena stran. Neveljaven `audioTranscript` povzroči prehod na tak delni rezultat — vizualni opis se ohrani, zvočna veja pa zabeleži sanitizirano kodo napake — namesto da bi odpovedal celoten videoposnetek. Razpoložljivost posameznih vej, zastavica delnega rezultata in sanitizirane kode napak se ohranijo v opisanem rezultatu, metapodatkih varoval (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), metapodatkih predpomnilnika rezultatov in števcih združevanja v mostu. Privzeta pot Video Bridge ne prikliče pretvorbe govora v besedilo in ne prenese druge kopije predstavnostne vsebine; brez te izrecne sledi ostane omejena samo na video.

**Hramba prepisa (#12150 P1).** To velja samodejno vsakič, ko Video Bridge (ki ga je treba posebej omogočiti) izdela katero koli iztočnico prepisa — ločene zastavice za hrambo ni. Ko zahtevek izdela katero koli iztočnico prepisa (klicateljevo deklarirano polje `transcript` ali združeno polje `audioTranscript`), varovalka zahtevek označi z `videoBridgeObserved` in ustvari redigirano senčno različico opisa videoposnetka — enako upodobitev, v kateri je prostobesedilno telo vsake iztočnice nadomeščeno z `[redacted-video-transcript]`, zgrajeno tako, da se strukturirano polje iztočnice zamenja, preden se niz sestavi (nikoli z razčlenjevanjem sploščenega besedila, tako da ne more ostati nobena vsebina iztočnice — zlonamerna ali običajna, vključno s telesi, ki vsebujejo `]`, kot sta `[inaudible]`/`[music]`). Shranjeno telo zahtevka v dnevniku klicev zamenja vsak besedilni del, izpeljan iz videoposnetka, s to redigirano senčno različico, pri čemer se ujemanje ugotavlja po enakosti vsebine; sidro `fullText` se ponovno prebere iz dokončanega podatkovnega paketa predklicne varovalke, tako da ujemanje še vedno uspe, potem ko poznejše varovalke v verigi (maskirna mehanizma za PII in poverilnice, prioriteti 10/95) na mestu prepišejo besedilo opisa in potem ko vbrizganje sistemskega poziva/predaje/spomina preoblikuje matriko sporočil. Telo, ki se pošlje navzgor modelu, ostane nespremenjeno. Opazovani zahtevek tudi ne napolni trajnega spomina Memory (izluščanje iz zahtevka in iz odgovora se preskoči), zato modelov lastni odgovor ne more prenesti besedila prepisa v Memory.

**Surova polja videoposnetka (#12430).** Ko je most omogočen in izvorna podpora za videoposnetek ni znana ali je odsotna, tudi definirana polja `transcript`/`audioTranscript` aktivirajo `videoBridgeObserved`, tudi po neuspešnem opisu ali omejitvi `maxVideos`. `null` in prazni nizi štejejo; odsotna polja in metapodatki, ki niso povezani z videoposnetkom, ne štejejo. Shranjene kopije te pojave redigirajo ali zahtevek izpustijo, predpomnilniki/Memory pa se zaobidejo.

Na teh nadomestnih poteh veljavne klicateljeve iztočnice postanejo podprti deli `text`/`input_text`, namesto nestandardnih polj ponudnika. Oba zapisa, ki ju priloži zahtevek, ostaneta nezanesljiva opažanja `client`, z izrecnim opozorilom, da videoposnetek ni bil opisan in da časovni žigi niso bili preverjeni glede na medij. Obstoječi skupni proračun za 256 iztočnic/64 KiB in proračun na iztočnico veljata za oba zapisa skupaj; časovni žigi morajo ustrezati 600-sekundni zgornji meji posrednika in morebitnemu priloženemu oknu osredotočenosti. Neveljavni zapisi se zavržejo in se ne posredujejo kot poljubno besedilo; veljavni sorodni zapis se lahko še vedno uporabi, razen če je presežen njun skupni proračun. Polja z vrednostjo null in prazna polja ne dodajo besedila. Ta nadomestna pot ne doda pridobivanja medija ali prepisovanja. Razširitvena polja prepisa se odstranijo iz nadomestnega nosilca videoposnetka in njegovih objektov `video_url`/`source`. Dovoljeni seznam za žični protokol OpenAI ostaja strog; neznani izvorni nosilci videoposnetka ostanejo na voljo, znani cilji samo za besedilo pa ohranijo varne oznake. Strukturirane senčne različice redakcije zaščitijo dodano besedilo prepisa, medtem ko prvotni zahtevek v lasti klicatelja ostane nespremenjen. Cilji z izvorno podporo in onemogočeni mostovi ohranijo obstoječe vedenje obhoda.

Dodatne shranjene kopije uporabljajo isti signal opazovanega zahtevka. Surovi posnetek zahtevka odjemalca pred varovalko, zahtevek, ki čaka v pomnilniku, in dnevnik zgodaj zavrnjenega zahtevka strukturno zamenjajo polja prepisa v delih videoposnetka; besedilni pozivi, ki jih sintetizirajo stopnje cevovoda in predaja konteksta, se redigirajo na ponoru shranjenega tela zahtevka. Shranjeni označevalnik `video_content_removed` povzroči, da se nadaljevanje `previous_response_id` varno zapre, namesto da bi rekonstruiralo besedilo, ki je bilo namerno zavrženo. Če opazovani zahtevek pred beleženjem izgubi senčno različico redakcije posameznega dela ali če se tudi le ena od več senčnih različic videoposnetka ne ujema po poznejših spremembah zahtevka, se shranjeno telo zahtevka v celoti izpusti, namesto da bi se shranil delno redigiran prepis.

Pri opazovanem zahtevku lahko modelov odgovor citira kateri koli del prepisa brez strukturirane meje iztočnice. Zato se njegov shranjeni `responseBody` v dnevniku klicev nadomesti z označevalnikom izpusta; podroben artefakt cevovoda (ki lahko vključuje telesa, poslana navzgor, in telesa odjemalca ter dele toka) se ne shrani. Predpomnilniki za semantiko, idempotentnost in ponovno predvajanje sklepanja za ta zahtevek zaobidejo branja in pisanja. Zahtevek ponudnika in odjemalcu viden odgovor ostaneta nespremenjena. Zgodnji bajti za ohranjanje povezave se izpraznijo iz začasnega medpomnilnika, ko je podrobni artefakt izpuščen. Opozorilo Kiro o nepravilno oblikovanem EventStreamu navaja le število bajtov podatkovnega paketa, nikoli njegove vsebine ali surove napake razčlenjevalnika JSON.
To ne trdi, da je bila pregledana vsaka nepovezana diagnostika ponudnika/vtičnika; širši pregled shranjenih ponorov se spremlja v #11658.

Notranji življenjski cikel `/api/modality-bridge/video/drilldown` je ločen predpomnilniški substrat, avtenticiran prek loopbacka/žetona. Vsaka operacija zahteva tudi kanonični neprozorni ID principal. Preden se omogoči produkcijski klicatelj, mora ta ID izpeljati iz avtenticiranega najemnika in nikoli ne sme posredovati vrednosti, ki jo izbere odjemalec. Predpomnilniški ključi povežejo ta principal s kanoničnimi ID-ji seje in sklicev na videoposnetek, shranjujejo samo njihove ključe, izpeljane s SHA-256, ter omejijo tako branje kot brisanje na isti principal. Predpomnilnik shrani največ 16 izpeljanih sličic JPEG na vnos, jim po desetih minutah poteče veljavnost in podpira omejena branja `start`/`end` ali izrecno brisanje seje.

Vsak principal je omejen na 16 vnosov in 64 MiB kanoničnih podatkov JPEG. Te omejitve so neodvisne od globalne zgornje meje 64 vnosov/256 MiB: pritisk na kvoto principal izloči samo najmanj nedavno uporabljene vnose tega principal, preden se upošteva globalno izločanje LRU. Potekli vnosi se ob dejavnosti predpomnilnika počistijo iz evidence principal in globalne evidence, medtem ko preklic in neuspeh preverjanja ne potrdita delne zamenjave.

Predpomnilnik zavrne nekanonični Base64, odvečno oblazinjenje, medije, ki niso JPEG, nepravilno oblikovane ali okrnjene JPEG ter JPEG, ki med omejenim dekodiranjem celotne slike s `sharp` sprožijo opozorilo. Vsako sprejeto sliko ponovno kodira v kanonični JPEG, širino in višino izpelje iz dekodiranih bajtov, namesto da bi zaupal poljem klicatelja, in zavrže morebitne pripete poliglotne bajte, namesto da bi jih obdržal. Obe kvoti se obračunata le z omejenim kanoničnim stisnjenim medpomnilnikom. Omejitev JSON v prenosu vključuje režijo Base64 za zgornjo mejo 32 MiB dekodiranega vhoda. Vsaka shranjena izpeljava zabeleži svojo validirano obliko/ločljivost JPEG, politiko vzorčenja, različico izpeljave, čas nastanka, na strežniku izračunan hash vsebine in zgoščeno referenco na nadrejeni element ter hash vsebine nadrejenega elementa zaupanja vrednega klicatelja. Preklic se preveri med asinhronimi fazami dekodiranja/hashiranja pred atomsko potrditvijo v predpomnilnik.

Ta sklop še ne poveže produkcijskega producenta s potjo in ne zagotavlja izbire večločljivostnih različic. Prosojna pot zahtevka Video Bridge zato ne povzroča dodatnega dela, medtem ko izpeljava principal-a, vezanega na najemnika, in celoten večločljivostni življenjski cikel FU-08 ostajata izrecno nadaljnje delo in nista dokumentirana kot dokončano vedenje.

Sličice se zaporedno opišejo s konfiguriranim modelom Video. Prazen prepis Video podeduje nastavitev Vision; če sta oba prazna, samodejni usmerjevalnik Vision izbere dejanski model, ki podpira vid. Uspešni napisi zamenjajo izvirni del s stabilno predpono `[Video description:`, ki besedilo tudi označi kot nezaupanja vredno opažanje, izpeljano iz medija, in dolvodnim modelom sporoči, naj ne sledijo navodilom, najdenim v mediju. Ključi predpomnilnika napisov sličic vključujejo bajte JPEG, poziv, časovni žig in dejanski model; shranjeni so samo uspešni napisi. Vnosi v predpomnilniku ohranijo dejanski uspešni model producenta, vključno z nadomestnim modelom; most poroča `mixed`, kadar so različne sličice ustvarili različni modeli. Zadetek v predpomnilniku ponovno uporabi to identiteto producenta, namesto da bi jo preoznačil kot zahtevani načrt usmerjanja. Predpomnilnik rezultata celotnega videa ima ključ na podlagi vsakega vhoda, ki spremeni izhod — poziv, dejanski model, politika vzorčenja, število sličic, način semantične analize, prstni odtis SHA-256 normaliziranega namiga za fokus, okno fokusa, `transcript`, `audioTranscript` in zastavica kontaktnega lista — zato je sprememba katere koli od teh dimenzij zgrešitev predpomnilnika in nikoli zastarela ponovna uporaba. Različica politike vizualnega odstranjevanja dvojnikov, prag in omejeno število kandidatnih sličic so prav tako izrecno navedeni v ključu in metapodatkih predpomnilnika rezultata; sprememba politike torej ne more ponovno uporabiti zastarelega opisa celotnega videa. Metapodatki predpomnilnika rezultata v4 ohranijo način in prstni odtis, nikoli surove uporabniške naloge. Metapodatki varovala poročajo zahtevani in dejanski način analize; zahtevani način `focused` brez uporabnega uporabniškega besedila se poroča kot dejansko `full`.

Varovalo izlušči vsak podprti del videa, vendar ne opiše več kot `modalityBridgeVideoMaxVideos`. Za cilj, za katerega je dokazano, da ima `supportsVideo === false`, neuspešni in čezmerni videi postanejo izrecne varne besedilne oznake, tako da noben surovi video ne ostane. Ko zmogljivost ni znana, ti deli ohranijo svoj nosilec videa; vsak nadomestni prepis sledi zgornji omejeni pretvorbi besedila. Cilji s `supportsVideo === true` obidejo most. Signal za prekinitev zahtevka odjemalca se širi skozi prenos, čakalno vrsto brokerja, podprocese in klice napisov; prekinitve se ustavijo med videi in nikoli ne odpovejo tako, da bi prepustili surovi medij.

Nastavitve izvajalnega okolja so shranjene v bazi in validirane z Zod:

| Ključ                               | Privzeto    | Razpon / vedenje                                                                                       |
| ----------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`     | Izbirno izvajalno okolje, prostovoljna vključitev                                                      |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | `full` ohrani splošne napise; `focused` uporabi omejen, nezaupanja vreden kontekst zadnjega uporabnika |
| `modalityBridgeVideoModel`          | `""`        | Podeduje model Vision Bridge                                                                           |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware` ali sorazmerni `segment_aware`; ob okvari detektorja se uporabi `uniform`     |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                         |

Zastarele shranjene vrednosti časovne omejitve Video nad 120 sekundami se omejijo na rok brokerja; nova pisanja nastavitev nad to mejo se zavrnejo.
`GET /api/modality-bridge/video/runtime` zahteva zaupanja vredno označeno lokalnost povratne zanke pred avtentikacijo ali preizkušanjem izvajalnega okolja, nato pa zahteva avtentikacijo za upravljanje. Vrne samo `available`, očiščene različice FFmpeg/ffprobe in nespremenljiv razlog, ko izvajalno okolje ni na voljo. Notranja končna točka za izluščanje ni javni API za nalaganje: zasičenje čakalne vrste vrne `503` skupaj z `Retry-After`, prekinitev klicatelja vrne `499`, nespremenljiv rok brokerja pa vrne `504`. Pretvorjeni odgovori dodajo `video->text;model=<visionModel>;parts=<videos>` v osrednjo glavo `x-omniroute-modality-bridge`, ne da bi odstranili segmente Vision ali Audio.

### PII Masker (`piiMasker.ts`)

Izvaja se v **obeh** stopnjah.

- **`preCall`** klonira koristno vsebino, pregleda `system`, `messages`, `input` in
  `prompt` (vključno z elementi, ki so navadni nizi) ter uporabi `processPII()` (iz
  `@/shared/utils/inputSanitizer`) za polja `content`/`text`, ki vsebujejo nize. Ko je
  `PII_REDACTION_ENABLED=true`, se zaznani osebni podatki zakrijejo v odhodni
  koristni vsebini. To je neodvisno od `INPUT_SANITIZER_MODE` (ki nadzira samo
  pravilnik glede vbrizgavanja pozivov). Ko je zakrivanje izklopljeno, klic zabeleži
  število zaznav, ne da bi prepisal vsebino.
- **`postCall`** ustvari globoko kopijo odgovora, izvede `sanitizePIIResponse()` in
  prikrivalnik za obliko API-ja Responses (`maskResponsesOutput` — obravnava
  `output_text` in `output[].content[].text`). Če pride do kakršnega koli zakrivanja,
  spremenjeni odgovor nadomesti izvirnega.

Zaščitni mehanizem nikoli ne blokira; samo dodaja oznake (`meta.detections`,
`meta.redacted`) ali prepisuje vsebino.

#### Izbira po vrstah, vzorci po meri in števci zaznav

**Nadzorna plošča → Nastavitve → Varnost → Prikrivanje osebnih podatkov** določa,
_kaj_ se prikrije. S tem se prikrivanje ne vklopi: za to sta še vedno odgovorna
`PII_REDACTION_ENABLED` (zahteva) in `PII_RESPONSE_SANITIZATION` (odgovor + SSE),
ki sta privzeto izklopljena.

- **Izbira po vrstah** — vgrajeni identifikatorji so navedeni v
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Če vrednost ni
  nastavljena, so izbrane vse vrste (vedenje pred uvedbo te nastavitve). Vzorec
  `ssn_us` mehanizma za zahteve se preslika v `ssn`. Predloge (Minimalno,
  Standardno, Finančno, Brazilsko, ZDA, Polno) samo izpolnijo potrditvena polja
  v uporabniškem vmesniku.
- **Vzorci po meri** — do 20 regularnih izrazov ali vzorcev z nadomestnimi znaki
  (`*` = do 64 znakov, ki niso presledki, `?` = en znak). Ujemanja postanejo
  `[CUSTOM_REDACTED]`. Vsak vzorec se obdela s `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): dolg je lahko največ 500 znakov,
  zastavice so omejene na `g i m s u`, mora se uspešno prevesti, prestati mora
  preverjanje `safe-regex` (katastrofalno vračanje) in se ne sme ujemati s
  praznim nizom ali označbo zakritja. Vzorec, ki preverjanja ne prestane, je
  zavrnjen ob shranjevanju in preizkušanju, shranjena vrstica, ki preverjanja
  ne prestane, pa je med izvajanjem preskočena, namesto da bi bila prevedena.
  Vzorci po meri se izvajajo samo, ko je prikrivanje vklopljeno.
- **Števci zaznav** — število zaznav po vrstah (nikoli ujemajoče se vrednosti),
  shranjeno v pomnilniku in ponastavljeno ob ponovnem zagonu
  (`src/lib/pii/piiDetectionStats.ts`). Povečuje se samo, ko je prikrivanje
  vklopljeno.

Nastavitve so shranjene v tabeli `key_value` (imenski prostor `pii_settings`,
`src/lib/db/piiSettings.ts`) in se berejo prek predpomnilnika z veljavnostjo 1 s. API:

| Metoda | Pot                      | Namen                                                                         |
| ------ | ------------------------ | ----------------------------------------------------------------------------- |
| `GET`  | `/api/settings/pii`      | Stanje zastavic, `enabledTypes`, `customPatterns`, števci zaznav              |
| `PUT`  | `/api/settings/pii`      | Zamenjava `enabledTypes` (`null` = vse) in/ali `customPatterns`               |
| `POST` | `/api/settings/pii/test` | Poskusni zagon enega vzorca na vzorcu velikosti največ 8 KB; nič se ne shrani |

Vsi trije zahtevajo skrbniško preverjanje pristnosti in preverijo telo z Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Vbrizgavanje pozivov (`promptInjection.ts`)

Zazna sovražne strukture v vsebini, ki jo posreduje uporabnik, in uveljavi
nastavljeni pravilnik. Vedenje določajo okoljske spremenljivke in možnosti
konstruktorja:

| Nastavitev      | Okoljska spremenljivka                                                                                   | Privzeto | Učinek                                                                                                                                                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Omogočeno       | `INPUT_SANITIZER_ENABLED`                                                                                | `true`   | Ko je `false`, se zaščitni mehanizem takoj konča.                                                                                                                                                                     |
| Način           | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                          | `warn`   | Pravilnik za vbrizgavanje: `block`, `warn` ali `log`. (`redact` je podprt zaradi združljivosti za nazaj, vendar **ne** odstrani besedila vbrizga; prepis osebnih podatkov v zahtevi nadzira `PII_REDACTION_ENABLED`.) |
| Prag blokiranja | Možnost `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (vzdevek `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`   | Najnižja stopnja resnosti, potrebna za blokiranje. Pri privzeti nastavitvi je srednja stopnja namenjena samo opazovanju.                                                                                              |

**Prednostni vrstni red načinov** (`getMode`): klicateljeva nastavitev `options.mode` →
**preglasitev funkcijske zastavice v zbirki podatkov** za `INJECTION_GUARD_MODE`
(Nadzorna plošča → Nastavitve → Funkcijske zastavice) → okoljska spremenljivka
`INJECTION_GUARD_MODE` → okoljska spremenljivka `INPUT_SANITIZER_MODE` →
`warn`. Preglasitev na nadzorni plošči ima zato prednost pred okoljskimi
spremenljivkami, tako da uporabniški vmesnik Funkcijske zastavice sproti nadzira
delujoči zaščitni mehanizem (brez ponovnega zagona). Branje zbirke podatkov je
varno ob napaki: če pride do napake, zaščitni mehanizem uporabi vedenje, ki
temelji na okoljskih spremenljivkah, kadar preglasitev ni nastavljena, pa je
vedenje enako razreševanju samo na podlagi okoljskih spremenljivk.

Viri zaznavanja:

1. `sanitizeRequest()` iz `@/shared/utils/inputSanitizer` (skupni nabor
   zaznavalnikov, uporabljen tudi drugje v cevovodu).
2. Vgrajeni `DEFAULT_GUARD_PATTERNS` (trenutno `system_override_inline` in
   `markdown_system_block`, oba z resnostjo `high`).
3. Izbirni `customPatterns`, posredovani prek možnosti konstruktorja (nizi,
   regularni izrazi ali zapisi `{ name, pattern, severity }`).

Ko je `mode === "block"` **in** vsaj ena zaznava doseže prag resnosti,
`preCall` vrne `{ block: true, message: "Request rejected:
suspicious content detected" }`. V načinih `warn`/`log` varovalni mehanizem
zapiše v dnevnik, a klic dovoli. Skupna pomožna funkcija
`evaluatePromptInjection()` je prav tako izvožena za klicatelje, ki morajo
ovrednotiti pozive brez prehoda skozi register.

**Meja skeniranja (v3.8.20):** detektor pregleda le **prvih 16 KB**
združenega besedila poziva – `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 bajtov) v
`src/shared/utils/inputSanitizer.ts`. Oba, `detectInjection()` in
`evaluatePromptInjection()`, pred zagonom zanke vzorcev izvedeta
`slice(0, MAX_INJECTION_SCAN_BYTES)`. Direktive za vbrizgavanje so blizu
začetka vhoda, zato to omeji porabo CPU/GC za regularne izraze pri vhodih
velikosti več sto KB, ne da bi oslabilo zaznavanje (prim.
#3932, #4041).

### Maskirnik poverilnic (`credentialMasker.ts`)

Izvaja se v **obeh** stopnjah, zadnji v privzeti verigi (prioriteta `95`).
Zakrije dobro znane vzorce ključev API / skrivnostnih žetonov v odhodnem
paketu podatkov (vsebina sporočil, argumenti klicev orodij, rezultati orodij)
**in** v odgovoru ponudnika, tako da poverilnica, prilepljena v poziv (ali
vrnjena v odmevu rezultata orodja), ne uhaja ponudniku na zgornjem toku ali
nazaj odjemalcu.

- **Samo z izrecnim vklopom**, enaka konvencija kot pri zakrivanju PII
  (povezano s trdim pravilom #20): onemogočeno, razen če je
  `settings.credentialRedactionEnabled === true` **ali**
  `CREDENTIAL_REDACTION_ENABLED=true`. Ko je izklopljeno, varovalni mehanizem
  ne naredi ničesar – nikoli ne blokira in nikoli ne prepisuje.
- `redactCredentials()` prehodi celotno drevo paketa/odgovora (`walkValue()`,
  varno pred onesnaženjem prototipa, varno pred cikli prek `WeakSet`) in
  ujemanja nadomesti z nadomestnim nizom `[REDACTED:<type>]`, klonira pa le
  veje, ki so se dejansko spremenile.
- `CREDENTIAL_PATTERNS` zajema ključe ponudnikov LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), žetone VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), plačilne ključe (Stripe, Square),
  ključe v oblaku (dostopni ključ AWS, Twilio, SendGrid, Mailgun), zasebne
  ključe / JWT-je, povezovalne nize s poverilnicami (`mongodb://user:pass@...`
  itd.) in splošni vzorec vrednosti glave
  `Authorization`/`x-api-key`/`api-key`/`apikey`. Ključi v obliki glave
  (`authorization`, `x-api-key`, `api-key`,
  `apikey`) se zakrijejo strukturno (samo vrednost, predpona sheme, kot je
  `Bearer `/`Basic `, se ohrani), ne pa prek splošnega besedilnega regularnega
  izraza.
- Varovalni mehanizem nikoli ne blokira; samo prepisuje (`modifiedPayload` /
  `modifiedResponse`) in dodaja oznake (`meta.credentialsRedacted`, `meta.count`).

Regresijska varovalka: `tests/unit/credential-masker-guardrail.test.ts`.

## Osnovna pogodba (`base.ts`)

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
  block?: boolean; // true short-circuits the chain
  message?: string; // surfaced when blocking
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // returned by preCall to rewrite the request
  modifiedResponse?: TValue; // returned by postCall to rewrite the response
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

Varnostna omejitev sporoči »brez spremembe« tako, da vrne `void`, `{}` ali
`{ block: false }`. Vrnjeni `modifiedPayload`/`modifiedResponse` nadomesti
vrednost, ki teče skozi verigo za varnostne omejitve, ki sledijo.
`signal?: AbortSignal` prenaša življenjski cikel klicatelja v varnostne omejitve. Prekinitev zahteve je namerna izjema fail-open: medijski mostovi ustavijo delo in počistijo, ne da bi surove medije obnovili v cilj, za katerega je znano, da jih ne podpira.

## Register (`registry.ts`)

Singleton `guardrailRegistry` izpostavlja:

- `register(guardrail)` — doda (ali nadomesti po normaliziranem imenu) varnostno omejitev in
  ponovno razvrsti po naraščajočem `priority`.
- `clear()` / `list()` — administrativni pomožni metodi.
- `runPreCallHooks(payload, context)` — ponovi aktivne varnostne omejitve, prepelje
  payload skozi `modifiedPayload` in se ustavi ob prvem `block: true`.
- `runPostCallHooks(response, context)` — enak potek na strani odgovora.
- `resetGuardrailsForTests({ registerDefaults })` — počisti stanje in po potrebi
  znova registrira privzete vrednosti za čisto izolacijo testov.

Oba izvajalca vrneta `{ blocked, payload|response, results, guardrail?, message? }`,
kjer je `results` polje zapisov `GuardrailExecutionResult`, ki vsebujejo
polja `blocked`, `skipped`, `modified`, `error` in `meta` za vsako varnostno omejitev,
kar je uporabno za sledenje.

### Onemogočanje varnostnih omejitev na zahtevo

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` združi
razdupliciran seznam imen varnostnih omejitev, ki naj bi bile za trenutno
zahtevo preskočene. Obstaja pet kanalov, ki se berejo v tem vrstnem redu in združijo v en seznam
(ob razdupliciranju zmaga prva pojavitev):

1. `apiKeyInfo.disabledGuardrails`
2. Telo zahteve `disabledGuardrails` (na najvišji ravni)
3. Telo zahteve `metadata.disabledGuardrails` (samo kadar je `metadata` objekt)
4. Glava `x-omniroute-disabled-guardrails`
5. Zapuščena glava `x-disabled-guardrails`

Vseh pet kanalov se združi, vključno z obema glavama: pošiljanje obeh,
`x-omniroute-disabled-guardrails` in `x-disabled-guardrails`, preskoči unijo
njunih seznamov, prazna sodobna glava pa ne skrije več zapuščene
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), popravljeno v
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Vrednosti so lahko polja nizov ali niz, ločen z vejicami; imena se obrežejo
in normalizirajo v male črke v obliki kebab-case (`pii_masker` → `pii-masker`), prazni
vnosi pa se zavržejo. Rezultat se posreduje prek `context.disabledGuardrails`
registru, ki preskoči ustrezne varnostne omejitve (`skipped: true` v `results`).

Seznam onemogočenih vpliva samo na **register**. Način `block` za vbrizgavanje pozivov je
obvezna meja: vmesna programska oprema za zaščito pred vbrizgavanjem
(`src/middleware/promptInjectionGuard.ts`) kliče `evaluatePromptInjection()`
brez kakršnega koli seznama onemogočenih, ki bi ga nadziral klicatelj (mrtvi
klic `resolveDisabledGuardrails({ body })`, ki ga je nekoč izvajala, je bil odstranjen v
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), zato je zahteva,
ki onemogoči `prompt-injection`, v načinu `block` še vedno zavrnjena. To je
namerno. Kanali za onemogočanje so pod nadzorom klicatelja (telo zahteve,
metapodatki, glave) in klicatelj ne sme imeti možnosti izklopiti varnostnega
nadzora, ki ga je nastavil upravljavec
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Unija glav
iz [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
spreminja le, katere varnostne omejitve registra se preskočijo; klientu ne omogoča
obhoda vmesne programske opreme. Obvezne politike varnostnih omejitev na ključ in na skupino so
zabeležene v RFC različice v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Glej [Pokritost in omejitve](#coverage-and-limits).

## Vrstni red izvajanja

Za vsako zahtevo, ki teče skozi `src/sse/handlers/chat.ts` in
`open-sse/handlers/chatCore.ts` (poti družine klepeta, navedene v
[Pokritost in omejitve](#coverage-and-limits)):

1. `resolveDisabledGuardrails(...)` sestavi seznam za preskok iz ključa API, telesa in glav.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` izvaja varovala v naraščajočem
   vrstnem redu prioritete:
   - Onemogočena varovala se zabeležijo kot `skipped`.
   - `preCall` vsakega varovala lahko prepiše vsebino prek `modifiedPayload`.
   - Prvi `block: true` prekine verigo in upravljalnik vrne odgovor z zavrnitvijo zaradi varovala.
3. Morebiti prepisana vsebina vstopi v usmerjanje kombinacij in odpošiljanje v nadrejeni sistem.
4. **Samo nepretakajoči se odgovori:** po sestavljanju odgovora
   `guardrailRegistry.runPostCallHooks(...)` izvede isto verigo na odgovoru. `block: true` tukaj zavrže odgovor nadrejenega sistema in vrne HTTP 400. Pretakani odgovori ta korak v celoti preskočijo.

Varovala, ki vržejo izjemo, se zabeležijo z `error: <message>` in zapišejo v dnevnik prek
`logger.warn`, vendar se veriga nadaljuje – po zasnovi fail-open.

## Pokritost in omejitve

Register varoval je povezan samo s cevovodom klepeta. Te omejitve so določene s
`tests/unit/guardrail-pipeline-wiring-characterization.test.ts` in
`tests/unit/guardrail-pipeline-characterization.test.ts`; te teste namerno posodobite, ko se vedenje spremeni.

### Kje se izvajajo kaveljčki

| Kaveljček / kontrolnik                                            | Izvaja se na                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                                 | Zahteve, ki jih obravnava `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (in `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, ter Telegram posrednik za klepet. Tudi testna končna točka nadzorne plošče `/api/guardrails/test`. Blokada pred klicem vrne HTTP 400. |
| `runPostCallHooks`                                                | Samo **nepretakajoči se** odgovori klepeta (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Pretakani odgovori nikoli ne pridejo do njega.                                                                                                                                                                                                                                                                                               |
| PII pri pretakanju                                                | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), vključen v cevovod v `streamingPipeline.ts`, ko je `PII_RESPONSE_SANITIZATION` vklopljen. Ni varovalo, zato kanali za onemogočanje ne vplivajo nanj.                                                                                                                                                                                                                              |
| Vmesna programska oprema za zaščito pred injiciranjem (zapuščena) | Vsaka pot `/v1`, ki vsebuje poziv, vključno z družino klepeta (glejte [pokritost poti](#injection-guard-route-coverage--red-team-phase-8--block-d)). Samo za injiciranje poziva.                                                                                                                                                                                                                                                                |

### Kaj ni pokrito

- **Medijske poti, poti za vdelave in podatkovne poti** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) nikoli ne dosežejo registra. Tam se ne
  izvajajo maskiranje PII, maskiranje poverilnic ali most med modalnostmi. Njihovo edino
  preverjanje je zapuščena vmesna programska oprema za zaščito pred injiciranjem.
- **Pretakani odgovori** ne dobijo varoval po klicu: brez `pii-masker` ali
  `credential-masker` po klicu in brez blokade po klicu. Uporabi se samo preoblikovanje PII
  pri pretakanju (ko je `PII_RESPONSE_SANITIZATION` vklopljen). Poverilnica, ki se vrne v pretakanem odgovoru, ni zakrita.
- **Kanali za onemogočanje v primerjavi z vmesno programsko opremo (po zasnovi):** vmesna programska oprema ovrednoti
  injiciranje poziva z lastnim klicem `evaluatePromptInjection()`, ne da bi posredovala seznam za onemogočanje, ki ga nadzoruje klicatelj. Način `block` je obvezna meja, ki je onemogočitve, ki jih nadzoruje klicatelj, ne morejo obiti, tudi na poteh družine klepeta
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Onemogočanje
  `prompt-injection` preskoči samo varovalo v registru.

### Kaj vidi odgovor pred varovali po klicu

Na poti brez pretakanja je vrstni red: pridobivanje spomina → izvajanje vgrajenih orodij →
varovala po klicu → izhod ob blokadi po klicu → shramba semantičnega predpomnilnika.

- **Izluščenje spomina** in **izvajanje orodij** vidita odgovor, preden ga varovala po klicu lahko prepišejo ali blokirajo. Od
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) dalje izluščenje spomina pošlje izluščeno besedilo skozi `sanitizePII`, ko je
  `PII_RESPONSE_SANITIZATION` vklopljen (tako pri pretočnem kot pri nepretočnem načinu), vendar je bil odgovor, ki ga varovala po klicu pozneje blokirajo, vseeno ponujen spominu in orodjem.
- **Semantični predpomnilnik** shrani odgovor po obdelavi po klicu, zato shrani prepisan odgovor, blokiran odgovor pa se nikoli ne shrani v predpomnilnik. Vnosi v predpomnilniku so ključeni glede na posamezni API ključ.

## Konfiguracija

Okoljske spremenljivke, ki jih berejo vgrajene zaščite:

| Spremenljivka                         | Uporablja                 | Učinek                                                                                                                  |
| ------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`        | Nastavite `false`, da popolnoma onemogočite zaznavanje.                                                                 |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`        | Pravilo za injiciranje: `warn`, `block` ali `log`. Starejša vrednost `redact` ne prepiše besedila injiciranja.          |
| `INJECTION_GUARD_MODE`                | `prompt-injection`        | Način za zaščito pred injiciranjem; tudi funkcijska zastavica v bazi, ki **prepiše** okoljske spremenljivke (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`        | Najnižja resnost, ki jo `MODE=block` zavrne: `high` (privzeto), `medium` ali `low`.                                     |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`        | Starejši alias za `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`              | Ko je `true`, se PII v zahtevi redigira (neodvisno od načina injiciranja).                                              |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (downstream) | Nadzoruje vedenje maskerja na strani odgovora.                                                                          |

Zaščite Modality Bridge berejo konfiguracijo izvajanja iz shrambe nastavitev, podprte z bazo (`getSettings()`), ne iz okoljskih spremenljivk. Primarni ključi za Vision so `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` in `modalityBridgeCacheMaxEntries`. Starejši ključi `visionBridge*` so sprejeti le kot dokumentirano nadomestno branje za en cikel; zapisi v nadzorni plošči uporabljajo primarne ključe. Privzete vrednosti in razreševalnik nadomestnih vrednosti se nahajajo v `src/shared/constants/modalityBridgeDefaults.ts`, starejše konstante pa so ohranjene v `src/shared/constants/visionBridgeDefaults.ts`.

Avdio uporablja `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`, `modalityBridgeAudioTimeout` in `modalityBridgeAudioMaxClips` ter skupne nastavitve `modalityBridgeCache*`. Avdio nima nadomestnega načina za starejše ključe, ker so bili ti ključi uvedeni s shemo Modality Bridge.

Video uporablja `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`, `modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`, `modalityBridgeVideoMaxVideos` in `modalityBridgeVideoTimeout` ter skupne nastavitve `modalityBridgeCache*`. Privzeto je onemogočen, ker sta FFmpeg/ffprobe neobvezni operativni odvisnosti in opisovanje sličic povečuje zakasnitev in stroške modela.

## Zaščitni mehanizmi po meri

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

Koraki:

1. Ustvarite `src/lib/guardrails/myGuardrail.ts`, ki razširja `BaseGuardrail`.
2. Implementirajte `preCall` in/ali `postCall`.
3. Registrirajte ga ob uvozu (dodajte ga iz `registerDefaultGuardrails`) ali
   med izvajanjem pokličite `guardrailRegistry.register(...)` — register zamenja
   vsak predhodni zaščitni mehanizem z enakim normaliziranim imenom.
4. Dodajte teste v `tests/unit/` (obstoječi primeri:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Testiranje

Med testi uporabite `resetGuardrailsForTests()`, da vsak test začnete iz znanega stanja.
Podajte `{ registerDefaults: false }`, da začnete s praznim registrom in
registrirate samo zaščitne mehanizme, ki jih testirate. Vision Bridge podpira vstavljanje
odvisnosti (`deps.getSettings`, `deps.callVisionModel`); Audio Bridge ponuja
enakovredne vmesnike za nastavitve, zmogljivosti, izbiro modela STT, preverjanje
poverilnic in prepisovanje. Testi lahko zato preverijo oba poteka brez dostopa
do podatkovne zbirke ali omrežja.

## Glejte tudi

- `src/lib/guardrails/` — implementacija
- `src/shared/utils/inputSanitizer.ts` — detektor v skupni rabi, ki omogoča
  zaznavanje vstavljanja pozivov in maskiranje osebno določljivih podatkov
- `src/shared/constants/visionBridgeDefaults.ts` — privzete nastavitve Vision Bridge in
  seznam modelov s prisilno uporabo mostu
- `src/shared/constants/modalityBridgeDefaults.ts` — privzete nastavitve izvajalnega okolja za Vision/Audio v skupni rabi
- `docs/architecture/RESILIENCE_GUIDE.md` — pravokotna plast (odklopnik, obdobja ohlajanja)
- `docs/reference/ENVIRONMENT.md` — popoln seznam spremenljivk okolja

## Pokritost poti z zaščito pred vstavljanjem in red-team testiranje (8. faza · sklop D)

Zaščita pred vstavljanjem (`createInjectionGuard` / `withInjectionGuard`) pokriva vse poti,
ki sprejemajo uporabniške pozive. Upošteva `INJECTION_GUARD_MODE` (privzeto `warn` = samo beleženje;
`block` = vrne HTTP 400 `SECURITY_001`).

| Vrsta                | Poti                                                                                                                                                 | Privzeti način |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Besedilo (obstoječe) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | opozarjanje    |
| Generativno          | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | opozarjanje    |
| Podatki              | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | opozarjanje    |

Izločanje besedila (`extractMessageContents`) pokriva `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team testiranje (vsako noč, `nightly-llm-security.yml`):** promptfoo preveri, da vsaka pot blokira
korpus OWASP-LLM v načinu `INJECTION_GUARD_MODE=block`; garak izvaja preizkuse (brez skrivnosti jih preskoči).
`moderations` je vključena zaradi doslednosti. Način blokiranja je obvezna meja: `evaluatePromptInjection()`
prezre seznam onemogočenih elementov za posamezno zahtevo, ki mu ga posreduje vmesna programska oprema, zato
`disabledGuardrails` poti **ne** izvzame iz tega ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Nočni delovni tok (`.github/workflows/nightly-llm-security.yml`, cron + ročni
zagon) ima dve opravili:

- **`promptfoo-guard` (blokirajoče)** — izvede `promptfoo eval -c promptfooconfig.yaml`
  z `INJECTION_GUARD_MODE=block`. Vsak nasprotovalni primer (npr. »prezri vsa
  prejšnja navodila …«, pobegi iz omejitev v slogu DAN) preveri, ali odgovor vsebuje
  `error.code === "SECURITY_001"`, kar pomeni, da je zaščita zahtevo dejansko zavrnila.
- **`garak` (svetovalno)** — izvede garak `--probes promptinject,dan,leakreplay`
  proti lokalnemu primerku OmniRoute (`http://localhost:20128/v1`). Pogojeno je s
  skrivnostjo ponudnika (`PROMPTFOO_PROVIDER_KEY`); če ta ni na voljo, se opravilo brez težav
  preskoči, dodana pa mu je pripona `|| true`, zato poroča brez povzročitve neuspeha CI.

Pokritost pomožne funkcije zaščite (`createInjectionGuard` / `withInjectionGuard`)
obsega vsako pot `/v1`, ki vsebuje pozive; besedilo poziva se pridobi iz
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` s funkcijo
`extractMessageContents()` v `src/shared/utils/inputSanitizer.ts`.
