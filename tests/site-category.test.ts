import { beforeAll, describe, expect, it } from 'vitest'
import { lang } from '@/lib/i18n'
import { dimensionText } from '@/modules/reports/rules'
import { KEEP, NONE, SITE_CATEGORIES, categoryLabel, sitePatch } from '@/modules/sites/rules'

describe('categoria e responsável do site', () => {
  beforeAll(() => (lang.value = 'pt'))

  it('dá nome a cada categoria e ao vazio', () => {
    expect(SITE_CATEGORIES).toHaveLength(14)
    expect(categoryLabel('news')).toBe('Notícias')
    expect(categoryLabel(null)).toBe('Sem categoria')
    expect(categoryLabel('desconhecida')).toBe('desconhecida')
  })

  it('só manda no PATCH o que não ficou em manter', () => {
    expect(sitePatch(KEEP, KEEP)).toEqual({})
    expect(sitePatch('food', KEEP)).toEqual({ category: 'food' })
    expect(sitePatch(NONE, 'user-1')).toEqual({ category: null, responsible_user_id: 'user-1' })
    expect(sitePatch(KEEP, NONE)).toEqual({ responsible_user_id: null })
  })

  it('mostra a categoria e o responsável nos relatórios, inclusive vazios', () => {
    expect(dimensionText('site_category', 'sports', {}, 'pt-BR')).toBe('Esportes')
    expect(dimensionText('site_category', null, {}, 'pt-BR')).toBe('Sem categoria')
    expect(dimensionText('site_responsible', null, {}, 'pt-BR')).toBe('Sem responsável')
    expect(dimensionText('site_responsible', 'user-1', { site_responsible: { 'user-1': 'Ana' } }, 'pt-BR')).toBe('Ana')
    expect(dimensionText('site', null, {}, 'pt-BR')).toBeNull()
  })
})
