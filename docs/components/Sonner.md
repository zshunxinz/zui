# Sonner 消息提示

Sonner 组件是一个轻量级的消息提示组件，支持多种类型的提示（成功、错误、警告、信息），可以自定义位置、内容和样式，适用于各种交互反馈场景。

## 基础用法

Sonner 组件提供了多种使用方式，包括组件实例方法调用、全局 `$toast` 方法调用、组合式 API `useToast()` 以及直接导入的全局 `toast` 对象。

<script setup>
import SonnerDemo1 from "/demo/Sonner/SonnerDemo1.vue";
import SonnerDemo2 from "/demo/Sonner/SonnerDemo2.vue";
import SonnerDemo3 from "/demo/Sonner/SonnerDemo3.vue";
import SonnerDemo4 from "/demo/Sonner/SonnerDemo4.vue";
</script>

<Demo>
<SonnerDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Sonner/SonnerDemo1.vue

</CollapsibleCode>

## 不同类型的消息

Sonner 支持四种预设的消息类型：成功(success)、错误(error)、警告(warning)和信息(info)，每种类型都有对应的图标和颜色。

<Demo>
<SonnerDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Sonner/SonnerDemo2.vue

</CollapsibleCode>

## 自定义位置

可以通过设置 `position` 属性来改变消息提示的位置，支持多种位置选项。

<Demo>
<SonnerDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Sonner/SonnerDemo3.vue

</CollapsibleCode>

## 简单调用方式

<Demo>
<SonnerDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Sonner/SonnerDemo4.vue

</CollapsibleCode>

## 自定义内容

除了基本的标题和描述，Sonner 还支持通过插槽自定义内容，以及设置各种样式选项。

## Sonner Props

| 属性名         | 类型                     | 默认值        | 说明                                                                                                                      |
| -------------- | ------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------- |
| position       | `string`                 | `'top-right'` | 消息提示的位置，可选值：`'top-right'`、`'top-left'`、`'bottom-right'`、`'bottom-left'`、`'top-center'`、`'bottom-center'` |
| rtl            | `boolean`                | `false`       | 是否使用 RTL 布局                                                                                                         |
| limit          | `number`                 | `3`           | 同时显示的最大消息数量                                                                                                    |
| offset         | `number`                 | `16`          | 消息提示框与屏幕边缘的偏移量                                                                                              |
| pauseOnHover   | `boolean`                | `true`        | 鼠标悬停时是否暂停自动关闭计时器                                                                                          |
| containerStyle | `Record<string, string>` | `{}`          | 容器的自定义样式                                                                                                          |

## Toast 选项

使用 `$toast.addToast()` 方法时，可以传递以下选项：

| 选项名      | 类型                     | 默认值      | 说明                                                                         |
| ----------- | ------------------------ | ----------- | ---------------------------------------------------------------------------- |
| type        | `string`                 | `'default'` | 消息类型，可选值：`'default'`、`'success'`、`'error'`、`'warning'`、`'info'` |
| title       | `string`                 | -           | 消息标题                                                                     |
| description | `string`                 | -           | 消息描述                                                                     |
| duration    | `number`                 | `5000`      | 消息显示的持续时间（毫秒），设置为 `Infinity` 可禁用自动关闭                 |
| dismissible | `boolean`                | `true`      | 是否显示关闭按钮                                                             |
| icon        | `string`                 | -           | 自定义图标名称                                                               |
| style       | `Record<string, string>` | `{}`        | 自定义样式                                                                   |
| size        | `string`                 | `'default'` | 消息大小，可选值：`'small'`、`'default'`、`'large'`                          |
| rounded     | `boolean`                | `false`     | 是否使用圆角样式                                                             |
| shadow      | `boolean`                | `false`     | 是否使用阴影效果                                                             |
| slot        | `string`                 | -           | 自定义内容插槽名称                                                           |

## 方法

Sonner 组件和 `$toast` 提供以下方法：

| 方法名       | 参数                                  | 返回值   | 说明                            |
| ------------ | ------------------------------------- | -------- | ------------------------------- |
| addToast     | `options: Omit<Toast, 'id'>`          | `number` | 添加一个自定义消息，返回消息 ID |
| dismissToast | `id: number`                          | `void`   | 关闭指定 ID 的消息              |
| dismissAll   | -                                     | `void`   | 关闭所有消息                    |
| updateToast  | `id: number, updates: Partial<Toast>` | `void`   | 更新指定 ID 的消息              |
| success      | `message: string, title?: string`     | `number` | 显示成功消息                    |
| error        | `message: string, title?: string`     | `number` | 显示错误消息                    |
| warning      | `message: string, title?: string`     | `number` | 显示警告消息                    |
| info         | `message: string, title?: string`     | `number` | 显示信息消息                    |

## 安装和配置

在应用的入口文件中，通常是 `main.js` 或 `main.ts`，你需要导入并使用 Sonner 组件：

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import Zui from './install';

const app = createApp(App);
app.use(Zui);
app.mount('#app');
```

然后在 `App.vue` 中添加 Sonner 组件：

```vue
<template>
  <div class="app">
    <Sonner />
    <!-- 其他组件 -->
  </div>
</template>
```

## 访问方式

在 Vue 组件中，你可以通过以下方式访问 Sonner：

1. 通过 `this.$toast`（在选项 API 中）
2. 通过 `inject('toast')`（在组合 API 中）
3. 通过直接导入的 `useToast()` 组合式 API
4. 通过直接导入的全局 `toast` 对象

### 使用组合式 API

```vue
<template>
  <Button @click="showSuccessToast">显示成功消息</Button>
</template>

<script setup>
import { useToast } from '../src/components/Sonner';

const toast = useToast();

const showSuccessToast = () => {
  toast.success('操作成功', '提示');
};
</script>
```

### 使用全局 toast 对象

```vue
<template>
  <Button @click="showErrorToast">显示错误消息</Button>
</template>

<script setup>
import { toast } from '../src/components/Sonner';

const showErrorToast = () => {
  toast.error('操作失败', '错误');
};
</script>
```

## 响应式设计

Sonner 组件会根据屏幕宽度自动调整位置和大小，在移动设备上会自动适应屏幕宽度。
