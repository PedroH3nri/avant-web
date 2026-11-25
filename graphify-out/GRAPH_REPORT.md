# Graph Report - avant-web  (2026-11-25)

## Corpus Check
- 471 files · ~325,794 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5800 nodes · 15226 edges · 203 communities (199 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 164 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fa050613`
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
- @vueuse/core
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
- InstallCheckCell.vue
- TeamCommissionsView.vue
- compilerOptions
- api.ts
- FacebookJobDialog.vue
- FacebookEditView.vue
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- MyCommissionView.vue
- clients/rules.ts
- ReportChart.vue
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
- GoogleAdsObjectView.vue
- FacebookAdForm.vue
- ReservedNetworksCard.vue
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
- GoogleAdsAlertsPanel.vue
- GoogleAdsHistoryPanel.vue
- rewards/rules.ts
- GoalsView.vue
- rewards/service.ts
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- lucide-vue-next
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- GroupedBarChart.vue
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
- GamRunView.vue
- BarChart.vue
- CustomThemeDialog.vue
- google_ads/rules.ts
- ApiError
- formatDate
- ThemeCard.vue
- ChecklistNotesCard.vue
- vitest
- main.ts
- ClientsResultsView.vue
- LoadersView.vue
- InvoiceServicesView.vue
- vue-router
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- TeamTabs.vue
- errorText
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
- NewDashboardDialog.vue
- AdjustmentDialog.vue
- price_rules/types.ts
- CompanyIcon.vue
- AccountManagerCard.vue
- alerts/rules.ts
- GoogleAdsTabs.vue
- tabs.ts
- AdTagBlockCard.vue
- TaskTimeline.vue
- FacebookRulesCard.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- checklists/rules.ts
- GoogleAdsAccountDialog.vue
- NetworkReviewActions.vue
- vite.embed.config.ts
- AlertDialog.vue
- src_lib_i18n_index_key
- metricColor
- CompanyView.vue
- MonthField.vue
- ChecklistView.vue
- SiteDetailView.vue
- cn
- locale
- FiscalDataCard.vue
- api.ts
- LoaderPreview.vue
- Review Focus
- SaveReportDialog.vue
- checklists/types.ts
- vue
- GoogleAdsPersonDialog.vue
- listTable.ts
- ProfileImageCard.vue
- AddWidgetDialog.vue
- tasks/types.ts
- drag.ts
- PasswordCard.vue
- FacebookBudgetCard.vue
- CurrencyCard.vue
- AlertEventsDialog.vue
- overrides
- 20. CDN dos scripts do site (cdn.groone.com)
- AdTagInstallDialog.vue
- dayText
- priceRulePermission

## God Nodes (most connected - your core abstractions)
1. `t()` - 689 edges
2. `errorText()` - 393 edges
3. `vue` - 219 edges
4. `ApiError` - 150 edges
5. `lucide-vue-next` - 127 edges
6. `vue-sonner` - 103 edges
7. `useSession` - 102 edges
8. `Key` - 75 edges
9. `vitest` - 72 edges
10. `vue-router` - 69 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts

## Import Cycles
- None detected.

## Communities (203 total, 4 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (47): profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments, canManage (+39 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (64): loadDraft(), BuilderState, builderState(), canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart() (+56 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.05
Nodes (48): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+40 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (30): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+22 more)

### Community 7 - "Button.vue"
Cohesion: 0.10
Nodes (21): button, classes, Props, props, safeNext(), busy, email, error (+13 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (34): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+26 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (53): props, seats, companyService, CompanyDetail, CompanyFiscal, busy, cancel(), canEditCompany (+45 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (55): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+47 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (19): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+11 more)

### Community 12 - "facebook/types.ts"
Cohesion: 0.07
Nodes (38): failure, left, load(), loading, model, options, props, SEARCHED (+30 more)

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
Cohesion: 0.12
Nodes (17): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4, reka-ui@^2.11.0, tailwind-merge@^3.7.1 (+9 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.11
Nodes (24): emit, finished, open, props, runLabel, sections, summary, findingFix() (+16 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (22): serverProblems(), submit(), ad, adset, detail, edit, externalId, failure (+14 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (31): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, dirty (+23 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (41): GOOGLE_ADS_CONNECT_URL, accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+33 more)

### Community 25 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (65): budgetText(), decisions, loadError, page, pages, props, reason(), total (+57 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (37): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+29 more)

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
Cohesion: 0.04
Nodes (71): UserRef, FiscalData, busy, complete, documentLabel, emit, form, open (+63 more)

### Community 31 - "index.ts"
Cohesion: 0.13
Nodes (15): auditText(), fill(), formatAgo(), loaded, loaders, loadLang(), Messages, messages() (+7 more)

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
Cohesion: 0.05
Nodes (40): Me, authService, InvitationPreview, LoginResult, busy, email, error, sent (+32 more)

### Community 38 - "AccountStatus.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (39): applyView(), APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category (+31 more)

### Community 40 - "InstallCheckCell.vue"
Cohesion: 0.14
Nodes (19): asked, check, countdown(), current, display, emit, label, open (+11 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (35): toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS, DEFAULT_FILTERS (+27 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "api.ts"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.15
Nodes (18): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+10 more)

### Community 45 - "FacebookEditView.vue"
Cohesion: 0.05
Nodes (65): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+57 more)

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

### Community 50 - "PerformanceView.vue"
Cohesion: 0.07
Nodes (35): compare, period, presets, PERIOD_PRESETS, PeriodValue, sameRange(), utcToday(), load() (+27 more)

### Community 51 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (17): STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError, minus() (+9 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "ReportChart.vue"
Cohesion: 0.08
Nodes (33): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, title, description, empty (+25 more)

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
Cohesion: 0.07
Nodes (25): @vue/test-utils, lang, client, managerChange, perms, settings, staffOptions, team (+17 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "DateRangePicker.vue"
Cohesion: 0.07
Nodes (49): dayClass(), emit, focusable, grid, onKey(), props, weekdays, weeks (+41 more)

### Community 61 - "session.ts"
Cohesion: 0.14
Nodes (25): ThemeColors, AnimationArea, FontSize, Lang, Theme, busy, confirm, load() (+17 more)

### Community 64 - "fontSize.test.ts"
Cohesion: 0.24
Nodes (5): postcss@^8.5.33, postcss, SCALED, scaleRem(), fontSize

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
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.2, jsdom@^31.0.1, oxlint@^1.94.0, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^26.6.6, @types/qrcode@1.5.6 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.07
Nodes (37): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+29 more)

### Community 71 - "FacebookCreateView.vue"
Cohesion: 0.10
Nodes (27): blankAd(), blankAdset(), MAX_ADSETS, account, accounts, adCount, addAd(), addAdset() (+19 more)

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.07
Nodes (32): toggle(), latest, todayIso(), periodPresets(), presets, presets, childLevel(), isLevel() (+24 more)

### Community 73 - "FacebookAdForm.vue"
Cohesion: 0.07
Nodes (31): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+23 more)

### Community 74 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (18): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+10 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.06
Nodes (30): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+22 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (58): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+50 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "ad_tags/rules.ts"
Cohesion: 0.11
Nodes (23): adTagPermission(), adTagsPath(), blankSettings(), newBlock(), adTagService(), AdTagService, AdTag, AdTagDevice (+15 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.06
Nodes (27): model, busy, daily, emit, monthly, onLimit, onLimitOptions, open (+19 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.14
Nodes (17): valid, Choice, choice, choiceLabel(), choices, emit, open, path (+9 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.11
Nodes (22): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+14 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, FilterOption, LIMITS, newField, periods (+5 more)

### Community 86 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.08
Nodes (34): busy, canManage, changed, current, load(), monthNames, months, save() (+26 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.04
Nodes (68): Localized, SiteScope, DashboardTemplate, busy, category, chipClass(), chosen, emit (+60 more)

### Community 90 - "ClientSiteView.vue"
Cohesion: 0.13
Nodes (15): canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route, router (+7 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.08
Nodes (31): defaultSites(), adsLines, adsOpen, busy, choose(), chosen, close(), copyAds() (+23 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.11
Nodes (18): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+10 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "table.ts"
Cohesion: 0.06
Nodes (38): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers() (+30 more)

### Community 96 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.14
Nodes (14): alerts, emit, load(), loadError, markRead(), page, pages, props (+6 more)

### Community 97 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): goalService, GoalMode, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 100 - "rewards/service.ts"
Cohesion: 0.15
Nodes (17): saveFile(), InstallSummary, rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+9 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.05
Nodes (38): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+30 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 103 - "lucide-vue-next"
Cohesion: 0.05
Nodes (40): lucide-vue-next, open, dot, IntegrationKind, add(), addBusy, addError, addOpen (+32 more)

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

### Community 108 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 109 - "Status.vue"
Cohesion: 0.07
Nodes (31): company, error, hasSeats, load(), lost, networks, router, session (+23 more)

### Community 110 - "events.ts"
Cohesion: 0.11
Nodes (17): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+9 more)

### Community 111 - "reports/types.ts"
Cohesion: 0.06
Nodes (48): Task 3: Web — tipos, serviço e regras do construtor, DashboardRun, applyScale(), emit, error, from, gradient(), mode (+40 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.12
Nodes (20): templateService, roleNames(), TemplateRoles, apiMessage(), audience, AUDIENCES, audienceText(), busy (+12 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (36): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+28 more)

### Community 116 - "reports/rules.ts"
Cohesion: 0.10
Nodes (28): emit, missingDates, options, props, setDate(), setMode(), filterable, AXIS_CHARTS (+20 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.09
Nodes (20): open, answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (23): FilterOption, activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+15 more)

### Community 120 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (25): CostKind, clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+17 more)

### Community 121 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.09
Nodes (49): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+41 more)

### Community 124 - "google_ads/rules.ts"
Cohesion: 0.08
Nodes (28): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), campaignsPath(), CHANGE_KEYS (+20 more)

### Community 125 - "ApiError"
Cohesion: 0.05
Nodes (43): vue-sonner, pick(), route, router, session, choose(), langs, session (+35 more)

### Community 126 - "formatDate"
Cohesion: 0.11
Nodes (19): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+11 more)

### Community 127 - "ThemeCard.vue"
Cohesion: 0.07
Nodes (25): toasterTheme, SavedThemeColors, ANIMATION_AREAS, animations, applyCustomCss(), customColors, previewColors, savedCustomColors() (+17 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (11): vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source (+3 more)

### Community 130 - "main.ts"
Cohesion: 0.21
Nodes (9): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, LINES, showBootFailure(), startLang(), boot() (+1 more)

### Community 131 - "ClientsResultsView.vue"
Cohesion: 0.06
Nodes (49): applyView(), current, applyView(), current, applyView(), current, rows, current (+41 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.05
Nodes (50): t(), create(), filterLabel(), filterSiteOptions, seenText(), siteOptions, statusOptions, sortOptions (+42 more)

### Community 133 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 134 - "vue-router"
Cohesion: 0.09
Nodes (10): pinia, vue-router, vue-router, RouteMeta, catalog, me, report, result (+2 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (37): periodQuery(), open(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+29 more)

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

### Community 140 - "errorText"
Cohesion: 0.09
Nodes (32): errorText(), confirmRemove(), load(), save(), alerts, emit, load(), loadError (+24 more)

### Community 141 - "ApiKeysCard.vue"
Cohesion: 0.06
Nodes (33): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+25 more)

### Community 142 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (19): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+11 more)

### Community 143 - "PageViewsView.vue"
Cohesion: 0.05
Nodes (71): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+63 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "NetworkAdsTxtCard.vue"
Cohesion: 0.16
Nodes (14): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+6 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (36): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+28 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (60): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+52 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.09
Nodes (25): assignee, client, clientOptions, create(), description, domain, emit, open (+17 more)

### Community 150 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (25): add(), emit, kind, kinds, metric, metrics, open, props (+17 more)

### Community 151 - "Input.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 152 - "ApiKeysCard.vue"
Cohesion: 0.08
Nodes (30): copied, copyLine(), open, props, copyToken(), copied, copyAll(), download() (+22 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (43): availableFilters, base, busy, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+35 more)

### Community 155 - "NewDashboardDialog.vue"
Cohesion: 0.33
Nodes (6): chosen, create(), emit, name, open, templates

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.14
Nodes (18): amount, amountError, busy, emit, open, props, reason, reasonTouched (+10 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "CompanyIcon.vue"
Cohesion: 0.33
Nodes (4): box, failed, initial, props

### Community 159 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (29): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientOption, ClientProfile, ClientProfileInput (+21 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 161 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 162 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 163 - "AdTagBlockCard.vue"
Cohesion: 0.09
Nodes (31): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+23 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.11
Nodes (18): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+10 more)

### Community 165 - "FacebookRulesCard.vue"
Cohesion: 0.11
Nodes (18): model, load(), budgetHere, dirty, draft, emit, inputOf(), levelKey (+10 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (19): chosen, delegationLabel(), formatDesc(), formatName(), GTAG_BLOCKS, KEY_NAMES, siteSummary(), stepDetail() (+11 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "checklists/rules.ts"
Cohesion: 0.16
Nodes (14): choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), RowState (+6 more)

### Community 169 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.08
Nodes (34): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+26 more)

### Community 170 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.29
Nodes (4): ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.11
Nodes (17): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+9 more)

### Community 173 - "src_lib_i18n_index_key"
Cohesion: 0.24
Nodes (9): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, visibleGroups(), activeLabels(), headers() (+1 more)

### Community 174 - "metricColor"
Cohesion: 0.33
Nodes (9): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), chart, boughtColor, offeredColor (+1 more)

### Community 175 - "CompanyView.vue"
Cohesion: 0.13
Nodes (16): PAGE_WIDTH, canManage, company, companyId, groupPeople(), groups, load(), loadError (+8 more)

### Community 176 - "MonthField.vue"
Cohesion: 0.22
Nodes (5): model, months, open, props, year

### Community 178 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): overrideSummary(), personName(), rowStateLabel(), checking, checklist, checklistId, checkNow(), fail() (+8 more)

### Community 179 - "SiteDetailView.vue"
Cohesion: 0.05
Nodes (62): ClientNetwork, ClientRef, ClientSite, ClientSiteDetail, NetworkSite, SiteNetworkRef, SiteResponsible, categoryOptions (+54 more)

### Community 180 - "cn"
Cohesion: 0.11
Nodes (22): reka-ui, props, up, model, model, cn(), kindClass(), valueClass() (+14 more)

### Community 181 - "locale"
Cohesion: 0.32
Nodes (11): locale, detail, props, change, props, changeText(), perDayText(), TREND_CLASS (+3 more)

### Community 182 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 183 - "api.ts"
Cohesion: 0.12
Nodes (28): api, baseHeaders(), companyChanged(), CSRF_COOKIES, download(), Query, request(), RequestOptions (+20 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 186 - "SaveReportDialog.vue"
Cohesion: 0.12
Nodes (15): Dashboard, DashboardInput, choices, description, emit, invalid, name, open (+7 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.30
Nodes (10): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress, CheckOutcome (+2 more)

### Community 188 - "vue"
Cohesion: 0.14
Nodes (24): vue, drag, emit, grid, ordered, props, { run, failure, loading }, source (+16 more)

### Community 189 - "GoogleAdsPersonDialog.vue"
Cohesion: 0.12
Nodes (18): dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), dailyValue, monthlyValue, busy (+10 more)

### Community 190 - "listTable.ts"
Cohesion: 0.27
Nodes (10): readShown(), useBarFilters(), useLocalBarFilters(), listOrder(), ListTableSetup, readColumns(), useListTable(), apply() (+2 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 195 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 196 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 197 - "FacebookBudgetCard.vue"
Cohesion: 0.18
Nodes (12): current, dirty, elsewhere, emit, error, kind, parsed, props (+4 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 202 - "AlertEventsDialog.vue"
Cohesion: 0.16
Nodes (17): events, load(), loadError, open, page, pages, props, total (+9 more)

### Community 203 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 208 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 210 - "dayText"
Cohesion: 0.40
Nodes (5): dayLabel, dayOptions, dayText(), adUnitOptions, chart

### Community 211 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `LoadersView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `Button.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `StaffView.vue`, `InstallCheckCell.vue`, `FacebookEditView.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `AccountStatus.vue`, `ClientSitesView.vue`, `InstallCheckCell.vue`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `FacebookEditView.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `MyCommissionView.vue`, `clients/rules.ts`, `ReportChart.vue`, `lib/types.ts`, `DateRangePicker.vue`, `session.ts`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookCreateView.vue`, `GoogleAdsObjectView.vue`, `FacebookAdForm.vue`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `GroupView.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClientSiteView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsHistoryPanel.vue`, `rewards/rules.ts`, `GoalsView.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `lucide-vue-next`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `Status.vue`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `GamRunView.vue`, `CustomThemeDialog.vue`, `ApiError`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `ClientsResultsView.vue`, `InvoiceServicesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `TeamTabs.vue`, `errorText`, `ApiKeysCard.vue`, `DashboardWidget.vue`, `PageViewsView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `Input.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `NewDashboardDialog.vue`, `AdjustmentDialog.vue`, `AccountManagerCard.vue`, `alerts/rules.ts`, `GoogleAdsTabs.vue`, `AdTagBlockCard.vue`, `TaskTimeline.vue`, `FacebookRulesCard.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `checklists/rules.ts`, `GoogleAdsAccountDialog.vue`, `NetworkReviewActions.vue`, `AlertDialog.vue`, `src_lib_i18n_index_key`, `metricColor`, `CompanyView.vue`, `MonthField.vue`, `ChecklistView.vue`, `SiteDetailView.vue`, `cn`, `locale`, `FiscalDataCard.vue`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `GoogleAdsPersonDialog.vue`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `PasswordCard.vue`, `FacebookBudgetCard.vue`, `CurrencyCard.vue`, `AlertEventsDialog.vue`, `AdTagInstallDialog.vue`, `dayText`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `Button.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `facebook/types.ts`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `FacebookEditView.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `AccountStatus.vue`, `ClientSitesView.vue`, `InstallCheckCell.vue`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `FacebookEditView.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `MyCommissionView.vue`, `clients/rules.ts`, `ReportChart.vue`, `lib/types.ts`, `vitest`, `DateRangePicker.vue`, `session.ts`, `fontSize.test.ts`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `FacebookCreateView.vue`, `GoogleAdsObjectView.vue`, `FacebookAdForm.vue`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `GroupView.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClientSiteView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsHistoryPanel.vue`, `GoalsView.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `lucide-vue-next`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `GroupedBarChart.vue`, `Status.vue`, `events.ts`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `GamRunView.vue`, `BarChart.vue`, `CustomThemeDialog.vue`, `ApiError`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `main.ts`, `ClientsResultsView.vue`, `LoadersView.vue`, `InvoiceServicesView.vue`, `vue-router`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `TeamTabs.vue`, `errorText`, `ApiKeysCard.vue`, `DashboardWidget.vue`, `PageViewsView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `Input.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `NewDashboardDialog.vue`, `AdjustmentDialog.vue`, `CompanyIcon.vue`, `AccountManagerCard.vue`, `AdTagBlockCard.vue`, `TaskTimeline.vue`, `FacebookRulesCard.vue`, `AdTagPreview.vue`, `GoogleAdsAccountDialog.vue`, `NetworkReviewActions.vue`, `AlertDialog.vue`, `src_lib_i18n_index_key`, `CompanyView.vue`, `MonthField.vue`, `ChecklistView.vue`, `SiteDetailView.vue`, `cn`, `locale`, `FiscalDataCard.vue`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `GoogleAdsPersonDialog.vue`, `listTable.ts`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `drag.ts`, `PasswordCard.vue`, `FacebookBudgetCard.vue`, `CurrencyCard.vue`, `AlertEventsDialog.vue`, `AdTagInstallDialog.vue`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04934687953555878 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `Button.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `facebook/types.ts`, `StaffView.vue`, `FacebookEditView.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookObjectView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `AccountStatus.vue`, `ClientSitesView.vue`, `InstallCheckCell.vue`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `MyCommissionView.vue`, `lib/types.ts`, `session.ts`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookCreateView.vue`, `GoogleAdsObjectView.vue`, `FacebookAdForm.vue`, `ReservedNetworksCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `GroupView.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClientSiteView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `table.ts`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsHistoryPanel.vue`, `rewards/rules.ts`, `GoalsView.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `lucide-vue-next`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `Status.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ClientsResultsView.vue`, `GamRunView.vue`, `CustomThemeDialog.vue`, `ApiError`, `formatDate`, `ThemeCard.vue`, `ChecklistNotesCard.vue`, `ClientsResultsView.vue`, `LoadersView.vue`, `InvoiceServicesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `ApiKeysCard.vue`, `DashboardWidget.vue`, `PageViewsView.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `AdjustmentDialog.vue`, `AccountManagerCard.vue`, `FacebookRulesCard.vue`, `GoogleAdsAccountDialog.vue`, `NetworkReviewActions.vue`, `AlertDialog.vue`, `CompanyView.vue`, `ChecklistView.vue`, `SiteDetailView.vue`, `FiscalDataCard.vue`, `Review Focus`, `vue`, `GoogleAdsPersonDialog.vue`, `ProfileImageCard.vue`, `PasswordCard.vue`, `FacebookBudgetCard.vue`, `CurrencyCard.vue`, `AlertEventsDialog.vue`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.0549645390070922 - nodes in this community are weakly interconnected._