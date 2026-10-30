/** Formatos da API das invoices da equipe Groone (iguais ao dto.py dele no avant-api). Dinheiro em dólar, texto com duas casas. */

import type { UserRef } from '@/lib/types'
import type { FiscalData } from '@/modules/company/types'

export type InvoiceStatus = 'draft' | 'issued' | 'paid'
export type InvoiceItemKind = 'commission' | 'gam_deduction' | 'adjustment' | 'service'

export interface PayeeDetails extends FiscalData {
  updated_at: string
}

export interface InvoiceServiceItem {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

export interface InvoiceServiceOption {
  id: string
  title: string
  description: string
}

export interface InvoiceServiceInput {
  title: string
  description: string
}

export interface AvailableMonth {
  month: string
  commission: string
  deduction: string
  adjustments: string
  total: string
}

export interface InvoiceSummary {
  id: string
  number: string
  month: string
  status: InvoiceStatus
  owner: UserRef
  total: string
  created_at: string
  issued_at: string | null
  paid_at: string | null
  returned: boolean
}

export interface InvoiceItem {
  id: string
  kind: InvoiceItemKind
  title: string
  description: string
  amount: string
  locked: boolean
  service_id: string | null
}

export interface InvoiceReturn {
  at: string
  by: string | null
  reason: string
}

export interface Invoice {
  id: string
  number: string
  month: string
  status: InvoiceStatus
  owner: UserRef
  role_name: string | null
  items: InvoiceItem[]
  total: string
  created_at: string
  issued_at: string | null
  paid_at: string | null
  /** Só enquanto está em rascunho depois de devolvida. */
  returned: InvoiceReturn | null
  /** A cópia dos dados de recebimento feita na emissão; vazia em rascunho. */
  payee: FiscalData | null
}

export interface ServiceItemInput {
  service_id: string
  description: string
  amount: string
}

export interface InvoiceFilters {
  page: number
  status?: InvoiceStatus
  month?: string
  user_id?: string
}
