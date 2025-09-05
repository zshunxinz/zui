

<template>
  <Accordion type="single" class="w-full" disabled>
    <AccordionItem value="item-1">
      <AccordionTrigger>禁用的选项一</AccordionTrigger>
      <AccordionContent> 此手风琴已被禁用，无法展开或折叠。 </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>禁用的选项二</AccordionTrigger>
      <AccordionContent> 此手风琴已被禁用。 </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>