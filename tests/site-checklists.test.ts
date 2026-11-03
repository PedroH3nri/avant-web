import { beforeAll, describe, expect, it } from 'vitest'
import { lang } from '@/lib/i18n'
import { evidenceText, languageName, monthName, parseWords, previousMonth, progressPercent, rowState, splitRows } from '@/modules/internal/checklists/rules'
import type { ChecklistItem, ChecklistRow } from '@/modules/internal/checklists/types'

const item: ChecklistItem = { id: 'cookies', name: 'Políticas de cookies', kind: 'link', words: ['cookies'], position: 1, active: true, created_at: '2026-11-01T00:00:00Z' }

/** Uma linha do checklist com os campos dados. */
function row(fields: Partial<ChecklistRow>): ChecklistRow {
  return { item, outcome: null, evidence: null, detail: null, checked_at: null, marked_by: null, marked_at: null, ok: false, ...fields }
}

describe('checklist de domínio', () => {
  beforeAll(() => (lang.value = 'pt'))

  it('dá ao "ok" marcado a vitória sobre o automático', () => {
    expect(rowState(row({ outcome: 'failed', marked_at: '2026-11-02T10:00:00Z', ok: true }))).toBe('marked')
    expect(rowState(row({ outcome: 'unknown' }))).toBe('unknown')
    expect(rowState(row({}))).toBe('pending')
  })

  it('separa o que revisar do que está ok', () => {
    const failed = row({ outcome: 'failed' })
    const fine = row({ outcome: 'ok', ok: true })
    expect(splitRows([failed, fine])).toEqual({ review: [failed], fine: [fine] })
  })

  it('traduz a prova e explica o tipo sem conferência', () => {
    expect(evidenceText(row({ evidence: 'link_missing' }))).toBe('Nenhum link com estas palavras na página inicial')
    expect(evidenceText(row({}))).toContain('Procura na página inicial')
  })

  it('limpa as palavras do tipo link', () => {
    expect(parseWords(' Cookies, cookie,, cookies ')).toEqual(['cookies', 'cookie'])
  })

  it('escreve os meses e o progresso', () => {
    expect(monthName('2026-11-01')).toBe('Novembro de 2026')
    expect(monthName('2026-10-01', false)).toBe('outubro de 2026')
    expect(previousMonth('2026-01-01')).toBe('2025-12-01')
    expect(previousMonth('2026-11-01')).toBe('2026-10-01')
    expect(progressPercent(3, 13)).toBe(23)
    expect(progressPercent(0, 0)).toBe(0)
    expect(languageName('es')).toBe('Español')
    expect(languageName(null)).toBeNull()
  })
})
