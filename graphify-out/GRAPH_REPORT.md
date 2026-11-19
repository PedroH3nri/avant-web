# Graph Report - avant-web  (2026-11-19)

## Corpus Check
- 421 files · ~290,596 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5167 nodes · 13504 edges · 198 communities (191 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 153 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7180f58f`
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
- metricColor
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- @vueuse/core
- StaffView.vue
- Key
- steps
- ServiceLineDialog.vue
- SavedViewsBar.vue
- GoogleAdsView.vue
- SiteDetailView.vue
- CostsView.vue
- Arquitetura do MVP do Avant
- t
- ClientsView.vue
- InvoiceView.vue
- checklists/types.ts
- FacebookView.vue
- ResultsView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- PerformanceView.vue
- GroupsView.vue
- DashboardGrid.vue
- FacebookCreateView.vue
- TeamCommissionsView.vue
- compilerOptions
- CompanyDocumentsCard.vue
- FacebookJobDialog.vue
- ReportView.vue
- ConnectView.vue
- Avant: conexão com o GAM
- NetworksView.vue
- Avant: repositório e plano do MVP
- facebook/rules.ts
- pick
- clients/rules.ts
- toNumber
- avant-web
- PeopleView.vue
- scripts
- FacebookEditView.vue
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
- Field.vue
- GoalsView.vue
- CompanyGoalCard.vue
- AlertsView.vue
- TasksView.vue
- ContractsView.vue
- AdTagEditView.vue
- ClientNetworksView.vue
- index.ts
- ResetView.vue
- ChecklistsView.vue
- MfaCard.vue
- DataTable.vue
- session.ts
- MyCommissionView.vue
- api.ts
- RolesView.vue
- RoleDialog.vue
- locale
- GoalTemplatesDialog.vue
- GamToolsView.vue
- SidebarRail.vue
- Avant: grupos na Empresa e imagem da Empresa
- TeamTabs.vue
- ClientSitesView.vue
- AccountManagerCard.vue
- rewards/rules.ts
- LoadError.vue
- InvoicesView.vue
- reports/rules.ts
- AlertDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- GroupedBarChart.vue
- RewardMetricsView.vue
- vue
- ApiError
- router.ts
- AddWidgetDialog.vue
- updates
- RewardsView.vue
- TemplatesView.vue
- TemplateEditorView.vue
- alerts/rules.ts
- RewardLeadsCard.vue
- Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)
- google_ads/types.ts
- google_ads/rules.ts
- checklists/rules.ts
- rewards/types.ts
- dashboards/types.ts
- RevenueStatusBadge.vue
- gam_tools/types.ts
- InvoiceServicesView.vue
- FacebookHistoryPanel.vue
- ChecklistNotesCard.vue
- i18n-plugin.ts
- ClientTeamsView.vue
- BarChart.vue
- NetworkReviewActions.vue
- NewTaskDialog.vue
- dashboards/rules.ts
- GoogleAdsCampaignsView.vue
- PriceRuleView.vue
- events.ts
- PriceRuleSiteView.vue
- facebook/types.ts
- errorText
- ChecklistView.vue
- GoogleAdsObjectView.vue
- priorityLabel
- ChecklistItemDialog.vue
- ApiKeyDialog.vue
- price_rules/rules.ts
- LoaderEditView.vue
- AdTagInstallDialog.vue
- AdjustmentDialog.vue
- tasks/types.ts
- ad_tags/rules.ts
- MetricStylePopover.vue
- virtual-i18n.d.ts
- AdTagsView.vue
- GamRunView.vue
- views/rules.ts
- price_rules/types.ts
- Pagination.vue
- ClientNetworksCard.vue
- Review Focus
- GoogleAdsAccountDialog.vue
- AdTagMetricsView.vue
- costs/rules.ts
- LoadersView.vue
- ClientDocumentsCard.vue
- gam_tools/rules.ts
- AdTagPreview.vue
- lucide-vue-next
- PasswordCard.vue
- PriceRuleSitesView.vue
- sites/rules.ts
- tasks/rules.ts
- lang
- SettingsView.vue
- drag.ts
- costs/types.ts
- Badge.vue
- useSession
- FiscalDataCard.vue
- overrides
- vite.embed.config.ts
- GoogleAdsAlertsPanel.vue
- vue-sonner
- LoaderPreview.vue
- Button.vue
- Input.vue
- Status.vue
- AccountStatus.vue
- GoogleAdsHistoryPanel.vue
- PayeeDialog.vue
- ClassifySitesDialog.vue
- errorToast
- InvoiceDocument.vue
- networkName
- PageHeader.vue
- ColorField.vue
- SeatBar.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 590 edges
2. `errorText()` - 370 edges
3. `vue` - 191 edges
4. `ApiError` - 138 edges
5. `lucide-vue-next` - 110 edges
6. `vue-sonner` - 97 edges
7. `useSession` - 95 edges
8. `th` - 65 edges
9. `td` - 65 edges
10. `vue-router` - 64 edges

## Surprising Connections (you probably didn't know these)
- `Painel` --references--> `errorText()`  [INFERRED]
  docs/superpowers/specs/2026-10-28-construtor-de-relatorios-design.md → src/lib/i18n/index.ts
- `Task 6: Web — construtor` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 7: Web — modal de métrica personalizada e "Minhas métricas"` --references--> `errorText()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/i18n/index.ts
- `Task 4: Web — cores das séries e gráficos do construtor` --references--> `shortDay()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/lib/metrics.ts
- `Task 6: Web — construtor` --references--> `toInput()`  [INFERRED]
  docs/superpowers/plans/2026-10-28-construtor-de-relatorios.md → src/modules/reports/rules.ts

## Import Cycles
- None detected.

## Communities (198 total, 7 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (46): tn(), changeLines, activeByRole(), changeNotes(), personGoalAmount(), active, allRoles(), busy (+38 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (47): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+39 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (55): audit, auditChanged(), auditPage, auditPages, auditTotal, candidates, canDocuments, canManage (+47 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (60): loadDraft(), BuilderState, builderState(), canExport(), draftOf(), emptyDraft(), fromQuery(), fromReport() (+52 more)

### Community 4 - "MemberView.vue"
Cohesion: 0.07
Nodes (34): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeGroups, canSeeSites, catalog (+26 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (26): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+18 more)

### Community 6 - "CustomMetricDialog.vue"
Cohesion: 0.07
Nodes (34): Task 7: Web — modal de métrica personalizada e "Minhas métricas", busy, canSave, check, complete(), cursor, decimals, emit (+26 more)

### Community 7 - "GroupView.vue"
Cohesion: 0.08
Nodes (29): adding, addMember(), busy, canManage, deleteDesc, deleteGroup(), deleting, errorToast() (+21 more)

### Community 8 - "RuleDialog.vue"
Cohesion: 0.10
Nodes (37): busy, canTransfer, choice(), duplicate, emit, errors, form, open (+29 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (36): busy, canEditCompany, canInvite, canManage, canRoles, company, email, emailOk (+28 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (44): adding, addSite(), allChosen, allSites, archived, assignedOnly, canAssign, canConnect (+36 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (17): areaPaths, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+9 more)

### Community 12 - "metricColor"
Cohesion: 0.20
Nodes (16): colorVar(), FALLBACK, METRIC_COLOR, metricColor(), metricColors(), dayLabel, dayOptions, chart (+8 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (22): Brand mark, Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts (+14 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.14
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.12
Nodes (16): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+8 more)

### Community 18 - "@vueuse/core"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, reka-ui@^2.11.0 (+11 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "Key"
Cohesion: 0.04
Nodes (84): model, auditActions, dict, errors, fallbackError, Key, ad, blankCard() (+76 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.10
Nodes (30): FiscalData, amount, amountError, busy, chosen, description, emit, open (+22 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.07
Nodes (31): active, activeView, busy, canUpdate, choose(), dialogOpen, dirty, editing (+23 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (40): accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions, clients (+32 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.08
Nodes (26): amountText(), busy, canManage, check, checkFormula, confirmRemove(), costs, currencies (+18 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "t"
Cohesion: 0.05
Nodes (43): t(), adUnitNames(), adUnitHint, adUnitOptions, base, busy, buttonColorLabel(), chooseImage() (+35 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (54): emptyProfile(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage, canSearchPeople (+46 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "checklists/types.ts"
Cohesion: 0.20
Nodes (10): ChecklistFilters, ChecklistItemInput, ChecklistMonth, ChecklistNote, ChecklistPerson, ChecklistProgress, ChecklistState, CheckOutcome (+2 more)

### Community 32 - "FacebookView.vue"
Cohesion: 0.05
Nodes (38): accounts, canConnect, canManage, clientName(), clientOptions, clients, companyId, countUnread() (+30 more)

### Community 33 - "ResultsView.vue"
Cohesion: 0.10
Nodes (26): monthChoices, margin(), monthIso(), negative(), RESULT_PERIODS, ResultPeriod, resultRange(), CompanyResults (+18 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "PerformanceView.vue"
Cohesion: 0.05
Nodes (70): props, up, compare, options, period, selected, change(), countryName() (+62 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (23): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+15 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.10
Nodes (28): blankAd(), blankAdset(), blankDraft(), MAX_ADSETS, account, accounts, adCount, addAd() (+20 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.12
Nodes (24): load(), overview, picker, picking, rows, send(), sending, props (+16 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.14
Nodes (19): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+11 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.06
Nodes (42): PAGE_SIZE, pageCount(), pageSlice(), shownRows, NO_COMPARISON, sameComparison(), savedPeriod(), ThumbShape (+34 more)

### Community 46 - "ConnectView.vue"
Cohesion: 0.08
Nodes (28): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS, McmCandidate, Network, NetworkStatus, NetworkSummary (+20 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "NetworksView.vue"
Cohesion: 0.08
Nodes (28): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+20 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "facebook/rules.ts"
Cohesion: 0.07
Nodes (41): budgetText(), decisions, loadError, page, pages, props, reason(), total (+33 more)

### Community 51 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.08
Nodes (26): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+18 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (67): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, formatMetric(), toNumber(), metricText(), valueText() (+59 more)

### Community 54 - "avant-web"
Cohesion: 0.25
Nodes (7): avant-web, Desenvolvimento, Estrutura, Imagem, Regras de tela, Stack, tag.js e reward.js

### Community 55 - "PeopleView.vue"
Cohesion: 0.12
Nodes (19): Action, busy, confirm(), enable(), fail(), firstPage(), loadError, open (+11 more)

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "FacebookEditView.vue"
Cohesion: 0.10
Nodes (20): objectiveOf(), ad, adset, detail, edit, externalId, failure, following (+12 more)

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
Nodes (42): exportUrl(), download(), busy, canManage, catalog, counts, download(), duplicate() (+34 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (30): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+22 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ClientsResultsView.vue"
Cohesion: 0.11
Nodes (17): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, money() (+9 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "Field.vue"
Cohesion: 0.07
Nodes (33): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+25 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.06
Nodes (39): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+31 more)

### Community 74 - "CompanyGoalCard.vue"
Cohesion: 0.09
Nodes (31): busy, canManage, changed, current, load(), monthNames, months, save() (+23 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (27): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+19 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (55): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+47 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "ClientNetworksView.vue"
Cohesion: 0.16
Nodes (13): awaitingOnly, canAssign, firstPage(), load(), loadError, networks, networksCall, page (+5 more)

### Community 80 - "index.ts"
Cohesion: 0.07
Nodes (27): choose(), langs, session, open, session, LINES, showBootFailure(), auditText() (+19 more)

### Community 81 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.10
Nodes (19): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+11 more)

### Community 84 - "DataTable.vue"
Cohesion: 0.16
Nodes (16): events, load(), loadError, open, page, pages, props, total (+8 more)

### Community 85 - "session.ts"
Cohesion: 0.07
Nodes (24): pinia, vitest, vue-router, @vue/test-utils, vue-router, RouteMeta, Me, Theme (+16 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 87 - "api.ts"
Cohesion: 0.13
Nodes (29): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+21 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (35): Localized, SiteScope, busy, category, chipClass(), chosen, emit, groups (+27 more)

### Community 90 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.07
Nodes (39): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+31 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.13
Nodes (16): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+8 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "TeamTabs.vue"
Cohesion: 0.09
Nodes (14): FacebookTab, model, props, TABS, GoogleAdsTab, model, props, TABS (+6 more)

### Community 96 - "ClientSitesView.vue"
Cohesion: 0.15
Nodes (13): latestCall(), canSeeChecklists, firstPage(), load(), loadError, page, pages, searchSites (+5 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.08
Nodes (34): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+26 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (31): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+23 more)

### Community 99 - "LoadError.vue"
Cohesion: 0.07
Nodes (40): UserRef, busy, canManage, created(), creating, keys, load(), loadError (+32 more)

### Community 100 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 101 - "reports/rules.ts"
Cohesion: 0.05
Nodes (60): Task 3: Web — tipos, serviço e regras do construtor, Lang, emit, missingDates, options, props, setDate(), setMode() (+52 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (21): monthKey(), available, chosen, create(), createBusy, createMonth, creating, editingPayee (+13 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (51): dropPercent(), percentText(), priceRulePermission(), base, busy, canManage, changeStatus(), currency (+43 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.05
Nodes (36): childLevel(), periodRange(), accountId, accountOptions, accounts, allSelected, base, canManage (+28 more)

### Community 106 - "GroupedBarChart.vue"
Cohesion: 0.11
Nodes (16): BarSeries, barWidth, box, chartWidth, group, hovered, labelStep, padding (+8 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "vue"
Cohesion: 0.05
Nodes (42): vue, model, alerts, emit, load(), loadError, markRead(), page (+34 more)

### Community 109 - "ApiError"
Cohesion: 0.11
Nodes (18): ApiError, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 110 - "router.ts"
Cohesion: 0.18
Nodes (9): setCompanyChangedHandler(), setTabCompany(), setUnauthorizedHandler(), announceCompany(), CompanyMessage, onCompanyAnnounced(), followOtherTab(), routes (+1 more)

### Community 111 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.09
Nodes (21): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+13 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.12
Nodes (20): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+12 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+22 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.18
Nodes (18): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+10 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.09
Nodes (22): saveFile(), answer, answerOptions, busy, columns, confirmRemove(), exportLeads(), filters (+14 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "google_ads/types.ts"
Cohesion: 0.09
Nodes (28): busy, chosen, daily, emit, monthly, open, props, save() (+20 more)

### Community 120 - "google_ads/rules.ts"
Cohesion: 0.09
Nodes (27): PERIODS, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), campaignsPath(), CHANGE_KEYS (+19 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.19
Nodes (12): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MAX, progressPercent(), ROW_TONE, RowState (+4 more)

### Community 122 - "rewards/types.ts"
Cohesion: 0.15
Nodes (12): RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest, RewardMetrics (+4 more)

### Community 123 - "dashboards/types.ts"
Cohesion: 0.18
Nodes (18): chosen, create(), emit, name, open, templates, Dashboard, DashboardFilters (+10 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.16
Nodes (15): GamFormat, GamRunState, GamStepState, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.12
Nodes (17): busy, canManage, description, editing, editingOpen, load(), loadError, page (+9 more)

### Community 127 - "FacebookHistoryPanel.vue"
Cohesion: 0.17
Nodes (12): changes, load(), loadError, origin, originOptions, page, pages, props (+4 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.13
Nodes (18): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+10 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.29
Nodes (9): COLUMN, column(), Lang, LanguageMessages, languageMessages(), Source, Texts, i18nByLanguage() (+1 more)

### Community 130 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

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
Cohesion: 0.10
Nodes (28): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+20 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.07
Nodes (28): childLevel(), accountId, accountOptions, accounts, clientOptions, clients, columns, companyId (+20 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (53): moneyText(), nearestTier(), tierOptions(), ladderText(), maxOptions, minOptions, openStart(), startOptions (+45 more)

### Community 137 - "events.ts"
Cohesion: 0.11
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+8 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (56): cascadeFunnel(), cascadeLadder(), gainQuery(), gainSeries(), modelChoices(), recommendedModel(), siteStatus(), funnel (+48 more)

### Community 139 - "facebook/types.ts"
Cohesion: 0.08
Nodes (34): failure, left, load(), loading, model, options, props, SEARCHED (+26 more)

### Community 140 - "errorText"
Cohesion: 0.06
Nodes (43): errorText(), current, dirty, elsewhere, emit, error, kind, parsed (+35 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.14
Nodes (17): personName(), rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow(), fail() (+9 more)

### Community 142 - "GoogleAdsObjectView.vue"
Cohesion: 0.09
Nodes (24): td, th, detailKey, props, matchKey(), GoogleAdsTerm, base, child (+16 more)

### Community 143 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.15
Nodes (16): active, emit, kind, kindOptions, name, open, props, save() (+8 more)

### Community 145 - "ApiKeyDialog.vue"
Cohesion: 0.08
Nodes (27): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+19 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (34): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, CascadePoint, cascadePoints(), CascadeSeries, CascadeStep (+26 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (61): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+53 more)

### Community 148 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 149 - "AdjustmentDialog.vue"
Cohesion: 0.20
Nodes (13): amount, amountError, busy, emit, open, props, reason, reasonTouched (+5 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (50): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+42 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.17
Nodes (15): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+7 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (33): adTagPermission(), AdTagSiteOption, canManage, base, busy, canManage, columns, create() (+25 more)

### Community 155 - "GamRunView.vue"
Cohesion: 0.12
Nodes (16): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), gamToolService (+8 more)

### Community 156 - "views/rules.ts"
Cohesion: 0.15
Nodes (23): applyView(), current, sortOptions, applyView(), current, rows, sortOptions, current (+15 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "Pagination.vue"
Cohesion: 0.25
Nodes (6): first, last, numbers, page, props, pageNumbers()

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 161 - "GoogleAdsAccountDialog.vue"
Cohesion: 0.12
Nodes (16): model, busy, daily, emit, monthly, onLimit, onLimitOptions, open (+8 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.09
Nodes (26): formatDate(), healthSummary(), share(), unitName(), dayHint, base, decimal, filled (+18 more)

### Community 163 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.11
Nodes (18): ADBLOCK_SHORT, STYLE_LABEL, base, columns, load(), loadError, loaders, page (+10 more)

### Community 165 - "ClientDocumentsCard.vue"
Cohesion: 0.18
Nodes (15): fetchFile(), download(), approve(), busy, downloadFile(), emit, fail(), load() (+7 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (21): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+13 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "lucide-vue-next"
Cohesion: 0.10
Nodes (27): lucide-vue-next, reka-ui, panelItem(), railItem(), open, model, cn(), kindClass() (+19 more)

### Community 169 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "sites/rules.ts"
Cohesion: 0.21
Nodes (12): approval(), KEEP, NONE, SITE_CATEGORIES, Tone, AdUnit, Site, SiteCategory (+4 more)

### Community 172 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 173 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "SettingsView.vue"
Cohesion: 0.15
Nodes (11): canEdit, company, isGroone, load(), loadError, name, nameInvalid, save() (+3 more)

### Community 175 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 176 - "costs/types.ts"
Cohesion: 0.33
Nodes (5): Cost, CostInput, CostKind, FormulaCheck, CostLine

### Community 177 - "Badge.vue"
Cohesion: 0.11
Nodes (14): box, failed, initial, props, pick(), route, router, session (+6 more)

### Community 178 - "useSession"
Cohesion: 0.24
Nodes (12): linkActive(), NAV_GROUPS, NavGroup, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups() (+4 more)

### Community 179 - "FiscalDataCard.vue"
Cohesion: 0.19
Nodes (13): busy, complete, documentLabel, form, load(), loaded, options, save() (+5 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 183 - "vue-sonner"
Cohesion: 0.11
Nodes (22): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+14 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Button.vue"
Cohesion: 0.12
Nodes (14): open, button, classes, Props, props, choices, emit, invalid (+6 more)

### Community 186 - "Input.vue"
Cohesion: 0.13
Nodes (12): model, choices, description, emit, invalid, name, open, props (+4 more)

### Community 187 - "Status.vue"
Cohesion: 0.13
Nodes (12): dot, checklistItemService, ChecklistItem, canManage, dialogOpen, editing, items, load() (+4 more)

### Community 188 - "AccountStatus.vue"
Cohesion: 0.20
Nodes (11): companyService, CompanyDetail, CompanyFiscal, company, error, hasSeats, load(), lost (+3 more)

### Community 189 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.15
Nodes (13): changes, load(), loadError, origin, originOptions, page, pages, props (+5 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.16
Nodes (12): busy, complete, documentLabel, emit, form, open, options, props (+4 more)

### Community 191 - "ClassifySitesDialog.vue"
Cohesion: 0.18
Nodes (13): category, changed, emit, keep, open, props, responsible, responsibleOptions (+5 more)

### Community 192 - "errorToast"
Cohesion: 0.21
Nodes (12): cancel(), errorToast(), load(), loadInvites(), loadMembers(), membersCall, patchMember(), removeMember() (+4 more)

### Community 193 - "InvoiceDocument.vue"
Cohesion: 0.33
Nodes (6): dates, monthName(), payee, PAYER, props, InvoiceItem

### Community 194 - "networkName"
Cohesion: 0.29
Nodes (7): networkName(), loadExtras(), categoryOptions, categoryLabel(), categoryOptions, netName(), networkOptions

### Community 195 - "PageHeader.vue"
Cohesion: 0.40
Nodes (3): firstName, greeting, session

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `metricColor`, `StaffView.vue`, `Key`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `facebook/rules.ts`, `pick`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `DataTable.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TeamTabs.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `LoadError.vue`, `InvoicesView.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `vue`, `ApiError`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `RewardLeadsCard.vue`, `google_ads/types.ts`, `checklists/rules.ts`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `FacebookHistoryPanel.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `errorText`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `priorityLabel`, `ChecklistItemDialog.vue`, `ApiKeyDialog.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `GamRunView.vue`, `views/rules.ts`, `Pagination.vue`, `ClientNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `AdTagMetricsView.vue`, `costs/rules.ts`, `LoadersView.vue`, `ClientDocumentsCard.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `lucide-vue-next`, `PasswordCard.vue`, `PriceRuleSitesView.vue`, `sites/rules.ts`, `tasks/rules.ts`, `SettingsView.vue`, `Badge.vue`, `useSession`, `FiscalDataCard.vue`, `GoogleAdsAlertsPanel.vue`, `vue-sonner`, `LoaderPreview.vue`, `Button.vue`, `Input.vue`, `Status.vue`, `AccountStatus.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `errorToast`, `InvoiceDocument.vue`, `networkName`, `PageHeader.vue`, `ColorField.vue`?**
  _High betweenness centrality (0.171) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04897959183673469 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `Key`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `t`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `facebook/rules.ts`, `pick`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ClientsResultsView.vue`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `DataTable.vue`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TeamTabs.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `LoadError.vue`, `InvoicesView.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `GroupedBarChart.vue`, `RewardMetricsView.vue`, `ApiError`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `google_ads/types.ts`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `FacebookHistoryPanel.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `BarChart.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `events.ts`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `errorText`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ChecklistItemDialog.vue`, `ApiKeyDialog.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `GamRunView.vue`, `Pagination.vue`, `ClientNetworksCard.vue`, `GoogleAdsAccountDialog.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `ClientDocumentsCard.vue`, `AdTagPreview.vue`, `lucide-vue-next`, `PasswordCard.vue`, `PriceRuleSitesView.vue`, `SettingsView.vue`, `drag.ts`, `Badge.vue`, `useSession`, `FiscalDataCard.vue`, `GoogleAdsAlertsPanel.vue`, `vue-sonner`, `LoaderPreview.vue`, `Button.vue`, `Input.vue`, `Status.vue`, `AccountStatus.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `InvoiceDocument.vue`, `PageHeader.vue`, `ColorField.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050980392156862744 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `t`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `PerformanceView.vue`, `GroupsView.vue`, `DashboardGrid.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `facebook/rules.ts`, `pick`, `clients/rules.ts`, `PeopleView.vue`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `ClientNetworksView.vue`, `index.ts`, `ResetView.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `DataTable.vue`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientSitesView.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `LoadError.vue`, `InvoicesView.vue`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `vue`, `ApiError`, `router.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `google_ads/types.ts`, `InvoiceServicesView.vue`, `FacebookHistoryPanel.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `facebook/types.ts`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ChecklistItemDialog.vue`, `ApiKeyDialog.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `AdTagsView.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `Review Focus`, `GoogleAdsAccountDialog.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `ClientDocumentsCard.vue`, `PasswordCard.vue`, `PriceRuleSitesView.vue`, `SettingsView.vue`, `Badge.vue`, `useSession`, `FiscalDataCard.vue`, `GoogleAdsAlertsPanel.vue`, `vue-sonner`, `Status.vue`, `AccountStatus.vue`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `errorToast`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.045739348370927316 - nodes in this community are weakly interconnected._