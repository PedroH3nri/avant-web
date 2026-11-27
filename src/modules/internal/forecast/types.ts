/** Formatos da API da Previsão do mês (iguais ao dto.py de modules/internal/forecast no avant-api). Valores em dólar como texto decimal; datas como AAAA-MM-DD. */

export type ForecastScenario = 'low' | 'base' | 'high'
export type CashEventKind = 'mcm_close' | 'commission_close' | 'team_invoices' | 'gam_payment'
export type CashDirection = 'in' | 'out' | 'gam'

/** Os números do topo num cenário. */
export interface ScenarioTotals {
  scenario: ForecastScenario
  gross: string
  groone: string
  deduction: string
  commission: string
}

/** Um dia do mês: o realizado até ontem ou a previsão de hoje em diante. */
export interface ForecastDay {
  day: string
  actual: string | null
  forecast: string | null
}

/** Uma data do calendário de caixa, com o valor previsto ou quantos itens. */
export interface CashEvent {
  kind: CashEventKind
  starts_on: string
  ends_on: string
  direction: CashDirection
  amount: string | null
  count: number | null
}

/** A tela: o mês, o realizado, o mês passado, a taxa de dedução (0 a 1), os cenários, os dias e o caixa. */
export interface MonthForecast {
  month: string
  realized: string
  previous_month: string
  deduction_rate: string | null
  scenarios: ScenarioTotals[]
  days: ForecastDay[]
  cash: CashEvent[]
}
