/** Formatos da API do domínio currencies (iguais ao dto.py dele no avant-api). Datas em ISO 8601 UTC. */

/** Moeda do painel, de GET /currencies. */
export interface Currency {
  code: string
  name: string
  symbol: string
  decimals: number
  available: boolean
}
