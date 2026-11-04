/** Chamadas da API das ferramentas do GAM no painel interno. */

import { api, download } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { GamToolNetwork, GamToolNetworkDetail, GamToolRun, GamToolRunInput, Language } from '@/modules/internal/gam_tools/types'

/** Serviço das ferramentas do GAM: networks, execuções, ads.txt e o arquivo de instalação. */
export const gamToolService = {
  /** Uma página das networks dos clientes, pelo nome ou pelo network code. */
  networks: (query: string, page = 1) => api.get<Page<GamToolNetwork>>('/internal/gam-tools/networks', { q: query, page }),
  /** A network com os sites e os blocos que o Avant já importou. */
  network: (networkId: string) => api.get<GamToolNetworkDetail>(`/internal/gam-tools/networks/${networkId}`),
  /** Uma página das execuções da network, ou de todas sem ``networkId``. */
  runs: (networkId: string | undefined, page = 1) => api.get<Page<GamToolRun>>('/internal/gam-tools/runs', networkId ? { network: networkId, page } : { page }),
  /** Uma execução com os passos. */
  run: (runId: string) => api.get<GamToolRun>(`/internal/gam-tools/runs/${runId}`),
  /** Abre a execução; o worker roda e a tela acompanha. */
  start: (body: GamToolRunInput) => api.post<GamToolRun>('/internal/gam-tools/runs', body),
  /** As linhas do ads.txt da network. */
  adsTxt: (networkId: string) => api.get<{ lines: string[] }>('/internal/gam-tools/ads-txt', { network: networkId }),
  /** Baixa o arquivo de instalação: .txt de um site ou .zip de vários. */
  install: (networkId: string, sites: string[], language: Language, label: Language) =>
    download('/internal/gam-tools/install', { network: networkId, sites, language, label }),
}
