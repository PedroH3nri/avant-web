import { beforeAll, describe, expect, it } from 'vitest'
import { lang, t } from '@/lib/i18n'
import { linkActive, visibleGroups, type NavItem } from '@/lib/navigation'

/** Os rótulos de todos os itens do menu, na ordem. */
const labels = (onGroone: boolean) => visibleGroups(onGroone).flatMap((section) => section.items.map((link) => t(link.key)))
/** Os títulos dos grupos com título. */
const headers = (onGroone: boolean) => visibleGroups(onGroone).flatMap((section) => (section.key ? [t(section.key)] : []))
/** Os itens ativos no caminho; as telas internas começam com /interno. */
const activeLabels = (onGroone: boolean, path: string) =>
  visibleGroups(onGroone)
    .flatMap((section) => section.items)
    .filter((link: NavItem) => linkActive(link, path, path.startsWith('/interno')))
    .map((link) => t(link.key))

describe('menu do painel', () => {
  beforeAll(() => (lang.value = 'pt'))

  it('com a Company Groone ativa mostra o painel interno, sem filtrar por permissão', () => {
    expect(labels(true)).toEqual(['Dashboard', 'Tarefas', 'Clientes', 'Empresas', 'Networks do GAM', 'Contratos', 'Sites', 'Rewards', 'Ad tags', 'Loaders', 'Regras de preço', 'Checklists', 'Ad Manager', 'Page Views', 'Resultado', 'Resultado dos clientes', 'Metas', 'Campanhas do Facebook', 'Campanhas do Google Ads', 'Relatórios customizados', 'Facebook', 'Google Ads', 'Ferramentas do GAM', 'Alertas', 'Envios agendados', 'Modelos de dashboard', 'Minha comissão', 'Minhas invoices', 'Comissões', 'Invoices', 'Equipe Groone', 'Papéis da equipe', 'Custos'])
    expect(headers(true)).toEqual(['Inventário', 'Relatórios', 'Integrações', 'Ferramentas', 'Comissões', 'Empresa'])
  })

  it('com uma Empresa cliente ativa mostra os links dela, sem os internos (também para a equipe Groone)', () => {
    expect(labels(false)).toEqual(['Dashboard', 'Equipes', 'Networks do GAM', 'Sites', 'Rewards', 'Ad tags', 'Loaders', 'Regras de preço', 'Ad Manager', 'Page Views', 'Resultado', 'Campanhas do Facebook', 'Campanhas do Google Ads', 'Relatórios customizados', 'Facebook', 'Google Ads', 'Papéis e permissões', 'Custos'])
    expect(headers(false)).toEqual(['Inventário', 'Relatórios', 'Integrações', 'Empresa'])
    expect(labels(false)).not.toContain('Equipe Groone')
  })

  it('não tem item de Configurações: a Empresa se configura pela Equipe', () => {
    expect(labels(true)).not.toContain('Configurações')
    expect(labels(false)).not.toContain('Configurações')
  })

  it('no painel interno aparece Empresas no lugar de Equipes', () => {
    const links = visibleGroups(true).flatMap((section) => section.items)
    expect(links.find((link) => link.key === 'int.companies')?.to).toBe('/interno/empresas')
    expect(links.some((link) => link.key === 'nav.team')).toBe(false)
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
      ['/interno/campanhas-facebook/123', 'Campanhas do Facebook'],
      ['/interno/facebook', 'Facebook'],
      ['/interno/campanhas-google-ads/campaign/123', 'Campanhas do Google Ads'],
      ['/interno/google-ads', 'Google Ads'],
      ['/interno/modelos-de-dashboard', 'Modelos de dashboard'],
    ]
    for (const [path, label] of cases) expect(activeLabels(true, path)).toEqual([label])
  })
})
