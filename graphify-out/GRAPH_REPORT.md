# Graph Report - avant-web  (2026-10-30)

## Corpus Check
- 217 files · ~124,665 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2218 nodes · 5484 edges · 109 communities (103 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 78 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `3a8dc3d6`
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
- groups/rules.ts
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
- Avatar.vue
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- t
- avant-web
- t
- tsconfig.json
- session-start.sh
- ReportsView.vue
- package.json
- report-builder.test.ts
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
- vue
- router.ts
- TeamTabs.vue
- reports/rules.ts
- profileBody
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- inviteTaken
- PasswordCard.vue
- costs/rules.ts
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- loadMembers
- ApiError
- events.ts
- MfaView.vue
- BarChart.vue
- Pagination.vue
- MyCommissionView.vue
- GoalsView.vue
- team/types.ts
- AccountManagerCard.vue
- contracts/service.ts
- vitest
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

## Communities (109 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (46): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+38 more)

### Community 1 - "SessionsCard.vue"
Cohesion: 0.13
Nodes (20): formatDate(), UserRef, ending, endingOthers, label(), load(), loadError, sessions (+12 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (54): profileInput(), audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner (+46 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (46): builderState, toInput(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+38 more)

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
Cohesion: 0.09
Nodes (39): change, busy, canTransfer, choice(), duplicate, emit, errors, form (+31 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (37): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+29 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (36): adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect, canManage (+28 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

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

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.06
Nodes (35): box, failed, initial, props, pick(), options, busy, canEditGroone (+27 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (25): busy, changed(), close(), companyGoal, creating, editing, emit, formOpen (+17 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.13
Nodes (14): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+6 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.15
Nodes (14): account(), clientId, emit, Group, GROUPS, logout(), onInternal, openLink() (+6 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (26): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+18 more)

### Community 25 - "HomeView.vue"
Cohesion: 0.14
Nodes (12): td, th, company, error, firstName, greeting, load(), lost (+4 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.13
Nodes (28): Task 3: Web — tipos, serviço e regras do construtor, Lang, ReportDraft, ChartType, CustomCatalogMetric, CustomMetric, CustomMetricCheck, CustomMetricCheckInput (+20 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.05
Nodes (44): props, seats, emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen (+36 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.12
Nodes (15): model, busy, category, chipClass(), chosen, emit, groups, name (+7 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): approval(), Tone, tree(), AdUnit, busy, canAssign, canManage, errorToast() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.12
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
Nodes (15): busy, create(), description, duplicate, emit, name, open, people (+7 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.09
Nodes (35): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY (+27 more)

### Community 40 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.09
Nodes (25): discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+17 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 45 - "session.ts"
Cohesion: 0.17
Nodes (14): pinia, Accent, accentCss(), accentFor(), applyAccent(), theme, AccentId, CompanyRef (+6 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.07
Nodes (32): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+24 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 51 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.14
Nodes (12): model, ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+4 more)

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

### Community 57 - "i18n.ts"
Cohesion: 0.17
Nodes (9): auditActions, auditText(), dict, errors, fallbackError, formatAgo(), index, lang (+1 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.24
Nodes (10): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+2 more)

### Community 61 - "t"
Cohesion: 0.09
Nodes (33): options, errorText(), fill(), t(), choose(), created(), load(), revoke() (+25 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.08
Nodes (29): Task 6: Web — construtor, exportUrl(), download(), busy, canManage, counts, download(), duplicate() (+21 more)

### Community 66 - "package.json"
Cohesion: 0.17
Nodes (11): tailwind-merge@^3.7.0, oxlint@^1.89.0, vite@^8.3.5, name, packageManager, private, type, version (+3 more)

### Community 67 - "report-builder.test.ts"
Cohesion: 0.14
Nodes (9): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, catalog, me, report, result (+1 more)

### Community 68 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3, vue-tsc@^3.3.13 (+7 more)

### Community 69 - "api.ts"
Cohesion: 0.17
Nodes (17): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+9 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.22
Nodes (12): applyScale(), emit, error, from, mode, MODES, number(), pickColor() (+4 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.33
Nodes (8): CompanyStatus, FiscalData, STAFF_STATUSES, STATUS_TONE, AuditEntry, Client, ClientProfile, ClientProfileInput

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "GoalBar.vue"
Cohesion: 0.12
Nodes (22): amount, amountError, busy, emit, open, props, reason, reasonTouched (+14 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "commission-components.test.ts"
Cohesion: 0.20
Nodes (8): client, issue, managerWindows, perms, settings, staffOptions, team, toastError

### Community 76 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 77 - "errorText"
Cohesion: 0.07
Nodes (26): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, editing (+18 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.08
Nodes (40): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), amountText(), yearTotal() (+32 more)

### Community 79 - "vue"
Cohesion: 0.09
Nodes (24): lucide-vue-next, vue, pick(), route, router, session, button, classes (+16 more)

### Community 80 - "router.ts"
Cohesion: 0.09
Nodes (18): authService, busy, email, error, sent, submit(), busy, error (+10 more)

### Community 81 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 82 - "reports/rules.ts"
Cohesion: 0.12
Nodes (29): filterable, AXIS_CHARTS, canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart(), fromQuery() (+21 more)

### Community 83 - "profileBody"
Cohesion: 0.50
Nodes (4): profileBody(), profileOk(), formOk, saveProfile()

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.12
Nodes (17): latestCall(), ClientOption, clientId, clientOptions, clients, firstPage(), load(), loadError (+9 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.14
Nodes (11): model, choices, description, emit, invalid, name, open, props (+3 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (20): assign(), canManage, canTeam, load(), loaded, loadError, loadRoles(), members (+12 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.16
Nodes (17): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+9 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.13
Nodes (16): compare, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped(), CHARTS (+8 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 96 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 97 - "ApiError"
Cohesion: 0.07
Nodes (29): vue-sonner, toasterTheme, choose(), langs, session, ApiError, chooseLang(), ACCENTS (+21 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "MyCommissionView.vue"
Cohesion: 0.15
Nodes (16): formatDay(), STATUS_TONE, windowState, data, endText(), kpis, load(), loadError (+8 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.10
Nodes (25): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage (+17 more)

### Community 105 - "team/types.ts"
Cohesion: 0.24
Nodes (14): Localized, SiteScope, siteService, Site, SiteDetail, SiteListItem, SiteMember, Member (+6 more)

### Community 107 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (21): clientService, ClientDetail, ClientMember, OwnerInvitation, busy, canChange, CHANGE_KEY, changeText (+13 more)

### Community 112 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 113 - "cn"
Cohesion: 0.14
Nodes (14): reka-ui, props, up, Item, open, cn(), kindClass(), tabClass() (+6 more)

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `errorToast`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `vue`, `router.ts`, `TeamTabs.vue`, `reports/rules.ts`, `profileBody`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `loadMembers`, `ApiError`, `MfaView.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `cn`?**
  _High betweenness centrality (0.116) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050170068027210885 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `Avatar.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `package.json`, `report-builder.test.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `router.ts`, `TeamTabs.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `ApiError`, `events.ts`, `MfaView.vue`, `BarChart.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `cn`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Should `SessionsCard.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.1339031339031339 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `StaffRolesView.vue`, `SessionsCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `errorToast`, `ConnectView.vue`, `NetworksView.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `vue`, `router.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `PasswordCard.vue`, `ApiError`, `MfaView.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.047402597402597405 - nodes in this community are weakly interconnected._