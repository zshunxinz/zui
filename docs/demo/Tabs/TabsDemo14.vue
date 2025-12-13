<template>
  <div class="demo-tabs-custom-bg-fullwidth">
    <Tabs
      v-model="activeTab"
      :buttonStyle="true"
      :buttonStyleText="true"
      :tabs="tabs"
      :borderLine="false"
      :tabFull="true"
      :tabsBg="true"
      :tabsBgStyle="{
        backgroundColor: 'var(--color-bg-hover-1)',
        padding: '0.25rem',
      }"
    >
      <template #tab1>
        <div class="tab-content">
          <h3>自定义背景类名标签页 1</h3>
          <p>这是自定义背景类名的标签页内容</p>
        </div>
      </template>
      <template #tab2>
        <div class="tab-content">
          <h3>自定义背景类名标签页 2</h3>
          <p>这是自定义背景类名的标签页内容</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const activeTab = ref(0);
const tabs = [
  { label: 'Tab 1', name: 'tab1' },
  { label: 'Tab 2', name: 'tab2' },
];
</script>
<style scoped>
.z-tabs_nav_bg-1 {
  padding: 0.25rem;
  background-color: var(--color-bg-hover-1);
}
</style>
