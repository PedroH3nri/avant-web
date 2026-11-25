# Graph Report - avant-web  (2026-11-25)

## Corpus Check
- 480 files · ~330,678 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5888 nodes · 15442 edges · 200 communities (195 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 165 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `14ac4486`
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
- Button.vue
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
- pick
- StaffView.vue
- InstallCheckCell.vue
- steps
- FacebookEditView.vue
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
- InviteView.vue
- AccountStatus.vue
- ClientSitesView.vue
- SendNotificationDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- api.ts
- FacebookJobDialog.vue
- FacebookEditView.vue
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- ClassifySitesDialog.vue
- MyCommissionView.vue
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- vitest
- .oxlintrc.json
- DateRangePicker.vue
- avant-web
- session.ts
- tsconfig.json
- session-start.sh
- fontSize.test.ts
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ReportView.vue
- FacebookCreateView.vue
- FacebookObjectView.vue
- FacebookAdForm.vue
- ReservedNetworksCard.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- DollarRate.vue
- FacebookAccountDialog.vue
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- ConfigPanel.vue
- GroupView.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- ClientSiteView.vue
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- table.ts
- ServiceLineDialog.vue
- ClientNetworksCard.vue
- rewards/rules.ts
- GoalsView.vue
- NotificationCenter.vue
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- ClientNetworkView.vue
- Status.vue
- events.ts
- reports/types.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- reports/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- ClientsResultsView.vue
- ClientDocumentsCard.vue
- BarChart.vue
- CustomThemeDialog.vue
- GoogleAdsObjectView.vue
- vue-sonner
- formatDate
- ThemeCard.vue
- ChecklistNotesCard.vue
- vitest
- contracts/types.ts
- ClientsResultsView.vue
- LoadersView.vue
- InvoiceServicesView.vue
- sidebar-rail.test.ts
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- TeamTabs.vue
- RolesView.vue
- ApiKeysCard.vue
- DashboardWidget.vue
- PageViewsView.vue
- ChecklistItemsView.vue
- NetworkAdsTxtCard.vue
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- AddWidgetDialog.vue
- Input.vue
- ApiKeysCard.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- FacebookCampaignForm.vue
- AdjustmentDialog.vue
- price_rules/types.ts
- invoices/types.ts
- AccountManagerCard.vue
- alerts/rules.ts
- PayeeDialog.vue
- router.ts
- AdTagBlockCard.vue
- TaskTimeline.vue
- FacebookRulesCard.vue
- notifications/types.ts
- AdTagPreview.vue
- checklists/rules.ts
- GoogleAdsAccountDialog.vue
- sites/service.ts
- vite.embed.config.ts
- AlertDialog.vue
- src_lib_i18n_index_key
- metricColor
- CompanyView.vue
- formatDate
- notifications/rules.ts
- ChecklistView.vue
- SiteDetailView.vue
- cn
- locale
- errorText
- api.ts
- LoaderPreview.vue
- Review Focus
- fiscal.ts
- checklists/types.ts
- dashboards/types.ts
- choose
- listTable.ts
- ProfileImageCard.vue
- AddWidgetDialog.vue
- tasks/types.ts
- drag.ts
- Button.vue
- AlertEventsDialog.vue
- 20. CDN dos scripts do site (cdn.groone.com)
- AdTagInstallDialog.vue
- priceRulePermission

## God Nodes (most connected - your core abstractions)
1. `t()` - 698 edges
2. `errorText()` - 399 edges
3. `vue` - 223 edges
4. `ApiError` - 152 edges
5. `lucide-vue-next` - 131 edges
6. `vue-sonner` - 105 edges
7. `useSession` - 104 edges
8. `Key` - 75 edges
9. `vitest` - 73 edges
10. `vue-router` - 70 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ChartType`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts

## Import Cycles
- None detected.

## Communities (200 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles, canSeeRoles (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (53): profileBody(), profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages (+45 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+39 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (34): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+26 more)

### Community 7 - "Button.vue"
Cohesion: 0.11
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (40): changeLines, busy, canTransfer, choice(), duplicate, emit, errors, form (+32 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (53): props, seats, companyService, CompanyDetail, CompanyFiscal, busy, cancel(), canEditCompany (+45 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (54): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+46 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (38): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+30 more)

### Community 12 - "facebook/types.ts"
Cohesion: 0.07
Nodes (40): failure, left, load(), loading, model, options, props, SEARCHED (+32 more)

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

### Community 18 - "pick"
Cohesion: 0.08
Nodes (26): pick(), metricOptions, options, ruleEnd(), setGoal(), roleName(), roleOptions, busy (+18 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (46): tn(), asked, check, countdown(), current, display, emit, label (+38 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (22): serverProblems(), submit(), ad, adset, detail, edit, externalId, failure (+14 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (28): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+20 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (48): Key, GoogleAdsTab, model, props, TABS, byManager(), GOOGLE_ADS_CONNECT_URL, accounts (+40 more)

### Community 25 - "FacebookObjectView.vue"
Cohesion: 0.06
Nodes (55): current, dirty, elsewhere, emit, error, kind, parsed, props (+47 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (41): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+33 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (55): emptyProfile(), adding, barFilters, busy, canceling, cancelInvite(), cancelOpen, canManage (+47 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "index.ts"
Cohesion: 0.07
Nodes (26): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, choose(), langs, session, open (+18 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (43): FacebookTab, model, props, TABS, profileTone(), accounts, canConnect, canManage (+35 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.11
Nodes (23): monthChoices, tiles, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange() (+15 more)

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

### Community 38 - "AccountStatus.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (42): applyView(), APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category (+34 more)

### Community 40 - "SendNotificationDialog.vue"
Cohesion: 0.08
Nodes (25): audience, audiences, choices, chosen, emit, icon, iconOf(), link (+17 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "api.ts"
Cohesion: 0.12
Nodes (24): load(), overview, picker, picking, rows, send(), sending, props (+16 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.15
Nodes (18): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+10 more)

### Community 45 - "FacebookEditView.vue"
Cohesion: 0.07
Nodes (50): auditActions, dict, errors, fallbackError, adset, eventOptions, genderOptions, manual (+42 more)

### Community 46 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "ClassifySitesDialog.vue"
Cohesion: 0.12
Nodes (23): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 51 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (72): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, numbers, formatMetric(), toNumber() (+64 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "vitest"
Cohesion: 0.06
Nodes (27): vitest, @vue/test-utils, lang, client, managerChange, perms, settings, staffOptions (+19 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "DateRangePicker.vue"
Cohesion: 0.06
Nodes (56): emit, focusable, grid, onKey(), props, weekdays, weeks, model (+48 more)

### Community 61 - "session.ts"
Cohesion: 0.09
Nodes (32): pinia, SavedThemeColors, ThemeColors, ANIMATION_AREAS, animations, applyCustomCss(), customColors, previewColors (+24 more)

### Community 64 - "fontSize.test.ts"
Cohesion: 0.38
Nodes (3): SCALED, scaleRem(), fontSize

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.10
Nodes (24): commentRecipients(), personName(), taskPlace(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus() (+16 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.05
Nodes (51): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.1, vue@3.5.46 (+43 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.07
Nodes (37): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+29 more)

### Community 71 - "FacebookCreateView.vue"
Cohesion: 0.10
Nodes (26): blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd(), addAdset(), alertText (+18 more)

### Community 72 - "FacebookObjectView.vue"
Cohesion: 0.08
Nodes (29): latest, todayIso(), periodPresets(), ACCOUNT_QUALITY_URL, ADS_MAX_DAYS, ADS_PRESETS, presets, base (+21 more)

### Community 73 - "FacebookAdForm.vue"
Cohesion: 0.10
Nodes (23): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+15 more)

### Community 74 - "ReservedNetworksCard.vue"
Cohesion: 0.15
Nodes (13): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+5 more)

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
Nodes (72): model, IntegrationKind, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed (+64 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "DollarRate.vue"
Cohesion: 0.13
Nodes (16): change, firstDay, label, lastDay, money(), points, quote, trendUp (+8 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.06
Nodes (32): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+24 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.14
Nodes (17): valid, Choice, choice, choiceLabel(), choices, emit, open, path (+9 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 86 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 87 - "formatDate"
Cohesion: 0.10
Nodes (22): healthSummary(), share(), AdTagHealth, base, decimal, filled, health, integer (+14 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): model, Localized, SiteScope, busy, category, chosen, emit, groups (+28 more)

### Community 90 - "ClientSiteView.vue"
Cohesion: 0.09
Nodes (20): lucide-vue-next, vue-router, vue-router, RouteMeta, canSeeChecklists, canSeePriceRules, load(), loadError (+12 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.05
Nodes (71): chosen, defaultSites(), delegationLabel(), finishedSteps(), formatDesc(), formatName(), GTAG_BLOCKS, KEY_NAMES (+63 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "table.ts"
Cohesion: 0.04
Nodes (58): model, td, th, alerts, emit, load(), loadError, markRead() (+50 more)

### Community 96 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (20): amount, amountError, busy, chosen, description, emit, open, options (+12 more)

### Community 97 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (19): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 100 - "NotificationCenter.vue"
Cohesion: 0.14
Nodes (18): badge, canSend, choose(), composing, internal, items, loading, loadList() (+10 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.05
Nodes (39): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+31 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (53): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+45 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (39): accountId, accountOptions, accounts, allSelected, availableFilters, barFilters, base, canManage (+31 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.06
Nodes (30): latestCall(), barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "ClientNetworkView.vue"
Cohesion: 0.12
Nodes (16): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+8 more)

### Community 109 - "Status.vue"
Cohesion: 0.15
Nodes (15): company, error, hasSeats, load(), lost, networks, router, session (+7 more)

### Community 110 - "events.ts"
Cohesion: 0.11
Nodes (17): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+9 more)

### Community 111 - "reports/types.ts"
Cohesion: 0.05
Nodes (46): Task 3: Web — tipos, serviço e regras do construtor, applyScale(), emit, error, from, gradient(), mode, MODES (+38 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.04
Nodes (62): t(), columnLabel(), guideSteps, installOptions, seenText(), termOptions, columnLabel(), filterLabel() (+54 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (18): open, templateService, apiMessage(), audience, AUDIENCES, busy, counts, load() (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (32): editableWidgets(), blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole(), withAudience() (+24 more)

### Community 116 - "reports/rules.ts"
Cohesion: 0.07
Nodes (46): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), filterable (+38 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.07
Nodes (36): saveFile(), InstallSummary, answer, answerOptions, busy, columns, confirmRemove(), exportLeads() (+28 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.07
Nodes (27): first, last, page, props, FilterOption, activeOptions, base, COLUMN_LABELS (+19 more)

### Community 120 - "ClientsResultsView.vue"
Cohesion: 0.08
Nodes (26): CostKind, clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+18 more)

### Community 121 - "ClientDocumentsCard.vue"
Cohesion: 0.20
Nodes (14): fetchFile(), download(), approve(), busy, downloadFile(), emit, fail(), load() (+6 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.08
Nodes (50): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+42 more)

### Community 124 - "GoogleAdsObjectView.vue"
Cohesion: 0.04
Nodes (78): dot, PERIODS, busy, chosen, daily, emit, monthly, open (+70 more)

### Community 125 - "vue-sonner"
Cohesion: 0.06
Nodes (34): vue-sonner, toasterTheme, FONT_SIZES, shownTheme(), enabled, session, toggle(), choose() (+26 more)

### Community 126 - "formatDate"
Cohesion: 0.11
Nodes (18): canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups, load() (+10 more)

### Community 127 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (14): atLimit, choose(), customs, editing, editor, editorOpen, limit, remove() (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.29
Nodes (9): COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "contracts/types.ts"
Cohesion: 0.19
Nodes (12): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+4 more)

### Community 131 - "ClientsResultsView.vue"
Cohesion: 0.05
Nodes (50): applyView(), current, applyView(), current, applyView(), current, rows, current (+42 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.07
Nodes (31): copied, open, props, base, COLUMN_LABELS, columnLabel(), columns, companies (+23 more)

### Community 133 - "InvoiceServicesView.vue"
Cohesion: 0.11
Nodes (18): PAGE_WIDTH, busy, canManage, description, editing, editingOpen, load(), loadError (+10 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (35): accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions, clients, columns (+27 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (55): hourLabel(), hourPoints(), moneyText(), tierOptions(), chart, ladderText(), maxOptions, minOptions (+47 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 140 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 141 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 142 - "DashboardWidget.vue"
Cohesion: 0.07
Nodes (25): ApiError, body, chartHeight, draft, draftKey, emit, failure, goal (+17 more)

### Community 143 - "PageViewsView.vue"
Cohesion: 0.04
Nodes (74): props, up, compare, period, presets, change(), countryName(), dailySeries() (+66 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.09
Nodes (24): active, emit, kind, kindOptions, name, open, props, save() (+16 more)

### Community 145 - "NetworkAdsTxtCard.vue"
Cohesion: 0.29
Nodes (6): gamToolService, copy(), failure, lines, load(), props

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (36): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+28 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (62): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+54 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.09
Nodes (25): assignee, client, clientOptions, create(), description, domain, emit, open (+17 more)

### Community 150 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (24): add(), emit, kind, kinds, metric, metrics, open, props (+16 more)

### Community 151 - "Input.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 152 - "ApiKeysCard.vue"
Cohesion: 0.06
Nodes (35): copyLine(), busy, catalog, chosen, copied, copyToken(), create(), DAYS (+27 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (45): availableFilters, base, busy, COLUMN_LABELS, columns, companies, companyOptions, create() (+37 more)

### Community 155 - "FacebookCampaignForm.vue"
Cohesion: 0.18
Nodes (14): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+6 more)

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 159 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (26): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+18 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 162 - "router.ts"
Cohesion: 0.08
Nodes (22): csrfToken(), readCookie(), setCompanyChangedHandler(), setTabCompany(), setUnauthorizedHandler(), announceCompany(), CompanyMessage, onCompanyAnnounced() (+14 more)

### Community 163 - "AdTagBlockCard.vue"
Cohesion: 0.06
Nodes (54): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+46 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.11
Nodes (18): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+10 more)

### Community 165 - "FacebookRulesCard.vue"
Cohesion: 0.14
Nodes (15): budgetHere, dirty, draft, emit, inputOf(), levelKey, load(), loadError (+7 more)

### Community 166 - "notifications/types.ts"
Cohesion: 0.24
Nodes (9): ICON_COMPONENTS, notificationService, AppNotification, NotificationAudience, NotificationIcon, NotificationKind, NotificationSend, NotificationSendInput (+1 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (17): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+9 more)

### Community 168 - "checklists/rules.ts"
Cohesion: 0.19
Nodes (12): choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), RowState (+4 more)

### Community 169 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.09
Nodes (24): model, dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily (+16 more)

### Community 170 - "sites/service.ts"
Cohesion: 0.47
Nodes (7): ClientSiteDetail, AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.29
Nodes (4): ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.11
Nodes (17): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+9 more)

### Community 173 - "src_lib_i18n_index_key"
Cohesion: 0.20
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 174 - "metricColor"
Cohesion: 0.22
Nodes (14): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+6 more)

### Community 175 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 176 - "formatDate"
Cohesion: 0.32
Nodes (7): formatDate(), dates, monthName(), payee, PAYER, props, InvoiceItem

### Community 177 - "notifications/rules.ts"
Cohesion: 0.32
Nodes (7): field(), MAX_TEXT, MAX_TITLE, noticeText(), noticeTitle(), NOTIFICATION_ICONS, UNREAD_POLL_MS

### Community 178 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): overrideSummary(), rowStateLabel(), checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 179 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 180 - "cn"
Cohesion: 0.11
Nodes (24): reka-ui, panelItem(), dayClass(), open, model, cn(), kindClass(), valueClass() (+16 more)

### Community 181 - "locale"
Cohesion: 0.15
Nodes (22): locale, ContractSource, ContractStatus, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, NetworkContract (+14 more)

### Community 182 - "errorText"
Cohesion: 0.07
Nodes (34): pick(), route, router, session, errorText(), busy, confirm, load() (+26 more)

### Community 183 - "api.ts"
Cohesion: 0.12
Nodes (28): api, baseHeaders(), companyChanged(), CSRF_COOKIES, download(), Query, request(), RequestOptions (+20 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 186 - "fiscal.ts"
Cohesion: 0.67
Nodes (4): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions()

### Community 187 - "checklists/types.ts"
Cohesion: 0.19
Nodes (14): checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride, ChecklistOverrideInput (+6 more)

### Community 188 - "dashboards/types.ts"
Cohesion: 0.10
Nodes (35): widgetFailure(), chosen, create(), emit, name, open, templates, emptyRun() (+27 more)

### Community 189 - "choose"
Cohesion: 0.67
Nodes (3): applyView(), barFilters, choose()

### Community 190 - "listTable.ts"
Cohesion: 0.17
Nodes (15): vue, box, failed, initial, props, readShown(), useBarFilters(), useLocalBarFilters() (+7 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.07
Nodes (45): dimensions, filters, periods, props, drag, emit, grid, ordered (+37 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 195 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 200 - "Button.vue"
Cohesion: 0.08
Nodes (19): button, classes, Props, props, busy, chosen, currencies, currencyLabel() (+11 more)

### Community 202 - "AlertEventsDialog.vue"
Cohesion: 0.17
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 208 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 211 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `RewardsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `Button.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `pick`, `StaffView.vue`, `InstallCheckCell.vue`, `FacebookEditView.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `AccountStatus.vue`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `FacebookEditView.vue`, `GroupsView.vue`, `NetworksView.vue`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `DateRangePicker.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookCreateView.vue`, `FacebookObjectView.vue`, `FacebookAdForm.vue`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `DollarRate.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `GroupView.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClientSiteView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `ServiceLineDialog.vue`, `ClientNetworksCard.vue`, `rewards/rules.ts`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `ClientNetworkView.vue`, `Status.vue`, `reports/types.ts`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `ClientDocumentsCard.vue`, `CustomThemeDialog.vue`, `GoogleAdsObjectView.vue`, `vue-sonner`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `contracts/types.ts`, `ClientsResultsView.vue`, `LoadersView.vue`, `InvoiceServicesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `TeamTabs.vue`, `RolesView.vue`, `ApiKeysCard.vue`, `DashboardWidget.vue`, `PageViewsView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `Input.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `FacebookCampaignForm.vue`, `AdjustmentDialog.vue`, `AccountManagerCard.vue`, `alerts/rules.ts`, `PayeeDialog.vue`, `router.ts`, `AdTagBlockCard.vue`, `TaskTimeline.vue`, `FacebookRulesCard.vue`, `AdTagPreview.vue`, `checklists/rules.ts`, `GoogleAdsAccountDialog.vue`, `AlertDialog.vue`, `src_lib_i18n_index_key`, `metricColor`, `CompanyView.vue`, `formatDate`, `notifications/rules.ts`, `ChecklistView.vue`, `SiteDetailView.vue`, `cn`, `locale`, `errorText`, `LoaderPreview.vue`, `dashboards/types.ts`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `Button.vue`, `AlertEventsDialog.vue`, `AdTagInstallDialog.vue`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05217391304347826 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `listTable.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `Button.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `facebook/types.ts`, `clean-code.mjs`, `pick`, `StaffView.vue`, `InstallCheckCell.vue`, `FacebookEditView.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `AccountStatus.vue`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `FacebookEditView.vue`, `GroupsView.vue`, `NetworksView.vue`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `vitest`, `DateRangePicker.vue`, `session.ts`, `fontSize.test.ts`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `FacebookCreateView.vue`, `FacebookObjectView.vue`, `FacebookAdForm.vue`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `DollarRate.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `GroupView.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClientSiteView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `ServiceLineDialog.vue`, `ClientNetworksCard.vue`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `ClientNetworkView.vue`, `Status.vue`, `events.ts`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `ClientDocumentsCard.vue`, `BarChart.vue`, `CustomThemeDialog.vue`, `GoogleAdsObjectView.vue`, `vue-sonner`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `ClientsResultsView.vue`, `LoadersView.vue`, `InvoiceServicesView.vue`, `sidebar-rail.test.ts`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `TeamTabs.vue`, `RolesView.vue`, `ApiKeysCard.vue`, `DashboardWidget.vue`, `PageViewsView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `Input.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `FacebookCampaignForm.vue`, `AdjustmentDialog.vue`, `AccountManagerCard.vue`, `PayeeDialog.vue`, `router.ts`, `AdTagBlockCard.vue`, `TaskTimeline.vue`, `FacebookRulesCard.vue`, `notifications/types.ts`, `AdTagPreview.vue`, `GoogleAdsAccountDialog.vue`, `AlertDialog.vue`, `src_lib_i18n_index_key`, `CompanyView.vue`, `formatDate`, `ChecklistView.vue`, `SiteDetailView.vue`, `cn`, `locale`, `errorText`, `LoaderPreview.vue`, `dashboards/types.ts`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `drag.ts`, `Button.vue`, `AlertEventsDialog.vue`, `AdTagInstallDialog.vue`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `Button.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `pick`, `StaffView.vue`, `InstallCheckCell.vue`, `FacebookEditView.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `AccountStatus.vue`, `ClientSitesView.vue`, `SendNotificationDialog.vue`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `FacebookEditView.vue`, `GroupsView.vue`, `NetworksView.vue`, `ClassifySitesDialog.vue`, `MyCommissionView.vue`, `lib/types.ts`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookCreateView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `GroupView.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClientSiteView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `table.ts`, `ServiceLineDialog.vue`, `ClientNetworksCard.vue`, `rewards/rules.ts`, `GoalsView.vue`, `NotificationCenter.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `ClientNetworkView.vue`, `Status.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `ClientDocumentsCard.vue`, `CustomThemeDialog.vue`, `GoogleAdsObjectView.vue`, `vue-sonner`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `ClientsResultsView.vue`, `LoadersView.vue`, `InvoiceServicesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `RolesView.vue`, `ApiKeysCard.vue`, `DashboardWidget.vue`, `PageViewsView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `AdjustmentDialog.vue`, `AccountManagerCard.vue`, `PayeeDialog.vue`, `router.ts`, `FacebookRulesCard.vue`, `GoogleAdsAccountDialog.vue`, `AlertDialog.vue`, `CompanyView.vue`, `ChecklistView.vue`, `SiteDetailView.vue`, `Review Focus`, `dashboards/types.ts`, `ProfileImageCard.vue`, `Button.vue`, `AlertEventsDialog.vue`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05101327742837177 - nodes in this community are weakly interconnected._