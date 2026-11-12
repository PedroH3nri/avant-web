# Graph Report - wt-avant-web-seguranca  (2026-11-11)

## Corpus Check
- 382 files · ~249,983 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 7, .conf 2, .toml 1)

## Summary
- 4437 nodes · 11616 edges · 181 communities (175 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 139 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e5308ca6`
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
- @vueuse/core
- StaffView.vue
- GoalTemplatesDialog.vue
- steps
- ServiceLineDialog.vue
- SavedViewsBar.vue
- ApiKeysCard.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- CompanyGoalCard.vue
- pick
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- Input.vue
- GroupsView.vue
- DashboardGrid.vue
- ApiKeyDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- vue-sonner
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- errorText
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- ClassifySitesDialog.vue
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
- avant-tag
- views/rules.ts
- InviteView.vue
- FiscalDataCard.vue
- GoalsView.vue
- checklists/types.ts
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- TemplatesView.vue
- index.ts
- ClientSitesView.vue
- ChecklistsView.vue
- MfaCard.vue
- ClientsResultsView.vue
- contracts/types.ts
- MyCommissionView.vue
- lib/types.ts
- RolesView.vue
- RoleDialog.vue
- locale
- api.ts
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- Button.vue
- table.ts
- AccountManagerCard.vue
- rewards/rules.ts
- account/service.ts
- ConfigPanel.vue
- AddWidgetDialog.vue
- AlertDialog.vue
- dashboards/rules.ts
- CascadeRuleView.vue
- reports/rules.ts
- Pagination.vue
- RewardMetricsView.vue
- PageHeader.vue
- ApiError
- NewTaskDialog.vue
- InvoicesView.vue
- updates
- RewardsView.vue
- AdjustmentDialog.vue
- TemplateEditorView.vue
- alerts/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- vue
- drag.ts
- checklists/rules.ts
- rewards/types.ts
- DashboardWidget.vue
- RevenueStatusBadge.vue
- lang
- InvoiceServicesView.vue
- NetworkReviewActions.vue
- ChecklistNotesCard.vue
- Key
- tasks/types.ts
- BarChart.vue
- ClientNetworksView.vue
- FieldsPanel.vue
- alerts/types.ts
- vitest
- PriceRuleView.vue
- invoices/types.ts
- PriceRuleSiteView.vue
- emptyProfile
- PayeeDialog.vue
- ChecklistView.vue
- SaveReportDialog.vue
- tasks/rules.ts
- ChecklistItemDialog.vue
- support-tasks.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- PageBody.vue
- Dialog.vue
- ResetView.vue
- ad_tags/rules.ts
- PasswordCard.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- Review Focus
- ClientTeamsView.vue
- price_rules/types.ts
- costs/rules.ts
- ClientNetworksCard.vue
- loaders/service.ts
- t
- AdTagMetricsView.vue
- views/types.ts
- LoadersView.vue
- RecoveryCodes.vue
- GamRunView.vue
- AdTagPreview.vue
- results/types.ts
- priorityLabel
- PriceRuleSitesView.vue
- dayText
- metricColor
- dashboards/types.ts
- Field.vue
- ad-tags.test.ts
- loaders/rules.ts
- loaders.test.ts
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `hour()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → tests/price-rules.test.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts

## Import Cycles
- None detected.

## Communities (181 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (47): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+39 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (56): builderState, canExport(), chartAllowed(), emptyDraft(), fittingChart(), fromTemplate(), keepKnownRoles(), toInput() (+48 more)

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
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (68): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+60 more)

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

