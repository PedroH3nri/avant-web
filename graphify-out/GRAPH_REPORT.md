# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 201 files · ~111,007 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 1946 nodes · 4708 edges · 104 communities (96 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1fcf4452`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- api.ts
- session.ts
- ClientView.vue
- ReportBuilderView.vue
- MemberView.vue
- Avant: models do MVP
- CustomMetricDialog.vue
- GroupView.vue
- HomeView.vue
- TeamView.vue
- SitesView.vue
- LineChart.vue
- PerformanceView.vue
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- dependencies
- StaffView.vue
- GoalsView.vue
- steps
- ClientsResultsView.vue
- SidebarNav.vue
- ApiKeyDialog.vue
- sites/rules.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- reports/rules.ts
- ClientsView.vue
- RoleDialog.vue
- SiteDetailView.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- NewGroupDialog.vue
- Review Focus
- PageViewsView.vue
- clients/rules.ts
- vue-router
- compilerOptions
- InviteView.vue
- cn
- lib/types.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- reka-ui
- errorText
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- contracts/types.ts
- avant-web
- useSession
- tsconfig.json
- session-start.sh
- ReportsView.vue
- GAM
- vitest
- devDependencies
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- Checkbox.vue
- MfaCard.vue
- contracts/rules.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- ResetView.vue
- GroupedBarChart.vue
- ConfigPanel.vue
- CurrencyCard.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- SessionsCard.vue
- PasswordCard.vue
- costs/rules.ts
- networks/service.ts
- FieldsPanel.vue
- FunnelChart.vue
- vue-sonner
- events.ts
- vue-router
- BarChart.vue
- Pagination.vue
- Input.vue
- router.ts
- sites/service.ts
- ClientTeamsView.vue
- FakeSource
- SeatBar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 193 edges
2. `errorText()` - 140 edges
3. `vue` - 85 edges
4. `ApiError` - 58 edges
5. `useSession` - 52 edges
6. `lucide-vue-next` - 43 edges
7. `cn()` - 43 edges
8. `vue-sonner` - 42 edges
9. `toNumber()` - 32 edges
10. `vue-router` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (104 total, 8 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.21
Nodes (9): api, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url(), groupService (+1 more)

### Community 1 - "session.ts"
Cohesion: 0.14
Nodes (17): pinia, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId (+9 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (49): audit, auditBusy, candidates, canManage, canOwner, changed, changeOwner(), client (+41 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (62): builderState, canExport(), emptyDraft(), fittingChart(), fromQuery(), fromReport(), fromTemplate(), savedQuery() (+54 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.06
Nodes (35): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+27 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (32): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+24 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.06
Nodes (45): box, failed, initial, props, busy, drop(), input, pick() (+37 more)

### Community 8 - "HomeView.vue"
Cohesion: 0.15
Nodes (11): dot, company, error, firstName, greeting, load(), lost, networks (+3 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (47): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, dupe (+39 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.08
Nodes (29): networkName(), loadExtras(), adding, addSite(), archived, assignedOnly, canAssign, canConnect (+21 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (25): MetricValues, barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric (+17 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.18
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.15
Nodes (12): API first e chaves de API, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa, Empresa e equipe (+4 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (22): pick(), busy, canEditGroone, email, emailOk, invite(), invites, load() (+14 more)

### Community 20 - "GoalsView.vue"
Cohesion: 0.06
Nodes (54): locale, mark, percent, props, tone, busy, close(), companyGoal (+46 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.15
Nodes (14): CostKind, clients, currency, load(), loadError, month, rows, session (+6 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.16
Nodes (13): account(), clientId, emit, Group, GROUPS, onInternal, openLink(), ready (+5 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "sites/rules.ts"
Cohesion: 0.36
Nodes (5): approval(), Tone, tree(), AdUnit, rows

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (27): costService, Cost, CostInput, FormulaCheck, busy, byMonth(), canManage, check (+19 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.11
Nodes (36): Task 3: Web — tipos, serviço e regras do construtor, Lang, SaveForm, AXIS_CHARTS, MAX_SERIES, ReportDraft, SOURCE_PREFERENCE, STACKABLE (+28 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.07
Nodes (30): profileOk(), clientService, adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+22 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.13
Nodes (20): Localized, SiteScope, busy, category, chosen, emit, groups, name (+12 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (12): busy, canManage, deleteOpen, deleting, dialog, editing, emit, props (+4 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.12
Nodes (21): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), currency (+13 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "NewGroupDialog.vue"
Cohesion: 0.10
Nodes (23): Page, busy, create(), description, duplicate, emit, name, open (+15 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.07
Nodes (52): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+44 more)

### Community 40 - "clients/rules.ts"
Cohesion: 0.28
Nodes (8): emptyProfile(), profileBody(), profileInput(), STAFF_STATUSES, STATUS_TONE, closeForm(), create(), openEdit()

### Community 41 - "vue-router"
Cohesion: 0.22
Nodes (8): busy, email, error, password, route, router, session, submit()

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.10
Nodes (18): busy, error, formOk, gone, invite, loadError, loginLink, mismatch (+10 more)

### Community 44 - "cn"
Cohesion: 0.12
Nodes (16): Item, cn(), kindClass(), tabClass(), tabClass(), dot(), itemClass(), valueClass() (+8 more)

### Community 45 - "lib/types.ts"
Cohesion: 0.20
Nodes (14): UserRef, busy, confirm, load(), session, status, unlink(), accountService (+6 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.11
Nodes (20): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+12 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "reka-ui"
Cohesion: 0.20
Nodes (8): lucide-vue-next, reka-ui, route, router, session, open, model, open

### Community 51 - "errorText"
Cohesion: 0.29
Nodes (10): Task 6: Web — construtor, pick(), errorText(), accept(), load(), confirmEnd(), confirmRemove(), create() (+2 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.13
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.15
Nodes (15): peopleService, Person, Action, busy, confirm(), enable(), fail(), loadError (+7 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.14
Nodes (12): vue, props, up, auditActions, auditText(), dict, errors, fallbackError (+4 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "contracts/types.ts"
Cohesion: 0.25
Nodes (7): contractService, Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary

### Community 61 - "useSession"
Cohesion: 0.32
Nodes (7): choose(), langs, session, logout(), chooseLang(), lang, useSession

### Community 65 - "ReportsView.vue"
Cohesion: 0.11
Nodes (18): busy, canManage, counts, load(), loadError, myId, ownerName(), owners (+10 more)

### Community 66 - "GAM"
Cohesion: 0.40
Nodes (5): Atribuição de sites, GAM, Networks, Sites e ad units, network()

### Community 67 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (28): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+20 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.25
Nodes (13): Items, CompanyStatus, FiscalData, AuditEntry, Client, ClientDetail, ClientMember, ClientProfile (+5 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "contracts/rules.ts"
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 76 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 77 - "errorText"
Cohesion: 0.06
Nodes (28): busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, contracts, creating (+20 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.13
Nodes (23): Task 4: Web — cores das séries e gráficos do construtor, description, empty, first, firstFormat, formatter(), funnel, items (+15 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.10
Nodes (20): button, classes, Props, busy, canManage, created(), creating, keys (+12 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 82 - "ConfigPanel.vue"
Cohesion: 0.09
Nodes (24): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+16 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (20): assign(), canManage, canTeam, load(), loaded, loadError, loadRoles(), members (+12 more)

### Community 89 - "SessionsCard.vue"
Cohesion: 0.10
Nodes (25): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+17 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.09
Nodes (16): ApiError, busy, current, emit, mismatch, password, password2, ready (+8 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.33
Nodes (6): statusTone, networkService, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 96 - "FunnelChart.vue"
Cohesion: 0.33
Nodes (3): first, FunnelStep, props

### Community 97 - "vue-sonner"
Cohesion: 0.10
Nodes (19): vue-sonner, toasterTheme, ACCENTS, accent, choose(), session, busy, drop() (+11 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "vue-router"
Cohesion: 0.22
Nodes (9): safeNext(), next, busy, code, error, route, router, session (+1 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "Input.vue"
Cohesion: 0.22
Nodes (6): model, busy, email, error, sent, submit()

### Community 103 - "router.ts"
Cohesion: 0.22
Nodes (5): vue-router, RouteMeta, vue-router, router, routes

### Community 104 - "sites/service.ts"
Cohesion: 0.43
Nodes (6): Query, siteService, Site, SiteDetail, SiteListItem, SiteMember

### Community 106 - "ClientTeamsView.vue"
Cohesion: 0.13
Nodes (14): broken, hue, initials, props, formatDate(), clientId, clientOptions, clients (+6 more)

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `i18n.ts` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `vue-router`, `InviteView.vue`, `cn`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `ReportsView.vue`, `devDependencies`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `GroupedBarChart.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `SessionsCard.vue`, `PasswordCard.vue`, `FieldsPanel.vue`, `FunnelChart.vue`, `vue-sonner`, `events.ts`, `vue-router`, `BarChart.vue`, `Pagination.vue`, `Input.vue`, `router.ts`, `ClientTeamsView.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `session.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.13978494623655913 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `GroupView.vue` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `sites/rules.ts`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `clients/rules.ts`, `vue-router`, `InviteView.vue`, `cn`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `useSession`, `ReportsView.vue`, `AuthFrame.vue`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `contracts/rules.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `SessionsCard.vue`, `PasswordCard.vue`, `costs/rules.ts`, `FieldsPanel.vue`, `vue-sonner`, `vue-router`, `Pagination.vue`, `Input.vue`, `router.ts`, `ClientTeamsView.vue`?**
  _High betweenness centrality (0.127) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04941176470588235 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `vue-router`, `InviteView.vue`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `useSession`, `ReportsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `ResetView.vue`, `CurrencyCard.vue`, `RolesView.vue`, `SessionsCard.vue`, `PasswordCard.vue`, `vue-sonner`, `vue-router`, `Input.vue`, `ClientTeamsView.vue`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.052214452214452214 - nodes in this community are weakly interconnected._