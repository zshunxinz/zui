<template>
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
</template>