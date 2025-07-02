import './styles/theme.css'
import * as components from './components'
import type { App } from 'vue'

export default {
  install(app: App) {
    for (const key in components) {
      const comp = components[key as keyof typeof components]
      app.component(key, comp)
    }
  }
}