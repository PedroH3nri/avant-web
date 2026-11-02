/** Chamadas da API dos dashboards. */

import { api, type Query } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { Dashboard, DashboardFilters, DashboardInput, DashboardPage, DashboardTemplate, HomeDashboard } from '@/modules/dashboards/types'
import type { ReportResult } from '@/modules/reports/types'

/** Serviço dos dashboards. */
export const dashboardService = {
  /** Uma página dos dashboards que a pessoa vê, o padrão primeiro, com a busca (`q`). */
  list: (query?: Query) => api.get<DashboardPage>('/dashboards', query),
  /** Um dashboard. */
  get: (id: string) => api.get<Dashboard>(`/dashboards/${id}`),
  /** O dashboard que abre para a pessoa (o escolhido, senão o padrão); sem nenhum, o primeiro modelo. */
  home: () => api.get<HomeDashboard>('/dashboards/home'),
  /** Escolhe o dashboard que abre para a pessoa; vazio volta para o padrão. */
  choose: (id: string | null) => api.put<void>('/dashboards/home', { dashboard_id: id }),
  /** Marca o dashboard padrão da Empresa; vazio tira o padrão. */
  setDefault: (id: string | null) => api.put<void>('/dashboards/default', { dashboard_id: id }),
  /** Salva um dashboard novo. */
  create: (input: DashboardInput) => api.post<Dashboard>('/dashboards', input),
  /** Troca tudo do dashboard, menos o dono. */
  update: (id: string, input: DashboardInput) => api.put<Dashboard>(`/dashboards/${id}`, input),
  /** Apaga um dashboard. */
  remove: (id: string) => api.delete(`/dashboards/${id}`),
  /** Cópia privada de quem duplica. */
  duplicate: (id: string) => api.post<Dashboard>(`/dashboards/${id}/duplicate`, {}),
  /** Os modelos prontos da Empresa ativa. */
  templates: () => api.get<Pick<Items<DashboardTemplate>, 'items'>>('/dashboards/templates'),
  /** Cria um dashboard privado a partir de um modelo. */
  fromTemplate: (key: string) => api.post<Dashboard>(`/dashboards/templates/${key}`, {}),
  /** Roda um widget com os filtros da tela (ou, sem eles, os gravados). */
  run: (id: string, widgetId: string, filters: DashboardFilters | null) =>
    api.post<ReportResult>(`/dashboards/${id}/widgets/${widgetId}/run`, { filters }),
  /** Roda um widget de um modelo pronto, sem salvar nada. */
  runTemplate: (key: string, widgetId: string, filters: DashboardFilters | null) =>
    api.post<ReportResult>(`/dashboards/templates/${key}/widgets/${widgetId}/run`, { filters }),
}
