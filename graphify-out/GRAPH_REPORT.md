# Graph Report - wt-web  (2026-11-12)

## Corpus Check
- 383 files · ~250,129 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 7, .conf 2, .toml 1)

## Summary
- 4442 nodes · 11622 edges · 181 communities (175 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 139 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e9cb15d1`
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
- LoadError.vue
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
- TeamTabs.vue
- GroupsView.vue
- DashboardGrid.vue
- pick
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
- AccountStatus.vue
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- ClassifySitesDialog.vue
- .oxlintrc.json
- ApiError
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- cleanFilters
- session.ts
- FiscalDataCard.vue
- GoalsView.vue
- checklists/types.ts
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- TemplatesView.vue
- index.ts
- GroupsView.vue
- ChecklistsView.vue
- MfaCard.vue
- ClientsResultsView.vue
- contracts/types.ts
- MyCommissionView.vue
- api.ts
- RolesView.vue
- RoleDialog.vue
- CurrencyCard.vue
- api.ts
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- lucide-vue-next
- AccountStatus.vue
- AccountManagerCard.vue
- rewards/rules.ts
- ApiError
- ConfigPanel.vue
- AddWidgetDialog.vue
- GroupedBarChart.vue
- dashboards/rules.ts
- CascadeRuleView.vue
- MetricStylePopover.vue
- Pagination.vue
- RewardMetricsView.vue
- formatDate
- LoginView.vue
- ad-tags.test.ts
- InvoicesView.vue
- updates
- RewardsView.vue
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- vue
- drag.ts
- GamRunView.vue
- rewards/service.ts
- cn
- RevenueStatusBadge.vue
- gam-tools-view.test.ts
- errorText
- NativeSelect.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- Field.vue
- BarChart.vue
- ClientSitesView.vue
- NewTaskDialog.vue
- views/rules.ts
- reports/types.ts
- PriceRuleView.vue
- events.ts
- PriceRuleSiteView.vue
- DashboardWidget.vue
- NativeSelect.vue
- ChecklistView.vue
- Input.vue
- Button.vue
- ChecklistItemDialog.vue
- Status.vue
- price_rules/rules.ts
- LoaderEditView.vue
- clients/types.ts
- ClientNetworksView.vue
- tasks/types.ts
- ad_tags/rules.ts
- ad_tags/types.ts
- virtual-i18n.d.ts
- AdTagsView.vue
- Review Focus
- ProfileImageCard.vue
- price_rules/types.ts
- costs/rules.ts
- ClientNetworksCard.vue
- commission-components.test.ts
- useSession
- AdTagMetricsView.vue
- NetworkReviewActions.vue
- LoadersView.vue
- RecoveryCodes.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- results/types.ts
- priorityLabel
- PriceRuleSitesView.vue
- t
- tasks/rules.ts
- support-tasks.test.ts
- NewDashboardDialog.vue
- tabs.ts
- FakeSource
- vue-router
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
8. `vitest` - 60 edges
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
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (45): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (50): builderState, toInput(), toQuery(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric(), busy (+42 more)

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
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (48): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+40 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.11
Nodes (16): areaPaths, box, chartWidth, hovered, labelStep, linePath(), padding, plotHeight (+8 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (83): LineSeries, compare, period, selected, colorVar(), FALLBACK, METRIC_COLOR, metricColor() (+75 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.14
Nodes (15): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+7 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.11
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "@vueuse/core"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, qrcode@1.5.4, reka-ui@^2.11.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.10
Nodes (22): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+14 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.10
Nodes (31): FiscalData, amount, amountError, busy, chosen, description, emit, open (+23 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "LoadError.vue"
Cohesion: 0.09
Nodes (26): td, th, busy, canManage, created(), creating, keys, load() (+18 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (53): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+45 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.08
Nodes (23): open, open, invoicePdfUrl(), backTo, busy, Confirm, confirmOpen, confirmText (+15 more)

### Community 31 - "CompanyGoalCard.vue"
Cohesion: 0.10
Nodes (22): busy, canManage, changed, current, load(), monthNames, months, save() (+14 more)

### Community 32 - "pick"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

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
Cohesion: 0.10
Nodes (18): props, up, panelItem(), railItem(), cn(), kindClass(), tab(), choice() (+10 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.10
Nodes (23): busy, create(), description, duplicate, emit, name, open, people (+15 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.09
Nodes (29): vue, first, FunnelStep, props, drag, emit, grid, props (+21 more)

### Community 40 - "pick"
Cohesion: 0.08
Nodes (26): pick(), options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions, busy (+18 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "vue-sonner"
Cohesion: 0.11
Nodes (21): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+13 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.06
Nodes (45): pageCount(), pageSlice(), shownRows, NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged(), viewDraft() (+37 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.08
Nodes (28): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, McmCandidate, Network, NetworkStatus, NetworkSummary (+20 more)

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
Cohesion: 0.12
Nodes (20): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+12 more)

### Community 51 - "AccountStatus.vue"
Cohesion: 0.10
Nodes (22): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+14 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.14
Nodes (13): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+5 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (63): lang, locale, metricColors(), formatMetric(), toNumber(), metricText(), amountText(), title (+55 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.09
Nodes (23): Task 6: Web — construtor, firstName, greeting, session, Action, busy, confirm(), enable() (+15 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ClassifySitesDialog.vue"
Cohesion: 0.10
Nodes (26): category, categoryOptions, changed, emit, keep, open, props, responsible (+18 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ApiError"
Cohesion: 0.15
Nodes (14): box, failed, initial, props, busy, drop(), input, pick() (+6 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.10
Nodes (25): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+17 more)

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

### Community 70 - "cleanFilters"
Cohesion: 0.15
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "session.ts"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.08
Nodes (34): mark, money(), percent, props, share, tone, companyGoalYears(), goalTone() (+26 more)

### Community 74 - "checklists/types.ts"
Cohesion: 0.20
Nodes (10): ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistPerson, ChecklistProgress, ChecklistState, CheckOutcome (+2 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (29): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+21 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (40): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+32 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (63): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+55 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateRoles, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.10
Nodes (18): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+10 more)

### Community 81 - "GroupsView.vue"
Cohesion: 0.08
Nodes (21): broken, hue, initials, props, allGroups, canManage, created(), creating (+13 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.09
Nodes (28): UserRef, busy, confirm, load(), session, status, unlink(), busy (+20 more)

### Community 84 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, month (+8 more)

### Community 85 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 87 - "api.ts"
Cohesion: 0.18
Nodes (17): api, Query, CompanyRef, Items, Page, costService, DashboardPage, groupService (+9 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, permissionGroupLabel(), Localized, SiteScope, busy, category, chosen, emit (+29 more)

### Community 90 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "api.ts"
Cohesion: 0.15
Nodes (20): baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request(), RequestOptions (+12 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.07
Nodes (39): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+31 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "lucide-vue-next"
Cohesion: 0.12
Nodes (21): lucide-vue-next, reka-ui, pick(), route, router, session, open, session (+13 more)

### Community 96 - "AccountStatus.vue"
Cohesion: 0.15
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (21): profileBody(), profileInput(), openEdit(), saveProfile(), busy, canChange, emit, manager (+13 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "ApiError"
Cohesion: 0.10
Nodes (17): ApiError, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 100 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 102 - "GroupedBarChart.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (42): add(), dimensions, filters, periods, props, ordered, ACCOUNT_SIZE, accountWidget() (+34 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (50): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+42 more)

### Community 105 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 106 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "formatDate"
Cohesion: 0.11
Nodes (19): formatDate(), tiles, seenText(), previewDay, finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE (+11 more)

### Community 109 - "LoginView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 110 - "ad-tags.test.ts"
Cohesion: 0.12
Nodes (18): copied, line, open, props, adTagsPath(), blankSettings(), chosenDay(), installLine() (+10 more)

### Community 111 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.08
Nodes (23): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+15 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (33): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+25 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.20
Nodes (16): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+8 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.09
Nodes (21): saveFile(), answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters (+13 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "vue"
Cohesion: 0.09
Nodes (21): pinia@^4.1.0, pinia, AccentId, Me, Theme, accountService, authService, InvitationPreview (+13 more)

### Community 120 - "drag.ts"
Cohesion: 0.71
Nodes (7): useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop()

### Community 121 - "GamRunView.vue"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), ROW_TONE, rowState (+4 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "cn"
Cohesion: 0.09
Nodes (36): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), filterable (+28 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 125 - "gam-tools-view.test.ts"
Cohesion: 0.15
Nodes (16): GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput (+8 more)

### Community 126 - "errorText"
Cohesion: 0.09
Nodes (28): errorText(), load(), saveStart(), confirmEnd(), confirmRemove(), create(), load(), busy (+20 more)

### Community 127 - "NativeSelect.vue"
Cohesion: 0.13
Nodes (16): model, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.15
Nodes (12): auditActions, dict, errors, fallbackError, Key, COLUMN, Lang, languageMessages (+4 more)

### Community 130 - "Field.vue"
Cohesion: 0.12
Nodes (12): busy, current, emit, mismatch, password, password2, ready, short (+4 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 133 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 134 - "views/rules.ts"
Cohesion: 0.18
Nodes (13): props, shown, toggleColumn(), viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog (+5 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.06
Nodes (46): Task 3: Web — tipos, serviço e regras do construtor, vitest, @vue/test-utils, Lang, emit, props, ReportDraft, customMetricService (+38 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.04
Nodes (53): model, hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions (+45 more)

### Community 137 - "events.ts"
Cohesion: 0.18
Nodes (14): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+6 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (54): model, gainQuery(), modelChoices(), modelCounts(), priceRulePermission(), siteStatus(), canManage, active (+46 more)

### Community 139 - "DashboardWidget.vue"
Cohesion: 0.13
Nodes (15): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+7 more)

### Community 140 - "NativeSelect.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): personName(), rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "Input.vue"
Cohesion: 0.08
Nodes (23): model, Dashboard, DashboardInput, choices, description, emit, invalid, name (+15 more)

### Community 143 - "Button.vue"
Cohesion: 0.19
Nodes (11): button, classes, Props, end(), ending, endingOthers, endOthers(), fail() (+3 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "Status.vue"
Cohesion: 0.14
Nodes (11): dot, checklistItemService, canManage, dialogOpen, editing, items, load(), loadError (+3 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (34): ACTION_KEY, blockKind(), BlockModelKind, CASCADE_REASON_KEY, CASCADE_SERIES, cascadeFunnel, CascadePoint, cascadePoints() (+26 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (59): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+51 more)

### Community 148 - "clients/types.ts"
Cohesion: 0.20
Nodes (13): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ClientProfile (+5 more)

### Community 149 - "ClientNetworksView.vue"
Cohesion: 0.16
Nodes (13): awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall, page (+5 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.10
Nodes (30): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+22 more)

### Community 152 - "ad_tags/types.ts"
Cohesion: 0.18
Nodes (10): AdTag, AdTagDevice, AdTagDraft, AdTagEdge, AdTagHealthDay, AdTagRuleMode, AdTagSettings, AdTagSiteOption (+2 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (34): adTagPermission(), tagStatus(), canManage, status, base, busy, canManage, columns (+26 more)

### Community 155 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 156 - "ProfileImageCard.vue"
Cohesion: 0.24
Nodes (9): busy, drop(), imageUrl, input, name, pick(), problem, run() (+1 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 158 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 161 - "useSession"
Cohesion: 0.22
Nodes (13): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+5 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.11
Nodes (20): healthSummary(), share(), AdTagHealth, base, decimal, filled, health, integer (+12 more)

### Community 163 - "NetworkReviewActions.vue"
Cohesion: 0.39
Nodes (7): busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 164 - "LoadersView.vue"
Cohesion: 0.11
Nodes (18): ADBLOCK_SHORT, STYLE_LABEL, base, columns, load(), loadError, loaders, page (+10 more)

### Community 165 - "RecoveryCodes.vue"
Cohesion: 0.13
Nodes (18): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+10 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (21): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+13 more)

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
Cohesion: 0.11
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "t"
Cohesion: 0.12
Nodes (20): options, t(), tn(), dayLabel, dayOptions, changeLines, roleLine(), period (+12 more)

### Community 172 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX

### Community 173 - "support-tasks.test.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "NewDashboardDialog.vue"
Cohesion: 0.25
Nodes (8): chosen, create(), emit, name, open, templates, dashboardService, DashboardTemplate

### Community 175 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 177 - "vue-router"
Cohesion: 0.40
Nodes (4): vue-router@^5.4.0, vue-router, RouteMeta, vue-router

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

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `ResultsView.vue`, `TeamTabs.vue`, `GroupsView.vue`, `pick`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `AccountStatus.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `ApiError`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `cleanFilters`, `session.ts`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `TemplatesView.vue`, `index.ts`, `GroupsView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientsResultsView.vue`, `contracts/types.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `api.ts`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `AccountStatus.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiError`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `GroupedBarChart.vue`, `dashboards/rules.ts`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `Pagination.vue`, `RewardMetricsView.vue`, `formatDate`, `LoginView.vue`, `ad-tags.test.ts`, `InvoicesView.vue`, `RewardsView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `RewardLeadsCard.vue`, `vue`, `GamRunView.vue`, `cn`, `RevenueStatusBadge.vue`, `errorText`, `NativeSelect.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `views/rules.ts`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `DashboardWidget.vue`, `NativeSelect.vue`, `ChecklistView.vue`, `Input.vue`, `Button.vue`, `ChecklistItemDialog.vue`, `Status.vue`, `LoaderEditView.vue`, `ClientNetworksView.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `ProfileImageCard.vue`, `costs/rules.ts`, `ClientNetworksCard.vue`, `useSession`, `AdTagMetricsView.vue`, `NetworkReviewActions.vue`, `LoadersView.vue`, `RecoveryCodes.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `priorityLabel`, `PriceRuleSitesView.vue`, `tasks/rules.ts`, `NewDashboardDialog.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `DashboardGrid.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `pick`, `ResultsView.vue`, `TeamTabs.vue`, `GroupsView.vue`, `pick`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `AccountStatus.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `ApiError`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `session.ts`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `TemplatesView.vue`, `index.ts`, `GroupsView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientsResultsView.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `api.ts`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `AccountStatus.vue`, `AccountManagerCard.vue`, `ApiError`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `GroupedBarChart.vue`, `dashboards/rules.ts`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `Pagination.vue`, `RewardMetricsView.vue`, `formatDate`, `LoginView.vue`, `ad-tags.test.ts`, `InvoicesView.vue`, `RewardsView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `vue`, `cn`, `RevenueStatusBadge.vue`, `errorText`, `NativeSelect.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `BarChart.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `reports/types.ts`, `PriceRuleView.vue`, `events.ts`, `PriceRuleSiteView.vue`, `DashboardWidget.vue`, `NativeSelect.vue`, `ChecklistView.vue`, `Input.vue`, `Button.vue`, `ChecklistItemDialog.vue`, `Status.vue`, `LoaderEditView.vue`, `ClientNetworksView.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `ProfileImageCard.vue`, `ClientNetworksCard.vue`, `useSession`, `AdTagMetricsView.vue`, `NetworkReviewActions.vue`, `LoadersView.vue`, `RecoveryCodes.vue`, `AdTagPreview.vue`, `PriceRuleSitesView.vue`, `NewDashboardDialog.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `LoadError.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `CompanyGoalCard.vue`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `pick`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `AccountStatus.vue`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `ApiError`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `session.ts`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `TemplatesView.vue`, `index.ts`, `GroupsView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientsResultsView.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `api.ts`, `GamToolsView.vue`, `SidebarRail.vue`, `lucide-vue-next`, `AccountStatus.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiError`, `GroupedBarChart.vue`, `CascadeRuleView.vue`, `RewardMetricsView.vue`, `formatDate`, `LoginView.vue`, `InvoicesView.vue`, `RewardsView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `vue`, `NativeSelect.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `DashboardWidget.vue`, `NativeSelect.vue`, `ChecklistView.vue`, `Button.vue`, `ChecklistItemDialog.vue`, `Status.vue`, `LoaderEditView.vue`, `ClientNetworksView.vue`, `AdTagsView.vue`, `ProfileImageCard.vue`, `ClientNetworksCard.vue`, `useSession`, `AdTagMetricsView.vue`, `NetworkReviewActions.vue`, `LoadersView.vue`, `PriceRuleSitesView.vue`, `t`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._