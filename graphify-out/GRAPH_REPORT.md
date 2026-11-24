# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 452 files · ~319,073 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5684 nodes · 14835 edges · 200 communities (193 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 164 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8280864f`
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
- facebook/types.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- ResetView.vue
- FacebookView.vue
- ClientsResultsView.vue
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
- Input.vue
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- SiteDetailView.vue
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- index.ts
- .oxlintrc.json
- RolesView.vue
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
- commission-components.test.ts
- GoogleAdsObjectView.vue
- vue-router
- @vueuse/core
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- ad_tags/rules.ts
- Field.vue
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- ConfigPanel.vue
- InstallCheckCell.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- GoogleAdsHistoryPanel.vue
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- reports/rules.ts
- Status.vue
- rewards/rules.ts
- GoalsView.vue
- DashboardWidget.vue
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- loaders/service.ts
- LoginView.vue
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- rewards/service.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- useSession
- ApiKeyDialog.vue
- BarChart.vue
- CustomThemeDialog.vue
- ad_tags/types.ts
- ReservedNetworksCard.vue
- formatDate
- session.ts
- ChecklistNotesCard.vue
- vitest
- PasswordCard.vue
- FiscalDataCard.vue
- LoadersView.vue
- SaveViewDialog.vue
- monthOptions
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- invoices/types.ts
- vitest
- GoogleAdsAlertsPanel.vue
- tabs.ts
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- checklists/rules.ts
- InvoicesView.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- vue
- AdjustmentDialog.vue
- price_rules/types.ts
- FacebookObjectView.vue
- PayeeDialog.vue
- alerts/rules.ts
- MetricStylePopover.vue
- RolesPanel.vue
- adTagPermission
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- Pagination.vue
- metricColor
- DashboardGrid.vue
- api
- lucide-vue-next
- NewDashboardDialog.vue
- overrides
- NetworkReviewActions.vue
- LoaderPreview.vue
- InvoiceServicesView.vue
- checklists/types.ts
- ApiKeyDialog.vue
- AdTagInstallDialog.vue
- api.ts
- ProfileImageCard.vue
- AddWidgetDialog.vue
- ThemeCard.vue
- tasks/types.ts
- ChecklistView.vue
- SaveReportDialog.vue
- SettingsView.vue
- drag.ts
- CurrencyCard.vue
- RevenueStatusBadge.vue
- tasks/rules.ts
- priorityLabel
- 20. CDN dos scripts do site (cdn.groone.com)
- vue-sonner
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `CustomMetric`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `CustomMetricInput`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts

## Import Cycles
- None detected.

