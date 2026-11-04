# Graph Report - avant-web  (2026-11-04)

## Corpus Check
- 317 files · ~188,414 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3502 nodes · 9198 edges · 155 communities (150 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 110 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `47e55fbb`
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
- pick
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
- SchedulesView.vue
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- CompanyGoalCard.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- MetricStylePopover.vue
- ResetView.vue
- results/types.ts
- reports/rules.ts
- GAM
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- inviteTaken
- PageHeader.vue
- CompanyIcon.vue
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- TeamTabs.vue
- vue-sonner
- events.ts
- MfaView.vue
- GroupedBarChart.vue
- Pagination.vue
- errorText
- GoalsView.vue
- networkName
- vue-sonner
- dashboards/types.ts
- ClientSitesView.vue
- loadMembers
- SaveViewDialog.vue
- NewTaskDialog.vue
- RolePermissionsCard.vue
- vitest
- cn
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- lucide-vue-next
- t
- vue
- drag.ts
- alerts/rules.ts
- NewGroupDialog.vue
- GamRunView.vue
- session.ts
- gam_tools/types.ts
- PasswordCard.vue
- router.ts
- ChecklistNotesCard.vue
- sites/service.ts
- tasks/types.ts
- clients/service.ts
- pick
- alerts/types.ts
- Button.vue
- @vitejs/plugin-vue
- costs/rules.ts
- ApiKeysCard.vue
- priorityLabel
- tasks/rules.ts
- lang
- ChecklistView.vue
- groups/rules.ts
- reports/rules.ts
- ChecklistItemDialog.vue
- checklists/rules.ts
- sites/rules.ts
- costs/service.ts
- ChecklistItemsView.vue
- SaveReportDialog.vue
- events.ts
- BarChart.vue
- views/types.ts
- categoryLabel
- Avatar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 414 edges
2. `errorText()` - 251 edges
3. `vue` - 140 edges
4. `ApiError` - 100 edges
5. `lucide-vue-next` - 77 edges
6. `vue-sonner` - 75 edges
7. `useSession` - 75 edges
8. `toNumber()` - 59 edges
9. `cn()` - 55 edges
10. `formatMetric()` - 48 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `scaleHue()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (155 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (46): tn(), activeByRole(), personGoalAmount(), splitEvent(), active, allRoles(), busy, canManage (+38 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (57): profileBody(), audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments (+49 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (60): builderState, canExport(), chartAllowed(), emptyDraft(), fittingChart(), fromQuery(), fromTemplate(), orderOf() (+52 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (34): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+26 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.08
Nodes (50): changeLines, busy, canTransfer, duplicate, emit, errors, form, open (+42 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

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
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.11
Nodes (21): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+13 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "api"
Cohesion: 0.23
Nodes (11): api, Query, Items, Page, groupService, contractService, peopleService, Person (+3 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "pick"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (53): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+45 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (24): invoicePdfUrl(), act(), backTo, busy, Confirm, confirmOpen, confirmText, downloadPdf() (+16 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (24): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+16 more)

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

### Community 37 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 38 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.08
Nodes (46): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+38 more)

### Community 40 - "GroupedBarChart.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (35): toIssue(), months, adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+27 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.08
Nodes (39): load(), overview, picker, picking, rows, send(), sending, props (+31 more)

### Community 44 - "errorToast"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (38): fromReport(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+30 more)

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

### Community 50 - "contracts/types.ts"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "errorText"
Cohesion: 0.15
Nodes (11): model, busy, complete, documentLabel, emit, form, open, props (+3 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.07
Nodes (40): first, FunnelStep, props, title, empty, first, firstFormat, formatter() (+32 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.13
Nodes (15): Action, busy, firstPage(), loadError, open, page, pages, people (+7 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "api.ts"
Cohesion: 0.13
Nodes (13): ApiError, download(), readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+5 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.15
Nodes (14): box, failed, initial, props, busy, drop(), input, pick() (+6 more)

### Community 61 - "load"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.07
Nodes (36): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+28 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.09
Nodes (33): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+25 more)

### Community 68 - "devDependencies"
Cohesion: 0.08
Nodes (31): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+23 more)

### Community 69 - "SchedulesView.vue"
Cohesion: 0.10
Nodes (20): allOptions(), busy, canManage, dashboards, editing, formOpen, loadError, loadOptions() (+12 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.10
Nodes (19): profileInput(), openEdit(), busy, canChange, emit, manager, managerId, next (+11 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (32): locale, busy, canManage, changed, current, monthNames, months, saved (+24 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (26): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+18 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.05
Nodes (37): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+29 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.16
Nodes (15): apiMessage(), draft, emit, failure, goal, grabTitle(), loadDraft(), loading (+7 more)

### Community 79 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "results/types.ts"
Cohesion: 0.10
Nodes (24): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+16 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.07
Nodes (33): dot, formatDate(), td, th, previewDay, events, load(), loadError (+25 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.08
Nodes (35): dimensions, filters, periods, props, drag, emit, grid, ordered (+27 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.13
Nodes (16): addFilter(), addTyped(), CHARTS, emit, filterable, LIMITS, newField, periods (+8 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "inviteTaken"
Cohesion: 0.11
Nodes (22): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+14 more)

### Community 90 - "PageHeader.vue"
Cohesion: 0.08
Nodes (22): busy, confirm, load(), session, status, unlink(), busy, drop() (+14 more)

### Community 91 - "CompanyIcon.vue"
Cohesion: 0.11
Nodes (23): options, amount, amountError, busy, chosen, description, emit, open (+15 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): defaultSites(), languageLabel(), saveFile(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.11
Nodes (18): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+10 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateRoles, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 96 - "TeamTabs.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 97 - "vue-sonner"
Cohesion: 0.10
Nodes (15): auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo(), index (+7 more)

### Community 98 - "events.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.15
Nodes (13): category, changed, emit, keep, open, props, responsible, responsibleOptions (+5 more)

### Community 100 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 101 - "Pagination.vue"
Cohesion: 0.12
Nodes (25): add(), emit, kind, kinds, metric, metrics, open, props (+17 more)

### Community 102 - "errorText"
Cohesion: 0.15
Nodes (19): Task 6: Web — construtor, pick(), errorText(), load(), load(), saveStart(), saveNotes(), load() (+11 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 104 - "networkName"
Cohesion: 0.11
Nodes (15): open, busy, canManage, description, editing, editingOpen, loadError, page (+7 more)

### Community 105 - "vue-sonner"
Cohesion: 0.09
Nodes (23): vue-sonner, choose(), langs, session, chooseLang(), NAV_GROUPS, NavGroup, NavItem (+15 more)

### Community 106 - "dashboards/types.ts"
Cohesion: 0.17
Nodes (16): chosen, create(), emit, name, open, templates, dashboardService, Dashboard (+8 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.09
Nodes (27): latestCall(), clientInventoryService, ClientNetwork, ClientRef, ClientSite, firstPage(), load(), loadError (+19 more)

### Community 108 - "loadMembers"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "RolePermissionsCard.vue"
Cohesion: 0.16
Nodes (14): groups, busy, canManage, changed, chosen, emit, groups, props (+6 more)

### Community 112 - "vitest"
Cohesion: 0.17
Nodes (12): vitest, pageCount(), pageSlice(), background(), dimensions, page, props, rows (+4 more)

### Community 113 - "cn"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.20
Nodes (11): amount, amountError, busy, emit, open, props, reason, reasonTouched (+3 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (32): blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition, ManagedTemplate (+24 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.10
Nodes (19): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+11 more)

### Community 117 - "lucide-vue-next"
Cohesion: 0.08
Nodes (33): lucide-vue-next, reka-ui, props, up, route, router, session, open (+25 more)

### Community 118 - "t"
Cohesion: 0.18
Nodes (15): t(), linkActive(), visibleGroups(), clientOptions, columnLabel(), delegationLabel(), filterOptions, revshareError (+7 more)

### Community 119 - "vue"
Cohesion: 0.14
Nodes (14): vue, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+6 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "alerts/rules.ts"
Cohesion: 0.31
Nodes (12): alertDefinition(), alertForm, AlertGroup, alertInput(), alertState(), compares(), conditionText(), muteUntil() (+4 more)

### Community 122 - "NewGroupDialog.vue"
Cohesion: 0.13
Nodes (15): busy, create(), description, duplicate, emit, name, open, people (+7 more)

### Community 123 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 124 - "session.ts"
Cohesion: 0.11
Nodes (22): pinia, AccentId, CompanyRef, Me, Theme, UserRef, accountService, ApiKey (+14 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.14
Nodes (18): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+10 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 127 - "router.ts"
Cohesion: 0.07
Nodes (27): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, sent (+19 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "sites/service.ts"
Cohesion: 0.54
Nodes (6): AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "clients/service.ts"
Cohesion: 0.15
Nodes (19): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+11 more)

### Community 132 - "pick"
Cohesion: 0.14
Nodes (14): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+6 more)

### Community 133 - "alerts/types.ts"
Cohesion: 0.33
Nodes (8): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 134 - "Button.vue"
Cohesion: 0.15
Nodes (12): button, classes, Props, company, error, hasSeats, load(), lost (+4 more)

### Community 136 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 137 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

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
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.08
Nodes (48): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, Key, PERIOD_PRESETS, Lang (+40 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), rowState, STATES (+4 more)

### Community 146 - "sites/rules.ts"
Cohesion: 0.23
Nodes (9): approval(), KEEP, NONE, SITE_CATEGORIES, sitePatch(), Tone, tree(), SiteCategory (+1 more)

### Community 147 - "costs/service.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (18): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist (+10 more)

### Community 149 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 150 - "events.ts"
Cohesion: 0.14
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated (+5 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "views/types.ts"
Cohesion: 0.24
Nodes (10): viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewDefinition, ViewFilterSpec (+2 more)

### Community 153 - "categoryLabel"
Cohesion: 0.29
Nodes (7): networkName(), loadExtras(), categoryOptions, categoryLabel(), categoryOptions, netName(), networkOptions

### Community 154 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `GroupedBarChart.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `SchedulesView.vue`, `MetricStylePopover.vue`, `clients/types.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `ResetView.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `Avant: grupos na Empresa e imagem da Empresa`, `RolesView.vue`, `inviteTaken`, `PageHeader.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `vue-sonner`, `events.ts`, `MfaView.vue`, `Pagination.vue`, `errorText`, `GoalsView.vue`, `networkName`, `vue-sonner`, `dashboards/types.ts`, `ClientSitesView.vue`, `loadMembers`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `RolePermissionsCard.vue`, `vitest`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `lucide-vue-next`, `vue`, `alerts/rules.ts`, `NewGroupDialog.vue`, `GamRunView.vue`, `PasswordCard.vue`, `router.ts`, `ChecklistNotesCard.vue`, `pick`, `Button.vue`, `costs/rules.ts`, `ApiKeysCard.vue`, `priorityLabel`, `tasks/rules.ts`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `checklists/rules.ts`, `sites/rules.ts`, `ChecklistItemsView.vue`, `SaveReportDialog.vue`, `categoryLabel`?**
  _High betweenness centrality (0.173) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04979591836734694 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `GroupedBarChart.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `api.ts`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `SchedulesView.vue`, `clients/types.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `ResetView.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `Avant: grupos na Empresa e imagem da Empresa`, `RolesView.vue`, `inviteTaken`, `PageHeader.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `vue-sonner`, `MfaView.vue`, `GroupedBarChart.vue`, `Pagination.vue`, `GoalsView.vue`, `networkName`, `vue-sonner`, `dashboards/types.ts`, `ClientSitesView.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `RolePermissionsCard.vue`, `vitest`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `lucide-vue-next`, `drag.ts`, `NewGroupDialog.vue`, `GamRunView.vue`, `session.ts`, `PasswordCard.vue`, `router.ts`, `ChecklistNotesCard.vue`, `Button.vue`, `ApiKeysCard.vue`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `SaveReportDialog.vue`, `events.ts`, `BarChart.vue`, `Avatar.vue`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04934687953555878 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Review Focus`, `PageViewsView.vue`, `GroupedBarChart.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `PeopleView.vue`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `SchedulesView.vue`, `clients/types.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ResetView.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `inviteTaken`, `PageHeader.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `vue-sonner`, `MfaView.vue`, `GoalsView.vue`, `networkName`, `vue-sonner`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `RolePermissionsCard.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `lucide-vue-next`, `vue`, `NewGroupDialog.vue`, `GamRunView.vue`, `PasswordCard.vue`, `router.ts`, `ChecklistNotesCard.vue`, `pick`, `Button.vue`, `ApiKeysCard.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04558737580362361 - nodes in this community are weakly interconnected._