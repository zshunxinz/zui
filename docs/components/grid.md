# Grid 网格布局

网格布局使用24列栅格系统，通过`Row`和`Col`组件快速创建响应式布局。

## 基础用法

通过`span`属性设置列占据的宽度，总计24列。


<script setup>
// import Button from '../../src/components/Button.vue'
// import ButtonGroup from '../../src/components/ButtonGroup.vue'
// import Row from '../../src/components/Row.vue'
// import Col from '../../src/components/Col.vue'
</script>
<style>
  :root{
    --bg-color-1:rgba(100, 100, 100, 0.05);
    --border-1:1px solid rgba(231, 231, 231, 0.125);
  }
  
    .x-col{
        background:rgb(148, 148, 255); 
    }

    .demo-box{
      text-align: center; 
      background:rgb(148, 148, 255);
      border:1px solid rgba(25, 25, 25, 0.5);
      padding:10px;
    }
</style>

<Row>
  <Col :span="12"><div class="demo-box">col-12</div></Col>
  <Col :span="12"><div class="demo-box">col-12</div></Col>
</Row>
<Row>
  <Col :span="8"><div class="demo-box">col-8</div></Col>
  <Col :span="8"><div class="demo-box">col-8</div></Col>
  <Col :span="8"><div class="demo-box">col-8</div></Col>
</Row>
<Row>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
</Row>

```vue
<template>
<Row>
  <Col :span="12"><div class="demo-box">col-12</div></Col>
  <Col :span="12"><div class="demo-box">col-12</div></Col>
</Row>
<Row>
  <Col :span="8"><div class="demo-box">col-8</div></Col>
  <Col :span="8"><div class="demo-box">col-8</div></Col>
  <Col :span="8"><div class="demo-box">col-8</div></Col>
</Row>
<Row>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
</Row>
</template>
```

## 列间距

通过`gutter`属性设置列之间的间距，单位为`px`。

<Row :gutter="16">
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
  <Col :span="6"><div class="demo-box">col-6</div></Col>
</Row>

```vue
<template>
  <Row :gutter="16">
    <Col :span="6"><div class="demo-box">col-6</div></Col>
    <Col :span="6"><div class="demo-box">col-6</div></Col>
    <Col :span="6"><div class="demo-box">col-6</div></Col>
    <Col :span="6"><div class="demo-box">col-6</div></Col>
  </Row>
</template>
```

## 响应式布局

支持五种响应式尺寸，对应不同屏幕宽度：
- `xs`: <576px 超小屏幕
- `sm`: ≥576px 小屏幕
- `md`: ≥768px 中等屏幕
- `lg`: ≥992px 大屏幕
- `xl`: ≥1200px 超大屏幕

可传入数字指定列宽，或对象形式指定更复杂配置：

<Row>
  <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
    <div class="demo-box">响应式列</div>
  </Col>
  <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
    <div class="demo-box">响应式列</div>
  </Col>
  <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
    <div class="demo-box">响应式列</div>
  </Col>
  <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
    <div class="demo-box">响应式列</div>
  </Col>
  <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
    <div class="demo-box">响应式列</div>
  </Col>
  <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
    <div class="demo-box">响应式列</div>
  </Col>
</Row>


```vue
<template>
  <Row>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div class="demo-box">响应式列</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div class="demo-box">响应式列</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div class="demo-box">响应式列</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div class="demo-box">响应式列</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div class="demo-box">响应式列</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div class="demo-box">响应式列</div>
    </Col>
    <Col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
      <div class="demo-box">响应式列</div>
    </Col>
  </Row>
</template>
```

## 列偏移

通过`offset`属性设置列的偏移量，实现列之间的间距控制：

<Row>
  <Col :span="8">
    <div class="demo-box">col-8</div>
  </Col>
  <Col :span="8" :offset="8">
    <div class="demo-box">col-8 offset-8</div>
  </Col>
  
</Row>

```vue
<template>
  <Row>
    <Col :span="8">
      <div class="demo-box">col-8</div>
    </Col>
    <Col :span="8" :offset="8">
      <div class="demo-box">col-8 offset-8</div>
    </Col>
  </Row>
</template>
```

## 列排序

通过`push`（右移）和`pull`（左移）属性调整列的顺序：

<Row :gutter="16">
  <Col :span="6" :push="8" style="background:rgb(173, 255, 207);">
    <div class="demo-box">span: 10, push: 14（向右移动14列）</div>
  </Col>
  <Col :span="6" :pull="5" style="background:rgb(255, 207, 173);">
    <div class="demo-box">span: 14, pull: 10（向左移动10列）</div>
  </Col>
</Row>

```vue
<template>
  <Row :gutter="16">
    <Col :span="10" :push="14" style="background: #f0f0f0; padding: 10px;">span: 10, push: 14（向右移动14列）</Col>
    <Col :span="14" :pull="10" style="background: #f0f0f0; padding: 10px;">span: 14, pull: 10（向左移动10列）</Col>
  </Row>
</template>
```

## 对齐方式

