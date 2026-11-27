import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'
import type { SiteSecurity } from '@/modules/site_security/types'

const show = vi.hoisted(() => vi.fn())
const checkShow = vi.hoisted(() => vi.fn())

vi.mock('@/lib/events', () => ({ onEvent: vi.fn(() => () => undefined) }))
vi.mock('@/modules/site_security/service', () => ({ siteSecurityService: () => ({ show }) }))
vi.mock('@/modules/install_checks/service', () => ({ installCheckService: () => ({ show: checkShow, request: vi.fn() }) }))

import SiteSecurityCard from '@/modules/site_security/components/SiteSecurityCard.vue'
import { securityTotals, signalRows, signalStatus } from '@/modules/site_security/rules'
import { BLOCKING_SIGNALS, blankSettings, draftChanges, toggleBlock } from '@/modules/ad_tags/rules'
import { noticeText, noticeTitle } from '@/modules/notifications/rules'
import type { AppNotification } from '@/modules/notifications/types'

/** O card de um site com dois dias de sinais e, se pedido, a suspeita aberta. */
function security(alert = false): SiteSecurity {
  return {
    check: { target: 'security', target_id: 's1', summary: null, requested_by_name: null, available_at: null, pages: [], findings: [] },
    days: [
      { day: '2026-11-26', page_views: 100, flagged: 10, blocked: 1, flagged_percent: 10, signals: { content_mismatch: 6, body_swap: 4 } },
      { day: '2026-11-27', page_views: 200, flagged: 30, blocked: 2, flagged_percent: 15, signals: { content_mismatch: 20, overlay: 2 } },
    ],
    alert: alert ? { opened_at: '2026-11-27T10:00:00Z', last_signal_at: '2026-11-27T11:00:00Z', page_views: 300, flagged: 40 } : null,
  }
}

beforeEach(() => {
  lang.value = 'pt'
})

afterEach(() => {
  vi.clearAllMocks()
})

describe('regras da Segurança do site', () => {
  it('soma os 7 dias e ordena os sinais vistos, completando até quatro', () => {
    const totals = securityTotals(security())
    expect(totals.pageViews).toBe(300)
    expect(totals.flagged).toBe(40)
    expect(totals.blocked).toBe(3)
    const rows = signalRows(totals.signals)
    expect(rows.map((row) => row.signal)).toEqual(['content_mismatch', 'body_swap', 'overlay', 'frame'])
    expect(rows.map((row) => row.count)).toEqual([26, 4, 2, 0])
  })

  it('o selo mostra a suspeita, a falta de visitas, os sinais e o site limpo', () => {
    expect(signalStatus(security(true), 300, 40).label).toBe('Suspeita de cloaker')
    expect(signalStatus(security(), 0, 0).tone).toBe('neutral')
    expect(signalStatus(security(), 300, 40).tone).toBe('warn')
    expect(signalStatus(security(), 300, 0).tone).toBe('ok')
  })

  it('o card mostra a verificação, os sinais e a suspeita', async () => {
    show.mockResolvedValue(security(true))
    const wrapper = mount(SiteSecurityCard, { props: { siteId: 's1', domain: 'blog.com', internal: true } })
    await flushPromises()
    expect(show).toHaveBeenCalledWith('s1')
    expect(wrapper.text()).toContain('Segurança do site')
    expect(wrapper.text()).toContain('Suspeita de cloaker')
    expect(wrapper.text()).toContain('Conteúdo diferente na mesma URL conforme a origem')
    expect(wrapper.text()).toContain('26 visitas')
    expect(wrapper.text()).toContain('40 de 300 visitas com sinal')
  })

  it('um erro da API fica no card', async () => {
    show.mockRejectedValue(new Error('falhou'))
    const wrapper = mount(SiteSecurityCard, { props: { siteId: 's1', domain: 'blog.com', internal: false } })
    await flushPromises()
    expect(wrapper.text()).toContain('Segurança do site')
    expect(wrapper.text()).not.toContain('Sinais da ad tag')
  })
})

describe('proteção da página na ad tag', () => {
  it('começa ligada, só com o overlay tirando os anúncios', () => {
    expect(blankSettings().security).toBe(true)
    expect(blankSettings().security_block).toEqual(['overlay'])
  })

  it('liga e desliga o bloqueio na ordem fixa, sem repetir', () => {
    expect(toggleBlock(['overlay'], 'covered_ad', true)).toEqual(['overlay', 'covered_ad'])
    expect(toggleBlock(['covered_ad', 'overlay'], 'frame', true)).toEqual(['overlay', 'frame', 'covered_ad'])
    expect(toggleBlock(['overlay', 'frame'], 'overlay', false)).toEqual(['frame'])
    expect(toggleBlock(['overlay'], 'overlay', true)).toEqual(['overlay'])
    expect(BLOCKING_SIGNALS).toHaveLength(4)
  })

  it('a mudança da proteção entra nas mudanças para publicar', () => {
    const live = { blocks: [], settings: blankSettings() }
    const draft = { blocks: [], settings: { ...blankSettings(), security_block: toggleBlock(['overlay'], 'frame', true) } }
    expect(draftChanges(live, draft)).toContain('O que tira os anúncios mudou')
    const off = { blocks: [], settings: { ...blankSettings(), security: false } }
    expect(draftChanges(live, off)).toContain('Proteção da página mudou')
  })
})

describe('aviso de cloaker no sino', () => {
  it('mostra o site e a porcentagem de visitas com sinal', () => {
    const item = { kind: 'cloaker_suspected', data: { site: 'blog.com', site_id: 's1', percent: '12.5', page_views: 320 } } as unknown as AppNotification
    expect(noticeTitle(item)).toBe('Suspeita de cloaker em blog.com')
    expect(noticeText(item)).toContain('12.5% de 320 visitas')
  })
})
