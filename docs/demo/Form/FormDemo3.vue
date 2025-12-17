<template>
  <Card title="表单联动示例" :border="false" style="padding: 20px">
    <Form
      v-model="formData"
      :rules="rules"
      @submit="handleSubmit"
      labelWidth="120px"
    >
      <!-- 选择国家后自动填充相关选项 -->
      <FormItem label="Country" prop="country" required>
        <Select
          v-model="formData.country"
          :options="countryOptions"
          placeholder="Select a country"
          @change="handleCountryChange"
        />
      </FormItem>

      <!-- 基于国家选择的省份/州 -->
      <FormItem
        v-if="formData.country"
        label="Province/State"
        prop="state"
        required
      >
        <Select
          v-model="formData.state"
          :options="getStateOptions"
          placeholder="Select a province/state"
          @change="handleStateChange"
        />
      </FormItem>

      <!-- 基于省份/州选择的城市 -->
      <FormItem v-if="formData.state" label="City" prop="city" required>
        <Select
          v-model="formData.city"
          :options="getCityOptions"
          placeholder="Select a city"
        />
      </FormItem>

      <!-- 选择用户类型后显示不同的表单内容 -->
      <FormItem label="User Type" prop="userType" required>
        <Radio
          v-model="formData.userType"
          :options="userTypeOptions"
          @change="handleUserTypeChange"
        />
      </FormItem>

      <!-- 公司用户表单 -->
      <div v-if="formData.userType === 'company'">
        <FormItem label="Company Name" prop="companyName" required>
          <Input
            v-model="formData.companyName"
            placeholder="Enter company name"
          />
        </FormItem>

        <FormItem label="Industry" prop="industry" required>
          <Select
            v-model="formData.industry"
            :options="industryOptions"
            placeholder="Select industry"
          />
        </FormItem>

        <FormItem label="Employee Count" prop="employeeCount" required>
          <Select
            v-model="formData.employeeCount"
            :options="employeeCountOptions"
            placeholder="Select employee count"
          />
        </FormItem>
      </div>

      <!-- 个人用户表单 -->
      <div v-else>
        <FormItem label="Full Name" prop="fullName" required>
          <Input
            v-model="formData.fullName"
            placeholder="Enter your full name"
          />
        </FormItem>

        <FormItem label="Gender" prop="gender" required>
          <Radio v-model="formData.gender" :options="genderOptions" />
        </FormItem>

        <FormItem label="Date of Birth" prop="dateOfBirth" required>
          <Input
            v-model="formData.dateOfBirth"
            type="date"
            placeholder="Select your date of birth"
          />
        </FormItem>
      </div>

      <!-- 选择订阅服务 -->
      <FormItem label="Subscription" prop="subscription" required>
        <CheckboxGroup
          v-model="formData.subscription"
          :options="subscriptionOptions"
        />
      </FormItem>

      <!-- 根据订阅服务显示不同的详细选项 -->
      <FormItem
        v-if="formData.subscription.includes('newsletter')"
        label="Newsletter Frequency"
      >
        <Radio
          v-model="formData.newsletterFrequency"
          :options="newsletterFrequencyOptions"
        />
      </FormItem>

      <FormItem
        v-if="formData.subscription.includes('promotions')"
        label="Promotion Channels"
      >
        <CheckboxGroup
          v-model="formData.promotionChannels"
          :options="promotionChannelOptions"
        />
      </FormItem>

      <FormItem>
        <Button type="default" class="z-button z-button--primary"
          >Submit</Button
        >
      </FormItem>
    </Form>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 表单数据
const formData = ref({
  country: '',
  state: '',
  city: '',
  userType: 'individual',
  // 公司用户字段
  companyName: '',
  industry: '',
  employeeCount: '',
  // 个人用户字段
  fullName: '',
  gender: 'male',
  dateOfBirth: '',
  // 订阅字段
  subscription: [],
  newsletterFrequency: 'weekly',
  promotionChannels: [],
});

// 国家选项
const countryOptions = [
  { label: 'China', value: 'china' },
  { label: 'United States', value: 'usa' },
  { label: 'United Kingdom', value: 'uk' },
];

// 用户类型选项
const userTypeOptions = [
  { label: 'Individual', value: 'individual' },
  { label: 'Company', value: 'company' },
];

// 行业选项
const industryOptions = [
  { label: 'Technology', value: 'tech' },
  { label: 'Finance', value: 'finance' },
  { label: 'Healthcare', value: 'healthcare' },
  { label: 'Education', value: 'education' },
  { label: 'Retail', value: 'retail' },
];

// 员工数量选项
const employeeCountOptions = [
  { label: '1-50', value: '1-50' },
  { label: '51-200', value: '51-200' },
  { label: '201-500', value: '201-500' },
  { label: '501-1000', value: '501-1000' },
  { label: '1000+', value: '1000+' },
];

// 性别选项
const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

// 订阅选项
const subscriptionOptions = [
  { label: 'Newsletter', value: 'newsletter' },
  { label: 'Promotions', value: 'promotions' },
  { label: 'Product Updates', value: 'updates' },
];

