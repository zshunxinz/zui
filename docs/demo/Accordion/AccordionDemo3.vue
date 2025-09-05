

<template>
  <Accordion type="multiple" class="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>选项一</AccordionTrigger>
      <AccordionContent>
        这是多选模式下的选项一内容，可以与其他选项同时展开。
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>选项二</AccordionTrigger>
      <AccordionContent> 这是多选模式下的选项二内容。 </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>选项三</AccordionTrigger>
      <AccordionContent> 这是多选模式下的选项三内容。 </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>