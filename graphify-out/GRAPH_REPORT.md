# Graph Report - avant-web  (2026-11-25)

## Corpus Check
- 463 files · ~323,190 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5740 nodes · 15010 edges · 199 communities (191 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 167 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f20575f5`
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
- FacebookObjectView.vue
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
- index.ts
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- InviteView.vue
- PageBody.vue
- ClientSitesView.vue
- api.ts
- TeamCommissionsView.vue
- compilerOptions
- api.ts
- FacebookJobDialog.vue
- Key
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- useSession
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- report-view.test.ts
- .oxlintrc.json
- FacebookEditView.vue
- avant-web
- AccountManagerCard.vue
- tsconfig.json
- session-start.sh
- postcss-scale-rem.js
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ReportView.vue
- FacebookCreateView.vue
- GoogleAdsObjectView.vue
- ClientsResultsView.vue
- sortValue
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
- pick
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- SiteDetailView.vue
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- FacebookCampaignForm.vue
- MetricStylePopover.vue
- rewards/rules.ts
- GoalsView.vue
- rewards/service.ts
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- GroupedBarChart.vue
- listTable.ts
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
- FiscalDataCard.vue
- ApiKeyDialog.vue
- BarChart.vue
- CustomThemeDialog.vue
- google_ads/rules.ts
- ReservedNetworksCard.vue
- formatDate
- session.ts
- ChecklistNotesCard.vue
- vitest
- contracts/rules.ts
- views/rules.ts
- LoadersView.vue
- errorText
- MyCommissionView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- NetworkReviewActions.vue
- InvoicesView.vue
- PayeeDialog.vue
- DashboardWidget.vue
- FunnelChart.vue
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
- CompanyIcon.vue
- AdjustmentDialog.vue
- price_rules/types.ts
- SeatBar.vue
- ClientNetworkView.vue
- alerts/rules.ts
- choose
- useSession
- TaskTimeline.vue
- FacebookRulesCard.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- checklists/rules.ts
- ClientNetworksCard.vue
- vite.embed.config.ts
- AlertDialog.vue
- tasks/rules.ts
- metricColor
- CompanyView.vue
- ApiError
- contracts/service.ts
- lucide-vue-next
- RevenueStatusBadge.vue
- drag.ts
- LoaderPreview.vue
- Review Focus
- GoogleAdsHistoryPanel.vue
- ChecklistItemsView.vue
- dashboards/types.ts
- PasswordCard.vue
- ProfileImageCard.vue
- AddWidgetDialog.vue
- ThemeCard.vue
- tasks/types.ts
- table.ts
- draft-rules.ts
- Pagination.vue
- FacebookPersonDialog.vue
- CurrencyCard.vue
- FakeSource
- overrides
- 20. CDN dos scripts do site (cdn.groone.com)
- priorityLabel
- Field.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 691 edges
2. `errorText()` - 393 edges
3. `vue` - 215 edges
4. `ApiError` - 150 edges
5. `lucide-vue-next` - 124 edges
6. `vue-sonner` - 103 edges
7. `useSession` - 102 edges
8. `vitest` - 71 edges
9. `vue-router` - 69 edges
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

## Communities (199 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (48): profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments, canManage (+40 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (46): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+38 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.05
Nodes (48): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+40 more)

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
Cohesion: 0.09
Nodes (40): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+32 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (54): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters (+46 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (20): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+12 more)

### Community 12 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (67): current, dirty, elsewhere, emit, error, kind, parsed, props (+59 more)

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
Cohesion: 0.07
Nodes (32): broken, hue, initials, props, assign(), busy, canEditGroone, canManageTeam (+24 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (44): api, asked, check, countdown(), current, display, emit, label (+36 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.10
Nodes (32): FiscalData, amount, amountError, busy, chosen, description, emit, open (+24 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.07
Nodes (34): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, dirty (+26 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (45): GoogleAdsTab, model, props, TABS, campaignsPath(), accounts, applying, canConnect (+37 more)

### Community 25 - "facebook/types.ts"
Cohesion: 0.07
Nodes (36): failure, left, load(), loading, model, options, props, SEARCHED (+28 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (41): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+33 more)

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

### Community 31 - "index.ts"
Cohesion: 0.11
Nodes (20): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+12 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (42): FacebookTab, model, props, TABS, accounts, canConnect, canManage, clientName() (+34 more)

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
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 38 - "PageBody.vue"
Cohesion: 0.07
Nodes (25): PAGE_WIDTH, route, router, session, sessions, canEdit, company, isGroone (+17 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (41): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+33 more)

### Community 40 - "api.ts"
Cohesion: 0.13
Nodes (21): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+13 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (39): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+31 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "api.ts"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "Key"
Cohesion: 0.09
Nodes (28): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+20 more)

### Community 46 - "GroupsView.vue"
Cohesion: 0.05
Nodes (42): Items, busy, create(), description, duplicate, emit, name, open (+34 more)

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
Nodes (73): props, up, compare, options, period, selected, change(), countryName() (+65 more)

### Community 51 - "useSession"
Cohesion: 0.05
Nodes (38): vue-router, vue-router, RouteMeta, safeNext(), announceCompany(), CompanyMessage, onCompanyAnnounced(), busy (+30 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (68): dot, locale, formatMetric(), toNumber(), pageSlice(), metricText(), valueText(), money() (+60 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "report-view.test.ts"
Cohesion: 0.10
Nodes (16): @vue/test-utils, client, managerChange, perms, settings, staffOptions, team, toastError (+8 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (23): objectiveOf(), serverProblems(), submit(), ad, adset, detail, edit, externalId (+15 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.09
Nodes (29): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+21 more)

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
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.06
Nodes (43): emit, missingDates, options, props, setDate(), setMode(), COMPARE_MODES, comparisonReady() (+35 more)

### Community 71 - "FacebookCreateView.vue"
Cohesion: 0.10
Nodes (28): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd() (+20 more)

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (25): periodRange(), isLevel(), GoogleAdsObject, GoogleAdsObjectDetail, base, children, currency, days (+17 more)

### Community 73 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (21): clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError (+13 more)

### Community 74 - "sortValue"
Cohesion: 0.15
Nodes (19): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+11 more)

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
Nodes (68): model, chosenDay(), settingsProblem(), toPayload(), absentUnits, armed, base, blocking (+60 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "ad_tags/rules.ts"
Cohesion: 0.06
Nodes (56): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+48 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.14
Nodes (14): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+6 more)

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
Cohesion: 0.15
Nodes (14): addFilter(), addTyped(), CHARTS, emit, filterable, FilterOption, LIMITS, newField (+6 more)

### Community 86 - "pick"
Cohesion: 0.15
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.05
Nodes (58): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+50 more)

### Community 90 - "SiteDetailView.vue"
Cohesion: 0.04
Nodes (70): ClientSiteDetail, categoryOptions, canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName (+62 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.31
Nodes (9): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview (+1 more)

### Community 96 - "FacebookCampaignForm.vue"
Cohesion: 0.14
Nodes (17): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+9 more)

### Community 97 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (30): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+22 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.09
Nodes (32): mark, tone, companyGoalYears(), goalTone(), paceMark(), roleTemplates(), goalService, GoalMode (+24 more)

### Community 100 - "rewards/service.ts"
Cohesion: 0.17
Nodes (14): rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput (+6 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.05
Nodes (38): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+30 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (51): dropPercent(), percentText(), priceRulePermission(), base, busy, canManage, changeStatus(), currency (+43 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (42): childLevel(), accountId, accountOptions, accounts, allSelected, availableFilters, barFilters, base (+34 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.06
Nodes (30): latestCall(), barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 109 - "listTable.ts"
Cohesion: 0.29
Nodes (10): readShown(), useBarFilters(), useLocalBarFilters(), listOrder(), ListTableSetup, readColumns(), useListTable(), shownFromView() (+2 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "reports/types.ts"
Cohesion: 0.10
Nodes (31): Task 3: Web — tipos, serviço e regras do construtor, emit, period, props, ReportDraft, customMetricService, reportService, ChartOptions (+23 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (33): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+25 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.09
Nodes (24): open, copied, open, props, button, classes, Props, props (+16 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (33): editableWidgets(), templateService, blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole() (+25 more)

### Community 116 - "reports/rules.ts"
Cohesion: 0.09
Nodes (36): pageCount(), loadDraft(), path, AXIS_CHARTS, BuilderState, canExport(), chartAllowed(), Comparison (+28 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (23): FilterOption, activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions (+15 more)

### Community 120 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (27): copyLine(), busy, catalog, chosen, copied, copyToken(), create(), DAYS (+19 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.07
Nodes (54): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+46 more)

### Community 124 - "google_ads/rules.ts"
Cohesion: 0.04
Nodes (76): dailyValue, monthlyValue, dailyValue, monthlyValue, parseLimit(), busy, daily, dailyValue (+68 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.14
Nodes (14): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+6 more)

### Community 126 - "formatDate"
Cohesion: 0.07
Nodes (35): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+27 more)

### Community 127 - "session.ts"
Cohesion: 0.07
Nodes (32): pinia, vitest, ANIMATION_AREAS, animations, customColors, FONT_SIZES, fontSize, theme (+24 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.11
Nodes (20): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+12 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "contracts/rules.ts"
Cohesion: 0.27
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 131 - "views/rules.ts"
Cohesion: 0.15
Nodes (20): current, current, current, rows, current, current, current, current (+12 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.07
Nodes (29): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+21 more)

### Community 133 - "errorText"
Cohesion: 0.06
Nodes (45): errorText(), toggle(), confirmRemove(), load(), save(), load(), toggle(), alerts (+37 more)

### Community 134 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (39): childLevel(), objectPath(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+31 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (55): hourPoints(), moneyText(), nearestTier(), tierOptions(), ladderText(), maxOptions, minOptions, openStart() (+47 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+14 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (54): cascadeFunnel(), cascadeLadder(), gainQuery(), gainSeries(), modelCounts(), siteStatus(), funnel, ladder (+46 more)

### Community 139 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 140 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (21): barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel(), FILTERS (+13 more)

### Community 141 - "PayeeDialog.vue"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 142 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (19): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+11 more)

### Community 143 - "FunnelChart.vue"
Cohesion: 0.33
Nodes (3): first, FunnelStep, props

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "NetworkAdsTxtCard.vue"
Cohesion: 0.10
Nodes (22): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+14 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (35): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+27 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (63): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+55 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.13
Nodes (15): assignee, client, clientOptions, create(), description, domain, emit, open (+7 more)

### Community 150 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (27): add(), emit, kind, kinds, metric, metrics, open, props (+19 more)

### Community 151 - "Input.vue"
Cohesion: 0.08
Nodes (19): model, choices, description, emit, invalid, name, open, props (+11 more)

### Community 152 - "ApiKeysCard.vue"
Cohesion: 0.05
Nodes (53): SavedThemeColors, ThemeColors, UserRef, busy, canManage, created(), creating, keys (+45 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.04
Nodes (65): t(), tn(), IntegrationKind, adTagPermission(), tagStatus(), canManage, discard(), loaderChoices (+57 more)

### Community 155 - "CompanyIcon.vue"
Cohesion: 0.33
Nodes (4): box, failed, initial, props

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 159 - "ClientNetworkView.vue"
Cohesion: 0.05
Nodes (50): Query, Page, company, error, hasSeats, load(), lost, networks (+42 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 161 - "choose"
Cohesion: 0.67
Nodes (3): applyView(), barFilters, choose()

### Community 162 - "useSession"
Cohesion: 0.22
Nodes (10): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), activeLabels() (+2 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "FacebookRulesCard.vue"
Cohesion: 0.12
Nodes (16): model, budgetHere, dirty, draft, emit, inputOf(), levelKey, load() (+8 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.08
Nodes (35): chosen, BLOCK_COUNT, delegationLabel(), finishedSteps(), formatDesc(), formatName(), FORMATS, installable() (+27 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.10
Nodes (19): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+11 more)

### Community 168 - "checklists/rules.ts"
Cohesion: 0.20
Nodes (11): dollars(), evidenceText(), LANGUAGE_NAMES, progressPercent(), RowState, rowState(), STATES, ChecklistPerson (+3 more)

### Community 170 - "ClientNetworksCard.vue"
Cohesion: 0.10
Nodes (19): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+11 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 173 - "tasks/rules.ts"
Cohesion: 0.14
Nodes (14): commentRecipients(), DESCRIPTION_MAX, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX, SUBJECT_MIN, taskPlace() (+6 more)

### Community 174 - "metricColor"
Cohesion: 0.25
Nodes (13): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), chart, hourLabel(), boughtColor (+5 more)

### Community 175 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 177 - "ApiError"
Cohesion: 0.15
Nodes (23): vue, drag, emit, grid, props, { run, failure, loading }, source, stored (+15 more)

### Community 179 - "contracts/service.ts"
Cohesion: 0.24
Nodes (8): contractService, Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary, NetworkContract

### Community 180 - "lucide-vue-next"
Cohesion: 0.07
Nodes (33): lucide-vue-next, reka-ui, pick(), route, router, session, panelItem(), railItem() (+25 more)

### Community 181 - "RevenueStatusBadge.vue"
Cohesion: 0.31
Nodes (11): REPORT_CURRENCY, detail, props, change, props, changeText(), perDayText(), TREND_CLASS (+3 more)

### Community 182 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Review Focus"
Cohesion: 0.15
Nodes (12): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor (+4 more)

### Community 186 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (20): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistOverride, ChecklistOverrideInput, ChecklistProgress (+12 more)

### Community 188 - "dashboards/types.ts"
Cohesion: 0.15
Nodes (21): chosen, create(), emit, name, open, templates, Dashboard, DashboardFilters (+13 more)

### Community 190 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, busy, drop(), input, pick(), problem, props (+14 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.10
Nodes (28): dimensions, filters, periods, props, ordered, ACCOUNT_SIZE, Box, CHART_SIZE (+20 more)

### Community 193 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (14): atLimit, choose(), customs, editing, editor, editorOpen, limit, remove() (+6 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 196 - "table.ts"
Cohesion: 0.05
Nodes (50): td, th, events, load(), loadError, open, page, pages (+42 more)

### Community 197 - "draft-rules.ts"
Cohesion: 0.08
Nodes (37): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+29 more)

### Community 198 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 199 - "FacebookPersonDialog.vue"
Cohesion: 0.10
Nodes (18): failure, fileName, input, model, props, send(), sending, busy (+10 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 203 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookObjectView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `PageBody.vue`, `ClientSitesView.vue`, `api.ts`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `Key`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `useSession`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookCreateView.vue`, `GoogleAdsObjectView.vue`, `ClientsResultsView.vue`, `sortValue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `pick`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookCampaignForm.vue`, `MetricStylePopover.vue`, `rewards/rules.ts`, `GoalsView.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `FiscalDataCard.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `google_ads/rules.ts`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `contracts/rules.ts`, `views/rules.ts`, `LoadersView.vue`, `errorText`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `NetworkReviewActions.vue`, `InvoicesView.vue`, `PayeeDialog.vue`, `DashboardWidget.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `price_rules/rules.ts`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `Input.vue`, `ApiKeysCard.vue`, `AdjustmentDialog.vue`, `ClientNetworkView.vue`, `alerts/rules.ts`, `useSession`, `TaskTimeline.vue`, `FacebookRulesCard.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `checklists/rules.ts`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `tasks/rules.ts`, `metricColor`, `CompanyView.vue`, `lucide-vue-next`, `RevenueStatusBadge.vue`, `LoaderPreview.vue`, `Review Focus`, `GoogleAdsHistoryPanel.vue`, `ChecklistItemsView.vue`, `dashboards/types.ts`, `PasswordCard.vue`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `table.ts`, `draft-rules.ts`, `Pagination.vue`, `FacebookPersonDialog.vue`, `CurrencyCard.vue`, `priorityLabel`, `Field.vue`?**
  _High betweenness centrality (0.195) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `ApiError` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `FacebookObjectView.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `PageBody.vue`, `ClientSitesView.vue`, `api.ts`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `Key`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `useSession`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `report-view.test.ts`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `FacebookCreateView.vue`, `GoogleAdsObjectView.vue`, `ClientsResultsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `pick`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookCampaignForm.vue`, `MetricStylePopover.vue`, `GoalsView.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `GroupedBarChart.vue`, `listTable.ts`, `events.ts`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `FiscalDataCard.vue`, `ApiKeyDialog.vue`, `BarChart.vue`, `CustomThemeDialog.vue`, `google_ads/rules.ts`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `LoadersView.vue`, `errorText`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `NetworkReviewActions.vue`, `InvoicesView.vue`, `PayeeDialog.vue`, `DashboardWidget.vue`, `FunnelChart.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `AddWidgetDialog.vue`, `Input.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `CompanyIcon.vue`, `AdjustmentDialog.vue`, `SeatBar.vue`, `ClientNetworkView.vue`, `useSession`, `TaskTimeline.vue`, `FacebookRulesCard.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `CompanyView.vue`, `lucide-vue-next`, `RevenueStatusBadge.vue`, `drag.ts`, `LoaderPreview.vue`, `GoogleAdsHistoryPanel.vue`, `ChecklistItemsView.vue`, `dashboards/types.ts`, `PasswordCard.vue`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `table.ts`, `draft-rules.ts`, `Pagination.vue`, `FacebookPersonDialog.vue`, `CurrencyCard.vue`, `Field.vue`?**
  _High betweenness centrality (0.101) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.049773755656108594 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookObjectView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `PageBody.vue`, `ClientSitesView.vue`, `api.ts`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `useSession`, `lib/types.ts`, `FacebookEditView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `FacebookCreateView.vue`, `GoogleAdsObjectView.vue`, `ClientsResultsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `pick`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `MfaCard.vue`, `GamToolsView.vue`, `rewards/rules.ts`, `GoalsView.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `FiscalDataCard.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `google_ads/rules.ts`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `NetworkReviewActions.vue`, `InvoicesView.vue`, `PayeeDialog.vue`, `DashboardWidget.vue`, `ChecklistItemsView.vue`, `NetworkAdsTxtCard.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `ApiKeysCard.vue`, `AdTagsView.vue`, `AdjustmentDialog.vue`, `ClientNetworkView.vue`, `FacebookRulesCard.vue`, `gam_tools/rules.ts`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `CompanyView.vue`, `ApiError`, `lucide-vue-next`, `Review Focus`, `GoogleAdsHistoryPanel.vue`, `ChecklistItemsView.vue`, `PasswordCard.vue`, `ProfileImageCard.vue`, `ThemeCard.vue`, `table.ts`, `FacebookPersonDialog.vue`, `CurrencyCard.vue`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.055272108843537414 - nodes in this community are weakly interconnected._