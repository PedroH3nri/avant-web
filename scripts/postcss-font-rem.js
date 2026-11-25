/** Plugin do PostCSS: passa o ``font-size`` em px para rem (16px = 1rem). Assim as classes
 * ``text-[14px]`` crescem com o tamanho do texto escolhido em Minha conta, no ``<html>``. */
const PIXELS = /(-?\d*\.?\d+)px\b/g
const BASE = 16

/** Troca cada valor em px da declaração pelo mesmo em rem. */
function toRem(value) {
  return value.replace(PIXELS, (_whole, pixels) => `${Number((Number(pixels) / BASE).toFixed(4))}rem`)
}

/** O plugin, para o ``postcss.config.js``. */
export default function fontRem() {
  return {
    postcssPlugin: 'avant-font-rem',
    Declaration: {
      'font-size': (declaration) => {
        declaration.value = toRem(declaration.value)
      },
    },
  }
}
fontRem.postcss = true
