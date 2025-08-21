# Switch 开关

用于在两个互斥状态之间切换的开关组件。

## 基础用法
<script setup>
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(false)
const value5 = ref(true)
const value6 = ref(false)
const value7 = ref(true)
const value8 = ref(true)
const value9 = ref(true)
const value10 = ref(true)
const value11 = ref(true)
const value12 = ref(true)
const value13 = ref(true)
const value14 = ref(true)
const value15 = ref('开启')
const value16 = ref(true)
const value17 = ref(true)
const value18 = ref(false)
const changeText = ref('未改变')

const handleChange1 = (value) => {
  changeText.value = value ? '已开启' : '已关闭'
}
const handleChange2 = (value) => {
  console.log('开关状态改变:', value)
}
</script>
<div class="demo-switch">
  <Switch v-model="value1" />
  <span style="margin-left: 12px;">{{ value1 }}</span>
</div>

<style>
.demo-switch {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
</style>

```vue
<template>
  <Switch v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```

## 文字描述

使用 `active-text` 和 `inactive-text` 属性来设置开关的文字描述。

<Switch
  v-model="value2"
  active-text="开启"
  inactive-text="关闭"
/>

```vue
<Switch
  v-model="value"
  active-text="开启"
  inactive-text="关闭"
/>
```

禁用状态

<div class="demo-switch">
  <Switch v-model="value3" disabled />
  <Switch v-model="value4" disabled style="margin-left: 20px;" />
</div>


```vue
<Switch v-model="value1" disabled />
<Switch v-model="value2" disabled />
```

## 加载状态


<div class="demo-switch">
  <Switch v-model="value5" loading />
  <Switch v-model="value6" loading style="margin-left: 20px;" />
</div>


```vue
<Switch v-model="value1" loading />
<Switch v-model="value2" loading />
```

## 不同尺寸


<div class="demo-switch">
  <Switch v-model="value7" size="small" />
  <Switch v-model="value8" style="margin-left: 20px;" />
  <Switch v-model="value9" size="large" style="margin-left: 20px;" />
</div>



```vue
<Switch v-model="value1" size="small" />
<Switch v-model="value2" />
<Switch v-model="value3" size="large" />
```

## 不同颜色



<div class="demo-switch">
  <XSwitch v-model="value10" color="primary" />
  <XSwitch v-model="value11" color="success" style="margin-left: 20px;" />
  <XSwitch v-model="value12" color="warning" style="margin-left: 20px;" />
  <XSwitch v-model="value13" color="danger" style="margin-left: 20px;" />
  <XSwitch v-model="value14" color="info" style="margin-left: 20px;" />
</div>





```vue
<Switch v-model="value1" color="primary" />
<Switch v-model="value2" color="success" />
<Switch v-model="value3" color="warning" />
<Switch v-model="value4" color="danger" />
<Switch v-model="value5" color="info" />
```

## 自定义值



<div class="demo-switch">
  <XSwitch
    v-model="value15"
    active-value="开启"
    inactive-value="关闭"
  />
  <span style="margin-left: 12px;">{{ value15 }}</span>
</div>


```vue
<Switch
  v-model="value"
  active-value="开启"
  inactive-value="关闭"
/>
```

## 自定义颜色



<div class="demo-switch">
  <XSwitch
    v-model="value16"
    active-color="#ff6b6b"
    inactive-color="#495057"
  />
  <XSwitch
    v-model="value17"
    active-color="#4ecdc4"
    inactive-color="#868e96"
    style="margin-left: 20px;"
  />
</div>



```vue
<Switch
  v-model="value1"
  active-color="#ff6b6b"
  inactive-color="#495057"
/>
<Switch
  v-model="value2"
  active-color="#4ecdc4"
  inactive-color="#868e96"
/>
```

## 事件监听



<div class="demo-switch">
  <XSwitch
    v-model="value18"
    @change="handleChange"
  />
  <span style="margin-left: 12px;">状态：{{ changeText }}</span>
</div>



```vue
<template>
  <XSwitch
    v-model="value"
    @change="handleChange"
  />
</template>
```

## API

### Props

| 参数名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| model-value / v-model | 绑定值 | boolean / string / number | false |
| active-value | 打开时的值 | boolean / string / number | true |
| inactive-value | 关闭时的值 | boolean / string / number | false |
| disabled | 是否禁用 | boolean | false |
| loading | 是否加载中 | boolean | false |
| size | 尺寸 | 'small' / 'default' / 'large' | 'default' |
| color | 颜色主题 | 'primary' / 'success' / 'warning' / 'danger' / 'info' | 'primary' |
| active-text | 打开时的文字描述 | string | - |
| inactive-text | 关闭时的文字描述 | string | - |
| active-color | 打开时的背景色 | string | - |
| inactive-color | 关闭时的背景色 | string | - |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 状态改变时的回调 | (value: boolean / string / number) |
| update:model-value | 绑定值更新时的回调 | (value: boolean / string / number) |

### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 自定义内容，会覆盖 active-text 和 inactive-text |

