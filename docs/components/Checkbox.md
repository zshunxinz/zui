# Checkbox 多选框
一组备选项中进行多选
## 基础用法
单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。
<script setup>
// import { ref } from 'vue';
import { ref, computed } from 'vue';
const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);

const checkedList = ref([]);
const checkAll = ref(false);
const isIndeterminate = computed(() => {
  console.log(checkedList.value);
  return checkedList.value.length > 0 && checkedList.value.length < 3;
});

const handleCheckAllChange = (val) => {
  console.log(val);
  checked1.value = val;
  checked2.value = val;
  checked3.value = val;
  // checkAll.value = val;
  checkedList.value = [checked1.value, checked2.value, checked3.value];
};

const handleCheckedChange = (val)=>{
  console.log(checkedList.value);
  
}

// const handleCheckedChange = (val) => {
//   console.log(val);
// };
</script>
<style>
  .checkbox-group{
    display: flex;
    gap:30px
  }
</style>
<div class="checkbox-group">
  <Checkbox v-model="checked1" label="HTML"></Checkbox>
  <Checkbox v-model="checked2" label="CSS"></Checkbox>
</div>

```vue
<template>
  <div class="checkbox-group">
    <Checkbox v-model="checked1" label="HTML"></Checkbox>
    <Checkbox v-model="checked2" label="CSS"></Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
</script>
```

## 颜色选项
通过设置`color`属性可以自定义多选框的颜色主题，支持`primary`、`success`、`danger`等内置主题色。

<div class="checkbox-group">
  <Checkbox v-model="checked1" label="HTML" color="primary"></Checkbox>
  <Checkbox v-model="checked2" label="CSS" color="success"></Checkbox>
  <Checkbox v-model="checked3" label="JavaScript" color="danger"></Checkbox>
  <Checkbox v-model="checked4" label="Vue" color="info"></Checkbox>
</div>

```vue
<template>
  <div class="checkbox-group">
    <Checkbox v-model="checked1" label="HTML" color="primary"></Checkbox>
    <Checkbox v-model="checked2" label="CSS" color="success"></Checkbox>
    <Checkbox v-model="checked3" label="JavaScript" color="danger"></Checkbox>
    <Checkbox v-model="checked4" label="Vue" color="info"></Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
</script>
```

## 禁用状态

设置`disabled`属性即可禁用多选框
 <div class="checkbox-group">
    <Checkbox v-model="checked1" label="备选项1" disabled></Checkbox>
    <Checkbox v-model="checked2" label="备选项2" disabled></Checkbox>
</div>

  
```vue
<template>
  <div class="checkbox-group">
    <Checkbox v-model="checked1" label="备选项1" disabled></Checkbox>
    <Checkbox v-model="checked2" label="备选项2" disabled></Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
</script>
```

## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项
<CheckboxGroup v-model="checkedList">
  <Checkbox label="备选项1"></Checkbox>
  <Checkbox label="备选项2"></Checkbox>
  <Checkbox label="备选项3"></Checkbox>
  <Checkbox label="备选项4" disabled></Checkbox>
</CheckboxGroup>

```vue
<template>
  <CheckboxGroup v-model="checkedList">
    <Checkbox label="备选项1"></Checkbox>
    <Checkbox label="备选项2"></Checkbox>
    <Checkbox label="备选项3"></Checkbox>
    <Checkbox label="备选项4" disabled></Checkbox>
  </CheckboxGroup>
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['备选项1', '备选项3']);
</script>
```

## 按钮样式

按钮样式的多选框可通过`CheckboxButton`组件实现

<CheckboxGroup v-model="checkedList" size="small">
  <CheckboxButton label="备选项1" color="primary"></CheckboxButton>
  <CheckboxButton label="备选项2" color="success"></CheckboxButton>
  <CheckboxButton label="备选项3" color="warning"></CheckboxButton>
  <CheckboxButton label="备选项4" color="danger"></CheckboxButton>
</CheckboxGroup>

```vue
<template>
  <div class="checkbox-group">
    <CheckboxGroup v-model="checkedList" size="small">
      <CheckboxButton label="备选项1" color="primary"></CheckboxButton>
      <CheckboxButton label="备选项2" color="success"></CheckboxButton>
      <CheckboxButton label="备选项3" color="warning"></CheckboxButton>
      <CheckboxButton label="备选项4" color="danger"></CheckboxButton>
    </CheckboxGroup>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['备选项1', '备选项3']);
</script>
```

## 带有边框

