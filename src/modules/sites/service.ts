/** Chamadas da API dos sites e ad units. */

import { api, type Query } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { AdUnit, SiteDetail, SiteListItem, SiteMember } from '@/modules/sites/types'

/** Serviço do inventário da Empresa ativa. */
export const siteService = {
  /** Os sites que a pessoa enxerga, com filtros. */
  list: (query?: Query) => api.get<Items<SiteListItem>>('/sites', query),
  /** Um site com os ad units. */
  show: (siteId: string) => api.get<SiteDetail>(`/sites/${siteId}`),
  /** Cadastra um site pelo domínio, aguardando o GAM. */
  create: (domain: string) => api.post<SiteListItem>('/sites', { domain }),
  /** Apaga um site que ainda aguarda o GAM. */
  remove: (siteId: string) => api.delete(`/sites/${siteId}`),
  /** Quem vê o site. */
  members: (siteId: string) => api.get<Items<SiteMember>>(`/sites/${siteId}/members`),
  /** Os ad units, com filtros. */
  adUnits: (query?: Query) => api.get<Items<AdUnit>>('/ad-units', query),
  /** Liga ou desliga um ad unit de um site. */
  linkAdUnit: (adUnitId: string, body: unknown) => api.patch<AdUnit>(`/ad-units/${adUnitId}`, body),
}
