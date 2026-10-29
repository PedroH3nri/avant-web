import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { ApiError } from '@/lib/api'
import { useSession } from '@/stores/session'
import type { Me } from '@/lib/types'
import type { MetricCatalog, ReportResult, SavedReport } from '@/modules/reports/types'

const service = vi.hoisted(() => ({ catalog: vi.fn(), get: vi.fn(), query: vi.fn(), templates: vi.fn() }))
vi.mock('@/modules/reports/service', () => ({ reportService: service, customMetricService: { list: vi.fn() }, exportUrl: () => '' }))

import ReportBuilderView from '@/modules/reports/views/ReportBuilderView.vue'

const label = (text: string) => ({ pt: text, en: text, es: text })
const catalog: MetricCatalog = {
  metrics: [{ key: 'revenue', label: label('Receita'), kind: 'sum', format: 'currency', sources: ['gam'] }],
  custom_metrics: [],
  dimensions: [
    { key: 'site', label: label('Site'), sources: ['gam'], filterable: true },
    { key: 'country', label: label('País'), sources: ['gam'], filterable: true },
  ],
  operators: ['in'],
  periods: ['last_30_days'],
  max_days: 400,
  max_limit: 10000,
}
const report: SavedReport = {
  id: 'r1',
  name: 'Receita por site',
  description: null,
  query: { source: 'gam', metrics: ['revenue'], period: { preset: 'last_30_days' }, dimensions: ['site'], filters: [], compare: false, order: [], limit: 100 },
  chart_type: 'table',
  chart_options: {},
  visibility: 'company',
  role_ids: [],
  owner_user_id: 'u',
  created_by: 'u',
  created_at: '2026-10-28T00:00:00Z',
  updated_at: '2026-10-28T00:00:00Z',
  editable: true,
}
const result: ReportResult = {
  period: { start: '2026-10-01', end: '2026-10-28' },
  rows: [{ dimensions: { site: 's1' }, metrics: { revenue: '10' }, previous: null }],
  totals: { revenue: '10' },
  previous_period: null,
  previous_totals: null,
  truncated: false,
  labels: { site: { s1: 'acai.com.br' } },
  currency: 'USD',
}
const me: Me = {
  user: { id: 'u', email: 'ana@acai.com', name: 'Ana', locale: 'pt', image_url: null },
  companies: [{ id: 'c', name: 'Açaí', slug: 'acai', is_owner: true, is_internal: false, image_url: null }],
  active_company_id: 'c',
  permissions: ['reports.view', 'reports.manage'],
  site_scope: 'all',
  is_staff: false,
  mfa_enabled: true,
  mfa_setup_required: false,
  display_currency: 'USD',
  theme: 'system',
  accent: 'default',
}

/** Monta o construtor no relatório salvo e espera a primeira prévia. */
async function open(): Promise<VueWrapper> {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/relatorios', component: defineComponent({ template: '<div />' }) },
      { path: '/relatorios/:id', component: ReportBuilderView },
    ],
  })
  await router.push('/relatorios/r1')
  const wrapper = mount(ReportBuilderView, { global: { plugins: [router] }, attachTo: document.body })
  await flushPromises()
  await vi.advanceTimersByTimeAsync(700)
  await flushPromises()
  return wrapper
}

/** Clica no campo da lista da esquerda pelo nome. */
async function click(wrapper: VueWrapper, name: string) {
  await wrapper.findAll('aside button').find((button) => button.text().startsWith(name))!.trigger('click')
}

describe('construtor de relatórios', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    setActivePinia(createPinia())
    useSession().set(me)
    service.catalog.mockResolvedValue(catalog)
    service.get.mockResolvedValue(report)
    service.query.mockReset()
  })
  afterEach(() => {
    vi.useRealTimers()
    document.body.innerHTML = ''
  })

  it('troca o resultado pelo erro da API, sem mostrar dados da escolha anterior', async () => {
    service.query.mockResolvedValueOnce(result).mockRejectedValueOnce(new ApiError(422, 'invalid_input', 'consulta ruim'))
    const wrapper = await open()
    expect(wrapper.find('main table').exists()).toBe(true)
    await click(wrapper, 'País')
    await vi.advanceTimersByTimeAsync(700)
    await flushPromises()
    expect(wrapper.find('[role="alert"]').text()).toBe('consulta ruim')
    expect(wrapper.find('main table').exists()).toBe(false)
  })

  it('ignora a resposta atrasada depois que a última métrica sai', async () => {
    let finish: (value: ReportResult) => void = () => {}
    service.query.mockResolvedValueOnce(result).mockReturnValueOnce(new Promise((resolve) => (finish = resolve)))
    const wrapper = await open()
    await click(wrapper, 'País')
    await vi.advanceTimersByTimeAsync(700)
    await click(wrapper, 'Receita')
    await vi.advanceTimersByTimeAsync(700)
    finish(result)
    await flushPromises()
    expect(wrapper.find('[role="alert"]').text()).toContain('métrica')
    expect(wrapper.find('main table').exists()).toBe(false)
  })

  it('diz em quantos segundos tenta de novo quando passa do limite', async () => {
    service.query.mockRejectedValueOnce(new ApiError(429, 'rate_limited', 'muitas', {}, 7)).mockResolvedValue(result)
    const wrapper = await open()
    const text = wrapper.find('[role="alert"]').text()
    expect(text).toContain('7')
    expect(text).not.toContain('{')
  })

  it('não consulta mais nada depois de sair da tela', async () => {
    service.query.mockResolvedValueOnce(result).mockRejectedValue(new ApiError(429, 'rate_limited', 'muitas', {}, 1))
    const wrapper = await open()
    await click(wrapper, 'País')
    wrapper.unmount()
    await vi.advanceTimersByTimeAsync(5000)
    await flushPromises()
    expect(service.query).toHaveBeenCalledTimes(1)
  })
})
