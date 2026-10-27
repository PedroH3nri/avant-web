/** A pessoa logada, as Empresas dela e as permissões na Empresa ativa (GET /auth/me). */

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ApiError } from '@/lib/api'
import { reconnectEvents } from '@/lib/events'
import { lang, langChosen } from '@/lib/i18n'
import { applyAccent, theme } from '@/lib/theme'
import type { AccentId, Me, Theme, UserRef } from '@/lib/types'
import { accountService } from '@/modules/account/service'
import type { LoginResult } from '@/modules/auth/types'
import { authService } from '@/modules/auth/service'
import { currencyService } from '@/modules/currencies/service'

export const useSession = defineStore('session', () => {
  const me = ref<Me | null>(null)
  const loaded = ref(false)

  const company = computed(() => me.value?.companies.find((company) => company.id === me.value?.active_company_id) ?? null)
  /** A Company Groone, para quem é da equipe. */
  const internalCompany = computed(() => me.value?.companies.find((company) => company.is_internal) ?? null)
  const clientCompanies = computed(() => me.value?.companies.filter((company) => !company.is_internal) ?? [])
  const permissions = computed(() => new Set(me.value?.permissions ?? []))
  // A API só devolve as permissões da Empresa ativa. Guardamos as de cada Empresa por onde a
  // pessoa passou, para o menu lateral não mudar quando ela troca de Empresa.
  const knownPermissions = ref<Record<string, string[]>>({})
  /** A última Empresa cliente ativa: o menu volta para ela a partir do painel interno. */
  const lastClientId = ref<string | null>(null)

  /** Mesma regra do avant-core: ``*`` cobre tudo e ``team.*`` cobre ``team.invite``. */
  function grants(granted: Iterable<string>, wanted: string): boolean {
    for (const permission of granted) {
      if (permission === '*' || permission === wanted) return true
      if (permission.endsWith('.*') && wanted.startsWith(permission.slice(0, -1))) return true
    }
    return false
  }

  /** Diz se a pessoa tem a permissão na Empresa ativa. */
  function can(wanted: string): boolean {
    return grants(permissions.value, wanted)
  }

  /** Permissão numa Empresa que pode não ser a ativa. Sem saber ainda, mostra: a API decide. */
  function canIn(companyId: string, wanted: string): boolean {
    if (companyId === me.value?.active_company_id) return can(wanted)
    const known = knownPermissions.value[companyId]
    return known ? grants(known, wanted) : true
  }

  /** Guarda a pessoa da sessão e aplica idioma, tema e cor dela. */
  function set(value: Me | null) {
    const first = me.value === null && value !== null
    me.value = value
    loaded.value = true
    if (value === null) {
      knownPermissions.value = {}
      lastClientId.value = null
    } else if (value.active_company_id) {
      knownPermissions.value = { ...knownPermissions.value, [value.active_company_id]: value.permissions }
      if (!company.value?.is_internal) lastClientId.value = value.active_company_id
    }
    applyAccent(value?.accent)
    if (value) theme.value = value.theme
    // Na primeira carga, o idioma da conta vale se a pessoa ainda não escolheu outro aqui.
    if (first && value && !langChosen()) lang.value = value.user.locale
  }

  /** Moeda em que a pessoa vê os valores; dólar até a sessão carregar. */
  const displayCurrency = computed(() => me.value?.display_currency ?? 'USD')

  /** Troca a moeda de visualização na API e já aplica no painel. */
  async function setDisplayCurrency(code: string) {
    const saved = await currencyService.setDisplayCurrency(code)
    if (me.value) me.value = { ...me.value, display_currency: saved.display_currency }
  }

  /** Troca o tema ou a cor da pessoa: aplica na hora e volta atrás se a API recusar. */
  async function setAppearance(change: { theme?: Theme; accent?: AccentId }) {
    if (!me.value) return
    const before = { theme: me.value.theme, accent: me.value.accent }
    set({ ...me.value, ...change })
    try {
      const saved = await accountService.appearance(change)
      if (me.value) set({ ...me.value, ...saved })
    } catch (error) {
      if (me.value) set({ ...me.value, ...before })
      throw error
    }
  }

  /** Atualiza a pessoa da sessão depois de trocar a foto. */
  function setUser(user: UserRef) {
    if (me.value) me.value = { ...me.value, user }
  }

  /** Carrega a pessoa da sessão; sem sessão fica vazia. */
  async function load(): Promise<Me | null> {
    try {
      set(await authService.me())
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) set(null)
      else throw error
    }
    return me.value
  }

  /** Entra com email e senha. */
  async function login(email: string, password: string): Promise<LoginResult> {
    const result = await authService.login(email, password)
    if (result.me) set(result.me)
    return result
  }

  /** Confere o código do 2FA e completa o login. */
  async function verifyMfa(code: string) {
    set(await authService.verifyMfa(code))
  }

  /** Sai da sessão e limpa o estado. */
  async function logout() {
    try {
      await authService.logout()
    } finally {
      set(null)
    }
  }

  /** Troca a Empresa ativa e reabre os eventos. */
  async function switchCompany(companyId: string) {
    set(await authService.switchCompany(companyId))
    reconnectEvents()
  }

  return { me, loaded, company, internalCompany, clientCompanies, lastClientId, displayCurrency, can, canIn, set, load, login, verifyMfa, logout, switchCompany, setDisplayCurrency, setAppearance, setUser }
})
