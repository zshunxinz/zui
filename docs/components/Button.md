# Button 按钮

常用的操作按钮。

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
    padding: 36px 36px;
    display:flex;
    /* justify-content: center; */
    align-items: center;
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

## 基础用法

按钮有默认、背景、边框、文字、轮廓五种样式，分别对应`default`、`bg`、`border`、`text`、`outline`五个属性，可以彼此组合使用。
<Demo>

  <div class="button-group">
    <Button>默认按钮</Button>
    <Button bg>次要按钮</Button>
    <Button border>边框按钮</Button>
    <Button bg border>背景边框</Button>
    <Button outline>轮廓按钮</Button>
    <Button text>文字按钮</Button>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="button-group">
    <Button>默认按钮</Button>
    <Button bg>次要按钮</Button>
    <Button border>边框按钮</Button>
    <Button bg border>背景边框</Button>
    <Button outline>轮廓按钮</Button>
    <Button text>文字按钮</Button>
  </div>
</template>
```

</CollapsibleCode>

## 按钮类型

按钮有默认、主要、成功、警告、危险、信息六种类型，分别对应`default`、`primary`、`success`、`warning`、`danger`、`info`六个属性。

<Demo>
  <div class="button-group">
    <Button>默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <Button type="info">信息按钮</Button>
  </div>
</Demo>

<CollapsibleCode  >

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

</CollapsibleCode>

## 圆角按钮

可以通过`borderRadius`属性自定义按钮圆角大小：
<Demo>

<div class="button-group">
  <Button :borderRadius="1">默认按钮</Button>
  <Button type="primary" :borderRadius="2">主要按钮</Button>
  <Button type="success" :borderRadius="4">成功按钮</Button>
  <Button type="warning" :borderRadius="8">警告按钮</Button>
  <Button type="danger" :borderRadius="12">危险按钮</Button>
  <Button type="info" :borderRadius="16">信息按钮</Button>
</div>
</Demo>

<CollapsibleCode  >

```vue
<template>
  <div class="button-group">
    <Button :borderRadius="1">默认按钮</Button>
    <Button type="primary" :borderRadius="2">主要按钮</Button>
    <Button type="success" :borderRadius="4">成功按钮</Button>
    <Button type="warning" :borderRadius="8">警告按钮</Button>
    <Button type="danger" :borderRadius="12">危险按钮</Button>
    <Button type="info" :borderRadius="16">信息按钮</Button>
  </div>
</template>
```

</CollapsibleCode>

## 浅色背景按钮

通过 `borderRadius` 属性设置圆角大小，并与 `bg`、`border`、`outline` 属性结合使用,

<Demo>
<div class="button-group">
  <Button bg border  :borderRadius="2">默认按钮</Button>
  <Button type="primary" bg border :borderRadius="4">主要按钮</Button>
  <Button type="success" bg border :borderRadius="6">成功按钮</Button>
  <Button type="warning" bg border :borderRadius="8">警告按钮</Button>
  <Button type="danger" bg border :borderRadius="10">危险按钮</Button>
  <Button type="info" bg border :borderRadius="12">信息按钮</Button>
</div>
<div class="button-group">
  <Button bg  :borderRadius="2" outline>默认按钮</Button>
  <Button type="primary" bg  :borderRadius="4" outline>主要按钮</Button>
  <Button type="success" bg  :borderRadius="6" outline>成功按钮</Button>
  <Button type="warning" bg  :borderRadius="8" outline>警告按钮</Button>
  <Button type="danger" bg  :borderRadius="10" outline>危险按钮</Button>
  <Button type="info" bg  :borderRadius="12" outline>信息按钮</Button>
</div>
</Demo>

<CollapsibleCode  >

```vue
<template>
  <div class="button-group">
    <Button bg border :borderRadius="2">默认按钮</Button>
    <Button type="primary" bg border :borderRadius="4">主要按钮</Button>
    <Button type="success" bg border :borderRadius="6">成功按钮</Button>
    <Button type="warning" bg border :borderRadius="8">警告按钮</Button>
    <Button type="danger" bg border :borderRadius="10">危险按钮</Button>
    <Button type="info" bg border :borderRadius="12">信息按钮</Button>
  </div>
  <div class="button-group">
    <Button bg :borderRadius="2" outline>默认按钮</Button>
    <Button type="primary" bg :borderRadius="4" outline>主要按钮</Button>
    <Button type="success" bg :borderRadius="6" outline>成功按钮</Button>
    <Button type="warning" bg :borderRadius="8" outline>警告按钮</Button>
    <Button type="danger" bg :borderRadius="10" outline>危险按钮</Button>
    <Button type="info" bg :borderRadius="12" outline>信息按钮</Button>
  </div>
