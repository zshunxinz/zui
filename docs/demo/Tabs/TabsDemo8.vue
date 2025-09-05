<template>
  <Tabs
    v-model="activeTab"
    :tabs="tabs"
    :tabsBgClass="'x-tabs_nav_bg'"
    :borderLine="false"
  >
    <template #tab1>
      <div class="tab-content">
        <h3>自定义背景标签页 1</h3>
        <p>这是使用自定义背景类的标签页内容</p>
      </div>
    </template>
    <template #tab2>
      <div class="tab-content">
        <h3>自定义背景标签页 2</h3>
        <p>这是使用自定义背景类的标签页内容</p>
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
<style scoped>
.x-tabs_nav_bg {
  background-color: var(--color-bg-hover-1);
}
</style>