# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 200 files · ~110,451 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 1925 nodes · 4656 edges · 110 communities (102 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9bfd397b`
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
- reports/rules.ts
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
- report-builder.test.ts
- ClientsView.vue
- RoleDialog.vue
- SiteDetailView.vue
- RolesView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- NewGroupDialog.vue
- Review Focus
- PageViewsView.vue
- t
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
- LoadError.vue
- avant-web
- ProfileImageCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- tailwindcss
- vitest
- devDependencies
- @vitejs/plugin-vue
- MetricStylePopover.vue
- ClientTeamsView.vue
- FiscalDataCard.vue
- reports/types.ts
- MfaCard.vue
- contracts/rules.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- ResetView.vue
- GroupedBarChart.vue
- ConfigPanel.vue
- t
- CurrencyCard.vue
- groups/rules.ts
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- RecoveryCodes.vue
- PasswordCard.vue
- costs/rules.ts
- costs/service.ts
- networks/service.ts
- FieldsPanel.vue
- TeamTabs.vue
- vue
- vue-sonner
- events.ts
- vue-router
- BarChart.vue
- Pagination.vue
- Input.vue
- router.ts
- sites/service.ts
- CompanyIcon.vue
- Avatar.vue
- auth/service.ts
- FakeSource
- SeatBar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 193 edges
2. `errorText()` - 139 edges
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

## Communities (110 total, 8 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.24
Nodes (9): api, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url(), CompanyRef (+1 more)

