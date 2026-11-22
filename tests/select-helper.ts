import { flushPromises } from '@vue/test-utils'

/** Abre o Select pelo botão e escolhe a opção pelo valor, como a pessoa faria com o mouse. */
export async function chooseOption(trigger: Element, value: string) {
  ;(trigger as HTMLElement).click()
  await flushPromises()
  const option = document.querySelector<HTMLElement>(`[role="option"][data-value="${value}"]`)
  if (!option) throw new Error(`opção ${value} não está na lista aberta`)
  option.click()
  await flushPromises()
}
