---
name: avant-nova-tela
description: Use ao criar ou mudar uma tela no avant-web (protótipo primeiro, DESIGN.md, i18n, tipos da API, permissões e testes).
---

# Tela nova no avant-web

1. **Protótipo primeiro**: desenhe a tela em `design/prototype/` seguindo `design/DESIGN.md` e `design/PRODUCT.md` (skill `impeccable` ajuda). Só depois o Vue.
2. **Visual**: Geist, quase monocromático, preto como cor principal, azul só para links e foco. Estado é ponto + palavra, nunca só cor.
3. **Textos** só por `t('chave')` em `src/lib/i18n.ts`, com PT, EN e ES. Erros da API por `errorText(code)`. Nada de string solta no template.
4. **Onde fica**: em `src/modules/<domínio>/`, a tela em `views/`, as peças em `components/`, as chamadas da API no `service.ts` (a tela nunca usa `api` direto), os tipos no `types.ts` (iguais ao `dto.py` do domínio no avant-api; os comuns em `src/lib/types.ts`) e as regras puras em `rules.ts`, com teste em `tests/`.
5. **Rotas do painel em português** em `src/router.ts`; a API continua em inglês. Não mudar `/entrar`, `/entrar/2fa`, `/convite/{token}`, `/redefinir-senha/{token}`, `/configuracoes/conta`.
6. **Permissão**: `session.can('permissao')` só esconde o que não serve; quem decide é a API. Rota com `meta.permission`; painel interno com `meta.internal`.
7. **Componentes** de `src/components/ui/` (reka-ui no estilo shadcn-vue). Tabelas com `whitespace-nowrap`.
7.1. **Animações**: campos e seletores com `border-input` (o `Input`, o `Select` e o `Field` já trazem) e botões pelo `Button` (`.btn-motion`), sempre. Card só anima se for **card de relatório** (Pedro, 2026-11-26, troca a regra de 2026-11-25): widget do Dashboard, KPI dos Relatórios (`KpiTile`) e faixa de totais de tela de relatório (campanhas do Facebook e do Google Ads, Resultado, Resultados, métricas de reward e de ad tag) com `StatTile report`, todos com a mesma animação `.kpi-motion` (linha na cor de destaque crescendo na base, sem subir; Pedro, 2026-11-27, web#582). Card de dados (informação, detalhe, números de outras telas como regras de preço, checklists, comissões, Ferramentas do GAM, HubSpot) fica parado: `StatTile` sem `report`, nada de `.kpi-motion` e nada de animação de entrada. Card de número numa faixa de totais é sempre o `StatTile` (`src/components/StatTile.vue`, com `framed` quando os cards ficam separados). Cards com formulário não se mexem.
8. **Nunca rode o Prettier** nos arquivos existentes: o repositório não tem configuração dele e ele reformata tudo.
9. **Testes** em `tests/` (Vitest) para a lógica de `src/lib`.
10. **Conferir na tela**: `pnpm build && pnpm preview --port 4173` e um script do Playwright com `executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'` (no ambiente do Claude) simulando `**/api/v1/**`. Tire print em 1440 px e 390 px.
11. Checagens: `pnpm lint && pnpm typecheck && pnpm test && pnpm build`.