## Communities (200 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), editableWidgets(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (49): profileBody(), profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments (+41 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (54): loadDraft(), builderState(), draftOf(), emptyDraft(), fromQuery(), fromReport(), fromTemplate(), toInput() (+46 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.05
Nodes (45): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+37 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (42): busy, canTransfer, duplicate, emit, errors, form, open, props (+34 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (50): adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters, barFilters (+42 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (38): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+30 more)

### Community 12 - "draft-rules.ts"
Cohesion: 0.04
Nodes (82): auditActions, dict, errors, fallbackError, Key, ad, blankCard(), buttonOptions (+74 more)

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
Cohesion: 0.15
Nodes (13): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+5 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.09
Nodes (30): tn(), display, description, emit, finished, open, props, runLabel (+22 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.11
Nodes (21): amount, amountError, busy, chosen, description, emit, open, options (+13 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (30): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (45): overLimit(), GoogleAdsTab, model, props, TABS, accounts, applying, applySuffix() (+37 more)

### Community 25 - "facebook/types.ts"
Cohesion: 0.08
Nodes (34): failure, left, load(), loading, model, options, props, SEARCHED (+26 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (42): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+34 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (59): emptyProfile(), adding, barFilters, busy, canceling, cancelInvite(), cancelOpen, canManage (+51 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (42): FacebookTab, model, props, TABS, accounts, canConnect, canManage, clientName() (+34 more)

### Community 33 - "ClientsResultsView.vue"
Cohesion: 0.06
Nodes (45): CostKind, clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+37 more)

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
Cohesion: 0.10
Nodes (30): NetworkSite, categoryOptions, category, categoryOptions, changed, emit, keep, open (+22 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (44): applyView(), APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category (+36 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.05
Nodes (38): discount(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS, DEFAULT_FILTERS (+30 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "Input.vue"
Cohesion: 0.08
Nodes (31): reka-ui, panelItem(), open, model, cn(), kindClass(), tab(), choice() (+23 more)

### Community 46 - "GroupsView.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

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
Nodes (72): props, up, compare, options, period, selected, countryName(), dailySeries() (+64 more)

### Community 51 - "SiteDetailView.vue"
Cohesion: 0.07
Nodes (28): rows, tree(), busy, canAssign, canManage, classifying, errorToast(), id (+20 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (64): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, FALLBACK, METRIC_COLOR, metricColors() (+56 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (20): latestCall(), Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "index.ts"
Cohesion: 0.10
Nodes (20): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, LINES, showBootFailure(), auditText(), fill() (+12 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (29): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+21 more)

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
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+21 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.07
Nodes (37): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+29 more)

### Community 71 - "commission-components.test.ts"
Cohesion: 0.15
Nodes (11): @vue/test-utils, client, managerChange, perms, settings, staffOptions, team, toastError (+3 more)

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.04
Nodes (73): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), campaignsPath(), CHANGE_KEYS (+65 more)

### Community 73 - "vue-router"
Cohesion: 0.10
Nodes (13): vue-router, vue-router, RouteMeta, catalog, me, report, result, service (+5 more)

### Community 74 - "@vueuse/core"
Cohesion: 0.21
Nodes (13): @vueuse/core@^15.0.0, @vueuse/core, readShown(), useBarFilters(), useLocalBarFilters(), listOrder(), ListTableSetup, readColumns() (+5 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.06
Nodes (28): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+20 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (57): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+49 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (69): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+61 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "ad_tags/rules.ts"
Cohesion: 0.10
Nodes (29): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+21 more)

### Community 81 - "Field.vue"
Cohesion: 0.04
Nodes (60): model, model, busy, daily, dailyValue, emit, monthly, monthlyValue (+52 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (25): stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS, filterLabel(), FILTERS (+17 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.15
Nodes (14): Choice, choice, choiceLabel(), choices, emit, open, path, props (+6 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.08
Nodes (26): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 3: Web — tipos, serviço e regras do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor (+18 more)

### Community 86 - "InstallCheckCell.vue"
Cohesion: 0.16
Nodes (17): asked, check, countdown(), current, emit, label, open, problem (+9 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): adTagsPath(), healthSummary(), share(), base, decimal, filled, health, integer (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): busy, canManage, changed, current, load(), monthNames, months, save() (+23 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.33
Nodes (9): Page, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview (+1 more)

### Community 96 - "reports/rules.ts"
Cohesion: 0.07
Nodes (41): emit, missingDates, options, props, setDate(), setMode(), filterable, path (+33 more)

### Community 97 - "Status.vue"
Cohesion: 0.13
Nodes (15): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+7 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.10
Nodes (25): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+17 more)

### Community 100 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (19): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+11 more)

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
Cohesion: 0.05
Nodes (33): box, failed, initial, props, barFilters, columnLabel(), COLUMNS, companies (+25 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "loaders/service.ts"
Cohesion: 0.23
Nodes (11): InstallSummary, PreviewLoader, loaderService(), LoaderService, Loader, LoaderAdblock, LoaderInput, LoaderOption (+3 more)

### Community 109 - "LoginView.vue"
Cohesion: 0.11
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (30): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+22 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (41): templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), Dashboard (+33 more)

### Community 116 - "rewards/service.ts"
Cohesion: 0.15
Nodes (17): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+9 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (24): FilterOption, priceRuleService(), activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies (+16 more)

### Community 120 - "useSession"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (34): copied, copyLine(), open, props, button, classes, Props, props (+26 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.08
Nodes (53): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+45 more)

### Community 124 - "ad_tags/types.ts"
Cohesion: 0.13
Nodes (21): blankSettings(), newBlock(), adTagService(), AdTagService, AdTag, AdTagBlockKind, AdTagDevice, AdTagDraft (+13 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (15): open, add(), addBusy, addError, addOpen, canAssign, code, emit (+7 more)

### Community 126 - "formatDate"
Cohesion: 0.10
Nodes (21): canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups, load() (+13 more)

### Community 127 - "session.ts"
Cohesion: 0.09
Nodes (29): pinia, SavedThemeColors, ThemeColors, customColors, theme, THEMES, CompanyRef, Lang (+21 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.29
Nodes (9): COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 131 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.07
Nodes (31): loaderPermission(), canManage, base, canManage, COLUMN_LABELS, columnLabel(), columns, companies (+23 more)

### Community 133 - "SaveViewDialog.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 134 - "monthOptions"
Cohesion: 0.40
Nodes (5): months, months, monthOptions(), months, months

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (33): accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions, clients, columns (+25 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.04
Nodes (56): hourPoints(), moneyText(), priceRulePermission(), tierOptions(), canManage, ladderText(), maxOptions, minOptions (+48 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+14 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (56): cascadeFunnel(), gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), funnel (+48 more)

### Community 139 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 140 - "vitest"
Cohesion: 0.38
Nodes (3): vitest@^5.0.5, vitest, loadConfig()

### Community 141 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.14
Nodes (14): alerts, emit, load(), loadError, markRead(), page, pages, props (+6 more)

### Community 142 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.06
Nodes (37): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+29 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (52): goToLoader(), ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems() (+44 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "checklists/rules.ts"
Cohesion: 0.16
Nodes (15): choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, overrideSummary(), previousMonth() (+7 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.05
Nodes (49): applyView(), current, applyView(), current, applyView(), current, rows, current (+41 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (59): t(), availableFilters, base, busy, COLUMN_LABELS, columnLabel(), columns, companies (+51 more)

### Community 155 - "vue"
Cohesion: 0.04
Nodes (60): vue, dot, formatDate(), locale, pageSlice(), td, th, tiles (+52 more)

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 158 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (78): current, dirty, elsewhere, emit, error, kind, parsed, props (+70 more)

### Community 159 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 162 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 163 - "adTagPermission"
Cohesion: 0.67
Nodes (3): adTagPermission(), canManage, canManage

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.05
Nodes (52): model, errorText(), load(), alerts, emit, load(), loadError, markRead() (+44 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

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
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 174 - "metricColor"
Cohesion: 0.24
Nodes (14): colorVar(), metricColor(), dayLabel, dayOptions, chart, hourLabel(), boughtColor, chart (+6 more)

### Community 175 - "DashboardGrid.vue"
Cohesion: 0.13
Nodes (24): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+16 more)

### Community 176 - "api"
Cohesion: 0.13
Nodes (22): api, Query, Items, contractService, ContractSource, ContractStatus, ClientNetwork, ClientNetworkDetail (+14 more)

### Community 177 - "lucide-vue-next"
Cohesion: 0.06
Nodes (36): lucide-vue-next, props, seats, IntegrationKind, company, error, hasSeats, load() (+28 more)

### Community 179 - "NewDashboardDialog.vue"
Cohesion: 0.29
Nodes (7): chosen, create(), emit, name, open, templates, DashboardTemplate

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 183 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.09
Nodes (22): PAGE_WIDTH, data, kpis, loadError, minus(), money(), month, today (+14 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.18
Nodes (15): checklistItemService, checklistService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride (+7 more)

### Community 188 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 189 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 190 - "api.ts"
Cohesion: 0.14
Nodes (20): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+12 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (27): add(), emit, kind, kinds, metric, metrics, open, props (+19 more)

### Community 193 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (14): atLimit, choose(), customs, editing, editor, editorOpen, limit, remove() (+6 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): ROW_TONE, rowStateLabel(), checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 196 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 197 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 201 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (8): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueTrend, SCALING

### Community 202 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 203 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "vue-sonner"
Cohesion: 0.06
Nodes (34): vue-sonner, toasterTheme, pick(), route, router, session, choose(), langs (+26 more)

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `draft-rules.ts`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ResetView.vue`, `FacebookView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `Input.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `SiteDetailView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `index.ts`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `Field.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `InstallCheckCell.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GoogleAdsHistoryPanel.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `reports/rules.ts`, `Status.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `LoginView.vue`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `rewards/service.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `useSession`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `SaveViewDialog.vue`, `monthOptions`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAlertsPanel.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `InvoicesView.vue`, `vue`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `RolesPanel.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `metricColor`, `lucide-vue-next`, `NewDashboardDialog.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `ApiKeyDialog.vue`, `AdTagInstallDialog.vue`, `api.ts`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `SettingsView.vue`, `CurrencyCard.vue`, `RevenueStatusBadge.vue`, `tasks/rules.ts`, `priorityLabel`, `vue-sonner`?**
  _High betweenness centrality (0.166) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `draft-rules.ts`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ResetView.vue`, `FacebookView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `Input.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `SiteDetailView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `index.ts`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `commission-components.test.ts`, `GoogleAdsObjectView.vue`, `vue-router`, `@vueuse/core`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `Field.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `InstallCheckCell.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GoogleAdsHistoryPanel.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `reports/rules.ts`, `Status.vue`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `LoginView.vue`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `useSession`, `ApiKeyDialog.vue`, `BarChart.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `SaveViewDialog.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAlertsPanel.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `AdTagsView.vue`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `MetricStylePopover.vue`, `RolesPanel.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `DashboardGrid.vue`, `lucide-vue-next`, `NewDashboardDialog.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `ApiKeyDialog.vue`, `AdTagInstallDialog.vue`, `api.ts`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `SettingsView.vue`, `drag.ts`, `CurrencyCard.vue`, `RevenueStatusBadge.vue`, `vue-sonner`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050072568940493466 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `FacebookAlertsPanel.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ResetView.vue`, `FacebookView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `SiteDetailView.vue`, `lib/types.ts`, `index.ts`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Field.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `InstallCheckCell.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GoogleAdsHistoryPanel.vue`, `MfaCard.vue`, `GamToolsView.vue`, `Status.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `LoginView.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAlertsPanel.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `AdTagsView.vue`, `vue`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `RolesPanel.vue`, `gam_tools/rules.ts`, `CompanyView.vue`, `AlertDialog.vue`, `DashboardGrid.vue`, `lucide-vue-next`, `NetworkReviewActions.vue`, `InvoiceServicesView.vue`, `ApiKeyDialog.vue`, `api.ts`, `ProfileImageCard.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `SettingsView.vue`, `CurrencyCard.vue`, `vue-sonner`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.054693877551020405 - nodes in this community are weakly interconnected._