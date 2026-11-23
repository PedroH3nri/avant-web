# Graph Report - avant-web  (2026-11-23)

## Corpus Check
- 424 files · ~293,123 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5222 nodes · 13600 edges · 181 communities (176 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 155 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `391ca541`
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
- reports/types.ts
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
- reports/rules.ts
- vue-router
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- facebook/types.ts
- ApiKeyDialog.vue
- AccountManagerCard.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- views/rules.ts
- .oxlintrc.json
- ProfileImageCard.vue
- avant-web
- AccountManagerCard.vue
- tsconfig.json
- session-start.sh
- errorText
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ClientDocumentsCard.vue
- InviteView.vue
- GoogleAdsPersonDialog.vue
- AccountManagerCard.vue
- lucide-vue-next
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- vue
- ChecklistsView.vue
- MfaCard.vue
- table.ts
- vue
- LoadError.vue
- AdTagMetricsView.vue
- CompanyGoalCard.vue
- RoleDialog.vue
- locale
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- FacebookHistoryPanel.vue
- ClientNetworksCard.vue
- MyCommissionView.vue
- rewards/rules.ts
- ApiKeysCard.vue
- FacebookEditView.vue
- ConfigPanel.vue
- checklists/types.ts
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- vue
- RewardMetricsView.vue
- errorText
- api.ts
- cleanFilters
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- Button.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- RolesView.vue
- networkName
- checklists/rules.ts
- rewards/service.ts
- Input.vue
- RevenueStatusBadge.vue
- vitest
- InvoiceServicesView.vue
- GroupedBarChart.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- RolesView.vue
- BarChart.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- ReportThumb.vue
- FacebookObjectView.vue
- ChecklistView.vue
- GoogleAdsObjectView.vue
- ResetView.vue
- ChecklistItemDialog.vue
- FacebookAlertsPanel.vue
- price_rules/rules.ts
- LoaderEditView.vue
- TeamTabs.vue
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- ClientsResultsView.vue
- price_rules/types.ts
- DataTable.vue
- router.ts
- dayText
- GoogleAdsAlertsPanel.vue
- useSession
- PageBody.vue
- LoadersView.vue
- ad-tags.test.ts
- GamRunView.vue
- AdTagPreview.vue
- PageHeader.vue
- cn
- PageBody.vue
- SaveViewDialog.vue
- applyView
- overrides
- vite.embed.config.ts
- google_ads/rules.ts
- sites/service.ts
- LoaderPreview.vue
- results/types.ts
- DashboardGrid.vue
- Status.vue
- GoogleAdsHistoryPanel.vue
- PayeeDialog.vue
- ClassifySitesDialog.vue
- FiscalDataCard.vue
- NetworkReviewActions.vue
- InvoiceDocument.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 591 edges
2. `errorText()` - 369 edges
3. `vue` - 194 edges
4. `ApiError` - 138 edges
5. `lucide-vue-next` - 111 edges
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ScaleMode`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SeriesColor`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (181 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (45): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (50): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+42 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): missingDates, builderState(), comparisonReady(), toInput(), withDimensions(), apiMessage(), askRemoveMetric(), busy (+41 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.06
Nodes (38): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 7: Web — modal de métrica personalizada e "Minhas métricas" (+30 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (32): busy, canTransfer, duplicate, emit, errors, form, open, props (+24 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (38): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+30 more)

### Community 12 - "vue-sonner"
Cohesion: 0.14
Nodes (18): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+10 more)

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
Cohesion: 0.13
Nodes (15): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+7 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.05
Nodes (42): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), assign(), busy (+34 more)

### Community 20 - "draft-rules.ts"
Cohesion: 0.04
Nodes (81): auditActions, dict, errors, fallbackError, ad, blankCard(), buttonOptions, format (+73 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.10
Nodes (22): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+14 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (42): campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+34 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

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
Nodes (55): emptyProfile(), profileBody(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+47 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "reports/types.ts"
Cohesion: 0.06
Nodes (52): Task 3: Web — tipos, serviço e regras do construtor, Lang, body, chartHeight, draft, draftKey, emit, failure (+44 more)

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

### Community 37 - "PerformanceView.vue"
Cohesion: 0.04
Nodes (73): BarItem, largest, props, LineSeries, compare, options, period, selected (+65 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

### Community 39 - "CompanyView.vue"
Cohesion: 0.09
Nodes (23): candidates, canManage, canOwner, changeOwner(), company, companyId, fail(), groupPeople() (+15 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (52): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), FacebookEditInput, account (+44 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.12
Nodes (25): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+17 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "reports/rules.ts"
Cohesion: 0.04
Nodes (81): Key, loadDraft(), emit, options, props, setDate(), setMode(), filterable (+73 more)

### Community 46 - "vue-router"
Cohesion: 0.11
Nodes (18): ApiError, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "facebook/types.ts"
Cohesion: 0.08
Nodes (32): failure, left, loading, model, options, props, SEARCHED, text (+24 more)

### Community 51 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (29): UserRef, busy, catalog, chosen, copied, create(), DAYS, emit (+21 more)

### Community 52 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (67): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, FALLBACK, METRIC_COLOR, metricColors(), formatMetric() (+59 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "views/rules.ts"
Cohesion: 0.14
Nodes (21): applyView(), sortOptions, applyView(), sortOptions, applyView(), applyView(), dirty, firstValue() (+13 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.08
Nodes (36): box, failed, initial, props, busy, drop(), input, pick() (+28 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (27): CompanyStatus, AuditEntry, Client, ClientDetail, ClientNote, ClientOption, ManagerChange, NotePerson (+19 more)

### Community 65 - "errorText"
Cohesion: 0.06
Nodes (42): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+34 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.10
Nodes (23): COMMENT_MAX, COMMENT_MIN, STATUSES, taskPlace(), assigneeOptions, change(), changeAssignee(), changePriority() (+15 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (28): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+20 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ClientDocumentsCard.vue"
Cohesion: 0.18
Nodes (15): REASON_MIN, ClientDocumentsOverview, approve(), busy, downloadFile(), emit, fail(), load() (+7 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "GoogleAdsPersonDialog.vue"
Cohesion: 0.08
Nodes (29): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+21 more)

### Community 73 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (34): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+26 more)

### Community 74 - "lucide-vue-next"
Cohesion: 0.16
Nodes (13): lucide-vue-next, reka-ui, pick(), route, router, session, open, emit (+5 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.04
Nodes (67): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+59 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.05
Nodes (62): assignee, client, clientOptions, create(), description, domain, emit, open (+54 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (55): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+47 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (75): model, chosenDay(), settingsProblem(), tagStatus(), UNIT_ORDER, unitName(), absentUnits, armed (+67 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.07
Nodes (26): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, choose(), langs, session, open (+18 more)

### Community 81 - "vue"
Cohesion: 0.07
Nodes (34): vue, props, seats, td, th, events, load(), loadError (+26 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 84 - "table.ts"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "vue"
Cohesion: 0.07
Nodes (21): pinia, vue-router, vue-router, RouteMeta, Me, Theme, accountService, authService (+13 more)

### Community 86 - "LoadError.vue"
Cohesion: 0.24
Nodes (8): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions

### Community 87 - "AdTagMetricsView.vue"
Cohesion: 0.11
Nodes (20): healthSummary(), share(), base, decimal, filled, health, integer, load() (+12 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (21): amountError, busy, canManage, changed, current, load(), monthNames, months (+13 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.05
Nodes (48): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+40 more)

### Community 90 - "locale"
Cohesion: 0.12
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): saved, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (44): BLOCK_COUNT, FORMATS, installable(), KEY_NAMES, languageLabel(), TOOL_CARDS, ToolCard, adsLines (+36 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.11
Nodes (18): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+10 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "FacebookHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 96 - "ClientNetworksCard.vue"
Cohesion: 0.06
Nodes (42): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+34 more)

### Community 97 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (17): STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError, minus() (+9 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (28): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+20 more)

### Community 99 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 100 - "FacebookEditView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 101 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, FilterOption, LIMITS, newField, periods (+5 more)

### Community 102 - "checklists/types.ts"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (50): dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency, decisionFirstFill() (+42 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (34): childLevel(), accountId, accountOptions, accounts, allSelected, base, canManage, clientOptions (+26 more)

### Community 106 - "vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "errorText"
Cohesion: 0.05
Nodes (48): model, errorText(), alerts, emit, load(), loadError, markRead(), page (+40 more)

### Community 109 - "api.ts"
Cohesion: 0.11
Nodes (32): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+24 more)

### Community 110 - "cleanFilters"
Cohesion: 0.31
Nodes (9): current, current, rows, current, current, current, cleanFilters(), monthPeriod() (+1 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.05
Nodes (78): add(), emit, kind, kinds, metric, metrics, open, props (+70 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.08
Nodes (23): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+15 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+11 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.07
Nodes (55): widgetFailure(), editableWidgets(), emptyRun(), runKey(), runsQuery(), RunTarget, savedQueries(), useDashboardRun() (+47 more)

### Community 116 - "Button.vue"
Cohesion: 0.33
Nodes (5): open, button, classes, Props, props

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "RolesView.vue"
Cohesion: 0.11
Nodes (17): model, busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit (+9 more)

### Community 120 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 121 - "checklists/rules.ts"
Cohesion: 0.16
Nodes (14): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+6 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.16
Nodes (16): saveFile(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+8 more)

### Community 123 - "Input.vue"
Cohesion: 0.25
Nodes (7): model, chosen, create(), emit, name, open, templates

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 125 - "vitest"
Cohesion: 0.09
Nodes (22): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, lang, client, managerChange, perms (+14 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 127 - "GroupedBarChart.vue"
Cohesion: 0.14
Nodes (18): amount, busy, emit, open, props, reason, reasonTouched, save() (+10 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.47
Nodes (5): opacity(), point(), props, slices, total

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (30): childLevel(), objectPath(), accountId, accountOptions, accounts, clientOptions, clients, columns (+22 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.06
Nodes (39): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+31 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): cascadeFunnel(), cascadeLadder(), gainQuery(), gainSeries(), modelCounts(), funnel, ladder, active (+44 more)

### Community 139 - "ReportThumb.vue"
Cohesion: 0.36
Nodes (10): colorVar(), metricColor(), chart, hourLabel(), boughtColor, chart, offeredColor, gainChart (+2 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.04
Nodes (75): current, dirty, elsewhere, emit, error, kind, parsed, props (+67 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, splitRows(), checklistService, checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "GoogleAdsObjectView.vue"
Cohesion: 0.10
Nodes (23): periodRange(), isLevel(), base, children, currency, days, detail, externalId (+15 more)

### Community 143 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "FacebookAlertsPanel.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (36): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+28 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (57): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+49 more)

### Community 148 - "TeamTabs.vue"
Cohesion: 0.10
Nodes (24): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+16 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (49): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+41 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.16
Nodes (16): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+8 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 156 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "DataTable.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 159 - "router.ts"
Cohesion: 0.15
Nodes (11): announceCompany(), CompanyMessage, onCompanyAnnounced(), busy, email, error, sent, submit() (+3 more)

### Community 160 - "dayText"
Cohesion: 0.50
Nodes (4): dayLabel, dayOptions, dayText(), adUnitOptions

### Community 161 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 162 - "useSession"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 163 - "PageBody.vue"
Cohesion: 0.10
Nodes (17): busy, current, emit, mismatch, password, password2, ready, short (+9 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "ad-tags.test.ts"
Cohesion: 0.23
Nodes (13): FiscalData, invoiceService, AvailableMonth, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+5 more)

### Community 166 - "GamRunView.vue"
Cohesion: 0.10
Nodes (34): chosen, defaultSites(), finishedSteps(), formatName(), RUN_TONE, runStateLabel(), siteSummary(), STEP_TONE (+26 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (16): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+8 more)

### Community 170 - "PageHeader.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "cn"
Cohesion: 0.09
Nodes (18): props, up, cn(), kindClass(), GoogleAdsTab, model, props, TABS (+10 more)

### Community 174 - "PageBody.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 176 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

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
Cohesion: 0.05
Nodes (56): PERIODS, busy, chosen, daily, dailyValue, emit, monthly, monthlyValue (+48 more)

### Community 183 - "sites/service.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 186 - "DashboardGrid.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 187 - "Status.vue"
Cohesion: 0.14
Nodes (11): dot, checklistItemService, canManage, dialogOpen, editing, items, load(), loadError (+3 more)

### Community 189 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 191 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 193 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 195 - "NetworkReviewActions.vue"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 196 - "InvoiceDocument.vue"
Cohesion: 0.29
Nodes (7): dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `ProfileImageCard.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `vue-sonner`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `vue-router`, `NetworksView.vue`, `facebook/types.ts`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `views/rules.ts`, `AccountManagerCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `ClientDocumentsCard.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `lucide-vue-next`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `LoadError.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookHistoryPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `ConfigPanel.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `errorText`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `Button.vue`, `RewardLeadsCard.vue`, `RolesView.vue`, `networkName`, `checklists/rules.ts`, `Input.vue`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `ReportThumb.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ResetView.vue`, `ChecklistItemDialog.vue`, `FacebookAlertsPanel.vue`, `price_rules/rules.ts`, `LoaderEditView.vue`, `TeamTabs.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `ClientsResultsView.vue`, `DataTable.vue`, `router.ts`, `dayText`, `GoogleAdsAlertsPanel.vue`, `useSession`, `PageBody.vue`, `LoadersView.vue`, `GamRunView.vue`, `AdTagPreview.vue`, `PageHeader.vue`, `cn`, `PageBody.vue`, `SaveViewDialog.vue`, `applyView`, `google_ads/rules.ts`, `sites/service.ts`, `LoaderPreview.vue`, `DashboardGrid.vue`, `Status.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`, `InvoiceDocument.vue`?**
  _High betweenness centrality (0.154) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `vue-sonner`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `vue-router`, `NetworksView.vue`, `facebook/types.ts`, `ApiKeyDialog.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `AccountManagerCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `ClientDocumentsCard.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `lucide-vue-next`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `LoadError.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `FacebookHistoryPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `RolesView.vue`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ResetView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `AdTagsView.vue`, `ClientsResultsView.vue`, `router.ts`, `GoogleAdsAlertsPanel.vue`, `PageBody.vue`, `LoadersView.vue`, `GamRunView.vue`, `PageHeader.vue`, `PageBody.vue`, `google_ads/rules.ts`, `Status.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05272108843537415 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `vue-sonner`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/types.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `CompanyView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `reports/rules.ts`, `vue-router`, `NetworksView.vue`, `facebook/types.ts`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `ProfileImageCard.vue`, `AccountManagerCard.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ClientDocumentsCard.vue`, `InviteView.vue`, `GoogleAdsPersonDialog.vue`, `AccountManagerCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `vue`, `LoadError.vue`, `AdTagMetricsView.vue`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `FacebookHistoryPanel.vue`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `ConfigPanel.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `vue`, `RewardMetricsView.vue`, `errorText`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `Button.vue`, `RewardLeadsCard.vue`, `RolesView.vue`, `Input.vue`, `RevenueStatusBadge.vue`, `vitest`, `InvoiceServicesView.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `BarChart.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ResetView.vue`, `ChecklistItemDialog.vue`, `FacebookAlertsPanel.vue`, `LoaderEditView.vue`, `TeamTabs.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `ClientsResultsView.vue`, `DataTable.vue`, `router.ts`, `GoogleAdsAlertsPanel.vue`, `useSession`, `PageBody.vue`, `LoadersView.vue`, `GamRunView.vue`, `AdTagPreview.vue`, `PageHeader.vue`, `cn`, `PageBody.vue`, `SaveViewDialog.vue`, `google_ads/rules.ts`, `LoaderPreview.vue`, `DashboardGrid.vue`, `Status.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`, `InvoiceDocument.vue`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._