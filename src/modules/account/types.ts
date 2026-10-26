/** Formatos da API do domínio account (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { UserRef } from '@/lib/types'

export interface AuthSession {
  id: string
  created_at: string
  last_seen_at: string
  expires_at: string
  user_agent: string | null
  ip: string | null
  current: boolean
}

export interface GoogleStatus {
  available: boolean
  linked: boolean
}

export interface MfaSetup {
  secret: string
  uri: string
}

export interface RecoveryCodes {
  recovery_codes: string[]
}

export interface ApiKey {
  id: string
  name: string
  prefix: string
  permissions: string[]
  owner: UserRef
  created_at: string
  expires_at: string
  last_used_at: string | null
  revoked_at: string | null
}

export interface ApiKeyCreated extends ApiKey {
  token: string
}
