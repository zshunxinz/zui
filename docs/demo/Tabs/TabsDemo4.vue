<template>
  <div class="demo-tabs-position">
    <Tabs v-model="activeTab" :tabs="tabs" position="top">
      <template #tab1>Top Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      position="bottom"
      style="margin-top: 20px;"
    >
      <template #tab1>Bottom Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>
    <div style="display: flex; gap: 20px; margin-top: 20px;">
      <Tabs v-model="activeTab" :tabs="tabs" position="left">
        <template #tab1>Left Tab Content</template>
        <template #tab2>Secondary Tab Content</template>
      </Tabs>
      <Tabs v-model="activeTab" :tabs="tabs" position="right">
        <template #tab1>Right Tab Content</template>
        <template #tab2>Secondary Tab Content</template>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2" },
];
</script>