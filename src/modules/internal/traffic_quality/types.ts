/** Formatos da API da Qualidade do tráfego (iguais ao dto.py de modules/internal/traffic_quality no avant-api). Datas em ISO 8601 UTC. */

export type TrafficSignal = 'ctr' | 'quick_bounce' | 'page_view_spike' | 'deduction' | 'cloaker'
export type TrafficRisk = 'high' | 'medium'
export type TrafficDimension = 'source' | 'referrer' | 'device' | 'country' | 'hour' | 'visible' | 'path'

/** Um alerta aberto: o alvo (site ou network), o valor e o normal na unidade do sinal e a série até o atual. */
export interface TrafficAlert {
  id: string
  signal: TrafficSignal
  risk: TrafficRisk
  target_name: string
  domain: string | null
  site_id: string | null
  network_id: string | null
  client_id: string | null
  client_name: string | null
  manager_id: string | null
  value: number
  normal: number
  series: number[]
  context: Record<string, string>
  opened_at: string
  last_seen_at: string
  task_id: string | null
}

/** A tela: os números do topo e os alertas abertos, os de risco alto primeiro. */
export interface TrafficOverview {
  open: number
  high: number
  cloaker: number
  deduction_percent: number | null
  previous_deduction_percent: number | null
  revenue_at_risk: string
  rows: TrafficAlert[]
}

/** A parte de um item agora e no normal do site, de 0 a 100. */
export interface TrafficShare {
  label: string
  now: number
  normal: number
}

/** Um recorte do tráfego agora contra o normal. */
export interface TrafficBreakdown {
  dimension: TrafficDimension
  rows: TrafficShare[]
}

/** Uma campanha de 7 dias de uma conta ligada ao site, em micros da moeda da conta. */
export interface TrafficCampaign {
  platform: 'facebook' | 'google_ads'
  account_id: string
  account_name: string
  campaign_id: string
  campaign_name: string
  holder_name: string | null
  currency: string
  spend_micros: number
  impressions: number
  clicks: number
  ctr: number
  cpc_micros: number
}

/** O modal "Ver detalhes". */
export interface TrafficAlertDetail {
  alert: TrafficAlert
  breakdowns: TrafficBreakdown[]
  campaigns: TrafficCampaign[]
  evidence: Record<string, number>
}
