<script setup lang="ts">
import { ref, computed, defineAsyncComponent } from 'vue';
const CardDemo1 = defineAsyncComponent(() => import('../Card/CardDemo1.vue'));
const TabsDemo1 = defineAsyncComponent(() => import('../Tabs/TabsDemo1.vue'));
const GridDemo1 = defineAsyncComponent(() => import('../Grid/GridDemo1.vue'));
const FormDemo1 = defineAsyncComponent(() => import('../Form/FormDemo1.vue'));
const FormDemo2 = defineAsyncComponent(() => import('../Form/FormDemo2.vue'));
const ModalDemo1 = defineAsyncComponent(
  () => import('../Modal/ModalDemo1.vue')
);
const DrawerDemo1 = defineAsyncComponent(
  () => import('../Drawer/DrawerDemo1.vue')
);
/**
 * 侧边栏组件演示
 * 包含侧边栏展开/收起、多级菜单、动态组件加载等功能
 */

// ==================== 状态管理 ====================
const active = ref(true); // 侧边栏展开/收起状态
const mainMenuActive = ref(true); // 主导航组展开状态
const settingsMenuActive = ref(false); // 设置导航组展开状态
const activeItem = ref('home'); // 当前激活的菜单项

// ==================== 菜单配置数据 ====================
/**
 * 主导航菜单项配置
 */
const mainMenuItems = [
  { id: 'home', label: '首页', icon: 'house', component: CardDemo1 },
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: 'chart-area',
    component: TabsDemo1,
  },
  { id: 'users', label: '用户管理', icon: 'users', component: GridDemo1 },
  { id: 'search', label: '搜索', icon: 'search', component: FormDemo1 },
];

/**
 * 设置导航菜单项配置
 */
const settingsMenuItems = [
  { id: 'settings', label: '设置', icon: 'settings', component: FormDemo2 },
  {
    id: 'help',
    label: '帮助中心',
    icon: 'hand-helping',
    component: ModalDemo1,
  },
  { id: 'logout', label: '退出登录', icon: 'log-out', component: DrawerDemo1 },
];

// ==================== 计算属性 ====================
/**
 * 获取当前激活菜单项的显示标签
 */
const currentActiveLabel = computed(() => {
  return (
    mainMenuItems.find(item => item.id === activeItem.value)?.label ||
    settingsMenuItems.find(item => item.id === activeItem.value)?.label
  );
});

/**
 * 获取当前激活菜单项对应的组件
 */
const currentActiveComponent = computed(() => {
  return (
    mainMenuItems.find(item => item.id === activeItem.value)?.component ||
    settingsMenuItems.find(item => item.id === activeItem.value)?.component
  );
});

// ==================== 事件处理函数 ====================
/**
 * 切换侧边栏展开/收起状态,默认组件内已更新active值
 */
const toggleSidebar = () => {
  console.log('toggleSidebar', active.value);
};
/**
 * 设置当前激活的菜单项
 * @param itemId - 菜单项ID
 */
const setActiveItem = (itemId: string) => {
  activeItem.value = itemId;
};
</script>

