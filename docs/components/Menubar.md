# Menubar 菜单栏

Menubar 菜单栏组件用于创建应用程序顶部的导航菜单，支持多级菜单、快捷键显示和禁用状态等功能，常用于桌面应用程序或复杂网站的导航系统。

## 基础用法

<script setup>
import MenubarDemo1 from "/demo/Menubar/MenubarDemo1.vue";
import MenubarDemo2 from "/demo/Menubar/MenubarDemo2.vue";
import MenubarDemo3 from "/demo/Menubar/MenubarDemo3.vue";
import MenubarDemoStyles from "/demo/Menubar/MenubarDemoStyles.vue";

</script>

<MenubarDemoStyles/>

<Demo>
<MenubarDemo1/>
</Demo>

<CollapsibleCode>

<<< ../demo/Menubar/MenubarDemo1.vue

</CollapsibleCode>

## 禁用状态

通过设置 `disabled` 属性，可以禁用整个菜单栏或特定的菜单项。

<Demo>
<MenubarDemo2/>
</Demo>

<CollapsibleCode>

<<< ../demo/Menubar/MenubarDemo2.vue

</CollapsibleCode>

## 带点击事件的菜单项

通过设置 `onClick` 属性，可以为菜单项添加点击事件处理函数。

<Demo>
<MenubarDemo3/>
</Demo>

<CollapsibleCode>

<<< ../demo/Menubar/MenubarDemo3.vue

</CollapsibleCode>

## Menubar Props

| 属性名   | 类型      | 默认值  | 说明               |
| -------- | --------- | ------- | ------------------ |
| disabled | `boolean` | `false` | 是否禁用整个菜单栏 |

## MenubarMenu Props

| 属性名 | 类型     | 默认值 | 说明               |
| ------ | -------- | ------ | ------------------ |
| id     | `string` | -      | 菜单项的唯一标识符 |

## MenubarTrigger Props

| 属性名   | 类型      | 默认值  | 说明           |
| -------- | --------- | ------- | -------------- |
| disabled | `boolean` | `false` | 是否禁用触发器 |

## MenubarItem Props

| 属性名   | 类型       | 默认值      | 说明                 |
| -------- | ---------- | ----------- | -------------------- |
| disabled | `boolean`  | `false`     | 是否禁用菜单项       |
| onClick  | `function` | `undefined` | 菜单项的点击回调函数 |

## 插槽

### Menubar

- **default**: 用于放置 MenubarMenu 组件。

### MenubarMenu

- **default**: 用于放置 MenubarTrigger 和 MenubarContent 组件。

### MenubarTrigger

- **default**: 用于设置菜单触发器的文本内容。

### MenubarContent

- **default**: 用于放置 MenubarItem 和 MenubarSeparator 组件。

### MenubarItem

- **default**: 用于设置菜单项的文本内容。
- **shortcut**: 用于设置快捷键显示，通常与 MenubarShortcut 组件一起使用。

### MenubarShortcut

- **default**: 用于设置快捷键的文本内容。

## 键盘交互

- **Enter/Space**: 激活当前选中的菜单项或触发器。
- **Escape**: 关闭当前打开的菜单。
- **Arrow keys**: 在打开的菜单中导航菜单项。

<!-- ## Accessibility

Menubar 组件遵循 WAI-ARIA 设计模式，提供了适当的 ARIA 属性，包括：

- `role="menu"` 和 `role="menuitem"` 等在相应的元素上
- `aria-expanded` 用于标识菜单的展开状态
- `aria-disabled` 用于标识禁用状态

这些属性确保了组件对屏幕阅读器和其他辅助技术的良好支持。 -->
