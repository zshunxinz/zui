import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import zui from 'zui-01'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(zui as any)

app.mount('#app')
