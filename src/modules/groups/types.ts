/** Formatos da API do domínio groups (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

export type GroupStatus = 'active' | 'inactive'

export interface GroupMember {
  /** O id é o da Membership da pessoa na Empresa. */
  membership_id: string
  added_at: string
}

export interface Group {
  id: string
  name: string
  description: string | null
  status: GroupStatus
  members: GroupMember[]
  created_at: string
  updated_at: string
}

export interface GroupInput {
  name: string
  description: string | null
  membership_ids: string[]
}
