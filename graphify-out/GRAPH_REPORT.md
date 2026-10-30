# Graph Report - avant-web  (2026-10-30)

## Corpus Check
- 217 files · ~124,762 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2220 nodes · 5494 edges · 110 communities (102 shown, 8 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 78 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b75c768e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- Button.vue
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
- HomeView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- reports/rules.ts
- ClientsView.vue
- RoleDialog.vue
- SiteDetailView.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- NewGroupDialog.vue
- Review Focus
- PageViewsView.vue
- GroupedBarChart.vue
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
- t
- .oxlintrc.json
- t
- avant-web
- load
- tsconfig.json
- session-start.sh
- ReportsView.vue
- AdjustmentDialog.vue
- GoogleCard.vue
- devDependencies
- api.ts
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- GoalBar.vue
- MfaCard.vue
- commission-components.test.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- ResetView.vue
- PeriodPicker.vue
- reports/rules.ts
- GAM
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- inviteTaken
- PasswordCard.vue
- CompanyIcon.vue
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- latest.ts
- vue-sonner
- events.ts
- MfaView.vue
- BarChart.vue
- Pagination.vue
- MyCommissionView.vue
- GoalsView.vue
- networkName
- sites/types.ts
- AccountManagerCard.vue
- contracts/service.ts
- @vitejs/plugin-vue
- cn

## God Nodes (most connected - your core abstractions)
1. `t()` - 220 edges
2. `errorText()` - 164 edges
3. `vue` - 91 edges
4. `ApiError` - 65 edges
5. `useSession` - 55 edges
6. `lucide-vue-next` - 47 edges
7. `vue-sonner` - 47 edges
8. `cn()` - 47 edges
9. `toNumber()` - 37 edges
10. `pick()` - 34 edges

## Surprising Connections (you probably didn't know these)
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (110 total, 8 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles (+36 more)

### Community 1 - "Button.vue"
Cohesion: 0.15
Nodes (13): lucide-vue-next, open, button, classes, Props, open, end(), ending (+5 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (45): SaveForm, builderState, toInput(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+37 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

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
Nodes (37): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+29 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (36): adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect, canManage (+28 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.11
Nodes (16): areaPaths, box, chartWidth, hovered, labelStep, linePath(), padding, plotHeight (+8 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.09
Nodes (24): barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric, compare (+16 more)

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
Cohesion: 0.15
Nodes (12): API first e chaves de API, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa, Empresa e equipe (+4 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority@^0.7.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4, reka-ui@^2.11.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.06
Nodes (35): pick(), options, transferOptions, ruleEnd(), setGoal(), busy, canEditGroone, canSeeInvites (+27 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), companyGoal, creating, editing, emit, formOpen (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.10
Nodes (20): dot, formatMonth(), CostKind, periodText(), clients, currency, load(), loadError (+12 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.14
Nodes (15): account(), clientId, emit, Group, GROUPS, Item, logout(), onInternal (+7 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (26): model, busy, catalog, chosen, copied, copyToken(), create(), DAYS (+18 more)

### Community 25 - "HomeView.vue"
Cohesion: 0.12
Nodes (12): props, seats, company, error, firstName, greeting, load(), lost (+4 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (34): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+26 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.09
Nodes (35): Task 3: Web — tipos, serviço e regras do construtor, Lang, ReportDraft, customMetricService, reportService, ChartType, CustomCatalogMetric, CustomMetric (+27 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (42): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+34 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.14
Nodes (13): busy, category, chipClass(), chosen, emit, groups, name, open (+5 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.14
Nodes (15): td, th, busy, canManage, deleteOpen, deleting, dialog, editing (+7 more)

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

### Community 37 - "NewGroupDialog.vue"
Cohesion: 0.09
Nodes (24): busy, create(), description, duplicate, emit, name, open, people (+16 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.09
Nodes (35): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY (+27 more)

### Community 40 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.09
Nodes (28): discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+20 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 45 - "session.ts"
Cohesion: 0.15
Nodes (15): pinia, choose(), langs, session, reconnectEvents(), chooseLang(), lang, Me (+7 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

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
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 51 - "errorText"
Cohesion: 0.19
Nodes (15): Task 6: Web — construtor, errorText(), choose(), load(), choose(), submit(), confirmRemove(), load() (+7 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.13
Nodes (14): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+6 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.13
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

### Community 57 - "t"
Cohesion: 0.09
Nodes (24): vue, auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo() (+16 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "load"
Cohesion: 0.33
Nodes (6): choose(), confirmEnd(), confirmRemove(), create(), load(), loadContracts()

### Community 65 - "ReportsView.vue"
Cohesion: 0.09
Nodes (23): exportUrl(), download(), busy, canManage, counts, download(), loadError, myId (+15 more)

### Community 66 - "AdjustmentDialog.vue"
Cohesion: 0.20
Nodes (13): amount, amountError, busy, emit, open, props, reason, reasonTouched (+5 more)

### Community 67 - "GoogleCard.vue"
Cohesion: 0.29
Nodes (6): busy, confirm, load(), session, status, unlink()

### Community 68 - "devDependencies"
Cohesion: 0.10
Nodes (26): clsx@^2.1.1, devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5 (+18 more)

### Community 69 - "api.ts"
Cohesion: 0.12
Nodes (28): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+20 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.27
Nodes (11): CompanyStatus, FiscalData, STAFF_STATUSES, STATUS_TONE, AuditEntry, Client, ClientDetail, ClientProfile (+3 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "GoalBar.vue"
Cohesion: 0.19
Nodes (13): mark, money(), percent, props, share, tone, start(), valid (+5 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.14
Nodes (12): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, client, issue, managerChange, perms (+4 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.08
Nodes (20): broken, hue, initials, props, allGroups, canManage, created(), creating (+12 more)

### Community 77 - "errorText"
Cohesion: 0.06
Nodes (30): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+22 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.08
Nodes (38): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, formatMetric(), toNumber(), amountText() (+30 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (18): formatDate(), busy, canManage, created(), creating, keys, load(), loadError (+10 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.18
Nodes (10): busy, error, mfa, mismatch, password, password2, route, router (+2 more)

### Community 81 - "PeriodPicker.vue"
Cohesion: 0.29
Nodes (6): compare, options, period, selected, Key, PERIOD_PRESETS

### Community 82 - "reports/rules.ts"
Cohesion: 0.12
Nodes (29): filterable, AXIS_CHARTS, canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart(), fromQuery() (+21 more)

### Community 83 - "GAM"
Cohesion: 0.40
Nodes (5): Atribuição de sites, GAM, Networks, Sites e ad units, network()

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.13
Nodes (17): ClientMember, ClientOption, clientId, clientOptions, clients, firstPage(), load(), loadError (+9 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.14
Nodes (11): model, choices, description, emit, invalid, name, open, props (+3 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (30): Localized, SiteScope, teamService, Member, MemberDetail, MembershipStatus, Permission, Role (+22 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.10
Nodes (16): ApiError, busy, current, emit, mismatch, password, password2, ready (+8 more)

### Community 91 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, FilterOption, LIMITS, newField, periods (+5 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 97 - "vue-sonner"
Cohesion: 0.12
Nodes (17): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+9 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (10): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+2 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.08
Nodes (23): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, safeNext(), busy, email, error (+15 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (17): formatDay(), STATUS_TONE, windowState, data, endText(), kpis, load(), loadError (+9 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+15 more)

### Community 104 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 105 - "sites/types.ts"
Cohesion: 0.26
Nodes (9): approval(), Tone, tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 107 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (21): profileBody(), profileInput(), openEdit(), busy, canChange, changeLines, emit, manager (+13 more)

### Community 113 - "cn"
Cohesion: 0.11
Nodes (18): reka-ui, props, up, pick(), route, router, session, open (+10 more)

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `Button.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `errorToast`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `load`, `ReportsView.vue`, `AdjustmentDialog.vue`, `GoogleCard.vue`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `PeriodPicker.vue`, `reports/rules.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `vue-sonner`, `MfaView.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `networkName`, `sites/types.ts`, `AccountManagerCard.vue`, `cn`?**
  _High betweenness centrality (0.118) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05180388529139685 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `t` to `StaffRolesView.vue`, `Button.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `reports/rules.ts`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `GroupedBarChart.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `ReportsView.vue`, `AdjustmentDialog.vue`, `GoogleCard.vue`, `devDependencies`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `PeriodPicker.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `CompanyIcon.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `vue-sonner`, `events.ts`, `MfaView.vue`, `BarChart.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `cn`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `Button.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `errorToast`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `t`, `load`, `ReportsView.vue`, `AdjustmentDialog.vue`, `GoogleCard.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `ResetView.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `PasswordCard.vue`, `vue-sonner`, `MfaView.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `cn`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.061170212765957445 - nodes in this community are weakly interconnected._