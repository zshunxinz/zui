# Accordion 手风琴

Accordion 手风琴组件用于展示可折叠的内容区块，支持单开和多开模式，常用于展示问答、详情信息等场景。

## 基础用法

<script setup>
import { ref } from "vue";
import AccordionDemo1 from "../demo/AccordionDemo1.vue";

const expanded = ref()
const handleChange = (isExpanded) => {
  expanded.value = isExpanded
}

const defaultValue = "item-1";
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
</script>

<AccordionDemo1 />

<CollapsibleCode>

```vue
<script setup lang="ts">
const defaultValue = "item-1";

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
</script>

<template>
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
</template>
```

</CollapsibleCode>

## 可折叠所有项

通过设置 `collapsible` 属性为 `true` 并将 `defaultValue` 设置为空字符串，可以允许用户折叠所有项。

<Demo>
  <Accordion type="single" class="w-full" collapsible defaultValue="" @change="handleToggle">
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
  {{expanded}}
</Demo>

<CollapsibleCode>

```vue
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
```

</CollapsibleCode>

## 多选模式

通过设置 `type` 属性为 `multiple`，可以启用多选模式，允许同时展开多个项目。

<Demo>
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
</Demo>

<CollapsibleCode>

```vue
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
```

</CollapsibleCode>

## 禁用状态

通过设置 `disabled` 属性为 `true`，可以禁用整个手风琴组件。

<Demo>
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
</Demo>

<CollapsibleCode>

```vue
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
```

</CollapsibleCode>

## 事件监听

手风琴组件支持 `update:modelValue` 事件，可以监听展开状态的变化。

<Demo>
 <Card title="Accordion 基础用法" :border="false">
    <Accordion type="single" collapsible :default-value="defaultValue" @change="handleChange">
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
   展开状态: {{ expanded  }}
</Demo>

<CollapsibleCode>

```vue
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
```

</CollapsibleCode>

## 嵌套使用

手风琴组件支持嵌套使用，可以创建层级结构的内容展示。

<Demo>
  <Accordion type="single" class="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>父级选项一</AccordionTrigger>
      <AccordionContent>
        <Accordion type="single" class="w-full mt-2">
          <AccordionItem value="sub-item-1">
            <AccordionTrigger>子选项一</AccordionTrigger>
            <AccordionContent>
              这是子选项一的内容
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="sub-item-2">
            <AccordionTrigger>子选项二</AccordionTrigger>
            <AccordionContent>
              这是子选项二的内容
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>父级选项二</AccordionTrigger>
      <AccordionContent>
        这是父级选项二的内容
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</Demo>

<CollapsibleCode>

```vue
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
```

</CollapsibleCode>

## Accordion Props

| 属性名       | 类型                     | 默认值      | 说明                                                                       |
| ------------ | ------------------------ | ----------- | -------------------------------------------------------------------------- |
| type         | `'single' \| 'multiple'` | `'single'`  | 手风琴类型，single 表示一次只能展开一个项目，multiple 表示可以展开多个项目 |
| defaultValue | `string`                 | `''`        | 默认展开的值，用于非受控模式                                               |
| modelValue   | `string \| string[]`     | `undefined` | 当前展开的值，用于受控模式                                                 |
| collapsible  | `boolean`                | `false`     | 是否允许折叠所有项目                                                       |
| disabled     | `boolean`                | `false`     | 是否禁用整个手风琴                                                         |

## AccordionItem Props

| 属性名   | 类型      | 默认值  | 说明                                   |
| -------- | --------- | ------- | -------------------------------------- |
| value    | `string`  | -       | 项目的值，用于标识和控制展开状态，必需 |
| disabled | `boolean` | `false` | 是否禁用当前项目                       |

## AccordionTrigger Props

无特定属性，主要作为触发器使用，内容通过插槽传入。

## AccordionContent Props

无特定属性，主要用于显示内容，内容通过插槽传入。

## Events

| 事件名            | 说明                 | 回调参数                                   |
| ----------------- | -------------------- | ------------------------------------------ |
| update:modelValue | 当展开状态变化时触发 | `value: string \| string[]` - 当前展开的值 |
| change            | 当展开状态变化时触发 | `value: string \| string[]` - 当前展开的值 |

<!-- ## Accessibility

Accordion 组件遵循 WAI-ARIA 设计模式，提供了适当的 ARIA 属性，包括：

- `role="group"` 和 `aria-multiselectable` 在主容器上
- `role="heading"` 和 `aria-level` 在项目上
- `aria-expanded` 和 `aria-controls` 在触发器上
- `role="region"` 和 `aria-labelledby` 在内容区域上

这些属性确保了组件对屏幕阅读器和其他辅助技术的良好支持。 -->
