<template>
  <Popover>
    <Button>打开弹出层</Button>
    <template #content>
      <div style="font-size: var(--font-size-1)">
        <Space direction="vertical" size="large">
          <div>
            <div>选择器</div>
            <Select>
              <Option>选项1</Option>
              <Option>选项2</Option>
              <Option>选项3</Option>
            </Select>
          </div>
        </Space>
      </div>
    </template>
  </Popover>
</template>

<script setup></script>
