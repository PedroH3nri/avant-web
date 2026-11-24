# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 437 files · ~305,737 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5500 nodes · 14327 edges · 206 communities (200 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 162 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9e14b604`
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
- ClientsResultsView.vue
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
- errorText
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
- SessionsCard.vue
- .oxlintrc.json
- dayText
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
- PayeeDialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- Button.vue
- pick
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- reports/types.ts
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- ProfileImageCard.vue
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- Page
- ClientNetworkView.vue
- Card.vue
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
- vue
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
- InviteView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- InvoicesView.vue
- FacebookObjectView.vue
- ClientDocumentsCard.vue
- google_ads/types.ts
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- schedules/rules.ts
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- Dialog.vue
- FacebookEditView.vue
- price_rules/types.ts
- FacebookRulesCard.vue
- costs/service.ts
- alerts/rules.ts
- costs/rules.ts
- DashboardWidget.vue
- MfaCard.vue
- TaskTimeline.vue
- Review Focus
- gam_tools/rules.ts
- AdTagPreview.vue
- SaveReportDialog.vue
- tasks/rules.ts
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- NetworkReviewActions.vue
- ScheduleDialog.vue
- report-view.test.ts
- TeamTabs.vue
- FiscalDataCard.vue
- Input.vue
- GoogleAdsHistoryPanel.vue
- overrides
- priceRulePermission
- google_ads/rules.ts
- CurrencyCard.vue
- LoaderPreview.vue
- invoices/types.ts
- useSession
- ChecklistItemsView.vue
- GamRunView.vue
- FieldsPanel.vue
- ClientNetworksCard.vue
- t
- FakeSource
- SettingsView.vue
- tasks/types.ts
- BarChart.vue
- DashboardGrid.vue
- Button.vue
- drag.ts
- locale
- dashboards/types.ts
- priorityLabel
- schedules/types.ts
- GoogleAdsTabs.vue
- areaPaths
- niceTicks

