import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './styles.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { showBootFailure } from './lib/boot-failure'
import { startLang } from './lib/i18n'
import { router } from './router'

/** Monta o painel depois que os textos chegam; sem nenhum idioma, mostra o aviso de recarregar. */
function boot(): void {
  const root = document.querySelector<HTMLElement>('#app')
  startLang().then(
    () => createApp(App).use(createPinia()).use(router).mount('#app'),
    () => root && showBootFailure(root),
  )
}

boot()
