import { describe, expect, it } from 'vitest'
import { dict, errors } from '@/lib/i18n/source'
import {
  CALLS_TO_ACTION,
  EVENTS,
  JOB_STEPS,
  OBJECTIVES,
  OPTIMIZATIONS,
  PLACEMENTS,
  SPECIAL_CATEGORIES,
  adProblems,
  blankAd,
  blankDraft,
  createdCampaign,
  draftDaily,
  draftProblems,
  editProblems,
  isoToLocal,
  joinPlaces,
  localToIso,
  objectiveOf,
  problemKey,
  serverProblems,
  splitPlaces,
  stepState,
  withObjective,
} from '@/modules/facebook/draft-rules'
import type { FacebookDraftInput } from '@/modules/facebook/types'

/** Um rascunho completo, pronto para criar, para os testes mudarem só o que importa. */
function readyDraft(): FacebookDraftInput {
  const draft = blankDraft('account-1', { adset: 'Conjunto 1', ad: 'Anúncio 1' })
  const [adset] = draft.adsets
  if (!adset) throw new Error('rascunho sem conjunto')
  const [ad] = adset.ads
  if (!ad) throw new Error('conjunto sem anúncio')
  return {
    ...draft,
    name: 'Campanha',
    budget: '50',
    adsets: [{ ...adset, countries: ['BR'], ads: [{ ...ad, page_id: 'page-1', image_hash: 'hash', texts: ['Texto'], titles: ['Título'] }] }],
  }
}

describe('lista "Para criar"', () => {
  it('fica vazia com o rascunho completo e conta a conta sem site', () => {
    expect(draftProblems(readyDraft(), true)).toEqual([])
    expect(draftProblems(readyDraft(), false)).toEqual(['account_without_site'])
  })

  it('lista o que falta no rascunho em branco sem repetir', () => {
    const problems = draftProblems(blankDraft('account-1', { adset: 'C', ad: 'A' }), true)
    expect(problems).toEqual(['name_missing', 'budget_missing', 'adset_location_missing', 'ad_page_missing', 'ad_media_missing', 'ad_text_missing'])
    expect(new Set(problems).size).toBe(problems.length)
  })

  it('pede pixel e evento em vendas e data de fim no vitalício', () => {
    const draft = { ...withObjective(readyDraft(), 'sales'), budget_kind: 'lifetime' as const }
    expect(draftProblems(draft, true)).toEqual(['adset_pixel_missing', 'lifetime_needs_end'])
  })

  it('bloqueia a promoção de app e o lance sem valor', () => {
    expect(draftProblems({ ...readyDraft(), objective: 'app_promotion' }, true)).toContain('objective_unsupported')
    expect(draftProblems({ ...readyDraft(), bid: 'cost_cap' }, true)).toEqual(['bid_value_missing'])
  })

  it('pede orçamento em cada conjunto quando ele fica no conjunto', () => {
    expect(draftProblems({ ...readyDraft(), budget_at: 'adset', budget: null }, true)).toEqual(['adset_budget_missing'])
  })

  it('aceita carrossel com 2 cartões completos e sem título', () => {
    const ad = { ...blankAd('A'), page_id: 'p', format: 'carousel' as const, texts: ['Texto'], cards: [{ title: '', path: '/a', image_hash: 'h1' }, { title: '', path: '/b', image_hash: 'h2' }] }
    expect(adProblems(ad)).toEqual([])
    expect(adProblems({ ...ad, cards: ad.cards.slice(0, 1) })).toEqual(['ad_media_missing'])
    expect(adProblems({ ...ad, path: 'sem-barra' })).toEqual(['ad_path_invalid'])
  })
})

describe('edição e objetivo', () => {
  it('troca a otimização que não cabe no objetivo novo', () => {
    const draft = withObjective(readyDraft(), 'engagement')
    expect(draft.adsets[0]?.optimization).toBe(OPTIMIZATIONS.engagement[0])
  })

  it('pede alguma mudança na campanha e ignora o orçamento ao trocar o público', () => {
    expect(editProblems('campaign', {}, 'traffic')).toEqual(['edit_empty'])
    expect(editProblems('campaign', { name: 'Novo' }, 'traffic')).toEqual([])
    const adset = readyDraft().adsets[0]
    expect(editProblems('adset', { adset: adset ? { ...adset, ads: [] } : undefined }, 'traffic')).toEqual([])
  })

  it('lê o objetivo do Facebook e cai em tráfego quando não conhece', () => {
    expect(objectiveOf('OUTCOME_SALES')).toBe('sales')
    expect(objectiveOf('LINK_CLICKS')).toBe('traffic')
    expect(objectiveOf(null)).toBe('traffic')
  })
})

