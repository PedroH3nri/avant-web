import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import type { GamToolNetwork, GamToolNetworkDetail, GamToolRun } from '@/modules/internal/gam_tools/types'

const networks = vi.hoisted(() => vi.fn())
const network = vi.hoisted(() => vi.fn())
const runs = vi.hoisted(() => vi.fn())
const route = vi.hoisted(() => ({ query: {} as Record<string, string> }))

vi.mock('@/stores/session', () => ({ useSession: () => ({ can: () => true }) }))
vi.mock('@/lib/events', () => ({ onEvent: vi.fn() }))
vi.mock('vue-router', () => ({ useRoute: () => route, useRouter: () => ({ replace: vi.fn(), push: vi.fn() }), RouterLink: { template: '<a><slot /></a>' } }))
vi.mock('@/modules/internal/gam_tools/service', () => ({ gamToolService: { networks, network, runs, start: vi.fn(), adsTxt: vi.fn(), install: vi.fn() } }))
vi.mock('vue-sonner', () => ({ toast: Object.assign(vi.fn(), { error: vi.fn(), success: vi.fn() }) }))

import GamToolsView from '@/modules/internal/gam_tools/views/GamToolsView.vue'

const option: GamToolNetwork = { id: 'n1', network_code: '4242', display_name: 'Rede Açaí', delegation: 'manage_account', status: 'connected', seller_id: 'pub-1', client: { id: 'c1', name: 'Açaí' } }
const detail = { ...option, sites: [] } as unknown as GamToolNetworkDetail
const run = {
  id: 'r1',
  network_id: 'n1',
  kind: 'sync',
  format: null,
  domains: [],
  state: 'done',
  error_code: null,
  requested_by: { id: 'u1', name: 'Ana' },
  network: { id: 'n1', network_code: '4242', display_name: 'Rede Açaí', client_name: 'Açaí' },
  created_at: '2026-11-03T12:00:00Z',
  updated_at: null,
  finished_at: null,
  steps: [],
} as GamToolRun
const page = (items: GamToolRun[]) => ({ items, total: items.length, page: 1, pages: 1, page_size: 10 })

beforeEach(() => {
  lang.value = 'pt'
  route.query = {}
  networks.mockResolvedValue({ items: [option], total: 1, page: 1, pages: 1, page_size: 10 })
  network.mockResolvedValue(detail)
  runs.mockResolvedValue(page([run]))
})
afterEach(() => {
  document.body.innerHTML = ''
  vi.clearAllMocks()
})

describe('tela das ferramentas do GAM', () => {
  it('sem network, mostra as ações desativadas e as execuções de todas', async () => {
    const view = mount(GamToolsView, { attachTo: document.body })
    await flushPromises()
    const cards = view.findAll('button').filter((button) => button.text().includes('Sincronizar'))
    expect(cards).toHaveLength(1)
    expect(cards[0]!.attributes('disabled')).toBeDefined()
    expect(runs).toHaveBeenCalledWith(undefined, 1)
    expect(view.text()).toContain('Açaí')
    expect(view.text()).toContain('Rede Açaí')
    expect((view.find('select').element as HTMLSelectElement).value).toBe('')
    expect(view.text()).toContain('Execuções de todas as networks')
  })

  it('ao escolher a network, ativa as ações e filtra as execuções', async () => {
    const view = mount(GamToolsView, { attachTo: document.body })
    await flushPromises()
    await view.find('select').setValue('n1')
    await flushPromises()
    const sync = view.findAll('button').find((button) => button.text().includes('Sincronizar'))!
    expect(sync.attributes('disabled')).toBeUndefined()
    expect(runs).toHaveBeenLastCalledWith('n1', 1)
  })
})
