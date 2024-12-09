<script setup>
import { inject, watch } from 'vue';
import Basket from '@/components/basket/Basket.vue';
import DrawerFoot from '@/components/drawer/DrawerFoot.vue';
import DrawerHead from '@/components/drawer/DrawerHead.vue';
import InfoBlock from '../InfoBlock.vue';

const { closeDrawer, totalPrice, orderState } = inject('drawer');

function closeAnimate() {
    document.querySelector('#drawer-root').classList.add('blur-out');
    document.querySelector('#drawer-content').classList.add('slide-out');
    setTimeout(closeDrawer, 500);
}
</script>

<template>
    <div
        id="drawer-root"
        class="bg-drawer-bg blur-in backdrop-blur-0 fixed top-0 bottom-0 left-0 right-0 z-20 flex"
    >
        <div
            class="flex-grow"
            @click="closeAnimate"
        ></div>
        <div
            id="drawer-content"
            class="h-full w-full sm:w-[400px] bg-white p-[30px] flex flex-col slide-in relative -right-full"
        >
            <DrawerHead @close-animate="closeAnimate" />
            <Basket />
            <DrawerFoot v-if="totalPrice" />

            <div
                v-else
                class="flex-grow flex"
            >
                <InfoBlock
                    v-if="!orderState.orderId"
                    image-url="/icons/package-icon.png"
                    image-descr="Empty open box."
                    image-width="120"
                    image-height="120"
                    title="Корзина пустая"
                    descr="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
                    @close-animate="closeAnimate"
                />
                <InfoBlock
                    v-else
                    image-url="/icons/order-success-icon.png"
                    image-descr="Paper with a checkmark."
                    image-width="83"
                    image-height="120"
                    title="Заказ оформлен!"
                    title-color="text-lime-500"
                    :descr="`Ваш заказ #${orderState.orderId} скоро будет передан курьерской доставке`"
                    @close-animate="closeAnimate"
                />
            </div>
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
