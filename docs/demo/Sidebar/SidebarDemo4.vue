<script setup lang="ts">
import { ref, computed } from 'vue';

// SVG图标组件
const HomeIcon = {
  name: 'HomeIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
};

const SettingsIcon = {
  name: 'SettingsIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

const UsersIcon = {
  name: 'UsersIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
};

const PieChartIcon = {
  name: 'PieChartIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`,
};

const BarChartIcon = {
  name: 'BarChartIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></svg>`,
};

const HeartIcon = {
  name: 'HeartIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
};

const StarIcon = {
  name: 'StarIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
};

const AwardIcon = {
  name: 'AwardIcon',
  template: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
};

// 图标映射
const iconMap = {
  home: HomeIcon,
  settings: SettingsIcon,
  users: UsersIcon,
  pieChart: PieChartIcon,
  barChart: BarChartIcon,
  heart: HeartIcon,
  star: StarIcon,
  award: AwardIcon,
};

// 定义菜单项
const menuItems = [
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: 'pieChart',
  },
  {
    id: 'analytics',
    label: '数据分析',
    icon: 'barChart',
  },
  {
    id: 'users',
    label: '用户管理',
    icon: 'users',
  },
  {
    id: 'favorites',
    label: '收藏内容',
    icon: 'heart',
  },
  {
    id: 'achievements',
    label: '成就记录',
    icon: 'award',
  },
  {
    id: 'settings',
    label: '系统设置',
    icon: 'settings',
  },
];

// 状态
const activeItem = ref('dashboard');
const sidebarTheme = ref('light');
const accentColor = ref('primary');
const sidebarWidth = ref('280px');
const showBorder = ref(true);
const showShadows = ref(true);

// 处理菜单项点击
const handleItemClick = (itemId: string) => {
  activeItem.value = itemId;
};

// 计算主题类名
const themeClasses = computed(() => {
  const classes: string[] = [];
  
  if (sidebarTheme.value === 'dark') {
    classes.push('dark-theme');
  }
  
  if (accentColor.value) {
    classes.push(`accent-${accentColor.value}`);
  }
  
  if (showBorder.value) {
    classes.push('show-border');
  }
  
  if (showShadows.value) {
    classes.push('show-shadows');
  }
  
  return classes.join(' ');
});

// 计算侧边栏样式
const sidebarStyle = computed(() => {
  return {
    '--sidebar-width': sidebarWidth.value,
  };
});
</script>

