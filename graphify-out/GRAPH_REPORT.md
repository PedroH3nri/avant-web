# Graph Report - avant-web  (2026-10-23)

## Corpus Check
- 100 files · ~53,234 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .conf 1, .css 1)

## Summary
- 972 nodes · 2027 edges · 65 communities (59 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 21 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `f5413d95`
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
- ApiKeyDialog.vue
- NetworksView.vue
- Design System: Avant
- compilerOptions
- i18n.ts
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- vue-sonner
- cn
- PeopleView.vue
- steps
- devDependencies
- SidebarNav.vue
- RoleDialog.vue
- types.ts
- SitesView.vue
- Arquitetura do MVP do Avant
- errorText
- HomeView.vue
- McmView.vue
- account.ts
- RolesPanel.vue
- StaffView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- package.json
- Button.vue
- ApiKeysCard.vue
- LoginView.vue
- events.ts
- compilerOptions
- RecoveryCodes.vue
- SessionsCard.vue
- t
- MfaView.vue
- Avant: conexão com o GAM
- pick
- Avant: repositório e plano do MVP
- CompanySwitcher.vue
- scripts
- networks.ts
- vitest
- avant-web
- vue-router
- tailwindcss
- FakeSource
- .oxlintrc.json
- Avatar.vue
- avant-web
- SeatBar.vue
- tsconfig.json
- session-start.sh

## God Nodes (most connected - your core abstractions)
1. `t()` - 96 edges
2. `errorText()` - 77 edges
3. `vue` - 42 edges
4. `ApiError` - 34 edges
5. `useSession` - 33 edges
6. `api` - 29 edges
7. `vue-sonner` - 27 edges
8. `lucide-vue-next` - 24 edges
9. `cn()` - 23 edges
10. `pick()` - 19 edges

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

## Communities (65 total, 6 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.05
Nodes (42): busy, confirm, load(), session, status, unlink(), busy, current (+34 more)

### Community 1 - "session.ts"
Cohesion: 0.07
Nodes (36): pinia, vue, toasterTheme, logout(), langChosen(), Accent, accentCss(), accentFor() (+28 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (38): Client, ClientDetail, audit, auditBusy, candidates, canManage, canOwner, changed (+30 more)

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
Cohesion: 0.10
Nodes (22): approval(), Tone, tree(), AdUnit, canAssign, errorToast(), id, load() (+14 more)

### Community 7 - "ClientsView.vue"
Cohesion: 0.08
Nodes (25): CompanyPlan, adding, busy, canceling, cancelInvite(), cancelOpen, canManage, clients (+17 more)

### Community 8 - "InviteView.vue"
Cohesion: 0.09
Nodes (21): InvitationPreview, busy, companyName, companyOk, error, formOk, gone, invite (+13 more)

### Community 9 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), busy, Check, checks, code, copied, copy(), done (+13 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.10
Nodes (20): qrcode@1.5.4, qrcode, busy, code, codeError, codeOk, codes, desc (+12 more)

### Community 11 - "ApiKeyDialog.vue"
Cohesion: 0.10
Nodes (18): busy, catalog, chosen, copied, create(), DAYS, emit, groupLabel() (+10 more)

### Community 12 - "NetworksView.vue"
Cohesion: 0.12
Nodes (19): SyncRun, busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen (+11 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.10
Nodes (19): Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts, Don't: (+11 more)

### Community 14 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, isolatedModules, jsx, lib, module, moduleResolution, noEmit, noFallthroughCasesInSwitch (+10 more)

### Community 15 - "i18n.ts"
Cohesion: 0.15
Nodes (14): langs, auditActions, auditText(), chooseLang(), dict, errors, fallbackError, fill() (+6 more)

### Community 16 - "Groone Avant: contexto do projeto"
Cohesion: 0.12
Nodes (15): Arquitetura, Como trabalhar nos repositórios, Dicas de ambiente para o agente, Documentos de decisão, GAM, Groone Avant: contexto do projeto, Identidade visual, Infraestrutura e operação (+7 more)

### Community 17 - "Avant: endpoints da API do MVP"
Cohesion: 0.12
Nodes (16): API first e chaves de API, Atribuição de sites, Avant: endpoints da API do MVP, Catálogo de permissões, Convenções, Convites, Decisões de Pedro (23/10/2026), Empresa (+8 more)

### Community 18 - "vue-sonner"
Cohesion: 0.12
Nodes (16): dependencies, class-variance-authority@^0.7.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, pinia@^4.1.0, tailwind-merge@^3.7.0, vue@^3.5.44 (+8 more)

### Community 19 - "cn"
Cohesion: 0.17
Nodes (10): clsx@^2.1.1, clsx, item(), model, model, cn(), dot(), tabClass() (+2 more)

### Community 20 - "PeopleView.vue"
Cohesion: 0.16
Nodes (14): Person, Action, busy, confirm(), enable(), fail(), loadError, open (+6 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, branches, run, uses, with, runs-on (+6 more)

### Community 22 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, jsdom@^30.1.3, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @vue/test-utils@^2.5.1, vue-tsc@^3.3.13 (+7 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.16
Nodes (13): account(), backToClient(), clientItems, emit, internal, internalItems, items, route (+5 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.14
Nodes (13): busy, chosen, emit, groupLabel(), groups, name, open, props (+5 more)

### Community 25 - "types.ts"
Cohesion: 0.17
Nodes (14): AuditEntry, CompanyRef, CompanyStatus, Invitation, Member, MemberDetail, MembershipStatus, OwnerInvitation (+6 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.13
Nodes (14): archived, assignedOnly, canAssign, choice, loadError, networkId, networks, q (+6 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "errorText"
Cohesion: 0.18
Nodes (14): load(), revoke(), remove(), errorText(), load(), invite(), load(), accept() (+6 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.16
Nodes (12): td, th, Items, company, error, firstName, greeting, load() (+4 more)

### Community 30 - "McmView.vue"
Cohesion: 0.14
Nodes (12): McmCandidate, assign(), busy, candidates, clientId, clients, load(), loadError (+4 more)

### Community 31 - "account.ts"
Cohesion: 0.22
Nodes (10): created(), label(), BROWSERS, device(), first(), keyState, sortKeys(), SYSTEMS (+2 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (9): busy, canManage, deleteOpen, deleting, dialog, editing, props, roles (+1 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.15
Nodes (11): dot, Role, busy, email, emailOk, invites, loadError, roleId (+3 more)

### Community 34 - "Product"
Cohesion: 0.17
Nodes (11): Brand Commitments, Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles (+3 more)

### Community 35 - "Requisitos do novo SaaS AdTech Groone"
Cohesion: 0.17
Nodes (11): Conta e equipe, Escopo herdado do Genius, Integrações e onboarding no Google Ad Manager, Modelo de cobrança, MVP, Opções de nome, Perguntas em aberto, Problemas a resolver (+3 more)

### Community 36 - "Avant: fluxos de login e convite"
Cohesion: 0.17
Nodes (11): 2FA, Avant: fluxos de login e convite, Com Google, Com senha, Convite e primeiro acesso, Decisões de Pedro (23/10/2026), Endpoints de autenticação, Escolha da Empresa ativa (+3 more)

### Community 37 - "package.json"
Cohesion: 0.17
Nodes (11): @types/qrcode@1.5.5, typescript@~6.0.3, vite@^8.3.5, name, packageManager, private, type, version (+3 more)

### Community 38 - "Button.vue"
Cohesion: 0.23
Nodes (7): lucide-vue-next, open, button, classes, Props, open, open

### Community 39 - "ApiKeysCard.vue"
Cohesion: 0.17
Nodes (11): busy, canManage, creating, keys, loadError, permsText(), revokeOpen, revoking (+3 more)

### Community 40 - "LoginView.vue"
Cohesion: 0.17
Nodes (8): busy, email, error, password, route, router, session, submit()

### Community 41 - "events.ts"
Cohesion: 0.26
Nodes (10): close(), EventMap, Handler, handlers, listen(), NetworkUpdated, onEvent(), open() (+2 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 44 - "SessionsCard.vue"
Cohesion: 0.22
Nodes (10): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions (+2 more)

### Community 45 - "t"
Cohesion: 0.25
Nodes (11): summary(), t(), planOptions, tabLabel(), cancel(), errorToast(), patchMember(), removeMember() (+3 more)

### Community 46 - "MfaView.vue"
Cohesion: 0.22
Nodes (9): safeNext(), next, busy, code, error, route, router, session (+1 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "pick"
Cohesion: 0.20
Nodes (10): names, pick(), roleName(), roleOptions, permName(), permOptions, roleLabel, roleName() (+2 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "CompanySwitcher.vue"
Cohesion: 0.28
Nodes (6): reka-ui@^2.11.0, reka-ui, pick(), route, router, session

### Community 51 - "scripts"
Cohesion: 0.29
Nodes (7): scripts, build, dev, lint, preview, test, typecheck

### Community 52 - "networks.ts"
Cohesion: 0.29
Nodes (6): networkName(), statusTone, Network, NetworkStatus, netName(), networkOptions

### Community 53 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vitejs/plugin-vue, vitest

### Community 54 - "avant-web"
Cohesion: 0.33
Nodes (5): avant-web, Desenvolvimento, Imagem, Regras de tela, Stack

### Community 55 - "vue-router"
Cohesion: 0.40
Nodes (4): vue-router@^5.4.0, vue-router, RouteMeta, vue-router

### Community 56 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "Avatar.vue"
Cohesion: 0.50
Nodes (3): hue, initials, props

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `api.ts`, `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `ApiKeyDialog.vue`, `NetworksView.vue`, `i18n.ts`, `PeopleView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `errorText`, `HomeView.vue`, `McmView.vue`, `account.ts`, `RolesPanel.vue`, `StaffView.vue`, `Button.vue`, `ApiKeysCard.vue`, `LoginView.vue`, `RecoveryCodes.vue`, `SessionsCard.vue`, `MfaView.vue`, `CompanySwitcher.vue`, `networks.ts`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `api.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.05152394775036284 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `api.ts`, `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `ApiKeyDialog.vue`, `NetworksView.vue`, `i18n.ts`, `PeopleView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `HomeView.vue`, `McmView.vue`, `RolesPanel.vue`, `StaffView.vue`, `ApiKeysCard.vue`, `LoginView.vue`, `SessionsCard.vue`, `t`, `MfaView.vue`, `CompanySwitcher.vue`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `session.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.0700354609929078 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `session.ts` to `api.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `ApiKeyDialog.vue`, `NetworksView.vue`, `i18n.ts`, `vue-sonner`, `PeopleView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `HomeView.vue`, `McmView.vue`, `RolesPanel.vue`, `StaffView.vue`, `package.json`, `Button.vue`, `ApiKeysCard.vue`, `LoginView.vue`, `events.ts`, `RecoveryCodes.vue`, `SessionsCard.vue`, `MfaView.vue`, `Avatar.vue`, `SeatBar.vue`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06025641025641026 - nodes in this community are weakly interconnected._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06984126984126984 - nodes in this community are weakly interconnected._