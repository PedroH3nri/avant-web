# Graph Report - avant-web  (2026-11-19)

## Corpus Check
- 421 files · ~290,679 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 11 file(s) not represented in the graph (top: (none) 6, .conf 2, .toml 1)

## Summary
- 5168 nodes · 13506 edges · 197 communities (192 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 153 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `195741ce`
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
- draft-rules.ts
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
- reports/types.ts
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
- facebook/types.ts
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
- PerformanceView.vue
- index.ts
- FacebookAdForm.vue
- ChecklistsView.vue
- MfaCard.vue
- table.ts
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
- ClientNetworksView.vue
- AccountManagerCard.vue
- rewards/rules.ts
- ApiKeysCard.vue
- InvoicesView.vue
- reports/rules.ts
- AlertDialog.vue
- MyInvoicesView.vue
- CascadeRuleView.vue
- FacebookCampaignsView.vue
- GroupedBarChart.vue
- RewardMetricsView.vue
- vue
- DashboardWidget.vue
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
- FacebookPicksField.vue
- FacebookObjectView.vue
- ChecklistView.vue
- GoogleAdsObjectView.vue
- priorityLabel
- ChecklistItemDialog.vue
- contracts/types.ts
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
- FacebookCampaignForm.vue
- AdTagMetricsView.vue
- costs/rules.ts
- LoadersView.vue
- invoices/types.ts
- gam_tools/rules.ts
- AdTagPreview.vue
- cn
- ApiError
- PriceRuleSitesView.vue
- sites/rules.ts
- tasks/rules.ts
- lang
- PageBody.vue
- drag.ts
- costs/types.ts
- vue-sonner
- useSession
- FiscalDataCard.vue
- overrides
- vite.embed.config.ts
- GoogleAdsAlertsPanel.vue
- FieldsPanel.vue
- LoaderPreview.vue
- Button.vue
- Input.vue
- lucide-vue-next
- alerts/types.ts
- GoogleAdsHistoryPanel.vue
- PayeeDialog.vue
- ClassifySitesDialog.vue
- poll.ts
- InvoiceDocument.vue
- GoogleAdsTabs.vue
- priceRulePermission
- Field.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 590 edges
2. `errorText()` - 370 edges
3. `vue` - 191 edges
4. `ApiError` - 138 edges
5. `lucide-vue-next` - 110 edges
6. `vue-sonner` - 97 edges
7. `useSession` - 95 edges
8. `td` - 65 edges
9. `th` - 65 edges
10. `vue-router` - 64 edges

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

## Communities (197 total, 5 thin omitted)

### Community 0 - "StaffRolesView.vue"
Cohesion: 0.05
Nodes (44): tn(), activeByRole(), personGoalAmount(), active, allRoles(), busy, canManage, canRoles (+36 more)

### Community 1 - "DashboardsView.vue"
Cohesion: 0.05
Nodes (47): cleanFilters(), emptyDefinition(), filtersChanged(), withLayout(), adding, apiMessage(), canManage, canTemplate (+39 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.04
Nodes (60): profileInput(), profileOk(), formOk, audit, auditChanged(), auditPage, auditPages, auditTotal (+52 more)

### Community 3 - "ReportBuilderView.vue"
Cohesion: 0.05
Nodes (61): loadDraft(), BuilderState, builderState(), canExport(), chartAllowed(), draftOf(), emptyDraft(), fittingChart() (+53 more)

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
Nodes (37): changeLines, busy, canTransfer, duplicate, emit, errors, form, open (+29 more)

### Community 9 - "TeamView.vue"
Cohesion: 0.05
Nodes (50): props, seats, busy, cancel(), canEditCompany, canInvite, canManage, canRoles (+42 more)

### Community 10 - "SitesView.vue"
Cohesion: 0.04
Nodes (48): networkName(), loadExtras(), adding, addSite(), allChosen, allSites, archived, assignedOnly (+40 more)

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
Cohesion: 0.10
Nodes (20): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+12 more)

### Community 19 - "StaffView.vue"
Cohesion: 0.08
Nodes (28): assign(), busy, canEditGroone, canManageTeam, canSeeGoal, canSeeInvites, editable(), email (+20 more)

### Community 20 - "draft-rules.ts"
Cohesion: 0.08
Nodes (47): adset, eventOptions, genderOptions, manual, optimizationOptions, patch(), pixelOptions, pixels (+39 more)

### Community 21 - "steps"
Cohesion: 0.09
Nodes (24): GITLEAKS_SHA256, GITLEAKS_VERSION, jobs, segredos, test, name, on, pull_request (+16 more)

### Community 22 - "ServiceLineDialog.vue"
Cohesion: 0.13
Nodes (16): amount, amountError, busy, chosen, description, emit, open, options (+8 more)

### Community 23 - "SavedViewsBar.vue"
Cohesion: 0.09
Nodes (27): active, activeView, busy, canUpdate, choose(), dialogOpen, editing, emit (+19 more)

### Community 24 - "GoogleAdsView.vue"
Cohesion: 0.05
Nodes (42): campaignsPath(), accounts, applying, applySuffix(), canConnect, canManage, clientName(), clientOptions (+34 more)

### Community 25 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): tree(), busy, canAssign, canManage, classifying, errorToast(), id, load() (+19 more)

### Community 26 - "CostsView.vue"
Cohesion: 0.09
Nodes (25): busy, canManage, check, checkFormula, confirmRemove(), costs, currencies, currencyOptions (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.13
Nodes (14): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+6 more)

### Community 28 - "t"
Cohesion: 0.05
Nodes (43): t(), period, adUnitNames(), adUnitHint, adUnitOptions, base, busy, buttonColorLabel() (+35 more)

### Community 29 - "ClientsView.vue"
Cohesion: 0.04
Nodes (55): emptyProfile(), profileBody(), adding, busy, canceling, cancelInvite(), cancelOpen, canManage (+47 more)

### Community 30 - "InvoiceView.vue"
Cohesion: 0.07
Nodes (27): invoiceActions(), invoicePdfUrl(), act(), actions, backTo, busy, Confirm, confirm (+19 more)

### Community 31 - "checklists/types.ts"
Cohesion: 0.36
Nodes (8): ChecklistFilters, ChecklistItem, ChecklistItemInput, ChecklistMonth, ChecklistProgress, CheckOutcome, SiteChecklist, SiteChecklistDetail

### Community 32 - "FacebookView.vue"
Cohesion: 0.04
Nodes (43): FacebookTab, model, props, TABS, FACEBOOK_CONNECT_URL, accounts, canConnect, canManage (+35 more)

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

### Community 37 - "reports/types.ts"
Cohesion: 0.06
Nodes (55): Task 3: Web — tipos, serviço e regras do construtor, compare, options, period, selected, countryName(), dailySeries(), daysOf() (+47 more)

### Community 38 - "GroupsView.vue"
Cohesion: 0.05
Nodes (44): broken, hue, initials, props, busy, create(), description, duplicate (+36 more)

### Community 39 - "DashboardGrid.vue"
Cohesion: 0.14
Nodes (23): drag, emit, grid, ordered, props, { run, failure, loading }, source, stored (+15 more)

### Community 40 - "FacebookCreateView.vue"
Cohesion: 0.09
Nodes (26): MAX_ADSETS, account, accounts, adCount, addAd(), addAdset(), alertText, copyAdset() (+18 more)

### Community 41 - "TeamCommissionsView.vue"
Cohesion: 0.07
Nodes (34): discount(), toIssue(), adjusting, adjustOpen, canManage, columnLabel(), COLUMNS, DEFAULT_VIEW (+26 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "CompanyDocumentsCard.vue"
Cohesion: 0.08
Nodes (40): fetchFile(), load(), overview, picker, picking, rows, send(), sending (+32 more)

### Community 44 - "FacebookJobDialog.vue"
Cohesion: 0.16
Nodes (17): campaign, current, emit, finished, open, openCampaign(), props, refresh() (+9 more)

### Community 45 - "ReportView.vue"
Cohesion: 0.07
Nodes (39): sameComparison(), savedPeriod(), toQuery(), viewChanged(), viewDraft(), ViewPeriod, exportUrl(), download() (+31 more)

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

### Community 50 - "facebook/types.ts"
Cohesion: 0.06
Nodes (57): budgetText(), ACCOUNT_QUALITY_URL, ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), CHANGE_KEYS, changeText() (+49 more)

### Community 51 - "pick"
Cohesion: 0.08
Nodes (27): pick(), metricOptions, options, transferOptions, ruleEnd(), setGoal(), roleName(), roleOptions (+19 more)

### Community 52 - "clients/rules.ts"
Cohesion: 0.12
Nodes (17): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+9 more)

