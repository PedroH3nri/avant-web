# Graph Report - avant-web  (2026-11-03)

## Corpus Check
- 277 files · ~166,113 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 9 file(s) not represented in the graph (top: (none) 6, .conf 1, .webmanifest 1)

## Summary
- 3069 nodes · 7947 edges · 144 communities (138 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 95 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `74fee36b`
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
- NewGroupDialog.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- PageViewsView.vue
- HomeView.vue
- TeamCommissionsView.vue
- compilerOptions
- contracts/service.ts
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
- t
- tsconfig.json
- session-start.sh
- ReportsView.vue
- costs/rules.ts
- SchedulesView.vue
- package.json
- profileOk
- views/rules.ts
- clients/rules.ts
- FiscalDataCard.vue
- CompanyGoalCard.vue
- PageHeader.vue
- AlertsView.vue
- ApiKeysCard.vue
- ContractsView.vue
- toNumber
- SchedulesView.vue
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
- events.ts
- ClassifySitesDialog.vue
- reports/types.ts
- AddWidgetDialog.vue
- sites/rules.ts
- GoalsView.vue
- Button.vue
- router.ts
- NewDashboardDialog.vue
- table.ts
- Button.vue
- SaveViewDialog.vue
- ApiError
- FieldsPanel.vue
- MyCommissionView.vue
- reports/rules.ts
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
- report-builder.test.ts
- AccountStatus.vue
- PasswordCard.vue
- router.ts
- cn
- vue-router
- BarChart.vue
- AccountManagerCard.vue
- errorText
- alerts/types.ts
- NativeSelect.vue
- @vitejs/plugin-vue
- account/service.ts
- router.ts
- networks/rules.ts
- tailwindcss
- Button.vue
- AccentCard.vue
- FakeSource
- networkName

## God Nodes (most connected - your core abstractions)
1. `t()` - 341 edges
2. `errorText()` - 216 edges
3. `vue` - 123 edges
4. `ApiError` - 84 edges
5. `useSession` - 67 edges
6. `lucide-vue-next` - 64 edges
7. `vue-sonner` - 64 edges
8. `toNumber()` - 58 edges
9. `cn()` - 54 edges
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

## Communities (144 total, 6 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (39): audit, auditPage, auditPages, auditTotal, candidates, canManage, canOwner, changed (+31 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (51): builderState(), emptyDraft(), fromQuery(), fromReport(), fromTemplate(), toInput(), apiMessage(), askRemoveMetric() (+43 more)

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
Cohesion: 0.11
Nodes (35): changeLines, busy, canTransfer, choice(), duplicate, emit, errors, form (+27 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

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
Cohesion: 0.10
Nodes (20): formatMonth(), periodText(), clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load() (+12 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.11
Nodes (21): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+13 more)

### Community 24 - "ApiKeyDialog.vue"
Cohesion: 0.12
Nodes (16): busy, catalog, chosen, copied, create(), DAYS, emit, groups (+8 more)

### Community 25 - "api.ts"
Cohesion: 0.15
Nodes (21): api, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler(), url() (+13 more)

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
Nodes (51): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+43 more)

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
Cohesion: 0.11
Nodes (23): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), currency (+15 more)

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
Cohesion: 0.05
Nodes (40): busy, create(), description, duplicate, emit, name, open, people (+32 more)

### Community 38 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 39 - "PageViewsView.vue"
Cohesion: 0.08
Nodes (35): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), REPORT_CURRENCY, shortDay() (+27 more)

