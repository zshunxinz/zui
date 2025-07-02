import Input from './Input.vue'
import Row from './Row.vue'
import Col from './Col.vue'


const install = (app) => {
    app.component('GridRow', Row)
    app.component('GridCol', Col)
}

// 支持 use 方式安装
export default { install }

export { Input, Row, Col }
