/** Chamadas da API das ad tags, no painel do cliente (/ad-tags) e no interno (/internal/ad-tags). */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { AdTag, AdTagDraft, AdTagHealth, AdTagSiteOption, AdTagUnitDay, AdTagVersion } from '@/modules/ad_tags/types'
import { clientInventoryService } from '@/modules/internal/inventory/service'
import { siteService } from '@/modules/sites/service'

/** As ad tags de um dos painéis: o interno vê as de todos os clientes. */
export function adTagService(internal: boolean) {
  const base = internal ? '/internal' : ''
  return {
    /** Uma página das ad tags, a mais nova primeiro, com busca (`q`) e site (`site_id`). */
    list: (query?: Query) => api.get<Page<AdTag>>(`${base}/ad-tags`, query),
    /** Uma ad tag com o rascunho e a versão no ar. */
    show: (id: string) => api.get<AdTag>(`${base}/ad-tags/${id}`),
    /** Cria uma ad tag vazia no site. */
    create: (siteId: string, name: string) => api.post<AdTag>(`${base}/ad-tags`, { site_id: siteId, name }),
    /** Guarda o nome e o rascunho, sem publicar. */
    update: (id: string, name: string, draft: AdTagDraft) => api.put<AdTag>(`${base}/ad-tags/${id}`, { name, draft }),
    /** Pausa ou ativa a tag. */
    setActive: (id: string, active: boolean) => api.patch<AdTag>(`${base}/ad-tags/${id}`, { active }),
    /** Apaga a tag; a chave para de responder. */
    remove: (id: string) => api.delete(`${base}/ad-tags/${id}`),
    /** Publica o rascunho como versão nova. */
    publish: (id: string, note: string | null) => api.post<AdTag>(`${base}/ad-tags/${id}/publish`, { note }),
    /** As versões publicadas, a mais nova primeiro. */
    versions: (id: string) => api.get<AdTagVersion[]>(`${base}/ad-tags/${id}/versions`),
    /** Volta para uma versão antiga, publicada como versão nova. */
    restore: (id: string, number: number) => api.post<AdTag>(`${base}/ad-tags/${id}/versions/${number}/restore`),
    /** A última vez vista e as páginas e blocos por dia nos últimos `days` dias. */
    health: (id: string, days: number) => api.get<AdTagHealth>(`${base}/ad-tags/${id}/health`, { days }),
    /** Os dias com blocos de ad tag no GAM do site, o mais recente primeiro. */
    units: (siteId: string) => api.get<AdTagUnitDay[]>(`${base}/sites/${siteId}/ad-tag-units`),
    /** Os sites em que se pode criar tag: os da Empresa, ou uma busca nos de todos os clientes. */
    async sites(query: string): Promise<AdTagSiteOption[]> {
      if (internal) {
        const found = await clientInventoryService.sites({ q: query })
        return found.items.map((site) => ({ id: site.id, domain: site.domain, client: site.client.name }))
      }
      const found: Items<{ id: string; domain: string }> = await siteService.options()
      return found.items.map((site) => ({ id: site.id, domain: site.domain, client: null }))
    },
  }
}

export type AdTagService = ReturnType<typeof adTagService>
