<script setup>
import { ref } from 'vue';


const props = defineProps(['active']);

const click = ref()

click.value = false

function menuClick() {
  click.value = !click.value
}
</script>

<template>

  <!-- Normál -->
  <div class="hidden md:flex md:flex-col md:items-center md:w-full ">
    <img src="@/assets/acwaves-logo.png" class="flex w-[30%]" >
    <div class="flex flex-row text-teal-100 text-xl gap-6">
      <RouterLink to="/"> <div class="flex cursor-pointer">Kezdőlap</div> </RouterLink>
      <RouterLink to="/course"> <div class="flex cursor-pointer">Tanfolyam</div> </RouterLink>
      <RouterLink to="/rent"> <div class="flex cursor-pointer">Felkérés</div> </RouterLink>
      <RouterLink to="/docs"> <div class="flex cursor-pointer">Dokumentumok</div> </RouterLink>
      <RouterLink to="/contact"> <div class="flex cursor-pointer">Kapcsolat</div> </RouterLink>
    </div>

    <hr class="flex w-full lg:w-[55%] md:w-[70%] my-3 ">
  </div>


  <!-- Mobil -->
    <div class="flex flex-row md:hidden bg-slate-950 px-3 py-1 justify-between">
      <img src="@/assets/acwaves-logo.png" class="flex w-[10%]" >
      <div class="flex text-white items-center text-xl">AC Studio & Live</div>
      <div class="flex text-white items-center text-4xl cursor-pointer select-none" @click="menuClick()">☰</div>
    </div>

    <div :class="click == '0' ? 'hidden ' : 'flex '" class=" md:hidden text-white text-lg items-center gap-2 w-full flex-col bg-slate-950">
      <RouterLink to="/"> <div class="flex cursor-pointer">Kezdőlap</div> </RouterLink>
      <RouterLink to="/course"> <div class="flex cursor-pointer">Tanfolyam</div> </RouterLink>
      <RouterLink to="/rent"> <div class="flex cursor-pointer">Felkérés</div> </RouterLink>
      <RouterLink to="/docs"> <div class="flex cursor-pointer">Dokumentumok</div> </RouterLink>
      <RouterLink to="/contact"> <div class="flex cursor-pointer">Kapcsolat</div> </RouterLink>
    </div>

</template>
