# Graph Report - avant-web  (2026-11-11)

## Corpus Check
- 382 files · ~249,888 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 6, .conf 2, .webmanifest 1)

## Summary
- 4426 nodes · 11601 edges · 180 communities (174 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 139 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `efb394cb`
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
- ServiceLineDialog.vue
- SidebarNav.vue
- ApiKeyDialog.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- GroupsView.vue
- ClientsView.vue
- InvoiceView.vue
- CompanyGoalCard.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- cn
- GroupsView.vue
- DashboardGrid.vue
- PageHeader.vue
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- PerformanceView.vue
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- NewGroupDialog.vue
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- @vueuse/core
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
- avant-tag
- InvoicesView.vue
- InviteView.vue
- invoices/rules.ts
- GoalsView.vue
- checklists/types.ts
- commission-components.test.ts
- GroupsView.vue
- errorText
- AdTagEditView.vue
- TemplatesView.vue
- LoginView.vue
- GamRunView.vue
- reports/rules.ts
- GAM
- pick
- groups/rules.ts
- MyCommissionView.vue
- lib/types.ts
- RolesView.vue
- inviteTaken
- locale
- lang
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- reka-ui
- table.ts
- AccountManagerCard.vue
- GamRunView.vue
- ApiError
- table.ts
- AddWidgetDialog.vue
- AlertDialog.vue
- index.ts
- CascadeRuleView.vue
- reports/rules.ts
- DataTable.vue
- ClientSitesView.vue
- vue-sonner
- errorText
- NewTaskDialog.vue
- GroupsView.vue
- updates
- useSession
- AdjustmentDialog.vue
- TemplateEditorView.vue
- alerts/rules.ts
- commission-components.test.ts
- Review Focus
- session.ts
- drag.ts
- checklists/rules.ts
- formatDate
- DashboardWidget.vue
- events.ts
- gam_tools/types.ts
- Button.vue
- t
- ChecklistNotesCard.vue
- i18n-plugin.ts
- tasks/types.ts
- priorityLabel
- ClientNetworksView.vue
- pick
- alerts/types.ts
- reports/types.ts
- PriceRuleView.vue
- invoices/types.ts
- PriceRuleSiteView.vue
- fail
- PayeeDialog.vue
- ChecklistView.vue
- SaveReportDialog.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- results/types.ts
- price_rules/rules.ts
- LoaderEditView.vue
- Status.vue
- SaveViewDialog.vue
- profileOk
- ad_tags/rules.ts
- Avatar.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- DataTable.vue
- TableState.vue
- price_rules/types.ts
- costs/rules.ts
- ClientNetworksCard.vue
- load
- useSession
- AdTagMetricsView.vue
- priceRulePermission
- LoadersView.vue
- AdTagInstallDialog.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- results/types.ts
- PriceRuleSitesView.vue
- metricColor
- Input.vue
- ColorField.vue
- ad_tags/service.ts
- Key
- loaders.test.ts
- tabs.ts
- overrides
- vite.embed.config.ts
- LoaderPreview.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 511 edges
2. `errorText()` - 312 edges
3. `vue` - 165 edges
4. `ApiError` - 117 edges
5. `lucide-vue-next` - 93 edges
6. `useSession` - 91 edges
7. `vue-sonner` - 85 edges
8. `vitest` - 59 edges
9. `toNumber()` - 59 edges
10. `vue-router` - 56 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (180 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (52): cleanFilters(), editableWidgets(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage (+44 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (41): audit, auditPage, auditPages, auditTotal, candidates, canDocuments, canManage, canNotes (+33 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (59): loadDraft(), builderState, canExport(), draftOf(), emptyDraft(), fromQuery(), fromReport(), fromTemplate() (+51 more)

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
Cohesion: 0.08
Nodes (49): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+41 more)

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
Nodes (20): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+12 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (18): amount, amountError, busy, chosen, description, emit, open, options (+10 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.08
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (37): busy, canManage, created(), creating, keys, load(), loadError, page (+29 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.05
Nodes (54): category, categoryOptions, changed, emit, keep, open, props, responsible (+46 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (54): emptyProfile(), profileBody(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+46 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (26): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirmOpen (+18 more)

### Community 31 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

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

### Community 37 - "cn"
Cohesion: 0.11
Nodes (17): props, up, panelItem(), railItem(), cn(), kindClass(), choice(), valueClass() (+9 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.13
Nodes (25): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+17 more)

### Community 40 - "PageHeader.vue"
Cohesion: 0.08
Nodes (28): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+20 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (33): presetRange(), previousRange(), sameRange(), shiftDay(), utcToday(), load(), section(), barFormat() (+25 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (40): NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), ReportPreview (+32 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (25): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, valid, validCode(), awaiting, busy (+17 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.06
Nodes (40): networkName(), networkTone(), statusKey(), statusTone, McmCandidate, Network, NetworkStatus, NetworkSummary (+32 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/types.ts"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "NewGroupDialog.vue"
Cohesion: 0.13
Nodes (15): busy, create(), description, duplicate, emit, name, open, people (+7 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (42): first, FunnelStep, props, title, description, empty, first, firstFormat (+34 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (20): Task 6: Web — construtor, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "@vueuse/core"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanyImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "load"
Cohesion: 0.10
Nodes (24): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+16 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.07
Nodes (36): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+28 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.05
Nodes (53): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+45 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (40): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+32 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "invoices/rules.ts"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "checklists/types.ts"
Cohesion: 0.19
Nodes (13): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistPerson (+5 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.04
Nodes (58): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+50 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (67): model, chosenDay(), settingsProblem(), toPayload(), absentUnits, armed, base, blocking (+59 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (16): apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError, makeHome() (+8 more)

### Community 80 - "LoginView.vue"
Cohesion: 0.11
Nodes (19): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+11 more)

### Community 81 - "GamRunView.vue"
Cohesion: 0.13
Nodes (15): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), done (+7 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.12
Nodes (15): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+7 more)

### Community 84 - "pick"
Cohesion: 0.14
Nodes (14): pick(), metricOptions, ruleText(), options, transferOptions, ruleEnd(), setGoal(), roleName() (+6 more)

### Community 85 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.15
Nodes (14): STATUS_TONE, data, kpis, loadError, minus(), money(), month, months (+6 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.12
Nodes (29): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+21 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+15 more)

### Community 89 - "inviteTaken"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "lang"
Cohesion: 0.20
Nodes (8): lang, client, managerChange, perms, settings, staffOptions, team, toastError

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): defaultSites(), installable(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "reka-ui"
Cohesion: 0.19
Nodes (11): lucide-vue-next, reka-ui, button, classes, Props, open, open, session (+3 more)

### Community 96 - "table.ts"
Cohesion: 0.15
Nodes (13): props, seats, companyService, CompanyDetail, CompanyFiscal, company, error, hasSeats (+5 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.06
Nodes (49): Lang, CompanyStatus, STAFF_STATUSES, STATUS_TONE, clientService, AuditEntry, Client, ClientDetail (+41 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "ApiError"
Cohesion: 0.13
Nodes (11): pick(), route, router, session, ApiError, busy, confirm, load() (+3 more)

### Community 100 - "table.ts"
Cohesion: 0.27
Nodes (8): td, th, dates, monthName(), payee, PAYER, props, InvoiceItem

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (27): add(), emit, kind, kinds, metric, metrics, open, props (+19 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 103 - "index.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (48): cascadeLadder(), dropPercent(), nearestTier(), base, busy, changeStatus(), currency, decisionPages (+40 more)

### Community 105 - "reports/rules.ts"
Cohesion: 0.05
Nodes (54): Key, emit, missingDates, options, props, setDate(), setMode(), addFilter() (+46 more)

### Community 106 - "DataTable.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "vue-sonner"
Cohesion: 0.06
Nodes (29): vue-sonner, toasterTheme, busy, current, emit, mismatch, password, password2 (+21 more)

### Community 109 - "errorText"
Cohesion: 0.05
Nodes (44): vue-router, RouteMeta, vue-router, errorText(), safeNext(), busy, email, error (+36 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.10
Nodes (20): model, assignee, client, clientOptions, create(), description, domain, emit (+12 more)

### Community 111 - "GroupsView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 112 - "updates"
Cohesion: 0.17
Nodes (11): imagens, patterns, update-types, interval, updates, directory, groups, package-ecosystem (+3 more)

### Community 113 - "useSession"
Cohesion: 0.08
Nodes (23): model, installSnippet(), base, columns, copied, deleted, load(), loadError (+15 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (38): templateService, blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole(), withAudience() (+30 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.20
Nodes (16): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+8 more)

### Community 117 - "commission-components.test.ts"
Cohesion: 0.09
Nodes (22): saveFile(), downloadInstall(), answer, answerOptions, busy, columns, confirmRemove(), exportLeads() (+14 more)

### Community 118 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "session.ts"
Cohesion: 0.10
Nodes (22): pinia, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme(), swatchColor() (+14 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), rowState, rowStateLabel() (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "DashboardWidget.vue"
Cohesion: 0.14
Nodes (14): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+6 more)

### Community 124 - "events.ts"
Cohesion: 0.12
Nodes (15): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+7 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.15
Nodes (13): gamToolService, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language, detail, network (+5 more)

### Community 126 - "Button.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 127 - "t"
Cohesion: 0.10
Nodes (24): open, t(), tn(), changeLines, roleLine(), busy, confirm(), emit (+16 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.16
Nodes (11): auditActions, dict, errors, fallbackError, COLUMN, Lang, languageMessages, Source (+3 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "priorityLabel"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "ClientNetworksView.vue"
Cohesion: 0.12
Nodes (24): ClientNetwork, ClientRef, ClientSite, awaitingOnly, canAssign, firstPage(), load(), loadError (+16 more)

### Community 133 - "pick"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 134 - "alerts/types.ts"
Cohesion: 0.42
Nodes (7): Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 135 - "reports/types.ts"
Cohesion: 0.06
Nodes (49): Task 3: Web — tipos, serviço e regras do construtor, vitest, @vue/test-utils, compare, options, period, selected, PERIOD_PRESETS (+41 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (48): model, hourPoints(), lastDayTotals(), tierOptions(), maxOptions, minOptions, startOptions, base (+40 more)

### Community 137 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (50): model, gainQuery(), modelChoices(), modelCounts(), siteStatus(), active, automaticRuleCount, base (+42 more)

### Community 139 - "fail"
Cohesion: 0.28
Nodes (9): profileInput(), changeOwner(), fail(), openEdit(), reload(), removeImage(), saveImage(), sendInvite() (+1 more)

### Community 140 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): ROW_TONE, splitRows(), checking, checklist, checklistId, checkNow(), fail(), groups (+8 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.12
Nodes (15): Dashboard, DashboardInput, choices, description, emit, invalid, name, open (+7 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.17
Nodes (12): COMMENT_MAX, COMMENT_MIN, DESCRIPTION_MAX, eventText(), STATUS_TONE, STATUSES, StatusFilter, statusLabel() (+4 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "results/types.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.08
Nodes (31): ACTION_KEY, blockKind(), BlockModelKind, CASCADE_REASON_KEY, CASCADE_SERIES, cascadeFunnel, CascadePoint, cascadePoints() (+23 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.07
Nodes (27): withTemplate(), base, busy, clientOptions, clients, device, exiting, input (+19 more)

### Community 148 - "Status.vue"
Cohesion: 0.15
Nodes (10): dot, canManage, dialogOpen, editing, items, load(), loadError, move() (+2 more)

### Community 149 - "SaveViewDialog.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 150 - "profileOk"
Cohesion: 0.33
Nodes (6): profileOk(), formOk, managerSaved(), reloadAudit(), save(), saveProfile()

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.09
Nodes (31): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+23 more)

### Community 152 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (34): adTagPermission(), tagStatus(), canManage, status, base, busy, canManage, columns (+26 more)

### Community 155 - "DataTable.vue"
Cohesion: 0.11
Nodes (17): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento (+9 more)

### Community 156 - "TableState.vue"
Cohesion: 0.16
Nodes (10): vue, events, load(), loadError, open, page, pages, props (+2 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 158 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.07
Nodes (28): latestCall(), add(), addBusy, addError, addOpen, canAssign, code, load() (+20 more)

### Community 160 - "load"
Cohesion: 0.50
Nodes (4): auditChanged(), load(), loadAudit(), showAudit()

### Community 161 - "useSession"
Cohesion: 0.26
Nodes (11): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), useSession (+3 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (23): formatDate(), healthSummary(), share(), base, decimal, filled, health, integer (+15 more)

### Community 163 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.13
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, KEY_NAMES, siteSummary() (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "results/types.ts"
Cohesion: 0.33
Nodes (5): Cost, CostInput, CostKind, FormulaCheck, CostLine

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 172 - "metricColor"
Cohesion: 0.13
Nodes (24): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+16 more)

### Community 174 - "Input.vue"
Cohesion: 0.22
Nodes (8): model, chosen, create(), emit, name, open, templates, DashboardTemplate

### Community 176 - "ad_tags/service.ts"
Cohesion: 0.15
Nodes (19): adTagsPath(), blankSettings(), newBlock(), AdTagService, AdTag, AdTagBlock, AdTagDevice, AdTagDraft (+11 more)

### Community 177 - "Key"
Cohesion: 0.13
Nodes (19): ADBLOCK_HINT, ADBLOCK_TITLE, BLUR_LEVELS, BLUR_PIXELS, LIMITS, MAX_SECONDS, previewLoader, STYLES (+11 more)

### Community 178 - "loaders.test.ts"
Cohesion: 0.20
Nodes (10): blankInput(), formProblems(), inputOf(), previewDomain(), toPayload(), LoaderService, domain, load() (+2 more)

### Community 179 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.25
Nodes (5): vite@^8.3.5, vite, ENTRIES, Entry, source

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `GroupsView.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PerformanceView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `NewGroupDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `GamRunView.vue`, `reports/rules.ts`, `GAM`, `pick`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `reka-ui`, `table.ts`, `AccountManagerCard.vue`, `GamRunView.vue`, `ApiError`, `table.ts`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `index.ts`, `CascadeRuleView.vue`, `reports/rules.ts`, `DataTable.vue`, `ClientSitesView.vue`, `vue-sonner`, `errorText`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `commission-components.test.ts`, `session.ts`, `checklists/rules.ts`, `DashboardWidget.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `ClientNetworksView.vue`, `pick`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `fail`, `PayeeDialog.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `Status.vue`, `SaveViewDialog.vue`, `profileOk`, `ad_tags/rules.ts`, `AdTagsView.vue`, `DataTable.vue`, `TableState.vue`, `costs/rules.ts`, `ClientNetworksCard.vue`, `useSession`, `AdTagMetricsView.vue`, `LoadersView.vue`, `AdTagInstallDialog.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `PriceRuleSitesView.vue`, `metricColor`, `Input.vue`, `ColorField.vue`, `loaders.test.ts`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PerformanceView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `NewGroupDialog.vue`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `GamRunView.vue`, `reports/rules.ts`, `GAM`, `pick`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `table.ts`, `AccountManagerCard.vue`, `GamRunView.vue`, `ApiError`, `AlertDialog.vue`, `CascadeRuleView.vue`, `ClientSitesView.vue`, `vue-sonner`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `Review Focus`, `session.ts`, `DashboardWidget.vue`, `Button.vue`, `t`, `ChecklistNotesCard.vue`, `ClientNetworksView.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `fail`, `PayeeDialog.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `Status.vue`, `AdTagsView.vue`, `TableState.vue`, `ClientNetworksCard.vue`, `load`, `useSession`, `AdTagMetricsView.vue`, `LoadersView.vue`, `PriceRuleSitesView.vue`, `loaders.test.ts`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045372050816696916 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `TableState.vue` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `GroupsView.vue`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PerformanceView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `NewGroupDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `@vueuse/core`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `avant-tag`, `InvoicesView.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `GamRunView.vue`, `reports/rules.ts`, `GAM`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `networks/service.ts`, `reka-ui`, `table.ts`, `AccountManagerCard.vue`, `ApiError`, `table.ts`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `index.ts`, `CascadeRuleView.vue`, `reports/rules.ts`, `DataTable.vue`, `ClientSitesView.vue`, `vue-sonner`, `errorText`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `session.ts`, `drag.ts`, `DashboardWidget.vue`, `events.ts`, `Button.vue`, `t`, `ChecklistNotesCard.vue`, `priorityLabel`, `ClientNetworksView.vue`, `pick`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `Status.vue`, `SaveViewDialog.vue`, `ad_tags/rules.ts`, `Avatar.vue`, `AdTagsView.vue`, `DataTable.vue`, `ClientNetworksCard.vue`, `useSession`, `AdTagMetricsView.vue`, `LoadersView.vue`, `AdTagInstallDialog.vue`, `AdTagPreview.vue`, `PriceRuleSitesView.vue`, `Input.vue`, `ColorField.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.046511627906976744 - nodes in this community are weakly interconnected._