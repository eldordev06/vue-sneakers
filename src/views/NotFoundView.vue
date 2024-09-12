<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

const router = useRouter();
</script>

<template>
    <section class="text-center flex flex-col justify-center items-center h-96">
        <Icon
            icon="prime:exclamation-triangle"
            class="text-yellow-500 text-7xl mb-5"
        />
        <div class="bg-text-gradient-bg bg-clip-text">
            <h1 class="text-6xl font-bold mb-4 text-transparent">
                404 Not Found
            </h1>
            <p class="text-xl mb-5 text-transparent">
                This page does not exist
            </p>
        </div>
        <div class="flex gap-5 mt-6">
            <RouterLink
                to=""
                @click="$router.back()"
                class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 flex items-center gap-2"
            >
                <Icon
                    icon="prime:arrow-left"
                    class="text-xl"
                />
                <span>Go Back</span>
            </RouterLink>
            <RouterLink
                to="/"
                class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 flex items-center gap-2"
            >
                <Icon
                    icon="prime:home"
                    class="text-xl"
                />
                <span>Home Page</span>
            </RouterLink>
        </div>
    </section>
</template>

<style scoped></style>
