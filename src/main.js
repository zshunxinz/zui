import { createApp } from 'vue'
// import './styles/theme.css'
// import '@/styles/variables.css'
import '@/style.css'
import App from '@/App.vue'
import Zui from './install'


let app = createApp(App)

app.use(Zui)


app.mount('#app')
