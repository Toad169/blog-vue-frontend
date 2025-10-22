import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'htmx.org'

// import './main.css'

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
