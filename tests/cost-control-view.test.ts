import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import type { CostControl } from '@/modules/cost_control/types'

const route = vi.hoisted(() => ({ meta: {} as Record<string, unknown>, query: {} as Record<string, string> }))
const company = vi.hoisted(() => vi.fn())
const client = vi.hoisted(() => vi.fn())
const options = vi.hoisted(() => vi.fn())

vi.mock('vue-router', () => ({ useRoute: () => route, useRouter: () => ({ replace: vi.fn(), push: vi.fn() }), RouterLink: { template: '<a><slot /></a>' } }))
vi.mock('@/stores/session', () => ({ useSession: () => ({ can: () => true, displayCurrency: 'USD', me: null }) }))
vi.mock('@/modules/cost_control/service', () => ({ costControlService: { company, client } }))
vi.mock('@/modules/internal/clients/service', () => ({ clientService: { companyOptions: options } }))

import CostControlView from '@/modules/cost_control/views/CostControlView.vue'

const CONTROL: CostControl = {
  currency: 'USD',
  start: '2026-11-01',
  end: '2026-11-27',
  accounts: [
    {
      integration: 'facebook',
      account_id: 'a1',
      name: 'Conta FB',
      account_currency: 'USD',
      site_id: 's1',
      site_domain: 'acai.com.br',
      person: { id: 'p1', name: 'Ana Lima', email: 'ana@acai.com' },
      by_owner: false,
      spend: '100.00',
      revenue: '150.00',
      month_spend: '100.00',
      monthly_limit: '400.00',
    },
    {
      integration: 'google_ads',
      account_id: 'a2',
      name: 'Conta Google',
      account_currency: 'BRL',
      site_id: null,
      site_domain: null,
      person: { id: 'p2', name: 'Pedro Dono', email: 'dono@acai.com' },
      by_owner: true,
      spend: '50.00',
      revenue: null,
      month_spend: '50.00',
      monthly_limit: null,
    },
  ],
  days: [{ day: '2026-11-27', spend: '150.00', revenue: '150.00' }],
}

beforeEach(() => {
  lang.value = 'pt'
  route.meta = {}
  route.query = {}
  company.mockReset().mockResolvedValue(CONTROL)
  client.mockReset().mockResolvedValue(CONTROL)
  options.mockReset().mockResolvedValue({ items: [{ id: 'c1', name: 'Açaí' }] })
})

describe('tela do Controle de custos', () => {
  it('mostra as somas, as pessoas com o dono marcado e as contas sem site sem receita', async () => {
    const view = mount(CostControlView, { attachTo: document.body })
    await flushPromises()
    expect(company).toHaveBeenCalledWith(expect.objectContaining({ currency: 'USD' }))
    const text = view.text().replace(/\s/g, ' ')
    expect(text).toContain('US$ 150,00')
    expect(text).toContain('Fora do ROI, sem site: 1')
    expect(text).toContain('Ana Lima')
    expect(text).toContain('Dono')
    expect(text).toContain('sem site')
    expect(text).toContain('US$ 100,00 de US$ 400,00')
    await view.find('button[aria-pressed]').trigger('click')
    await flushPromises()
    expect(company).toHaveBeenLastCalledWith(expect.objectContaining({ integration: 'facebook' }))
    view.unmount()
  })

  it('no painel interno só carrega depois de escolher o cliente', async () => {
    route.meta = { internal: true }
    const view = mount(CostControlView, { attachTo: document.body })
    await flushPromises()
    expect(client).not.toHaveBeenCalled()
    expect(view.text()).toContain('Escolha um cliente para ver')
    view.unmount()
    route.query = { cliente: 'c1' }
    const chosen = mount(CostControlView, { attachTo: document.body })
    await flushPromises()
    expect(client).toHaveBeenCalledWith(expect.objectContaining({ company_id: 'c1' }))
    chosen.unmount()
  })
})
