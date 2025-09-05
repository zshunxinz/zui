# Divider 分割线

<script setup>
import DividerDemo1 from '../demo/Divider/DividerDemo1.vue'
import DividerDemo2 from '../demo/Divider/DividerDemo2.vue'
import DividerDemo3 from '../demo/Divider/DividerDemo3.vue'
import DividerDemo4 from '../demo/Divider/DividerDemo4.vue'
import DividerDemo5 from '../demo/Divider/DividerDemo5.vue'
</script>

Divider 组件用于分隔内容，支持多种方向、样式类型和文字位置自定义。

## 基础用法

展示水平和垂直方向的基础分割线。

<Demo>
<DividerDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Divider/DividerDemo1.vue

</CollapsibleCode>

## 样式类型

支持实线、虚线、点线和双线四种样式类型。

<Demo>
<DividerDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Divider/DividerDemo2.vue

</CollapsibleCode>

## 文字位置

设置分割线文字的位置（左、中、右）或使用百分比值自定义位置。

<Demo>
<DividerDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Divider/DividerDemo3.vue

</CollapsibleCode>

## 尺寸和边距

调整分割线的粗细（size）和外边距（margin）。

<Demo>
<DividerDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Divider/DividerDemo4.vue

</CollapsibleCode>

## 自定义颜色

通过 `color` 属性自定义分割线颜色，`textColor` 属性自定义文字颜色。

<Demo>
<DividerDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Divider/DividerDemo5.vue

</CollapsibleCode>

## Props

| 属性名      | 类型             | 默认值       | 说明                                                                                    |
| ----------- | ---------------- | ------------ | --------------------------------------------------------------------------------------- |
| direction   | string           | 'horizontal' | 分割线方向，可选值：'horizontal'（水平）、'vertical'（垂直）                            |
| orientation | string           | 'center'     | 文字位置，可选值：'left'（左）、'center'（中）、'right'（右）或百分比值（如 '20%'）     |
| ctype       | string           | 'solid'      | 样式类型，可选值：'solid'（实线）、'dashed'（虚线）、'dotted'（点线）、'double'（双线） |
| size        | number           | 1            | 分割线宽度/高度（px）                                                                   |
| margin      | number \| string | 16           | 外边距，支持数字（px）或字符串（如 '10px 20px'）                                        |
| text        | string           | ''           | 分割线文字内容                                                                          |
| textColor   | string           | ''           | 文字颜色，默认继承父元素                                                                |
| color       | string           | ''           | 分割线颜色，默认使用主题边框色                                                          |
