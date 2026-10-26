/** A pessoa logada, as Empresas dela e as permissões na Empresa ativa (GET /auth/me). */

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { api, ApiError } from '@/lib/api'
import { reconnectEvents } from '@/lib/events'
import { lang, langChosen } from '@/lib/i18n'
import { applyAccent } from '@/lib/theme'
import type { LoginResult, Me } from '@/lib/types'

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

  /** Guarda a pessoa da sessão e aplica idioma e cor da Empresa. */
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
    applyAccent(company.value?.accent_color)
    // Na primeira carga, o idioma da conta vale se a pessoa ainda não escolheu outro aqui.
    if (first && value && !langChosen()) lang.value = value.user.locale
  }

  /** Moeda em que a pessoa vê os valores; dólar até a sessão carregar. */
  const displayCurrency = computed(() => me.value?.display_currency ?? 'USD')

  /** Troca a moeda de visualização na API e já aplica no painel. */
  async function setDisplayCurrency(code: string) {
    const saved = await api.put<{ display_currency: string }>('/auth/preferences', { display_currency: code })
    if (me.value) me.value = { ...me.value, display_currency: saved.display_currency }
  }

  /** Carrega a pessoa da sessão; sem sessão fica vazia. */
  async function load(): Promise<Me | null> {
    try {
      set(await api.get<Me>('/auth/me'))
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) set(null)
      else throw error
    }
    return me.value
  }

  /** Entra com email e senha. */
  async function login(email: string, password: string): Promise<LoginResult> {
    const result = await api.post<LoginResult>('/auth/login', { email, password })
    if (result.me) set(result.me)
    return result
  }

  /** Confere o código do 2FA e completa o login. */
  async function verifyMfa(code: string) {
    set(await api.post<Me>('/auth/mfa/verify', { code }))
  }

  /** Sai da sessão e limpa o estado. */
  async function logout() {
    try {
      await api.post('/auth/logout')
    } finally {
      set(null)
    }
  }

  /** Troca a Empresa ativa e reabre os eventos. */
  async function switchCompany(companyId: string) {
    set(await api.post<Me>('/auth/me/active-company', { company_id: companyId }))
    reconnectEvents()
  }

  return { me, loaded, company, internalCompany, clientCompanies, lastClientId, displayCurrency, can, canIn, set, load, login, verifyMfa, logout, switchCompany, setDisplayCurrency }
})
