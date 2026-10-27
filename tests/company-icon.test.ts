import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import CompanyIcon from '@/components/CompanyIcon.vue'

describe('CompanyIcon', () => {
  it('mostra a imagem quando a Empresa tem uma', () => {
    const wrapper = mount(CompanyIcon, { props: { name: 'Blog Exemplo', imageUrl: '/api/v1/company/image?v=abc', size: 28 } })
    const image = wrapper.get('img')
    expect(image.attributes('src')).toBe('/api/v1/company/image?v=abc')
    expect(image.attributes('style')).toContain('width: 28px')
  })

  it('sem imagem, ou se ela não carregar, mostra a inicial do nome', async () => {
    const empty = mount(CompanyIcon, { props: { name: ' receitas da vó', imageUrl: null } })
    expect(empty.find('img').exists()).toBe(false)
    expect(empty.text()).toBe('R')
    const broken = mount(CompanyIcon, { props: { name: 'Tech', imageUrl: '/quebrada' } })
    await broken.get('img').trigger('error')
    expect(broken.find('img').exists()).toBe(false)
    expect(broken.text()).toBe('T')
  })
})
