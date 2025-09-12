# Slider 滑动输入条

滑动输入条组件，用于通过拖拽滑块来输入数值，支持范围选择、步长设置、禁用状态等功能。

<script setup>
import { ref } from 'vue'
import SliderDemo1 from "../demo/Slider/SliderDemo1.vue";
import SliderDemo2 from "../demo/Slider/SliderDemo2.vue";
import SliderDemo3 from "../demo/Slider/SliderDemo3.vue";
import SliderDemo4 from "../demo/Slider/SliderDemo4.vue";
import SliderDemo5 from "../demo/Slider/SliderDemo5.vue";
import SliderDemo6 from "../demo/Slider/SliderDemo6.vue";
const value = ref(50);
const dragState = ref('未拖动');

const handleChange = (val) => {
  console.log('值改变:', val);
};

const handleDragStart = () => {
  dragState.value = '开始拖动';
};

const handleDragEnd = () => {
  dragState.value = '结束拖动';
};



</script>

## 基础用法

最简单的滑动输入条，通过 `v-model` 绑定数值。

<Demo>
<SliderDemo1 />
</Demo>

<CollapsibleCode>

<<< ../demo/Slider/SliderDemo1.vue

</CollapsibleCode>

## 范围设置

通过 `min` 和 `max` 属性设置滑动输入条的最小值和最大值。

<Demo>
<SliderDemo2 />
</Demo>

<CollapsibleCode>

<<< ../demo/Slider/SliderDemo2.vue

</CollapsibleCode>

## 步长设置

通过 `step` 属性设置滑动输入条的步长，控制每次拖动的值变化量。

<Demo>
<SliderDemo3 />
</Demo>

<CollapsibleCode>

<<< ../demo/Slider/SliderDemo3.vue

</CollapsibleCode>

## 尺寸设置

支持 `small`、`medium`、`large` 三种尺寸，默认为 `medium`。

<Demo>
<SliderDemo4 />
</Demo>

<CollapsibleCode>

<<< ../demo/Slider/SliderDemo4.vue

</CollapsibleCode>

## 显示数值

通过 `showValue` 属性设置是否显示当前选中的数值。

<Demo>
<SliderDemo5 />
</Demo>

<CollapsibleCode>

<<< ../demo/Slider/SliderDemo5.vue

</CollapsibleCode>

## 禁用状态

通过 `disabled` 属性设置滑动输入条为禁用状态。

<Demo>
<SliderDemo6 />
</Demo>

<CollapsibleCode>

<<< ../demo/Slider/SliderDemo6.vue

</CollapsibleCode>

## 带标签的滑动条

通过 `label` 属性为滑动输入条添加标签。

<Demo>

<Slider label="音量控制" v-model="value" />

</Demo>

<CollapsibleCode>

<template>
  <Slider label="音量控制" v-model="value" />
</template>

</CollapsibleCode>

## 事件监听

滑动输入条支持多种事件，可以监听用户的交互行为。

<Demo>

<Slider v-model="value" @change="handleChange" @drag-start="handleDragStart" @drag-end="handleDragEnd" />

<p>当前值: {{ value }}</p>
<p>拖动状态: {{ dragState }}</p>

</Demo>

<CollapsibleCode>

<template>
  <div>
    <Slider
      v-model="value"
      @change="handleChange"
      @drag-start="handleDragStart"
      @drag-end="handleDragEnd"
    />
    <p>当前值: {{ value }}</p>
    <p>拖动状态: {{ dragState }}</p>
  </div>
</template>

</CollapsibleCode>

## API

### 属性

| 属性名         | 说明                                | 类型            | 默认值   |
| -------------- | ----------------------------------- | --------------- | -------- |
| v-model        | 绑定值                              | Number / String | 0        |
| min            | 最小值                              | Number / String | 0        |
| max            | 最大值                              | Number / String | 100      |
| step           | 步长                                | Number / String | 1        |
| label          | 标签文本                            | String          | ''       |
| disabled       | 是否禁用                            | Boolean         | false    |
| showValue      | 是否显示当前值                      | Boolean         | false    |
| size           | 尺寸，可选值为 small、medium、large | String          | 'medium' |
| width          | 宽度                                | String          | '100%'   |
| height         | 高度                                | String          | 'auto'   |
| validate-event | 是否触发验证事件                    | Boolean         | true     |

### 事件

| 事件名            | 说明           | 回调参数      |
| ----------------- | -------------- | ------------- |
| update:modelValue | 值改变时触发   | value: 当前值 |
| input             | 输入时触发     | value: 当前值 |
| change            | 值改变时触发   | value: 当前值 |
| drag-start        | 开始拖动时触发 | value: 当前值 |
| drag-end          | 结束拖动时触发 | value: 当前值 |
| validate-event    | 验证时触发     | value: 当前值 |

## 兼容性

支持现代浏览器和 IE11+，移动端支持触摸事件。
