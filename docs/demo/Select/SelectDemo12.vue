<template>
  <Select v-model="value" placeholder="可折叠分组">
    <OptionGroup
      label="前端技术"
      :collapsible="true"
      :default-collapsed="false"
    >
      <Option label="Vue.js" value="vue" />
      <Option label="React" value="react" />
      <Option label="Angular" value="angular" />
    </OptionGroup>
    <OptionGroup label="后端技术" :collapsible="true" :default-collapsed="true">
      <Option label="Node.js" value="nodejs" />
      <Option label="Python" value="python" />
      <Option label="Java" value="java" />
    </OptionGroup>
    <OptionGroup label="数据库" :collapsible="true" :default-collapsed="false">
      <Option label="MySQL" value="mysql" />
      <Option label="PostgreSQL" value="postgresql" />
      <Option label="MongoDB" value="mongodb" />
    </OptionGroup>
  </Select>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