## God Nodes (most connected - your core abstractions)
1. `t()` - 649 edges
2. `errorText()` - 383 edges
3. `vue` - 203 edges
4. `ApiError` - 144 edges
5. `lucide-vue-next` - 119 edges
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SeriesColor`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (206 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (50): builderState(), toInput(), toQuery(), withDimensions(), reportService, apiMessage(), askRemoveMetric(), busy (+42 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

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
Cohesion: 0.10
Nodes (39): busy, canTransfer, duplicate, emit, errors, form, open, props (+31 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (51): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+43 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (15): box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, LineSeries, padding (+7 more)

### Community 12 - "ClientsResultsView.vue"
Cohesion: 0.07
Nodes (44): applyView(), current, applyView(), current, applyView(), current, rows, current (+36 more)

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
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "index.ts"
Cohesion: 0.11
Nodes (19): LINES, showBootFailure(), auditText(), fill(), formatAgo(), loaded, loaders, loadLang() (+11 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (18): amount, amountError, busy, chosen, description, emit, open, options (+10 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (30): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (42): campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+34 more)

### Community 25 - "errorText"
Cohesion: 0.08
Nodes (32): errorText(), alerts, emit, load(), loadError, markRead(), page, pages (+24 more)

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
Nodes (56): adding, barFilters, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+48 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "FacebookAccountDialog.vue"
Cohesion: 0.08
Nodes (25): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+17 more)

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
Nodes (20): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+12 more)

### Community 38 - "ClientSiteView.vue"
Cohesion: 0.05
Nodes (50): ClientSiteDetail, canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route (+42 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.06
Nodes (37): applyView(), APPROVAL_LABELS, approvalFilter, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+29 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.09
Nodes (27): blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd(), addAdset(), alertText (+19 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (37): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+29 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.11
Nodes (27): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+19 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.15
Nodes (18): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+10 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.12
Nodes (29): loadDraft(), filterable, AXIS_CHARTS, BuilderState, canExport(), chartAllowed(), dimensionSources(), draftOf() (+21 more)

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.05
Nodes (45): broken, hue, initials, props, busy, create(), description, duplicate (+37 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.06
Nodes (45): Items, company, error, hasSeats, load(), lost, networks, router (+37 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (75): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), change(), countryName(), dailySeries(), daysOf() (+67 more)

### Community 51 - "google_ads/types.ts"
Cohesion: 0.13
Nodes (20): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsAlertSetting, GoogleAdsChangeOrigin, GoogleAdsKeyword (+12 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.10
Nodes (21): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+13 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (62): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, metricColors(), formatMetric(), toNumber(), metricText() (+54 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "SessionsCard.vue"
Cohesion: 0.08
Nodes (30): copied, copyLine(), open, props, copyToken(), copied, copyAll(), download() (+22 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "dayText"
Cohesion: 0.33
Nodes (6): dayLabel, dayOptions, chart, gainChart, dayText(), adUnitOptions

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (29): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+21 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment, fail() (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.09
Nodes (24): staffService, allOptions(), busy, canManage, confirmRemove(), dashboards, editing, formOpen (+16 more)

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
Cohesion: 0.05
Nodes (64): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+56 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.08
Nodes (35): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+27 more)

### Community 74 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (56): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef, ContractNetwork (+48 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "Button.vue"
Cohesion: 0.06
Nodes (32): button, classes, Props, props, safeNext(), busy, email, error (+24 more)

### Community 81 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.13
Nodes (16): Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "reports/types.ts"
Cohesion: 0.07
Nodes (45): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, PERIOD_PRESETS, Lang, emit (+37 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+29 more)

### Community 90 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): UserRef, busy, confirm, load(), session, status, unlink(), busy (+11 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "Page"
Cohesion: 0.29
Nodes (10): Page, alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage (+2 more)

### Community 96 - "ClientNetworkView.vue"
Cohesion: 0.08
Nodes (36): REPORT_CURRENCY, ContractSource, ContractStatus, FilterOption, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite (+28 more)

### Community 97 - "Card.vue"
Cohesion: 0.09
Nodes (19): busy, current, emit, mismatch, password, password2, ready, short (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "SessionsCard.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 100 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (20): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+12 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "RolesView.vue"
Cohesion: 0.09
Nodes (23): PAGE_WIDTH, assign(), canManage, canTeam, editable(), isMe(), load(), loaded (+15 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (53): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+45 more)

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
Cohesion: 0.05
Nodes (56): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+48 more)

### Community 109 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 110 - "events.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.07
Nodes (28): availableFilters, barFilters, base, columns, copied, DEFAULT_FILTERS, deleted, FILTER_LABELS (+20 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (16): templateService, apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError (+8 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (32): editableWidgets(), blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole(), withAudience() (+24 more)

### Community 116 - "ReservedNetworksCard.vue"
Cohesion: 0.13
Nodes (14): open, add(), addBusy, addError, addOpen, canAssign, code, emit (+6 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "lucide-vue-next"
Cohesion: 0.08
Nodes (22): lucide-vue-next, first, last, numbers, page, props, PAGE_SIZE, pageNumbers() (+14 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (23): model, PERIODS, isLevel(), base, children, currency, days, detail (+15 more)

### Community 121 - "useSession"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.16
Nodes (16): saveFile(), downloadInstall(), rewardService(), Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+8 more)

### Community 123 - "vue"
Cohesion: 0.05
Nodes (47): vue, td, th, events, load(), loadError, open, page (+39 more)

### Community 124 - "FacebookBudgetCard.vue"
Cohesion: 0.12
Nodes (14): current, dirty, elsewhere, emit, error, kind, parsed, props (+6 more)

### Community 125 - "api.ts"
Cohesion: 0.13
Nodes (21): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+13 more)

### Community 126 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+8 more)

### Community 127 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.11
Nodes (20): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+12 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (11): vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source (+3 more)

### Community 130 - "formatDate"
Cohesion: 0.07
Nodes (35): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+27 more)

### Community 131 - "checklists/rules.ts"
Cohesion: 0.20
Nodes (11): dollars(), evidenceText(), LANGUAGE_NAMES, progressPercent(), RowState, rowState(), STATES, ChecklistPerson (+3 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.09
Nodes (23): loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, guideNotes, guideOpen (+15 more)

### Community 133 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 134 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), objectPath(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+28 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (55): hourLabel(), hourPoints(), moneyText(), tierOptions(), chart, ladderText(), maxOptions, minOptions (+47 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (25): barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel(), FILTERS (+17 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (62): vue-router, vue-router, RouteMeta, budgetText(), ACCOUNT_QUALITY_URL, ACCOUNT_TONES, accountTone(), ALERT_KEYS (+54 more)

### Community 141 - "ClientDocumentsCard.vue"
Cohesion: 0.21
Nodes (13): approve(), busy, downloadFile(), emit, fail(), load(), overview, props (+5 more)

### Community 142 - "google_ads/types.ts"
Cohesion: 0.07
Nodes (34): dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily, dailyValue (+26 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (36): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+28 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (60): api, ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems() (+52 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "schedules/rules.ts"
Cohesion: 0.17
Nodes (15): hourOptions, zoneOptions, browserTimezone(), HOURS, hourText(), MONTH_DAYS, SCHEDULE_FREQUENCIES, ScheduleForm (+7 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.06
Nodes (53): Query, addPath(), emit, icon, ICONS, name, pages, pathText (+45 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (44): copied, copyLine(), line, open, props, adTagPermission(), installLine(), canManage (+36 more)

### Community 155 - "Dialog.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 156 - "FacebookEditView.vue"
Cohesion: 0.08
Nodes (22): dot, serverProblems(), ad, adset, detail, edit, externalId, failure (+14 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.12
Nodes (16): model, budgetHere, dirty, draft, emit, inputOf(), levelKey, load() (+8 more)

### Community 159 - "costs/service.ts"
Cohesion: 0.20
Nodes (10): costService, Cost, CostInput, CostKind, FormulaCheck, resultService, CompanyResults, CostLine (+2 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.29
Nodes (13): alertDefinition(), AlertForm, alertForm(), AlertGroup, alertInput(), alertState(), compares(), conditionText() (+5 more)

### Community 161 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 162 - "DashboardWidget.vue"
Cohesion: 0.07
Nodes (32): lang, pageCount(), pageSlice(), body, chartHeight, draft, draftKey, emit (+24 more)

### Community 163 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

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

### Community 169 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.10
Nodes (20): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+12 more)

### Community 173 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 174 - "ScheduleDialog.vue"
Cohesion: 0.13
Nodes (14): body, busy, emit, form, frequencyOptions, itemOptions, monthDayOptions, open (+6 more)

### Community 175 - "report-view.test.ts"
Cohesion: 0.09
Nodes (17): @vue/test-utils@^2.5.1, @vue/test-utils, client, managerChange, perms, settings, staffOptions, team (+9 more)

### Community 176 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 177 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 178 - "Input.vue"
Cohesion: 0.15
Nodes (10): model, choices, emit, invalid, name, open, props, roleIds (+2 more)

### Community 179 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.15
Nodes (13): changes, load(), loadError, origin, originOptions, page, pages, props (+5 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (23): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+15 more)

### Community 183 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 186 - "useSession"
Cohesion: 0.11
Nodes (16): pick(), route, router, session, choose(), langs, session, open (+8 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (20): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress (+12 more)

### Community 188 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 189 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 190 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (19): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+11 more)

### Community 191 - "t"
Cohesion: 0.07
Nodes (36): box, failed, initial, props, busy, drop(), input, pick() (+28 more)

### Community 193 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 196 - "DashboardGrid.vue"
Cohesion: 0.22
Nodes (10): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+2 more)

### Community 197 - "Button.vue"
Cohesion: 0.13
Nodes (17): reka-ui, props, up, panelItem(), railItem(), open, cn(), kindClass() (+9 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "locale"
Cohesion: 0.29
Nodes (7): locale, dates, monthName(), payee, PAYER, props, InvoiceItem

### Community 200 - "dashboards/types.ts"
Cohesion: 0.12
Nodes (30): widgetFailure(), chosen, create(), emit, name, open, templates, emptyRun() (+22 more)

### Community 201 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 202 - "schedules/types.ts"
Cohesion: 0.48
Nodes (5): scheduleService, Schedule, ScheduleDelivery, ScheduleInput, SchedulePage

### Community 203 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 204 - "areaPaths"
Cohesion: 0.60
Nodes (5): areaPaths, linePath(), tooltipLeft, xOf(), yOf()

### Community 205 - "niceTicks"
Cohesion: 0.67
Nodes (3): ticks, ticks, niceTicks()

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `ClientsResultsView.vue`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `errorText`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `SessionsCard.vue`, `dayText`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `Key`, `GoalsView.vue`, `PayeeDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `Button.vue`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ProfileImageCard.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `Card.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `ClassifySitesDialog.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `ConfigPanel.vue`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `rewards/service.ts`, `vue`, `FacebookBudgetCard.vue`, `api.ts`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `checklists/rules.ts`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ClientDocumentsCard.vue`, `google_ads/types.ts`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `schedules/rules.ts`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `FacebookEditView.vue`, `FacebookRulesCard.vue`, `alerts/rules.ts`, `costs/rules.ts`, `DashboardWidget.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `tasks/rules.ts`, `CompanyView.vue`, `AlertDialog.vue`, `NetworkReviewActions.vue`, `ScheduleDialog.vue`, `TeamTabs.vue`, `FiscalDataCard.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `useSession`, `ChecklistItemsView.vue`, `GamRunView.vue`, `FieldsPanel.vue`, `ClientNetworksCard.vue`, `SettingsView.vue`, `Button.vue`, `locale`, `dashboards/types.ts`, `priorityLabel`, `GoogleAdsTabs.vue`?**
  _High betweenness centrality (0.180) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `ClientsResultsView.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `errorText`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `SessionsCard.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `session.ts`, `Key`, `GoalsView.vue`, `PayeeDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `Button.vue`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ProfileImageCard.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworkView.vue`, `Card.vue`, `SessionsCard.vue`, `ClassifySitesDialog.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `ConfigPanel.vue`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `useSession`, `FacebookBudgetCard.vue`, `api.ts`, `GroupedBarChart.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ClientDocumentsCard.vue`, `google_ads/types.ts`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `Dialog.vue`, `FacebookEditView.vue`, `FacebookRulesCard.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `AdTagPreview.vue`, `SaveReportDialog.vue`, `CompanyView.vue`, `AlertDialog.vue`, `NetworkReviewActions.vue`, `ScheduleDialog.vue`, `report-view.test.ts`, `TeamTabs.vue`, `FiscalDataCard.vue`, `Input.vue`, `GoogleAdsHistoryPanel.vue`, `CurrencyCard.vue`, `LoaderPreview.vue`, `useSession`, `ChecklistItemsView.vue`, `GamRunView.vue`, `FieldsPanel.vue`, `ClientNetworksCard.vue`, `t`, `SettingsView.vue`, `BarChart.vue`, `DashboardGrid.vue`, `Button.vue`, `drag.ts`, `locale`, `dashboards/types.ts`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `ClientsResultsView.vue`, `StaffView.vue`, `index.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `vue-sonner`, `ClientSiteView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `SessionsCard.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `Key`, `GoalsView.vue`, `PayeeDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Button.vue`, `pick`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ProfileImageCard.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `ClientNetworkView.vue`, `Card.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `ClassifySitesDialog.vue`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `lucide-vue-next`, `GoogleAdsObjectView.vue`, `vue`, `FacebookBudgetCard.vue`, `api.ts`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `formatDate`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `InvoicesView.vue`, `FacebookObjectView.vue`, `ClientDocumentsCard.vue`, `google_ads/types.ts`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AdTagsView.vue`, `Dialog.vue`, `FacebookEditView.vue`, `FacebookRulesCard.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `Review Focus`, `CompanyView.vue`, `AlertDialog.vue`, `NetworkReviewActions.vue`, `ScheduleDialog.vue`, `FiscalDataCard.vue`, `GoogleAdsHistoryPanel.vue`, `CurrencyCard.vue`, `useSession`, `ChecklistItemsView.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `t`, `SettingsView.vue`, `dashboards/types.ts`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._