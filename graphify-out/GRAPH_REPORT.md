# Graph Report - avant-web  (2026-10-29)

## Corpus Check
- 190 files · ~106,141 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 1837 nodes · 4422 edges · 101 communities (96 shown, 5 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 67 edges (avg confidence: 0.89)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7fd5ee49`
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
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- dependencies
- StaffView.vue
- events.ts
- steps
- ClientsResultsView.vue
- SidebarNav.vue
- ApiKeyDialog.vue
- GoogleCard.vue
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
- vue
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
- t
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- LoadError.vue
- avant-web
- Button.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- tailwindcss
- session.ts
- devDependencies
- vitest
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
- ResetView.vue
- clients/rules.ts
- ConfigPanel.vue
- report-builder.test.ts
- CurrencyCard.vue
- HomeView.vue
- SaveReportDialog.vue
- Avant: grupos na Empresa e imagem da Empresa
- BarChart.vue
- RecoveryCodes.vue
- ApiError
- costs/rules.ts
- costs/service.ts
- networks/service.ts
- FieldsPanel.vue
- TeamTabs.vue
- fail
- contracts/types.ts
- profileOk
- FakeSource
- GAM

## God Nodes (most connected - your core abstractions)
1. `t()` - 184 edges
2. `errorText()` - 133 edges
3. `vue` - 81 edges
4. `ApiError` - 56 edges
5. `useSession` - 51 edges
6. `cn()` - 42 edges
7. `lucide-vue-next` - 41 edges
8. `vue-sonner` - 40 edges
9. `vue-router` - 27 edges
10. `pick()` - 26 edges

## Surprising Connections (you probably didn't know these)
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n.ts
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `update()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/internal/people/views/PeopleView.vue
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `scaleHue()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (101 total, 5 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.29
Nodes (7): Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url()

### Community 1 - "vue-sonner"
Cohesion: 0.11
Nodes (19): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+11 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (38): audit, auditBusy, candidates, canManage, canOwner, changed, client, cursor (+30 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (52): builderState, emptyDraft(), fromQuery(), fromReport(), fromTemplate(), toInput(), exportUrl(), apiMessage() (+44 more)

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
Cohesion: 0.07
Nodes (31): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+23 more)

### Community 8 - "reports/rules.ts"
Cohesion: 0.12
Nodes (26): Task 4: Web — cores das séries e gráficos do construtor, filterable, layout, AXIS_CHARTS, axisSplit(), canExport(), chartAllowed(), dimensionSources() (+18 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.06
Nodes (29): busy, canEditCompany, canInvite, canManage, canRoles, company, dupe, email (+21 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.08
Nodes (26): networkName(), loadExtras(), adding, addSite(), archived, assignedOnly, canAssign, canConnect (+18 more)

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
Cohesion: 0.15
Nodes (12): API first e chaves de API, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa, Empresa e equipe (+4 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.09
Nodes (24): pick(), staffService, busy, canEditGroone, email, emailOk, invite(), invites (+16 more)

### Community 20 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.14
Nodes (13): dot, formatMonth(), periodText(), clients, currency, load(), loadError, month (+5 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.15
Nodes (15): account(), clientId, emit, Group, GROUPS, logout(), onInternal, openLink() (+7 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "GoogleCard.vue"
Cohesion: 0.29
Nodes (6): busy, confirm, load(), session, status, unlink()

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (23): busy, byMonth(), canManage, check, checkFormula, confirmRemove(), costs, currencies (+15 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "reports/types.ts"
Cohesion: 0.10
Nodes (32): Task 3: Web — tipos, serviço e regras do construtor, Lang, ReportDraft, customMetricService, reportService, ChartOptions, ChartType, CustomCatalogMetric (+24 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.07
Nodes (28): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+20 more)

### Community 30 - "RoleDialog.vue"
Cohesion: 0.12
Nodes (14): model, busy, category, chipClass(), chosen, emit, groups, name (+6 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.09
Nodes (32): approval(), Tone, tree(), siteService, AdUnit, Site, SiteDetail, SiteListItem (+24 more)

### Community 32 - "RolesView.vue"
Cohesion: 0.09
Nodes (25): td, th, Localized, busy, canManage, deleteOpen, deleting, dialog (+17 more)

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

### Community 37 - "vue"
Cohesion: 0.15
Nodes (9): vue, box, failed, initial, props, broken, hue, initials (+1 more)

### Community 38 - "Review Focus"
Cohesion: 0.10
Nodes (20): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento, Abordagens consideradas (+12 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.10
Nodes (33): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY (+25 more)

### Community 40 - "t"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 41 - "vue-router"
Cohesion: 0.08
Nodes (22): vue-router, RouteMeta, vue-router, safeNext(), busy, email, error, next (+14 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "cn"
Cohesion: 0.14
Nodes (13): props, up, Item, model, model, cn(), kindClass(), tabClass() (+5 more)

### Community 45 - "lib/types.ts"
Cohesion: 0.21
Nodes (16): api, CompanyRef, Items, SiteScope, UserRef, CompanyStatus, AuditEntry, Client (+8 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

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

### Community 51 - "t"
Cohesion: 0.12
Nodes (28): Task 6: Web — construtor, pick(), auditText(), errorText(), formatAgo(), permissionGroupLabel(), t(), emit (+20 more)

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
Cohesion: 0.16
Nodes (14): peopleService, Action, busy, confirm(), enable(), fail(), loadError, open (+6 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.16
Nodes (11): choose(), langs, session, auditActions, chooseLang(), dict, errors, fallbackError (+3 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "LoadError.vue"
Cohesion: 0.13
Nodes (20): end(), ending, endingOthers, endOthers(), fail(), label(), load(), loadError (+12 more)

### Community 61 - "Button.vue"
Cohesion: 0.40
Nodes (4): open, button, classes, Props

### Community 65 - "ReportsView.vue"
Cohesion: 0.11
Nodes (18): busy, canManage, counts, load(), loadError, myId, ownerName(), owners (+10 more)

### Community 66 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 67 - "session.ts"
Cohesion: 0.22
Nodes (8): pinia, Me, Theme, accountService, authService, InvitationPreview, LoginResult, Blank

### Community 68 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, postcss@^8.5.31, @types/node@^24.19.2, typescript@~6.0.3, vite@^8.3.5, vue-tsc@^3.3.13 (+7 more)

### Community 69 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.15
Nodes (17): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+9 more)

### Community 71 - "ClientTeamsView.vue"
Cohesion: 0.17
Nodes (11): formatDate(), clientService, clientId, clientOptions, clients, load(), loadError, members (+3 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.16
Nodes (15): locale, busy, complete, documentLabel, form, load(), loaded, options (+7 more)

### Community 73 - "package.json"
Cohesion: 0.20
Nodes (9): oxlint@^1.89.0, @types/qrcode@1.5.5, name, packageManager, private, type, version, oxlint (+1 more)

### Community 74 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 75 - "contracts/rules.ts"
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 76 - "GroupsView.vue"
Cohesion: 0.07
Nodes (34): busy, create(), description, duplicate, emit, name, open, people (+26 more)

### Community 77 - "errorText"
Cohesion: 0.06
Nodes (29): contractService, busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, contracts (+21 more)

### Community 78 - "ReportChart.vue"
Cohesion: 0.11
Nodes (30): first, FunnelStep, props, formatMetric(), toNumber(), amountText(), money(), preview (+22 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.15
Nodes (15): busy, canManage, created(), creating, keys, load(), loadError, permsText() (+7 more)

### Community 80 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 81 - "clients/rules.ts"
Cohesion: 0.28
Nodes (8): emptyProfile(), profileInput(), STAFF_STATUSES, STATUS_TONE, ClientProfile, ClientProfileInput, closeForm(), openEdit()

### Community 82 - "ConfigPanel.vue"
Cohesion: 0.11
Nodes (20): compare, options, period, selected, Key, PERIOD_PRESETS, addFilter(), addTyped() (+12 more)

### Community 83 - "report-builder.test.ts"
Cohesion: 0.22
Nodes (5): catalog, me, report, result, service

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "HomeView.vue"
Cohesion: 0.13
Nodes (12): props, seats, company, error, firstName, greeting, load(), lost (+4 more)

### Community 86 - "SaveReportDialog.vue"
Cohesion: 0.17
Nodes (10): choices, description, emit, invalid, name, open, props, roleIds (+2 more)

### Community 87 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.18
Nodes (10): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+2 more)

### Community 88 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 89 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 90 - "ApiError"
Cohesion: 0.11
Nodes (14): ApiError, busy, current, mismatch, password, password2, ready, short (+6 more)

### Community 91 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 92 - "costs/service.ts"
Cohesion: 0.23
Nodes (9): costService, Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult (+1 more)

### Community 93 - "networks/service.ts"
Cohesion: 0.33
Nodes (6): statusTone, networkService, McmCandidate, Network, NetworkStatus, SyncRun

### Community 94 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 95 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 96 - "fail"
Cohesion: 0.32
Nodes (8): changeOwner(), fail(), load(), more(), removeImage(), saveImage(), sendInvite(), setStatus()

### Community 97 - "contracts/types.ts"
Cohesion: 0.29
Nodes (6): Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary

### Community 98 - "profileOk"
Cohesion: 0.33
Nodes (6): profileBody(), profileOk(), formOk, reloadAudit(), save(), saveProfile()

### Community 100 - "GAM"
Cohesion: 0.40
Nodes (5): Atribuição de sites, GAM, Networks, Sites e ad units, network()

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `vue` to `vue-sonner`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `events.ts`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `GoogleCard.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `cn`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `t`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `Button.vue`, `ReportsView.vue`, `session.ts`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `package.json`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `ConfigPanel.vue`, `report-builder.test.ts`, `CurrencyCard.vue`, `HomeView.vue`, `SaveReportDialog.vue`, `BarChart.vue`, `RecoveryCodes.vue`, `ApiError`, `FieldsPanel.vue`, `TeamTabs.vue`?**
  _High betweenness centrality (0.140) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `vue-sonner` be split into smaller, more focused modules?**
  _Cohesion score 0.10826210826210826 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `vue-sonner`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `reports/rules.ts`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `GoogleCard.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `vue`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `cn`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `Button.vue`, `ReportsView.vue`, `MetricStylePopover.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `contracts/rules.ts`, `GroupsView.vue`, `errorText`, `ReportChart.vue`, `ApiKeysCard.vue`, `ResetView.vue`, `ConfigPanel.vue`, `CurrencyCard.vue`, `HomeView.vue`, `SaveReportDialog.vue`, `RecoveryCodes.vue`, `ApiError`, `FieldsPanel.vue`, `TeamTabs.vue`, `fail`, `profileOk`?**
  _High betweenness centrality (0.117) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `vue-sonner`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `ClientsResultsView.vue`, `SidebarNav.vue`, `ApiKeyDialog.vue`, `GoogleCard.vue`, `CostsView.vue`, `ClientsView.vue`, `RoleDialog.vue`, `SiteDetailView.vue`, `RolesView.vue`, `ResultsView.vue`, `Review Focus`, `PageViewsView.vue`, `t`, `vue-router`, `InviteView.vue`, `ConnectView.vue`, `NetworksView.vue`, `reka-ui`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `LoadError.vue`, `ReportsView.vue`, `ClientTeamsView.vue`, `FiscalDataCard.vue`, `MfaCard.vue`, `GroupsView.vue`, `errorText`, `ApiKeysCard.vue`, `ResetView.vue`, `CurrencyCard.vue`, `HomeView.vue`, `ApiError`, `fail`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05723905723905724 - nodes in this community are weakly interconnected._