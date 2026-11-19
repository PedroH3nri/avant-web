# Graph Report - avant-web  (2026-11-19)

## Corpus Check
- 395 files · ~261,971 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 4684 nodes · 12216 edges · 187 communities (178 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 140 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4612f160`
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
- dashboards/types.ts
- steps
- vue-sonner
- SavedViewsBar.vue
- ApiKeysCard.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- RewardEditView.vue
- ClientsView.vue
- InvoiceView.vue
- ChecklistItemsView.vue
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- invoices/types.ts
- GroupsView.vue
- vue
- ClassifySitesDialog.vue
- TeamCommissionsView.vue
- compilerOptions
- ClientDocumentsCard.vue
- FacebookObjectView.vue
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- MyInvoicesView.vue
- vue
- ClientProfileForm.vue
- toNumber
- avant-web
- PeopleView.vue
- scripts
- metricColor
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
- avant-tag
- ClientsResultsView.vue
- InviteView.vue
- FacebookAccountDialog.vue
- GoalsView.vue
- ScheduleDialog.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- ClientNetworksView.vue
- index.ts
- ResetView.vue
- ChecklistsView.vue
- MfaCard.vue
- alerts/types.ts
- session.ts
- MyCommissionView.vue
- lib/types.ts
- RolesView.vue
- RoleDialog.vue
- CurrencyCard.vue
- schedules/rules.ts
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- cn
- ClientSitesView.vue
- AccountManagerCard.vue
- rewards/rules.ts
- ApiKeyDialog.vue
- InvoicesView.vue
- ad-tags.test.ts
- AlertDialog.vue
- FieldsPanel.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- loaders/rules.ts
- RewardMetricsView.vue
- GamRunView.vue
- LoginView.vue
- api.ts
- AddWidgetDialog.vue
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- alerts/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- loaders.test.ts
- ad_tags/types.ts
- checklists/rules.ts
- rewards/service.ts
- reports/rules.ts
- RevenueStatusBadge.vue
- gam_tools/types.ts
- Dialog.vue
- table.ts
- ChecklistNotesCard.vue
- i18n-plugin.ts
- PasswordCard.vue
- BarChart.vue
- NetworkReviewActions.vue
- NewTaskDialog.vue
- dashboards/rules.ts
- reports/types.ts
- PriceRuleView.vue
- events.ts
- PriceRuleSiteView.vue
- facebook/types.ts
- PayeeDialog.vue
- ChecklistView.vue
- Input.vue
- priorityLabel
- ChecklistItemDialog.vue
- TableState.vue
- price_rules/rules.ts
- LoaderEditView.vue
- AdTagInstallDialog.vue
- AdjustmentDialog.vue
- tasks/types.ts
- Key
- Field.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- errorToast
- price_rules/types.ts
- contracts/types.ts
- ClientNetworksCard.vue
- load
- PageBody.vue
- AdTagMetricsView.vue
- DashboardWidget.vue
- LoadersView.vue
- poll.ts
- GamRunView.vue
- AdTagPreview.vue
- lucide-vue-next
- schedules/types.ts
- PriceRuleSitesView.vue
- FakeSource
- tasks/rules.ts
- support-tasks.test.ts
- FiscalDataCard.vue
- loadMembers
- inviteTaken
- navigation.ts
- overrides
- vite.embed.config.ts
- vue-sonner
- SettingsView.vue
- LoaderPreview.vue
- SaveReportDialog.vue
- sites.test.ts
- errorText
- clients/rules.ts

## God Nodes (most connected - your core abstractions)
1. `t()` - 535 edges
2. `errorText()` - 330 edges
3. `vue` - 172 edges
4. `ApiError` - 124 edges
5. `lucide-vue-next` - 98 edges
6. `useSession` - 92 edges
7. `vue-sonner` - 89 edges
8. `vitest` - 61 edges
9. `toNumber()` - 60 edges
10. `vue-router` - 59 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ReportDraft`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `ChartType`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts
- `Task 3: Web — tipos, serviço e regras do construtor` --references--> `Visibility`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/types.ts

## Import Cycles
- None detected.

## Communities (187 total, 9 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (45): tn(), changeLines, splitEvent(), active, allRoles(), busy, canManage, canRoles (+37 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (46): emptyDefinition(), withLayout(), adding, apiMessage(), canManage, canTemplate, catalog, chooseMine() (+38 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.06
Nodes (49): builderState(), toInput(), toQuery(), withDimensions(), apiMessage(), askRemoveMetric(), busy, canManage (+41 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.06
Nodes (38): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 7: Web — modal de métrica personalizada e "Minhas métricas" (+30 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.11
Nodes (34): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+26 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (48): networkName(), adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign (+40 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.05
Nodes (33): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+25 more)

### Community 12 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (58): countryName(), dailySeries(), daysOf(), hourLabel(), hourlyItems(), peakHour(), shortDay(), presetRange() (+50 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.21
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.12
Nodes (16): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+8 more)

### Community 18 - "dependencies"
Cohesion: 0.10
Nodes (21): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+13 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.05
Nodes (41): pick(), metricOptions, ruleText(), options, transferOptions, ruleEnd(), setGoal(), busy (+33 more)

### Community 20 - "dashboards/types.ts"
Cohesion: 0.11
Nodes (26): dimensions, filters, periods, props, chosen, create(), emit, name (+18 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "vue-sonner"
Cohesion: 0.11
Nodes (21): amount, amountError, busy, chosen, description, emit, open, options (+13 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.08
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "ApiKeysCard.vue"
Cohesion: 0.09
Nodes (31): busy, canManage, created(), creating, keys, load(), loadError, page (+23 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (25): busy, canAssign, canManage, classifying, errorToast(), id, load(), loadError (+17 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.07
Nodes (38): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+30 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "RewardEditView.vue"
Cohesion: 0.04
Nodes (45): t(), greeting, adUnitNames(), adUnitHint, adUnitOptions, base, busy, buttonColorLabel() (+37 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (51): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople, clientNames (+43 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (25): invoicePdfUrl(), act(), backTo, busy, Confirm, confirm, confirmOpen, confirmText (+17 more)

### Community 31 - "ChecklistItemsView.vue"
Cohesion: 0.18
Nodes (14): checklistItemService, checklistService, CheckKind, ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistNote (+6 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (42): FacebookTab, model, props, TABS, accounts, canConnect, canManage, clientName() (+34 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.09
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

### Community 37 - "invoices/types.ts"
Cohesion: 0.24
Nodes (13): FiscalData, invoiceService, AvailableMonth, Invoice, InvoiceFilters, InvoiceItem, InvoiceItemKind, InvoiceReturn (+5 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.05
Nodes (45): broken, hue, initials, props, busy, create(), description, duplicate (+37 more)

### Community 39 - "vue"
Cohesion: 0.15
Nodes (22): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+14 more)

### Community 40 - "ClassifySitesDialog.vue"
Cohesion: 0.13
Nodes (21): lang, category, categoryOptions, changed, emit, keep, open, props (+13 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "ClientDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): setTabCompany(), fetchFile(), load(), overview, picker, picking, rows, send() (+32 more)

### Community 44 - "FacebookObjectView.vue"
Cohesion: 0.09
Nodes (35): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), campaignsPath(), CHANGE_KEYS, changeText(), facebookPath() (+27 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.06
Nodes (43): numbers, PAGE_SIZE, pageCount(), pageNumbers(), pageSlice(), shownRows, NO_COMPARISON, sameComparison() (+35 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.13
Nodes (19): awaiting, busy, Check, checks, code, done, dot(), failed (+11 more)

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

### Community 51 - "vue"
Cohesion: 0.09
Nodes (19): vue, props, seats, busy, confirm, load(), session, status (+11 more)

### Community 52 - "ClientProfileForm.vue"
Cohesion: 0.17
Nodes (11): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+3 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (65): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, change(), formatMetric(), toNumber(), metricText() (+57 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "metricColor"
Cohesion: 0.20
Nodes (16): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+8 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "ProfileImageCard.vue"
Cohesion: 0.10
Nodes (23): box, failed, initial, props, busy, drop(), input, pick() (+15 more)

### Community 61 - "ClientNotesCard.vue"
Cohesion: 0.12
Nodes (21): add(), adding, deleteOpen, deleting, draft, editing, editOpen, editText (+13 more)

### Community 65 - "ReportsView.vue"
Cohesion: 0.06
Nodes (42): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+34 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.09
Nodes (23): allOptions(), busy, canManage, confirmRemove(), dashboards, editing, formOpen, load() (+15 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ClientsResultsView.vue"
Cohesion: 0.08
Nodes (39): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+31 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "FacebookAccountDialog.vue"
Cohesion: 0.08
Nodes (30): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+22 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.04
Nodes (76): busy, canManage, changed, current, load(), monthNames, months, save() (+68 more)

### Community 74 - "ScheduleDialog.vue"
Cohesion: 0.12
Nodes (15): body, busy, emit, form, frequencyOptions, itemOptions, monthDayOptions, open (+7 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.05
Nodes (38): busy, canCreate, canDelete, canUpdate, chosenNetwork, client, clientOptions, clients (+30 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (64): model, toPayload(), absentUnits, armed, base, blocking, blocks, busy (+56 more)

### Community 79 - "ClientNetworksView.vue"
Cohesion: 0.16
Nodes (13): awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall, page (+5 more)

### Community 80 - "index.ts"
Cohesion: 0.10
Nodes (17): choose(), langs, session, open, session, auditText(), chooseLang(), fill() (+9 more)

### Community 81 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (17): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+9 more)

### Community 84 - "alerts/types.ts"
Cohesion: 0.36
Nodes (8): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview, SavedQuery

### Community 85 - "session.ts"
Cohesion: 0.10
Nodes (23): pinia, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme(), swatchColor() (+15 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.18
Nodes (12): STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError, minus() (+4 more)

### Community 87 - "lib/types.ts"
Cohesion: 0.11
Nodes (31): api, Query, CompanyRef, Items, Page, AdTagService, costService, clientService (+23 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.06
Nodes (47): model, Localized, SiteScope, busy, category, chipClass(), chosen, emit (+39 more)

### Community 90 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 91 - "schedules/rules.ts"
Cohesion: 0.17
Nodes (15): hourOptions, zoneOptions, browserTimezone(), HOURS, hourText(), MONTH_DAYS, SCHEDULE_FREQUENCIES, ScheduleForm (+7 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (41): saveFile(), defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen (+33 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "cn"
Cohesion: 0.09
Nodes (19): props, up, panelItem(), railItem(), model, first, last, page (+11 more)

### Community 96 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (34): UserRef, CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption (+26 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (31): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+23 more)

### Community 99 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (27): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+19 more)

### Community 100 - "InvoicesView.vue"
Cohesion: 0.08
Nodes (21): months, months, monthOptions(), months, columnLabel(), COLUMNS, DEFAULT_VIEW, invoices (+13 more)

### Community 101 - "ad-tags.test.ts"
Cohesion: 0.14
Nodes (15): adTagsPath(), blankSettings(), chosenDay(), newBlock(), settingsProblem(), tagStatus(), adTagService(), AdTagDraft (+7 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (51): dropPercent(), percentText(), priceRulePermission(), base, busy, canManage, changeStatus(), currency (+43 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.07
Nodes (28): childLevel(), accountId, accountOptions, accounts, base, clientOptions, clients, columns (+20 more)

### Community 106 - "loaders/rules.ts"
Cohesion: 0.14
Nodes (15): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, inputOf(), LIMITS, MAX_SECONDS (+7 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.09
Nodes (29): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+21 more)

### Community 108 - "GamRunView.vue"
Cohesion: 0.14
Nodes (14): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), gamToolService, done (+6 more)

### Community 109 - "LoginView.vue"
Cohesion: 0.09
Nodes (21): vue-router, vue-router, RouteMeta, ApiError, safeNext(), busy, email, error (+13 more)

### Community 110 - "api.ts"
Cohesion: 0.25
Nodes (13): baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), readCookie(), request(), RequestOptions (+5 more)

### Community 111 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (16): emit, kind, kinds, metric, metrics, open, props, ready (+8 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.09
Nodes (21): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+13 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), apiMessage(), audience, AUDIENCES, audienceText(), busy, counts (+11 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.10
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), DashboardDefinition (+22 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.10
Nodes (20): answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters, languageText() (+12 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "loaders.test.ts"
Cohesion: 0.22
Nodes (11): loadersPath(), PreviewLoader, loaderService(), LoaderService, Loader, LoaderAdblock, LoaderInput, LoaderOption (+3 more)

### Community 120 - "ad_tags/types.ts"
Cohesion: 0.18
Nodes (10): AdTag, AdTagDevice, AdTagEdge, AdTagHealthDay, AdTagRuleMode, AdTagSettings, AdTagSide, AdTagSiteOption (+2 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.19
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), RowState, rowState() (+4 more)

### Community 122 - "rewards/service.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "reports/rules.ts"
Cohesion: 0.05
Nodes (69): loadDraft(), emit, missingDates, options, props, setDate(), setMode(), addFilter() (+61 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.35
Nodes (9): REPORT_CURRENCY, detail, props, changeText(), perDayText(), TREND_CLASS, RevenueStatus, RevenueTrend (+1 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.16
Nodes (15): GamFormat, GamRunState, GamStepState, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 126 - "Dialog.vue"
Cohesion: 0.10
Nodes (19): open, open, busy, canManage, description, editing, editingOpen, load() (+11 more)

### Community 127 - "table.ts"
Cohesion: 0.07
Nodes (29): td, th, events, load(), loadError, open, page, pages (+21 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.18
Nodes (13): auditActions, dict, errors, fallbackError, COLUMN, column(), Lang, LanguageMessages (+5 more)

### Community 130 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "NetworkReviewActions.vue"
Cohesion: 0.39
Nodes (7): busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 133 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 134 - "dashboards/rules.ts"
Cohesion: 0.12
Nodes (35): add(), ACCOUNT_SIZE, accountWidget(), Box, CHART_SIZE, clamp(), cleanFilters(), compactLayout() (+27 more)

### Community 135 - "reports/types.ts"
Cohesion: 0.05
Nodes (52): Task 3: Web — tipos, serviço e regras do construtor, vitest, @vue/test-utils, compare, options, period, selected, PERIOD_PRESETS (+44 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (53): moneyText(), nearestTier(), tierOptions(), ladderText(), maxOptions, minOptions, openStart(), startOptions (+45 more)

### Community 137 - "events.ts"
Cohesion: 0.18
Nodes (13): close(), EventMap, GamToolRunUpdated, Handler, handlers, listen(), listening, MetricsUpdated (+5 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (57): model, cascadeFunnel(), cascadeLadder(), gainQuery(), gainSeries(), modelChoices(), recommendedModel(), siteStatus() (+49 more)

### Community 139 - "facebook/types.ts"
Cohesion: 0.09
Nodes (29): changes, load(), loadError, origin, originOptions, page, pages, props (+21 more)

### Community 140 - "PayeeDialog.vue"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.15
Nodes (16): ROW_TONE, splitRows(), checking, checklist, checklistId, checkNow(), fail(), groups (+8 more)

### Community 142 - "Input.vue"
Cohesion: 0.13
Nodes (13): button, classes, Props, props, choices, emit, invalid, name (+5 more)

### Community 143 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.16
Nodes (15): active, emit, kind, kindOptions, name, open, props, save() (+7 more)

### Community 145 - "TableState.vue"
Cohesion: 0.14
Nodes (14): alerts, emit, load(), loadError, markRead(), page, pages, props (+6 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (34): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+26 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.06
Nodes (33): formProblems(), previewDomain(), previewLoader(), withTemplate(), base, busy, clientOptions, clients (+25 more)

### Community 148 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 149 - "AdjustmentDialog.vue"
Cohesion: 0.14
Nodes (18): amount, amountError, busy, emit, open, props, reason, reasonTouched (+10 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "Key"
Cohesion: 0.09
Nodes (31): Key, addPath(), emit, icon, ICONS, name, pages, pathText (+23 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.07
Nodes (32): adTagPermission(), canManage, base, busy, canManage, columns, create(), groups (+24 more)

### Community 156 - "errorToast"
Cohesion: 0.32
Nodes (8): cancel(), errorToast(), load(), loadInvites(), patchMember(), resend(), sendInvite(), showInvites()

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "contracts/types.ts"
Cohesion: 0.16
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "load"
Cohesion: 0.29
Nodes (7): applyView(), choose(), confirmEnd(), confirmRemove(), create(), load(), loadContracts()

### Community 161 - "PageBody.vue"
Cohesion: 0.14
Nodes (10): dot, canManage, dialogOpen, editing, items, load(), loadError, move() (+2 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.09
Nodes (25): formatDate(), healthSummary(), share(), AdTagHealth, base, decimal, filled, health (+17 more)

### Community 163 - "DashboardWidget.vue"
Cohesion: 0.11
Nodes (24): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+16 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.10
Nodes (21): ADBLOCK_SHORT, loaderPermission(), STYLE_LABEL, canManage, base, canManage, columns, load() (+13 more)

### Community 165 - "poll.ts"
Cohesion: 0.47
Nodes (4): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS

### Community 166 - "GamRunView.vue"
Cohesion: 0.10
Nodes (23): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+15 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.11
Nodes (18): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+10 more)

### Community 168 - "lucide-vue-next"
Cohesion: 0.12
Nodes (17): lucide-vue-next, reka-ui, route, router, session, model, dates, monthName() (+9 more)

### Community 169 - "schedules/types.ts"
Cohesion: 0.60
Nodes (4): Schedule, ScheduleDelivery, ScheduleInput, SchedulePage

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 172 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MAX

### Community 173 - "support-tasks.test.ts"
Cohesion: 0.25
Nodes (6): taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "FiscalDataCard.vue"
Cohesion: 0.18
Nodes (14): locale, busy, complete, documentLabel, form, load(), loaded, options (+6 more)

### Community 175 - "loadMembers"
Cohesion: 0.50
Nodes (4): loadMembers(), membersCall, removeMember(), searchMembers

### Community 178 - "navigation.ts"
Cohesion: 0.24
Nodes (12): reconnectEvents(), linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "vue-sonner"
Cohesion: 0.10
Nodes (17): vue-sonner, toasterTheme, LINES, showBootFailure(), startLang(), announceCompany(), CompanyMessage, onCompanyAnnounced() (+9 more)

### Community 183 - "SettingsView.vue"
Cohesion: 0.13
Nodes (14): companyService, CompanyDetail, CompanyFiscal, canEdit, company, isGroone, load(), loadError (+6 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "SaveReportDialog.vue"
Cohesion: 0.15
Nodes (11): choices, description, emit, invalid, name, open, props, roleIds (+3 more)

### Community 187 - "sites.test.ts"
Cohesion: 0.33
Nodes (4): approval(), tree(), AdUnit, rows

### Community 188 - "errorText"
Cohesion: 0.11
Nodes (21): pick(), errorText(), choose(), end(), ending, endingOthers, endOthers(), fail() (+13 more)

### Community 189 - "clients/rules.ts"
Cohesion: 0.14
Nodes (17): emptyProfile(), NOTE_MAX, NOTE_MIN, profileBody(), profileInput(), profileOk(), STAFF_STATUSES, STATUS_TONE (+9 more)

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `RewardEditView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `dashboards/types.ts`, `vue-sonner`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `GroupsView.vue`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookObjectView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `vue`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `metricColor`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `ScheduleDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `schedules/rules.ts`, `GamToolsView.vue`, `SidebarRail.vue`, `cn`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiKeyDialog.vue`, `InvoicesView.vue`, `ad-tags.test.ts`, `AlertDialog.vue`, `FieldsPanel.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `loaders/rules.ts`, `RewardMetricsView.vue`, `GamRunView.vue`, `LoginView.vue`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `RewardLeadsCard.vue`, `checklists/rules.ts`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `Dialog.vue`, `table.ts`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `reports/types.ts`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `PayeeDialog.vue`, `ChecklistView.vue`, `Input.vue`, `priorityLabel`, `ChecklistItemDialog.vue`, `TableState.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `Key`, `Field.vue`, `AdTagsView.vue`, `errorToast`, `contracts/types.ts`, `ClientNetworksCard.vue`, `load`, `PageBody.vue`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `GamRunView.vue`, `AdTagPreview.vue`, `lucide-vue-next`, `PriceRuleSitesView.vue`, `tasks/rules.ts`, `FiscalDataCard.vue`, `loadMembers`, `navigation.ts`, `vue-sonner`, `SettingsView.vue`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `sites.test.ts`, `errorText`, `clients/rules.ts`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04931972789115646 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `PerformanceView.vue`, `clean-code.mjs`, `dependencies`, `StaffView.vue`, `dashboards/types.ts`, `vue-sonner`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `GroupsView.vue`, `vue`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookObjectView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `ClientProfileForm.vue`, `toNumber`, `PeopleView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ClientsResultsView.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `ScheduleDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `cn`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `ApiKeyDialog.vue`, `InvoicesView.vue`, `AlertDialog.vue`, `FieldsPanel.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `GamRunView.vue`, `LoginView.vue`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `reports/rules.ts`, `RevenueStatusBadge.vue`, `Dialog.vue`, `table.ts`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `BarChart.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `reports/types.ts`, `PriceRuleView.vue`, `events.ts`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `PayeeDialog.vue`, `ChecklistView.vue`, `Input.vue`, `ChecklistItemDialog.vue`, `TableState.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `Key`, `Field.vue`, `AdTagsView.vue`, `ClientNetworksCard.vue`, `PageBody.vue`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `AdTagPreview.vue`, `lucide-vue-next`, `PriceRuleSitesView.vue`, `FiscalDataCard.vue`, `navigation.ts`, `vue-sonner`, `SettingsView.vue`, `LoaderPreview.vue`, `SaveReportDialog.vue`, `errorText`?**
  _High betweenness centrality (0.100) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05142857142857143 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `PerformanceView.vue`, `StaffView.vue`, `vue-sonner`, `SavedViewsBar.vue`, `ApiKeysCard.vue`, `SiteDetailView.vue`, `CostsView.vue`, `RewardEditView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `GroupsView.vue`, `vue`, `ClassifySitesDialog.vue`, `TeamCommissionsView.vue`, `ClientDocumentsCard.vue`, `FacebookObjectView.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `MyInvoicesView.vue`, `vue`, `PeopleView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `FacebookAccountDialog.vue`, `GoalsView.vue`, `ScheduleDialog.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `CurrencyCard.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiKeyDialog.vue`, `InvoicesView.vue`, `AlertDialog.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `loaders/rules.ts`, `RewardMetricsView.vue`, `GamRunView.vue`, `LoginView.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `Dialog.vue`, `table.ts`, `ChecklistNotesCard.vue`, `PasswordCard.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `PayeeDialog.vue`, `ChecklistView.vue`, `ChecklistItemDialog.vue`, `TableState.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `AdTagsView.vue`, `errorToast`, `ClientNetworksCard.vue`, `load`, `PageBody.vue`, `AdTagMetricsView.vue`, `DashboardWidget.vue`, `LoadersView.vue`, `lucide-vue-next`, `PriceRuleSitesView.vue`, `FiscalDataCard.vue`, `navigation.ts`, `vue-sonner`, `SettingsView.vue`, `clients/rules.ts`?**
  _High betweenness centrality (0.075) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._