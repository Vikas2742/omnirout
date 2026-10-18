# Self-Hosted Runner Box Operations (.113 pool) (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇸 [es](../../../es/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

Le pool auto-hébergé s’exécute sur la machine **.113** (`tomni-proxmox-113`). Depuis le 2026-10-18, chaque
runner OmniRoute possède **un seul rôle**, une seule étiquette et un budget mémoire/CPU dimensionné en fonction
des mesures de sa charge de travail. Le slot Turbopack reçoit les ressources nécessaires à la compilation ; les autres
slots sont dimensionnés selon leurs pics mesurés. La machine ne suralloue les ressources que lorsqu’une compilation
Turbopack coïncide avec une compilation webpack Release-Green et une tâche de lint ; le swap de l’hôte (16 GB)
absorbe cette charge et, comme les compilations des pull requests s’exécutent sur des runners hébergés, le slot
Turbopack est inactif la plupart du temps :

| runner               | étiquette      | rôle                                                                                                                                                                    | `MemoryHigh` / `MemoryMax` | `CPUQuota`   |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | ------------ |
| `omniroute-113-5`    | `omni-build`   | Compilations Turbopack : `ci.yml` `Build` (push/dispatch uniquement), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, la compilation a11y nocturne | 56 GB / 60 GB (swap 0)     | 1600 %       |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), compilation webpack                                                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %        |
| `omniroute-113-2`    | `omni-light`   | tâches nocturnes (Schemathesis, promptfoo, garak, k6, démarrage a11y) et `quality.yml` `lint-guard`                                                                     | 12 GB / 16 GB (swap 4 GB)  | 600 %        |
| `omniroute-113`      | `omni-light`   | même pool que ci-dessus                                                                                                                                                 | 8 GB / 12 GB               | 400 %        |
| OmniHeuris, OmniMind | (leurs dépôts) | Dependabot uniquement (pic de 155 MB chacun, 2026-10-18)                                                                                                                | 4 GB / 6 GB                | 200 % chacun |

Mesures du 2026-10-18 :

| ressource | valeur                             | conséquences pour la planification                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 cœurs**               | une compilation de production Turbopack sans limite a atteint un pic de 49 GB (`tests/unit/ci-build-bundler-webpack.test.ts`) ; avec Next 16.3.8, la seule phase de compilation occupe environ 40 GB (36 GB de RSS dans `next-build`, plus 17 workers de chargement à 3 GB, mesure du 2026-10-18) ; une compilation webpack utilise environ 14–16 GB. Une compilation Turbopack et une compilation webpack peuvent s’exécuter ensemble ; deux compilations Turbopack ne le peuvent pas |
| swap      | 16 GB                              | `omniroute-113-5` s’exécute avec le swap désactivé (`MemorySwapMax=0`), afin qu’une compilation incontrôlée soit interrompue lorsqu’elle atteint sa limite plutôt que de faire swapper la machine                                                                                                                                                                                                                                                                                      |
| `/tmp`    | **tmpfs de 12 GB = RAM**           | tout ce qui y est stocké occupe de la mémoire ; les résidus sont supprimés après 3 h                                                                                                                                                                                                                                                                                                                                                                                                   |
| CPU       | charge de 60 observée sur 32 cœurs | avant l’application des quotas, une compilation Turbopack (~1166 % de CPU) associée à une suite de couverture sur la même machine privait les pulsations des autres listeners de ressources (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                                                                                      |
| runners   | **6 listeners**                    | 4 OmniRoute + OmniHeuris + OmniMind ; `omniroute-113-3/-4/-7/-8` sont désactivés (`systemctl enable --now` en réactive un)                                                                                                                                                                                                                                                                                                                                                             |

Les limites se trouvent dans le fichier `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
de chaque unité (les valeurs précédentes sont conservées dans `override.conf.bak-20261018`) et ont été appliquées
à chaud avec `systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…` — sans redémarrage,
donc aucune tâche en cours n’a été affectée. Les étiquettes sont modifiées via l’API des runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), également à chaud.

## Installer le nettoyeur (une seule fois, sur le serveur)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root) : toutes les 30 min, journalisation dans /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` est requis : le nettoyeur vérifie qu'un chemin est inactif à l'aide d'un instantané unique des
fichiers ouverts avant de le supprimer ; sans cet outil, il ne supprime rien et le signale
(code de sortie 1). Testez d'abord toute modification avec `--dry-run` — cette option affiche exactement ce qu'il
ferait sans rien modifier.

Ce qu'il fait à chaque exécution : il nettoie nos propres résidus (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) après **3 h sur tmpfs** et 24 h sur le disque dans
`_work/_temp` ; il tue un processus `next-build` datant de plus de 75 min (aucun job ne dure aussi longtemps — le
2026-08-27, l'un d'eux a duré 70 min après que GitHub a déclaré son job perdu) ; il supprime les
répertoires de travail datant de plus de 48 h des runners dont l'unité est **arrêtée** ; il émet une alerte lorsque l'utilisation du disque est ≥ 85 %, que
le PSI mémoire `full/avg60` est ≥ 10 %, et lorsque le nombre de processus à l'écoute dépasse `MAX_ACTIVE_RUNNERS` (avec une
répartition omniroute/autres). Code de sortie 1 = intervention requise ; consultez le journal.

