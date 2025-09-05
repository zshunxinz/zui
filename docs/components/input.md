# Input 输入框

输入框组件，用于接收用户输入的文本信息，支持多种输入类型和交互功能。

<script setup>
import { ref } from 'vue'
import InputDemo1 from "../demo/Input/InputDemo1.vue";
import InputDemo2 from "../demo/Input/InputDemo2.vue";
import InputDemo3 from "../demo/Input/InputDemo3.vue";
import InputDemo4 from "../demo/Input/InputDemo4.vue";
import InputDemo5 from "../demo/Input/InputDemo5.vue";
import InputDemo6 from "../demo/Input/InputDemo6.vue";
import InputDemo7 from "../demo/Input/InputDemo7.vue";
import InputDemo8 from "../demo/Input/InputDemo8.vue";
</script>
<style>
.input-group {
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  gap: 36px;
}
.input-demo {
  margin-bottom: 20px;
}
</style>

## 基础用法

输入框有默认、错误、禁用等多种状态，通过设置不同的属性来实现。

### 文本输入

<Demo>
<InputDemo1 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo1.vue

</CollapsibleCode>

## 输入类型

Input 组件支持多种输入类型，如文本输入、密码输入、数字输入等。通过设置`type`属性来指定输入框的类型。

### 文本类型

<Demo>
<InputDemo2 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo2.vue

</CollapsibleCode>

## 状态设置

### 错误状态

通过 `error` 属性可以设置输入框为错误状态。

<Demo>
<InputDemo3 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo3.vue

</CollapsibleCode>

### 禁用状态

通过 `disabled` 属性设置禁用状态。

<Demo>
<InputDemo4 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo4.vue

</CollapsibleCode>

## 标签位置

通过 `labelPosition` 属性可以设置标签的位置，可选值为 `top`（默认）、`left`、`center`、`right`，支持自定义位置。

<Demo>
<InputDemo5 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo5.vue

</CollapsibleCode>

### 防抖输入

通过 `debounce` 属性可以设置输入防抖时间（毫秒），当设置防抖时间后，可以通过 `@debounce-input` 事件获取防抖后的输入值。

<Demo>
<InputDemo6 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo6.vue

</CollapsibleCode>

## 事件回调

Input 组件支持通过事件回调来处理用户交互，常用事件包括：

<Demo>
<InputDemo7 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo7.vue

</CollapsibleCode>

## 组合示例

展示不同属性组合的输入框用法。

<Demo>
<InputDemo8 />
</Demo>

<CollapsibleCode>

<<< ../demo/Input/InputDemo8.vue

</CollapsibleCode>

### 事件列表

| 事件名         | 说明                                             | 回调参数        |
| -------------- | ------------------------------------------------ | --------------- |
| input          | 输入时触发                                       | value: 输入值   |
| debounce-input | 防抖输入时触发，只有设置了 debounce 属性才会触发 | value: 输入值   |
| clear          | 点击清空按钮时触发                               | -               |
| click          | 点击输入框时触发                                 | -               |
| focus          | 聚焦时触发                                       | event: 原生事件 |
| blur           | 失焦时触发                                       | event: 原生事件 |
| enter          | 按下回车键时触发                                 | value: 输入值   |
| mouse-enter    | 鼠标进入输入框时触发                             | -               |
| mouse-leave    | 鼠标离开输入框时触发                             | -               |

## 属性说明

| 属性名         | 类型             | 默认值 | 说明                                                                 |
| -------------- | ---------------- | ------ | -------------------------------------------------------------------- |
| type           | String           | text   | 输入框类型，可选值为 text, password, number, email, tel, url, search |
| modelValue     | String / Number  | ''     | 绑定值                                                               |
| label          | String           | ''     | 标签文本                                                             |
| labelPosition  | String           | top    | 标签位置，可选值为 top, left, center, right                          |
| placeholder    | String           | ''     | 占位符文本                                                           |
| maxlength      | Number           | -      | 最大输入长度                                                         |
| minlength      | Number           | -      | 最小输入长度                                                         |
| showWordLimit  | Boolean          | false  | 是否显示输入字数统计，只在 type 为 text 时有效                       |
| readonly       | Boolean          | false  | 是否只读                                                             |
| disabled       | Boolean          | false  | 是否禁用                                                             |
| error          | Boolean          | false  | 是否为错误状态                                                       |
| clearable      | Boolean          | false  | 是否可清空                                                           |
| showPassword   | Boolean          | false  | 是否显示切换密码可见性的按钮，只在 type 为 password 时有效           |
| size           | String           | -      | 输入框尺寸，可选值为 medium, small, mini                             |
| width          | String           | 300px  | 输入框宽度                                                           |
| height         | String           | 30px   | 输入框高度                                                           |
| debounce       | Number           | 0      | 输入防抖时间（毫秒），设置为 0 时不开启防抖                          |
| prefixIcon     | String           | -      | 前缀图标                                                             |
| suffixIcon     | String           | -      | 后缀图标                                                             |
| rows           | Number           | 2      | 多行文本输入框的行数，只在 type 为 textarea 时有效                   |
| autosize       | Boolean / Object | false  | 是否自动调整多行文本输入框的高度，只在 type 为 textarea 时有效       |
| resize         | String           | -      | 控制是否可以调整多行文本输入框的大小，只在 type 为 textarea 时有效   |
| autocomplete   | String           | off    | 自动完成，可选值为 on, off                                           |
| name           | String           | -      | 原生 name 属性                                                       |
| maxlength      | Number           | -      | 原生 maxlength 属性                                                  |
| minlength      | Number           | -      | 原生 minlength 属性                                                  |
| max            | String / Number  | -      | 原生 max 属性                                                        |
| min            | String / Number  | -      | 原生 min 属性                                                        |
| step           | String / Number  | -      | 原生 step 属性                                                       |
| autofocus      | Boolean          | false  | 原生 autofocus 属性                                                  |
| form           | String           | -      | 原生 form 属性                                                       |
| tabindex       | String           | -      | 原生 tabindex 属性                                                   |
| validate-event | Boolean          | true   | 是否触发表单验证事件                                                 |

```

```
