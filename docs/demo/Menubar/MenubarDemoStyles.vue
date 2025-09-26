<template>
  <div class="menubar-styles-demo">
    <div class="demo-section">
      <h3>主题色样式</h3>
      <div class="demo-row">
        <div class="demo-item">
          <h4>默认主题</h4>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>保存</MenubarItem>
                <MenubarItem>另存为...</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>复制</MenubarItem>
                <MenubarItem>粘贴</MenubarItem>
                <MenubarItem>剪切</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div class="demo-item">
          <h4>主要主题</h4>
          <Menubar theme="primary">
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>保存</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>复制</MenubarItem>
                <MenubarItem>粘贴</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>尺寸样式</h3>
      <div class="demo-row">
        <div class="demo-item">
          <h4>小尺寸</h4>
          <Menubar size="small">
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>复制</MenubarItem>
                <MenubarItem>粘贴</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div class="demo-item">
          <h4>默认尺寸</h4>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>复制</MenubarItem>
                <MenubarItem>粘贴</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div class="demo-item">
          <h4>大尺寸</h4>
          <Menubar size="large">
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>复制</MenubarItem>
                <MenubarItem>粘贴</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h3>其他变体样式</h3>
      <div class="demo-row">
        <div class="demo-item">
          <h4>圆角样式</h4>
          <Menubar rounded>
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div class="demo-item">
          <h4>阴影样式</h4>
          <Menubar shadow>
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div class="demo-item">
          <h4>大阴影样式</h4>
          <Menubar shadow="lg">
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>

      <div class="demo-row">
        <div class="demo-item">
          <h4>透明背景</h4>
          <div class="transparent-bg-container">
            <Menubar transparent>
              <MenubarMenu>
                <MenubarTrigger>文件</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>新建</MenubarItem>
                  <MenubarItem>打开</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>编辑</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>复制</MenubarItem>
                  <MenubarItem>粘贴</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>

        <div class="demo-item">
          <h4>紧凑模式</h4>
          <Menubar dense>
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>复制</MenubarItem>
                <MenubarItem>粘贴</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div class="demo-item">
          <h4>组合样式</h4>
          <Menubar theme="primary" rounded shadow>
            <MenubarMenu>
              <MenubarTrigger>文件</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>新建</MenubarItem>
                <MenubarItem>打开</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>编辑</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>复制</MenubarItem>
                <MenubarItem>粘贴</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menubar-styles-demo {
  padding: 1rem;
  max-width: 100%;
}

.demo-section {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--color-border);
}

.demo-section:last-child {
  border-bottom: none;
}

.demo-row {
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); */
  /* gap: 1rem; */
  margin-top: 1rem;
}

.demo-item {
  flex: 1 1 300px;
  min-width: 250px;
  margin-bottom: 1rem;
}

.demo-item h4 {
  margin: 0 0 0.5rem 0;
  font-size: var(--font-size-1);
  color: var(--color-text-1);
}

.transparent-bg-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  border-radius: var(--border-radius);
}

.dark .transparent-bg-container {
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
}
</style>
