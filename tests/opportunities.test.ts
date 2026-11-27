import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { lang } from '@/lib/i18n'
import type { Opportunity, OpportunityOverview } from '@/modules/internal/opportunities/types'

const overview = vi.hoisted(() => vi.fn())
const dismiss = vi.hoisted(() => vi.fn())
const task = vi.hoisted(() => vi.fn())

vi.mock('@/modules/internal/opportunities/service', () => ({ opportunityService: { overview, dismiss, task } }))
vi.mock('@/stores/session', () => ({ useSession: () => ({ can: () => true }) }))

import OpportunitiesView from '@/modules/internal/opportunities/views/OpportunitiesView.vue'
import { filterOpportunities, howText, managersOf, taskDescription, whyText } from '@/modules/internal/opportunities/rules'

/** Uma oportunidade de reward num site, com o que veio da API. */
function opportunity(patch: Partial<Opportunity> = {}): Opportunity {
  return {
    id: 'o1',
    rule: 'reward',
    subject: '',
    status: 'open',
    site_id: 's1',
    domain: 'receitasdavo.com.br',
    client_id: 'c1',
    client_name: 'Receitas da Vó',
    manager_id: 'm1',
    manager_name: 'João Pedro',
    gain: '820.00',
    groone_gain: '164.00',
    confidence: 'high',
    evidence: { long_share: 62, ecpm: 6.1, sites: 14, category: 'news' },
    opened_at: '2026-11-20T09:00:00Z',
    ...patch,
  }
}

/** A tela com uma oportunidade de reward e uma de ads.txt. */
function screen(): OpportunityOverview {
  const ads = opportunity({ id: 'o2', rule: 'ads_txt', domain: 'technoticias.net', client_name: 'Tech', manager_id: null, manager_name: null, gain: '460.00', groone_gain: '92.00', evidence: { problem: 'ads_txt_no_groone', loss: 10 } })
  return { gain: '1280.00', groone_gain: '256.00', done: 2, done_gain: '140.00', rows: [opportunity(), ads] }
}

/** Monta a tela com um roteador de memória. */
async function mountView() {
  const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/:any(.*)*', component: { template: '<div />' } }] })
  const wrapper = mount(OpportunitiesView, { global: { plugins: [router] }, attachTo: document.body })
  await flushPromises()
  return wrapper
}

describe('regras das oportunidades', () => {
  beforeEach(() => (lang.value = 'pt'))

  it('monta o porquê e a estimativa de cada regra', () => {
    expect(whyText(opportunity())).toBe('62% das sessões leem 3 páginas ou mais e o site não tem reward')
    expect(howText(opportunity())).toContain('14 sites de Notícias')
    const floor = opportunity({ rule: 'country_floor', evidence: { block: 'Content1_Mobile', country: 'US', fill: 41, ecpm: 1 } })
    expect(whyText(floor)).toMatch(/^Fill de 41% em .+ com regra de preço em Content1_Mobile$/)
    const cascade = opportunity({ rule: 'cascade', subject: 'Anchor_Mobile', evidence: { block: 'Anchor_Mobile', lift: 10, measured: 0 } })
    expect(howText(cascade)).toContain('Ainda sem dados do grupo de controle')
    expect(taskDescription(opportunity())).toContain('confiança Alta')
  })

  it('filtra por regra, confiança, gerente e busca', () => {
    const rows = screen().rows
    expect(filterOpportunities(rows, { rule: 'ads_txt', confidence: 'all', manager: 'all', query: '' })).toHaveLength(1)
    expect(filterOpportunities(rows, { rule: 'all', confidence: 'all', manager: 'none', query: '' })[0]?.id).toBe('o2')
    expect(filterOpportunities(rows, { rule: 'all', confidence: 'all', manager: 'all', query: 'receitas' })[0]?.id).toBe('o1')
    expect(managersOf(rows)).toEqual([{ id: 'm1', name: 'João Pedro' }])
  })
})

describe('tela Oportunidades de receita', () => {
  beforeEach(() => {
    lang.value = 'pt'
    overview.mockResolvedValue(screen())
    dismiss.mockResolvedValue(undefined)
    task.mockResolvedValue({ task_id: 't1' })
  })
  afterEach(() => {
    vi.clearAllMocks()
    document.body.innerHTML = ''
  })

  it('mostra os números do topo e as linhas', async () => {
    const wrapper = await mountView()
    expect(wrapper.text()).toContain('Ganho estimado por mês')
    expect(wrapper.text()).toContain('receitasdavo.com.br')
    expect(wrapper.text()).toContain('Linha da Groone faltando no ads.txt')
    wrapper.unmount()
  })

  it('dispensa e cria a tarefa para o gerente', async () => {
    const wrapper = await mountView()
    await wrapper.get('button[aria-label="Dispensar"]').trigger('click')
    await flushPromises()
    expect(dismiss).toHaveBeenCalledWith('o1')
    expect(wrapper.text()).not.toContain('receitasdavo.com.br')
    const details = wrapper.findAll('button').find((button) => button.text() === 'Detalhes')
    await details!.trigger('click')
    await flushPromises()
    const create = [...document.body.querySelectorAll('button')].find((button) => button.textContent?.includes('Criar tarefa'))
    create!.click()
    await flushPromises()
    expect(task).toHaveBeenCalledWith('o2', expect.stringContaining('Linha da Groone'))
    wrapper.unmount()
  })
})
