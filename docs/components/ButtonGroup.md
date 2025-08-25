# ButtonGroup 组合按钮

将多个按钮组合在一起，实现无间距排列和边缘圆角处理。

## 基础用法

### 水平组合

默认情况下，按钮组水平排列，中间按钮无圆角，仅保留最外侧按钮的圆角。

<script setup>
// import Button from '../../src/components/Button.vue'
// import ButtonGroup from '../../src/components/ButtonGroup.vue'
</script>
<ButtonGroup>
  <Button type="primary" text border>左侧按钮</Button>
  <Button type="primary" text border>中间按钮</Button>
  <Button type="primary" text border>右侧按钮</Button>
</ButtonGroup>

```vue
<template>
  <ButtonGroup>
    <Button type="primary">左侧按钮</Button>
    <Button type="primary">中间按钮</Button>
    <Button type="primary">右侧按钮</Button>
  </ButtonGroup>
</template>

<script setup>
import Button from "../../src/components/Button.vue";
import ButtonGroup from "../../src/components/ButtonGroup.vue";
</script>
```

### 垂直组合

通过`vertical`属性可以实现按钮组垂直排列。

<ButtonGroup vertical>
    <Button type="success">顶部按钮</Button>
    <Button type="success">中间按钮</Button>
    <Button type="success">底部按钮</Button>
</ButtonGroup>

```vue
<template>
  <ButtonGroup vertical>
    <Button type="success">顶部按钮</Button>
    <Button type="success">中间按钮</Button>
    <Button type="success">底部按钮</Button>
  </ButtonGroup>
</template>

<script setup>
import Button from "../../src/components/Button.vue";
import ButtonGroup from "../../src/components/ButtonGroup.vue";
</script>
```

## 混合类型组合

可以在同一个按钮组中使用不同类型的按钮。

<ButtonGroup>
  <Button type="primary">主要操作</Button>
  <Button>次要操作</Button>
  <Button type="danger">危险操作</Button>
</ButtonGroup>

```vue
<template>
  <ButtonGroup>
    <Button type="primary">主要操作</Button>
    <Button>次要操作</Button>
    <Button type="danger">危险操作</Button>
  </ButtonGroup>
</template>

<script setup>
import Button from "../../src/components/Button.vue";
import ButtonGroup from "../../src/components/ButtonGroup.vue";
</script>
```

## Props

| 参数     | 说明               | 类型    | 可选值     | 默认值 |
| -------- | ------------------ | ------- | ---------- | ------ |
| vertical | 是否垂直排列按钮组 | boolean | true/false | false  |

## 注意事项

- 按钮组内部仅支持放置`<Button>`组件
- 当按钮组包含禁用状态的按钮时，整体样式会自动调整
- 垂直排列时，圆角会自动调整为上下方向
