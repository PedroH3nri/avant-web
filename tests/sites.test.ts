import { describe, expect, it } from 'vitest'
import { approval, tree } from '@/lib/sites'
import type { AdUnit } from '@/lib/types'

const unit = (id: string, name: string, parent_id: string | null = null): AdUnit => ({
  id,
  name,
  parent_id,
  network_id: 'n',
  site_id: 's',
  site_manual: false,
  code: null,
  status: 'active',
  synced_at: '2026-10-23T00:00:00Z',
})

describe('sites', () => {
  it('monta a árvore com profundidade e pai de fora como raiz', () => {
    const units = [unit('c', 'topo', 'a'), unit('a', 'acai.com.br'), unit('d', 'dentro', 'c'), unit('x', 'solto', 'outro-site')]
    expect(tree(units).map(({ unit, depth }) => `${depth}:${unit.name}`)).toEqual(['0:acai.com.br', '1:topo', '2:dentro', '0:solto'])
  })

  it('traduz a aprovação do GAM', () => {
    expect(approval('APPROVED').tone).toBe('ok')
    expect(approval('disapproved').tone).toBe('bad')
    expect(approval('UNCHECKED').tone).toBe('warn')
    expect(approval(null).tone).toBe('neutral')
  })
})
