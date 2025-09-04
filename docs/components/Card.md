# Card 卡片

Card 组件用于展示内容，支持多种类型、尺寸和自定义功能。

## 基础用法

<script setup>
import { ref } from "vue";
import CardDemo1 from "../demo/Card/CardDemo1.vue";
import CardDemo2 from "../demo/Card/CardDemo2.vue";
import CardDemo3 from "../demo/Card/CardDemo3.vue";
import CardDemo4 from "../demo/Card/CardDemo4.vue";
import CardDemo5 from "../demo/Card/CardDemo5.vue";
import CardDemo6 from "../demo/Card/CardDemo6.vue";
import CardDemo7 from "../demo/Card/CardDemo7.vue";
import CardDemo8 from "../demo/Card/CardDemo8.vue";
import CardDemo9 from "../demo/Card/CardDemo9.vue";
import CardDemo10 from "../demo/Card/CardDemo10.vue";
const loading = ref(true);
const toggleLoading = () => {
  loading.value = !loading.value;
};
</script>

<style scoped>
.card-group {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<Demo center>
  <CardDemo1  />
</Demo>

<CollapsibleCode>

<<< @/demo/Card/CardDemo1.vue

</CollapsibleCode>

## 控制卡片尺寸

通过`width`和`height`属性可以手动控制卡片的宽度和高度。支持数字(px)和字符串形式的 CSS 值。

<CardDemo2 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo2.vue

</CollapsibleCode>

## 类型和尺寸

卡片支持多种尺寸和类型：
<CardDemo3 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo3.vue

</CollapsibleCode>

## 控制内边距

通过`padding`属性可以控制卡片内部的内边距。
<CardDemo4 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo4.vue

</CollapsibleCode>

## 可折叠卡片与事件

支持设置卡片为可折叠状态，并通过`@toggle`事件获取展开状态：

<CardDemo5 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo5.vue

</CollapsibleCode>

## 自定义插槽

卡片支持多种插槽，包括头部、内容、底部以及新增的右上角、左下角和右下角插槽：
<CardDemo6 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo6.vue

</CollapsibleCode>

## 悬浮效果与阴影控制

设置`hoverable`属性为`true`可以启用卡片悬浮效果。通过`shadow`属性可以控制卡片是否显示阴影。
<CardDemo7 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo7.vue

</CollapsibleCode>

## 无边框模式

设置`border`属性为`false`可以禁用卡片边框：
<CardDemo8 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo8.vue

</CollapsibleCode>

## 灵活布局

通过`layout`属性可以设置卡片的布局方式：
<CardDemo9 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo9.vue

</CollapsibleCode>

## 骨架屏控制

通过`skeleton`属性可以控制卡片是否显示骨架屏效果。通常与异步数据加载配合使用：
<CardDemo10 />

<CollapsibleCode>

<<< @/demo/Card/CardDemo10.vue

</CollapsibleCode>

## Props

| 属性名      | 类型             | 默认值    | 说明                                                                   |
| ----------- | ---------------- | --------- | ---------------------------------------------------------------------- |
| title       | string           | -         | 卡片标题                                                               |
| type        | string           | 'default' | 卡片类型，可选值：'default', 'primary', 'success', 'warning', 'danger' |
| size        | string           | 'default' | 卡片尺寸，可选值：'small', 'default', 'large'                          |
| collapsible | boolean          | false     | 是否可折叠                                                             |
| defaultOpen | boolean          | false     | 默认是否展开                                                           |
| hoverable   | boolean          | false     | 是否启用悬浮效果                                                       |
| border      | boolean          | true      | 是否显示边框                                                           |
| layout      | string           | 'default' | 布局方式，可选值：'default', 'flexible', 'tight'                       |
| skeleton    | boolean          | false     | 是否显示骨架屏                                                         |
| width       | string \| number | undefined | 卡片宽度，支持数字(px)和字符串形式的 CSS 值                            |
| height      | string \| number | undefined | 卡片高度，支持数字(px)和字符串形式的 CSS 值                            |
| padding     | string \| number | undefined | 卡片内边距，支持数字(px)和字符串形式的 CSS 值                          |
| shadow      | boolean          | false     | 是否显示阴影                                                           |

## 插槽

| 插槽名      | 说明       |
| ----------- | ---------- |
| default     | 卡片内容   |
| title       | 卡片标题   |
| topRight    | 右上角内容 |
| footer      | 底部内容   |
| bottomLeft  | 左下角内容 |
| bottomRight | 右下角内容 |
