<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const { product } = defineProps({ product: Object });
const isFavorite = ref(product.isFavorite);
const inCart = ref(product.inCart);
const toast = useToast();

function togglePatch(key, value) {
    try {
        if (key === 'isFavorite') {
            axios.patch(
                `https://23b81715610c7bf4.mokky.dev/products/${product.id}`,
                {
                    isFavorite: value,
                },
            );
        } else {
            axios.patch(
                `https://23b81715610c7bf4.mokky.dev/products/${product.id}`,
                {
                    inCart: value,
                },
            );
        }
    } catch (e) {
        console.error('Failed to patch data', e);
        toast.error('Failed');
    } finally {
        if (value) {
            toast.success('Added');
        } else {
            toast.success('Removed');
        }
    }
}

async function toggleIsFav() {
    isFavorite.value = !isFavorite.value;
    togglePatch('isFavorite', isFavorite.value);
}
function toggleInCart() {
    inCart.value = !inCart.value;
    togglePatch('inCart', inCart.value);
}
</script>

<template>
    <div
        class="pt-5 pb-8 px-[30px] flex flex-col items-center justify-between rounded-3xl border border-gray-200 relative transition lg:hover:-translate-y-2.5 lg:hover:shadow-card-shadow"
    >
        <img
            :src="`/icons/like-${!isFavorite ? 1 : 2}.svg`"
            alt="Heart icon"
            aria-label="Add to favorites"
            class="absolute top-7 left-7 w-8 h-8 object-contain transition cursor-pointer hover-and-click"
            @click="toggleIsFav"
        />
        <img
            :src="`/images${product.imageUrl}`"
            alt="sneakers"
            aria-label="Add to favorites"
            class="w-3/4 object-contain"
        />
        <h3 class="my-3.5">{{ product.title }}</h3>
        <div class="flex justify-between items-center w-full">
            <div class="flex flex-col">
                <span class="text-gray-400 text-sm">Цена:</span>
                <strong>{{ product.price }} руб.</strong>
            </div>
            <img
                :src="`/icons/${inCart ? 'checked' : 'plus'}.svg`"
                alt="Plus Icon"
                aria-label="Add to cart"
                class="w-8 h-8 object-contain transition cursor-pointer hover-and-click"
                @click="toggleInCart"
            />
        </div>
    </div>
</template>

<style scoped></style>
