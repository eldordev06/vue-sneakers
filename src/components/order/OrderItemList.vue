<script setup>
import OrderItem from './OrderItem.vue';

defineProps({ products: Array });
</script>

<template>
    <div v-auto-animate>
        <div
            class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-5"
            v-auto-animate
        >
            <OrderItem
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        </div>
    </div>
</template>

<style scoped></style>
