# Tabs 标签页

标签页组件用于在同一区域展示不同内容，支持多种样式和位置。

## 基础用法

基础的标签页用法，通过`v-model`绑定当前激活的标签索引。

<script setup>
import TabsDemo1 from '../demo/Tabs/TabsDemo1.vue';
import TabsDemo2 from '../demo/Tabs/TabsDemo2.vue';
import TabsDemo3 from '../demo/Tabs/TabsDemo3.vue';
import TabsDemo4 from '../demo/Tabs/TabsDemo4.vue';
import TabsDemo5 from '../demo/Tabs/TabsDemo5.vue';
import TabsDemo6 from '../demo/Tabs/TabsDemo6.vue';
import TabsDemo7 from '../demo/Tabs/TabsDemo7.vue';
import TabsDemo8 from '../demo/Tabs/TabsDemo8.vue';
import TabsDemo9 from '../demo/Tabs/TabsDemo9.vue';
import TabsDemo10 from '../demo/Tabs/TabsDemo10.vue';
import TabsDemo11 from '../demo/Tabs/TabsDemo11.vue';
import TabsDemo12 from '../demo/Tabs/TabsDemo12.vue';
import TabsDemo13 from '../demo/Tabs/TabsDemo13.vue';
import TabsDemo14 from '../demo/Tabs/TabsDemo14.vue';
import TabsDemo15 from '../demo/Tabs/TabsDemo15.vue';
import TabsDemo16 from '../demo/Tabs/TabsDemo16.vue';
import TabsDemo17 from '../demo/Tabs/TabsDemo17.vue';
</script>

<Demo>
<TabsDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo1.vue

</CollapsibleCode>

## 不同类型

支持多种类型的标签页，包括`primary`、`success`、`warning`、`danger`和`info`。

<Demo>
<TabsDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo2.vue

</CollapsibleCode>

## 不同尺寸

支持`small`、`default`和`large`三种尺寸。

<Demo>
<TabsDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo3.vue

</CollapsibleCode>

## 不同位置

标签页可以放置在`top`、`bottom`、`left`或`right`四个位置。

<Demo>
<TabsDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo4.vue

</CollapsibleCode>

## 按钮样式

设置`buttonStyle`属性为`true`可以启用按钮样式的标签页，使标签看起来像按钮一样。

<Demo>
<TabsDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo5.vue

</CollapsibleCode>

## 按钮样式类型

按钮样式可以与不同类型结合使用：

<Demo>
<TabsDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo6.vue

</CollapsibleCode>

## 自定义样式

### 背景与边框

设置`tabsBg`属性为`true`可以为标签页添加默认背景颜色。
设置`borderLine`属性为`false`可以移除标签页的底部边框。
<Demo>
<TabsDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo7.vue

</CollapsibleCode>

### 自定义背景类

设置`tabsBgClass`属性可以自定义标签页的背景颜色类名。
<Demo>
<TabsDemo8/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo8.vue

</CollapsibleCode>

### 全宽标签

设置`tabFull`属性为`true`可以使标签页宽度平均分配并占满父容器。
<Demo>
<TabsDemo9/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo9.vue

</CollapsibleCode>

### 按钮样式标签

设置`buttonStyle`属性为`true`可以启用按钮样式的标签页，与`borderLine`属性结合使用可以创建更简洁的按钮效果。

<Demo>
<TabsDemo10/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo10.vue

</CollapsibleCode>

### 按钮样式与类型组合

按钮样式可以与`type`属性组合使用，创建不同颜色的按钮标签。

<Demo>
<TabsDemo11/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo11.vue

</CollapsibleCode>

### 文本按钮样式

设置`buttonStyleText`属性为`true`可以使标签页按钮样式为文本主题（仅边框和文字变色，背景保持透明）。

<Demo>
<TabsDemo12/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo12.vue

</CollapsibleCode>

### 全宽按钮标签

`tabFull`属性可以与按钮样式组合，创建全宽的按钮标签。

<Demo>
<TabsDemo13/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo13.vue

</CollapsibleCode>

### 自定义背景类名与全宽按钮标签

将 tabFull、tabsBgClass、buttonStyleText 结合使用

<Demo>
  <TabsDemo14/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo14.vue

</CollapsibleCode>

## 禁用标签

可以禁用某些标签页。
<Demo>
<TabsDemo15/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo15.vue

</CollapsibleCode>

### 部分标签可关闭

可以在标签配置中设置`close`属性来控制单个标签是否可关闭，而不是使用`closable`属性控制所有标签。
<Demo>
<TabsDemo17/>
</Demo>

<CollapsibleCode>

<<< ../demo/Tabs/TabsDemo17.vue

</CollapsibleCode>

## API

### Props

| 参数          | 说明                                                                            | 类型         | 默认值    |
| ------------- | ------------------------------------------------------------------------------- | ------------ | --------- |
| `modelValue`  | 当前激活的标签索引                                                              | `number`     | 0         |
| `tabs`        | 标签配置数组                                                                    | `Array<Tab>` | `[]`      |
| `position`    | 标签位置，可选值为 `top`、`bottom`、`left`、`right`                             | `string`     | `top`     |
| `type`        | 标签类型，可选值为 `default`、`primary`、`success`、`warning`、`danger`、`info` | `string`     | `default` |
| `size`        | 标签尺寸，可选值为 `small`、`default`、`large`                                  | `string`     | `default` |
| `closable`    | 是否可关闭                                                                      | `boolean`    | `false`   |
| `buttonStyle` | 是否使用按钮样式的标签页                                                        | `boolean`    | `false`   |
| `tabsBg`      | 浅色背景                                                                        | `boolean`    |
| `tabsBgStyle` | 自定义背景样式                                                                  | `object`     | `{}`      |

### Tab 接口

| 属性       | 说明                                   | 类型      | 默认值  |
| ---------- | -------------------------------------- | --------- | ------- |
| `label`    | 标签文本                               | `string`  | -       |
| `name`     | 标签名称，对应插槽名称                 | `string`  | -       |
| `disabled` | 是否禁用                               | `boolean` | `false` |
| `close`    | 是否可关闭（优先级高于 closable 属性） | `boolean` | `false` |

### Events

| 事件名              | 说明                                         | 回调参数              |
| ------------------- | -------------------------------------------- | --------------------- |
| `update:modelValue` | 标签切换时触发                               | 当前标签索引 `number` |
| `tab-click`         | 标签点击时触发                               | 当前标签索引 `number` |
| `tab-close`         | 标签关闭时触发（当`closable`为`true`时可用） | 当前标签索引 `number` |

### Slots

| 插槽名       | 说明                                                 |
| ------------ | ---------------------------------------------------- |
| `[tab.name]` | 对应标签的内容，`tab.name`为标签配置中的`name`属性值 |
