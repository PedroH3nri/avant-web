# Graph Report - avant-web  (2026-10-30)

## Corpus Check
- 222 files · ~127,903 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2277 nodes · 5657 edges · 118 communities (113 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d1d72a1d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- account/service.ts
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
- lucide-vue-next
- ApiKeyDialog.vue
- api.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- pick
- ClientsView.vue
- t
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
- goals/rules.ts
- session.ts
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/service.ts
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
- errorText
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- Button.vue
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
- team/types.ts
- RecoveryCodes.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- commissions/rules.ts
- Review Focus
- RolesView.vue
- RolePermissionsCard.vue
- vue-sonner
- commissions/types.ts
- ConfigPanel.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- tailwindcss
- ProfileImageCard.vue
- vue
- events.ts
- Input.vue
- BarChart.vue
- Pagination.vue
- MyCommissionView.vue
- GoalsView.vue
- groups/rules.ts
- report-builder.test.ts
- commission-components.test.ts
- AccountManagerCard.vue
- SessionsCard.vue
- Avatar.vue
- SeatBar.vue
- account/rules.ts
- vitest
- cn
- contracts/service.ts
- FieldsPanel.vue
- goals/service.ts
- formatAmount

## God Nodes (most connected - your core abstractions)
1. `t()` - 226 edges
2. `errorText()` - 171 edges
3. `vue` - 95 edges
4. `ApiError` - 67 edges
5. `useSession` - 59 edges
6. `cn()` - 50 edges
7. `lucide-vue-next` - 49 edges
8. `vue-sonner` - 49 edges
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
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue

## Import Cycles
- None detected.

## Communities (118 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.06
Nodes (38): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+30 more)

