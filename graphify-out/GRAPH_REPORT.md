# Graph Report - wt-avant-web-readme  (2026-11-12)

## Corpus Check
- 383 files · ~250,263 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 12 file(s) not represented in the graph (top: (none) 7, .conf 2, .toml 1)

## Summary
- 4444 nodes · 11625 edges · 176 communities (169 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 139 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2d53cf55`
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
- PerformanceView.vue
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- @vueuse/core
- errorText
- GoalTemplatesDialog.vue
- steps
- ServiceLineDialog.vue
- SavedViewsBar.vue
- ApiKeysCard.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- vue
- loaders/rules.ts
- ClientsResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- TeamTabs.vue
- GroupsView.vue
- dashboards/types.ts
- pick
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- vue-sonner
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- SettingsView.vue
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- ClassifySitesDialog.vue
- .oxlintrc.json
- t
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- avant-tag
- InvoicesView.vue
- InviteView.vue
- FiscalDataCard.vue
- GoalsView.vue
- InvoiceDocument.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- invoices/types.ts
- index.ts
- ResetView.vue
- ChecklistsView.vue
- MfaCard.vue
- alerts/types.ts
- contracts/types.ts
- MyCommissionView.vue
- api.ts
- RolesView.vue
- RoleDialog.vue
- CurrencyCard.vue
- sites/types.ts
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- cn
- table.ts
- AccountManagerCard.vue
- rewards/rules.ts
- ApiKeyDialog.vue
- FieldsPanel.vue
- SaveViewDialog.vue
- AlertDialog.vue
- dashboards/rules.ts
- CascadeRuleView.vue
- MetricStylePopover.vue
- GAM
- RewardMetricsView.vue
- GamRunView.vue
- ApiError
- ad-tags.test.ts
- Field.vue
- updates
- RewardsView.vue
- inputOf
- TemplateEditorView.vue
- alerts/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- session.ts
- drag.ts
- checklists/rules.ts
- rewards/types.ts
- reports/rules.ts
- RevenueStatusBadge.vue
- gam_tools/types.ts
- InvoiceServicesView.vue
- ClientTeamsView.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- PasswordCard.vue
- BarChart.vue
- ClientSitesView.vue
- NewTaskDialog.vue
- Button.vue
- reports/types.ts
- PriceRuleView.vue
- events.ts
- PriceRuleSiteView.vue
- priceRulePermission
- NativeSelect.vue
- ChecklistView.vue
- SaveReportDialog.vue
- LoadError.vue
- ChecklistItemDialog.vue
- ChecklistItemsView.vue
- price_rules/rules.ts
- LoaderEditView.vue
- clients/types.ts
- ClientNetworksView.vue
- tasks/types.ts
- ad_tags/rules.ts
- ad_tags/types.ts
- virtual-i18n.d.ts
- AdTagsView.vue
- Review Focus
- price_rules/types.ts
- ClientNetworksCard.vue
- navigation.ts
- AdTagMetricsView.vue
- NetworkReviewActions.vue
- LoadersView.vue
- RecoveryCodes.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- priorityLabel
- PriceRuleSitesView.vue
- metricColor
- tasks/rules.ts
- lang
- Input.vue
- router.ts
- FakeSource
- overrides
- vite.embed.config.ts
- LoaderPreview.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 511 edges
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

## Communities (176 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+36 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (44): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+36 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (62): loadDraft(), builderState, canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart(), fromQuery() (+54 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (28): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+20 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.07
Nodes (48): changeLines, amount, amountError, busy, emit, open, props, reason (+40 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.06
Nodes (32): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+24 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (67): props, up, compare, options, period, selected, countryName(), dailySeries() (+59 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.16
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.15
Nodes (12): API first e chaves de API, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa, Empresa e equipe (+4 more)

### Community 18 - "@vueuse/core"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+11 more)

### Community 19 - "errorText"
Cohesion: 0.07
Nodes (36): errorText(), submit(), loadGroups(), load(), confirmEnd(), confirmRemove(), create(), load() (+28 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.05
Nodes (56): locale, busy, canManage, changed, current, load(), monthNames, months (+48 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (17): amount, amountError, busy, chosen, description, emit, open, options (+9 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (25): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+17 more)

### Community 24 - "ApiKeysCard.vue"
Cohesion: 0.07
Nodes (39): Theme, UserRef, busy, canManage, created(), creating, keys, load() (+31 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (41): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+33 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.05
Nodes (32): adUnitNames(), previewReward(), adUnitHint, base, busy, device, domain, groups (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (50): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+42 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (26): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirmOpen (+18 more)

### Community 31 - "vue"
Cohesion: 0.11
Nodes (14): vue, props, seats, company, error, hasSeats, load(), lost (+6 more)

### Community 32 - "loaders/rules.ts"
Cohesion: 0.13
Nodes (18): ADBLOCK_HINT, ADBLOCK_TITLE, BLUR_LEVELS, BLUR_PIXELS, LIMITS, MAX_SECONDS, previewLoader, STYLES (+10 more)

### Community 33 - "ClientsResultsView.vue"
Cohesion: 0.06
Nodes (43): CostKind, clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError (+35 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 38 - "GroupsView.vue"
Cohesion: 0.05
Nodes (43): broken, hue, initials, props, busy, create(), description, duplicate (+35 more)

### Community 39 - "dashboards/types.ts"
Cohesion: 0.10
Nodes (35): drag, emit, grid, props, { run, failure, loading }, source, stored, widgetFailure() (+27 more)

### Community 40 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "vue-sonner"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+14 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.08
Nodes (36): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, label(), apiMessage(), canManage (+28 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.08
Nodes (28): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, McmCandidate, Network, NetworkStatus, NetworkSummary (+20 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.09
Nodes (24): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+16 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (62): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, change(), formatMetric(), toNumber() (+54 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "ClassifySitesDialog.vue"
Cohesion: 0.14
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.09
Nodes (31): busy, drop(), input, pick(), problem, props, run(), t() (+23 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (40): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+32 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (56): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+48 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "InvoicesView.vue"
Cohesion: 0.07
Nodes (44): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+36 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.17
Nodes (12): busy, complete, documentLabel, form, load(), loaded, options, save() (+4 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.07
Nodes (37): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+29 more)

### Community 74 - "InvoiceDocument.vue"
Cohesion: 0.22
Nodes (12): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, monthName(), payee, PAYER (+4 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (26): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+18 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (40): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+32 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (65): model, settingsProblem(), toPayload(), absentUnits, armed, base, blocking, blocks (+57 more)

### Community 79 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 80 - "index.ts"
Cohesion: 0.11
Nodes (13): fill(), loaded, loaders, loadLang(), Messages, startLang(), busy, email (+5 more)

### Community 81 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.11
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 84 - "alerts/types.ts"
Cohesion: 0.31
Nodes (9): alertService, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview (+1 more)

### Community 85 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.09
Nodes (24): auditActions, dict, errors, fallbackError, Key, formatDay(), localToday(), STATUS_TONE (+16 more)

### Community 87 - "api.ts"
Cohesion: 0.12
Nodes (31): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+23 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+28 more)

### Community 90 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "sites/types.ts"
Cohesion: 0.24
Nodes (8): approval(), AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (41): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+33 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.14
Nodes (15): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+7 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "cn"
Cohesion: 0.13
Nodes (18): reka-ui, pick(), route, router, session, panelItem(), railItem(), open (+10 more)

### Community 96 - "table.ts"
Cohesion: 0.09
Nodes (24): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers() (+16 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (19): profileInput(), openEdit(), busy, canChange, emit, manager, managerId, next (+11 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (29): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+21 more)

### Community 99 - "ApiKeyDialog.vue"
Cohesion: 0.09
Nodes (20): model, auditText(), formatAgo(), permissionGroupLabel(), busy, catalog, chosen, copied (+12 more)

### Community 100 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 101 - "SaveViewDialog.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 102 - "AlertDialog.vue"
Cohesion: 0.10
Nodes (19): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+11 more)

### Community 103 - "dashboards/rules.ts"
Cohesion: 0.06
Nodes (59): add(), emit, kind, kinds, metric, metrics, open, props (+51 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (48): cascadeLadder(), dropPercent(), nearestTier(), base, busy, changeStatus(), currency, decisionPages (+40 more)

### Community 105 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 106 - "GAM"
Cohesion: 0.33
Nodes (6): Atribuição de sites, GAM, Networks, Sites e ad units, network(), site()

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 109 - "ApiError"
Cohesion: 0.10
Nodes (20): vue-router, RouteMeta, vue-router, ApiError, safeNext(), busy, email, error (+12 more)

### Community 110 - "ad-tags.test.ts"
Cohesion: 0.15
Nodes (14): adTagsPath(), blankSettings(), chosenDay(), newBlock(), tagStatus(), AdTagService, AdTagDraft, AdTagUnitDay (+6 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.09
Nodes (22): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+14 more)

### Community 114 - "inputOf"
Cohesion: 0.40
Nodes (5): blankInput(), inputOf(), toPayload(), load(), save()

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.06
Nodes (49): editableWidgets(), templateService, blankTemplate(), canPreview(), roleNames(), templateForm(), templateInput(), toggleRole() (+41 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.31
Nodes (12): alertDefinition(), alertForm, AlertGroup, alertInput(), alertState(), compares(), conditionText(), muteUntil() (+4 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "session.ts"
Cohesion: 0.13
Nodes (14): pinia, choose(), langs, session, open, session, reconnectEvents(), chooseLang() (+6 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), rowState, STATES (+4 more)

### Community 122 - "rewards/types.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "reports/rules.ts"
Cohesion: 0.06
Nodes (45): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+37 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.16
Nodes (15): GamFormat, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 127 - "ClientTeamsView.vue"
Cohesion: 0.12
Nodes (18): dot, ClientMember, ClientOption, clientId, clientOptions, clients, firstPage(), load() (+10 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.31
Nodes (7): COLUMN, Lang, languageMessages, Source, Texts, i18nByLanguage(), LANGS

### Community 130 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 133 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 134 - "Button.vue"
Cohesion: 0.24
Nodes (7): lucide-vue-next, open, button, classes, Props, props, shown

### Community 135 - "reports/types.ts"
Cohesion: 0.06
Nodes (44): Task 3: Web — tipos, serviço e regras do construtor, vitest, @vue/test-utils, Lang, emit, period, props, emit (+36 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): lastDayTotals(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "events.ts"
Cohesion: 0.18
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+5 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (51): model, model, gainQuery(), modelChoices(), modelCounts(), siteStatus(), active, automaticRuleCount (+43 more)

### Community 139 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 140 - "NativeSelect.vue"
Cohesion: 0.15
Nodes (12): model, busy, complete, documentLabel, emit, form, open, options (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

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
Nodes (33): ACTION_KEY, blockKind(), BlockModelKind, CASCADE_REASON_KEY, CASCADE_SERIES, cascadeFunnel, CascadePoint, cascadePoints() (+25 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.07
Nodes (31): formProblems(), previewDomain(), withTemplate(), base, busy, clientOptions, clients, device (+23 more)

### Community 148 - "clients/types.ts"
Cohesion: 0.13
Nodes (16): CompanyStatus, AuditEntry, Client, ClientDetail, ClientNote, ManagerChange, NotePerson, OwnerInvitation (+8 more)

### Community 149 - "ClientNetworksView.vue"
Cohesion: 0.12
Nodes (17): box, failed, initial, props, awaitingOnly, canAssign, firstPage(), load() (+9 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.10
Nodes (30): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+22 more)

### Community 152 - "ad_tags/types.ts"
Cohesion: 0.18
Nodes (10): AdTagBlock, AdTagDevice, AdTagEdge, AdTagHealth, AdTagHealthDay, AdTagRuleMode, AdTagSettings, AdTagSide (+2 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 157 - "price_rules/types.ts"
Cohesion: 0.11
Nodes (23): PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock, PriceRuleConfig (+15 more)

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 161 - "navigation.ts"
Cohesion: 0.22
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+4 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (24): formatDate(), healthSummary(), share(), AdTag, base, decimal, filled, health (+16 more)

### Community 163 - "NetworkReviewActions.vue"
Cohesion: 0.39
Nodes (7): busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "RecoveryCodes.vue"
Cohesion: 0.14
Nodes (16): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+8 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (17): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+9 more)

### Community 169 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "metricColor"
Cohesion: 0.17
Nodes (18): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+10 more)

### Community 172 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 173 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "Input.vue"
Cohesion: 0.22
Nodes (8): model, chosen, create(), emit, name, open, templates, DashboardTemplate

### Community 175 - "router.ts"
Cohesion: 0.16
Nodes (10): LINES, showBootFailure(), announceCompany(), CompanyMessage, onCompanyAnnounced(), boot(), followOtherTab(), router (+2 more)

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
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `errorText`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `vue`, `ClientsResultsView.vue`, `TeamTabs.vue`, `GroupsView.vue`, `pick`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `SettingsView.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `InvoicesView.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `InvoiceDocument.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `contracts/types.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `sites/types.ts`, `GamToolsView.vue`, `SidebarRail.vue`, `cn`, `table.ts`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiKeyDialog.vue`, `FieldsPanel.vue`, `SaveViewDialog.vue`, `AlertDialog.vue`, `dashboards/rules.ts`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `RewardMetricsView.vue`, `GamRunView.vue`, `ApiError`, `ad-tags.test.ts`, `Field.vue`, `RewardsView.vue`, `inputOf`, `TemplateEditorView.vue`, `alerts/rules.ts`, `RewardLeadsCard.vue`, `session.ts`, `checklists/rules.ts`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `Button.vue`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `NativeSelect.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `LoadError.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `ClientNetworksView.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `ClientNetworksCard.vue`, `navigation.ts`, `AdTagMetricsView.vue`, `NetworkReviewActions.vue`, `LoadersView.vue`, `RecoveryCodes.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `priorityLabel`, `PriceRuleSitesView.vue`, `metricColor`, `tasks/rules.ts`, `Input.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.188) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051418439716312055 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `@vueuse/core`, `errorText`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClientsResultsView.vue`, `TeamTabs.vue`, `GroupsView.vue`, `dashboards/types.ts`, `pick`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `SettingsView.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `InvoicesView.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `InvoiceDocument.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `table.ts`, `AccountManagerCard.vue`, `ApiKeyDialog.vue`, `FieldsPanel.vue`, `SaveViewDialog.vue`, `AlertDialog.vue`, `dashboards/rules.ts`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `RewardMetricsView.vue`, `GamRunView.vue`, `ApiError`, `Field.vue`, `RewardsView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `session.ts`, `drag.ts`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `BarChart.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `Button.vue`, `reports/types.ts`, `PriceRuleView.vue`, `events.ts`, `PriceRuleSiteView.vue`, `NativeSelect.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `LoadError.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `ClientNetworksView.vue`, `ad_tags/rules.ts`, `AdTagsView.vue`, `ClientNetworksCard.vue`, `navigation.ts`, `AdTagMetricsView.vue`, `NetworkReviewActions.vue`, `LoadersView.vue`, `RecoveryCodes.vue`, `AdTagPreview.vue`, `PriceRuleSitesView.vue`, `Input.vue`, `router.ts`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05319148936170213 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `vue`, `ClientsResultsView.vue`, `GroupsView.vue`, `dashboards/types.ts`, `pick`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `vue-sonner`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `SettingsView.vue`, `PeopleView.vue`, `ClassifySitesDialog.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `InvoicesView.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `GamToolsView.vue`, `cn`, `table.ts`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiKeyDialog.vue`, `AlertDialog.vue`, `CascadeRuleView.vue`, `RewardMetricsView.vue`, `GamRunView.vue`, `ApiError`, `RewardsView.vue`, `inputOf`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `session.ts`, `InvoiceServicesView.vue`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `NativeSelect.vue`, `ChecklistView.vue`, `LoadError.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `LoaderEditView.vue`, `ClientNetworksView.vue`, `AdTagsView.vue`, `Review Focus`, `ClientNetworksCard.vue`, `navigation.ts`, `AdTagMetricsView.vue`, `NetworkReviewActions.vue`, `LoadersView.vue`, `PriceRuleSitesView.vue`, `router.ts`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._