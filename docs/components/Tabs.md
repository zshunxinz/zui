# Tabs 标签页

标签页组件用于在同一区域展示不同内容，支持多种样式和位置。

## 基础用法

基础的标签页用法，通过`v-model`绑定当前激活的标签索引。

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "账号", name: "account" },
  { label: "密码", name: "password" },
];


const activeTab1 = ref(0);
const tabs1 = [
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2" },
];
const activeTab2 = ref(0);
const tabs2 = [
  { label: "Active", name: "tab1" },
  { label: "Disabled", name: "tab2", disabled: true },
  { label: "Another Active", name: "tab3" },
];
const handleTabClick = (tab) => {
  console.log("handleTabClick",tab);
};
const handleUpdateModelValue = (val) => {
  console.log("handleUpdateModelValue",val);
};

const handleClose = (tab) => {
  console.log("handleClose",tab);
};

const activeClosableTab = ref(0);
const closableTabs = ref([
  { label: "Home", name: "home" },
  { label: "Products", name: "products" },
  { label: "Services", name: "services" },
  { label: "About", name: "about" },
]);

const handleTabClose = (index) => {
  console.log("handleTabClose",index);
  // 防止关闭最后一个标签页
  if (closableTabs.value.length <= 1) {
    // alert('至少需要保留一个标签页');
    return;
  }
  
  // 从tabs数组中移除对应标签
  closableTabs.value.splice(index, 1);
  
  // 如果关闭的是当前激活的标签页，自动激活前一个标签页
  if (activeClosableTab.value === index) {
    activeClosableTab.value = Math.min(index, closableTabs.value.length - 1);
  }
}

const partialClosableTab = ref(0);
const partialClosableTabs = ref([
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2", close: true },
  { label: "Tab 3", name: "tab3" },
  { label: "Tab 4", name: "tab4", close: true },
]);

const handlePartialClose = (index) => {
  // 防止关闭所有可关闭的标签页
  const closableCount = partialClosableTabs.value.filter(tab => tab.close).length;
  if (closableCount <= 1) {
    // alert('至少需要保留一个可关闭的标签页');
    return;
  }
  
  // 从tabs数组中移除对应标签
  partialClosableTabs.value.splice(index, 1);
  
  // 如果关闭的是当前激活的标签页，自动激活前一个标签页
  if (partialClosableTab.value === index) {
    partialClosableTab.value = Math.min(index, partialClosableTabs.value.length - 1);
  }
}
</script>

<style scoped>
.demo-tabs-basic {
  width: 360px;
}

.tab-content {
  padding: 10px;
  border: 1px solid var(--color-border-1);
  border-radius: var(--border-radius-1);
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  display: block;
  font-size: 14px;
  margin-bottom: 3px;
}

.form-control{
  /* background-color:rgb(245, 245, 245); */
}
</style>
<div class="demo-tabs-basic">
    <Tabs v-model="activeTab" :tabs="tabs" @tab-click="handleTabClick" @update:modelValue="handleUpdateModelValue" @tab-close="handleClose">
        <template #account>
          <div class="tab-content">
            <div class="form-group">
              <label>账号</label>
              <Input v-model="value" placeholder="请输入账号" class="form-control" width="100%"/>
            </div>
            <div class="form-group">
              <label>用户名</label>
              <Input type="text" placeholder="@peduarte" class="form-control" width="100%"/>
            </div>
            <Row>
              <Col :span="12">
                <Button type="default">保存账号</Button>
              </Col>
            </Row>
          </div>
        </template>
        <template #password>
          <div class="tab-content">
            <div class="form-group">
              <label>当前密码</label>
              <Input type="password" placeholder="请输入当前密码" class="form-control" width="100%"/>
            </div>
            <div class="form-group">
              <label>新密码</label>
              <Input type="password" placeholder="请输入新密码" class="form-control" width="100%"/>
            </div>
            <Button type="default" >保存密码</Button>
          </div>
        </template>
      </Tabs>

</div>

