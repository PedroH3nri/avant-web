# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 448 files · ~314,481 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5610 nodes · 14646 edges · 209 communities (201 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 163 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2683e84c`
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
- PageBody.vue
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- @vueuse/core
- StaffView.vue
- InstallCheckCell.vue
- steps
- ServiceLineDialog.vue
- SavedViewsBar.vue
- GoogleAdsView.vue
- sortValue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- Input.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- session.ts
- SiteDetailView.vue
- ClientSitesView.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- FacebookJobDialog.vue
- reports/rules.ts
- NewGroupDialog.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- google_ads/types.ts
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- FacebookEditView.vue
- .oxlintrc.json
- metricColor
- avant-web
- AccountManagerCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ReportView.vue
- vue-router
- Key
- GoalsView.vue
- ClassifySitesDialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- pick
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- reports/types.ts
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- vue-sonner
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- ClientNetworkView.vue
- Card.vue
- rewards/rules.ts
- SessionsCard.vue
- DashboardWidget.vue
- ClientNetworksView.vue
- RolesView.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- facebook/types.ts
- vue-router
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- PageBody.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- lucide-vue-next
- GoogleAdsObjectView.vue
- navigation.ts
- rewards/service.ts
- GoogleAdsAlertsPanel.vue
- ad-tags.test.ts
- lang
- FacebookAdsetForm.vue
- api
- ChecklistNotesCard.vue
- vitest
- formatDate
- tasks/rules.ts
- LoadersView.vue
- MyCommissionView.vue
- InviteView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- InvoicesView.vue
- FacebookObjectView.vue
- ReservedNetworksCard.vue
- GoogleAdsAccountDialog.vue
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- checklists/rules.ts
- ad_tags/rules.ts
- GoogleAdsTabs.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- Dialog.vue
- Status.vue
- price_rules/types.ts
- FacebookRulesCard.vue
- FakeSource
- alerts/rules.ts
- MetricStylePopover.vue
- Pagination.vue
- MfaCard.vue
- TaskTimeline.vue
- Review Focus
- gam_tools/rules.ts
- AdTagPreview.vue
- SaveReportDialog.vue
- PayeeDialog.vue
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- errorText
- ChecklistView.vue
- commission-components.test.ts
- ClientNetworkView.vue
- FiscalDataCard.vue
- Input.vue
- AdjustmentDialog.vue
- overrides
- NetworkReviewActions.vue
- google_ads/rules.ts
- CurrencyCard.vue
- LoaderPreview.vue
- invoices/types.ts
- table.ts
- checklists/types.ts
- Field.vue
- AdTagInstallDialog.vue
- rewards-rules.test.ts
- ProfileImageCard.vue
- clients/service.ts
- ResetView.vue
- tasks/types.ts
- BarChart.vue
- FacebookHistoryPanel.vue
- Dialog.vue
- drag.ts
- InvoiceDocument.vue
- sites/service.ts
- priorityLabel
- inventory/types.ts
- dashboards/types.ts
- TeamTabs.vue
- 20. CDN dos scripts do site (cdn.groone.com)
- dayText
- priceRulePermission

## God Nodes (most connected - your core abstractions)
1. `t()` - 682 edges
2. `errorText()` - 386 edges
3. `vue` - 207 edges
4. `ApiError` - 146 edges
5. `lucide-vue-next` - 122 edges
6. `useSession` - 100 edges
7. `vue-sonner` - 100 edges
8. `vue-router` - 69 edges
9. `td` - 67 edges
10. `th` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts

## Import Cycles
- None detected.

## Communities (209 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (45): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (48): profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments (+40 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+39 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (39): busy, canTransfer, duplicate, emit, errors, form, open, props (+31 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (50): adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters, barFilters (+42 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (38): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+30 more)

### Community 12 - "PageBody.vue"
Cohesion: 0.08
Nodes (25): formatMonth(), CostKind, periodText(), clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW (+17 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.08
Nodes (23): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+15 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.21
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.12
Nodes (16): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+8 more)

