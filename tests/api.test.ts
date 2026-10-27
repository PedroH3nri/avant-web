import { afterEach, describe, expect, it, vi } from 'vitest'
import { api, ApiError, readCookie, setUnauthorizedHandler } from '@/lib/api'

function respond(status: number, body: unknown, headers: Record<string, string> = {}) {
  const fn = vi.fn(async () => new Response(body === null ? null : JSON.stringify(body), { status, headers }))
  vi.stubGlobal('fetch', fn)
  return fn
}

afterEach(() => {
  vi.unstubAllGlobals()
  document.cookie = 'avant_csrf=; expires=Thu, 01 Jan 1970 00:00:00 GMT'
})

describe('api', () => {
  it('manda o CSRF só nas escritas', async () => {
    document.cookie = 'avant_csrf=abc%3D'
    const fetch = respond(200, { ok: true })
    await api.get('/company', { q: 'x', empty: '', none: null })
    await api.patch('/company', { name: 'A' })
    const [getUrl, getInit] = fetch.mock.calls[0] as unknown as [string, RequestInit]
    const [, patchInit] = fetch.mock.calls[1] as unknown as [string, RequestInit]
    expect(getUrl).toBe('/api/v1/company?q=x')
    expect((getInit.headers as Record<string, string>)['X-CSRF-Token']).toBeUndefined()
    expect((patchInit.headers as Record<string, string>)['X-CSRF-Token']).toBe('abc=')
    expect(patchInit.body).toBe('{"name":"A"}')
  })

  it('envia o arquivo cru no PUT da imagem, com o tipo dele e o CSRF', async () => {
    document.cookie = 'avant_csrf=abc'
    const fetch = respond(200, { image_url: '/api/v1/company/image?v=1' })
    const file = new File(['png'], 'logo.png', { type: 'image/png' })
    await api.putFile('/company/image', file)
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit]
    const headers = init.headers as Record<string, string>
    expect([url, init.method, init.body]).toEqual(['/api/v1/company/image', 'PUT', file])
    expect([headers['Content-Type'], headers['X-CSRF-Token']]).toEqual(['image/png', 'abc'])
  })

  it('transforma o corpo de erro em ApiError', async () => {
    respond(
      429,
      { error: { code: 'rate_limited', message: 'calma', details: { fields: [{ loc: ['body', 'email'], msg: 'inválido' }] } } },
      { 'Retry-After': '12' },
    )
    const error = await api.post('/auth/login', {}).catch((e: unknown) => e)
    expect(error).toBeInstanceOf(ApiError)
    const e = error as ApiError
    expect([e.status, e.code, e.retryAfter]).toEqual([429, 'rate_limited', 12])
    expect(e.fields).toEqual({ email: 'inválido' })
  })

  it('avisa a sessão no 401, menos nas rotas de login', async () => {
    const handler = vi.fn()
    setUnauthorizedHandler(handler)
    respond(401, { error: { code: 'not_authenticated', message: '' } })
    await api.get('/auth/me').catch(() => null)
    expect(handler).not.toHaveBeenCalled()
    await api.get('/company').catch(() => null)
    expect(handler).toHaveBeenCalledOnce()
  })

  it('sem conexão vira network_error', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => Promise.reject(new TypeError('failed'))))
    await expect(api.get('/company')).rejects.toMatchObject({ code: 'network_error', status: 0 })
  })

  it('204 não tem corpo', async () => {
    respond(204, null)
    await expect(api.delete('/api-keys/1')).resolves.toBeUndefined()
  })

  it('lê cookies', () => {
    expect(readCookie('b', 'a=1; b=x%20y; c=3')).toBe('x y')
    expect(readCookie('z', 'a=1')).toBeNull()
  })
})
