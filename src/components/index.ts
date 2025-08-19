import { Input } from './Input'
import { Row } from './Row'
import { Col } from './Col'
import { Button } from './Button'
import { ButtonGroup } from './ButtonGroup'
import { HelloWorld } from './HelloWorld'
import { ThemeToggle } from './ThemeToggle'
import { Radio } from './Radio'
import { Checkbox } from './Checkbox'
import { CheckboxGroup } from './Checkbox'
import { CheckboxButton } from './Checkbox'
import { Select, Option, OptionGroup } from './Select'

const install = (app: any) => {
    app.component('GridRow', Row)
    app.component('GridCol', Col)
    app.component('Button', Button)
    app.component('ButtonGroup', ButtonGroup)
    app.component('Input', Input)
    app.component('Radio', Radio)
    app.component('Checkbox', Checkbox)
    app.component('CheckboxGroup', CheckboxGroup)
    app.component('CheckboxButton', CheckboxButton)
    app.component('Select', Select)
    app.component('Option', Option)
    app.component('OptionGroup', OptionGroup)
}

// 支持 use 方式安装
export default { install }

export { Input, Row, Col, Button, ButtonGroup, HelloWorld, ThemeToggle, Radio, Checkbox, CheckboxGroup, CheckboxButton, Select, Option, OptionGroup }
