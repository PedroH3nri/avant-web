import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import type { CascadeHour, PriceRule, PriceRuleDetails, PriceRuleSite } from '@/modules/price_rules/types'

const service = vi.hoisted(() => ({
  settings: vi.fn(),
  saveSettings: vi.fn(),
  saveBlocks: vi.fn(),
  rules: vi.fn(),
  rule: vi.fn(),
  history: vi.fn(),
  hours: vi.fn(),
  cascadeHours: vi.fn(),
  saveConfig: vi.fn(),
  setStatus: vi.fn(),
  setFloor: vi.fn(),
  sites: vi.fn(),
}))
const route = vi.hoisted(() => ({ params: { siteId: 's1', ruleId: 'r1' } as Record<string, string>, meta: {} as Record<string, unknown> }))

vi.mock('@/stores/session', () => ({ useSession: () => ({ can: () => true }) }))
vi.mock('vue-router', () => ({ useRoute: () => route, useRouter: () => ({ replace: vi.fn(), push: vi.fn() }), RouterLink: { template: '<a><slot /></a>' } }))
vi.mock('@/modules/price_rules/service', () => ({ priceRuleService: () => service }))
vi.mock('@/modules/reports/service', () => ({ reportService: { query: vi.fn().mockRejectedValue(new Error('sem acesso')) } }))
vi.mock('vue-sonner', () => ({ toast: Object.assign(vi.fn(), { error: vi.fn(), success: vi.fn() }) }))

import CascadeRuleView from '@/modules/price_rules/views/CascadeRuleView.vue'
import PriceRuleSiteView from '@/modules/price_rules/views/PriceRuleSiteView.vue'

const TIERS = [1_010_000, 1_050_000, 1_090_000, 1_130_000, 1_170_000, 1_220_000, 1_260_000]

const site: PriceRuleSite = {
  site_id: 's1',
  domain: 'acai.com.br',
  active: true,
  control_percent: 10,
  currency: 'BRL',
  currency_supported: true,
  blocks: [
    { block: 'Anchor_Mobile', model: 'cascade' },
    { block: 'Content1_Mobile', model: 'automatic' },
  ],
  available_blocks: ['Anchor_Mobile', 'Content1_Mobile', 'Fixed_Desktop', 'Offerwall'],
  updated_at: '2026-11-10T12:00:00Z',
}

const cascadeRule: PriceRule = {
  id: 'r1',
  site_id: 's1',
  content_hash: '',
  block: 'Anchor_Mobile',
  kind: 'anchor',
  model: 'cascade',
  country_code: 'BR',
  currency: 'BRL',
  floor_micros: 1_220_000,
  status: 'active',
  created_at: '2026-11-01T00:00:00Z',
  updated_at: '2026-11-10T12:00:00Z',
}

const details: PriceRuleDetails = {
  ...cascadeRule,
  tiers_micros: TIERS,
  config: {
    pmr_floor: 60,
    pmr_emergency: 0,
    min_eligible_requests: 200,
    floor_min_micros: 1_010_000,
    floor_max_micros: 1_260_000,
    step_size: 1,
    drop_tiers: 2,
    automatic: true,
    updated_at: '2026-11-10T12:00:00Z',
  },
}

/** Uma hora da Cascata: a 1ª com 100 pedidos e 40 compras, as outras com o que sobrou. */
function cascadeHour(date: string, at: number): CascadeHour {
  return {
    date,
    hour: at,
    floor_micros: 1_220_000,
    tries: [
      { eligible_requests: 100, responses_served: 40, impressions: 40, revenue_micros: 60_000 },
      { eligible_requests: 60, responses_served: 20, impressions: 20, revenue_micros: 25_000 },
      { eligible_requests: 40, responses_served: 10, impressions: 10, revenue_micros: 10_000 },
      { eligible_requests: 30, responses_served: 20, impressions: 20, revenue_micros: 5_000 },
    ],
  }
}

/** O texto do elemento com espaços comuns no lugar do espaço fixo do Intl. */
const plain = (element: { text: () => string }) => element.text().replace(/\u00a0/g, ' ')

/** Uma página da API com os itens dados. */
const page = <Item>(items: Item[]) => ({ items, total: items.length, page: 1, pages: 1, page_size: 10 })

