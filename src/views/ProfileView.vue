<script setup>
import { inject } from 'vue';
import InfoBlock from '@/components/InfoBlock.vue';
import OrderList from '@/components/order/orderList.vue';

const orders = inject('orders');
</script>

<template>
    <div v-if="orders.length">
        <h1 class="pt-5 text-3xl font-bold text-center md:text-start">
            Мои заказы
        </h1>
        <OrderList
            v-for="order in orders"
            :key="order.id"
            :order="order"
            :is-last-order="orders.indexOf(order) + 1 === orders.length"
        />
    </div>
    <div
        v-else
        class="mt-20"
    >
        <InfoBlock
            image-url="/icons/emoji-2.png"
            image-width="70"
            image-height="70"
            image-descr="Sad face emoji."
            title="У вас нет заказов"
            descr="Вы нищеброд? Оформите хотя бы один заказ."
        />
    </div>
</template>

<style scoped></style>
