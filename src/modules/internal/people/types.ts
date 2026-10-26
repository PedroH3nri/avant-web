/** Formatos da API do domínio internal/people (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { UserRef } from '@/lib/types'

export interface Person {
  user: UserRef
  status: 'active' | 'disabled'
  mfa_enabled: boolean
  last_login_at: string | null
  companies: { id: string; name: string; slug: string; is_internal: boolean }[]
}
