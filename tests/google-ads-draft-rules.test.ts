import { describe, expect, it } from 'vitest'
import { dict, errors } from '@/lib/i18n/source'
import {
  CHANNELS,
  KNOWN_PROBLEMS,
  adProblems,
  amount,
  biddingsFor,
  blankAd,
  blankDraft,
  channelOf,
  cleanDraft,
  createdCampaign,
  draftProblems,
  editProblems,
  hasAdContent,
  jobFinished,
  problemKey,
  serverProblems,
  withAccount,
  withChannel,
} from '@/modules/google_ads/draft-rules'
import type { GoogleAdsAdInput, GoogleAdsDraftInput } from '@/modules/google_ads/types'

const SEARCH_AD: GoogleAdsAdInput = {
  ...blankAd('SEARCH'),
  link_path: '/cartoes',
  headlines: ['Cartão sem anuidade', 'Compare as opções', 'Peça online', ''],
  descriptions: ['Taxas e limites lado a lado.', 'Veja qual combina com você.'],
}

/** Um rascunho de pesquisa completo, com um grupo e uma palavra-chave. */
function searchDraft(): GoogleAdsDraftInput {
  const draft = blankDraft('conta-1', 'Grupo 1')
  return {
    ...draft,
    name: ' Cartões ',
    budget: '50,5',
    locations: ['2076'],
    ad_groups: [{ ...draft.ad_groups[0]!, ads: [SEARCH_AD], keywords: [{ text: 'cartão sem anuidade', match_type: 'PHRASE' }] }],
  }
}

