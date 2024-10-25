import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import FavoritesView from '@/views/FavoritesView.vue';
import ProfileView from '@/views/ProfileView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/favorites',
            name: 'favorite-products',
            component: FavoritesView,
        },
        {
            path: '/profile',
            name: 'profile',
            component: ProfileView,
        },
        {
            path: '/:catchall(.*)',
            name: 'not-found',
            component: NotFoundView,
        },
    ],
});

export default router;
