/** Chamadas da API de login, sessão, senha esquecida e aceite de convite. */

import { api } from '@/lib/api'
import type { Me } from '@/lib/types'
import type { InvitationPreview, LoginResult } from '@/modules/auth/types'

/** Serviço de autenticação: a única porta das telas de entrada para a API. */
export const authService = {
  /** A pessoa da sessão atual. */
  me: () => api.get<Me>('/auth/me'),
  /** Entra com e-mail e senha. */
  login: (email: string, password: string) => api.post<LoginResult>('/auth/login', { email, password }),
  /** Confere o código do 2FA e completa o login. */
  verifyMfa: (code: string) => api.post<Me>('/auth/mfa/verify', { code }),
  /** Encerra a sessão atual. */
  logout: () => api.post('/auth/logout'),
  /** Troca a Empresa ativa da sessão. */
  switchCompany: (companyId: string) => api.post<Me>('/auth/me/active-company', { company_id: companyId }),
  /** Pede o link de redefinição de senha. */
  forgotPassword: (email: string) => api.post('/auth/password/forgot', { email }),
  /** Troca a senha pelo link recebido por e-mail. */
  resetPassword: (body: { token: string; password: string; mfa_code?: string | null }) => api.post('/auth/password/reset', body),
  /** O convite antes do aceite. */
  invitation: (token: string) => api.get<InvitationPreview>(`/auth/invitations/${encodeURIComponent(token)}`),
  /** Aceita o convite com a conta logada ou criando uma conta nova. */
  acceptInvitation: (token: string, body: unknown) => api.post<Me>(`/auth/invitations/${encodeURIComponent(token)}/accept`, body),
}
