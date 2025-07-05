import Input from './Input.vue'
import Row from './Row.vue'
import Col from './Col.vue'
import Button from './Button.vue'
import ButtonGroup from './ButtonGroup.vue'

const install = (app) => {
    app.component('GridRow', Row)
    app.component('GridCol', Col)
    app.component('Button', Button)
    app.component('ButtonGroup', ButtonGroup)
    app.component('Input', Input)
}

// 支持 use 方式安装
export default { install }

export { Input, Row, Col, Button, ButtonGroup }
