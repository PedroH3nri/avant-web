# Graph Report - avant-web  (2026-11-12)

## Corpus Check
- 383 files · ~251,439 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 4448 nodes · 11638 edges · 183 communities (177 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 140 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e0a0e027`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- SessionsCard.vue
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
- PerformanceView.vue
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- dependencies
- StaffView.vue
- GoalTemplatesDialog.vue
- steps
- ServiceLineDialog.vue
- SidebarNav.vue
- ApiKeyDialog.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- GroupsView.vue
- ClientsView.vue
- InvoiceView.vue
- table.ts
- @vueuse/core
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- cn
- GroupsView.vue
- dashboards/types.ts
- ClassifySitesDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- PerformanceView.vue
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- FunnelChart.vue
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- Pagination.vue
- .oxlintrc.json
- CompanyImageCard.vue
- avant-web
- load
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- GoogleCard.vue
- devDependencies
- avant-tag
- views/rules.ts
- InviteView.vue
- Field.vue
- GoalsView.vue
- Button.vue
- commission-components.test.ts
- TasksView.vue
- errorText
- AdTagEditView.vue
- ClientNetworksView.vue
- index.ts
- sites.test.ts
- reports/rules.ts
- GAM
- pick
- session.ts
- MyCommissionView.vue
- lib/types.ts
- RolesView.vue
- inviteTaken
- locale
- CompanyGoalCard.vue
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- Button.vue
- ClientSitesView.vue
- AccountManagerCard.vue
- GamRunView.vue
- ApiError
- InvoicesView.vue
- ApiError
- AlertDialog.vue
- index.ts
- CascadeRuleView.vue
- MetricStylePopover.vue
- ClientsResultsView.vue
- ClientSitesView.vue
- GamRunView.vue
- router.ts
- ad-tags.test.ts
- fail
- updates
- useSession
- TemplatesView.vue
- TemplateEditorView.vue
- alerts/rules.ts
- commission-components.test.ts
- Review Focus
- Key
- drag.ts
- checklists/rules.ts
- formatDate
- reports/rules.ts
- RevenueStatusBadge.vue
- gam_tools/types.ts
- errorText
- ClientTeamsView.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- Field.vue
- priorityLabel
- clients/rules.ts
- pick
- AddWidgetDialog.vue
- reports/types.ts
- PriceRuleView.vue
- invoices/types.ts
- PriceRuleSiteView.vue
- DashboardGrid.vue
- PayeeDialog.vue
- ChecklistView.vue
- SaveReportDialog.vue
- LoadError.vue
- ChecklistItemDialog.vue
- ChecklistItemsView.vue
- price_rules/rules.ts
- LoaderEditView.vue
- inventory/service.ts
- AdjustmentDialog.vue
- tasks/types.ts
- ad_tags/rules.ts
- sites/service.ts
- virtual-i18n.d.ts
- AdTagsView.vue
- ReportTable.vue
- errorToast
- price_rules/types.ts
- loaders.test.ts
- ClientNetworksCard.vue
- errorText
- useSession
- AdTagMetricsView.vue
- t
- LoadersView.vue
- ApiKeyDialog.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- views/types.ts
- priceRulePermission
- PriceRuleSitesView.vue
- dayText
- metricColor
- lang
- loadMembers
- tabs.ts
- costs/rules.ts
- results/types.ts
- commission-components.test.ts
- inviteTaken
- overrides
- vite.embed.config.ts
- LoaderPreview.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 512 edges
2. `errorText()` - 312 edges
3. `vue` - 165 edges
4. `ApiError` - 117 edges
5. `lucide-vue-next` - 93 edges
6. `useSession` - 91 edges
7. `vue-sonner` - 85 edges
8. `vitest` - 60 edges
9. `toNumber()` - 59 edges
10. `vue-router` - 56 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (183 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (41): audit, auditPage, auditPages, auditTotal, candidates, canDocuments, canManage, canNotes (+33 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): builderState, toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+41 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.05
Nodes (48): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+40 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (34): busy, canTransfer, duplicate, emit, errors, form, open, props (+26 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.07
Nodes (43): props, up, countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour() (+35 more)

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
Cohesion: 0.11
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.10
Nodes (30): FiscalData, amount, amountError, busy, chosen, description, emit, open (+22 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.07
Nodes (29): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+21 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (36): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+28 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (50): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+42 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.08
Nodes (23): invoiceActions(), invoicePdfUrl(), actions, backTo, busy, Confirm, confirmOpen, confirmText (+15 more)

### Community 31 - "table.ts"
Cohesion: 0.10
Nodes (22): vue, props, seats, dot, td, th, events, load() (+14 more)

### Community 32 - "@vueuse/core"
Cohesion: 0.14
Nodes (15): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, inputOf(), LIMITS, MAX_SECONDS (+7 more)

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

### Community 37 - "cn"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 38 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 39 - "dashboards/types.ts"
Cohesion: 0.11
Nodes (33): widgetFailure(), chosen, create(), emit, name, open, templates, emptyRun() (+25 more)

### Community 40 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): category, categoryOptions, changed, emit, keep, open, props, responsible (+14 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "PerformanceView.vue"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+14 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (38): NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, ReportPreview, label() (+30 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (31): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+23 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/types.ts"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "FunnelChart.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (69): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, change(), formatMetric(), toNumber(), pageSlice() (+61 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanyImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "load"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (40): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+32 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.05
Nodes (56): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+48 more)

### Community 68 - "devDependencies"
Cohesion: 0.08
Nodes (31): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+23 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "views/rules.ts"
Cohesion: 0.15
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.07
Nodes (25): vue-router, RouteMeta, vue-router, accept(), busy, error, formOk, gone (+17 more)

### Community 72 - "Field.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.10
Nodes (24): goalService, GoalMode, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+16 more)

### Community 74 - "Button.vue"
Cohesion: 0.11
Nodes (15): button, classes, Props, busy, email, error, sent, submit() (+7 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (26): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+18 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.04
Nodes (54): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+46 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (67): model, chosenDay(), settingsProblem(), toPayload(), absentUnits, armed, base, blocking (+59 more)

### Community 79 - "ClientNetworksView.vue"
Cohesion: 0.11
Nodes (21): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService (+13 more)

### Community 80 - "index.ts"
Cohesion: 0.11
Nodes (19): choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang(), fill() (+11 more)

### Community 81 - "sites.test.ts"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.11
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 84 - "pick"
Cohesion: 0.31
Nodes (9): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview (+1 more)

### Community 85 - "session.ts"
Cohesion: 0.17
Nodes (8): pinia, Me, Theme, accountService, authService, InvitationPreview, LoginResult, Blank

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.13
Nodes (26): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+18 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "inviteTaken"
Cohesion: 0.06
Nodes (47): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+39 more)

### Community 90 - "locale"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): locale, busy, canManage, changed, current, monthNames, months, saved (+23 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): defaultSites(), installable(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "Button.vue"
Cohesion: 0.09
Nodes (28): lucide-vue-next, reka-ui, pick(), route, router, session, panelItem(), railItem() (+20 more)

### Community 96 - "ClientSitesView.vue"
Cohesion: 0.11
Nodes (17): box, failed, initial, props, latestCall(), canSeeChecklists, firstPage(), load() (+9 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (27): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+19 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.09
Nodes (28): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+20 more)

### Community 99 - "ApiError"
Cohesion: 0.08
Nodes (28): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+20 more)

### Community 100 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 101 - "ApiError"
Cohesion: 0.12
Nodes (15): ApiError, draft, draftKey, emit, failure, goal, goalFailure, goalLoading (+7 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.10
Nodes (19): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+11 more)

### Community 103 - "index.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (49): model, cascadeLadder(), dropPercent(), nearestTier(), base, busy, changeStatus(), currency (+41 more)

### Community 105 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 106 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "GamRunView.vue"
Cohesion: 0.13
Nodes (15): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), done (+7 more)

### Community 109 - "router.ts"
Cohesion: 0.11
Nodes (18): model, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 110 - "ad-tags.test.ts"
Cohesion: 0.15
Nodes (19): adTagsPath(), blankSettings(), newBlock(), AdTagService, AdTag, AdTagBlock, AdTagDevice, AdTagDraft (+11 more)

### Community 111 - "fail"
Cohesion: 0.15
Nodes (17): profileOk(), formOk, auditChanged(), changeOwner(), fail(), load(), loadAudit(), managerSaved() (+9 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "useSession"
Cohesion: 0.09
Nodes (21): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+13 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+22 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.31
Nodes (12): alertDefinition(), alertForm, AlertGroup, alertInput(), alertState(), compares(), conditionText(), muteUntil() (+4 more)

### Community 117 - "commission-components.test.ts"
Cohesion: 0.09
Nodes (20): open, answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters (+12 more)

### Community 118 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "Key"
Cohesion: 0.06
Nodes (24): compare, options, period, selected, auditActions, dict, errors, fallbackError (+16 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), rowState, STATES (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.16
Nodes (16): saveFile(), downloadInstall(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+8 more)

### Community 123 - "reports/rules.ts"
Cohesion: 0.06
Nodes (51): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), addFilter() (+43 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.39
Nodes (8): detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend, SCALING

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.15
Nodes (13): gamToolService, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language, detail, network (+5 more)

### Community 126 - "errorText"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 127 - "ClientTeamsView.vue"
Cohesion: 0.10
Nodes (19): firstName, greeting, session, clientService, clientId, clientOptions, clients, firstPage() (+11 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.20
Nodes (9): vitest, loadConfig(), COLUMN, Lang, languageMessages, Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "Field.vue"
Cohesion: 0.12
Nodes (12): busy, current, emit, mismatch, password, password2, ready, short (+4 more)

### Community 131 - "priorityLabel"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "clients/rules.ts"
Cohesion: 0.17
Nodes (14): emptyProfile(), NOTE_MAX, NOTE_MIN, profileBody(), profileInput(), STAFF_STATUSES, STATUS_TONE, ClientProfile (+6 more)

### Community 133 - "pick"
Cohesion: 0.10
Nodes (20): model, assignee, client, clientOptions, create(), description, domain, emit (+12 more)

### Community 134 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.06
Nodes (46): Task 3: Web — tipos, serviço e regras do construtor, Lang, reportService, ChartOptions, CustomCatalogMetric, CustomMetric, CustomMetricCheck, CustomMetricCheckInput (+38 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "invoices/types.ts"
Cohesion: 0.12
Nodes (15): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+7 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): model, gainQuery(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+44 more)

### Community 139 - "DashboardGrid.vue"
Cohesion: 0.22
Nodes (10): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+2 more)

### Community 140 - "PayeeDialog.vue"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 143 - "LoadError.vue"
Cohesion: 0.24
Nodes (8): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "ChecklistItemsView.vue"
Cohesion: 0.13
Nodes (18): checklistItemService, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist (+10 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (32): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, cascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+24 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.07
Nodes (31): formProblems(), previewDomain(), withTemplate(), base, busy, clientOptions, clients, device (+23 more)

### Community 148 - "inventory/service.ts"
Cohesion: 0.27
Nodes (8): ClientNetwork, ClientRef, ClientSite, McmCandidate, Network, NetworkStatus, NetworkSummary, SyncRun

### Community 149 - "AdjustmentDialog.vue"
Cohesion: 0.14
Nodes (18): amount, amountError, busy, emit, open, props, reason, reasonTouched (+10 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.09
Nodes (31): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+23 more)

### Community 152 - "sites/service.ts"
Cohesion: 0.35
Nodes (7): approval(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (34): adTagPermission(), tagStatus(), canManage, status, base, busy, canManage, columns (+26 more)

### Community 155 - "ReportTable.vue"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 156 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 158 - "loaders.test.ts"
Cohesion: 0.24
Nodes (10): previewLoader, LoaderService, Loader, LoaderAdblock, LoaderInput, LoaderOption, LoaderStyle, LoaderTag (+2 more)

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "errorText"
Cohesion: 0.20
Nodes (15): errorText(), load(), saveStart(), confirmEnd(), confirmRemove(), create(), load(), load() (+7 more)

### Community 161 - "useSession"
Cohesion: 0.24
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (23): formatDate(), healthSummary(), share(), base, decimal, filled, health, integer (+15 more)

### Community 163 - "t"
Cohesion: 0.14
Nodes (16): t(), tn(), changeLines, roleLine(), adUnitOptions, buttonColorLabel(), chooseImage(), devices (+8 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "ApiKeyDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.13
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, KEY_NAMES, siteSummary() (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "views/types.ts"
Cohesion: 0.14
Nodes (16): props, shown, active, emit, tabClass(), toggleColumn(), viewService, FilterValue (+8 more)

### Community 169 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "dayText"
Cohesion: 0.16
Nodes (19): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+11 more)

### Community 172 - "metricColor"
Cohesion: 0.17
Nodes (12): COMMENT_MAX, COMMENT_MIN, DESCRIPTION_MAX, eventText(), STATUS_TONE, STATUSES, StatusFilter, statusLabel() (+4 more)

### Community 173 - "lang"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 175 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 176 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 177 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 178 - "commission-components.test.ts"
Cohesion: 0.17
Nodes (8): lang, client, managerChange, perms, settings, staffOptions, team, toastError

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.25
Nodes (5): vite@^8.3.5, vite, ENTRIES, Entry, source

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `table.ts`, `@vueuse/core`, `ResultsView.vue`, `cn`, `GroupsView.vue`, `dashboards/types.ts`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PerformanceView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `FunnelChart.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `Pagination.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `views/rules.ts`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `Button.vue`, `commission-components.test.ts`, `TasksView.vue`, `errorText`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `sites.test.ts`, `reports/rules.ts`, `GAM`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `CompanyGoalCard.vue`, `ConfigPanel.vue`, `networks/service.ts`, `Button.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `ApiError`, `InvoicesView.vue`, `ApiError`, `AlertDialog.vue`, `index.ts`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `ClientsResultsView.vue`, `ClientSitesView.vue`, `GamRunView.vue`, `router.ts`, `fail`, `useSession`, `TemplatesView.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `commission-components.test.ts`, `Key`, `checklists/rules.ts`, `formatDate`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `errorText`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `clients/rules.ts`, `pick`, `AddWidgetDialog.vue`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `LoadError.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `sites/service.ts`, `AdTagsView.vue`, `errorToast`, `ClientNetworksCard.vue`, `errorText`, `useSession`, `AdTagMetricsView.vue`, `LoadersView.vue`, `ApiKeyDialog.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `views/types.ts`, `PriceRuleSitesView.vue`, `dayText`, `metricColor`, `loadMembers`, `costs/rules.ts`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `table.ts` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ResultsView.vue`, `cn`, `GroupsView.vue`, `dashboards/types.ts`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PerformanceView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `FunnelChart.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `Pagination.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `avant-tag`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `Button.vue`, `commission-components.test.ts`, `TasksView.vue`, `errorText`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `sites.test.ts`, `reports/rules.ts`, `GAM`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `CompanyGoalCard.vue`, `ConfigPanel.vue`, `networks/service.ts`, `Button.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `ApiError`, `InvoicesView.vue`, `ApiError`, `AlertDialog.vue`, `index.ts`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `ClientsResultsView.vue`, `ClientSitesView.vue`, `GamRunView.vue`, `router.ts`, `useSession`, `TemplatesView.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `Key`, `drag.ts`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `errorText`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `priorityLabel`, `pick`, `AddWidgetDialog.vue`, `reports/types.ts`, `PriceRuleView.vue`, `invoices/types.ts`, `PriceRuleSiteView.vue`, `DashboardGrid.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `LoadError.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `ClientNetworksCard.vue`, `useSession`, `AdTagMetricsView.vue`, `LoadersView.vue`, `ApiKeyDialog.vue`, `AdTagPreview.vue`, `PriceRuleSitesView.vue`, `commission-components.test.ts`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `table.ts`, `@vueuse/core`, `ResultsView.vue`, `GroupsView.vue`, `dashboards/types.ts`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PerformanceView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `FunnelChart.vue`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `Button.vue`, `commission-components.test.ts`, `TasksView.vue`, `errorText`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `sites.test.ts`, `reports/rules.ts`, `GAM`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `CompanyGoalCard.vue`, `ConfigPanel.vue`, `networks/service.ts`, `Button.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `ApiError`, `InvoicesView.vue`, `ApiError`, `AlertDialog.vue`, `CascadeRuleView.vue`, `ClientsResultsView.vue`, `ClientSitesView.vue`, `GamRunView.vue`, `router.ts`, `fail`, `useSession`, `TemplatesView.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `Review Focus`, `errorText`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `clients/rules.ts`, `pick`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `LoadError.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `AdTagsView.vue`, `ReportTable.vue`, `errorToast`, `ClientNetworksCard.vue`, `useSession`, `AdTagMetricsView.vue`, `t`, `LoadersView.vue`, `PriceRuleSitesView.vue`?**
  _High betweenness centrality (0.074) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.046511627906976744 - nodes in this community are weakly interconnected._