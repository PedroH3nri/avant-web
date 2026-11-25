import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { api, ApiError } from '@/lib/api'
import { lang } from '@/lib/i18n'
import type { InstallCheck, InstallSummary } from '@/modules/install_checks/types'

const show = vi.hoisted(() => vi.fn())
const request = vi.hoisted(() => vi.fn())

vi.mock('@/lib/events', () => ({ onEvent: vi.fn(() => () => undefined) }))
vi.mock('@/modules/install_checks/service', () => ({ installCheckService: () => ({ show, request }) }))

import InstallCheckCell from '@/modules/install_checks/components/InstallCheckCell.vue'
import { findingFix, findingTitle, installSummary, secondsLeft } from '@/modules/install_checks/rules'

const done: InstallSummary = {
  state: 'done',
  source: 'manual',
  requested_at: '2026-11-24T06:00:00Z',
  finished_at: '2026-11-24T06:00:05Z',
  errors: 0,
  warnings: 0,
}

/** Uma verificação terminada com um erro e um ok. */
function finished(patch: Partial<InstallCheck> = {}): InstallCheck {
  return {
    target: 'ad_tag',
    target_id: 't1',
    summary: { ...done, errors: 1 },
    requested_by_name: 'Dona',
    available_at: null,
    pages: ['https://blog.com/', 'https://blog.com/post'],
    findings: [
      { code: 'genius_legacy', severity: 'error', page: 'https://blog.com/', snippet: '<script src="https://genius.groone.com/g-tag.min.js"></script>' },
      { code: 'tag_found', severity: 'ok', page: 'https://blog.com/', snippet: null },
    ],
    ...patch,
  }
}

beforeEach(() => {
  lang.value = 'pt'
})

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
  document.body.innerHTML = ''
})

describe('regras da verificação de instalação', () => {
  it('resume erros antes de avisos e mostra quando nunca rodou', () => {
    expect(installSummary(null)).toEqual({ tone: 'neutral', label: 'Não verificado' })
    expect(installSummary({ ...done, errors: 2, warnings: 1 })).toEqual({ tone: 'bad', label: '2 erros' })
    expect(installSummary({ ...done, warnings: 1 })).toEqual({ tone: 'warn', label: '1 aviso' })
    expect(installSummary(done)).toEqual({ tone: 'ok', label: 'Tudo certo' })
    expect(installSummary({ ...done, state: 'pending', finished_at: null }).label).toBe('Verificando…')
  })

  it('conta a espera do botão para cima e traduz os achados', () => {
    const now = new Date('2026-11-24T06:00:00Z').getTime()
    expect(secondsLeft('2026-11-24T06:00:40.200Z', now)).toBe(41)
    expect(secondsLeft('2026-11-24T05:59:00Z', now)).toBe(0)
    expect(secondsLeft(null, now)).toBe(0)
    expect(findingTitle('genius_legacy')).toBe('Script antigo do Genius ainda no site')
    expect(findingFix('tag_found')).toBeNull()
    expect(findingTitle('codigo_novo')).toBe('codigo_novo')
    lang.value = 'es'
    expect(findingTitle('tag_missing')).toBe('La ad tag no está en la página')
  })

  it('chama os caminhos de cada painel', async () => {
    const { installCheckService } = await vi.importActual<typeof import('@/modules/install_checks/service')>('@/modules/install_checks/service')
    const get = vi.spyOn(api, 'get').mockResolvedValue(finished())
    const post = vi.spyOn(api, 'post').mockResolvedValue(finished())
    await installCheckService(false).show('ad_tag', 't1')
    await installCheckService(true).request('reward', 'r1')
    await installCheckService(false).request('loader', 'l1')
    expect(get).toHaveBeenCalledWith('/ad-tags/t1/install-check')
    expect(post).toHaveBeenCalledWith('/internal/rewards/r1/install-check')
    expect(post).toHaveBeenCalledWith('/loaders/l1/install-check')
  })
})

describe('célula da verificação', () => {
  afterEach(() => {
    show.mockReset()
    request.mockReset()
  })

  /** Monta a célula com o service falso. */
  async function cell(summary: InstallSummary | null | undefined) {
    return mount(InstallCheckCell, { props: { target: 'ad_tag', id: 't1', name: 'Principal', internal: false, summary }, attachTo: document.body })
  }

  it('verifica, conta 1 minuto e abre o resultado quando o worker acaba', async () => {
    vi.useFakeTimers({ now: new Date('2026-11-24T06:00:00Z') })
    request.mockResolvedValue(finished({ summary: { ...done, state: 'pending', finished_at: null }, available_at: '2026-11-24T06:01:00Z', findings: [] }))
    show.mockResolvedValue(finished({ available_at: '2026-11-24T06:01:00Z' }))
    const view = await cell(null)
    expect(view.text()).toContain('Não verificado')
    const verify = view.findAll('button').find((button) => button.text() === 'Verificar')
    await verify?.trigger('click')
    await flushPromises()
    expect(request).toHaveBeenCalledWith('ad_tag', 't1')
    expect(view.text()).toContain('Verificando…')
    await vi.advanceTimersByTimeAsync(3000)
    await flushPromises()
    expect(show).toHaveBeenCalledWith('ad_tag', 't1')
    expect(view.text()).toContain('1 erro')
    expect(view.text()).toContain('Verificar em 57 s')
    expect(document.body.textContent).toContain('Instalação da ad tag Principal')
    expect(document.body.textContent).toContain('Script antigo do Genius ainda no site')
    expect(document.body.textContent).toContain('Verificado em')
  })

  it('mostra a espera que a API devolveu no 429', async () => {
    vi.useFakeTimers({ now: new Date('2026-11-24T06:00:00Z') })
    request.mockRejectedValue(new ApiError(429, 'install_check_cooldown', 'espere', {}, 25))
    const view = await cell(done)
    const verify = view.findAll('button').find((button) => button.text() === 'Verificar')
    await verify?.trigger('click')
    await flushPromises()
    expect(view.text()).toContain('Verificar em 25 s')
    expect(show).not.toHaveBeenCalled()
  })

  it('busca o resumo quando a tela não passou um (detalhe)', async () => {
    show.mockResolvedValue(finished({ summary: { ...done, warnings: 2 } }))
    const view = await cell(undefined)
    await flushPromises()
    expect(show).toHaveBeenCalledOnce()
    expect(view.text()).toContain('2 avisos')
  })
})
