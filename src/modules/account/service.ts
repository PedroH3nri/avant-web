/** Chamadas da API da página Minha conta: senha, sessões, 2FA, Google, chaves de API, aparência e foto. */

import { api, type Query } from '@/lib/api'
import type { AccentId, Lang, Page, Theme, UserRef } from '@/lib/types'
import type {
  ApiKey,
  ApiKeyCreated,
  Appearance,
  AuthSession,
  CustomTheme,
  CustomThemeInput,
  CustomThemes,
  GoogleStatus,
  MfaSetup,
  RecoveryCodes,
} from '@/modules/account/types'

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
  /** Uma página das chaves de API que a pessoa enxerga. */
  apiKeys: (query?: Query) => api.get<Page<ApiKey>>('/api-keys', query),
  /** Cria uma chave de API; o token volta só nesta resposta. */
  createApiKey: (body: unknown) => api.post<ApiKeyCreated>('/api-keys', body),
  /** Revoga uma chave de API. */
  revokeApiKey: (keyId: string) => api.delete(`/api-keys/${keyId}`),
  /** Salva o tema, a cor e o idioma que a pessoa escolheu. */
  appearance: (body: { theme?: Theme; accent?: AccentId; locale?: Lang; custom_theme_id?: string | null }) =>
    api.patch<Appearance>('/auth/appearance', body),
  /** Os temas personalizados da pessoa e o limite. */
  themes: () => api.get<CustomThemes>('/auth/me/themes'),
  /** Cria um tema personalizado. */
  createTheme: (body: CustomThemeInput) => api.post<CustomTheme>('/auth/me/themes', body),
  /** Troca o nome e as cores de um tema. */
  updateTheme: (themeId: string, body: CustomThemeInput) => api.put<CustomTheme>(`/auth/me/themes/${themeId}`, body),
  /** Apaga um tema; se era o em uso, a conta volta para o do sistema. */
  deleteTheme: (themeId: string) => api.delete(`/auth/me/themes/${themeId}`),
  /** Envia a foto de perfil (PNG, JPEG ou WebP até 2 MB). */
  setImage: (file: File) => api.putFile<UserRef>('/auth/me/image', file),
  /** Tira a foto de perfil. */
  removeImage: () => api.delete<UserRef>('/auth/me/image'),
}
