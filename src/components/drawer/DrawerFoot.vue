<script setup>
import { inject } from 'vue';
import { Icon } from '@iconify/vue';

const { totalPrice, taxation, taxPct, createOrder, orderState } =
    inject('drawer');
</script>

<template>
    <div class="mt-[30px]">
        <p class="flex items-center gap-2.5 mb-5">
            <span>Итого:</span>
            <span class="w-full h-0 border border-dashed"></span>
            <span class="text-nowrap font-semibold"
                >{{ totalPrice.toLocaleString().replace(',', ' ') }} руб.</span
            >
        </p>
        <p class="flex items-center gap-2.5">
            <span class="text-nowrap">Налог {{ taxPct + '%' }}:</span>
            <span class="w-full h-0 border border-dashed"></span>
            <span class="text-nowrap font-semibold">
                {{ taxation.toLocaleString().replaceAll(',', ' ') }} руб.
            </span>
        </p>
        <button
            class="disabled:bg-gray-400 disabled:cursor-not-allowed mt-6 lg:hover:bg-lime-400 transition active:bg-lime-300 bg-lime-500 w-full h-16 rounded-2xl text-white font-medium flex items-center justify-center relative select-none"
            :disabled="totalPrice ? false : true"
            @click.once="createOrder"
        >
            <span class="inline-block w-[60%]">
                {{
                    orderState.isCreatingOrder
                        ? 'Подождите, заказ оформляется...'
                        : 'Оформить заказ'
                }}
            </span>
            <Icon
                icon="formkit:arrowright"
                width="30"
                class="absolute right-8 transition"
            />
        </button>
    </div>
</template>

<style scoped>
button:not(:disabled):hover svg {
    @apply lg:translate-x-1;
}
button:not(:disabled):active svg {
    @apply translate-x-2;
}
</style>
