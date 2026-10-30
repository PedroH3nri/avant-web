/** Chamadas da API de métricas, relatórios salvos e métricas personalizadas. */

import { API, api, type Query } from '@/lib/api'
import type { Items, Lang } from '@/lib/types'
import type {
  CustomMetric,
  CustomMetricCheck,
  CustomMetricCheckInput,
  CustomMetricInput,
  MetricCatalog,
  ReportPage,
  ReportResult,
  ReportTemplate,
  SavedReport,
  SavedReportInput,
} from '@/modules/reports/types'

/** Serviço dos relatórios. */
export const reportService = {
  /** Métricas e dimensões que a pessoa pode pedir. */
  catalog: () => api.get<MetricCatalog>('/metrics/catalog'),
  /** Roda uma consulta sem salvar. */
  query: (body: unknown) => api.post<ReportResult>('/reports/query', body),
  /** Uma página dos relatórios salvos que a pessoa vê, com a aba (`scope`), a busca (`q`) e as contagens. */
  list: (query?: Query) => api.get<ReportPage>('/reports', query),
  /** Os relatórios que a pessoa fixou no topo, na ordem em que fixou. */
  pinned: () => api.get<Pick<Items<SavedReport>, 'items'>>('/reports/pinned'),
  /** Fixa o relatório no topo da lista da pessoa. */
  pin: (id: string) => api.put<void>(`/reports/${id}/pin`, {}),
  /** Solta o relatório fixado. */
  unpin: (id: string) => api.delete(`/reports/${id}/pin`),
  /** Um relatório salvo. */
  get: (id: string) => api.get<SavedReport>(`/reports/${id}`),
  /** Salva um relatório novo. */
  create: (input: SavedReportInput) => api.post<SavedReport>('/reports', input),
  /** Troca tudo do relatório, menos o dono. */
  update: (id: string, input: SavedReportInput) => api.put<SavedReport>(`/reports/${id}`, input),
  /** Apaga um relatório. */
  remove: (id: string) => api.delete(`/reports/${id}`),
  /** Cópia privada de quem duplica. */
  duplicate: (id: string) => api.post<SavedReport>(`/reports/${id}/duplicate`),
  /** Os modelos prontos da Groone. */
  templates: () => api.get<Pick<Items<ReportTemplate>, 'items'>>('/reports/templates'),
  /** Relatório privado novo a partir de um modelo. */
  fromTemplate: (key: string) => api.post<SavedReport>(`/reports/templates/${encodeURIComponent(key)}`),
  /** Roda um relatório salvo na moeda de quem roda. */
  run: (id: string) => api.post<ReportResult>(`/reports/${id}/run`),
}

/** Endereço para baixar o relatório salvo em CSV ou XLSX (a sessão vai pelo cookie). */
export function exportUrl(id: string, format: 'csv' | 'xlsx', locale: Lang): string {
  return `${API}/reports/${id}/export?format=${format}&locale=${locale}`
}

/** Serviço das métricas personalizadas. */
export const customMetricService = {
  /** As métricas personalizadas da Empresa. */
  list: () => api.get<Pick<Items<CustomMetric>, 'items'>>('/custom-metrics'),
  /** Cadastra uma métrica personalizada. */
  create: (input: CustomMetricInput) => api.post<CustomMetric>('/custom-metrics', input),
  /** Troca nome, fórmula, formato, casas e descrição. */
  update: (id: string, input: CustomMetricInput) => api.put<CustomMetric>(`/custom-metrics/${id}`, input),
  /** Apaga uma métrica que nada usa. */
  remove: (id: string) => api.delete(`/custom-metrics/${id}`),
  /** Confere a fórmula sem salvar e, com amostra, calcula a prévia. */
  check: (input: CustomMetricCheckInput) => api.post<CustomMetricCheck>('/custom-metrics/validate', input),
}
