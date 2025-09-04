# Popover 弹出层

Popover 组件用于显示一个可以通过元素触发的、包含丰富内容的弹出层。它可以附加到任何元素上，并在用户与之交互时显示相关信息或操作。

## 基础用法

最简单的 Popover 组件使用方式，点击按钮显示弹出内容。

<Demo>
  <Popover>
    <Button>打开弹出层</Button>
    <template #content>
      <div class="x-popover-demo">
        <h4>Popover 内容</h4>
        <p>这是一个简单的Popover示例</p>
      </div>
    </template>
  </Popover>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Popover>
    <Button>打开弹出层</Button>
    <template #content>
      <div>
        <h4>Popover 内容</h4>
        <p>这是一个简单的Popover示例</p>
      </div>
    </template>
  </Popover>
</template>
```

</CollapsibleCode>

## 位置设置

Popover 组件支持多种位置设置，可以根据需要显示在触发元素的不同方位。

<Demo>
  <Space wrap>
    <Popover placement="top">
      <Button>上</Button>
      <template #content>
        <div class="x-popover-demo">
          <p>顶部弹出</p>
        </div>
      </template>
    </Popover>
    <Popover placement="bottom">
      <Button>下</Button>
      <template #content>
        <div class="x-popover-demo">
          <p>底部弹出</p>
        </div>
      </template>
    </Popover>
    <Popover placement="left">
      <Button>左</Button>
      <template #content>
        <div class="x-popover-demo">
          <p>左侧弹出</p>
        </div>
      </template>
    </Popover>
    <Popover placement="right">
      <Button>右</Button>
      <template #content>
        <div class="x-popover-demo">
          <p>右侧弹出</p>
        </div>
      </template>
    </Popover>
  </Space>
</Demo>

```vue
<Popover placement="top">
  <Button>上</Button>
  <template #content>
    <div>
      <p>顶部弹出</p>
    </div>
  </template>
</Popover>

<Popover placement="bottom">
  <Button>下</Button>
  <template #content>
    <div>
      <p>底部弹出</p>
    </div>
  </template>
</Popover>

<Popover placement="left">
  <Button>左</Button>
  <template #content>
    <div>
      <p>左侧弹出</p>
    </div>
  </template>
</Popover>

<Popover placement="right">
  <Button>右</Button>
  <template #content>
    <div>
      <p>右侧弹出</p>
    </div>
  </template>
</Popover>
```

## 带偏移的弹出层

通过设置`offset`属性，可以调整弹出层与触发元素之间的距离。

<Demo>
  <Popover placement="right" :offset="20">
    <Button>带偏移的弹出层</Button>
    <template #content>
      <div class="x-popover-demo">
        <p>这是一个带有20px偏移的弹出层</p>
      </div>
    </template>
  </Popover>
</Demo>

```vue
<Popover placement="right" :offset="20">
  <Button>带偏移的弹出层</Button>
  <template #content>
    <div>
      <p>这是一个带有20px偏移的弹出层</p>
    </div>
  </template>
</Popover>
```

## 禁用覆盖层

通过设置`overlay`属性为`false`，可以禁用弹出层的背景覆盖。

<Demo>
  <Popover :overlay="false">
    <Button>无覆盖层</Button>
    <template #content>
      <div class="x-popover-demo">
        <p>点击空白处不会关闭弹出层</p>
      </div>
    </template>
  </Popover>
</Demo>

```vue
<Popover :overlay="false">
  <Button>无覆盖层</Button>
  <template #content>
    <div>
      <p>点击空白处不会关闭弹出层</p>
    </div>
  </template>
</Popover>
```

## 禁用箭头

通过设置`arrow`属性为`false`，可以禁用弹出层的箭头。

<Demo>
  <Popover :arrow="false">
    <Button>无箭头</Button>
    <template #content>
      <div class="x-popover-demo">
        <p>这是一个没有箭头的弹出层</p>
      </div>
    </template>
  </Popover>
</Demo>

```vue
<Popover :arrow="false">
  <Button>无箭头</Button>
  <template #content>
    <div>
      <p>这是一个没有箭头的弹出层</p>
    </div>
  </template>
