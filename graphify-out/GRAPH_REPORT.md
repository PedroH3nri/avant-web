# Graph Report - avant-web  (2026-11-25)

## Corpus Check
- 454 files · ~320,154 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5694 nodes · 14875 edges · 202 communities (195 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 164 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7fe78140`
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
- FacebookAdsetForm.vue
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
- facebook/types.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- Button.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- errorText
- SiteDetailView.vue
- ClientSitesView.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- FacebookJobDialog.vue
- Input.vue
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- dashboards/rules.ts
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- index.ts
- .oxlintrc.json
- RolesView.vue
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
- draft-rules.ts
- GoogleAdsObjectView.vue
- lang
- @vueuse/core
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
- google_ads/rules.ts
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- ClassifySitesDialog.vue
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- reports/rules.ts
- FacebookEditView.vue
- rewards/rules.ts
- GoalsView.vue
- DashboardWidget.vue
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- GroupedBarChart.vue
- api.ts
- events.ts
- reports/types.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- AdTagBlockCard.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- useSession
- ApiKeyDialog.vue
- BarChart.vue
- CustomThemeDialog.vue
- ClientsResultsView.vue
- ReservedNetworksCard.vue
- formatDate
- session.ts
- ChecklistNotesCard.vue
- vitest
- PasswordCard.vue
- FiscalDataCard.vue
- LoadersView.vue
- api
- MyCommissionView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- invoices/types.ts
- Field.vue
- inventory/types.ts
- sortValue
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- checklists/rules.ts
- InvoicesView.vue
- ClientSiteView.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- table.ts
- AdjustmentDialog.vue
- price_rules/types.ts
- FacebookObjectView.vue
- PayeeDialog.vue
- alerts/rules.ts
- MetricStylePopover.vue
- RolesPanel.vue
- FacebookCampaignForm.vue
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- FacebookRulesCard.vue
- GamRunView.vue
- lucide-vue-next
- vite.embed.config.ts
- AlertDialog.vue
- GoogleAdsAlertsPanel.vue
- metricColor
- dashboards/types.ts
- ClientNetworkView.vue
- DashboardGrid.vue
- GoogleAdsHistoryPanel.vue
- Key
- overrides
- RevenueStatusBadge.vue
- drag.ts
- NetworkReviewActions.vue
- LoaderPreview.vue
- Review Focus
- InvoiceServicesView.vue
- checklists/types.ts
- AdTagInstallDialog.vue
- formatDate
- ProfileImageCard.vue
- AddWidgetDialog.vue
- vue-sonner
- tasks/types.ts
- ChecklistView.vue
- SaveReportDialog.vue
- AccountStatus.vue
- CurrencyCard.vue
- priceRulePermission
- 20. CDN dos scripts do site (cdn.groone.com)
- PageBody.vue
- FakeSource

## God Nodes (most connected - your core abstractions)
1. `t()` - 685 edges
2. `errorText()` - 389 edges
3. `vue` - 211 edges
4. `ApiError` - 147 edges
5. `lucide-vue-next` - 123 edges
6. `vue-sonner` - 101 edges
7. `useSession` - 99 edges
8. `vue-router` - 69 edges
9. `vitest` - 69 edges
10. `td` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ChartType`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts

## Import Cycles
- None detected.

## Communities (202 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles, canSeeRoles (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (62): loadDraft(), BuilderState, builderState(), canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart() (+54 more)

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
Cohesion: 0.11
Nodes (33): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+25 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (52): props, seats, inviteTaken(), busy, cancel(), canEditCompany, canInvite, canManage (+44 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (55): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+47 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (19): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+11 more)

### Community 12 - "FacebookAdsetForm.vue"
Cohesion: 0.13
Nodes (16): adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions, pixels (+8 more)

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

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (43): asked, check, countdown(), current, display, emit, label, open (+35 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (30): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (46): GoogleAdsTab, model, props, TABS, campaignsPath(), accounts, applying, applySuffix() (+38 more)

### Community 25 - "facebook/types.ts"
Cohesion: 0.08
Nodes (37): failure, left, load(), loading, model, options, props, SEARCHED (+29 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (42): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+34 more)

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
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "Button.vue"
Cohesion: 0.09
Nodes (21): button, classes, Props, props, busy, confirm, load(), session (+13 more)

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

### Community 37 - "errorText"
Cohesion: 0.04
Nodes (50): vue-router, pick(), route, router, session, vue-router, RouteMeta, errorText() (+42 more)

### Community 38 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (44): applyView(), APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category (+36 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.09
Nodes (30): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), account, accounts, adCount (+22 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (38): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+30 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.14
Nodes (19): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+11 more)

### Community 45 - "Input.vue"
Cohesion: 0.07
Nodes (28): props, up, panelItem(), open, model, model, cn(), kindClass() (+20 more)

### Community 46 - "GroupsView.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

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
Cohesion: 0.04
Nodes (69): compare, options, period, selected, countryName(), dailySeries(), daysOf(), hourLabel() (+61 more)

### Community 51 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (25): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+17 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (63): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, metricColors(), change(), formatMetric() (+55 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "index.ts"
Cohesion: 0.05
Nodes (39): choose(), langs, session, open, session, LINES, showBootFailure(), auditText() (+31 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (31): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+23 more)

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
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.07
Nodes (38): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+30 more)

