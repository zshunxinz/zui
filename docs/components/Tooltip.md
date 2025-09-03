# Tooltip 提示

Tooltip 组件用于在用户与元素交互时显示提示信息，支持多种位置、主题和交互方式。

## 基础用法

基础的 Tooltip 使用方式，默认在鼠标悬停时显示提示信息。

<Demo>
  <Tooltip content="这是一个基础提示">
    <Button>悬停查看提示</Button>
  </Tooltip>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Tooltip content="这是一个基础提示">
    <Button>悬停查看提示</Button>
  </Tooltip>
</template>

<script setup>
import { Tooltip, Button } from "xui";
</script>
```

</CollapsibleCode>

## 自定义内容

通过插槽可以自定义 Tooltip 的内容，使其更加丰富和灵活。

<Demo>
  <Tooltip>
    <Button>带图标的提示</Button>
    <template #content>
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14C5.24 14 3 11.76 3 9s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-9c-1.1 0-2 .9-2 2h1v1H8v-1h2c0-1.1-.9-2-2-2z"/>
        </svg>
        <span>这是一个带图标的提示</span>
      </div>
    </template>
  </Tooltip>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Tooltip>
    <Button>带图标的提示</Button>
    <template #content>
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14C5.24 14 3 11.76 3 9s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-9c-1.1 0-2 .9-2 2h1v1H8v-1h2c0-1.1-.9-2-2-2z"
          />
        </svg>
        <span>这是一个带图标的提示</span>
      </div>
    </template>
  </Tooltip>
</template>

<script setup>
import { Tooltip, Button } from "xui";
</script>
```

</CollapsibleCode>

## 不同位置

Tooltip 支持多种显示位置，包括上、右、下、左四个方向。

<Demo>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <Tooltip content="顶部提示" placement="top">
      <Button>顶部</Button>
    </Tooltip>
    <Tooltip content="右侧提示" placement="right">
      <Button>右侧</Button>
    </Tooltip>
    <Tooltip content="底部提示" placement="bottom">
      <Button>底部</Button>
    </Tooltip>
    <Tooltip content="左侧提示" placement="left">
      <Button>左侧</Button>
    </Tooltip>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <Tooltip content="顶部提示" placement="top">
      <Button>顶部</Button>
    </Tooltip>
    <Tooltip content="右侧提示" placement="right">
      <Button>右侧</Button>
    </Tooltip>
    <Tooltip content="底部提示" placement="bottom">
      <Button>底部</Button>
    </Tooltip>
    <Tooltip content="左侧提示" placement="left">
      <Button>左侧</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import { Tooltip, Button } from "xui";
</script>
```

</CollapsibleCode>

## 不同主题

Tooltip 提供多种主题颜色，适用于不同的场景和需求。

<Demo>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <Tooltip content="默认主题" theme="default">
      <Button>默认</Button>
    </Tooltip>
    <Tooltip content="主要主题" theme="primary">
      <Button type="primary">主要</Button>
    </Tooltip>
    <Tooltip content="成功主题" theme="success">
      <Button type="success">成功</Button>
    </Tooltip>
    <Tooltip content="警告主题" theme="warning">
      <Button type="warning">警告</Button>
    </Tooltip>
    <Tooltip content="危险主题" theme="danger">
      <Button type="danger">危险</Button>
    </Tooltip>
    <Tooltip content="信息主题" theme="info">
      <Button type="info">信息</Button>
    </Tooltip>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; gap: 16px; flex-wrap: wrap;">
    <Tooltip content="默认主题" theme="default">
      <Button>默认</Button>
    </Tooltip>
    <Tooltip content="主要主题" theme="primary">
      <Button type="primary">主要</Button>
    </Tooltip>
    <Tooltip content="成功主题" theme="success">
      <Button type="success">成功</Button>
    </Tooltip>
    <Tooltip content="警告主题" theme="warning">
      <Button type="warning">警告</Button>
    </Tooltip>
    <Tooltip content="危险主题" theme="danger">
      <Button type="danger">危险</Button>
    </Tooltip>
    <Tooltip content="信息主题" theme="info">
      <Button type="info">信息</Button>
    </Tooltip>
  </div>
</template>

<script setup>
import { Tooltip, Button } from "xui";
</script>
```

