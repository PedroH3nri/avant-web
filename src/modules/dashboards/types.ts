/** Formatos da API dos dashboards, iguais ao `dto.py` do avant-api. */

import type { Localized, Page } from '@/lib/types'
import type { ChartType, RelativePeriod, ReportPeriod, ReportResult, SavedQuery, Visibility } from '@/modules/reports/types'

export type WidgetType = 'report' | 'query' | 'text' | 'goal' | 'account'
export type GoalScope = 'mine' | 'team'
export type FilterDimension = 'client' | 'account_manager' | 'network' | 'site'

/** Um widget na grade de 12 colunas: x e y são a coluna e a linha, w e h o tamanho. */
export interface Widget {
  id: string
  type: WidgetType
  x: number
  y: number
  w: number
  h: number
  title: string | null
  report_id?: string
  query?: SavedQuery & { schema_version: number }
  chart_type?: ChartType
  chart_options?: Record<string, unknown>
  text?: string | null
  goal_scope?: GoalScope
}

/** Filtros do dashboard: o período e os ids escolhidos por dimensão. */
export interface DashboardFilters {
  period?: (ReportPeriod & { preset?: RelativePeriod | null }) | null
  client?: string[]
  account_manager?: string[]
  network?: string[]
  site?: string[]
}

export interface DashboardDefinition {
  schema_version: number
  filters: DashboardFilters
  widgets: Widget[]
}

export interface Dashboard {
  id: string
  name: string
  description: string | null
  definition: DashboardDefinition
  visibility: Visibility
  role_ids: string[]
  owner_user_id: string
  created_by: string | null
  created_at: string
  updated_at: string
  /** O padrão da Empresa, que abre para quem não escolheu outro. */
  is_default: boolean
  /** A pessoa pode editar e apagar (é a dona ou tem dashboards.manage). */
  editable: boolean
}

export interface DashboardInput {
  name: string
  description: string | null
  definition: DashboardDefinition
  visibility: Visibility
  role_ids: string[]
}

export interface DashboardPage extends Page<Dashboard> {
  default_id: string | null
  chosen_id: string | null
}

export interface DashboardTemplate {
  id: string
  /** Só nos modelos que vieram com o Avant. */
  key: string | null
  name: Localized
  definition: DashboardDefinition
}

export type TemplateAudience = 'groone' | 'clients'

/** Um modelo pronto como a equipe Groone vê na gestão: público, papéis e o de início. */
export interface ManagedTemplate {
  id: string
  key: string | null
  name: { pt: string; en: string; es: string }
  definition: DashboardDefinition
  audience: TemplateAudience
  role_ids: string[]
  is_home: boolean
  updated_at: string
}

export interface TemplateInput {
  name: { pt: string; en: string; es: string }
  definition: DashboardDefinition
  audience: TemplateAudience
  role_ids: string[]
}

export interface TemplateRole {
  id: string
  name: Record<string, string>
}

/** Os papéis que limitam quem vê: os da equipe Groone e os predefinidos dos clientes. */
export interface TemplateRoles {
  groone: TemplateRole[]
  clients: TemplateRole[]
}

/** O que abre na tela inicial: o dashboard da pessoa ou, sem nenhum, o modelo de início. */
export interface HomeDashboard {
  dashboard: Dashboard | null
  template: DashboardTemplate | null
}

/** Por que um widget não rodou, igual ao ``WidgetErrorOut`` da API. */
export interface WidgetError {
  code: string
  message: string
}

/** Todos os widgets com consulta rodados numa requisição, como em ``DashboardRunOut``. */
export interface DashboardRun {
  results: Record<string, ReportResult>
  errors: Record<string, WidgetError>
}
