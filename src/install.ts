import './styles/theme.css'
import './styles/variables.css';
import { Button } from './components/Button'
import { ButtonGroup } from './components/ButtonGroup'
import { Col } from './components/Col'
import { Input } from './components/Input'
import { Row } from './components/Row'
import { Radio } from './components/Radio'
import { Checkbox } from './components/Checkbox'
import { CheckboxGroup } from './components/Checkbox'
import { CheckboxButton } from './components/Checkbox'
import { Switch } from './components/Switch'
import { Select, Option, OptionGroup } from './components/Select'

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
  Row,
  Radio,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Switch,
  Select,
  Option,
  OptionGroup,
}