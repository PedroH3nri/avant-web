# Graph Report - avant-web  (2026-11-06)

## Corpus Check
- 340 files · ~196,482 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3664 nodes · 9651 edges · 161 communities (154 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 114 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9d3f01cf`
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
- dashboards/rules.ts
- SavedViewsBar.vue
- LoadError.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- GroupsView.vue
- ClientsView.vue
- InvoiceView.vue
- ClassifySitesDialog.vue
- pick
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- cn
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- DashboardGrid.vue
- ApiKeyDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- ServiceLineDialog.vue
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- PayeeDialog.vue
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- clients/types.ts
- .oxlintrc.json
- t
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- vue
- views/rules.ts
- InviteView.vue
- FiscalDataCard.vue
- GoalsView.vue
- RevenueStatusBadge.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- ClientsResultsView.vue
- TemplatesView.vue
- index.ts
- gam_tools/rules.ts
- ChecklistsView.vue
- MfaCard.vue
- vue-sonner
- ClientTeamsView.vue
- CompanyGoalCard.vue
- api.ts
- RolesView.vue
- RoleDialog.vue
- Field.vue
- MetricStylePopover.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- lucide-vue-next
- ClientNetworksView.vue
- AccountManagerCard.vue
- GamRunView.vue
- api.ts
- MyCommissionView.vue
- AddWidgetDialog.vue
- AlertDialog.vue
- lang
- PageBody.vue
- ConfigPanel.vue
- DataTable.vue
- ClientSitesView.vue
- PasswordCard.vue
- ResetView.vue
- NewTaskDialog.vue
- InvoicesView.vue
- updates
- navigation.ts
- AdjustmentDialog.vue
- TemplateEditorView.vue
- alerts/rules.ts
- fail
- t
- session.ts
- drag.ts
- checklists/rules.ts
- formatDate
- AccountStatus.vue
- invoices/types.ts
- gam_tools/types.ts
- InvoiceServicesView.vue
- FakeSource
- ChecklistNotesCard.vue
- i18n-plugin.ts
- tasks/types.ts
- priorityLabel
- NetworkReviewActions.vue
- errorToast
- SettingsView.vue
- reports/types.ts
- tailwindcss
- Pagination.vue
- loadMembers
- tasks/rules.ts
- costs/rules.ts
- ChecklistView.vue
- SaveReportDialog.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- SeatBar.vue
- FieldsPanel.vue
- errorText
- checklists/types.ts
- Input.vue
- events.ts
- BarChart.vue
- sites/service.ts
- virtual-i18n.d.ts
- table.ts
- main.ts
- alerts/types.ts
- results/types.ts
- loadReports
- ClientNetworksCard.vue
- sites.test.ts

## God Nodes (most connected - your core abstractions)
1. `t()` - 421 edges
2. `errorText()` - 265 edges
3. `vue` - 145 edges
4. `ApiError` - 103 edges
5. `useSession` - 81 edges
6. `lucide-vue-next` - 78 edges
7. `vue-sonner` - 77 edges
8. `toNumber()` - 60 edges
9. `cn()` - 55 edges
10. `vitest` - 53 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ScaleMode`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts

## Import Cycles
- None detected.

## Communities (161 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (41): audit, auditPage, auditPages, auditTotal, candidates, canDocuments, canManage, canNotes (+33 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+39 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.06
Nodes (37): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 7: Web — modal de métrica personalizada e "Minhas métricas" (+29 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (32): busy, canTransfer, duplicate, emit, errors, form, open, props (+24 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (34): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+26 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (60): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay(), presetRange() (+52 more)

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
Cohesion: 0.09
Nodes (26): busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email, emailOk (+18 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.07
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "LoadError.vue"
Cohesion: 0.06
Nodes (42): copyToken(), busy, canManage, created(), creating, keys, load(), loadError (+34 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.05
Nodes (40): busy, create(), description, duplicate, emit, name, open, people (+32 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.05
Nodes (48): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+40 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): category, categoryOptions, changed, emit, keep, open, props, responsible (+14 more)

### Community 32 - "pick"
Cohesion: 0.07
Nodes (28): pick(), metricOptions, ruleText(), options, transferOptions, ruleEnd(), setGoal(), roleName() (+20 more)

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

### Community 37 - "cn"
Cohesion: 0.12
Nodes (15): panelItem(), railItem(), cn(), kindClass(), tab(), choice(), valueClass(), valueClass() (+7 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (22): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+14 more)

### Community 40 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (23): UserRef, busy, catalog, chosen, copied, create(), DAYS, emit (+15 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (37): discount(), toIssue(), months, adjusting, adjustOpen, canManage, columnLabel(), COLUMNS (+29 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "ServiceLineDialog.vue"
Cohesion: 0.11
Nodes (21): amount, amountError, busy, chosen, description, emit, open, options (+13 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.07
Nodes (40): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), label(), download() (+32 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

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

### Community 51 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (66): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, change(), formatMetric(), toNumber() (+58 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "clients/types.ts"
Cohesion: 0.12
Nodes (18): CompanyStatus, AuditEntry, Client, ClientDetail, ClientNote, ClientProfile, ClientProfileInput, ManagerChange (+10 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.10
Nodes (25): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+17 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (30): busy, canManage, catalog, counts, empty, Layout, layout, layouts (+22 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.10
Nodes (27): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+19 more)

### Community 69 - "vue"
Cohesion: 0.07
Nodes (20): @vue/test-utils@^2.5.1, vitest, vue, @vue/test-utils, box, failed, initial, props (+12 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.15
Nodes (23): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+15 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.11
Nodes (24): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+16 more)

### Community 74 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (26): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+18 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (47): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+39 more)

### Community 78 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 80 - "index.ts"
Cohesion: 0.06
Nodes (33): choose(), langs, session, auditText(), chooseLang(), fill(), formatAgo(), loaded (+25 more)

### Community 81 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (21): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+13 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 84 - "vue-sonner"
Cohesion: 0.14
Nodes (18): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+10 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (16): ClientOption, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (30): busy, canManage, changed, current, monthNames, months, saved, session (+22 more)

### Community 87 - "api.ts"
Cohesion: 0.12
Nodes (28): api, baseHeaders(), companyChanged(), CSRF_COOKIES, download(), Query, request(), RequestOptions (+20 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.09
Nodes (22): broken, hue, initials, props, canManage, canTeam, editable(), isMe() (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.07
Nodes (38): model, Localized, SiteScope, ClientMember, busy, category, chipClass(), chosen (+30 more)

### Community 90 - "Field.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "MetricStylePopover.vue"
Cohesion: 0.18
Nodes (14): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+6 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "lucide-vue-next"
Cohesion: 0.14
Nodes (13): lucide-vue-next, reka-ui, pick(), route, router, session, model, open (+5 more)

### Community 96 - "ClientNetworksView.vue"
Cohesion: 0.16
Nodes (13): awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall, page (+5 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (23): emptyProfile(), profileBody(), profileInput(), closeForm(), create(), openEdit(), busy, canChange (+15 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.13
Nodes (16): formatDate(), previewDay, finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName() (+8 more)

### Community 99 - "api.ts"
Cohesion: 0.15
Nodes (12): csrfToken(), readCookie(), setCompanyChangedHandler(), setTabCompany(), setUnauthorizedHandler(), announceCompany(), CompanyMessage, onCompanyAnnounced() (+4 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (17): STATUS_TONE, CommissionEvent, CommissionMonth, CommissionRule, CommissionRuleInput, MyCommissions, PersonMonth, WindowMonth (+9 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.10
Nodes (19): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+11 more)

### Community 103 - "lang"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 104 - "PageBody.vue"
Cohesion: 0.12
Nodes (13): busy, confirm, load(), session, status, unlink(), route, router (+5 more)

### Community 105 - "ConfigPanel.vue"
Cohesion: 0.08
Nodes (26): auditActions, dict, errors, fallbackError, Key, emit, missingDates, options (+18 more)

### Community 106 - "DataTable.vue"
Cohesion: 0.14
Nodes (10): dot, canManage, dialogOpen, editing, items, load(), loadError, move() (+2 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 108 - "PasswordCard.vue"
Cohesion: 0.10
Nodes (16): ApiError, busy, current, emit, mismatch, password, password2, ready (+8 more)

### Community 109 - "ResetView.vue"
Cohesion: 0.12
Nodes (14): vue-router, RouteMeta, vue-router, busy, error, mfa, mismatch, password (+6 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (15): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+7 more)

### Community 112 - "updates"
Cohesion: 0.17
Nodes (11): imagens, patterns, update-types, interval, updates, directory, groups, package-ecosystem (+3 more)

### Community 113 - "navigation.ts"
Cohesion: 0.26
Nodes (11): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), useSession (+3 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.08
Nodes (44): chosen, create(), emit, name, open, templates, dashboardService, blankTemplate() (+36 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.29
Nodes (13): alertDefinition(), AlertForm, alertForm(), AlertGroup, alertInput(), alertState(), compares(), conditionText() (+5 more)

### Community 117 - "fail"
Cohesion: 0.15
Nodes (17): profileOk(), formOk, auditChanged(), changeOwner(), fail(), load(), loadAudit(), managerSaved() (+9 more)

### Community 118 - "t"
Cohesion: 0.14
Nodes (13): open, t(), columnLabel(), managerOptions, statusOptions, clientOptions, columnLabel(), delegationLabel() (+5 more)

### Community 119 - "session.ts"
Cohesion: 0.17
Nodes (8): pinia, Me, Theme, accountService, authService, InvitationPreview, LoginResult, Blank

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.19
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), RowState, rowState() (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.22
Nodes (9): button, classes, Props, props, dates, monthName(), payee, PAYER (+1 more)

### Community 123 - "AccountStatus.vue"
Cohesion: 0.20
Nodes (11): companyService, CompanyDetail, CompanyFiscal, company, error, hasSeats, load(), lost (+3 more)

### Community 124 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.14
Nodes (18): lang, gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail (+10 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.22
Nodes (9): COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 132 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 133 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 134 - "SettingsView.vue"
Cohesion: 0.12
Nodes (12): model, canEdit, company, isGroone, load(), loadError, name, nameInvalid (+4 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.06
Nodes (51): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, PERIOD_PRESETS, Lang, draft (+43 more)

### Community 136 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 137 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 138 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX

### Community 140 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): ROW_TONE, splitRows(), checking, checklist, checklistId, checkNow(), fail(), groups (+8 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.13
Nodes (14): Dashboard, DashboardInput, choices, description, emit, invalid, name, open (+6 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.08
Nodes (45): loadDraft(), path, shape, AXIS_CHARTS, BuilderState, canExport(), chartAllowed(), Comparison (+37 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 146 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 147 - "errorText"
Cohesion: 0.16
Nodes (19): errorText(), load(), saveStart(), confirmEnd(), confirmRemove(), create(), load(), loadContracts() (+11 more)

### Community 148 - "checklists/types.ts"
Cohesion: 0.18
Nodes (14): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+6 more)

### Community 149 - "Input.vue"
Cohesion: 0.13
Nodes (11): props, up, open, choices, emit, invalid, name, open (+3 more)

### Community 150 - "events.ts"
Cohesion: 0.18
Nodes (14): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+6 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "sites/service.ts"
Cohesion: 0.54
Nodes (6): AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 154 - "table.ts"
Cohesion: 0.18
Nodes (11): td, th, events, load(), loadError, open, page, pages (+3 more)

### Community 155 - "main.ts"
Cohesion: 0.24
Nodes (8): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, LINES, showBootFailure(), startLang(), boot()

### Community 156 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 157 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 158 - "loadReports"
Cohesion: 0.32
Nodes (8): duplicate(), firstPage(), load(), loadPinned(), loadReports(), remove(), reportsCall, togglePin()

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "sites.test.ts"
Cohesion: 0.40
Nodes (3): approval(), tree(), rows

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `vue`, `views/rules.ts`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `gam_tools/rules.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `MetricStylePopover.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `PageBody.vue`, `ConfigPanel.vue`, `DataTable.vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `ResetView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `navigation.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `fail`, `checklists/rules.ts`, `formatDate`, `AccountStatus.vue`, `InvoiceServicesView.vue`, `ChecklistNotesCard.vue`, `priorityLabel`, `NetworkReviewActions.vue`, `errorToast`, `SettingsView.vue`, `reports/types.ts`, `Pagination.vue`, `loadMembers`, `tasks/rules.ts`, `costs/rules.ts`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `FieldsPanel.vue`, `errorText`, `Input.vue`, `table.ts`, `loadReports`, `ClientNetworksCard.vue`, `sites.test.ts`?**
  _High betweenness centrality (0.157) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `DashboardGrid.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `PeopleView.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `api.ts`, `MyCommissionView.vue`, `AlertDialog.vue`, `PageBody.vue`, `DataTable.vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `ResetView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `navigation.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `fail`, `t`, `AccountStatus.vue`, `InvoiceServicesView.vue`, `ChecklistNotesCard.vue`, `NetworkReviewActions.vue`, `errorToast`, `SettingsView.vue`, `reports/types.ts`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `table.ts`, `loadReports`, `ClientNetworksCard.vue`?**
  _High betweenness centrality (0.124) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `logout()` and `followOtherTab()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `cn`, `DashboardGrid.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `MetricStylePopover.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `PageBody.vue`, `ConfigPanel.vue`, `DataTable.vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `ResetView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `navigation.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `session.ts`, `drag.ts`, `formatDate`, `AccountStatus.vue`, `InvoiceServicesView.vue`, `ChecklistNotesCard.vue`, `NetworkReviewActions.vue`, `SettingsView.vue`, `reports/types.ts`, `Pagination.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `ChecklistItemDialog.vue`, `SeatBar.vue`, `FieldsPanel.vue`, `Input.vue`, `events.ts`, `BarChart.vue`, `table.ts`, `main.ts`, `ClientNetworksCard.vue`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._