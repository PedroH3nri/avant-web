import { afterEach, describe, expect, it, vi } from 'vitest'

class FakeSource {
  static CLOSED = 2
  static last: FakeSource | null = null
  static opened = 0
  listeners = new Map<string, ((e: MessageEvent) => void)[]>()
  closed = false
  readyState = 1
  onerror: (() => void) | null = null
  onopen: (() => void) | null = null
  constructor(readonly url: string) {
    FakeSource.last = this
    FakeSource.opened += 1
  }
  /** O servidor recusou (429, 401): o navegador fecha de vez e avisa no onerror. */
  refuse() {
    this.readyState = FakeSource.CLOSED
    this.onerror?.()
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

  it('reabre com espera crescente quando o servidor fecha de vez (429 ou 401)', async () => {
    vi.useFakeTimers()
    vi.stubGlobal('EventSource', FakeSource)
    FakeSource.opened = 0
    const { onEvent } = await import('@/lib/events')
    const got: string[] = []
    const off = onEvent('metrics.updated', (d) => got.push(d.network_id))
    FakeSource.last!.refuse()
    expect(FakeSource.opened).toBe(1)
    await vi.advanceTimersByTimeAsync(5_000)
    expect(FakeSource.opened).toBe(2)
    FakeSource.last!.refuse()
    await vi.advanceTimersByTimeAsync(5_000)
    expect(FakeSource.opened).toBe(2)
    await vi.advanceTimersByTimeAsync(5_000)
    expect(FakeSource.opened).toBe(3)
    FakeSource.last!.emit('metrics.updated', '{"network_id":"n9"}')
    expect(got).toEqual(['n9'])
    off()
    FakeSource.last!.refuse()
    await vi.advanceTimersByTimeAsync(60_000)
    expect(FakeSource.opened).toBe(3)
    vi.useRealTimers()
  })

  it('não registra o mesmo tipo duas vezes na mesma conexão', async () => {
    vi.stubGlobal('EventSource', FakeSource)
    const { onEvent } = await import('@/lib/events')
    const offOther = onEvent('network.updated', () => undefined)
    const got: string[] = []
    const first = onEvent('metrics.updated', (d) => got.push(d.network_id))
    first()
    const second = onEvent('metrics.updated', (d) => got.push(d.network_id))
    FakeSource.last!.emit('metrics.updated', '{"network_id":"n1"}')
    expect(got).toEqual(['n1'])
    second()
    offOther()
  })
})
