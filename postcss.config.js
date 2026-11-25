import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import fontRem from './scripts/postcss-font-rem.js'

/** Tailwind, as fontes em rem (seguem o tamanho do texto da pessoa) e o prefixo dos navegadores. */
export default { plugins: [tailwindcss(), fontRem(), autoprefixer()] }
