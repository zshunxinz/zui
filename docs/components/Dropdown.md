# Dropdown 下拉菜单

下拉菜单组件，用于展示一组可选择的选项。

<script setup>
import DropdownDemo1 from '../demo/Dropdown/DropdownDemo1.vue';
import DropdownDemo2 from '../demo/Dropdown/DropdownDemo2.vue';
import DropdownDemo3 from '../demo/Dropdown/DropdownDemo3.vue';
</script>

<style scoped>
.dropdown-docs {
  padding: 20px 0;
}
</style>

## 基础用法

下拉菜单的基本用法，通过点击或悬停触发器来展开菜单。

<Demo>
  <DropdownDemo1 />
</Demo>

<CollapsibleCode>

<<< ../demo/Dropdown/DropdownDemo1.vue

</CollapsibleCode>

## 在Breadcrumb中使用

下拉菜单可以与Breadcrumb组件结合使用，实现复杂的导航结构。

<Demo>
  <DropdownDemo2 />
</Demo>

<CollapsibleCode>

<<< ../demo/Dropdown/DropdownDemo2.vue

</CollapsibleCode>

## 高级下拉菜单

支持菜单标题、分组、键盘快捷键和多级子菜单的完整下拉菜单。

<Demo>
  <DropdownDemo3 />
</Demo>

<CollapsibleCode>

<<< ../demo/Dropdown/DropdownDemo3.vue

</CollapsibleCode>

## 属性

### Dropdown

| 参数      | 说明             | 类型    | 可选值     | 默认值 |
| --------- | ---------------- | ------- | ---------- | ------ |
| hoverable | 是否支持悬停触发 | boolean | true/false | false  |

### DropdownMenuTrigger

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuContent

| 参数     | 说明       | 类型   | 可选值           | 默认值 |
| -------- | ---------- | ------ | ---------------- | ------ |
| align    | 对齐方式   | string | start/center/end | center |
| position | 位置       | string | top/bottom       | bottom |
| class    | 自定义类名 | string | -                | -      |

### DropdownMenuItem

| 参数     | 说明       | 类型    | 可选值     | 默认值 |
| -------- | ---------- | ------- | ---------- | ------ |
| disabled | 是否禁用   | boolean | true/false | false  |
| class    | 自定义类名 | string  | -          | -      |

### DropdownMenuLabel

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuGroup

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuSeparator

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuShortcut

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuSub

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuSubTrigger

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuSubContent

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

### DropdownMenuPortal

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| class | 自定义类名 | string | -      | -      |

## 事件

### DropdownMenuItem

| 事件名称 | 说明             | 回调参数            |
| -------- | ---------------- | ------------------- |
| click    | 点击菜单项时触发 | (event: MouseEvent) |
