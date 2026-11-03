# Graph Report - avant-web  (2026-11-03)

## Corpus Check
- 300 files · ~175,466 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3286 nodes · 8581 edges · 143 communities (137 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 103 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `2cb93d99`
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
- PageViewsView.vue
- HomeView.vue
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
- fail
- avant-web
- PeopleView.vue
- scripts
- i18n.ts
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
- PageHeader.vue
- views/rules.ts
- clients/rules.ts
- FiscalDataCard.vue
- CompanyGoalCard.vue
- RevenueStatusBadge.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- vue
- reports/rules.ts
- InviteView.vue
- RecoveryCodes.vue
- DashboardWidget.vue
- MfaCard.vue
- CurrencyCard.vue
- ClientTeamsView.vue
- dashboards/rules.ts
- Review Focus
- RolesView.vue
- RoleDialog.vue
- vue-sonner
- ServiceLineDialog.vue
- ConfigPanel.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- TemplatesView.vue
- InvoicesView.vue
- errorToast
- NewGroupDialog.vue
- ClassifySitesDialog.vue
- reports/types.ts
- AddWidgetDialog.vue
- t
- GoalsView.vue
- Button.vue
- router.ts
- NewDashboardDialog.vue
- AccountStatus.vue
- contracts/types.ts
- SaveViewDialog.vue
- NewTaskDialog.vue
- FieldsPanel.vue
- MyCommissionView.vue
- DataTable.vue
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- reka-ui
- useSession
- session.ts
- drag.ts
- alerts/rules.ts
- views/types.ts
- InvoiceDocument.vue
- vue-router
- SeatBar.vue
- PasswordCard.vue
- router.ts
- dashboard-rules.test.ts
- groups/rules.ts
- tasks/types.ts
- AccountManagerCard.vue
- errorText
- alerts/types.ts
- table.ts
- @vitejs/plugin-vue
- template-rules.ts
- DashboardGrid.vue
- priorityLabel
- tasks/rules.ts
- support-tasks.test.ts
- Avatar.vue
- loadMembers

## God Nodes (most connected - your core abstractions)
1. `t()` - 375 edges
2. `errorText()` - 233 edges
3. `vue` - 133 edges
4. `ApiError` - 92 edges
5. `lucide-vue-next` - 71 edges
6. `useSession` - 71 edges
7. `vue-sonner` - 69 edges
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
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (143 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (42): splitEvent(), active, allRoles(), busy, canManage, canRoles, canSeeRoles, countRules() (+34 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (41): audit, auditPage, auditPages, auditTotal, candidates, canDocuments, canManage, canNotes (+33 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): builderState(), emptyDraft(), fromTemplate(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage (+41 more)

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
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (47): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+39 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.06
Nodes (32): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+24 more)

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
Cohesion: 0.11
Nodes (17): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+9 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, qrcode@1.5.4, reka-ui@^2.11.0 (+10 more)

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
Cohesion: 0.11
Nodes (16): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+8 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (21): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+13 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "api.ts"
Cohesion: 0.13
Nodes (26): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+18 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (38): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+30 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "Pagination.vue"
Cohesion: 0.25
Nodes (6): first, last, numbers, page, props, pageNumbers()

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (56): emptyProfile(), profileOk(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+48 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (26): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+18 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.10
Nodes (27): CostKind, monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange() (+19 more)

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
Cohesion: 0.11
Nodes (16): allGroups, canManage, created(), creating, groups, load(), loaded, loadError (+8 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.08
Nodes (47): change(), countryName(), dailySeries(), daysOf(), formatMetric(), hourLabel(), hourlyItems(), peakHour() (+39 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (30): toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail (+22 more)

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
Nodes (35): savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download(), apiMessage() (+27 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.06
Nodes (35): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+27 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.09
Nodes (26): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+18 more)

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

### Community 53 - "fail"
Cohesion: 0.19
Nodes (14): auditChanged(), changeOwner(), fail(), load(), loadAudit(), managerSaved(), reload(), reloadAudit() (+6 more)

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
Nodes (12): auditActions, dict, errors, fallbackError, fill(), index, emit, props (+4 more)

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
Nodes (37): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+29 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+21 more)

### Community 69 - "PageHeader.vue"
Cohesion: 0.06
Nodes (32): @vueuse/core@^15.0.0, @vueuse/core, box, failed, initial, props, dot, firstName (+24 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.14
Nodes (24): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+16 more)

### Community 71 - "clients/rules.ts"
Cohesion: 0.16
Nodes (13): NOTE_MAX, NOTE_MIN, personName(), profileBody(), profileInput(), STAFF_STATUSES, STATUS_TONE, ClientProfile (+5 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (30): busy, canManage, changed, current, monthNames, months, saved, session (+22 more)

### Community 74 - "RevenueStatusBadge.vue"
Cohesion: 0.17
Nodes (18): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+10 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (38): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+30 more)

### Community 78 - "vue"
Cohesion: 0.07
Nodes (31): vue, BarItem, largest, props, first, FunnelStep, props, props (+23 more)

### Community 79 - "reports/rules.ts"
Cohesion: 0.08
Nodes (41): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+33 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "RecoveryCodes.vue"
Cohesion: 0.07
Nodes (34): copyToken(), busy, canManage, created(), creating, keys, load(), loadError (+26 more)

### Community 82 - "DashboardWidget.vue"
Cohesion: 0.13
Nodes (19): apiMessage(), draft, emit, failure, goal, grabTitle(), loadDraft(), loading (+11 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.13
Nodes (16): latestCall(), clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.14
Nodes (21): ACCOUNT_SIZE, Box, CHART_SIZE, clamp(), compactLayout(), FILTER_DIMENSIONS, fitBox(), inOriginalOrder() (+13 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.11
Nodes (18): canManage, canTeam, editable(), isMe(), loaded, loadError, members, options (+10 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (35): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+27 more)

### Community 90 - "vue-sonner"
Cohesion: 0.13
Nodes (12): vue-sonner, toasterTheme, busy, confirm, load(), session, status, unlink() (+4 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.12
Nodes (20): vitest, amount, amountError, busy, chosen, description, emit, open (+12 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.05
Nodes (48): compare, options, period, selected, Key, PERIOD_PRESETS, dimensions, filters (+40 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 97 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 98 - "NewGroupDialog.vue"
Cohesion: 0.13
Nodes (15): busy, create(), description, duplicate, emit, name, open, people (+7 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.12
Nodes (23): loadExtras(), category, categoryOptions, changed, emit, keep, open, props (+15 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.10
Nodes (31): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, period, props, customMetricService, ChartOptions, CustomCatalogMetric (+23 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (17): emit, kind, kinds, metric, metrics, open, props, ready (+9 more)

### Community 102 - "t"
Cohesion: 0.14
Nodes (16): auditText(), formatAgo(), permissionGroupLabel(), t(), tn(), changeLines, roleLine(), clientOptions (+8 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.11
Nodes (24): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+16 more)

### Community 104 - "Button.vue"
Cohesion: 0.11
Nodes (15): open, busy, canManage, description, editing, editingOpen, loadError, page (+7 more)

### Community 105 - "router.ts"
Cohesion: 0.08
Nodes (18): busy, email, error, sent, submit(), busy, error, mfa (+10 more)

### Community 106 - "NewDashboardDialog.vue"
Cohesion: 0.22
Nodes (8): model, chosen, create(), emit, name, open, templates, dashboardService

### Community 107 - "AccountStatus.vue"
Cohesion: 0.14
Nodes (12): company, error, hasSeats, load(), lost, networks, router, session (+4 more)

### Community 108 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 112 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (16): discount(), STATUS_TONE, data, kpis, loadError, minus(), money(), month (+8 more)

### Community 113 - "DataTable.vue"
Cohesion: 0.08
Nodes (31): PAGE_SIZE, pageCount(), pageSlice(), background(), dimensions, metrics, page, props (+23 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (20): templateForm(), adding, apiMessage(), audienceRoles, audiences, catalog, flipRole(), form (+12 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 117 - "reka-ui"
Cohesion: 0.09
Nodes (27): lucide-vue-next, reka-ui, route, router, session, panelItem(), railItem(), button (+19 more)

### Community 118 - "useSession"
Cohesion: 0.16
Nodes (17): choose(), langs, session, chooseLang(), lang, linkActive(), NAV_GROUPS, NavGroup (+9 more)

### Community 119 - "session.ts"
Cohesion: 0.14
Nodes (19): Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme, THEMES, AccentId (+11 more)

### Community 120 - "drag.ts"
Cohesion: 0.32
Nodes (11): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+3 more)

### Community 121 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 122 - "views/types.ts"
Cohesion: 0.25
Nodes (8): FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection, ViewDefinition, ViewFilterSpec, ViewScreen

### Community 123 - "InvoiceDocument.vue"
Cohesion: 0.28
Nodes (8): formatDate(), locale, previewDay, dates, monthName(), payee, PAYER, props

### Community 124 - "vue-router"
Cohesion: 0.07
Nodes (18): pinia@^4.1.0, @vue/test-utils@^2.5.1, pinia, vue-router, @vue/test-utils, RouteMeta, vue-router, catalog (+10 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 127 - "router.ts"
Cohesion: 0.11
Nodes (18): ApiError, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 128 - "dashboard-rules.test.ts"
Cohesion: 0.28
Nodes (14): add(), accountWidget(), cleanFilters(), filtersChanged(), goalWidget(), kpiWidget(), newWidgetId(), nextRow() (+6 more)

### Community 129 - "groups/rules.ts"
Cohesion: 0.21
Nodes (9): freeMembers(), groupOf(), Group, GroupInput, GroupMember, GroupStatus, loose, free (+1 more)

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (34): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+26 more)

### Community 132 - "errorText"
Cohesion: 0.09
Nodes (29): pick(), errorText(), end(), ending, endingOthers, endOthers(), fail(), load() (+21 more)

### Community 133 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 134 - "table.ts"
Cohesion: 0.20
Nodes (10): td, th, events, load(), loadError, open, page, pages (+2 more)

### Community 136 - "template-rules.ts"
Cohesion: 0.29
Nodes (9): blankTemplate(), canPreview(), templateInput(), toggleRole(), withAudience(), ManagedTemplate, TemplateRole, preview (+1 more)

### Community 137 - "DashboardGrid.vue"
Cohesion: 0.24
Nodes (9): drag, emit, grid, ordered, props, source, gridArea(), readingOrder() (+1 more)

### Community 138 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX

### Community 140 - "support-tasks.test.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "Avatar.vue"
Cohesion: 0.40
Nodes (4): broken, hue, initials, props

### Community 142 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `fail`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `PageHeader.vue`, `views/rules.ts`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `vue`, `reports/rules.ts`, `InviteView.vue`, `RecoveryCodes.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `errorToast`, `NewGroupDialog.vue`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `router.ts`, `NewDashboardDialog.vue`, `AccountStatus.vue`, `contracts/types.ts`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `MyCommissionView.vue`, `DataTable.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `alerts/rules.ts`, `InvoiceDocument.vue`, `PasswordCard.vue`, `router.ts`, `AccountManagerCard.vue`, `errorText`, `table.ts`, `priorityLabel`, `tasks/rules.ts`, `loadMembers`?**
  _High betweenness centrality (0.159) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051207729468599035 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `PageHeader.vue`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `reports/rules.ts`, `InviteView.vue`, `RecoveryCodes.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `NewGroupDialog.vue`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `t`, `GoalsView.vue`, `Button.vue`, `router.ts`, `NewDashboardDialog.vue`, `AccountStatus.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `MyCommissionView.vue`, `DataTable.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `drag.ts`, `InvoiceDocument.vue`, `vue-router`, `SeatBar.vue`, `PasswordCard.vue`, `router.ts`, `AccountManagerCard.vue`, `errorText`, `table.ts`, `DashboardGrid.vue`, `Avatar.vue`?**
  _High betweenness centrality (0.120) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `fail`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `PageHeader.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `InviteView.vue`, `RecoveryCodes.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `errorToast`, `NewGroupDialog.vue`, `ClassifySitesDialog.vue`, `t`, `GoalsView.vue`, `Button.vue`, `router.ts`, `AccountStatus.vue`, `NewTaskDialog.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `PasswordCard.vue`, `router.ts`, `AccountManagerCard.vue`, `table.ts`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.046511627906976744 - nodes in this community are weakly interconnected._