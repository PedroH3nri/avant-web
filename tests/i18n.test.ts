import { nextTick } from 'vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { chooseLang, errorText, formatAgo, pick, t } from '@/lib/i18n'
import { safeNext } from '@/lib/nav'

beforeEach(() => chooseLang('pt'))

describe('i18n', () => {
  it('troca o idioma e preenche parâmetros', async () => {
    expect(t('home.seatsOf', { used: 3, limit: 5 })).toBe('3 de 5 vagas')
    chooseLang('en')
    expect(t('home.seatsOf', { used: 3, limit: 5 })).toBe('3 of 5 seats')
    chooseLang('es')
    expect(t('login.submit')).toBe('Entrar')
    await nextTick()
    expect(document.documentElement.lang).toBe('es')
  })

  it('traduz erros pelo code, com um texto para os desconhecidos', () => {
    expect(errorText('too_many_attempts', { s: 30 })).toBe('Muitas tentativas. Tente de novo em 30 s.')
    expect(errorText('codigo_novo')).toBe('Algo deu errado. Tente de novo.')
  })

  it('escolhe o nome no idioma, com o português de reserva', () => {
    expect(pick({ pt: 'Dono', en: 'Owner' })).toBe('Dono')
    chooseLang('es')
    expect(pick({ pt: 'Dono', en: 'Owner' })).toBe('Dono')
    expect(pick(null)).toBe('')
  })

  it('formata há quanto tempo', () => {
    const now = Date.parse('2026-10-23T12:00:00Z')
    expect(formatAgo('2026-10-23T11:55:00Z', now)).toMatch(/5 min/)
    expect(formatAgo(null)).toBe('Nunca')
  })
})

describe('safeNext', () => {
  it('só aceita caminhos do próprio painel', () => {
    expect(safeNext('/configuracoes')).toBe('/configuracoes')
    expect(safeNext('//evil.com')).toBe('/')
    expect(safeNext('/\\evil.com')).toBe('/')
    expect(safeNext('https://evil.com')).toBe('/')
    expect(safeNext(['/a'])).toBe('/')
  })
})
