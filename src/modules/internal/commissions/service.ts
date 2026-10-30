/** Chamadas da API da comissão da equipe Groone no painel interno. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { CommissionRule, CommissionRuleInput, MyCommissions, PersonMonth, WindowMonth } from '@/modules/internal/commissions/types'

/** Serviço da comissão: regras no papel, data de início, consultas, emissão e desconto. */
export const commissionService = {
  /** As regras de comissão de um papel da equipe Groone. */
  rules: (roleId: string) => api.get<Items<CommissionRule>>(`/internal/roles/${roleId}/commission-rules`),
  /** Cria uma regra no papel (uma por evento). */
  createRule: (roleId: string, body: CommissionRuleInput) => api.post<CommissionRule>(`/internal/roles/${roleId}/commission-rules`, body),
  /** Troca uma regra do papel. */
  updateRule: (roleId: string, ruleId: string, body: CommissionRuleInput) => api.put<CommissionRule>(`/internal/roles/${roleId}/commission-rules/${ruleId}`, body),
  /** Apaga uma regra. */
  deleteRule: (ruleId: string) => api.delete(`/internal/commission-rules/${ruleId}`),
  /** A data de início da comissão no Avant. */
  settings: () => api.get<{ starts_on: string | null }>('/internal/commissions/settings'),
  /** Grava a data de início e abre os prazos do que já existia. */
  setStart: (startsOn: string) => api.put<{ starts_on: string | null }>('/internal/commissions/settings', { starts_on: startsOn }),
  /** A minha comissão no mês (``AAAA-MM``). */
  mine: (month: string) => api.get<MyCommissions>('/internal/commissions/me', { month }),
  /** A comissão de cada pessoa da equipe no mês. */
  team: (month: string) => api.get<Items<PersonMonth>>('/internal/commissions', { month }),
  /** Os prazos de uma pessoa com o que geraram no mês. */
  person: (userId: string, month: string) => api.get<Items<WindowMonth>>(`/internal/commissions/people/${userId}`, { month }),
  /** Marca o mês fechado da pessoa como emitido. */
  /** Lança um desconto na comissão do mês da pessoa. */
  adjust: (userId: string, month: string, amount: string, reason: string) =>
    api.post(`/internal/commissions/people/${userId}/adjustments`, { month, amount, reason }),
}
