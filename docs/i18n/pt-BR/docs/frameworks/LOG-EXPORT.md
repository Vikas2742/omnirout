# Log export (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../frameworks/LOG-EXPORT.md) · 🇪🇹 [am](../../../am/docs/frameworks/LOG-EXPORT.md) · 🇸🇦 [ar](../../../ar/docs/frameworks/LOG-EXPORT.md) · 🇦🇿 [az](../../../az/docs/frameworks/LOG-EXPORT.md) · 🇧🇬 [bg](../../../bg/docs/frameworks/LOG-EXPORT.md) · 🇧🇩 [bn](../../../bn/docs/frameworks/LOG-EXPORT.md) · 🇧🇦 [bs](../../../bs/docs/frameworks/LOG-EXPORT.md) · 🇨🇿 [cs](../../../cs/docs/frameworks/LOG-EXPORT.md) · 🇩🇰 [da](../../../da/docs/frameworks/LOG-EXPORT.md) · 🇩🇪 [de](../../../de/docs/frameworks/LOG-EXPORT.md) · 🇬🇷 [el](../../../el/docs/frameworks/LOG-EXPORT.md) · 🇪🇸 [es](../../../es/docs/frameworks/LOG-EXPORT.md) · 🇪🇪 [et](../../../et/docs/frameworks/LOG-EXPORT.md) · 🇮🇷 [fa](../../../fa/docs/frameworks/LOG-EXPORT.md) · 🇫🇮 [fi](../../../fi/docs/frameworks/LOG-EXPORT.md) · 🇫🇷 [fr](../../../fr/docs/frameworks/LOG-EXPORT.md) · 🇮🇪 [ga](../../../ga/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [gu](../../../gu/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ha](../../../ha/docs/frameworks/LOG-EXPORT.md) · 🇮🇱 [he](../../../he/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [hi](../../../hi/docs/frameworks/LOG-EXPORT.md) · 🇭🇷 [hr](../../../hr/docs/frameworks/LOG-EXPORT.md) · 🇭🇺 [hu](../../../hu/docs/frameworks/LOG-EXPORT.md) · 🇦🇲 [hy](../../../hy/docs/frameworks/LOG-EXPORT.md) · 🇮🇩 [id](../../../id/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [ig](../../../ig/docs/frameworks/LOG-EXPORT.md) · 🇮🇹 [it](../../../it/docs/frameworks/LOG-EXPORT.md) · 🇯🇵 [ja](../../../ja/docs/frameworks/LOG-EXPORT.md) · 🇬🇪 [ka](../../../ka/docs/frameworks/LOG-EXPORT.md) · 🇰🇭 [km](../../../km/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [kn](../../../kn/docs/frameworks/LOG-EXPORT.md) · 🇰🇷 [ko](../../../ko/docs/frameworks/LOG-EXPORT.md) · 🇱🇹 [lt](../../../lt/docs/frameworks/LOG-EXPORT.md) · 🇱🇻 [lv](../../../lv/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ml](../../../ml/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [mr](../../../mr/docs/frameworks/LOG-EXPORT.md) · 🇲🇾 [ms](../../../ms/docs/frameworks/LOG-EXPORT.md) · 🇲🇹 [mt](../../../mt/docs/frameworks/LOG-EXPORT.md) · 🇲🇲 [my](../../../my/docs/frameworks/LOG-EXPORT.md) · 🇳🇵 [ne](../../../ne/docs/frameworks/LOG-EXPORT.md) · 🇳🇱 [nl](../../../nl/docs/frameworks/LOG-EXPORT.md) · 🇳🇴 [no](../../../no/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [or](../../../or/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [pa](../../../pa/docs/frameworks/LOG-EXPORT.md) · 🇵🇭 [phi](../../../phi/docs/frameworks/LOG-EXPORT.md) · 🇵🇱 [pl](../../../pl/docs/frameworks/LOG-EXPORT.md) · 🇵🇹 [pt](../../../pt/docs/frameworks/LOG-EXPORT.md) · 🇷🇴 [ro](../../../ro/docs/frameworks/LOG-EXPORT.md) · 🇷🇺 [ru](../../../ru/docs/frameworks/LOG-EXPORT.md) · 🇱🇰 [si](../../../si/docs/frameworks/LOG-EXPORT.md) · 🇸🇰 [sk](../../../sk/docs/frameworks/LOG-EXPORT.md) · 🇸🇮 [sl](../../../sl/docs/frameworks/LOG-EXPORT.md) · 🇷🇸 [sr](../../../sr/docs/frameworks/LOG-EXPORT.md) · 🇸🇪 [sv](../../../sv/docs/frameworks/LOG-EXPORT.md) · 🇰🇪 [sw](../../../sw/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [ta](../../../ta/docs/frameworks/LOG-EXPORT.md) · 🇮🇳 [te](../../../te/docs/frameworks/LOG-EXPORT.md) · 🇹🇭 [th](../../../th/docs/frameworks/LOG-EXPORT.md) · 🇹🇷 [tr](../../../tr/docs/frameworks/LOG-EXPORT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/frameworks/LOG-EXPORT.md) · 🇵🇰 [ur](../../../ur/docs/frameworks/LOG-EXPORT.md) · 🇺🇿 [uz](../../../uz/docs/frameworks/LOG-EXPORT.md) · 🇻🇳 [vi](../../../vi/docs/frameworks/LOG-EXPORT.md) · 🇳🇬 [yo](../../../yo/docs/frameworks/LOG-EXPORT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/frameworks/LOG-EXPORT.md) · 🇹🇼 [zh-TW](../../../zh-TW/docs/frameworks/LOG-EXPORT.md)

