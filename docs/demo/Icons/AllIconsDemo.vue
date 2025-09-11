<!-- <template>
  <div class="all-icons-demo">
    <div class="icons-grid">
      <div v-for="icon in icons" :key="icon" class="icon-item">
        <Icon :name="icon" :size="32" />
        <span class="icon-name">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Icon from '../../../src/components/Icon';

const icons = [
  'activity',
  'alert-circle',
  'area-chart',
  'arrow-circle-down',
  'arrow-circle-left',
  'arrow-circle-right',
  'arrow-circle-up',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'align-center',
  'align-justify',
  'align-left',
  'align-right',
  'bar-chart',
  'bar-chart-2',
  'bar-chart-3',
  'bell',
  'bubble-chart',
  'calendar',
  'camera',
  'candle-chart',
  'chart-gantt',
  'chart-line-vertical',
  'chart-pie',
  'chat-bubble',
  'chat-bubble-2',
  'chat-heart',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'clock',
  'cloud',
  'cloud-lightning',
  'cloud-rain',
  'cloud-snow',
  'cloud-sun',
  'bold',
  'copy',
  'confused',
  'copy-check',
  'cry',
  'cut',
  'database',
  'database-backup',
  'disk',
  'download',
  'edit',
  'external-link',
  'italic',
  'eye',
  'eye-off',
  'emoji-minus',
  'emoji-plus',
  'emoji-settings',
  'flex',
  'fog',
  'firewall',
  'file',
  'file-image',
  'file-pdf',
  'file-spreadsheet',
  'file-text',
  'file-zip',
  'frown',
  'filter',
  'folder',
  'graph-spline',
  'heart',
  'monitor',
  'home',
  'image',
  'info',
  'key',
  'line-chart',
  'link',
  'radar-chart',
  'lock',
  'laugh',
  'mail',
  'map',
  'map-pin',
  'menu',
  'moon',
  'network',
  'redo',
  'message-circle',
  'message-square',
  'scatter-chart',
  'strikethrough',
  'text-align-center',
  'text-align-justify',
  'text-align-left',
  'text-align-right',
  'underline',
  'undo',
  'minus',
  'more-horizontal',
  'more-vertical',
  'phone',
  'pie-chart',
  'plus',
  'refresh-cw',
  'rss',
  'search',
  'screen-share',
  'server',
  'settings',
  'send',
  'send-horizontal',
  'settings-2',
  'share-2',
  'shield',
  'shield-check',
  'scan',
  'smile',
  'spell-check',
  'spell-check-2',
  'surprised',
  'sun',
  'stacked-bar-chart',
  'star',
  'tag',
  'stats',
  'table',
  'trash',
  'trending-down',
  'trending-up',
  'unlock',
  'wifi',
  'zap',
  'zoom-in',
  'zoom-out',
  'upload',
  'user',
  'data-compare',
  'data-filter',
  'data-flow',
  'data-grid',
  'grid-2x2',
  'grid-3x3',
  'grid-cols-2',
  'grid-cols-3',
  'grid-rows-2',
  'grid-rows-3',
  'data-point',
  'data-usage',
  'dot-chart',
  'users',
  'video',
  'volume-2',
  'volume-x',
  'warning',
  'wind',
  'x',
];
</script>

<style scoped>
.all-icons-demo {
  padding: 20px;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: 1px solid var(--color-border-1);
  transition: all 0.2s ease;
}

.icon-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-name {
  margin-top: 12px;
  font-size: 12px;
  color: var(--color-text-3);
  text-align: center;
}
</style> -->


<template>
  <div class="all-icons-demo">
    <div class="icons-grid">
      <div v-for="icon in icons" :key="icon" class="icon-item">
        <span class="icon-name-tooltip">{{ icon }}</span>
        <Icon :name="icon" :size="36" />
        <span class="icon-name">{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>


// 使用 import.meta.glob 动态导入所有 SVG 文件
const iconModules = import.meta.glob('../../../src/components/Icon/icons/*.svg')

// 从文件路径中提取图标名称
const icons = Object.keys(iconModules).map(path => {
  // 提取文件名并去掉 .svg 扩展名
  const fileName = path.split('/').pop()
  return fileName.replace('.svg', '')
}).slice(0, 500)
</script>

<style scoped>
.all-icons-demo {
  padding: 0px;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-0);
  transition: all 0.2s ease;
}

.icon-name-tooltip {
  display: none;
  position: absolute;
  top: 110%;
  /* left: 50%; */
  width: max-content;
  z-index: 10;
  /* transform: translateX(-50%); */
  background-color: var(--color-default);
  color: var(--color-default-text-1);
  padding: var(--padding-1);
  border-radius: var(--border-radius-0);
  font-size: 12px;
  text-align: center;
}

.icon-item:hover .icon-name-tooltip {
  display: block;
}

.icon-item:hover {
  transform: translateY(-2px);
  /* background-color: var(--color-default-hover-text); */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.icon-name {
  margin-top: 6px;
  font-size: 12px;
  color: #666;
  text-align: center;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
}
</style>