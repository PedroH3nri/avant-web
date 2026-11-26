/** Chamadas da API do HubSpot no painel interno: a sincronia e os cards do cliente, da network e do site. */

import { api } from '@/lib/api'
import type { HubspotClientCards, HubspotNetworkCards, HubspotRun, HubspotSiteCards, HubspotStatus } from '@/modules/internal/hubspot/types'

export const hubspotService = {
  /** Quantos registros de cada tipo já foram, os que falharam e a última sincronia. */
  status: () => api.get<HubspotStatus>('/internal/hubspot'),
  /** Pede uma sincronia agora; o worker pega no próximo minuto. */
  sync: () => api.post<HubspotRun>('/internal/hubspot/sync'),
  /** O contato do cliente no HubSpot, lido na hora. */
  client: (clientId: string) => api.get<HubspotClientCards>(`/internal/clients/${clientId}/hubspot`),
  /** A empresa e o negócio da network no HubSpot, lidos na hora. */
  network: (networkId: string) => api.get<HubspotNetworkCards>(`/internal/networks/${networkId}/hubspot`),
  /** O site personalizado no HubSpot, lido na hora. */
  site: (siteId: string) => api.get<HubspotSiteCards>(`/internal/sites/${siteId}/hubspot`),
}
