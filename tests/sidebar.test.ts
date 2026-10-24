import { beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { defineComponent } from 'vue'
import SidebarNav from '@/components/SidebarNav.vue'
import { useSession } from '@/stores/session'
import type { Me } from '@/lib/types'

const Blank = defineComponent({ template: '<div />' })

function me(active: string, permissions: string[]): Me {
  return {
    user: { id: 'u', email: 'ana@groone.com', name: 'Ana Lima', locale: 'pt' },
    companies: [
      { id: 'g', name: 'Groone', slug: 'groone', accent_color: null, is_owner: false, is_internal: true },
      { id: 'c', name: 'Cliente', slug: 'cliente', accent_color: null, is_owner: true, is_internal: false },
    ],
    active_company_id: active,
    permissions,
    site_scope: 'all',
    is_staff: true,
    mfa_enabled: true,
    mfa_setup_required: false,
  }
}

function router() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: Blank },
      { path: '/equipe', component: Blank },
      { path: '/interno', component: Blank, meta: { internal: true } },
      { path: '/interno/pessoas', component: Blank, meta: { internal: true } },
    ],
  })
}

const labels = (w: ReturnType<typeof mount>) => w.findAll('nav a').map((a) => a.text())

describe('SidebarNav', () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('mostra os mesmos itens em qualquer rota', async () => {
    const session = useSession()
    session.set(me('c', ['*']))
    const r = router()
    await r.push('/')
    const w = mount(SidebarNav, { global: { plugins: [r] } })
    const onClient = labels(w)
    expect(onClient).toContain('Equipe')
    expect(onClient).toContain('Clientes')

    // Entrar no painel interno troca a Empresa ativa para a Groone, mas não o menu.
    session.set(me('g', ['internal.clients.view', 'internal.users.manage', 'internal.staff.manage', 'internal.networks.assign']))
    await r.push('/interno/pessoas')
    await flushPromises()
    expect(labels(w)).toEqual(onClient)
    expect(w.find('[aria-current="page"]').text()).toBe('Pessoas')
  })

  it('segue as permissões da Empresa cliente mesmo com a Groone ativa', async () => {
    const session = useSession()
    session.set(me('c', ['sites.view']))
    session.set(me('g', ['internal.clients.view']))
    const r = router()
    await r.push('/interno')
    const w = mount(SidebarNav, { global: { plugins: [r] } })
    const shown = labels(w)
    expect(shown).toContain('Sites')
    expect(shown).not.toContain('Equipe')
    expect(shown).toContain('Clientes')
    expect(shown).not.toContain('Pessoas')
  })
})
