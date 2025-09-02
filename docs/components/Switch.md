# Switch 开关

用于在两个互斥状态之间切换的开关组件。

<script setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(false)
const value5 = ref(true)
const value6 = ref(false)
const value7 = ref(true)
const value8 = ref(true)
const value9 = ref(true)
const value10 = ref(true)
const value11 = ref(true)
const value12 = ref(true)
const value13 = ref(true)
const value14 = ref(true)
const value15 = ref('开启')
const value16 = ref(true)
const value17 = ref(true)
const value18 = ref(false)
const value19 = ref(false)
const value20 = ref(false)
const changeText = ref('未改变')

const handleChange1 = (value) => {
  changeText.value = value ? '已开启' : '已关闭'
}

const handleChange2 = (value) => {
  console.log('开关状态改变:', value)
}

let switchLoading = ref(false);
const handleLoad = () => {
  if (value1.value == true) {
    switchLoading.value = true;
    setTimeout(() => {
      switchLoading.value = false;
    }, 1000);
  }
};
</script>

<style scoped>
.switch-demo {
  padding: 20px 0;
}
.demo-switch {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px;
}
</style>

## 基础用法

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value1" />
      <span>{{ value1 }}</span>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value" />
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(true);
</script>
```

</CollapsibleCode>

## 文字描述

使用 `active-text` 和 `inactive-text` 属性来设置开关的文字描述。

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch
        v-model="value2"
        active-text="开启"
        inactive-text="关闭"
      />
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value" active-text="开启" inactive-text="关闭" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref(true);
</script>
```

</CollapsibleCode>

## 禁用状态

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value3" disabled />
      <Switch v-model="value4" disabled />
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value1" disabled />
      <Switch v-model="value2" disabled />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(false);
</script>
```

</CollapsibleCode>

## 加载状态

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch
        v-model="value5"
        type="primary"
        :loading="switchLoading"
        @change="handleLoad"
      />
      <Switch v-model="value6" loading />
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch
        v-model="value1"
        type="primary"
        :loading="switchLoading"
        @change="handleLoad"
      />
      <Switch v-model="value2" loading />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
const switchLoading = ref(false);

const handleLoad = () => {
  if (value1.value == true) {
    switchLoading.value = true;
    setTimeout(() => {
      switchLoading.value = false;
    }, 1000);
  }
};
</script>
```

</CollapsibleCode>

## 不同尺寸

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value7" size="small" />
      <Switch v-model="value8" />
      <Switch v-model="value9" size="large" />
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value1" size="small" />
      <Switch v-model="value2" />
      <Switch v-model="value3" size="large" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
</script>
```

</CollapsibleCode>

## 不同颜色

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value10" type="primary" />
      <Switch v-model="value11" type="success" />
      <Switch v-model="value12" type="warning" />
      <Switch v-model="value13" type="danger" />
      <Switch v-model="value14" type="info" />
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value1" type="primary" />
      <Switch v-model="value2" type="success" />
      <Switch v-model="value3" type="warning" />
      <Switch v-model="value4" type="danger" />
      <Switch v-model="value5" type="info" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
const value5 = ref(true);
</script>
```

</CollapsibleCode>

## 自定义值

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch
        v-model="value15"
        active-value="开启"
        inactive-value="关闭"
      />
      <span>{{ value15 }}</span>
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value" active-value="开启" inactive-value="关闭" />
      <span>{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value = ref("开启");
</script>
```

</CollapsibleCode>

## 不同形状

支持圆形和方形两种形状，默认为圆形。

<Demo>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value18" shape="round" />
      <Switch v-model="value19" shape="square" />
      <Switch v-model="value20" shape="square" size="small" />
      <Switch v-model="value21" shape="square" size="large" />
    </div>
  </div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="switch-demo">
    <div class="demo-switch">
      <Switch v-model="value1" shape="round" />
      <Switch v-model="value2" shape="square" />
      <Switch v-model="value3" shape="square" size="small" />
      <Switch v-model="value4" shape="square" size="large" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const value1 = ref(true);
const value2 = ref(true);
const value3 = ref(true);
const value4 = ref(true);
</script>
```

</CollapsibleCode>

## 自定义图标

使用插槽自定义开关内的图标内容。

<Demo>

<div class="demo-switch">
  <Switch v-model="value19" type="default">
    <template #icon>
      <div v-if="!value19">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-text-1)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      </div>
      <div v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-text-1)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
          />
        </svg>
      </div>
    </template>
  </Switch>
  
  <Switch v-model="value20" type="primary" shape="square" style="margin-left: 20px;">
    <template #icon>
      <span style="font-size: 10px;color:var(--color-text-1)">{{ value20 ? 'ON' : 'OFF' }}</span>
    </template>
  </Switch>
