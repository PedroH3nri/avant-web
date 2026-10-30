import { describe, expect, it } from 'vitest'
import { groupPermissions, inviteTaken, permissionsChanged } from '@/modules/team/rules'

describe('e-mail que já está na equipe ou convidado', () => {
  const page = { members: ['ana@x.com'], invites: ['bia@x.com'] }

  it('acha pela página que está na tela, sem diferenciar maiúsculas', () => {
    expect(inviteTaken(' Ana@X.com ', page, [])).toBe(true)
    expect(inviteTaken('bia@x.com', page, [])).toBe(true)
    expect(inviteTaken('caio@x.com', page, [])).toBe(false)
  })

  it('lembra o e-mail que o servidor recusou, fora da página', () => {
    expect(inviteTaken('Davi@x.com', page, ['davi@x.com'])).toBe(true)
  })
})

describe('permissões do papel', () => {
  const name = { pt: 'x', en: 'x', es: 'x' }
  const catalog = [
    { key: 'team.view', group: 'team', name },
    { key: 'sites.view', group: 'sites', name },
    { key: 'team.manage', group: 'team', name },
  ]

  it('agrupa pelo grupo, na ordem do catálogo', () => {
    expect(groupPermissions(catalog).map(([group, items]) => [group, items.map((item) => item.key)])).toEqual([
      ['team', ['team.view', 'team.manage']],
      ['sites', ['sites.view']],
    ])
  })

  it('diz quando o marcado difere do salvo', () => {
    expect(permissionsChanged(['team.view'], new Set(['team.view']))).toBe(false)
    expect(permissionsChanged(['team.view'], new Set(['sites.view']))).toBe(true)
    expect(permissionsChanged([], new Set(['team.view']))).toBe(true)
  })
})
