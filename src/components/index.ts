import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Row } from "./Row";
import { Col } from "./Col";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";
import { HelloWorld } from "./HelloWorld";
import { ThemeToggle } from "./ThemeToggle";
import { Radio } from "./Radio";
import { Checkbox } from "./Checkbox";
import { CheckboxGroup } from "./Checkbox";
import { CheckboxButton } from "./Checkbox";
import { Switch } from "./Switch";
import { Tabs } from "./Tabs";
import { Select, Option, OptionGroup } from "./Select";
import { Card } from "./Card";
import { Form, FormItem } from "./Form";

const install = (app: any) => {
  app.component("GridRow", Row);
  app.component("GridCol", Col);
  app.component("Button", Button);
  app.component("ButtonGroup", ButtonGroup);
  app.component("Input", Input);
  app.component("Textarea", Textarea);
  app.component("Radio", Radio);
  app.component("Checkbox", Checkbox);
  app.component("CheckboxGroup", CheckboxGroup);
  app.component("CheckboxButton", CheckboxButton);
  app.component("Switch", Switch);
  app.component("Tabs", Tabs);
  app.component("Select", Select);
  app.component("Option", Option);
  app.component("OptionGroup", OptionGroup);
  app.component("Card", Card);
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

};
