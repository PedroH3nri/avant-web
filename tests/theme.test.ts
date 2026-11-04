import { describe, expect, it } from 'vitest'
import { ACCENTS, THEMES, accentCss, accentFor, swatchColor } from '@/lib/theme'

describe('tema e cor secundária', () => {
  it('tem o tema GroOne e dez cores, sem vermelho', () => {
    expect(THEMES).toEqual(['light', 'dark', 'groone', 'system'])
    expect(ACCENTS.map((accent) => accent.id)).toEqual(['default', 'blue', 'navy', 'cyan', 'green', 'purple', 'pink', 'orange', 'gold', 'graphite'])
  })

  it('cada cor tem o seu tom no GroOne', () => {
    const css = accentCss(accentFor('blue'))
    expect(css).toContain(':root[data-theme="groone"]{--primary:212 85% 40%;')
    expect(css).toContain(':not([data-theme="groone"])')
  })

  it('marinho e grafite ganham borda clara só no GroOne', () => {
    expect(accentCss(accentFor('navy'))).toMatch(/:root\[data-theme="groone"\]\{[^}]*--primary-edge:213 45% 60%/)
    expect(accentCss(accentFor('blue'))).not.toContain('--primary-edge')
  })

  it('a amostra mostra a cor no tema de agora', () => {
    const navy = accentFor('navy')
    expect(swatchColor(navy, 'light')).toBe(`hsl(${navy.light})`)
    expect(swatchColor(navy, 'groone')).toBe(`hsl(${navy.groone})`)
    expect(swatchColor(accentFor('default'), 'groone')).toBe('hsl(215 78% 27%)')
  })
})
