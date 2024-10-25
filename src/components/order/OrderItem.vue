<script setup>
defineProps({ product: Object });
</script>

<template>
    <div
        class="pt-5 pb-8 px-[30px] flex flex-col items-center justify-between rounded-3xl border border-gray-200 transition lg:hover:-translate-y-2.5 lg:hover:shadow-card-shadow"
    >
        <img
            :src="`/images${product.imageUrl}`"
            alt="Sneakers"
            class="w-3/4 object-contain"
        />
        <h3 class="my-3.5">{{ product.title }}</h3>
        <div class="flex justify-between items-center w-full">
            <div class="flex flex-col">
                <span class="text-gray-400 text-sm">Цена:</span>
                <strong>
                    {{ product.price.toLocaleString().replace(',', ' ') }} руб.
                </strong>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
