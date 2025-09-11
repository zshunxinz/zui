import { App } from 'vue';
import Icon from './Icon.vue';

Icon.install = (app: App) => {
  app.component(Icon.name || 'Icon', Icon);
};

export default Icon;

export { Icon };
