import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import type { CustomMetricCheck, MetricCatalog } from '@/modules/reports/types'

const check = vi.hoisted(() => vi.fn())
vi.mock('@/modules/reports/service', () => ({ customMetricService: { check, create: vi.fn(), update: vi.fn() } }))

import CustomMetricDialog from '@/modules/reports/components/CustomMetricDialog.vue'

const catalog: MetricCatalog = { metrics: [], custom_metrics: [], dimensions: [], operators: [], periods: [], max_days: 1, max_limit: 1 }

describe('modal de métrica personalizada', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    setActivePinia(createPinia())
  })
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('ignora a conferência atrasada depois que a fórmula foi apagada', async () => {
    let finish: (value: CustomMetricCheck) => void = () => {}
    check.mockReturnValueOnce(new Promise((resolve) => (finish = resolve)))
    mount(CustomMetricDialog, { props: { open: false, metric: null, catalog }, attachTo: document.body })
      .setProps({ open: true })
    await flushPromises()
    const formula = document.querySelector<HTMLTextAreaElement>('#metric-formula')!
    formula.value = 'revenue'
    formula.dispatchEvent(new Event('input'))
    await vi.advanceTimersByTimeAsync(500)
    formula.value = ''
    formula.dispatchEvent(new Event('input'))
    await vi.advanceTimersByTimeAsync(500)
    finish({ valid: true, code: null, error: null, variables: ['revenue'], value: null })
    await flushPromises()
    expect(document.querySelector('#metric-formula-message')?.textContent).not.toMatch(/válida|valid/i)
  })
})
