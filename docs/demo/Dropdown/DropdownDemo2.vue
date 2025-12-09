<template>
  <div class="dropdown-demo">
    <h3>在Breadcrumb中使用</h3>
    <div class="breadcrumb-dropdown-example">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/">Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Dropdown>
              <DropdownMenu>
                <DropdownMenuTrigger class="flex items-center gap-1">
                  Components
                  <Icon name="ChevronDown" size="16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Dropdown>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <h3>自定义触发器</h3>
    <div class="custom-trigger-example">
      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-1 p-2 bg-gray-100 rounded-md hover:bg-gray-200 cursor-pointer">
            <Icon name="User" size="20" />
            <span>用户菜单</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>个人资料</DropdownMenuItem>
            <DropdownMenuItem>设置</DropdownMenuItem>
            <DropdownMenuItem>退出登录</DropdownMenuItem>
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
  BreadcrumbPage
} from '@/components/Breadcrumb';
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/Dropdown';
import { Icon } from '@/components/Icon';
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
</style>