```vue
<template>
  <div class="demo-tabs-basic">
    <Tabs v-model="activeTab" :tabs="tabs">
      <template #account>
        <div class="tab-content">
          <h3>Account</h3>
          <p>Make changes to your account here. Click save when you're done.</p>
          <div class="form-group">
            <label>Name</label>
            <Input type="text" value="Pedro Duarte" class="form-control" />
          </div>
          <div class="form-group">
            <label>Username</label>
            <Input type="text" value="@peduarte" class="form-control" />
          </div>
          <Button type="primary">保存</Button>
        </div>
      </template>
      <template #password>
        <div class="tab-content">
          <h3>Password</h3>
          <p>Change your password here. After saving, you'll be logged out.</p>
          <div class="form-group">
            <label>Current password</label>
            <input type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label>New password</label>
            <input type="password" class="form-control" />
          </div>
          <div class="form-group">
            <label>Confirm new password</label>
            <input type="password" class="form-control" />
          </div>
          <button class="btn btn-primary">Save password</button>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Account", name: "account" },
  { label: "Password", name: "password" },
];
</script>

<style scoped>
.demo-tabs-basic {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  box-sizing: border-box;
}
</style>
```

## 不同类型

支持多种类型的标签页，包括`primary`、`success`、`warning`、`danger`和`info`。

<Tabs v-model="activeTab1" :tabs="tabs1" type="primary">
      <template #tab1>Primary Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

<Tabs v-model="activeTab1"
      :tabs="tabs1"
      type="success"
      style="margin-top: 20px;"
    >
<template #tab1>Success Tab Content</template>
<template #tab2>Secondary Tab Content</template>
</Tabs>
<Tabs
      v-model="activeTab1"
      :tabs="tabs1"
      type="warning"
      style="margin-top: 20px;"
    >
<template #tab1>Warning Tab Content</template>
<template #tab2>Secondary Tab Content</template>
</Tabs>
<Tabs
v-model="activeTab1"
:tabs="tabs1"
type="danger"
style="margin-top: 20px;">
<template #tab1>Danger Tab Content</template>
<template #tab2>Secondary Tab Content</template>
</Tabs>
<Tabs
v-model="activeTab1"
:tabs="tabs1"
type="info"
style="margin-top: 20px;">
<template #tab1>Info Tab Content</template>
<template #tab2>Secondary Tab Content</template>
</Tabs>

```vue
<template>
  <div class="demo-tabs-types">
    <Tabs v-model="activeTab" :tabs="tabs" type="primary">
      <template #tab1>Primary Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="success"
      style="margin-top: 20px;"
    >
      <template #tab1>Success Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="warning"
      style="margin-top: 20px;"
    >
      <template #tab1>Warning Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="danger"
      style="margin-top: 20px;"
    >
      <template #tab1>Danger Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      type="info"
      style="margin-top: 20px;"
    >
      <template #tab1>Info Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2" },
];
</script>
```

## 不同尺寸

支持`small`、`default`和`large`三种尺寸。

<div class="demo-tabs-sizes">
  <Tabs v-model="activeTab" :tabs="tabs" size="small">
    <template #tab1>Small Tab Content</template>
    <template #tab2>Secondary Tab Content</template>
  </Tabs>

<Tabs v-model="activeTab"
:tabs="tabs"
size="default"
style="margin-top: 20px;">
<template #tab1>Default Tab Content</template>
<template #tab2>Secondary Tab Content</template>
</Tabs>
<Tabs v-model="activeTab"
:tabs="tabs"
size="large"
style="margin-top: 20px;">
<template #tab1>Large Tab Content</template>
<template #tab2>Secondary Tab Content</template>
</Tabs>

</div>

```vue
<template>
  <div class="demo-tabs-sizes">
    <Tabs v-model="activeTab" :tabs="tabs" size="small">
      <template #tab1>Small Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      size="default"
      style="margin-top: 20px;"
    >
      <template #tab1>Default Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      size="large"
      style="margin-top: 20px;"
    >
      <template #tab1>Large Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2" },
];
</script>
```

## 不同位置

标签页可以放置在`top`、`bottom`、`left`或`right`四个位置。

<div class="demo-tabs-position">
  <Tabs v-model="activeTab1" :tabs="tabs1" position="top" style="border: 1px solid var(--color-border);padding:10px">
    <template #tab1>Top Tab Content</template>
    <template #tab2>Secondary Tab Content</template>
  </Tabs>
  <Tabs
    v-model="activeTab1"
    :tabs="tabs1"
    position="bottom"
    style="margin-top: 20px;border: 1px solid var(--color-border);padding:10px"
  >
    <template #tab1>Bottom Tab Content</template>
    <template #tab2>Secondary Tab Content</template>
  </Tabs>
    <Tabs v-model="activeTab1" :tabs="tabs1" position="left" style="margin-top: 20px;border: 1px solid var(--color-border);padding:10px">
      <template #tab1>Left Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>
    <Tabs v-model="activeTab1" :tabs="tabs1" position="right" style="margin-top: 20px;border: 1px solid var(--color-border);padding:10px">
      <template #tab1>Right Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>
