import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { ApiError } from '@/lib/api'
import { lang } from '@/lib/i18n'
import { cardFacts, filterFailures, isRunning, lifecycleLabel, runSummary } from '@/modules/internal/hubspot/rules'
import type { HubspotCard, HubspotFailure, HubspotRun } from '@/modules/internal/hubspot/types'

const client = vi.hoisted(() => vi.fn())
const network = vi.hoisted(() => vi.fn())
const site = vi.hoisted(() => vi.fn())
vi.mock('@/modules/internal/hubspot/service', () => ({ hubspotService: { client, network, site } }))

import HubspotClientCard from '@/modules/internal/hubspot/components/HubspotClientCard.vue'
import HubspotNetworkCards from '@/modules/internal/hubspot/components/HubspotNetworkCards.vue'
import HubspotSiteCard from '@/modules/internal/hubspot/components/HubspotSiteCard.vue'

/** Um card de contato já no HubSpot, com dono, fase e duas atividades. */
function contactCard(): HubspotCard {
  return {
    kind: 'contact',
    hubspot_id: '501',
    url: 'https://app.hubspot.com/contacts/52168044/record/0-1/501',
    owner: 'Marina Souza',
    stage: 'customer',
    facts: { created_at: '2026-10-24T14:05:00+00:00' },
    activities: [
      { kind: 'note', title: 'Pediu ajuda com o loader', happened_at: '2026-11-24T10:00:00+00:00' },
      { kind: 'call', title: 'Onboarding', happened_at: '2026-11-20T15:00:00+00:00' },
    ],
  }
}

/** Uma sincronia com o estado e os números dados. */
function run(state: HubspotRun['state'], changed = 0, failed = 0): HubspotRun {
  return { id: 'r1', state, requested_at: '2026-11-25T10:00:00+00:00', started_at: null, finished_at: '2026-11-25T10:01:00+00:00', changed, failed, error: state === 'failed' ? 'token recusado' : null }
}

beforeEach(() => {
  lang.value = 'pt'
  client.mockReset()
  network.mockReset()
  site.mockReset()
})

describe('regras do HubSpot', () => {
  /** A fase vem em código e a tela traduz; fase criada no portal aparece como veio. */
  it('traduz a fase do ciclo de vida', () => {
    expect(lifecycleLabel('salesqualifiedlead')).toBe('Pronto para vendas')
    lang.value = 'en'
    expect(lifecycleLabel('customer')).toBe('Customer')
    expect(lifecycleLabel('1462405946')).toBe('1462405946')
    expect(lifecycleLabel(null)).toBeNull()
  })

  /** Os fatos saem na ordem da tela, com o revshare em porcentagem e sem os que faltam. */
  it('formata os fatos do card', () => {
    const facts = cardFacts({ revshare: '15', deals: '1200', created_at: '2026-10-24T14:05:00+00:00' })
    expect(facts.map((fact) => fact.code)).toEqual(['created_at', 'deals', 'revshare'])
    expect(facts[1]?.value).toBe('1.200')
    expect(facts[2]?.value).toBe('15%')
    expect(facts[0]?.label).toBe('Criado no HubSpot')
  })

  /** A situação do site no HubSpot vem em código e sai traduzida, antes dos outros fatos. */
  it('traduz a situação do site', () => {
    const facts = cardFacts({ created_at: '2026-10-24T14:05:00+00:00', status: 'banned' })
    expect(facts.map((fact) => fact.code)).toEqual(['status', 'created_at'])
    expect(facts[0]?.value).toBe('Recusado')
    lang.value = 'es'
    expect(cardFacts({ status: 'pending' })[0]?.value).toBe('Pendiente')
  })

  /** O filtro de objeto e a busca, no registro ou na mensagem, sem diferença de maiúsculas. */
  it('filtra os registros com erro', () => {
    const failures: HubspotFailure[] = [
      { kind: 'contact', avant_id: 'a', label: 'ana@blog.com', error: 'Telefone inválido', failed_at: null, hubspot_id: null },
      { kind: 'deal', avant_id: 'b', label: 'Blog - 24/10/2026', error: 'Fase não existe', failed_at: null, hubspot_id: '9' },
    ]
    expect(filterFailures(failures, 'all', '').length).toBe(2)
    expect(filterFailures(failures, 'deal', '').map((failure) => failure.avant_id)).toEqual(['b'])
    expect(filterFailures(failures, 'all', 'TELEFONE').map((failure) => failure.avant_id)).toEqual(['a'])
    expect(filterFailures(failures, 'contact', 'fase')).toEqual([])
  })

  /** A tela acompanha enquanto a sincronia está na fila ou rodando e resume a última. */
  it('resume a sincronia', () => {
    expect(isRunning(run('pending'))).toBe(true)
    expect(isRunning(run('running'))).toBe(true)
    expect(isRunning(run('done'))).toBe(false)
    expect(isRunning(null)).toBe(false)
    expect(runSummary(null)).toContain('Nenhuma sincronia')
    expect(runSummary(run('done', 14, 2))).toContain('14 mudaram, 2 com erro')
    expect(runSummary(run('failed'))).toContain('token recusado')
  })
})