// 新闻通讯频率选项
const newsletterFrequencyOptions = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
];

// 推广渠道选项
const promotionChannelOptions = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Push Notification', value: 'push' },
];

// 中国省份数据
const chinaStates = [
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Guangdong', value: 'guangdong' },
  { label: 'Jiangsu', value: 'jiangsu' },
];

// 美国州数据
const usaStates = [
  { label: 'California', value: 'california' },
  { label: 'New York', value: 'newyork' },
  { label: 'Texas', value: 'texas' },
  { label: 'Florida', value: 'florida' },
];

// 英国地区数据
const ukStates = [
  { label: 'London', value: 'london' },
  { label: 'Manchester', value: 'manchester' },
  { label: 'Birmingham', value: 'birmingham' },
  { label: 'Glasgow', value: 'glasgow' },
];

// 城市数据
const cityData = {
  // 中国城市
  beijing: [{ label: 'Beijing', value: 'beijing_city' }],
  shanghai: [{ label: 'Shanghai', value: 'shanghai_city' }],
  guangdong: [
    { label: 'Guangzhou', value: 'guangzhou' },
    { label: 'Shenzhen', value: 'shenzhen' },
    { label: 'Dongguan', value: 'dongguan' },
  ],
  jiangsu: [
    { label: 'Nanjing', value: 'nanjing' },
    { label: 'Suzhou', value: 'suzhou' },
    { label: 'Wuxi', value: 'wuxi' },
  ],
  // 美国城市
  california: [
    { label: 'Los Angeles', value: 'losangeles' },
    { label: 'San Francisco', value: 'sanfrancisco' },
    { label: 'San Diego', value: 'sandiego' },
  ],
  newyork: [
    { label: 'New York City', value: 'newyorkcity' },
    { label: 'Buffalo', value: 'buffalo' },
    { label: 'Rochester', value: 'rochester' },
  ],
  texas: [
    { label: 'Houston', value: 'houston' },
    { label: 'Dallas', value: 'dallas' },
    { label: 'Austin', value: 'austin' },
  ],
  florida: [
    { label: 'Miami', value: 'miami' },
    { label: 'Orlando', value: 'orlando' },
    { label: 'Tampa', value: 'tampa' },
  ],
  // 英国城市
  london: [{ label: 'London', value: 'london_city' }],
  manchester: [{ label: 'Manchester', value: 'manchester_city' }],
  birmingham: [{ label: 'Birmingham', value: 'birmingham_city' }],
  glasgow: [{ label: 'Glasgow', value: 'glasgow_city' }],
};

// 获取省份选项
const getStateOptions = computed(() => {
  switch (formData.value.country) {
    case 'china':
      return chinaStates;
    case 'usa':
      return usaStates;
    case 'uk':
      return ukStates;
    default:
      return [];
  }
});

// 获取城市选项
const getCityOptions = computed(() => {
  return formData.value.state
    ? cityData[formData.value.state as keyof typeof cityData] || []
    : [];
});

// 处理国家变化
const handleCountryChange = () => {
  formData.value.state = '';
  formData.value.city = '';
};

// 处理省份变化
const handleStateChange = () => {
  formData.value.city = '';
};

// 处理用户类型变化
const handleUserTypeChange = () => {
  // 清空相关字段
  if (formData.value.userType === 'company') {
    formData.value.fullName = '';
    formData.value.gender = 'male';
    formData.value.dateOfBirth = '';
  } else {
    formData.value.companyName = '';
    formData.value.industry = '';
    formData.value.employeeCount = '';
  }
};

// 验证规则
const rules = {
  country: { required: true, message: 'Country is required' },
  state: { required: true, message: 'Province/State is required' },
  city: { required: true, message: 'City is required' },
  userType: { required: true, message: 'User Type is required' },
  companyName: {
    required: computed(() => formData.value.userType === 'company'),
    message: 'Company Name is required',
  },
  industry: {
    required: computed(() => formData.value.userType === 'company'),
    message: 'Industry is required',
  },
  employeeCount: {
    required: computed(() => formData.value.userType === 'company'),
    message: 'Employee Count is required',
  },
  fullName: {
    required: computed(() => formData.value.userType === 'individual'),
    message: 'Full Name is required',
  },
  gender: {
    required: computed(() => formData.value.userType === 'individual'),
    message: 'Gender is required',
  },
  dateOfBirth: {
    required: computed(() => formData.value.userType === 'individual'),
    message: 'Date of Birth is required',
    validator: (value: any) => {
      if (!value) return true; // 已经有required验证了
      const birthDate = new Date(value);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        return 'You must be at least 18 years old';
      }
      return true;
    },
  },
  subscription: {
    required: true,
    message: 'Please select at least one subscription option',
    validator: (value: any) => {
      if (!value || value.length === 0) {
        return 'Please select at least one subscription option';
      }
      return true;
    },
  },
};

// 提交处理
const handleSubmit = (data: any) => {
  console.log('Form submitted successfully:', data);
  alert('Form submitted successfully!');
};
</script>
