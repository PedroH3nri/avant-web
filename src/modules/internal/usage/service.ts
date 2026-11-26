/** Chamadas da API do uso do Avant no painel interno. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { ClientUsage, CompanyUsage, PersonUsage, PersonUsageDetail, UsagePeriod } from '@/modules/internal/usage/types'

export const usageAdminService = {
  /** O uso da Empresa somando a equipe, com a série diária. */
  company: (companyId: string, days: UsagePeriod) => api.get<CompanyUsage>(`/internal/companies/${companyId}/usage`, { days }),
  /** Cada pessoa da equipe com o uso do período. */
  people: (companyId: string, days: UsagePeriod) => api.get<Items<PersonUsage>>(`/internal/companies/${companyId}/usage/people`, { days }),
  /** Os detalhes de uso de uma pessoa da equipe. */
  person: (companyId: string, userId: string, days: UsagePeriod) => api.get<PersonUsageDetail>(`/internal/companies/${companyId}/usage/people/${userId}`, { days }),
  /** O uso do login do cliente. */
  client: (clientId: string, days: UsagePeriod) => api.get<ClientUsage>(`/internal/clients/${clientId}/usage`, { days }),
}
