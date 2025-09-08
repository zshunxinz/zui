<template>
  <Row :gutter="[20, 20]">
    <Col :span="8">
      <Select v-model="value1" placeholder="左侧图标">
        <OptionGroup
          label="基础组件"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="left"
        >
          <Option label="Button" value="button" />
          <Option label="Input" value="input" />
        </OptionGroup>
        <OptionGroup
          label="布局组件"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="left"
        >
          <Option label="Grid" value="grid" />
          <Option label="Layout" value="layout" />
        </OptionGroup>
      </Select>
    </Col>
    <Col :span="8">
      <Select v-model="value2" placeholder="文字后图标">
        <OptionGroup
          label="基础组件"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="after-text"
        >
          <Option label="Button" value="button" />
          <Option label="Input" value="input" />
        </OptionGroup>
        <OptionGroup
          label="布局组件"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="after-text"
        >
          <Option label="Grid" value="grid" />
          <Option label="Layout" value="layout" />
        </OptionGroup>
      </Select>
    </Col>
    <Col :span="8">
      <Select v-model="value3" placeholder="右侧图标">
        <OptionGroup
          label="基础组件"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="right"
        >
          <Option label="Button" value="button" />
          <Option label="Input" value="input" />
        </OptionGroup>
        <OptionGroup
          label="布局组件"
          :collapsible="true"
          :default-collapsed="false"
          icon-position="right"
        >
          <Option label="Grid" value="grid" />
          <Option label="Layout" value="layout" />
        </OptionGroup>
      </Select>
    </Col>
  </Row>
</template>

<script setup>
import { ref } from 'vue';
const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
</script>
