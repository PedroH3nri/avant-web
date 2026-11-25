/** A pessoa logada, as Empresas dela e as permissões na Empresa ativa (GET /auth/me). */

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ApiError } from '@/lib/api'
import { reconnectEvents } from '@/lib/events'
import { chooseLang } from '@/lib/i18n'
import { announceCompany } from '@/lib/tabs'
import { animations, ANIMATION_AREAS, customColors, fontSize, theme } from '@/lib/theme'
import type { AnimationArea, FontSize, Lang, Me, Theme, UserRef } from '@/lib/types'
import { accountService } from '@/modules/account/service'
import type { CustomTheme } from '@/modules/account/types'
import type { LoginResult } from '@/modules/auth/types'
import { authService } from '@/modules/auth/service'
import { currencyService } from '@/modules/currencies/service'

/** Tema, idioma e o tema personalizado em uso, como a API guarda. */
interface AppearanceChoice {
  theme: Theme
  locale: Lang
  custom_theme_id: string | null
  animations: AnimationArea[]
  font_size: FontSize
}

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
  /** Os temas personalizados da pessoa; vazio até a primeira leitura. */
  const customThemes = ref<CustomTheme[] | null>(null)

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

  /** Guarda a pessoa da sessão e aplica idioma e tema dela. */
  function set(value: Me | null) {
    me.value = value
    loaded.value = true
    if (value === null) {
      knownPermissions.value = {}
    } else if (value.active_company_id) {
      knownPermissions.value = { ...knownPermissions.value, [value.active_company_id]: value.permissions }
    }
    if (value) {
      theme.value = value.theme
      animations.value = value.animations ?? [...ANIMATION_AREAS]
      fontSize.value = value.font_size ?? 'default'
      void chooseLang(value.user.locale)
    } else {
      customThemes.value = null
    }
    if (value?.theme === 'custom' && customThemes.value === null) void loadCustomThemes().catch(() => undefined)
    else applyCustomColors()
  }

  /** Lê os temas personalizados da pessoa e aplica as cores do que está em uso. */
  async function loadCustomThemes(): Promise<CustomTheme[]> {
    const loadedThemes = await accountService.themes()
    customThemes.value = loadedThemes.items
    applyCustomColors()
    return loadedThemes.items
  }

  /** Guarda a lista de temas depois de criar, editar ou apagar e reaplica as cores do que está em uso. */
  function setCustomThemes(themes: CustomTheme[]) {
    customThemes.value = themes
    applyCustomColors()
  }

  /** Põe no painel as cores do tema personalizado em uso; fora dele, tira. */
  function applyCustomColors() {
    if (me.value?.theme !== 'custom') {
      customColors.value = null
      return
    }
    const chosen = customThemes.value?.find((custom) => custom.id === me.value?.custom_theme_id)
    if (chosen) customColors.value = chosen.colors
  }

  /** Moeda em que a pessoa vê os valores; dólar até a sessão carregar. */
  const displayCurrency = computed(() => me.value?.display_currency ?? 'USD')

  /** Troca a moeda de visualização na API e já aplica no painel. */
  async function setDisplayCurrency(code: string) {
    const saved = await currencyService.setDisplayCurrency(code)
    if (me.value) me.value = { ...me.value, display_currency: saved.display_currency }
  }

  /** Troca o tema ou o idioma da pessoa: aplica na hora e volta atrás se a API recusar. */
  async function setAppearance(change: Partial<AppearanceChoice>) {
    if (!me.value) return
    const before: AppearanceChoice = {
      theme: me.value.theme,
      locale: me.value.user.locale,
      custom_theme_id: me.value.custom_theme_id ?? null,
      animations: me.value.animations ?? ANIMATION_AREAS,
      font_size: me.value.font_size ?? 'default',
    }
    applyAppearance({ ...before, ...change })
    try {
      const saved = await accountService.appearance(change)
      applyAppearance({ ...saved, custom_theme_id: saved.custom_theme_id ?? null, animations: saved.animations ?? ANIMATION_AREAS, font_size: saved.font_size ?? 'default' })
    } catch (error) {
      applyAppearance(before)
      throw error
    }
  }

  /** Coloca tema e idioma na pessoa da sessão e aplica no painel. */
  function applyAppearance(appearance: AppearanceChoice) {
    if (!me.value) return
    const { locale, ...rest } = appearance
    set({ ...me.value, ...rest, user: { ...me.value.user, locale } })
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

  /** Troca a Empresa ativa, reabre os eventos e avisa as outras abas. */
  async function switchCompany(companyId: string) {
    set(await authService.switchCompany(companyId))
    reconnectEvents()
    announceCompany(me.value?.active_company_id ?? null)
  }

  /** A conta do cliente cria a Empresa dela e a sessão já entra nela, nesta aba e nas outras. */
  async function createCompany(name: string) {
    set(await authService.createCompany(name))
    reconnectEvents()
    announceCompany(me.value?.active_company_id ?? null)
  }

  /** Aceita o convite já logado: a sessão entra na Empresa nova e as outras abas acompanham. */
  async function acceptInvitation(token: string, body: Record<string, unknown>) {
    set(await authService.acceptInvitation(token, body))
    announceCompany(me.value?.active_company_id ?? null)
  }

  /** Outra aba trocou a Empresa da sessão: recarrega a pessoa e reabre os eventos. */
  async function followOtherTab() {
    await load()
    reconnectEvents()
  }

  return { me, loaded, customThemes, loadCustomThemes, setCustomThemes, company, internalCompany, clientCompanies, displayCurrency, can, canIn, set, load, login, verifyMfa, logout, switchCompany, createCompany, followOtherTab, acceptInvitation, setDisplayCurrency, setAppearance, setUser }
})
