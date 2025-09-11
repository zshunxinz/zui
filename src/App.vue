<script setup>
import { ref } from 'vue';
import { Textarea } from './components/Textarea';
import FormDemo from '@/view/FormDemo.vue';
import TabsDemo from '@/view/TabsDemo.vue';
import TooltipDemo from '@/view/TooltipDemo.vue';
import SelectDemo from '@/view/SelectDemo.vue';
import GroupTest from '@/view/GroupTest.vue';
import GroupFixTest from '@/view/GroupFixTest.vue';
import CollapsibleGroupTest from '@/view/CollapsibleGroupTest.vue';
import IconDemo from '@/view/IconDemo.vue';
import IconSizeTest from '@/view/IconSizeTest.vue';
import IconSizeFixTest from '@/view/IconSizeFixTest.vue';
import IconTest from '@/view/IconTest.vue';
import IconNoFillTest from '@/view/IconNoFillTest.vue';
import IconDebugTest from '@/view/IconDebugTest.vue';
import IconNoFillFixTest from '@/view/IconNoFillFixTest.vue';
import AllIconsDemo from './view/AllIconsDemo.vue';
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
const value4 = ref('');

// 表单数据
const formData = ref({
  // 基本信息
  name: '',
  email: '',
  phone: '',
  gender: 'male',
  // 地址信息
  address: '',
  city: '',
  province: '',
  zipCode: '',
  // 偏好设置
  notifications: true,
  preferredContact: 'email',
  interests: [],
});

// 表单验证错误
const errors = ref({});

// 选项数据
const genderOptions = [
  { label: '男', value: 'male' },
  { label: '女', value: 'female' },
];

const provinceOptions = [
  { label: '北京', value: 'beijing' },
  { label: '上海', value: 'shanghai' },
  { label: '广东', value: 'guangdong' },
  { label: '江苏', value: 'jiangsu' },
  { label: '浙江', value: 'zhejiang' },
];

const contactOptions = [
  { label: '电子邮件', value: 'email' },
  { label: '电话', value: 'phone' },
  { label: '短信', value: 'sms' },
];

const interestOptions = [
  { label: '运动', value: 'sports' },
  { label: '音乐', value: 'music' },
  { label: '阅读', value: 'reading' },
  { label: '旅行', value: 'travel' },
  { label: '编程', value: 'coding' },
];

// Tabs 数据
const activeTab = ref(0);
const tabs = ref([
  { label: '基本信息', name: 'basic' },
  { label: '地址信息', name: 'address' },
  { label: '偏好设置', name: 'preferences' },
]);

// 表单验证函数
const validateForm = () => {
  let isValid = true;
  errors.value = {};

  // 验证基本信息
  if (!formData.value.name.trim()) {
    errors.value.name = '姓名不能为空';
    isValid = false;
  }

  if (!formData.value.email.trim()) {
    errors.value.email = '邮箱不能为空';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = '邮箱格式不正确';
    isValid = false;
  }

  if (!formData.value.phone.trim()) {
    errors.value.phone = '电话不能为空';
    isValid = false;
  } else if (!/^1[3-9]\d{9}$/.test(formData.value.phone)) {
    errors.value.phone = '手机号码格式不正确';
    isValid = false;
  }

  // 验证地址信息
  if (activeTab.value === 'address' || activeTab.value === 'preferences') {
    if (!formData.value.address.trim()) {
      errors.value.address = '地址不能为空';
      isValid = false;
    }

    if (!formData.value.city.trim()) {
      errors.value.city = '城市不能为空';
      isValid = false;
    }

    if (!formData.value.province) {
      errors.value.province = '请选择省份';
      isValid = false;
    }

    if (!formData.value.zipCode.trim()) {
      errors.value.zipCode = '邮政编码不能为空';
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.value.zipCode)) {
      errors.value.zipCode = '邮政编码格式不正确';
      isValid = false;
    }
  }

  return isValid;
};

// 表单提交函数
const submitForm = () => {
  if (validateForm()) {
    alert('表单提交成功！\n' + JSON.stringify(formData.value, null, 2));
  }
};

// 表单重置函数
const resetForm = () => {
  formData.value = {
    name: '',
    email: '',
    phone: '',
    gender: 'male',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    notifications: true,
    preferredContact: 'email',
    interests: [],
  };
  errors.value = {};
};
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <ThemeToggle />
    </div>
    <AllIconsDemo></AllIconsDemo>
    <IconNoFillFixTest></IconNoFillFixTest>
    <IconDebugTest></IconDebugTest>
    <IconNoFillTest></IconNoFillTest>
    <IconTest></IconTest>
    <IconSizeFixTest></IconSizeFixTest>
    <IconSizeTest></IconSizeTest>
    <IconDemo></IconDemo>
    <CollapsibleGroupTest></CollapsibleGroupTest>
    <GroupFixTest></GroupFixTest>
    <GroupTest></GroupTest>
    <SelectDemo></SelectDemo>
    <TabsDemo></TabsDemo>
    <FormDemo></FormDemo>
    <TooltipDemo></TooltipDemo>
  </div>
</template>

<style scoped>
.app-container {
  /* padding: 1rem; */
  min-height: 100vh;
  background-color: var(--color-background);
  transition: background-color 0.3s, color 0.3s;
}

.app-header {
  display: flex;
  justify-content: flex-end;
}

.component-section {
  margin: 2rem 1rem;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.button-group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Card组件相关样式 */
.card-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
}

.card-item {
  width: 100%;
  margin-bottom: 16px;
}

@media (min-width: 768px) {
  .card-group .card-item {
    width: calc((100% - 32px) / 2);
  }
}

@media (min-width: 1024px) {
  .card-group .card-item {
    width: calc((100% - 48px) / 3);
  }
}

.card-content {
  color: var(--color-text-2);
  line-height: 1.6;
}

.radio-group {
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.grid-content {
  background-color: var(--color-primary-light);
  color: var(--color-text);
  text-align: center;
  padding: 1rem;
  border-radius: 4px;
  height: 100%;
}

.custom-card-content {
  padding: 10px;
  /* color: var(--color-default); */
  color: var(--color-primary);
}

.custom-card-content span {
  font-size: 9px;
  color: var(--color-primary-hover);
}

:deep(.custom-checked-class) {
  border: 1px solid rgb(0, 123, 255);
  box-shadow: 1px 1px 5px 2px
    linear-gradient(to right, rgb(0, 123, 255), rgb(181, 181, 181)) 1;
  background-image: linear-gradient(
    to right,
    rgba(0, 123, 255, 0.05),
    rgba(255, 115, 1, 0.05)
  );
  border-radius: 4px !important;
}

.radio-type-demo {
  padding: 0px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
}

.form-control {
  width: 100%;
}

.tab-content {
  padding: 20px;
  border: 1px solid var(--color-border);
  border-top: none;
  border-radius: 0 0 4px 4px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 8px;
  font-weight: 500;
  font-size: var(--font-size);
}

.small-card label {
  font-size: var(--font-size-0);
}

.large-card label {
  font-size: var(--font-size-2);
}

.form-control {
  width: 100%;
  padding: 8px 12px;
}
</style>
