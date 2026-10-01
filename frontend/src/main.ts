import '@fontsource-variable/inter'
import './assets/main.css'

import { createApp } from 'vue'
import { inject } from '@vercel/analytics'
import App from './App.vue'
import { initI18n } from './i18n'
import { initTheme } from './composables/useTheme'

initTheme()
initI18n()

createApp(App).mount('#app')

if (import.meta.env.PROD) {
  inject()
}
