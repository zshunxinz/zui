import { RouteRecordRaw } from 'vue-router';

const SidebarDemoRoute: RouteRecordRaw = {
  path: '/sidebar',
  component: () => import('./SidebarDemo.vue'),
  meta: {
    title: 'Sidebar 组件演示',
    category: '布局组件',
  },
};

export default SidebarDemoRoute;