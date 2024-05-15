<script setup>
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<template>
  
  <div class="flex flex-col w-full">
    <div class="flex sm:flex-col md:items-center min-h-screen bg-gradient-to-b from-sky-800 to-black">
      <RouterView />
    </div>
    <Footer />
  </div>
  

</template>