describe('rascunho de campanha do Google Ads', () => {
  it('fica pronto quando tem o que o Google pede na pesquisa', () => {
    expect(draftProblems(searchDraft(), true)).toEqual([])
    expect(draftProblems(searchDraft(), false)).toEqual(['account_without_site'])
    const empty = blankDraft('conta-1', 'Grupo 1')
    expect(draftProblems(empty, true)).toEqual(['campaign_name_missing', 'budget_missing', 'location_missing', 'keywords_missing', 'ad_headlines_invalid', 'ad_descriptions_invalid'])
  })

  it('pede CPC em todo grupo com CPC manual', () => {
    const manual = { ...searchDraft(), bidding: 'MANUAL_CPC' as const }
    expect(draftProblems(manual, true)).toEqual(['ad_group_cpc_missing'])
    const withCpc = { ...manual, ad_groups: manual.ad_groups.map((group) => ({ ...group, cpc: '1,20' })) }
    expect(draftProblems(withCpc, true)).toEqual([])
    expect(cleanDraft(withCpc).ad_groups[0]?.cpc).toBe('1.20')
  })

  it('manda só os textos preenchidos e o dinheiro com ponto', () => {
    const clean = cleanDraft(searchDraft())
    expect(clean.name).toBe('Cartões')
    expect(clean.budget).toBe('50.5')
    expect(clean.ad_groups[0]?.ads[0]?.headlines).toEqual(['Cartão sem anuidade', 'Compare as opções', 'Peça online'])
    expect(clean.ad_groups[0]?.cpc).toBeNull()
    expect(amount('0')).toBeNull()
    expect(amount('abc')).toBeNull()
  })

  it('pede confirmação só quando algum anúncio já tem conteúdo e limpa as imagens ao trocar de conta', () => {
    const empty = blankDraft('conta-1', 'Grupo 1')
    expect(hasAdContent(empty)).toBe(false)
    expect(hasAdContent(searchDraft())).toBe(true)
    const withImages = withChannel(searchDraft(), 'DISPLAY')
    const ad = withImages.ad_groups[0]?.ads[0]
    if (!ad) throw new Error('sem anúncio')
    const pictured = { ...withImages, ad_groups: [{ ...withImages.ad_groups[0]!, ads: [{ ...ad, marketing_images: ['customers/1/assets/1'] }] }] }
    const moved = withAccount(pictured, 'conta-2')
    expect(moved.account_id).toBe('conta-2')
    expect(moved.ad_groups[0]?.ads[0]?.marketing_images).toEqual([])
    expect(withAccount(pictured, pictured.account_id)).toBe(pictured)
  })

  it('entende valor com milhar, com vírgula ou com ponto', () => {
    expect(amount('1.234,56')).toBe('1234.56')
    expect(amount('1,234.56')).toBe('1234.56')
    expect(amount('1.234')).toBe('1234')
    expect(amount('12,5')).toBe('12.5')
    expect(amount('1 000,00')).toBe('1000.00')
    expect(amount('1.2.3')).toBeNull()
    expect(amount('12,345,6')).toBeNull()
  })

  it('ao trocar o tipo, limpa os anúncios, as palavras-chave e acerta o lance', () => {
    const display = withChannel(searchDraft(), 'DISPLAY')
    expect(display.ad_groups[0]?.keywords).toEqual([])
    expect(display.ad_groups[0]?.ads[0]?.headlines.every((text) => text === '')).toBe(true)
    expect(display.bidding).toBe('MAXIMIZE_CLICKS')
    expect(withChannel(searchDraft(), 'DEMAND_GEN').bidding).toBe('MAXIMIZE_CONVERSIONS')
    expect(biddingsFor('DEMAND_GEN')).toEqual(['MAXIMIZE_CONVERSIONS'])
  })

  it('confere imagens, nome da empresa e título longo fora da pesquisa', () => {
    const ad = { ...blankAd('DISPLAY'), headlines: ['Cartões'], descriptions: ['Compare as taxas.'] }
    expect(adProblems('DISPLAY', ad)).toEqual(['ad_business_name_invalid', 'ad_long_headline_invalid', 'ad_images_missing'])
    const full = { ...ad, business_name: 'Blog', long_headline: 'Os cartões sem anuidade', marketing_images: ['customers/1/assets/2'], square_images: ['customers/1/assets/3'] }
    expect(adProblems('DISPLAY', full)).toEqual([])
    expect(adProblems('DEMAND_GEN', full)).toEqual(['ad_logo_missing'])
    expect(adProblems('SEARCH', { ...SEARCH_AD, path2: 'ofertas' })).toEqual(['ad_display_path_invalid'])
    expect(adProblems('SEARCH', { ...SEARCH_AD, headlines: ['x'.repeat(31), 'b', 'c'] })).toEqual(['ad_headlines_invalid'])
  })

  it('confere a edição de cada nível', () => {
    expect(editProblems('campaign', 'SEARCH', { name: null, cpc: null, ad: null })).toEqual(['edit_empty'])
    expect(editProblems('ad_group', 'SEARCH', { name: null, cpc: '2', ad: null })).toEqual([])
    expect(editProblems('ad', 'SEARCH', { name: null, cpc: null, ad: SEARCH_AD })).toEqual([])
    expect(editProblems('ad', 'SEARCH', { name: null, cpc: null, ad: null })).toEqual(['edit_empty'])
    expect(channelOf('SEARCH')).toBe('SEARCH')
    expect(channelOf('PERFORMANCE_MAX')).toBeNull()
  })

  it('lê os problemas que a API mandou, o fim do job e a campanha criada', () => {
    expect(serverProblems({ problems: ['budget_missing', 3] })).toEqual(['budget_missing'])
    expect(problemKey('budget_missing')).toBe('gads.problem.budget_missing')
    expect(problemKey('algo_novo')).toBe('gads.problem.other')
    expect(jobFinished({ state: 'running' })).toBe(false)
    expect(jobFinished({ state: 'failed' })).toBe(true)
    expect(createdCampaign({ kind: 'create', created: { campaign: '800' } })).toBe('800')
    expect(createdCampaign({ kind: 'edit', created: { campaign: '800' } })).toBeNull()
  })
})

describe('textos da criação no Google Ads', () => {
  it('têm PT, EN e ES para cada opção montada pelo código', () => {
    const keys = [
      ...CHANNELS.flatMap((channel) => [`gads.channel.${channel}`, `gads.create.adTitle.${channel}`, `gads.create.adDesc.${channel}`]),
      ...biddingsFor('SEARCH').map((bidding) => `gads.bidding.${bidding}`),
      ...[...KNOWN_PROBLEMS, 'other'].map((problem) => `gads.problem.${problem}`),
      ...['create', 'edit'].flatMap((kind) => [`gads.job.title.${kind}`, `gads.job.done.${kind}`]),
      'gads.job.syncing',
      ...['campaign', 'ad_group', 'ad'].flatMap((level) => [`gads.edit.title.${level}`, `gads.edit.note.${level}`]),
    ]
    const table = dict as Record<string, readonly string[]>
    for (const key of keys) expect(table[key]?.length, key).toBe(3)
    for (const code of ['google_ads_draft_invalid', 'google_ads_media_too_large', 'unknown_outcome', 'interrupted']) expect((errors as Record<string, readonly string[]>)[code]?.length, code).toBe(3)
  })
})