beforeEach(() => {
  lang.value = 'pt'
  route.meta = {}
  service.settings.mockResolvedValue(site)
  service.rules.mockImplementation((_siteId: string, query: { model?: string }) => Promise.resolve(page(query.model === 'cascade' ? [cascadeRule] : [])))
  service.rule.mockResolvedValue(details)
  service.history.mockResolvedValue([
    { date: '2026-11-10', hour: 14, action: 'up', reason: 'fills_first', floor_before_micros: 1_170_000, floor_applied_micros: 1_220_000, created_at: '2026-11-10T17:58:00Z' },
  ])
  service.cascadeHours.mockResolvedValue([cascadeHour('2026-11-10', 14), cascadeHour('2026-11-10', 13)])
  service.saveConfig.mockResolvedValue(details)
})
afterEach(() => {
  document.body.innerHTML = ''
  vi.clearAllMocks()
})

describe('tela do site com a Cascata', () => {
  it('todo bloco menos o offerwall oferece Automática, Cascata e Sem regra, com a recomendada marcada', async () => {
    const view = mount(PriceRuleSiteView, { attachTo: document.body })
    await flushPromises()
    /** Os rótulos das opções do bloco. */
    const optionsOf = (block: string) =>
      view
        .find(`[aria-label="Modelo de ${block}"]`)
        .findAll('[role="radio"]')
        .map((option) => option.text())
    expect(optionsOf('Anchor_Mobile')).toEqual(['Automática', 'Cascata recomendada', 'Sem regra'])
    expect(optionsOf('Fixed_Desktop')).toEqual(['Automática', 'Cascata recomendada', 'Sem regra'])
    expect(optionsOf('Content1_Mobile')).toEqual(['Automática recomendada', 'Cascata', 'Sem regra'])
    expect(view.find('[aria-label="Modelo de Offerwall"]').exists()).toBe(false)
    expect(view.text()).toContain('Do Google, sem floor')
    expect(view.text()).toContain('1 com a Automática · 1 com a Cascata')
    expect(view.text()).toContain('No conteúdo, no intersticial e no reward, as tentativas começam depois do teste em página real.')
  })

  it('usa o recomendado da api e, sem ele, o do tipo do bloco', async () => {
    service.settings.mockResolvedValue({ ...site, recommended_models: { Content1_Mobile: 'cascade' } })
    const view = mount(PriceRuleSiteView, { attachTo: document.body })
    await flushPromises()
    /** O rótulo da opção marcada como recomendada no bloco. */
    const recommendedOf = (block: string) =>
      view
        .find(`[aria-label="Modelo de ${block}"]`)
        .findAll('[role="radio"]')
        .map((option) => option.text())
        .find((text) => text.endsWith('recomendada'))
    expect(recommendedOf('Content1_Mobile')).toBe('Cascata recomendada')
    expect(recommendedOf('Anchor_Mobile')).toBe('Cascata recomendada')
  })

  it('não troca o modelo salvo e deixa o bloco novo sem regra', async () => {
    service.settings.mockResolvedValue({ ...site, blocks: [{ block: 'Anchor_Mobile', model: 'automatic' }, { block: 'Content1_Mobile', model: 'cascade' }] })
    const view = mount(PriceRuleSiteView, { attachTo: document.body })
    await flushPromises()
    /** O rótulo da opção escolhida no bloco. */
    const chosenOf = (block: string) => view.find(`[aria-label="Modelo de ${block}"]`).find('[aria-checked="true"]').text()
    expect(chosenOf('Anchor_Mobile')).toBe('Automática')
    expect(chosenOf('Content1_Mobile')).toBe('Cascata')
    expect(chosenOf('Fixed_Desktop')).toBe('Sem regra')
    expect(view.text()).toContain('1 com a Automática · 1 com a Cascata')
    expect(view.text()).not.toContain('Alterações não salvas')
  })

  it('mostra a escada e as compras de cada regra da Cascata', async () => {
    const view = mount(PriceRuleSiteView, { attachTo: document.body })
    await flushPromises()
    expect(service.rules).toHaveBeenCalledWith('s1', expect.objectContaining({ model: 'automatic' }))
    expect(service.rules).toHaveBeenCalledWith('s1', expect.objectContaining({ model: 'cascade' }))
    expect(plain(view)).toContain('R$ 1,22 → R$ 1,13 → R$ 1,05 → sem floor')
    expect(view.text()).toContain('40,00%')
    expect(view.text()).toContain('90,00%')
  })

  it('sem mudança, não mostra a barra de alterações mesmo com os blocos fora de ordem', async () => {
    service.settings.mockResolvedValue({ ...site, blocks: [site.blocks[1]!, site.blocks[0]!] })
    const view = mount(PriceRuleSiteView, { attachTo: document.body })
    await flushPromises()
    expect(view.text()).not.toContain('Alterações não salvas')
  })

  it('com bloco na Cascata e nenhuma regra ainda, mostra quando as regras entram', async () => {
    service.rules.mockResolvedValue(page([]))
    const view = mount(PriceRuleSiteView, { attachTo: document.body })
    await flushPromises()
    expect(view.text()).toContain('As regras da Cascata entram amanhã às 04:00, com os números de hoje.')
  })

  it('grava a Cascata no bloco fixo e atualiza o contador', async () => {
    service.saveBlocks.mockResolvedValue(site)
    const view = mount(PriceRuleSiteView, { attachTo: document.body })
    await flushPromises()
    const fixed = view.find('[aria-label="Modelo de Fixed_Desktop"]').findAll('[role="radio"]')
    await fixed[1]!.trigger('click')
    expect(view.text()).toContain('1 com a Automática · 2 com a Cascata')
    const save = view.findAll('button').find((button) => button.text() === 'Salvar')!
    await save.trigger('click')
    await flushPromises()
    expect(service.saveBlocks).toHaveBeenCalledWith('s1', { Anchor_Mobile: 'cascade', Content1_Mobile: 'automatic', Fixed_Desktop: 'cascade' })
  })
})