---

Exportação contínua e incremental dos logs de chamadas do OmniRoute para um armazenamento analítico externo.

A aba Logs do painel mantém o histórico de requisições no SQLite (`call_logs`), limitado por
rotação e retenção. A exportação de logs envia o mesmo conjunto de registros de forma agendada para que ele possa permanecer disponível além
do banco de dados local e ser cruzado com outros dados. O BigQuery é o primeiro destino; o
pipeline usa um registro, portanto novos destinos podem ser adicionados.

---

## 1. Como funciona

```
servidor (descriptografar + validar configuração, reconciliar cursor)
  → iniciar IPC → processo isolado exportChild do SO
    → storage.sqlite somente leitura → consulta/mapeamento compartilhado de logs de chamadas
      → hidratação assíncrona de artefatos → prepare()/send() do destino
        → IPC de lote → servidor persiste cursor → IPC de confirmação
          → próximo lote; IPC de conclusão → servidor registra sucesso
```

- **Agendamento** — uma tarefa cron do `JobRegistry`, `log_export`, com padrão `0 * * * *` (a cada hora,
  UTC). Registrada em `src/lib/initCloudSync.ts`; pode ser substituída com `OMNIROUTE_LOG_EXPORT_CRON`.
  Cada disparo processa todos os destinos **habilitados**, sequencialmente.
- **Cursor** — o `call_logs.rowid` implícito do SQLite, persistido por destino em
  `log_export_destinations.cursor_row_id`. `timestamp` deliberadamente não é o cursor: os chamadores
  podem fornecer seu próprio valor, portanto uma requisição lenta pode ser gravada depois de uma mais rápida que começou
  mais tarde, e um cursor baseado em timestamp a ignoraria.
- **Processamento em lotes** — `batch_size` linhas por requisição (padrão 500), `max_rows_per_run` linhas por execução
  (padrão 10000), para que um grande acúmulo seja processado ao longo de vários disparos em vez de bloquear um deles.
- **Entrega** — o cursor avança somente após `send()` ser resolvido. Um lote com falha deixa o
  cursor onde estava, de modo que as mesmas linhas são reenviadas na próxima execução. A garantia é de
  entrega pelo menos uma vez com desduplicação no destino, não de entrega exatamente uma vez: o BigQuery usa o
  ID do log de chamada como chave de cada linha, respeitando-o na medida do possível dentro de sua própria janela de desduplicação.
- **Proteção contra sobreposição** — o disparo do cron e `POST .../run` podem ocorrer juntos. Um destino
  que já está sendo processado é ignorado em vez de ser processado duas vezes (`skipped: true` no resultado da execução),
  portanto uma execução simultânea não pode reenviar um lote nem fazer o cursor retroceder.
- **Recuperação após limpeza** — se `cursor_row_id` ficar acima de `MAX(rowid)` (a tabela inteira foi
  limpa e os rowids foram reiniciados), o executor retorna a 0 em vez de deixar de detectar registros permanentemente.

### Executor isolado e limites

Cada execução de destino no Node inicia um processo filho separado e de curta duração do SO (`child_process`
com IPC, não `worker_threads`). Leituras de corpos, análise/serialização de JSON dos payloads,
`prepare()` do destino e E/S de rede do destino são executados nele, não no loop de eventos do servidor.
Somente a configuração e pequenas mensagens de progresso passam pelo IPC; os registros exportados nunca retornam ao
servidor. A tarefa cron e a rota Executar agora mantêm o mesmo resultado público e a mesma proteção contra sobreposição.

O processo filho abre o `DATA_DIR/storage.sqlite` resolvido pelo servidor em modo somente leitura usando `node:sqlite`,
com `busy_timeout=5000` e `query_only=ON`. Ele não importa nenhum singleton de banco de dados e não realiza
migrações, backups nem atualizações no SQLite. O controle de artefatos ausentes/corrompidos (incluindo o
UPDATE de artefato corrompido) permanece apenas no fluxo de detalhes do painel. Ambos os fluxos compartilham um
resolvedor de detalhes puro; a exportação usa leituras assíncronas do sistema de arquivos e a mesma ordem de resolução:
artefato → inline legado → disco legado → nenhum. Uma execução captura o maior rowid de inserção
quando o processo filho abre seu leitor; inserções posteriores aguardam a próxima execução. Esse é um limite
de inserção, não uma transação SQLite de longa duração: gravadores do WAL e checkpoints permanecem livres durante
as esperas de rede. Atualizações/exclusões de linhas existentes não são congeladas por esse limite.