### Community 53 - "toNumber"
Cohesion: 0.05
Nodes (69): Task 4: Web — cores das séries e gráficos do construtor, first, FunnelStep, props, change(), formatMetric(), toNumber(), pageSlice() (+61 more)

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
Cohesion: 0.09
Nodes (21): serverProblems(), ad, adset, detail, edit, externalId, failure, following (+13 more)

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
Nodes (38): busy, canManage, catalog, counts, duplicate(), empty, firstPage(), Layout (+30 more)

### Community 66 - "TaskView.vue"
Cohesion: 0.12
Nodes (20): commentRecipients(), personName(), assigneeOptions, change(), changeAssignee(), changePriority(), changeStatus(), comment (+12 more)

### Community 67 - "SchedulesView.vue"
Cohesion: 0.05
Nodes (57): body, busy, emit, form, frequencyOptions, hourOptions, itemOptions, monthDayOptions (+49 more)

### Community 68 - "package.json"
Cohesion: 0.09
Nodes (29): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2 (+21 more)

### Community 69 - "avant-tag"
Cohesion: 0.29
Nodes (7): avant-tag@github:PedroH3nri/avant-tag#v0.2.0, avant-tag, draw(), emit, host, LINES, props

### Community 70 - "ClientsResultsView.vue"
Cohesion: 0.12
Nodes (15): clients, columnLabel(), COLUMNS, currency, DEFAULT_VIEW, load(), loadError, month (+7 more)

### Community 71 - "InviteView.vue"
Cohesion: 0.09
Nodes (20): accept(), busy, error, formOk, gone, invite, load(), loadError (+12 more)

### Community 72 - "Field.vue"
Cohesion: 0.07
Nodes (31): busy, daily, dailyValue, emit, monthly, monthlyValue, onLimit, onLimitOptions (+23 more)

