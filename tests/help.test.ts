import { beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { filterArticles, filterGuides, npsGroup, paragraphs, readingMinutes, whatsappLink } from '@/modules/help/rules'
import type { HelpCenterItem } from '@/modules/help/types'
import { bodyOf, draftOf, filterHelpItems, missingLanguages, newDraft } from '@/modules/internal/help/rules'
import type { HelpItemRow } from '@/modules/internal/help/types'
import { filterAnswers, managersOf } from '@/modules/internal/nps/rules'
import type { NpsAnswer } from '@/modules/internal/nps/types'

const prompt = vi.hoisted(() => vi.fn())
const answer = vi.hoisted(() => vi.fn())
const dismiss = vi.hoisted(() => vi.fn())
vi.mock('@/modules/help/service', () => ({ npsService: { prompt, answer, dismiss }, helpService: {} }))

import NpsPrompt from '@/modules/help/components/NpsPrompt.vue'
import HelpItemEditor from '@/modules/internal/help/components/HelpItemEditor.vue'

/** Um guia ou artigo publicado, em português. */
function item(kind: HelpCenterItem['kind'], title: string, extra: Partial<HelpCenterItem['content']> = {}, category: HelpCenterItem['category'] = 'getting_started'): HelpCenterItem {
  return { id: title, kind, category, locale: 'pt', updated_at: '2026-11-26T12:00:00Z', content: { title, summary: '', body: '', steps: [], ...extra } }
}

/** Uma linha do editor com os idiomas dados. */
function row(title: string, extra: Partial<HelpItemRow> = {}): HelpItemRow {
  return {
    id: title,
    kind: 'guide',
    category: 'technologies',
    published: true,
    published_at: null,
    position: 0,
    created_at: '2026-11-26T12:00:00Z',
    updated_at: '2026-11-26T12:00:00Z',
    languages: ['pt'],
    title,
    reads: 0,
    translations: {},
    ...extra,
  }
}

/** Uma resposta do NPS. */
function response(score: number, manager: string | null, comment = ''): NpsAnswer {
  return { id: `${score}-${manager}`, company_id: 'c1', company_name: 'Blog', user_name: 'Ana', score, comment, answered_at: '2026-11-26T12:00:00Z', manager_id: manager, manager_name: manager ? `Gerente ${manager}` : null }
}

describe('central de ajuda', () => {
  it('monta o link do WhatsApp só com número', () => {
    expect(whatsappLink('+55 (11) 99999-0000', 'Olá!')).toBe('https://wa.me/5511999990000?text=Ol%C3%A1!')
    expect(whatsappLink(null, 'Olá')).toBe('')
  })

  it('busca artigos por categoria e texto e guias pelos passos', () => {
    const items = [
      item('article', 'Pagamento', { body: 'invoice do mês' }, 'payments'),
      item('article', 'Ad tag', { summary: 'script' }),
      item('guide', 'Reward', { steps: [{ title: 'Abra', text: 'Clique em novo reward', image_url: null }] }, 'technologies'),
    ]
    expect(filterArticles(items, 'payments', '').map((found) => found.id)).toEqual(['Pagamento'])
    expect(filterArticles(items, 'all', 'SCRIPT').map((found) => found.id)).toEqual(['Ad tag'])
    expect(filterGuides(items, 'novo reward').map((found) => found.id)).toEqual(['Reward'])
  })

  it('separa os parágrafos e calcula a leitura', () => {
    expect(paragraphs('Um\n\n  \nDois\nlinha')).toEqual(['Um', 'Dois\nlinha'])
    expect(readingMinutes('')).toBe(1)
    expect(readingMinutes(Array(600).fill('palavra').join(' '))).toBe(3)
  })

  it('classifica a nota do NPS', () => {
    expect([0, 6, 7, 8, 9, 10].map(npsGroup)).toEqual(['detractor', 'detractor', 'passive', 'passive', 'promoter', 'promoter'])
  })
})

describe('editor da central de ajuda', () => {
  it('filtra por tipo, situação, categoria e título e mostra as traduções que faltam', () => {
    const rows = [row('Ad tag'), row('Pagamento', { kind: 'article', category: 'payments', published: false, languages: ['pt', 'en', 'es'] })]
    expect(filterHelpItems(rows, { kind: 'article', state: 'all', category: 'all', query: '' }).map((found) => found.id)).toEqual(['Pagamento'])
    expect(filterHelpItems(rows, { kind: 'all', state: 'published', category: 'all', query: '' }).map((found) => found.id)).toEqual(['Ad tag'])
    expect(filterHelpItems(rows, { kind: 'all', state: 'all', category: 'payments', query: 'pag' }).map((found) => found.id)).toEqual(['Pagamento'])
    expect(missingLanguages(rows[0]!)).toEqual(['en', 'es'])
  })

  it('abre o novo guia e o novo artigo a partir do rascunho reativo da tela', async () => {
    for (const kind of ['guide', 'article'] as const) {
      const draft = ref(newDraft(kind))
      const wrapper = mount(HelpItemEditor, { props: { open: true, draft: draft.value } })
      await flushPromises()
      expect(wrapper.emitted()).not.toHaveProperty('error')
      wrapper.unmount()
    }
  })

  it('manda só os idiomas com título e copia os prints para traduzir', () => {
    const opened = draftOf(
      row('Ad tag', {
        translations: { pt: { title: 'Ad tag', summary: '', body: 'sobra', steps: [{ title: 'Abra', text: '', image_id: 'img-1', image_url: '/api/v1/help/images/img-1' }] } },
      }),
    )
    expect(opened.translations.en.steps[0]?.image_id).toBe('img-1')
    const body = bodyOf(opened)
    expect(Object.keys(body.translations)).toEqual(['pt'])
    expect(body.translations.pt?.body).toBe('')
    expect(body.translations.pt?.steps).toEqual([{ title: 'Abra', text: '', image_id: 'img-1' }])
    const article = newDraft('article')
    article.translations.pt.title = 'Quando recebo?'
    article.translations.pt.body = 'No dia 20.'
    expect(bodyOf(article).translations.pt).toEqual({ title: 'Quando recebo?', summary: '', body: 'No dia 20.', steps: [] })
  })
})

describe('NPS dos clientes', () => {
  it('filtra por grupo, gerente e busca e lista os gerentes', () => {
    const answers = [response(10, 'm1', 'ótimo'), response(3, 'm2'), response(5, null)]
    expect(filterAnswers(answers, { group: 'detractor', manager: 'all', query: '' })).toHaveLength(2)
    expect(filterAnswers(answers, { group: 'all', manager: 'none', query: '' })).toHaveLength(1)
    expect(filterAnswers(answers, { group: 'all', manager: 'all', query: 'ÓTIMO' })).toHaveLength(1)
    expect(managersOf(answers).map((manager) => manager.name)).toEqual(['Gerente m1', 'Gerente m2'])
  })
})

describe('pesquisa de NPS no painel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    prompt.mockReset()
    answer.mockReset().mockResolvedValue(undefined)
    dismiss.mockReset().mockResolvedValue(undefined)
  })

  it('pergunta, guarda a nota com o comentário e agradece', async () => {
    prompt.mockResolvedValue({ ask: true })
    const wrapper = mount(NpsPrompt)
    await flushPromises()
    vi.advanceTimersByTime(1500)
    await flushPromises()
    const buttons = wrapper.findAll('button').filter((button) => button.text() === '3')
    await buttons[0]!.trigger('click')
    await wrapper.find('textarea').setValue('Demora')
    await wrapper.findAll('button').at(-1)?.trigger('click')
    await flushPromises()
    expect(answer).toHaveBeenCalledWith(3, 'Demora')
    expect(wrapper.text()).toContain('Thanks')
    vi.useRealTimers()
  })

  it('não aparece quando já respondeu e fechar sem nota dispensa o trimestre', async () => {
    prompt.mockResolvedValue({ ask: false })
    const hidden = mount(NpsPrompt)
    await flushPromises()
    vi.advanceTimersByTime(1500)
    await flushPromises()
    expect(hidden.find('[role="dialog"]').exists()).toBe(false)
    prompt.mockResolvedValue({ ask: true })
    const wrapper = mount(NpsPrompt)
    await flushPromises()
    vi.advanceTimersByTime(1500)
    await flushPromises()
    await wrapper.find('button').trigger('click')
    await flushPromises()
    expect(dismiss).toHaveBeenCalled()
    vi.useRealTimers()
  })
})
