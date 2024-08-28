<script setup>
import { RouterLink, useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';

const isActiveLink = (routePath) => {
    const route = useRoute();
    return route.path === routePath;
};
</script>

<template>
    <div
        class="flex flex-col gap-10 sm:gap-5 lg:flex-row lg:justify-between items-center flex-wrap p-5 sm:p-11 border-b min-w-full"
    >
        <div class="flex items-center">
            <RouterLink to="/">
                <img
                    alt="Logo"
                    aria-label="Go to home page"
                    class="w-10 h-10 object-contain mr-4"
                    src="@/assets/icons/logo.png"
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
            <RouterLink
                to="/cart"
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
            >
                <Icon
                    icon="prime:shopping-cart"
                    class="text-xl"
                />
                <span>0 руб.</span>
            </RouterLink>
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
