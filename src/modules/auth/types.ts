/** Formatos da API do domínio auth (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { Localized, Me } from '@/lib/types'

export interface LoginResult {
  mfa_required: boolean
  me: Me | null
}

export interface InvitationPreview {
  kind: 'owner' | 'team'
  email: string
  status: 'pending' | 'accepted' | 'canceled' | 'expired'
  expires_at: string
  company_name: string | null
  role_name: Localized | null
  account_exists: boolean
}
