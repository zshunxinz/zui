<script setup lang="ts">
import { ref } from 'vue';

// 创建一些基本的SVG图标组件

// const LogOutIcon = {
//   name: 'LogOutIcon',
//   template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
// };

// 映射图标名称到组件
// 定义菜单项
const mainMenuItems = [
  { id: 'home', label: '首页', icon: 'HomeIcon' },
  { id: 'dashboard', label: '仪表盘', icon: 'LayoutDashboardIcon' },
  { id: 'users', label: '用户管理', icon: 'UsersIcon' },
  { id: 'search', label: '搜索', icon: 'SearchIcon' },
];

const settingsMenuItems = [
  { id: 'settings', label: '设置', icon: 'SettingsIcon' },
  { id: 'help', label: '帮助中心', icon: 'HelpCircleIcon' },
  { id: 'logout', label: '退出登录', icon: 'LogOutIcon' },
];

// 当前激活的菜单项
const activeItem = ref('home');
</script>

<template>
  <div class="demo-container">
    <SidebarProvider>
      <div class="demo-content">
        <Sidebar>
          <SidebarHeader>
            <div class="sidebar-title">ZUI</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarGroup>
                <SidebarGroupLabel>主导航</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuItem v-for="item in mainMenuItems" :key="item.id">
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                    >
                      <component :is="item.icon" size="16" />
                      <span>{{ item.label }}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel>设置</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuItem
                    v-for="item in settingsMenuItems"
                    :key="item.id"
                  >
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                    >
                      <component :is="item.icon" size="16" />
                      <span>{{ item.label }}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <div class="user-info">
              <div class="user-avatar">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div class="user-details">
                <div class="user-name">用户名称</div>
                <div class="user-role">管理员</div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main class="main-content">
          <div class="main-header">
            <SidebarTrigger asChild>
              <Button text size="small">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-panel-left-icon lucide-panel-left"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M9 3v18"></path>
                </svg>
              </Button>
            </SidebarTrigger>
            <h1>内容区域</h1>
          </div>

          <div class="main-body">
            <p>点击侧边栏菜单项切换当前激活状态。</p>
            <p>
              当前选中:
              {{
                mainMenuItems.find(item => item.id === activeItem)?.label ||
                settingsMenuItems.find(item => item.id === activeItem)?.label
              }}
            </p>
          </div>
        </main>
      </div>
    </SidebarProvider>
  </div>
</template>

<style scoped>
.demo-container {
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.demo-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-primary);
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.main-header {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--color-border);
  gap: 16px;
}

.main-header h1 {
  margin: 0;
  font-size: 24px;
}

.main-body {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
}

.user-avatar {
  width: 32px;
  height: 32px;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.user-details {
  flex: 1;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
}

.user-role {
  font-size: 12px;
  color: var(--color-text-secondary);
}
</style>
