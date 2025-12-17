<template>
  <div
    v-if="dropdownState?.isOpen"
    class="z-dropdown-menu-content"
    :class="[
      `z-dropdown-menu-content--${align}`,
      `z-dropdown-menu-content--${side}`,
    ]"
    @click.stop
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="contentRef"
  >
    <slot />
  </div>
</template>

<script setup>
import { inject, ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  align: {
    type: String,
    default: 'center',
    validator: val => ['start', 'center', 'end'].includes(val),
  },
  side: {
    type: String,
    default: 'bottom',
    validator: val => ['top', 'bottom'].includes(val),
  },
});

const dropdownState = inject('dropdownState');
const openDropdown = inject('openDropdown');
const closeDropdown = inject('closeDropdown');
const contentRef = ref(null);

// 鼠标进入菜单内容时，保持菜单展开
const handleMouseEnter = () => {
  if (openDropdown) {
    openDropdown();
  }
};

// 鼠标离开菜单内容时，延迟关闭菜单
const handleMouseLeave = () => {
  if (closeDropdown) {
    closeDropdown();
  }
};

// 点击外部关闭菜单
const handleClickOutside = e => {
  // 确保 dropdownState 存在且已打开
  if (!dropdownState || !dropdownState.value.isOpen || !contentRef.value) {
    return;
  }

  // 检查点击目标是否在菜单内容内
  if (!contentRef.value.contains(e.target)) {
    dropdownState.value.isOpen = false;
  }
};

// 生命周期钩子
onMounted(() => {
  // 点击外部关闭菜单
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  // 移除事件监听
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.z-dropdown-menu-content {
  position: absolute;
  background-color: var(--color-background);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  /* padding: 8px 0; */
  z-index: 1000;
  min-width: 120px;
  margin-top: 4px;
}

.z-dropdown-menu-content--top {
  margin-top: 0;
  margin-bottom: 4px;
}

.z-dropdown-menu-content--start {
  left: 0;
}

.z-dropdown-menu-content--center {
  left: 50%;
  transform: translateX(-50%);
}

.z-dropdown-menu-content--end {
  right: 0;
}
</style>
