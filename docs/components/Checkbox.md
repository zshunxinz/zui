# Checkbox 多选框

一组备选项中进行多选

<script setup>
import { ref, computed } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);

const checkedList = ref([]);
const checkAll = ref(false);
const isIndeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < 3;
});

const handleCheckAllChange = (val) => {
  checked1.value = val;
  checked2.value = val;
  checked3.value = val;
  checkedList.value = val ? ['备选项1', '备选项2', '备选项3'] : [];
};

const handleCheckedChange = (val) => {
  checkAll.value = val.length === 3;
};

</script>

<style scoped>
.checkbox-demo {
  padding: 20px 0;
}
.checkbox-group {
  display: flex;
  gap: 30px;
  padding: 20px;
}
.checkbox-type-demo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

<Demo>
  <div class="checkbox-demo">
    <div class="checkbox-group">
      <Checkbox v-model="checked1" label="HTML"></Checkbox>
      <Checkbox v-model="checked2" label="CSS"></Checkbox>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="checkbox-demo">
    <div class="checkbox-group">
      <Checkbox v-model="checked1" label="HTML"></Checkbox>
      <Checkbox v-model="checked2" label="CSS"></Checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
</script>
```

</CollapsibleCode>

## 颜色选项
通过设置`color`属性可以自定义多选框的颜色主题，支持`primary`、`success`、`danger`等内置主题色。

<Demo>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="Primary" color="primary"></Checkbox>
      <Checkbox v-model="checked2" label="Success" color="success"></Checkbox>
      <Checkbox v-model="checked3" label="Danger" color="danger"></Checkbox>
      <Checkbox v-model="checked4" label="Warning" color="warning"></Checkbox>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="Primary" color="primary"></Checkbox>
      <Checkbox v-model="checked2" label="Success" color="success"></Checkbox>
      <Checkbox v-model="checked3" label="Danger" color="danger"></Checkbox>
      <Checkbox v-model="checked4" label="Warning" color="warning"></Checkbox>
    </div>
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

</CollapsibleCode>

## 禁用状态

通过设置`disabled`属性可以禁用多选框，禁用的多选框无法被选中或取消选中。

<Demo>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="禁用选项" disabled></Checkbox>
      <Checkbox v-model="checked2" label="已选中的禁用选项" disabled></Checkbox>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="禁用选项" disabled></Checkbox>
      <Checkbox v-model="checked2" label="已选中的禁用选项" disabled></Checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
</script>
```

</CollapsibleCode>

## 多选框组

通过`CheckboxGroup`组件可以创建多选框组，实现全选/全不选功能。

<Demo>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</Checkbox>
      <div style="margin: 15px 0"></div>
      <CheckboxGroup v-model="checkedList" @change="handleCheckedChange">
        <Checkbox label="备选项1"></Checkbox>
        <Checkbox label="备选项2"></Checkbox>
        <Checkbox label="备选项3"></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</Checkbox>
      <div style="margin: 15px 0"></div>
      <CheckboxGroup v-model="checkedList" @change="handleCheckedChange">
        <Checkbox label="备选项1"></Checkbox>
        <Checkbox label="备选项2"></Checkbox>
        <Checkbox label="备选项3"></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const checkedList = ref([]);
const checkAll = ref(false);
const isIndeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < 3;
});

const handleCheckAllChange = (val) => {
  checkedList.value = val ? ['备选项1', '备选项2', '备选项3'] : [];
};

const handleCheckedChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === 3;
};
</script>
```

</CollapsibleCode>

## 按钮样式

按钮样式的多选框可通过`CheckboxButton`组件实现

<Demo>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <CheckboxGroup v-model="checkedList" size="small">
        <CheckboxButton label="备选项1" color="primary"></CheckboxButton>
        <CheckboxButton label="备选项2" color="success"></CheckboxButton>
        <CheckboxButton label="备选项3" color="warning"></CheckboxButton>
        <CheckboxButton label="备选项4" color="danger"></CheckboxButton>
      </CheckboxGroup>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <CheckboxGroup v-model="checkedList" size="small">
        <CheckboxButton label="备选项1" color="primary"></CheckboxButton>
        <CheckboxButton label="备选项2" color="success"></CheckboxButton>
        <CheckboxButton label="备选项3" color="warning"></CheckboxButton>
        <CheckboxButton label="备选项4" color="danger"></CheckboxButton>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checkedList = ref(['备选项1', '备选项3']);
</script>
```

</CollapsibleCode>

## 带有边框

设置`border`属性可以渲染为带有边框的多选框。

<Demo>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="HTML" border></Checkbox>
      <Checkbox v-model="checked2" label="CSS" border></Checkbox>
      <Checkbox v-model="checked3" label="JavaScript" border></Checkbox>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checked1" label="HTML" border></Checkbox>
      <Checkbox v-model="checked2" label="CSS" border></Checkbox>
      <Checkbox v-model="checked3" label="JavaScript" border></Checkbox>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
</script>
```

</CollapsibleCode>

##  indeterminate 状态

`indeterminate`属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。

<Demo>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</Checkbox>
      <div style="margin: 15px 0"></div>
      <CheckboxGroup v-model="checkedList" @change="handleCheckedChange">
        <Checkbox label="备选项1"></Checkbox>
        <Checkbox label="备选项2"></Checkbox>
        <Checkbox label="备选项3"></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="checkbox-demo">
    <div class="checkbox-type-demo">
      <Checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</Checkbox>
      <div style="margin: 15px 0"></div>
      <CheckboxGroup v-model="checkedList" @change="handleCheckedChange">
        <Checkbox label="备选项1"></Checkbox>
        <Checkbox label="备选项2"></Checkbox>
        <Checkbox label="备选项3"></Checkbox>
      </CheckboxGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const checkedList = ref([]);
const checkAll = ref(false);
const isIndeterminate = computed(() => {
  return checkedList.value.length > 0 && checkedList.value.length < 3;
});

const handleCheckAllChange = (val) => {
  checkedList.value = val ? ['备选项1', '备选项2', '备选项3'] : [];
};

const handleCheckedChange = (value) => {
  const checkedCount = value.length;
  checkAll.value = checkedCount === 3;
};
</script>

```

</CollapsibleCode>

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