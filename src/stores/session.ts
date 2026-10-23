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

  const company = computed(() => me.value?.companies.find((c) => c.id === me.value?.active_company_id) ?? null)
  const permissions = computed(() => new Set(me.value?.permissions ?? []))

  /** Mesma regra do avant-core: ``*`` cobre tudo e ``team.*`` cobre ``team.invite``. */
  function can(wanted: string): boolean {
    for (const p of permissions.value) {
      if (p === '*' || p === wanted) return true
      if (p.endsWith('.*') && wanted.startsWith(p.slice(0, -1))) return true
    }
    return false
  }

  function set(value: Me | null) {
    const first = me.value === null && value !== null
    me.value = value
    loaded.value = true
    applyAccent(company.value?.accent_color)
    // Na primeira carga, o idioma da conta vale se a pessoa ainda não escolheu outro aqui.
    if (first && value && !langChosen()) lang.value = value.user.locale
  }

  async function load(): Promise<Me | null> {
    try {
      set(await api.get<Me>('/auth/me'))
    } catch (e) {
      if (e instanceof ApiError && e.status === 401) set(null)
      else throw e
    }
    return me.value
  }

  async function login(email: string, password: string): Promise<LoginResult> {
    const result = await api.post<LoginResult>('/auth/login', { email, password })
    if (result.me) set(result.me)
    return result
  }

  async function verifyMfa(code: string) {
    set(await api.post<Me>('/auth/mfa/verify', { code }))
  }

  async function logout() {
    try {
      await api.post('/auth/logout')
    } finally {
      set(null)
    }
  }

  async function switchCompany(companyId: string) {
    set(await api.post<Me>('/auth/me/active-company', { company_id: companyId }))
    reconnectEvents()
  }

  return { me, loaded, company, can, set, load, login, verifyMfa, logout, switchCompany }
})
