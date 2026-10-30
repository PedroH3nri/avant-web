# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 216 files · ~122,106 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2182 nodes · 5389 edges · 116 communities (110 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 78 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d135298d`
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
- SidebarNav.vue
- ApiKeyDialog.vue
- Button.vue
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
- cn
- TeamCommissionsView.vue
- compilerOptions
- InviteView.vue
- errorToast
- vitest
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- contracts/types.ts
- PeriodPicker.vue
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
- account/rules.ts
- report-builder.test.ts
- devDependencies
- api.ts
- MetricStylePopover.vue
- clients/types.ts
- FiscalDataCard.vue
- GoalBar.vue
- MfaCard.vue
- CompanyIcon.vue
- GroupsView.vue
- errorText
- ReportChart.vue
- ApiKeysCard.vue
- router.ts
- GroupedBarChart.vue
- reports/rules.ts
- costs/service.ts
- CurrencyCard.vue
- ClientTeamsView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- RolesView.vue
- package.json
- PasswordCard.vue
- costs/rules.ts
- ConfigPanel.vue
- networks/service.ts
- FieldsPanel.vue
- tailwindcss
- Button.vue
- session.ts
- events.ts
- MfaView.vue
- BarChart.vue
- Pagination.vue
- toNumber
- GoalsView.vue
- SessionsCard.vue
- team/types.ts
- table.ts
- AccountManagerCard.vue
- MyCommissionView.vue
- commissions/types.ts
- AdjustmentDialog.vue
- contracts/service.ts
- goals/service.ts
- TeamTabs.vue
- latest.ts
- SeatBar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 216 edges
2. `errorText()` - 161 edges
3. `vue` - 91 edges
4. `ApiError` - 64 edges
5. `useSession` - 55 edges
6. `lucide-vue-next` - 47 edges
7. `vue-sonner` - 47 edges
8. `cn()` - 47 edges
9. `toNumber()` - 39 edges
10. `pick()` - 33 edges

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

## Communities (116 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.08
Nodes (28): splitEvent(), allRoles(), busy, canManage, canRoles, countRules(), counts, current (+20 more)

