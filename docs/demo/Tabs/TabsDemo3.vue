<template>
  <div class="demo-tabs-sizes">
    <Tabs v-model="activeTab" :tabs="tabs" size="small">
      <template #tab1>Small Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      size="default"
      style="margin-top: 20px;"
    >
      <template #tab1>Default Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      size="large"
      style="margin-top: 20px;"
    >
      <template #tab1>Large Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>
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