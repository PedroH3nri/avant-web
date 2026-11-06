# Graph Report - avant-web  (2026-11-06)

## Corpus Check
- 339 files · ~196,370 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3661 nodes · 9644 edges · 156 communities (149 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 114 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `a6fbc8fe`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- StaffRolesView.vue
- DashboardsView.vue
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
- dashboards/rules.ts
- SavedViewsBar.vue
- ApiKeyDialog.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- GroupsView.vue
- ClientsView.vue
- InvoiceView.vue
- ClassifySitesDialog.vue
- pick
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- cn
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- DashboardGrid.vue
- ProfileImageCard.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- ServiceLineDialog.vue
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- PayeeDialog.vue
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- AccountManagerCard.vue
- .oxlintrc.json
- t
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- ClientDocumentsCard.vue
- views/rules.ts
- InviteView.vue
- FiscalDataCard.vue
- GoalsView.vue
- RevenueStatusBadge.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- ClientsResultsView.vue
- TemplatesView.vue
- index.ts
- gam_tools/rules.ts
- ChecklistsView.vue
- MfaCard.vue
- vue-sonner
- ClientTeamsView.vue
- CompanyGoalCard.vue
- team/service.ts
- RolesView.vue
- RoleDialog.vue
- Field.vue
- MetricStylePopover.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- Button.vue
- ClientNetworksView.vue
- dashboards/types.ts
- GamRunView.vue
- api.ts
- MyCommissionView.vue
- AddWidgetDialog.vue
- AlertDialog.vue
- lang
- contracts/service.ts
- NativeSelect.vue
- table.ts
- ClientSitesView.vue
- PasswordCard.vue
- ResetView.vue
- NewTaskDialog.vue
- InvoicesView.vue
- updates
- navigation.ts
- AdjustmentDialog.vue
- TemplateEditorView.vue
- alerts/rules.ts
- LoadError.vue
- Review Focus
- session.ts
- drag.ts
- checklists/rules.ts
- formatDate
- networks/service.ts
- ApiKeysCard.vue
- gam_tools/types.ts
- InvoiceServicesView.vue
- FakeSource
- ChecklistNotesCard.vue
- i18n-plugin.ts
- tasks/types.ts
- priorityLabel
- NetworkReviewActions.vue
- errorToast
- SettingsView.vue
- reports/types.ts
- tailwindcss
- Pagination.vue
- loadMembers
- tasks/rules.ts
- costs/rules.ts
- ChecklistView.vue
- SaveReportDialog.vue
- reports/rules.ts
- ChecklistItemDialog.vue
- SeatBar.vue
- FieldsPanel.vue
- errorText
- checklists/types.ts
- Input.vue
- events.ts
- BarChart.vue
- sites/rules.ts
- virtual-i18n.d.ts
- alerts/types.ts
- ClientNetworksCard.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 421 edges
2. `errorText()` - 265 edges
3. `vue` - 145 edges
4. `ApiError` - 103 edges
5. `useSession` - 81 edges
6. `lucide-vue-next` - 78 edges
7. `vue-sonner` - 77 edges
8. `toNumber()` - 60 edges
9. `cn()` - 55 edges
10. `vitest` - 52 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (156 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.06
Nodes (43): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+35 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (57): profileInput(), audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments (+49 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (47): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+39 more)

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
Nodes (30): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+22 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.09
Nodes (40): busy, canTransfer, duplicate, emit, errors, form, open, props (+32 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.05
Nodes (42): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+34 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (66): change(), countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay() (+58 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.16
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.11
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (20): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+12 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "dashboards/rules.ts"
Cohesion: 0.11
Nodes (31): ordered, ACCOUNT_SIZE, Box, CHART_SIZE, clamp(), cleanFilters(), compactLayout(), FILTER_DIMENSIONS (+23 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (20): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+12 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (33): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+25 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (24): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+16 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (32): costService, Cost, CostInput, FormulaCheck, amountText(), busy, canManage, check (+24 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "GroupsView.vue"
Cohesion: 0.06
Nodes (40): busy, create(), description, duplicate, emit, name, open, people (+32 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (55): emptyProfile(), profileBody(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+47 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 32 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, ruleText(), options, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

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

### Community 37 - "cn"
Cohesion: 0.10
Nodes (18): props, up, panelItem(), railItem(), cn(), kindClass(), tab(), choice() (+10 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.16
Nodes (19): drag, emit, grid, props, { run, failure, loading }, source, stored, widgetFailure() (+11 more)

### Community 40 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): UserRef, busy, confirm, load(), session, status, unlink(), busy (+11 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.11
Nodes (25): load(), overview, picker, picking, rows, send(), sending, props (+17 more)

### Community 44 - "ServiceLineDialog.vue"
Cohesion: 0.10
Nodes (30): FiscalData, amount, amountError, busy, chosen, description, emit, open (+22 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.06
Nodes (46): vitest, pageCount(), pageSlice(), shownRows, NO_COMPARISON, sameComparison(), savedPeriod(), ThumbShape (+38 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.10
Nodes (23): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, awaiting, busy, Check, checks (+15 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 51 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.11
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (62): first, FunnelStep, props, formatMetric(), toNumber(), metricText(), valueText(), title (+54 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (20): Task 6: Web — construtor, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (38): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ClientProfile (+30 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "t"
Cohesion: 0.12
Nodes (22): busy, drop(), input, pick(), problem, props, run(), t() (+14 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+21 more)

### Community 69 - "ClientDocumentsCard.vue"
Cohesion: 0.18
Nodes (15): fetchFile(), download(), approve(), busy, downloadFile(), emit, fail(), load() (+7 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.10
Nodes (34): Items, applyView(), current, sortOptions, applyView(), current, rows, sortOptions (+26 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 74 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (39): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+31 more)

### Community 78 - "ClientsResultsView.vue"
Cohesion: 0.09
Nodes (22): CostKind, clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError (+14 more)

### Community 79 - "TemplatesView.vue"
Cohesion: 0.15
Nodes (17): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+9 more)

### Community 80 - "index.ts"
Cohesion: 0.06
Nodes (40): vue, choose(), langs, session, open, session, LINES, showBootFailure() (+32 more)

### Community 81 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "vue-sonner"
Cohesion: 0.13
Nodes (20): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+12 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "CompanyGoalCard.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 87 - "team/service.ts"
Cohesion: 0.30
Nodes (6): api, Page, peopleService, Person, staffService, teamService

### Community 88 - "RolesView.vue"
Cohesion: 0.08
Nodes (27): broken, hue, initials, props, RoleOption, assign(), canManage, canTeam (+19 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (34): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+26 more)

### Community 90 - "Field.vue"
Cohesion: 0.12
Nodes (13): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+5 more)

### Community 91 - "MetricStylePopover.vue"
Cohesion: 0.16
Nodes (16): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+8 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (40): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "Button.vue"
Cohesion: 0.16
Nodes (13): lucide-vue-next, reka-ui, open, button, classes, Props, props, open (+5 more)

### Community 96 - "ClientNetworksView.vue"
Cohesion: 0.11
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, box, failed, initial, props, awaitingOnly, canAssign (+10 more)

### Community 97 - "dashboards/types.ts"
Cohesion: 0.12
Nodes (25): chosen, create(), emit, name, open, templates, dashboardService, templateService (+17 more)

### Community 98 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 99 - "api.ts"
Cohesion: 0.13
Nodes (20): ApiError, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request() (+12 more)

### Community 100 - "MyCommissionView.vue"
Cohesion: 0.14
Nodes (15): STATUS_TONE, data, kpis, load(), loadError, minus(), money(), month (+7 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.13
Nodes (22): add(), emit, kind, kinds, metric, metrics, open, props (+14 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (16): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+8 more)

### Community 103 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 104 - "contracts/service.ts"
Cohesion: 0.16
Nodes (15): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), contractService, Contract, ContractClientRef, ContractNetwork (+7 more)

### Community 105 - "NativeSelect.vue"
Cohesion: 0.08
Nodes (28): compare, options, period, selected, model, Key, PERIOD_PRESETS, dimensions (+20 more)

### Community 106 - "table.ts"
Cohesion: 0.07
Nodes (28): dot, td, th, events, load(), loadError, open, page (+20 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 108 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 109 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (15): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, loadError, month, page, pages (+7 more)

### Community 112 - "updates"
Cohesion: 0.17
Nodes (11): imagens, patterns, update-types, interval, updates, directory, groups, package-ecosystem (+3 more)

### Community 113 - "navigation.ts"
Cohesion: 0.27
Nodes (10): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), activeLabels() (+2 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (26): blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), adding, apiMessage() (+18 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 117 - "LoadError.vue"
Cohesion: 0.14
Nodes (12): pick(), route, router, session, end(), ending, endingOthers, endOthers() (+4 more)

### Community 118 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 119 - "session.ts"
Cohesion: 0.08
Nodes (25): pinia, vue-router, RouteMeta, vue-router, reconnectEvents(), CompanyRef, Me, Theme (+17 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.17
Nodes (13): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+5 more)

### Community 122 - "formatDate"
Cohesion: 0.28
Nodes (8): formatDate(), locale, dates, monthName(), payee, PAYER, props, InvoiceItem

### Community 123 - "networks/service.ts"
Cohesion: 0.31
Nodes (7): ClientNetwork, ClientRef, ClientSite, networkService, McmCandidate, Network, SyncRun

### Community 124 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.16
Nodes (16): GamFormat, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+8 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.10
Nodes (17): firstName, greeting, session, busy, canManage, description, editing, editingOpen (+9 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.15
Nodes (13): auditActions, dict, errors, fallbackError, COLUMN, column(), Lang, LanguageMessages (+5 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 132 - "NetworkReviewActions.vue"
Cohesion: 0.33
Nodes (8): busy, confirm(), emit, props, reject(), rejectOpen, showError(), clientInventoryService

### Community 133 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 134 - "SettingsView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.07
Nodes (44): Task 3: Web — tipos, serviço e regras do construtor, Lang, draft, draftKey, emit, failure, goal, goalFailure (+36 more)

### Community 136 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 137 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 138 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 140 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "SaveReportDialog.vue"
Cohesion: 0.18
Nodes (9): choices, description, emit, invalid, name, open, props, roleIds (+1 more)

### Community 143 - "reports/rules.ts"
Cohesion: 0.09
Nodes (40): loadDraft(), emit, missingDates, props, setDate(), setMode(), filterable, layout (+32 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 146 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 147 - "errorText"
Cohesion: 0.19
Nodes (15): errorText(), choose(), choose(), load(), saveStart(), confirmEnd(), confirmRemove(), create() (+7 more)

### Community 148 - "checklists/types.ts"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 149 - "Input.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 150 - "events.ts"
Cohesion: 0.18
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+5 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "sites/rules.ts"
Cohesion: 0.26
Nodes (11): approval(), Tone, tree(), AdUnit, Site, SiteCategory, SiteDetail, SiteListItem (+3 more)

### Community 156 - "alerts/types.ts"
Cohesion: 0.33
Nodes (8): Query, alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.09
Nodes (26): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+18 more)

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `cn`, `ProfileImageCard.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `AccountManagerCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientDocumentsCard.vue`, `views/rules.ts`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `gam_tools/rules.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `MetricStylePopover.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `Button.vue`, `ClientNetworksView.vue`, `dashboards/types.ts`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `contracts/service.ts`, `NativeSelect.vue`, `table.ts`, `ClientSitesView.vue`, `PasswordCard.vue`, `ResetView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `navigation.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `LoadError.vue`, `checklists/rules.ts`, `formatDate`, `ApiKeysCard.vue`, `InvoiceServicesView.vue`, `ChecklistNotesCard.vue`, `priorityLabel`, `NetworkReviewActions.vue`, `errorToast`, `SettingsView.vue`, `reports/types.ts`, `Pagination.vue`, `loadMembers`, `tasks/rules.ts`, `costs/rules.ts`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `FieldsPanel.vue`, `errorText`, `Input.vue`, `sites/rules.ts`, `ClientNetworksCard.vue`?**
  _High betweenness centrality (0.149) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `index.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `cn`, `DashboardGrid.vue`, `ProfileImageCard.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `AccountManagerCard.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `ClientDocumentsCard.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `MetricStylePopover.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `Button.vue`, `ClientNetworksView.vue`, `dashboards/types.ts`, `GamRunView.vue`, `MyCommissionView.vue`, `AddWidgetDialog.vue`, `AlertDialog.vue`, `NativeSelect.vue`, `table.ts`, `ClientSitesView.vue`, `PasswordCard.vue`, `ResetView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `navigation.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `LoadError.vue`, `session.ts`, `drag.ts`, `formatDate`, `ApiKeysCard.vue`, `InvoiceServicesView.vue`, `ChecklistNotesCard.vue`, `NetworkReviewActions.vue`, `SettingsView.vue`, `reports/types.ts`, `Pagination.vue`, `ChecklistView.vue`, `SaveReportDialog.vue`, `reports/rules.ts`, `ChecklistItemDialog.vue`, `SeatBar.vue`, `FieldsPanel.vue`, `Input.vue`, `events.ts`, `BarChart.vue`, `ClientNetworksCard.vue`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `useSession` (e.g. with `followOtherTab()` and `logout()`) actually correct?**
  _`useSession` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05550416281221091 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `SiteDetailView.vue`, `CostsView.vue`, `GroupsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `ClassifySitesDialog.vue`, `pick`, `ResultsView.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `DashboardGrid.vue`, `ProfileImageCard.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `ServiceLineDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `PayeeDialog.vue`, `PeopleView.vue`, `AccountManagerCard.vue`, `t`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientDocumentsCard.vue`, `InviteView.vue`, `FiscalDataCard.vue`, `GoalsView.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `ClientsResultsView.vue`, `TemplatesView.vue`, `index.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `vue-sonner`, `ClientTeamsView.vue`, `CompanyGoalCard.vue`, `RolesView.vue`, `RoleDialog.vue`, `Field.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworksView.vue`, `GamRunView.vue`, `api.ts`, `MyCommissionView.vue`, `AlertDialog.vue`, `table.ts`, `ClientSitesView.vue`, `PasswordCard.vue`, `ResetView.vue`, `NewTaskDialog.vue`, `InvoicesView.vue`, `navigation.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `LoadError.vue`, `session.ts`, `ApiKeysCard.vue`, `InvoiceServicesView.vue`, `ChecklistNotesCard.vue`, `NetworkReviewActions.vue`, `errorToast`, `SettingsView.vue`, `reports/types.ts`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ClientNetworksCard.vue`?**
  _High betweenness centrality (0.105) - this node is a cross-community bridge._