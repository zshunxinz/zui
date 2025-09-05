# Accordion 手风琴

Accordion 手风琴组件用于展示可折叠的内容区块，支持单开和多开模式，常用于展示问答、详情信息等场景。

## 基础用法

<script setup>
import AccordionDemo1 from "/demo/Accordion/AccordionDemo1.vue";
import AccordionDemo2 from "/demo/Accordion/AccordionDemo2.vue";
import AccordionDemo3 from "/demo/Accordion/AccordionDemo3.vue";
import AccordionDemo4 from "/demo/Accordion/AccordionDemo4.vue";
import AccordionDemo5 from "/demo/Accordion/AccordionDemo5.vue";
import AccordionDemo6 from "/demo/Accordion/AccordionDemo6.vue";
</script>

<Demo>
<AccordionDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Accordion/AccordionDemo1.vue

</CollapsibleCode>

## 可折叠所有项

通过设置 `collapsible` 属性为 `true` 并将 `defaultValue` 设置为空字符串，可以允许用户折叠所有项。

<Demo>
<AccordionDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Accordion/AccordionDemo2.vue

</CollapsibleCode>

## 多选模式

通过设置 `type` 属性为 `multiple`，可以启用多选模式，允许同时展开多个项目。

<Demo>
<AccordionDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Accordion/AccordionDemo3.vue

</CollapsibleCode>

## 禁用状态

通过设置 `disabled` 属性为 `true`，可以禁用整个手风琴组件。

<Demo>
<AccordionDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Accordion/AccordionDemo4.vue

</CollapsibleCode>

## 事件监听

手风琴组件支持 `update:modelValue` 事件，可以监听展开状态的变化。

<Demo>
<AccordionDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Accordion/AccordionDemo5.vue

</CollapsibleCode>

## 嵌套使用

手风琴组件支持嵌套使用，可以创建层级结构的内容展示。

<Demo>
<AccordionDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Accordion/AccordionDemo6.vue

</CollapsibleCode>

## Accordion Props

| 属性名       | 类型                     | 默认值      | 说明                                                                       |
| ------------ | ------------------------ | ----------- | -------------------------------------------------------------------------- |
| type         | `'single' \| 'multiple'` | `'single'`  | 手风琴类型，single 表示一次只能展开一个项目，multiple 表示可以展开多个项目 |
| defaultValue | `string`                 | `''`        | 默认展开的值，用于非受控模式                                               |
| modelValue   | `string \| string[]`     | `undefined` | 当前展开的值，用于受控模式                                                 |
| collapsible  | `boolean`                | `false`     | 是否允许折叠所有项目                                                       |
| disabled     | `boolean`                | `false`     | 是否禁用整个手风琴                                                         |

## AccordionItem Props

| 属性名   | 类型      | 默认值  | 说明                                   |
| -------- | --------- | ------- | -------------------------------------- |
| value    | `string`  | -       | 项目的值，用于标识和控制展开状态，必需 |
| disabled | `boolean` | `false` | 是否禁用当前项目                       |

## AccordionTrigger Props

无特定属性，主要作为触发器使用，内容通过插槽传入。

## AccordionContent Props

无特定属性，主要用于显示内容，内容通过插槽传入。

## Events

| 事件名            | 说明                 | 回调参数                                   |
| ----------------- | -------------------- | ------------------------------------------ |
| update:modelValue | 当展开状态变化时触发 | `value: string \| string[]` - 当前展开的值 |
| change            | 当展开状态变化时触发 | `value: string \| string[]` - 当前展开的值 |

<!-- ## Accessibility

Accordion 组件遵循 WAI-ARIA 设计模式，提供了适当的 ARIA 属性，包括：

- `role="group"` 和 `aria-multiselectable` 在主容器上
- `role="heading"` 和 `aria-level` 在项目上
- `aria-expanded` 和 `aria-controls` 在触发器上
- `role="region"` 和 `aria-labelledby` 在内容区域上

这些属性确保了组件对屏幕阅读器和其他辅助技术的良好支持。 -->
