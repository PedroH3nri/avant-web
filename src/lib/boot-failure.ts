/**
 * Aviso de quando o painel não consegue abrir porque nenhum idioma carregou. Os textos ficam fixos
 * aqui, nos três idiomas, porque o dicionário é justamente o que não chegou.
 */

const LINES = [
  'Não foi possível carregar o painel. Recarregue a página.',
  'Could not load the panel. Reload the page.',
  'No se pudo cargar el panel. Recargue la página.',
]

/** Mostra o aviso e um botão de recarregar no lugar do painel. */
export function showBootFailure(root: HTMLElement): void {
  const box = document.createElement('div')
  box.setAttribute('role', 'alert')
  box.className = 'mx-auto mt-24 flex max-w-md flex-col gap-2 p-6 text-sm text-foreground'
  for (const line of LINES) {
    const paragraph = document.createElement('p')
    paragraph.textContent = line
    box.append(paragraph)
  }
  const reload = document.createElement('button')
  reload.type = 'button'
  reload.className = 'mt-4 self-start rounded-md border px-3 py-1.5 font-medium'
  reload.textContent = 'Recarregar / Reload / Recargar'
  reload.addEventListener('click', () => window.location.reload())
  box.append(reload)
  root.replaceChildren(box)
}
