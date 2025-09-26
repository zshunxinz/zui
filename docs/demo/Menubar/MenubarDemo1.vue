<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>文件</MenubarTrigger>
      <MenubarContent>
        <MenubarItem
          >新建标签页 <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem
        >
        <MenubarItem>新建窗口</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>共享</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>打印</MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <MenubarMenu>
      <MenubarTrigger>编辑</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>复制 <MenubarShortcut>⌘C</MenubarShortcut></MenubarItem>
        <MenubarItem>粘贴 <MenubarShortcut>⌘V</MenubarShortcut></MenubarItem>
        <MenubarItem>剪切 <MenubarShortcut>⌘X</MenubarShortcut></MenubarItem>
        <MenubarSeparator />
        <MenubarItem>查找 <MenubarShortcut>⌘F</MenubarShortcut></MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