### 垂直对齐

通过Row组件的`align`属性设置列的垂直对齐方式：

<Row align="top" style="height: 100px; background:var(--bg-color-1); margin-bottom: 10px;border:var(--border-1);">

  <Col :span="8" ><div class="demo-box">align: top</div></Col>
</Row>
<Row align="middle" style="height: 100px; background:var(--bg-color-1); margin-bottom: 10px;border:var(--border-1);">
  <Col :span="8" ><div class="demo-box">垂直居中对齐</div></Col>
</Row>
<Row align="bottom" style="height: 100px; background:var(--bg-color-1); margin-bottom: 10px;border:var(--border-1);">
  <Col :span="8" ><div class="demo-box">垂直底部对齐</div></Col>
</Row>

```vue
<script setup>
import Row from '../../src/components/Row.vue'
import Col from '../../src/components/Col.vue'
</script>
<template>
  <Row align="top" style="height: 100px; background: #f5f5f5; margin-bottom: 10px;">
    <Col :span="8" style="height: 30px; background: #ccc;">align: top</Col>
    <Col :span="8" style="height: 60px; background: #ccc;">垂直顶部对齐</Col>
  </Row>
  <Row align="middle" style="height: 100px; background: #f5f5f5; margin-bottom: 10px;">
    <Col :span="8" style="height: 30px; background: #ccc;">align: middle</Col>
    <Col :span="8" style="height: 60px; background: #ccc;">垂直居中对齐</Col>
  </Row>
  <Row align="bottom" style="height: 100px; background: #f5f5f5;">
    <Col :span="8" style="height: 30px; background: #ccc;">align: bottom</Col>
    <Col :span="8" style="height: 60px; background: #ccc;">垂直底部对齐</Col>
  </Row>
</template>
```

### 水平排列

通过Row组件的`justify`属性设置列的水平排列方式：

<Row justify="start" style="background: var(--bg-color-1); margin-bottom: 10px;">
  <Col :span="8" class="demo-box">justify: start</Col>
  <Col :span="8" class="demo-box">左对齐</Col>
</Row>
<Row justify="center" style="background: var(--bg-color-1); margin-bottom: 10px;">
  <Col :span="8" class="demo-box">justify: center</Col>
  <Col :span="8" class="demo-box">居中对齐</Col>
</Row>
<Row justify="end" style="background: var(--bg-color-1); margin-bottom: 10px;">
  <Col :span="8" class="demo-box">justify: end</Col>
  <Col :span="8" class="demo-box">右对齐</Col>
</Row>
<Row justify="space-around" style="background: var(--bg-color-1); margin-bottom: 10px;">
  <Col :span="8" class="demo-box">justify: space-around</Col>
  <Col :span="8" class="demo-box">等距环绕</Col>
</Row>
<Row justify="space-between" style="background: var(--bg-color-1);">
  <Col :span="8" class="demo-box">justify: space-between</Col>
  <Col :span="8" class="demo-box">两端对齐</Col>
</Row>

```vue
<template>
  <Row justify="start" style="background: #f5f5f5; margin-bottom: 10px;">
    <Col :span="8" class="demo-box">justify: start</Col>
    <Col :span="8" class="demo-box">左对齐</Col>
  </Row>
  <Row justify="center" style="background: #f5f5f5; margin-bottom: 10px;">
    <Col :span="8" class="demo-box">justify: center</Col>
    <Col :span="8" class="demo-box">居中对齐</Col>
  </Row>
  <Row justify="end" style="background: #f5f5f5; margin-bottom: 10px;">
    <Col :span="8" class="demo-box">justify: end</Col>
    <Col :span="8" class="demo-box">右对齐</Col>
  </Row>
  <Row justify="space-around" style="background: #f5f5f5; margin-bottom: 10px;">
    <Col :span="8" class="demo-box">justify: space-around</Col>
    <Col :span="8" class="demo-box">等距环绕</Col>
  </Row>
  <Row justify="space-between" style="background: #f5f5f5;">
    <Col :span="8" class="demo-box">justify: space-between</Col>
    <Col :span="8" class="demo-box">两端对齐</Col>
  </Row>
</template>
```

## 嵌套网格

Col组件内部可以嵌套Row组件，实现复杂布局：
<Row :gutter="10">
  <Col :span="12">
      <Col :span="24" class="demo-box">嵌套列 1</Col>
      <Col :span="24" class="demo-box">嵌套列 1</Col>
      <Row>
          <Col :span="6" class="demo-box">嵌套列 3</Col>
          <Col :span="12" class="demo-box">嵌套列 4</Col>
          <Col :span="6" class="demo-box">嵌套列 5</Col>
      </Row>
  </Col>
  <Col :span="12" >
    <Col :span="24" class="demo-box">嵌套列 3</Col>
    <Col :span="24" class="demo-box">嵌套列 4</Col>
    <Col :span="24">
      <Row :gutter="10" :span="24" justify="space-between">
        <Col :span="6" class="demo-box">嵌套列 3</Col>
        <Col :span="6" class="demo-box">嵌套列 3</Col>
      </Row>
    </Col>
  </Col>
