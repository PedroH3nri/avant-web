# Graph Report - avant-web  (2026-11-25)

## Corpus Check
- 461 files · ~321,910 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5721 nodes · 14970 edges · 187 communities (182 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 165 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `89fea6dc`
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
- SettingsView.vue
- ClientSitesView.vue
- api.ts
- TeamCommissionsView.vue
- compilerOptions
- api.ts
- FacebookJobDialog.vue
- ApiKeyDialog.vue
- GroupsView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- PerformanceView.vue
- DashboardFiltersBar.vue
- clients/rules.ts
- toNumber
- avant-web
- lib/types.ts
- scripts
- vue-sonner
- .oxlintrc.json
- RolesView.vue
- avant-web
- AccountManagerCard.vue
- tsconfig.json
- session-start.sh
- fontSize.test.ts
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- ReportView.vue
- draft-rules.ts
- GoogleAdsObjectView.vue
- vue-router
- Query
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
- ClassifySitesDialog.vue
- MfaCard.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- Page
- costs/rules.ts
- MetricStylePopover.vue
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
- invoices/types.ts
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
- ResetView.vue
- ApiKeyDialog.vue
- BarChart.vue
- CustomThemeDialog.vue
- ReservedNetworksCard.vue
- SiteChecklistCard.vue
- session.ts
- ChecklistNotesCard.vue
- vitest
- LoadersView.vue
- contracts/service.ts
- MyCommissionView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- vue
- rewards/service.ts
- CompanyView.vue
- ApiKeysCard.vue
- ChecklistItemsView.vue
- gam-tools-view.test.ts
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- NewTaskDialog.vue
- InvoicesView.vue
- ClientSiteView.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- AdjustmentDialog.vue
- price_rules/types.ts
- table.ts
- alerts/rules.ts
- TaskTimeline.vue
- LoadError.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- GamRunView.vue
- ClientNetworksCard.vue
- vite.embed.config.ts
- AlertDialog.vue
- dayText
- errorText
- Status.vue
- ApiError
- cn
- Input.vue
- RevenueStatusBadge.vue
- drag.ts
- LoaderPreview.vue
- Review Focus
- InvoiceServicesView.vue
- checklists/types.ts
- vitest
- PasswordCard.vue
- ProfileImageCard.vue
- AddWidgetDialog.vue
- ThemeCard.vue
- tasks/types.ts
- ChecklistView.vue
- FacebookAdForm.vue
- NetworkAdsTxtCard.vue
- CurrencyCard.vue
- FakeSource
- priceRulePermission
- 20. CDN dos scripts do site (cdn.groone.com)

## God Nodes (most connected - your core abstractions)
1. `t()` - 689 edges
2. `errorText()` - 393 edges
3. `vue` - 215 edges
4. `ApiError` - 150 edges
5. `lucide-vue-next` - 124 edges
6. `vue-sonner` - 103 edges
7. `useSession` - 101 edges
8. `vitest` - 71 edges
9. `vue-router` - 69 edges
10. `td` - 67 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (187 total, 5 thin omitted)

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
Nodes (45): builderState(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog (+37 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.06
Nodes (35): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+27 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (30): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+22 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (30): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+22 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (40): busy, canTransfer, duplicate, emit, errors, form, open, props (+32 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (54): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+46 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (20): areaPaths, box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, linePath() (+12 more)

### Community 12 - "FacebookObjectView.vue"
Cohesion: 0.09
Nodes (29): formatCount(), formatMoney(), formatRatio(), periodRange(), FacebookTotals, base, canManage, currency (+21 more)

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
Cohesion: 0.08
Nodes (31): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+23 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.05
Nodes (42): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), assign(), busy (+34 more)

### Community 20 - "InstallCheckCell.vue"
Cohesion: 0.07
Nodes (43): asked, check, countdown(), current, display, emit, label, open (+35 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.09
Nodes (30): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, monthName(), payee, PAYER (+22 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (32): Items, emit, active, activeView, busy, canUpdate, choose(), dialogOpen (+24 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (46): GoogleAdsTab, model, props, TABS, byManager(), accounts, applying, applySuffix() (+38 more)

### Community 25 - "facebook/types.ts"
Cohesion: 0.04
Nodes (72): current, dirty, elsewhere, emit, error, kind, parsed, props (+64 more)

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
Nodes (60): emptyProfile(), profileBody(), adding, barFilters, busy, canceling, cancelInvite(), cancelOpen (+52 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "index.ts"
Cohesion: 0.06
Nodes (33): LINES, showBootFailure(), auditText(), fill(), formatAgo(), loaded, loaders, loadLang() (+25 more)

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

### Community 37 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 38 - "SettingsView.vue"
Cohesion: 0.09
Nodes (23): busy, complete, documentLabel, form, load(), loaded, options, save() (+15 more)

### Community 39 - "ClientSitesView.vue"
Cohesion: 0.05
Nodes (44): applyView(), APPROVAL_LABELS, approvalFilter, approvalOptions, APPROVALS, barFilters, canSeeChecklists, category (+36 more)

### Community 40 - "api.ts"
Cohesion: 0.14
Nodes (20): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+12 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.06
Nodes (35): discount(), toIssue(), adjusting, adjustOpen, barFilters, canManage, columnLabel(), COLUMNS (+27 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "api.ts"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.16
Nodes (17): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+9 more)

### Community 45 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 46 - "GroupsView.vue"
Cohesion: 0.06
Nodes (43): busy, create(), description, duplicate, emit, name, open, people (+35 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.06
Nodes (44): company, error, hasSeats, load(), lost, networks, router, session (+36 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (70): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), change(), countryName(), dailySeries() (+62 more)

### Community 51 - "DashboardFiltersBar.vue"
Cohesion: 0.18
Nodes (9): dimensions, filters, periods, props, filterPeriod(), withPeriod(), withValue(), FilterDimension (+1 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (64): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), metricText(), valueText() (+56 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "lib/types.ts"
Cohesion: 0.11
Nodes (20): Person, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "vue-sonner"
Cohesion: 0.05
Nodes (42): vue-sonner, pick(), route, router, session, choose(), langs, session (+34 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "RolesView.vue"
Cohesion: 0.08
Nodes (23): broken, hue, initials, props, RoleOption, canManage, canTeam, editable() (+15 more)

### Community 61 - "AccountManagerCard.vue"
Cohesion: 0.06
Nodes (39): CompanyStatus, STAFF_STATUSES, STATUS_TONE, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote (+31 more)

### Community 64 - "fontSize.test.ts"
Cohesion: 0.20
Nodes (7): autoprefixer@^10.6.1, postcss@^8.5.31, autoprefixer, postcss, SCALED, scaleRem(), fontSize

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
Cohesion: 0.11
Nodes (19): devDependencies, jsdom@^30.1.3, oxlint@^1.89.0, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+11 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ReportView.vue"
Cohesion: 0.07
Nodes (38): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+30 more)

### Community 71 - "draft-rules.ts"
Cohesion: 0.03
Nodes (114): auditActions, dict, errors, fallbackError, Key, adset, eventOptions, genderOptions (+106 more)

### Community 72 - "GoogleAdsObjectView.vue"
Cohesion: 0.03
Nodes (88): PERIODS, alerts, emit, load(), loadError, markRead(), page, pages (+80 more)

### Community 73 - "vue-router"
Cohesion: 0.09
Nodes (14): @vue/test-utils, catalog, me, report, result, service, catalog, me (+6 more)

### Community 74 - "Query"
Cohesion: 0.19
Nodes (11): Query, costService, Cost, CostInput, CostKind, FormulaCheck, resultService, CompanyResults (+3 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.06
Nodes (28): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+20 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.08
Nodes (24): statusesFor(), barFilters, canSeeAll, clients, creating, DEFAULT_FILTERS, FILTER_LABELS, filterLabel() (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (43): applyView(), barFilters, busy, canCreate, canDelete, canUpdate, checking, choose() (+35 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (67): model, tagStatus(), toPayload(), absentUnits, armed, base, blocking, blocks (+59 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (48): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+40 more)

### Community 81 - "FacebookAccountDialog.vue"
Cohesion: 0.04
Nodes (58): model, model, busy, daily, dailyValue, emit, monthly, monthlyValue (+50 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.10
Nodes (27): dollars(), stateLabel(), STATES, barFilters, checklists, DEFAULT_FILTERS, fail(), FILTER_LABELS (+19 more)

### Community 83 - "SiteItemOverrideDialog.vue"
Cohesion: 0.14
Nodes (17): valid, Choice, choice, choiceDesc(), choiceLabel(), choices, emit, open (+9 more)

### Community 84 - "ClientNotesCard.vue"
Cohesion: 0.10
Nodes (23): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+15 more)

### Community 85 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, filterable, LIMITS, newField, periods (+5 more)

### Community 86 - "pick"
Cohesion: 0.15
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

### Community 87 - "formatDate"
Cohesion: 0.08
Nodes (34): healthSummary(), share(), adTagService(), AdTagService, AdTag, AdTagDevice, AdTagDraft, AdTagEdge (+26 more)

### Community 88 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.07
Nodes (34): api, SiteScope, peopleService, staffService, busy, category, chipClass(), chosen (+26 more)

### Community 90 - "ClassifySitesDialog.vue"
Cohesion: 0.05
Nodes (56): NetworkSite, categoryOptions, category, categoryOptions, changed, emit, keep, open (+48 more)

### Community 91 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.08
Nodes (29): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+21 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "Page"
Cohesion: 0.36
Nodes (8): Page, alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 96 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 97 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 100 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (19): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+11 more)

### Community 101 - "ClientNetworksView.vue"
Cohesion: 0.06
Nodes (37): FilterOption, awaitingOnly, barFilters, canAssign, chosen(), columnLabel(), COLUMNS, companies (+29 more)

### Community 102 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

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
Nodes (30): barFilters, columnLabel(), COLUMNS, companies, companiesCall, companyStatus, DEFAULT_FILTERS, DEFAULT_VIEW (+22 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (19): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+11 more)

### Community 109 - "invoices/types.ts"
Cohesion: 0.13
Nodes (23): UserRef, FiscalData, busy, complete, documentLabel, emit, form, open (+15 more)

### Community 110 - "events.ts"
Cohesion: 0.16
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, InstallCheckUpdated, listen() (+8 more)

### Community 111 - "reports/types.ts"
Cohesion: 0.07
Nodes (41): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, PERIOD_PRESETS, emit, props (+33 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.06
Nodes (34): availableFilters, base, COLUMN_LABELS, columnLabel(), columns, companies, companyOptions, deleted (+26 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (43): Localized, editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience() (+35 more)

### Community 116 - "reports/rules.ts"
Cohesion: 0.09
Nodes (39): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), AXIS_CHARTS (+31 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "PriceRuleSitesView.vue"
Cohesion: 0.07
Nodes (30): lucide-vue-next, vue-router, vue-router, RouteMeta, IntegrationKind, activeOptions, base, COLUMN_LABELS (+22 more)

### Community 120 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 121 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (32): copyLine(), copyToken(), copied, copyAll(), download(), manual, props, session (+24 more)

### Community 122 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 123 - "CustomThemeDialog.vue"
Cohesion: 0.06
Nodes (59): toasterTheme, alphaOf(), channels(), COLOR_KEYS, contrast(), CONTRAST_RULES, ContrastRule, customThemeCss() (+51 more)

### Community 125 - "ReservedNetworksCard.vue"
Cohesion: 0.14
Nodes (14): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+6 more)

### Community 126 - "SiteChecklistCard.vue"
Cohesion: 0.09
Nodes (30): canCustomize, checklist, countedRows, customizeOpen, customizing, groups, load(), loadError (+22 more)

### Community 127 - "session.ts"
Cohesion: 0.11
Nodes (28): pinia, ThemeColors, theme, AnimationArea, CompanyRef, FontSize, Lang, Me (+20 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "vitest"
Cohesion: 0.16
Nodes (12): @vitejs/plugin-vue@^6.0.10, @vitejs/plugin-vue, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages() (+4 more)

### Community 132 - "LoadersView.vue"
Cohesion: 0.06
Nodes (32): copied, open, props, base, COLUMN_LABELS, columnLabel(), columns, companies (+24 more)

### Community 133 - "contracts/service.ts"
Cohesion: 0.15
Nodes (16): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef, ContractNetwork (+8 more)

### Community 134 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.05
Nodes (31): accountId, accountOptions, accounts, availableFilters, barFilters, clientOptions, clients, columns (+23 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (55): hourLabel(), hourPoints(), moneyText(), tierOptions(), chart, ladderText(), maxOptions, minOptions (+47 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 140 - "vue"
Cohesion: 0.06
Nodes (55): vue, applyView(), current, applyView(), current, applyView(), current, rows (+47 more)

### Community 141 - "rewards/service.ts"
Cohesion: 0.15
Nodes (17): saveFile(), downloadInstall(), rewardService(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount (+9 more)

### Community 142 - "CompanyView.vue"
Cohesion: 0.14
Nodes (15): canManage, company, companyId, groupPeople(), groups, load(), loadError, members (+7 more)

### Community 143 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 144 - "ChecklistItemsView.vue"
Cohesion: 0.08
Nodes (25): active, emit, kind, kindOptions, name, open, props, save() (+17 more)

### Community 145 - "gam-tools-view.test.ts"
Cohesion: 0.16
Nodes (15): GamFormat, GamRunState, GamStepState, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (36): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+28 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (64): InstallSummary, ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems() (+56 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "NewTaskDialog.vue"
Cohesion: 0.09
Nodes (25): assignee, client, clientOptions, create(), description, domain, emit, open (+17 more)

### Community 151 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (21): barFilters, columnLabel(), COLUMNS, DEFAULT_FILTERS, DEFAULT_VIEW, FILTER_LABELS, filterLabel(), FILTERS (+13 more)

### Community 152 - "ClientSiteView.vue"
Cohesion: 0.08
Nodes (23): box, failed, initial, props, PAGE_WIDTH, firstName, greeting, session (+15 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.04
Nodes (64): formatDate(), t(), tn(), tiles, availableFilters, base, busy, COLUMN_LABELS (+56 more)

### Community 156 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "table.ts"
Cohesion: 0.03
Nodes (70): first, last, numbers, page, props, PAGE_SIZE, pageNumbers(), td (+62 more)

### Community 160 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 164 - "TaskTimeline.vue"
Cohesion: 0.11
Nodes (18): changes, comment, comments, emit, filter, filterOptions, ICONS, mailHint (+10 more)

### Community 165 - "LoadError.vue"
Cohesion: 0.12
Nodes (16): model, budgetHere, dirty, draft, emit, inputOf(), levelKey, load() (+8 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.10
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.13
Nodes (14): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+6 more)

### Community 169 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 170 - "ClientNetworksCard.vue"
Cohesion: 0.08
Nodes (28): latestCall(), valid, add(), addBusy, addError, addOpen, canAssign, code (+20 more)

### Community 171 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 172 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 174 - "dayText"
Cohesion: 0.33
Nodes (6): dayLabel, dayOptions, chart, dayText(), adUnitOptions, chart

### Community 175 - "errorText"
Cohesion: 0.18
Nodes (17): errorText(), load(), saveStart(), checkNow(), confirmEnd(), confirmRemove(), create(), load() (+9 more)

### Community 176 - "Status.vue"
Cohesion: 0.11
Nodes (17): dot, active, KINDS, load(), loadError, loadRuns(), network, networkId (+9 more)

### Community 177 - "ApiError"
Cohesion: 0.14
Nodes (24): drag, emit, grid, props, { run, failure, loading }, source, stored, widgetFailure() (+16 more)

### Community 178 - "cn"
Cohesion: 0.07
Nodes (35): reka-ui, props, up, open, cn(), kindClass(), chosen, create() (+27 more)

### Community 180 - "Input.vue"
Cohesion: 0.09
Nodes (18): model, choices, description, emit, invalid, name, open, props (+10 more)

### Community 181 - "RevenueStatusBadge.vue"
Cohesion: 0.16
Nodes (20): locale, REPORT_CURRENCY, ClientNetwork, ClientNetworkDetail, ClientRef, ClientSite, ClientSiteDetail, SiteNetworkRef (+12 more)

### Community 182 - "drag.ts"
Cohesion: 0.42
Nodes (9): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop() (+1 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 186 - "InvoiceServicesView.vue"
Cohesion: 0.09
Nodes (19): open, button, classes, Props, props, busy, canManage, description (+11 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.18
Nodes (15): checklistOverrideService, checklistService, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistOverride, ChecklistOverrideInput (+7 more)

### Community 189 - "vitest"
Cohesion: 0.14
Nodes (14): vitest, lang, pageCount(), pageSlice(), dimensions, page, props, rows (+6 more)

### Community 190 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 191 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 192 - "AddWidgetDialog.vue"
Cohesion: 0.08
Nodes (46): add(), emit, kind, kinds, metric, metrics, open, props (+38 more)

### Community 193 - "ThemeCard.vue"
Cohesion: 0.12
Nodes (14): atLimit, choose(), customs, editing, editor, editorOpen, limit, remove() (+6 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.15
Nodes (15): taskService, SupportTask, SupportTaskDetail, TaskEvent, TaskEventKind, TaskFilters, TaskInput, TaskPatch (+7 more)

### Community 195 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): overrideSummary(), personName(), rowStateLabel(), checking, checklist, checklistId, checkNow(), fail() (+8 more)

### Community 197 - "FacebookAdForm.vue"
Cohesion: 0.07
Nodes (31): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+23 more)

### Community 199 - "NetworkAdsTxtCard.vue"
Cohesion: 0.29
Nodes (6): gamToolService, copy(), failure, lines, load(), props

### Community 200 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 204 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 205 - "20. CDN dos scripts do site (cdn.groone.com)"
Cohesion: 0.40
Nodes (4): 20. CDN dos scripts do site (cdn.groone.com), Chamadas da API e nome dos scripts (Pedro, 23/11, 23h52), Como fica no ar (proposta para o avant-infra), O que ficou decidido

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `AdTagsView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookObjectView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SettingsView.vue`, `ClientSitesView.vue`, `api.ts`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `ApiKeyDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `DashboardFiltersBar.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `vue-sonner`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `draft-rules.ts`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `pick`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClassifySitesDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `costs/rules.ts`, `MetricStylePopover.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `invoices/types.ts`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ResetView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `SiteChecklistCard.vue`, `ChecklistNotesCard.vue`, `LoadersView.vue`, `contracts/service.ts`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `vue`, `rewards/service.ts`, `CompanyView.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `ClientSiteView.vue`, `AdjustmentDialog.vue`, `table.ts`, `alerts/rules.ts`, `TaskTimeline.vue`, `LoadError.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `dayText`, `errorText`, `Status.vue`, `cn`, `Input.vue`, `RevenueStatusBadge.vue`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `vitest`, `PasswordCard.vue`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `FacebookAdForm.vue`, `NetworkAdsTxtCard.vue`, `CurrencyCard.vue`?**
  _High betweenness centrality (0.204) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `FacebookObjectView.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SettingsView.vue`, `ClientSitesView.vue`, `api.ts`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `ApiKeyDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `DashboardFiltersBar.vue`, `clients/rules.ts`, `toNumber`, `lib/types.ts`, `vue-sonner`, `RolesView.vue`, `AccountManagerCard.vue`, `fontSize.test.ts`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `avant-tag`, `ReportView.vue`, `draft-rules.ts`, `GoogleAdsObjectView.vue`, `vue-router`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `ad_tags/rules.ts`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `ConfigPanel.vue`, `pick`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClassifySitesDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `MetricStylePopover.vue`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `GroupedBarChart.vue`, `invoices/types.ts`, `events.ts`, `reports/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `reports/rules.ts`, `RewardLeadsCard.vue`, `PriceRuleSitesView.vue`, `ResetView.vue`, `ApiKeyDialog.vue`, `BarChart.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `SiteChecklistCard.vue`, `session.ts`, `ChecklistNotesCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `CompanyView.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `ClientSiteView.vue`, `AdTagsView.vue`, `AdjustmentDialog.vue`, `table.ts`, `TaskTimeline.vue`, `LoadError.vue`, `AdTagPreview.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `Status.vue`, `ApiError`, `cn`, `Input.vue`, `RevenueStatusBadge.vue`, `drag.ts`, `LoaderPreview.vue`, `InvoiceServicesView.vue`, `vitest`, `PasswordCard.vue`, `ProfileImageCard.vue`, `AddWidgetDialog.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `FacebookAdForm.vue`, `NetworkAdsTxtCard.vue`, `CurrencyCard.vue`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `FacebookObjectView.vue`, `StaffView.vue`, `InstallCheckCell.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `facebook/types.ts`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `index.ts`, `FacebookView.vue`, `ResultsView.vue`, `InviteView.vue`, `SettingsView.vue`, `ClientSitesView.vue`, `api.ts`, `TeamCommissionsView.vue`, `api.ts`, `FacebookJobDialog.vue`, `ApiKeyDialog.vue`, `GroupsView.vue`, `NetworksView.vue`, `PerformanceView.vue`, `lib/types.ts`, `vue-sonner`, `RolesView.vue`, `AccountManagerCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ReportView.vue`, `draft-rules.ts`, `GoogleAdsObjectView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `FacebookAccountDialog.vue`, `ChecklistsView.vue`, `SiteItemOverrideDialog.vue`, `ClientNotesCard.vue`, `pick`, `formatDate`, `CompanyGoalCard.vue`, `RoleDialog.vue`, `ClassifySitesDialog.vue`, `MfaCard.vue`, `GamToolsView.vue`, `rewards/rules.ts`, `GoalsView.vue`, `DashboardWidget.vue`, `ClientNetworksView.vue`, `GoalTemplatesDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `CompaniesView.vue`, `RewardMetricsView.vue`, `invoices/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PriceRuleSitesView.vue`, `ResetView.vue`, `ApiKeyDialog.vue`, `CustomThemeDialog.vue`, `ReservedNetworksCard.vue`, `SiteChecklistCard.vue`, `ChecklistNotesCard.vue`, `LoadersView.vue`, `MyCommissionView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `vue`, `CompanyView.vue`, `ApiKeysCard.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `ClientSiteView.vue`, `AdTagsView.vue`, `AdjustmentDialog.vue`, `table.ts`, `LoadError.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `AlertDialog.vue`, `Status.vue`, `ApiError`, `Review Focus`, `InvoiceServicesView.vue`, `PasswordCard.vue`, `ProfileImageCard.vue`, `ThemeCard.vue`, `ChecklistView.vue`, `FacebookAdForm.vue`, `NetworkAdsTxtCard.vue`, `CurrencyCard.vue`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05333333333333334 - nodes in this community are weakly interconnected._