La règle des 75 minutes ne détecte pas un build dont GitHub a déjà abandonné le job. Lorsque le
`Runner.Listener` ne parvient pas à renouveler son job, `_diag/Runner_*.log` affiche
`POST request to …/renewjob timed out after 100 seconds`, l'API indique que le job est `completed`
(échec) environ dix minutes après le dernier renouvellement réussi, tandis que `next-build` continue de s'exécuter sans
job associé (2026-10-18 : le build de #17066 a été déclaré en échec à 19:43 et son processus de build
occupait encore 40 Go cinq minutes plus tard). Confirmez la référence dans le fichier `_diag/Worker_*.log` le plus récent, puis
envoyez SIGTERM uniquement à l'arborescence de processus du build en utilisant les PID — `next-build`, `npm run build`, `build-next-isolated.mjs` et
les workers de `_work`. Ne touchez jamais à `Runner.Listener`, `RunnerService.js` ni `Runner.Worker` : le
worker signale le job comme annulé et le listener se reconnecte de lui-même.

## Unités des runners : KillMode

Le paramètre `KillMode=process` par défaut du runner laisse `Runner.Worker → npm → next-build`
actif lorsqu'une unité est arrêtée ou redémarrée — un build orphelin continue de consommer de la RAM et
du CPU sans job associé. Chaque unité OmniRoute comporte une configuration additionnelle
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
avec `KillMode=mixed` : SIGTERM est d'abord envoyé au listener, puis SIGKILL à l'ensemble du cgroup à
l'expiration de `TimeoutStop`. Ce paramètre prend effet au prochain redémarrage de l'unité — redémarrez **un runner à
la fois, uniquement lorsqu'il est inactif**, en regroupant la vérification de l'inactivité et le redémarrage dans la même commande.

## Règles d'exploitation

