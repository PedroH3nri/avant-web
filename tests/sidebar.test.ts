import { beforeAll, describe, expect, it } from 'vitest'
import { lang, t } from '@/lib/i18n'
import { linkActive, visibleGroups, type NavItem } from '@/lib/navigation'

/** Os rótulos de todos os itens do menu, na ordem. */
const labels = (staff: boolean) => visibleGroups(staff).flatMap((section) => section.items.map((link) => t(link.key)))
/** Os títulos dos grupos com título. */
const headers = (staff: boolean) => visibleGroups(staff).flatMap((section) => (section.key ? [t(section.key)] : []))
/** Os itens ativos no caminho; as telas internas começam com /interno. */
const activeLabels = (staff: boolean, path: string) =>
  visibleGroups(staff)
    .flatMap((section) => section.items)
    .filter((link: NavItem) => linkActive(link, path, path.startsWith('/interno')))
    .map((link) => t(link.key))

describe('menu do painel', () => {
  beforeAll(() => (lang.value = 'pt'))

  it('mostra os mesmos itens para a equipe Groone, sem filtrar por permissão', () => {
    expect(labels(true)).toEqual(['Dashboard', 'Tarefas', 'Clientes', 'Equipes', 'Networks do GAM', 'Contratos', 'Sites', 'Rewards', 'Ad tags', 'Loaders', 'Regras de preço', 'Checklists', 'Ad Manager', 'Page Views', 'Resultado', 'Resultado dos clientes', 'Metas', 'Relatórios customizados', 'Ferramentas do GAM', 'Alertas', 'Envios agendados', 'Modelos de dashboard', 'Minha comissão', 'Minhas invoices', 'Comissões', 'Invoices', 'Equipe Groone', 'Papéis da equipe', 'Custos'])
    expect(headers(true)).toEqual(['Inventário', 'Relatórios', 'Ferramentas', 'Comissões', 'Empresa'])
  })

  it('quem não é da equipe Groone não vê os itens internos', () => {
    expect(labels(false)).toEqual(['Dashboard', 'Equipes', 'Networks do GAM', 'Sites', 'Rewards', 'Ad tags', 'Loaders', 'Regras de preço', 'Ad Manager', 'Page Views', 'Resultado', 'Relatórios customizados', 'Papéis e permissões', 'Custos'])
    expect(headers(false)).toEqual(['Inventário', 'Relatórios', 'Empresa'])
    expect(labels(false)).not.toContain('Equipe Groone')
  })

  it('não tem item de Configurações: a Empresa se configura pela Equipe', () => {
    expect(labels(true)).not.toContain('Configurações')
    expect(labels(false)).not.toContain('Configurações')
  })

  it('Equipes, para a equipe Groone, são as equipes dos clientes, nunca a própria', () => {
    const team = visibleGroups(true)
      .flatMap((section) => section.items)
      .find((link) => link.key === 'nav.team')
    expect(team?.to).toBe('/interno/equipes')
  })

  it('telas sem item próprio acendem o item de onde se chega, e só ele', () => {
    const cases: [string, string][] = [
      ['/', 'Dashboard'],
      ['/interno/papeis', 'Papéis da equipe'],
      ['/interno', 'Clientes'],
      ['/interno/clientes/c', 'Clientes'],
      ['/interno/pessoas', 'Clientes'],
      ['/interno/contratos', 'Contratos'],
      ['/interno/networks', 'Networks do GAM'],
      ['/interno/sites', 'Sites'],
      ['/interno/rewards/abc/metricas', 'Rewards'],
      ['/interno/loaders/abc', 'Loaders'],
      ['/interno/regras-de-preco/abc/regras/def', 'Regras de preço'],
      ['/interno/ad-tags/abc/metricas', 'Ad tags'],
      ['/relatorios/123', 'Relatórios customizados'],
      ['/dashboards/123', 'Dashboard'],
      ['/interno/tarefas/123', 'Tarefas'],
      ['/interno/alertas', 'Alertas'],
      ['/interno/envios', 'Envios agendados'],
      ['/interno/modelos-de-dashboard', 'Modelos de dashboard'],
    ]
    for (const [path, label] of cases) expect(activeLabels(true, path)).toEqual([label])
  })
})
