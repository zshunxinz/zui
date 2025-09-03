# Space 间距

间距组件用于控制组件之间的间距，支持多种对齐方式和方向。

## 基础用法

基础的间距组件用法，可以设置水平或垂直方向的间距。

<Demo>
<Space>
  <Button type="primary">按钮1</Button>
  <Button type="primary">按钮2</Button>
  <Button type="primary">按钮3</Button>
</Space>

<br/>

<Space direction="vertical">
  <Button type="primary">按钮1</Button>
  <Button type="primary">按钮2</Button>
  <Button type="primary">按钮3</Button>
</Space>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Space>
    <Button type="primary">按钮1</Button>
    <Button type="primary">按钮2</Button>
    <Button type="primary">按钮3</Button>
  </Space>

  <br />

  <Space direction="vertical">
    <Button type="primary">按钮1</Button>
    <Button type="primary">按钮2</Button>
    <Button type="primary">按钮3</Button>
  </Space>
</template>
```

</CollapsibleCode>

## 不同大小

支持多种预设大小，包括`mini`、`small`、`medium`、`large`，也可以传入自定义数值。

<Demo>
<div>
  <Space size="mini">
    <Button>迷你间距</Button>
    <Button>迷你间距</Button>
    <Button>迷你间距</Button>
  </Space>
</div>

<br/>

<div>
  <Space size="small">
    <Button>小间距</Button>
    <Button>小间距</Button>
    <Button>小间距</Button>
  </Space>
</div>

<br/>

<div>
  <Space size="medium">
    <Button>中等间距</Button>
    <Button>中等间距</Button>
    <Button>中等间距</Button>
  </Space>
</div>

<br/>

<div>
  <Space size="large">
    <Button>大间距</Button>
    <Button>大间距</Button>
    <Button>大间距</Button>
  </Space>
</div>

<br/>

<div>
  <Space :size="20">
    <Button>自定义间距</Button>
    <Button>自定义间距</Button>
    <Button>自定义间距</Button>
  </Space>
</div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div>
    <Space size="mini">
      <Button>迷你间距</Button>
      <Button>迷你间距</Button>
      <Button>迷你间距</Button>
    </Space>
  </div>

  <br />

  <div>
    <Space size="small">
      <Button>小间距</Button>
      <Button>小间距</Button>
      <Button>小间距</Button>
    </Space>
  </div>

  <br />

  <div>
    <Space size="medium">
      <Button>中等间距</Button>
      <Button>中等间距</Button>
      <Button>中等间距</Button>
    </Space>
  </div>

  <br />

  <div>
    <Space size="large">
      <Button>大间距</Button>
      <Button>大间距</Button>
      <Button>大间距</Button>
    </Space>
  </div>

  <br />

  <div>
    <Space :size="20">
      <Button>自定义间距</Button>
      <Button>自定义间距</Button>
      <Button>自定义间距</Button>
    </Space>
  </div>
</template>
```

</CollapsibleCode>

## 不同对齐方式

支持多种对齐方式，包括`start`、`end`、`center`、`baseline`。

<Demo>
<div>
  <Space align="start">
    <Button>顶部对齐</Button>
    <Button size="large">顶部对齐</Button>
    <Button size="small">顶部对齐</Button>
  </Space>
</div>

<br/>

<div>
  <Space align="end">
    <Button>底部对齐</Button>
    <Button size="large">底部对齐</Button>
    <Button size="small">底部对齐</Button>
  </Space>
</div>

<br/>

<div>
  <Space align="center">
    <Button>居中对齐</Button>
    <Button size="large">居中对齐</Button>
    <Button size="small">居中对齐</Button>
  </Space>
</div>

<br/>

<div>
  <Space align="baseline">
    <Button>基线对齐</Button>
    <Button size="large">基线对齐</Button>
    <Button size="small">基线对齐</Button>
  </Space>
</div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div>
    <Space align="start">
      <Button>顶部对齐</Button>
      <Button size="large">顶部对齐</Button>
      <Button size="small">顶部对齐</Button>
    </Space>
  </div>

  <br />

  <div>
    <Space align="end">
      <Button>底部对齐</Button>
      <Button size="large">底部对齐</Button>
      <Button size="small">底部对齐</Button>
    </Space>
  </div>

  <br />

  <div>
    <Space align="center">
      <Button>居中对齐</Button>
      <Button size="large">居中对齐</Button>
      <Button size="small">居中对齐</Button>
    </Space>
  </div>

  <br />

  <div>
    <Space align="baseline">
      <Button>基线对齐</Button>
      <Button size="large">基线对齐</Button>
      <Button size="small">基线对齐</Button>
    </Space>
  </div>
