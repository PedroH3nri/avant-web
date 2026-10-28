# Construtor de relatórios e métricas personalizadas no painel (web#13, web#12)

Milestone M5 Personalização e relatórios. Issues irmãs já entregues: avant-core#14 e #15
(v0.32.0), avant-api#17 e #18. Protótipo aprovado pelo Pedro em 28/10/2026
(`design/prototype`, telas "Relatórios" e "Relatórios · Construtor").

## Intenção

O cliente monta relatórios como no construtor do HubSpot: escolhe métricas e dimensões, filtra,
escolhe a visualização, vê a prévia ao vivo, salva e compartilha. As métricas personalizadas
(as "propriedades calculadas" do HubSpot) nascem de dentro do construtor. O relatório salvo é a
base dos dashboards (#16) e das páginas (#17).

## Objetivos

1. **Lista de relatórios** (`/relatorios`): abas Todos, Meus, Compartilhados comigo e Modelos da
   Groone; busca pelo nome; abrir, duplicar, exportar CSV/XLSX e apagar (só quem edita).
2. **Construtor** (`/relatorios/novo`, `/relatorios/:id`, `/relatorios/modelo/:key`), em tela
   cheia dentro do painel, com três áreas:
   - **Campos** (esquerda): busca; Métricas; Minhas métricas (com "Nova"); Dimensões. Campo que
     não combina com a escolha atual fica apagado com o motivo.
   - **Prévia** (centro): faixa com as métricas escolhidas (cada uma abre o menu de cor e
     aparência) e as dimensões; o gráfico; a tabela com os dados (menos no KPI).
   - **Configuração** (direita): visualização (tabela, linha, barras, área, pizza, KPI, funil;
     desativado com a regra escrita), empilhar (barra e área), período e comparação, filtros
     (valores de uma dimensão), limite de linhas.
   - **Barra de cima**: voltar, nome editável, estado (não salvo / alterações / salvo), Exportar,
     Salvar como cópia, Salvar (abre a modal de salvar).
   - Relatório de outra pessoa sem `editable`: tudo só leitura, com aviso e "Salvar como cópia".
3. **Modal de salvar**: nome, descrição, quem vê (Só eu, Empresa inteira, Papéis escolhidos com
   os papéis da Empresa).
4. **Modal de nova métrica** (e edição): nome (mostra a chave), fórmula com autocompletar e
   conferência ao digitar, formato, casas decimais; prévia ao lado com um campo por variável e o
   resultado calculado pela API (`/custom-metrics/validate` com `sample`).
5. **Cor e aparência por métrica** (pedido do Pedro): cor padrão ou uma de 7 cores vivas (verde
   neon, ciano, magenta, violeta, laranja, amarelo, vermelho); aparência pelo valor "Começa
   verde, fica vermelho" ou "Começa vermelho, fica verde", com o valor de início e o de fim.
   A cor vale em todos os gráficos; a aparência, no fundo das células da tabela e no número do
   KPI. Fica salva nas opções do gráfico.
6. **Exportar** o relatório salvo em CSV ou XLSX, no idioma da pessoa.

## Fora do escopo

- Datas fixas no período (o seletor mostra "Datas fixas…" desativado), ordem escolhida pela
  pessoa (ordena pela primeira métrica, do maior para o menor), operadores de filtro além de
  "é um destes" (`in`), filtro por valor de métrica.
- Dashboards, páginas, metas, alertas e envios (#16 a #20).

## Anti-objetivos

- A tela não decide regra de negócio: fonte, combinações e permissões são conferidas pela API;
  a tela só antecipa para apagar o que não serve e mostra o erro da API quando recusa.
- Nada de calcular métrica na tela: a prévia da personalizada vem da API.
- Cor viva não substitui estado: valor bom/ruim continua legível sem cor (o número aparece).

## Restrições

- DESIGN.md (Geist, quase monocromático). As cores vivas são uma exceção pedida pelo Pedro,
  só nas séries e na aparência das métricas, escolhidas pela pessoa; o padrão continua preto.
- Textos em `src/lib/i18n.ts` (PT, EN, ES); erros por `errorText(code)`.
- Código em `src/modules/reports/` (views, components, service, types, rules) com testes das
  regras puras em `tests/`. Componentes de `src/components/ui/` (reka-ui).
- `pnpm lint && pnpm clean-code && pnpm typecheck && pnpm test && pnpm build`.

## Abordagens consideradas

| | Abordagem | A favor | Contra |
|---|---|---|---|
| **A** | **Editor completo de três áreas, como o HubSpot** | Mostra tudo, rápido para quem monta do zero; igual ao protótipo aprovado | Tela densa no celular (as áreas empilham) |
| B | Fluxo guiado que começa pelos modelos | Simples para quem só ajusta | Lento para montar do zero; não é o que o Pedro pediu |

**Escolhida: A** (Pedro: "acho melhor seguir igual o do HubSpot").

## Decisões

### Backend (core, pequena)

- `check_chart` passa a aceitar `metrics` em `chart_options`: um objeto
  `{chave da métrica: {"color"?: str, "scale"?: {"mode", "from", "to"}}}`.
  - a chave precisa estar nas métricas da consulta;
  - `color` é um nome da paleta (`lime`, `cyan`, `magenta`, `violet`, `orange`, `yellow`, `red`);
  - `mode` é `green_red` ou `red_green`; `from` e `to` são números finitos com `from < to`;
  - sem cor nem aparência, a métrica não entra. Erro sempre `InvalidInput`.
- O core sobe para v0.33.0 e a API para essa tag (sem mudar rota; o DTO já passa o objeto).
- Decisão do Claude: a paleta guarda o **nome** da cor, não o hexadecimal; o tom exato (e o do
  tema escuro) é do painel.

### Painel

- **Fonte da consulta** (`rules.ts`, decisão do Claude): as fontes possíveis são a interseção das
  fontes das métricas (personalizadas pelo `sources` do catálogo), das dimensões e dos campos dos
  filtros; escolhe `gam`, senão `page_views`, senão `gam_key_values`. Um campo fica disponível se
  somá-lo deixa alguma fonte. Tirar uma métrica pode liberar campos; pôr uma métrica tira as
  dimensões e filtros que ficariam sem fonte.
- **Gráfico permitido**: as mesmas regras do core (linha/barras/área ≥ 1 dimensão; pizza 1 e 1;
  KPI 1 e 0; funil ≥ 2 e 0). Mudou a escolha e o gráfico deixou de servir: volta para tabela.
- **Prévia**: `POST /reports/query` com debounce de 600 ms, na moeda da pessoa; resposta velha é
  descartada; erro da API aparece no lugar do gráfico (`errorText`). Limite de taxa: mostra o
  aviso e tenta de novo depois de `retry_after`.
- **Ordem**: sempre a primeira métrica, decrescente; linha/área com data no eixo ordenam pela
  data crescente (decisão do Claude, o eixo do tempo precisa da ordem do tempo).
- **Cores**: tokens CSS `--series-lime` etc. com versão clara e escura; a aparência usa o matiz
  135 → 0 (verde → vermelho) interpolado entre `from` e `to`, e o fundo da célula com 18 % de
  opacidade.
- **Exportar**: link `GET /api/v1/reports/{id}/export?format=…&locale=…` (sessão por cookie).
  Rascunho não salvo ou com alterações: "Salve para exportar".
- **Minhas métricas**: cada uma tem um menu com Editar (abre a modal com `metric_id`) e Apagar;
  `custom_metric_in_use` mostra a mensagem da API ("usada por N relatórios").
- **Permissões**: a lista e o construtor pedem `reports.view`; "Criar relatório", "Usar modelo",
  "Duplicar" e "Salvar como cópia" pedem `reports.manage`; "Nova métrica", editar e apagar
  métrica pedem `metrics.manage`; editar/apagar relatório segue o `editable` da API.
- **Menu**: item "Relatórios" no grupo de relatórios, depois de Visitas.

## O que fica para quem constrói

- A divisão em componentes dentro de `modules/reports/components/`.
- Se o gráfico de pizza e o de funil são componentes novos em `components/charts/`.
- Como o autocompletar da fórmula posiciona a lista (abaixo do campo basta).
