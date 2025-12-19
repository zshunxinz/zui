import './src/styles/theme.css';
import './src/styles/variables.css';
import { Button } from './src/components/Button';
import { ButtonGroup } from './src/components/ButtonGroup';
import { Col } from './src/components/Col';
import { Input } from './src/components/Input';
import { Row } from './src/components/Row';
import { Radio } from './src/components/Radio';
import { Checkbox } from './src/components/Checkbox';
import { CheckboxGroup } from './src/components/Checkbox';
import { CheckboxButton } from './src/components/Checkbox';
import { Switch } from './src/components/Switch';
import { Tabs } from './src/components/Tabs';
import { Card } from './src/components/Card';
import { Select, Option, OptionGroup } from './src/components/Select';
import { Textarea } from './src/components/Textarea';
import { Form, FormItem } from './src/components/Form';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './src/components/Accordion';
import { Tooltip } from './src/components/Tooltip';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from './src/components/Menubar';
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarLayout,
} from './src/components/Sidebar';

import type { App, Plugin } from 'vue';

// 导入组件库的默认install方法（包含ToastPlugin的安装）
import ComponentsInstall from './src/components';
import { Space } from './src/components/Space';
import { Divider } from './src/components/Divider';
import { Icon } from './src/components/Icon';
import { Modal, showModal } from './src/components/Modal';
import { Drawer, showDrawer } from './src/components/Drawer';

// 导出一个命名的Zui01对象，用于命名导出
const Zui01 = {
  install(app: App) {
    // 使用components/index.ts中导出的install方法，确保ToastPlugin被正确安装
    ComponentsInstall.install(app);
    // 将showModal和showDrawer函数挂载到Vue全局属性上
    app.config.globalProperties.$showModal = showModal;
    app.config.globalProperties.$showDrawer = showDrawer;
  },
};

// 定义插件，使用类型断言确保符合Vue 3的Plugin类型要求
const plugin = Zui01 as unknown as Plugin;

// 同时导出命名导出和默认导出，保持兼容性
export default plugin;

export {
  Button,
  ButtonGroup,
  Col,
  Input,
  Row,
  Radio,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Switch,
  Tabs,
  Card,
  Select,
  Option,
  OptionGroup,
  Textarea,
  Form,
  FormItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Tooltip,
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarLayout,
  Space,
  Divider,
  Icon,
  Modal,
  showModal,
  Drawer,
  showDrawer,
};
