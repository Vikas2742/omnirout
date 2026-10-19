# Quality Gates Reference (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../architecture/QUALITY_GATES.md) · 🇪🇹 [am](../../../am/docs/architecture/QUALITY_GATES.md) · 🇸🇦 [ar](../../../ar/docs/architecture/QUALITY_GATES.md) · 🇦🇿 [az](../../../az/docs/architecture/QUALITY_GATES.md) · 🇧🇬 [bg](../../../bg/docs/architecture/QUALITY_GATES.md) · 🇧🇩 [bn](../../../bn/docs/architecture/QUALITY_GATES.md) · 🇧🇦 [bs](../../../bs/docs/architecture/QUALITY_GATES.md) · 🇨🇿 [cs](../../../cs/docs/architecture/QUALITY_GATES.md) · 🇩🇰 [da](../../../da/docs/architecture/QUALITY_GATES.md) · 🇩🇪 [de](../../../de/docs/architecture/QUALITY_GATES.md) · 🇬🇷 [el](../../../el/docs/architecture/QUALITY_GATES.md) · 🇪🇸 [es](../../../es/docs/architecture/QUALITY_GATES.md) · 🇪🇪 [et](../../../et/docs/architecture/QUALITY_GATES.md) · 🇮🇷 [fa](../../../fa/docs/architecture/QUALITY_GATES.md) · 🇫🇮 [fi](../../../fi/docs/architecture/QUALITY_GATES.md) · 🇫🇷 [fr](../../../fr/docs/architecture/QUALITY_GATES.md) · 🇮🇪 [ga](../../../ga/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [gu](../../../gu/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ha](../../../ha/docs/architecture/QUALITY_GATES.md) · 🇮🇱 [he](../../../he/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [hi](../../../hi/docs/architecture/QUALITY_GATES.md) · 🇭🇷 [hr](../../../hr/docs/architecture/QUALITY_GATES.md) · 🇭🇺 [hu](../../../hu/docs/architecture/QUALITY_GATES.md) · 🇦🇲 [hy](../../../hy/docs/architecture/QUALITY_GATES.md) · 🇮🇩 [id](../../../id/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [ig](../../../ig/docs/architecture/QUALITY_GATES.md) · 🇮🇹 [it](../../../it/docs/architecture/QUALITY_GATES.md) · 🇯🇵 [ja](../../../ja/docs/architecture/QUALITY_GATES.md) · 🇬🇪 [ka](../../../ka/docs/architecture/QUALITY_GATES.md) · 🇰🇭 [km](../../../km/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [kn](../../../kn/docs/architecture/QUALITY_GATES.md) · 🇰🇷 [ko](../../../ko/docs/architecture/QUALITY_GATES.md) · 🇱🇹 [lt](../../../lt/docs/architecture/QUALITY_GATES.md) · 🇱🇻 [lv](../../../lv/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ml](../../../ml/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [mr](../../../mr/docs/architecture/QUALITY_GATES.md) · 🇲🇾 [ms](../../../ms/docs/architecture/QUALITY_GATES.md) · 🇲🇹 [mt](../../../mt/docs/architecture/QUALITY_GATES.md) · 🇲🇲 [my](../../../my/docs/architecture/QUALITY_GATES.md) · 🇳🇵 [ne](../../../ne/docs/architecture/QUALITY_GATES.md) · 🇳🇱 [nl](../../../nl/docs/architecture/QUALITY_GATES.md) · 🇳🇴 [no](../../../no/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [or](../../../or/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [pa](../../../pa/docs/architecture/QUALITY_GATES.md) · 🇵🇭 [phi](../../../phi/docs/architecture/QUALITY_GATES.md) · 🇵🇱 [pl](../../../pl/docs/architecture/QUALITY_GATES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/architecture/QUALITY_GATES.md) · 🇷🇴 [ro](../../../ro/docs/architecture/QUALITY_GATES.md) · 🇷🇺 [ru](../../../ru/docs/architecture/QUALITY_GATES.md) · 🇱🇰 [si](../../../si/docs/architecture/QUALITY_GATES.md) · 🇸🇰 [sk](../../../sk/docs/architecture/QUALITY_GATES.md) · 🇸🇮 [sl](../../../sl/docs/architecture/QUALITY_GATES.md) · 🇷🇸 [sr](../../../sr/docs/architecture/QUALITY_GATES.md) · 🇸🇪 [sv](../../../sv/docs/architecture/QUALITY_GATES.md) · 🇰🇪 [sw](../../../sw/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [ta](../../../ta/docs/architecture/QUALITY_GATES.md) · 🇮🇳 [te](../../../te/docs/architecture/QUALITY_GATES.md) · 🇹🇭 [th](../../../th/docs/architecture/QUALITY_GATES.md) · 🇹🇷 [tr](../../../tr/docs/architecture/QUALITY_GATES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/architecture/QUALITY_GATES.md) · 🇵🇰 [ur](../../../ur/docs/architecture/QUALITY_GATES.md) · 🇺🇿 [uz](../../../uz/docs/architecture/QUALITY_GATES.md) · 🇻🇳 [vi](../../../vi/docs/architecture/QUALITY_GATES.md) · 🇳🇬 [yo](../../../yo/docs/architecture/QUALITY_GATES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/architecture/QUALITY_GATES.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/architecture/QUALITY_GATES.md)

---

Este documento é a referência oficial para todos os controlos de qualidade de CI no OmniRoute.
Descreve cada controlo, o que valida, a tarefa de CI em que é executado, se utiliza
uma linha de base ratchet ou uma política de aprovação/reprovação e se bloqueia a compilação ou é meramente consultivo.

Para um resumo breve e para a política da lista de permissões, consulte a secção "Controlos de qualidade e ratchets"
em `AGENTS.md`. Para a avaliação crítica, a classificação de maturidade e o plano de
replicação independente de ferramentas do mesmo sistema, consulte o
[Manual de controlos de qualidade](../ops/QUALITY_GATE_PLAYBOOK.md).

---

## Inventário de gates e perfis de execução

### Admissão de candidatos

Os workflows CI e Quality emitem, cada um, um veredicto estável: `Gate / CI` e
`Gate / Quality`. A respetiva política de admissão versionada enumera todos os jobs
a montante como obrigatórios ou consultivos. Um job obrigatório aplicável tem de ser
bem-sucedido: resultados em falta, cancelados, ignorados, pendentes e desconhecidos
não podem determinar PASS. Uma classificação válida como apenas documentação ou
apenas catálogo pode tornar uma lane de código não aplicável; um PR de rascunho não
é um candidato aceite. Uma etiqueta `hotfix` não dispensa a apresentação de provas.

Ambos os workflows abrangem PRs e pushes para branches main/release, execução manual
e eventos de merge group. Pushes, execuções manuais e merge groups executam a seleção
completa. Forks e merge groups utilizam runners alojados para jobs que, de outro modo,
selecionariam runners autoalojados; é necessário verificar a existência de capacidade
alojada suficiente antes da implementação.

Cada recibo JSON identifica o SHA em checkout, a execução do workflow e a tentativa.
A CLI rejeita uma divergência entre o SHA do checkout e o SHA do evento. Os testes
do workflow associam a pertença à política à lista `needs` do job de veredicto, para
que uma lane nova ou removida não possa desaparecer silenciosamente. Os recibos
abrangem o próprio workflow, não a publicação, a implementação ou os detalhes
internos de um scanner consultivo existente. Ativar ambos os nomes de checks nas
regras da branch é uma alteração administrativa separada; adicionar estes jobs não
protege, por si só, uma branch.

### Inventário da análise estática

O inventário versionado de aliases npm e a pertença à análise estática encontram-se
em `config/quality/gate-manifest.json`. Execute `npm run check:gate-manifest` para
validar os nomes dos scripts e os comandos exatos em relação a `package.json`;
adições, remoções e alterações dos comandos fazem falhar tanto o hook local como os
jobs de classificação de alterações no CI. Um alias não é um job de workflow, uma
instância de matriz nem um caso de teste: estas contagens não devem ser apresentadas
como equivalentes.

Utilize `npm run quality:scan -- --list` ou `npm run quality:scan:fast -- --list`
para inspecionar os aliases selecionados sem os executar. O runner invoca o ponto de
entrada npm, pelo que o respetivo runtime (incluindo Bun, quando configurado) é
preservado. O manifesto regista os aliases fora desses perfis como sendo invocados
separadamente, e os comandos de manutenção são proibidos em perfis de análise apenas
de leitura.

