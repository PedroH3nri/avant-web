/** Chamadas da API das pessoas no painel interno. */

import { api } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { Person } from '@/modules/internal/people/types'

/** Serviço das contas das pessoas. */
export const peopleService = {
  /** Busca pessoas por nome ou e-mail. */
  search: (term: string) => api.get<Items<Person>>('/internal/users', { q: term }),
  /** Desativa, reativa ou zera o 2FA de uma pessoa. */
  act: (userId: string, action: 'disable' | 'enable' | 'reset-mfa') => api.post(`/internal/users/${userId}/${action}`),
}
