/** Formatos da API usados em todo o painel (iguais ao shared/dto.py do avant-api). Datas em ISO 8601 UTC. */

export type Lang = 'pt' | 'en' | 'es'

export type Localized = Partial<Record<Lang, string>>

export type SiteScope = 'all' | 'assigned'

/** Tema do painel escolhido pela pessoa. */
export type Theme = 'light' | 'dark' | 'groone' | 'system' | 'custom'

/** Cor de destaque escolhida pela pessoa. */

export interface Items<T> {
  items: T[]
  next_cursor: string | null
}

/** Uma página de uma listagem (10 itens), igual ao ``PageOut`` do avant-api. */
export interface Page<T> {
  items: T[]
  total: number
  page: number
  pages: number
  page_size: number
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
  /** A conta do cliente (papel Publisher) que ainda não criou a Empresa dela. */
  can_create_company: boolean
  display_currency: string
  /** Tema e cor que a pessoa escolheu; valem em todas as Empresas. */
  theme: Theme
  /** O tema personalizado em uso quando ``theme`` é ``custom`` (cores em /auth/me/themes). */
  custom_theme_id?: string | null
  /** Áreas com animação de hover e foco (campos, botões, cards de métrica). */
  animations?: AnimationArea[]
  font_size?: FontSize
}

/** Tamanho do texto do painel (``FontSize`` do avant-core). */
export type FontSize = 'default' | 'large' | 'larger'

/** Áreas do painel que podem ter animação (``AnimationArea`` do avant-core). */
export type AnimationArea = 'fields' | 'buttons' | 'cards'
