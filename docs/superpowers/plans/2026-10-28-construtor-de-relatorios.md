# Construtor de relatórios no painel — plano de implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Levar ao painel Vue a lista de relatórios, o construtor de três áreas, a modal de métrica personalizada e a cor/aparência por métrica, como no protótipo aprovado.

**Architecture:** Um ajuste pequeno no core (opções de cor e aparência por métrica em `check_chart`, v0.33.0) e a API sobe para essa tag. No painel, tudo fica em `src/modules/reports/`: regras puras em `rules.ts` (fonte da consulta, campos disponíveis, gráfico permitido, rascunho ↔ API, cor da aparência), chamadas em `service.ts`, peças em `components/` e duas telas em `views/`.

**Tech Stack:** Python 3.12 + pytest (core, api); Vue 3 + TypeScript + reka-ui + Tailwind + Vitest (web).

**Spec:** `docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md` (neste repositório). Referência visual: `design/prototype/src/App.tsx`, funções `ReportsScreen`, `ReportBuilderScreen`, `ReportChart`, `ReportTable`, `MetricStylePopover`, `CustomMetricDialog`, `SaveDialog`.

## Global Constraints

- Branches: core `feat/estilo-das-metricas` a partir de `origin/pre-develop`; api `feat/core-v0.33` a partir de `origin/pre-develop`; web segue em `feat/construtor-relatorios` (já tem o protótipo). PRs para `pre-develop`; nada para `main`.
- Core: clean code (`scripts/clean_code.py`), uma coisa por arquivo, mensagens em português; `uv run ruff format . && uv run ruff check . && uv run mypy && uv run pytest && uv run python scripts/clean_code.py`.
- API: `uv.lock` com `revision = 3`; testes com Postgres (`AVANT_TEST_*_URL`, contêiner descartável na porta 55432 como na avant-api#18).
- Web: todo texto em `src/lib/i18n.ts` (PT, EN, ES); nada de nome de uma letra; toda função/componente com comentário de 1–2 linhas; nunca rodar o Prettier; `pnpm lint && pnpm clean-code && pnpm typecheck && pnpm test && pnpm build`.
- Paleta (nomes salvos): `lime`, `cyan`, `magenta`, `violet`, `orange`, `yellow`, `red`. Modos: `green_red`, `red_green`.
- Rotas do painel: `/relatorios`, `/relatorios/novo`, `/relatorios/modelo/:key`, `/relatorios/:id`.
- Prévia: debounce de 600 ms; resposta velha descartada.
- `graphify update .` e commit do grafo em cada PR.

## Review Focus

1. Relatório salvo que deixou de ser válido (métrica personalizada editada, papel apagado): abrir no construtor não pode quebrar; a prévia mostra o erro da API e a pessoa consegue corrigir e salvar.
2. Respostas fora de ordem da prévia ao clicar rápido em vários campos: a tela mostra sempre o resultado da última escolha.
3. `rate_limited` (429) durante a montagem: aviso e nova tentativa depois de `retry_after`, sem loop.
4. Aparência com início maior ou igual ao fim: o menu mostra o erro e não aplica; o salvar nunca manda isso para a API.
5. Pessoa sem `reports.manage`/`metrics.manage` ou relatório de outra pessoa sem `editable`: os botões que a API recusaria não aparecem.

---

### Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0)

Repositório `avant-core`.

**Files:**
- Create: `src/avant_core/reports/enums/series_color.py` (`SeriesColor(StrEnum)`: os 7 nomes), `src/avant_core/reports/enums/scale_mode.py` (`ScaleMode(StrEnum)`: `GREEN_RED = "green_red"`, `RED_GREEN = "red_green"`); reexportar em `reports/enums/__init__.py`.
- Modify: `src/avant_core/reports/services/report_rules.py`, `pyproject.toml` (0.33.0), `README.md` (opções do gráfico), `graphify-out/`.
- Test: `tests/unit/test_report_rules.py` (criar se não existir; senão, o arquivo de testes de `check_chart`).

**Interfaces:**
- Produces: `check_chart(chart_type, options, definition) -> dict[str, Any]` aceita `options["metrics"]: {chave: {"color"?: str, "scale"?: {"mode": str, "from": number, "to": number}}}` e devolve a versão limpa (cores e modos como texto, números como `float`/`int` do JSON, métricas sem nada omitidas, `metrics` omitido se vazio).

- [ ] **Step 1: Testes que falham**

Gráficos de eixo (linha, barras, área) aceitam 1 dimensão, ou 2 dimensões com uma métrica só
(a segunda divide em séries); 3 ou mais só na tabela:

```python
@pytest.mark.parametrize("chart", [ChartType.LINE, ChartType.BAR, ChartType.AREA])
def test_axis_charts_take_two_dimensions_with_one_metric(chart):
    check_chart(chart, {}, definition(metrics=("revenue",), dimensions=("date", "site")))
    with pytest.raises(InvalidInput):
        check_chart(chart, {}, definition(metrics=("revenue", "ecpm"), dimensions=("date", "site")))
    with pytest.raises(InvalidInput):
        check_chart(chart, {}, definition(metrics=("revenue",), dimensions=("date", "site", "country")))
```

Cor e aparência:

```python
def test_metric_styles_are_cleaned():
    options = {"metrics": {"revenue": {"color": "lime"}, "ecpm": {"scale": {"mode": "red_green", "from": 2, "to": 4.5}}, "clicks": {}}}
    assert check_chart(ChartType.TABLE, options, definition(metrics=("revenue", "ecpm", "clicks"))) == {
        "metrics": {"revenue": {"color": "lime"}, "ecpm": {"scale": {"mode": "red_green", "from": 2, "to": 4.5}}}
    }

@pytest.mark.parametrize("styles", [
    {"page_views": {"color": "lime"}},                                   # métrica fora da consulta
    {"revenue": {"color": "#39FF14"}},                                   # cor fora da paleta
    {"revenue": {"scale": {"mode": "blue", "from": 1, "to": 2}}},        # modo desconhecido
    {"revenue": {"scale": {"mode": "green_red", "from": 5, "to": 5}}},   # início não menor que o fim
    {"revenue": {"scale": {"mode": "green_red", "from": "1", "to": 2}}}, # texto no lugar de número
    {"revenue": {"scale": {"mode": "green_red", "from": True, "to": 2}}},# booleano não é número
    {"revenue": {"size": 3}},                                            # chave desconhecida
    "revenue",                                                           # não é objeto
])
def test_metric_styles_refused(styles):
    with pytest.raises(InvalidInput):
        check_chart(ChartType.TABLE, {"metrics": styles}, definition(metrics=("revenue",)))

def test_stacked_and_styles_together():
    options = {"stacked": True, "metrics": {"revenue": {"color": "cyan"}}}
    assert check_chart(ChartType.BAR, options, definition(metrics=("revenue",), dimensions=("site",))) == options
```

`definition(...)` é um auxiliar do teste que monta uma `QueryDefinition` de GAM com período `last_30_days`. Também cobrir `NaN`/`inf` em `from` recusados.

- [ ] **Step 2: Rodar e ver falhar** — `uv run pytest tests/unit/test_report_rules.py -q` → FAIL ("opção de gráfico desconhecida: metrics").
- [ ] **Step 3: Implementar** em `report_rules.py`: `_check_styles(styles: object, metrics: tuple[str, ...]) -> dict[str, dict[str, Any]]` e `_check_scale(scale: object) -> dict[str, Any]`; `check_chart` aceita as chaves `{"stacked", "metrics"}`. Número = `int | float` que não é `bool` e é finito.
- [ ] **Step 4: Rodar a suíte inteira e as checagens** — todas verdes.
- [ ] **Step 5: Commit, versão 0.33.0, PR para `pre-develop`**, merge com a CI verde (autorizado). Levar à `develop` só com o ok do Pedro (gera a tag v0.33.0).

### Task 2: API — core v0.33.0

Repositório `avant-api`. Depende da tag v0.33.0 (Task 1 na `develop`).

**Files:** `pyproject.toml` (tag), `uv.lock` (`revision = 3`), `tests/test_saved_reports.py`, `README.md` (linha do `POST /reports`: `chart_options.metrics`), `graphify-out/`.

- [ ] **Step 1: Teste que falha** — `test_chart_options_keep_metric_styles`: cria relatório com `chart_options={"metrics": {"revenue": {"color": "magenta", "scale": {"mode": "red_green", "from": 1, "to": 10}}}}` → 201 e o `GET` devolve igual; com `"color": "pink"` → 422 `invalid_input`.
- [ ] **Step 2: Rodar com o core v0.32.0** → FAIL (422 no primeiro).
- [ ] **Step 3: Subir para v0.33.0** (`uv lock -P avant-core`, ajustar `revision`).
- [ ] **Step 4: Checagens completas** verdes.
- [ ] **Step 5: Commit, PR para `pre-develop`, merge.**

### Task 3: Web — tipos, serviço e regras do construtor

**Files:**
- Modify: `src/modules/reports/types.ts`, `src/modules/reports/service.ts`
- Create: `src/modules/reports/rules.ts`
- Test: `tests/report-rules.test.ts`

**Interfaces:**
- Produces (types, iguais aos DTOs da avant-api): `CustomCatalogMetric {query_key, name, description, format, decimals, sources}` e `MetricCatalog.custom_metrics`; `ChartType`, `Visibility`, `SeriesColor`, `ScaleMode`, `MetricStyle {color?: SeriesColor; scale?: {mode: ScaleMode; from: number; to: number}}`, `ChartOptions {stacked?: boolean; metrics?: Record<string, MetricStyle>}`, `SavedQuery` (= `ReportQuery` sem `currency`), `SavedReport` (campos do `SavedReportOut`, com `editable`), `SavedReportInput`, `ReportTemplate {key, name: Record<Lang,string>, query, chart_type, chart_options}`, `CustomMetric` (= `CustomMetricOut`), `CustomMetricInput`, `CustomMetricCheck {valid, code, error, variables, value}`.
- Produces (service): `reportService.list()`, `.get(id)`, `.create(input)`, `.update(id, input)`, `.remove(id)`, `.duplicate(id)`, `.templates()`, `.fromTemplate(key)`, `.run(id)`, `exportUrl(id, format: 'csv'|'xlsx', locale: Lang): string`; `customMetricService.list()`, `.create(input)`, `.update(id, input)`, `.remove(id)`, `.check(input & {metric_id?, sample?})`. Listas chegam em `{items}`.
- Produces (rules): ver Step 3.

- [ ] **Step 1: Testes que falham** (`tests/report-rules.test.ts`), com um catálogo pequeno no próprio teste (revenue `gam`; page_views `gam`+`page_views`; site `gam`+`page_views`; hour só `page_views`; ad_unit só `gam`; key_value só `gam_key_values`; personalizada `custom.rpm` com `sources: ['gam']`):

```ts
expect(pickSource(['revenue'], ['site'], [], catalog)).toBe('gam')
expect(pickSource(['page_views'], ['hour'], [], catalog)).toBe('page_views')
expect(pickSource(['revenue'], ['hour'], [], catalog)).toBeNull()
expect(fieldAvailable({ kind: 'dimension', key: 'hour' }, draft({ metrics: ['revenue'] }), catalog)).toBe(false)
expect(fieldAvailable({ kind: 'dimension', key: 'hour' }, draft({ metrics: ['page_views'] }), catalog)).toBe(true)
expect(withMetrics(draft({ metrics: ['page_views'], dimensions: ['hour'] }), ['page_views', 'revenue'], catalog).dimensions).toEqual([])
expect(chartAllowed('pie', 1, 1)).toBe(true); expect(chartAllowed('pie', 2, 1)).toBe(false)
expect(chartAllowed('line', 1, 2)).toBe(true); expect(chartAllowed('line', 2, 2)).toBe(false); expect(chartAllowed('bar', 1, 3)).toBe(false)
expect(axisSplit(['site', 'date'])).toEqual({ axis: 'date', split: 'site' })
expect(axisSplit(['site', 'country'])).toEqual({ axis: 'site', split: 'country' })
expect(axisSplit(['date'])).toEqual({ axis: 'date', split: null })
expect(chartAllowed('kpi', 1, 0)).toBe(true); expect(chartAllowed('funnel', 1, 0)).toBe(false)
expect(withDimensions(draft({ chart: 'line', dimensions: ['date'] }), [], catalog).chart).toBe('table')
expect(scaleHue({ mode: 'green_red', from: 0, to: 100 }, 0)).toBe(135)
expect(scaleHue({ mode: 'green_red', from: 0, to: 100 }, 100)).toBe(0)
expect(scaleHue({ mode: 'red_green', from: 0, to: 100 }, 50)).toBeCloseTo(67.5)
expect(scaleHue({ mode: 'red_green', from: 0, to: 100 }, 500)).toBe(135)
expect(scaleError({ mode: 'red_green', from: 5, to: 5 })).toBe('report.scaleOrder')
expect(toQuery(draft({ metrics: ['revenue'], dimensions: ['date'], chart: 'line' }), 'BRL', catalog)).toMatchObject({ source: 'gam', order: [{ field: 'date', descending: false }], currency: 'BRL' })
expect(toQuery(draft({ metrics: ['revenue'], dimensions: ['site'] }), 'USD', catalog).order).toEqual([{ field: 'revenue', descending: true }])
expect(toInput(draft({ styles: { revenue: {}, ecpm: { color: 'lime' } } })).chart_options).toEqual({ metrics: { ecpm: { color: 'lime' } } })
expect(wordAt('revenue / ad_re', 15)).toEqual({ word: 'ad_re', start: 10 })
expect(completeAt('revenue / ad_re', 15, 'ad_requests')).toEqual({ text: 'revenue / ad_requests ', cursor: 22 })
```

Mais: `fromReport(saved)` e `fromTemplate(template, lang)` voltam um `ReportDraft` com os filtros como `{field, values}` (operador `in`) e os estilos de `chart_options.metrics`; um relatório com `chart_options` vazio dá `styles: {}`.

- [ ] **Step 2: Rodar** `pnpm vitest run tests/report-rules.test.ts` → FAIL (módulo não existe).
- [ ] **Step 3: Implementar** em `rules.ts`:
  - `interface ReportDraft { id: string | null; name: string; description: string | null; metrics: string[]; dimensions: string[]; filters: { field: string; values: string[] }[]; period: RelativePeriod; compare: boolean; chart: ChartType; stacked: boolean; limit: number; visibility: Visibility; roleIds: string[]; styles: Record<string, MetricStyle>; editable: boolean; ownerUserId: string | null }`
  - `emptyDraft(): ReportDraft` (receita por data, linha, últimos 30 dias, limite 100, privado, editável)
  - `pickSource(metrics, dimensions, filterFields, catalog): MetricSource | null` — interseção; preferência `gam`, `page_views`, `gam_key_values`
  - `fieldAvailable(field: {kind: 'metric'|'dimension'; key: string}, draft, catalog): boolean`
  - `withMetrics(draft, metrics, catalog): ReportDraft` e `withDimensions(draft, dimensions, catalog): ReportDraft` — tiram dimensões/filtros/estilos que ficaram sem fonte ou sem métrica e trocam o gráfico por `table` se não servir
  - `chartAllowed(chart, metricCount, dimensionCount): boolean` (regras do core, com 2 dimensões só com uma métrica nos gráficos de eixo)
  - `axisSplit(dimensions): { axis: string | null; split: string | null }` — com duas, o eixo é a de tempo (`date`, `week`, `month`, `hour`) se houver, senão a primeira; a outra divide em séries
  - `scaleHue(scale, value): number`, `scaleError(scale): Key | null`
  - `toQuery(draft, currency, catalog): ReportQuery` (ordem: data/semana/mês/hora no eixo de linha/área → crescente por ela; senão a primeira métrica decrescente)
  - `toInput(draft): SavedReportInput`, `fromReport(report): ReportDraft`, `fromTemplate(template, lang): ReportDraft`
  - `wordAt(text, cursor)`, `completeAt(text, cursor, key)`
- [ ] **Step 4: Rodar** → PASS; `pnpm typecheck` verde.
- [ ] **Step 5: Commit.**

### Task 4: Web — cores das séries e gráficos do construtor

**Files:**
- Modify: `src/styles.css` (tokens `--series-lime` … `--series-red`, claro e escuro), `tailwind.config.*` se preciso, `src/components/charts/LineChart.vue` (`LineSeries.color?: string`, sem tracejado quando há cor), `src/components/charts/BarChart.vue` (prop `color?: string`)
- Create: `src/components/charts/PieChart.vue` (rosca, legenda com %, tabela para leitor de tela), `src/components/charts/FunnelChart.vue` (barras centradas com a % de passagem), `src/modules/reports/components/ReportChart.vue`, `src/modules/reports/components/ReportTable.vue`
- Modify: `src/modules/reports/rules.ts` (`seriesColor(color?: SeriesColor): string | undefined` → `var(--series-<nome>)`), `tests/report-rules.test.ts`

**Interfaces:**
- Produces: `<ReportChart :draft :result :catalog :currency />` e `<ReportTable :draft :result :catalog :currency />`; o KPI usa `scaleHue` para a cor do número; a tabela pinta o fundo com `hsl(<hue> 80% 45% / 0.18)`.
- A tabela tem uma coluna por dimensão (uma linha por combinação, como a API devolve). Com duas dimensões, linha/área/barras usam `axisSplit`: uma série por valor da dimensão de divisão, no máximo 10 (as maiores pelo total; o resto some com o aviso "mostrando 10 de N"), cores na ordem `cyan, magenta, lime, orange, violet, yellow, red`; barras agrupadas por valor do eixo. Teste em `tests/report-rules.test.ts`: `splitSeries(result, axis, split, metric)` devolve os rótulos do eixo em ordem e as séries ordenadas pelo total, cortadas em 10.

- [ ] **Step 1: Teste** — `seriesColor('lime')` → `'var(--series-lime)'`, `seriesColor(undefined)` → `undefined`. Rodar → FAIL.
- [ ] **Step 2: Implementar** as peças; cada gráfico tem descrição para leitor de tela (padrão dos existentes). Nomes de site/network pelo `result.labels`; data por `shortDay`.
- [ ] **Step 3:** `pnpm test && pnpm typecheck` verdes. **Commit.**

### Task 5: Web — lista de relatórios, rota e menu

**Files:**
- Create: `src/modules/reports/views/ReportsView.vue`
- Modify: `src/router.ts` (as quatro rotas, `meta.permission: 'reports.view'`), `src/components/SidebarNav.vue` (item `/relatorios`, ícone `FileChartColumn` ou `FileText`, depois de Visitas; acende também em `/relatorios/...`), `src/lib/i18n.ts`, `tests/sidebar.test.ts`

- [ ] **Step 1: Teste** em `tests/sidebar.test.ts`: o grupo de relatórios lista `/relatorios` para quem tem `reports.view`, e o item fica ativo em `/relatorios/123`. Rodar → FAIL.
- [ ] **Step 2: Implementar** a lista como no protótipo: abas (Todos, Meus = `owner_user_id === session.me.user.id`, Compartilhados comigo, Modelos), busca, tabela (nome, visualização, dono — nome pelo `GET /members` se a pessoa tiver `team.view`; senão "Você"/"Outra pessoa" —, quem vê, alterado), menu (Abrir, Duplicar se `reports.manage`, Exportar CSV/XLSX como link, Apagar se `editable` com `ConfirmDialog`), modelos em cartões com "Usar modelo" (`reports.manage`). Estado vazio e erro com `TableState`/`LoadError`.
- [ ] **Step 3:** `pnpm test && pnpm typecheck` verdes. **Commit.**

### Task 6: Web — construtor

**Files:**
- Create: `src/modules/reports/views/ReportBuilderView.vue`, `components/FieldsPanel.vue`, `components/ConfigPanel.vue`, `components/MetricStylePopover.vue` (reka-ui `PopoverRoot`), `components/SaveReportDialog.vue`
- Modify: `src/lib/i18n.ts`

**Interfaces:**
- Consumes: Task 3 (`rules.ts`, `service.ts`), Task 4 (`ReportChart`, `ReportTable`).

- [ ] **Step 1: Teste** em `tests/report-rules.test.ts` para o que a tela decide fora dos componentes: `builderState(draft, saved)` → `'new' | 'dirty' | 'saved'` (compara `toInput`), e `canExport(draft, state)` só em `'saved'`. Rodar → FAIL; implementar em `rules.ts`; PASS.
- [ ] **Step 2: Implementar a tela** como no protótipo:
  - carrega catálogo, papéis (`GET /roles` se `roles.view`; sem permissão a opção "Papéis escolhidos" some) e o rascunho (novo, `GET /reports/:id` ou `GET /reports/templates`)
  - prévia com `useDebounceFn` (600 ms) e contador de pedidos (só a última resposta vale); erro com `errorText`; `rate_limited` mostra aviso e agenda nova tentativa em `retry_after` segundos (uma de cada vez)
  - Salvar: modal (nome 1–120, descrição até 500, quem vê; papéis obrigatórios em `roles`) → `create`/`update`; depois de criar, `router.replace('/relatorios/<id>')`
  - Salvar como cópia: sem id → cria privado com " (cópia)"; com id e sem alterações → `duplicate`
  - Não editável: campos e configuração desativados, aviso no topo, só "Salvar como cópia" e Exportar
  - sair com alterações não salvas: `onBeforeRouteLeave` com `ConfirmDialog`
- [ ] **Step 3:** `pnpm lint && pnpm clean-code && pnpm typecheck && pnpm test` verdes. **Commit.**

### Task 7: Web — modal de métrica personalizada e "Minhas métricas"

**Files:**
- Create: `src/modules/reports/components/CustomMetricDialog.vue`
- Modify: `components/FieldsPanel.vue` (botão Nova com `metrics.manage`; menu por métrica: Editar, Apagar), `src/lib/i18n.ts` (inclui `errorText` de `invalid_formula` e `custom_metric_in_use` se faltarem)

- [ ] **Step 1: Teste** — `formulaVariables(check)` não é preciso: a lista vem da API (`variables`). O teste fica no que a tela decide: `sampleFor(variables, previous)` mantém os valores já digitados e tira os que saíram da fórmula, e `customKey(name)` igual ao `slugify` do core para a dica ("RPM por requisição" → `rpm_por_requisicao`, "Ação 2!" → `acao_2`). Rodar → FAIL; implementar em `rules.ts`; PASS.
- [ ] **Step 2: Implementar a modal** como no protótipo (formulário à esquerda, prévia à direita): conferência por `POST /custom-metrics/validate` com debounce de 400 ms e `sample` só com números válidos; autocompletar por `wordAt`/`completeAt` sobre o catálogo e as personalizadas; criar → entra na lista e no relatório; editar manda `metric_id`; apagar com `ConfirmDialog`, e o 409 mostra a mensagem da API.
- [ ] **Step 3:** checagens verdes. **Commit.**

### Task 8: Web — fechamento

- [ ] Conferir na tela (`pnpm build && pnpm preview`): lista, construtor (cada gráfico, cor, aparência, filtros, só leitura), modal de métrica e salvar, em 1440 px e 390 px, claro e escuro. Sem o navegador do Claude, usar Playwright se disponível; senão, registrar que a conferência visual fica com o Pedro.
- [ ] `docs/contexto.md` igual ao do core; `graphify update .`.
- [ ] `pnpm lint && pnpm clean-code && pnpm typecheck && pnpm test && pnpm build` verdes; PR para `pre-develop` (Closes #13, #12, fechadas à mão quando chegarem à `develop`).
