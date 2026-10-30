import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { ApiError } from '@/lib/api'
import { lang } from '@/lib/i18n'
import type { ClientDetail } from '@/modules/internal/clients/types'
import type { PersonMonth } from '@/modules/internal/commissions/types'
import type { Member } from '@/modules/team/types'

const perms = vi.hoisted(() => ({ value: new Set<string>() }))
const staffOptions = vi.hoisted(() => vi.fn())
const managerWindows = vi.hoisted(() => vi.fn())
const team = vi.hoisted(() => vi.fn())
const issue = vi.hoisted(() => vi.fn())
const toastError = vi.hoisted(() => vi.fn())
const settings = vi.hoisted(() => vi.fn())

vi.mock('@/stores/session', () => ({ useSession: () => ({ can: (wanted: string) => perms.value.has(wanted), me: null }) }))
vi.mock('@/modules/internal/staff/service', () => ({ staffService: { options: staffOptions } }))
vi.mock('@/modules/internal/clients/service', () => ({ clientService: { managerWindows, update: vi.fn() } }))
vi.mock('@/modules/internal/commissions/service', () => ({ commissionService: { team, issue, settings, person: vi.fn() } }))
vi.mock('vue-sonner', () => ({ toast: Object.assign(vi.fn(), { error: toastError, success: vi.fn() }) }))

import AccountManagerCard from '@/modules/internal/commissions/components/AccountManagerCard.vue'
import TeamCommissionsView from '@/modules/internal/commissions/views/TeamCommissionsView.vue'

beforeEach(() => {
  lang.value = 'pt'
})

const member = (id: string, name: string, role: string): Member => ({
  id: `m-${id}`,
  user: { id, name, email: `${id}@groone.com`, locale: 'pt', image_url: null },
  role: { id: role, key: role, name: { pt: role } },
  status: 'active',
  is_owner: false,
  joined_at: '2026-01-01T00:00:00Z',
})

const client = {
  id: 'c1',
  name: 'Alfa',
  profile: { account_manager_id: 'ana' },
} as unknown as ClientDetail

describe('card do responsável Groone', () => {
  beforeEach(() => {
    staffOptions.mockResolvedValue({ items: [member('ana', 'Ana', 'r1'), member('bia', 'Bia', 'r1'), member('caio', 'Caio', 'r2')] })
    managerWindows.mockResolvedValue({ role_ids: ['r1'] })
  })
  afterEach(() => {
    document.body.innerHTML = ''
    vi.clearAllMocks()
  })

  it('avisa pelo papel dos prazos abertos se eles continuam ou param', async () => {
    perms.value = new Set(['internal.clients.manage', 'internal.commissions.manage'])
    const card = mount(AccountManagerCard, { props: { client }, attachTo: document.body })
    await flushPromises()
    await card.get('button').trigger('click')
    await flushPromises()
    const select = document.querySelector<HTMLSelectElement>('#account-manager')!
    select.value = 'caio'
    select.dispatchEvent(new Event('change'))
    await flushPromises()
    expect(document.body.textContent).toContain('param hoje')
    select.value = 'bia'
    select.dispatchEvent(new Event('change'))
    await flushPromises()
    expect(document.body.textContent).toContain('continuam com essa pessoa')
  })

  it('sem a resposta dos prazos, não afirma que nada muda', async () => {
    perms.value = new Set(['internal.clients.manage', 'internal.commissions.manage'])
    managerWindows.mockRejectedValueOnce(new Error('fora do ar'))
    const card = mount(AccountManagerCard, { props: { client }, attachTo: document.body })
    await flushPromises()
    await card.get('button').trigger('click')
    await flushPromises()
    const select = document.querySelector<HTMLSelectElement>('#account-manager')!
    select.value = 'caio'
    select.dispatchEvent(new Event('change'))
    await flushPromises()
    expect(document.body.textContent).not.toContain('não muda comissão')
  })

  it('sem administrar a comissão, não troca um responsável que já existe', async () => {
    perms.value = new Set(['internal.clients.manage'])
    const card = mount(AccountManagerCard, { props: { client } })
    await flushPromises()
    expect(card.text()).toContain('Ana')
    expect(card.findAll('button')).toHaveLength(0)
  })
})

describe('emitir todas', () => {
  const person = (id: string, name: string): PersonMonth => ({
    user: { id, name, email: `${id}@groone.com`, locale: 'pt', image_url: null },
    role_name: 'Externo',
    month: { month: '2026-09-01', base: '0', commission: '10.00', deduction: '0', adjustments: '0', total: '10.00', status: 'validated' },
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.clearAllMocks()
  })

  it('segue quando uma falha e diz quem ficou e por quê', async () => {
    perms.value = new Set(['internal.commissions.view'])
    perms.value.add('internal.commissions.manage')
    settings.mockResolvedValue({ starts_on: '2026-09-01' })
    team.mockResolvedValue({ items: [person('ana', 'Ana'), person('bia', 'Bia')] })
    issue.mockResolvedValueOnce({ days: 3 }).mockRejectedValueOnce(new ApiError(422, 'invalid_input', 'o mês dessa pessoa ainda não fechou'))
    const view = mount(TeamCommissionsView, { attachTo: document.body })
    await flushPromises()
    const issueAll = view.findAll('button').find((button) => button.text().includes('Marcar todas como emitidas'))!
    await issueAll.trigger('click')
    await flushPromises()
    expect(issue).toHaveBeenCalledTimes(2)
    const [message] = toastError.mock.calls[0] as [string]
    expect(message).toContain('1 emitidos')
    expect(message).toContain('Bia')
  })
})
