/** Formatos da API da verificação de instalação (iguais ao dto.py de modules/install_checks no avant-api). Datas em ISO 8601 UTC. */

export type InstallTarget = 'ad_tag' | 'loader' | 'reward'
export type FindingSeverity = 'error' | 'warning' | 'ok'

/** O resumo da última verificação, na coluna "Instalação" das listas. */
export interface InstallSummary {
  state: 'pending' | 'done'
  source: 'manual' | 'daily'
  requested_at: string
  finished_at: string | null
  errors: number
  warnings: number
}

/** Um achado: o código (o painel traduz o título e o que fazer), a página e o trecho achado. */
export interface InstallFinding {
  code: string
  severity: FindingSeverity
  page: string | null
  snippet: string | null
}

/** A última verificação de um item; `summary` vazio quando nunca rodou. */
export interface InstallCheck {
  target: InstallTarget
  target_id: string
  summary: InstallSummary | null
  requested_by_name: string | null
  available_at: string | null
  pages: string[]
  findings: InstallFinding[]
}
