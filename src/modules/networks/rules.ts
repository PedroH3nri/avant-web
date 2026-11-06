import type { Network, NetworkStatus } from '@/modules/networks/types'

export const statusTone: Record<NetworkStatus, 'ok' | 'warn' | 'bad' | 'neutral'> = {
  pending: 'warn',
  connected: 'ok',
  error: 'bad',
  disconnected: 'neutral',
}

/** Chave do texto do status, com a espera pela confirmação da equipe Groone à parte. */
export const statusKey = (network: Pick<Network, 'status' | 'awaiting_confirmation'>): `net.status.${NetworkStatus | 'awaiting'}` =>
  network.awaiting_confirmation ? 'net.status.awaiting' : `net.status.${network.status}`

/** Tom do status, com a espera pela confirmação da equipe em ocre. */
export const networkTone = (network: Pick<Network, 'status' | 'awaiting_confirmation'>) =>
  network.awaiting_confirmation ? 'ochre' : statusTone[network.status]

/** Nome de exibição da network, ou o código quando não tem nome. */
export const networkName = (network: Pick<Network, 'display_name' | 'network_code'>) => network.display_name ?? network.network_code

/** Diz se o network code tem só números, de 4 a 20. */
export const validCode = (code: string) => /^\d{4,20}$/.test(code)
