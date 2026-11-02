/** Formatos da API do domínio alerts (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Page } from '@/lib/types'
import type { SavedQuery } from '@/modules/reports/types'

export type AlertCondition = 'above' | 'below' | 'drop' | 'rise'

export type AlertBaseline = 'average_7_days' | 'same_day_last_week' | 'previous_day'

export interface AlertDefinition {
  schema_version: 1
  /** A consulta no formato salvo, com uma métrica e no máximo uma dimensão. */
  query: SavedQuery & { schema_version: 1 }
  condition: AlertCondition
  value: string
  baseline: AlertBaseline | null
}

export interface AlertInput {
  name: string
  definition: AlertDefinition
  recipient_user_ids: string[]
}

export interface AlertEvent {
  id: string
  /** O cliente, network ou site que disparou (vazio para o total). */
  subject: string
  subject_label: string | null
  day: string
  value: string
  baseline: string | null
  fired_at: string
  resolved_at: string | null
  notified_at: string | null
}

export interface Alert {
  id: string
  name: string
  definition: AlertDefinition
  recipient_user_ids: string[]
  currency: string
  owner_user_id: string
  created_by: string | null
  created_at: string
  updated_at: string
  muted_until: string | null
  last_checked_at: string | null
  firing: boolean
  last_event: AlertEvent | null
  editable: boolean
}

export type AlertPage = Page<Alert>

export interface AlertCheck {
  subject: string
  subject_label: string | null
  day: string
  value: string | null
  baseline: string | null
  change: string | null
  firing: boolean
}

export interface AlertPreview {
  checks: AlertCheck[]
}
