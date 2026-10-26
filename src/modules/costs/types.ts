/** Formatos da API do domínio costs (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

export type CostKind = 'one_time' | 'recurring' | 'formula'

export interface Cost {
  id: string
  name: string
  kind: CostKind
  currency: string
  start_month: string
  end_month: string | null
  amount: string | null
  formula: string | null
  created_at: string
  updated_at: string
}

export interface CostInput {
  name: string
  kind: CostKind
  currency: string
  start_month: string
  end_month: string | null
  amount: string | null
  formula: string | null
}

export interface FormulaCheck {
  valid: boolean
  value: string | null
  error: string | null
  variables: string[]
}
