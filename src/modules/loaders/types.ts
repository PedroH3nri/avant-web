/** Formatos da API dos loaders (iguais ao dto.py de modules/loaders no avant-api). Datas em ISO 8601 UTC. */

export type LoaderTemplate = 'groone' | 'solid'
export type LoaderStyle = 'bar' | 'spinner' | 'dots'
export type LoaderAdblock = 'off' | 'warn' | 'block'

/** Uma ad tag que usa o loader. */
export interface LoaderTag {
  id: string
  name: string
  domain: string
  key: string
}

/** Um loader como a API devolve; `client` só no painel interno. */
export interface Loader {
  id: string
  client: { id: string; name: string } | null
  name: string
  template: LoaderTemplate
  blur: number
  background: string
  accent: string
  style: LoaderStyle
  text: string | null
  max_seconds: number
  adblock: LoaderAdblock
  tags: LoaderTag[]
  created_at: string
  updated_at: string
}

/** O formulário do loader (`LoaderIn`); `company_id` só ao criar no painel interno. */
export interface LoaderInput {
  name: string
  template: LoaderTemplate
  blur: number
  background: string
  accent: string
  style: LoaderStyle
  text: string | null
  max_seconds: number
  adblock: LoaderAdblock
  company_id?: string
}

/** Um loader no seletor da ad tag (`/loaders/options`). */
export interface LoaderOption {
  id: string
  name: string
  template: LoaderTemplate
}
