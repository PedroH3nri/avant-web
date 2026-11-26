/** Chamadas da API do HubSpot no painel interno: a sincronia, os cards, a saúde, as tarefas do gerente e a Prospecção. */

import { api } from '@/lib/api'
import type { HubspotClientCards, HubspotNetworkCards, HubspotProspectPage, HubspotRun, HubspotSettings, HubspotSettingsInput, HubspotSiteCards, HubspotStatus, HubspotTask } from '@/modules/internal/hubspot/types'

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
  /** As propriedades de saúde e as regras das tarefas do gerente. */
  settings: () => api.get<HubspotSettings>('/internal/hubspot/settings'),
  /** Troca as propriedades desligadas e as regras dos avisos. */
  saveSettings: (body: HubspotSettingsInput) => api.put<HubspotSettings>('/internal/hubspot/settings', body),
  /** As últimas tarefas que o Avant criou para os gerentes. */
  tasks: () => api.get<HubspotTask[]>('/internal/hubspot/tasks'),
  /** Uma página dos contatos do HubSpot que ainda não são clientes, nas fases escolhidas. */
  prospects: (stages: string[], query: string, after: string | null) => {
    const params = new URLSearchParams()
    stages.forEach((stage) => params.append('stage', stage))
    if (query) params.set('q', query)
    if (after) params.set('after', after)
    const search = params.toString()
    return api.get<HubspotProspectPage>(`/internal/hubspot/prospects${search ? `?${search}` : ''}`)
  },
}
