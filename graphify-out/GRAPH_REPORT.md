# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 447 files · ~314,245 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5608 nodes · 14640 edges · 204 communities (196 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 163 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f7d0b886`
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
- PageBody.vue
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
- vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- Input.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- vue-sonner
- SiteDetailView.vue
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
- api.ts
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
- session.ts
- Key
- GoalsView.vue
- ClassifySitesDialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- pick
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- reports/types.ts
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- Badge.vue
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- ClientNetworkView.vue
- PasswordCard.vue
- rewards/rules.ts
- SessionsCard.vue
- DashboardWidget.vue
- ClientNetworksView.vue
- RolesView.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- facebook/types.ts
- vue-router
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- PageBody.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- lucide-vue-next
- GoogleAdsObjectView.vue
- useSession
- rewards/service.ts
- GoogleAdsAlertsPanel.vue
- ad-tags.test.ts
- Query
- Field.vue
- Items
- ChecklistNotesCard.vue
- vitest
- formatDate
- FiscalDataCard.vue
- LoadersView.vue
- MyCommissionView.vue
- InviteView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- InvoicesView.vue
- FacebookObjectView.vue
- ReservedNetworksCard.vue
- GoogleAdsAccountDialog.vue
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- GamRunView.vue
- ad_tags/rules.ts
- GoogleAdsTabs.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- Dialog.vue
- Status.vue
- price_rules/types.ts
- FacebookRulesCard.vue
- FakeSource
- alerts/rules.ts
- MetricStylePopover.vue
- Pagination.vue
- MfaCard.vue
- TaskTimeline.vue
- Review Focus
- gam_tools/rules.ts
- AdTagPreview.vue
- SaveReportDialog.vue
- PayeeDialog.vue
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- errorText
- ChecklistView.vue
- lang
- firstValue
- FiscalDataCard.vue
- Input.vue
- FieldsPanel.vue
- overrides
- NetworkReviewActions.vue
- google_ads/rules.ts
- CurrencyCard.vue
- LoaderPreview.vue
- invoices/types.ts
- table.ts
- checklists/types.ts
- Field.vue
- AdTagInstallDialog.vue
- ClientNetworksCard.vue
- ProfileImageCard.vue
- adTagPermission
- tagStatus
- tasks/types.ts
- BarChart.vue
- FacebookHistoryPanel.vue
- Dialog.vue
- drag.ts
- InvoiceDocument.vue
- DashboardGrid.vue
- inventory/types.ts
- dashboards/types.ts
- 20. CDN dos scripts do site (cdn.groone.com)

