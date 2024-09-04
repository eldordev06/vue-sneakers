<script setup>
import Basket from '@/components/basket/Basket.vue';
import DrawerFoot from '@/components/drawer/DrawerFoot.vue';
import DrawerHead from '@/components/drawer/DrawerHead.vue';
</script>

<template>
    <div
        class="bg-drawer-bg fixed top-0 bottom-0 left-0 right-0 z-10 flex justify-end"
    >
        <div class="h-screen bg-white p-[30px] grid grid-rows-drawer">
            <DrawerHead />
            <Basket />
            <DrawerFoot />
        </div>
    </div>
</template>

<style scoped></style>
