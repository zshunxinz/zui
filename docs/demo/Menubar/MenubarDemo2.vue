<template>
  <div class="demo-container">
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>正常菜单</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>菜单项1</MenubarItem>
          <MenubarItem>菜单项2</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger disabled>禁用的菜单</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>菜单项1</MenubarItem>
          <MenubarItem>菜单项2</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

    <div class="spacing"></div>

    <Menubar disabled>
      <MenubarMenu>
        <MenubarTrigger>整个菜单栏被禁用</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>菜单项1</MenubarItem>
          <MenubarItem>菜单项2</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>

    <div class="spacing"></div>

    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>包含禁用项的菜单</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>正常菜单项</MenubarItem>
          <MenubarItem disabled>禁用的菜单项</MenubarItem>
          <MenubarItem>正常菜单项</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
</template>

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.spacing {
  height: 20px;
}
</style>
