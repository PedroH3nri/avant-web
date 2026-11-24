import { describe, expect, it } from 'vitest'
import { THEMES, shownTheme } from '@/lib/theme'

describe('temas prontos', () => {
  it('são Claro, Escuro, GroOne e Sistema, cada um com as próprias cores', () => {
    expect(THEMES).toEqual(['light', 'dark', 'groone', 'system'])
  })

  it('o tema de agora é o escolhido, menos o do sistema', () => {
    expect(shownTheme('dark')).toBe('dark')
    expect(shownTheme('groone')).toBe('groone')
    expect(['light', 'dark']).toContain(shownTheme('system'))
  })
})
