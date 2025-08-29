<script setup>
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Col } from "@/components/Col";
import { Row } from "@/components/Row";
import { Input } from "@/components/Input";
import { Radio } from "./components/Radio";
import { Checkbox, CheckboxGroup } from "./components/Checkbox";
import { Select, Option } from "./components/Select";
import { Switch } from "./components/Switch";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Tabs } from "./components/Tabs";
import { Card } from "./components/Card";
import { ref } from "vue";
import { Textarea } from "./components/Textarea";

const value1 = ref("");
const value2 = ref("");
const value3 = ref("");
const value4 = ref("");

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

// 表单验证错误
const errors = ref({});

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

// 表单验证函数
const validateForm = () => {
  let isValid = true;
  errors.value = {};

  // 验证基本信息
  if (!formData.value.name.trim()) {
    errors.value.name = "姓名不能为空";
    isValid = false;
  }

  if (!formData.value.email.trim()) {
    errors.value.email = "邮箱不能为空";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = "邮箱格式不正确";
    isValid = false;
  }

  if (!formData.value.phone.trim()) {
    errors.value.phone = "电话不能为空";
    isValid = false;
  } else if (!/^1[3-9]\d{9}$/.test(formData.value.phone)) {
    errors.value.phone = "手机号码格式不正确";
    isValid = false;
  }

  // 验证地址信息
  if (activeTab.value === "address" || activeTab.value === "preferences") {
    if (!formData.value.address.trim()) {
      errors.value.address = "地址不能为空";
      isValid = false;
    }

    if (!formData.value.city.trim()) {
      errors.value.city = "城市不能为空";
      isValid = false;
    }

    if (!formData.value.province) {
      errors.value.province = "请选择省份";
      isValid = false;
    }

    if (!formData.value.zipCode.trim()) {
      errors.value.zipCode = "邮政编码不能为空";
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.value.zipCode)) {
      errors.value.zipCode = "邮政编码格式不正确";
      isValid = false;
    }
  }

  return isValid;
};

// 表单提交函数
const submitForm = () => {
  if (validateForm()) {
    alert("表单提交成功！\n" + JSON.stringify(formData.value, null, 2));
  }
};

