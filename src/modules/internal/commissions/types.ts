/** Formatos da API da comissão da equipe Groone (iguais ao dto.py dele no avant-api). Dinheiro em dólar, texto com duas casas. */

import type { UserRef } from '@/lib/types'

export type CommissionKind = 'created' | 'reactivated'
export type CommissionTarget = 'client' | 'network' | 'site'
export type CommissionEvent = `${CommissionTarget}_${CommissionKind}`
export type CommissionStatus = 'draft' | 'validated' | 'issued' | 'paid'

export interface CommissionRule {
  id: string
  role_id: string
  event: CommissionEvent
  percentage: string
  start_offset_days: number
  duration_days: number | null
  transfer_to_role_id: string | null
}

export interface CommissionRuleInput {
  event: CommissionEvent
  percentage: string
  start_offset_days: number
  duration_days: number | null
  transfer_to_role_id: string | null
}

export interface CommissionMonth {
  month: string
  base: string
  commission: string
  deduction: string
  adjustments: string
  total: string
  status: CommissionStatus
}

export interface WindowMonth {
  id: string
  event: CommissionEvent
  target_name: string
  company_id: string
  network_id: string | null
  site_id: string | null
  event_on: string
  starts_on: string | null
  ends_on: string | null
  stopped_on: string | null
  percentage: string | null
  base: string
  commission: string
  deduction: string
}

export interface MyCommissions {
  windows: WindowMonth[]
  month: CommissionMonth
  history: CommissionMonth[]
}

export interface PersonMonth {
  user: UserRef
  role_name: string | null
  month: CommissionMonth
}
