import { describe, expect, it } from 'vitest'
import { inviteTaken } from '@/modules/team/rules'

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
