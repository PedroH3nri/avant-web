/** Chamadas da API da equipe Groone no painel interno. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { Invitation, Member } from '@/modules/team/types'

/** Serviço da equipe Groone. */
export const staffService = {
  /** A equipe Groone. */
  list: (query?: Query) => api.get<Page<Member>>('/internal/staff', query),
  /** A equipe Groone inteira (sem os removidos), para os seletores; basta ser da equipe. */
  options: () => api.get<Items<Member>>('/internal/staff/options'),
  /** Convida alguém para a equipe Groone. */
  invite: (email: string, roleId: string | null) => api.post<Invitation>('/internal/staff/invitations', { email, role_id: roleId }),
}
