<script setup>
// import Input from '../../src/components/Input.vue'
import { ref } from 'vue'
const value = ref('')
const value2 = ref('')
const email = ref('')
const phone = ref('')
const website = ref('')
const password = ref('')
const search = ref('')
const username = ref('')
const text = ref('')
const pwd = ref('')
const text2 = ref('')

const handleMouseEnter = () => {
  console.log('鼠标移入输入框')
};

const handleMouseLeave = () => {
  console.log('鼠标移出输入框')
};

const handleClick = () => {
  console.log('输入框被点击')
};

const handleEnter = (value) => {
  console.log('按下Enter键，输入值为:', value)
}
</script>
<style>
    .input-group .x-input { margin-bottom: 10px; }
</style>

# Input 输入框

## 基本用法

Input 组件用于接收用户输入的文本信息，支持多种输入类型和交互功能。



<Input v-model="value" placeholder="请输入内容" />


```vue
<template>
  <Input v-model="value" placeholder="请输入内容" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```


<!-- ## 不同类型示例 -->

## 多行文本框

<Input type="textarea" v-model="text" placeholder="请输入多行文本" :rows="4" />

```vue
<template>
  <Input type="textarea" v-model="text" placeholder="请输入多行文本" :rows=4 />
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
</script>
```

## 带标签的输入框
 <Input label="用户名" v-model="username" placeholder="请输入用户名" />

```vue
<template>
  <Input label="用户名" v-model="username" placeholder="请输入用户名" />
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')
</script>
```

## 其他输入类型

<div class="input-group">
    <Input type="email" v-model="email" placeholder="请输入邮箱" />
    <Input type="tel" v-model="phone" placeholder="请输入手机号" />
    <Input type="url" v-model="website" placeholder="请输入网址" />
</div>


```vue
<template>
  <div class="input-group">
    <Input type="email" v-model="email" placeholder="请输入邮箱" />
    <Input type="tel" v-model="phone" placeholder="请输入手机号" />
    <Input type="url" v-model="website" placeholder="请输入网址" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const email = ref('')
const phone = ref('')
const website = ref('')
</script>

<style scoped>
.input-group .x-input { margin-bottom: 10px; }
</style>
```

## 最小长度限制
<Input v-model="password" placeholder="密码至少6位" :minlength="6" show-word-limit />

```vue
<template>
  <Input v-model="password" placeholder="密码至少6位" :minlength=6 show-word-limit />
</template>

<script setup>
import { ref } from 'vue'
const password = ref('')
</script>
```

## 组合属性示例
<Input
    v-model="search"
    placeholder="搜索..."
    clearable
    show-word-limit
    :maxlength="30"
    size="small"
  />

```vue
<template>
  <Input
    v-model="search"
    placeholder="搜索..."
    clearable
    show-word-limit
    :maxlength=30
    size="small"
  />
</template>

<script setup>
import { ref } from 'vue'
const search = ref('')
</script>
```

## 事件示例

## 鼠标事件

<Input
  v-model="value"
  placeholder="鼠标移入移出试试"
  @mouse-enter="handleMouseEnter"
  @mouse-leave="handleMouseLeave"
/>

```vue
<template>
  <Input
    v-model="value"
    placeholder="鼠标移入移出试试"
    @mouse-enter="handleMouseEnter"
    @mouse-leave="handleMouseLeave"
  />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')

const handleMouseEnter = () => {
  console.log('鼠标移入输入框')
}

const handleMouseLeave = () => {
  console.log('鼠标移出输入框')
}
</script>
```

## 点击事件

<Input
  v-model="value"
  placeholder="点击输入框"
  @click="handleClick"
/>

```vue
<template>
  <Input
    v-model="value"
    placeholder="点击输入框"
    @click="handleClick"
  />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')

const handleClick = () => {
  console.log('输入框被点击')
}
</script>
```

## 回车事件

<Input
  v-model="username"
  placeholder="输入后按Enter键"
  @enter="handleEnter"
/>

