# Textarea 文本域

Textarea 组件用于接收用户输入的多行文本信息，支持自动调整高度、字数限制等功能。

<script setup>
import { ref } from 'vue'
import TextareaDemo1 from "../demo/Textarea/TextareaDemo1.vue";
import TextareaDemo2 from "../demo/Textarea/TextareaDemo2.vue";
import TextareaDemo3 from "../demo/Textarea/TextareaDemo3.vue";
import TextareaDemo4 from "../demo/Textarea/TextareaDemo4.vue";
import TextareaDemo5 from "../demo/Textarea/TextareaDemo5.vue";
import TextareaDemo6 from "../demo/Textarea/TextareaDemo6.vue";
import TextareaDemo7 from "../demo/Textarea/TextareaDemo7.vue";
import TextareaDemo8 from "../demo/Textarea/TextareaDemo8.vue";
import TextareaDemo9 from "../demo/Textarea/TextareaDemo9.vue";
import TextareaDemo10 from "../demo/Textarea/TextareaDemo10.vue";
import TextareaDemo11 from "../demo/Textarea/TextareaDemo11.vue";
import TextareaDemo12 from "../demo/Textarea/TextareaDemo12.vue";
</script>

<style>
.textarea-group {
  padding: 36px 36px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  flex-direction: column;
}

.textarea-demo {
  width: 100%;
  max-width: 500px;
}
</style>

## 基础用法

基础的文本域用法。

<Demo>
<TextareaDemo1 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo1.vue

</CollapsibleCode>

## 标签位置

通过 `labelPosition` 属性可以设置标签的位置，可选值为 `top`（默认）、`left`、`center`、`right`。

<Demo>
<TextareaDemo2 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo2.vue

</CollapsibleCode>

## 自动调整高度

通过设置 `autosize` 属性可以让文本域根据内容自动调整高度。

### 基础自动调整

<Demo>
<TextareaDemo3 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo3.vue

</CollapsibleCode>

### rows与autosize结合使用

当同时设置 `rows` 和 `autosize` 时，文本域会以 `rows` 为初始高度，内容超过时自动拓展。

<Demo>
<TextareaDemo4 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo4.vue

</CollapsibleCode>

### 指定最小和最大行数

<Demo>
<TextareaDemo5 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo5.vue

</CollapsibleCode>

## 字数限制

通过设置 `maxlength` 和 `show-word-limit` 属性可以限制输入字数并显示字数统计。

<Demo>
<TextareaDemo6 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo6.vue

</CollapsibleCode>
```

## 禁用状态

<Demo>
<TextareaDemo7 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo7.vue

</CollapsibleCode>

## 只读状态

<Demo>
<TextareaDemo8 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo8.vue

</CollapsibleCode>
```

## 不同尺寸

<Demo>
<TextareaDemo9 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo9.vue

</CollapsibleCode>
```

## 事件监听

<Demo>
<TextareaDemo10 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo10.vue

</CollapsibleCode>

## 防抖输入

<Demo>
<TextareaDemo11 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo11.vue

</CollapsibleCode>

## 组合示例

展示不同属性组合的文本域用法。

<Demo>
<TextareaDemo12 />
</Demo>

<CollapsibleCode>

<<< ../demo/Textarea/TextareaDemo12.vue

</CollapsibleCode>
```

## API

### Props

| 参数            | 说明                     | 类型             | 可选值                              | 默认值   |
| --------------- | ------------------------ | ---------------- | ----------------------------------- | -------- |
| modelValue      | 绑定值                   | string / number  | —                                   | —        |
| label           | 标签文本                 | string           | —                                   | —        |
| labelPosition   | 标签位置                 | string           | top / left / center / right         | top      |
| placeholder     | 输入框占位文本           | string           | —                                   | —        |
| disabled        | 是否禁用                 | boolean          | —                                   | false    |
| readonly        | 是否只读                 | boolean          | —                                   | false    |
| rows            | 输入框行数               | number           | —                                   | 2        |
| autosize        | 是否自动调整高度         | boolean / object | —                                   | false    |
| maxlength       | 最大输入长度             | number           | —                                   | —        |
| minlength       | 最小输入长度             | number           | —                                   | —        |
| show-word-limit | 是否显示字数统计         | boolean          | —                                   | false    |
| resize          | 调整文本域大小的方式     | string           | none / both / horizontal / vertical | vertical |
| autocomplete    | 原生属性，自动补全       | string           | on / off                            | off      |
| name            | 原生属性                 | string           | —                                   | —        |
| readonly        | 原生属性，是否只读       | boolean          | —                                   | false    |
| debounce        | 防抖延迟时间，单位为毫秒 | number           | —                                   | 0        |
| width           | 输入框宽度               | string           | —                                   | 100%     |
| size            | 输入框尺寸               | string           | small / medium / large              | medium   |

### Events

| 事件名            | 说明                 | 回调参数 |
| ----------------- | -------------------- | -------- |
| update:modelValue | 绑定值更新时触发     | value    |
| input             | 输入时触发           | value    |
| focus             | 输入框获得焦点时触发 | event    |
| blur              | 输入框失去焦点时触发 | event    |
| enter             | 按下回车键时触发     | value    |
| mouse-enter       | 鼠标移入时触发       | —        |
| mouse-leave       | 鼠标移出时触发       | —        |
| click             | 点击输入框时触发     | —        |
| debounce-input    | 防抖输入时触发       | value    |

### 方法

| 方法名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| focus  | 使输入框获得焦点 | —    |
| blur   | 使输入框失去焦点 | —    |

### 插槽

| name    | 说明       |
| ------- | ---------- |
| default | 输入框内容 |
