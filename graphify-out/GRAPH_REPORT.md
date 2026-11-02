# Graph Report - avant-web  (2026-11-02)

## Corpus Check
- 238 files · ~140,378 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 2523 nodes · 6404 edges · 128 communities (121 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 80 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fe5d4e00`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- GoogleCard.vue
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
- cn
- ApiKeyDialog.vue
- api.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- pick
- ClientsView.vue
- InvoiceView.vue
- SiteDetailView.vue
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
- invoices/types.ts
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- NativeSelect.vue
- ClientProfileForm.vue
- SettingsView.vue
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
- .oxlintrc.json
- ProfileImageCard.vue
- avant-web
- errorText
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- vue-router
- package.json
- reports/types.ts
- MetricStylePopover.vue
- AccountManagerCard.vue
- FiscalDataCard.vue
- CompanyGoalCard.vue
- reports/rules.ts
- commissions/types.ts
- GroupsView.vue
- ContractsView.vue
- toNumber
- ApiKeysCard.vue
- ApiError
- results/types.ts
- SaveReportDialog.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- PasswordCard.vue
- Review Focus
- RolesView.vue
- RoleDialog.vue
- session.ts
- ServiceLineDialog.vue
- lucide-vue-next
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- contracts/rules.ts
- InvoicesView.vue
- errorToast
- events.ts
- router.ts
- BarChart.vue
- Pagination.vue
- MyCommissionView.vue
- GoalsView.vue
- Button.vue
- RecoveryCodes.vue
- networks/rules.ts
- t
- account/rules.ts
- tailwindcss
- ReportTable.vue
- Card.vue
- fail
- TeamTabs.vue
- AdjustmentDialog.vue
- Input.vue
- groups/rules.ts
- LoadError.vue
- useSession
- account/service.ts
- PageBody.vue
- contracts/types.ts
- load
- GAM
- FakeSource
- latest.ts
- emptyProfile
- SeatBar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 258 edges
2. `errorText()` - 190 edges
3. `vue` - 105 edges
4. `ApiError` - 73 edges
5. `useSession` - 62 edges
6. `lucide-vue-next` - 55 edges
7. `vue-sonner` - 55 edges
8. `toNumber()` - 53 edges
9. `cn()` - 50 edges
10. `formatMetric()` - 44 edges

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

## Communities (128 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.06
Nodes (36): active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules(), counts (+28 more)

### Community 1 - "GoogleCard.vue"
Cohesion: 0.29
Nodes (6): busy, confirm, load(), session, status, unlink()

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (39): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+31 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (40): apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics, catalog, change(), draft (+32 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (33): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+25 more)

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
Cohesion: 0.11
Nodes (33): busy, canTransfer, duplicate, emit, errors, form, open, props (+25 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.06
Nodes (36): adding, addSite(), allSites, archived, assignedOnly, canAssign, canConnect, canManage (+28 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (35): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+27 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (26): barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric, compare (+18 more)

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
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (21): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+13 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.12
Nodes (16): dot, formatMonth(), periodText(), clients, currency, load(), loadError, money() (+8 more)

### Community 23 - "cn"
Cohesion: 0.14
Nodes (13): props, up, panelItem(), railItem(), cn(), kindClass(), tabClass(), choice() (+5 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): model, busy, catalog, chosen, copied, create(), DAYS, emit (+9 more)

### Community 25 - "api.ts"
Cohesion: 0.14
Nodes (24): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+16 more)

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

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): approval(), Tone, tree(), AdUnit, busy, canAssign, canManage, errorToast() (+19 more)

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
Nodes (33): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY, shortDay() (+25 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.17
Nodes (13): companyService, CompanyDetail, CompanyFiscal, company, error, firstName, greeting, load() (+5 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.10
Nodes (24): discount(), toIssue(), adjusting, adjustOpen, canManage, detail, detailOpen, detailWindows (+16 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.08
Nodes (35): savedPeriod(), toQuery(), viewChanged(), viewDraft(), exportUrl(), download(), download(), apiMessage() (+27 more)

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

### Community 50 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "NativeSelect.vue"
Cohesion: 0.14
Nodes (13): model, busy, complete, documentLabel, emit, form, open, options (+5 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.13
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

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
Nodes (15): vue, choose(), langs, session, open, auditActions, auditText(), chooseLang() (+7 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "errorText"
Cohesion: 0.19
Nodes (17): errorText(), submit(), load(), saveStart(), load(), save(), load(), remove() (+9 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (29): busy, canManage, catalog, counts, empty, Layout, layout, layouts (+21 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.35
Nodes (9): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+1 more)

### Community 67 - "vue-router"
Cohesion: 0.07
Nodes (18): @vue/test-utils@^2.5.1, pinia, vitest, vue-router, @vue/test-utils, RouteMeta, vue-router, catalog (+10 more)

### Community 68 - "package.json"
Cohesion: 0.10
Nodes (27): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+19 more)

### Community 69 - "reports/types.ts"
Cohesion: 0.11
Nodes (30): Task 3: Web — tipos, serviço e regras do construtor, Lang, ReportDraft, customMetricService, reportService, ChartOptions, ChartType, CustomCatalogMetric (+22 more)

### Community 70 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.11
Nodes (27): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange, OwnerInvitation (+19 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.08
Nodes (31): busy, canManage, changed, current, monthNames, months, saved, session (+23 more)

### Community 74 - "reports/rules.ts"
Cohesion: 0.11
Nodes (33): filterable, AXIS_CHARTS, BuilderState, builderState(), canExport(), chartAllowed(), dimensionSources(), emptyDraft() (+25 more)

### Community 75 - "commissions/types.ts"
Cohesion: 0.15
Nodes (14): CommissionEvent, CommissionMonth, CommissionRule, CommissionRuleInput, MyCommissions, PersonMonth, WindowMonth, client (+6 more)

### Community 76 - "GroupsView.vue"
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.06
Nodes (31): busy, canCreate, canDelete, canUpdate, chosenNetwork, contracts, creating, delegationLabel() (+23 more)

### Community 78 - "toNumber"
Cohesion: 0.06
Nodes (58): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, change(), formatMetric(), toNumber(), amountText() (+50 more)

### Community 79 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 80 - "ApiError"
Cohesion: 0.10
Nodes (16): ApiError, busy, email, error, sent, submit(), busy, error (+8 more)

### Community 81 - "results/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 82 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (12): choices, description, emit, invalid, name, open, props, roleIds (+4 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.10
Nodes (20): broken, hue, initials, props, clientService, clientId, clientOptions, clients (+12 more)

### Community 86 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (23): RoleOption, assign(), canManage, canTeam, editable(), isMe(), load(), loaded (+15 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (34): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+26 more)

### Community 90 - "session.ts"
Cohesion: 0.13
Nodes (20): vue-sonner, toasterTheme, lang, Accent, accentCss(), accentFor(), ACCENTS, applyAccent() (+12 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (18): amount, amountError, busy, chosen, description, emit, open, options (+10 more)

### Community 92 - "lucide-vue-next"
Cohesion: 0.09
Nodes (25): lucide-vue-next, compare, options, period, selected, Key, PERIOD_PRESETS, addFilter() (+17 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "contracts/rules.ts"
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), ContractNetwork, manual, parsedRevshare, revshareHint

### Community 96 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (21): formatDate(), td, th, dates, money(), monthName(), payee, PAYER (+13 more)

### Community 97 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "router.ts"
Cohesion: 0.09
Nodes (19): safeNext(), busy, email, error, next, password, route, router (+11 more)

### Community 100 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 101 - "Pagination.vue"
Cohesion: 0.25
Nodes (6): first, last, numbers, page, props, pageNumbers()

### Community 102 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (16): locale, STATUS_TONE, data, kpis, load(), loadError, minus(), money() (+8 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (23): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+15 more)

### Community 104 - "Button.vue"
Cohesion: 0.09
Nodes (20): open, button, classes, Props, props, open, busy, canManage (+12 more)

### Community 105 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 106 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 107 - "t"
Cohesion: 0.18
Nodes (16): t(), tn(), visibleGroups(), changeLines, goalText, roleLine(), ruleKind(), ruleName() (+8 more)

### Community 108 - "account/rules.ts"
Cohesion: 0.29
Nodes (7): label(), BROWSERS, device(), first(), KeyState, keyState(), SYSTEMS

### Community 109 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 110 - "ReportTable.vue"
Cohesion: 0.17
Nodes (12): PAGE_SIZE, pageCount(), pageSlice(), dimensions, metrics, page, props, rows (+4 more)

### Community 111 - "Card.vue"
Cohesion: 0.19
Nodes (7): reka-ui, pick(), route, router, session, choose(), session

### Community 112 - "fail"
Cohesion: 0.18
Nodes (15): profileBody(), changeOwner(), fail(), load(), loadAudit(), managerSaved(), reload(), reloadAudit() (+7 more)

### Community 113 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "Input.vue"
Cohesion: 0.29
Nodes (9): model, customs, dimensions, emit, matches(), metrics, props, search (+1 more)

### Community 116 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 117 - "LoadError.vue"
Cohesion: 0.24
Nodes (8): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions

### Community 118 - "useSession"
Cohesion: 0.31
Nodes (7): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), useSession

### Community 119 - "account/service.ts"
Cohesion: 0.47
Nodes (7): UserRef, ApiKey, ApiKeyCreated, AuthSession, GoogleStatus, MfaSetup, RecoveryCodes

### Community 120 - "PageBody.vue"
Cohesion: 0.29
Nodes (4): route, router, session, sessions

### Community 121 - "contracts/types.ts"
Cohesion: 0.29
Nodes (6): Contract, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary

### Community 122 - "load"
Cohesion: 0.33
Nodes (6): choose(), confirmEnd(), confirmRemove(), create(), load(), loadContracts()

### Community 123 - "GAM"
Cohesion: 0.40
Nodes (5): Atribuição de sites, GAM, Networks, Sites e ad units, network()

### Community 126 - "emptyProfile"
Cohesion: 0.50
Nodes (4): emptyProfile(), profileInput(), closeForm(), openEdit()

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `GoogleCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `errorText`, `ReportsView.vue`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `reports/rules.ts`, `GroupsView.vue`, `ContractsView.vue`, `toNumber`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `session.ts`, `ServiceLineDialog.vue`, `lucide-vue-next`, `SidebarRail.vue`, `contracts/rules.ts`, `InvoicesView.vue`, `errorToast`, `router.ts`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `Button.vue`, `RecoveryCodes.vue`, `account/rules.ts`, `ReportTable.vue`, `Card.vue`, `fail`, `TeamTabs.vue`, `AdjustmentDialog.vue`, `Input.vue`, `LoadError.vue`, `PageBody.vue`, `load`?**
  _High betweenness centrality (0.147) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.057692307692307696 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `GoogleCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `cn`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `SettingsView.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `vue-router`, `package.json`, `MetricStylePopover.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `toNumber`, `ApiKeysCard.vue`, `ApiError`, `SaveReportDialog.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `session.ts`, `ServiceLineDialog.vue`, `lucide-vue-next`, `SidebarRail.vue`, `InvoicesView.vue`, `events.ts`, `router.ts`, `BarChart.vue`, `Pagination.vue`, `MyCommissionView.vue`, `GoalsView.vue`, `Button.vue`, `RecoveryCodes.vue`, `ReportTable.vue`, `TeamTabs.vue`, `AdjustmentDialog.vue`, `Input.vue`, `LoadError.vue`, `useSession`, `PageBody.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.104) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `GoogleCard.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `pick`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `InviteView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `SettingsView.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ReportsView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `GroupsView.vue`, `ContractsView.vue`, `ApiKeysCard.vue`, `ApiError`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `PasswordCard.vue`, `Review Focus`, `RolesView.vue`, `RoleDialog.vue`, `session.ts`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `InvoicesView.vue`, `errorToast`, `router.ts`, `MyCommissionView.vue`, `GoalsView.vue`, `Button.vue`, `Card.vue`, `fail`, `AdjustmentDialog.vue`, `LoadError.vue`, `useSession`, `PageBody.vue`, `load`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `ReportBuilderView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06423034330011074 - nodes in this community are weakly interconnected._