# Graph Report - avant-web  (2026-11-19)

## Corpus Check
- 408 files · ~278,462 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 4945 nodes · 12922 edges · 187 communities (181 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 148 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3538be53`
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
- metricColor
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- dependencies
- StaffView.vue
- draft-rules.ts
- steps
- MyInvoicesView.vue
- SavedViewsBar.vue
- FacebookAdForm.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- ChecklistItemsView.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- PageViewsView.vue
- GroupsView.vue
- vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- FacebookJobDialog.vue
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- FacebookObjectView.vue
- pick
- clients/rules.ts
- toNumber
- avant-web
- table.ts
- scripts
- FacebookEditView.vue
- .oxlintrc.json
- ProfileImageCard.vue
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ClientsResultsView.vue
- InviteView.vue
- FacebookAccountDialog.vue
- GoalsView.vue
- CompanyGoalCard.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- vue
- index.ts
- ResetView.vue
- ChecklistsView.vue
- MfaCard.vue
- alerts/types.ts
- session.ts
- MyCommissionView.vue
- lib/types.ts
- RolesView.vue
- RoleDialog.vue
- CurrencyCard.vue
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- TeamTabs.vue
- ClientSitesView.vue
- clients/service.ts
- rewards/rules.ts
- ApiKeyDialog.vue
- InvoicesView.vue
- reports/rules.ts
- AlertDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- @vueuse/core
- RewardMetricsView.vue
- FacebookRulesCard.vue
- LoginView.vue
- api.ts
- AddWidgetDialog.vue
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- alerts/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- ConfigPanel.vue
- ad-tags.test.ts
- checklists/rules.ts
- rewards/service.ts
- reports/types.ts
- RevenueStatusBadge.vue
- gam_tools/types.ts
- Dialog.vue
- LoadError.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- ClientTeamsView.vue
- BarChart.vue
- t
- NewTaskDialog.vue
- dashboards/rules.ts
- DashboardWidget.vue
- PriceRuleView.vue
- events.ts
- PriceRuleSiteView.vue
- facebook/types.ts
- FacebookBudgetCard.vue
- ChecklistView.vue
- loaders/rules.ts
- priorityLabel
- ChecklistItemDialog.vue
- TableState.vue
- price_rules/rules.ts
- LoaderEditView.vue
- AdTagInstallDialog.vue
- AdjustmentDialog.vue
- tasks/types.ts
- Key
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- GamRunView.vue
- views/rules.ts
- price_rules/types.ts
- Pagination.vue
- ClientNetworksCard.vue
- Review Focus
- loaders.test.ts
- AdTagMetricsView.vue
- costs/rules.ts
- LoadersView.vue
- DashboardGrid.vue
- GamRunView.vue
- AdTagPreview.vue
- lucide-vue-next
- PasswordCard.vue
- PriceRuleSitesView.vue
- ad_tags/types.ts
- tasks/rules.ts
- support-tasks.test.ts
- SettingsView.vue
- drag.ts
- results/types.ts
- GoogleCard.vue
- navigation.ts
- FakeSource
- overrides
- vite.embed.config.ts
- tabs.ts
- vue-sonner
- LoaderPreview.vue
- Button.vue
- AccountManagerCard.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 565 edges
2. `errorText()` - 352 edges
3. `vue` - 183 edges
4. `ApiError` - 131 edges
5. `lucide-vue-next` - 105 edges
6. `useSession` - 94 edges
7. `vue-sonner` - 93 edges
8. `vitest` - 62 edges
9. `vue-router` - 61 edges
10. `toNumber()` - 60 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts

## Import Cycles
- None detected.

## Communities (187 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (44): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+36 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): builderState(), emptyDraft(), fromTemplate(), toInput(), withDimensions(), apiMessage(), askRemoveMetric(), busy (+41 more)

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
Nodes (38): busy, canTransfer, duplicate, emit, errors, form, open, props (+30 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (48): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+40 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "metricColor"
Cohesion: 0.20
Nodes (16): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+8 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

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

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+12 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (31): errorText(), assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable() (+23 more)

### Community 20 - "draft-rules.ts"
Cohesion: 0.08
Nodes (42): dict, adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions (+34 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "MyInvoicesView.vue"
Cohesion: 0.06
Nodes (52): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), FiscalData, dates, monthName(), payee (+44 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.10
Nodes (23): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+15 more)

### Community 24 - "FacebookAdForm.vue"
Cohesion: 0.07
Nodes (31): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+23 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.05
Nodes (55): category, categoryOptions, changed, emit, keep, open, props, responsible (+47 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (51): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+43 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "ChecklistItemsView.vue"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

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

### Community 37 - "PageViewsView.vue"
Cohesion: 0.05
Nodes (71): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+63 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 39 - "vue"
Cohesion: 0.16
Nodes (24): widgetFailure(), emptyRun(), runKey(), runsQuery(), RunTarget, savedQueries(), useDashboardRun(), load() (+16 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.09
Nodes (30): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd() (+22 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.15
Nodes (18): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+10 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.08
Nodes (37): sameComparison(), savedPeriod(), toQuery(), viewChanged(), viewDraft(), exportUrl(), download(), download() (+29 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.09
Nodes (26): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+18 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (66): budgetText(), decisions, load(), loadError, page, pages, props, reason() (+58 more)

### Community 51 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.09
Nodes (26): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+18 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (68): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), pageCount(), pageSlice() (+60 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "table.ts"
Cohesion: 0.06
Nodes (39): dot, td, th, events, load(), loadError, open, page (+31 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (22): serverProblems(), submit(), ad, adset, detail, edit, externalId, failure (+14 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
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

### Community 70 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FacebookAccountDialog.vue"
Cohesion: 0.07
Nodes (29): model, busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit (+21 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.08
Nodes (35): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+27 more)

### Community 74 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (59): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+51 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (64): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+56 more)

### Community 79 - "vue"
Cohesion: 0.09
Nodes (21): vue, box, failed, initial, props, firstName, greeting, session (+13 more)

### Community 80 - "index.ts"
Cohesion: 0.09
Nodes (20): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+12 more)

### Community 81 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "alerts/types.ts"
Cohesion: 0.39
Nodes (7): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 85 - "session.ts"
Cohesion: 0.07
Nodes (24): pinia, vitest, vue-router, @vue/test-utils, vue-router, RouteMeta, Me, Theme (+16 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.10
Nodes (21): auditActions, errors, fallbackError, Key, STATUS_TONE, windowState(), data, endText() (+13 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.20
Nodes (16): api, Query, CompanyRef, Items, Page, AdTagService, costService, groupService (+8 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+28 more)

### Community 90 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (41): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+33 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 96 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 97 - "clients/service.ts"
Cohesion: 0.15
Nodes (19): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "ApiKeyDialog.vue"
Cohesion: 0.05
Nodes (59): UserRef, busy, catalog, chosen, copied, copyToken(), create(), DAYS (+51 more)

### Community 100 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (33): applyView(), current, sortOptions, applyView(), current, sortOptions, current, applyView() (+25 more)

### Community 101 - "reports/rules.ts"
Cohesion: 0.08
Nodes (37): emit, missingDates, options, props, setDate(), setMode(), filterable, layout (+29 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (51): dropPercent(), percentText(), priceRulePermission(), base, busy, canManage, changeStatus(), currency (+43 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (34): childLevel(), accountId, accountOptions, accounts, allSelected, base, canManage, clientOptions (+26 more)

### Community 106 - "@vueuse/core"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "FacebookRulesCard.vue"
Cohesion: 0.12
Nodes (16): model, budgetHere, dirty, draft, emit, inputOf(), levelKey, load() (+8 more)

### Community 109 - "LoginView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 110 - "api.ts"
Cohesion: 0.13
Nodes (21): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+13 more)

### Community 111 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (17): emit, kind, kinds, metric, metrics, open, props, ready (+9 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.09
Nodes (21): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+13 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (31): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+23 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 120 - "ad-tags.test.ts"
Cohesion: 0.14
Nodes (15): adTagsPath(), blankSettings(), chosenDay(), newBlock(), settingsProblem(), tagStatus(), adTagService(), AdTagDraft (+7 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.17
Nodes (13): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+5 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "reports/types.ts"
Cohesion: 0.12
Nodes (31): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, props, ReportDraft, ChartType, CustomCatalogMetric, CustomMetric (+23 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.16
Nodes (15): GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 126 - "Dialog.vue"
Cohesion: 0.10
Nodes (18): open, busy, canManage, description, editing, editingOpen, load(), loadError (+10 more)

### Community 127 - "LoadError.vue"
Cohesion: 0.09
Nodes (23): formatDate(), end(), ending, endingOthers, endOthers(), fail(), load(), loadError (+15 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.29
Nodes (9): COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "t"
Cohesion: 0.11
Nodes (23): t(), busy, confirm(), emit, props, reject(), rejectOpen, showError() (+15 more)

### Community 133 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 134 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (40): add(), dimensions, filters, periods, props, ACCOUNT_SIZE, accountWidget(), Box (+32 more)

### Community 135 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (22): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+14 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (53): moneyText(), nearestTier(), tierOptions(), ladderText(), maxOptions, minOptions, openStart(), startOptions (+45 more)

### Community 137 - "events.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (56): cascadeFunnel(), cascadeLadder(), gainQuery(), gainSeries(), modelChoices(), recommendedModel(), siteStatus(), funnel (+48 more)

### Community 139 - "facebook/types.ts"
Cohesion: 0.06
Nodes (49): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+41 more)

### Community 140 - "FacebookBudgetCard.vue"
Cohesion: 0.18
Nodes (12): current, dirty, elsewhere, emit, error, kind, parsed, props (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "loaders/rules.ts"
Cohesion: 0.14
Nodes (15): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, inputOf(), LIMITS, MAX_SECONDS (+7 more)

### Community 143 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "TableState.vue"
Cohesion: 0.12
Nodes (16): alerts, emit, load(), loadError, markRead(), page, pages, props (+8 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (34): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+26 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (33): formProblems(), previewDomain(), previewLoader(), withTemplate(), base, busy, clientOptions, clients (+25 more)

### Community 148 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 149 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "Key"
Cohesion: 0.10
Nodes (30): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+22 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 156 - "views/rules.ts"
Cohesion: 0.18
Nodes (13): props, shown, toggleColumn(), viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog (+5 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "Pagination.vue"
Cohesion: 0.22
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.06
Nodes (39): props, seats, company, error, hasSeats, load(), lost, networks (+31 more)

### Community 160 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 161 - "loaders.test.ts"
Cohesion: 0.22
Nodes (11): loadersPath(), PreviewLoader, loaderService(), LoaderService, Loader, LoaderAdblock, LoaderInput, LoaderOption (+3 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.11
Nodes (21): healthSummary(), share(), AdTag, base, decimal, filled, health, integer (+13 more)

### Community 163 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "DashboardGrid.vue"
Cohesion: 0.20
Nodes (11): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+3 more)

### Community 166 - "GamRunView.vue"
Cohesion: 0.10
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "lucide-vue-next"
Cohesion: 0.08
Nodes (34): lucide-vue-next, reka-ui, props, up, pick(), route, router, session (+26 more)

### Community 169 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "ad_tags/types.ts"
Cohesion: 0.18
Nodes (10): AdTagDevice, AdTagEdge, AdTagHealth, AdTagHealthDay, AdTagRuleMode, AdTagSettings, AdTagSide, AdTagSiteOption (+2 more)

### Community 172 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 173 - "support-tasks.test.ts"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "SettingsView.vue"
Cohesion: 0.09
Nodes (23): busy, complete, documentLabel, form, load(), loaded, options, save() (+15 more)

### Community 175 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 176 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 177 - "GoogleCard.vue"
Cohesion: 0.29
Nodes (6): busy, confirm, load(), session, status, unlink()

### Community 178 - "navigation.ts"
Cohesion: 0.24
Nodes (12): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), followOtherTab() (+4 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 183 - "vue-sonner"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+14 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Button.vue"
Cohesion: 0.05
Nodes (32): button, classes, Props, props, model, chosen, create(), emit (+24 more)

### Community 189 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (18): profileInput(), busy, canChange, emit, manager, managerId, next, NOTE_KEY (+10 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `metricColor`, `StaffView.vue`, `draft-rules.ts`, `MyInvoicesView.vue`, `SavedViewsBar.vue`, `FacebookAdForm.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PageViewsView.vue`, `GroupsView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `FacebookObjectView.vue`, `pick`, `clients/rules.ts`, `toNumber`, `table.ts`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TeamTabs.vue`, `ClientSitesView.vue`, `rewards/rules.ts`, `ApiKeyDialog.vue`, `InvoicesView.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `FacebookRulesCard.vue`, `LoginView.vue`, `api.ts`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `RewardLeadsCard.vue`, `ConfigPanel.vue`, `ad-tags.test.ts`, `checklists/rules.ts`, `reports/types.ts`, `RevenueStatusBadge.vue`, `Dialog.vue`, `LoadError.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `DashboardWidget.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `FacebookBudgetCard.vue`, `ChecklistView.vue`, `loaders/rules.ts`, `priorityLabel`, `ChecklistItemDialog.vue`, `TableState.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `Key`, `MetricStylePopover.vue`, `AdTagsView.vue`, `GamRunView.vue`, `views/rules.ts`, `Pagination.vue`, `ClientNetworksCard.vue`, `AdTagMetricsView.vue`, `costs/rules.ts`, `LoadersView.vue`, `GamRunView.vue`, `AdTagPreview.vue`, `lucide-vue-next`, `PasswordCard.vue`, `PriceRuleSitesView.vue`, `tasks/rules.ts`, `SettingsView.vue`, `GoogleCard.vue`, `navigation.ts`, `vue-sonner`, `LoaderPreview.vue`, `Button.vue`, `AccountManagerCard.vue`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `draft-rules.ts`, `MyInvoicesView.vue`, `SavedViewsBar.vue`, `FacebookAdForm.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PageViewsView.vue`, `GroupsView.vue`, `vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `FacebookObjectView.vue`, `pick`, `clients/rules.ts`, `toNumber`, `table.ts`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ClientsResultsView.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TeamTabs.vue`, `ClientSitesView.vue`, `ApiKeyDialog.vue`, `InvoicesView.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `@vueuse/core`, `RewardMetricsView.vue`, `FacebookRulesCard.vue`, `LoginView.vue`, `api.ts`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `ConfigPanel.vue`, `reports/types.ts`, `RevenueStatusBadge.vue`, `Dialog.vue`, `LoadError.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `BarChart.vue`, `t`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `DashboardWidget.vue`, `PriceRuleView.vue`, `events.ts`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `FacebookBudgetCard.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `TableState.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `Key`, `MetricStylePopover.vue`, `AdTagsView.vue`, `GamRunView.vue`, `Pagination.vue`, `ClientNetworksCard.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `DashboardGrid.vue`, `AdTagPreview.vue`, `lucide-vue-next`, `PasswordCard.vue`, `PriceRuleSitesView.vue`, `SettingsView.vue`, `drag.ts`, `GoogleCard.vue`, `navigation.ts`, `vue-sonner`, `LoaderPreview.vue`, `Button.vue`, `AccountManagerCard.vue`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05319148936170213 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `StaffView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `MyInvoicesView.vue`, `SavedViewsBar.vue`, `FacebookAdForm.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PageViewsView.vue`, `GroupsView.vue`, `vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `FacebookObjectView.vue`, `pick`, `table.ts`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientSitesView.vue`, `rewards/rules.ts`, `ApiKeyDialog.vue`, `InvoicesView.vue`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `FacebookRulesCard.vue`, `LoginView.vue`, `api.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `Dialog.vue`, `LoadError.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `t`, `NewTaskDialog.vue`, `DashboardWidget.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `FacebookBudgetCard.vue`, `ChecklistView.vue`, `loaders/rules.ts`, `ChecklistItemDialog.vue`, `TableState.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `AdTagsView.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `Review Focus`, `AdTagMetricsView.vue`, `LoadersView.vue`, `lucide-vue-next`, `PasswordCard.vue`, `PriceRuleSitesView.vue`, `SettingsView.vue`, `GoogleCard.vue`, `navigation.ts`, `vue-sonner`, `AccountManagerCard.vue`?**
  _High betweenness centrality (0.097) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._