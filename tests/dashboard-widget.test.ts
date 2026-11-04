import { afterEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import DashboardWidget from '@/modules/dashboards/components/DashboardWidget.vue'
import type { Widget } from '@/modules/dashboards/types'
import { reportService } from '@/modules/reports/service'
import type { MetricCatalog } from '@/modules/reports/types'

const widget: Widget = { id: 'w1', type: 'report', x: 0, y: 0, w: 6, h: 4, title: null, report_id: 'r1' }

afterEach(() => vi.restoreAllMocks())

describe('DashboardWidget', () => {
  it('não busca o relatório de novo quando o widget só muda de lugar ou de tamanho', async () => {
    const get = vi.spyOn(reportService, 'get').mockRejectedValue(new Error('sem rede'))
    const view = mount(DashboardWidget, {
      props: {
        widget,
        filters: null,
        catalog: { metrics: [], dimensions: [] } as unknown as MetricCatalog,
        editing: true,
        stored: true,
        result: null,
        failure: null,
        loading: false,
      },
      global: { stubs: { ReportChart: true, ReportTable: true, GoalBar: true, AccountStatus: true } },
    })
    await flushPromises()
    for (let step = 1; step <= 5; step += 1) await view.setProps({ widget: { ...widget, x: step, w: 6 + step } })
    await flushPromises()
    expect(get).toHaveBeenCalledOnce()
    await view.setProps({ widget: { ...widget, report_id: 'r2' } })
    await flushPromises()
    expect(get).toHaveBeenCalledTimes(2)
  })
})
