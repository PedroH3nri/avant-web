/** Chamadas da API dos sites e ad units. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { AdUnit, SiteDetail, SiteListItem, SiteMember } from '@/modules/sites/types'

/** Serviço do inventário da Empresa ativa. */
export const siteService = {
  /** Uma página dos sites que a pessoa enxerga, o mais recente primeiro, com filtros. */
  list: (query?: Query) => api.get<Page<SiteListItem>>('/sites', query),
  /** Todos os sites ativos que a pessoa enxerga, para seletores. */
  options: () => api.get<Items<SiteListItem>>('/sites/options'),
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
  /** Uma página dos ad units sem site, o mais recente primeiro. */
  unlinked: (query?: Query) => api.get<Page<AdUnit>>('/ad-units/unlinked', query),
  /** Liga ou desliga um ad unit de um site. */
  linkAdUnit: (adUnitId: string, body: unknown) => api.patch<AdUnit>(`/ad-units/${adUnitId}`, body),
}
