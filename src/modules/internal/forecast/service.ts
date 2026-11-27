/** Chamadas da API da Previsão do mês no painel interno. */

import { api } from '@/lib/api'
import type { MonthForecast } from '@/modules/internal/forecast/types'

export const forecastService = {
  /** A previsão do mês de hoje com os três cenários e o calendário de caixa. */
  month: () => api.get<MonthForecast>('/internal/forecast'),
}
