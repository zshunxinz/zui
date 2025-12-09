<template>
  <div class="breadcrumb-debug-container">
    <h3>Breadcrumb Debug Test</h3>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">
          <Icon name="house" />
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
      <h4>Debug Information</h4>
      <div class="element-styles" v-for="(element, index) in debugElements" :key="index">
        <h5>{{ element.name }}</h5>
        <pre>{{ JSON.stringify(element.styles, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';
import BreadcrumbLink from './BreadcrumbLink.vue';
import BreadcrumbSeparator from './BreadcrumbSeparator.vue';
import BreadcrumbPage from './BreadcrumbPage.vue';
import Icon from '../Icon/Icon.vue';

const debugElements = ref([]);

onMounted(() => {
  // 获取所有面包屑相关元素
  const elements = [
    { name: 'Breadcrumb', selector: '.x-breadcrumb' },
    { name: 'BreadcrumbItem (Home)', selector: '.x-breadcrumb-item:first-child' },
    { name: 'BreadcrumbLink (Home)', selector: '.x-breadcrumb-item:first-child .x-breadcrumb-link' },
    { name: 'Icon (Home)', selector: '.x-breadcrumb-item:first-child .x-icon' },
    { name: 'BreadcrumbSeparator', selector: '.x-breadcrumb-separator' },
    { name: 'BreadcrumbSeparatorIcon', selector: '.x-breadcrumb-separator-icon' },
    { name: 'BreadcrumbItem (Components)', selector: '.x-breadcrumb-item:nth-child(3)' },
    { name: 'BreadcrumbLink (Components)', selector: '.x-breadcrumb-item:nth-child(3) .x-breadcrumb-link' },
    { name: 'BreadcrumbItem (Breadcrumb)', selector: '.x-breadcrumb-item:last-child' },
    { name: 'BreadcrumbPage (Breadcrumb)', selector: '.x-breadcrumb-page' },
  ];
  
  // 获取每个元素的计算样式
  debugElements.value = elements.map(element => {
    const el = document.querySelector(element.selector);
    if (el) {
      const styles = window.getComputedStyle(el);
      return {
        name: element.name,
        styles: {
          height: styles.height,
          lineHeight: styles.lineHeight,
          fontSize: styles.fontSize,
          fontWeight: styles.fontWeight,
          display: styles.display,
          alignItems: styles.alignItems,
          justifyContent: styles.justifyContent,
          padding: styles.padding,
          margin: styles.margin,
          boxSizing: styles.boxSizing,
          verticalAlign: styles.verticalAlign,
          color: styles.color,
        }
      };
    }
    return {
      name: element.name,
      styles: 'Element not found'
    };
  });
});
</script>

<style scoped>
.breadcrumb-debug-container {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.debug-info {
  margin-top: 30px;
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.element-styles {
  margin-bottom: 15px;
  padding: 10px;
  background: white;
  border-radius: 4px;
}

.element-styles h5 {
  margin: 0 0 10px 0;
  color: #333;
}

.element-styles pre {
  margin: 0;
  font-family: monospace;
  font-size: 12px;
  color: #666;
  overflow-x: auto;
}
</style>