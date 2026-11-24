# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 436 files · ~304,606 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5487 nodes · 14298 edges · 196 communities (190 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 162 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `22c5408a`
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
- FacebookAdForm.vue
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
- PerformanceView.vue
- google_ads/types.ts
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- ApiKeysCard.vue
- .oxlintrc.json
- t
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
- session.ts
- Key
- GoalsView.vue
- InvoiceDocument.vue
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
- reports/types.ts
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- router.ts
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- DataTable.vue
- ClientNetworkView.vue
- PasswordCard.vue
- rewards/rules.ts
- SessionsCard.vue
- ClassifySitesDialog.vue
- ClientNetworksView.vue
- RolesView.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- facebook/types.ts
- ConfigPanel.vue
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- ReservedNetworksCard.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- lucide-vue-next
- GoogleAdsObjectView.vue
- useSession
- rewards/service.ts
- GoogleAdsAlertsPanel.vue
- FacebookBudgetCard.vue
- api.ts
- GroupedBarChart.vue
- AdjustmentDialog.vue
- ChecklistNotesCard.vue
- vitest
- formatDate
- checklists/rules.ts
- LoadersView.vue
- MyCommissionView.vue
- vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- InvoicesView.vue
- FacebookObjectView.vue
- ClientDocumentsCard.vue
- google_ads/types.ts
- firstValue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- RevenueStatusBadge.vue
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
- SaveReportDialog.vue
- Pagination.vue
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- NetworkReviewActions.vue
- NewDashboardDialog.vue
- gam-tools-view.test.ts
- TeamTabs.vue
- CompanyIcon.vue
- Input.vue
- GoogleAdsHistoryPanel.vue
- overrides
- priceRulePermission
- google_ads/rules.ts
- LoaderPreview.vue
- useSession
- ChecklistItemsView.vue
- FieldsPanel.vue
- ClientNetworksCard.vue
- ProfileImageCard.vue
- FakeSource
- SettingsView.vue
- tasks/types.ts
- Button.vue
- drag.ts
- DashboardGrid.vue
- ClientSiteView.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 644 edges
2. `errorText()` - 383 edges
3. `vue` - 202 edges
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
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (196 total, 6 thin omitted)

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
Nodes (48): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+40 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (36): busy, canTransfer, duplicate, emit, errors, form, open, props (+28 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (50): adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters, barFilters (+42 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (19): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+11 more)

### Community 12 - "views/rules.ts"
Cohesion: 0.16
Nodes (19): current, current, current, rows, current, current, current, props (+11 more)

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
Cohesion: 0.05
Nodes (42): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), assign(), busy (+34 more)

### Community 20 - "index.ts"
Cohesion: 0.09
Nodes (21): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+13 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.10
Nodes (28): FiscalData, amount, amountError, busy, chosen, description, emit, open (+20 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (30): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (42): campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+34 more)

### Community 25 - "FacebookAdForm.vue"
Cohesion: 0.07
Nodes (31): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+23 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (27): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+19 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (60): emptyProfile(), profileBody(), adding, barFilters, busy, canceling, cancelInvite(), cancelOpen (+52 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "FacebookAccountDialog.vue"
Cohesion: 0.14
Nodes (14): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+6 more)

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
Cohesion: 0.08
Nodes (29): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+21 more)

