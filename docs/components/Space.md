# Space 间距

<script setup>
import SpaceDemo1 from '../demo/Space/SpaceDemo1.vue'
import SpaceDemo2 from '../demo/Space/SpaceDemo2.vue'
import SpaceDemo3 from '../demo/Space/SpaceDemo3.vue'
import SpaceDemo4 from '../demo/Space/SpaceDemo4.vue'
import SpaceDemo5 from '../demo/Space/SpaceDemo5.vue'
import SpaceDemo6 from '../demo/Space/SpaceDemo6.vue'
import SpaceDemo7 from '../demo/Space/SpaceDemo7.vue'
import SpaceDemo8 from '../demo/Space/SpaceDemo8.vue'
</script>

间距组件用于控制组件之间的间距，支持多种对齐方式和方向。

## 基础用法

基础的间距组件用法，可以设置水平或垂直方向的间距。

<Demo>
<SpaceDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo1.vue

</CollapsibleCode>

## 不同大小

支持多种预设大小，包括`mini`、`small`、`medium`、`large`，也可以传入自定义数值。

<Demo>
<SpaceDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo2.vue

</CollapsibleCode>

## 不同对齐方式

支持多种对齐方式，包括`start`、`end`、`center`、`baseline`。

<Demo>
<SpaceDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo3.vue

</CollapsibleCode>

## 自动换行

设置`wrap`属性为`true`可以在空间不足时自动换行。

<Demo>
<SpaceDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo4.vue

</CollapsibleCode>

## 充满整行

设置`fill`属性为`true`可以让子元素充满整行。

<Demo>
<SpaceDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo5.vue

</CollapsibleCode>

## 设置分隔符

通过`split`插槽可以设置子元素之间的分隔符。

<Demo>
<SpaceDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo6.vue

</CollapsibleCode>

## 不同方向的自定义间距

可以通过数组形式分别设置水平和垂直方向的间距。

<Demo>
<SpaceDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo7.vue

</CollapsibleCode>

## 结合其他组件使用

Space 组件可以与其他组件结合使用，如表单、卡片等。

<Demo center>
<SpaceDemo8/>
</Demo>

<CollapsibleCode>

<<< ../demo/Space/SpaceDemo8.vue

</CollapsibleCode>

## 属性

| 参数      | 说明                                   | 类型                                                                       | 默认值       | 版本 |
| --------- | -------------------------------------- | -------------------------------------------------------------------------- | ------------ | ---- |
| align     | 对齐方式                               | 'start' \| 'end' \| 'center' \| 'baseline'                                 | 'start'      | -    |
| direction | 间距方向                               | 'vertical' \| 'horizontal'                                                 | 'horizontal' | -    |
| size      | 间距大小，支持分别制定横向和竖向的间距 | number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SizeType, SizeType] | 'small'      | -    |
| wrap      | 环绕类型的间距，用于折行的场景         | boolean                                                                    | false        | -    |
| fill      | 充满整行                               | boolean                                                                    | false        | -    |
| items     | 子项数据（可选）                       | any[]                                                                      | []           | -    |

## 插槽

| 插槽名  | 描述       | 参数 |
| ------- | ---------- | ---- |
| default | 默认插槽   | -    |
| split   | 设置分隔符 | -    |

## SizeType 说明

SizeType 可以是以下类型之一：

- `number`: 自定义间距大小（单位：px）
- `string`: 预设间距大小，可选值为 'mini'、'small'、'medium'、'large'
- `array`: 数组形式，用于分别设置水平和垂直方向的间距，如 `[16, 8]`
