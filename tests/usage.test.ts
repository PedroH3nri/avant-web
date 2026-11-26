import { describe, expect, it } from 'vitest'
import { areaFor } from '@/modules/usage/rules'
import { areaShares, formatMinutes, peopleMatching } from '@/modules/internal/usage/rules'

describe('contagem de uso do painel', () => {
  it('acha a área do menu de cada caminho', () => {
    expect(areaFor('/')).toBe('dashboard')
    expect(areaFor('/sites')).toBe('inventory')
    expect(areaFor('/sites/123')).toBe('inventory')
    expect(areaFor('/desempenho')).toBe('reports')
    expect(areaFor('/facebook')).toBe('integrations')
    expect(areaFor('/configuracoes/conta')).toBe('settings')
    expect(areaFor('/ajuda')).toBe('help')
    expect(areaFor('/qualquer-coisa')).toBe('other')
  })
})

describe('telas de uso no painel interno', () => {
  it('mostra os minutos em horas', () => {
    expect(formatMinutes(25)).toBe('25 min')
    expect(formatMinutes(362)).toBe('6 h 02')
  })

  it('calcula a parte de cada área', () => {
    expect(areaShares({ tools: 1, reports: 3 })).toEqual([
      { area: 'reports', share: 75 },
      { area: 'tools', share: 25 },
    ])
    expect(areaShares({})).toEqual([])
  })

  it('filtra as pessoas pela busca e pelo uso', () => {
    const people = [
      { name: 'Ana Souza', email: 'ana@blog.com', totals: { active_days: 3 } },
      { name: 'Bia', email: 'bia@blog.com', totals: { active_days: 0 } },
    ]
    expect(peopleMatching(people, 'ana', 'all').map((person) => person.name)).toEqual(['Ana Souza'])
    expect(peopleMatching(people, '', 'idle').map((person) => person.name)).toEqual(['Bia'])
    expect(peopleMatching(people, ' BLOG ', 'active').map((person) => person.name)).toEqual(['Ana Souza'])
  })
})