</template>
```

</CollapsibleCode>

## 尺寸

支持 `small`、`medium`、`large` 三种尺寸。

<Demo>
<div class="button-group">
    <Button size="small">小型按钮</Button>
    <Button size="medium">中型按钮</Button>
    <Button size="large">大型按钮</Button>
</div>
</Demo>

<CollapsibleCode  >

```vue
<template>
  <div class="button-group">
    <Button size="small">小型按钮</Button>
    <Button size="medium">中型按钮</Button>
    <Button size="large">大型按钮</Button>
  </div>
</template>
```

</CollapsibleCode>

## 禁用状态

通过 `disabled` 属性设置禁用状态。

<Demo>
<div class="button-group">
    <Button disabled>默认禁用</Button>
    <Button type="primary" disabled>主要禁用</Button>
    <Button type="success" disabled>成功禁用</Button>
    <Button type="warning" disabled>警告禁用</Button>
    <Button type="danger" disabled>危险禁用</Button>
    <Button type="info" disabled>信息禁用</Button>
</div>

</Demo>

<CollapsibleCode  >

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

</CollapsibleCode>

通过 `disabled` 和 `bg` 属性设置浅色背景禁用状态。

<Demo>
<div class="button-group">
    <Button disabled bg>默认禁用</Button>
    <Button type="primary" disabled bg>主要禁用</Button>
    <Button type="success" disabled bg>成功禁用</Button>
    <Button type="warning" disabled bg>警告禁用</Button>
    <Button type="danger" disabled bg>危险禁用</Button>
    <Button type="info" disabled bg>信息禁用</Button>
</div>

</Demo>

<CollapsibleCode  >

```vue
<template>
  <div class="button-group">
    <Button disabled bg>默认禁用</Button>
    <Button type="primary" disabled bg>主要禁用</Button>
    <Button type="success" disabled bg>成功禁用</Button>
    <Button type="warning" disabled bg>警告禁用</Button>
    <Button type="danger" disabled bg>危险禁用</Button>
    <Button type="info" disabled bg>信息禁用</Button>
  </div>
