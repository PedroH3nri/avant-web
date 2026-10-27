/** Formatos da API usados em todo o painel (iguais ao shared/dto.py do avant-api). Datas em ISO 8601 UTC. */

export type Lang = 'pt' | 'en' | 'es'

export type Localized = Partial<Record<Lang, string>>

export type SiteScope = 'all' | 'assigned'

export interface Items<T> {
  items: T[]
  next_cursor: string | null
}

export interface UserRef {
  id: string
  email: string
  name: string
  locale: Lang
}

export interface CompanyRef {
  id: string
  name: string
  slug: string
  accent_color: string | null
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
}
