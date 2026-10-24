# Protótipo do Groone Avant

Protótipo navegável em React (shadcn/ui), aprovado por Pedro em outubro de 2026. É só referência visual: o painel de verdade é o Vue em `src/`. As regras visuais estão em `../DESIGN.md` e o produto em `../PRODUCT.md`.

- `avant-prototipo.html`: o protótipo inteiro num arquivo só, abre direto no navegador. Para gerar de novo: `npx vite build --base ./` e embutir o JS e o CSS de `dist/` no `index.html` gerado (o Parcel não resolve mais as dependências do Radix).
- `src/`: o código do protótipo. Para rodar: `pnpm install && pnpm dev` dentro desta pasta.
- `.impeccable/`: notas da skill `impeccable` (em `docs/skills/impeccable`) sobre o design.

Tela nova do painel é desenhada aqui primeiro, depois no Vue.
