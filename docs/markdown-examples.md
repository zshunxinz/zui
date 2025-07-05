# 安装指南

### 安装

```bash
npm install zui --save
```

### 引入组件

#### 全局引入

```javascript
import { createApp } from 'vue'
import Zui from 'zui'
import 'zui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Zui)
app.mount('#app')
```

#### 按需引入

```javascript
import { Input } from 'zui'
import 'zui/dist/input.css'

export default {
  components: {
    Input
  }
}
```

### 基本使用

```vue
<template>
  <Input placeholder="请输入内容" />
</template>
```

<script setup>
import Button from '../src/components/Button.vue'
</script>
<style>
  .button-group {
    padding:20px 0px ;
    display:flex;
    gap:10px;
  }
</style>
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
  <Button type="info">信息按钮</Button>
</div>
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary" text>主要按钮</Button>
  <Button type="success" text>成功按钮</Button>
  <Button type="warning" text>警告按钮</Button>
  <Button type="danger" text>危险按钮</Button>
  <Button type="info" text>信息按钮</Button>
</div>
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary" text border>主要按钮</Button>
  <Button type="success" text border>成功按钮</Button>
  <Button type="warning" text border>警告按钮</Button>
  <Button type="danger" text border>危险按钮</Button>
  <Button type="info" text border>信息按钮</Button>
</div>
