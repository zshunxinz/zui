<script setup lang="ts">
import { provide, ref, watch } from 'vue';

interface SidebarProviderProps {
  defaultOpen?: boolean;
}

const props = withDefaults(defineProps<SidebarProviderProps>(), {
  defaultOpen: true,
});

const open = ref(props.defaultOpen);

const toggle = () => {
  open.value = !open.value;
};

// 监听defaultOpen属性变化，同步更新open状态
watch(
  () => props.defaultOpen,
  newValue => {
    if (newValue !== undefined) {
      open.value = newValue;
    }
  },
  { immediate: true }
);

const context = {
  open,
  toggle,
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
