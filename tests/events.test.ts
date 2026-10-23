import { afterEach, describe, expect, it, vi } from 'vitest'

class FakeSource {
  static last: FakeSource | null = null
  listeners = new Map<string, ((e: MessageEvent) => void)[]>()
  closed = false
  constructor(readonly url: string) {
    FakeSource.last = this
  }
  addEventListener(type: string, fn: (e: MessageEvent) => void) {
    this.listeners.set(type, [...(this.listeners.get(type) ?? []), fn])
  }
  emit(type: string, data: string) {
    for (const fn of this.listeners.get(type) ?? []) fn(new MessageEvent(type, { data }))
  }
  close() {
    this.closed = true
  }
}

afterEach(() => {
  vi.unstubAllGlobals()
  vi.resetModules()
})

describe('events', () => {
  it('abre uma conexão, entrega os avisos e fecha sem ninguém escutando', async () => {
    vi.stubGlobal('EventSource', FakeSource)
    const { onEvent, reconnectEvents } = await import('@/lib/events')
    const got: string[] = []
    const off = onEvent('network.updated', (d) => got.push(d.network_id))
    const first = FakeSource.last!
    expect(first.url).toBe('/api/v1/events')
    first.emit('network.updated', '{"network_id":"n1"}')
    first.emit('network.updated', 'não é json')
    expect(got).toEqual(['n1'])

    reconnectEvents()
    expect(first.closed).toBe(true)
    FakeSource.last!.emit('network.updated', '{"network_id":"n2"}')
    expect(got).toEqual(['n1', 'n2'])

    off()
    expect(FakeSource.last!.closed).toBe(true)
  })
})
