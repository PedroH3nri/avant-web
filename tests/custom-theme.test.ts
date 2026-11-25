import { describe, expect, it } from 'vitest'
import { alphaOf, failedRules, luminance, withBorder, contrast, customThemeCss, flattenColors, isDarkBackground, isHexColor, mix, parseColor, readableOn, STARTER_COLORS, themeVariables, toHslTriplet, toRgba, withAlpha } from '@/lib/customTheme'

describe('tema personalizado', () => {
  it('aceita só cores #rrggbb', () => {
    expect(isHexColor('#1f4bff')).toBe(true)
    expect(isHexColor(' #1F4BFF ')).toBe(true)
    expect(isHexColor('red')).toBe(false)
    expect(isHexColor('#fff')).toBe(false)
  })

  it('converte para o formato das variáveis', () => {
    expect(toHslTriplet('#ffffff')).toBe('0 0% 100%')
    expect(toHslTriplet('#000000')).toBe('0 0% 0%')
    expect(toHslTriplet('#ff0000')).toBe('0 100% 50%')
    expect(toHslTriplet('#0000ff')).toBe('240 100% 50%')
  })

  it('mistura, mede contraste e escolhe o texto que lê melhor', () => {
    expect(mix('#000000', '#ffffff', 0.5)).toBe('#808080')
    expect(Math.round(contrast('#000000', '#ffffff'))).toBe(21)
    expect(readableOn('#0b1220')).toBe('#ffffff')
    expect(readableOn('#fde047')).toBe('#0a0a0a')
    expect(isDarkBackground('#0b1220')).toBe(true)
    expect(isDarkBackground('#ffffff')).toBe(false)
  })

  it('tira as variáveis do painel das cinco cores', () => {
    const variables = themeVariables(STARTER_COLORS)
    expect(variables.background).toBe(STARTER_COLORS.background)
    expect(variables['card-foreground']).toBe(STARTER_COLORS.text)
    expect(variables['primary-foreground']).toBe('#ffffff')
    expect(variables.border).toBe(mix(STARTER_COLORS.background, STARTER_COLORS.text, 0.12))
  })

  it('usa texto legível no menu lateral quando o texto escolhido some nele', () => {
    const variables = themeVariables({ ...STARTER_COLORS, sidebar: '#f5f5f5' })
    expect(variables['sidebar-foreground']).toBe('#0a0a0a')
  })

  it('monta o CSS que ganha do claro, do escuro e da cor secundária', () => {
    const css = customThemeCss(STARTER_COLORS)
    expect(css.startsWith('html:root[data-custom-theme][data-custom-theme]{')).toBe(true)
    expect(css).toContain(`--background:${toHslTriplet(STARTER_COLORS.background)};`)
    expect(css).toContain('--primary-foreground:0 0% 100%;')
  })
})

describe('opacidade das cores', () => {
  /** Lê hex, rgb e rgba e guarda o alfa em dois dígitos. */
  it('lê rgba, rgb e hex de 8 dígitos', () => {
    expect(parseColor('rgba(31, 75, 255, 0.5)')).toBe('#1f4bff80')
    expect(parseColor('rgb(31, 75, 255)')).toBe('#1f4bff')
    expect(parseColor('#1F4BFF80')).toBe('#1f4bff80')
    expect(parseColor('rgba(300, 0, 0, 1)')).toBeNull()
    expect(parseColor('azul')).toBeNull()
  })

  /** Escreve a cor em rgba e troca só a opacidade. */
  it('escreve em rgba e troca a opacidade', () => {
    expect(toRgba('#1f4bff')).toBe('rgba(31, 75, 255, 1)')
    expect(withAlpha('#1f4bff', 0.5)).toBe('#1f4bff80')
    expect(withAlpha('#1f4bff80', 1)).toBe('#1f4bff')
    expect(alphaOf('#1f4bff80')).toBeCloseTo(0.5, 1)
  })

  /** A cor transparente aparece misturada com a camada de baixo. */
  it('compõe a opacidade sobre a camada de baixo', () => {
    const shown = flattenColors({ ...STARTER_COLORS, background: '#00000080' })
    expect(shown.background).toBe('#7f7f7f')
  })
})

describe('bordas, campos e rodapé', () => {
  /** Tema antigo sem borda ganha a borda calculada; a escolhida vira a borda e a dos campos. */
  it('usa a borda escolhida ou calcula a de antes', () => {
    const { border, ...older } = STARTER_COLORS
    expect(border).toBe(withBorder(older).border)
    const variables = themeVariables({ ...STARTER_COLORS, border: '#ff0000' })
    expect([variables.border, variables.input]).toEqual(['#ff0000', '#ff0000'])
  })

  /** Rodapé dos cartões e campos são o cartão mais escuro; a janela é o cartão. */
  it('escurece o cartão para o rodapé e os campos', () => {
    const variables = themeVariables({ ...STARTER_COLORS, card: '#808080' })
    expect(variables.dialog).toBe('#808080')
    expect(luminance(variables['card-footer']!)).toBeLessThan(luminance('#808080'))
    expect(luminance(variables.field!)).toBeLessThan(luminance(variables['card-footer']!))
  })
})

describe('regras de legibilidade', () => {
  /** O tema novo passa; tudo preto e botão sumido no cartão não passam. */
  it('aponta os pares sem contraste mínimo', () => {
    expect(failedRules(STARTER_COLORS)).toEqual([])
    const black = '#000000'
    const allBlack = { background: black, sidebar: black, card: black, text: black, primary: black, border: black, highlight: black }
    expect(failedRules(allBlack).map(({ rule }) => rule.key)).toEqual(['textBackground', 'textCard', 'primaryCard', 'highlightCard'])
    expect(failedRules({ ...STARTER_COLORS, text: '#e6edf710' }).map(({ rule }) => rule.key)).toEqual(['textBackground', 'textCard'])
  })
})

describe('cor de destaque', () => {
  /** Tema antigo sem destaque usa a cor principal; o destaque vira o foco e o halo dos botões. */
  it('vira o foco dos campos e o halo dos botões', () => {
    const { highlight: _unused, ...older } = STARTER_COLORS
    expect(withBorder(older).highlight).toBe(STARTER_COLORS.primary)
    const variables = themeVariables({ ...STARTER_COLORS, highlight: '#f59e0b' })
    expect([variables.ring, variables['glow-color'], variables['hover-border']]).toEqual(['#f59e0b', '#f59e0b', '#f59e0b'])
    expect(customThemeCss(STARTER_COLORS)).toContain('--glow-alpha:0.3;')
  })
})
