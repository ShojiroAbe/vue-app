<template>
    <Header />

    <div class="wrapper">
    </div>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './views/TopView.vue'
import Header from './components/header.vue';
</script>

<style scoped>
</style>
