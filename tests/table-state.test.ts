import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import TableState from '@/components/ui/TableState.vue'
import { lang } from '@/lib/i18n'

lang.value = 'pt'

// TableState desenha linhas: precisa de uma tabela em volta para o jsdom montar o <tr>.
function inTable(props: { cols: number; loading?: boolean; empty?: boolean; title?: string; desc?: string; rows?: number }, slot?: string) {
  return mount(
    defineComponent({
      render: () => h('table', [h('tbody', [h(TableState, props, slot ? { default: () => h('button', slot) } : undefined)])]),
    }),
  )
}

describe('TableState', () => {
  it('carregando: linhas-esqueleto com uma célula por coluna', () => {
    const w = inTable({ cols: 4, loading: true, rows: 2 })
    const rows = w.findAll('tr[aria-hidden="true"]')
    expect(rows).toHaveLength(2)
    expect(rows[0]!.findAll('td')).toHaveLength(4)
    expect(w.find('[role="status"]').text()).toBe('Carregando…')
  })

  it('vazio: uma linha ocupando a tabela inteira, com o texto e a ação', () => {
    const w = inTable({ cols: 5, empty: true, title: 'Nenhum site ainda', desc: 'Conecte uma network.' }, 'Conectar network')
    const cell = w.get('td')
    expect(cell.attributes('colspan')).toBe('5')
    expect(cell.text()).toContain('Nenhum site ainda')
    expect(cell.text()).toContain('Conecte uma network.')
    expect(w.get('button').text()).toBe('Conectar network')
  })

  it('com dados: não desenha nada', () => {
    const w = inTable({ cols: 3 })
    expect(w.findAll('tr')).toHaveLength(0)
  })
})
