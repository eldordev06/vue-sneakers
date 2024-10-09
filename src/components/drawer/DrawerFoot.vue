<script setup>
import { Icon } from '@iconify/vue';

defineProps({ products: Object })
</script>

<template>
    <div class="mt-[30px]">
        <p class="flex items-center gap-2.5 mb-5">
            <span>Итого:</span>
            <span class="w-full h-0 border border-dashed"></span>
            <span class="text-nowrap font-semibold">21 498 руб.</span>
        </p>
        <p class="flex items-center gap-2.5">
            <span class="text-nowrap">Налог 5%:</span>
            <span class="w-full h-0 border border-dashed"></span>
            <span class="text-nowrap font-semibold">1074 руб.</span>
        </p>
        <button
            class="disabled:bg-gray-400 disabled:cursor-not-allowed mt-6 hover:bg-lime-400 transition active:bg-lime-300 bg-lime-500 w-full h-16 rounded-2xl text-white font-medium flex items-center justify-center relative"
            :disabled="products.length ? false : true"
        >
            <span>Оформить заказ</span>
            <Icon
                icon="formkit:arrowright"
                width="30"
                class="absolute right-8 transition"
            />
        </button>
    </div>
</template>

<style scoped>
button:hover svg {
    @apply translate-x-2;
}
button:active svg {
    @apply translate-x-4;
}
</style>
