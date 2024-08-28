<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div class="min-h-screen bg-[#E7F6FF] p-4 sm:p-[85px]">
        <div class="bg-white rounded-[20px] min-h-screen container">
            <Navbar />
            <RouterView />
        </div>
    </div>
</template>

<style scoped></style>
