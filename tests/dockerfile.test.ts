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
  it('serve o reward.js para qualquer origem, com cache curto', () => {
    const config = rootFile('docker/nginx.conf')
    const block = config.slice(config.indexOf('location = /reward.js'))
    expect(block).toContain('Access-Control-Allow-Origin "*"')
    expect(block).toContain('max-age=600')
  })
})
