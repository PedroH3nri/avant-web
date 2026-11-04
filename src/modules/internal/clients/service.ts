/** Chamadas da API dos clientes no painel interno. */

import { api, type Query } from '@/lib/api'
import type { Items, Page } from '@/lib/types'
import type { ClientDocument, ClientDocumentsOverview, DocumentKind } from '@/modules/documents/types'
import type { AuditEntry, Client, ClientDetail, ClientMember, ClientNote, ClientOption, ManagerChange, OwnerInvitation } from '@/modules/internal/clients/types'

/** Serviço dos clientes, das equipes deles e dos convites de dono. */
export const clientService = {
  /** Uma página das Empresas cliente, a mais recente primeiro, com busca e situação. */
  list: (query?: Query) => api.get<Page<Client>>('/internal/clients', query),
  /** Todas as Empresas cliente (id, nome e situação), para seletores e as abas. */
  options: () => api.get<Items<ClientOption>>('/internal/clients/options'),
  /** Uma Empresa cliente com membros e convites. */
  show: (companyId: string) => api.get<ClientDetail>(`/internal/clients/${companyId}`),
  /** Cadastra um cliente pendente. */
  create: (body: unknown) => api.post<Client>('/internal/clients', body),
  /** Muda nome, vagas ou cadastro de um cliente. */
  update: (companyId: string, body: unknown) => api.patch<Client>(`/internal/clients/${companyId}`, body),
  /** O que trocar o responsável para ``userId`` faria com os prazos de comissão; não muda nada. */
  managerChange: (companyId: string, userId: string) => api.get<ManagerChange>(`/internal/clients/${companyId}/manager-change`, { user_id: userId }),
  /** Troca a imagem de um cliente pelo arquivo escolhido. */
  setImage: (companyId: string, file: File) => api.putFile<Client>(`/internal/clients/${companyId}/image`, file),
  /** Tira a imagem de um cliente. */
  removeImage: (companyId: string) => api.delete<Client>(`/internal/clients/${companyId}/image`),
  /** Troca a situação do cliente. */
  setStatus: (companyId: string, status: string) => api.put(`/internal/clients/${companyId}/status`, { status }),
  /** Passa a posse para outro membro. */
  changeOwner: (companyId: string, membershipId: string) => api.post(`/internal/clients/${companyId}/owner`, { membership_id: membershipId }),
  /** Uma página numerada da auditoria do cliente, a mais nova primeiro. */
  audit: (companyId: string, query?: Query) => api.get<Page<AuditEntry>>(`/internal/clients/${companyId}/audit`, query),
  /** Uma página das pessoas das equipes das Empresas cliente. */
  teams: (query?: Query) => api.get<Page<ClientMember>>('/internal/teams', query),
  /** Envia o convite de dono. */
  inviteOwner: (companyId: string) => api.post<OwnerInvitation>(`/internal/clients/${companyId}/owner-invitation`),
  /** Uma página dos convites de dono pendentes e vencidos. */
  ownerInvitations: (query?: Query) => api.get<Page<OwnerInvitation>>('/internal/owner-invitations', query),
  /** Reenvia um convite de dono. */
  resendOwnerInvitation: (invitationId: string) => api.post<OwnerInvitation>(`/internal/owner-invitations/${invitationId}/resend`),
  /** Cancela um convite de dono. */
  cancelOwnerInvitation: (invitationId: string) => api.delete(`/internal/owner-invitations/${invitationId}`),
  /** Os documentos do cliente e se ele precisa enviá-los. */
  documents: (companyId: string) => api.get<ClientDocumentsOverview>(`/internal/clients/${companyId}/documents`),
  /** Endereço do download de um documento do cliente (o cookie da sessão vai junto). */
  documentPath: (companyId: string, kind: DocumentKind) => `/internal/clients/${companyId}/documents/${kind}/file`,
  /** Aprova o documento em análise. */
  approveDocument: (companyId: string, kind: DocumentKind) => api.post<ClientDocument>(`/internal/clients/${companyId}/documents/${kind}/approve`),
  /** Recusa o documento com o motivo. */
  rejectDocument: (companyId: string, kind: DocumentKind, reason: string) =>
    api.post<ClientDocument>(`/internal/clients/${companyId}/documents/${kind}/reject`, { reason }),
  /** Uma página das observações do cliente, a mais nova primeiro. */
  notes: (companyId: string, query?: Query) => api.get<Page<ClientNote>>(`/internal/clients/${companyId}/notes`, query),
  /** Escreve uma observação. */
  addNote: (companyId: string, message: string) => api.post(`/internal/clients/${companyId}/notes`, { message }),
  /** Troca o texto de uma observação. */
  editNote: (companyId: string, noteId: string, message: string) => api.patch(`/internal/clients/${companyId}/notes/${noteId}`, { message }),
  /** Apaga uma observação. */
  deleteNote: (companyId: string, noteId: string) => api.delete(`/internal/clients/${companyId}/notes/${noteId}`),
}
