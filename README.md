# avant-web

Painel do Groone Avant: SPA em Vue 3 que fala só com o avant-api (`/api/v1`, mesma origem).

Outros repositórios: avant-core, avant-api, avant-worker, avant-infra.

## Stack

Vue 3 (`<script setup>` + TypeScript), vue-router, Pinia, Tailwind 3 com os tokens do
protótipo, componentes de [reka-ui](https://reka-ui.com) no estilo shadcn-vue, ícones
lucide, toasts vue-sonner. Testes com Vitest + jsdom, lint com oxlint.

```
src/
  lib/          api.ts (cliente, CSRF, erros), i18n.ts (PT/EN/ES), theme.ts (tema e cor da
                Empresa), types.ts (formatos da API), nav.ts, table.ts, utils.ts
  stores/       session.ts: pessoa logada, Empresa ativa e can('permissao')
  components/   ui/ (Button, Input, Card, Field, Status, DataTable...) e peças do painel
  layouts/      AuthFrame (telas sem login) e AppShell (menu lateral e topo)
  views/        uma tela por rota
  router.ts
tests/          Vitest
```

## Regras de tela

- Visual do `DESIGN.md` do protótipo: Geist, quase monocromático, preto como cor principal,
  azul só para links e foco. Estado é ponto + palavra, nunca só cor.
- Todo texto passa por `t('chave')` em `src/lib/i18n.ts`, com PT, EN e ES. Erros da API
  aparecem por `errorText(code)`.
- O painel só esconde o que a pessoa não pode fazer; quem decide é a API.
- Caminhos usados nos e-mails e redirecionamentos da API não mudam: `/entrar`,
  `/entrar/2fa`, `/convite/{token}`, `/redefinir-senha/{token}`, `/configuracoes/conta`.

## Desenvolvimento

Para subir o Avant inteiro na máquina (banco, API, worker e painel), siga o [guia de desenvolvimento](https://github.com/PedroH3nri/avant-infra/blob/develop/docs/desenvolvimento.md) do avant-infra.

```bash
pnpm install
AVANT_API_URL=http://localhost:8000 pnpm dev   # o Vite repassa /api para o avant-api
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## Imagem

```bash
docker build -t ghcr.io/pedroh3nri/avant-web .
```

nginx sem root na porta 8080, com `/healthz`, fallback para o `index.html`, cache longo em
`/assets` e cabeçalhos de segurança (CSP só com a própria origem). O nginx do avant-infra
manda `/api` para o avant-api e o resto para cá.

`develop` publica em staging e `main` em produção.