### Community 73 - "GoalsView.vue"
Cohesion: 0.09
Nodes (31): mark, percent, props, tone, companyGoalYears(), goalTone(), paceMark(), roleTemplates() (+23 more)

### Community 74 - "CompanyGoalCard.vue"
Cohesion: 0.11
Nodes (21): busy, canManage, changed, current, load(), monthNames, months, save() (+13 more)

### Community 75 - "AlertsView.vue"
Cohesion: 0.07
Nodes (29): muteUntil(), alerts, busy, canManage, clientNames, clients, confirmRemove(), editing (+21 more)

### Community 76 - "TasksView.vue"
Cohesion: 0.10
Nodes (19): statusesFor(), canSeeAll, clients, creating, load(), loadError, page, pages (+11 more)

### Community 77 - "ContractsView.vue"
Cohesion: 0.04
Nodes (41): applyView(), busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, client (+33 more)

### Community 78 - "AdTagEditView.vue"
Cohesion: 0.03
Nodes (71): model, chosenDay(), settingsProblem(), tagStatus(), toPayload(), absentUnits, armed, base (+63 more)

### Community 79 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (33): presetRange(), previousRange(), sameRange(), shiftDay(), utcToday(), load(), section(), barFormat() (+25 more)

### Community 80 - "index.ts"
Cohesion: 0.06
Nodes (37): vue, choose(), langs, session, LINES, showBootFailure(), auditText(), chooseLang() (+29 more)

### Community 81 - "FacebookAdForm.vue"
Cohesion: 0.10
Nodes (23): ad, blankCard(), buttonOptions, format, formatOptions, instagram, instagramOptions, pageOptions (+15 more)

### Community 82 - "ChecklistsView.vue"
Cohesion: 0.11
Nodes (25): monthName(), previousMonth(), stateLabel(), checklists, fail(), firstPage(), listCall, load() (+17 more)

### Community 83 - "MfaCard.vue"
Cohesion: 0.12
Nodes (16): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+8 more)

### Community 84 - "table.ts"
Cohesion: 0.09
Nodes (21): dot, td, th, events, load(), loadError, open, page (+13 more)

### Community 85 - "session.ts"
Cohesion: 0.05
Nodes (42): pinia, @vue/test-utils, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), shownTheme() (+34 more)

### Community 86 - "MyCommissionView.vue"
Cohesion: 0.13
Nodes (18): formatDay(), STATUS_TONE, windowState(), data, endText(), kpis, load(), loadError (+10 more)

### Community 87 - "api.ts"
Cohesion: 0.12
Nodes (33): api, baseHeaders(), companyChanged(), CSRF_COOKIES, csrfToken(), download(), Query, readCookie() (+25 more)

### Community 88 - "RolesView.vue"
Cohesion: 0.10
Nodes (22): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+14 more)

### Community 89 - "RoleDialog.vue"
Cohesion: 0.08
Nodes (38): Localized, SiteScope, SiteMember, busy, category, chipClass(), chosen, emit (+30 more)

### Community 90 - "locale"
Cohesion: 0.18
Nodes (11): locale, busy, chosen, currencies, currencyLabel(), missing, options, save() (+3 more)

### Community 91 - "GoalTemplatesDialog.vue"
Cohesion: 0.11
Nodes (22): busy, changed(), close(), creating, editing, emit, formOpen, loadPage() (+14 more)

### Community 92 - "GamToolsView.vue"
Cohesion: 0.06
Nodes (38): defaultSites(), languageLabel(), adsLines, adsOpen, busy, choose(), chosen, close() (+30 more)

### Community 93 - "SidebarRail.vue"
Cohesion: 0.12
Nodes (17): cancel(), container, drawerGroup, emit, focusGroup(), hover(), hovered, lastShown (+9 more)

### Community 94 - "Avant: grupos na Empresa e imagem da Empresa"
Cohesion: 0.20
Nodes (9): Avant: grupos na Empresa e imagem da Empresa, Decisões do Pedro (26/10), Herança de comissão e meta, Imagem da Empresa, Issues, Modelo de dados, Regras, Resumo (+1 more)

### Community 95 - "TeamTabs.vue"
Cohesion: 0.25
Nodes (6): emit, props, session, tabClass(), tabs, TeamTab

### Community 96 - "ClientNetworksView.vue"
Cohesion: 0.07
Nodes (30): box, failed, initial, props, latestCall(), awaitingOnly, canAssign, firstPage() (+22 more)

### Community 97 - "AccountManagerCard.vue"
Cohesion: 0.07
Nodes (34): CompanyStatus, AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange (+26 more)

### Community 98 - "rewards/rules.ts"
Cohesion: 0.09
Nodes (31): answerCounts(), blankInput(), cleanPath(), contrast(), contrastWarning(), COOLDOWN_RANGE, defaultStyle(), EMOJIS (+23 more)

### Community 99 - "ApiKeysCard.vue"
Cohesion: 0.04
Nodes (63): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+55 more)

### Community 100 - "InvoicesView.vue"
Cohesion: 0.10
Nodes (16): columnLabel(), COLUMNS, DEFAULT_VIEW, invoices, load(), loadError, month, page (+8 more)

