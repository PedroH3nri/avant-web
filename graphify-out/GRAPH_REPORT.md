# Graph Report - avant-web  (2026-11-02)

## Corpus Check
- 262 files · ~156,146 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2855 nodes · 7359 edges · 141 communities (134 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 81 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `90c6fb72`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- DashboardsView.vue
- ClientView.vue
- ReportBuilderView.vue
- MemberView.vue
- Avant: models do MVP
- CustomMetricDialog.vue
- GroupView.vue
- RuleDialog.vue
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
- cn
- ApiKeyDialog.vue
- api.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- Pagination.vue
- ClientsView.vue
- InvoiceView.vue
- SiteDetailView.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- NewGroupDialog.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PageViewsView.vue
- HomeView.vue
- TeamCommissionsView.vue
- compilerOptions
- session.ts
- invoices/types.ts
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- NativeSelect.vue
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- ProfileImageCard.vue
- avant-web
- errorText
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- SchedulesView.vue
- package.json
- reports/types.ts
- MetricStylePopover.vue
- AccountManagerCard.vue
- FiscalDataCard.vue
- CompanyGoalCard.vue
- reports/rules.ts
- AlertsView.vue
- GroupsView.vue
- ContractsView.vue
- ReportChart.vue
- ApiKeysCard.vue
- InviteView.vue
- Query
- SaveReportDialog.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- dashboards/rules.ts
- Review Focus
- RolesView.vue
- RoleDialog.vue
- PasswordCard.vue
- ServiceLineDialog.vue
- ConfigPanel.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- contracts/rules.ts
- InvoicesView.vue
- errorToast
- events.ts
- ClassifySitesDialog.vue
- reports/types.ts
- AddWidgetDialog.vue
- sites/rules.ts
- GoalsView.vue
- Button.vue
- dashboards/types.ts
- NewDashboardDialog.vue
- table.ts
- schedules/rules.ts
- GroupedBarChart.vue
- ReportThumb.vue
- reka-ui
- MyCommissionView.vue
- DashboardWidget.vue
- AdjustmentDialog.vue
- Input.vue
- AlertDialog.vue
- pick
- useSession
- session.ts
- toNumber
- alerts/rules.ts
- ApiError
- InvoiceDocument.vue
- SeatBar.vue
- ScheduleDialog.vue
- Card.vue
- router.ts
- t
- clients/types.ts
- BarChart.vue
- lang
- ProfileImageCard.vue
- Button.vue
- alerts/types.ts
- @vitejs/plugin-vue
- TeamTabs.vue
- networks/rules.ts
- FakeSource
- networkName
- exportUrl

## God Nodes (most connected - your core abstractions)
1. `t()` - 311 edges
2. `errorText()` - 210 edges
3. `vue` - 116 edges
4. `ApiError` - 81 edges
5. `useSession` - 65 edges
6. `vue-sonner` - 61 edges
7. `lucide-vue-next` - 59 edges
8. `toNumber()` - 57 edges
9. `cn()` - 53 edges
10. `formatMetric()` - 48 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (141 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.06
Nodes (39): emptyDefinition(), readingOrder(), adding, apiMessage(), canManage, catalog, chooseMine(), chosenId (+31 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (44): builderState(), toInput(), withMetrics(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+36 more)

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

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (36): busy, canTransfer, duplicate, emit, errors, form, open, props (+28 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (38): inviteTaken(), busy, canEditCompany, canInvite, canManage, canRoles, company, dupe (+30 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.11
Nodes (16): areaPaths, box, chartWidth, hovered, labelStep, linePath(), padding, plotHeight (+8 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (26): barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric, compare (+18 more)

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
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.15
Nodes (13): formatMonth(), periodText(), clients, currency, load(), loadError, month, monthOptions (+5 more)

### Community 23 - "cn"
Cohesion: 0.18
Nodes (11): panelItem(), railItem(), cn(), kindClass(), tabClass(), choice(), tabClass(), valueClass() (+3 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (25): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+17 more)

### Community 25 - "api.ts"
Cohesion: 0.15
Nodes (20): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+12 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "Pagination.vue"
Cohesion: 0.13
Nodes (16): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers() (+8 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (40): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+32 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.14
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

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
Cohesion: 0.08
Nodes (28): broken, hue, initials, props, busy, create(), description, duplicate (+20 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.07
Nodes (38): compare, options, period, selected, countryName(), dailySeries(), daysOf(), hourLabel() (+30 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.15
Nodes (13): companyService, CompanyDetail, CompanyFiscal, company, error, firstName, greeting, load() (+5 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.09
Nodes (23): STATUS_TONE, toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+15 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "session.ts"
Cohesion: 0.10
Nodes (20): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+12 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (13): UserRef, FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+5 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.09
Nodes (32): savedPeriod(), toQuery(), viewChanged(), viewDraft(), preview(), apiMessage(), canManage, catalog (+24 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): validCode(), busy, Check, checks, code, copied, copy(), done (+14 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "NativeSelect.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.12
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (20): latestCall(), Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.12
Nodes (16): vue, props, up, choose(), langs, session, auditActions, auditText() (+8 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.15
Nodes (14): box, failed, initial, props, busy, drop(), input, pick() (+6 more)

### Community 61 - "errorText"
Cohesion: 0.15
Nodes (19): errorText(), created(), load(), revoke(), load(), load(), saveStart(), choose() (+11 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (37): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+29 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.09
Nodes (22): allOptions(), busy, canManage, confirmRemove(), dashboards, editing, formOpen, load() (+14 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+21 more)

### Community 69 - "reports/types.ts"
Cohesion: 0.09
Nodes (19): @vue/test-utils@^2.5.1, vitest, @vue/test-utils, CustomMetricCheck, MetricCatalog, ReportResult, SavedReport, catalog (+11 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (23): emptyProfile(), profileBody(), profileInput(), closeForm(), create(), openEdit(), busy, canChange (+15 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): locale, busy, canManage, changed, current, monthNames, months, saved (+23 more)

### Community 74 - "reports/rules.ts"
Cohesion: 0.11
Nodes (32): loadDraft(), filterable, AXIS_CHARTS, BuilderState, canExport(), chartAllowed(), dimensionSources(), draftOf() (+24 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (30): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+22 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (25): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, description, empty, first (+17 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.09
Nodes (28): busy, canManage, creating, keys, loadError, page, pages, permsText() (+20 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "Query"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 82 - "SaveReportDialog.vue"
Cohesion: 0.13
Nodes (14): Dashboard, DashboardInput, choices, description, emit, invalid, name, open (+6 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (16): clientService, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.13
Nodes (28): add(), CHART_SIZE, clamp(), cleanFilters(), FILTER_DIMENSIONS, filtersChanged(), goalWidget(), GRID_COLUMNS (+20 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (34): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+26 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (17): amount, amountError, busy, chosen, description, emit, open, options (+9 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "contracts/rules.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.12
Nodes (12): model, dot, invoices, load(), loadError, money(), month, page (+4 more)

### Community 97 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.16
Nodes (20): Task 3: Web — tipos, serviço e regras do construtor, Lang, customMetricService, reportService, ChartOptions, CustomCatalogMetric, CustomMetric, CustomMetricCheckInput (+12 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (14): emit, kind, kinds, metric, metrics, open, props, ready (+6 more)

### Community 102 - "sites/rules.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.12
Nodes (22): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+14 more)

### Community 104 - "Button.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 105 - "dashboards/types.ts"
Cohesion: 0.13
Nodes (18): dimensions, filters, periods, props, filterPeriod(), withPeriod(), withValue(), DashboardDefinition (+10 more)

### Community 106 - "NewDashboardDialog.vue"
Cohesion: 0.25
Nodes (8): chosen, create(), emit, name, open, templates, dashboardService, DashboardTemplate

### Community 107 - "table.ts"
Cohesion: 0.18
Nodes (11): td, th, events, load(), loadError, open, page, pages (+3 more)

### Community 108 - "schedules/rules.ts"
Cohesion: 0.16
Nodes (17): hourOptions, HOURS, hourText(), MONTH_DAYS, SCHEDULE_FREQUENCIES, ScheduleForm, scheduleForm(), TIMEZONES (+9 more)

### Community 109 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 110 - "ReportThumb.vue"
Cohesion: 0.12
Nodes (20): title, metrics, metrics, format, formatted(), highest, label, metricKey (+12 more)

### Community 111 - "reka-ui"
Cohesion: 0.29
Nodes (6): reka-ui, pick(), route, router, session, emit

### Community 112 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (17): discount(), formatDay(), windowState(), data, endText(), kpis, loadError, minus() (+9 more)

### Community 113 - "DashboardWidget.vue"
Cohesion: 0.15
Nodes (13): apiMessage(), draft, emit, failure, goal, loading, month, props (+5 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "Input.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 116 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 117 - "pick"
Cohesion: 0.14
Nodes (14): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+6 more)

### Community 118 - "useSession"
Cohesion: 0.26
Nodes (11): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), useSession (+3 more)

### Community 119 - "session.ts"
Cohesion: 0.20
Nodes (7): pinia, Me, accountService, authService, InvitationPreview, LoginResult, Blank

### Community 120 - "toNumber"
Cohesion: 0.16
Nodes (20): change(), formatMetric(), toNumber(), metricText(), amountText(), sum(), yearTotal(), money() (+12 more)

### Community 121 - "alerts/rules.ts"
Cohesion: 0.17
Nodes (19): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+11 more)

### Community 122 - "ApiError"
Cohesion: 0.20
Nodes (7): ApiError, busy, confirm, load(), session, status, unlink()

### Community 123 - "InvoiceDocument.vue"
Cohesion: 0.15
Nodes (14): formatDate(), Key, previewDay, dates, money(), monthName(), payee, PAYER (+6 more)

### Community 125 - "ScheduleDialog.vue"
Cohesion: 0.15
Nodes (13): body, busy, emit, form, monthDayOptions, open, Option, props (+5 more)

### Community 126 - "Card.vue"
Cohesion: 0.28
Nodes (8): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions

### Community 127 - "router.ts"
Cohesion: 0.05
Nodes (39): vue-router, model, RouteMeta, vue-router, safeNext(), busy, email, error (+31 more)

### Community 128 - "t"
Cohesion: 0.19
Nodes (11): open, open, t(), tn(), changeLines, roleLine(), frequencyOptions, itemOptions (+3 more)

### Community 129 - "clients/types.ts"
Cohesion: 0.36
Nodes (10): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+2 more)

### Community 130 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 131 - "lang"
Cohesion: 0.20
Nodes (8): lang, client, managerChange, perms, settings, staffOptions, team, toastError

### Community 132 - "ProfileImageCard.vue"
Cohesion: 0.24
Nodes (9): busy, drop(), imageUrl, input, name, pick(), problem, run() (+1 more)

### Community 133 - "Button.vue"
Cohesion: 0.31
Nodes (6): lucide-vue-next, button, classes, Props, props, open

### Community 134 - "alerts/types.ts"
Cohesion: 0.46
Nodes (6): Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 136 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 137 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 139 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 140 - "exportUrl"
Cohesion: 0.50
Nodes (4): exportUrl(), download(), download(), download()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `errorText`, `ReportsView.vue`, `SchedulesView.vue`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `reports/rules.ts`, `AlertsView.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `InviteView.vue`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `contracts/rules.ts`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `AddWidgetDialog.vue`, `sites/rules.ts`, `GoalsView.vue`, `Button.vue`, `dashboards/types.ts`, `NewDashboardDialog.vue`, `table.ts`, `schedules/rules.ts`, `ReportThumb.vue`, `reka-ui`, `MyCommissionView.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `Input.vue`, `AlertDialog.vue`, `pick`, `useSession`, `toNumber`, `alerts/rules.ts`, `ApiError`, `InvoiceDocument.vue`, `ScheduleDialog.vue`, `Card.vue`, `router.ts`, `ProfileImageCard.vue`, `Button.vue`, `TeamTabs.vue`, `networkName`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `SchedulesView.vue`, `package.json`, `reports/types.ts`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `InviteView.vue`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `events.ts`, `ClassifySitesDialog.vue`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `dashboards/types.ts`, `NewDashboardDialog.vue`, `table.ts`, `GroupedBarChart.vue`, `ReportThumb.vue`, `MyCommissionView.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `Input.vue`, `AlertDialog.vue`, `useSession`, `session.ts`, `ApiError`, `InvoiceDocument.vue`, `SeatBar.vue`, `ScheduleDialog.vue`, `Card.vue`, `router.ts`, `BarChart.vue`, `ProfileImageCard.vue`, `Button.vue`, `TeamTabs.vue`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05758582502768549 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `ProfileImageCard.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ReportsView.vue`, `SchedulesView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `InviteView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `Review Focus`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `GoalsView.vue`, `Button.vue`, `table.ts`, `reka-ui`, `MyCommissionView.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `AlertDialog.vue`, `pick`, `useSession`, `ApiError`, `ScheduleDialog.vue`, `Card.vue`, `router.ts`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._