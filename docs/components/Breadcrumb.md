# Breadcrumb 面包屑

用于显示当前页面在网站层级结构中的位置，并通过导航链接帮助用户快速返回之前的页面。

<script setup>
import BreadcrumbDemo1 from '../demo/Breadcrumb/BreadcrumbDemo1.vue';
import BreadcrumbDemo2 from '../demo/Breadcrumb/BreadcrumbDemo2.vue';
</script>

## 基础用法

面包屑的基本用法，展示页面层级关系。

<Demo>
  <BreadcrumbDemo1 />
</Demo>

<CollapsibleCode>

<<< ../demo/Breadcrumb/BreadcrumbDemo1.vue

</CollapsibleCode>

## 与Dropdown结合使用

面包屑可以与Dropdown组件结合使用，实现复杂的导航结构。

<Demo>
  <BreadcrumbDemo2 />
</Demo>

<CollapsibleCode>

<<< ../demo/Breadcrumb/BreadcrumbDemo2.vue

</CollapsibleCode>

## 属性

### Breadcrumb

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### BreadcrumbList

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### BreadcrumbItem

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### BreadcrumbLink

| 参数     | 说明                   | 类型    | 可选值     | 默认值 |
| -------- | ---------------------- | ------- | ---------- | ------ |
| as-child | 是否使用子元素作为链接 | boolean | true/false | false  |
| disabled | 是否禁用               | boolean | true/false | false  |
| class    | 自定义类名             | string  | -          | -      |

### BreadcrumbSeparator

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### BreadcrumbPage

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

## 插槽

### BreadcrumbSeparator

| 插槽名称 | 说明             |
| -------- | ---------------- |
| default  | 自定义分隔符内容 |

### BreadcrumbPage

| 插槽名称 | 说明         |
| -------- | ------------ |
| default  | 当前页面名称 |
