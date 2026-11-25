/** Formatos da API do domínio results (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { CostKind } from '@/modules/costs/types'
import type { Page } from '@/lib/types'

export interface CostLine {
  cost_id: string
  name: string
  kind: CostKind
  amount: string
}

export interface MonthResult {
  month: string
  billing: string
  deductions: string
  revenue: string
  costs: string
  result: string
  deductions_pending: boolean
  cost_lines: CostLine[]
  /** Só no painel interno: o que a Groone recebe no mês. */
  groone_revenue?: string | null
}

export interface ResultTotals {
  billing: string
  deductions: string
  revenue: string
  costs: string
  result: string
  groone_revenue?: string | null
}

export interface CompanyResults {
  company: { id: string; name: string }
  currency: string
  months: MonthResult[]
  totals: ResultTotals
}

/** Uma página do ranking do resultado dos clientes com a soma de todos, igual ao ``ClientsResultsPageOut`` da API. */
export interface ClientsResultsPage extends Page<CompanyResults> {
  totals: ResultTotals
  deductions_pending: boolean
}
