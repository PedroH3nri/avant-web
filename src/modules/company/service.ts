/** Chamadas da API da Empresa ativa: dados, aparência e dados fiscais. */

import { api } from '@/lib/api'
import type { CompanyDetail, CompanyFiscal } from '@/modules/company/types'

/** Serviço da Empresa ativa. */
export const companyService = {
  /** A Empresa ativa. */
  show: () => api.get<CompanyDetail>('/company'),
  /** Muda os dados da Empresa ativa. */
  update: (body: unknown) => api.patch<CompanyDetail>('/company', body),
  /** Os dados fiscais da Empresa ativa. */
  fiscal: () => api.get<CompanyFiscal>('/company/fiscal'),
  /** Troca os dados fiscais da Empresa ativa. */
  updateFiscal: (body: unknown) => api.put<CompanyFiscal>('/company/fiscal', body),
}
