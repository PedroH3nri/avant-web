# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 444 files · ~311,827 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5560 nodes · 14486 edges · 199 communities (193 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 162 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `83198fe5`
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
- FacebookAlertsPanel.vue
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
- vue-sonner
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
- api.ts
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
- session.ts
- Key
- GoalsView.vue
- ClassifySitesDialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- t
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- reports/types.ts
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- Badge.vue
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- ClientNetworkView.vue
- vue-sonner
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
- ConfigPanel.vue
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- useSession
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- lucide-vue-next
- GoogleAdsObjectView.vue
- useSession
- rewards/service.ts
- GoogleAdsAlertsPanel.vue
- FacebookAdForm.vue
- api.ts
- Field.vue
- AdjustmentDialog.vue
- ChecklistNotesCard.vue
- vitest
- formatDate
- checklists/rules.ts
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
- google_ads/types.ts
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- GamRunView.vue
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
- Pagination.vue
- MfaCard.vue
- TaskTimeline.vue
- Review Focus
- gam_tools/rules.ts
- AdTagPreview.vue
- SaveReportDialog.vue
- tasks/rules.ts
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- ChecklistView.vue
- @vue/test-utils
- firstValue
- FiscalDataCard.vue
- Input.vue
- GoogleAdsHistoryPanel.vue
- overrides
- google_ads/rules.ts
- CurrencyCard.vue
- LoaderPreview.vue
- invoices/types.ts
- table.ts
- checklists/types.ts
- ClientNetworksCard.vue
- ProfileImageCard.vue
- ResetView.vue
- tasks/types.ts
- BarChart.vue
- lucide-vue-next
- Dialog.vue
- drag.ts
- InvoiceDocument.vue
- DashboardGrid.vue
- priorityLabel
- inventory/types.ts
- dashboards/types.ts
- 20. CDN dos scripts do site (cdn.groone.com)

