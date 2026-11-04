# Graph Report - avant-web  (2026-11-04)

## Corpus Check
- 327 files · ~193,288 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3574 nodes · 9436 edges · 150 communities (144 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0176fe9d`
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
- useSession
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
- GroupsView.vue
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
- ClientProfileForm.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- session.ts
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
- MetricStylePopover.vue
- InviteView.vue
- FiscalDataCard.vue
- GoalsView.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ClientsResultsView.vue
- MetricStylePopover.vue
- GAM
- SessionsCard.vue
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
- tailwindcss
- TeamTabs.vue
- lucide-vue-next
- GamRunView.vue
- MfaView.vue
- MyCommissionView.vue
- AddWidgetDialog.vue
- TeamTabs.vue
- DashboardWidget.vue
- ClientDocumentsCard.vue
- checklists/types.ts
- sites/rules.ts
- ClientSitesView.vue
- Review Focus
- Input.vue
- NewTaskDialog.vue
- GroupedBarChart.vue
- InvoiceDocument.vue
- priorityLabel
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- i18n.ts
- table.ts
- vue
- drag.ts
- checklists/rules.ts
- networks/rules.ts
- results/types.ts
- ApiKeysCard.vue
- gam_tools/types.ts
- Button.vue
- FakeSource
- ChecklistNotesCard.vue
- vite.config.ts
- tasks/types.ts
- AccountManagerCard.vue
- clients/service.ts
- networkName
- Button.vue
- reports/types.ts
- formatMonth
- Pagination.vue
- tasks/rules.ts
- lang
- ChecklistView.vue
- views/types.ts
- reports/rules.ts
- ChecklistItemDialog.vue
- vue
- ChecklistItemsView.vue
- events.ts
- BarChart.vue
- dashboards/types.ts
- router.ts

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
10. `vitest` - 49 edges

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

## Communities (150 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (57): profileBody(), audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments (+49 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (48): builderState, toInput(), toQuery(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric(), busy (+40 more)

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
Nodes (28): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+20 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (38): busy, canTransfer, duplicate, emit, errors, form, open, props (+30 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (58): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay(), dimensionText() (+50 more)

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
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (26): busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email, emailOk (+18 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (43): add(), emit, dimensions, filters, periods, props, ACCOUNT_SIZE, accountWidget() (+35 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.10
Nodes (22): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+14 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (26): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+18 more)

### Community 25 - "useSession"
Cohesion: 0.11
Nodes (17): pick(), route, router, session, choose(), langs, session, open (+9 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): amountText(), busy, canManage, check, checkFormula, costs, currencies, currencyOptions (+15 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.08
Nodes (21): broken, hue, initials, props, allGroups, canManage, created(), creating (+13 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (53): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+45 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (24): invoicePdfUrl(), act(), backTo, busy, Confirm, confirmOpen, confirmText, downloadPdf() (+16 more)

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
Cohesion: 0.10
Nodes (23): busy, create(), description, duplicate, emit, name, open, people (+15 more)

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
Nodes (30): toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail (+22 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.10
Nodes (28): saveFile(), fetchFile(), load(), overview, picker, picking, rows, send() (+20 more)

### Community 44 - "ServiceLineDialog.vue"
Cohesion: 0.10
Nodes (32): FiscalData, amount, amountError, busy, chosen, description, emit, open (+24 more)

### Community 45 - "session.ts"
Cohesion: 0.08
Nodes (34): viewDraft(), ViewPeriod, exportUrl(), download(), download(), apiMessage(), canManage, catalog (+26 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.09
Nodes (26): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, validCode(), busy, Check, checks (+18 more)

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
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (68): Task 4: Web — cores das séries e gráficos do construtor, change(), formatMetric(), toNumber(), pageSlice(), metricText(), valueText(), title (+60 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (21): formatDate(), previewDay, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "session.ts"
Cohesion: 0.07
Nodes (23): vue-router@^5.4.0, pinia, vue-router, RouteMeta, vue-router, theme, Me, Theme (+15 more)

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
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.05
Nodes (56): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+48 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (21): Key, emit, missingDates, options, props, setDate(), setMode(), addFilter() (+13 more)

### Community 70 - "MetricStylePopover.vue"
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
Nodes (24): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+16 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (27): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+19 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.05
Nodes (51): t(), applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork (+43 more)

### Community 78 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 79 - "MetricStylePopover.vue"
Cohesion: 0.14
Nodes (18): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+10 more)

### Community 80 - "GAM"
Cohesion: 0.33
Nodes (6): Atribuição de sites, GAM, Networks, Sites e ad units, network(), site()

### Community 81 - "SessionsCard.vue"
Cohesion: 0.14
Nodes (20): UserRef, end(), ending, endingOthers, endOthers(), fail(), label(), loadError (+12 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.11
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 84 - "errorText"
Cohesion: 0.15
Nodes (18): errorText(), choose(), load(), choose(), confirmRemove(), load(), save(), load() (+10 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.11
Nodes (18): firstName, greeting, session, clientId, clientOptions, clients, firstPage(), load() (+10 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (28): busy, canManage, changed, current, monthNames, months, saved, session (+20 more)

### Community 87 - "api.ts"
Cohesion: 0.16
Nodes (22): api, baseHeaders(), companyChanged(), download(), Query, readCookie(), request(), RequestOptions (+14 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "inviteTaken"
Cohesion: 0.08
Nodes (35): model, Localized, SiteScope, busy, category, chosen, emit, groups (+27 more)

### Community 90 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.24
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+4 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (45): BLOCK_COUNT, FORMATS, installable(), KEY_NAMES, languageLabel(), TOOL_CARDS, ToolCard, writes() (+37 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.08
Nodes (29): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+21 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 96 - "TeamTabs.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 97 - "lucide-vue-next"
Cohesion: 0.10
Nodes (27): lucide-vue-next, reka-ui, props, up, open, model, cn(), kindClass() (+19 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.12
Nodes (28): chosen, defaultSites(), finishedSteps(), formatName(), RUN_TONE, runStateLabel(), siteSummary(), STEP_TONE (+20 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.15
Nodes (15): discount(), STATUS_TONE, data, kpis, loadError, minus(), money(), month (+7 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (15): kind, kinds, metric, metrics, open, props, ready, reportId (+7 more)

### Community 102 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 103 - "DashboardWidget.vue"
Cohesion: 0.14
Nodes (14): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+6 more)

### Community 104 - "ClientDocumentsCard.vue"
Cohesion: 0.20
Nodes (13): ClientDocumentsOverview, approve(), busy, emit, fail(), load(), overview, props (+5 more)

### Community 105 - "checklists/types.ts"
Cohesion: 0.19
Nodes (13): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistPerson (+5 more)

### Community 106 - "sites/rules.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 108 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 109 - "Input.vue"
Cohesion: 0.07
Nodes (25): model, busy, email, error, sent, submit(), choices, description (+17 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 112 - "InvoiceDocument.vue"
Cohesion: 0.29
Nodes (7): dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 113 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.17
Nodes (15): lang, amount, amountError, busy, emit, open, props, reason (+7 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (29): blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate, TemplateRole (+21 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.09
Nodes (38): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+30 more)

### Community 117 - "i18n.ts"
Cohesion: 0.05
Nodes (38): ApiError, auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo() (+30 more)

### Community 118 - "table.ts"
Cohesion: 0.10
Nodes (22): td, th, events, load(), loadError, open, page, pages (+14 more)

### Community 119 - "vue"
Cohesion: 0.08
Nodes (29): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+21 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), rowState, rowStateLabel() (+4 more)

### Community 122 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 123 - "results/types.ts"
Cohesion: 0.40
Nodes (5): CostKind, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 124 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.15
Nodes (14): gamToolService, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language, detail, network (+6 more)

### Community 126 - "Button.vue"
Cohesion: 0.10
Nodes (18): open, button, classes, Props, busy, canManage, description, editing (+10 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (19): profileInput(), openEdit(), busy, canChange, emit, manager, managerId, next (+11 more)

### Community 132 - "clients/service.ts"
Cohesion: 0.15
Nodes (19): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+11 more)

### Community 133 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 134 - "Button.vue"
Cohesion: 0.09
Nodes (23): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+15 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.07
Nodes (42): Task 3: Web — tipos, serviço e regras do construtor, vitest, @vue/test-utils, compare, options, period, selected, PERIOD_PRESETS (+34 more)

### Community 136 - "formatMonth"
Cohesion: 0.67
Nodes (3): formatMonth(), periodText(), monthOptions

### Community 137 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

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
Cohesion: 0.22
Nodes (9): FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewDefinition, ViewFilterSpec, ViewScreen (+1 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.09
Nodes (38): loadDraft(), filterable, AXIS_CHARTS, canExport(), chartAllowed(), Comparison, comparisonOf(), dimensionSources() (+30 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 146 - "vue"
Cohesion: 0.12
Nodes (10): vue, first, FunnelStep, props, box, failed, initial, props (+2 more)

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
Cohesion: 0.13
Nodes (26): chosen, create(), emit, name, open, templates, runKey(), runsQuery() (+18 more)

### Community 159 - "router.ts"
Cohesion: 0.15
Nodes (10): setCompanyChangedHandler(), setTabCompany(), setUnauthorizedHandler(), announceCompany(), CompanyMessage, onCompanyAnnounced(), followOtherTab(), router (+2 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `useSession`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `contracts/service.ts`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `ConfigPanel.vue`, `MetricStylePopover.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `ClientsResultsView.vue`, `MetricStylePopover.vue`, `SessionsCard.vue`, `reports/rules.ts`, `GAM`, `errorText`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `lucide-vue-next`, `GamRunView.vue`, `MfaView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `TeamTabs.vue`, `DashboardWidget.vue`, `ClientDocumentsCard.vue`, `sites/rules.ts`, `ClientSitesView.vue`, `Input.vue`, `NewTaskDialog.vue`, `InvoiceDocument.vue`, `priorityLabel`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `i18n.ts`, `table.ts`, `vue`, `checklists/rules.ts`, `ApiKeysCard.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `networkName`, `Button.vue`, `reports/types.ts`, `formatMonth`, `Pagination.vue`, `tasks/rules.ts`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `vue`, `ChecklistItemsView.vue`, `dashboards/types.ts`?**
  _High betweenness centrality (0.185) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `useSession`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Review Focus`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ClientsResultsView.vue`, `SessionsCard.vue`, `reports/rules.ts`, `GAM`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `GamRunView.vue`, `MfaView.vue`, `MyCommissionView.vue`, `DashboardWidget.vue`, `ClientDocumentsCard.vue`, `ClientSitesView.vue`, `Review Focus`, `Input.vue`, `NewTaskDialog.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `i18n.ts`, `table.ts`, `vue`, `ApiKeysCard.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `Button.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `dashboards/types.ts`, `router.ts`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `followOtherTab()` and `logout()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `useSession`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `session.ts`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `ConfigPanel.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ClientsResultsView.vue`, `MetricStylePopover.vue`, `SessionsCard.vue`, `reports/rules.ts`, `GAM`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `lucide-vue-next`, `GamRunView.vue`, `MfaView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `TeamTabs.vue`, `DashboardWidget.vue`, `ClientDocumentsCard.vue`, `ClientSitesView.vue`, `Input.vue`, `NewTaskDialog.vue`, `GroupedBarChart.vue`, `InvoiceDocument.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `i18n.ts`, `table.ts`, `vue`, `drag.ts`, `ApiKeysCard.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `Button.vue`, `reports/types.ts`, `Pagination.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `events.ts`, `BarChart.vue`, `dashboards/types.ts`, `router.ts`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._