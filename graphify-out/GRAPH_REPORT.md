# Graph Report - avant-web  (2026-10-30)

## Corpus Check
- 221 files · ~127,753 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2282 nodes · 5661 edges · 107 communities (103 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 77 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `479fafce`
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
- reports/rules.ts
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
- router.ts
- vitest
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- groups/rules.ts
- useSession
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
- costs/rules.ts
- ApiError
- package.json
- reports/rules.ts
- MetricStylePopover.vue
- clients/rules.ts
- FiscalDataCard.vue
- CompanyGoalCard.vue
- MfaCard.vue
- AdjustmentDialog.vue
- GroupsView.vue
- ContractsView.vue
- ReportChart.vue
- ApiKeysCard.vue
- ApiError
- Query
- SaveReportDialog.vue
- RecoveryCodes.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- PasswordCard.vue
- Review Focus
- RolesView.vue
- RolePermissionsCard.vue
- vue-sonner
- vue
- ConfigPanel.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- Field.vue
- Avatar.vue
- events.ts
- Input.vue
- BarChart.vue
- Pagination.vue
- MyCommissionView.vue
- GoalsView.vue
- AccountManagerCard.vue
- SessionsCard.vue
- cn
- FieldsPanel.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 229 edges
2. `errorText()` - 171 edges
3. `vue` - 94 edges
4. `ApiError` - 67 edges
5. `useSession` - 58 edges
6. `vue-sonner` - 49 edges
7. `lucide-vue-next` - 48 edges
8. `cn()` - 48 edges
9. `toNumber()` - 37 edges
10. `pick()` - 35 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `scaleHue()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (107 total, 4 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "lib/types.ts"
Cohesion: 0.17
Nodes (14): UserRef, busy, confirm, load(), session, status, unlink(), accountService (+6 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): builderState, toInput(), toQuery(), exportUrl(), apiMessage(), askRemoveMetric(), busy, canManage (+41 more)

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
Nodes (39): busy, canTransfer, duplicate, emit, errors, form, open, props (+31 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (40): networkName(), loadExtras(), adding, addSite(), allSites, archived, assignedOnly, canAssign (+32 more)

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
Cohesion: 0.09
Nodes (21): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+13 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (26): busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email, emailOk (+18 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.12
Nodes (15): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+7 more)

### Community 23 - "reka-ui"
Cohesion: 0.24
Nodes (7): reka-ui@^2.11.0, reka-ui, pick(), route, router, session, open

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 25 - "api.ts"
Cohesion: 0.20
Nodes (16): api, Query, RequestOptions, SAFE, CompanyRef, Items, Page, costService (+8 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "pick"
Cohesion: 0.14
Nodes (14): pick(), options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions, names (+6 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (39): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+31 more)

### Community 30 - "reports/rules.ts"
Cohesion: 0.12
Nodes (28): Task 4: Web — cores das séries e gráficos do construtor, filterable, layout, AXIS_CHARTS, axisSplit(), canExport(), chartAllowed(), dimensionSources() (+20 more)

### Community 31 - "api.ts"
Cohesion: 0.08
Nodes (31): approval(), Tone, tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember (+23 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.13
Nodes (15): open, td, th, busy, canManage, deleteOpen, deleting, dialog (+7 more)

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

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.07
Nodes (42): compare, options, period, selected, change(), countryName(), dailySeries(), daysOf() (+34 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.20
Nodes (11): companyService, CompanyDetail, CompanyFiscal, company, error, firstName, lost, networks (+3 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.09
Nodes (28): discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+20 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "router.ts"
Cohesion: 0.17
Nodes (8): vue-router, RouteMeta, vue-router, route, router, session, sessions, routes

### Community 45 - "vitest"
Cohesion: 0.15
Nodes (5): vitest@^5.0.5, @vue/test-utils@^2.5.1, vitest, @vue/test-utils, Blank

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (24): statusTone, validCode(), McmCandidate, Network, NetworkStatus, SyncRun, busy, Check (+16 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "groups/rules.ts"
Cohesion: 0.23
Nodes (8): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, free, memberGroup

### Community 51 - "useSession"
Cohesion: 0.22
Nodes (13): Key, linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout() (+5 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (20): Task 6: Web — construtor, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.12
Nodes (14): choose(), langs, session, auditActions, auditText(), chooseLang(), dict, errors (+6 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "t"
Cohesion: 0.13
Nodes (21): errorText(), t(), greeting, load(), clientOptions, statusText(), choose(), confirmEnd() (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, counts, duplicate(), firstPage(), load(), loadError, loadReports() (+17 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "ApiError"
Cohesion: 0.25
Nodes (5): ApiError, readCookie(), request(), setUnauthorizedHandler(), url()

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "reports/rules.ts"
Cohesion: 0.08
Nodes (35): Task 3: Web — tipos, serviço e regras do construtor, Lang, ReportDraft, customMetricService, reportService, ChartOptions, ChartType, CustomCatalogMetric (+27 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.19
Nodes (14): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+6 more)

### Community 71 - "clients/rules.ts"
Cohesion: 0.17
Nodes (15): emptyProfile(), profileBody(), profileInput(), profileOk(), STAFF_STATUSES, STATUS_TONE, ClientProfile, ClientProfileInput (+7 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.16
Nodes (15): locale, busy, complete, documentLabel, form, load(), loaded, options (+7 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.10
Nodes (22): busy, canManage, changed, current, load(), monthNames, months, save() (+14 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "AdjustmentDialog.vue"
Cohesion: 0.15
Nodes (15): open, amount, amountError, busy, emit, open, props, reason (+7 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (17): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+9 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (40): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+32 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.09
Nodes (35): first, FunnelStep, props, formatMetric(), toNumber(), amountText(), yearTotal(), money() (+27 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "ApiError"
Cohesion: 0.16
Nodes (15): Me, authService, InvitationPreview, LoginResult, busy, error, mfa, mismatch (+7 more)

### Community 81 - "Query"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 82 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (12): choices, description, emit, invalid, name, open, props, roleIds (+4 more)

### Community 83 - "RecoveryCodes.vue"
Cohesion: 0.15
Nodes (16): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+8 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.17
Nodes (11): model, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.13
Nodes (15): formatDate(), latestCall(), clientId, clients, firstPage(), load(), loadError, members (+7 more)

### Community 86 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 87 - "Review Focus"
Cohesion: 0.25
Nodes (7): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RolePermissionsCard.vue"
Cohesion: 0.08
Nodes (34): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+26 more)

### Community 90 - "vue-sonner"
Cohesion: 0.13
Nodes (17): vue-sonner@^2.0.9, vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent() (+9 more)

### Community 91 - "vue"
Cohesion: 0.29
Nodes (5): vue, props, up, props, seats

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.16
Nodes (13): addFilter(), addTyped(), CHARTS, emit, FilterOption, LIMITS, newField, periods (+5 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.14
Nodes (15): cancel(), container, emit, focusGroup(), hover(), hovered, lastShown, open (+7 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "Field.vue"
Cohesion: 0.29
Nodes (5): busy, email, error, sent, submit()

### Community 96 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 99 - "Input.vue"
Cohesion: 0.11
Nodes (18): model, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "MyCommissionView.vue"
Cohesion: 0.15
Nodes (14): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+6 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.08
Nodes (35): mark, money(), percent, props, share, tone, companyGoalYears(), goalTone() (+27 more)

### Community 107 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (33): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+25 more)

### Community 108 - "SessionsCard.vue"
Cohesion: 0.17
Nodes (12): lucide-vue-next, button, classes, Props, end(), ending, endingOthers, endOthers() (+4 more)

### Community 113 - "cn"
Cohesion: 0.12
Nodes (16): panelItem(), railItem(), cn(), kindClass(), tabClass(), choice(), tabClass(), dot() (+8 more)

### Community 115 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `lib/types.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `reka-ui`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `reports/rules.ts`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `router.ts`, `ConnectView.vue`, `NetworksView.vue`, `useSession`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `MetricStylePopover.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `RecoveryCodes.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `vue-sonner`, `vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `Field.vue`, `Input.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `SessionsCard.vue`, `cn`, `FieldsPanel.vue`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `lib/types.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `reka-ui`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `router.ts`, `vitest`, `ConnectView.vue`, `NetworksView.vue`, `useSession`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `package.json`, `reports/rules.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `RecoveryCodes.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `vue-sonner`, `ConfigPanel.vue`, `SidebarRail.vue`, `Field.vue`, `Avatar.vue`, `events.ts`, `Input.vue`, `BarChart.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `SessionsCard.vue`, `cn`, `FieldsPanel.vue`?**
  _High betweenness centrality (0.126) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `StaffRolesView.vue`, `lib/types.ts`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `reka-ui`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `router.ts`, `ConnectView.vue`, `NetworksView.vue`, `useSession`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `ApiError`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `vue-sonner`, `SidebarRail.vue`, `Field.vue`, `Input.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `SessionsCard.vue`?**
  _High betweenness centrality (0.084) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05731523378582202 - nodes in this community are weakly interconnected._