import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import CostLinesList from '@/modules/results/components/CostLinesList.vue'
import type { MonthResult } from '@/modules/results/types'

/** Um mês com um custo da aba Custos e as duas integrações, a do Facebook escondida. */
function month(): MonthResult {
  return {
    month: '2026-11-01',
    billing: '1000.00',
    deductions: '0.00',
    revenue: '1000.00',
    costs: '150.00',
    result: '850.00',
    deductions_pending: false,
    cost_lines: [{ cost_id: 'c1', name: 'Equipe', kind: 'recurring', amount: '30.00' }],
    integration_lines: [
      { integration: 'facebook', amount: null, hidden: true },
      { integration: 'google_ads', amount: '20.00', hidden: false },
    ],
  }
}

describe('custos do mês no Resultado', () => {
  it('mostra o aviso de permissão no lugar do valor da integração escondida', () => {
    lang.value = 'pt'
    const wrapper = mount(CostLinesList, { props: { month: month(), money: (value: number | string) => `R$ ${Number(value).toFixed(2)}` } })
    const lines = wrapper.findAll('li').map((line) => line.text())
    expect(lines[0]).toContain('Equipe')
    expect(lines[1]).toContain('Você não possui permissão para visualizar esse dado')
    expect(lines[1]).not.toContain('R$')
    expect(lines[2]).toContain('R$ -20.00')
  })
})