### Community 1 - "account/service.ts"
Cohesion: 0.47
Nodes (7): UserRef, ApiKey, ApiKeyCreated, AuthSession, GoogleStatus, MfaSetup, RecoveryCodes

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (60): builderState, canExport(), chartAllowed(), emptyDraft(), fittingChart(), fromQuery(), fromReport(), fromTemplate() (+52 more)

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
Nodes (23): adding, busy, canManage, deleteDesc, deleting, errorToast(), freeOptions, group (+15 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.14
Nodes (14): busy, canTransfer, duplicate, emit, errors, form, open, props (+6 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (40): networkName(), loadExtras(), adding, addSite(), allSites, archived, assignedOnly, canAssign (+32 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (35): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+27 more)

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
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (27): busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email, emailOk (+19 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.13
Nodes (16): formatMonth(), periodText(), clients, currency, load(), loadError, month, monthOptions (+8 more)

### Community 23 - "lucide-vue-next"
Cohesion: 0.18
Nodes (11): lucide-vue-next, reka-ui, pick(), route, router, session, emit, { session, ready, groups, active, openLink, account, logout } (+3 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "api.ts"
Cohesion: 0.14
Nodes (14): api, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url(), clientService (+6 more)

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
Nodes (41): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+33 more)

### Community 30 - "t"
Cohesion: 0.19
Nodes (16): t(), tn(), addMember(), deleteGroup(), removeMember(), rename(), replace(), run() (+8 more)

### Community 31 - "api.ts"
Cohesion: 0.09
Nodes (31): approval(), Tone, tree(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember (+23 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (12): busy, canManage, deleteOpen, deleting, dialog, editing, emit, props (+4 more)

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
Cohesion: 0.09
Nodes (34): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY (+26 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.14
Nodes (13): dot, td, th, company, error, firstName, greeting, load() (+5 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.09
Nodes (25): discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+17 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "goals/rules.ts"
Cohesion: 0.22
Nodes (10): mark, money(), percent, props, share, tone, companyGoalYears(), goalTone() (+2 more)

### Community 45 - "session.ts"
Cohesion: 0.12
Nodes (17): pinia, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme, AccentId (+9 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.09
Nodes (28): statusTone, validCode(), networkService, McmCandidate, Network, NetworkStatus, SyncRun, busy (+20 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "contracts/service.ts"
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 51 - "useSession"
Cohesion: 0.23
Nodes (10): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), openLink() (+2 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

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
Cohesion: 0.13
Nodes (14): choose(), langs, session, auditActions, auditText(), chooseLang(), dict, errors (+6 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.15
Nodes (14): box, failed, initial, props, busy, drop(), input, pick() (+6 more)

### Community 61 - "errorText"
Cohesion: 0.24
Nodes (12): errorText(), load(), issue(), load(), saveStart(), choose(), confirmEnd(), confirmRemove() (+4 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.08
Nodes (30): Task 6: Web — construtor, exportUrl(), download(), busy, canManage, counts, download(), duplicate() (+22 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "Button.vue"
Cohesion: 0.16
Nodes (10): open, button, classes, Props, busy, confirm, load(), session (+2 more)

### Community 68 - "package.json"
Cohesion: 0.11
Nodes (24): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+16 more)

### Community 69 - "reports/rules.ts"
Cohesion: 0.07
Nodes (46): Task 3: Web — tipos, serviço e regras do construtor, Lang, choices, description, emit, invalid, name, open (+38 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.16
Nodes (16): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+8 more)

### Community 71 - "clients/rules.ts"
Cohesion: 0.17
Nodes (14): FiscalData, emptyProfile(), profileBody(), profileInput(), profileOk(), STAFF_STATUSES, STATUS_TONE, ClientProfile (+6 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "AdjustmentDialog.vue"
Cohesion: 0.20
Nodes (11): amount, amountError, busy, emit, open, props, reason, reasonTouched (+3 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (17): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+9 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (29): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+21 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.10
Nodes (36): Task 4: Web — cores das séries e gráficos do construtor, formatMetric(), toNumber(), amountText(), yearTotal(), money(), money(), preview (+28 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "ApiError"
Cohesion: 0.09
Nodes (18): model, ApiError, busy, email, error, sent, submit(), busy (+10 more)

### Community 81 - "Query"
Cohesion: 0.25
Nodes (8): costService, Cost, CostInput, CostKind, FormulaCheck, CostLine, MonthResult, ResultTotals

### Community 82 - "team/types.ts"
Cohesion: 0.27
Nodes (12): Query, Items, Localized, Page, SiteScope, Member, MemberDetail, MembershipStatus (+4 more)

### Community 83 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.12
Nodes (17): formatDate(), latestCall(), clientId, clientOptions, clients, firstPage(), load(), loadError (+9 more)

### Community 86 - "commissions/rules.ts"
Cohesion: 0.32
Nodes (12): activeByRole(), changeNotes(), emptyRuleForm(), eventOf(), formatDay(), localToday(), newRuleForm(), personGoalAmount() (+4 more)

### Community 87 - "Review Focus"
Cohesion: 0.25
Nodes (7): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RolePermissionsCard.vue"
Cohesion: 0.08
Nodes (27): model, busy, category, chipClass(), chosen, emit, groups, name (+19 more)

### Community 90 - "vue-sonner"
Cohesion: 0.09
Nodes (21): vue-sonner, THEMES, accent, choose(), session, busy, current, emit (+13 more)

### Community 91 - "commissions/types.ts"
Cohesion: 0.23
Nodes (11): RuleForm, commissionService, CommissionEvent, CommissionKind, CommissionMonth, CommissionRule, CommissionRuleInput, CommissionTarget (+3 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.09
Nodes (24): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+16 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.17
Nodes (7): hovered, lastShown, open, panelItem(), railItem(), { session, route, ready, groups, active, groupActive, openLink, account, logout }, shown

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 96 - "ProfileImageCard.vue"
Cohesion: 0.24
Nodes (9): busy, drop(), imageUrl, input, name, pick(), problem, run() (+1 more)

### Community 97 - "vue"
Cohesion: 0.14
Nodes (7): vue, toasterTheme, first, FunnelStep, props, props, up

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 99 - "Input.vue"
Cohesion: 0.09
Nodes (22): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, next (+14 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "MyCommissionView.vue"
Cohesion: 0.20
Nodes (11): STATUS_TONE, windowState, data, endText(), kpis, loadError, minus(), money() (+3 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.09
Nodes (21): months, months, monthOptions(), canManage, canView, load(), loadError, mine (+13 more)

### Community 104 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), groupService, Group, GroupInput, GroupMember, GroupStatus, free (+1 more)

### Community 105 - "report-builder.test.ts"
Cohesion: 0.22
Nodes (5): catalog, me, report, result, service

### Community 106 - "commission-components.test.ts"
Cohesion: 0.20
Nodes (8): client, issue, managerChange, perms, settings, staffOptions, team, toastError

### Community 107 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (24): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+16 more)

### Community 108 - "SessionsCard.vue"
Cohesion: 0.28
Nodes (8): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions

### Community 109 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 111 - "account/rules.ts"
Cohesion: 0.31
Nodes (6): label(), BROWSERS, device(), first(), keyState, SYSTEMS

### Community 112 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 113 - "cn"
Cohesion: 0.12
Nodes (15): item(), cn(), kindClass(), tabClass(), choice(), tabClass(), itemClass(), valueClass() (+7 more)

### Community 114 - "contracts/service.ts"
Cohesion: 0.25
Nodes (7): contractService, Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary

### Community 115 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 116 - "goals/service.ts"
Cohesion: 0.46
Nodes (6): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals

### Community 117 - "formatAmount"
Cohesion: 0.67
Nodes (3): saved, start(), formatAmount()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `lucide-vue-next`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `goals/rules.ts`, `ConnectView.vue`, `NetworksView.vue`, `contracts/service.ts`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `errorText`, `ReportsView.vue`, `Button.vue`, `reports/rules.ts`, `MetricStylePopover.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `RecoveryCodes.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `vue-sonner`, `ConfigPanel.vue`, `SidebarRail.vue`, `ProfileImageCard.vue`, `vue`, `Input.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `SessionsCard.vue`, `account/rules.ts`, `cn`, `FieldsPanel.vue`?**
  _High betweenness centrality (0.135) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05574912891986063 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `lucide-vue-next`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `goals/rules.ts`, `session.ts`, `ConnectView.vue`, `NetworksView.vue`, `useSession`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `Button.vue`, `package.json`, `reports/rules.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ReportChart.vue`, `ApiKeysCard.vue`, `ApiError`, `RecoveryCodes.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `vue-sonner`, `ConfigPanel.vue`, `SidebarRail.vue`, `ProfileImageCard.vue`, `events.ts`, `Input.vue`, `BarChart.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `report-builder.test.ts`, `AccountManagerCard.vue`, `SessionsCard.vue`, `Avatar.vue`, `SeatBar.vue`, `cn`, `FieldsPanel.vue`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `lucide-vue-next`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `t`, `api.ts`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ConnectView.vue`, `NetworksView.vue`, `useSession`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `Button.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `MfaCard.vue`, `AdjustmentDialog.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `ApiError`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RolePermissionsCard.vue`, `vue-sonner`, `ProfileImageCard.vue`, `Input.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `AccountManagerCard.vue`, `SessionsCard.vue`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.054563492063492064 - nodes in this community are weakly interconnected._