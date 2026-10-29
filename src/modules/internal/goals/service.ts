/** Chamadas da API das metas da equipe Groone. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { GoalMode, GoalTemplate, GoalTemplateInput, PersonGoal, RoleGoal, TeamGoals } from '@/modules/internal/goals/types'

/** Serviço das metas. */
export const goalService = {
  /** Todos os modelos de meta, para o seletor da meta do papel. */
  templates: () => api.get<Pick<Items<GoalTemplate>, 'items'>>('/internal/goal-templates/options'),
  /** Uma página dos modelos de meta, do ano mais novo para o mais velho. */
  templatePage: (query?: Query) => api.get<Page<GoalTemplate>>('/internal/goal-templates', query),
  /** Cadastra um modelo de meta. */
  createTemplate: (input: GoalTemplateInput) => api.post<GoalTemplate>('/internal/goal-templates', input),
  /** Troca um modelo de meta. */
  updateTemplate: (id: string, input: GoalTemplateInput) => api.put<GoalTemplate>(`/internal/goal-templates/${id}`, input),
  /** Apaga um modelo de meta. */
  deleteTemplate: (id: string) => api.delete(`/internal/goal-templates/${id}`),
  /** A meta de cada papel. */
  roleGoals: () => api.get<Pick<Items<RoleGoal>, 'items'>>('/internal/role-goals'),
  /** Põe, troca ou tira (modelo vazio) a meta de um papel. */
  setRoleGoal: (roleId: string, templateId: string | null, mode: GoalMode) =>
    api.put<void>(`/internal/roles/${roleId}/goal`, { goal_template_id: templateId, goal_mode: mode }),
  /** A meta da Groone e a de cada pessoa no mês (AAAA-MM). */
  team: (month: string) => api.get<TeamGoals>('/internal/goals', { month }),
  /** A meta do mês de quem pergunta. */
  mine: (month: string) => api.get<PersonGoal>('/internal/goals/me', { month }),
}
