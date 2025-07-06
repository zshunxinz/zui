# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。
<script setup>
// import Button from '../../src/components/Button.vue'
import { ref } from 'vue';

const isLoading = ref(false);
const loadingHandleClick = () => {
  isLoading.value = true;
  console.log(isLoading.value);
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};

</script>
<style>
  .button-group {
    padding: 20px 0px;
    display:flex;
    flex-wrap:wrap;
    gap:10px;
  }
.custom-btn {
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}
.custom-btn:hover {
  transform: translateY(-2px);
}
</style>
<div class="button-group">
  <Button>默认按钮</Button>
  <Button type="primary">主要按钮</Button>
  <Button type="success">成功按钮</Button>
  <Button type="warning">警告按钮</Button>
  <Button type="danger">危险按钮</Button>
  <Button type="info">信息按钮</Button>
</div>

```vue
<template>
  <div class="button-group">
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="info">信息按钮</Button>
  </div>
</template>

```





## 圆角按钮

可以通过`borderRadius`属性自定义按钮圆角大小：

<div class="button-group">
  <Button :borderRadius="6">默认按钮</Button>
  <Button type="primary" :borderRadius="6">主要按钮</Button>
  <Button type="success" :borderRadius="6">成功按钮</Button>
  <Button type="warning" :borderRadius="6">警告按钮</Button>
  <Button type="danger" :borderRadius="6">危险按钮</Button>
  <Button type="info" :borderRadius="6">信息按钮</Button>
</div>


```vue
<template>
  <div class="button-group">
    <Button>默认按钮</Button>
    <Button type="primary" :borderRadius="6">主要按钮</Button>
    <Button type="success" :borderRadius="6">成功按钮</Button>
    <Button type="warning" :borderRadius="6">警告按钮</Button>
    <Button type="danger" :borderRadius="6">危险按钮</Button>
    <Button type="info" :borderRadius="6">信息按钮</Button>
  </div>
</template>

```


## 尺寸

支持 `small`、`medium`、`large` 三种尺寸。
<div class="button-group">
    <Button size="small">小型按钮</Button>
    <Button size="medium">中型按钮</Button>
    <Button size="large">大型按钮</Button>
</div>

```vue
<template>
  <div class="button-group">
    <Button size="small">小型按钮</Button>
    <Button size="medium">中型按钮</Button>
    <Button size="large">大型按钮</Button>
  </div>
</template>
```

## 禁用状态

通过 `disabled` 属性设置禁用状态。
<div class="button-group">
    <Button disabled>默认禁用</Button>
    <Button type="primary" disabled>主要禁用</Button>
    <Button type="success" disabled>成功禁用</Button>
    <Button type="warning" disabled>警告禁用</Button>
    <Button type="danger" disabled>危险禁用</Button>
    <Button type="info" disabled>信息禁用</Button>
</div>

```vue
<template>
  <div class="button-group">
    <Button disabled>默认禁用</Button>
    <Button type="primary" disabled>主要禁用</Button>
    <Button type="success" disabled>成功禁用</Button>
    <Button type="warning" disabled>警告禁用</Button>
    <Button type="danger" disabled>危险禁用</Button>
    <Button type="info" disabled>信息禁用</Button>
  </div>
</template>
```

## 文本按钮

通过 `text` 属性设置文本按钮。
 <div class="button-group">
  <Button text>默认按钮</Button>
  <Button type="primary" text>主要按钮</Button>
  <Button type="success" text>成功按钮</Button>
  <Button type="warning" text>警告按钮</Button>
  <Button type="danger" text>危险按钮</Button>
  <Button type="info" text>信息按钮</Button>
</div>

```vue
<template>
   <div class="button-group">
    <Button text>默认按钮</Button>
    <Button type="primary" text>主要按钮</Button>
    <Button type="success" text>成功按钮</Button>
    <Button type="warning" text>警告按钮</Button>
    <Button type="danger" text>危险按钮</Button>
    <Button type="info" text>信息按钮</Button>
  </div>
</template>
```

