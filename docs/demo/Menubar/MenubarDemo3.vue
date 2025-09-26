<template>
  <div class="demo-container">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>操作</MenubarTrigger>
        <MenubarContent>
          <MenubarItem :onClick="handleNewItem">新建项目</MenubarItem>
          <MenubarItem :onClick="handleSave"
            >保存 <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem
          >
          <MenubarSeparator />
          <MenubarItem :onClick="handleDelete">删除</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const message = ref('');

const handleNewItem = () => {
  message.value = '已创建新项目';
  setTimeout(() => {
    message.value = '';
  }, 2000);
};

const handleSave = () => {
  message.value = '文件已保存';
  setTimeout(() => {
    message.value = '';
  }, 2000);
};

const handleDelete = () => {
  message.value = '项目已删除';
  setTimeout(() => {
    message.value = '';
  }, 2000);
};
</script>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.message {
  padding: var(--padding-2);
  background-color: var(--color-background-success);
  color: var(--color-text-success);
  border-radius: var(--border-radius-small);
  text-align: center;
  margin-top: var(--margin-2);
}
</style>
