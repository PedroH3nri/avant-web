/** Chamadas da API dos dashboards. */

import { api, type Query } from '@/lib/api'
import type { Items } from '@/lib/types'
import type {
  Dashboard,
  DashboardFilters,
  DashboardInput,
  DashboardRun,
  DashboardPage,
  DashboardTemplate,
  HomeDashboard,
  ManagedTemplate,
  TemplateInput,
  TemplateRoles,
} from '@/modules/dashboards/types'
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
  /** Os modelos prontos que a pessoa vê, pelo público da Empresa e pelo papel. */
  templates: () => api.get<Pick<Items<DashboardTemplate>, 'items'>>('/dashboards/templates'),
  /** Cria um dashboard privado a partir de um modelo. */
  fromTemplate: (id: string) => api.post<Dashboard>(`/dashboards/templates/${id}`, {}),
  /** Roda todos os widgets com consulta numa requisição, com os filtros da tela (ou os gravados). */
  runAll: (id: string, filters: DashboardFilters | null) => api.post<DashboardRun>(`/dashboards/${id}/run`, { filters }),
  /** Roda todos os widgets de um modelo pronto numa requisição, sem salvar nada. */
  runTemplateAll: (id: string, filters: DashboardFilters | null) => api.post<DashboardRun>(`/dashboards/templates/${id}/run`, { filters }),
  /** Roda um widget com os filtros da tela (ou, sem eles, os gravados). */
  run: (id: string, widgetId: string, filters: DashboardFilters | null) =>
    api.post<ReportResult>(`/dashboards/${id}/widgets/${widgetId}/run`, { filters }),
  /** Roda um widget de um modelo pronto, sem salvar nada. */
  runTemplate: (id: string, widgetId: string, filters: DashboardFilters | null) =>
    api.post<ReportResult>(`/dashboards/templates/${id}/widgets/${widgetId}/run`, { filters }),
}

/** Gestão dos modelos prontos no painel interno (``internal.dashboard_templates.manage``). */
export const templateService = {
  /** Todos os modelos, os da Groone primeiro e o de início no topo de cada público. */
  list: () => api.get<Pick<Items<ManagedTemplate>, 'items'>>('/internal/dashboard-templates'),
  /** Um modelo, para editar. */
  get: (id: string) => api.get<ManagedTemplate>(`/internal/dashboard-templates/${id}`),
  /** Os papéis que podem limitar quem vê um modelo. */
  roles: () => api.get<TemplateRoles>('/internal/dashboard-templates/roles'),
  /** Salva um modelo novo. */
  create: (input: TemplateInput) => api.post<ManagedTemplate>('/internal/dashboard-templates', input),
  /** Troca tudo do modelo; os dashboards já copiados dele não mudam. */
  update: (id: string, input: TemplateInput) => api.put<ManagedTemplate>(`/internal/dashboard-templates/${id}`, input),
  /** Apaga um modelo. */
  remove: (id: string) => api.delete(`/internal/dashboard-templates/${id}`),
  /** Marca o modelo de início do público dele. */
  setHome: (id: string) => api.put<ManagedTemplate>(`/internal/dashboard-templates/${id}/home`, {}),
}
