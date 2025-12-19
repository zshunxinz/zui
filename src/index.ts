import './styles/theme.css';
import './styles/variables.css';
import { Button } from './components/Button';
import { ButtonGroup } from './components/ButtonGroup';
import { Col } from './components/Col';
import { Input } from './components/Input';
import { Row } from './components/Row';
import { Radio } from './components/Radio';
import { Checkbox } from './components/Checkbox';
import { CheckboxGroup } from './components/Checkbox';
import { CheckboxButton } from './components/Checkbox';
import { Switch } from './components/Switch';
import { Tabs } from './components/Tabs';
import { Card } from './components/Card';
import { Select, Option, OptionGroup } from './components/Select';
import { Textarea } from './components/Textarea';
import { Form, FormItem } from './components/Form';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './components/Accordion';
import { Tooltip } from './components/Tooltip';
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
} from './components/Sidebar';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from './components/Menubar';

import type { App, Plugin } from 'vue';

// 导入组件库的默认install方法（包含ToastPlugin的安装）
import ComponentsInstall from './components';
import { Space } from './components/Space';
import { Divider } from './components/Divider';
import { Icon } from './components/Icon';
import { Modal, showModal } from './components/Modal';
import { Drawer, showDrawer } from './components/Drawer';

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
  Space,
  Divider,
  Icon,
  Modal,
  showModal,
  Drawer,
  showDrawer,
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
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
};
