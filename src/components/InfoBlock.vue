<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

defineProps({
    imageUrl: '',
    imageWidth: '',
    imageHeight: '',
    imageDescr: '',
    title: '',
    titleColor: '',
    descr: '',
});
const emit = defineEmits(['closeAnimate']);
const router = useRouter();
const { isDrawerOpen } = inject('drawer');

function goBack() {
    if (isDrawerOpen.value) {
        emit('closeAnimate');
    } else {
        router.go(-1);
    }
}
</script>

<template>
    <div class="flex flex-col items-center text-center justify-center">
        <img
            :height="imageHeight"
            :width="imageWidth"
            :src="imageUrl"
            :alt="imageDescr"
        />
        <h2 :class="`mt-5 text-2xl font-medium ${titleColor}`">{{ title }}</h2>
        <p class="mt-2.5 text-gray-500">{{ descr }}</p>
        <button
            class="select-none mt-10 lg:hover:bg-lime-400 transition active:bg-lime-300 bg-lime-500 w-60 h-14 rounded-2xl text-white font-medium flex gap-3 items-center justify-center"
            @click="goBack"
        >
            <div
                id="arrow-left"
                class="transition-transform"
            >
                <Icon icon="formkit:arrowleft" />
            </div>
            <span>Вернуться назад</span>
        </button>
    </div>
</template>

<style scoped>
button:not(:disabled):hover #arrow-left {
    @apply lg:-translate-x-1;
}
button:not(:disabled):active #arrow-left {
    @apply -translate-x-2;
}
</style>
