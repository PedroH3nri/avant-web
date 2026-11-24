# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 452 files · ~317,677 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5669 nodes · 14799 edges · 206 communities (198 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 163 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `9bd365bb`
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
- FacebookAdForm.vue
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
- GroupsView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- Field.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- InviteView.vue
- SiteDetailView.vue
- ClientSitesView.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- FacebookJobDialog.vue
- cn
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
- ClientsResultsView.vue
- .oxlintrc.json
- FacebookEditView.vue
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
- lang
- draft-rules.ts
- FacebookAdsetForm.vue
- ClassifySitesDialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- GroupedBarChart.vue
- costs/rules.ts
- ChecklistsView.vue
- SiteItemOverrideDialog.vue
- ClientNotesCard.vue
- ConfigPanel.vue
- AddWidgetDialog.vue
- formatDate
- GoalsView.vue
- RoleDialog.vue
- api.ts
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- DataTable.vue
- LoginView.vue
- AccountStatus.vue
- rewards/rules.ts
- DashboardWidget.vue
- reports/types.ts
- ClientNetworksView.vue
- rewards-rules.test.ts
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
- inventory/types.ts
- ApiKeyDialog.vue
- rewards/service.ts
- CustomThemeDialog.vue
- ad-tags.test.ts
- ReservedNetworksCard.vue
- ChecklistView.vue
- session.ts
- ChecklistNotesCard.vue
- vitest
- SiteChecklistCard.vue
- SettingsView.vue
- LoadersView.vue
- clients/service.ts
- groups/types.ts
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- invoices/types.ts
- dashboards/types.ts
- errorText
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
- Button.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- vue
- FacebookCampaignForm.vue
- price_rules/types.ts
- FacebookObjectView.vue
- ResetView.vue
- alerts/rules.ts
- MetricStylePopover.vue
- RolesPanel.vue
- account/service.ts
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- FieldsPanel.vue
- FacebookMediaField.vue
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- Pagination.vue
- metricColor
- Review Focus
- ClientNetworkView.vue
- FiscalDataCard.vue
- errorToast
- loadMembers
- overrides
- ClientNetworksCard.vue
- GoogleAdsObjectView.vue
- NetworkReviewActions.vue
- LoaderPreview.vue
- ThemeCard.vue
- InvoiceServicesView.vue
- checklists/types.ts
- priorityLabel
- RecoveryCodes.vue
- inviteTaken
- ProfileImageCard.vue
- tasks/types.ts
- BarChart.vue
- Input.vue
- DashboardGrid.vue
- drag.ts
- Field.vue
- CurrencyCard.vue
- PasswordCard.vue
- RevenueStatusBadge.vue
- NewDashboardDialog.vue
- 20. CDN dos scripts do site (cdn.groone.com)
- vue-sonner
- priceRulePermission
- FakeSource

