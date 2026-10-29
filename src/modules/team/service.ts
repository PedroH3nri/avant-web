/** Chamadas da API da equipe: membros, convites, papéis e permissões. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { Site } from '@/modules/sites/types'
import type { Invitation, Member, MemberDetail, Permission, Role } from '@/modules/team/types'

/** Serviço da equipe da Empresa ativa. */
export const teamService = {
  /** Os membros da Empresa ativa. */
  members: (query?: Query) => api.get<Page<Member>>('/members', query),
  /** A equipe inteira (sem os removidos), para seletores e telas que juntam pessoas. */
  memberOptions: () => api.get<Items<Member>>('/members/options'),
  /** Um membro com papel e permissões diretas. */
  member: (membershipId: string) => api.get<MemberDetail>(`/members/${membershipId}`),
  /** Muda o papel ou a situação de um membro. */
  updateMember: (membershipId: string, body: unknown) => api.patch<Member>(`/members/${membershipId}`, body),
  /** Remove um membro. */
  removeMember: (membershipId: string) => api.delete(`/members/${membershipId}`),
  /** Troca as permissões diretas de um membro. */
  setPermissions: (membershipId: string, permissions: unknown) => api.put<MemberDetail>(`/members/${membershipId}/permissions`, { permissions }),
  /** Os sites atribuídos a um membro. */
  memberSites: (membershipId: string) => api.get<Items<Site>>(`/members/${membershipId}/sites`),
  /** Troca a lista inteira de sites atribuídos ao membro. */
  assignSites: (membershipId: string, siteIds: string[]) => api.put<Items<Site>>(`/members/${membershipId}/sites`, { site_ids: siteIds }),
  /** Os convites pendentes. */
  invitations: () => api.get<Items<Invitation>>('/invitations'),
  /** Convida alguém para a equipe. */
  invite: (email: string, roleId: string | null) => api.post<Invitation>('/invitations', { email, role_id: roleId }),
  /** Reenvia um convite com link novo. */
  resendInvitation: (invitationId: string) => api.post<Invitation>(`/invitations/${invitationId}/resend`),
  /** Cancela um convite pendente. */
  cancelInvitation: (invitationId: string) => api.delete(`/invitations/${invitationId}`),
  /** Os papéis da Empresa ativa. */
  roles: () => api.get<Items<Role>>('/roles'),
  /** Cria um papel personalizado. */
  createRole: (body: unknown) => api.post<Role>('/roles', body),
  /** Muda um papel personalizado. */
  updateRole: (roleId: string, body: unknown) => api.patch<Role>(`/roles/${roleId}`, body),
  /** Apaga um papel personalizado. */
  deleteRole: (roleId: string) => api.delete(`/roles/${roleId}`),
  /** As permissões que um papel de cliente pode ter. */
  permissions: () => api.get<Items<Permission>>('/permissions'),
}
