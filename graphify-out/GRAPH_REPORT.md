# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 197 files · ~109,500 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 1903 nodes · 4611 edges · 96 communities (90 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 68 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe5ecb80`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- api.ts
- vue-sonner
- ClientView.vue
- ReportBuilderView.vue
- MemberView.vue
- Avant: models do MVP
- CustomMetricDialog.vue
- GroupView.vue
- reports/rules.ts
- TeamView.vue
- SitesView.vue
- LineChart.vue
- PerformanceView.vue
- Design System: Avant
- compilerOptions
- vue
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- dependencies
- StaffView.vue
- GoalsView.vue
- steps
- ClientsResultsView.vue
- SidebarNav.vue
- ApiKeyDialog.vue
- sites/service.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- reports/types.ts
- ClientsView.vue
- RoleDialog.vue
- SiteDetailView.vue
- RolesView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- NewGroupDialog.vue
- Review Focus
- PageViewsView.vue
- t
- vue-router
- compilerOptions
- InviteView.vue
- cn
- lib/types.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- reka-ui
- errorText
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- LoadError.vue
- avant-web
- ProfileImageCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- tailwindcss
- session.ts
- devDependencies
- @vitejs/plugin-vue
- MetricStylePopover.vue
- ClientTeamsView.vue
- FiscalDataCard.vue
- package.json
- MfaCard.vue
- contracts/rules.ts
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- router.ts
- useSession
- ConfigPanel.vue
- t
- CurrencyCard.vue
- HomeView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- @vue/test-utils
- RecoveryCodes.vue
- PasswordCard.vue
- costs/rules.ts
- costs/service.ts
- networks/service.ts
- FieldsPanel.vue
- TeamTabs.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 192 edges
2. `errorText()` - 139 edges
3. `vue` - 84 edges
4. `ApiError` - 58 edges
5. `useSession` - 52 edges
6. `lucide-vue-next` - 42 edges
7. `vue-sonner` - 42 edges
8. `cn()` - 42 edges
9. `toNumber()` - 32 edges
10. `pick()` - 28 edges

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

## Communities (96 total, 6 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.13
Nodes (12): ApiError, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url(), catalog (+4 more)

