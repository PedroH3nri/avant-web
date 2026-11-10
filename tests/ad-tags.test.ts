import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest'
import { api } from '@/lib/api'
import { lang } from '@/lib/i18n'
import {
  adTagPermission,
  adTagsPath,
  blankSettings,
  blockName,
  blockOnPage,
  blockProblem,
  chosenDay,
  cleanPath,
  draftChanges,
  healthSummary,
  installLine,
  newBlock,
  pathMatches,
  settingsProblem,
  tagStatus,
  toPayload,
  unitCode,
} from '@/modules/ad_tags/rules'
import { adTagService } from '@/modules/ad_tags/service'
import type { AdTagBlock, AdTagDraft, AdTagUnitDay } from '@/modules/ad_tags/types'

const DAY: AdTagUnitDay = {
  day: '2026-11-10',
  units: [
    { unit_type: 'Content1', desktop: true, mobile: true },
    { unit_type: 'Content2', desktop: true, mobile: true },
    { unit_type: 'Anchor', desktop: true, mobile: true },
    { unit_type: 'Fixed', desktop: true, mobile: true },
  ],
}

/** Um bloco de conteúdo completo, no lugar e nos dois aparelhos. */
function content(number: number, patch: Partial<AdTagBlock> = {}): AdTagBlock {
  return { ...newBlock(`Content${number}`, null), selector: 'article h1', ...patch }
}

/** Um rascunho com os blocos e as configurações padrão. */
function draftOf(blocks: AdTagBlock[]): AdTagDraft {
  return { blocks, settings: blankSettings() }
}

beforeAll(() => (lang.value = 'pt'))
afterEach(() => vi.restoreAllMocks())

