# Graph Report - avant-web  (2026-11-23)

## Corpus Check
- 435 files · ~303,008 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5413 nodes · 14165 edges · 197 communities (191 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 161 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f0b156fa`
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
- index.ts
- steps
- ServiceLineDialog.vue
- SavedViewsBar.vue
- GoogleAdsView.vue
- PerformanceView.vue
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
- vue-sonner
- ClientSiteView.vue
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
- reports/types.ts
- google_ads/types.ts
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- ApiKeysCard.vue
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
- locale
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- vue-router
- Pagination.vue
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- session.ts
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- router.ts
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- table.ts
- ClientNetworkView.vue
- PasswordCard.vue
- rewards/rules.ts
- SessionsCard.vue
- t
- ClientNetworksView.vue
- RolesView.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- facebook/types.ts
- FiscalDataCard.vue
- events.ts
- dashboards/rules.ts
- updates
- lucide-vue-next
- TemplatesView.vue
- TemplateEditorView.vue
- ReservedNetworksCard.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- clients/service.ts
- GoogleAdsObjectView.vue
- useSession
- rewards/service.ts
- GoogleAdsAlertsPanel.vue
- FacebookBudgetCard.vue
- BarChart.vue
- GroupedBarChart.vue
- AdjustmentDialog.vue
- ChecklistNotesCard.vue
- vitest
- formatDate
- checklists/rules.ts
- LoadersView.vue
- MyCommissionView.vue
- CreateCompanyCard.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- InvoicesView.vue
- FacebookObjectView.vue
- ChecklistView.vue
- google_ads/types.ts
- firstValue
- ChecklistItemsView.vue
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
- costs/rules.ts
- DashboardWidget.vue
- MfaCard.vue
- TaskTimeline.vue
- Review Focus
- gam_tools/rules.ts
- AdTagPreview.vue
- tasks/rules.ts
- locale
- CompanyView.vue
- support-tasks.test.ts
- AlertDialog.vue
- costs/service.ts
- GoogleAdsTabs.vue
- vue
- RolesPanel.vue
- Input.vue
- GoogleAdsHistoryPanel.vue
- overrides
- google_ads/rules.ts
- GamRunView.vue
- LoaderPreview.vue
- Badge.vue
- checklists/types.ts
- FieldsPanel.vue
- ClientNetworksCard.vue
- ProfileImageCard.vue
- FakeSource
- SettingsView.vue
- tasks/types.ts
- Button.vue
- drag.ts
- DashboardGrid.vue
- priorityLabel
- ClientSiteView.vue
- AdTagInstallDialog.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 632 edges
2. `errorText()` - 383 edges
3. `vue` - 201 edges
4. `ApiError` - 144 edges
5. `lucide-vue-next` - 118 edges
6. `useSession` - 100 edges
7. `vue-sonner` - 100 edges
8. `vue-router` - 69 edges
9. `td` - 67 edges
10. `th` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ChartType`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts

## Import Cycles
- None detected.

## Communities (197 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+36 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (45): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.04
Nodes (61): loadDraft(), choices, description, emit, invalid, name, open, props (+53 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (29): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+21 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (36): busy, canTransfer, duplicate, emit, errors, form, open, props (+28 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (48): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+40 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (19): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+11 more)

### Community 12 - "views/rules.ts"
Cohesion: 0.20
Nodes (14): current, current, current, rows, current, current, current, dirty (+6 more)

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

### Community 20 - "index.ts"
Cohesion: 0.07
Nodes (27): props, up, choose(), langs, session, LINES, showBootFailure(), auditText() (+19 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.09
Nodes (32): amount, amountError, busy, chosen, description, emit, open, options (+24 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (42): campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+34 more)

### Community 25 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (33): presetRange(), previousRange(), sameRange(), shiftDay(), utcToday(), load(), section(), barFormat() (+25 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (55): emptyProfile(), profileBody(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+47 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "FacebookAccountDialog.vue"
Cohesion: 0.07
Nodes (33): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+25 more)

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

### Community 37 - "vue-sonner"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+14 more)

### Community 38 - "ClientSiteView.vue"
Cohesion: 0.05
Nodes (59): ClientSiteDetail, categoryOptions, rows, category, categoryOptions, changed, emit, keep (+51 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (40): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, canSeeChecklists, category, chosen(), columnLabel() (+32 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (52): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), FacebookAdInput, account (+44 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.06
Nodes (55): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+47 more)

### Community 46 - "NewGroupDialog.vue"
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

### Community 50 - "reports/types.ts"
Cohesion: 0.05
Nodes (63): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, countryName(), dailySeries(), daysOf() (+55 more)

### Community 51 - "google_ads/types.ts"
Cohesion: 0.12
Nodes (21): detailKey, props, GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsChangeOrigin (+13 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (67): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, change(), formatMetric(), toNumber() (+59 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (20): latestCall(), Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (40): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+32 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "metricColor"
Cohesion: 0.22
Nodes (14): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+6 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (19): busy, canChange, changeLines, emit, manager, managerId, next, NOTE_KEY (+11 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.11
Nodes (22): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+14 more)

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
Cohesion: 0.06
Nodes (41): NO_COMPARISON, sameComparison(), savedPeriod(), ThumbShape, viewChanged(), viewDraft(), ViewPeriod, exportUrl() (+33 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "Key"
Cohesion: 0.04
Nodes (81): model, auditActions, dict, errors, fallbackError, ad, blankCard(), buttonOptions (+73 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 74 - "locale"
Cohesion: 0.16
Nodes (13): FiscalData, busy, complete, documentLabel, emit, form, open, options (+5 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (56): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+48 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "vue-router"
Cohesion: 0.08
Nodes (24): ApiError, safeNext(), busy, confirm, load(), session, status, unlink() (+16 more)

### Community 81 - "Pagination.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (27): title, monthName(), previousMonth(), stateLabel(), ChecklistState, checklists, fail(), firstPage() (+19 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.14
Nodes (14): Choice, choice, choiceLabel(), choices, emit, open, path, props (+6 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "session.ts"
Cohesion: 0.11
Nodes (14): pinia, CompanyRef, Me, Theme, accountService, authService, InvitationPreview, LoginResult (+6 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (24): add(), emit, kind, kinds, metric, metrics, open, props (+16 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): busy, canManage, changed, current, load(), monthNames, months, save() (+23 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+29 more)

### Community 90 - "router.ts"
Cohesion: 0.10
Nodes (17): announceCompany(), CompanyMessage, onCompanyAnnounced(), busy, error, mfa, mismatch, password (+9 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.11
Nodes (18): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+10 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "table.ts"
Cohesion: 0.05
Nodes (42): first, last, numbers, page, props, dot, PAGE_SIZE, pageCount() (+34 more)

### Community 96 - "ClientNetworkView.vue"
Cohesion: 0.08
Nodes (36): FilterOption, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, NetworkSite, SiteNetworkRef, SiteResponsible (+28 more)

### Community 97 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "SessionsCard.vue"
Cohesion: 0.08
Nodes (27): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+19 more)

### Community 100 - "t"
Cohesion: 0.18
Nodes (19): t(), hourLabel(), moneyText(), percentText(), changeStatus(), chart, decisionFirstFill(), dropText() (+11 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (39): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService (+31 more)

### Community 102 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (48): cascadeFunnel(), cascadeLadder(), dropPercent(), nearestTier(), base, busy, currency, decisionPages (+40 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.06
Nodes (34): childLevel(), accountId, accountOptions, accounts, allSelected, base, canManage, clientOptions (+26 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.08
Nodes (24): columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_VIEW, filtered, firstPage() (+16 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "facebook/types.ts"
Cohesion: 0.08
Nodes (34): failure, left, load(), loading, model, options, props, SEARCHED (+26 more)

### Community 109 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 110 - "events.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.08
Nodes (38): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+30 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "lucide-vue-next"
Cohesion: 0.05
Nodes (40): lucide-vue-next, vue-router, vue-router, RouteMeta, base, columns, integer, load() (+32 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.07
Nodes (49): chosen, create(), emit, name, open, templates, editableWidgets(), dashboardService (+41 more)

### Community 116 - "ReservedNetworksCard.vue"
Cohesion: 0.14
Nodes (14): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+6 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "clients/service.ts"
Cohesion: 0.27
Nodes (12): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+4 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (23): PERIODS, isLevel(), matchKey(), base, children, currency, days, detail (+15 more)

### Community 121 - "useSession"
Cohesion: 0.13
Nodes (18): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+10 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (17): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+9 more)

### Community 123 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 124 - "FacebookBudgetCard.vue"
Cohesion: 0.18
Nodes (12): current, dirty, elsewhere, emit, error, kind, parsed, props (+4 more)

### Community 125 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 126 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 127 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.11
Nodes (20): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+12 more)

### Community 129 - "vitest"
Cohesion: 0.13
Nodes (15): vite@^8.3.5, vite, ENTRIES, Entry, entry, source, COLUMN, column() (+7 more)

### Community 130 - "formatDate"
Cohesion: 0.11
Nodes (19): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+11 more)

### Community 131 - "checklists/rules.ts"
Cohesion: 0.17
Nodes (13): choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, progressPercent(), ROW_TONE, RowState (+5 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 133 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 134 - "CreateCompanyCard.vue"
Cohesion: 0.18
Nodes (9): busy, create(), failure, name, session, valid, firstName, greeting (+1 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.07
Nodes (30): childLevel(), objectPath(), accountId, accountOptions, accounts, clientOptions, clients, columns (+22 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (48): hourPoints(), priceRulePermission(), tierOptions(), canManage, maxOptions, minOptions, startOptions, canManage (+40 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (65): budgetText(), decisions, loadError, page, pages, props, reason(), total (+57 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): overrideSummary(), checklistService, checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 142 - "google_ads/types.ts"
Cohesion: 0.08
Nodes (25): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+17 more)

### Community 143 - "firstValue"
Cohesion: 0.17
Nodes (16): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+8 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (18): active, emit, kind, kindOptions, name, open, props, save() (+10 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (31): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+23 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (58): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+50 more)

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
Cohesion: 0.06
Nodes (52): Key, addPath(), emit, icon, ICONS, name, pages, pathText (+44 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.23
Nodes (11): applyScale(), emit, error, from, mode, MODES, number(), pickColor() (+3 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (33): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+25 more)

### Community 155 - "Dialog.vue"
Cohesion: 0.10
Nodes (19): open, open, busy, canManage, description, editing, editingOpen, load() (+11 more)

### Community 156 - "ClientsResultsView.vue"
Cohesion: 0.08
Nodes (30): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+22 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.05
Nodes (48): model, errorText(), alerts, emit, load(), loadError, markRead(), page (+40 more)

### Community 159 - "api.ts"
Cohesion: 0.13
Nodes (24): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+16 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 161 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 162 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (21): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+13 more)

### Community 163 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.12
Nodes (16): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+8 more)

### Community 165 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "tasks/rules.ts"
Cohesion: 0.22
Nodes (8): COMMENT_MIN, DESCRIPTION_MAX, PRIORITIES, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, TaskPerson

### Community 169 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "support-tasks.test.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 173 - "costs/service.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 174 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 175 - "vue"
Cohesion: 0.07
Nodes (24): vitest, vue, @vue/test-utils, box, failed, initial, props, lang (+16 more)

### Community 176 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 178 - "Input.vue"
Cohesion: 0.12
Nodes (11): color, text, choices, emit, invalid, name, open, props (+3 more)

### Community 179 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.15
Nodes (13): changes, load(), loadError, origin, originOptions, page, pages, props (+5 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (22): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+14 more)

### Community 183 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 186 - "Badge.vue"
Cohesion: 0.22
Nodes (6): pick(), route, router, session, open, session

### Community 187 - "checklists/types.ts"
Cohesion: 0.30
Nodes (10): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress, CheckOutcome (+2 more)

### Community 189 - "FieldsPanel.vue"
Cohesion: 0.29
Nodes (9): model, customs, dimensions, emit, matches(), metrics, props, search (+1 more)

### Community 190 - "ClientNetworksCard.vue"
Cohesion: 0.10
Nodes (22): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+14 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 193 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.46
Nodes (6): SupportTask, SupportTaskDetail, TaskFilters, TaskInput, TaskPatch, TaskScope

### Community 197 - "Button.vue"
Cohesion: 0.10
Nodes (24): reka-ui, button, classes, Props, props, cn(), kindClass(), tab() (+16 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 200 - "DashboardGrid.vue"
Cohesion: 0.16
Nodes (21): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+13 more)

### Community 202 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 204 - "ClientSiteView.vue"
Cohesion: 0.14
Nodes (13): PAGE_WIDTH, canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route (+5 more)

### Community 206 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `PerformanceView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `reports/types.ts`, `google_ads/types.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ApiKeysCard.vue`, `metricColor`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `InviteView.vue`, `Key`, `GoalsView.vue`, `locale`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `vue-router`, `Pagination.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `router.ts`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `ClientNetworkView.vue`, `PasswordCard.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `FiscalDataCard.vue`, `dashboards/rules.ts`, `lucide-vue-next`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `GoogleAdsObjectView.vue`, `useSession`, `rewards/service.ts`, `GoogleAdsAlertsPanel.vue`, `FacebookBudgetCard.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `checklists/rules.ts`, `LoadersView.vue`, `MyCommissionView.vue`, `CreateCompanyCard.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `google_ads/types.ts`, `firstValue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `alerts/rules.ts`, `costs/rules.ts`, `DashboardWidget.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `tasks/rules.ts`, `locale`, `CompanyView.vue`, `AlertDialog.vue`, `GoogleAdsTabs.vue`, `vue`, `RolesPanel.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `GamRunView.vue`, `LoaderPreview.vue`, `Badge.vue`, `FieldsPanel.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `SettingsView.vue`, `Button.vue`, `priorityLabel`, `ClientSiteView.vue`, `AdTagInstallDialog.vue`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051418439716312055 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `PerformanceView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `reports/types.ts`, `google_ads/types.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ApiKeysCard.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `InviteView.vue`, `Key`, `GoalsView.vue`, `locale`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `vue-router`, `Pagination.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `session.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `router.ts`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `ClientNetworkView.vue`, `PasswordCard.vue`, `SessionsCard.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `FiscalDataCard.vue`, `events.ts`, `dashboards/rules.ts`, `lucide-vue-next`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `GoogleAdsObjectView.vue`, `useSession`, `GoogleAdsAlertsPanel.vue`, `FacebookBudgetCard.vue`, `BarChart.vue`, `GroupedBarChart.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `CreateCompanyCard.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `google_ads/types.ts`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `AdTagPreview.vue`, `locale`, `CompanyView.vue`, `AlertDialog.vue`, `RolesPanel.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `GamRunView.vue`, `LoaderPreview.vue`, `Badge.vue`, `FieldsPanel.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `SettingsView.vue`, `Button.vue`, `drag.ts`, `DashboardGrid.vue`, `ClientSiteView.vue`, `AdTagInstallDialog.vue`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `FacebookRulesCard.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `PerformanceView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `reports/types.ts`, `lib/types.ts`, `ApiKeysCard.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `InviteView.vue`, `GoalsView.vue`, `locale`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `vue-router`, `Pagination.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `router.ts`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `table.ts`, `ClientNetworkView.vue`, `PasswordCard.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `t`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `FiscalDataCard.vue`, `lucide-vue-next`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `GoogleAdsObjectView.vue`, `GoogleAdsAlertsPanel.vue`, `FacebookBudgetCard.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `CreateCompanyCard.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `google_ads/types.ts`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `Review Focus`, `locale`, `CompanyView.vue`, `AlertDialog.vue`, `RolesPanel.vue`, `GoogleAdsHistoryPanel.vue`, `GamRunView.vue`, `Badge.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `SettingsView.vue`, `DashboardGrid.vue`, `ClientSiteView.vue`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._