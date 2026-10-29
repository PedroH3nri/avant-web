# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 201 files · ~111,467 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 1962 nodes · 4737 edges · 106 communities (101 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7744184b`
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
- reports/rules.ts
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
- t
- avant-web
- useSession
- tsconfig.json
- session-start.sh
- ReportsView.vue
- metrics.ts
- vitest
- devDependencies
- Button.vue
- MetricStylePopover.vue
- ClientTeamsView.vue
- FiscalDataCard.vue
- toNumber
- MfaCard.vue
- contracts/rules.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- ResetView.vue
- GroupedBarChart.vue
- ConfigPanel.vue
- costs/service.ts
- CurrencyCard.vue
- package.json
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- SessionsCard.vue
- PasswordCard.vue
- costs/rules.ts
- table.ts
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- CompanyIcon.vue
- vue
- events.ts
- ApiError
- BarChart.vue
- Pagination.vue
- Input.vue
- router.ts
- networkName
- FakeSource

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
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (106 total, 5 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.15
Nodes (17): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+9 more)

### Community 1 - "session.ts"
Cohesion: 0.38
Nodes (6): Me, Theme, accountService, authService, InvitationPreview, LoginResult

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), audit, auditBusy, candidates, canManage, canOwner, changed, changeOwner() (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (44): exportUrl(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog, change() (+36 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (29): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+21 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.09
Nodes (27): adding, addMember(), busy, canManage, deleteGroup(), deleting, errorToast(), freeOptions (+19 more)

### Community 8 - "HomeView.vue"
Cohesion: 0.14
Nodes (12): props, seats, company, error, firstName, greeting, load(), lost (+4 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (47): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, dupe (+39 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (34): adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect, canManage (+26 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.11
Nodes (16): areaPaths, box, chartWidth, hovered, labelStep, linePath(), padding, plotHeight (+8 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.09
Nodes (24): barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric, compare (+16 more)

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
Cohesion: 0.11
Nodes (17): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+9 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, qrcode@1.5.4, reka-ui@^2.11.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (23): pick(), staffService, busy, canEditGroone, email, emailOk, invite(), invites (+15 more)

### Community 20 - "GoalsView.vue"
Cohesion: 0.06
Nodes (53): mark, percent, props, tone, busy, close(), companyGoal, creating (+45 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.14
Nodes (13): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+5 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.15
Nodes (14): account(), clientId, emit, Group, GROUPS, Item, onInternal, openLink() (+6 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "sites/rules.ts"
Cohesion: 0.29
Nodes (8): approval(), Tone, tree(), AdUnit, Site, SiteDetail, SiteListItem, rows

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): busy, byMonth(), canManage, check, checkFormula, confirmRemove(), costs, currencies (+15 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.09
Nodes (32): Task 3: Web — tipos, serviço e regras do construtor, Lang, ReportDraft, customMetricService, reportService, ChartOptions, ChartType, CustomCatalogMetric (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.07
Nodes (30): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+22 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.12
Nodes (14): model, busy, category, chipClass(), chosen, emit, groups, name (+6 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.14
Nodes (13): open, busy, canManage, deleteOpen, deleting, dialog, editing, emit (+5 more)

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
Nodes (23): busy, create(), description, duplicate, emit, name, open, people (+15 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.12
Nodes (18): change(), peakHour(), byCountry, byHour, bySite, compare, daily, empty (+10 more)

### Community 40 - "clients/rules.ts"
Cohesion: 0.33
Nodes (6): profileBody(), profileOk(), STAFF_STATUSES, STATUS_TONE, formOk, saveProfile()

### Community 41 - "reports/rules.ts"
Cohesion: 0.11
Nodes (35): AXIS_CHARTS, axisSplit(), builderState, canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart() (+27 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "cn"
Cohesion: 0.12
Nodes (15): props, up, cn(), kindClass(), tabClass(), tabClass(), dot(), valueClass() (+7 more)

### Community 45 - "lib/types.ts"
Cohesion: 0.21
Nodes (12): busy, confirm, load(), session, status, unlink(), ApiKey, ApiKeyCreated (+4 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (27): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+19 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "reka-ui"
Cohesion: 0.20
Nodes (8): lucide-vue-next, reka-ui, route, router, session, open, model, open

### Community 51 - "errorText"
Cohesion: 0.20
Nodes (14): Task 6: Web — construtor, pick(), errorText(), load(), load(), start(), choose(), confirmEnd() (+6 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.14
Nodes (12): model, ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+4 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.17
Nodes (13): peopleService, Action, busy, confirm(), enable(), fail(), loadError, open (+5 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.15
Nodes (10): auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo(), index (+2 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.12
Nodes (25): busy, drop(), input, pick(), problem, props, run(), t() (+17 more)

### Community 61 - "useSession"
Cohesion: 0.32
Nodes (7): vue-sonner, choose(), langs, session, logout(), chooseLang(), useSession

### Community 65 - "ReportsView.vue"
Cohesion: 0.11
Nodes (18): busy, canManage, counts, load(), loadError, myId, ownerName(), owners (+10 more)

### Community 66 - "metrics.ts"
Cohesion: 0.17
Nodes (17): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), REPORT_CURRENCY, shortDay(), dimensionText() (+9 more)

### Community 67 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 68 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3, vite@^8.3.5 (+7 more)

### Community 69 - "Button.vue"
Cohesion: 0.17
Nodes (12): button, classes, Props, end(), ending, endingOthers, endOthers(), fail() (+4 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (18): formatDate(), CompanyStatus, FiscalData, clientService, AuditEntry, Client, ClientDetail, ClientMember (+10 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "toNumber"
Cohesion: 0.19
Nodes (13): formatMetric(), toNumber(), amountText(), money(), share, yearTotal(), money(), percent() (+5 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "contracts/rules.ts"
Cohesion: 0.19
Nodes (13): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+5 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.08
Nodes (20): broken, hue, initials, props, allGroups, canManage, created(), creating (+12 more)

### Community 77 - "errorText"
Cohesion: 0.07
Nodes (24): contractService, busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating (+16 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (25): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, description, empty, first (+17 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (18): busy, canManage, created(), creating, keys, load(), loadError, page (+10 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 82 - "ConfigPanel.vue"
Cohesion: 0.10
Nodes (21): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+13 more)

### Community 83 - "costs/service.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "package.json"
Cohesion: 0.20
Nodes (9): postcss@^8.5.31, vue-tsc@^3.3.13, name, packageManager, private, type, version, postcss (+1 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.09
Nodes (31): Localized, SiteScope, SiteMember, Invitation, Member, MemberDetail, MembershipStatus, Permission (+23 more)

### Community 89 - "SessionsCard.vue"
Cohesion: 0.16
Nodes (15): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+7 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 92 - "table.ts"
Cohesion: 0.38
Nodes (4): td, th, dimensions, props

### Community 93 - "networks/service.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 96 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 97 - "vue"
Cohesion: 0.11
Nodes (19): vue, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+11 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "ApiError"
Cohesion: 0.11
Nodes (18): ApiError, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "Input.vue"
Cohesion: 0.20
Nodes (5): busy, email, error, sent, submit()

### Community 103 - "router.ts"
Cohesion: 0.14
Nodes (8): pinia@^4.1.0, pinia, vue-router, RouteMeta, vue-router, router, routes, Blank

### Community 104 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `vue` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `reports/rules.ts`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `InviteView.vue`, `cn`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `Button.vue`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `GroupedBarChart.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `package.json`, `SaveReportDialog.vue`, `RolesView.vue`, `SessionsCard.vue`, `PasswordCard.vue`, `table.ts`, `FieldsPanel.vue`, `CompanyIcon.vue`, `events.ts`, `ApiError`, `BarChart.vue`, `Pagination.vue`, `Input.vue`, `router.ts`?**
  _High betweenness centrality (0.155) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.048265460030165915 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `sites/rules.ts`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `clients/rules.ts`, `reports/rules.ts`, `InviteView.vue`, `cn`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `useSession`, `ReportsView.vue`, `metrics.ts`, `Button.vue`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `SessionsCard.vue`, `PasswordCard.vue`, `table.ts`, `FieldsPanel.vue`, `vue`, `ApiError`, `Pagination.vue`, `Input.vue`, `networkName`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.058279370952821465 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `InviteView.vue`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `useSession`, `ReportsView.vue`, `Button.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `ResetView.vue`, `CurrencyCard.vue`, `RolesView.vue`, `PasswordCard.vue`, `vue`, `ApiError`, `Input.vue`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06543385490753911 - nodes in this community are weakly interconnected._