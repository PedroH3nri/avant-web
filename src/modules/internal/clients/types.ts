/** Formatos da API do domínio internal/clients (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Lang, UserRef } from '@/lib/types'
import type { CompanyStatus, FiscalData } from '@/modules/company/types'
import type { RevenueStatus } from '@/modules/revenue/types'
import type { Invitation, Member } from '@/modules/team/types'

/** O que a equipe Groone informa no cadastro do cliente. */
export interface ClientProfileInput {
  first_name: string
  last_name: string
  email: string
  phone_ddi: string | null
  phone: string | null
  locale: Lang
  account_manager_id: string | null
  referred_by_client_id: string | null
  /** Texto decimal; sem valor, a indicação vale 2%. */
  referral_percentage: string | null
  notes: string | null
}

export interface ClientProfile extends ClientProfileInput {
  fiscal: FiscalData | null
}

/** O cliente nas listas inteiras (`/internal/clients/options`). */
export interface ClientOption extends Pick<Client, 'id' | 'name' | 'status'> {
  /** A Empresa do cliente; vazia até ele criar. */
  company_id: string | null
}

/** A Empresa do cliente, quando ele já criou. */
export interface ClientCompanyRef {
  id: string
  name: string
  slug: string
  is_internal: boolean
}

/** Network code guardado no cliente que ainda não criou a Empresa. */
export interface ReservedNetwork {
  id: string
  client_id: string
  network_code: string
  created_at: string
}

export interface Client {
  /** O id do cliente; os clientes de antes da separação têm o mesmo id da Empresa. */
  id: string
  name: string
  status: CompanyStatus
  seat_limit: number
  /** Pessoas mais convites pendentes. */
  seats_used: number
  /** A conta do cliente; vazia enquanto ninguém aceitou o convite. */
  owner: UserRef | null
  /** Vazia até o cliente criar a Empresa dele. */
  company: ClientCompanyRef | null
  profile: ClientProfile
  /** Vazio sem imagem: o painel mostra a inicial do nome. */
  image_url: string | null
  /** Só na lista; vazio sem receita nos últimos 60 dias. */
  revenue_status?: RevenueStatus | null
  /** Último acesso da conta do cliente; vazio se ele nunca entrou. */
  last_access_at?: string | null
}

/** Membro da Empresa cliente com o último acesso da pessoa. */
export interface CompanyMember extends Member {
  last_access_at?: string | null
}

export interface ClientDetail extends Client {
  members: CompanyMember[]
  invitations: Invitation[]
  reserved_networks: ReservedNetwork[]
}

export interface OwnerInvitation {
  id: string
  /** Vazio nos convites antigos, de antes do cadastro do cliente. */
  client_id: string | null
  /** Só nos convites de clientes que já tinham Empresa. */
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

export interface NotePerson {
  id: string
  name: string
}

export interface ClientNote {
  id: string
  message: string
  created_at: string
  author: NotePerson | null
  edited_at: string | null
  editor: NotePerson | null
  editable: boolean
}
