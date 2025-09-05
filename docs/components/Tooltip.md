# Tooltip 提示

<script setup>
import TooltipDemo1 from '../demo/Tooltip/TooltipDemo1.vue';
import TooltipDemo2 from '../demo/Tooltip/TooltipDemo2.vue';
import TooltipDemo3 from '../demo/Tooltip/TooltipDemo3.vue';
import TooltipDemo4 from '../demo/Tooltip/TooltipDemo4.vue';
import TooltipDemo5 from '../demo/Tooltip/TooltipDemo5.vue';
import TooltipDemo6 from '../demo/Tooltip/TooltipDemo6.vue';
import TooltipDemo7 from '../demo/Tooltip/TooltipDemo7.vue';
import TooltipDemo8 from '../demo/Tooltip/TooltipDemo8.vue';
</script>

Tooltip 组件用于在用户与元素交互时显示提示信息，支持多种位置、主题和交互方式。

## 基础用法

基础的 Tooltip 使用方式，默认在鼠标悬停时显示提示信息。

<Demo>
<TooltipDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo1.vue

</CollapsibleCode>

## 自定义内容

通过插槽可以自定义 Tooltip 的内容，使其更加丰富和灵活。

<Demo>
<TooltipDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo2.vue

</CollapsibleCode>

## 不同位置

Tooltip 支持多种显示位置，包括上、右、下、左四个方向。

<Demo>
<TooltipDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo3.vue

</CollapsibleCode>

## 不同主题

Tooltip 提供多种主题颜色，适用于不同的场景和需求。

<Demo>
<TooltipDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo4.vue

</CollapsibleCode>

## 延迟显示

通过 delay 属性可以设置提示显示的延迟时间，避免鼠标快速划过元素时显示提示。

<Demo>
<TooltipDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo5.vue

</CollapsibleCode>

## 禁用状态

设置 disabled 属性可以禁用 Tooltip，使其不再响应鼠标交互。

<Demo>
<TooltipDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo6.vue

</CollapsibleCode>

## 隐藏箭头

通过设置 arrow 属性为 false 可以隐藏 Tooltip 的箭头。

<Demo>
<TooltipDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo7.vue

</CollapsibleCode>

## 表单元素提示

Tooltip 可以与各种表单元素组合使用，提供额外的帮助信息。

<Demo>
<TooltipDemo8/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tooltip/TooltipDemo8.vue

</CollapsibleCode>

## Props

| 属性名    | 类型                                                                   | 默认值    | 说明             |
| --------- | ---------------------------------------------------------------------- | --------- | ---------------- |
| content   | string                                                                 | ''        | 提示内容         |
| placement | 'top' \| 'right' \| 'bottom' \| 'left'                                 | 'top'     | 提示显示位置     |
| theme     | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'default' | 提示主题颜色     |
| disabled  | boolean                                                                | false     | 是否禁用提示     |
| delay     | number                                                                 | 0         | 显示延迟时间(ms) |
| arrow     | boolean                                                                | true      | 是否显示箭头     |

## 插槽

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 触发元素内容 |
| content | 提示内容     |

## 事件

| 事件名     | 说明               | 参数         |
| ---------- | ------------------ | ------------ |
| mouseenter | 鼠标进入触发元素时 | 原生事件对象 |
| mouseleave | 鼠标离开触发元素时 | 原生事件对象 |
| focus      | 触发元素获得焦点时 | 原生事件对象 |
| blur       | 触发元素失去焦点时 | 原生事件对象 |
