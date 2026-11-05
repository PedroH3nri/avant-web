/** Plugin do Vite que serve ``virtual:i18n/pt``, ``en`` e ``es`` a partir do ``source.ts``. */

import type { Plugin, ViteDevServer } from 'vite'
import { type Lang, languageMessages, type Source } from './i18n-messages'

const PREFIX = 'virtual:i18n/'
const RESOLVED = `\0${PREFIX}`
const SOURCE = '/src/lib/i18n/source.ts'
const LANGS: readonly Lang[] = ['pt', 'en', 'es']

/** Os textos de todos os idiomas, um módulo por idioma; o source.ts nunca entra no pacote. */
export function i18nByLanguage(): Plugin {
  let server: ViteDevServer | undefined
  return {
    name: 'avant-i18n-by-language',
    configureServer(dev) {
      server = dev
    },
    resolveId(id) {
      return id.startsWith(PREFIX) ? `\0${id}` : undefined
    },
    async load(id) {
      if (!id.startsWith(RESOLVED)) return undefined
      const lang = id.slice(RESOLVED.length) as Lang
      if (!LANGS.includes(lang)) throw new Error(`idioma desconhecido: ${lang}`)
      const source = (server ? await server.ssrLoadModule(SOURCE) : await import('../src/lib/i18n/source')) as Source
      return `export default ${JSON.stringify(languageMessages(source, lang))}`
    },
    handleHotUpdate({ file, server: dev }) {
      if (!file.endsWith(SOURCE)) return undefined
      for (const lang of LANGS) {
        const module = dev.moduleGraph.getModuleById(`${RESOLVED}${lang}`)
        if (module) dev.moduleGraph.invalidateModule(module)
      }
      dev.ws.send({ type: 'full-reload' })
      return []
    },
  }
}
