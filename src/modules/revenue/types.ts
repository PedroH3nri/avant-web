/** Formatos da API do status de faturamento (iguais ao RevenueStatusOut do avant-api). Valores em dólares, como texto decimal. */

export type RevenueTrend = 'scaling' | 'steady' | 'reducing' | 'stopped'

/** Tendência da receita dos últimos 30 dias contra os 30 anteriores. */
export interface RevenueStatus {
  trend: RevenueTrend
  per_day: string
  /** Vazio quando não houve receita nos 30 dias anteriores. */
  change_percent: number | null
  recent: string
  previous: string
}
