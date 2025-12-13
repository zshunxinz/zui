<script setup lang="ts">
import { ref, onMounted } from "vue";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");
const skeleton = ref(true);
onMounted(() => {
  setTimeout(() => {
    skeleton.value = false;
  }, 500);
});
// 表单数据
const formData = ref({
  // 基本信息
  name: "",
  email: "",
  phone: "",
  gender: "male",
  // 地址信息
  address: "",
  city: "",
  province: "",
  zipCode: "",
  // 偏好设置
  notifications: true,
  preferredContact: "email",
  interests: [],
});

// 表单验证规则
const rules = {
  name: {
    required: true,
    message: "姓名不能为空",
  },
  email: {
    required: true,
    message: "邮箱不能为空",
    validator: (value) => {
      if (!value) return "邮箱不能为空";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return "邮箱格式不正确";
      }
      return true;
    },
  },
  phone: {
    required: true,
    message: "电话不能为空",
    validator: (value) => {
      if (!value) return "电话不能为空";
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return "手机号码格式不正确";
      }
      return true;
    },
  },
  address: {
    required: true,
    message: "地址不能为空",
  },
  city: {
    required: true,
    message: "城市不能为空",
  },
  province: {
    required: true,
    message: "请选择省份",
  },
  zipCode: {
    required: true,
    message: "邮政编码不能为空",
    validator: (value) => {
      if (!value) return "邮政编码不能为空";
      if (!/^\d{6}$/.test(value)) {
        return "邮政编码格式不正确";
      }
      return true;
    },
  },
};

// 选项数据
const genderOptions = [
  { label: "男", value: "male" },
  { label: "女", value: "female" },
];

const provinceOptions = [
  { label: "北京", value: "beijing" },
  { label: "上海", value: "shanghai" },
  { label: "广东", value: "guangdong" },
  { label: "江苏", value: "jiangsu" },
  { label: "浙江", value: "zhejiang" },
];

const contactOptions = [
  { label: "电子邮件", value: "email" },
  { label: "电话", value: "phone" },
  { label: "短信", value: "sms" },
];

const interestOptions = [
  { label: "运动", value: "sports" },
  { label: "音乐", value: "music" },
  { label: "阅读", value: "reading" },
  { label: "旅行", value: "travel" },
  { label: "编程", value: "coding" },
];

// Tabs 数据
const activeTab = ref(0);
const tabs = ref([
  { label: "基本信息", name: "basic" },
  { label: "地址信息", name: "address" },
  { label: "偏好设置", name: "preferences" },
]);

// 表单提交函数
const submitForm = (data: any) => {
  console.log("表单提交成功：", data);
  alert("表单提交成功！\n" + JSON.stringify(formData.value, null, 2));
};

// 表单重置函数
const resetForm = () => {
  // 使用解构创建新对象，避免直接修改响应式引用
  const defaultForm = {
    name: "",
    email: "",
    phone: "",
    gender: "male",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    notifications: true,
    preferredContact: "email",
    interests: [],
  };

  // 使用Object.assign避免递归触发
  //   Object.assign(formData.value, defaultForm);

  formData.value = defaultForm;
  // 重置Tabs到第一个标签页
  //   activeTab.value = 0;
};
</script>
<template>
  <Row>
    <Col :span="8">
      <Card
        style="margin: 10px; width: 399px"
        size="medium"
        :skeleton="skeleton"
      >
        <Tabs
          v-model="activeTab"
          :tabs="tabs"
          size="medium"
          tabFull
          tabsBgStyle="padding: 5px;background:var(--color-bg-hover-1);height:30px;line-height:30px"
          buttonStyleText
          :borderLine="false"
        >
          <!-- 基本信息标签页 -->
          <template #basic>
            <div class="form-content">
              <Form
                v-model="formData"
                :rules="rules"
                labelPosition="top-left"
                labelWidth="80px"
                labelTextAlign="left"
                labelAlignItems="center"
                labelJustifyContent="left"
              >
                <FormItem label="姓名" prop="name" required>
                  <Input
                    size="medium"
                    type="text"
                    v-model="formData.name"
                    placeholder="请输入您的姓名"
                    style="width: 100%"
                  />
                </FormItem>

                <FormItem label="邮箱" prop="email" required>
                  <Input
                    size="medium"
                    v-model="formData.email"
                    type="email"
                    placeholder="请输入您的邮箱"
                  />
                </FormItem>

                <FormItem label="电话" prop="phone" required>
                  <Input
                    size="medium"
                    v-model="formData.phone"
                    placeholder="请输入您的手机号码"
                    width="100%"
                  />
                </FormItem>

                <FormItem label="性别" prop="gender">
                  <Radio
                    size="medium"
                    v-model="formData.gender"
                    :options="genderOptions"
                    shape="button"
                    width="100%"
                  />
                </FormItem>
              </Form>
            </div>
          </template>

          <!-- 地址信息标签页 -->
          <template #address>
            <div class="form-content">
              <Form
                v-model="formData"
                :rules="rules"
                labelPosition="left"
                labelWidth="80px"
                labelTextAlign="left"
              >
                <FormItem label="省份" prop="province" required>
                  <Select
                    size="medium"
                    v-model="formData.province"
                    placeholder="请选择省份"
                    :options="provinceOptions"
                    width="100%"
                  />
                </FormItem>

                <FormItem label="城市" prop="city" required>
                  <Input
                    size="medium"
                    v-model="formData.city"
                    placeholder="请输入城市名称"
                    width="100%"
                  />
                </FormItem>

                <FormItem label="邮政编码" prop="zipCode" required>
                  <Input
                    size="medium"
                    v-model="formData.zipCode"
                    placeholder="请输入邮政编码"
                    width="100%"
                  />
                </FormItem>

                <FormItem label="详细地址" prop="address" required>
                  <Textarea
                    v-model="formData.address"
                    placeholder="请输入详细地址"
                    autosize
                    :rows="2"
                    size="medium"
                    width="100%"
                  />
                </FormItem>
              </Form>
            </div>
          </template>

          <!-- 偏好设置标签页 -->
          <template #preferences>
            <div class="form-content">
              <Form
                v-model="formData"
                :rules="rules"
                labelPosition="top-left"
                labelTextAlign="left"
              >
                <FormItem label="接收通知">
                  <Switch
                    size="medium"
                    v-model="formData.notifications"
                    active-text="开启"
                    inactive-text="关闭"
                  />
                </FormItem>

                <FormItem label="首选联系方式" prop="preferredContact">
                  <Radio
                    size="medium"
                    v-model="formData.preferredContact"
                    :options="contactOptions"
                    shape="circle"
                  />
                </FormItem>

                <FormItem label="兴趣爱好" prop="interests">
                  <CheckboxGroup v-model="formData.interests">
                    <Checkbox
                      v-for="option in interestOptions"
                      :key="option.value"
                      :label="option.label"
                      size="medium"
                    >
                      {{ option.label }}
                    </Checkbox>
                  </CheckboxGroup>
                </FormItem>
              </Form>
            </div>
          </template>
        </Tabs>
        <Row :gutter="20">
          <Col :span="10">
            <Button @click="submitForm" style="width: 100%">提交</Button>
          </Col>
          <Col :span="5">
            <Button
              text
              border
              htmlType="reset"
              style="width: 100%"
              @click="resetForm"
              >重置</Button
            >
          </Col>
        </Row>
      </Card>
    </Col>
  </Row>
</template>
