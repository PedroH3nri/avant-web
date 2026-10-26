import { describe, expect, it } from 'vitest'
import { t } from '@/lib/i18n'
import { approval, tree } from '@/modules/sites/rules'
import type { AdUnit } from '@/modules/sites/types'

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
    const gam = (approval_status: string | null) => approval({ approval_status, awaiting_gam: false })
    expect(gam('APPROVED').tone).toBe('ok')
    expect(gam('disapproved').tone).toBe('bad')
    expect(gam('UNCHECKED').tone).toBe('warn')
    expect(gam(null).tone).toBe('neutral')
  })

  it('site cadastrado à mão aguarda o GAM', () => {
    const a = approval({ approval_status: null, awaiting_gam: true })
    expect(a.tone).toBe('ochre')
    expect(a.label).toBe(t('sites.awaiting'))
  })
})
