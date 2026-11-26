# Graph Report - avant-web  (2026-11-26)

## Corpus Check
- 516 files · ~350,685 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 6262 nodes · 16447 edges · 204 communities (198 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 181 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `057d9bfb`
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
- api.ts
- RuleDialog.vue
- TeamView.vue
- SitesView.vue
- LineChart.vue
- facebook/types.ts
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- HubspotView.vue
- StaffView.vue
- InstallCheckCell.vue
- steps
- FacebookAdsetForm.vue
- SavedViewsBar.vue
- GoogleAdsView.vue
- FacebookObjectView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- useSession
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- AccountManagerCard.vue
- SettingsView.vue
- ClientSitesView.vue
- SendNotificationDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- FacebookJobDialog.vue
- FacebookCreateView.vue
- NewGroupDialog.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- SiteDetailView.vue
- MyCommissionView.vue
- ProspectsView.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- HelpCenterView.vue
- .oxlintrc.json
- DateRangePicker.vue
- avant-web
- account/service.ts
- tsconfig.json
- session-start.sh
- account/service.ts
- ReportsView.vue
- TaskView.vue
- ScheduleDialog.vue
- package.json
- hubspot/rules.ts
- ReportView.vue
- FacebookAdForm.vue
- google_ads/rules.ts
- navigation.ts
- HelpEditorView.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- DollarRate.vue
- FacebookPersonDialog.vue
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- FacebookAdForm.vue
- ClientsResultsView.vue
- AdTagMetricsView.vue
- CompanyGoalCard.vue
- RolesView.vue
- contracts/types.ts
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- NpsView.vue
- ServiceLineDialog.vue
- dashboards/rules.ts
- ReportThumb.vue
- GoalsView.vue
- NotificationCenter.vue
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- gam_tools/rules.ts
- ReservedNetworksCard.vue
- events.ts
- Field.vue
- updates
- index.ts
- Key
- TemplateEditorView.vue
- reports/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- Button.vue
- errorText
- BarChart.vue
- CustomThemeDialog.vue
- GoogleAdsObjectView.vue
- AdTagBlockCard.vue
- formatDate
- session.ts
- ChecklistNotesCard.vue
- Key
- clients/rules.ts
- InvoicesView.vue
- LoadersView.vue
- sortValue
- MyInvoicesView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ClientNetworksCard.vue
- PriceRuleSiteView.vue
- DashboardWidget.vue
- ThemeCard.vue
- Pagination.vue
- ApiKeysCard.vue
- PerformanceView.vue
- ChecklistItemDialog.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- AddWidgetDialog.vue
- TemplatesView.vue
- ApiKeysCard.vue
- virtual-i18n.d.ts
- t
- FacebookCampaignForm.vue
- AdjustmentDialog.vue
- price_rules/types.ts
- CurrencyCard.vue
- lang
- RolePermissionsCard.vue
- tasks/rules.ts
- api.ts
- ad_tags/rules.ts
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- MetricStylePopover.vue
- AdTagPreview.vue
- dashboards/types.ts
- GoogleAdsAccountDialog.vue
- invoices/types.ts
- vite.embed.config.ts
- reports/types.ts
- PayeeDialog.vue
- metricColor
- PageBody.vue
- @vueuse/core
- FacebookBudgetCard.vue
- PasswordCard.vue
- errorToast
- cn
- locale
- SettingsView.vue
- drag.ts
- LoaderPreview.vue
- theme.ts
- ApiKeyDialog.vue
- ChecklistItemsView.vue
- Review Focus
- hubspot/types.ts
- FakeSource
- fontSize.test.ts
- priorityLabel
- NetworkReviewActions.vue
- tasks/types.ts
- CompanyIcon.vue
- rewards/service.ts
- TableState.vue
- priceRulePermission
- GamRunView.vue
- 20. CDN dos scripts do site (cdn.groone.com)
- DashboardGrid.vue
- SeatBar.vue
- NetworkReviewActions.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 753 edges
2. `errorText()` - 426 edges
3. `vue` - 239 edges
4. `ApiError` - 163 edges
5. `lucide-vue-next` - 143 edges
6. `vue-sonner` - 109 edges
7. `useSession` - 108 edges
8. `formatDate()` - 77 edges
9. `cn()` - 76 edges
10. `vitest` - 76 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (204 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (45): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+37 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.06
Nodes (37): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+29 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (30): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+22 more)

### Community 7 - "api.ts"
Cohesion: 0.10
Nodes (37): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+29 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (33): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+25 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (55): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+47 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (39): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+31 more)