设置`border`属性可以渲染为带有边框的多选框
<div class="checkbox-group">
    <Checkbox v-model="checked1" label="备选项1" border></Checkbox>
    <Checkbox v-model="checked2" label="备选项2" border size="small"></Checkbox>
    <Checkbox v-model="checked3" label="备选项3" border size="mini"></Checkbox>
  </div>

```vue
<template>
  <div class="checkbox-group">
    <Checkbox v-model="checked1" label="备选项1" border></Checkbox>
    <Checkbox v-model="checked2" label="备选项2" border size="small"></Checkbox>
    <Checkbox v-model="checked3" label="备选项3" border size="mini"></Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
</script>
```

##  indeterminate 状态

`indeterminate`属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果\

<div class="checkbox-group">
    <Checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      label="全选"
    >
    </Checkbox>
    <CheckboxGroup
      v-model="checkedList"
      @change="handleCheckedChange"
    >
      <Checkbox label="HTML" v-model="checked1"></Checkbox>
      <Checkbox label="CSS" v-model="checked2"></Checkbox>
      <Checkbox label="JavaScript" v-model="checked3"></Checkbox>
    </CheckboxGroup>
</div>

```vue
<template>
  <div class="checkbox-group">
    <Checkbox
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="handleCheckAllChange"
      label="全选"
    ></Checkbox>
    <CheckboxGroup
      v-model="checkedList"
      @change="handleCheckedChange"
    >
      <Checkbox label="备选项1"></Checkbox>
      <Checkbox label="备选项2"></Checkbox>
      <Checkbox label="备选项3"></Checkbox>
    </CheckboxGroup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const checkedList = ref(['备选项1', '备选项2']);
const checkAll = ref(false);
const isIndeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < 3;
});

const handleCheckAllChange = (val) => {
  checkedList.value = val ? ['备选项1', '备选项2', '备选项3'] : [];
};

const handleCheckedChange = (val) => {
  checkAll.value = val.length === 3;
};
</script>
```

## Checkbox 属性

| 参数          | 说明                           | 类型                      | 可选值                | 默认值  |
| :------------ | :----------------------------- | :------------------------ | :-------------------- | :------ |
| modelValue / v-model | 绑定值                   | string / number / boolean | —                     | —       |
| label         | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean | — | — |
| true-label    | 选中时的值                     | string / number           | —                     | —       |
| false-label   | 没有选中时的值                 | string / number           | —                     | —       |
| disabled      | 是否禁用                       | boolean                   | —                     | false   |
| border        | 是否显示边框                   | boolean                   | —                     | false   |
| size          | Checkbox 的尺寸，仅在 border 为真时有效 | string                | medium / small / mini | —       |
| name          | 原生 name 属性                 | string                    | —                     | —       |
| checked       | 当前是否勾选                   | boolean                   | —                     | false   |
| color         | 颜色主题                           | string                    | default / primary / success / warning / danger / info | default |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean               | —                     | false   |

## Checkbox 事件

| 事件名称 | 说明                     | 回调参数                      |
| :------- | :----------------------- | :---------------------------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值                    |

## Checkbox-group 属性

| 参数          | 说明         | 类型                      | 可选值                | 默认值  |
| :------------ | :----------- | :------------------------ | :-------------------- | :------ |
| modelValue / v-model | 绑定值 | array                     | —                     | —       |
| size          | 多选框组尺寸 | string                    | medium / small / mini | —       |
| disabled      | 是否禁用     | boolean                   | —                     | false   |
| min           | 可被勾选的checkbox的最小数量 | number                  | —                     | —       |
| max           | 可被勾选的checkbox的最大数量 | number                  | —                     | —       |
| text-color    | 按钮形式的Checkbox激活时的文本颜色 | string               | —                     | #ffffff |
| fill          | 按钮形式的Checkbox激活时的填充色和边框色 | string             | —                     | #409EFF |

## Checkbox-group 事件

| 事件名称 | 说明                     | 回调参数                      |
| :------- | :----------------------- | :---------------------------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值                    |

## Checkbox-button 属性

| 参数          | 说明                           | 类型                      | 可选值                | 默认值  |
| :------------ | :----------------------------- | :------------------------ | :-------------------- | :------ |
| label         | 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效） | string / number / boolean | — | — |
| true-label    | 选中时的值                     | string / number           | —                     | —       |
| false-label   | 没有选中时的值                 | string / number           | —                     | —       |
| disabled      | 是否禁用                       | boolean                   | —                     | false   |
| name          | 原生 name 属性                 | string                    | —                     | —       |
| checked       | 当前是否勾选                   | boolean                   | —                     | false   |