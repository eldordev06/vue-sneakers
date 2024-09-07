<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import Card from '@/components/card/Card.vue';

defineProps({
    state: Object,
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
