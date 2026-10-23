# avant-web

Painel Vue 3 do Groone Avant. Leia o README antes de mudar algo.

- Tela nova segue o `DESIGN.md` do protótipo (`/mnt/project-files/avant-prototipo/`): primeiro o
  protótipo, depois o código.
- Todo texto em `src/lib/i18n.ts` com PT, EN e ES. Nada de string solta no template.
- Regra de negócio fica na API. A tela usa `session.can()` só para esconder o que não serve.
- Formatos da API em `src/lib/types.ts`, iguais aos `schemas.py` do avant-api.
- Rotas do painel em português; a API continua em inglês.
- Não mudar os caminhos que a API usa: `/entrar`, `/entrar/2fa`, `/convite/{token}`,
  `/redefinir-senha/{token}`, `/configuracoes/conta`.
- Antes de abrir PR: `pnpm lint && pnpm typecheck && pnpm test && pnpm build`.
- Nada de segredos no repositório. Comentários em português.
- PRs vão para `develop`.