### Community 12 - "facebook/types.ts"
Cohesion: 0.08
Nodes (39): failure, left, load(), loading, model, options, props, SEARCHED (+31 more)

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

### Community 18 - "HubspotView.vue"
Cohesion: 0.06
Nodes (39): filterFailures(), isRunning(), runSummary(), settingsBody(), barFilters, canRun, DEFAULT_FILTERS, dirty (+31 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (30): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+22 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (43): asked, check, countdown(), current, display, emit, label, open (+35 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "FacebookAdsetForm.vue"
Cohesion: 0.05
Nodes (62): model, auditActions, dict, errors, fallbackError, adset, eventOptions, genderOptions (+54 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.10
Nodes (23): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+15 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (44): GoogleAdsTab, model, props, TABS, accounts, applying, applySuffix(), canConnect (+36 more)

### Community 25 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (66): dot, budgetText(), decisions, loadError, page, pages, props, reason() (+58 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.06
Nodes (44): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+36 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (43): dayLabel, dayOptions, dayText(), previewReward(), adUnitOptions, base, busy, buttonColorLabel() (+35 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (65): accessQuery(), emptyProfile(), prospectDraft(), access, accessOptions, adding, barFilters, busy (+57 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "useSession"
Cohesion: 0.06
Nodes (34): choose(), langs, session, open, session, chooseLang(), safeNext(), announceCompany() (+26 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.05
Nodes (39): FACEBOOK_CONNECT_URL, accounts, canConnect, canManage, clientName(), clientOptions, clients, companyId (+31 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.10
Nodes (24): monthChoices, tiles, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange() (+16 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (30): CompanyStatus, profileBody(), AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption (+22 more)

### Community 38 - "SettingsView.vue"
Cohesion: 0.08
Nodes (32): adUnitNames(), answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle() (+24 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (42): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+34 more)

### Community 40 - "SendNotificationDialog.vue"
Cohesion: 0.07
Nodes (34): audience, audiences, choices, chosen, emit, icon, iconOf(), link (+26 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.16
Nodes (17): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+9 more)

### Community 45 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (52): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, serverProblems(), FacebookAdsetInput, account, accounts (+44 more)

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.03
Nodes (76): broken, hue, initials, props, busy, create(), description, duplicate (+68 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "SiteDetailView.vue"
Cohesion: 0.04
Nodes (76): ClientNetworkDetail, ClientRef, ClientSite, ClientSiteDetail, NetworkSite, SiteNetworkRef, SiteResponsible, categoryOptions (+68 more)

### Community 51 - "MyCommissionView.vue"
Cohesion: 0.18
Nodes (11): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+3 more)

### Community 52 - "ProspectsView.vue"
Cohesion: 0.07
Nodes (34): HealthGroup, PROSPECT_STAGES, prospectName(), prospectOwners(), prospectsByStage(), registerLink(), HubspotProspect, barFilters (+26 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (57): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, lang, metricColors(), pageSlice(), title (+49 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "HelpCenterView.vue"
Cohesion: 0.05
Nodes (52): answer, blocks, emit, open, props, rate(), current, finish() (+44 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "DateRangePicker.vue"
Cohesion: 0.06
Nodes (58): dayClass(), emit, focusable, grid, onKey(), props, weekdays, weeks (+50 more)

### Community 61 - "account/service.ts"
Cohesion: 0.05
Nodes (53): busy, drop(), input, pick(), problem, props, run(), copied (+45 more)

### Community 64 - "account/service.ts"
Cohesion: 0.14
Nodes (23): ThemeColors, AnimationArea, FontSize, Theme, busy, confirm, load(), session (+15 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment, fail() (+12 more)

### Community 67 - "ScheduleDialog.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.10
Nodes (26): devDependencies, jsdom@^31.0.1, oxlint@^1.94.0, postcss@^8.5.33, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^26.6.6, @types/qrcode@1.5.6 (+18 more)

### Community 69 - "hubspot/rules.ts"
Cohesion: 0.06
Nodes (43): activities, ACTIVITY_ICON, emptyText, facts, kinds, linked, props, shownKind (+35 more)

### Community 70 - "ReportView.vue"
Cohesion: 0.08
Nodes (37): sameComparison(), savedPeriod(), toQuery(), viewChanged(), viewDraft(), exportUrl(), download(), download() (+29 more)

### Community 71 - "FacebookAdForm.vue"
Cohesion: 0.11
Nodes (17): PAGE_WIDTH, active, KINDS, load(), loadError, loadRuns(), network, networkId (+9 more)

### Community 72 - "google_ads/rules.ts"
Cohesion: 0.07
Nodes (32): ADS_MAX_DAYS, ADS_PRESETS, PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager() (+24 more)

### Community 73 - "navigation.ts"
Cohesion: 0.16
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 74 - "HelpEditorView.vue"
Cohesion: 0.06
Nodes (52): HelpCategory, HelpKind, HelpLanguage, categoryOptions, content, emit, form, language (+44 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.04
Nodes (78): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+70 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (60): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+52 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (65): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+57 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "DollarRate.vue"
Cohesion: 0.13
Nodes (16): change, firstDay, label, lastDay, money(), points, quote, trendUp (+8 more)

### Community 81 - "FacebookPersonDialog.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.14
Nodes (16): Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "FacebookAdForm.vue"
Cohesion: 0.10
Nodes (23): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+15 more)

### Community 86 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (21): clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError (+13 more)

### Community 87 - "AdTagMetricsView.vue"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (18): busy, canManage, changed, current, load(), monthNames, months, save() (+10 more)

### Community 89 - "RolesView.vue"
Cohesion: 0.04
Nodes (63): pick(), Localized, SiteScope, options, transferOptions, ruleEnd(), setGoal(), busy (+55 more)

### Community 90 - "contracts/types.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), LANGUAGE_NAMES, overrideSummary(), progressPercent(), RowState, rowState(), STATES (+4 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.08
Nodes (31): defaultSites(), adsLines, adsOpen, busy, choose(), chosen, close(), copyAds() (+23 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "NpsView.vue"
Cohesion: 0.06
Nodes (36): comment, question, score, sending, stage, NpsGroup, npsGroup(), npsService (+28 more)

### Community 96 - "ServiceLineDialog.vue"
Cohesion: 0.11
Nodes (22): amount, amountError, busy, chosen, description, emit, open, options (+14 more)

### Community 97 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 98 - "ReportThumb.vue"
Cohesion: 0.16
Nodes (15): ROW_TONE, checklistService, checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.07
Nodes (40): months, mark, percent, props, share, tone, companyGoalYears(), goalTone() (+32 more)

### Community 100 - "NotificationCenter.vue"
Cohesion: 0.11
Nodes (25): badge, canSend, choose(), composing, internal, items, loading, loadList() (+17 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.05
Nodes (39): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+31 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+16 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.07
Nodes (32): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+24 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (57): cascadeFunnel(), cascadeLadder(), dropPercent(), hourLabel(), nearestTier(), percentText(), base, busy (+49 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (39): accountId, accountOptions, accounts, allSelected, availableFilters, barFilters, base, canManage (+31 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.06
Nodes (30): latestCall(), barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (19): chosen, delegationLabel(), formatDesc(), formatName(), GTAG_BLOCKS, KEY_NAMES, siteSummary(), stepDetail() (+11 more)

### Community 109 - "ReservedNetworksCard.vue"
Cohesion: 0.15
Nodes (13): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+5 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "Field.vue"
Cohesion: 0.07
Nodes (21): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+13 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "index.ts"
Cohesion: 0.11
Nodes (17): LINES, showBootFailure(), auditText(), fill(), formatAgo(), loaded, loaders, loadLang() (+9 more)

### Community 114 - "Key"
Cohesion: 0.12
Nodes (15): Key, changes, load(), loadError, origin, originOptions, page, pages (+7 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (32): editableWidgets(), blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole(), withAudience() (+24 more)

### Community 116 - "reports/rules.ts"
Cohesion: 0.07
Nodes (47): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), filterable (+39 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (23): FilterOption, activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+15 more)

### Community 120 - "Button.vue"
Cohesion: 0.07
Nodes (36): lucide-vue-next, reka-ui, route, router, session, button, classes, Props (+28 more)

### Community 121 - "errorText"
Cohesion: 0.05
Nodes (48): pick(), ApiError, errorText(), busy, link, save(), session, unchanged (+40 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.09
Nodes (49): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+41 more)

### Community 124 - "GoogleAdsObjectView.vue"
Cohesion: 0.08
Nodes (22): childLevel(), isLevel(), base, child, children, currency, detail, externalId (+14 more)

### Community 125 - "AdTagBlockCard.vue"
Cohesion: 0.11
Nodes (22): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+14 more)

### Community 126 - "formatDate"
Cohesion: 0.10
Nodes (20): formatDate(), seenText(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing (+12 more)

### Community 127 - "session.ts"
Cohesion: 0.05
Nodes (36): pinia, vue-router, vue-router, RouteMeta, theme, Me, accountService, authService (+28 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.11
Nodes (20): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+12 more)

### Community 129 - "Key"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "clients/rules.ts"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 131 - "InvoicesView.vue"
Cohesion: 0.07
Nodes (31): current, current, current, rows, current, barFilters, columnLabel(), COLUMNS (+23 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

### Community 133 - "sortValue"
Cohesion: 0.13
Nodes (21): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+13 more)

### Community 134 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (37): periodQuery(), open(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+29 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ClientNetworksCard.vue"
Cohesion: 0.04
Nodes (58): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, company, error, hasSeats, load() (+50 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (51): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), active, automaticRuleCount, base (+43 more)

### Community 139 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (18): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+10 more)

### Community 140 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (14): atLimit, choose(), customs, editing, editor, editorOpen, limit, remove() (+6 more)

### Community 141 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 142 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 143 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (83): compare, period, presets, change(), countryName(), dailySeries(), daysOf(), formatMetric() (+75 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (16): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+8 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (33): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+25 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (62): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+54 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 151 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (17): templateService, apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError (+9 more)

### Community 152 - "ApiKeysCard.vue"
Cohesion: 0.09
Nodes (27): copyLine(), copyToken(), copied, copyAll(), download(), manual, props, session (+19 more)

### Community 154 - "t"
Cohesion: 0.04
Nodes (49): availableFilters, base, busy, canManage, COLUMN_LABELS, columnLabel(), columns, companies (+41 more)

### Community 155 - "FacebookCampaignForm.vue"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.13
Nodes (21): amount, amountError, busy, emit, open, props, reason, reasonTouched (+13 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "CurrencyCard.vue"
Cohesion: 0.13
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 159 - "lang"
Cohesion: 0.12
Nodes (14): vitest@^5.1.1, @vue/test-utils@^2.6.0, vitest, @vue/test-utils, client, managerChange, perms, settings (+6 more)

### Community 160 - "RolePermissionsCard.vue"
Cohesion: 0.16
Nodes (14): groups, busy, canManage, changed, chosen, emit, groups, props (+6 more)

### Community 161 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 162 - "api.ts"
Cohesion: 0.15
Nodes (21): vue, readShown(), useBarFilters(), useLocalBarFilters(), emit, listOrder(), ListTableSetup, readColumns() (+13 more)

### Community 163 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (44): copied, line, open, props, visible, adTagPermission(), adTagsPath(), anchorEdgeOn() (+36 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.06
Nodes (33): model, alerts, emit, load(), loadError, markRead(), page, pages (+25 more)

### Community 166 - "MetricStylePopover.vue"
Cohesion: 0.16
Nodes (16): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+8 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "dashboards/types.ts"
Cohesion: 0.26
Nodes (14): Dashboard, DashboardFilters, DashboardInput, DashboardPage, DashboardRun, DashboardTemplate, HomeDashboard, ManagedTemplate (+6 more)

### Community 169 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.06
Nodes (42): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+34 more)

### Community 170 - "invoices/types.ts"
Cohesion: 0.29
Nodes (12): UserRef, FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+4 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.8, vite, ENTRIES, Entry, entry, source

### Community 172 - "reports/types.ts"
Cohesion: 0.08
Nodes (36): Task 3: Web — tipos, serviço e regras do construtor, FALLBACK, METRIC_COLOR, Lang, ReportDraft, customMetricService, reportService, ChartOptions (+28 more)

### Community 173 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 174 - "metricColor"
Cohesion: 0.39
Nodes (8): colorVar(), metricColor(), chart, boughtColor, offeredColor, gainChart, chart, chart

### Community 175 - "PageBody.vue"
Cohesion: 0.10
Nodes (18): open, busy, canManage, description, editing, editingOpen, load(), loadError (+10 more)

### Community 176 - "@vueuse/core"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+11 more)

### Community 177 - "FacebookBudgetCard.vue"
Cohesion: 0.18
Nodes (12): current, dirty, elsewhere, emit, error, kind, parsed, props (+4 more)

### Community 178 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 179 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 180 - "cn"
Cohesion: 0.04
Nodes (43): props, up, open, model, model, model, cn(), chosen (+35 more)

### Community 181 - "locale"
Cohesion: 0.32
Nodes (11): locale, detail, props, change, props, changeText(), perDayText(), TREND_CLASS (+3 more)

### Community 182 - "SettingsView.vue"
Cohesion: 0.08
Nodes (28): busy, complete, documentLabel, form, load(), loaded, options, save() (+20 more)

### Community 183 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "theme.ts"
Cohesion: 0.09
Nodes (19): vue-sonner, toasterTheme, SavedThemeColors, ANIMATION_AREAS, animations, applyCustomCss(), customColors, FONT_SIZES (+11 more)

### Community 186 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (20): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress (+12 more)

### Community 188 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 189 - "hubspot/types.ts"
Cohesion: 0.08
Nodes (33): cards, error, load(), loading, props, cards, error, load() (+25 more)

### Community 191 - "fontSize.test.ts"
Cohesion: 0.28
Nodes (5): autoprefixer@^10.6.2, autoprefixer, SCALED, scaleRem(), fontSize

### Community 192 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 193 - "NetworkReviewActions.vue"
Cohesion: 0.39
Nodes (7): busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 196 - "rewards/service.ts"
Cohesion: 0.15
Nodes (13): InstallSummary, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead (+5 more)

### Community 197 - "TableState.vue"
Cohesion: 0.06
Nodes (39): td, th, alerts, emit, load(), loadError, markRead(), page (+31 more)

### Community 198 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 203 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "DashboardGrid.vue"
Cohesion: 0.13
Nodes (24): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+16 more)

### Community 210 - "NetworkReviewActions.vue"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `account/service.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `HubspotView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `FacebookAdsetForm.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `useSession`, `FacebookView.vue`, `ResultsView.vue`, `AccountManagerCard.vue`, `SettingsView.vue`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `FacebookCreateView.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `SiteDetailView.vue`, `MyCommissionView.vue`, `ProspectsView.vue`, `toNumber`, `PeopleView.vue`, `HelpCenterView.vue`, `DateRangePicker.vue`, `account/service.ts`, `ReportsView.vue`, `TaskView.vue`, `ScheduleDialog.vue`, `hubspot/rules.ts`, `ReportView.vue`, `FacebookAdForm.vue`, `navigation.ts`, `HelpEditorView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `DollarRate.vue`, `FacebookPersonDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `FacebookAdForm.vue`, `ClientsResultsView.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `contracts/types.ts`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `NpsView.vue`, `ServiceLineDialog.vue`, `dashboards/rules.ts`, `ReportThumb.vue`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `gam_tools/rules.ts`, `ReservedNetworksCard.vue`, `Field.vue`, `index.ts`, `Key`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `Button.vue`, `errorText`, `CustomThemeDialog.vue`, `GoogleAdsObjectView.vue`, `AdTagBlockCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `clients/rules.ts`, `InvoicesView.vue`, `LoadersView.vue`, `sortValue`, `MyInvoicesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ClientNetworksCard.vue`, `PriceRuleSiteView.vue`, `DashboardWidget.vue`, `ThemeCard.vue`, `Pagination.vue`, `ApiKeysCard.vue`, `PerformanceView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `TemplatesView.vue`, `ApiKeysCard.vue`, `t`, `AdjustmentDialog.vue`, `CurrencyCard.vue`, `RolePermissionsCard.vue`, `tasks/rules.ts`, `ad_tags/rules.ts`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `MetricStylePopover.vue`, `AdTagPreview.vue`, `GoogleAdsAccountDialog.vue`, `PayeeDialog.vue`, `metricColor`, `PageBody.vue`, `FacebookBudgetCard.vue`, `PasswordCard.vue`, `errorToast`, `cn`, `locale`, `SettingsView.vue`, `LoaderPreview.vue`, `theme.ts`, `ApiKeyDialog.vue`, `ChecklistItemsView.vue`, `priorityLabel`, `NetworkReviewActions.vue`, `TableState.vue`, `GamRunView.vue`?**
  _High betweenness centrality (0.194) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `api.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `facebook/types.ts`, `clean-code.mjs`, `HubspotView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `FacebookAdsetForm.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `useSession`, `FacebookView.vue`, `ResultsView.vue`, `AccountManagerCard.vue`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `FacebookCreateView.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `SiteDetailView.vue`, `MyCommissionView.vue`, `ProspectsView.vue`, `toNumber`, `PeopleView.vue`, `HelpCenterView.vue`, `DateRangePicker.vue`, `account/service.ts`, `account/service.ts`, `ReportsView.vue`, `TaskView.vue`, `ScheduleDialog.vue`, `package.json`, `hubspot/rules.ts`, `ReportView.vue`, `FacebookAdForm.vue`, `navigation.ts`, `HelpEditorView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `DollarRate.vue`, `FacebookPersonDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `FacebookAdForm.vue`, `ClientsResultsView.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `NpsView.vue`, `ServiceLineDialog.vue`, `dashboards/rules.ts`, `ReportThumb.vue`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `ReservedNetworksCard.vue`, `events.ts`, `Field.vue`, `index.ts`, `Key`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `Button.vue`, `errorText`, `BarChart.vue`, `CustomThemeDialog.vue`, `GoogleAdsObjectView.vue`, `AdTagBlockCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `clients/rules.ts`, `InvoicesView.vue`, `LoadersView.vue`, `MyInvoicesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ClientNetworksCard.vue`, `PriceRuleSiteView.vue`, `DashboardWidget.vue`, `ThemeCard.vue`, `Pagination.vue`, `ApiKeysCard.vue`, `PerformanceView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `TemplatesView.vue`, `ApiKeysCard.vue`, `t`, `FacebookCampaignForm.vue`, `AdjustmentDialog.vue`, `CurrencyCard.vue`, `lang`, `RolePermissionsCard.vue`, `ad_tags/rules.ts`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `MetricStylePopover.vue`, `AdTagPreview.vue`, `GoogleAdsAccountDialog.vue`, `reports/types.ts`, `PayeeDialog.vue`, `PageBody.vue`, `@vueuse/core`, `FacebookBudgetCard.vue`, `PasswordCard.vue`, `cn`, `locale`, `SettingsView.vue`, `drag.ts`, `LoaderPreview.vue`, `theme.ts`, `ApiKeyDialog.vue`, `ChecklistItemsView.vue`, `hubspot/types.ts`, `fontSize.test.ts`, `NetworkReviewActions.vue`, `CompanyIcon.vue`, `TableState.vue`, `GamRunView.vue`, `DashboardGrid.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04934687953555878 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `HubspotView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `useSession`, `FacebookView.vue`, `ResultsView.vue`, `AccountManagerCard.vue`, `SettingsView.vue`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `FacebookCreateView.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `SiteDetailView.vue`, `MyCommissionView.vue`, `ProspectsView.vue`, `PeopleView.vue`, `HelpCenterView.vue`, `account/service.ts`, `account/service.ts`, `ReportsView.vue`, `TaskView.vue`, `ScheduleDialog.vue`, `ReportView.vue`, `FacebookAdForm.vue`, `HelpEditorView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ClientsResultsView.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `NpsView.vue`, `ServiceLineDialog.vue`, `ReportThumb.vue`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `ReservedNetworksCard.vue`, `Field.vue`, `index.ts`, `Key`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `Button.vue`, `CustomThemeDialog.vue`, `GoogleAdsObjectView.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `InvoicesView.vue`, `LoadersView.vue`, `MyInvoicesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ClientNetworksCard.vue`, `PriceRuleSiteView.vue`, `DashboardWidget.vue`, `ThemeCard.vue`, `ApiKeysCard.vue`, `PerformanceView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `TemplatesView.vue`, `ApiKeysCard.vue`, `t`, `AdjustmentDialog.vue`, `CurrencyCard.vue`, `RolePermissionsCard.vue`, `FacebookAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `PayeeDialog.vue`, `PageBody.vue`, `FacebookBudgetCard.vue`, `PasswordCard.vue`, `errorToast`, `SettingsView.vue`, `theme.ts`, `ApiKeyDialog.vue`, `ChecklistItemsView.vue`, `Review Focus`, `hubspot/types.ts`, `NetworkReviewActions.vue`, `TableState.vue`, `GamRunView.vue`, `DashboardGrid.vue`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._