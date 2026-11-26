/** Chamadas da API das réguas de nutrição no painel interno. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type {
  NurtureClient,
  NurtureCondition,
  NurtureMember,
  NurtureOverview,
  NurtureRule,
  NurtureRuleInput,
  NurtureRuleSummary,
  NurtureSend,
} from '@/modules/internal/nurture/types'

export const nurtureService = {
  /** As réguas com os números de cada uma. */
  overview: () => api.get<NurtureOverview>('/internal/nurture'),
  /** Uma régua com os números. */
  rule: (ruleId: string) => api.get<NurtureRuleSummary>(`/internal/nurture/rules/${ruleId}`),
  /** Cria uma régua. */
  create: (body: NurtureRuleInput) => api.post<NurtureRule>('/internal/nurture/rules', body),
  /** Muda a régua. */
  update: (ruleId: string, body: NurtureRuleInput) => api.put<NurtureRule>(`/internal/nurture/rules/${ruleId}`, body),
  /** Liga ou desliga a régua. */
  setEnabled: (ruleId: string, enabled: boolean) => api.put<NurtureRule>(`/internal/nurture/rules/${ruleId}/enabled`, { enabled }),
  /** Apaga a régua com as passagens e os envios. */
  remove: (ruleId: string) => api.delete(`/internal/nurture/rules/${ruleId}`),
  /** Os clientes que passaram pela régua. */
  members: (ruleId: string) => api.get<Items<NurtureMember>>(`/internal/nurture/rules/${ruleId}/members`),
  /** Os últimos envios da régua. */
  sends: (ruleId: string) => api.get<Items<NurtureSend>>(`/internal/nurture/rules/${ruleId}/sends`),
  /** Quantos clientes ativos atendem hoje a condição do editor. */
  condition: (body: NurtureCondition) => api.post<{ matching: number }>('/internal/nurture/condition', body),
  /** A nutrição de um cliente, para o card da página dele. */
  client: (clientId: string) => api.get<NurtureClient>(`/internal/clients/${clientId}/nurture`),
}
