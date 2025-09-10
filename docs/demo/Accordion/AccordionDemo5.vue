<template>
  <div>
    <Accordion
      type="single"
      class="w-full"
      collapsible
      default-value="item-1"
      @change="handleToggle"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>点击查看状态变化</AccordionTrigger>
        <AccordionContent> 展开状态:{{ expanded }} </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const expanded = ref('');
const handleToggle = isExpanded => {
  expanded.value = isExpanded;
  console.log('Accordion expanded state:', isExpanded);
};
</script>
