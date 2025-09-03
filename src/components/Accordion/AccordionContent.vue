<template>
  <div
    v-show="isExpanded"
    id="accordion-content-${value}"
    class="x-accordion-content"
    role="region"
    :aria-labelledby="`accordion-trigger-${value}`"
  >
    <div class="x-accordion-content__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

// 注入父组件提供的数据
const accordionItem = inject('accordionItem')

if (!accordionItem) {
  throw new Error('AccordionContent must be used within AccordionItem component')
}

const { value, isExpanded } = accordionItem
</script>

<style scoped>
.x-accordion-content {
  overflow: hidden;
}

.x-accordion-content__inner {
  padding: var(--padding-2);
  background-color: var(--color-background);
}
</style>