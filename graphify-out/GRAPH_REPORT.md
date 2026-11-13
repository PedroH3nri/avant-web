# Graph Report - avant-web  (2026-11-12)

## Corpus Check
- 383 files · ~251,648 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 4450 nodes · 11641 edges · 180 communities (172 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 140 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6069935e`
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
- checklists/types.ts
- @vueuse/core
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- invoices/types.ts
- GroupsView.vue
- DashboardGrid.vue
- ClassifySitesDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- ClientDocumentsCard.vue
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- Button.vue
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
- ad-tags.test.ts
- GoalsView.vue
- InvoiceDocument.vue
- commission-components.test.ts
- TasksView.vue
- errorText
- AdTagEditView.vue
- ClientNetworksView.vue
- index.ts
- useSession
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
- PageBody.vue
- ClientSitesView.vue
- AccountManagerCard.vue
- GamRunView.vue
- ApiError
- InvoicesView.vue
- vitest
- AlertDialog.vue
- FieldsPanel.vue
- CascadeRuleView.vue
- MetricStylePopover.vue
- ClientsResultsView.vue
- ClientSitesView.vue
- GamRunView.vue
- router.ts
- ad-tags.test.ts
- NetworkReviewActions.vue
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
- GoogleCard.vue
- pick
- dashboards/rules.ts
- reports/types.ts
- PriceRuleView.vue
- invoices/types.ts
- PriceRuleSiteView.vue
- NewDashboardDialog.vue
- PayeeDialog.vue
- ChecklistView.vue
- Input.vue
- priorityLabel
- ChecklistItemDialog.vue
- Status.vue
- price_rules/rules.ts
- LoaderEditView.vue
- loadReports
- AdjustmentDialog.vue
- tasks/types.ts
- ad_tags/rules.ts
- Field.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- ReportTable.vue
- errorToast
- price_rules/types.ts
- loaders.test.ts
- ClientNetworksCard.vue
- errorText
- exportUrl
- AdTagMetricsView.vue
- formatMonth
- LoadersView.vue
- ownerName
- gam_tools/rules.ts
- AdTagPreview.vue
- reka-ui
- priceRulePermission
- PriceRuleSitesView.vue
- dayText
- metricColor
- lang
- loadMembers
- costs/rules.ts
- results/types.ts
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `hour()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → tests/price-rules.test.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts

## Import Cycles
- None detected.

## Communities (180 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (46): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+38 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.04
Nodes (58): profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal, candidates (+50 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (46): builderState, toInput(), toQuery(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+38 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.05
Nodes (43): pick(), options, roleName(), roleOptions, names, DirectPermission, allSites, assigned (+35 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.08
Nodes (30): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+22 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (38): changeLines, busy, canTransfer, duplicate, emit, errors, form, open (+30 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (38): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+30 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (61): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay(), dimensionText() (+53 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.21
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
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (20): amount, amountError, busy, chosen, description, emit, open, options (+12 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.08
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (39): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+31 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.07
Nodes (34): approval(), tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch (+26 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.04
Nodes (44): t(), adUnitNames(), adUnitHint, adUnitOptions, base, busy, buttonColorLabel(), chooseImage() (+36 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (55): emptyProfile(), profileBody(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+47 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.08
Nodes (24): invoicePdfUrl(), act(), backTo, busy, Confirm, confirmOpen, confirmText, downloadPdf() (+16 more)

### Community 31 - "checklists/types.ts"
Cohesion: 0.19
Nodes (13): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistPerson (+5 more)

### Community 32 - "@vueuse/core"
Cohesion: 0.13
Nodes (19): ADBLOCK_HINT, ADBLOCK_TITLE, BLUR_LEVELS, BLUR_PIXELS, LIMITS, MAX_SECONDS, previewLoader, STYLES (+11 more)

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

### Community 37 - "invoices/types.ts"
Cohesion: 0.26
Nodes (12): FiscalData, invoiceService, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput (+4 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.06
Nodes (41): busy, create(), description, duplicate, emit, name, open, people (+33 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.16
Nodes (21): drag, emit, grid, props, { run, failure, loading }, source, stored, widgetFailure() (+13 more)

### Community 40 - "ClassifySitesDialog.vue"
Cohesion: 0.12
Nodes (23): loadExtras(), category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (29): discount(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail (+21 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.10
Nodes (28): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+20 more)

### Community 44 - "ClientDocumentsCard.vue"
Cohesion: 0.23
Nodes (12): approve(), busy, downloadFile(), emit, fail(), load(), overview, props (+4 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (37): NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, ReportPreview, apiMessage() (+29 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/types.ts"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "Button.vue"
Cohesion: 0.06
Nodes (36): lucide-vue-next, button, classes, Props, props, seats, busy, complete (+28 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (69): FALLBACK, METRIC_COLOR, metricColors(), change(), formatMetric(), toNumber(), pageSlice(), metricText() (+61 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (21): Task 6: Web — construtor, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

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
Cohesion: 0.11
Nodes (22): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+14 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.07
Nodes (26): busy, canManage, catalog, counts, empty, Layout, layouts, loadError (+18 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.05
Nodes (56): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+48 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "views/rules.ts"
Cohesion: 0.17
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "ad-tags.test.ts"
Cohesion: 0.18
Nodes (12): adTagsPath(), blankSettings(), newBlock(), settingsProblem(), tagStatus(), AdTagDraft, addBlock(), integrationProblem (+4 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "InvoiceDocument.vue"
Cohesion: 0.29
Nodes (7): dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.04
Nodes (52): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+44 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (65): model, chosenDay(), toPayload(), absentUnits, armed, base, blocking, blocks (+57 more)

### Community 79 - "ClientNetworksView.vue"
Cohesion: 0.14
Nodes (14): latestCall(), awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall (+6 more)

### Community 80 - "index.ts"
Cohesion: 0.07
Nodes (25): vue, first, FunnelStep, props, choose(), langs, session, open (+17 more)

### Community 81 - "useSession"
Cohesion: 0.07
Nodes (27): vue-sonner, toasterTheme, announceCompany(), CompanyMessage, onCompanyAnnounced(), route, router, session (+19 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.11
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 84 - "pick"
Cohesion: 0.16
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 85 - "session.ts"
Cohesion: 0.06
Nodes (35): pinia, vue-router, RouteMeta, vue-router, Accent, accentCss(), accentFor(), ACCENTS (+27 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.12
Nodes (19): locale, formatDay(), STATUS_TONE, windowState, data, endText(), kpis, load() (+11 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.11
Nodes (31): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+23 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.08
Nodes (26): broken, hue, initials, props, assign(), canManage, canTeam, editable() (+18 more)

### Community 89 - "inviteTaken"
Cohesion: 0.06
Nodes (47): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+39 more)

### Community 90 - "locale"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): defaultSites(), installable(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.08
Nodes (29): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+21 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "PageBody.vue"
Cohesion: 0.08
Nodes (21): props, up, pick(), route, router, session, cn(), choose() (+13 more)

### Community 96 - "ClientSitesView.vue"
Cohesion: 0.12
Nodes (16): box, failed, initial, props, canSeeChecklists, firstPage(), load(), loadError (+8 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (38): CompanyStatus, profileInput(), AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption (+30 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.09
Nodes (31): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+23 more)

### Community 99 - "ApiError"
Cohesion: 0.07
Nodes (32): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+24 more)

### Community 100 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (15): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, loadError, month, page, pages (+7 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (49): model, dropPercent(), percentText(), base, busy, changeStatus(), currency, decisionFirstFill() (+41 more)

### Community 105 - "MetricStylePopover.vue"
Cohesion: 0.15
Nodes (17): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+9 more)

### Community 106 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, loadError, money(), month (+8 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.09
Nodes (28): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+20 more)

### Community 108 - "GamRunView.vue"
Cohesion: 0.13
Nodes (15): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), done (+7 more)

### Community 109 - "router.ts"
Cohesion: 0.08
Nodes (23): ApiError, safeNext(), busy, email, error, sent, submit(), busy (+15 more)

### Community 110 - "ad-tags.test.ts"
Cohesion: 0.20
Nodes (12): AdTagService, AdTag, AdTagDevice, AdTagEdge, AdTagHealth, AdTagHealthDay, AdTagRuleMode, AdTagSettings (+4 more)

### Community 111 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "useSession"
Cohesion: 0.08
Nodes (22): model, installSnippet(), base, columns, copied, deleted, load(), loadError (+14 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (40): editableWidgets(), templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience() (+32 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.17
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+10 more)

### Community 117 - "commission-components.test.ts"
Cohesion: 0.10
Nodes (19): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+11 more)

### Community 118 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "Key"
Cohesion: 0.10
Nodes (22): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+14 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.18
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), rowState, rowStateLabel() (+4 more)

### Community 122 - "formatDate"
Cohesion: 0.16
Nodes (15): saveFile(), downloadInstall(), RewardService, Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay (+7 more)

### Community 123 - "reports/rules.ts"
Cohesion: 0.09
Nodes (37): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), filterable (+29 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.15
Nodes (13): gamToolService, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language, detail, network (+5 more)

### Community 126 - "errorText"
Cohesion: 0.11
Nodes (16): open, open, busy, canManage, description, editing, editingOpen, loadError (+8 more)

### Community 127 - "ClientTeamsView.vue"
Cohesion: 0.13
Nodes (17): td, th, clientId, clientOptions, clients, firstPage(), load(), loadError (+9 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.19
Nodes (11): auditActions, dict, errors, fallbackError, COLUMN, Lang, languageMessages, Source (+3 more)

### Community 130 - "Field.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 131 - "priorityLabel"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "GoogleCard.vue"
Cohesion: 0.29
Nodes (6): busy, confirm, load(), session, status, unlink()

### Community 133 - "pick"
Cohesion: 0.11
Nodes (17): model, assignee, client, clientOptions, create(), description, domain, emit (+9 more)

### Community 134 - "dashboards/rules.ts"
Cohesion: 0.06
Nodes (55): add(), emit, kind, kinds, metric, metrics, open, props (+47 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.07
Nodes (47): Task 3: Web — tipos, serviço e regras do construtor, @vue/test-utils, Lang, draft, draftKey, emit, failure, goal (+39 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (54): hourPoints(), moneyText(), nearestTier(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions (+46 more)

### Community 137 - "invoices/types.ts"
Cohesion: 0.12
Nodes (15): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+7 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (52): model, gainQuery(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+44 more)

### Community 139 - "NewDashboardDialog.vue"
Cohesion: 0.29
Nodes (7): chosen, create(), emit, name, open, templates, DashboardTemplate

### Community 140 - "PayeeDialog.vue"
Cohesion: 0.15
Nodes (16): options, countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), busy, complete, documentLabel (+8 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): ROW_TONE, splitRows(), checking, checklist, checklistId, checkNow(), fail(), groups (+8 more)

### Community 142 - "Input.vue"
Cohesion: 0.08
Nodes (24): model, Dashboard, DashboardInput, choices, description, emit, invalid, name (+16 more)

### Community 143 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "Status.vue"
Cohesion: 0.15
Nodes (10): dot, canManage, dialogOpen, editing, items, load(), loadError, move() (+2 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (37): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, cascadeFunnel, cascadeLadder(), CascadePoint, cascadePoints(), CascadeSeries (+29 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.07
Nodes (27): withTemplate(), base, busy, clientOptions, clients, device, exiting, input (+19 more)

### Community 148 - "loadReports"
Cohesion: 0.32
Nodes (8): duplicate(), firstPage(), load(), loadPinned(), loadReports(), remove(), reportsCall, togglePin()

### Community 149 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.09
Nodes (31): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+23 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 155 - "ReportTable.vue"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 156 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 157 - "price_rules/types.ts"
Cohesion: 0.12
Nodes (20): BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleBlock, PriceRuleConfig, PriceRuleConfigInput, PriceRuleDetails (+12 more)

### Community 158 - "loaders.test.ts"
Cohesion: 0.20
Nodes (10): blankInput(), formProblems(), inputOf(), previewDomain(), toPayload(), LoaderService, domain, load() (+2 more)

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "errorText"
Cohesion: 0.17
Nodes (16): errorText(), load(), loadStart(), openDetail(), saveStart(), confirmEnd(), confirmRemove(), create() (+8 more)

### Community 161 - "exportUrl"
Cohesion: 0.50
Nodes (4): exportUrl(), download(), download(), download()

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.10
Nodes (23): formatDate(), healthSummary(), share(), base, decimal, filled, health, integer (+15 more)

### Community 163 - "formatMonth"
Cohesion: 0.67
Nodes (3): formatMonth(), periodText(), monthOptions

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.13
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, KEY_NAMES, siteSummary() (+14 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (17): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+9 more)

### Community 168 - "reka-ui"
Cohesion: 0.24
Nodes (7): reka-ui, emit, props, shown, active, emit, tabClass()

### Community 169 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (17): priceRulesPath(), PriceRuleService, base, columns, integer, load(), loadError, page (+9 more)

### Community 171 - "dayText"
Cohesion: 0.27
Nodes (13): colorVar(), metricColor(), dayLabel, dayOptions, chart, hourLabel(), boughtColor, chart (+5 more)

### Community 172 - "metricColor"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 173 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 176 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 177 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

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
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `GroupsView.vue` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ResultsView.vue`, `GroupsView.vue`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ClientDocumentsCard.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `Button.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `Pagination.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `views/rules.ts`, `InviteView.vue`, `ad-tags.test.ts`, `GoalsView.vue`, `InvoiceDocument.vue`, `commission-components.test.ts`, `TasksView.vue`, `errorText`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `useSession`, `reports/rules.ts`, `GAM`, `pick`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `CompanyGoalCard.vue`, `ConfigPanel.vue`, `networks/service.ts`, `PageBody.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `ApiError`, `InvoicesView.vue`, `AlertDialog.vue`, `FieldsPanel.vue`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `ClientsResultsView.vue`, `ClientSitesView.vue`, `GamRunView.vue`, `router.ts`, `NetworkReviewActions.vue`, `useSession`, `TemplatesView.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `commission-components.test.ts`, `Key`, `checklists/rules.ts`, `formatDate`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `errorText`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `GoogleCard.vue`, `pick`, `dashboards/rules.ts`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `NewDashboardDialog.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `Input.vue`, `priorityLabel`, `ChecklistItemDialog.vue`, `Status.vue`, `LoaderEditView.vue`, `loadReports`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `Field.vue`, `AdTagsView.vue`, `errorToast`, `loaders.test.ts`, `ClientNetworksCard.vue`, `errorText`, `AdTagMetricsView.vue`, `formatMonth`, `LoadersView.vue`, `ownerName`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `reka-ui`, `PriceRuleSitesView.vue`, `dayText`, `metricColor`, `loadMembers`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.179) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04897959183673469 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `index.ts` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ClientDocumentsCard.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `Button.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `Pagination.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `avant-tag`, `InviteView.vue`, `GoalsView.vue`, `InvoiceDocument.vue`, `commission-components.test.ts`, `TasksView.vue`, `errorText`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `useSession`, `reports/rules.ts`, `GAM`, `pick`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `CompanyGoalCard.vue`, `ConfigPanel.vue`, `networks/service.ts`, `PageBody.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `ApiError`, `InvoicesView.vue`, `AlertDialog.vue`, `FieldsPanel.vue`, `CascadeRuleView.vue`, `MetricStylePopover.vue`, `ClientsResultsView.vue`, `ClientSitesView.vue`, `GamRunView.vue`, `router.ts`, `NetworkReviewActions.vue`, `useSession`, `TemplatesView.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `Key`, `drag.ts`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `errorText`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `priorityLabel`, `GoogleCard.vue`, `pick`, `dashboards/rules.ts`, `reports/types.ts`, `PriceRuleView.vue`, `invoices/types.ts`, `PriceRuleSiteView.vue`, `NewDashboardDialog.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `Input.vue`, `ChecklistItemDialog.vue`, `Status.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `Field.vue`, `AdTagsView.vue`, `ClientNetworksCard.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `AdTagPreview.vue`, `PriceRuleSitesView.vue`, `LoaderPreview.vue`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ServiceLineDialog.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ClientDocumentsCard.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `Button.vue`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `InviteView.vue`, `GoalsView.vue`, `commission-components.test.ts`, `TasksView.vue`, `errorText`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `useSession`, `reports/rules.ts`, `GAM`, `pick`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `inviteTaken`, `locale`, `CompanyGoalCard.vue`, `ConfigPanel.vue`, `networks/service.ts`, `PageBody.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `GamRunView.vue`, `ApiError`, `InvoicesView.vue`, `AlertDialog.vue`, `CascadeRuleView.vue`, `ClientsResultsView.vue`, `ClientSitesView.vue`, `GamRunView.vue`, `router.ts`, `NetworkReviewActions.vue`, `useSession`, `TemplatesView.vue`, `TemplateEditorView.vue`, `commission-components.test.ts`, `Review Focus`, `errorText`, `ClientTeamsView.vue`, `ChecklistNotesCard.vue`, `Field.vue`, `GoogleCard.vue`, `pick`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `PayeeDialog.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `Status.vue`, `LoaderEditView.vue`, `loadReports`, `AdjustmentDialog.vue`, `AdTagsView.vue`, `errorToast`, `loaders.test.ts`, `ClientNetworksCard.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `PriceRuleSitesView.vue`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04463276836158192 - nodes in this community are weakly interconnected._