</Popover>
```

## 自定义尺寸

通过设置`width`和`height`属性，可以自定义弹出层的尺寸。

<Demo>
  <Popover placement="bottom" width="300" height="200">
    <Button>自定义尺寸</Button>
    <template #content>
      <div class="x-popover-demo" style="height: 100%; display: flex; flex-direction: column;">
        <h4>自定义尺寸的弹出层</h4>
        <p>宽度：300px，高度：200px</p>
        <div style="flex: 1;"></div>
      </div>
    </template>
  </Popover>
</Demo>

```vue
<Popover placement="bottom" width="300" height="200">
  <Button>自定义尺寸</Button>
  <template #content>
    <div style="height: 100%; display: flex; flex-direction: column;">
      <h4>自定义尺寸的弹出层</h4>
      <p>宽度：300px，高度：200px</p>
      <div style="flex: 1;"></div>
    </div>
  </template>
</Popover>
```

## 禁用状态

通过设置`disabled`属性，可以禁用 Popover 组件。

<Demo>
  <Popover disabled>
    <Button disabled>禁用状态</Button>
    <template #content>
      <div class="x-popover-demo">
        <p>这是禁用状态的弹出层</p>
      </div>
    </template>
  </Popover>
</Demo>

```vue
<Popover disabled>
  <Button disabled>禁用状态</Button>
  <template #content>
    <div>
      <p>这是禁用状态的弹出层</p>
    </div>
  </template>
</Popover>
```

## API

### Popover 属性

| 属性名               | 类型               | 默认值                     | 说明                                                                                                                                                                                       |
| -------------------- | ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                 | `string`           | 自动生成                   | 组件的唯一标识符                                                                                                                                                                           |
| `placement`          | `string`           | `'bottom'`                 | 弹出层的位置，可选值：`'top'`、`'top-start'`、`'top-end'`、`'bottom'`、`'bottom-start'`、`'bottom-end'`、`'left'`、`'left-start'`、`'left-end'`、`'right'`、`'right-start'`、`'right-end'` |
| `open`               | `boolean`          | `undefined`                | 控制弹出层是否显示（受控模式）                                                                                                                                                             |
| `defaultOpen`        | `boolean`          | `false`                    | 默认是否显示弹出层（非受控模式）                                                                                                                                                           |
| `disabled`           | `boolean`          | `false`                    | 是否禁用弹出层                                                                                                                                                                             |
| `overlay`            | `boolean`          | `true`                     | 是否显示背景覆盖层                                                                                                                                                                         |
| `teleport`           | `boolean`          | `true`                     | 是否将弹出层内容传送到 body 元素下                                                                                                                                                         |
| `transitionDuration` | `number`           | `200`                      | 过渡动画持续时间（毫秒）                                                                                                                                                                   |
| `arrow`              | `boolean`          | `true`                     | 是否显示箭头                                                                                                                                                                               |
| `flip`               | `boolean`          | `true`                     | 当弹出层超出视口时，是否自动翻转位置                                                                                                                                                       |
| `shift`              | `boolean`          | `true`                     | 当弹出层超出视口时，是否自动调整位置                                                                                                                                                       |
| `offset`             | `number`           | `8`                        | 弹出层与触发元素之间的距离（像素）                                                                                                                                                         |
| `width`              | `string \| number` | `undefined`                | 弹出层的宽度                                                                                                                                                                               |
| `height`             | `string \| number` | `undefined`                | 弹出层的高度                                                                                                                                                                               |
| `padding`            | `string`           | `var(--x-popover-padding)` | 弹出层内容的内边距                                                                                                                                                                         |

### Popover 事件

| 事件名  | 参数             | 说明             |
| ------- | ---------------- | ---------------- |
| `open`  | `value: boolean` | 弹出层打开时触发 |
| `close` | `value: boolean` | 弹出层关闭时触发 |

### Popover 插槽

| 插槽名    | 说明             |
| --------- | ---------------- |
| `default` | 触发弹出层的元素 |
| `content` | 弹出层的内容     |

<style>
.x-popover-demo {
  padding: 16px;
}

.x-popover-demo h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 500;
}

.x-popover-demo p {
  margin: 0;
  color: var(--color-text-muted);
}
</style>
