/** Formatos da API do domínio account (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

import type { ThemeColors } from '@/lib/customTheme'
import type { AnimationArea, FontSize, Lang, Theme, UserRef } from '@/lib/types'

export interface AuthSession {
  id: string
  created_at: string
  last_seen_at: string
  expires_at: string
  user_agent: string | null
  ip: string | null
  current: boolean
}

export interface GoogleStatus {
  available: boolean
  linked: boolean
}

export interface MfaSetup {
  secret: string
  uri: string
}

export interface RecoveryCodes {
  recovery_codes: string[]
}

export interface ApiKey {
  id: string
  name: string
  prefix: string
  permissions: string[]
  owner: UserRef
  created_at: string
  expires_at: string
  last_used_at: string | null
  revoked_at: string | null
}

export interface ApiKeyCreated extends ApiKey {
  token: string
}

/** Um tema personalizado da pessoa (``CustomThemeOut``). */
export interface CustomTheme {
  id: string
  name: string
  colors: ThemeColors
  updated_at: string
}

/** Os temas personalizados da pessoa e quantos ela pode ter (``CustomThemesOut``). */
export interface CustomThemes {
  items: CustomTheme[]
  limit: number
}

/** O que a tela manda para criar ou editar um tema (``CustomThemeIn``). */
export interface CustomThemeInput {
  name: string
  colors: ThemeColors
}

/** Aparência salva na conta (``AppearanceOut``). */
export interface Appearance {
  theme: Theme
  locale: Lang
  custom_theme_id?: string | null
  animations?: AnimationArea[]
  font_size?: FontSize
}