### Community 101 - "reports/rules.ts"
Cohesion: 0.06
Nodes (48): emit, missingDates, options, props, setDate(), setMode(), addFilter(), addTyped() (+40 more)

### Community 102 - "AlertDialog.vue"
Cohesion: 0.12
Nodes (15): baselineOptions, busy, checking, checks, clientOptions, conditionOptions, emit, firing (+7 more)

### Community 103 - "MyInvoicesView.vue"
Cohesion: 0.11
Nodes (23): monthKey(), available, breakdown, chosen, create(), createBusy, createMonth, creating (+15 more)

### Community 104 - "CascadeRuleView.vue"
Cohesion: 0.05
Nodes (52): cascadeLadder(), dropPercent(), nearestTier(), percentText(), base, busy, changeStatus(), currency (+44 more)

### Community 105 - "FacebookCampaignsView.vue"
Cohesion: 0.06
Nodes (32): accountId, accountOptions, accounts, allSelected, base, canManage, clientOptions, clients (+24 more)

### Community 106 - "GroupedBarChart.vue"
Cohesion: 0.10
Nodes (18): @vueuse/core@^15.0.0, @vueuse/core, BarSeries, barWidth, box, chartWidth, group, hovered (+10 more)

### Community 107 - "RewardMetricsView.vue"
Cohesion: 0.08
Nodes (30): FunnelRow, funnelRows(), lastDays(), rewardPermission(), share(), canManage, base, canLeads (+22 more)

### Community 108 - "vue"
Cohesion: 0.07
Nodes (32): model, alerts, emit, load(), loadError, markRead(), page, pages (+24 more)

### Community 109 - "DashboardWidget.vue"
Cohesion: 0.12
Nodes (18): draft, draftKey, emit, failure, goal, goalFailure, goalLoading, grabTitle() (+10 more)

### Community 110 - "router.ts"
Cohesion: 0.15
Nodes (12): open, session, setCompanyChangedHandler(), setTabCompany(), setUnauthorizedHandler(), announceCompany(), CompanyMessage, onCompanyAnnounced() (+4 more)

### Community 111 - "AddWidgetDialog.vue"
Cohesion: 0.11
Nodes (28): add(), emit, kind, kinds, metric, metrics, open, props (+20 more)

### Community 112 - "updates"
Cohesion: 0.11
Nodes (17): patterns, update-types, patterns, update-types, actions, dependencias, imagens, patterns (+9 more)

### Community 113 - "RewardsView.vue"
Cohesion: 0.09
Nodes (22): installSnippet(), base, columns, copied, deleted, load(), loadError, page (+14 more)

### Community 114 - "TemplatesView.vue"
Cohesion: 0.13
Nodes (19): templateService, roleNames(), TemplateAudience, apiMessage(), audience, AUDIENCES, audienceText(), busy (+11 more)

### Community 115 - "TemplateEditorView.vue"
Cohesion: 0.11
Nodes (30): editableWidgets(), blankTemplate(), canPreview(), templateForm(), templateInput(), toggleRole(), withAudience(), ManagedTemplate (+22 more)

### Community 116 - "alerts/rules.ts"
Cohesion: 0.19
Nodes (17): body, runPreview, ALERT_BASELINES, ALERT_CONDITIONS, ALERT_GROUPS, alertDefinition(), AlertForm, alertForm() (+9 more)

### Community 117 - "RewardLeadsCard.vue"
Cohesion: 0.09
Nodes (23): saveFile(), downloadInstall(), answer, answerOptions, busy, columns, confirmRemove(), exportLeads() (+15 more)

