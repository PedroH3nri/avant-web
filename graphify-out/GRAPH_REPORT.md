# Graph Report - avant-web  (2026-10-26)

## Corpus Check
- 116 files · ~67,696 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 6, .conf 1, .css 1)

## Summary
- 1207 nodes · 2581 edges · 70 communities (65 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 28 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `be910ed0`
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
- package.json
- SidebarNav.vue
- RoleDialog.vue
- types.ts
- SitesView.vue
- Arquitetura do MVP do Avant
- ApiKeyDialog.vue
- HomeView.vue
- MfaView.vue
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
- Input.vue
- SessionsCard.vue
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
- devDependencies
- vitest
- FakeSource

## God Nodes (most connected - your core abstractions)
1. `t()` - 122 edges
2. `errorText()` - 90 edges
3. `vue` - 54 edges
4. `ApiError` - 38 edges
5. `useSession` - 37 edges
6. `api` - 33 edges
7. `vue-sonner` - 29 edges
8. `lucide-vue-next` - 28 edges
9. `cn()` - 28 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Invitation` --references--> `expired()`  [INFERRED]
  docs/decisoes/03-models.md → src/views/internal/ClientsView.vue
- `Sites e ad units` --references--> `network()`  [INFERRED]
  docs/decisoes/06-endpoints-api.md → tests/contracts.test.ts
- `useSession` --indirect_call--> `logout()`  [INFERRED]
  src/stores/session.ts → src/components/SidebarNav.vue
- `pick()` --calls--> `errorText()`  [EXTRACTED]
  src/components/CompanySwitcher.vue → src/lib/i18n.ts
- `Item` --calls--> `cn()`  [EXTRACTED]
  src/components/SidebarNav.vue → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (70 total, 5 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.22
Nodes (9): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler() (+1 more)

### Community 1 - "vue"
Cohesion: 0.05
Nodes (45): pinia@^4.1.0, pinia, vue, toasterTheme, busy, chosen, currencies, currencyLabel() (+37 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (39): AuditEntry, Client, ClientDetail, audit, auditBusy, candidates, canManage, canOwner (+31 more)

### Community 3 - "MemberView.vue"
Cohesion: 0.06
Nodes (35): DirectPermission, Site, SiteDetail, SiteListItem, allSites, assigned, canAssign, canGrant (+27 more)

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
Cohesion: 0.06
Nodes (33): props, seats, CompanyPlan, OwnerInvitation, adding, busy, canceling, cancelInvite() (+25 more)

### Community 8 - "InviteView.vue"
Cohesion: 0.08
Nodes (23): InvitationPreview, accept(), busy, companyName, companyOk, error, formOk, gone (+15 more)

### Community 9 - "NetworksView.vue"
Cohesion: 0.11
Nodes (20): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+12 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.10
Nodes (20): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+12 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (21): @vueuse/core@^15.0.0, @vueuse/core, areaPath, box, chartWidth, hovered, labelStep, linePath() (+13 more)

### Community 12 - "PageViewsView.vue"
Cohesion: 0.10
Nodes (23): props, up, change(), peakHour(), toNumber(), byCountry, byHour, bySite (+15 more)

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
Cohesion: 0.12
Nodes (16): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, reka-ui@^2.11.0, tailwind-merge@^3.7.0 (+8 more)

### Community 19 - "pick"
Cohesion: 0.18
Nodes (11): names, pick(), roleName(), roleOptions, permName(), permOptions, roleLabel, roleOptions (+3 more)

### Community 20 - "events.ts"
Cohesion: 0.23
Nodes (10): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+2 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, branches, run, uses, with, runs-on (+6 more)

### Community 22 - "package.json"
Cohesion: 0.17
Nodes (11): jsdom@^30.1.3, oxlint@^1.89.0, typescript@~6.0.3, name, packageManager, private, type, version (+3 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.12
Nodes (16): account(), clientId, emit, Group, GROUPS, Item, logout(), onInternal (+8 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.11
Nodes (16): busy, category, chosen, emit, groupLabel(), groups, name, open (+8 more)

### Community 25 - "types.ts"
Cohesion: 0.10
Nodes (21): CompanyRef, CompanyStatus, ContractClientRef, ContractNetworkRef, ContractSource, ContractSummary, DimensionDef, FilterOperator (+13 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.07
Nodes (33): networkName(), approval(), Tone, tree(), AdUnit, rows, adding, addSite() (+25 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "ApiKeyDialog.vue"
Cohesion: 0.05
Nodes (50): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+42 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.17
Nodes (11): CompanyDetail, company, error, firstName, greeting, load(), lost, networks (+3 more)

### Community 30 - "MfaView.vue"
Cohesion: 0.15
Nodes (9): router, routes, busy, code, error, route, router, session (+1 more)

### Community 31 - "ConnectView.vue"
Cohesion: 0.11
Nodes (20): SyncRun, busy, Check, checks, code, copied, copy(), done (+12 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.13
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, props, remove() (+5 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.14
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
Cohesion: 0.14
Nodes (14): Permission, assign(), canManage, canTeam, editable(), isMe(), load(), loaded (+6 more)

### Community 38 - "PerformanceView.vue"
Cohesion: 0.08
Nodes (27): countryName(), formatMetric(), show(), barFormat(), byCountry, bySite, catalog, chartFormat() (+19 more)

### Community 39 - "metrics.ts"
Cohesion: 0.14
Nodes (17): BarItem, largest, props, dailySeries(), daysOf(), hourLabel(), hourlyItems(), REPORT_CURRENCY (+9 more)

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
Cohesion: 0.14
Nodes (15): dot, Person, Action, busy, confirm(), enable(), fail(), loadError (+7 more)

### Community 44 - "cn"
Cohesion: 0.17
Nodes (9): chipClass(), open, model, cn(), dot(), tabClass(), tabClass(), tab() (+1 more)

### Community 45 - "t"
Cohesion: 0.39
Nodes (8): t(), cancel(), errorToast(), patchMember(), removeMember(), resend(), sendInvite(), tabs

### Community 46 - "t"
Cohesion: 0.06
Nodes (44): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), errorText(), Contract, ContractNetwork, ContractStatus (+36 more)

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
Cohesion: 0.18
Nodes (9): reka-ui, pick(), route, router, session, hue, initials, props (+1 more)

### Community 51 - "Input.vue"
Cohesion: 0.22
Nodes (6): model, busy, email, error, sent, submit()

### Community 52 - "SessionsCard.vue"
Cohesion: 0.20
Nodes (11): end(), ending, endingOthers, endOthers(), fail(), label(), load(), loadError (+3 more)

### Community 53 - "LoginView.vue"
Cohesion: 0.18
Nodes (9): busy, email, error, next, password, route, router, session (+1 more)

### Community 54 - "avant-web"
Cohesion: 0.33
Nodes (5): avant-web, Desenvolvimento, Imagem, Regras de tela, Stack

### Community 55 - "Button.vue"
Cohesion: 0.47
Nodes (4): lucide-vue-next, button, classes, Props

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.13
Nodes (14): langs, auditActions, auditText(), chooseLang(), dict, errors, fallbackError, fill() (+6 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "GoogleCard.vue"
Cohesion: 0.22
Nodes (8): busy, confirm, load(), session, status, unlink(), open, GoogleStatus

### Community 61 - "PeriodPicker.vue"
Cohesion: 0.25
Nodes (7): compare, options, period, selected, Key, PERIOD_PRESETS, RelativePeriod

### Community 65 - "networks.ts"
Cohesion: 0.33
Nodes (5): statusTone, validCode(), Network, NetworkStatus, valid

### Community 66 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 68 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, vite@^8.3.5, @vue/test-utils@^2.5.1, vue-tsc@^3.3.13 (+7 more)

### Community 69 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vitejs/plugin-vue, vitest

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `vue` to `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `LineChart.vue`, `PageViewsView.vue`, `clean-code.mjs`, `dependencies`, `events.ts`, `package.json`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `metrics.ts`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `t`, `CompanySwitcher.vue`, `Input.vue`, `SessionsCard.vue`, `LoginView.vue`, `Button.vue`, `i18n.ts`, `GoogleCard.vue`, `PeriodPicker.vue`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05129561078794289 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `metrics.ts`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `cn`, `t`, `CompanySwitcher.vue`, `Input.vue`, `SessionsCard.vue`, `LoginView.vue`, `Button.vue`, `i18n.ts`, `GoogleCard.vue`, `PeriodPicker.vue`?**
  _High betweenness centrality (0.089) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05853658536585366 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `t`, `CompanySwitcher.vue`, `Input.vue`, `SessionsCard.vue`, `LoginView.vue`, `i18n.ts`, `GoogleCard.vue`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06477732793522267 - nodes in this community are weakly interconnected._
- **Should `TeamView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._