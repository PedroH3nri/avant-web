import { describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { defineComponent, h } from 'vue'
import AppShell from '@/layouts/AppShell.vue'
import { useSession } from '@/stores/session'
import type { Me } from '@/lib/types'

function me(companyId: string): Me {
  return {
    user: { id: 'u', email: 'ana@a.com', name: 'Ana', locale: 'pt', image_url: null },
    companies: [
      { id: 'c', name: 'A', slug: 'a', is_owner: true, is_internal: false, image_url: null },
      { id: 'd', name: 'B', slug: 'b', is_owner: true, is_internal: false, image_url: null },
    ],
    active_company_id: companyId,
    permissions: ['*'],
    site_scope: 'all',
    is_staff: false,
    mfa_enabled: false,
    mfa_setup_required: false,
    display_currency: 'USD',
    theme: 'system',
    accent: 'default',
  }
}

describe('AppShell', () => {
  it('remonta a tela quando a Empresa ativa muda, para não mostrar dados da Empresa anterior', async () => {
    setActivePinia(createPinia())
    const session = useSession()
    session.set(me('c'))
    let mounts = 0
    const Screen = defineComponent({
      setup() {
        mounts += 1
        return () => h('p', 'tela')
      },
    })
    const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/', component: Screen }] })
    await router.push('/')
    mount(AppShell, {
      global: {
        plugins: [router],
        stubs: { SidebarRail: true, CompanySwitcher: true, LangSwitch: true, Teleport: true },
      },
    })
    await flushPromises()
    expect(mounts).toBe(1)
    session.set(me('d'))
    await flushPromises()
    expect(mounts).toBe(2)
  })
})
