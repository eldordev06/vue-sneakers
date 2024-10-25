<script setup>
import { reactive, watch } from "vue";
import { Icon } from "@iconify/vue";
import CardList from "@/components/card/CardList.vue";
import InfoBlock from "@/components/InfoBlock.vue";

const { state } = defineProps({ state: Object, filters: Object });

let favState = reactive({
    products: state.products.filter(obj => {
        if(obj.isFavorite === true) {
            return obj
        }
    }),
    isLoading: state.isLoading
});

watch(() => state, () => {
    favState.isLoading = state.isLoading;
    favState.products = state.products.filter(obj => {
        if(obj.isFavorite === true) {
            return obj
        }
    });
});
</script>

<template>
    <div v-if="favState.products.length">
        <div
            class="flex flex-col lg:flex-row gap-3 items-center md:justify-between pt-5 pb-8"
        >
            <h1 class="text-3xl font-bold text-center">Мои закладки</h1>
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
        <CardList :state="favState" />
    </div>
    <div v-else class="mt-20" >
        <InfoBlock image-url="/icons/emoji-1.png" image-width="70" image-height="70" image-descr="Sad face emoji." title="Закладок нет :(" descr="Вы ничего не добавляли в закладки" />
    </div>
</template>

<style scoped></style>