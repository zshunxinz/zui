<template>
  <div
    v-if="dropdownState?.isOpen"
    class="x-dropdown-menu-content"
    :class="[
      `x-dropdown-menu-content--${align}`,
      `x-dropdown-menu-content--${side}`,
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
    validator: (val) => ['start', 'center', 'end'].includes(val)
  },
  side: {
    type: String,
    default: 'bottom',
    validator: (val) => ['top', 'bottom'].includes(val)
  }
});

const dropdownState = inject('dropdownState', null);
const contentRef = ref(null);

const handleMouseEnter = () => {
  if (dropdownState && dropdownState.hoverable) {
    dropdownState.isOpen = true;
  }
};

const handleMouseLeave = () => {
  if (dropdownState && dropdownState.hoverable) {
    dropdownState.isOpen = false;
  }
};

// 点击外部关闭菜单
const handleClickOutside = (e) => {
  if (dropdownState?.isOpen && contentRef.value && !contentRef.value.contains(e.target)) {
    dropdownState.isOpen = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.x-dropdown-menu-content {
  position: absolute;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  z-index: 1000;
  min-width: 120px;
  margin-top: 4px;
}

.x-dropdown-menu-content--top {
  margin-top: 0;
  margin-bottom: 4px;
}

.x-dropdown-menu-content--start {
  left: 0;
}

.x-dropdown-menu-content--center {
  left: 50%;
  transform: translateX(-50%);
}

.x-dropdown-menu-content--end {
  right: 0;
}
</style>