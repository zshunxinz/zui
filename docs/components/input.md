# Input 输入框

## 基础用法

Input 组件用于接收用户输入的文本信息，支持多种输入类型和交互功能。

<script setup>
import { ref } from 'vue'
const value = ref('')
const value2 = ref('')
const email = ref('')
const phone = ref('')
const website = ref('')
const password = ref('')
const search = ref('')
const username = ref('')
const text = ref('')
const pwd = ref('')
const text2 = ref('')

const handleMouseEnter = () => {
  console.log('鼠标移入输入框')
};

const handleMouseLeave = () => {
  console.log('鼠标移出输入框')
};

const handleClick = () => {
  console.log('输入框被点击')
};

const handleEnter = (value) => {
  console.log('按下Enter键，输入值为:', value)
}
</script>
<style>
    .input-group .x-input { margin-bottom: 10px; }
</style>

## 输入类型

Input 组件支持多种输入类型，如文本输入、密码输入、数字输入等。通过设置`type`属性来指定输入框的类型。

## 普通输入框

<Input v-model="value" placeholder="请输入内容" />

```vue
<Input v-model="value" placeholder="请输入内容" />
<script setup>
import { ref } from "vue";
const value = ref("");
</script>
```

## 密码输入框

<Input v-model="password" type="password" placeholder="请输入密码" />
```vue
<Input v-model="password" type="password" placeholder="请输入密码" />
<script setup>
import { ref } from 'vue'
const password = ref('')
</script>

````


## 数字输入框

<Input v-model="number" type="number" placeholder="请输入数字" />

```vue
<Input v-model="number" type="number" placeholder="请输入数字" />
<script setup>
import { ref } from 'vue'
const number = ref('')
</script>
````

## 邮箱输入框

<Input v-model="email" type="email" placeholder="请输入邮箱" />

```vue
<Input v-model="email" type="email" placeholder="请输入邮箱" />
<script setup>
import { ref } from "vue";
const email = ref("");
</script>
```

## 手机号输入框

<Input v-model="phone" type="tel" placeholder="请输入手机号" />

```vue
<Input v-model="phone" type="tel" placeholder="请输入手机号" />
<script setup>
import { ref } from "vue";
const phone = ref("");
</script>
```

## 网址输入框

<Input v-model="website" type="url" placeholder="请输入网址" />

```vue
<Input v-model="website" type="url" placeholder="请输入网址" />
<script setup>
import { ref } from "vue";
const website = ref("");
</script>
```

## 搜索输入框

<Input v-model="search" type="search" placeholder="请输入搜索内容" />

```vue
<Input v-model="search" type="search" placeholder="请输入搜索内容" />
<script setup>
import { ref } from "vue";
const search = ref("");
</script>
```

## 用户名输入框

<Input v-model="username" placeholder="请输入用户名" />

```vue
<Input v-model="username" placeholder="请输入用户名" />
<script setup>
import { ref } from "vue";
const username = ref("");
</script>
```

## 多行文本输入框

<Input v-model="text" type="textarea" placeholder="多行文本输入" />

```vue
<Input v-model="text" type="textarea" placeholder="多行文本输入" />
<script setup>
import { ref } from "vue";
const text = ref("");
</script>
```

## 密码输入框

<Input v-model="pwd" type="password" placeholder="密码输入框" />

```vue
<Input v-model="pwd" type="password" placeholder="密码输入框" />
<script setup>
import { ref } from "vue";
const pwd = ref("");
</script>
```

## 自适应高度文本框

<Input v-model="text2" type="textarea" placeholder="自适应高度文本框" />

```vue
<Input v-model="text2" type="textarea" placeholder="自适应高度文本框" />
<script setup>
import { ref } from "vue";
const text2 = ref("");
</script>
```

## 事件回调

Input 组件支持通过事件回调来处理用户交互，常用事件包括：

- `@click`: 点击输入框触发
- `@change`: 输入内容改变时触发
- `@focus`: 输入框获得焦点时触发
- `@blur`: 输入框失去焦点时触发
- `@keydown`: 按下任意键时触发
- `@keyup`: 松开任意键时触发
- `@enter`: 按下回车键时触发
- `@keydown.enter`: 按下回车键时触发
- `@keyup.enter`: 松开回车键时触发

## 属性说明

| 属性名      | 类型    | 默认值 | 说明                                                    |
| ----------- | ------- | ------ | ------------------------------------------------------- |
| type        | string  | 'text' | 输入框类型，可选值：text, password, textarea, number 等 |
| placeholder | string  | ''     | 占位文本                                                |
| value       | string  | ''     | 输入框的值                                              |
| readonly    | boolean | false  | 是否只读                                                |
| disabled    | boolean | false  | 是否禁用                                                |
