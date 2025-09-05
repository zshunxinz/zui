<template>
  <Card title="表单示例" style="width: 300px">
    <Space direction="vertical" size="large">
      <Space align="start">
        <div>姓名</div>
        <div>
          <Input placeholder="请输入姓名" />
        </div>
      </Space>
      <Space align="start">
        <span>年龄</span>
        <div>
          <Input placeholder="请输入年龄" />
        </div>
      </Space>
      <Space align="start">
        <span>地址</span>
        <div>
          <Input placeholder="请输入地址" />
        </div>
      </Space>
      <Space align="start">
        <Button>提交</Button>
        <Button outline>取消</Button>
      </Space>
    </Space>
  </Card>
</template>
