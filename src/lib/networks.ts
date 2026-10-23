import type { Network, NetworkStatus } from './types'

export const statusTone: Record<NetworkStatus, 'ok' | 'warn' | 'bad' | 'neutral'> = {
  pending: 'warn',
  connected: 'ok',
  error: 'bad',
  disconnected: 'neutral',
}

export const networkName = (n: Pick<Network, 'display_name' | 'network_code'>) => n.display_name ?? n.network_code

export const validCode = (code: string) => /^\d{4,20}$/.test(code)
