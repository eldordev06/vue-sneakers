<script setup>
import { reactive } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';
import axios from 'axios';
import Drawer from '@/components/drawer/Drawer.vue';

const drawerState = reactive({
    isOpen: false,
    isLoading: true,
    products: [],
});

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};

function openDrawer() {
    drawerState.isOpen = true;
    document.body.style.overflowY = 'hidden';
    getCartProducts();
}
function closeDrawer() {
    drawerState.isOpen = false;
    document.body.style.overflowY = 'auto';
}
async function getCartProducts() {
    try {
        const { data } = await axios.get(
            `https://23b81715610c7bf4.mokky.dev/products?inCart=true`,
        );
        drawerState.products = data;
    } catch (e) {
        console.error('Error getting cart products', e);
    } finally {
        drawerState.isLoading = false;
    }
}
</script>

<template>
    <Drawer
        v-if="drawerState.isOpen"
        :closeDrawer="closeDrawer"
        :drawerState="drawerState"
    />
    <div
        class="flex flex-col gap-10 sm:gap-5 lg:flex-row lg:justify-between items-center flex-wrap p-5 sm:p-11 border-b min-w-full"
    >
        <div class="flex items-center gap-4">
            <RouterLink to="/">
                <img
                    alt="Logo"
                    aria-label="Go to home page"
                    class="w-10 h-10 object-contain"
                    src="/icons/logo.png"
                />
            </RouterLink>
            <div>
                <h1 class="uppercase text-xl font-bold">vue sneakers</h1>
                <p class="text-gray-400 text-sm">Магазин лучших кроссовок</p>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-5">
            <RouterLink
                to="/"
                :class="[
                    'flex',
                    'items-center',
                    'gap-2.5',
                    'text-sm',
                    'text-gray-400',
                    'transition',
                    'duration-200',
                    'cursor-pointer',
                    'hover:text-gray-600',
                    isActiveLink('/') ? 'text-gray-600' : '',
                ]"
            >
                <Icon
                    icon="prime:home"
                    class="text-xl"
                />
                <span>Главная</span>
            </RouterLink>
            <button
                :class="[
                    'flex',
                    'items-center',
                    'gap-2.5',
                    'text-sm',
                    'text-gray-400',
                    'transition',
                    'duration-200',
                    'cursor-pointer',
                    'hover:text-gray-600',
                    isActiveLink('/cart') ? 'text-gray-600' : '',
                ]"
                @click="openDrawer"
            >
                <Icon
                    icon="prime:shopping-cart"
                    class="text-xl"
                />
                <span>0 руб.</span>
            </button>
            <RouterLink
                to="/favorites"
                :class="[
                    'flex',
                    'items-center',
                    'gap-2.5',
                    'text-sm',
                    'text-gray-400',
                    'transition',
                    'duration-200',
                    'cursor-pointer',
                    'hover:text-gray-600',
                    isActiveLink('/favorites') ? 'text-gray-600' : '',
                ]"
            >
                <Icon
                    icon="prime:heart"
                    class="text-xl"
                />
                <span>Закладки</span>
            </RouterLink>
            <RouterLink
                to="/profile"
                :class="[
                    'flex',
                    'items-center',
                    'gap-2.5',
                    'text-sm',
                    'text-gray-400',
                    'transition',
                    'duration-200',
                    'cursor-pointer',
                    'hover:text-gray-600',
                    isActiveLink('/profile') ? 'text-gray-600' : '',
                ]"
            >
                <Icon
                    icon="gg:profile"
                    class="text-xl"
                />
                <span>Профиль</span>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped></style>
