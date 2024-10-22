<script setup>
const { product } = defineProps({ product: Object });
defineEmits(['addToCart']);

</script>

<template>
    <div class="flex items-end px-5 py-[30px] border rounded-3xl"
    >
        <img
            :src="'/images' + product.imageUrl"
            alt="Sneakers"
            class="w-[70px] aspect-square object-contain mr-5"
        />
        <div class="mr-3">
            <p class="mb-2 text-sm line-clamp-2">
                {{ product.title }}
            </p>
            <p class="font-bold text-sm line-clamp-2">
                {{ product.price.toLocaleString().replace(',', ' ') }} руб.
            </p>
        </div>
        <button
            aria-label="Remove sneakers from basket"
            class="ml-auto w-8 aspect-square cursor-pointer hover-and-click transition shrink-0"
            @click="$emit('addToCart', product)"
        >
            <img
                src="/icons/close.svg"
                alt="Cross icon"
                class="w-full h-full object-cover"
            />
        </button>
    </div>
</template>

<style scoped></style>
