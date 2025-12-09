<template>
  <div class="breadcrumb-demo">
    <h3>基础用法</h3>
    <div class="breadcrumb-group">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/">Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/components">Components</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <h3>自定义分隔符</h3>
    <div class="breadcrumb-group">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/">首页</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Icon name="chevron-right" :size="16" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/products">产品中心</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Icon name="chevron-right" :size="16" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/products/electronics">电子产品</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Icon name="chevron-right" :size="16" />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>手机</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>

    <h3>禁用状态</h3>
    <div class="breadcrumb-group">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/">Home</a>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink disabled> Disabled Link </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator> / </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
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
import { Icon } from '@/components/Icon';
</script>

<style scoped>
.breadcrumb-demo {
  /* padding: 20px; */
}

h3 {
  font-size: 16px;
  font-weight: 500;
}

.breadcrumb-group {
  /* padding: 15px; */
  /* background-color: #f5f5f5; */
  border-radius: 8px;
}
</style>
