<template>
  <Card title="可折叠卡片" collapsible default-open @toggle="handleToggle">
    <div>这是可折叠卡片的内容</div>
  </Card>
  <p style="margin-top: 16px;">展开状态: {{ expanded }}</p>
</template>

<script setup>
import { ref } from "vue";

const expanded = ref(true);
const handleToggle = (isExpanded) => {
  expanded.value = isExpanded;
  console.log("卡片展开状态:", isExpanded);
};
</script>