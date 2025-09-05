<template>
  <Accordion type="single" class="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>父级选项一</AccordionTrigger>
      <AccordionContent>
        <Accordion type="single" class="w-full mt-2">
          <AccordionItem value="sub-item-1">
            <AccordionTrigger>子选项一</AccordionTrigger>
            <AccordionContent> 这是子选项一的内容 </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sub-item-2">
            <AccordionTrigger>子选项二</AccordionTrigger>
            <AccordionContent> 这是子选项二的内容 </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>父级选项二</AccordionTrigger>
      <AccordionContent> 这是父级选项二的内容 </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
