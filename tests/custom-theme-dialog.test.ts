import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { STARTER_COLORS } from '@/lib/customTheme'
import { lang } from '@/lib/i18n'
import { previewColors } from '@/lib/theme'

vi.mock('@/modules/account/service', () => ({ accountService: { createTheme: vi.fn(), updateTheme: vi.fn() } }))
vi.mock('vue-sonner', () => ({ toast: Object.assign(vi.fn(), { error: vi.fn(), success: vi.fn() }) }))

import CustomThemeDialog from '@/modules/account/components/CustomThemeDialog.vue'

beforeEach(() => {
  lang.value = 'pt'
})

describe('editor do tema personalizado', () => {
  /** O campo de opacidade é numérico: o valor digitado muda a cor (antes ficava em 100). */
  it('muda a opacidade digitada', async () => {
    const wrapper = mount(CustomThemeDialog, { props: { open: false, editing: null }, attachTo: document.body })
    await wrapper.setProps({ open: true })
    await flushPromises()
    const opacity = document.querySelector<HTMLInputElement>('input[aria-label="Opacidade de Cartões"]')
    expect(opacity?.value).toBe('100')
    opacity!.value = '40'
    opacity!.dispatchEvent(new Event('input'))
    await flushPromises()
    expect(opacity?.value).toBe('40')
    expect(document.querySelector<HTMLInputElement>('#theme-card')?.value).toMatch(/, 0\.4\)$/)
    wrapper.unmount()
  })
})

describe('prévia no painel', () => {
  /** As cores em edição valem no painel antes de salvar e saem ao fechar o editor. */
  it('mostra as cores no painel e volta ao fechar', async () => {
    const wrapper = mount(CustomThemeDialog, { props: { open: false, editing: null }, attachTo: document.body })
    await wrapper.setProps({ open: true })
    await flushPromises()
    expect(previewColors.value?.background).toBe(STARTER_COLORS.background)
    expect(document.documentElement.hasAttribute('data-custom-theme')).toBe(true)
    const background = document.querySelector<HTMLInputElement>('#theme-background')!
    background.value = '#123456'
    background.dispatchEvent(new Event('input'))
    await flushPromises()
    expect(previewColors.value?.background).toBe('#123456')
    background.value = '#e6edf7'
    background.dispatchEvent(new Event('input'))
    await flushPromises()
    expect(previewColors.value?.background).toBe('#123456')
    await wrapper.setProps({ open: false })
    await flushPromises()
    expect(previewColors.value).toBeNull()
    wrapper.unmount()
  })
})