</div>

```vue
<template>
  <div class="demo-tabs-position">
    <Tabs v-model="activeTab" :tabs="tabs" position="top">
      <template #tab1>Top Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <Tabs
      v-model="activeTab"
      :tabs="tabs"
      position="bottom"
      style="margin-top: 20px;"
    >
      <template #tab1>Bottom Tab Content</template>
      <template #tab2>Secondary Tab Content</template>
    </Tabs>

    <div style="display: flex; gap: 20px; margin-top: 20px;">
      <Tabs v-model="activeTab" :tabs="tabs" position="left">
        <template #tab1>Left Tab Content</template>
        <template #tab2>Secondary Tab Content</template>
      </Tabs>

      <Tabs v-model="activeTab" :tabs="tabs" position="right">
        <template #tab1>Right Tab Content</template>
        <template #tab2>Secondary Tab Content</template>
      </Tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const tabs = [
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2" },
];
</script>
```

## 禁用标签

可以禁用某些标签页。
<Tabs v-model="activeTab2" :tabs="tabs2">
<template #tab1>Active Tab Content</template>
<template #tab2>Disabled Tab Content</template>
<template #tab3>Another Active Tab Content</template>
</Tabs>

```vue
<template>
  <div class="demo-tabs-disabled">
    <Tabs v-model="activeTab" :tabs="tabs">
      <template #tab1>Active Tab Content</template>
      <template #tab2>Disabled Tab Content</template>
      <template #tab3>Another Active Tab Content</template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeTab2 = ref(0);
const tabs2 = [
  { label: "Active", name: "tab1" },
  { label: "Disabled", name: "tab2", disabled: true },
  { label: "Another Active", name: "tab3" },
];
</script>
```

## 可关闭标签页

### 全部标签可关闭

设置`closable`属性为`true`可以启用标签页的关闭功能，并通过`@tab-close`事件处理标签关闭的逻辑。

<Tabs v-model="activeClosableTab" :tabs="closableTabs" :closable="true" @tab-close="handleTabClose">
<template #home>

<div class="tab-content">
<h3>首页</h3>
<p>这是首页内容区域</p>
</div>
</template>
<template #products>
<div class="tab-content">
<h3>产品</h3>
<p>这是产品内容区域</p>
</div>
</template>
<template #services>
<div class="tab-content">
<h3>服务</h3>
<p>这是服务内容区域</p>
</div>
</template>
<template #about>
<div class="tab-content">
<h3>关于我们</h3>
<p>这是关于我们内容区域</p>
</div>
</template>
</Tabs>

```vue
<template>
  <div class="demo-tabs-closable">
    <Tabs
      v-model="activeClosableTab"
      :tabs="closableTabs"
      :closable="true"
      @tab-close="handleTabClose"
    >
      <template #home>
        <div class="tab-content">
          <h3>首页</h3>
          <p>这是首页内容区域</p>
        </div>
      </template>
      <template #products>
        <div class="tab-content">
          <h3>产品</h3>
          <p>这是产品内容区域</p>
        </div>
      </template>
      <template #services>
        <div class="tab-content">
          <h3>服务</h3>
          <p>这是服务内容区域</p>
        </div>
      </template>
      <template #about>
        <div class="tab-content">
          <h3>关于我们</h3>
          <p>这是关于我们内容区域</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeClosableTab = ref(0);
const closableTabs = ref([
  { label: "Home", name: "home" },
  { label: "Products", name: "products" },
  { label: "Services", name: "services" },
  { label: "About", name: "about" },
]);

const handleTabClose = (index) => {
  // 防止关闭最后一个标签页
  if (closableTabs.value.length <= 1) {
    // alert("至少需要保留一个标签页");
    return;
  }

  // 从tabs数组中移除对应标签
  closableTabs.value.splice(index, 1);

  // 如果关闭的是当前激活的标签页，自动激活前一个标签页
  if (activeClosableTab.value === index) {
    activeClosableTab.value = Math.min(index, closableTabs.value.length - 1);
  }
};
</script>

<style scoped>
.demo-tabs-closable {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>
```

### 部分标签可关闭

可以在标签配置中设置`close`属性来控制单个标签是否可关闭，而不是使用`closable`属性控制所有标签。