### Community 118 - "Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)"
Cohesion: 0.17
Nodes (11): Abordagens consideradas, Anti-objetivos, Backend (core, pequena), Construtor de relatórios e métricas personalizadas no painel (web#13, web#12), Decisões, Fora do escopo, Intenção, O que fica para quem constrói (+3 more)

### Community 119 - "google_ads/types.ts"
Cohesion: 0.05
Nodes (47): model, model, busy, daily, emit, monthly, onLimit, onLimitOptions (+39 more)

### Community 120 - "google_ads/rules.ts"
Cohesion: 0.10
Nodes (24): ACCOUNT_TONES, accountTone(), ALERT_KEYS, alertText(), byManager(), CHANGE_KEYS, changeText(), CHANNEL_KEYS (+16 more)

### Community 121 - "checklists/rules.ts"
Cohesion: 0.17
Nodes (13): dollars(), evidenceText(), kindDesc(), LANGUAGE_NAMES, NOTE_MIN, progressPercent(), RowState, rowState() (+5 more)

### Community 122 - "rewards/types.ts"
Cohesion: 0.15
Nodes (12): Reward, RewardAdUnit, RewardAdUnitGroup, RewardAnswerCount, RewardDay, RewardInput, RewardLead, RewardLeadRequest (+4 more)

### Community 123 - "dashboards/types.ts"
Cohesion: 0.15
Nodes (20): chosen, create(), emit, name, open, templates, Dashboard, DashboardFilters (+12 more)

### Community 124 - "RevenueStatusBadge.vue"
Cohesion: 0.25
Nodes (12): REPORT_CURRENCY, ClientNetwork, ClientRef, ClientSite, detail, props, changeText(), perDayText() (+4 more)

### Community 125 - "gam_tools/types.ts"
Cohesion: 0.16
Nodes (15): GamFormat, GamRunState, GamStepState, GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language (+7 more)

### Community 126 - "InvoiceServicesView.vue"
Cohesion: 0.10
Nodes (24): errorText(), submit(), submit(), confirmEnd(), confirmRemove(), create(), load(), busy (+16 more)

### Community 127 - "FacebookHistoryPanel.vue"
Cohesion: 0.12
Nodes (16): auditActions, dict, errors, fallbackError, Key, changes, load(), loadError (+8 more)

### Community 128 - "ChecklistNotesCard.vue"
Cohesion: 0.12
Nodes (19): add(), adding, deleteOpen, deleting, desc, draft, editing, editOpen (+11 more)

### Community 129 - "i18n-plugin.ts"
Cohesion: 0.18
Nodes (12): vitest@^5.0.5, vitest, loadConfig(), COLUMN, column(), Lang, LanguageMessages, languageMessages() (+4 more)

### Community 130 - "ClientTeamsView.vue"
Cohesion: 0.15
Nodes (15): clientId, clientOptions, clients, firstPage(), load(), loadError, members, page (+7 more)

### Community 131 - "BarChart.vue"
Cohesion: 0.24
Nodes (8): BarItem, largest, props, opacity(), point(), props, slices, total

### Community 132 - "NetworkReviewActions.vue"
Cohesion: 0.29
Nodes (8): open, busy, confirm(), emit, props, reject(), rejectOpen, showError()

### Community 133 - "NewTaskDialog.vue"
Cohesion: 0.12
Nodes (16): assignee, client, clientOptions, create(), description, domain, emit, open (+8 more)

### Community 134 - "dashboards/rules.ts"
Cohesion: 0.10
Nodes (27): dimensions, filters, periods, props, ACCOUNT_SIZE, Box, CHART_SIZE, clamp() (+19 more)

### Community 135 - "GoogleAdsCampaignsView.vue"
Cohesion: 0.07
Nodes (29): childLevel(), objectPath(), accountId, accountOptions, accounts, clientOptions, clients, columns (+21 more)

### Community 136 - "PriceRuleView.vue"
Cohesion: 0.05
Nodes (52): hourPoints(), moneyText(), tierOptions(), ladderText(), maxOptions, minOptions, startOptions, summary (+44 more)

### Community 137 - "events.ts"
Cohesion: 0.11
Nodes (16): close(), EventMap, FacebookJobUpdated, GamToolRunUpdated, Handler, handlers, listen(), listening (+8 more)

### Community 138 - "PriceRuleSiteView.vue"
Cohesion: 0.05
Nodes (53): gainQuery(), gainSeries(), modelChoices(), modelCounts(), recommendedModel(), siteStatus(), active, automaticRuleCount (+45 more)

### Community 139 - "FacebookPicksField.vue"
Cohesion: 0.10
Nodes (17): failure, fileName, input, model, props, send(), sending, failure (+9 more)

### Community 140 - "FacebookObjectView.vue"
Cohesion: 0.09
Nodes (30): controlErrorText(), formatCount(), formatMoney(), formatRatio(), limitDetails(), PERIODS, base, canManage (+22 more)

### Community 141 - "ChecklistView.vue"
Cohesion: 0.13
Nodes (18): personName(), ROW_TONE, rowStateLabel(), splitRows(), checking, checklist, checklistId, checkNow() (+10 more)

### Community 142 - "GoogleAdsObjectView.vue"
Cohesion: 0.10
Nodes (20): periodRange(), base, child, children, currency, days, detail, externalId (+12 more)

### Community 143 - "priorityLabel"
Cohesion: 0.25
Nodes (8): priorityOptions, eventText(), priorityLabel(), statusLabel(), priorityOptions, statusOptions, priorityOptions, statusOptions

### Community 144 - "ChecklistItemDialog.vue"
Cohesion: 0.14
Nodes (17): active, emit, kind, kindOptions, name, open, props, save() (+9 more)

### Community 145 - "contracts/types.ts"
Cohesion: 0.16
Nodes (14): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractClientRef, ContractNetwork, ContractNetworkRef (+6 more)

### Community 146 - "price_rules/rules.ts"
Cohesion: 0.07
Nodes (33): ACTION_KEY, CASCADE_REASON_KEY, CASCADE_SERIES, CascadeFunnel, cascadeFunnel(), CascadePoint, cascadePoints(), CascadeSeries (+25 more)

### Community 147 - "LoaderEditView.vue"
Cohesion: 0.05
Nodes (61): ADBLOCK_HINT, ADBLOCK_TITLE, blankInput(), BLUR_LEVELS, BLUR_PIXELS, formProblems(), inputOf(), LIMITS (+53 more)

### Community 148 - "AdTagInstallDialog.vue"
Cohesion: 0.40
Nodes (5): copied, line, open, props, installLine()

### Community 149 - "AdjustmentDialog.vue"
Cohesion: 0.18
Nodes (14): amount, amountError, busy, emit, open, props, reason, reasonTouched (+6 more)

### Community 150 - "tasks/types.ts"
Cohesion: 0.23
Nodes (11): taskService, SupportTask, SupportTaskDetail, TaskEventKind, TaskFilters, TaskInput, TaskPatch, TaskPerson (+3 more)

### Community 151 - "ad_tags/rules.ts"
Cohesion: 0.07
Nodes (50): addPath(), emit, icon, ICONS, name, pages, pathText, problemText (+42 more)

### Community 152 - "MetricStylePopover.vue"
Cohesion: 0.16
Nodes (16): applyScale(), emit, error, from, gradient(), mode, MODES, number() (+8 more)

### Community 154 - "AdTagsView.vue"
Cohesion: 0.06
Nodes (33): adTagPermission(), AdTagSiteOption, canManage, base, busy, canManage, columns, create() (+25 more)

### Community 155 - "GamRunView.vue"
Cohesion: 0.12
Nodes (16): finishedSteps(), RUN_TONE, runStateLabel(), STEP_TONE, stepStateLabel(), toolName(), writes(), gamToolService (+8 more)

### Community 156 - "views/rules.ts"
Cohesion: 0.12
Nodes (27): applyView(), current, sortOptions, applyView(), current, sortOptions, current, applyView() (+19 more)

### Community 157 - "price_rules/types.ts"
Cohesion: 0.10
Nodes (24): priceRuleService(), PriceRuleService, BlockKind, CascadeHour, CascadeTry, PriceRule, PriceRuleAction, PriceRuleBlock (+16 more)

### Community 158 - "Pagination.vue"
Cohesion: 0.23
Nodes (8): first, last, numbers, page, props, PAGE_SIZE, pageCount(), pageNumbers()

### Community 159 - "ClientNetworksCard.vue"
Cohesion: 0.11
Nodes (21): add(), addBusy, addError, addOpen, canAssign, code, load(), loadError (+13 more)

### Community 160 - "Review Focus"
Cohesion: 0.22
Nodes (8): Construtor de relatórios no painel — plano de implementação, Global Constraints, Review Focus, Task 1: Core — duas dimensões nos gráficos de eixo e cor/aparência por métrica em `check_chart` (v0.33.0), Task 2: API — core v0.33.0, Task 5: Web — lista de relatórios, rota e menu, Task 6: Web — construtor, Task 8: Web — fechamento

### Community 161 - "FacebookCampaignForm.vue"
Cohesion: 0.18
Nodes (14): account, accountOptions, bidOptions, budgetAt, budgetKind, draft, patch(), pickObjective() (+6 more)

### Community 162 - "AdTagMetricsView.vue"
Cohesion: 0.09
Nodes (26): formatDate(), healthSummary(), share(), unitName(), dayHint, base, decimal, filled (+18 more)

### Community 163 - "costs/rules.ts"
Cohesion: 0.25
Nodes (12): COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput(), parseAmount() (+4 more)

### Community 164 - "LoadersView.vue"
Cohesion: 0.11
Nodes (18): ADBLOCK_SHORT, STYLE_LABEL, base, columns, load(), loadError, loaders, page (+10 more)

### Community 165 - "invoices/types.ts"
Cohesion: 0.27
Nodes (12): FiscalData, AvailableMonth, Invoice, InvoiceFilters, InvoiceItemKind, InvoiceReturn, InvoiceServiceInput, InvoiceServiceItem (+4 more)

### Community 166 - "gam_tools/rules.ts"
Cohesion: 0.11
Nodes (21): chosen, BLOCK_COUNT, delegationLabel(), formatDesc(), formatName(), FORMATS, installable(), KEY_NAMES (+13 more)

### Community 167 - "AdTagPreview.vue"
Cohesion: 0.12
Nodes (15): anchor, choose(), drawLoader(), ElementKind, ELEMENTS, emit, fixed, host (+7 more)

### Community 168 - "cn"
Cohesion: 0.13
Nodes (17): reka-ui, props, up, panelItem(), railItem(), open, cn(), kindClass() (+9 more)

### Community 169 - "ApiError"
Cohesion: 0.09
Nodes (16): ApiError, busy, current, emit, mismatch, password, password2, ready (+8 more)

### Community 170 - "PriceRuleSitesView.vue"
Cohesion: 0.12
Nodes (16): priceRulesPath(), base, columns, integer, load(), loadError, page, pages (+8 more)

### Community 171 - "sites/rules.ts"
Cohesion: 0.27
Nodes (7): approval(), AdUnit, Site, SiteCategory, SiteDetail, SiteListItem, SitePatch

### Community 172 - "tasks/rules.ts"
Cohesion: 0.25
Nodes (7): COMMENT_MAX, COMMENT_MIN, PRIORITIES, STATUS_TONE, STATUSES, StatusFilter, SUBJECT_MIN

### Community 173 - "lang"
Cohesion: 0.22
Nodes (7): lang, taskPlace(), TaskEvent, place, ana, bruno, task

### Community 174 - "PageBody.vue"
Cohesion: 0.08
Nodes (20): choose(), session, route, router, session, sessions, canEdit, company (+12 more)

### Community 175 - "drag.ts"
Cohesion: 0.36
Nodes (10): cellSize(), DragMode, useWidgetDrag(), begin(), cancel(), escape(), finish(), follow() (+2 more)

### Community 176 - "costs/types.ts"
Cohesion: 0.24
Nodes (8): Cost, CostInput, CostKind, FormulaCheck, CompanyResults, CostLine, MonthResult, ResultTotals

### Community 177 - "vue-sonner"
Cohesion: 0.12
Nodes (15): vue-sonner, toasterTheme, pick(), route, router, session, end(), ending (+7 more)

### Community 178 - "useSession"
Cohesion: 0.27
Nodes (10): linkActive(), NAV_GROUPS, NavItem, SIBLINGS, useNavigation(), logout(), visibleGroups(), activeLabels() (+2 more)

### Community 179 - "FiscalDataCard.vue"
Cohesion: 0.17
Nodes (12): busy, complete, documentLabel, form, load(), loaded, options, save() (+4 more)

### Community 180 - "overrides"
Cohesion: 0.50
Nodes (4): glob, minimatch, pnpm, overrides

### Community 181 - "vite.embed.config.ts"
Cohesion: 0.22
Nodes (6): vite@^8.3.5, vite, ENTRIES, Entry, entry, source

### Community 182 - "GoogleAdsAlertsPanel.vue"
Cohesion: 0.13
Nodes (15): alerts, emit, load(), loadError, markRead(), page, pages, props (+7 more)

### Community 183 - "FieldsPanel.vue"
Cohesion: 0.33
Nodes (9): customs, dimensions, emit, itemClass(), matches(), metrics, props, search (+1 more)

### Community 184 - "LoaderPreview.vue"
Cohesion: 0.40
Nodes (5): draw(), emit, host, LINES, props

### Community 185 - "Button.vue"
Cohesion: 0.17
Nodes (9): model, choices, emit, invalid, name, open, props, roleIds (+1 more)

### Community 186 - "Input.vue"
Cohesion: 0.13
Nodes (13): button, classes, Props, props, choices, description, emit, invalid (+5 more)

### Community 187 - "lucide-vue-next"
Cohesion: 0.08
Nodes (22): lucide-vue-next, vue-router, vue-router, RouteMeta, formatAgo(), company, error, hasSeats (+14 more)

### Community 188 - "alerts/types.ts"
Cohesion: 0.39
Nodes (7): alertService, Alert, AlertDefinition, AlertEvent, AlertInput, AlertPage, AlertPreview

### Community 189 - "GoogleAdsHistoryPanel.vue"
Cohesion: 0.14
Nodes (13): model, changes, load(), loadError, origin, originOptions, page, pages (+5 more)

### Community 190 - "PayeeDialog.vue"
Cohesion: 0.18
Nodes (11): busy, complete, documentLabel, emit, form, open, options, props (+3 more)

### Community 191 - "ClassifySitesDialog.vue"
Cohesion: 0.14
Nodes (20): category, categoryOptions, changed, emit, keep, open, props, responsible (+12 more)

### Community 192 - "poll.ts"
Cohesion: 0.47
Nodes (4): FIRST_POLL_MS, LONGEST_POLL_MS, nextPollDelay(), POLL_LIMIT_MS

### Community 193 - "InvoiceDocument.vue"
Cohesion: 0.18
Nodes (14): countryName(), TAX_TYPES, taxTypeLabel(), taxTypeOptions(), dates, money(), monthName(), payee (+6 more)

### Community 194 - "GoogleAdsTabs.vue"
Cohesion: 0.33
Nodes (4): GoogleAdsTab, model, props, TABS

### Community 195 - "priceRulePermission"
Cohesion: 0.50
Nodes (4): priceRulePermission(), canManage, canManage, canManage

### Community 196 - "Field.vue"
Cohesion: 0.12
Nodes (14): current, dirty, elsewhere, emit, error, kind, parsed, props (+6 more)

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `metricColor`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `reports/types.ts`, `GroupsView.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `pick`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `PerformanceView.vue`, `index.ts`, `FacebookAdForm.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TeamTabs.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `InvoicesView.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `vue`, `DashboardWidget.vue`, `router.ts`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `alerts/rules.ts`, `RewardLeadsCard.vue`, `google_ads/types.ts`, `checklists/rules.ts`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `FacebookHistoryPanel.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `FacebookPicksField.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `priorityLabel`, `ChecklistItemDialog.vue`, `contracts/types.ts`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `GamRunView.vue`, `views/rules.ts`, `Pagination.vue`, `ClientNetworksCard.vue`, `FacebookCampaignForm.vue`, `AdTagMetricsView.vue`, `costs/rules.ts`, `LoadersView.vue`, `gam_tools/rules.ts`, `AdTagPreview.vue`, `cn`, `ApiError`, `PriceRuleSitesView.vue`, `sites/rules.ts`, `tasks/rules.ts`, `PageBody.vue`, `vue-sonner`, `useSession`, `FiscalDataCard.vue`, `GoogleAdsAlertsPanel.vue`, `FieldsPanel.vue`, `LoaderPreview.vue`, `Button.vue`, `Input.vue`, `lucide-vue-next`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `InvoiceDocument.vue`, `GoogleAdsTabs.vue`, `Field.vue`?**
  _High betweenness centrality (0.151) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `errorText()` (e.g. with `Task 6: Web — construtor` and `Task 7: Web — modal de métrica personalizada e "Minhas métricas"`) actually correct?**
  _`errorText()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `StaffRolesView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.051418439716312055 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `InvoiceServicesView.vue` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `t`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `reports/types.ts`, `GroupsView.vue`, `DashboardGrid.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `pick`, `PeopleView.vue`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `ClientsResultsView.vue`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `PerformanceView.vue`, `index.ts`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `rewards/rules.ts`, `ApiKeysCard.vue`, `InvoicesView.vue`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `RewardMetricsView.vue`, `vue`, `DashboardWidget.vue`, `router.ts`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)`, `google_ads/types.ts`, `FacebookHistoryPanel.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `PriceRuleSiteView.vue`, `FacebookPicksField.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `AdjustmentDialog.vue`, `AdTagsView.vue`, `GamRunView.vue`, `ClientNetworksCard.vue`, `Review Focus`, `AdTagMetricsView.vue`, `LoadersView.vue`, `ApiError`, `PriceRuleSitesView.vue`, `PageBody.vue`, `vue-sonner`, `useSession`, `FiscalDataCard.vue`, `GoogleAdsAlertsPanel.vue`, `lucide-vue-next`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `Field.vue`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **Should `DashboardsView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.050980392156862744 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `index.ts` to `StaffRolesView.vue`, `DashboardsView.vue`, `ClientView.vue`, `ReportBuilderView.vue`, `MemberView.vue`, `CustomMetricDialog.vue`, `GroupView.vue`, `RuleDialog.vue`, `TeamView.vue`, `SitesView.vue`, `LineChart.vue`, `clean-code.mjs`, `@vueuse/core`, `StaffView.vue`, `draft-rules.ts`, `ServiceLineDialog.vue`, `SavedViewsBar.vue`, `GoogleAdsView.vue`, `SiteDetailView.vue`, `CostsView.vue`, `t`, `ClientsView.vue`, `InvoiceView.vue`, `FacebookView.vue`, `ResultsView.vue`, `reports/types.ts`, `GroupsView.vue`, `DashboardGrid.vue`, `FacebookCreateView.vue`, `TeamCommissionsView.vue`, `CompanyDocumentsCard.vue`, `FacebookJobDialog.vue`, `ReportView.vue`, `ConnectView.vue`, `NetworksView.vue`, `pick`, `clients/rules.ts`, `toNumber`, `PeopleView.vue`, `FacebookEditView.vue`, `ProfileImageCard.vue`, `ClientNotesCard.vue`, `ReportsView.vue`, `TaskView.vue`, `SchedulesView.vue`, `package.json`, `avant-tag`, `ClientsResultsView.vue`, `InviteView.vue`, `Field.vue`, `GoalsView.vue`, `CompanyGoalCard.vue`, `AlertsView.vue`, `TasksView.vue`, `ContractsView.vue`, `AdTagEditView.vue`, `PerformanceView.vue`, `FacebookAdForm.vue`, `ChecklistsView.vue`, `MfaCard.vue`, `table.ts`, `session.ts`, `MyCommissionView.vue`, `RolesView.vue`, `RoleDialog.vue`, `locale`, `GoalTemplatesDialog.vue`, `GamToolsView.vue`, `SidebarRail.vue`, `TeamTabs.vue`, `ClientNetworksView.vue`, `AccountManagerCard.vue`, `ApiKeysCard.vue`, `InvoicesView.vue`, `reports/rules.ts`, `AlertDialog.vue`, `MyInvoicesView.vue`, `CascadeRuleView.vue`, `FacebookCampaignsView.vue`, `GroupedBarChart.vue`, `RewardMetricsView.vue`, `vue`, `DashboardWidget.vue`, `router.ts`, `AddWidgetDialog.vue`, `RewardsView.vue`, `TemplatesView.vue`, `TemplateEditorView.vue`, `RewardLeadsCard.vue`, `google_ads/types.ts`, `dashboards/types.ts`, `RevenueStatusBadge.vue`, `InvoiceServicesView.vue`, `FacebookHistoryPanel.vue`, `ChecklistNotesCard.vue`, `ClientTeamsView.vue`, `BarChart.vue`, `NetworkReviewActions.vue`, `NewTaskDialog.vue`, `dashboards/rules.ts`, `GoogleAdsCampaignsView.vue`, `PriceRuleView.vue`, `events.ts`, `PriceRuleSiteView.vue`, `FacebookPicksField.vue`, `FacebookObjectView.vue`, `ChecklistView.vue`, `GoogleAdsObjectView.vue`, `ChecklistItemDialog.vue`, `LoaderEditView.vue`, `AdTagInstallDialog.vue`, `AdjustmentDialog.vue`, `ad_tags/rules.ts`, `MetricStylePopover.vue`, `AdTagsView.vue`, `GamRunView.vue`, `Pagination.vue`, `ClientNetworksCard.vue`, `FacebookCampaignForm.vue`, `AdTagMetricsView.vue`, `LoadersView.vue`, `AdTagPreview.vue`, `cn`, `ApiError`, `PriceRuleSitesView.vue`, `PageBody.vue`, `drag.ts`, `vue-sonner`, `useSession`, `FiscalDataCard.vue`, `GoogleAdsAlertsPanel.vue`, `FieldsPanel.vue`, `LoaderPreview.vue`, `Button.vue`, `Input.vue`, `lucide-vue-next`, `GoogleAdsHistoryPanel.vue`, `PayeeDialog.vue`, `ClassifySitesDialog.vue`, `InvoiceDocument.vue`, `Field.vue`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.04389212057112639 - nodes in this community are weakly interconnected._