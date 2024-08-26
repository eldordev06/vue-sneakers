<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div class="min-h-screen bg-[#E7F6FF] p-[85px]">
        <div class="bg-white rounded-[20px] min-h-full">
            <Navbar />
            <RouterView />
        </div>
    </div>
</template>

<style scoped></style>
