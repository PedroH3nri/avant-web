/** Chamadas da API da equipe Groone no painel interno. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { Invitation, Member } from '@/modules/team/types'

/** Serviço da equipe Groone. */
export const staffService = {
  /** A equipe Groone. */
  list: () => api.get<Items<Member>>('/internal/staff'),
  /** Convida alguém para a equipe Groone. */
  invite: (email: string, roleId: string | null) => api.post<Invitation>('/internal/staff/invitations', { email, role_id: roleId }),
}