## God Nodes (most connected - your core abstractions)
1. `t()` - 684 edges
2. `errorText()` - 387 edges
3. `vue` - 209 edges
4. `ApiError` - 146 edges
5. `lucide-vue-next` - 123 edges
6. `vue-sonner` - 100 edges
7. `useSession` - 98 edges
8. `vue-router` - 69 edges
9. `vitest` - 68 edges
10. `td` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SeriesColor`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (206 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (40): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+32 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (47): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+39 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+41 more)

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
Cohesion: 0.06
Nodes (64): amount, amountError, busy, emit, open, props, reason, reasonTouched (+56 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (54): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters (+46 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (19): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+11 more)

### Community 12 - "FacebookAdForm.vue"
Cohesion: 0.10
Nodes (23): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+15 more)

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
Cohesion: 0.07
Nodes (30): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+22 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (43): asked, check, countdown(), current, display, emit, label, open (+35 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (30): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (46): GoogleAdsTab, byManager(), campaignsPath(), GOOGLE_ADS_CONNECT_URL, accounts, applying, applySuffix(), canConnect (+38 more)

### Community 25 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): amountText(), busy, canManage, check, checkFormula, costs, currencies, currencyOptions (+15 more)

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

### Community 32 - "FacebookView.vue"
Cohesion: 0.05
Nodes (39): FacebookTab, accounts, canConnect, canManage, clientName(), clientOptions, clients, companyId (+31 more)

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

### Community 37 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 38 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (41): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+33 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.09
Nodes (27): blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd(), addAdset(), alertText (+19 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (37): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+29 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.16
Nodes (17): campaign, current, emit, finished, open, props, refresh(), router (+9 more)

### Community 45 - "cn"
Cohesion: 0.07
Nodes (21): props, up, panelItem(), railItem(), model, cn(), kindClass(), model (+13 more)

### Community 46 - "NewGroupDialog.vue"
Cohesion: 0.10
Nodes (19): broken, hue, initials, props, busy, create(), description, duplicate (+11 more)

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
Nodes (72): LineSeries, compare, options, period, selected, change(), countryName(), dailySeries() (+64 more)

### Community 51 - "reports/rules.ts"
Cohesion: 0.09
Nodes (38): loadDraft(), filterable, path, shape, AXIS_CHARTS, BuilderState, canExport(), chartAllowed() (+30 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (63): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), pageSlice(), metricText() (+55 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (21): formatMonth(), periodText(), clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW (+13 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "FacebookEditView.vue"
Cohesion: 0.08
Nodes (26): blankAd(), blankAdset(), objectiveOf(), serverProblems(), submit(), ad, adset, detail (+18 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (18): busy, canChange, changeLines, emit, manager, managerId, next, NOTE_KEY (+10 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (42): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+34 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment, fail() (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.08
Nodes (32): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+24 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.08
Nodes (33): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, apiMessage(), canManage, catalog (+25 more)

### Community 71 - "lang"
Cohesion: 0.08
Nodes (19): vitest, @vue/test-utils, lang, client, managerChange, perms, settings, staffOptions (+11 more)

### Community 72 - "draft-rules.ts"
Cohesion: 0.19
Nodes (19): adProblems(), adsetDays(), adsetProblems(), amountOk(), budgetPerDay(), CALLS_TO_ACTION, draftDaily(), draftProblems() (+11 more)

### Community 73 - "FacebookAdsetForm.vue"
Cohesion: 0.11
Nodes (18): model, adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions (+10 more)

### Community 74 - "ClassifySitesDialog.vue"
Cohesion: 0.06
Nodes (42): box, failed, initial, props, categoryOptions, canSeeChecklists, canSeePriceRules, load() (+34 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.06
Nodes (28): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+20 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (55): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+47 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (77): model, adTagPermission(), chosenDay(), UNIT_ORDER, unitName(), absentUnits, armed, base (+69 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 81 - "costs/rules.ts"
Cohesion: 0.16
Nodes (17): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+9 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (27): dollars(), stateLabel(), STATES, barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS (+19 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.13
Nodes (17): valid, Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open (+9 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.10
Nodes (21): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+13 more)

### Community 86 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (27): add(), emit, kind, kinds, metric, metrics, open, props (+19 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), adTagService(), base, decimal, filled, health, integer (+13 more)

### Community 88 - "GoalsView.vue"
Cohesion: 0.04
Nodes (83): months, months, busy, canManage, changed, current, load(), monthNames (+75 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, permissionGroupLabel(), Localized, SiteScope, SiteMember, SitePatch, busy, category (+29 more)

### Community 90 - "api.ts"
Cohesion: 0.10
Nodes (37): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+29 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (41): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+33 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.09
Nodes (27): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+19 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "DataTable.vue"
Cohesion: 0.16
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 96 - "LoginView.vue"
Cohesion: 0.09
Nodes (18): formatAgo(), safeNext(), busy, email, error, next, password, route (+10 more)

### Community 97 - "AccountStatus.vue"
Cohesion: 0.13
Nodes (17): props, seats, company, error, hasSeats, load(), lost, networks (+9 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.10
Nodes (20): dayLabel, dayOptions, contrast(), contrastWarning(), COOLDOWN_RANGE, dayText(), EMOJIS, FONTS (+12 more)

### Community 99 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (18): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+10 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.09
Nodes (29): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, period, props, ReportDraft, ChartOptions, ChartType (+21 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "rewards-rules.test.ts"
Cohesion: 0.17
Nodes (14): answerCounts(), blankInput(), cleanPath(), defaultStyle(), formProblems(), inputOf(), rewardsPath(), toPayload() (+6 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (51): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, currency, decisionFirstFill() (+43 more)

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
Nodes (49): busy, chosen, daily, dailyValue, emit, monthly, monthlyValue, open (+41 more)

### Community 109 - "index.ts"
Cohesion: 0.13
Nodes (13): LINES, showBootFailure(), fill(), loaded, loaders, loadLang(), Messages, startLang() (+5 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (26): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+18 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.10
Nodes (23): vue-router, vue-router, RouteMeta, templateService, roleNames(), TemplateAudience, apiMessage(), audience (+15 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (31): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+23 more)

### Community 116 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (23): FilterOption, activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+15 more)

### Community 120 - "inventory/types.ts"
Cohesion: 0.19
Nodes (14): ContractSource, ContractStatus, ClientNetwork, ClientRef, ClientSite, ClientSiteDetail, NetworkContract, NetworkSite (+6 more)

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.11
Nodes (40): alphaOf(), channels(), COLOR_KEYS, contrast(), customThemeCss(), flatten(), flattenColors(), isDarkBackground() (+32 more)

### Community 124 - "ad-tags.test.ts"
Cohesion: 0.07
Nodes (49): Key, addPath(), emit, icon, ICONS, name, pages, pathText (+41 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (17): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+9 more)

### Community 126 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): overrideSummary(), ROW_TONE, rowStateLabel(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 127 - "session.ts"
Cohesion: 0.09
Nodes (18): pinia, theme, Me, accountService, authService, InvitationPreview, LoginResult, busy (+10 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "vitest"
Cohesion: 0.18
Nodes (13): auditActions, dict, errors, fallbackError, COLUMN, column(), Lang, LanguageMessages (+5 more)

### Community 130 - "SiteChecklistCard.vue"
Cohesion: 0.11
Nodes (17): dot, canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+9 more)

### Community 131 - "SettingsView.vue"
Cohesion: 0.13
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

### Community 133 - "clients/service.ts"
Cohesion: 0.27
Nodes (12): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+4 more)

### Community 134 - "groups/types.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (31): childLevel(), objectPath(), accountId, accounts, availableFilters, barFilters, clients, columns (+23 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, code (+14 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): cascadeFunnel(), gainQuery(), gainSeries(), modelChoices(), recommendedModel(), funnel, active, automaticRuleCount (+44 more)

### Community 139 - "invoices/types.ts"
Cohesion: 0.24
Nodes (13): FiscalData, invoiceService, AvailableMonth, Invoice, InvoiceFilters, InvoiceItem, InvoiceItemKind, InvoiceReturn (+5 more)

### Community 140 - "dashboards/types.ts"
Cohesion: 0.29
Nodes (11): Dashboard, DashboardInput, DashboardPage, DashboardRun, HomeDashboard, TemplateInput, TemplateRoles, SaveForm (+3 more)

### Community 141 - "errorText"
Cohesion: 0.16
Nodes (19): pick(), errorText(), confirmRemove(), load(), save(), load(), saveStart(), checkNow() (+11 more)

### Community 142 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.05
Nodes (41): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+33 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (33): busy, canManage, created(), creating, keys, load(), loadError, page (+25 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.09
Nodes (24): active, emit, kind, kindOptions, name, open, props, save() (+16 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (35): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+27 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (64): AdTag, InstallSummary, ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS (+56 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "checklists/rules.ts"
Cohesion: 0.19
Nodes (13): title, evidenceText(), LANGUAGE_NAMES, monthName(), previousMonth(), progressPercent(), RowState, rowState() (+5 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.05
Nodes (67): applyView(), current, sortOptions, applyView(), current, sortOptions, applyView(), current (+59 more)

### Community 152 - "Button.vue"
Cohesion: 0.11
Nodes (21): lucide-vue-next, reka-ui, route, router, session, button, classes, Props (+13 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.04
Nodes (71): auditText(), formatDate(), messages(), t(), tn(), tiles, availableFilters, base (+63 more)

### Community 155 - "vue"
Cohesion: 0.04
Nodes (58): vue, td, th, alerts, emit, load(), loadError, markRead() (+50 more)

### Community 156 - "FacebookCampaignForm.vue"
Cohesion: 0.14
Nodes (17): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+9 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (78): current, dirty, elsewhere, emit, error, kind, parsed, props (+70 more)

### Community 159 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 162 - "RolesPanel.vue"
Cohesion: 0.05
Nodes (46): pick(), metricOptions, options, ruleEnd(), setGoal(), busy, canManage, deleteOpen (+38 more)

### Community 163 - "account/service.ts"
Cohesion: 0.17
Nodes (19): ThemeColors, Theme, busy, confirm, load(), session, status, unlink() (+11 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.13
Nodes (17): load(), budgetHere, dirty, draft, emit, inputOf(), levelKey, load() (+9 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 169 - "FacebookMediaField.vue"
Cohesion: 0.22
Nodes (8): failure, fileName, input, model, props, send(), sending, facebookService

### Community 170 - "CompanyView.vue"
Cohesion: 0.13
Nodes (16): PAGE_WIDTH, canManage, company, companyId, groupPeople(), groups, load(), loadError (+8 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.29
Nodes (4): ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 173 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 174 - "metricColor"
Cohesion: 0.23
Nodes (14): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), chart, hourLabel(), boughtColor (+6 more)

### Community 175 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 176 - "ClientNetworkView.vue"
Cohesion: 0.13
Nodes (15): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+7 more)

### Community 177 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 178 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 179 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "ClientNetworksCard.vue"
Cohesion: 0.13
Nodes (15): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+7 more)

### Community 182 - "GoogleAdsObjectView.vue"
Cohesion: 0.05
Nodes (64): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), CHANGE_KEYS, changeText(), CHANNEL_KEYS, channelKey() (+56 more)

### Community 183 - "NetworkReviewActions.vue"
Cohesion: 0.39
Nodes (7): busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "ThemeCard.vue"
Cohesion: 0.09
Nodes (19): vue-sonner, toasterTheme, applyCustomCss(), customColors, shownTheme(), THEMES, atLimit, choose() (+11 more)

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.11
Nodes (16): open, open, busy, canManage, description, editing, editingOpen, loadError (+8 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.16
Nodes (16): checklistOverrideService, checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride (+8 more)

### Community 188 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 189 - "RecoveryCodes.vue"
Cohesion: 0.11
Nodes (19): copied, copyLine(), open, props, copyToken(), copied, copyAll(), download() (+11 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.12
Nodes (20): busy, drop(), input, pick(), problem, props, run(), ApiError (+12 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 196 - "Input.vue"
Cohesion: 0.08
Nodes (19): model, choices, description, emit, invalid, name, open, props (+11 more)

### Community 197 - "DashboardGrid.vue"
Cohesion: 0.13
Nodes (26): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+18 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "Field.vue"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 201 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 202 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 203 - "NewDashboardDialog.vue"
Cohesion: 0.29
Nodes (7): chosen, create(), emit, name, open, templates, DashboardTemplate

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "vue-sonner"
Cohesion: 0.09
Nodes (24): choose(), langs, session, chooseLang(), announceCompany(), CompanyMessage, onCompanyAnnounced(), route (+16 more)

### Community 208 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookAdForm.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `GroupsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Field.vue`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `cn`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `reports/rules.ts`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ClientsResultsView.vue`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookAdsetForm.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `formatDate`, `GoalsView.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `DataTable.vue`, `LoginView.vue`, `AccountStatus.vue`, `rewards/rules.ts`, `DashboardWidget.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `rewards-rules.test.ts`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `tasks/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ad-tags.test.ts`, `ReservedNetworksCard.vue`, `ChecklistView.vue`, `session.ts`, `ChecklistNotesCard.vue`, `SiteChecklistCard.vue`, `SettingsView.vue`, `LoadersView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `errorText`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `InvoicesView.vue`, `Button.vue`, `vue`, `FacebookCampaignForm.vue`, `FacebookObjectView.vue`, `ResetView.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `RolesPanel.vue`, `account/service.ts`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FieldsPanel.vue`, `FacebookMediaField.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `metricColor`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `errorToast`, `loadMembers`, `ClientNetworksCard.vue`, `GoogleAdsObjectView.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `ThemeCard.vue`, `InvoiceServicesView.vue`, `priorityLabel`, `RecoveryCodes.vue`, `ProfileImageCard.vue`, `Input.vue`, `Field.vue`, `CurrencyCard.vue`, `PasswordCard.vue`, `RevenueStatusBadge.vue`, `NewDashboardDialog.vue`, `vue-sonner`?**
  _High betweenness centrality (0.187) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05391120507399577 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `GroupsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `ClientsResultsView.vue`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `formatDate`, `GoalsView.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `DataTable.vue`, `LoginView.vue`, `AccountStatus.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `rewards-rules.test.ts`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `ChecklistView.vue`, `session.ts`, `ChecklistNotesCard.vue`, `SiteChecklistCard.vue`, `SettingsView.vue`, `LoadersView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `Button.vue`, `AdTagsView.vue`, `vue`, `FacebookObjectView.vue`, `ResetView.vue`, `RolesPanel.vue`, `account/service.ts`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `FacebookMediaField.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Review Focus`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `errorToast`, `ClientNetworksCard.vue`, `GoogleAdsObjectView.vue`, `NetworkReviewActions.vue`, `ThemeCard.vue`, `InvoiceServicesView.vue`, `ProfileImageCard.vue`, `DashboardGrid.vue`, `Field.vue`, `CurrencyCard.vue`, `PasswordCard.vue`, `vue-sonner`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050980392156862744 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `FacebookAdForm.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `GroupsView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `Field.vue`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `cn`, `NewGroupDialog.vue`, `NetworksView.vue`, `PerformanceView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ClientsResultsView.vue`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `lang`, `FacebookAdsetForm.vue`, `ClassifySitesDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `GroupedBarChart.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `AddWidgetDialog.vue`, `formatDate`, `GoalsView.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `DataTable.vue`, `LoginView.vue`, `AccountStatus.vue`, `DashboardWidget.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `index.ts`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ad-tags.test.ts`, `ReservedNetworksCard.vue`, `ChecklistView.vue`, `session.ts`, `ChecklistNotesCard.vue`, `SiteChecklistCard.vue`, `SettingsView.vue`, `LoadersView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `Button.vue`, `AdTagsView.vue`, `FacebookCampaignForm.vue`, `FacebookObjectView.vue`, `ResetView.vue`, `MetricStylePopover.vue`, `RolesPanel.vue`, `account/service.ts`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FieldsPanel.vue`, `FacebookMediaField.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `ClientNetworkView.vue`, `FiscalDataCard.vue`, `ClientNetworksCard.vue`, `GoogleAdsObjectView.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `ThemeCard.vue`, `InvoiceServicesView.vue`, `RecoveryCodes.vue`, `ProfileImageCard.vue`, `BarChart.vue`, `Input.vue`, `DashboardGrid.vue`, `drag.ts`, `Field.vue`, `CurrencyCard.vue`, `PasswordCard.vue`, `RevenueStatusBadge.vue`, `NewDashboardDialog.vue`, `vue-sonner`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._