Estes perfis abrangem apenas a análise estática. Não certificam testes do produto,
cobertura, empacotamento, checks externos nem a aceitação completa de lançamento de
um candidato. A admissão no workflow utiliza os ficheiros associados
`config/quality/admission-policy.json` e
`scripts/quality/admission-verdict.mjs`. Os perfis release-observer permanecem
separados; inspecione de forma independente os respetivos checks e recibos
aplicáveis. O inventário descritivo abaixo é uma referência, não uma prova de que um
gate foi efetivamente executado.

Os scripts encontram-se em `scripts/check/` (gates de política) e
`scripts/quality/` (motor de ratchet). A fonte de verdade do CI é
`.github/workflows/ci.yml`.

### Via rápida de PRs de lançamento (`quality.yml`)

`.github/workflows/quality.yml` complementa o CI em PRs main/release, pushes para
branches protegidas, execuções manuais e merge groups. Os PRs utilizam checks rápidos
filtrados por caminho. A compilação duplicada permanentemente desativada foi
removida; os verdadeiros checks de compilação/empacotamento/arranque permanecem no CI.

| Job                                              | Âmbito                                                                                                                                                                                                                                           | Bloqueante           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `Docs Gates (fast-path)`                         | PRs de documentação/código; referências da documentação da API e toda a documentação                                                                                                                                                             | Sim                  |
| `Fast Quality Gates`                             | PRs de código; checks estáticos, verificação de tipos, verificação de tipos do dashboard e testes unitários afetados                                                                                                                             | Sim                  |
| `Forgotten sibling tests`                        | PRs de código; módulos alterados rastreados até consumidores estáticos e testes sibling candidatos; caminhos de barrel e importação dinâmica são comunicados como diagnósticos consultivos, com as exceções referenciadas da lista de permissões | **Consultivo**       |
| `Vitest (fast-path)`                             | PRs de código; conjunto rápido de testes vitest                                                                                                                                                                                                  | Sim                  |
| `Unit Tests fast-path`                           | PRs de código; conjunto de testes unitários com 4 shards                                                                                                                                                                                         | Sim                  |
| `No new ESLint warnings`                         | PRs de código; proteção de lint com reconhecimento de supressões                                                                                                                                                                                 | Sim, incluindo forks |
| `Merge integrity (changelog + generated skills)` | PRs que não sejam rascunhos; sincronização do changelog e das skills geradas                                                                                                                                                                     | Sim, incluindo forks |

#### Relatório de testes sibling esquecidos

`npm run check:forgotten-sibling-tests` reutiliza o resolvedor de importações subjacente
ao mapa de impacto dos testes. Para cada módulo de produção alterado, comunica cadeias
determinísticas `changed module/symbol -> static consumer -> candidate sibling test`
quando o teste candidato está ausente do diff do pull request. O resumo em Markdown e
o resultado JSON são retidos como artefacto de workflow `forgotten-sibling-tests`
para calibração antes de qualquer implementação bloqueante.

As reexportações através de ficheiros barrel e as importações dinâmicas servem apenas para diagnóstico de resolução; nunca criam uma
ocorrência bloqueante. As exceções revistas encontram-se em
`config/quality/forgotten-sibling-allowlist.json`. Cada entrada tem de indicar o consumidor e o teste
candidato, apresentar uma justificação específica e incluir uma ligação para uma issue ou um pull request do GitHub. As entradas malformadas
falham de forma restritiva. As exceções não podem suprimir um teste candidato eliminado nem uma alteração que adicione `.skip`/`.todo`;
o enfraquecimento de asserções e outras formas de ocultação continuam sob a responsabilidade da verificação bloqueante independente
`check:test-masking`.

### Job: `lint`

É executado em cada PR para `main`. Bloqueia a integração em caso de falha.