// 表单重置函数
const resetForm = () => {
  formData.value = {
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
  errors.value = {};
};
</script>

<template>
  <div class="app-container">
    <div class="app-header">
      <ThemeToggle />
    </div>

    <Row>
      <Col :span="8">
        <Card
          style="margin: 20px; width: 360px"
          size="large"
          class="large-card"
        >
          <Tabs v-model="activeTab" :tabs="tabs" size="large">
            <!-- 基本信息标签页 -->
            <template #basic>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label for="name"
                        >姓名 <span class="required">*</span></label
                      >
                      <Input
                        size="large"
                        type="text"
                        id="name"
                        disabled
                        autosize
                        v-model="formData.name"
                        placeholder="请输入您的姓名"
                        :error-message="errors.name"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="email"
                        >邮箱 <span class="required">*</span></label
                      >
                      <Input
                        size="large"
                        id="email"
                        disabled
                        v-model="formData.email"
                        type="email"
                        placeholder="请输入您的邮箱"
                        :error-message="errors.email"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="phone"
                        >电话 <span class="required">*</span></label
                      >
                      <Input
                        size="large"
                        id="phone"
                        disabled
                        v-model="formData.phone"
                        placeholder="请输入您的手机号码"
                        :error-message="errors.phone"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>性别</label>
                      <Radio
                        size="large"
                        v-model="formData.gender"
                        :options="genderOptions"
                        shape="button"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </template>

            <!-- 地址信息标签页 -->
            <template #address>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label for="province"
                        >省份 <span class="required">*</span></label
                      >
                      <Select
                        size="large"
                        v-model="formData.province"
                        placeholder="请选择"
                        disabled
                        type="default"
                      >
                        <Option label="北京" value="1" />
                        <Option label="上海" value="2" />
                        <Option label="重庆" value="3" />
                        <Option label="广州" value="4" disabled />
                      </Select>
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="city"
                        >城市 <span class="required">*</span></label
                      >
                      <Input
                        size="large"
                        id="city"
                        v-model="formData.city"
                        placeholder="请输入城市名称"
                        :error-message="errors.city"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="zipCode"
                        >邮政编码 <span class="required">*</span></label
                      >
                      <Input
                        size="large"
                        id="zipCode"
                        v-model="formData.zipCode"
                        placeholder="请输入邮政编码"
                        :error-message="errors.zipCode"
                      />
                    </div>
                  </Col>
                  <Col :span="24">
                    <div class="form-group">
                      <label for="address"
                        >详细地址 <span class="required">*</span>
                      </label>

                      <Textarea
                        class="group1"
                        id="address"
                        v-model="formData.address"
                        type="textarea"
                        autosize
                        rows="1"
                        placeholder="地址"
                        size="large"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </template>

            <!-- 偏好设置标签页 -->
            <template #preferences>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label>接收通知</label>
                      <Switch
                        size="large"
                        v-model="formData.notifications"
                        active-text="开启"
                        inactive-text="关闭"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>首选联系方式</label>
                      <Radio
                        size="large"
                        v-model="formData.preferredContact"
                        :options="contactOptions"
                        shape="radio"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>兴趣爱好</label>
                      <CheckboxGroup v-model="formData.interests">
                        <Checkbox
                          v-for="option in interestOptions"
                          size="large"
                          :key="option.value"
                          :label="option.label"
                          >{{ option.label }}</Checkbox
                        >
                      </CheckboxGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </template>
          </Tabs>
          <template #footer>
            <div class="button-group">
              <Button @click="submitForm" size="large">Button</Button>
              <Button @click="submitForm" size="large">提交</Button>
              <Button text bg @click="resetForm" size="large">重置</Button>
            </div>
          </template>
        </Card>
      </Col>
      <Col :span="8">
        <Card style="margin: 20px; width: 360px">
          <Tabs v-model="activeTab" :tabs="tabs">
            <!-- 基本信息标签页 -->
            <template #basic>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label for="name"
                        >姓名 <span class="required">*</span></label
                      >
                      <Input
                        type="text"
                        id="name"
                        v-model="formData.name"
                        placeholder="请输入您的姓名"
                        :error-message="errors.name"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="email"
                        >邮箱 <span class="required">*</span></label
                      >
                      <Input
                        id="email"
                        v-model="formData.email"
                        type="email"
                        placeholder="请输入您的邮箱"
                        :error-message="errors.email"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="phone"
                        >电话 <span class="required">*</span></label
                      >
                      <Input
                        id="phone"
                        v-model="formData.phone"
                        placeholder="请输入您的手机号码"
                        :error-message="errors.phone"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>性别</label>
                      <Radio
                        v-model="formData.gender"
                        :options="genderOptions"
                        shape="button"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </template>

            <!-- 地址信息标签页 -->
            <template #address>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label for="address"
                        >详细地址 <span class="required">*</span></label
                      >
                      <Input
                        id="address"
                        v-model="formData.address"
                        type="textarea"
                        rows="1"
                        placeholder="请输入您的详细地址"
                        :error-message="errors.address"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="province"
                        >省份 <span class="required">*</span></label
                      >
                      <Select
                        v-model="formData.province"
                        placeholder="请选择"
                        type="default"
                      >
                        <Option label="北京" value="1" />
                        <Option label="上海" value="2" />
                        <Option label="重庆" value="3" />
                        <Option label="广州" value="4" disabled />
                      </Select>
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="city"
                        >城市 <span class="required">*</span></label
                      >
                      <Input
                        id="city"
                        v-model="formData.city"
                        placeholder="请输入城市名称"
                        :error-message="errors.city"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="zipCode"
                        >邮政编码 <span class="required">*</span></label
                      >
                      <Input
                        id="zipCode"
                        v-model="formData.zipCode"
                        placeholder="请输入邮政编码"
                        :error-message="errors.zipCode"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </template>

            <!-- 偏好设置标签页 -->
            <template #preferences>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label>接收通知</label>
                      <Switch
                        v-model="formData.notifications"
                        active-text="开启"
                        inactive-text="关闭"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>首选联系方式</label>
                      <Radio
                        v-model="formData.preferredContact"
                        :options="contactOptions"
                        shape="radio"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>兴趣爱好</label>
                      <CheckboxGroup v-model="formData.interests">
                        <Checkbox
                          v-for="option in interestOptions"
                          :key="option.value"
                          :label="option.label"
                          >{{ option.label }}</Checkbox
                        >
                      </CheckboxGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </template>
          </Tabs>
          <template #bottomRight>
            <div class="button-group">
              <Button @click="submitForm">Button</Button>
              <Button @click="submitForm">提交</Button>
              <Button text bg @click="resetForm">重置</Button>
            </div>
          </template>
        </Card>
      </Col>
      <Col :span="8">
        <Card
          style="margin: 20px; width: 360px"
          size="small"
          class="small-card"
        >
          <Tabs v-model="activeTab" :tabs="tabs" size="small">
            <!-- 基本信息标签页 -->
            <template #basic>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label for="name"
                        >姓名 <span class="required">*</span></label
                      >
                      <Input
                        size="small"
                        type="text"
                        id="name"
                        v-model="formData.name"
                        placeholder="请输入您的姓名"
                        :error-message="errors.name"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="email"
                        >邮箱 <span class="required">*</span></label
                      >
                      <Input
                        size="small"
                        id="email"
                        v-model="formData.email"
                        type="email"
                        placeholder="请输入您的邮箱"
                        :error-message="errors.email"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="phone"
                        >电话 <span class="required">*</span></label
                      >
                      <Input
                        size="small"
                        id="phone"
                        v-model="formData.phone"
                        placeholder="请输入您的手机号码"
                        :error-message="errors.phone"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>性别</label>
                      <Radio
                        size="small"
                        v-model="formData.gender"
                        :options="genderOptions"
                        shape="button"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </template>

            <!-- 地址信息标签页 -->
            <template #address>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label for="address"
                        >详细地址 <span class="required">*</span></label
                      >
                      <Input
                        size="small"
                        id="address"
                        v-model="formData.address"
                        type="textarea"
                        rows="1"
                        placeholder="请输入您的详细地址"
                        :error-message="errors.address"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="province"
                        >省份 <span class="required">*</span></label
                      >
                      <Select
                        size="small"
                        v-model="formData.province"
                        placeholder="请选择"
                        type="default"
                      >
                        <Option label="北京" value="1" />
                        <Option label="上海" value="2" />
                        <Option label="重庆" value="3" />
                        <Option label="广州" value="4" disabled />
                      </Select>
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="city"
                        >城市 <span class="required">*</span></label
                      >
                      <Input
                        size="small"
                        id="city"
                        v-model="formData.city"
                        placeholder="请输入城市名称"
                        :error-message="errors.city"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label for="zipCode"
                        >邮政编码 <span class="required">*</span></label
                      >
                      <Input
                        size="small"
                        id="zipCode"
                        v-model="formData.zipCode"
                        placeholder="请输入邮政编码"
                        :error-message="errors.zipCode"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </template>

            <!-- 偏好设置标签页 -->
            <template #preferences>
              <div class="form-content">
                <Row :gutter="16">
                  <Col :span="24">
                    <div class="form-group">
                      <label>接收通知</label>
                      <Switch
                        size="small"
                        v-model="formData.notifications"
                        active-text="开启"
                        inactive-text="关闭"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>首选联系方式</label>
                      <Radio
                        size="small"
                        v-model="formData.preferredContact"
                        :options="contactOptions"
                        shape="radio"
                      />
                    </div>
                  </Col>

                  <Col :span="24">
                    <div class="form-group">
                      <label>兴趣爱好</label>
                      <CheckboxGroup v-model="formData.interests">
                        <Checkbox
                          v-for="option in interestOptions"
                          size="small"
                          :key="option.value"
                          :label="option.label"
                          >{{ option.label }}</Checkbox
                        >
                      </CheckboxGroup>
                    </div>
                  </Col>
                </Row>
              </div>
            </template>
          </Tabs>
          <template #bottomLeft>
            <div class="button-group">
              <Button @click="submitForm" size="small">Button</Button>
              <Button @click="submitForm" size="small">提交</Button>
              <Button text bg @click="resetForm" size="small">重置</Button>
            </div>
          </template>
        </Card>
      </Col>
    </Row>

    <div class="component-section">
      <h2>Card 组件</h2>

      <!-- 默认卡片 -->
      <Card title="基本卡片">
        <div class="card-content">这是一个基本的卡片组件示例</div>
      </Card>

      <!-- 不同类型的卡片 -->
      <div class="card-group">
        <Card title="主卡片" type="primary" class="card-item">
          <div class="card-content">主类型卡片示例</div>
        </Card>
        <Card title="成功卡片" type="success" class="card-item">
          <div class="card-content">成功类型卡片示例</div>
        </Card>
        <Card title="警告卡片" type="warning" class="card-item">
          <div class="card-content">警告类型卡片示例</div>
        </Card>
        <Card title="危险卡片" type="danger" class="card-item">
          <div class="card-content">危险类型卡片示例</div>
        </Card>
        <Card title="信息卡片" type="info" class="card-item">
          <div class="card-content">信息类型卡片示例</div>
        </Card>
      </div>

      <!-- 可折叠卡片 -->
      <Card title="可折叠卡片" collapsible class="card-item">
        <div class="card-content">
          这是一个可折叠的卡片，点击右上角的箭头可以展开或收起内容
        </div>
      </Card>

      <!-- 带底部的卡片 -->
      <Card title="带底部的卡片" class="card-item">
        <div class="card-content">
          这是一个带底部的卡片，底部可以放置操作按钮
        </div>
        <template #footer>
          <div style="display: flex; gap: 20px">
            <Button>确认问题</Button>
            <Button text bg>次要按钮</Button>
          </div>
        </template>
      </Card>

      <!-- 自定义头部的卡片 -->
      <Card class="card-item">
        <template #header>
          <div style="display: flex; align-items: center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="margin-right: 8px"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <line x1="3" x2="21" y1="9" y2="9" />
              <line x1="9" x2="9" y1="21" y2="9" />
            </svg>
            <h3 style="margin: 0; font-size: 16px">自定义头部卡片</h3>
          </div>
        </template>
        <div class="card-content">这是一个自定义头部的卡片示例</div>
      </Card>

      <!-- 带右上角插槽的卡片 -->
      <div class="card-group">
        <Card title="带右上角操作的卡片" class="card-item">
          <template #topRight>
            <Button size="small" type="link">More</Button>
          </template>
          <div class="card-content">这是一张带有右上角操作的卡片</div>
        </Card>

        <!-- 带底部左右插槽的卡片 -->
        <Card title="带底部多区域的卡片" class="card-item">
          <div class="card-content">这张卡片的底部有左中右三个区域</div>
          <template #bottomLeft>
            <span style="color: #666">2023-10-01</span>
          </template>
          <template #footer>
            <Button>中间按钮</Button>
          </template>
          <template #bottomRight>
            <Button size="small" type="text">查看详情</Button>
          </template>
        </Card>
      </div>

      <!-- 带悬浮效果的卡片 -->
      <Card title="悬浮效果卡片" hoverable class="card-item">
        <div class="card-content">鼠标悬停在这张卡片上会有悬浮效果</div>
      </Card>

      <!-- 无边框卡片 -->
      <Card title="无边框卡片" :border="false" class="card-item">
        <div class="card-content">这是一张没有边框的卡片</div>
      </Card>

      <!-- 灵活布局卡片 -->
      <div style="height: 200px; margin: 16px 0">
        <Card title="灵活布局卡片" layout="flexible" class="card-item">
          <div class="card-content">这张卡片会自适应父容器的高度</div>
          <div style="flex: 1; display: flex; align-items: flex-end">
            <div class="card-content">内容将填充剩余空间</div>
          </div>
        </Card>
      </div>

      <!-- 骨架屏卡片 -->
      <Card skeleton class="card-item"></Card>
    </div>
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