Após cada lote aceito, o processo filho aguarda uma confirmação. O servidor primeiro persiste
o cursor com `advanceLogExportCursor` e depois envia `ack`; nenhum próximo lote começa antes disso.
Uma falha de envio, encerramento inesperado ou timeout registra uma falha sem avançar o cursor desse lote. Lotes
confirmados anteriormente permanecem confirmados; no máximo, o único lote não confirmado pode ser reenviado.
O sucesso é registrado somente após `done` e uma saída normal do processo filho. Falhas encerram o processo filho
com SIGTERM, escalando para SIGKILL após 500 ms, e o executor aguarda o encerramento do processo.

| Variável de ambiente                          | Padrão | Finalidade                                        |
| --------------------------------------------- | ------ | ------------------------------------------------- |
| `OMNIROUTE_LOG_EXPORT_RUN_TIMEOUT_MS`         | 900000 | Limite de tempo decorrido por destino             |
| `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB` | 1024   | Limite do old-space do V8 do processo filho em MB |

Valores inválidos/não positivos/não inteiros usam os padrões. A configuração de heap não é um limite
total de RSS; lotes muito grandes ainda podem esgotar a memória do processo filho e fazer a execução falhar com segurança.
O padrão de 1024 MB deixa uma margem para o lote padrão de 500 linhas de artefatos de 512 KiB com
corpos habilitados, incluindo a serialização JSON do BigQuery dividida em blocos por bytes. Isso não torna
seguro um lote de 10000 linhas com corpos. O esgotamento do heap do V8 registra uma falha com orientação de correção: reduza o tamanho
do lote ou aumente `OMNIROUTE_LOG_EXPORT_CHILD_MAX_OLD_SPACE_MB`; o cursor permanece no último
lote confirmado. Corpos históricos inline/em disco não são cobertos pelo limite de artefatos moderno.
Os operadores devem dimensionar o RSS separadamente, especialmente em contêineres com memória limitada.

O processo filho herda apenas o `DATA_DIR` resolvido, `NODE_ENV`, `TZ` explícito (resolução de
horário local para nomes de arquivo legados), `ELECTRON_RUN_AS_NODE` quando presente e as seguintes configurações de saída:
`HTTP_PROXY`, `HTTPS_PROXY`, `ALL_PROXY`, `NO_PROXY` (e suas formas em minúsculas),
`OMNIROUTE_LOCAL_PROVIDER_NODE_HOSTS`, `NODE_EXTRA_CA_CERTS`, `SSL_CERT_FILE`, `SSL_CERT_DIR`.
Um dispatcher global do Undici compartilha a resolução de proxy baseada exclusivamente no ambiente e as regras de
bypass de hosts locais do servidor, incluindo `NO_PROXY`; ele não importa `proxyFetch.ts` nem suas flags de banco de dados/funcionalidades.
As credenciais de proxy são ocultadas na saída encaminhada e nos erros registrados. As credenciais de destino
são transmitidas apenas em uma mensagem IPC de inicialização, nunca em argv ou no ambiente; o encaminhamento de saída/erros
recebe um prefixo e é sanitizado. Apenas `ExperimentalWarning` é desativado nos argumentos de execução do processo filho para evitar
a repetição do aviso de SQLite do Node a cada execução do cron; os outros tipos de aviso permanecem visíveis.

Os módulos de destino devem poder ser importados sem dependências do Next.js/exclusivas do servidor. A implementação
existente do BigQuery já atende a esse contrato. Os caches de tokens de acesso duram apenas durante a execução
do processo filho, não entre execuções. Node é o ambiente de execução suportado (`package.json` engines), mas a seção de
instalação com Bun do README e `Dockerfile.bun` também apresentam uma opção de compatibilidade em produção usando
`bun:sqlite` (`src/lib/db/core.ts` / adaptadores). No Bun, portanto, as exportações mantêm o caminho anterior
dentro do mesmo processo e emitem um aviso uma única vez: o isolamento de heap/tempo limite em processos filhos não está disponível. Use
Node para isolamento do loop de eventos e de falta de memória (OOM); o Bun não é tratado aqui como exclusivo para desenvolvimento.

