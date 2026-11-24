import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { lang } from '@/lib/i18n'

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
