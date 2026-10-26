/** Chamadas da API das moedas do painel e da moeda de visualização da pessoa. */

import { api } from '@/lib/api'
import type { Currency } from '@/modules/currencies/types'

/** Serviço das moedas. */
export const currencyService = {
  /** As moedas do painel e se já há cotação para cada uma. */
  list: () => api.get<Currency[]>('/currencies'),
  /** Troca a moeda em que a pessoa vê os valores. */
  setDisplayCurrency: (code: string) => api.put<{ display_currency: string }>('/auth/preferences', { display_currency: code }),
}
