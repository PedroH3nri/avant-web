import { describe, expect, it } from 'vitest'
import { linePoints, quoteChange } from '@/modules/currencies/rules'
import type { DollarQuote } from '@/modules/currencies/types'
import { isExternal, noticeText, noticeTitle, validLink } from '@/modules/notifications/rules'
import type { AppNotification } from '@/modules/notifications/types'

/** Uma notificação de exemplo com os campos dados. */
function notice(fields: Partial<AppNotification>): AppNotification {
  return { id: 'n', kind: 'manual', icon: 'bell', data: {}, title: null, text: null, link: null, created_at: '2026-11-25T17:00:00Z', read_at: null, ...fields }
}

/** Uma cotação de exemplo. */
function quote(rate: string, previous: string | null): DollarQuote {
  return { code: 'BRL', rate, day: '2026-11-25', synced_at: '2026-11-25T17:05:00Z', previous, history: [] }
}

describe('textos do sino', () => {
  it('usa o título e a descrição do envio manual', () => {
    const manual = notice({ title: 'Novidade', text: 'Tela nova' })
    expect([noticeTitle(manual), noticeText(manual)]).toEqual(['Novidade', 'Tela nova'])
  })

  it('monta os avisos automáticos a partir dos dados', () => {
    const invite = notice({ kind: 'invite_accepted', data: { name: 'Ana', company: 'Blog' } })
    expect(noticeText(invite)).toContain('Ana')
    expect(noticeText(invite)).toContain('Blog')
    const failed = notice({ kind: 'gam_tool', data: { state: 'failed', network: 'Tech', domains: 2 } })
    expect(noticeTitle(failed)).not.toBe(noticeTitle(notice({ kind: 'gam_tool', data: { state: 'done' } })))
    expect(noticeText(failed)).toContain('Tech')
    const comment = notice({ kind: 'task_comment', data: { author: 'Bruno', subject: 'ads.txt', comment: 'feito' } })
    expect(noticeTitle(comment)).toContain('Bruno')
    expect(noticeText(comment)).toBe('ads.txt: feito')
  })
})

describe('link do envio', () => {
  it('aceita telas do painel e recusa o resto no cliente', () => {
    expect(validLink('', false)).toBe(true)
    expect(validLink('/relatorios', false)).toBe(true)
    for (const link of ['//evil.com', 'https://groone.com', 'javascript:alert(1)', '/a b', '/a\\b']) expect(validLink(link, false)).toBe(false)
  })

  it('na Groone também aceita https', () => {
    expect(validLink('https://groone.com/novidades', true)).toBe(true)
    expect(validLink('http://groone.com', true)).toBe(false)
    expect(isExternal('https://groone.com')).toBe(true)
    expect(isExternal('/sites')).toBe(false)
  })
})

describe('cotação do dólar', () => {
  it('calcula a variação desde o dia anterior', () => {
    expect(quoteChange(quote('5.50', '5.00'))).toBeCloseTo(10)
    expect(quoteChange(quote('5.42', null))).toBeNull()
  })

  it('desenha a linha dentro do quadro', () => {
    expect(linePoints([1, 2], 100, 20)).toBe('0.0,16.0 100.0,4.0')
    expect(linePoints([3, 3], 100, 20)).toBe('0.0,10.0 100.0,10.0')
    expect(linePoints([], 100, 20)).toBe('')
  })
})