<template>
  <div class="demo-container">
    <SidebarProvider>
      <div class="demo-content">
        <!-- 控制面板 -->
        <div class="theme-controls">
          <h3>侧边栏主题设置</h3>
          
          <div class="control-group">
            <label>主题类型</label>
            <div class="radio-group">
              <RadioButton v-model="sidebarTheme" value="light">浅色主题</RadioButton>
              <RadioButton v-model="sidebarTheme" value="dark">深色主题</RadioButton>
            </div>
          </div>
          
          <div class="control-group">
            <label>强调颜色</label>
            <div class="radio-group">
              <RadioButton v-model="accentColor" value="primary">主色</RadioButton>
              <RadioButton v-model="accentColor" value="secondary">次色</RadioButton>
              <RadioButton v-model="accentColor" value="success">成功色</RadioButton>
              <RadioButton v-model="accentColor" value="warning">警告色</RadioButton>
            </div>
          </div>
          
          <div class="control-group">
            <label>侧边栏宽度</label>
            <Input v-model="sidebarWidth" placeholder="输入宽度，如 280px" style="width: 150px" />
          </div>
          
          <div class="control-group">
            <div class="checkbox-group">
              <Checkbox v-model="showBorder">显示边框</Checkbox>
              <Checkbox v-model="showShadows">显示阴影</Checkbox>
            </div>
          </div>
        </div>
        
        <!-- 自定义样式侧边栏 -->
        <div class="sidebar-wrapper" :style="sidebarStyle">
          <Sidebar :class="themeClasses">
            <SidebarHeader>
              <div class="sidebar-title">
                <component :is="StarIcon" style="width: 20px; height: 20px; margin-right: 8px; color: #fbbf24" />
                <span>ZUI 主题</span>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              <SidebarMenu>
                <SidebarGroup v-for="item in menuItems" :key="item.id">
                  <SidebarGroupContent>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        :active="activeItem === item.id"
                        @click="handleItemClick(item.id)"
                        class="custom-menu-button"
                      >
                        <component
                          :is="iconMap[item.icon as keyof typeof iconMap]"
                          class="menu-icon"
                        />
                        <span>{{ item.label }}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>
        </div>
        
        <!-- 主内容区 -->
        <main class="main-content">
          <div class="main-header">
            <h1>自定义样式侧边栏</h1>
            <Badge variant="outline" color="primary">主题演示</Badge>
          </div>
          
          <div class="main-body">
            <p>使用左侧的控制面板可以自定义侧边栏的样式。</p>
            <p>当前配置:</p>
            <ul>
              <li>主题类型: {{ sidebarTheme === 'dark' ? '深色主题' : '浅色主题' }}</li>
              <li>强调颜色: {{ accentColor === 'primary' ? '主色' : 
                               accentColor === 'secondary' ? '次色' :
                               accentColor === 'success' ? '成功色' :
                               accentColor === 'warning' ? '警告色' : '默认' }}</li>
              <li>侧边栏宽度: {{ sidebarWidth }}</li>
              <li>显示边框: {{ showBorder ? '是' : '否' }}</li>
              <li>显示阴影: {{ showShadows ? '是' : '否' }}</li>
            </ul>
            <p>此演示展示了如何通过CSS变量和类名来自定义侧边栏的外观，实现品牌化和个性化需求。</p>
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
  max-width: 1400px;
  height: 600px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}

.theme-controls {
  width: 280px;
  padding: 24px;
  background-color: #f9fafb;
  border-right: 1px solid #e5e7eb;
  overflow-y: auto;
}

.theme-controls h3 {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
}

.control-group {
  margin-bottom: 20px;
}

.control-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.radio-group,
.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar-wrapper {
  --sidebar-width: 280px;
  width: var(--sidebar-width);
  transition: width 0.3s ease;
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
  gap: 12px;
  margin-bottom: 24px;
}

.main-body {
  flex: 1;
  overflow-y: auto;
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
}

.menu-icon {
  width: 18px;
  height: 18px;
  margin-right: 12px;
}

.custom-menu-button {
  position: relative;
  transition: all 0.2s ease;
}

.custom-menu-button:hover {
  transform: translateX(4px);
}

/* 深色主题 */
:deep(.dark-theme) {
  background-color: #1f2937;
  color: #f9fafb;
}

:deep(.dark-theme) .sidebar-title {
  color: #f9fafb;
}

:deep(.dark-theme) .custom-menu-button:hover {
  background-color: #374151;
}

:deep(.dark-theme) .custom-menu-button.active {
  background-color: #4b5563;
  color: #ffffff;
}

/* 强调颜色样式 */
:deep(.accent-primary) .custom-menu-button.active {
  border-left: 3px solid #3b82f6;
}

:deep(.accent-secondary) .custom-menu-button.active {
  border-left: 3px solid #8b5cf6;
}

:deep(.accent-success) .custom-menu-button.active {
  border-left: 3px solid #10b981;
}

:deep(.accent-warning) .custom-menu-button.active {
  border-left: 3px solid #f59e0b;
}

/* 边框和阴影样式 */
:deep(.show-border) {
  border-right: 1px solid #e5e7eb;
}

:deep(.dark-theme.show-border) {
  border-right: 1px solid #374151;
}

:deep(.show-shadows) {
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

:deep(.dark-theme.show-shadows) {
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .demo-content {
    flex-direction: column;
    height: 100vh;
    border-radius: 0;
  }
  
  .theme-controls {
    width: 100%;
    height: auto;
    max-height: 200px;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .sidebar-wrapper {
    width: 100%;
    height: 60px;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
  
  :deep(.show-border) {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
  }
  
  :deep(.show-shadows) {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>