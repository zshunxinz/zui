<script setup lang="ts">
import { ref, computed } from 'vue';

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

const LayersIcon = {
  name: 'LayersIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
};

const DatabaseIcon = {
  name: 'DatabaseIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
};

const BarChartIcon = {
  name: 'BarChartIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
};

const PieChartIcon = {
  name: 'PieChartIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
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
  layers: LayersIcon,
  database: DatabaseIcon,
  barChart: BarChartIcon,
  pieChart: PieChartIcon,
  help: HelpCircleIcon,
  logout: LogOutIcon,
};

// 定义菜单项（包含子菜单）
const menuItems = [
  {
    id: 'home',
    label: '首页',
    icon: 'home',
    children: [],
  },
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: 'dashboard',
    children: [
      {
        id: 'dashboard-overview',
        label: '概览',
        icon: 'barChart',
      },
      {
        id: 'dashboard-analytics',
        label: '数据分析',
        icon: 'pieChart',
      },
    ],
  },
  {
    id: 'content',
    label: '内容管理',
    icon: 'layers',
    children: [
      {
        id: 'content-pages',
        label: '页面管理',
      },
      {
        id: 'content-posts',
        label: '文章管理',
      },
      {
        id: 'content-media',
        label: '媒体库',
      },
    ],
  },
  {
    id: 'users',
    label: '用户管理',
    icon: 'users',
    children: [],
  },
  {
    id: 'data',
    label: '数据中心',
    icon: 'database',
    children: [
      {
        id: 'data-backup',
        label: '备份管理',
      },
      {
        id: 'data-export',
        label: '数据导出',
      },
    ],
  },
  {
    id: 'settings',
    label: '系统设置',
    icon: 'settings',
    children: [
      {
        id: 'settings-basic',
        label: '基本设置',
      },
      {
        id: 'settings-security',
        label: '安全设置',
      },
      {
        id: 'settings-advanced',
        label: '高级设置',
      },
    ],
  },
  {
    id: 'help',
    label: '帮助中心',
    icon: 'help',
    children: [],
  },
  {
    id: 'logout',
    label: '退出登录',
    icon: 'logout',
    children: [],
  },
];

// 状态
const activeItem = ref('home');
const collapsed = ref(false);

// 处理菜单项点击
const handleItemClick = (itemId: string) => {
  activeItem.value = itemId;
};
</script>

<template>
  <div class="demo-container">
    <SidebarProvider>
      <div class="demo-content">
        <Sidebar>
          <SidebarHeader>
            <div class="sidebar-title">ZUI</div>
            <SidebarTrigger asChild>
              <svg
                @click="collapsed = !collapsed"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </SidebarTrigger>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <SidebarGroup v-for="item in menuItems" :key="item.id">
                <template v-if="item.children && item.children.length > 0">
                  <SidebarGroupLabel v-if="!collapsed">
                    <!-- <component
                      :is="iconMap[item.icon as keyof typeof iconMap]"
                      style="width: 16px; height: 16px; margin-right: 28px"
                    /> -->
                    <div style="display: flex; align-items: center; gap: 5px">
                      <span>{{ item.label }}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style="transition: transform 0.2s"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </SidebarGroupLabel>
                  <SidebarGroupContent v-if="!collapsed">
                    <SidebarMenuItem
                      v-for="child in item.children"
                      :key="child.id"
                    >
                      <SidebarMenuButton
                        :active="activeItem === child.id"
                        @click="handleItemClick(child.id)"
                        class="nested-menu-item"
                      >
                        <component
                          v-if="child.icon"
                          :is="iconMap[child.icon as keyof typeof iconMap]"
                          style="width: 14px; height: 14px; margin-right: 8px"
                        />
                        <span>{{ child.label }}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarGroupContent>
                </template>

                <!-- 没有子菜单的直接项 -->
                <SidebarGroupContent v-else>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="handleItemClick(item.id)"
                    >
                      <component
                        :is="iconMap[item.icon as keyof typeof iconMap]"
                        style="width: 18px; height: 18px"
                      />
                      <span v-if="!collapsed">{{ item.label }}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>

          <SidebarFooter v-if="!collapsed">
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
            <h1>嵌套导航侧边栏示例</h1>
          </div>

          <div class="main-body">
            <p>这个示例展示了如何创建带有分组和嵌套子菜单的侧边栏。</p>
            <p>点击侧边栏顶部的折叠按钮可以切换侧边栏的显示模式。</p>
            <p>点击带有箭头的分组标签可以展开或折叠子菜单。</p>
            <p>
              当前选中:
              {{
                menuItems.find(item => item.id === activeItem)?.label ||
                menuItems
                  .flatMap(item => item.children)
                  .find(child => child.id === activeItem)?.label
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
}

.demo-content {
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 600px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 24px;
  overflow: hidden;
}

.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.main-body {
  flex: 1;
  overflow: auto;
}

.user-info {
  display: flex;
  align-items: center;
  padding: 16px;
}

.user-avatar {
  margin-right: 12px;
}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 500;
  font-size: 14px;
}

.user-role {
  font-size: 12px;
  color: #6b7280;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}

.nested-menu-item {
  padding-left: 28px !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-content {
    height: 100vh;
    max-width: 100%;
    border-radius: 0;
  }
}
</style>
