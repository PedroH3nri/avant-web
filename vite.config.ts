import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

// Em desenvolvimento a API roda em :8000; o proxy mantém tudo na mesma origem, como em
// produção (o nginx serve o painel e repassa /api para a API).
export default defineConfig({
  plugins: [vue()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: {
    proxy: { '/api': { target: process.env.AVANT_API_URL ?? 'http://localhost:8000', changeOrigin: false } },
  },
  test: { environment: 'jsdom', include: ['tests/**/*.test.ts'] },
})
