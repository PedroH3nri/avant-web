# Graph Report - avant-web  (2026-11-09)

## Corpus Check
- 351 files · ~202,242 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3761 nodes · 9882 edges · 158 communities (150 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 127 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f36fb8a2`
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
- vue-router
- SavedViewsBar.vue
- LoadError.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- NewGroupDialog.vue
- ClientsView.vue
- InvoiceView.vue
- ClassifySitesDialog.vue
- pick
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- TeamTabs.vue
- GroupsView.vue
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
- render.ts
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
- api
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
- dashboards/rules.ts
- ProfileImageCard.vue
- NativeSelect.vue
- vue
- ClientSitesView.vue
- PasswordCard.vue
- useSession
- NewTaskDialog.vue
- InvoicesView.vue
- updates
- dashboards/types.ts
- AdjustmentDialog.vue
- TemplateEditorView.vue
- alerts/rules.ts
- groups/rules.ts
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- session.ts
- drag.ts
- checklists/rules.ts
- tailwindcss
- Avatar.vue
- invoices/types.ts
- gam_tools/types.ts
- errorText
- FakeSource
- ChecklistNotesCard.vue
- i18n-plugin.ts
- tasks/types.ts
- Card.vue
- vite
- errorToast
- SettingsView.vue
- reports/types.ts
- views/rules.ts
- Pagination.vue
- loadMembers
- costs/rules.ts
- ChecklistView.vue
- SaveReportDialog.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- SeatBar.vue
- checklists/types.ts
- Input.vue
- events.ts
- sites/service.ts
- virtual-i18n.d.ts
- Review Focus
- alerts/types.ts
- results/types.ts
- NewDashboardDialog.vue
- ClientNetworksCard.vue
- Field.vue
- tabs.ts
- networkName

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
10. `vitest` - 54 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (158 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (46): tn(), activeByRole(), personGoalAmount(), splitEvent(), active, allRoles(), busy, canManage (+38 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+39 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (32): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+24 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (40): auditActions, dict, errors, fallbackError, Key, changeLines, busy, canTransfer (+32 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (71): BarItem, largest, props, opacity(), point(), props, slices, total (+63 more)

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
Cohesion: 0.10
Nodes (21): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0 (+13 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "vue-router"
Cohesion: 0.10
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (21): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+13 more)

### Community 24 - "LoadError.vue"
Cohesion: 0.07
Nodes (33): busy, canManage, created(), creating, keys, load(), loadError, page (+25 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): amountText(), busy, canManage, check, checkFormula, costs, currencies, currencyOptions (+15 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "NewGroupDialog.vue"
Cohesion: 0.13
Nodes (15): busy, create(), description, duplicate, emit, name, open, people (+7 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (51): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+43 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 32 - "pick"
Cohesion: 0.14
Nodes (14): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+6 more)

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

### Community 37 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 38 - "GroupsView.vue"
Cohesion: 0.10
Nodes (17): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+9 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.15
Nodes (17): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+9 more)

### Community 40 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (25): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+17 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+32 more)

### Community 44 - "ServiceLineDialog.vue"
Cohesion: 0.11
Nodes (21): amount, amountError, busy, chosen, description, emit, open, options (+13 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.06
Nodes (43): emit, missingDates, options, props, setDate(), setMode(), COMPARE_MODES, comparing() (+35 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.09
Nodes (26): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+18 more)

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
Cohesion: 0.11
Nodes (20): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+12 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (69): first, FunnelStep, props, change(), formatMetric(), toNumber(), pageCount(), pageSlice() (+61 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, reward.js, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (22): Task 6: Web — construtor, @vueuse/core@^15.0.0, @vueuse/core, Action, busy, confirm(), enable(), fail() (+14 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "clients/types.ts"
Cohesion: 0.15
Nodes (19): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+11 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.10
Nodes (27): busy, drop(), input, pick(), problem, props, run(), open (+19 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (42): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+34 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.09
Nodes (33): COMMENT_MAX, COMMENT_MIN, commentRecipients(), eventText(), personName(), PRIORITIES, STATUS_TONE, STATUSES (+25 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.10
Nodes (25): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+17 more)

### Community 69 - "render.ts"
Cohesion: 0.05
Nodes (59): AdOutcome, GoogleTag, loadGoogleTag(), RewardedSlot, showRewardedAd(), finish(), tryNext(), SlotEvent (+51 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.17
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.11
Nodes (24): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+16 more)

### Community 74 - "RevenueStatusBadge.vue"
Cohesion: 0.17
Nodes (17): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, McmCandidate, Network, NetworkStatus, NetworkSummary (+9 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (52): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+44 more)

### Community 78 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 80 - "index.ts"
Cohesion: 0.11
Nodes (18): choose(), langs, session, open, session, auditText(), chooseLang(), fill() (+10 more)

### Community 81 - "gam_tools/rules.ts"
Cohesion: 0.13
Nodes (19): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), FORMATS, installable(), KEY_NAMES, siteSummary() (+11 more)

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
Cohesion: 0.10
Nodes (19): route, router, session, sessions, clientId, clientOptions, clients, firstPage() (+11 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (30): locale, busy, canManage, changed, current, monthNames, months, saved (+22 more)

### Community 87 - "api"
Cohesion: 0.22
Nodes (13): api, Query, CompanyRef, Items, Page, groupService, contractService, peopleService (+5 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.06
Nodes (39): Localized, SiteScope, busy, canManage, deleteOpen, deleting, dialog, editing (+31 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (27): model, busy, category, chipClass(), chosen, emit, groups, name (+19 more)

### Community 90 - "Field.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.11
Nodes (18): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+10 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "lucide-vue-next"
Cohesion: 0.09
Nodes (30): lucide-vue-next@^1.0.0, lucide-vue-next, reka-ui, props, up, open, model, model (+22 more)

### Community 96 - "ClientNetworksView.vue"
Cohesion: 0.10
Nodes (22): latestCall(), busy, confirm(), emit, props, reject(), rejectOpen, showError() (+14 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (23): emptyProfile(), profileBody(), profileInput(), closeForm(), create(), openEdit(), busy, canChange (+15 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.14
Nodes (15): finishedSteps(), formatName(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done (+7 more)

### Community 99 - "api.ts"
Cohesion: 0.19
Nodes (16): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+8 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (17): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, loadError, minus() (+9 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (26): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+18 more)

### Community 104 - "ProfileImageCard.vue"
Cohesion: 0.12
Nodes (21): UserRef, busy, confirm, load(), session, status, unlink(), busy (+13 more)

### Community 105 - "NativeSelect.vue"
Cohesion: 0.10
Nodes (20): compare, options, period, selected, PERIOD_PRESETS, addFilter(), addTyped(), CHARTS (+12 more)

### Community 106 - "vue"
Cohesion: 0.06
Nodes (36): vue, dot, formatDate(), td, th, previewDay, events, load() (+28 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.12
Nodes (16): box, failed, initial, props, canSeeChecklists, firstPage(), load(), loadError (+8 more)

### Community 108 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 109 - "useSession"
Cohesion: 0.07
Nodes (26): vue-router, pick(), route, router, session, RouteMeta, vue-router, NAV_GROUPS (+18 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.10
Nodes (20): assignee, client, clientOptions, create(), description, domain, emit, open (+12 more)

### Community 111 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 112 - "updates"
Cohesion: 0.17
Nodes (11): imagens, patterns, update-types, interval, updates, directory, groups, package-ecosystem (+3 more)

### Community 113 - "dashboards/types.ts"
Cohesion: 0.25
Nodes (14): RunTarget, Dashboard, DashboardFilters, DashboardInput, DashboardPage, DashboardRun, DashboardTemplate, HomeDashboard (+6 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (29): blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition, TemplateAudience (+21 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 117 - "groups/rules.ts"
Cohesion: 0.23
Nodes (8): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, free, memberGroup

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "session.ts"
Cohesion: 0.08
Nodes (20): @vue/test-utils@^2.5.1, pinia, @vue/test-utils, Me, Theme, accountService, authService, InvitationPreview (+12 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.17
Nodes (13): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+5 more)

### Community 122 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 123 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 124 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.13
Nodes (19): gamToolService, GamFormat, GamRunState, GamStep, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail (+11 more)

### Community 126 - "errorText"
Cohesion: 0.08
Nodes (32): errorText(), confirmRemove(), load(), save(), load(), load(), saveStart(), load() (+24 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.24
Nodes (9): COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 131 - "Card.vue"
Cohesion: 0.40
Nodes (3): firstName, greeting, session

### Community 133 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 134 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.08
Nodes (45): Task 3: Web — tipos, serviço e regras do construtor, vitest, Lang, draft, draftKey, emit, failure, goal (+37 more)

### Community 136 - "views/rules.ts"
Cohesion: 0.24
Nodes (10): viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewDefinition, ViewFilterSpec (+2 more)

### Community 137 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 138 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 140 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.09
Nodes (36): loadDraft(), filterable, AXIS_CHARTS, BuilderState, canExport(), chartAllowed(), Comparison, dimensionSources() (+28 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 148 - "checklists/types.ts"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 149 - "Input.vue"
Cohesion: 0.13
Nodes (13): button, classes, Props, props, choices, emit, invalid, name (+5 more)

### Community 150 - "events.ts"
Cohesion: 0.18
Nodes (14): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+6 more)

### Community 152 - "sites/service.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 155 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 156 - "alerts/types.ts"
Cohesion: 0.39
Nodes (7): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 157 - "results/types.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 158 - "NewDashboardDialog.vue"
Cohesion: 0.29
Nodes (7): chosen, create(), emit, name, open, templates, dashboardService

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "Field.vue"
Cohesion: 0.29
Nodes (5): busy, email, error, sent, submit()

### Community 161 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 162 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `vue-router`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `NewGroupDialog.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `TeamTabs.vue`, `GroupsView.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `views/rules.ts`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `gam_tools/rules.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `MetricStylePopover.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `dashboards/rules.ts`, `ProfileImageCard.vue`, `NativeSelect.vue`, `vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `useSession`, `NewTaskDialog.vue`, `InvoicesView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `checklists/rules.ts`, `errorText`, `ChecklistNotesCard.vue`, `Card.vue`, `errorToast`, `SettingsView.vue`, `reports/types.ts`, `Pagination.vue`, `loadMembers`, `costs/rules.ts`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `Input.vue`, `sites/service.ts`, `NewDashboardDialog.vue`, `ClientNetworksCard.vue`, `Field.vue`, `networkName`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04979591836734694 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `vue-router`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `NewGroupDialog.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `PeopleView.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `api.ts`, `MyCommissionView.vue`, `AlertDialog.vue`, `ProfileImageCard.vue`, `vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `useSession`, `NewTaskDialog.vue`, `InvoicesView.vue`, `dashboards/types.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `ChecklistNotesCard.vue`, `errorToast`, `SettingsView.vue`, `reports/types.ts`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ClientNetworksCard.vue`, `Field.vue`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `logout()` and `followOtherTab()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `vue-router`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `NewGroupDialog.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `ResultsView.vue`, `TeamTabs.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `MetricStylePopover.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `dashboards/rules.ts`, `ProfileImageCard.vue`, `NativeSelect.vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `useSession`, `NewTaskDialog.vue`, `InvoicesView.vue`, `dashboards/types.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `session.ts`, `drag.ts`, `Avatar.vue`, `errorText`, `ChecklistNotesCard.vue`, `Card.vue`, `SettingsView.vue`, `reports/types.ts`, `Pagination.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `ChecklistItemDialog.vue`, `SeatBar.vue`, `Input.vue`, `events.ts`, `NewDashboardDialog.vue`, `ClientNetworksCard.vue`, `Field.vue`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._