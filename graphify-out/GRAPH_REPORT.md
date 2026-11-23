# Graph Report - avant-web  (2026-11-23)

## Corpus Check
- 432 files · ~298,388 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5292 nodes · 13862 edges · 209 communities (201 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 156 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4b2c652c`
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
- views/rules.ts
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- @vueuse/core
- StaffView.vue
- FacebookAdForm.vue
- steps
- ServiceLineDialog.vue
- SavedViewsBar.vue
- GoogleAdsView.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- FacebookAccountDialog.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- reports/types.ts
- api
- vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- FacebookJobDialog.vue
- reports/rules.ts
- LoginView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- ApiKeyDialog.vue
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- vue-sonner
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
- InviteView.vue
- Key
- GoalsView.vue
- utils.ts
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- ClientNetworkView.vue
- ChecklistsView.vue
- MfaCard.vue
- ClientNotesCard.vue
- session.ts
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- GroupsView.vue
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- FacebookAlertsPanel.vue
- ClientNetworksCard.vue
- MyCommissionView.vue
- rewards/rules.ts
- ApiKeysCard.vue
- InvoicesView.vue
- ClientSitesView.vue
- ad_tags/service.ts
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- ClientNetworksView.vue
- RewardMetricsView.vue
- facebook/types.ts
- contracts/service.ts
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- ReservedNetworksCard.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- GoogleAdsAlertsPanel.vue
- GoogleAdsObjectView.vue
- checklists/rules.ts
- rewards/service.ts
- DashboardGrid.vue
- inventory/types.ts
- clients/service.ts
- errorText
- AdjustmentDialog.vue
- ChecklistNotesCard.vue
- vitest
- RolesView.vue
- BarChart.vue
- LoadersView.vue
- invoices/types.ts
- DashboardWidget.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- ProfileImageCard.vue
- FacebookObjectView.vue
- ChecklistView.vue
- google_ads/types.ts
- Field.vue
- ChecklistItemDialog.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- alerts/types.ts
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- Dialog.vue
- ClientsResultsView.vue
- price_rules/types.ts
- FacebookRulesCard.vue
- api.ts
- alerts/rules.ts
- t
- navigation.ts
- Card.vue
- TaskTimeline.vue
- loaders/rules.ts
- gam_tools/rules.ts
- AdTagPreview.vue
- support-tasks.test.ts
- locale
- lucide-vue-next
- ad-tags.test.ts
- AlertDialog.vue
- GoogleAdsAccountDialog.vue
- Button.vue
- lang
- SaveViewDialog.vue
- loaders.test.ts
- cn
- GoogleAdsHistoryPanel.vue
- overrides
- vite.embed.config.ts
- google_ads/rules.ts
- pick
- LoaderPreview.vue
- SaveReportDialog.vue
- FacebookHistoryPanel.vue
- ChecklistItemsView.vue
- GamRunView.vue
- GoogleAdsPersonDialog.vue
- PayeeDialog.vue
- FieldsPanel.vue
- tasks/rules.ts
- FiscalDataCard.vue
- tasks/types.ts
- Review Focus
- FacebookMediaField.vue
- InvoiceDocument.vue
- drag.ts
- ReportTable.vue
- dashboards/types.ts
- GoogleAdsTabs.vue
- priorityLabel
- FakeSource
- TeamTabs.vue
- AdTagInstallDialog.vue
- FacebookTabs.vue
- priceRulePermission

## God Nodes (most connected - your core abstractions)
1. `t()` - 604 edges
2. `errorText()` - 378 edges
3. `vue` - 199 edges
4. `ApiError` - 142 edges
5. `lucide-vue-next` - 116 edges
6. `useSession` - 99 edges
7. `vue-sonner` - 98 edges
8. `vue-router` - 68 edges
9. `th` - 67 edges
10. `td` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

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
Cohesion: 0.06
Nodes (47): profileBody(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments, canManage (+39 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (48): builderState(), toInput(), toQuery(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+40 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (35): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+27 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (32): busy, canTransfer, duplicate, emit, errors, form, open, props (+24 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (38): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+30 more)

### Community 12 - "views/rules.ts"
Cohesion: 0.17
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

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
Cohesion: 0.10
Nodes (21): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+13 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "FacebookAdForm.vue"
Cohesion: 0.10
Nodes (23): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+15 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (20): amount, amountError, busy, chosen, description, emit, open, options (+12 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (32): Items, active, activeView, busy, canUpdate, choose(), dialogOpen, dirty (+24 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (44): byManager(), loginTone(), accounts, applying, applySuffix(), canConnect, canManage, clientName() (+36 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.05
Nodes (58): ClientSiteDetail, rows, category, categoryOptions, changed, emit, keep, open (+50 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (42): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+34 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (54): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+46 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "FacebookAccountDialog.vue"
Cohesion: 0.06
Nodes (33): model, busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit (+25 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.05
Nodes (39): FACEBOOK_CONNECT_URL, accounts, canConnect, canManage, clientName(), clientOptions, clients, companyId (+31 more)

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

### Community 37 - "reports/types.ts"
Cohesion: 0.06
Nodes (56): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, countryName(), dailySeries(), daysOf() (+48 more)

### Community 38 - "api"
Cohesion: 0.09
Nodes (26): api, busy, create(), description, duplicate, emit, name, open (+18 more)

### Community 39 - "vue"
Cohesion: 0.06
Nodes (41): vue, dot, td, th, events, load(), loadError, open (+33 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (52): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, serverProblems(), FacebookAdsetInput, account, accounts (+44 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (41): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+33 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.16
Nodes (17): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+9 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.05
Nodes (60): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), addFilter() (+52 more)

### Community 46 - "LoginView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.05
Nodes (47): props, seats, formatAgo(), company, error, hasSeats, load(), lost (+39 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (33): presetRange(), previousRange(), sameRange(), shiftDay(), utcToday(), load(), section(), barFormat() (+25 more)

### Community 51 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (27): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+19 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (65): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, change(), formatMetric(), toNumber() (+57 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (23): CompanyRef, UserRef, peopleService, Person, Action, busy, confirm(), enable() (+15 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "vue-sonner"
Cohesion: 0.11
Nodes (23): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+15 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "metricColor"
Cohesion: 0.23
Nodes (14): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+6 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (19): profileInput(), openEdit(), busy, canChange, emit, manager, managerId, next (+11 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (42): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+34 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.11
Nodes (22): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+14 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+21 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.08
Nodes (33): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, apiMessage(), canManage, catalog (+25 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "Key"
Cohesion: 0.05
Nodes (63): model, auditActions, dict, errors, fallbackError, Key, adset, eventOptions (+55 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.08
Nodes (38): months, months, mark, percent, props, share, tone, companyGoalYears() (+30 more)

### Community 74 - "utils.ts"
Cohesion: 0.27
Nodes (6): reka-ui, emit, props, shown, active, emit

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (37): busy, canCreate, canDelete, canUpdate, checking, chosenNetwork, client, clientOptions (+29 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (64): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+56 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.10
Nodes (16): choose(), langs, session, LINES, showBootFailure(), chooseLang(), fill(), loaded (+8 more)

### Community 81 - "ClientNetworkView.vue"
Cohesion: 0.13
Nodes (15): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+7 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "session.ts"
Cohesion: 0.06
Nodes (28): pinia, vue-router, vue-router, RouteMeta, open, session, announceCompany(), CompanyMessage (+20 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 87 - "formatDate"
Cohesion: 0.10
Nodes (24): formatDate(), healthSummary(), share(), base, decimal, filled, health, integer (+16 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.10
Nodes (22): busy, canManage, changed, current, load(), monthNames, months, save() (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "GroupsView.vue"
Cohesion: 0.08
Nodes (21): broken, hue, initials, props, allGroups, canManage, created(), creating (+13 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "FacebookAlertsPanel.vue"
Cohesion: 0.12
Nodes (15): model, alerts, emit, load(), loadError, markRead(), page, pages (+7 more)

### Community 96 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (19): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+11 more)

### Community 97 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): STATUS_TONE, commissionService, CommissionEvent, CommissionMonth, CommissionRule, CommissionRuleInput, MyCommissions, PersonMonth (+10 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (28): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+20 more)

### Community 99 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (39): busy, canManage, created(), creating, keys, load(), loadError, page (+31 more)

### Community 100 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (17): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+9 more)

### Community 101 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 102 - "ad_tags/service.ts"
Cohesion: 0.17
Nodes (14): AdTagService, AdTag, AdTagBlock, AdTagDevice, AdTagDraft, AdTagEdge, AdTagHealth, AdTagHealthDay (+6 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (54): cascadeLadder(), dropPercent(), hourLabel(), nearestTier(), percentText(), base, busy, changeStatus() (+46 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), periodRange(), accountId, accountOptions, accounts, allSelected, base, canManage (+28 more)

### Community 106 - "ClientNetworksView.vue"
Cohesion: 0.09
Nodes (25): box, failed, initial, props, busy, confirm(), emit, props (+17 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "facebook/types.ts"
Cohesion: 0.08
Nodes (38): failure, left, load(), loading, model, options, props, SEARCHED (+30 more)

### Community 109 - "contracts/service.ts"
Cohesion: 0.18
Nodes (13): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef, ContractNetwork (+5 more)

### Community 110 - "events.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (43): add(), dimensions, filters, periods, props, ordered, ACCOUNT_SIZE, accountWidget() (+35 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.09
Nodes (22): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+14 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (27): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), adding (+19 more)

### Community 116 - "ReservedNetworksCard.vue"
Cohesion: 0.15
Nodes (13): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+5 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (24): childLevel(), isLevel(), matchKey(), base, child, children, currency, days (+16 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.21
Nodes (11): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, personName(), progressPercent(), RowState, rowState() (+3 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (17): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+9 more)

### Community 123 - "DashboardGrid.vue"
Cohesion: 0.15
Nodes (22): drag, emit, grid, props, { run, failure, loading }, source, stored, widgetFailure() (+14 more)

### Community 124 - "inventory/types.ts"
Cohesion: 0.16
Nodes (20): REPORT_CURRENCY, ContractSource, ContractStatus, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, NetworkContract (+12 more)

### Community 125 - "clients/service.ts"
Cohesion: 0.27
Nodes (12): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+4 more)

### Community 126 - "errorText"
Cohesion: 0.20
Nodes (15): errorText(), load(), saveStart(), applyView(), checkNow(), choose(), confirmEnd(), confirmRemove() (+7 more)

### Community 127 - "AdjustmentDialog.vue"
Cohesion: 0.22
Nodes (12): amount, amountError, busy, emit, open, props, reason, reasonTouched (+4 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (11): vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source (+3 more)

### Community 130 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 133 - "invoices/types.ts"
Cohesion: 0.26
Nodes (12): FiscalData, invoiceService, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+4 more)

### Community 134 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (21): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+13 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.07
Nodes (27): accountId, accountOptions, accounts, clientOptions, clients, columns, companyId, days (+19 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (77): current, dirty, elsewhere, emit, error, kind, parsed, props (+69 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "google_ads/types.ts"
Cohesion: 0.14
Nodes (19): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsChangeOrigin, GoogleAdsKeyword, GoogleAdsLevel (+11 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (33): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+25 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (33): formProblems(), previewDomain(), previewLoader(), withTemplate(), base, busy, clientOptions, clients (+25 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 150 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.10
Nodes (30): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+22 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.15
Nodes (17): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+9 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "Dialog.vue"
Cohesion: 0.11
Nodes (16): open, open, busy, canManage, description, editing, editingOpen, loadError (+8 more)

### Community 156 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (23): Query, CostKind, clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+15 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.14
Nodes (15): budgetHere, dirty, draft, emit, inputOf(), levelKey, load(), loadError (+7 more)

### Community 159 - "api.ts"
Cohesion: 0.10
Nodes (24): pick(), route, router, session, ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES (+16 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "t"
Cohesion: 0.14
Nodes (19): auditText(), messages(), permissionGroupLabel(), t(), tn(), changeLines, roleLine(), adUnitOptions (+11 more)

### Community 162 - "navigation.ts"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 163 - "Card.vue"
Cohesion: 0.09
Nodes (19): busy, current, emit, mismatch, password, password2, ready, short (+11 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.12
Nodes (16): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+8 more)

### Community 165 - "loaders/rules.ts"
Cohesion: 0.14
Nodes (15): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, inputOf(), LIMITS, MAX_SECONDS (+7 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (17): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+9 more)

### Community 168 - "support-tasks.test.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 169 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 170 - "lucide-vue-next"
Cohesion: 0.07
Nodes (31): lucide-vue-next, first, last, page, props, PAGE_WIDTH, companies, companiesCall (+23 more)

### Community 171 - "ad-tags.test.ts"
Cohesion: 0.15
Nodes (14): adTagsPath(), blankSettings(), chosenDay(), newBlock(), settingsProblem(), tagStatus(), adTagService(), addBlock() (+6 more)

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 173 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.14
Nodes (14): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+6 more)

### Community 174 - "Button.vue"
Cohesion: 0.06
Nodes (33): button, classes, Props, props, model, authService, busy, email (+25 more)

### Community 175 - "lang"
Cohesion: 0.13
Nodes (13): @vue/test-utils@^2.5.1, @vue/test-utils, lang, client, managerChange, perms, settings, staffOptions (+5 more)

### Community 176 - "SaveViewDialog.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 177 - "loaders.test.ts"
Cohesion: 0.22
Nodes (11): loadersPath(), PreviewLoader, loaderService(), LoaderService, Loader, LoaderAdblock, LoaderInput, LoaderOption (+3 more)

### Community 178 - "cn"
Cohesion: 0.15
Nodes (12): props, up, panelItem(), railItem(), cn(), kindClass(), tab(), choice() (+4 more)

### Community 179 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.11
Nodes (23): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), campaignsPath(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+15 more)

### Community 183 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 186 - "FacebookHistoryPanel.vue"
Cohesion: 0.18
Nodes (11): changes, load(), loadError, origin, originOptions, page, pages, props (+3 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.10
Nodes (23): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+15 more)

### Community 188 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 189 - "GoogleAdsPersonDialog.vue"
Cohesion: 0.18
Nodes (10): busy, chosen, daily, emit, monthly, open, props, save() (+2 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 191 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 192 - "tasks/rules.ts"
Cohesion: 0.22
Nodes (8): COMMENT_MIN, DESCRIPTION_MAX, PRIORITIES, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, TaskPerson

### Community 193 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.46
Nodes (6): SupportTask, SupportTaskDetail, TaskFilters, TaskInput, TaskPatch, TaskScope

### Community 195 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 196 - "FacebookMediaField.vue"
Cohesion: 0.25
Nodes (7): failure, fileName, input, model, props, send(), sending

### Community 197 - "InvoiceDocument.vue"
Cohesion: 0.29
Nodes (7): dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "ReportTable.vue"
Cohesion: 0.21
Nodes (10): numbers, PAGE_SIZE, pageCount(), pageNumbers(), pageSlice(), dimensions, page, props (+2 more)

### Community 200 - "dashboards/types.ts"
Cohesion: 0.12
Nodes (25): Page, chosen, create(), emit, name, open, templates, templateService (+17 more)

### Community 201 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 202 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 204 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 206 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 207 - "FacebookTabs.vue"
Cohesion: 0.33
Nodes (4): FacebookTab, model, props, TABS

### Community 208 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `views/rules.ts`, `StaffView.vue`, `FacebookAdForm.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `reports/types.ts`, `api`, `vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `LoginView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `ApiKeyDialog.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `vue-sonner`, `metricColor`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `InviteView.vue`, `Key`, `GoalsView.vue`, `utils.ts`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `ClientNetworkView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientNotesCard.vue`, `session.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GroupsView.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookAlertsPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `InvoicesView.vue`, `ClientSitesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `ClientNetworksView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `contracts/service.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsObjectView.vue`, `checklists/rules.ts`, `rewards/service.ts`, `inventory/types.ts`, `errorText`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `LoadersView.vue`, `DashboardWidget.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `ProfileImageCard.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `Field.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `api.ts`, `alerts/rules.ts`, `navigation.ts`, `Card.vue`, `TaskTimeline.vue`, `loaders/rules.ts`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `locale`, `lucide-vue-next`, `ad-tags.test.ts`, `AlertDialog.vue`, `GoogleAdsAccountDialog.vue`, `Button.vue`, `SaveViewDialog.vue`, `cn`, `GoogleAdsHistoryPanel.vue`, `pick`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `FacebookHistoryPanel.vue`, `ChecklistItemsView.vue`, `GamRunView.vue`, `GoogleAdsPersonDialog.vue`, `PayeeDialog.vue`, `FieldsPanel.vue`, `tasks/rules.ts`, `FiscalDataCard.vue`, `FacebookMediaField.vue`, `InvoiceDocument.vue`, `ReportTable.vue`, `dashboards/types.ts`, `GoogleAdsTabs.vue`, `priorityLabel`, `TeamTabs.vue`, `AdTagInstallDialog.vue`, `FacebookTabs.vue`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `FacebookAdForm.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `reports/types.ts`, `api`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `LoginView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `ApiKeyDialog.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `vue-sonner`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `InviteView.vue`, `Key`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `ClientNetworkView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientNotesCard.vue`, `session.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GroupsView.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookAlertsPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `ApiKeysCard.vue`, `InvoicesView.vue`, `ClientSitesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `ClientNetworksView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsObjectView.vue`, `DashboardGrid.vue`, `inventory/types.ts`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `BarChart.vue`, `LoadersView.vue`, `DashboardWidget.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `ProfileImageCard.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `Field.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `api.ts`, `t`, `navigation.ts`, `Card.vue`, `TaskTimeline.vue`, `AdTagPreview.vue`, `locale`, `lucide-vue-next`, `AlertDialog.vue`, `GoogleAdsAccountDialog.vue`, `Button.vue`, `lang`, `SaveViewDialog.vue`, `cn`, `GoogleAdsHistoryPanel.vue`, `pick`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `FacebookHistoryPanel.vue`, `ChecklistItemsView.vue`, `GamRunView.vue`, `GoogleAdsPersonDialog.vue`, `PayeeDialog.vue`, `FieldsPanel.vue`, `FiscalDataCard.vue`, `FacebookMediaField.vue`, `InvoiceDocument.vue`, `drag.ts`, `ReportTable.vue`, `dashboards/types.ts`, `TeamTabs.vue`, `AdTagInstallDialog.vue`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `reports/types.ts`, `api`, `vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `LoginView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `ApiKeyDialog.vue`, `lib/types.ts`, `vue-sonner`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `InviteView.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `ClientNetworkView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientNotesCard.vue`, `session.ts`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GroupsView.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `FacebookAlertsPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `InvoicesView.vue`, `ClientSitesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `ClientNetworksView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsObjectView.vue`, `DashboardGrid.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `LoadersView.vue`, `DashboardWidget.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `ProfileImageCard.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `api.ts`, `t`, `Card.vue`, `loaders/rules.ts`, `locale`, `lucide-vue-next`, `AlertDialog.vue`, `GoogleAdsAccountDialog.vue`, `Button.vue`, `GoogleAdsHistoryPanel.vue`, `pick`, `FacebookHistoryPanel.vue`, `ChecklistItemsView.vue`, `GamRunView.vue`, `GoogleAdsPersonDialog.vue`, `PayeeDialog.vue`, `FiscalDataCard.vue`, `Review Focus`, `FacebookMediaField.vue`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05585106382978723 - nodes in this community are weakly interconnected._