## God Nodes (most connected - your core abstractions)
1. `t()` - 681 edges
2. `errorText()` - 386 edges
3. `vue` - 207 edges
4. `ApiError` - 146 edges
5. `lucide-vue-next` - 121 edges
6. `useSession` - 100 edges
7. `vue-sonner` - 100 edges
8. `vue-router` - 69 edges
9. `td` - 67 edges
10. `th` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (204 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (47): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+39 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (63): loadDraft(), BuilderState, builderState(), canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart() (+55 more)

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
Cohesion: 0.08
Nodes (50): amount, amountError, busy, emit, open, props, reason, reasonTouched (+42 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (54): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+46 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (40): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, { height: legendHeight } (+32 more)

### Community 12 - "PageBody.vue"
Cohesion: 0.09
Nodes (19): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+11 more)

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
Nodes (17): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+9 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (30): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+22 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (44): asked, check, countdown(), current, display, emit, label, open (+36 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (17): amount, amountError, busy, chosen, description, emit, open, options (+9 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (30): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, dirty (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (44): byManager(), campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName() (+36 more)

### Community 25 - "vue"
Cohesion: 0.14
Nodes (26): vue, current, current, current, rows, current, current, current (+18 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (38): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+30 more)

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

### Community 31 - "Input.vue"
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
Cohesion: 0.08
Nodes (29): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+21 more)

### Community 38 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (38): APPROVAL_LABELS, approvalFilter, APPROVALS, barFilters, canSeeChecklists, category, chosen(), columnLabel() (+30 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (37): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+29 more)

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
Nodes (44): emit, missingDates, options, props, setDate(), setMode(), filterable, delta (+36 more)

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.08
Nodes (27): api, busy, create(), description, duplicate, emit, name, open (+19 more)

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
Cohesion: 0.05
Nodes (66): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay() (+58 more)

### Community 51 - "google_ads/types.ts"
Cohesion: 0.09
Nodes (29): busy, chosen, daily, emit, monthly, open, props, save() (+21 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (56): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, FALLBACK, METRIC_COLOR, metricColors() (+48 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "api.ts"
Cohesion: 0.14
Nodes (19): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+11 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "metricColor"
Cohesion: 0.36
Nodes (10): colorVar(), metricColor(), chart, hourLabel(), boughtColor, chart, offeredColor, gainChart (+2 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (29): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+21 more)

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
Nodes (37): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+29 more)

### Community 71 - "session.ts"
Cohesion: 0.11
Nodes (16): pinia, theme, AccentId, CompanyRef, Me, Theme, accountService, authService (+8 more)

### Community 72 - "Key"
Cohesion: 0.04
Nodes (84): model, model, auditActions, dict, errors, fallbackError, Key, ad (+76 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 74 - "ClassifySitesDialog.vue"
Cohesion: 0.10
Nodes (31): ClientSiteDetail, categoryOptions, category, categoryOptions, changed, emit, keep, open (+23 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (43): applyView(), barFilters, busy, canCreate, canDelete, canUpdate, checking, choose() (+35 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (68): model, chosenDay(), settingsProblem(), toPayload(), absentUnits, armed, base, blocking (+60 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.09
Nodes (22): choose(), langs, session, open, session, LINES, showBootFailure(), auditText() (+14 more)

### Community 81 - "pick"
Cohesion: 0.09
Nodes (24): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), busy, canManage (+16 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.10
Nodes (28): valid, Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open (+20 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "reports/types.ts"
Cohesion: 0.06
Nodes (48): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, PERIOD_PRESETS, Lang, DashboardRun (+40 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 87 - "formatDate"
Cohesion: 0.10
Nodes (22): adTagsPath(), healthSummary(), share(), base, decimal, filled, health, integer (+14 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.08
Nodes (33): locale, busy, canManage, changed, current, load(), monthNames, months (+25 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "Badge.vue"
Cohesion: 0.15
Nodes (10): pick(), route, router, session, busy, confirm, load(), session (+2 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

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
Cohesion: 0.29
Nodes (10): Page, alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage (+2 more)

### Community 96 - "ClientNetworkView.vue"
Cohesion: 0.08
Nodes (31): dot, company, error, hasSeats, load(), lost, networks, router (+23 more)

### Community 97 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.08
Nodes (33): dayLabel, dayOptions, answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE (+25 more)

### Community 99 - "SessionsCard.vue"
Cohesion: 0.06
Nodes (34): copied, copyLine(), open, props, button, classes, Props, props (+26 more)

### Community 100 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (21): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+13 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "RolesView.vue"
Cohesion: 0.08
Nodes (27): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+19 more)

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
Cohesion: 0.06
Nodes (30): barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS, DEFAULT_VIEW (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "facebook/types.ts"
Cohesion: 0.08
Nodes (34): failure, left, load(), loading, model, options, props, SEARCHED (+26 more)

### Community 109 - "vue-router"
Cohesion: 0.10
Nodes (20): vue-router, vue-router, RouteMeta, safeNext(), busy, email, error, next (+12 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (28): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+20 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.12
Nodes (20): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+12 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+22 more)

### Community 116 - "PageBody.vue"
Cohesion: 0.10
Nodes (17): PAGE_WIDTH, allGroups, canManage, created(), creating, groups, load(), loaded (+9 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.09
Nodes (20): open, answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "lucide-vue-next"
Cohesion: 0.09
Nodes (24): priceRulesPath(), activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+16 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (24): channelKey(), isLevel(), objectState(), GoogleAdsTotals, base, children, currency, days (+16 more)

### Community 121 - "useSession"
Cohesion: 0.08
Nodes (29): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+21 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (17): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+9 more)

### Community 123 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 124 - "ad-tags.test.ts"
Cohesion: 0.13
Nodes (21): blankSettings(), newBlock(), adTagService(), AdTagService, AdTag, AdTagBlockKind, AdTagDevice, AdTagDraft (+13 more)

### Community 125 - "Query"
Cohesion: 0.19
Nodes (11): Query, costService, Cost, CostInput, CostKind, FormulaCheck, resultService, CompanyResults (+3 more)

### Community 126 - "Field.vue"
Cohesion: 0.10
Nodes (20): current, dirty, elsewhere, emit, error, kind, parsed, props (+12 more)

### Community 127 - "Items"
Cohesion: 0.14
Nodes (17): Items, contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef (+9 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (11): vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source (+3 more)

### Community 130 - "formatDate"
Cohesion: 0.12
Nodes (17): canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups, load() (+9 more)

### Community 131 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.07
Nodes (33): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, COLUMN_LABELS, columnLabel() (+25 more)

### Community 133 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 134 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), objectPath(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+28 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.04
Nodes (56): hourPoints(), moneyText(), priceRulePermission(), tierOptions(), canManage, ladderText(), maxOptions, minOptions (+48 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.09
Nodes (27): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, valid, valid, validCode(), awaiting (+19 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): cascadeFunnel(), gainQuery(), gainSeries(), modelCounts(), siteStatus(), funnel, active, automaticRuleCount (+44 more)

### Community 139 - "InvoicesView.vue"
Cohesion: 0.07
Nodes (23): barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel(), FILTERS (+15 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (66): budgetText(), decisions, loadError, page, pages, props, reason(), total (+58 more)

### Community 141 - "ReservedNetworksCard.vue"
Cohesion: 0.14
Nodes (14): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+6 more)

### Community 142 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.14
Nodes (14): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+6 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (40): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+32 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.08
Nodes (25): active, emit, kind, kindOptions, name, open, props, save() (+17 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.29
Nodes (9): GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput (+1 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.06
Nodes (37): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+29 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (59): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+51 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.09
Nodes (25): assignee, client, clientOptions, create(), description, domain, emit, open (+17 more)

### Community 150 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.10
Nodes (30): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+22 more)

### Community 152 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (58): t(), tn(), availableFilters, base, busy, COLUMN_LABELS, columnLabel(), columns (+50 more)

### Community 155 - "Dialog.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 156 - "Status.vue"
Cohesion: 0.10
Nodes (19): box, failed, initial, props, canSeeChecklists, canSeePriceRules, load(), loadError (+11 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.06
Nodes (33): model, alerts, emit, load(), loadError, markRead(), page, pages (+25 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.29
Nodes (13): alertDefinition(), AlertForm, alertForm(), AlertGroup, alertInput(), alertState(), compares(), conditionText() (+5 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 162 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 163 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.11
Nodes (18): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+10 more)

### Community 165 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (17): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+9 more)

### Community 168 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 169 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.10
Nodes (20): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+12 more)

### Community 173 - "errorText"
Cohesion: 0.24
Nodes (13): errorText(), load(), saveStart(), checkNow(), confirmEnd(), confirmRemove(), create(), load() (+5 more)

### Community 174 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): overrideSummary(), ROW_TONE, checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 175 - "lang"
Cohesion: 0.07
Nodes (25): @vue/test-utils@^2.5.1, @vue/test-utils, lang, client, managerChange, perms, settings, staffOptions (+17 more)

### Community 176 - "firstValue"
Cohesion: 0.16
Nodes (18): applyView(), sortOptions, applyView(), applyView(), sortOptions, applyView(), sortOptions, applyView() (+10 more)

### Community 177 - "FiscalDataCard.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 178 - "Input.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 179 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (20): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, CHANGE_KEYS, changeText(), CHANNEL_KEYS, LEVELS (+12 more)

### Community 183 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 186 - "table.ts"
Cohesion: 0.08
Nodes (25): td, th, events, load(), loadError, open, page, pages (+17 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.19
Nodes (14): checklistOverrideService, checklistService, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride, ChecklistOverrideInput (+6 more)

### Community 189 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 190 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (17): lucide-vue-next, latestCall(), add(), addBusy, addError, addOpen, canAssign, code (+9 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "adTagPermission"
Cohesion: 0.67
Nodes (3): adTagPermission(), canManage, canManage

### Community 194 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 195 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 196 - "FacebookHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 197 - "Dialog.vue"
Cohesion: 0.10
Nodes (21): reka-ui, props, up, panelItem(), railItem(), open, cn(), kindClass() (+13 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "InvoiceDocument.vue"
Cohesion: 0.28
Nodes (8): formatDate(), dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 200 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (23): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+15 more)

### Community 202 - "inventory/types.ts"
Cohesion: 0.15
Nodes (19): REPORT_CURRENCY, FilterOption, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, NetworkSite, SiteNetworkRef (+11 more)

### Community 203 - "dashboards/types.ts"
Cohesion: 0.16
Nodes (18): chosen, create(), emit, name, open, templates, Dashboard, DashboardFilters (+10 more)

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageBody.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `google_ads/types.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `api.ts`, `metricColor`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `Key`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `Badge.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `PasswordCard.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `vue-router`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `PageBody.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `rewards/service.ts`, `GoogleAdsAlertsPanel.vue`, `Field.vue`, `Items`, `ChecklistNotesCard.vue`, `formatDate`, `FiscalDataCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `price_rules/rules.ts`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `GamRunView.vue`, `ad_tags/rules.ts`, `GoogleAdsTabs.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `Pagination.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `PayeeDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `errorText`, `ChecklistView.vue`, `firstValue`, `FiscalDataCard.vue`, `Input.vue`, `FieldsPanel.vue`, `NetworkReviewActions.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `table.ts`, `Field.vue`, `AdTagInstallDialog.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `tagStatus`, `FacebookHistoryPanel.vue`, `Dialog.vue`, `InvoiceDocument.vue`, `inventory/types.ts`, `dashboards/types.ts`?**
  _High betweenness centrality (0.162) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PageBody.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `google_ads/types.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `api.ts`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `session.ts`, `Key`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `Badge.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `PasswordCard.vue`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `vue-router`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `PageBody.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `GoogleAdsAlertsPanel.vue`, `Field.vue`, `ChecklistNotesCard.vue`, `formatDate`, `FiscalDataCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `GamRunView.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `MetricStylePopover.vue`, `Pagination.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `PayeeDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `ChecklistView.vue`, `lang`, `FiscalDataCard.vue`, `Input.vue`, `FieldsPanel.vue`, `NetworkReviewActions.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `table.ts`, `Field.vue`, `AdTagInstallDialog.vue`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `BarChart.vue`, `FacebookHistoryPanel.vue`, `Dialog.vue`, `drag.ts`, `InvoiceDocument.vue`, `DashboardGrid.vue`, `inventory/types.ts`, `dashboards/types.ts`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050980392156862744 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageBody.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Input.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `google_ads/types.ts`, `lib/types.ts`, `api.ts`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `Badge.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `ClientNetworkView.vue`, `PasswordCard.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `vue-router`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `PageBody.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `GoogleAdsAlertsPanel.vue`, `Field.vue`, `ChecklistNotesCard.vue`, `formatDate`, `FiscalDataCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ReservedNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `GamRunView.vue`, `AdTagsView.vue`, `Dialog.vue`, `Status.vue`, `FacebookRulesCard.vue`, `MfaCard.vue`, `Review Focus`, `PayeeDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `ChecklistView.vue`, `FiscalDataCard.vue`, `NetworkReviewActions.vue`, `CurrencyCard.vue`, `table.ts`, `ClientNetworksCard.vue`, `ProfileImageCard.vue`, `FacebookHistoryPanel.vue`, `DashboardGrid.vue`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._