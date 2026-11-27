import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import type { MonthForecast } from '@/modules/internal/forecast/types'

const month = vi.hoisted(() => vi.fn())

vi.mock('@/modules/internal/forecast/service', () => ({ forecastService: { month } }))

import Select from '@/components/ui/Select.vue'
import ForecastView from '@/modules/internal/forecast/views/ForecastView.vue'
import { changeOf, ratePercent, valueText, whenText } from '@/modules/internal/forecast/rules'

/** A previsão de novembro com dois dias realizados e um previsto. */
function sample(): MonthForecast {
  return {
    month: '2026-11-01',
    realized: '160300.00',
    previous_month: '174000.00',
    deduction_rate: '0.0460',
    scenarios: [
      { scenario: 'low', gross: '175000.00', groone: '41000.00', deduction: '8050.00', commission: '6000.00' },
      { scenario: 'base', gross: '186400.00', groone: '43800.00', deduction: '8574.40', commission: '6320.00' },
      { scenario: 'high', gross: '195000.00', groone: '45800.00', deduction: '8970.00', commission: '6600.00' },
    ],
    days: [
      { day: '2026-11-01', actual: '5100.00', forecast: null },
      { day: '2026-11-02', actual: '5300.00', forecast: null },
      { day: '2026-11-03', actual: null, forecast: '7100.00' },
    ],
    cash: [
      { kind: 'mcm_close', starts_on: '2026-12-15', ends_on: '2026-12-15', direction: 'in', amount: '41900.00', count: null },
      { kind: 'commission_close', starts_on: '2026-12-15', ends_on: '2026-12-20', direction: 'out', amount: '6320.00', count: null },
      { kind: 'team_invoices', starts_on: '2026-12-20', ends_on: '2026-12-20', direction: 'out', amount: null, count: 7 },
      { kind: 'gam_payment', starts_on: '2026-12-21', ends_on: '2026-12-21', direction: 'gam', amount: null, count: 3 },
    ],
  }
}

describe('regras da Previsão do mês', () => {
  beforeEach(() => (lang.value = 'pt'))

  it('calcula a variação e a taxa e monta as datas do caixa', () => {
    expect(changeOf('186400', '174000')).toBe(7)
    expect(changeOf('100', '0')).toBeNull()
    expect(ratePercent('0.0460')).toBe('4,6%')
    const [close, commission, invoices, gam] = sample().cash
    expect(whenText(close!)).toBe('15/12')
    expect(whenText(commission!)).toBe('15/12 a 20/12')
    expect(valueText(invoices!)).toBe('7 invoices emitidas')
    expect(valueText(gam!)).toContain('Sem caixa da Groone')
  })
})

describe('tela Previsão do mês', () => {
  beforeEach(() => {
    lang.value = 'pt'
    month.mockResolvedValue(sample())
  })
  afterEach(() => vi.clearAllMocks())

  it('mostra o cenário provável e troca para o otimista', async () => {
    const wrapper = mount(ForecastView)
    await flushPromises()
    const text = wrapper.text()
    expect(text).toContain('novembro')
    expect(text).toContain('186.400')
    expect(text).toContain('+7% contra o mês passado')
    expect(text).toContain('4,6%, média dos últimos 3 meses')
    expect(text).toContain('GAM fecha o Mcm_Earnings de novembro')
    expect(wrapper.findAll('rect')).toHaveLength(3)
    await wrapper.findComponent(Select).vm.$emit('update:modelValue', 'high')
    await flushPromises()
    expect(wrapper.text()).toContain('195.000')
  })
})