### Community 1 - "session.ts"
Cohesion: 0.22
Nodes (11): pinia, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId (+3 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), audit, auditBusy, candidates, canManage, canOwner, changed, changeOwner() (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (48): builderState, toInput(), withDimensions(), exportUrl(), apiMessage(), askRemoveMetric(), busy, canManage (+40 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (30): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+22 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "reports/rules.ts"
Cohesion: 0.13
Nodes (27): filterable, AXIS_CHARTS, canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart(), fromQuery() (+19 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (34): busy, canEditCompany, canInvite, canManage, canRoles, company, dupe, email (+26 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.08
Nodes (29): networkName(), loadExtras(), adding, addSite(), archived, assignedOnly, canAssign, canConnect (+21 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (28): countryName(), td, th, countryBars, barFormat(), byCountry, bySite, catalog (+20 more)

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
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (23): pick(), staffService, busy, canEditGroone, email, emailOk, invite(), invites (+15 more)

### Community 20 - "GoalsView.vue"
Cohesion: 0.05
Nodes (56): mark, money(), percent, props, share, tone, busy, close() (+48 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.14
Nodes (12): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+4 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.15
Nodes (14): account(), clientId, emit, Group, GROUPS, logout(), onInternal, openLink() (+6 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 25 - "sites/rules.ts"
Cohesion: 0.36
Nodes (5): approval(), Tone, tree(), AdUnit, rows

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): busy, byMonth(), canManage, check, checkFormula, confirmRemove(), costs, currencies (+15 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "report-builder.test.ts"
Cohesion: 0.10
Nodes (17): customMetricService, reportService, CustomMetric, CustomMetricCheck, CustomMetricCheckInput, CustomMetricInput, MetricCatalog, ReportResult (+9 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.07
Nodes (32): emptyProfile(), STATUS_TONE, adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+24 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.13
Nodes (14): permissionGroupLabel(), busy, category, chipClass(), chosen, emit, groups, name (+6 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 32 - "RolesView.vue"
Cohesion: 0.11
Nodes (21): Query, Localized, Page, SiteScope, busy, canManage, deleteOpen, deleting (+13 more)

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
Cohesion: 0.13
Nodes (14): busy, create(), description, duplicate, emit, name, open, people (+6 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.11
Nodes (23): change(), dailySeries(), daysOf(), peakHour(), shortDay(), byCountry, byHour, bySite (+15 more)

### Community 40 - "t"
Cohesion: 0.24
Nodes (10): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+2 more)

### Community 41 - "vue-router"
Cohesion: 0.16
Nodes (12): auditText(), safeNext(), busy, email, error, next, password, route (+4 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "cn"
Cohesion: 0.20
Nodes (10): Item, cn(), kindClass(), tabClass(), tabClass(), valueClass(), dot(), itemClass() (+2 more)

### Community 45 - "lib/types.ts"
Cohesion: 0.21
Nodes (12): busy, confirm, load(), session, status, unlink(), ApiKey, ApiKeyCreated (+4 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): validCode(), networkService, busy, Check, checks, code, copied, copy() (+14 more)

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
Cohesion: 0.16
Nodes (17): Task 6: Web — construtor, pick(), errorText(), choose(), load(), revoke(), choose(), load() (+9 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.13
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.08
Nodes (25): formatAgo(), companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load() (+17 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.16
Nodes (14): peopleService, Person, Action, busy, confirm(), enable(), fail(), loadError (+6 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.15
Nodes (13): choose(), langs, session, reconnectEvents(), auditActions, chooseLang(), dict, errors (+5 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "LoadError.vue"
Cohesion: 0.19
Nodes (11): button, classes, Props, end(), ending, endingOthers, endOthers(), fail() (+3 more)

### Community 61 - "ProfileImageCard.vue"
Cohesion: 0.24
Nodes (9): busy, drop(), imageUrl, input, name, pick(), problem, run() (+1 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.11
Nodes (18): busy, canManage, counts, load(), loadError, myId, ownerName(), owners (+10 more)

### Community 66 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 67 - "vitest"
Cohesion: 0.22
Nodes (5): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, Blank

### Community 68 - "devDependencies"
Cohesion: 0.11
Nodes (24): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+16 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.15
Nodes (17): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+9 more)

### Community 71 - "ClientTeamsView.vue"
Cohesion: 0.16
Nodes (18): formatDate(), UserRef, CompanyStatus, clientService, AuditEntry, Client, ClientDetail, ClientMember (+10 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.16
Nodes (15): locale, busy, complete, documentLabel, form, load(), loaded, options (+7 more)

### Community 73 - "reports/types.ts"
Cohesion: 0.10
Nodes (26): compare, options, period, selected, Key, hourLabel(), hourlyItems(), PERIOD_PRESETS (+18 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "contracts/rules.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.12
Nodes (12): canManage, created(), creating, groups, load(), loaded, loadError, loose (+4 more)

### Community 77 - "errorText"
Cohesion: 0.06
Nodes (27): contractService, busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating (+19 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (35): Task 4: Web — cores das séries e gráficos do construtor, formatMetric(), toNumber(), amountText(), yearTotal(), money(), money(), preview (+27 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.11
Nodes (19): busy, canManage, created(), creating, keys, loadError, permsText(), revokeOpen (+11 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 82 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, FilterOption, LIMITS, newField, periods (+5 more)

### Community 83 - "t"
Cohesion: 0.27
Nodes (10): open, t(), cancel(), errorToast(), loadMembers(), patchMember(), removeMember(), resend() (+2 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "groups/rules.ts"
Cohesion: 0.20
Nodes (10): freeMembers(), groupOf(), nameTaken(), Group, GroupInput, GroupMember, GroupStatus, free (+2 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.12
Nodes (17): Task 3: Web — tipos, serviço e regras do construtor, choices, description, emit, invalid, name, open, props (+9 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.13
Nodes (14): assign(), canManage, canTeam, load(), loaded, loadError, members, page (+6 more)

### Community 89 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.15
Nodes (11): ApiError, busy, current, emit, mismatch, password, password2, ready (+3 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 92 - "costs/service.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 95 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 96 - "vue"
Cohesion: 0.17
Nodes (6): vue, first, FunnelStep, props, props, up

### Community 97 - "vue-sonner"
Cohesion: 0.18
Nodes (9): vue-sonner, toasterTheme, ACCENTS, accent, session, route, router, session (+1 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (10): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+2 more)

### Community 99 - "vue-router"
Cohesion: 0.18
Nodes (9): vue-router, RouteMeta, vue-router, busy, code, error, route, router (+1 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "Input.vue"
Cohesion: 0.20
Nodes (7): model, authService, busy, email, error, sent, submit()

### Community 104 - "sites/service.ts"
Cohesion: 0.52
Nodes (5): siteService, Site, SiteDetail, SiteListItem, SiteMember

### Community 105 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 106 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 107 - "auth/service.ts"
Cohesion: 0.80
Nodes (3): Me, InvitationPreview, LoginResult

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `vue` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `report-builder.test.ts`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `vitest`, `devDependencies`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `reports/types.ts`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `GroupedBarChart.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `RecoveryCodes.vue`, `PasswordCard.vue`, `FieldsPanel.vue`, `TeamTabs.vue`, `vue-sonner`, `events.ts`, `vue-router`, `BarChart.vue`, `Pagination.vue`, `Input.vue`, `router.ts`, `CompanyIcon.vue`, `Avatar.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.048265460030165915 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `reports/rules.ts`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `sites/rules.ts`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `reports/types.ts`, `MfaCard.vue`, `contracts/rules.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `RecoveryCodes.vue`, `PasswordCard.vue`, `FieldsPanel.vue`, `TeamTabs.vue`, `vue`, `vue-sonner`, `vue-router`, `Pagination.vue`, `Input.vue`, `router.ts`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05803921568627451 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `ResetView.vue`, `t`, `CurrencyCard.vue`, `RolesView.vue`, `PasswordCard.vue`, `vue-sonner`, `vue-router`, `Input.vue`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06543385490753911 - nodes in this community are weakly interconnected._