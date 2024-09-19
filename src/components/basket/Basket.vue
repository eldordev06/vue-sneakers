<script setup>
import BasketItem from '@/components/basket/BasketItem.vue';

defineProps({ products: Array });
</script>

<template>
    <div class="flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        <BasketItem
            v-for="product in products"
            :key="product.id"
            :imageUrl="product.imageUrl"
            :title="product.title"
            :price="product.price"
        />
    </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