describe('tela da regra Cascata', () => {
  it('soma o funil das horas por tentativa', async () => {
    const view = mount(CascadeRuleView, { attachTo: document.body })
    await flushPromises()
    const funnel = view.findAll('[data-try]')
    expect(funnel).toHaveLength(4)
    /** Os números do cartão: oferecidas, compradas, compra e receita. */
    const numbers = (card: (typeof funnel)[number]) => card.findAll('dd').map(plain)
    expect(plain(funnel[0]!)).toContain('R$ 1,22')
    expect(numbers(funnel[0]!)).toEqual(['200', '80', '40,00%', 'R$ 0,12'])
    expect(funnel[3]!.text()).toContain('Sem floor')
    expect(numbers(funnel[3]!)).toEqual(['60', '40', '66,67%', 'R$ 0,01'])
    expect(view.text()).toContain('A 1ª tentativa encheu acima do limite: dá para começar mais alto.')
  })

  it('a tabela de decisões não mostra a compra na 1ª, que vem em outro fuso', async () => {
    const view = mount(CascadeRuleView, { attachTo: document.body })
    await flushPromises()
    const decisions = view.findAll('table').find((table) => table.text().includes('Motivo'))!
    expect(decisions.findAll('th').map((header) => header.text())).toEqual(['Hora', 'Ação', 'Ponto de partida', 'Motivo'])
  })

  it('salvar limites manda drop_tiers', async () => {
    const view = mount(CascadeRuleView, { attachTo: document.body })
    await flushPromises()
    const manual = view.findAll('[role="radio"]').find((option) => option.text() === 'Definidos à mão')!
    await manual.trigger('click')
    const drop = view.find('[aria-label="Descida por tentativa"]').findAll('[role="radio"]')
    await drop[2]!.trigger('click')
    const save = view.findAll('button').find((button) => button.text() === 'Salvar limites')!
    await save.trigger('click')
    await flushPromises()
    expect(service.saveConfig).toHaveBeenCalledWith('s1', 'r1', {
      automatic: false,
      pmr_floor: 60,
      pmr_emergency: 0,
      min_eligible_requests: 200,
      floor_min_micros: 1_010_000,
      floor_max_micros: 1_260_000,
      step_size: 1,
      drop_tiers: 3,
    })
  })
})