### Community 38 - "ClientSiteView.vue"
Cohesion: 0.07
Nodes (36): NetworkSite, rows, approval(), tree(), AdUnit, Site, SiteDetail, SiteListItem (+28 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (42): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+34 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (52): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), FacebookEditInput, account (+44 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.10
Nodes (28): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+20 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.07
Nodes (45): pageCount(), pageSlice(), loadDraft(), filterable, shownRows, path, shape, AXIS_CHARTS (+37 more)

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.05
Nodes (45): broken, hue, initials, props, busy, create(), description, duplicate (+37 more)

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
Nodes (90): BarItem, largest, props, LineSeries, compare, period, selected, opacity() (+82 more)

### Community 51 - "google_ads/types.ts"
Cohesion: 0.14
Nodes (19): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsChangeOrigin, GoogleAdsKeyword, GoogleAdsLevel (+11 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (59): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, locale, formatMetric(), toNumber(), metricText() (+51 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (39): busy, canManage, created(), creating, keys, load(), loadError, page (+31 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.11
Nodes (20): options, t(), tn(), changeLines, roleLine(), period, description, adUnitOptions (+12 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (36): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+28 more)

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
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+21 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.07
Nodes (39): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), label(), download() (+31 more)

### Community 71 - "session.ts"
Cohesion: 0.07
Nodes (28): pinia, Me, Theme, accountService, authService, InvitationPreview, LoginResult, accept() (+20 more)

### Community 72 - "Key"
Cohesion: 0.06
Nodes (60): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+52 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.11
Nodes (24): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+16 more)

### Community 74 - "InvoiceDocument.vue"
Cohesion: 0.11
Nodes (24): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, monthName(), payee, PAYER (+16 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (29): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+21 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (60): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+52 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (68): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+60 more)

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
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.13
Nodes (16): Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.11
Nodes (22): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+14 more)

### Community 85 - "reports/types.ts"
Cohesion: 0.07
Nodes (43): Task 3: Web — tipos, serviço e regras do construtor, @vue/test-utils, Lang, emit, props, ReportDraft, reportService, ChartType (+35 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (15): kind, kinds, metric, metrics, open, props, ready, reportId (+7 more)

### Community 87 - "formatDate"
Cohesion: 0.10
Nodes (23): healthSummary(), share(), unitName(), dayHint, base, decimal, filled, health (+15 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (33): busy, canManage, changed, current, load(), monthNames, months, save() (+25 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.05
Nodes (49): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+41 more)

### Community 90 - "router.ts"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (23): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+15 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "DataTable.vue"
Cohesion: 0.15
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 96 - "ClientNetworkView.vue"
Cohesion: 0.09
Nodes (29): FilterOption, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, ClientSiteDetail, SiteNetworkRef, SiteResponsible (+21 more)

### Community 97 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (30): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+22 more)

### Community 99 - "SessionsCard.vue"
Cohesion: 0.07
Nodes (30): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+22 more)

### Community 100 - "ClassifySitesDialog.vue"
Cohesion: 0.12
Nodes (23): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.10
Nodes (23): td, th, monthKey(), available, chosen, create(), createBusy, createMonth (+15 more)

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
Cohesion: 0.06
Nodes (42): busy, chosen, daily, emit, monthly, open, props, save() (+34 more)

### Community 109 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (20): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+12 more)

### Community 110 - "events.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (43): add(), emit, dimensions, filters, periods, props, ACCOUNT_SIZE, accountWidget() (+35 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.08
Nodes (25): availableFilters, barFilters, base, columns, copied, DEFAULT_FILTERS, deleted, FILTER_LABELS (+17 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (42): editableWidgets(), templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience() (+34 more)

### Community 116 - "ReservedNetworksCard.vue"
Cohesion: 0.15
Nodes (13): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+5 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.09
Nodes (20): open, answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "lucide-vue-next"
Cohesion: 0.11
Nodes (18): lucide-vue-next, vue-router, vue-router, RouteMeta, base, columns, integer, load() (+10 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (23): model, isLevel(), matchKey(), base, children, currency, days, detail (+15 more)

### Community 121 - "useSession"
Cohesion: 0.27
Nodes (10): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), activeLabels() (+2 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (16): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+8 more)

### Community 123 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.12
Nodes (16): alerts, emit, load(), loadError, markRead(), page, pages, props (+8 more)

### Community 124 - "FacebookBudgetCard.vue"
Cohesion: 0.18
Nodes (12): current, dirty, elsewhere, emit, error, kind, parsed, props (+4 more)

### Community 125 - "api.ts"
Cohesion: 0.25
Nodes (13): baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request(), RequestOptions (+5 more)

### Community 126 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 127 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (12): amount, amountError, busy, emit, open, props, reason, reasonTouched (+4 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.11
Nodes (20): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+12 more)

### Community 129 - "vitest"
Cohesion: 0.18
Nodes (12): vitest@^5.0.5, vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages() (+4 more)

### Community 130 - "formatDate"
Cohesion: 0.07
Nodes (35): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+27 more)

### Community 131 - "checklists/rules.ts"
Cohesion: 0.20
Nodes (11): dollars(), evidenceText(), LANGUAGE_NAMES, progressPercent(), RowState, rowState(), STATES, ChecklistPerson (+3 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 133 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 134 - "vue"
Cohesion: 0.06
Nodes (30): vue, button, classes, Props, props, props, seats, busy (+22 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), objectPath(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+28 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): cascadeFunnel(), gainQuery(), gainSeries(), modelCounts(), siteStatus(), funnel, active, automaticRuleCount (+44 more)

### Community 139 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (25): barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel(), FILTERS (+17 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (68): budgetText(), decisions, loadError, page, pages, props, reason(), total (+60 more)

### Community 141 - "ClientDocumentsCard.vue"
Cohesion: 0.23
Nodes (12): approve(), busy, downloadFile(), emit, fail(), load(), overview, props (+4 more)

### Community 142 - "google_ads/types.ts"
Cohesion: 0.07
Nodes (33): dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily, dailyValue (+25 more)

### Community 143 - "firstValue"
Cohesion: 0.17
Nodes (16): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+8 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.26
Nodes (10): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+2 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (35): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+27 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (58): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+50 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.09
Nodes (25): assignee, client, clientOptions, create(), description, domain, emit, open (+17 more)

### Community 150 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (8): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueTrend, SCALING

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.06
Nodes (60): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+52 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (33): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+25 more)

### Community 155 - "Dialog.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 156 - "ClientsResultsView.vue"
Cohesion: 0.10
Nodes (17): dot, clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError (+9 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.06
Nodes (33): model, alerts, emit, load(), loadError, markRead(), page, pages (+25 more)

### Community 159 - "api.ts"
Cohesion: 0.22
Nodes (14): api, Query, CompanyRef, Items, Page, UserRef, costService, groupService (+6 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 161 - "costs/rules.ts"
Cohesion: 0.14
Nodes (20): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+12 more)

### Community 162 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (19): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+11 more)

### Community 163 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.11
Nodes (18): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+10 more)

### Community 165 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "SaveReportDialog.vue"
Cohesion: 0.18
Nodes (9): choices, description, emit, invalid, name, open, props, roleIds (+1 more)

### Community 169 - "Pagination.vue"
Cohesion: 0.22
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 173 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 174 - "NewDashboardDialog.vue"
Cohesion: 0.29
Nodes (7): chosen, create(), emit, name, open, templates, DashboardTemplate

### Community 175 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (10): detail, network, networks, option, route, run, runs, chooseOption() (+2 more)

### Community 176 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 177 - "CompanyIcon.vue"
Cohesion: 0.33
Nodes (4): box, failed, initial, props

### Community 178 - "Input.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 179 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.12
Nodes (13): changes, load(), loadError, origin, originOptions, page, pages, props (+5 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (23): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+15 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 186 - "useSession"
Cohesion: 0.14
Nodes (13): pick(), route, router, session, open, session, announceCompany(), CompanyMessage (+5 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (20): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress (+12 more)

### Community 189 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 190 - "ClientNetworksCard.vue"
Cohesion: 0.10
Nodes (22): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+14 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 193 - "SettingsView.vue"
Cohesion: 0.08
Nodes (31): errorText(), choose(), busy, complete, documentLabel, form, load(), loaded (+23 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 197 - "Button.vue"
Cohesion: 0.10
Nodes (21): reka-ui, props, up, panelItem(), railItem(), open, cn(), kindClass() (+13 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 200 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (24): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+16 more)

### Community 204 - "ClientSiteView.vue"
Cohesion: 0.14
Nodes (13): PAGE_WIDTH, canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route (+5 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `views/rules.ts`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookAdForm.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ApiKeysCard.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `session.ts`, `Key`, `GoalsView.vue`, `InvoiceDocument.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `vue-router`, `Pagination.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `router.ts`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `DataTable.vue`, `ClientNetworkView.vue`, `PasswordCard.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `ClassifySitesDialog.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `ConfigPanel.vue`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `rewards/service.ts`, `GoogleAdsAlertsPanel.vue`, `FacebookBudgetCard.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `checklists/rules.ts`, `LoadersView.vue`, `MyCommissionView.vue`, `vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ClientDocumentsCard.vue`, `google_ads/types.ts`, `firstValue`, `ChecklistItemsView.vue`, `price_rules/rules.ts`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `RevenueStatusBadge.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `alerts/rules.ts`, `costs/rules.ts`, `DashboardWidget.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `Pagination.vue`, `CompanyView.vue`, `AlertDialog.vue`, `NetworkReviewActions.vue`, `NewDashboardDialog.vue`, `TeamTabs.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `LoaderPreview.vue`, `useSession`, `ChecklistItemsView.vue`, `FieldsPanel.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `SettingsView.vue`, `Button.vue`, `ClientSiteView.vue`?**
  _High betweenness centrality (0.178) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `SettingsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookAdForm.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `ApiKeysCard.vue`, `t`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `session.ts`, `GoalsView.vue`, `InvoiceDocument.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `vue-router`, `Pagination.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `router.ts`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `DataTable.vue`, `ClientNetworkView.vue`, `PasswordCard.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `ClassifySitesDialog.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `GoogleAdsAlertsPanel.vue`, `FacebookBudgetCard.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ClientDocumentsCard.vue`, `google_ads/types.ts`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `Review Focus`, `gam_tools/rules.ts`, `CompanyView.vue`, `AlertDialog.vue`, `NetworkReviewActions.vue`, `GoogleAdsHistoryPanel.vue`, `useSession`, `ChecklistItemsView.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `DashboardGrid.vue`, `ClientSiteView.vue`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `FacebookAdForm.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ApiKeysCard.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `session.ts`, `Key`, `GoalsView.vue`, `InvoiceDocument.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `vue-router`, `Pagination.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `router.ts`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `DataTable.vue`, `ClientNetworkView.vue`, `PasswordCard.vue`, `SessionsCard.vue`, `ClassifySitesDialog.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `ConfigPanel.vue`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `GoogleAdsAlertsPanel.vue`, `FacebookBudgetCard.vue`, `GroupedBarChart.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ClientDocumentsCard.vue`, `google_ads/types.ts`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `RevenueStatusBadge.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `Pagination.vue`, `CompanyView.vue`, `AlertDialog.vue`, `NetworkReviewActions.vue`, `NewDashboardDialog.vue`, `gam-tools-view.test.ts`, `TeamTabs.vue`, `CompanyIcon.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `LoaderPreview.vue`, `useSession`, `ChecklistItemsView.vue`, `FieldsPanel.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `SettingsView.vue`, `Button.vue`, `drag.ts`, `DashboardGrid.vue`, `ClientSiteView.vue`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._