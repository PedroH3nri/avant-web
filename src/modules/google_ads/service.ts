/** Chamadas da API do Google Ads, no painel do cliente (/google-ads) e no interno (/internal/google-ads, só leitura). */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type { GoogleAdsAccount, GoogleAdsAccountInput, GoogleAdsAlert, GoogleAdsAlertSetting, GoogleAdsBudget, GoogleAdsChange, GoogleAdsControlResult, GoogleAdsCpc, GoogleAdsKeyword, GoogleAdsLevel, GoogleAdsLogin, GoogleAdsObject, GoogleAdsObjectDetail, GoogleAdsPerson, GoogleAdsPersonInput, GoogleAdsRule, GoogleAdsRuleDecision, GoogleAdsRuleInput, GoogleAdsSummary, GoogleAdsTerm } from '@/modules/google_ads/types'

/** Endereço que abre o login do Google; é uma navegação do navegador, não uma chamada da API. */
export const GOOGLE_ADS_CONNECT_URL = '/api/v1/google-ads/oauth/start'

/** As rotas de leitura que os dois painéis têm; o interno aceita `company_id` para ver um cliente. */
export function googleAdsReader(internal: boolean) {
  const base = internal ? '/internal/google-ads' : '/google-ads'
  return {
    /** As contas com quem usa, o sufixo e o gasto do mês. */
    accounts: (query?: Query) => api.get<GoogleAdsAccount[]>(`${base}/accounts`, query),
    /** Uma página das campanhas, grupos ou anúncios com os números do período. */
    objects: (query?: Query) => api.get<Page<GoogleAdsObject>>(`${base}/objects`, query),
    /** A soma de todo o filtro no período, numa moeda só, para os cards da tela. */
    summary: (query?: Query) => api.get<GoogleAdsSummary>(`${base}/objects/summary`, query),
    /** Uma campanha, grupo ou anúncio com os números por dia. */
    object: (level: GoogleAdsLevel, externalId: string, query?: Query) => api.get<GoogleAdsObjectDetail>(`${base}/objects/${level}/${externalId}`, query),
    /** As palavras-chave do grupo com gasto, receita, lucro e ROI. */
    keywords: (adGroupId: string, query?: Query) => api.get<GoogleAdsKeyword[]>(`${base}/ad-groups/${adGroupId}/keywords`, query),
    /** Uma página do histórico, o mais novo primeiro. */
    changes: (query?: Query) => api.get<Page<GoogleAdsChange>>(`${base}/changes`, query),
    /** Uma página dos avisos, o mais novo primeiro. */
    alerts: (query?: Query) => api.get<Page<GoogleAdsAlert>>(`${base}/alerts`, query),
    /** As regras automáticas do objeto, ou as sugeridas desligadas. */
    rule: (level: GoogleAdsLevel, externalId: string) => api.get<GoogleAdsRule>(`${base}/objects/${level}/${externalId}/rules`),
    /** Uma página das decisões das regras do objeto, a mais nova primeiro. */
    ruleDecisions: (level: GoogleAdsLevel, externalId: string, query?: Query) => api.get<Page<GoogleAdsRuleDecision>>(`${base}/objects/${level}/${externalId}/rule-decisions`, query),
  }
}

/** O que só o painel do cliente faz: logins, contas, sufixo, pessoas, termos e avisos. */
export const googleAdsService = {
  ...googleAdsReader(false),
  /** Os logins do Google conectados que a pessoa vê, sem o token. */
  logins: () => api.get<GoogleAdsLogin[]>('/google-ads/logins'),
  /** Desconecta o login: a sincronia para e o Avant revoga o acesso no Google. */
  disconnect: (id: string) => api.delete(`/google-ads/logins/${id}`),
  /** Troca o site, quem usa e os limites da conta. */
  updateAccount: (id: string, input: GoogleAdsAccountInput) => api.put<GoogleAdsAccount>(`/google-ads/accounts/${id}`, input),
  /** Grava na conta o sufixo de URL com os UTMs do Avant. */
  applySuffix: (id: string) => api.post<GoogleAdsAccount>(`/google-ads/accounts/${id}/suffix`),
  /** As pessoas da Empresa com as contas que usam e os limites. */
  people: () => api.get<GoogleAdsPerson[]>('/google-ads/people'),
  /** Passa as contas para a pessoa (tira de quem usava) e grava os limites dela. */
  setPerson: (userId: string, input: GoogleAdsPersonInput) => api.put<GoogleAdsPerson>(`/google-ads/people/${userId}`, input),
  /** Os termos de pesquisa da campanha ou do grupo no período. */
  searchTerms: (level: GoogleAdsLevel, externalId: string, query?: Query) => api.get<GoogleAdsTerm[]>(`/google-ads/objects/${level}/${externalId}/search-terms`, query),
  /** Os posicionamentos da campanha ou do grupo no período. */
  placements: (level: GoogleAdsLevel, externalId: string, query?: Query) => api.get<GoogleAdsTerm[]>(`/google-ads/objects/${level}/${externalId}/placements`, query),
  /** Liga ou pausa campanhas, grupos ou anúncios de um nível no Google Ads. */
  setStatus: (level: GoogleAdsLevel, externalIds: string[], active: boolean) => api.post<GoogleAdsControlResult>('/google-ads/objects/status', { level, external_ids: externalIds, active }),
  /** Troca o orçamento diário da campanha no Google Ads. */
  setBudget: (externalId: string, budget: string) => api.put<GoogleAdsBudget>(`/google-ads/campaigns/${externalId}/budget`, { budget }),
  /** Grava as regras automáticas do objeto. */
  setRule: (level: GoogleAdsLevel, externalId: string, input: GoogleAdsRuleInput) => api.put<GoogleAdsRule>(`/google-ads/objects/${level}/${externalId}/rules`, input),
  /** Liga ou pausa palavras-chave do grupo. */
  setKeywordStatus: (adGroupId: string, criterionIds: string[], active: boolean) => api.post<GoogleAdsControlResult>(`/google-ads/ad-groups/${adGroupId}/keywords/status`, { criterion_ids: criterionIds, active }),
  /** Troca o CPC máximo de uma palavra-chave (só em campanha com CPC manual). */
  setKeywordCpc: (adGroupId: string, criterionId: string, cpc: string) => api.put<GoogleAdsCpc>(`/google-ads/ad-groups/${adGroupId}/keywords/${criterionId}/cpc`, { cpc }),
  /** Põe o termo de pesquisa como negativa exata na campanha. */
  negateTerm: (campaignId: string, text: string) => api.post<void>(`/google-ads/campaigns/${campaignId}/negative-terms`, { text }),
  /** Exclui o posicionamento da campanha toda. */
  excludePlacement: (campaignId: string, placement: string, placementType: string) => api.post<void>(`/google-ads/campaigns/${campaignId}/excluded-placements`, { placement, placement_type: placementType }),
  /** Marca o aviso como lido. */
  readAlert: (id: string) => api.post<void>(`/google-ads/alerts/${id}/read`),
  /** Quem recebe cada tipo de aviso. */
  alertSettings: () => api.get<GoogleAdsAlertSetting[]>('/google-ads/alert-settings'),
  /** Grava quem recebe os tipos de aviso enviados. */
  setAlertSettings: (settings: GoogleAdsAlertSetting[]) => api.put<GoogleAdsAlertSetting[]>('/google-ads/alert-settings', settings),
}
