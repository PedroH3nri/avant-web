# Graph Report - avant-web  (2026-11-03)

## Corpus Check
- 309 files · ~181,697 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3410 nodes · 8940 edges · 157 communities (148 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 107 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `be129c0b`
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
- GroupsView.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PageViewsView.vue
- HomeView.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- invoices/types.ts
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- NativeSelect.vue
- ClientProfileForm.vue
- useSession
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- ProfileImageCard.vue
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- ClientNetworksView.vue
- views/rules.ts
- AccountManagerCard.vue
- FiscalDataCard.vue
- CompanyGoalCard.vue
- RevenueStatusBadge.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- ReportChart.vue
- reports/rules.ts
- InviteView.vue
- RecoveryCodes.vue
- ChecklistsView.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- dashboards/rules.ts
- ConfigPanel.vue
- RolesView.vue
- RoleDialog.vue
- account/service.ts
- ServiceLineDialog.vue
- dashboards/types.ts
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- TemplatesView.vue
- InvoicesView.vue
- errorToast
- NewGroupDialog.vue
- ClassifySitesDialog.vue
- reports/types.ts
- AddWidgetDialog.vue
- vitest
- GoalsView.vue
- Button.vue
- ResetView.vue
- NewDashboardDialog.vue
- AccountStatus.vue
- contracts/types.ts
- SaveViewDialog.vue
- NewTaskDialog.vue
- FieldsPanel.vue
- MyCommissionView.vue
- DataTable.vue
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- reka-ui
- useSession
- session.ts
- drag.ts
- alerts/rules.ts
- views/types.ts
- InvoiceDocument.vue
- vue-router
- SeatBar.vue
- PasswordCard.vue
- router.ts
- ChecklistNotesCard.vue
- GroupedBarChart.vue
- tasks/types.ts
- AccountManagerCard.vue
- t
- alerts/types.ts
- table.ts
- @vitejs/plugin-vue
- costs/rules.ts
- ApiKeysCard.vue
- priorityLabel
- tasks/rules.ts
- support-tasks.test.ts
- ChecklistView.vue
- loadMembers
- Button.vue
- ChecklistItemDialog.vue
- checklists/rules.ts
- ClientDocumentsCard.vue
- MetricStylePopover.vue
- ChecklistItemsView.vue
- ClientSitesView.vue
- events.ts
- BarChart.vue
- checklists/types.ts
- PageHeader.vue
- FakeSource
- ConfirmDialog.vue
- inviteTaken

## God Nodes (most connected - your core abstractions)
1. `t()` - 396 edges
2. `errorText()` - 245 edges
3. `vue` - 138 edges
4. `ApiError` - 97 edges
5. `lucide-vue-next` - 75 edges
6. `useSession` - 74 edges
7. `vue-sonner` - 73 edges
8. `toNumber()` - 60 edges
9. `cn()` - 55 edges
10. `formatMetric()` - 48 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (157 total, 9 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.04
Nodes (59): emptyProfile(), profileBody(), audit, auditChanged(), auditPage, auditPages, auditTotal, candidates (+51 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState(), toInput(), toQuery(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+39 more)

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
Nodes (35): changeLines, busy, canTransfer, choice(), duplicate, emit, errors, form (+27 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (49): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+41 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

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
Cohesion: 0.10
Nodes (20): formatMonth(), periodText(), clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+12 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (21): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+13 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "api.ts"
Cohesion: 0.15
Nodes (20): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+12 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): amountText(), busy, canManage, check, checkFormula, costs, currencies, currencyOptions (+15 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "Pagination.vue"
Cohesion: 0.25
Nodes (6): first, last, numbers, page, props, pageNumbers()

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (53): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+45 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.11
Nodes (23): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), currency (+15 more)

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
Cohesion: 0.08
Nodes (21): broken, hue, initials, props, allGroups, canManage, created(), creating (+13 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.07
Nodes (51): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+43 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.11
Nodes (25): load(), overview, picker, picking, rows, send(), sending, props (+17 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.08
Nodes (35): savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download(), apiMessage() (+27 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (20): busy, Check, checks, code, copied, copy(), done, dot() (+12 more)

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
Nodes (22): monthKey(), STATUS_TONE, available, chosen, create(), createBusy, createMonth, creating (+14 more)

### Community 51 - "NativeSelect.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "useSession"
Cohesion: 0.09
Nodes (24): vue-sonner, choose(), langs, session, reconnectEvents(), chooseLang(), ACCENTS, accent (+16 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.13
Nodes (15): Action, busy, firstPage(), loadError, open, page, pages, people (+7 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.10
Nodes (17): vue, props, up, auditActions, auditText(), dict, errors, fallbackError (+9 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.15
Nodes (14): box, failed, initial, props, busy, drop(), input, pick() (+6 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.07
Nodes (36): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+28 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.08
Nodes (31): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+23 more)

### Community 69 - "ClientNetworksView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), clientInventoryService, firstPage(), load(), loadError, networks, networksCall, page (+5 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.17
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (18): profileInput(), busy, canChange, emit, manager, managerId, next, NOTE_KEY (+10 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.08
Nodes (32): locale, busy, canManage, changed, current, monthNames, months, saved (+24 more)

### Community 74 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (33): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+25 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.06
Nodes (41): first, FunnelStep, props, title, description, empty, first, firstFormat (+33 more)

### Community 79 - "reports/rules.ts"
Cohesion: 0.07
Nodes (45): apiMessage(), draft, emit, failure, goal, grabTitle(), loadDraft(), loading (+37 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "RecoveryCodes.vue"
Cohesion: 0.09
Nodes (25): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+17 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (31): drag, emit, grid, ordered, props, source, cellSize(), DragMode (+23 more)

### Community 87 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (18): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+10 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (35): model, permissionGroupLabel(), Localized, SiteScope, busy, category, chosen, emit (+27 more)

### Community 90 - "account/service.ts"
Cohesion: 0.21
Nodes (12): busy, confirm, load(), session, status, unlink(), ApiKey, ApiKeyCreated (+4 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (20): amount, amountError, busy, chosen, description, emit, open, options (+12 more)

### Community 92 - "dashboards/types.ts"
Cohesion: 0.13
Nodes (21): dimensions, filters, periods, props, filterPeriod(), withPeriod(), withValue(), Dashboard (+13 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+11 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (17): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+9 more)

### Community 97 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 98 - "NewGroupDialog.vue"
Cohesion: 0.10
Nodes (23): busy, create(), description, duplicate, emit, name, open, people (+15 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): category, categoryOptions, changed, emit, keep, open, props, responsible (+14 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.08
Nodes (34): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, period, props, customMetricService, reportService, ChartOptions (+26 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (27): add(), emit, kind, kinds, metric, metrics, open, props (+19 more)

### Community 102 - "vitest"
Cohesion: 0.30
Nodes (8): vitest, approval(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 104 - "Button.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 105 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 106 - "NewDashboardDialog.vue"
Cohesion: 0.13
Nodes (13): model, busy, email, error, sent, submit(), chosen, create() (+5 more)

### Community 107 - "AccountStatus.vue"
Cohesion: 0.14
Nodes (15): company, error, hasSeats, load(), lost, networks, router, session (+7 more)

### Community 108 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 112 - "MyCommissionView.vue"
Cohesion: 0.11
Nodes (21): formatDay(), localToday(), STATUS_TONE, WindowState, windowState(), commissionService, data, endText() (+13 more)

### Community 113 - "DataTable.vue"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento (+12 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.22
Nodes (12): amount, amountError, busy, emit, open, props, reason, reasonTouched (+4 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (30): blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition, TemplateAudience (+22 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (17): formatDate(), baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit (+9 more)

### Community 117 - "reka-ui"
Cohesion: 0.12
Nodes (20): lucide-vue-next, reka-ui, route, router, session, panelItem(), railItem(), open (+12 more)

### Community 118 - "useSession"
Cohesion: 0.27
Nodes (10): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), activeLabels() (+2 more)

### Community 119 - "session.ts"
Cohesion: 0.16
Nodes (16): toasterTheme, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId (+8 more)

### Community 120 - "drag.ts"
Cohesion: 0.71
Nodes (7): useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop()

### Community 121 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 122 - "views/types.ts"
Cohesion: 0.24
Nodes (10): viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewDefinition, ViewFilterSpec (+2 more)

### Community 123 - "InvoiceDocument.vue"
Cohesion: 0.27
Nodes (5): dates, monthName(), payee, PAYER, props

### Community 124 - "vue-router"
Cohesion: 0.12
Nodes (7): pinia, catalog, me, report, result, service, Blank

### Community 126 - "PasswordCard.vue"
Cohesion: 0.15
Nodes (11): ApiError, busy, current, emit, mismatch, password, password2, ready (+3 more)

### Community 127 - "router.ts"
Cohesion: 0.09
Nodes (22): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, next (+14 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.15
Nodes (18): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+10 more)

### Community 132 - "t"
Cohesion: 0.11
Nodes (31): Task 6: Web — construtor, pick(), errorText(), t(), confirmRemove(), load(), save(), load() (+23 more)

### Community 133 - "alerts/types.ts"
Cohesion: 0.42
Nodes (7): Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 134 - "table.ts"
Cohesion: 0.18
Nodes (11): td, th, events, load(), loadError, open, page, pages (+3 more)

### Community 136 - "costs/rules.ts"
Cohesion: 0.16
Nodes (17): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+9 more)

### Community 137 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 138 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 140 - "support-tasks.test.ts"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, splitRows(), checklistService, checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 143 - "Button.vue"
Cohesion: 0.12
Nodes (14): button, classes, Props, props, choices, description, emit, invalid (+6 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "checklists/rules.ts"
Cohesion: 0.16
Nodes (14): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+6 more)

### Community 146 - "ClientDocumentsCard.vue"
Cohesion: 0.20
Nodes (14): download(), approve(), busy, downloadFile(), emit, fail(), load(), overview (+6 more)

### Community 147 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (11): dot, checklistItemService, canManage, dialogOpen, editing, items, load(), loadError (+3 more)

### Community 149 - "ClientSitesView.vue"
Cohesion: 0.18
Nodes (12): canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites, searchText (+4 more)

### Community 150 - "events.ts"
Cohesion: 0.23
Nodes (10): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+2 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "checklists/types.ts"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 153 - "PageHeader.vue"
Cohesion: 0.40
Nodes (3): firstName, greeting, session

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `useSession`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientNetworksView.vue`, `views/rules.ts`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ReportChart.vue`, `reports/rules.ts`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `ConfigPanel.vue`, `RolesView.vue`, `RoleDialog.vue`, `account/service.ts`, `ServiceLineDialog.vue`, `dashboards/types.ts`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `errorToast`, `NewGroupDialog.vue`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `vitest`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `NewDashboardDialog.vue`, `AccountStatus.vue`, `contracts/types.ts`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `MyCommissionView.vue`, `DataTable.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `alerts/rules.ts`, `InvoiceDocument.vue`, `PasswordCard.vue`, `router.ts`, `ChecklistNotesCard.vue`, `table.ts`, `ApiKeysCard.vue`, `priorityLabel`, `tasks/rules.ts`, `ChecklistView.vue`, `loadMembers`, `Button.vue`, `ChecklistItemDialog.vue`, `checklists/rules.ts`, `ClientDocumentsCard.vue`, `MetricStylePopover.vue`, `ChecklistItemsView.vue`, `ClientSitesView.vue`, `PageHeader.vue`, `ConfirmDialog.vue`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050170068027210885 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `useSession`, `PeopleView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ReportChart.vue`, `reports/rules.ts`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `ConfigPanel.vue`, `RolesView.vue`, `RoleDialog.vue`, `account/service.ts`, `ServiceLineDialog.vue`, `dashboards/types.ts`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `NewGroupDialog.vue`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `NewDashboardDialog.vue`, `AccountStatus.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `MyCommissionView.vue`, `DataTable.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `InvoiceDocument.vue`, `vue-router`, `SeatBar.vue`, `PasswordCard.vue`, `router.ts`, `ChecklistNotesCard.vue`, `GroupedBarChart.vue`, `table.ts`, `ApiKeysCard.vue`, `ChecklistView.vue`, `Button.vue`, `ChecklistItemDialog.vue`, `ClientDocumentsCard.vue`, `MetricStylePopover.vue`, `ChecklistItemsView.vue`, `ClientSitesView.vue`, `events.ts`, `BarChart.vue`, `PageHeader.vue`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04934687953555878 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `useSession`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `reports/rules.ts`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `account/service.ts`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `errorToast`, `NewGroupDialog.vue`, `ClassifySitesDialog.vue`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `NewDashboardDialog.vue`, `AccountStatus.vue`, `NewTaskDialog.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `PasswordCard.vue`, `router.ts`, `ChecklistNotesCard.vue`, `table.ts`, `ApiKeysCard.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ClientDocumentsCard.vue`, `ChecklistItemsView.vue`, `ClientSitesView.vue`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04480874316939891 - nodes in this community are weakly interconnected._