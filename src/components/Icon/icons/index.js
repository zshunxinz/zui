// 静态导入所有SVG图标，避免动态导入导致的MIME类型错误
// 这里仅导入部分常用图标，根据实际需要扩展

import chevronDown from './chevron-down.svg?raw';
import house from './house.svg?raw';
import chartArea from './chart-area.svg?raw';
import users from './users.svg?raw';
import shoppingCart from './shopping-cart.svg?raw';
import box from './box.svg?raw';
import codepen from './codepen.svg?raw';
import user from './user.svg?raw';
import axis3d from './axis-3d.svg?raw';
import userPlus from './user-plus.svg?raw';
import messageCircle from './message-circle.svg?raw';
import settings from './settings.svg?raw';
import creditCard from './credit-card.svg?raw';
import download from './download.svg?raw';
import menu from './menu.svg?raw';
import x from './x.svg?raw';
import chevronUp from './chevron-up.svg?raw';

// 图标映射表，将图标名称映射到SVG内容
const iconMap = {
  'chevron-down': chevronDown,
  'house': house,
  'chart-area': chartArea,
  'users': users,
  'shopping-cart': shoppingCart,
  'box': box,
  'codepen': codepen,
  'user': user,
  'axis-3d': axis3d,
  'user-plus': userPlus,
  'message-circle': messageCircle,
  'settings': settings,
  'credit-card': creditCard,
  'download': download,
  'menu': menu,
  'x': x,
  'chevron-up': chevronUp
};

export default iconMap;