- **Un seul build Turbopack à la fois — imposé par un label.** Chaque job qui exécute un
  `next build` Turbopack complet cible `[self-hosted, omni-build]`, et seul **`omniroute-113-5`**
  porte ce label : `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`,
  `preview-artifact`, le build a11y nocturne (#16853) et **amd64** dans `docker-publish.yml`
  (webpack dans BuildKit — Turbopack y a paniqué, exécution 33253576569). Le volet Docker arm64
  reste sur `ubuntu-24.04-arm`. Le volet amd64 de `docker-publish` partage le groupe de concurrence
  `heavy-build-main` avec `Build` dans `ci.yml` (`cancel-in-progress: false`). Docker Engine doit
  être présent sur `omniroute-113-5`. Un second créneau Turbopack ne tient pas dans 78 Go
  (2 × 33–37 Go plus le reste de la machine) ; un second créneau n'est sûr que pour les builds
  webpack.
- **Les Builds de pull request s'exécutent sur l'infrastructure hébergée (2026-10-18).** Dans
  `ci.yml`, `Build` n'atteint `omni-build` que pour `push` et `workflow_dispatch` ; chaque Build
  de `pull_request` (provenant du dépôt ou d'un fork) et de `merge_group` s'exécute sur
  `ubuntu-latest` avec webpack. Lorsque chaque PR provenant du dépôt était routée vers le créneau,
  un Build Turbopack l'occupait pendant 29 à 58 min, 18 Builds sont restés en attente jusqu'à
  18 h, et le Build de push de la branche de release elle-même n'a obtenu le créneau qu'une fois
  sur 40 jobs. Sur l'infrastructure hébergée, le même Build de PR prend 8 à 12 min parallèlement
  aux autres jobs de la PR. Turbopack, le bundler livré par `npm-publish`, continue d'être exercé
  sur la branche de release par le build a11y nocturne de la branche par défaut (04:41 UTC), par
  chaque Build de push ou de dispatch qui atteint le créneau, ainsi que par `npm-publish`
  lui-même. `tests/unit/build/heavy-build-queue.test.ts` verrouille cette condition en quatre
  clauses.
- **Ne jamais dimensionner le créneau Turbopack en dessous de ses besoins mesurés.** Le
  2026-10-18 à 18:06, le créneau a été abaissé de 56G/60G à 40G/44G pour faire de la place à
  `omni-release`. La phase de compilation est restée au niveau de `MemoryHigh` pendant toute son
  exécution (pression mémoire PSI `full` de 30 à 43 %), et `Runner.Listener`, qui partage le
  cgroup, n'a pas pu renouveler son job. La configuration 56G/60G du propriétaire datant du
  2026-10-17 a été rétablie le jour même. En dessous de cette valeur, le build n'échoue pas ; il
  s'enlise dans la pagination mémoire, et le job est perdu.
- **Release-Green possède son propre créneau (2026-10-18).** Jusqu'alors, les deux validations
  Release-Green s'exécutaient sur `omni-build` : à chaque push (~10/heure, 97 exécutions de push
  sur 100 annulées en cours de traitement en une journée) et lors de trois balayages complets
  d'environ 2 h par jour (celui de 05:29 a attendu le créneau pendant 6 h) — l'unique créneau de
  build était plusieurs fois surchargé et les Builds de PR provenant du dépôt attendaient pendant
  des heures. `release-green` et `main-green` ciblent désormais `omni-release`
  (`omniroute-113-6` uniquement) avec `OMNIROUTE_USE_TURBOPACK=0`, et une exécution démarrée n'est
  plus annulée par un push plus récent (le créneau en attente absorbe toujours la rafale).
  `tests/unit/build/runner-capacity-routing.test.ts` verrouille le routage, le basculement vers
  webpack et le fait qu'aucun build sur `omni-release` n'utilise Turbopack.
- **Pool léger : `omni-light`.** `omniroute-113` et `omniroute-113-2` exécutent les tâches
  nocturnes qui nécessitent un `next build` limité au backend (~5–6 Go ; webpack), ainsi que
  `lint-guard` dans `quality.yml`. `omniroute-113` avait `MemoryHigh=4G` jusqu'au 2026-10-18 —
  le build promptfoo a passé 54 minutes à récupérer de la mémoire ; 8 Go suppriment cette
  limitation.
- **Moins de listeners, volontairement.** Quatre unités OmniRoute ont été désactivées le
  2026-08-29 — chaque listener supplémentaire est un autre consommateur du budget mémoire
  ci-dessus. Le plafond du janitor est de 6 (`MAX_ACTIVE_RUNNERS=6` dans cron) : il compte
  chaque `Runner.Listener` sur la machine, et OmniHeuris + OmniMind en ajoutent deux à nos quatre.
- **Ne jamais nettoyer `/tmp` ou `_work` manuellement lorsqu'un runner est occupé.** Une
  vérification suivie d'une suppression, avec un délai entre les deux, est la raison pour
  laquelle un job Build actif a perdu son `_work` le 2026-08-27. Le janitor effectue la
  vérification et la suppression en une seule étape ; laissez-le faire.
- Arrêter un runner en cours de job annule le job (observé en conditions réelles) :
  `systemctl stop` uniquement lorsque son listener n'a aucun processus enfant `Runner.Worker` —
  et effectuez cela en une seule commande.
- Les workflows ne doivent pas stocker d'artéfacts dans `/tmp` (il réside en RAM). Téléchargez-les
  dans `$RUNNER_TEMP` (sur disque, propre à chaque runner) — l'artéfact `next-build` de 1,3 Go a
  mis 27 à 32 minutes à être écrit sur le tmpfs, contre 2 minutes pour être téléversé depuis le
  disque.
- Le VPS `.15` est réservé à l'homologation — il n'exécute jamais de runners CI.

## File hébergée (exécuteurs hébergés par GitHub)

Le compte est sur l’offre **Pro** : **40 tâches hébergées simultanées**, partagées entre chaque vérification de PR,
chaque workflow déclenché par un push et la configuration par défaut de CodeQL. Mesures effectuées le 2026-10-18 pendant une
campagne de fusion (~10 fusions/heure sur `release/v3.8.52`) : **2 500 exécutions de workflows créées en
24 h**, 44 pushs vers la branche en 6 h, **106 tâches hébergées en file d’attente** tandis que les vérifications de PR attendaient
pendant des heures et que les PR étaient fusionnées sans elles. Neuf workflows se déclenchaient à chaque push vers la branche :

| par push vers `release/v*`                     | tâches hébergées | résultat pendant la tempête                                               | depuis le 2026-10-18                                                             |
| ---------------------------------------------- | ---------------: | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `ci.yml` (matrice complète)                    |       jusqu’à 30 | annulées par le push suivant, 24 sur 24 en une journée                    | non démarrées lors des pushs vers `release/**` (exécution de PR + Release-Green) |
| `quality.yml`                                  |               ~6 | annulées, 23 sur 23                                                       | non démarrées lors des pushs vers `release/**`                                   |
| `Release-Green` `--quick`                      |                0 | exécuté sur `omni-build`, annulé 97 fois sur 100                          | emplacement `omni-release`, jamais annulé, l’exécution en attente est regroupée  |
| `Lock released branch`, `OpenSSF Scorecard`    |                2 | une exécution en file d’attente par push                                  | une exécution par ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)       |
| `Release acceptance` (rapport fantôme)         |                1 | un `npm ci` hébergé par push, jamais annulé                               | inchangé — candidat à un filtre `paths:`                                         |
| `Publish to Docker Hub` → `Deploy to VPS`      |                2 | annulés à chaque push ; l’étape amd64 est en concurrence sur `omni-build` | inchangé — canal de déploiement du propriétaire                                  |
| Configuration par défaut de CodeQL (`dynamic`) |                4 | `javascript-typescript`, `actions`, `c-cpp`, `python` par push            | inchangé — Paramètres → Sécurité du code ; `c-cpp`/`python` n’analysent rien ici |

