# Self-Hosted Runner Box Operations (.113 pool) (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../ops/RUNNER_BOX.md) · 🇪🇹 [am](../../../am/docs/ops/RUNNER_BOX.md) · 🇸🇦 [ar](../../../ar/docs/ops/RUNNER_BOX.md) · 🇦🇿 [az](../../../az/docs/ops/RUNNER_BOX.md) · 🇧🇬 [bg](../../../bg/docs/ops/RUNNER_BOX.md) · 🇧🇩 [bn](../../../bn/docs/ops/RUNNER_BOX.md) · 🇧🇦 [bs](../../../bs/docs/ops/RUNNER_BOX.md) · 🇨🇿 [cs](../../../cs/docs/ops/RUNNER_BOX.md) · 🇩🇰 [da](../../../da/docs/ops/RUNNER_BOX.md) · 🇩🇪 [de](../../../de/docs/ops/RUNNER_BOX.md) · 🇬🇷 [el](../../../el/docs/ops/RUNNER_BOX.md) · 🇪🇪 [et](../../../et/docs/ops/RUNNER_BOX.md) · 🇮🇷 [fa](../../../fa/docs/ops/RUNNER_BOX.md) · 🇫🇮 [fi](../../../fi/docs/ops/RUNNER_BOX.md) · 🇫🇷 [fr](../../../fr/docs/ops/RUNNER_BOX.md) · 🇮🇪 [ga](../../../ga/docs/ops/RUNNER_BOX.md) · 🇮🇳 [gu](../../../gu/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ha](../../../ha/docs/ops/RUNNER_BOX.md) · 🇮🇱 [he](../../../he/docs/ops/RUNNER_BOX.md) · 🇮🇳 [hi](../../../hi/docs/ops/RUNNER_BOX.md) · 🇭🇷 [hr](../../../hr/docs/ops/RUNNER_BOX.md) · 🇭🇺 [hu](../../../hu/docs/ops/RUNNER_BOX.md) · 🇦🇲 [hy](../../../hy/docs/ops/RUNNER_BOX.md) · 🇮🇩 [id](../../../id/docs/ops/RUNNER_BOX.md) · 🇳🇬 [ig](../../../ig/docs/ops/RUNNER_BOX.md) · 🇮🇹 [it](../../../it/docs/ops/RUNNER_BOX.md) · 🇯🇵 [ja](../../../ja/docs/ops/RUNNER_BOX.md) · 🇬🇪 [ka](../../../ka/docs/ops/RUNNER_BOX.md) · 🇰🇭 [km](../../../km/docs/ops/RUNNER_BOX.md) · 🇮🇳 [kn](../../../kn/docs/ops/RUNNER_BOX.md) · 🇰🇷 [ko](../../../ko/docs/ops/RUNNER_BOX.md) · 🇱🇹 [lt](../../../lt/docs/ops/RUNNER_BOX.md) · 🇱🇻 [lv](../../../lv/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ml](../../../ml/docs/ops/RUNNER_BOX.md) · 🇮🇳 [mr](../../../mr/docs/ops/RUNNER_BOX.md) · 🇲🇾 [ms](../../../ms/docs/ops/RUNNER_BOX.md) · 🇲🇹 [mt](../../../mt/docs/ops/RUNNER_BOX.md) · 🇲🇲 [my](../../../my/docs/ops/RUNNER_BOX.md) · 🇳🇵 [ne](../../../ne/docs/ops/RUNNER_BOX.md) · 🇳🇱 [nl](../../../nl/docs/ops/RUNNER_BOX.md) · 🇳🇴 [no](../../../no/docs/ops/RUNNER_BOX.md) · 🇮🇳 [or](../../../or/docs/ops/RUNNER_BOX.md) · 🇮🇳 [pa](../../../pa/docs/ops/RUNNER_BOX.md) · 🇵🇭 [phi](../../../phi/docs/ops/RUNNER_BOX.md) · 🇵🇱 [pl](../../../pl/docs/ops/RUNNER_BOX.md) · 🇵🇹 [pt](../../../pt/docs/ops/RUNNER_BOX.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/ops/RUNNER_BOX.md) · 🇷🇴 [ro](../../../ro/docs/ops/RUNNER_BOX.md) · 🇷🇺 [ru](../../../ru/docs/ops/RUNNER_BOX.md) · 🇱🇰 [si](../../../si/docs/ops/RUNNER_BOX.md) · 🇸🇰 [sk](../../../sk/docs/ops/RUNNER_BOX.md) · 🇸🇮 [sl](../../../sl/docs/ops/RUNNER_BOX.md) · 🇷🇸 [sr](../../../sr/docs/ops/RUNNER_BOX.md) · 🇸🇪 [sv](../../../sv/docs/ops/RUNNER_BOX.md) · 🇰🇪 [sw](../../../sw/docs/ops/RUNNER_BOX.md) · 🇮🇳 [ta](../../../ta/docs/ops/RUNNER_BOX.md) · 🇮🇳 [te](../../../te/docs/ops/RUNNER_BOX.md) · 🇹🇭 [th](../../../th/docs/ops/RUNNER_BOX.md) · 🇹🇷 [tr](../../../tr/docs/ops/RUNNER_BOX.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/ops/RUNNER_BOX.md) · 🇵🇰 [ur](../../../ur/docs/ops/RUNNER_BOX.md) · 🇺🇿 [uz](../../../uz/docs/ops/RUNNER_BOX.md) · 🇻🇳 [vi](../../../vi/docs/ops/RUNNER_BOX.md) · 🇳🇬 [yo](../../../yo/docs/ops/RUNNER_BOX.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/ops/RUNNER_BOX.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/ops/RUNNER_BOX.md)

