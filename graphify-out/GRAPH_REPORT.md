# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 203 files · ~113,211 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2030 nodes · 4900 edges · 108 communities (100 shown, 8 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 74 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `30cc7191`
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
- report-rules.test.ts
- compilerOptions
- InviteView.vue
- errorToast
- vitest
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- ApiError
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
- SessionsCard.vue
- report-builder.test.ts
- devDependencies
- api.ts
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- account/service.ts
- MfaCard.vue
- CompanyIcon.vue
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- ResetView.vue
- GroupedBarChart.vue
- ConfigPanel.vue
- costs/service.ts
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- router.ts
- PasswordCard.vue
- costs/rules.ts
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- Dialog.vue
- vue
- events.ts
- MfaView.vue
- BarChart.vue
- Pagination.vue
- formatMetric
- sites/service.ts
- Avatar.vue
- clients/rules.ts
- FakeSource
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

## Communities (108 total, 8 thin omitted)

### Community 0 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 1 - "session.ts"
Cohesion: 0.67
Nodes (4): Me, authService, InvitationPreview, LoginResult

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (51): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+43 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (46): toQuery(), withDimensions(), withMetrics(), exportUrl(), apiMessage(), askRemoveMetric(), busy, canManage (+38 more)

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

### Community 8 - "HomeView.vue"
Cohesion: 0.15
Nodes (13): companyService, CompanyDetail, CompanyFiscal, company, error, firstName, greeting, load() (+5 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, dupe, email (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (37): model, adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect (+29 more)

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
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, qrcode@1.5.4, tailwind-merge@^3.7.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (32): pick(), busy, canEditGroone, canSeeInvites, email, emailOk, invite(), invitePage (+24 more)

### Community 20 - "GoalsView.vue"
Cohesion: 0.05
Nodes (60): mark, money(), percent, props, share, tone, busy, changed() (+52 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.13
Nodes (14): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+6 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.10
Nodes (21): reka-ui@^2.11.0, reka-ui, pick(), route, router, session, account(), clientId (+13 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.10
Nodes (19): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+11 more)

### Community 25 - "Button.vue"
Cohesion: 0.21
Nodes (10): lucide-vue-next, button, classes, Props, copied, download(), manual, props (+2 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (22): busy, canManage, check, checkFormula, costs, currencies, currencyOptions, editing (+14 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.12
Nodes (28): Task 3: Web — tipos, serviço e regras do construtor, Lang, customMetricService, ChartOptions, CustomCatalogMetric, CustomMetric, CustomMetricCheck, CustomMetricCheckInput (+20 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.05
Nodes (41): props, seats, adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+33 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.13
Nodes (21): Localized, SiteScope, busy, category, chipClass(), chosen, groups, name (+13 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): approval(), Tone, tree(), AdUnit, busy, canAssign, canManage, errorToast() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (14): td, th, busy, canManage, deleteOpen, deleting, dialog, editing (+6 more)

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
Nodes (34): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY (+26 more)

### Community 40 - "cn"
Cohesion: 0.11
Nodes (16): props, up, cn(), kindClass(), tabClass(), tabClass(), valueClass(), dot() (+8 more)

### Community 41 - "report-rules.test.ts"
Cohesion: 0.20
Nodes (15): builderState, canExport(), emptyDraft(), fromQuery(), fromReport(), fromTemplate(), toInput(), ReportRow (+7 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 45 - "vitest"
Cohesion: 0.22
Nodes (5): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, Blank

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

### Community 50 - "ApiError"
Cohesion: 0.20
Nodes (6): ApiError, busy, email, error, sent, submit()

### Community 51 - "PeriodPicker.vue"
Cohesion: 0.29
Nodes (6): compare, options, period, selected, Key, PERIOD_PRESETS

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.12
Nodes (14): model, ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+6 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.10
Nodes (21): Task 6: Web — construtor, latestCall(), Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.12
Nodes (16): choose(), langs, session, logout(), auditActions, auditText(), chooseLang(), dict (+8 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "t"
Cohesion: 0.15
Nodes (22): errorText(), formatDate(), t(), load(), confirmRemove(), load(), save(), choose() (+14 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, counts, duplicate(), firstPage(), load(), loadError, loadReports() (+17 more)

### Community 66 - "SessionsCard.vue"
Cohesion: 0.16
Nodes (15): end(), ending, endingOthers, endOthers(), fail(), label(), loadError, sessions (+7 more)

### Community 67 - "report-builder.test.ts"
Cohesion: 0.18
Nodes (7): pinia@^4.1.0, pinia, catalog, me, report, result, service

### Community 68 - "devDependencies"
Cohesion: 0.11
Nodes (24): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+16 more)

### Community 69 - "api.ts"
Cohesion: 0.15
Nodes (21): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+13 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.31
Nodes (11): CompanyStatus, FiscalData, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ClientProfile (+3 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "account/service.ts"
Cohesion: 0.18
Nodes (14): Theme, busy, confirm, load(), session, status, unlink(), accountService (+6 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 76 - "GroupsView.vue"
Cohesion: 0.11
Nodes (15): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+7 more)

### Community 77 - "errorText"
Cohesion: 0.06
Nodes (40): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+32 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.11
Nodes (25): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, toNumber(), description, empty (+17 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 82 - "ConfigPanel.vue"
Cohesion: 0.09
Nodes (30): addFilter(), addTyped(), CHARTS, emit, filterable, FilterOption, LIMITS, newField (+22 more)

### Community 83 - "costs/service.ts"
Cohesion: 0.40
Nodes (5): CostKind, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (16): clientService, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (12): choices, description, emit, invalid, name, open, props, roleIds (+4 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (20): assign(), canManage, canTeam, load(), loaded, loadError, loadRoles(), members (+12 more)

### Community 89 - "router.ts"
Cohesion: 0.22
Nodes (6): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, router, routes

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.24
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+4 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 97 - "vue"
Cohesion: 0.11
Nodes (20): vue, vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent() (+12 more)

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
Cohesion: 0.15
Nodes (14): formatMetric(), amountText(), yearTotal(), money(), money(), preview, metrics, dimensions (+6 more)

### Community 105 - "sites/service.ts"
Cohesion: 0.67
Nodes (4): Site, SiteDetail, SiteListItem, SiteMember

### Community 106 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 107 - "clients/rules.ts"
Cohesion: 0.28
Nodes (8): emptyProfile(), profileBody(), profileInput(), STAFF_STATUSES, STATUS_TONE, closeForm(), create(), openEdit()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `vue` to `session.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `Button.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `cn`, `InviteView.vue`, `vitest`, `ConnectView.vue`, `NetworksView.vue`, `ApiError`, `PeriodPicker.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `SessionsCard.vue`, `report-builder.test.ts`, `devDependencies`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `account/service.ts`, `MfaCard.vue`, `CompanyIcon.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `GroupedBarChart.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `router.ts`, `PasswordCard.vue`, `FieldsPanel.vue`, `events.ts`, `MfaView.vue`, `BarChart.vue`, `Pagination.vue`, `formatMetric`, `Avatar.vue`?**
  _High betweenness centrality (0.146) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04934687953555878 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `Button.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `cn`, `report-rules.test.ts`, `InviteView.vue`, `errorToast`, `ConnectView.vue`, `NetworksView.vue`, `ApiError`, `PeriodPicker.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `SessionsCard.vue`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `account/service.ts`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `AuthFrame.vue`, `FieldsPanel.vue`, `Dialog.vue`, `vue`, `MfaView.vue`, `Pagination.vue`, `formatMetric`, `clients/rules.ts`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05782312925170068 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `HomeView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `InviteView.vue`, `errorToast`, `ConnectView.vue`, `NetworksView.vue`, `ApiError`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `SessionsCard.vue`, `FiscalDataCard.vue`, `account/service.ts`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `ResetView.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `PasswordCard.vue`, `vue`, `MfaView.vue`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06543385490753911 - nodes in this community are weakly interconnected._