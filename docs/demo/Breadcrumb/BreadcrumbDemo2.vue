<template>
  <div class="breadcrumb-demo">
    <h3>与Dropdown结合使用</h3>
    <div class="breadcrumb-dropdown-group">
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
                <DropdownMenuTrigger>
                  Components
                  <Icon name="chevron-down" :size="16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Themes</DropdownMenuItem>
                  <DropdownMenuItem>GitHub</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Dropdown>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Dropdown>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  Navigation
                  <Icon name="chevron-down" :size="16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>Menu</DropdownMenuItem>
                  <DropdownMenuItem>Sidebar</DropdownMenuItem>
                  <DropdownMenuItem>Breadcrumb</DropdownMenuItem>
                  <DropdownMenuItem>Dropdown</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Dropdown>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <h3>多级导航示例</h3>
    <div class="breadcrumb-multi-level">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/">首页</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/admin">管理后台</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <Dropdown>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  用户管理
                  <Icon name="chevron-down" :size="16" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem>用户列表</DropdownMenuItem>
                  <DropdownMenuItem>角色管理</DropdownMenuItem>
                  <DropdownMenuItem>权限设置</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Dropdown>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/admin/users/profile">个人资料</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>编辑资料</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
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
</script>

<style scoped>
.breadcrumb-demo {
  /* padding: 20px; */
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.breadcrumb-dropdown-group,
.breadcrumb-multi-level {
  /* margin-bottom: 20px; */
  /* padding: 15px; */
  /* border-radius: 8px; */
}
</style>
