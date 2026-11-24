/** Chamadas da API da verificação de instalação, no painel do cliente e no interno (/internal). */

import { api } from '@/lib/api'
import type { InstallCheck, InstallTarget } from '@/modules/install_checks/types'

const RESOURCE: Record<InstallTarget, string> = { ad_tag: 'ad-tags', loader: 'loaders', reward: 'rewards' }

/** A verificação de um dos painéis: o interno verifica os itens dos clientes. */
export function installCheckService(internal: boolean) {
  const base = internal ? '/internal' : ''
  /** O caminho da verificação do item. */
  const path = (target: InstallTarget, id: string) => `${base}/${RESOURCE[target]}/${id}/install-check`
  return {
    /** A última verificação do item. */
    show: (target: InstallTarget, id: string) => api.get<InstallCheck>(path(target, id)),
    /** Pede uma verificação agora; 429 com `retry_after` no minuto depois do botão. */
    request: (target: InstallTarget, id: string) => api.post<InstallCheck>(path(target, id)),
  }
}

export type InstallCheckService = ReturnType<typeof installCheckService>
