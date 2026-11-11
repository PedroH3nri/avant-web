import { describe, expect, it } from 'vitest'
import { colorVar, metricColor, metricColors } from '@/lib/metric-colors'

describe('cor por métrica', () => {
  it('dá a cor da família de cada métrica', () => {
    expect(metricColor('revenue')).toBe('lime')
    expect(metricColor('ecpm')).toBe('yellow')
    expect(metricColor('page_views')).toBe('magenta')
    expect(metricColor('impressions')).toBe('violet')
  })

  it('usa a reserva para métrica personalizada', () => {
    expect(metricColor('custom_1', 1)).toBe('cyan')
  })

  it('não repete cor no mesmo gráfico', () => {
    expect(metricColors(['revenue', 'revenue_gross', 'ecpm'])).toEqual(['lime', 'cyan', 'yellow'])
  })

  it('devolve a variável CSS da paleta', () => {
    expect(colorVar('lime')).toBe('var(--series-lime)')
  })
})
