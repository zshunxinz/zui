<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import MenuTreeNode from './MenuTreeNode.vue';

/* -------------------- 类型 -------------------- */
export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  children?: MenuItem[];
  component?: any;
}

/* -------------------- Props / Emits -------------------- */
const props = withDefaults(
  defineProps<{
    menuConfig: MenuItem[];
    defaultActiveId?: string;
    collapsed?: boolean;
  }>(),
  { defaultActiveId: '', collapsed: false }
);
const emit = defineEmits<{ 'update:collapsed': [val: boolean] }>();

/* -------------------- 折叠状态 -------------------- */
const innerCollapsed = ref(props.collapsed);
const isCollapsed = computed({
  get: () => innerCollapsed.value,
  set: v => {
    innerCollapsed.value = v;
    emit('update:collapsed', v);
  },
});

/* -------------------- 拍平树 & 查找 -------------------- */
const flatMap = new Map<string, MenuItem>();
function flatten(list: MenuItem[]) {
  list.forEach(node => {
    flatMap.set(node.id, node);
    if (node.children) flatten(node.children);
  });
}
watch(() => props.menuConfig, flatten, { immediate: true });

const activeId = ref(props.defaultActiveId || props.menuConfig[0]?.id || '');
const activeComponent = computed(() => flatMap.get(activeId.value)?.component);

/* -------------------- 事件 -------------------- */
function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value;
}
function selectMenu(id: string) {
  activeId.value = id;
}
</script>

<template>
  <SidebarProvider :defaultOpen="!isCollapsed">
    <div class="app-sidebar-layout">
      <Sidebar :collapsed-width="49" :width="236">
        <SidebarHeader>
          <div class="sidebar-title">{{ isCollapsed ? 'Z' : 'Zui' }}</div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            <MenuTreeNode
              :list="menuConfig"
              :collapsed="isCollapsed"
              :activeId="activeId"
              @select="selectMenu"
            />
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <slot name="footer" :collapsed="isCollapsed">
            <div class="user-info" :class="{ collapsed: isCollapsed }">
              <div class="user-avatar">
                <Icon name="user" :size="20" />
              </div>
              <div v-if="!isCollapsed" class="user-details">
                <div class="user-name">用户名称</div>
                <div class="user-role">管理员</div>
              </div>
            </div>
          </slot>
        </SidebarFooter>
      </Sidebar>

      <main class="main-content">
        <div class="main-header">
          <SidebarTrigger asChild @click="toggleSidebar">
            <Icon
              :name="isCollapsed ? 'panel-right' : 'panel-left'"
              :size="18"
            />
          </SidebarTrigger>
          <span class="ml-2">{{ flatMap.get(activeId)?.label }}</span>
        </div>
        <div class="main-body">
          <component :is="activeComponent" v-if="activeComponent" />
          <slot v-else name="empty">请选择左侧菜单</slot>
        </div>
      </main>
    </div>
  </SidebarProvider>
</template>

<style scoped>
.app-sidebar-layout {
  display: flex;
  width: 100%;
  min-height: 600px;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 12px 0;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 6px;
}

.user-info.collapsed {
  justify-content: center;
}

.user-avatar {
  border: 1px solid var(--color-border-1);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-name {
  font-size: 14px;
  font-weight: 600;
}

.user-role {
  font-size: 12px;
  color: var(--color-text-muted);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-header {
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid var(--color-border-1);
  gap: 8px;
}

.main-body {
  flex: 1;
  padding: 12px;
  overflow: auto;
}

.ml-2 {
  margin-left: 6px;
}
</style>
