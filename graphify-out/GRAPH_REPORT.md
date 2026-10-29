# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 205 files · ~113,435 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2035 nodes · 4908 edges · 111 communities (105 shown, 6 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 75 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aa3f9060`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- groups/rules.ts
- useSession
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
- Button.vue
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
- metrics.ts
- compilerOptions
- InviteView.vue
- errorToast
- vitest
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- PeriodPicker.vue
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
- account/rules.ts
- report-builder.test.ts
- devDependencies
- api.ts
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- account/service.ts
- MfaCard.vue
- reka-ui
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- router.ts
- GroupedBarChart.vue
- reports/rules.ts
- costs/service.ts
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- vue-router
- PasswordCard.vue
- costs/rules.ts
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- Button.vue
- session.ts
- events.ts
- MfaView.vue
- BarChart.vue
- Pagination.vue
- formatMetric
- errorText
- SessionsCard.vue
- sites/service.ts
- Avatar.vue
- clients/rules.ts
- FakeSource
- inviteTaken
- loadMembers

## God Nodes (most connected - your core abstractions)
1. `t()` - 193 edges
2. `errorText()` - 145 edges
3. `vue` - 85 edges
4. `ApiError` - 58 edges
5. `useSession` - 52 edges
6. `lucide-vue-next` - 43 edges
7. `cn()` - 43 edges
8. `vue-sonner` - 42 edges
9. `toNumber()` - 32 edges
10. `vue-router` - 27 edges

## Surprising Connections (you probably didn't know these)
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (111 total, 6 thin omitted)

