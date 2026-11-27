/** Regras de tela do Controle de custos: somas por integração e por pessoa, ROI e parte do gasto. */

import type { PresetKey } from '@/lib/periods'
import type { CostControlAccount, CostIntegration } from '@/modules/cost_control/types'

export const COST_INTEGRATIONS: CostIntegration[] = ['facebook', 'google_ads']
export const COST_PRESETS: PresetKey[] = ['this_month', 'last_month', 'last_7_days', 'last_30_days', 'last_90_days']
export const COST_MAX_DAYS = 366
export const INTEGRATION_COLOR: Record<CostIntegration, string> = { facebook: '#1877F2', google_ads: '#F9AB00' }
export const INTERNAL_PERMISSIONS = ['internal.facebook.view', 'internal.google_ads.view']

export interface CostTotals {
  accounts: number
  spend: number
  revenue: number
  profit: number
  roi: number | null
  noSite: number
}

export interface PersonTotals extends CostTotals {
  key: string
  name: string
  byOwner: boolean
  integrations: CostIntegration[]
}

/** Soma gasto e receita das contas; lucro e ROI só das contas com site, que são as que têm receita. */
export function costTotals(accounts: CostControlAccount[]): CostTotals {
  const withSite = accounts.filter((account) => account.revenue !== null)
  const spend = accounts.reduce((total, account) => total + Number(account.spend), 0)
  const siteSpend = withSite.reduce((total, account) => total + Number(account.spend), 0)
  const revenue = withSite.reduce((total, account) => total + Number(account.revenue), 0)
  return {
    accounts: accounts.length,
    spend,
    revenue,
    profit: revenue - siteSpend,
    roi: siteSpend ? (revenue - siteSpend) / siteSpend : null,
    noSite: accounts.length - withSite.length,
  }
}

/** As somas de cada integração que tem conta no filtro. */
export function byIntegration(accounts: CostControlAccount[]): ({ integration: CostIntegration } & CostTotals)[] {
  return COST_INTEGRATIONS.map((integration) => ({ integration, ...costTotals(accounts.filter((account) => account.integration === integration)) })).filter(
    (item) => item.accounts > 0,
  )
}

/** A chave da pessoa de uma conta; sem pessoa (dono sem cadastro), uma chave só para o dono. */
export function personKey(account: CostControlAccount): string {
  return account.person?.id ?? 'owner'
}

/** As somas de cada pessoa, da que mais gasta para a que menos gasta, com as integrações que ela usa. */
export function byPerson(accounts: CostControlAccount[], ownerName: string): PersonTotals[] {
  const keys = [...new Set(accounts.map(personKey))]
  return keys
    .map((key) => {
      const own = accounts.filter((account) => personKey(account) === key)
      const first = own[0]
      return {
        key,
        name: first?.person?.name ?? ownerName,
        byOwner: own.every((account) => account.by_owner),
        integrations: COST_INTEGRATIONS.filter((integration) => own.some((account) => account.integration === integration)),
        ...costTotals(own),
      }
    })
    .sort((first, second) => second.spend - first.spend)
}

/** O ROI de uma conta; sem site (sem receita) ou sem gasto não há ROI. */
export function accountRoi(account: CostControlAccount): number | null {
  const spend = Number(account.spend)
  if (account.revenue === null || !spend) return null
  return (Number(account.revenue) - spend) / spend
}

/** A parte do gasto de um grupo no total, de 0 a 1. */
export function spendShare(spend: number, total: number): number {
  return total ? spend / total : 0
}

/** A parte do limite do mês já gasta, de 0 a 1 (sem limite, vazio). */
export function limitUse(account: Pick<CostControlAccount, 'month_spend' | 'monthly_limit'>): number | null {
  const limit = Number(account.monthly_limit)
  return account.monthly_limit === null || !limit ? null : Math.min(1, Number(account.month_spend) / limit)
}