## 边框按钮

通过 `border` 属性设置边框按钮。

 <div class="button-group">
  <Button text border>默认按钮</Button>
  <Button type="primary" text border>主要按钮</Button>
  <Button type="success" text border>成功按钮</Button>
  <Button type="warning" text border>警告按钮</Button>
  <Button type="danger" text border>危险按钮</Button>
  <Button type="info" text border>信息按钮</Button>
</div>

```vue
<template>
  <div class="button-group">
    <Button text border>默认按钮</Button>
    <Button type="primary" text border>主要按钮</Button>
    <Button type="success" text border>成功按钮</Button>
    <Button type="warning" text border>警告按钮</Button>
    <Button type="danger" text border>危险按钮</Button>
    <Button type="info" text border>信息按钮</Button>
  </div>
</template>
```

## 自定义颜色
通过 `color`、`bgColor` 和 `borderColor` 属性可以分别自定义按钮的文本颜色、背景颜色和边框颜色，实现多样化的按钮样式（`borderColor` 需配合 `border=true` 使用）。

<div class="button-group">
  <Button bgColor="#123987" color="#eee123">#eee123</Button>
  <Button bgColor="#FF5733" color="#FFFFFF">珊瑚红背景</Button>
  <Button bgColor="#33FF57" color="#000000">鲜绿背景</Button>
  <Button bgColor="#3357FF" color="#FFFFFF">宝石蓝背景</Button>
  <Button bgColor="#F333FF" color="#FFFFFF">紫色背景</Button>
  <Button bgColor="#33FFF3" color="#000000">青色背景</Button>
  <Button border :borderColor="'#FF5733'" bgColor="#f5f5f5" color="#333">自定义边框颜色</Button>
</div>

```vue
<template>
  <div class="button-group">
    <Button bgColor="#123987" color="#eee123">#eee123</Button>
    <Button bgColor="#FF5733" color="#FFFFFF">珊瑚红背景</Button>
    <Button bgColor="#33FF57" color="#000000">鲜绿背景</Button>
    <Button bgColor="#3357FF" color="#FFFFFF">宝石蓝背景</Button>
    <Button bgColor="#F333FF" color="#FFFFFF">紫色背景</Button>
    <Button bgColor="#33FFF3" color="#000000">青色背景</Button>
    <Button border :borderColor="'#FF5733'" bgColor="#f5f5f5" color="#333">自定义边框颜色</Button>
  </div>
</template>
```


## 自定义样式
通过原生 `class` 和 `style` 属性可以添加额外的自定义样式，覆盖或扩展按钮默认样式：
<div class="button-group">
  <Button class="custom-btn" style="font-weight: bold; text-decoration: underline;">带自定义样式</Button>
  <Button class="custom-btn" style="box-shadow: 0 4px 8px rgba(0,0,0,0.2);">带阴影效果</Button>
</div>



```vue
<template>
  <!-- 使用class添加自定义类 -->
  <Button class="custom-btn" style="font-weight: bold;">自定义样式按钮</Button>

  <!-- 直接使用style添加内联样式 -->
  <Button class="custom-btn" style="box-shadow: 0 4px 8px rgba(0,0,0,0.2); border-radius: 8px;">带阴影按钮</Button>
</template>

<style scoped>
/* 自定义类样式 */
.custom-btn {
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.custom-btn:hover {
  transform: translateY(-2px);
}
</style>
```







## 加载状态

按钮支持点击自动进入加载状态（2秒后自动退出）和外部控制加载状态两种模式：

### 加载状态
加载状态
<div class="button-group">
  <Button type="primary" loading>加载中</Button>
</div>

```vue
<template>
  <Button type="primary" loading>加载中</Button>
</template>

<script setup>
function handleAutoLoading() {
  // 模拟异步操作
}
</script>
```

### 外部控制加载状态

通过 `v-model:loading` 可以双向绑定控制按钮的加载状态：

