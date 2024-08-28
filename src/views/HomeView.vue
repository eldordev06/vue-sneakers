<script setup>
import CardList from '@/components/CardList.vue';
</script>

<template>
    <main class="px-10 sm:px-[60px]">
        <div
            class="flex flex-col md:flex-row gap-3 items-center md:justify-between py-10"
        >
            <h1 class="text-3xl font-bold text-center">Все кроссовки</h1>
            <div class="flex border">
                <img
                    src="@/assets/icons/search.svg"
                    alt="Search icon"
                />
                <input type="text" />
            </div>
        </div>
        <CardList />
    </main>
</template>

<style scoped></style>
