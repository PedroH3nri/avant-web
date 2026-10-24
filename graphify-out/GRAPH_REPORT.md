# Graph Report - avant-web  (2026-10-24)

## Corpus Check
- 105 files · ~58,800 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: (none) 5, .conf 1, .css 1)

## Summary
- 1028 nodes · 2163 edges · 66 communities (59 shown, 7 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `576a2efb`
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
- clean-code.mjs
- Groone Avant: contexto do projeto
- Avant: endpoints da API do MVP
- vue-sonner
- session.ts
- events.ts
- steps
- devDependencies
- PeopleView.vue
- RoleDialog.vue
- types.ts
- SitesView.vue
- Arquitetura do MVP do Avant
- ApiKeysCard.vue
- HomeView.vue
- McmView.vue
- errorText
- RolesPanel.vue
- StaffView.vue
- Product
- Requisitos do novo SaaS AdTech Groone
- Avant: fluxos de login e convite
- RolesView.vue
- LoginView.vue
- package.json
- router.ts
- ResetView.vue
- compilerOptions
- t
- PasswordCard.vue
- Status.vue
- i18n.ts
- Avant: conexão com o GAM
- vue-router
- Avant: repositório e plano do MVP
- Checkbox.vue
- scripts
- networks.ts
- vitest
- avant-web
- tailwindcss
- MfaView.vue
- .oxlintrc.json
- GoogleCard.vue
- avant-web
- tsconfig.json
- session-start.sh
- router.ts
- AccountView.vue
- vue

## God Nodes (most connected - your core abstractions)
1. `t()` - 102 edges
2. `errorText()` - 81 edges
3. `vue` - 47 edges
4. `ApiError` - 35 edges
5. `useSession` - 35 edges
6. `api` - 30 edges
7. `vue-sonner` - 28 edges
8. `lucide-vue-next` - 24 edges
9. `cn()` - 23 edges
10. `pick()` - 21 edges

## Surprising Connections (you probably didn't know these)
- `Invitation` --references--> `expired()`  [INFERRED]
  docs/decisoes/03-models.md → src/views/internal/ClientsView.vue
- `useSession` --indirect_call--> `logout()`  [INFERRED]
  src/stores/session.ts → src/components/SidebarNav.vue
- `pick()` --calls--> `errorText()`  [EXTRACTED]
  src/components/CompanySwitcher.vue → src/lib/i18n.ts
- `groupLabel()` --calls--> `t()`  [EXTRACTED]
  src/components/account/ApiKeyDialog.vue → src/lib/i18n.ts
- `options` --calls--> `t()`  [EXTRACTED]
  src/components/account/ApiKeyDialog.vue → src/lib/i18n.ts

## Import Cycles
- None detected.

## Communities (66 total, 7 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.22
Nodes (9): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler() (+1 more)

### Community 1 - "session.ts"
Cohesion: 0.10
Nodes (24): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+16 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (38): Client, ClientDetail, audit, auditBusy, candidates, canManage, canOwner, changed (+30 more)

### Community 3 - "MemberView.vue"
Cohesion: 0.05
Nodes (43): names, pick(), DirectPermission, roleName(), roleOptions, allSites, assigned, canAssign (+35 more)

### Community 4 - "TeamView.vue"
Cohesion: 0.07
Nodes (26): busy, canInvite, canManage, canRoles, company, dupe, email, emailOk (+18 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "SiteDetailView.vue"
Cohesion: 0.08
Nodes (30): approval(), Tone, tree(), AdUnit, Site, SiteDetail, SiteListItem, busy (+22 more)

### Community 7 - "ClientsView.vue"
Cohesion: 0.08
Nodes (27): adding, busy, canceling, cancelInvite(), cancelOpen, canManage, clients, counts (+19 more)

### Community 8 - "InviteView.vue"
Cohesion: 0.08
Nodes (23): InvitationPreview, accept(), busy, companyName, companyOk, error, formOk, gone (+15 more)

### Community 9 - "ConnectView.vue"
Cohesion: 0.11
Nodes (22): validCode(), SyncRun, busy, Check, checks, code, copied, copy() (+14 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.13
Nodes (16): busy, code, codeError, codeOk, codes, enabled, fail(), Mode (+8 more)

### Community 11 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): busy, catalog, chosen, copied, create(), DAYS, emit, groupLabel() (+9 more)

### Community 12 - "NetworksView.vue"
Cohesion: 0.11
Nodes (20): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+12 more)

### Community 13 - "Design System: Avant"
Cohesion: 0.10
Nodes (19): Buttons, Cards / Containers, Colors, Components, Design System: Avant, Do:, Do's and Don'ts, Don't: (+11 more)

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
Cohesion: 0.11
Nodes (19): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, @fontsource-variable/geist-mono@^5.3.0, lucide-vue-next@^1.0.0, qrcode@1.5.4, reka-ui@^2.11.0 (+11 more)

### Community 19 - "session.ts"
Cohesion: 0.22
Nodes (7): pinia@^4.1.0, pinia, langChosen(), LoginResult, Me, useSession, Blank

### Community 20 - "events.ts"
Cohesion: 0.16
Nodes (11): close(), EventMap, Handler, handlers, listen(), NetworkUpdated, onEvent(), open() (+3 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, branches, run, uses, with, runs-on (+6 more)

### Community 22 - "devDependencies"
Cohesion: 0.13
Nodes (15): devDependencies, autoprefixer@^10.6.1, postcss@^8.5.31, @types/qrcode@1.5.5, typescript@~6.0.3, vite@^8.3.5, @vue/test-utils@^2.5.1, vue-tsc@^3.3.13 (+7 more)

### Community 23 - "PeopleView.vue"
Cohesion: 0.05
Nodes (48): lucide-vue-next, reka-ui, pick(), route, router, session, open, account() (+40 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.15
Nodes (12): busy, chosen, emit, groupLabel(), groups, name, open, props (+4 more)

### Community 25 - "types.ts"
Cohesion: 0.15
Nodes (15): ApiKey, ApiKeyCreated, AuditEntry, CompanyPlan, CompanyRef, CompanyStatus, Member, MemberDetail (+7 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.08
Nodes (25): networkName(), adding, addSite(), archived, assignedOnly, canAssign, canConnect, canManage (+17 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "ApiKeysCard.vue"
Cohesion: 0.06
Nodes (41): copyToken(), busy, canManage, created(), creating, keys, load(), loadError (+33 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.18
Nodes (10): Items, company, error, firstName, greeting, lost, networks, router (+2 more)

### Community 30 - "McmView.vue"
Cohesion: 0.17
Nodes (10): McmCandidate, busy, candidates, clientId, clients, loadError, open, options (+2 more)

### Community 31 - "errorText"
Cohesion: 0.20
Nodes (12): remove(), errorText(), load(), assign(), load(), invite(), load(), assign() (+4 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.14
Nodes (12): busy, canManage, deleteOpen, deleting, dialog, editing, props, roles (+4 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.17
Nodes (10): Invitation, busy, email, emailOk, invites, loadError, roleId, roles (+2 more)

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
Cohesion: 0.17
Nodes (12): canManage, canTeam, editable(), isMe(), load(), loaded, loadError, members (+4 more)

### Community 38 - "LoginView.vue"
Cohesion: 0.17
Nodes (8): busy, email, error, password, route, router, session, submit()

### Community 39 - "package.json"
Cohesion: 0.17
Nodes (11): jsdom@^30.1.3, oxlint@^1.89.0, @types/node@^24.19.2, name, packageManager, private, type, version (+3 more)

### Community 40 - "router.ts"
Cohesion: 0.22
Nodes (6): model, busy, email, error, sent, submit()

### Community 41 - "ResetView.vue"
Cohesion: 0.17
Nodes (11): busy, error, mfa, mismatch, password, password2, route, router (+3 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "t"
Cohesion: 0.29
Nodes (10): desc, title, t(), cancel(), errorToast(), patchMember(), removeMember(), resend() (+2 more)

### Community 44 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 46 - "i18n.ts"
Cohesion: 0.15
Nodes (14): langs, auditActions, auditText(), chooseLang(), dict, errors, fallbackError, fill() (+6 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "vue-router"
Cohesion: 0.40
Nodes (4): vue-router@^5.4.0, vue-router, RouteMeta, vue-router

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 51 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 52 - "networks.ts"
Cohesion: 0.50
Nodes (3): statusTone, Network, NetworkStatus

### Community 53 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vitejs/plugin-vue, vitest

### Community 54 - "avant-web"
Cohesion: 0.33
Nodes (5): avant-web, Desenvolvimento, Imagem, Regras de tela, Stack

### Community 56 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 57 - "MfaView.vue"
Cohesion: 0.22
Nodes (9): safeNext(), next, busy, code, error, route, router, session (+1 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "GoogleCard.vue"
Cohesion: 0.22
Nodes (7): busy, confirm, load(), session, status, unlink(), GoogleStatus

### Community 66 - "AccountView.vue"
Cohesion: 0.33
Nodes (4): route, router, session, sessions

### Community 67 - "vue"
Cohesion: 0.20
Nodes (6): vue, hue, initials, props, props, seats

## Knowledge Gaps
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `vue` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `ApiKeyDialog.vue`, `NetworksView.vue`, `clean-code.mjs`, `vue-sonner`, `session.ts`, `events.ts`, `PeopleView.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeysCard.vue`, `HomeView.vue`, `McmView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `LoginView.vue`, `package.json`, `router.ts`, `ResetView.vue`, `PasswordCard.vue`, `i18n.ts`, `MfaView.vue`, `GoogleCard.vue`, `router.ts`, `AccountView.vue`?**
  _High betweenness centrality (0.106) - this node is a cross-community bridge._
- **Should `session.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10317460317460317 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `ApiKeyDialog.vue`, `NetworksView.vue`, `PeopleView.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeysCard.vue`, `HomeView.vue`, `McmView.vue`, `errorText`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `LoginView.vue`, `router.ts`, `ResetView.vue`, `PasswordCard.vue`, `i18n.ts`, `MfaView.vue`, `GoogleCard.vue`, `AccountView.vue`, `vue`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06025641025641026 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `session.ts`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `ConnectView.vue`, `MfaCard.vue`, `ApiKeyDialog.vue`, `NetworksView.vue`, `PeopleView.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeysCard.vue`, `HomeView.vue`, `McmView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `LoginView.vue`, `router.ts`, `ResetView.vue`, `t`, `PasswordCard.vue`, `i18n.ts`, `MfaView.vue`, `GoogleCard.vue`, `AccountView.vue`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05365402405180388 - nodes in this community are weakly interconnected._
- **Should `TeamView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._