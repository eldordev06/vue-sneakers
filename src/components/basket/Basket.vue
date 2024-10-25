<script setup>
import { inject } from "vue";
import BasketItem from '@/components/basket/BasketItem.vue';

const { localProducts } = inject('drawer');
const addToCart = inject('addToCart');
</script>

<template>
    <div :class="`flex flex-col ${localProducts.cart.length ? 'flex-grow' : ''} gap-5 overflow-y-auto hide-scrollbar`" v-auto-animate>
    <BasketItem
            v-for="product in localProducts.cart"
            :key="product.id"
            :product="product"
            @add-to-cart="addToCart"
        />
    </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
