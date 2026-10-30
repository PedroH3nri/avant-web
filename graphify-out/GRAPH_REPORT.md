# Graph Report - web-meta  (2026-10-29)

## Corpus Check
- 216 files · ~122,964 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 10 file(s) not represented in the graph (top: (none) 7, .conf 1, .webmanifest 1)

## Summary
- 2195 nodes · 5428 edges · 114 communities (108 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 78 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `43214748`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- lib/types.ts
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
- StaffView.vue
- GoalTemplatesDialog.vue
- steps
- ClientsResultsView.vue
- useSession
- ApiKeyDialog.vue
- RecoveryCodes.vue
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
- utils.ts
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- t
- vitest
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- ProfileImageCard.vue
- NativeSelect.vue
- HomeView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- CompanyImageCard.vue
- avant-web
- errorText
- tsconfig.json
- session-start.sh
- ReportsView.vue
- account/rules.ts
- report-builder.test.ts
- package.json
- api.ts
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- GoalBar.vue
- MfaCard.vue
- CompanyIcon.vue
- GroupsView.vue
- ContractsView.vue
- ReportChart.vue
- ApiKeysCard.vue
- router.ts
- GroupedBarChart.vue
- report-rules.test.ts
- results/types.ts
- CurrencyCard.vue
- ClientTeamsView.vue
- Input.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- pick
- PasswordCard.vue
- costs/rules.ts
- ConfigPanel.vue
- networks/rules.ts
- FieldsPanel.vue
- tailwindcss
- Button.vue
- session.ts
- events.ts
- LoginView.vue
- BarChart.vue
- Pagination.vue
- toNumber
- GoalsView.vue
- SessionsCard.vue
- sites/service.ts
- networkName
- AccountManagerCard.vue
- sites/rules.ts
- pickSource
- AdjustmentDialog.vue
- FakeSource
- @vitejs/plugin-vue
- cn

## God Nodes (most connected - your core abstractions)
1. `t()` - 219 edges
2. `errorText()` - 162 edges
3. `vue` - 91 edges
4. `ApiError` - 64 edges
5. `useSession` - 55 edges
6. `lucide-vue-next` - 47 edges
7. `vue-sonner` - 47 edges
8. `cn()` - 47 edges
9. `toNumber()` - 39 edges
10. `pick()` - 34 edges

## Surprising Connections (you probably didn't know these)
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (114 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.06
Nodes (38): splitEvent(), allRoles(), busy, canManage, canRoles, countRules(), counts, current (+30 more)

### Community 1 - "lib/types.ts"
Cohesion: 0.17
Nodes (15): CompanyRef, UserRef, busy, confirm, load(), session, status, unlink() (+7 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): profileOk(), formOk, audit, auditPage, auditPages, auditTotal, candidates, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (44): SaveForm, toQuery(), withDimensions(), withMetrics(), apiMessage(), askRemoveMetric(), busy, canManage (+36 more)

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
Nodes (29): adding, addMember(), busy, canManage, deleteGroup(), deleting, errorToast(), free (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.13
Nodes (28): busy, canTransfer, duplicate, emit, errors, form, open, props (+20 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (40): inviteTaken(), busy, canEditCompany, canInvite, canManage, canRoles, company, dupe (+32 more)

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
Cohesion: 0.11
Nodes (17): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+9 more)

### Community 18 - "@vueuse/core"
Cohesion: 0.12
Nodes (17): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0 (+9 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.10
Nodes (22): busy, canEditGroone, canSeeInvites, email, emailOk, invite(), invitePage, invitePages (+14 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (25): busy, changed(), close(), companyGoal, creating, editing, emit, formOpen (+17 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.12
Nodes (15): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+7 more)

### Community 23 - "useSession"
Cohesion: 0.14
Nodes (16): account(), clientId, emit, Group, GROUPS, Item, logout(), onInternal (+8 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 25 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.11
Nodes (36): Task 3: Web — tipos, serviço e regras do construtor, Lang, AXIS_CHARTS, MAX_SERIES, ReportDraft, SOURCE_PREFERENCE, STACKABLE, TIME_DIMENSIONS (+28 more)

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
Cohesion: 0.13
Nodes (16): td, th, dimensions, props, busy, canManage, deleteOpen, deleting (+8 more)

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
Nodes (23): busy, create(), description, duplicate, emit, name, open, people (+15 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.11
Nodes (30): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY (+22 more)

### Community 40 - "utils.ts"
Cohesion: 0.24
Nodes (6): reka-ui, pick(), route, router, session, open

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (30): STATUS_TONE, toIssue(), data, load(), loadError, month, months, openWindows (+22 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.07
Nodes (29): Me, authService, InvitationPreview, LoginResult, busy, email, error, sent (+21 more)

### Community 44 - "t"
Cohesion: 0.18
Nodes (15): open, t(), deleteDesc, options, transferOptions, cancel(), errorToast(), loadInvites() (+7 more)

### Community 45 - "vitest"
Cohesion: 0.18
Nodes (7): pinia@^4.1.0, vitest@^5.0.5, @vue/test-utils@^2.5.1, pinia, vitest, @vue/test-utils, Blank

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (24): busy, canConnect, canDisconnect, canSync, disconnecting, disconnectOpen, history, historyCall (+16 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 51 - "ProfileImageCard.vue"
Cohesion: 0.15
Nodes (13): broken, hue, initials, props, busy, drop(), imageUrl, input (+5 more)

### Community 52 - "NativeSelect.vue"
Cohesion: 0.14
Nodes (12): model, ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+4 more)

### Community 53 - "HomeView.vue"
Cohesion: 0.08
Nodes (26): props, seats, companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone (+18 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (20): latestCall(), Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.12
Nodes (17): vue, props, up, choose(), langs, session, auditActions, auditText() (+9 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanyImageCard.vue"
Cohesion: 0.24
Nodes (10): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+2 more)

### Community 61 - "errorText"
Cohesion: 0.24
Nodes (12): errorText(), load(), issue(), load(), saveStart(), choose(), confirmEnd(), confirmRemove() (+4 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.08
Nodes (30): Task 6: Web — construtor, exportUrl(), download(), busy, canManage, counts, download(), duplicate() (+22 more)

### Community 66 - "account/rules.ts"
Cohesion: 0.31
Nodes (6): label(), BROWSERS, device(), first(), keyState, SYSTEMS

### Community 67 - "report-builder.test.ts"
Cohesion: 0.13
Nodes (10): CustomMetricCheck, MetricCatalog, ReportResult, catalog, check, catalog, me, report (+2 more)

### Community 68 - "package.json"
Cohesion: 0.11
Nodes (24): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+16 more)

### Community 69 - "api.ts"
Cohesion: 0.15
Nodes (18): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler() (+10 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.16
Nodes (16): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+8 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.23
Nodes (14): CompanyStatus, FiscalData, STAFF_STATUSES, STATUS_TONE, clientService, AuditEntry, Client, ClientDetail (+6 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "GoalBar.vue"
Cohesion: 0.26
Nodes (10): amountError, mark, percent, props, tone, goalTone(), paceMark(), parseAmount() (+2 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.12
Nodes (18): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+10 more)

### Community 75 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (17): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+9 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (29): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+21 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.09
Nodes (27): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, LineSeries, description, empty, first (+19 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "router.ts"
Cohesion: 0.10
Nodes (17): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, busy, error, mfa, mismatch (+9 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 82 - "report-rules.test.ts"
Cohesion: 0.22
Nodes (14): builderState, canExport(), emptyDraft(), fromQuery(), fromReport(), fromTemplate(), toInput(), load() (+6 more)

### Community 83 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "Input.vue"
Cohesion: 0.14
Nodes (11): model, choices, description, emit, invalid, name, open, props (+3 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (29): Localized, SiteScope, Member, MemberDetail, MembershipStatus, Permission, Role, RoleOption (+21 more)

### Community 89 - "pick"
Cohesion: 0.17
Nodes (12): pick(), ruleEnd(), setGoal(), roleName(), roleOptions, names, permName(), permOptions (+4 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.10
Nodes (21): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+13 more)

### Community 93 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 96 - "Button.vue"
Cohesion: 0.36
Nodes (5): lucide-vue-next, button, classes, Props, open

### Community 97 - "session.ts"
Cohesion: 0.11
Nodes (21): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+13 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "LoginView.vue"
Cohesion: 0.11
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "toNumber"
Cohesion: 0.13
Nodes (21): formatMetric(), toNumber(), amountText(), kpis, minus(), money(), kpis, minus() (+13 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (24): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+16 more)

### Community 104 - "SessionsCard.vue"
Cohesion: 0.28
Nodes (8): formatDate(), end(), ending, endingOthers, endOthers(), fail(), loadError, sessions

### Community 105 - "sites/service.ts"
Cohesion: 0.52
Nodes (5): siteService, Site, SiteDetail, SiteListItem, SiteMember

### Community 106 - "networkName"
Cohesion: 0.29
Nodes (8): networkName(), disconnect(), errorToast(), replace(), sync(), loadExtras(), netName(), networkOptions

### Community 107 - "AccountManagerCard.vue"
Cohesion: 0.12
Nodes (18): profileBody(), profileInput(), openEdit(), busy, canChange, change, changeText, emit (+10 more)

### Community 108 - "sites/rules.ts"
Cohesion: 0.36
Nodes (5): approval(), Tone, tree(), AdUnit, rows

### Community 109 - "pickSource"
Cohesion: 0.33
Nodes (6): filterable, dimensionSources(), metricSources(), orderOf(), pickSource(), savedQuery()

### Community 110 - "AdjustmentDialog.vue"
Cohesion: 0.15
Nodes (17): amount, busy, emit, open, props, reason, save(), valid (+9 more)

### Community 113 - "cn"
Cohesion: 0.12
Nodes (15): cn(), kindClass(), tabClass(), choice(), tabClass(), dot(), itemClass(), valueClass() (+7 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `lib/types.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `useSession`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `utils.ts`, `TeamCommissionsView.vue`, `InviteView.vue`, `t`, `ConnectView.vue`, `NetworksView.vue`, `ProfileImageCard.vue`, `HomeView.vue`, `PeopleView.vue`, `i18n.ts`, `CompanyImageCard.vue`, `ReportsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `router.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `pick`, `PasswordCard.vue`, `session.ts`, `LoginView.vue`, `GoalsView.vue`, `SessionsCard.vue`, `networkName`, `AccountManagerCard.vue`, `AdjustmentDialog.vue`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05731707317073171 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `StaffRolesView.vue`, `lib/types.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `useSession`, `ApiKeyDialog.vue`, `RecoveryCodes.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `utils.ts`, `TeamCommissionsView.vue`, `InviteView.vue`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `ProfileImageCard.vue`, `NativeSelect.vue`, `HomeView.vue`, `PeopleView.vue`, `i18n.ts`, `CompanyImageCard.vue`, `errorText`, `ReportsView.vue`, `account/rules.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `report-rules.test.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `Input.vue`, `RolesView.vue`, `pick`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `Button.vue`, `session.ts`, `LoginView.vue`, `Pagination.vue`, `toNumber`, `GoalsView.vue`, `SessionsCard.vue`, `networkName`, `AccountManagerCard.vue`, `sites/rules.ts`, `AdjustmentDialog.vue`, `cn`?**
  _High betweenness centrality (0.119) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.046992481203007516 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `lib/types.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `useSession`, `ApiKeyDialog.vue`, `RecoveryCodes.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `vitest`, `ConnectView.vue`, `NetworksView.vue`, `ProfileImageCard.vue`, `NativeSelect.vue`, `HomeView.vue`, `PeopleView.vue`, `CompanyImageCard.vue`, `ReportsView.vue`, `report-builder.test.ts`, `package.json`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `CompanyIcon.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `GroupedBarChart.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `Input.vue`, `RolesView.vue`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `Button.vue`, `session.ts`, `events.ts`, `LoginView.vue`, `BarChart.vue`, `Pagination.vue`, `GoalsView.vue`, `SessionsCard.vue`, `AccountManagerCard.vue`, `AdjustmentDialog.vue`, `cn`?**
  _High betweenness centrality (0.112) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.060129509713228495 - nodes in this community are weakly interconnected._