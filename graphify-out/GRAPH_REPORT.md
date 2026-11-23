# Graph Report - avant-web  (2026-11-23)

## Corpus Check
- 425 files · ~293,306 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5221 nodes · 13621 edges · 203 communities (198 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 155 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `39cc59e5`
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
- vue-sonner
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- @vueuse/core
- StaffView.vue
- draft-rules.ts
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
- reports/types.ts
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- PerformanceView.vue
- GroupsView.vue
- CompanyView.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- FacebookJobDialog.vue
- reports/rules.ts
- vue-router
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- facebook/types.ts
- ApiKeyDialog.vue
- AccountManagerCard.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- views/rules.ts
- .oxlintrc.json
- GoogleCard.vue
- avant-web
- AccountManagerCard.vue
- tsconfig.json
- session-start.sh
- errorText
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ReportView.vue
- InviteView.vue
- GoogleAdsPersonDialog.vue
- AccountManagerCard.vue
- cn
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- Input.vue
- ChecklistsView.vue
- MfaCard.vue
- table.ts
- vue
- AddWidgetDialog.vue
- AdTagMetricsView.vue
- locale
- RoleDialog.vue
- locale
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- FacebookHistoryPanel.vue
- ClientNetworksCard.vue
- MyCommissionView.vue
- rewards/rules.ts
- ApiKeysCard.vue
- FacebookEditView.vue
- ConfigPanel.vue
- vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- vue
- RewardMetricsView.vue
- errorText
- api.ts
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- ClientNetworksView.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- RolesView.vue
- GroupedBarChart.vue
- checklists/rules.ts
- rewards/service.ts
- dashboards/types.ts
- RevenueStatusBadge.vue
- clients/service.ts
- InvoiceServicesView.vue
- GroupedBarChart.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- RolesView.vue
- BarChart.vue
- NewGroupDialog.vue
- ad-tags.test.ts
- DashboardWidget.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- ReportThumb.vue
- FacebookObjectView.vue
- ChecklistView.vue
- GoogleAdsObjectView.vue
- google_ads/types.ts
- ChecklistItemDialog.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- AdTagInstallDialog.vue
- NewTaskDialog.vue
- DataTable.vue
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- errorText
- ClientsResultsView.vue
- price_rules/types.ts
- DataTable.vue
- tabs.ts
- alerts/rules.ts
- GoogleAdsAlertsPanel.vue
- useSession
- PasswordCard.vue
- LoadersView.vue
- ad-tags.test.ts
- gam_tools/rules.ts
- AdTagPreview.vue
- tasks/rules.ts
- report-view-rules.test.ts
- PageHeader.vue
- TeamTabs.vue
- AlertDialog.vue
- FacebookCampaignForm.vue
- PageBody.vue
- report-view.test.ts
- SaveViewDialog.vue
- applyView
- loaders/rules.ts
- loaders.test.ts
- overrides
- vite.embed.config.ts
- google_ads/rules.ts
- RolesPanel.vue
- LoaderPreview.vue
- results/types.ts
- DashboardGrid.vue
- ChecklistItemsView.vue
- GamRunView.vue
- GoogleAdsHistoryPanel.vue
- PayeeDialog.vue
- ClassifySitesDialog.vue
- FacebookBudgetCard.vue
- FiscalDataCard.vue
- tasks/types.ts
- NetworkReviewActions.vue
- GoogleAdsPersonDialog.vue
- main.ts
- drag.ts
- Review Focus
- FunnelChart.vue
- FacebookTabs.vue
- formatDate

## God Nodes (most connected - your core abstractions)
1. `t()` - 592 edges
2. `errorText()` - 370 edges
3. `vue` - 194 edges
4. `ApiError` - 138 edges
5. `lucide-vue-next` - 112 edges
6. `vue-sonner` - 97 edges
7. `useSession` - 96 edges
8. `vue-router` - 66 edges
9. `td` - 65 edges
10. `th` - 65 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedReport`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (203 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+36 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (45): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (48): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+40 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.06
Nodes (39): pick(), DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites (+31 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (30): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+22 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (30): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+22 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (37): busy, canTransfer, duplicate, emit, errors, form, open, props (+29 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (20): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+12 more)

### Community 12 - "vue-sonner"
Cohesion: 0.11
Nodes (24): vue-sonner, toasterTheme, choose(), langs, session, chooseLang(), Accent, accentCss() (+16 more)

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
Cohesion: 0.13
Nodes (15): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+7 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (30): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+22 more)

### Community 20 - "draft-rules.ts"
Cohesion: 0.05
Nodes (66): auditActions, dict, errors, fallbackError, ad, blankCard(), buttonOptions, format (+58 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (16): amount, amountError, busy, chosen, description, emit, open, options (+8 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (46): GoogleAdsTab, model, props, TABS, campaignsPath(), accounts, applying, applySuffix() (+38 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.07
Nodes (34): approval(), tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch (+26 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (47): options, t(), options, LIMITS, periods, period, description, adUnitNames() (+39 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (54): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+46 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "reports/types.ts"
Cohesion: 0.07
Nodes (43): Task 3: Web — tipos, serviço e regras do construtor, Lang, choices, description, emit, invalid, name, open (+35 more)

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

### Community 37 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (56): props, up, change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems() (+48 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.08
Nodes (31): Localized, SiteScope, freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus (+23 more)

### Community 39 - "CompanyView.vue"
Cohesion: 0.06
Nodes (42): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+34 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (28): adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail, detailOpen (+20 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+32 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.14
Nodes (19): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+11 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.08
Nodes (41): Task 4: Web — cores das séries e gráficos do construtor, loadDraft(), emit, missingDates, props, setDate(), setMode(), filterable (+33 more)

### Community 46 - "vue-router"
Cohesion: 0.05
Nodes (34): ApiError, safeNext(), busy, email, error, sent, submit(), busy (+26 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "facebook/types.ts"
Cohesion: 0.07
Nodes (49): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), CHANGE_KEYS, changeText(), DECISION_TONES, facebookPath() (+41 more)

### Community 51 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (28): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+20 more)

### Community 52 - "AccountManagerCard.vue"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "toNumber"
Cohesion: 0.07
Nodes (59): metricColors(), formatMetric(), toNumber(), metricText(), valueText(), money(), yearTotal(), money() (+51 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "views/rules.ts"
Cohesion: 0.20
Nodes (19): applyView(), current, sortOptions, applyView(), current, current, applyView(), current (+11 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "GoogleCard.vue"
Cohesion: 0.09
Nodes (16): box, failed, initial, props, pick(), route, router, session (+8 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (22): tn(), profileBody(), busy, canChange, changeLines, emit, manager, managerId (+14 more)

### Community 65 - "errorText"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

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
Nodes (37): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+29 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "GoogleAdsPersonDialog.vue"
Cohesion: 0.07
Nodes (32): model, busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit (+24 more)

### Community 73 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (28): months, months, monthOptions(), GoalMode, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals (+20 more)

### Community 74 - "cn"
Cohesion: 0.15
Nodes (15): reka-ui, panelItem(), railItem(), cn(), kindClass(), tab(), choice(), valueClass() (+7 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (53): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+45 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (68): model, chosenDay(), settingsProblem(), toPayload(), absentUnits, armed, base, blocking (+60 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.15
Nodes (13): vitest, auditText(), fill(), formatAgo(), loaded, loaders, loadLang(), Messages (+5 more)

### Community 81 - "Input.vue"
Cohesion: 0.15
Nodes (12): model, dot, companies, companiesCall, firstPage(), load(), loadError, page (+4 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 84 - "table.ts"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "vue"
Cohesion: 0.11
Nodes (15): pinia, AccentId, CompanyRef, Me, Theme, accountService, authService, InvitationPreview (+7 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (24): add(), emit, kind, kinds, metric, metrics, open, props (+16 more)

### Community 87 - "AdTagMetricsView.vue"
Cohesion: 0.11
Nodes (21): adTagsPath(), healthSummary(), share(), base, decimal, filled, health, integer (+13 more)

### Community 88 - "locale"
Cohesion: 0.08
Nodes (33): locale, busy, canManage, changed, current, load(), monthNames, months (+25 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (27): busy, category, chipClass(), chosen, emit, groups, name, open (+19 more)

### Community 90 - "locale"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

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

### Community 95 - "FacebookHistoryPanel.vue"
Cohesion: 0.18
Nodes (11): changes, load(), loadError, origin, originOptions, page, pages, props (+3 more)

### Community 96 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 97 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): STATUS_TONE, commissionService, CommissionEvent, CommissionMonth, CommissionRule, CommissionRuleInput, MyCommissions, PersonMonth (+10 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (30): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+22 more)

### Community 99 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (38): busy, canManage, created(), creating, keys, load(), loadError, page (+30 more)

### Community 100 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (17): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, loadError, month, page, pages (+9 more)

### Community 101 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (20): compare, period, selected, lang, Key, PERIOD_PRESETS, addFilter(), addTyped() (+12 more)

### Community 102 - "vue"
Cohesion: 0.17
Nodes (20): vue, drag, emit, grid, props, { run, failure, loading }, source, stored (+12 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (52): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+44 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (39): vue-router, vue-router, RouteMeta, childLevel(), periodRange(), accountId, accountOptions, accounts (+31 more)

### Community 106 - "vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "errorText"
Cohesion: 0.04
Nodes (53): lucide-vue-next, button, classes, Props, props, model, alerts, emit (+45 more)

### Community 109 - "api.ts"
Cohesion: 0.11
Nodes (30): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+22 more)

### Community 110 - "events.ts"
Cohesion: 0.11
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (36): dimensions, filters, periods, props, ordered, ACCOUNT_SIZE, Box, CHART_SIZE (+28 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.08
Nodes (23): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+15 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+22 more)

### Community 116 - "ClientNetworksView.vue"
Cohesion: 0.11
Nodes (21): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService (+13 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "RolesView.vue"
Cohesion: 0.12
Nodes (16): model, busy, daily, emit, monthly, onLimit, onLimitOptions, open (+8 more)

### Community 120 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.21
Nodes (11): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, personName(), progressPercent(), RowState, rowState() (+3 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.16
Nodes (16): saveFile(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+8 more)

### Community 123 - "dashboards/types.ts"
Cohesion: 0.17
Nodes (17): chosen, create(), emit, name, open, templates, Dashboard, DashboardFilters (+9 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.17
Nodes (17): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, McmCandidate, Network, NetworkStatus, NetworkSummary (+9 more)

### Community 125 - "clients/service.ts"
Cohesion: 0.15
Nodes (17): CompanyStatus, AuditEntry, Client, ClientDetail, ClientNote, ClientOption, ManagerChange, NotePerson (+9 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.11
Nodes (16): open, open, busy, canManage, description, editing, editingOpen, loadError (+8 more)

### Community 127 - "GroupedBarChart.vue"
Cohesion: 0.22
Nodes (12): amount, amountError, busy, emit, open, props, reason, reasonTouched (+4 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+15 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "NewGroupDialog.vue"
Cohesion: 0.10
Nodes (19): broken, hue, initials, props, busy, create(), description, duplicate (+11 more)

### Community 133 - "ad-tags.test.ts"
Cohesion: 0.14
Nodes (19): blankSettings(), newBlock(), adTagService(), AdTagService, AdTag, AdTagDevice, AdTagDraft, AdTagEdge (+11 more)

### Community 134 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (20): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+12 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (30): childLevel(), objectPath(), accountId, accountOptions, accounts, clientOptions, clients, columns (+22 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "ReportThumb.vue"
Cohesion: 0.21
Nodes (15): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), dayLabel, dayOptions, chart, hourLabel() (+7 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.06
Nodes (43): budgetText(), decisions, load(), loadError, page, pages, props, reason() (+35 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "GoogleAdsObjectView.vue"
Cohesion: 0.10
Nodes (22): PERIODS, isLevel(), base, children, currency, days, detail, externalId (+14 more)

### Community 143 - "google_ads/types.ts"
Cohesion: 0.14
Nodes (19): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsAlertSetting, GoogleAdsChangeOrigin, GoogleAdsKeyword (+11 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (35): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+27 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (33): formProblems(), previewDomain(), previewLoader(), withTemplate(), base, busy, clientOptions, clients (+25 more)

### Community 148 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.10
Nodes (20): assignee, client, clientOptions, create(), description, domain, emit, open (+12 more)

### Community 150 - "DataTable.vue"
Cohesion: 0.15
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.10
Nodes (30): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+22 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (34): adTagPermission(), tagStatus(), canManage, status, base, busy, canManage, columns (+26 more)

### Community 155 - "errorText"
Cohesion: 0.14
Nodes (20): errorText(), choose(), choose(), duplicate(), load(), loadStart(), openDetail(), saveStart() (+12 more)

### Community 156 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, loadError, money(), month (+8 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "DataTable.vue"
Cohesion: 0.22
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 159 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 162 - "useSession"
Cohesion: 0.20
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 163 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "ad-tags.test.ts"
Cohesion: 0.27
Nodes (13): UserRef, FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+5 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.10
Nodes (19): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+11 more)

### Community 168 - "tasks/rules.ts"
Cohesion: 0.12
Nodes (17): COMMENT_MAX, COMMENT_MIN, eventText(), PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, statusLabel() (+9 more)

### Community 169 - "report-view-rules.test.ts"
Cohesion: 0.15
Nodes (16): pageCount(), pageSlice(), shownRows, NO_COMPARISON, presetRange(), previousRange(), sameRange(), shiftDay() (+8 more)

### Community 170 - "PageHeader.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), priceRuleService(), base, columns, integer, load(), loadError, page (+8 more)

### Community 171 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 173 - "FacebookCampaignForm.vue"
Cohesion: 0.15
Nodes (16): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+8 more)

### Community 174 - "PageBody.vue"
Cohesion: 0.07
Nodes (27): props, seats, companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone (+19 more)

### Community 175 - "report-view.test.ts"
Cohesion: 0.16
Nodes (9): @vue/test-utils, catalog, me, report, result, service, chooseOption(), FEW (+1 more)

### Community 176 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 177 - "applyView"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 178 - "loaders/rules.ts"
Cohesion: 0.14
Nodes (15): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, inputOf(), LIMITS, MAX_SECONDS (+7 more)

### Community 179 - "loaders.test.ts"
Cohesion: 0.22
Nodes (11): loadersPath(), PreviewLoader, loaderService(), LoaderService, Loader, LoaderAdblock, LoaderInput, LoaderOption (+3 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (23): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+15 more)

### Community 183 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "results/types.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 186 - "DashboardGrid.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.10
Nodes (23): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+15 more)

### Community 188 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 189 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.11
Nodes (17): td, th, changes, load(), loadError, origin, originOptions, page (+9 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.12
Nodes (13): busy, complete, documentLabel, emit, form, open, options, props (+5 more)

### Community 191 - "ClassifySitesDialog.vue"
Cohesion: 0.12
Nodes (23): loadExtras(), category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 192 - "FacebookBudgetCard.vue"
Cohesion: 0.18
Nodes (12): current, dirty, elsewhere, emit, error, kind, parsed, props (+4 more)

### Community 193 - "FiscalDataCard.vue"
Cohesion: 0.11
Nodes (22): busy, complete, documentLabel, form, load(), loaded, options, save() (+14 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "NetworkReviewActions.vue"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 196 - "GoogleAdsPersonDialog.vue"
Cohesion: 0.18
Nodes (10): busy, chosen, daily, emit, monthly, open, props, save() (+2 more)

### Community 197 - "main.ts"
Cohesion: 0.22
Nodes (8): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, LINES, showBootFailure(), boot(), router

### Community 198 - "drag.ts"
Cohesion: 0.42
Nodes (9): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop() (+1 more)

### Community 199 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 200 - "FunnelChart.vue"
Cohesion: 0.33
Nodes (3): first, FunnelStep, props

### Community 201 - "FacebookTabs.vue"
Cohesion: 0.33
Nodes (4): FacebookTab, model, props, TABS

### Community 202 - "formatDate"
Cohesion: 0.50
Nodes (4): formatDate(), tiles, seenText(), previewDay

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `RewardEditView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `vue-sonner`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `vue-router`, `NetworksView.vue`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `views/rules.ts`, `GoogleCard.vue`, `AccountManagerCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `cn`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `Input.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `AddWidgetDialog.vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookHistoryPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `ConfigPanel.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `errorText`, `api.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ClientNetworksView.vue`, `RewardLeadsCard.vue`, `RolesView.vue`, `checklists/rules.ts`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `NewGroupDialog.vue`, `DashboardWidget.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `ReportThumb.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `NewTaskDialog.vue`, `DataTable.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `errorText`, `ClientsResultsView.vue`, `DataTable.vue`, `alerts/rules.ts`, `GoogleAdsAlertsPanel.vue`, `useSession`, `PasswordCard.vue`, `LoadersView.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `tasks/rules.ts`, `PageHeader.vue`, `TeamTabs.vue`, `AlertDialog.vue`, `FacebookCampaignForm.vue`, `PageBody.vue`, `SaveViewDialog.vue`, `applyView`, `loaders/rules.ts`, `RolesPanel.vue`, `LoaderPreview.vue`, `DashboardGrid.vue`, `ChecklistItemsView.vue`, `GamRunView.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FacebookBudgetCard.vue`, `FiscalDataCard.vue`, `GoogleAdsPersonDialog.vue`, `FacebookTabs.vue`, `formatDate`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04875886524822695 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `vue-sonner`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `vue-router`, `NetworksView.vue`, `ApiKeyDialog.vue`, `PeopleView.vue`, `GoogleCard.vue`, `AccountManagerCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `Input.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `FacebookHistoryPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `errorText`, `api.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ClientNetworksView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `RolesView.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `NewGroupDialog.vue`, `DashboardWidget.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `DataTable.vue`, `AdTagsView.vue`, `ClientsResultsView.vue`, `GoogleAdsAlertsPanel.vue`, `PasswordCard.vue`, `LoadersView.vue`, `report-view-rules.test.ts`, `PageHeader.vue`, `AlertDialog.vue`, `PageBody.vue`, `loaders/rules.ts`, `RolesPanel.vue`, `ChecklistItemsView.vue`, `GamRunView.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FacebookBudgetCard.vue`, `FiscalDataCard.vue`, `GoogleAdsPersonDialog.vue`, `Review Focus`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `vue-sonner`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `vue-router`, `NetworksView.vue`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `GoogleCard.vue`, `AccountManagerCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `Input.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `vue`, `AddWidgetDialog.vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookHistoryPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `ConfigPanel.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `errorText`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ClientNetworksView.vue`, `RewardLeadsCard.vue`, `RolesView.vue`, `GroupedBarChart.vue`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `BarChart.vue`, `NewGroupDialog.vue`, `DashboardWidget.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `NewTaskDialog.vue`, `DataTable.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `ClientsResultsView.vue`, `DataTable.vue`, `GoogleAdsAlertsPanel.vue`, `useSession`, `PasswordCard.vue`, `LoadersView.vue`, `AdTagPreview.vue`, `PageHeader.vue`, `TeamTabs.vue`, `AlertDialog.vue`, `FacebookCampaignForm.vue`, `PageBody.vue`, `report-view.test.ts`, `SaveViewDialog.vue`, `RolesPanel.vue`, `LoaderPreview.vue`, `DashboardGrid.vue`, `ChecklistItemsView.vue`, `GamRunView.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FacebookBudgetCard.vue`, `FiscalDataCard.vue`, `GoogleAdsPersonDialog.vue`, `main.ts`, `drag.ts`, `FunnelChart.vue`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._