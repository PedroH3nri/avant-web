import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import type { SiteBenchmark } from '@/modules/benchmark/types'

const site = vi.hoisted(() => vi.fn())
const options = vi.hoisted(() => vi.fn())

vi.mock('@/modules/benchmark/service', () => ({ benchmarkService: { site } }))
vi.mock('@/modules/sites/service', () => ({ siteService: { options } }))

import BenchmarkView from '@/modules/benchmark/views/BenchmarkView.vue'
import { aboveMedian, bandOf, valueText, weakest } from '@/modules/benchmark/rules'

/** O comparativo de um site de receitas no Brasil com três métricas. */
function sample(): SiteBenchmark {
  return {
    site_id: 's1',
    domain: 'receitas.com',
    category: 'food',
    country: 'BR',
    countries: ['BR', 'PT'],
    eligible: true,
    size: 23,
    rows: [
      { metric: 'ecpm', value: '1.180000', median: '1.310000', p75: '1.740000', percentile: 45 },
      { metric: 'fill_rate', value: '87.000000', median: '82.000000', p75: '93.000000', percentile: 61 },
      { metric: 'viewability', value: '52.000000', median: '61.000000', p75: '72.000000', percentile: 27 },
    ],
  }
}

describe('regras do Comparativo com a rede', () => {
  beforeEach(() => (lang.value = 'pt'))

  it('formata cada métrica e acha a faixa e a mais fraca', () => {
    expect(valueText('ecpm', '1.18')).toBe('US$\u00a01,18')
    expect(valueText('fill_rate', '87.04')).toBe('87%')
    expect(valueText('pages_per_session', '2.4')).toBe('2,4')
    expect(valueText('ecpm', null)).toBe('–')
    expect([bandOf(10), bandOf(50), bandOf(75)]).toEqual(['low', 'mid', 'top'])
    const rows = sample().rows
    expect(aboveMedian(rows)).toBe(1)
    expect(weakest(rows)?.metric).toBe('viewability')
  })
})

describe('tela do Comparativo com a rede', () => {
  beforeEach(() => {
    lang.value = 'pt'
    site.mockReset()
    options.mockReset()
  })

  it('carrega o primeiro site e mostra as métricas contra o grupo', async () => {
    options.mockResolvedValue({ items: [{ id: 's1', domain: 'receitas.com' }] })
    site.mockResolvedValue(sample())
    const wrapper = mount(BenchmarkView)
    await flushPromises()
    expect(site).toHaveBeenCalledWith('s1', null)
    const text = wrapper.text()
    expect(text).toContain('Comparativo com a rede')
    expect(text).toContain('23')
    expect(text).toContain('1 de 3')
    expect(text).toContain('Viewability')
    expect(text).toContain('Mediana 61%')
    expect(text).toContain('Lazy load')
  })

  it('explica quando ainda não há grupo', async () => {
    options.mockResolvedValue({ items: [{ id: 's1', domain: 'receitas.com' }] })
    site.mockResolvedValue({ ...sample(), country: null, countries: [], rows: [], size: 0, eligible: false })
    const wrapper = mount(BenchmarkView)
    await flushPromises()
    expect(wrapper.text()).toContain('Ainda não há grupo para comparar este site.')
  })
})
