# Input 输入框

## 基本用法

Input 组件用于接收用户输入的文本信息，支持多种输入类型和交互功能。

<script setup>
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

## 输入类型

Input 组件支持多种输入类型，如文本输入、密码输入、数字输入等。通过设置`type`属性来指定输入框的类型。

### 文本输入

```vue
<Input v-model="value" placeholder="请输入内容" />
```

### 密码输入

```vue
<Input v-model="value" type="password" placeholder="请输入密码" />
```

### 数字输入

```vue
<Input v-model="value" type="number" placeholder="请输入数字" />
```

### 邮箱输入

```vue
<Input v-model="value" type="email" placeholder="请输入邮箱" />
```

### 手机号输入

```vue
<Input v-model="value" type="tel" placeholder="请输入手机号" />
```

### 网址输入

```vue
<Input v-model="value" type="url" placeholder="请输入网址" />
```

### 搜索输入

搜索类型输入框会在输入内容时显示搜索图标。

```vue
<Input v-model="value" type="search" placeholder="请输入搜索内容" />
```

### 多行文本

```vue
<Input v-model="value" type="textarea" placeholder="请输入内容" />
```

### 错误状态

通过 `error` 属性可以设置输入框为错误状态。

```vue
<template>
  <div>
    <Input v-model="value" placeholder="请输入内容" :error="true" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')
    return {
      value
    }
  }
}
</script>
```

### 标签位置

通过 `labelPosition` 属性可以设置标签的位置，可选值为 `top`（默认）和 `left`。

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Input v-model="value1" label="顶部标签" placeholder="请输入内容" />
    <Input v-model="value2" label="左侧标签" labelPosition="left" placeholder="请输入内容" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value1 = ref('')
    const value2 = ref('')
    return {
      value1,
      value2
    }
  }
}
</script>
```

### 防抖输入

通过 `debounce` 属性可以设置输入防抖时间（毫秒），当设置防抖时间后，可以通过 `@debounce-input` 事件获取防抖后的输入值。

```vue
<template>
  <div>
    <Input 
      v-model="value" 
      placeholder="请输入内容" 
      :debounce="500"
      @debounce-input="handleDebounceInput"
    />
    <p>防抖后的值: {{ debouncedValue }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')
    const debouncedValue = ref('')
    
    const handleDebounceInput = (val) => {
      debouncedValue.value = val
    }
    
    return {
      value,
      debouncedValue,
      handleDebounceInput
    }
  }
}
</script>
```

## 事件回调

Input 组件支持通过事件回调来处理用户交互，常用事件包括：

```vue
<Input
  v-model="value"
  placeholder="请输入内容"
  @click="handleClick"
  @input="handleInput"
  @clear="handleClear"
  @focus="handleFocus"
  @blur="handleBlur"
  @enter="handleEnter"
  @debounce-input="handleDebounceInput"
/>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const value = ref('')
    const handleClick = () => {
      console.log('点击事件')
    }
    const handleInput = (val) => {
      console.log('输入事件', val)
    }
    const handleClear = () => {
      console.log('清空事件')
    }
    const handleFocus = (e) => {
      console.log('聚焦事件', e)
    }
    const handleBlur = (e) => {
      console.log('失焦事件', e)
    }
    const handleEnter = (val) => {
      console.log('回车事件', val)
    }
    const handleDebounceInput = (val) => {
      console.log('防抖输入事件', val)
    }
    return {
      value,
      handleClick,
      handleInput,
      handleClear,
      handleFocus,
      handleBlur,
      handleEnter,
      handleDebounceInput
    }
  }
}
</script>
```

### 事件列表

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入时触发 | value: 输入值 |
| debounce-input | 防抖输入时触发，只有设置了 debounce 属性才会触发 | value: 输入值 |
| clear | 点击清空按钮时触发 | - |
| click | 点击输入框时触发 | - |
| focus | 聚焦时触发 | event: 原生事件 |
| blur | 失焦时触发 | event: 原生事件 |
| enter | 按下回车键时触发 | value: 输入值 |
| mouse-enter | 鼠标进入输入框时触发 | - |
| mouse-leave | 鼠标离开输入框时触发 | - |



## 属性说明

| 属性名 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | String | text | 输入框类型，可选值为 text, textarea, password, number, email, tel, url, search |
| modelValue | String / Number | '' | 绑定值 |
| label | String | '' | 标签文本 |
| labelPosition | String | top | 标签位置，可选值为 top, left |
| placeholder | String | '' | 占位符文本 |
| maxlength | Number | - | 最大输入长度 |
| minlength | Number | - | 最小输入长度 |
| showWordLimit | Boolean | false | 是否显示输入字数统计，只在 type 为 text 或 textarea 时有效 |
| readonly | Boolean | false | 是否只读 |
| disabled | Boolean | false | 是否禁用 |
| error | Boolean | false | 是否为错误状态 |
| clearable | Boolean | false | 是否可清空 |
| showPassword | Boolean | false | 是否显示切换密码可见性的按钮，只在 type 为 password 时有效 |
| size | String | - | 输入框尺寸，可选值为 medium, small, mini |
| width | String | 300px | 输入框宽度 |
| height | String | 30px | 输入框高度 |
| debounce | Number | 0 | 输入防抖时间（毫秒），设置为 0 时不开启防抖 |
| prefixIcon | String | - | 前缀图标 |
| suffixIcon | String | - | 后缀图标 |
| rows | Number | 2 | 多行文本输入框的行数，只在 type 为 textarea 时有效 |
| autosize | Boolean / Object | false | 是否自动调整多行文本输入框的高度，只在 type 为 textarea 时有效 |
| resize | String | - | 控制是否可以调整多行文本输入框的大小，只在 type 为 textarea 时有效 |
| autocomplete | String | off | 自动完成，可选值为 on, off |
| name | String | - | 原生 name 属性 |
| maxlength | Number | - | 原生 maxlength 属性 |
| minlength | Number | - | 原生 minlength 属性 |
| max | String / Number | - | 原生 max 属性 |
| min | String / Number | - | 原生 min 属性 |
| step | String / Number | - | 原生 step 属性 |
| autofocus | Boolean | false | 原生 autofocus 属性 |
| form | String | - | 原生 form 属性 |
| tabindex | String | - | 原生 tabindex 属性 |
| validate-event | Boolean | true | 是否触发表单验证事件 |