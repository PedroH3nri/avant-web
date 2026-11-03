/** Arrastar e redimensionar os widgets na grade com o mouse (ou caneta), a partir da tela média. */

import { computed, onBeforeUnmount, ref, type Ref } from 'vue'
import { GRID_COLUMNS, placeWidget } from '@/modules/dashboards/rules'
import type { Widget } from '@/modules/dashboards/types'

export type DragMode = 'move' | 'resize'

const FALLBACK_GAP = 16
const FALLBACK_ROW = 72
const WIDE_SCREEN = '(min-width: 768px)'

/** O tamanho de uma coluna e de uma linha da grade, contando o espaço entre elas, em pixels. */
function cellSize(grid: HTMLElement): { column: number; row: number } {
  const style = getComputedStyle(grid)
  const columnGap = parseFloat(style.columnGap) || FALLBACK_GAP
  const rowGap = parseFloat(style.rowGap) || FALLBACK_GAP
  const rowHeight = parseFloat(style.gridAutoRows) || FALLBACK_ROW
  const column = (grid.clientWidth - columnGap * (GRID_COLUMNS - 1)) / GRID_COLUMNS
  return { column: column + columnGap, row: rowHeight + rowGap }
}

/** Liga a grade ao arraste: mostra a prévia enquanto a pessoa arrasta e grava no fim; Esc cancela. */
export function useWidgetDrag(grid: Ref<HTMLElement | null>, widgets: Ref<Widget[]>) {
  const preview = ref<Widget[] | null>(null)
  const activeId = ref<string | null>(null)
  let start: Widget | null = null
  let mode: DragMode = 'move'
  let originX = 0
  let originY = 0
  let cell = { column: 1, row: 1 }

  const shown = computed(() => preview.value ?? widgets.value)

  /** Começa a arrastar (pelo título) ou a redimensionar (pelo canto) com o botão principal. */
  function begin(event: PointerEvent, widget: Widget, kind: DragMode) {
    if (event.button !== 0 || !grid.value || !window.matchMedia(WIDE_SCREEN).matches) return
    event.preventDefault()
    start = { ...widget }
    mode = kind
    originX = event.clientX
    originY = event.clientY
    cell = cellSize(grid.value)
    activeId.value = widget.id
    preview.value = widgets.value
    window.addEventListener('pointermove', follow)
    window.addEventListener('pointerup', finish)
    window.addEventListener('pointercancel', cancel)
    window.addEventListener('keydown', escape)
  }

  /** Recalcula a prévia com quantas colunas e linhas o ponteiro andou. */
  function follow(event: PointerEvent) {
    if (!start) return
    const columns = Math.round((event.clientX - originX) / cell.column)
    const rows = Math.round((event.clientY - originY) / cell.row)
    const box =
      mode === 'move'
        ? { x: start.x + columns, y: start.y + rows, w: start.w, h: start.h }
        : { x: start.x, y: start.y, w: Math.min(start.w + columns, GRID_COLUMNS - start.x), h: start.h + rows }
    preview.value = placeWidget(widgets.value, start.id, box)
  }

  /** Grava a prévia na grade e solta o widget. */
  function finish() {
    if (preview.value) widgets.value = preview.value
    stop()
  }

  /** Solta o widget sem mudar nada. */
  function cancel() {
    stop()
  }

  /** Esc durante o arraste cancela. */
  function escape(event: KeyboardEvent) {
    if (event.key === 'Escape') cancel()
  }

  /** Limpa o estado do arraste e os ouvintes da janela. */
  function stop() {
    start = null
    preview.value = null
    activeId.value = null
    window.removeEventListener('pointermove', follow)
    window.removeEventListener('pointerup', finish)
    window.removeEventListener('pointercancel', cancel)
    window.removeEventListener('keydown', escape)
  }

  onBeforeUnmount(stop)
  return { shown, activeId, begin }
}
