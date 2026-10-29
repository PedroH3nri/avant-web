import { afterEach, describe, expect, it, vi } from 'vitest'
import { api } from '@/lib/api'
import { accountService } from '@/modules/account/service'
import { costService } from '@/modules/costs/service'
import { clientService } from '@/modules/internal/clients/service'
import { contractService } from '@/modules/internal/contracts/service'
import { goalService } from '@/modules/internal/goals/service'
import { peopleService } from '@/modules/internal/people/service'
import { staffService } from '@/modules/internal/staff/service'
import { groupService } from '@/modules/groups/service'
import { networkService } from '@/modules/networks/service'
import { reportService } from '@/modules/reports/service'
import { resultService } from '@/modules/results/service'
import { siteService } from '@/modules/sites/service'
import { teamService } from '@/modules/team/service'

describe('listas da equipe em páginas', () => {
  afterEach(() => vi.restoreAllMocks())

  /** Espiona o api.get e devolve os caminhos e filtros pedidos. */
  function spyGet() {
    return vi.spyOn(api, 'get').mockResolvedValue({ items: [], total: 0, page: 1, pages: 0, page_size: 10 })
  }

  it('pede a página dos convites, papéis, grupos e chaves de API', async () => {
    const get = spyGet()
    await teamService.invitations({ page: 2 })
    await teamService.roles({ page: 3 })
    await groupService.list({ page: 4 })
    await accountService.apiKeys({ page: 5 })
    expect(get.mock.calls.map((call) => [call[0], call[1]])).toEqual([
      ['/invitations', { page: 2 }],
      ['/roles', { page: 3 }],
      ['/groups', { page: 4 }],
      ['/api-keys', { page: 5 }],
    ])
  })

  it('usa as listas inteiras para seletores', async () => {
    const get = spyGet()
    await teamService.roleOptions()
    await groupService.options()
    expect(get.mock.calls.map((call) => call[0])).toEqual(['/roles/options', '/groups/options'])
  })
})

describe('listas do inventário em páginas', () => {
  afterEach(() => vi.restoreAllMocks())

  it('pede a página das networks, execuções, sites e ad units sem site', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ items: [], total: 0, page: 1, pages: 0, page_size: 10 })
    await networkService.list({ page: 2 })
    await networkService.syncRuns('n1', { page: 3 })
    await siteService.list({ page: 4, q: 'blog' })
    await siteService.unlinked({ page: 5 })
    expect(get.mock.calls.map((call) => [call[0], call[1]])).toEqual([
      ['/networks', { page: 2 }],
      ['/networks/n1/sync-runs', { page: 3 }],
      ['/sites', { page: 4, q: 'blog' }],
      ['/ad-units/unlinked', { page: 5 }],
    ])
  })

  it('usa as listas inteiras de networks e sites para seletores', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ items: [] })
    await networkService.options()
    await siteService.options()
    expect(get.mock.calls.map((call) => call[0])).toEqual(['/networks/options', '/sites/options'])
  })
})

describe('custos e relatórios em páginas', () => {
  afterEach(() => vi.restoreAllMocks())

  it('pede a página dos custos e dos relatórios com a aba e a busca', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ items: [], total: 0, page: 1, pages: 0, page_size: 10 })
    await costService.list({ page: 2 })
    await reportService.list({ page: 3, scope: 'mine', q: 'receita' })
    expect(get.mock.calls.map((call) => [call[0], call[1]])).toEqual([
      ['/costs', { page: 2 }],
      ['/reports', { page: 3, scope: 'mine', q: 'receita' }],
    ])
  })
})

describe('clientes do painel interno em páginas', () => {
  afterEach(() => vi.restoreAllMocks())

  it('pede a página dos clientes, equipes, convites de dono e auditoria', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ items: [], total: 0, page: 1, pages: 0, page_size: 10 })
    await clientService.list({ page: 2, status: 'active' })
    await clientService.teams({ page: 3 })
    await clientService.ownerInvitations({ page: 4 })
    await clientService.audit('c1', { page: 5 })
    await clientService.options()
    expect(get.mock.calls.map((call) => [call[0], call[1]])).toEqual([
      ['/internal/clients', { page: 2, status: 'active' }],
      ['/internal/teams', { page: 3 }],
      ['/internal/owner-invitations', { page: 4 }],
      ['/internal/clients/c1/audit', { page: 5 }],
      ['/internal/clients/options', undefined],
    ])
  })
})

describe('listas do painel interno em páginas', () => {
  afterEach(() => vi.restoreAllMocks())

  it('pede a página dos contratos, equipe Groone, pessoas, resultado e modelos de meta', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ items: [], total: 0, page: 1, pages: 0, page_size: 10 })
    await contractService.list({ page: 2, status: 'active' })
    await staffService.list({ page: 3 })
    await peopleService.search('ana', 4)
    await resultService.clients({ start: '2026-10-01', end: '2026-10-01', currency: 'USD', page: 5 })
    await goalService.templatePage({ page: 6 })
    await goalService.templates()
    expect(get.mock.calls.map((call) => [call[0], call[1]])).toEqual([
      ['/internal/contracts', { page: 2, status: 'active' }],
      ['/internal/staff', { page: 3 }],
      ['/internal/users', { q: 'ana', page: 4 }],
      ['/internal/results', { start: '2026-10-01', end: '2026-10-01', currency: 'USD', page: 5 }],
      ['/internal/goal-templates', { page: 6 }],
      ['/internal/goal-templates/options', undefined],
    ])
  })
})