<Tabs v-model="partialClosableTab" :tabs="partialClosableTabs" @tab-close="handlePartialClose">
<template #tab1>

<div class="tab-content">
<h3>Tab 1</h3>
<p>这个标签不可关闭</p>
</div>
</template>
<template #tab2>
<div class="tab-content">
<h3>Tab 2</h3>
<p>这个标签可关闭 (带 close=true)</p>
</div>
</template>
<template #tab3>
<div class="tab-content">
<h3>Tab 3</h3>
<p>这个标签不可关闭</p>
</div>
</template>
<template #tab4>
<div class="tab-content">
<h3>Tab 4</h3>
<p>这个标签可关闭 (带 close=true)</p>
</div>
</template>
</Tabs>

```vue
<template>
  <div class="demo-tabs-partial-closable">
    <Tabs
      v-model="partialClosableTab"
      :tabs="partialClosableTabs"
      @tab-close="handlePartialClose"
    >
      <template #tab1>
        <div class="tab-content">
          <h3>Tab 1</h3>
          <p>这个标签不可关闭</p>
        </div>
      </template>
      <template #tab2>
        <div class="tab-content">
          <h3>Tab 2</h3>
          <p>这个标签可关闭 (带close=true)</p>
        </div>
      </template>
      <template #tab3>
        <div class="tab-content">
          <h3>Tab 3</h3>
          <p>这个标签不可关闭</p>
        </div>
      </template>
      <template #tab4>
        <div class="tab-content">
          <h3>Tab 4</h3>
          <p>这个标签可关闭 (带close=true)</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";

const partialClosableTab = ref(0);
const partialClosableTabs = ref([
  { label: "Tab 1", name: "tab1" },
  { label: "Tab 2", name: "tab2", close: true },
  { label: "Tab 3", name: "tab3" },
  { label: "Tab 4", name: "tab4", close: true },
]);

const handlePartialClose = (index) => {
  // 防止关闭所有可关闭的标签页
  const closableCount = partialClosableTabs.value.filter(
    (tab) => tab.close
  ).length;
  if (closableCount <= 1) {
    // alert("至少需要保留一个可关闭的标签页");
    return;
  }

  // 从tabs数组中移除对应标签
  partialClosableTabs.value.splice(index, 1);

  // 如果关闭的是当前激活的标签页，自动激活前一个标签页
  if (partialClosableTab.value === index) {
    partialClosableTab.value = Math.min(
      index,
      partialClosableTabs.value.length - 1
    );
  }
};
</script>

<style scoped>
.demo-tabs-partial-closable {
  max-width: 600px;
  margin: 0 auto;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
}
</style>
```

## API

### Props

| 参数         | 说明                                                                            | 类型         | 默认值    |
| ------------ | ------------------------------------------------------------------------------- | ------------ | --------- |
| `modelValue` | 当前激活的标签索引                                                              | `number`     | 0         |
| `tabs`       | 标签配置数组                                                                    | `Array<Tab>` | `[]`      |
| `position`   | 标签位置，可选值为 `top`、`bottom`、`left`、`right`                             | `string`     | `top`     |
| `type`       | 标签类型，可选值为 `default`、`primary`、`success`、`warning`、`danger`、`info` | `string`     | `default` |
| `size`       | 标签尺寸，可选值为 `small`、`default`、`large`                                  | `string`     | `default` |
| `closable`   | 是否可关闭标签                                                                  | `boolean`    | `false`   |

### Tab 接口

| 属性       | 说明                                   | 类型      | 默认值  |
| ---------- | -------------------------------------- | --------- | ------- |
| `label`    | 标签文本                               | `string`  | -       |
| `name`     | 标签名称，对应插槽名称                 | `string`  | -       |
| `disabled` | 是否禁用                               | `boolean` | `false` |
| `close`    | 是否可关闭（优先级高于 closable 属性） | `boolean` | `false` |

### Events

| 事件名              | 说明                                         | 回调参数              |
| ------------------- | -------------------------------------------- | --------------------- |
| `update:modelValue` | 标签切换时触发                               | 当前标签索引 `number` |
| `tab-click`         | 标签点击时触发                               | 当前标签索引 `number` |
| `tab-close`         | 标签关闭时触发（当`closable`为`true`时可用） | 当前标签索引 `number` |

### Slots

| 插槽名       | 说明                                                 |
| ------------ | ---------------------------------------------------- |
| `[tab.name]` | 对应标签的内容，`tab.name`为标签配置中的`name`属性值 |