</template>
```

</CollapsibleCode>

## 文本按钮

通过 `text` 属性设置文本按钮。

<Demo>
<div class="button-group">
  <Button text>默认按钮</Button>
  <Button type="primary" text>主要按钮</Button>
  <Button type="success" text>成功按钮</Button>
  <Button type="warning" text>警告按钮</Button>
  <Button type="danger" text>危险按钮</Button>
  <Button type="info" text>信息按钮</Button>
</div>

</Demo>

<CollapsibleCode  >

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

</CollapsibleCode>

## 边框按钮

通过 `border` 属性设置边框按钮。

<Demo>
<div class="button-group">
  <Button text border>默认按钮</Button>
  <Button type="primary" text border>主要按钮</Button>
  <Button type="success" text border>成功按钮</Button>
  <Button type="warning" text border>警告按钮</Button>
  <Button type="danger" text border>危险按钮</Button>
  <Button type="info" text border>信息按钮</Button>
</div>

</Demo>

<CollapsibleCode  >

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

</CollapsibleCode>

## 自定义颜色

通过 `color`、`bgColor` 和 `borderColor` 属性可以分别自定义按钮的文本颜色、背景颜色和边框颜色，实现多样化的按钮样式（`borderColor` 需配合 `border=true` 使用）。

<Demo>

<div class="button-group">
  <Button bgColor="#123987" color="#eee123">#eee123</Button>
  <Button bgColor="#FF5733" color="#FFFFFF">珊瑚红背景</Button>
  <Button bgColor="#33FF57" color="#000000">鲜绿背景</Button>
  <Button bgColor="#3357FF" color="#FFFFFF">宝石蓝背景</Button>
  <Button bgColor="#F333FF" color="#FFFFFF">紫色背景</Button>
  <Button bgColor="#33FFF3" color="#000000">青色背景</Button>
  <Button border :borderColor="'#FF5733'" bgColor="#f5f5f5" color="#333">自定义边框颜色</Button>
</div>

</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="button-group">
    <Button bgColor="#123987" color="#eee123">#eee123</Button>
    <Button bgColor="#FF5733" color="#FFFFFF">珊瑚红背景</Button>
    <Button bgColor="#33FF57" color="#000000">鲜绿背景</Button>
    <Button bgColor="#3357FF" color="#FFFFFF">宝石蓝背景</Button>
    <Button bgColor="#F333FF" color="#FFFFFF">紫色背景</Button>
    <Button bgColor="#33FFF3" color="#000000">青色背景</Button>
    <Button border :borderColor="'#FF5733'" bgColor="#f5f5f5" color="#333">
      自定义边框颜色
    </Button>
  </div>
</template>
```

</CollapsibleCode>

## 自定义样式

通过原生 `class` 和 `style` 属性可以添加额外的自定义样式，覆盖或扩展按钮默认样式：

<Demo>
  <div class="button-group">
    <Button class="custom-btn" style="font-weight: bold; text-decoration: underline;">带自定义样式</Button>
    <Button class="custom-btn" style="box-shadow: 0 4px 8px rgba(0,0,0,0.2);">带阴影效果</Button>
  </div>
</Demo>

<CollapsibleCode  >

```vue
<template>
  <!-- 使用class添加自定义类 -->
  <Button class="custom-btn" style="font-weight: bold;">自定义样式按钮</Button>

  <!-- 直接使用style添加内联样式 -->
  <Button
    class="custom-btn"
    style="box-shadow: 0 4px 8px rgba(0,0,0,0.2); border-radius: 8px;"
    >带阴影按钮</Button
  >
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

</CollapsibleCode>

## 加载状态

按钮支持点击自动进入加载状态（2 秒后自动退出）和外部控制加载状态两种模式：

### 加载状态

加载状态

<Demo>
<div class="button-group">
  <Button type="primary" loading>加载中</Button>
</div>
</Demo>

<CollapsibleCode  >

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

</CollapsibleCode>

### 外部控制加载状态

通过 `v-model:loading` 可以双向绑定控制按钮的加载状态：

<Demo>

<div class="button-group">
  <Button type="primary" @click="loadingHandleClick" :loading="isLoading"> 外部控制加载</Button>
</div>

</Demo>

<CollapsibleCode  >

```vue
<Button v-model:loading="isLoading" @click="handleClick">
  外部控制加载
</Button>

<script setup>
import { ref } from "vue";

const isLoading = ref(false);
const loadingHandleClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```

</CollapsibleCode>

或者使用 `loading` 属性和 `update:loading` 事件手动控制：

<Demo>
<div class="button-group">
  <Button
    :loading="isLoading"
    @update:loading="(val) => (isLoading = val)"
    @click="handleClick"
  >
    手动控制加载
  </Button>
</div>
</Demo>

<CollapsibleCode  >

```vue
<Button
  :loading="isLoading"
  @update:loading="(val) => (isLoading = val)"
  @click="handleClick"