---

El pool autoalojado se ejecuta en el equipo **.113** (`tomni-proxmox-113`). Desde el 2026-10-18, cada
runner de OmniRoute tiene **un rol**, una etiqueta y un presupuesto de memoria/CPU dimensionado según lo medido
para su carga de trabajo. El puesto de Turbopack recibe lo que necesita la compilación; los demás puestos están dimensionados según sus
picos medidos. El equipo solo sobreasigna recursos cuando una compilación de Turbopack coincide con una compilación
webpack de Release-Green y un trabajo de lint; la swap del host (16 GB) absorbe esa carga y, dado que las compilaciones
de solicitudes de incorporación se ejecutan en runners alojados, el puesto de Turbopack permanece inactivo la mayor parte del tiempo:

| runner               | etiqueta       | rol                                                                                                                                                                     | `MemoryHigh` / `MemoryMax` | `CPUQuota`     |
| -------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| `omniroute-113-5`    | `omni-build`   | Compilaciones de Turbopack: `ci.yml` `Build` (solo push/dispatch), Docker amd64, `npm-publish`, `nightly-v4-build`, `preview-artifact`, la compilación nocturna de a11y | 56 GB / 60 GB (swap 0)     | 1600 %         |
| `omniroute-113-6`    | `omni-release` | Release-Green (`release-green` + `main-green`), compilación webpack                                                                                                     | 20 GB / 24 GB (swap 4 GB)  | 800 %          |
| `omniroute-113-2`    | `omni-light`   | trabajos nocturnos (Schemathesis, promptfoo, garak, k6, arranque de a11y) y `quality.yml` `lint-guard`                                                                  | 12 GB / 16 GB (swap 4 GB)  | 600 %          |
| `omniroute-113`      | `omni-light`   | el mismo pool que el anterior                                                                                                                                           | 8 GB / 12 GB               | 400 %          |
| OmniHeuris, OmniMind | (sus repos)    | solo Dependabot (pico de 155 MB cada uno, 2026-10-18)                                                                                                                   | 4 GB / 6 GB                | 200 % cada uno |

Mediciones del 2026-10-18:

