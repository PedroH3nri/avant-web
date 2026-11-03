import { mount } from '@vue/test-utils'
import { beforeAll, describe, expect, it } from 'vitest'
import { lang } from '@/lib/i18n'
import RevenueStatusBadge from '@/modules/revenue/components/RevenueStatusBadge.vue'
import { changeText, perDayText, TREND_CLASS } from '@/modules/revenue/rules'
import type { RevenueStatus } from '@/modules/revenue/types'

const SCALING: RevenueStatus = { trend: 'scaling', per_day: '2350.4', change_percent: 28, recent: '70512', previous: '55087' }

describe('status de faturamento', () => {
  beforeAll(() => (lang.value = 'pt'))

  it('mostra a média por dia sem centavos e a variação com sinal', () => {
    expect(perDayText(SCALING, 'en')).toBe('$2,350')
    expect(changeText(SCALING)).toBe('+28%')
    expect(changeText({ ...SCALING, change_percent: -31 })).toBe('-31%')
    expect(changeText({ ...SCALING, change_percent: null })).toBe('')
  })

  it('pinta cada tendência com a sua cor', () => {
    expect(TREND_CLASS.scaling).toContain('text-ok')
    expect(TREND_CLASS.reducing).toContain('text-ochre')
    expect(TREND_CLASS.stopped).toContain('text-bad')
  })

  it('mostra a badge com o texto da tendência, ou sem receita', () => {
    const scaling = mount(RevenueStatusBadge, { props: { status: SCALING } })
    expect(scaling.text()).toContain('Escalando')
    expect(scaling.text()).toContain('/dia · +28%')
    const empty = mount(RevenueStatusBadge, { props: { status: null } })
    expect(empty.text()).toBe('Sem receita')
  })
})
