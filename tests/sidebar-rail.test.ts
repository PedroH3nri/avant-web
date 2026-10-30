import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import { defineComponent } from 'vue'
import SidebarRail from '@/components/SidebarRail.vue'
import { useSession } from '@/stores/session'
import type { Me } from '@/lib/types'

const Blank = defineComponent({ template: '<div />' })

/** A sessão de teste com a Empresa ativa e as permissões. */
function me(active: string, permissions: string[]): Me {
  return {
    user: { id: 'u', email: 'ana@groone.com', name: 'Ana Lima', locale: 'pt', image_url: null },
    companies: [
      { id: 'g', name: 'Groone', slug: 'groone', is_owner: false, is_internal: true, image_url: null },
      { id: 'c', name: 'Cliente', slug: 'cliente', is_owner: true, is_internal: false, image_url: null },
    ],
    active_company_id: active,
    permissions,
    site_scope: 'all',
    is_staff: true,
    mfa_enabled: true,
    mfa_setup_required: false,
    display_currency: 'USD',
    theme: 'system',
    accent: 'default',
  }
}

/** Router de teste com as rotas que o menu usa. */
function router() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: Blank },
      { path: '/equipe', component: Blank },
      { path: '/papeis', component: Blank },
      { path: '/relatorios', component: Blank },
      { path: '/relatorios/:id', component: Blank },
      { path: '/interno', component: Blank, meta: { internal: true } },
      { path: '/interno/pessoas', component: Blank, meta: { internal: true } },
      { path: '/interno/clientes/:id', component: Blank, meta: { internal: true } },
      { path: '/interno/contratos', component: Blank, meta: { internal: true } },
      { path: '/interno/papeis', component: Blank, meta: { internal: true } },
      { path: '/interno/equipe', component: Blank, meta: { internal: true } },
      { path: '/interno/metas', component: Blank, meta: { internal: true } },
    ],
  })
}


/** Os rótulos dos grupos no trilho. */
const railLabels = (wrapper: ReturnType<typeof mount>) => wrapper.findAll('nav[aria-label="Menu principal"] > *').map((entry) => entry.text())
/** Os rótulos dos itens no painel. */
const panelLabels = (wrapper: ReturnType<typeof mount>) => wrapper.findAll('#rail-panel a').map((link) => link.text())

/** Passa o mouse no grupo e espera a troca do painel. */
async function hoverAndWait(entry: { trigger: (event: string) => Promise<void> }) {
  await entry.trigger('mouseenter')
  vi.advanceTimersByTime(300)
  await flushPromises()
}

