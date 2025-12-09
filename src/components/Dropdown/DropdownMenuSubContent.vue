<template>
  <div
    v-if="subMenuState?.isOpen"
    class="x-dropdown-menu-sub-content"
    :class="{
      'x-dropdown-menu-sub-content--left': position === 'left',
      'x-dropdown-menu-sub-content--right': position === 'right'
    }"
    @click.stop
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="subContentRef"
  >
    <slot />
  </div>
</template>

<script setup>
import { inject, ref } from 'vue';

const props = defineProps({
  position: {
    type: String,
    default: 'right',
    validator: (val) => ['left', 'right'].includes(val)
  }
});

// 从父组件获取状态
const subMenuState = inject('subMenuState', null);
const dropdownState = inject('dropdownState', null);
const subContentRef = ref(null);

const handleMouseEnter = () => {
  if (subMenuState && dropdownState?.hoverable) {
    subMenuState.isOpen = true;
  }
};

const handleMouseLeave = () => {
  if (subMenuState && dropdownState?.hoverable) {
    subMenuState.isOpen = false;
  }
};
</script>

<style scoped>
.x-dropdown-menu-sub-content {
  position: absolute;
  top: 0;
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  z-index: 1001;
  min-width: 120px;
  margin-left: 4px;
}

.x-dropdown-menu-sub-content--left {
  right: 100%;
  margin-left: 0;
  margin-right: 4px;
}

.x-dropdown-menu-sub-content--right {
  left: 100%;
}
</style>