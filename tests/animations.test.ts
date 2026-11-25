import { describe, expect, it } from 'vitest'
import { nextTick } from 'vue'
import { ANIMATION_AREAS, animations } from '@/lib/theme'

describe('animações por área', () => {
  /** Áreas desligadas vão para ``data-motion-off`` no <html>; com todas ligadas, o atributo sai. */
  it('marca no html as áreas desligadas', async () => {
    animations.value = ['cards']
    await nextTick()
    expect(document.documentElement.getAttribute('data-motion-off')).toBe('fields buttons')
    animations.value = [...ANIMATION_AREAS]
    await nextTick()
    expect(document.documentElement.hasAttribute('data-motion-off')).toBe(false)
  })
})