</template>
```

</CollapsibleCode>

## 自动换行

设置`wrap`属性为`true`可以在空间不足时自动换行。

<Demo>
<Space wrap>
  <Button v-for="i in 10" :key="i">按钮 {{ i }}</Button>
</Space>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Space wrap>
    <Button v-for="i in 10" :key="i">按钮 {{ i }}</Button>
  </Space>
</template>
```

</CollapsibleCode>

## 充满整行

设置`fill`属性为`true`可以让子元素充满整行。

<Demo>
<Space fill>
  <Button>充满整行</Button>
  <Button>充满整行</Button>
  <Button>充满整行</Button>
</Space>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Space fill>
    <Button>充满整行</Button>
    <Button>充满整行</Button>
    <Button>充满整行</Button>
  </Space>
</template>
```

</CollapsibleCode>

## 设置分隔符

通过`split`插槽可以设置子元素之间的分隔符。

<Demo>
<Space>
  <template #split>
    <span style="color: var(--color-border);">|</span>
  </template>
  <Button>带分隔符</Button>
  <Button>带分隔符</Button>
  <Button>带分隔符</Button>
</Space>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Space>
    <template #split>
      <span style="color: var(--color-border);">|</span>
    </template>
    <Button>带分隔符</Button>
    <Button>带分隔符</Button>
    <Button>带分隔符</Button>
  </Space>
</template>
```

</CollapsibleCode>

## 不同方向的自定义间距

可以通过数组形式分别设置水平和垂直方向的间距。

<Demo>
<Space size="[16, 8]" wrap>
  <Button v-for="i in 6" :key="i">按钮 {{ i }}</Button>
</Space>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Space size="[16, 8]" wrap>
    <Button v-for="i in 6" :key="i">按钮 {{ i }}</Button>
  </Space>
</template>
```

</CollapsibleCode>

## 结合其他组件使用

Space 组件可以与其他组件结合使用，如表单、卡片等。

<Demo center>
<Card title="表单示例" style="width: 300px;">
  <Space direction="vertical" size="large">
    <Space align="start">
      <div>姓名</div>
      <div>
        <Input placeholder="请输入姓名"/>      
      </div>
    </Space>
    <Space align="start">
      <span>年龄</span>
      <div>
        <Input placeholder="请输入年龄" />
      </div>
    </Space>
    <Space align="start">
      <span>地址</span>
      <div>
        <Input placeholder="请输入地址" />
      </div>
    </Space>
    <Space justify="center">
      <Button >提交</Button>
      <Button outline>取消</Button>
    </Space>
  </Space>
</Card>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Card title="表单示例" style="width: 300px;">
    <Space direction="vertical" size="large">
      <Space align="start">
        <div>姓名</div>
        <div>
          <Input placeholder="请输入姓名" />
        </div>
      </Space>
      <Space align="start">
        <span>年龄</span>
        <div>
          <Input placeholder="请输入年龄" />
        </div>
      </Space>
      <Space align="start">
        <span>地址</span>
        <div>
          <Input placeholder="请输入地址" />
        </div>
      </Space>
      <Space justify="center">
        <Button>提交</Button>
        <Button outline>取消</Button>
      </Space>
    </Space>
  </Card>
</template>
```

</CollapsibleCode>

## 属性

| 参数      | 说明                                   | 类型                                                                       | 默认值       | 版本 |
| --------- | -------------------------------------- | -------------------------------------------------------------------------- | ------------ | ---- |
| align     | 对齐方式                               | 'start' \| 'end' \| 'center' \| 'baseline'                                 | 'start'      | -    |
| direction | 间距方向                               | 'vertical' \| 'horizontal'                                                 | 'horizontal' | -    |
| size      | 间距大小，支持分别制定横向和竖向的间距 | number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SizeType, SizeType] | 'small'      | -    |
| wrap      | 环绕类型的间距，用于折行的场景         | boolean                                                                    | false        | -    |
| fill      | 充满整行                               | boolean                                                                    | false        | -    |
| items     | 子项数据（可选）                       | any[]                                                                      | []           | -    |

## 插槽

| 插槽名  | 描述       | 参数 |
| ------- | ---------- | ---- |
| default | 默认插槽   | -    |
| split   | 设置分隔符 | -    |

## SizeType 说明

SizeType 可以是以下类型之一：

- `number`: 自定义间距大小（单位：px）
- `string`: 预设间距大小，可选值为 'mini'、'small'、'medium'、'large'
- `array`: 数组形式，用于分别设置水平和垂直方向的间距，如 `[16, 8]`
