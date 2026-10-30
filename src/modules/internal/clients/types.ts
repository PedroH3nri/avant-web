/** Formatos da API do domínio internal/clients (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Lang, UserRef } from '@/lib/types'
import type { CompanyStatus, FiscalData } from '@/modules/company/types'
import type { Invitation, Member } from '@/modules/team/types'

/** Pessoa da equipe de uma Empresa cliente, vista pela equipe Groone (GET /internal/teams). */
export interface ClientMember extends Member {
  company: { id: string; name: string; slug: string; is_internal: boolean }
}

/** O que a equipe Groone informa no cadastro do cliente. */
export interface ClientProfileInput {
  first_name: string
  last_name: string
  email: string
  phone_ddi: string | null
  phone: string | null
  locale: Lang
  account_manager_id: string | null
  referred_by_company_id: string | null
  /** Texto decimal; sem valor, a indicação vale 2%. */
  referral_percentage: string | null
  notes: string | null
}

export interface ClientProfile extends ClientProfileInput {
  fiscal: FiscalData | null
}

/** O cliente nas listas inteiras (`/internal/clients/options`). */
export type ClientOption = Pick<Client, 'id' | 'name' | 'status'>

export interface Client {
  id: string
  name: string
  slug: string
  status: CompanyStatus
  seat_limit: number
  /** Pessoas mais convites pendentes. */
  seats_used: number
  /** Vazio enquanto ninguém aceitou o convite de dono. */
  owner: UserRef | null
  profile: ClientProfile | null
  /** Vazio sem imagem: o painel mostra a inicial do nome. */
  image_url: string | null
}

export interface ClientDetail extends Client {
  members: Member[]
  invitations: Invitation[]
}

export interface OwnerInvitation {
  id: string
  /** Vazio só nos convites antigos, de antes do cadastro do cliente. */
  company_id: string | null
  email: string
  status: Invitation['status']
  expires_at: string
  invited_by: string
}

export interface AuditEntry {
  id: string
  action: string
  actor_kind: string
  actor_user_id: string | null
  target_type: string | null
  target_id: string | null
  data: Record<string, unknown>
  created_at: string
}

/** O que a troca de responsável faria com os prazos (``/internal/clients/{id}/manager-change``). */
export interface ManagerChange {
  continues: number
  stops: number
  arrives: number
}
