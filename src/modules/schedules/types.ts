/** Formatos da API do domínio schedules (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Page } from '@/lib/types'

export type ScheduleTarget = 'report' | 'dashboard'

export type ScheduleFrequency = 'daily' | 'weekly' | 'monthly'

export interface ScheduleInput {
  name: string
  target: ScheduleTarget
  target_id: string
  frequency: ScheduleFrequency
  /** Dia da semana (0 é segunda), só no semanal. */
  weekday: number | null
  /** Dia do mês (1 a 28), só no mensal. */
  month_day: number | null
  hour: number
  /** Fuso IANA, como America/Sao_Paulo. */
  timezone: string
  recipient_user_ids: string[]
}

export interface ScheduleDelivery {
  scheduled_for: string
  sent_at: string
  recipients: number
}

export interface Schedule extends ScheduleInput {
  id: string
  target_name: string | null
  paused: boolean
  next_run_at: string
  last_sent_at: string | null
  last_delivery: ScheduleDelivery | null
  owner_user_id: string
  created_by: string | null
  created_at: string
  updated_at: string
  editable: boolean
}

export type SchedulePage = Page<Schedule>