Quando `includeBodies` estiver habilitado, prefira uma frequência em minutos, como
`OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, em vez de acumular uma fila de payloads por hora.
Os limites de lotes e linhas continuam restringindo cada execução. O custo de inicialização do processo ocorre para cada destino em cada execução;
essa abordagem troca um pequeno custo de inicialização pelo isolamento do loop de eventos do servidor, não por uma redução no uso total de CPU.

### Payloads (prompts e respostas)

Por padrão, a exportação inclui apenas os campos de resumo exibidos na **lista** de Logs. Ativar
**Exportar prompts e respostas** (`includeBodies`) também envia o que o painel de **detalhes**
de Logs exibe para cada chamada:

| Campo                            | O que contém                                                     |
| -------------------------------- | ---------------------------------------------------------------- |
| `request_body` / `response_body` | Os payloads da chamada conforme renderizados pelo painel         |
| `pipeline_route_decision`        | Qual destino e modelo o roteador selecionou                      |
| `pipeline_client_request`        | A requisição bruta exatamente como enviada pelo cliente          |
| `pipeline_openai_request`        | Após a conversão para o formato interno da OpenAI                |
| `pipeline_provider_request`      | Como foi efetivamente enviada ao provedor, no formato dele       |
| `pipeline_provider_response`     | A resposta bruta do provedor                                     |
| `pipeline_client_response`       | O que foi devolvido ao chamador                                  |
| `pipeline_error`                 | Detalhes de erro no nível do pipeline para uma chamada com falha |
| `bodies_truncated`               | Verdadeiro quando qualquer campo acima atingiu `maxBodyBytes`    |

Isso é conteúdo de prompts, portanto fica **desativado por padrão** e é deliberadamente uma escolha por destino.
O que é enviado é o que o painel exibe, pois a exportação e `getCallLogById` compartilham a resolução
de detalhes: os payloads
já têm os dados pessoais sanitizados e os segredos ocultados quando são gravados, e uma chamada feita com uma
chave de API `noLog` não armazena nenhum payload, portanto não há nada para exportar.

Os payloads são lidos por linha a partir do artefato no sistema de arquivos, portanto a hidratação só é executada para os destinos
que a solicitaram. Um artefato ausente ou corrompido faz com que seu resumo seja exportado com payloads nulos, em vez
de causar falha no lote e impedir o avanço do cursor.

`maxBodyBytes` (padrão 262144) limita cada campo. Payloads mais longos são **truncados em vez de
descartados** — um prompt cortado ainda responde à pergunta "o que foi solicitado" — e a linha é sinalizada com
`bodies_truncated`. Os deltas transmitidos em streaming, fragmento por fragmento, não são exportados; a resposta montada
já está em `pipeline_provider_response` e `pipeline_client_response`.

---

## 2. Arquivos

| Componente                                  | Localização                                  |
| ------------------------------------------- | -------------------------------------------- |
| Contrato de destino                         | `src/lib/logExport/types.ts`                 |
| Registro                                    | `src/lib/logExport/registry.ts`              |
| Tratamento de segredos                      | `src/lib/logExport/secrets.ts`               |
| Executor (IPC do processo pai)              | `src/lib/logExport/runner.ts`                |
| Ciclo de vida do processo                   | `src/lib/logExport/childRunner.ts`           |
| Ponto de entrada do processo filho          | `src/lib/logExport/exportChild.ts`           |
| Abertura em modo somente leitura            | `src/lib/db/logExportReadOnly.ts`            |
| Consulta/mapeamento compartilhados          | `src/lib/usage/callLogExportQueries.ts`      |
| Resolvedor de detalhes                      | `src/lib/usage/callLogDetailResolver.ts`     |
| Projeção da API                             | `src/lib/logExport/presenter.ts`             |
| Destino BigQuery                            | `src/lib/logExport/destinations/bigquery.ts` |
| Autenticação com conta de serviço do Google | `src/lib/logExport/googleServiceAccount.ts`  |
| Fonte de logs de chamadas                   | `src/lib/usage/callLogExportSource.ts`       |
| Persistência                                | `src/lib/db/logExportDestinations.ts`        |
| Tarefa cron                                 | `src/lib/jobs/logExportJob.ts`               |
| Camada REST                                 | `src/app/api/log-export/`                    |
| Página do painel                            | `src/app/(dashboard)/dashboard/log-export/`  |

Esquema: `src/lib/db/migrations/170_log_export_destinations.sql`.

---

## 3. API REST

Todas as rotas exigem autenticação de gerenciamento (`requireManagementAuth`). Segredos nunca são retornados:
um segredo armazenado é retornado como o literal `__stored__`, e enviar esse valor de volta em uma atualização
mantém a credencial armazenada.

Criar ou atualizar um destino cujo tipo declara um segredo **exige
`STORAGE_ENCRYPTION_KEY`**. Sem essa variável, `encrypt()` repassa o valor silenciosamente, sem criptografá-lo, então a gravação é
recusada com um erro 400 em vez de inserir uma credencial no SQLite em texto simples (a mesma proteção que o
webhook do Telegram aplica).

| Método   | Caminho                                  | Finalidade                                                        |
| -------- | ---------------------------------------- | ----------------------------------------------------------------- |
| `GET`    | `/api/log-export/types`                  | Tipos de destino + sua lista de campos de configuração            |
| `GET`    | `/api/log-export/destinations`           | Listar destinos (segredos ocultados)                              |
| `POST`   | `/api/log-export/destinations`           | Criar um destino                                                  |
| `GET`    | `/api/log-export/destinations/{id}`      | Consultar um destino                                              |
| `PUT`    | `/api/log-export/destinations/{id}`      | Atualizar nome / ativação / configuração / processamento em lotes |
| `DELETE` | `/api/log-export/destinations/{id}`      | Excluir                                                           |
| `POST`   | `/api/log-export/destinations/{id}/test` | Testar credenciais, sem gravar nada                               |
| `POST`   | `/api/log-export/destinations/{id}/run`  | Processar pendências agora, pelo mesmo fluxo da execução agendada |
| `GET`    | `/api/log-export/status`                 | Estado do cron, execuções recentes, pendências por destino        |

`GET /api/log-export/types` é o que torna a interface genérica: o formulário do painel é renderizado a partir
dos descritores de campos retornados, de modo que um novo destino não exige alterações na interface.

---

## 4. Destino BigQuery

Chaves de configuração (`type: "bigquery"`):

| Chave                | Observações                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `projectId`          | Projeto do GCP que contém o conjunto de dados                                 |
| `datasetId`          | `[A-Za-z0-9_]+`                                                               |
| `tableId`            | `[A-Za-z0-9_]+`                                                               |
| `location`           | Usado apenas quando o conjunto de dados precisa ser criado (padrão `EU`)      |
| `serviceAccountJson` | Chave da conta de serviço. Segredo: criptografado em repouso, nunca retornado |
| `autoCreate`         | Cria o conjunto de dados e a tabela na primeira exportação (padrão `true`)    |

A conta de serviço precisa de `bigquery.tables.updateData` na tabela de destino, além de
`bigquery.datasets.create` / `bigquery.tables.create` quando `autoCreate` estiver ativado.

Um lote configurado é uma unidade de **cursor**, não de HTTP: `send()` o divide em chamadas insertAll
de no máximo 500 linhas, de modo que um `batch_size` grande não ultrapasse o limite de 10 MB por requisição do BigQuery.
Códigos de status transitórios (408/429/500/502/503/504) geram até três novas tentativas com espera
exponencial, reutilizando os mesmos insertIds; falhas de autenticação e de esquema lançam uma exceção na primeira tentativa, em vez
de desperdiçar a execução.

Uma tabela recém-criada ainda não está visível para o endpoint de streaming, que responde com
404 por alguns segundos. Esse 404 gera novas tentativas, mas **somente quando a tabela foi criada nesta execução** —
uma tabela realmente inexistente continua causando falha imediata. Observe que recriar uma tabela com um nome que
foi excluído recentemente faz o BigQuery recusar inserções por streaming durante vários minutos; isso é uma
característica do processo de excluir e recriar, portanto prefira um novo nome de tabela em vez de excluir e adicionar a mesma tabela novamente.

**Uma falha parcial chega como HTTP 200 com `insertErrors[]` não vazio.** Isso é tratado como
uma falha e lança uma exceção, o que impede o cursor de avançar além de linhas que o BigQuery nunca
aceitou; `tests/unit/log-export-bigquery.test.ts` garante esse comportamento.

O transporte usa REST puro — uma asserção RS256 autoassinada é trocada por um token de acesso em
`https://oauth2.googleapis.com/token` e, em seguida, as linhas são enviadas para `tabledata.insertAll`. Nenhum SDK do Google é
incluído. Os tokens de acesso são armazenados em cache no processo por (conta de serviço, escopo).

