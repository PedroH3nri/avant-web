# Graph Report - avant-web  (2026-11-23)

## Corpus Check
- 425 files · ~293,641 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5238 nodes · 13641 edges · 191 communities (185 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 155 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3def18fe`
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
- DashboardWidget.vue
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
- reports/rules.ts
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
- ReportView.vue
- vue-router
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- FacebookAdForm.vue
- ApiKeyDialog.vue
- AccountManagerCard.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- FacebookAdForm.vue
- .oxlintrc.json
- t
- avant-web
- NewTaskDialog.vue
- tsconfig.json
- session-start.sh
- errorText
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- AccountStatus.vue
- InviteView.vue
- GoogleAdsPersonDialog.vue
- AccountManagerCard.vue
- Card.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- Status.vue
- ChecklistsView.vue
- vue-sonner
- table.ts
- vue
- GroupedBarChart.vue
- AdTagMetricsView.vue
- locale
- RoleDialog.vue
- locale
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- vue
- ClientNetworksCard.vue
- MyCommissionView.vue
- rewards/rules.ts
- ApiKeysCard.vue
- FacebookEditView.vue
- formatDate
- google_ads/types.ts
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- vue
- RewardMetricsView.vue
- facebook/types.ts
- api
- gam-tools-view.test.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- vitest
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- RolesView.vue
- ClientNetworksView.vue
- checklists/rules.ts
- alerts/rules.ts
- events.ts
- RevenueStatusBadge.vue
- lang
- InvoiceServicesView.vue
- GroupedBarChart.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- RolesView.vue
- BarChart.vue
- AlertDialog.vue
- ProfileImageCard.vue
- GamRunView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- t
- FacebookObjectView.vue
- ChecklistView.vue
- GoogleAdsObjectView.vue
- api.ts
- ChecklistItemDialog.vue
- Input.vue
- price_rules/rules.ts
- LoaderEditView.vue
- RecoveryCodes.vue
- pick
- tasks/types.ts
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- ForgotView.vue
- ClientsResultsView.vue
- price_rules/types.ts
- FacebookRulesCard.vue
- router.ts
- main.ts
- GoogleAdsAlertsPanel.vue
- useSession
- alerts/types.ts
- LoadersView.vue
- ad-tags.test.ts
- gam_tools/rules.ts
- AdTagPreview.vue
- NetworkReviewActions.vue
- priorityLabel
- PageHeader.vue
- TeamTabs.vue
- AdTagInstallDialog.vue
- support-tasks.test.ts
- PageBody.vue
- FakeSource
- SaveViewDialog.vue
- applyView
- overrides
- vite.embed.config.ts
- google_ads/rules.ts
- RolesPanel.vue
- LoaderPreview.vue
- SaveReportDialog.vue
- DashboardGrid.vue
- ChecklistItemsView.vue
- GoogleAdsHistoryPanel.vue
- PayeeDialog.vue
- ClassifySitesDialog.vue
- FiscalDataCard.vue
- NetworkReviewActions.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 594 edges
2. `errorText()` - 370 edges
3. `vue` - 195 edges
4. `ApiError` - 138 edges
5. `lucide-vue-next` - 112 edges
6. `vue-sonner` - 97 edges
7. `useSession` - 96 edges
8. `td` - 65 edges
9. `th` - 65 edges
10. `vue-router` - 65 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (191 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles, canSeeRoles (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (44): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+36 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.04
Nodes (79): tn(), CompanyStatus, profileInput(), AuditEntry, Client, ClientDetail, ClientNote, ClientOption (+71 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (63): BuilderState, builderState(), canExport(), chartAllowed(), emptyDraft(), fittingChart(), fromReport(), fromTemplate() (+55 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.06
Nodes (39): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 7: Web — modal de métrica personalizada e "Minhas métricas" (+31 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (35): busy, canTransfer, duplicate, emit, errors, form, open, props (+27 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (20): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+12 more)

### Community 12 - "DashboardWidget.vue"
Cohesion: 0.09
Nodes (22): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+14 more)

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

### Community 20 - "draft-rules.ts"
Cohesion: 0.05
Nodes (61): model, auditActions, dict, errors, fallbackError, adset, eventOptions, genderOptions (+53 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (20): amount, amountError, busy, chosen, description, emit, open, options (+12 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (44): GoogleAdsTab, model, props, TABS, accounts, applying, applySuffix(), canConnect (+36 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (55): emptyProfile(), profileBody(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+47 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "reports/rules.ts"
Cohesion: 0.05
Nodes (65): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, missingDates, options, props, setDate(), setMode() (+57 more)

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
Cohesion: 0.04
Nodes (73): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+65 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

### Community 39 - "CompanyView.vue"
Cohesion: 0.09
Nodes (23): candidates, canManage, canOwner, changeOwner(), company, companyId, fail(), groupPeople() (+15 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (52): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), FacebookAdInput, account (+44 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (33): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+25 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (41): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+33 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.14
Nodes (19): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+11 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.07
Nodes (37): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+29 more)

### Community 46 - "vue-router"
Cohesion: 0.10
Nodes (20): vue-router, vue-router, RouteMeta, safeNext(), busy, email, error, next (+12 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.07
Nodes (32): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+24 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "FacebookAdForm.vue"
Cohesion: 0.08
Nodes (38): failure, left, load(), loading, model, options, props, SEARCHED (+30 more)

### Community 51 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 52 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (68): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), pageSlice(), metricText() (+60 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (20): latestCall(), Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "FacebookAdForm.vue"
Cohesion: 0.11
Nodes (22): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+14 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.11
Nodes (23): busy, drop(), input, pick(), problem, props, run(), t() (+15 more)

### Community 61 - "NewTaskDialog.vue"
Cohesion: 0.10
Nodes (22): assignee, client, clientOptions, create(), description, domain, emit, open (+14 more)

### Community 65 - "errorText"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.11
Nodes (22): commentRecipients(), taskPlace(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+14 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "AccountStatus.vue"
Cohesion: 0.12
Nodes (18): props, seats, company, error, hasSeats, load(), lost, networks (+10 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "GoogleAdsPersonDialog.vue"
Cohesion: 0.07
Nodes (31): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+23 more)

### Community 73 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "Card.vue"
Cohesion: 0.14
Nodes (16): lucide-vue-next, reka-ui, pick(), route, router, session, open, session (+8 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (55): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+47 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (65): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+57 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.18
Nodes (10): auditText(), fill(), formatAgo(), loaded, loaders, Messages, messages(), permissionGroupLabel() (+2 more)

### Community 81 - "Status.vue"
Cohesion: 0.09
Nodes (24): vue, dot, td, th, events, load(), loadError, open (+16 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "vue-sonner"
Cohesion: 0.06
Nodes (34): vue-sonner, toasterTheme, busy, code, codeError, codeOk, codes, desc (+26 more)

### Community 84 - "table.ts"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "vue"
Cohesion: 0.07
Nodes (36): pinia, choose(), langs, session, chooseLang(), useNavigation(), logout(), Accent (+28 more)

### Community 86 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 87 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (22): healthSummary(), share(), unitName(), dayHint, base, decimal, filled, health (+14 more)

### Community 88 - "locale"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.06
Nodes (49): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+41 more)

### Community 90 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "vue"
Cohesion: 0.18
Nodes (11): changes, load(), loadError, origin, originOptions, page, pages, props (+3 more)

### Community 96 - "ClientNetworksCard.vue"
Cohesion: 0.12
Nodes (18): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+10 more)

### Community 97 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (28): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+20 more)

### Community 99 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 100 - "FacebookEditView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 101 - "formatDate"
Cohesion: 0.10
Nodes (19): formatDate(), tiles, seenText(), previewDay, changes, comment, comments, emit (+11 more)

### Community 102 - "google_ads/types.ts"
Cohesion: 0.14
Nodes (19): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsChangeOrigin, GoogleAdsKeyword, GoogleAdsLevel (+11 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (22): monthKey(), STATUS_TONE, available, chosen, create(), createBusy, createMonth, creating (+14 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (52): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+44 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (34): childLevel(), accountId, accountOptions, accounts, allSelected, base, canManage, clientOptions (+26 more)

### Community 106 - "vue"
Cohesion: 0.12
Nodes (15): firstName, greeting, session, canSeeChecklists, firstPage(), load(), loadError, page (+7 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "facebook/types.ts"
Cohesion: 0.05
Nodes (47): model, errorText(), alerts, emit, load(), loadError, markRead(), page (+39 more)

### Community 109 - "api"
Cohesion: 0.12
Nodes (24): api, Query, Items, Page, UserRef, busy, confirm, load() (+16 more)

### Community 110 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.04
Nodes (79): add(), emit, kind, kinds, metric, metrics, open, props (+71 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.08
Nodes (23): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+15 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (17): templateService, apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError (+9 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.07
Nodes (58): widgetFailure(), editableWidgets(), emptyRun(), runKey(), runsQuery(), RunTarget, savedQueries(), useDashboardRun() (+50 more)

### Community 116 - "vitest"
Cohesion: 0.13
Nodes (12): vitest, @vue/test-utils, catalog, check, catalog, me, report, result (+4 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.07
Nodes (36): saveFile(), downloadInstall(), answer, answerOptions, busy, columns, confirmRemove(), exportLeads() (+28 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): model, busy, daily, emit, monthly, onLimit, onLimitOptions, open (+18 more)

### Community 120 - "ClientNetworksView.vue"
Cohesion: 0.11
Nodes (17): box, failed, initial, props, awaitingOnly, canAssign, firstPage(), load() (+9 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.21
Nodes (11): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, personName(), progressPercent(), RowState, rowState() (+3 more)

### Community 122 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 123 - "events.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.24
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 125 - "lang"
Cohesion: 0.20
Nodes (8): lang, client, managerChange, perms, settings, staffOptions, team, toastError

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 127 - "GroupedBarChart.vue"
Cohesion: 0.12
Nodes (16): amount, amountError, busy, emit, open, props, reason, reasonTouched (+8 more)

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

### Community 132 - "AlertDialog.vue"
Cohesion: 0.13
Nodes (14): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+6 more)

### Community 133 - "ProfileImageCard.vue"
Cohesion: 0.15
Nodes (12): broken, hue, initials, props, busy, drop(), imageUrl, input (+4 more)

### Community 134 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (25): accountId, accountOptions, accounts, clientOptions, clients, columns, companyId, days (+17 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "t"
Cohesion: 0.20
Nodes (16): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+8 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (73): current, dirty, elsewhere, emit, error, kind, parsed, props (+65 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "GoogleAdsObjectView.vue"
Cohesion: 0.08
Nodes (31): periodRange(), campaignsPath(), childLevel(), isLevel(), matchKey(), objectPath(), details(), open() (+23 more)

### Community 143 - "api.ts"
Cohesion: 0.11
Nodes (25): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+17 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "Input.vue"
Cohesion: 0.09
Nodes (19): open, open, model, chosen, create(), emit, name, open (+11 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (33): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+25 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (58): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+50 more)

### Community 148 - "RecoveryCodes.vue"
Cohesion: 0.09
Nodes (27): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+19 more)

### Community 149 - "pick"
Cohesion: 0.15
Nodes (13): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+5 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.06
Nodes (59): Key, addPath(), emit, icon, ICONS, name, pages, pathText (+51 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "ForgotView.vue"
Cohesion: 0.22
Nodes (5): busy, email, error, sent, submit()

### Community 156 - "ClientsResultsView.vue"
Cohesion: 0.08
Nodes (40): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+32 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 159 - "router.ts"
Cohesion: 0.31
Nodes (5): announceCompany(), CompanyMessage, onCompanyAnnounced(), routes, opened

### Community 160 - "main.ts"
Cohesion: 0.27
Nodes (6): LINES, showBootFailure(), loadLang(), startLang(), boot(), router

### Community 161 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 162 - "useSession"
Cohesion: 0.27
Nodes (9): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, visibleGroups(), activeLabels(), headers() (+1 more)

### Community 163 - "alerts/types.ts"
Cohesion: 0.33
Nodes (8): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "ad-tags.test.ts"
Cohesion: 0.29
Nodes (11): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+3 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 169 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 170 - "PageHeader.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "TeamTabs.vue"
Cohesion: 0.08
Nodes (21): props, up, panelItem(), railItem(), cn(), kindClass(), FacebookTab, model (+13 more)

### Community 172 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 173 - "support-tasks.test.ts"
Cohesion: 0.33
Nodes (4): TaskEvent, ana, bruno, task

### Community 174 - "PageBody.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 176 - "SaveViewDialog.vue"
Cohesion: 0.13
Nodes (13): button, classes, Props, props, choices, emit, invalid, name (+5 more)

### Community 177 - "applyView"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (23): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText() (+15 more)

### Community 183 - "RolesPanel.vue"
Cohesion: 0.35
Nodes (7): approval(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "SaveReportDialog.vue"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 186 - "DashboardGrid.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.10
Nodes (23): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+15 more)

### Community 189 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.15
Nodes (13): changes, load(), loadError, origin, originOptions, page, pages, props (+5 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 191 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): category, categoryOptions, changed, emit, keep, open, props, responsible (+14 more)

### Community 193 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 195 - "NetworkReviewActions.vue"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `DashboardWidget.vue`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/rules.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `vue-router`, `NetworksView.vue`, `FacebookAdForm.vue`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `FacebookAdForm.vue`, `NewTaskDialog.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `AccountStatus.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `Card.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `Status.vue`, `ChecklistsView.vue`, `vue-sonner`, `table.ts`, `vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `formatDate`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `api`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `RolesView.vue`, `ClientNetworksView.vue`, `checklists/rules.ts`, `alerts/rules.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `AlertDialog.vue`, `ProfileImageCard.vue`, `GamRunView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `t`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `api.ts`, `ChecklistItemDialog.vue`, `Input.vue`, `LoaderEditView.vue`, `RecoveryCodes.vue`, `pick`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `ForgotView.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `GoogleAdsAlertsPanel.vue`, `useSession`, `LoadersView.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `NetworkReviewActions.vue`, `priorityLabel`, `PageHeader.vue`, `TeamTabs.vue`, `AdTagInstallDialog.vue`, `PageBody.vue`, `SaveViewDialog.vue`, `applyView`, `RolesPanel.vue`, `LoaderPreview.vue`, `DashboardGrid.vue`, `ChecklistItemsView.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`?**
  _High betweenness centrality (0.220) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05217391304347826 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `Status.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `DashboardWidget.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/rules.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `vue-router`, `NetworksView.vue`, `FacebookAdForm.vue`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `FacebookAdForm.vue`, `t`, `NewTaskDialog.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `AccountStatus.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `Card.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `ChecklistsView.vue`, `vue-sonner`, `table.ts`, `vue`, `GroupedBarChart.vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `formatDate`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `api`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `vitest`, `RewardLeadsCard.vue`, `RolesView.vue`, `ClientNetworksView.vue`, `events.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `BarChart.vue`, `AlertDialog.vue`, `ProfileImageCard.vue`, `GamRunView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `api.ts`, `ChecklistItemDialog.vue`, `Input.vue`, `LoaderEditView.vue`, `RecoveryCodes.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `ForgotView.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `main.ts`, `GoogleAdsAlertsPanel.vue`, `useSession`, `LoadersView.vue`, `AdTagPreview.vue`, `NetworkReviewActions.vue`, `PageHeader.vue`, `TeamTabs.vue`, `AdTagInstallDialog.vue`, `PageBody.vue`, `SaveViewDialog.vue`, `LoaderPreview.vue`, `DashboardGrid.vue`, `ChecklistItemsView.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05319148936170213 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `facebook/types.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `DashboardWidget.vue`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `vue-router`, `NetworksView.vue`, `FacebookAdForm.vue`, `ApiKeyDialog.vue`, `PeopleView.vue`, `t`, `NewTaskDialog.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `AccountStatus.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `Card.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `Status.vue`, `ChecklistsView.vue`, `vue-sonner`, `table.ts`, `vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `api`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `RolesView.vue`, `ClientNetworksView.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `AlertDialog.vue`, `ProfileImageCard.vue`, `GamRunView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `api.ts`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `RecoveryCodes.vue`, `pick`, `AdTagsView.vue`, `ForgotView.vue`, `ClientsResultsView.vue`, `router.ts`, `GoogleAdsAlertsPanel.vue`, `LoadersView.vue`, `NetworkReviewActions.vue`, `PageHeader.vue`, `PageBody.vue`, `ChecklistItemsView.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.03643144004589788 - nodes in this community are weakly interconnected._