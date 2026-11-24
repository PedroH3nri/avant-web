# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 452 files · ~317,896 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5667 nodes · 14799 edges · 210 communities (204 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 163 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e89d5aa7`
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
- InstallCheckCell.vue
- steps
- ServiceLineDialog.vue
- SavedViewsBar.vue
- GoogleAdsView.vue
- sortValue
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
- session.ts
- SiteDetailView.vue
- ClientSitesView.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- FacebookJobDialog.vue
- contracts/service.ts
- NewGroupDialog.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- reports/rules.ts
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- google_ads/types.ts
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
- vitest
- draft-rules.ts
- GoalsView.vue
- ClassifySitesDialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- theme.ts
- table.ts
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- ConfigPanel.vue
- AddWidgetDialog.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- api.ts
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- DataTable.vue
- ClientNetworkView.vue
- Card.vue
- rewards/rules.ts
- SessionsCard.vue
- reports/types.ts
- ClientNetworksView.vue
- RolesView.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- facebook/types.ts
- index.ts
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- tasks/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- GoogleAdsObjectView.vue
- useSession
- rewards/service.ts
- CustomThemeDialog.vue
- ad-tags.test.ts
- ReservedNetworksCard.vue
- Button.vue
- Items
- ChecklistNotesCard.vue
- vitest
- formatDate
- SettingsView.vue
- LoadersView.vue
- MyCommissionView.vue
- InviteView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- invoices/types.ts
- FacebookObjectView.vue
- costs/rules.ts
- GoogleAdsAccountDialog.vue
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- checklists/rules.ts
- InvoicesView.vue
- Dialog.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- GoogleAdsHistoryPanel.vue
- ApiError
- price_rules/types.ts
- FacebookRulesCard.vue
- FacebookHistoryPanel.vue
- alerts/rules.ts
- MetricStylePopover.vue
- RolesPanel.vue
- MfaCard.vue
- TaskTimeline.vue
- ad-tags.test.ts
- gam_tools/rules.ts
- AdTagPreview.vue
- FieldsPanel.vue
- costs/service.ts
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- pagination.ts
- clients/service.ts
- Review Focus
- ClientNetworkView.vue
- FiscalDataCard.vue
- Input.vue
- AdjustmentDialog.vue
- overrides
- ClientNetworksCard.vue
- google_ads/rules.ts
- formatDate
- LoaderPreview.vue
- ThemeCard.vue
- InvoiceServicesView.vue
- ChecklistItemsView.vue
- priorityLabel
- AdTagInstallDialog.vue
- FacebookCampaignForm.vue
- ProfileImageCard.vue
- ClientSiteView.vue
- listTable.ts
- tasks/types.ts
- BarChart.vue
- SaveReportDialog.vue
- DashboardGrid.vue
- drag.ts
- Field.vue
- CurrencyCard.vue
- errorText
- inventory/types.ts
- dashboards/types.ts
- commission-components.test.ts
- 20. CDN dos scripts do site (cdn.groone.com)
- GoogleAdsTabs.vue
- choose
- priceRulePermission
- FakeSource

## God Nodes (most connected - your core abstractions)
1. `t()` - 685 edges
2. `errorText()` - 389 edges
3. `vue` - 210 edges
4. `ApiError` - 147 edges
5. `lucide-vue-next` - 124 edges
6. `vue-sonner` - 101 edges
7. `useSession` - 100 edges
8. `vue-router` - 69 edges
9. `vitest` - 67 edges
10. `td` - 67 edges

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

