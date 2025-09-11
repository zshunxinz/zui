# 图标

zui 提供了一套常用的图标集合，可以通过 [Icon](../components/Icon.md) 组件来使用。

<script setup>
import Icon from '../../src/components/Icon'
</script>

## 使用方法

### 基础用法

通过 `name` 属性来指定要显示的图标：

<Icon name="check" />
<Icon name="check" :size="24" />

```vue
<template>
  <Icon name="check" />
</template>

<script setup>
import { Icon } from 'zui';
</script>
```

### 自定义尺寸

通过 `size` 属性来设置图标的尺寸，支持数字或字符串：

```vue
<template>
  <Icon name="check" :size="16" />
  <Icon name="check" :size="24" />
  <Icon name="check" :size="32" />
  <Icon name="check" size="2em" />
</template>

<script setup>
import { Icon } from 'zui';
</script>
```

### 自定义颜色

通过 `color` 属性来设置图标的颜色：

```vue
<template>
  <Icon name="check" color="#409eff" />
</template>

<script setup>
import { Icon } from 'zui';
</script>
```

### 自定义 SVG 图标

可以直接传入 SVG 字符串来渲染自定义图标：

```vue
<template>
  <Icon name="<path d='M12 2L2 7l10 5 10-5-10-5z' />" :size="24" />
</template>

<script setup>
import { Icon } from 'zui';
</script>
```

## 图标集合

以下是一些常用的图标示例：

<div style="display: flex; gap: 16px; flex-wrap: wrap;">
  <Icon name="check" :size="24" />
  <Icon name="x" :size="24" />
  <Icon name="chevron-down" :size="24" />
  <Icon name="chevron-up" :size="24" />
  <Icon name="chevron-left" :size="24" />
  <Icon name="chevron-right" :size="24" />
  <Icon name="plus" :size="24" />
  <Icon name="minus" :size="24" />
  <Icon name="search" :size="24" />
  <Icon name="user" :size="24" />
  <Icon name="settings" :size="24" />
  <Icon name="home" :size="24" />
  <Icon name="heart" :size="24" />
  <Icon name="star" :size="24" />
</div>

## 添加自定义图标

zui 的图标组件支持从 SVG 文件加载图标。每个图标都以独立的 SVG 文件形式存储在组件库中，便于管理和扩展。

要添加自定义图标，请按以下步骤操作：

1. 在 `src/components/Icon/icons/` 目录下创建一个新的 SVG 文件，文件名即为图标名称
2. 确保 SVG 文件符合标准格式，包含正确的 viewBox 和路径数据
3. 在组件中通过 `name` 属性使用新图标

更多图标请参考 [Icon 组件文档](../components/Icon.md)。
