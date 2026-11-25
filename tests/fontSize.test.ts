import postcss from 'postcss'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { fontSize } from '@/lib/theme'
import scaleRem from '../scripts/postcss-scale-rem.js'

describe('tamanho do texto', () => {
  /** O tamanho escolhido vai para ``data-font-size`` no <html>; no padrão, o atributo sai. */
  it('marca no html o tamanho escolhido', async () => {
    fontSize.value = 'larger'
    await nextTick()
    expect(document.documentElement.getAttribute('data-font-size')).toBe('larger')
    fontSize.value = 'default'
    await nextTick()
    expect(document.documentElement.hasAttribute('data-font-size')).toBe(false)
  })

  /** Fonte, tamanho, espaço e grade em px viram rem; borda, sombra e até 2px ficam em px. */
  it('passa os tamanhos em px para rem', async () => {
    const css =
      '.a{font-size:14px;padding:14px 1px}.b{grid-template-columns:180px 1fr;max-width:calc(92vw - 88px)}.c{border-width:4px;box-shadow:0 8px 24px #000;height:1px}'
    const result = await postcss([scaleRem()]).process(css, { from: undefined })
    expect(result.css).toBe(
      '.a{font-size:0.875rem;padding:0.875rem 1px}.b{grid-template-columns:11.25rem 1fr;max-width:calc(92vw - 5.5rem)}.c{border-width:4px;box-shadow:0 8px 24px #000;height:1px}',
    )
  })
})
