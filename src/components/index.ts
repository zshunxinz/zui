import { Input } from './Input'
import { Row } from './Row'
import { Col } from './Col'
import { Button } from './Button'
import { ButtonGroup } from './ButtonGroup'
import { HelloWorld } from './HelloWorld'
import { ThemeToggle } from './ThemeToggle'

const install = (app: any) => {
    app.component('GridRow', Row)
    app.component('GridCol', Col)
    app.component('Button', Button)
    app.component('ButtonGroup', ButtonGroup)
    app.component('Input', Input)
}

// 支持 use 方式安装
export default { install }

export { Input, Row, Col, Button, ButtonGroup, HelloWorld, ThemeToggle }