</div>

</Demo>

<CollapsibleCode>

```vue
<template>
  <div class="demo-switch">
    <Switch v-model="value19" type="default">
      <template #icon>
        <div v-if="!value19">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-text-1)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        </div>
        <div v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-text-1)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
            />
          </svg>
        </div>
      </template>
    </Switch>

    <Switch
      v-model="value20"
      type="primary"
      shape="square"
      style="margin-left: 20px;"
    >
      <template #icon>
        <span style="font-size: 10px;color:var(--color-text-1)">{{
          value20 ? "ON" : "OFF"
        }}</span>
      </template>
    </Switch>
  </div>
</template>
```

</CollapsibleCode>

## 自定义颜色

<Demo>    
<div class="demo-switch">
  <Switch
    v-model="value16"
    active-color="#123465"
    inactive-color="#495057"
  />
  <Switch
    v-model="value17"
    active-color="#4ecdc4"
    inactive-color="#868e96"
    style="margin-left: 20px;"
  />
</div>
</Demo>

<CollapsibleCode>

```vue
<Switch v-model="value1" active-color="#ff6b6b" inactive-color="#495057" />
<Switch v-model="value2" active-color="#4ecdc4" inactive-color="#868e96" />
```

</CollapsibleCode>

## 事件监听

<Demo>
<div class="demo-switch">
  <Switch
    v-model="value18"
    @change="handleChange1"
  />
  <span style="margin-left: 12px;">状态：{{ changeText }}</span>
</div>
</Demo>

<CollapsibleCode>

```vue
<template>
  <Switch v-model="value" @change="handleChange1" />
  <span style="margin-left: 12px;">状态：{{ changeText }}</span>
</template>
<script setup>
import { ref } from "vue";
const value = ref(true);
const changeText = ref("未改变");
const handleChange1 = (value) => {
  changeText.value = value ? "已开启" : "已关闭";
};
</script>
```

</CollapsibleCode>

## API

### Props

| 参数名                | 说明             | 类型                                                  | 默认值    |
| --------------------- | ---------------- | ----------------------------------------------------- | --------- |
| model-value / v-model | 绑定值           | boolean / string / number                             | false     |
| active-value          | 打开时的值       | boolean / string / number                             | true      |
| inactive-value        | 关闭时的值       | boolean / string / number                             | false     |
| disabled              | 是否禁用         | boolean                                               | false     |
| loading               | 是否加载中       | boolean                                               | false     |
| size                  | 尺寸             | 'small' / 'default' / 'large'                         | 'default' |
| type                  | 颜色主题         | 'primary' / 'success' / 'warning' / 'danger' / 'info' | 'default' |
| shape                 | 开关形状         | 'round' / 'square'                                    | 'round'   |
| active-text           | 打开时的文字描述 | string                                                | -         |
| inactive-text         | 关闭时的文字描述 | string                                                | -         |
| active-color          | 打开时的背景色   | string                                                | -         |
| inactive-color        | 关闭时的背景色   | string                                                | -         |

### Events

| 事件名             | 说明               | 回调参数                           |
| ------------------ | ------------------ | ---------------------------------- |
| change             | 状态改变时的回调   | (value: boolean / string / number) |
| update:model-value | 绑定值更新时的回调 | (value: boolean / string / number) |

### Slots

| 插槽名  | 说明                                            |
| ------- | ----------------------------------------------- |
| default | 自定义内容，会覆盖 active-text 和 inactive-text |
| icon    | 自定义开关内的图标内容                          |
