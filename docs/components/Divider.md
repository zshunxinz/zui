# Divider 分割线

Divider 组件用于分隔内容，支持多种方向、样式类型和文字位置自定义。

## 基础用法

展示水平和垂直方向的基础分割线。

<Demo>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <div>水平分割线</div>
    <Divider size="1"/>
    <div>垂直分割线</div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <span>左侧内容</span>
      <Divider direction="vertical" height="24px" />
      <span>右侧内容</span>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <!-- 水平分割线 -->
    <Divider />
    <div style="display: flex; align-items: center; gap: 16px;">
      <span>左侧内容</span>
      <Divider direction="vertical" />
      <span>右侧内容</span>
    </div>
  </div>
</template>
```

</CollapsibleCode>

## 样式类型

支持实线、虚线、点线和双线四种样式类型。

<Demo>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Divider ctype="solid" />
    <Divider ctype="dashed" />
    <Divider ctype="dotted" />
    <Divider ctype="double" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Divider ctype="solid" /><!-- 实线 -->
    <Divider ctype="dashed" /><!-- 虚线 -->
    <Divider ctype="dotted" /><!-- 点线 -->
    <Divider ctype="double" /><!-- 双线 -->
  </div>
</template>
```

</CollapsibleCode>

## 文字位置

设置分割线文字的位置（左、中、右）或使用百分比值自定义位置。

<Demo>
  <Space direction="vertical">
    <Divider text="左侧文字" orientation="left" />
    <Divider text="居中文字" orientation="center" />
    <Divider text="右侧文字" orientation="right" />
    <Divider text="20%位置" orientation="20%" />
    <Divider text="70%位置" orientation="70%" />
    <Divider text="100%位置" orientation="100%" />
  </Space>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Divider text="左侧文字" orientation="left" />
    <Divider text="居中文字" orientation="center" />
    <Divider text="右侧文字" orientation="right" />
    <Divider text="20%位置" orientation="20%" /><!-- 自定义百分比位置 -->
    <Divider text="70%位置" orientation="70%" /><!-- 自定义百分比位置 -->
  </div>
</template>
```

</CollapsibleCode>

## 尺寸和边距

调整分割线的粗细（size）和外边距（margin）。

<Demo>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <Divider size="2" text="粗分割线" />
    <Divider size="1" margin="32" text="大边距分割线" />
    <Divider direction="vertical" size="3" style="height: 40px;" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">
    <Divider size="2" text="粗分割线" /><!-- 2px粗分割线 -->
    <Divider margin="32" text="大边距分割线" /><!-- 32px外边距 -->
    <Divider
      direction="vertical"
      size="3"
      style="height: 40px;"
    /><!-- 3px宽垂直分割线 -->
  </div>
</template>
```

</CollapsibleCode>

## 自定义颜色

通过 `color` 属性自定义分割线颜色，`textColor` 属性自定义文字颜色。

<Demo>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Divider color="var(--color-primary)" textColor="var(--color-primary)" text="主色分割线"  />
    <Divider color="var(--color-danger)" textColor="var(--color-danger)" text="危险色分割线" />
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Divider
      color="var(--color-primary)"
      textColor="var(--color-primary)"
      text="主色分割线"
    />
    <Divider
      color="var(--color-danger)"
      textColor="var(--color-danger)"
      text="危险色分割线"
    />
  </div>
</template>
```

</CollapsibleCode>

## Props

| 属性名      | 类型             | 默认值       | 说明                                                                                    |
| ----------- | ---------------- | ------------ | --------------------------------------------------------------------------------------- |
| direction   | string           | 'horizontal' | 分割线方向，可选值：'horizontal'（水平）、'vertical'（垂直）                            |
| orientation | string           | 'center'     | 文字位置，可选值：'left'（左）、'center'（中）、'right'（右）或百分比值（如 '20%'）     |
| ctype       | string           | 'solid'      | 样式类型，可选值：'solid'（实线）、'dashed'（虚线）、'dotted'（点线）、'double'（双线） |
| size        | number           | 1            | 分割线宽度/高度（px）                                                                   |
| margin      | number \| string | 16           | 外边距，支持数字（px）或字符串（如 '10px 20px'）                                        |
| text        | string           | ''           | 分割线文字内容                                                                          |
| textColor   | string           | ''           | 文字颜色，默认继承父元素                                                                |
| color       | string           | ''           | 分割线颜色，默认使用主题边框色                                                          |
