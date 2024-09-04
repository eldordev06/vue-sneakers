<script setup>
import CardList from '@/components/card/CardList.vue';
</script>

<template>
    <main class="px-10 sm:px-[60px]">
        <div
            class="flex flex-col lg:flex-row gap-3 items-center md:justify-between py-10"
        >
            <h1 class="text-3xl font-bold text-center">Все кроссовки</h1>
            <div class="flex flex-col md:flex-row gap-3 items-center">
                <select
                    name="sort"
                    id="sort"
                    class="border-2 rounded-xl text-gray-500 outline-none h-11 px-5"
                >
                    <option value="title">По названию</option>
                    <option value="cheap">По цене (дешёвые)</option>
                    <option value="expensive">По цене (дорогие)</option>
                </select>
                <label
                    for="search"
                    class="flex border-2 items-center gap-5 px-5 h-11 rounded-xl input-focus cursor-pointer"
                >
                    <img
                        src="@/assets/icons/search.svg"
                        alt="Search icon"
                    />
                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Поиск..."
                        class="outline-none text-gray-500"
                    />
                </label>
            </div>
        </div>
        <CardList />
    </main>
</template>

<style scoped>
.input-focus:has(input:focus) {
    border-color: #c5c5c5;
}
</style>