>
  手动控制加载
</Button>
```

</CollapsibleCode>

## 加载状态文本内容

loadData 插槽控制加载中的内容

<Demo>
<div class="button-group">
  <Button type="primary" @click="loadingHandleClick":loading="isLoading"> 
  外部控制加载
    <template #loadData>
      加载中
    </template>
  </Button>
</div>
</Demo>

<CollapsibleCode  >

```vue
<Button
  type="primary"
  @click="loadingHandleClick"
  :loading="isLoading"
> 外部控制加载
  <template #loadData>
    加载中
  </template>
</Button>

<script setup>
import { ref } from "vue";

const isLoading = ref(false);
const loadingHandleClick = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
};
</script>
```

</CollapsibleCode>

## 事件

支持 `click`和`hover` 事件。
<Demo>
<Button @click="handleClick">点击触发事件</Button>
<Button @hover="handleHover">悬停触发事件</Button>
</Demo>

<script>
const handleClick = () => {
  alert('按钮被点击了')
}
const handleHover = () => {
  alert('鼠标悬停在按钮上')
}
</script>

<CollapsibleCode>

```vue
<template>
  <Button @click="handleClick">点击触发事件</Button>
  <Button @hover="handleHover">悬停触发事件</Button>
</template>

<script setup>
const handleClick = () => {
  alert("按钮被点击了");
};
const handleHover = () => {
  alert("鼠标悬停在按钮上");
};
</script>
```

</CollapsibleCode>

## 组合示例

展示不同属性组合的按钮用法。
<Demo>

<div class="button-group">
    <Button color="rgb(100,200,255)" bgColor="rgb(10,0,50)">主要按钮</Button>
    <Button color="rgb(100,200,255)" bgColor="rgb(10,0,50)"  shadow>带阴影主要按钮</Button>
    <Button color="rgb(100,200,255)" bg>主要按钮</Button>
    <Button color="rgb(100,200,255)" border borderColor="rgb(100,200,255)">主要按钮</Button>
    <Button color="rgb(100,200,255)" outline>主要按钮</Button>
    <Button color="rgb(100,200,255)" outline bg>主要按钮</Button>
    <Button color="rgb(100,200,255)" text bg>主要按钮</Button>
    <Button color="rgb(100,200,255)" text >主要按钮</Button>
    <Button color="rgb(100,200,255)" text outline>主要按钮</Button>
    <Button color="rgb(100,200,255)" text shadow>主要按钮</Button>
    <Button color="rgb(100,200,255)" bg shadow>主要按钮</Button>
  </div>
 <div class="button-group">
    <Button type="primary">主要按钮</Button>
    <Button type="primary" shadow>带阴影主要按钮</Button>
    <Button type="primary" bg>主要按钮</Button>
    <Button type="primary" border>主要按钮</Button>
    <Button type="primary" outline>主要按钮</Button>
    <Button type="primary" outline bg>主要按钮</Button>
    <Button type="primary" text bg>主要按钮</Button>
    <Button type="primary" text >主要按钮</Button>
    <Button type="primary" text outline>主要按钮</Button>
    <Button type="primary" text shadow>主要按钮</Button>
    <Button type="primary" bg shadow>主要按钮</Button>
  </div>
   <div class="button-group">
    <Button type="success">主要按钮</Button>
    <Button type="success" shadow>带阴影主要按钮</Button>
    <Button type="success" bg>主要按钮</Button>
    <Button type="success" border>主要按钮</Button>
    <Button type="success" outline>主要按钮</Button>
    <Button type="success" outline bg>主要按钮</Button>
    <Button type="success" text bg>主要按钮</Button>
    <Button type="success" text >主要按钮</Button>
    <Button type="success" text outline>主要按钮</Button>
    <Button type="success" text shadow>主要按钮</Button>
    <Button type="success" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="warning">主要按钮</Button>
    <Button type="warning" shadow>带阴影主要按钮</Button>
    <Button type="warning" bg>主要按钮</Button>
    <Button type="warning" border>主要按钮</Button>
    <Button type="warning" outline>主要按钮</Button>
    <Button type="warning" outline bg>主要按钮</Button>
    <Button type="warning" text bg>主要按钮</Button>
    <Button type="warning" text >主要按钮</Button>
    <Button type="warning" text outline>主要按钮</Button>
    <Button type="warning" text shadow>主要按钮</Button>
    <Button type="warning" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="danger">主要按钮</Button>
    <Button type="danger" shadow>带阴影主要按钮</Button>
    <Button type="danger" bg>主要按钮</Button>
    <Button type="danger" border>主要按钮</Button>
    <Button type="danger" outline>主要按钮</Button>
    <Button type="danger" outline bg>主要按钮</Button>
    <Button type="danger" text bg>主要按钮</Button>
    <Button type="danger" text >主要按钮</Button>
    <Button type="danger" text outline>主要按钮</Button>
    <Button type="danger" text shadow>主要按钮</Button>
    <Button type="danger" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="info">主要按钮</Button>
    <Button type="info" shadow>带阴影主要按钮</Button>
    <Button type="info" bg>主要按钮</Button>
    <Button type="info" border>主要按钮</Button>
    <Button type="info" outline>主要按钮</Button>
    <Button type="info" outline bg>主要按钮</Button>
    <Button type="info" text bg>主要按钮</Button>
    <Button type="info" text >主要按钮</Button>
    <Button type="info" text outline>主要按钮</Button>
    <Button type="info" text shadow>主要按钮</Button>
    <Button type="info" bg shadow>主要按钮</Button>
  </div>
</Demo>

<CollapsibleCode  >

```vue
<template>
  <div class="button-group">
    <Button color="rgb(100,200,255)" bgColor="rgb(10,0,50)">主要按钮</Button>
    <Button color="rgb(100,200,255)" bgColor="rgb(10,0,50)" shadow
      >带阴影主要按钮</Button
    >
    <Button color="rgb(100,200,255)" bg>主要按钮</Button>
    <Button color="rgb(100,200,255)" border borderColor="rgb(100,200,255)"
      >主要按钮</Button
    >
    <Button color="rgb(100,200,255)" outline>主要按钮</Button>
    <Button color="rgb(100,200,255)" outline bg>主要按钮</Button>
    <Button color="rgb(100,200,255)" text bg>主要按钮</Button>
    <Button color="rgb(100,200,255)" text>主要按钮</Button>
    <Button color="rgb(100,200,255)" text outline>主要按钮</Button>
    <Button color="rgb(100,200,255)" text shadow>主要按钮</Button>
    <Button color="rgb(100,200,255)" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="primary">主要按钮</Button>
    <Button type="primary" shadow>带阴影主要按钮</Button>
    <Button type="primary" bg>主要按钮</Button>
    <Button type="primary" border>主要按钮</Button>
    <Button type="primary" outline>主要按钮</Button>
    <Button type="primary" outline bg>主要按钮</Button>
    <Button type="primary" text bg>主要按钮</Button>
    <Button type="primary" text>主要按钮</Button>
    <Button type="primary" text outline>主要按钮</Button>
    <Button type="primary" text shadow>主要按钮</Button>
    <Button type="primary" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="success">主要按钮</Button>
    <Button type="success" shadow>带阴影主要按钮</Button>
    <Button type="success" bg>主要按钮</Button>
    <Button type="success" border>主要按钮</Button>
    <Button type="success" outline>主要按钮</Button>
    <Button type="success" outline bg>主要按钮</Button>
    <Button type="success" text bg>主要按钮</Button>
    <Button type="success" text>主要按钮</Button>
    <Button type="success" text outline>主要按钮</Button>
    <Button type="success" text shadow>主要按钮</Button>
    <Button type="success" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="warning">主要按钮</Button>
    <Button type="warning" shadow>带阴影主要按钮</Button>
    <Button type="warning" bg>主要按钮</Button>
    <Button type="warning" border>主要按钮</Button>
    <Button type="warning" outline>主要按钮</Button>
    <Button type="warning" outline bg>主要按钮</Button>
    <Button type="warning" text bg>主要按钮</Button>
    <Button type="warning" text>主要按钮</Button>
    <Button type="warning" text outline>主要按钮</Button>
    <Button type="warning" text shadow>主要按钮</Button>
    <Button type="warning" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="danger">主要按钮</Button>
    <Button type="danger" shadow>带阴影主要按钮</Button>
    <Button type="danger" bg>主要按钮</Button>
    <Button type="danger" border>主要按钮</Button>
    <Button type="danger" outline>主要按钮</Button>
    <Button type="danger" outline bg>主要按钮</Button>
    <Button type="danger" text bg>主要按钮</Button>
    <Button type="danger" text>主要按钮</Button>
    <Button type="danger" text outline>主要按钮</Button>
    <Button type="danger" text shadow>主要按钮</Button>
    <Button type="danger" bg shadow>主要按钮</Button>
  </div>
  <div class="button-group">
    <Button type="info">主要按钮</Button>
    <Button type="info" shadow>带阴影主要按钮</Button>
    <Button type="info" bg>主要按钮</Button>
    <Button type="info" border>主要按钮</Button>
    <Button type="info" outline>主要按钮</Button>
    <Button type="info" outline bg>主要按钮</Button>
    <Button type="info" text bg>主要按钮</Button>
    <Button type="info" text>主要按钮</Button>
    <Button type="info" text outline>主要按钮</Button>
    <Button type="info" text shadow>主要按钮</Button>
    <Button type="info" bg shadow>主要按钮</Button>
  </div>
