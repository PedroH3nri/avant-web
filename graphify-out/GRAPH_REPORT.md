# Graph Report - avant-web  (2026-11-02)

## Corpus Check
- 256 files · ~153,012 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2788 nodes · 7176 edges · 137 communities (130 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 81 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1917e079`
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
- pagination-services.test.ts
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
- RecoveryCodes.vue
- AddWidgetDialog.vue
- sites/rules.ts
- GoalsView.vue
- Button.vue
- DashboardFiltersBar.vue
- dashboards/types.ts
- LoadError.vue
- LoginView.vue
- GroupedBarChart.vue
- ReportThumb.vue
- Button.vue
- tailwindcss
- DashboardWidget.vue
- AdjustmentDialog.vue
- Input.vue
- AlertDialog.vue
- pick
- useSession
- vitest
- toNumber
- alerts/rules.ts
- account/service.ts
- loadMembers
- SeatBar.vue
- typescript
- Card.vue
- Input.vue
- groups/service.ts
- ResetView.vue
- BarChart.vue
- router.ts
- CompanyIcon.vue
- Avatar.vue
- sites.test.ts
- @vitejs/plugin-vue
- emptyProfile

## God Nodes (most connected - your core abstractions)
1. `t()` - 299 edges
2. `errorText()` - 204 edges
3. `vue` - 114 edges
4. `ApiError` - 79 edges
5. `useSession` - 64 edges
6. `vue-sonner` - 59 edges
7. `lucide-vue-next` - 58 edges
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

## Communities (137 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.06
Nodes (46): t(), kinds, scopes, emptyDefinition(), readingOrder(), withLayout(), adding, apiMessage() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (45): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+37 more)

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
Nodes (35): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+27 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

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
Cohesion: 0.25
Nodes (8): dependencies, clsx@^2.1.1, lucide-vue-next@^1.0.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44, clsx, tailwind-merge

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (23): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+15 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (18): dot, formatMonth(), periodText(), clients, currency, load(), loadError, money() (+10 more)

### Community 23 - "cn"
Cohesion: 0.12
Nodes (16): panelItem(), railItem(), cn(), kindClass(), tabClass(), tabClass(), dot(), itemClass() (+8 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "pagination-services.test.ts"
Cohesion: 0.22
Nodes (10): api, Query, Items, Page, DashboardPage, contractService, peopleService, Person (+2 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (42): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+34 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.13
Nodes (15): vue-sonner@^2.0.9, vue-sonner, busy, canManage, deleteOpen, deleting, dialog, editing (+7 more)

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
Cohesion: 0.13
Nodes (15): busy, create(), description, duplicate, emit, name, open, people (+7 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.09
Nodes (32): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY, shortDay() (+24 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.14
Nodes (16): company, error, firstName, greeting, load(), lost, networks, router (+8 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), STATUS_TONE, toIssue(), data, kpis, load(), loadError, minus() (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "session.ts"
Cohesion: 0.16
Nodes (17): toasterTheme, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId (+9 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.09
Nodes (31): savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, apiMessage(), canManage, catalog, changed (+23 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

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
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.12
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.13
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.11
Nodes (14): vue, props, up, choose(), langs, session, auditActions, chooseLang() (+6 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "errorText"
Cohesion: 0.17
Nodes (19): errorText(), load(), saveStart(), saveNotes(), load(), remove(), save(), duplicate() (+11 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (33): exportUrl(), download(), busy, canManage, catalog, counts, download(), empty (+25 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "api.ts"
Cohesion: 0.26
Nodes (7): ApiError, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url()

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (28): class-variance-authority@^0.7.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31 (+20 more)

### Community 69 - "reports/types.ts"
Cohesion: 0.07
Nodes (37): Task 3: Web — tipos, serviço e regras do construtor, pinia@^4.1.0, pinia, Lang, customMetricService, reportService, ChartOptions, CustomCatalogMetric (+29 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (33): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+25 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (32): busy, canManage, changed, current, load(), monthNames, months, save() (+24 more)

### Community 74 - "reports/rules.ts"
Cohesion: 0.09
Nodes (37): loadDraft(), filterable, path, shape, AXIS_CHARTS, BuilderState, canExport(), chartAllowed() (+29 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (17): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+9 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (36): busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, confirmEnd(), confirmRemove() (+28 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (25): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, description, empty, first (+17 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "Query"
Cohesion: 0.25
Nodes (8): costService, Cost, CostInput, CostKind, FormulaCheck, CostLine, MonthResult, ResultTotals

### Community 82 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.11
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.11
Nodes (19): @vueuse/core@^15.0.0, @vueuse/core, latestCall(), clientService, clientId, clientOptions, clients, firstPage() (+11 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.13
Nodes (28): add(), CHART_SIZE, clamp(), cleanFilters(), FILTER_DIMENSIONS, filtersChanged(), goalWidget(), GRID_COLUMNS (+20 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (18): canManage, canTeam, editable(), isMe(), loaded, loadError, members, options (+10 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, permissionGroupLabel(), Localized, SiteScope, busy, category, chipClass(), chosen (+29 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (17): amount, amountError, busy, chosen, description, emit, open, options (+9 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.15
Nodes (15): Widget, addFilter(), addTyped(), CHARTS, emit, newField, props, setFilters() (+7 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "contracts/rules.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (19): td, th, dates, monthName(), payee, PAYER, props, STATUS_TONE (+11 more)

### Community 97 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): category, categoryOptions, changed, emit, keep, open, props, responsible (+14 more)

### Community 100 - "RecoveryCodes.vue"
Cohesion: 0.14
Nodes (17): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+9 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.14
Nodes (12): emit, kind, metric, metrics, open, props, ready, reportId (+4 more)

### Community 102 - "sites/rules.ts"
Cohesion: 0.54
Nodes (6): AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): goalService, GoalMode, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 104 - "Button.vue"
Cohesion: 0.09
Nodes (20): open, button, classes, Props, props, open, busy, canManage (+12 more)

### Community 105 - "DashboardFiltersBar.vue"
Cohesion: 0.11
Nodes (16): compare, options, period, selected, Key, PERIOD_PRESETS, dimensions, filters (+8 more)

### Community 106 - "dashboards/types.ts"
Cohesion: 0.16
Nodes (17): chosen, create(), emit, name, open, templates, dashboardService, Dashboard (+9 more)

### Community 107 - "LoadError.vue"
Cohesion: 0.16
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 108 - "LoginView.vue"
Cohesion: 0.16
Nodes (12): auditText(), safeNext(), busy, email, error, next, password, route (+4 more)

### Community 109 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 110 - "ReportThumb.vue"
Cohesion: 0.10
Nodes (23): pageSlice(), title, metrics, dimensions, metrics, page, props, rows (+15 more)

### Community 111 - "Button.vue"
Cohesion: 0.14
Nodes (13): lucide-vue-next, reka-ui, pick(), route, router, session, model, open (+5 more)

### Community 112 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 113 - "DashboardWidget.vue"
Cohesion: 0.17
Nodes (12): apiMessage(), draft, emit, failure, goal, loading, month, props (+4 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, emit, open, props, reason, reasonTouched (+11 more)

### Community 115 - "Input.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 116 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (17): formatDate(), baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit (+9 more)

### Community 117 - "pick"
Cohesion: 0.14
Nodes (14): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+6 more)

### Community 118 - "useSession"
Cohesion: 0.24
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 119 - "vitest"
Cohesion: 0.18
Nodes (5): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, Blank

### Community 120 - "toNumber"
Cohesion: 0.19
Nodes (19): change(), formatMetric(), toNumber(), metricText(), valueText(), money(), yearTotal(), money() (+11 more)

### Community 121 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 122 - "account/service.ts"
Cohesion: 0.21
Nodes (13): UserRef, busy, confirm, load(), session, status, unlink(), ApiKey (+5 more)

### Community 123 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 126 - "Card.vue"
Cohesion: 0.14
Nodes (13): formatAgo(), end(), ending, endingOthers, endOthers(), fail(), load(), loadError (+5 more)

### Community 127 - "Input.vue"
Cohesion: 0.13
Nodes (12): model, busy, email, error, sent, submit(), busy, code (+4 more)

### Community 128 - "groups/service.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), groupService, Group, GroupInput, GroupMember, GroupStatus, free (+1 more)

### Community 129 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 130 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 131 - "router.ts"
Cohesion: 0.22
Nodes (6): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, router, routes

### Community 132 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 133 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 134 - "sites.test.ts"
Cohesion: 0.40
Nodes (3): approval(), tree(), rows

### Community 136 - "emptyProfile"
Cohesion: 0.67
Nodes (3): emptyProfile(), profileInput(), openEdit()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `DashboardsView.vue` to `StaffRolesView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `errorText`, `ReportsView.vue`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `reports/rules.ts`, `AlertsView.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `InviteView.vue`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `contracts/rules.ts`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `RecoveryCodes.vue`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `DashboardFiltersBar.vue`, `dashboards/types.ts`, `LoadError.vue`, `LoginView.vue`, `ReportThumb.vue`, `Button.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `Input.vue`, `AlertDialog.vue`, `pick`, `useSession`, `toNumber`, `alerts/rules.ts`, `account/service.ts`, `loadMembers`, `Card.vue`, `Input.vue`, `ResetView.vue`, `sites.test.ts`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `package.json`, `reports/types.ts`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `InviteView.vue`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `events.ts`, `ClassifySitesDialog.vue`, `RecoveryCodes.vue`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `DashboardFiltersBar.vue`, `dashboards/types.ts`, `LoadError.vue`, `LoginView.vue`, `GroupedBarChart.vue`, `ReportThumb.vue`, `Button.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `Input.vue`, `AlertDialog.vue`, `useSession`, `vitest`, `account/service.ts`, `SeatBar.vue`, `Card.vue`, `Input.vue`, `ResetView.vue`, `BarChart.vue`, `router.ts`, `CompanyIcon.vue`, `Avatar.vue`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05551020408163265 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `ResetView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `session.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ReportsView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `InviteView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `Review Focus`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `GoalsView.vue`, `Button.vue`, `LoadError.vue`, `LoginView.vue`, `Button.vue`, `DashboardWidget.vue`, `AdjustmentDialog.vue`, `AlertDialog.vue`, `pick`, `useSession`, `account/service.ts`, `Card.vue`, `Input.vue`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._