### Community 18 - "@vueuse/core"
Cohesion: 0.12
Nodes (17): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+9 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (48): tn(), asked, check, countdown(), current, display, emit, label (+40 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (16): amount, amountError, busy, chosen, description, emit, open, options (+8 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (29): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+21 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (40): accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions, clients (+32 more)

### Community 25 - "sortValue"
Cohesion: 0.13
Nodes (23): applyView(), sortOptions, applyView(), sortOptions, sortOptions, applyView(), sortOptions, sortOptions (+15 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (40): Query, COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+32 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (56): adding, barFilters, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+48 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "Input.vue"
Cohesion: 0.09
Nodes (23): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+15 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (42): FacebookTab, model, props, TABS, accounts, canConnect, canManage, clientName() (+34 more)

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

### Community 37 - "session.ts"
Cohesion: 0.12
Nodes (23): pinia, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme(), swatchColor() (+15 more)

### Community 38 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (44): applyView(), APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category (+36 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.10
Nodes (28): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd() (+20 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.06
Nodes (53): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+45 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.09
Nodes (37): emit, missingDates, options, props, setDate(), setMode(), layout, AXIS_CHARTS (+29 more)

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.10
Nodes (22): busy, create(), description, duplicate, emit, name, open, people (+14 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (30): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+22 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (66): @vueuse/core@^15.0.0, @vueuse/core, change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems() (+58 more)

### Community 51 - "google_ads/types.ts"
Cohesion: 0.13
Nodes (20): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsAlertSetting, GoogleAdsChangeOrigin, GoogleAdsKeyword (+12 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.10
Nodes (22): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+14 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (64): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, formatMetric(), toNumber(), metricText() (+56 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (23): objectiveOf(), serverProblems(), submit(), ad, adset, detail, edit, externalId (+15 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "metricColor"
Cohesion: 0.25
Nodes (13): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), chart, hourLabel(), boughtColor (+5 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (19): profileInput(), openEdit(), busy, canChange, emit, manager, managerId, next (+11 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment, fail() (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.05
Nodes (47): PAGE_SIZE, pageCount(), pageSlice(), shownRows, NO_COMPARISON, sameComparison(), savedPeriod(), ThumbShape (+39 more)

### Community 71 - "vue-router"
Cohesion: 0.07
Nodes (16): vue-router, @vue/test-utils, vue-router, RouteMeta, catalog, me, report, result (+8 more)

### Community 72 - "Key"
Cohesion: 0.05
Nodes (67): model, auditActions, dict, errors, fallbackError, Key, ad, blankCard() (+59 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (34): locale, mark, percent, props, tone, companyGoalYears(), goalTone(), paceMark() (+26 more)

### Community 74 - "ClassifySitesDialog.vue"
Cohesion: 0.12
Nodes (23): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (58): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef, ContractNetwork (+50 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (65): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+57 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.12
Nodes (16): LINES, showBootFailure(), auditText(), fill(), formatAgo(), loaded, loaders, loadLang() (+8 more)

### Community 81 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (27): dollars(), stateLabel(), STATES, barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS (+19 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.15
Nodes (14): Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open, path (+6 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "reports/types.ts"
Cohesion: 0.09
Nodes (36): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, PERIOD_PRESETS, Lang, emit (+28 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (25): add(), emit, kind, kinds, metric, metrics, open, props (+17 more)

### Community 87 - "formatDate"
Cohesion: 0.10
Nodes (23): healthSummary(), share(), unitName(), dayHint, base, decimal, filled, health (+15 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+29 more)

### Community 90 - "vue-sonner"
Cohesion: 0.07
Nodes (29): vue-sonner, toasterTheme, pick(), route, router, session, choose(), langs (+21 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (41): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+33 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): Page, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 96 - "ClientNetworkView.vue"
Cohesion: 0.15
Nodes (16): company, error, hasSeats, load(), lost, networks, router, session (+8 more)

### Community 97 - "Card.vue"
Cohesion: 0.09
Nodes (19): busy, current, emit, mismatch, password, password2, ready, short (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.12
Nodes (16): contrast(), contrastWarning(), COOLDOWN_RANGE, EMOJIS, FONTS, FormProblem, ICON_ACCEPT, ICON_MAX_BYTES (+8 more)

### Community 99 - "SessionsCard.vue"
Cohesion: 0.08
Nodes (27): copyLine(), busy, catalog, chosen, copied, copyToken(), create(), DAYS (+19 more)

### Community 100 - "DashboardWidget.vue"
Cohesion: 0.09
Nodes (27): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+19 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (52): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+44 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (40): childLevel(), accountId, accountOptions, accounts, allSelected, availableFilters, barFilters, base (+32 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.06
Nodes (30): latestCall(), barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "facebook/types.ts"
Cohesion: 0.05
Nodes (52): failure, fileName, input, model, props, send(), sending, busy (+44 more)

### Community 109 - "vue-router"
Cohesion: 0.08
Nodes (22): safeNext(), busy, email, error, sent, submit(), busy, email (+14 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.07
Nodes (43): dimensions, filters, periods, props, drag, emit, grid, ordered (+35 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+22 more)

### Community 116 - "PageBody.vue"
Cohesion: 0.09
Nodes (18): PAGE_WIDTH, allGroups, canManage, created(), creating, groups, load(), loaded (+10 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "lucide-vue-next"
Cohesion: 0.05
Nodes (40): lucide-vue-next, dot, IntegrationKind, add(), addBusy, addError, addOpen, canAssign (+32 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.08
Nodes (30): PERIODS, campaignsPath(), childLevel(), isLevel(), matchKey(), objectPath(), details(), open() (+22 more)

### Community 121 - "navigation.ts"
Cohesion: 0.24
Nodes (11): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+3 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.19
Nodes (13): Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest (+5 more)

### Community 123 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 124 - "ad-tags.test.ts"
Cohesion: 0.08
Nodes (41): visible, adTagPermission(), adTagsPath(), anchorEdgeOn(), blankSettings(), blockOnPage(), blockProblem(), chosenDay() (+33 more)

### Community 125 - "lang"
Cohesion: 0.11
Nodes (16): lang, addFilter(), addTyped(), CHARTS, emit, filterable, LIMITS, newField (+8 more)

### Community 126 - "FacebookAdsetForm.vue"
Cohesion: 0.13
Nodes (16): adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions, pixels (+8 more)

### Community 127 - "api"
Cohesion: 0.31
Nodes (6): api, Items, groupService, GroupInput, peopleService, staffService

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (11): vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source (+3 more)

### Community 130 - "formatDate"
Cohesion: 0.11
Nodes (19): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+11 more)

### Community 131 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

### Community 133 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 134 - "InviteView.vue"
Cohesion: 0.08
Nodes (24): button, classes, Props, props, accept(), busy, error, formOk (+16 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (31): accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions, clients, columns (+23 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.09
Nodes (27): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, valid, valid, validCode(), awaiting (+19 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): cascadeFunnel(), gainQuery(), gainSeries(), modelChoices(), recommendedModel(), funnel, active, automaticRuleCount (+44 more)

### Community 139 - "InvoicesView.vue"
Cohesion: 0.06
Nodes (47): current, current, applyView(), current, rows, current, applyView(), barFilters (+39 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (78): current, dirty, elsewhere, emit, error, kind, parsed, props (+70 more)

### Community 141 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (15): open, add(), addBusy, addError, addOpen, canAssign, code, emit (+7 more)

### Community 142 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.08
Nodes (25): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+17 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (42): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+34 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (18): active, emit, kind, kindOptions, name, open, props, save() (+10 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (35): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+27 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (63): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+55 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "checklists/rules.ts"
Cohesion: 0.19
Nodes (13): title, evidenceText(), LANGUAGE_NAMES, monthName(), previousMonth(), progressPercent(), RowState, rowState() (+5 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.12
Nodes (21): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+13 more)

### Community 152 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (53): copied, open, props, t(), availableFilters, base, busy, COLUMN_LABELS (+45 more)

### Community 155 - "Dialog.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 156 - "Status.vue"
Cohesion: 0.12
Nodes (16): canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route, router (+8 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.11
Nodes (18): model, load(), budgetHere, dirty, draft, emit, inputOf(), levelKey (+10 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 162 - "Pagination.vue"
Cohesion: 0.25
Nodes (6): first, last, numbers, page, props, pageNumbers()

### Community 163 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.13
Nodes (14): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+6 more)

### Community 168 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 169 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 173 - "errorText"
Cohesion: 0.12
Nodes (22): errorText(), alerts, emit, load(), loadError, markRead(), page, pages (+14 more)

### Community 174 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): overrideSummary(), personName(), ROW_TONE, checking, checklist, checklistId, checkNow(), fail() (+8 more)

### Community 175 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 176 - "ClientNetworkView.vue"
Cohesion: 0.13
Nodes (15): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+7 more)

### Community 177 - "FiscalDataCard.vue"
Cohesion: 0.09
Nodes (23): busy, complete, documentLabel, form, load(), loaded, options, save() (+15 more)

### Community 178 - "Input.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 179 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (23): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+15 more)

### Community 183 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 186 - "table.ts"
Cohesion: 0.07
Nodes (33): vue, td, th, events, load(), loadError, open, page (+25 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.16
Nodes (16): checklistItemService, checklistOverrideService, checklistService, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride (+8 more)

### Community 189 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 190 - "rewards-rules.test.ts"
Cohesion: 0.18
Nodes (13): answerCounts(), blankInput(), cleanPath(), defaultStyle(), formProblems(), inputOf(), rewardsPath(), toPayload() (+5 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 192 - "clients/service.ts"
Cohesion: 0.27
Nodes (12): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+4 more)

### Community 193 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 196 - "FacebookHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 197 - "Dialog.vue"
Cohesion: 0.10
Nodes (26): reka-ui, props, up, railItem(), open, model, cn(), kindClass() (+18 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "InvoiceDocument.vue"
Cohesion: 0.22
Nodes (12): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, monthName(), payee, PAYER (+4 more)

### Community 200 - "sites/service.ts"
Cohesion: 0.40
Nodes (8): ClientSiteDetail, NetworkSite, AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 201 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 202 - "inventory/types.ts"
Cohesion: 0.15
Nodes (20): REPORT_CURRENCY, ContractSource, ContractStatus, FilterOption, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite (+12 more)

### Community 203 - "dashboards/types.ts"
Cohesion: 0.12
Nodes (30): widgetFailure(), chosen, create(), emit, name, open, templates, emptyRun() (+22 more)

### Community 204 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 207 - "dayText"
Cohesion: 0.50
Nodes (4): dayLabel, dayOptions, dayText(), adUnitOptions

### Community 208 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageBody.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `sortValue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `session.ts`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `FacebookEditView.vue`, `metricColor`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `Key`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `vue-sonner`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `Card.vue`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `vue-router`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `PageBody.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `navigation.ts`, `GoogleAdsAlertsPanel.vue`, `ad-tags.test.ts`, `lang`, `FacebookAdsetForm.vue`, `ChecklistNotesCard.vue`, `formatDate`, `tasks/rules.ts`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `ad_tags/rules.ts`, `GoogleAdsTabs.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `Pagination.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `PayeeDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `errorText`, `ChecklistView.vue`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `Input.vue`, `AdjustmentDialog.vue`, `NetworkReviewActions.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `table.ts`, `Field.vue`, `AdTagInstallDialog.vue`, `rewards-rules.test.ts`, `ProfileImageCard.vue`, `ResetView.vue`, `FacebookHistoryPanel.vue`, `Dialog.vue`, `InvoiceDocument.vue`, `priorityLabel`, `inventory/types.ts`, `dashboards/types.ts`, `TeamTabs.vue`, `dayText`?**
  _High betweenness centrality (0.193) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `table.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PageBody.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `sortValue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `session.ts`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `vue-router`, `Key`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `vue-sonner`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `Card.vue`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `vue-router`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `PageBody.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `navigation.ts`, `GoogleAdsAlertsPanel.vue`, `lang`, `FacebookAdsetForm.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `MetricStylePopover.vue`, `Pagination.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `PayeeDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `errorText`, `ChecklistView.vue`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `Input.vue`, `AdjustmentDialog.vue`, `NetworkReviewActions.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `Field.vue`, `AdTagInstallDialog.vue`, `ProfileImageCard.vue`, `ResetView.vue`, `BarChart.vue`, `FacebookHistoryPanel.vue`, `Dialog.vue`, `drag.ts`, `InvoiceDocument.vue`, `inventory/types.ts`, `dashboards/types.ts`, `TeamTabs.vue`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageBody.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `session.ts`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `vue-sonner`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `ClientNetworkView.vue`, `Card.vue`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `vue-router`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `PageBody.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `GoogleAdsAlertsPanel.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AdTagsView.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `MfaCard.vue`, `Review Focus`, `gam_tools/rules.ts`, `PayeeDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `ChecklistView.vue`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `AdjustmentDialog.vue`, `NetworkReviewActions.vue`, `CurrencyCard.vue`, `table.ts`, `rewards-rules.test.ts`, `ProfileImageCard.vue`, `ResetView.vue`, `FacebookHistoryPanel.vue`, `dashboards/types.ts`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05442176870748299 - nodes in this community are weakly interconnected._