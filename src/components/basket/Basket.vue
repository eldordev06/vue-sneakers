<script setup>
import BasketItem from '@/components/basket/BasketItem.vue';
</script>

<template>
    <div class="flex flex-col gap-5 overflow-y-auto hide-scrollbar">
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
        <BasketItem />
    </div>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
