import type { Ref } from 'vue';

/**
 * Menubar 组件提供给子组件的数据类型
 */
export interface MenubarType {
  /**
   * 打开指定菜单
   */
  open: (menuId: string) => void;
  
  /**
   * 关闭当前打开的菜单
   */
  close: () => void;
  
  /**
   * 当前打开的菜单ID
   */
  openMenu: Ref<string | null>;
  
  /**
   * 是否禁用整个菜单栏
   */
  disabled: boolean;
}

/**
 * MenubarMenu 组件提供给子组件的数据类型
 */
export interface MenubarMenuType {
  /**
   * 菜单的唯一标识符
   */
  menuId: string;
  
  /**
   * 父组件 Menubar 提供的数据
   */
  menubar: MenubarType;
}