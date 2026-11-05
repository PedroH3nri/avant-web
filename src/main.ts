import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './styles.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { lang, loadLang } from './lib/i18n'
import { router } from './router'

// Os textos do idioma da pessoa chegam antes da primeira tela.
void loadLang(lang.value).then(() => createApp(App).use(createPinia()).use(router).mount('#app'))
