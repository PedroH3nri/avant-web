# Graph Report - avant-web  (2026-11-23)

## Corpus Check
- 424 files · ~293,088 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5207 nodes · 13595 edges · 192 communities (185 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 154 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f532a876`
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
- Key
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
- DashboardGrid.vue
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
- facebook/types.ts
- ApiKeyDialog.vue
- CompaniesView.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- RolesPanel.vue
- .oxlintrc.json
- ProfileImageCard.vue
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- errorText
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- FacebookAdsetForm.vue
- InviteView.vue
- FacebookAccountDialog.vue
- GoalsView.vue
- cn
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- LoadersView.vue
- ChecklistsView.vue
- MfaCard.vue
- ClientNotesCard.vue
- vue
- SessionsCard.vue
- AdTagMetricsView.vue
- CompanyGoalCard.vue
- RoleDialog.vue
- locale
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- @vueuse/core
- ClientNetworksCard.vue
- MyCommissionView.vue
- rewards/rules.ts
- Button.vue
- FacebookCampaignForm.vue
- reports/rules.ts
- AlertDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- vue
- RewardMetricsView.vue
- FacebookAlertsPanel.vue
- MyCommissionView.vue
- api.ts
- AddWidgetDialog.vue
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- alerts/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- GoogleAdsAccountDialog.vue
- google_ads/rules.ts
- checklists/rules.ts
- rewards/service.ts
- dashboards/types.ts
- RevenueStatusBadge.vue
- gam-tools-view.test.ts
- InvoiceServicesView.vue
- AdjustmentDialog.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- errorText
- BarChart.vue
- ClientNetworksView.vue
- NewTaskDialog.vue
- dashboards/rules.ts
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- metricColor
- FacebookObjectView.vue
- ChecklistView.vue
- GoogleAdsObjectView.vue
- ResetView.vue
- ChecklistItemDialog.vue
- FacebookRulesCard.vue
- price_rules/rules.ts
- LoaderEditView.vue
- RecoveryCodes.vue
- events.ts
- tasks/types.ts
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- FacebookRulesCard.vue
- cleanFilters
- price_rules/types.ts
- DataTable.vue
- tabs.ts
- invoices/types.ts
- GoogleAdsAlertsPanel.vue
- useSession
- PasswordCard.vue
- AdTagMetricsView.vue
- CompanyView.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- FunnelChart.vue
- GamRunView.vue
- PageHeader.vue
- clients/service.ts
- tasks/rules.ts
- FieldsPanel.vue
- PageBody.vue
- drag.ts
- Button.vue
- commission-components.test.ts
- Review Focus
- GoogleCard.vue
- overrides
- vite.embed.config.ts
- google_ads/types.ts
- Field.vue
- LoaderPreview.vue
- ChecklistItemsView.vue
- DataTable.vue
- GoogleAdsHistoryPanel.vue
- PayeeDialog.vue
- ClassifySitesDialog.vue
- FakeSource
- InvoiceDocument.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 591 edges
2. `errorText()` - 372 edges
3. `vue` - 194 edges
4. `ApiError` - 139 edges
5. `lucide-vue-next` - 111 edges
6. `vue-sonner` - 98 edges
7. `useSession` - 96 edges
8. `td` - 65 edges
9. `th` - 65 edges
10. `vue-router` - 65 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ChartType`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (192 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (49): profileBody(), profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments (+41 more)

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
Nodes (28): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+20 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (40): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+32 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "vue-sonner"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+14 more)

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
Cohesion: 0.10
Nodes (20): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+12 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (26): busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email, emailOk (+18 more)

### Community 20 - "Key"
Cohesion: 0.06
Nodes (52): auditActions, dict, errors, fallbackError, Key, ad, blankCard(), buttonOptions (+44 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (16): amount, amountError, busy, chosen, description, emit, open, options (+8 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (30): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+22 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (40): accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions, clients (+32 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (40): Query, COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+32 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (45): t(), period, description, adUnitNames(), adUnitHint, adUnitOptions, base, busy (+37 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (54): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+46 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "reports/types.ts"
Cohesion: 0.06
Nodes (48): Task 3: Web — tipos, serviço e regras do construtor, PERIOD_PRESETS, Lang, draft, draftKey, emit, failure, goal (+40 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (43): FacebookTab, model, props, TABS, FACEBOOK_CONNECT_URL, accounts, canConnect, canManage (+35 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.05
Nodes (48): formatMonth(), CostKind, periodText(), clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW (+40 more)

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
Nodes (66): compare, options, period, selected, countryName(), dailySeries(), daysOf(), hourLabel() (+58 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.22
Nodes (10): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+2 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (51): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), account, accounts (+43 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (38): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+30 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.14
Nodes (19): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+11 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.05
Nodes (48): vitest, pageCount(), pageSlice(), shownRows, NO_COMPARISON, sameComparison(), savedPeriod(), ThumbShape (+40 more)

### Community 46 - "vue-router"
Cohesion: 0.09
Nodes (20): vue-router, vue-router, RouteMeta, safeNext(), busy, email, error, next (+12 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.06
Nodes (46): formatAgo(), company, error, hasSeats, load(), lost, networks, router (+38 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "facebook/types.ts"
Cohesion: 0.07
Nodes (49): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), CHANGE_KEYS, changeText(), DECISION_TONES, facebookPath() (+41 more)

### Community 51 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (27): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+19 more)

### Community 52 - "CompaniesView.vue"
Cohesion: 0.08
Nodes (28): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+20 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (64): Task 4: Web — cores das séries e gráficos do construtor, change(), formatMetric(), toNumber(), metricText(), valueText(), money(), yearTotal() (+56 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "RolesPanel.vue"
Cohesion: 0.07
Nodes (28): pick(), metricOptions, ruleText(), options, transferOptions, ruleEnd(), setGoal(), roleName() (+20 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.10
Nodes (23): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+15 more)

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

### Community 70 - "FacebookAdsetForm.vue"
Cohesion: 0.07
Nodes (26): adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions, pixels (+18 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FacebookAccountDialog.vue"
Cohesion: 0.06
Nodes (41): model, busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit (+33 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "cn"
Cohesion: 0.14
Nodes (14): lucide-vue-next, reka-ui, pick(), route, router, session, open, open (+6 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (26): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+18 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (57): Items, contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef (+49 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (65): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+57 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.11
Nodes (18): LINES, showBootFailure(), auditText(), fill(), loaded, loaders, loadLang(), Messages (+10 more)

### Community 81 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.18
Nodes (11): changes, load(), loadError, origin, originOptions, page, pages, props (+3 more)

### Community 85 - "vue"
Cohesion: 0.07
Nodes (24): pinia, @vue/test-utils, lang, CompanyRef, Me, Theme, accountService, authService (+16 more)

### Community 86 - "SessionsCard.vue"
Cohesion: 0.08
Nodes (20): props, up, panelItem(), railItem(), cn(), kindClass(), tab(), GoogleAdsTab (+12 more)

### Community 87 - "AdTagMetricsView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+29 more)

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

### Community 95 - "@vueuse/core"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 96 - "ClientNetworksCard.vue"
Cohesion: 0.09
Nodes (26): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+18 more)

### Community 97 - "MyCommissionView.vue"
Cohesion: 0.10
Nodes (19): clientService, busy, canChange, emit, manager, managerId, next, NOTE_KEY (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (30): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+22 more)

### Community 99 - "Button.vue"
Cohesion: 0.07
Nodes (40): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+32 more)

### Community 100 - "FacebookCampaignForm.vue"
Cohesion: 0.14
Nodes (16): model, account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch() (+8 more)

### Community 101 - "reports/rules.ts"
Cohesion: 0.05
Nodes (49): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+41 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.09
Nodes (23): formatDate(), tiles, seenText(), baselineOptions, body, busy, checking, checks (+15 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (51): dropPercent(), percentText(), priceRulePermission(), base, busy, canManage, changeStatus(), currency (+43 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (34): childLevel(), accountId, accountOptions, accounts, allSelected, base, canManage, clientOptions (+26 more)

### Community 106 - "vue"
Cohesion: 0.08
Nodes (22): vue, box, failed, initial, props, props, seats, firstName (+14 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "FacebookAlertsPanel.vue"
Cohesion: 0.12
Nodes (15): model, alerts, emit, load(), loadError, markRead(), page, pages (+7 more)

### Community 109 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 110 - "api.ts"
Cohesion: 0.13
Nodes (22): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+14 more)

### Community 111 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.09
Nodes (21): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+13 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (16): templateService, apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError (+8 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (32): editableWidgets(), blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole(), withAudience() (+24 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.29
Nodes (13): alertDefinition(), AlertForm, alertForm(), AlertGroup, alertInput(), alertState(), compares(), conditionText() (+5 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.12
Nodes (16): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+8 more)

### Community 120 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (24): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+16 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.21
Nodes (11): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, personName(), progressPercent(), RowState, rowState() (+3 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (17): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+9 more)

### Community 123 - "dashboards/types.ts"
Cohesion: 0.12
Nodes (31): Page, widgetFailure(), chosen, create(), emit, name, open, templates (+23 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.24
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 125 - "gam-tools-view.test.ts"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.11
Nodes (15): open, busy, canManage, description, editing, editingOpen, loadError, page (+7 more)

### Community 127 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "errorText"
Cohesion: 0.13
Nodes (20): errorText(), failure, fileName, input, model, props, send(), sending (+12 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "ClientNetworksView.vue"
Cohesion: 0.14
Nodes (14): latestCall(), awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall (+6 more)

### Community 133 - "NewTaskDialog.vue"
Cohesion: 0.10
Nodes (20): assignee, client, clientOptions, create(), description, domain, emit, open (+12 more)

### Community 134 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (26): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+18 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.07
Nodes (27): periodRange(), accountId, accountOptions, accounts, clientOptions, clients, columns, companyId (+19 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (53): moneyText(), nearestTier(), tierOptions(), ladderText(), maxOptions, minOptions, openStart(), startOptions (+45 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "metricColor"
Cohesion: 0.20
Nodes (16): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+8 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.06
Nodes (46): dot, budgetText(), decisions, load(), loadError, page, pages, props (+38 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "GoogleAdsObjectView.vue"
Cohesion: 0.08
Nodes (28): campaignsPath(), childLevel(), isLevel(), objectPath(), details(), open(), base, child (+20 more)

### Community 143 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "FacebookRulesCard.vue"
Cohesion: 0.14
Nodes (15): budgetHere, dirty, draft, emit, inputOf(), levelKey, load(), loadError (+7 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.06
Nodes (39): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), cascadeLadder(), CascadePoint, cascadePoints() (+31 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (59): api, ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+51 more)

### Community 148 - "RecoveryCodes.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 149 - "events.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.06
Nodes (59): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+51 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "FacebookRulesCard.vue"
Cohesion: 0.15
Nodes (12): busy, chosen, daily, dailyValue, emit, monthly, monthlyValue, open (+4 more)

### Community 156 - "cleanFilters"
Cohesion: 0.07
Nodes (39): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+31 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "DataTable.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 159 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 160 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 161 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 162 - "useSession"
Cohesion: 0.16
Nodes (16): choose(), langs, session, chooseLang(), linkActive(), NAV_GROUPS, NavGroup, NavItem (+8 more)

### Community 163 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 164 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (22): healthSummary(), share(), unitName(), dayHint, base, decimal, filled, health (+14 more)

### Community 165 - "CompanyView.vue"
Cohesion: 0.09
Nodes (23): candidates, canManage, canOwner, changeOwner(), company, companyId, fail(), groupPeople() (+15 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.13
Nodes (14): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+6 more)

### Community 168 - "FunnelChart.vue"
Cohesion: 0.33
Nodes (3): first, FunnelStep, props

### Community 169 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 170 - "PageHeader.vue"
Cohesion: 0.12
Nodes (17): priceRulesPath(), priceRuleService(), base, columns, integer, load(), loadError, page (+9 more)

### Community 171 - "clients/service.ts"
Cohesion: 0.33
Nodes (10): CompanyStatus, AuditEntry, Client, ClientDetail, ClientNote, ClientOption, ManagerChange, NotePerson (+2 more)

### Community 172 - "tasks/rules.ts"
Cohesion: 0.12
Nodes (17): COMMENT_MAX, COMMENT_MIN, eventText(), PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, statusLabel() (+9 more)

### Community 173 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 174 - "PageBody.vue"
Cohesion: 0.09
Nodes (23): busy, complete, documentLabel, form, load(), loaded, options, save() (+15 more)

### Community 175 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 176 - "Button.vue"
Cohesion: 0.13
Nodes (13): button, classes, Props, props, choices, emit, invalid, name (+5 more)

### Community 177 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 178 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 179 - "GoogleCard.vue"
Cohesion: 0.29
Nodes (6): busy, confirm, load(), session, status, unlink()

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "google_ads/types.ts"
Cohesion: 0.14
Nodes (19): GOOGLE_ADS_CONNECT_URL, GoogleAdsAccountInput, GoogleAdsAccountRef, GoogleAdsAccountStatus, GoogleAdsAlertKind, GoogleAdsAlertSetting, GoogleAdsChangeOrigin, GoogleAdsKeyword (+11 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 187 - "ChecklistItemsView.vue"
Cohesion: 0.10
Nodes (23): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+15 more)

### Community 188 - "DataTable.vue"
Cohesion: 0.15
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 189 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.13
Nodes (17): td, th, changes, load(), loadError, origin, originOptions, page (+9 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 191 - "ClassifySitesDialog.vue"
Cohesion: 0.10
Nodes (30): loadExtras(), category, categoryOptions, changed, emit, keep, open, props (+22 more)

### Community 193 - "InvoiceDocument.vue"
Cohesion: 0.22
Nodes (12): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, monthName(), payee, PAYER (+4 more)

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `RewardEditView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `vue-sonner`, `StaffView.vue`, `Key`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `vue-router`, `NetworksView.vue`, `ApiKeyDialog.vue`, `CompaniesView.vue`, `toNumber`, `PeopleView.vue`, `RolesPanel.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `FacebookAdsetForm.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `cn`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `LoadersView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientNotesCard.vue`, `SessionsCard.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `Button.vue`, `FacebookCampaignForm.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `FacebookAlertsPanel.vue`, `MyCommissionView.vue`, `api.ts`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `RewardLeadsCard.vue`, `GoogleAdsAccountDialog.vue`, `checklists/rules.ts`, `rewards/service.ts`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `errorText`, `ClientNetworksView.vue`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `metricColor`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ResetView.vue`, `ChecklistItemDialog.vue`, `FacebookRulesCard.vue`, `LoaderEditView.vue`, `RecoveryCodes.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `FacebookRulesCard.vue`, `cleanFilters`, `DataTable.vue`, `GoogleAdsAlertsPanel.vue`, `useSession`, `PasswordCard.vue`, `AdTagMetricsView.vue`, `CompanyView.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `GamRunView.vue`, `PageHeader.vue`, `tasks/rules.ts`, `FieldsPanel.vue`, `PageBody.vue`, `Button.vue`, `GoogleCard.vue`, `Field.vue`, `LoaderPreview.vue`, `ChecklistItemsView.vue`, `DataTable.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `InvoiceDocument.vue`?**
  _High betweenness centrality (0.160) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `vue-sonner`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `vue-router`, `NetworksView.vue`, `ApiKeyDialog.vue`, `CompaniesView.vue`, `PeopleView.vue`, `RolesPanel.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `FacebookAdsetForm.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `cn`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `LoadersView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientNotesCard.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `Button.vue`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `FacebookAlertsPanel.vue`, `MyCommissionView.vue`, `api.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `GoogleAdsAccountDialog.vue`, `dashboards/types.ts`, `InvoiceServicesView.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `ClientNetworksView.vue`, `NewTaskDialog.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ResetView.vue`, `ChecklistItemDialog.vue`, `FacebookRulesCard.vue`, `LoaderEditView.vue`, `AdTagsView.vue`, `FacebookRulesCard.vue`, `cleanFilters`, `GoogleAdsAlertsPanel.vue`, `useSession`, `PasswordCard.vue`, `AdTagMetricsView.vue`, `CompanyView.vue`, `GamRunView.vue`, `PageHeader.vue`, `PageBody.vue`, `Review Focus`, `GoogleCard.vue`, `ChecklistItemsView.vue`, `DataTable.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `vue-sonner`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `Key`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `vue-router`, `NetworksView.vue`, `ApiKeyDialog.vue`, `CompaniesView.vue`, `toNumber`, `PeopleView.vue`, `RolesPanel.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `FacebookAdsetForm.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `cn`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `LoadersView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `ClientNotesCard.vue`, `vue`, `SessionsCard.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `@vueuse/core`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `Button.vue`, `FacebookCampaignForm.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `FacebookAlertsPanel.vue`, `MyCommissionView.vue`, `api.ts`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `GoogleAdsAccountDialog.vue`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `AdjustmentDialog.vue`, `ChecklistNotesCard.vue`, `errorText`, `BarChart.vue`, `ClientNetworksView.vue`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ResetView.vue`, `ChecklistItemDialog.vue`, `FacebookRulesCard.vue`, `LoaderEditView.vue`, `RecoveryCodes.vue`, `events.ts`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `FacebookRulesCard.vue`, `cleanFilters`, `DataTable.vue`, `GoogleAdsAlertsPanel.vue`, `useSession`, `PasswordCard.vue`, `AdTagMetricsView.vue`, `CompanyView.vue`, `AdTagPreview.vue`, `FunnelChart.vue`, `GamRunView.vue`, `PageHeader.vue`, `FieldsPanel.vue`, `PageBody.vue`, `drag.ts`, `Button.vue`, `GoogleCard.vue`, `Field.vue`, `LoaderPreview.vue`, `ChecklistItemsView.vue`, `DataTable.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `InvoiceDocument.vue`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.054693877551020405 - nodes in this community are weakly interconnected._