<template>
  <div class="demo-container">
    <SidebarProvider v-model:defaultOpen="active">
      <div class="demo-content">
        <!-- 侧边栏 -->
        <Sidebar
          :collapsed-width="49"
          :width="236"
          style="
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: var(--color-default-text-1);
          "
        >
          <!-- 侧边栏头部 -->
          <SidebarHeader>
            <div class="sidebar-title">{{ active ? 'Zui' : 'zui' }}</div>
          </SidebarHeader>

          <!-- 侧边栏内容 -->
          <SidebarContent>
            <SidebarMenu>
              <!-- 主导航组 -->
              <SidebarGroup v-model:default-open="mainMenuActive">
                <SidebarGroupLabel v-if="active">
                  <div class="group-label">
                    <div style="display: flex; align-items: center; gap: 8px">
                      <Icon name="layout-grid" :size="18" />
                      <span>主导航</span>
                    </div>
                    <div
                      class="rotate-icon"
                      :class="{ 'rotate-180': mainMenuActive }"
                    >
                      <Icon name="chevron-down" />
                    </div>
                  </div>
                </SidebarGroupLabel>
                <SidebarGroupLabel v-if="!active">
                  <div class="group-label">
                    <!-- <div class="group-icon-no-active"> -->
                    <Icon name="layout-grid" :size="18" />
                    <!-- </div> -->
                  </div>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuItem v-for="item in mainMenuItems" :key="item.id">
                    <!-- 展开状态下的菜单按钮 -->
                    <SidebarMenuButton
                      v-if="active"
                      :active="activeItem === item.id"
                      @click="setActiveItem(item.id)"
                    >
                      <Icon class="menu-icon" :name="item.icon" size="16" />
                      <span>{{ item.label }}</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      v-else
                      asChild
                      center
                      :active="activeItem === item.id"
                      @click="setActiveItem(item.id)"
                      style="
                        width: 100%;
                        height: 36px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      "
                    >
                      <Icon
                        class="menu-icon-collapsed"
                        :name="item.icon"
                        size="16"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>

              <!-- 设置导航组 -->
              <SidebarGroup v-model:default-open="settingsMenuActive">
                <SidebarGroupLabel v-if="active">
                  <div class="group-label">
                    <div
                      style="
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        margin-top: var(--space-1);
                      "
                    >
                      <Icon name="codepen" :size="18" />
                      <span>系统</span>
                    </div>
                    <div
                      class="rotate-icon"
                      :class="{ 'rotate-180': settingsMenuActive }"
                    >
                      <Icon name="chevron-down" />
                    </div>
                  </div>
                </SidebarGroupLabel>
                <SidebarGroupLabel v-if="!active">
                  <div class="group-label">
                    <div style="display: flex; align-items: center; gap: 8px">
                      <Icon name="codepen" :size="18" />
                    </div>
                  </div>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuItem
                    v-for="item in settingsMenuItems"
                    :key="item.id"
                  >
                    <!-- 展开状态下的菜单按钮 -->
                    <SidebarMenuButton
                      v-if="active"
                      :active="activeItem === item.id"
                      @click="setActiveItem(item.id)"
                    >
                      <Icon class="menu-icon" :name="item.icon" size="16" />
                      <span>{{ item.label }}</span>
                    </SidebarMenuButton>

                    <!-- 收起状态下的菜单按钮 -->
                    <SidebarMenuButton
                      v-else
                      asChild
                      center
                      :active="activeItem === item.id"
                      @click="setActiveItem(item.id)"
                      style="
                        width: 100%;
                        height: 36px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      "
                    >
                      <Icon
                        class="menu-icon-collapsed"
                        :name="item.icon"
                        size="16"
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>

          <!-- 侧边栏底部 -->
          <SidebarFooter>
            <div class="user-info" :class="{ collapsed: !active }">
              <div class="user-avatar">
                <Icon name="user" :size="24" />
              </div>
              <div v-if="active" class="user-details">
                <div class="user-name">用户名称</div>
                <div class="user-role">管理员</div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <!-- 主内容区域 -->
        <main class="main-content">
          <div class="main-header">
            <SidebarTrigger asChild @click="toggleSidebar">
              <Icon
                :name="active ? 'panel-right' : 'panel-left'"
                :size="20"
                color="var(--color-default-text-1)"
              />
            </SidebarTrigger>
            <span>{{ currentActiveLabel }}</span>
          </div>

          <div class="main-body">
            <component
              v-if="currentActiveComponent"
              :is="currentActiveComponent"
            />
          </div>
        </main>
      </div>
    </SidebarProvider>
  </div>
</template>

<style scoped>
/* ==================== 布局样式 ==================== */
.demo-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-content {
  display: flex;
  width: 100%;
  min-height: 600px;
  overflow: hidden;
}

/* ==================== 侧边栏样式 ==================== */
.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: var(--space-3) 0px;
  color: var(--color-default-text-1);
  background-color: var(--color-primary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* ==================== 主内容区域样式 ==================== */
.main-content {
  flex: 1;
  overflow: hidden;
  /* display: flex;
  flex-direction: column; */
}

.main-header {
  display: flex;
  align-items: center;
  padding: var(--padding-3);
  /* border-bottom: 1px solid var(--color-border-1); */
  color: var(--color-default-text-1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: var(--space-2);
  width: 100%;
  background-color: var(--color-primary);
}

.main-body {
  flex: 1;
  padding: var(--padding-3);
  height: calc(100% - var(--sidebar-header-height));
  overflow: auto;
}

/* ==================== 菜单相关样式 ==================== */
.menu-icon {
  height: 22px;
  font-size: 16px;
}

.menu-icon-collapsed {
  /* width: 100%; */
  /* padding: var(--padding-1); */

  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 22px; */
  /* font-size: 18px; */
}

.group-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

/* ==================== 用户信息样式 ==================== */
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  padding: 8px 0;
  width: 100%;
  transition: opacity 0.9s ease;
}

.user-info.collapsed {
  justify-content: center;
}

.user-avatar {
  border: 1px solid var(--color-border-1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  width: 32px;
  height: 32px;
}

.user-details {
  transition: opacity 0.9s ease;
}

.user-name {
  font-size: 14px;
  font-weight: 900;
}

.user-role {
  font-size: 12px;
  color: var(--color-text-muted);
}

/* ==================== 动画样式 ==================== */
.rotate-icon {
  transition: transform 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
