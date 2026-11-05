# Graph Report - avant-web  (2026-11-05)

## Corpus Check
- 336 files · ~194,538 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3612 nodes · 9500 edges · 152 communities (145 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d0ce63ba`
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
- SchedulesView.vue
- Review Focus
- DashboardGrid.vue
- contracts/service.ts
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
- main.ts
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
- ConfigPanel.vue
- views/rules.ts
- InviteView.vue
- FiscalDataCard.vue
- GoalsView.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ClientsResultsView.vue
- MetricStylePopover.vue
- index.ts
- gam_tools/rules.ts
- reports/rules.ts
- GAM
- errorText
- ClientTeamsView.vue
- CompanyGoalCard.vue
- api.ts
- RolesView.vue
- inviteTaken
- locale
- costs/rules.ts
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- Button.vue
- TeamTabs.vue
- ClientDocumentsCard.vue
- GamRunView.vue
- api.ts
- MyCommissionView.vue
- AddWidgetDialog.vue
- AlertDialog.vue
- DashboardWidget.vue
- ReportTable.vue
- checklists/types.ts
- AlertEventsDialog.vue
- ClientSitesView.vue
- Field.vue
- Input.vue
- NewTaskDialog.vue
- useSession
- updates
- ProfileImageCard.vue
- AdjustmentDialog.vue
- TemplateEditorView.vue
- alerts/rules.ts
- vue-router
- Review Focus
- session.ts
- drag.ts
- checklists/rules.ts
- formatDate
- results/types.ts
- LoadError.vue
- gam_tools/types.ts
- Button.vue
- FakeSource
- ChecklistNotesCard.vue
- i18n-plugin.ts
- tasks/types.ts
- priorityLabel
- clients/service.ts
- errorToast
- AccountStatus.vue
- reports/types.ts
- loadMembers
- Pagination.vue
- invoices/types.ts
- tasks/rules.ts
- lang
- ChecklistView.vue
- views/types.ts
- reports/rules.ts
- ChecklistItemDialog.vue
- SeatBar.vue
- FieldsPanel.vue
- ChecklistItemsView.vue
- events.ts
- BarChart.vue
- virtual-i18n.d.ts
- dashboards/types.ts

## God Nodes (most connected - your core abstractions)
1. `t()` - 416 edges
2. `errorText()` - 261 edges
3. `vue` - 143 edges
4. `ApiError` - 101 edges
5. `useSession` - 80 edges
6. `lucide-vue-next` - 77 edges
7. `vue-sonner` - 77 edges
8. `toNumber()` - 59 edges
9. `cn()` - 55 edges
10. `vitest` - 51 edges

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

## Communities (152 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (47): auditText(), formatAgo(), tn(), changeLines, splitEvent(), active, allRoles(), busy (+39 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): missingDates, builderState, comparisonReady(), toInput(), withDimensions(), apiMessage(), askRemoveMetric(), busy (+41 more)

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

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (37): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+29 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (49): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+41 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (80): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+72 more)

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
Cohesion: 0.13
Nodes (15): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+7 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.11
Nodes (21): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+13 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (29): UserRef, busy, catalog, chosen, copied, create(), DAYS, emit (+21 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (27): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+19 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (53): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+45 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (24): invoicePdfUrl(), act(), backTo, busy, Confirm, confirmOpen, confirmText, downloadPdf() (+16 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.11
Nodes (29): category, categoryOptions, changed, emit, keep, open, props, responsible (+21 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.10
Nodes (26): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), CompanyResults (+18 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "SchedulesView.vue"
Cohesion: 0.08
Nodes (24): open, allOptions(), busy, canManage, confirmRemove(), dashboards, editing, formOpen (+16 more)

### Community 38 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.22
Nodes (10): drag, emit, grid, ordered, props, { run, failure, loading }, source, widgetFailure() (+2 more)

### Community 40 - "contracts/service.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (29): adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail, detailOpen (+21 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.12
Nodes (24): load(), overview, picker, picking, rows, send(), sending, props (+16 more)

### Community 44 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 45 - "session.ts"
Cohesion: 0.08
Nodes (37): sameComparison(), savedPeriod(), toQuery(), viewChanged(), viewDraft(), exportUrl(), download(), download() (+29 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.09
Nodes (27): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, validCode(), busy, Check, checks (+19 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.07
Nodes (33): statusTone, McmCandidate, Network, NetworkStatus, SyncRun, busy, canConnect, canDisconnect (+25 more)

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
Cohesion: 0.08
Nodes (26): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+18 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (45): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, title, empty, first, firstFormat (+37 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "main.ts"
Cohesion: 0.19
Nodes (10): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, LINES, showBootFailure(), startLang(), boot() (+2 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanyImageCard.vue"
Cohesion: 0.24
Nodes (10): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+2 more)

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
Cohesion: 0.09
Nodes (33): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+25 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (31): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+23 more)

### Community 69 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.19
Nodes (20): applyView(), current, sortOptions, applyView(), current, sortOptions, current, applyView() (+12 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.10
Nodes (24): goalService, GoalMode, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+16 more)

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
Nodes (47): t(), applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork (+39 more)

### Community 78 - "ClientsResultsView.vue"
Cohesion: 0.10
Nodes (18): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+10 more)

### Community 79 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 80 - "index.ts"
Cohesion: 0.08
Nodes (21): vue, props, up, choose(), langs, session, open, session (+13 more)

### Community 81 - "gam_tools/rules.ts"
Cohesion: 0.13
Nodes (19): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), FORMATS, installable(), KEY_NAMES, siteSummary() (+11 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.11
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 84 - "errorText"
Cohesion: 0.18
Nodes (17): pick(), errorText(), choose(), choose(), load(), saveStart(), load(), remove() (+9 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (32): locale, busy, canManage, changed, current, load(), monthNames, months (+24 more)

### Community 87 - "api.ts"
Cohesion: 0.22
Nodes (13): api, Query, CompanyRef, Items, Page, costService, groupService, contractService (+5 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "inviteTaken"
Cohesion: 0.08
Nodes (36): model, permissionGroupLabel(), Localized, SiteScope, busy, category, chipClass(), chosen (+28 more)

### Community 90 - "locale"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.08
Nodes (29): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+21 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "Button.vue"
Cohesion: 0.08
Nodes (35): lucide-vue-next, reka-ui, route, router, session, button, classes, Props (+27 more)

### Community 96 - "TeamTabs.vue"
Cohesion: 0.08
Nodes (21): months, months, monthOptions(), months, columnLabel(), COLUMNS, DEFAULT_VIEW, invoices (+13 more)

### Community 97 - "ClientDocumentsCard.vue"
Cohesion: 0.18
Nodes (15): fetchFile(), download(), approve(), busy, downloadFile(), emit, fail(), load() (+7 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.14
Nodes (15): finishedSteps(), formatName(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done (+7 more)

### Community 99 - "api.ts"
Cohesion: 0.20
Nodes (15): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+7 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (17): STATUS_TONE, CommissionEvent, CommissionMonth, CommissionRule, CommissionRuleInput, MyCommissions, PersonMonth, WindowMonth (+9 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "DashboardWidget.vue"
Cohesion: 0.14
Nodes (14): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+6 more)

### Community 104 - "ReportTable.vue"
Cohesion: 0.17
Nodes (12): pageCount(), pageSlice(), background(), dimensions, page, props, rows, shownRows (+4 more)

### Community 105 - "checklists/types.ts"
Cohesion: 0.19
Nodes (13): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistPerson (+5 more)

### Community 106 - "AlertEventsDialog.vue"
Cohesion: 0.15
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.07
Nodes (31): box, failed, initial, props, latestCall(), clientInventoryService, ClientNetwork, ClientRef (+23 more)

### Community 108 - "Field.vue"
Cohesion: 0.11
Nodes (19): busy, current, emit, mismatch, password, password2, ready, short (+11 more)

### Community 109 - "Input.vue"
Cohesion: 0.05
Nodes (34): model, busy, email, error, sent, submit(), busy, error (+26 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "useSession"
Cohesion: 0.08
Nodes (25): announceCompany(), CompanyMessage, onCompanyAnnounced(), route, router, session, sessions, canEdit (+17 more)

### Community 112 - "updates"
Cohesion: 0.18
Nodes (10): imagens, patterns, interval, updates, directory, groups, package-ecosystem, schedule (+2 more)

### Community 113 - "ProfileImageCard.vue"
Cohesion: 0.24
Nodes (9): busy, drop(), imageUrl, input, name, pick(), problem, run() (+1 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (31): templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+23 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.20
Nodes (16): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+8 more)

### Community 117 - "vue-router"
Cohesion: 0.09
Nodes (20): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, next (+12 more)

### Community 118 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 119 - "session.ts"
Cohesion: 0.10
Nodes (23): pinia, vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent() (+15 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), rowState, rowStateLabel() (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.28
Nodes (8): formatDate(), dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 123 - "results/types.ts"
Cohesion: 0.33
Nodes (5): Cost, CostInput, CostKind, FormulaCheck, CostLine

### Community 124 - "LoadError.vue"
Cohesion: 0.07
Nodes (33): copyToken(), busy, canManage, created(), creating, keys, load(), loadError (+25 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.13
Nodes (19): gamToolService, GamFormat, GamRunState, GamStep, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail (+11 more)

### Community 126 - "Button.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.15
Nodes (12): auditActions, dict, errors, fallbackError, Key, COLUMN, Lang, languageMessages (+4 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 132 - "clients/service.ts"
Cohesion: 0.08
Nodes (34): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+26 more)

### Community 133 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 134 - "AccountStatus.vue"
Cohesion: 0.18
Nodes (11): td, th, company, error, hasSeats, load(), lost, networks (+3 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.06
Nodes (50): Task 3: Web — tipos, serviço e regras do construtor, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, compare, options, period, selected (+42 more)

### Community 136 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 137 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 138 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX

### Community 140 - "lang"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): ROW_TONE, splitRows(), checking, checklist, checklistId, checkNow(), fail(), groups (+8 more)

### Community 142 - "views/types.ts"
Cohesion: 0.24
Nodes (10): viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewDefinition, ViewFilterSpec (+2 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.09
Nodes (38): loadDraft(), emit, options, props, setDate(), setMode(), filterable, AXIS_CHARTS (+30 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 146 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.15
Nodes (10): dot, canManage, dialogOpen, editing, items, load(), loadError, move() (+2 more)

### Community 150 - "events.ts"
Cohesion: 0.18
Nodes (14): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+6 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 155 - "dashboards/types.ts"
Cohesion: 0.12
Nodes (28): chosen, create(), emit, name, open, templates, runKey(), runsQuery() (+20 more)

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `SchedulesView.vue`, `contracts/service.ts`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `ConfigPanel.vue`, `views/rules.ts`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `ClientsResultsView.vue`, `MetricStylePopover.vue`, `index.ts`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `errorText`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `costs/rules.ts`, `ConfigPanel.vue`, `networks/service.ts`, `Button.vue`, `TeamTabs.vue`, `ClientDocumentsCard.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `DashboardWidget.vue`, `ReportTable.vue`, `AlertEventsDialog.vue`, `ClientSitesView.vue`, `Field.vue`, `Input.vue`, `NewTaskDialog.vue`, `useSession`, `ProfileImageCard.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `vue-router`, `session.ts`, `checklists/rules.ts`, `formatDate`, `LoadError.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `priorityLabel`, `clients/service.ts`, `errorToast`, `AccountStatus.vue`, `reports/types.ts`, `loadMembers`, `Pagination.vue`, `tasks/rules.ts`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `FieldsPanel.vue`, `ChecklistItemsView.vue`, `dashboards/types.ts`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04600301659125189 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `index.ts` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `SchedulesView.vue`, `DashboardGrid.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `main.ts`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `ConfigPanel.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ClientsResultsView.vue`, `MetricStylePopover.vue`, `reports/rules.ts`, `GAM`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `Button.vue`, `TeamTabs.vue`, `ClientDocumentsCard.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `DashboardWidget.vue`, `ReportTable.vue`, `AlertEventsDialog.vue`, `ClientSitesView.vue`, `Field.vue`, `Input.vue`, `NewTaskDialog.vue`, `useSession`, `ProfileImageCard.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `vue-router`, `session.ts`, `drag.ts`, `formatDate`, `LoadError.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `clients/service.ts`, `AccountStatus.vue`, `reports/types.ts`, `Pagination.vue`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `SeatBar.vue`, `FieldsPanel.vue`, `ChecklistItemsView.vue`, `events.ts`, `BarChart.vue`, `dashboards/types.ts`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `followOtherTab()` and `logout()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04934687953555878 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `SchedulesView.vue`, `Review Focus`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `clients/rules.ts`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ClientsResultsView.vue`, `index.ts`, `reports/rules.ts`, `GAM`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `Button.vue`, `TeamTabs.vue`, `ClientDocumentsCard.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AlertDialog.vue`, `DashboardWidget.vue`, `AlertEventsDialog.vue`, `ClientSitesView.vue`, `Field.vue`, `Input.vue`, `NewTaskDialog.vue`, `useSession`, `ProfileImageCard.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `vue-router`, `Review Focus`, `session.ts`, `LoadError.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `clients/service.ts`, `errorToast`, `AccountStatus.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `dashboards/types.ts`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._