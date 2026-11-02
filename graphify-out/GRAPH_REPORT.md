# Graph Report - avant-web  (2026-11-02)

## Corpus Check
- 270 files · ~159,212 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2932 nodes · 7547 edges · 135 communities (130 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 82 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9cf044dd`
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
- SavedViewsBar.vue
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
- ApiError
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
- views/types.ts
- AccountManagerCard.vue
- FiscalDataCard.vue
- CompanyGoalCard.vue
- reports/rules.ts
- AlertsView.vue
- ApiKeysCard.vue
- ContractsView.vue
- toNumber
- ApiKeysCard.vue
- InviteView.vue
- Query
- DashboardWidget.vue
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
- ResetView.vue
- NewDashboardDialog.vue
- table.ts
- schedules/rules.ts
- SaveViewDialog.vue
- loadReports
- cn
- MyCommissionView.vue
- add
- AdjustmentDialog.vue
- contracts/types.ts
- AlertDialog.vue
- schedules/types.ts
- useSession
- session.ts
- FunnelChart.vue
- alerts/rules.ts
- GAM
- InvoiceDocument.vue
- SeatBar.vue
- ScheduleDialog.vue
- tailwindcss
- router.ts
- t
- BarChart.vue
- lang
- alerts/types.ts
- vitest
- TeamTabs.vue
- exportUrl

## God Nodes (most connected - your core abstractions)
1. `t()` - 322 edges
2. `errorText()` - 212 edges
3. `vue` - 118 edges
4. `ApiError` - 82 edges
5. `useSession` - 66 edges
6. `lucide-vue-next` - 62 edges
7. `vue-sonner` - 62 edges
8. `toNumber()` - 57 edges
9. `cn()` - 54 edges
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
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (135 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.06
Nodes (37): emptyDefinition(), adding, apiMessage(), canManage, catalog, chooseMine(), chosenId, create() (+29 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (48): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+40 more)

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
Nodes (30): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+22 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (39): busy, canTransfer, duplicate, emit, errors, form, open, props (+31 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (35): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+27 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (27): MetricValues, barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric (+19 more)

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
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, qrcode@1.5.4, reka-ui@^2.11.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.05
Nodes (41): pick(), metricOptions, ruleText(), options, transferOptions, ruleEnd(), setGoal(), busy (+33 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.12
Nodes (16): locale, formatMonth(), periodText(), clients, currency, load(), loadError, money() (+8 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.10
Nodes (22): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+14 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (25): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+17 more)

### Community 25 - "api.ts"
Cohesion: 0.16
Nodes (18): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+10 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (51): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+43 more)

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
Cohesion: 0.06
Nodes (40): busy, create(), description, duplicate, emit, name, open, people (+32 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.08
Nodes (38): compare, options, period, selected, countryName(), dailySeries(), daysOf(), hourLabel() (+30 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.15
Nodes (13): companyService, CompanyDetail, CompanyFiscal, company, error, firstName, greeting, load() (+5 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.10
Nodes (24): discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+16 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ApiError"
Cohesion: 0.09
Nodes (21): vue-sonner, choose(), langs, session, ApiError, chooseLang(), ACCENTS, accent (+13 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.09
Nodes (31): savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, apiMessage(), canManage, catalog, changed (+23 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.08
Nodes (31): networkName(), statusTone, validCode(), McmCandidate, Network, NetworkStatus, SyncRun, busy (+23 more)

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
Cohesion: 0.09
Nodes (26): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+18 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

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
Cohesion: 0.13
Nodes (13): vue, props, up, open, auditActions, auditText(), dict, errors (+5 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "errorText"
Cohesion: 0.20
Nodes (15): errorText(), choose(), load(), saveStart(), confirmEnd(), confirmRemove(), create(), load() (+7 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (29): busy, canManage, catalog, counts, empty, Layout, layout, layouts (+21 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.09
Nodes (22): allOptions(), busy, canManage, confirmRemove(), dashboards, editing, formOpen, load() (+14 more)

### Community 68 - "package.json"
Cohesion: 0.11
Nodes (24): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+16 more)

### Community 69 - "reports/types.ts"
Cohesion: 0.07
Nodes (16): pinia@^4.1.0, pinia, vue-router, RouteMeta, vue-router, catalog, me, report (+8 more)

### Community 70 - "views/types.ts"
Cohesion: 0.16
Nodes (19): applyView(), current, sortOptions, cleanFilters(), firstValue(), normalized(), parseSort(), sameDefinition() (+11 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (26): UserRef, CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange (+18 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): busy, complete, documentLabel, form, load(), loaded, options, save() (+6 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (29): busy, canManage, changed, current, monthNames, months, saved, session (+21 more)

### Community 74 - "reports/rules.ts"
Cohesion: 0.08
Nodes (44): loadDraft(), filterable, applyScale(), emit, error, from, gradient(), mode (+36 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (33): busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, contracts, creating (+25 more)

### Community 78 - "toNumber"
Cohesion: 0.06
Nodes (66): change(), formatMetric(), toNumber(), pageCount(), pageSlice(), metricText(), valueText(), money() (+58 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.13
Nodes (22): end(), ending, endingOthers, endOthers(), fail(), label(), load(), loadError (+14 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "Query"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 82 - "DashboardWidget.vue"
Cohesion: 0.07
Nodes (39): Task 3: Web — tipos, serviço e regras do construtor, apiMessage(), draft, emit, failure, goal, loading, month (+31 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.12
Nodes (17): latestCall(), clientService, clientId, clientOptions, clients, firstPage(), load(), loadError (+9 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (26): CHART_SIZE, clamp(), cleanFilters(), FILTER_DIMENSIONS, filtersChanged(), GRID_COLUMNS, gridArea(), KPI_SIZE (+18 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+28 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (15): amount, amountError, busy, chosen, description, emit, open, options (+7 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.10
Nodes (19): dimensions, filters, periods, props, filterPeriod(), FilterDimension, addFilter(), addTyped() (+11 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "contracts/rules.ts"
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 96 - "InvoicesView.vue"
Cohesion: 0.13
Nodes (12): model, invoiceService, InvoiceStatus, invoices, load(), loadError, month, page (+4 more)

### Community 97 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): category, categoryOptions, changed, emit, keep, open, props, responsible (+14 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.11
Nodes (26): Key, Lang, emit, period, props, customMetricService, ChartOptions, CustomCatalogMetric (+18 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 102 - "sites/rules.ts"
Cohesion: 0.35
Nodes (7): approval(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 104 - "Button.vue"
Cohesion: 0.09
Nodes (21): lucide-vue-next, button, classes, Props, props, busy, canManage, description (+13 more)

### Community 105 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 106 - "NewDashboardDialog.vue"
Cohesion: 0.29
Nodes (7): chosen, create(), emit, name, open, templates, dashboardService

### Community 107 - "table.ts"
Cohesion: 0.18
Nodes (11): td, th, events, load(), loadError, open, page, pages (+3 more)

### Community 108 - "schedules/rules.ts"
Cohesion: 0.17
Nodes (15): hourOptions, zoneOptions, browserTimezone(), HOURS, hourText(), MONTH_DAYS, SCHEDULE_FREQUENCIES, ScheduleForm (+7 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 110 - "loadReports"
Cohesion: 0.32
Nodes (8): duplicate(), firstPage(), load(), loadPinned(), loadReports(), remove(), reportsCall, togglePin()

### Community 111 - "cn"
Cohesion: 0.10
Nodes (26): reka-ui, pick(), route, router, session, panelItem(), railItem(), cn() (+18 more)

### Community 112 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 113 - "add"
Cohesion: 0.57
Nodes (7): add(), goalWidget(), kpiWidget(), newWidgetId(), nextRow(), reportWidget(), textWidget()

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "contracts/types.ts"
Cohesion: 0.29
Nodes (6): Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary

### Community 116 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 117 - "schedules/types.ts"
Cohesion: 0.48
Nodes (5): scheduleService, Schedule, ScheduleDelivery, ScheduleInput, SchedulePage

### Community 118 - "useSession"
Cohesion: 0.24
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 119 - "session.ts"
Cohesion: 0.19
Nodes (14): toasterTheme, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId (+6 more)

### Community 120 - "FunnelChart.vue"
Cohesion: 0.33
Nodes (3): first, FunnelStep, props

### Community 121 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 122 - "GAM"
Cohesion: 0.40
Nodes (5): Atribuição de sites, GAM, Networks, Sites e ad units, network()

### Community 123 - "InvoiceDocument.vue"
Cohesion: 0.20
Nodes (10): dot, formatDate(), previewDay, dates, monthName(), payee, PAYER, props (+2 more)

### Community 125 - "ScheduleDialog.vue"
Cohesion: 0.18
Nodes (10): body, busy, emit, form, monthDayOptions, open, Option, props (+2 more)

### Community 126 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 127 - "router.ts"
Cohesion: 0.07
Nodes (25): model, safeNext(), busy, email, error, sent, submit(), busy (+17 more)

### Community 128 - "t"
Cohesion: 0.18
Nodes (12): open, open, t(), tn(), changeLines, roleLine(), description, frequencyOptions (+4 more)

### Community 130 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 131 - "lang"
Cohesion: 0.20
Nodes (8): lang, client, managerChange, perms, settings, staffOptions, team, toastError

### Community 134 - "alerts/types.ts"
Cohesion: 0.46
Nodes (6): Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 135 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 136 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 140 - "exportUrl"
Cohesion: 0.50
Nodes (4): exportUrl(), download(), download(), download()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ApiError`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `errorText`, `ReportsView.vue`, `SchedulesView.vue`, `views/types.ts`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `reports/rules.ts`, `AlertsView.vue`, `ApiKeysCard.vue`, `ContractsView.vue`, `toNumber`, `ApiKeysCard.vue`, `InviteView.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `contracts/rules.ts`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `sites/rules.ts`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `NewDashboardDialog.vue`, `table.ts`, `schedules/rules.ts`, `SaveViewDialog.vue`, `loadReports`, `cn`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `AlertDialog.vue`, `useSession`, `alerts/rules.ts`, `InvoiceDocument.vue`, `ScheduleDialog.vue`, `router.ts`, `TeamTabs.vue`?**
  _High betweenness centrality (0.145) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ApiError`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `SchedulesView.vue`, `package.json`, `reports/types.ts`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `reports/rules.ts`, `AlertsView.vue`, `ApiKeysCard.vue`, `ContractsView.vue`, `toNumber`, `ApiKeysCard.vue`, `InviteView.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `events.ts`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `NewDashboardDialog.vue`, `table.ts`, `SaveViewDialog.vue`, `cn`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `AlertDialog.vue`, `useSession`, `session.ts`, `FunnelChart.vue`, `InvoiceDocument.vue`, `SeatBar.vue`, `ScheduleDialog.vue`, `router.ts`, `BarChart.vue`, `TeamTabs.vue`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05975609756097561 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ApiError`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ReportsView.vue`, `SchedulesView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `ApiKeysCard.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `InviteView.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `PasswordCard.vue`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `table.ts`, `loadReports`, `cn`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `AlertDialog.vue`, `useSession`, `ScheduleDialog.vue`, `router.ts`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._