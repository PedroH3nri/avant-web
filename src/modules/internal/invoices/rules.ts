/** Regras de tela das invoices da equipe Groone: situação, documentos de pessoa física e a linha de serviço. */

import type { Lang } from '@/lib/types'
import { TAX_TYPES, taxTypeLabel } from '@/modules/company/fiscal'
import { parseAmount } from '@/modules/internal/goals/rules'
import type { Invoice, InvoiceStatus, ServiceItemInput } from '@/modules/internal/invoices/types'

export const STATUS_TONE: Record<InvoiceStatus, 'ochre' | 'neutral' | 'ok'> = { draft: 'ochre', issued: 'neutral', paid: 'ok' }
export const MAX_AMOUNT = 1_000_000
const PERSON_SUFFIX = '_PF'

/** Quem recebe a invoice é sempre a pessoa: só os documentos de pessoa física, por país. */
export function personTaxTypeOptions(sortLocale: string): { value: string; label: string }[] {
  return Object.keys(TAX_TYPES)
    .filter((code) => code.endsWith(PERSON_SUFFIX))
    .map((code) => ({ value: code, label: taxTypeLabel(code) }))
    .sort((first, second) => first.label.localeCompare(second.label, sortLocale))
}

/** O valor da linha de serviço é maior que zero, tem até duas casas e no máximo um milhão. */
export function amountValid(text: string, lang: Lang): boolean {
  const value = parseAmount(text, lang)
  return Number.isFinite(value) && value > 0 && value <= MAX_AMOUNT
}

/** O corpo da linha de serviço para a API, com o valor em texto de duas casas. */
export function serviceItemBody(serviceId: string, description: string, amount: string, lang: Lang): ServiceItemInput {
  return { service_id: serviceId, description: description.trim(), amount: parseAmount(amount, lang).toFixed(2) }
}

/** O valor da API escrito no idioma da pessoa, para editar a linha. */
export function amountInput(amount: string, lang: Lang): string {
  return lang === 'en' ? amount : amount.replace('.', ',')
}

/** A dona edita só o rascunho; o financeiro devolve ou confirma só a emitida. */
export function invoiceActions(invoice: Invoice, userId: string, canManage: boolean) {
  const owner = invoice.owner.id === userId
  return {
    edit: owner && invoice.status === 'draft',
    manage: canManage && invoice.status === 'issued',
  }
}

/** O mês da API (``AAAA-MM-DD``) como ``AAAA-MM`` para a criação e os filtros. */
export function monthKey(iso: string): string {
  return iso.slice(0, 7)
}
