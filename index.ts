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

import type { App } from 'vue';

// 导入组件库的默认install方法（包含ToastPlugin的安装）
import ComponentsInstall from './src/components';
import { Space } from './src/components/Space';
import { Divider } from './src/components/Divider';
import { Icon } from './src/components/Icon';
import { Modal, showModal } from './src/components/Modal';
import { Drawer, showDrawer } from './src/components/Drawer';

export default {
  install(app: App) {
    // 使用components/index.ts中导出的install方法，确保ToastPlugin被正确安装
    ComponentsInstall.install(app);
    // 将showModal和showDrawer函数挂载到Vue全局属性上
    app.config.globalProperties.$showModal = showModal;
    app.config.globalProperties.$showDrawer = showDrawer;
  },
};

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
};
