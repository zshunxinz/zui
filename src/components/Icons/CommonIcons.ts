import { registerIcon } from './index';

// 注册常见图标
// 参考 lucide.dev 的图标设计

export const registerCommonIcons = () => {
  // 基础图标
  registerIcon('check', 'M20 6 9 17l-5-5');
  registerIcon('x', 'M18 6 6 18M6 6l12 12');
  registerIcon('plus', 'M12 5v14M5 12h14');
  registerIcon('minus', 'M5 12h14');
  registerIcon('arrowRight', 'M5 12h14M12 5l7 7-7 7');
  registerIcon('arrowLeft', 'M19 12H5M12 5l-7 7 7 7');
  registerIcon('arrowUp', 'M12 19V5M5 12l7-7 7 7');
  registerIcon('arrowDown', 'M12 5v14M5 12l7 7 7-7');

  // 用户相关图标
  registerIcon('user', 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2');
  registerIcon(
    'users',
    'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7h6M9 11h6M12 15h.01'
  );
  registerIcon(
    'userPlus',
    'M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M16 3.13a4 4 0 1 1-7.75 2.12L12 3z'
  );

  // 文件相关图标
  registerIcon(
    'file',
    'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6M8 18h8M8 14h8M8 10h8'
  );
  registerIcon('folder', 'M3 13h18v-2H3v2M3 6v2h18V6M3 19h18v-2H3v2');

  // 系统相关图标
  registerIcon(
    'settings',
    'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z'
  );
  registerIcon('gear', 'M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z M12 8v8M8 12h8');
  registerIcon(
    'bell',
    'M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0'
  );

  // 搜索相关图标
  registerIcon(
    'search',
    'M21 21l-6-6M10.5 16.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z'
  );

  // 更多图标可以根据需要添加
};

// 立即注册常见图标
registerCommonIcons();
