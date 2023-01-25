import { createApp } from 'vue';
import '@/assets/styles/reset.less';
import '@/assets/styles/base.less';
import i18n from '@/i18n';
import App from './App.vue';

createApp(App).use(i18n).mount('#app');
