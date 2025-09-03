<template>
  <div 
    class="x-accordion-item"
    role="heading"
    :aria-level="3"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { provide, inject, computed } from 'vue'

interface Props {
  /**
   * 项目的值，用于标识和控制展开状态
   */
  value: string
  
  /**
   * 是否禁用当前项目
   */
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false
})

// 注入父组件提供的数据
const accordion = inject('accordion')

if (!accordion) {
  throw new Error('AccordionItem must be used within Accordion component')
}

// 计算当前项目是否展开
const isExpanded = computed(() => {
  return accordion.isItemExpanded(props.value)
})

// 切换当前项目展开状态
const toggle = () => {
  if (!props.disabled && !accordion.disabled) {
    accordion.toggleItem(props.value)
  }
}

// 提供给子组件的数据
provide('accordionItem', {
  value: props.value,
  disabled: computed(() => props.disabled || accordion.disabled),
  isExpanded,
  toggle
})
</script>

<style scoped>
.x-accordion-item {
  border-bottom: 1px solid var(--color-border-1);
}

.x-accordion-item:last-child {
  border-bottom: none;
}
</style>