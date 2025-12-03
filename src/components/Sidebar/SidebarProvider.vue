<script setup lang="ts">
import { provide, ref, watch, onMounted, onUnmounted } from 'vue';

interface SidebarProviderProps {
  defaultOpen?: boolean;
  breakpoint?: number; // 响应式断点，单位为像素
  breakpointMobile?: number; // 移动设备响应式断点，单位为像素
  enableResponsive?: boolean; // 是否启用响应式功能
  isMobile?: boolean; // 是否为移动设备
}

const props = withDefaults(defineProps<SidebarProviderProps>(), {
  defaultOpen: true,
  breakpoint: 1024, // 默认 1024px
  breakpointMobile: 768, // 默认 768px
  enableResponsive: false, // 默认不启用响应式
  isMobile: false, // 默认不是移动设备
});

const emit = defineEmits(['update:defaultOpen', 'update:isMobile']);

const open = ref(props.defaultOpen);
const isMobile = ref(props.isMobile);
const mediaQueries: MediaQueryList[] = []; // 存储所有媒体查询实例

// 根据窗口宽度更新状态
const updateSidebarState = () => {
  if (typeof window === 'undefined' || !props.enableResponsive) return;

  const width = window.innerWidth;

  if (width > props.breakpoint) {
    // 大屏幕：桌面视图，侧边栏默认展开
    isMobile.value = false;
    open.value = true;
  } else if (width > props.breakpointMobile) {
    // 中屏幕：平板视图，侧边栏默认收起
    isMobile.value = false;
    open.value = false;
  } else {
    // 小屏幕：移动视图，侧边栏默认收起
    isMobile.value = true;
    open.value = false;
  }

  emit('update:isMobile', isMobile.value);
  emit('update:defaultOpen', open.value);
};

// 设置媒体查询监听
const setupMediaQueryListener = () => {
  if (typeof window === 'undefined' || !props.enableResponsive) return;

  // 确保断点值的有效性
  const effectiveBreakpoint = Math.max(
    props.breakpoint,
    props.breakpointMobile
  );
  const effectiveBreakpointMobile = Math.min(
    props.breakpoint,
    props.breakpointMobile
  );

  // 为两个断点都设置媒体查询
  const breakpoints = [effectiveBreakpoint, effectiveBreakpointMobile];

  breakpoints.forEach(breakpoint => {
    const query = `(max-width: ${breakpoint}px)`;
    const mediaQuery = window.matchMedia(query);

    // 媒体查询变化时更新状态
    const handleChange = () => {
      updateSidebarState();
    };

    mediaQuery.addEventListener('change', handleChange);
    mediaQueries.push(mediaQuery);
  });

  // 初始化状态
  updateSidebarState();
};

const toggle = () => {
  open.value = !open.value;
  emit('update:defaultOpen', open.value);
};

// 监听defaultOpen属性变化，同步更新open状态
watch(
  () => props.defaultOpen,
  newValue => {
    if (newValue !== undefined && !props.enableResponsive) {
      open.value = newValue;
      emit('update:defaultOpen', open.value);
    }
  }
);
watch(
  () => props.isMobile,
  newValue => {
    if (newValue !== undefined && !props.enableResponsive) {
      isMobile.value = newValue;
      emit('update:isMobile', isMobile.value);
    }
  }
);

onMounted(() => {
  setupMediaQueryListener();
});

onUnmounted(() => {
  // 清理所有媒体查询监听器
  mediaQueries.forEach(mq => {
    mq.removeEventListener('change', updateSidebarState);
  });
});

const context = {
  open,
  toggle,
  isMobile,
};

provide('sidebar', context);
</script>

<template>
  <div :data-sidebar="open">
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
