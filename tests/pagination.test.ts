import { describe, expect, it } from 'vitest'
import { pageNumbers } from '@/lib/pagination'

describe('paginação numerada', () => {
  it('mostra todas as páginas quando são poucas', () => {
    expect(pageNumbers(1, 1)).toEqual([1])
    expect(pageNumbers(2, 5)).toEqual([1, 2, 3, 4, 5])
    expect(pageNumbers(1, 7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })

  it('encurta com reticências em volta da página atual', () => {
    expect(pageNumbers(5, 20)).toEqual([1, '…', 4, 5, 6, '…', 20])
    expect(pageNumbers(1, 20)).toEqual([1, 2, 3, '…', 20])
    expect(pageNumbers(20, 20)).toEqual([1, '…', 18, 19, 20])
    expect(pageNumbers(3, 20)).toEqual([1, 2, 3, 4, '…', 20])
  })

  it('não mostra nada sem páginas', () => {
    expect(pageNumbers(1, 0)).toEqual([])
  })
})
