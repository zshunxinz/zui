# Card 卡片

Card 组件用于展示内容，支持多种类型、尺寸和自定义功能。

## 基础用法

<script setup>
import { ref } from "vue";
import CardDemo1 from "../demo/CardDemo1.vue";
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
<Demo>
  <CardDemo1 />
</Demo>

<CollapsibleCode>

```vue
<template>
  <Card title="基础卡片" headerBorder>
    <Input placeholder="账号" />
    <Button style="height:100%">确认</Button>
  </Card>
</template>
```

</CollapsibleCode>

## 控制卡片尺寸

通过`width`和`height`属性可以手动控制卡片的宽度和高度。支持数字(px)和字符串形式的 CSS 值。

<Demo>

<Row :gutter="[16,16]">

  <Col :span="24">
    <Card title="自定义宽度卡片" :width="300" headerBorder>
      <div>宽度为300px的卡片</div>
    </Card>
  </Col>
  <Col :span="12">
    <Card title="自定义高度卡片" :height="200">
      <div>高度为200px的卡片</div>
    </Card>
  </Col>
  <Col :span="24">
    <Card title="自定义宽高卡片" width="100%" height="150px" headerBorder>
      <div>宽度为100%，高度为150px的卡片</div>
    </Card>
  </Col>
</Row>

</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="card-group">
    <Card title="自定义宽度卡片" :width="300">
      <div>宽度为300px的卡片</div>
    </Card>
    <Card title="自定义高度卡片" :height="200">
      <div>高度为200px的卡片</div>
    </Card>
    <Card title="自定义宽高卡片" width="50%" height="150px">
      <div>宽度为50%，高度为150px的卡片</div>
    </Card>
  </div>
</template>
```

</CollapsibleCode>

## 类型和尺寸

卡片支持多种尺寸：
<Demo>

<div class="card-group">
<Card title="小型卡片" size="small"></Card>
<Card title="默认卡片"></Card>
<Card title="大型卡片" size="large"></Card>
</div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="card-group">
    <Card title="默认卡片"></Card>
    <Card title="主要卡片" type="primary"></Card>
    <Card title="成功卡片" type="success"></Card>
    <Card title="警告卡片" type="warning"></Card>
    <Card title="危险卡片" type="danger"></Card>
  </div>

  <div class="card-group">
    <Card title="小型卡片" size="small"></Card>
    <Card title="默认卡片"></Card>
    <Card title="大型卡片" size="large"></Card>
  </div>
</template>
```

</CollapsibleCode>

## 控制内边距

通过`padding`属性可以控制卡片内部的内边距。
<Demo>
<Card title="默认内边距" type="info">

<div>这是默认内边距的卡片</div>
</Card>

<Card title="小内边距" padding="8px" type="info">
    <div>这是内边距为8px的卡片</div>
</Card>

<Card title="大内边距" :padding="24" type="info">
    <div>这是内边距为24px的卡片</div>
</Card>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="card-group">
    <Card title="默认内边距" type="info">
      <div>这是默认内边距的卡片</div>
    </Card>
    <Card title="小内边距" padding="8px" type="info">
      <div>这是内边距为8px的卡片</div>
    </Card>
    <Card title="大内边距" :padding="24" type="info">
      <div>这是内边距为24px的卡片</div>
    </Card>
  </div>
</template>
```

</CollapsibleCode>

## 可折叠卡片与事件

支持设置卡片为可折叠状态，并通过`@toggle`事件获取展开状态：

<Demo>
<Card title="可折叠卡片" collapsible default-open @toggle="handleToggle">

<div>这是可折叠卡片的内容</div>
</Card>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Card title="可折叠卡片" collapsible default-open @toggle="handleToggle">
    <div>这是可折叠卡片的内容</div>
  </Card>
  <p style="margin-top: 16px;">展开状态: {{ expanded }}</p>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref(true);
const handleToggle = (isExpanded) => {
  expanded.value = isExpanded;
  console.log("卡片展开状态:", isExpanded);
};
</script>
```