## Communities (210 total, 6 thin omitted)

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
Cohesion: 0.06
Nodes (46): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+38 more)

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
Nodes (28): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+20 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (39): busy, canTransfer, duplicate, emit, errors, form, open, props (+31 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (50): adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters, barFilters (+42 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (38): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+30 more)

### Community 12 - "ClientsResultsView.vue"
Cohesion: 0.08
Nodes (35): current, current, current, rows, current, current, clients, COLUMN_LABELS (+27 more)

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
Cohesion: 0.06
Nodes (40): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), busy, canEditGroone (+32 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (47): tn(), asked, check, countdown(), current, display, emit, label (+39 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (17): amount, amountError, busy, chosen, description, emit, open, options (+9 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (31): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, dirty (+23 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (44): byManager(), campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName() (+36 more)

### Community 25 - "sortValue"
Cohesion: 0.14
Nodes (20): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+12 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (28): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+20 more)

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

### Community 31 - "FacebookAccountDialog.vue"
Cohesion: 0.05
Nodes (32): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+24 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (43): FacebookTab, model, props, TABS, FACEBOOK_CONNECT_URL, accounts, canConnect, canManage (+35 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.11
Nodes (23): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), currency (+15 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "session.ts"
Cohesion: 0.12
Nodes (25): pinia, ThemeColors, theme, AccentId, CompanyRef, Lang, Me, Theme (+17 more)

### Community 38 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (42): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+34 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.14
Nodes (19): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+11 more)

### Community 45 - "contracts/service.ts"
Cohesion: 0.27
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

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
Nodes (76): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+68 more)

### Community 51 - "reports/rules.ts"
Cohesion: 0.08
Nodes (44): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), AXIS_CHARTS (+36 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "toNumber"
Cohesion: 0.04
Nodes (72): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, lang, FALLBACK, METRIC_COLOR (+64 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "google_ads/types.ts"
Cohesion: 0.16
Nodes (18): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccount, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAlert, GoogleAdsAlertKind, GoogleAdsAlertSetting, GoogleAdsChange (+10 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "metricColor"
Cohesion: 0.36
Nodes (10): colorVar(), metricColor(), chart, hourLabel(), boughtColor, chart, offeredColor, gainChart (+2 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (17): busy, canChange, emit, manager, managerId, next, NOTE_KEY, open (+9 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment, fail() (+12 more)

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
Nodes (38): sameComparison(), savedPeriod(), toQuery(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download() (+30 more)

### Community 71 - "vitest"
Cohesion: 0.07
Nodes (20): vitest, LINES, showBootFailure(), startLang(), boot(), i18nWithBrokenEnglish(), i18nWithSlowEnglish(), catalog (+12 more)

### Community 72 - "draft-rules.ts"
Cohesion: 0.05
Nodes (67): auditActions, dict, errors, fallbackError, Key, ad, blankCard(), buttonOptions (+59 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.08
Nodes (34): locale, mark, percent, props, share, tone, companyGoalYears(), goalTone() (+26 more)

### Community 74 - "ClassifySitesDialog.vue"
Cohesion: 0.10
Nodes (31): NetworkSite, categoryOptions, category, categoryOptions, changed, emit, keep, open (+23 more)

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
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "theme.ts"
Cohesion: 0.15
Nodes (15): toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), applyCustomCss(), customColors (+7 more)

### Community 81 - "table.ts"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.09
Nodes (31): title, monthName(), previousMonth(), stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail() (+23 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.13
Nodes (16): Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, filterable, LIMITS, newField, periods (+5 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 87 - "formatDate"
Cohesion: 0.10
Nodes (22): healthSummary(), share(), AdTagHealth, base, decimal, filled, health, integer (+14 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (28): vue-sonner, model, permissionGroupLabel(), busy, category, chosen, emit, groups (+20 more)

### Community 90 - "api.ts"
Cohesion: 0.17
Nodes (17): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+9 more)

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

### Community 95 - "DataTable.vue"
Cohesion: 0.15
Nodes (17): Page, events, load(), loadError, open, page, pages, props (+9 more)

### Community 96 - "ClientNetworkView.vue"
Cohesion: 0.12
Nodes (18): props, seats, company, error, hasSeats, load(), lost, networks (+10 more)

### Community 97 - "Card.vue"
Cohesion: 0.07
Nodes (26): vue, open, session, busy, current, emit, mismatch, password (+18 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.08
Nodes (34): dayLabel, dayOptions, answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE (+26 more)

### Community 99 - "SessionsCard.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.07
Nodes (46): Task 3: Web — tipos, serviço e regras do construtor, @vueuse/core@^15.0.0, @vue/test-utils, @vueuse/core, body, chartHeight, draft, draftKey (+38 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.05
Nodes (44): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService (+36 more)

### Community 102 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (55): cascadeFunnel(), cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus() (+47 more)

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
Cohesion: 0.08
Nodes (39): failure, left, load(), loading, model, options, props, SEARCHED (+31 more)

### Community 109 - "index.ts"
Cohesion: 0.05
Nodes (37): vue-router, choose(), langs, session, vue-router, RouteMeta, auditText(), chooseLang() (+29 more)

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
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+22 more)

### Community 116 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.08
Nodes (25): FilterOption, activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+17 more)

### Community 120 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (24): channelKey(), isLevel(), objectState(), GoogleAdsTotals, base, children, currency, days (+16 more)

### Community 121 - "useSession"
Cohesion: 0.08
Nodes (30): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+22 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (16): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+8 more)

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.13
Nodes (26): channels(), COLOR_KEYS, contrast(), customThemeCss(), isDarkBackground(), isHexColor(), luminance(), mix() (+18 more)

### Community 124 - "ad-tags.test.ts"
Cohesion: 0.09
Nodes (32): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+24 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (17): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+9 more)

### Community 126 - "Button.vue"
Cohesion: 0.33
Nodes (5): open, button, classes, Props, props

### Community 127 - "Items"
Cohesion: 0.22
Nodes (9): Items, contractService, Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary (+1 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.11
Nodes (20): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+12 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "formatDate"
Cohesion: 0.07
Nodes (35): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+27 more)

### Community 131 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

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
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "invoices/types.ts"
Cohesion: 0.27
Nodes (13): UserRef, FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+5 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (76): current, dirty, elsewhere, emit, error, kind, parsed, props (+68 more)

### Community 141 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 142 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.06
Nodes (35): model, dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily (+27 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (36): copyLine(), copyToken(), busy, canManage, created(), creating, keys, load() (+28 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (31): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+23 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (63): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+55 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "checklists/rules.ts"
Cohesion: 0.20
Nodes (11): dollars(), evidenceText(), LANGUAGE_NAMES, progressPercent(), RowState, rowState(), STATES, ChecklistPerson (+3 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (22): PAGE_WIDTH, barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel() (+14 more)

### Community 152 - "Dialog.vue"
Cohesion: 0.09
Nodes (23): reka-ui, props, up, panelItem(), railItem(), open, cn(), kindClass() (+15 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (53): copied, open, props, t(), availableFilters, base, busy, COLUMN_LABELS (+45 more)

### Community 155 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.13
Nodes (17): td, th, changes, load(), loadError, origin, originOptions, page (+9 more)

### Community 156 - "ApiError"
Cohesion: 0.09
Nodes (19): pick(), route, router, session, ApiError, busy, confirm, load() (+11 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.07
Nodes (32): model, alerts, emit, load(), loadError, markRead(), page, pages (+24 more)

### Community 159 - "FacebookHistoryPanel.vue"
Cohesion: 0.18
Nodes (11): changes, load(), loadError, origin, originOptions, page, pages, props (+3 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 162 - "RolesPanel.vue"
Cohesion: 0.12
Nodes (23): Localized, SiteScope, busy, canManage, deleteOpen, deleting, dialog, editing (+15 more)

### Community 163 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "ad-tags.test.ts"
Cohesion: 0.12
Nodes (22): adTagPermission(), blankSettings(), newBlock(), adTagService(), AdTagService, AdTag, AdTagDevice, AdTagDraft (+14 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 169 - "costs/service.ts"
Cohesion: 0.19
Nodes (11): Query, costService, Cost, CostInput, CostKind, FormulaCheck, resultService, CompanyResults (+3 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.11
Nodes (17): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+9 more)

### Community 173 - "pagination.ts"
Cohesion: 0.40
Nodes (4): numbers, PAGE_SIZE, pageCount(), pageNumbers()

### Community 174 - "clients/service.ts"
Cohesion: 0.17
Nodes (18): CompanyStatus, NOTE_MAX, NOTE_MIN, STAFF_STATUSES, STATUS_TONE, AuditEntry, Client, ClientCompanyRef (+10 more)

### Community 175 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 176 - "ClientNetworkView.vue"
Cohesion: 0.13
Nodes (15): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+7 more)

### Community 177 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 178 - "Input.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 179 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "ClientNetworksCard.vue"
Cohesion: 0.08
Nodes (22): lucide-vue-next, first, last, page, props, dot, IntegrationKind, add() (+14 more)

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (20): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, CHANGE_KEYS, changeText(), CHANNEL_KEYS, LEVELS (+12 more)

### Community 183 - "formatDate"
Cohesion: 0.29
Nodes (7): dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (13): atLimit, choose(), customs, editing, editorOpen, limit, remove(), removeBusy (+5 more)

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (20): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress (+12 more)

### Community 188 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 189 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 190 - "FacebookCampaignForm.vue"
Cohesion: 0.15
Nodes (16): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+8 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "ClientSiteView.vue"
Cohesion: 0.10
Nodes (19): box, failed, initial, props, canSeeChecklists, canSeePriceRules, load(), loadError (+11 more)

### Community 193 - "listTable.ts"
Cohesion: 0.31
Nodes (9): readShown(), useBarFilters(), useLocalBarFilters(), listOrder(), ListTableSetup, readColumns(), useListTable(), ViewSort (+1 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 196 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 197 - "DashboardGrid.vue"
Cohesion: 0.22
Nodes (10): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+2 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "Field.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.22
Nodes (8): busy, chosen, currencies, currencyLabel(), missing, options, save(), session

### Community 201 - "errorText"
Cohesion: 0.33
Nodes (9): errorText(), load(), checkNow(), confirmEnd(), confirmRemove(), create(), load(), assign() (+1 more)

### Community 202 - "inventory/types.ts"
Cohesion: 0.19
Nodes (16): ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, ClientSiteDetail, SiteNetworkRef, SiteResponsible, SyncRun (+8 more)

### Community 203 - "dashboards/types.ts"
Cohesion: 0.11
Nodes (32): widgetFailure(), chosen, create(), emit, name, open, templates, emptyRun() (+24 more)

### Community 204 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 207 - "choose"
Cohesion: 0.67
Nodes (3): applyView(), barFilters, choose()

### Community 208 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `ClientsResultsView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `sortValue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `contracts/service.ts`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `reports/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `metricColor`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `draft-rules.ts`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `theme.ts`, `table.ts`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `DataTable.vue`, `ClientNetworkView.vue`, `Card.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `tasks/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `GoogleAdsObjectView.vue`, `useSession`, `rewards/service.ts`, `CustomThemeDialog.vue`, `ad-tags.test.ts`, `ReservedNetworksCard.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `formatDate`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `costs/rules.ts`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `InvoicesView.vue`, `Dialog.vue`, `GoogleAdsHistoryPanel.vue`, `ApiError`, `FacebookRulesCard.vue`, `FacebookHistoryPanel.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `RolesPanel.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FieldsPanel.vue`, `CompanyView.vue`, `AlertDialog.vue`, `clients/service.ts`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `Input.vue`, `AdjustmentDialog.vue`, `ClientNetworksCard.vue`, `formatDate`, `LoaderPreview.vue`, `ThemeCard.vue`, `InvoiceServicesView.vue`, `ChecklistItemsView.vue`, `priorityLabel`, `AdTagInstallDialog.vue`, `FacebookCampaignForm.vue`, `ProfileImageCard.vue`, `ClientSiteView.vue`, `SaveReportDialog.vue`, `Field.vue`, `CurrencyCard.vue`, `errorText`, `inventory/types.ts`, `dashboards/types.ts`, `GoogleAdsTabs.vue`?**
  _High betweenness centrality (0.201) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `ClientsResultsView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `theme.ts`, `table.ts`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `DataTable.vue`, `ClientNetworkView.vue`, `Card.vue`, `rewards/rules.ts`, `SessionsCard.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `GoogleAdsObjectView.vue`, `useSession`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `ChecklistNotesCard.vue`, `formatDate`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `AdTagsView.vue`, `GoogleAdsHistoryPanel.vue`, `ApiError`, `FacebookRulesCard.vue`, `FacebookHistoryPanel.vue`, `RolesPanel.vue`, `MfaCard.vue`, `gam_tools/rules.ts`, `CompanyView.vue`, `AlertDialog.vue`, `Review Focus`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `AdjustmentDialog.vue`, `ClientNetworksCard.vue`, `ThemeCard.vue`, `InvoiceServicesView.vue`, `ChecklistItemsView.vue`, `ProfileImageCard.vue`, `ClientSiteView.vue`, `Field.vue`, `CurrencyCard.vue`, `dashboards/types.ts`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050980392156862744 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `Card.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `ClientsResultsView.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookAccountDialog.vue`, `FacebookView.vue`, `ResultsView.vue`, `session.ts`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `reports/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `vitest`, `draft-rules.ts`, `GoalsView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `theme.ts`, `table.ts`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `DataTable.vue`, `ClientNetworkView.vue`, `SessionsCard.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `RolesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `GoogleAdsObjectView.vue`, `useSession`, `CustomThemeDialog.vue`, `ad-tags.test.ts`, `ReservedNetworksCard.vue`, `Button.vue`, `ChecklistNotesCard.vue`, `formatDate`, `SettingsView.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `InviteView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `Dialog.vue`, `AdTagsView.vue`, `GoogleAdsHistoryPanel.vue`, `ApiError`, `FacebookRulesCard.vue`, `FacebookHistoryPanel.vue`, `MetricStylePopover.vue`, `RolesPanel.vue`, `MfaCard.vue`, `TaskTimeline.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FieldsPanel.vue`, `CompanyView.vue`, `AlertDialog.vue`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `Input.vue`, `AdjustmentDialog.vue`, `ClientNetworksCard.vue`, `formatDate`, `LoaderPreview.vue`, `ThemeCard.vue`, `InvoiceServicesView.vue`, `ChecklistItemsView.vue`, `AdTagInstallDialog.vue`, `FacebookCampaignForm.vue`, `ProfileImageCard.vue`, `ClientSiteView.vue`, `listTable.ts`, `BarChart.vue`, `SaveReportDialog.vue`, `DashboardGrid.vue`, `drag.ts`, `Field.vue`, `CurrencyCard.vue`, `inventory/types.ts`, `dashboards/types.ts`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._