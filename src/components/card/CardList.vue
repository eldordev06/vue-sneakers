<script setup>
import { onMounted, reactive } from 'vue';
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Card from '@/components/card/Card.vue';

const state = reactive({
    products: [],
    isLoading: true,
});

onMounted(async () => {
    try {
        const response = await axios.get(
            'https://23b81715610c7bf4.mokky.dev/products',
        );
        state.products = response.data;
    } catch (error) {
        console.error('Error fetching products', error);
    } finally {
        state.isLoading = false;
    }
});
</script>

<template>
    <div
        v-if="state.isLoading"
        class="text-center text-gray-500 py-6"
    >
        <PulseLoader />
    </div>
    <div
        v-else
        class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-5"
    >
        <Card
            v-for="product in state.products"
            :key="product.id"
            :product="product"
        />
    </div>
</template>

<style scoped></style>
