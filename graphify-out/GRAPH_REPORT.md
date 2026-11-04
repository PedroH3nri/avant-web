# Graph Report - avant-web  (2026-11-04)

## Corpus Check
- 323 files · ~191,800 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3553 nodes · 9371 edges · 157 communities (151 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2bab617d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- SessionsCard.vue
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
- SidebarNav.vue
- ApiKeyDialog.vue
- api
- CostsView.vue
- Arquitetura do MVP do Avant
- PageViewsView.vue
- ClientsView.vue
- RoleDialog.vue
- SiteDetailView.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- GroupsView.vue
- Review Focus
- PageViewsView.vue
- GroupedBarChart.vue
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- errorToast
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- errorText
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- api.ts
- .oxlintrc.json
- t
- avant-web
- load
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- GoogleCard.vue
- devDependencies
- reports/rules.ts
- MetricStylePopover.vue
- clients/service.ts
- GroupsView.vue
- CompanyGoalCard.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- MetricStylePopover.vue
- Input.vue
- results/types.ts
- reports/rules.ts
- GAM
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- api.ts
- RolesView.vue
- inviteTaken
- GoogleCard.vue
- CompanyIcon.vue
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- TeamTabs.vue
- DashboardWidget.vue
- events.ts
- MfaView.vue
- MyCommissionView.vue
- Pagination.vue
- t
- GoalsView.vue
- networkName
- useSession
- errorText
- ClientSitesView.vue
- loadMembers
- SaveViewDialog.vue
- NewTaskDialog.vue
- TeamTabs.vue
- vitest
- checklists/types.ts
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- LoginView.vue
- AccountStatus.vue
- vue
- drag.ts
- ProfileImageCard.vue
- cn
- GamRunView.vue
- alerts/types.ts
- gam_tools/types.ts
- PasswordCard.vue
- i18n.ts
- ChecklistNotesCard.vue
- firstValue
- tasks/types.ts
- AccountManagerCard.vue
- commission-components.test.ts
- alerts/types.ts
- Button.vue
- vitest
- costs/rules.ts
- ApiKeysCard.vue
- priorityLabel
- tasks/rules.ts
- lang
- ChecklistView.vue
- loadReports
- reports/rules.ts
- ChecklistItemDialog.vue
- checklists/rules.ts
- SeatBar.vue
- costs/service.ts
- ChecklistItemsView.vue
- errorToast
- events.ts
- BarChart.vue
- views/types.ts
- PageBody.vue
- CompanyIcon.vue
- loadMembers
- inviteTaken

## God Nodes (most connected - your core abstractions)
1. `t()` - 416 edges
2. `errorText()` - 257 edges
3. `vue` - 142 edges
4. `ApiError` - 101 edges
5. `lucide-vue-next` - 77 edges
6. `useSession` - 77 edges
7. `vue-sonner` - 76 edges
8. `toNumber()` - 59 edges
9. `cn()` - 55 edges
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

## Communities (157 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.04
Nodes (58): profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal, candidates (+50 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (48): builderState, emptyDraft(), fromTemplate(), toInput(), withMetrics(), apiMessage(), askRemoveMetric(), busy (+40 more)

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
Nodes (39): busy, canTransfer, duplicate, emit, errors, form, open, props (+31 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (46): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+38 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.07
Nodes (35): props, up, presetRange(), previousRange(), sameRange(), shiftDay(), utcToday(), load() (+27 more)

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
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+12 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (26): busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email, emailOk (+18 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, month (+8 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (26): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+18 more)

### Community 25 - "api"
Cohesion: 0.26
Nodes (10): api, Query, Items, Page, groupService, GroupInput, contractService, staffService (+2 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "PageViewsView.vue"
Cohesion: 0.09
Nodes (43): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+35 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (53): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+45 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.07
Nodes (26): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirmOpen (+18 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.07
Nodes (34): approval(), tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch (+26 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

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

### Community 37 - "GroupsView.vue"
Cohesion: 0.10
Nodes (22): busy, create(), description, duplicate, emit, name, open, people (+14 more)

### Community 38 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.15
Nodes (19): drag, emit, grid, ordered, props, { run, failure, loading }, source, widgetFailure() (+11 more)

### Community 40 - "GroupedBarChart.vue"
Cohesion: 0.17
Nodes (14): clientInventoryService, ClientNetwork, ClientRef, ClientSite, firstPage(), load(), loadError, networks (+6 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (31): toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail (+23 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.08
Nodes (38): load(), overview, picker, picking, rows, send(), sending, props (+30 more)

### Community 44 - "errorToast"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (40): NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), ReportPreview (+32 more)

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

### Community 50 - "contracts/types.ts"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "errorText"
Cohesion: 0.15
Nodes (17): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), busy, complete, documentLabel, emit (+9 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.14
Nodes (12): model, ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+4 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.06
Nodes (50): first, FunnelStep, props, pageSlice(), title, empty, first, firstFormat (+42 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.07
Nodes (30): Task 6: Web — construtor, first, last, numbers, page, props, PAGE_SIZE, pageCount() (+22 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "api.ts"
Cohesion: 0.06
Nodes (19): vue-router@^5.4.0, pinia, vue, vue-router, RouteMeta, vue-router, open, router (+11 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "load"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.07
Nodes (28): busy, canManage, catalog, counts, empty, Layout, layouts, loadError (+20 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.05
Nodes (53): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+45 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "reports/rules.ts"
Cohesion: 0.10
Nodes (32): emit, missingDates, options, props, setDate(), setMode(), filterable, AXIS_CHARTS (+24 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.23
Nodes (12): current, current, rows, current, current, current, dirty, cleanFilters() (+4 more)

### Community 71 - "clients/service.ts"
Cohesion: 0.18
Nodes (17): CompanyStatus, NOTE_MAX, NOTE_MIN, STAFF_STATUSES, STATUS_TONE, AuditEntry, Client, ClientDetail (+9 more)

### Community 72 - "GroupsView.vue"
Cohesion: 0.08
Nodes (21): broken, hue, initials, props, allGroups, canManage, created(), creating (+13 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.08
Nodes (31): busy, canManage, changed, current, monthNames, months, saved, session (+23 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.05
Nodes (37): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+29 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 79 - "MetricStylePopover.vue"
Cohesion: 0.19
Nodes (14): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+6 more)

### Community 80 - "Input.vue"
Cohesion: 0.10
Nodes (24): Me, authService, InvitationPreview, LoginResult, accept(), busy, error, formOk (+16 more)

### Community 81 - "results/types.ts"
Cohesion: 0.12
Nodes (24): AccentId, CompanyRef, Theme, UserRef, end(), ending, endingOthers, endOthers() (+16 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (16): clientService, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.08
Nodes (44): add(), emit, dimensions, filters, periods, props, ACCOUNT_SIZE, accountWidget() (+36 more)

### Community 87 - "api.ts"
Cohesion: 0.14
Nodes (17): ApiError, baseHeaders(), download(), readCookie(), request(), RequestOptions, SAFE, setCompanyChangedHandler() (+9 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "inviteTaken"
Cohesion: 0.08
Nodes (35): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+27 more)

### Community 90 - "GoogleCard.vue"
Cohesion: 0.15
Nodes (10): pick(), route, router, session, busy, confirm, load(), session (+2 more)

### Community 91 - "CompanyIcon.vue"
Cohesion: 0.13
Nodes (16): amount, amountError, busy, chosen, description, emit, open, options (+8 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): defaultSites(), languageLabel(), saveFile(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 96 - "TeamTabs.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 97 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (20): draft, emit, failure, goal, goalFailure, goalLoading, grabTitle(), loadDraft() (+12 more)

### Community 98 - "events.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.13
Nodes (21): category, categoryOptions, changed, emit, keep, open, props, responsible (+13 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 101 - "Pagination.vue"
Cohesion: 0.11
Nodes (16): kind, kinds, metric, metrics, open, props, ready, reportId (+8 more)

### Community 102 - "t"
Cohesion: 0.14
Nodes (13): open, open, t(), clientOptions, columnLabel(), delegationLabel(), filterOptions, revshareError (+5 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (24): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+16 more)

### Community 104 - "networkName"
Cohesion: 0.11
Nodes (18): lucide-vue-next, button, classes, Props, busy, canManage, description, editing (+10 more)

### Community 105 - "useSession"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 106 - "errorText"
Cohesion: 0.14
Nodes (20): errorText(), choose(), created(), load(), revoke(), load(), choose(), load() (+12 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 108 - "loadMembers"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.08
Nodes (23): model, Dashboard, DashboardInput, choices, description, emit, invalid, name (+15 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 112 - "vitest"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 113 - "checklists/types.ts"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.07
Nodes (46): chosen, create(), emit, name, open, templates, dashboardService, templateService (+38 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.17
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+10 more)

### Community 117 - "LoginView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 118 - "AccountStatus.vue"
Cohesion: 0.15
Nodes (15): company, error, hasSeats, load(), lost, networks, router, session (+7 more)

### Community 119 - "vue"
Cohesion: 0.11
Nodes (24): vue-sonner, toasterTheme, choose(), langs, session, chooseLang(), Accent, accentCss() (+16 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "ProfileImageCard.vue"
Cohesion: 0.28
Nodes (8): formatDate(), dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 122 - "cn"
Cohesion: 0.12
Nodes (23): reka-ui, panelItem(), railItem(), cn(), kindClass(), tab(), choice(), valueClass() (+15 more)

### Community 123 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 124 - "alerts/types.ts"
Cohesion: 0.42
Nodes (7): Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.15
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 127 - "i18n.ts"
Cohesion: 0.07
Nodes (25): auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo(), index (+17 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "firstValue"
Cohesion: 0.31
Nodes (9): applyView(), sortOptions, applyView(), sortOptions, applyView(), applyView(), firstValue(), periodMonth() (+1 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (20): profileBody(), profileInput(), openEdit(), busy, canChange, emit, manager, managerId (+12 more)

### Community 132 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 133 - "alerts/types.ts"
Cohesion: 0.18
Nodes (11): td, th, events, load(), loadError, open, page, pages (+3 more)

### Community 134 - "Button.vue"
Cohesion: 0.09
Nodes (23): busy, complete, documentLabel, form, load(), loaded, options, save() (+15 more)

### Community 135 - "vitest"
Cohesion: 0.22
Nodes (4): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils

### Community 136 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 137 - "ApiKeysCard.vue"
Cohesion: 0.13
Nodes (14): busy, canManage, creating, keys, loadError, page, pages, permsText() (+6 more)

### Community 138 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 140 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, splitRows(), checklistService, checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "loadReports"
Cohesion: 0.32
Nodes (8): duplicate(), firstPage(), load(), loadPinned(), loadReports(), remove(), reportsCall, togglePin()

### Community 143 - "reports/rules.ts"
Cohesion: 0.06
Nodes (53): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, Key, PERIOD_PRESETS, Lang (+45 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "checklists/rules.ts"
Cohesion: 0.17
Nodes (13): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), rowState, rowStateLabel() (+5 more)

### Community 147 - "costs/service.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (11): dot, checklistItemService, canManage, dialogOpen, editing, items, load(), loadError (+3 more)

### Community 149 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 150 - "events.ts"
Cohesion: 0.14
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated (+5 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "views/types.ts"
Cohesion: 0.18
Nodes (13): props, shown, toggleColumn(), viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog (+5 more)

### Community 153 - "PageBody.vue"
Cohesion: 0.33
Nodes (3): firstName, greeting, session

### Community 154 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 155 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `PageViewsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `GroupedBarChart.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `api.ts`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `reports/rules.ts`, `clients/service.ts`, `GroupsView.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `Input.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `inviteTaken`, `GoogleCard.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `DashboardWidget.vue`, `events.ts`, `MfaView.vue`, `MyCommissionView.vue`, `Pagination.vue`, `GoalsView.vue`, `networkName`, `useSession`, `errorText`, `ClientSitesView.vue`, `loadMembers`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `TeamTabs.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `LoginView.vue`, `AccountStatus.vue`, `vue`, `ProfileImageCard.vue`, `cn`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `firstValue`, `AccountManagerCard.vue`, `alerts/types.ts`, `Button.vue`, `vitest`, `costs/rules.ts`, `ApiKeysCard.vue`, `priorityLabel`, `tasks/rules.ts`, `ChecklistView.vue`, `loadReports`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `checklists/rules.ts`, `ChecklistItemsView.vue`, `errorToast`, `views/types.ts`, `PageBody.vue`, `loadMembers`?**
  _High betweenness centrality (0.214) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `api.ts` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `PageViewsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `GroupedBarChart.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `reports/rules.ts`, `GroupsView.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `Input.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `inviteTaken`, `GoogleCard.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `DashboardWidget.vue`, `MfaView.vue`, `MyCommissionView.vue`, `Pagination.vue`, `GoalsView.vue`, `networkName`, `useSession`, `ClientSitesView.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `TeamTabs.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `LoginView.vue`, `AccountStatus.vue`, `vue`, `drag.ts`, `ProfileImageCard.vue`, `cn`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `alerts/types.ts`, `Button.vue`, `vitest`, `ApiKeysCard.vue`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `SeatBar.vue`, `ChecklistItemsView.vue`, `events.ts`, `BarChart.vue`, `PageBody.vue`, `CompanyIcon.vue`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `PageViewsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Review Focus`, `PageViewsView.vue`, `GroupedBarChart.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `PeopleView.vue`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `GroupsView.vue`, `CompanyGoalCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `Input.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `api.ts`, `RolesView.vue`, `inviteTaken`, `GoogleCard.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `tailwindcss`, `TeamTabs.vue`, `DashboardWidget.vue`, `MfaView.vue`, `MyCommissionView.vue`, `t`, `GoalsView.vue`, `networkName`, `useSession`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `LoginView.vue`, `AccountStatus.vue`, `vue`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `alerts/types.ts`, `Button.vue`, `ApiKeysCard.vue`, `ChecklistView.vue`, `loadReports`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `errorToast`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04463276836158192 - nodes in this community are weakly interconnected._