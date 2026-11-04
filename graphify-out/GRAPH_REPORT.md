# Graph Report - avant-web  (2026-11-04)

## Corpus Check
- 325 files · ~192,627 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3562 nodes · 9416 edges · 163 communities (158 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `695dafb0`
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
- PageViewsView.vue
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
- PerformanceView.vue
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
- ReportChart.vue
- avant-web
- PeopleView.vue
- scripts
- api.ts
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
- ConfigPanel.vue
- MetricStylePopover.vue
- ReportThumb.vue
- FiscalDataCard.vue
- GoalsView.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- MetricStylePopover.vue
- Input.vue
- LoadError.vue
- reports/rules.ts
- GAM
- CurrencyCard.vue
- ClientTeamsView.vue
- CompanyGoalCard.vue
- api.ts
- RolesView.vue
- inviteTaken
- account/service.ts
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
- dashboards/rules.ts
- cn
- sites/rules.ts
- networkName
- networkName
- t
- ClientSitesView.vue
- useSession
- SaveViewDialog.vue
- NewTaskDialog.vue
- GroupedBarChart.vue
- table.ts
- toNumber
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- useSession
- ClientNetworksView.vue
- vue
- drag.ts
- checklists/rules.ts
- FieldsPanel.vue
- GamRunView.vue
- ApiKeysCard.vue
- gam_tools/types.ts
- PasswordCard.vue
- i18n.ts
- ChecklistNotesCard.vue
- pick
- tasks/types.ts
- AccountManagerCard.vue
- clients/service.ts
- DataTable.vue
- Button.vue
- vitest
- costs/rules.ts
- Pagination.vue
- ResetView.vue
- tasks/rules.ts
- lang
- ChecklistView.vue
- views/types.ts
- reports/rules.ts
- ChecklistItemDialog.vue
- Key
- AccountStatus.vue
- costs/service.ts
- ChecklistItemsView.vue
- errorToast
- events.ts
- BarChart.vue
- checklists/types.ts
- SaveViewDialog.vue
- ProfileImageCard.vue
- Input.vue
- commission-components.test.ts
- priorityLabel
- main.ts
- tabs.ts
- tailwindcss
- PageHeader.vue
- @vitejs/plugin-vue

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
10. `vitest` - 48 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (163 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): activeByRole(), personGoalAmount(), splitEvent(), active, allRoles(), busy, canManage, canRoles (+36 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.04
Nodes (58): profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal, candidates (+50 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState, toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+39 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.06
Nodes (38): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 7: Web — modal de métrica personalizada e "Minhas métricas" (+30 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (33): busy, canTransfer, duplicate, emit, errors, form, open, props (+25 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (38): inviteTaken(), busy, canEditCompany, canInvite, canManage, canRoles, company, dupe (+30 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.11
Nodes (16): areaPaths, box, chartWidth, hovered, labelStep, linePath(), padding, plotHeight (+8 more)

### Community 12 - "PageViewsView.vue"
Cohesion: 0.11
Nodes (27): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay(), dimensionText() (+19 more)

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
Cohesion: 0.12
Nodes (17): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4, reka-ui@^2.11.0, tailwind-merge@^3.7.0 (+9 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (32): box, failed, initial, props, assign(), busy, canEditGroone, canManageTeam (+24 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.11
Nodes (21): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+13 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 25 - "api"
Cohesion: 0.20
Nodes (15): api, Query, CompanyRef, Items, Page, costService, groupService, contractService (+7 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "SchedulesView.vue"
Cohesion: 0.09
Nodes (21): scheduleService, allOptions(), busy, canManage, dashboards, editing, formOpen, loadError (+13 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (50): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+42 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (24): invoicePdfUrl(), act(), backTo, busy, Confirm, confirmOpen, confirmText, downloadPdf() (+16 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, emit, names (+5 more)

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

### Community 37 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 38 - "Review Focus"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.07
Nodes (33): drag, emit, grid, props, { run, failure, loading }, source, widgetFailure(), draft (+25 more)

### Community 40 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (29): sameRange(), utcToday(), MetricValues, load(), section(), barFormat(), byCountry, bySite (+21 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.08
Nodes (39): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+31 more)

### Community 44 - "errorToast"
Cohesion: 0.24
Nodes (13): FiscalData, invoiceService, AvailableMonth, Invoice, InvoiceFilters, InvoiceItem, InvoiceItemKind, InvoiceReturn (+5 more)

### Community 45 - "session.ts"
Cohesion: 0.07
Nodes (37): sameComparison(), savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+29 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.09
Nodes (27): statusTone, validCode(), McmCandidate, Network, NetworkStatus, SyncRun, busy, Check (+19 more)

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
Cohesion: 0.15
Nodes (12): model, busy, complete, documentLabel, emit, form, open, options (+4 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "ReportChart.vue"
Cohesion: 0.12
Nodes (20): first, FunnelStep, props, LineSeries, description, empty, first, firstFormat (+12 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "api.ts"
Cohesion: 0.17
Nodes (8): pinia, Me, Theme, accountService, authService, InvitationPreview, LoginResult, Blank

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanyImageCard.vue"
Cohesion: 0.24
Nodes (10): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+2 more)

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
Cohesion: 0.12
Nodes (26): body, busy, form, hourOptions, monthDayOptions, open, Option, props (+18 more)

### Community 68 - "devDependencies"
Cohesion: 0.10
Nodes (25): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+17 more)

### Community 69 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (20): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+12 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.22
Nodes (15): current, sortOptions, current, rows, sortOptions, current, current, current (+7 more)

### Community 71 - "ReportThumb.vue"
Cohesion: 0.11
Nodes (20): title, metrics, metrics, format, formatted(), highest, label, metricKey (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "errorText"
Cohesion: 0.05
Nodes (46): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+38 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.12
Nodes (16): formatDate(), baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit (+8 more)

### Community 79 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 80 - "Input.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "LoadError.vue"
Cohesion: 0.10
Nodes (24): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+16 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "GAM"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (16): clientService, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (20): busy, canManage, changed, current, monthNames, months, saved, session (+12 more)

### Community 87 - "api.ts"
Cohesion: 0.21
Nodes (14): ApiError, baseHeaders(), companyChanged(), download(), readCookie(), request(), RequestOptions, SAFE (+6 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "inviteTaken"
Cohesion: 0.09
Nodes (33): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+25 more)

### Community 90 - "account/service.ts"
Cohesion: 0.21
Nodes (13): UserRef, busy, confirm, load(), session, status, unlink(), ApiKey (+5 more)

### Community 91 - "CompanyIcon.vue"
Cohesion: 0.11
Nodes (21): amount, amountError, busy, chosen, description, emit, open, options (+13 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.14
Nodes (18): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 96 - "TeamTabs.vue"
Cohesion: 0.09
Nodes (22): applyView(), applyView(), applyView(), columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load() (+14 more)

### Community 97 - "Button.vue"
Cohesion: 0.14
Nodes (16): lucide-vue-next, reka-ui, pick(), route, router, session, button, classes (+8 more)

### Community 98 - "events.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState, data, endText(), kpis, load(), loadError (+10 more)

### Community 101 - "dashboards/rules.ts"
Cohesion: 0.06
Nodes (60): add(), emit, kind, kinds, metric, metrics, open, props (+52 more)

### Community 102 - "cn"
Cohesion: 0.10
Nodes (18): props, up, panelItem(), railItem(), cn(), kindClass(), tab(), choice() (+10 more)

### Community 103 - "sites/rules.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 104 - "networkName"
Cohesion: 0.11
Nodes (16): open, open, busy, canManage, description, editing, editingOpen, loadError (+8 more)

### Community 105 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 106 - "t"
Cohesion: 0.10
Nodes (32): errorText(), t(), load(), saveStart(), clientOptions, columnLabel(), confirmEnd(), confirmRemove() (+24 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 108 - "useSession"
Cohesion: 0.17
Nodes (16): choose(), langs, session, chooseLang(), linkActive(), NAV_GROUPS, NavItem, SIBLINGS (+8 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 112 - "table.ts"
Cohesion: 0.15
Nodes (16): Task 4: Web — cores das séries e gráficos do construtor, pageSlice(), td, th, dates, monthName(), payee, PAYER (+8 more)

### Community 113 - "toNumber"
Cohesion: 0.19
Nodes (19): change(), formatMetric(), toNumber(), metricText(), valueText(), money(), yearTotal(), money() (+11 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (42): dashboardService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), Dashboard (+34 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.20
Nodes (16): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), alertForm, AlertGroup (+8 more)

### Community 117 - "useSession"
Cohesion: 0.09
Nodes (20): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, next (+12 more)

### Community 118 - "ClientNetworksView.vue"
Cohesion: 0.20
Nodes (11): clientInventoryService, firstPage(), load(), loadError, networks, networksCall, page, pages (+3 more)

### Community 119 - "vue"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+14 more)

### Community 120 - "drag.ts"
Cohesion: 0.57
Nodes (8): cellSize(), useWidgetDrag(), begin(), cancel(), escape(), finish(), follow(), stop()

### Community 121 - "checklists/rules.ts"
Cohesion: 0.14
Nodes (16): desc, dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, languageName(), NOTE_MAX, NOTE_MIN (+8 more)

### Community 122 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 123 - "GamRunView.vue"
Cohesion: 0.15
Nodes (13): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), done, load() (+5 more)

### Community 124 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.14
Nodes (18): gamToolService, GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun (+10 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.12
Nodes (15): busy, current, emit, mismatch, password, password2, ready, short (+7 more)

### Community 127 - "i18n.ts"
Cohesion: 0.17
Nodes (10): vue, auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo() (+2 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.16
Nodes (14): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+6 more)

### Community 129 - "pick"
Cohesion: 0.14
Nodes (14): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+6 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (27): tn(), emptyProfile(), profileBody(), profileInput(), closeForm(), create(), openEdit(), busy (+19 more)

### Community 132 - "clients/service.ts"
Cohesion: 0.30
Nodes (12): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+4 more)

### Community 133 - "DataTable.vue"
Cohesion: 0.15
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 134 - "Button.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 135 - "vitest"
Cohesion: 0.09
Nodes (19): @vue/test-utils@^2.5.1, vitest, @vue/test-utils, CustomMetricCheck, MetricCatalog, SavedReport, catalog, check (+11 more)

### Community 136 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 137 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 138 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 140 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): ROW_TONE, rowStateLabel(), splitRows(), checklistService, checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "views/types.ts"
Cohesion: 0.24
Nodes (10): viewService, FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewDefinition, ViewFilterSpec (+2 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.06
Nodes (66): Task 3: Web — tipos, serviço e regras do construtor, Lang, loadDraft(), Widget, filterable, AXIS_CHARTS, axisSplit(), canExport() (+58 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "Key"
Cohesion: 0.20
Nodes (9): compare, options, period, selected, Key, PERIOD_PRESETS, emit, period (+1 more)

### Community 146 - "AccountStatus.vue"
Cohesion: 0.14
Nodes (14): props, seats, companyService, CompanyDetail, CompanyFiscal, company, error, hasSeats (+6 more)

### Community 147 - "costs/service.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (11): dot, checklistItemService, canManage, dialogOpen, editing, items, load(), loadError (+3 more)

### Community 149 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 150 - "events.ts"
Cohesion: 0.14
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated (+5 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "checklists/types.ts"
Cohesion: 0.31
Nodes (9): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistProgress, CheckOutcome, SiteChecklist (+1 more)

### Community 153 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 154 - "ProfileImageCard.vue"
Cohesion: 0.24
Nodes (9): busy, drop(), imageUrl, input, name, pick(), problem, run() (+1 more)

### Community 155 - "Input.vue"
Cohesion: 0.25
Nodes (7): model, chosen, create(), emit, name, open, templates

### Community 156 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 157 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 158 - "main.ts"
Cohesion: 0.29
Nodes (5): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, router

### Community 159 - "tabs.ts"
Cohesion: 0.38
Nodes (4): announceCompany(), CompanyMessage, onCompanyAnnounced(), opened

### Community 160 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 161 - "PageHeader.vue"
Cohesion: 0.40
Nodes (3): firstName, greeting, session

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageViewsView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `SchedulesView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `PerformanceView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `ReportChart.vue`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `ConfigPanel.vue`, `MetricStylePopover.vue`, `ReportThumb.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `Input.vue`, `LoadError.vue`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `account/service.ts`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `Button.vue`, `events.ts`, `MfaView.vue`, `MyCommissionView.vue`, `dashboards/rules.ts`, `cn`, `sites/rules.ts`, `networkName`, `networkName`, `ClientSitesView.vue`, `useSession`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `table.ts`, `toNumber`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `useSession`, `ClientNetworksView.vue`, `vue`, `checklists/rules.ts`, `FieldsPanel.vue`, `GamRunView.vue`, `ApiKeysCard.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `pick`, `AccountManagerCard.vue`, `DataTable.vue`, `Button.vue`, `costs/rules.ts`, `Pagination.vue`, `ResetView.vue`, `tasks/rules.ts`, `ChecklistView.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `Key`, `AccountStatus.vue`, `ChecklistItemsView.vue`, `errorToast`, `SaveViewDialog.vue`, `ProfileImageCard.vue`, `Input.vue`, `priorityLabel`, `PageHeader.vue`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05053191489361702 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PageViewsView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `SchedulesView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `PerformanceView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `ReportChart.vue`, `PeopleView.vue`, `api.ts`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `devDependencies`, `ConfigPanel.vue`, `ReportThumb.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `MfaCard.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `MetricStylePopover.vue`, `Input.vue`, `LoadError.vue`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `inviteTaken`, `account/service.ts`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `Button.vue`, `MfaView.vue`, `MyCommissionView.vue`, `dashboards/rules.ts`, `cn`, `networkName`, `ClientSitesView.vue`, `useSession`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `GroupedBarChart.vue`, `table.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `useSession`, `ClientNetworksView.vue`, `vue`, `FieldsPanel.vue`, `GamRunView.vue`, `ApiKeysCard.vue`, `PasswordCard.vue`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `DataTable.vue`, `Button.vue`, `vitest`, `Pagination.vue`, `ResetView.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `Key`, `AccountStatus.vue`, `ChecklistItemsView.vue`, `events.ts`, `BarChart.vue`, `SaveViewDialog.vue`, `ProfileImageCard.vue`, `Input.vue`, `main.ts`, `PageHeader.vue`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `followOtherTab()` and `logout()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PageViewsView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `SchedulesView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Review Focus`, `PageViewsView.vue`, `PerformanceView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `PeopleView.vue`, `CompanyImageCard.vue`, `load`, `ReportsView.vue`, `costs/rules.ts`, `GoogleCard.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `commission-components.test.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `Input.vue`, `LoadError.vue`, `reports/rules.ts`, `GAM`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `api.ts`, `RolesView.vue`, `inviteTaken`, `account/service.ts`, `CompanyIcon.vue`, `ConfigPanel.vue`, `networks/service.ts`, `tailwindcss`, `TeamTabs.vue`, `Button.vue`, `MfaView.vue`, `MyCommissionView.vue`, `networkName`, `ClientSitesView.vue`, `useSession`, `NewTaskDialog.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `useSession`, `ClientNetworksView.vue`, `vue`, `GamRunView.vue`, `ApiKeysCard.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `pick`, `AccountManagerCard.vue`, `DataTable.vue`, `Button.vue`, `ResetView.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `AccountStatus.vue`, `ChecklistItemsView.vue`, `errorToast`, `ProfileImageCard.vue`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._