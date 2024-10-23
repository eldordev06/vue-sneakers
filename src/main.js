import './assets/main.css';
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';
import { createApp } from 'vue';
import router from '@/router/index.js';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue';

const app = createApp(App);

app.use(router);
app.use(Toast, { timeout: 3000 });
app.use(autoAnimatePlugin);
app.mount('#app');
