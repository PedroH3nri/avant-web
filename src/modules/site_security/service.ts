/** Chamadas da API do card Segurança do site, no painel do cliente e no interno (/internal). */

import { api } from '@/lib/api'
import type { SiteSecurity } from '@/modules/site_security/types'

/** O card de um dos painéis: o interno lê os sites dos clientes. */
export function siteSecurityService(internal: boolean) {
  const base = internal ? '/internal' : ''
  return {
    /** A verificação, os sinais dos últimos 7 dias e a suspeita aberta do site. */
    show: (siteId: string) => api.get<SiteSecurity>(`${base}/sites/${siteId}/security`),
  }
}
