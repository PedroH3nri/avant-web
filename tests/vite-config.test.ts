// @vitest-environment node
import { afterEach, describe, expect, it, vi } from 'vitest'

async function loadConfig() {
  vi.resetModules()
  return (await import('../vite.config')).default
}

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('vite.config', () => {
  it('escuta em IPv4 por padrão', async () => {
    vi.stubEnv('AVANT_DEV_HOST', undefined)
    const config = await loadConfig()
    expect(config.server?.host).toBe('127.0.0.1')
  })

  it('aceita outro endereço de escuta pela variável de ambiente', async () => {
    vi.stubEnv('AVANT_DEV_HOST', '0.0.0.0')
    const config = await loadConfig()
    expect(config.server?.host).toBe('0.0.0.0')
  })

  it('repassa /api para o IPv4 da API, sem depender de localhost', async () => {
    vi.stubEnv('AVANT_API_URL', undefined)
    const config = await loadConfig()
    expect(config.server?.proxy).toMatchObject({ '/api': { target: 'http://127.0.0.1:8000' } })
  })

  it('aceita outra URL da API pela variável de ambiente', async () => {
    vi.stubEnv('AVANT_API_URL', 'http://api.interna:9000')
    const config = await loadConfig()
    expect(config.server?.proxy).toMatchObject({ '/api': { target: 'http://api.interna:9000' } })
  })
})