| Script (`npm run ...`)            | Valida                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Bloqueante                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| `check:node-runtime`              | A versão do Node.js encontra-se dentro do intervalo suportado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Sim                                         |
| `check:cycles`                    | `src/` + `open-sse/`; AST (`import` / `export`, tsconfig `paths`). `check:cycles`: `cycles > 0 → exit 1`; `SCC → stderr` (#15281). `check:cycles:ratchet` (o que é executado pelo CI) bloqueia quando a contagem excede o limite máximo de `metrics.cycles` em `quality-baseline.json` — atualmente 14, `direction: down`, pelo que apenas pode diminuir (#15159 G-01/G-02)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Sim (ratchet)                               |
| `check:boundary`                  | Acoplamento `open-sse → src`: importações únicas entre ficheiros do motor para a aplicação (`scripts/quality/measure-boundary.mjs`; a lista de arestas constitui o backlog de remediação da separação entre o núcleo e os módulos da v4). A execução simples apresenta um relatório informativo (tal como `quality:boundary`). `check:boundary:ratchet` (que é executado pelo CI e também no ciclo ratchet das verificações rápidas de `quality.yml`) bloqueia quando a contagem excede o limite máximo de `metrics.boundaryOpenSseToSrc` em `quality-baseline.json` — inicializado com o valor medido de 771, `direction: down`; `--update` apenas o reduz; relativo à base nos PRs (`--base-ref`, ver abaixo)                                                                                                                                                                                                                                                                                                                      | Sim (ratchet)                               |
| `check:route-validation:t06`      | Presença de esquemas Zod em todas as rotas (política Tier 6)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Sim                                         |
| `check:any-budget:t11`            | A contagem de `@ts-expect-error // any` não excede o limite (catraca do nível 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Sim                                         |
| `check:provider-consistency`      | Cada fornecedor em `providers.ts` tem uma entrada correspondente em `providerRegistry.ts` (e vice-versa, dentro da lista de permissões)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Sim                                         |
| `check:model-lifecycle`           | As três tabelas de encaminhamento mantidas manualmente permanecem consistentes com o instantâneo do ciclo de vida incluído no repositório (#11503): `FITNESS_TABLE` (`taskFitness.ts`) não atribui pontuação a nenhum id descontinuado que `REGISTRY` consiga encaminhar; todos os destinos de `BUILT_IN_ALIASES` estão presentes em `REGISTRY` e ausentes do instantâneo de ids descontinuados; todos os ids descontinuados ainda presentes em `REGISTRY` são reencaminhados ou constam de `allowedRetiredInCatalog`; e nenhuma origem ou destino de `DEFAULT_DEGRADATION_MAP` aparece como descontinuado nesse instantâneo. Isto não comprova que um modelo esteja atualmente a ser disponibilizado por um serviço externo ativo. Offline — compara com `config/quality/model-lifecycle.json`, atualizado manualmente com `npm run quality:refresh-model-lifecycle` (rede; não integrado na CI). `allowedRetiredInCatalog` é uma catraca de redução progressiva: adicione uma entrada apenas com uma ocorrência de acompanhamento. | Sim                                         |
| `check:fetch-targets`             | Cada `fetch("/api/...")` no `src/` do lado do cliente corresponde a um `route.ts` real                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Sim                                         |
| `check:deps`                      | Todas as dependências instaláveis com `npm install` em cada `package.json` do repositório constam de `dependency-allowlist.json`; novos pacotes sem versão fixada ou que possam resultar de _slopsquatting_ são sinalizados                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Sim                                         |
| `audit:deps`                      | `npm audit` (raiz + electron) — sem avisos de gravidade alta/crítica (sobrepõe-se ao `check:vuln-ratchet` do osv; consulte a Lista de Racionalização Pendente)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Sim                                         |
| `check:lockfile`                  | Integridade de `package-lock.json` — registo https, hashes de integridade, sem substituições de anfitrião                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Sim                                         |
| `check:licenses`                  | Lista de permissões de licenças SPDX para dependências de produção                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Sim                                         |
| `check:tracked-artifacts`         | Sem artefactos de compilação / ligações simbólicas de `node_modules` submetidas (também é executado no pre-commit do husky; o pre-push é intencionalmente ligeiro — #6716)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Sim                                         |
| `check:ai-attribution`            | Sem rodapé `Co-Authored-By` de IA/bot nem rodapé de geração por IA nos commits, título ou corpo do PR — Regra Rígida n.º 16 (no ciclo de verificações rápidas de `quality.yml` para PR→`release/**` — lê os dados do evento, não faz nada fora de PRs — e num passo exclusivo de PR em `ci.yml` para análise estática de PR→`main`; também no hook `commit-msg` do husky; coautores humanos permitidos; #14436)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `check:vitest-exclusions`         | Cada exclusão do Vitest indica um problema de acompanhamento e consta de `config/quality/vitest-exclusions.json` (#13204)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Sim                                         |
| `check:file-size`                 | Os ficheiros de código-fonte (`.ts`/`.tsx` em `src/`, `open-sse/`, `electron/`, `bin/`) permanecem dentro de `cap` e os ficheiros de teste (`*.test.ts(x)`) dentro de `testCap`; os ficheiros fixados em `file-size-baseline.json` (`frozen` / `testFrozen`) não podem ultrapassar o tamanho registado                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Sim                                         |
| `check:error-helper`              | As respostas de erro em executores/handlers utilizam `buildErrorBody()` / `sanitizeErrorMessage()` (Regra Rígida n.º 12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Sim                                         |
| `check:migration-numbering`       | Os ficheiros SQL de migração são numerados sequencialmente, sem lacunas nem duplicados                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Sim                                         |
| `check:public-creds`              | Não existem valores literais de OAuth `client_id`/`client_secret` nem chaves Web do Firebase fora de `publicCreds.ts` (Regra Rígida n.º 11)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Sim                                         |
| `check:db-rules`                  | Não existe SQL em bruto fora dos módulos de `src/lib/db/`; não existem importações agregadas a partir de `localDb.ts` (Regras Rígidas n.º 2/n.º 5)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Sim                                         |
| `check:known-symbols`             | Os executores de fornecedores, as estratégias de encaminhamento e os tradutores registados nas respetivas tabelas de despacho correspondem aos ficheiros no disco — sem símbolos órfãos ou não declarados                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Sim                                         |
| `check:route-guard-membership`    | Cada rota que inicia um processo filho está classificada por `isLocalOnlyPath()` (Regras Rígidas n.º 15/n.º 17)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Sim                                         |
| `check:test-discovery`            | Todos os ficheiros `*.test.ts` / `*.spec.ts` no repositório são recolhidos por, pelo menos, um executor de testes (mecanismo de melhoria contínua: a lista de órfãos em `test-discovery-baseline.json` só pode diminuir)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Sim                                         |
| `check:agent-skills-sync`         | Os artefactos gerados de competências de agentes correspondem ao respetivo catálogo de origem (sem divergências)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `check:provider-asset-provenance` | Os logótipos/recursos dos fornecedores têm uma entrada de proveniência registada                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `lint:json`                       | Os ficheiros de configuração JSON são analisados sem erros e cumprem as regras de lint do repositório                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `typecheck:core`                  | Compilação de TypeScript sem erros (apenas avisos informativos)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Sim                                         |
| `typecheck:noimplicit:core`       | `noImplicitAny` estrito — orientado para o futuro; muitos locais de chamada preexistentes ainda precisam de anotações                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | **Informativo** (`continue-on-error: true`) |
| `check:dashboard-typecheck`       | `tsc` limitado a `src/app/(dashboard)/**` (#7033) — a lista de permissões selecionada de 27 ficheiros de `typecheck:core` não inclui nenhum TSX do painel, e `next build` também nunca verifica os respetivos tipos (`next.config.mjs` define `ignoreBuildErrors: true`), pelo que as regressões de identificadores órfãos nessa área (#6625/#6909) eram invisíveis para a CI. As diferenças são comparadas com uma linha de base fixa da contagem por ficheiro/por código TS (`config/quality/dashboard-typecheck-baseline.json`, seguindo o mesmo padrão de imposição de obsolescência de `check:known-symbols`) — apenas erros NOVOS acima da contagem de referência fazem falhar a validação; reduza progressivamente com `--update` quando um erro preexistente for corrigido.                                                                                                                                                                                                                                                  | Sim                                         |

### Tarefa: `quality-gate`

É executado após `test-coverage`. Bloqueia a integração em caso de falha.

| Script                       | Valida                                                                                                                                                                                      | Bloqueante                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| `quality:collect`            | Gera `quality-metrics.json` (número de avisos do ESLint, cobertura obtida a partir do relatório consolidado dos fragmentos)                                                                 | Sim (a montante do ratchet) |
| `quality:ratchet`            | Nenhuma métrica em `quality-baseline.json` regrediu (avisos do ESLint ≤ referência; cobertura ≥ referência)                                                                                 | Sim                         |
| `check:duplication`          | A duplicação de código (jscpd@4) não excede a referência em `quality-baseline.json`                                                                                                         | Sim                         |
| `check:complexity`           | A complexidade ciclomática ao nível do ficheiro não excede o limite (`complexity` do ESLint principal + `max-lines-per-function`)                                                           | Sim                         |
| `check:cognitive-complexity` | Ratchet de complexidade cognitiva (`eslint-plugin-sonarjs`) — execução separada do ESLint; a CI executa ambos em conjunto como o único passo `check:complexity-ratchets`                    | Sim                         |
| `check:dead-code`            | O ratchet de exportações/ficheiros não utilizados (knip) não regride relativamente à referência                                                                                             | Sim                         |
| `check:compression-budget`   | Orçamento do benchmark de compressão — os limites mínimos de poupança de tokens por motor não podem regredir                                                                                | Sim                         |
| `check:type-coverage`        | O ratchet da percentagem de código tipado (`type-coverage`) não regride; substitui em grande medida `typecheck:noimplicit:core`                                                             | Sim                         |
| `check:codeql-ratchet`       | O número de alertas CodeQL em aberto não regride (lido através de `gh api`; omissão segura sem token) — periodicidade de atualização e execução manual: consulte "Ratchet do CodeQL" abaixo | Sim                         |

### Tarefa: `quality-extended`

Toda a tarefa é consultiva (`continue-on-error: true`). Os ratchets baseados em npm são executados
efetivamente; os analisadores externos são instalados através de `gh release download` e omitem-se automaticamente (exit 0)
quando um binário continua ausente.

| Script                   | Valida                                                                                                                                                                                                                                        | Bloqueante                                               |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `check:circular-deps`    | Ausência de dependências circulares (dpdm)                                                                                                                                                                                                    | **Consultivo**                                           |
| `check:bundle-size`      | O tamanho do bundle não excede o limite                                                                                                                                                                                                       | **Consultivo**                                           |
| `check:secrets`          | Deteção de segredos (gitleaks) — omitida se o binário estiver ausente                                                                                                                                                                         | **Consultivo**                                           |
| `check:vuln-ratchet`     | As vulnerabilidades das dependências (osv-scanner) não regrediram — omitido se o binário estiver ausente                                                                                                                                      | **Consultivo**                                           |
| `check:workflows`        | Análise de workflows (actionlint + zizmor); analisadores ausentes/com falhas, relatórios inválidos ou referência de ratchet ausente resultam em INCOMPLETE. As conclusões válidas seguem a política estrita/consultiva/de ratchet selecionada | Execução obrigatória; ratchet do zizmor bloqueante na CI |
| `check:openapi-breaking` | Alterações incompatíveis no contrato da API pública (`openapi.yaml`) relativamente ao ramo base (oasdiff) — gera `openapiBreaking=N`; omitido se o oasdiff estiver ausente ou não for possível resolver a especificação base                  | **Consultivo**                                           |

### Tarefa: `docs-sync-strict`

É executada em cada PR para `main`. Bloqueia a integração em caso de falha.

| Script                         | Valida                                                                                                                                                                                                               | Bloqueante                        |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| `check:docs-all`               | Meta-barreira que executa sequencialmente as 6 sub-barreiras abaixo                                                                                                                                                  | Sim                               |
| ↳ `check:docs-sync`            | Consistência das versões entre CHANGELOG / OpenAPI / llm.txt                                                                                                                                                         | Sim                               |
| ↳ `check:docs-counts`          | As contagens no texto (número de fornecedores, número de migrações, etc.) estão dentro da janela incremental relativamente às contagens reais                                                                        | Sim                               |
| ↳ `check:env-doc-sync`         | Todas as variáveis de ambiente em `.env.example` estão documentadas numa tabela da documentação e vice-versa                                                                                                         | Sim                               |
| ↳ `check:deprecated-versions`  | Não existem cadeias de versões obsoletas na documentação                                                                                                                                                             | Sim                               |
| ↳ `check:doc-links`            | As ligações markdown internas na documentação correspondem a ficheiros reais (formato `[text]`/`(path)`)                                                                                                             | Sim                               |
| ↳ `check:fabricated-docs`      | As rotas, variáveis de ambiente, comandos da CLI, nomes de hooks e caminhos de ficheiros citados na documentação existem na base de código. Barreira rígida através de `--strict`; falha não bloqueante sem a opção. | Sim (através de `--strict` em CI) |
| `check:cli-i18n`               | As cadeias dos comandos da CLI estão presentes em todos os ficheiros de idiomas i18n                                                                                                                                 | Sim                               |
| `check:openapi-coverage`       | A especificação OpenAPI abrange pelo menos um limite mínimo incremental de rotas reais                                                                                                                               | Sim                               |
| `check:openapi-security-tiers` | As anotações de níveis de segurança em `openapi.yaml` são consistentes com as classificações de `routeGuard.ts`                                                                                                      | **Consultivo**                    |
| `check:openapi-routes`         | Todos os caminhos em `openapi.yaml` correspondem a um `route.ts` real (anti-alucinação)                                                                                                                              | Sim                               |
| `check:docs-symbols`           | Todas as referências `/api/...` em `docs/**/*.md` correspondem a um `route.ts` real (anti-alucinação)                                                                                                                | Sim                               |
| `i18n translation drift`       | Chaves não traduzidas nos ficheiros de idiomas i18n — apenas aviso                                                                                                                                                   | **Consultivo**                    |

### Tarefa: `i18n-ui-coverage`

| Script                            | Valida                                                                                                                                                                                                                 | Bloqueante     |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `check-ui-keys-coverage` (inline) | A cobertura de chaves i18n da IU é ≥ 65%                                                                                                                                                                               | Sim            |
| `check-ui-value-drift` (inline)   | Um **valor** em inglês reescrito não deixa para trás nenhuma tradução desatualizada                                                                                                                                    | Sim            |
| `check-new-key-coverage` (inline) | Uma **nova** chave em inglês está traduzida em todos os idiomas — um marcador `__MISSING__:` é rejeitado                                                                                                               | Sim            |
| `check-translation-ratio`         | O rácio de traduções reais por idioma (entradas idênticas ao inglês / marcadores de posição / entradas em falta fora da lista de permissões) não pode exceder `config/quality/i18n-translation-baseline.json` + margem | **Consultivo** |

Requer `fetch-depth: 0` — a barreira de divergência de valores compara `en.json` com a base de integração.

#### `check-ui-value-drift` — barreira de traduções desatualizadas

Deteta a única regressão de i18n que as outras barreiras não conseguem identificar estruturalmente: um valor em inglês
é reescrito e as traduções derivadas do inglês _anterior_ permanecem, pelo que
os utilizadores que não usam inglês continuam a ler um texto assertivo, mas agora incorreto.

Isto chegou realmente a produção. `oauthModal.googleOAuthWarning` foi reescrito quando o assistente de
início de sessão Antigravity foi introduzido (#5203); **39 de 43 idiomas** mantiveram texto que indicava aos operadores para "copiarem o
URL completo e o colarem abaixo" — um fluxo que não pode ser concluído para esse fornecedor. Passou
despercebido até ao #8463 porque:

- `sync-ui-keys` apenas preenche chaves que estão **ausentes**, nunca as que estão **desatualizadas**;
- `check-ui-keys-coverage` conta a _presença_ das chaves, pelo que uma tradução desatualizada é contabilizada como coberta;
- `check-translation-drift` monitoriza os espelhos da documentação em `docs/i18n/<locale>/**.md` —
  nunca lê `src/i18n/messages/*.json`. Bloqueante na tarefa `docs-sync-strict` desde a
  resincronização de 2026-09: editar um documento principal → `npm run i18n:run -- --files=<doc>` (ao nível da secção, pouco dispendioso).

**Sensível ao diff, não suportado por uma linha de base.** Compara o `en.json` na base de integração com a
árvore de trabalho; para cada chave cujo valor em inglês tenha sido alterado, qualquer idioma que ainda contenha uma
tradução não alterada está desatualizado. Isto **congela deliberadamente a dívida preexistente** — um diff
não consegue revelar de que versão antiga do inglês teve origem uma tradução existente há muito tempo, pelo que o controlo avalia
apenas aquilo em que a alteração atual toca. A alternativa (uma linha de base de hashes por chave) implicaria
um ficheiro gerado de ~600 KB, 3× maior do que a maior linha de base existente, alterado em cada PR de i18n.

Há duas formas de o satisfazer:

1. atualizar as traduções afetadas, ou
2. defini-las como `__MISSING__:<new english>` — em tempo de execução, é então servido o inglês corrigido
   (`src/i18n/request.ts::deepMergeFallback`, #7258) e a chave fica em fila para tradução.

Se o **significado** da cadeia tiver mudado, dê preferência a **mudar o nome da chave**: uma nova chave não pode herdar
uma tradução desatualizada. Foi esse o padrão utilizado em #8463.

```bash
npm run i18n:check-value-drift          # estrito (o que é executado pelo CI)
npm run i18n:check-value-drift:warn     # apenas apresenta o relatório
BASE_REF=origin/release/vX.Y.Z npm run i18n:check-value-drift
```

Termina com o código 0 e `SKIP reason=base-unresolved` quando não é possível ler o catálogo de base (clone
superficial sem a referência de base), replicando o comportamento de `check-openapi-breaking`.

### Tarefa: `i18n`

Matriz completa de validação de i18n (uma tarefa por idioma). A tarefa inteira é consultiva.

| Script                          | Valida                            | Bloqueante                                                  |
| ------------------------------- | --------------------------------- | ----------------------------------------------------------- |
| `validate_translation.py quick` | Completude da tradução por idioma | **Consultivo** (`continue-on-error: true` em toda a tarefa) |

### Tarefa: `pr-test-policy`

É executada apenas em pull requests.

| Script                 | Valida                                                                                                                                                                  | Bloqueante |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `check:pr-test-policy` | Os PRs que alterem código de produção em `src/`, `open-sse/`, `electron/` ou `bin/` têm de incluir ou atualizar testes (Regra Rígida #8)                                | Sim        |
| `check:test-masking`   | Os ficheiros de teste alterados não reduzem a contagem líquida de asserções nem adicionam tautologias `assert.ok(true)`                                                 | Sim        |
| `check:pr-evidence`    | O corpo do PR cita evidências de testes/VPS para a alteração (automatiza a Regra Rígida #18 procurando padrões no texto do PR — frágil, consulte a Lista de Pendências) | Sim        |

### Tarefa: `test-vitest`

É executada depois de `build`. Bloqueia a integração em caso de falha.

| Suite            | Valida                                                             | Bloqueante                                                                                                                      |
| ---------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| `test:vitest`    | Servidor MCP (110 ferramentas), autoCombo, cache — executor vitest | Sim                                                                                                                             |
| `test:vitest:ui` | Testes de componentes da IU — executor vitest                      | **Bloqueante** — as falhas preexistentes são explicitamente excluídas em `vitest.config.ts`; novas falhas fazem a tarefa falhar |

### Fluxos de trabalho noturnos (agendados, consultivos)

São executados segundo um agendamento cron (e através de `workflow_dispatch`), nunca em PRs. Todos são consultivos.

| Fluxo de trabalho      | Valida                                                                                                                                                                              | Bloqueante     |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `nightly-property`     | Testes baseados em propriedades com fast-check, usando uma semente aleatória e um número elevado de execuções                                                                       | **Consultivo** |
| `nightly-resilience`   | Controlo do crescimento da heap, injeção caótica de falhas, testes de carga/prolongados com k6                                                                                      | **Consultivo** |
| `nightly-llm-security` | Proteção contra injeções com promptfoo (modo de bloqueio) + sondas garak (ignoradas sem um segredo de fornecedor)                                                                   | **Consultivo** |
| `nightly-schemathesis` | Fuzzing de contratos OpenAPI (schemathesis) contra uma instância OmniRoute ativa usando `docs/openapi.yaml` — revela violações da especificação/erros 500 não tratados (Fase 8 B.4) | **Consultivo** |
| `nightly-mutation`     | Pontuação dos testes de mutação Stryker sobre a via rápida de testes unitários — mutantes sobreviventes revelam asserções fracas                                                    | **Consultivo** |
| `nightly-compat`       | Matriz de compatibilidade do motor Node nos intervalos suportados de `engines.node`                                                                                                 | **Consultivo** |

As linhas de base de desempenho (heap, TTFB, tempo de compilação) são registadas, mas não usadas como controlo: consulte [`PERF_BASELINE.md`](../ops/PERF_BASELINE.md) (`npm run perf:lts-baseline`).

---

## Fase de velocidade (2026-08-30 → v4.0 LTS): todas as referências flexibilizadas em 20%

Decisão do responsável (2026-08-30): até à modularização da v4.0, a velocidade de entrega é mais importante
do que manter o limite da dívida. Todas as referências **numéricas** de ratchet foram flexibilizadas em 20% numa
única operação auditável, e a fase é declarada em `config/quality/quality-baseline.json`:

```json
"_policy": { "phase": "velocity", "since": "2026-08-30", "until": "4.0.0",
             "relaxPct": 20, "requireTighten": false }
```

| O que mudou                                                                                                                                                                                                                    | Onde                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `metrics.*.value` — contagens em que menos é melhor ×1.2, percentagens em que mais é melhor ÷1.2 (mínimo de cobertura mantido em 60, `eslintErrors` permanece 0, `eslintWarnings` 0 → 20% da contagem congelada de supressões) | `quality-baseline.json` (a nota `_relax_velocity_2026_08_30` lista todos os valores antes → depois)    |
| `count` ×1.2 / `percentage` ×1.2                                                                                                                                                                                               | `complexity-baseline.json`, `duplication-baseline.json`                                                |
| `cap`, `testCap`, todos os limites de linhas `frozen[*]` / `testFrozen[*]` ×1.2                                                                                                                                                | `file-size-baseline.json`                                                                              |
| contagens por ficheiro / por código TS ×1.2                                                                                                                                                                                    | `api-typecheck-baseline.json`, `dashboard-typecheck-baseline.json`, `open-sse-typecheck-baseline.json` |
| `THRESHOLD` 36 → 30                                                                                                                                                                                                            | `scripts/check/check-openapi-coverage.mjs`                                                             |
| `--require-tighten` passa a ser informativo enquanto `_policy.requireTighten === false`                                                                                                                                        | `scripts/quality/check-quality-ratchet.mjs`                                                            |
| o `bank-ratchet-shrinks` noturno fica suspenso (registaria a redução medida e anularia a margem disponível)                                                                                                                    | `.github/workflows/nightly-release-green.yml`                                                          |

As listas de permissões (`eslint-suppressions.json`, `test-masking-allowlist.json`, `test-discovery-baseline.json`,
…) **não** são orçamentos e não foram alteradas. Os controlos de política de aprovação/reprovação (segredos, regras SQL,
contrato de documentação/ambiente, paridade de i18n, testes unitários) permanecem inalterados — um teste a vermelho continua a ser um teste a vermelho.

**Ferramentas**

- `npm run quality:relax-baselines -- --pct 20 --note velocity_YYYY_MM_DD [--dry-run]` — a
  flexibilização de execução única (`scripts/quality/relax-baselines.mjs`); recusa executar duas vezes com a
  mesma nota.
- `npm run quality:headroom [-- --only deadExports,fileSize] [--json out.json --md out.md]` —
  mede todos os controlos numéricos da mesma forma que a CI e apresenta a margem restante por controlo
  (`scripts/quality/baseline-headroom.mjs`). A tarefa noturna `baseline-headroom` publica
  a tabela no resumo da execução do workflow e carrega o respetivo relatório JSON/Markdown como
  `baseline-headroom-<run_id>`, retido durante 90 dias. As linhas de aviso e críticas identificam controlos
  que estão a menos de 10% do respetivo limite ou que já o ultrapassaram. Analise estes relatórios como um alerta
  precoce para a utilização dos orçamentos; inspecione as notas `_rebaseline_*` do controlo em causa. A tarefa
  deixou de criar ou atualizar um issue permanente; o #12149 preserva o histórico dos relatórios anteriores.

**Modo de código novo (Clean-as-You-Code) — desde 2026-08-30, apenas no percurso rápido de PR**

Em eventos `pull_request`, `quality.yml` transmite `--base-ref <PR base SHA>` a `check:file-size`,
`check:complexity-ratchets` e `check:dead-code`. Para `check:complexity-ratchets` e
`check:dead-code`, o controlo compara HEAD com a base de integração **restringindo-se aos ficheiros que o PR
alterou** (`scripts/check/newCodeMode.mjs`: a base de integração é materializada num
`git worktree` descartável, ESLint/knip são executados nesse local e em HEAD, e as contagens por ficheiro são comparadas):

- **bloqueante** — o PR adicionou violações de complexidade ciclomática/cognitiva ou exports inativos em ficheiros que alterou
  (`complexityNewCode=`, `cognitiveComplexityNewCode=`, `deadExportsNewCode=` no registo);
- **informativo** — o total global face à referência congelada. Desvios herdados nunca fazem falhar um
  PR inocente; o desvio volta a ser congelado na reconciliação da versão e é monitorizado pela tarefa de margem.

`check:file-size` utiliza a referência base nos seus próprios termos (`scripts/check/check-file-size.mjs`, #8522):
verifica todos os ficheiros de código-fonte e de teste na árvore, lê a contagem de linhas de cada um na base do PR
com `git show` e faz um ficheiro falhar apenas quando este cresce para além do maior valor entre o respetivo limite da referência
(`frozen` / `testFrozen`, ou `cap` / `testCap` para um ficheiro fora da referência) e o respetivo
tamanho base. Assim, um ficheiro que já se tenha desviado na base nunca faz falhar um PR inocente.

`check:boundary:ratchet` aplica a mesma regra ao seu único número
(`scripts/quality/measure-boundary.mjs --ratchet --base-ref <sha>`): em eventos de PR, tanto os
fast-gates de `quality.yml` como o job de lint de `ci.yml` passam o SHA de base do PR, o commit
de base é medido a partir de uma exportação `git archive` e o PR só falha quando a contagem de
ligações `open-sse → src` excede o maior valor entre `metrics.boundaryOpenSseToSrc` e a contagem
na base. O desvio da base acima do limite é comunicado (`base drift herdado`), mas nunca torna
vermelho um PR inocente; push → main mantém o limite absoluto e, se não for possível resolver
o SHA de base, recorre a esse limite com um aviso.

As execuções de `workflow_dispatch`, a verificação completa de release-green e o job noturno de
margem não têm uma base de PR e mantêm a comparação absoluta (global). A cobertura, a duplicação
e a cobertura de tipos permanecem globais por agora (as respetivas ferramentas não produzem
economicamente um diff por ficheiro) — são candidatas ao mesmo tratamento.

**Encerrar a fase na v4.0 (LTS = mais restrita do que antes, não «regressar ao normal»)**

1. Na ponta limpa de `release/v4.0.0`: `npm run quality:headroom --json` para registo e, depois,
   `npm run quality:ratchet -- --update`, `check:file-size --update`,
   `check:complexity-ratchets --update`, `check:dead-code --update`, o `--update` de cada porta de
   typecheck — todas as linhas de base descem para o valor medido.
2. Eliminar `_policy` de `quality-baseline.json` (reativa `--require-tighten` e a acumulação
   noturna), repor `THRESHOLD = 36` (ou superior) em `check-openapi-coverage.mjs`.
3. Restringir para além do valor medido onde a modularização compensou: `cap` do tamanho de
   ficheiro novamente em 1000 (ou 800), limites mínimos de cobertura +5, 0 exports mortos para
   os packages modularizados.

## Linha de base do ratchet (`quality-baseline.json`)

O motor de ratchet (`scripts/quality/check-quality-ratchet.mjs`) lê `quality-baseline.json`
e compara-o com o `quality-metrics.json` recém-recolhido. Qualquer métrica que regrida
para além do respetivo épsilon faz com que a compilação falhe.

Métricas atualmente monitorizadas:

| Métrica               | Direção | Significado                                    |
| --------------------- | ------- | ---------------------------------------------- |
| `eslintWarnings`      | `down`  | O número de avisos do ESLint não pode aumentar |
| `coverage.statements` | `up`    | A cobertura de instruções não pode diminuir    |
| `coverage.lines`      | `up`    | A cobertura de linhas não pode diminuir        |
| `coverage.functions`  | `up`    | A cobertura de funções não pode diminuir       |
| `coverage.branches`   | `up`    | A cobertura de ramos não pode diminuir         |

Para atualizar a linha de base após uma melhoria efetiva:

```bash
npm run quality:ratchet -- --update
git add quality-baseline.json
```

A opção `--update` escreve os valores atualmente medidos em `quality-baseline.json`.
Confirme este ficheiro juntamente com a alteração que melhorou a métrica. Um PR que melhore uma
métrica sem atualizar a linha de base será detetado por `--require-tighten` (Fase 6A.5,
implementação pendente).

### Ratchet do CodeQL: frequência de atualização e acionamento manual

`check:codeql-ratchet` lê **o estado do repositório, atualizado de acordo com um agendamento — não por PR.**
`gh api repos/diegosouzapw/OmniRoute/code-scanning/default-setup` comunica
`state: configured`, `schedule: weekly`: a análise da configuração predefinida do GitHub, e não uma
análise por push. Consequência: após a integração de um PR que CORRIJA alertas, o ratchet continua a ler
a contagem antiga e mais elevada até à execução da próxima análise agendada — pelo que comunica uma regressão
em todos os PR abertos, incluindo nos PR subsequentes ao próprio PR de correção, até que a análise seja atualizada.

**Atualização manual**: `gh workflow run codeql.yml --ref release/vX.Y.Z` volta a executar a
análise e publica novamente os alertas em poucos minutos. Leia primeiro `.github/workflows/codeql.yml`
— o respetivo cabeçalho explica que é apenas para `workflow_dispatch` **porque entra em conflito com
a "configuração predefinida" do GitHub** (`CodeQL analyses from advanced configurations cannot be
processed when the default setup is enabled`). A reposição dos acionadores `push`/`pull_request`/
`schedule` requer primeiro uma **ação do proprietário**: Settings → Code security →
CodeQL: Default → Advanced. Não adicione um acionador `schedule:` sem efetuar essa alteração — este
apenas produzirá execuções com falhas.

**Aperte a linha de base após a diminuição da contagem** — `node scripts/check/check-codeql-ratchet.mjs
--update` escreve a nova contagem medida em `quality-baseline.json` →
`metrics.codeqlAlerts.value`, para que o ratchet não permita silenciosamente uma regressão até
ao limite máximo anterior. Exemplo prático (2026-09-02/03): o PR #12502 corrigiu 7 alertas reais
(13 → 6 alertas abertos medidos); o PR #12530 apertou a linha de base fixa de 11 → 6 para corresponder; os
6 restantes foram depois dispensados, com uma justificação por alerta, reduzindo o número de alertas abertos para 0.

**As dispensas são uma decisão do operador (Regra Rígida #14)** — nunca dispense um alerta do CodeQL
sem registar a justificação técnica no comentário da dispensa: `won't fix` para
um requisito de protocolo a montante, `used in tests` para um fixture de teste, `false positive`
para um sanitizador que o CodeQL não consegue detetar (precedente: `docs/security/ERROR_SANITIZATION.md`).

---

## Política de repetição de testes (WS5.4, v3.8.49)

A repetição é definida por runner, nunca de forma global e indiscriminada — uma repetição indiscriminada transforma regressões reais
em falhas intermitentes invisíveis:

| Runner           | Política                                                                                                                              | Porquê                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Playwright (e2e) | `retries: 1` apenas em CI, com `trace: on-first-retry`                                                                                | A temporização do browser/da rede é genuinamente não determinística; uma repetição com um trace transforma uma falha intermitente num artefacto diagnosticável |
| Vitest           | SEM repetição global. Um teste comprovadamente intermitente recebe uma repetição explícita por teste (visível no diff, revista no PR) | Mantém a lista de quarentena no repositório, nunca opaca                                                                                                       |
| node:test (unit) | SEM repetição, em circunstância alguma                                                                                                | Um teste unitário intermitente é um erro no teste — corrija-o, não volte simplesmente a executá-lo                                                             |

SLOs pretendidos assim que a telemetria de falhas intermitentes estiver disponível (WS5.2/5.3): taxa de falhas intermitentes <1% por teste
(limiar de "corrigir agora"), taxa de sucesso ≥95% por pipeline. Valores de referência do setor —
recalibrar com base nas nossas próprias medições.

## Desvio dos limites progressivos ao nível da release (WS5.5, v3.8.49)

Quando um limite progressivo (tamanho de ficheiro, complexidade, avisos do eslint) regride na ponta PURA da release
— ou seja, a COMBINAÇÃO de merges causou a regressão e nenhum PR isolado a reproduz no
seu próprio branch — a correção cabe ao **responsável pela release, uma única vez, no
branch da release**: dar preferência à extração/refatorização; redefinir a baseline apenas com a entrada
de justificação documentada. Nunca transferir um desvio combinado para o PR de um colaborador e nunca
redefinir a baseline por PR (isso oculta regressões reais). Primeiro, fazer a distinção: reproduzir a
falha na ponta pura, numa worktree de teste, antes de assumir que foi causada pelo seu PR.

## Registar reduções dos limites progressivos — a direção descendente (#8584)

O mecanismo de limites progressivos é apenas parcialmente automático, e é a parte errada. **Aumentar** um limite é uma
edição manual de JSON que demora dez segundos e é a forma mais rápida de desbloquear um PR com falhas.
**Reduzir** um limite exige que alguém execute `--update` e faça commit do resultado — e, até
o job `bank-ratchet-shrinks` ser implementado, nenhum workflow o executava. A consequência medida
(2026-07-25): 18 ficheiros congelados já se encontravam no limite de 800 linhas para novos ficheiros ou abaixo dele, o pior
com 132× (`src/shared/validation/schemas.ts`, 19 linhas com um limite de 2,523); o
limite máximo de complexidade passou de `1794 → 2169` ao longo de ~37 notas de redefinição da baseline, com exatamente uma
redução (−1); e "apertar através de `--update` no próximo ciclo" foi escrito 31 vezes e cumprido
uma vez. Um limite que sobrevive ao código que o justificou transforma silenciosamente cada
decomposição concluída numa margem de crescimento para quem editar o ficheiro a seguir.

`nightly-release-green.yml` → o job **`bank-ratchet-shrinks`** fecha esse ciclo:

|            |                                                                                                              |
| ---------- | ------------------------------------------------------------------------------------------------------------ |
| Executa em | `schedule` (3×/dia) + `workflow_dispatch` — deliberadamente **não** em `push`                                |
| Mede       | o `release/vX.Y.Z` mais elevado, com a mesma resolução + proteção contra injeção de `release-green`          |
| Escreve    | `check:file-size --update` e `check:complexity-ratchets --update` (ambos apenas reduzem por definição)       |
| Verifica   | `npm run check:ratchet-bank` (`scripts/quality/verify-ratchet-bank.mjs`)                                     |
| Entrega    | um único PR sempre atualizado para o branch da release — atualizado à força, nunca repetido de forma abusiva |

O registo é feito em lote, em vez de a cada push, porque não tem requisitos de latência (uma redução
registada no prazo de 8h é aceitável), enquanto uma execução por merge reconstruiria repetidamente o branch do PR
durante campanhas de merge e incorreria sempre no custo de uma verificação completa do ESLint. A deteção continua a ocorrer no
push (`release-green`); apenas o registo é processado em lote.

### O verificador de segurança

O job escreve nas baselines sem supervisão, pelo que `verify-ratchet-bank.mjs` é o que torna
isso aceitável. Compara a árvore posterior a `--update` com `HEAD` e **aborta o job
antes de existir qualquer commit** — sem abrir qualquer PR — a menos que todas as alterações sejam uma das seguintes:

- uma entrada numérica `frozen` / `testFrozen` **reduzida** ou **removida**
- `complexity-baseline.json` → `count` **reduzido**
- `quality-baseline.json` → `metrics.cognitiveComplexity.value` **reduzido**

Qualquer outra alteração falha: aumentar um número, adicionar uma entrada, alterar `cap`/`testCap` ou
eliminar/reescrever uma nota `_rebaseline_*` (essas notas constituem o registo de auditoria que explica por que motivo existe cada
limite máximo e são armazenadas no mesmo objeto `frozen` que as entradas dos ficheiros).
Um bot capaz de aumentar um limite seria claramente pior do que a situação atual. Proteção contra regressões:
`tests/unit/verify-ratchet-bank.test.ts`.

O job nunca faz push para `release/*` — uma pessoa faz o merge do PR, pelo que uma medição incorreta
não pode ser integrada sem revisão.

## Política de Lista de Permissões

Cada verificação que não pode falhar devido a violações preexistentes utiliza uma lista de permissões imutável
(por exemplo, `KNOWN_STALE_DOC_REFS`, `KNOWN_MISSING`, `KNOWN_RAW_SQL`). A política é:

**Corrija a causa principal; utilize a lista de permissões apenas quando a violação for preexistente e
não puder ser corrigida no mesmo PR.**

Ao adicionar uma entrada a uma lista de permissões:

1. Inclua um comentário com a justificação.
2. Indique a issue de acompanhamento (por exemplo, `// #3498 — Funcionalidade da Fase 2, ainda não implementada`).
3. Remova a entrada no mesmo PR que corrige a violação — uma entrada obsoleta que já não
   suprime uma violação ativa constitui, por si só, um defeito (a verificação de entradas obsoletas 6A.3
   fará com que uma entrada órfã na lista de permissões provoque a falha da verificação após a respetiva implementação).

**Não** adicione entradas à lista de permissões para fazer com que os testes passem mais depressa. Uma verificação bem-sucedida com uma
lista de permissões crescente cria uma falsa sensação de qualidade.

### Quando uma verificação falha no seu PR

1. **Leia atentamente o resultado da verificação** — este indica exatamente qual o ficheiro ou símbolo que violou
   a regra.
2. **Corrija a violação** — a maioria das verificações consiste em verificações determinísticas do sistema de ficheiros que são aprovadas assim que
   o código estiver correto.
3. **Se a violação for preexistente** (ou seja, não foi introduzida por si, mas passou agora a ser abrangida
   pela verificação): adicione uma entrada à lista de permissões com um comentário de justificação e uma issue de acompanhamento.
4. **Se a verificação for incremental** (cobertura, avisos do ESLint, duplicação, complexidade):
   a sua alteração agravou a métrica. Corrija o problema subjacente ou, em casos raros, execute
   `npm run quality:ratchet -- --update` se a alteração for intencional e a degradação da métrica
   for aceitável — mas documente o motivo na descrição do PR.
5. **As verificações consultivas** (`continue-on-error: true`) são informativas — não bloqueiam
   a integração, mas aparecem no resumo da CI. Corrija-as na mesma.

---

## Adicionar uma Nova Verificação

1. Crie `scripts/check/check-<name>.mjs` (ou `.ts`). As verificações de políticas terminam com o código 0/1.
   As verificações de estilo incremental emitem uma métrica para `quality-metrics.json` através de `collect-metrics.mjs`.
2. Adicione `"check:<name>": "node scripts/check/check-<name>.mjs"` a `package.json`.
3. Integre-a em `.github/workflows/ci.yml` no job adequado
   (política → `lint` ou `docs-sync-strict`; incremental → `quality-gate`).
4. Se tiver uma lista de permissões, aplique `reportStaleEntries()` de
   `scripts/check/lib/allowlist.mjs` para que as entradas obsoletas sejam detetadas automaticamente.
5. Escreva um teste em `tests/unit/build/` que abranja a lógica de deteção da verificação.
6. Atualize este documento (adicione uma linha à tabela do job relevante).

---

## Ferramentas para agentes: LSP integrado no ciclo (opcional)

Para além das verificações de CI, o OmniRoute inclui uma estrutura `agent-lsp` **opcional**
(um `.mcp.json` ao nível do projeto, Fase 7 Tarefa 15). Crie `.mcp.json`
para disponibilizar um servidor de linguagem TypeScript aos agentes de programação, para que estes resolvam símbolos /
diagnósticos **antes** de escreverem código — um complemento de compilação antes da validação para
`typecheck:core`, que elimina na origem os erros de «símbolo inventado». Intencionalmente,
não é carregado de forma automática (cabe-lhe escolher e verificar a ponte MCP↔LSP); uma entrada inválida apenas regista um
erro de ligação e nunca interrompe as sessões.

---

## Backlog de racionalização (revisão de ROI — Fase 9 Onda 3)

Este inventário foi reconciliado com `ci.yml` em 2026-06-17 (a versão anterior omitia
`audit:deps`, `check:tracked-artifacts`, `check:lockfile`, `check:licenses`,
`check:dead-code`, `check:cognitive-complexity`, `check:type-coverage`,
`check:codeql-ratchet`, `check:pr-evidence`). Uma revisão de ROI do conjunto reconciliado
identificou os seguintes candidatos a racionalização. **As consolidações são alterações
mecânicas de CI; as ativações/desativações e remoções são decisões de política reservadas
ao operador.** Nada do que se segue foi aplicado.

**Também não documentados acima** (consultivos, sinal fraco): a tarefa `docs-lint`
(markdownlint + Vale, com `continue-on-error` em toda a tarefa) e os workflows autónomos de
análise `semgrep.yml` / `codeql.yml` / `scorecard.yml`. `semgrepFindings: 0` consta de
`quality-baseline.json`, mas não está ligado a um ratchet bloqueante em `ci.yml` — a métrica
está atualmente órfã.

### Consolidação / desduplicação (mecânica, menor risco)

Cada candidato foi validado face ao estado efetivo dos gates em 2026-06-17 (confiar, mas
verificar); várias consolidações "óbvias" acabaram por ocultar dívida e **não** podem ser
aplicadas diretamente sem problemas.

- **`check:docs-sync` é executado duas vezes** — de forma autónoma na tarefa `lint` e novamente dentro de `check:docs-all` (`docs-sync-strict`) e do hook de pre-commit do husky. ✅ **CONCLUÍDO** — removida a invocação autónoma em `lint`.
- **Análise de CVE** — ❌ **NÃO é uma consolidação direta.** `audit:deps` falha de forma bloqueante perante qualquer CVE alta/crítica; `check:vuln-ratchet` (osv) só falha perante uma _regressão_ relativamente à baseline (atualmente 1 MODERATE). Semânticas diferentes — remover `audit:deps` eliminaria o gate absoluto para vulnerabilidades altas/críticas. Manter ambos.
- **Deteção de ciclos** — ✅ **CONCLUÍDO** (#15159 G-01/G-02). O texto anterior descrevia `check:cycles` como o gate "verde e curado" e justificava mantê-lo bloqueante porque `check:circular-deps` (dpdm) comunicava 91 ciclos. Esse resultado verde era um **falso positivo de sucesso**: `check:cycles` analisava 5 subdiretórios (450 ficheiros), apenas correspondia a `import|export … from` estáticos e descartava todos os especificadores `@/` e `@omniroute/open-sse/`, pelo que não conseguia detetar os ciclos de importação dinâmica + aliases que predominavam no repositório. Corrigido: o gate percorre agora `src` + `open-sse` (5023 ficheiros), recolhe especificadores da AST do TypeScript (pelo que `import("…")` conta e `typeof import("…")` em posição de tipo não conta) e resolve `paths` do tsconfig. Deteta **14** ciclos, não 0. Uma vez que 14 ciclos preexistentes não podem ser corrigidos num PR de gate, `check:cycles` é agora um **ratchet** (`--ratchet`, limite máximo `metrics.cycles.value = 14` em `quality-baseline.json`, `direction: down`) — bloqueia qualquer _regressão_ e a contagem só pode diminuir. O CI executa `npm run check:cycles:ratchet`. A redução progressiva será efetuada com **A-01**. `check:circular-deps` (dpdm) permanece consultivo como segunda opinião mais abrangente.
- **Complexidade** — ✅ **CONCLUÍDO** (`check:complexity-ratchets` / `eslint.complexity-ratchets.config.mjs`): uma passagem do ESLint, com contagens por ruleId para que as baselines de complexidade ciclomática+max-lines e cognitiva permaneçam independentes; `check:complexity` / `check:cognitive-complexity` individuais são mantidos para utilização local com `--update`.
- **Anti-alucinação de `/api`** — ✅ **CONCLUÍDO** (`check:api-docs-refs` + `scripts/check/lib/apiRoutes.mjs`): um único inventário do sistema de ficheiros de `src/app/api`; openapi-routes + docs-symbols continuam a produzir relatórios independentes; as verificações individuais são mantidas para execuções locais.
- **`check:node-runtime` é executado em 11 tarefas** — ⚠️ **ROI baixo.** Cada tarefa utiliza um runner separado e a verificação demora <1s; poupança total de ~10s, à custa da perda de uma salvaguarda económica por tarefa. Não justifica a perturbação.
- **`typecheck:noimplicit:core` no lint do CI** — ✅ **removido da tarefa lint** (era consultivo com `continue-on-error`); a superfície de tipos bloqueante é `typecheck:core` + `check:type-coverage`. Script local mantido.

### Ativar/desativar / decidir (política do operador)

- `check:openapi-security-tiers` (consultivo) — ❌ **NÃO pode ser tornado bloqueante diretamente.** Termina com 0, mas avisa que várias rotas `traffic-inspector` sob `LOCAL_ONLY_API_PREFIXES` não possuem a anotação `x-loopback-only: true`. Torná-lo bloqueante exige primeiro adicionar essas anotações a `openapi.yaml`.
- `typecheck:noimplicit:core` (consultivo) — amplamente substituído pelo ratchet bloqueante `check:type-coverage`. Convertê-lo num ratchet ou remover a segunda passagem redundante do `tsc`.
- `test:vitest:ui` (agora **bloqueante**) — as falhas preexistentes são explicitamente excluídas em `vitest.config.ts` com comentários de acompanhamento `// #8618`; novas falhas fazem a tarefa falhar.
- `check:secrets` (gitleaks, ratchet bloqueante fixado em 3 falsos positivos documentados) — adicionar os 3 à lista de permissões para chegar a 0, ou despromover para consultivo. Sobrepõe-se à análise de segredos nativa do GitHub + `check:public-creds`.
- `check:pr-evidence` (bloqueante, procura padrões no texto do corpo do PR) — risco elevado de falsos positivos; a sua remoção enfraquece a aplicação da Regra Rígida #18, pelo que esta é uma verdadeira decisão de política.
- `semgrep` (consultivo autónomo) — sobrepõe-se ao CodeQL nas famílias OWASP; ligar a respetiva baseline a um ratchet ou remover.

---

## Documentação relacionada

- Cadeia de fornecimento (proveniência, SBOM, Trivy, Scorecard): [`docs/security/SUPPLY_CHAIN.md`](../security/SUPPLY_CHAIN.md)

#### `check-key-completeness` — controlo da paridade dos conjuntos de chaves

`scripts/i18n/check-key-completeness.mjs` (`npm run i18n:check-keys`, tarefa `i18n-ui-coverage`).
Compara o conjunto de chaves terminais de cada `src/i18n/messages/<locale>.json` com `en.json` e falha
perante qualquer chave terminal em falta ou adicional, independentemente de quando a chave foi adicionada. Os marcadores de posição `__MISSING__:`
contam como presentes (o respetivo conteúdo é da responsabilidade do controlo de proporção). É o complemento absoluto
dos dois controlos baseados em diferenças/percentagens: `check-ui-keys-coverage` impõe um mínimo de 80 % por
idioma (43 chaves em falta entre ~13 000 ainda resultam em 99,7 %) e `check-new-key-coverage` avalia
apenas as chaves que um PR adiciona a `en.json`. Um lote de idiomas é gerado a partir do `en.json` do dia
em que o respetivo ramo é criado e é traduzido durante vários dias, enquanto a base continua a receber chaves; o PR do lote não adiciona
qualquer chave por si só, pelo que ambos os controlos relacionados permaneceram silenciosos quando o lote 1 (#13044) foi integrado com menos 43 chaves em nove
idiomas e o lote 2 (#13660) com menos 10 chaves em oito (2026-09-15). Corrija uma falha com
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers`; uma chave terminal `extra`
significa que foi removida da origem — elimine-a do idioma. `--warn` comunica o problema sem provocar uma falha.
`--catalog=cli` executa a mesma comparação em `bin/cli/locales` (`npm run i18n:check-keys:cli`);
ambos os passos fazem parte da tarefa `i18n-ui-coverage`.

#### `check-new-key-coverage` — controlo de i18n para novas chaves

Controlo relacionado com `check-ui-value-drift`. Este último deteta um valor em inglês que foi **reescrito**
sem que as respetivas traduções fossem atualizadas; este deteta uma chave em inglês que foi **adicionada**
sem que alguns idiomas alguma vez a tenham recebido.

`check-ui-keys-coverage` não consegue detetar esta categoria: impõe um mínimo percentual por idioma, e
onze chaves em falta entre ~13 000 deixam a cobertura nos 99,9%. Uma percentagem por idioma não consegue
exprimir «esta funcionalidade foi disponibilizada sem tradução» — uma funcionalidade inteira pode ser integrada num novo idioma sem qualquer
texto e sem nunca alterar esse número.

O incidente que este controlo codifica: a Fase 3 do Orchestration Canvas traduziu as suas onze chaves para
os 42 idiomas existentes na altura. Horas mais tarde, o lote de idiomas da UE (#13044) aumentou o repositório
para 51 idiomas, e os nove recém-chegados (`el`, `et`, `ga`, `hr`, `lt`, `lv`, `mt`, `sl`, `sr`) nunca
as receberam. `deepMergeFallback` substitui por inglês uma chave em falta, pelo que o modo de falha era
uma IU não traduzida, em vez de uma IU vazia — um problema real e silencioso por definição.

Tal como o controlo relacionado, este é **sensível às diferenças**, comparando o inglês no ponto de base da integração com a árvore
de trabalho, pelo que as lacunas preexistentes permanecem congeladas e não foi necessária qualquer migração para ativar o controlo.

**Um marcador `__MISSING__:<english>` não satisfaz este controlo (desde 2026-09-17).** Era anteriormente o
adiamento documentado — durante a execução é usado o inglês correto como alternativa — até oito PRs de funcionalidades, em
2026-09-16, terem adicionado 61 chaves e aplicado o marcador em todos os 65 idiomas em vez de as traduzirem: este
controlo aceitou todos os casos, nada bloqueou os PRs, e o controlo bloqueante da proporção de traduções reais
falhou depois na ponta da versão para todos (pt-BR 3,2 % > 2,5 % + 0,5). Um marcador é agora tratado
como uma tradução em falta. Corrija uma falha com
`node scripts/i18n/sync-ui-keys.mjs --locale=<codes> --translate-markers --batch-size=40`, ou
todos os idiomas em paralelo com `npm run i18n:translate-new-keys` (`scripts/i18n/translate-new-keys.sh`,
seguro em modo desacoplado, recusa iniciar sem as variáveis de ambiente `OMNIROUTE_TRANSLATION_*`). Uma chave que tenha de permanecer
em inglês (o nome fixo de um produto/motor/sinalizador) deve constar de `scripts/i18n/untranslatable-keys.json`,
nunca ficar atrás de um marcador. `vi` proíbe totalmente os marcadores (`tests/unit/i18n-vi-completeness.test.ts`).

#### `check-vitest-exclusions` — controlo de testes suspensos

Um ficheiro na lista `exclude` de `vitest.config.ts` é um teste que não é executado e parece
cobertura para quem consulta a árvore. Acumularam-se sessenta e dois ficheiros atrás do comentário
`// #8618 — pre-existing failure; remove this exclusion when fixed`. O problema #8618 foi encerrado em
2026-08-11, enquanto a lista que acompanhava cresceu de 45 entradas para 62, tendo cada nova entrada herdado um comentário
que remetia para um problema encerrado. Quando a lista foi finalmente medida ficheiro a ficheiro (#13204), **51 dos 62
passaram na árvore atual sem qualquer alteração ao código-fonte**.

O controlo exige que cada exclusão que corresponda a um ficheiro real (a) indique um problema de acompanhamento e
(b) conste de `config/quality/vitest-exclusions.json` com o respetivo estado medido, para que adicionar uma seja
uma diferença passível de revisão num ficheiro dedicado, em vez de apenas mais uma linha numa matriz com 60 entradas. Deliberadamente,
não volta a executar os testes excluídos — isso demora ~10 minutos e deve ser feito numa tarefa periódica; o
inventário regista quando cada um foi medido pela última vez.
