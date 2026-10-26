# Graph Report - avant-web  (2026-10-26)

## Corpus Check
- 127 files · ~75,519 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 6, .conf 1, .css 1)

## Summary
- 1342 nodes · 2962 edges · 84 communities (78 shown, 6 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 32 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ab7c56b4`
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
- metrics.test.ts
- PasswordCard.vue
- ResetView.vue
- compilerOptions
- PeopleView.vue
- cn
- t
- t
- Avant: conexão com o GAM
- ClientProfileForm.vue
- Avant: repositório e plano do MVP
- CompanySwitcher.vue
- Field.vue
- ApiKeysCard.vue
- LoginView.vue
- avant-web
- Button.vue
- scripts
- i18n.ts
- .oxlintrc.json
- GoogleCard.vue
- avant-web
- metrics.ts
- tsconfig.json
- session-start.sh
- networks.ts
- tailwindcss
- session.ts
- devDependencies
- vitest
- CurrencyCard.vue
- sites.ts
- FiscalDataCard.vue
- package.json
- RecoveryCodes.vue
- account.ts
- fail
- contracts.ts
- toNumber
- errorText
- router.ts
- dailySeries
- Dialog.vue
- Site

## God Nodes (most connected - your core abstractions)
1. `t()` - 136 edges
2. `errorText()` - 101 edges
3. `vue` - 59 edges
4. `ApiError` - 42 edges
5. `useSession` - 40 edges
6. `api` - 37 edges
7. `cn()` - 34 edges
8. `vue-sonner` - 31 edges
9. `lucide-vue-next` - 29 edges
10. `vue-router` - 21 edges

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

## Communities (84 total, 6 thin omitted)

### Community 0 - "api.ts"
Cohesion: 0.22
Nodes (9): api, ApiError, Query, readCookie(), request(), RequestOptions, SAFE, setUnauthorizedHandler() (+1 more)

### Community 1 - "vue"
Cohesion: 0.11
Nodes (23): toasterTheme, Accent, accentCss(), accentFor(), ACCENTS, applyAccent(), theme, CompanyDetail (+15 more)

### Community 2 - "ClientView.vue"
Cohesion: 0.05
Nodes (38): audit, auditBusy, candidates, canManage, canOwner, changed, client, cursor (+30 more)

### Community 3 - "MemberView.vue"
Cohesion: 0.07
Nodes (32): DirectPermission, allSites, assigned, canAssign, canGrant, canSeeSites, catalog, directBusy (+24 more)

### Community 4 - "TeamView.vue"
Cohesion: 0.06
Nodes (33): busy, cancel(), canInvite, canManage, canRoles, company, dupe, email (+25 more)

### Community 5 - "Avant: models do MVP"
Cohesion: 0.07
Nodes (27): Acesso, AdUnit, ApiKey, AuditLog, Avant: models do MVP, Company, Decisões de Pedro (22/10/2026), Empresa e equipe (+19 more)

### Community 6 - "SiteDetailView.vue"
Cohesion: 0.10
Nodes (22): busy, canAssign, canManage, errorToast(), id, load(), loadError, move() (+14 more)

### Community 7 - "ClientsView.vue"
Cohesion: 0.07
Nodes (32): emptyProfile(), profileBody(), OwnerInvitation, adding, busy, canceling, cancelInvite(), cancelOpen (+24 more)

### Community 8 - "InviteView.vue"
Cohesion: 0.09
Nodes (21): InvitationPreview, accept(), busy, error, formOk, gone, invite, load() (+13 more)

### Community 9 - "NetworksView.vue"
Cohesion: 0.13
Nodes (18): busy, canConnect, canDisconnect, canSync, disconnect(), disconnecting, disconnectOpen, errorToast() (+10 more)

### Community 10 - "MfaCard.vue"
Cohesion: 0.12
Nodes (18): busy, code, codeError, codeOk, codes, desc, enabled, fail() (+10 more)

### Community 11 - "LineChart.vue"
Cohesion: 0.10
Nodes (19): areaPath, box, chartWidth, hovered, labelStep, linePath(), LineSeries, padding (+11 more)

### Community 12 - "PageViewsView.vue"
Cohesion: 0.10
Nodes (19): props, up, peakHour(), ReportQuery, ReportResult, byCountry, byHour, bySite (+11 more)

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
Nodes (18): dependencies, class-variance-authority@^0.7.1, clsx@^2.1.1, @fontsource-variable/geist@^5.3.0, pinia@^4.1.0, qrcode@1.5.4, reka-ui@^2.11.0, tailwind-merge@^3.7.0 (+10 more)

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
Nodes (50): dot, COST_KINDS, costBody(), costForm(), currentMonthInput(), formatMonth(), FORMULA_CHIPS, fromMonthInput() (+42 more)

### Community 23 - "SidebarNav.vue"
Cohesion: 0.13
Nodes (15): account(), clientId, emit, Group, GROUPS, onInternal, openLink(), ready (+7 more)

### Community 24 - "RoleDialog.vue"
Cohesion: 0.11
Nodes (16): busy, category, chosen, emit, groupLabel(), groups, name, open (+8 more)

### Community 25 - "types.ts"
Cohesion: 0.10
Nodes (22): AuditEntry, Client, ClientDetail, CompanyRef, ContractClientRef, ContractNetworkRef, ContractSource, ContractStatus (+14 more)

### Community 26 - "SitesView.vue"
Cohesion: 0.09
Nodes (24): networkName(), adding, archived, assignedOnly, canAssign, canConnect, canManage, choice (+16 more)

### Community 27 - "Arquitetura do MVP do Avant"
Cohesion: 0.14
Nodes (13): Ambientes, deploy e backup, Arquitetura do MVP do Avant, Controle de acesso no estilo do Defender, Decisões e perguntas em aberto, Endpoints da API REST, Estrutura do repositório, Fluxos, Isolamento, autenticação e permissões (+5 more)

### Community 28 - "ApiKeyDialog.vue"
Cohesion: 0.11
Nodes (17): busy, catalog, chosen, copied, create(), DAYS, emit, groupLabel() (+9 more)

### Community 29 - "HomeView.vue"
Cohesion: 0.12
Nodes (13): props, seats, Items, company, error, firstName, greeting, load() (+5 more)

### Community 30 - "CostsView.vue"
Cohesion: 0.09
Nodes (24): FormulaCheck, busy, byMonth(), canManage, check, checkFormula, confirmRemove(), costs (+16 more)

### Community 31 - "ConnectView.vue"
Cohesion: 0.11
Nodes (21): validCode(), SyncRun, busy, Check, code, copied, copy(), done (+13 more)

### Community 32 - "RolesPanel.vue"
Cohesion: 0.13
Nodes (13): busy, canManage, deleteOpen, deleting, dialog, editing, props, remove() (+5 more)

### Community 33 - "StaffView.vue"
Cohesion: 0.14
Nodes (13): Invitation, Role, busy, email, emailOk, invite(), invites, load() (+5 more)

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
Nodes (16): hue, initials, props, assign(), canManage, canTeam, editable(), isMe() (+8 more)

### Community 38 - "PerformanceView.vue"
Cohesion: 0.09
Nodes (23): MetricCatalog, MetricDef, barFormat(), byCountry, bySite, catalog, chartFormat(), chosen (+15 more)

### Community 39 - "metrics.test.ts"
Cohesion: 0.20
Nodes (9): formatMetric(), hourLabel(), hourlyItems(), ReportRow, amountText(), money(), hourBars, show() (+1 more)

### Community 40 - "PasswordCard.vue"
Cohesion: 0.20
Nodes (10): busy, current, emit, mismatch, password, password2, ready, short (+2 more)

### Community 41 - "ResetView.vue"
Cohesion: 0.12
Nodes (15): vue-router@^5.4.0, vue-router, RouteMeta, vue-router, busy, error, mfa, mismatch (+7 more)

### Community 42 - "compilerOptions"
Cohesion: 0.17
Nodes (11): compilerOptions, lib, module, moduleResolution, noEmit, skipLibCheck, strict, target (+3 more)

### Community 43 - "PeopleView.vue"
Cohesion: 0.16
Nodes (14): Person, Action, busy, confirm(), enable(), fail(), loadError, open (+6 more)

### Community 44 - "cn"
Cohesion: 0.18
Nodes (11): Item, chipClass(), cn(), dot(), kindClass(), valueClass(), tabClass(), tabClass() (+3 more)

### Community 45 - "t"
Cohesion: 0.15
Nodes (16): end(), ending, endingOthers, endOthers(), fail(), load(), loadError, sessions (+8 more)

### Community 46 - "t"
Cohesion: 0.07
Nodes (28): busy, canCreate, canDelete, canUpdate, choose(), chosenNetwork, confirmEnd(), confirmRemove() (+20 more)

### Community 47 - "Avant: conexão com o GAM"
Cohesion: 0.20
Nodes (9): Avant: conexão com o GAM, Caminho conta de serviço, Caminho MCM, Decisões de Pedro (23/10/2026), Erros e estados, Fontes, Importação, Resumo (+1 more)

### Community 48 - "ClientProfileForm.vue"
Cohesion: 0.12
Nodes (18): ddi, localeOptions, notes, percentage, percentageBad, phone, profile, props (+10 more)

### Community 49 - "Avant: repositório e plano do MVP"
Cohesion: 0.22
Nodes (8): Avant: repositório e plano do MVP, Decisões de Pedro (23/10/2026), Estrutura de pastas, Pipeline, Plano até 31/12, Primeira semana (23/10 a 02/11), Resumo, Serviços e ferramentas

### Community 50 - "CompanySwitcher.vue"
Cohesion: 0.29
Nodes (5): reka-ui, pick(), route, router, session

### Community 51 - "Field.vue"
Cohesion: 0.29
Nodes (5): busy, email, error, sent, submit()

### Community 52 - "ApiKeysCard.vue"
Cohesion: 0.15
Nodes (15): busy, canManage, created(), creating, keys, load(), loadError, permsText() (+7 more)

### Community 53 - "LoginView.vue"
Cohesion: 0.10
Nodes (20): model, auditText(), formatAgo(), safeNext(), busy, email, error, next (+12 more)

### Community 54 - "avant-web"
Cohesion: 0.33
Nodes (5): avant-web, Desenvolvimento, Imagem, Regras de tela, Stack

### Community 55 - "Button.vue"
Cohesion: 0.24
Nodes (7): lucide-vue-next@^1.0.0, lucide-vue-next, button, classes, Props, model, open

### Community 56 - "scripts"
Cohesion: 0.25
Nodes (8): scripts, build, clean-code, dev, lint, preview, test, typecheck

### Community 57 - "i18n.ts"
Cohesion: 0.16
Nodes (12): vue, langs, auditActions, chooseLang(), dict, errors, fallbackError, fill() (+4 more)

### Community 58 - ".oxlintrc.json"
Cohesion: 0.50
Nodes (3): plugins, rules, $schema

### Community 59 - "GoogleCard.vue"
Cohesion: 0.25
Nodes (7): busy, confirm, load(), session, status, unlink(), GoogleStatus

### Community 61 - "metrics.ts"
Cohesion: 0.13
Nodes (14): BarItem, largest, props, compare, options, period, selected, PERIOD_PRESETS (+6 more)

### Community 65 - "networks.ts"
Cohesion: 0.50
Nodes (3): statusTone, Network, NetworkStatus

### Community 66 - "tailwindcss"
Cohesion: 0.40
Nodes (4): tailwindcss@3.4.19, tailwindcss-animate@^1.0.7, tailwindcss, tailwindcss-animate

### Community 67 - "session.ts"
Cohesion: 0.22
Nodes (7): pinia, logout(), langChosen(), LoginResult, Me, useSession, Blank

### Community 68 - "devDependencies"
Cohesion: 0.12
Nodes (17): devDependencies, autoprefixer@^10.6.1, oxlint@^1.89.0, postcss@^8.5.31, @types/node@^24.19.2, @types/qrcode@1.5.5, typescript@~6.0.3, vite@^8.3.5 (+9 more)

### Community 69 - "vitest"
Cohesion: 0.33
Nodes (4): @vitejs/plugin-vue@^6.0.10, vitest@^5.0.5, @vitejs/plugin-vue, vitest

### Community 70 - "CurrencyCard.vue"
Cohesion: 0.20
Nodes (9): busy, chosen, currencies, currencyLabel(), missing, options, save(), session (+1 more)

### Community 71 - "sites.ts"
Cohesion: 0.36
Nodes (5): approval(), Tone, tree(), AdUnit, rows

### Community 72 - "FiscalDataCard.vue"
Cohesion: 0.15
Nodes (16): busy, complete, documentLabel, form, load(), loaded, options, save() (+8 more)

### Community 73 - "package.json"
Cohesion: 0.17
Nodes (11): @fontsource-variable/geist-mono@^5.3.0, jsdom@^30.1.3, @vue/test-utils@^2.5.1, name, packageManager, private, type, version (+3 more)

### Community 74 - "RecoveryCodes.vue"
Cohesion: 0.24
Nodes (10): copyToken(), copied, copyAll(), download(), manual, props, session, text() (+2 more)

### Community 75 - "account.ts"
Cohesion: 0.25
Nodes (8): label(), BROWSERS, device(), first(), keyState, SYSTEMS, ApiKey, ApiKeyCreated

### Community 76 - "fail"
Cohesion: 0.24
Nodes (11): profileInput(), changeOwner(), fail(), load(), more(), openEdit(), reloadAudit(), save() (+3 more)

### Community 77 - "contracts.ts"
Cohesion: 0.31
Nodes (8): contractActions(), formatRevshare(), manualNetworks(), parseRevshare(), Contract, ContractNetwork, manual, parsedRevshare

### Community 78 - "toNumber"
Cohesion: 0.27
Nodes (10): change(), countryName(), toNumber(), countryBars, siteRows, total, totalDelta, countryBars (+2 more)

### Community 79 - "errorText"
Cohesion: 0.28
Nodes (9): errorText(), checks, load(), runDetail(), addSite(), link(), loadSites(), loadUnlinked() (+1 more)

### Community 81 - "dailySeries"
Cohesion: 0.70
Nodes (5): dailySeries(), daysOf(), shortDay(), chart, chart

### Community 83 - "Site"
Cohesion: 0.67
Nodes (3): Site, SiteDetail, SiteListItem

## Knowledge Gaps
- **6 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `t()` connect `t` to `vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `ResultsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `t`, `ClientProfileForm.vue`, `CompanySwitcher.vue`, `Field.vue`, `ApiKeysCard.vue`, `LoginView.vue`, `Button.vue`, `i18n.ts`, `GoogleCard.vue`, `metrics.ts`, `CurrencyCard.vue`, `sites.ts`, `FiscalDataCard.vue`, `RecoveryCodes.vue`, `account.ts`, `fail`, `toNumber`, `errorText`, `router.ts`, `dailySeries`, `Dialog.vue`?**
  _High betweenness centrality (0.090) - this node is a cross-community bridge._
- **Should `vue` be split into smaller, more focused modules?**
  _Cohesion score 0.10541310541310542 - nodes in this community are weakly interconnected._
- **Why does `vue` connect `i18n.ts` to `vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `LineChart.vue`, `PageViewsView.vue`, `clean-code.mjs`, `dependencies`, `events.ts`, `ResultsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `t`, `t`, `ClientProfileForm.vue`, `Field.vue`, `ApiKeysCard.vue`, `LoginView.vue`, `Button.vue`, `GoogleCard.vue`, `metrics.ts`, `session.ts`, `CurrencyCard.vue`, `FiscalDataCard.vue`, `package.json`, `RecoveryCodes.vue`, `router.ts`?**
  _High betweenness centrality (0.078) - this node is a cross-community bridge._
- **Should `ClientView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.05 - nodes in this community are weakly interconnected._
- **Why does `errorText()` connect `errorText` to `vue`, `ClientView.vue`, `MemberView.vue`, `TeamView.vue`, `SiteDetailView.vue`, `ClientsView.vue`, `InviteView.vue`, `NetworksView.vue`, `MfaCard.vue`, `PageViewsView.vue`, `ResultsView.vue`, `SidebarNav.vue`, `RoleDialog.vue`, `SitesView.vue`, `ApiKeyDialog.vue`, `HomeView.vue`, `CostsView.vue`, `ConnectView.vue`, `RolesPanel.vue`, `StaffView.vue`, `RolesView.vue`, `PerformanceView.vue`, `PasswordCard.vue`, `ResetView.vue`, `PeopleView.vue`, `t`, `t`, `CompanySwitcher.vue`, `Field.vue`, `ApiKeysCard.vue`, `LoginView.vue`, `i18n.ts`, `GoogleCard.vue`, `CurrencyCard.vue`, `FiscalDataCard.vue`, `fail`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._
- **Should `MemberView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06984126984126984 - nodes in this community are weakly interconnected._
- **Should `TeamView.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.06349206349206349 - nodes in this community are weakly interconnected._