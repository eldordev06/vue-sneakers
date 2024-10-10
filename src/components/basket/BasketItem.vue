<script setup>
import axios from 'axios';
import { useToast } from 'vue-toastification';

const { id } = defineProps({
    imageUrl: String,
    title: String,
    price: Number,
    id: Number,
});
const toast = useToast();
async function removeItem() {
    try {
        await axios.patch(`https://23b81715610c7bf4.mokky.dev/products/${id}`, {
            inCart: false,
        });
        toast.success('Removed');
        document.getElementById('basket-item-' + id).style.display = 'none';
    } catch (e) {
        console.error('Error removing product', e);
        toast.error('Failed');
    }
}
</script>

<template>
    <div
        :id="'basket-item-' + id"
        class="flex items-end px-5 py-[30px] border rounded-3xl"
    >
        <img
            :src="'/images' + imageUrl"
            alt="Sneakers"
            class="w-[70px] aspect-square object-contain mr-5"
        />
        <div class="mr-3">
            <p class="mb-2 text-sm line-clamp-2">
                {{ title }}
            </p>
            <p class="font-bold text-sm line-clamp-2">
                {{ price.toLocaleString().replace(',', ' ') }} руб.
            </p>
        </div>
        <button
            aria-label="Remove item from cart"
            class="ml-auto w-8 aspect-square cursor-pointer hover-and-click transition shrink-0"
            @click="removeItem"
        >
            <img
                src="/icons/close.svg"
                alt="Cross icon"
                class="w-full h-full object-cover"
            />
        </button>
    </div>
</template>

<style scoped></style>
