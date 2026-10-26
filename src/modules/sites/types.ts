/** Formatos da API do domínio sites (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Member } from '@/modules/team/types'

export interface Site {
  id: string
  /** Vazio enquanto aguarda o GAM. */
  network_id: string | null
  domain: string
  approval_status: string | null
  status: 'active' | 'archived'
  synced_at: string | null
  /** Cadastrado à mão, o GAM ainda não trouxe. */
  awaiting_gam: boolean
}

export interface SiteListItem extends Site {
  ad_units: number
}

export interface AdUnit {
  id: string
  network_id: string
  parent_id: string | null
  site_id: string | null
  site_manual: boolean
  name: string
  code: string | null
  status: 'active' | 'archived'
  synced_at: string
}

export interface SiteDetail extends Site {
  ad_units: AdUnit[]
  assigned_to: string[] | null
}

export interface SiteMember extends Member {
  via: 'assigned' | 'all'
}
