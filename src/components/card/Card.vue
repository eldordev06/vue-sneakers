<script setup>
defineProps({ product: Object });
defineEmits(['addToFavorites', 'addToCart']);
</script>

<template>
    <div
        class="pt-5 pb-8 px-[30px] flex flex-col items-center justify-between rounded-3xl border border-gray-200 relative transition lg:hover:-translate-y-2.5 lg:hover:shadow-card-shadow"
    >
        <img
            v-if="product.isFavorite"
            src="/icons/like-2.svg"
            alt="Heart icon"
            aria-label="Remove from favorites."
            class="absolute top-7 left-7 w-8 h-8 object-contain transition cursor-pointer hover-and-click"
            @click="$emit('addToFavorites', product)"
        />
        <img
            v-else
            :src="`/icons/like-1.svg`"
            alt="Heart icon"
            aria-label="Add to favorites."
            class="absolute top-7 left-7 w-8 h-8 object-contain transition cursor-pointer hover-and-click"
            @click="$emit('addToFavorites', product)"
        />
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
            <img
                v-if="product.inCart"
                src="/icons/checked.svg"
                alt="Check mark icon"
                aria-label="Remove from cart."
                class="w-8 h-8 object-contain transition cursor-pointer hover-and-click"
                @click="$emit('addToCart', product)"
            />
            <img
                v-else
                src="/icons/plus.svg"
                alt="Plus icon"
                aria-label="Add to cart."
                class="w-8 h-8 object-contain transition cursor-pointer hover-and-click"
                @click="$emit('addToCart', product)"
            />
        </div>
    </div>
</template>

<style scoped></style>