<div class="button-group">
  <Button type="primary" @click="loadingHandleClick" :loading="isLoading"> 外部控制加载

  </Button>
</div>



```vue
<Button v-model:loading="isLoading" @click="handleClick">
  外部控制加载
</Button>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);
const loadingHandleClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```

或者使用 `loading` 属性和 `update:loading` 事件手动控制：

```vue
<Button :loading="isLoading" @update:loading="val => isLoading = val" @click="handleClick">
  手动控制加载
</Button>
```





## 加载状态文本内容
loadData插槽控制加载中的内容

<div class="button-group">
  <Button type="primary" @click="loadingHandleClick":loading="isLoading"> 
  外部控制加载
    <template #loadData>
      加载中
    </template>
  </Button>
</div>



```vue
<Button type="primary" @click="loadingHandleClick" :loading="isLoading"> 外部控制加载
  <template #loadData>
    加载中
  </template>
</Button>

<script setup>
import { ref } from 'vue';

const isLoading = ref(false);
const loadingHandleClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```


## 事件

支持 `click`和`hover` 事件。

<Button @click="handleClick">点击触发事件</Button>
<Button @hover="handleHover">悬停触发事件</Button>

<script>
const handleClick = () => {
  alert('按钮被点击了')
}
const handleHover = () => {
  alert('鼠标悬停在按钮上')
}
</script>

```vue
<template>
  <Button @click="handleClick">点击触发事件</Button>
  <Button @hover="handleHover">悬停触发事件</Button>
</template>

<script setup>
const handleClick = () => {
  alert('按钮被点击了')
}
const handleHover = () => {
  alert('鼠标悬停在按钮上')
}
</script>
```


## 组合示例

展示不同属性组合的按钮用法。

 <div class="button-group">
    <Button type="primary" size="large">主要按钮</Button>
    <Button type="primary" shadow>带阴影主要按钮</Button>
    <Button type="success" border>成功边框按钮</Button>
    <Button type="warning" text size="small">警告文本按钮</Button>
    <Button type="danger" disabled>禁用危险按钮</Button>
    <Button type="info" border text>信息文本边框按钮</Button>
  </div>

```vue
<template>
  <div class="button-group">
    <Button type="primary" size="large">主要按钮</Button>
    <Button type="primary" shadow>带阴影主要按钮</Button>
    <Button type="success" border>成功边框按钮</Button>
    <Button type="warning" text size="small">警告文本按钮</Button>
    <Button type="danger" disabled>禁用危险按钮</Button>
    <Button type="info" border text>信息文本边框按钮</Button>
  </div>
</template>

```


## 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| type | 按钮类型 | string | primary/success/warning/danger/info | primary |
| size | 按钮尺寸 | string | small/medium/large | medium |
| disabled | 是否禁用 | boolean | true/false | false |
| text | 是否为文本按钮 | boolean | true/false | false |
| border | 是否为边框按钮 | boolean | true/false | false |
| shadow | 是否显示阴影效果 | boolean | true/false | false |
| borderRadius | 按钮圆角大小(px) | Number | — | 6 |
| bgColor | 自定义按钮背景颜色 | String | — | undefined |
| color | 自定义按钮文本颜色 | String | — | undefined |
| borderColor | 自定义按钮边框颜色（需配合border=true使用） | String | — | undefined |
| class | 自定义类名 | String | — | undefined |
| style | 自定义内联样式 | Object | — | undefined |
| loading | 控制按钮加载状态，外部控制优先 | Boolean | true/false | false |

## 插槽

| 插槽名称 | 说明 |
|---------|------|
| default | 按钮的默认内容 |
| loadData | 加载状态时的自定义内容，仅在loading为true时显示，会替换默认的加载指示器和文本 |

## 事件

| 事件名称 | 说明 | 回调参数 |
|---------|------|---------|
| click | 点击按钮时触发 | (event: MouseEvent) |
| hover | 鼠标移入按钮时触发 | — |

