# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选

<script setup>
import { ref } from 'vue'
const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref([])
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')
</script>

<Select v-model="value" placeholder="请选择" >
  <Option value="数据12356789">
    数据
  </Option>
  <Option label="选项1" value="1" />
  <Option label="选项2" value="2" />
  <Option label="选项3" value="3" />
  <Option label="选项4" value="4" />
  <Option label="选项5" value="5" />
  <Option label="选项6" value="6" />
  <Option label="选项7" value="7" />
  <Option label="选项8" value="8" />
  <Option label="选项9" value="9" />
  <Option label="选项10" value="10" />
  <Option label="选项11" value="11" />
  <Option label="选项12" value="12" />
  <Option label="选项13" value="13" />
</Select>

```html
<template>
  <select v-model="value" placeholder="请选择">
    <option label="选项1" value="1" />
    <option label="选项2" value="2" />
    <option label="选项3" value="3" />
  </select>
</template>

<script setup>
  import { ref } from "vue";
  const value = ref("");
</script>
```

## 不同类型

支持 6 种主题类型：`default`、`primary`、`success`、`warning`、`danger`、`info`

<Row :gutter="[20,20]" >
  <Col :span="12">
    <Select v-model="value1" placeholder="请选择" type="default">
      <Option label="默认" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value2" placeholder="请选择" type="primary">
      <Option label="主要" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value3" placeholder="请选择" type="success">
      <Option label="成功" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value4" placeholder="请选择" type="info">
      <Option label="信息" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value5" placeholder="请选择" type="warning">
      <Option label="警告" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value6" placeholder="请选择" type="danger">
      <Option label="危险" value="1" />
      <Option label="选项2" value="2" />
      <Option label="选项3" value="3" />
    </Select>
  </Col>
</Row>

```vue
<script setup>
import { ref } from "vue";
const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const value5 = ref("");
const value6 = ref("");
</script>
<template>
  <Row :gutter="[20, 20]">
    <Col :xl="12" :md="24">
      <Select v-model="value1" placeholder="请选择" type="default">
        <Option label="默认" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value2" placeholder="请选择" type="primary">
        <Option label="主要" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value3" placeholder="请选择" type="success">
        <Option label="成功" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value4" placeholder="请选择" type="info">
        <Option label="信息" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value5" placeholder="请选择" type="warning">
        <Option label="警告" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
    <Col :xl="12" :md="24">
      <Select v-model="value6" placeholder="请选择" type="danger">
        <Option label="危险" value="1" />
        <Option label="选项2" value="2" />
        <Option label="选项3" value="3" />
      </Select>
    </Col>
  </Row>
</template>
```

## 多选模式

支持多选，通过设置 `multiple` 属性为 `true`
<Row :gutter="[20, 20]">

  <Col :span="24">
    <Select v-model="value8" placeholder="请选择多个选项" multiple >
      <Option label="北京" value="beijing" />
      <Option label="上海" value="shanghai" />
      <Option label="广州" value="guangzhou" />
      <Option label="深圳" value="shenzhen" />
      <Option label="重庆" value="chongqing" />
    </Select>
  </Col>
  <Col :span="24">
    <Select v-model="value8" placeholder="请选择多个选项" multiple type="primary">
      <Option label="北京" value="beijing" />
      <Option label="上海" value="shanghai" />
      <Option label="广州" value="guangzhou" />
      <Option label="深圳" value="shenzhen" />
      <Option label="重庆" value="chongqing" />
    </Select>
  </Col>
  <Col :span="24">
    <Select v-model="value8" placeholder="请选择多个选项" multiple type="danger">
      <Option label="北京" value="beijing" />
      <Option label="上海" value="shanghai" />
      <Option label="广州" value="guangzhou" />
      <Option label="深圳" value="shenzhen" />
      <Option label="重庆" value="chongqing" />
    </Select>
  </Col>
  
</Row>

```vue
<template>
  <Select v-model="value8" placeholder="请选择多个选项" multiple>
    <Option label="北京" value="beijing" />
    <Option label="上海" value="shanghai" />
    <Option label="广州" value="guangzhou" />
    <Option label="深圳" value="shenzhen" />
    <Option label="杭州" value="hangzhou" />
  </Select>
</template>

<script setup>
import { ref } from "vue";
const value8 = ref([]);
</script>
```

## 禁用选项

可以通过设置 `disabled` 属性来禁用整个选择器或特定选项

<Row :gutter="[20, 20]">
  <Col :span="12">
    <Select v-model="value7" placeholder="禁用的选择器" disabled>
      <Option label="选项1" value="1" />
      <Option label="选项2" value="2" />
    </Select>
  </Col>
  <Col :span="12">
    <Select v-model="value7" placeholder="包含禁用选项">
      <Option label="可用选项" value="1" />
      <Option label="禁用选项" value="2" disabled />
      <Option label="可用选项" value="3" />
    </Select>
  </Col>
</Row>

```vue
<template>
  <Select v-model="value7" placeholder="禁用的选择器" disabled>
    <Option label="选项1" value="1" />
    <Option label="选项2" value="2" />
  </Select>

  <Select v-model="value7" placeholder="包含禁用选项">
    <Option label="可用选项" value="1" />
    <Option label="禁用选项" value="2" disabled />
    <Option label="可用选项" value="3" />
  </Select>
</template>
```

