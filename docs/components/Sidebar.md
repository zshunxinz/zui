# Sidebar 侧边栏

侧边栏组件用于创建应用程序的导航侧边栏，支持多种布局、展开/折叠功能和响应式设计。

## 基础用法

<script setup>
import SidebarDemo1 from "../demo/Sidebar/SidebarDemo1.vue";
import SidebarDemo2 from "../demo/Sidebar/SidebarDemo2.vue";
import SidebarDemo3 from "../demo/Sidebar/SidebarDemo3.vue";
import SidebarDemo4 from "../demo/Sidebar/SidebarDemo4.vue";
import SidebarDemo5 from "../demo/Sidebar/SidebarDemo5.vue";
import SidebarDemo6 from "../demo/Sidebar/SidebarDemo6.vue";

</script>

<Demo :style="{ padding: '0px' }" center fullscreen>
  <SidebarDemo1  />
</Demo>

<CollapsibleCode>

<<< @/demo/Sidebar/SidebarDemo1.vue

</CollapsibleCode>

## 响应式侧边栏

通过响应式设计，侧边栏可以根据屏幕尺寸自动调整其行为，支持折叠和展开功能。<br>
设置 `enableResponsive` 属性为 `true` 即可启用响应式侧边栏。<br>
v-model:defaultOpen="active" 绑定侧边栏展开/收起状态，当屏幕宽度小于 `breakpoint` 时，侧边栏会自动折叠，active 值会自动设置为 `false`。<br>
v-model:isMobile="isMobile" 判定是为移动设备，当屏幕宽度小于 `breakpoint-mobile` 时，isMobile 值会自动设置为 `true`。<br>
设置 `breakpoint` 属性为屏幕宽度阈值，当屏幕宽度小于该值时，active 值会自动设置为 `false`。<br>
设置 `breakpoint-mobile` 属性为移动设备屏幕宽度阈值，当屏幕宽度小于该值时，isMobile 值会自动设置为 `true`。

<Demo :style="{ padding: '0px' }" center fullscreen>
  <SidebarDemo2 />
</Demo>

<CollapsibleCode>

<<< @/demo/Sidebar/SidebarDemo2.vue

</CollapsibleCode>

## 嵌套导航侧边栏

通过侧边栏的分组功能，可以创建带有层级结构的嵌套导航菜单，适用于复杂的应用导航场景。
<Demo :style="{ padding: '0px' }" center fullscreen>
<SidebarDemo3 />
</Demo>

<CollapsibleCode>

<<< @/demo/Sidebar/SidebarDemo3.vue

</CollapsibleCode>

## 自定义样式侧边栏

侧边栏支持丰富的样式自定义选项，可以根据品牌需求定制不同的主题风格和视觉效果。
<Demo :style="{ padding: '0px' }" center fullscreen>
<SidebarDemo4 />
</Demo>

<CollapsibleCode>

<<< @/demo/Sidebar/SidebarDemo4.vue

</CollapsibleCode>

<Demo :style="{ padding: '0px' }" center fullscreen>
<SidebarDemo5 />
</Demo>

<CollapsibleCode>

<<< @/demo/Sidebar/SidebarDemo5.vue

</CollapsibleCode>

侧边栏提供简单模式，只需配置。

<Demo :style="{ padding: '0px' }" center fullscreen>
<SidebarDemo6 />
</Demo>

<CollapsibleCode>

<<< @/demo/Sidebar/SidebarDemo6.vue

</CollapsibleCode>

## 组件组成

Sidebar 组件由以下多个子组件组成，它们共同协作提供完整的侧边栏功能：

| 组件名称            | 说明                                        |
| ------------------- | ------------------------------------------- |
| SidebarProvider     | 侧边栏提供者，管理侧边栏的展开/折叠状态     |
| Sidebar             | 侧边栏容器，控制侧边栏的布局和样式          |
| SidebarTrigger      | 侧边栏触发器，用于切换侧边栏的展开/折叠状态 |
| SidebarHeader       | 侧边栏头部，用于放置标题和 logo             |
| SidebarContent      | 侧边栏内容区域，支持自定义滚动条            |
| SidebarFooter       | 侧边栏底部，可用于显示用户信息等            |
| SidebarGroup        | 侧边栏分组，用于组织菜单项                  |
| SidebarGroupLabel   | 侧边栏分组标签，显示分组名称                |
| SidebarGroupContent | 侧边栏分组内容，包含具体的菜单项            |
| SidebarMenu         | 侧边栏菜单容器                              |
| SidebarMenuItem     | 侧边栏菜单项                                |
| SidebarMenuButton   | 侧边栏菜单按钮，支持激活状态                |

## 布局方式

侧边栏支持多种布局方式，包括：

1. **固定宽度布局**：侧边栏保持固定宽度，内容区域占据剩余空间
2. **可折叠布局**：侧边栏可以折叠为图标模式，节省空间
3. **响应式布局**：在移动设备上，侧边栏可以切换为覆盖层模式

## 使用指南

### 基本结构

使用 Sidebar 组件的基本结构如下：

```vue
<SidebarProvider>
  <div class="container">
    <Sidebar>
      <SidebarHeader>
        <!-- 头部内容 -->
      </SidebarHeader>

      <SidebarContent>
        <!-- 侧边栏内容 -->
        <SidebarMenu>
          <!-- 菜单项 -->
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <!-- 底部内容 -->
      </SidebarFooter>
    </Sidebar>

    <!-- 主内容区域 -->
    <main>
      <!-- 主内容 -->
    </main>
  </div>
</SidebarProvider>
```

### 创建菜单项

可以使用 SidebarMenu、SidebarMenuItem 和 SidebarMenuButton 组件创建菜单项：

```vue
<SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton active>
      <Icon />
      <span>首页</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuButton>
      <Icon />
      <span>设置</span>
    </SidebarMenuButton>
  </SidebarMenuItem>
</SidebarMenu>
```

### 分组菜单

使用 SidebarGroup、SidebarGroupLabel 和 SidebarGroupContent 组件可以对菜单项进行分组：

```vue
<SidebarGroup>
  <SidebarGroupLabel>主导航</SidebarGroupLabel>
  <SidebarGroupContent>
    <!-- 菜单项 -->
  </SidebarGroupContent>
</SidebarGroup>

<SidebarGroup>
  <SidebarGroupLabel>设置</SidebarGroupLabel>
  <SidebarGroupContent>
    <!-- 菜单项 -->
  </SidebarGroupContent>
</SidebarGroup>
```

## CSS 变量

侧边栏组件使用以下 CSS 变量控制样式，可以在全局或局部进行自定义：

```css
:root {
  --sidebar-background: var(--color-background);
  --sidebar-foreground: var(--color-text);
  --sidebar-primary: var(--color-primary);
  --sidebar-primary-foreground: var(--color-primary-text-1);
  --sidebar-accent: var(--color-bg-hover-1);
  --sidebar-accent-foreground: var(--color-text);
  --sidebar-border: var(--color-border);
  --sidebar-ring: var(--color-primary);
  --sidebar-width: 240px;
  --sidebar-collapsed-width: 72px;
}
```

## 注意事项

1. 确保 SidebarProvider 组件包裹在 Sidebar 和触发其状态的组件之外
2. 在移动设备上，建议使用触发按钮来控制侧边栏的显示和隐藏
3. 使用 SVG 图标时，确保图标尺寸一致，以获得最佳视觉效果
4. 可以根据项目需要自定义侧边栏的宽度、背景色等样式
