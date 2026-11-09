import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// O reward.js, que roda no site do cliente: um arquivo só (IIFE), sem hash no nome, ao lado do
// painel em dist/. Roda depois do build do painel, por isso não limpa a pasta.
export default defineConfig({
  build: {
    emptyOutDir: false,
    copyPublicDir: false,
    target: 'es2019',
    lib: {
      entry: fileURLToPath(new URL('./src/embed/reward/main.ts', import.meta.url)),
      name: 'AvantReward',
      formats: ['iife'],
      fileName: () => 'reward.js',
    },
  },
})
