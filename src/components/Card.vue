<script setup>
import { ref } from 'vue';

const props = defineProps({
    isFavorite: Boolean,
});
const isFavorite = ref(props.isFavorite);
function toggleFav() {
    isFavorite.value = !isFavorite.value;
}
</script>

<template>
    <div
        class="pt-5 pb-8 px-[30px] flex flex-col items-center rounded-3xl border border-gray-200 relative"
    >
        <img
            :src="`src/assets/icons/like-${!isFavorite ? 1 : 2}.svg`"
            alt="Heart icon"
            aria-label="Add to favorites"
            class="absolute top-7 left-7 w-8 h-8 object-contain transition cursor-pointer lg:hover:scale-125 active:scale-150 lg:active:scale-150"
            @click="toggleFav"
        />
        <img
            src="@/assets/images/sneakers/sneakers-1.jpg"
            alt="sneakers"
            aria-label="Add to favorites"
            class="w-3/4 object-contain"
        />
        <h3 class="my-3.5">Мужские Кроссовки Nike Blazer Mid Suede</h3>
        <div class="flex justify-between items-center w-full">
            <div class="flex flex-col">
                <span class="text-gray-400 text-sm">Цена:</span>
                <strong>12 999 руб.</strong>
            </div>
            <img
                src="@/assets/icons/plus.svg"
                alt="Plus Icon"
                aria-label="Add to cart"
            />
        </div>
    </div>
</template>

<style scoped></style>
