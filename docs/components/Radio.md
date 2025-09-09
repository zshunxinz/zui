# Radio 单选框

单选框组件，用于在多个选项中选择单个结果。

<script setup>
import { ref } from 'vue'
import RadioDemo1 from '../demo/Radio/RadioDemo1.vue'
import RadioDemo2 from '../demo/Radio/RadioDemo2.vue'
import RadioDemo3 from '../demo/Radio/RadioDemo3.vue'
import RadioDemo4 from '../demo/Radio/RadioDemo4.vue'
import RadioDemo5 from '../demo/Radio/RadioDemo5.vue'
import RadioDemo6 from '../demo/Radio/RadioDemo6.vue'
import RadioDemo7 from '../demo/Radio/RadioDemo7.vue'
import RadioDemo8 from '../demo/Radio/RadioDemo8.vue'
import RadioDemo9 from '../demo/Radio/RadioDemo9.vue'
</script>

<style scoped>

</style>

## 基础用法

默认圆形样式

<Demo>
<RadioDemo1 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo1.vue

</CollapsibleCode>

## 方形样式

<Demo>
<RadioDemo2 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo2.vue

</CollapsibleCode>

## 按钮样式

<Demo>
<RadioDemo3 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo3.vue

</CollapsibleCode>

## 卡片样式

卡片样式支持自定义插槽内容，插槽名称格式为`card-${value}`

<Demo>
<RadioDemo4 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo4.vue

</CollapsibleCode>

## 选项卡样式

设置 shape 为`tab`,选项卡模式提供标签式的单选体验，底部边框颜色随 type 属性变化

<Demo>
<RadioDemo5 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo5.vue

</CollapsibleCode>

设置 shape 为`tab-line`,选项卡模式提供没有默认圆形的标签式的单选体验，底部边框颜色随 type 属性变化

<Demo>
<RadioDemo6 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo6.vue

</CollapsibleCode>

设置 shape 为`tab-button`,选项卡模式，按钮样式

<Demo>
<RadioDemo7 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo7.vue

</CollapsibleCode>

## 颜色类型

通过`type`属性可以设置单选框的颜色类型，支持与 Button 组件相同的颜色体系。

<Demo>
<RadioDemo8 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo8.vue

</CollapsibleCode>

## 禁用状态

<Demo>
<RadioDemo9 />
</Demo>

<CollapsibleCode>

<<< ../demo/Radio/RadioDemo9.vue

</CollapsibleCode>

## 属性

| 参数         | 说明           | 类型                      | 可选值                                      | 默认值                                          |
| ------------ | -------------- | ------------------------- | ------------------------------------------- | ----------------------------------------------- |
| v-model      | 绑定值         | string / number / boolean | —                                           | —                                               |
| options      | 选项列表       | Array                     | —                                           | []                                              |
| name         | 原生 name 属性 | string                    | —                                           | —                                               |
| disabled     | 是否禁用       | boolean                   | true / false                                | false                                           |
| shape        | 单选框样式     | string                    | circle / square / button / card / tab       | circle                                          |
| checkedClass | 选中状态类     | string                    | -                                           | 可选，仅卡片样式有效，自定义选中状态的 CSS 类名 |
| type         | 单选框颜色类型 | string                    | default/primary/success/warning/danger/info | default                                         |

## 事件

| 事件名称 | 说明             | 回调参数        |
| -------- | ---------------- | --------------- |
| change   | 绑定值变化时触发 | 选中的 value 值 |

## 选项配置

options 数组中的每个对象可以包含以下属性：

| 参数     | 说明           | 类型                      | 可选值       | 默认值 |
| -------- | -------------- | ------------------------- | ------------ | ------ |
| label    | 选项文本       | string                    | —            | —      |
| value    | 选项值         | string / number / boolean | —            | —      |
| disabled | 是否禁用该选项 | boolean                   | true / false | false  |
