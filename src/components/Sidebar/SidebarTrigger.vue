<script setup lang="ts">
import { inject, computed } from 'vue';

interface SidebarTriggerProps {
  asChild?: boolean;
  showIcon?: boolean; // 是否显示图标
}

const props = withDefaults(defineProps<SidebarTriggerProps>(), {
  asChild: false,
  showIcon: true, // 默认显示图标
});

const sidebar:any = inject('sidebar');
const toggle = sidebar?.toggle || (() => {});
const open = computed(() => sidebar?.open?.value || true);
const isMobile = computed(() => sidebar?.isMobile?.value || false);

const Comp = props.asChild ? 'span' : 'button';
const triggerProps = props.asChild
  ? {
      onClick: toggle,
    }
  : {
      type: 'button',
      onClick: toggle,
    };

// 根据移动端状态显示不同的文本
const buttonText = computed(() => {
  if (isMobile.value) {
    return open.value ? '关闭菜单' : '打开菜单';
  }
  return open.value ? '收起侧边栏' : '展开侧边栏';
});
</script>

<template>
  <Comp :as-child="props.asChild" v-bind="triggerProps" class="SidebarTrigger">
    <slot v-if="props.asChild">
      <button type="button" @click="toggle">{{ buttonText }}</button>
    </slot>
    <span v-else class="SidebarTriggerContent">
      <svg
        v-if="props.showIcon"
        class="SidebarTriggerIcon"
        :class="{ 'SidebarTriggerIcon--rotated': open }"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="M3 12h18M3 6h18M3 18h18"/>
      </svg>
      {{ buttonText }}
    </span>
  </Comp>
</template>

<style scoped>
.SidebarTrigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* padding: var(--padding-2); */
  border-radius: var(--border-radius);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--font-size);
  color: var(--color-text);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.SidebarTrigger:hover {
  background-color: var(--color-bg-hover-1);
}

.SidebarTriggerContent {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.SidebarTriggerIcon {
  transition: transform 0.3s ease;
}

.SidebarTriggerIcon--rotated {
  transform: rotate(90deg);
}

</style>
