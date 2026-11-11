# Graph Report - avant-web  (2026-11-11)

## Corpus Check
- 382 files · ~248,208 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 4415 nodes · 11560 edges · 187 communities (180 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 139 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f992d9f4`
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
- AccountManagerCard.vue
- GamRunView.vue
- api.ts
- MyCommissionView.vue
- AddWidgetDialog.vue
- AlertDialog.vue
- index.ts
- CascadeRuleView.vue
- reports/rules.ts
- table.ts
- ClientSitesView.vue
- vue-sonner
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
- PriceRuleView.vue
- Pagination.vue
- PriceRuleSiteView.vue
- tasks/rules.ts
- costs/rules.ts
- ChecklistView.vue
- SaveReportDialog.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- results/types.ts
- price_rules/rules.ts
- LoaderEditView.vue
- ChecklistItemsView.vue
- SaveViewDialog.vue
- events.ts
- ad_tags/rules.ts
- sites/service.ts
- virtual-i18n.d.ts
- AdTagsView.vue
- vue
- alerts/types.ts
- price_rules/types.ts
- GroupsView.vue
- networkName
- formatMonth
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
- costs/service.ts
- DashboardFiltersBar.vue
- ClientDocumentsCard.vue
- ad_tags/service.ts
- Key
- loaders/service.ts
- NewDashboardDialog.vue
- loaders.test.ts
- vite.embed.config.ts
- tabs.ts
- AdTagInstallDialog.vue
- LoaderPreview.vue
- dayText
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

## Communities (187 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles (+36 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.06
Nodes (35): emptyDefinition(), adding, canManage, canTemplate, catalog, chosenId, create(), creating (+27 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState, toInput(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric(), busy, canManage (+39 more)

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
Nodes (37): busy, canTransfer, duplicate, emit, errors, form, open, props (+29 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (46): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+38 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (75): props, up, compare, options, period, selected, change(), countryName() (+67 more)

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
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "dashboards/rules.ts"
Cohesion: 0.12
Nodes (18): vue, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.09
Nodes (29): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+21 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (39): formatAgo(), UserRef, busy, canManage, created(), creating, keys, load() (+31 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (50): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+42 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.07
Nodes (26): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirmOpen (+18 more)

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
Cohesion: 0.11
Nodes (17): panelItem(), railItem(), cn(), kindClass(), tab(), choice(), valueClass(), dot() (+9 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (23): busy, create(), description, duplicate, emit, name, open, people (+15 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.16
Nodes (19): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+11 more)

### Community 40 - "PageHeader.vue"
Cohesion: 0.07
Nodes (29): permissionGroupLabel(), busy, catalog, chosen, copied, copyToken(), create(), DAYS (+21 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.11
Nodes (27): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+19 more)

### Community 44 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (15): amount, amountError, busy, chosen, description, emit, open, options (+7 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (40): NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), ReportPreview (+32 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+14 more)

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
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "errorText"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.09
Nodes (24): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+16 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (65): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), metricText(), valueText() (+57 more)

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
Nodes (32): months, tone, companyGoalYears(), goalTone(), monthOptions(), roleTemplates(), goalService, GoalMode (+24 more)

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
Nodes (44): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+36 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (62): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+54 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 80 - "LoginView.vue"
Cohesion: 0.10
Nodes (17): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+9 more)

### Community 81 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.12
Nodes (15): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+7 more)

### Community 84 - "AccentCard.vue"
Cohesion: 0.23
Nodes (12): Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme(), swatchColor(), THEMES (+4 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (20): busy, canManage, changed, current, load(), monthNames, months, save() (+12 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.15
Nodes (19): api, Query, CompanyRef, Items, Page, DashboardPage, groupService, contractService (+11 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "inviteTaken"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "locale"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "MetricStylePopover.vue"
Cohesion: 0.15
Nodes (17): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+9 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "reka-ui"
Cohesion: 0.14
Nodes (17): lucide-vue-next, reka-ui, open, button, classes, Props, open, dates (+9 more)

### Community 96 - "ClientNetworksView.vue"
Cohesion: 0.13
Nodes (13): awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall, page (+5 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (22): profileInput(), clientService, openEdit(), busy, canChange, changeLines, emit, manager (+14 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.09
Nodes (28): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+20 more)

### Community 99 - "api.ts"
Cohesion: 0.13
Nodes (21): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+13 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.18
Nodes (11): locale, STATUS_TONE, data, kpis, loadError, minus(), money(), month (+3 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (24): add(), emit, kind, kinds, metric, metrics, open, props (+16 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 103 - "index.ts"
Cohesion: 0.13
Nodes (26): ACCOUNT_SIZE, Box, CHART_SIZE, clamp(), cleanFilters(), compactLayout(), FILTER_DIMENSIONS, filtersChanged() (+18 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (51): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+43 more)

### Community 105 - "reports/rules.ts"
Cohesion: 0.07
Nodes (42): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+34 more)

### Community 106 - "table.ts"
Cohesion: 0.09
Nodes (25): pageSlice(), td, th, events, load(), loadError, open, page (+17 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "vue-sonner"
Cohesion: 0.08
Nodes (23): vue-sonner, toasterTheme, busy, confirm, load(), session, status, unlink() (+15 more)

### Community 109 - "vue-router"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "GroupsView.vue"
Cohesion: 0.10
Nodes (15): model, dot, COLUMNS, DEFAULT_VIEW, invoices, loadError, month, months (+7 more)

### Community 112 - "updates"
Cohesion: 0.17
Nodes (11): imagens, patterns, update-types, interval, updates, directory, groups, package-ecosystem (+3 more)

### Community 113 - "useSession"
Cohesion: 0.08
Nodes (24): model, installSnippet(), base, columns, copied, deleted, load(), loadError (+16 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.13
Nodes (18): amount, amountError, busy, emit, open, props, reason, reasonTouched (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (39): templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), Dashboard (+31 more)

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
Nodes (26): @vue/test-utils@^2.5.1, pinia, vitest, vue-router, @vue/test-utils, RouteMeta, vue-router, reconnectEvents() (+18 more)

### Community 120 - "drag.ts"
Cohesion: 0.57
Nodes (8): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop()

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), rowState, STATES (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.16
Nodes (16): saveFile(), downloadInstall(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+8 more)

### Community 123 - "networks/rules.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 124 - "LoadError.vue"
Cohesion: 0.23
Nodes (13): FiscalData, invoiceService, AvailableMonth, InvoiceFilters, InvoiceItem, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+5 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

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
Cohesion: 0.13
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.09
Nodes (33): Task 3: Web — tipos, serviço e regras do construtor, Lang, DashboardRun, emit, period, props, ReportDraft, customMetricService (+25 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (50): moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary, base (+42 more)

### Community 137 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (48): model, model, gainQuery(), siteStatus(), active, automaticCount, automaticRuleCount, base (+40 more)

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

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
Nodes (32): ACTION_KEY, blockKind(), BlockModelKind, CASCADE_REASON_KEY, CASCADE_SERIES, cascadeFunnel, CascadePoint, cascadePoints() (+24 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.07
Nodes (30): formProblems(), previewDomain(), withTemplate(), base, busy, clientOptions, clients, device (+22 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (18): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist (+10 more)

### Community 149 - "SaveViewDialog.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 150 - "events.ts"
Cohesion: 0.19
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+5 more)

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

### Community 158 - "GroupsView.vue"
Cohesion: 0.08
Nodes (21): broken, hue, initials, props, allGroups, canManage, created(), creating (+13 more)

### Community 159 - "networkName"
Cohesion: 0.10
Nodes (22): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+14 more)

### Community 161 - "useSession"
Cohesion: 0.12
Nodes (19): route, router, session, open, session, linkActive(), NAV_GROUPS, NavGroup (+11 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (23): formatDate(), healthSummary(), share(), base, decimal, filled, health, integer (+15 more)

### Community 163 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (23): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+15 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "@vueuse/core"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 166 - "t"
Cohesion: 0.13
Nodes (19): t(), apiMessage(), chooseMine(), duplicate(), makeDefault(), remove(), save(), saveAsTemplate() (+11 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "errorText"
Cohesion: 0.15
Nodes (17): pick(), errorText(), choose(), choose(), load(), load(), saveStart(), load() (+9 more)

### Community 169 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "ad-tags.test.ts"
Cohesion: 0.14
Nodes (15): adTagsPath(), blankSettings(), chosenDay(), newBlock(), settingsProblem(), tagStatus(), AdTagService, AdTagBlock (+7 more)

### Community 172 - "metricColor"
Cohesion: 0.25
Nodes (13): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), chart, hourLabel(), boughtColor (+5 more)

### Community 173 - "costs/service.ts"
Cohesion: 0.20
Nodes (10): costService, Cost, CostInput, CostKind, FormulaCheck, resultService, CompanyResults, CostLine (+2 more)

### Community 174 - "DashboardFiltersBar.vue"
Cohesion: 0.15
Nodes (12): dimensions, filters, periods, props, filterPeriod(), withPeriod(), withValue(), DashboardFilters (+4 more)

### Community 175 - "ClientDocumentsCard.vue"
Cohesion: 0.23
Nodes (12): approve(), busy, downloadFile(), emit, fail(), load(), overview, props (+4 more)

### Community 176 - "ad_tags/service.ts"
Cohesion: 0.23
Nodes (11): AdTag, AdTagDevice, AdTagDraft, AdTagEdge, AdTagHealth, AdTagHealthDay, AdTagRuleMode, AdTagSiteOption (+3 more)

### Community 177 - "Key"
Cohesion: 0.17
Nodes (11): Key, ADBLOCK_HINT, ADBLOCK_TITLE, BLUR_LEVELS, BLUR_PIXELS, LIMITS, MAX_SECONDS, STYLES (+3 more)

### Community 178 - "loaders/service.ts"
Cohesion: 0.27
Nodes (9): previewLoader, Loader, LoaderAdblock, LoaderInput, LoaderOption, LoaderStyle, LoaderTag, LoaderTemplate (+1 more)

### Community 179 - "NewDashboardDialog.vue"
Cohesion: 0.25
Nodes (8): chosen, create(), emit, name, open, templates, dashboardService, DashboardTemplate

### Community 180 - "loaders.test.ts"
Cohesion: 0.28
Nodes (7): blankInput(), inputOf(), loadersPath(), toPayload(), LoaderService, load(), save()

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.25
Nodes (5): vite@^8.3.5, vite, ENTRIES, Entry, source

### Community 182 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 183 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "dayText"
Cohesion: 0.50
Nodes (4): dayLabel, dayOptions, dayText(), adUnitOptions

### Community 186 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `Review Focus`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `AccentCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `MetricStylePopover.vue`, `ConfigPanel.vue`, `networks/service.ts`, `reka-ui`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `api.ts`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `CascadeRuleView.vue`, `reports/rules.ts`, `table.ts`, `ClientSitesView.vue`, `vue-sonner`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `commission-components.test.ts`, `checklists/rules.ts`, `formatDate`, `networks/rules.ts`, `Button.vue`, `ChecklistNotesCard.vue`, `clients/service.ts`, `pick`, `errorText`, `reports/types.ts`, `PriceRuleView.vue`, `Pagination.vue`, `PriceRuleSiteView.vue`, `tasks/rules.ts`, `costs/rules.ts`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `ChecklistItemsView.vue`, `SaveViewDialog.vue`, `ad_tags/rules.ts`, `sites/service.ts`, `AdTagsView.vue`, `GroupsView.vue`, `networkName`, `formatMonth`, `useSession`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `AdTagPreview.vue`, `errorText`, `ClientSitesView.vue`, `PriceRuleSitesView.vue`, `ad-tags.test.ts`, `metricColor`, `DashboardFiltersBar.vue`, `ClientDocumentsCard.vue`, `NewDashboardDialog.vue`, `loaders.test.ts`, `AdTagInstallDialog.vue`, `LoaderPreview.vue`, `dayText`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05053191489361702 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `dashboards/rules.ts`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `Review Focus`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InvoicesView.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `AccentCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `ConfigPanel.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `api.ts`, `MyCommissionView.vue`, `AlertDialog.vue`, `CascadeRuleView.vue`, `table.ts`, `ClientSitesView.vue`, `vue-sonner`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `Review Focus`, `Button.vue`, `ChecklistNotesCard.vue`, `clients/service.ts`, `errorText`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `ChecklistItemsView.vue`, `AdTagsView.vue`, `vue`, `GroupsView.vue`, `networkName`, `useSession`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `t`, `ClientSitesView.vue`, `PriceRuleSitesView.vue`, `ClientDocumentsCard.vue`, `loaders.test.ts`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.0553306342780027 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `dashboards/rules.ts` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `cn`, `Review Focus`, `DashboardGrid.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ServiceLineDialog.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `avant-tag`, `InvoicesView.vue`, `InviteView.vue`, `invoices/rules.ts`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `AdTagEditView.vue`, `TemplatesView.vue`, `LoginView.vue`, `gam_tools/rules.ts`, `reports/rules.ts`, `GAM`, `AccentCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `MetricStylePopover.vue`, `ConfigPanel.vue`, `networks/service.ts`, `reka-ui`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `api.ts`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `index.ts`, `CascadeRuleView.vue`, `reports/rules.ts`, `table.ts`, `ClientSitesView.vue`, `vue-sonner`, `vue-router`, `NewTaskDialog.vue`, `GroupsView.vue`, `useSession`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `vue`, `Button.vue`, `ChecklistNotesCard.vue`, `priorityLabel`, `clients/service.ts`, `pick`, `errorText`, `reports/types.ts`, `PriceRuleView.vue`, `Pagination.vue`, `PriceRuleSiteView.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `ChecklistItemsView.vue`, `SaveViewDialog.vue`, `events.ts`, `ad_tags/rules.ts`, `AdTagsView.vue`, `GroupsView.vue`, `networkName`, `formatMonth`, `useSession`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `@vueuse/core`, `t`, `AdTagPreview.vue`, `ClientSitesView.vue`, `PriceRuleSitesView.vue`, `DashboardFiltersBar.vue`, `ClientDocumentsCard.vue`, `NewDashboardDialog.vue`, `AdTagInstallDialog.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._