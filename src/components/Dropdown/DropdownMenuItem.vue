<template>
  <button
    class="x-dropdown-menu-item"
    :class="{
      'x-dropdown-menu-item--disabled': disabled
    }"
    :disabled="disabled"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup>
import { inject } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);
const dropdownState = inject('dropdownState', null);

const handleClick = (e) => {
  if (props.disabled) return;
  emit('click', e);
  // 点击菜单项后关闭菜单
  if (dropdownState) {
    dropdownState.isOpen = false;
  }
};
</script>

<style scoped>
.x-dropdown-menu-item {
  display: block;
  width: 100%;
  padding: 8px 16px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
  transition: background-color 0.2s;
}

.x-dropdown-menu-item:hover:not(.x-dropdown-menu-item--disabled) {
  background-color: var(--hover-background-color);
}

.x-dropdown-menu-item--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>