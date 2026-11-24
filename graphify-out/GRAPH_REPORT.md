# Graph Report - avant-web  (2026-11-24)

## Corpus Check
- 452 files · ~318,875 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5681 nodes · 14831 edges · 208 communities (200 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 163 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `565a1b50`
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
- draft-rules.ts
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
- vue-sonner
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
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- SiteDetailView.vue
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- ClientsResultsView.vue
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
- commission-components.test.ts
- GoogleAdsObjectView.vue
- Field.vue
- vue
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
- PageBody.vue
- formatDate
- CompanyGoalCard.vue
- RoleDialog.vue
- contracts/service.ts
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- alerts/types.ts
- reports/rules.ts
- Status.vue
- rewards/rules.ts
- GoalsView.vue
- reports/types.ts
- ClientNetworksView.vue
- GoalTemplatesDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- CompaniesView.vue
- RewardMetricsView.vue
- Key
- index.ts
- events.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- rewards/service.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PriceRuleSitesView.vue
- useSession
- ApiKeyDialog.vue
- google_ads/types.ts
- CustomThemeDialog.vue
- ad_tags/types.ts
- ReservedNetworksCard.vue
- formatDate
- session.ts
- ChecklistNotesCard.vue
- vitest
- sortValue
- FiscalDataCard.vue
- LoadersView.vue
- GamRunView.vue
- MyCommissionView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- invoices/types.ts
- costs/rules.ts
- GoogleAdsAlertsPanel.vue
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
- lucide-vue-next
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
- ThemeCard.vue
- TaskTimeline.vue
- FacebookAlertsPanel.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- FieldsPanel.vue
- FacebookAdForm.vue
- CompanyView.vue
- vite.embed.config.ts
- AlertDialog.vue
- Pagination.vue
- metricColor
- DashboardGrid.vue
- inventory/service.ts
- AccountStatus.vue
- GroupedBarChart.vue
- dashboards/types.ts
- overrides
- ClientNetworksCard.vue
- google_ads/rules.ts
- NetworkReviewActions.vue
- LoaderPreview.vue
- costs/service.ts
- InvoiceServicesView.vue
- checklists/types.ts
- ApiKeyDialog.vue
- AdTagInstallDialog.vue
- api.ts
- ProfileImageCard.vue
- AddWidgetDialog.vue
- ThemeCard.vue
- tasks/types.ts
- ChecklistView.vue
- Input.vue
- SettingsView.vue
- drag.ts
- errorText
- CurrencyCard.vue
- RevenueStatusBadge.vue
- lang
- priorityLabel
- PageBody.vue
- 20. CDN dos scripts do site (cdn.groone.com)
- Card.vue
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedReport`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ScaleMode`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (208 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (44): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+36 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (49): profileBody(), profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments (+41 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (50): builderState(), fittingChart(), toInput(), toQuery(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric() (+42 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.06
Nodes (37): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 7: Web — modal de métrica personalizada e "Minhas métricas" (+29 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (41): changeLines, busy, canTransfer, choice(), duplicate, emit, errors, form (+33 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (51): adding, addSite(), allChosen, allSites, archived, assignedOnly, availableFilters, barFilters (+43 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (20): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+12 more)

### Community 12 - "draft-rules.ts"
Cohesion: 0.06
Nodes (60): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+52 more)

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
Nodes (46): tn(), asked, check, countdown(), current, display, emit, label (+38 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (29): emit, active, activeView, busy, canUpdate, choose(), dialogOpen, editing (+21 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (44): byManager(), campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName() (+36 more)

### Community 25 - "facebook/types.ts"
Cohesion: 0.08
Nodes (33): failure, left, load(), loading, model, options, props, SEARCHED (+25 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (27): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+19 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (59): emptyProfile(), adding, barFilters, busy, canceling, cancelInvite(), cancelOpen, canManage (+51 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "vue-sonner"
Cohesion: 0.08
Nodes (25): vue-sonner, toasterTheme, LINES, showBootFailure(), startLang(), announceCompany(), CompanyMessage, onCompanyAnnounced() (+17 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (42): FacebookTab, model, props, TABS, accounts, canConnect, canManage, clientName() (+34 more)

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
Cohesion: 0.12
Nodes (23): categoryOptions, category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (39): APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category, chosen() (+31 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.05
Nodes (53): dot, blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, objectiveOf(), serverProblems(), FacebookAdInput (+45 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (37): toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS, DEFAULT_FILTERS (+29 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.13
Nodes (20): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+12 more)

### Community 45 - "cn"
Cohesion: 0.09
Nodes (19): props, up, panelItem(), railItem(), model, cn(), props, GoogleAdsTab (+11 more)

### Community 46 - "GroupsView.vue"
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
Nodes (73): BarItem, largest, props, opacity(), point(), props, slices, total (+65 more)

### Community 51 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (19): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+11 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (66): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, metricColors(), formatMetric(), toNumber(), metricText() (+58 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (22): formatMonth(), periodText(), clients, COLUMN_LABELS, columnLabel(), COLUMNS, currency, DEFAULT_VIEW (+14 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (33): Items, CompanyStatus, clientService, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote (+25 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.11
Nodes (22): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+14 more)

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
Cohesion: 0.05
Nodes (46): vitest, pageCount(), pageSlice(), shownRows, NO_COMPARISON, sameComparison(), savedPeriod(), ThumbShape (+38 more)

### Community 71 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (24): channelKey(), isLevel(), objectState(), GoogleAdsTotals, base, children, currency, days (+16 more)

### Community 74 - "vue"
Cohesion: 0.14
Nodes (27): vue, current, current, current, rows, current, current, current (+19 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.06
Nodes (28): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+20 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (43): applyView(), barFilters, busy, canCreate, canDelete, canUpdate, checking, choose() (+35 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (69): model, chosenDay(), tagStatus(), toPayload(), absentUnits, armed, base, blocking (+61 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (43): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+35 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.07
Nodes (33): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+25 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (25): stateLabel(), barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS, filterLabel(), FILTERS (+17 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.15
Nodes (16): valid, Choice, choice, choiceLabel(), choices, emit, open, path (+8 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.10
Nodes (20): compare, options, period, selected, PERIOD_PRESETS, addFilter(), addTyped(), CHARTS (+12 more)

### Community 86 - "PageBody.vue"
Cohesion: 0.12
Nodes (16): canSeeChecklists, canSeePriceRules, load(), loadError, notFound, responsibleName, route, router (+8 more)

### Community 87 - "formatDate"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), base, decimal, filled, health, integer, load() (+13 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "contracts/service.ts"
Cohesion: 0.19
Nodes (12): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+4 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "alerts/types.ts"
Cohesion: 0.31
Nodes (9): Page, alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage (+1 more)

### Community 96 - "reports/rules.ts"
Cohesion: 0.08
Nodes (41): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), filterable (+33 more)

### Community 97 - "Status.vue"
Cohesion: 0.13
Nodes (15): active, KINDS, load(), loadError, loadRuns(), network, networkId, route (+7 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.08
Nodes (34): dayLabel, dayOptions, answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE (+26 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.06
Nodes (50): Task 3: Web — tipos, serviço e regras do construtor, FALLBACK, METRIC_COLOR, Lang, body, chartHeight, draft, draftKey (+42 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (36): awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies, company (+28 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.04
Nodes (59): cascadeFunnel(), cascadeLadder(), dropPercent(), nearestTier(), percentText(), priceRulePermission(), base, busy (+51 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (40): childLevel(), accountId, accountOptions, accounts, allSelected, availableFilters, barFilters, base (+32 more)

### Community 106 - "CompaniesView.vue"
Cohesion: 0.05
Nodes (34): box, failed, initial, props, latestCall(), barFilters, columnLabel(), COLUMNS (+26 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "Key"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 109 - "index.ts"
Cohesion: 0.06
Nodes (34): auditText(), fill(), formatAgo(), loaded, loaders, loadLang(), Messages, messages() (+26 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (41): add(), dimensions, filters, periods, props, ACCOUNT_SIZE, accountWidget(), Box (+33 more)

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
Cohesion: 0.11
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+22 more)

### Community 116 - "rewards/service.ts"
Cohesion: 0.15
Nodes (16): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+8 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.09
Nodes (22): activeOptions, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS (+14 more)

### Community 120 - "useSession"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.09
Nodes (27): copyLine(), copyToken(), copied, copyAll(), download(), manual, props, session (+19 more)

### Community 122 - "google_ads/types.ts"
Cohesion: 0.09
Nodes (29): busy, chosen, daily, emit, monthly, open, props, save() (+21 more)

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.07
Nodes (52): alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss(), derivedBorder() (+44 more)

### Community 124 - "ad_tags/types.ts"
Cohesion: 0.17
Nodes (15): AdTagService, AdTag, AdTagBlock, AdTagDevice, AdTagDraft, AdTagEdge, AdTagHealth, AdTagHealthDay (+7 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.12
Nodes (17): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+9 more)

### Community 126 - "formatDate"
Cohesion: 0.11
Nodes (19): formatDate(), canCustomize, checkedNote, checklist, countedRows, customizeOpen, customizing, groups (+11 more)

### Community 127 - "session.ts"
Cohesion: 0.07
Nodes (28): pinia, @vue/test-utils, choose(), langs, session, chooseLang(), theme, CompanyRef (+20 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.19
Nodes (10): loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts (+2 more)

### Community 130 - "sortValue"
Cohesion: 0.14
Nodes (20): applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions, applyView(), sortOptions (+12 more)

### Community 131 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.08
Nodes (28): base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, FILTER_LABELS, filterLabel() (+20 more)

### Community 133 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 134 - "MyCommissionView.vue"
Cohesion: 0.12
Nodes (19): discount(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+11 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), objectPath(), accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions (+28 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (51): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+43 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+14 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (51): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), active, automaticRuleCount, base (+43 more)

### Community 139 - "invoices/types.ts"
Cohesion: 0.27
Nodes (13): UserRef, FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+5 more)

### Community 140 - "costs/rules.ts"
Cohesion: 0.29
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 141 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 142 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.14
Nodes (14): busy, daily, emit, monthly, onLimit, onLimitOptions, open, personOptions (+6 more)

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
Nodes (33): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+25 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (64): api, ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems() (+56 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.11
Nodes (22): assignee, client, clientOptions, create(), description, domain, emit, open (+14 more)

### Community 150 - "checklists/rules.ts"
Cohesion: 0.14
Nodes (18): title, choiceDesc(), dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, monthName(), NOTE_MAX (+10 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (21): barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel(), FILTERS (+13 more)

### Community 152 - "lucide-vue-next"
Cohesion: 0.11
Nodes (20): lucide-vue-next, reka-ui, route, router, session, open, session, dates (+12 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.04
Nodes (58): copied, open, props, t(), availableFilters, base, busy, COLUMN_LABELS (+50 more)

### Community 155 - "table.ts"
Cohesion: 0.08
Nodes (25): td, th, events, load(), loadError, open, page, pages (+17 more)

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (65): budgetText(), decisions, loadError, page, pages, props, reason(), total (+57 more)

### Community 159 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.29
Nodes (13): alertDefinition(), AlertForm, alertForm(), AlertGroup, alertInput(), alertState(), compares(), conditionText() (+5 more)

### Community 161 - "MetricStylePopover.vue"
Cohesion: 0.18
Nodes (14): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+6 more)

### Community 162 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (26): pick(), metricOptions, options, ruleEnd(), setGoal(), roleName(), roleOptions, busy (+18 more)

### Community 163 - "ThemeCard.vue"
Cohesion: 0.15
Nodes (20): ThemeColors, Theme, busy, confirm, load(), session, status, unlink() (+12 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.13
Nodes (14): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+6 more)

### Community 165 - "FacebookAlertsPanel.vue"
Cohesion: 0.06
Nodes (34): model, alerts, emit, load(), loadError, markRead(), page, pages (+26 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.10
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (17): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+9 more)

### Community 168 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 169 - "FacebookAdForm.vue"
Cohesion: 0.05
Nodes (42): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+34 more)

### Community 170 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.10
Nodes (20): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+12 more)

### Community 173 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 174 - "metricColor"
Cohesion: 0.36
Nodes (10): colorVar(), metricColor(), chart, hourLabel(), boughtColor, chart, offeredColor, gainChart (+2 more)

### Community 175 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (23): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+15 more)

### Community 176 - "inventory/service.ts"
Cohesion: 0.16
Nodes (19): ContractSource, ContractStatus, FilterOption, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, ClientSiteDetail (+11 more)

### Community 177 - "AccountStatus.vue"
Cohesion: 0.12
Nodes (18): props, seats, company, error, hasSeats, load(), lost, networks (+10 more)

### Community 178 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 179 - "dashboards/types.ts"
Cohesion: 0.15
Nodes (20): chosen, create(), emit, name, open, templates, dashboardService, Dashboard (+12 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "ClientNetworksCard.vue"
Cohesion: 0.13
Nodes (15): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+7 more)

### Community 182 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (20): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, CHANGE_KEYS, changeText(), CHANNEL_KEYS, LEVELS (+12 more)

### Community 183 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "costs/service.ts"
Cohesion: 0.19
Nodes (11): Query, costService, Cost, CostInput, CostKind, FormulaCheck, resultService, CompanyResults (+3 more)

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.09
Nodes (19): open, button, classes, Props, props, busy, canManage, description (+11 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.19
Nodes (14): checklistOverrideService, checklistService, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride, ChecklistOverrideInput (+6 more)

### Community 188 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 189 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 190 - "api.ts"
Cohesion: 0.21
Nodes (14): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+6 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 193 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (13): atLimit, choose(), customs, editing, editorOpen, limit, remove(), removeBusy (+5 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.26
Nodes (10): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+2 more)

### Community 195 - "ChecklistView.vue"
Cohesion: 0.16
Nodes (15): overrideSummary(), ROW_TONE, checking, checklist, checklistId, checkNow(), fail(), load() (+7 more)

### Community 196 - "Input.vue"
Cohesion: 0.08
Nodes (19): open, model, choices, description, emit, invalid, name, open (+11 more)

### Community 197 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "errorText"
Cohesion: 0.23
Nodes (13): pick(), errorText(), checkNow(), confirmEnd(), confirmRemove(), create(), load(), loadContracts() (+5 more)

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 201 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 202 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 203 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

### Community 206 - "Card.vue"
Cohesion: 0.08
Nodes (23): busy, current, emit, mismatch, password, password2, ready, short (+15 more)

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `draft-rules.ts`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `vue-sonner`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `cn`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `SiteDetailView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ClientsResultsView.vue`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `Field.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `PageBody.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `contracts/service.ts`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `reports/rules.ts`, `Status.vue`, `rewards/rules.ts`, `GoalsView.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `Key`, `index.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `rewards/service.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `useSession`, `ApiKeyDialog.vue`, `google_ads/types.ts`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `sortValue`, `FiscalDataCard.vue`, `LoadersView.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `checklists/rules.ts`, `InvoicesView.vue`, `lucide-vue-next`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `alerts/rules.ts`, `MetricStylePopover.vue`, `RolesPanel.vue`, `ThemeCard.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `FieldsPanel.vue`, `FacebookAdForm.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `metricColor`, `AccountStatus.vue`, `dashboards/types.ts`, `ClientNetworksCard.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `ApiKeyDialog.vue`, `AdTagInstallDialog.vue`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `Input.vue`, `SettingsView.vue`, `errorText`, `CurrencyCard.vue`, `RevenueStatusBadge.vue`, `priorityLabel`, `Card.vue`?**
  _High betweenness centrality (0.206) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `vue-sonner`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `SiteDetailView.vue`, `lib/types.ts`, `ClientsResultsView.vue`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `PageBody.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `Status.vue`, `rewards/rules.ts`, `GoalsView.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `Key`, `index.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ApiKeyDialog.vue`, `google_ads/types.ts`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `lucide-vue-next`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `RolesPanel.vue`, `ThemeCard.vue`, `FacebookAlertsPanel.vue`, `FacebookAdForm.vue`, `CompanyView.vue`, `AlertDialog.vue`, `DashboardGrid.vue`, `AccountStatus.vue`, `ClientNetworksCard.vue`, `NetworkReviewActions.vue`, `InvoiceServicesView.vue`, `ApiKeyDialog.vue`, `ProfileImageCard.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `SettingsView.vue`, `CurrencyCard.vue`, `Card.vue`?**
  _High betweenness centrality (0.085) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05319148936170213 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `draft-rules.ts`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `vue-sonner`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SiteDetailView.vue`, `ClientSitesView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `cn`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `SiteDetailView.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `ClientsResultsView.vue`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ReportView.vue`, `GoogleAdsObjectView.vue`, `Field.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `PageBody.vue`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `reports/rules.ts`, `Status.vue`, `GoalsView.vue`, `reports/types.ts`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `Key`, `index.ts`, `events.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `useSession`, `ApiKeyDialog.vue`, `google_ads/types.ts`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `formatDate`, `session.ts`, `ChecklistNotesCard.vue`, `FiscalDataCard.vue`, `LoadersView.vue`, `GamRunView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `GoogleAdsAlertsPanel.vue`, `GoogleAdsAccountDialog.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `lucide-vue-next`, `AdTagsView.vue`, `table.ts`, `AdjustmentDialog.vue`, `FacebookObjectView.vue`, `PayeeDialog.vue`, `MetricStylePopover.vue`, `RolesPanel.vue`, `ThemeCard.vue`, `TaskTimeline.vue`, `FacebookAlertsPanel.vue`, `AdTagPreview.vue`, `FieldsPanel.vue`, `FacebookAdForm.vue`, `CompanyView.vue`, `AlertDialog.vue`, `Pagination.vue`, `DashboardGrid.vue`, `AccountStatus.vue`, `GroupedBarChart.vue`, `dashboards/types.ts`, `ClientNetworksCard.vue`, `NetworkReviewActions.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `ApiKeyDialog.vue`, `AdTagInstallDialog.vue`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `Input.vue`, `SettingsView.vue`, `drag.ts`, `CurrencyCard.vue`, `RevenueStatusBadge.vue`, `Card.vue`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.054693877551020405 - nodes in this community are weakly interconnected._