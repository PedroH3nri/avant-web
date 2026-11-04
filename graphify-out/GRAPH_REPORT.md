# Graph Report - avant-web  (2026-11-04)

## Corpus Check
- 324 files · ~192,398 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3559 nodes · 9405 edges · 143 communities (138 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e1075cf8`
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
- ClientsResultsView.vue
- SidebarNav.vue
- ApiKeyDialog.vue
- api
- CostsView.vue
- Arquitetura do MVP do Avant
- SchedulesView.vue
- ClientsView.vue
- RoleDialog.vue
- SiteDetailView.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- GroupsView.vue
- Review Focus
- PageViewsView.vue
- inventory/types.ts
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- errorToast
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- errorText
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- api.ts
- .oxlintrc.json
- t
- avant-web
- load
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- GoogleCard.vue
- devDependencies
- fail
- MetricStylePopover.vue
- clients/rules.ts
- FiscalDataCard.vue
- GoalsView.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- MetricStylePopover.vue
- Input.vue
- results/types.ts
- reports/rules.ts
- GAM
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- api.ts
- RolesView.vue
- inviteTaken
- GoogleCard.vue
- CompanyIcon.vue
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- TeamTabs.vue
- Button.vue
- events.ts
- MfaView.vue
- MyCommissionView.vue
- Pagination.vue
- t
- sites/rules.ts
- networkName
- networkName
- errorText
- ClientSitesView.vue
- SaveViewDialog.vue
- NewTaskDialog.vue
- vitest
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- useSession
- AccountStatus.vue
- vue
- drag.ts
- FieldsPanel.vue
- GamRunView.vue
- alerts/types.ts
- gam_tools/types.ts
- PasswordCard.vue
- i18n.ts
- ChecklistNotesCard.vue
- tasks/types.ts
- AccountManagerCard.vue
- alerts/types.ts
- Button.vue
- vitest
- costs/rules.ts
- tasks/rules.ts
- lang
- ChecklistView.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- SeatBar.vue
- costs/service.ts
- ChecklistItemsView.vue
- errorToast
- events.ts
- BarChart.vue
- loadMembers

## God Nodes (most connected - your core abstractions)
1. `t()` - 416 edges
2. `errorText()` - 259 edges
3. `vue` - 143 edges
4. `ApiError` - 101 edges
5. `useSession` - 79 edges
6. `lucide-vue-next` - 77 edges
7. `vue-sonner` - 76 edges
8. `toNumber()` - 59 edges
9. `cn()` - 55 edges
10. `formatMetric()` - 48 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (143 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (49): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+41 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (41): audit, auditPage, auditPages, auditTotal, candidates, canDocuments, canManage, canNotes (+33 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (64): loadDraft(), builderState, canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart(), fromQuery() (+56 more)

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
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (33): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+25 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (45): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+37 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.06
Nodes (32): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+24 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (64): props, up, countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour() (+56 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.18
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.11
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (21): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+13 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (25): saved, busy, changed(), close(), creating, editing, emit, formOpen (+17 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.10
Nodes (18): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+10 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.08
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (26): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+18 more)

### Community 25 - "api"
Cohesion: 0.26
Nodes (9): api, Query, Items, groupService, contractService, peopleService, staffService, resultService (+1 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (27): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+19 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "SchedulesView.vue"
Cohesion: 0.10
Nodes (20): allOptions(), busy, canManage, dashboards, editing, formOpen, loadError, loadOptions() (+12 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (53): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+45 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.09
Nodes (21): invoicePdfUrl(), backTo, busy, Confirm, confirmOpen, confirmText, downloadPdf(), first (+13 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.07
Nodes (28): pick(), metricOptions, ruleText(), options, transferOptions, ruleEnd(), setGoal(), roleName() (+20 more)

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

### Community 37 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 38 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.14
Nodes (20): drag, emit, grid, ordered, props, { run, failure, loading }, source, widgetFailure() (+12 more)

### Community 40 - "inventory/types.ts"
Cohesion: 0.47
Nodes (4): clientInventoryService, ClientNetwork, ClientRef, ClientSite

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.08
Nodes (41): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+33 more)

### Community 44 - "errorToast"
Cohesion: 0.24
Nodes (13): FiscalData, invoiceService, AvailableMonth, Invoice, InvoiceFilters, InvoiceItem, InvoiceItemKind, InvoiceReturn (+5 more)

### Community 45 - "session.ts"
Cohesion: 0.05
Nodes (46): numbers, PAGE_SIZE, pageCount(), pageNumbers(), NO_COMPARISON, sameComparison(), savedPeriod(), viewChanged() (+38 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): validCode(), busy, Check, checks, code, copied, copy(), done (+14 more)

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

### Community 51 - "errorText"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.05
Nodes (70): first, FunnelStep, props, LineSeries, change(), formatMetric(), toNumber(), pageSlice() (+62 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (20): Task 6: Web — construtor, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "api.ts"
Cohesion: 0.08
Nodes (21): pinia, theme, AccentId, CompanyRef, Me, Theme, accountService, authService (+13 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.08
Nodes (26): vue, vue-sonner, toasterTheme, box, failed, initial, props, busy (+18 more)

### Community 61 - "load"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.07
Nodes (36): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+28 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.09
Nodes (33): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+25 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (28): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+20 more)

### Community 69 - "fail"
Cohesion: 0.15
Nodes (17): profileOk(), formOk, auditChanged(), changeOwner(), fail(), load(), loadAudit(), managerSaved() (+9 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "clients/rules.ts"
Cohesion: 0.20
Nodes (11): NOTE_MAX, NOTE_MIN, profileBody(), profileInput(), STAFF_STATUSES, STATUS_TONE, ClientProfile, ClientProfileInput (+3 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.05
Nodes (55): locale, months, busy, canManage, changed, current, monthNames, months (+47 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (26): alerts, busy, canManage, clientNames, clients, confirmRemove(), editing, eventsOpen (+18 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.05
Nodes (51): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+43 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (19): baselineOptions, body, busy, checking, checks, clientOptions, conditionOptions, emit (+11 more)

### Community 79 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 80 - "Input.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "results/types.ts"
Cohesion: 0.08
Nodes (34): UserRef, busy, canManage, creating, keys, loadError, page, pages (+26 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.14
Nodes (20): stateLabel(), checklists, fail(), firstPage(), listCall, load(), loadError, loadMonths() (+12 more)

### Community 83 - "GAM"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.13
Nodes (16): latestCall(), clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 87 - "api.ts"
Cohesion: 0.24
Nodes (12): ApiError, baseHeaders(), companyChanged(), download(), readCookie(), request(), RequestOptions, SAFE (+4 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): RoleOption, assign(), canManage, canTeam, editable(), isMe(), load(), loaded (+15 more)

### Community 89 - "inviteTaken"
Cohesion: 0.08
Nodes (34): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+26 more)

### Community 90 - "GoogleCard.vue"
Cohesion: 0.29
Nodes (6): busy, confirm, load(), session, status, unlink()

### Community 91 - "CompanyIcon.vue"
Cohesion: 0.11
Nodes (21): amount, amountError, busy, chosen, description, emit, open, options (+13 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.08
Nodes (27): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+19 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.13
Nodes (17): open, apiMessage(), audience, AUDIENCES, busy, counts, load(), loadError (+9 more)

### Community 96 - "TeamTabs.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 97 - "Button.vue"
Cohesion: 0.07
Nodes (33): reka-ui, button, classes, Props, open, model, cn(), draft (+25 more)

### Community 98 - "events.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.15
Nodes (11): lang, STATUS_TONE, data, kpis, loadError, minus(), money(), month (+3 more)

### Community 101 - "Pagination.vue"
Cohesion: 0.10
Nodes (29): add(), emit, kind, kinds, metric, metrics, open, props (+21 more)

### Community 102 - "t"
Cohesion: 0.11
Nodes (18): t(), permsText(), drop(), pick(), run(), clientOptions, columnLabel(), delegationLabel() (+10 more)

### Community 103 - "sites/rules.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 104 - "networkName"
Cohesion: 0.10
Nodes (17): firstName, greeting, session, busy, canManage, description, editing, editingOpen (+9 more)

### Community 105 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 106 - "errorText"
Cohesion: 0.11
Nodes (23): errorText(), choose(), created(), load(), revoke(), load(), choose(), loadGoal() (+15 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.11
Nodes (16): first, last, page, props, canSeeChecklists, firstPage(), load(), loadError (+8 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.12
Nodes (15): Dashboard, DashboardInput, choices, description, emit, invalid, name, open (+7 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.10
Nodes (20): model, assignee, client, clientOptions, create(), description, domain, emit (+12 more)

### Community 112 - "vitest"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.14
Nodes (18): amount, amountError, busy, emit, open, props, reason, reasonTouched (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.07
Nodes (48): chosen, create(), emit, name, open, templates, dashboardService, templateService (+40 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.31
Nodes (12): alertDefinition(), alertForm, AlertGroup, alertInput(), alertState(), compares(), conditionText(), muteUntil() (+4 more)

### Community 117 - "useSession"
Cohesion: 0.07
Nodes (33): vue-router, pick(), route, router, session, RouteMeta, vue-router, open (+25 more)

### Community 118 - "AccountStatus.vue"
Cohesion: 0.09
Nodes (25): lucide-vue-next, company, error, hasSeats, lost, networks, router, session (+17 more)

### Community 119 - "vue"
Cohesion: 0.14
Nodes (16): Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme(), swatchColor(), THEMES (+8 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 122 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 123 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 124 - "alerts/types.ts"
Cohesion: 0.33
Nodes (9): Page, Alert, AlertCheck, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview (+1 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.14
Nodes (18): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+10 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 127 - "i18n.ts"
Cohesion: 0.06
Nodes (29): choose(), langs, session, auditActions, auditText(), chooseLang(), dict, errors (+21 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.14
Nodes (17): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+9 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (38): tn(), CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption (+30 more)

### Community 133 - "alerts/types.ts"
Cohesion: 0.12
Nodes (19): dot, formatDate(), td, th, previewDay, events, load(), loadError (+11 more)

### Community 134 - "Button.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 135 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 136 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 139 - "tasks/rules.ts"
Cohesion: 0.17
Nodes (12): COMMENT_MAX, COMMENT_MIN, DESCRIPTION_MAX, eventText(), STATUS_TONE, STATUSES, StatusFilter, statusLabel() (+4 more)

### Community 140 - "lang"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "ChecklistView.vue"
Cohesion: 0.09
Nodes (33): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, monthName(), NOTE_MAX, NOTE_MIN, previousMonth() (+25 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.05
Nodes (68): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, Key, PERIOD_PRESETS, Lang (+60 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 147 - "costs/service.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.10
Nodes (23): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+15 more)

### Community 149 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 150 - "events.ts"
Cohesion: 0.14
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated (+5 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 155 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `SchedulesView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `fail`, `MetricStylePopover.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `Input.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `inviteTaken`, `GoogleCard.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `Button.vue`, `events.ts`, `MfaView.vue`, `MyCommissionView.vue`, `Pagination.vue`, `sites/rules.ts`, `networkName`, `networkName`, `errorText`, `ClientSitesView.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `useSession`, `AccountStatus.vue`, `vue`, `FieldsPanel.vue`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `alerts/types.ts`, `Button.vue`, `costs/rules.ts`, `tasks/rules.ts`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `errorToast`, `loadMembers`?**
  _High betweenness centrality (0.211) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `SchedulesView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `api.ts`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `Input.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `inviteTaken`, `GoogleCard.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `Button.vue`, `MfaView.vue`, `MyCommissionView.vue`, `Pagination.vue`, `t`, `networkName`, `ClientSitesView.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `useSession`, `AccountStatus.vue`, `vue`, `drag.ts`, `FieldsPanel.vue`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `alerts/types.ts`, `Button.vue`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `SeatBar.vue`, `ChecklistItemsView.vue`, `events.ts`, `BarChart.vue`?**
  _High betweenness centrality (0.114) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `followOtherTab()` and `logout()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04934687953555878 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `SchedulesView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Review Focus`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `PeopleView.vue`, `t`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `fail`, `clients/rules.ts`, `FiscalDataCard.vue`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `Input.vue`, `results/types.ts`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `inviteTaken`, `GoogleCard.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `Button.vue`, `MfaView.vue`, `MyCommissionView.vue`, `t`, `networkName`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `useSession`, `AccountStatus.vue`, `vue`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `alerts/types.ts`, `Button.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`, `errorToast`?**
  _High betweenness centrality (0.096) - this node is a cross-community bridge._