`tests/unit/build/push-storm-diet.test.ts` verrouille le déclencheur de push limité à `main` de `ci.yml` et
`quality.yml`. Effet secondaire : Codecov ne reçoit plus de téléversement de base à chaque push de release (l’étape
est informative et utilise `continue-on-error`) ; la vérification de couverture dans le dépôt et le commentaire de PR ne sont
pas affectés.

**Davantage de capacité auto-hébergée ne résout pas la file d’attente hébergée.** La machine de développement
(`devbox-vm-06-dev002`, 24 vCPU / 54 Go) pourrait héberger un exécuteur, mais les sessions des agents maintiennent déjà
sa charge entre 20 et 26, le conteneur des agents ne dispose d’aucun démon Docker, et la file saturée est
celle des tâches hébergées. La machine `.113` disposait de 71 Go libres et affichait une charge de 5 à 8 au même moment ; sa contrainte
est le budget mémoire par écouteur indiqué ci-dessus (plafond de 6 écouteurs), et non le processeur. Les leviers restants
concernent les processus : intégrer les PR de la campagne via la file d’attente Mergify (`label=queue`, les lots partagent
une seule exécution CI `merge_group` au lieu d’une exécution par PR plus une par push), réduire les langages
de la configuration par défaut de CodeQL et filtrer `release-acceptance.yml` selon les fichiers qu’il lit.
