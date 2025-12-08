<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  children?: MenuItem[];
}

const props = defineProps<{
  list: MenuItem[];
  collapsed: boolean;
  activeId: string;
}>();

const emit = defineEmits<{ select: [id: string] }>();
const isLeaf = (node: MenuItem) => !node.children?.length;

// 跟踪每个分组的折叠状态
const groupOpenState = ref(new Map<string, boolean>());

// 获取组的折叠状态，默认为打开
const getGroupOpen = (nodeId: string) => {
  return groupOpenState.value.get(nodeId) ?? true;
};

// 切换组的折叠状态
const toggleGroup = (nodeId: string) => {
  const currentState = getGroupOpen(nodeId);
  groupOpenState.value.set(nodeId, !currentState);
};
</script>

<template>
  <template v-for="node in list" :key="node.id">
    <!-- 叶子节点 -->
    <SidebarMenuItem v-if="isLeaf(node)" class="mt-2">
      <SidebarMenuButton
        :active="activeId === node.id"
        @click="emit('select', node.id)"
      >
        <Icon :name="node.icon" :size="18" />
        <span v-if="!collapsed">{{ node.label }}</span>
      </SidebarMenuButton>
    </SidebarMenuItem>

    <!-- 可折叠组 -->
    <SidebarGroup
      v-else
      :defaultOpen="getGroupOpen(node.id)"
      @update:defaultOpen="toggleGroup(node.id)"
      class="mt-2"
    >
      <SidebarGroupLabel>
        <!-- <SidebarMenuItem class="mt-2" @click="emit('select', node.id)"> -->
        <SidebarMenuButton
          :active="activeId === node.id"
          @click="emit('select', node.id)"
        >
          <Icon :name="node.icon" :size="18" />
          <span v-if="!collapsed">{{ node.label }}</span>
          <div
            v-if="!collapsed"
            class="rotate-icon"
            :class="{ 'rotate-180': getGroupOpen(node.id) }"
          >
            <Icon name="chevron-down" />
          </div>
        </SidebarMenuButton>
        <!-- </SidebarMenuItem> -->
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <MenuTreeNode
          :list="node.children!"
          :collapsed="collapsed"
          :activeId="activeId"
          @select="emit('select', $event)"
        />
      </SidebarGroupContent>
    </SidebarGroup>
  </template>
</template>

<style scoped>
.group-label {
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  /* justify-content: space-between; */
}
.ml-2 {
  margin-left: 6px;
}
.mt-2 {
  margin-top: 6px;
}
.rotate-180 {
  transform: rotate(180deg);
}
</style>
