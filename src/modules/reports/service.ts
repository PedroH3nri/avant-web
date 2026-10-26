/** Chamadas da API de métricas e relatórios. */

import { api } from '@/lib/api'
import type { MetricCatalog, ReportResult } from '@/modules/reports/types'

/** Serviço dos relatórios. */
export const reportService = {
  /** Métricas e dimensões que a pessoa pode pedir. */
  catalog: () => api.get<MetricCatalog>('/metrics/catalog'),
  /** Roda uma consulta sem salvar. */
  query: (body: unknown) => api.post<ReportResult>('/reports/query', body),
}
