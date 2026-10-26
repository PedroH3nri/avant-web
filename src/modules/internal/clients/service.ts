/** Chamadas da API dos clientes no painel interno. */

import { api, type Query } from '@/lib/api'
import type { Items } from '@/lib/types'
import type { AuditEntry, Client, ClientDetail, ClientMember, OwnerInvitation } from '@/modules/internal/clients/types'

/** Serviço dos clientes, das equipes deles e dos convites de dono. */
export const clientService = {
  /** As Empresas cliente, com busca. */
  list: (query?: Query) => api.get<Items<Client>>('/internal/clients', query),
  /** Uma Empresa cliente com membros e convites. */
  show: (companyId: string) => api.get<ClientDetail>(`/internal/clients/${companyId}`),
  /** Cadastra um cliente pendente. */
  create: (body: unknown) => api.post<Client>('/internal/clients', body),
  /** Muda nome, vagas ou cadastro de um cliente. */
  update: (companyId: string, body: unknown) => api.patch<Client>(`/internal/clients/${companyId}`, body),
  /** Troca a situação do cliente. */
  setStatus: (companyId: string, status: string) => api.put(`/internal/clients/${companyId}/status`, { status }),
  /** Passa a posse para outro membro. */
  changeOwner: (companyId: string, membershipId: string) => api.post(`/internal/clients/${companyId}/owner`, { membership_id: membershipId }),
  /** Uma página da auditoria do cliente. */
  audit: (companyId: string, query: Query) => api.get<Items<AuditEntry>>(`/internal/clients/${companyId}/audit`, query),
  /** As pessoas das equipes das Empresas cliente. */
  teams: (query?: Query) => api.get<Items<ClientMember>>('/internal/teams', query),
  /** Envia o convite de dono. */
  inviteOwner: (companyId: string) => api.post<OwnerInvitation>(`/internal/clients/${companyId}/owner-invitation`),
  /** Os convites de dono pendentes e vencidos. */
  ownerInvitations: () => api.get<Items<OwnerInvitation>>('/internal/owner-invitations'),
  /** Reenvia um convite de dono. */
  resendOwnerInvitation: (invitationId: string) => api.post<OwnerInvitation>(`/internal/owner-invitations/${invitationId}/resend`),
  /** Cancela um convite de dono. */
  cancelOwnerInvitation: (invitationId: string) => api.delete(`/internal/owner-invitations/${invitationId}`),
}