</CollapsibleCode>

## 自定义插槽

卡片支持多种插槽，包括头部、内容、底部以及新增的右上角、左下角和右下角插槽：
<Demo>
<Card title="自定义插槽卡片">
<template #topRight>
<Button text>更多</Button>
</template>

<div>
<Input width="70%" placeholder="请输入账号"></Input>
</div>
<template #footer>
<div>设置</div>
</template>
<template #bottomLeft>
<Button >确认</Button>
</template>
<template #bottomRight>
<Button  text border>取消</Button>
</template>
</Card>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Card title="自定义插槽卡片">
    <template #topRight>
      <Button size="small">更多</Button>
    </template>
    <div>这是卡片内容</div>
    <template #footer>
      <div>这是底部内容</div>
    </template>
    <template #bottomLeft>
      <span>左下角内容</span>
    </template>
    <template #bottomRight>
      <Button size="small">操作</Button>
    </template>
  </Card>
</template>
```

</CollapsibleCode>

## 悬浮效果与阴影控制

设置`hoverable`属性为`true`可以启用卡片悬浮效果。通过`shadow`属性可以控制卡片是否显示阴影。
<Demo>
<Card title="默认阴影卡片" shadow>

<div>这是一张带有默认阴影的卡片</div>
</Card>

<Card title="无阴影卡片" :shadow="false">
    <div>这是一张没有阴影的卡片</div>
</Card>

<Card title="悬浮卡片" hoverable>
    <div>鼠标悬浮时会有阴影效果</div>
  </Card>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="card-group">
    <Card title="默认阴影卡片" shadow>
      <div>这是一张带有默认阴影的卡片</div>
    </Card>
    <Card title="无阴影卡片" :shadow="false">
      <div>这是一张没有阴影的卡片</div>
    </Card>
    <Card title="悬浮卡片" hoverable>
      <div>鼠标悬浮时会有阴影效果</div>
    </Card>
  </div>
</template>
```

</CollapsibleCode>

## 无边框模式

设置`border`属性为`false`可以禁用卡片边框：
<Demo>
<Card title="无边框卡片" :border="false">

<div>这是无边框卡片的内容</div>
</Card>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Card title="无边框卡片" :border="false">
    <div>这是无边框卡片的内容</div>
  </Card>
</template>
```

</CollapsibleCode>

## 灵活布局

通过`layout`属性可以设置卡片的布局方式：
<Demo>

<div class="card-group">
    <Card title="默认布局" layout="default"></Card>
    <Card title="灵活布局" layout="flexible"></Card>
    <Card title="紧凑布局" layout="tight"></Card>
</div>
</Demo>
<CollapsibleCode>

```vue
<template>
  <div class="card-group">
    <Card title="默认布局" layout="default"></Card>
    <Card title="灵活布局" layout="flexible"></Card>
    <Card title="紧凑布局" layout="tight"></Card>
  </div>
</template>
```

</CollapsibleCode>

## 骨架屏控制

通过`skeleton`属性可以控制卡片是否显示骨架屏效果。通常与异步数据加载配合使用：
<Demo>
<Card :skeleton="loading" padding="0px">

<div v-if="!loading">
这是异步加载的数据内容。
</div>
</Card>
<Button @click="toggleLoading" text>
{{ loading ? '显示内容' : '显示骨架屏' }}
</Button>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Card :skeleton="loading" title="数据加载卡片">
    <div v-if="!loading">这是异步加载的数据内容。</div>
  </Card>
  <button @click="toggleLoading" style="margin-top: 16px;">
    {{ loading ? "显示内容" : "显示骨架屏" }}
  </button>
</template>

<script setup>
import { ref } from "vue";

const loading = ref(true);
const toggleLoading = () => {
  loading.value = !loading.value;
};
</script>
```

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
