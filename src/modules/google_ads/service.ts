/** Chamadas da API do Google Ads, no painel do cliente (/google-ads) e no interno (/internal/google-ads, só leitura). */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type {
  GoogleAdsAccount,
  GoogleAdsAccountInput,
  GoogleAdsAlert,
  GoogleAdsAlertSetting,
  GoogleAdsChange,
  GoogleAdsKeyword,
  GoogleAdsLevel,
  GoogleAdsLogin,
  GoogleAdsObject,
  GoogleAdsObjectDetail,
  GoogleAdsPerson,
  GoogleAdsPersonInput,
  GoogleAdsTerm,
} from '@/modules/google_ads/types'

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
    /** Uma campanha, grupo ou anúncio com os números por dia. */
    object: (level: GoogleAdsLevel, externalId: string, query?: Query) => api.get<GoogleAdsObjectDetail>(`${base}/objects/${level}/${externalId}`, query),
    /** As palavras-chave do grupo com gasto, receita, lucro e ROI. */
    keywords: (adGroupId: string, query?: Query) => api.get<GoogleAdsKeyword[]>(`${base}/ad-groups/${adGroupId}/keywords`, query),
    /** Uma página do histórico, o mais novo primeiro. */
    changes: (query?: Query) => api.get<Page<GoogleAdsChange>>(`${base}/changes`, query),
    /** Uma página dos avisos, o mais novo primeiro. */
    alerts: (query?: Query) => api.get<Page<GoogleAdsAlert>>(`${base}/alerts`, query),
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
  /** Marca o aviso como lido. */
  readAlert: (id: string) => api.post<void>(`/google-ads/alerts/${id}/read`),
  /** Quem recebe cada tipo de aviso. */
  alertSettings: () => api.get<GoogleAdsAlertSetting[]>('/google-ads/alert-settings'),
  /** Grava quem recebe os tipos de aviso enviados. */
  setAlertSettings: (settings: GoogleAdsAlertSetting[]) => api.put<GoogleAdsAlertSetting[]>('/google-ads/alert-settings', settings),
}