### Community 18 - "@vueuse/core"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 21 - "steps"
Cohesion: 0.10
Nodes (22): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+14 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.07
Nodes (27): approval(), tree(), busy, canAssign, canManage, classifying, errorToast(), id (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (50): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+42 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (26): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirmOpen (+18 more)

### Community 31 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 32 - "pick"
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

### Community 37 - "Input.vue"
Cohesion: 0.10
Nodes (19): props, up, panelItem(), railItem(), model, model, cn(), kindClass() (+11 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.05
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.15
Nodes (21): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+13 more)

### Community 40 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "vue-sonner"
Cohesion: 0.10
Nodes (23): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+15 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.05
Nodes (55): pageCount(), pageSlice(), emit, missingDates, options, props, setDate(), setMode() (+47 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.06
Nodes (38): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+30 more)

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

### Community 51 - "errorText"
Cohesion: 0.10
Nodes (23): pick(), route, router, session, errorText(), choose(), end(), ending (+15 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (21): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+13 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (63): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), metricText(), valueText() (+55 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): loadExtras(), category, categoryOptions, changed, emit, keep, open, props (+14 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

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
Nodes (56): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+48 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "views/rules.ts"
Cohesion: 0.13
Nodes (26): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+18 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "checklists/types.ts"
Cohesion: 0.19
Nodes (13): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistPerson (+5 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (40): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+32 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (61): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+53 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 80 - "index.ts"
Cohesion: 0.07
Nodes (25): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+17 more)

### Community 81 - "ClientSitesView.vue"
Cohesion: 0.12
Nodes (16): box, failed, initial, props, canSeeChecklists, firstPage(), load(), loadError (+8 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.11
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 84 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+8 more)

### Community 85 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.13
Nodes (26): api, Query, CompanyRef, Items, Page, costService, clientService, contractService (+18 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (35): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+27 more)

### Community 90 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "api.ts"
Cohesion: 0.25
Nodes (13): baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request(), RequestOptions (+5 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.07
Nodes (39): defaultSites(), installable(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+31 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "Button.vue"
Cohesion: 0.16
Nodes (14): lucide-vue-next, reka-ui, button, classes, Props, payee, PAYER, props (+6 more)

### Community 96 - "table.ts"
Cohesion: 0.09
Nodes (21): props, seats, dot, td, th, events, load(), loadError (+13 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (37): UserRef, CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption (+29 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "account/service.ts"
Cohesion: 0.21
Nodes (12): busy, confirm, load(), session, status, unlink(), ApiKey, ApiKeyCreated (+4 more)

### Community 100 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (56): cascadeFunnel, cascadeLadder(), cascadePoints(), dropPercent(), nearestTier(), newestFirst(), percentText(), base (+48 more)

### Community 105 - "reports/rules.ts"
Cohesion: 0.06
Nodes (57): Task 3: Web — tipos, serviço e regras do construtor, Lang, filterable, applyScale(), emit, error, from, gradient() (+49 more)

### Community 106 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "PageHeader.vue"
Cohesion: 0.13
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 109 - "ApiError"
Cohesion: 0.09
Nodes (21): vue-router, RouteMeta, vue-router, ApiError, safeNext(), busy, email, error (+13 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 112 - "updates"
Cohesion: 0.13
Nodes (14): patterns, update-types, dependencias, imagens, patterns, update-types, interval, updates (+6 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.07
Nodes (26): model, saveFile(), installSnippet(), RewardService, base, columns, copied, deleted (+18 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (31): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+23 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+9 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "vue"
Cohesion: 0.11
Nodes (17): pinia, vue, open, session, NAV_GROUPS, SIBLINGS, useNavigation(), logout() (+9 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), ROW_TONE, rowState (+4 more)

### Community 122 - "rewards/types.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (22): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+14 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (8): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueTrend, SCALING

### Community 125 - "lang"
Cohesion: 0.13
Nodes (18): lang, gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail (+10 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 127 - "NetworkReviewActions.vue"
Cohesion: 0.39
Nodes (7): busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "Key"
Cohesion: 0.15
Nodes (12): auditActions, dict, errors, fallbackError, Key, COLUMN, Lang, languageMessages (+4 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "ClientNetworksView.vue"
Cohesion: 0.14
Nodes (14): latestCall(), awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall (+6 more)

### Community 133 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 134 - "alerts/types.ts"
Cohesion: 0.33
Nodes (8): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 135 - "vitest"
Cohesion: 0.09
Nodes (19): vitest, @vue/test-utils, reportService, CustomMetricCheck, MetricCatalog, ReportResult, catalog, check (+11 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (51): model, model, gainQuery(), modelChoices(), modelCounts(), siteStatus(), active, automaticRuleCount (+43 more)

### Community 139 - "emptyProfile"
Cohesion: 0.40
Nodes (5): emptyProfile(), profileInput(), closeForm(), create(), openEdit()

### Community 140 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail(), groups (+8 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.18
Nodes (9): choices, description, emit, invalid, name, open, props, roleIds (+1 more)

### Community 143 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "support-tasks.test.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (32): ACTION_KEY, blockKind(), BlockModelKind, CASCADE_REASON_KEY, CASCADE_SERIES, CascadePoint, CascadeSeries, CascadeStep (+24 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.07
Nodes (29): formProblems(), withTemplate(), base, busy, clientOptions, clients, device, exiting (+21 more)

### Community 148 - "PageBody.vue"
Cohesion: 0.17
Nodes (9): canManage, dialogOpen, editing, items, load(), loadError, move(), moving (+1 more)

### Community 149 - "Dialog.vue"
Cohesion: 0.14
Nodes (10): open, open, choices, emit, invalid, name, open, props (+2 more)

### Community 150 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (39): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+31 more)

### Community 152 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 156 - "ClientTeamsView.vue"
Cohesion: 0.12
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 158 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.09
Nodes (25): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+17 more)

### Community 160 - "loaders/service.ts"
Cohesion: 0.27
Nodes (9): previewLoader, Loader, LoaderAdblock, LoaderInput, LoaderOption, LoaderStyle, LoaderTag, LoaderTemplate (+1 more)

### Community 161 - "t"
Cohesion: 0.15
Nodes (19): formatDate(), t(), linkActive(), NavItem, visibleGroups(), tiles, seenText(), previewDay (+11 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.11
Nodes (20): healthSummary(), share(), AdTagHealth, base, decimal, filled, health, integer (+12 more)

### Community 163 - "views/types.ts"
Cohesion: 0.36
Nodes (7): viewService, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewFilterSpec, ViewScreen

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "RecoveryCodes.vue"
Cohesion: 0.10
Nodes (23): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+15 more)

### Community 166 - "GamRunView.vue"
Cohesion: 0.09
Nodes (33): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, KEY_NAMES (+25 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 169 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "dayText"
Cohesion: 0.50
Nodes (4): dayLabel, dayOptions, dayText(), adUnitOptions

### Community 172 - "metricColor"
Cohesion: 0.25
Nodes (13): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), chart, hourLabel(), boughtColor (+5 more)

### Community 174 - "dashboards/types.ts"
Cohesion: 0.14
Nodes (21): chosen, create(), emit, name, open, templates, templateService, Dashboard (+13 more)

### Community 176 - "ad-tags.test.ts"
Cohesion: 0.13
Nodes (16): adTagsPath(), blankSettings(), chosenDay(), newBlock(), settingsProblem(), tagStatus(), AdTagService, AdTagDraft (+8 more)

### Community 177 - "loaders/rules.ts"
Cohesion: 0.18
Nodes (10): ADBLOCK_HINT, ADBLOCK_TITLE, BLUR_LEVELS, BLUR_PIXELS, LIMITS, MAX_SECONDS, STYLES, TEMPLATE_HINT (+2 more)

### Community 178 - "loaders.test.ts"
Cohesion: 0.20
Nodes (10): goToLoader(), blankInput(), inputOf(), loadersPath(), previewDomain(), toPayload(), LoaderService, domain (+2 more)

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

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `pick`, `ResultsView.vue`, `Input.vue`, `GroupsView.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `views/rules.ts`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `TemplatesView.vue`, `index.ts`, `ClientSitesView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientsResultsView.vue`, `contracts/types.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GamToolsView.vue`, `SidebarRail.vue`, `Button.vue`, `table.ts`, `AccountManagerCard.vue`, `rewards/rules.ts`, `account/service.ts`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `dashboards/rules.ts`, `CascadeRuleView.vue`, `reports/rules.ts`, `Pagination.vue`, `RewardMetricsView.vue`, `PageHeader.vue`, `ApiError`, `NewTaskDialog.vue`, `InvoicesView.vue`, `RewardsView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `RewardLeadsCard.vue`, `vue`, `checklists/rules.ts`, `DashboardWidget.vue`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `NetworkReviewActions.vue`, `ChecklistNotesCard.vue`, `ClientNetworksView.vue`, `FieldsPanel.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `emptyProfile`, `PayeeDialog.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `tasks/rules.ts`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `PageBody.vue`, `Dialog.vue`, `ResetView.vue`, `ad_tags/rules.ts`, `PasswordCard.vue`, `AdTagsView.vue`, `ClientTeamsView.vue`, `costs/rules.ts`, `ClientNetworksCard.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `RecoveryCodes.vue`, `GamRunView.vue`, `AdTagPreview.vue`, `priorityLabel`, `PriceRuleSitesView.vue`, `dayText`, `metricColor`, `dashboards/types.ts`, `Field.vue`, `ad-tags.test.ts`, `loaders.test.ts`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.198) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `pick`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `TemplatesView.vue`, `index.ts`, `ClientSitesView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientsResultsView.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GamToolsView.vue`, `table.ts`, `AccountManagerCard.vue`, `rewards/rules.ts`, `account/service.ts`, `AlertDialog.vue`, `CascadeRuleView.vue`, `RewardMetricsView.vue`, `PageHeader.vue`, `ApiError`, `NewTaskDialog.vue`, `InvoicesView.vue`, `RewardsView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `vue`, `DashboardWidget.vue`, `InvoiceServicesView.vue`, `NetworkReviewActions.vue`, `ChecklistNotesCard.vue`, `ClientNetworksView.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `PageBody.vue`, `ResetView.vue`, `PasswordCard.vue`, `AdTagsView.vue`, `Review Focus`, `ClientTeamsView.vue`, `ClientNetworksCard.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `GamRunView.vue`, `PriceRuleSitesView.vue`, `loaders.test.ts`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050980392156862744 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `pick`, `ResultsView.vue`, `Input.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `ApiKeyDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `errorText`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `TemplatesView.vue`, `index.ts`, `ClientSitesView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientsResultsView.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GamToolsView.vue`, `SidebarRail.vue`, `Button.vue`, `table.ts`, `AccountManagerCard.vue`, `account/service.ts`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `dashboards/rules.ts`, `CascadeRuleView.vue`, `reports/rules.ts`, `Pagination.vue`, `RewardMetricsView.vue`, `PageHeader.vue`, `ApiError`, `NewTaskDialog.vue`, `InvoicesView.vue`, `RewardsView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `drag.ts`, `DashboardWidget.vue`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `NetworkReviewActions.vue`, `ChecklistNotesCard.vue`, `BarChart.vue`, `ClientNetworksView.vue`, `FieldsPanel.vue`, `vitest`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `PageBody.vue`, `Dialog.vue`, `ResetView.vue`, `ad_tags/rules.ts`, `PasswordCard.vue`, `AdTagsView.vue`, `ClientTeamsView.vue`, `ClientNetworksCard.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `RecoveryCodes.vue`, `GamRunView.vue`, `AdTagPreview.vue`, `PriceRuleSitesView.vue`, `dashboards/types.ts`, `Field.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._