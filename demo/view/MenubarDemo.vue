<template>
  <div class="menubar-demo">
    <h2>Menubar 组件示例</h2>
    
    <div class="demo-section">
      <h3>基本用法</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>文件</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>新建标签页 <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
            <MenubarItem>新建窗口</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>共享</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>打印</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>编辑</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>复制 <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
            <MenubarItem>粘贴 <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
            <MenubarItem>剪切 <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>查找 <MenubarShortcut>⌘F</MenubarShortcut></MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger>视图</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>缩放</MenubarItem>
            <MenubarItem>全屏</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>暗色模式</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        
        <MenubarMenu>
          <MenubarTrigger disabled>帮助</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>关于</MenubarItem>
            <MenubarItem>反馈</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
    
    <div class="demo-section">
      <h3>带点击事件的菜单项</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>操作</MenubarTrigger>
          <MenubarContent>
            <MenubarItem :onClick="handleNewItem">新建项目</MenubarItem>
            <MenubarItem :onClick="handleSave">保存 <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
            <MenubarItem :onClick="handleDelete" disabled>删除</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div v-if="message" class="message">{{ message }}</div>
    </div>
    
    <div class="demo-section">
      <h3>嵌套菜单</h3>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>格式</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>字体</MenubarItem>
            <MenubarItem>颜色</MenubarItem>
            <MenubarItem>段落</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { 
  Menubar, 
  MenubarMenu, 
  MenubarTrigger, 
  MenubarContent, 
  MenubarItem, 
  MenubarSeparator, 
  MenubarShortcut 
} from '../components/Menubar';

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
.menubar-demo {
  padding: var(--padding-4);
}

h2 {
  margin-bottom: var(--margin-4);
  color: var(--color-text-primary);
}

h3 {
  margin-bottom: var(--margin-3);
  color: var(--color-text-secondary);
}

.demo-section {
  margin-bottom: var(--margin-6);
  padding: var(--padding-3);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background-color: var(--color-background);
}

.message {
  margin-top: var(--margin-3);
  padding: var(--padding-2);
  background-color: var(--color-background-success);
  color: var(--color-text-success);
  border-radius: var(--border-radius-small);
  text-align: center;
}
</style>