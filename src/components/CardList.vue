<script setup>
import Card from '@/components/Card.vue';
</script>

<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 pb-5">
        <Card
            v-for="n in [0, 0, 0, 0, 0, 0]"
            :is-favorite="n"
        />
    </div>
</template>

<style scoped></style>