describe('resumo, job e lugares', () => {
  it('soma o diário e divide o vitalício pelos dias', () => {
    expect(draftDaily(readyDraft())).toBe(50)
    const draft = readyDraft()
    const adset = draft.adsets[0]
    if (!adset) throw new Error('rascunho sem conjunto')
    const lifetime = { ...draft, budget_kind: 'lifetime' as const, budget: '100', adsets: [{ ...adset, start_time: '2026-11-01T00:00:00Z', end_time: '2026-11-11T00:00:00Z' }] }
    expect(draftDaily(lifetime)).toBe(10)
  })

  it('mostra os passos feitos, o atual e os que faltam', () => {
    expect(stepState({ state: 'running', step: 'campaign' }, 'media')).toBe('done')
    expect(stepState({ state: 'running', step: 'campaign' }, 'adsets')).toBe('current')
    expect(stepState({ state: 'running', step: 'campaign' }, 'ads')).toBe('waiting')
    expect(stepState({ state: 'done', step: null }, 'activate')).toBe('done')
  })

  it('acha a campanha criada só quando ela já existe', () => {
    expect(createdCampaign({ created: { campaign: '123' } })).toBe('123')
    expect(createdCampaign({ created: { copy: '456' } })).toBeNull()
  })

  it('junta e separa países e outros lugares', () => {
    const picks = joinPlaces({ countries: ['BR'], places: [{ id: '2430', name: 'São Paulo', kind: 'region' }] })
    expect(picks.map((pick) => pick.id)).toEqual(['BR', '2430'])
    expect(splitPlaces(picks)).toEqual({ countries: ['BR'], places: [{ id: '2430', name: 'São Paulo', kind: 'region' }] })
  })

  it('volta a data e hora local que foi digitada', () => {
    expect(isoToLocal(localToIso('2026-12-01T09:30'))).toBe('2026-12-01T09:30')
    expect(localToIso('')).toBeNull()
  })

  it('lê os problemas que a API mandou e acha o texto de cada um', () => {
    expect(serverProblems({ problems: ['ad_page_missing', 3] })).toEqual(['ad_page_missing'])
    expect(serverProblems({})).toEqual([])
    expect(problemKey('ad_page_missing')).toBe('fb.problem.ad_page_missing')
    expect(problemKey('algo_novo')).toBe('fb.problem.other')
  })
})

describe('textos da criação', () => {
  it('têm PT, EN e ES para cada opção montada pelo código', () => {
    const keys = [
      ...OBJECTIVES.flatMap((objective) => [`fb.objective.${objective}`, `fb.objective.${objective}Desc`]),
      ...Object.values(OPTIMIZATIONS).flat().map((goal) => `fb.optimization.${goal}`),
      ...EVENTS.map((event) => `fb.event.${event}`),
      ...CALLS_TO_ACTION.map((action) => `fb.cta.${action}`),
      ...PLACEMENTS.map((placement) => `fb.placement.${placement}`),
      ...SPECIAL_CATEGORIES.map((category) => `fb.special.${category}`),
      ...JOB_STEPS.map((step) => `fb.job.step.${step}`),
      ...['create', 'edit', 'duplicate'].flatMap((kind) => [`fb.job.title.${kind}`, `fb.job.done.${kind}`]),
      ...['campaign', 'adset', 'ad'].flatMap((level) => [`fb.edit.title.${level}`, `fb.edit.note.${level}`]),
      'fb.problem.other',
    ]
    const table = dict as Record<string, readonly string[]>
    const missing = keys.filter((key) => table[key]?.length !== 3)
    expect(missing).toEqual([])
    expect(errors.facebook_draft_invalid).toBeDefined()
    expect(errors.facebook_media_too_large).toBeDefined()
  })
})