## 可清空

通过设置 `clearable` 属性可以清空已选择的值

<Select v-model="value9" placeholder="可清空的选择" clearable>
  <Option label="选项1" value="1" />
  <Option label="选项2" value="2" />
  <Option label="选项3" value="3" />
</Select>

```vue
<template>
  <Select v-model="value9" placeholder="可清空的选择" clearable>
    <Option label="选项1" value="1" />
    <Option label="选项2" value="2" />
    <Option label="选项3" value="3" />
  </Select>
</template>
```

## 可搜索

通过设置 `filterable` 属性启用搜索功能

<Select v-model="value10" placeholder="可搜索的选择" filterable>
  <Option label="JavaScript" value="js" />
  <Option label="TypeScript" value="ts" />
  <Option label="Python" value="py" />
  <Option label="Java" value="java" />
  <Option label="Go" value="go" />
</Select>

```vue
<template>
  <Select v-model="value10" placeholder="可搜索的选择" filterable>
    <Option label="JavaScript" value="js" />
    <Option label="TypeScript" value="ts" />
    <Option label="Python" value="py" />
    <Option label="Java" value="java" />
    <Option label="Go" value="go" />
  </Select>
</template>
```

## 不同尺寸

支持三种尺寸：`small`、`medium`、`large`

<Row :gutter="[20,20]">
  <Col :span="24">
    <Select v-model="value11" placeholder="小尺寸" size="small">
      <Option label="小尺寸" value="1" />
      <Option label="选项2" value="2" />
    </Select>
  </Col>
  <Col :span="24">
    <Select v-model="value11" placeholder="默认尺寸" size="medium">
      <Option label="默认尺寸" value="1" />
      <Option label="选项2" value="2" />
    </Select>
  </Col>
  <Col :span="24">
    <Select v-model="value11" placeholder="大尺寸" size="large">
      <Option label="大尺寸" value="1" />
      <Option label="选项2" value="2" />
    </Select>
  </Col>
</Row>

```vue
<template>
  <Row :gutter="[20, 20]">
    <Col :span="8">
      <Select v-model="value11" placeholder="小尺寸" size="small">
        <Option label="小尺寸" value="1" />
        <Option label="选项2" value="2" />
      </Select>
    </Col>
    <Col :span="8">
      <Select v-model="value11" placeholder="默认尺寸" size="medium">
        <Option label="默认尺寸" value="1" />
        <Option label="选项2" value="2" />
      </Select>
    </Col>
    <Col :span="8">
      <Select v-model="value11" placeholder="大尺寸" size="large">
        <Option label="大尺寸" value="1" />
        <Option label="选项2" value="2" />
      </Select>
    </Col>
  </Row>
</template>
```

## 使用 options 属性

除了使用 Option 子组件，还可以通过 `options` 属性传入选项数组

<Select v-model="value12" :options="[
  { label: '选项1', value: '1' },
  { label: '选项2', value: '2' },
  { label: '选项3', value: '3', disabled: true }
]" placeholder="使用 options 属性" />

```vue
<template>
  <Select
    v-model="value12"
    type="primary"
    :options="[
      { label: '选项1', value: '1' },
      { label: '选项2', value: '2' },
      { label: '选项3', value: '3', disabled: true },
    ]"
    placeholder="使用 options 属性"
  />
</template>
```

## 属性

| 属性名                | 说明               | 类型                                       | 可选值                                                | 默认值     |
| --------------------- | ------------------ | ------------------------------------------ | ----------------------------------------------------- | ---------- |
| model-value / v-model | 绑定值             | string / number / boolean / object / array | —                                                     | —          |
| multiple              | 是否多选           | boolean                                    | —                                                     | false      |
| disabled              | 是否禁用           | boolean                                    | —                                                     | false      |
| clearable             | 是否可以清空选项   | boolean                                    | —                                                     | false      |
| filterable            | 是否可搜索         | boolean                                    | —                                                     | false      |
| placeholder           | 占位符             | string                                     | —                                                     | Select     |
| type                  | 主题类型           | string                                     | default / primary / success / warning / danger / info | default    |
| size                  | 尺寸               | string                                     | small / medium / large                                | medium     |
| options               | 选项数组           | array                                      | —                                                     | []         |
| collapse-tags         | 是否折叠标签       | boolean                                    | —                                                     | false      |
| loading               | 是否正在加载       | boolean                                    | —                                                     | false      |
| loading-text          | 加载时显示的文字   | string                                     | —                                                     | Loading... |
| no-data-text          | 无数据时显示的文字 | string                                     | —                                                     | No data    |

## 事件

| 事件名         | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 当前选中值                    |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| focus          | 获得焦点时触发                           | (event: Event)                |
| blur           | 失去焦点时触发                           | (event: Event)                |

## 插槽

| 插槽名  | 说明            |
| ------- | --------------- |
| default | Option 组件列表 |
| header  | 下拉框头部内容  |
| footer  | 下拉框底部内容  |
| empty   | 无选项时的内容  |
| loading | 自定义加载文案  |

<style scoped>
  .x-select__wrapper {
    border-color: var(--color-primary);
  }
</style>
