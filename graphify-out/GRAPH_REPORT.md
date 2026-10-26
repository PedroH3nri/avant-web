# Graph Report - avant-web  (2026-10-26)

## Corpus Check
- 122 files · ~72,085 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 6, .conf 1, .css 1)

## Summary
- 1291 nodes · 2830 edges · 76 communities (70 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 32 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b83479bb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- api.ts
- vue
- ClientView.vue
- MemberView.vue
- TeamView.vue
- Avant: models do MVP
- SiteDetailView.vue
- ClientsView.vue
- InviteView.vue
- NetworksView.vue
- MfaCard.vue
- LineChart.vue
- PageViewsView.vue
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- dependencies
- pick
- events.ts
- steps
- ResultsView.vue
- SidebarNav.vue
- RoleDialog.vue
- types.ts
- SitesView.vue
- Arquitetura do MVP do Avant
- ApiKeyDialog.vue
- HomeView.vue
- CostsView.vue
- ConnectView.vue
- RolesPanel.vue
- StaffView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- RolesView.vue
- PerformanceView.vue
- metrics.ts
- PasswordCard.vue
- ResetView.vue
- compilerOptions
- PeopleView.vue
- cn
- t
- t
- Avant: conexão com o GAM
- vue-router
- Avant: repositório e plano do MVP
- CompanySwitcher.vue
- router.ts
- ApiKeysCard.vue
- LoginView.vue
- avant-web
- Button.vue
- scripts
- i18n.ts
- .oxlintrc.json
- GoogleCard.vue
- avant-web
- PeriodPicker.vue
- tsconfig.json
- session-start.sh
- networks.ts
- tailwindcss
- session.ts
- devDependencies
- vitest
- CurrencyCard.vue
- sites.ts
- AccountView.vue
- BarChart.vue
- Avatar.vue
- Checkbox.vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 131 edges
2. `errorText()` - 98 edges
3. `vue` - 57 edges
4. `ApiError` - 41 edges
5. `useSession` - 40 edges
6. `api` - 36 edges
7. `cn()` - 34 edges
8. `vue-sonner` - 30 edges
9. `lucide-vue-next` - 29 edges
10. `vue-router` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Invitation` --references--> `expired()`  [INFERRED]
  docs/decisoes/03-models.md → src/views/internal/ClientsView.vue
- `Sites e ad units` --references--> `network()`  [INFERRED]
  docs/decisoes/06-endpoints-api.md → tests/contracts.test.ts
- `Item` --calls--> `cn()`  [EXTRACTED]
  src/components/SidebarNav.vue → src/lib/utils.ts
- `useSession` --indirect_call--> `logout()`  [INFERRED]
  src/stores/session.ts → src/components/SidebarNav.vue
- `groupLabel()` --calls--> `t()`  [EXTRACTED]
  src/components/account/ApiKeyDialog.vue → src/lib/i18n.ts

## Import Cycles
- None detected.

## Communities (76 total, 6 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.23
Nodes (8): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, url()

### Community 1 - "vue"
Cohesion: 0.10
Nodes (24): vue, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+16 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (39): AuditEntry, Client, ClientDetail, audit, auditBusy, candidates, canManage, canOwner (+31 more)

### Community 3 - "MemberView.vue"
Cohesion: 0.07
Nodes (31): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeSites, catalog, directBusy (+23 more)

### Community 4 - "TeamView.vue"
Cohesion: 0.06
Nodes (28): busy, canInvite, canManage, canRoles, company, dupe, email, emailOk (+20 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 7 - "ClientsView.vue"
Cohesion: 0.06
Nodes (34): props, seats, CompanyPlan, OwnerInvitation, adding, busy, canceling, cancelInvite() (+26 more)

### Community 8 - "InviteView.vue"
Cohesion: 0.08
Nodes (23): InvitationPreview, accept(), busy, companyName, companyOk, error, formOk, gone (+15 more)

### Community 9 - "NetworksView.vue"
Cohesion: 0.11
Nodes (20): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+12 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.12
Nodes (18): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+10 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (19): areaPath, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+11 more)

### Community 12 - "PageViewsView.vue"
Cohesion: 0.09
Nodes (29): @vueuse/core@^15.0.0, @vueuse/core, change(), countryName(), peakHour(), toNumber(), ReportQuery, ReportResult (+21 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.09
Nodes (21): Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts, Don't: (+13 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "clean-code.mjs"
Cohesion: 0.20
Nodes (14): allComments(), ALLOWED_SIDE_COMMENTS, checkFile(), checkScript(), visit(), checkTemplate(), visit(), commentLines() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.11
Nodes (17): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+9 more)

### Community 18 - "dependencies"
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4 (+11 more)

### Community 19 - "pick"
Cohesion: 0.18
Nodes (11): names, pick(), roleName(), roleOptions, permName(), permOptions, roleLabel, roleOptions (+3 more)

### Community 20 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, branches, run, uses, with, runs-on (+6 more)

### Community 22 - "ResultsView.vue"
Cohesion: 0.05
Nodes (53): dot, COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput() (+45 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.13
Nodes (15): account(), clientId, emit, Group, GROUPS, Item, onInternal, openLink() (+7 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.12
Nodes (16): busy, category, chipClass(), chosen, emit, groupLabel(), groups, name (+8 more)

### Community 25 - "types.ts"
Cohesion: 0.09
Nodes (25): CompanyRef, CompanyStatus, ContractClientRef, ContractNetworkRef, ContractSource, ContractSummary, CostLine, DimensionDef (+17 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.08
Nodes (29): networkName(), adding, addSite(), archived, assignedOnly, canAssign, canConnect, canManage (+21 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "ApiKeyDialog.vue"
Cohesion: 0.05
Nodes (45): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+37 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.15
Nodes (13): td, th, Items, company, error, firstName, greeting, load() (+5 more)

### Community 30 - "CostsView.vue"
Cohesion: 0.09
Nodes (24): FormulaCheck, busy, byMonth(), canManage, check, checkFormula, confirmRemove(), costs (+16 more)

### Community 31 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): SyncRun, busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.13
Nodes (12): busy, canManage, deleteOpen, deleting, dialog, editing, props, remove() (+4 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.15
Nodes (12): Invitation, busy, email, emailOk, invite(), invites, load(), loadError (+4 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "RolesView.vue"
Cohesion: 0.15
Nodes (13): assign(), canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+5 more)

### Community 38 - "PerformanceView.vue"
Cohesion: 0.09
Nodes (21): barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric, compare (+13 more)

### Community 39 - "metrics.ts"
Cohesion: 0.20
Nodes (14): dailySeries(), daysOf(), hourLabel(), hourlyItems(), REPORT_CURRENCY, shortDay(), MetricFormat, MetricKind (+6 more)

### Community 40 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 41 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "PeopleView.vue"
Cohesion: 0.16
Nodes (14): Person, Action, busy, confirm(), enable(), fail(), loadError, open (+6 more)

### Community 44 - "cn"
Cohesion: 0.21
Nodes (7): props, up, langs, open, model, cn(), kindClass()

### Community 45 - "t"
Cohesion: 0.33
Nodes (9): t(), effectOptions, cancel(), errorToast(), patchMember(), removeMember(), resend(), sendInvite() (+1 more)

### Community 46 - "t"
Cohesion: 0.06
Nodes (45): pick(), contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), errorText(), Contract, ContractNetwork (+37 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "vue-router"
Cohesion: 0.40
Nodes (4): vue-router@^5.4.0, vue-router, RouteMeta, vue-router

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "CompanySwitcher.vue"
Cohesion: 0.31
Nodes (5): reka-ui, route, router, session, open

### Community 51 - "router.ts"
Cohesion: 0.15
Nodes (8): setUnauthorizedHandler(), router, routes, busy, email, error, sent, submit()

### Community 52 - "ApiKeysCard.vue"
Cohesion: 0.15
Nodes (15): busy, canManage, created(), creating, keys, load(), loadError, permsText() (+7 more)

### Community 53 - "LoginView.vue"
Cohesion: 0.11
Nodes (18): model, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 54 - "avant-web"
Cohesion: 0.33
Nodes (5): avant-web, Desenvolvimento, Imagem, Regras de tela, Stack

### Community 55 - "Button.vue"
Cohesion: 0.32
Nodes (5): lucide-vue-next, open, button, classes, Props

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.14
Nodes (12): auditActions, auditText(), chooseLang(), dict, errors, fallbackError, fill(), formatAgo() (+4 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "GoogleCard.vue"
Cohesion: 0.22
Nodes (7): busy, confirm, load(), session, status, unlink(), GoogleStatus

### Community 61 - "PeriodPicker.vue"
Cohesion: 0.25
Nodes (7): compare, options, period, selected, Key, PERIOD_PRESETS, RelativePeriod

### Community 65 - "networks.ts"
Cohesion: 0.33
Nodes (5): statusTone, validCode(), Network, NetworkStatus, valid

### Community 66 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 67 - "session.ts"
Cohesion: 0.23
Nodes (7): pinia, vitest, logout(), langChosen(), Me, useSession, Blank

### Community 68 - "devDependencies"
Cohesion: 0.10
Nodes (27): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+19 more)

### Community 70 - "CurrencyCard.vue"
Cohesion: 0.18
Nodes (10): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+2 more)

### Community 71 - "sites.ts"
Cohesion: 0.36
Nodes (5): approval(), Tone, tree(), AdUnit, rows

### Community 72 - "AccountView.vue"
Cohesion: 0.33
Nodes (4): route, router, session, sessions

### Community 73 - "BarChart.vue"
Cohesion: 0.40
Nodes (3): BarItem, largest, props

### Community 74 - "Avatar.vue"
Cohesion: 0.50
Nodes (3): hue, initials, props

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `ResultsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `metrics.ts`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `cn`, `t`, `CompanySwitcher.vue`, `router.ts`, `ApiKeysCard.vue`, `LoginView.vue`, `Button.vue`, `i18n.ts`, `GoogleCard.vue`, `PeriodPicker.vue`, `CurrencyCard.vue`, `sites.ts`, `AccountView.vue`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `vue` be split into smaller, more focused modules?**
  _Cohesion score 0.09885057471264368 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `vue` to `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `LineChart.vue`, `PageViewsView.vue`, `clean-code.mjs`, `dependencies`, `events.ts`, `ResultsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `cn`, `t`, `CompanySwitcher.vue`, `router.ts`, `ApiKeysCard.vue`, `LoginView.vue`, `Button.vue`, `i18n.ts`, `GoogleCard.vue`, `PeriodPicker.vue`, `session.ts`, `devDependencies`, `CurrencyCard.vue`, `AccountView.vue`, `BarChart.vue`, `Avatar.vue`?**
  _High betweenness centrality (0.088) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05853658536585366 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `ResultsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `t`, `CompanySwitcher.vue`, `router.ts`, `ApiKeysCard.vue`, `LoginView.vue`, `i18n.ts`, `GoogleCard.vue`, `CurrencyCard.vue`, `AccountView.vue`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.07226890756302522 - nodes in this community are weakly interconnected._
- **Should `TeamView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._