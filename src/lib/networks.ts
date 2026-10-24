import type { Network, NetworkStatus } from './types'

export const statusTone: Record<NetworkStatus, 'ok' | 'warn' | 'bad' | 'neutral'> = {
  pending: 'warn',
  connected: 'ok',
  error: 'bad',
  disconnected: 'neutral',
}

/** Nome de exibição da network, ou o código quando não tem nome. */
export const networkName = (network: Pick<Network, 'display_name' | 'network_code'>) => network.display_name ?? network.network_code

/** Diz se o network code tem só números, de 4 a 20. */
export const validCode = (code: string) => /^\d{4,20}$/.test(code)
