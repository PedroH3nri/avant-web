/** Chamadas da API das invoices da equipe Groone, do catálogo de serviços e dos dados de recebimento. */

import { API, api } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { FiscalData } from '@/modules/company/types'
import type {
  AvailableMonth,
  Invoice,
  InvoiceFilters,
  InvoiceServiceInput,
  InvoiceServiceItem,
  InvoiceServiceOption,
  InvoiceSummary,
  PayeeDetails,
  ServiceItemInput,
} from '@/modules/internal/invoices/types'

/** Endereço do PDF da invoice, para baixar direto pelo navegador. */
export function invoicePdfUrl(invoiceId: string): string {
  return `${API}/internal/invoices/${invoiceId}/pdf`
}

/** Serviço das invoices: dados de recebimento, catálogo e o ciclo da invoice. */
export const invoiceService = {
  /** Os meus dados de recebimento, ou nada se ainda não preenchi. */
  payeeDetails: () => api.get<PayeeDetails | null>('/internal/payment-details'),
  /** Grava os meus dados de recebimento. */
  savePayeeDetails: (body: FiscalData) => api.put<PayeeDetails>('/internal/payment-details', body),
  /** Uma página do catálogo de serviços. */
  services: (page: number) => api.get<Page<InvoiceServiceItem>>('/internal/invoice-services', { page }),
  /** Todos os serviços, leves, para o seletor da linha. */
  serviceOptions: () => api.get<Items<InvoiceServiceOption>>('/internal/invoice-services/options'),
  /** Cria um serviço no catálogo. */
  createService: (body: InvoiceServiceInput) => api.post<InvoiceServiceItem>('/internal/invoice-services', body),
  /** Muda um serviço do catálogo. */
  updateService: (serviceId: string, body: InvoiceServiceInput) => api.put<InvoiceServiceItem>(`/internal/invoice-services/${serviceId}`, body),
  /** Exclui um serviço do catálogo. */
  deleteService: (serviceId: string) => api.delete(`/internal/invoice-services/${serviceId}`),
  /** As minhas invoices, 10 por página. */
  mine: (page: number) => api.get<Page<InvoiceSummary>>('/internal/invoices/mine', { page }),
  /** Os meus meses com a comissão validada e ainda sem invoice. */
  availableMonths: () => api.get<Items<AvailableMonth>>('/internal/invoices/mine/available-months'),
  /** Cria a invoice do mês (``AAAA-MM``). */
  create: (month: string) => api.post<Invoice>('/internal/invoices', { month }),
  /** As invoices da equipe, com os filtros. */
  team: (filters: InvoiceFilters) => api.get<Page<InvoiceSummary>>('/internal/invoices', { ...filters }),
  /** Uma invoice inteira. */
  get: (invoiceId: string) => api.get<Invoice>(`/internal/invoices/${invoiceId}`),
  /** Exclui o meu rascunho. */
  remove: (invoiceId: string) => api.delete(`/internal/invoices/${invoiceId}`),
  /** Soma uma linha de serviço ao meu rascunho. */
  addItem: (invoiceId: string, body: ServiceItemInput) => api.post<Invoice>(`/internal/invoices/${invoiceId}/items`, body),
  /** Muda uma linha de serviço do meu rascunho. */
  updateItem: (invoiceId: string, itemId: string, body: ServiceItemInput) => api.put<Invoice>(`/internal/invoices/${invoiceId}/items/${itemId}`, body),
  /** Tira uma linha de serviço do meu rascunho. */
  removeItem: (invoiceId: string, itemId: string) => api.delete<Invoice>(`/internal/invoices/${invoiceId}/items/${itemId}`),
  /** Emite o meu rascunho. */
  issue: (invoiceId: string) => api.post<Invoice>(`/internal/invoices/${invoiceId}/issue`),
  /** Devolve a invoice emitida para rascunho, com o motivo. */
  returnToDraft: (invoiceId: string, reason: string) => api.post<Invoice>(`/internal/invoices/${invoiceId}/return`, { reason }),
  /** Confirma o pagamento da invoice emitida. */
  pay: (invoiceId: string) => api.post<Invoice>(`/internal/invoices/${invoiceId}/pay`),
}
