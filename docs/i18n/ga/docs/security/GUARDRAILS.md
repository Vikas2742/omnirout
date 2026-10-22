# Guardrails (Gaeilge)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇫🇷 [fr](../../../fr/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Foinse na fírinne:** `src/lib/guardrails/`
> **Nuashonraithe go deireanach:** 2026-10-17 — v3.8.52 (cuireadh [Cumhdach agus teorainneacha](#coverage-and-limits) leis:
> na bealaí agus na conairí freagartha a shroicheann na crúcaí, na ceanntásca cumaiscthe díchumasaithe (#16412), mód blocála
> ionsáite mar theorainn éigeantach (#16413), agus céard a fheiceann freagra roimh iarghlao)

Cuireann ráillí cosanta sábháilteacht, beartas agus claochluithe inneachair i bhfeidhm ag an teorainn
idir OmniRoute agus soláthraithe réamhtheachtacha. Is féidir le gach ráille cosanta ualaí pá iarratais (`preCall`) agus
freagraí réamhtheachtacha (`postCall`) a iniúchadh (agus, go roghnach, iad a dhiúltú, a chlaochlú nó nóta a chur leo).

Tá an córas **oscailte i gcás teipe**: má chaitheann ráille cosanta earráid agus é á rith, déanann an chlárlann
an earráid a thaifeadadh agus leanann sí ar aghaidh chuig an gcéad ráille cosanta eile seachas
an t-iarratas a chur ó mhaith. Is cinneadh sainráite é blocáil (`block: true`), ní timpiste riamh.
Is é iarratas tobscoir an t-aon eisceacht: nuair a chuirtear `signal` an ghlaoiteora ar ceal,
diúltaíonn ráille cosanta a chaitheann earráid don rith crúca seachas é a scipeáil.

Ní ritheann na crúcaí ar gach bealach ná ar gach freagra. Léigh
[Cumhdach agus teorainneacha](#coverage-and-limits) sula mbraitheann tú ar ráille cosanta mar
rialúchán slándála.

## Ráillí Cosanta Ionsuite

Déanann an chlárlann sé ráille cosanta a lódáil go huathoibríoch in ord tosaíochta tráth iompórtála
(féach `registry.ts` → `registerDefaultGuardrails()`):

| Tosaíocht | Ainm                | Céim(eanna)    | Comhad                |
| --------- | ------------------- | -------------- | --------------------- |
| `5`       | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`       | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`       | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`      | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`      | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`      | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Ritheann uimhreacha tosaíochta níos ísle **ar dtús**.

### Droichead Físe (`visionBridge.ts`) — Droichead Módúlachta PR-1

Tá meiteashonraí follasacha `supportsVision:false` sa chlárlann/tsonraíocht ag an mbunsamhail GLM 5.3 agus ag `glm-5.3-{low,high,max}`.
Fanann leaganacha GLM 5.3 Flash mar shamhlacha dúchasacha físe.
Téann bealach `/v1/messages` Claude Code isteach sa slabhra comhroinnte ráillí cosanta réamhghlao `handleChat` **sula** ndéantar
aistriúchán ó Claude go OpenAI; ní mór cur síos a dhéanamh ar íomhánna neadaithe i dtorthaí uirlise `Read`, nó iad a láimhseáil,
sula n-ardaíonn an t-aistriúchán sin iad go hinneachar OpenAI `image_url` (#17069).

Idircheapann sé iarratais ina bhfuil íomhánna agus atá dírithe ar **shamhlacha gan fís**, agus déanann sé ceann amháin díobh seo:
an t-iarratas iomlán a athródú chuig samhail atá in ann fís a láimhseáil, nó téacs tuairisciúil a tháirgeann samhail físe inchumraithe a chur
in ionad na gcodanna íomhá roimh an nglao réamhtheachtach. Ligeann sé seo do sholáthraithe téacs-amháin
ualaí pá ilmhódacha a láimhseáil go trédhearcach.

Sreabhadh:

1. Scipeáil má thacaíonn an spriocshamhail le fís cheana féin (mura bhfuil sí le feiceáil sa
   liosta droichid éigeantaigh `isVisionBridgeForcedModel`).
2. Bain codanna íomhá amach trí `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), a tharmligeann chuig an **mbrathadóir aontaithe meán**
   `detectMediaParts()` in `open-sse/utils/mediaParts.ts` — an
   t-aon fhoinse fírinne amháin atá comhroinnte leis an scagaire comhoiriúnachta teaglama.
   Tá eastóscadh teoranta do liosta ceadaithe de na cruthanna is féidir le `replaceImageParts` a chur isteach
   arís (an conradh eastósctha↔athsholáthair): OpenAI `image_url`, foinse base64 Anthropic
   `source.type:"base64"`, URL Anthropic `source.type:"url"`, agus `input_image` an Responses
   API. Déantar íomhánna comhoiriúnacha atá neadaithe laistigh de `tool_result.content` Claude Code
   agus aschuir uirlise Responses a eastóscadh agus a athsholáthar ag a gconairí bunaidh freisin; is ábhar
   don scagaire teaglama iad cruthanna táscaire amháin agus ní dhéantar iad a eastóscadh.
   Scipeáil mura n-aimsítear aon cheann.
3. Réitigh cumraíocht am rite trí `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`): bíonn bua ag na heochracha socruithe nua `modalityBridge*`;
   fanann na heochracha oidhreachta `visionBridge*` mar **chúltaca aon timthrialla**
   (fuinneog aisrollta). Scipeáil roimh aon trasnú meán nuair atá an
   droichead díchumasaithe.
4. Cinneann roghnóir an mhóid (`modalityBridgeVisionMode`, féach an tábla thíos)
   idir athródú agus cur síos. Tugann athródú `modifiedPayload` ar ais agus gan ach `model`
   malartaithe, chomh maith le meiteashonraí `{ rerouted, fromModel, toModel, imagesKept }`.
5. Conair an chur síos: cuir teorainn `maxImages` le líon na n-íomhánna, cum an leid atá feasach ar an tasc,
   féach i dtaisce an chur síos, glaoigh ar an tsamhail físe **go comhthreomhar**
   (`Promise.allSettled`), agus cuir codanna téacs `[Image N]: <description>` isteach
   ina n-áit. Má theipeann ar chur síos, faightear `null`: coinnítear an íomhá amh do
   spriocanna anaithnide/in ann fís a láimhseáil (#4012), ach faigheann **sprioc dhíreach dheimhnithe téacs-amháin**
   nó teaglama gan aon chumas físe blúire téacs follasach
   `(unavailable — no vision-capable provider connected)` do
   gach íomhá nach bhfuil cur síos uirthi, lena n-áirítear teipeanna páirteacha agus íomhánna thar
   theorainn na nglaonna cur síos (#17069). Fanann an cúltaca cur síos teaglama atá ann cheana nuair a theipeann ar gach iarracht
   i bhfeidhm (#8430).
6. Tabhair `modifiedPayload` + meiteashonraí ar ais (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Roghnóir móid (`modalityBridgeVisionMode`)

| Mód        | Réamhshocrú | Iompar                                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `auto`     | ✔           | Heorastúil oidhreachta, gan athrú (#6640/#7204): atreoraítear samhlacha neamh-theaglama/`auto/` chuig an tsamhail físe is fearr mura bhfuil dintiúir inúsáidte ag an mbunsamhail cheana féin (agus sa chás sin déantar cur síos); déanann spriocanna teaglama cur síos i gcónaí.                                                                       |
| `describe` |             | Déan cur síos i gcónaí — scipeáiltear an bloc atreoraithe go hiomlán; freagraíonn samhail roghnaithe an úsáideora i gcónaí.                                                                                                                                                                                                                            |
| `reroute`  |             | Cuir an t-atreorú i bhfeidhm: seachnaítear an chosaint a choinníonn an tsamhail a bhfuil dintiúir aici. Tá cosaint dhintiúir na **sprice** atreoraithe fós i bhfeidhm — nuair nach bhfuil aon sprioc físe inúsáidte ann, blocálann an droichead le hearráid shoiléir seachas cur síos a dhéanamh nó íomhánna amh a sheoladh chuig sprioc téacs-amháin. |

Déanann na modhanna éigeantacha gearrchiorcadú **sula** ritear an heorastúil uathoibríoch; tá iompar `auto`
comhionann beart ar bheart leis an gcosaint réamh-PR-1.

#### Raon feidhme na heochrach API (`visionBridgeKeyScope.ts`)

Nuair a chuireann eochair API an ghlaoiteora srian ar `allowedConnections`, ar chomhthiomsuithe cuóta
(`allowedQuotas`) nó ar shamhlacha (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), ní roghnaíonn an droichead ach
samhlacha atreoraithe agus cur síos a bhfuil cead ag an eochair iad a úsáid, ar naisc a bhfuil cead ag an eochair
iad a úsáid. Ansin téann an glao cur síos tríd an bhféin-lúb OmniRoute i gcónaí leis
an gceanntásc `x-omniroute-self-loop-key-id`, ionas go bhforfheidhmíonn an t-iarratas comhrá glactha
polasaí na heochrach sin maidir le naisc agus samhlacha arís. Ní thugann `enforceApiKeyPolicy()`
aitheantas don cheanntásc sin ach in éineacht le hiompróir na féin-lúibe, mar sin ní féidir leis
ach rochtain a chúngú, agus diúltaítear d'aitheantas nach féidir a réiteach.

Mura gceadaítear aon samhail físe don eochair, diúltaíonn **sprioc atá deimhnithe mar
sprioc téacs-amháin** don iarratas íomhá go háitiúil le HTTP 400 soiléir seachas
bearta na híomhá a chur ar aghaidh chuig seirbhís réamhtheachtach nach bhfuil ábalta iad a láimhseáil (#17069). I gcás spriocanna a bhfuil
cumas físe anaithnid nó dúchasach acu, coinníonn an chonair cur síos a hiompar oscailte-ar-theip roimhe seo
(meiteashonraí `{ skipped: true, reason: "no_permitted_vision_model" }`).
Iompraíonn iarratais gan eochair, agus eochracha gan na srianta seo, díreach mar
a rinne siad roimhe seo.

#### Leid cur síos atá feasach ar an tasc (`modalityBridgeVisionTaskAware`)

**true** de réir réamhshocraithe. Cuireann `composeVisionPrompt()` (`visionBridgeHelpers.ts`) téacs na
**teachtaireachta úsáideora deireanaí** (teasctha go 500 carachtar) leis an mbunleid
cur síos, rud a threoraíonn an cur síos i dtreo an mhéid a d'iarr an t-úsáideoir i ndáiríre
(patrún codex-vision-proxy) agus a iarrann ar an tsamhail físe téacs infheicthe a thras-scríobh.
Agus an bhratach múchta — nó mura bhfuil téacs úsáideora ann — úsáidtear an bhunleid gan athrú.

Iarrann iarratas OpenAI-chomhoiriúnach féin na féin-lúibe cur síos (`callVisionModelSingle()`
in `visionBridgeHelpers.ts`) `image_url.detail: "high"` i gcónaí —
gan choinníoll, do gach glaoiteoir/soláthraí, gan a bheith faoi réir aon chomhartha cliaint.
Déanann sampláil íseal-mhionsonraithe cruinneas OCR a dhíghrádú don tasc tras-scríofa téacs
go díreach a iarrann an leid seo, mar sin iarrann an glao cur síos féin ardleibhéal
mionsonraí i gcónaí, beag beann ar an leibhéal mionsonraí a d'úsáid an bun-iarratas isteach. Ní
imríonn sé seo tionchar ach ar chorp inmheánach an iarratais cur síos; ní athraíonn sé an chaoi a
gcuireann OmniRoute `image_url.detail` an ghlaoiteora féin ar aghaidh ar an bpríomhiarratas —
cuirtear an réamhshocrú sin i bhfeidhm ar leithligh, agus do chliaint OpenCode braite amháin, in
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). Níl aon réimse `detail`
sa bhrainse sreangfhormáide Anthropic den fhéin-lúb cur síos agus ní dhéanann ceachtar
réamhshocrú difear dó.

#### Uasteorainn aschurtha an chur síos (`modalityBridgeVisionMaxChars`)

| Eochair                        | Réamhshocrú | Raon             |
| ------------------------------ | ----------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`         | `0` nó 100–50000 |

Ciallaíonn `0` (an réamhshocrú) **gan uasteorainn** — cuirtear an cur síos a thugann
`callVisionModel()` ar aghaidh gan athrú, agus caomhnaítear an t-iompar reatha.
Teascann aon luach sa raon 100–50000 an cur síos le hiarmhír
`…` sula gcuirtear ar ais é mar `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` in `src/lib/guardrails/visionBridge.ts`).
Ardaigh é seo do thascanna OCR a bhfuil neart mionsonraí iontu, nuair a bhíonn an
tras-scríobh iomlán ag teastáil ón tsamhail iartheachtach; ísligh é chun úsáid comharthaí a theorannú ar
shamhlacha físe róchainteacha. Tá réimse an deais i bpainéal Casta na cluaisíní Físe
(`modality-bridge-max-chars` in `ModalityBridgeVisionTab.tsx`) agus teanntar aon
luach idir 1 agus 99 suas go dtí an t-íosmhéid 100, agus fágtar `0` sainráite
gan athrú — is luach bailí Zod ann féin é `0`
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), ní hé
an réamhshocrú "neamhshocraithe" amháin é.

#### Taisce cur síos (`modalityBridge/bridgeCache.ts`)

Taisce LRU + TTL sa chuimhne d'aschuir cur síos, roinnte ar fud an phróisis.
Eochair = `sha256(imageRef + composedPrompt + configuredBridgeModel)` le
frámú réimír faid (gan imbhuailtí teorann réimse). Is í comhpháirt na samhla an tsamhail droichid
**chumraithe**, ní an tsamhail a d'fhreagair i ndáiríre —
d'fhéadfadh `callVisionModel` cúltitim go hinmheánach, agus scoiltfeadh eochrú de réir gach iarrachta
an taisce. Ní dhéantar cur síos teipthe a thaisceadh riamh. Socruithe:

| Eochair                         | Réamhshocrú | Raon    |
| ------------------------------- | ----------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`      | —       |
| `modalityBridgeCacheTtlMinutes` | `60`        | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`       | 10–5000 |

#### Normalú cianíomhánna (féinlúb tuairiscithe/aisghabháil base64)

Nuair a aisghabhann an droichead íomhá **chianda** é féin — an fhéinghlao tuairiscithe Anthropic agus an tiontú base64 i bhformáid sreinge Claude (`ensureBase64ImagesForClaudeWire`), an dá cheann trí `fetchRemoteImageAsDataUri()` in `visionBridgeHelpers.ts` — cuirtear an URI sonraí a bhíonn mar thoradh air trí `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) sula leabaítear é san iarratas ar an tsamhail amhairc. Laghdaítear íomhánna rómhóra go **ciumhais fhada 2048px** (ag teacht leis an uasteorainn athraithe méide a chuireann OpenAI/Anthropic i bhfeidhm ar thaobh an fhreastalaí cheana féin), rud a laghdaíonn líon na mbeart uaslódála agus an aga folaigh gan athrú a dhéanamh ar an méid a fheiceann an tsamhail amhairc. Úsáidtear `sharp` don athrú méide, agus lódáiltear é trí iompórtáil dhinimiciúil: ar ardán nach féidir a dhénártha dúchasach a lódáil air, **ní chaitheann** `normalizeDataUri()` eisceacht riamh — téann sé siar chuig seoladh tríd na mbeart bunaidh, ionas go leanann an chonair tuairiscithe/tiontaithe base64 de bheith ag obair i gcónaí. Seoltar bearta nach íomhánna iad (aisghabháil nár thug íomhá dhíchódaithe ar ais) tríd gan athrú freisin. Tá an normalú seo teoranta d’íomhánna a aisghabhann an droichead dá fhéinghlao féin — ní chuirtear i bhfeidhm riamh é ar phálasta amh an ghlaoiteora a sheoltar tríd, i gcomhréir leis an bprionsabal nach gceadaítear sóchán ach trí roghnú isteach (Riail Dhocht #20).

#### Scéimre socruithe + asc(i)ú

Déantar bailíochtú Zod ar na heochracha nua `modalityBridge*` in `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`): `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, an tríréad `modalityBridgeCache*`, agus an grúpa `modalityBridgeAudio*` a úsáideann an Droichead Fuaime. Cóipeálann asc(i)ú `141_modality_bridge_settings.sql` luachanna oidhreachta `visionBridge*` atá ann cheana chuig na heochracha nua comhfhreagracha (tá sé idéimitheach agus ní fhorscríobhann sé riamh luach `modalityBridge*` atá socraithe ag oibreoir); glactar leis na heochracha oidhreachta fós mar chúltaca léite ar feadh timthriall eisiúna amháin.

#### Ceanntásc trédhearcachta + staitisticí

Bíonn an méid seo a leanas ar fhreagraí a chlaochlaítear trí thuairisciú:
`x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>`
(tógtha ag `buildModalityBridgeHeader()` in `modalityBridge/bridgeStats.ts`, agus stampáilte ag `withModalityBridgeHeader()` in `src/sse/handlers/chatHelpers.ts`). Ní fhaigheann iarratais athródaithe ceanntásc ar bith — níor athraíodh an pálasta agus tá malartú na samhla le feiceáil cheana féin i réimse `model` chorp an fhreagra.

Tugann `GET /api/modality-bridge/stats` (fíordheimhniú bainistíochta, an tsraith chéanna le `GET /api/settings`) na háiritheoirí in-chuimhne de réir módúlachta `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` ar ais do `vision`, `audio`, agus `video`. Úsáideann `averageLatencyMs` `latencySamples`, seachas gach iarracht, mar ainmneoir; ní chruthaíonn oibríocht gan tomhas ama sampla bréige nialas milleasoicind. Fanann `bridged` mar ailias atá comhoiriúnach siar do thiontuithe rathúla; ní incrimintíonn iarrachtaí teipthe é.
Athshocraítear na háiritheoirí nuair a atosaítear an próiseas de réir dearaidh
(teiliméadracht, ní cuntasaíocht).

#### Cumraíocht an deais

Is é `/dashboard/settings/modality-bridge` leathanach tiomnaithe an deais. Caomhnaíonn a chluaisíní `Vision`, `Audio`, agus `Video`, ar féidir iad a sheoladh trí URL, paraiméadair iarratais agus luach `tab` á athrú. Taispeánann an cluaisín Vision cumasú, mód, roghnú samhla (lena n-áirítear an réamhshocrú uathoibríoch), leideanna a bhíonn feasach ar an tasc, ardteorainneacha don teorainn ama/líon íomhánna/fad tuairisce/taisce, áiritheoirí rite, agus iarratas samplach cosanta. Tá an cluaisín Audio beo freisin: taispeánann sé cumasú, roghnóir samhla STT amháin le Auto, teorainneacha ama/uasmhéid gearrthóige, áiritheoirí fuaime, agus tástáil shamplach `input_audio`. Tá an cluaisín Video feidhmiúil: tuairiscíonn sé staid rite FFmpeg/ffprobe — ceann de cheithre staid shainráite UI (`unknown` fad atá an tóireadóir ar siúl nó murarbh fhéidir é a chur i gcrích, `restricted` ar óstach deais nach óstach lúb-ais é agus ina ndéantar an tóireadóir a scipeáil ar thaobh an chliaint, `unavailable` tar éis tóraíocht a dhéanamh agus a dheimhniú go bhfuil sé ar iarraidh, nó `available` mar aon leis na leaganacha FFmpeg/ffprobe) — buanchoimeádann sé teorainneacha cumasaithe/samhla/fráma/físeáin/ama, scagann sé an roghnóir samhla chuig samhlacha a thacaíonn le fís, agus taispeánann sé áiritheoirí físeáin.

Is nasc comhoiriúnachta chuig an leathanach nua anois é an seanchárta Droichead Físe faoi shocruithe IS; níl an dara cóip den fhoirm faoina chúram a thuilleadh. Nascann Soláthraithe Meán sreafaí oibre Íomhá-go-Téacs agus Caint-go-Téacs leis na cluaisíní comhfhreagracha sa Droichead Módúlachta freisin, gan an clós súgartha Caint-go-Téacs atá ann cheana a bhaint.

**Seachbhóthar iontrála don fhéinlúb:** nuair a théann an glao tuairiscithe trí fhéinlúb `/v1` OmniRoute féin (samhail soláthraí neamhchaighdeánach), seolann an fo-iarratas `x-omniroute-admission-bypass: internal` agus déantar é a fhíordheimhniú le dintiúr réitithe na féinlúibe — an comhartha áitiúil `sk_omniroute` sa mhód áitiúil, nó an eochair timpeallachta `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` atá cumraithe ag an oibreoir (#1350), ionas gur féidir le himscaruithe `REQUIRE_API_KEY=true` an glao tuairiscithe a rith fós. Ní thugtar aitheantas don tseachbhóthar ach do na dintiúir bheachta sin, mar sin ní féidir le cliaint sheachtracha an ceanntásc a úsáid chun iontráil a sheachaint.

Tá na réamhshocruithe oidhreachta in `src/shared/constants/visionBridgeDefaults.ts`; tá na réamhshocruithe nua móid/feasachta ar thasc/taisce agus réiteoir na socruithe in `src/shared/constants/modalityBridgeDefaults.ts`. Taispeánann an ráille cosanta rogha cruthaitheora `deps` ionas gur féidir le tástálacha feidhmiúcháin bhréige `getSettings` agus `callVisionModel` a instealladh.

### Droichead Fuaime (`audioBridge.ts`) — Droichead Módúlachta PR-3

Idircheapann sé iarratais chomhrá a bhfuil fuaim iontu sula sroicheann siad sprioc nach eol go nglacann sí le hionchur fuaime. Ní athródaíonn sé an t-iarratas comhrá riamh: tras-scríobhtar codanna fuaime tríd an gcríochphointe ilpháirteach atá comhoiriúnach le OpenAI cheana féin agus leanann an tsamhail chomhrá roghnaithe ar aghaidh le tras-scríbhinní téacs.

Sreabhadh:

1. Réitigh `supportsAudio` trí `getResolvedModelCapabilities()`. Bíonn tosaíocht ag
   meiteashonraí follasacha ó chlár na soláthraithe, ansin ag meiteashonraí
   statacha na samhla, agus ansin ag `modalities_input` sioncronaithe. Is é
   `false` liosta ionchuir fógartha nach bhfuil `audio` ann; mura bhfuil aon
   fhianaise chumais ann, fanann sé mar `null`. Gníomhachtaíonn `false` agus
   `null` araon an droichead coimeádach, agus seachnaíonn `true` é.
2. Réitigh socruithe `modalityBridgeAudio*` agus bain páirteanna fuaime
   barrleibhéil is féidir a splicáil as gach teachtaireacht tríd an mbrathadóir
   comhroinnte `detectMediaParts()`. Is iad na cruthanna sreinge a dtacaítear
   leo ná `input_audio`, `audio_url` de chuid OpenAI, agus
   `source.media_type: "audio/*"`. Braitear fuaim neadaithe chun í a ródú ach
   ní bhaintear í le conair an splicing. Cuirtear teorainn leis an obair le
   `modalityBridgeAudioMaxClips`; fágtar páirteanna níos déanaí gan athrú.
3. Cloígh le `provider/model` cumraithe, nó lig do
   `selectAudioBridgeModel()` siúl trí `AUDIO_TRANSCRIPTION_PROVIDERS` in ord
   cobhsaí na catalóige agus an chéad mhúnla a roghnú a bhfuil dintiúr
   soláthraí gníomhach inúsáidte aige.
4. Tiontaíonn `callAudioTranscription()` fuaim base64/data-URI ina `file`
   ilpháirteach, nó íoslódálann sé `audio_url` cianda tríd an ngarda amach
   poiblí amháin le feannadh DNS agus teorainn 25 MB. Ansin déanann sé POST den
   chomhad agus den mhúnla roghnaithe chuig an bhféinlúb áitiúil
   `/v1/audio/transcriptions`, arna fhíordheimhniú le
   `resolveSelfLoopBearer()`. Déanann an bealach tras-scríofa atá ann cheana
   gnáthchuardach dintiúr, láimhseáil tréimhse mhaolaithe/teorannaithe ráta,
   agus seoladh chuig an soláthraí.
5. Cuirtear `[Audio N]: <transcript>` in ionad a bpáirteanna i gcás glaonna
   rathúla. Ritheann glaonna le `Promise.allSettled`: má theipeann ar ghlao
   aonair, caomhnaítear an bhunpháirt fuaime sin (conradh #4012). Má theipeann
   ar gach glao agus má tá sé cruthaithe gur `supportsAudio === false` atá sa
   sprioc, déantar
   `[Audio N]: (unavailable — no STT provider connected)` de na páirteanna
   (conradh #8430). I gcás sprioc anaithnid (`null`), fágtar an toradh gan
   athrú má theipeann ar gach glao. Faigheann sprioc atá cruthaithe a bheith
   téacs-amháin agus nach bhfuil dintiúr STT inúsáidte aici an stub follasach
   céanna gan glao líonra a dhéanamh.

Úsáideann tras-scríbhinní rathúla taisce LRU/TTL uile-phróisis an Droichid
Módúlachta. Comhcheanglaíonn an eochair an tagairt fuaime, lipéad cobhsaí na
hoibríochta `audio-transcription`, agus an tsamhail STT roghnaithe; ní chuirtear
teipeanna i dtaisce riamh. Nuashonraíonn iarrachtaí fuaime na cuntair
chomhroinnte `bridged`, `cacheHits`, `failures`, agus `lastUsedAt`. Iompraíonn
freagraí claochlaithe
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>`; ní
fhaigheann iarratais gan athrú deighleog den Droichead Fuaime.

Tá na socruithe rite tacaithe ag bunachar sonraí agus bailíochtaithe le Zod:

| Eochair                       | Réamhshocrú | Raon                           |
| ----------------------------- | ----------- | ------------------------------ |
| `modalityBridgeAudioEnabled`  | `true`      | —                              |
| `modalityBridgeAudioModel`    | `""`        | Uathoibríoch nó aitheantas STT |
| `modalityBridgeAudioTimeout`  | `60000`     | 1000–300000                    |
| `modalityBridgeAudioMaxClips` | `3`         | 1–10                           |

Leanann `modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries` de rialú na taisce comhroinnte.

### Droichead Físe (`videoBridge.ts`, `videoBridgePipeline.ts`)

Idircheapann sé páirteanna físe barrleibhéil i `messages` Chat Completions agus
in `input` Responses API sula nglaoitear ar sprioc nach eol go bhfuil tacaíocht
dhúchasach físe aici. Is iad na cruthanna a dtacaítear leo ná `input_video`,
`video_url`, `video_source`, URLanna HTTPS, agus URIanna sonraí
`data:video/*;base64,...`. Ní chaitear le gnáthainmneacha comhaid i dtéacs mar
fhíseáin.

Is le `VideoBridgeGuardrail.preCall` (`videoBridge.ts`) trasnú na hiarrata,
an tseiceáil cumais/beartais, comhiomlánú in aghaidh na hiarrata, agus pálasta
an fhreagra. Tá obair in aghaidh an fhíseáin — fáil, taisce an toraidh iomláin,
cur síos ar sheicheamh frámaí (a chomhcheanglaíonn aon tras-scríbhinn fuaime a
d'fhógair an glaoiteoir), agus méadrachtaí/tobscor/glanadh in aghaidh na
hiarrachta — folaithe taobh thiar de `processVideoPart` in
`videoBridgePipeline.ts`, a nglaoitear air uair amháin in aghaidh gach páirte
físe laistigh de lúb `preCall`. Sainíonn an modúl sin teorainneacha follasacha
na bport freisin: `VideoMediaBrokerPort` (bearta a fháil agus frámaí sampláilte
a bhaint), `VideoAudioTranscriptionPort` (tras-scríbhinn fuaime a d'fhógair an
glaoiteoir a chomhcheangal leis na fotheidil shampláilte), agus
`VideoDrilldownPort` (teorainn mharthanachta an druileála síos frámaí; níl sé
sreangaithe isteach i `processVideoPart` fós — ní scríobhann ach an bealach
ar leith `/api/modality-bridge/video/drilldown` iontrálacha druileála síos faoi
láthair).

Ní iompórtálann ná ní agraíonn conair phoiblí na n-iarratas `/v1` fophróiseas
riamh. Íoslódáiltear físeáin chianda faoi theorainn 50 MiB; tá uasteorainn
choimeádach 36 MiB díchódaithe in aghaidh an fhíseáin ag físeáin base64
inlíne ionas gur féidir leis an imchlúdach samhla/teachtaireachtaí/frámaithe
fanacht laistigh den teorainn iontrála 50 MiB d'iarratais phoiblí JSON.
Seiceáiltear fad inlíne agus meastacháin ar mhéid díchódaithe roimh
leithdháileadh. Tá HTTPS riachtanach ar an URL cianda tosaigh agus ar gach
atreorú, agus úsáidtear an garda amach poiblí amháin atá ann cheana le feannadh
DNS. Ansin trasnaíonn na bearta teorainn bheacht inmheánach an bhróicéara
`POST /api/modality-bridge/video/extract`. Tá an bealach sin `LOCAL_ONLY` agus
`SPAWN_CAPABLE` araon, ní ghlacann sé ach le hiarratas fíordheimhnithe in
aghaidh an phróisis ó lúb-ais iontaofa, agus ní ghlacann sé riamh le URL,
conair chóras comhad, comhad inrite, ná liosta argóintí. Forfheidhmíonn
píblíne mhéid choirp an API agus léitheoir incriminteach choirp an láimhseálaí,
go neamhspleách ar a chéile, uasteorainn ionchuir 50 MiB don bhróicéir.
Ritheann a scuaine teoranta eastóscadh amháin ag an am, ceadaíonn sí ceithre
jab ar feitheamh, agus cuireann sí teorainn 100 MiB ar ionchur ar feitheamh.

Laistigh den bhróicéir, léann `ffprobe` comhad áitiúil príobháideach; fágann an liosta ceadaithe d’fhormáidí seasta formáidí seinmliostaí agus léiritheán as an áireamh. I gcás coimeádán ceadaithe de theaghlach MOV, fanann tagairtí seachtracha do shonraí MOV díchumasaithe de réir réamhshocraithe, agus ní chumasaíonn an t-ordú seasta iad. Úsáideann `ffprobe` agus `ffmpeg` araon liosta bán prótacal atá teoranta do `file`, snáithe amháin, eagair seasta argóintí, gan aon bhlaosc, agus comhaid inrite a réitítear ó `PATH`. Ní iarrthóirí in-seinnte iad sruthanna clúdaigh le pictiúr ceangailte. Ní mór do gach sruth in-seinnte na teorainneacha a chomhlíonadh, agus tugtar tús áite do shruth réamhshocraithe sainráite roimh an gcúltaca cinntitheach leis an innéacs is ísle. Tá físeáin teoranta do 600 soicind, 8,192 picteilín in aghaidh na toise, agus 33,554,432 picteilín foinse. Samplálann FFmpeg 1–16 fráma JPEG ag lárphointí, laghdaíonn sé an chiumhais fhada go 1,024 picteilín ar a mhéad gan ionchuir níos lú a mhéadú, agus ní fhaigheann sé URL riamh. Is é `uniform` an sampláil de réir réamhshocraithe. Déanann na polasaithe roghnacha `scene_aware` agus an polasaí turgnamhach `segment_aware` pas seasta breise amháin de chuid FFmpeg thar an sruth áitiúil atá bailíochtaithe cheana, roghnaíonn siad stampaí ama radhairc teorannaithe `showinfo`, agus filleann siad go cinntitheach ar na lárphointí aonfhoirmeacha céanna má theipeann ar an mbrathadóir, má tharlaíonn teorainn ama, má bhíonn an t-aschur míchumtha, nó má bhíonn an tacar iarrthóirí folamh. Leithdháileann mód atá feasach ar dheighleoga samplaí lárphointe i gcomhréir leis na heatraimh radhairc bhailíochtaithe; sonraítear thíos an fhianaise atá feasach ar dheighleoga agus an t-iompar cúltaca. Cuirtear an uasteorainn dhocht de 16 fhráma i bhfeidhm tar éis an roghnúcháin i ngach polasaí. Nuair nach bhfuil ach buiséad aon fhráma amháin ag iarratas atá feasach ar radhairc, úsáideann sé lárphointe aonfhoirmeach na físe iomláine gníomhaí nó na fuinneoige fócais agus tuairiscíonn sé `policyEffective: uniform`: ní féidir le fráma radhairc aonair roghnaithe an dá cheann ama a chaomhnú. Féadfaidh glaoiteoir fuinneog fócais chríochnaitheach (`start`/`end` soicind) a sholáthar go roghnach; teanntar na teorainneacha d’fhad an mheáin, diúltaítear d’fhuinneoga droim ar ais nó neamhchríochnaitheacha, agus déantar gach polasaí samplála laistigh den eatramh normalaithe amháin. Cuirtear an fhuinneog a eascraíonn as seo san áireamh sna meiteashonraí samplála agus sa réimír tuairisce neamhiontaofa ionas gur féidir le samhlacha iartheachtacha sliocht fócasaithe a idirdhealú ón amlíne iomlán.

Is socrú ar leith sainráite é fócas séimeantach na fotheidil. Caomhnaíonn an mód anailíse réamhshocraithe `full` an leid fráma atá ann cheana agus ní chuireann sé téacs an iarratais ar aghaidh chuig samhail na bhfotheideal riamh. Sa mhód `focused`, ní léann an droichead ach an `text`/`input_text` neamhfholamh is déanaí a scríobh úsáideoir ón gcoimeádán Chat nó Responses céanna, normalaíonn sé go NFC é, comhdhlúthaíonn sé carachtair rialúcháin agus spás bán, agus cuireann sé teorainn 500 códphointe Unicode leis. Má bhíonn an toradh folamh, filleann sé ar an leid bheacht `full`. Déantar leid inúsáidte a shrathú mar JSON i mbloc tiomnaithe de chomhthéacs neamhiontaofa úsáideora agus ní fhéadfaidh sí ach tosaíocht a thabhairt do mhionsonraí inbhraite; ní féidir léi an rabhadh ar leith gan treoracha atá infheicthe nó inchloiste sna meáin a leanúint a shárú. Ní dhéanann fócas téacsúil `start`/`end` a thuiscint ó chomhthéacs riamh ná ní athraíonn sé an samplóir ama.

#### FU-07 fianaise struchtúrach deighleog

Úsáideann `segment_aware` pas réamh-anailíse teorannaithe amháin thar an sruth físe áitiúil atá bailíochtaithe cheana. Déanann an slabhra seasta scagairí scálú go 320 picteilín ar leithead ar a mhéad ar dtús, braitheann sé athruithe radhairc agus eatraimh reoite, agus ansin samplálann sé ag 1 fhráma in aghaidh an tsoicind le haghaidh doiléire, meán-lúma, agus faisnéise spásúla/ama. Tá an pas teoranta do 600 sampla struchtúrach, snáithe FFmpeg/scagaire amháin, na liostaí ceadaithe céanna do phrótacal atá teoranta do `file` agus do choimeádáin, teorainn 1 MiB ar aschur próisis, agus 30 soicind ar a mhéad laistigh de sprioc-am/scoir chomhroinnte an bhróicéara. Ní ghlacann sé riamh le hordú, scagaire, cosán ná URL ón iarratas.

Is fianaise shamplála chinntitheach iad na luachanna struchtúracha, ní tuiscint shéimeantach ar fhíseán. Ní bhaineann siad ábhair, gníomhartha, fotheidil, caint ná rún an úsáideora de thátal. Cruthaíonn teorainneacha radhairc agus reo deighleoga; ní imríonn clúdach reo, doiléire, nochtadh, mionsonraí spásúla, ná athrú ama tionchar ach ar an gcaoi a leithdháiltear an buiséad reatha de 1–16 fhráma. Cuirtear teorainn aon fhráma amháin le deighleog atá reoite go hiomlán, agus bíonn deighleoga neamhreoite san iomaíocht don bhuiséad atá fágtha. Nuair a bhíonn níos mó teorainneacha ná frámaí ann, coinnítear clúdach aonfhoirmeach na hamlíne ionas nach féidir le gearrthacha tapa luatha deighleog fhada deiridh a cheilt. Déantar teorainneacha radhairc atá laistigh de thaifeach anailíse 1 soicind ó theorainn reo a chomhcheangal.

Má bhíonn scagairí ar iarraidh, má bhíonn an fhianaise míchumtha/folamh, má tharlaíonn earráid bhrathadóireachta, nó má shroichtear teorainn ama na réamh-anailíse teorannaithe, teipeann an córas ar bhealach oscailte chuig an bpolasaí beacht lárphointe aonfhoirmeach. Ní theipeann scor glaoiteora ná sprioc-am an bhróicéara ar bhealach oscailte: cuireann sé deireadh leis an bhfo-phróiseas atá ar siúl, cuireann sé cosc ar eastóscadh frámaí ina dhiaidh sin, agus baintear an crann sealadach príobháideach in `finally`.

Gineann `scripts/perf/video-bridge-fu07-eval.ts` daingneáin chinntitheacha fhíora FFmpeg le haghaidh coigilteas ar ghlaonna fotheidil tar éis dí-dhúblála, leithdháileadh buiséid do dhlúthghluaiseacht, fianaise doiléire/nochtaithe/SI-TI, gearrthacha tapa le heireaball fada, agus dearbhuithe bréagacha ó chéimniú de réir a chéile. Taifeadann sé am balla na réamh-anailíse agus, nuair atá `/usr/bin/time` ar fáil, LAP an phróisis sleachta agus buaic-RSS. Is tairngreachtaí struchtúracha amháin iad a sheiceálacha cáilíochta. Fanann cáilíocht na samhla fotheidil réadúla mar `HOLD` toisc nach bhfuil críochphointe údaraithe ná moltóir reoite ag an gcreatlach tástála seo. Fanann coigilteas airgeadaíochta mar `HOLD` freisin mura soláthraíonn `--caption-cost-per-call-usd` meastachán sainráite dearfach ar an gcostas in aghaidh an ghlao; ní chumann an script ceachtar toradh riamh.

Tá gach fráma teoranta do 4 MiB, tá na frámaí amha uile le chéile teoranta do 23 MiB, agus tá freagra srathaithe an bhróicéara teoranta do 32 MiB. Baintear eolaire sealadach príobháideach in `finally`. Ní chuireann OmniRoute FFmpeg san áireamh agus ní ghlacann sé le conair inrite shaincheaptha. Sula gcuirtear fotheidil leis, cuireann an droichead pas coimeádach dí-dhúblála amhairc i bhfeidhm: laghdaítear gach JPEG go maolán liathscála 16×16 agus ní chuirtear i gcomparáid é ach leis an bhfráma deireanach a coinníodh. Maidir le buiséad fotheideal iarrtha atá níos mó ná fráma amháin, soláthraíonn an t-eastóscadh comhthiomsú teoranta iarrthóirí suas le dhá oiread an bhuiséid sin agus nach mó ná 16 fhráma riamh. Ní chuirtear an uasteorainn iarrtha i bhfeidhm go dtí tar éis na dí-dhúblála, agus caomhnaítear an chéad iarrthóir agus an t-iarrthóir deiridh a roghnaíodh le linn an tanaithe deiridh nuair atá an buiséad cothrom le dhá cheann ar a laghad. Úsáideann an polasaí le leagan
`grayscale-16x16-mean-cells-v2` an luach is mó idir meándeilt lonrachta agus cóimheas na gceall mionsamhla a bhfuil a ndeilt normalaithe cothrom le 0.05 ar a laghad. Is é 0.04 tairseach sheasta na ndúblach, a roghnaíodh ar mhaithe le hintuarthacht seachas í a nochtadh mar shocrú am rite. Caomhnaíonn an comhartha tánaisteach ardchodarsnachta seo mionghluaiseacht agus athruithe ar théacs infheicthe a d’fhéadfadh comparáid bunaithe ar an meán amháin a cheilt. Má tharlaíonn earráidí sa chomparadóir nó sa díchódóir, teipeann siad ar bhealach oscailte agus coinnítear an clúdach. Déanann meiteashonraí aschuir idirdhealú idir iarrthóirí eastósctha, frámaí a úsáideadh go rathúil, agus dúblaigh amhairc a fágadh ar lár.

Féadfaidh cuid físe atá marcáilte go sainráite bileog theagmhála le stampaí ama a iarraidh. Tógann an droichead greille JPEG ina bhfuil 4 cholún agus 16 fhráma ar a mhéad. Dónn gach cill 512 picteilín stampa ama a foinse isteach i mbanda ardchodarsnachta ag an mbun, agus fanann na stampaí ama céanna sna meiteashonraí téacsúla chun iad a chomhcheangal agus a iniúchadh níos faide síos an sruth. Fanann an JPEG iomlán teoranta do 32 MiB. Mura féidir le `sharp` an ghreille a dhíchódú nó a chumadh, filleann an droichead ar na frámaí JPEG aonair; leanann scor ón gcliant ag iomadú tríd an oibríocht bileoige.

Coinnítear fianaise ardaithe céime scartha d’aon ghnó ón micreathagarmharc sintéiseach cumadóireachta. Sainmhíníonn `scripts/perf/video-bridge-contact-sheet-eval.ts` creat tástála A/B le leagan scéime do mhúnlaí físe fíor atá comhoiriúnach le OpenAI. Tomhaiseann sé comharthaí a thuairiscíonn an soláthraí, aga folaigh balla ó cheann ceann (lena n-áirítear cumadóireacht na bileoige), líon na nglaonna ar an múnla, agus coinneáil fíricí arna sainmhíniú sa lastliosta. Ní scríobhtar freagraí amha an mhúnla sa tuairisc; ní choinnítear ach achoimrí SHA-256 agus aitheantais na bhfíricí comhoiriúnaithe. Ní dhéanann an creat aon ghlao líonra ná aon ghlao ar mhúnla íoctha mura gcuirtear `--execute-real` ar fáil agus mura bhfuil `--model`, `OMNIROUTE_BASE_URL`, agus `OMNIROUTE_API_KEY` cumraithe. Gan an rith fíor sainráite sin, fanann a bhreithiúnas meaisín-inléite mar `HOLD`; ní fianaise ardaithe céime iad tomhais shintéiseacha pálasta/líon glaonna astu féin.

Féadfaidh glaoiteoirí eagar roghnach `transcript.cues` a cheangal le cuid físe a dtacaítear léi nuair atá téacs ailínithe acu cheana féin. Ní mór `text`, eatramh críochta `start`/`end` laistigh den fhad ama a braitheadh, agus `source` ar an liosta ceadaithe (`client`, `embedded`, nó `audio-bridge`) a bheith ag gach leid; is é `1` luach réamhshocraithe `confidence` agus ní mór dó fanacht idir `0` agus `1`. Déantar leideanna atá díreach mar an gcéanna a chomhthiomsú. Ní chuireann OmniRoute tús le tras-scríobh riamh ó na meiteashonraí seo: cóipeáiltear leideanna bailíochtaithe isteach sa toradh tuairiscithe lena bhfoinse, lena muinín, agus lena n-eatramh, agus rindreáiltear iad mar bhreathnuithe neamhiontaofa taobh le fotheidil na bhfrámaí. Diúltaítear do théacs neamhbhailí, as raon, nó gan bhunáitíocht seachas é a mheascadh isteach i sruth na bhfotheideal. Normalaíonn an dá chainéal tras-scríbhinne i gcorp na hiarrata an bhunáitíocht a soláthraíodh go `client`, lena n-áirítear lipéid fhéindearbhaithe `embedded` nó `audio-bridge`. Ní féidir ach le hoiriúntóir atá faoi úinéireacht an fhreastalaí na lipéid iontaofa sin a shannadh tríd an argóint chóid amháin `trustedSource`; ní féidir le réimse JSON in iarraidh an argóint sin a shroicheadh. Fanann téacs na tras-scríbhinne ina ábhar neamhiontaofa a dhíorthaítear ó mheáin, beag beann ar a bhunáitíocht, agus ní ceadmhach dó údarú a chinneadh riamh.

Féadfaidh glaoiteoir ardleibhéil rian `audioTranscript` a sholáthar don fhíseán céanna; caitear leis mar théacs arna sholáthar ag an gcliant, ní mar chruthúnas ar thras-scríobh ón bhfreastalaí. Ritheann an chomhéadan cumaisc breathnuithe amhairc agus fuaime faoi sprioc-am amháin agus faoi chomhartha scortha amháin, ordaíonn sé iad ar amlíne choiteann, comhthiomsaíonn sé dúblaigh atá díreach mar an gcéanna, agus tuairiscíonn sé toradh páirteach nuair nach n-éiríonn ach le taobh amháin. Má tá `audioTranscript` neamhbhailí, díghrádaíonn sé go dtí an toradh páirteach sin — coinnítear an tuairisc amhairc agus taifeadann an brainse fuaime cód teipe sláintithe — seachas an físeán iomlán a chur ó mhaith. Caomhnaítear infhaighteacht gach brainse, an bhratach pháirteach, agus na cóid teipe sláintithe sa toradh tuairiscithe, i meiteashonraí na gcosaintí (`audioFusionRuns`/`audioFusionPartials`/
`audioFusionFailureCodes`), i meiteashonraí taisce na dtorthaí, agus i gcuntair chumaisc an droichid. Ní dhéanann conair réamhshocraithe an Video Bridge urlabhra-go-téacs a agairt ná an dara cóip de na meáin a íoslódáil; gan an rian sainráite sin, fanann sí ina conair físe amháin.

**Coinneáil tras-scríbhinní (#12150 P1).** Tá feidhm leis seo go huathoibríoch aon uair a dhéanann an Droichead Físe (ar gá roghnú isteach ann féin) leid tras-scríbhinne a rindreáil — níl aon bhratach choinneála ar leith ann. Nuair a dhéanann iarratas aon leid tras-scríbhinne a rindreáil (`transcript` arna dhearbhú ag glaoiteoir nó `audioTranscript` comhtháite), marcálann an ráille cosanta é mar `videoBridgeObserved` agus táirgeann sé scáth folaithe den tuairisc físe — rindreáil chomhionann ina gcuirtear `[redacted-video-transcript]` in ionad chorp saorthéacs gach leide, arna thógáil trí réimse struchtúrtha na leide a ionadú sula gcuirtear an teaghrán le chéile (ní dhéantar é riamh tríd an téacs leacaithe a pharsáil, ionas nach féidir le haon inneachar leide — bíodh sé sáraíochta nó coitianta, lena n-áirítear coirp ina bhfuil `]` amhail `[inaudible]`/`[music]` — teacht slán). Malartaíonn corp iarratais an loga glaonna mharthanaigh gach cuid téacs a díorthaíodh ó fhíseán leis an scáth folaithe sin, arna mheaitseáil de réir comhionannas inneachair; athléitear an t-ancaire `fullText` ó phálasta críochnaithe an ráille cosanta réamhghlao, agus mar sin éiríonn leis an meaitseáil fós tar éis do ráillí cosanta slabhra níos déanaí (na folaitheoirí PII agus dintiúr, tosaíochtaí 10/95) téacs na tuairisce a athscríobh ina áit agus tar éis d'instealladh leid an chórais, aistrithe agus cuimhne an t-eagar teachtaireachtaí a athmhúnlú. Ní athraítear an corp a sheoltar suas an sruth chuig an tsamhail. Ní chuireann iarratas breathnaithe aon Chuimhne mharthanach ar fáil ach oiread (scipeáiltear eastóscadh a dhíorthaítear ón iarratas agus ón bhfreagra araon), mar sin ní féidir le freagra na samhla féin téacs tras-scríbhinne a athrá isteach sa Chuimhne.

**Réimsí físe amh (#12430).** Nuair atá an droichead cumasaithe agus nuair atá tacaíocht dhúchasach físe anaithnid nó in easnamh, gníomhachtaíonn réimsí sainithe `transcript`/`audioTranscript` `videoBridgeObserved` freisin, fiú tar éis teip tuairisce nó teorainn `maxVideos`. Áirítear `null` agus teaghráin fholmha; ní áirítear réimsí atá in easnamh ná meiteashonraí neamhfhíse. Folóidh cóipeanna coinnithe na réimsí seo nó fágtar an t-iarratas ar lár, agus seachnaítear taiscí/cuimhne.

Ar na conairí cúltaca sin, déantar páirteanna `text`/`input_text` a dtacaítear leo de leideanna bailí ón nglaoiteoir, seachas réimsí neamhchaighdeánacha soláthraí. Fanann an dá rian a soláthraíodh san iarratas ina mbreathnuithe neamhiontaofa `client`, le rabhadh sainráite nár tugadh tuairisc ar an bhfíseán agus nár fíoraíodh stampaí ama i gcoinne na meán. Tá feidhm ag na buiséid reatha de 256 leid/64 KiB san iomlán agus in aghaidh na leide thar an dá rian le chéile; ní mór do stampaí ama luí faoi uasteorainn 600 soicind an bhróicéara agus laistigh d'aon fhuinneog fócais a soláthraíodh. Caitear rianta neamhbhailí i leataobh agus ní chuirtear ar aghaidh iad mar théacs treallach; féadfar leas a bhaint fós as rian bailí gaolmhar mura sáraítear a mbuiséad comhcheangailte. Ní chuireann réimsí neamhnithe/folmha aon téacs leis. Ní chuireann an cúltaca seo aon aisghabháil meán ná tras-scríobh leis. Baintear réimsí sínte tras-scríbhinne den iompróir físe cúltaca agus dá oibiachtaí `video_url`/`source`. Fanann liosta ceada sreinge OpenAI docht; fanann iompróirí físe a bhfuil tacaíocht dhúchasach anaithnid acu ar fáil agus coinníonn spriocanna aitheanta téacs-amháin marcóirí sábháilte. Cosnaíonn scáthanna folaithe struchtúrtha an téacs tras-scríbhinne iarcheangailte, agus fanann an bun-iarratas ar leis an nglaoiteoir é gan athrú. Coinníonn spriocanna a dtacaítear leo go dúchasach agus droichid dhíchumasaithe a n-iompar seachanta reatha.

Úsáideann cóipeanna coinnithe breise an comhartha iarratais bhreathnaithe chéanna. Ionadaíonn an pictiúr amh den iarratas cliaint réamh-ráille cosanta, an t-iarratas ar feitheamh sa chuimhne, agus loga luath na n-iarratas diúltaithe réimsí tras-scríbhinne i gcodanna físe go struchtúrtha; déantar leideanna teaghráin arna sintéisiú ag céimeanna píblíne agus aistriú comhthéacs a fholú ag ceann scríbe chorp an iarratais mharthanaigh. Fágann an marcóir marthanach `video_content_removed` go dteipeann ar leanúint `previous_response_id` ar bhealach dúnta seachas téacs a caitheadh i leataobh d'aon ghnó a athchruthú. Má chailleann iarratas breathnaithe a scáth folaithe in aghaidh na coda roimh logáil, nó má theipeann ar fiú ceann amháin de roinnt scáthanna físe a mheaitseáil tar éis athruithe níos déanaí ar an iarratas, fágtar corp an iarratais choinnithe ar lár go hiomlán in ionad tras-scríbhinn atá folaithe go páirteach a choinneáil.

I gcás iarratais bhreathnaithe, d'fhéadfadh freagra samhla aon chuid den tras-scríbhinn a lua gan teorainn struchtúrtha leide. Dá bhrí sin, cuirtear marcóir fágála ar lár in ionad `responseBody` mharthanach a loga glaonna; ní choinnítear déantán mionsonraithe na píblíne (a d'fhéadfadh coirp réamhtheachtacha/cliaint agus smutáin srutha a áireamh). Seachnaíonn taiscí séimeantacha, idéimpitéinse agus athsheinnte réasúnaithe léamha agus scríbhinní don iarratas sin. Fanann iarratas an tsoláthraí agus an freagra infheicthe don chliant gan athrú. Draenáiltear bearta luatha coinneála beo ón maolán sealadach nuair a fhágtar an déantán mionsonraithe ar lár. Ní thuairiscíonn rabhadh Kiro faoi EventStream míchumtha ach líon beart an phálasta, agus ní thuairiscíonn sé a inneachar ná amh-earráid pharsálaí JSON riamh.
Ní mhaíonn sé seo go ndearnadh iniúchadh ar gach diagnóis neamhghaolmhar soláthraí/breiseáin; déantar rianú ar an scuabadh níos leithne ar chinn scríbe coinnithe in #11658.

Is foshraith taisce ar leith é saolré inmheánach `/api/modality-bridge/video/drilldown`, atá fíordheimhnithe trí lúb siar/chomhartha. Éilíonn gach oibríocht aitheantas príomhaí teimhneach canónach freisin. Sula gcumasaítear glaoiteoir táirgeachta, ní mór dó an t-aitheantas sin a dhíorthú ón tionónta fíordheimhnithe agus ní ceadmhach dó luach arna roghnú ag cliant a chur ar aghaidh riamh. Ceanglaíonn eochracha taisce an príomhaí sin le haitheantais chanónacha seisiúin agus tagartha físe, ní stórálann siad ach na heochracha a dhíorthaítear ó SHA-256, agus cuireann siad léamha agus scriosadh araon faoi raon feidhme an phríomhaí chéanna. Stórálann an taisce 16 fhráma JPEG dhíorthaithe ar a mhéad in aghaidh na hiontrála, ligeann sé dóibh dul in éag tar éis deich nóiméad, agus tacaíonn sé le léamha teorannaithe `start`/`end` nó le scriosadh sainráite seisiúin.

Tá gach príomhaí teoranta do 16 iontráil agus 64 MiB de shonraí canónacha JPEG. Tá na teorainneacha sin neamhspleách ar an uasteorainn dhomhanda de 64 iontráil/256 MiB: ní dhíshealbhaíonn brú cuóta príomhaí ach na hiontrálacha is lú a úsáideadh le déanaí de chuid an phríomhaí sin sula mbreithnítear díshealbhú domhanda LRU. Glantar iontrálacha atá imithe in éag ó chuntasaíocht an phríomhaí agus ón gcuntasaíocht dhomhanda araon le linn gníomhaíochta taisce, agus ní dhéanann cealú ná teip bhailíochtaithe ionadú páirteach a chur i bhfeidhm.

Diúltaíonn an taisce do Base64 neamhchanónta, stuáil iomarcach, meáin nach JPEG iad, JPEGanna míchumtha nó teasctha, agus JPEGanna a ghineann rabhadh le linn díchódú teoranta láníomhá `sharp`. Ath-ionchódaíonn sí gach íomhá a nglactar léi mar JPEG canónta, díorthaíonn sí an leithead agus an airde ó na bearta díchódaithe seachas muinín a bheith aici as réimsí an ghlaoiteora, agus caitheann sí aon bhearta ilteangacha leantacha i leataobh seachas iad a choinneáil. Ní ghearrtar ar an dá chuóta ach an maolán comhbhrúite canónta teoranta. Áirítear le teorainn sreinge JSON forchostas Base64 don uasteorainn ionchuir dhíchódaithe 32 MiB. Déanann gach
díorthú stóráilte a fhormáid/taifeach JPEG bailíochtaithe, a bheartas samplála,
a leagan díorthaithe, a am cruthaithe, hais inneachair arna ríomh ag an bhfreastalaí, agus
tagairt thuismitheora haiseáilte mar aon le hais inneachair tuismitheora an ghlaoiteora iontaofa a thaifeadadh. Seiceáiltear cealú
idir céimeanna aisioncronacha díchódaithe/haiseála roimh an ngealladh adamhach don taisce.

Ní nascann an tráinse seo táirgeoir táirgthe leis an mbealach fós agus ní
sholáthraíonn sé roghnú malartach iltaifigh. Dá bhrí sin, ní chuireann conair iarratais
thrédhearcach an Droichid Físeáin aon obair bhreise i bhfeidhm, agus tá díorthú
príomhaí atá ceangailte le tionónta agus saolré iomlán iltaifigh FU-08 fós ina
n-obair leantach shainráite seachas iad a bheith doiciméadaithe mar iompar críochnaithe.

Cuirtear fotheidil ar fhrámaí go seicheamhach leis an tsamhail Físeáin chumraithe. Faigheann
sárú Físeáin folamh an socrú Amhairc le hoidhreacht; má tá an dá cheann folamh, roghnaíonn
uathródaire Amhairc an tsamhail éifeachtach a thacaíonn le fís. Tagann fotheidil
rathúla in ionad na bunchoda le réimír chobhsaí `[Video description:` a mharcálann
an téacs freisin mar bhreathnóireacht neamhiontaofa a díorthaíodh ó mheáin agus a insíonn
do shamhlacha iartheachtacha gan treoracha a fhaightear sna meáin a leanúint. Áirítear
leis na heochracha taisce d'fhotheidil fráma na bearta JPEG, an leid, an stampa ama, agus
an tsamhail éifeachtach; ní chuirtear ach fotheidil rathúla i dtaisce. Coinníonn
iontrálacha taisce samhail iarbhír an táirgeora rathúil, lena n-áirítear samhail
chúltaca; tuairiscíonn an droichead `mixed` nuair a tháirg samhlacha éagsúla frámaí
éagsúla. Athúsáideann amas taisce aitheantas an táirgeora sin seachas é a athlipéadú
mar an bplean ródaithe iarrtha. Tá taisce thoradh na físe iomláine eochraithe de réir
gach ionchuir a athraíonn an t-aschur — leid, samhail éifeachtach, beartas samplála,
líon frámaí, mód anailíse séimantaí, méarlorg SHA-256 na leide fócais normalaithe,
fuinneog fócais, `transcript`, `audioTranscript`, agus bratach na bileoige teagmhála —
ionas gur teip taisce, agus ní athúsáid shean, é athrú ar aon cheann de na toisí sin.
Tá leagan, tairseach, agus líon teoranta frámaí iarrthacha an bheartais
dhídhúblála amhairc sainráite freisin in eochair agus i meiteashonraí thaisce an
toraidh; dá bhrí sin, ní féidir le hathrú beartais cur síos sean ar an bhfíseán
iomlán a athúsáid. Coinníonn meiteashonraí v4 thaisce an toraidh an mód agus an
méarlorg, ach ní choinníonn siad tasc amh an úsáideora riamh. Tuairiscíonn meiteashonraí
ráille cosanta na móid anailíse iarrtha agus éifeachtacha araon; tuairiscítear mód
`focused` iarrtha gan téacs inúsáidte ón úsáideoir mar `full` go héifeachtach.

Baineann an ráille cosanta gach cuid físeáin a dtacaítear léi amach ach ní dhéanann
sí cur síos ar níos mó ná `modalityBridgeVideoMaxVideos`. I gcás sprice ar cruthaíodh
ina leith go bhfuil `supportsVideo === false`, déantar marcóirí sainráite téacs sábháilte
d'fhíseáin ar theip orthu agus d'fhíseáin os cionn na teorann ionas nach maireann aon
fhíseán amh. Nuair nach eol an cumas, coinníonn na codanna sin a n-iompróir físeáin;
leanann aon tras-scríbhinn chúltaca an tiontú teoranta téacs thuas. Seachnaíonn
spriocanna a bhfuil `supportsVideo === true` acu an droichead. Iomadaíonn comhartha
tobscortha iarratas an chliaint tríd an íoslódáil, scuaine an bhróicéara, fophróisis,
agus glaonna fotheidil; stopann tobscortha idir físeáin agus ní theipeann siad ar bhealach
oscailte a ligfeadh meáin amha tríd.

Tá na socruithe ama rite tacaithe ag bunachar sonraí agus bailíochtaithe le Zod:

| Eochair                             | Réamhshocrú | Raon / iompar                                                                                                          |
| ----------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------- |
| `modalityBridgeVideoEnabled`        | `false`     | Am rite roghnach, rogha isteach                                                                                        |
| `modalityBridgeVideoAnalysisMode`   | `"full"`    | Caomhnaíonn `full` fotheidil ghinearálta; úsáideann `focused` comhthéacs teoranta neamhiontaofa ón úsáideoir is déanaí |
| `modalityBridgeVideoModel`          | `""`        | Faigh samhail an Droichid Amhairc le hoidhreacht                                                                       |
| `modalityBridgeVideoFrameCount`     | `8`         | 1–16                                                                                                                   |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"` | `uniform`, `scene_aware`, nó `segment_aware` comhréireach; má theipeann ar an mbrathadóir, filleann sé ar `uniform`    |
| `modalityBridgeVideoMaxVideos`      | `1`         | 1–4                                                                                                                    |
| `modalityBridgeVideoTimeout`        | `120000`    | 1000–120000 ms                                                                                                         |

Teorannaítear luachanna am istigh Físeáin oidhreachta marthanacha os cionn 120 soicind de réir
sprioc-ama an bhróicéara; diúltaítear do scríbhinní nua socruithe os cionn na teorann sin.
Éilíonn `GET /api/modality-bridge/video/runtime` logántacht lúb-ais stampáilte iontaofa
roimh fhíordheimhniú nó iniúchadh ama rite, agus ansin éilíonn sé fíordheimhniú
bainistíochta. Ní sheolann sé ar ais ach `available`, leaganacha sláintithe FFmpeg/ffprobe,
agus cúis sheasta nuair nach bhfuil an t-am rite ar fáil. Ní API poiblí uaslódála é an
críochphointe inmheánach asbhainte: seolann sáithiú na scuaine `503` mar aon le
`Retry-After`, seolann dícheangal glaoiteora `499`, agus seolann sprioc-am seasta an
bhróicéara `504`. Cuireann freagraí tiontaithe
`video->text;model=<visionModel>;parts=<videos>` leis an gceanntásc lárnach
`x-omniroute-modality-bridge` gan míreanna Amhairc ná Fuaime a bhaint.

### Mascóir PII (`piiMasker.ts`)

Ritheann sé ar **an dá** chéim.

- Déanann **`preCall`** clónáil ar an bpálasta, téann sé trí `system`, `messages`, `input`, agus
  `prompt` (míreanna gnáth-theaghráin san áireamh), agus cuireann sé `processPII()` (ó
  `@/shared/utils/inputSanitizer`) i bhfeidhm ar réimsí teaghráin `content`/`text`. Nuair atá
  `PII_REDACTION_ENABLED=true`, folachtaítear PII braite sa phálasta
  amach. Tá sé seo neamhspleách ar `INPUT_SANITIZER_MODE` (nach rialaíonn ach
  an polasaí in aghaidh ionstealladh leide). Nuair atá an fholú casta as, taifeadann an glao
  comhairimh bhraite gan an t-inneachar a athscríobh.
- Déanann **`postCall`** domhainchlónáil ar an bhfreagairt, agus ritheann sé `sanitizePIIResponse()` chomh maith
  le mascóir chruth Responses API (`maskResponsesOutput` — a chlúdaíonn
  `output_text` agus `output[].content[].text`). Má tharlaíonn aon fholú, cuirtear an
  fhreagairt leasaithe in ionad na bunfhreagartha.

Ní chuireann an ráille cosanta bac ar rud ar bith; ní dhéanann sé ach anótáil (`meta.detections`,
`meta.redacted`) nó athscríobh.

#### Roghnú de réir cineáil, patrúin shaincheaptha agus cuntair bhraite

Roghnaíonn **Painéal → Socruithe → Slándáil → Folú PII** _cad_ a fholófar. Ní
chuireann sé an fholú ar siúl: is iad `PII_REDACTION_ENABLED` (iarratas) agus
`PII_RESPONSE_SANITIZATION` (freagairt + SSE) a dhéanann sin fós, agus iad araon casta as de réir réamhshocraithe.

- **Roghnú de réir cineáil** — tá na haitheantóirí ionsuite liostaithe in
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Mura socraítear é, ciallaíonn sé gach
  cineál (an t-iompar a bhí ann sula raibh an socrú seo ann). Mapálann patrún
  `ssn_us` inneall an iarratais chuig `ssn`. Ní dhéanann teimpléid (Íosta, Caighdeánach, Airgeadais,
  Brasaíleach, SAM, Iomlán) ach na ticbhoscaí sa chomhéadan úsáideora a líonadh.
- **Patrúin shaincheaptha** — suas le 20 patrún sloinn ionadaíochta nó saoróg (`*` = suas le 64
  carachtar nach spás bán iad, `?` = ceann amháin). Déantar `[CUSTOM_REDACTED]` de mheaitseálacha.
  Téann gach patrún trí `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`): 500 carachtar ar a mhéad, bratacha teoranta
  do `g i m s u`, ní mór dó tiomsú, ní mór dó `safe-regex` a shárú (cúlrianú
  tubaisteach), agus ní ceadmhach dó teaghrán folamh ná ionadchoinneálaí folaithe a mheaitseáil.
  Diúltaítear do phatrún a theipeann nuair a shábháiltear agus nuair a thástáiltear é, agus déantar ró stóráilte
  a theipeann a scipeáil ag am rite seachas é a thiomsú. Ní ritheann patrúin shaincheaptha ach amháin
  nuair atá an folú ar siúl.
- **Cuntair bhraite** — comhairimh de réir cineáil (ní luachanna meaitseáilte riamh), coinnithe sa
  chuimhne agus athshocraithe ar atosú (`src/lib/pii/piiDetectionStats.ts`). Ní
  mhéadaíonn siad ach nuair atá an folú ar siúl.

Tá na socruithe sa tábla `key_value` (ainmspás `pii_settings`,
`src/lib/db/piiSettings.ts`) agus léitear iad trí thaisce 1 s. API:

| Modh   | Conair                   | Cuspóir                                                                                    |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------ |
| `GET`  | `/api/settings/pii`      | Staid na brataí, `enabledTypes`, `customPatterns`, cuntair bhraite                         |
| `PUT`  | `/api/settings/pii`      | Cuir `enabledTypes` (`null` = gach ceann) agus/nó `customPatterns` in ionad                |
| `POST` | `/api/settings/pii/test` | Tástáil thirim ar phatrún amháin in aghaidh sampla nach mó ná 8 KB; ní stóráiltear aon rud |

Éilíonn na trí cinn fíordheimhniú bainistíochta agus bailíochtaíonn siad an corp le Zod
(`src/shared/validation/schemas/piiSettings.ts`).

### Ionstealladh Leide (`promptInjection.ts`)

Braitheann sé struchtúir naimhdeacha in inneachar a sholáthraíonn an t-úsáideoir agus cuireann sé an
polasaí cumraithe i bhfeidhm. Is iad athróga timpeallachta agus roghanna an chruthaitheora
a stiúrann an t-iompar:

| Socrú            | Athróg timpeallachta                                                                                  | Réamhshocrú | Éifeacht                                                                                                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cumasaithe       | `INPUT_SANITIZER_ENABLED`                                                                             | `true`      | Nuair atá sé `false`, déanann an ráille cosanta gearrchiorcadú.                                                                                                                                                                    |
| Mód              | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`      | Polasaí ionsteallta: `block`, `warn`, nó `log`. (Glactar le `redact` ar mhaithe le comhoiriúnacht siarghabhálach ach **ní** bhaineann sé téacs ionsteallta; is é `PII_REDACTION_ENABLED` a rialaíonn athscríobh PII an iarratais.) |
| Tairseach bactha | rogha `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (ailias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`      | An déine íosta is gá chun bac a chur. Is breathnóireacht amháin atá i gceist le meándéine de réir réamhshocraithe.                                                                                                                 |

**Tosaíocht mód** (`getMode`): `options.mode` an ghlaoiteora →
**sárú brataí gné DB** `INJECTION_GUARD_MODE` (Painéal → Socruithe →
Bratacha Gné) → athróg timpeallachta `INJECTION_GUARD_MODE` → athróg timpeallachta `INPUT_SANITIZER_MODE` →
`warn`. Dá bhrí sin, bíonn tosaíocht ag sárú painéil ar na hathróga timpeallachta, mar sin rialaíonn
comhéadan úsáideora na mBratach Gné an ráille reatha beo (gan atosú). Tá léamh an DB slán ar theip:
má tharlaíonn earráid, filleann an ráille ar an iompar bunaithe ar athróga timpeallachta, agus nuair nach bhfuil
aon sárú socraithe, bíonn an t-iompar comhionann le réiteach bunaithe ar athróga timpeallachta amháin.

Foinsí braite:

1. `sanitizeRequest()` ó `@/shared/utils/inputSanitizer` (tacar comhroinnte brathadóirí
   a úsáidtear in áiteanna eile sa phíblíne).
2. `DEFAULT_GUARD_PATTERNS` ionsuite (`system_override_inline` agus
   `markdown_system_block` faoi láthair, agus déine `high` ag an dá cheann).
3. `customPatterns` roghnacha a chuirtear ar aghaidh trí roghanna an chruthaitheora (teaghráin, sloinn ionadaíochta,
   nó taifid `{ name, pattern, severity }`).

Nuair atá `mode === "block"` **agus** nuair a chomhlíonann brath amháin ar a laghad an
tairseach déine, tugann `preCall` `{ block: true, message: "Request rejected:
suspicious content detected" }` ar ais. Sna móid `warn`/`log`, déanann an ráille cosanta logáil ach
ceadaíonn sí an glao. Easpórtáiltear an cúntóir comhroinnte `evaluatePromptInjection()` freisin
do ghlaoiteoirí ar gá dóibh leideanna a mheas gan dul tríd an gclárlann.

**Teorainn scantha (v3.8.20):** ní scrúdaíonn an brathadóir ach an **chéad 16 KB** de
théacs na leide comhcheangailte — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 beart) in
`src/shared/utils/inputSanitizer.ts`. Déanann `detectInjection()` agus
`evaluatePromptInjection()` araon `slice(0, MAX_INJECTION_SCAN_BYTES)` sula ritear
lúb na bpatrún. Bíonn treoracha insteallta gar do bharr ionchuir, mar sin
cuireann sé seo teorainn le húsáid LAP/GC ag sloinn ionadaíochta ar phálastaí ilchéad-KB gan an bhrath a lagú (féach
#3932, #4041).

### Mascóir Dintiúr (`credentialMasker.ts`)

Ritear é ag **an dá** chéim, agus é deireanach sa slabhra réamhshocraithe (tosaíocht `95`). Déanann sé
patrúin aitheanta d’eochracha API / comharthaí rúnda a fholú ón bpálasta amach (inneachar
teachtaireachta, argóintí glaonna uirlise, torthaí uirlise) **agus** ó fhreagairt an tsoláthraí, ionas nach
sceithfear dintiúr a greamaíodh i leid (nó a macallaíodh ar ais i dtoradh uirlise)
chuig an soláthraí réamhtheachtach ná ar ais chuig an gcliant.

- **Roghnach amháin**, an coinbhinsiún céanna le folú PII (gar do Riail Dhocht #20):
  díchumasaithe mura bhfuil `settings.credentialRedactionEnabled === true` **nó**
  `CREDENTIAL_REDACTION_ENABLED=true`. Agus é múchta, ní dhéanann an ráille cosanta aon ní —
  ní chuireann sí bac choíche agus ní athscríobhann sí aon ní.
- Siúlann `redactCredentials()` crann iomlán an phálasta/na freagartha (`walkValue()`,
  sábháilte ar thruailliú fréamhshamhla, sábháilte ar thimthriallta trí `WeakSet`) agus cuireann sé
  ionadchoinneálaí `[REDACTED:<type>]` in áit meaitseálacha, gan ach na brainsí a d’athraigh
  i ndáiríre a chlónáil.
- Clúdaíonn `CREDENTIAL_PATTERNS` eochracha soláthraithe LLM (OpenAI, OpenAI-proj,
  Anthropic, Google, Hugging Face, Replicate), comharthaí VCS/SaaS (GitHub, Slack,
  Linear, Notion, npm, Postman, Discord), eochracha íocaíochta (Stripe, Square), eochracha
  néil (eochair rochtana AWS, Twilio, SendGrid, Mailgun), eochracha príobháideacha / JWTanna,
  teaghráin naisc ina bhfuil dintiúir (`mongodb://user:pass@...`, etc.), agus
  patrún ginearálta do luach ceanntáisc `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Déantar eochracha ar chruth ceanntáisc (`authorization`, `x-api-key`, `api-key`,
  `apikey`) a fholú go struchtúrach (an luach amháin, agus an réimír scéime amhail
  `Bearer `/`Basic ` á caomhnú) seachas tríd an slonn ionadaíochta ginearálta téacs.
- Ní chuireann an ráille cosanta bac choíche; ní dhéanann sí ach athscríobh (`modifiedPayload` /
  `modifiedResponse`) agus anótáil (`meta.credentialsRedacted`, `meta.count`).

Cosaint aischéimnithe: `tests/unit/credential-masker-guardrail.test.ts`.

## Bunchonradh (`base.ts`)

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
  block?: boolean; // má tá sé true, gearrann sé an slabhra
  message?: string; // taispeántar é nuair a dhéantar blocáil
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // tugann preCall ar ais é chun an t-iarratas a athscríobh
  modifiedResponse?: TValue; // tugann postCall ar ais é chun an freagra a athscríobh
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

Cuireann ráille cosanta "gan athrú" in iúl trí `void`, `{}`, nó
`{ block: false }` a thabhairt ar ais. Nuair a thugtar `modifiedPayload`/`modifiedResponse` ar ais, cuirtear é in ionad
an luacha atá ag sreabhadh tríd an slabhra do na ráillí cosanta iartheachtacha.
Iompraíonn `signal?: AbortSignal` saolré an ghlaoiteora isteach sna ráillí cosanta. Is í ginmhilleadh iarratais an eisceacht bheartaithe oscailte-ar-theip: stopann droichid meán an obair agus déanann siad glanadh suas gan na meáin amh a athchur chuig sprioc arb eol nach dtacaíonn sí leo.

## Clárlann (`registry.ts`)

Nochtann an t-aonán aonair `guardrailRegistry` na nithe seo:

- `register(guardrail)` — cuireann sé ráille cosanta leis (nó cuireann sé ráille nua in ionad ceann atá ann de réir an ainm normalaithe) agus
  athshórtálann sé iad de réir `priority` ardaitheach.
- `clear()` / `list()` — cúntóirí riaracháin.
- `runPreCallHooks(payload, context)` — téann sé trí na ráillí cosanta gníomhacha, cuireann sé an
  pálasta ar aghaidh trí `modifiedPayload`, agus stopann sé ag an gcéad `block: true`.
- `runPostCallHooks(response, context)` — an sreabhadh céanna ar thaobh an fhreagra.
- `resetGuardrailsForTests({ registerDefaults })` — glanann sé an staid agus, go roghnach,
  athchláraíonn sé na réamhshocruithe chun tástálacha a leithlisiú go glan.

Tugann an dá riteoir `{ blocked, payload|response, results, guardrail?, message? }` ar ais,
áit ar eagar taifead `GuardrailExecutionResult` é `results` ina bhfuil
réimsí `blocked`, `skipped`, `modified`, `error`, agus `meta` do gach ráille cosanta,
atá úsáideach don rianú.

### Ráillí Cosanta a Dhíchumasú de Réir Iarratais

Comhiomlánaíonn `resolveDisabledGuardrails({ apiKeyInfo, body, headers })` liosta
dí-dhúbláilte d’ainmneacha ráillí cosanta ba cheart a scipeáil don
iarratas reatha. Tá cúig chainéal ann, a léitear san ord seo agus a chumaisctear in aon liosta amháin
(bíonn an bua ag an gcéad tarlú agus dí-dhúbailt á déanamh):

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` i gcorp an iarratais (ag an mbarrleibhéal)
3. `metadata.disabledGuardrails` i gcorp an iarratais (ach amháin nuair is réad é `metadata`)
4. Ceanntásc `x-omniroute-disabled-guardrails`
5. Ceanntásc oidhreachta `x-disabled-guardrails`

Cumaisctear na cúig chainéal ar fad, agus cuirtear an dá cheanntásc san áireamh: má sheoltar
`x-omniroute-disabled-guardrails` agus `x-disabled-guardrails` araon, scipeáiltear aontas
a gcuid liostaí, agus ní cheileann ceanntásc nua-aimseartha folamh an ceann oidhreachta a thuilleadh
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), deisithe in
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Féadfaidh na luachanna a bheith ina n-eagair teaghrán nó ina dteaghrán deighilte le camóga; baintear spás bán de na hainmneacha
agus normalaítear iad go kebab-case i gcás íochtair (`pii_masker` → `pii-masker`), agus baintear
iontrálacha folmha. Cuirtear an toradh ar aghaidh tríd `context.disabledGuardrails`
chuig an gclárlann, a scipeálann ráillí cosanta meaitseála (`skipped: true` in `results`).

Ní dhéanann an liosta díchumasaithe difear ach don **chlárlann**. Is teorainn éigeantach é mód `block` d’ionsá pras: glaonn an lárearra cosanta ar ionsá
(`src/middleware/promptInjectionGuard.ts`) ar `evaluatePromptInjection()`
gan aon liosta díchumasaithe atá faoi rialú an ghlaoiteora (baineadh an glao neamhbheo
`resolveDisabledGuardrails({ body })` a bhíodh sé a dhéanamh in
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)), mar sin diúltaítear fós d’iarratas
a dhíchumasaíonn `prompt-injection` i mód `block`. Is amhlaidh seo
d’aon ghnó. Tá na cainéil díchumasaithe faoi rialú an ghlaoiteora (corp an iarratais,
meiteashonraí, ceanntásca), agus ní mór nach mbeidh glaoiteoir in ann rialú slándála a mhúchadh
atá socraithe ag an oibreoir
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ní athraíonn aontas na gceanntásc ó [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
ach na ráillí cosanta clárlainne a scipeáiltear; ní ligeann sé do chliant
an lárearra a sheachaint. Déantar polasaithe éigeantacha ráillí cosanta de réir eochrach agus de réir grúpa a
rianú in RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Féach [Cumhdach agus teorainneacha](#coverage-and-limits).

## Ord Forghníomhaithe

I gcás gach iarratais a shreabhann trí `src/sse/handlers/chat.ts` agus
`open-sse/handlers/chatCore.ts` (na bealaí den teaghlach comhrá atá liostaithe faoi
[Raon feidhme agus teorainneacha](#coverage-and-limits)):

1. Tógann `resolveDisabledGuardrails(...)` an liosta scipeála ón eochair API, ón gcorp,
   agus ó na ceanntásca.
2. Ritheann `guardrailRegistry.runPreCallHooks(body, ctx)` na ráillí cosanta in ord
   tosaíochta ardaitheach:
   - Taifeadtar ráillí cosanta díchumasaithe mar `skipped`.
   - Féadfaidh `preCall` gach ráille cosanta an pálasta a athscríobh trí `modifiedPayload`.
   - Cuireann an chéad `block: true` deireadh leis an slabhra láithreach agus seolann an láimhseálaí
     freagra diúltaithe ráille cosanta ar ais.
3. Sreabhann an pálasta (a d'fhéadfadh a bheith athscríofa) isteach i ródú teaglama agus i seoladh
   réamhtheachtach.
4. **Neamhshruthaithe amháin:** tar éis an freagra a chur le chéile,
   ritheann `guardrailRegistry.runPostCallHooks(...)` an slabhra céanna ar an
   bhfreagra. Má bhíonn `block: true` anseo, caitear an freagra réamhtheachtach i leataobh agus seoltar HTTP 400 ar ais. Scipeálann freagraí sruthaithe an chéim seo go hiomlán.

Taifeadtar ráillí cosanta a chaitheann eisceacht le `error: <message>` agus logáiltear iad trí
`logger.warn`, ach leanann an slabhra ar aghaidh — dearadh oscailte ar theip atá i gceist.

## Raon feidhme agus teorainneacha

Níl clárlann na ráillí cosanta nasctha ach leis an bpíblíne chomhrá. Tá na teorainneacha seo
socraithe ag `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` agus
`tests/unit/guardrail-pipeline-characterization.test.ts`; nuashonraigh na tástálacha sin
d'aon ghnó nuair a athraíonn an t-iompar.

### Na háiteanna a ritheann na crúcaí

| Crúca / rialú                            | Na háiteanna a ritheann sé                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                        | Iarratais arna láimhseáil ag `handleChat` (`src/sse/handlers/chat.ts`): `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (agus `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, agus seachfhreastalaí comhrá Telegram. Chomh maith leis sin, críochphointe tástála an deais `/api/guardrails/test`. Seolann bloc réamhghlao HTTP 400 ar ais. |
| `runPostCallHooks`                       | Freagraí comhrá **neamhshruthaithe** amháin (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Ní shroicheann freagraí sruthaithe é choíche.                                                                                                                                                                                                                                                                                                                           |
| PII sruthaithe                           | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), a phíobáiltear in `streamingPipeline.ts` nuair atá `PII_RESPONSE_SANITIZATION` ar siúl. Ní ráille cosanta é, mar sin ní dhéanann na bealaí díchumasaithe difear dó.                                                                                                                                                                                                                                           |
| Meánearra garda insteallta (oidhreachta) | Gach bealach `/v1` ina bhfuil leid, an teaghlach comhrá san áireamh (féach [clúdach bealaí](#injection-guard-route-coverage--red-team-phase-8--block-d)). Instealladh leide amháin.                                                                                                                                                                                                                                                                                         |

### Na nithe nach gcumhdaítear

- Ní shroicheann **bealaí meán, leabaithe agus sonraí** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) an chlárlann choíche. Ní ritheann aon
  chumhdach PII, cumhdach dintiúr ná droichead módúlachta iontu. Is é an t-aon
  seiceáil atá acu ná an meánearra garda insteallta oidhreachta.
- Ní chuirtear aon ráillí cosanta iar-ghlao i bhfeidhm ar **fhreagraí sruthaithe**: níl aon
  `pii-masker` ná `credential-masker` iar-ghlao ann, agus níl aon bhloc iar-ghlao ann.
  Ní chuirtear i bhfeidhm ach an claochlú PII sruthaithe (nuair atá
  `PII_RESPONSE_SANITIZATION` ar siúl). Ní dhéantar dintiúir a athfhuaimnítear i
  bhfreagra sruthaithe a cheilt.
- **Bealaí díchumasaithe i gcomparáid leis an meánearra (de réir dearaidh):** déanann an meánearra
  instealladh leide a mheas lena ghlao féin ar `evaluatePromptInjection()`, gan
  aon liosta díchumasaithe atá faoi rialú an ghlaoiteora a chur ar aghaidh. Is teorainn
  éigeantach é mód `block` nach féidir le díchumasuithe faoi rialú an ghlaoiteora a sheachaint,
  lena n-áirítear ar bhealaí den teaghlach comhrá
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). Ní dhéanann díchumasú
  `prompt-injection` ach ráille cosanta na clárlainne a scipeáil.

### Na nithe a fheiceann freagra roimh an iar-ghlao

Ar an gcosán neamhshruthaithe is é seo an t-ord: asbhaint cuimhne → forghníomhú uirlisí
ionsuite → ráillí cosanta iar-ghlao → imeacht bloc iar-ghlao → stóráil sa taisce shéimeantach.

- Feiceann **eastóscadh cuimhne** agus **forghníomhú uirlisí** an freagra sular féidir le ráillí cosanta iarghlao é a athscríobh nó a bhlocáil. Ó
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401) i leith, cuireann eastóscadh cuimhne an téacs eastósctha trí `sanitizePII` nuair atá
  `PII_RESPONSE_SANITIZATION` cumasaithe (i sruthú agus i neamhshruthú araon), ach tairgtear freagra don chuimhne agus d’uirlisí fós má chuireann próiseas iarghlao bac air ina dhiaidh sin.
- Stórálann **an taisce shéimeantach** an freagra tar éis an iarghlao, mar sin stórálann sí an freagra athscríofa, agus ní chuirtear freagra blocáilte sa taisce riamh. Eochraítear iontrálacha taisce de réir na heochrach API.

## Cumraíocht

Athróga timpeallachta a léann na ráillí cosanta ionsuite:

| Athróg                                | Úsáidte ag                   | Éifeacht                                                                                                                    |
| ------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`           | Socraigh mar `false` é chun an bhrath a dhíchumasú go hiomlán.                                                              |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`           | Beartas insteallta: `warn`, `block`, nó `log`. Ní athscríobhann an luach oidhreachta `redact` téacs insteallta.             |
| `INJECTION_GUARD_MODE`                | `prompt-injection`           | Mód don chosaint insteallta; bratach ghné sa bhunachar sonraí freisin a **sháraíonn** na hathróga timpeallachta (DB > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`           | An íosdéine a dhiúltaíonn `MODE=block`: `high` (réamhshocrú), `medium`, nó `low`.                                           |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`           | Ailias oidhreachta do `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                    |
| `PII_REDACTION_ENABLED`               | `pii-masker`                 | Nuair is `true` é, ceiltear PII san iarratas (neamhspleách ar an mód insteallta).                                           |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (iartheachtach) | Rialaíonn sé iompar an chumhdaitheora ar thaobh an fhreagra.                                                                |

Léann ráillí cosanta Modality Bridge an chumraíocht ama rite ó stór na socruithe
a bhfuil tacaíocht bunachair sonraí aige (`getSettings()`), seachas ó athróga timpeallachta. Is iad príomheochracha Vision
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes`, agus
`modalityBridgeCacheMaxEntries`. Ní ghlactar leis na heochracha oidhreachta
`visionBridge*` ach mar an cúltaca léite aon timthrialla atá doiciméadaithe;
úsáideann scríobhanna ón deais na príomheochracha. Tá na réamhshocruithe agus an réiteoir
cúltaca in `src/shared/constants/modalityBridgeDefaults.ts`, agus coinnítear na tairisigh
oidhreachta in `src/shared/constants/visionBridgeDefaults.ts`.

Úsáideann Audio `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout`, agus `modalityBridgeAudioMaxClips`, chomh maith leis na socruithe comhroinnte
`modalityBridgeCache*`. Níl aon chúltaca d'eochracha oidhreachta ag Audio toisc
gur tugadh na heochracha seo isteach le scéimre Modality Bridge.

Úsáideann Video `modalityBridgeVideoEnabled`, `modalityBridgeVideoAnalysisMode`,
`modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos`, agus
`modalityBridgeVideoTimeout`, chomh maith leis na socruithe comhroinnte `modalityBridgeCache*`.
Tá sé díchumasaithe de réir réamhshocraithe toisc gur spleáchais oibríochtúla roghnacha iad
FFmpeg/ffprobe agus go gcuireann fotheidealú frámaí moill agus costas samhla leis.

## Ráillí Cosanta Saincheaptha

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

Céimeanna:

1. Cruthaigh `src/lib/guardrails/myGuardrail.ts` a shíneann `BaseGuardrail`.
2. Cuir `preCall` agus/nó `postCall` i bhfeidhm.
3. Cláraigh é ag am iompórtála (brúigh ó `registerDefaultGuardrails`) nó
   glaoigh ar `guardrailRegistry.register(...)` ag am rite — ionadaíonn an chlárlann
   aon ráille cosanta roimhe seo a bhfuil an t-ainm normalaithe céanna air.
4. Cuir tástálacha leis faoi `tests/unit/` (samplaí atá ann cheana:
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tástáil

Úsáid `resetGuardrailsForTests()` idir tástálacha chun tosú ó staid aitheanta.
Tabhair `{ registerDefaults: false }` chun tosú le clárlann fholamh agus
gan ach na ráillí cosanta atá faoi thástáil a chlárú. Glacann Vision Bridge le
hinstealladh spleáchais (`deps.getSettings`, `deps.callVisionModel`); nochtann Audio Bridge na
pointí comhfhreagracha do shocruithe, cumais, roghnú samhla STT, seiceálacha
dintiúr agus tras-scríobh. Dá bhrí sin, is féidir le tástálacha an dá shreabhadh a fheidhmiú gan rochtain ar bhunachar sonraí
ná ar líonra.

## Féach Freisin

- `src/lib/guardrails/` — cur i bhfeidhm
- `src/shared/utils/inputSanitizer.ts` — brathadóir comhroinnte a chumasaíonn
  instealladh leid agus folú PII
- `src/shared/constants/visionBridgeDefaults.ts` — réamhshocruithe Vision Bridge agus
  liosta samhlacha droichid éigeantaigh
- `src/shared/constants/modalityBridgeDefaults.ts` — réamhshocruithe comhroinnte ama rite Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — sraith ortagánach (scoradán ciorcaid, tréimhsí fuaraithe)
- `docs/reference/ENVIRONMENT.md` — tagairt iomlán d'athróga timpeallachta

## Cumhdach bealaí agus red-team don gharda insteallta (Céim 8 · Bloc D)

Clúdaíonn an garda insteallta (`createInjectionGuard` / `withInjectionGuard`) gach bealach
a ghlacann le leideanna úsáideora. Urramaíonn sé `INJECTION_GUARD_MODE` (réamhshocrú `warn` = logáil amháin;
`block` = seoltar HTTP 400 `SECURITY_001` ar ais).

| Cineál                 | Bealaí                                                                                                                                               | Mód réamhshocraithe |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| Téacs (atá ann cheana) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn                |
| Giniúnach              | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn                |
| Sonraí                 | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn                |

Clúdaíonn eastóscadh téacs (`extractMessageContents`) `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red-team (gach oíche, `nightly-llm-security.yml`):** deimhníonn promptfoo go gcuireann gach bealach bac
ar chorpas OWASP-LLM in `INJECTION_GUARD_MODE=block`; ritheann garak tóireadóirí (scipeálann sé gan rún).
Tá `moderations` san áireamh ar mhaithe le comhsheasmhacht. Is teorainn éigeantach é an mód blocála: déanann `evaluatePromptInjection()`
neamhaird den liosta díchumasaithe in aghaidh an iarratais a thugann an lárearraí dó, mar sin
ní thugann `disabledGuardrails` díolúine do bhealach uaidh ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Tá dhá jab sa sreabhadh oibre oíche (`.github/workflows/nightly-llm-security.yml`, cron + seoladh
láimhe):

- **`promptfoo-guard` (blocála)** — ritheann sé `promptfoo eval -c promptfooconfig.yaml`
  le `INJECTION_GUARD_MODE=block`. Deimhníonn gach cás sáraíochta (m.sh. "déan neamhaird de gach
  treoir roimhe seo…", éaluithe príosúin ar nós DAN) go bhfuil
  `error.code === "SECURITY_001"` sa fhreagra, i.e. gur dhiúltaigh an garda don iarratas i ndáiríre.
- **`garak` (comhairleach)** — ritheann sé garak `--probes promptinject,dan,leakreplay`
  i gcoinne ásc áitiúil OmniRoute (`http://localhost:20128/v1`). Tá sé coinníollach ar
  rún soláthraí (`PROMPTFOO_PROVIDER_KEY`); scipeálann sé go réidh agus cuirtear
  `|| true` mar iarmhír leis, ionas go dtuairiscíonn sé gan CI a chur ar theip.

Síneann cumhdach an chúntóra garda (`createInjectionGuard` / `withInjectionGuard`)
thar gach bealach `/v1` ina bhfuil leid; baintear téacs na leide as
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` le
`extractMessageContents()` in `src/shared/utils/inputSanitizer.ts`.
