import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { lang } from '@/lib/i18n'
import type { ActivationFunnel, StalledClient } from '@/modules/internal/activation/types'

const funnel = vi.hoisted(() => vi.fn())
const task = vi.hoisted(() => vi.fn())

vi.mock('@/modules/internal/activation/service', () => ({ activationService: { funnel, task } }))
vi.mock('@/stores/session', () => ({ useSession: () => ({ can: () => true }) }))

import ActivationFunnelView from '@/modules/internal/activation/views/ActivationFunnelView.vue'
import { barWidth, filterStalled, managersOf, percentOf, taskDescription } from '@/modules/internal/activation/rules'

/** Um cliente parado com MCM aceito e sem ad tag. */
function stalled(patch: Partial<StalledClient> = {}): StalledClient {
  return { client_id: 'c1', name: 'Mundo Fitness', stage: 'accepted', days: 23, manager_id: 'm1', manager_name: 'João Pedro', task_id: null, ...patch }
}

/** O funil de 90 dias do protótipo. */
function sample(): ActivationFunnel {
  return {
    days: 90,
    stages: [
      { stage: 'lead', count: 120, median_days: null },
      { stage: 'invited', count: 64, median_days: 9 },
      { stage: 'accepted', count: 41, median_days: 6 },
      { stage: 'tag', count: 33, median_days: 12 },
      { stage: 'revenue', count: 29, median_days: 3 },
    ],
    total_days: 30,
    slowest: 'tag',
    stalled: [stalled(), stalled({ client_id: 'c2', name: 'Casa & Decoração', stage: 'invited', days: 17, manager_id: null, manager_name: null, task_id: 't9' })],
  }
}

/** Monta a tela com um roteador em memória. */
async function mountView() {
  const router = createRouter({ history: createMemoryHistory(), routes: [{ path: '/:pathMatch(.*)*', component: { template: '<div />' } }] })
  const wrapper = mount(ActivationFunnelView, { global: { plugins: [router] } })
  await flushPromises()
  return wrapper
}

describe('regras do Funil de ativação', () => {
  it('calcula a conversão, a barra e os filtros', () => {
    expect(percentOf(29, 120)).toBe(24)
    expect(percentOf(1, 0)).toBeNull()
    expect(barWidth({ stage: 'revenue', count: 1, median_days: 3 }, 120)).toBe(8)
    expect(barWidth({ stage: 'tag', count: 60, median_days: 3 }, 120)).toBe(50)
    const rows = sample().stalled
    expect(filterStalled(rows, { stage: 'accepted', manager: 'all', query: '' }).map((row) => row.client_id)).toEqual(['c1'])
    expect(filterStalled(rows, { stage: 'all', manager: 'none', query: 'casa' }).map((row) => row.client_id)).toEqual(['c2'])
    expect(managersOf(rows)).toEqual([{ id: 'm1', name: 'João Pedro' }])
  })

  it('monta o texto da tarefa', () => {
    lang.value = 'pt'
    expect(taskDescription(stalled())).toContain('Mundo Fitness está parado em "MCM aceito, falta a ad tag" há 23 dias')
  })
})

describe('tela Funil de ativação', () => {
  beforeEach(() => {
    lang.value = 'pt'
    funnel.mockResolvedValue(sample())
    task.mockResolvedValue({ task_id: 't1' })
  })
  afterEach(() => vi.clearAllMocks())

  it('mostra as etapas, os números do topo e os parados', async () => {
    const wrapper = await mountView()
    expect(funnel).toHaveBeenCalledWith(90)
    const text = wrapper.text()
    expect(text).toContain('24%')
    expect(text).toContain('29 de 120 no funil')
    expect(text).toContain('Ad tag instalada')
    expect(text).toContain('80% passam · 12 d')
    expect(text).toContain('Mundo Fitness')
    expect(text).toContain('Ver tarefa')
  })

  it('troca o período e cria a tarefa do parado', async () => {
    const wrapper = await mountView()
    await wrapper.find('[role="radio"][aria-checked="false"]').trigger('click')
    await flushPromises()
    expect(funnel).toHaveBeenLastCalledWith(180)
    const button = wrapper.findAll('button').find((item) => item.text() === 'Criar tarefa')
    await button?.trigger('click')
    await flushPromises()
    expect(task).toHaveBeenCalledWith('c1', expect.stringContaining('Mundo Fitness'))
    expect(wrapper.findAll('a').some((link) => link.attributes('href') === '/interno/tarefas/t1')).toBe(true)
  })
})
