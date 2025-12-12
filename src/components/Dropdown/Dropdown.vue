<template>
  <div class="x-dropdown">
    <slot />
  </div>
</template>

<script setup>
import { ref, provide, watch } from 'vue';

const props = defineProps({
  hoverable: {
    type: Boolean,
    default: false,
  },
  // 支持 v-model 双向绑定，接收父组件传入的展开状态
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

// 创建下拉菜单状态，初始值从 props 中获取
const dropdownState = ref({
  isOpen: props.modelValue,
  hoverable: props.hoverable,
});

// 延迟关闭定时器
let closeTimer = null;

// 提供状态给子组件
provide('dropdownState', dropdownState);

// 监听父组件传入的 modelValue 变化，同步到内部状态
watch(
  () => props.modelValue,
  newVal => {
    dropdownState.value.isOpen = newVal;
  }
);

// 监听内部 isOpen 状态变化，同步到父组件
watch(
  () => dropdownState.value.isOpen,
  newVal => {
    emit('update:modelValue', newVal);
  }
);

// 暴露展开方法给子组件
const openDropdown = () => {
  if (dropdownState.value.hoverable) {
    // 清除延迟关闭定时器
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
    dropdownState.value.isOpen = true;
  }
};

// 暴露延迟关闭方法给子组件
const closeDropdown = () => {
  if (dropdownState.value.hoverable) {
    // 设置延迟关闭，允许鼠标从 trigger 移到 content
    closeTimer = setTimeout(() => {
      dropdownState.value.isOpen = false;
      closeTimer = null;
    }, 200);
  }
};

// 提供方法给子组件
provide('openDropdown', openDropdown);
provide('closeDropdown', closeDropdown);
</script>

<style scoped>
.x-dropdown {
  position: relative;
  display: inline-block;
}
</style>