## God Nodes (most connected - your core abstractions)
1. `t()` - 660 edges
2. `errorText()` - 386 edges
3. `vue` - 205 edges
4. `ApiError` - 146 edges
5. `lucide-vue-next` - 121 edges
6. `useSession` - 100 edges
7. `vue-sonner` - 100 edges
8. `vue-router` - 69 edges
9. `td` - 67 edges
10. `th` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (199 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (61): loadDraft(), BuilderState, builderState(), canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart() (+53 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.05
Nodes (49): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+41 more)

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
Cohesion: 0.10
Nodes (18): PAGE_WIDTH, clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError (+10 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.08
Nodes (23): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+15 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.14
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.12
Nodes (16): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+8 more)

### Community 18 - "@vueuse/core"
Cohesion: 0.09
Nodes (22): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+14 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (43): asked, check, countdown(), current, display, emit, label, open (+35 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): options, amount, amountError, busy, chosen, description, emit, open (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (28): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+20 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (42): campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+34 more)

### Community 25 - "FacebookAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

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
Nodes (56): adding, barFilters, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+48 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "Input.vue"
Cohesion: 0.07
Nodes (26): model, model, busy, daily, emit, monthly, onLimit, onLimitOptions (+18 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (42): FacebookTab, model, props, TABS, accounts, canConnect, canManage, clientName() (+34 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.11
Nodes (23): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), MonthResult (+15 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "vue-sonner"
Cohesion: 0.17
Nodes (15): Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme(), swatchColor(), theme (+7 more)

### Community 38 - "SiteDetailView.vue"
Cohesion: 0.07
Nodes (29): rows, approval(), tree(), busy, canAssign, canManage, classifying, errorToast() (+21 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (42): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+34 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (41): setTabCompany(), saveFile(), fetchFile(), load(), overview, picker, picking, rows (+33 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.07
Nodes (40): emit, missingDates, props, setDate(), setMode(), filterable, applyScale(), emit (+32 more)

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.07
Nodes (32): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+24 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (72): compare, period, selected, change(), countryName(), dailySeries(), daysOf(), hourLabel() (+64 more)

### Community 51 - "google_ads/types.ts"
Cohesion: 0.13
Nodes (20): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsAlertSetting, GoogleAdsChangeOrigin, GoogleAdsKeyword (+12 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.09
Nodes (24): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+16 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (62): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, FALLBACK, METRIC_COLOR, metricColors() (+54 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "api.ts"
Cohesion: 0.14
Nodes (21): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+13 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "metricColor"
Cohesion: 0.25
Nodes (13): colorVar(), metricColor(), dayLabel, dayOptions, chart, hourLabel(), boughtColor, chart (+5 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (33): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientOption, ManagerChange, NotePerson (+25 more)

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
Nodes (28): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+20 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.05
Nodes (50): locale, pageCount(), pageSlice(), dimensions, page, props, rows, shownRows (+42 more)

### Community 71 - "session.ts"
Cohesion: 0.08
Nodes (17): pinia, Me, accountService, authService, InvitationPreview, LoginResult, catalog, me (+9 more)

### Community 72 - "Key"
Cohesion: 0.06
Nodes (60): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+52 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (21): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+13 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (29): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+21 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (60): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+52 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.05
Nodes (40): vue, toasterTheme, LINES, showBootFailure(), auditText(), fill(), formatAgo(), loaded (+32 more)

### Community 81 - "t"
Cohesion: 0.10
Nodes (23): options, t(), tn(), greeting, description, changeLines, roleLine(), options (+15 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (25): stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS, filterLabel(), FILTERS (+17 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.15
Nodes (16): valid, Choice, choice, choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.10
Nodes (23): open, add(), adding, deleteOpen, deleting, draft, editing, editOpen (+15 more)

### Community 85 - "reports/types.ts"
Cohesion: 0.11
Nodes (33): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, props, ReportDraft, reportService, ChartType, CustomCatalogMetric (+25 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.10
Nodes (22): busy, canManage, changed, current, load(), monthNames, months, save() (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.06
Nodes (45): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+37 more)

### Community 90 - "Badge.vue"
Cohesion: 0.15
Nodes (10): pick(), route, router, session, busy, confirm, load(), session (+2 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.07
Nodes (39): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+31 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.33
Nodes (8): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 96 - "ClientNetworkView.vue"
Cohesion: 0.09
Nodes (26): valid, valid, active, KINDS, load(), loadError, loadRuns(), network (+18 more)

### Community 97 - "vue-sonner"
Cohesion: 0.11
Nodes (19): vue-sonner, choose(), langs, session, chooseLang(), busy, current, emit (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (30): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+22 more)

### Community 99 - "SessionsCard.vue"
Cohesion: 0.07
Nodes (30): copied, copyLine(), open, props, busy, catalog, chosen, copied (+22 more)

### Community 100 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (19): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+11 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.05
Nodes (40): box, failed, initial, props, awaitingOnly, barFilters, canAssign, chosen() (+32 more)

### Community 102 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): RoleOption, assign(), canManage, canTeam, editable(), isMe(), load(), loaded (+15 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.04
Nodes (57): cascadeLadder(), dropPercent(), nearestTier(), percentText(), priceRulePermission(), base, busy, canManage (+49 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (40): childLevel(), accountId, accountOptions, accounts, allSelected, availableFilters, barFilters, base (+32 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.05
Nodes (35): latestCall(), current, barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus (+27 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "facebook/types.ts"
Cohesion: 0.08
Nodes (33): failure, left, load(), loading, model, options, props, SEARCHED (+25 more)

### Community 109 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): lang, addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods (+5 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (26): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+18 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.07
Nodes (27): availableFilters, barFilters, base, columns, DEFAULT_FILTERS, deleted, FILTER_LABELS, FILTERS (+19 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+22 more)

### Community 116 - "useSession"
Cohesion: 0.11
Nodes (17): open, session, announceCompany(), CompanyMessage, onCompanyAnnounced(), busy, create(), failure (+9 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "lucide-vue-next"
Cohesion: 0.11
Nodes (17): vue-router, vue-router, RouteMeta, base, columns, integer, load(), loadError (+9 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (23): model, PERIODS, isLevel(), base, children, currency, days, detail (+15 more)

### Community 121 - "useSession"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.12
Nodes (22): errorText(), choose(), choose(), alerts, emit, load(), loadError, markRead() (+14 more)

### Community 124 - "FacebookAdForm.vue"
Cohesion: 0.07
Nodes (31): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+23 more)

### Community 125 - "api.ts"
Cohesion: 0.13
Nodes (26): api, Query, CompanyRef, Items, Page, AdTagService, costService, groupService (+18 more)

### Community 126 - "Field.vue"
Cohesion: 0.12
Nodes (14): current, dirty, elsewhere, emit, error, kind, parsed, props (+6 more)

### Community 127 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "vitest"
Cohesion: 0.18
Nodes (12): vitest@^5.0.5, vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages() (+4 more)

### Community 130 - "formatDate"
Cohesion: 0.12
Nodes (18): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+10 more)

### Community 131 - "checklists/rules.ts"
Cohesion: 0.16
Nodes (15): choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, overrideSummary(), previousMonth(), progressPercent() (+7 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.09
Nodes (24): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, guideNotes (+16 more)

### Community 133 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 134 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), objectPath(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+28 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "InvoicesView.vue"
Cohesion: 0.06
Nodes (43): current, current, barFilters, columnLabel(), COLUMNS, current, DEFAULT_FILTERS, DEFAULT_VIEW (+35 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (58): budgetText(), ACCOUNT_QUALITY_URL, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), CHANGE_KEYS, changeText() (+50 more)

### Community 141 - "ReservedNetworksCard.vue"
Cohesion: 0.15
Nodes (13): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+5 more)

### Community 142 - "google_ads/types.ts"
Cohesion: 0.07
Nodes (34): dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily, dailyValue (+26 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (40): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+32 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.15
Nodes (14): active, emit, kind, kindOptions, name, open, props, save() (+6 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.16
Nodes (15): GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (33): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+25 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (60): AdTag, InstallSummary, ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems() (+52 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.06
Nodes (52): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+44 more)

### Community 152 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (43): copied, line, open, props, adTagPermission(), installLine(), canManage, base (+35 more)

### Community 155 - "Dialog.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 156 - "Status.vue"
Cohesion: 0.15
Nodes (12): canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route, router (+4 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.12
Nodes (16): model, budgetHere, dirty, draft, emit, inputOf(), levelKey, load() (+8 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 162 - "Pagination.vue"
Cohesion: 0.22
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 163 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.10
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 169 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 174 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): title, monthName(), ROW_TONE, monthOptions, checking, checklist, checklistId, checkNow() (+10 more)

### Community 175 - "@vue/test-utils"
Cohesion: 0.24
Nodes (5): @vue/test-utils@^2.5.1, @vue/test-utils, chooseOption(), FEW, MANY

### Community 176 - "firstValue"
Cohesion: 0.17
Nodes (16): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+8 more)

### Community 177 - "FiscalDataCard.vue"
Cohesion: 0.09
Nodes (23): busy, complete, documentLabel, form, load(), loaded, options, save() (+15 more)

### Community 178 - "Input.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 179 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.15
Nodes (13): changes, load(), loadError, origin, originOptions, page, pages, props (+5 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

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
Cohesion: 0.13
Nodes (22): FiscalData, busy, complete, documentLabel, emit, form, open, props (+14 more)

### Community 186 - "table.ts"
Cohesion: 0.07
Nodes (30): dot, td, th, events, load(), loadError, open, page (+22 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.17
Nodes (16): checklistItemService, checklistOverrideService, checklistService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+8 more)

### Community 190 - "ClientNetworksCard.vue"
Cohesion: 0.13
Nodes (15): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+7 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "ResetView.vue"
Cohesion: 0.12
Nodes (15): button, classes, Props, props, busy, error, mfa, mismatch (+7 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 196 - "lucide-vue-next"
Cohesion: 0.09
Nodes (23): lucide-vue-next, decisions, load(), loadError, page, pages, props, reason() (+15 more)

### Community 197 - "Dialog.vue"
Cohesion: 0.08
Nodes (32): reka-ui, props, up, panelItem(), railItem(), open, cn(), kindClass() (+24 more)

### Community 198 - "drag.ts"
Cohesion: 0.42
Nodes (9): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop() (+1 more)

### Community 199 - "InvoiceDocument.vue"
Cohesion: 0.20
Nodes (12): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, money(), monthName(), payee (+4 more)

### Community 200 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (23): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+15 more)

### Community 201 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 202 - "inventory/types.ts"
Cohesion: 0.17
Nodes (18): REPORT_CURRENCY, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, ClientSiteDetail, SiteNetworkRef, SiteResponsible (+10 more)

### Community 203 - "dashboards/types.ts"
Cohesion: 0.17
Nodes (17): chosen, create(), emit, name, open, templates, Dashboard, DashboardFilters (+9 more)

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageBody.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookAlertsPanel.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `api.ts`, `metricColor`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `Key`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `Badge.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `vue-sonner`, `rewards/rules.ts`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `ConfigPanel.vue`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `useSession`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `GoogleAdsAlertsPanel.vue`, `FacebookAdForm.vue`, `Field.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `checklists/rules.ts`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `google_ads/types.ts`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `GamRunView.vue`, `ad_tags/rules.ts`, `GoogleAdsTabs.vue`, `AdTagsView.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `alerts/rules.ts`, `Pagination.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `tasks/rules.ts`, `CompanyView.vue`, `AlertDialog.vue`, `ChecklistView.vue`, `firstValue`, `FiscalDataCard.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `invoices/types.ts`, `table.ts`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `ResetView.vue`, `lucide-vue-next`, `Dialog.vue`, `InvoiceDocument.vue`, `priorityLabel`, `inventory/types.ts`, `dashboards/types.ts`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `index.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PageBody.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookAlertsPanel.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `api.ts`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `session.ts`, `Key`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `Badge.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `vue-sonner`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `ConfigPanel.vue`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `useSession`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `GoogleAdsAlertsPanel.vue`, `FacebookAdForm.vue`, `Field.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `google_ads/types.ts`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `GamRunView.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `Pagination.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `ChecklistView.vue`, `@vue/test-utils`, `FiscalDataCard.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `invoices/types.ts`, `table.ts`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `ResetView.vue`, `BarChart.vue`, `lucide-vue-next`, `Dialog.vue`, `drag.ts`, `InvoiceDocument.vue`, `DashboardGrid.vue`, `inventory/types.ts`, `dashboards/types.ts`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `GoogleAdsAlertsPanel.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageBody.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookAlertsPanel.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `lib/types.ts`, `api.ts`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `t`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `Badge.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `ClientNetworkView.vue`, `vue-sonner`, `rewards/rules.ts`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `useSession`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `FacebookAdForm.vue`, `Field.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `google_ads/types.ts`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `GamRunView.vue`, `AdTagsView.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `MfaCard.vue`, `Review Focus`, `CompanyView.vue`, `AlertDialog.vue`, `ChecklistView.vue`, `FiscalDataCard.vue`, `GoogleAdsHistoryPanel.vue`, `CurrencyCard.vue`, `invoices/types.ts`, `table.ts`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `ResetView.vue`, `lucide-vue-next`, `DashboardGrid.vue`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._