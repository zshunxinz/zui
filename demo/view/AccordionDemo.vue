<template>
  <div class="accordion-demo-container">
    <h2>手风琴组件演示</h2>
    
    <div class="demo-section">
      <h3>基本使用</h3>
      <Accordion type="single" class="w-full" collapsible :default-value="defaultValue">
        <AccordionItem v-for="item in accordionItems" :key="item.value" :value="item.value">
          <AccordionTrigger>{{ item.title }}</AccordionTrigger>
          <AccordionContent>
            {{ item.content }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
    <div class="demo-section">
      <h3>可折叠所有项</h3>
      <Accordion type="single" class="w-full" collapsible defaultValue="">
        <AccordionItem value="item-1">
          <AccordionTrigger>什么是手风琴组件？</AccordionTrigger>
          <AccordionContent>
            手风琴组件是一种可折叠的内容展示组件，允许用户展开或折叠内容区域，常用于展示问答、详情等信息。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>如何自定义手风琴样式？</AccordionTrigger>
          <AccordionContent>
            您可以通过添加自定义CSS类来自定义手风琴的样式，包括颜色、字体、间距等。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
    <div class="demo-section">
      <h3>多选模式</h3>
      <Accordion type="multiple" class="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>选项一</AccordionTrigger>
          <AccordionContent>
            这是多选模式下的选项一内容，可以与其他选项同时展开。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>选项二</AccordionTrigger>
          <AccordionContent>
            这是多选模式下的选项二内容。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>选项三</AccordionTrigger>
          <AccordionContent>
            这是多选模式下的选项三内容。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
    
    <div class="demo-section">
      <h3>禁用状态</h3>
      <Accordion type="single" class="w-full" disabled>
        <AccordionItem value="item-1">
          <AccordionTrigger>禁用的选项一</AccordionTrigger>
          <AccordionContent>
            此手风琴已被禁用，无法展开或折叠。
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>禁用的选项二</AccordionTrigger>
          <AccordionContent>
            此手风琴已被禁用。
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion"

const defaultValue = "item-1"

const accordionItems = [
  { value: "item-1", title: "Is it accessible?", content: "Yes. It adheres to the WAI-ARIA design pattern." },
  { value: "item-2", title: "Is it unstyled?", content: "Yes. It's unstyled by default, giving you freedom over the look and feel." },
  { value: "item-3", title: "Can it be animated?", content: "Yes! You can use the transition prop to configure the animation." },
]
</script>

<style scoped>
.accordion-demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.demo-section {
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 20px;
  color: var(--color-text);
  font-size: var(--font-size-3);
}

h3 {
  margin-bottom: 10px;
  color: var(--color-text-1);
  font-size: var(--font-size-2);
}
</style>