describe('cards do HubSpot', () => {
  /** O contato mostra dono, fase traduzida, as atividades e o link para o registro. */
  it('mostra o contato do cliente', async () => {
    client.mockResolvedValue({ configured: true, contact: contactCard() })
    const card = mount(HubspotClientCard, { props: { clientId: 'c1' } })
    await flushPromises()
    expect(client).toHaveBeenCalledWith('c1')
    expect(card.text()).toContain('HubSpot · Contatos')
    expect(card.text()).toContain('Marina Souza')
    expect(card.text()).toContain('Cliente')
    expect(card.text()).toContain('Pediu ajuda com o loader')
    expect(card.find('a').attributes('href')).toContain('/record/0-1/501')
    await card.findAll('[role="tab"]')[2]?.trigger('click')
    expect(card.text()).not.toContain('Pediu ajuda com o loader')
    expect(card.text()).toContain('Onboarding')
  })

  /** Sem o token no ambiente, diz que está desligado e não mostra link. */
  it('avisa quando o HubSpot está desligado', async () => {
    client.mockResolvedValue({ configured: false, contact: { ...contactCard(), hubspot_id: null, url: null, activities: [] } })
    const card = mount(HubspotClientCard, { props: { clientId: 'c1' } })
    await flushPromises()
    expect(card.text()).toContain('desligado neste ambiente')
    expect(card.find('a').exists()).toBe(false)
  })

  /** A network tem a empresa e o negócio em cards separados; sem contrato, só a empresa. */
  it('separa a empresa e o negócio da network', async () => {
    const company: HubspotCard = { ...contactCard(), kind: 'company', stage: null, facts: { deals: '1' }, activities: [] }
    const deal: HubspotCard = { ...contactCard(), kind: 'deal', stage: 'Ativo', facts: { revshare: '15' }, activities: [] }
    network.mockResolvedValue({ configured: true, company, deal })
    const cards = mount(HubspotNetworkCards, { props: { networkId: 'n1' } })
    await flushPromises()
    expect(cards.findAll('section').length).toBe(2)
    expect(cards.text()).toContain('HubSpot · Negócios')
    expect(cards.text()).toContain('15%')
    network.mockResolvedValue({ configured: true, company, deal: null })
    await cards.setProps({ networkId: 'n2' })
    await flushPromises()
    expect(cards.findAll('section').length).toBe(1)
  })

  /** O site mostra o objeto personalizado com a situação traduzida. */
  it('mostra o site no HubSpot', async () => {
    site.mockResolvedValue({ configured: true, site: { ...contactCard(), kind: 'site', stage: null, facts: { status: 'pending' }, activities: [] } })
    const card = mount(HubspotSiteCard, { props: { siteId: 's1' } })
    await flushPromises()
    expect(site).toHaveBeenCalledWith('s1')
    expect(card.text()).toContain('HubSpot · Sites')
    expect(card.text()).toContain('Pendente')
  })

  /** Um erro do HubSpot fica no card, sem derrubar a tela. */
  it('mostra o erro do HubSpot no card', async () => {
    client.mockRejectedValue(new ApiError(503, 'hubspot_unavailable', 'x'))
    const card = mount(HubspotClientCard, { props: { clientId: 'c1' } })
    await flushPromises()
    expect(card.text()).toContain('O HubSpot não respondeu')
  })
})
