/** Chamadas da API das networks e dos sites de todos os clientes, no painel interno. */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { ClientNetwork, ClientSite } from '@/modules/internal/inventory/types'

/** Serviço das networks e dos sites dos clientes. */
export const clientInventoryService = {
  /** Uma página das networks dos clientes, a mais recente primeiro, com busca por nome ou código. */
  networks: (query?: Query) => api.get<Page<ClientNetwork>>('/internal/networks', query),
  /** Uma página dos sites dos clientes, o mais recente primeiro, com busca pelo domínio. */
  sites: (query?: Query) => api.get<Page<ClientSite>>('/internal/sites', query),
}
