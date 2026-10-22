# Guardrails (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../security/GUARDRAILS.md) · 🇪🇹 [am](../../../am/docs/security/GUARDRAILS.md) · 🇸🇦 [ar](../../../ar/docs/security/GUARDRAILS.md) · 🇦🇿 [az](../../../az/docs/security/GUARDRAILS.md) · 🇧🇬 [bg](../../../bg/docs/security/GUARDRAILS.md) · 🇧🇩 [bn](../../../bn/docs/security/GUARDRAILS.md) · 🇧🇦 [bs](../../../bs/docs/security/GUARDRAILS.md) · 🇨🇿 [cs](../../../cs/docs/security/GUARDRAILS.md) · 🇩🇰 [da](../../../da/docs/security/GUARDRAILS.md) · 🇩🇪 [de](../../../de/docs/security/GUARDRAILS.md) · 🇬🇷 [el](../../../el/docs/security/GUARDRAILS.md) · 🇪🇸 [es](../../../es/docs/security/GUARDRAILS.md) · 🇪🇪 [et](../../../et/docs/security/GUARDRAILS.md) · 🇮🇷 [fa](../../../fa/docs/security/GUARDRAILS.md) · 🇫🇮 [fi](../../../fi/docs/security/GUARDRAILS.md) · 🇮🇪 [ga](../../../ga/docs/security/GUARDRAILS.md) · 🇮🇳 [gu](../../../gu/docs/security/GUARDRAILS.md) · 🇳🇬 [ha](../../../ha/docs/security/GUARDRAILS.md) · 🇮🇱 [he](../../../he/docs/security/GUARDRAILS.md) · 🇮🇳 [hi](../../../hi/docs/security/GUARDRAILS.md) · 🇭🇷 [hr](../../../hr/docs/security/GUARDRAILS.md) · 🇭🇺 [hu](../../../hu/docs/security/GUARDRAILS.md) · 🇦🇲 [hy](../../../hy/docs/security/GUARDRAILS.md) · 🇮🇩 [id](../../../id/docs/security/GUARDRAILS.md) · 🇳🇬 [ig](../../../ig/docs/security/GUARDRAILS.md) · 🇮🇹 [it](../../../it/docs/security/GUARDRAILS.md) · 🇯🇵 [ja](../../../ja/docs/security/GUARDRAILS.md) · 🇬🇪 [ka](../../../ka/docs/security/GUARDRAILS.md) · 🇰🇭 [km](../../../km/docs/security/GUARDRAILS.md) · 🇮🇳 [kn](../../../kn/docs/security/GUARDRAILS.md) · 🇰🇷 [ko](../../../ko/docs/security/GUARDRAILS.md) · 🇱🇹 [lt](../../../lt/docs/security/GUARDRAILS.md) · 🇱🇻 [lv](../../../lv/docs/security/GUARDRAILS.md) · 🇮🇳 [ml](../../../ml/docs/security/GUARDRAILS.md) · 🇮🇳 [mr](../../../mr/docs/security/GUARDRAILS.md) · 🇲🇾 [ms](../../../ms/docs/security/GUARDRAILS.md) · 🇲🇹 [mt](../../../mt/docs/security/GUARDRAILS.md) · 🇲🇲 [my](../../../my/docs/security/GUARDRAILS.md) · 🇳🇵 [ne](../../../ne/docs/security/GUARDRAILS.md) · 🇳🇱 [nl](../../../nl/docs/security/GUARDRAILS.md) · 🇳🇴 [no](../../../no/docs/security/GUARDRAILS.md) · 🇮🇳 [or](../../../or/docs/security/GUARDRAILS.md) · 🇮🇳 [pa](../../../pa/docs/security/GUARDRAILS.md) · 🇵🇭 [phi](../../../phi/docs/security/GUARDRAILS.md) · 🇵🇱 [pl](../../../pl/docs/security/GUARDRAILS.md) · 🇵🇹 [pt](../../../pt/docs/security/GUARDRAILS.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/security/GUARDRAILS.md) · 🇷🇴 [ro](../../../ro/docs/security/GUARDRAILS.md) · 🇷🇺 [ru](../../../ru/docs/security/GUARDRAILS.md) · 🇱🇰 [si](../../../si/docs/security/GUARDRAILS.md) · 🇸🇰 [sk](../../../sk/docs/security/GUARDRAILS.md) · 🇸🇮 [sl](../../../sl/docs/security/GUARDRAILS.md) · 🇷🇸 [sr](../../../sr/docs/security/GUARDRAILS.md) · 🇸🇪 [sv](../../../sv/docs/security/GUARDRAILS.md) · 🇰🇪 [sw](../../../sw/docs/security/GUARDRAILS.md) · 🇮🇳 [ta](../../../ta/docs/security/GUARDRAILS.md) · 🇮🇳 [te](../../../te/docs/security/GUARDRAILS.md) · 🇹🇭 [th](../../../th/docs/security/GUARDRAILS.md) · 🇹🇷 [tr](../../../tr/docs/security/GUARDRAILS.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/security/GUARDRAILS.md) · 🇵🇰 [ur](../../../ur/docs/security/GUARDRAILS.md) · 🇺🇿 [uz](../../../uz/docs/security/GUARDRAILS.md) · 🇻🇳 [vi](../../../vi/docs/security/GUARDRAILS.md) · 🇳🇬 [yo](../../../yo/docs/security/GUARDRAILS.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/security/GUARDRAILS.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/security/GUARDRAILS.md)

---

