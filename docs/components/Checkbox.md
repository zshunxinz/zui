# Checkbox 多选框

一组备选项中进行多选

<script setup>
import CheckboxDemo1 from '../demo/Checkbox/CheckboxDemo1.vue'
import CheckboxDemo2 from '../demo/Checkbox/CheckboxDemo2.vue'
import CheckboxDemo3 from '../demo/Checkbox/CheckboxDemo3.vue'
import CheckboxDemo4 from '../demo/Checkbox/CheckboxDemo4.vue'
import CheckboxDemo5 from '../demo/Checkbox/CheckboxDemo5.vue'
import CheckboxDemo6 from '../demo/Checkbox/CheckboxDemo6.vue'
import CheckboxDemo7 from '../demo/Checkbox/CheckboxDemo7.vue'
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
<CheckboxDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Checkbox/CheckboxDemo1.vue

</CollapsibleCode>

## 颜色选项
通过设置`color`属性可以自定义多选框的颜色主题，支持`primary`、`success`、`danger`等内置主题色。

<Demo>
<CheckboxDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Checkbox/CheckboxDemo2.vue

</CollapsibleCode>

## 禁用状态

通过设置`disabled`属性可以禁用多选框，禁用的多选框无法被选中或取消选中。

<Demo>
<CheckboxDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Checkbox/CheckboxDemo3.vue

</CollapsibleCode>

## 多选框组

通过`CheckboxGroup`组件可以创建多选框组，实现全选/全不选功能。

<Demo>
<CheckboxDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Checkbox/CheckboxDemo4.vue

</CollapsibleCode>

## 按钮样式

按钮样式的多选框可通过`CheckboxButton`组件实现

<Demo>
<CheckboxDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Checkbox/CheckboxDemo5.vue

</CollapsibleCode>

## 带有边框

设置`border`属性可以渲染为带有边框的多选框。

<Demo>
<CheckboxDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Checkbox/CheckboxDemo6.vue

</CollapsibleCode>

##  indeterminate 状态

`indeterminate`属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果。

<Demo>
<CheckboxDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Checkbox/CheckboxDemo7.vue

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