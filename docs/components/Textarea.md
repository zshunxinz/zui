# Textarea 文本域

Textarea 组件用于接收用户输入的多行文本信息，支持自动调整高度、字数限制等功能。

<script setup>
import { ref } from 'vue'
const value = ref('')
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const autosizeValue = ref('')
const limitValue = ref('')
const rowsAutosizeValue = ref('')
const debouncedValue = ref('')

const handleMouseEnter = () => {
  console.log('鼠标移入文本域')
};

const handleMouseLeave = () => {
  console.log('鼠标移出文本域')
};

const handleClick = () => {
  console.log('文本域被点击')
};

const handleEnter = (value) => {
  console.log('按下Enter键，输入值为:', value)
}

const handleDebounceInput = (val) => {
  debouncedValue.value = val;
};

const handleInput = (val) => {
  console.log("输入事件", val);
};

const handleFocus = (e) => {
  console.log("聚焦事件", e);
};

const handleBlur = (e) => {
  console.log("失焦事件", e);
};
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
  <div class="textarea-group">
    <Textarea v-model="value" placeholder="请输入内容" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="value" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

</CollapsibleCode>

## 标签位置

通过 `labelPosition` 属性可以设置标签的位置，可选值为 `top`（默认）、`left`、`center`、`right`。

<Demo>
  <div class="textarea-group">
    <Textarea v-model="value1" label="顶部标签" placeholder="请输入内容" class="textarea-demo" />
    <Textarea v-model="value2" label="左侧标签" labelPosition="left" placeholder="请输入内容" class="textarea-demo" />
    <Textarea v-model="value3" label="居中标签" labelPosition="center" placeholder="请输入内容" class="textarea-demo" />
    <Textarea v-model="value4" label="右侧标签" labelPosition="right" placeholder="请输入内容" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="value1" label="顶部标签" placeholder="请输入内容" />
    <Textarea v-model="value2" label="左侧标签" labelPosition="left" placeholder="请输入内容" />
    <Textarea v-model="value3" label="居中标签" labelPosition="center" placeholder="请输入内容" />
    <Textarea v-model="value4" label="右侧标签" labelPosition="right" placeholder="请输入内容" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
</script>
```

</CollapsibleCode>

## 自动调整高度

通过设置 `autosize` 属性可以让文本域根据内容自动调整高度。

### 基础自动调整

<Demo>
  <div class="textarea-group">
    <Textarea v-model="autosizeValue" autosize placeholder="输入内容会自动调整高度" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="autosizeValue" autosize placeholder="输入内容会自动调整高度" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const autosizeValue = ref('')
</script>
```

</CollapsibleCode>

### rows与autosize结合使用

当同时设置 `rows` 和 `autosize` 时，文本域会以 `rows` 为初始高度，内容超过时自动拓展。

<Demo>
  <div class="textarea-group">
    <Textarea v-model="rowsAutosizeValue" :rows="3" autosize placeholder="初始3行，可自动拓展" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="rowsAutosizeValue" :rows="3" autosize placeholder="初始3行，可自动拓展" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const rowsAutosizeValue = ref('')
</script>
```

</CollapsibleCode>

### 指定最小和最大行数

<Demo>
  <div class="textarea-group">
    <Textarea v-model="autosizeValue" :autosize="{ minRows: 3, maxRows: 6 }" placeholder="最小3行，最大6行" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea
      v-model="autosizeValue"
      :autosize="{ minRows: 3, maxRows: 6 }"
      placeholder="最小3行，最大6行"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const autosizeValue = ref('')
</script>
```

</CollapsibleCode>

## 字数限制

通过设置 `maxlength` 和 `show-word-limit` 属性可以限制输入字数并显示字数统计。

<Demo>
  <div class="textarea-group">
    <Textarea v-model="limitValue" maxlength="100" show-word-limit placeholder="最多输入100个字符" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea
      v-model="limitValue"
      maxlength="100"
      show-word-limit
      placeholder="最多输入100个字符"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const limitValue = ref('')
