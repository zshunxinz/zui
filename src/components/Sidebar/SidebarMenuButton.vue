<script setup lang="ts">
interface SidebarMenuButtonProps {
  asChild?: boolean;
  active?: boolean;
  center?: boolean;
}

const props = withDefaults(defineProps<SidebarMenuButtonProps>(), {
  asChild: false,
  active: false,
  center: false,
});

const Comp = props.asChild ? 'span' : 'button';
const buttonProps = props.asChild
  ? {}
  : {
      type: 'button',
    };
</script>

<template>
  <Comp
    :as-child="props.asChild"
    v-bind="buttonProps"
    class="SidebarMenuButton"
    :class="{
      'SidebarMenuButton--center': props.center,
      'SidebarMenuButton--active': props.active,
    }"
  >
    <slot />
  </Comp>
</template>

<style scoped>
.SidebarMenuButton {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  width: 100%;
  padding: var(--padding-1);
  /* margin-top: var(--space-1); */
  /* margin-bottom: var(--space-1); */
  border-radius: var(--border-radius);
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  text-decoration: none;
  /* 添加平滑过渡动画 */
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  /* 防止文本换行和跳动 */
  white-space: nowrap;
  text-overflow: ellipsis;
  /* 确保高度固定，防止布局跳动 */
  box-sizing: border-box;
}

.SidebarMenuButton--center {
  justify-content: center;
}

.SidebarMenuButton:hover {
  background-color: var(--color-bg-hover-1);
  transform: translateY(-1px);
}

.SidebarMenuButton:active {
  transform: translateY(0);
}

.SidebarMenuButton--active {
  background-color: var(--color-bg-hover-1);
  color: var(--color-primary);
  font-weight: 500;
}

/* 默认所有内容都可见 */
:slotted(*) {
  opacity: 1;
  transform: translateX(0);
}

/* 文字内容始终完全显示 */
:slotted(.menu-text),
:slotted(.text),
:slotted(
  span:not([class*='icon']):not([class*='Icon']):not([class*='svg']):not(
      [data-icon]
    )
) {
  opacity: 1;
  transform: translateX(0);
}

/* 悬停时文字保持稳定 */
.SidebarMenuButton:hover :slotted(.menu-text),
.SidebarMenuButton:hover :slotted(.text),
.SidebarMenuButton:hover
  :slotted(
    span:not([class*='icon']):not([class*='Icon']):not([class*='svg']):not(
        [data-icon]
      )
  ) {
  opacity: 1;
  transform: translateX(0);
}

/* 激活状态文字保持稳定 */
.SidebarMenuButton--active :slotted(.menu-text),
.SidebarMenuButton--active :slotted(.text),
.SidebarMenuButton--active
  :slotted(
    span:not([class*='icon']):not([class*='Icon']):not([class*='svg']):not(
        [data-icon]
      )
  ) {
  opacity: 1;
  transform: translateX(0);
}

/* 确保图标、SVG等元素始终清晰可见 */
:slotted([class*='icon']),
:slotted([class*='Icon']),
:slotted(svg),
:slotted([class*='svg']),
:slotted([data-icon]) {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

/* 悬停时图标保持稳定 */
.SidebarMenuButton:hover :slotted([class*='icon']),
.SidebarMenuButton:hover :slotted([class*='Icon']),
.SidebarMenuButton:hover :slotted(svg),
.SidebarMenuButton:hover :slotted([class*='svg']),
.SidebarMenuButton:hover :slotted([data-icon]) {
  transform: translateX(0);
}

/* 按钮内的其他默认内容正常显示 */
:slotted(button),
:slotted(a),
:slotted(div:not(.menu-text):not(.text)) {
  opacity: 1;
  transform: translateX(0);
}

/* 确保内容区域稳定 */
:slotted(.content) {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 居中模式下文字居中 */
.SidebarMenuButton--center :slotted(.menu-text),
.SidebarMenuButton--center :slotted(.text) {
  text-align: center;
  width: 100%;
}

/* 悬停状态下的整体增强效果 */
.SidebarMenuButton:hover {
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); */
}

.SidebarMenuButton--active {
  /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
}
</style>
