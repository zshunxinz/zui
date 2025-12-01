<script setup lang="ts">
import { provide, ref, watch, onMounted, onUnmounted } from 'vue';

interface SidebarProviderProps {
  defaultOpen?: boolean;
  breakpoint?: number; // 响应式断点，单位为像素
  enableResponsive?: boolean; // 是否启用响应式功能
}

const props = withDefaults(defineProps<SidebarProviderProps>(), {
  defaultOpen: true,
  breakpoint: 768, // 默认 768px
  enableResponsive: false, // 默认不启用响应式
});

const open = ref(props.defaultOpen);
const isMobile = ref(false);
let mediaQuery: MediaQueryList | null = null;

// 检查是否为移动设备
const checkScreenSize = () => {
  if (typeof window !== 'undefined' && props.enableResponsive) {
    isMobile.value = window.innerWidth < props.breakpoint;

    // 在移动设备上默认收起
    if (isMobile.value && props.defaultOpen) {
      open.value = false;
    }
  }
};

// 设置媒体查询监听
const setupMediaQueryListener = () => {
  if (typeof window !== 'undefined' && props.enableResponsive) {
    const query = `(max-width: ${props.breakpoint}px)`;
    mediaQuery = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => {
      isMobile.value = e.matches;

      // 当进入移动视图时自动收起
      if (e.matches) {
        open.value = false;
      }
      // 当离开移动视图时，如果用户没有手动收起，保持默认状态
      else if (props.defaultOpen) {
        open.value = true;
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    checkScreenSize(); // 初始化检查
  }
};

const toggle = () => {
  open.value = !open.value;
};

// 监听defaultOpen属性变化，同步更新open状态
watch(
  () => props.defaultOpen,
  newValue => {
    if (newValue !== undefined && !props.enableResponsive) {
      open.value = newValue;
    }
  }
);

onMounted(() => {
  setupMediaQueryListener();
});

onUnmounted(() => {
  if (mediaQuery) {
    // 正确清理媒体查询监听器
    mediaQuery.removeEventListener('change', () => {});
  }
});

const context = {
  open,
  toggle,
  isMobile,
};

provide('sidebar', context);
</script>

<template>
  <div :data-sidebar="true">
    <slot />
  </div>
</template>

<style scoped>
[data-sidebar] {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
