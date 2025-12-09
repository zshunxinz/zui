<template>
  <div class="breadcrumb-test-container">
    <h3>面包屑组件测试</h3>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon name="house" />
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </Breadcrumb>
    
    <div class="debug-info">
      <h4>调试信息</h4>
      <p>检查Home项、分隔符和当前页面项的对齐情况</p>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';
import BreadcrumbLink from './BreadcrumbLink.vue';
import BreadcrumbSeparator from './BreadcrumbSeparator.vue';
import BreadcrumbPage from './BreadcrumbPage.vue';
import Icon from '../Icon/Icon.vue';
</script>

<style scoped>
.breadcrumb-test-container {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  margin: 20px;
}

.debug-info {
  margin-top: 20px;
  padding: 10px;
  background-color: var(--color-text-bg);
  border-radius: var(--border-radius);
}
</style>