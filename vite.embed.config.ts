import { createRequire } from 'node:module'
import { defineConfig } from 'vite'

const ENTRIES = { tag: { module: 'avant-tag/tag', name: 'AvantTag' }, reward: { module: 'avant-tag/reward-script', name: 'AvantReward' } } as const
type Entry = keyof typeof ENTRIES

/** O script do build pela variável ENTRY: tag (o tag.js) ou reward (o reward.js). */
function chosenEntry(value: string | undefined): Entry {
  return value === 'reward' ? 'reward' : 'tag'
}

const entry = chosenEntry(process.env.ENTRY)
const source = createRequire(import.meta.url).resolve(ENTRIES[entry].module)

// Os scripts que rodam no site do cliente, do pacote avant-tag: um arquivo só (IIFE) por script,
// sem hash no nome, ao lado do painel em dist/. Rodam depois do build do painel, sem limpar a pasta.
export default defineConfig({
  build: {
    emptyOutDir: false,
    copyPublicDir: false,
    target: 'es2019',
    lib: {
      entry: source,
      name: ENTRIES[entry].name,
      formats: ['iife'],
      fileName: () => `${entry}.js`,
    },
  },
})
