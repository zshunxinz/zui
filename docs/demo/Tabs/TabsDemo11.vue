<template>
  <Tabs
    v-model="activeTab"
    :buttonStyle="true"
    :tabs="tabs"
    :borderLine="false"
    type="primary"
  >
    <template #tab1>
      <div class="tab-content">
        <h3>主色按钮标签页 1</h3>
        <p>这是主色按钮样式的标签页内容</p>
      </div>
    </template>
    <template #tab2>
      <div class="tab-content">
        <h3>主色按钮标签页 2</h3>
        <p>这是主色按钮样式的标签页内容</p>
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