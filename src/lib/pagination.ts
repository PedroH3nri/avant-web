/** Paginação numerada (como no Genius): 10 itens por página e os números a mostrar. */

/** Itens por página em todas as listagens (o mesmo ``PAGE_SIZE`` do avant-core). */
export const PAGE_SIZE = 10
const SHOW_ALL_UP_TO = 7
const ELLIPSIS = '…'

/** Os números das páginas a mostrar: todas quando são poucas; senão a primeira, a última e
 * três em volta da atual, com reticências onde pula mais de uma. */
export function pageNumbers(current: number, pages: number): (number | typeof ELLIPSIS)[] {
  if (pages <= 0) return []
  if (pages <= SHOW_ALL_UP_TO) return Array.from({ length: pages }, (_, index) => index + 1)
  const start = Math.max(1, Math.min(current - 1, pages - 2))
  const shown = [...new Set([1, start, start + 1, start + 2, pages])].sort((first, second) => first - second)
  const result: (number | typeof ELLIPSIS)[] = []
  shown.forEach((value, index) => {
    const previous = shown[index - 1]
    if (previous !== undefined && value - previous === 2) result.push(previous + 1)
    else if (previous !== undefined && value - previous > 2) result.push(ELLIPSIS)
    result.push(value)
  })
  return result
}
