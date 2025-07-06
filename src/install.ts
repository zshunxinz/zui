import './styles/theme.css'
import { Button } from './components/Button'
import { ButtonGroup } from './components/ButtonGroup'
import { Col } from './components/Col'
import { Input } from './components/Input'
import { Row } from './components/Row'
import type { App } from 'vue'

import * as components from './components'

export default {
  install(app: App) {
    for (const key in components) {
      const comp = components[key as keyof typeof components]
      app.component(key, comp)
    }
  }
}

export {
  Button,
  ButtonGroup,
  Col,
  Input,
  Row
}