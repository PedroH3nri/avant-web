/** Regras de tela dos grupos: grupo da pessoa, quem está livre e nome repetido. */
import { describe, expect, it } from 'vitest'
import { freeMembers, groupOf, nameTaken } from '@/modules/groups/rules'
import type { Group } from '@/modules/groups/types'
import type { Member } from '@/modules/team/types'

/** Um grupo com as pessoas dadas pelo id do vínculo. */
const makeGroup = (id: string, name: string, membershipIds: string[]): Group => ({
  id,
  name,
  description: null,
  status: 'active',
  members: membershipIds.map((membershipId) => ({ membership_id: membershipId, added_at: '2026-10-27T00:00:00Z' })),
  created_at: '2026-10-27T00:00:00Z',
  updated_at: '2026-10-27T00:00:00Z',
})

/** Uma pessoa da equipe com o vínculo e a situação dados. */
const makeMember = (id: string, status: Member['status'] = 'active'): Member => ({
  id,
  user: { id: `user-${id}`, name: id, email: `${id}@acai.com`, locale: 'pt', image_url: null },
  role: null,
  status,
  is_owner: false,
  joined_at: '2026-10-01T00:00:00Z',
})

describe('regras dos grupos', () => {
  const groups = [makeGroup('trafego', 'Tráfego pago', ['ana']), makeGroup('conteudo', 'Conteúdo', ['bia'])]

  it('acha o grupo da pessoa', () => {
    expect(groupOf(groups, 'bia')?.id).toBe('conteudo')
    expect(groupOf(groups, 'caio')).toBeUndefined()
  })

  it('lista só quem está sem grupo e não foi removido', () => {
    const members = [makeMember('ana'), makeMember('bia'), makeMember('caio'), makeMember('davi', 'removed')]
    expect(freeMembers(groups, members).map((member) => member.id)).toEqual(['caio'])
  })

  it('acusa nome repetido sem olhar maiúsculas e ignora o próprio grupo', () => {
    expect(nameTaken(groups, ' tráfego PAGO ')).toBe(true)
    expect(nameTaken(groups, 'Tráfego pago', 'trafego')).toBe(false)
    expect(nameTaken(groups, '')).toBe(false)
  })
})
