# Graph Report - avant-web  (2026-11-04)

## Corpus Check
- 321 files · ~191,073 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3556 nodes · 9375 edges · 152 communities (147 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 112 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2bab617d`
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
- ClientsResultsView.vue
- SavedViewsBar.vue
- ApiKeyDialog.vue
- api.ts
- CostsView.vue
- Arquitetura do MVP do Avant
- Pagination.vue
- ClientsView.vue
- InvoiceView.vue
- SiteDetailView.vue
- RolesPanel.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- GroupsView.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- DashboardGrid.vue
- ClientNetworksView.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- invoices/types.ts
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- NativeSelect.vue
- ClientProfileForm.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- session.ts
- .oxlintrc.json
- ProfileImageCard.vue
- avant-web
- ClientNotesCard.vue
- tsconfig.json
- session-start.sh
- ReportsView.vue
- TaskView.vue
- SchedulesView.vue
- package.json
- ClientNetworksView.vue
- views/rules.ts
- clients/rules.ts
- FiscalDataCard.vue
- NativeSelect.vue
- RevenueStatusBadge.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AlertDialog.vue
- DashboardWidget.vue
- InviteView.vue
- RecoveryCodes.vue
- ChecklistsView.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- dashboards/rules.ts
- ConfigPanel.vue
- RolesView.vue
- RoleDialog.vue
- ApiError
- ServiceLineDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- TemplatesView.vue
- InvoicesView.vue
- i18n.ts
- gam_tools/rules.ts
- ClassifySitesDialog.vue
- vue-sonner
- AddWidgetDialog.vue
- t
- GoalsView.vue
- Button.vue
- ResetView.vue
- dashboards/types.ts
- ClientSitesView.vue
- GroupedBarChart.vue
- SaveViewDialog.vue
- NewTaskDialog.vue
- FieldsPanel.vue
- Review Focus
- Review Focus
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- lucide-vue-next
- fail
- session.ts
- drag.ts
- formatDate
- tailwindcss
- GamRunView.vue
- loadReports
- gam_tools/types.ts
- PasswordCard.vue
- i18n.ts
- ChecklistNotesCard.vue
- sites/service.ts
- tasks/types.ts
- AccountManagerCard.vue
- t
- alerts/types.ts
- LoadError.vue
- networks/rules.ts
- costs/rules.ts
- Button.vue
- priorityLabel
- tasks/rules.ts
- support-tasks.test.ts
- ChecklistView.vue
- networkName
- reports/types.ts
- ChecklistItemDialog.vue
- checklists/rules.ts
- ClientDocumentsCard.vue
- errorToast
- ChecklistItemsView.vue
- PageHeader.vue
- events.ts
- BarChart.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 416 edges
2. `errorText()` - 255 edges
3. `vue` - 142 edges
4. `ApiError` - 101 edges
5. `lucide-vue-next` - 77 edges
6. `vue-sonner` - 75 edges
7. `useSession` - 75 edges
8. `toNumber()` - 60 edges
9. `cn()` - 55 edges
10. `formatMetric()` - 48 edges

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

## Communities (152 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+36 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (48): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+40 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (41): audit, auditPage, auditPages, auditTotal, candidates, canDocuments, canManage, canNotes (+33 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (46): builderState(), toInput(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage, canManageMetrics (+38 more)

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
Cohesion: 0.10
Nodes (37): changeLines, busy, canTransfer, duplicate, emit, errors, form, open (+29 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (48): busy, cancel(), canEditCompany, canInvite, canManage, canRoles, company, email (+40 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

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
Cohesion: 0.18
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.11
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): valid, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+8 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (27): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+19 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (23): UserRef, busy, catalog, chosen, copied, create(), DAYS, emit (+15 more)

### Community 25 - "api.ts"
Cohesion: 0.15
Nodes (20): api, download(), Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler() (+12 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "Pagination.vue"
Cohesion: 0.25
Nodes (7): first, last, numbers, page, props, PAGE_SIZE, pageNumbers()

### Community 29 - "ClientsView.vue"
Cohesion: 0.05
Nodes (51): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+43 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

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

### Community 37 - "GroupsView.vue"
Cohesion: 0.05
Nodes (40): busy, create(), description, duplicate, emit, name, open, people (+32 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (22): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+14 more)

### Community 40 - "ClientNetworksView.vue"
Cohesion: 0.13
Nodes (14): box, failed, initial, props, firstPage(), load(), loadError, networks (+6 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (38): load(), overview, picker, picking, rows, send(), sending, props (+30 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.08
Nodes (37): sameComparison(), savedPeriod(), toQuery(), viewChanged(), viewDraft(), exportUrl(), download(), download() (+29 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): validCode(), busy, Check, checks, code, copied, copy(), done (+14 more)

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

### Community 51 - "NativeSelect.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "toNumber"
Cohesion: 0.06
Nodes (62): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), metricText(), valueText() (+54 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "session.ts"
Cohesion: 0.07
Nodes (18): @vue/test-utils@^2.5.1, pinia, vitest, vue-router, @vue/test-utils, RouteMeta, vue-router, catalog (+10 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.13
Nodes (19): busy, drop(), input, pick(), problem, props, run(), ACCEPTED_IMAGES (+11 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (30): busy, canManage, catalog, counts, empty, Layout, layout, layouts (+22 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (31): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+23 more)

### Community 69 - "ClientNetworksView.vue"
Cohesion: 0.09
Nodes (36): pageCount(), loadDraft(), filterable, AXIS_CHARTS, BuilderState, canExport(), chartAllowed(), Comparison (+28 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.13
Nodes (26): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+18 more)

### Community 71 - "clients/rules.ts"
Cohesion: 0.18
Nodes (12): NOTE_MAX, NOTE_MIN, personName(), profileBody(), profileInput(), STAFF_STATUSES, STATUS_TONE, ClientProfile (+4 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "NativeSelect.vue"
Cohesion: 0.12
Nodes (19): busy, canManage, changed, current, load(), monthNames, months, save() (+11 more)

### Community 74 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (47): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+39 more)

### Community 78 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 79 - "DashboardWidget.vue"
Cohesion: 0.10
Nodes (22): pageSlice(), td, th, draft, emit, failure, goal, goalFailure (+14 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.10
Nodes (24): Me, authService, InvitationPreview, LoginResult, accept(), busy, error, formOk (+16 more)

### Community 81 - "RecoveryCodes.vue"
Cohesion: 0.06
Nodes (43): formatAgo(), copyToken(), busy, canManage, created(), creating, keys, load() (+35 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 87 - "ConfigPanel.vue"
Cohesion: 0.07
Nodes (31): compare, options, period, selected, Key, PERIOD_PRESETS, emit, missingDates (+23 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.09
Nodes (22): broken, hue, initials, props, canManage, canTeam, editable(), isMe() (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.07
Nodes (37): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+29 more)

### Community 90 - "ApiError"
Cohesion: 0.20
Nodes (7): ApiError, busy, confirm, load(), session, status, unlink()

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (40): defaultSites(), languageLabel(), saveFile(), adsLines, adsOpen, busy, choose(), chosen (+32 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts, load() (+10 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.11
Nodes (15): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+7 more)

### Community 97 - "i18n.ts"
Cohesion: 0.08
Nodes (26): vue, auditActions, auditText(), dict, errors, fallbackError, fill(), index (+18 more)

### Community 98 - "gam_tools/rules.ts"
Cohesion: 0.12
Nodes (21): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+13 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 100 - "vue-sonner"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.10
Nodes (29): add(), emit, kind, kinds, metric, metrics, open, props (+21 more)

### Community 102 - "t"
Cohesion: 0.21
Nodes (15): errorText(), load(), saveStart(), confirmEnd(), confirmRemove(), create(), load(), loadContracts() (+7 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.09
Nodes (33): mark, percent, props, share, tone, companyGoalYears(), goalTone(), paceMark() (+25 more)

### Community 104 - "Button.vue"
Cohesion: 0.08
Nodes (21): route, router, session, sessions, firstName, greeting, session, busy (+13 more)

### Community 105 - "ResetView.vue"
Cohesion: 0.17
Nodes (16): choose(), langs, session, chooseLang(), linkActive(), NAV_GROUPS, NavGroup, NavItem (+8 more)

### Community 106 - "dashboards/types.ts"
Cohesion: 0.16
Nodes (18): chosen, create(), emit, name, open, templates, dashboardService, Dashboard (+10 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.14
Nodes (14): latestCall(), clientInventoryService, canSeeChecklists, firstPage(), load(), loadError, page, pages (+6 more)

### Community 108 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "FieldsPanel.vue"
Cohesion: 0.11
Nodes (17): props, up, panelItem(), railItem(), open, cn(), kindClass(), choice() (+9 more)

### Community 112 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 113 - "Review Focus"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (30): templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+22 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 117 - "lucide-vue-next"
Cohesion: 0.13
Nodes (14): lucide-vue-next, reka-ui, pick(), route, router, session, model, open (+6 more)

### Community 118 - "fail"
Cohesion: 0.15
Nodes (17): profileOk(), formOk, auditChanged(), changeOwner(), fail(), load(), loadAudit(), managerSaved() (+9 more)

### Community 119 - "session.ts"
Cohesion: 0.13
Nodes (20): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+12 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "formatDate"
Cohesion: 0.28
Nodes (8): formatDate(), dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 122 - "tailwindcss"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 123 - "GamRunView.vue"
Cohesion: 0.12
Nodes (16): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), gamToolService (+8 more)

### Community 124 - "loadReports"
Cohesion: 0.32
Nodes (8): duplicate(), firstPage(), load(), loadPinned(), loadReports(), remove(), reportsCall, togglePin()

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.16
Nodes (16): lang, GamFormat, GamRunState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput (+8 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 127 - "i18n.ts"
Cohesion: 0.08
Nodes (18): busy, email, error, sent, submit(), busy, error, mfa (+10 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "sites/service.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (34): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+26 more)

### Community 132 - "t"
Cohesion: 0.13
Nodes (14): open, t(), columnLabel(), managerOptions, statusOptions, clientOptions, columnLabel(), delegationLabel() (+6 more)

### Community 133 - "alerts/types.ts"
Cohesion: 0.16
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 134 - "LoadError.vue"
Cohesion: 0.09
Nodes (23): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+15 more)

### Community 135 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 136 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 137 - "Button.vue"
Cohesion: 0.50
Nodes (4): button, classes, Props, props

### Community 138 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX

### Community 140 - "support-tasks.test.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, splitRows(), checklistService, checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

### Community 143 - "reports/types.ts"
Cohesion: 0.08
Nodes (43): Task 3: Web — tipos, serviço e regras do construtor, Lang, applyScale(), emit, error, from, gradient(), mode (+35 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "checklists/rules.ts"
Cohesion: 0.16
Nodes (14): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+6 more)

### Community 147 - "errorToast"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.14
Nodes (11): dot, checklistItemService, canManage, dialogOpen, editing, items, load(), loadError (+3 more)

### Community 149 - "PageHeader.vue"
Cohesion: 0.18
Nodes (9): choices, description, emit, invalid, name, open, props, roleIds (+1 more)

### Community 150 - "events.ts"
Cohesion: 0.14
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated (+5 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `ClientNetworksView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientNetworksView.vue`, `views/rules.ts`, `clients/rules.ts`, `FiscalDataCard.vue`, `NativeSelect.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AlertDialog.vue`, `DashboardWidget.vue`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `ConfigPanel.vue`, `RolesView.vue`, `RoleDialog.vue`, `ApiError`, `ServiceLineDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `i18n.ts`, `gam_tools/rules.ts`, `ClassifySitesDialog.vue`, `vue-sonner`, `AddWidgetDialog.vue`, `t`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `dashboards/types.ts`, `ClientSitesView.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `lucide-vue-next`, `fail`, `session.ts`, `formatDate`, `tailwindcss`, `GamRunView.vue`, `loadReports`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `sites/service.ts`, `AccountManagerCard.vue`, `alerts/types.ts`, `LoadError.vue`, `costs/rules.ts`, `priorityLabel`, `tasks/rules.ts`, `ChecklistView.vue`, `networkName`, `reports/types.ts`, `ChecklistItemDialog.vue`, `checklists/rules.ts`, `ChecklistItemsView.vue`, `PageHeader.vue`?**
  _High betweenness centrality (0.204) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051418439716312055 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `ClientNetworksView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `session.ts`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `FiscalDataCard.vue`, `NativeSelect.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AlertDialog.vue`, `DashboardWidget.vue`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `ConfigPanel.vue`, `RolesView.vue`, `RoleDialog.vue`, `ApiError`, `ServiceLineDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `ClassifySitesDialog.vue`, `vue-sonner`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `dashboards/types.ts`, `ClientSitesView.vue`, `GroupedBarChart.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `lucide-vue-next`, `session.ts`, `drag.ts`, `formatDate`, `tailwindcss`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `alerts/types.ts`, `LoadError.vue`, `Button.vue`, `ChecklistView.vue`, `reports/types.ts`, `ChecklistItemDialog.vue`, `ClientDocumentsCard.vue`, `ChecklistItemsView.vue`, `PageHeader.vue`, `events.ts`, `BarChart.vue`?**
  _High betweenness centrality (0.115) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05052790346907994 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `DashboardGrid.vue`, `ClientNetworksView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `NativeSelect.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AlertDialog.vue`, `DashboardWidget.vue`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `ApiError`, `ServiceLineDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `i18n.ts`, `ClassifySitesDialog.vue`, `vue-sonner`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `Review Focus`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `lucide-vue-next`, `fail`, `session.ts`, `GamRunView.vue`, `loadReports`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `AccountManagerCard.vue`, `t`, `alerts/types.ts`, `LoadError.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ChecklistItemsView.vue`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.046511627906976744 - nodes in this community are weakly interconnected._