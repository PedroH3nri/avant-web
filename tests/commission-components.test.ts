import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import type { ClientDetail } from '@/modules/internal/clients/types'
import type { PersonMonth } from '@/modules/internal/commissions/types'
import type { Member } from '@/modules/team/types'

const perms = vi.hoisted(() => ({ value: new Set<string>() }))
const staffOptions = vi.hoisted(() => vi.fn())
const managerChange = vi.hoisted(() => vi.fn())
const team = vi.hoisted(() => vi.fn())
const toastError = vi.hoisted(() => vi.fn())
const settings = vi.hoisted(() => vi.fn())

vi.mock('@/stores/session', () => ({ useSession: () => ({ can: (wanted: string) => perms.value.has(wanted), me: null }) }))
vi.mock('@/modules/internal/staff/service', () => ({ staffService: { options: staffOptions } }))
vi.mock('@/modules/internal/clients/service', () => ({ clientService: { managerChange, update: vi.fn() } }))
vi.mock('@/modules/internal/commissions/service', () => ({ commissionService: { team, settings, person: vi.fn() } }))
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
    managerChange.mockImplementation(async (_company: string, userId: string) =>
      userId === 'bia' ? { continues: 1, stops: 0, arrives: 0 } : { continues: 0, stops: 1, arrives: 2 },
    )
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
    expect(document.body.textContent).toContain('1 prazo aberto para hoje')
    expect(document.body.textContent).toContain('2 prazos sem responsável passam para Caio')
    select.value = 'bia'
    select.dispatchEvent(new Event('change'))
    await flushPromises()
    expect(document.body.textContent).toContain('continua com Bia')
  })

  it('com prazos que seguem e outros que param, não se contradiz', async () => {
    perms.value = new Set(['internal.clients.manage', 'internal.commissions.manage'])
    managerChange.mockResolvedValue({ continues: 1, stops: 2, arrives: 0 })
    const card = mount(AccountManagerCard, { props: { client }, attachTo: document.body })
    await flushPromises()
    await card.get('button').trigger('click')
    await flushPromises()
    const select = document.querySelector<HTMLSelectElement>('#account-manager')!
    select.value = 'bia'
    select.dispatchEvent(new Event('change'))
    await flushPromises()
    const text = document.body.textContent ?? ''
    expect(text).toContain('1 prazo aberto continua com Bia')
    expect(text).toContain('2 prazos abertos param hoje')
    expect(text).not.toContain('mesmo papel')
    expect(text.match(/já foi gerado/g)).toHaveLength(1)
  })

  it('sem a resposta dos prazos, não afirma que nada muda', async () => {
    perms.value = new Set(['internal.clients.manage', 'internal.commissions.manage'])
    managerChange.mockRejectedValue(new Error('fora do ar'))
    const card = mount(AccountManagerCard, { props: { client }, attachTo: document.body })
    await flushPromises()
    await card.get('button').trigger('click')
    await flushPromises()
    const select = document.querySelector<HTMLSelectElement>('#account-manager')!
    select.value = 'caio'
    select.dispatchEvent(new Event('change'))
    await flushPromises()
    expect(document.querySelector('#account-manager')).not.toBeNull()
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

describe('comissões da equipe', () => {
  const person = (id: string, name: string): PersonMonth => ({
    user: { id, name, email: `${id}@groone.com`, locale: 'pt', image_url: null },
    role_name: 'Externo',
    month: { month: '2026-09-01', base: '0', commission: '10.00', deduction: '0', adjustments: '0', total: '10.00', status: 'validated' },
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.clearAllMocks()
  })

  it('não emite mais pela tela: a emissão vem da invoice de cada pessoa', async () => {
    perms.value = new Set(['internal.commissions.view', 'internal.commissions.manage'])
    settings.mockResolvedValue({ starts_on: '2026-09-01' })
    team.mockResolvedValue({ items: [person('ana', 'Ana'), person('bia', 'Bia')] })
    const view = mount(TeamCommissionsView, { attachTo: document.body })
    await flushPromises()
    expect(view.text()).toContain('Ana')
    expect(view.findAll('button').some((button) => button.text().includes('emitidas'))).toBe(false)
  })
})
