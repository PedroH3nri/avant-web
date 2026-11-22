import { afterEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { defineComponent, h, ref } from 'vue'
import Select from '@/components/ui/Select.vue'
import { lang } from '@/lib/i18n'
import { chooseOption } from './select-helper'

lang.value = 'pt'

const FEW = [
  { value: '', label: 'Todos' },
  { value: 'active', label: 'Ativos' },
  { value: 'paused', label: 'Pausados' },
]
const MANY = ['Acre', 'Alagoas', 'Amapá', 'Bahia', 'Ceará', 'Goiás', 'Pará', 'São Paulo'].map((name) => ({ value: name.toLowerCase(), label: name }))

/** Monta o Select com um v-model de verdade, para ler o valor escolhido. */
function mountSelect(options: { value: string; label: string }[], initial = '', attrs: Record<string, unknown> = {}) {
  const value = ref(initial)
  const wrapper = mount(
    defineComponent({
      render: () => h(Select, { ...attrs, options, modelValue: value.value, 'onUpdate:modelValue': (next: string) => (value.value = next) }),
    }),
    { attachTo: document.body },
  )
  return { wrapper, value, trigger: () => wrapper.get('[role="combobox"]') }
}

/** Opções da lista aberta, pelo texto. */
function openLabels() {
  return [...document.querySelectorAll('[role="option"]')].map((option) => option.textContent?.trim())
}

afterEach(() => {
  document.body.innerHTML = ''
})

describe('Select', () => {
  it('mostra a opção escolhida, mantém o id do campo e troca o valor pela lista', async () => {
    const { value, trigger } = mountSelect(FEW, 'active', { id: 'status', 'aria-label': 'Status' })
    expect(trigger().text()).toBe('Ativos')
    expect(trigger().attributes('id')).toBe('status')
    expect(trigger().attributes('aria-label')).toBe('Status')
    await chooseOption(trigger().element, 'paused')
    expect(value.value).toBe('paused')
    expect(trigger().attributes('aria-expanded')).toBe('false')
  })

  it('com poucas opções não mostra busca; com muitas, busca sem acento', async () => {
    const few = mountSelect(FEW)
    await few.trigger().trigger('click')
    await flushPromises()
    expect(document.querySelector('[role="searchbox"]')).toBeNull()
    few.wrapper.unmount()
    document.body.innerHTML = ''

    const many = mountSelect(MANY)
    await many.trigger().trigger('click')
    await flushPromises()
    const search = document.querySelector<HTMLInputElement>('[role="searchbox"]')!
    search.value = 'sao'
    search.dispatchEvent(new Event('input'))
    await flushPromises()
    expect(openLabels()).toEqual(['São Paulo'])
    search.value = 'xyz'
    search.dispatchEvent(new Event('input'))
    await flushPromises()
    expect(openLabels()).toEqual([])
    expect(document.body.textContent).toContain('Nada encontrado')
  })

  it('escolhe pelo teclado: seta abre, setas andam e Enter escolhe', async () => {
    const { value, trigger } = mountSelect(MANY, 'acre')
    await trigger().trigger('keydown', { key: 'ArrowDown' })
    await flushPromises()
    const search = document.querySelector<HTMLInputElement>('[role="searchbox"]')!
    search.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    search.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
    search.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }))
    await flushPromises()
    expect(value.value).toBe('amapá')
  })

  it('sem opção que bata com o valor, mostra o texto de escolher', () => {
    const { trigger } = mountSelect(FEW.slice(1), 'other')
    expect(trigger().text()).toBe('Selecione…')
  })

  it('desativado não abre', async () => {
    const { trigger } = mountSelect(FEW, '', { disabled: true })
    await trigger().trigger('click')
    await flushPromises()
    expect(document.querySelector('[role="listbox"]')).toBeNull()
  })
})
