/** Plugin do PostCSS: passa para rem (16px = 1rem) os px de fonte, tamanho, espaço, posição e
 * grade. Assim o painel inteiro cresce com o tamanho do texto escolhido em Minha conta, no
 * ``<html>``, como um zoom; bordas, sombras, cantos e valores até 2px ficam em px. */
const PIXELS = /(-?\d*\.?\d+)px\b/g
const BASE = 16
const KEEP_UP_TO = 2
const SCALED = new Set([
  'font-size',
  'line-height',
  'width',
  'height',
  'min-width',
  'min-height',
  'max-width',
  'max-height',
  'flex-basis',
  'gap',
  'row-gap',
  'column-gap',
  'grid-template-columns',
  'grid-template-rows',
  'grid-auto-columns',
  'grid-auto-rows',
  'top',
  'right',
  'bottom',
  'left',
  'inset',
  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',
  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',
  'scroll-margin-top',
])

/** Troca cada valor em px acima de 2px pelo mesmo em rem. */
function toRem(value) {
  return value.replace(PIXELS, (whole, pixels) => {
    const amount = Number(pixels)
    return Math.abs(amount) <= KEEP_UP_TO ? whole : `${Number((amount / BASE).toFixed(4))}rem`
  })
}

/** O plugin, para o ``postcss.config.js``. */
export default function scaleRem() {
  return {
    postcssPlugin: 'avant-scale-rem',
    Declaration(declaration) {
      if (SCALED.has(declaration.prop) && declaration.value.includes('px')) declaration.value = toRem(declaration.value)
    },
  }
}
scaleRem.postcss = true
