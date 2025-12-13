# Popover 弹出层

<script setup>
import PopoverDemo1 from '../demo/Popover/PopoverDemo1.vue';
import PopoverDemo2 from '../demo/Popover/PopoverDemo2.vue';
import PopoverDemo3 from '../demo/Popover/PopoverDemo3.vue';
import PopoverDemo4 from '../demo/Popover/PopoverDemo4.vue';
import PopoverDemo5 from '../demo/Popover/PopoverDemo5.vue';
import PopoverDemo6 from '../demo/Popover/PopoverDemo6.vue';
import PopoverDemo7 from '../demo/Popover/PopoverDemo7.vue';
</script>

Popover 组件用于显示一个可以通过元素触发的、包含丰富内容的弹出层。它可以附加到任何元素上，并在用户与之交互时显示相关信息或操作。

## 基础用法

最简单的 Popover 组件使用方式，点击按钮显示弹出内容。

<Demo center>
  <PopoverDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Popover/PopoverDemo1.vue

</CollapsibleCode>

## 位置设置

Popover 组件支持多种位置设置，可以根据需要显示在触发元素的不同方位。

<Demo>
  <PopoverDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Popover/PopoverDemo2.vue

</CollapsibleCode>

## 带偏移的弹出层

通过设置`offset`属性，可以调整弹出层与触发元素之间的距离。

<Demo>
  <PopoverDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Popover/PopoverDemo3.vue

</CollapsibleCode>

## 禁用覆盖层

通过设置`overlay`属性为`false`，可以禁用弹出层的背景覆盖。

<Demo>
  <PopoverDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Popover/PopoverDemo4.vue

</CollapsibleCode>

## 禁用箭头

通过设置`arrow`属性为`false`，可以禁用弹出层的箭头。

<Demo>
  <PopoverDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Popover/PopoverDemo5.vue

</CollapsibleCode>

## 自定义尺寸

通过设置`width`和`height`属性，可以自定义弹出层的尺寸。

<Demo>
  <PopoverDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Popover/PopoverDemo6.vue

</CollapsibleCode>

## 禁用状态

通过设置`disabled`属性，可以禁用 Popover 组件。

<Demo>
  <PopoverDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Popover/PopoverDemo7.vue

</CollapsibleCode>

## API

### Popover 属性

| 属性名               | 类型               | 默认值                     | 说明                                                                                                                                                                                       |
| -------------------- | ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                 | `string`           | 自动生成                   | 组件的唯一标识符                                                                                                                                                                           |
| `placement`          | `string`           | `'bottom'`                 | 弹出层的位置，可选值：`'top'`、`'top-start'`、`'top-end'`、`'bottom'`、`'bottom-start'`、`'bottom-end'`、`'left'`、`'left-start'`、`'left-end'`、`'right'`、`'right-start'`、`'right-end'` |
| `open`               | `boolean`          | `undefined`                | 控制弹出层是否显示（受控模式）                                                                                                                                                             |
| `defaultOpen`        | `boolean`          | `false`                    | 默认是否显示弹出层（非受控模式）                                                                                                                                                           |
| `disabled`           | `boolean`          | `false`                    | 是否禁用弹出层                                                                                                                                                                             |
| `overlay`            | `boolean`          | `true`                     | 是否显示背景覆盖层                                                                                                                                                                         |
| `teleport`           | `boolean`          | `true`                     | 是否将弹出层内容传送到 body 元素下                                                                                                                                                         |
| `transitionDuration` | `number`           | `200`                      | 过渡动画持续时间（毫秒）                                                                                                                                                                   |
| `arrow`              | `boolean`          | `true`                     | 是否显示箭头                                                                                                                                                                               |
| `flip`               | `boolean`          | `true`                     | 当弹出层超出视口时，是否自动翻转位置                                                                                                                                                       |
| `shift`              | `boolean`          | `true`                     | 当弹出层超出视口时，是否自动调整位置                                                                                                                                                       |
| `offset`             | `number`           | `8`                        | 弹出层与触发元素之间的距离（像素）                                                                                                                                                         |
| `width`              | `string \| number` | `undefined`                | 弹出层的宽度                                                                                                                                                                               |
| `height`             | `string \| number` | `undefined`                | 弹出层的高度                                                                                                                                                                               |
| `padding`            | `string`           | `var(--x-popover-padding)` | 弹出层内容的内边距                                                                                                                                                                         |

### Popover 事件

| 事件名  | 参数             | 说明             |
| ------- | ---------------- | ---------------- |
| `open`  | `value: boolean` | 弹出层打开时触发 |
| `close` | `value: boolean` | 弹出层关闭时触发 |

### Popover 插槽

| 插槽名    | 说明             |
| --------- | ---------------- |
| `default` | 触发弹出层的元素 |
| `content` | 弹出层的内容     |

<style>
.z-popover-demo {
  padding: 16px;
}

.z-popover-demo h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
}

.z-popover-demo p {
  margin: 0;
  color: var(--color-text-muted);
}
</style>
