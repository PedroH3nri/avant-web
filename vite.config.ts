import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import { i18nByLanguage } from './vite/i18n-plugin'

const VENDOR = /[\\/]node_modules[\\/](vue|@vue|vue-router|pinia|reka-ui|@floating-ui)[\\/]/

/** Põe o runtime do Vue, o roteador, o Pinia e o reka-ui no chunk vendor. */
function vendorChunk(id: string): string | undefined {
  return VENDOR.test(id) ? 'vendor' : undefined
}

// Em desenvolvimento a API roda em :8000; o proxy mantém tudo na mesma origem, como em
// produção (o nginx serve o painel e repassa /api para a API).
export default defineConfig({
  // Os textos de cada idioma num módulo próprio: a pessoa baixa só o do idioma dela.
  plugins: [vue(), i18nByLanguage()],
  // O runtime e as bibliotecas de UI num chunk próprio: o hash não muda a cada texto novo.
  build: {
    rollupOptions: {
      output: { manualChunks: vendorChunk },
    },
  },
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  server: {
    proxy: { '/api': { target: process.env.AVANT_API_URL ?? 'http://127.0.0.1:8000', changeOrigin: false } },
  },
  test: { environment: 'jsdom', include: ['tests/**/*.test.ts'], setupFiles: ['tests/setup-i18n.ts'] },
})
