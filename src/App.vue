<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { inject, onMounted, reactive, ref } from 'vue';

const state = reactive({
    products: Array,
    isLoading: true,
});
const fetchData = inject('fetchData');
onMounted(async () => await fetchData(state, '', ref('title')));
</script>

<template>
    <div class="min-h-screen bg-[#E7F6FF] p-4 sm:p-[85px]">
        <div class="bg-white rounded-[20px] min-h-screen container">
            <Navbar />
            <RouterView :state="state" />
        </div>
    </div>
</template>

<style scoped></style>
