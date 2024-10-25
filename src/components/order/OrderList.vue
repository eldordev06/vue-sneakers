<script setup>
import { inject } from 'vue';
import OrderItemList from '@/components/order/OrderItemList.vue';

defineProps({ order: Object, isLastOrder: Boolean });

const deleteOrder = inject('deleteOrder');
</script>

<template>
    <div
        class="pb-5"
        v-auto-animate
    >
        <div
            :class="`${isLastOrder ? '' : 'border-b-8 border-double border-gray-600'} py-8 md:py-10`"
        >
            <div
                class="flex flex-col items-center md:flex-row gap-5 md:items-start justify-between lg:items-center mb-8 border-b-2 pb-5 md:pb-1"
            >
                <div class="flex flex-col items-center sm:items-start gap-1">
                    <h2 class="font-medium flex items-center gap-2.5">
                        <span class="text-2xl">Заказ:</span>
                        <i class="text-3xl text-green-500">#{{ order.id }}</i>
                    </h2>
                    <div class="flex gap-2.5">
                        <span class="text-gray-400">Цена заказа:</span>
                        <strong class="text-nowrap">
                            {{
                                order.totalPrice
                                    .toLocaleString()
                                    .replace(',', ' ')
                            }}
                            руб.
                        </strong>
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-4">
                    <!-- <button class="bg-green-500 px-6 py-3 select-none rounded-xl text-white transition font-medium in active:shadow-inner active:bg-green-600 active:shadow-black shadow lg:hover:shadow-black shadow-black lg:hover:shadow-md">
                        Изменить
                    </button> -->
                    <button
                        class="bg-red-500 px-6 py-3 select-none rounded-xl text-white transition font-medium in active:shadow-inner active:bg-red-600 active:shadow-black shadow lg:hover:shadow-black shadow-black lg:hover:shadow-md"
                        @click="deleteOrder(order)"
                    >
                        Удалить
                    </button>
                </div>
            </div>
            <OrderItemList :products="order.products" />
        </div>
    </div>
</template>

<style scoped></style>
