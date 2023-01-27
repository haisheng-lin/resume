import { createApp } from 'vue';
import '@/assets/styles/reset.less';
import '@/assets/styles/base.less';
import i18n from '@/i18n';
import App from './App.vue';

// for vite-plugin-svg-icons
import 'virtual:svg-icons-register';

createApp(App).use(i18n).mount('#app');
