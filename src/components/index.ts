import { Input } from './Input';
import { Textarea } from './Textarea';
import { Row } from './Row';
import { Col } from './Col';
import { Button } from './Button';
import { ButtonGroup } from './ButtonGroup';
import { HelloWorld } from './HelloWorld';
import { ThemeToggle } from './ThemeToggle';
import { Radio } from './Radio';
import { Checkbox } from './Checkbox';
import { CheckboxGroup } from './Checkbox';
import { CheckboxButton } from './Checkbox';
import { Switch } from './Switch';
import { Tabs } from './Tabs';
import { Select, Option, OptionGroup } from './Select';
import { Card } from './Card';
import { Form, FormItem } from './Form';
import { Tooltip } from './Tooltip';
import { Space } from './Space';
import { Popover } from './Popover';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './Accordion';
import { Divider } from './Divider';
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
} from './Sidebar';
import { Icon } from './Icon';
import { Slider } from './Slider';

const install = (app: any) => {
  app.component('Row', Row);
  app.component('Col', Col);
  app.component('Button', Button);
  app.component('ButtonGroup', ButtonGroup);
  app.component('Input', Input);
  app.component('Textarea', Textarea);
  app.component('Radio', Radio);
  app.component('Checkbox', Checkbox);
  app.component('CheckboxGroup', CheckboxGroup);
  app.component('CheckboxButton', CheckboxButton);
  app.component('Switch', Switch);
  app.component('Tabs', Tabs);
  app.component('Select', Select);
  app.component('Option', Option);
  app.component('OptionGroup', OptionGroup);
  app.component('Card', Card);
  app.component('Form', Form);
  app.component('FormItem', FormItem);
  app.component('Accordion', Accordion);
  app.component('AccordionItem', AccordionItem);
  app.component('AccordionTrigger', AccordionTrigger);
  app.component('AccordionContent', AccordionContent);
  app.component('Tooltip', Tooltip);
  app.component('Space', Space);
  app.component('Divider', Divider);
  app.component('Popover', Popover);
  app.component('SidebarProvider', SidebarProvider);
  app.component('Sidebar', Sidebar);
  app.component('SidebarTrigger', SidebarTrigger);
  app.component('SidebarHeader', SidebarHeader);
  app.component('SidebarContent', SidebarContent);
  app.component('SidebarFooter', SidebarFooter);
  app.component('SidebarGroup', SidebarGroup);
  app.component('SidebarGroupLabel', SidebarGroupLabel);
  app.component('SidebarGroupContent', SidebarGroupContent);
  app.component('SidebarMenu', SidebarMenu);
  app.component('SidebarMenuItem', SidebarMenuItem);
  app.component('SidebarMenuButton', SidebarMenuButton);
  app.component('Icon', Icon);
  app.component('Slider', Slider);
};

// 支持 use 方式安装
export default { install };

export {
  Input,
  Textarea,
  Row,
  Col,
  Button,
  ButtonGroup,
  HelloWorld,
  ThemeToggle,
  Radio,
  Checkbox,
  CheckboxGroup,
  CheckboxButton,
  Switch,
  Select,
  Option,
  OptionGroup,
  Tabs,
  Card,
  Form,
  FormItem,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Tooltip,
  Space,
  Divider,
  Popover,
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
  Icon,
  Slider,
};