### Community 0 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 1 - "useSession"
Cohesion: 0.12
Nodes (17): vue-sonner, toasterTheme, choose(), langs, session, chooseLang(), busy, confirm (+9 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (51): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+43 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (50): builderState, savedQuery(), toInput(), toQuery(), withMetrics(), exportUrl(), apiMessage(), askRemoveMetric() (+42 more)

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
Cohesion: 0.13
Nodes (10): dot, company, error, firstName, greeting, lost, networks, router (+2 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (36): adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect, canManage (+28 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.11
Nodes (16): areaPaths, box, chartWidth, hovered, labelStep, linePath(), padding, plotHeight (+8 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (26): reportService, MetricValues, barFormat(), byCountry, bySite, catalog, chartFormat(), chosen (+18 more)

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
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, tailwind-merge@^3.7.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (32): pick(), busy, canEditGroone, canSeeInvites, email, emailOk, invite(), invitePage (+24 more)

### Community 20 - "GoalsView.vue"
Cohesion: 0.05
Nodes (57): mark, percent, props, tone, busy, changed(), close(), companyGoal (+49 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.15
Nodes (14): locale, td, th, clients, currency, loadError, month, page (+6 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.15
Nodes (14): account(), clientId, emit, Group, GROUPS, logout(), onInternal, openLink() (+6 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "Button.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (22): busy, canManage, check, checkFormula, costs, currencies, currencyOptions, editing (+14 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.15
Nodes (23): Task 3: Web — tipos, serviço e regras do construtor, Lang, CustomCatalogMetric, CustomMetric, CustomMetricCheck, CustomMetricCheckInput, CustomMetricInput, DimensionDef (+15 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.05
Nodes (42): props, seats, adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+34 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.12
Nodes (14): model, busy, category, chipClass(), chosen, emit, groups, name (+6 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.09
Nodes (24): tree(), busy, canAssign, canManage, errorToast(), id, load(), loadError (+16 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, props (+5 more)

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
Cohesion: 0.11
Nodes (20): change(), peakHour(), byCountry, byHour, bySite, compare, daily, empty (+12 more)

### Community 40 - "cn"
Cohesion: 0.09
Nodes (21): props, up, Item, ACCENTS, cn(), accent, choose(), session (+13 more)

### Community 41 - "metrics.ts"
Cohesion: 0.22
Nodes (14): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), REPORT_CURRENCY, shortDay(), dimensionText() (+6 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 45 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.07
Nodes (32): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+24 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/types.ts"
Cohesion: 0.19
Nodes (13): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+5 more)

### Community 51 - "PeriodPicker.vue"
Cohesion: 0.22
Nodes (7): compare, options, period, selected, model, Key, PERIOD_PRESETS

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (22): Task 6: Web — construtor, peopleService, Person, Action, busy, confirm(), enable(), fail() (+14 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.16
Nodes (11): vue, auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo() (+3 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "t"
Cohesion: 0.15
Nodes (15): formatDate(), t(), choose(), confirmEnd(), confirmRemove(), create(), delegationLabel(), load() (+7 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.09
Nodes (26): busy, canManage, counts, duplicate(), firstPage(), load(), loadError, loadReports() (+18 more)

### Community 66 - "account/rules.ts"
Cohesion: 0.31
Nodes (6): label(), BROWSERS, device(), first(), keyState, SYSTEMS

### Community 67 - "report-builder.test.ts"
Cohesion: 0.17
Nodes (6): ApiError, catalog, me, report, result, service

### Community 68 - "devDependencies"
Cohesion: 0.11
Nodes (24): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+16 more)

### Community 69 - "api.ts"
Cohesion: 0.18
Nodes (16): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+8 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.31
Nodes (11): CompanyStatus, FiscalData, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ClientProfile (+3 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "account/service.ts"
Cohesion: 0.47
Nodes (7): UserRef, ApiKey, ApiKeyCreated, AuthSession, GoogleStatus, MfaSetup, RecoveryCodes

### Community 74 - "MfaCard.vue"
Cohesion: 0.12
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 75 - "reka-ui"
Cohesion: 0.16
Nodes (10): reka-ui@^2.11.0, reka-ui, box, failed, initial, props, pick(), route (+2 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 77 - "errorText"
Cohesion: 0.07
Nodes (26): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, editing (+18 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.09
Nodes (27): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, description, empty, first (+19 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "router.ts"
Cohesion: 0.08
Nodes (18): busy, email, error, sent, submit(), busy, error, mfa (+10 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (30): filterable, AXIS_CHARTS, canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart(), fromQuery() (+22 more)

### Community 83 - "costs/service.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.12
Nodes (17): latestCall(), clientService, clientId, clientOptions, clients, firstPage(), load(), loadError (+9 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (25): Localized, SiteScope, Member, MemberDetail, MembershipStatus, Permission, Role, RoleOption (+17 more)

### Community 89 - "vue-router"
Cohesion: 0.50
Nodes (3): vue-router, RouteMeta, vue-router

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.19
Nodes (11): addFilter(), addTyped(), CHARTS, emit, FilterOption, newField, props, setFilters() (+3 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 96 - "Button.vue"
Cohesion: 0.24
Nodes (7): lucide-vue-next, open, button, classes, Props, open, open

### Community 97 - "session.ts"
Cohesion: 0.14
Nodes (18): pinia, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId (+10 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.11
Nodes (18): model, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "formatMetric"
Cohesion: 0.19
Nodes (14): formatMetric(), toNumber(), amountText(), money(), share, yearTotal(), money(), percent() (+6 more)

### Community 103 - "errorText"
Cohesion: 0.24
Nodes (12): errorText(), confirmRemove(), load(), save(), load(), load(), setGoal(), load() (+4 more)

### Community 104 - "SessionsCard.vue"
Cohesion: 0.24
Nodes (8): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions

### Community 105 - "sites/service.ts"
Cohesion: 0.29
Nodes (8): approval(), Tone, siteService, AdUnit, Site, SiteDetail, SiteListItem, SiteMember

### Community 106 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 107 - "clients/rules.ts"
Cohesion: 0.22
Nodes (10): emptyProfile(), profileBody(), profileInput(), profileOk(), STAFF_STATUSES, STATUS_TONE, closeForm(), formOk (+2 more)

### Community 110 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `i18n.ts` to `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `Button.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `cn`, `InviteView.vue`, `ConnectView.vue`, `NetworksView.vue`, `PeriodPicker.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `ReportsView.vue`, `report-builder.test.ts`, `devDependencies`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `reka-ui`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `GroupedBarChart.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `Button.vue`, `session.ts`, `events.ts`, `MfaView.vue`, `BarChart.vue`, `Pagination.vue`, `SessionsCard.vue`, `Avatar.vue`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `useSession` be split into smaller, more focused modules?**
  _Cohesion score 0.12121212121212122 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `Button.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `cn`, `metrics.ts`, `InviteView.vue`, `errorToast`, `ConnectView.vue`, `NetworksView.vue`, `PeriodPicker.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `account/rules.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `reka-ui`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `reports/rules.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `costs/rules.ts`, `ConfigPanel.vue`, `FieldsPanel.vue`, `Button.vue`, `session.ts`, `MfaView.vue`, `Pagination.vue`, `formatMetric`, `errorText`, `SessionsCard.vue`, `sites/service.ts`, `clients/rules.ts`, `loadMembers`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04862119013062409 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `cn`, `InviteView.vue`, `errorToast`, `ConnectView.vue`, `NetworksView.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `t`, `ReportsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `reka-ui`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `router.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `PasswordCard.vue`, `session.ts`, `MfaView.vue`, `SessionsCard.vue`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05660377358490566 - nodes in this community are weakly interconnected._