# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 452 files · ~318,097 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5674 nodes · 14816 edges · 203 communities (194 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 163 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f88604d7`
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
- draft-rules.ts
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
- facebook/rules.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- Field.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- InviteView.vue
- SiteDetailView.vue
- ClientSitesView.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- FacebookJobDialog.vue
- cn
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- reports/rules.ts
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- ClientsResultsView.vue
- .oxlintrc.json
- FacebookEditView.vue
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
- lang
- GoogleAdsObjectView.vue
- FacebookAdsetForm.vue
- vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- GroupedBarChart.vue
- FacebookAccountDialog.vue
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- ConfigPanel.vue
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- api.ts
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- LoginView.vue
- SeatBar.vue
- rewards/rules.ts
- GoalsView.vue
- reports/types.ts
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- facebook/types.ts
- index.ts
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- tasks/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- contracts/types.ts
- ApiKeyDialog.vue
- google_ads/types.ts
- CustomThemeDialog.vue
- ad-tags.test.ts
- ReservedNetworksCard.vue
- formatDate
- session.ts
- ChecklistNotesCard.vue
- vitest
- sortValue
- SettingsView.vue
- LoadersView.vue
- clients/service.ts
- MyCommissionView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- invoices/types.ts
- views/rules.ts
- GoogleAdsAlertsPanel.vue
- GoogleAdsAccountDialog.vue
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- checklists/rules.ts
- InvoicesView.vue
- Button.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- table.ts
- AdjustmentDialog.vue
- price_rules/types.ts
- FacebookObjectView.vue
- GoogleAdsHistoryPanel.vue
- alerts/rules.ts
- MetricStylePopover.vue
- RolesPanel.vue
- ThemeCard.vue
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- FieldsPanel.vue
- FacebookBudgetCard.vue
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- Pagination.vue
- metricColor
- locale
- ClientNetworkView.vue
- FiscalDataCard.vue
- DashboardFiltersBar.vue
- SaveViewDialog.vue
- overrides
- ClientNetworksCard.vue
- google_ads/rules.ts
- NetworkReviewActions.vue
- LoaderPreview.vue
- areaPaths
- InvoiceServicesView.vue
- ChecklistItemsView.vue
- priorityLabel
- niceTicks
- choose
- ProfileImageCard.vue
- formatRevshare
- tasks/types.ts
- BarChart.vue
- Input.vue
- DashboardGrid.vue
- drag.ts
- CurrencyCard.vue
- 20. CDN dos scripts do site (cdn.groone.com)
- vue-sonner
- priceRulePermission
- FakeSource

