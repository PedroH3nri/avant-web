# Graph Report - avant-web  (2026-10-24)

## Corpus Check
- 114 files · ~65,513 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 6, .conf 1, .css 1)

## Summary
- 1169 nodes · 2454 edges · 69 communities (65 shown, 4 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 26 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d6c7a3eb`
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
- errorText
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
- LoginView.vue
- ApiKeysCard.vue
- cn
- t
- Avant: conexão com o GAM
- router.ts
- Avant: repositório e plano do MVP
- PeopleView.vue
- Input.vue
- networks.ts
- Button.vue
- avant-web
- main.ts
- scripts
- i18n.ts
- .oxlintrc.json
- CompanySwitcher.vue
- avant-web
- PeriodPicker.vue
- tsconfig.json
- session-start.sh
- AccountView.vue
- Avatar.vue
- tailwindcss
- vitest

## God Nodes (most connected - your core abstractions)
1. `t()` - 116 edges
2. `errorText()` - 86 edges
3. `vue` - 52 edges
4. `ApiError` - 36 edges
5. `useSession` - 35 edges
6. `api` - 31 edges
7. `vue-sonner` - 28 edges
8. `cn()` - 28 edges
9. `lucide-vue-next` - 27 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Invitation` --references--> `expired()`  [INFERRED]
  docs/decisoes/03-models.md → src/views/internal/ClientsView.vue
- `Sites e ad units` --references--> `network()`  [INFERRED]
  docs/decisoes/06-endpoints-api.md → tests/contracts.test.ts
- `pick()` --calls--> `errorText()`  [EXTRACTED]
  src/components/CompanySwitcher.vue → src/lib/i18n.ts
- `useSession` --indirect_call--> `logout()`  [INFERRED]
  src/stores/session.ts → src/components/SidebarNav.vue
- `groupLabel()` --calls--> `t()`  [EXTRACTED]
  src/components/account/ApiKeyDialog.vue → src/lib/i18n.ts

## Import Cycles
- None detected.

## Communities (69 total, 4 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.23
Nodes (8): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, url()

### Community 1 - "session.ts"
Cohesion: 0.06
Nodes (39): pinia@^4.1.0, pinia, vue-sonner, toasterTheme, busy, confirm, load(), session (+31 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (39): AuditEntry, Client, ClientDetail, audit, auditBusy, candidates, canManage, canOwner (+31 more)

### Community 3 - "MemberView.vue"
Cohesion: 0.07
Nodes (32): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeSites, catalog, directBusy (+24 more)

### Community 4 - "TeamView.vue"
Cohesion: 0.07
Nodes (27): busy, canInvite, canManage, canRoles, company, dupe, email, emailOk (+19 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (27): approval(), Tone, tree(), AdUnit, busy, canAssign, canManage, errorToast() (+19 more)

### Community 7 - "ClientsView.vue"
Cohesion: 0.06
Nodes (32): props, seats, CompanyPlan, OwnerInvitation, adding, busy, canceling, cancelInvite() (+24 more)

### Community 8 - "InviteView.vue"
Cohesion: 0.08
Nodes (23): InvitationPreview, accept(), busy, companyName, companyOk, error, formOk, gone (+15 more)

### Community 9 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), SyncRun, busy, Check, code, copied, copy(), done (+13 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.12
Nodes (18): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+10 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (21): @vueuse/core@^15.0.0, @vueuse/core, areaPath, box, chartWidth, hovered, labelStep, linePath() (+13 more)

### Community 12 - "NetworksView.vue"
Cohesion: 0.13
Nodes (18): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+10 more)

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
Cohesion: 0.15
Nodes (13): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, qrcode@1.5.4, reka-ui@^2.11.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+5 more)

### Community 19 - "pick"
Cohesion: 0.18
Nodes (11): names, pick(), roleName(), roleOptions, permName(), permOptions, roleLabel, roleOptions (+3 more)

### Community 20 - "events.ts"
Cohesion: 0.15
Nodes (12): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+4 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, branches, run, uses, with, runs-on (+6 more)

### Community 22 - "package.json"
Cohesion: 0.10
Nodes (26): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3 (+18 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.14
Nodes (14): account(), clientId, emit, Group, GROUPS, onInternal, openLink(), ready (+6 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.12
Nodes (15): busy, category, chosen, emit, groupLabel(), groups, name, open (+7 more)

### Community 25 - "types.ts"
Cohesion: 0.09
Nodes (25): CompanyRef, CompanyStatus, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary, DimensionDef (+17 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.08
Nodes (25): model, networkName(), adding, archived, assignedOnly, canAssign, canConnect, canManage (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "ApiKeyDialog.vue"
Cohesion: 0.07
Nodes (35): busy, catalog, chosen, copied, copyToken(), create(), DAYS, emit (+27 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.14
Nodes (12): dot, Items, company, error, firstName, greeting, load(), lost (+4 more)

### Community 30 - "MfaView.vue"
Cohesion: 0.18
Nodes (7): busy, code, error, route, router, session, submit()

### Community 31 - "errorText"
Cohesion: 0.22
Nodes (11): errorText(), checks, load(), saveNotes(), load(), runDetail(), addSite(), link() (+3 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.14
Nodes (11): busy, canManage, deleteOpen, deleting, dialog, editing, props, remove() (+3 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.14
Nodes (14): td, th, Invitation, busy, email, emailOk, invite(), invites (+6 more)

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
Cohesion: 0.13
Nodes (14): Role, assign(), canManage, canTeam, editable(), isMe(), load(), loaded (+6 more)

### Community 38 - "PerformanceView.vue"
Cohesion: 0.10
Nodes (21): formatMetric(), barFormat(), byCountry, bySite, catalog, chartFormat(), chosen, chosenMetric (+13 more)

### Community 39 - "metrics.ts"
Cohesion: 0.18
Nodes (16): change(), countryName(), dailySeries(), daysOf(), REPORT_CURRENCY, shortDay(), toNumber(), MetricFormat (+8 more)

### Community 40 - "PasswordCard.vue"
Cohesion: 0.18
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 41 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "LoginView.vue"
Cohesion: 0.20
Nodes (9): busy, email, error, next, password, route, router, session (+1 more)

### Community 44 - "ApiKeysCard.vue"
Cohesion: 0.15
Nodes (15): busy, canManage, created(), creating, keys, load(), loadError, permsText() (+7 more)

### Community 45 - "cn"
Cohesion: 0.20
Nodes (9): Item, chipClass(), model, cn(), dot(), tabClass(), tabClass(), tab() (+1 more)

### Community 46 - "t"
Cohesion: 0.06
Nodes (47): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), t(), Contract, ContractNetwork, busy (+39 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "router.ts"
Cohesion: 0.25
Nodes (6): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, setUnauthorizedHandler(), routes

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "PeopleView.vue"
Cohesion: 0.16
Nodes (14): Person, Action, busy, confirm(), enable(), fail(), loadError, open (+6 more)

### Community 51 - "Input.vue"
Cohesion: 0.22
Nodes (6): model, busy, email, error, sent, submit()

### Community 52 - "networks.ts"
Cohesion: 0.50
Nodes (3): statusTone, Network, NetworkStatus

### Community 53 - "Button.vue"
Cohesion: 0.27
Nodes (6): lucide-vue-next, open, button, classes, Props, open

### Community 54 - "avant-web"
Cohesion: 0.33
Nodes (5): avant-web, Desenvolvimento, Imagem, Regras de tela, Stack

### Community 55 - "main.ts"
Cohesion: 0.29
Nodes (5): @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, @fontsource-variable/geist, @fontsource-variable/geist-mono, router

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.07
Nodes (31): vue, end(), ending, endingOthers, endOthers(), fail(), load(), loadError (+23 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "CompanySwitcher.vue"
Cohesion: 0.27
Nodes (6): reka-ui, pick(), route, router, session, open

### Community 61 - "PeriodPicker.vue"
Cohesion: 0.25
Nodes (7): compare, options, period, selected, Key, PERIOD_PRESETS, RelativePeriod

### Community 66 - "AccountView.vue"
Cohesion: 0.29
Nodes (4): route, router, session, sessions

### Community 67 - "Avatar.vue"
Cohesion: 0.50
Nodes (3): hue, initials, props

### Community 68 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 69 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vitejs/plugin-vue, vitest

## Knowledge Gaps
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `NetworksView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `errorText`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `metrics.ts`, `PasswordCard.vue`, `ResetView.vue`, `LoginView.vue`, `ApiKeysCard.vue`, `PeopleView.vue`, `Input.vue`, `Button.vue`, `i18n.ts`, `CompanySwitcher.vue`, `PeriodPicker.vue`, `AccountView.vue`?**
  _High betweenness centrality (0.111) - this node is a cross-community bridge._
- **Should `session.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.058069381598793365 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `LineChart.vue`, `NetworksView.vue`, `clean-code.mjs`, `dependencies`, `events.ts`, `package.json`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `LoginView.vue`, `ApiKeysCard.vue`, `t`, `PeopleView.vue`, `Input.vue`, `Button.vue`, `main.ts`, `CompanySwitcher.vue`, `PeriodPicker.vue`, `AccountView.vue`, `Avatar.vue`?**
  _High betweenness centrality (0.099) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05853658536585366 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `NetworksView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `LoginView.vue`, `ApiKeysCard.vue`, `t`, `PeopleView.vue`, `Input.vue`, `i18n.ts`, `CompanySwitcher.vue`, `AccountView.vue`?**
  _High betweenness centrality (0.055) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06984126984126984 - nodes in this community are weakly interconnected._
- **Should `TeamView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._