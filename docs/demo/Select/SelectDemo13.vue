<template>
  <Select v-model="value" placeholder="嵌套分组">
    <OptionGroup
      label="前端技术"
      :collapsible="true"
      :default-collapsed="false"
    >
      <Option label="HTML" value="html" />
      <Option label="CSS" value="css" />
      <OptionGroup
        label="JavaScript 框架"
        :collapsible="true"
        :default-collapsed="false"
      >
        <Option label="Vue.js" value="vue" />
        <Option label="React" value="react" />
        <OptionGroup
          label="状态管理"
          :collapsible="true"
          :default-collapsed="false"
        >
          <Option label="Vuex" value="vuex" />
          <Option label="Pinia" value="pinia" />
          <Option label="Redux" value="redux" />
        </OptionGroup>
      </OptionGroup>
      <OptionGroup
        label="构建工具"
        :collapsible="true"
        :default-collapsed="true"
      >
        <Option label="Vite" value="vite" />
        <Option label="Webpack" value="webpack" />
        <Option label="Rollup" value="rollup" />
      </OptionGroup>
    </OptionGroup>
    <OptionGroup
      label="后端技术"
      :collapsible="true"
      :default-collapsed="false"
    >
      <Option label="Node.js" value="nodejs" />
      <Option label="Python" value="python" />
      <Option label="Java" value="java" />
    </OptionGroup>
  </Select>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
