/** Formatos da API das réguas de nutrição, iguais ao dto.py de internal/nurture do avant-api. */

export type NurtureMeasure =
  | 'days_without_access'
  | 'active_days_30d'
  | 'client_sessions_30d'
  | 'company_active_days_30d'
  | 'active_people_30d'
  | 'screens_30d'
  | 'minutes_30d'
  | 'onboarding_step'
export type NurtureComparison = 'gte' | 'lte' | 'eq'
export type OnboardingStep = 'network' | 'sites' | 'ad_tag' | 'install' | 'done'
export type NurtureManagerScope = 'all' | 'none' | 'one'
export type NurtureTaskDue = 'today' | 'one_business_day' | 'two_business_days' | 'one_week'
export type NurtureEnrollmentStatus = 'active' | 'left' | 'completed' | 'unsubscribed'
export type NurtureSendStatus = 'queued' | 'sent' | 'delivered' | 'opened' | 'clicked' | 'bounced' | 'failed'
export type NurtureLang = 'pt' | 'en' | 'es'
export type NurtureTexts = Record<NurtureLang, string>

export type NurtureEmail = { delay_days: number; subject: NurtureTexts; body: NurtureTexts }

export type NurtureRuleInput = {
  name: string
  priority: number
  enabled: boolean
  measure: NurtureMeasure
  comparison: NurtureComparison
  value: number
  step: OnboardingStep | null
  manager_scope: NurtureManagerScope
  manager_id: string | null
  min_client_age_days: number
  emails: NurtureEmail[]
  hubspot_task: boolean
  task_due: NurtureTaskDue
  stage: string | null
  repeat_days: number | null
}

export type NurtureRule = NurtureRuleInput & { id: string; created_at: string; updated_at: string }

export type NurtureStats = { active: number; sent_30d: number; opened_30d: number; returned_30d: number }
export type NurtureRuleSummary = { rule: NurtureRule; stats: NurtureStats }
export type NurtureOverview = { active_clients: number; totals: NurtureStats; rules: NurtureRuleSummary[]; variables: string[] }

export type NurtureMember = {
  enrollment_id: string
  client_id: string
  client_name: string
  manager_name: string | null
  entered_at: string
  status: NurtureEnrollmentStatus
  sent: number
  total_emails: number
  last_sent_at: string | null
  opened: boolean
  returned: boolean
  unsubscribed: boolean
}

export type NurtureSend = {
  id: string
  rule_id: string
  rule_name: string
  client_id: string
  client_name: string
  email_index: number
  locale: string
  to_email: string
  subject: string
  status: NurtureSendStatus
  created_at: string
  sent_at: string | null
  status_at: string | null
  returned_at: string | null
}

export type NurtureEnrollment = {
  id: string
  rule_id: string
  entered_at: string
  status: NurtureEnrollmentStatus
  next_email: number
  next_send_at: string | null
  ended_at: string | null
  hubspot_task_id: string | null
}

export type NurtureClient = {
  subscribed: boolean
  current: NurtureEnrollment | null
  current_rule: string | null
  current_total: number
  history: NurtureSend[]
}

export type NurtureCondition = Pick<NurtureRuleInput, 'measure' | 'comparison' | 'value' | 'step' | 'manager_scope' | 'manager_id' | 'min_client_age_days'>