</script>
```

</CollapsibleCode>
```

## 禁用状态

<Demo>
  <div class="textarea-group">
    <Textarea v-model="value" disabled placeholder="禁用状态" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="value" disabled placeholder="禁用状态" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

</CollapsibleCode>

## 只读状态

<Demo>
  <div class="textarea-group">
    <Textarea v-model="value" readonly placeholder="只读状态" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="value" readonly placeholder="只读状态" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

</CollapsibleCode>
```

## 不同尺寸

<Demo>
  <div class="textarea-group">
    <Textarea v-model="value" size="small" placeholder="小尺寸" class="textarea-demo" />
    <Textarea v-model="value" size="medium" placeholder="默认尺寸" class="textarea-demo" />
    <Textarea v-model="value" size="large" placeholder="大尺寸" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="value" size="small" placeholder="小尺寸" />
    <Textarea v-model="value" size="medium" placeholder="默认尺寸" />
    <Textarea v-model="value" size="large" placeholder="大尺寸" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

</CollapsibleCode>
```

## 事件监听

<Demo>
  <div class="textarea-group">
    <Textarea
      v-model="value"
      placeholder="请输入内容查看控制台输出"
      @mouse-enter="handleMouseEnter"
      @mouse-leave="handleMouseLeave"
      @click="handleClick"
      @enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      class="textarea-demo"
    />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea
      v-model="value"
      placeholder="请输入内容查看控制台输出"
      @mouse-enter="handleMouseEnter"
      @mouse-leave="handleMouseLeave"
      @click="handleClick"
      @enter="handleEnter"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')

const handleMouseEnter = () => {
  console.log("鼠标移入文本域");
};

const handleMouseLeave = () => {
  console.log("鼠标移出文本域");
};

const handleClick = () => {
  console.log("文本域被点击");
};

const handleEnter = (value) => {
  console.log("按下Enter键，输入值为:", value);
};

const handleFocus = (e) => {
  console.log("聚焦事件", e);
};

const handleBlur = (e) => {
  console.log("失焦事件", e);
};

const handleInput = (val) => {
  console.log("输入事件", val);
};
</script>
```

</CollapsibleCode>

## 防抖输入

<Demo>
  <div class="textarea-group">
    <Textarea v-model="debouncedValue" :debounce="1000" placeholder="1000ms防抖输入，查看控制台输出" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea
      v-model="debouncedValue"
      :debounce="1000"
      placeholder="1000ms防抖输入"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const debouncedValue = ref('')
</script>
```

</CollapsibleCode>

## 组合示例

展示不同属性组合的文本域用法。

<Demo>
  <div class="textarea-group">
    <Textarea v-model="value" size="large" label="大尺寸文本域" placeholder="请输入内容" class="textarea-demo" />
    <Textarea v-model="value" disabled label="禁用文本域" placeholder="此文本域已禁用" class="textarea-demo" />
    <Textarea v-model="limitValue" maxlength="50" show-word-limit label="带字数限制" placeholder="最多输入50个字符" class="textarea-demo" />
    <Textarea v-model="autosizeValue" :autosize="{ minRows: 2, maxRows: 4 }" label="自动调整高度" placeholder="最小2行，最大4行" class="textarea-demo" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="textarea-group">
    <Textarea v-model="value" size="large" label="大尺寸文本域" placeholder="请输入内容" />
    <Textarea v-model="value" disabled label="禁用文本域" placeholder="此文本域已禁用" />
    <Textarea v-model="limitValue" maxlength="50" show-word-limit label="带字数限制" placeholder="最多输入50个字符" />
    <Textarea v-model="autosizeValue" :autosize="{ minRows: 2, maxRows: 4 }" label="自动调整高度" placeholder="最小2行，最大4行" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
const limitValue = ref('')
const autosizeValue = ref('')
</script>
```

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
