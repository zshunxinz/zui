<script setup lang="ts">
import { ref, computed, inject, watch } from 'vue';

// SVG图标组件
const HomeIcon = {
  name: 'HomeIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
};

const SearchIcon = {
  name: 'SearchIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
};

const SettingsIcon = {
  name: 'SettingsIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

const UsersIcon = {
  name: 'UsersIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

const LayoutDashboardIcon = {
  name: 'LayoutDashboardIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
};

const Settings2Icon = {
  name: 'Settings2Icon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

const HelpCircleIcon = {
  name: 'HelpCircleIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
};

const LogOutIcon = {
  name: 'LogOutIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
};

// 图标映射
const iconMap = {
  home: HomeIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  users: UsersIcon,
  dashboard: LayoutDashboardIcon,
  settings2: Settings2Icon,
  help: HelpCircleIcon,
  logout: LogOutIcon,
};

// 菜单项
const mainMenuItems = [
  { id: 'home', label: '首页', icon: 'home' },
  { id: 'dashboard', label: '仪表盘', icon: 'dashboard' },
  { id: 'users', label: '用户管理', icon: 'users' },
  { id: 'search', label: '搜索', icon: 'search' },
];

const settingsMenuItems = [
  { id: 'settings', label: '设置', icon: 'settings' },
  { id: 'help', label: '帮助中心', icon: 'help' },
  { id: 'logout', label: '退出登录', icon: 'logout' },
];

// 状态
const activeItem = ref('home');
const isCollapsed = ref(false);
const isMobile = ref(false);
const isOpenOnMobile = ref(false);

// 注入侧边栏上下文
const sidebar = inject('sidebar');

// 监听侧边栏open状态变化，同步更新isCollapsed
if (sidebar?.open) {
  watch(
    () => sidebar.open.value,
    newValue => {
      if (!isMobile.value) {
        isCollapsed.value = !newValue;
      }
    }
  );
}

// 响应式布局检测
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// 初始化和监听窗口大小变化
checkMobile();
window.addEventListener('resize', checkMobile);

// 计算当前侧边栏的展开状态
const isSidebarOpen = computed(() => {
  if (isMobile.value) {
    return isOpenOnMobile.value;
  }
  return !isCollapsed.value;
});

// 切换折叠状态
const toggleSidebar = () => {
  if (isMobile.value) {
    isOpenOnMobile.value = !isOpenOnMobile.value;
  } else {
    isCollapsed.value = !isCollapsed.value;
  }
};
</script>

<template>
  <div class="demo-container">
    <SidebarProvider :default-open="!isCollapsed">
      <div class="demo-content">
        <Sidebar v-if="!isMobile || isOpenOnMobile">
          <SidebarHeader>
            <div
              class="sidebar-title"
              :class="{ 'sidebar-title--collapsed': isCollapsed && !isMobile }"
            >
              {{ isCollapsed && !isMobile ? 'Z' : 'ZUI' }}
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarGroup>
                <SidebarGroupLabel v-if="!isCollapsed"
                  >主导航</SidebarGroupLabel
                >
                <SidebarGroupContent>
                  <SidebarMenuItem v-for="item in mainMenuItems" :key="item.id">
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                      class="menu-button"
                    >
                      <component
                        :is="iconMap[item.icon as keyof typeof iconMap]"
                        style="width: 18px; height: 18px"
                      />
                      <span v-if="!isCollapsed">{{ item.label }}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>

              <SidebarGroup>
                <SidebarGroupLabel v-if="!isCollapsed">设置</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuItem
                    v-for="item in settingsMenuItems"
                    :key="item.id"
                  >
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                      class="menu-button"
                    >
                      <component
                        :is="iconMap[item.icon as keyof typeof iconMap]"
                        style="width: 18px; height: 18px"
                      />
                      <span v-if="!isCollapsed">{{ item.label }}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter v-if="!isCollapsed">
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
              <div class="user-details" v-if="!isCollapsed">
                <div class="user-name">用户名称</div>
                <div class="user-role">管理员</div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main
          class="main-content"
          :class="{ 'main-content--sidebar-open': isSidebarOpen }"
        >
          <div class="main-header">
            <SidebarTrigger asChild>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </SidebarTrigger>
            <h1>响应式侧边栏演示</h1>
            <div class="header-actions">
              <Button variant="primary" @click="toggleSidebar" v-if="!isMobile">
                {{ isCollapsed ? '展开侧边栏' : '折叠侧边栏' }}
              </Button>
            </div>
          </div>

          <div class="main-body">
            <p>此演示展示了侧边栏的响应式行为和折叠功能。</p>
            <p>在桌面视图下，点击按钮可以折叠或展开侧边栏。</p>
            <p>
              在移动视图下（宽度小于768px），侧边栏默认隐藏，点击按钮会显示完整的侧边栏覆盖层。
            </p>
            <p>
              当前选中:
              {{
                mainMenuItems.find(item => item.id === activeItem)?.label ||
                settingsMenuItems.find(item => item.id === activeItem)?.label
              }}
            </p>

            <div class="feature-demo">
              <h3>功能特点</h3>
              <ul>
                <li>响应式设计，适配不同屏幕尺寸</li>
                <li>可折叠侧边栏，节省空间</li>
                <li>移动设备上的覆盖层模式</li>
                <li>平滑的过渡动画</li>
              </ul>
            </div>
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
}

.demo-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-primary);
  transition: all 0.3s ease;
}

.sidebar-title--collapsed {
  font-size: 24px;
  text-align: center;
  width: 100%;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  position: relative;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid var(--color-border);
  gap: 16px;
}

.main-header h1 {
  margin: 0;
  font-size: 24px;
}

.header-actions {
  display: flex;
  gap: 8px;
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

.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-demo {
  margin-top: 24px;
  padding: 16px;
  background-color: var(--color-bg-hover-1);
  border-radius: 8px;
}

.feature-demo h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

.feature-demo ul {
  margin: 0;
  padding-left: 20px;
}

.feature-demo li {
  margin-bottom: 4px;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .demo-content {
    height: 100vh;
    max-width: none;
    border-radius: 0;
  }

  .main-content--sidebar-open {
    transform: translateX(0);
  }

  .main-header {
    padding: 12px;
  }

  .main-header h1 {
    font-size: 20px;
  }

  .main-body {
    padding: 16px;
  }
}
</style>
