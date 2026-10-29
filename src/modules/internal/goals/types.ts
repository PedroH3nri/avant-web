/** Formatos da API das metas da equipe Groone (iguais ao dto.py de internal/goals no avant-api). */

export type GoalMode = 'per_member' | 'split'

export interface GoalTemplate {
  id: string
  name: string
  year: number
  currency: string
  /** Um valor por mês, de janeiro a dezembro, como texto decimal. */
  months: string[]
  is_company_goal: boolean
  created_at: string
  updated_at: string
}

export interface GoalTemplateInput {
  name: string
  year: number
  months: string[]
  is_company_goal: boolean
}

export interface RoleGoal {
  role_id: string
  goal_template_id: string
  goal_mode: GoalMode
}

export interface GoalProgress {
  done: string
  goal: string | null
  /** Fração da meta já feita (0,5 = metade). */
  share: string | null
  /** Se o realizado acompanha os dias que já passaram; vazio sem meta ou no primeiro dia. */
  on_pace: boolean | null
  projected: string | null
}

export interface PersonGoal {
  user_id: string
  name: string
  role_name: string | null
  mode: GoalMode | null
  progress: GoalProgress
}

export interface TeamGoals {
  /** Mês no formato AAAA-MM. */
  month: string
  company: GoalProgress
  people: PersonGoal[]
}
