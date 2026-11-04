import { describe, expect, it } from 'vitest'
import { nextPollDelay, POLL_LIMIT_MS } from '@/lib/poll'

describe('nextPollDelay', () => {
  it('dobra a espera até 1 minuto e para depois do teto', () => {
    expect(nextPollDelay(0, 0)).toBe(5_000)
    expect(nextPollDelay(5_000, 5_000)).toBe(10_000)
    expect(nextPollDelay(40_000, 60_000)).toBe(60_000)
    expect(nextPollDelay(60_000, POLL_LIMIT_MS)).toBeNull()
  })
})
