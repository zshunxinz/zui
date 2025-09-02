# Radio 单选框

单选框组件，用于在多个选项中选择单个结果。

<script setup>
import { ref } from 'vue'

const selectedValue = ref('option1')
const radioOptions = [
  { label: 'HTML', value: 'option1' },
  { label: 'CSS', value: 'option2' },
  { label: 'JavaScript', value: 'option3' }
]

const selectedValueSquare = ref('option1')
const radioOptionsSquare = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
]

const selectedValueButton = ref('option1')
const radioOptionsButton = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
]

const selectedValueCard = ref('option1')
const radioOptionsCard = [
  { label: 'HTML', value: 'option1',text:"html是超文本标记语言" },
  { label: 'CSS', value: 'option2',text:"css是层叠样式表" },
  { label: 'JavaScript', value: 'option3',text:"JavaScript是脚本语言" }
]

const typeValue = ref('1')
const typeOptions = [
  { label: '主要选项', value: '1' },
  { label: '次要选项', value: '2' }
]

</script>

<style scoped>
.radio-demo {
  padding: 20px 0;
}
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
}
.custom-card {
  padding: 16px;
}

.custom-card h3 {
  margin: 0 0 0px 0;
}

.card-footer {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
}

.custom-card-content{
  padding: 10px;
  color: var(--color-primary);
}

.custom-card-content span{
  font-size: 9px;
  color: var(--color-primary-hover);
}

:deep(.custom-checked-class) {
  border:1px solid rgb(0, 123, 255);
  box-shadow: 1px 1px 5px 2px linear-gradient(to right, rgb(0, 123, 255), rgb(181, 181, 181)) 1;
  background-color: rgba(0, 123, 255, 0.01);
  border-radius: 4px !important;
}
.radio-type-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

## 基础用法

默认圆形样式

<Demo>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('option1')
const radioOptions = [
  { label: 'HTML', value: 'option1' },
  { label: 'CSS', value: 'option2' },
  { label: 'JavaScript', value: 'option3' }
]
</script>
```

</CollapsibleCode>

## 方形样式

<Demo>
  <div class="radio-demo">
    <Radio v-model="selectedValueSquare" :options="radioOptionsSquare" shape="square" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" shape="square" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('option1')
const radioOptions = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
]
</script>
```

</CollapsibleCode>

## 按钮样式

<Demo>
  <div class="radio-demo">
    <Radio v-model="selectedValueButton" :options="radioOptionsButton" shape="button" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" shape="button" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('option1')
const radioOptions = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
  { label: '选项三', value: 'option3' }
]
</script>
```

</CollapsibleCode>

## 卡片样式

卡片样式支持自定义插槽内容，插槽名称格式为`card-${value}`

<Demo>
  <div class="radio-demo">
    <Radio v-model="selectedValueCard" :options="radioOptionsCard" shape="card" checked-class="custom-checked-class">
      <template #card-option1="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
      <template #card-option2="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
      <template #card-option3="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
    </Radio>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="radio-demo">
    <Radio v-model="selectedValueCard" :options="radioOptionsCard" shape="card" checked-class="custom-checked-class">
      <template #card-option1="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
      <template #card-option2="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
      <template #card-option3="{ option }">
        <div class="custom-card-content">
          <h5>{{ option.label }}</h5>
          <span>{{ option.text }}</span>
        </div>
      </template>
    </Radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedValueCard = ref('option1')
const radioOptionsCard = [
  { label: 'HTML', value: 'option1', text: "html是超文本标记语言" },
  { label: 'CSS', value: 'option2', text: "css是层叠样式表" },
  { label: 'JavaScript', value: 'option3', text: "JavaScript是脚本语言" }
]
</script>

<style scoped>
.custom-card-content {
  padding: 16px;
}

:deep(.custom-checked-class) {
  border: 1px solid rgb(0, 123, 255);
  box-shadow: 1px 1px 5px 2px linear-gradient(to right, rgb(0, 123, 255), rgb(181, 181, 181)) 1;
  background-color: rgba(0, 123, 255, 0.01);
  border-radius: 4px !important;
}
</style>
```

</CollapsibleCode>

## 选项卡样式

选项卡模式提供标签式的单选体验，底部边框颜色随type属性变化

<Demo>
  <div class="radio-demo">
    <Radio v-model="typeValue" :options="typeOptions" shape="tab" type="primary" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="radio-demo">
    <Radio v-model="typeValue" :options="typeOptions" shape="tab" type="primary" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const typeValue = ref('1')
const typeOptions = [
  { label: '主要选项', value: '1' },
  { label: '次要选项', value: '2' }
]
</script>
```

</CollapsibleCode>

## 颜色类型

通过`type`属性可以设置单选框的颜色类型，支持与Button组件相同的颜色体系。

<Demo>
  <div class="radio-type-demo">
    <Radio v-model="typeValue" :options="typeOptions" type="default" />
    <Radio v-model="typeValue" :options="typeOptions" type="primary" />
    <Radio v-model="typeValue" :options="typeOptions" type="success" />
    <Radio v-model="typeValue" :options="typeOptions" type="warning" />
    <Radio v-model="typeValue" :options="typeOptions" type="danger" />
    <Radio v-model="typeValue" :options="typeOptions" type="info" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="radio-type-demo">
    <Radio v-model="typeValue" :options="typeOptions" type="default" />
    <Radio v-model="typeValue" :options="typeOptions" type="primary" />
    <Radio v-model="typeValue" :options="typeOptions" type="success" />
    <Radio v-model="typeValue" :options="typeOptions" type="warning" />
    <Radio v-model="typeValue" :options="typeOptions" type="danger" />
    <Radio v-model="typeValue" :options="typeOptions" type="info" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const typeValue = ref('1')
const typeOptions = [
  { label: '主要选项', value: '1' },
  { label: '次要选项', value: '2' }
]
</script>
```

</CollapsibleCode>

## 禁用状态

<Demo>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" disabled />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="radio-demo">
    <Radio v-model="selectedValue" :options="radioOptions" disabled />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedValue = ref('option1')
const radioOptions = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2', disabled: true },
  { label: '选项三', value: 'option3' }
]
</script>
```

</CollapsibleCode>

## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| v-model | 绑定值 | string / number / boolean | — | — |
| options | 选项列表 | Array | — | [] |
| name | 原生name属性 | string | — | — |
| disabled | 是否禁用 | boolean | true / false | false |
| shape | 单选框样式 | string | circle / square / button / card / tab | circle |
| checkedClass | 选中状态类 | string | - | 可选，仅卡片样式有效，自定义选中状态的CSS类名 |
| type | 单选框颜色类型 | string | default/primary/success/warning/danger/info | default |

## 事件

| 事件名称 | 说明 | 回调参数 |
|---------|------|----------|
| change | 绑定值变化时触发 | 选中的value值 |

## 选项配置

options数组中的每个对象可以包含以下属性：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| label | 选项文本 | string | — | — |
| value | 选项值 | string / number / boolean | — | — |
| disabled | 是否禁用该选项 | boolean | true / false | false |