/** Formatos da API das ad tags (iguais ao dto.py de modules/ad_tags no avant-api). Datas em ISO 8601 UTC. */

export type AdTagBlockKind = 'content' | 'anchor' | 'interstitial' | 'fixed'
export type AdTagEdge = 'top' | 'bottom'
export type AdTagSide = 'before' | 'after'
export type AdTagRuleMode = 'all' | 'include' | 'exclude'
export type AdTagDevice = 'desktop' | 'mobile'

/** Um bloco da tag, na ordem de carregamento; `number` só no conteúdo (1 a 9). */
export interface AdTagBlock {
  kind: AdTagBlockKind
  desktop: boolean
  mobile: boolean
  number: number | null
  edge: AdTagEdge | null
  selector: string | null
  side: AdTagSide | null
  refresh_seconds: number | null
  mgid_article: string | null
  rule_mode: AdTagRuleMode
  paths: string[]
}

/** As configurações gerais e as integrações; `ad_unit_day` vazio é "os mais recentes". */
export interface AdTagSettings {
  lazy_load: boolean
  ad_unit_day: string | null
  analytics_id: string | null
  mgid_tag_id: string | null
  mgid_smart_widget: string | null
  mgid_back_button: string | null
  mgid_sidebar: string | null
  reward: boolean
  price_rules: boolean
  loader_id: string | null
}

/** O rascunho, ou o conteúdo de uma versão. */
export interface AdTagDraft {
  blocks: AdTagBlock[]
  settings: AdTagSettings
}

/** Uma ad tag; `client` só no painel interno, `live` vazio se nunca foi publicada. */
export interface AdTag {
  id: string
  site_id: string
  domain: string
  client: { id: string; name: string } | null
  name: string
  key: string
  active: boolean
  draft: AdTagDraft
  live: { number: number; published_at: string } | null
  has_changes: boolean
  created_at: string
  updated_at: string
}

/** Uma versão publicada, com quem publicou e o conteúdo. */
export interface AdTagVersion {
  number: number
  note: string | null
  published_at: string
  published_by: string | null
  live: boolean
  content: AdTagDraft
}

/** Um dia com blocos no GAM e os tipos (`Content1`, `Anchor`...) com os aparelhos de cada um. */
export interface AdTagUnitDay {
  day: string
  units: { unit_type: string; desktop: boolean; mobile: boolean }[]
}

/** Uma linha da saúde: um dia, versão, bloco (ou `page`) e aparelho. */
export interface AdTagHealthDay {
  day: string
  version: number
  placement: string
  device: AdTagDevice
  page_views: number
  rendered: number
  empty: number
  last_seen_at: string
}

/** A saúde da tag no período; `last_seen_at` vazio se nunca foi vista. */
export interface AdTagHealth {
  last_seen_at: string | null
  seen_version: number | null
  days: AdTagHealthDay[]
}

/** Um site em que se pode criar tag. */
export interface AdTagSiteOption {
  id: string
  domain: string
  client: string | null
}
