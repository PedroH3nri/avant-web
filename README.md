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

## Estrutura

Organizado por domínio (objeto → arquivos), no mesmo desenho do avant-api:

```
src/
  main.ts, App.vue, router.ts   entrada e rotas (cada rota aponta para a view do domínio)
  modules/<domínio>/
    views/          telas
    components/     peças só deste domínio
    service.ts      chamadas da API do domínio (a tela nunca usa `api` direto)
    types.ts        formatos da API do domínio, iguais ao dto.py dele no avant-api
    rules.ts        regras puras de tela, testadas em tests/
  modules/internal/<assunto>/    painel interno: clients, people, staff, contracts, results
  lib/              cliente HTTP (api.ts), i18n, eventos, métricas, tema e tipos comuns
  components/       componentes comuns e ui/ (shadcn-vue)
  layouts/          AppShell, AuthFrame e a página 404
  stores/session.ts sessão da pessoa
```

Domínios: auth, account, home, team, company, currencies, networks, sites, reports,
results, costs e rewards.

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

O painel abre em `http://localhost:5173`, e o Vite repassa `/api` para a API (`AVANT_API_URL`, padrão
`http://127.0.0.1:8000`). Os cookies da API são sempre `Secure` e `__Host-`: o Chrome e o Firefox aceitam
esses cookies em `http://localhost`, que conta como contexto seguro. O Safari não aceita; para testar nele,
ou para reproduzir o caminho da VM, ligue o HTTPS local opcional (`https://avant.localhost`, nginx do
compose com certificado do mkcert, seção "HTTPS local (opcional)" do guia).

O Vite escuta em `127.0.0.1` (IPv4), o endereço que o nginx do HTTPS local alcança pelo Docker Desktop; no
Linux, ajuste com `AVANT_DEV_HOST` (por exemplo `172.17.0.1`).

```bash
pnpm install
pnpm dev
pnpm lint && pnpm typecheck && pnpm test && pnpm build
```

## tag.js e reward.js

Os scripts que o cliente põe no site saem do pacote `avant-tag` (instalado por tag git, como a
API instala o core):

- `tag.js`: a ad tag completa, com o reward dentro (`<script async src="https://avant.groone.com/tag.js" data-tag="tg_..."></script>`).
- `reward.js`: só o reward, no mesmo endereço de sempre. Com os dois na página, o reward roda uma vez só.

O `pnpm build` gera os dois depois do painel (`vite.embed.config.ts` com `ENTRY=tag` e
`ENTRY=reward`, um IIFE de um arquivo cada, em `dist/tag.js` e `dist/reward.js`). As prévias do
painel usam o mesmo render: `avant-tag/reward` no reward e `avant-tag/loader` no loader. Mudar o
que roda no site é mudar o `avant-tag` e subir a tag em `package.json`.

## Imagem

```bash
docker build -t ghcr.io/pedroh3nri/avant-web .
```

nginx sem root na porta 8080, com `/healthz`, fallback para o `index.html`, cache longo em
`/assets`, `/tag.js` e `/reward.js` abertos para qualquer origem (cache de 10 minutos) e cabeçalhos de segurança (CSP só com a própria origem). O nginx do avant-infra
manda `/api` para o avant-api e o resto para cá.

`develop` publica em staging e `main` em produção.
