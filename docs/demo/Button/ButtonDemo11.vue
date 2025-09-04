<template>
  <div class="button-group">
    <Button :loading="true">自动加载按钮</Button>
    <Button bg :loading="true">次要加载按钮</Button>
    <Button border :loading="true">边框加载按钮</Button>
    <Button outline :loading="true">轮廓加载按钮</Button>
    <Button text :loading="true">文字加载按钮</Button>
    <Button :loading="true" :loadingText="'加载中...'">自定义加载文本</Button>
  </div>
</template>