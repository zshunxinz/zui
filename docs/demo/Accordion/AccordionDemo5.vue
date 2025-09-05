<template>
  <div>
    <Accordion
      type="single"
      class="w-full"
      default-value="item-1"
      @update:modelValue="handleToggle"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>点击查看状态变化</AccordionTrigger>
        <AccordionContent>
          展开状态: {{ expanded ? "已展开" : "已折叠" }}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref(true);
const handleToggle = (isExpanded) => {
  expanded.value = isExpanded;
  console.log("Accordion expanded state:", isExpanded);
};
</script>