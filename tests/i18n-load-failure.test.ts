import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { showBootFailure } from '@/lib/boot-failure'

/** O módulo de textos novo, com o chunk do inglês falhando ao carregar. */
async function i18nWithBrokenEnglish() {
  vi.resetModules()
  vi.doMock('virtual:i18n/en', () => {
    throw new Error('chunk do inglês não carregou')
  })
  return import('@/lib/i18n')
}

beforeEach(() => localStorage.clear())

afterEach(() => {
  vi.doUnmock('virtual:i18n/en')
  vi.resetModules()
})

describe('idioma que não carrega', () => {
  it('abre em português quando o idioma da pessoa não chega', async () => {
    localStorage.setItem('avant.lang', 'en')
    const i18n = await i18nWithBrokenEnglish()
    await i18n.startLang()
    expect(i18n.lang.value).toBe('pt')
    expect(i18n.t('login.submit')).toBe('Entrar')
  })

  it('fica no idioma atual quando a troca não carrega', async () => {
    const i18n = await i18nWithBrokenEnglish()
    await i18n.startLang()
    expect(await i18n.chooseLang('en')).toBe(false)
    expect(i18n.lang.value).toBe('pt')
    expect(localStorage.getItem('avant.lang')).toBeNull()
    expect(await i18n.chooseLang('es')).toBe(true)
    expect(i18n.lang.value).toBe('es')
    expect(localStorage.getItem('avant.lang')).toBe('es')
  })

  it('sem nenhum idioma, mostra um aviso fixo com o botão de recarregar', () => {
    const root = document.createElement('div')
    showBootFailure(root)
    expect(root.textContent).toContain('Não foi possível carregar o painel')
    expect(root.textContent).toContain('Could not load the panel')
    expect(root.querySelector('button')?.textContent).toBeTruthy()
  })
})