</template>
```

</CollapsibleCode>

## 属性

| 参数         | 说明                                          | 类型    | 可选值                              | 默认值    |
| ------------ | --------------------------------------------- | ------- | ----------------------------------- | --------- |
| type         | 按钮类型                                      | string  | primary/success/warning/danger/info | primary   |
| size         | 按钮尺寸                                      | string  | small/medium/large                  | medium    |
| disabled     | 是否禁用                                      | boolean | true/false                          | false     |
| text         | 是否为文本按钮                                | boolean | true/false                          | false     |
| border       | 是否为边框按钮                                | boolean | true/false                          | false     |
| shadow       | 是否显示阴影效果                              | boolean | true/false                          | false     |
| borderRadius | 按钮圆角大小(px)                              | Number  | —                                   | 6         |
| bgColor      | 自定义按钮背景颜色                            | String  | —                                   | undefined |
| bg           | 是否为浅色背景按钮                            | boolean | true/false                          | false     |
| color        | 自定义按钮文本颜色                            | String  | —                                   | undefined |
| borderColor  | 自定义按钮边框颜色（需配合 border=true 使用） | String  | —                                   | undefined |
| class        | 自定义类名                                    | String  | —                                   | undefined |
| style        | 自定义内联样式                                | Object  | —                                   | undefined |
| loading      | 控制按钮加载状态，外部控制优先                | Boolean | true/false                          | false     |

## 插槽

| 插槽名称 | 说明                                                                              |
| -------- | --------------------------------------------------------------------------------- |
| default  | 按钮的默认内容                                                                    |
| loadData | 加载状态时的自定义内容，仅在 loading 为 true 时显示，会替换默认的加载指示器和文本 |

## 事件

| 事件名称 | 说明               | 回调参数            |
| -------- | ------------------ | ------------------- |
| click    | 点击按钮时触发     | (event: MouseEvent) |
| hover    | 鼠标移入按钮时触发 | —                   |
