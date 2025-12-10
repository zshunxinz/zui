<template>
  <div class="dropdown-demo">
    <h3>在Breadcrumb中使用</h3>
    <div class="dropdown-group">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/">Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Dropdown>
              <DropdownMenu>
                <DropdownMenuTrigger
                  class="flex items-center gap-1"
                  @click="handleDropdownClick1"
                >
                  {{ currentComponent }}
                  <Icon
                    name="chevron-down"
                    size="16"
                    class="dropdown-icon"
                    :rotate="isOpen1 ? 180 : 0"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem
                    @click="handleBreadcrumbItemClick('Documentation')"
                    >Documentation</DropdownMenuItem
                  >
                  <DropdownMenuItem @click="handleBreadcrumbItemClick('Themes')"
                    >Themes</DropdownMenuItem
                  >
                  <DropdownMenuItem @click="handleBreadcrumbItemClick('GitHub')"
                    >GitHub</DropdownMenuItem
                  >
                </DropdownMenuContent>
              </DropdownMenu>
            </Dropdown>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{{ currentPage }}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <h3>自定义触发器</h3>
    <div class="dropdown-group">
      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger
            class="flex items-center gap-1 p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer"
            @click="handleDropdownClick2"
          >
            <Icon name="User" size="20" />
            <span>{{ userMenuText }}</span>
            <Icon
              name="chevron-down"
              size="16"
              class="dropdown-icon"
              :rotate="isOpen2 ? 180 : 0"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem @click="handleUserMenuClick('个人资料')"
              >个人资料</DropdownMenuItem
            >
            <DropdownMenuItem @click="handleUserMenuClick('设置')"
              >设置</DropdownMenuItem
            >
            <DropdownMenuItem @click="handleUserMenuClick('退出登录')"
              >退出登录</DropdownMenuItem
            >
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script setup>
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/Breadcrumb';
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/Dropdown';
import { Icon } from '@/components/Icon';
import { ref } from 'vue';

// 状态管理
const isOpen1 = ref(false);
const isOpen2 = ref(false);
const currentPage = ref('Breadcrumb');
const userMenuText = ref('用户菜单');
const currentComponent = ref('Components');

// 下拉菜单展开/收起处理函数
const handleDropdownClick1 = () => {
  isOpen1.value = !isOpen1.value;
};

const handleDropdownClick2 = () => {
  isOpen2.value = !isOpen2.value;
};

// 面包crumb下拉菜单点击事件
const handleBreadcrumbItemClick = item => {
  currentComponent.value = item;
  currentPage.value = item;
  isOpen1.value = false;
};

// 用户菜单点击事件
const handleUserMenuClick = item => {
  userMenuText.value = item;
  isOpen2.value = false;
};
</script>

<style scoped>
.dropdown-demo {
  padding: 20px;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.dropdown-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.breadcrumb-dropdown-example {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.custom-trigger-example {
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.dropdown-icon {
  transition: transform 0.3s ease;
}
</style>
