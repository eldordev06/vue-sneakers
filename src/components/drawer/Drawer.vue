<script setup>
import Basket from '@/components/basket/Basket.vue';
import DrawerFoot from '@/components/drawer/DrawerFoot.vue';
import DrawerHead from '@/components/drawer/DrawerHead.vue';

const { closeDrawer, drawerState } = defineProps({
    closeDrawer: Function,
    drawerState: Object,
});
function closeAndAnimateDrawer() {
    document.querySelector('#drawer-root').classList.add('blur-out');
    document.querySelector('#drawer-content').classList.add('slide-out');
    setTimeout(closeDrawer, 500);
}
</script>

<template>
    <div
        id="drawer-root"
        class="bg-drawer-bg blur-in backdrop-blur-0 fixed top-0 bottom-0 left-0 right-0 z-10 flex"
    >
        <div
            class="flex-grow"
            @click="closeAndAnimateDrawer"
        ></div>
        <div
            id="drawer-content"
            class="h-screen bg-white p-[30px] grid grid-rows-drawer slide-in relative -right-full"
        >
            <DrawerHead :closeAndAnimateDrawer="closeAndAnimateDrawer" />
            <Basket :products="drawerState.products" />
            <DrawerFoot :products="drawerState.products" />
        </div>
    </div>
</template>

<style scoped>
.slide-in {
    animation: forwards slideIn 0.5s ease-in-out;
}

.slide-out {
    animation: forwards slideOut 0.5s ease-in-out;
}

.blur-in {
    animation: forwards blurIn 0.5s ease-in-out;
}

.blur-out {
    animation: forwards blurOut 0.5s ease-in-out;
}

@keyframes slideIn {
    0% {
        right: -100%;
    }
    100% {
        right: 0;
    }
}

@keyframes slideOut {
    0% {
        right: 0;
    }
    100% {
        right: -100%;
    }
}

@keyframes blurIn {
    0% {
        opacity: 0;
        @apply backdrop-blur-0;
    }
    100% {
        opacity: 1;
        @apply backdrop-blur-sm;
    }
}

@keyframes blurOut {
    0% {
        opacity: 1;
        @apply backdrop-blur-sm;
    }
    100% {
        opacity: 0;
        @apply backdrop-blur-0;
    }
}
</style>
