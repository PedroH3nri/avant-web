# Graph Report - avant-web  (2026-11-02)

## Corpus Check
- 249 files · ~148,476 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2697 nodes · 6908 edges · 126 communities (120 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 81 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f0974124`
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
- team/types.ts
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
- api.ts
- package.json
- reports/types.ts
- MetricStylePopover.vue
- AccountManagerCard.vue
- FiscalDataCard.vue
- CompanyGoalCard.vue
- reports/rules.ts
- clients/types.ts
- GroupsView.vue
- ContractsView.vue
- ReportChart.vue
- ApiKeysCard.vue
- ApiError
- Query
- SaveReportDialog.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- dashboards/rules.ts
- Review Focus
- RolesView.vue
- RoleDialog.vue
- vue-sonner
- ServiceLineDialog.vue
- ConfigPanel.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- contracts/rules.ts
- InvoicesView.vue
- errorToast
- events.ts
- ClassifySitesDialog.vue
- MyCommissionView.vue
- AddWidgetDialog.vue
- sites/rules.ts
- GoalsView.vue
- Button.vue
- t
- dashboards/types.ts
- commission-components.test.ts
- LoginView.vue
- dashboard-rules.test.ts
- ReportThumb.vue
- Button.vue
- tailwindcss
- DashboardWidget.vue
- AdjustmentDialog.vue
- Input.vue
- package.json
- pick
- useSession
- vitest
- results/service.ts
- contracts/service.ts
- GAM
- loadMembers
- SeatBar.vue
- typescript

## God Nodes (most connected - your core abstractions)
1. `t()` - 286 edges
2. `errorText()` - 196 edges
3. `vue` - 111 edges
4. `ApiError` - 76 edges
5. `useSession` - 63 edges
6. `lucide-vue-next` - 57 edges
7. `vue-sonner` - 57 edges
8. `toNumber()` - 53 edges
9. `cn()` - 53 edges
10. `formatMetric()` - 44 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (126 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+36 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.06
Nodes (34): emptyDefinition(), readingOrder(), adding, canManage, catalog, chosenId, create(), creating (+26 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (51): builderState(), fittingChart(), toInput(), toQuery(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric() (+43 more)

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
Cohesion: 0.11
Nodes (35): changeLines, busy, canTransfer, duplicate, emit, errors, form, open (+27 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.05
Nodes (45): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+37 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

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
Cohesion: 0.15
Nodes (12): API first e chaves de API, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa, Empresa e equipe (+4 more)

### Community 18 - "dependencies"
Cohesion: 0.18
Nodes (11): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+3 more)

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
Cohesion: 0.12
Nodes (16): dot, formatMonth(), periodText(), clients, currency, load(), loadError, money() (+8 more)

### Community 23 - "cn"
Cohesion: 0.12
Nodes (16): panelItem(), railItem(), cn(), kindClass(), tabClass(), choice(), tabClass(), itemClass() (+8 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (25): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+17 more)

### Community 25 - "team/types.ts"
Cohesion: 0.24
Nodes (13): Query, Items, Localized, Page, SiteScope, groupService, Member, MemberDetail (+5 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "Pagination.vue"
Cohesion: 0.22
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (42): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+34 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (26): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+18 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.14
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.12
Nodes (22): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), currency (+14 more)

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

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.07
Nodes (51): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+43 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.13
Nodes (16): company, error, firstName, greeting, load(), lost, networks, router (+8 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.10
Nodes (24): discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+16 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "session.ts"
Cohesion: 0.12
Nodes (18): pinia, toasterTheme, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES (+10 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (13): UserRef, FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+5 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.09
Nodes (32): savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, apiMessage(), canManage, catalog, changed (+24 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, code, copied, copy(), done, dot() (+13 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.09
Nodes (26): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+18 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "NativeSelect.vue"
Cohesion: 0.16
Nodes (15): countryName(), TAX_TYPES, taxTypeLabel(), busy, complete, documentLabel, emit, form (+7 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.12
Nodes (20): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+12 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (20): Task 6: Web — construtor, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.12
Nodes (17): vue, props, up, choose(), langs, session, auditActions, auditText() (+9 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "errorText"
Cohesion: 0.20
Nodes (15): errorText(), load(), saveStart(), confirmEnd(), confirmRemove(), create(), load(), load() (+7 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (41): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+33 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "api.ts"
Cohesion: 0.10
Nodes (17): api, ApiError, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+9 more)

### Community 68 - "package.json"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, vite@^8.3.5, vue-tsc@^3.3.13 (+7 more)

### Community 69 - "reports/types.ts"
Cohesion: 0.07
Nodes (42): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, Key, PERIOD_PRESETS, Lang (+34 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (19): profileInput(), openEdit(), busy, canChange, emit, manager, managerId, next (+11 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.20
Nodes (10): busy, complete, documentLabel, form, load(), loaded, options, save() (+2 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (20): busy, canManage, changed, current, monthNames, months, saved, session (+12 more)

### Community 74 - "reports/rules.ts"
Cohesion: 0.11
Nodes (29): loadDraft(), filterable, layout, AXIS_CHARTS, axisSplit(), BuilderState, canExport(), dimensionSources() (+21 more)

### Community 75 - "clients/types.ts"
Cohesion: 0.38
Nodes (9): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+1 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.08
Nodes (21): broken, hue, initials, props, allGroups, canManage, created(), creating (+13 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (33): busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, contracts, creating (+25 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.09
Nodes (26): BarItem, largest, props, first, FunnelStep, props, opacity(), point() (+18 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (39): busy, canManage, created(), creating, keys, load(), loadError, page (+31 more)

### Community 80 - "ApiError"
Cohesion: 0.04
Nodes (43): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, authService, busy, email, error (+35 more)

### Community 81 - "Query"
Cohesion: 0.47
Nodes (4): costService, Cost, CostInput, FormulaCheck

### Community 82 - "SaveReportDialog.vue"
Cohesion: 0.14
Nodes (11): model, choices, description, emit, invalid, name, open, props (+3 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.11
Nodes (19): @vueuse/core@^15.0.0, @vueuse/core, latestCall(), clientService, clientId, clientOptions, clients, firstPage() (+11 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (22): dimensions, filters, periods, props, CHART_SIZE, clamp(), FILTER_DIMENSIONS, filterPeriod() (+14 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (28): model, busy, category, chipClass(), chosen, emit, groups, name (+20 more)

### Community 90 - "vue-sonner"
Cohesion: 0.07
Nodes (26): vue-sonner@^2.0.9, vue-sonner, ACCENTS, accent, choose(), session, busy, confirm (+18 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (17): model, amount, amountError, busy, chosen, description, emit, open (+9 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+5 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "contracts/rules.ts"
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 96 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (21): formatDate(), locale, td, th, dates, monthName(), payee, PAYER (+13 more)

### Community 97 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.14
Nodes (19): category, categoryOptions, changed, emit, keep, open, props, responsible (+11 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.12
Nodes (20): formatDay(), localToday(), STATUS_TONE, WindowState, windowState(), data, endText(), kpis (+12 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 102 - "sites/rules.ts"
Cohesion: 0.35
Nodes (7): approval(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 103 - "GoalsView.vue"
Cohesion: 0.09
Nodes (32): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+24 more)

### Community 104 - "Button.vue"
Cohesion: 0.11
Nodes (15): open, busy, canManage, description, editing, editingOpen, loadError, page (+7 more)

### Community 105 - "t"
Cohesion: 0.22
Nodes (13): t(), apiMessage(), chooseMine(), duplicate(), makeDefault(), remove(), save(), title (+5 more)

### Community 106 - "dashboards/types.ts"
Cohesion: 0.19
Nodes (15): chosen, create(), emit, name, open, templates, dashboardService, Dashboard (+7 more)

### Community 107 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 108 - "LoginView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 109 - "dashboard-rules.test.ts"
Cohesion: 0.26
Nodes (14): add(), cleanFilters(), filtersChanged(), goalWidget(), kpiWidget(), newWidgetId(), nextRow(), reportWidget() (+6 more)

### Community 110 - "ReportThumb.vue"
Cohesion: 0.08
Nodes (31): pageCount(), pageSlice(), title, metrics, background(), dimensions, metrics, page (+23 more)

### Community 111 - "Button.vue"
Cohesion: 0.16
Nodes (13): lucide-vue-next, reka-ui, pick(), route, router, session, button, classes (+5 more)

### Community 112 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 113 - "DashboardWidget.vue"
Cohesion: 0.14
Nodes (14): apiMessage(), draft, emit, failure, goal, loading, month, props (+6 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "Input.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 116 - "package.json"
Cohesion: 0.14
Nodes (13): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, qrcode@1.5.4, oxlint@^1.89.0, name, packageManager, private, type (+5 more)

### Community 117 - "pick"
Cohesion: 0.15
Nodes (13): pick(), options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions, permName() (+5 more)

### Community 118 - "useSession"
Cohesion: 0.26
Nodes (11): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), useSession (+3 more)

### Community 119 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 120 - "results/service.ts"
Cohesion: 0.32
Nodes (6): CostKind, resultService, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 121 - "contracts/service.ts"
Cohesion: 0.29
Nodes (6): Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary

### Community 122 - "GAM"
Cohesion: 0.40
Nodes (5): Atribuição de sites, GAM, Networks, Sites e ad units, network()

### Community 123 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `errorText`, `ReportsView.vue`, `reports/types.ts`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `reports/rules.ts`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `contracts/rules.ts`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `sites/rules.ts`, `GoalsView.vue`, `Button.vue`, `dashboards/types.ts`, `LoginView.vue`, `ReportThumb.vue`, `Button.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `Input.vue`, `pick`, `useSession`, `loadMembers`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051418439716312055 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `api.ts`, `reports/types.ts`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `events.ts`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `dashboards/types.ts`, `LoginView.vue`, `ReportThumb.vue`, `Button.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `Input.vue`, `package.json`, `useSession`, `SeatBar.vue`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05832147937411095 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ReportsView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `ApiError`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `Button.vue`, `t`, `LoginView.vue`, `Button.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `pick`, `useSession`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._