import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useSession } from '@/stores/session'
import type { Me } from '@/lib/types'

function me(permissions: string[], accent: string | null = null): Me {
  return {
    user: { id: 'u', email: 'ana@a.com', name: 'Ana Lima', locale: 'pt' },
    companies: [{ id: 'c', name: 'A', slug: 'a', accent_color: accent, is_owner: false, is_internal: false }],
    active_company_id: 'c',
    permissions,
    site_scope: 'assigned',
    is_staff: false,
    mfa_enabled: false,
    mfa_setup_required: false,
  }
}

describe('session.can', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('segue a regra de curinga do avant-core', () => {
    const s = useSession()
    s.set(me(['team.*', 'sites.view']))
    expect(s.can('team.invite')).toBe(true)
    expect(s.can('sites.view')).toBe(true)
    expect(s.can('sites.assign')).toBe(false)
    expect(s.can('teamx.view')).toBe(false)
    s.set(me(['*']))
    expect(s.can('company.edit')).toBe(true)
    s.set(null)
    expect(s.can('sites.view')).toBe(false)
  })

  it('aplica a cor da Empresa ativa', () => {
    const s = useSession()
    s.set(me([], '#11804c'))
    expect(s.company?.name).toBe('A')
    expect(document.getElementById('avant-accent')?.textContent).toContain('--primary:152 76% 28%')
    s.set(me([], null))
    expect(document.getElementById('avant-accent')?.textContent).toBe('')
  })
})
