# Graph Report - avant-web  (2026-10-30)

## Corpus Check
- 232 files · ~135,659 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2423 nodes · 6111 edges · 112 communities (107 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 80 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5c565042`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- useSession
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
- reka-ui
- ApiKeyDialog.vue
- api.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- pick
- ClientsView.vue
- InvoiceView.vue
- api.ts
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- NewGroupDialog.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PageViewsView.vue
- HomeView.vue
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- PayeeDialog.vue
- @vitejs/plugin-vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- InvoiceDocument.vue
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- t
- avant-web
- errorText
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- ApiError
- devDependencies
- reports/rules.ts
- MetricStylePopover.vue
- AccountManagerCard.vue
- FiscalDataCard.vue
- CompanyGoalCard.vue
- sites/service.ts
- AdjustmentDialog.vue
- GroupsView.vue
- ContractsView.vue
- ReportChart.vue
- ApiKeysCard.vue
- ApiError
- Query
- SaveReportDialog.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- PasswordCard.vue
- Review Focus
- RolesView.vue
- RolePermissionsCard.vue
- session.ts
- ServiceLineDialog.vue
- reports/rules.ts
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- contracts/types.ts
- InvoicesView.vue
- errorToast
- events.ts
- Input.vue
- BarChart.vue
- Pagination.vue
- MyCommissionView.vue
- GoalsView.vue
- InvoiceServicesView.vue
- RecoveryCodes.vue
- networks/rules.ts
- AccountManagerCard.vue
- LoadError.vue
- tailwindcss
- TeamTabs.vue
- FieldsPanel.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 247 edges
2. `errorText()` - 187 edges
3. `vue` - 101 edges
4. `ApiError` - 72 edges
5. `useSession` - 60 edges
6. `vue-sonner` - 54 edges
7. `lucide-vue-next` - 52 edges
8. `cn()` - 49 edges
9. `toNumber()` - 46 edges
10. `formatMetric()` - 40 edges

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

## Communities (112 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "useSession"
Cohesion: 0.12
Nodes (18): vue-sonner, choose(), langs, session, chooseLang(), accent, session, busy (+10 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (61): builderState, canExport(), chartAllowed(), emptyDraft(), fittingChart(), fromQuery(), fromReport(), fromTemplate() (+53 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.06
Nodes (35): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+27 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (31): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+23 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.07
Nodes (31): duplicate, nameTaken(), adding, addMember(), busy, canManage, deleteGroup(), deleting (+23 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (34): busy, canTransfer, duplicate, emit, errors, form, open, props (+26 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (36): adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect, canManage (+28 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (34): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+26 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (26): countryName(), countryBars, barFormat(), byCountry, bySite, catalog, chartFormat(), chosen (+18 more)

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
Nodes (17): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+9 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.07
Nodes (32): box, failed, initial, props, assign(), busy, canEditGroone, canManageTeam (+24 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (15): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+7 more)

### Community 23 - "reka-ui"
Cohesion: 0.10
Nodes (23): lucide-vue-next, reka-ui, props, up, pick(), route, router, session (+15 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (23): UserRef, busy, catalog, chosen, copied, create(), DAYS, emit (+15 more)

### Community 25 - "api.ts"
Cohesion: 0.21
Nodes (15): api, Query, RequestOptions, SAFE, CompanyRef, Items, Page, costService (+7 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "pick"
Cohesion: 0.13
Nodes (19): pick(), t(), permsText(), end(), endOthers(), fail(), deleteDesc, options (+11 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (42): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+34 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (26): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirmOpen (+18 more)

### Community 31 - "api.ts"
Cohesion: 0.08
Nodes (27): approval(), Tone, tree(), AdUnit, busy, canAssign, canManage, errorToast() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.13
Nodes (14): open, busy, canManage, deleteOpen, deleting, dialog, editing, emit (+6 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.12
Nodes (21): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), currency (+13 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "NewGroupDialog.vue"
Cohesion: 0.13
Nodes (13): model, busy, create(), description, emit, name, open, people (+5 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.08
Nodes (35): change(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY, shortDay() (+27 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.13
Nodes (12): props, seats, company, error, firstName, greeting, load(), lost (+4 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.10
Nodes (22): toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows, kpis (+14 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "PayeeDialog.vue"
Cohesion: 0.13
Nodes (20): FiscalData, busy, complete, documentLabel, emit, form, open, props (+12 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (31): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+23 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "InvoiceDocument.vue"
Cohesion: 0.19
Nodes (15): formatDate(), countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, monthName(), payee (+7 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.13
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.19
Nodes (9): auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo(), index (+1 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "errorText"
Cohesion: 0.17
Nodes (17): errorText(), choose(), load(), load(), saveStart(), choose(), confirmEnd(), confirmRemove() (+9 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.08
Nodes (30): Task 6: Web — construtor, exportUrl(), download(), busy, canManage, counts, download(), duplicate() (+22 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "ApiError"
Cohesion: 0.12
Nodes (10): ApiError, readCookie(), request(), setUnauthorizedHandler(), url(), catalog, me, report (+2 more)

### Community 68 - "devDependencies"
Cohesion: 0.09
Nodes (27): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+19 more)

### Community 69 - "reports/rules.ts"
Cohesion: 0.10
Nodes (37): Task 3: Web — tipos, serviço e regras do construtor, vitest, Lang, AXIS_CHARTS, MAX_SERIES, ReportDraft, SOURCE_PREFERENCE, STACKABLE (+29 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (21): profileBody(), profileInput(), openEdit(), saveProfile(), busy, canChange, emit, manager (+13 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.20
Nodes (9): busy, complete, documentLabel, form, load(), loaded, options, save() (+1 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): locale, busy, canManage, changed, current, monthNames, months, saved (+23 more)

### Community 74 - "sites/service.ts"
Cohesion: 0.52
Nodes (5): siteService, Site, SiteDetail, SiteListItem, SiteMember

### Community 75 - "AdjustmentDialog.vue"
Cohesion: 0.09
Nodes (26): lang, amount, amountError, busy, emit, open, props, reason (+18 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.08
Nodes (24): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, allGroups, canManage (+16 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (29): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+21 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.07
Nodes (47): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, formatMetric(), toNumber(), amountText() (+39 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.13
Nodes (16): busy, canManage, created(), creating, keys, load(), loadError, page (+8 more)

### Community 80 - "ApiError"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 81 - "Query"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 82 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.12
Nodes (17): latestCall(), clientService, clientId, clientOptions, clients, firstPage(), load(), loadError (+9 more)

### Community 86 - "PasswordCard.vue"
Cohesion: 0.12
Nodes (15): busy, current, emit, mismatch, password, password2, ready, short (+7 more)

### Community 87 - "Review Focus"
Cohesion: 0.25
Nodes (7): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RolePermissionsCard.vue"
Cohesion: 0.08
Nodes (36): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+28 more)

### Community 90 - "session.ts"
Cohesion: 0.10
Nodes (21): pinia, vue, toasterTheme, reconnectEvents(), Accent, accentCss(), accentFor(), ACCENTS (+13 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (16): amount, amountError, busy, chosen, description, emit, open, options (+8 more)

### Community 92 - "reports/rules.ts"
Cohesion: 0.09
Nodes (23): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+15 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.07
Nodes (33): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+25 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.14
Nodes (13): td, th, invoiceService, InvoiceStatus, invoices, load(), loadError, month (+5 more)

### Community 97 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "Input.vue"
Cohesion: 0.08
Nodes (22): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, next (+14 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "MyCommissionView.vue"
Cohesion: 0.15
Nodes (14): STATUS_TONE, data, kpis, loadError, minus(), money(), month, months (+6 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.12
Nodes (22): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+14 more)

### Community 104 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 105 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 106 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 107 - "AccountManagerCard.vue"
Cohesion: 0.36
Nodes (10): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+2 more)

### Community 108 - "LoadError.vue"
Cohesion: 0.17
Nodes (11): ending, endingOthers, label(), load(), loadError, sessions, BROWSERS, device() (+3 more)

### Community 109 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 113 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 115 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `reka-ui`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `InvoiceView.vue`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PayeeDialog.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `ApiError`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `session.ts`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `errorToast`, `Input.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `InvoiceServicesView.vue`, `LoadError.vue`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `pick` to `StaffRolesView.vue`, `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `reka-ui`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PayeeDialog.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `InvoiceDocument.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `errorText`, `ReportsView.vue`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `session.ts`, `ServiceLineDialog.vue`, `reports/rules.ts`, `SidebarRail.vue`, `contracts/types.ts`, `InvoicesView.vue`, `errorToast`, `Input.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `InvoiceServicesView.vue`, `RecoveryCodes.vue`, `LoadError.vue`, `TeamTabs.vue`, `FieldsPanel.vue`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `useSession` be split into smaller, more focused modules?**
  _Cohesion score 0.12318840579710146 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `session.ts` to `StaffRolesView.vue`, `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `reka-ui`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `PayeeDialog.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `InvoiceDocument.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `ApiError`, `devDependencies`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `ServiceLineDialog.vue`, `reports/rules.ts`, `SidebarRail.vue`, `InvoicesView.vue`, `events.ts`, `Input.vue`, `BarChart.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `InvoiceServicesView.vue`, `RecoveryCodes.vue`, `LoadError.vue`, `TeamTabs.vue`, `FieldsPanel.vue`?**
  _High betweenness centrality (0.108) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._