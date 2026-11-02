# Graph Report - avant-web  (2026-11-02)

## Corpus Check
- 247 files · ~146,551 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2656 nodes · 6797 edges · 122 communities (117 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 82 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5b9aedd`
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
- dashboards/rules.ts
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
- InviteView.vue
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
- vue-router
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
- results/types.ts
- SaveReportDialog.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- vue-sonner
- Review Focus
- RolesView.vue
- RoleDialog.vue
- session.ts
- ServiceLineDialog.vue
- ConfigPanel.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- contracts/rules.ts
- InvoicesView.vue
- errorToast
- events.ts
- router.ts
- BarChart.vue
- AddWidgetDialog.vue
- MyCommissionView.vue
- GoalsView.vue
- Button.vue
- RecoveryCodes.vue
- dashboards/types.ts
- Key
- GroupedBarChart.vue
- toNumber
- ReportThumb.vue
- Button.vue
- DashboardWidget.vue
- goals/rules.ts
- AdjustmentDialog.vue
- Input.vue
- vue-router
- LoadError.vue
- useSession
- account/service.ts
- templateValid
- SeatBar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 275 edges
2. `errorText()` - 194 edges
3. `vue` - 110 edges
4. `ApiError` - 75 edges
5. `useSession` - 63 edges
6. `lucide-vue-next` - 57 edges
7. `vue-sonner` - 56 edges
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
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (122 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+36 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.06
Nodes (37): emptyDefinition(), adding, apiMessage(), canManage, catalog, chooseMine(), chosenId, create() (+29 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (53): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+45 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (45): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+37 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.06
Nodes (37): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+29 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (30): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+22 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.12
Nodes (29): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+21 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (38): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+30 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (39): networkName(), adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect (+31 more)

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
Cohesion: 0.12
Nodes (16): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, pinia@^4.1.0, qrcode@1.5.4, reka-ui@^2.11.0 (+8 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.05
Nodes (42): box, failed, initial, props, first, last, numbers, page (+34 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (23): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+15 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.12
Nodes (16): dot, formatMonth(), periodText(), clients, currency, load(), loadError, money() (+8 more)

### Community 23 - "cn"
Cohesion: 0.12
Nodes (16): panelItem(), railItem(), cn(), kindClass(), tabClass(), tabClass(), dot(), itemClass() (+8 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "api.ts"
Cohesion: 0.15
Nodes (16): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+8 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (31): dimensions, filters, periods, props, CHART_SIZE, clamp(), cleanFilters(), FILTER_DIMENSIONS (+23 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (40): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+32 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.09
Nodes (31): approval(), Tone, tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember (+23 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
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
Cohesion: 0.08
Nodes (35): props, up, countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour() (+27 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.15
Nodes (13): companyService, CompanyDetail, CompanyFiscal, company, error, firstName, greeting, load() (+5 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.09
Nodes (25): model, discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen (+17 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.24
Nodes (13): UserRef, FiscalData, invoiceService, AvailableMonth, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+5 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.07
Nodes (40): savedPeriod(), ThumbShape, viewChanged(), viewDraft(), ViewPeriod, exportUrl(), reportService, ReportPreview (+32 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (26): statusTone, validCode(), McmCandidate, Network, NetworkStatus, SyncRun, busy, Check (+18 more)

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
Cohesion: 0.15
Nodes (12): model, busy, complete, documentLabel, emit, form, open, options (+4 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, phone, profile, props, referrer (+9 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.10
Nodes (22): latestCall(), peopleService, Person, Action, busy, confirm(), enable(), fail() (+14 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.13
Nodes (15): vue, choose(), langs, session, auditActions, auditText(), chooseLang(), dict (+7 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.12
Nodes (20): busy, drop(), input, pick(), problem, props, run(), ApiError (+12 more)

### Community 61 - "errorText"
Cohesion: 0.23
Nodes (13): errorText(), load(), saveStart(), choose(), confirmEnd(), confirmRemove(), create(), load() (+5 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (37): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+29 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "vue-router"
Cohesion: 0.10
Nodes (16): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, ReportResult, SavedReport, catalog, me (+8 more)

### Community 68 - "package.json"
Cohesion: 0.08
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "reports/types.ts"
Cohesion: 0.13
Nodes (26): Task 3: Web — tipos, serviço e regras do construtor, Lang, Widget, ReportDraft, ChartOptions, ChartType, CustomCatalogMetric, CustomMetric (+18 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (20): profileBody(), create(), busy, canChange, changeLines, emit, manager, managerId (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.14
Nodes (18): locale, busy, complete, documentLabel, form, load(), loaded, options (+10 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (20): busy, canManage, changed, current, load(), monthNames, months, save() (+12 more)

### Community 74 - "reports/rules.ts"
Cohesion: 0.12
Nodes (30): loadDraft(), AXIS_CHARTS, BuilderState, canExport(), chartAllowed(), dimensionSources(), draftOf(), emptyDraft() (+22 more)

### Community 75 - "clients/types.ts"
Cohesion: 0.17
Nodes (17): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+9 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (17): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+9 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (30): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+22 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (25): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, description, empty, first (+17 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "ApiError"
Cohesion: 0.08
Nodes (19): authService, busy, email, error, sent, submit(), busy, error (+11 more)

### Community 81 - "results/types.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 82 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.10
Nodes (20): broken, hue, initials, props, clientService, clientId, clientOptions, clients (+12 more)

### Community 86 - "vue-sonner"
Cohesion: 0.09
Nodes (19): vue-sonner@^2.0.9, vue-sonner, toasterTheme, busy, current, emit, mismatch, password (+11 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+15 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+28 more)

### Community 90 - "session.ts"
Cohesion: 0.17
Nodes (17): pinia, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme, THEMES (+9 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (20): parseAmount(), amount, amountError, busy, chosen, description, emit, open (+12 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, filterable, LIMITS, newField, periods (+5 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "contracts/rules.ts"
Cohesion: 0.16
Nodes (15): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef, ContractNetwork (+7 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (20): formatDate(), td, th, dates, monthName(), payee, PAYER, props (+12 more)

### Community 97 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 99 - "router.ts"
Cohesion: 0.11
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.13
Nodes (21): add(), emit, kind, kinds, metric, metrics, open, props (+13 more)

### Community 102 - "MyCommissionView.vue"
Cohesion: 0.12
Nodes (20): formatDay(), localToday(), STATUS_TONE, WindowState, windowState(), data, endText(), kpis (+12 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.13
Nodes (20): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+12 more)

### Community 104 - "Button.vue"
Cohesion: 0.11
Nodes (16): open, open, busy, canManage, description, editing, editingOpen, loadError (+8 more)

### Community 105 - "RecoveryCodes.vue"
Cohesion: 0.15
Nodes (16): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+8 more)

### Community 106 - "dashboards/types.ts"
Cohesion: 0.14
Nodes (19): chosen, create(), emit, name, open, templates, dashboardService, Dashboard (+11 more)

### Community 107 - "Key"
Cohesion: 0.20
Nodes (9): compare, options, period, selected, Key, PERIOD_PRESETS, emit, period (+1 more)

### Community 108 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 109 - "toNumber"
Cohesion: 0.20
Nodes (18): change(), formatMetric(), toNumber(), money(), yearTotal(), money(), percent(), money() (+10 more)

### Community 110 - "ReportThumb.vue"
Cohesion: 0.09
Nodes (25): pageSlice(), metrics, dimensions, metrics, page, props, rows, shownRows (+17 more)

### Community 111 - "Button.vue"
Cohesion: 0.15
Nodes (13): lucide-vue-next@^1.0.0, lucide-vue-next, reka-ui, pick(), route, router, session, button (+5 more)

### Community 112 - "DashboardWidget.vue"
Cohesion: 0.15
Nodes (13): apiMessage(), draft, emit, failure, goal, loading, month, props (+5 more)

### Community 113 - "goals/rules.ts"
Cohesion: 0.24
Nodes (9): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+1 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.14
Nodes (18): amount, amountError, busy, emit, open, props, reason, reasonTouched (+10 more)

### Community 115 - "Input.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 116 - "vue-router"
Cohesion: 0.17
Nodes (5): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, Blank

### Community 117 - "LoadError.vue"
Cohesion: 0.18
Nodes (16): pick(), t(), end(), ending, endingOthers, endOthers(), fail(), label() (+8 more)

### Community 118 - "useSession"
Cohesion: 0.24
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 119 - "account/service.ts"
Cohesion: 0.22
Nodes (13): busy, confirm, load(), session, status, unlink(), accountService, ApiKey (+5 more)

### Community 120 - "templateValid"
Cohesion: 0.67
Nodes (3): valid, valid, templateValid()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `LoadError.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `dashboards/rules.ts`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `errorText`, `ReportsView.vue`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `reports/rules.ts`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `vue-sonner`, `RolesView.vue`, `RoleDialog.vue`, `session.ts`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `contracts/rules.ts`, `InvoicesView.vue`, `errorToast`, `router.ts`, `AddWidgetDialog.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `Button.vue`, `RecoveryCodes.vue`, `dashboards/types.ts`, `Key`, `toNumber`, `ReportThumb.vue`, `Button.vue`, `DashboardWidget.vue`, `goals/rules.ts`, `AdjustmentDialog.vue`, `Input.vue`, `useSession`, `account/service.ts`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051418439716312055 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `dashboards/rules.ts`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `vue-router`, `package.json`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `vue-sonner`, `RolesView.vue`, `RoleDialog.vue`, `session.ts`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `events.ts`, `router.ts`, `BarChart.vue`, `AddWidgetDialog.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `Button.vue`, `RecoveryCodes.vue`, `dashboards/types.ts`, `Key`, `GroupedBarChart.vue`, `ReportThumb.vue`, `Button.vue`, `DashboardWidget.vue`, `goals/rules.ts`, `AdjustmentDialog.vue`, `Input.vue`, `vue-router`, `LoadError.vue`, `useSession`, `account/service.ts`, `SeatBar.vue`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05975609756097561 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ReportsView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `ApiError`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `vue-sonner`, `Review Focus`, `RolesView.vue`, `RoleDialog.vue`, `session.ts`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `errorToast`, `router.ts`, `MyCommissionView.vue`, `GoalsView.vue`, `Button.vue`, `Button.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `LoadError.vue`, `useSession`, `account/service.ts`?**
  _High betweenness centrality (0.081) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.048484848484848485 - nodes in this community are weakly interconnected._