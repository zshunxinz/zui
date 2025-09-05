<script setup lang="ts">
import { ref } from "vue";

const defaultValue = "item-1";
const expanded = ref(true);
const loading = ref(true);

const accordionItems = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it unstyled?",
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: "item-3",
    title: "Can it be animated?",
    content: "Yes! You can use the transition prop to configure the animation.",
  },
];

const handleToggle = (isExpanded: boolean) => {
  expanded.value = isExpanded;
  console.log("Accordion expanded state:", isExpanded);
};

const toggleLoading = () => {
  loading.value = !loading.value;
};
</script>
<template>
  <Demo>
    <Card title="Accordion 基础用法" :border="false">
      <Accordion type="single" collapsible :default-value="defaultValue">
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
    <Card title="Accordion 无边框模式" :border="false" style="margin-top: 20px">
      <Accordion
        type="single"
        collapsible
        :default-value="defaultValue"
        :border="false"
      >
        <AccordionItem
          v-for="item in accordionItems"
          :key="item.value"
          :value="item.value"
        >
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  </Demo>
</template>
