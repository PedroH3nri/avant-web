/** Formatos da API do domínio results (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { CostKind } from '@/modules/costs/types'

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
}

export interface ResultTotals {
  billing: string
  deductions: string
  revenue: string
  costs: string
  result: string
}

export interface CompanyResults {
  company: { id: string; name: string }
  currency: string
  months: MonthResult[]
  totals: ResultTotals
}
