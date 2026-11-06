import { describe, expect, it } from 'vitest'
import { networkTone, statusKey, validCode } from '@/modules/networks/rules'

describe('status da network', () => {
  it('mostra a espera pela equipe Groone antes do status', () => {
    const awaiting = { status: 'pending' as const, awaiting_confirmation: true }
    expect(statusKey(awaiting)).toBe('net.status.awaiting')
    expect(networkTone(awaiting)).toBe('ochre')
  })

  it('usa o status da network quando ela não aguarda', () => {
    const connected = { status: 'connected' as const, awaiting_confirmation: false }
    expect(statusKey(connected)).toBe('net.status.connected')
    expect(networkTone(connected)).toBe('ok')
  })

  it('aceita só network code numérico de 4 a 20 dígitos', () => {
    expect(validCode('22334455667')).toBe(true)
    expect(validCode('123')).toBe(false)
    expect(validCode('12a4')).toBe(false)
  })
})