A tabela criada contém uma coluna para cada campo da aba Logs, além de `exported_at`, e é organizada de acordo com
a forma como os logs de chamadas são realmente consultados:

- **Particionada por dia com base em `timestamp`**, para que uma consulta delimitada por data examine apenas esses dias.
- **Agrupada por `api_key_name`, `provider`, `model`, `status`** (nessa ordem), para que filtros por
  quem executou, para onde a chamada foi enviada ou se houve falha eliminem blocos dentro de cada partição. O BigQuery
  permite no máximo quatro colunas de agrupamento, e a ordem importa: um filtro apenas por `api_key_name`
  elimina blocos; um filtro apenas por `status`, não.
- **Retenção opcional de partições** por meio de `partitionExpirationDays` (0 mantém tudo), aplicada
  quando a tabela é criada.

Ambas as configurações se aplicam no momento da criação. Uma tabela existente mantém a organização que já possui, portanto
aponte o destino para um novo ID de tabela se quiser adotá-las.

`tests/unit/log-export-bigquery.test.ts` verifica se o mapeador e o esquema da tabela permanecem
sincronizados, para que uma nova coluna do log de chamadas não seja descartada silenciosamente durante a exportação.

Os lotes são divididos **tanto** pela quantidade de linhas quanto pelo tamanho serializado em bytes. Apenas a quantidade de linhas não é suficiente
quando os payloads são exportados: 500 linhas contendo prompts podem ocupar dezenas de megabytes, e insertAll
rejeita requisições acima de 10 MB. Cada bloco é fechado ao atingir 500 linhas ou 9 MB, o que ocorrer primeiro.

