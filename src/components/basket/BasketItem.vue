<script setup></script>

<template>
    <div class="flex items-end px-5 py-[30px] border rounded-3xl">
        <img
            src="@/assets/images/sneakers/sneakers-1.jpg"
            alt="Sneakers"
            class="w-[70px] aspect-square object-contain mr-5"
        />
        <div>
            <p class="mb-2 text-sm line-clamp-2">
                Мужские Кроссовки Nike Air Max 270
            </p>
            <p class="font-bold text-sm line-clamp-2">12 999 руб.</p>
        </div>
        <button
            aria-label="Remove item from cart"
            class="ml-3 w-8 aspect-square cursor-pointer hover-and-click transition"
        >
            <img
                src="@/assets/icons/close.svg"
                alt="Cross icon"
                class="w-full h-full object-cover"
            />
        </button>
    </div>
</template>

<style scoped></style>
