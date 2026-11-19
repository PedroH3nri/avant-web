/** Chamadas da API do Facebook, no painel do cliente (/facebook) e no interno (/internal/facebook, só leitura). */

import { api, type Query } from '@/lib/api'
import type { Page } from '@/lib/types'
import type {
  FacebookAccount,
  FacebookAccountInput,
  FacebookAlert,
  FacebookAlertSetting,
  FacebookBudget,
  FacebookBudgetInput,
  FacebookChange,
  FacebookControlResult,
  FacebookObject,
  FacebookObjectDetail,
  FacebookPerson,
  FacebookPersonInput,
  FacebookProfile,
  FacebookRule,
  FacebookRuleDecision,
  FacebookRuleInput,
} from '@/modules/facebook/types'

/** Endereço que abre o login do Facebook; é uma navegação do navegador, não uma chamada da API. */
export const FACEBOOK_CONNECT_URL = '/api/v1/facebook/oauth/start'

/** As rotas de leitura que os dois painéis têm; o interno aceita `company_id` para ver um cliente. */
export function facebookReader(internal: boolean) {
  const base = internal ? '/internal/facebook' : '/facebook'
  return {
    /** As contas de anúncio com quem usa e o gasto do mês. */
    accounts: (query?: Query) => api.get<FacebookAccount[]>(`${base}/accounts`, query),
    /** Uma página das campanhas, conjuntos ou anúncios com os números do período. */
    objects: (query?: Query) => api.get<Page<FacebookObject>>(`${base}/objects`, query),
    /** Uma campanha, conjunto ou anúncio com os números por dia e por país. */
    object: (externalId: string, query?: Query) => api.get<FacebookObjectDetail>(`${base}/objects/${externalId}`, query),
    /** Uma página do histórico, o mais novo primeiro. */
    changes: (query?: Query) => api.get<Page<FacebookChange>>(`${base}/changes`, query),
    /** Uma página dos avisos, o mais novo primeiro. */
    alerts: (query?: Query) => api.get<Page<FacebookAlert>>(`${base}/alerts`, query),
    /** As regras automáticas do objeto (as sugeridas, desligadas, quando não há). */
    rule: (externalId: string) => api.get<FacebookRule>(`${base}/objects/${externalId}/rules`),
    /** Uma página do que as regras decidiram, a decisão mais nova primeiro. */
    ruleDecisions: (externalId: string, query?: Query) => api.get<Page<FacebookRuleDecision>>(`${base}/objects/${externalId}/rule-decisions`, query),
  }
}

/** O que só o painel do cliente faz: perfis, pessoas, configuração das contas e dos avisos. */
export const facebookService = {
  ...facebookReader(false),
  /** Os perfis conectados que a pessoa vê, sem o token. */
  profiles: () => api.get<FacebookProfile[]>('/facebook/profiles'),
  /** Desconecta o perfil: a sincronia para e o Avant revoga as permissões no Facebook. */
  disconnect: (id: string) => api.delete(`/facebook/profiles/${id}`),
  /** Troca o site, quem usa e os limites da conta. */
  updateAccount: (id: string, input: FacebookAccountInput) => api.put<FacebookAccount>(`/facebook/accounts/${id}`, input),
  /** As pessoas da Empresa com as contas que usam e os limites. */
  people: () => api.get<FacebookPerson[]>('/facebook/people'),
  /** Passa as contas para a pessoa (tira de quem usava) e grava os limites dela. */
  setPerson: (userId: string, input: FacebookPersonInput) => api.put<FacebookPerson>(`/facebook/people/${userId}`, input),
  /** Marca o aviso como lido. */
  readAlert: (id: string) => api.post<void>(`/facebook/alerts/${id}/read`),
  /** Quem recebe cada tipo de aviso. */
  alertSettings: () => api.get<FacebookAlertSetting[]>('/facebook/alert-settings'),
  /** Grava quem recebe os tipos de aviso enviados. */
  setAlertSettings: (settings: FacebookAlertSetting[]) => api.put<FacebookAlertSetting[]>('/facebook/alert-settings', settings),
  /** Liga ou pausa no Facebook de 1 a 100 objetos; ligar confere os limites antes. */
  setStatus: (externalIds: string[], active: boolean) => api.post<FacebookControlResult>('/facebook/objects/status', { external_ids: externalIds, active }),
  /** Troca o orçamento diário ou o vitalício da campanha ou do conjunto. */
  setBudget: (externalId: string, input: FacebookBudgetInput) => api.put<FacebookBudget>(`/facebook/objects/${externalId}/budget`, input),
  /** Grava as regras automáticas do objeto. */
  setRule: (externalId: string, input: FacebookRuleInput) => api.put<FacebookRule>(`/facebook/objects/${externalId}/rules`, input),
}
