<template>
  <Select v-model="value10" placeholder="可搜索的选择" filterable>
    <Option label="JavaScript" value="js" />
    <Option label="TypeScript" value="ts" />
    <Option label="Python" value="py" />
    <Option label="Java" value="java" />
    <Option label="Go" value="go" />
  </Select>
</template>

<script setup>
import { ref } from "vue";
const value10 = ref("");
</script>