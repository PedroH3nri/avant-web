/** Chamadas da API dos rewards, no painel do cliente (/rewards) e no interno (/internal/rewards). */

import { api, download, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import { clientInventoryService } from '@/modules/internal/inventory/service'
import { saveFile } from '@/lib/utils'
import type { Reward, RewardAdUnitGroup, RewardInput, RewardLead, RewardMetrics, RewardSiteOption } from '@/modules/rewards/types'
import { siteService } from '@/modules/sites/service'

/** Os rewards de um dos painéis: o interno vê os de todos os clientes. */
export function rewardService(internal: boolean) {
  const base = internal ? '/internal' : ''
  return {
    /** Uma página dos rewards, o mais novo primeiro, com busca (`q`), site e os apagados (`deleted`). */
    list: (query?: Query) => api.get<Page<Reward>>(`${base}/rewards`, query),
    /** Um reward com as perguntas. */
    show: (id: string) => api.get<Reward>(`${base}/rewards/${id}`),
    /** Cria o reward de uma página. */
    create: (input: RewardInput) => api.post<Reward>(`${base}/rewards`, input),
    /** Troca tudo do reward; perguntas sem id são novas e as que sumiram saem. */
    update: (id: string, input: RewardInput) => api.put<Reward>(`${base}/rewards/${id}`, input),
    /** Ativa ou pausa. */
    setActive: (id: string, active: boolean) => api.patch<Reward>(`${base}/rewards/${id}`, { active }),
    /** Apaga o reward; as métricas e os contatos continuam na lista dos apagados. */
    remove: (id: string) => api.delete(`${base}/rewards/${id}`),
    /** Troca o ícone pela imagem escolhida. */
    setIcon: (id: string, file: File) => api.putFile<Reward>(`${base}/rewards/${id}/icon`, file),
    /** Os ad units de reward do site agrupados pelo dia em que foram criados. */
    adUnits: (siteId: string) => api.get<RewardAdUnitGroup[]>(`${base}/sites/${siteId}/reward-ad-units`),
    /** As métricas do período (`from` e `to`). */
    metrics: (id: string, query?: Query) => api.get<RewardMetrics>(`${base}/rewards/${id}/metrics`, query),
    /** Uma página dos contatos, com busca (`q`) e filtro por resposta (`question_id` e `answer`). */
    leads: (id: string, query?: Query) => api.get<Page<RewardLead>>(`${base}/rewards/${id}/leads`, query),
    /** Baixa os contatos em CSV com o mesmo filtro. */
    async exportLeads(id: string, query?: Query) {
      const file = await download(`${base}/rewards/${id}/leads/export`, query)
      saveFile(file.blob, file.name)
    },
    /** Apaga um contato (pedido do titular, por exemplo). */
    removeLead: (id: string, leadId: string) => api.delete(`${base}/rewards/${id}/leads/${leadId}`),
    /** Os sites que podem ter reward: os da Empresa, ou uma busca nos sites de todos os clientes. */
    async sites(query: string): Promise<RewardSiteOption[]> {
      if (internal) {
        const found = await clientInventoryService.sites({ q: query })
        return found.items.map((site) => ({ id: site.id, domain: site.domain, client: site.client.name }))
      }
      const found: Items<{ id: string; domain: string }> = await siteService.options()
      return found.items.map((site) => ({ id: site.id, domain: site.domain, client: null }))
    },
  }
}

export type RewardService = ReturnType<typeof rewardService>
