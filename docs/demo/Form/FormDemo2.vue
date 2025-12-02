<template>
  <Card title="表单布局切换" :border="false">
    <div style="margin-bottom: 20px;">
      <span style="margin-right: 10px;">Layout:</span>
      <Radio v-model="layout" :options="layoutOptions" />
    </div>

    <div style="margin-bottom: 20px;">
      <span style="margin-right: 10px;">Size:</span>
      <Radio v-model="size" :options="sizeOptions" />
    </div>

    <Form
      v-model="formData"
      :rules="rules"
      @submit="handleSubmit"
      :labelPosition="layout"
      :size="size"
      :labelWidth="layout === 'left' ? '100px' : ''"
    >
      <div v-if="layout === 'left' || layout === 'right'" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
        <FormItem label="Username" prop="username" required>
          <Input v-model="formData.username" placeholder="Enter username" />
        </FormItem>

        <FormItem label="Password" prop="password" required>
          <Input v-model="formData.password" type="password" placeholder="Enter password" />
        </FormItem>

        <FormItem label="Email" prop="email" required>
          <Input v-model="formData.email" type="email" placeholder="Enter email" />
        </FormItem>

        <FormItem label="Phone" prop="phone">
          <Input v-model="formData.phone" placeholder="Enter phone number" />
        </FormItem>

        <FormItem label="Country" prop="country">
          <Select v-model="formData.country" :options="countryOptions" placeholder="Select country" />
        </FormItem>

        <FormItem label="Language" prop="language">
          <Select v-model="formData.language" :options="languageOptions" placeholder="Select language" />
        </FormItem>
      </div>

      <div v-else style="max-width: 500px;">
        <FormItem label="Username" prop="username" required>
          <Input v-model="formData.username" placeholder="Enter username" />
        </FormItem>

        <FormItem label="Password" prop="password" required>
          <Input v-model="formData.password" type="password" placeholder="Enter password" />
        </FormItem>

        <FormItem label="Email" prop="email" required>
          <Input v-model="formData.email" type="email" placeholder="Enter email" />
        </FormItem>

        <FormItem label="Phone" prop="phone">
          <Input v-model="formData.phone" placeholder="Enter phone number" />
        </FormItem>

        <FormItem label="Country" prop="country">
          <Select v-model="formData.country" :options="countryOptions" placeholder="Select country" />
        </FormItem>

        <FormItem label="Language" prop="language">
          <Select v-model="formData.language" :options="languageOptions" placeholder="Select language" />
        </FormItem>
      </div>

      <FormItem>
        <Button type="default" class="x-button x-button--primary">Submit</Button>
      </FormItem>
    </Form>
  </Card>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 布局类型
const layout = ref<'left' | 'right' | 'top'>('left');
const layoutOptions = [
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' },
  { label: 'Top', value: 'top' }
];

// 尺寸类型
const size = ref<'small' | 'default' | 'large'>('default');
const sizeOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Default', value: 'default' },
  { label: 'Large', value: 'large' }
];

// 国家选项
const countryOptions = [
  { label: 'China', value: 'china' },
  { label: 'United States', value: 'usa' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Japan', value: 'japan' },
  { label: 'Germany', value: 'germany' }
];

// 语言选项
const languageOptions = [
  { label: 'Chinese', value: 'chinese' },
  { label: 'English', value: 'english' },
  { label: 'Japanese', value: 'japanese' },
  { label: 'German', value: 'german' },
  { label: 'French', value: 'french' }
];

// 表单数据
const formData = ref({
  username: '',
  password: '',
  email: '',
  phone: '',
  country: '',
  language: ''
});

// 验证规则
const rules = {
  username: {
    required: true,
    message: 'Username is required',
    validator: (value: any) => {
      if (!value) return 'Username is required';
      if (value.length < 3) {
        return 'Username must be at least 3 characters long';
      }
      return true;
    }
  },
  password: {
    required: true,
    message: 'Password is required',
    validator: (value: any) => {
      if (!value) return 'Password is required';
      if (value.length < 6) {
        return 'Password must be at least 6 characters long';
      }
      return true;
    }
  },
  email: {
    required: true,
    message: 'Email is required',
    validator: (value: any) => {
      if (!value) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return 'Please enter a valid email address';
      }
      return true;
    }
  }
};

// 提交处理
const handleSubmit = (data: any) => {
  console.log('Form submitted successfully:', data);
  alert('Form submitted successfully!');
};
</script>