describe('SidebarRail', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
  })
  afterEach(() => vi.useRealTimers())

  it('mostra um ícone por grupo e acende o grupo da tela', async () => {
    const session = useSession()
    session.set(me('g', ['*']))
    const testRouter = router()
    await testRouter.push('/interno/contratos')
    const wrapper = mount(SidebarRail, { global: { plugins: [testRouter] } })
    expect(railLabels(wrapper)).toEqual(['Dashboard', 'Clientes', 'Relatórios', 'Empresa'])
    expect(wrapper.find('nav [aria-current]').text()).toBe('Clientes')
    expect(wrapper.find('#rail-panel').attributes('aria-hidden')).toBe('true')
  })

  it('abre o painel do grupo ao passar o mouse, com os mesmos itens da lista', async () => {
    const session = useSession()
    session.set(me('g', ['*']))
    const testRouter = router()
    await testRouter.push('/interno')
    const wrapper = mount(SidebarRail, { global: { plugins: [testRouter] } })
    const [, clients, reports] = wrapper.findAll('nav[aria-label="Menu principal"] > *')
    await hoverAndWait(clients!)
    expect(wrapper.find('#rail-panel').attributes('aria-hidden')).toBe('false')
    expect(panelLabels(wrapper)).toEqual(['Clientes', 'Equipes', 'Networks do GAM', 'Contratos', 'Sites'])
    expect(wrapper.find('#rail-panel [aria-current="page"]').text()).toBe('Clientes')
    await hoverAndWait(reports!)
    expect(panelLabels(wrapper)).toEqual(['Ad Manager', 'Page Views', 'Relatórios', 'Resultado', 'Resultado dos clientes', 'Metas', 'Minha comissão', 'Comissões'])
  })

  it('fecha o painel ao abrir uma tela e não abre painel para o Dashboard', async () => {
    const session = useSession()
    session.set(me('g', ['*']))
    const testRouter = router()
    await testRouter.push('/interno')
    const wrapper = mount(SidebarRail, { global: { plugins: [testRouter] } })
    const [dashboard, clients] = wrapper.findAll('nav[aria-label="Menu principal"] > *')
    await hoverAndWait(clients!)
    await wrapper.findAll('#rail-panel a').find((link) => link.text() === 'Contratos')!.trigger('click')
    await flushPromises()
    expect(testRouter.currentRoute.value.path).toBe('/interno/contratos')
    expect(wrapper.find('#rail-panel').attributes('aria-hidden')).toBe('true')
    await hoverAndWait(dashboard!)
    expect(wrapper.find('#rail-panel').attributes('aria-hidden')).toBe('true')
  })

  it('clicar no grupo abre o primeiro item dele', async () => {
    const session = useSession()
    session.set(me('g', ['*']))
    const testRouter = router()
    await testRouter.push('/')
    const wrapper = mount(SidebarRail, { global: { plugins: [testRouter] } })
    const company = wrapper.findAll('nav[aria-label="Menu principal"] > *')[3]!
    await company.trigger('click')
    await flushPromises()
    expect(testRouter.currentRoute.value.path).toBe('/interno/equipe')
  })

  it('passar o mouse rápido por outro grupo não troca os itens do painel', async () => {
    const session = useSession()
    session.set(me('g', ['*']))
    const testRouter = router()
    await testRouter.push('/interno')
    const wrapper = mount(SidebarRail, { global: { plugins: [testRouter] } })
    const [, clients, reports] = wrapper.findAll('nav[aria-label="Menu principal"] > *')
    await clients!.trigger('mouseenter')
    expect(wrapper.find('#rail-panel').attributes('aria-hidden')).toBe('true')
    await hoverAndWait(clients!)
    await reports!.trigger('mouseenter')
    vi.advanceTimersByTime(100)
    await clients!.trigger('mouseenter')
    vi.advanceTimersByTime(300)
    await flushPromises()
    expect(panelLabels(wrapper)[0]).toBe('Clientes')
  })

  it('no toque, tocar no grupo abre o painel em vez de ir para o primeiro item', async () => {
    const session = useSession()
    session.set(me('g', ['*']))
    const testRouter = router()
    await testRouter.push('/')
    const wrapper = mount(SidebarRail, { global: { plugins: [testRouter] } })
    const clients = wrapper.findAll('nav[aria-label="Menu principal"] > *')[1]!
    await wrapper.find('div').trigger('pointerdown', { pointerType: 'touch' })
    await clients.trigger('click')
    await flushPromises()
    expect(testRouter.currentRoute.value.path).toBe('/')
    expect(wrapper.find('#rail-panel').attributes('aria-hidden')).toBe('false')
    expect(panelLabels(wrapper)[0]).toBe('Clientes')
  })

  it('na gaveta do celular, o painel fica ao lado do trilho e o toque no grupo troca os itens', async () => {
    const session = useSession()
    session.set(me('g', ['*']))
    const testRouter = router()
    await testRouter.push('/interno/contratos')
    const wrapper = mount(SidebarRail, { props: { drawer: true }, global: { plugins: [testRouter] } })
    const drawerPanel = () => wrapper.findAll('#rail-panel-drawer a').map((link) => link.text())
    expect(wrapper.find('#rail-panel-drawer').attributes('aria-hidden')).toBe('false')
    expect(drawerPanel()[0]).toBe('Clientes')
    await wrapper.findAll('nav[aria-label="Menu principal"] > *')[2]!.trigger('click')
    expect(testRouter.currentRoute.value.path).toBe('/interno/contratos')
    expect(drawerPanel()[0]).toBe('Ad Manager')
    await wrapper.findAll('#rail-panel-drawer a').find((link) => link.text() === 'Metas')!.trigger('click')
    await flushPromises()
    expect(testRouter.currentRoute.value.path).toBe('/interno/metas')
    expect(wrapper.emitted('navigate')).toBeTruthy()
  })
})
