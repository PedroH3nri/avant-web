import { describe, expect, it } from 'vitest'
import { device, keyState, recoveryFile, sortKeys } from '@/modules/account/rules'
import type { ApiKey } from '@/modules/account/types'

const key = (id: string, created_at: string, extra: Partial<ApiKey> = {}): ApiKey => ({
  id,
  name: id,
  prefix: 'abcd',
  permissions: ['sites.view'],
  owner: { id: 'u1', email: 'a@a.com', name: 'A', locale: 'pt', image_url: null },
  created_at,
  expires_at: '2099-01-01T00:00:00Z',
  last_used_at: null,
  revoked_at: null,
  ...extra,
})

describe('device', () => {
  it('reconhece navegador e sistema', () => {
    const chromeWin = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36'
    expect(device(chromeWin)).toEqual({ browser: 'Chrome', os: 'Windows' })
    const edge = chromeWin + ' Edg/130.0'
    expect(device(edge).browser).toBe('Edge')
    const iphone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1'
    expect(device(iphone)).toEqual({ browser: 'Safari', os: 'iOS' })
    const firefoxMac = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14.6; rv:131.0) Gecko/20100101 Firefox/131.0'
    expect(device(firefoxMac)).toEqual({ browser: 'Firefox', os: 'macOS' })
  })

  it('sem User-Agent ou desconhecido', () => {
    expect(device(null)).toEqual({ browser: null, os: null })
    expect(device('curl/8.0')).toEqual({ browser: null, os: null })
  })
})

describe('chaves', () => {
  const now = Date.parse('2026-10-23T12:00:00Z')

  it('estado: revogada, vencida ou ativa', () => {
    expect(keyState(key('a', '2026-01-01', { revoked_at: '2026-02-01T00:00:00Z' }), now)).toBe('revoked')
    expect(keyState(key('b', '2026-01-01', { expires_at: '2026-10-01T00:00:00Z' }), now)).toBe('expired')
    expect(keyState(key('c', '2026-01-01'), now)).toBe('active')
  })

  it('ativas primeiro, depois as mais novas', () => {
    const list = [
      key('velha', '2026-01-01T00:00:00Z'),
      key('revogada', '2026-09-01T00:00:00Z', { revoked_at: '2026-09-02T00:00:00Z' }),
      key('nova', '2026-10-01T00:00:00Z'),
    ]
    expect(sortKeys(list, now).map((k) => k.id)).toEqual(['nova', 'velha', 'revogada'])
  })
})

it('arquivo dos códigos de recuperação', () => {
  expect(recoveryFile(['aaaa-bbbb', 'cccc-dddd'], 'Título')).toBe('Título\n\naaaa-bbbb\ncccc-dddd\n')
})
