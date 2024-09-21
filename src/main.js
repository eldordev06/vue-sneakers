import './assets/main.css';
import 'vue-toastification/dist/index.css';
import Toast from 'vue-toastification';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/index.js';
import axios from 'axios';

const app = createApp(App);
app.use(router);
app.use(Toast, { timeout: 2000 });
app.provide('fetchData', fetchData);
app.mount('#app');

async function fetchData(state = {}, searchQuery = '', sortBy = '') {
    const searchQueryForApi = searchQuery.value
        ? `&title=*${searchQuery.value}*`
        : '';
    const sortByForApi = sortBy.value ? `?sortBy=${sortBy.value}` : '';

    try {
        const res = await axios.get(
            `https://23b81715610c7bf4.mokky.dev/products${sortByForApi + searchQueryForApi}`,
        );
        state.products = res.data;
    } catch (error) {
        console.error('Error fetching data', error);
    } finally {
        state.isLoading ? (state.isLoading = false) : null;
    }
}
