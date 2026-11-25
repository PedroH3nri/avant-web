import postcss from 'postcss'
import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { fontSize } from '@/lib/theme'
import fontRem from '../scripts/postcss-font-rem.js'

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

  /** Só o ``font-size`` em px vira rem; o resto do CSS fica como está. */
  it('passa as fontes em px para rem', async () => {
    const css = '.a{font-size:14px;padding:14px}.b{font-size:12.5px}.c{font-size:1.5rem}'
    const result = await postcss([fontRem()]).process(css, { from: undefined })
    expect(result.css).toBe('.a{font-size:0.875rem;padding:14px}.b{font-size:0.7813rem}.c{font-size:1.5rem}')
  })
})
