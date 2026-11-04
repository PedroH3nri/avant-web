# Graph Report - avant-web  (2026-11-04)

## Corpus Check
- 316 files · ~187,568 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3508 nodes · 9211 edges · 154 communities (149 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 109 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `adf618b9`
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
- PageHeader.vue
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
- cn
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
- AccountManagerCard.vue
- FiscalDataCard.vue
- NativeSelect.vue
- RevenueStatusBadge.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- DashboardWidget.vue
- reports/rules.ts
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
- account/service.ts
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
- errorText
- GoalsView.vue
- Button.vue
- ResetView.vue
- NewDashboardDialog.vue
- ClientSitesView.vue
- contracts/types.ts
- SaveViewDialog.vue
- NewTaskDialog.vue
- FieldsPanel.vue
- MyCommissionView.vue
- Review Focus
- AdjustmentDialog.vue
- TemplateEditorView.vue
- AlertDialog.vue
- lucide-vue-next
- useSession
- session.ts
- drag.ts
- alerts/rules.ts
- tailwindcss
- GamRunView.vue
- vue-router
- gam_tools/types.ts
- PasswordCard.vue
- i18n.ts
- ChecklistNotesCard.vue
- sites/service.ts
- tasks/types.ts
- AccountManagerCard.vue
- formatDate
- alerts/types.ts
- table.ts
- vitest
- costs/rules.ts
- ApiKeysCard.vue
- priorityLabel
- tasks/rules.ts
- support-tasks.test.ts
- ChecklistView.vue
- commission-components.test.ts
- reports/types.ts
- ChecklistItemDialog.vue
- checklists/rules.ts
- ClientDocumentsCard.vue
- errorToast
- ChecklistItemsView.vue
- PageHeader.vue
- events.ts
- BarChart.vue
- loadMembers
- SeatBar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 413 edges
2. `errorText()` - 251 edges
3. `vue` - 140 edges
4. `ApiError` - 100 edges
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
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `axisSplit()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (154 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.06
Nodes (47): t(), emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog (+39 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.04
Nodes (58): profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal, candidates (+50 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (48): builderState(), emptyDraft(), fromTemplate(), toInput(), apiMessage(), askRemoveMetric(), busy, canManage (+40 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (35): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+27 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.12
Nodes (32): busy, canTransfer, duplicate, emit, errors, form, open, props (+24 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

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
Nodes (18): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+10 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (21): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+13 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "GoalTemplatesDialog.vue"
Cohesion: 0.10
Nodes (24): saved, busy, changed(), close(), creating, editing, emit, formOpen (+16 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, on, pull_request, push, branches, run (+6 more)

### Community 22 - "ClientsResultsView.vue"
Cohesion: 0.10
Nodes (19): formatMonth(), periodText(), clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+11 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "api.ts"
Cohesion: 0.14
Nodes (23): api, download(), Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler() (+15 more)

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
Cohesion: 0.04
Nodes (54): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+46 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, ruleText(), transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

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
Nodes (45): broken, hue, initials, props, busy, create(), description, duplicate (+37 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.07
Nodes (39): compare, options, period, selected, countryName(), dailySeries(), daysOf(), hourLabel() (+31 more)

### Community 40 - "PageHeader.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (30): toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW, detail (+22 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.11
Nodes (25): load(), overview, picker, picking, rows, send(), sending, props (+17 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.09
Nodes (32): savedPeriod(), viewChanged(), viewDraft(), ViewPeriod, apiMessage(), canManage, catalog, changed (+24 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.09
Nodes (27): statusTone, validCode(), McmCandidate, Network, NetworkStatus, SyncRun, busy, Check (+19 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (31): networkName(), busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+23 more)

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
Cohesion: 0.05
Nodes (64): first, FunnelStep, props, change(), formatMetric(), toNumber(), pageCount(), pageSlice() (+56 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (20): Task 6: Web — construtor, Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "cn"
Cohesion: 0.11
Nodes (17): panelItem(), railItem(), cn(), kindClass(), tab(), choice(), valueClass(), itemClass() (+9 more)

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
Nodes (34): exportUrl(), download(), busy, canManage, catalog, counts, download(), empty (+26 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.11
Nodes (24): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+16 more)

### Community 69 - "ClientNetworksView.vue"
Cohesion: 0.13
Nodes (15): box, failed, initial, props, clientInventoryService, firstPage(), load(), loadError (+7 more)

### Community 70 - "views/rules.ts"
Cohesion: 0.15
Nodes (23): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+15 more)

### Community 71 - "AccountManagerCard.vue"
Cohesion: 0.10
Nodes (21): profileBody(), profileInput(), openEdit(), busy, canChange, emit, manager, managerId (+13 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "NativeSelect.vue"
Cohesion: 0.10
Nodes (20): model, busy, canManage, changed, current, load(), monthNames, months (+12 more)

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
Nodes (39): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+31 more)

### Community 78 - "DashboardWidget.vue"
Cohesion: 0.13
Nodes (19): apiMessage(), draft, emit, failure, goal, grabTitle(), loadDraft(), loading (+11 more)

### Community 79 - "reports/rules.ts"
Cohesion: 0.08
Nodes (42): filterable, applyScale(), emit, error, from, gradient(), mode, MODES (+34 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "RecoveryCodes.vue"
Cohesion: 0.10
Nodes (25): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+17 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.08
Nodes (42): dimensions, filters, periods, props, drag, emit, grid, ordered (+34 more)

### Community 87 - "ConfigPanel.vue"
Cohesion: 0.17
Nodes (12): addFilter(), addTyped(), CHARTS, emit, LIMITS, newField, periods, props (+4 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (37): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+29 more)

### Community 90 - "account/service.ts"
Cohesion: 0.21
Nodes (13): UserRef, busy, confirm, load(), session, status, unlink(), ApiKey (+5 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.14
Nodes (17): amount, amountError, busy, chosen, description, emit, open, options (+9 more)

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
Nodes (18): roleNames(), TemplateRoles, apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (17): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+9 more)

### Community 97 - "i18n.ts"
Cohesion: 0.15
Nodes (11): props, up, auditActions, auditText(), dict, errors, fallbackError, fill() (+3 more)

### Community 98 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (22): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+14 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (22): category, categoryOptions, changed, emit, keep, open, props, responsible (+14 more)

### Community 100 - "vue-sonner"
Cohesion: 0.13
Nodes (15): vue-sonner, choose(), langs, session, chooseLang(), useNavigation(), logout(), ACCENTS (+7 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.12
Nodes (24): add(), emit, kind, kinds, metric, metrics, open, props (+16 more)

### Community 102 - "errorText"
Cohesion: 0.15
Nodes (21): errorText(), choose(), load(), saveStart(), confirmEnd(), confirmRemove(), create(), load() (+13 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.08
Nodes (35): locale, mark, percent, props, share, tone, companyGoalYears(), goalTone() (+27 more)

### Community 104 - "Button.vue"
Cohesion: 0.12
Nodes (14): busy, canManage, description, editing, editingOpen, loadError, page, pages (+6 more)

### Community 105 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 106 - "NewDashboardDialog.vue"
Cohesion: 0.20
Nodes (9): model, chosen, create(), emit, name, open, templates, dashboardService (+1 more)

### Community 107 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 108 - "contracts/types.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.20
Nodes (8): choices, emit, invalid, name, open, props, roleIds, visibility

### Community 110 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 111 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 112 - "MyCommissionView.vue"
Cohesion: 0.12
Nodes (19): discount(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+11 more)

### Community 113 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 4: Web — cores das séries e gráficos do construtor, Task 5: Web — lista de relatórios, rota e menu, Task 8: Web — fechamento

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.14
Nodes (18): amount, amountError, busy, emit, open, props, reason, reasonTouched (+10 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (34): templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+26 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 117 - "lucide-vue-next"
Cohesion: 0.14
Nodes (15): lucide-vue-next, reka-ui, pick(), route, router, session, open, open (+7 more)

### Community 118 - "useSession"
Cohesion: 0.27
Nodes (10): Key, linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, visibleGroups(), activeLabels() (+2 more)

### Community 119 - "session.ts"
Cohesion: 0.17
Nodes (15): Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES, AccentId, Me (+7 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 122 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 123 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 124 - "vue-router"
Cohesion: 0.07
Nodes (17): pinia, vue, vue-router, toasterTheme, RouteMeta, vue-router, catalog, me (+9 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.29
Nodes (9): GamFormat, GamRunState, GamStepState, GamToolKind, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput (+1 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 127 - "i18n.ts"
Cohesion: 0.07
Nodes (25): ApiError, safeNext(), busy, email, error, sent, submit(), busy (+17 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "sites/service.ts"
Cohesion: 0.35
Nodes (7): approval(), AdUnit, Site, SiteDetail, SiteListItem, SiteMember, SitePatch

### Community 130 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.18
Nodes (17): CompanyStatus, NOTE_MAX, NOTE_MIN, STAFF_STATUSES, STATUS_TONE, AuditEntry, Client, ClientDetail (+9 more)

### Community 132 - "formatDate"
Cohesion: 0.24
Nodes (9): formatDate(), previewDay, dates, monthName(), payee, PAYER, props, STATUS_TONE (+1 more)

### Community 133 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 134 - "table.ts"
Cohesion: 0.09
Nodes (20): dot, td, th, events, load(), loadError, open, page (+12 more)

### Community 135 - "vitest"
Cohesion: 0.22
Nodes (6): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vue/test-utils@^2.5.1, @vitejs/plugin-vue, vitest, @vue/test-utils

### Community 136 - "costs/rules.ts"
Cohesion: 0.16
Nodes (17): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+9 more)

### Community 137 - "ApiKeysCard.vue"
Cohesion: 0.09
Nodes (22): open, button, classes, Props, props, busy, canManage, created() (+14 more)

### Community 138 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 139 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 140 - "support-tasks.test.ts"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "commission-components.test.ts"
Cohesion: 0.22
Nodes (7): client, managerChange, perms, settings, staffOptions, team, toastError

### Community 143 - "reports/types.ts"
Cohesion: 0.07
Nodes (39): Task 3: Web — tipos, serviço e regras do construtor, Lang, Dashboard, DashboardFilters, DashboardInput, Widget, choices, description (+31 more)

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "checklists/rules.ts"
Cohesion: 0.21
Nodes (11): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, personName(), progressPercent(), RowState, rowState() (+3 more)

### Community 146 - "ClientDocumentsCard.vue"
Cohesion: 0.20
Nodes (14): download(), approve(), busy, downloadFile(), emit, fail(), load(), overview (+6 more)

### Community 147 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 148 - "ChecklistItemsView.vue"
Cohesion: 0.10
Nodes (23): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+15 more)

### Community 149 - "PageHeader.vue"
Cohesion: 0.40
Nodes (3): firstName, greeting, session

### Community 150 - "events.ts"
Cohesion: 0.14
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated (+5 more)

### Community 151 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 152 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `DashboardsView.vue` to `StaffRolesView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `cn`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientNetworksView.vue`, `views/rules.ts`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `NativeSelect.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `DashboardWidget.vue`, `reports/rules.ts`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `ConfigPanel.vue`, `RolesView.vue`, `RoleDialog.vue`, `account/service.ts`, `ServiceLineDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `i18n.ts`, `gam_tools/rules.ts`, `ClassifySitesDialog.vue`, `vue-sonner`, `AddWidgetDialog.vue`, `errorText`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `NewDashboardDialog.vue`, `ClientSitesView.vue`, `contracts/types.ts`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `lucide-vue-next`, `useSession`, `session.ts`, `alerts/rules.ts`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `sites/service.ts`, `AccountManagerCard.vue`, `formatDate`, `table.ts`, `ApiKeysCard.vue`, `priorityLabel`, `tasks/rules.ts`, `ChecklistView.vue`, `reports/types.ts`, `ChecklistItemDialog.vue`, `checklists/rules.ts`, `ClientDocumentsCard.vue`, `errorToast`, `ChecklistItemsView.vue`, `PageHeader.vue`, `loadMembers`?**
  _High betweenness centrality (0.176) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue-router` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `PageViewsView.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `cn`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `NativeSelect.vue`, `RevenueStatusBadge.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `DashboardWidget.vue`, `reports/rules.ts`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `ConfigPanel.vue`, `RolesView.vue`, `RoleDialog.vue`, `account/service.ts`, `ServiceLineDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `i18n.ts`, `ClassifySitesDialog.vue`, `vue-sonner`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `NewDashboardDialog.vue`, `ClientSitesView.vue`, `SaveViewDialog.vue`, `NewTaskDialog.vue`, `FieldsPanel.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `lucide-vue-next`, `useSession`, `session.ts`, `drag.ts`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `formatDate`, `table.ts`, `ApiKeysCard.vue`, `ChecklistView.vue`, `reports/types.ts`, `ChecklistItemDialog.vue`, `ClientDocumentsCard.vue`, `ChecklistItemsView.vue`, `PageHeader.vue`, `events.ts`, `BarChart.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.109) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05725490196078432 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `GroupsView.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `PageHeader.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `FiscalDataCard.vue`, `NativeSelect.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `DashboardWidget.vue`, `InviteView.vue`, `RecoveryCodes.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `account/service.ts`, `ServiceLineDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `i18n.ts`, `ClassifySitesDialog.vue`, `vue-sonner`, `GoalsView.vue`, `Button.vue`, `ResetView.vue`, `ClientSitesView.vue`, `NewTaskDialog.vue`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `lucide-vue-next`, `useSession`, `session.ts`, `GamRunView.vue`, `PasswordCard.vue`, `i18n.ts`, `ChecklistNotesCard.vue`, `table.ts`, `ApiKeysCard.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `ClientDocumentsCard.vue`, `errorToast`, `ChecklistItemsView.vue`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04463276836158192 - nodes in this community are weakly interconnected._