import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { lang } from '@/lib/i18n'
import type { TrafficAlert, TrafficAlertDetail, TrafficOverview } from '@/modules/internal/traffic_quality/types'

const overview = vi.hoisted(() => vi.fn())
const detail = vi.hoisted(() => vi.fn())
const dismiss = vi.hoisted(() => vi.fn())
const task = vi.hoisted(() => vi.fn())

vi.mock('@/modules/internal/traffic_quality/service', () => ({ trafficQualityService: { overview, detail, dismiss, task } }))
vi.mock('@/stores/session', () => ({ useSession: () => ({ can: () => true }) }))

import TrafficQualityView from '@/modules/internal/traffic_quality/views/TrafficQualityView.vue'
import { filterAlerts, investigateLinks, normalText, shareLabel, signalText, sourceText, taskDescription } from '@/modules/internal/traffic_quality/rules'

/** Um alerta de sessões rápidas num site, com o que veio da API. */
function alert(patch: Partial<TrafficAlert> = {}): TrafficAlert {
  return {
    id: 'a1',
    signal: 'quick_bounce',
    risk: 'high',
    target_name: 'guiadopet.com',
    domain: 'guiadopet.com',
    site_id: 's1',
    network_id: null,
    client_id: 'c1',
    client_name: 'Guia do Pet',
    manager_id: null,
    value: 71,
    normal: 18,
    series: [17, 19, 71],
    context: { day: '2026-11-25' },
    opened_at: '2026-11-25T10:00:00Z',
    last_seen_at: '2026-11-25T11:00:00Z',
    task_id: null,
    ...patch,
  }
}

beforeEach(() => {
  lang.value = 'pt'
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('regras da Qualidade do tráfego', () => {
  it('monta o texto de cada sinal e o normal', () => {
    expect(signalText(alert())).toBe('71% das sessões com 1 página e menos de 5 s')
    expect(normalText(alert())).toBe('18% no site')
    expect(signalText(alert({ signal: 'page_view_spike', value: 246000, normal: 41000 }))).toBe('Pico de 6x nas páginas vistas')
    expect(sourceText(alert({ signal: 'page_view_spike', context: { day: '2026-11-26', referrer: 't.co' } }))).toContain('Referrer t.co')
    expect(normalText(alert({ signal: 'deduction', normal: 3.1 }))).toBe('3,1% na rede')
  })

  it('filtra pelo risco, pelo sinal e pela busca', () => {
    const rows = [alert(), alert({ id: 'a2', risk: 'medium', signal: 'ctr', target_name: 'apostas.bet', client_name: 'Apostas' })]
    expect(filterAlerts(rows, { risk: 'medium', signal: 'all', query: '' }).map((row) => row.id)).toEqual(['a2'])
    expect(filterAlerts(rows, { risk: 'all', signal: 'quick_bounce', query: '' }).map((row) => row.id)).toEqual(['a1'])
    expect(filterAlerts(rows, { risk: 'all', signal: 'all', query: 'apostas' }).map((row) => row.id)).toEqual(['a2'])
  })

  it('traduz os códigos dos recortes e deixa o resto como veio', () => {
    expect(shareLabel('source', '(direct)')).toBe('direto')
    expect(shareLabel('visible', '0-5')).toBe('menos de 5 s')
    expect(shareLabel('source', 'facebook')).toBe('facebook')
    expect(shareLabel('country', 'mobile')).toBe('mobile')
  })

  it('os links de investigação levam o domínio e a tarefa leva os links', () => {
    const links = investigateLinks('guiadopet.com')
    expect(links).toHaveLength(9)
    expect(links.find((link) => link.label === 'tq.link.google')?.href).toBe('https://adstransparency.google.com/?region=anywhere&domain=guiadopet.com')
    expect(links.every((link) => link.href.startsWith('https://'))).toBe(true)
    const text = taskDescription(alert())
    expect(text).toContain('71% das sessões')
    expect(text).toContain('https://web.archive.org/web/*/guiadopet.com')
  })
})

describe('tela Qualidade do tráfego', () => {
  /** Monta a tela com um roteador em memória. */
  async function render() {
    const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }] })
    const wrapper = mount(TrafficQualityView, { global: { plugins: [router] }, attachTo: document.body })
    await flushPromises()
    return wrapper
  }

  it('lista os alertas, abre o detalhe, cria a tarefa e dispensa', async () => {
    const found: TrafficOverview = { open: 1, high: 1, cloaker: 0, deduction_percent: 4.6, previous_deduction_percent: 3.9, revenue_at_risk: '3870.00', rows: [alert()] }
    const opened: TrafficAlertDetail = {
      alert: alert(),
      breakdowns: [{ dimension: 'source', rows: [{ label: 'google', now: 74, normal: 22 }] }],
      campaigns: [],
      evidence: {},
    }
    overview.mockResolvedValue(found)
    detail.mockResolvedValue(opened)
    task.mockResolvedValue({ task_id: 't1' })
    dismiss.mockResolvedValue(undefined)
    const wrapper = await render()
    expect(wrapper.text()).toContain('guiadopet.com')
    expect(wrapper.text()).toContain('4,6%')
    await wrapper.findAll('button').find((button) => button.text() === 'Ver detalhes')!.trigger('click')
    await flushPromises()
    expect(document.body.textContent).toContain('Origem (utm_source)')
    expect(document.body.textContent).toContain('Investigar fora do Avant')
    const buttons = () => [...document.body.querySelectorAll('button')]
    buttons().find((button) => button.textContent?.includes('Criar tarefa'))!.click()
    await flushPromises()
    expect(task).toHaveBeenCalledWith('a1', expect.stringContaining('guiadopet.com'))
    buttons().find((button) => button.textContent?.includes('Dispensar'))!.click()
    await flushPromises()
    expect(dismiss).toHaveBeenCalledWith('a1')
    expect(wrapper.text()).toContain('Nenhum alerta')
    wrapper.unmount()
  })
})
