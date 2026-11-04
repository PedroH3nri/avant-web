import { beforeAll, describe, expect, it } from 'vitest'
import { lang } from '@/lib/i18n'
import { defaultSites, finishedSteps, installable, siteSummary, stepDetail, stepLabel, toggleDomain, writes } from '@/modules/internal/gam_tools/rules'
import type { GamStep, GamToolSite } from '@/modules/internal/gam_tools/types'

/** Um site mínimo para os testes. */
function site(domain: string, blocks: number, format: GamToolSite['format'], hasParent = blocks > 0): GamToolSite {
  return { id: domain, domain, has_parent: hasParent, blocks, format, blocks_date: null }
}

/** Um passo mínimo para os testes. */
function step(key: string, state: GamStep['state'], extra: Partial<GamStep> = {}): GamStep {
  return { key, state, site: null, count: null, gam_id: null, error: null, ...extra }
}

describe('ferramentas do GAM', () => {
  beforeAll(() => (lang.value = 'pt'))

  it('marca só as ferramentas que escrevem no GAM', () => {
    expect(writes('config')).toBe(true)
    expect(writes('key_values')).toBe(true)
    expect(writes('sync')).toBe(false)
    expect(writes('install')).toBe(false)
  })

  it('começa o setup com os sites sem blocos e alterna a escolha', () => {
    const sites = [site('a.com', 14, 'light'), site('b.com', 0, null)]
    expect(defaultSites(sites)).toEqual(['b.com'])
    expect(toggleDomain(['b.com'], 'a.com')).toEqual(['b.com', 'a.com'])
    expect(toggleDomain(['b.com', 'a.com'], 'b.com')).toEqual(['a.com'])
  })

  it('deixa a GTag de fora do arquivo de instalação', () => {
    const sites = [site('a.com', 14, 'light'), site('g.com', 27, 'gtag'), site('mi.com', 0, null)]
    expect(installable(sites).map((item) => item.domain)).toEqual(['a.com', 'mi.com'])
  })

  it('resume o que o site já tem', () => {
    expect(siteSummary(site('a.com', 14, 'light'))).toBe('14 blocos · Tag Light')
    expect(siteSummary(site('b.com', 0, null, true))).toBe('Só o bloco pai')
    expect(siteSummary(site('c.com', 0, null))).toBe('Nada importado do GAM ainda')
  })

  it('nomeia e descreve os passos', () => {
    expect(stepLabel(step('children', 'pending', { site: 'a.com' }), 'gtag')).toBe('27 blocos filhos de a.com')
    expect(stepLabel(step('line_items', 'pending'), 'light')).toBe('Line item Display')
    expect(stepLabel(step('order', 'pending'), 'light')).toBe('Order AdExchange')
    expect(stepDetail(step('children', 'done', { count: 3, gam_id: '20261104' }))).toBe('3 criados com a data 20261104')
    expect(stepDetail(step('order', 'existed', { gam_id: '99' }))).toBe('99 já existia')
    expect(stepDetail(step('keys', 'existed', { count: 0 }))).toBe('Nada novo para criar')
    expect(stepDetail(step('order', 'failed', { error: 'gam_error' }))).toBe('Erro gam_error')
    expect(stepDetail(step('order', 'pending'))).toBe('')
    expect(finishedSteps([step('info', 'done'), step('keys', 'existed'), step('values', 'running')])).toBe(2)
  })
})
