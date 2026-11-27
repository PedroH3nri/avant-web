/** Chamadas da API do Comparativo com a rede. */

import { api } from '@/lib/api'
import type { SiteBenchmark } from '@/modules/benchmark/types'

export const benchmarkService = {
  /** O site contra o grupo do país pedido (ou o de mais receita quando não vem país). */
  site: (siteId: string, country?: string | null) =>
    api.get<SiteBenchmark>('/benchmark', country ? { site_id: siteId, country } : { site_id: siteId }),
}
