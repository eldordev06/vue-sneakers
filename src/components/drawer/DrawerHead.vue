<script setup>
import { Icon } from '@iconify/vue';

defineProps({ closeAndAnimateDrawer: Function });
</script>

<template>
    <div class="mb-[30px] flex items-center gap-2">
        <button aria-label="close cart">
            <Icon
                icon="formkit:arrowleft"
                class="text-gray-500 cursor-pointer transition lg:hover:text-black lg:hover:-translate-x-1 active:-translate-x-2 active:text-black"
                @click="closeAndAnimateDrawer"
            />
        </button>
        <h1 class="text-2xl font-bold select-none">DRAWER</h1>
    </div>
</template>

<style scoped></style>
