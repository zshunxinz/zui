<template>
  <div class="demo-tabs-disabled">
    <Tabs v-model="activeTab" :tabs="tabs">
      <template #tab1>Active Tab Content</template>
      <template #tab2>Disabled Tab Content</template>
      <template #tab3>Another Active Tab Content</template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Active", name: "tab1" },
  { label: "Disabled", name: "tab2", disabled: true },
  { label: "Another Active", name: "tab3" },
];
</script>