---

## 5. Destino de traces OTLP/HTTP

A configuração usa `type: "otlp-http"`. Trata-se de uma exportação agendada, baseada em cursor, dos
logs de chamadas persistidos, e não do destino de eventos de roteamento em tempo real com entrega de melhor esforço em
`open-sse/services/routing/otel.ts`. Ela não lê nem altera as variáveis de ambiente,
os temporizadores ou os buffers desse destino. Habilitar ambos pode produzir dois tipos independentes de spans;
use o escopo de instrumentação `omniroute.log-export` para distinguir esses spans de logs de chamadas.

| Chave             | Padrão / finalidade                                                                   |
| ----------------- | ------------------------------------------------------------------------------------- |
| `endpoint`        | URL HTTP(S) completa de traces obrigatória; nenhum sufixo `/v1/traces` é acrescentado |
| `headers`         | Linhas opcionais `Name: value` ou objeto JSON de strings; criptografado               |
| `serviceName`     | `omniroute`; recurso `service.name`                                                   |
| `langfuseMapping` | `false`; adiciona atributos de geração/sessão/usuário do Langfuse                     |
| `identity`        | `pseudonymous`, `keyName` ou `none`                                                   |
| `paths`           | `/v1/chat/completions`, `/v1/responses`, `/v1/messages`                               |
| `timeoutMs`       | `30000` por tentativa HTTP                                                            |
| `environment`     | Não definido; `langfuse.environment` opcional                                         |

O painel genérico renderiza esses campos. `paths` aceita um array da API ou uma área de texto
com caminhos exatos separados por quebras de linha/vírgulas. Caminhos de embeddings, rerank e outros são
ignorados, a menos que sejam explicitamente permitidos. As linhas ignoradas ainda avançam o cursor; os contadores
`exported`/`exportedTotal` do executor existente contam as linhas de origem processadas, incluindo as linhas filtradas,
em vez dos spans aceitos. A filtragem é feita no processo filho, sem alterar seu
contrato de IPC/cursor.

A validação de URL usa a função auxiliar `parseAndValidateNonMetadataUrl`, que não depende do banco de dados, de
`src/shared/network/outboundUrlGuard.ts`: a política `block-metadata`. Ela tem as mesmas
verificações incondicionais de metadados/protocolo/credenciais embutidas que o validador de webhook com
URLs privadas habilitadas, mas permite deliberadamente destinos localhost/LAN sem uma
substituição global por feature flag. Isso permite endpoints auto-hospedados do Langfuse, Phoenix, Tempo e Collector,
incluindo endpoints HTTP privados. Hosts de metadados de nuvem são sempre bloqueados.
Redirecionamentos não são seguidos, portanto um coletor não pode redirecionar credenciais para outro host.
Assim como a proteção lexical de URL existente, isso não fixa a resolução DNS; configure apenas
hosts controlados pelo operador. Prefira HTTPS sempre que o endpoint não estiver em uma rede confiável.

### Payload e entrega

O JSON OTLP/HTTP (`ExportTraceServiceRequest`, `Content-Type: application/json`) transporta um
span CLIENT por linha permitida, nomeado pelo caminho exato da requisição. A nomenclatura por caminho distingue
Chat Completions, Responses e Messages sem incorporar dados de modelo ou identidade no
nome do span. Os atributos de recurso incluem `service.name` e o `service.version` do pacote.

O logger normal de tentativas de chat (`open-sse/handlers/chatCore/attemptLogging.ts`) grava
`duration = Date.now() - startTime` na conclusão e não fornece um timestamp;
`saveCallLogOperation` em `src/lib/usage/callLogs.ts` define, por padrão, o timestamp como o horário de gravação
(conclusão). Portanto, a exportação define fim = timestamp da linha e início = fim − duração
(milissegundos, convertidos em nanossegundos decimais). Timestamps históricos fornecidos pelo chamador
também são preservados como horário de término; não há um discriminador de início/conclusão por linha.
Uma duração nula se torna zero. Timestamps inválidos/ausentes fazem o lote falhar em vez de criar
spans não determinísticos. `ttftMs` aceita nulo e é mapeado para `omniroute.ttft_ms`.

