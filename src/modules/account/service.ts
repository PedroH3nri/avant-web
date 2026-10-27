/** Chamadas da API da página Minha conta: senha, sessões, 2FA, Google, chaves de API, aparência e foto. */

import { api } from '@/lib/api'
import type { AccentId, Items, Theme, UserRef } from '@/lib/types'
import type { ApiKey, ApiKeyCreated, AuthSession, GoogleStatus, MfaSetup, RecoveryCodes } from '@/modules/account/types'

/** Serviço da conta da pessoa. */
export const accountService = {
  /** Troca a senha mantendo a sessão atual. */
  changePassword: (body: { current_password: string; new_password: string }) => api.post('/auth/password/change', body),
  /** As sessões abertas da pessoa. */
  sessions: () => api.get<AuthSession[]>('/auth/sessions'),
  /** Encerra uma sessão. */
  revokeSession: (sessionId: string) => api.delete(`/auth/sessions/${sessionId}`),
  /** Encerra todas as sessões menos a atual. */
  revokeOtherSessions: () => api.post<{ revoked: number }>('/auth/sessions/revoke-others'),
  /** Se o login com Google está disponível e ligado. */
  googleStatus: () => api.get<GoogleStatus>('/auth/google'),
  /** Desliga a conta Google. */
  unlinkGoogle: () => api.delete('/auth/google'),
  /** Começa a configurar o 2FA. */
  beginMfa: () => api.post<MfaSetup>('/auth/mfa/setup'),
  /** Liga o 2FA com o primeiro código. */
  confirmMfa: (body: { code: string }) => api.post<RecoveryCodes>('/auth/mfa/confirm', body),
  /** Gera códigos de recuperação novos. */
  newRecoveryCodes: (body: { code: string }) => api.post<RecoveryCodes>('/auth/mfa/recovery-codes', body),
  /** Desliga o 2FA. */
  disableMfa: (body: { code: string }) => api.delete('/auth/mfa', body),
  /** As chaves de API que a pessoa enxerga. */
  apiKeys: () => api.get<Items<ApiKey>>('/api-keys'),
  /** Cria uma chave de API; o token volta só nesta resposta. */
  createApiKey: (body: unknown) => api.post<ApiKeyCreated>('/api-keys', body),
  /** Revoga uma chave de API. */
  revokeApiKey: (keyId: string) => api.delete(`/api-keys/${keyId}`),
  /** Salva o tema e a cor que a pessoa escolheu. */
  appearance: (body: { theme?: Theme; accent?: AccentId }) => api.patch<{ theme: Theme; accent: AccentId }>('/auth/appearance', body),
  /** Envia a foto de perfil (PNG, JPEG ou WebP até 2 MB). */
  setImage: (file: File) => api.putFile<UserRef>('/auth/me/image', file),
  /** Tira a foto de perfil. */
  removeImage: () => api.delete<UserRef>('/auth/me/image'),
}
