import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useSession } from '@/stores/session'
import { lang } from '@/lib/i18n'
import { theme } from '@/lib/theme'
import { accountService } from '@/modules/account/service'
import type { AccentId, Me, Theme } from '@/lib/types'

function me(permissions: string[], accent: AccentId = 'default', chosenTheme: Theme = 'system'): Me {
  return {
    user: { id: 'u', email: 'ana@a.com', name: 'Ana Lima', locale: 'pt', image_url: null },
    companies: [{ id: 'c', name: 'A', slug: 'a', is_owner: false, is_internal: false, image_url: null }],
    active_company_id: 'c',
    permissions,
    site_scope: 'assigned',
    is_staff: false,
    mfa_enabled: false,
    mfa_setup_required: false,
    display_currency: 'USD',
    theme: chosenTheme,
    accent,
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

  it('aplica a cor e o tema da pessoa', () => {
    const session = useSession()
    session.set(me([], 'green', 'dark'))
    expect(session.company?.name).toBe('A')
    expect(document.getElementById('avant-accent')?.textContent).toContain('--primary:152 76% 28%')
    expect(theme.value).toBe('dark')
    session.set(me([]))
    expect(document.getElementById('avant-accent')?.textContent).toBe('')
    expect(theme.value).toBe('system')
  })

  afterEach(() => vi.restoreAllMocks())

  it('guarda a aparência na conta e volta atrás se a API recusar', async () => {
    const session = useSession()
    session.set(me([]))
    vi.spyOn(accountService, 'appearance').mockResolvedValueOnce({ theme: 'system', accent: 'blue', locale: 'pt' })
    await session.setAppearance({ accent: 'blue' })
    expect(session.me?.accent).toBe('blue')
    vi.spyOn(accountService, 'appearance').mockResolvedValueOnce({ theme: 'system', accent: 'blue', locale: 'es' })
    await session.setAppearance({ locale: 'es' })
    expect(session.me?.user.locale).toBe('es')
    expect(lang.value).toBe('es')
    vi.spyOn(accountService, 'appearance').mockRejectedValueOnce(new Error('falhou'))
    await expect(session.setAppearance({ theme: 'dark', locale: 'en' })).rejects.toThrow('falhou')
    expect(session.me?.theme).toBe('system')
    expect(theme.value).toBe('system')
    expect(lang.value).toBe('es')
  })
})
