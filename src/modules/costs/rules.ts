import type { Cost, CostInput, CostKind } from '@/modules/costs/types'

export const COST_KINDS: CostKind[] = ['recurring', 'one_time', 'formula']
export const FORMULA_CHIPS = ['faturamento', 'receita', 'min(', 'max(', '%']

/** Lê o valor digitado (vírgula ou ponto, até seis casas, de zero para cima); ``null`` se inválido. */
export function parseAmount(input: string): string | null {
  const cleaned = input.trim().replace(/\s/g, '')
  const normalized = cleaned.includes(',') ? cleaned.replace(/\./g, '').replace(',', '.') : cleaned
  if (!/^\d{1,13}(\.\d{1,6})?$/.test(normalized)) return null
  return normalized
}

/** ``2026-09-01`` vira ``2026-09``, o formato do campo de mês. */
export function toMonthInput(iso: string | null): string {
  return iso ? iso.slice(0, 7) : ''
}

/** ``2026-09`` vira ``2026-09-01``, o primeiro dia que a API guarda; vazio fica ``null``. */
export function fromMonthInput(value: string): string | null {
  return /^\d{4}-\d{2}$/.test(value) ? `${value}-01` : null
}

/** Nome curto do mês no idioma: ``set. de 2026``. */
export function formatMonth(iso: string, locale: string): string {
  const [year = 1970, month = 1] = iso.split('-').map(Number)
  return new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(Date.UTC(year, month - 1, 1))
}

/** O mês atual no formato do campo de mês. */
export function currentMonthInput(today = new Date()): string {
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`
}

/** Corpo da API a partir do formulário; ``null`` quando falta algo que o tipo pede. */
export function costBody(form: { name: string; kind: CostKind; currency: string; start: string; end: string; amount: string; formula: string }): CostInput | null {
  const start = fromMonthInput(form.start)
  const name = form.name.trim()
  if (!name || !start) return null
  const end = form.kind === 'one_time' ? null : fromMonthInput(form.end)
  if (end && end < start) return null
  if (form.kind === 'formula') {
    const formula = form.formula.trim()
    return formula ? { name, kind: form.kind, currency: form.currency, start_month: start, end_month: end, amount: null, formula } : null
  }
  const amount = parseAmount(form.amount)
  return amount === null ? null : { name, kind: form.kind, currency: form.currency, start_month: start, end_month: end, amount, formula: null }
}

/** Formulário preenchido com um custo existente (ou vazio para um novo). */
export function costForm(cost: Cost | null, currency: string, today = new Date()) {
  return {
    name: cost?.name ?? '',
    kind: cost?.kind ?? ('recurring' as CostKind),
    currency: cost?.currency ?? currency,
    start: cost ? toMonthInput(cost.start_month) : currentMonthInput(today),
    end: toMonthInput(cost?.end_month ?? null),
    amount: cost?.amount ?? '',
    formula: cost?.formula ?? '',
  }
}
