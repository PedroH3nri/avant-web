/** Formatos da API usados em todo o painel (iguais ao shared/dto.py do avant-api). Datas em ISO 8601 UTC. */

export type Lang = 'pt' | 'en' | 'es'

export type Localized = Partial<Record<Lang, string>>

export type SiteScope = 'all' | 'assigned'

/** Tema do painel escolhido pela pessoa. */
export type Theme = 'light' | 'dark' | 'system'

/** Cor de destaque escolhida pela pessoa. */
export type AccentId = 'default' | 'blue' | 'green' | 'purple' | 'orange'

export interface Items<T> {
  items: T[]
  next_cursor: string | null
}

export interface UserRef {
  id: string
  email: string
  name: string
  locale: Lang
  /** Vazio sem foto: o painel mostra as iniciais do nome. */
  image_url: string | null
}

export interface CompanyRef {
  id: string
  name: string
  slug: string
  is_owner: boolean
  /** Diz se é a Company Groone. */
  is_internal: boolean
  /** Vazio sem imagem: o painel mostra a inicial do nome. */
  image_url: string | null
}

export interface Me {
  user: UserRef
  companies: CompanyRef[]
  active_company_id: string | null
  permissions: string[]
  site_scope: SiteScope | null
  is_staff: boolean
  mfa_enabled: boolean
  mfa_setup_required: boolean
  display_currency: string
  /** Tema e cor que a pessoa escolheu; valem em todas as Empresas. */
  theme: Theme
  accent: AccentId
}
