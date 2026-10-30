import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount, type VueWrapper } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { defineComponent } from 'vue'
import { useSession } from '@/stores/session'
import type { Me } from '@/lib/types'
import type { MetricCatalog, ReportResult, SavedReport } from '@/modules/reports/types'

const service = vi.hoisted(() => ({
  catalog: vi.fn(),
  get: vi.fn(),
  query: vi.fn(),
  pinned: vi.fn(),
  pin: vi.fn(),
  unpin: vi.fn(),
  update: vi.fn(),
  duplicate: vi.fn(),
}))
vi.mock('@/modules/reports/service', () => ({ reportService: service, exportUrl: () => '' }))

import ReportView from '@/modules/reports/views/ReportView.vue'

const label = (text: string) => ({ pt: text, en: text, es: text })
const catalog: MetricCatalog = {
  metrics: [{ key: 'revenue', label: label('Receita'), kind: 'sum', format: 'currency', sources: ['gam'] }],
  custom_metrics: [],
  dimensions: [{ key: 'site', label: label('Site'), sources: ['gam'], filterable: true }],
  operators: ['in'],
  periods: ['last_30_days'],
  max_days: 400,
  max_limit: 10000,
}
const report: SavedReport = {
  id: 'r1',
  name: 'Receita por site',
  description: 'Os sites que mais rendem',
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

/** Abre a leitura do relatório e espera a consulta. */
async function open(): Promise<VueWrapper> {
  const blank = defineComponent({ template: '<div />' })
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/relatorios', component: blank },
      { path: '/relatorios/:id', component: ReportView },
      { path: '/relatorios/:id/editar', component: blank },
    ],
  })
  await router.push('/relatorios/r1')
  const wrapper = mount(ReportView, { global: { plugins: [router] }, attachTo: document.body })
  await flushPromises()
  return wrapper
}

describe('leitura do relatório salvo', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    useSession().set(me)
    service.catalog.mockResolvedValue(catalog)
    service.get.mockResolvedValue(report)
    service.pinned.mockResolvedValue({ items: [] })
    service.query.mockReset().mockResolvedValue(result)
    service.update.mockReset()
    service.pin.mockReset().mockResolvedValue(undefined)
  })
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('mostra o total, a tabela e roda no período salvo', async () => {
    const wrapper = await open()
    expect(wrapper.text()).toContain('Receita por site')
    expect(wrapper.text()).toContain('acai.com.br')
    expect(service.query).toHaveBeenCalledWith(expect.objectContaining({ period: { preset: 'last_30_days' }, currency: 'USD' }))
    expect(wrapper.text()).not.toContain('Vendo diferente do salvo')
  })

  it('troca o período só na visita, volta ao salvo e salva assim', async () => {
    const wrapper = await open()
    await wrapper.find('select').setValue('last_7_days')
    await flushPromises()
    expect(service.query).toHaveBeenLastCalledWith(expect.objectContaining({ period: { preset: 'last_7_days' } }))
    expect(wrapper.text()).toContain('Vendo diferente do salvo')
    const button = (text: string) => wrapper.findAll('button').find((item) => item.text() === text)!
    await button('Voltar ao salvo').trigger('click')
    await flushPromises()
    expect(service.query).toHaveBeenLastCalledWith(expect.objectContaining({ period: { preset: 'last_30_days' } }))
    await wrapper.find('select').setValue('last_7_days')
    service.update.mockResolvedValue({ ...report, query: { ...report.query, period: { preset: 'last_7_days' } } })
    await button('Salvar assim').trigger('click')
    await flushPromises()
    expect(service.update).toHaveBeenCalledWith('r1', expect.objectContaining({ query: expect.objectContaining({ period: { preset: 'last_7_days' } }) }))
    expect(wrapper.text()).not.toContain('Vendo diferente do salvo')
  })

  it('fixa o relatório no topo da lista', async () => {
    const wrapper = await open()
    await wrapper.find('button[aria-pressed="false"][title="Fixar no topo"]').trigger('click')
    await flushPromises()
    expect(service.pin).toHaveBeenCalledWith('r1')
    expect(wrapper.find('button[title="Desafixar"]').attributes('aria-pressed')).toBe('true')
  })
})
