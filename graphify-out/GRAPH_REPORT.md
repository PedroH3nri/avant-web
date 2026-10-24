# Graph Report - avant-web  (2026-10-24)

## Corpus Check
- 115 files · ~67,079 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 6, .conf 1, .css 1)

## Summary
- 1195 nodes · 2547 edges · 76 communities (67 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7c5844fc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- api.ts
- SettingsView.vue
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
- PeopleView.vue
- RoleDialog.vue
- types.ts
- SitesView.vue
- Arquitetura do MVP do Avant
- ApiKeyDialog.vue
- HomeView.vue
- MfaView.vue
- session.ts
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
- vue-sonner
- ApiKeysCard.vue
- t
- t
- Avant: conexão com o GAM
- vue-router
- Avant: repositório e plano do MVP
- RecoveryCodes.vue
- Input.vue
- SessionsCard.vue
- account.ts
- avant-web
- main.ts
- scripts
- i18n.ts
- .oxlintrc.json
- GoogleCard.vue
- avant-web
- PeriodPicker.vue
- tsconfig.json
- session-start.sh
- sites.ts
- AccountView.vue
- errorToast
- devDependencies
- vitest
- BarChart.vue
- FakeSource
- Site
- oxlint@^1.89.0
- @vue/test-utils
- vue-tsc@^3.3.13

## God Nodes (most connected - your core abstractions)
1. `t()` - 120 edges
2. `errorText()` - 88 edges
3. `vue` - 53 edges
4. `ApiError` - 37 edges
5. `useSession` - 35 edges
6. `api` - 32 edges
7. `lucide-vue-next` - 28 edges
8. `vue-sonner` - 28 edges
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
- `groupLabel()` --calls--> `t()`  [EXTRACTED]
  src/components/account/ApiKeyDialog.vue → src/lib/i18n.ts

## Import Cycles
- None detected.

## Communities (76 total, 9 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.23
Nodes (8): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, url()

### Community 1 - "SettingsView.vue"
Cohesion: 0.15
Nodes (14): CompanyDetail, accent, canEdit, company, loadError, name, nameInvalid, save() (+6 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.06
Nodes (39): AuditEntry, Client, ClientDetail, audit, auditBusy, candidates, canManage, canOwner (+31 more)

### Community 3 - "MemberView.vue"
Cohesion: 0.08
Nodes (24): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeSites, catalog, directBusy (+16 more)

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
Cohesion: 0.05
Nodes (45): statusTone, validCode(), Network, NetworkStatus, SyncRun, busy, Check, checks (+37 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.12
Nodes (18): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+10 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.09
Nodes (21): @vueuse/core@^15.0.0, @vueuse/core, areaPath, box, chartWidth, hovered, labelStep, linePath() (+13 more)

### Community 12 - "PageViewsView.vue"
Cohesion: 0.11
Nodes (23): change(), countryName(), peakHour(), toNumber(), ReportResult, byCountry, byHour, bySite (+15 more)

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
Cohesion: 0.13
Nodes (15): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, lucide-vue-next@^1.0.0, pinia@^4.1.0, qrcode@1.5.4, reka-ui@^2.11.0, tailwind-merge@^3.7.0 (+7 more)

### Community 19 - "pick"
Cohesion: 0.18
Nodes (11): names, pick(), roleName(), roleOptions, permName(), permOptions, roleLabel, roleOptions (+3 more)

### Community 20 - "events.ts"
Cohesion: 0.23
Nodes (11): close(), EventMap, Handler, handlers, listen(), MetricsUpdated, NetworkUpdated, onEvent() (+3 more)

### Community 21 - "steps"
Cohesion: 0.13
Nodes (14): jobs, test, name, branches, run, uses, with, runs-on (+6 more)

### Community 22 - "package.json"
Cohesion: 0.17
Nodes (11): autoprefixer@^10.6.1, typescript@~6.0.3, vite@^8.3.5, name, packageManager, private, type, version (+3 more)

### Community 23 - "PeopleView.vue"
Cohesion: 0.05
Nodes (50): lucide-vue-next, reka-ui, pick(), route, router, session, open, account() (+42 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.11
Nodes (16): busy, category, chosen, emit, groupLabel(), groups, name, open (+8 more)

### Community 25 - "types.ts"
Cohesion: 0.09
Nodes (22): CompanyRef, CompanyStatus, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus, ContractSummary, DimensionDef (+14 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.08
Nodes (28): networkName(), adding, addSite(), archived, assignedOnly, canAssign, canConnect, canManage (+20 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): busy, catalog, chosen, copied, create(), DAYS, emit, groupLabel() (+9 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.16
Nodes (11): td, th, company, error, firstName, load(), lost, networks (+3 more)

### Community 30 - "MfaView.vue"
Cohesion: 0.20
Nodes (8): model, busy, code, error, route, router, session, submit()

### Community 31 - "session.ts"
Cohesion: 0.26
Nodes (6): pinia, vitest, langChosen(), Me, useSession, Blank

### Community 32 - "RolesPanel.vue"
Cohesion: 0.15
Nodes (10): busy, canManage, deleteOpen, deleting, dialog, editing, props, roles (+2 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.14
Nodes (12): dot, Invitation, busy, email, emailOk, invites, load(), loadError (+4 more)

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
Cohesion: 0.12
Nodes (15): hue, initials, props, canManage, canTeam, editable(), isMe(), load() (+7 more)

### Community 38 - "PerformanceView.vue"
Cohesion: 0.09
Nodes (25): formatMetric(), show(), barFormat(), byCountry, bySite, catalog, chartFormat(), chosen (+17 more)

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

### Community 43 - "vue-sonner"
Cohesion: 0.19
Nodes (10): vue-sonner, toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme (+2 more)

### Community 44 - "ApiKeysCard.vue"
Cohesion: 0.14
Nodes (16): busy, canManage, created(), creating, keys, load(), loadError, permsText() (+8 more)

### Community 45 - "t"
Cohesion: 0.21
Nodes (13): remove(), summary(), t(), greeting, invite(), assign(), cancel(), errorToast() (+5 more)

### Community 46 - "t"
Cohesion: 0.06
Nodes (43): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), errorText(), Contract, ContractNetwork, busy (+35 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "vue-router"
Cohesion: 0.50
Nodes (3): vue-router, RouteMeta, vue-router

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 51 - "Input.vue"
Cohesion: 0.17
Nodes (7): setUnauthorizedHandler(), routes, busy, email, error, sent, submit()

### Community 52 - "SessionsCard.vue"
Cohesion: 0.22
Nodes (10): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions (+2 more)

### Community 53 - "account.ts"
Cohesion: 0.25
Nodes (8): label(), BROWSERS, device(), first(), keyState, SYSTEMS, ApiKey, ApiKeyCreated

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
Cohesion: 0.08
Nodes (27): vue, props, up, langs, auditActions, auditText(), chooseLang(), dict (+19 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "GoogleCard.vue"
Cohesion: 0.22
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

### Community 67 - "errorToast"
Cohesion: 0.25
Nodes (8): empty(), errorToast(), load(), pad(), saveDirect(), saveSites(), today, toRow()

### Community 68 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, jsdom@^30.1.3, postcss@^8.5.31, tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, @types/node@^24.19.2, @types/qrcode@1.5.5, vitest@^5.0.5 (+6 more)

### Community 70 - "BarChart.vue"
Cohesion: 0.40
Nodes (3): BarItem, largest, props

### Community 72 - "Site"
Cohesion: 0.67
Nodes (3): Site, SiteDetail, SiteListItem

## Knowledge Gaps
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `vue` connect `i18n.ts` to `SettingsView.vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `LineChart.vue`, `PageViewsView.vue`, `clean-code.mjs`, `dependencies`, `events.ts`, `package.json`, `PeopleView.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `session.ts`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `vue-sonner`, `ApiKeysCard.vue`, `t`, `RecoveryCodes.vue`, `Input.vue`, `SessionsCard.vue`, `main.ts`, `GoogleCard.vue`, `PeriodPicker.vue`, `AccountView.vue`, `BarChart.vue`?**
  _High betweenness centrality (0.098) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05853658536585366 - nodes in this community are weakly interconnected._
- **Why does `t()` connect `t` to `SettingsView.vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `PeopleView.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `metrics.ts`, `PasswordCard.vue`, `ResetView.vue`, `ApiKeysCard.vue`, `t`, `RecoveryCodes.vue`, `Input.vue`, `SessionsCard.vue`, `account.ts`, `i18n.ts`, `GoogleCard.vue`, `PeriodPicker.vue`, `sites.ts`, `AccountView.vue`, `errorToast`?**
  _High betweenness centrality (0.094) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.07671957671957672 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `t` to `SettingsView.vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `PeopleView.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `MfaView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `vue-sonner`, `ApiKeysCard.vue`, `t`, `Input.vue`, `SessionsCard.vue`, `i18n.ts`, `GoogleCard.vue`, `AccountView.vue`, `errorToast`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Should `TeamView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06896551724137931 - nodes in this community are weakly interconnected._
- **Should `Avant: models do MVP` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._