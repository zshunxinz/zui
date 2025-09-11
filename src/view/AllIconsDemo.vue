<!-- <template>
  <div class="all-icons-demo">
    <h2>所有图标演示</h2>
    
    <div class="icons-grid">
      <div v-for="icon in icons" :key="icon" class="icon-item">
        <Icon :name="icon" :size="32" />
        <span class="icon-name">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon'

const icons = [
  'check',
  'x',
  'chevron-down',
  'chevron-up',
  'chevron-left',
  'chevron-right',
  'plus',
  'minus',
  'search',
  'user',
  'settings',
  'home',
  'heart',
  'star',
  'menu',
  'more-horizontal',
  'more-vertical',
  'copy',
  'trash',
  'edit',
  'eye',
  'eye-off',
  'download',
  'upload'
]
</script>

<style scoped>
.all-icons-demo {
  padding: 20px;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.icon-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-name {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  text-align: center;
}
</style> -->

<template>
  <div class="all-icons-demo">
    <h2>所有图标演示</h2>

    <div class="icons-grid">
      <div v-for="icon in icons" :key="icon" class="icon-item">
        <Icon :name="icon" :size="32" />
        <span class="icon-name">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../components/Icon'

// 使用 import.meta.glob 动态导入所有 SVG 文件
const iconModules = import.meta.glob('../components/Icon/icons/*.svg')

// 从文件路径中提取图标名称
const icons = Object.keys(iconModules).map(path => {
  // 提取文件名并去掉 .svg 扩展名
  const fileName = path.split('/').pop()
  return fileName.replace('.svg', '')
})
</script>

<style scoped>
.all-icons-demo {
  padding: 20px;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.icon-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-name {
  margin-top: 8px;
  font-size: 12px;
  color: #666;
  text-align: center;
}
</style>