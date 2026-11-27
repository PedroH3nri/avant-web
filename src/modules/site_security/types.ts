/** Formatos da API do card Segurança do site (iguais ao dto.py de modules/site_security no avant-api). Datas em ISO 8601 UTC. */

import type { InstallCheck } from '@/modules/install_checks/types'

/** Os sinais que a ad tag manda e o `content_mismatch`, que o servidor calcula. */
export type IntegritySignal = 'overlay' | 'frame' | 'cloaker_script' | 'covered_ad' | 'body_swap' | 'redirect' | 'back_hijack' | 'content_mismatch'

/** Um dia de sinais do site: visitas, quantas tiveram sinal e quantas tiveram os anúncios tirados. */
export interface SiteIntegrityDay {
  day: string
  page_views: number
  flagged: number
  blocked: number
  flagged_percent: number
  signals: Partial<Record<IntegritySignal, number>>
}

/** A suspeita de cloaker aberta no site. */
export interface CloakerAlert {
  opened_at: string
  last_signal_at: string
  page_views: number
  flagged: number
}

/** O card: a última verificação das páginas, os 7 dias de sinais e a suspeita aberta. */
export interface SiteSecurity {
  check: InstallCheck
  days: SiteIntegrityDay[]
  alert: CloakerAlert | null
}