Os atributos incluem `gen_ai.operation.name="chat"`, provedor, modelo solicitado/de resposta,
tokens de entrada/saída, tokens opcionais de leitura de cache/criação de cache/raciocínio, status HTTP,
combo, origem do cache, tag de sessão e ID de correlação. Valores inteiros OTLP e timestamps
são strings decimais; strings, booleanos e números fracionários usam suas variantes nativas de valor OTLP.
Spans de erro têm status ERROR e uma mensagem de status sanitizada. O registro
canônico não tem a URL do host upstream, portanto `server.address` é omitido em vez de identificar
incorretamente o coletor como o servidor do modelo. O custo não é exportado.

Somente `includeBodies=true` carrega o conteúdo. Com `langfuseMapping=false`,
`gen_ai.input.messages` / `gen_ai.output.messages` transportam o JSON sanitizado do corpo da requisição/resposta
conforme armazenado pelo OmniRoute (canonicalizado quando pode ser analisado), e não um array
de mensagens reestruturado segundo as convenções semânticas. Corpos truncados/não JSON permanecem como texto bruto. Com `langfuseMapping=true`,
os corpos são emitidos apenas como `langfuse.observation.input` / `langfuse.observation.output`;
os atributos `gen_ai.*.messages` são omitidos para que cada corpo seja enviado uma única vez. Ambos os modos
herdam `maxBodyBytes` do fluxo de carregamento existente;
`omniroute.bodies_truncated=true` indica truncamento.
Nenhum snapshot adicional do pipeline nem leituras de artefatos não sanitizados são adicionados por esse destino.
Use uma frequência em minutos, como `OMNIROUTE_LOG_EXPORT_CRON="*/5 * * * *"`, ao exportar
corpos, em vez de acumular uma fila de pendências a cada hora.

As requisições são limitadas a 500 spans e 4 MiB de JSON UTF-8, incluindo o envelope.
O tamanho de cada span permitido é verificado antes da primeira requisição de um lote do cursor. Um
span individual maior que o limite impede o envio de qualquer parte desse lote e causa uma falha com orientação para reduzir
`maxBodyBytes`; ele não é descartado silenciosamente. A verificação prévia mantém apenas referências aos registros e
contagens de bytes, descartando cada span/JSON temporário; os spans são reconstruídos para blocos de tamanho limitado,
em vez de manter uma segunda cópia serializada do lote. HTTP 408/429/5xx, falhas de rede e tempos limite resultam em no máximo
três tentativas, com espera exponencial de 250/500 ms. Segundos ou datas HTTP em `Retry-After`
podem estender a espera até 5 segundos. Outros status causam falha imediatamente. A rejeição parcial OTLP 2xx também lança uma exceção em vez de
confirmar um span perdido; confirmações vazias ou em JSON válido são aceitas, com um
limite de leitura da resposta de 64 KiB.

Os erros contêm apenas informações do próprio exportador: status HTTP, classe de retentativa, tentativas e contagens de spans
enviados, ou mensagens fixas de falha de confirmação/rede. Corpos de resposta do coletor,
contagens de sucesso parcial e cabeçalhos de resposta nunca são copiados para erros, logs ou o
painel. Um lote que falhou ou foi parcialmente aceito não é confirmado: o destino exibe
Falhando com esse status, o cursor permanece no último lote confirmado e a próxima execução
reenvia as mesmas linhas. Status permanentes continuam causando falhas até que o coletor ou a configuração
seja corrigido. Use os logs do próprio coletor para obter detalhes da resposta. Os resumos de erros do log de chamadas mantêm
sua ocultação de dados separada.
`prepare()` não provisiona nada; Testar envia via POST exatamente `{"resourceSpans":[]}` e informa
o status HTTP sem gravar spans do log de chamadas.

Os IDs de trace e de span são os primeiros 32/16 dígitos hexadecimais do SHA-256 de
`"omniroute.trace\\0" + callLogId` e `"omniroute.span\\0" + callLogId`. Os reenvios usam
IDs idênticos. Isso não garante a deduplicação: alguns backends, incluindo a ingestão do Langfuse
v4, não deduplicam spans com o mesmo ID. Uma falha abrupta ou falha parcial de um bloco pode
reenviar, no máximo, o único lote do cursor não confirmado; esse lote inteiro pode ser duplicado,
não apenas seu último bloco HTTP. Escolha o tamanho do lote do cursor levando essa compensação em consideração.

### Exemplo do Langfuse

Configure estes campos para uma instância auto-hospedada do Langfuse:

```json
{
  "endpoint": "https://langfuse.example.com/api/public/otel/v1/traces",
  "headers": "Authorization: Basic <base64-of-public-key:secret-key>",
  "serviceName": "omniroute",
  "langfuseMapping": true,
  "identity": "pseudonymous",
  "environment": "production"
}
```

Crie o valor de Authorization localmente como o Base64 da string literal `public-key:secret-key`
(por exemplo, com `Buffer.from(publicKey + ":" + secretKey).toString("base64")`).
Não cole credenciais reais em logs, capturas de tela ou issues. O mapeamento define automaticamente
`x-langfuse-ingestion-version: 4`; Authorization continua sendo fornecido em `headers`.
Tanto os cabeçalhos quanto o salt de identidade gerado usam o mecanismo existente de campos secretos
criptografados e os placeholders da API; `STORAGE_ENCRYPTION_KEY` é obrigatório.

