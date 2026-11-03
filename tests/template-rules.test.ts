import { describe, expect, it } from 'vitest'
import { blankTemplate, canPreview, roleNames, templateForm, templateInput, toggleRole, withAudience } from '@/modules/dashboards/template-rules'
import type { ManagedTemplate } from '@/modules/dashboards/types'

const saved: ManagedTemplate = {
  id: 't1',
  key: null,
  name: { pt: 'Vendas', en: 'Sales', es: 'Vendas' },
  definition: { schema_version: 1, filters: {}, widgets: [] },
  audience: 'groone',
  role_ids: ['r1'],
  is_home: false,
  updated_at: '2026-11-03T12:00:00Z',
}

describe('regras dos modelos de dashboard', () => {
  it('monta o formulário e deixa vazio o nome que só repete o português', () => {
    expect(templateForm(saved).name).toEqual({ pt: 'Vendas', en: 'Sales', es: '' })
    expect(blankTemplate('clients')).toMatchObject({ audience: 'clients', role_ids: [] })
  })

  it('tira os papéis ao trocar o público e marca e desmarca papéis', () => {
    const form = templateForm(saved)
    expect(withAudience(form, 'groone')).toBe(form)
    expect(withAudience(form, 'clients')).toMatchObject({ audience: 'clients', role_ids: [] })
    expect(toggleRole(form, 'r2').role_ids).toEqual(['r1', 'r2'])
    expect(toggleRole(form, 'r1').role_ids).toEqual([])
  })

  it('mostra os nomes dos papéis e roda os números só no modelo da Groone já gravado', () => {
    const roles = [
      { id: 'r2', name: { pt: 'Suporte' } },
      { id: 'r1', name: { pt: 'Comercial' } },
    ]
    expect(roleNames(['r1', 'r9'], roles)).toEqual(['Comercial'])
    expect(canPreview(saved, 'groone')).toBe(true)
    expect(canPreview(saved, 'clients')).toBe(false)
    expect(canPreview(null, 'groone')).toBe(false)
  })

  it('limpa os nomes para salvar', () => {
    const form = { ...templateForm(saved), name: { pt: ' Vendas ', en: ' ', es: '' } }
    expect(templateInput(form, saved.definition).name).toEqual({ pt: 'Vendas', en: '', es: '' })
  })
})