### Community 40 - "HomeView.vue"
Cohesion: 0.14
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (32): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+24 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "contracts/service.ts"
Cohesion: 0.18
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 44 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.08
Nodes (36): savedPeriod(), toQuery(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download(), download() (+28 more)

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

### Community 53 - "fail"
Cohesion: 0.27
Nodes (10): changeOwner(), fail(), load(), loadAudit(), reload(), removeImage(), saveImage(), sendInvite() (+2 more)

### Community 54 - "avant-web"
Cohesion: 0.29
Nodes (6): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack

### Community 55 - "PeopleView.vue"
Cohesion: 0.11
Nodes (20): latestCall(), Action, busy, confirm(), enable(), fail(), firstPage(), loadError (+12 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.10
Nodes (17): vue, props, up, choose(), langs, session, auditActions, auditText() (+9 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "t"
Cohesion: 0.12
Nodes (15): open, open, t(), clientOptions, columnLabel(), delegationLabel(), filterOptions, revshareError (+7 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (37): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+29 more)

### Community 66 - "costs/rules.ts"
Cohesion: 0.16
Nodes (17): COST_KINDS, costBody(), costForm(), currentMonthInput(), FORMULA_CHIPS, fromMonthInput(), parseAmount(), toMonthInput() (+9 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.11
Nodes (30): body, busy, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions, open (+22 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (27): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+19 more)

### Community 69 - "profileOk"
Cohesion: 0.33
Nodes (6): profileOk(), formOk, managerSaved(), reloadAudit(), save(), saveProfile()

### Community 70 - "views/rules.ts"
Cohesion: 0.15
Nodes (21): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+13 more)

### Community 71 - "clients/rules.ts"
Cohesion: 0.21
Nodes (12): emptyProfile(), profileBody(), profileInput(), STAFF_STATUSES, STATUS_TONE, ClientProfile, ClientProfileInput, closeForm() (+4 more)

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 73 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): locale, busy, canManage, changed, current, monthNames, months, saved (+23 more)

### Community 74 - "PageHeader.vue"
Cohesion: 0.40
Nodes (3): firstName, greeting, session

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "ApiKeysCard.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, created(), creating, keys, load(), loadError, page (+9 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (38): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+30 more)

### Community 78 - "toNumber"
Cohesion: 0.06
Nodes (60): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, change(), formatMetric(), toNumber(), metricText() (+52 more)

### Community 79 - "SchedulesView.vue"
Cohesion: 0.09
Nodes (22): allOptions(), busy, canManage, confirmRemove(), dashboards, editing, formOpen, load() (+14 more)

### Community 80 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 81 - "RecoveryCodes.vue"
Cohesion: 0.14
Nodes (17): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+9 more)

### Community 82 - "DashboardWidget.vue"
Cohesion: 0.16
Nodes (15): apiMessage(), draft, emit, failure, goal, grabTitle(), loadDraft(), loading (+7 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 85 - "ClientTeamsView.vue"
Cohesion: 0.14
Nodes (16): clientService, clientId, clientOptions, clients, firstPage(), load(), loadError, members (+8 more)

### Community 86 - "dashboards/rules.ts"
Cohesion: 0.09
Nodes (43): add(), drag, emit, grid, ordered, props, source, ACCOUNT_SIZE (+35 more)

### Community 87 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 88 - "RolesView.vue"
Cohesion: 0.09
Nodes (22): broken, hue, initials, props, canManage, canTeam, editable(), isMe() (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (36): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+28 more)

### Community 90 - "vue-sonner"
Cohesion: 0.15
Nodes (11): vue-sonner, busy, confirm, load(), session, status, unlink(), route (+3 more)

### Community 91 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (19): amount, amountError, busy, chosen, description, emit, open, options (+11 more)

### Community 92 - "ConfigPanel.vue"
Cohesion: 0.08
Nodes (26): PERIOD_PRESETS, dimensions, filters, periods, props, filterPeriod(), withPeriod(), withValue() (+18 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "TemplatesView.vue"
Cohesion: 0.14
Nodes (18): roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+10 more)

### Community 96 - "InvoicesView.vue"
Cohesion: 0.09
Nodes (17): dot, columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month (+9 more)

### Community 97 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 98 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 99 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 100 - "reports/types.ts"
Cohesion: 0.06
Nodes (37): Task 3: Web — tipos, serviço e regras do construtor, vitest, pageCount(), pageSlice(), Lang, dimensions, page, props (+29 more)

### Community 101 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 102 - "sites/rules.ts"
Cohesion: 0.31
Nodes (9): approval(), Tone, AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SiteMember (+1 more)

### Community 103 - "GoalsView.vue"
Cohesion: 0.12
Nodes (22): GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals, canManage, canView (+14 more)

### Community 104 - "Button.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 105 - "router.ts"
Cohesion: 0.10
Nodes (17): model, busy, email, error, sent, submit(), busy, error (+9 more)

### Community 106 - "NewDashboardDialog.vue"
Cohesion: 0.25
Nodes (8): chosen, create(), emit, name, open, templates, dashboardService, DashboardTemplate

### Community 107 - "table.ts"
Cohesion: 0.18
Nodes (11): td, th, events, load(), loadError, open, page, pages (+3 more)

### Community 108 - "Button.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 109 - "SaveViewDialog.vue"
Cohesion: 0.18
Nodes (9): choices, emit, invalid, name, open, props, roleIds, ViewForm (+1 more)

### Community 110 - "ApiError"
Cohesion: 0.20
Nodes (9): ApiError, end(), ending, endingOthers, endOthers(), fail(), load(), loadError (+1 more)

### Community 111 - "FieldsPanel.vue"
Cohesion: 0.39
Nodes (8): customs, dimensions, emit, matches(), metrics, props, search, fieldAvailable()

### Community 112 - "MyCommissionView.vue"
Cohesion: 0.11
Nodes (20): formatDay(), localToday(), STATUS_TONE, WindowState, windowState(), data, endText(), kpis (+12 more)

### Community 113 - "reports/rules.ts"
Cohesion: 0.08
Nodes (39): filterable, applyScale(), emit, error, from, gradient(), mode, MODES (+31 more)

### Community 114 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.09
Nodes (38): templateService, blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), Dashboard (+30 more)

### Community 116 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (17): formatDate(), baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit (+9 more)

### Community 117 - "reka-ui"
Cohesion: 0.15
Nodes (14): lucide-vue-next, reka-ui, pick(), route, router, session, open, emit (+6 more)

### Community 118 - "useSession"
Cohesion: 0.24
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 119 - "session.ts"
Cohesion: 0.16
Nodes (16): pinia@^4.1.0, pinia, Accent, accentCss(), accentFor(), applyAccent(), theme, THEMES (+8 more)

### Community 120 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 121 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 122 - "views/types.ts"
Cohesion: 0.18
Nodes (12): props, shown, toggleColumn(), FilterValue, SavedView, SavedViewInput, ScreenCatalog, SortDirection (+4 more)

### Community 123 - "InvoiceDocument.vue"
Cohesion: 0.29
Nodes (7): dates, monthName(), payee, PAYER, props, STATUS_TONE, InvoiceItem

### Community 124 - "report-builder.test.ts"
Cohesion: 0.22
Nodes (5): catalog, me, report, result, service

### Community 125 - "AccountStatus.vue"
Cohesion: 0.14
Nodes (11): props, seats, company, error, hasSeats, load(), lost, networks (+3 more)

### Community 126 - "PasswordCard.vue"
Cohesion: 0.18
Nodes (11): busy, current, emit, mismatch, password, password2, ready, short (+3 more)

### Community 127 - "router.ts"
Cohesion: 0.11
Nodes (17): safeNext(), busy, email, error, next, password, route, router (+9 more)

### Community 128 - "cn"
Cohesion: 0.12
Nodes (15): panelItem(), railItem(), cn(), kindClass(), tab(), valueClass(), itemClass(), tab() (+7 more)

### Community 129 - "vue-router"
Cohesion: 0.18
Nodes (4): vue-router, RouteMeta, vue-router, Blank

### Community 130 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 131 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (33): UserRef, CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientOption, ManagerChange (+25 more)

### Community 132 - "errorText"
Cohesion: 0.25
Nodes (11): errorText(), load(), saveStart(), load(), save(), assign(), pageError(), assign() (+3 more)

### Community 133 - "alerts/types.ts"
Cohesion: 0.42
Nodes (7): Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 134 - "NativeSelect.vue"
Cohesion: 0.25
Nodes (6): compare, options, period, selected, model, Key

### Community 136 - "account/service.ts"
Cohesion: 0.50
Nodes (6): ApiKey, ApiKeyCreated, AuthSession, GoogleStatus, MfaSetup, RecoveryCodes

### Community 137 - "router.ts"
Cohesion: 0.33
Nodes (3): toasterTheme, router, routes

### Community 138 - "networks/rules.ts"
Cohesion: 0.38
Nodes (5): statusTone, McmCandidate, Network, NetworkStatus, SyncRun

### Community 139 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 140 - "Button.vue"
Cohesion: 0.50
Nodes (4): button, classes, Props, props

### Community 141 - "AccentCard.vue"
Cohesion: 0.40
Nodes (4): ACCENTS, accent, choose(), session

### Community 143 - "networkName"
Cohesion: 0.50
Nodes (4): networkName(), loadExtras(), netName(), networkOptions

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `contracts/service.ts`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `fail`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `ReportsView.vue`, `SchedulesView.vue`, `profileOk`, `views/rules.ts`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `PageHeader.vue`, `AlertsView.vue`, `ApiKeysCard.vue`, `ContractsView.vue`, `toNumber`, `SchedulesView.vue`, `InviteView.vue`, `RecoveryCodes.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `sites/rules.ts`, `GoalsView.vue`, `Button.vue`, `router.ts`, `NewDashboardDialog.vue`, `table.ts`, `Button.vue`, `SaveViewDialog.vue`, `ApiError`, `FieldsPanel.vue`, `MyCommissionView.vue`, `reports/rules.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `alerts/rules.ts`, `views/types.ts`, `InvoiceDocument.vue`, `AccountStatus.vue`, `PasswordCard.vue`, `router.ts`, `cn`, `AccountManagerCard.vue`, `errorText`, `NativeSelect.vue`, `AccentCard.vue`, `networkName`?**
  _High betweenness centrality (0.141) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050170068027210885 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `Pagination.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `ClientProfileForm.vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ReportsView.vue`, `SchedulesView.vue`, `package.json`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `PageHeader.vue`, `AlertsView.vue`, `ApiKeysCard.vue`, `ContractsView.vue`, `toNumber`, `SchedulesView.vue`, `InviteView.vue`, `RecoveryCodes.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `dashboards/rules.ts`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `ConfigPanel.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `events.ts`, `ClassifySitesDialog.vue`, `reports/types.ts`, `AddWidgetDialog.vue`, `GoalsView.vue`, `Button.vue`, `router.ts`, `NewDashboardDialog.vue`, `table.ts`, `Button.vue`, `SaveViewDialog.vue`, `ApiError`, `FieldsPanel.vue`, `MyCommissionView.vue`, `reports/rules.ts`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `drag.ts`, `InvoiceDocument.vue`, `report-builder.test.ts`, `AccountStatus.vue`, `PasswordCard.vue`, `router.ts`, `cn`, `vue-router`, `BarChart.vue`, `AccountManagerCard.vue`, `NativeSelect.vue`, `router.ts`, `Button.vue`, `AccentCard.vue`?**
  _High betweenness centrality (0.113) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `GoalTemplatesDialog.vue`, `ClientsResultsView.vue`, `SavedViewsBar.vue`, `ApiKeyDialog.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `SiteDetailView.vue`, `RolesPanel.vue`, `ResultsView.vue`, `NewGroupDialog.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `PageViewsView.vue`, `HomeView.vue`, `TeamCommissionsView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `NativeSelect.vue`, `fail`, `PeopleView.vue`, `i18n.ts`, `ProfileImageCard.vue`, `t`, `ReportsView.vue`, `SchedulesView.vue`, `clients/rules.ts`, `FiscalDataCard.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `ApiKeysCard.vue`, `ContractsView.vue`, `SchedulesView.vue`, `InviteView.vue`, `DashboardWidget.vue`, `MfaCard.vue`, `CurrencyCard.vue`, `ClientTeamsView.vue`, `Review Focus`, `RolesView.vue`, `RoleDialog.vue`, `vue-sonner`, `ServiceLineDialog.vue`, `SidebarRail.vue`, `TemplatesView.vue`, `InvoicesView.vue`, `errorToast`, `ClassifySitesDialog.vue`, `GoalsView.vue`, `Button.vue`, `router.ts`, `table.ts`, `ApiError`, `MyCommissionView.vue`, `AdjustmentDialog.vue`, `TemplateEditorView.vue`, `AlertDialog.vue`, `reka-ui`, `useSession`, `session.ts`, `AccountStatus.vue`, `PasswordCard.vue`, `router.ts`, `AccountManagerCard.vue`, `AccentCard.vue`?**
  _High betweenness centrality (0.080) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04878048780487805 - nodes in this community are weakly interconnected._