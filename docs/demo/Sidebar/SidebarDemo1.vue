<script setup lang="ts">
import { ref } from 'vue';

const active = ref(true);

// 定义菜单项
const mainMenuItems = [
  { id: 'home', label: '首页', icon: 'house' },
  { id: 'dashboard', label: '仪表盘', icon: 'chart-area' },
  { id: 'users', label: '用户管理', icon: 'users' },
  { id: 'search', label: '搜索', icon: 'search' },
];
const mainMenuActive = ref(true);

const settingsMenuItems = [
  { id: 'settings', label: '设置', icon: 'settings' },
  { id: 'help', label: '帮助中心', icon: 'hand-helping' },
  { id: 'logout', label: '退出登录', icon: 'log-out' },
];
const settingsMenuActive = ref(false);

// 当前激活的菜单项
const activeItem = ref('home');
</script>

<template>
  <div class="demo-container">
    <SidebarProvider>
      <div class="demo-content">
        <Sidebar :collapsedWidth="49" :width="236" >
          <SidebarHeader>
            <div class="sidebar-title" v-if="active">Zui</div>
            <div class="sidebar-title" v-else>zui</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarGroup v-model:defaultOpen="mainMenuActive">
                <SidebarGroupLabel v-if="active" >
                  <div style="display: flex; align-items: center;">
                    <div style="flex: 1;">
                    主导航
                    </div>
                  <div class="rotate-icon" :class="{'rotate-180': mainMenuActive}">
                    <Icon name="chevron-down" ></Icon>
                  </div>
                </div>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuItem v-for="item in mainMenuItems" :key="item.id">
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                      v-if="active"
                    >
                      <Icon style="height: 22px;font-size: 16px;" :name="item.icon"  />
                      <span>{{ item.label }}</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                      v-else
                    >
                      <Icon style="width: 100%;height: 22px;font-size: 18px;" :name="item.icon"  />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup v-model:defaultOpen="settingsMenuActive">

                <SidebarGroupLabel v-if="active" >
                  <div style="display: flex; align-items: center;">
                    <div style="flex: 1;">
                    设置
                  </div>
                  <div class="rotate-icon" :class="{'rotate-180': settingsMenuActive}">
                    <Icon name="chevron-down" ></Icon>
                  </div>
                </div>
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenuItem
                    v-for="item in settingsMenuItems"
                    :key="item.id"
                  >
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                      v-if="active"
                    >
                      <Icon style="height: 22px;font-size: 16px;" :name="item.icon" size="16" />
                      <span >{{ item.label }}</span>
                    </SidebarMenuButton>
                    <SidebarMenuButton
                      :active="activeItem === item.id"
                      @click="activeItem = item.id"
                      v-else
                    >
                      <Icon style="width: 100%; height: 100%;font-size: 18px;" :name="item.icon" size="16" />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>

            <div class="user-info" v-if="active">
              <div class="user-avatar">
                <svg
                  width="24"
                  height="24"
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
                <div class="user-name" >用户名称</div>
                <div class="user-role" >管理员</div>
              </div>
            </div>
            <div class="user-info" v-else>
              <div class="user-avatar">
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
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main class="main-content">
          <div class="main-header">
            <SidebarTrigger asChild @click="active = !active">
               <Icon name="panel-right" :size="20" v-if="active" />
               <Icon name="panel-left" :size="20" v-else />
            </SidebarTrigger>
            <div>内容</div>
          </div>

          <div class="main-body">
            <p>点击侧边栏菜单项切换当前激活状态。</p>
            <p>
              {{ active }}
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.demo-content {
  display: flex;
  width: 100%;
  min-height: 800px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.sidebar-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-default);
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
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
  width: 100%;
  transition: opacity 0.9s ease;
}

.user-avatar {

  /* width: 32px; */
  /* height: 32px; */
  background-color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  color: white;
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

.rotate-icon {
  transition: transform 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}
</style>