</CollapsibleCode>

## 延迟显示

通过 delay 属性可以设置提示显示的延迟时间，避免鼠标快速划过元素时显示提示。

<Demo>
  <Tooltip content="延迟300ms显示" :delay="300">
    <Button>延迟显示</Button>
  </Tooltip>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Tooltip content="延迟300ms显示" :delay="300">
    <Button>延迟显示</Button>
  </Tooltip>
</template>

<script setup>
import { Tooltip, Button } from "xui";
</script>
```

</CollapsibleCode>

## 禁用状态

设置 disabled 属性可以禁用 Tooltip，使其不再响应鼠标交互。

<Demo>
  <Tooltip content="这个提示不会显示" disabled>
    <Button >禁用状态</Button>
  </Tooltip>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Tooltip content="这个提示不会显示" disabled>
    <Button>禁用状态</Button>
  </Tooltip>
</template>

<script setup>
import { Tooltip, Button } from "xui";
</script>
```

</CollapsibleCode>

## 隐藏箭头

通过设置 arrow 属性为 false 可以隐藏 Tooltip 的箭头。

<Demo>
<Space>
  <Tooltip content="无箭头提示" :arrow="false">
    <Button>无箭头</Button>
  </Tooltip>

  <Tooltip content="无箭头提示" :arrow="false" theme="primary" placement="right">
    <Button type="primary">无箭头</Button>
  </Tooltip>
</Space>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Space>
    <Tooltip content="无箭头提示" :arrow="false">
      <Button>无箭头</Button>
    </Tooltip>

    <Tooltip
      content="无箭头提示"
      :arrow="false"
      theme="primary"
      placement="right"
    >
      <Button type="primary">无箭头</Button>
    </Tooltip>
  </Space>
</template>
```

</CollapsibleCode>

## 表单元素提示

Tooltip 可以与各种表单元素组合使用，提供额外的帮助信息。

<Demo>

<Row justify="center" :gutter="12">
  <Col span="6">
    <Input placeholder="请输入用户名" size="small" />
  </Col>
  <Col span="16">
  <Tooltip content="用户名长度为6-20个字符，支持字母、数字和下划线">
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
  </Tooltip>
  </Col>
</Row>

</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; align-items: center; gap: 8px;">
    <Input placeholder="请输入用户名" />
    <Tooltip content="用户名长度为6-20个字符，支持字母、数字和下划线">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    </Tooltip>
  </div>
</template>

<script setup>
import { Tooltip, Input } from "xui";
</script>
```

</CollapsibleCode>

## Props

| 属性名    | 类型                                                                   | 默认值    | 说明             |
| --------- | ---------------------------------------------------------------------- | --------- | ---------------- |
| content   | string                                                                 | ''        | 提示内容         |
| placement | 'top' \| 'right' \| 'bottom' \| 'left'                                 | 'top'     | 提示显示位置     |
| theme     | 'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' | 'default' | 提示主题颜色     |
| disabled  | boolean                                                                | false     | 是否禁用提示     |
| delay     | number                                                                 | 0         | 显示延迟时间(ms) |
| arrow     | boolean                                                                | true      | 是否显示箭头     |

## 插槽

| 插槽名  | 说明         |
| ------- | ------------ |
| default | 触发元素内容 |
| content | 提示内容     |

## 事件

| 事件名     | 说明               | 参数         |
| ---------- | ------------------ | ------------ |
| mouseenter | 鼠标进入触发元素时 | 原生事件对象 |
| mouseleave | 鼠标离开触发元素时 | 原生事件对象 |
| focus      | 触发元素获得焦点时 | 原生事件对象 |
| blur       | 触发元素失去焦点时 | 原生事件对象 |
