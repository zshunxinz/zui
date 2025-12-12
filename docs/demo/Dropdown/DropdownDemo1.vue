<template>
  <div class="dropdown-demo">
    <h3>基础用法</h3>
    <div class="dropdown-group">
      <Dropdown v-model="isOpen1">
        <DropdownMenu>
          <DropdownMenuTrigger @click="handleClick1">
            <span>{{ data1 }} {{ isOpen1 }}</span>
            <Icon
              name="chevron-right"
              :size="16"
              class="dropdown-icon"
              :rotate="isOpen1 ? 90 : 0"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent style="padding: 8px">
            <DropdownMenuItem @click="change1(1)" class="dropdown-menu-item"
              >选项 1</DropdownMenuItem
            >
            <DropdownMenuItem @click="change1(2)" class="dropdown-menu-item"
              >选项 2</DropdownMenuItem
            >
            <DropdownMenuItem @click="change1(3)" class="dropdown-menu-item"
              >选项 3</DropdownMenuItem
            >
            <DropdownMenuItem disabled class="dropdown-menu-item"
              >禁用选项</DropdownMenuItem
            >
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
      <Dropdown hoverable v-model="isOpen2">
        <DropdownMenu>
          <DropdownMenuTrigger
            @mouseenter="handleClick2"
            @mouseleave="handleClick2"
          >
            <Button outline
              >悬停展开

              <Icon
                name="chevron-right"
                :size="16"
                style="transition: transform 0.3s ease"
                :rotate="isOpen2 ? 90 : 0"
              />
            </Button>
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
  DropdownMenuItem,
} from '@/components/Dropdown';
import { ref } from 'vue';

let isOpen1 = ref(false);
const handleClick1 = () => {
  console.log('点击展开');
  // isOpen1.value = !isOpen1.value;
};

let isOpen2 = ref(false);
const handleClick2 = () => {
  console.log('点击展开');
  isOpen2.value = !isOpen2.value;
};

const data1 = ref('选项 1');

const change1 = val => {
  data1.value = `选项 ${val}`;
  isOpen.value = false;
};
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

.dropdown-icon {
  transition: transform 0.3s ease;
}
.dropdown-menu-item {
  padding: 8px 8px;
}
</style>
