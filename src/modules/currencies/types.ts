/** Formatos da API do domínio currencies (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

/** Moeda do painel, de GET /currencies. */
export interface Currency {
  code: string
  name: string
  symbol: string
  decimals: number
  available: boolean
}

/** Um dia da série da cotação. */
export interface RatePoint {
  day: string
  rate: string
}

/** O dólar em reais agora, no dia anterior e nos últimos 30 dias, de GET /currencies/usd-quote. */
export interface DollarQuote {
  code: string
  rate: string
  day: string
  synced_at: string
  previous: string | null
  history: RatePoint[]
}
