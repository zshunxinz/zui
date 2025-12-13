# Grid 网格布局

<script setup>
import GridDemo1 from '../demo/Grid/GridDemo1.vue';
import GridDemo2 from '../demo/Grid/GridDemo2.vue';
import GridDemo3 from '../demo/Grid/GridDemo3.vue';
import GridDemo4 from '../demo/Grid/GridDemo4.vue';
import GridDemo5 from '../demo/Grid/GridDemo5.vue';
import GridDemo6 from '../demo/Grid/GridDemo6.vue';
import GridDemo7 from '../demo/Grid/GridDemo7.vue';
import GridDemo8 from '../demo/Grid/GridDemo8.vue';
import GridDemo9 from '../demo/Grid/GridDemo9.vue';
import GridDemo10 from '../demo/Grid/GridDemo10.vue';
</script>

网格布局使用 24 列栅格系统，通过`Row`和`Col`组件快速创建响应式布局。

## 基础用法

通过`span`属性设置列占据的宽度，总计 24 列。

<style>
  :root{
    --bg-color-1:rgba(100, 100, 100, 0.05);
    --border-1:1px solid rgba(231, 231, 231, 0.125);
  }

    .z-col{
        background:rgb(148, 148, 255);
    }

    .demo-box{
      display: flex;
      align-items: center;
      justify-content: center;
      color:var(--color-text-1);
      background:hsl(217.2 91.2% 59.8%);
      border:1px solid hsla(200.6,94.4%,86.1%,0.5);
      background:var(--color-bg);
      border:1px solid var(--color-default);
      color:var(--color-default);
      padding:10px;
      margin:1px 1px;
    }
</style>

<Demo>
<GridDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo1.vue

</CollapsibleCode>

## 列间距

通过`gutter`属性设置列之间的间距，单位为`px`。

<Demo>
<GridDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo2.vue

</CollapsibleCode>

## 响应式布局

支持五种响应式尺寸，对应不同屏幕宽度：

- `xs`: <576px 超小屏幕
- `sm`: ≥576px 小屏幕
- `md`: ≥768px 中等屏幕
- `lg`: ≥992px 大屏幕
- `xl`: ≥1200px 超大屏幕

可传入数字指定列宽，或对象形式指定更复杂配置：

<Demo>
<GridDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo3.vue

</CollapsibleCode>

## 列偏移

通过`offset`属性设置列的偏移量，实现列之间的间距控制：

<Demo>
<GridDemo4/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo4.vue

</CollapsibleCode>

## 列排序

通过`push`（右移）和`pull`（左移）属性调整列的顺序：
<Demo>
<GridDemo5/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo5.vue

</CollapsibleCode>

## 对齐方式

### 垂直对齐

通过 Row 组件的`align`属性设置列的垂直对齐方式：
<Demo>
<GridDemo6/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo6.vue

</CollapsibleCode>

### 水平排列

通过 Row 组件的`justify`属性设置列的水平排列方式：
<Demo>
<GridDemo7/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo7.vue

</CollapsibleCode>

## 嵌套网格

Col 组件内部可以嵌套 Row 组件，实现复杂布局：
<Demo>
<GridDemo8/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo8.vue

</CollapsibleCode>

## 复杂响应式配置

Col 组件的`span`属性可以设置为数字或对象，用于响应式布局。例如：
<Demo>
<GridDemo9/>
</Demo>

<CollapsibleCode>

<<< ../demo/Grid/GridDemo9.vue

</CollapsibleCode>

## 典型页面布局

<Demo>
<GridDemo10/>
</Demo>

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

<CollapsibleCode>

<<< ../demo/Grid/GridDemo10.vue

</CollapsibleCode>

## 属性

### Row 属性

| 参数    | 说明         | 类型    | 可选值                                      | 默认值 |
| ------- | ------------ | ------- | ------------------------------------------- | ------ |
| gutter  | 列间距       | number  | —                                           | 0      |
| align   | 垂直对齐方式 | string  | top/middle/bottom                           | top    |
| justify | 水平排列方式 | string  | start/center/end/space-around/space-between | start  |
| wrap    | 是否换行     | boolean | —                                           | false  |

### Col 属性

| 参数   | 说明                          | 类型            | 可选值      | 默认值 |
| ------ | ----------------------------- | --------------- | ----------- | ------ |
| span   | 列跨度                        | number          | 0-24        | 24     |
| offset | 列偏移量                      | number          | 0-24        | 0      |
| push   | 列右移                        | number          | 0-24        | 0      |
| pull   | 列左移                        | number          | 0-24        | 0      |
| xs     | 超小屏幕响应式配置            | number/object   | 0-24/object | —      |
| sm     | 小屏幕响应式配置              | number/object   | 0-24/object | —      |
| md     | 中等屏幕响应式配置            | number/object   | 0-24/object | —      |
| lg     | 大屏幕响应式配置              | : number/object | 0-24/object | —      |
| xl     | 超大屏幕响应式配置（≥1200px） | number/object   | 0-24/object | —      |
| order  | 列排序                        | number          | —           | 0      |

### 响应式配置说明

当为响应式属性传入对象时，支持以下属性：
| 属性 | 说明 | 类型 | 可选值 |
|------|------|------|--------|
| span | 列跨度 | number | 0-24 |
| offset | 列偏移量 | number | 0-24 |
| push | 列右移 | number | 0-24 |
| pull | 列左移 | number | 0-24 |

示例：`{ span: 8, offset: 2 }`
