import { afterEach, describe, expect, it, vi } from 'vitest'
import { api } from '@/lib/api'
import { accountService } from '@/modules/account/service'
import { groupService } from '@/modules/groups/service'
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
