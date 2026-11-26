# Graph Report - avant-web  (2026-11-26)

## Corpus Check
- 491 files · ~336,019 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5978 nodes · 15686 edges · 202 communities (198 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 168 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `92c11db1`
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
- errorText
- InstallCheckCell.vue
- steps
- Key
- SavedViewsBar.vue
- GoogleAdsView.vue
- FacebookObjectView.vue
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
- Field.vue
- rewards/rules.ts
- ClientSitesView.vue
- SendNotificationDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- FacebookJobDialog.vue
- FacebookCreateView.vue
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- ClassifySitesDialog.vue
- MyCommissionView.vue
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- lang
- .oxlintrc.json
- DateRangePicker.vue
- avant-web
- ad-tags.test.ts
- tsconfig.json
- session-start.sh
- CustomThemeDialog.vue
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- session.ts
- ReportView.vue
- FacebookAdForm.vue
- google_ads/rules.ts
- hubspot/rules.ts
- ReservedNetworksCard.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- DollarRate.vue
- ConfigPanel.vue
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- DashboardWidget.vue
- GroupView.vue
- AdTagMetricsView.vue
- CompanyGoalCard.vue
- RoleDialog.vue
- checklists/rules.ts
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- pick
- MyInvoicesView.vue
- install-checks.test.ts
- ChecklistView.vue
- GoalsView.vue
- NotificationCenter.vue
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- FacebookAccountDialog.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- gam_tools/rules.ts
- ClientNetworkView.vue
- events.ts
- reports/types.ts
- updates
- InstallResultDialog.vue
- TemplatesView.vue
- TemplateEditorView.vue
- reports/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- navigation.ts
- theme.ts
- BarChart.vue
- customTheme.ts
- GoogleAdsObjectView.vue
- vue-sonner
- formatDate
- ThemeCard.vue
- ChecklistNotesCard.vue
- vitest
- FacebookHistoryPanel.vue
- InvoicesView.vue
- LoadersView.vue
- main.ts
- DashboardFiltersBar.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- sites/service.ts
- RolesView.vue
- pagination.ts
- Review Focus
- PerformanceView.vue
- ChecklistItemsView.vue
- NetworkAdsTxtCard.vue
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- AddWidgetDialog.vue
- SaveReportDialog.vue
- ApiKeysCard.vue
- virtual-i18n.d.ts
- t
- avant-tag
- AdjustmentDialog.vue
- price_rules/types.ts
- CurrencyCard.vue
- AccountManagerCard.vue
- alerts/rules.ts
- Input.vue
- sites.test.ts
- ad_tags/rules.ts
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- notifications/types.ts
- AdTagPreview.vue
- GoogleAdsAccountDialog.vue
- vite.embed.config.ts
- AlertDialog.vue
- tabs.ts
- metricColor
- vue
- @vueuse/core
- notifications/rules.ts
- SiteDetailView.vue
- cn
- locale
- AccountStatus.vue
- api
- LoaderPreview.vue
- ApiKeyDialog.vue
- checklists/types.ts
- DashboardGrid.vue
- hubspot/types.ts
- ProfileImageCard.vue
- dashboards/rules.ts
- tasks/types.ts
- drag.ts
- rewards/service.ts
- GoogleAdsAlertsPanel.vue
- MetricStylePopover.vue
- FacebookBudgetCard.vue
- hubspot.test.ts
- GoogleAdsHistoryPanel.vue
- alerts/types.ts
- GamRunView.vue
- 20. CDN dos scripts do site (cdn.groone.com)
- dashboards/types.ts
- AdTagInstallDialog.vue
- Button.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 709 edges
2. `errorText()` - 408 edges
3. `vue` - 228 edges
4. `ApiError` - 157 edges
5. `lucide-vue-next` - 133 edges
6. `vue-sonner` - 106 edges
7. `useSession` - 105 edges
8. `Key` - 78 edges
9. `vitest` - 74 edges
10. `formatDate()` - 72 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (202 total, 4 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles, canSeeRoles (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (48): profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments, canManage (+40 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+41 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "api.ts"
Cohesion: 0.05
Nodes (52): vue-router, vue-router, RouteMeta, ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken() (+44 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (31): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+23 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (51): adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters, barFilters (+43 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (38): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+30 more)

### Community 12 - "facebook/types.ts"
Cohesion: 0.06
Nodes (44): busy, chosen, daily, emit, monthly, open, props, save() (+36 more)

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
Cohesion: 0.11
Nodes (22): filterFailures(), isRunning(), runSummary(), barFilters, canRun, DEFAULT_FILTERS, failures, FILTER_LABELS (+14 more)

### Community 19 - "errorText"
Cohesion: 0.07
Nodes (35): errorText(), load(), checkNow(), confirmEnd(), confirmRemove(), create(), load(), assign() (+27 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.14
Nodes (19): asked, check, countdown(), current, display, emit, label, open (+11 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "Key"
Cohesion: 0.05
Nodes (62): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+54 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (30): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (45): GoogleAdsTab, model, props, TABS, GOOGLE_ADS_CONNECT_URL, accounts, applying, applySuffix() (+37 more)

### Community 25 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (68): budgetText(), decisions, loadError, page, pages, props, reason(), total (+60 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (43): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+35 more)

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
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "index.ts"
Cohesion: 0.16
Nodes (12): auditText(), fill(), formatAgo(), loaded, loaders, loadLang(), Messages, messages() (+4 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (42): FacebookTab, model, props, TABS, accounts, canConnect, canManage, clientName() (+34 more)

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

### Community 37 - "Field.vue"
Cohesion: 0.05
Nodes (32): busy, current, emit, mismatch, password, password2, ready, short (+24 more)

### Community 38 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (43): applyView(), APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category (+35 more)

### Community 40 - "SendNotificationDialog.vue"
Cohesion: 0.08
Nodes (25): audience, audiences, choices, chosen, emit, icon, iconOf(), link (+17 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.15
Nodes (18): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+10 more)

### Community 45 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

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

### Community 50 - "ClassifySitesDialog.vue"
Cohesion: 0.12
Nodes (23): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 51 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (71): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, FALLBACK, METRIC_COLOR, metricColors() (+63 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "lang"
Cohesion: 0.07
Nodes (26): @vue/test-utils@^2.6.0, @vue/test-utils, lang, client, managerChange, perms, settings, staffOptions (+18 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "DateRangePicker.vue"
Cohesion: 0.07
Nodes (50): dayClass(), emit, focusable, grid, onKey(), props, weekdays, weeks (+42 more)

### Community 61 - "ad-tags.test.ts"
Cohesion: 0.12
Nodes (22): adTagPermission(), blankSettings(), newBlock(), adTagService(), AdTagService, AdTag, AdTagDevice, AdTagDraft (+14 more)

### Community 64 - "CustomThemeDialog.vue"
Cohesion: 0.10
Nodes (20): COLOR_KEYS, previewColors, busy, colors, drafts, draftsOf(), emit, failures (+12 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (42): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+34 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.10
Nodes (24): commentRecipients(), personName(), taskPlace(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus() (+16 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.07
Nodes (35): devDependencies, autoprefixer@^10.6.2, jsdom@^31.0.1, oxlint@^1.94.0, postcss@^8.5.33, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^26.6.6 (+27 more)

### Community 69 - "session.ts"
Cohesion: 0.09
Nodes (32): pinia, ThemeColors, theme, AnimationArea, CompanyRef, FontSize, Lang, Me (+24 more)

### Community 70 - "ReportView.vue"
Cohesion: 0.08
Nodes (33): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, apiMessage(), canManage, catalog (+25 more)

### Community 71 - "FacebookAdForm.vue"
Cohesion: 0.07
Nodes (31): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+23 more)

### Community 72 - "google_ads/rules.ts"
Cohesion: 0.08
Nodes (29): ADS_MAX_DAYS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), campaignsPath(), CHANGE_KEYS (+21 more)

### Community 73 - "hubspot/rules.ts"
Cohesion: 0.10
Nodes (24): activities, ACTIVITY_ICON, emptyText, facts, kinds, linked, props, shownKind (+16 more)

### Community 74 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (18): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+10 more)

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
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "DollarRate.vue"
Cohesion: 0.13
Nodes (16): change, firstDay, label, lastDay, money(), points, quote, trendUp (+8 more)

### Community 81 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (20): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+12 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (25): stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS, filterLabel(), FILTERS (+17 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.15
Nodes (16): valid, Choice, choice, choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (18): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+10 more)

### Community 86 - "GroupView.vue"
Cohesion: 0.08
Nodes (28): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+20 more)

### Community 87 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (22): healthSummary(), share(), AdTagHealth, base, decimal, filled, health, integer (+14 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.08
Nodes (33): busy, canManage, changed, current, load(), monthNames, months, save() (+25 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+29 more)

### Community 90 - "checklists/rules.ts"
Cohesion: 0.14
Nodes (18): title, choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, monthName(), NOTE_MAX (+10 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.08
Nodes (31): defaultSites(), adsLines, adsOpen, busy, choose(), chosen, close(), copyAds() (+23 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "pick"
Cohesion: 0.08
Nodes (26): pick(), metricOptions, options, ruleEnd(), setGoal(), roleName(), roleOptions, busy (+18 more)

### Community 96 - "MyInvoicesView.vue"
Cohesion: 0.04
Nodes (74): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), FiscalData, parseAmount(), dates, monthName() (+66 more)

### Community 97 - "install-checks.test.ts"
Cohesion: 0.15
Nodes (12): findingFix(), findingTitle(), installCheckService(), InstallCheckService, RESOURCE, FindingSeverity, InstallCheck, InstallFinding (+4 more)

### Community 98 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): overrideSummary(), ROW_TONE, checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.10
Nodes (24): goalService, GoalMode, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+16 more)

### Community 100 - "NotificationCenter.vue"
Cohesion: 0.14
Nodes (18): badge, canSend, choose(), composing, internal, items, loading, loadList() (+10 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.05
Nodes (38): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+30 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 103 - "FacebookAccountDialog.vue"
Cohesion: 0.14
Nodes (14): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+6 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.04
Nodes (56): cascadeLadder(), dropPercent(), nearestTier(), percentText(), priceRulePermission(), base, busy, canManage (+48 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (42): periodQuery(), childLevel(), accountId, accountOptions, accounts, allSelected, availableFilters, barFilters (+34 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.06
Nodes (29): barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS, DEFAULT_VIEW (+21 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.07
Nodes (35): dayLabel, dayOptions, dayText(), FunnelRow, funnelRows(), lastDays(), rewardPermission(), share() (+27 more)

### Community 108 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (19): chosen, delegationLabel(), formatDesc(), formatName(), GTAG_BLOCKS, KEY_NAMES, siteSummary(), stepDetail() (+11 more)

### Community 109 - "ClientNetworkView.vue"
Cohesion: 0.04
Nodes (58): latestCall(), ContractSource, ContractStatus, add(), addBusy, addError, addOpen, canAssign (+50 more)

### Community 110 - "events.ts"
Cohesion: 0.11
Nodes (17): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+9 more)

### Community 111 - "reports/types.ts"
Cohesion: 0.08
Nodes (35): Task 3: Web — tipos, serviço e regras do construtor, customs, dimensions, emit, itemClass(), matches(), metrics, props (+27 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "InstallResultDialog.vue"
Cohesion: 0.16
Nodes (15): tn(), description, emit, finished, open, props, runLabel, sections (+7 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (16): templateService, apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError (+8 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (29): editableWidgets(), blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole(), withAudience() (+21 more)

### Community 116 - "reports/rules.ts"
Cohesion: 0.09
Nodes (40): loadDraft(), filterable, layout, AXIS_CHARTS, axisSplit(), BuilderState, canExport(), chartAllowed() (+32 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.10
Nodes (22): activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS (+14 more)

### Community 120 - "navigation.ts"
Cohesion: 0.24
Nodes (9): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, visibleGroups(), activeLabels(), headers() (+1 more)

### Community 121 - "theme.ts"
Cohesion: 0.11
Nodes (12): SCALED, scaleRem(), SavedThemeColors, withBorder(), ANIMATION_AREAS, animations, applyCustomCss(), customColors (+4 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "customTheme.ts"
Cohesion: 0.17
Nodes (29): alphaOf(), channels(), contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder(), failedRules() (+21 more)

### Community 124 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (28): latest, todayIso(), periodPresets(), presets, presets, isLevel(), GoogleAdsTotals, presets (+20 more)

### Community 125 - "vue-sonner"
Cohesion: 0.06
Nodes (38): vue-sonner, toasterTheme, choose(), langs, session, chooseLang(), useNavigation(), logout() (+30 more)

### Community 126 - "formatDate"
Cohesion: 0.11
Nodes (19): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+11 more)

### Community 127 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (14): atLimit, choose(), customs, editing, editor, editorOpen, limit, remove() (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (11): vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source (+3 more)

### Community 130 - "FacebookHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 131 - "InvoicesView.vue"
Cohesion: 0.04
Nodes (83): applyView(), current, applyView(), current, applyView(), current, rows, current (+75 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

### Community 133 - "main.ts"
Cohesion: 0.22
Nodes (8): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, LINES, showBootFailure(), boot(), router

### Community 134 - "DashboardFiltersBar.vue"
Cohesion: 0.18
Nodes (9): dimensions, filters, periods, props, filterPeriod(), withPeriod(), withValue(), FilterDimension (+1 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (37): childLevel(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions, clients (+29 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (50): moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary, base (+42 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (51): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), active, automaticRuleCount, base (+43 more)

### Community 139 - "sites/service.ts"
Cohesion: 0.40
Nodes (8): ClientSiteDetail, NetworkSite, AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 140 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 141 - "pagination.ts"
Cohesion: 0.40
Nodes (4): numbers, PAGE_SIZE, pageCount(), pageNumbers()

### Community 142 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 143 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (72): props, up, compare, period, presets, countryName(), dailySeries(), daysOf() (+64 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.08
Nodes (25): active, emit, kind, kindOptions, name, open, props, save() (+17 more)

### Community 145 - "NetworkAdsTxtCard.vue"
Cohesion: 0.16
Nodes (14): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+6 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.06
Nodes (38): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+30 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (63): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+55 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.09
Nodes (25): assignee, client, clientOptions, create(), description, domain, emit, open (+17 more)

### Community 150 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 151 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 152 - "ApiKeysCard.vue"
Cohesion: 0.05
Nodes (44): copyLine(), copyToken(), busy, canManage, created(), creating, keys, load() (+36 more)

### Community 154 - "t"
Cohesion: 0.03
Nodes (96): copied, open, props, open, t(), availableFilters, base, busy (+88 more)

### Community 155 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, emit, open, props, reason, reasonTouched (+11 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "CurrencyCard.vue"
Cohesion: 0.22
Nodes (8): busy, chosen, currencies, currencyLabel(), missing, options, save(), session

### Community 159 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (30): CompanyStatus, clientService, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption (+22 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "Input.vue"
Cohesion: 0.15
Nodes (10): model, choices, emit, invalid, name, open, props, roleIds (+2 more)

### Community 162 - "sites.test.ts"
Cohesion: 0.33
Nodes (4): rows, approval(), tree(), rows

### Community 163 - "ad_tags/rules.ts"
Cohesion: 0.09
Nodes (32): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+24 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.11
Nodes (18): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+10 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.06
Nodes (34): model, alerts, emit, load(), loadError, markRead(), page, pages (+26 more)

### Community 166 - "notifications/types.ts"
Cohesion: 0.24
Nodes (9): ICON_COMPONENTS, notificationService, AppNotification, NotificationAudience, NotificationIcon, NotificationKind, NotificationSend, NotificationSendInput (+1 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 169 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.05
Nodes (52): dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily, dailyValue (+44 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.29
Nodes (4): ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 173 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 174 - "metricColor"
Cohesion: 0.39
Nodes (9): colorVar(), metricColor(), chart, hourLabel(), boughtColor, chart, offeredColor, gainChart (+1 more)

### Community 175 - "vue"
Cohesion: 0.03
Nodes (69): lucide-vue-next, vue, box, failed, initial, props, first, last (+61 more)

### Community 176 - "@vueuse/core"
Cohesion: 0.13
Nodes (15): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.1, vue@3.5.46 (+7 more)

### Community 177 - "notifications/rules.ts"
Cohesion: 0.32
Nodes (7): field(), MAX_TEXT, MAX_TITLE, noticeText(), noticeTitle(), NOTIFICATION_ICONS, UNREAD_POLL_MS

### Community 179 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 180 - "cn"
Cohesion: 0.09
Nodes (24): reka-ui, pick(), route, router, session, panelItem(), railItem(), model (+16 more)

### Community 181 - "locale"
Cohesion: 0.32
Nodes (11): locale, detail, props, change, props, changeText(), perDayText(), TREND_CLASS (+3 more)

### Community 182 - "AccountStatus.vue"
Cohesion: 0.07
Nodes (31): busy, complete, documentLabel, form, load(), loaded, options, save() (+23 more)

### Community 183 - "api"
Cohesion: 0.17
Nodes (16): api, Query, Items, Page, costService, groupService, contractService, peopleService (+8 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 186 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.19
Nodes (14): checklistOverrideService, checklistService, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride, ChecklistOverrideInput (+6 more)

### Community 188 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (23): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+15 more)

### Community 189 - "hubspot/types.ts"
Cohesion: 0.09
Nodes (27): cards, error, load(), loading, props, cards, error, load() (+19 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "dashboards/rules.ts"
Cohesion: 0.13
Nodes (32): add(), ACCOUNT_SIZE, accountWidget(), Box, CHART_SIZE, clamp(), cleanFilters(), compactLayout() (+24 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 195 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 196 - "rewards/service.ts"
Cohesion: 0.16
Nodes (16): saveFile(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+8 more)

### Community 197 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.14
Nodes (14): alerts, emit, load(), loadError, markRead(), page, pages, props (+6 more)

### Community 198 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 199 - "FacebookBudgetCard.vue"
Cohesion: 0.18
Nodes (12): current, dirty, elsewhere, emit, error, kind, parsed, props (+4 more)

### Community 200 - "hubspot.test.ts"
Cohesion: 0.25
Nodes (5): HubspotCard, HubspotFailure, client, network, site

### Community 201 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 202 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 203 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "dashboards/types.ts"
Cohesion: 0.13
Nodes (24): chosen, create(), emit, name, open, templates, Dashboard, DashboardDefinition (+16 more)

### Community 208 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 209 - "Button.vue"
Cohesion: 0.13
Nodes (10): open, button, classes, Props, props, model, months, open (+2 more)

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `api.ts`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `HubspotView.vue`, `errorText`, `InstallCheckCell.vue`, `Key`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `Field.vue`, `rewards/rules.ts`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `FacebookCreateView.vue`, `GroupsView.vue`, `NetworksView.vue`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `DateRangePicker.vue`, `CustomThemeDialog.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookAdForm.vue`, `hubspot/rules.ts`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `DollarRate.vue`, `ConfigPanel.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `DashboardWidget.vue`, `GroupView.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `checklists/rules.ts`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `pick`, `MyInvoicesView.vue`, `install-checks.test.ts`, `ChecklistView.vue`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `FacebookAccountDialog.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `gam_tools/rules.ts`, `ClientNetworkView.vue`, `reports/types.ts`, `InstallResultDialog.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `navigation.ts`, `GoogleAdsObjectView.vue`, `vue-sonner`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `FacebookHistoryPanel.vue`, `InvoicesView.vue`, `LoadersView.vue`, `DashboardFiltersBar.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `RolesView.vue`, `PerformanceView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `SaveReportDialog.vue`, `ApiKeysCard.vue`, `AdjustmentDialog.vue`, `CurrencyCard.vue`, `AccountManagerCard.vue`, `alerts/rules.ts`, `Input.vue`, `sites.test.ts`, `ad_tags/rules.ts`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `AdTagPreview.vue`, `GoogleAdsAccountDialog.vue`, `AlertDialog.vue`, `metricColor`, `vue`, `notifications/rules.ts`, `SiteDetailView.vue`, `cn`, `locale`, `AccountStatus.vue`, `LoaderPreview.vue`, `ApiKeyDialog.vue`, `ProfileImageCard.vue`, `GoogleAdsAlertsPanel.vue`, `MetricStylePopover.vue`, `FacebookBudgetCard.vue`, `GoogleAdsHistoryPanel.vue`, `GamRunView.vue`, `dashboards/types.ts`, `AdTagInstallDialog.vue`, `Button.vue`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05217391304347826 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `api.ts`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `facebook/types.ts`, `clean-code.mjs`, `HubspotView.vue`, `errorText`, `InstallCheckCell.vue`, `Key`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `Field.vue`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `FacebookCreateView.vue`, `GroupsView.vue`, `NetworksView.vue`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `lang`, `DateRangePicker.vue`, `CustomThemeDialog.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `session.ts`, `ReportView.vue`, `FacebookAdForm.vue`, `hubspot/rules.ts`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `DollarRate.vue`, `ConfigPanel.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `DashboardWidget.vue`, `GroupView.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `pick`, `MyInvoicesView.vue`, `ChecklistView.vue`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `FacebookAccountDialog.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `ClientNetworkView.vue`, `events.ts`, `reports/types.ts`, `InstallResultDialog.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `navigation.ts`, `theme.ts`, `BarChart.vue`, `customTheme.ts`, `GoogleAdsObjectView.vue`, `vue-sonner`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `FacebookHistoryPanel.vue`, `InvoicesView.vue`, `LoadersView.vue`, `main.ts`, `DashboardFiltersBar.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `RolesView.vue`, `PerformanceView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `SaveReportDialog.vue`, `ApiKeysCard.vue`, `t`, `avant-tag`, `AdjustmentDialog.vue`, `CurrencyCard.vue`, `AccountManagerCard.vue`, `Input.vue`, `ad_tags/rules.ts`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `notifications/types.ts`, `AdTagPreview.vue`, `GoogleAdsAccountDialog.vue`, `AlertDialog.vue`, `@vueuse/core`, `SiteDetailView.vue`, `cn`, `locale`, `AccountStatus.vue`, `LoaderPreview.vue`, `ApiKeyDialog.vue`, `DashboardGrid.vue`, `hubspot/types.ts`, `ProfileImageCard.vue`, `drag.ts`, `GoogleAdsAlertsPanel.vue`, `MetricStylePopover.vue`, `FacebookBudgetCard.vue`, `GoogleAdsHistoryPanel.vue`, `GamRunView.vue`, `dashboards/types.ts`, `AdTagInstallDialog.vue`, `Button.vue`?**
  _High betweenness centrality (0.137) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `api.ts`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `HubspotView.vue`, `InstallCheckCell.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `Field.vue`, `rewards/rules.ts`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `FacebookCreateView.vue`, `GroupsView.vue`, `NetworksView.vue`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `PeopleView.vue`, `CustomThemeDialog.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookAdForm.vue`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `DashboardWidget.vue`, `GroupView.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `pick`, `MyInvoicesView.vue`, `ChecklistView.vue`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `FacebookAccountDialog.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `ClientNetworkView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `GoogleAdsObjectView.vue`, `vue-sonner`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `FacebookHistoryPanel.vue`, `InvoicesView.vue`, `LoadersView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `RolesView.vue`, `Review Focus`, `PerformanceView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ApiKeysCard.vue`, `t`, `AdjustmentDialog.vue`, `CurrencyCard.vue`, `AccountManagerCard.vue`, `FacebookAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `AlertDialog.vue`, `vue`, `SiteDetailView.vue`, `cn`, `AccountStatus.vue`, `ApiKeyDialog.vue`, `DashboardGrid.vue`, `hubspot/types.ts`, `ProfileImageCard.vue`, `GoogleAdsAlertsPanel.vue`, `FacebookBudgetCard.vue`, `GoogleAdsHistoryPanel.vue`, `GamRunView.vue`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.055272108843537414 - nodes in this community are weakly interconnected._