</Row>

```vue
<template>
  <Row :gutter="12">
    <Col :span="12">
        <Col :span="24" class="demo-box">嵌套列 1</Col>
        <Col :span="24" class="demo-box">嵌套列 2</Col>
    </Col>
    <Col :span="12">
      <Col :span="24" class="demo-box">嵌套列 3</Col>
      <Col :span="24" class="demo-box">嵌套列 4</Col>
      <Row>
        <Col :span="12" class="demo-box">嵌套列 3</Col>
        <Col :span="12" class="demo-box">嵌套列 4</Col>
      </Row>
    </Col>
  </Row>
</template>
```

## 复杂响应式配置

Col组件的`span`属性可以设置为数字或对象，用于响应式布局。例如：


<Row>
  <Col 
    :xs="{ span: 5, offset: 1 }" 
    :lg="{ span: 6, offset: 2 }"
  class="demo-box">
    Col
  </Col>
  <Col 
    :xs="{ span: 11, offset: 1 }" 
    :lg="{ span: 6, offset: 2 }"
  class="demo-box">
    Col
  </Col>
  <Col 
    :xs="{ span: 5, offset: 1 }" 
    :lg="{ span: 6, offset: 2 }"
  class="demo-box">
    Col
  </Col>
</Row>

```vue
<template>
  <Row>
    <Col 
      :xs="{ span: 5, offset: 1 }" 
      :lg="{ span: 6, offset: 2 }"
    class="demo-box">
      Col
    </Col>
    <Col 
      :xs="{ span: 11, offset: 1 }" 
      :lg="{ span: 6, offset: 2 }"
    class="demo-box">
      Col
    </Col>
    <Col 
      :xs="{ span: 5, offset: 1 }" 
      :lg="{ span: 6, offset: 2 }"
    class="demo-box">
      Col
    </Col>
  </Row>
</template>

```

## 典型页面布局

<div class="page-layout">
  <Row>
    <Col :span="24" >
      <header class="header">Header</header>
    </Col>
  </Row>
  <Row>
    <Col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
      <aside class="sidebar">Sidebar</aside>
    </Col>
    <Col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
      <main class="main-content">Main Content</main>
    </Col>
    <Col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
      <aside class="right-sidebar">Right Sidebar</aside>
    </Col>
  </Row>
  <Row>
    <Col :span="24">
      <footer class="footer">Footer</footer>
    </Col>
  </Row>
</div>

<style scoped>
.page-layout {
  /* min-height: 100vh; */
}

.header, .footer {
  background: #001529;
  color: white;
  text-align: center;
  padding: 20px;
}

.sidebar, .right-sidebar {
  background:rgb(250, 250, 250);
  min-height: 400px;
  padding: 20px;
  border: 1px solid rgb(228, 228, 231);
}

.main-content {
  background: white;
  min-height: 400px;
  padding: 20px;
  border: 1px solid rgb(228, 228, 231);
}
</style>


```vue
<template>
  <div class="page-layout">
    <Row>
      <Col :span="24" >
        <header class="header">Header</header>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
        <aside class="sidebar">Sidebar</aside>
      </Col>
    <Col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
      <main class="main-content">Main Content</main>
    </Col>
    <Col :xs="24" :sm="24" :md="6" :lg="4" :xl="4">
      <aside class="right-sidebar">Right Sidebar</aside>
    </Col>
    </Row>
    <Row>
      <Col :span="24">
        <footer class="footer">Footer</footer>
      </Col>
    </Row>
  </div>
</template>

```


## 属性

### Row 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| gutter | 列间距 | number | — | 0 |
| align | 垂直对齐方式 | string | top/middle/bottom | top |
| justify | 水平排列方式 | string | start/center/end/space-around/space-between | start |
| wrap | 是否换行 | boolean | — | false |


### Col 属性

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| span | 列跨度 | number | 0-24 | 24 |
| offset | 列偏移量 | number | 0-24 | 0 |
| push | 列右移 | number | 0-24 | 0 |
| pull | 列左移 | number | 0-24 | 0 |
| xs | 超小屏幕响应式配置 | number/object | 0-24/object | — |
| sm | 小屏幕响应式配置 | number/object | 0-24/object | — |
| md | 中等屏幕响应式配置 | number/object | 0-24/object | — |
| lg | 大屏幕响应式配置 |: number/object | 0-24/object | — |
| xl | 超大屏幕响应式配置（≥1200px） | number/object | 0-24/object | — |
| order | 列排序 | number | — | 0 |

### 响应式配置说明
当为响应式属性传入对象时，支持以下属性：
| 属性 | 说明 | 类型 | 可选值 |
|------|------|------|--------|
| span | 列跨度 | number | 0-24 |
| offset | 列偏移量 | number | 0-24 |
| push | 列右移 | number | 0-24 |
| pull | 列左移 | number | 0-24 |

示例：`{ span: 8, offset: 2 }`