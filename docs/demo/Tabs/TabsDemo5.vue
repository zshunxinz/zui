<template>
  <div class="demo-tabs-button-style">
    <Tabs v-model="buttonStyleTab" :tabs="buttonStyleTabs" buttonStyle="true">
      <template #btn1>
        <div class="tab-content">
          <h3>按钮样式标签页 1</h3>
          <p>这是按钮样式的标签页内容</p>
        </div>
      </template>
      <template #btn2>
        <div class="tab-content">
          <h3>按钮样式标签页 2</h3>
          <p>这是按钮样式的标签页内容</p>
        </div>
      </template>
      <template #btn3>
        <div class="tab-content">
          <h3>按钮样式标签页 3</h3>
          <p>这是按钮样式的标签页内容</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const buttonStyleTab = ref(0);
const buttonStyleTabs = ref([
  { label: "按钮 1", name: "btn1" },
  { label: "按钮 2", name: "btn2" },
  { label: "按钮 3", name: "btn3" },
]);
</script>

<style scoped>
.demo-tabs-button-style {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>