### Community 1 - "vue-sonner"
Cohesion: 0.11
Nodes (20): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+12 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (51): profileInput(), audit, auditBusy, candidates, canManage, canOwner, changed, changeOwner() (+43 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (50): builderState, toInput(), toQuery(), withDimensions(), exportUrl(), apiMessage(), askRemoveMetric(), busy (+42 more)

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

### Community 8 - "reports/rules.ts"
Cohesion: 0.11
Nodes (28): filterable, AXIS_CHARTS, canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart(), fromQuery() (+20 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.06
Nodes (29): busy, canEditCompany, canInvite, canManage, canRoles, company, dupe, email (+21 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.08
Nodes (26): networkName(), loadExtras(), adding, addSite(), archived, assignedOnly, canAssign, canConnect (+18 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (26): countryName(), countryBars, barFormat(), byCountry, bySite, catalog, chartFormat(), chosen (+18 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "vue"
Cohesion: 0.06
Nodes (28): vue, allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit() (+20 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.11
Nodes (17): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+9 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, qrcode@1.5.4, reka-ui@^2.11.0 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (22): pick(), staffService, busy, canEditGroone, email, emailOk, invite(), invites (+14 more)

### Community 20 - "GoalsView.vue"
Cohesion: 0.05
Nodes (55): model, mark, money(), percent, props, share, tone, busy (+47 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.16
Nodes (13): formatMonth(), periodText(), clients, currency, load(), loadError, month, monthOptions (+5 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.16
Nodes (13): account(), clientId, emit, Group, GROUPS, onInternal, openLink(), ready (+5 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "sites/service.ts"
Cohesion: 0.23
Nodes (11): Query, approval(), Tone, tree(), siteService, AdUnit, Site, SiteDetail (+3 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): busy, byMonth(), canManage, check, checkFormula, confirmRemove(), costs, currencies (+15 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/types.ts"
Cohesion: 0.13
Nodes (28): Task 3: Web — tipos, serviço e regras do construtor, vitest, Lang, ReportDraft, ChartType, CustomCatalogMetric, CustomMetric, CustomMetricCheck (+20 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.07
Nodes (33): emptyProfile(), profileBody(), profileOk(), adding, busy, canceling, cancelInvite(), cancelOpen (+25 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.14
Nodes (13): busy, category, chipClass(), chosen, emit, groups, name, open (+5 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 32 - "RolesView.vue"
Cohesion: 0.08
Nodes (33): Localized, SiteScope, busy, canManage, deleteOpen, deleting, dialog, editing (+25 more)

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
Cohesion: 0.10
Nodes (19): broken, hue, initials, props, busy, create(), description, duplicate (+11 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.08
Nodes (35): @vueuse/core@^15.0.0, @vueuse/core, change(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour() (+27 more)

### Community 40 - "t"
Cohesion: 0.14
Nodes (14): box, failed, initial, props, busy, drop(), input, pick() (+6 more)

### Community 41 - "vue-router"
Cohesion: 0.10
Nodes (20): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, next (+12 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "cn"
Cohesion: 0.13
Nodes (15): props, up, Item, button, classes, Props, model, cn() (+7 more)

### Community 45 - "lib/types.ts"
Cohesion: 0.15
Nodes (18): api, CompanyRef, Items, UserRef, busy, confirm, load(), session (+10 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.07
Nodes (33): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+25 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.11
Nodes (20): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+12 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "reka-ui"
Cohesion: 0.24
Nodes (7): lucide-vue-next, reka-ui, route, router, session, open, open

### Community 51 - "errorText"
Cohesion: 0.20
Nodes (15): Task 6: Web — construtor, pick(), errorText(), load(), start(), choose(), confirmEnd(), confirmRemove() (+7 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.14
Nodes (12): model, ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+4 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.16
Nodes (14): peopleService, Action, busy, confirm(), enable(), fail(), loadError, open (+6 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.16
Nodes (10): open, auditActions, auditText(), dict, errors, fallbackError, fill(), formatAgo() (+2 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "LoadError.vue"
Cohesion: 0.22
Nodes (9): formatDate(), end(), ending, endingOthers, endOthers(), fail(), load(), loadError (+1 more)

### Community 61 - "ProfileImageCard.vue"
Cohesion: 0.24
Nodes (9): busy, drop(), imageUrl, input, name, pick(), problem, run() (+1 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.10
Nodes (19): reportService, busy, canManage, counts, load(), loadError, myId, ownerName() (+11 more)

### Community 66 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 67 - "session.ts"
Cohesion: 0.21
Nodes (8): pinia@^4.1.0, pinia, Me, accountService, authService, InvitationPreview, LoginResult, Blank

### Community 68 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, jsdom@^30.1.3, oxlint@^1.89.0, @types/qrcode@1.5.5, typescript@~6.0.3, vite@^8.3.5, vitest@^5.0.5, vue-tsc@^3.3.13 (+6 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (20): CompanyStatus, FiscalData, STAFF_STATUSES, STATUS_TONE, clientService, AuditEntry, Client, ClientDetail (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "package.json"
Cohesion: 0.17
Nodes (11): autoprefixer@^10.6.1, postcss@^8.5.31, @types/node@^24.19.2, name, packageManager, private, type, version (+3 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "contracts/rules.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.09
Nodes (21): freeMembers(), groupOf(), groupService, Group, GroupInput, GroupMember, GroupStatus, canManage (+13 more)

### Community 77 - "errorText"
Cohesion: 0.07
Nodes (26): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+18 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.11
Nodes (33): Task 4: Web — cores das séries e gráficos do construtor, formatMetric(), toNumber(), amountText(), yearTotal(), money(), money(), preview (+25 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.15
Nodes (15): busy, canManage, created(), creating, keys, load(), loadError, permsText() (+7 more)

### Community 80 - "router.ts"
Cohesion: 0.08
Nodes (18): busy, email, error, sent, submit(), busy, error, mfa (+10 more)

### Community 81 - "useSession"
Cohesion: 0.32
Nodes (7): choose(), langs, session, logout(), chooseLang(), lang, useSession

### Community 82 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (19): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+11 more)

### Community 83 - "t"
Cohesion: 0.39
Nodes (8): t(), description, cancel(), errorToast(), patchMember(), removeMember(), resend(), sendInvite()

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "HomeView.vue"
Cohesion: 0.13
Nodes (13): dot, td, th, company, error, firstName, greeting, load() (+5 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 89 - "RecoveryCodes.vue"
Cohesion: 0.15
Nodes (16): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+8 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 92 - "costs/service.ts"
Cohesion: 0.25
Nodes (8): costService, Cost, CostInput, CostKind, FormulaCheck, CostLine, MonthResult, ResultTotals

### Community 93 - "networks/service.ts"
Cohesion: 0.33
Nodes (6): statusTone, networkService, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 95 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `vue` to `api.ts`, `vue-sonner`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `dependencies`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `cn`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `session.ts`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `package.json`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `ConfigPanel.vue`, `CurrencyCard.vue`, `HomeView.vue`, `SaveReportDialog.vue`, `RecoveryCodes.vue`, `PasswordCard.vue`, `FieldsPanel.vue`, `TeamTabs.vue`?**
  _High betweenness centrality (0.139) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `api.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.12857142857142856 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `vue-sonner`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `reports/rules.ts`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `sites/service.ts`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `cn`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `errorText`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `contracts/rules.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `useSession`, `ConfigPanel.vue`, `CurrencyCard.vue`, `HomeView.vue`, `SaveReportDialog.vue`, `RecoveryCodes.vue`, `PasswordCard.vue`, `FieldsPanel.vue`, `TeamTabs.vue`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Should `vue-sonner` be split into smaller, more focused modules?**
  _Cohesion score 0.10582010582010581 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `vue-sonner`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalsView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `lib/types.ts`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `router.ts`, `useSession`, `t`, `CurrencyCard.vue`, `HomeView.vue`, `PasswordCard.vue`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04862119013062409 - nodes in this community are weakly interconnected._