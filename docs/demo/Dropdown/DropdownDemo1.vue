<template>
  <div class="dropdown-demo">
    <h3>基础用法</h3>
    <div class="dropdown-group">
      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-1">
            <Button>点击展开</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
            <DropdownMenuItem disabled>禁用选项</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-1">
            <Button type="primary">主要按钮</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger class="flex items-center gap-1">
            <Button type="success">成功按钮</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>
    </div>

    <h3>位置配置</h3>
    <div class="dropdown-group">
      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>顶部对齐</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>居中对齐</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="center">
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>

      <Dropdown>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>底部对齐</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>
    </div>

    <h3>悬停触发</h3>
    <div class="dropdown-group">
      <Dropdown hoverable>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button>悬停展开</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>

      <Dropdown hoverable>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button type="primary">悬停展开</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>选项 1</DropdownMenuItem>
            <DropdownMenuItem>选项 2</DropdownMenuItem>
            <DropdownMenuItem>选项 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script setup>
import { Button } from '@/components';
import {
  Dropdown,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/Dropdown';
</script>

<style scoped>
.dropdown-demo {
  padding: 20px;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
}

.dropdown-group {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
</style>
