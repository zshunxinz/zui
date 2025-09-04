# Form 组件

表单组件

<script setup lang="ts">
import FormDemoBasic from '../demo/Form/FormDemoBasic.vue';
import FormDemoAdvanced from '../demo/Form/FormDemoAdvanced.vue';
import FormDemo1 from '../demo/Form/FormDemo1.vue';
import FormDemo2 from '../demo/Form/FormDemo2.vue';
import FormDemo3 from '../demo/Form/FormDemo3.vue';
</script>

## 基础用法

<Demo center>
  <FormDemoBasic />
</Demo>
<CollapsibleCode>
```vue
<template>
  <FormDemoBasic />
</template>
```
</CollapsibleCode>

## 高级验证

表单组件支持多种验证规则类型，包括必填验证、长度验证、数值范围验证、正则表达式验证和自定义验证函数。

<Demo center>
  <FormDemoAdvanced />
</Demo>

## 动态表单

表单组件支持动态添加和移除表单项，适用于需要动态收集数据的场景，如技能列表、工作经历等。

<Demo center>
  <FormDemo1 />
</Demo>

## 表单布局切换

表单组件支持多种布局方式和尺寸设置，可以根据不同的场景需求进行灵活配置。

<Demo center>
  <FormDemo2 />
</Demo>

## 表单联动

表单组件支持灵活的联动功能，可以根据用户的选择动态显示或隐藏表单项，或者根据前面的输入动态改变后面的选项。

<Demo center>
  <FormDemo3 />
</Demo>

## API

### Form Props

| 参数名        | 类型    | 默认值  | 说明                                                |
| ------------- | ------- | ------- | --------------------------------------------------- |
| modelValue    | Object  | {}      | 表单数据对象，支持 v-model 双向绑定                 |
| rules         | Object  | {}      | 表单验证规则，键为字段名，值为验证规则              |
| disabled      | Boolean | false   | 是否禁用整个表单                                    |
| labelWidth    | String  | '100px' | 标签宽度，支持 px、%等单位                          |
| labelPosition | String  | 'left'  | 标签位置，可选值：left/right/top/left-top/right-top |
| labelAlign    | String  | 'right' | 标签文本对齐方式，可选值：left/center/right         |

### FormItem Props

| 参数名        | 类型    | 默认值    | 说明                                 |
| ------------- | ------- | --------- | ------------------------------------ |
| label         | String  | ''        | 标签文本                             |
| prop          | String  | -         | 表单字段名，对应 modelValue 中的属性 |
| required      | Boolean | false     | 是否显示必填星号                     |
| labelPosition | String  | undefined | 覆盖 Form 组件的 labelPosition 设置  |
| labelAlign    | String  | undefined | 覆盖 Form 组件的 labelAlign 设置     |
