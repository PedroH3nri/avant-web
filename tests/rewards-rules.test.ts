import { describe, expect, it } from 'vitest'
import {
  adUnitNames,
  answerCounts,
  blankInput,
  cleanPath,
  contrastWarning,
  dayText,
  defaultStyle,
  formProblems,
  funnelRows,
  inputOf,
  lastDays,
  previewReward,
  rewardPermission,
  rewardsPath,
  share,
  toPayload,
} from '@/modules/rewards/rules'
import type { Reward, RewardMetrics } from '@/modules/rewards/types'

const TEXTS = { title: 'Liberado', description: 'Veja um anúncio', button: 'Liberar' }

/** Um formulário válido de reward novo. */
function validInput() {
  return { ...blankInput('s1', TEXTS), name: 'Receita', page_path: 'receitas/bolo' }
}

/** Métricas de exemplo com duas perguntas e contato. */
function sampleMetrics(): RewardMetrics {
  return {
    start: '2026-11-01',
    end: '2026-11-07',
    total: { day: '', opens: 100, clicks: 40, completed: 30, closed: 50 },
    days: [],
    steps: { question_1: 80, question_2: 70, lead: 60 },
    answers: [
      { question_id: 'q1', answer: 0, count: 50 },
      { question_id: 'q1', answer: 2, count: 30 },
      { question_id: 'q2', answer: 1, count: 70 },
    ],
  }
}

describe('formulário do reward', () => {
  it('um reward novo com nome e página está pronto', () => {
    expect(formProblems(validInput(), false).size).toBe(0)
    expect(blankInput('s1', TEXTS).style).toEqual(defaultStyle())
  })

  it('aponta os campos que faltam ou estão errados', () => {
    const input = { ...validInput(), name: ' ', page_path: '', cooldown_minutes: 2, trigger: 'click' as const, click_selector: '' }
    expect([...formProblems(input, false)].sort()).toEqual(['cooldown', 'name', 'page', 'selector'])
    const image = { ...validInput(), icon_kind: 'image' as const }
    expect(formProblems(image, false).has('image')).toBe(true)
    expect(formProblems(image, true).has('image')).toBe(false)
    const questions = { ...validInput(), questions: [{ id: null, title: 'Qual?', description: '', answers: ['A', '', 'C'] }] }
    expect(formProblems(questions, false).has('questions')).toBe(true)
  })

  it('não deixa o destino ser a própria página', () => {
    expect(formProblems({ ...validInput(), redirect_path: '/receitas/bolo/' }, false).has('redirectSame')).toBe(true)
    expect(formProblems({ ...validInput(), redirect_path: '' }, false).has('redirect')).toBe(true)
    expect(formProblems({ ...validInput(), redirect_path: 'receitas/bolo/completa' }, false).size).toBe(0)
  })

  it('limpa o caminho colado e só manda os campos do gatilho escolhido', () => {
    expect(cleanPath(' https://site.com/receitas/bolo ')).toBe('receitas/bolo')
    expect(cleanPath('/receitas')).toBe('receitas')
    const payload = toPayload({ ...validInput(), page_path: 'https://site.com/a', scroll_percent: 40, click_selector: '#x', trigger: 'load' })
    expect(payload.page_path).toBe('a')
    expect(payload.scroll_percent).toBeNull()
    expect(payload.click_selector).toBeNull()
  })

  it('volta ao formulário com os dados e as perguntas de um reward salvo', () => {
    const reward = {
      ...validInput(),
      id: 'r1',
      domain: 'site.com',
      client: null,
      icon_url: null,
      questions: [{ id: 'q1', position: 0, title: 'Qual?', description: '', answers: ['A', 'B', 'C'] }],
      created_at: '',
      updated_at: '',
      deleted_at: null,
    } as Reward
    const input = inputOf(reward)
    expect(input.questions).toEqual([{ id: 'q1', title: 'Qual?', description: '', answers: ['A', 'B', 'C'] }])
    expect(previewReward(input, null).questions[0]?.id).toBe('q1')
  })

  it('avisa do contraste baixo do botão e do texto', () => {
    expect(contrastWarning(defaultStyle())).toBeNull()
    expect(contrastWarning({ ...defaultStyle(), button_text_color: '#1976d2' })).toBe('button')
    expect(contrastWarning({ ...defaultStyle(), text_color: '#0b2440' })).toBe('text')
  })
})

describe('métricas do reward', () => {
  it('monta o funil na ordem das etapas do reward', () => {
    const reward = { questions: [{ id: 'q1' }, { id: 'q2' }], lead: { position: 'start' } } as Pick<Reward, 'questions' | 'lead'>
    expect(funnelRows(reward, sampleMetrics()).map((row) => `${row.key}:${row.value}`)).toEqual([
      'opens:100',
      'lead:60',
      'question_1:80',
      'question_2:70',
      'clicks:40',
      'completed:30',
    ])
  })

  it('conta as respostas de cada pergunta', () => {
    expect(answerCounts(sampleMetrics(), 'q1')).toEqual([50, 0, 30])
    expect(answerCounts(sampleMetrics(), 'outra')).toEqual([0, 0, 0])
    expect(share(1, 3)).toBe(33.3)
    expect(share(5, 0)).toBe(0)
  })

  it('formata os dias sem o fuso mudar a data e monta o período', () => {
    expect(dayText('2026-11-01', 'pt-BR')).toBe('01/11/2026')
    expect(lastDays(7, new Date(2026, 10, 9))).toEqual({ from: '2026-11-03', to: '2026-11-09' })
  })

  it('escreve os ad units com o aparelho e escolhe a permissão e o caminho do painel', () => {
    const devices = { desktop: 'Computador', mobile: 'Celular' }
    expect(adUnitNames([{ name: 'a', desktop: true, mobile: true }, { name: 'b', desktop: false, mobile: true }], devices)).toBe('a, b (Celular)')
    expect(rewardPermission(true, 'leads')).toBe('internal.rewards.leads')
    expect(rewardPermission(false, 'manage')).toBe('rewards.manage')
    expect(rewardsPath(true)).toBe('/interno/rewards')
  })
})
