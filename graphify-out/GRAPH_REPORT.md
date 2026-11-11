# Graph Report - avant-web  (2026-11-11)

## Corpus Check
- 382 files · ~248,719 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 4415 nodes · 11560 edges · 176 communities (170 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 139 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `15a9061c`
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
- Badge.vue
- steps
- ConfigPanel.vue
- SidebarNav.vue
- ApiKeyDialog.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- GroupsView.vue
- ClientsView.vue
- InvoiceView.vue
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
- GAM
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- Button.vue
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
- avant-tag
- InvoicesView.vue
- InviteView.vue
- invoices/rules.ts
- GoalsView.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- AdTagEditView.vue
- TemplatesView.vue
- LoginView.vue
- gam_tools/rules.ts
- reports/rules.ts
- GAM
- vue-sonner
- ClientTeamsView.vue
- networkName
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
- AccountManagerCard.vue
- GamRunView.vue
- api.ts
- AddWidgetDialog.vue
- AlertDialog.vue
- index.ts
- CascadeRuleView.vue
- reports/rules.ts
- DataTable.vue
- ClientSitesView.vue
- PasswordCard.vue
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
- PriceRuleView.vue
- Pagination.vue
- PriceRuleSiteView.vue
- tasks/rules.ts
- ChecklistView.vue
- SaveReportDialog.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- results/types.ts
- price_rules/rules.ts
- LoaderEditView.vue
- ChecklistItemsView.vue
- SaveViewDialog.vue
- ad_tags/rules.ts
- sites/service.ts
- virtual-i18n.d.ts
- AdTagsView.vue
- vue
- alerts/types.ts
- price_rules/types.ts
- networkName
- useSession
- AdTagMetricsView.vue
- DashboardWidget.vue
- LoadersView.vue
- @vueuse/core
- t
- AdTagPreview.vue
- errorText
- ClientSitesView.vue
- PriceRuleSitesView.vue
- ad-tags.test.ts
- metricColor
- ClientsResultsView.vue
- dashboards/types.ts
- ClientDocumentsCard.vue
- ad_tags/service.ts
- Key
- loaders/service.ts
- loaders.test.ts
- vite.embed.config.ts
- LoaderPreview.vue
- priceRulePermission

## God Nodes (most connected - your core abstractions)
1. `t()` - 511 edges
2. `errorText()` - 312 edges
3. `vue` - 164 edges
4. `ApiError` - 116 edges
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
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (176 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (43): tn(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+35 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (36): emptyDefinition(), adding, canManage, canTemplate, catalog, chosenId, create(), creating (+28 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState, toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+39 more)

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
Cohesion: 0.08
Nodes (48): busy, canTransfer, duplicate, emit, errors, form, open, props (+40 more)

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
Cohesion: 0.04
Nodes (68): props, up, compare, options, period, selected, countryName(), dailySeries() (+60 more)

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
Cohesion: 0.15
Nodes (12): API first e chaves de API, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa, Empresa e equipe (+4 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+12 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "Badge.vue"
Cohesion: 0.13
Nodes (11): route, router, session, open, session, busy, confirm, load() (+3 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (39): formatAgo(), UserRef, busy, canManage, created(), creating, keys, load() (+31 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (42): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+34 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (50): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+42 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.04
Nodes (68): FiscalData, busy, complete, documentLabel, emit, form, open, options (+60 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.13
Nodes (21): category, categoryOptions, changed, emit, keep, open, props, responsible (+13 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (26): pick(), options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions, busy (+18 more)

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
Nodes (16): panelItem(), railItem(), cn(), kindClass(), tab(), choice(), valueClass(), valueClass() (+8 more)

### Community 38 - "Review Focus"
Cohesion: 0.05
Nodes (45): broken, hue, initials, props, busy, create(), description, duplicate (+37 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.18
Nodes (17): drag, emit, grid, props, { run, failure, loading }, source, stored, widgetFailure() (+9 more)

### Community 40 - "PageHeader.vue"
Cohesion: 0.06
Nodes (34): permissionGroupLabel(), busy, catalog, chosen, copied, copyToken(), create(), DAYS (+26 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.11
Nodes (27): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+19 more)

### Community 44 - "GAM"
Cohesion: 0.33
Nodes (6): Atribuição de sites, GAM, Networks, Sites e ad units, network(), site()

### Community 45 - "session.ts"
Cohesion: 0.06
Nodes (44): emit, missingDates, options, props, setDate(), setMode(), COMPARE_MODES, comparing() (+36 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.07
Nodes (36): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+28 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.09
Nodes (26): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+18 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/types.ts"
Cohesion: 0.10
Nodes (22): model, monthKey(), available, chosen, create(), createBusy, createMonth, creating (+14 more)

### Community 51 - "Button.vue"
Cohesion: 0.40
Nodes (4): open, button, classes, Props

### Community 52 - "clients/rules.ts"
Cohesion: 0.09
Nodes (24): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+16 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (63): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, change(), formatMetric(), toNumber(), metricText() (+55 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "AccountManagerCard.vue"
Cohesion: 0.15
Nodes (18): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+10 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanyImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

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
Nodes (53): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+45 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+21 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (33): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+25 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "invoices/rules.ts"
Cohesion: 0.13
Nodes (15): busy, complete, documentLabel, form, load(), loaded, options, save() (+7 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.04
Nodes (77): locale, busy, canManage, changed, current, load(), monthNames, months (+69 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.39
Nodes (8): detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend, SCALING

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.05
Nodes (51): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+43 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (62): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+54 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 80 - "LoginView.vue"
Cohesion: 0.06
Nodes (33): vue, choose(), LINES, showBootFailure(), auditText(), chooseLang(), fill(), loaded (+25 more)

### Community 81 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (27): chosen, defaultSites(), finishedSteps(), formatName(), RUN_TONE, runStateLabel(), siteSummary(), STEP_TONE (+19 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.12
Nodes (15): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+7 more)

### Community 84 - "vue-sonner"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, langs, session, Accent, accentCss(), accentFor(), ACCENTS (+14 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 87 - "lib/types.ts"
Cohesion: 0.15
Nodes (19): api, Query, CompanyRef, Items, Page, DashboardPage, groupService, contractService (+11 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (19): RoleOption, canManage, canTeam, editable(), isMe(), loaded, loadError, members (+11 more)

### Community 89 - "inviteTaken"
Cohesion: 0.07
Nodes (35): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+27 more)

### Community 90 - "locale"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (44): BLOCK_COUNT, FORMATS, installable(), KEY_NAMES, languageLabel(), TOOL_CARDS, ToolCard, writes() (+36 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "reka-ui"
Cohesion: 0.17
Nodes (13): lucide-vue-next, reka-ui, open, dates, monthName(), payee, PAYER, props (+5 more)

### Community 96 - "ClientNetworksView.vue"
Cohesion: 0.09
Nodes (23): td, th, events, load(), loadError, open, page, pages (+15 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (22): profileInput(), clientService, openEdit(), busy, canChange, changeLines, emit, manager (+14 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.08
Nodes (32): dayLabel, dayOptions, answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE (+24 more)

### Community 99 - "api.ts"
Cohesion: 0.10
Nodes (25): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+17 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.13
Nodes (23): add(), emit, kind, kinds, metric, metrics, open, props (+15 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 103 - "index.ts"
Cohesion: 0.12
Nodes (29): ordered, ACCOUNT_SIZE, Box, CHART_SIZE, clamp(), cleanFilters(), compactLayout(), FILTER_DIMENSIONS (+21 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (48): dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency, decisionPages (+40 more)

### Community 105 - "reports/rules.ts"
Cohesion: 0.10
Nodes (37): loadDraft(), filterable, AXIS_CHARTS, canExport(), chartAllowed(), Comparison, comparisonOf(), dimensionSources() (+29 more)

### Community 106 - "DataTable.vue"
Cohesion: 0.24
Nodes (8): PAGE_SIZE, pageCount(), pageSlice(), dimensions, page, props, rows, shownRows

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 109 - "vue-router"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "GroupsView.vue"
Cohesion: 0.09
Nodes (19): dot, months, months, monthOptions(), months, STATUS_TONE, COLUMNS, DEFAULT_VIEW (+11 more)

### Community 112 - "updates"
Cohesion: 0.17
Nodes (11): imagens, patterns, update-types, interval, updates, directory, groups, package-ecosystem (+3 more)

### Community 113 - "useSession"
Cohesion: 0.08
Nodes (23): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+15 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.20
Nodes (13): amount, amountError, busy, emit, open, props, reason, reasonTouched (+5 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.12
Nodes (27): blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate, adding (+19 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+9 more)

### Community 117 - "commission-components.test.ts"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "vue"
Cohesion: 0.07
Nodes (25): @vue/test-utils@^2.5.1, pinia, vitest, vue-router, @vue/test-utils, RouteMeta, vue-router, reconnectEvents() (+17 more)

### Community 120 - "drag.ts"
Cohesion: 0.42
Nodes (9): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop() (+1 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), rowState, STATES (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.16
Nodes (16): saveFile(), downloadInstall(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+8 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.15
Nodes (13): gamToolService, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language, detail, network (+5 more)

### Community 126 - "Button.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.16
Nodes (11): auditActions, dict, errors, fallbackError, COLUMN, Lang, languageMessages, Source (+3 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "priorityLabel"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "clients/service.ts"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 133 - "pick"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 134 - "errorText"
Cohesion: 0.08
Nodes (26): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+18 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.09
Nodes (34): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, period, props, ReportDraft, customMetricService, reportService (+26 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (50): moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary, base (+42 more)

### Community 137 - "Pagination.vue"
Cohesion: 0.25
Nodes (6): first, last, numbers, page, props, pageNumbers()

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (49): model, model, gainQuery(), siteStatus(), active, automaticCount, automaticRuleCount, base (+41 more)

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "results/types.ts"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (34): ACTION_KEY, blockKind(), BlockModelKind, CASCADE_REASON_KEY, CASCADE_SERIES, cascadeFunnel, cascadeLadder(), CascadePoint (+26 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.07
Nodes (30): formProblems(), previewDomain(), withTemplate(), base, busy, clientOptions, clients, device (+22 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (18): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist (+10 more)

### Community 149 - "SaveViewDialog.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.09
Nodes (31): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+23 more)

### Community 152 - "sites/service.ts"
Cohesion: 0.35
Nodes (7): approval(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "vue"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 156 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 159 - "networkName"
Cohesion: 0.10
Nodes (22): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+14 more)

### Community 161 - "useSession"
Cohesion: 0.20
Nodes (14): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+6 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.12
Nodes (19): healthSummary(), share(), base, decimal, filled, health, integer, load() (+11 more)

### Community 163 - "DashboardWidget.vue"
Cohesion: 0.13
Nodes (15): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+7 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "@vueuse/core"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 166 - "t"
Cohesion: 0.09
Nodes (29): formatDate(), t(), tiles, seenText(), previewDay, apiMessage(), chooseMine(), duplicate() (+21 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (17): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+9 more)

### Community 168 - "errorText"
Cohesion: 0.13
Nodes (21): pick(), errorText(), choose(), choose(), load(), load(), saveStart(), load() (+13 more)

### Community 169 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "ad-tags.test.ts"
Cohesion: 0.16
Nodes (13): adTagsPath(), blankSettings(), chosenDay(), newBlock(), settingsProblem(), tagStatus(), addBlock(), day (+5 more)

### Community 172 - "metricColor"
Cohesion: 0.25
Nodes (13): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), chart, hourLabel(), boughtColor (+5 more)

### Community 173 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (22): CostKind, clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError (+14 more)

### Community 174 - "dashboards/types.ts"
Cohesion: 0.08
Nodes (33): dimensions, filters, periods, props, chosen, create(), emit, name (+25 more)

### Community 175 - "ClientDocumentsCard.vue"
Cohesion: 0.23
Nodes (12): approve(), busy, downloadFile(), emit, fail(), load(), overview, props (+4 more)

### Community 176 - "ad_tags/service.ts"
Cohesion: 0.17
Nodes (14): AdTagService, AdTag, AdTagDevice, AdTagDraft, AdTagEdge, AdTagHealth, AdTagHealthDay, AdTagRuleMode (+6 more)

### Community 177 - "Key"
Cohesion: 0.17
Nodes (11): Key, ADBLOCK_HINT, ADBLOCK_TITLE, BLUR_LEVELS, BLUR_PIXELS, LIMITS, MAX_SECONDS, STYLES (+3 more)

### Community 178 - "loaders/service.ts"
Cohesion: 0.27
Nodes (9): previewLoader, Loader, LoaderAdblock, LoaderInput, LoaderOption, LoaderStyle, LoaderTag, LoaderTemplate (+1 more)

### Community 180 - "loaders.test.ts"
Cohesion: 0.28
Nodes (7): blankInput(), inputOf(), loadersPath(), toPayload(), LoaderService, load(), save()

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.25
Nodes (5): vite@^8.3.5, vite, ENTRIES, Entry, source

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 186 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `Badge.vue`, `ConfigPanel.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `Review Focus`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `Button.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `vue-sonner`, `ClientTeamsView.vue`, `networkName`, `RolesView.vue`, `inviteTaken`, `locale`, `MetricStylePopover.vue`, `ConfigPanel.vue`, `networks/service.ts`, `reka-ui`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `api.ts`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `CascadeRuleView.vue`, `reports/rules.ts`, `DataTable.vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `commission-components.test.ts`, `checklists/rules.ts`, `formatDate`, `Button.vue`, `ChecklistNotesCard.vue`, `clients/service.ts`, `pick`, `errorText`, `reports/types.ts`, `PriceRuleView.vue`, `Pagination.vue`, `PriceRuleSiteView.vue`, `tasks/rules.ts`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `ChecklistItemsView.vue`, `SaveViewDialog.vue`, `ad_tags/rules.ts`, `sites/service.ts`, `AdTagsView.vue`, `networkName`, `useSession`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `AdTagPreview.vue`, `errorText`, `ClientSitesView.vue`, `PriceRuleSitesView.vue`, `ad-tags.test.ts`, `metricColor`, `ClientsResultsView.vue`, `dashboards/types.ts`, `ClientDocumentsCard.vue`, `loaders.test.ts`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05087881591119334 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `Badge.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `Review Focus`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `vue-sonner`, `ClientTeamsView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `api.ts`, `AlertDialog.vue`, `CascadeRuleView.vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `Review Focus`, `Button.vue`, `ChecklistNotesCard.vue`, `clients/service.ts`, `errorText`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `ChecklistItemsView.vue`, `AdTagsView.vue`, `vue`, `networkName`, `useSession`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `t`, `ClientSitesView.vue`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `ClientDocumentsCard.vue`, `loaders.test.ts`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05384615384615385 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `LoginView.vue` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `Badge.vue`, `ConfigPanel.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `Review Focus`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `Button.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `avant-tag`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `vue-sonner`, `ClientTeamsView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `MetricStylePopover.vue`, `ConfigPanel.vue`, `networks/service.ts`, `reka-ui`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `api.ts`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `CascadeRuleView.vue`, `DataTable.vue`, `ClientSitesView.vue`, `PasswordCard.vue`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `vue`, `drag.ts`, `Button.vue`, `ChecklistNotesCard.vue`, `priorityLabel`, `clients/service.ts`, `pick`, `errorText`, `reports/types.ts`, `PriceRuleView.vue`, `Pagination.vue`, `PriceRuleSiteView.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `ChecklistItemsView.vue`, `SaveViewDialog.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `networkName`, `useSession`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `@vueuse/core`, `AdTagPreview.vue`, `ClientSitesView.vue`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `dashboards/types.ts`, `ClientDocumentsCard.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._