/** Chamadas da API da Saúde da carteira no painel interno. */

import { api } from '@/lib/api'
import type { ClientHealth, PortfolioHealth, PortfolioHealthSettings } from '@/modules/internal/portfolio_health/types'

export const portfolioHealthService = {
  /** Os números do topo e os clientes, dos piores para os melhores. */
  overview: () => api.get<PortfolioHealth>('/internal/portfolio-health'),
  /** Os cinco sinais e as notas de 30 dias de um cliente. */
  client: (clientId: string) => api.get<ClientHealth>(`/internal/portfolio-health/${clientId}`),
  /** O limite do aviso de queda e a chave da tarefa no HubSpot. */
  settings: () => api.get<PortfolioHealthSettings>('/internal/portfolio-health/settings'),
  /** Muda o limite e a chave. */
  saveSettings: (body: PortfolioHealthSettings) => api.put<PortfolioHealthSettings>('/internal/portfolio-health/settings', body),
}
