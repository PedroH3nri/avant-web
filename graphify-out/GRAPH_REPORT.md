# Graph Report - avant-web  (2026-11-25)

## Corpus Check
- 458 files · ~321,063 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5709 nodes · 14923 edges · 202 communities (196 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 164 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4ddc3a91`
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
- FacebookAdsetForm.vue
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
- index.ts
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- InviteView.vue
- errorText
- ClientSitesView.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- FacebookJobDialog.vue
- Dialog.vue
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- dashboards/rules.ts
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- useSession
- .oxlintrc.json
- RolesView.vue
- avant-web
- AccountManagerCard.vue
- tsconfig.json
- session-start.sh
- fontSize.test.ts
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ReportView.vue
- draft-rules.ts
- GoogleAdsObjectView.vue
- vitest
- FacebookCampaignForm.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- ad_tags/rules.ts
- FacebookAccountDialog.vue
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- ConfigPanel.vue
- ClientDocumentsCard.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- SiteDetailView.vue
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- tasks/rules.ts
- MetricStylePopover.vue
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
- GroupedBarChart.vue
- invoices/types.ts
- events.ts
- reports/types.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- SaveReportDialog.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- priorityLabel
- ApiKeyDialog.vue
- BarChart.vue
- CustomThemeDialog.vue
- TeamTabs.vue
- ReservedNetworksCard.vue
- formatDate
- session.ts
- ChecklistNotesCard.vue
- vitest
- AdTagInstallDialog.vue
- SettingsView.vue
- LoadersView.vue
- api.ts
- MyCommissionView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- GoogleAdsAccountDialog.vue
- views/rules.ts
- rewards/service.ts
- CompanyView.vue
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- checklists/rules.ts
- InvoicesView.vue
- ClientSiteView.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- table.ts
- AdjustmentDialog.vue
- price_rules/types.ts
- LoadError.vue
- PayeeDialog.vue
- alerts/rules.ts
- FacebookTabs.vue
- ColorField.vue
- FacebookHistoryPanel.vue
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- FacebookRulesCard.vue
- GamRunView.vue
- ClientNetworksCard.vue
- vite.embed.config.ts
- AlertDialog.vue
- GoogleAdsAlertsPanel.vue
- metricColor
- dashboards/types.ts
- ClientNetworkView.vue
- ApiError
- lang
- costs/rules.ts
- SaveViewDialog.vue
- RevenueStatusBadge.vue
- drag.ts
- NetworkReviewActions.vue
- LoaderPreview.vue
- Review Focus
- InvoiceServicesView.vue
- checklists/types.ts
- results/types.ts
- pagination.ts
- formatDate
- ProfileImageCard.vue
- AddWidgetDialog.vue
- ThemeCard.vue
- tasks/types.ts
- ChecklistView.vue
- overrides
- SeatBar.vue
- CurrencyCard.vue
- priceRulePermission
- 20. CDN dos scripts do site (cdn.groone.com)
- vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 686 edges
2. `errorText()` - 391 edges
3. `vue` - 213 edges
4. `ApiError` - 148 edges
5. `lucide-vue-next` - 123 edges
6. `vue-sonner` - 102 edges
7. `useSession` - 100 edges
8. `vitest` - 70 edges
9. `vue-router` - 69 edges
10. `td` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedReport`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (202 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (41): active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules(), counts (+33 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (45): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (53): profileBody(), profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages (+45 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (63): loadDraft(), BuilderState, builderState(), canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart() (+55 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.05
Nodes (44): pick(), metricOptions, ruleText(), ruleEnd(), setGoal(), DirectPermission, allSites, assigned (+36 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (30): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+22 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (34): busy, canTransfer, duplicate, emit, errors, form, open, props (+26 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (50): adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters, barFilters (+42 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (19): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+11 more)

### Community 12 - "FacebookAdsetForm.vue"
Cohesion: 0.07
Nodes (26): adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions, pixels (+18 more)

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
Nodes (30): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+22 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.06
Nodes (47): tn(), asked, check, countdown(), current, display, emit, label (+39 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (23): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+15 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (45): GoogleAdsTab, model, props, TABS, GOOGLE_ADS_CONNECT_URL, accounts, applying, applySuffix() (+37 more)

### Community 25 - "facebook/types.ts"
Cohesion: 0.07
Nodes (49): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), CHANGE_KEYS, changeText(), DECISION_TONES, facebookPath() (+41 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (43): dayLabel, dayOptions, adUnitNames(), dayText(), adUnitHint, adUnitOptions, base, busy (+35 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (59): emptyProfile(), adding, barFilters, busy, canceling, cancelInvite(), cancelOpen, canManage (+51 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "index.ts"
Cohesion: 0.12
Nodes (16): LINES, showBootFailure(), auditText(), fill(), formatAgo(), loaded, loaders, loadLang() (+8 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.05
Nodes (39): FACEBOOK_CONNECT_URL, accounts, canConnect, canManage, clientName(), clientOptions, clients, companyId (+31 more)

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

### Community 37 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 38 - "errorText"
Cohesion: 0.05
Nodes (45): button, classes, Props, props, errorText(), end(), ending, endingOthers (+37 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (42): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+34 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (37): toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS, DEFAULT_FILTERS (+29 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.13
Nodes (23): load(), overview, picker, picking, rows, send(), sending, props (+15 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.14
Nodes (19): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+11 more)

### Community 45 - "Dialog.vue"
Cohesion: 0.14
Nodes (16): reka-ui, props, up, panelItem(), railItem(), open, cn(), kindClass() (+8 more)

### Community 46 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (31): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+23 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (69): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+61 more)

### Community 51 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (35): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+27 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (71): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, metricColors(), formatMetric(), toNumber() (+63 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "useSession"
Cohesion: 0.04
Nodes (45): vue-router, choose(), langs, session, vue-router, RouteMeta, open, session (+37 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+15 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (35): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+27 more)

### Community 64 - "fontSize.test.ts"
Cohesion: 0.22
Nodes (6): autoprefixer@^10.6.1, postcss@^8.5.31, autoprefixer, postcss, SCALED, scaleRem()

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
Cohesion: 0.10
Nodes (26): devDependencies, jsdom@^30.1.3, oxlint@^1.89.0, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+18 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.05
Nodes (64): emit, missingDates, options, props, setDate(), setMode(), filterable, AXIS_CHARTS (+56 more)

### Community 71 - "draft-rules.ts"
Cohesion: 0.06
Nodes (53): auditActions, dict, errors, fallbackError, Key, ad, blankCard(), buttonOptions (+45 more)

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.05
Nodes (55): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), campaignsPath(), CHANGE_KEYS (+47 more)

### Community 73 - "vitest"
Cohesion: 0.07
Nodes (24): pinia, vitest, @vue/test-utils, emit, period, props, CustomMetricCheck, MetricCatalog (+16 more)

### Community 74 - "FacebookCampaignForm.vue"
Cohesion: 0.15
Nodes (15): model, account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch() (+7 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.06
Nodes (28): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+20 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (65): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+57 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (67): model, settingsProblem(), toPayload(), absentUnits, armed, base, blocking, blocks (+59 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "ad_tags/rules.ts"
Cohesion: 0.06
Nodes (56): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+48 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.05
Nodes (40): model, busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit (+32 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.15
Nodes (14): Choice, choice, choiceLabel(), choices, emit, open, path, props (+6 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.10
Nodes (22): open, add(), adding, deleteOpen, deleting, draft, editing, editOpen (+14 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 86 - "ClientDocumentsCard.vue"
Cohesion: 0.18
Nodes (15): fetchFile(), download(), ClientDocumentsOverview, approve(), busy, downloadFile(), emit, fail() (+7 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.10
Nodes (22): busy, canManage, changed, current, load(), monthNames, months, save() (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.06
Nodes (48): Localized, SiteScope, busy, category, chosen, emit, groups, name (+40 more)

### Community 90 - "SiteDetailView.vue"
Cohesion: 0.04
Nodes (65): ClientNetwork, ClientRef, ClientSite, ClientSiteDetail, NetworkSite, SiteNetworkRef, SiteResponsible, categoryOptions (+57 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (41): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+33 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.09
Nodes (27): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+19 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.31
Nodes (9): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview (+1 more)

### Community 96 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 97 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.08
Nodes (32): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+24 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.07
Nodes (38): months, months, mark, percent, props, share, tone, goalTone() (+30 more)

### Community 100 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (20): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+12 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (52): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+44 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (42): childLevel(), periodRange(), accountId, accountOptions, accounts, allSelected, availableFilters, barFilters (+34 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.06
Nodes (30): latestCall(), barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 109 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 110 - "events.ts"
Cohesion: 0.11
Nodes (17): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+9 more)

### Community 111 - "reports/types.ts"
Cohesion: 0.11
Nodes (26): Task 3: Web — tipos, serviço e regras do construtor, FALLBACK, METRIC_COLOR, ReportDraft, customMetricService, ChartOptions, ChartType, CustomCatalogMetric (+18 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (32): editableWidgets(), templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience() (+24 more)

### Community 116 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.08
Nodes (25): FilterOption, activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+17 more)

### Community 120 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.06
Nodes (38): copied, copyLine(), open, props, busy, catalog, chosen, copied (+30 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.07
Nodes (54): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+46 more)

### Community 124 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.15
Nodes (13): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+5 more)

### Community 126 - "formatDate"
Cohesion: 0.12
Nodes (17): canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups, load() (+9 more)

### Community 127 - "session.ts"
Cohesion: 0.13
Nodes (29): ThemeColors, theme, AnimationArea, FontSize, Lang, Me, Theme, busy (+21 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 131 - "SettingsView.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

### Community 133 - "api.ts"
Cohesion: 0.09
Nodes (41): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+33 more)

### Community 134 - "MyCommissionView.vue"
Cohesion: 0.12
Nodes (20): discount(), STATUS_TONE, commissionService, CommissionEvent, CommissionMonth, CommissionRule, CommissionRuleInput, MyCommissions (+12 more)

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

### Community 139 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.08
Nodes (35): busy, daily, dailyValue, emit, monthly, onLimit, onLimitOptions, open (+27 more)

### Community 140 - "views/rules.ts"
Cohesion: 0.07
Nodes (50): applyView(), current, sortOptions, applyView(), current, sortOptions, applyView(), current (+42 more)

### Community 141 - "rewards/service.ts"
Cohesion: 0.15
Nodes (13): InstallSummary, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead (+5 more)

### Community 142 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.16
Nodes (15): GamFormat, GamRunState, GamStepState, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

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
Cohesion: 0.19
Nodes (12): choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, progressPercent(), ROW_TONE, RowState (+4 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.04
Nodes (43): dot, PAGE_WIDTH, barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS (+35 more)

### Community 152 - "ClientSiteView.vue"
Cohesion: 0.09
Nodes (20): box, failed, initial, props, pick(), route, router, session (+12 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (50): t(), AdTagSiteOption, availableFilters, base, busy, COLUMN_LABELS, columnLabel(), columns (+42 more)

### Community 155 - "table.ts"
Cohesion: 0.07
Nodes (31): td, th, events, load(), loadError, open, page, pages (+23 more)

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.20
Nodes (13): amount, amountError, busy, emit, open, props, reason, reasonTouched (+5 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 158 - "LoadError.vue"
Cohesion: 0.06
Nodes (43): current, dirty, elsewhere, emit, error, kind, parsed, props (+35 more)

### Community 159 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 161 - "FacebookTabs.vue"
Cohesion: 0.33
Nodes (4): FacebookTab, model, props, TABS

### Community 163 - "FacebookHistoryPanel.vue"
Cohesion: 0.10
Nodes (17): lucide-vue-next, first, last, page, props, IntegrationKind, changes, load() (+9 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.12
Nodes (15): model, alerts, emit, load(), loadError, markRead(), page, pages (+7 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (21): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+13 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "FacebookRulesCard.vue"
Cohesion: 0.08
Nodes (28): budgetText(), decisions, load(), loadError, page, pages, props, reason() (+20 more)

### Community 169 - "GamRunView.vue"
Cohesion: 0.12
Nodes (16): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), gamToolService (+8 more)

### Community 170 - "ClientNetworksCard.vue"
Cohesion: 0.10
Nodes (22): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+14 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 173 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 174 - "metricColor"
Cohesion: 0.36
Nodes (10): colorVar(), metricColor(), chart, hourLabel(), boughtColor, chart, offeredColor, gainChart (+2 more)

### Community 175 - "dashboards/types.ts"
Cohesion: 0.15
Nodes (20): chosen, create(), emit, name, open, templates, Dashboard, DashboardInput (+12 more)

### Community 176 - "ClientNetworkView.vue"
Cohesion: 0.13
Nodes (15): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+7 more)

### Community 177 - "ApiError"
Cohesion: 0.12
Nodes (25): ApiError, drag, emit, grid, ordered, props, { run, failure, loading }, source (+17 more)

### Community 178 - "lang"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 179 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 180 - "SaveViewDialog.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 181 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (8): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueTrend, SCALING

### Community 182 - "drag.ts"
Cohesion: 0.57
Nodes (8): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop()

### Community 183 - "NetworkReviewActions.vue"
Cohesion: 0.39
Nodes (7): busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.18
Nodes (15): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride (+7 more)

### Community 188 - "results/types.ts"
Cohesion: 0.33
Nodes (5): Cost, CostInput, CostKind, FormulaCheck, CostLine

### Community 189 - "pagination.ts"
Cohesion: 0.40
Nodes (4): numbers, PAGE_SIZE, pageCount(), pageNumbers()

### Community 190 - "formatDate"
Cohesion: 0.24
Nodes (9): formatDate(), seenText(), dates, monthName(), payee, PAYER, props, STATUS_TONE (+1 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.13
Nodes (22): add(), emit, kind, kinds, metric, metrics, open, props (+14 more)

### Community 193 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (14): atLimit, choose(), customs, editing, editor, editorOpen, limit, remove() (+6 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): overrideSummary(), rowStateLabel(), checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 196 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 204 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "vue"
Cohesion: 0.05
Nodes (41): vue, vue-sonner, toasterTheme, SavedThemeColors, ANIMATION_AREAS, animations, customColors, FONT_SIZES (+33 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookAdsetForm.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `errorText`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `Dialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `dashboards/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `useSession`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `draft-rules.ts`, `GoogleAdsObjectView.vue`, `vitest`, `FacebookCampaignForm.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `ClientDocumentsCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `tasks/rules.ts`, `MetricStylePopover.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `SaveReportDialog.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `priorityLabel`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `TeamTabs.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `AdTagInstallDialog.vue`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAccountDialog.vue`, `views/rules.ts`, `CompanyView.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `InvoicesView.vue`, `ClientSiteView.vue`, `table.ts`, `AdjustmentDialog.vue`, `LoadError.vue`, `PayeeDialog.vue`, `alerts/rules.ts`, `FacebookTabs.vue`, `ColorField.vue`, `FacebookHistoryPanel.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FacebookRulesCard.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `GoogleAdsAlertsPanel.vue`, `metricColor`, `dashboards/types.ts`, `ClientNetworkView.vue`, `lang`, `costs/rules.ts`, `SaveViewDialog.vue`, `RevenueStatusBadge.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `formatDate`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `CurrencyCard.vue`, `vue`?**
  _High betweenness centrality (0.220) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051515151515151514 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookAdsetForm.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `useSession`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ClientDocumentsCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAccountDialog.vue`, `CompanyView.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `ClientSiteView.vue`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `LoadError.vue`, `PayeeDialog.vue`, `FacebookHistoryPanel.vue`, `FacebookAlertsPanel.vue`, `FacebookRulesCard.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `GoogleAdsAlertsPanel.vue`, `ClientNetworkView.vue`, `ApiError`, `NetworkReviewActions.vue`, `Review Focus`, `InvoiceServicesView.vue`, `ProfileImageCard.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `CurrencyCard.vue`, `vue`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `FacebookAdsetForm.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `errorText`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `Dialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `dashboards/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `useSession`, `RolesView.vue`, `AccountManagerCard.vue`, `fontSize.test.ts`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `draft-rules.ts`, `GoogleAdsObjectView.vue`, `vitest`, `FacebookCampaignForm.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `ClientDocumentsCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `MetricStylePopover.vue`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `GroupedBarChart.vue`, `events.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `SaveReportDialog.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `BarChart.vue`, `CustomThemeDialog.vue`, `TeamTabs.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `AdTagInstallDialog.vue`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAccountDialog.vue`, `views/rules.ts`, `CompanyView.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `ClientSiteView.vue`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `LoadError.vue`, `PayeeDialog.vue`, `ColorField.vue`, `FacebookHistoryPanel.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `AdTagPreview.vue`, `FacebookRulesCard.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `GoogleAdsAlertsPanel.vue`, `dashboards/types.ts`, `ClientNetworkView.vue`, `ApiError`, `lang`, `SaveViewDialog.vue`, `RevenueStatusBadge.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `formatDate`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `SeatBar.vue`, `CurrencyCard.vue`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05101327742837177 - nodes in this community are weakly interconnected._