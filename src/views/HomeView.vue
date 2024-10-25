<script setup>
import { Icon } from '@iconify/vue';
import CardList from '@/components/card/CardList.vue';

defineProps({ state: Object, filters: Object });
</script>

<template>
    <div
        class="flex flex-col lg:flex-row gap-3 items-center md:justify-between pt-5 pb-8"
    >
        <h1 class="text-3xl font-bold text-center">Все кроссовки</h1>
        <div class="flex flex-col md:flex-row gap-3 items-center">
            <select
                name="sort"
                id="sort"
                class="border-2 focus:border-gray-400 rounded-xl text-gray-500 outline-none h-11 px-5"
                aria-label="sort sneakers"
                v-model="filters.sortBy"
            >
                <option value="title">По названию</option>
                <option value="price">По цене (дешёвые)</option>
                <option value="-price">По цене (дорогие)</option>
            </select>
            <label
                for="search"
                class="flex border-2 transition items-center gap-5 px-5 h-11 rounded-xl input-focus cursor-pointer"
            >
                <Icon
                    icon="iconamoon:search-bold"
                    class="text-gray-300 transition"
                    width="18"
                />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Поиск..."
                    class="outline-none text-gray-500"
                    v-model="filters.searchQuery"
                />
            </label>
        </div>
    </div>
    <CardList :state="state" />
</template>

<style scoped></style>
