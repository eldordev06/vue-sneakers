import './assets/main.css';
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';

createApp(App).use(router).use(Toast, { timeout: 2000 }).mount('#app');