### Community 71 - "draft-rules.ts"
Cohesion: 0.07
Nodes (46): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+38 more)

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.10
Nodes (21): isLevel(), base, children, currency, days, detail, externalId, keywords (+13 more)

### Community 73 - "lang"
Cohesion: 0.13
Nodes (12): @vue/test-utils, lang, client, managerChange, perms, settings, staffOptions, team (+4 more)

### Community 74 - "@vueuse/core"
Cohesion: 0.16
Nodes (16): vue, box, failed, initial, props, readShown(), useBarFilters(), useLocalBarFilters() (+8 more)

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
Nodes (65): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+57 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "ad_tags/rules.ts"
Cohesion: 0.08
Nodes (41): visible, adTagPermission(), adTagsPath(), anchorEdgeOn(), blankSettings(), blockOnPage(), blockProblem(), chosenDay() (+33 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.04
Nodes (53): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+45 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (25): stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS, filterLabel(), FILTERS (+17 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.15
Nodes (16): valid, Choice, choice, choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.10
Nodes (22): open, add(), adding, deleteOpen, deleting, draft, editing, editOpen (+14 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, FilterOption, LIMITS, newField, periods (+5 more)

### Community 86 - "google_ads/rules.ts"
Cohesion: 0.05
Nodes (54): busy, chosen, daily, emit, monthly, open, props, save() (+46 more)

### Community 87 - "formatDate"
Cohesion: 0.10
Nodes (23): healthSummary(), share(), unitName(), dayHint, base, decimal, filled, health (+15 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (21): amountError, busy, canManage, changed, current, load(), monthNames, months (+13 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (35): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+27 more)

### Community 90 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+14 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.31
Nodes (9): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview (+1 more)

### Community 96 - "reports/rules.ts"
Cohesion: 0.09
Nodes (30): emit, missingDates, options, props, setDate(), setMode(), filterable, path (+22 more)

### Community 97 - "FacebookEditView.vue"
Cohesion: 0.10
Nodes (20): serverProblems(), ad, adset, detail, edit, externalId, failure, following (+12 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.08
Nodes (34): dayLabel, dayOptions, chart, answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning() (+26 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 100 - "DashboardWidget.vue"
Cohesion: 0.08
Nodes (30): reka-ui, body, chartHeight, draft, draftKey, emit, failure, goal (+22 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): saved, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (50): dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency, decisionFirstFill() (+42 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (40): childLevel(), accountId, accountOptions, accounts, allSelected, availableFilters, barFilters, base (+32 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.06
Nodes (30): latestCall(), barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 109 - "api.ts"
Cohesion: 0.10
Nodes (25): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+17 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "reports/types.ts"
Cohesion: 0.07
Nodes (37): Task 3: Web — tipos, serviço e regras do construtor, vitest, FALLBACK, METRIC_COLOR, emit, period, props, customMetricService (+29 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+11 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+22 more)

### Community 116 - "AdTagBlockCard.vue"
Cohesion: 0.12
Nodes (21): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+13 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.07
Nodes (37): saveFile(), InstallSummary, downloadInstall(), answer, answerOptions, busy, columns, confirmRemove() (+29 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (24): FilterOption, priceRulesPath(), activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies (+16 more)

### Community 120 - "useSession"
Cohesion: 0.22
Nodes (13): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+5 more)

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.05
Nodes (43): copyLine(), busy, catalog, chosen, copied, copyToken(), create(), DAYS (+35 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.09
Nodes (49): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+41 more)

### Community 124 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (23): CostKind, clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+15 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (17): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+9 more)

### Community 126 - "formatDate"
Cohesion: 0.11
Nodes (19): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+11 more)

### Community 127 - "session.ts"
Cohesion: 0.08
Nodes (33): pinia, ThemeColors, theme, AnimationArea, CompanyRef, Lang, Me, Theme (+25 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 131 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.07
Nodes (31): copied, open, props, base, COLUMN_LABELS, columnLabel(), columns, companies (+23 more)

### Community 133 - "api"
Cohesion: 0.22
Nodes (12): api, Query, Items, Page, clientService, contractService, goalService, ClientNetworkDetail (+4 more)

### Community 134 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), objectPath(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+28 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+14 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): cascadeFunnel(), cascadeLadder(), gainQuery(), gainSeries(), siteStatus(), funnel, ladder, active (+44 more)

### Community 139 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 141 - "inventory/types.ts"
Cohesion: 0.20
Nodes (16): ContractSource, ContractStatus, ClientNetwork, ClientRef, ClientSite, ClientSiteDetail, NetworkContract, NetworkSite (+8 more)

### Community 142 - "sortValue"
Cohesion: 0.17
Nodes (12): applyView(), sortOptions, applyView(), sortOptions, sortOptions, applyView(), sortOptions, sortOptions (+4 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.08
Nodes (25): active, emit, kind, kindOptions, name, open, props, save() (+17 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.16
Nodes (15): GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (36): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+28 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (63): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+55 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.09
Nodes (25): assignee, client, clientOptions, create(), description, domain, emit, open (+17 more)

### Community 150 - "checklists/rules.ts"
Cohesion: 0.14
Nodes (18): title, choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, monthName(), NOTE_MAX (+10 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.06
Nodes (46): current, current, applyView(), current, rows, current, applyView(), barFilters (+38 more)

### Community 152 - "ClientSiteView.vue"
Cohesion: 0.12
Nodes (16): canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route, router (+8 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.05
Nodes (53): t(), tn(), availableFilters, base, busy, COLUMN_LABELS, columnLabel(), columns (+45 more)

### Community 155 - "table.ts"
Cohesion: 0.06
Nodes (39): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers() (+31 more)

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.14
Nodes (18): amount, busy, emit, open, props, reason, reasonTouched, save() (+10 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (80): current, dirty, elsewhere, emit, error, kind, parsed, props (+72 more)

### Community 159 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.16
Nodes (16): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+8 more)

### Community 162 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (26): pick(), metricOptions, options, ruleEnd(), setGoal(), roleName(), roleOptions, busy (+18 more)

### Community 163 - "FacebookCampaignForm.vue"
Cohesion: 0.15
Nodes (16): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+8 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.11
Nodes (18): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+10 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.12
Nodes (16): model, alerts, emit, load(), loadError, markRead(), page, pages (+8 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.10
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.13
Nodes (14): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+6 more)

### Community 168 - "FacebookRulesCard.vue"
Cohesion: 0.14
Nodes (15): budgetHere, dirty, draft, emit, inputOf(), levelKey, load(), loadError (+7 more)

### Community 169 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 170 - "lucide-vue-next"
Cohesion: 0.06
Nodes (33): lucide-vue-next, dot, IntegrationKind, canManage, company, companyId, groupPeople(), groups (+25 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 173 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.14
Nodes (14): alerts, emit, load(), loadError, markRead(), page, pages, props (+6 more)

### Community 174 - "metricColor"
Cohesion: 0.39
Nodes (9): colorVar(), metricColor(), hourLabel(), boughtColor, chart, offeredColor, gainChart, chart (+1 more)

### Community 175 - "dashboards/types.ts"
Cohesion: 0.11
Nodes (33): chosen, create(), emit, name, open, templates, emptyRun(), runKey() (+25 more)

### Community 176 - "ClientNetworkView.vue"
Cohesion: 0.10
Nodes (22): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+14 more)

### Community 177 - "DashboardGrid.vue"
Cohesion: 0.19
Nodes (13): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+5 more)

### Community 178 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 179 - "Key"
Cohesion: 0.17
Nodes (9): auditActions, dict, errors, fallbackError, Key, FacebookTab, model, props (+1 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "RevenueStatusBadge.vue"
Cohesion: 0.39
Nodes (8): detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend, SCALING

### Community 182 - "drag.ts"
Cohesion: 0.42
Nodes (9): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop() (+1 more)

### Community 183 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.19
Nodes (14): checklistOverrideService, checklistService, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride, ChecklistOverrideInput (+6 more)

### Community 189 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 190 - "formatDate"
Cohesion: 0.29
Nodes (7): dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 193 - "vue-sonner"
Cohesion: 0.06
Nodes (32): vue-sonner, toasterTheme, SavedThemeColors, ANIMATION_AREAS, animations, applyCustomCss(), customColors, previewColors (+24 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 195 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): overrideSummary(), ROW_TONE, checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 196 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 197 - "AccountStatus.vue"
Cohesion: 0.20
Nodes (11): companyService, CompanyDetail, CompanyFiscal, company, error, hasSeats, load(), lost (+3 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 204 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "PageBody.vue"
Cohesion: 0.31
Nodes (4): PAGE_WIDTH, firstName, greeting, session

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookAdsetForm.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Button.vue`, `FacebookView.vue`, `ResultsView.vue`, `errorText`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `Input.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `dashboards/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `index.ts`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `draft-rules.ts`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `google_ads/rules.ts`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClassifySitesDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `reports/rules.ts`, `FacebookEditView.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `api.ts`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `AdTagBlockCard.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `useSession`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ClientsResultsView.vue`, `ReservedNetworksCard.vue`, `formatDate`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `Field.vue`, `sortValue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `price_rules/rules.ts`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `InvoicesView.vue`, `ClientSiteView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `RolesPanel.vue`, `FacebookCampaignForm.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FacebookRulesCard.vue`, `GamRunView.vue`, `lucide-vue-next`, `AlertDialog.vue`, `GoogleAdsAlertsPanel.vue`, `metricColor`, `dashboards/types.ts`, `ClientNetworkView.vue`, `GoogleAdsHistoryPanel.vue`, `Key`, `RevenueStatusBadge.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `AdTagInstallDialog.vue`, `formatDate`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `vue-sonner`, `ChecklistView.vue`, `SaveReportDialog.vue`, `AccountStatus.vue`, `CurrencyCard.vue`, `PageBody.vue`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05217391304347826 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `@vueuse/core` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `FacebookAdsetForm.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Button.vue`, `FacebookView.vue`, `ResultsView.vue`, `errorText`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `Input.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `dashboards/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `index.ts`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `draft-rules.ts`, `GoogleAdsObjectView.vue`, `lang`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `google_ads/rules.ts`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClassifySitesDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `reports/rules.ts`, `FacebookEditView.vue`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `GroupedBarChart.vue`, `api.ts`, `events.ts`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `AdTagBlockCard.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `useSession`, `ApiKeyDialog.vue`, `BarChart.vue`, `CustomThemeDialog.vue`, `ClientsResultsView.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `Field.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `ClientSiteView.vue`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `MetricStylePopover.vue`, `RolesPanel.vue`, `FacebookCampaignForm.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `AdTagPreview.vue`, `FacebookRulesCard.vue`, `GamRunView.vue`, `lucide-vue-next`, `AlertDialog.vue`, `GoogleAdsAlertsPanel.vue`, `dashboards/types.ts`, `ClientNetworkView.vue`, `DashboardGrid.vue`, `GoogleAdsHistoryPanel.vue`, `RevenueStatusBadge.vue`, `drag.ts`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `AdTagInstallDialog.vue`, `formatDate`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `vue-sonner`, `ChecklistView.vue`, `SaveReportDialog.vue`, `AccountStatus.vue`, `CurrencyCard.vue`, `PageBody.vue`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Button.vue`, `FacebookView.vue`, `ResultsView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `index.ts`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `google_ads/rules.ts`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClassifySitesDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `FacebookEditView.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `api.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `useSession`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ClientsResultsView.vue`, `ReservedNetworksCard.vue`, `formatDate`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `ClientSiteView.vue`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `RolesPanel.vue`, `FacebookAlertsPanel.vue`, `FacebookRulesCard.vue`, `GamRunView.vue`, `lucide-vue-next`, `AlertDialog.vue`, `GoogleAdsAlertsPanel.vue`, `dashboards/types.ts`, `ClientNetworkView.vue`, `DashboardGrid.vue`, `GoogleAdsHistoryPanel.vue`, `NetworkReviewActions.vue`, `Review Focus`, `InvoiceServicesView.vue`, `ProfileImageCard.vue`, `vue-sonner`, `ChecklistView.vue`, `AccountStatus.vue`, `CurrencyCard.vue`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._