## God Nodes (most connected - your core abstractions)
1. `t()` - 684 edges
2. `errorText()` - 387 edges
3. `vue` - 209 edges
4. `ApiError` - 146 edges
5. `lucide-vue-next` - 123 edges
6. `vue-sonner` - 100 edges
7. `useSession` - 98 edges
8. `vue-router` - 69 edges
9. `vitest` - 68 edges
10. `td` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SeriesColor`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (203 total, 9 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (45): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (50): builderState(), toInput(), toQuery(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric(), busy (+42 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.06
Nodes (38): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 7: Web — modal de métrica personalizada e "Minhas métricas" (+30 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (40): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+32 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (55): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters (+47 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (15): box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, LineSeries, padding (+7 more)

### Community 12 - "draft-rules.ts"
Cohesion: 0.05
Nodes (66): auditActions, dict, errors, fallbackError, Key, ad, blankCard(), buttonOptions (+58 more)

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
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (35): pick(), errorText(), checkNow(), confirmEnd(), confirmRemove(), create(), load(), assign() (+27 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (44): asked, check, countdown(), current, display, emit, label, open (+36 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.11
Nodes (23): options, amount, amountError, busy, chosen, description, emit, open (+15 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (30): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (41): GOOGLE_ADS_CONNECT_URL, accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+33 more)

### Community 25 - "facebook/rules.ts"
Cohesion: 0.09
Nodes (29): budgetText(), ACCOUNT_QUALITY_URL, ACCOUNT_TONES, accountTone(), ALERT_KEYS, CHANGE_KEYS, changeText(), controlErrorText() (+21 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.06
Nodes (46): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+38 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (60): emptyProfile(), profileBody(), adding, barFilters, busy, canceling, cancelInvite(), cancelOpen (+52 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

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

### Community 37 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 38 - "SiteDetailView.vue"
Cohesion: 0.05
Nodes (56): NetworkSite, rows, category, categoryOptions, changed, emit, keep, open (+48 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (43): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, categoryOptions (+35 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.10
Nodes (28): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd() (+20 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (37): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+29 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (38): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+30 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "cn"
Cohesion: 0.08
Nodes (19): props, up, panelItem(), railItem(), model, cn(), kindClass(), GoogleAdsTab (+11 more)

### Community 46 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.06
Nodes (43): company, error, hasSeats, load(), lost, networks, router, session (+35 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (59): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+51 more)

### Community 51 - "reports/rules.ts"
Cohesion: 0.07
Nodes (50): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), filterable (+42 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.10
Nodes (19): setTabCompany(), ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (68): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, FALLBACK, METRIC_COLOR, metricColors(), formatMetric() (+60 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (20): PAGE_WIDTH, clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+12 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (23): objectiveOf(), serverProblems(), submit(), ad, adset, detail, edit, externalId (+15 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (17): busy, canChange, emit, manager, managerId, next, NOTE_KEY, open (+9 more)

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
Cohesion: 0.07
Nodes (39): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), label(), download() (+31 more)

### Community 71 - "lang"
Cohesion: 0.13
Nodes (11): vitest, @vue/test-utils, lang, catalog, me, report, result, service (+3 more)

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.08
Nodes (29): campaignsPath(), childLevel(), isLevel(), objectPath(), GoogleAdsTotals, details(), open(), base (+21 more)

### Community 73 - "FacebookAdsetForm.vue"
Cohesion: 0.13
Nodes (16): adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions, pixels (+8 more)

### Community 74 - "vue"
Cohesion: 0.17
Nodes (16): vue, box, failed, initial, props, readShown(), useBarFilters(), useLocalBarFilters() (+8 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.06
Nodes (28): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+20 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (42): busy, canCreate, canDelete, canUpdate, checking, chosenNetwork, client, clientOptions (+34 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (69): model, chosenDay(), settingsProblem(), tagStatus(), UNIT_ORDER, absentUnits, armed, base (+61 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+8 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.08
Nodes (25): model, busy, daily, emit, monthly, onLimit, onLimitOptions, open (+17 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.13
Nodes (16): Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 87 - "formatDate"
Cohesion: 0.07
Nodes (33): healthSummary(), share(), adTagService(), AdTagService, AdTag, AdTagDevice, AdTagEdge, AdTagHealth (+25 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): busy, canManage, changed, current, load(), monthNames, months, save() (+23 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "api.ts"
Cohesion: 0.13
Nodes (27): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+19 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.09
Nodes (27): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+19 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.33
Nodes (8): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 96 - "LoginView.vue"
Cohesion: 0.10
Nodes (18): ApiError, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.08
Nodes (33): dayLabel, dayOptions, answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE (+25 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.11
Nodes (24): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+16 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.05
Nodes (56): Task 3: Web — tipos, serviço e regras do construtor, body, chartHeight, draft, draftKey, emit, failure, goal (+48 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

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
Cohesion: 0.08
Nodes (35): failure, left, load(), loading, model, options, props, SEARCHED (+27 more)

### Community 109 - "index.ts"
Cohesion: 0.09
Nodes (20): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+12 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.14
Nodes (31): add(), ACCOUNT_SIZE, accountWidget(), Box, CHART_SIZE, clamp(), cleanFilters(), compactLayout() (+23 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.04
Nodes (60): copied, open, props, t(), tn(), pages, refreshLabel(), where (+52 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.11
Nodes (21): vue-router, vue-router, RouteMeta, roleNames(), apiMessage(), audience, AUDIENCES, audienceText() (+13 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (41): editableWidgets(), templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience() (+33 more)

### Community 116 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.07
Nodes (36): saveFile(), downloadInstall(), answer, answerOptions, busy, columns, confirmRemove(), exportLeads() (+28 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (23): FilterOption, activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+15 more)

### Community 120 - "contracts/types.ts"
Cohesion: 0.18
Nodes (13): contractActions(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef, ContractSource (+5 more)

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (27): copyLine(), busy, catalog, chosen, copied, copyToken(), create(), DAYS (+19 more)

### Community 122 - "google_ads/types.ts"
Cohesion: 0.16
Nodes (19): GoogleAdsAccount, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAlert, GoogleAdsAlertKind, GoogleAdsAlertSetting, GoogleAdsChange, GoogleAdsChangeOrigin (+11 more)

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.08
Nodes (50): toasterTheme, alphaOf(), channels(), COLOR_KEYS, contrast(), customThemeCss(), derivedBorder(), flatten() (+42 more)

### Community 124 - "ad-tags.test.ts"
Cohesion: 0.09
Nodes (39): addPath(), emit, icon, ICONS, name, pathText, problemText, props (+31 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.14
Nodes (14): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+6 more)

### Community 126 - "formatDate"
Cohesion: 0.07
Nodes (35): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+27 more)

### Community 127 - "session.ts"
Cohesion: 0.07
Nodes (31): pinia, open, session, announceCompany(), CompanyMessage, onCompanyAnnounced(), Me, authService (+23 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.11
Nodes (20): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+12 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "sortValue"
Cohesion: 0.14
Nodes (19): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+11 more)

### Community 131 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

### Community 133 - "clients/service.ts"
Cohesion: 0.13
Nodes (19): CompanyStatus, ClientDocumentsOverview, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption (+11 more)

### Community 134 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (31): accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions, clients, columns (+23 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (54): cascadeFunnel(), gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), funnel, active (+46 more)

### Community 139 - "invoices/types.ts"
Cohesion: 0.13
Nodes (23): UserRef, FiscalData, busy, complete, documentLabel, emit, form, open (+15 more)

### Community 140 - "views/rules.ts"
Cohesion: 0.22
Nodes (15): current, current, current, rows, current, current, current, dirty (+7 more)

### Community 141 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.14
Nodes (14): alerts, emit, load(), loadError, markRead(), page, pages, props (+6 more)

### Community 142 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.07
Nodes (32): dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily, dailyValue (+24 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (33): busy, canManage, created(), creating, keys, load(), loadError, page (+25 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (34): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+26 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (62): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+54 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "checklists/rules.ts"
Cohesion: 0.20
Nodes (11): dollars(), evidenceText(), LANGUAGE_NAMES, progressPercent(), RowState, rowState(), STATES, ChecklistPerson (+3 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (21): barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel(), FILTERS (+13 more)

### Community 152 - "Button.vue"
Cohesion: 0.11
Nodes (22): lucide-vue-next, reka-ui, route, router, session, button, classes, Props (+14 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (47): adTagPermission(), canManage, availableFilters, base, busy, canManage, COLUMN_LABELS, columnLabel() (+39 more)

### Community 155 - "table.ts"
Cohesion: 0.07
Nodes (31): dot, td, th, events, load(), loadError, open, page (+23 more)

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 158 - "FacebookObjectView.vue"
Cohesion: 0.09
Nodes (30): formatCount(), formatMoney(), formatRatio(), periodRange(), PERIODS, base, canManage, currency (+22 more)

### Community 159 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 162 - "RolesPanel.vue"
Cohesion: 0.05
Nodes (49): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+41 more)

### Community 163 - "ThemeCard.vue"
Cohesion: 0.07
Nodes (37): ThemeColors, Lang, Theme, busy, confirm, load(), session, status (+29 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.06
Nodes (34): model, alerts, emit, load(), loadError, markRead(), page, pages (+26 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 169 - "FacebookBudgetCard.vue"
Cohesion: 0.10
Nodes (20): current, dirty, elsewhere, emit, error, kind, parsed, props (+12 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 173 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 174 - "metricColor"
Cohesion: 0.36
Nodes (10): colorVar(), metricColor(), chart, hourLabel(), boughtColor, chart, offeredColor, gainChart (+2 more)

### Community 175 - "locale"
Cohesion: 0.24
Nodes (8): locale, pageCount(), pageSlice(), dimensions, page, props, rows, shownRows

### Community 176 - "ClientNetworkView.vue"
Cohesion: 0.06
Nodes (44): REPORT_CURRENCY, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, ClientSiteDetail, SiteNetworkRef, SiteResponsible (+36 more)

### Community 177 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 178 - "DashboardFiltersBar.vue"
Cohesion: 0.18
Nodes (9): dimensions, filters, periods, props, filterPeriod(), withPeriod(), withValue(), FilterDimension (+1 more)

### Community 179 - "SaveViewDialog.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (19): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+11 more)

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.09
Nodes (25): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+17 more)

### Community 183 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "areaPaths"
Cohesion: 0.60
Nodes (5): areaPaths, linePath(), tooltipLeft, xOf(), yOf()

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.10
Nodes (18): open, busy, canManage, description, editing, editingOpen, load(), loadError (+10 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (20): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress (+12 more)

### Community 188 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 189 - "niceTicks"
Cohesion: 0.67
Nodes (3): ticks, ticks, niceTicks()

### Community 190 - "choose"
Cohesion: 0.67
Nodes (3): applyView(), barFilters, choose()

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 196 - "Input.vue"
Cohesion: 0.10
Nodes (18): model, chosen, create(), emit, name, open, templates, dashboardService (+10 more)

### Community 197 - "DashboardGrid.vue"
Cohesion: 0.12
Nodes (25): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+17 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "vue-sonner"
Cohesion: 0.08
Nodes (24): vue-sonner, busy, current, emit, mismatch, password, password2, ready (+16 more)

### Community 208 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `RewardsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `draft-rules.ts`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Field.vue`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `cn`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `reports/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ClientsResultsView.vue`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `FacebookAdsetForm.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `LoginView.vue`, `rewards/rules.ts`, `GoalsView.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `TemplatesView.vue`, `TemplateEditorView.vue`, `tasks/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ad-tags.test.ts`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `sortValue`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `invoices/types.ts`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `InvoicesView.vue`, `Button.vue`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `GoogleAdsHistoryPanel.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `RolesPanel.vue`, `ThemeCard.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FieldsPanel.vue`, `FacebookBudgetCard.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `metricColor`, `locale`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `DashboardFiltersBar.vue`, `SaveViewDialog.vue`, `ClientNetworksCard.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `ChecklistItemsView.vue`, `priorityLabel`, `ProfileImageCard.vue`, `formatRevshare`, `Input.vue`, `CurrencyCard.vue`, `vue-sonner`?**
  _High betweenness centrality (0.216) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `draft-rules.ts`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Field.vue`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `cn`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `reports/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ClientsResultsView.vue`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `lang`, `GoogleAdsObjectView.vue`, `FacebookAdsetForm.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `GroupedBarChart.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `LoginView.vue`, `SeatBar.vue`, `GoalsView.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `events.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ad-tags.test.ts`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `invoices/types.ts`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `Button.vue`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `GoogleAdsHistoryPanel.vue`, `MetricStylePopover.vue`, `RolesPanel.vue`, `ThemeCard.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FieldsPanel.vue`, `FacebookBudgetCard.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `locale`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `DashboardFiltersBar.vue`, `SaveViewDialog.vue`, `ClientNetworksCard.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `ChecklistItemsView.vue`, `ProfileImageCard.vue`, `BarChart.vue`, `Input.vue`, `DashboardGrid.vue`, `drag.ts`, `CurrencyCard.vue`, `vue-sonner`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `StaffView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `reports/rules.ts`, `lib/types.ts`, `ClientsResultsView.vue`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `LoginView.vue`, `rewards/rules.ts`, `GoalsView.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `invoices/types.ts`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `Button.vue`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `GoogleAdsHistoryPanel.vue`, `RolesPanel.vue`, `ThemeCard.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `FacebookBudgetCard.vue`, `CompanyView.vue`, `AlertDialog.vue`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `ClientNetworksCard.vue`, `NetworkReviewActions.vue`, `InvoiceServicesView.vue`, `ChecklistItemsView.vue`, `ProfileImageCard.vue`, `DashboardGrid.vue`, `CurrencyCard.vue`, `vue-sonner`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._