<template>
  <Select v-model="value" placeholder="可搜索的可折叠分组" :filterable="true">
    <OptionGroup
      label="编程语言"
      :collapsible="true"
      :default-collapsed="false"
      icon-position="right"
    >
      <Option label="JavaScript" value="javascript" />
      <Option label="TypeScript" value="typescript" />
      <Option label="Python" value="python" />
      <Option label="Java" value="java" />
      <OptionGroup
        label="函数式语言"
        :collapsible="true"
        :default-collapsed="false"
        icon-position="right"
      >
        <Option label="Haskell" value="haskell" />
        <Option label="Lisp" value="lisp" />
        <Option label="Clojure" value="clojure" />
      </OptionGroup>
    </OptionGroup>
    <OptionGroup
      label="框架库"
      :collapsible="true"
      :default-collapsed="false"
      icon-position="right"
    >
      <Option label="Vue.js" value="vue" />
      <Option label="React" value="react" />
      <Option label="Angular" value="angular" />
      <OptionGroup
        label="CSS 框架类型"
        :collapsible="true"
        :default-collapsed="true"
      >
        <Option label="原始css" value="bootstrap" />
        <Option label="css in js" value="tailwind" />
        <Option label="原子化css" value="bulma" />
        <OptionGroup
          label="CSS 框架"
          :collapsible="true"
          :default-collapsed="true"
        >
          <Option label="Bootstrap" value="bootstrap" />
          <Option label="Tailwind CSS" value="tailwind" />
          <Option label="Bulma" value="bulma" />
        </OptionGroup>
      </OptionGroup>
    </OptionGroup>
  </Select>
</template>

<script setup>
import { ref } from 'vue';
import { Select, Option, OptionGroup } from '../../../src/components/Select';

const value = ref('');
</script>
