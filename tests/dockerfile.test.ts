import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'

/** Um arquivo da raiz do repositório como texto. */
function rootFile(name: string): string {
  return readFileSync(join(process.cwd(), name), 'utf8')
}

describe('imagem do painel', () => {
  it('instala o mesmo pnpm do packageManager', () => {
    const packageManager = JSON.parse(rootFile('package.json')).packageManager as string
    const installed = rootFile('Dockerfile').match(/npm install -g (pnpm@[\w.-]+)/)?.[1]
    expect(installed).toBe(packageManager.split('+')[0])
  })
})

describe('nginx do painel', () => {
  it('serve o tag.js e o reward.js para qualquer origem, com cache curto', () => {
    const config = rootFile('docker/nginx.conf')
    const start = config.indexOf('location ~ ^/(tag|reward)\\.js$')
    expect(start).toBeGreaterThan(-1)
    const block = config.slice(start)
    expect(block).toContain('Access-Control-Allow-Origin "*"')
    expect(block).toContain('max-age=600')
  })
})

/** O padrão do map que troca o token do convite e da nova senha por ***, como regex do JS. */
function tokenPattern(config: string, variable: string): RegExp {
  const mapBlock = config.match(new RegExp(`map \\$${variable} \\$\\w+ \\{\\n\\s+"~([^"]+)"`))
  const source = mapBlock?.[1]
  if (!source) throw new Error(`map de $${variable} não encontrado no nginx.conf`)
  return new RegExp(source)
}

/** Aplica o padrão do map como o nginx faria: prefixo, *** e sufixo. */
function redact(pattern: RegExp, value: string): string {
  const match = value.match(pattern)
  if (!match?.groups) return value
  return `${match.groups.token_prefix}***${match.groups.token_suffix}`
}

describe('access_log do nginx do painel', () => {
  const config = rootFile('docker/nginx.conf')

  it('grava o log no formato que esconde o token', () => {
    expect(config).toContain('log_format avant_redacted')
    expect(config).toMatch(/access_log \/var\/log\/nginx\/access\.log avant_redacted;/)
  })

  it('troca o token por *** no caminho do convite e da nova senha', () => {
    const pattern = tokenPattern(config, 'request')
    expect(redact(pattern, 'GET /convite/abc123 HTTP/1.1')).toBe('GET /convite/*** HTTP/1.1')
    expect(redact(pattern, 'GET /redefinir-senha/xyz?lang=pt HTTP/1.1')).toBe(
      'GET /redefinir-senha/***?lang=pt HTTP/1.1',
    )
    expect(redact(pattern, 'GET /entrar HTTP/1.1')).toBe('GET /entrar HTTP/1.1')
  })

  it('troca o token por *** no Referer', () => {
    const pattern = tokenPattern(config, 'http_referer')
    expect(redact(pattern, 'https://avant.example/convite/abc123')).toBe(
      'https://avant.example/convite/***',
    )
  })
})
