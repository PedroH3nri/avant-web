import { afterEach, describe, expect, it, vi } from 'vitest'
import { api } from '@/lib/api'
import { blankInput, formProblems, inputOf, loaderPermission, loadersPath, previewDomain, previewLoader, toPayload, withTemplate } from '@/modules/loaders/rules'
import { loaderService } from '@/modules/loaders/service'
import type { Loader } from '@/modules/loaders/types'

/** Um loader salvo, usado por uma ad tag. */
function sampleLoader(): Loader {
  return {
    id: 'l1',
    client: null,
    name: 'GroOne azul',
    template: 'solid',
    blur: 0,
    background: '#0a213d',
    accent: '#1976d2',
    style: 'dots',
    text: 'Carregando',
    max_seconds: 5,
    adblock: 'block',
    tags: [{ id: 't1', name: 'Principal', domain: 'acai.com.br', key: 'tg_abcd1234' }],
    created_at: '2026-11-10T10:00:00Z',
    updated_at: '2026-11-10T10:00:00Z',
  }
}

afterEach(() => vi.restoreAllMocks())

describe('regras dos loaders', () => {
  it('usa as permissões e os caminhos de cada painel', () => {
    expect(loaderPermission(false, 'manage')).toBe('ad_tags.manage')
    expect(loaderPermission(true, 'view')).toBe('internal.ad_tags.view')
    expect(loadersPath(false)).toBe('/loaders')
    expect(loadersPath(true)).toBe('/interno/loaders')
  })

  it('confere nome, cores, texto e cliente', () => {
    expect([...formProblems(blankInput())]).toEqual(['name'])
    const broken = { ...blankInput(''), name: 'X', background: 'azul', accent: '#12345', text: 'a'.repeat(61) }
    expect([...formProblems(broken, true)].sort()).toEqual(['accent', 'background', 'company', 'text'])
    expect(formProblems({ ...blankInput('c1'), name: 'X' }, true).size).toBe(0)
  })

  it('o GroOne usa o círculo e um blur; o texto só vai no Tela cheia', () => {
    const solid = inputOf(sampleLoader())
    const groone = withTemplate(solid, 'groone')
    expect([groone.style, groone.blur]).toEqual(['spinner', 2])
    expect(toPayload({ ...groone, name: '  Azul  ' })).toMatchObject({ name: 'Azul', text: null })
    expect(toPayload({ ...solid, text: '   ' }).text).toBeNull()
    expect(previewLoader(solid)).toEqual({ template: 'solid', blur: 0, background: '#0a213d', accent: '#1976d2', style: 'dots', text: 'Carregando', max_seconds: 5, adblock: 'block' })
  })

  it('a prévia usa o site da primeira ad tag', () => {
    expect(previewDomain(sampleLoader())).toBe('acai.com.br')
    expect(previewDomain(null)).toBe('seusite.com.br')
  })
})

describe('service dos loaders', () => {
  it('chama as rotas do cliente e as internas', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue([])
    const post = vi.spyOn(api, 'post').mockResolvedValue(sampleLoader())
    await loaderService(false).options()
    await loaderService(true).options('c1')
    await loaderService(true).list({ q: 'azul', page: 2 })
    await loaderService(true).create({ ...blankInput('c1'), name: 'Azul' })
    expect(get.mock.calls).toEqual([
      ['/loaders/options', undefined],
      ['/internal/loaders/options', { company_id: 'c1' }],
      ['/internal/loaders', { q: 'azul', page: 2 }],
    ])
    expect(post).toHaveBeenCalledWith('/internal/loaders', expect.objectContaining({ company_id: 'c1', name: 'Azul' }))
  })
})
