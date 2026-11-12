import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const config = readFileSync('vite.config.ts', 'utf8')

describe('vite.config', () => {
  it('escuta em IPv4 por padrão, com o endereço configurável', () => {
    expect(config).toContain("host: process.env.AVANT_DEV_HOST ?? '127.0.0.1'")
  })

  it('repassa /api para o IPv4 da API, sem depender de localhost', () => {
    expect(config).toContain("process.env.AVANT_API_URL ?? 'http://127.0.0.1:8000'")
    expect(config).not.toContain('localhost')
  })
})