| recurso   | valor                               | implicaciones para la planificación                                                                                                                                                                                                                                                                                                                                                                                  |
| --------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAM / CPU | **78 GB / 32 núcleos**              | una compilación de producción de Turbopack alcanzó un pico de 49 GB sin límite (`tests/unit/ci-build-bundler-webpack.test.ts`); en Next 16.3.8, la fase de compilación por sí sola mantiene ~40 GB (36 GB de RSS en `next-build` más 17 workers de loader a 3 GB, medido el 2026-10-18); una compilación webpack usa ~14–16 GB. Una compilación Turbopack y una webpack caben juntas; dos compilaciones Turbopack no |
| swap      | 16 GB                               | `omniroute-113-5` se ejecuta con la swap desactivada (`MemorySwapMax=0`), por lo que una compilación fuera de control se interrumpe al alcanzar su límite en vez de provocar que el equipo use swap                                                                                                                                                                                                                  |
| `/tmp`    | **12 GB tmpfs = RAM**               | todo lo que se almacene allí consume memoria; los residuos se eliminan después de 3 h                                                                                                                                                                                                                                                                                                                                |
| CPU       | carga de 60 en 32 núcleos observada | antes de las cuotas, una compilación Turbopack (~1166 % de CPU) junto con una suite de cobertura en el mismo equipo privaban de recursos a los heartbeats de los demás listeners (`The self-hosted runner lost communication`, #16853)                                                                                                                                                                               |
| runners   | **6 listeners**                     | 4 de OmniRoute + OmniHeuris + OmniMind; `omniroute-113-3/-4/-7/-8` están deshabilitados (`systemctl enable --now` vuelve a activar uno)                                                                                                                                                                                                                                                                              |

Los límites se encuentran en el archivo `/etc/systemd/system/actions.runner.<…>.service.d/override.conf`
de cada unidad (los valores anteriores se conservaron como `override.conf.bak-20261018`) y se aplicaron en vivo con
`systemctl set-property --runtime … MemoryHigh=… MemoryMax=… CPUQuota=…`, sin reiniciar, por lo que no se
afectó a ningún trabajo en ejecución. Las etiquetas se modifican mediante la API de runners
(`gh api -X DELETE repos/<repo>/actions/runners/<id>/labels/<label>` /
`gh api -X POST repos/<repo>/actions/runners/<id>/labels -f 'labels[]=<label>'`), también en vivo.

## Instalar el limpiador (una sola vez, en la máquina)

```bash
scp scripts/ops/runner-janitor.sh root@192.168.0.113:/opt/omniroute-ops/runner-janitor.sh
ssh root@192.168.0.113 'chmod +x /opt/omniroute-ops/runner-janitor.sh; apt-get install -y lsof'
# cron (root): cada 30 min, registrar en /var/log/runner-janitor.log
*/30 * * * * MAX_ACTIVE_RUNNERS=6 /opt/omniroute-ops/runner-janitor.sh >> /var/log/runner-janitor.log 2>&1
```

`lsof` es obligatorio: el limpiador comprueba que una ruta está inactiva mediante una instantánea de los archivos
abiertos antes de eliminarla; sin esta herramienta no elimina nada y lo indica
(exit 1). Pruebe primero cualquier cambio con `--dry-run`: muestra exactamente lo que haría
y no modifica nada.

Qué hace en cada ejecución: limpia nuestros propios residuos (`runner-*`, `omniroute-*`,
`next-build*`, `e2e-build.tar.gz`) después de **3 h en tmpfs** y 24 h en el disco
`_work/_temp`; finaliza un `next-build` con más de 75 min (ningún trabajo dura tanto; el
2026-08-27 uno duró 70 min después de que GitHub hubiera declarado perdido su trabajo); depura los
checkouts con más de 48 h de runners cuya unidad está **detenida**; alerta cuando el uso del disco es ≥ 85 %, la PSI
de memoria `full/avg60` es ≥ 10 % y hay más procesos escuchando que `MAX_ACTIVE_RUNNERS` (con un
desglose omniroute/otros). Exit 1 = se requiere atención; consulte el registro.

La regla de los 75 minutos no detecta una compilación cuyo trabajo GitHub ya ha abandonado. Cuando
`Runner.Listener` no puede renovar su trabajo, `_diag/Runner_*.log` muestra
`POST request to …/renewjob timed out after 100 seconds`, la API informa que el trabajo está `completed`
(fallo) unos diez minutos después de la última renovación correcta y `next-build` sigue ejecutándose
sin ningún trabajo asociado (2026-10-18: la compilación de #17066 se marcó como fallida a las 19:43 y su proceso de compilación aún
retenía 40 GB cinco minutos después). Confirme la referencia en el archivo `_diag/Worker_*.log` más reciente y, a continuación,
envíe SIGTERM únicamente al árbol de procesos de compilación por PID: `next-build`, `npm run build`, `build-next-isolated.mjs` y
los workers de `_work`. Nunca toque `Runner.Listener`, `RunnerService.js` ni `Runner.Worker`: el
worker informa del trabajo como cancelado y el listener vuelve a estar en línea por sí solo.

## Unidades de runners: KillMode

El valor predeterminado `KillMode=process` del runner deja `Runner.Worker → npm → next-build`
activo cuando una unidad se detiene o se reinicia: una compilación huérfana continúa consumiendo RAM y
CPU sin ningún trabajo asociado. Cada unidad de OmniRoute incluye un archivo de configuración adicional
(`/etc/systemd/system/actions.runner.diegosouzapw-OmniRoute.<name>.service.d/10-killmode.conf`)
con `KillMode=mixed`: primero envía SIGTERM al listener y, al llegar a
`TimeoutStop`, SIGKILL a todo el cgroup. Entra en vigor en el siguiente reinicio de la unidad: reinicie **un runner a
la vez, solo cuando esté inactivo**, con la comprobación de inactividad y el reinicio en el mismo comando.

## Reglas de operación

- **Una compilación de Turbopack a la vez, impuesta mediante una etiqueta.** Cada trabajo que ejecuta un
  `next build` completo con Turbopack apunta a `[self-hosted, omni-build]`, y solo **`omniroute-113-5`** tiene esa
  etiqueta: `ci.yml` `Build`, `npm-publish.yml` `publish`, `nightly-v4-build`, `preview-artifact`,
  la compilación nocturna de a11y (#16853) y **amd64** de `docker-publish.yml` (webpack dentro de BuildKit;
  Turbopack entró en pánico allí, ejecución 33253576569). La etapa arm64 de Docker permanece en `ubuntu-24.04-arm`.
  amd64 de `docker-publish` comparte el grupo de concurrencia `heavy-build-main` con `Build` de `ci.yml`
  (`cancel-in-progress: false`). Docker Engine debe estar en `omniroute-113-5`. Un segundo espacio para Turbopack
  no cabe en 78 GB (2 × 33–37 GB más el resto de la máquina); un segundo espacio solo es seguro para
  compilaciones con webpack.
- **Las compilaciones de solicitudes de incorporación de cambios se ejecutan en infraestructura alojada (2026-10-18).** `Build` de `ci.yml` solo llega a `omni-build` para
  `push` y `workflow_dispatch`; cada compilación de `pull_request` (del propio origen o de un fork) y
  `merge_group` se ejecuta en `ubuntu-latest` con webpack. Cuando todas las PR del propio origen se dirigían al espacio,
  una compilación con Turbopack lo ocupaba entre 29 y 58 min, 18 compilaciones quedaron en cola durante hasta 18 h y
  la compilación del propio `push` de la rama de lanzamiento obtuvo el espacio una vez en 40 trabajos. En infraestructura
  alojada, la misma compilación de la PR tarda entre 8 y 12 min junto con los demás trabajos de la PR.
  Turbopack, el empaquetador que distribuye `npm-publish`, sigue probándose en la rama de lanzamiento mediante la
  compilación nocturna de a11y de la rama predeterminada (04:41 UTC), mediante cada compilación de push o ejecución manual que
  alcanza el espacio y mediante el propio `npm-publish`. `tests/unit/build/heavy-build-queue.test.ts`
  fija la condición de cuatro cláusulas.
- **Nunca asignes al espacio de Turbopack menos recursos que los requeridos según las mediciones.** El 2026-10-18 a las 18:06, el espacio
  se redujo de 56G/60G a 40G/44G para hacer sitio a `omni-release`. La fase de compilación permaneció en
  `MemoryHigh` durante toda su ejecución (PSI de memoria `full` del 30–43 %), y `Runner.Listener`, que
  comparte el cgroup, no pudo renovar su trabajo. La configuración de 56G/60G del propietario del 2026-10-17 se restauró
  ese mismo día. Por debajo de ese valor, la compilación no falla: entra en hiperpaginación y se pierde el trabajo.
- **Release-Green tiene su propio espacio (2026-10-18).** Hasta entonces, ambas validaciones de Release-Green se ejecutaban
  en `omni-build`: en cada push (~10/hora, 97 de 100 ejecuciones de push canceladas a mitad del trabajo en un día)
  y tres barridos completos de ~2 h al día (el barrido de las 05:29 esperó 6 h por el espacio); el único espacio de
  compilación estaba sobresuscrito varias veces por encima de su capacidad y las compilaciones de PR del propio origen esperaban durante horas.
  `release-green` y `main-green` ahora apuntan a `omni-release` (solo `omniroute-113-6`) con
  `OMNIROUTE_USE_TURBOPACK=0`, y una ejecución iniciada ya no se cancela por un push más reciente (el
  espacio pendiente sigue colapsando la avalancha). `tests/unit/build/runner-capacity-routing.test.ts`
  fija el enrutamiento, el cambio a webpack y que nada en `omni-release` se compile con Turbopack.
- **Grupo ligero: `omni-light`.** `omniroute-113` y `omniroute-113-2` ejecutan los procesos nocturnos que necesitan
  un `next build` solo para el backend (~5–6 GB; webpack) y `lint-guard` de `quality.yml`. `omniroute-113`
  tuvo `MemoryHigh=4G` hasta el 2026-10-18; la compilación de promptfoo avanzó reclamando memoria durante 54 minutos
  allí; 8 GB elimina la limitación.
- **Menos listeners a propósito.** Cuatro unidades de OmniRoute se deshabilitaron el 2026-08-29; cada listener
  adicional es otro consumidor del presupuesto de memoria indicado anteriormente. El límite del proceso de limpieza es 6 (`MAX_ACTIVE_RUNNERS=6` en cron): cuenta
  cada `Runner.Listener` de la máquina, y OmniHeuris + OmniMind añaden dos a nuestros cuatro.
- **Nunca limpies `/tmp` ni `_work` manualmente mientras algún runner esté ocupado.** Una
  comprobación seguida de una eliminación, con un intervalo entre ambas, fue la causa de que un trabajo `Build` activo perdiera su
  `_work` el 2026-08-27. El proceso de limpieza realiza la comprobación y la eliminación en un solo paso;
  déjalo actuar.
- Detener un runner durante un trabajo cancela el trabajo (observado en directo): usa `systemctl stop` solo
  cuando su listener no tenga ningún proceso hijo `Runner.Worker`, y hazlo en un solo comando.
- Los workflows no deben almacenar artefactos en `/tmp` (está en la RAM). Descárgalos en
  `$RUNNER_TEMP` (en disco, por runner); el artefacto `next-build` de 1.3 GB tardó entre 27 y 32
  minutos en descargarse en el tmpfs y 2 minutos en subirse desde el disco.
- El VPS `.15` es solo para homologación; nunca ejecuta runners de CI.

## Carril alojado (ejecutores alojados por GitHub)

La cuenta está en el plan **Pro**: **40 tareas alojadas simultáneas**, compartidas por cada comprobación de PR,
cada flujo de trabajo activado por un push y la configuración predeterminada de CodeQL. Medido el 2026-10-18 durante una
campaña de fusiones (~10 fusiones/hora en `release/v3.8.52`): se crearon **2,500 ejecuciones de flujos de trabajo en
24 h**, hubo 44 pushes a la rama en 6 h y **106 tareas alojadas en cola**, mientras las comprobaciones de los PR esperaban
durante horas y los PR se fusionaban sin ellas. Nueve flujos de trabajo se activaban con cada push a la rama:

| por push a `release/v*`                            | tareas alojadas | resultado durante la avalancha                                 | desde 2026-10-18                                                                          |
| -------------------------------------------------- | --------------: | -------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `ci.yml` (matriz completa)                         |        hasta 30 | cancelado por el siguiente push, 24 de 24 en un día            | no se inicia con pushes a `release/**` (ejecución de PR + Release-Green)                  |
| `quality.yml`                                      |              ~6 | cancelado, 23 de 23                                            | no se inicia con pushes a `release/**`                                                    |
| `Release-Green` `--quick`                          |               0 | se ejecutó en `omni-build`, 97 de 100 cancelados               | espacio `omni-release`, nunca se cancela, la ejecución pendiente se agrupa                |
| `Lock released branch`, `OpenSSF Scorecard`        |               2 | una ejecución en cola por push                                 | una ejecución por ref (`tests/unit/build/hosted-lane-concurrency.test.ts`)                |
| `Release acceptance` (informe paralelo)            |               1 | un `npm ci` alojado por push, nunca cancelado                  | sin cambios: candidato para un filtro `paths:`                                            |
| `Publish to Docker Hub` → `Deploy to VPS`          |               2 | cancelado por push; el tramo amd64 compite en `omni-build`     | sin cambios: canal de despliegue del propietario                                          |
| Configuración predeterminada de CodeQL (`dynamic`) |               4 | `javascript-typescript`, `actions`, `c-cpp`, `python` por push | sin cambios: Configuración → Seguridad del código; `c-cpp`/`python` no analizan nada aquí |

`tests/unit/build/push-storm-diet.test.ts` fija el activador por push exclusivo de `main` para `ci.yml` y
`quality.yml`. Efecto secundario: Codecov ya no recibe una carga base por cada push de release (el
paso es informativo y usa `continue-on-error`); la puerta de cobertura dentro del repositorio y el comentario del PR
no se ven afectados.

**Una mayor capacidad autoalojada no soluciona la cola alojada.** La máquina de desarrollo
(`devbox-vm-06-dev002`, 24 vCPU / 54 GB) podría alojar un ejecutor, pero las sesiones de los agentes ya
mantienen su carga entre 20 y 26, el contenedor del agente no tiene un daemon de Docker y el carril
saturado es el alojado. La máquina `.113` tenía 71 GB libres y una carga de entre 5 y 8 en ese mismo momento; su restricción
es el presupuesto de memoria por proceso de escucha indicado anteriormente (límite de 6 procesos de escucha), no la CPU. Las medidas
restantes son de proceso: integrar los PR de la campaña mediante la cola de Mergify (`label=queue`; los lotes comparten
una ejecución de CI de `merge_group`, en lugar de una ejecución por PR más una por push), reducir los lenguajes de la
configuración predeterminada de CodeQL y filtrar `release-acceptance.yml` según los archivos que lee.
