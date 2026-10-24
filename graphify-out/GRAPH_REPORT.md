# Graph Report - avant-web  (2026-10-24)

## Corpus Check
- 112 files · ~62,849 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 6, .conf 1, .css 1)

## Summary
- 1121 nodes · 2357 edges · 69 communities (65 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 25 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8af52a83`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- api.ts
- session.ts
- ClientView.vue
- MemberView.vue
- TeamView.vue
- Avant: models do MVP
- SiteDetailView.vue
- ClientsView.vue
- InviteView.vue
- ConnectView.vue
- MfaCard.vue
- LineChart.vue
- NetworksView.vue
- Design System: Avant
- compilerOptions
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- vue-sonner
- session.ts
- events.ts
- steps
- package.json
- SidebarNav.vue
- RoleDialog.vue
- types.ts
- SitesView.vue
- Arquitetura do MVP do Avant
- ApiKeyDialog.vue
- HomeView.vue
- McmView.vue
- errorText
- RolesPanel.vue
- StaffView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- RolesView.vue
- PerformanceView.vue
- metrics.ts
- router.ts
- ResetView.vue
- compilerOptions
- t
- ApiKeysCard.vue
- cn
- i18n.ts
- Avant: conexão com o GAM
- vue-router
- Avant: repositório e plano do MVP
- PeopleView.vue
- SessionsCard.vue
- networks.ts
- Button.vue
- avant-web
- pick
- CompanySwitcher.vue
- LoginView.vue
- .oxlintrc.json
- GoogleCard.vue
- avant-web
- PeriodPicker.vue
- tsconfig.json
- session-start.sh
- sites.ts
- AccountView.vue
- Avatar.vue
- Site

## God Nodes (most connected - your core abstractions)
1. `t()` - 109 edges
2. `errorText()` - 83 edges
3. `vue` - 52 edges
4. `ApiError` - 36 edges
5. `useSession` - 35 edges
6. `api` - 31 edges
7. `vue-sonner` - 28 edges
8. `lucide-vue-next` - 26 edges
9. `cn()` - 24 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Invitation` --references--> `expired()`  [INFERRED]
  docs/decisoes/03-models.md → src/views/internal/ClientsView.vue
- `pick()` --calls--> `errorText()`  [EXTRACTED]
  src/components/CompanySwitcher.vue → src/lib/i18n.ts
- `useSession` --indirect_call--> `logout()`  [INFERRED]
  src/stores/session.ts → src/components/SidebarNav.vue
- `groupLabel()` --calls--> `t()`  [EXTRACTED]
  src/components/account/ApiKeyDialog.vue → src/lib/i18n.ts
- `options` --calls--> `t()`  [EXTRACTED]
  src/components/account/ApiKeyDialog.vue → src/lib/i18n.ts

## Import Cycles
- None detected.

## Communities (69 total, 4 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.22
Nodes (9): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler() (+1 more)

### Community 1 - "session.ts"
Cohesion: 0.09
Nodes (27): vue, toasterTheme, BarItem, largest, props, Accent, accentCss(), accentFor() (+19 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (38): Client, ClientDetail, audit, auditBusy, candidates, canManage, canOwner, changed (+30 more)

### Community 3 - "MemberView.vue"
Cohesion: 0.07
Nodes (32): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeSites, catalog, directBusy (+24 more)

### Community 4 - "TeamView.vue"
Cohesion: 0.07
Nodes (26): busy, canInvite, canManage, canRoles, company, dupe, email, emailOk (+18 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 7 - "ClientsView.vue"
Cohesion: 0.07
Nodes (30): props, seats, CompanyPlan, OwnerInvitation, adding, busy, canceling, cancelInvite() (+22 more)

### Community 8 - "InviteView.vue"
Cohesion: 0.08
Nodes (23): InvitationPreview, accept(), busy, companyName, companyOk, error, formOk, gone (+15 more)

### Community 9 - "ConnectView.vue"
Cohesion: 0.11
Nodes (20): SyncRun, busy, Check, checks, code, copied, copy(), done (+12 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.07
Nodes (30): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+22 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (21): @vueuse/core@^15.0.0, @vueuse/core, areaPath, box, chartWidth, hovered, labelStep, linePath() (+13 more)

### Community 12 - "NetworksView.vue"
Cohesion: 0.11
Nodes (20): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+12 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.10
Nodes (20): Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts, Don't: (+12 more)

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
Cohesion: 0.12
Nodes (16): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+8 more)

### Community 18 - "vue-sonner"
Cohesion: 0.17
Nodes (12): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, pinia@^4.1.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44, vue-sonner@^2.0.9 (+4 more)

### Community 19 - "session.ts"
Cohesion: 0.22
Nodes (7): pinia, logout(), langChosen(), LoginResult, Me, useSession, Blank

### Community 20 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, branches, run, uses, with, runs-on (+6 more)

### Community 22 - "package.json"
Cohesion: 0.05
Nodes (46): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, tailwindcss@3.4.19 (+38 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.15
Nodes (13): account(), CLIENT, clientId, emit, goClient(), INTERNAL, onInternal, ready (+5 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.15
Nodes (12): busy, chosen, emit, groups, name, open, props, save() (+4 more)

### Community 25 - "types.ts"
Cohesion: 0.12
Nodes (18): AuditEntry, CompanyRef, CompanyStatus, DimensionDef, FilterOperator, Localized, Member, MemberDetail (+10 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.08
Nodes (28): networkName(), adding, addSite(), archived, assignedOnly, canAssign, canConnect, canManage (+20 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "ApiKeyDialog.vue"
Cohesion: 0.06
Nodes (36): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+28 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.14
Nodes (12): dot, Items, company, error, firstName, greeting, load(), lost (+4 more)

### Community 30 - "McmView.vue"
Cohesion: 0.14
Nodes (13): td, th, McmCandidate, busy, candidates, clientId, clients, load() (+5 more)

### Community 31 - "errorText"
Cohesion: 0.25
Nodes (8): errorText(), fill(), load(), assign(), search(), invite(), load(), load()

### Community 32 - "RolesPanel.vue"
Cohesion: 0.14
Nodes (10): open, busy, canManage, deleteOpen, deleting, dialog, editing, props (+2 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.15
Nodes (12): Invitation, busy, email, emailOk, invites, loadError, roleId, roleName() (+4 more)

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
Nodes (13): Permission, canManage, canTeam, editable(), isMe(), load(), loaded, loadError (+5 more)

### Community 38 - "PerformanceView.vue"
Cohesion: 0.09
Nodes (22): locale, formatMetric(), barFormat(), byCountry, bySite, catalog, chartFormat(), chosen (+14 more)

### Community 39 - "metrics.ts"
Cohesion: 0.18
Nodes (16): change(), countryName(), dailySeries(), daysOf(), REPORT_CURRENCY, shortDay(), toNumber(), MetricFormat (+8 more)

### Community 40 - "router.ts"
Cohesion: 0.15
Nodes (7): router, routes, busy, email, error, sent, submit()

### Community 41 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "t"
Cohesion: 0.23
Nodes (12): groupLabel(), remove(), summary(), t(), assign(), cancel(), errorToast(), patchMember() (+4 more)

### Community 44 - "ApiKeysCard.vue"
Cohesion: 0.14
Nodes (15): busy, canManage, created(), creating, keys, load(), loadError, permsText() (+7 more)

### Community 45 - "cn"
Cohesion: 0.17
Nodes (10): props, up, Item, open, model, cn(), dot(), tabClass() (+2 more)

### Community 46 - "i18n.ts"
Cohesion: 0.16
Nodes (11): langs, auditActions, auditText(), chooseLang(), dict, errors, fallbackError, formatAgo() (+3 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "vue-router"
Cohesion: 0.40
Nodes (4): vue-router@^5.4.0, vue-router, RouteMeta, vue-router

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PeopleView.vue"
Cohesion: 0.17
Nodes (13): Person, Action, busy, confirm(), enable(), fail(), loadError, open (+5 more)

### Community 51 - "SessionsCard.vue"
Cohesion: 0.22
Nodes (10): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions (+2 more)

### Community 52 - "networks.ts"
Cohesion: 0.33
Nodes (5): statusTone, validCode(), Network, NetworkStatus, valid

### Community 53 - "Button.vue"
Cohesion: 0.31
Nodes (6): lucide-vue-next@^1.0.0, lucide-vue-next, button, classes, Props, open

### Community 54 - "avant-web"
Cohesion: 0.33
Nodes (5): avant-web, Desenvolvimento, Imagem, Regras de tela, Stack

### Community 55 - "pick"
Cohesion: 0.22
Nodes (9): names, pick(), permName(), permOptions, roleLabel, roleOptions, roleName(), roleOptions (+1 more)

### Community 56 - "CompanySwitcher.vue"
Cohesion: 0.32
Nodes (5): reka-ui, pick(), route, router, session

### Community 57 - "LoginView.vue"
Cohesion: 0.11
Nodes (18): model, safeNext(), busy, email, error, next, password, route (+10 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "GoogleCard.vue"
Cohesion: 0.25
Nodes (7): busy, confirm, load(), session, status, unlink(), GoogleStatus

### Community 61 - "PeriodPicker.vue"
Cohesion: 0.25
Nodes (7): compare, options, period, selected, Key, PERIOD_PRESETS, RelativePeriod

### Community 65 - "sites.ts"
Cohesion: 0.36
Nodes (5): approval(), Tone, tree(), AdUnit, rows

### Community 66 - "AccountView.vue"
Cohesion: 0.33
Nodes (4): route, router, session, sessions

### Community 67 - "Avatar.vue"
Cohesion: 0.50
Nodes (3): hue, initials, props

### Community 68 - "Site"
Cohesion: 0.67
Nodes (3): Site, SiteDetail, SiteListItem

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `session.ts` to `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `LineChart.vue`, `NetworksView.vue`, `clean-code.mjs`, `vue-sonner`, `session.ts`, `events.ts`, `package.json`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `McmView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `router.ts`, `ResetView.vue`, `ApiKeysCard.vue`, `cn`, `i18n.ts`, `PeopleView.vue`, `SessionsCard.vue`, `Button.vue`, `LoginView.vue`, `GoogleCard.vue`, `PeriodPicker.vue`, `AccountView.vue`, `Avatar.vue`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Should `session.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.08522727272727272 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `NetworksView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `McmView.vue`, `errorText`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `metrics.ts`, `router.ts`, `ResetView.vue`, `ApiKeysCard.vue`, `cn`, `i18n.ts`, `PeopleView.vue`, `SessionsCard.vue`, `Button.vue`, `CompanySwitcher.vue`, `LoginView.vue`, `GoogleCard.vue`, `PeriodPicker.vue`, `sites.ts`, `AccountView.vue`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06025641025641026 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `NetworksView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `McmView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `router.ts`, `ResetView.vue`, `t`, `ApiKeysCard.vue`, `i18n.ts`, `PeopleView.vue`, `SessionsCard.vue`, `CompanySwitcher.vue`, `LoginView.vue`, `GoogleCard.vue`, `AccountView.vue`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06984126984126984 - nodes in this community are weakly interconnected._
- **Should `TeamView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._