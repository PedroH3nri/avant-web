import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import scaleRem from './scripts/postcss-scale-rem.js'

/** Tailwind, os tamanhos em rem (seguem o tamanho do texto da pessoa) e o prefixo dos navegadores. */
export default { plugins: [tailwindcss(), scaleRem(), autoprefixer()] }