### Community 1 - "useSession"
Cohesion: 0.12
Nodes (15): vue-sonner, toasterTheme, choose(), langs, session, chooseLang(), lang, ACCENTS (+7 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (52): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+44 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState, toInput(), exportUrl(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+39 more)

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
Cohesion: 0.15
Nodes (24): busy, canTransfer, duplicate, emit, errors, form, open, props (+16 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (43): inviteTaken(), busy, canEditCompany, canInvite, canManage, canRoles, company, dupe (+35 more)

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

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+10 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.06
Nodes (35): pick(), options, transferOptions, ruleEnd(), busy, canEditGroone, canSeeInvites, email (+27 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), companyGoal, creating, editing, emit, formOpen (+14 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.13
Nodes (16): formatMonth(), periodText(), clients, currency, load(), loadError, month, monthOptions (+8 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.11
Nodes (16): account(), clientId, emit, Group, GROUPS, logout(), onInternal, openLink() (+8 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 25 - "Button.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/rules.ts"
Cohesion: 0.12
Nodes (28): Task 3: Web — tipos, serviço e regras do construtor, Lang, Page, customMetricService, ChartOptions, CustomCatalogMetric, CustomMetric, CustomMetricCheck (+20 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.06
Nodes (39): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+31 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.14
Nodes (13): busy, category, chipClass(), chosen, emit, groups, name, open (+5 more)

### Community 31 - "SiteDetailView.vue"
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
Cohesion: 0.08
Nodes (28): broken, hue, initials, props, busy, create(), description, duplicate (+20 more)

### Community 38 - "Review Focus"
Cohesion: 0.09
Nodes (21): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento (+13 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.10
Nodes (30): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY, shortDay() (+22 more)

### Community 40 - "cn"
Cohesion: 0.12
Nodes (17): reka-ui, pick(), route, router, session, Item, open, model (+9 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.10
Nodes (20): toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows, issuing (+12 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (23): Me, InvitationPreview, LoginResult, accept(), busy, error, formOk, gone (+15 more)

### Community 44 - "errorToast"
Cohesion: 0.33
Nodes (9): open, t(), cancel(), errorToast(), loadInvites(), patchMember(), removeMember(), resend() (+1 more)

### Community 45 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

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
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 51 - "PeriodPicker.vue"
Cohesion: 0.22
Nodes (7): compare, options, period, selected, model, Key, PERIOD_PRESETS

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.11
Nodes (19): FiscalData, ddi, localeOptions, notes, percentage, percentageBad, phone, profile (+11 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.09
Nodes (24): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+16 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (21): peopleService, Person, Action, busy, confirm(), enable(), fail(), firstPage() (+13 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.14
Nodes (12): vue, props, up, auditActions, auditText(), dict, errors, fallbackError (+4 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "errorText"
Cohesion: 0.24
Nodes (12): errorText(), load(), issue(), load(), saveStart(), choose(), confirmEnd(), confirmRemove() (+4 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.08
Nodes (27): Task 6: Web — construtor, busy, canManage, counts, duplicate(), firstPage(), load(), loadError (+19 more)

### Community 66 - "account/rules.ts"
Cohesion: 0.31
Nodes (6): label(), BROWSERS, device(), first(), keyState, SYSTEMS

### Community 67 - "report-builder.test.ts"
Cohesion: 0.14
Nodes (9): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, catalog, me, report, result (+1 more)

### Community 68 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3, vue-tsc@^3.3.13 (+7 more)

### Community 69 - "api.ts"
Cohesion: 0.14
Nodes (14): api, ApiError, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+6 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "clients/types.ts"
Cohesion: 0.42
Nodes (8): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, OwnerInvitation, Invitation

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 73 - "GoalBar.vue"
Cohesion: 0.21
Nodes (12): mark, percent, props, share, tone, start(), valid, formatAmount() (+4 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "CompanyIcon.vue"
Cohesion: 0.40
Nodes (4): box, failed, initial, props

### Community 76 - "GroupsView.vue"
Cohesion: 0.10
Nodes (17): dot, allGroups, canManage, created(), creating, groups, load(), loaded (+9 more)

### Community 77 - "errorText"
Cohesion: 0.06
Nodes (29): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+21 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.12
Nodes (19): first, FunnelStep, props, LineSeries, description, empty, first, firstFormat (+11 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "router.ts"
Cohesion: 0.08
Nodes (19): authService, busy, email, error, sent, submit(), busy, error (+11 more)

### Community 81 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 82 - "reports/rules.ts"
Cohesion: 0.13
Nodes (28): filterable, AXIS_CHARTS, axisSplit(), canExport(), chartAllowed(), dimensionSources(), emptyDraft(), fittingChart() (+20 more)

### Community 83 - "costs/service.ts"
Cohesion: 0.25
Nodes (8): costService, Cost, CostInput, CostKind, FormulaCheck, CostLine, MonthResult, ResultTotals

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (16): clientService, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (12): choices, description, emit, invalid, name, open, props, roleIds (+4 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (20): assign(), canManage, canTeam, load(), loaded, loadError, loadRoles(), members (+12 more)

### Community 89 - "package.json"
Cohesion: 0.17
Nodes (11): tailwind-merge@^3.7.0, oxlint@^1.89.0, vite@^8.3.5, name, packageManager, private, type, version (+3 more)

### Community 90 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.13
Nodes (17): addFilter(), addTyped(), CHARTS, emit, FilterOption, LIMITS, newField, periods (+9 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.33
Nodes (6): statusTone, networkService, McmCandidate, Network, NetworkStatus, SyncRun

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
Cohesion: 0.15
Nodes (20): pinia, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId (+12 more)

### Community 98 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 99 - "MfaView.vue"
Cohesion: 0.12
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 102 - "toNumber"
Cohesion: 0.14
Nodes (21): change(), formatMetric(), toNumber(), amountText(), kpis, minus(), money(), kpis (+13 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.09
Nodes (21): months, months, monthOptions(), canManage, canView, load(), loadError, mine (+13 more)

### Community 104 - "SessionsCard.vue"
Cohesion: 0.28
Nodes (8): formatDate(), end(), ending, endingOthers, endOthers(), fail(), loadError, sessions

### Community 105 - "team/types.ts"
Cohesion: 0.18
Nodes (15): Query, Localized, SiteScope, groupService, staffService, reportService, siteService, teamService (+7 more)

### Community 106 - "table.ts"
Cohesion: 0.24
Nodes (10): td, th, metrics, background(), dimensions, metrics, props, show() (+2 more)

### Community 107 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (21): emptyProfile(), profileBody(), profileInput(), closeForm(), create(), openEdit(), busy, canChange (+13 more)

### Community 108 - "MyCommissionView.vue"
Cohesion: 0.20
Nodes (9): STATUS_TONE, windowState, data, endText(), load(), loadError, month, openWindows (+1 more)

### Community 109 - "commissions/types.ts"
Cohesion: 0.26
Nodes (10): RuleForm, CommissionEvent, CommissionKind, CommissionMonth, CommissionRule, CommissionRuleInput, CommissionTarget, MyCommissions (+2 more)

### Community 110 - "AdjustmentDialog.vue"
Cohesion: 0.20
Nodes (10): amount, amountError, busy, emit, open, props, reason, save() (+2 more)

### Community 111 - "contracts/service.ts"
Cohesion: 0.22
Nodes (8): Items, contractService, Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary

### Community 112 - "goals/service.ts"
Cohesion: 0.39
Nodes (7): goalService, GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals

### Community 113 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `errorToast` to `StaffRolesView.vue`, `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `Button.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `cn`, `TeamCommissionsView.vue`, `InviteView.vue`, `ConnectView.vue`, `NetworksView.vue`, `contracts/types.ts`, `PeriodPicker.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `errorText`, `ReportsView.vue`, `account/rules.ts`, `api.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `reports/rules.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `Button.vue`, `session.ts`, `MfaView.vue`, `Pagination.vue`, `toNumber`, `GoalsView.vue`, `SessionsCard.vue`, `table.ts`, `AccountManagerCard.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TeamTabs.vue`?**
  _High betweenness centrality (0.144) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.07741935483870968 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `Button.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ConnectView.vue`, `NetworksView.vue`, `PeriodPicker.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `t`, `ReportsView.vue`, `report-builder.test.ts`, `api.ts`, `MetricStylePopover.vue`, `FiscalDataCard.vue`, `GoalBar.vue`, `MfaCard.vue`, `CompanyIcon.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `router.ts`, `GroupedBarChart.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `SaveReportDialog.vue`, `RolesView.vue`, `package.json`, `PasswordCard.vue`, `ConfigPanel.vue`, `FieldsPanel.vue`, `Button.vue`, `session.ts`, `events.ts`, `MfaView.vue`, `BarChart.vue`, `Pagination.vue`, `GoalsView.vue`, `SessionsCard.vue`, `table.ts`, `AccountManagerCard.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TeamTabs.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `useSession` be split into smaller, more focused modules?**
  _Cohesion score 0.11578947368421053 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `useSession`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Review Focus`, `PageViewsView.vue`, `cn`, `TeamCommissionsView.vue`, `InviteView.vue`, `errorToast`, `ConnectView.vue`, `NetworksView.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `t`, `ReportsView.vue`, `api.ts`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `router.ts`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `PasswordCard.vue`, `session.ts`, `MfaView.vue`, `GoalsView.vue`, `SessionsCard.vue`, `AccountManagerCard.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04821802935010482 - nodes in this community are weakly interconnected._