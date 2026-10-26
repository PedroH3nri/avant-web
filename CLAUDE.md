# avant-web

Painel Vue 3 do Groone Avant. Leia o README antes de mudar algo.

- Tela nova segue o `design/DESIGN.md`: primeiro o protótipo (`design/prototype/`), depois o
  código (skill `avant-nova-tela`).
- Todo texto em `src/lib/i18n.ts` com PT, EN e ES. Nada de string solta no template.
- Regra de negócio fica na API. A tela usa `session.can()` só para esconder o que não serve.
- Código por domínio em `src/modules/<domínio>/` (`views/`, `components/`, `service.ts`, `types.ts`,
  regras de tela em `rules.ts`). Tela não chama `api` direto: usa o `service.ts` do domínio.
- Formatos da API no `types.ts` do domínio (comuns em `src/lib/types.ts`), iguais aos `dto.py`
  do avant-api.
- Rotas do painel em português; a API continua em inglês.
- Não mudar os caminhos que a API usa: `/entrar`, `/entrar/2fa`, `/convite/{token}`,
  `/redefinir-senha/{token}`, `/configuracoes/conta`.
- Clean code obrigatório (skill `avant-clean-code`): nomes claros, nada de nome de uma letra
  (nem em callback ou `v-for`), toda função e todo componente com um comentário de 1 ou 2
  linhas sobre o que faz, nada de comentário ao lado do código. Conferido por `pnpm clean-code`.
- Antes de abrir PR: `pnpm lint && pnpm clean-code && pnpm typecheck && pnpm test && pnpm build`.
- Nada de segredos no repositório. Comentários em português.
- PRs vão para `develop`.

## Contexto, issues e skills

- Comece por `docs/contexto.md`: produto, decisões, estado dos cinco repositórios e onde está cada coisa. Decisões antigas em `docs/decisoes/`.
- Todo trabalho parte de uma issue com milestone neste repositório (`gh issue list --milestone ...`). Pedido sem issue vira issue antes.
- Skills em `docs/skills/` (índice em `docs/skills/README.md`); `.claude/skills` aponta para lá. Comece pela `avant-fluxo-de-trabalho`.
- Grafo do código em `graphify-out/` (comece pelo `GRAPH_REPORT.md`, ou `graphify query "..."`). Mudou código: `graphify update .` e commite o grafo no mesmo PR.
