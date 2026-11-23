# Graph Report - avant-web  (2026-11-23)

## Corpus Check
- 430 files · ~297,146 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5264 nodes · 13754 edges · 195 communities (188 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 156 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `388bb1a5`
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
- views/rules.ts
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
- reports/rules.ts
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- PerformanceView.vue
- GroupsView.vue
- Button.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- FacebookJobDialog.vue
- ReportView.vue
- useSession
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- FacebookEditView.vue
- ApiKeyDialog.vue
- AccountManagerCard.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- AccountStatus.vue
- .oxlintrc.json
- t
- avant-web
- NewTaskDialog.vue
- tsconfig.json
- session-start.sh
- errorText
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- AccountStatus.vue
- InviteView.vue
- facebook-draft-rules.test.ts
- AccountManagerCard.vue
- Dialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- Select.vue
- index.ts
- Status.vue
- ChecklistsView.vue
- MfaCard.vue
- table.ts
- vue
- GroupedBarChart.vue
- AdTagMetricsView.vue
- locale
- RoleDialog.vue
- FacebookCampaignForm.vue
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- table.ts
- ClientNetworksCard.vue
- MyCommissionView.vue
- rewards/rules.ts
- ApiKeysCard.vue
- FacebookEditView.vue
- ClientSitesView.vue
- ad_tags/service.ts
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- ClientNetworksView.vue
- RewardMetricsView.vue
- facebook/types.ts
- contracts/service.ts
- gam-tools-view.test.ts
- dashboards/rules.ts
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- ReservedNetworksCard.vue
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- GoogleAdsAlertsPanel.vue
- ClientNetworksView.vue
- checklists/rules.ts
- alerts/rules.ts
- events.ts
- RevenueStatusBadge.vue
- clients/service.ts
- errorText
- GroupedBarChart.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- RolesView.vue
- BarChart.vue
- FacebookAdsetForm.vue
- invoices/types.ts
- GamRunView.vue
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- ConnectView.vue
- PriceRuleSiteView.vue
- t
- FacebookObjectView.vue
- ChecklistView.vue
- CompaniesView.vue
- Field.vue
- ChecklistItemDialog.vue
- Input.vue
- price_rules/rules.ts
- LoaderEditView.vue
- 19. Cliente e Empresa em dois cadastros
- pick
- alerts/types.ts
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- tailwindcss
- ClientsResultsView.vue
- price_rules/types.ts
- FacebookRulesCard.vue
- api.ts
- main.ts
- areaPaths
- useSession
- vue-sonner
- conditionText
- niceTicks
- gam_tools/rules.ts
- AdTagPreview.vue
- NetworkReviewActions.vue
- views/rules.ts
- PageHeader.vue
- AdTagInstallDialog.vue
- PageBody.vue
- vitest
- SaveViewDialog.vue
- applyView
- overrides
- vite.embed.config.ts
- GoogleAdsObjectView.vue
- RolesPanel.vue
- LoaderPreview.vue
- SaveReportDialog.vue
- checklists/types.ts
- GamRunView.vue
- PayeeDialog.vue
- ClassifySitesDialog.vue
- FiscalDataCard.vue
- tasks/types.ts
- Review Focus
- InvoiceDocument.vue
- drag.ts
- Pagination.vue
- NewDashboardDialog.vue
- GoogleAdsTabs.vue
- FakeSource

## God Nodes (most connected - your core abstractions)
1. `t()` - 598 edges
2. `errorText()` - 376 edges
3. `vue` - 197 edges
4. `ApiError` - 141 edges
5. `lucide-vue-next` - 114 edges
6. `vue-sonner` - 98 edges
7. `useSession` - 98 edges
8. `vue-router` - 67 edges
9. `td` - 66 edges
10. `th` - 66 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `SavedQuery`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ChartType`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts

## Import Cycles
- None detected.

## Communities (195 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), editableWidgets(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (49): profileBody(), profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, canDocuments (+41 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (64): loadDraft(), BuilderState, builderState(), canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart() (+56 more)

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
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (48): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+40 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (15): box, chartWidth, { height: legendHeight }, hovered, labelStep, legend, LineSeries, padding (+7 more)

### Community 12 - "views/rules.ts"
Cohesion: 0.11
Nodes (28): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+20 more)

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
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "draft-rules.ts"
Cohesion: 0.09
Nodes (32): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+24 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.04
Nodes (45): byManager(), campaignsPath(), GOOGLE_ADS_CONNECT_URL, accounts, applying, applySuffix(), canConnect, canManage (+37 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.07
Nodes (35): NetworkSite, approval(), tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember (+27 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (24): busy, canManage, check, checkFormula, costs, currencies, currencyOptions, editing (+16 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (41): adUnitNames(), previewReward(), adUnitHint, base, busy, buttonColorLabel(), chooseImage(), device (+33 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (54): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+46 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "reports/rules.ts"
Cohesion: 0.09
Nodes (33): Task 3: Web — tipos, serviço e regras do construtor, FALLBACK, METRIC_COLOR, Lang, emit, period, props, customMetricService (+25 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (44): FacebookTab, model, props, TABS, profileTone(), accounts, canConnect, canManage (+36 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.09
Nodes (29): CostKind, monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange() (+21 more)

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
Nodes (68): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+60 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

### Community 39 - "Button.vue"
Cohesion: 0.04
Nodes (62): lucide-vue-next, vue-router, button, classes, Props, props, vue-router, RouteMeta (+54 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.10
Nodes (28): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd() (+20 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.09
Nodes (33): fetchFile(), rows, props, state, DOCUMENT_ACCEPT, DOCUMENT_KINDS, DOCUMENT_MAX_BYTES, documentsByKind() (+25 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.16
Nodes (17): campaign, current, emit, finished, open, props, refresh(), router (+9 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.06
Nodes (46): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+38 more)

### Community 46 - "useSession"
Cohesion: 0.05
Nodes (42): open, session, safeNext(), announceCompany(), CompanyMessage, onCompanyAnnounced(), busy, email (+34 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "FacebookEditView.vue"
Cohesion: 0.09
Nodes (23): objectiveOf(), serverProblems(), submit(), ad, adset, detail, edit, externalId (+15 more)

### Community 51 - "ApiKeyDialog.vue"
Cohesion: 0.06
Nodes (33): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+25 more)

### Community 52 - "AccountManagerCard.vue"
Cohesion: 0.12
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (67): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, metricColors(), formatMetric(), toNumber(), pageSlice() (+59 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (20): open, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "AccountStatus.vue"
Cohesion: 0.13
Nodes (21): formatAgo(), company, error, hasSeats, load(), lost, networks, router (+13 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.11
Nodes (32): t(), colorVar(), metricColor(), dayLabel, dayOptions, chart, templateText(), hourLabel() (+24 more)

### Community 61 - "NewTaskDialog.vue"
Cohesion: 0.11
Nodes (17): busy, canChange, emit, manager, managerId, next, NOTE_KEY, open (+9 more)

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
Cohesion: 0.10
Nodes (25): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+17 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "AccountStatus.vue"
Cohesion: 0.06
Nodes (41): NO_COMPARISON, sameComparison(), savedPeriod(), ThumbShape, viewChanged(), viewDraft(), ViewPeriod, exportUrl() (+33 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "facebook-draft-rules.test.ts"
Cohesion: 0.14
Nodes (17): auditActions, dict, errors, fallbackError, adProblems(), adsetProblems(), amountOk(), draftProblems() (+9 more)

### Community 73 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (38): months, months, mark, percent, props, share, tone, companyGoalYears() (+30 more)

### Community 74 - "Dialog.vue"
Cohesion: 0.13
Nodes (17): reka-ui, props, up, pick(), route, router, session, panelItem() (+9 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (39): applyView(), busy, canCreate, canDelete, canUpdate, checking, choose(), chosenNetwork (+31 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (67): model, settingsProblem(), toPayload(), absentUnits, armed, base, blocking, blocks (+59 more)

### Community 79 - "Select.vue"
Cohesion: 0.13
Nodes (19): activeOptionId, choose(), highlight(), highlighted, jumpToLetter(), listbox, listboxId, model (+11 more)

### Community 80 - "index.ts"
Cohesion: 0.08
Nodes (25): vue, toasterTheme, choose(), LINES, showBootFailure(), auditText(), chooseLang(), fill() (+17 more)

### Community 81 - "Status.vue"
Cohesion: 0.10
Nodes (19): box, failed, initial, props, active, KINDS, load(), loadError (+11 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "table.ts"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 85 - "vue"
Cohesion: 0.11
Nodes (23): pinia, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme(), swatchColor() (+15 more)

### Community 86 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (27): add(), emit, kind, kinds, metric, metrics, open, props (+19 more)

### Community 87 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (24): formatDate(), healthSummary(), share(), base, decimal, filled, health, integer (+16 more)

### Community 88 - "locale"
Cohesion: 0.11
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (35): model, SiteScope, busy, category, chipClass(), chosen, emit, groups (+27 more)

### Community 90 - "FacebookCampaignForm.vue"
Cohesion: 0.14
Nodes (17): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+9 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.07
Nodes (37): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+29 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "table.ts"
Cohesion: 0.05
Nodes (49): locale, td, th, events, load(), loadError, open, page (+41 more)

### Community 96 - "ClientNetworksCard.vue"
Cohesion: 0.10
Nodes (22): valid, add(), addBusy, addError, addOpen, canAssign, code, load() (+14 more)

### Community 97 - "MyCommissionView.vue"
Cohesion: 0.12
Nodes (19): UserRef, STATUS_TONE, CommissionEvent, CommissionMonth, CommissionRule, CommissionRuleInput, MyCommissions, PersonMonth (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (30): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+22 more)

### Community 99 - "ApiKeysCard.vue"
Cohesion: 0.08
Nodes (37): busy, canManage, created(), creating, keys, load(), loadError, page (+29 more)

### Community 100 - "FacebookEditView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 101 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 102 - "ad_tags/service.ts"
Cohesion: 0.19
Nodes (13): AdTagService, AdTag, AdTagDevice, AdTagDraft, AdTagEdge, AdTagHealth, AdTagHealthDay, AdTagRuleMode (+5 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (48): cascadeFunnel(), cascadeLadder(), dropPercent(), nearestTier(), base, busy, currency, decisionPages (+40 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.06
Nodes (34): childLevel(), accountId, accountOptions, accounts, allSelected, base, canManage, clientOptions (+26 more)

### Community 106 - "ClientNetworksView.vue"
Cohesion: 0.11
Nodes (21): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService (+13 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.09
Nodes (29): funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads, canManage (+21 more)

### Community 108 - "facebook/types.ts"
Cohesion: 0.03
Nodes (75): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+67 more)

### Community 109 - "contracts/service.ts"
Cohesion: 0.18
Nodes (13): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef, ContractNetwork (+5 more)

### Community 110 - "gam-tools-view.test.ts"
Cohesion: 0.17
Nodes (15): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+7 more)

### Community 111 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (30): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+22 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.08
Nodes (23): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+15 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (37): templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+29 more)

### Community 116 - "ReservedNetworksCard.vue"
Cohesion: 0.15
Nodes (13): add(), addBusy, addError, addOpen, canAssign, code, emit, props (+5 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.09
Nodes (22): @vueuse/core@^15.0.0, @vueuse/core, answer, answerOptions, busy, columns, confirmRemove(), exportLeads() (+14 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.05
Nodes (42): parseLimit(), busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit (+34 more)

### Community 120 - "ClientNetworksView.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, { height: legendHeight }, hovered, labelStep (+8 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.17
Nodes (13): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+5 more)

### Community 122 - "alerts/rules.ts"
Cohesion: 0.17
Nodes (15): saveFile(), rewardService(), Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput (+7 more)

### Community 123 - "events.ts"
Cohesion: 0.13
Nodes (24): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+16 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.39
Nodes (8): detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend, SCALING

### Community 125 - "clients/service.ts"
Cohesion: 0.27
Nodes (12): CompanyStatus, AuditEntry, Client, ClientCompanyRef, ClientDetail, ClientNote, ClientOption, ManagerChange (+4 more)

### Community 126 - "errorText"
Cohesion: 0.11
Nodes (25): errorText(), choose(), save(), load(), load(), confirmRemove(), load(), save() (+17 more)

### Community 127 - "GroupedBarChart.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.29
Nodes (9): COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "FacebookAdsetForm.vue"
Cohesion: 0.12
Nodes (17): model, adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions (+9 more)

### Community 133 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 134 - "GamRunView.vue"
Cohesion: 0.09
Nodes (22): body, chartHeight, draft, draftKey, emit, failure, goal, goalFailure (+14 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.06
Nodes (30): childLevel(), objectPath(), accountId, accountOptions, accounts, clientOptions, clients, columns (+22 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (47): hourPoints(), priceRulePermission(), tierOptions(), canManage, maxOptions, minOptions, startOptions, canManage (+39 more)

### Community 137 - "ConnectView.vue"
Cohesion: 0.10
Nodes (24): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+16 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (51): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), active, automaticRuleCount, base (+43 more)

### Community 139 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.05
Nodes (65): current, dirty, elsewhere, emit, error, kind, parsed, props (+57 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "CompaniesView.vue"
Cohesion: 0.16
Nodes (12): STATUS_TONE, clientService, companies, companiesCall, firstPage(), load(), loadError, page (+4 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "Input.vue"
Cohesion: 0.14
Nodes (17): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+9 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (34): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+26 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (63): ADBLOCK_HINT, ADBLOCK_SHORT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf() (+55 more)

### Community 148 - "19. Cliente e Empresa em dois cadastros"
Cohesion: 0.40
Nodes (4): 19. Cliente e Empresa em dois cadastros, Migrations, O que ficou decidido, Painel

### Community 149 - "pick"
Cohesion: 0.10
Nodes (20): assignee, client, clientOptions, create(), description, domain, emit, open (+12 more)

### Community 150 - "alerts/types.ts"
Cohesion: 0.38
Nodes (8): Page, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (47): Key, addPath(), emit, icon, ICONS, name, pages, pathText (+39 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 156 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, month (+8 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (21): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput (+13 more)

### Community 158 - "FacebookRulesCard.vue"
Cohesion: 0.14
Nodes (15): budgetHere, dirty, draft, emit, inputOf(), levelKey, load(), loadError (+7 more)

### Community 159 - "api.ts"
Cohesion: 0.12
Nodes (23): api, ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query (+15 more)

### Community 160 - "main.ts"
Cohesion: 0.21
Nodes (15): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+7 more)

### Community 161 - "areaPaths"
Cohesion: 0.60
Nodes (5): areaPaths, linePath(), tooltipLeft, xOf(), yOf()

### Community 162 - "useSession"
Cohesion: 0.20
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 163 - "vue-sonner"
Cohesion: 0.05
Nodes (38): vue-sonner, langs, session, busy, chosen, currencies, currencyLabel(), missing (+30 more)

### Community 164 - "conditionText"
Cohesion: 0.50
Nodes (4): compares(), conditionText(), ruleText(), valueText()

### Community 165 - "niceTicks"
Cohesion: 0.67
Nodes (3): ticks, ticks, niceTicks()

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (20): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), FORMATS, installable(), KEY_NAMES, siteSummary() (+12 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.13
Nodes (14): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+6 more)

### Community 168 - "NetworkReviewActions.vue"
Cohesion: 0.12
Nodes (17): COMMENT_MAX, COMMENT_MIN, eventText(), PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, statusLabel() (+9 more)

### Community 169 - "views/rules.ts"
Cohesion: 0.31
Nodes (8): Items, viewService, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewFilterSpec, ViewScreen

### Community 170 - "PageHeader.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), priceRuleService(), base, columns, integer, load(), loadError, page (+8 more)

### Community 172 - "AdTagInstallDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 174 - "PageBody.vue"
Cohesion: 0.10
Nodes (16): canEdit, company, isGroone, loadError, name, nameInvalid, save(), saveName() (+8 more)

### Community 175 - "vitest"
Cohesion: 0.06
Nodes (25): @vue/test-utils@^2.5.1, vitest, @vue/test-utils, lang, client, managerChange, perms, settings (+17 more)

### Community 176 - "SaveViewDialog.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 177 - "applyView"
Cohesion: 0.23
Nodes (13): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+5 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "GoogleAdsObjectView.vue"
Cohesion: 0.04
Nodes (78): periodRange(), changes, load(), loadError, origin, originOptions, page, pages (+70 more)

### Community 183 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "SaveReportDialog.vue"
Cohesion: 0.12
Nodes (15): Dashboard, DashboardInput, choices, description, emit, invalid, name, open (+7 more)

### Community 187 - "checklists/types.ts"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 188 - "GamRunView.vue"
Cohesion: 0.13
Nodes (15): dot, finishedSteps(), formatName(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName() (+7 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 191 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): loadExtras(), category, categoryOptions, changed, emit, keep, open, props (+14 more)

### Community 193 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 194 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 195 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 197 - "InvoiceDocument.vue"
Cohesion: 0.25
Nodes (8): dates, money(), monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 198 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 199 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 200 - "NewDashboardDialog.vue"
Cohesion: 0.22
Nodes (8): model, chosen, create(), emit, name, open, templates, DashboardTemplate

### Community 201 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `views/rules.ts`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/rules.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `Button.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `useSession`, `NetworksView.vue`, `FacebookEditView.vue`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `AccountStatus.vue`, `NewTaskDialog.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `AccountStatus.vue`, `InviteView.vue`, `AccountManagerCard.vue`, `Dialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `index.ts`, `Status.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `vue`, `GroupedBarChart.vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `FacebookCampaignForm.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `ClientSitesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `ClientNetworksView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `contracts/service.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `GoogleAdsAlertsPanel.vue`, `checklists/rules.ts`, `RevenueStatusBadge.vue`, `errorText`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `FacebookAdsetForm.vue`, `GamRunView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `t`, `FacebookObjectView.vue`, `ChecklistView.vue`, `CompaniesView.vue`, `Field.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `pick`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `main.ts`, `useSession`, `vue-sonner`, `conditionText`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `NetworkReviewActions.vue`, `PageHeader.vue`, `AdTagInstallDialog.vue`, `PageBody.vue`, `SaveViewDialog.vue`, `applyView`, `GoogleAdsObjectView.vue`, `RolesPanel.vue`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `GamRunView.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`, `InvoiceDocument.vue`, `Pagination.vue`, `NewDashboardDialog.vue`, `GoogleAdsTabs.vue`?**
  _High betweenness centrality (0.169) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `Button.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `useSession`, `NetworksView.vue`, `FacebookEditView.vue`, `ApiKeyDialog.vue`, `PeopleView.vue`, `AccountStatus.vue`, `t`, `NewTaskDialog.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `AccountStatus.vue`, `InviteView.vue`, `AccountManagerCard.vue`, `Dialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `Status.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `table.ts`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `ClientSitesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `ClientNetworksView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `GoogleAdsAlertsPanel.vue`, `events.ts`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `GamRunView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `t`, `FacebookObjectView.vue`, `ChecklistView.vue`, `CompaniesView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `pick`, `AdTagsView.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `vue-sonner`, `PageHeader.vue`, `AdTagInstallDialog.vue`, `PageBody.vue`, `GoogleAdsObjectView.vue`, `RolesPanel.vue`, `GamRunView.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`, `Review Focus`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050072568940493466 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `index.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `reports/rules.ts`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `Button.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `useSession`, `NetworksView.vue`, `FacebookEditView.vue`, `ApiKeyDialog.vue`, `AccountManagerCard.vue`, `toNumber`, `PeopleView.vue`, `AccountStatus.vue`, `NewTaskDialog.vue`, `errorText`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `AccountStatus.vue`, `InviteView.vue`, `AccountManagerCard.vue`, `Dialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `Select.vue`, `Status.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `vue`, `GroupedBarChart.vue`, `AdTagMetricsView.vue`, `locale`, `RoleDialog.vue`, `FacebookCampaignForm.vue`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `ClientNetworksCard.vue`, `MyCommissionView.vue`, `ApiKeysCard.vue`, `FacebookEditView.vue`, `ClientSitesView.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `ClientNetworksView.vue`, `RewardMetricsView.vue`, `facebook/types.ts`, `gam-tools-view.test.ts`, `dashboards/rules.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `ReservedNetworksCard.vue`, `RewardLeadsCard.vue`, `GoogleAdsAlertsPanel.vue`, `ClientNetworksView.vue`, `events.ts`, `RevenueStatusBadge.vue`, `GroupedBarChart.vue`, `ChecklistNotesCard.vue`, `RolesView.vue`, `BarChart.vue`, `FacebookAdsetForm.vue`, `GamRunView.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `ConnectView.vue`, `PriceRuleSiteView.vue`, `t`, `FacebookObjectView.vue`, `ChecklistView.vue`, `CompaniesView.vue`, `Field.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `pick`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `ClientsResultsView.vue`, `FacebookRulesCard.vue`, `useSession`, `vue-sonner`, `AdTagPreview.vue`, `PageHeader.vue`, `AdTagInstallDialog.vue`, `PageBody.vue`, `vitest`, `SaveViewDialog.vue`, `GoogleAdsObjectView.vue`, `RolesPanel.vue`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `GamRunView.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `FiscalDataCard.vue`, `InvoiceDocument.vue`, `drag.ts`, `Pagination.vue`, `NewDashboardDialog.vue`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.054693877551020405 - nodes in this community are weakly interconnected._