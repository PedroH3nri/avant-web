# Graph Report - avant-web  (2026-11-05)

## Corpus Check
- 337 files · ~194,828 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3616 nodes · 9509 edges · 161 communities (155 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 113 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `eeaf10fe`
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
- dashboards/rules.ts
- SidebarNav.vue
- ApiKeyDialog.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- GroupsView.vue
- ClientsView.vue
- RoleDialog.vue
- SiteDetailView.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- cn
- Review Focus
- DashboardGrid.vue
- PageHeader.vue
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- ServiceLineDialog.vue
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- errorText
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- AccountManagerCard.vue
- .oxlintrc.json
- CompanyImageCard.vue
- avant-web
- load
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- GoogleCard.vue
- devDependencies
- ClientDocumentsCard.vue
- InvoicesView.vue
- InviteView.vue
- invoices/rules.ts
- GoalsView.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ClientsResultsView.vue
- TemplatesView.vue
- LoginView.vue
- gam_tools/rules.ts
- reports/rules.ts
- GAM
- AccentCard.vue
- ClientTeamsView.vue
- CompanyGoalCard.vue
- lib/types.ts
- RolesView.vue
- inviteTaken
- locale
- MetricStylePopover.vue
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- reka-ui
- ClientNetworksView.vue
- DashboardWidget.vue
- GamRunView.vue
- api.ts
- MyCommissionView.vue
- AddWidgetDialog.vue
- AlertDialog.vue
- index.ts
- views/rules.ts
- lucide-vue-next
- vue
- ClientSitesView.vue
- Field.vue
- vue-router
- NewTaskDialog.vue
- GroupsView.vue
- updates
- useSession
- AdjustmentDialog.vue
- TemplateEditorView.vue
- alerts/rules.ts
- commission-components.test.ts
- Review Focus
- vue
- drag.ts
- checklists/rules.ts
- formatDate
- networks/rules.ts
- LoadError.vue
- gam_tools/types.ts
- Button.vue
- FakeSource
- ChecklistNotesCard.vue
- i18n-plugin.ts
- tasks/types.ts
- priorityLabel
- clients/service.ts
- pick
- errorText
- reports/types.ts
- main.ts
- Pagination.vue
- invoices/types.ts
- tasks/rules.ts
- costs/rules.ts
- ChecklistView.vue
- SaveReportDialog.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- results/types.ts
- FieldsPanel.vue
- t
- ChecklistItemsView.vue
- SaveViewDialog.vue
- events.ts
- BarChart.vue
- sites/service.ts
- virtual-i18n.d.ts
- tabs.ts
- vue
- alerts/types.ts
- poll.ts
- sites.test.ts
- networkName
- formatMonth

## God Nodes (most connected - your core abstractions)
1. `t()` - 416 edges
2. `errorText()` - 259 edges
3. `vue` - 143 edges
4. `ApiError` - 101 edges
5. `useSession` - 79 edges
6. `lucide-vue-next` - 77 edges
7. `vue-sonner` - 76 edges
8. `toNumber()` - 59 edges
9. `cn()` - 55 edges
10. `vitest` - 52 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (161 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (46): tn(), activeByRole(), personGoalAmount(), splitEvent(), active, allRoles(), busy, canManage (+38 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (57): emptyProfile(), audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments (+49 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (46): builderState, toInput(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+38 more)

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
Cohesion: 0.13
Nodes (26): changeLines, duplicate, errors, taken, changeNotes(), emptyRuleForm(), eventOf(), KINDS (+18 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): inviteTaken(), busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (45): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+37 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (65): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay() (+57 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.16
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.11
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.15
Nodes (13): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+5 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (26): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+18 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (26): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+18 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (27): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+19 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.08
Nodes (28): broken, hue, initials, props, busy, create(), description, duplicate (+20 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.05
Nodes (51): profileOk(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+43 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.07
Nodes (26): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirmOpen (+18 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.12
Nodes (23): dimensionText(), category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

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

### Community 37 - "cn"
Cohesion: 0.13
Nodes (13): props, up, panelItem(), railItem(), cn(), tab(), itemClass(), emit (+5 more)

### Community 38 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.13
Nodes (23): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+15 more)

### Community 40 - "PageHeader.vue"
Cohesion: 0.12
Nodes (13): busy, confirm, load(), session, status, unlink(), route, router (+5 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.12
Nodes (24): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+16 more)

### Community 44 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (15): amount, amountError, busy, chosen, description, emit, open, options (+7 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (40): NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), ReportPreview (+32 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (23): validCode(), busy, Check, checks, code, copied, copy(), done (+15 more)

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
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (64): Task 4: Web — cores das séries e gráficos do construtor, formatMetric(), toNumber(), pageSlice(), metricText(), valueText(), title, money() (+56 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (20): profileBody(), profileInput(), saveProfile(), busy, canChange, emit, manager, managerId (+12 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanyImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "load"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.07
Nodes (36): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+28 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.10
Nodes (24): formatDate(), previewDay, commentRecipients(), personName(), taskPlace(), assigneeOptions, change(), changeAssignee() (+16 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.05
Nodes (54): staffService, body, busy, emit, form, frequencyOptions, hourOptions, itemOptions (+46 more)

### Community 68 - "devDependencies"
Cohesion: 0.08
Nodes (33): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+25 more)

### Community 69 - "ClientDocumentsCard.vue"
Cohesion: 0.18
Nodes (15): REASON_MIN, ClientDocumentsOverview, approve(), busy, downloadFile(), emit, fail(), load() (+7 more)

### Community 70 - "InvoicesView.vue"
Cohesion: 0.07
Nodes (37): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+29 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "invoices/rules.ts"
Cohesion: 0.36
Nodes (7): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), MAX_AMOUNT, STATUS_TONE, ServiceItemInput

### Community 73 - "GoalsView.vue"
Cohesion: 0.08
Nodes (34): locale, mark, percent, props, share, tone, companyGoalYears(), goalTone() (+26 more)

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
Nodes (51): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+43 more)

### Community 78 - "ClientsResultsView.vue"
Cohesion: 0.10
Nodes (18): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+10 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.17
Nodes (15): apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError, makeHome() (+7 more)

### Community 80 - "LoginView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 81 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (20): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+12 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.11
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 84 - "AccentCard.vue"
Cohesion: 0.14
Nodes (17): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+9 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.13
Nodes (16): latestCall(), clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.23
Nodes (12): api, Query, CompanyRef, Items, Page, costService, groupService, contractService (+4 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+15 more)

### Community 89 - "inviteTaken"
Cohesion: 0.08
Nodes (35): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+27 more)

### Community 90 - "locale"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "reka-ui"
Cohesion: 0.33
Nodes (5): reka-ui, emit, active, emit, tabClass()

### Community 96 - "ClientNetworksView.vue"
Cohesion: 0.17
Nodes (14): clientInventoryService, ClientNetwork, ClientRef, ClientSite, firstPage(), load(), loadError, networks (+6 more)

### Community 97 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (23): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+15 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.13
Nodes (15): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), done (+7 more)

### Community 99 - "api.ts"
Cohesion: 0.19
Nodes (16): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+8 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState, data, endText(), kpis, load(), loadError (+10 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (27): add(), emit, kind, kinds, metric, metrics, open, props (+19 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.13
Nodes (14): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+6 more)

### Community 103 - "index.ts"
Cohesion: 0.14
Nodes (10): auditText(), formatAgo(), lang, loaded, loaders, loadLang(), Messages, permissionGroupLabel() (+2 more)

### Community 104 - "views/rules.ts"
Cohesion: 0.18
Nodes (13): props, shown, toggleColumn(), viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog (+5 more)

### Community 105 - "lucide-vue-next"
Cohesion: 0.15
Nodes (12): lucide-vue-next, open, model, busy, canTransfer, choice(), emit, form (+4 more)

### Community 106 - "vue"
Cohesion: 0.15
Nodes (11): dot, td, th, events, load(), loadError, open, page (+3 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.11
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, box, failed, initial, props, canSeeChecklists, firstPage() (+10 more)

### Community 108 - "Field.vue"
Cohesion: 0.12
Nodes (15): busy, current, emit, mismatch, password, password2, ready, short (+7 more)

### Community 109 - "vue-router"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 112 - "updates"
Cohesion: 0.17
Nodes (11): imagens, patterns, update-types, interval, updates, directory, groups, package-ecosystem (+3 more)

### Community 113 - "useSession"
Cohesion: 0.11
Nodes (22): pick(), route, router, session, choose(), langs, session, open (+14 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.07
Nodes (52): chosen, create(), emit, name, open, templates, dashboardService, templateService (+44 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+9 more)

### Community 117 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 118 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 119 - "vue"
Cohesion: 0.07
Nodes (22): pinia, vue-router, RouteMeta, vue-router, theme, Me, Theme, accountService (+14 more)

### Community 120 - "drag.ts"
Cohesion: 0.42
Nodes (9): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop() (+1 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), rowState, STATES (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.24
Nodes (6): dates, monthName(), payee, PAYER, props, InvoiceItem

### Community 123 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 124 - "LoadError.vue"
Cohesion: 0.07
Nodes (37): busy, canManage, created(), creating, keys, load(), loadError, page (+29 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.15
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 126 - "Button.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.16
Nodes (11): auditActions, dict, errors, fallbackError, COLUMN, Lang, languageMessages, Source (+3 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.19
Nodes (12): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+4 more)

### Community 131 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 132 - "clients/service.ts"
Cohesion: 0.29
Nodes (13): UserRef, CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption (+5 more)

### Community 133 - "pick"
Cohesion: 0.15
Nodes (13): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+5 more)

### Community 134 - "errorText"
Cohesion: 0.06
Nodes (39): props, seats, errorText(), fill(), busy, complete, documentLabel, form (+31 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.08
Nodes (41): Task 3: Web — tipos, serviço e regras do construtor, vitest, compare, options, period, selected, PERIOD_PRESETS, Lang (+33 more)

### Community 136 - "main.ts"
Cohesion: 0.21
Nodes (9): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, LINES, showBootFailure(), startLang(), boot() (+1 more)

### Community 137 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 138 - "invoices/types.ts"
Cohesion: 0.26
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 139 - "tasks/rules.ts"
Cohesion: 0.18
Nodes (10): COMMENT_MAX, COMMENT_MIN, DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN (+2 more)

### Community 140 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (10): model, choices, description, emit, invalid, name, open, props (+2 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.07
Nodes (43): Key, emit, missingDates, props, setDate(), setMode(), addFilter(), addTyped() (+35 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 146 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 147 - "t"
Cohesion: 0.13
Nodes (14): open, t(), columnLabel(), managerOptions, statusOptions, clientOptions, columnLabel(), delegationLabel() (+6 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (18): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist (+10 more)

### Community 149 - "SaveViewDialog.vue"
Cohesion: 0.15
Nodes (11): button, classes, Props, choices, emit, invalid, name, open (+3 more)

### Community 150 - "events.ts"
Cohesion: 0.18
Nodes (14): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+6 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "sites/service.ts"
Cohesion: 0.54
Nodes (6): AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 154 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 155 - "vue"
Cohesion: 0.29
Nodes (4): vue, first, FunnelStep, props

### Community 156 - "alerts/types.ts"
Cohesion: 0.33
Nodes (8): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 157 - "poll.ts"
Cohesion: 0.47
Nodes (4): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS

### Community 158 - "sites.test.ts"
Cohesion: 0.40
Nodes (3): approval(), tree(), rows

### Community 159 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 160 - "formatMonth"
Cohesion: 0.67
Nodes (3): formatMonth(), periodText(), monthOptions

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `AccountManagerCard.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `ClientDocumentsCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ClientsResultsView.vue`, `TemplatesView.vue`, `LoginView.vue`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `AccentCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `MetricStylePopover.vue`, `ConfigPanel.vue`, `networks/service.ts`, `reka-ui`, `ClientNetworksView.vue`, `DashboardWidget.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `index.ts`, `views/rules.ts`, `lucide-vue-next`, `vue`, `ClientSitesView.vue`, `Field.vue`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `checklists/rules.ts`, `formatDate`, `LoadError.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `priorityLabel`, `pick`, `errorText`, `reports/types.ts`, `Pagination.vue`, `tasks/rules.ts`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `FieldsPanel.vue`, `ChecklistItemsView.vue`, `SaveViewDialog.vue`, `sites.test.ts`, `networkName`, `formatMonth`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04979591836734694 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `AccountManagerCard.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `ClientDocumentsCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ClientsResultsView.vue`, `TemplatesView.vue`, `LoginView.vue`, `reports/rules.ts`, `GAM`, `AccentCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `MetricStylePopover.vue`, `ConfigPanel.vue`, `networks/service.ts`, `ClientNetworksView.vue`, `DashboardWidget.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `index.ts`, `lucide-vue-next`, `vue`, `ClientSitesView.vue`, `Field.vue`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `vue`, `drag.ts`, `formatDate`, `LoadError.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `errorText`, `reports/types.ts`, `main.ts`, `Pagination.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `FieldsPanel.vue`, `ChecklistItemsView.vue`, `SaveViewDialog.vue`, `events.ts`, `BarChart.vue`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `followOtherTab()` and `logout()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `Review Focus`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `PeopleView.vue`, `AccountManagerCard.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `ClientDocumentsCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ClientsResultsView.vue`, `TemplatesView.vue`, `LoginView.vue`, `reports/rules.ts`, `GAM`, `AccentCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `ClientNetworksView.vue`, `DashboardWidget.vue`, `GamRunView.vue`, `api.ts`, `MyCommissionView.vue`, `AlertDialog.vue`, `index.ts`, `lucide-vue-next`, `vue`, `ClientSitesView.vue`, `Field.vue`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `Review Focus`, `LoadError.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `pick`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `t`, `ChecklistItemsView.vue`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._