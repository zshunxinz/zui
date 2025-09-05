<template>
  <Tabs v-model="activeTab" :tabs="tabs" :borderLine="false" :tabFull="true">
    <template #tab1>
      <div class="tab-content">
        <h3>全宽标签页 1</h3>
        <p>这是全宽标签页的内容</p>
      </div>
    </template>
    <template #tab2>
      <div class="tab-content">
        <h3>全宽标签页 2</h3>
        <p>这是全宽标签页的内容</p>
      </div>
    </template>
  </Tabs>
</template>
<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2" },
];
</script>