O mapeamento adiciona tipo/modelo de geração, detalhes de uso em JSON (entrada/saída/total e chaves de
cache disponíveis), snapshots de entrada/saída em JSON, nível ERROR/DEFAULT, mensagem de status sanitizada,
nome do trace, ID da sessão, ambiente opcional e
`langfuse.observation.metadata.<key>` filtrável para provedor, modelo solicitado, caminho, combo, origem do
cache e status. `langfuse.observation.completion_start_time` é um valor ISO 8601 em
início + TTFT somente quando o TTFT é conhecido e está dentro da duração. Nenhum atributo de custo é enviado.

Os modos de identidade se aplicam a `langfuse.user.id`:

- `pseudonymous` (padrão): HMAC-SHA256 do ID interno da chave de API com um salt aleatório
  de 32 bytes por destino. O salt é gerado na criação, se ausente, criptografado
  como `identitySalt`, nunca retornado e mantido durante as edições. IDs brutos de chaves nunca
  são colocados em atributos de spans. Recriar/rotacionar o salt de um destino altera as identidades.
- `keyName`: o nome configurado da chave de API, revelando intencionalmente esse rótulo definido pelo operador.
- `none`: sem ID de usuário. As tags de sessão ainda são exportadas quando presentes; esses modos não
  anonimizam conteúdo arbitrário de prompts nem rótulos de sessão/correlação fornecidos pelo operador.

### Iniciando sem preenchimento retroativo

Somente na criação, habilite **Iniciar da posição atual (ignorar logs existentes)** ou passe
`startFromCurrentPosition: true` no nível superior do payload da API de criação. Isso inicializa
`cursor_row_id` com o maior rowid atual retido no log de chamadas usando os auxiliares de cursor
existentes, sem migração. O padrão é falso (cursor 0 e preenchimento retroativo do histórico retido).
Essa não é uma configuração de redefinição do cursor durante atualizações.

A adição compartilhada de `ttftMs` também adiciona uma coluna `ttft_ms` que aceita nulos ao mapeador do BigQuery
e ao esquema de novas tabelas: seu teste de esquema exige que cada campo canônico de registro tenha uma
coluna. As tabelas existentes continuam exportando sem alterações: `prepare()` lê o esquema da tabela e
omite apenas `ttft_ms` quando essa coluna está ausente. Adicione a coluna INT64 que aceita nulos para obter o TTFT
na próxima execução ou use uma nova tabela. Nenhum PATCH, alteração automática de esquema ou permissão
adicional é necessário; todos os outros campos das linhas mantêm a verificação rigorosa de esquema.

---

## 6. Adicionando um destino

1. Crie `src/lib/logExport/destinations/<name>.ts` exportando um `LogExportDestinationType`:
   um `configSchema` do Zod, um array de descritores `fields` para a interface, `secretFields` e um
   `createClient(config)` que retorne `test()` / `prepare()` / `send(records)`.
2. Adicione-o ao array `DESTINATIONS` em `src/lib/logExport/registry.ts`.
3. Escreva testes em `tests/unit/`.

Essa é toda a alteração: a persistência, o job cron, a camada REST, a criptografia de segredos e o
formulário do painel leem o registro.

Duas regras para um novo destino:

- `send()` **deve lançar uma exceção** em caso de falha parcial. A resolução significa "o destino tem essas linhas",
  e o cursor avança além delas permanentemente.
- Um destino que aceita uma URL fornecida pelo usuário deve validá-la por meio de
  `parseAndValidateWebhookUrl` (`src/shared/network/outboundUrlGuardPolicy.ts`) antes de fazer a requisição,
  da mesma forma que os webhooks. O BigQuery não precisa disso: seus hosts são constantes.

---

## 7. Operando a funcionalidade

- **Painel**: Integrações → Exportação de logs. Adicione um destino, execute **Testar** para verificar as credenciais
  sem gravar linhas e, em seguida, habilite-o.
- **Pendências**: cada cartão de destino mostra as linhas pendentes e o cursor; `GET
/api/log-export/status` retorna os mesmos números mais as últimas 20 execuções do job.
- **Um destino com falha não faz os outros falharem** — o resumo da execução registra o
  status por destino em `last_status` / `last_error`, e o histórico de execuções do job mantém os dados agregados.
- **Excluir um destino exclui seu cursor.** Adicioná-lo novamente inicia a partir do registro
  de chamada retido mais antigo, o que reenvia linhas que o destino talvez já tenha. No BigQuery, o
  `insertId` por linha absorve essa duplicação apenas dentro da janela de desduplicação do próprio BigQuery, portanto, prefira desabilitar
  um destino em vez de excluí-lo.
