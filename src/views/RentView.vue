<script setup>
import Header from '../components/Header.vue'

document.title = "AC - Bérlés"

</script>

<template>
  <div class="flex flex-col w-full h-full opacity-65 md:mt-6 md:items-center md:p-2 bg-slate-900 md:w-5/6 lg:w-2/3 md:rounded-xl md:shadow-xl md:shadow-black">
    <Header active="0"/>
    <div class="flex flex-col w-full h-auto px-8 py-4">
    
      <div class="felx text-xl font-bold text-sky-200">Felkérési Szabályzat</div>
      <div class="flex text-md text-white mt-2">
          Kérünk mindenkit, hogy eszközbérlések, felkérések előtt tanulmányozzák át a Felkérési Szabályzatot!
      </div>
      
      <br>
      <br>
    </div>
  </div>
</template>
