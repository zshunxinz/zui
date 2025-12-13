<template>
  <div
    v-show="isExpanded"
    id="accordion-content-${value}"
    class="z-accordion-content"
    role="region"
    :aria-labelledby="`accordion-trigger-${value}`"
  >
    <div class="z-accordion-content__inner">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// 注入父组件提供的数据
const accordionItem = inject('accordionItem');

if (!accordionItem) {
  throw new Error(
    'AccordionContent must be used within AccordionItem component'
  );
}

const { value, isExpanded } = accordionItem;
</script>

<style scoped>
.z-accordion-content {
  overflow: hidden;
}

.z-accordion-content__inner {
  padding: var(--padding-2);
  background-color: var(--color-background);
}
</style>