```vue
<template>
  <Input
    v-model="username"
    placeholder="输入后按Enter键"
    @enter="handleEnter"
  />
</template>

<script setup>
import { ref } from 'vue'
const username = ref('')

const handleEnter = (value) => {
  console.log('按下Enter键，输入值为:', value)
  // 可以在这里处理表单提交等逻辑
}
</script>
```

## 密码框
<Input type="password" v-model="pwd" placeholder="请输入密码" show-password />

```vue
<template>
  <Input type="password" v-model="pwd" placeholder="请输入密码" show-password />
</template>

<script setup>
import { ref } from 'vue'
const pwd = ref('')
</script>
```

## 带清空功能

<Input v-model="value" placeholder="可清空输入框" clearable />

```vue
<template>
  <Input v-model="value" placeholder="可清空输入框" clearable />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 字数限制


```vue
<template>
  <Input v-model="value" :maxlength=20 show-word-limit placeholder="显示字数统计" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 禁用状态
<Input v-model="value" placeholder="禁用状态" disabled />
```vue
<template>
  <Input v-model="value" placeholder="禁用状态" disabled />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 不同尺寸


```vue
<template>
  <div class="input-group">
    <Input v-model="value" size="medium" placeholder="中等尺寸" />
    <Input v-model="value" size="small" placeholder="小号尺寸" />
    <Input v-model="value" size="mini" placeholder="迷你尺寸" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```



## 图标示例

```vue
<template>
  <Input prefix-icon="🔍" suffix-icon="📌" v-model="value" placeholder="带图标输入框" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 自适应文本框


```vue
<template>
  <div class="input-group">
    <Input type="textarea" v-model="text" autosize placeholder="自适应高度文本框" />
    <Input type="textarea" v-model="text2" :autosize="{ minRows: 3, maxRows: 5 }" placeholder="自定义最小最大行数" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const text2 = ref('')
</script>
```

## 只读与自动聚焦示例

```vue
<template>
  <div class="input-group">
    <Input v-model="value" readonly placeholder="只读状态" />
    <Input v-model="value2" autofocus placeholder="自动聚焦" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('只读内容')
const value2 = ref('')
</script>
```


## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| type | string | 'text' | 输入框类型，可选值：text, password, textarea, number 等 |
| v-model | string / number | - | 绑定值 |
| maxlength | number | - | 最大输入长度 |
| minlength | number | - | 最小输入长度 |
| show-word-limit | boolean | false | 是否显示字数统计 |
| placeholder | string | - | 占位文本 |
| clearable | boolean | false | 是否显示清空按钮 |
| show-password | boolean | false | 是否显示密码切换按钮 |
| disabled | boolean | false | 是否禁用输入框 |
| size | string | - | 尺寸，可选值：medium, small, mini |
| prefix-icon | string | - | 输入框头部图标 |
| suffix-icon | string | - | 输入框尾部图标 |
| rows | number | 2 | 输入框行数，只对 type="textarea" 有效 |
| autosize | boolean / object | false | 自适应内容高度，只对 type="textarea" 有效，可传入对象 { minRows: 2, maxRows: 6 } |
| autocomplete | string | off | 原生自动补全属性 |
| name | string | - | 原生name属性 |
| readonly | boolean | false | 是否只读 |
| max | string / number | - | 原生max属性 |
| min | string / number | - | 原生min属性 |
| step | string / number | - | 原生step属性 |
| resize | string | - | 控制是否能被用户缩放，可选值：none, both, horizontal, vertical |
| autofocus | boolean | false | 是否自动获取焦点 |
| tabindex | string | - | 输入框的tabindex |
| auto-complete | string | off | 下个主版本弃用，请使用autocomplete |
| form | string | - | 原生form属性 |
| validate-event | boolean | true | 输入时是否触发表单的校验 |



## 事件说明

| 事件名 | 说明 | 参数 |
|--------|------|------|
| mouse-enter | 鼠标移入输入框时触发 | - |
| mouse-leave | 鼠标移出输入框时触发 | - |
| click | 点击输入框时触发 | - |
| enter | 按下Enter键时触发 | (value: string) 当前输入值 |
| clear | 点击清空按钮时触发 | - |
