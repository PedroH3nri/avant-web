# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 201 files · ~112,835 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2017 nodes · 4863 edges · 112 communities (104 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `50e21769`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- groups/rules.ts
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
- GoalTemplatesDialog.vue
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
- cn
- reports/rules.ts
- compilerOptions
- InviteView.vue
- package.json
- GoalBar.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- errorText
- GoalsView.vue
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- t
- avant-web
- t
- tsconfig.json
- session-start.sh
- ReportsView.vue
- LoadError.vue
- report-builder.test.ts
- devDependencies
- api.ts
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- account/service.ts
- MfaCard.vue
- contracts/rules.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- Button.vue
- ResetView.vue
- GroupedBarChart.vue
- ConfigPanel.vue
- costs/service.ts
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- vue-router
- PasswordCard.vue
- costs/rules.ts
- FunnelChart.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- goals/service.ts
- useSession
- events.ts
- MfaView.vue
- BarChart.vue
- Pagination.vue
- table.ts
- router.ts
- networkName
- sites/service.ts
- Avatar.vue
- profileOk
- FakeSource
- @types/node@^24.19.2
- @types/qrcode@1.5.5
- @vitejs/plugin-vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 193 edges
2. `errorText()` - 144 edges
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (112 total, 8 thin omitted)

### Community 0 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 1 - "session.ts"
Cohesion: 0.20
Nodes (14): pinia@^4.1.0, pinia, Accent, accentCss(), accentFor(), applyAccent(), theme, AccentId (+6 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): profileInput(), audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (43): toQuery(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+35 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "HomeView.vue"
Cohesion: 0.12
Nodes (15): props, seats, companyService, CompanyDetail, CompanyFiscal, company, error, firstName (+7 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (47): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, dupe (+39 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (34): adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect, canManage (+26 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (26): props, up, barFormat(), byCountry, bySite, catalog, chartFormat(), chosen (+18 more)

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
Cohesion: 0.12
Nodes (16): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+8 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (32): pick(), busy, canEditGroone, canSeeInvites, email, emailOk, invite(), invitePage (+24 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (27): busy, changed(), close(), companyGoal, creating, editing, emit, formOpen (+19 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.13
Nodes (14): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+6 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.16
Nodes (13): account(), clientId, emit, Group, GROUPS, onInternal, openLink(), ready (+5 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 25 - "sites/rules.ts"
Cohesion: 0.36
Nodes (5): approval(), Tone, tree(), AdUnit, rows

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.13
Nodes (22): Task 3: Web — tipos, serviço e regras do construtor, Lang, ChartType, CustomCatalogMetric, CustomMetric, CustomMetricCheck, CustomMetricCheckInput, CustomMetricInput (+14 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (40): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+32 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.11
Nodes (26): Localized, SiteScope, ClientMember, OwnerInvitation, busy, category, chipClass(), chosen (+18 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.16
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
Cohesion: 0.13
Nodes (15): busy, create(), description, duplicate, emit, name, open, people (+7 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.09
Nodes (35): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY (+27 more)

### Community 40 - "cn"
Cohesion: 0.10
Nodes (21): reka-ui@^2.11.0, reka-ui, pick(), route, router, session, Item, cn() (+13 more)

### Community 41 - "reports/rules.ts"
Cohesion: 0.11
Nodes (31): filterable, AXIS_CHARTS, builderState, canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart() (+23 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "package.json"
Cohesion: 0.20
Nodes (9): qrcode@1.5.4, oxlint@^1.89.0, name, packageManager, private, type, version, oxlint (+1 more)

### Community 45 - "GoalBar.vue"
Cohesion: 0.26
Nodes (9): mark, money(), percent, props, share, tone, goalTone(), paceMark() (+1 more)

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

### Community 50 - "errorText"
Cohesion: 0.24
Nodes (11): Task 6: Web — construtor, errorText(), ACCENTS, accent, choose(), session, duplicate(), firstPage() (+3 more)

### Community 51 - "GoalsView.vue"
Cohesion: 0.11
Nodes (18): monthOptions(), canManage, canView, load(), loadError, mine, modes, month (+10 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.12
Nodes (16): lucide-vue-next, button, classes, Props, open, canEdit, company, isGroone (+8 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.13
Nodes (18): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+10 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.15
Nodes (9): auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo(), index (+1 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "t"
Cohesion: 0.18
Nodes (9): open, open, formatDate(), t(), delegationLabel(), revshareError, revshareHint, saveNotes() (+1 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.09
Nodes (23): exportUrl(), download(), busy, canManage, counts, download(), loadError, myId (+15 more)

### Community 66 - "LoadError.vue"
Cohesion: 0.28
Nodes (8): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions

### Community 67 - "report-builder.test.ts"
Cohesion: 0.12
Nodes (10): @vue/test-utils@^2.5.1, vitest, @vue/test-utils, lang, ReportResult, catalog, me, report (+2 more)

### Community 68 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, postcss@^8.5.31, typescript@~6.0.3, vite@^8.3.5, vitest@^5.0.5, vue-tsc@^3.3.13 (+6 more)

### Community 69 - "api.ts"
Cohesion: 0.15
Nodes (22): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+14 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.32
Nodes (9): CompanyStatus, FiscalData, STAFF_STATUSES, STATUS_TONE, AuditEntry, Client, ClientDetail, ClientProfile (+1 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "account/service.ts"
Cohesion: 0.47
Nodes (7): UserRef, ApiKey, ApiKeyCreated, AuthSession, GoogleStatus, MfaSetup, RecoveryCodes

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "contracts/rules.ts"
Cohesion: 0.19
Nodes (13): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+5 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.11
Nodes (15): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+7 more)

### Community 77 - "errorText"
Cohesion: 0.06
Nodes (32): busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, confirmEnd(), confirmRemove() (+24 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (34): Task 4: Web — cores das séries e gráficos do construtor, formatMetric(), toNumber(), amountText(), yearTotal(), money(), percent(), money() (+26 more)

### Community 79 - "Button.vue"
Cohesion: 0.07
Nodes (34): copyToken(), busy, canManage, created(), creating, keys, load(), loadError (+26 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.10
Nodes (17): model, busy, email, error, sent, submit(), busy, error (+9 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 82 - "ConfigPanel.vue"
Cohesion: 0.10
Nodes (22): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+14 more)

### Community 83 - "costs/service.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.17
Nodes (11): model, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (15): ClientOption, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+7 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (20): assign(), canManage, canTeam, load(), loaded, loadError, loadRoles(), members (+12 more)

### Community 89 - "vue-router"
Cohesion: 0.20
Nodes (5): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, Blank

### Community 90 - "PasswordCard.vue"
Cohesion: 0.15
Nodes (11): ApiError, busy, current, emit, mismatch, password, password2, ready (+3 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 92 - "FunnelChart.vue"
Cohesion: 0.33
Nodes (3): first, FunnelStep, props

### Community 93 - "networks/service.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 96 - "goals/service.ts"
Cohesion: 0.39
Nodes (7): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals

### Community 97 - "useSession"
Cohesion: 0.10
Nodes (20): vue-sonner, choose(), langs, session, logout(), chooseLang(), THEMES, busy (+12 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.11
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "table.ts"
Cohesion: 0.38
Nodes (4): td, th, dimensions, props

### Community 103 - "router.ts"
Cohesion: 0.32
Nodes (4): vue, toasterTheme, router, routes

### Community 104 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 105 - "sites/service.ts"
Cohesion: 0.52
Nodes (5): siteService, Site, SiteDetail, SiteListItem, SiteMember

### Community 106 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 107 - "profileOk"
Cohesion: 0.50
Nodes (4): profileBody(), profileOk(), formOk, saveProfile()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `router.ts` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `cn`, `InviteView.vue`, `package.json`, `GoalBar.vue`, `ConnectView.vue`, `NetworksView.vue`, `errorText`, `GoalsView.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `t`, `ReportsView.vue`, `LoadError.vue`, `report-builder.test.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `Button.vue`, `ResetView.vue`, `GroupedBarChart.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `vue-router`, `PasswordCard.vue`, `FunnelChart.vue`, `FieldsPanel.vue`, `useSession`, `events.ts`, `MfaView.vue`, `BarChart.vue`, `Pagination.vue`, `table.ts`, `Avatar.vue`?**
  _High betweenness centrality (0.155) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `sites/rules.ts`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `cn`, `reports/rules.ts`, `InviteView.vue`, `GoalBar.vue`, `ConnectView.vue`, `NetworksView.vue`, `errorText`, `GoalsView.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `LoadError.vue`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `Button.vue`, `ResetView.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `FieldsPanel.vue`, `useSession`, `MfaView.vue`, `Pagination.vue`, `table.ts`, `networkName`, `profileOk`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06183574879227053 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `cn`, `InviteView.vue`, `ConnectView.vue`, `NetworksView.vue`, `GoalsView.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `t`, `ReportsView.vue`, `LoadError.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `Button.vue`, `ResetView.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `PasswordCard.vue`, `useSession`, `MfaView.vue`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06543385490753911 - nodes in this community are weakly interconnected._