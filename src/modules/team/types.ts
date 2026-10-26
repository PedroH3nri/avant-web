/** Formatos da API do domínio team (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Localized, SiteScope, UserRef } from '@/lib/types'

export type MembershipStatus = 'active' | 'suspended' | 'removed'

export interface RoleRef {
  id: string
  key: string
  name: Localized
}

export interface Member {
  /** O id é o da Membership. */
  id: string
  user: UserRef
  role: RoleRef | null
  status: MembershipStatus
  is_owner: boolean
  joined_at: string
}

export interface Invitation {
  id: string
  email: string
  role_id: string | null
  status: 'pending' | 'accepted' | 'canceled' | 'expired'
  expires_at: string
  invited_by: string
}

export interface Role {
  id: string
  key: string
  name: Localized
  permissions: string[]
  site_scope: SiteScope
  is_system: boolean
  member_count: number
}

export interface Permission {
  key: string
  group: string
  name: Localized
}

export interface DirectPermission {
  permission: string
  effect: 'allow' | 'deny'
  expires_at: string | null
}

export interface MemberDetail extends Member {
  permissions: DirectPermission[]
}
