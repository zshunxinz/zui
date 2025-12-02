<script setup lang="ts">
import { ref, computed, inject } from 'vue';

interface SidebarProps {
  collapsedWidth?: number;
  width?: number;
  overlay?: boolean; // 是否在移动设备上显示覆盖层
  enableResponsive?: boolean; // 是否启用响应式功能
  style?: Record<string, any>; // 自定义样式
}

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsedWidth: 49,
  width: 240,
  overlay: true, // 默认在移动设备上显示覆盖层
  enableResponsive: false, // 默认不启用响应式
  style: () => ({}),
});

const sidebar: any = inject('sidebar');
const open = sidebar?.open || ref(true);
const isMobile = sidebar?.isMobile || ref(false);

const computedWidth = computed(() => {
  // 只有在启用响应式的情况下才使用响应式宽度逻辑
  if (props.enableResponsive && isMobile.value && props.overlay) {
    return '100vw';
  }
  return open.value ? props.width : props.collapsedWidth;
});

const isCollapsed = computed(() => !open.value);

// 在移动设备上添加遮罩层类名
const showOverlay = computed(() => {
  return props.enableResponsive && isMobile.value && props.overlay && open.value;
});
</script>

<template>
  <aside
    class="Sidebar"
    :class="{
      'Sidebar--closed': !open,
      'Sidebar--mobile': props.enableResponsive && isMobile,
      'Sidebar--overlay': props.overlay && props.enableResponsive && isMobile,
    }"
    :style="{ width: typeof computedWidth === 'string' ? computedWidth : `${computedWidth}px`, ...props.style }"
  >
    <slot />
  </aside>

  <!-- 移动端遮罩层 -->
  <div
    v-if="showOverlay"
    class="SidebarOverlay"
    @click="sidebar?.toggle?.()"
  />
</template>

<style scoped>
.Sidebar {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: var(--sidebar-background);
  border-right: 1px solid var(--sidebar-border);
  transition: all 0.3s ease;
  z-index: 50;
  min-width: 0;
}

/* 桌面端样式 */
@media (min-width: 769px) {
  .Sidebar {
    position: relative;
    z-index: 50;
  }
}

/* 移动端样式 - 只有在启用响应式时才应用 */
@media (max-width: 768px) {
  .Sidebar--mobile {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .Sidebar--mobile.Sidebar--closed {
    transform: translateX(-100%);
  }

  .Sidebar--mobile:not(.Sidebar--closed) {
    transform: translateX(0);
  }

  .Sidebar--overlay {
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  }
}

/* 遮罩层样式 */
.SidebarOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
