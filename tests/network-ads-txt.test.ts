import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { ApiError } from '@/lib/api'
import { lang } from '@/lib/i18n'

const adsTxt = vi.hoisted(() => vi.fn())
vi.mock('@/modules/internal/gam_tools/service', () => ({ gamToolService: { adsTxt } }))
vi.mock('vue-sonner', () => ({ toast: Object.assign(vi.fn(), { error: vi.fn(), success: vi.fn() }) }))

import NetworkAdsTxtCard from '@/modules/internal/inventory/components/NetworkAdsTxtCard.vue'

beforeEach(() => {
  lang.value = 'pt'
  adsTxt.mockReset()
})

describe('ads.txt nos detalhes da network', () => {
  /** Com o seller ID, mostra as linhas e o botão de copiar. */
  it('mostra as linhas da network', async () => {
    adsTxt.mockResolvedValue({ lines: ['groone.com, pub-42, DIRECT'] })
    const card = mount(NetworkAdsTxtCard, { props: { networkId: 'n1', inventory: false } })
    await flushPromises()
    expect(adsTxt).toHaveBeenCalledWith('n1')
    expect(card.find('pre').text()).toBe('groone.com, pub-42, DIRECT')
    expect(card.text()).toContain('Copiar')
  })

  /** Sem o seller ID, explica que ele vem do GAM de hora em hora. */
  it('avisa quando o seller ID ainda não chegou', async () => {
    adsTxt.mockRejectedValue(new ApiError(422, 'seller_id_missing', 'x'))
    const card = mount(NetworkAdsTxtCard, { props: { networkId: 'n1', inventory: true } })
    await flushPromises()
    expect(card.find('pre').exists()).toBe(false)
    expect(card.text()).toContain('de hora em hora')
  })
})
