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
let switchLoading = ref(false);
const handleLoad = () => {
  if (value1.value == true) {
    switchLoading.value = true;
    setTimeout(() => {
      switchLoading.value = false;
    }, 1000);
  }
};
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
import { ref } from "vue";
const value = ref(true);
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
<Switch v-model="value" active-text="开启" inactive-text="关闭" />
```

## 禁用状态

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
  <Switch
        v-model="value1"
        type="primary"
        :loading="switchLoading"
        @change="handleLoad"
      />
  <Switch v-model="value6" loading style="margin-left: 20px;" />
</div>

```vue
<script setup>
import { ref } from "vue";
const value1 = ref(true);
const switchLoading = ref(false);
const handleLoad = () => {
  if (value1.value == true) {
    switchLoading.value = true;
    setTimeout(() => {
      switchLoading.value = false;
    }, 1000);
  }
};
</script>
<template>
  <Switch
    v-model="value1"
    type="primary"
    :loading="switchLoading"
    @change="handleLoad"
  />
  <Switch v-model="value6" loading style="margin-left: 20px;" />
</template>
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
  <Switch v-model="value10" type="primary" />
  <Switch v-model="value11" type="success" style="margin-left: 20px;" />
  <Switch v-model="value12" type="warning" style="margin-left: 20px;" />
  <Switch v-model="value13" type="danger" style="margin-left: 20px;" />
  <Switch v-model="value14" type="info" style="margin-left: 20px;" />
</div>

```vue
<Switch v-model="value1" type="primary" />
<Switch v-model="value2" type="success" />
<Switch v-model="value3" type="warning" />
<Switch v-model="value4" type="danger" />
<Switch v-model="value5" type="info" />
```

## 自定义值

<div class="demo-switch">
  <Switch
    v-model="value15"
    active-value="开启"
    inactive-value="关闭"
  />
  <span style="margin-left: 12px;">{{ value15 }}</span>
</div>

```vue
<Switch v-model="value" active-value="开启" inactive-value="关闭" />
```

## 不同形状

支持圆形和方形两种形状，默认为圆形。

<div class="demo-switch">
  <Switch v-model="value18" shape="round" />
  <Switch v-model="value18" shape="square" style="margin-left: 20px;" />
  <Switch v-model="value18" shape="square" size="small" style="margin-left: 20px;" />
  <Switch v-model="value18" shape="square" size="large" style="margin-left: 20px;" />
</div>

```vue
<Switch v-model="value" shape="round" />
<Switch v-model="value" shape="square" />
<Switch v-model="value" shape="square" size="small" />
<Switch v-model="value" shape="square" size="large" />
```

## 自定义颜色

<div class="demo-switch">
  <Switch
    v-model="value16"
    active-color="#123465"
    inactive-color="#495057"
  />
  <Switch
    v-model="value17"
    active-color="#4ecdc4"
    inactive-color="#868e96"
    style="margin-left: 20px;"
  />
</div>

```vue
<Switch v-model="value1" active-color="#ff6b6b" inactive-color="#495057" />
<Switch v-model="value2" active-color="#4ecdc4" inactive-color="#868e96" />
```

## 事件监听

<div class="demo-switch">
  <Switch
    v-model="value18"
    @change="handleChange1"
  />
  <span style="margin-left: 12px;">状态：{{ changeText }}</span>
</div>

```vue
<template>
  <Switch v-model="value" @change="handleChange1" />
  <span style="margin-left: 12px;">状态：{{ changeText }}</span>
</template>
<script setup>
import { ref } from "vue";
const value = ref(true);
const changeText = ref("未改变");
const handleChange1 = (value) => {
  changeText.value = value ? "已开启" : "已关闭";
};
</script>
```

## API

### Props

| 参数名                | 说明             | 类型                                                  | 默认值    |
| --------------------- | ---------------- | ----------------------------------------------------- | --------- |
| model-value / v-model | 绑定值           | boolean / string / number                             | false     |
| active-value          | 打开时的值       | boolean / string / number                             | true      |
| inactive-value        | 关闭时的值       | boolean / string / number                             | false     |
| disabled              | 是否禁用         | boolean                                               | false     |
| loading               | 是否加载中       | boolean                                               | false     |
| size                  | 尺寸             | 'small' / 'default' / 'large'                         | 'default' |
| type                  | 颜色主题         | 'primary' / 'success' / 'warning' / 'danger' / 'info' | 'default' |
| shape                 | 开关形状         | 'round' / 'square'                                    | 'round'   |
| active-text           | 打开时的文字描述 | string                                                | -         |
| inactive-text         | 关闭时的文字描述 | string                                                | -         |
| active-color          | 打开时的背景色   | string                                                | -         |
| inactive-color        | 关闭时的背景色   | string                                                | -         |

### Events

| 事件名             | 说明               | 回调参数                           |
| ------------------ | ------------------ | ---------------------------------- |
| change             | 状态改变时的回调   | (value: boolean / string / number) |
| update:model-value | 绑定值更新时的回调 | (value: boolean / string / number) |

### Slots

| 插槽名  | 说明                                            |
| ------- | ----------------------------------------------- |
| default | 自定义内容，会覆盖 active-text 和 inactive-text |
