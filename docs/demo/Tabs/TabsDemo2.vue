<template>
  <div class="demo-tabs-types">
    <Tabs v-model="activeTab" :tabs="tabs" type="primary">
      <template #tab1>Primary Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="success"
      style="margin-top: 20px;"
    >
      <template #tab1>Success Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="warning"
      style="margin-top: 20px;"
    >
      <template #tab1>Warning Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="danger"
      style="margin-top: 20px;"
    >
      <template #tab1>Danger Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="info"
      style="margin-top: 20px;"
    >
      <template #tab1>Info Tab Content</template>
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