describe('regras das ad tags', () => {
  it('usa as permissões e os caminhos de cada painel', () => {
    expect(adTagPermission(false, 'manage')).toBe('ad_tags.manage')
    expect(adTagPermission(true, 'view')).toBe('internal.ad_tags.view')
    expect(adTagsPath(false)).toBe('/ad-tags')
    expect(adTagsPath(true)).toBe('/interno/ad-tags')
  })

  it('cria os blocos pelo tipo do ad unit e põe o fixo do lado livre', () => {
    const block = newBlock('Content3', null)
    expect([block.kind, block.number, block.side, unitCode(block)]).toEqual(['content', 3, 'after', 'Content3'])
    expect(blockName(block)).toBe('Conteúdo 3')
    expect(newBlock('Anchor', null).edge).toBe('bottom')
    expect(newBlock('Fixed', 'top').edge).toBe('bottom')
    expect(newBlock('Fixed', 'bottom').edge).toBe('top')
  })

  it('aponta o que impede publicar cada bloco', () => {
    const blocks = [content(1), content(1, { desktop: false, mobile: true }), newBlock('Anchor', null), { ...newBlock('Fixed', null), edge: 'bottom' as const }]
    expect(blockProblem(blocks[0]!, blocks, DAY)).toBe('at.problem.repeated')
    expect(blockProblem(blocks[3]!, blocks, DAY)).toBe('at.problem.edgeClash')
    expect(blockProblem(content(9), [content(9)], DAY)).toBe('at.problem.missingUnit')
    expect(blockProblem(content(2, { selector: ' ' }), [], DAY)).toBe('at.problem.noSelector')
    expect(blockProblem(content(2, { desktop: false, mobile: false }), [], DAY)).toBe('at.problem.noDevice')
    expect(blockProblem(content(2, { rule_mode: 'include' }), [], DAY)).toBe('at.problem.noPaths')
    const complete = content(2)
    expect(blockProblem(complete, [complete], DAY)).toBeNull()
  })

  it('escolhe o dia dos blocos: o fixado ou o mais recente', () => {
    const older = { ...DAY, day: '2026-11-01' }
    expect(chosenDay([DAY, older], null)).toBe(DAY)
    expect(chosenDay([DAY, older], '2026-11-01')).toBe(older)
    expect(chosenDay([DAY], '2026-10-01')).toBeNull()
  })

  it('confere os IDs do Analytics e da MGID e limpa o rascunho para a API', () => {
    expect(settingsProblem({ ...blankSettings(), analytics_id: 'g-abc123' })).toBeNull()
    expect(settingsProblem({ ...blankSettings(), analytics_id: 'XYZ' })).toBe('at.problem.analytics')
    expect(settingsProblem({ ...blankSettings(), mgid_tag_id: 'a b' })).toBe('at.problem.mgid')
    const payload = toPayload({ blocks: [content(1, { selector: '  h2  ', mgid_article: ' ', paths: ['x'] })], settings: { ...blankSettings(), analytics_id: ' g-abc123 ', mgid_sidebar: '' } })
    expect(payload.blocks[0]).toMatchObject({ selector: 'h2', mgid_article: null, paths: [] })
    expect(payload.settings).toMatchObject({ analytics_id: 'G-ABC123', mgid_sidebar: null })
  })

  it('casa os caminhos como o tag.js', () => {
    expect(cleanPath(' https://acai.com.br/receitas/* ')).toBe('receitas/*')
    expect(pathMatches('receitas/*', '/receitas/bolo')).toBe(true)
    expect(pathMatches('Sobre', '/sobre/')).toBe(true)
    expect(pathMatches('sobre', '/sobre/time')).toBe(false)
    expect(blockOnPage(content(1, { rule_mode: 'include', paths: ['receitas/*'] }), '/receitas/bolo')).toBe(true)
    expect(blockOnPage(content(1, { rule_mode: 'exclude', paths: ['receitas/*'] }), '/receitas/bolo')).toBe(false)
  })

  it('lista o que mudou entre a versão no ar e o rascunho', () => {
    expect(draftChanges(null, draftOf([content(1)]))).toEqual(['Primeira versão, com 1 blocos'])
    const live = draftOf([content(1), newBlock('Anchor', null)])
    const draft = draftOf([{ ...newBlock('Anchor', null), edge: 'top' }, content(1, { refresh_seconds: 30 }), content(2)])
    draft.settings.reward = true
    expect(draftChanges(live, draft)).toEqual([
      'Âncora mudou de posição',
      'Âncora mudou de lado da tela',
      'Conteúdo 1 mudou de posição',
      'Conteúdo 1: atualização mudou',
      'Conteúdo 2 entrou',
      'Reward mudou',
    ])
    expect(draftChanges(live, structuredClone(live))).toEqual([])
  })

  it('diz a situação da tag', () => {
    const live = { number: 3, published_at: '2026-11-10T10:00:00Z' }
    expect(tagStatus({ active: false, live }, null).label).toBe('Pausada')
    expect(tagStatus({ active: true, live: null }, null).tone).toBe('ochre')
    expect(tagStatus({ active: true, live }, null).label).toBe('Publicada, não instalada')
    expect(tagStatus({ active: true, live }, '2026-11-10T11:00:00Z').label).toBe('No ar · versão 3')
  })

  it('soma a saúde por dia e por bloco, na ordem dos tipos', () => {
    const row = { version: 1, device: 'desktop' as const, last_seen_at: '2026-11-10T11:00:00Z' }
    const summary = healthSummary({
      last_seen_at: '2026-11-10T11:00:00Z',
      seen_version: 1,
      days: [
        { ...row, day: '2026-11-10', placement: 'page', page_views: 10, rendered: 0, empty: 0 },
        { ...row, day: '2026-11-09', placement: 'page', page_views: 5, rendered: 0, empty: 0 },
        { ...row, day: '2026-11-10', placement: 'Anchor', page_views: 9, rendered: 8, empty: 1 },
        { ...row, day: '2026-11-10', placement: 'Content1', page_views: 10, rendered: 6, empty: 4 },
      ],
    })
    expect(summary.pages).toBe(15)
    expect(summary.days.map((day) => [day.day, day.pages, day.rendered])).toEqual([
      ['2026-11-09', 5, 0],
      ['2026-11-10', 10, 14],
    ])
    expect(summary.blocks.map((block) => block.placement)).toEqual(['Content1', 'Anchor'])
  })

  it('monta a linha de instalação com a chave', () => {
    expect(installLine('https://avant.groone.com', 'tg_abcd1234')).toBe('<script async src="https://avant.groone.com/tag.js" data-tag="tg_abcd1234"></script>')
  })
})

describe('service das ad tags', () => {
  it('chama as rotas do cliente e as internas', async () => {
    const get = vi.spyOn(api, 'get').mockResolvedValue({ items: [] })
    const post = vi.spyOn(api, 'post').mockResolvedValue({})
    const put = vi.spyOn(api, 'put').mockResolvedValue({})
    await adTagService(false).list({ q: 'x', page: 2 })
    await adTagService(true).health('t1', 30)
    await adTagService(false).units('s1')
    await adTagService(true).publish('t1', 'nota')
    await adTagService(false).restore('t1', 2)
    await adTagService(false).update('t1', 'Principal', draftOf([]))
    expect(get.mock.calls).toEqual([
      ['/ad-tags', { q: 'x', page: 2 }],
      ['/internal/ad-tags/t1/health', { days: 30 }],
      ['/sites/s1/ad-tag-units'],
    ])
    expect(post.mock.calls).toEqual([
      ['/internal/ad-tags/t1/publish', { note: 'nota' }],
      ['/ad-tags/t1/versions/2/restore'],
    ])
    expect(put).toHaveBeenCalledWith('/ad-tags/t1', { name: 'Principal', draft: draftOf([]) })
  })
})
