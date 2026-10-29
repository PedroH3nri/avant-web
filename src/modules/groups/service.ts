/** Chamadas da API dos grupos de funcionários da Empresa ativa. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { Group, GroupInput } from '@/modules/groups/types'

/** Serviço dos grupos da Empresa ativa. */
export const groupService = {
  /** Uma página dos grupos, do mais novo ao mais antigo, com as pessoas de cada um. */
  list: (query?: Query) => api.get<Page<Group>>('/groups', query),
  /** Todos os grupos, para as telas que juntam pessoas e grupos. */
  options: () => api.get<Items<Group>>('/groups/options'),
  /** Um grupo com as pessoas dele. */
  show: (groupId: string) => api.get<Group>(`/groups/${groupId}`),
  /** Cria um grupo com pelo menos uma pessoa. */
  create: (body: GroupInput) => api.post<Group>('/groups', body),
  /** Troca o nome e a descrição do grupo. */
  update: (groupId: string, body: { name: string; description: string | null }) => api.patch<Group>(`/groups/${groupId}`, body),
  /** Exclui o grupo. */
  remove: (groupId: string) => api.delete(`/groups/${groupId}`),
  /** Põe pessoas sem grupo no grupo. */
  addMembers: (groupId: string, membershipIds: string[]) => api.post<Group>(`/groups/${groupId}/members`, { membership_ids: membershipIds }),
  /** Tira uma pessoa do grupo; a última não sai. */
  removeMember: (groupId: string, membershipId: string) => api.delete<Group>(`/groups/${groupId}/members/${membershipId}`),
}