> **Source de référence :** `src/lib/guardrails/`
> **Dernière mise à jour :** 2026-10-17 — v3.8.52 (ajout de [Couverture et limites](#coverage-and-limits) :
> les routes et les chemins de réponse atteints par les hooks, les en-têtes de désactivation fusionnés (#16412), le
> mode de blocage des injections comme frontière obligatoire (#16413), et ce qui voit une réponse avant l'étape post-appel)

Les garde-fous appliquent les règles de sécurité et de contenu, ainsi que les transformations, à la frontière
entre OmniRoute et les fournisseurs en amont. Chaque garde-fou peut inspecter (et
éventuellement rejeter, transformer ou annoter) les charges utiles des requêtes (`preCall`) et les
réponses en amont (`postCall`).

Le système est **tolérant aux pannes** : si un garde-fou lève une exception pendant son exécution, le registre
consigne l'erreur et poursuit avec le garde-fou suivant au lieu de faire échouer la
requête. Le blocage est une décision explicite (`block: true`), jamais un accident.
La seule exception concerne une requête abandonnée : lorsque le `signal` de l'appelant est abandonné,
un garde-fou qui lève une exception entraîne le rejet de l'exécution du hook au lieu d'être ignoré.

Les hooks ne s'exécutent **pas** sur chaque route ni sur chaque réponse. Consultez
[Couverture et limites](#coverage-and-limits) avant de vous appuyer sur un garde-fou en tant que
contrôle de sécurité.

## Garde-fous intégrés

Lors de l'importation, le registre charge automatiquement six garde-fous par ordre de priorité
(voir `registry.ts` → `registerDefaultGuardrails()`) :

| Priorité | Nom                 | Étape(s)       | Fichier               |
| -------- | ------------------- | -------------- | --------------------- |
| `5`      | `vision-bridge`     | `preCall`      | `visionBridge.ts`     |
| `6`      | `audio-bridge`      | `preCall`      | `audioBridge.ts`      |
| `7`      | `video-bridge`      | `preCall`      | `videoBridge.ts`      |
| `10`     | `pii-masker`        | `pre` + `post` | `piiMasker.ts`        |
| `20`     | `prompt-injection`  | `preCall`      | `promptInjection.ts`  |
| `95`     | `credential-masker` | `pre` + `post` | `credentialMasker.ts` |

Les numéros de priorité les plus faibles s'exécutent **en premier**.

### Passerelle de vision (`visionBridge.ts`) — Passerelle de modalité PR-1

Le modèle de base GLM 5.3 et `glm-5.3-{low,high,max}` disposent de métadonnées
de registre/spécification `supportsVision:false` explicites. Les variantes GLM 5.3 Flash
restent des modèles avec prise en charge native de la vision. La route `/v1/messages` de Claude Code entre dans
la chaîne partagée de garde-fous pré-appel `handleChat` **avant** la traduction
de Claude vers OpenAI ; les images imbriquées dans les résultats d'outil `Read` doivent être décrites ou traitées
avant que cette traduction ne les convertisse en contenu OpenAI `image_url` (#17069).

Intercepte les requêtes contenant des images et destinées à des **modèles sans vision**, puis
réachemine l'intégralité de la requête vers un modèle prenant en charge la vision ou remplace les parties
image par des descriptions textuelles produites par un modèle de vision configurable avant
l'appel en amont. Cela permet aux fournisseurs limités au texte de traiter de manière transparente
les charges utiles multimodales.

Déroulement :

1. Ignorer si le modèle cible prend déjà en charge la vision (sauf s'il figure dans la
   liste de passerelle forcée `isVisionBridgeForcedModel`).
2. Extraire les parties image via `extractImageParts(messages)`
   (`visionBridgeHelpers.ts`), qui délègue la tâche au **détecteur de médias unifié**
   `detectMediaParts()` dans `open-sse/utils/mediaParts.ts` — l'unique
   source de référence partagée avec le filtre de compatibilité des combinaisons.
   L'extraction est limitée par une liste d'autorisation aux structures que `replaceImageParts` peut réinsérer
   (le contrat extraction↔remplacement) : `image_url` d'OpenAI, `source.type:"base64"`
   en base64 d'Anthropic, `source.type:"url"` d'Anthropic et `input_image` de l'API
   Responses. Les images correspondantes imbriquées dans `tool_result.content` de Claude Code
   et dans les sorties d'outil Responses sont également extraites et remplacées à leur
   emplacement d'origine ; les structures servant uniquement d'indicateurs relèvent du filtre de combinaison
   et ne sont pas extraites.
   Ignorer si aucune n'est trouvée.
3. Résoudre la configuration d'exécution via `resolveVisionBridgeRuntimeSettings()`
   (`src/shared/constants/modalityBridgeDefaults.ts`) : les nouvelles clés de paramètres `modalityBridge*`
   prévalent ; les anciennes clés `visionBridge*` restent une **solution de repli pendant un cycle**
   (fenêtre de restauration). Ignorer avant tout parcours des médias lorsque la
   passerelle est désactivée.
4. Le sélecteur de mode (`modalityBridgeVisionMode`, voir le tableau ci-dessous) décide entre
   le réacheminement et la description. Le réacheminement renvoie `modifiedPayload` avec uniquement
   `model` remplacé, ainsi que les métadonnées `{ rerouted, fromModel, toModel, imagesKept }`.
5. Chemin de description : limiter les images à `maxImages`, composer l'invite adaptée à la tâche,
   consulter le cache des descriptions, appeler le modèle de vision **en parallèle**
   (`Promise.allSettled`) et injecter à leur place des parties textuelles `[Image N]: <description>`.
   L'échec d'une description produit `null` : l'image brute est conservée pour les
   cibles inconnues/prenant en charge la vision (#4012), mais une **cible directe confirmée comme
   limitée au texte** ou une combinaison sans aucune capacité de vision reçoit un substitut textuel explicite
   `(unavailable — no vision-capable provider connected)` pour
   chaque image non décrite, y compris en cas d'échec partiel et pour les images dépassant la
   limite d'appels de description (#17069). La solution de repli existante pour la description d'une combinaison
   dont tous les appels ont échoué reste en place (#8430).
6. Renvoyer `modifiedPayload` et les métadonnées (`imagesProcessed`, `descriptions`,
   `processingTimeMs`, `visionModel`).

#### Sélecteur de mode (`modalityBridgeVisionMode`)

| Mode       | Valeur par défaut | Comportement                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auto`     | ✔                 | Heuristique historique, inchangée (#6640/#7204) : les modèles non combinés/`auto/` sont réacheminés vers le meilleur modèle de vision, sauf si le modèle d’origine dispose déjà d’identifiants utilisables (auquel cas une description est générée) ; les cibles combinées génèrent toujours une description.                                                                                                              |
| `describe` |                   | Toujours générer une description — le bloc de réacheminement est entièrement ignoré ; le modèle choisi par l’utilisateur répond toujours.                                                                                                                                                                                                                                                                                  |
| `reroute`  |                   | Forcer le réacheminement : la protection qui conserve le modèle disposant d’identifiants est contournée. La protection des identifiants de la **cible** de réacheminement s’applique toujours — lorsqu’aucune cible de vision utilisable n’existe, la passerelle bloque la requête avec une erreur claire au lieu de générer une description ou d’envoyer les images brutes à une cible ne prenant en charge que le texte. |

Les modes forcés court-circuitent le traitement **avant** l’exécution de l’heuristique automatique ; le comportement de `auto`
est identique octet pour octet à celui du garde-fou antérieur à la PR-1.

#### Portée de la clé API (`visionBridgeKeyScope.ts`)

Lorsque la clé API de l’appelant restreint `allowedConnections`, les réserves de quotas
(`allowedQuotas`) ou les modèles (`allowedModels` / `blockedModels` /
`modelAccessMode: "restricted"` / `disableNonPublicModels`), la passerelle sélectionne uniquement
des modèles de réacheminement et de description que la clé est autorisée à utiliser, sur des connexions que la clé est
autorisée à utiliser. L’appel de description passe alors toujours par la boucle interne OmniRoute avec
l’en-tête `x-omniroute-self-loop-key-id`, afin que la requête de chat réceptrice
applique de nouveau la politique de connexion et de modèle de cette clé. `enforceApiKeyPolicy()`
n’honore cet en-tête qu’en présence du jeton porteur de la boucle interne ; il ne peut donc
que restreindre l’accès, et un identifiant qui ne peut pas être résolu est rejeté.

Si aucun modèle de vision n’est autorisé pour la clé, une **cible dont la prise en charge exclusive du texte est confirmée**
rejette localement la requête d’image avec une erreur HTTP 400 claire, au lieu de
transmettre les octets de l’image à un service en amont qui ne peut pas les traiter (#17069). Pour les cibles
dont la capacité de vision est inconnue ou native, le chemin de description conserve son précédent
comportement permissif en cas d’échec (métadonnées `{ skipped: true, reason: "no_permitted_vision_model" }`).
Les requêtes sans clé, ainsi que les clés dépourvues de ces restrictions, se comportent exactement comme
auparavant.

#### Invite de description tenant compte de la tâche (`modalityBridgeVisionTaskAware`)

Valeur par défaut : **true**. `composeVisionPrompt()` (`visionBridgeHelpers.ts`) ajoute
le texte du **dernier message utilisateur** (tronqué à 500 caractères) à l’invite de
description de base, afin d’orienter la description vers ce que l’utilisateur a réellement demandé
(selon le modèle codex-vision-proxy) et de demander au modèle de vision de transcrire le texte
visible. Lorsque l’option est désactivée — ou en l’absence de texte utilisateur — l’invite de base est utilisée sans modification.

La requête compatible OpenAI propre à la boucle interne de description (`callVisionModelSingle()`
dans `visionBridgeHelpers.ts`) demande toujours `image_url.detail: "high"` —
sans condition, pour chaque appelant/fournisseur, et sans dépendre d’un quelconque signal du client.
Un échantillonnage à faible niveau de détail dégrade la précision de l’OCR précisément pour la tâche de transcription
de texte demandée par cette invite ; l’appel de description demande donc toujours un niveau de détail élevé,
quel que soit le niveau de détail utilisé par la requête entrante d’origine. Cela
affecte uniquement le corps de la requête de description interne ; cela ne modifie pas la manière dont
OmniRoute transmet le propre `image_url.detail` de l’appelant dans la requête principale —
cette valeur par défaut est appliquée séparément, et uniquement pour les clients OpenCode détectés, dans
`defaultImageDetail()` (`open-sse/handlers/chatCore/upstreamBody.ts`). La branche au format de transmission
Anthropic de la boucle interne de description ne comporte aucun champ `detail`
et n’est affectée par aucune de ces valeurs par défaut.

#### Limite de sortie de la description (`modalityBridgeVisionMaxChars`)

| Clé                            | Valeur par défaut | Plage            |
| ------------------------------ | ----------------- | ---------------- |
| `modalityBridgeVisionMaxChars` | `0`               | `0` ou 100–50000 |

`0` (valeur par défaut) signifie **aucune limite** — la description renvoyée par
`callVisionModel()` est transmise sans modification, ce qui préserve le comportement
existant. Toute valeur comprise entre 100 et 50000 tronque la description en ajoutant un
suffixe `…` avant sa réinsertion sous la forme `[Image N]: <description>`
(`VisionBridgeGuardrail.preCall()` dans `src/lib/guardrails/visionBridge.ts`).
Augmentez cette valeur pour les tâches d’OCR riches en détails, lorsque le modèle en aval a besoin de la
transcription complète ; réduisez-la pour limiter l’utilisation de jetons par les modèles de vision prolixes.
Le champ du tableau de bord se trouve dans le panneau Avancé de l’onglet Vision
(`modality-bridge-max-chars` dans `ModalityBridgeVisionTab.tsx`) et ramène toute
valeur comprise entre 1 et 99 au minimum de 100, tout en laissant un `0` explicite
inchangé — `0` est une valeur Zod valide à part entière
(`z.union([z.literal(0), z.number().int().min(100).max(50000)])`), et pas simplement
la valeur par défaut signifiant « non défini ».

#### Cache des descriptions (`modalityBridge/bridgeCache.ts`)

Cache LRU + TTL en mémoire pour les sorties de description, partagé à l’échelle du processus.
Clé = `sha256(imageRef + composedPrompt + configuredBridgeModel)` avec
un encadrement préfixé par la longueur (aucune collision aux limites des champs). Le composant modèle correspond au
modèle de passerelle **configuré**, et non au modèle qui a effectivement répondu —
`callVisionModel` peut utiliser une solution de repli en interne, et une indexation par tentative
fragmenterait le cache. Les descriptions ayant échoué ne sont jamais mises en cache. Paramètres :

| Clé                             | Valeur par défaut | Plage   |
| ------------------------------- | ----------------- | ------- |
| `modalityBridgeCacheEnabled`    | `true`            | —       |
| `modalityBridgeCacheTtlMinutes` | `60`              | 1–1440  |
| `modalityBridgeCacheMaxEntries` | `200`             | 10–5000 |

#### Normalisation des images distantes (auto-appel de description/récupération base64)

Lorsque le bridge récupère lui-même une image **distante** — lors de l’auto-appel de description Anthropic et de la conversion base64 au format claude-wire (`ensureBase64ImagesForClaudeWire`), tous deux via `fetchRemoteImageAsDataUri()` dans `visionBridgeHelpers.ts` — l’URI de données obtenue est transmise à `normalizeDataUri()` (`open-sse/utils/imageNormalize.ts`) avant d’être intégrée à la requête adressée au modèle de vision. Les images surdimensionnées sont réduites de façon à avoir un **grand côté de 2048 px** (ce qui correspond à la limite de redimensionnement déjà appliquée côté serveur par OpenAI/Anthropic), ce qui réduit le volume de données envoyé et la latence sans modifier ce que voit le modèle de vision. Le redimensionnement utilise `sharp`, chargé via un import dynamique : sur une plateforme où son binaire natif ne parvient pas à se charger, `normalizeDataUri()` **ne lève jamais d’exception** — la fonction retransmet les octets d’origine sans les modifier, de sorte que le chemin de description/conversion base64 continue toujours de fonctionner. Les octets ne correspondant pas à une image (une récupération qui n’a pas renvoyé d’image décodable) sont également transmis sans modification. Cette normalisation est limitée aux images que le bridge récupère pour son propre auto-appel — elle n’est jamais appliquée à la charge utile brute transmise telle quelle par l’appelant, conformément au principe de mutation uniquement sur consentement explicite (règle absolue nº 20).

#### Schéma des paramètres + migration

Les nouvelles clés `modalityBridge*` sont validées par Zod dans `updateSettingsSchema` (`src/shared/validation/settingsSchemas.ts`) : `modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`, `modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`, `modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`, `modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`, le trio `modalityBridgeCache*` et le groupe `modalityBridgeAudio*` utilisé par l’Audio Bridge. La migration `141_modality_bridge_settings.sql` copie les valeurs existantes des anciennes clés `visionBridge*` vers les nouvelles clés correspondantes (de manière idempotente, sans jamais écraser une valeur `modalityBridge*` définie par l’opérateur) ; les anciennes clés restent acceptées comme solution de repli en lecture pendant un cycle de publication.

#### En-tête de transparence + statistiques

Les réponses transformées par la description contiennent `x-omniroute-modality-bridge: image->text;model=<visionModel>;parts=<n>` (construit par `buildModalityBridgeHeader()` dans `modalityBridge/bridgeStats.ts`, ajouté par `withModalityBridgeHeader()` dans `src/sse/handlers/chatHelpers.ts`). Les requêtes réacheminées ne reçoivent **aucun** en-tête — la charge utile n’a pas été modifiée et le changement de modèle est déjà visible dans le champ `model` du corps de la réponse.

`GET /api/modality-bridge/stats` (authentification de gestion, même niveau que `GET /api/settings`) renvoie les compteurs en mémoire par modalité `{ attempts, successes, bridged, cacheHits, failures, totalLatencyMs, latencySamples, averageLatencyMs, lastUsedAt }` pour `vision`, `audio` et `video`. `averageLatencyMs` utilise `latencySamples`, et non l’ensemble des tentatives, comme dénominateur ; une opération sans mesure de durée ne génère pas artificiellement un échantillon de zéro milliseconde. `bridged` reste l’alias rétrocompatible des conversions réussies ; les tentatives ayant échoué ne l’incrémentent pas. Les compteurs sont réinitialisés au redémarrage du processus par conception (il s’agit de télémétrie, pas de comptabilité).

#### Configuration du tableau de bord

La page dédiée du tableau de bord est `/dashboard/settings/modality-bridge`. Ses onglets `Vision`, `Audio` et `Video`, accessibles directement par URL, conservent les paramètres de requête lors du changement de la valeur `tab`. L’onglet Vision permet de configurer l’activation, le mode, la sélection du modèle (y compris la valeur automatique par défaut), les invites tenant compte de la tâche, les limites avancées de délai d’expiration, d’images, de longueur de description et de cache, les compteurs d’exécution ainsi qu’une requête d’exemple protégée. L’onglet Audio est également opérationnel : il permet de configurer l’activation, de sélectionner un modèle STT uniquement avec l’option Auto, de définir les limites de délai d’expiration et de durée maximale des extraits, de consulter les compteurs audio et d’effectuer un test d’exemple `input_audio`. L’onglet Video est fonctionnel : il indique l’état d’exécution de FFmpeg/ffprobe — parmi quatre états explicites de l’interface (`unknown` pendant l’exécution de la vérification ou si celle-ci n’a pas pu aboutir, `restricted` lorsque l’hôte du tableau de bord n’utilise pas l’interface de bouclage et que la vérification est donc ignorée côté client, `unavailable` après vérification et confirmation de l’absence des outils, ou `available` avec les versions de FFmpeg/ffprobe) —, conserve les limites d’activation, de modèle, d’images, de vidéo et de délai d’expiration, limite le sélecteur aux modèles prenant en charge la vision et affiche les compteurs vidéo.

L’ancienne carte Vision Bridge dans les paramètres d’IA est désormais un lien de compatibilité vers la nouvelle page ; elle ne contient plus une seconde copie du formulaire. Media Providers contient également des liens entre les workflows Image-to-Text et Speech-to-Text et les onglets Modality Bridge correspondants, sans supprimer l’espace d’expérimentation Speech-to-Text existant.

**Contournement de l’admission pour l’auto-appel en boucle :** lorsque l’appel de description est acheminé via la boucle locale `/v1` d’OmniRoute (modèle d’un fournisseur non standard), la sous-requête envoie `x-omniroute-admission-bypass: internal` et est authentifiée avec l’identifiant résolu pour la boucle locale — la sentinelle locale `sk_omniroute` en mode local, ou la clé d’environnement `OMNIROUTE_API_KEY` / `ROUTER_API_KEY` configurée par l’opérateur (#1350), afin que les déploiements avec `REQUIRE_API_KEY=true` puissent toujours exécuter l’appel de description. Le contournement n’est accepté que pour ces identifiants exacts, de sorte que les clients externes ne puissent pas utiliser l’en-tête pour contourner l’admission.

Les valeurs par défaut historiques se trouvent dans `src/shared/constants/visionBridgeDefaults.ts` ; les nouvelles valeurs par défaut du mode, de la prise en compte de la tâche et du cache, ainsi que le résolveur de paramètres, se trouvent dans `src/shared/constants/modalityBridgeDefaults.ts`. Le garde-fou expose une option de constructeur `deps` afin que les tests puissent injecter de fausses implémentations de `getSettings` et `callVisionModel`.

### Audio Bridge (`audioBridge.ts`) — Modality Bridge PR-3

Intercepte les requêtes de chat contenant de l’audio avant qu’elles n’atteignent une cible qui n’est pas connue pour accepter les entrées audio. Il ne réachemine jamais la requête de chat : les parties audio sont transcrites via le point de terminaison multipart compatible avec OpenAI existant, puis le modèle de chat choisi poursuit le traitement avec les transcriptions textuelles.

Flux :

1. Résoudre `supportsAudio` via `getResolvedModelCapabilities()`. Les métadonnées
   explicites du registre de fournisseurs prévalent, suivies des métadonnées
   statiques du modèle, puis de `modalities_input` synchronisé. Une liste
   d’entrées déclarée sans `audio` vaut `false` ; en l’absence de tout élément
   attestant la capacité, la valeur reste `null`. `false` et `null` activent
   tous deux la passerelle conservatrice, tandis que `true` la contourne.
2. Résoudre les paramètres `modalityBridgeAudio*` et extraire les parties audio
   de premier niveau pouvant être remplacées dans chaque message au moyen du
   détecteur partagé `detectMediaParts()`. Les formats de transport pris en
   charge sont `input_audio` d’OpenAI, `audio_url` et
   `source.media_type: "audio/*"`. L’audio imbriqué est détecté pour le routage,
   mais n’est pas supprimé par le chemin de remplacement. Le travail est limité
   par `modalityBridgeAudioMaxClips` ; les parties suivantes restent intactes.
3. Respecter un `provider/model` configuré, ou laisser
   `selectAudioBridgeModel()` parcourir `AUDIO_TRANSCRIPTION_PROVIDERS` dans
   l’ordre stable du catalogue et sélectionner le premier modèle disposant
   d’un identifiant actif et utilisable pour le fournisseur.
4. `callAudioTranscription()` convertit l’audio base64 ou issu d’une URI de
   données en un `file` multipart, ou télécharge un `audio_url` distant via la
   protection des sorties réservées aux destinations publiques, avec épinglage
   DNS et une limite de 25 Mo. Il envoie ensuite, par POST, le fichier et le
   modèle sélectionné à la boucle locale `/v1/audio/transcriptions`, authentifiée
   avec `resolveSelfLoopBearer()`. La route de transcription existante effectue
   la recherche normale des identifiants, la gestion des délais de
   rétablissement et des limites de débit, ainsi que la répartition vers le
   fournisseur.
5. Les appels réussis remplacent leurs parties par
   `[Audio N]: <transcript>`. Les appels s’exécutent avec `Promise.allSettled` :
   un échec individuel conserve la partie audio d’origine (contrat #4012). Si
   tous les appels échouent et qu’il est établi que la cible a
   `supportsAudio === false`, les parties deviennent
   `[Audio N]: (unavailable — no STT provider connected)` (contrat #8430). Pour
   une cible inconnue (`null`), le résultat reste intact si tous les appels
   échouent. Une cible dont il est établi qu’elle ne prend en charge que le
   texte et pour laquelle aucun identifiant STT utilisable n’est disponible
   reçoit le même substitut explicite, sans appel réseau.

Les transcriptions réussies utilisent le cache LRU/TTL de Modality Bridge à
l’échelle du processus. La clé combine la référence audio, le libellé
d’opération stable `audio-transcription` et le modèle STT sélectionné ; les
échecs ne sont jamais mis en cache. Les tentatives audio mettent à jour les
compteurs partagés `bridged`, `cacheHits`, `failures` et `lastUsedAt`. Les
réponses transformées comportent
`x-omniroute-modality-bridge: audio->text;model=<sttModel>;parts=<n>` ; les
requêtes laissées intactes ne reçoivent aucun segment Audio Bridge.

Les paramètres d’exécution sont stockés en base de données et validés par Zod :

| Clé                           | Valeur par défaut | Plage          |
| ----------------------------- | ----------------- | -------------- |
| `modalityBridgeAudioEnabled`  | `true`            | —              |
| `modalityBridgeAudioModel`    | `""`              | Auto ou ID STT |
| `modalityBridgeAudioTimeout`  | `60000`           | 1000–300000    |
| `modalityBridgeAudioMaxClips` | `3`               | 1–10           |

Le cache partagé reste contrôlé par `modalityBridgeCacheEnabled`,
`modalityBridgeCacheTtlMinutes` et `modalityBridgeCacheMaxEntries`.

### Video Bridge (`videoBridge.ts`, `videoBridgePipeline.ts`)

Intercepte les parties vidéo de premier niveau dans les `messages` de Chat
Completions et l’`input` de l’API Responses avant l’appel d’une cible ne
disposant pas d’une prise en charge vidéo native connue. Les formats pris en
charge sont `input_video`, `video_url`, `video_source`, les URL HTTPS et les URI
de données `data:video/*;base64,...`. Les noms de fichiers simples présents
dans le texte ne sont pas traités comme des vidéos.

`VideoBridgeGuardrail.preCall` (`videoBridge.ts`) gère le parcours de la
requête, la vérification des capacités et des politiques, l’agrégation par
requête et la charge utile de la réponse. Le traitement propre à chaque vidéo —
acquisition, cache du résultat complet, description d’une séquence d’images
(qui fusionne toute transcription audio déclarée par l’appelant), ainsi que
mesures, abandon et nettoyage pour chaque tentative — est masqué derrière
`processVideoPart` dans `videoBridgePipeline.ts`, appelé une fois par partie
vidéo dans la boucle de `preCall`. Ce module définit également les limites de
ports explicites `VideoMediaBrokerPort` (acquisition des octets et extraction
des images échantillonnées), `VideoAudioTranscriptionPort` (fusion d’une
transcription audio déclarée par l’appelant avec les légendes échantillonnées)
et `VideoDrilldownPort` (limite de persistance de l’analyse détaillée des
images ; pas encore raccordée à `processVideoPart` — seule la route distincte
`/api/modality-bridge/video/drilldown` écrit actuellement des entrées d’analyse
détaillée).

Le chemin de requête public `/v1` n’importe ni n’invoque jamais de
sous-processus. Les vidéos distantes sont téléchargées dans une limite de
50 Mio ; les vidéos inline en base64 ont une limite prudente de 36 Mio décodés
par vidéo, afin que l’enveloppe du modèle, des messages et du cadrage puisse
rester dans la limite publique d’admission des requêtes JSON de 50 Mio. La
longueur inline et les estimations de taille décodée sont vérifiées avant
l’allocation. HTTPS est requis pour l’URL distante initiale et pour chaque
redirection, au moyen de la protection existante des sorties réservées aux
destinations publiques, avec épinglage DNS. Les octets franchissent ensuite
l’exacte frontière interne du courtier
`POST /api/modality-bridge/video/extract`. Cette route est à la fois
`LOCAL_ONLY` et `SPAWN_CAPABLE`, n’accepte que les requêtes authentifiées par
processus provenant d’une boucle locale de confiance, et n’accepte jamais
d’URL, de chemin de système de fichiers, d’exécutable ni de liste d’arguments.
Le pipeline de limitation de taille du corps de l’API et le lecteur incrémental
du corps du gestionnaire imposent indépendamment une limite d’entrée de 50 Mio
pour le courtier. Sa file d’attente bornée exécute une extraction à la fois,
autorise quatre tâches en attente et limite les données d’entrée en attente à
100 Mio.

À l’intérieur du broker, `ffprobe` lit un fichier local privé ; la liste d’autorisation fixe des formats exclut les formats de playlists et de manifestes. Pour les conteneurs autorisés de la famille MOV, les références externes aux données MOV restent désactivées par défaut, et la commande fixe ne les active pas. `ffprobe` et `ffmpeg` utilisent tous deux la liste blanche de protocoles limitée à `file`, un seul thread, des tableaux d’arguments fixes, aucun shell, et des exécutables résolus depuis `PATH`. Les flux d’images de couverture jointes ne sont pas des candidats lisibles. Tous les flux lisibles doivent respecter les limites, et un flux par défaut explicite est privilégié avant le repli déterministe vers l’index le plus bas. Les vidéos sont limitées à 600 secondes, 8 192 pixels par dimension et 33 554 432 pixels source. FFmpeg échantillonne 1 à 16 images JPEG aux points médians, réduit la plus grande dimension à 1 024 pixels au maximum sans agrandir les entrées plus petites, et ne reçoit jamais d’URL. L’échantillonnage est `uniform` par défaut. Les politiques facultatives `scene_aware` et expérimentales `segment_aware` effectuent une passe FFmpeg fixe supplémentaire sur le flux local déjà validé, sélectionnent des horodatages de scène `showinfo` bornés et reviennent de manière déterministe aux mêmes points médians uniformes en cas d’échec du détecteur, d’expiration du délai, de sortie mal formée ou d’ensemble de candidats vide. Le mode tenant compte des segments alloue les échantillons aux points médians proportionnellement aux intervalles de scène validés ; les éléments de preuve du mode tenant compte des segments et son comportement de repli sont détaillés ci-dessous. La limite stricte de 16 images est appliquée après la sélection pour chaque politique. Lorsqu’une requête tenant compte des scènes ne dispose que d’un budget d’une seule image, elle utilise le point médian uniforme de la fenêtre active couvrant la vidéo entière ou de la fenêtre de focus, et indique `policyEffective: uniform` : une seule image de scène sélectionnée ne peut pas préserver les deux extrémités temporelles. Un appelant peut éventuellement fournir une fenêtre de focus finie (`start`/`end` en secondes) ; les bornes sont limitées à la durée du média, les fenêtres inversées ou non finies sont rejetées, et toutes les politiques d’échantillonnage sont appliquées uniquement dans l’intervalle normalisé. La fenêtre résultante est incluse dans les métadonnées d’échantillonnage et dans le préfixe de description non fiable afin que les modèles en aval puissent distinguer un extrait ciblé de la chronologie complète.

Le focus sémantique des légendes est un paramètre distinct et explicite. Le mode d’analyse `full` par défaut conserve l’invite d’image existante et ne transmet jamais le texte de la requête au modèle de légendage. En mode `focused`, le pont lit uniquement le dernier `text`/`input_text` non vide rédigé par l’utilisateur dans le même conteneur Chat ou Responses, le normalise en NFC, réduit les caractères de contrôle et les espaces, et le limite à 500 points de code Unicode. Un résultat vide entraîne un retour à l’invite `full` exacte. Un indice exploitable est sérialisé au format JSON dans un bloc dédié au contexte utilisateur non fiable et ne peut que donner la priorité à des détails observables ; il ne peut pas contourner l’avertissement distinct interdisant de suivre les instructions visibles ou audibles dans le média. Le focus textuel ne déduit jamais `start`/`end` et ne modifie pas l’échantillonneur temporel.

#### Éléments de preuve structurels des segments FU-07

`segment_aware` utilise une passe de préanalyse bornée sur le flux vidéo local déjà validé. La chaîne de filtres fixe commence par réduire la largeur à 320 pixels au maximum, détecte les changements de scène et les intervalles figés, puis échantillonne à 1 image par seconde pour mesurer le flou, la luminance moyenne ainsi que les informations spatiales et temporelles. La passe est limitée à 600 échantillons structurels, à un thread FFmpeg/de filtre, aux mêmes listes d’autorisation limitées au protocole `file` et aux conteneurs autorisés, à une sortie de processus maximale de 1 Mio et à 30 secondes au maximum dans le cadre partagé d’abandon/de délai du broker. Elle n’accepte jamais de commande, de filtre, de chemin ou d’URL provenant de la requête.

Les valeurs structurelles sont des éléments de preuve d’échantillonnage déterministes, et non une compréhension sémantique de la vidéo. Elles ne déduisent ni sujets, ni actions, ni légendes, ni paroles, ni intention de l’utilisateur. Les limites de scènes et de gels forment des segments ; la couverture des gels, le flou, l’exposition, le niveau de détail spatial et les changements temporels influencent uniquement la manière dont le budget existant de 1 à 16 images est alloué. Un segment entièrement figé est limité à une seule image, tandis que les segments non figés se disputent le budget restant. Lorsque le nombre de limites dépasse celui des images, une couverture uniforme de la chronologie est conservée afin que des coupes rapides au début ne puissent pas masquer un long segment final. Les limites de scène situées dans la résolution d’analyse de 1 seconde autour d’une limite de gel sont fusionnées.

Des filtres manquants, des éléments de preuve mal formés ou vides, une erreur du détecteur ou l’expiration du délai de préanalyse borné entraînent un retour permissif à la politique exacte des points médians uniformes. Un abandon par l’appelant ou l’expiration du délai du broker n’entraîne pas de retour permissif : cela met fin au sous-processus en cours, empêche toute extraction d’image ultérieure, et l’arborescence temporaire privée est supprimée dans `finally`.

`scripts/perf/video-bridge-fu07-eval.ts` génère des jeux de données FFmpeg réels et déterministes pour évaluer les économies d’appels de légendage après déduplication, l’allocation du budget en présence de mouvements denses, les éléments de preuve de flou/d’exposition/SI-TI, les coupes rapides suivies d’une longue séquence finale et les faux positifs dus aux fondus progressifs. Il enregistre le temps écoulé de la préanalyse et, lorsque `/usr/bin/time` est disponible, le temps processeur des processus enfants et le pic RSS. Ses contrôles de qualité sont uniquement des oracles structurels. La qualité réelle du modèle de légendage reste `HOLD`, car ce banc d’essai ne dispose d’aucun point de terminaison autorisé ni d’aucun juge figé. Les économies monétaires restent également `HOLD`, sauf si `--caption-cost-per-call-usd` fournit une estimation positive explicite du coût par appel ; le script ne fabrique jamais aucun de ces résultats.

Chaque trame est limitée à 4 Mio, l’ensemble des trames brutes à 23 Mio et la réponse sérialisée du broker à 32 Mio. Un répertoire temporaire privé est supprimé dans `finally`. OmniRoute n’intègre pas FFmpeg et n’accepte pas de chemin d’exécutable personnalisé. Avant le sous-titrage, le bridge applique une passe prudente de déduplication visuelle : chaque JPEG est réduit à un tampon en niveaux de gris de 16×16 et comparé uniquement à la dernière trame conservée. Pour un budget de sous-titrage demandé supérieur à une trame, l’extraction fournit un ensemble borné de candidats pouvant atteindre jusqu’à deux fois ce budget, sans jamais dépasser 16 trames. La limite demandée n’est appliquée qu’après la déduplication, les premier et dernier candidats sélectionnés étant conservés lors de la réduction finale lorsque le budget est d’au moins deux. La politique versionnée `grayscale-16x16-mean-cells-v2` utilise la plus grande valeur entre l’écart moyen de luminance et la proportion de cellules de la miniature dont l’écart normalisé est au moins égal à 0,05. Le seuil de détection des doublons est la constante 0,04, choisie pour sa prévisibilité plutôt que proposée comme paramètre d’exécution. Ce signal secondaire à fort contraste préserve les petits mouvements et les modifications de texte visible qu’une comparaison fondée uniquement sur la moyenne peut masquer. Les erreurs du comparateur ou du décodeur n’entraînent pas de blocage et la couverture est conservée. Les métadonnées de sortie distinguent les candidats extraits, les trames utilisées avec succès et les doublons visuels supprimés.

Une partie vidéo explicitement marquée peut demander une planche-contact horodatée. Le bridge construit une grille JPEG comportant au maximum 4 colonnes et 16 trames. Chaque cellule de 512 pixels incruste l’horodatage de sa source dans une bande inférieure à fort contraste, tandis que les mêmes horodatages restent présents dans les métadonnées textuelles afin de permettre leur association et leur audit en aval. Le JPEG complet reste limité à 32 Mio. Si `sharp` ne parvient pas à décoder ou à composer la grille, le bridge se rabat sur les trames JPEG individuelles ; une interruption par le client continue de se propager pendant l’opération de création de la planche.

Les éléments justificatifs de promotion sont délibérément séparés du microbenchmark de composition synthétique. `scripts/perf/video-bridge-contact-sheet-eval.ts` définit un banc d’essai A/B à schéma versionné pour de véritables modèles de vision compatibles avec OpenAI. Il mesure les jetons déclarés par le fournisseur, la latence murale de bout en bout (composition de la planche comprise), le nombre d’appels au modèle et la conservation des faits définis dans le manifeste. Les réponses brutes du modèle ne sont pas écrites dans le rapport ; seuls les condensats SHA-256 et les identifiants des faits correspondants sont conservés. Le banc d’essai n’effectue aucun appel réseau ni aucun appel à un modèle payant, sauf si `--execute-real` est fourni et que `--model`, `OMNIROUTE_BASE_URL` et `OMNIROUTE_API_KEY` sont configurés. Sans cette exécution réelle explicite, son verdict lisible par machine reste `HOLD` ; les mesures synthétiques de la charge utile et du nombre d’appels ne constituent pas à elles seules des éléments justificatifs de promotion.

Les appelants peuvent joindre un tableau facultatif `transcript.cues` à une partie vidéo prise en charge lorsqu’ils disposent déjà d’un texte aligné. Chaque repère doit comporter `text`, un intervalle `start`/`end` fini compris dans la durée détectée, ainsi qu’une `source` figurant sur la liste blanche (`client`, `embedded` ou `audio-bridge`) ; `confidence` vaut `1` par défaut et doit rester compris entre `0` et `1`. Les repères strictement identiques sont fusionnés. OmniRoute ne lance jamais de transcription à partir de ces métadonnées : les repères validés sont copiés dans le résultat décrit avec leur source, leur niveau de confiance et leur intervalle, puis affichés comme des observations non fiables à côté des sous-titres des trames. Tout texte non valide, hors limites ou dépourvu de provenance est rejeté plutôt que mélangé au flux de sous-titres. Les deux canaux de transcription du corps de la requête normalisent la provenance fournie en `client`, y compris les libellés `embedded` ou `audio-bridge` autodéclarés. Seul un adaptateur contrôlé par le serveur peut attribuer ces libellés fiables via l’argument de code uniquement `trustedSource` ; un champ JSON de la requête ne peut pas atteindre cet argument. Le texte de la transcription reste un contenu non fiable dérivé du média, quelle que soit sa provenance, et ne doit jamais déterminer l’autorisation.

Un appelant avancé peut fournir une piste `audioTranscript` pour la même vidéo ; elle est traitée comme du texte fourni par le client et non comme la preuve d’une transcription effectuée par le serveur. Le point de fusion exécute les observations visuelles et audio sous un même délai et avec un même signal d’interruption, les ordonne sur une chronologie commune, fusionne les doublons strictement identiques et renvoie un résultat partiel lorsqu’un seul des deux côtés aboutit. Une valeur `audioTranscript` non valide produit ce résultat partiel — la description visuelle est conservée et la branche audio enregistre un code d’échec assaini — au lieu de faire échouer l’ensemble de la vidéo. La disponibilité de chaque branche, l’indicateur de résultat partiel et les codes d’échec assainis sont conservés dans le résultat décrit, dans les métadonnées des garde-fous (`audioFusionRuns`/`audioFusionPartials`/`audioFusionFailureCodes`), dans les métadonnées du cache de résultats et dans les compteurs de fusion du bridge. Le chemin par défaut de Video Bridge n’invoque pas de conversion de la parole en texte et ne télécharge pas de seconde copie du média ; en l’absence de cette piste explicite, il reste exclusivement vidéo.

**Conservation des transcriptions (#12150 P1).** Cela s’applique automatiquement chaque fois que le
Video Bridge (lui-même soumis à une activation explicite) restitue un segment de transcription — il n’existe aucun indicateur
de conservation distinct. Lorsqu’une requête restitue un segment de transcription (un
`transcript` déclaré par l’appelant ou un `audioTranscript` fusionné), le garde-fou le marque comme
`videoBridgeObserved` et produit une copie expurgée de la description de la vidéo —
un rendu identique dans lequel le corps en texte libre de chaque segment est remplacé par
`[redacted-video-transcript]`, construit en substituant le champ structuré du segment
avant l’assemblage de la chaîne (jamais en analysant le texte aplati, afin qu’aucun contenu
de segment — hostile ou ordinaire, y compris les corps contenant `]` tels que
`[inaudible]`/`[music]` — ne puisse subsister). Le corps de requête conservé dans le journal
des appels remplace chaque partie textuelle dérivée de la vidéo par cette copie expurgée,
appariée par égalité de contenu ; l’ancre `fullText` est relue depuis la charge utile finale
du garde-fou précédant l’appel, de sorte que la correspondance réussit encore après que des
garde-fous ultérieurs de la chaîne (les mécanismes de masquage des données personnelles et
des identifiants, de priorités 10/95) ont réécrit sur place le texte de la description, et
après que l’injection du prompt système, du transfert de contexte et de la mémoire a
remodelé le tableau de messages. Le corps envoyé en amont au modèle reste inchangé. Une
requête observée ne renseigne également aucune mémoire durable (les extractions dérivées
de la requête comme de la réponse sont ignorées), afin que la propre réponse du modèle ne
puisse pas recopier du texte de transcription dans la mémoire.

**Champs vidéo bruts (#12430).** Lorsque le pont est activé et que la prise en charge native de la vidéo est inconnue ou absente, les champs `transcript`/`audioTranscript` définis activent également `videoBridgeObserved`, même après l’échec de la description ou l’atteinte d’une limite `maxVideos`. `null` et les chaînes vides sont pris en compte ; les champs absents et les métadonnées non vidéo ne le sont pas. Les copies conservées expurgent ces champs ou omettent la requête, et les caches/la mémoire sont contournés.

Sur ces chemins de repli, les segments valides fournis par l’appelant deviennent des parties
`text`/`input_text` prises en charge plutôt que des champs fournisseur non standard. Les deux
pistes fournies avec la requête restent des observations `client` non fiables, accompagnées
d’un avertissement explicite indiquant que la vidéo n’a pas été décrite et que les horodatages
n’ont pas été vérifiés par rapport au média. Les budgets existants de 256 segments/64 Kio au
total et par segment s’appliquent aux deux pistes conjointement ; les horodatages doivent
respecter le plafond de 600 secondes du courtier ainsi que toute fenêtre de focalisation
fournie. Les pistes non valides sont rejetées et ne sont pas transmises comme du texte
arbitraire ; une piste sœur valide peut néanmoins être utilisée, sauf si leur budget combiné
est dépassé. Les champs nuls/vides n’ajoutent aucun texte. Ce mécanisme de repli n’ajoute
aucune récupération ni transcription du média. Les champs d’extension de transcription sont
supprimés du conteneur vidéo de repli et de ses objets `video_url`/`source`. La liste
d’autorisation filaire d’OpenAI reste stricte ; les conteneurs vidéo dont la prise en charge
native est inconnue restent disponibles et les cibles connues pour ne prendre en charge que
le texte conservent des marqueurs sûrs. Les copies d’expurgation structurées protègent le
texte de transcription ajouté, tandis que la requête d’origine appartenant à l’appelant reste
inchangée. Les cibles disposant d’une prise en charge native et les ponts désactivés conservent
leur comportement de contournement actuel.

Les autres copies conservées utilisent le même signal de requête observée. L’instantané brut
de la requête client antérieur au garde-fou, la requête en attente en mémoire et le journal
des requêtes rejetées précocement remplacent structurellement les champs de transcription
dans les parties vidéo ; les prompts sous forme de chaînes synthétisés par les étapes du
pipeline et le transfert de contexte sont expurgés au niveau du récepteur du corps de requête
conservé. Le marqueur `video_content_removed` conservé fait échouer de manière fermée la
continuation `previous_response_id` plutôt que de reconstruire un texte qui a été
intentionnellement supprimé. Si une requête observée perd sa copie d’expurgation par partie
avant la journalisation, ou si ne serait-ce qu’une seule des différentes copies vidéo ne
correspond plus après des mutations ultérieures de la requête, le corps de requête conservé
est entièrement omis plutôt que de conserver une transcription partiellement expurgée.

Pour une requête observée, une réponse du modèle peut citer n’importe quelle partie de la
transcription sans limite de segment structurée. Son `responseBody` conservé dans le journal
des appels est donc remplacé par un marqueur d’omission ; l’artefact détaillé du pipeline
(qui peut inclure les corps en amont/client et les fragments du flux) n’est pas conservé. Les
caches sémantique, d’idempotence et de relecture du raisonnement contournent les lectures et
les écritures pour cette requête. La requête au fournisseur et la réponse visible par le
client restent inchangées. Les octets de maintien de connexion envoyés précocement sont
vidés du tampon temporaire lorsque l’artefact détaillé est omis. L’avertissement EventStream
mal formé de Kiro indique uniquement le nombre d’octets de la charge utile, jamais son
contenu ni l’erreur brute de l’analyseur JSON.
Cela ne prétend pas que tous les diagnostics sans rapport des fournisseurs/plugins ont été
audités ; l’examen plus large des récepteurs conservés est suivi dans #11658.

Le cycle de vie interne `/api/modality-bridge/video/drilldown` constitue un substrat de cache
distinct, authentifié par bouclage/jeton. Chaque opération requiert également un identifiant
de principal opaque canonique. Avant qu’un appelant de production ne soit activé, il doit
dériver cet identifiant du locataire authentifié et ne doit jamais transmettre une valeur
choisie par le client. Les clés de cache associent ce principal aux identifiants canoniques
de session et de référence vidéo, ne stockent que leurs clés dérivées par SHA-256 et limitent
les lectures comme les suppressions au même principal. Le cache stocke au plus 16 images JPEG
dérivées par entrée, les fait expirer après dix minutes et prend en charge des lectures
bornées par `start`/`end` ou la suppression explicite d’une session.

Chaque principal est limité à 16 entrées et 64 Mio de données JPEG canoniques. Ces limites
sont indépendantes du plafond global de 64 entrées/256 Mio : la pression exercée par le quota
d’un principal évince uniquement les entrées les moins récemment utilisées de ce principal
avant d’envisager une éviction LRU globale. Les entrées expirées sont retirées de la
comptabilisation par principal et globale lors de l’activité du cache, tandis qu’une
annulation ou un échec de validation ne valide pas un remplacement partiel.

Le cache rejette le Base64 non canonique, le remplissage excessif, les médias non-JPEG, les JPEG malformés ou
tronqués, ainsi que les JPEG qui produisent un avertissement lors d’un décodage complet et borné de l’image avec `sharp`.
Il réencode chaque image acceptée en JPEG canonique, détermine la largeur et la hauteur
à partir des octets décodés au lieu de faire confiance aux champs de l’appelant, et supprime tous les octets
polyglottes de fin plutôt que de les conserver. Seul le tampon compressé canonique borné
est imputé aux deux quotas. La limite de transmission JSON inclut la surcharge Base64 correspondant au plafond de
32 Mio pour l’entrée décodée. Chaque
dérivation stockée enregistre son format et sa résolution JPEG validés, sa politique d’échantillonnage,
sa version de dérivation, son heure de création, son hachage de contenu calculé par le serveur et sa référence
parent hachée, ainsi que le hachage du contenu parent fourni par l’appelant de confiance. L’annulation est vérifiée
entre les phases asynchrones de décodage et de hachage, avant la validation atomique dans le cache.

Cette tranche ne connecte pas encore de producteur de production à la route et ne
fournit pas de sélection de variantes multirésolutions. Le chemin de requête transparent de Video Bridge
n’entraîne donc aucun travail supplémentaire, tandis que la dérivation du principal lié au locataire et
le cycle de vie multirésolution complet de FU-08 restent explicitement des travaux de suivi plutôt
que des comportements documentés comme achevés.

Les images sont légendées séquentiellement avec le modèle Video configuré. Un remplacement Video
vide hérite du paramètre Vision ; si les deux sont vides, le routeur automatique de Vision
sélectionne le modèle effectif prenant en charge la vision. Les légendes générées avec succès
remplacent la partie d’origine par un préfixe stable `[Video description:` qui
marque également le texte comme une observation non fiable dérivée d’un média et indique aux modèles
en aval de ne pas suivre les instructions trouvées dans le média. Les clés de cache des légendes d’images
incluent les octets JPEG, le prompt, l’horodatage et le modèle effectif ; seules les légendes
générées avec succès sont mises en cache. Les entrées du cache conservent le modèle producteur ayant réellement réussi,
y compris lorsqu’il s’agit d’un modèle de repli ; le pont signale `mixed` lorsque différentes images
ont été produites par différents modèles. Une occurrence trouvée dans le cache réutilise cette identité de producteur
au lieu de la réétiqueter comme le plan de routage demandé. Le cache de résultats pour l’ensemble de la vidéo
est indexé sur chaque entrée qui modifie la sortie — le prompt, le modèle effectif,
la politique d’échantillonnage, le nombre d’images, le mode d’analyse sémantique, l’empreinte SHA-256
de l’indication de focalisation normalisée, la fenêtre de focalisation, `transcript`,
`audioTranscript` et l’indicateur de planche-contact — de sorte que toute modification de l’une de ces
dimensions entraîne un échec de cache, jamais la réutilisation d’une valeur obsolète. La version de la politique
de déduplication visuelle, son seuil et le nombre borné d’images candidates sont également explicites dans la
clé et les métadonnées du cache de résultats ; une modification de la politique ne peut donc pas réutiliser une
description obsolète de la vidéo complète. Les métadonnées v4 du cache de résultats conservent le mode et
l’empreinte, jamais la tâche brute de l’utilisateur. Les métadonnées des garde-fous indiquent à la fois les
modes d’analyse demandé et effectif ; un mode `focused` demandé sans
texte utilisateur exploitable est signalé comme étant effectivement `full`.

Le garde-fou extrait chaque partie vidéo prise en charge, mais n’en décrit pas plus de
`modalityBridgeVideoMaxVideos`. Pour une cible dont il est établi qu’elle possède
`supportsVideo === false`, les vidéos ayant échoué et celles dépassant la limite deviennent des marqueurs textuels
sûrs explicites, afin qu’aucune vidéo brute ne subsiste. Lorsque la capacité est inconnue, ces parties
conservent leur conteneur vidéo ; toute transcription de repli suit la conversion textuelle bornée
ci-dessus. Les cibles avec `supportsVideo === true` contournent le pont.
Le signal d’abandon de la requête cliente se propage au téléchargement, à la file d’attente du courtier,
aux sous-processus et aux appels de légendage ; les abandons interrompent le traitement entre les vidéos et ne laissent
jamais passer le média brut en cas d’échec.

Les paramètres d’exécution sont stockés dans la base de données et validés par Zod :

| Clé                                 | Valeur par défaut | Plage / comportement                                                                                               |
| ----------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| `modalityBridgeVideoEnabled`        | `false`           | Environnement d’exécution facultatif, avec activation explicite                                                    |
| `modalityBridgeVideoAnalysisMode`   | `"full"`          | `full` conserve les légendes génériques ; `focused` utilise le contexte borné et non fiable du dernier utilisateur |
| `modalityBridgeVideoModel`          | `""`              | Hérite du modèle Vision Bridge                                                                                     |
| `modalityBridgeVideoFrameCount`     | `8`               | 1–16                                                                                                               |
| `modalityBridgeVideoSamplingPolicy` | `"uniform"`       | `uniform`, `scene_aware` ou `segment_aware` proportionnel ; un échec du détecteur revient à `uniform`              |
| `modalityBridgeVideoMaxVideos`      | `1`               | 1–4                                                                                                                |
| `modalityBridgeVideoTimeout`        | `120000`          | 1000–120000 ms                                                                                                     |

Les anciennes valeurs persistées du délai d’expiration Video supérieures à 120 secondes sont plafonnées au
délai du courtier ; les nouvelles écritures de paramètres dépassant cette limite sont rejetées.
`GET /api/modality-bridge/video/runtime` exige une localisation de bouclage local
fiable et certifiée avant toute authentification ou détection de l’environnement d’exécution, puis requiert une
authentification de gestion. Il renvoie uniquement `available`, les versions nettoyées de FFmpeg/ffprobe et une raison
fixe lorsque l’environnement d’exécution n’est pas disponible. Le point de terminaison d’extraction interne n’est pas
une API publique de téléversement : la saturation de la file d’attente renvoie `503` avec `Retry-After`, une déconnexion
de l’appelant renvoie `499` et le délai fixe du courtier renvoie `504`. Les réponses converties ajoutent
`video->text;model=<visionModel>;parts=<videos>` à l’en-tête central
`x-omniroute-modality-bridge` sans supprimer les segments Vision ou Audio.

### Masqueur de PII (`piiMasker.ts`)

S’exécute lors des **deux** étapes.

- **`preCall`** clone la charge utile, parcourt `system`, `messages`, `input` et
  `prompt` (y compris les éléments qui sont de simples chaînes), et applique
  `processPII()` (depuis `@/shared/utils/inputSanitizer`) aux champs
  `content`/`text` de type chaîne. Lorsque `PII_REDACTION_ENABLED=true`, les
  données personnelles détectées sont masquées dans la charge utile sortante.
  Ce comportement est indépendant de `INPUT_SANITIZER_MODE` (qui contrôle
  uniquement la politique relative aux injections de prompt). Lorsque le
  masquage est désactivé, l'appel enregistre les nombres de détections sans
  réécrire le contenu.
- **`postCall`** clone intégralement la réponse, exécute
  `sanitizePIIResponse()` ainsi que le masqueur adapté à la structure de l'API
  Responses (`maskResponsesOutput` — couvre `output_text` et
  `output[].content[].text`). Si un masquage est effectué, la réponse modifiée
  remplace la réponse d'origine.

La mesure de protection ne bloque jamais ; elle se contente d'ajouter des
annotations (`meta.detections`, `meta.redacted`) ou de réécrire le contenu.

#### Sélection par type, modèles personnalisés et compteurs de détection

**Tableau de bord → Paramètres → Sécurité → Masquage des données personnelles**
permet de choisir _ce qui_ est masqué. Cette option n'active pas le masquage :
celui-ci dépend toujours de `PII_REDACTION_ENABLED` (requête) et de
`PII_RESPONSE_SANITIZATION` (réponse + SSE), tous deux désactivés par défaut.

- **Sélection par type** — les identifiants intégrés sont répertoriés dans
  `src/shared/constants/piiTypes.ts` (`PII_BUILTIN_TYPES`). Une valeur non
  définie signifie que tous les types sont sélectionnés (comportement antérieur
  à l'existence de ce paramètre). Le modèle `ssn_us` du moteur de requête
  correspond à `ssn`. Les modèles prédéfinis (Minimal, Standard, Financial,
  Brazilian, USA, Full) servent uniquement à remplir les cases à cocher dans
  l'interface utilisateur.
- **Modèles personnalisés** — jusqu'à 20 expressions régulières ou modèles
  génériques (`*` = jusqu'à 64 caractères autres que des espaces, `?` = un
  caractère). Les correspondances deviennent `[CUSTOM_REDACTED]`. Chaque modèle
  est traité par `compilePiiCustomPattern()`
  (`src/shared/utils/piiCustomPatterns.ts`) : 500 caractères au maximum,
  indicateurs limités à `g i m s u`, compilation obligatoire, validation par
  `safe-regex` (rétroaction catastrophique) et interdiction de correspondre à
  une chaîne vide ou à un espace réservé de masquage. Un modèle qui échoue est
  refusé lors de l'enregistrement et du test, tandis qu'une ligne déjà stockée
  qui échoue est ignorée à l'exécution au lieu d'être compilée. Les modèles
  personnalisés ne sont exécutés que lorsque le masquage est activé.
- **Compteurs de détection** — nombres par type (jamais les valeurs
  correspondantes), conservés en mémoire et réinitialisés au redémarrage
  (`src/lib/pii/piiDetectionStats.ts`). Ils n'augmentent que lorsque le masquage
  est activé.

Les paramètres sont stockés dans la table `key_value` (espace de noms
`pii_settings`, `src/lib/db/piiSettings.ts`) et lus via un cache d'une seconde.
API :

| Méthode | Chemin                   | Objectif                                                                           |
| ------- | ------------------------ | ---------------------------------------------------------------------------------- |
| `GET`   | `/api/settings/pii`      | État des indicateurs, `enabledTypes`, `customPatterns`, compteurs de détection     |
| `PUT`   | `/api/settings/pii`      | Remplacer `enabledTypes` (`null` = tous) et/ou `customPatterns`                    |
| `POST`  | `/api/settings/pii/test` | Tester à blanc un modèle sur un échantillon de 8 Ko au maximum ; rien n'est stocké |

Les trois nécessitent une authentification de gestion et valident le corps avec
Zod (`src/shared/validation/schemas/piiSettings.ts`).

### Injection de prompt (`promptInjection.ts`)

Détecte les structures malveillantes dans le contenu fourni par l'utilisateur
et applique la politique configurée. Le comportement est déterminé par les
variables d'environnement et les options du constructeur :

| Paramètre        | Variable d'environnement                                                                              | Valeur par défaut | Effet                                                                                                                                                                                                                                                |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activé           | `INPUT_SANITIZER_ENABLED`                                                                             | `true`            | Lorsque la valeur est `false`, la mesure de protection s'interrompt immédiatement.                                                                                                                                                                   |
| Mode             | `INJECTION_GUARD_MODE` / `INPUT_SANITIZER_MODE`                                                       | `warn`            | Politique d'injection : `block`, `warn` ou `log`. (`redact` est accepté pour la rétrocompatibilité, mais **ne** supprime pas le texte d'injection ; la réécriture des données personnelles de la requête est contrôlée par `PII_REDACTION_ENABLED`.) |
| Seuil de blocage | Option `blockThreshold` / `INPUT_SANITIZER_BLOCK_THRESHOLD` (alias `INJECTION_GUARD_BLOCK_THRESHOLD`) | `high`            | Niveau de gravité minimal requis pour bloquer. Avec la configuration par défaut, le niveau moyen est uniquement observé.                                                                                                                             |

**Priorité des modes** (`getMode`) : `options.mode` de l'appelant →
**remplacement par l'indicateur de fonctionnalité en BDD**
`INJECTION_GUARD_MODE` (Tableau de bord → Paramètres → Indicateurs de
fonctionnalité) → variable d'environnement `INJECTION_GUARD_MODE` → variable
d'environnement `INPUT_SANITIZER_MODE` → `warn`. Un remplacement effectué dans
le tableau de bord prévaut donc sur les variables d'environnement, ce qui
permet à l'interface des indicateurs de fonctionnalité de contrôler la mesure
de protection en cours d'exécution (sans redémarrage). La lecture de la BDD est
à sécurité intégrée : en cas d'erreur, la mesure de protection revient au
comportement fondé sur l'environnement et, lorsqu'aucun remplacement n'est
défini, le comportement est identique à une résolution reposant uniquement sur
l'environnement.

Sources de détection :

1. `sanitizeRequest()` depuis `@/shared/utils/inputSanitizer` (ensemble partagé
   de détecteurs utilisé ailleurs dans le pipeline).
2. `DEFAULT_GUARD_PATTERNS` intégrés (actuellement
   `system_override_inline` et `markdown_system_block`, tous deux de gravité
   `high`).
3. `customPatterns` facultatifs transmis via les options du constructeur
   (chaînes, expressions régulières ou enregistrements
   `{ name, pattern, severity }`).

Lorsque `mode === "block"` **et** qu’au moins une détection atteint le seuil de
gravité, `preCall` renvoie `{ block: true, message: "Request rejected:
suspicious content detected" }`. Dans les modes `warn`/`log`, le garde-fou
journalise l’événement, mais autorise l’appel. L’utilitaire partagé
`evaluatePromptInjection()` est également exporté pour les appelants qui doivent
évaluer des prompts sans passer par le registre.

**Limite d’analyse (v3.8.20) :** le détecteur inspecte uniquement les **16 premiers Ko**
du texte concaténé des prompts — `MAX_INJECTION_SCAN_BYTES = 16 * 1024` (16 384 octets)
dans `src/shared/utils/inputSanitizer.ts`. `detectInjection()` et
`evaluatePromptInjection()` appliquent tous deux `slice(0, MAX_INJECTION_SCAN_BYTES)`
avant d’exécuter la boucle des motifs. Les directives d’injection se trouvent
généralement près du début d’une entrée ; cette limite plafonne donc l’utilisation
du CPU et du GC par les expressions régulières sur des charges utiles de plusieurs
centaines de Ko sans affaiblir la détection (cf. #3932, #4041).

### Masqueur d’identifiants (`credentialMasker.ts`)

S’exécute lors des **deux** étapes, en dernier dans la chaîne par défaut
(priorité `95`). Masque les motifs connus de clés d’API et de jetons secrets
dans la charge utile sortante (contenu des messages, arguments des appels
d’outils, résultats des outils) **ainsi que** dans la réponse du fournisseur,
afin qu’un identifiant collé dans un prompt (ou renvoyé par un résultat d’outil)
ne soit pas divulgué au fournisseur en amont ni retourné au client.

- **Activation explicite uniquement**, selon la même convention que le masquage
  des données personnelles (proche de la règle stricte nº 20) : désactivé sauf si
  `settings.credentialRedactionEnabled === true` **ou**
  `CREDENTIAL_REDACTION_ENABLED=true`. Lorsqu’il est désactivé, le garde-fou ne
  fait rien — il ne bloque et ne réécrit jamais.
- `redactCredentials()` parcourt l’intégralité de l’arborescence de la charge
  utile/réponse (`walkValue()`, protégé contre la pollution de prototype et
  contre les cycles via `WeakSet`) et remplace les correspondances par un espace
  réservé `[REDACTED:<type>]`, en ne clonant que les branches effectivement
  modifiées.
- `CREDENTIAL_PATTERNS` couvre les clés de fournisseurs de LLM (OpenAI,
  OpenAI-proj, Anthropic, Google, Hugging Face, Replicate), les jetons VCS/SaaS
  (GitHub, Slack, Linear, Notion, npm, Postman, Discord), les clés de paiement
  (Stripe, Square), les clés de services cloud (clé d’accès AWS, Twilio,
  SendGrid, Mailgun), les clés privées/JWT, les chaînes de connexion contenant
  des identifiants (`mongodb://user:pass@...`, etc.) ainsi qu’un motif générique
  pour les valeurs d’en-têtes `Authorization`/`x-api-key`/`api-key`/`apikey`.
  Les clés ayant la forme d’un en-tête (`authorization`, `x-api-key`, `api-key`,
  `apikey`) sont masquées structurellement (valeur uniquement, avec conservation
  du préfixe de schéma tel que `Bearer `/`Basic `) plutôt qu’au moyen de
  l’expression régulière générique appliquée au texte.
- Le garde-fou ne bloque jamais ; il se contente de réécrire
  (`modifiedPayload` / `modifiedResponse`) et d’annoter
  (`meta.credentialsRedacted`, `meta.count`).

Protection contre les régressions : `tests/unit/credential-masker-guardrail.test.ts`.

## Contrat de base (`base.ts`)

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
  block?: boolean; // true interrompt immédiatement la chaîne
  message?: string; // affiché en cas de blocage
  meta?: Record<string, unknown> | null;
  modifiedPayload?: TValue; // renvoyé par preCall pour réécrire la requête
  modifiedResponse?: TValue; // renvoyé par postCall pour réécrire la réponse
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

Un garde-fou signale « aucune modification » en renvoyant soit `void`, `{}`, soit
`{ block: false }`. Le renvoi d'un `modifiedPayload`/`modifiedResponse` remplace
la valeur transmise aux garde-fous suivants dans la chaîne.
`signal?: AbortSignal` transmet le cycle de vie de l'appelant aux garde-fous. L'abandon d'une requête constitue l'exception délibérée au comportement de tolérance aux pannes : les passerelles multimédias interrompent leur travail et effectuent le nettoyage sans restaurer les médias bruts vers une cible connue pour ne pas les prendre en charge.

## Registre (`registry.ts`)

Le singleton `guardrailRegistry` expose :

- `register(guardrail)` — ajoute un garde-fou (ou le remplace selon son nom normalisé) et
  effectue un nouveau tri par `priority` croissante.
- `clear()` / `list()` — utilitaires d'administration.
- `runPreCallHooks(payload, context)` — parcourt les garde-fous actifs, transmet la
  charge utile via `modifiedPayload` et s'arrête au premier `block: true`.
- `runPostCallHooks(response, context)` — même flux côté réponse.
- `resetGuardrailsForTests({ registerDefaults })` — efface l'état et, facultativement,
  réenregistre les valeurs par défaut afin d'assurer une isolation propre des tests.

Les deux exécuteurs renvoient `{ blocked, payload|response, results, guardrail?, message? }`,
où `results` est un tableau d'enregistrements `GuardrailExecutionResult` comprenant
les champs `blocked`, `skipped`, `modified`, `error` et `meta` pour chaque garde-fou,
ce qui facilite le traçage.

### Désactivation des garde-fous par requête

`resolveDisabledGuardrails({ apiKeyInfo, body, headers })` agrège une
liste dédupliquée des noms de garde-fous à ignorer pour la requête
actuelle. Il existe cinq canaux, lus dans cet ordre puis fusionnés en une seule liste
(la première occurrence prévaut lors de la déduplication) :

1. `apiKeyInfo.disabledGuardrails`
2. `disabledGuardrails` dans le corps de la requête (au niveau supérieur)
3. `metadata.disabledGuardrails` dans le corps de la requête (uniquement lorsque `metadata` est un objet)
4. En-tête `x-omniroute-disabled-guardrails`
5. Ancien en-tête `x-disabled-guardrails`

Les cinq canaux sont fusionnés, y compris les deux en-têtes : l'envoi simultané de
`x-omniroute-disabled-guardrails` et de `x-disabled-guardrails` ignore l'union de
leurs listes, et un en-tête moderne vide ne masque plus l'ancien
([#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412), corrigé dans
[#16805](https://github.com/diegosouzapw/OmniRoute/pull/16805)).

Les valeurs peuvent être des tableaux de chaînes ou une chaîne séparée par des virgules ; les noms sont élagués
et normalisés en minuscules au format kebab-case (`pii_masker` → `pii-masker`), et les entrées
vides sont supprimées. Le résultat est transmis au registre par l'intermédiaire de `context.disabledGuardrails`,
qui ignore les garde-fous correspondants (`skipped: true` dans `results`).

La liste de désactivation affecte uniquement le **registre**. Le mode `block` de détection des injections d'invite constitue
une frontière obligatoire : le middleware de protection contre les injections
(`src/middleware/promptInjectionGuard.ts`) appelle `evaluatePromptInjection()`
sans aucune liste de désactivation contrôlée par l'appelant (l'appel devenu inutile à
`resolveDisabledGuardrails({ body })` qu'il effectuait auparavant a été supprimé dans
[#16934](https://github.com/diegosouzapw/OmniRoute/pull/16934)). Ainsi, une requête
qui désactive `prompt-injection` est tout de même rejetée en mode `block`. Ce comportement est
intentionnel. Les canaux de désactivation sont contrôlés par l'appelant (corps de la requête,
métadonnées, en-têtes), et celui-ci ne doit pas pouvoir désactiver un contrôle de sécurité
configuré par l'opérateur
([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). L'union des en-têtes issue de [#16412](https://github.com/diegosouzapw/OmniRoute/issues/16412)
modifie uniquement les garde-fous du registre qui sont ignorés ; elle ne permet pas à un client
de contourner le middleware. Les politiques obligatoires de garde-fous par clé et par groupe sont
suivies dans la RFC v4 [#16417](https://github.com/diegosouzapw/OmniRoute/issues/16417).
Voir [Couverture et limites](#coverage-and-limits).

## Ordre d’exécution

Pour chaque requête transitant par `src/sse/handlers/chat.ts` et
`open-sse/handlers/chatCore.ts` (les routes de la famille de chat répertoriées dans
[Couverture et limites](#coverage-and-limits)) :

1. `resolveDisabledGuardrails(...)` construit la liste des éléments à ignorer à partir de la clé API, du corps
   et des en-têtes.
2. `guardrailRegistry.runPreCallHooks(body, ctx)` exécute les garde-fous par ordre
   de priorité croissant :
   - Les garde-fous désactivés sont enregistrés comme `skipped`.
   - Le `preCall` de chaque garde-fou peut réécrire la charge utile via `modifiedPayload`.
   - Le premier `block: true` interrompt la chaîne et le gestionnaire renvoie
     une réponse de rejet par le garde-fou.
3. La charge utile (éventuellement réécrite) est transmise au routage combiné et à l’envoi
   vers le service en amont.
4. **Hors streaming uniquement :** une fois la réponse assemblée,
   `guardrailRegistry.runPostCallHooks(...)` exécute la même chaîne sur la
   réponse. Ici, `block: true` supprime la réponse du service en amont et renvoie une réponse HTTP 400. Les réponses en streaming ignorent entièrement cette étape.

Les garde-fous qui lèvent une exception sont enregistrés avec `error: <message>` et consignés via
`logger.warn`, mais la chaîne se poursuit — il s’agit d’un comportement ouvert en cas d’échec, par conception.

## Couverture et limites

Le registre des garde-fous est intégré uniquement au pipeline de chat. Ces limites sont
figées par `tests/unit/guardrail-pipeline-wiring-characterization.test.ts` et
`tests/unit/guardrail-pipeline-characterization.test.ts` ; mettez délibérément à jour ces tests
lorsque le comportement change.

### Où les hooks s’exécutent

| Hook / contrôle                                         | S’exécute sur                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `runPreCallHooks`                                       | Les requêtes traitées par `handleChat` (`src/sse/handlers/chat.ts`) : `/v1/chat/completions`, `/v1/completions`, `/v1/messages`, `/v1/responses` (et `/v1/responses/*`), `/v1/relay/chat/completions`, `/v1/providers/{provider}/chat/completions`, `/v1/api/chat`, `/v1/antigravity`, `/v1beta/models/*`, ainsi que le proxy de chat Telegram. Également le point de terminaison de test du tableau de bord `/api/guardrails/test`. Un blocage avant l’appel renvoie une réponse HTTP 400. |
| `runPostCallHooks`                                      | Uniquement les réponses de chat **hors streaming** (`open-sse/handlers/chatCore/nonStreamingResponse.ts`). Les réponses en streaming ne l’atteignent jamais.                                                                                                                                                                                                                                                                                                                                |
| PII en streaming                                        | `createPiiSseTransform` (`src/lib/streamingPiiTransform.ts`), inséré dans le pipeline dans `streamingPipeline.ts` lorsque `PII_RESPONSE_SANITIZATION` est activé. Ce n’est pas un garde-fou, les mécanismes de désactivation ne l’affectent donc pas.                                                                                                                                                                                                                                       |
| Middleware de protection contre les injections (ancien) | Chaque route `/v1` contenant un prompt, y compris celles de la famille de chat (voir la [couverture des routes](#injection-guard-route-coverage--red-team-phase-8--block-d)). Injection de prompt uniquement.                                                                                                                                                                                                                                                                               |

### Ce qui n’est pas couvert

- **Routes de médias, d’embeddings et de données** (`/v1/images/*`, `/v1/embeddings`,
  `/v1/audio/*`, `/v1/videos/generations`, `/v1/music/generations`,
  `/v1/rerank`, `/v1/search`, `/v1/moderations`) n’atteignent jamais le registre. Aucun
  masquage des PII, aucun masquage des identifiants ni aucune passerelle de modalité ne s’y exécute. Leur seul
  contrôle est l’ancien middleware de protection contre les injections.
- **Les réponses en streaming** ne bénéficient d’aucun garde-fou après l’appel : ni
  `pii-masker` ni `credential-masker` après l’appel, et aucun blocage après l’appel. Seule la transformation PII
  en streaming s’applique (lorsque `PII_RESPONSE_SANITIZATION` est activé). Un identifiant
  renvoyé en écho dans une réponse en streaming n’est pas masqué.
- **Mécanismes de désactivation et middleware (par conception) :** le middleware évalue
  l’injection de prompt avec son propre appel à `evaluatePromptInjection()`, sans
  transmettre de liste de désactivation contrôlée par l’appelant. Le mode `block` constitue une frontière
  obligatoire que les désactivations contrôlées par l’appelant ne peuvent pas contourner, y compris sur les routes de la famille de chat
  ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)). La désactivation de
  `prompt-injection` ignore uniquement le garde-fou du registre.

### Ce qui voit une réponse avant l’étape post-appel

Sur le chemin hors streaming, l’ordre est le suivant : extraction de la mémoire → exécution des outils
intégrés → garde-fous post-appel → sortie en cas de blocage post-appel → stockage dans le cache sémantique.

- **L’extraction de mémoire** et **l’exécution des outils** voient la réponse avant que les garde-fous post-appel puissent la réécrire ou la bloquer. Depuis
  [#16401](https://github.com/diegosouzapw/OmniRoute/pull/16401), l’extraction de mémoire
  fait passer le texte extrait par `sanitizePII` lorsque
  `PII_RESPONSE_SANITIZATION` est activé (en streaming comme hors streaming), mais une
  réponse qui est ensuite bloquée après l’appel a malgré tout déjà été proposée à la mémoire et
  aux outils.
- **Le cache sémantique** stocke la réponse après l’appel, de sorte qu’il stocke la
  réponse réécrite, et une réponse bloquée n’est jamais mise en cache. Les entrées du cache sont
  indexées par clé API.

## Configuration

Variables d'environnement lues par les garde-fous intégrés :

| Variable                              | Utilisée par           | Effet                                                                                                                                                  |
| ------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `INPUT_SANITIZER_ENABLED`             | `prompt-injection`     | Définissez-la sur `false` pour désactiver entièrement la détection.                                                                                    |
| `INPUT_SANITIZER_MODE`                | `prompt-injection`     | Politique d'injection : `warn`, `block` ou `log`. L'ancienne valeur `redact` ne réécrit pas le texte d'injection.                                      |
| `INJECTION_GUARD_MODE`                | `prompt-injection`     | Mode du garde-fou contre les injections ; également un indicateur de fonctionnalité en BDD qui **remplace** les variables d'environnement (BDD > ENV). |
| `INPUT_SANITIZER_BLOCK_THRESHOLD`     | `prompt-injection`     | Niveau de gravité minimal rejeté par `MODE=block` : `high` (par défaut), `medium` ou `low`.                                                            |
| `INJECTION_GUARD_BLOCK_THRESHOLD`     | `prompt-injection`     | Ancien alias de `INPUT_SANITIZER_BLOCK_THRESHOLD`.                                                                                                     |
| `PII_REDACTION_ENABLED`               | `pii-masker`           | Lorsque définie sur `true`, les PII de la requête sont masquées (indépendamment du mode d'injection).                                                  |
| `PII_RESPONSE_SANITIZATION` / `_MODE` | `pii-masker` (en aval) | Contrôle le comportement du dispositif de masquage côté réponse.                                                                                       |

Les garde-fous de Modality Bridge lisent la configuration d'exécution depuis le
magasin de paramètres adossé à la BDD (`getSettings()`), et non depuis les
variables d'environnement. Les clés principales de Vision sont
`modalityBridgeVisionEnabled`, `modalityBridgeVisionMode`,
`modalityBridgeVisionModel`, `modalityBridgeVisionTaskAware`,
`modalityBridgeVisionPrompt`, `modalityBridgeVisionTimeout`,
`modalityBridgeVisionMaxImages`, `modalityBridgeVisionMaxChars`,
`modalityBridgeCacheEnabled`, `modalityBridgeCacheTtlMinutes` et
`modalityBridgeCacheMaxEntries`. Les anciennes clés
`visionBridge*` sont acceptées uniquement comme solution de repli en lecture
pendant un cycle, conformément à la documentation ; les écritures du tableau
de bord utilisent les clés principales. Les valeurs par défaut et le résolveur
de repli se trouvent dans `src/shared/constants/modalityBridgeDefaults.ts`, les
anciennes constantes étant conservées dans
`src/shared/constants/visionBridgeDefaults.ts`.

L'audio utilise `modalityBridgeAudioEnabled`, `modalityBridgeAudioModel`,
`modalityBridgeAudioTimeout` et `modalityBridgeAudioMaxClips`, ainsi que les
paramètres partagés `modalityBridgeCache*`. L'audio ne dispose d'aucune solution
de repli vers d'anciennes clés, car celles-ci ont été introduites avec le schéma
de Modality Bridge.

La vidéo utilise `modalityBridgeVideoEnabled`,
`modalityBridgeVideoAnalysisMode`, `modalityBridgeVideoModel`,
`modalityBridgeVideoFrameCount`, `modalityBridgeVideoSamplingPolicy`,
`modalityBridgeVideoMaxVideos` et `modalityBridgeVideoTimeout`, ainsi que les
paramètres partagés `modalityBridgeCache*`. Elle est désactivée par défaut, car
FFmpeg/ffprobe sont des dépendances opérationnelles facultatives et la
description des images ajoute de la latence et augmente le coût du modèle.

## Garde-fous personnalisés

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

Étapes :

1. Créez `src/lib/guardrails/myGuardrail.ts` en étendant `BaseGuardrail`.
2. Implémentez `preCall` et/ou `postCall`.
3. Enregistrez-le soit au moment de l'importation (ajoutez-le depuis `registerDefaultGuardrails`), soit
   en appelant `guardrailRegistry.register(...)` à l'exécution — le registre remplace
   tout garde-fou antérieur ayant le même nom normalisé.
4. Ajoutez des tests sous `tests/unit/` (exemples existants :
   `tests/unit/guardrails-registry.test.ts`,
   `tests/unit/prompt-injection-guard.test.ts`,
   `tests/unit/guardrails/visionBridge.test.ts`).

## Tests

Utilisez `resetGuardrailsForTests()` entre les tests afin de partir d'un état connu.
Passez `{ registerDefaults: false }` pour commencer avec un registre vide et
enregistrer uniquement les garde-fous faisant l'objet du test. Vision Bridge accepte l'injection de
dépendances (`deps.getSettings`, `deps.callVisionModel`) ; Audio Bridge expose les
points d'injection équivalents pour les paramètres, les fonctionnalités, la sélection du modèle STT, les vérifications des
identifiants et la transcription. Les tests peuvent donc exercer les deux flux sans accès
à la base de données ni au réseau.

## Voir aussi

- `src/lib/guardrails/` — implémentation
- `src/shared/utils/inputSanitizer.ts` — détecteur partagé sur lequel reposent
  la détection des injections de prompt et le masquage des informations personnelles
- `src/shared/constants/visionBridgeDefaults.ts` — valeurs par défaut de Vision Bridge et
  liste des modèles pour lesquels le pont est imposé
- `src/shared/constants/modalityBridgeDefaults.ts` — valeurs d'exécution par défaut partagées par Vision/Audio
- `docs/architecture/RESILIENCE_GUIDE.md` — couche orthogonale (disjoncteur, délais de récupération)
- `docs/reference/ENVIRONMENT.md` — référence complète des variables d'environnement

## Couverture des routes par la protection contre les injections et red team (Phase 8 · Bloc D)

La protection contre les injections (`createInjectionGuard` / `withInjectionGuard`) couvre toutes les routes
qui acceptent des prompts utilisateur. Elle respecte `INJECTION_GUARD_MODE` (valeur par défaut `warn` = journalisation uniquement ;
`block` = renvoie HTTP 400 `SECURITY_001`).

| Type             | Routes                                                                                                                                               | Mode par défaut |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| Texte (existant) | `/v1/chat/completions`, `/v1/completions`, `/v1/relay/chat/completions`                                                                              | warn            |
| Génératif        | `/v1/messages`, `/v1/responses`, `/v1/images/generations`, `/v1/images/edits`, `/v1/videos/generations`, `/v1/music/generations`, `/v1/audio/speech` | warn            |
| Données          | `/v1/embeddings`, `/v1/rerank`, `/v1/search`, `/v1/moderations`                                                                                      | warn            |

L'extraction de texte (`extractMessageContents`) couvre `messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system`.

**Red team (chaque nuit, `nightly-llm-security.yml`) :** promptfoo vérifie que chaque route bloque
le corpus OWASP-LLM lorsque `INJECTION_GUARD_MODE=block` ; garak exécute des sondes (ignorées en l'absence de secret).
`moderations` est inclus à des fins de cohérence. Le mode blocage constitue une frontière obligatoire : `evaluatePromptInjection()`
ignore la liste de désactivation par requête que lui transmet le middleware ; ainsi, `disabledGuardrails`
**n'en exempte pas** une route ([#16413](https://github.com/diegosouzapw/OmniRoute/issues/16413)).

Le workflow nocturne (`.github/workflows/nightly-llm-security.yml`, tâche cron + déclenchement
manuel) comporte deux jobs :

- **`promptfoo-guard` (bloquant)** — exécute `promptfoo eval -c promptfooconfig.yaml`
  avec `INJECTION_GUARD_MODE=block`. Chaque cas antagoniste (par exemple, « ignore toutes les
  instructions précédentes… », jailbreaks de type DAN) vérifie que la réponse contient
  `error.code === "SECURITY_001"`, c'est-à-dire que la protection a effectivement rejeté la requête.
- **`garak` (consultatif)** — exécute garak `--probes promptinject,dan,leakreplay`
  sur une instance OmniRoute locale (`http://localhost:20128/v1`). Son exécution est conditionnée par la présence d'un
  secret de fournisseur (`PROMPTFOO_PROVIDER_KEY`) ; il est ignoré proprement en son absence et suffixé par
  `|| true`, afin qu'il fournisse un rapport sans faire échouer la CI.

La couverture de l'utilitaire de protection (`createInjectionGuard` / `withInjectionGuard`)
s'étend à chaque route `/v1` acceptant un prompt ; le texte du prompt est extrait de
`messages`/`input`/`prompt`/`query`+`documents`/`instructions`/`system` par
`extractMessageContents()` dans `src/shared/utils/inputSanitizer.ts`.
